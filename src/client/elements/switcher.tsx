import React, { Component } from 'react'
import { connect } from 'react-redux'

interface Props {
  on: boolean
}

class Switcher extends Component<Props, any> {

  constructor(props) {
    super(props)
  }

  render() {
    let className = this.props.on ? 'on' : 'off'
    className = className + ' switcher'

    return (
      <div className={className}>
        <div className="switcher-button"></div>
        <div className="switcher-track"></div>
      </div>
    )
  }
}

export default connect(

)(Switcher as any)