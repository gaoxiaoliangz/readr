/**
 * webpack 构建生产文件
 * 主要参考配置
 */

const path = require('path')
const webpack = require('webpack')
// const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: ['./src/client/entry/app'],
    console: ['./src/client/entry/console'],
  },
  output: {
    path: path.join(__dirname, 'assets/built'),
    filename: '[name].js',
    publicPath: '/built/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new ExtractTextPlugin('[name].css'),
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('./assets/built/react-manifest.json')
    }),
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('./assets/built/utils-manifest.json')
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[name].[hash].[ext]',
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
      // {
      //   test: /\.scss$/,
      //   loaders: [
      //     'style?sourceMap',
      //     'css?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:5]',
      //     'resolve-url',
      //     // 'postcss?sourceMap'
      //     'sass?sourceMap'
      //   ]
      // },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:5]!resolve-url-loader!sass-loader?sourceMap'
        )
      },
      {
        test: /\.tsx?$/,
        loaders: ['babel', 'ts'],
      },
    ],
  },
  postcss: () => {
    return [require('postcss-cssnext'), require('postcss-import')]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './src/client')]
  },
  resolve: {
    root: path.resolve('./src/client'),
    alias: {
      styles: path.join(__dirname, './src/client/shared/scss'),
    },
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
  },
}
