/**
 * 指令组合模式
 * 特点：形成树状的指令树
 * 优点：可以实现指令任意嵌套与组合
 * 缺点：需要将每个任务单元包装成指令形态
 */

const createCommand = function() {
  return {
    lists: [],
    add: function(task) {
      this.lists.push(task)
    },
    execute: function() { // ①: 组合对象调用这里的 execute,
      for (let i = 0; i < this.lists.length; i++) {
        this.lists[i].execute()
      }
    },
  }
}

const command1 = createCommand() // 基本对象

command1.add({
  execute: () => console.log('煮咖啡') // ②: 基本对象调用这里的 execute,
})

const command2 = createCommand() // 组合对象

command2.add({
  execute: () => console.log('打开电视')
})

command2.add({
  execute: () => console.log('打开音响')
})

const command3 = createCommand()

command3.add({
  execute: () => console.log('打开空调')
})

command3.add({
  execute: () => console.log('打开电脑')
})

// 创建主干
const macroCommand = createCommand()
// 嫁接枝干
macroCommand.add(command1)
macroCommand.add(command2)
macroCommand.add(command3)
// 从树的根本开始执行
macroCommand.execute()
// 煮咖啡
// 打开电视
// 打开音响
// 打开空调
// 打开电脑