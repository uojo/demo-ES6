
if (1) {
  // 执行顺序：上下文（按照代码顺序生成本次代码执行队列）>宏任务（生成下次宏任务的执行队列）>微任务>[下一次宏任务的执行队列]...
  // 注释说明：abc 表示每次循环的开始，_表示该循环微任务（job）
  console.log('a1')

  setTimeout(function () {
    console.log('b1')
    new Promise(function (resolve) {
      console.log('b2')
      resolve()
    }).then(function () {
      console.log('b_1')
    })
  }, 0)

  new Promise(function (resolve) {
    console.log('a2')
    resolve()
  }).then(function () {
    console.log('a_1')
    setTimeout(function () {
      console.log('c1')
    })
  })

  console.log('a3')
}
