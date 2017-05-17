import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware, { END } from 'redux-saga'
// import createLogger from 'redux-logger'
import rootReducer from './reducers'
import { cache, injectCookie, handleServerStore, logActionTypes } from './middleware'
import helpers from './helpers'
import { INITIAL_STATE } from '../constants'
import apolloClient from './apolloClient'

function getInitialState() {
  if (typeof window === 'undefined') {
    return {}
  }
  return window[INITIAL_STATE] || {}
}

export default function configureStore(cookies?) {
  const sagaMiddleware = createSagaMiddleware()

  const baseMiddlewares = [
    injectCookie(cookies),
    sagaMiddleware,
    cache,
    // modifyResponse,
    thunk
  ]

  if (helpers.isServerEnv()) {
    // server side
    baseMiddlewares.push(handleServerStore)
    if (process.env.NODE_ENV === 'production') {
      // nothing here
    } else {
      if (process.env.ENABLE_SERVER_ACTION_LOG === '1') {
        baseMiddlewares.push(logActionTypes)
      }
    }
  } else {
    // client side
    if (process.env.NODE_ENV === 'production') {
      // nothing here
    } else {
      // we have redux chrome plugin now
      // baseMiddlewares.push(createLogger({
      //   collapsed: true
      // }))
    }
  }

  const composeEnhancers = (!helpers.isServerEnv() && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) || compose
  const store = createStore(
    rootReducer,
    getInitialState(),
    composeEnhancers(
      applyMiddleware(...baseMiddlewares),
      applyMiddleware(apolloClient.middleware())
    )
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
