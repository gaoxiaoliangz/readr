import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, RouterContext } from 'react-router'
import _ from 'lodash'
import { ApolloProvider } from 'react-apollo'
import apolloClient from '../apolloClient'
import Loading from '../components/Loading/Loading'

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
    return !APP_ENV.BROWSER
      ? (
        <RouterContext {...renderProps} />
      )
      : (
        <Router {...renderProps} />
      )
  }

  render() {
    const { store, renderProps, renderPageContent } = this.props

    return (
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          {
            renderPageContent
              ? this.renderRouter(renderProps)
              : <Loading center />
          }
        </Provider>
      </ApolloProvider>
    )
  }
}

export default AppProvider
