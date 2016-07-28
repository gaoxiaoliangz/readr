const express: any = require('express')
const middleware: any = require('../middleware')
const router = new express.Router()
const endpoints = require('../endpoints')
// const _ = require('lodash')
import _ from 'lodash'
const api: any = require('../api')
// const roles = require('../models/roles')

function apiRoutes() {
  _.forEach(endpoints, endpoint => {
    if (typeof endpoint.handler !== 'function') {
      throw new Error('Should be function!')
    }

    if (endpoint.requiredRole) {
      router[endpoint.httpMethod](
        endpoint.url,
        middleware.parseContext,
        middleware.requirePermissionsOf(endpoint.requiredRole),
        api.http(endpoint.handler)
      )
    } else {
      router[endpoint.httpMethod](
        endpoint.url,
        // middleware.parseContext,
        api.http(endpoint.handler)
      )
    }
  })

  // auth
  router.post('/auth', middleware.auth.basic)
  router.get('/auth', middleware.parseContext, middleware.auth.check)
  router.put('/auth/revoke', middleware.auth.revoke)

  return router
}

module.exports = apiRoutes()
