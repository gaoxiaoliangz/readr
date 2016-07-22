import { render } from 'react-dom'
import React from 'react'
import { browserHistory } from 'react-router'
import routes from '../routes/console'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../store/configure-store'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory as any, store)

render(
  <Provider store={store as any}>
    <Router history={history as any} routes={routes as any} />
  </Provider>,
  document.getElementById('root')
)
