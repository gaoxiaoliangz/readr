import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from '../components/layout'
import ConsoleBranding from '../components/ConsoleBranding'
import { logout } from '../actions/api'
import ConsoleSidebar from '../components/ConsoleSidebar'
import menus from '../content/menus'
import DocContainer from '../components/DocContainer'
import helpers from '../helpers'
import * as selectors from '../selectors'

interface Props {
  notifications?: any
  session?: Session
  routing?: any
  logout: typeof logout
}

class AdminApp extends Component<Props, {}> {

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
    this.props.logout()
  }

  componentWillReceiveProps(nextProps) {
    const userRoleChanged = this.props.session.role !== nextProps.session.role

    if (userRoleChanged) {
      this.redirectIfNotAdmin(nextProps)
    }
  }

  render() {
    const username = this.props.session.username
    const pathname = this.props.routing.locationBeforeTransitions
      ? this.props.routing.locationBeforeTransitions.pathname
      : 'console'

    const contentStyle = {
      marginLeft: 320,
      paddingTop: 60
    }

    return (
      <DocContainer bodyClass="console">
        <ConsoleBranding isAdmin username={username} onLogout={this.handleLogout} />
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
  }
}

export default connect<{}, {}, {}>(
  state => ({
    notifications: state.components.notifications,
    session: selectors.session(state),
    routing: state.routing
  }),
  { logout }
)(AdminApp)
