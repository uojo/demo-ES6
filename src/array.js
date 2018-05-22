const log = console.log;

// 数组
const arr1 = [{id:1,name:"a"},{id:2,name:"b"}];
// log( arr1.map(it => {log(it.name); return it.name;}) )
// ['a','b']

// log( arr1.reduce( (a,b) => a.id+b.id ) ) 
// 3

// 遍历
const d1 = ['a','b'];
for(let i in d1){
  // log(i)
}
// 0
// 1

for(let it of d1){
  // log(it)
}
// a
// b

for(let [n,i] of d1){
  log(n,i)
}
// a undefined
// b undefined

0 && d1.forEach((v,i,arr)=>log(v,i));
// a 0
// b 1

0 && log(d1.filter((v,i,arr)=>v==='a'))
// ['a']

// 函数每次返回 true，则返回 true
0 && log(d1.every((v,i,arr)=>v==='a'))
// false

// 函数有一次返回 true，则返回 true
0 && log(d1.some((v,i,arr)=>v==='a'))
// true

0 && log(d1.map((v,i,arr)=>{ log(v,i,arr); return v+i;}))
// a 0 [ 'a', 'b' ]
// b 1 [ 'a', 'b' ]
// [ 'a0', 'b1' ]

// 将类似数组的对象和可遍历的对象转为数组
let arrLike = {0:'a',1:'b',length:2};
let arr = Array.from(arrLike);
// log(arr)
// [ 'a', 'b' ]

let arr2=[1];
0 && log( Array.from(arr2) === arr2 )
// false // 返回的是新数组

// 第二个参数为函数，实现过滤功能
0 && log( Array.from([1,2,3],x=>x*x) )
// 1 4 9

// 可遍历的对象指提供 iterator 接口的数据结构


// 只有转为数组才能使用 forEach


// 将一组值转为数组
0 && log( Array.of(1,2,3) )
// [1,2,3]

// find 查找成员，无结果返回 undefind
0 && [1,2,3].find((val,index,arr)=>{
  // log(val,index,arr);
  return val>2;
})
// 3

// findIndex 查找符合要求的成员位置，无结果返回 -1

// fill(value,startIndex,endIndex) 数据填充
// log( [1,2,3].fill(6,1,2) )

// 数据集合包括 Array、Object、Set、Map 。其中除 Object 没有默认提供遍历器接口，其它均可使用 for...of 
// entries()、keys()、values() 返回遍历对象
let arr3 = [1,2].keys();
// log(arr3)
// {}
for(let v of arr3){
  // log(v)
}
// 0
// 1

// node 暂时不支持 Array.values
/* let arr4 = [1,2].values();
log(arr4)
for(let v of arr4){
  log(v)
} */
// 1
// 2

for(let [k,v] of [1,2].entries()){
  // log(k,v)
}
// 0 1
// 1 2

// includes 查找是否包含给定的值
0 && log( [1,2,NaN].includes(NaN) )
// true