/**
 * 中介模式
 * 示例：所有参赛选手考试结束，公布所有人成绩
 * 特点：表面上，多个实例对象各自操作，其实内部操作是另一个对象
 * 优点：
 * 缺点：
 */

const playerMiddle = (function() {
  const players = []
  const winArr = []
  const loseArr = []
  return {
    add: function(name) {
      players.push(name)
    },
    win: function(name) {
      winArr.push(name)
      this.show()
    },
    lose: function(name) {
      loseArr.push(name)
      this.show()
    },
    show: function() {
      // 所有选手均
      if (winArr.length + loseArr.length !== players.length) {
        return
      }
      for (let winner of winArr) {
        console.log(winner + '挑战成功;')
      }
      for (let loser of loseArr) {
        console.log(loser + '挑战失败;')
      }
    },
  }
}())

const player = function(name) {
  this.name = name
  playerMiddle.add(name)
}

player.prototype.win = function() {
  playerMiddle.win(this.name)
}

player.prototype.lose = function() {
  playerMiddle.lose(this.name)
}

player.a = function(){
  console.log(1);
}


const a = new player('A 选手')
const b = new player('B 选手')
const c = new player('C 选手')

a.win()
b.win()
c.lose()
// A 选手挑战成功;
// B 选手挑战成功;
// C 选手挑战失败;
