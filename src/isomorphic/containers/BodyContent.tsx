import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import _ from 'lodash'

type TProps = {
  store: any
  renderProps: any
  renderPageContent?: boolean
}

function BodyContent(props: TProps) {
  const { store, renderProps, renderPageContent } = props

  return (
    !_.isEmpty(renderProps) && (
      <Provider store={store}>
        {
          renderPageContent
            ? (
              <Router {...renderProps} />
            )
            : <div className="loading">Loading ...</div>
        }
      </Provider>
    )
  )
}

export default BodyContent
