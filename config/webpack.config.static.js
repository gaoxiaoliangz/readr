const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin') // eslint-disable-line
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') // eslint-disable-line
const WebpackMd5Hash = require('webpack-md5-hash') // eslint-disable-line
const path = require('path')
const paths = require('./paths')
const rules = require('./webpack-rules')
const vars = require('./webpack-vars')

module.exports = {
  entry: {
    app: ['babel-polyfill', paths.appIndex],
    vendor: vars.vendorLibs,
    'frameworks.global': path.join(paths.appStyles, 'frameworks.global.scss')
  },
  output: {
    path: paths.buildStatic,
    filename: 'js/[name].[chunkhash:10].js',
    chunkFilename: 'js/chunk.[chunkhash:10].[id].js',
    publicPath: paths.publicPath
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"production"`,
    }),

    new ExtractTextPlugin({
      filename: 'css/[name].[chunkhash:10].css',
      disable: false,
      allChunks: true
    }),

    new ManifestPlugin({
      fileName: 'assets.manifest.json'
    }),

    new WebpackMd5Hash(),

    new webpack.optimize.CommonsChunkPlugin({
      // if using names, order matters
      name: 'vendor',
      minChunks: Infinity
    }),

    new webpack.optimize.UglifyJsPlugin(),

    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'), // eslint-disable-line
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    })
  ],
  // devtool: 'source-map',
  module: {
    rules: [
      rules.js(),
      rules.ts({ officialLoader: false }),
      rules.scssLocal({ extract: true, isomorphic: false, sourceMap: false }),
      rules.scssGlobal({ extract: true, isomorphic: false, sourceMap: false }),
      rules.css({ extract: true, isomorphic: false }),
      rules.img(),
      rules.gql()
    ],
  },
  resolve: vars.resolve
}
