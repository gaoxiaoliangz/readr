import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import api from 'middleware/api'

import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import DevTools from 'containers/DevTools'

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      // applyMiddleware(thunk, api, createLogger()),
      applyMiddleware(thunk, api),
      DevTools.instrument()
    )
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
