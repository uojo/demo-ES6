var path = require('path');
var webpack = require('webpack');
var fs = require('fs');

var entiresPath = path.resolve(__dirname, 'examples');
var entryList = {
    // vendors: [],
};

/**
 * 循环获取入口文件
 * @param  {String} path 入口文件目录路径
 */

(function walkEntry(entiresPath) {
    var dirList = fs.readdirSync(entiresPath);
    // console.log(dirList);
    if( dirList.length ){
        dirList.forEach(function(item){
            var singleEntryPath = path.resolve(entiresPath, item, 'index.js');
            try{
                var stats = fs.statSync(singleEntryPath);

                if( stats.isFile() ){
                    // console.log(item, singleEntryPath);
                    
                    entryList[item] = [
                        "webpack/hot/dev-server",
                        singleEntryPath
                    ];
                }
            } catch (err){
                return false;
            }
        });
    }
})(entiresPath);
console.log(entryList);

module.exports = {
    entry: entryList,
    output: {
		publicPath: "dist/",
        // path:path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
	// 新添加的module属性
    module: {
        loaders: [
            {
                test:/\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query:{
                    presets:['es2015']
                }
            }
        ]
    },
    plugins: [
		// 将公共部分抽成
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
		new webpack.HotModuleReplacementPlugin()
    ],
	devServer:{
		inline:true,
		hot:true
	}
};
