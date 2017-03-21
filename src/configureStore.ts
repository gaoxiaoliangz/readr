import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { cache, injectCookie, handleServerStore, logActionTypes } from './middleware'
import handleInitialState from './handleInitialState'
import createLogger from 'redux-logger'
import createSagaMiddleware, { END } from 'redux-saga'
import helpers from './helpers'

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
      baseMiddlewares.push(createLogger({
        collapsed: true
      }))
    }
  }

  const store = createStore(
    rootReducer,
    handleInitialState(),
    applyMiddleware(...baseMiddlewares)
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
