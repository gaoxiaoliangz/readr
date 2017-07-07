import React, { Component } from 'react'
import { Link } from 'react-router'
import Icon from '../../components/Icon'
import CSSModules from 'react-css-modules'
import styles from './ConsoleSidebar.scss'

interface IProps {
  rootIndex: number
  subIndex: number
  menus: ConsoleMenus
}

interface IState {
}

@CSSModules(styles, {
  allowMultiple: true
})
class ConsoleSidebar extends Component<IProps, IState> {
  render() {
    const { rootIndex, subIndex, menus } = this.props

    const rootMenu = (
      <ul styleName="nav-side-root">
        {
          menus.map((menu, index) => {
            return (
              <li key={index} styleName={index !== rootIndex ? 'root-item' : 'root-item--current'}>
                <Link to={menu.path}>
                  <Icon size={25} styleName="icon" name={menu.icon} />
                </Link>
              </li>
            )
          })
        }
      </ul>
    )

    const subMenu = subIndex !== -1 && (
      <ul styleName="nav-side-sub">
        {
          menus[rootIndex].subMenu.map((menu, index) => {
            return (
              <li key={index} styleName={index !== subIndex ? 'sub-item' : 'sub-item--current'}>
                <Link to={menu.path}>{menu.displayName}</Link>
              </li>
            )
          })
        }
      </ul>
    )

    const sidebarStyle = {
      width: subIndex !== -1 ? 300 : 80
    }

    return (
      <div styleName="sidebar-left" style={sidebarStyle}>
        {rootMenu}
        {subMenu}
      </div>
    )
  }
}

export default ConsoleSidebar
