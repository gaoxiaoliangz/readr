import express from 'express'
import middleware from '../middleware'
import endpoints from '../endpoints'
import _ from 'lodash'
// import api from '../api'

const router = express.Router()

function apiRoutes() {
  _.forEach(endpoints, endpoint => {
    if (typeof endpoint.handler !== 'function') {
      throw new Error('Should be a function!')
    }

    if (endpoint.requiredRole) {
      router[endpoint.httpMethod](
        endpoint.url,
        middleware.parseContext,
        middleware.requirePermissionsOf(endpoint.requiredRole),
        endpoint.handler
      )
    } else {
      router[endpoint.httpMethod](
        endpoint.url,
        // middleware.parseContext,
        endpoint.handler
      )
    }
  })

  // auth
  router.post('/auth', middleware.auth.basic)
  router.get('/auth', middleware.parseContext, middleware.auth.check)
  router.put('/auth/revoke', middleware.auth.revoke)

  return router
}

export default apiRoutes()
