// const webpack = require('webpack')
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
  ],
  module: {
    loaders: [
      base.loaders.imageWebpackNoEmit,
      base.loaders.babel,
      base.loaders.sassIsomorphic,
      base.loaders.ts,
    ],
  },
  devtool: 'inline-source-map',
  sassLoader: base.loaderConfig.sassLoader,
  resolve: base.resolve,
  target: 'node',
  // 暂不清楚作用
  // node: {
  //   __filename: true,
  //   __dirname: true,
  //   console: true
  // },
  externals: [/^[a-z][a-z\.\-0-9]*$/, 'colors/safe']
}
