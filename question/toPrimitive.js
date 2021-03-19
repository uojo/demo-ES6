{
  let a = []
  // 对象的隐式类型转化，执行属性方法顺序：在 Symbol.toPrimitive、toString || valueOf
  a[Symbol.toPrimitive] = function () {
    return 'custom'
  }
  // console.log('' + a) // '' + 'custom' => 'custom'
}

/**
 * 解释：+ 运算符的期望操作数为数字，所以调用了，toNumber('')
 */
// console.log(+('')) // 0