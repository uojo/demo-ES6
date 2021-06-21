/* eslint-disable no-extend-native */
const obj1 = {}
function fn1(params) {
  console.log('fn1.this === global', this === global)
  console.log('fn1.this === obj1', this === obj1, arguments)
  console.log('fn1.arguments', arguments)
}

// call函数实现
if (0) {
  Function.prototype.myCall = function (context) {
    // 判断调用对象
    if (typeof this !== 'function') {
      console.error('type error')
    }

    // 获取参数
    let args = [...arguments].slice(1),
      result = null

    // 判断 context 是否传入，如果未传入则设置为 window
    context = context || window

    // 将调用函数设为对象的方法
    context.fn = this

    // 调用函数
    result = context.fn(...args)

    // 将属性删除
    delete context.fn

    return result
  }
}


// apply 函数实现
if (0) {
  Function.prototype.myApply = function (context) {
    // 判断调用对象是否为函数
    if (typeof this !== 'function') {
      throw new TypeError('Error')
    }

    let result = null

    // 判断 context 是否存在，如果未传入则为 window
    context = context || window

    // 将函数设为对象的方法
    context.fn = this

    // 调用方法
    if (arguments[1]) {
      result = context.fn(...arguments[1])
    } else {
      result = context.fn()
    }

    // 将属性删除
    delete context.fn

    return result
  }
}


// 使用 apply 实现 bind 
if (0) {
  Function.prototype.myBind = function (context) {
    // 判断调用对象是否为函数
    if (typeof this !== 'function') {
      throw new TypeError('Error')
    }

    // 获取参数
    var args = [...arguments].slice(1),
      fn = this

    return function Fn() {
      // 根据调用方式，传入不同绑定值
      return fn.apply(
        this instanceof Fn ? this : context,
        args.concat(...arguments)
      )
    }
  }
}

// bind
// fn1.bind(obj1)()

if (0) {
  Function.prototype.myBind = function (context) {
    const key = Symbol()
    const args0 = Array.prototype.slice.call(arguments, 1)
    context[key] = this
    return function (...params) {
      const args = args0.concat(params)
      context[key](...args)
    }
  }
  const fn2 = fn1.myBind(obj1, 1, 2)
  fn2(3, 4)
  // fn2()
}

// 实现 bind 方法
if (0) {
  Function.prototype.myBind = function () {
    const fn = this
    const args = Array.prototype.slice.call(arguments, 1)
    let context = arguments[0]
    function rltFn() {
      const key = Symbol() // 生成独一无二的值
      context = this instanceof rltFn ? this : context // 应用于构造函数时，this 指向函数本身
      context[key] = fn
      context[key](...args.concat(arguments)) // 可以替换为 fn.apply(context,args.concat(arguments))
      delete context[key]
    }
    rltFn.prototype = this.prototype // 返回的函数支持 new 
    return rltFn
  }

  // fn1.myBind(obj1)()
  // console.log(obj1)
}

if (0) {
  Function.prototype.myCall = function () {
    const context = arguments[0]
    const args = Array.prototype.slice.call(arguments, 1)
    // console.log('Function.prototype.myCall -> args', context, args)
    const fn = this
    context._fn = fn
    context._fn(...args)
    delete context._fn
  }
  fn1.myCall(obj1, 1, 2, 3)
}

