import options from '../options'
import _ from 'lodash'
import createRoutes from '../../isomorphic/routes/createRoutes'
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
  // 服务端路由关闭（仅限开发模式）
  if (options.route === false) {
    if (!isRoot(req.url)) {
      res.status(404).send(`
        <div style="margin: 60px auto; width: 600px; padding: 5px 20px; border: 1px solid #222;">
          <h1 style="font-weight: bold; font-size: 22px; margin: 10px 0;">404 Not Found</h1>
          <p style="margin: 10px 0;">Dev mode with server routing disabled</p>
        </div>
      `)
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
      routes: createRoutes({ request: req, response: res }),
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
