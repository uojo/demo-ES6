/**
 * 装饰器模式
 * 示例：
 * 特点：类似于使用子类继承父类。
 * 目的：增强对象，但不改变原对象。
 */

class Shape {
  draw() {
    console.log('Shape.draw');
  }
}
// new Shape().draw()
class Cricle extends Shape {
  draw() {
    console.log('Shape.Cricle.draw');
  }
}

/**
 * 第一次增强
 */
class ShapeDecorator extends Shape {
  constructor(obj) {
    super()
    this.obj = obj
  }
  draw() {
    this.obj.draw()
    console.log('Shape.ShapeDecorator.draw.after');
  }
}

/**
 * 第二次增强
 */
class RedShapeDecorator extends ShapeDecorator {
  constructor(obj) {
    super(obj)
  }
  draw() {
    this.obj.draw()
    this.setRedBorder()
  }
  setRedBorder() {
    console.log('Shape.ShapeDecorator.draw.after.setRedBorder');
  }
}

new ShapeDecorator(new Cricle()).draw()
new RedShapeDecorator(new Cricle()).draw()

/**
 * 经典套路，但无法诠释装饰器模式
 * 示例：衣服一件一件的穿
 * 特点：函数即作为函数，也作为参数
 */

if (0) {
  const enhance = function (fn, afterFn) {
    return function () {
      fn.apply(this, arguments)
      afterFn.apply(this, arguments)
    }
  }

  const wear1 = function () {
    console.log('穿上第一件衣服')
  }

  const wear2 = function () {
    console.log('穿上第二件衣服')
  }

  const wear3 = function () {
    console.log('穿上第三件衣服')
  }

  const wear = enhance(enhance(wear1, wear2), wear3)
  wear()
}

