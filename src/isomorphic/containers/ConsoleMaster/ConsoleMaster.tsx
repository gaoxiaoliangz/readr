import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from '../../elements/_layout/Container'
import ConsoleBranding from '../../components/ConsoleBranding'
import { userAuth, sendNotification } from '../../store/actions'
import Alert from '../../elements/Alert'
import ConsoleSidebar from '../../components/ConsoleSidebar'
import menus from '../../content/menus'
import CSSModules from 'react-css-modules'
const styles = require('./ConsoleMaster.css')

interface Props {
  notifications?: any
  userAuth?: any
  session?: any
  routing?: any
}

@CSSModules(styles, {
  allowMultiple: true
})
class Console extends Component<Props, any> {

  componentDidMount() {
    this.props.userAuth()
  }

  render() {
    let isAdmin = this.props.session.user.role === 'admin' ? true : false
    let username = this.props.session.user.username ? this.props.session.user.username : null
    let pathname = this.props.routing.locationBeforeTransitions ? this.props.routing.locationBeforeTransitions.pathname : 'console'

    return (
      <div>
        <ConsoleBranding isAdmin={isAdmin} username={username} />
        <Container isFluid={true}>
          {
            this.props.notifications.filter(noti => noti.visible).length > 0
              ? (
                <div className="notifications">
                  {
                    this.props.notifications.map((noti, index) => (
                      <Alert
                        key={index}
                        type={noti.type}
                        message={noti.message}
                        visible={noti.visible}
                        />
                    ))
                  }
                </div>
              )
              : null
          }
          <ConsoleSidebar
            menuMapping={menus}
            currentPath={pathname}
          />
          <div styleName="content">
            {this.props.children}
          </div>
        </Container>
      </div>
    )
  }
}

export default connect(
  state => ({
    notifications: state.components.notifications,
    session: state.session,
    routing: state.routing
  }),
  { sendNotification, userAuth }
)(Console as any)
