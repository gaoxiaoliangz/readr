const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: ['./core/frontend/entry/app'],
    console: ['./core/frontend/entry/console'],
  },
  output: {
    path: path.join(__dirname, 'assets/built'),
    filename: '[name].built.js',
    publicPath: '/built/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[name]-[hash].[ext]',
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
          // 'postcss?sourceMap'
          'sass?sourceMap'
        ]
      },
      {
        test: /\.tsx?$/,
        loaders: ['react-hot', 'babel-loader', 'awesome-typescript-loader'],
      },
    ],
  },
  postcss: () => {
    return [require('postcss-cssnext'), require('postcss-import')]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './core/frontend')]
  },
  resolve: {
    root: path.resolve('./core/frontend'),
    alias: {
      vendor: path.join(__dirname, 'assets/vendors'),
      css: path.join(__dirname, 'assets/built'),
    },
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
  },
}
