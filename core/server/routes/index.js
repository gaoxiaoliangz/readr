const api = require('./api')
const api2 = require('./api2')
const frontend  = require('./frontend')
const simpleRouter = require('./simple-router')

module.exports = {
  apiBaseUri: '/api/v0.1/',
  apiBaseUri2: '/api/v0.2/',
  handleApiRouting: api,
  handleApiRouting2: api2,
  handleFrontendRouting: frontend,
  simpleRouter: simpleRouter
}
