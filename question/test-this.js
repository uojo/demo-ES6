
function f1 () {
  return this
}
// console.log(f1() === global)

function f2 () {
  'use strict'
  return this
}
// console.log(f2() === undefined)

var o = {
  prop: 37,
  f: function () {
    return this.prop
  }
}
console.log(o.f()) // 37
var a = o.f
console.log(a()) // undefined
