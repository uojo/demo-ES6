/**
 * 职责链模式
 * 示例：通过订单类型 orderType、已支付定金状态 hasDeposit、库存 stock，输出最终成交结果
 * 特点：可以使用 OAP 优化
 * 优点：解构 if...else if...else
 * 缺点：
 */

const GOON = 'GOON'

// 业务代码
const order500 = function (orderType, hasDeposit, stock) {
  if (orderType === 1 && hasDeposit === true) {
    console.log('500 元定金预购, 得到 100 元优惠券')
  } else {
    return GOON
  }
}

const order200 = function (orderType, hasDeposit, stock) {
  if (orderType === 2 && hasDeposit === true) {
    console.log('200 元定金预购, 得到 50 元优惠券')
  } else {
    return GOON
  }
}

const OrderDefault = function (orderType, hasDeposit, stock) {
  if ((orderType === 3 || !hasDeposit) && stock > 0) {
    console.log('普通购买, 无优惠券')
  } else {
    console.log('库存不够, 无法购买')
  }
}

// 定义链路类
const chain = function (fn) {
  this.fn = fn
  this.nextFn = null
}

chain.prototype.setNext = function (nextFn) {
  this.nextFn = nextFn
}

chain.prototype.init = function () {
  const result = this.fn(this, arguments)
  if (result === GOON) {
    this.nextFn.init.apply(this.nextFn, arguments)
  }
}

const order500Logic = new chain(order500)
const order200Logic = new chain(order200)
const orderCommonLogic = new chain(OrderDefault)

order500Logic.setNext(order200Logic)
order200Logic.setNext(orderCommonLogic)

order500Logic.init(3, true, 500) // 普通购买, 无优惠券
