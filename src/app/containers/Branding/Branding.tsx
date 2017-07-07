import React, { Component } from 'react'
import _ from 'lodash'
import { Container } from '../../components/layout'
import Dropdown from '../../components/Dropdown'
import Logo from '../../components/Logo'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'
import styles from './Branding.scss'
import { connect } from 'react-redux'
import { logout } from '../../actions/api'
import * as selectors from '../../selectors'
import Button from '../../components/Button/Button'
import Icon from '../../components/Icon/Icon'
import cx from 'classnames'
import { compose } from 'redux'
import RecentReadingMenu from './RecentReadingMenu'
import classnames from 'classnames'

interface OwnProps {
  className?: string
  bgColor?: string
  style?: React.CSSProperties
  light?: boolean
  hideNav?: boolean
  subTitle?: any
}

interface OtherProps {
  logout: typeof logout
  config: Viewer.Config
  session: State.Session
  username: string
  displayName: string
  isAdmin?: boolean
  routing: State.Routing
}

interface IState {
  isDropdownMenuVisible: boolean
}

const mapStateToProps = (state, ownProps) => {
  const session = selectors.session(state)

  return {
    config: selectors.viewer.config(state),
    isAdmin: session.role === 'admin',
    username: session.username,
    session,
    routing: selectors.routing(state),
    displayName: session.displayName
  }
}

@CSSModules(styles, {
  allowMultiple: true
})
class Branding extends Component<OwnProps & OtherProps, IState> {

  static defaultProps = {
    light: false
  }

  constructor(props) {
    super(props)
    this.state = {
      isDropdownMenuVisible: false
    }
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  toggleDropdownMenu() {
    this.setState({
      isDropdownMenuVisible: !this.state.isDropdownMenuVisible
    })
  }

  handleLogoutClick(e) {
    this.props.logout()
    e.preventDefault()
  }

  render() {
    const { isAdmin, hideNav, subTitle } = this.props
    const isLoggedIn = this.props.session.role !== 'visitor'
    const { username, bgColor, style, displayName, light } = this.props
    const brandingStyle = {
      ...style,
      background: bgColor
    }
    const path = this.props.routing.pathname
    const navLinkClassName = classnames({
      'light-link': light,
      'dark-link': !light,
    })

    return (
      <div style={brandingStyle} styleName={`branding ${this.props.className ? this.props.className : ''}`}>
        <Container className="clearfix">
          <div>
            <div className="left">
              <Logo
                dark={!light}
              />
            </div>
            <div styleName="sub-name">
              {subTitle}
            </div>
            {
              !hideNav && (
                <div className="left" styleName="nav">
                  <ul styleName="nav-links">
                    <li styleName={cx({ 'nav-item': true, 'active': path === '/browse' })}>
                      <Link className={navLinkClassName} styleName="nav-link" to="/browse">
                        <Icon size={20} name="view" />
                        <span styleName="nav-label">浏览</span>
                      </Link>
                    </li>
                    <li styleName={cx({ 'nav-item': true, 'active': path === '/search' })}>
                      <Link className={navLinkClassName} styleName="nav-link" to="/search">
                        <Icon size={18} name="search" />
                        <span styleName="nav-label">搜索</span>
                      </Link>
                    </li>
                    {
                      isLoggedIn && (
                        <li styleName={cx({ 'nav-item': true, 'active': path === '/user/shelf' })}>
                          <Link className={navLinkClassName} styleName="nav-link" to="/user/shelf">
                            <Icon size={18} name="menu" />
                            <span styleName="nav-label">我的书架</span>
                          </Link>
                        </li>
                      )
                    }
                  </ul>
                </div>
              )
            }
            {
              isLoggedIn
                ? (
                  <div styleName="nav--user">
                    <div styleName="dropdown-recent-reading">
                      <RecentReadingMenu />
                    </div>
                    <Dropdown
                      title={(
                        <div style={{ display: 'inline-block' }}>{displayName || username || '无名'}{isAdmin && <span className="badge">S</span>}</div>
                      )}
                    >
                      {
                        isAdmin === true && (
                          <Dropdown.Item><Link to="/console">控制台</Link></Dropdown.Item>
                        )
                      }
                      <Dropdown.Item><Link to={`/user/profile`}>个人主页</Link></Dropdown.Item>
                      <Dropdown.Item><Link to={`/user/preference`}>设置</Link></Dropdown.Item>
                      <Dropdown.Sep />
                      <Dropdown.Item><a onClick={this.handleLogoutClick} href="#">退出</a></Dropdown.Item>
                    </Dropdown>
                  </div>
                )
                : (
                  <div styleName="nav--user">
                    <ul styleName="nav-links">
                      <li styleName="nav-item">
                        <Link className={navLinkClassName} styleName="nav-link" to="/signin">登录</Link>
                      </li>
                      <li styleName="nav-item">
                        <Button
                          {...{
                            darkBordered: !light,
                            bordered: light
                          }}
                          to="/signup"
                        >注册</Button>
                      </li>
                    </ul>
                  </div>
                )
            }
          </div>
        </Container>
      </div >
    )
  }
}

export default compose<{}, {}, React.ComponentClass<OwnProps>>(
  connect(
    mapStateToProps,
    { logout }
  ),
  CSSModules(styles)
)(Branding)
