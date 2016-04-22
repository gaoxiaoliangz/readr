'use strict'

const path = require('path')
const express = require('express')
const querystring = require("querystring")
const url = require("url")
const Promise = require('bluebird')
const router = express.Router()

// server rendering
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

const frontendRoutes = function frontendRoutes(env, isServerRoutingEnabled, isServerRenderingEnabled) {
  router.get("/logout",function(req, res){
    req.session.destroy()
    res.redirect("/")
  })

  if(isServerRoutingEnabled) {
    router.get("*",function(req, res, next){
      match({ routes: reactRoutes, location: req.url }, function(error, redirectLocation, renderProps) {
        if (error) {
          res.status(500).render('error', {
            message: error.message,
            error: env !== 'production'?error:{},
            env: env
          })
        } else if (redirectLocation) {
          res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
          let query = renderProps.location.query
          let params = renderProps.params

          function renderPage() {
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

            res.status(200).render('index', {
              env: env,
              html: isServerRenderingEnabled?renderToString(html):null,
              initialState: encodeURIComponent(JSON.stringify(initialState))
            })
          }

          let fetchData = renderProps.components.slice(-1)[0].WrappedComponent.fetchData

          if(fetchData) {
            let result = fetchData({ store: store, params: params })

            if(Array.isArray(result)) {
              Promise.all(result).then(res => {
                renderPage()
              })
            }else{
              result.then(res => {
                renderPage()
              })
            }
          }else{
            renderPage()
          }
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
