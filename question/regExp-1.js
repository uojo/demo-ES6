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