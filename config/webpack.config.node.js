const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals') // eslint-disable-line
const WebpackMd5Hash = require('webpack-md5-hash') // eslint-disable-line
const paths = require('./paths')
const rules = require('./webpack-rules')
const vars = require('./webpack-vars')

module.exports = {
  entry: {
    // index: ['babel-polyfill', paths.serverSrc]
    index: [paths.serverSrc]
  },
  output: {
    path: paths.buildNode,
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
    }),

    new WebpackMd5Hash(),
  ],
  module: {
    rules: [
      rules.img({ emitFile: false }),
      rules.ts({ officialLoader: false }),
      rules.scssLocal({ isomorphic: true, extract: false }),
      rules.css({ isomorphic: true }),
      rules.gql()
    ]
  },
  devtool: 'source-map',
  resolve: vars.resolve,
  target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false
  },
  externals: [nodeExternals()]
}
