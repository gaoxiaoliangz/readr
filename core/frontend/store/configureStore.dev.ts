import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from 'reducers/index'
import api from 'middleware/api'
import modifyResponse from 'middleware/modifyResponse'
import handleInitialState from 'utils/handleInitialState'

export default function configureStore() {
  // if(module.hot) {
  //   module.hot.accept('../reducers', () => {
  //     const nextRootReducer = require('../reducers').default
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }
  
  if(typeof window === 'undefined') {
    return createStore(
      rootReducer,
      {},
      compose(
        applyMiddleware(thunk, api, modifyResponse)
      )
    )
  }

  return createStore(
    rootReducer,
    handleInitialState(),
    compose(
      applyMiddleware(thunk, api, modifyResponse, createLogger({collapsed: true}))
    )
  )
}
