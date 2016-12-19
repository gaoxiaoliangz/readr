const nodeExternals = require('webpack-node-externals')
const base = require('./base')
const paths = base.vars.paths

module.exports = {
  entry: {
    index: ['babel-polyfill', paths.server]
  },
  output: {
    path: `${paths.root}/bin/server`,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    base.plugins.nodeSourceMapSupport(),
  ],
  module: {
    loaders: [
      base.loaders.image({
        emitFile: false
      }),
      base.loaders.babel(),
      base.loaders.sass({
        isomorphic: true
      }),
      base.loaders.postcss({
        isomorphic: true
      }),
      base.loaders.typescript({
        officialLoader: true
      }),
      base.loaders.json()
    ],
  },
  devtool: 'inline-source-map',
  sassLoader: base.loaders.loaderConfig.sassLoader(),
  resolve: base.common.resolve,
  target: 'node',
  node: {
    __filename: true,
    __dirname: true,
    console: false
  },
  // externals: [
  //   /^[a-z][a-z\.\-0-9]*$/,
  //   'colors/safe',
  //   'react'
  // ]
  externals: [nodeExternals()]
}
