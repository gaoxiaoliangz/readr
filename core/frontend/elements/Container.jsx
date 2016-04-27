import React, { Component } from 'react'

class Container extends Component {
  render() {
    let className = this.props.className?this.props.className:null
    let containerClass = this.props.fluid?'container-fluid':'container'

    return (
      <div className={`${containerClass} ${className}`}>
        {this.props.children}
      </div>
    )
  }
}

export default Container
