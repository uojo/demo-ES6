/* eslint-disable no-extend-native */
// call函数实现
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

// apply 函数实现

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

// bind 函数实现
Function.prototype.myBind = function (context) {
  // 判断调用对象是否为函数
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }

  // 获取参数
  var args = [...arguments].slice(1),
    fn = this

  return function Fn () {
    // 根据调用方式，传入不同绑定值
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    )
  }
}

const obj1 = {}
function fn1 (params) {
  console.log('fn1.this === global', this === global)
  console.log('fn1.this === obj1', this === obj1, arguments)
  console.log('fn1.arguments', arguments)
}

// bind
// fn1.bind(obj1)()

// mybind
Function.prototype.mybind = function (context) {
  // context.
  console.log(this)
  context._fn = this
  return function (...params) {
    context._fn(...params)
    delete context._fn
  }
}

// fn1.mybind(obj1)()
// console.log(obj1)

Function.prototype.mycall = function () {
  const context = arguments[0]
  const args = Array.prototype.slice.call(arguments, 1)
  console.log('Function.prototype.mycall -> args', context, args)
  const fn = this
  context._fn = fn
  context._fn(...args)
  delete context._fn
}
fn1.mycall(obj1, 1, 2, 3)
