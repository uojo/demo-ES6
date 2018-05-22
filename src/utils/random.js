/*
* @param min:Number 最小值
* @param max:Number 最大值
* @return:Number 随机数
* @作用：返回一个在 min 和 max 之间的随机整数
*/
module.exports = function (min, max) {
  return Math.floor(min + Math.random() * (max - min));
  
};