import { render } from 'react-dom'
import React from 'react'
import { browserHistory, hashHistory, match } from 'react-router'
import configRoutes from './configRoutes'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './configureStore'
import rootSaga from './sagas'
import AppProvider from './containers/AppProvider'
import { USE_HASH_HISTORY } from './config'

const routerHistory = !USE_HASH_HISTORY
  ? browserHistory
  : hashHistory

const store = configureStore()
const history = syncHistoryWithStore(routerHistory, store)
const rootEle = document.getElementById('root')

store.runSaga(rootSaga)

const renderApp = routes => {
  match({ history, routes }, (error, redirectLocation, renderProps) => {
    render(
      <AppProvider
        store={store}
        renderProps={renderProps}
      />,
      rootEle
    )
  })
}

if (module.hot) {
  module.hot.accept('./configRoutes', () => {
    const configRoutesNext = require('./configRoutes').default
    renderApp(configRoutesNext())
  })
}

renderApp(configRoutes())
