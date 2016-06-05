var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    app: ['./assets/built/js/es6/entry/app'],
    console: ['./assets/built/js/es6/entry/console']
    // app: ['./core/frontend/entry/app'],
    // console: ['./core/frontend/entry/console'],
  },
  output: {
    path: path.join(__dirname, 'assets/built/js'),
    filename: '[name].js',
    publicPath: '/built/js/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ],
  devServer: {
    stats: 'errors-only'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ]
      },
      { 
        test: /\.tsx?$/,
        loader: 'ts-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    root: path.resolve('./assets/built/js/es6'),
    // root: path.resolve('./core/frontend'),
    alias: {
      vendor: path.join(__dirname, "assets/vendors"),
      css: path.join(__dirname, "assets/built/css")
    },
    extensions: ['', '.js', '.jsx', '.ts', '.tsx']
  },
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM'
  // }
}
