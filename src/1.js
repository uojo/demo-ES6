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

// JavaScript内部，字符以UTF-16的格式储存
var s = "𠮷";

console.log(s.length) // 2
s.charAt(0) // ''
s.charAt(1) // ''
s.charCodeAt(0) // 55362
s.charCodeAt(1) // 57271
