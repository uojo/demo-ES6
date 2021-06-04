const fn1 = ({ a } = { a: 1 }) => {
  // console.log('a', a)
}
fn1()
// > 1

const fn2 = (row = { a: 1 }) => {
  // console.log('row', row)
}
fn2()
// > {a:1}

fn2({ b: 2 })
// > {b:2}
