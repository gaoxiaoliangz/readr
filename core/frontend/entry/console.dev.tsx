import { render } from 'react-dom'
import React from 'react'
import { browserHistory } from 'react-router'
import routes from 'routes/Console'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from 'store/configureStore'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store as any}>
    <div>
      <Router history={browserHistory} routes={routes as any} />
    </div>
  </Provider>,
  document.getElementById('root')
)
