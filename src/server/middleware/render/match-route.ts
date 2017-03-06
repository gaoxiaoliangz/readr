import { match } from 'react-router'
import _ from 'lodash'
import makeRoutes from '../../../isomorphic/routes/makeRoutes'

function matchRoute(req, res, next) {
  match(
    {
      history: req.locals.history,
      routes: makeRoutes(),
      location: req.url
    },
    (error, redirectLocation, renderProps) => {
      if (error) {
        next(error)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        const wrappedComponent = _.last(renderProps.components)['WrappedComponent']
        const statusCode = wrappedComponent ? 200 : 404

        req.locals.matchedResults = { renderProps, statusCode }
        next()
      } else {
        // todo
        next(new Error('Missing 404 handle page in routes!'))
      }
    }
  )
}

export default matchRoute
