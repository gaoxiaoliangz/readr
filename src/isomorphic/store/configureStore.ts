import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import api from './middleware/api'
import modifyResponse from './middleware/modifyResponse'
import handleServerStore from './middleware/handleServerStore'
import handleInitialState from '../utils/handleInitialState'
import logActionTypes from './middleware/logActionTypes'
import createLogger from 'redux-logger'
import middleware from './middleware'

const env = process.env.NODE_ENV

export default function configureStore() {
  let store

  // if(module.hot) {
  //   module.hot.accept('../reducers', () => {
  //     const nextRootReducer = require('../reducers').default
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }

  // server side
  if (typeof window === 'undefined') {
    store = createStore(
      rootReducer,
      {},
      applyMiddleware(handleServerStore, middleware.cache, api, modifyResponse, thunk, logActionTypes)
    )

    return store
  }

  if (env === 'production') {
    store = createStore(
      rootReducer,
      handleInitialState(),
      applyMiddleware(handleServerStore, middleware.cache, api, modifyResponse, thunk)
    )
  } else {
    store = createStore(
      rootReducer,
      handleInitialState(),
      compose(
        applyMiddleware(handleServerStore, middleware.cache, api, modifyResponse, thunk, createLogger({collapsed: true}))
      )
    )
  }

  return store
}
