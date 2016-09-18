import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { sendNotification, hideNotification, closeDialog, userAuth } from '../store/actions'
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
  userAuth: any
  routing: any
  session: any
}

class Root extends Component<IAllProps, {}> {

  static fetchData({ store, userSession }) {
    return store.dispatch(userAuth(userSession))
  }

  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    const hasNewErrorMsg = this.props.errorMessage.length !== nextProps.errorMessage.length
    const routerChanged = nextProps.routing.locationBeforeTransitions.pathname !== this.props.routing.locationBeforeTransitions.pathname

    if (hasNewErrorMsg) {
      this.props.sendNotification(_.last(nextProps.errorMessage), 'error')
    }

    if (routerChanged) {
      // 返回顶部
      window.document.body.scrollTop = 0

      // 简单权限验证
      if (nextProps.routing.locationBeforeTransitions.pathname.indexOf('console') !== -1) {
        if (this.props.session.user.role !== 'admin') {
          browserHistory.push('/')
        }
      }
    }
  }

  componentDidMount() {
    this.props.userAuth()
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
          width={500}
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
    routing: state.routing,
    session: state.session,
  }),
  { sendNotification, hideNotification, closeDialog, userAuth }
)(Root)
