// let定义变量的作用域
function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}
f1();

{{{{
  let insane = 'Hello World';
  {let insane = 'Hello World';}
}}}};
// console.log(insane);

// 中英文的字符存储差异！JavaScript内部，字符以UTF-16的格式储存
var s = "𠮷";

console.log(s.length) // 2
s.charAt(0) // ''
s.charAt(1) // ''
s.charCodeAt(0) // 55362
s.charCodeAt(1) // 57271


//定义function的简写
{
(a1,a2) => {
  // ....
}

}


// ...拼接
function fn1(state){
  return [
    {
      a:10
    },
    ...state
  ]
};

console.log( 4, fn1([{b:20}]) ); //[{a:10},{b:20}]
console.log( 5, fn1([1,2]) ); //[{a:10},1,2]
