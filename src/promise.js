if (false) {
  const timeout = (ms) => {
    return new Promise(resolve => {
      console.log(1)
      // setTimeout(resolve, ms)
      setTimeout(() => resolve(4), ms)
      return 1.2
    })
  }

  const p = async () => {
    let r1 = await timeout(1000)
    console.log('TCL: p -> r1', r1)
    let r2 = await timeout(2000)
    console.log('TCL: p -> r2', r2)
    console.log(5)
  }

  const a2 = async () => console.log(2)
  p()
  a2()
  console.log(3)

  // output: 1234145
}

// 定义 new Promise 时，内部代码除 resolve 、 reject 外都会立即执行。
if (false) {
  const f = (e) => {
    console.log(e)
  }
  const p = () => new Promise(resolve => {
    resolve(f(1))
  })
  p()
  console.log(2)
}

// 同步方法同步执行
if (false) {
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
if (false) {
  const f = (e) => {
    console.log(e)
  }

  const p = async () => f(1)
  p()
  console.log(2)
}

// 同步方法异步执行，then
if (false) {
  const f = (e) => {
    console.log(e)
  }

  Promise.resolve(2).then(f)
  console.log(1)
}

// 执行顺序
if (false) {
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
if (false) {
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
if (false) {
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
