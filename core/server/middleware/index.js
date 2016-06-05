'use strict'

const auth = require('./auth')

function getUserInfo(req,res,next){
  if(req.session.user) {
    req.user = req.session.user
  }
  next()
}

function checkAdminPermissions(req, res, next) {
  req.isAdmin = false
  if(req.session.user && req.session.user.role === 'admin') {
    req.isAdmin = true
  }
  
  next()
}

const middleware = {
  auth: auth,
  getUserInfo: getUserInfo,
  checkAdminPermissions: checkAdminPermissions
}

module.exports = middleware
