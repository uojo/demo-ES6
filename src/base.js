const log = console.log

log(a) // undefined
let a = 1
log(a); // 1

// let定义变量的作用域
(function () {
  let a = 1, b = 2
  if (true) {
    let a = 2
    b = 3
  }
  log(a, b) // 1 3
})()

{ { { {
  let insane = 'a'
  { let insane = 'b' }
  // log(insane); // a
} } } };

// 定义function的简写
{
  (a1, a2) => {
    // ....
  }
}

// ...拼接
{
  const fn1 = (s1, s2) => {
    return [
      s1,
      ...s2
    ]
  }
  // log( fn1({a:10},[{b:20}]) ); // [{a:10},{b:20}]
  // log( fn1({a:10},[1,2]) ); // [{a:10},1,2]

  const fn2 = (s1, s2) => {
    return {
      ...s1,
      ...s2
    }
  }
  // log( fn2({a:1,b:2}, {a:10,c:3}) ); // {a:10,b:2,c:3}
}
