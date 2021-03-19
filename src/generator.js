const log = console.log

function asyncFn(val, time = 1) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(++val)
    }, time)
  }).then(e => {
    return e
  })
}

// ES6:function*/yield
if (0) {
  function* gen1(val) {
    log(0, val)
    // => 0,10
    let v1 = yield asyncFn(val)
    log(1, v1)
    // => 1,11
    let v2 = yield asyncFn(v1)
    log(2, v2)
    // => 2,12
    return 3
  }

  const g1 = gen1(10)
  // g1 => generator
  const return1 = g1.next()
  // return1 => Promise(asyncFn...)
  return1.value.then(e => {
    // e => 11
    const return2 = g1.next(e)
    return2.value.then(e => {
      // e => 12
      const rlt = g1.next(e)
      log('g1.rlt', rlt.value)
      // => 3
    })
  })
}

// ES7:async/await
if (0) {
  async function gen2(val) {
    let v1 = await asyncFn(val)
    let v2 = await asyncFn(v1)
    // log('gen2 >',v1,v2)
    return 3
  }
  const g2 = gen2(5)
  // g2 => Promise(asyncFn...)
  // log( 'es7.async >', g2 );
  g2.then(e => {
    log('g2.rlt', e)
  })
}

const timeFn = async function (time) {
  await asyncFn(time, time)
}
const queues = [3, 2, 1]

// 无序执行
if (0) {
  for (let n of queues) {
    log(n, '>')
    timeFn(n)
  }
}

// 有序执行
const qfn = async function () {
  for (let n of queues) {
    log(n, '>')
    let j = await asyncFn(n, n)
  }
}
0 && qfn()

const xfn = function (qs) {
  let i = 0
  const yfn = function (val) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(val)
      }, val)
    })

    if (i < qs.length) {
      i++
      // 继续执行
      yfn(qs[i])
    } else {
      // 终止
    }
  }
  yfn(qs[i])
}

// xfn(queues);

// 测试数据顺序
var rdm = require('./utils/random')
const fn1 = function (a, cb) {
  setTimeout(function () {
    // log(a)
    cb(a)
  }, rdm(1, 5))
}

const fn2 = function (a) {
  setTimeout(function () {
    fn1(a.i, function (e) {
      log(a.i - 1, e)
    })
  }, rdm(1, 5))
}

for (let i = 0; i < 10; i++) {
  // fn2(i)
  fn2({ i: i })
}
