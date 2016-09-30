require('babel-polyfill')
import { render } from 'react-dom'
import React from 'react'
import { browserHistory, hashHistory, Router, match } from 'react-router'
import routes from '../isomorphic/routes'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../isomorphic/store/configureStore'
import rootSaga from '../isomorphic/store/sagas'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

store.runSaga(rootSaga)

match({ history, routes }, (error, redirectLocation, renderProps) => {
  render(
    <Provider store={store}>
      <Router {...renderProps} />
    </Provider>, document.getElementById('root'))
})
