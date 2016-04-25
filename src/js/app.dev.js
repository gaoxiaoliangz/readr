import { render } from 'react-dom'
import React from 'react'
import { browserHistory } from 'react-router'
import configureStore from 'store/configureStore'
import routes from 'routes/app'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import DevTools from 'containers/DevTools'

const initialState = JSON.parse(decodeURIComponent(window.__INITIAL_STATE__))
const store = configureStore(initialState)

render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory} routes={routes} />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)
