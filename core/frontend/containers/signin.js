import React, { Component } from 'react'
import { Panel, Appbar, Container, Form, Input, Textarea, Button } from 'muicss/react'
import { Link, browserHistory } from 'react-router'
import 'whatwg-fetch'
import { URL_AUTH } from 'constants/api-urls'
import $ from 'jquery'

import Branding from 'components/branding'

class Signin extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      status: ""
    }
  }

  handleSignin(event) {
    event.preventDefault()

    let params = {
      username: this.state.username,
      password: this.state.password
    }

    $.post(URL_AUTH, params, function(data){
      console.log(data);
      if(data.authed) {
        this.setState({
          status: "登录成功"
        })

        browserHistory.push('/')
      }else{
        this.setState({
          status: data.error.msg
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
          <Form className="content-container" action="/signin" method="post">
            <h1 className="page-title">欢迎回来</h1>
            <Input onChange={this.handleInputChange.bind(this)} value={this.state.username} name="username" label="用户名" floatingLabel={true} />
            <Input onChange={this.handleInputChange.bind(this)} value={this.state.password} name="password" label="密码" floatingLabel={true} type="password" />
            <Button onClick={this.handleSignin.bind(this)} variant="raised">登录</Button>
            <p className="hint">没有账号？<Link to="/signup">注册</Link></p>
          </Form>
        </Container>
      </div>
    )
  }
}

export default Signin
