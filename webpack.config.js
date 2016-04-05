var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

var buildDir = 'dist';
var isProduction = process.env.NODE_ENV === 'production';

var htmlMinificationConfig = isProduction ?
  {
    collapseWhitespace: true
  } :
  {};

var devtools = isProduction ? '' : 'source-map';

var minifyJSPlugin = isProduction ? new webpack.optimize.UglifyJsPlugin({}) :
  Function.prototype;

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
    new CleanWebpackPlugin([buildDir]),
    minifyJSPlugin,
    new ExtractTextPlugin('styles.css')
  ],
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader',
        'css-loader', 'sass-loader'), exclude: /node_modules/}
    ]
  },
  devtool: devtools
};

module.exports = config;
