import React, { Component } from 'react'
import { Panel, Appbar, Container, Form, Input, Textarea, Button } from 'muicss/react'
import 'whatwg-fetch'

import $ from 'jquery'

import { Branding } from 'components/page-parts'

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
    console.log(this.state.username)
    console.log(this.state.password)

    let formData = new FormData()
    let params = {
      username: this.state.username,
      password: this.state.password
    }
    for (var k in params) {
      formData.append(k, params[k]);
    }


    let url = '/api/v0.1/auth'
    // fetch(url, {
    //   method: 'post',
    //   body: formData
    // }).then(res => {
    //   return res.json()
    // }).then(data => {
    //   console.log(data)
    // })

    // $.ajax({
    //   type: "POST",
    //   url: url,
    //   data: params
    // }, function(data){
    //   console.log(data);
    // });

    $.post(url, params, function(data){
      console.log(data);
      if(data.authed) {
        this.setState({
          status: "登录成功"
        })

        location.href="/"
      }else{
        this.setState({
          status: data.error.msg
        })
      }
    }.bind(this))

  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div className="page-signin">
        <Branding />
        <Container>
          <div className="auth-status">{this.state.status}</div>
          <Form action="/signin" method="post">
            <h1 className="page-title">欢迎回来</h1>
            <Input onChange={this.handleInputChange.bind(this)} value={this.state.username} name="username" label="用户名" floatingLabel={true} />
            <Input onChange={this.handleInputChange.bind(this)} value={this.state.password} name="password" label="密码" floatingLabel={true} type="password" />
            <Button onClick={this.handleSignin.bind(this)} variant="raised">登录</Button>
          </Form>
        </Container>
      </div>
    )
  }
}

export default Signin
