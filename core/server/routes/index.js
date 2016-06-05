const api = require('./api')
const frontend  = require('./frontend')
const simpleRouter = require('./simple-router')

module.exports = {
  apiBaseUri: '/api/v0.1/',
  handleApiRouting: api,
  handleFrontendRouting: frontend,
  simpleRouter: simpleRouter
}
