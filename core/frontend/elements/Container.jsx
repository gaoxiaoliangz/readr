import React, { Component } from 'react'

class Container extends Component {
  render() {
    let className = this.props.className?this.props.className:''

    return (
      <div className={`container ${className}`}>
        {this.props.children}
      </div>
    )
  }
}

export default Container
