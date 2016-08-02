import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import _ from 'lodash'

type TProps = {
  store: any
  renderProps: any
}

function Root(props: TProps) {
  const { store, renderProps } = props

  return (
    !_.isEmpty(renderProps) && (
      <Provider store={store}>
        <Router {...renderProps} />
      </Provider>
    )
  )
}

export default Root
