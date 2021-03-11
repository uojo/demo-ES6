// 手写 promise 类

/**
 * 
 * @param {*} cb 
 */
function PromiseA(cb) {
  const self = this
  let state = 'pending'
  let cbs = []
  let resCache = undefined

  // 实现：将回调入栈；判断是否执行 resolve
  self.then = function (cb) {
    console.log('then');
    cbs.push(cb)
    if (state === 'fulfilled') {
      resolve(resCache)
    }
    return self
  }

  // 实现：变更状态；出栈执行回调函数；判断是否继续递归执行自己
  function resolve(res) {
    console.log('resolve', res);
    state = 'fulfilled'
    resCache = res
    // console.log('resolve', cbs.length);
    if (cbs.length > 0) {
      let r = cbs.shift()(res)
      resolve(r)
    }
  }

  cb(resolve)
  return self
}


const PromiseClass = Promise || PromiseA

new PromiseClass((resolve, reject) => {
  // setTimeout(() => {
  resolve(0)
  // }, 1);
}).then(res => {
  console.log('P.then.1', res);
  // return 1
}).then(res => {
  console.log('P.then.2', res);
})

// 功能介绍：Promise 实例化时会执行回调，入参为内部方法 resolve。之后按顺序执行外部方法 then。
// 外部方法 then：实现将参数回调缓存进行内部回调栈中，并判断状态为完成时，继续执行 resolve 方法，最后返回 this；所以then方法是按需执行的。
// 内部方法 resolve：变更为完成状态，并将传入数据作为响应值缓存起来，再从回调栈中出栈一个回调并执行。

