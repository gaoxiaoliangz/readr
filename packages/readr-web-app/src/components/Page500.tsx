import React, { Component } from 'react'
import AppDoc from './AppDoc'
import AppError from './AppError'

// todo
// import { getCSSUri } from '../../server/middleware/render/renderView'
// const cssAssets = getCSSUri(process.env.NODE_ENV === 'production')

interface Props {
  error: Error
}

export default class Page500 extends Component<Props, void> {
  render() {
    const { error } = this.props
    return (
      <AppDoc
        title="500 Server Error"
        appMarkup={(
          <AppError
            title="500"
            message={error.message}
            stack={error.stack}
          />
        )}
      />
    )
  }
}
