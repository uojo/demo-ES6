/* eslint-disable constructor-super */
/* eslint-disable no-useless-constructor */

if (0) {
  // 属性与方法
  class Animal {
    constructor(name) {
      this.name = name
    }
    color() {
      console.log('Animal.methods.color')
    }
    say() {
      return `Hi,${this.name}`
    }
  }
  let a = new Animal('abc')
  // => Hi,abc

  // 继承
  class Cat extends Animal {
    // eslint-disable-next-line no-useless-constructor
    constructor(name) {
      // 调用父类的 constructor(name)
      super(name)
      // 如果在此方法内仅执行 super(name)，是无意义的，lint会提示错误。而且如果需要在此使用 this，就必须先执行 super
      // console.log('Cat -> constructor -> this.name', this.name)
      // 调用父类方法
      // super.color()
    }
    say() {
      // return `Meow,${this.name}`
    }
  }
  // new 关键词，使用在子类时，必须得在子类的 constructor 中执行 super，已获得父类的示例，从而赋值给子类的 this，最终作为返回的实例
  let c1 = new Cat('apple')
  // => Meow,apple
  // console.log('c1.color(): ', c1.color())
  // console.log(c1.__proto__, c1.constructor) // Cat {} [Function: Cat]
}

if (0) {
  class Animal {
    constructor() {
    }
    static logNbSides() {
      return 'I have 4 sides'
    }
  }

  class Cat extends Animal {
    constructor() { }
    static logDescription() {
      return super.logNbSides() + ' which are all equal'
    }
  }
  console.log('Cat.logDescription(): ', Cat.logDescription())
}

if (0) {
  class Animal {
    constructor() {
    }
    say() { }
  }

  class Cat extends Animal {
    go() { }
  }

  const obj1 = new Cat()
  console.log('obj1', obj1)
}
