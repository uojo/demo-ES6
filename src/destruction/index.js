require('./array')
require('./object')
require('./func');

// 合法
({} = [true, false]);
({} = 'abc');
({} = [])

// 别名，默认值
let { a: b = 2 } = { a: 1 }
// console.log('b', b)

let { x = 3 } = { x: null }
// console.log('x', x)
// > null
