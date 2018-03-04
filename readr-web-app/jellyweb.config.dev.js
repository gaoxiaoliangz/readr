const webpack = require('webpack')
const { resolveProject } = require('jellyweb')

module.exports = {
  entry: {
    main: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:4006', // WebpackDevServer host and port
      'webpack/hot/only-dev-server',
      resolveProject('src/index.jsx')
    ],
  },
  output: {
    path: resolveProject('build'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      styles: resolveProject('src/styles')
    },
  },
  devtool: 'sourcemap',
  features: {
    babel: {
      options: {
        presets: [
          ['env', {
            modules: false,
          }],
        ],
        plugins: [
          'react-hot-loader/babel',
          ['import', { 'libraryName': 'antd', 'libraryDirectory': 'es', 'style': 'css' }],
        ]
      }
    },
    css: true,
    sass: {
      scoped: true
    },
    media: {
      dataUrl: true
    },
    define: {
      __DEV__: true
    }
  }
}
