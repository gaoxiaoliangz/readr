import { createStore, compose, applyMiddleware } from 'redux'
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

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  let store = {} as Redux.Store<{}>

  if (typeof window === 'undefined') {
    // server side
    store = createStore(
      rootReducer,
      {},
      applyMiddleware(handleServerStore, middleware.cache, api, modifyResponse, sagaMiddleware, thunk, logActionTypes)
    )
  } else {
    // client side
    if (process.env.NODE_ENV === 'production') {
      store = createStore(
        rootReducer,
        handleInitialState(),
        applyMiddleware(handleServerStore, middleware.cache, api, modifyResponse, sagaMiddleware, thunk, createLogger({
          collapsed: true
        }))
      )
    } else {
      store = createStore(
        rootReducer,
        handleInitialState(),
        compose(
          applyMiddleware(
            sagaMiddleware,
            handleServerStore,
            api,
            middleware.cache,
            modifyResponse,
            thunk,
            createLogger({
              collapsed: true
            }))
        )
      )
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
