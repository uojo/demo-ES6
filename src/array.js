const log = console.log;

// 数组
const arr1 = [{id:1,name:"a"},{id:2,name:"b"}];
log( arr1.map(it => {log(it.name); return it.name;}) )
// ['a','b']

log( arr1.reduce( (a,b) => a.id+b.id ) ) 
// 3