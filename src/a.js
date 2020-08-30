/* eslint-disable no-lone-blocks */
/* eslint-disable no-undef */
/* eslint-disable no-proto */
// 对象的隐式类型转化，在 toString 与 valueOf 之前会执行 Symbol.toPrimitive 属性
{
  let a = [1, 2]
  a[Symbol.toPrimitive] = function () {
    return 'custom'
  }
  // console.log('' + a) // => '' + 'custom' => 'custom'
}

{
// 原型链上创建方法
  let b = 2
  // console.log(b.__proto__)
  b.__proto__.fn = () => 3
  // console.log(b.fn())
}
