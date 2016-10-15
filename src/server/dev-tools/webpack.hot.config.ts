import webpack from 'webpack'
const base = require('../../../webpack/base')
const paths = base.vars.paths
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: {
    app: [
      // 需要放在第一个
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      'babel-polyfill',
      paths.isomorphic
    ]
  },
  output: {
    path: paths.built,
    filename: '[name].js',
    // publicPath: 'http://localhost:3000/built/',
    // publicPath: 'http://192.168.0.102:3000/built/',
    publicPath: '/built/',
  },
  plugins: [
    base.plugins.devEnv(),
    ...base.plugins.dllReferences(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css', {
      allChunks: true
    }),
  ],
  devtool: 'inline-source-map',
  module: {
    loaders: [
      base.loaders.image(),
      base.loaders.sass({
        sourceMap: true,
        extract: true,
      }),
      base.loaders.postcss({
        sourceMap: true,
        extract: true,
      }),
      base.loaders.babel(),
      base.loaders.typescript({
        officialLoader: false,
        isHot: true
      })
    ]
  },
  sassLoader: base.loaders.loaderConfig.sassLoader(),
  postcss: base.loaders.loaderConfig.postcss(),
  resolve: base.common.resolve
}

export default config
