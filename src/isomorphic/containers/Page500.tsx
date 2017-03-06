import React, { Component } from 'react'
import AppDoc from './AppDoc'

interface Props {
  message: string
}

export default class Page500 extends Component<Props, void> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const { message } = this.props
    // todo: use AppError
    return (
      <AppDoc
        title="500 Server Error"
        appMarkup={(
          <div className="page500">
            <h1>500</h1>
            <p>{message}</p>
          </div>
        )}
      />
    )
  }
}
