const base = require('../webpack.base.config')
const paths = base.vars.paths

module.exports = {
  entry: {
    app: [`${paths.src}/routes/app`],
    console: [`${paths.src}/routes/console`],
    'configure-store': [`${paths.src}/store/configure-store`],
  },
  output: {
    path: `${paths.root}/bin`,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    base.plugins.nodeSourceMapSupport,
    base.plugins.envProd,
    base.plugins.occurenceOrder,
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
  // target: 'node',
  // node: {
  //   __filename: true,
  //   __dirname: true,
  //   console: true
  // },
  externals: /^[a-z][a-z\.\-0-9]*$/,
}
