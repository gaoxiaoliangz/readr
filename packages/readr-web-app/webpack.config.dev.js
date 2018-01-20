const { configWebpack, resolveProject } = require('jellyweb')

module.exports = configWebpack({
  babel: {
    babelrc: {
      plugins: [
        ['import', { 'libraryName': 'antd', 'libraryDirectory': 'es', 'style': 'css' }]
      ]
    }
  },
  css: true,
  sass: true,
  media: {
    dataUrl: true,
  }
}, {
  entry: {
    main: resolveProject('src/index.jsx'),
  },
  output: {
    path: resolveProject('build'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  resolve: {
    alias: {
      styles: resolveProject('src/styles')
    },
  },
  devtool: 'sourcemap',
})
