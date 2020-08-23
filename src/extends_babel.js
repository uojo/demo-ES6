/* eslint-disable no-proto */

'use strict'

function _inheritsLoose (subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype)
  subClass.prototype.constructor = subClass
  subClass.__proto__ = superClass
}

var Animal = /* #__PURE__ */ (function () {
  function Animal () {}

  var _proto = Animal.prototype

  _proto.say = function say () {}

  return Animal
})()

var Cat = /* #__PURE__ */ (function (_Animal) {
  _inheritsLoose(Cat0, _Animal)

  function Cat0 () {
    return _Animal.call(this) || this
  }

  var _proto2 = Cat0.prototype

  _proto2.go = function go () {}

  return Cat0
})(Animal)

var obj1 = new Cat()
console.log(obj1.say)
