import render from '../render'
import React from 'react'
import runtimeOptions from '../utils/runtime-options'
import roles from '../models/roles'
import _ from 'lodash'

const isRoot = url => {
  let urlParts = url.split('?')[0].split('/')
  if (urlParts.length !== 2) {
    return false
  }

  if (_.last(urlParts) !== '') {
    return false
  }

  return true
}

function pages(req, res) {
  // 检查权限
  // todo: 能否使用 react-router 统一前后端权限校验
  if (req.url.indexOf('console') !== -1) {
    if (req.context.user.role !== roles.admin) {
      res.redirect('/')
      return false
    }
  }

  if (runtimeOptions.serverRouting === false) {
    if (!isRoot(req.url)) {
      res.status(404).send('404: DEV MODE - serverRouting/serverRendering disabled')
      return false
    }

    render().then(result => {
      res.send(result)
    })
    return false
  }
}

export default pages
