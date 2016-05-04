import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import ApiRoots from 'constants/ApiRoots'
import callApi from 'utils/callApi'
import { fetchUserAuthInfo, handleNotification } from 'actions'
import Notification from 'components/Notification'
import Branding from 'components/Branding'
import Input from 'elements/Input'
import Button from 'elements/Button'
import Container from 'elements/Container'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      password: ""
    }
  }

  handleSignup(event) {
    event.preventDefault()

    let params = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    callApi({ fullUrl: `${ApiRoots.LOCAL}users`, method: 'POST', data: params })
      .then(res => {
        this.props.handleNotification('注册成功！')
        setTimeout(function(){
          browserHistory.push('/')
        }, 600)
      }, err => {
        this.props.handleNotification(err.message)
      })
  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div className="page-signup">
        <Branding />
        <Container>
          <form className="content-container" method="post" action="/signup">
            <Notification notification={this.props.notification} />
            <h1 className="page-title">加入 Readr</h1>
            <Input onChange={this.handleInput.bind(this)} value={this.state.username} name="username" placeholder="用户名" />
            <Input onChange={this.handleInput.bind(this)} value={this.state.email} name="email" placeholder="邮箱" />
            <Input onChange={this.handleInput.bind(this)} value={this.state.password} name="password" placeholder="密码 "type="password" />
            <Button className="z1" color="blue" onClick={this.handleSignup.bind(this)}>注册</Button>
            <p className="hint">没有账号？<Link to="/signin">登录</Link></p>
          </form>
        </Container>
      </div>
    )
  }
}

export default connect(
  state => ({
    notification: state.components.notification,
    user: state.user
  }),
  { handleNotification, fetchUserAuthInfo }
)(Signup)
