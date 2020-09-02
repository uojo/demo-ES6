/**
 * 迭代器模式
 * 内部迭代器
 * 特点：是否遍历下一个的操作是在遍历器内部控制的。
 */

const innerInterator = (arr,fn)=>{
  arr.forEach((v,i)=>{
    fn(v,i)
  })
}
innerInterator(['a','b'], (v,i)=>{
  // console.log("v,i", v,i)
})

/**
 * 示例：数组浅比较
 */

const compare1 = (arr1,arr2)=>{
  let rlt = true
  innerInterator(arr1,(e,i)=>{
    if(e!==arr2[i]){
      rlt = false
    }
  })
  return rlt
}

// console.log('r1', compare1(['a','b'],['a','c']));

/**
 * 外部迭代器
 * 示例：数组比较
 * 特点：外部控制是否进行下一个的遍历操作
 */

const iterator = function(arr) {
  let index = 0
  return {
    next() {
      index = index + 1
    },
    done() {
      return index >= arr.length
    },
    value() {
      return arr[index]
    },
  }
}

const compare2 = function(iterator1, iterator2) {
  while (!iterator1.done() && !iterator2.done()) {
    if (iterator1.value() !== iterator2.value()) {
      console.log('两数组不等')
      return
    }
    iterator1.next() // 外部迭代器将遍历的权利转移到外部
    iterator2.next()
  }
  console.log('两数组相等')
}

// console.log('r2', compare2(iterator(['a','b']), iterator('a','c')));