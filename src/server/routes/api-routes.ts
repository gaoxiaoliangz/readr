import express from 'express'
import middleware from '../middleware'
import _ from 'lodash'
import * as endpoints from '../endpoints'
import { ROLES } from '../../isomorphic/constants'

const authenticatePublic = [
  middleware.prepareApi,
  middleware.parseContext
]

const authenticatePrivate = [
  middleware.prepareApi,
  middleware.parseContext,
  middleware.requirePermissionsOf(ROLES.USER)
]

const authenticateAdmin = [
  middleware.prepareApi,
  middleware.parseContext,
  middleware.requirePermissionsOf(ROLES.ADMIN)
]

function apiRoutes() {
  const router = express.Router()

  // authors
  router.get('/authors/:id', authenticatePublic, endpoints.author.findOne)
  router.get('/authors', authenticatePublic, endpoints.author.list)
  router.post('/authors', authenticatePublic, endpoints.author.add)
  router.put('/authors/:id', authenticatePublic, endpoints.author.update)
  router.delete('/authors/:id', authenticatePublic, endpoints.author.remove)

  // collections
  router.get('/collections/:id', authenticatePublic, endpoints.collection.findOne)
  router.get('/collections', authenticatePublic, endpoints.listCollections) // special
  router.post('/collections', authenticatePublic, endpoints.collection.add)
  router.put('/collections/:id', authenticatePublic, endpoints.collection.update)
  router.delete('/collections/:id', authenticatePublic, endpoints.collection.remove)

  // books
  // todo
  router.get('/books/:book', authenticatePublic, endpoints.findBook)
  router.get('/books', authenticatePublic, endpoints.listBooks) // special
  router.post('/books', authenticateAdmin, endpoints.book.add)
  router.put('/books/:id', authenticateAdmin, endpoints.book.update)
  router.delete('/books/:id', authenticateAdmin, endpoints.book.remove)

  // tags
  router.get('/tags/:id', authenticatePublic, endpoints.tag.findOne)
  router.get('/tags', authenticatePublic, endpoints.tag.list)
  router.post('/tags', authenticatePublic, endpoints.tag.add)
  router.put('/tags/:id', authenticatePublic, endpoints.tag.update)
  router.delete('/tags/:id', authenticatePublic, endpoints.tag.remove)

  // users
  router.get('/users', authenticateAdmin, endpoints.user.list)
  router.post('/users', endpoints.addUser)

  // user
  router.get('/user/profile', authenticatePrivate, endpoints.findUser)
  router.get('/user/books/shelf', authenticatePrivate, endpoints.listShelfBooks)

  // progress
  router.get('/user/books/:book/progress', authenticatePrivate, endpoints.getReadingProgress)
  router.put('/user/books/:book/progress', authenticatePrivate, endpoints.setReadingProgress)

  // file
  router.get('/files/:file', authenticatePublic, endpoints.readFile)

  // auth
  router.post('/auth', authenticatePublic, middleware.auth.basicAuth)
  router.get('/auth', authenticatePublic, middleware.auth.check)
  router.put('/auth/revoke', authenticatePublic, middleware.auth.revoke)

  return router
}

export default function setupApiApp() {
  const apiApp = express()

  apiApp.use(apiRoutes())

  apiApp.use(middleware.handleApiNotFound)
  apiApp.use(middleware.handleJSONResponse)
  apiApp.use(middleware.handleError)

  return apiApp
}
