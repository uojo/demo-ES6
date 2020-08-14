/* eslint-disable no-proto */
// 寄生混合继承（类似与ES6的class实现）
function Animal (name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

Animal.prototype.sayName = function () {
  console.log(this.name)
}

function Cat (name, age) {
  // 继承属性
  // Animal.call(this, name)

  this.age = age
}

// 继承方法
Cat.prototype = new Animal()
Cat.prototype.constructor = Cat
// Cat.prototype.sayAge = function () {
//   console.log(this.age)
// }

var instance1 = new Cat('james', 9)
console.log(instance1.__proto__)
console.log(instance1.constructor)
// console.log('instance1', instance1.sayName)
// instance1.colors.push('black')
// console.log(instance1.colors) // "red,blue,green,black"
// instance1.sayName() // "james"
// instance1.sayAge() // 9

// var instance2 = new Cat('kobe', 10)
// console.log(instance2.colors) // "red,blue,green"
// instance2.sayName() // "kobe"
// instance2.sayAge() // 10
