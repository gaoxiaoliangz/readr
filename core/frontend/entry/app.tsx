import { render } from 'react-dom'
import React from 'react'
import { browserHistory, Router } from 'react-router'
import routes from 'routes/App'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from 'store/configureStore'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory as any, store) as any

render(
  <Provider store={store as any}>
    <Router history={history} routes={routes.props.children} />
  </Provider>,
  document.getElementById('root')
)
