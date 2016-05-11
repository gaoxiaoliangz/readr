import { render } from 'react-dom'
import React from 'react'
import { browserHistory } from 'react-router'
import configureStore from 'store/configureStore'
import routes from 'routes/console'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import createStore from './createStore'

const store = createStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
