import React, { Component } from 'react'

interface IProps {
  title?: string
  message?: string
}

class NoMatch extends Component<IProps, {}> {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>{this.props.message}</div>
      </div>
    )
  }
}

export default NoMatch
