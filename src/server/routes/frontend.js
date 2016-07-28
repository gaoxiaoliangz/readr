'use strict'
const path = require('path')
const express = require('express')
const router = new express.Router()
const querystring = require('querystring')
const url = require('url')
const Promise = require('bluebird')
const middleware = require('../middleware')
const errors = require('../errors')
// const appRoutes = require('routes/App').default
// const consoleRoutes = require('routes/Console').default

// const appRoutes = require('../../../bin/app').default
// const consoleRoutes = require('../../../bin/console').default
const routesWithEnsure = require('../../client/routes/index.tsx').default
const appRoutes = require('../../client/routes/app.tsx').default
const consoleRoutes = require('../../client/routes/console.tsx').default

const ReactRouter = require('react-router')
const match = ReactRouter.match


function handleFrontendRouting() {
  router.get('*', middleware.parseContext, (req, res, next) => {
    let entry = req.url.indexOf('console') !== -1 ? 'console' : 'app'
    let data = {}
    // const routes = req.entry === 'console' ? consoleRoutes : appRoutes
    const routes = routesWithEnsure

    if (!req.context.userRole === 'admin' && entry === 'console') {
      res.redirect('/')
    }

    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        data.error = error
      } else if (redirectLocation) {
        // TODO
        // res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        data.redirectLocation = redirectLocation
      } else if (renderProps) {
        let wrappedComponent = renderProps.components.slice(-1)[0].WrappedComponent ? renderProps.components.slice(-1)[0].WrappedComponent : null

        if (!wrappedComponent) {
          data.error = new errors.NotFoundError('Not found')
        }

        data.renderProps = renderProps
      } else {
        // react router 里面包含了 * 所以 404 页面的处理也在其中
        // 所以按理说不会运行到这里
        // 如果会那就是发生了未知错误
        data.error = new errors.GenericError('Unknown error')
      }

      data.entry = entry
      req.data = data

      next()
    })
  })

  return router
}

module.exports = handleFrontendRouting
