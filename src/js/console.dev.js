import { render } from 'react-dom'
import React from 'react'
import { browserHistory } from 'react-router'
import routes from 'routes/console'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import DevTools from 'containers/DevTools'
import { syncHistoryWithStore } from 'react-router-redux'
import createStore from './createStore'

const store = createStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory} routes={routes} />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)
