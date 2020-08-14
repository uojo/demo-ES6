var a = [1, 2]

a[Symbol.toPrimitive] = function () {
  return 'custom'
}

// => '' + 'custom' => 'custom'
// console.log('' + a)

var b = 2

// console.log(b.__proto__)

b.__proto__.fn = () => 3
console.log(b.fn())
