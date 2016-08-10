// const webpack = require('webpack')
const base = require('./webpack.base.config')
const paths = base.vars.paths

module.exports = {
  entry: {
    index: [`${paths.server}/index`]
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
      base.loaders.image({
        emitFile: false
      }),
      base.loaders.babel,
      base.loaders.sass({
        isomorphic: true
      }),
      base.loaders.ts({
        officialLoader: false
      }),
    ],
  },
  devtool: 'inline-source-map',
  sassLoader: base.loaderConfig.sassLoader,
  resolve: base.resolve,
  target: 'node',
  node: {
    __filename: true,
    __dirname: true,
    console: false
  },
  externals: [/^[a-z][a-z\.\-0-9]*$/, 'colors/safe']
}
