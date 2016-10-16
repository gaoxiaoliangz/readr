import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendNotification, hideNotification, closeConfirmModal, userAuth, closeModal } from '../store/actions'
import { Alerts } from '../elements/Alert'
import _ from 'lodash'
import { ConfirmModal } from '../elements/Modal'
import { ModalPlus } from '../elements/Modal'
import helpers from '../helpers'

interface Props {
  notifications: any
  hideNotification: any
  errorMessage: any[]
  sendNotification: sendNotification
  confirmModal: any
  closeConfirmModal: any
  userAuth: any
  routing: any
  session: any
  modal: any
  closeModal: any
}

class Master extends Component<Props, {}> {

  static fetchData({ store, userSession }) {
    return store.dispatch(userAuth(userSession))
  }

  constructor(props) {
    super(props)
  }

  redirectIfNotAdmin(props = this.props) {
    if (props.routing.locationBeforeTransitions.pathname.indexOf('console') !== -1) {
      if (props.session.user.role !== 'admin') {
        helpers.redirect('/')
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const hasNewErrorMsg = this.props.errorMessage.length !== nextProps.errorMessage.length
    const routerChanged = nextProps.routing.locationBeforeTransitions.pathname !== this.props.routing.locationBeforeTransitions.pathname
    const userRoleChanged = this.props.session.user.role !== nextProps.session.user.role

    if (hasNewErrorMsg) {
      this.props.sendNotification(_.last(nextProps.errorMessage).toString(), 'error', 0)
    }

    // 管理员登出后自动跳转页面
    if (userRoleChanged) {
      this.redirectIfNotAdmin(nextProps)
    }

    if (routerChanged) {
      // 返回顶部
      window.document.body.scrollTop = 0

      // 简单权限验证
      this.redirectIfNotAdmin(nextProps)
    }
  }

  componentDidMount() {
    this.props.userAuth()
    this.redirectIfNotAdmin()
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
                content: noti.message,
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
    routing: state.routing,
    session: state.session,
  }),
  { sendNotification, hideNotification, closeConfirmModal, userAuth, closeModal }
)(Master)
