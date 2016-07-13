'use strict'
const API = require('./index')
const _ = require('lodash')

function createEndpoints(api) {
  return api._publicMethods.map(mtd => {
    return {
      url: mtd.url,
      fn: api[mtd.name],
      httpMethod: mtd.httpMethod
    }
  })
}

let endpoints = []

_.forEach(API._api, api => {  
  endpoints = endpoints.concat(createEndpoints(api))
})

module.exports = endpoints
