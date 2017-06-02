import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendNotification, hideNotification, closeConfirmModal, closeModal } from '../actions'
import { loadSession } from '../actions/api'
import { Alerts } from '../components/Alert'
import _ from 'lodash'
import { ConfirmModal } from '../components/Modal'
import { ModalPlus } from '../components/Modal'
import * as selectors from '../selectors'

interface Props {
  notifications: any
  hideNotification: any
  errorMessage: any[]
  sendNotification: typeof sendNotification
  confirmModal: any
  closeConfirmModal: typeof closeConfirmModal
  routing: State.Routing
  session: State.Session
  modal: any
  closeModal: typeof closeModal
  loadSession: typeof loadSession
}

class Master extends Component<Props, {}> {

  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    const hasNewErrorMsg = this.props.errorMessage.length !== nextProps.errorMessage.length
    const routerChanged = nextProps.routing.pathname !== this.props.routing.pathname

    if (hasNewErrorMsg) {
      this.props.sendNotification(_.last(nextProps.errorMessage).toString(), 'error', 0)
    }

    if (routerChanged) {
      // back to top when route changed
      setTimeout(() => {
        window.document.body.scrollTop = 0
        // must be less than SCROLL_DELAY(100ms) defined in Reader component
      }, 50)
    }
  }

  componentWillMount() {
    this.props.loadSession()
  }

  render() {
    const { confirmModal, closeConfirmModal, modal, closeModal, session } = this.props

    return (
      <div className="app-root">
        <ConfirmModal
          open={confirmModal.open}
          title={confirmModal.title}
          onConfirm={confirmModal.onConfirm}
          onRequestClose={closeConfirmModal}
          width={500}
        >
          {confirmModal.content}
        </ConfirmModal>
        <ModalPlus
          open={modal.open}
          width={500}
          onRequestClose={closeModal}
          title={modal.title}
        >
          {modal.content}
        </ModalPlus>
        {
          this.props.notifications.filter(noti => noti.visible).length > 0 && (
            <Alerts
              onRequestClose={this.props.hideNotification}
              messages={this.props.notifications.map(noti => ({
                content: noti.message || '发生错误！',
                type: noti.type,
                visible: noti.visible,
                id: noti.id
              }))}
            />
          )
        }
        {this.props.children}
      </div>
    )
  }
}

export default connect<{}, {}, Props>(
  state => ({
    notifications: state.components.notifications,
    errorMessage: state.errorMessage,
    confirmModal: state.components.confirmModal,
    modal: state.components.modal,
    routing: selectors.routing(state),
    session: selectors.session(state)
  }),
  { sendNotification, hideNotification, closeConfirmModal, closeModal, loadSession }
)(Master)
