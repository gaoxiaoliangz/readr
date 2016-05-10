'use strict'

const express = require('express')
const api = require('../api')
const middleware = require('../middleware')
const router = express.Router()

function apiRoutes() {
  // authors
  router.post('/authors', middleware.getUserInfo, api.http(api.authors.add))
  router.get('/authors', middleware.getUserInfo, api.http(api.authors.browse))
  router.get('/authors/:id', middleware.getUserInfo, api.http(api.authors.find))

  // collections
  router.post('/collections', middleware.getUserInfo, api.http(api.collections.add))
  router.get('/collections', middleware.getUserInfo, api.http(api.collections.browse))
  router.get('/collections/:id', middleware.getUserInfo, api.http(api.collections.find))

  // books
  router.post('/books', middleware.getUserInfo, api.http(api.books.add))
  router.get('/books', middleware.getUserInfo, api.http(api.books.browse))
  router.delete('/books/:id', middleware.getUserInfo, api.http(api.books.delete))
  router.get('/books/:id', api.http(api.books.find))
  router.get('/search', middleware.getUserInfo, api.http(api.books.search))
  // router.get('/books/:id/content', api.http(api.books.getBookContent));

  router.post('/books/:id/progress',middleware.getUserInfo, api.http(api.books.setProgress))
  router.get('/books/:id/progress',middleware.getUserInfo, api.http(api.books.getProgress))


  // users
  router.post('/users', api.http(api.users.add))
  router.get('/users', middleware.getUserInfo, api.http(api.users.browse))
  router.post('/users/:id/role', middleware.getUserInfo, api.http(api.users.setRole))

  // auth
  router.post('/auth', middleware.auth.basic)
  router.get('/auth', middleware.getUserInfo, api.http(api.auth.checkStatus))

  return router
}

module.exports = apiRoutes
