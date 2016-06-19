const apiRoute1 = require('./api-v1')
const apiRoute2 = require('./api-v2')
const frontend = require('./frontend')
const simpleRouter = require('./simple-router')

function handleApiRouting(version) {
  if (version === 1) {
    return apiRoute1()
  }

  // use the latest as default
  return apiRoute2()
}

module.exports = {
  apiBaseUri: '/api/',
  handleApiRouting,
  handleFrontendRouting: frontend,
  simpleRouter
}
