import { createStore, combineReducers, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware, createLogger())
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
