/**
 * 创建型模式-单例模式
 * 示例：全局弹出框
 * 描述: 利用闭包缓存变量用于存储实例，返回的函数中返回该变量。
 * 优点: 
 * 缺点: 
 */

const getSingle = function (fn) {
  let result = null
  return function () {
    if (!result) {
      result = fn.apply(this, arguments)
    }
    return result
  }
}

// 特别：以外部参数传入的方式来实现创建实例
const createModel = function () {
  const main = {
    createTime: Date.now(),
  }
  // ...
  return main
}

const createSingleModel = getSingle(createModel) // 这里是传入的，也可以直接在单例类内部获取。
console.log("createSingleModel", createSingleModel())
// setInterval(createSingleModel, 2000);