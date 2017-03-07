const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals') // eslint-disable-line
const paths = require('./paths')
const rules = require('./webpack-rules')
const vars = require('./webpack-vars')

module.exports = {
  entry: {
    index: ['babel-polyfill', paths.serverSrc]
  },
  output: {
    path: paths.buildBin,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    chunkFilename: 'chunk.[id].js',

    // editor break point support
    devtoolModuleFilenameTemplate: '../../[resource-path]'
  },
  plugins: [
    // add support for node source map
    new webpack.BannerPlugin({
      banner: `require('source-map-support').install()`,
      raw: true,
      entryOnly: true
    })
  ],
  module: {
    rules: [
      rules.img({ emitFile: false }),
      rules.js(),
      rules.ts({ officialLoader: false }),
      rules.scssLocal({ isomorphic: true, extract: false }),
      rules.css({ isomorphic: true })
    ]
  },
  devtool: 'source-map',
  resolve: vars.resolve,
  target: 'node',
  node: {
    __filename: true,
    __dirname: true,
    console: false
  },
  externals: [nodeExternals()]
}
