const log = console.log

0 && log(Object.assign({a: 1, b: {c: 1, d: 2}}, {b: {e: 3}}))
// {a:1, b:{e:3}}

// 普通的对象，没有提供遍历器接口，所以无法使用 for...of
/* for(let v of {a:1,b:2}){
  log(v);
} */

// for in 可用于数组
for (let i in {a: 1, b: 2}) {
  // log(i)
}
// a
// b

if (0) {
  var obj1 = {a: 1}
  var obj2 = Object.create(obj1)
// console.log(obj1 === Object(obj1)) // true
// console.log(obj1 !== obj2) // true
// console.log(obj2.__proto__ === obj1) // true
}
