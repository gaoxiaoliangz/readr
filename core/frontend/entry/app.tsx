import { render } from 'react-dom'
import React from 'react'
import { browserHistory } from 'react-router'
import configureStore from 'store/configureStore'
import routes from 'routes/app'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store) as any

render(
  <Provider store={store as any}>
    <Router history={history} routes={routes.props.children} />
  </Provider>,
  document.getElementById('root')
)
