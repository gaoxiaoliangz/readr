import React, { Component, PropTypes } from 'react'

interface Props {
  name: string
  onClick?: any
  size?: string
}

class Icon extends Component<Props, any> {
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
