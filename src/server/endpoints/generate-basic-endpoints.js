'use strict'
const _ = require('lodash')
const api = require('../api')

function generateBasicEndpoints(basicApi) {
  let endpoints = []

  _.forEach(basicApi, apiContainer => {
    const endpoint = apiContainer._publicMethods.map(method => {
      const apiMethod = apiContainer[method.name]

      return {
        url: method.url,
        handler: api.http(data => {
          // todo: add parser
          return apiMethod(data)
        }),
        httpMethod: method.httpMethod
      }
    })
    
    endpoints = endpoints.concat(endpoint)
  })

  return endpoints
}

module.exports = generateBasicEndpoints
