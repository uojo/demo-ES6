/**
 * 单例模式
 * 示例：全局弹出框。
 * 优点：全局缓存
 */

const getSingle = function(fn) {
  // console.log(this);
  let result=null
  console.log(1);
  return function() {
    if(!result){
      result = fn.apply(this,arguments)
    }
    console.log(2, result);
    return result
  }
}

const createModal = function() {
  const main = {
    createTime: Date.now(),
  }
  // ...
  return main
}

const createSingleModel = getSingle(createModal)
console.log("createSingleModel", createSingleModel())
// setInterval(createSingleModel, 2000);