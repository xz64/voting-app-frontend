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
    filename: 'app.[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title,
      template: path.join(__dirname, srcDir, 'index.html')
    })
  ],
  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['babel'], exclude: /node_modules/},
      {test: /\.json$/, loader: 'json', exclude: /node_modules/}
    ],
    postcss: function() {
      return [autoprefixer];
    }
  }
};

// production builds will have unused classes removed
function generatePurifyPlugin(minify) {
  return new PurifyCSSPlugin({
    basePath: path.join(__dirname, 'src'),
    paths: ['**/*.jsx'],
    purifyOptions: {
      minify: minify
    }
  });
}

// production builds will make use of extractTextPlugin
// dev builds will just inline the css into the js bundle for fast builds
function generateScssLoader(extractText) {
  var loader = {
    test: /\.scss$/,
    exclude: /node_modules/,
  };

  loader.loader = extractText ?
    ExtractTextPlugin.extract('style', 'css!postcss!sass')
    : 'style!css!postcss!sass';

  return loader;
}

export default config;
export {
  buildDir,
  generatePurifyPlugin,
  generateScssLoader
};
