// 计算属性原理

// 设置计算函数的句柄
var Dep = {
  target: null
}

//设置计算属性函数
function defineComputed(obj, key, computed, setter) {
  //处理当计算属性依赖的变量变化后的更新（dom刷新等）
  var update = function () {
    var value = computed()
    console.log('computed.cbs()...')
    return value
  }
  var isDep = 0
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      // 绑定计算属性函数的句柄，在响应式函数的getter中添加依赖关系
      if (isDep == 0) {
        Dep.target = update
        isDep++
      }
      var rs = update()
      Dep.target = null
      return rs;
    },
    set: function () {
      //todo
    }
  })
}
//定义响应式变量，同时也是计算属性函数表达式的接受者
function defineReactive(obj, key, value, getter, setter) {
  var deps = []
  var val = value;
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      console.log('d.get:', val);
      if (Dep.target !== null) {
        //添加订阅者进入队列
        deps.push(Dep.target)
      }
      return val
    },
    set: function (value) {
      console.log('d.set:', value);
      val = value
      //触发订阅者
      deps.forEach(function (dep) {
        dep()
      })
    }
  })
}

var obj = {}
//定义个响应式变量
defineReactive(obj, 'a', 1);

//定义计算属性
defineComputed(obj, 'b', function () {
  var a = obj.a + 1
  console.log('computed.cb():', a)
  return a
})

console.log('obj.b: ', obj.b)
obj.a = 2