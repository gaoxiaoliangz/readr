const _ = require('lodash')
const api = require('../api')
const resolveApi = require('./resolve-api')

module.exports = function generateExtendedEndpoints(config) {
  return _.map(config, endpoint => {
    const resolvedApi = resolveApi(endpoint.api)
    const httpMethod = resolvedApi.httpMethod
    const apiMethod = resolvedApi.apiMethod    

    return {
      url: endpoint.url,
      httpMethod,
      handler: api.http(data => {
        return apiMethod(endpoint.parser(data))
      })
    }
  })
}
