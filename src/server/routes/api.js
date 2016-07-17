'use strict'
const express = require('express')
const api = require('../api')
const middleware = require('../middleware')
const router = new express.Router()
const endpoints = require('../api/endpoints')
// const _ = require('lodash')


function apiRoute() {
  endpoints.forEach(ep => {
    if (typeof ep.fn === 'function') {
      router[ep.httpMethod](ep.url, api.http(ep.fn))
    }
  })

  // auth
  router.post('/auth', middleware.auth.basic)
  router.get('/auth', middleware.auth.check)

  return router
}

module.exports = apiRoute()
