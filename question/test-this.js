/**
 * this 指向的四种场景
 */

// 场景1
function f1() {
  return this
}
// console.log(f1() === global)

// 场景2
function f2() {
  'use strict'
  return this
}
// console.log(f2() === undefined)


// 场景3，函数内的 this 指向 调用该函数的对象
var o = {
  prop: 37,
  f: function () {
    return this.prop
  }
}
console.log(o.f()) // 37

// 场景4，注意函数执行时的环境
var a = o.f
console.log(a()) // undefined


/**
 * 复杂场景
 * 实例345，原理见上文的场景4
 */
var value = 1;

var foo = {
  value: 2,
  bar: function () {
    return this.value;
  }
}

//示例1
console.log(foo.bar()); // 2
//示例2
console.log((foo.bar)()); // 2
//示例3
console.log((foo.bar = foo.bar)()); // 1
//示例4
console.log((false || foo.bar)()); // 1
//示例5
console.log((foo.bar, foo.bar)()); // 1