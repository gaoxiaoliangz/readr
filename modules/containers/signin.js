import React, { Component } from 'react'
import { Panel, Appbar, Container, Form, Input, Textarea, Button } from 'muicss/react'
import 'whatwg-fetch'

import { Branding } from 'components/page-parts'

class Signin extends Component {
  render() {
    return (
      <div className="page-signin">
        <Branding />
        <Container>
          <Form>
            <h1 className="page-title">欢迎回来</h1>
            <Input label="用户名" floatingLabel={true} />
            <Input label="密码" floatingLabel={true} type="password" />
            <Button variant="raised">登录</Button>
          </Form>
        </Container>
      </div>
    )
  }
}

export default Signin
