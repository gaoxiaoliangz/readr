import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Appbar, Button, Container } from 'muicss/react'
import { checkAuthStatus, callApi } from 'utils'


class Branding extends Component {
  render() {
    let user = this.props.user
    let isAdmin = this.props.isAdmin?this.props.isAdmin:'false'

    console.log(isAdmin)
    return (
      <Appbar className="branding">
        <Container>
          <div>
            <h1 className="logo left">
              <Link to="/">readr</Link>
            </h1>
            {
              user.authed?(
                <ul className={"right mui-list--inline mui--text-body2"}>
                  {
                    isAdmin === true?(
                      <li><a href="/console">Console</a></li>
                    ):null
                  }
                  <li><Link to={`/profile/${user.username}`}>{user.username}</Link></li>
                  <li><a href='/logout'>退出</a></li>
                </ul>
              ):(
                <ul className={"right mui-list--inline mui--text-body2"}>
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
        </Container>
      </Appbar>
    )
  }
}

Branding.propTypes = {
  // user: React.PropTypes.object.isRequired
}

export default Branding
