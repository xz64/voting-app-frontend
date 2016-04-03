var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');

var buildDir = 'dist';
var isProduction = process.env.NODE_ENV === 'production';

var htmlMinificationConfig = isProduction ?
  {
    collapseWhitespace: true
  } :
  {};

var config = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: buildDir,
    filename: 'app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Voting App',
      minify: htmlMinificationConfig
    }),
    new CleanWebpackPlugin([buildDir])
  ]
};

module.exports = config;
