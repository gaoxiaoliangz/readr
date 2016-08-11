'use strict'
const _ = require('lodash')
const api = require('../api')
const utils = require('../api/utils')

// todo
const itemsPerPage = 5

function getParserByMethodName(methodName) {
  switch (methodName) {
    case 'find':
      return request => {
        return [
          utils.getIdMatch(request.params)
        ]
      }

    case 'list':
      return request => {
        // console.log(request.query)
        return [
          {},
          _.assign({}, request.query, {
            itemsPerPage
          })
        ]
      }

    case 'update':
      return request => {
        return [
          utils.getIdMatch(request.params),
          request.data
        ]
      }

    case 'remove':
      return request => {
        return [
          utils.getIdMatch(request.params)
        ]
      }

    case 'add':
      return request => {
        return [
          request.body
        ]
      }

    default:
      throw new Error(`Method name (${methodName}) not defined!`)
  }
}

function generateBasicEndpoints(basicApi) {
  let endpoints = []

  _.forEach(basicApi, apiContainer => {
    const endpoint = apiContainer._publicMethods.map(method => {
      const apiMethod = apiContainer[method.name]
      const parser = getParserByMethodName(method.name)

      return {
        url: method.url,
        handler: req => {
          return apiMethod.apply(null, parser(req))
        },
        httpMethod: method.httpMethod
      }
    })

    endpoints = endpoints.concat(endpoint)
  })

  return endpoints
}

module.exports = generateBasicEndpoints
