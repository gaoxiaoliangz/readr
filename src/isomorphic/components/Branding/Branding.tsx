import React, { Component } from 'react'
import { Link } from 'react-router'
import { Container } from '../../elements/_layout'
import { Dropdown, DropdownItem } from '../../elements/Dropdown'
import Logo from '../Logo'
import CSSModules from 'react-css-modules'
const styles = require('./Branding.css')

@CSSModules(styles, {
  allowMultiple: true
})
class Branding extends Component<any, any> {

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
    let isAdmin = this.props.isAdmin ? this.props.isAdmin : false

    return (
      <div styleName={`branding ${this.props.className ? this.props.className : ''}`}>
        <Container className="clearfix">
          <div>
            <Logo to="/" />
            <div styleName="nav">
              <ul styleName="nav-links">
                <li styleName="nav-item">
                  <Link styleName="nav-link" to="/browse">浏览</Link>
                </li>
                <li styleName="nav-item">
                  <Link styleName="nav-link" to="/collections">书单</Link>
                </li>
              </ul>
            </div>
            {
              username
                ? (
                  <div styleName="nav--user">
                    <Dropdown styleName="dropdown-recent-reading" title="最近阅读">
                      <DropdownItem><Link to="/">hahahh</Link></DropdownItem>
                      <DropdownItem>haha</DropdownItem>
                      <DropdownItem>hahasf</DropdownItem>
                      <DropdownItem>haha</DropdownItem>
                      <DropdownItem>hahasdf</DropdownItem>
                    </Dropdown>
                    <Dropdown
                      title={(
                        <span>{username}{ isAdmin && <span className="badge-dark">Admin</span> }</span>
                      ) }
                      >
                      {
                        isAdmin === true && (
                          <DropdownItem><Link to="/console">控制台</Link></DropdownItem>
                        )
                      }
                      <DropdownItem><Link to={`/user/shelf`}>书架</Link></DropdownItem>
                      <DropdownItem><Link to={`/user/profile`}>个人主页</Link></DropdownItem>
                      <DropdownItem><Link to={`/user/preference`}>设置</Link></DropdownItem>
                      <DropdownItem><a href="/logout">退出</a></DropdownItem>
                    </Dropdown>
                  </div>
                )
                : (
                  <div styleName="nav--user">
                    <ul styleName="nav-links">
                      <li>
                        <Link to="/signin">登录</Link>
                      </li>
                      <li>
                        <Link to="/signup">注册</Link>
                      </li>
                    </ul>
                  </div>
                )
            }
          </div>
        </Container>
      </div>
    )
  }
}

export default Branding
