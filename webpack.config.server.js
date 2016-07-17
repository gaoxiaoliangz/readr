const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: ['./src/client/routes/App'],
    console: ['./src/client/routes/Console'],
    configureStore: ['./src/client/store/configureStore'],
  },
  output: {
    path: path.join(__dirname, 'bin'),
    filename: '[name].js',
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
          'isomorphic-style-loader',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:5]',
          'resolve-url',
          'sass?sourceMap'
        ]
      },
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader', 'awesome-typescript-loader'],
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
      styles: path.join(__dirname, 'src/client/shared/scss'),
    },
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
  },
  // externals: /^[a-z][a-z\.\-0-9]*$/,
  // target: 'node',
  // node: {
  //   __filename: true,
  //   __dirname: true,
  //   console: true
  // },
  // externals: ['react', 'react-dom']
  externals: [
    'react', 'react-dom', 'isomorphic-fetch', 'react-router', 
    'react-redux', 'lodash', 'normalizr', 'humps', 'react-addons-css-transition-group',
    'jquery', 'redux-thunk', 'redux', 'redux-devtools-log-monitor', 'redux-devtools-dock-monitor'
  ]
}
