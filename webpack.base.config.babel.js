/*eslint-env node */
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import PurifyCSSPlugin from 'purifycss-webpack-plugin';
import autoprefixer from 'autoprefixer';

let title = 'Voting App';
let srcDir = 'src';
let buildDir = 'dist';

let config = {
  entry: [
    path.join(__dirname, srcDir, 'index.js')
  ],
  output: {
    path: path.join(__dirname, buildDir),
    publicPath: '/',
    filename: 'app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title,
      template: path.join(__dirname, srcDir, 'index.html')
    }),
    new ExtractTextPlugin('styles.css'),
    new PurifyCSSPlugin({
      basePath: path.join(__dirname, 'src'),
      paths: ['**/*.jsx'],
      purifyOptions: {
        minify: true
      }
    })
  ],
  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['babel'], exclude: /node_modules/},
      {test: /\.json$/, loader: 'json', exclude: /node_modules/},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('style',
        'css!postcss!sass'), exclude: /node_modules/}
    ],
    postcss: function() {
      return [autoprefixer];
    }
  }
};

export default config;
export { buildDir };
