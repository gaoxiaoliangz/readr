import React, { Component } from 'react'
import AppDoc from './AppDoc'
import AppError from './AppError'

interface Props {
  message: string
}

export default class Page500 extends Component<Props, void> {
  render() {
    const { message } = this.props
    return (
      <AppDoc
        title="500 Server Error"
        appMarkup={(
          <AppError
            title="500"
            message={message}
          />
        )}
      />
    )
  }
}
