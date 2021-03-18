// setTimeout(function fn1() {
//   console.log("timeout1");
// }, 100);


// function fn0() {
//   Promise.resolve()
//     .then(function fn2() {
//       console.log("then1");
//     })
//     .then(function fn3() {
//       console.log("then2");
//     });
//   console.log("end1");
// }

// fn0()

// function fn1() {
//   // 如果该函数用于构造函数，那么 this 是实例
//   console.log(1, this instanceof fn1, this.__proto__ === fn1.prototype);
//   console.log(arguments);
// }

// console.log(fn1(3));
// console.log(new fn1());

// const fn2 = fn1.bind({ a: 1 }, 1, 2)

// console.log(fn2(3, 4));
// console.log(new fn2());


var a = { n: 1 };
var b = a;
// a.x = a// = { n: 2 };
// console.log((a.x = a) === );
// console.log(a);
// console.log(b.x);
console.log(2 + 3 + a=4);