import React, { Component } from 'react'

class Msg extends Component {
  render() {
    let msg = this.props.content?(<div className="msg mui--z1">{this.props.content}</div>):null

    return (
      <div>{msg}</div>
    )
  }
}

export default Msg
