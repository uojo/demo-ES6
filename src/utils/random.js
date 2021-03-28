/**
 * 返回 [min,max) 的随机数
 * @param {number} min 
 * @param {number} max 
 * @returns 随机数
 */
function rangeRandomLeftClose(min, max) {
  return Math.random() * (max - min) + min
}
console.log('[number)', rangeRandomLeftClose(1, 3));

// (number]
function rangeRandomRightClose(min, max) {
  let rlt = rangeRandomLeftClose(min, max + 1)
  while (rlt > max) {
    rlt = rangeRandomLeftClose(min, max + 1)
  }
  return rlt
}
console.log('(number]', rangeRandomRightClose(1, 3));

// (number)
function rangeRandomFullOpen(min, max) {
  let rlt = rangeRandomLeftClose(min, max)
  while (rlt === min) {
    rlt = rangeRandomLeftClose(min, max)
  }
  return rlt
}
console.log('(number)', rangeRandomFullOpen(1, 3));

/**
 * randomInt
 */

// [0,n):int
function rangeRandomIntLeftClose(n) {
  return Math.floor(Math.random() * n)
}
console.log('[0,n):int', rangeRandomIntLeftClose(5));

// [0,1]
function random01() {
  return Math.round(Math.random())
}
console.log('[0,1]', random01());

// [min,max]
function rangeRandomIntFulClose(min, max) {
  return Math.floor((Math.random() * ((max + 1) - min)) + min)
}
console.log('[int]', rangeRandomIntFulClose(3, 6));

/**
 * 生成随机字符串
 */

function randomNumStr(digit) {
  let rlt = ''
  for (let i = 0; i < digit; i++) {
    rlt += Math.floor(Math.random() * 10)
  }
  return rlt
}
console.log('random-number:string', randomNumStr(3));

function randomStr(digit) {
  var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let rlt = ''
  for (let i = 0; i < digit; i++) {
    const index = Math.floor(Math.random() * chars.length)
    rlt += chars[index]
  }
  return rlt
}
console.log('random:string', randomStr(5));

module.exports = rangeRandomIntLeftClose