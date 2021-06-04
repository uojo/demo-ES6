let arr = [1, 2, 3]

// 常规解构
{
  let [a, b] = arr
  // console.log('a,b', a, b)
}

// 对象化解构
{
  let { 0: first, [arr.length - 1]: last } = arr
  // console.log('first', first)
  // > 1
  // console.log('last', last)
  // > 3

  let { 0: a, length: len } = arr
  // console.log('a,len', a, len)
}
