/**
 * 原型链
 * 所有对象都有属性: __proto__、constructor
 * 所有函数都有属性: __proto__、constructor、prototype
 * 对象的原型链: obj.__proto__ => Func.prototype; Func.prototype.__proto__ => Object.prototype; Object.prototype.__proto__ => null;
 * 函数的原型链: Func.__proto__ => Function.prototype; Function.prototype.__proto__ => Object.prototype; Object.prototype.__proto__ => null;
 * 函数的: constructor => Function; Function.constructor => Function;
 * 重要结论：
 *  1、函数也是对象，所有对象均有属性 __proto__ 和 constructor，函数多一个 prototype
 *  2、原型链的终点是 null
 *  3、所有函数的 __proto__ 属性均指向 Function.prototype，包括 Object、Function
 */

// 父类
var Person = function () { }
Person.prototype.say = function () { }

// 子类
var WhitePeople = function () { }
WhitePeople.prototype = new Person()

var adam = new Person()
var jack = new WhitePeople()

/* 1、实例的原型链 */

// 父类实例的原型链
// console.log(adam.__proto__ === Person.prototype, '实例的 __proto__ 指向构造其的类的原型对象')
// console.log(Person.prototype.__proto__ === Object.prototype)
// console.log(Object.prototype.__proto__ === null)

// 子类实例的原型链
// console.log(jack.__proto__ === WhitePeople.prototype, '实例的 __proto__ 指向构造其的类的原型对象')
// console.log(WhitePeople.prototype.__proto__ === Person.prototype)
// console.log(Person.prototype.__proto__ === Object.prototype)
// console.log(Object.prototype.__proto__ === null)

/* 2、构造函数的原型链 */
console.log(Person.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

/* 3、函数的 prototype.constructor 指向函数本身 */
// console.log(Person.prototype.constructor === Person)

/* 4、对象的构造函数的链路 */
// console.log(adam.constructor === Person)
// console.log(Person.constructor === Function)
// console.log(Function.constructor === Function)

/* 4、父类、子类的 constructor 均指向 Function */
// console.log(WhitePeople.constructor === Function)
// console.log(Person.constructor === Function)

/* 5、特殊指向 */
// console.log(Object.__proto__ === Function.prototype)
// console.log(Function.__proto__ === Function.prototype)

/* 6、补充说明 */
// console.log('对象没有 prototype 属性',adam.prototype === undefined)
