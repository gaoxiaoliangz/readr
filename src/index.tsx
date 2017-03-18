import { render } from 'react-dom'
import React from 'react'
import { browserHistory, hashHistory, match } from 'react-router'
import createRoutes from './routes'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './configureStore'
import rootSaga from './sagas'
import helpers from './helpers'
import AppContainer from './components/AppContainer'
import Root from './components/Root'

const routerHistory = helpers.isServerRoutingEnabled()
  ? browserHistory
  : hashHistory

const store = configureStore()
const history = syncHistoryWithStore(routerHistory as any, store) as any
const rootEle = document.getElementById('root')

store.runSaga(rootSaga)

const renderApp = routes => {
  match({ history, routes }, (error, redirectLocation, renderProps) => {
    render(
      <Root
        store={store}
        renderProps={renderProps}
      />,
      rootEle
    )
    /*render(
      <AppContainer>
        <Root
          store={store}
          renderProps={renderProps}
          />
      </AppContainer>,
      rootEle
    )*/
  })
}

if (module.hot) {
  module.hot.accept('./routes', () => {
    console.info('hot patching')

    const createRoutesNext = require('./routes').default
    renderApp(createRoutesNext())
  })
}

renderApp(createRoutes())
