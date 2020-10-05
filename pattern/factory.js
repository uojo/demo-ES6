/**
 * 创建型-工厂模式
 * 示例：
 * 描述：实例化工厂类时，通过参数判断返回哪一个类的实例
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