import React, { Component } from 'react'

class Msg extends Component {
  render() {


    return (
      <div>{

            this.props.notification.isVisible?(<div className="msg mui--z1">{this.props.notification.content}</div>):null
            }
          </div>
    )
  }
}

export default Msg
