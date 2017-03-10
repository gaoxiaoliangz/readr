import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import api from './middleware/api'
import modifyResponse from './middleware/modifyResponse'
import handleServerStore from './middleware/handleServerStore'
import handleInitialState from './handleInitialState'
import logActionTypes from './middleware/logActionTypes'
import createLogger from 'redux-logger'
import middleware from './middleware'
import createSagaMiddleware, { END } from 'redux-saga'
import helpers from './helpers'

const sagaMiddleware = createSagaMiddleware()

const SERVER_MIDDLEWARES_DEV = [handleServerStore, sagaMiddleware, api, middleware.cache, modifyResponse, thunk, logActionTypes]
const SERVER_MIDDLEWARES_PROD = [handleServerStore, sagaMiddleware, api, middleware.cache, modifyResponse, thunk]
const MIDDLEWARES_DEV = [sagaMiddleware, api, middleware.cache, modifyResponse, thunk, createLogger({ collapsed: true })]
const MIDDLEWARES_PROD = [sagaMiddleware, api, middleware.cache, modifyResponse, thunk]

export default function configureStore() {
  let middlewares

  if (helpers.isServerEnv()) {
    // server side
    if (process.env.NODE_ENV === 'production') {
      middlewares = SERVER_MIDDLEWARES_PROD
    } else {
      middlewares = SERVER_MIDDLEWARES_DEV
    }
  } else {
    // client side
    if (process.env.NODE_ENV === 'production') {
      middlewares = MIDDLEWARES_PROD
    } else {
      middlewares = MIDDLEWARES_DEV
    }
  }

  const store = createStore(
    rootReducer,
    handleInitialState(),
    applyMiddleware.apply(null, middlewares)
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      console.info('hot updating reducers')
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return {
    ...store,
    ...{
      runSaga: sagaMiddleware.run,
      close: () => store.dispatch(END)
    }
  }
}
