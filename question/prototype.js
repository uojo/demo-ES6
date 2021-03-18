
{
  // 原型链上创建方法
  let b = 2
  // console.log(b.__proto__)
  b.__proto__.fn = () => 3
  // console.log(b.fn())
}
