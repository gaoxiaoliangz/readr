if (process.env.NODE_ENV === 'production') {
  module.exports = require('./pages.prod').default
} else {
  module.exports = require('./pages.dev').default
}
