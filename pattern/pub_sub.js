/**
 * 发布订阅模式
 * 示例：发布订阅器
 * 优点：更好的帮助异步编程；
 * 缺点：当使用过多时，或过于分散，会提高维护成本
 */

function Subscribe() {
  this.tasksMap = {
    // name:[]
  }
}

Subscribe.prototype.subscribe = function (name, cb) {
  const tasks = this.tasksMap[name] || []
  tasks.push(cb)
  this.tasksMap[name] = tasks
}

Subscribe.prototype.emit = function (name, args) {
  const tasks = this.tasksMap[name]
  if (tasks && tasks.length) {
    tasks.forEach(e => {
      e.apply(e, args)
    })
  }
}


const obj = new Subscribe()

obj.subscribe('a', function fn1(e) {
  console.log('a.1', e, this === fn1);
})

obj.subscribe('a', function fn2() {
  console.log('a.2');
})

obj.emit('a', ['foo'])