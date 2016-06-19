'use strict'

const express = require('express')
const api = require('../api-v2')
const middleware = require('../middleware')
const router = new express.Router()

function apiRoute() {
  Object.keys(api.endpoint).forEach(endpoint => {
    router.use(`/${endpoint}`, api.http(api.endpoint[endpoint]))
  })

  return router
}

module.exports = apiRoute
