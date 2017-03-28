import express from 'express'
import _ from 'lodash'
import multer from 'multer'
import * as endpoints from '../endpoints'
import { ROLES } from '../../constants'
import middleware from '../middleware'
import httpDecorator from './http-decorator'
import * as tags from './tags'
import authors from './authors'

const FORM_DATA_FILE_KEY = 'file'
const upload = multer()

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

  // collections
  router.get('/collections/:id', authenticatePublic, endpoints.collection.findOne) // basic
  router.get('/collections', authenticatePublic, endpoints.listCollections)
  router.post('/collections', authenticatePublic, endpoints.collection.add) // basic
  router.put('/collections/:id', authenticatePublic, endpoints.collection.update) // basic
  router.delete('/collections/:id', authenticatePublic, endpoints.collection.remove) // basic

  // books
  router.get('/books/:book', authenticatePublic, endpoints.findBook)
  router.get('/books/:book/content', authenticatePublic, endpoints.resolveBookContent)
  router.get('/books', authenticatePublic, endpoints.listBooks)
  // router.post('/books', authenticateAdmin, endpoints.book.add) // basic
  router.post('/books', authenticateAdmin, upload.single(FORM_DATA_FILE_KEY), middleware.logFile, endpoints.addBook) // 处理文件
  router.put('/books/:book', authenticateAdmin, endpoints.editBookMeta)
  router.delete('/books/:book', authenticateAdmin, endpoints.removeBook)

  // tags
  router.get('/tags/:id', authenticatePublic, endpoints.tag.findOne) // basic
  router.get('/tags', authenticatePublic, endpoints.tag.list) // basic
  router.post('/tags', authenticatePublic, endpoints.tag.add) // basic
  router.put('/tags/:id', authenticatePublic, endpoints.tag.update) // basic
  router.delete('/tags/:id', authenticatePublic, endpoints.tag.remove) // basic

  // users
  router.get('/users', authenticateAdmin, endpoints.user.list) // basic
  router.post('/users', authenticatePublic, endpoints.addUser)

  // user
  router.get('/user/profile', authenticatePrivate, endpoints.findUser)
  router.get('/user/books/shelf', authenticatePrivate, endpoints.listShelfBooks)

  // progress
  router.get('/user/books/:book/progress', authenticatePrivate, endpoints.getReadingProgress)
  router.put('/user/books/:book/progress', authenticatePrivate, endpoints.setReadingProgress)

  // file
  router.get('/files/:file', authenticateAdmin, endpoints.readFile)
  router.delete('/files/:file', authenticateAdmin, endpoints.delFile)

  // auth
  router.post('/auth', authenticatePublic, middleware.auth.basicAuth)
  router.get('/auth', authenticatePublic, middleware.auth.check)
  router.put('/auth/revoke', authenticatePublic, middleware.auth.revoke)




  // new arch
  router.get('/tags2', httpDecorator(tags.listTags))

  // authors
  router.get('/authors', authenticatePublic, httpDecorator(authors.list))
  router.post('/authors', authenticatePublic, httpDecorator(authors.add))
  router.delete('/authors/:id', authenticatePublic, httpDecorator(authors.del))
  router.get('/authors/:id', authenticatePublic, httpDecorator(authors.find))
  router.put('/authors/:id', authenticatePublic, httpDecorator(authors.update))

  return router
}

export default function setupApiApp() {
  const apiApp = express()

  apiApp.use(middleware.setHeader)
  apiApp.use(apiRoutes())
  // apiApp.use(middleware.handleApiNotFound)
  apiApp.use(middleware.handleError)

  return apiApp
}
