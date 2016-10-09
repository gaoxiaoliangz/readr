import errors from '../errors'
import { match } from 'react-router'

type TResult = {
  renderProps?: any
  redirectLocation?: any
}

function matchRoute(routes, reqUrl: string, history): Promise<TResult> {
  return new Promise((resolve, reject) => {
    match({ history, routes, location: reqUrl }, (error, redirectLocation, renderProps) => {
      if (error) {
        reject(error)
      } else if (redirectLocation) {
        resolve({ redirectLocation })
      } else if (renderProps) {
        resolve({ renderProps })
      } else {
        reject(new errors.NotFoundError('routes 里不存在对 404 的处理'))
      }
    })
  })
}

export default matchRoute
