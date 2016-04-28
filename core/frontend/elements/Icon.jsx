import React, { Component, PropTypes } from 'react'

class Icon extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    let name = this.props.name
    let method = this.props.onClick
    let size = this.props.size

    return (
      <span className={`icon icon-${name} ${size}`} onClick={method}></span>
    )
  }
}

export default Icon
