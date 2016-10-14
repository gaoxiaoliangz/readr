require('babel-polyfill')
import { render } from 'react-dom'
import React from 'react'
import { browserHistory, hashHistory, match } from 'react-router'
import routes from '../isomorphic/routes'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../isomorphic/store/configureStore'
import rootSaga from '../isomorphic/store/sagas'
import helpers from '../isomorphic/helpers'
const hotLoader = require('react-hot-loader')
const AppContainer = hotLoader.AppContainer
import Root2 from '../isomorphic/containers/Root2'

const routerHistory = helpers.isServerRoutingEnabled()
  ? browserHistory
  : hashHistory

const store = configureStore()
const history = syncHistoryWithStore(routerHistory, store)

store.runSaga(rootSaga)

match({ history, routes }, (error, redirectLocation, renderProps) => {
  render(
    <AppContainer>
      <Root2
        store={store}
        renderProps={renderProps}
        />
    </AppContainer>, document.getElementById('root'))

  if (module.hot) {
    module.hot.accept('./containers/Root2', () => {
      const RootContainer = require('./containers/Root2').default
      render(
        <AppContainer>
          <RootContainer
            store={store}
            renderProps={renderProps}
            />
        </AppContainer>,
        document.getElementById('root')
      )
    })
  }
})
