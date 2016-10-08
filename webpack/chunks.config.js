// # 构建开发环境脚本
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const base = require('./webpack/webpack.base.config')
const paths = base.vars.paths

module.exports = {
  entry: {
    app: `${paths.entry}/app`,
  },
  output: {
    path: paths.built,
    filename: '[name].js',
    publicPath: '/built/'
  },
  plugins: [
    base.plugins.envDev,
    ...base.plugins.dllReference(),
    new ExtractTextPlugin('[name].css', {
      allChunks: true
    }),
  ],
  devtool: 'inline-source-map',
  module: {
    loaders: [
      base.loaders.image(),
      base.loaders.babel,
      base.loaders.sass({
        sourceMap: true,
        extract: true
      }),
      base.loaders.postcss({
        sourceMap: true,
        extract: true
      }),
      base.loaders.ts({
        officialLoader: false
      }),
    ],
  },
  sassLoader: base.loaderConfig.sassLoader,
  postcss: base.loaderConfig.postcss(),
  resolve: base.resolve,
}
