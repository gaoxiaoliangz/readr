var express = require('express'),
    querystring = require("querystring"),
    url = require("url"),
    Promise = require('bluebird');

var frontendRoutes = function frontendRoutes(env) {
  var router = express.Router()

  router.get("/logout",function(req, res){
    req.session.destroy()
    res.redirect("/")
  })

  router.get("/",function(req, res){ res.render('index', { env: env })})

  return router
}

module.exports = frontendRoutes
