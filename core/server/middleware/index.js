'use strict'

const auth = require('./auth')

function getUserInfo(req,res,next){
  if(req.session.user) {
    req.user = req.session.user
  }
  next()
}

const middleware = {
  auth: auth,
  getUserInfo: getUserInfo
}

module.exports = middleware
