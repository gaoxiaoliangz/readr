import { syncHistoryWithStore } from 'react-router-redux'
import { createMemoryHistory } from 'react-router'
import configureStore from '../../../app/configureStore'

export default function init(req, res, next) {
  const memoryHistory = createMemoryHistory(req.url)
  // createRoutes take object as param instead
  const store = configureStore(req.cookies)
  const history = syncHistoryWithStore(memoryHistory as any, store)
  req.locals = {}
  req.locals.history = history
  req.locals.store = store
  next()
}
