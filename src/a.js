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

{
  // 运算符优先级
  let a = 0;
  let b = 10
  // console.log( a+++b ); // (a++)+b => 1
}

{
  // RegExp API
  const foo = '12ab34cd'
  // use: str.match(reg) => null || [...]
  // console.log((foo).match(/\d+/g));

  // use: reg.exec(str) => null || [0:{第一个匹配结果},1:{匹配第1个子表达式}, input:检索的文本 ,index:第一个匹配位置]
  // console.log(/\d+/.exec(foo));

  // use: str.search(reg) => -1 || >=0
  console.log(foo.search(/\s+/)); // => 0
}

if (0) {
  let i = 0
  while (i < 3) {
    console.log('i', i);
    i++
  }

  let j = 0
  do {
    console.log('j', j);
    j++
  } while (j < 3)
}


// 原因在于 + 运算符的期望操作数为数字，所以调用了，toNumber('')
console.log(+('')) // 0