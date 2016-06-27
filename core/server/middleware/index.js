'use strict'
const auth = require('./auth')
const auth2 = require('./auth2')

function getUserInfo(req, res, next) {
  if (req.session.user) {
    req.user = req.session.user
  }
  next()
}

function checkAdminPermissions(req, res, next) {
  req.isAdmin = false
  if (req.session.user && req.session.user.role === 'admin') {
    req.isAdmin = true
  }
  
  next()
}

const middleware = {
  auth,
  auth2,
  getUserInfo,
  checkAdminPermissions,
}

module.exports = middleware
