/* eslint-disable standard/no-callback-literal */
/* eslint-disable one-var */
class EventEmitter {
  constructor () {
    this.events = {}
  }

  on (event, callback) {
    let callbacks = this.events[event] || []
    callbacks.push(callback)
    this.events[event] = callbacks

    return this
  }

  off (event, callback) {
    let callbacks = this.events[event]
    this.events[event] = callbacks && callbacks.filter(fn => fn !== callback)

    return this
  }

  emit (event, ...args) {
    let callbacks = this.events[event]
    callbacks.forEach(fn => {
      fn(...args)
    })

    return this
  }

  once (event, callback) {
    // 自定义回调，且执行一次后就取消订阅
    let wrapFun = function (...args) {
      callback(...args)

      this.off(event, wrapFun)
    }
    this.on(event, wrapFun)

    return this
  }
}
