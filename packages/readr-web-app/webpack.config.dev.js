const webpack = require('webpack')
const { configWebpack, resolveProject } = require('jellyweb')

module.exports = configWebpack({
  features: [
    ['babel', {
      options: () => ({
        presets: [
          'react',
          ['es2015', { modules: false }],
        ],
        plugins: [
          'transform-class-properties',
          'transform-object-rest-spread',
          'syntax-dynamic-import',
          'react-hot-loader/babel',
          ['import', { 'libraryName': 'antd', 'libraryDirectory': 'es', 'style': 'css' }],
        ]
      })
    }],
    'css',
    ['sass', {
      scoped: true
    }],
    ['media', {
      dataUrl: true
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
