import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from '../components/layout'
import ConsoleBranding from '../components/ConsoleBranding'
import { logout } from '../actions/api'
import ConsoleSidebar from '../components/ConsoleSidebar'
import menus from '../consoleMenus'
import DocContainer from '../components/DocContainer'
import helpers from '../helpers'
import * as selectors from '../selectors'

interface Props {
  notifications?: any
  session?: State.Session
  routing?: State.Routing
  logout: typeof logout
}

class AdminApp extends Component<Props, {}> {
  componentWillReceiveProps(nextProps) {
    const userRoleChanged = this.props.session.role !== nextProps.session.role

    if (userRoleChanged) {
      this.redirectIfNotAdmin(nextProps)
    }
  }

  redirectIfNotAdmin(props = this.props) {
    if (props.session.role !== 'admin') {
      helpers.redirect('/')
    }
  }

  _handleLogout = () => {
    this.props.logout()
  }

  _determineMenuIndex = () => {
    const currentPath = this.props.routing
      ? this.props.routing.pathname
      : 'console'

    const currentMenu = {
      rootIndex: 0,
      subIndex: 0
    }

    menus.forEach((menu, rootIndex) => {
      let subIndex

      let result = menu.subMenu && menu.subMenu.filter((item, index) => {
        if (item.match && item.match.test(currentPath)) {
          subIndex = index
          return true
        }
        if (item.path === currentPath) {
          subIndex = index
          return true
        }
      })

      if (!result) {
        if (menu.path === currentPath) {
          currentMenu.rootIndex = rootIndex
          currentMenu.subIndex = -1
        }
      } else if (result.length > 0) {
        currentMenu.rootIndex = rootIndex
        currentMenu.subIndex = subIndex
      }
    })

    return currentMenu
  }

  render() {
    const username = this.props.session.username
    const { rootIndex, subIndex } = this._determineMenuIndex()
    const contentStyle = {
      marginLeft: subIndex !== -1 ? 320 : 100,
      paddingTop: 70
    }

    return (
      <DocContainer bodyClass="console">
        <ConsoleBranding isAdmin username={username} onLogout={this._handleLogout} />
        <Container isFluid={true}>
          <ConsoleSidebar
            rootIndex={rootIndex}
            subIndex={subIndex}
            menus={menus}
          />
          <div style={contentStyle}>
            {this.props.children}
          </div>
        </Container>
      </DocContainer>
    )
  }
}

export default connect(
  state => ({
    notifications: state.components.notifications,
    session: selectors.session(state),
    routing: selectors.routing(state)
  }),
  { logout }
)(AdminApp as any)
