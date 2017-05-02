import React, { Component } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import _ from 'lodash'
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:8090/gql'
})

const client = new ApolloClient({
  networkInterface: networkInterface
})

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

    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Router {...renderProps} />
        </ApolloProvider>
      </Provider>
    )
  }
}

export default Root
