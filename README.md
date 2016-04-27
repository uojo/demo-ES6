# demo-rollup #
用途：ES6 打包工具

**特点：**
 
- 写es6代码，生成出支持UMD、AMD等打包文件
- Tree-shaking，打包时不打入无用的模块方法
- 支持 cli ， npm install rollup -g 后，在 shell 中 run：rollup 
- 可以使用node写法


## Git分支中 demo ##

- demo1：通过配置 rollup.config.js ，es6 模块引入打包
- demo2：同上~ 引入插件 json
- demo3：同上~ 引入插件 json 、 babel
- demo4：同上~ npm run rollup
- demo5：通过 rollup 提供的 jsAPI 写 node


## 参考 ##
- org：http://rollupjs.org
- git：https://github.com/rollup/rollup
- jsAPI：https://github.com/rollup/rollup/wiki/JavaScript-API
- plugins：https://github.com/rollup/rollup/wiki/Plugins