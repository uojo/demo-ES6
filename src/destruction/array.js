let arr = [1, 2, 3]
// 常规解构
{
  let [a, b] = arr
  console.log('TCL: a,b', a, b)
}
// 对象化解构
{
  let {0: first, [arr.length - 1]: last} = arr
  // console.log('TCL: first', first)
  // > 1
  // console.log('TCL: last', last)
  // > 3

  let {0: a, length: len} = arr
  console.log('TCL: a,len', a, len)
}
