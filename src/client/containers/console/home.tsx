import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Container from '../../elements/layout/container'
// import Icon from '../../elements/icon'
import ConsoleBranding from '../../components/console-branding'
import { userAuth, sendNotification } from '../../actions'
import Alert from '../../elements/alert'
import Body from '../../side-effects/body'
import menus from './menus'

interface Props {
  notifications?: any
  userAuth?: any
  session?: any
  routing?: any
}

class Console extends Component<Props, any> {

  componentDidMount() {
    this.props.userAuth()
  }

  renderMenu(menuMapping, currentPath) {
    let currentMenu = {
      rootIndex: 0,
      subIndex: 0
    }

    menuMapping.forEach((item, rootIndex) => {
      let subIndex

      let result = item.subMenu.filter((item, index) => {
        if (item.path === currentPath) {
          subIndex = index
          return true
        }
      })

      if (result.length > 0) {
        currentMenu.rootIndex = rootIndex
        currentMenu.subIndex = subIndex
      }
    })

    let rootMenu = (
      <ul className="nav-side nav-side-root">
        {
          menuMapping.map((menu, index) => {
            let className = `menu-${menu.component}`

            if (index === currentMenu.rootIndex) {
              className += ' current'
            }

            return (
              <li key={index} className={className}>
                <Link to={`/${menu.path}`}>
                  {/*<Icon name={menu.component} />*/}
                </Link>
              </li>
            )
          })
        }
      </ul>
    )

    let subMenu = (
      <ul className="nav-side nav-side-sub">
        {
          menuMapping[currentMenu.rootIndex].subMenu.map((menu, index) => {
            let className = `menu-${menu.component}`

            if (index === currentMenu.subIndex) {
              className += ' current'
            }

            return (
              <li key={index} className={className}><Link to={`/${menu.path}`}>{menu.displayName}</Link></li>
            )
          })
        }
      </ul>
    )

    return (
      <div className="sidebar-left">
        {rootMenu}
        {subMenu}
      </div>
    )
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
          {this.renderMenu(menus, pathname) }
          <div className="content">
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
