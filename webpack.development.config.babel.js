/*eslint-env node */
import webpack from 'webpack';
import baseConfig from './webpack.base.config.babel.js';

let devServerUrl = 'http://localhost:8080';

let config = Object.assign({}, baseConfig);

config.entry = [
  'webpack-dev-server/client?' + devServerUrl,
  'webpack/hot/only-dev-server' // "only" prevents reload on syntax errors
].concat(config.entry);

config.plugins.push(new webpack.HotModuleReplacementPlugin());

config.module.loaders[0].loaders.unshift('react-hot');

config.devtool = 'source-map';

export default config;
