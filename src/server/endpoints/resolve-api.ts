const _ = require('lodash')
const api = require('../api')
const mapHttpMethod = require('./map-http-method')

function resolveApi(apiPath) {
  const apiMethod = _.get(api, apiPath)
  const httpMethod = mapHttpMethod(_.last(apiPath.split('.')))

  if (!apiMethod) {
    throw new Error(`Api path (${apiPath}) cannot be resolved!`)
  }

  return { apiMethod, httpMethod }
}

module.exports = resolveApi
