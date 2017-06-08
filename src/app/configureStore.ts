import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware, { END } from 'redux-saga'
// import createLogger from 'redux-logger'
import rootReducer from './reducers'
import { cache, injectCookie, handleServerStore, logActionTypes } from './middleware'
import { INITIAL_STATE_VAR_NAME } from './components/AppDoc'
// import apolloClient from './apolloClient'

function getInitialState() {
  if (!__BROWSER__) {
    return {}
  }
  return window[INITIAL_STATE_VAR_NAME] || {}
}

export default function configureStore(cookies?) {
  const sagaMiddleware = createSagaMiddleware()

  const baseMiddlewares = [
    injectCookie(cookies),
    sagaMiddleware,
    cache,
    thunk
  ]

  if (!__BROWSER__) {
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

  const composeEnhancers = (__BROWSER__ && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) || compose
  const store = createStore(
    rootReducer,
    getInitialState(),
    composeEnhancers(
      applyMiddleware(...baseMiddlewares),
      // applyMiddleware(apolloClient.middleware())
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
