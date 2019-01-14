(() => {
  let {
    a,
    b: {
      // 别名，默认值
      c: c0 = 30,
      c1 = 10,
      d: {e = 20}
    }
  } = {
    a: 1,
    b: {
      c: 3,
      d: {
        e: { f: { g: 100 } }
      }
    }
  }

  // console.log('TCL: a, c0, c1, e', a, c0, c1, e)
  // > 1 3 10 {f:{...}}

  try {
    // console.log('TCL: b', b)
  } catch (err) {
    // console.log('TCL: catch -> err', err)
    // > b is not defined
  }
})()
