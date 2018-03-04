const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolveProject, presets } = require('jellyweb')

module.exports = {
  entry: {
    main: [
      'babel-polyfill',
      resolveProject('src/index.jsx')
    ],
  },
  output: {
    path: resolveProject('build'),
    filename: '[name]-[hash].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      styles: resolveProject('src/styles')
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: resolveProject('build/index.html'),
      template: resolveProject('src/index.html'),
      excludeChunks: ['app'],
      inject: false,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: false
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
  ],
  features: Object.assign({}, presets.production, {
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
    splitVendor: true,
    define: {
      __DEV__: true
    },
    scopedClassName: '[hash:base64:8]',
  })
}
