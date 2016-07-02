import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Container from 'elements/Container'
import Icon from 'elements/Icon'
import ConsoleBranding from 'components/ConsoleBranding'
import { userAuth, handleNotification } from 'actions/index'
import Notification from 'components/Notification'
import Body from 'side-effects/Body'
import menus from './menus'


class Console extends Component<any, any> {

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
        if(item.path === currentPath) {
          subIndex = index
          return true
        }
      })

      if(result.length > 0) {
        currentMenu.rootIndex = rootIndex
        currentMenu.subIndex = subIndex
      }
    })

    let rootMenu = (
      <ul className="nav-side nav-side-root">
        {
          menuMapping.map((menu, index) => {
            let className = `menu-${menu.component}`

            if(index === currentMenu.rootIndex) {
              className += ' current'
            }

            return (
              <li key={index} className={className}><Link to={`/${menu.path}`}><Icon name={menu.component} /></Link></li>
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

            if(index === currentMenu.subIndex) {
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
    let isAdmin = this.props.session.user.role === 'admin'?true:false
    let username = this.props.session.user.username?this.props.session.user.username:null
    let pathname = this.props.routing.locationBeforeTransitions?this.props.routing.locationBeforeTransitions.pathname:'console'

    return (
      <div>
        <ConsoleBranding isAdmin={isAdmin} username={username} />
        <Container isFluid={true}>
          <Notification notification={this.props.notification} />
          {this.renderMenu(menus, pathname)}
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
    notification: state.components.notification,
    session: state.session,
    routing: state.routing
  }),
  { handleNotification, userAuth } as any
)(Console)
