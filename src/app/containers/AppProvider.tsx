import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, RouterContext } from 'react-router'
import _ from 'lodash'
import { ApolloProvider } from 'react-apollo'
// import { Provider } from 'react-redux'
import helpers from '../helpers'
import apolloClient from '../apolloClient'
// import createApolloClient from '../createApolloClient'

// const client = createApolloClient()

interface Props {
  store: any
  renderProps?: any
  renderPageContent?: boolean
}

class AppProvider extends Component<Props, {}> {

  static defaultProps = {
    renderPageContent: true
  }

  renderRouter(renderProps) {
    return helpers.isServerEnv()
      ? (
        <RouterContext {...renderProps} />
      )
      : (
        <Router {...renderProps} />
      )
  }

  render() {
    const { store, renderProps, renderPageContent } = this.props

    // <ApolloProvider store={store} client={apolloClient}>
    return (
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          {
            renderPageContent
              ? this.renderRouter(renderProps)
              : <div className="text-loading">Loading...</div>
          }
        </Provider>
      </ApolloProvider>
    )
  }
}

export default AppProvider
