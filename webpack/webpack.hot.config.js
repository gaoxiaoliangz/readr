const path = require('path')
const webpack = require('webpack')
const hot = 'webpack-hot-middleware/client'

module.exports = {
  entry: {
    app: [hot, path.resolve('src/client/entry/app')],
    console: [hot, path.resolve('src/client/entry/console')],
  },
  output: {
    path: path.resolve('assets/built/'),
    publicPath: 'http://localhost:3000/built/',
    filename: '[name].js',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('../../../assets/built/react-manifest.json')
    }),
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('../../../assets/built/utils-manifest.json')
    }),
  ],
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:5]',
          'resolve-url',
          'sass?sourceMap',
          // 'postcss?sourceMap',
        ]
      },
      {
        test: /\.tsx?$/,
        loaders: ['react-hot', 'babel', 'awesome-typescript'],
      },
    ],
  },
  // postcss: () => {
  //   return [require('postcss-cssnext'), require('postcss-import')]
  // },
  sassLoader: {
    includePaths: [path.resolve('src/client')]
  },
  resolve: {
    root: path.resolve('src/client'),
    alias: {
      styles: path.resolve('src/client/shared/scss'),
    },
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
  },
}
