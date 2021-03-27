function myRequire(deps, callback) {
  //记录模块加载数量
  var ready = 0;
  //创建脚本标签
  function load(url) {
    var script = document.createElement("script");
    script.type = 'text/javascript';
    script.async = true;
    script.src = url;
    return script;
  }
  var scriptNodes = [];
  for (var i = deps.length - 1; i >= 0; i--) {
    const scriptNode = load(deps[i])
    scriptNode.addEventListener("load", function (event) {
      ready++;
      //如果所有依赖脚本加载完成，则执行回调函数；
      if (ready === scriptNodes.length) {
        callback()
      }
    }, false);
    document.head.appendChild(scriptNode);
    scriptNodes.push(scriptNode));
  }
}