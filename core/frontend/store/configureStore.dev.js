import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import DevTools from 'containers/DevTools'
import rootReducer from '../reducers'
import api from 'middleware/api'

export default function configureStore(initialState) {
  if(module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
  
  return createStore(
    rootReducer,
    initialState,
    compose(
      // applyMiddleware(thunk, api, createLogger()),
      applyMiddleware(thunk, api),
      DevTools.instrument()
    )
  )
}
