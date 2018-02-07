const webpack = require('webpack')
const { configWebpack, resolveProject } = require('jellyweb')

module.exports = configWebpack({
  features: [
    ['babel', {
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
    }],
    'css',
    ['sass', {
      scoped: true
    }],
    ['media', {
      dataUrl: true
    }],
    ['define', {
      __DEV__: true
    }]
  ]
}, {
  entry: {
    main: [
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
})
