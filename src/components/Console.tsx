import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from '../components/layout'
import ConsoleBranding from '../components/ConsoleBranding'
import { sendNotification, userLogout } from '../actions'
import ConsoleSidebar from '../components/ConsoleSidebar'
import menus from '../content/menus'
import DocContainer from '../components/DocContainer'
import helpers from '../helpers'
import * as selectors from '../selectors'

interface Props {
  notifications?: any
  session?: Session
  routing?: any
  userLogout: typeof userLogout
}

class Console extends Component<Props, {}> {

  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  redirectIfNotAdmin(props = this.props) {
    if (props.session.role !== 'admin') {
      helpers.redirect('/')
    }
  }

  handleLogout() {
    this.props.userLogout()
  }

  componentWillReceiveProps(nextProps) {
    const userRoleChanged = this.props.session.role !== nextProps.session.role

    if (userRoleChanged) {
      this.redirectIfNotAdmin(nextProps)
    }
  }

  render() {
    let isAdmin = this.props.session.role === 'admin'
    let username = this.props.session.username
    let pathname = this.props.routing.locationBeforeTransitions
      ? this.props.routing.locationBeforeTransitions.pathname
      : 'console'

    const contentStyle = {
      marginLeft: 320,
      paddingTop: 60
    }

    return (
      isAdmin
        ? (
          <DocContainer bodyClass="console">
            <ConsoleBranding isAdmin={isAdmin} username={username} onLogout={this.handleLogout} />
            <Container isFluid={true}>
              <ConsoleSidebar
                menuMapping={menus}
                currentPath={pathname}
                />
              <div style={contentStyle}>
                {this.props.children}
              </div>
            </Container>
          </DocContainer>
        )
        : (
          <div style={{textAlign: 'center', margin: '20px 0'}}>ACCESS DENIED!</div>
        )
    )
  }
}

export default connect<{}, {}, {}>(
  state => ({
    notifications: state.components.notifications,
    session: selectors.session(state),
    routing: state.routing
  }),
  { sendNotification, userLogout }
)(Console)
