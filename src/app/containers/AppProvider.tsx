import React, { Component } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import _ from 'lodash'
import { ApolloProvider } from 'react-apollo'
import helpers from '../helpers'
// import createApolloClient from '../createApolloClient'
import apolloClient from '../apolloClient'

// const client = createApolloClient()

interface Props {
  store: any
  renderProps?: any
  routes?: any
  history?: any
}

class Root extends Component<Props, {}> {

  defaultProps: {
    renderProps: {}
  }

  render() {
    let { store, renderProps, routes, history } = this.props

    if (_.isEmpty(renderProps)) {
      if (routes) {
        renderProps.routes = routes

        if (!history) {
          console.error('没有给 Router 提供 history！')
        } else {
          renderProps.history = history
        }
      }
    }

    /*return (
      <Provider store={store}>
        {
          helpers.isServerEnv()
            ? (
              <Router {...renderProps} />
            )
            : (
              <ApolloProvider store={store} client={apolloClient}>
                <Router {...renderProps} />
              </ApolloProvider>
            )
        }
      </Provider>
    )*/
    return (
      <ApolloProvider store={store} client={apolloClient}>
        <Router {...renderProps} />
      </ApolloProvider>
    )
  }
}

export default Root
