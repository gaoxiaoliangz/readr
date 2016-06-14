'use strict'

const express = require('express')
const api = require('../api2')
const middleware = require('../middleware')
const router = new express.Router()


function handleApiRouting2() {
  // authors
  router.post('/authors', middleware.getUserInfo, api.http(api.authors.add))
  // router.get('/authors', middleware.getUserInfo, api.http(api.authors.browse))
  router.get('/authors/:id', middleware.getUserInfo, api.http(api.authors.find))

  return router
}

module.exports = handleApiRouting2
