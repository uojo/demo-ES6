/**
 * 命令组合模式
 * 特点：由于每个命令具有通用的接口，所以命令之间可以相互嵌套组成一个具有树状结构的队列，当执行最根部的指令时就会像多米诺骨牌一样执行
 * 缺点：需要将每个任务单元包装成具有统一的指令接口
 */

//  创建命令对象
const createCommand = function () {
  return {
    lists: [],
    add: function (task) {
      this.lists.push(task)
    },
    execute: function () {
      for (let i = 0; i < this.lists.length; i++) {
        this.lists[i].execute()
      }
    },
  }
}

// 创建命令对象，并添加若干任务
const command1 = createCommand()
command1.add({ execute: () => console.log('煮咖啡') })

const command2 = createCommand()
command2.add({ execute: () => console.log('打开电视') })
command2.add({ execute: () => console.log('打开音响') })

const command3 = createCommand()
command3.add({ execute: () => console.log('打开空调') })
command3.add({ execute: () => console.log('打开电脑') })

// 创建主命令
const macroCommand = createCommand()
// 主命令中添加若干命令
macroCommand.add(command1)
macroCommand.add(command2)
macroCommand.add(command3)
// 执行主命令
macroCommand.execute()
// 输入结果
// 煮咖啡
// 打开电视
// 打开音响
// 打开空调
// 打开电脑