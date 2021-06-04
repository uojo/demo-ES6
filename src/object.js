/* eslint-disable no-lone-blocks */
const log = console.log

/**
 * assign 合并对象的第一级属性，并且全覆盖
 */
if (0) {
  0 && log(Object.assign({ a: 1, b: { c: 1, d: 2 } }, { b: { e: 3 } }))
  // {a:1, b:{e:3}}
}


/**
 * 普通的对象 无法使用 for-of，因为没有提供遍历器接口
 */
if (0) {
  for (let v of { a: 1, b: 2 }) {
    log(v);
  }
  // error!
}


/**
 * for-in 用于对象（包括数组），遍历对象的可枚举属性
 */
if (0) {
  for (let i in { a: 1, b: 2 }) {
    log(i)
  }
  // a
  // b
}


/**
 * for-in 遍历对象的可枚举属性，包括原型链
 * Object.keys 返回对象的可枚举属性，不包括原型链上的属性
 * getOwnPropertyNames 返回对象的自定义属性名称，不包括原型链上的属性
 * hasOwnProperty 判断属性是否是对象的自身属性（申明后，再定义的属性），不包括原型链上的属性
 */
if (0) {
  var obj = { "name": "Poly", "size": 10 }
  Object.defineProperty(obj, "enum0", { value: "forever 18", enumerable: false });
  Object.defineProperty(obj, "enum1", { value: "forever 18", enumerable: true });
  Object.prototype.prop1 = function () { console.log("proto"); };
  Object.prototype.prop2 = 2;

  // 包括原型对象
  for (var a in obj) console.log(a); // name, size, enum1, prop1, prop2

  // 不包括原型对象
  console.log('Object.keys', Object.keys(obj)); // [ 'name', 'size', 'enum1' ]

  console.log('Object.getOwnPropertyNames', Object.getOwnPropertyNames(obj)); // [ 'name', 'size', 'enum0', 'enum1' ]

  console.log(obj.hasOwnProperty('name')); // true
  console.log(obj.hasOwnProperty('enum0')); // true
  console.log(obj.hasOwnProperty('prop1')); // false
  console.log(obj.hasOwnProperty('prop2')); // false
}


/**
 * Object.create 创建对象并设置对象的原型对象
 */
if (1) {
  var parent = { a: 1 }
  var child = Object.create(parent)
  // console.log(child.__proto__ === parent) // true

  var pFunc = function () { }
  pFunc.a = 1
  var cFunc = Object.create(pFunc)
  // console.log('cFunc.a: ', cFunc.a); // 1
  console.log('cFunc.a: ', cFunc); // 1
}


/**
 * Object.defineProperty 设置对象属性
 */
if (0) {
  let object1 = {}

  // 等同于 Reflect.defineProperty(obj,propKey, handler)
  Object.defineProperty(object1, 'property1', {
    value: 42, // 默认值
    writable: false, // 不可写
    enumerable: false, // 不可枚举
    configurable: false, // 不可删除
    set: undefined,
    get: undefined,
  })

  object1.property1 = 77
  // throws an error in strict mode

  console.log(object1.property1)
  // expected output: 42
}


/**
 * Reflect.defineProperty
 */
if (0) {
  try {
    Object.defineProperty({}, Symbol.a, {})
  } catch (e) {
    log('e', e)
  }
  // 返回是否设置成功
  log('Reflect.defineProperty', Reflect.defineProperty({}, Symbol.a, { value: 1 }))
}


/**
 * Proxy 结合 Reflect 实现观察者模式
 * Proxy 实现数据观察，Reflect 实现数据修改。
 */
if (0) {
  // target === obj
  // 只有操作 Proxy 返回的实例，才会触发 Proxy 内的回调
  let obj = { a: 1, c: { e: 100, method: function () { } } }
  let proxyObj = new Proxy(obj, {
    set(target, prop, value, context) {
      // 使用 Reflect 的目的：确保对象的属性赋值成功，除非 target 不是对象
      return Reflect.set(target, prop, value, context)
    },
    get(target, prop) {
      // console.log(target === obj); // true
      console.log('get => ', prop) // a
      // console.log('get -> target, prop, context', target, prop, context)
      return target[prop]
      // return Reflect.get(target, prop)
    }
  })

  proxyObj.b = 2 // 触发 set 回调
  console.log("proxyObj.b", proxyObj.b) // 2，触发 get 回调
  console.log("obj.b", obj.b) // 2，获取到最新数据

  console.log('proxyObj.c.e', proxyObj.c.e); // 100
  proxyObj.c.e = 200
  console.log('proxyObj.c.e', proxyObj.c.e); // 200

  console.log(proxyObj.c.method.enabled);
  proxyObj.c.method.enabled = true
  console.log(proxyObj.c.method.enabled);
}


