const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    node: {
        fs: "empty"
    },
    entry: { //入口文件配置
        index: './src/js/index.js'
    },
    output: { //输出文件配置
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './')
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        }]
    },
    devtool: 'inline-source-map', //资源映射，报错是能找到准确文件位置
    plugins: [ //相关插件配置
        new HtmlWebpackPlugin({
            title: 'test page', //html标题
            filename: 'index.html', //打包后的html文件名，默认index.html
            template: './src/lalala.html', // html的源文件
            inject: true, //默认true，意为script标签位于html文件的 body 底部
            cache: true, //默认true，表示内容变化的时候生成一个新的文件
            chunks: ['index'], //表示编译时用到的入口文件
            // excludeChunks: ['index']//表示编译时排除的入口文件
        })
    ]
}