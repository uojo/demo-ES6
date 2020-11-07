/**
 * 观察者模式
 * 示例：
 * 特点：一般由两部分组成。观察部分，负责拦截数据的设置与获取。数据部分，负责数据的设置与返回。
 * 优点：
 * 缺点：
 */

/**
 * 方案1 Object.defineProperty
 * 特点：监听对象属性的变更。
 * 缺点：无法劫持数组的变更；无法劫持属性值是对象内的属性变更
 */

if (0) {
  const obj = {}
  let a = 1
  Object.defineProperty(obj, 'a', {
    set(val) {
      console.log(obj === this, 'set');
      a = val
    },
    get() {
      console.log(obj === this, 'get');
      return a
    }
  })

  obj.a = 10
  // console.log(obj.a);
}


/**
 * 方案2 proxy + Reflect
 * 特点：proxy 负责观察数据设置与获取。
 * 优点：proxy 可以弥补 defineProperty 在劫持数组上的缺失
 * 注意：proxy get 内的 this 指向到 proxy 返回的实例上，可以使用 bind 来解决。
 */
if (1) {
  const obj = { a: { b: 2 } }
  const p = new Proxy(obj, {
    get(target, prop) {
      const hasRlt = Reflect.has(target, prop)
      console.log('get', target, prop, hasRlt);
      // if (hasRlt) {
      // return Reflect.get(target, prop)
      // }
      // 默认行为
      return target[prop]
    },
    set(target, prop, val) {
      console.log('set', target === obj, prop, val);
      // return

      // 使用 Reflect.set 设置属性，可以获取设置结果
      // Reflect.set(target, prop, val)

      // 默认行为？不会触发默认行为！
      // target[prop] = val

      // 表示成功？无用
      // return true
    }
  })
  // p.a = 10
  // p.a = { b: 2 }

  // 已有属性，设置时会触发 get 回调，并且可以设置成功
  // p.a.c = 3
  // console.log(p.a.c); // 3 ???

  // 未有属性，需要 set 内部手动设置属性值到 target 上，否则 get 时是 undefined
  // p.aa = 3
  // console.log(p.aa);
}