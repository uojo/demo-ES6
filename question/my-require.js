const sum = new Function('a', 'b', 'console.log(a+b)')
sum(1, 2) // 3

const myM1 = require('./my-require-m1')
console.log('myM1: ', myM1); // {a:1}

const path = require('path')
const fs = require('fs')

function myRequire(moduleName) {
  myRequire.cache = myRequire.cache || {}
  if (myRequire.cache[moduleName]) {
    return myRequire.cache[moduleName].exports
  }
  if (/^\.|^\//.test(moduleName)) {
    const codeStr = fs.readFileSync(moduleName)
    const module = { exports: {} }
    const moduleFunc = new Function('module', 'exports', codeStr)
    moduleFunc(module, module.exports)
    myRequire.cache[moduleName] = module
    return module.exports
  }
}

const myM10 = myRequire('./my-require-m1.js')
console.log('myM10: ', myM10); // {a:1}