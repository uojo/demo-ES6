const group = ({ trace, fold = 0, group = 1 } = {}) => (prefix) => {
  const isGroup = group
  const echo = (...args) => {
    if (group) {
      console.log(...args);
    } else {
      console.log(prefix, ...args);
    }
  }
  const debugWrap = (...args) => {
    echo(...args)
  }

  if (isGroup) {
    if (fold) {
      console.groupCollapsed(prefix)
    } else {
      console.group(prefix)
    }

    trace && console.trace()
  }

  debugWrap('start');

  ;['break', 'stop', 'end', 'err', 'return'].forEach((e) => {
    debugWrap[e] = (...msg) => {
      // echo(...msg)
      echo(e, ...msg)
      if (isGroup) {
        console.groupEnd()
      }
    }
  })

  return debugWrap
}

// test
if (0) {
  const lg = group({ group: 1 })('hi')
  lg(100)
  lg.end()
  console.log('hi~');
}

if (typeof window === 'object') {

  window.Log = function (...args) {
    console.log(...args);
  }
  Log.group = group
}