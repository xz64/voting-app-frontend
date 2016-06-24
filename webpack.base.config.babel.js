/*eslint-env node */
import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

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
      template: path.join(__dirname, 'src', 'index.html')
    })
  ],
  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['babel'], exclude: /node_modules/},
      {test: /\.json$/, loader: 'json', exclude: /node_modules/},
      {test: /\.css$/, loaders: ['style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___'
        + '[hash:base64:5]'], exclude: /node_modules\/(?!blaze)/}
    ]
  },
};

export default config;
export { buildDir };
