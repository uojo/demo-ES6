const log = console.log




/**
 * map
 */
if (0) {
  const arr1 = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]
  log(arr1.map(it => { return it.name; })) // ['a','b']
}

/**
 * reduce
 */
if (0) {
  log([1, 2, 3].reduce((a, b) => a + b))
}

/**
 * fill
 */
if (0) {
  log(Array(2).fill().map((value, index, self) => {
    return self // [undefined, undefined]
  }))

  // fill(value,startIndex,endIndex) 数据填充
  // log( [1,2,3].fill(6,1,2) )
}

// 中断遍历，可以执行的方式包括：return、continue、break、throw
// 遍历
const d1 = ['a', 'b']

/**
 * for-in
 */
if (0) {
  for (let key in ['a', 'b']) {
    log(key)
  }
  // 0 1
}

/**
 * for-of
 * 可遍历的对象指提供 iterator 接口的数据结构
 * 数据集合包括 Array、Object、Set、Map 。其中除 Object 没有默认提供遍历器接口，其它均可使用 for...of
 */
if (0) {
  for (let n of ['a', 'b']) {
    log(n)
  }
  // a b

  // 将一组值转为数组
  0 && log(Array.of('a', 'b'))
  // ['a', 'b']
}

/**
 * Object.getOwnPropertyNames
 */
if (0) {
  log(Object.getOwnPropertyNames(['a', 'b']))
  // [ '0', '1', 'length' ]
}

/**
 * forEach
 */
0 && d1.forEach((v, i, arr) => log(v, i, typeof i, arr))
// a 0 number [ 'a', 'b' ]
// b 1 number [ 'a', 'b' ]

/**
 * filter
 * 返回 true, 则 el 被 push
 */
0 && log(d1.filter((v, i, arr) => v === 'a'))
// ['a']

/**
 * every
 * 回调内每次返回 true，则返回 true
 */
0 && log(d1.every((v, i, arr) => v === 'a'))
// false

/**
 * some
 * 回调内一次返回 true，则返回 true
 */
0 && log(d1.some((v, i, arr) => v === 'a'))
// true

/**
 * from 
 * 将类似数组的对象和可遍历的对象转为数组
 */
if (0) {
  let arrLike = { 0: 'a', 1: 'b', length: 2 }
  log(Array.from(arrLike)) // [ 'a', 'b' ]

  // 第二个参数为函数，实现过滤功能
  0 && log(Array.from([1, 2, 3], x => x * x))
  // 1 4 9
}

/**
 * find
 * 查找成员，无结果返回 undefined
 * findIndex 查找符合要求的成员位置，无结果返回 -1
 */
0 && [1, 2, 3].find((val, index, arr) => {
  // log(val,index,arr);
  return val > 2
})
// 3

// keys()、values() 返回遍历对象
// node 暂时不支持 Array.values
// log([1, 2].values())

/**
 * entries
 */
if (0) {
  for (let [k, v] of [1, 2].entries()) {
    // log(k, v)
  }
  // 0 1
  // 1 2
}

// includes 查找是否包含给定的值
0 && log([1, 2, NaN].includes(NaN))
// true
