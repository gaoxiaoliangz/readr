import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendNotification, hideNotification } from '../actions'
import { Alerts } from '../elements/alert'

interface IAllProps {
  notifications?: any
  hideNotification?: any
}

interface IState {
}

class Root extends Component<IAllProps, IState> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="app-root">
        {
          this.props.notifications.filter(noti => noti.visible).length > 0
          ? (
            <Alerts
              onRequestClose={this.props.hideNotification}
              messages={this.props.notifications.map(noti => ({
                content: noti.message,
                type: noti.type,
                visible: noti.visible,
                id: noti.id
              }))}
            />
          )
          : null
        }
        {this.props.children}
      </div>
    )
  }
}

export default connect<{}, {}, IAllProps>(
  state => ({ notifications: state.components.notifications}),
  { sendNotification, hideNotification }
)(Root as any)