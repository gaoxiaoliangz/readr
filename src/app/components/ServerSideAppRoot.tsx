import React from 'react'
import { Provider } from 'react-redux'
import { RouterContext } from 'react-router'
import _ from 'lodash'

// type TProps = {
//   store: any
//   renderProps: any
//   renderPageContent?: boolean
// }

const ServerSideAppRoot = (props) => {
  const { store, renderProps, renderPageContent } = props

  return (
    !_.isEmpty(renderProps) && (
      <Provider store={store}>
        {
          renderPageContent
            ? (
              <RouterContext {...renderProps} />
            )
            : <div className="text-loading">Loading...</div>
        }
      </Provider>
    )
  )
}

export default ServerSideAppRoot
