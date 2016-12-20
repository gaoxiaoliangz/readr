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
import helpers from '../helpers'

const sagaMiddleware = createSagaMiddleware()

const SERVER_MIDDLEWARES_DEV = [handleServerStore, sagaMiddleware, api, middleware.cache, modifyResponse, thunk, logActionTypes]
const SERVER_MIDDLEWARES_PROD = [handleServerStore, sagaMiddleware, api, middleware.cache, modifyResponse, thunk]
const MIDDLEWARES_DEV = [sagaMiddleware, api, middleware.cache, modifyResponse, thunk, createLogger({ collapsed: true })]
const MIDDLEWARES_PROD = [sagaMiddleware, api, middleware.cache, modifyResponse, thunk, createLogger({ collapsed: true })]

const handleStore = (middlewares: any[]) => {
  return createStore(
    rootReducer,
    handleInitialState(),
    applyMiddleware.apply(null, middlewares)
  )
}

export default function configureStore() {

  let store = {} as Redux.Store<{}>

  if (helpers.isServerEnv()) {
    // server side
    if (process.env.NODE_ENV === 'production') {
      store = handleStore(SERVER_MIDDLEWARES_PROD)
    } else {
      store = handleStore(SERVER_MIDDLEWARES_DEV)
    }
  } else {
    // client side
    if (process.env.NODE_ENV === 'production') {
      store = handleStore(MIDDLEWARES_PROD)
    } else {
      store = handleStore(MIDDLEWARES_DEV)
    }
  }

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      console.info('hot updating reducers')
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  store['runSaga'] = sagaMiddleware.run
  store['close'] = () => store.dispatch(END)

  return store as M_ReduxStore
}
