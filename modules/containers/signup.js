import React, { Component } from 'react'
import { Panel, Appbar, Container, Form, Input, Textarea, Button } from 'muicss/react'
import { Link } from 'react-router'
import 'whatwg-fetch'
import $ from 'jquery'
import { URL_USERS } from 'constants/api-urls'

import Branding from 'components/branding'

class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      status: ""
    }
  }

  handleSignup(event) {
    event.preventDefault()

    let params = {
      username: this.state.username,
      password: this.state.password
    }

    $.post(URL_USERS, params, function(json){
      console.log(json);
      if(json.data) {
        this.setState({
          status: "注册成功"
        })
        location.href="/"
      }else{
        this.setState({
          status: json.error.msg
        })
      }
    }.bind(this))
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div className="page-signin">
        <Branding />
        <Container>
          <div className="auth-status">{this.state.status}</div>
          <Form className="content-container" method="post" action="/signup">
            <h1 className="page-title">加入 Readr</h1>
            <Input onChange={this.handleInputChange.bind(this)} value={this.state.username} name="username" label="用户名" floatingLabel={true} />
            <Input onChange={this.handleInputChange.bind(this)} value={this.state.password} name="password" label="密码" floatingLabel={true} type="password" />
            <Button onClick={this.handleSignup.bind(this)} variant="raised">注册</Button>
            <p className="hint">没有账号？<Link to="/signin">登录</Link></p>
          </Form>
        </Container>
      </div>
    )
  }
}

export default Signup
