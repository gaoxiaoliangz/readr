require('babel-polyfill')
import { render } from 'react-dom'
import React from 'react'
import { browserHistory, Router, match } from 'react-router'
import routes from '../isomorphic/routes'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../isomorphic/store/configureStore'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

match({ history, routes }, (error, redirectLocation, renderProps) => {
  render(
    <Provider store={store}>
      <Router {...renderProps} />
    </Provider>, document.getElementById('root'))
})
