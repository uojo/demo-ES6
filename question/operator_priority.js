// 来源：https://segmentfault.com/a/1190000021860580

function Foo() {
  // 没有 var，那么会注册到外层作用域上 global.getName = ...
  getName = function () {
    console.log(1);
  }
  return this;
}
Foo.getName = function () {
  console.log(2)
}

Foo.prototype.getName = function () {
  console.log(3)
}
// 函数表达式
var getName = function () {
  console.log(4)
}
// 函数申明
function getName() {
  console.log(5)
}

// console.log(Foo() === global); // true

// Foo.getName()); // 2
// getName() // 4 undefined 函数申明在解析时就已提升，之后被函数表达式覆盖。
// Foo().getName() // 1 global.getName()
// getName(); // 1 global.getName()
// new Foo.getName();  // 2 思考操作符优先级，该表达式解析出的操作符有三个：new无参数、成员访问、函数执行。其中属性访问和函数执行时同级，并且大于new无参数，那么同级由左及右，应该是 Foo.getName 先执行，返回的结果 log(2) 函数，接着该函数立即执行，输出了 2
// new Foo().getName();  // 3 与 (new Foo()).getName() 等效
// new new Foo().getName(); // 3 与 new ((new Foo()).getName()) 等效
// console.log(new new Foo.getName()); TypeError: (intermediate value) is not a constructor 没有 new new 的结构