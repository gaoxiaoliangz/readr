import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendNotification, hideNotification, closeDialog } from '../store/actions'
import { Alerts } from '../elements/Alert'
import _ from 'lodash'
import Dialog from '../elements/Dialog'

interface IAllProps {
  notifications: any
  hideNotification: any
  errorMessage: string
  sendNotification: any
  dialog: any
  closeDialog: any
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
    const { dialog, closeDialog } = this.props

    return (
      <div className="app-root">
        <Dialog
          isVisible={dialog.isVisible}
          title={dialog.title}
          onConfirm={dialog.onConfirm}
          onRequestClose={closeDialog}
          width={300}
          >
          {dialog.content}
        </Dialog>
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
    errorMessage: state.errorMessage,
    dialog: state.components.dialog,
  }),
  { sendNotification, hideNotification, closeDialog }
)(Root)
