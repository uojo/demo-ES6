/**
 * 命令模式
 * 示例：DOM点击后执行相关 services
 * 优点：将开发过程解耦分离
 * 缺点：
 */

// 业务逻辑代码
const services = {
  fetchList: function() {
    console.log('更新菜单')
  },
}

// 指令仿佛是一个预定义的 entity，固有的属性包括：execute
const createFetchCommand = function(services) {
  return {
    execute: services.fetchList,
  }
}

const fetchCommand = createFetchCommand(services) // 创建命令

// --------------------  上面的界面逻辑由A完成, 下面的由B完成

// 设置指令到 DOM
const setCommand = function(button, command) {
  button.onClick = function() {
    command.execute()
  }
}

setCommand(document.getElementById('button1'), fetchCommand)