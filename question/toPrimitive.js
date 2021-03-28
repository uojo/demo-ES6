/**
 * 设置对象转化方法
 */
if (0) {
  let a = []
  // 对象的隐式类型转化，执行属性方法顺序：在 Symbol.toPrimitive、toString || valueOf
  a[Symbol.toPrimitive] = function () {
    return 'custom'
  }
  // console.log('' + a) // '' + 'custom' => 'custom'
}

/**
 * 运算符 + 有两种用途：
 * 当两侧操作数中出现一个字符串，将做字符串拼接。反之做算术+处理。
 * + Number('') = + 0 = 0
 */
if (0) {
  console.log(+'') // 0
  console.log(1 + 'true'); // 1true
  console.log(1 + true); // 2
  console.log(1 + undefined); // NaN
  console.log(1 + null); // 1
}


/**
 * 关系运算符
 */
if (0) {
  // 一侧存在字符串，这将非数字操作数转为Number
  console.log('2' > 10); // false
  console.log('2' > false); // true
  // 两侧均为字符串，使用 charCodeAt 将操作数转为Number
  console.log('2' > '10'); // true = 50>49
  console.log('a' > 'abc'); // false = Nan>98
  console.log('ab' > 'ac'); // false = 'b'.charCodeAt() < 'c'.charCodeAt()
  // 特殊
  console.log(NaN == NaN); // false
  console.log(null == undefined); // true
}

/**
 * 逻辑非运算符
 */
if (0) {
  console.log([] == 0); // true = Number([].valueOf().toString()) = 0
  console.log(![] == 0); // true = Number(false)
  console.log([] == ![]); // true = Number([].valueOf().toString()) = 0 = Number(false)
  console.log([] == []); // false
  console.log({} == !{}); // false = Number({}.valueOf().toString()) = '[object Object]'
  console.log({} == {}); // false
}

/**
 * 对象转化为Number的过程
 * 先执行 obj.valueOf()，如果返回值非 Number 类型，将继续执行 obj.toString()，获取返回值后，执行 Number()
 */
if (0) {
  const a = {
    i: 0,
    valueOf() {
      return ++this.i
    }
  }
  if (a == 1 && a == 2 && a == 3) {
    console.log('hello');
  }
}

