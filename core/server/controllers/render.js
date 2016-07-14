'use strict'
const express = require('express')
const router = new express.Router()
const runtimeOptions = require('../utils/runtime-options')
const React = require('react')
// const Component = React.Component
// const createStore = require('redux').createStore
const Provider = require('react-redux').Provider
const renderToString = require('react-dom/server').renderToString
const ReactRouter = require('react-router')
const RouterContext = ReactRouter.RouterContext
const configureStore = require('store/configureStore').default
const store = configureStore()
// const appRoutes = require('routes/app').default
// const consoleRoutes = require('routes/console').default
const Body = require('side-effects/Body').default

function getRenderData(renderProps) {
  let html
  const initialState = store.getState()

  //   html = React.createElement(
  //     Provider,
  //     { store: store },
  //     React.createElement(
  //       'div',
  //       null,
  //       React.createElement(RouterContext, renderProps),
  //       React.createElement(DevTools, null)
  //     )
  //   )

  html = React.createElement(
    Provider,
    { store: store },
    React.createElement(RouterContext, renderProps)
  )

  try {
    html = renderToString(html)
  } catch (e) {
    console.log(e)
  }

  let bodyClass = Body.rewind()

  if (typeof bodyClass === 'undefined') {
    bodyClass = ''
  }

  return {
    html: html,
    bodyClass: bodyClass,
    initialState: JSON.stringify(initialState)
  }
}

function preRender(renderProps) {
  let query = renderProps.location.query
  let params = renderProps.params
  let wrappedComponent = renderProps.components.slice(-1)[0].WrappedComponent ? renderProps.components.slice(-1)[0].WrappedComponent : null

  if (wrappedComponent && wrappedComponent.fetchData) {
    let result = wrappedComponent.fetchData({ store: store, params: params })

    if (Array.isArray(result)) {
      return Promise.all(result).then(res => {
        return Promise.resolve(getRenderData(renderProps))
      }, error => error)
    } else {
      return result.then(res => {
        return Promise.resolve(getRenderData(renderProps))
      }, error => error)
    }
  }
  
  return Promise.resolve(getRenderData(renderProps))
}

function render(isServerRenderingEnabled) {
  router.get('*', (req, res) => {
    let status = 200
    let env = runtimeOptions.env

    if (req.data && req.data.error) {
      if (req.data.error.statusCode && req.data.error.statusCode === 404) {
        status = 404
      } else {
        status = 500
      }
    }

    if (status === 500) {
      res.status(500).render('error', {
        message: error.message,
        error: env !== 'production' ? error : {},
        env
      })
    }

    if (req.data && isServerRenderingEnabled) {
      preRender(req.data.renderProps).then(result => {
        res.status(status).render(req.data.entry, Object.assign({}, result, { env: env }))
      })
    } else {
      res.status(status).render(req.data.entry, { env: env, initialState: '{}' })
    }
  })

  return router
}

module.exports = render
