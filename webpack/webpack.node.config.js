const webpack = require('webpack')
const base = require('./webpack.base.config')
const paths = base.vars.paths

module.exports = {
  entry: {
    index: [`${paths.root}/index`]
  },
  output: {
    path: `${paths.root}/bin/server`,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    base.plugins.nodeSourceMapSupport,
    base.plugins.envProd,
    // new webpack.IgnorePlugin(/\.(css|scss)$/)
    // base.plugins.occurenceOrder,
  ],
  module: {
    loaders: [
      base.loaders.imageWebpack,
      base.loaders.babel,
      base.loaders.sassIsomorphic,
      base.loaders.ts,
    ],
  },
  devtool: 'inline-source-map',
  sassLoader: base.loaderConfig.sassLoader,
  resolve: base.resolve,
  // todo: find out what these are for
  target: 'node',
  // node: {
  //   __filename: true,
  //   __dirname: true,
  //   console: true
  // },
  externals: /^[a-z][a-z\.\-0-9]*$/,
}
