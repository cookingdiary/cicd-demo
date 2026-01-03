const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true, // 每次打包清除旧文件
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader', // 告诉 webpack 用 babel 处理 js
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json'], // 加上 .jsx
    },
};