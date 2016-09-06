import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import ApiRoots from '../../config'
import callApi from '../../utils/callApi'
import { sendNotification, userAuth } from '../../store/actions'
import { Button, Input } from '../../elements/_form'
import Body from '../../components/Body'

class Signin extends Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      password: ''
    }
  }

  handleSignin(event) {
    event.preventDefault()

    let params = {
      login: this.state.login,
      password: this.state.password
    }

    callApi(`${ApiRoots.LOCAL}auth`, { method: 'POST', data: params }).then(res => {
      this.props.sendNotification('登录成功！', 'success', 1500)
      this.props.userAuth().then(() => {
        setTimeout(function () {
          browserHistory.push('/')
        }, 600)
      })
    }).catch((err) => {
      this.props.sendNotification(err.message, 'error')
    })
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div>
        <Body className="signin" />
        <form className="content-container" action={`${ApiRoots.LOCAL}auth`} method="post">
          <h1 className="page-title">欢迎回来</h1>
          <Input onChange={this.handleInput.bind(this) } value={this.state.login} name="login" placeholder="用户名或邮箱" />
          <Input onChange={this.handleInput.bind(this) } value={this.state.password} name="password" placeholder="密码" type="password" />
          <Button className="z1" color="blue" onClick={this.handleSignin.bind(this) }>登录</Button>
          <p className="hint">没有账号？<Link to="/signup">注册</Link></p>
        </form>
      </div>
    )
  }
}

export default connect(
  state => ({
    notification: state.components.notification,
    user: state.user
  }),
  { sendNotification, userAuth } as any
)(Signin)
