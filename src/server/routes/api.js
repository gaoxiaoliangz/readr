'use strict'
const express = require('express')
const middleware = require('../middleware')
const router = new express.Router()
const endpoints = require('../endpoints')
const _ = require('lodash')

function apiRoutes() {
  _.forEach(endpoints, endpoint => {
    // console.log(endpoint)
    router[endpoint.httpMethod](endpoint.url, endpoint.handler)
  })

  // auth
  router.post('/auth', middleware.auth.basic)
  router.get('/auth', middleware.auth.check)

  return router
}

module.exports = apiRoutes()
