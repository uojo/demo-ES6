// 对象的隐式类型转化，在 toString 与 valueOf 之前会执行 Symbol.toPrimitive 属性
{
  let a = [1, 2]
  a[Symbol.toPrimitive] = function () {
    return 'custom'
  }
  // console.log('' + a) // => '' + 'custom' => 'custom'
}

// 原因在于 + 运算符的期望操作数为数字，所以调用了，toNumber('')
// console.log(+('')) // 0