import React, { Component, PropTypes } from 'react'

class Icon extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    let name = this.props.name

    return (
      <span className={"icon icon-"+name}></span>
    )
  }
}

export default Icon
