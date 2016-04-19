import { render } from 'react-dom'
import React from 'react'
import { browserHistory } from 'react-router'
import Root from 'containers/Root'
import configureStore from 'store/configureStore'

const store = configureStore()

render(
  <Root store={store} history={browserHistory} />,
  document.getElementById('root')
)
