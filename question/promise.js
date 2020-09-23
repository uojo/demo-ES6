// 手写 promise 类

/**
 * 
 * @param {*} cb 
 */
function PromiseA(cb) {
  const self = this
  let state = 'pending'
  let resCache = null
  let cbs = []

  self.then = function (cb) {
    cbs.push(cb)
    if (state === 'fulfilled') {
      resolve(resCache)
    }
    return self
  }

  function resolve(res) {
    state = 'fulfilled'
    resCache = res
    // console.log('resolve', cbs.length);
    if (cbs.length > 0) {
      let r = cbs.pop()(res)
      if (r !== undefined) {
        resCache = r
      }
    }
  }

  cb(resolve)
  return self
}



new PromiseA((resolve, reject) => {
  resolve(1)
}).then(res => {
  console.log('PromiseA.then.1', res);
  return 2
}).then(res => {
  console.log('PromiseA.then.2', res);
})