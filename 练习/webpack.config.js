const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    //配置各种loader
    module: {
        rules: [
            //语法转换
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            //打包css
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'] //使用loader的时候有顺序，从后往前
            },
            //打包样式中的图片文件资源
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192, // 8kb以下的图片会base64处理
                        name: '[hash:8].[ext]', // 修改文件名称和后缀 
                    }
                }]
            },
            //配置loader处理vue文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
        ]
    },
    //配置各种插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
        }),
        //自动清除dist文件夹插件
        // new CleanWebpackPlugin(),
        //vue 相关 
        new VueLoaderPlugin(),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, "src/public"),
            to: path.resolve(__dirname, 'dist'),
            ignore: ['index.html']
        }]),
    ],

    devServer: {
        open: true, // 自动打开浏览器
        quiet: true, //输出少量的提示信息
        port: 8080, // 端口号
    },
    devtool: 'cheap-module-eval-source-map',
    //开发模式
    mode: 'development',
    //解决导入省略后缀名称
    resolve: {
        extensions: [".js", ".json", ".vue"]
    },
};