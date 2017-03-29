import express from 'express'
import _ from 'lodash'
import multer from 'multer'
import middleware from '../middleware'
import httpDecorator from './http-decorator'
import api from '../api'

const FORM_DATA_FILE_KEY = 'file'
const upload = multer()

const authenticatePublic = [
  middleware.prepareApi,
  middleware.parseContext
]

const authenticatePrivate = [
  middleware.prepareApi,
  middleware.parseContext,
  middleware.requirePermissionsOf('user')
]

const authenticateAdmin = [
  middleware.prepareApi,
  middleware.parseContext,
  middleware.requirePermissionsOf('admin')
]

function apiRoutes() {
  const router = express.Router()

  // // books
  // router.get('/books/:book', authenticatePublic, endpoints.findBook)
  // router.get('/books/:book/content', authenticatePublic, endpoints.resolveBookContent)
  // router.get('/books', authenticatePublic, endpoints.listBooks)
  // // router.post('/books', authenticateAdmin, endpoints.book.add) // basic
  // router.post('/books', authenticateAdmin, upload.single(FORM_DATA_FILE_KEY), middleware.logFile, endpoints.addBook) // 处理文件
  // router.put('/books/:book', authenticateAdmin, endpoints.editBookMeta)
  // router.delete('/books/:book', authenticateAdmin, endpoints.removeBook)

  // // file
  // router.get('/files/:file', authenticateAdmin, endpoints.readFile)
  // router.delete('/files/:file', authenticateAdmin, endpoints.delFile)


  // books
  router.get('/books/:id', authenticatePublic, httpDecorator(api.books.find))
  // router.get('/books/:id/content', authenticatePublic, httpDecorator(api.books.resolveBookContent))
  router.get('/books', authenticatePublic, httpDecorator(api.books.list))
  // router.post('/books', authenticateAdmin, upload.single(FORM_DATA_FILE_KEY), middleware.logFile, endpoints.addBook) // 处理文件
  router.put('/books/:id', authenticateAdmin, httpDecorator(api.books.update))
  router.delete('/books/:id', authenticateAdmin, httpDecorator(api.books.del))

  // user
  router.get('/user/books/shelf', authenticatePrivate, httpDecorator(api.user.listShelfBooks))

  // progress
  router.get('/user/books/:bookId/progress', authenticatePrivate, httpDecorator(api.user.getReadingProgress))
  router.put('/user/books/:bookId/progress', authenticatePrivate, httpDecorator(api.user.setReadingProgress))

  // users
  router.get('/users/:id', authenticateAdmin, httpDecorator(api.users.find))
  router.post('/users', authenticatePublic, httpDecorator(api.users.add))
  router.get('/users', authenticateAdmin, httpDecorator(api.users.list))
  router.put('/users/:id', authenticateAdmin, httpDecorator(api.users.update))
  router.delete('/users/:id', authenticateAdmin, httpDecorator(api.users.del))

  // collections
  router.get('/collections/:id', authenticatePublic, httpDecorator(api.collections.find))
  // todo: pagination
  router.get('/collections', authenticatePublic, httpDecorator(api.collections.list))
  router.post('/collections', authenticatePublic, httpDecorator(api.collections.add))
  router.put('/collections/:id', authenticatePublic, httpDecorator(api.collections.update))
  router.delete('/collections/:id', authenticatePublic, httpDecorator(api.collections.del))

  // tags
  router.get('/tags/:id', authenticatePublic, httpDecorator(api.tags.find))
  router.get('/tags', authenticatePublic, httpDecorator(api.tags.list))
  router.post('/tags', authenticatePublic, httpDecorator(api.tags.add))
  router.put('/tags/:id', authenticatePublic, httpDecorator(api.tags.update))
  router.delete('/tags/:id', authenticatePublic, httpDecorator(api.tags.del))

  // authors
  router.get('/authors', authenticatePublic, httpDecorator(api.authors.list))
  router.post('/authors', authenticatePublic, httpDecorator(api.authors.add))
  router.delete('/authors/:id', authenticatePublic, httpDecorator(api.authors.del))
  router.get('/authors/:id', authenticatePublic, httpDecorator(api.authors.find))
  router.put('/authors/:id', authenticatePublic, httpDecorator(api.authors.update))

  // auth
  router.post('/auth', authenticatePublic, middleware.auth.basicAuth)
  router.get('/auth', authenticatePublic, middleware.auth.check)
  router.put('/auth/revoke', authenticatePublic, middleware.auth.revoke)

  return router
}

export default function setupApiApp() {
  const apiApp = express()

  apiApp.use(middleware.setHeader)
  apiApp.use(apiRoutes())
  apiApp.use(middleware.handleApiNotFound)
  apiApp.use(middleware.handleError)

  return apiApp
}
