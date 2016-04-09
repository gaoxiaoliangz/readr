import React, { Component } from 'react'

class Notification extends Component {
  render() {
    let notification = this.props.notification

    return (
      <div>
        { notification.isVisible?(<div className="msg mui--z1">{notification.content}</div>):null }
      </div>
    )
  }
}

export default Notification
