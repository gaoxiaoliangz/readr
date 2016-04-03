import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { Panel, Appbar, Container, Form, Input, Textarea, Button } from 'muicss/react'
import 'whatwg-fetch'
import Branding from 'components/branding'

class Home extends Component {

  render() {
    return (
      <div className="page-home">
        <Branding />
        <Container>
          <div>
            <h1 className="page-title">This is home, bitch!!!!</h1>
            <ul>
              <li>
                <Link to="/bookstore">查看书城</Link>
              </li>
              <li>
                <Link to="/addbook">添加书籍</Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    )
  }
}

export default Home
