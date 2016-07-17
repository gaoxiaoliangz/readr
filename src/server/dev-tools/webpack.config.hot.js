const path = require('path')
const webpack = require('webpack')
const hot = 'webpack-hot-middleware/client'


module.exports = {
  entry: {
    app: [hot, './src/client/entry/app'],
    console: [hot, './src/client/entry/console'],
  },
  output: {
    path: path.join(__dirname, 'assets/built'),
    filename: '[name].js',
    publicPath: '/built/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
  ],
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
        loaders: ['react-hot', 'babel-loader', 'awesome-typescript-loader'],
      },
    ],
  },
  // postcss: () => {
  //   return [require('postcss-cssnext'), require('postcss-import')]
  // },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './src/client')]
  },
  resolve: {
    root: path.resolve('./src/client'),
    alias: {
      styles: path.join(__dirname, 'src/client/shared/scss'),
    },
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
  },
}
