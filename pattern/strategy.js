/**
 * 策略模式
 * 示例：计算尺寸值。
 * 优点：高可复用；减少if语句
 */

 const small = (v)=>v+0
 const normal = (v)=>v+10
 const big = (v)=>v+100

const size = (fn,val)=>fn(val)

console.log('size(small,1): ', size(small,1));
