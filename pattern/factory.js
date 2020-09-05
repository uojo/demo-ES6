/**
 * 工厂模式
 * 示例：
 * 特点：通过参数判断返回哪一个类的实例
 * 优点：
 * 缺点：
 */

class Cricle {
  constructor() {
    console.log('Cricle.constructor');
  }
}

class Rectangle {
  constructor() {
    console.log('Rectangle.constructor');
  }
}

class ShapeFactory {
  constructor(options) {
    this.classType = options.type === 'cricle' ? Cricle : Rectangle
    return new this.classType()
  }
}

new ShapeFactory({ type: 'cricle' })