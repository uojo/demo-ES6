/**
 * 行为型模式-状态模式
 * 示例：
 * 特点：对象内部维护一个状态属性，该对象有统一的行为接口，接口内的行为就是改变当前状态属性。
 * 优点：
 * 缺点：
 */

const stateMap = {
  'weakLight': {
    press: function () {
      console.log('打开强光')
      this.currentState = stateMap.strongLight
    }
  },
  'strongLight': {
    press: function () {
      console.log('关灯')
      this.currentState = stateMap.offLight
    }
  },
  'offLight': {
    press: function () {
      console.log('打开弱光')
      this.currentState = stateMap.weakLight
    }
  },
}

const Light = function () {
  // 内部维护一个属性用于维护【状态对象】
  this.currentState = stateMap.offLight
}

Light.prototype.init = function () {
  const btn = document.createElement('button')
  btn.innerHTML = '按钮'
  document.body.append(btn)
  const self = this
  btn.addEventListener('click', function () {
    self.currentState.press.call(self) // 通过 call 完成委托
  })
}

const light = new Light()
light.init()