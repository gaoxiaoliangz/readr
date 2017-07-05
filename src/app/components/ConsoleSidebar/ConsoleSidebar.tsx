import React, { Component } from 'react'
import { Link } from 'react-router'
import Icon from '../../components/Icon'
import CSSModules from 'react-css-modules'
import styles from './ConsoleSidebar.scss'

interface IProps {
  currentPath?: any
  menuMapping?: any
}

interface IState {
}

@CSSModules(styles, {
  allowMultiple: true
})
class ConsoleSidebar extends Component<IProps, IState> {
  render() {
    const { menuMapping, currentPath } = this.props

    let currentMenu = {
      rootIndex: 0,
      subIndex: 0
    }

    menuMapping.forEach((menu, rootIndex) => {
      let subIndex

      let result = menu.subMenu.filter((item, index) => {
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
      <ul styleName="nav-side-root">
        {
          menuMapping.map((menu, index) => {
            return (
              <li key={index} styleName={index !== currentMenu.rootIndex ? 'root-item' : 'root-item--current'}>
                <Link to={menu.path}>
                  <Icon size={25} styleName="icon" name={menu.icon} />
                </Link>
              </li>
            )
          })
        }
      </ul>
    )

    let subMenu = (
      <ul styleName="nav-side-sub">
        {
          menuMapping[currentMenu.rootIndex].subMenu.map((menu, index) => {
            return (
              <li key={index} styleName={index !== currentMenu.subIndex ? 'sub-item' : 'sub-item--current'}>
                <Link to={menu.path}>{menu.displayName}</Link>
              </li>
            )
          })
        }
      </ul>
    )

    return (
      <div styleName="sidebar-left">
        {rootMenu}
        {subMenu}
      </div>
    )
  }
}

export default ConsoleSidebar
