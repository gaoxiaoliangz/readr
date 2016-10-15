import { match } from 'react-router'
import _ from 'lodash'

type TResult = {
  renderProps?: any
  redirectLocation?: any
  statusCode?: number
}

function matchRoute(routes, reqUrl: string, history): Promise<TResult> {
  return new Promise((resolve, reject) => {
    match({ history, routes, location: reqUrl }, (error, redirectLocation, renderProps) => {
      if (error) {
        reject(error)
      } else if (redirectLocation) {
        resolve({ redirectLocation, statusCode: 302 })
      } else if (renderProps) {
        const wrappedComponent = _.last(renderProps.components)['WrappedComponent']
        const statusCode = wrappedComponent
          ? 200
          : 404

        resolve({ renderProps, statusCode })
      } else {
        reject(new Error('routes 里不存在对 404 的处理'))
      }
    })
  })
}

export default matchRoute
