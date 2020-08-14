/* eslint-disable no-new-object */
/* eslint-disable no-proto */
/* 原型链 */

// 父类
var Person = function () {}
Person.prototype.say = function () {}

// 子类
var WhitePeople = function () {}
WhitePeople.prototype = new Person()

var wang = new Person()
var zhang = new WhitePeople()

/* 1、实例的原型链 */

// 父类实例化
// console.log(wang.__proto__ === Person.prototype, '实例的 __proto__ 指向构造其的类的原型对象')
// console.log(Person.prototype.__proto__ === Object.prototype)
// console.log(Object.prototype.__proto__ === null)
// 子类实例化
// console.log(zhang.__proto__ === WhitePeople.prototype, '实例的 __proto__ 指向构造其的类的原型对象')
// console.log(WhitePeople.prototype.__proto__ === Person.prototype)
// console.log(Person.prototype.__proto__ === Object.prototype)
// console.log(Object.prototype.__proto__ === null)

/* 2、构造函数的原型链 */
// console.log(Person.__proto__ === Function.prototype)
// console.log(Function.prototype.__proto__ === Object.prototype)
// console.log(Object.prototype.__proto__ === null)

/* 3、函数的 prototype.constructor 指向函数本身 */
// console.log(Person.prototype.constructor === Person)

/* 链路 */
// console.log(wang.constructor === Person)
// console.log(Person.constructor === Function)

/* 4、父类、子类的 constructor 均指向 Function */
// console.log(WhitePeople.constructor === Function)
// console.log(Person.constructor === Function)

/* 5、特殊指向 */
// console.log(Function.__proto__ === Function.prototype)

/* 6、补充说明 */
// console.log('对象没有 prototype 属性',wang.prototype === undefined)

// console.log(zhang.__proto__ === WhitePeople.prototype, '实例的 __proto__ 指向构造其的类的原型对象')
/* 每一个对象都有 __proto__ 属性，用于指向父类的 prototype 属性 */
