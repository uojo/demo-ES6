var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'development',
  entry: {'index':'./src/index.js'},
  output: {
		publicPath: "/dist/",
    // path:path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
	// 新添加的module属性
  module: {
    rules: [
      {
        test:/\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options:{
          presets:['env'],
          plugins:['transform-es2015-spread', 'syntax-object-rest-spread']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 生成文件 {output.path}/{filename}
      filename: 'index.html',
      template: './src/index.tpl',
      // 添加时间戳
      hash:true,
      // 把相应的资源注入到模板页中
      inject:true
    }),

		new webpack.HotModuleReplacementPlugin()
  ],
	devServer:{
		inline:true,
    hot:true,
    port:3000,
    contentBase:'./',
    openPage:'dist/index.html',
    clientLogLevel:'none',
    // noInfo: true,
    // open:true
	}
};
