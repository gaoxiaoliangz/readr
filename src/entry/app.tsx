import { render } from 'react-dom'
import React from 'react'
import { browserHistory, Router } from 'react-router'
import routes from '../isomorphic/routes'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../isomorphic/store/configureStore'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory as any, store) as any

render(
  <Provider store={store as any}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)