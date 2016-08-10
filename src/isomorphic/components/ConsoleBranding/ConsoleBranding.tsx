import React, { Component } from 'react'
import { Link } from 'react-router'
import Container from '../../elements/_layout/Container'
import { Dropdown, DropdownItem, DropdownItemSep } from '../../elements/Dropdown'
import CSSModules from 'react-css-modules'
import Logo from '../Logo'
// const brandingStyles = require('../Branding/Branding.css')
const styles = require('./ConsoleBranding.scss')

@CSSModules(styles, {
  allowMultiple: true
})
class ConsoleBranding extends Component<any, any> {

  constructor(props) {
    super(props)
    this.state = {
      isDropdownMenuVisible: false
    }
  }

  toggleDropdownMenu() {
    this.setState({
      isDropdownMenuVisible: !this.state.isDropdownMenuVisible
    })
  }

  render() {
    let username = this.props.username
    let isAdmin = this.props.isAdmin ? this.props.isAdmin : 'false'

    return (
      <div styleName="branding">
        <Container isFluid={true} className="clearfix">
          <div>
            <Logo to="/console" />
            <div styleName="sub-name">
              <span styleName="sub">Console</span>
            </div>
            <div styleName="nav right">
              {
                username ? (
                  <Dropdown
                    style="dark"
                    title={(
                      <span>{username}{ isAdmin && <span className="badge badge--dark">Admin</span> }</span>
                    ) }
                    >
                    <DropdownItem><Link to="/">回到 Readr</Link></DropdownItem>
                    <DropdownItem><Link to={`/user/profile`}>个人主页</Link></DropdownItem>
                    <DropdownItem><Link to={`/user/preference`}>设置</Link></DropdownItem>
                    <DropdownItemSep />
                    <DropdownItem><a href="/logout">退出</a></DropdownItem>
                  </Dropdown>
                ) : (
                    <ul className="nav-links">
                      <li>
                        <Link to="/signin">登录</Link>
                      </li>
                      <li>
                        <Link to="/signup">注册</Link>
                      </li>
                    </ul>
                  )
              }
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default ConsoleBranding
