import React, { Component } from 'react'
import { Link } from 'react-router'
import { Container } from '../elements/layout'

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
      <div className={`branding ${this.props.className ? this.props.className : ''}`}>
        <Container className="clearfix">
          <div>
            <h1 className="logo left">
              <Link to="/">readr</Link>
            </h1>
            <div className="nav left">
              <ul className="nav-links">
                <li>
                  <Link to="/browse">浏览</Link>
                </li>
                <li>
                  <Link to="/collections">书单</Link>
                </li>
              </ul>
            </div>
            {
              username ? (
                <div onMouseLeave={this.toggleDropdownMenu.bind(this) } onMouseEnter={this.toggleDropdownMenu.bind(this) } className="nav right">
                  <span className="recent-reading">最近阅读</span>
                  <span className="username">{username}{isAdmin ? (<span className="badge-dark">Admin</span>) : null}</span>
                  {
                    this.state.isDropdownMenuVisible ? (
                      <ul onClick={this.toggleDropdownMenu.bind(this) } className="dropdown-menu">
                        {
                          isAdmin === true ? (
                            <li><a href="/console">控制台</a></li>
                          ) : null
                        }
                        {/*<li><Link to={`/profile/${username}`}>我的账号</Link></li>*/}
                        <li><Link to={`/shelf`}>书架</Link></li>
                        <li><Link to={`/profile`}>个人主页</Link></li>
                        <li><Link to={`/settings`}>设置</Link></li>
                        <li><a href='/logout'>退出</a></li>
                      </ul>
                    ) : null
                  }
                </div>
              ) : (
                  <div className="nav right">
                    <ul className="nav-links">
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
