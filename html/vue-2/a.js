
/**
 * <div id='app'><h1>{{title}}</h1><span></span></div>
 */
function with (this) {
  return _h('div', {
    attrs: {
      "id": "app"
    }
  }, ["\n    World\n    ", _h('h1', [_s(title)]), " ", (title) ? _h('span', ["a" + _s(now) + "b"]) : _e(), " ", _l((level), function (item) {
    return _h('div', {
      key: item
    }, [_s(item)])
  })])
}