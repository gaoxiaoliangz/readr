'use strict'

const express = require('express')
const api = require('../api')
const middleware = require('../middleware')
const router = express.Router()

function apiRoutes() {
  router.get('/books', middleware.getUserInfo, api.http(api.books.getBooks))
  router.post('/books', middleware.getUserInfo, api.http(api.books.addBook))
  router.get('/books/:id/', api.http(api.books.getBookInfo))
  router.delete('/books/:id/', middleware.getUserInfo, api.http(api.books.deleteBook))
  router.get('/books/:id/content', api.http(api.books.getBookContent));
  router.post('/books/:id/progress',middleware.getUserInfo, api.http(api.books.updateReadingProgress))
  router.get('/books/:id/progress',middleware.getUserInfo, api.http(api.books.getReadingProgress))

  router.post('/users', api.http(api.users.addUser))
  router.get('/users', middleware.getUserInfo, api.http(api.users.listUsers))
  router.post('/users/:id/role', middleware.getUserInfo, api.http(api.users.setUserRole))

  router.post('/auth', middleware.auth.basic)
  router.get('/auth', middleware.getUserInfo, api.http(api.auth.checkStatus))

  return router
}

module.exports = apiRoutes
