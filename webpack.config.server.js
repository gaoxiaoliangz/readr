const path = require('path')
const webpack = require('webpack')
// const fs = require('fs')

module.exports = {
  entry: {
    app: ['./core/frontend/routes/App'],
    console: ['./core/frontend/routes/Console'],
    configureStore: ['./core/frontend/store/configureStore'],
  },
  node: {
    __filename: true,
    __dirname: true,
    console: true
  },
  output: {
    path: path.join(__dirname, 'assets/built/server'),
    filename: '[name].js',
    // publicPath: '/built/es5/routes',
    libraryTarget: 'commonjs2'
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
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
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
          // 'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
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
  // externals: /^[a-z][a-z\.\-0-9]*$/,
  target: 'node',
  externals: ['react', 'react-dom', 'isomorphic-fetch']
}
