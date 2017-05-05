import React from 'react'
import { Provider } from 'react-redux'
import { RouterContext } from 'react-router'
import _ from 'lodash'
import { ApolloProvider } from 'react-apollo'
import createApolloClient from '../createApolloClient'

const client = createApolloClient()

type TProps = {
  store: any
  renderProps: any
  renderPageContent?: boolean
}

const ServerSideAppRoot = (props: TProps) => {
  const { store, renderProps, renderPageContent } = props

  return (
    !_.isEmpty(renderProps) && (
      <Provider store={store}>
        <ApolloProvider client={client}>
          {
            renderPageContent
              ? (
                <RouterContext {...renderProps} />
              )
              : <div className="text-loading">Loading...</div>
          }
        </ApolloProvider>
      </Provider>
    )
  )
}

export default ServerSideAppRoot
