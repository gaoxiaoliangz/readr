import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'reducers/index'
import api from 'middleware/api'
import modifyResponse from 'middleware/modifyResponse'
import handleInitialState from 'utils/handleInitialState'
import createLogger from 'redux-logger'

declare let module
declare let require
declare let process

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
      applyMiddleware(thunk, api, modifyResponse)
    )

    return store
  }

  if (env === 'production') {
    store = createStore(
      rootReducer,
      handleInitialState(),
      applyMiddleware(thunk, api, modifyResponse)
    )
  } else {
    store = createStore(
      rootReducer,
      handleInitialState(),
      compose(
        applyMiddleware(thunk, api, modifyResponse, createLogger({collapsed: true}))
      )
    )
  }

  return store
}
