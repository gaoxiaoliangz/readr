import options from '../options'
import roles from '../models/roles'
import _ from 'lodash'
import routes from '../../isomorphic/routes'
import render, { render500 } from '../render'

const PROD_ERROR_MSG = '稍安勿躁，工程师正在解决问题 ...'

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

  // 服务端路由关闭（仅限开发模式）
  if (options.route === false) {
    if (!isRoot(req.url)) {
      res.status(404).send('404: DEV MODE (server routing disabled)')
      return false
    }

    render().then(result => {
      res.send(result)
    })
    return false
  }

  const isProd = options.production

  try {
    render({
      reqUrl: req.url,
      routes,
      isProd,
      fetchData: options.render,
      isHot: options.hot,
      userSession: req.context.user
    }).then(({ html, redirectLocation, statusCode }) => {
      if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      }

      res.status(statusCode).send(html)
    })
  } catch (error) {
    const errorMsg = isProd ? PROD_ERROR_MSG : error.message
    const htmlString = render500(errorMsg, isProd)

    res.status(500).send(htmlString)
  }
}

export default pages
