const path = require('path')
const webpack = require('webpack')
const base = require('./webpack/base')
const paths = base.vars.paths
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    // 'react-hot-loader/patch',
    // paths.isomorphic
    paths.isomorphic + '/containers/Hehe'
  ],
  output: {
    // path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    base.plugins.devEnv(),
    // ...base.plugins.dllReferences(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // new ExtractTextPlugin('[name].css', {
    //   allChunks: true
    // }),
  ],
  devtool: 'inline-source-map',
  module: {
    loaders: [{
      // test: /\.tsx$/,
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      // loaders: ['react-hot', 'babel', 'awesome-typescript'],
      loaders: ['react-hot', 'babel'],
    }]
  },
  // sassLoader: base.loaders.loaderConfig.sassLoader(),
  // postcss: base.loaders.loaderConfig.postcss(),
  resolve: base.common.resolve
}
