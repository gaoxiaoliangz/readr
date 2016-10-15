require('babel-polyfill')
import { render } from 'react-dom'
import React from 'react'
import { browserHistory, hashHistory, match } from 'react-router'
import routes from '../isomorphic/routes'
// import syncRoutes from '../isomorphic/routes/index.sync'
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
const history = syncHistoryWithStore(routerHistory, store)
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
  module.hot.accept('../isomorphic/routes', () => {
    console.info('hot patching')

    const nextRoutes = require('../isomorphic/routes').default
    renderApp(nextRoutes)
  })
}

renderApp(routes)
