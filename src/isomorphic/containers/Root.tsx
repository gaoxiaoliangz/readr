import React, { Component } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import _ from 'lodash'

interface Props {
  store: any
  renderProps?: any
  routes?: any
  history?: any
}

class Root extends Component<Props, {}> {
  render() {
    let { store, renderProps, routes, history } = this.props

    if (_.isEmpty(renderProps)) {
      if (routes) {
        renderProps.routes = routes

        if (!history) {
          console.error('没用给 Router 提供 history！')
        } else {
          renderProps.history = history
        }
      }
    }

    return (
      <Provider store={store}>
        <Router {...renderProps} />
      </Provider>
    )
  }
}

Root['defaultProps'] = {
  renderProps: {}
}

export default Root
