import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

type TProps = {
  store: any
  renderProps: any
}

function Root(props: TProps) {
  const { store, renderProps } = props

  return (
    <Provider store={store}>
      <Router {...renderProps} />
    </Provider>
  )
}

export default Root
