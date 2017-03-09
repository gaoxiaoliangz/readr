import { syncHistoryWithStore } from 'react-router-redux'
import { createMemoryHistory } from 'react-router'
import configureStore from '../../../isomorphic/store/configureStore'

// import createRoutes from '../../isomorphic/routes/createRoutes'
// import render, { render500 } from '../render'

// const PROD_ERROR_MSG = '稍安勿躁，工程师正在解决问题 ...'

// const isRoot = url => {
//   let urlParts = url.split('?')[0].split('/')
//   if (urlParts.length !== 2) {
//     return false
//   }

//   if (_.last(urlParts) !== '') {
//     return false
//   }
//   return true
// }

// interface RenderPageConfig {
//   serverRouting: boolean
//   isProduction: boolean
// }

export default function init(req, res, next) {
  const memoryHistory = createMemoryHistory(req.url)
  const store = configureStore()
  const history = syncHistoryWithStore(memoryHistory as any, store)
  req.locals = {}
  req.locals.history = history
  req.locals.store = store
  next()
}

// render500(errorMsg, isProduction)
//     // 服务端路由关闭（仅限开发模式）
//     if (serverRouting === false) {
//       if (!isRoot(req.url)) {
//         res.status(404).send(`
//         <div style="margin: 60px auto; width: 600px; padding: 5px 20px; border: 1px solid #222;">
//           <h1 style="font-weight: bold; font-size: 22px; margin: 10px 0;">404 Not Found</h1>
//           <p style="margin: 10px 0;">Dev mode with server routing disabled</p>
//         </div>
//       `)
//         return false
//       }
