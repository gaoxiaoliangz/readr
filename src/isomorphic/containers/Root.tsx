import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendNotification, hideNotification } from '../store/actions'
import { Alerts } from '../elements/Alert'
import _ from 'lodash'

interface IAllProps {
  notifications?: any
  hideNotification?: any
  errorMessage?: string
  sendNotification?: any
}

interface IState {
}

class Root extends Component<IAllProps, IState> {

  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    const hasNewErrorMsg = this.props.errorMessage.length !== nextProps.errorMessage.length

    if (hasNewErrorMsg) {
      this.props.sendNotification(_.last(nextProps.errorMessage), 'error')
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="app-root">
        {
          this.props.notifications.filter(noti => noti.visible).length > 0 && (
            <Alerts
              onRequestClose={this.props.hideNotification}
              messages={this.props.notifications.map(noti => ({
                content: noti.message,
                type: noti.type,
                visible: noti.visible,
                id: noti.id
              })) }
              />
          )
        }
        {this.props.children}
      </div>
    )
  }
}

export default connect<{}, {}, IAllProps>(
  state => ({
    notifications: state.components.notifications,
    errorMessage: state.errorMessage
  }),
  { sendNotification, hideNotification }
)(Root)
