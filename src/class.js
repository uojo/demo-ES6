{
  // 属性与方法
  class Animal {
    constructor (name) {
      this.name = name
    }
    say () {
      return `Hi,${this.name}`
    }
  }
  let a = new Animal('abc')
  // => Hi,abc

  // 继承
  class Cat extends Animal {
    // eslint-disable-next-line no-useless-constructor
    constructor (name) {
      // 调用父类的 constructor(name)
      super(name)
      // 如果在此方法内仅执行 super(name)，是无意义的，lint会提示错误。而且如果需要在此使用 this，也必须在执行 super
      // console.log('TCL: Cat -> constructor -> this.name', this.name)
    }
    say () {
      return `Meow,${this.name}`
    }
  }
  let c1 = new Cat('apple')
  // => Meow,apple
}
