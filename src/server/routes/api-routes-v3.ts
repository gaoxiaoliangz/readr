import express from 'express'
import middleware from '../middleware'
import _ from 'lodash'
import * as endpoints from '../endpoints-v3'
import apiResponse from '../api-v3/api-response'

const router = express.Router()

export default function apiRoutes() {
  // author
  router.get('/authors/:id', endpoints.author.findById, apiResponse)
  router.get('/authors', endpoints.author.list, apiResponse)
  router.post('/authors', endpoints.author.add, apiResponse)
  router.put('/authors/:id', endpoints.author.update, apiResponse)
  router.delete('/authors/:id', endpoints.author.remove, apiResponse)

  router.get('/books/:book', endpoints.findBook, apiResponse)
  router.get('/books', endpoints.listBooks, apiResponse)
  router.get('/collections', endpoints.listCollections, apiResponse)

  // auth
  router.post('/auth', middleware.auth.basic)
  router.get('/auth', middleware.parseContext, middleware.auth.check)
  router.put('/auth/revoke', middleware.auth.revoke)

  return router
}
