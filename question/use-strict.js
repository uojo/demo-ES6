

// 严格模式下，追加关键词：implements, package, private, protected, public, static, yield, interface, let
function strict(a, a) { // arguments 入参不能同名
  // "use strict"
  // const package = 1
  // const implements = 1
  // const private = 1
  // const static = 1
  // const protected = 1
  // console.log(this); // undefined
  // with ({}) { } // error
  // a = 1 // error，必须使用关键词申明
}
strict()

// 内置保留关键词
// const const = 1
// const let = 1
// const class = 1
// const enum = 1
// const export = 1
