import render from '../render'
import routesWithEnsure from '../../isomorphic/routes'
import React from 'react'
import print from '../utils/print'
import runtimeOptions from '../utils/runtime-options'
import roles from '../models/roles'

function pages(req, res) {
  // 检查权限
  // todo:
  // 能否使用 react-router 统一前后端权限校验
  if (req.url.indexOf('console') !== -1) {
    if (req.context.user.role !== roles.admin) {
      res.redirect('/')
    }
  }

  render({
    reqUrl: req.url,
    routes: routesWithEnsure,
    isProd: runtimeOptions.env === 'production',
    fetchData: runtimeOptions.serverRendering,
    isHot: runtimeOptions.hmr
  }).then(htmlString => {
    res.send(htmlString)
  }, err => {
    const statusCode = err.statusCode || 500
    const htmlString = err.htmlString || 'Unknown error occurred!'

    if (!err.htmlString) {
      print.error(err)
    }

    res.status(statusCode).send(htmlString)
  })
}

export default pages
