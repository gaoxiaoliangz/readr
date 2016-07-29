'use strict'
const express = require('express')
const router = new express.Router()
const runtimeOptions = require('../utils/runtime-options')
const React = require('react')
const Provider = require('react-redux').Provider
const renderToString = require('react-dom/server').renderToString
const ReactRouter = require('react-router')
const RouterContext = ReactRouter.RouterContext

// const configureStore = require('../../../bin/configure-store').default
const configureStore = require('../../client/configure-store.ts').default
const store = configureStore()

// const manifest = require('../../../assets/built/chunks.manifest.json')
const manifest = {}

// const Body = require('side-effects/body').default

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
    { store },
    React.createElement(RouterContext, renderProps)
  )

  try {
    html = renderToString(html)
  } catch (e) {
    console.error(e)
  }

  // let bodyClass = Body.rewind()

  // if (typeof bodyClass === 'undefined') {
  //   bodyClass = ''
  // }

  // console.log(html)


  return {
    html,
    bodyClass: 'body-todo',
    initialState: JSON.stringify(initialState)
  }
}

function preRender(renderProps) {
  // const query = renderProps.location.query
  const params = renderProps.params
  const wrappedComponent = renderProps.components.slice(-1)[0].WrappedComponent ? renderProps.components.slice(-1)[0].WrappedComponent : null

  if (wrappedComponent && wrappedComponent.fetchData) {
    const result = wrappedComponent.fetchData({ store, params })

    if (Array.isArray(result)) {
      return Promise.all(result).then(() => {
        return Promise.resolve(getRenderData(renderProps))
      }, error => error)
    }
    return result.then(() => {
      return Promise.resolve(getRenderData(renderProps))
    }, error => error)
  }

  return Promise.resolve(getRenderData(renderProps))
}

function render(isServerRenderingEnabled) {
  router.get('*', (req, res) => {
    let status = 200
    const env = runtimeOptions.env

    if (req.data && req.data.error) {
      if (req.data.error.statusCode && req.data.error.statusCode === 404) {
        status = 404
      } else {
        status = 500
      }
    }

    if (status === 500) {
      res.status(500).render('error', {
        message: req.data.error.message,
        error: env !== 'production' ? req.data.error : {},
        env
      })
    }

    if (req.data && isServerRenderingEnabled) {
      preRender(req.data.renderProps).then(result => {
        res.status(status).render(req.data.entry, Object.assign({}, result, { 
          env,
          manifest
        }))
      })
    } else {
      res.status(status).render(req.data.entry, { env, initialState: '{}' })
    }
  })

  return router
}

module.exports = render
