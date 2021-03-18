/* eslint-disable no-useless-constructor */
class Cuser {
  constructor () {
    this.a1 = 1
  }
  say0 () {

  }
}

function Fuser (name) {
  this.name = name
}
Fuser.prototype.say1 = () => {}

console.log('Object.getOwnPropertyNames(Cuser): ', Object.getOwnPropertyNames(Cuser))
console.log('Object.getOwnPropertyNames(Fuser): ', Object.getOwnPropertyNames(Fuser))
