const fn1 = () => {
  console.log('hello');
  return 100
}
console.log(fn1(), void (fn1)); // 100 undefined
