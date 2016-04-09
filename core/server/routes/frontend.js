'use strict'
var path = require('path')
var express = require('express')
var querystring = require("querystring")
var url = require("url")
var Promise = require('bluebird')

var frontendRoutes = function frontendRoutes(env, isServerRoutingEnabled, isServerRenderingEnabled) {
  var router = express.Router()

  router.get("/logout",function(req, res){
    req.session.destroy()
    res.redirect("/")
  })

  if(isServerRoutingEnabled) {
    var React = require('react')
    var Component = React.Component
    var createStore = require('redux').createStore
    var Provider = require('react-redux').Provider
    var renderToString = require('react-dom/server').renderToString
    var Router = require('react-router')
    var match = Router.match
    var RouterContext = Router.RouterContext
    var reactRoutes = require('routes').default
    var configureStore = require('store/configureStore').default

    const store = configureStore()
    const initialState = store.getState()

    router.get("*",function(req, res, next){
      match({ routes: reactRoutes, location: req.url }, function(error, redirectLocation, renderProps) {
        if (error) {
          res.status(500).render('error', {
            message: error.message,
            error: env === 'development'?error:{},
            env: env
          })
        } else if (redirectLocation) {
          res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
          res.status(200).render('index', {
            env: env,
            html: isServerRenderingEnabled?renderToString(React.createElement(RouterContext, renderProps)):"",
            initialState: JSON.stringify(initialState)
          })
        } else {
          let err = new Error('Not Found')
          err.status = 404;
          res.status(404).render('error', {
            message: err.message,
            error: env === 'development'?err:{},
            env: env
          })
        }
      })
    })
  }else{
    router.get("/",function(req, res){ res.render('index', { env: env })})
  }

  return router
}

module.exports = frontendRoutes
