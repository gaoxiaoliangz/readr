'use strict'

var express = require('express')
var api = require('../api')
var session = require('express-session')
const middleware = require('../middleware')

function apiRoutes() {
  var router = express.Router()

  function getUserInfo(req,res,next){
    if(req.session.user) {
      req.user = req.session.user
    }
    next()
  }

  router.get('/books', api.http(api.books.getAllBooks))
  router.post('/books',getUserInfo, api.http(api.books.addBook))
  router.get('/books/:id/', api.http(api.books.getBookInfo))
  router.delete('/books/:id/', getUserInfo, api.http(api.books.deleteBook))
  router.get('/books/:id/content', api.http(api.books.getBookContent));
  router.post('/books/:id/progress',getUserInfo, api.http(api.books.updateReadingProgress))
  router.get('/books/:id/progress',getUserInfo, api.http(api.books.getReadingProgress))

  router.post('/users', api.http(api.users.addUser))
  router.get('/users', getUserInfo, api.http(api.users.listUsers))
  router.post('/users/roles',getUserInfo, api.http(api.users.changeUserRole))

  router.post('/auth', middleware.auth.basic)
  router.get('/auth', getUserInfo, api.http(api.auth.checkStatus))

  return router
}

module.exports = apiRoutes
