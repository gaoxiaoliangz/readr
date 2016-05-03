import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import callApi from 'utils/callApi'
import Container from 'elements/Container'

class ConsoleBranding extends Component {

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
    let isAdmin = this.props.isAdmin?this.props.isAdmin:'false'

    return (
      <div className="branding console-branding">
        <Container isFluid={true} className="clearfix">
          <div>
            <h1 className="logo left">
              <Link to="/console">readr</Link>
              <span className="sep">|</span>
              <span className="sub">Console</span>
            </h1>
            {
              username?(
                <div onMouseLeave={this.toggleDropdownMenu.bind(this)} onMouseEnter={this.toggleDropdownMenu.bind(this)} className="nav right">
                  <span className="username">{username}{isAdmin?(<span className="badge-dark">Admin</span>):null}</span>
                  {
                    this.state.isDropdownMenuVisible?(
                      <ul className="dropdown-menu">
                        {
                          isAdmin === true?(
                            <li><a href="/">Back to readr</a></li>
                          ):null
                        }
                        <li><Link to={`/profile/${username}`}>我的账号</Link></li>
                        <li><a href='/logout'>退出</a></li>
                      </ul>
                    ):null
                  }
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
