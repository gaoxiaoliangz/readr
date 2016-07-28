// const path = require('path')
// const express = require('express')
// const router = new express.Router()
// const querystring = require('querystring')
// const url = require('url')
// const Promise: any = require('bluebird')
// const middleware: any = require('../middleware')
const errors: any = require('../errors')

// const appRoutes = require('../../client/routes/app.tsx').default
// const consoleRoutes = require('../../client/routes/console.tsx').default

// const ReactRouter = require('react-router')
// const match = ReactRouter.match

import { match } from 'react-router'



// function handleFrontendRouting() {
//   router.get('*', middleware.parseContext, (req, res, next) => {
//     let entry = req.url.indexOf('console') !== -1 ? 'console' : 'app'
//     let data = {}
//     // const routes = req.entry === 'console' ? consoleRoutes : appRoutes
//     const routes = routesWithEnsure

//     if (!req.context.userRole === 'admin' && entry === 'console') {
//       res.redirect('/')
//     }


//   })

//   return router
// }

type TResult = {
  renderProps?: any
  redirectLocation?: any
}
function matchRoute(routes, reqUrl: string): Promise<TResult> {
  return new Promise((resolve, reject) => {
    match({ routes, location: reqUrl }, (error, redirectLocation, renderProps) => {
      if (error) {
        reject(error)
      } else if (redirectLocation) {
        // TODO
        // res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        resolve({ redirectLocation })
      } else if (renderProps) {
        let wrappedComponent = (renderProps.components.slice(-1)[0] as any).WrappedComponent
          ? (renderProps.components.slice(-1)[0] as any).WrappedComponent
          : null

        if (!wrappedComponent) {
          reject(new errors.NotFoundError('404 (defined in routes)'))
        } else {
          resolve({ renderProps })
        }
      } else {
        reject(new errors.NotFoundError('404'))
      }
    })
  })
}

export default matchRoute
