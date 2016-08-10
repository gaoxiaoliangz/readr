import React, { Component } from 'react'
import { Link } from 'react-router'
import { Container } from '../../elements/_layout'
import { Dropdown, DropdownItem, DropdownItemSep } from '../../elements/Dropdown'
import Logo from '../Logo'
import CSSModules from 'react-css-modules'
const styles = require('./Branding.scss')

interface IProps {
  username: string
  isAdmin?: boolean
  className?: string
  recentReading?: any[]
}

interface IState {
  isDropdownMenuVisible: boolean
}

@CSSModules(styles, {
  allowMultiple: true
})
class Branding extends Component<IProps, IState> {

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
    let isAdmin = this.props.isAdmin ? this.props.isAdmin : false

    const { username, recentReading } = this.props

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
                      {
                        recentReading.map((book, index) => {
                          return (
                            <DropdownItem key={index}>{book}</DropdownItem>
                          )
                        })
                      }
                    </Dropdown>
                    <Dropdown
                      title={(
                        <span>{username}{ isAdmin && <span className="badge">Admin</span> }</span>
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
                      <DropdownItemSep />
                      <DropdownItem><a href="/logout">退出</a></DropdownItem>
                    </Dropdown>
                  </div>
                )
                : (
                  <div styleName="nav--user">
                    <ul styleName="nav-links">
                      <li styleName="nav-item">
                        <Link styleName="nav-link" to="/signin">登录</Link>
                      </li>
                      <li styleName="nav-item">
                        <Link styleName="nav-link" to="/signup">注册</Link>
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
