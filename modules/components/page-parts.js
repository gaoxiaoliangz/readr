import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Appbar, Button, Container } from 'muicss/react'


class Branding extends Component {
  render() {
    return (
      <Appbar className="mui--z1 branding">
        <Container>
          <div>
            <h1 className="logo left">
              <a href="/">readr</a>
            </h1>
            <ul className="right mui-list--inline mui--text-body2">
              <li>
                <a href="/signin">登录</a>
              </li>
              <li>
                <a href="/signup">注册</a>
              </li>
            </ul>
          </div>
        </Container>
      </Appbar>
    )
  }
}


var PageParts = {
  Branding: Branding
}
export default PageParts



export { Branding }
