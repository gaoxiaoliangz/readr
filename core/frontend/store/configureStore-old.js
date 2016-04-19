import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import DevTools from 'containers/DevTools'
import rootReducer from '../reducers'
import api from 'middleware/api'
import { getEnv } from 'utils'


export default function configureStore(initialState) {
  let store
  let env = getEnv()

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
  } else {
    console.error('env is neither development nor production!')
  }

  return store
}
