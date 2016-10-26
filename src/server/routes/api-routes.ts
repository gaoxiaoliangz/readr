import express from 'express'
import middleware from '../middleware'
import _ from 'lodash'
import * as endpoints from '../endpoints'
import apiResponse from '../api/api-response'
import { ROLES } from '../../isomorphic/constants'

const router = express.Router()

const authenticatePrivate = [
  middleware.parseContext,
  middleware.requirePermissionsOf(ROLES.USER)
]

const authenticateAdmin = [
  middleware.parseContext,
  middleware.requirePermissionsOf(ROLES.ADMIN)
]

export default function apiRoutes() {
  // authors
  router.get('/authors/:id', endpoints.author.findOne)
  router.get('/authors', endpoints.author.list)
  router.post('/authors', endpoints.author.add)
  router.put('/authors/:id', endpoints.author.update)
  router.delete('/authors/:id', endpoints.author.remove)

  // collections
  router.get('/collections/:id', endpoints.collection.findOne)
  router.get('/collections', endpoints.listCollections) // special
  router.post('/collections', endpoints.collection.add)
  router.put('/collections/:id', endpoints.collection.update)
  router.delete('/collections/:id', endpoints.collection.remove)

  // books
  // todo
  router.get('/books/:id', endpoints.book.findOne)
  router.get('/books', endpoints.listBooks) // special
  // router.post('/books', endpoints.book.add)
  router.put('/books/:id', endpoints.book.update)
  router.delete('/books/:id', endpoints.book.remove)

  // tags
  router.get('/tags/:id', endpoints.tag.findOne)
  router.get('/tags', endpoints.tag.list)
  router.post('/tags', endpoints.tag.add)
  router.put('/tags/:id', endpoints.tag.update)
  router.delete('/tags/:id', endpoints.tag.remove)

  // users
  router.get('/users', authenticateAdmin, endpoints.user.list)
  router.post('/users', endpoints.addUser)

  // user
  router.get('/user/profile', authenticatePrivate, endpoints.findUser)
  router.get('/user/books/shelf', authenticatePrivate, endpoints.listShelfBooks)

  // progress
  router.get('/user/books/:book/progress', authenticatePrivate, endpoints.getReadingProgress)
  router.put('/user/books/:book/progress', authenticatePrivate, endpoints.setReadingProgress)

  // auth
  router.post('/auth', middleware.auth.basicAuth)
  router.get('/auth', middleware.parseContext, middleware.auth.check)
  router.put('/auth/revoke', middleware.auth.revoke)

  router.use(apiResponse)
  router.use(middleware.handleError)

  return router
}
