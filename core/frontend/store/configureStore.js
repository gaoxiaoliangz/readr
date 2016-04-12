import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import api from 'middleware/api'

import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import DevTools from 'containers/DevTools'


export default function configureStore(initialState) {
  let store
  let env = process.env.NODE_ENV

  if(typeof window !== 'undefined') {
    env = window.process.env.NODE_ENV
  }

  if(env === 'development') {
    store = createStore(
      rootReducer,
      initialState,
      compose(
        // applyMiddleware(thunk, api, createLogger()),
        applyMiddleware(thunk, api),
        DevTools.instrument()
      )
    )
  } else if(env === 'production') {
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk, api)
    )

    if(module.hot) {
      module.hot.accept('../reducers', () => {
        const nextRootReducer = require('../reducers').default
        store.replaceReducer(nextRootReducer)
      })
    }
  }

  return store
}
