/* eslint-disable no-lone-blocks */
const log = console.log

0 && log(Object.assign({ a: 1, b: { c: 1, d: 2 } }, { b: { e: 3 } }))
// {a:1, b:{e:3}}

// 普通的对象，没有提供遍历器接口，所以无法使用 for...of
/* for(let v of {a:1,b:2}){
  log(v);
} */

// for in 可用于数组
for (let i in { a: 1, b: 2 }) {
  // log(i)
}
// a
// b

if (0) {
  var obj1 = { a: 1 }
  var obj2 = Object.create(obj1)
  // console.log(obj1 === Object(obj1)) // true
  // console.log(obj1 !== obj2) // true
  // console.log(obj2.__proto__ === obj1) // true
}

if (0) {
  let object1 = {}

  // 等同于 Reflect.defineProperty(obj,propKey, handler)
  Object.defineProperty(object1, 'property1', {
    value: 42,
    writable: false, // 可写
    enumerable: false, // 可枚举
    configurable: false, // 是否可删除
    set: undefined,
    get: undefined,
  })

  object1.property1 = 77
  // throws an error in strict mode

  console.log(object1.property1)
  // expected output: 42
}

if (0) {
  try {
    Object.defineProperty({}, Symbol.a, {})
  } catch (e) {
    console.log('e', e)
  }
  console.log(Reflect.defineProperty({}, Symbol.a, { value: 1 }))
}

if (1) {
  // Proxy 结合 Reflect 实现观察者模式，Proxy 实现数据观察，Reflect 实现数据修改。
  // target === obj
  // 只有操作 Proxy 返回的实例，才会触发 Proxy 内的回调
  let obj = { b: 2 }
  let proxy = new Proxy(obj, {
    set(target, prop, value, context) {
      // 使用 Reflect 的目的：确保对象的属性赋值成功，除非 target 不是对象
      return Reflect.set(target, prop, value, context)
    },
    get(target, prop) {
      // console.log(target === obj); // true
      console.log('get => ', prop) // a
      // console.log('get -> target, prop, context', target, prop, context)
      return Reflect.get(target, prop)
    }
  })
  // console.log("proxy.b", proxy.b)

  proxy.a = 1 // 触发 set 回调
  console.log("proxy.a", proxy.a) // 1，触发 get 回调
  console.log("obj.a", obj.a) // 1，获取到最新数据
}
