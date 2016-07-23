const path = require('path')
const webpack = require('webpack')
const hot = 'webpack-hot-middleware/client'

module.exports = {
  entry: {
    app: [hot, path.resolve('src/client/entry/app')],
    console: [hot, path.resolve('src/client/entry/console')],
    react: ['react', 'react-dom']
  },
  output: {
    path: path.resolve('assets/built/'),
    publicPath: 'http://localhost:3000/built/',
    filename: '[name].js',
    library: '[name]_lib',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DllPlugin({
      // The path to the manifest file which maps between
      // modules included in a bundle and the internal IDs
      // within that bundle
      path: path.resolve('assets/built/[name]-manifest.json'),
      // The name of the global variable which the library's
      // require function has been assigned to. This must match the
      // output.library option above
      name: '[name]_lib'
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
