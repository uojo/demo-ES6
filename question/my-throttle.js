

const throttle = 1 ? function (cb, delay) {
  // 方式1 - 时间戳
  let prevTime = 0
  return function () {
    if (Date.now() - prevTime > delay) {
      cb()
      prevTime = Date.now()
    }
  }
} : function (cb, delay) {
  // 方式2 - 计时器
  let tid = 0
  return function () {
    if (!tid) {
      tid = setTimeout(() => {
        cb()
        clearTimeout(tid)
      }, delay);
    }
  }
}

const echo = function () {
  console.log(1);
}

// 截流示例
const fn1 = throttle(echo, 2000)
// fn1()
// setTimeout(fn1, 1000);


const debounce = 0 ? function (cb, delay) {
  // 时间戳
  let prevTime = 0
  let tid
  return function () {
    tid = setTimeout(cb, delay)
    if (Date.now() - prevTime < delay) {
      clearTimeout(tid)
    }
    prevTime = Date.now()
  }
} : function (cb, delay) {
  // 计时器
  let tid = 0
  return function () {
    if (tid) clearTimeout(tid)
    tid = setTimeout(cb, delay);
  }
}

const fn2 = debounce(echo, 2000)
fn2()
setTimeout(fn2, 1000);