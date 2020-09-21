/**
 * 代理模式
 * 示例：图片加载
 * 特点：代理与本体具有一致的接口，对使用者友好（方便切换）
 */


const myImage = (function() {
  const imgNode = document.createElement('img')
  document.body.appendChild(imgNode)
  return {
    setSrc: function(src) {
      imgNode.src = src
    }
  }
})()

const proxyImage = (function() {
  const img = new Image()
  img.onload = function() { // http 图片加载完毕后才会执行
    myImage.setSrc(this.src)
  }
  return {
    setSrc: function(src) {
      myImage.setSrc('loading.jpg') // 本地 loading 图片
      img.src = src
    }
  }
})()

proxyImage.setSrc('http://loaded.jpg')


/**
 * 示例：缓存计算结果
 */

const mult = function() {
  let a = 1
  for (let i = 0, l; l = arguments[i++];) {
    a = a * l
  }
  return a
}

const proxyMult = (function() {
  const cache = {}
  return function() {
    const tag = Array.prototype.join.call(arguments, ',')
    if (cache[tag]) {
      return cache[tag]
    }
    cache[tag] = mult.apply(this, arguments)
    return cache[tag]
  }
})()

proxyMult(1, 2, 3, 4) // 24