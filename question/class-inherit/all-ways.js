
/**
 * 构造函数继承：构造实例时执行另一个构造函数
 * 优：继承了父类的属性
 * 劣：没有继承父类的原型对象
 */
if (0) {
  function Animal(name) {
    this.name = name
    this.colors = ['red', 'blue', 'green']
  }

  Animal.prototype.sayName = function () {
    console.log(this.name)
  }

  function Cat(name, age) {
    // 继承属性。可以传参数
    Animal.call(this, name)
    this.age = age
  }

  let catA = new Cat()
  console.log(Object.keys(catA)); // [ 'name', 'colors', 'age' ]
  console.log(catA instanceof Cat) // true
  console.log(catA instanceof Animal) // false。父类不在子类实例的原型链上
  console.log(catA.prototype) // undefined。没有原型对象
}

/**
 * 原型式继承：设置原型对象
 * 优点：实现了原型链
 * 缺点：无法继承父类的属性
 */
if (0) {
  const animal = { name: '' }

  // 方式一
  const catA = Object.create(animal, { size: { value: 1 } })
  console.log('catA', catA.size); // 1
  console.log('catA', catA.__proto__ === animal); // true

  // 方式二
  function Cat() { }
  Cat.prototype = animal
  const catB = new Cat()
  console.log('catB', Object.keys(catB));
}

/**
 * 寄生继承。简单且不考虑原型链时使用
 */
if (0) {
  function createAnother(original) {
    // 创建一个新对象，对象的原型指向父对象，这样实现了继承父对象的属性和方法。
    var clone = Object.create(original)
    // clone.__proto__ === original
    // 为新对象添加自定义属性
    clone.sayHi = function () {
      console.log('hi')
    }
    return clone
  }

  var animal = {
    name: 'james'
  }

  var cat = createAnother(animal)
  // cat.sayHi() // hi
  // console.log(cat.__proto__) // animal{...}
}

/**
 * 组合继承。既在构造函数内执行父类构造函数，也将父类实例作为子类的原型对象
 * 优点：同时继承了父类的属性和原型对象
 * 缺点：子类的原型对象上存在父类的实例属性
 */
if (0) {
  function Animal(name) {
    this.name = name
    this.colors = ['red', 'blue', 'green']
  }

  Animal.prototype.sayName = function () {
    console.log(this.name)
  }

  function Cat(name, age) {
    // 继承属性。可以传参数
    Animal.call(this, name)
    this.age = age
  }
  // 继承方法
  Cat.prototype = new Animal() // 确保 instanceof 有效
  Cat.prototype.constructor = Cat
  Cat.prototype.sayAge = function () {
    console.log(this.age)
  }

  let obj1 = new Cat()
  console.log(obj1 instanceof Cat) // true
  console.log(obj1 instanceof Animal) // true
}

/**
 * 寄生组合继承
 */
if (0) {
  function Animal(name) {
    this.name = name
    this.colors = ['red', 'blue', 'green']
  }

  Animal.prototype.sayName = function () {
    console.log(this.name)
  }

  function Cat(name, age) {
    // 继承属性。可以传参数
    Animal.call(this, name)
    this.age = age
  }

  // 构造子类的原型对象
  function inheritPrototype(subType, superType) {
    // 创建原型对象是超类原型对象的一个实例对象
    var prototype = Object.create(superType.prototype)
    // console.log('inheritPrototype -> prototype', prototype.__proto__ === superType.prototype)
    // 弥补因为重写原型而失去的默认的 constructor 属性。
    prototype.constructor = subType
    // 实现原型继承
    subType.prototype = prototype
  }
  inheritPrototype(Cat, Animal)

  let obj1 = new Cat()
  // console.log(obj1 instanceof Cat) // true
  // console.log(obj1 instanceof Animal) // true
  // 原型链
  console.log(obj1.__proto__ === Cat.prototype)
  console.log(Cat.prototype.__proto__ === Animal.prototype)
  console.log(Animal.prototype.__proto__ === Object.prototype)
}
