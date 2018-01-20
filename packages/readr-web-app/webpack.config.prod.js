const { configWebpack, resolveProject } = require('jellyweb')

module.exports = configWebpack({
  babel: {
    react: true,
  },
  css: {
    extract: true
  },
  sass: {
    extract: true
  },
  media: {
    dataUrl: true,
  },
  production: true,
  env: {}
}, {
  entry: {
    main: resolveProject('src/index.jsx'),
  },
  output: {
    path: resolveProject('build'),
    filename: '[name]-[hash].js',
    publicPath: '/static/'
  },
  resolve: {
    alias: {
      styles: resolveProject('src/styles')
    },
  },
})
