'use strict'

const path = require('path')
const express = require('express')
const querystring = require("querystring")
const url = require('url')
const Promise = require('bluebird')
const router = express.Router()
const middleware = require('../middleware')

// server rendering
const React = require('react')
const Component = React.Component
const createStore = require('redux').createStore
const Provider = require('react-redux').Provider
const renderToString = require('react-dom/server').renderToString
const Router = require('react-router')
const match = Router.match
const RouterContext = Router.RouterContext
const configureStore = require('store/configureStore').default
const DevTools = require('containers/DevTools').default
const store = configureStore()
const appRoutes = require('routes/app').default
const consoleRoutes = require('routes/console').default
const Body = require('side-effects/Body').default
const isWebpackDevServerEnabled = process.argv.indexOf('--webpack-dev-server') !== -1?true:false


function frontendRoutes(env, isServerRoutingEnabled, isServerRenderingEnabled) {

  router.get("/logout",function(req, res){
    req.session.destroy()
    res.redirect("/")
  })

  if(isServerRoutingEnabled) {
    router.get("*",middleware.getUserInfo, function(req, res, next) {

      let entry = 'app'
      let routes = appRoutes

      if(req.url.indexOf('console') !== -1) {
        if(req.user && req.user.role === 'admin') {
          entry = 'console'
          routes = consoleRoutes
        }else{
          // permission check
          res.redirect("/")
          return false
        }
      }

      function renderPage(renderProps, status) {
        let html
        const initialState = store.getState()

        if(env === 'production') {
          html = React.createElement(
            Provider,
            { store: store },
            React.createElement(RouterContext, renderProps)
          )
        }else{
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
        }

        try {
          html = isServerRenderingEnabled?renderToString(html):null
        } catch (e) {
          console.log(e);
        }

        let bodyClass = Body.rewind()

        if(typeof bodyClass === 'undefined') {
          bodyClass = ''
        }

        res.status(status).render(entry, {
          env: env,
          html: html,
          bodyClass: bodyClass,
          initialState: JSON.stringify(initialState),
          isWebpackDevServerEnabled: isWebpackDevServerEnabled
        })
      }

      function handleMatchedRoute(renderProps) {
        let query = renderProps.location.query
        let params = renderProps.params
        let status = 200
        let WrappedComponent = renderProps.components.slice(-1)[0].WrappedComponent?renderProps.components.slice(-1)[0].WrappedComponent:null

        if(WrappedComponent) {
          if(WrappedComponent.fetchData) {
            let result = WrappedComponent.fetchData({ store: store, params: params })

            if(Array.isArray(result)) {
              Promise.all(result).then(res => {
                renderPage(renderProps)
              }, error => error)
            }else{
              result.then(res => {
                renderPage(renderProps, status)
              }, error => error)
            }

            return false
          }
        } else {
          status = 404
        }

        renderPage(renderProps, status)
      }

      function handle500Error(error) {
        res.status(500).render('error', {
          message: error.message,
          error: env !== 'production'?error:{},
          env: env
        })
      }

      function handle404Error() {
        let err = new Error('Not Found')
        err.status = 404;
        res.status(404).render('error', {
          message: err.message,
          error: env === 'development'?err:{},
          env: env
        })
      }

      function handleMatch(error, redirectLocation, renderProps) {
        if (error) {
          handle500Error(error)
        } else if (redirectLocation) {
          res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
          handleMatchedRoute(renderProps)
        } else {
          // now 404 page is included in router too, keep it here just in case
          handle404Error()
        }
      }

      match({ routes: routes, location: req.url }, function(error, redirectLocation, renderProps) {
        handleMatch(error, redirectLocation, renderProps)
      })
    })
  }else{
    // for testing purpose only
    router.get('/', function(req, res){ res.render('app', { env: env, initialState: encodeURIComponent(JSON.stringify({})) })})
    router.get('/console', function(req, res){ res.render('console', { env: env, initialState: encodeURIComponent(JSON.stringify({})) })})
  }

  return router
}

module.exports = frontendRoutes
