const fn1 = ({a} = {a: 1}) => {
  // console.log('TCL: a', a)
}
fn1()
// > 1

const fn2 = (row = {a: 1}) => {
  // console.log('TCL: row', row)
}
fn2()
// > {a:1}

fn2({b: 2})
// > {b:2}
