import { render } from 'react-dom'
import React from 'react'
import { browserHistory, hashHistory, match } from 'react-router'
import createRoutes from '../isomorphic/routes/createRoutes'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../isomorphic/store/configureStore'
import rootSaga from '../isomorphic/store/sagas'
import helpers from '../isomorphic/helpers'
import AppContainer from './containers/AppContainer'
import Root from '../isomorphic/containers/Root'

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
      <AppContainer>
        <Root
          store={store}
          renderProps={renderProps}
          />
      </AppContainer>,
      rootEle
    )
  })
}

if (module.hot) {
  module.hot.accept('../isomorphic/routes/createRoutes', () => {
    console.info('hot patching')

    const createRoutesNext = require('../isomorphic/routes/createRoutes').default
    renderApp(createRoutesNext())
  })
}

renderApp(createRoutes())
