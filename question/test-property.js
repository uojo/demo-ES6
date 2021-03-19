class ClassA {
  constructor() {
    this.attrA = 1
  }
  methodA() { }
}

function MethodB(name) {
  this.attrB = name
}
MethodB.prototype.methodB = () => { }


console.log('Object.getOwnPropertyNames(ClassA): ', Object.getOwnPropertyNames(ClassA))
// [ 'length', 'prototype', 'name' ]

console.log('Object.getOwnPropertyNames(objA): ', Object.getOwnPropertyNames(new ClassA()))
// [ 'attrA' ]

console.log('Object.getOwnPropertyNames(MethodB): ', Object.getOwnPropertyNames(MethodB))
// [ 'length', 'prototype', 'name', 'arguments', 'caller' ]

console.log('Object.getOwnPropertyNames(objB): ', Object.getOwnPropertyNames(new MethodB()))
// [ 'attrB' ]

/**
 * 构造函数与class类存在区别
 */