import express from 'express'
import middleware from '../middleware'
import _ from 'lodash'
import * as endpoints from '../endpoints-v3'
import apiResponse from '../api-v3/api-response'
import roles from '../models/roles'

const router = express.Router()

export default function apiRoutes() {
  // authors
  router.get('/authors/:id', endpoints.author.findById, apiResponse)
  router.get('/authors', endpoints.author.list, apiResponse)
  router.post('/authors', endpoints.author.add, apiResponse)
  router.put('/authors/:id', endpoints.author.update, apiResponse)
  router.delete('/authors/:id', endpoints.author.remove, apiResponse)

  // collections
  router.get('/collections/:id', endpoints.collection.findById, apiResponse)
  router.get('/collections', endpoints.listCollections, apiResponse) // special
  router.post('/collections', endpoints.collection.add, apiResponse)
  router.put('/collections/:id', endpoints.collection.update, apiResponse)
  router.delete('/collections/:id', endpoints.collection.remove, apiResponse)

  // books
  router.get('/books/:id', endpoints.book.findById, apiResponse)
  router.get('/books', endpoints.listBooks, apiResponse) // special
  // todo
  // router.post('/books', endpoints.book.add, apiResponse)
  router.put('/books/:id', endpoints.book.update, apiResponse)
  router.delete('/books/:id', endpoints.book.remove, apiResponse)

  // tags
  router.get('/tags/:id', endpoints.tag.findById, apiResponse)
  router.get('/tags', endpoints.tag.list, apiResponse)
  router.post('/tags', endpoints.tag.add, apiResponse)
  router.put('/tags/:id', endpoints.tag.update, apiResponse)
  router.delete('/tags/:id', endpoints.tag.remove, apiResponse)

  // users
  router.get('/users', middleware.parseContext, middleware.requirePermissionsOf(roles.admin), endpoints.user.list, apiResponse)

  // auth
  router.post('/auth', middleware.auth.basic)
  router.get('/auth', middleware.parseContext, middleware.auth.check)
  router.put('/auth/revoke', middleware.auth.revoke)

  return router
}
