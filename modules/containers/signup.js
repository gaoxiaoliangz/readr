import React, { Component } from 'react'
import { Panel, Appbar, Container, Form, Input, Textarea, Button } from 'muicss/react'
import 'whatwg-fetch'

import { Branding } from 'components/page-parts'

class Signup extends Component {
  render() {
    return (
      <div className="page-signin">
        <Branding />
        <Container>
          <Form>
            <h1 className="page-title">加入 Readr</h1>
            <Input label="用户名" floatingLabel={true} />
            <Input label="密码" floatingLabel={true} type="password" />
            <Button variant="raised">注册</Button>
          </Form>
        </Container>
      </div>
    )
  }
}

export default Signup
