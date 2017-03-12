import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendNotification, hideNotification, closeConfirmModal, userAuth, closeModal, loadSession } from '../actions'
import { Alerts } from '../components/Alert'
import _ from 'lodash'
import { ConfirmModal } from '../components/Modal'
import { ModalPlus } from '../components/Modal'

interface Props {
  notifications: any
  hideNotification: any
  errorMessage: any[]
  sendNotification: typeof sendNotification
  confirmModal: any
  closeConfirmModal: any
  userAuth: any
  routing: any
  session: any
  modal: any
  closeModal: any
  loadSession: typeof loadSession
}

class Master extends Component<Props, {}> {

  // static fetchData({ store, userSession }) {
  //   return store.dispatch(userAuth(userSession))
  // }

  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    const hasNewErrorMsg = this.props.errorMessage.length !== nextProps.errorMessage.length
    const routerChanged = nextProps.routing.locationBeforeTransitions.pathname !== this.props.routing.locationBeforeTransitions.pathname

    if (hasNewErrorMsg) {
      this.props.sendNotification(_.last(nextProps.errorMessage).toString(), 'error', 0)
    }

    if (routerChanged) {
      // 返回顶部
      window.document.body.scrollTop = 0
    }
  }

  componentDidMount() {
  // componentWillMount() {
    // this.props.userAuth()
    this.props.loadSession()
  }

  render() {
    const { confirmModal, closeConfirmModal, modal, closeModal } = this.props

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
        { this.props.children }
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
    routing: state.routing,
    session: state.session,
  }),
  { sendNotification, hideNotification, closeConfirmModal, userAuth, closeModal, loadSession }
)(Master)
