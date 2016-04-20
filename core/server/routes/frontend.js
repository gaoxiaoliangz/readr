'use strict'
const path = require('path')
const express = require('express')
const querystring = require("querystring")
const url = require("url")
const Promise = require('bluebird')

const frontendRoutes = function frontendRoutes(env, isServerRoutingEnabled, isServerRenderingEnabled) {
  const router = express.Router()

  router.get("/logout",function(req, res){
    req.session.destroy()
    res.redirect("/")
  })

  if(isServerRoutingEnabled) {
    const React = require('react')
    const Component = React.Component
    const createStore = require('redux').createStore
    const Provider = require('react-redux').Provider
    const renderToString = require('react-dom/server').renderToString
    const Router = require('react-router')
    const match = Router.match
    const RouterContext = Router.RouterContext
    const reactRoutes = require('routes').default
    const configureStore = require('store/configureStore').default

    const DevTools = require('containers/DevTools').default

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
          let html

          if(env === 'production') {
            html = React.createElement(
              Provider,
              { store: store },
              React.createElement(RouterContext, renderProps)
            )
          } else if(env === 'development') {
            html = React.createElement(
              Provider,
              { store: store },
              React.createElement(
                'div',
                null,
                React.createElement(RouterContext, renderProps),
                React.createElement(DevTools, null)
              )
            )
          } else {
            console.log('env is not development nor production!')
          }

          res.status(200).render('index', {
            env: env,
            html: isServerRenderingEnabled?renderToString(html):null,
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
