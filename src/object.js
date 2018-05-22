const log = console.log;

0 && log( Object.assign( {a:1,b:{c:1,d:2}}, {b:{e:3}} ) );
// {a:1, b:{e:3}}

// 普通的对象，没有提供遍历器接口，所以无法使用 for...of
/* for(let v of {a:1,b:2}){
  log(v);
} */