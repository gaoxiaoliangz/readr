import React, { Component } from 'react'
import { Panel, Appbar, Container, Form, Input, Textarea, Button } from 'muicss/react'
import { Link, browserHistory } from 'react-router'
import 'whatwg-fetch'
import { API_ROOT } from 'constants/APIS'
import $ from 'jquery'

import Msg from 'components/Message'
import Branding from 'components/Branding'

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

        setTimeout(function(){
          browserHistory.push('/')
        }, 600)
      }else{
        this.setState({
          status: json.error.msg
        })
        setTimeout(function(){
          this.setState({
            status: null
          })
        }.bind(this), 3000)
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
          <Form className="content-container" method="post" action="/signup">
            <Msg content={this.state.status} />
            <h1 className="page-title">加入 Readr</h1>
            <Input onChange={this.handleInputChange.bind(this)} value={this.state.username} name="username" hint="用户名" />
            <Input onChange={this.handleInputChange.bind(this)} value={this.state.password} name="password" hint="密码 "type="password" />
            <Button onClick={this.handleSignup.bind(this)} variant="raised">注册</Button>
            <p className="hint">没有账号？<Link to="/signin">登录</Link></p>
          </Form>
        </Container>
      </div>
    )
  }
}

export default Signup
