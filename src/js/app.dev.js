import { render } from 'react-dom'
import React from 'react'
import { browserHistory } from 'react-router'
import configureStore from 'store/configureStore'
import routes from 'routes/app'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import DevTools from 'containers/DevTools'
import { syncHistoryWithStore } from 'react-router-redux'

let store

if(typeof window.__INITIAL_STATE__ !== 'undefined') {
  let initialState = JSON.parse(decodeURIComponent(window.__INITIAL_STATE__))
  store = configureStore(initialState)
}else{
  store = configureStore()
}

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)
