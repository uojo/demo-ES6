/**
 * 创建型模式-单例模式
 * 示例：全局弹出框
 * description: 闭包内部缓存变量用于存储实例，返回的函数中返回该变量。
 * feature: 
 */

const getSingle = function (fn) {
  // console.log(this);
  let result = null
  // console.log(1);
  return function () {
    if (!result) {
      // 也可以直接在内部 new 实例化
      result = fn.apply(this, arguments)
    }
    // console.log(2, result);
    return result
  }
}

// 特别：以外部参数传入的方式来实现穿件实例
const createModal = function () {
  const main = {
    createTime: Date.now(),
  }
  // ...
  return main
}

const createSingleModel = getSingle(createModal)
console.log("createSingleModel", createSingleModel())
// setInterval(createSingleModel, 2000);