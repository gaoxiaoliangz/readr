const _ = require('lodash')
// const api = require('../api')
const resolveApi = require('./resolve-api')

module.exports = function generateExtendedEndpoints(config) {
  return _.map(config, endpoint => {
    const resolvedApi = resolveApi(endpoint.api)
    const httpMethod = resolvedApi.httpMethod
    const apiMethod = resolvedApi.apiMethod
    let handler = endpoint.handler

    if (endpoint.parser) {
      handler = req => apiMethod.apply(null, endpoint.parser(req))
    }

    return {
      url: endpoint.url,
      httpMethod,
      handler,
      requiredRole: endpoint.requiredRole
    }
  })
}
