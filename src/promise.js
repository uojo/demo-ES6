
if (0) {
  const timeout = (ms) => new Promise(resolve => {
    setTimeout(() => resolve(ms), ms)
    return 1.2
  })

  const fn1 = async () => {
    let r1 = await timeout(100)
    console.log('r1', r1)
    let r2 = await timeout(200)
    console.log('r2', r2)
    console.log(3)
  }

  const fn2 = async () => console.log(1)
  fn1()
  fn2()
  console.log(2)
  // output: 1 2 100 200 3
}

// 定义 new Promise 时，内部代码除 resolve 、 reject 外都会立即执行。
if (0) {
  const fn0 = (e) => {
    console.log(e)
  }
  const fn1 = () => new Promise(resolve => resolve(fn0(1)))

  fn1()
  console.log(2)
  // 1 2
}

// 同步方法同步执行
if (0) {
  const f = (e) => {
    // setTimeout(() => {
    console.log(e)
    // }, 1000)
  }
  const p = () => Promise.resolve(f(1))
  p()
  console.log(2)
}

// async 方法执行时，会等体内所有 await 或 return 后结束。
if (0) {
  const f = (e) => {
    console.log(e)
  }

  const p = async () => f(1)
  p()
  console.log(2)
}

// 同步方法异步执行，then
if (0) {
  const f = (e) => {
    console.log(e)
  }

  Promise.resolve(2).then(f)
  console.log(1)
}

// 执行顺序
if (0) {
  const timeout = function (ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms, 3)
    })
  }

  timeout(2).then(res => {
    console.log(res)
  })

  console.log('1', 1)
}

/**
 * 声明 Promise 后，除 resolve 和 reject 内部逻辑立即执行
 */
if (0) {
  const p1 = new Promise((resolve, reject) => {
    console.log('1', 1)
    resolve()
    console.log('2', 2)
  })
  p1.then(() => {
    console.log('4', 4)
  })
  console.log('3', 3)
}

/**
 * 当 resolve 的参数为另一个 promise，那么该 promise 的状态由那个传入的 promise 决定
 */
if (0) {
  const p1 = new Promise((resolve, reject) => {
    reject(new Error('error message!'))
  })

  const p2 = new Promise((resolve, reject) => {
    console.log('resolve:', resolve)
    resolve(p1)
  })

  p2.then(e => {

  }).catch(e => {
    console.log('e', e)
  })
}

if (0) {
  const p1 = Promise.resolve(1)
    .then(e1 => {
      // console.log('e1', e1)
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ notRealError: true })
    })
    .then(e2 => {
      // console.log('e2', e2)
    })
    // eslint-disable-next-line handle-callback-err
    .catch(err => {
      // console.log('err', err)
    })
  // console.log('p1', p1.PromiseStatus)
  // console.log('p1', p1.PromiseValue)
}

if (0) {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'hello')
  })
  const p2 = new Promise((resolve, reject) => {
    new Promise((resolve, reject) => {
      setTimeout(reject, 100, new Error('fail...'))
    }).catch(err => {
      resolve(err)
    })
  })
  // 当所有 promise 实例完成后执行 then
  Promise.all([p1, p2]).then(values => {
    for (let val of values) {
      console.log('val', typeof val)
    }
  }).catch(err => {
    console.log('err', err)
  })
}

if (1) {
  /**
   * await 跟 promise 或 async 函数 时，返回包括：
   *  resolve() 的入参。
   *  then 内的 return。
   *  当 promise 内 throw 异常时，catch 内的 return
   * 
   * await 跟 非 promise 的函数，且内部存在 return 语句，则返回 return 值。
   * await 跟的函数内如果抛出异常，将会中断执行之后的语句。
   * async 修饰的函数执行后，将返回一个 promise，无论函数内是否存在 await 或 return。
   * async 函数当被 await 修饰时，将返回 return 值。
   */
  const throwError = () => {
    throw Error('error-1')
  }
  const resolveFn = () => new Promise(resolve => resolve('resolveArg')).then(res => 'resolveArg-2')
  const throwCatchFn = () => new Promise(() => { throw new Error('rejectArg') }).catch(err => 'rejectArg-2')
  const rejectFn = () => new Promise((resolve, reject) => {
    reject('rejectCatchArg')
  })
  const rejectCatchFn = () => rejectFn().catch(err => 'rejectCatchArg-2')
  const asyncReturnReject = async () => { return Promise.reject('asyncReturnReject-1') }

  const returnFn = async () => { console.log('apple'); return 1 }
  // console.log(returnFn()); // Promise { 1 }
  0 && (async () => {
    console.log(await returnFn()); // 1
  })()

  const consoleFn = async () => { console.log('apple'); }
  // console.log(typeof consoleFn === 'function'); // true
  // console.log(consoleFn()); // Promise { undefined } ，函数体内没有状态变更的代码

  // 注意以下代码的执行顺序
  if (0) {
    console.log((async () => {
      console.log(await resolveFn()) // 3.resolveArg
      return 1 // 无用，上下文内包含 await，将会返回 resolve、reject 的入参
    })()) // 1.Promise { <pending> } ，体内存在 await

    console.log((async () => {
      console.log(await throwCatchFn()) // 4.rejectArg
      // console.log(await rejectFn()) // 5. 一堆报错，并且阻塞下文的执行
      console.log(await rejectCatchFn()) // 6.rejectCatchArg-2
      return 2 // 无用
    })()) // // 2.Promise { <pending> }
  }

  if (1) {
    console.log((async () => {
      console.log(await asyncReturnReject())
      console.log(2);
    })())
  }

}