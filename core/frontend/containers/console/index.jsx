import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import Container from 'elements/Container'
import Icon from 'elements/Icon'
import ConsoleBranding from 'components/ConsoleBranding'
import { fetchUserAuthInfo, handleNotification } from 'actions'

class Console extends Component {

  componentDidMount() {
    this.props.fetchUserAuthInfo()
  }

  renderMenu(currentPath) {
    let menuMapping = [
      {
        component: 'books',
        displayName: '',
        path: '/console/managebooks',
        children: [
          {
            component: 'addbook',
            displayName: 'Add book',
            path: '/console/addbook'
          },
          {
            component: 'managebooks',
            displayName: 'Manage books',
            path: '/console/managebooks'
          }
        ]
      },
      {
        component: 'users',
        displayName: '',
        path: '/console/manageusers',
        children: [
          {
            component: 'manageusers',
            displayName: 'Manage users',
            path: '/console/manageusers'
          }
        ]
      }
    ]

    let currentMenu = {}

    menuMapping.filter((item, rootIndex) => {
      let subIndex

      let result = item.children.filter((item, index) => {
        if(item.component === currentPath) {
          subIndex = index
          return true
        }
      })

      if(result.length > 0) {
        currentMenu.rootIndex = rootIndex
        currentMenu.subIndex = subIndex
        return true
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
              <li key={index} className={className}><Link to={menu.path}><Icon name={menu.component} /></Link></li>
            )
          })
        }
      </ul>
    )

    let subMenu = (
      <ul className="nav-side nav-side-sub">
        {
          menuMapping[currentMenu.rootIndex].children.map((menu, index) => {
            let className = `menu-${menu.component}`

            if(index === currentMenu.subIndex) {
              className += ' current'
            }

            return (
              <li key={index} className={className}><Link to={menu.path}>{menu.displayName}</Link></li>
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
    let isAdmin = this.props.user.role?(this.props.user.role === 'admin'?true:false):false
    let username = this.props.user.username
    let pageName = this.props.children.props.route.component.WrappedComponent?this.props.children.props.route.component.WrappedComponent.displayName.toLowerCase():'404'

    return (
      <div className={"page-"+pageName}>
        <ConsoleBranding fluid={true} admin={isAdmin} username={username} />
        <Container>
          {this.renderMenu(pageName)}
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
    notification: state.notification,
    user: state.user,
    routing: state.routing
  }),
  { handleNotification, fetchUserAuthInfo }
)(Console)
