import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { checkAuthStatus, callApi } from 'utils'
import Container from 'elements/Container'

class ConsoleBranding extends Component {
  render() {
    let username = this.props.username
    let isAdmin = this.props.admin?this.props.admin:'false'

    return (
      <div className="branding console-branding">
        <Container fluid={true} className="clearfix">
          <div>
            <h1 className="logo left">
              <Link to="/console">readr</Link>
              <span className="sep">|</span>
              <span className="sub">Console</span>
            </h1>
            {
              username?(
                <div className="nav right">
                  <span className="username">{username}{isAdmin?(<span className="badge-dark">Admin</span>):null}</span>
                  <ul className="dropdown-menu">
                    <li><Link to={`/profile/${username}`}>我的账号</Link></li>
                    {
                      isAdmin === true?(
                        <li><a href="/console">Console</a></li>
                      ):null
                    }
                    <li><a href='/logout'>退出</a></li>
                  </ul>
                </div>
              ):(
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

export default ConsoleBranding
