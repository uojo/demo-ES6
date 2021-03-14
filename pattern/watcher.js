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
  /**
   * defineProperty 监听对象
   */
  const obj = {}
  let cacheA
  Object.defineProperty(obj, '_', {
    set(val) {
      // console.log(obj === this) // => true
      console.log('obj.set', val);
      cacheA = val // 将数据写到另外一个变量
    },
    get() {
      console.log('obj.get');
      return cacheA
    }
  })

  obj._ = 10 // 触发 set
  const data = { name: '', queues: [], } // 对象
  obj._ = data // 触发 set

  /**
   * set 只会在修改申明的属性时触发，setData 内部属性变更时，不会触发
   */
  // data.name = 'apple' // 修改对象属性，不触发 set
  // obj._.name = 'apple' // 触发 get，不触发 set
  // console.log(obj._.name); // apple
}

/**
 * defineProperty 监听数组
 */
if (1) {
  const arr = {}
  let cacheB
  Object.defineProperty(arr, '_', {
    set(val) {
      console.log('arr.set');
      cacheB = val
    },
    get() {
      return cacheB
    }
  })
  arr._ = []
  arr._ = [1, 2, 3]
  arr._[0] = 0 // 未触发 set，但已设置成功
  arr._.push(4) // 未触发 set，但已设置成功
  console.log(arr._); // [0, 2, 3, 4]
}

/**
 * 方案2 proxy + Reflect
 * 特点：proxy 负责观察数据设置与获取。
 * 优点：proxy 可以弥补 defineProperty 在劫持数组上的缺失
 * 注意：proxy get 内的 this 指向到 proxy 返回的实例上，可以使用 bind 来解决。
 */
if (0) {
  const obj = { theme: { color: 'red' }, queues: null }
  const proxyObj = new Proxy(obj, {
    set(target, prop, val) {
      // console.log(target === obj); // true
      console.log('set', prop, val);
      // return

      // 使用 Reflect.set 设置属性，可以获取设置结果
      // Reflect.set(target, prop, val)

      // 默认行为？不会触发默认行为！
      target[prop] = val

      // 表示成功？无用
      // return true
    },
    get(target, prop) {
      // const hasRlt = Reflect.has(target, prop)
      // console.log('get', target, prop, hasRlt);
      // if (hasRlt) {
      // return Reflect.get(target, prop)
      // }
      // 默认行为
      return prop in target ? target[prop] : undefined
    }
  })
  // proxyObj.theme = 'foo'
  // proxyObj.theme = { color: 'green' }

  // proxyObj.theme.color = 'black' // 已有属性，设置时会触发 get 回调，并且可以设置成功
  // console.log(proxyObj.theme.color); // black

  /**
   * 修改数组内值，不会触发 set，但可设置成功。
   */
  proxyObj.queues = [1, 2] // 触发 set
  proxyObj.queues[0] = 0 // 未触发 set，但已设置成功
  proxyObj.queues.push(3) // 未触发 set，但已设置成功
  console.log(proxyObj.queues); // [0, 2, 3]

  /**
   * 新增属性，与已有属性表现一致
   */
  // proxyObj.size = 3 // 触发 set
  // console.log(proxyObj.size); // 3


}

/**
 * proxy 监听数组对象
 */
if (0) {
  const arr = []
  const proxyArr = new Proxy(arr, {
    set(target, prop, val) {
      console.log('arr.set', prop, val);
      target[prop] = val
    },
    get(target, prop) {
      console.log('arr.get', prop);
      return prop in target ? target[prop] : undefined
    }
  })
  proxyArr[0] = 0
  console.log(proxyArr);
}