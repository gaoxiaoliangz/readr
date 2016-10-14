import React, { Component } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

interface Props {
  store: any
  renderProps: any
}

export default class Root2 extends Component<Props, {}> {
  render() {
    const { store, renderProps } = this.props
    return (
      <Provider store={store}>
        <Router {...renderProps} />
      </Provider>
    )
  }
}
