const path = require('path');

module.exports = {
  mode:'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer:{
    contentBase:'./dist'
  },
  module:{
    rules: [{
        // 使用babel-loader将ES6语法转换为ES5
        test: /\.js$/,
        include: [
            path.resolve(__dirname, "node_modules/@supermap/iclient-common"),
            path.resolve(__dirname, "node_modules/@supermap/iclient-leaflet"),
            // 由于iClient对Elasticsearch的API进行了封装而Elasticsearch也使用了ES6的语法
            path.resolve(__dirname, "node_modules/elasticsearch"),
        ],
        loader: 'babel-loader',
        options: {
            presets: ['es2015']
        }
    }]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};