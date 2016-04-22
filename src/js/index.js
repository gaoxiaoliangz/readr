import { render } from 'react-dom'
import React from 'react'
import { browserHistory } from 'react-router'
import Root from 'containers/Root'
import configureStore from 'store/configureStore'

const initialState = JSON.parse(decodeURIComponent(window.__INITIAL_STATE__))
const store = configureStore(initialState)

render(
  <Root store={store} history={browserHistory} />,
  document.getElementById('root')
)
