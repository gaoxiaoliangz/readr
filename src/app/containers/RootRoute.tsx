import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendNotification, hideNotification, closeConfirmModal, closeModal } from '../actions'
import { loadSession } from '../actions/api'
import { Alerts } from '../components/Alert'
import _ from 'lodash'
import { ConfirmModal } from '../components/Modal'
import { ModalPlus } from '../components/Modal'
import * as selectors from '../selectors'
import helpers from '../helpers'

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
    const ignoredRoute = [/reader\/v2/, /browse/]

    if (hasNewErrorMsg) {
      this.props.sendNotification(_.last(nextProps.errorMessage).toString(), 'error')
    }

    const isRouteIgnored = (pathname) => ignoredRoute.some((rule) => {
      return rule.test(pathname)
    })

    if (routerChanged) {
      if (isRouteIgnored(this.props.routing.pathname) || isRouteIgnored(nextProps.routing.pathname)) {
        return false
      }

      // should delay here or reader progress will be reset to 0 in some cases
      // when book is directly opened and then return to home
      setTimeout(() => {
        window.document.body.scrollTop = 0
      }, 50)
    }
  }

  componentWillMount() {
    this.props.loadSession()
  }

  componentDidMount() {
    if (__DEV__) {
      window['__redirect__'] = helpers.redirect
    }
  }

  render() {
    const { confirmModal, closeConfirmModal, modal, closeModal } = this.props

    return (
      <div className="app-root">
        <ConfirmModal
          open={confirmModal.open}
          title={confirmModal.title}
          onConfirm={() => {
            confirmModal.onConfirm(closeConfirmModal)
          }}
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
