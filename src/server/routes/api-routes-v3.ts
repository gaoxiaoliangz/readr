import express from 'express'
import middleware from '../middleware'
import _ from 'lodash'
import * as endpoints from '../endpoints-v3'
import apiResponse from '../api-v3/api-response'

const router = express.Router()

export default function apiRoutes() {
  router.get('/books/:book', endpoints.findBook, apiResponse)
  router.get('/books', endpoints.listBooks, apiResponse)
  router.get('/collections', endpoints.listCollections, apiResponse)

  // auth
  router.post('/auth', middleware.auth.basic)
  router.get('/auth', middleware.parseContext, middleware.auth.check)
  router.put('/auth/revoke', middleware.auth.revoke)

  return router
}
