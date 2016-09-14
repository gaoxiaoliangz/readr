import webpack from 'webpack'
const base: any = require('../../../webpack/webpack.base.config')
const paths = base.vars.paths
const hot = base.vars.hot

export default {
  entry: {
    app: [hot, `${paths.entry}/app`]
  },
  output: {
    path: paths.built,
    publicPath: 'http://localhost:3000/built/',
    // publicPath: 'http://192.168.0.102:3000/built/',
    // publicPath: '/built/',
    filename: '[name].js',
  },
  plugins: [
    base.plugins.envDev,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    ...base.plugins.dllReference(),
  ],
  devtool: 'inline-source-map',
  module: {
    loaders: [
      base.loaders.image(),
      base.loaders.sass({
        sourceMap: true
      }),
      base.loaders.postcss({
        sourceMap: true
      }),
      base.loaders.babel,
      base.loaders.ts({
        isHot: true
      })
    ]
  },
  sassLoader: base.loaderConfig.sassLoader,
  postcss: base.loaderConfig.postcss(),
  resolve: base.resolve
}
