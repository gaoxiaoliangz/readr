const path = require('path')
const webpack = require('webpack')
// const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    react: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, 'assets/built'),
    filename: '[name].bundle.js',
    library: '[name]_lib',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.DllPlugin({
      // The path to the manifest file which maps between
      // modules included in a bundle and the internal IDs
      // within that bundle
      path: path.join(__dirname, 'assets/built/[name]-manifest.json'),
      // The name of the global variable which the library's
      // require function has been assigned to. This must match the
      // output.library option above
      name: '[name]_lib'
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
