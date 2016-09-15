import React from 'react'
import { Provider } from 'react-redux'
import { RouterContext } from 'react-router'
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
              <RouterContext {...renderProps} />
            )
            : <div className="text-loading">加载中 ...</div>
        }
      </Provider>
    )
  )
}

export default BodyContent
