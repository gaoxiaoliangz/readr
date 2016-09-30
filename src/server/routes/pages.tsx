if (process.env.NODE_ENV === 'production') {
  module.exports = require<{default: {}}>('./pages.prod').default
} else {
  module.exports = require<{default: {}}>('./pages.dev').default
}
