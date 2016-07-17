const apiRoutes = require('./api')
const frontend = require('./frontend')
const simpleRouter = require('./simple-router')

module.exports = {
  apiBaseUri: '/api/',
  apiRoutes,
  handleFrontendRouting: frontend,
  simpleRouter
}
