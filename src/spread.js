const log = console.log;

const a = [1,2];

log(...a)
// 1 2

let b = [6]
log(b.push(...a), b)
// 3 [6,1,2]

// 与解构函数结合，注意 ...var 只能放在最后一个
const [first,...second] = [8,7,6]
log(first,second)
// 8 [7,6]