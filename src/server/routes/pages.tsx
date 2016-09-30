import render from '../render'
// import routesWithEnsure from '../../isomorphic/routes'
import React from 'react'
import print from '../utils/print'
import runtimeOptions from '../utils/runtime-options'
import roles from '../models/roles'

function pages(req, res) {
  // 检查权限
  // todo: 能否使用 react-router 统一前后端权限校验
  if (req.url.indexOf('console') !== -1) {
    if (req.context.user.role !== roles.admin) {
      res.redirect('/')
    }
  }

  render({
    reqUrl: req.url,
    // routes: routesWithEnsure,
    routes: {},
    isProd: runtimeOptions.env === 'production',
    fetchData: runtimeOptions.serverRendering,
    isHot: runtimeOptions.hmr,
    userSession: req.context.user
  }).then(({ html, redirectLocation }) => {
    if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    }

    res.send(html)
  }, err => {
    const statusCode = err.statusCode || 500
    const htmlString = err.htmlString || err.message

    if (!err.htmlString) {
      print.error(err)
    }

    res.status(statusCode).send(htmlString)
  })
}

export default pages
