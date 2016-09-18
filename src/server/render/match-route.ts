import errors from '../errors'
import { match } from 'react-router'

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
