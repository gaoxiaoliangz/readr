import React, { Component } from 'react'

class Container extends Component {
  render() {
    let className = (this.props.isFluid?'container-fluid':'container') + (this.props.className?` ${this.props.className}`:'')

    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}

export default Container
