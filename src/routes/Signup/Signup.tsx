import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { sendNotification, userAuth } from '../../actions'
import DocContainer from '../../components/DocContainer'
import SignupForm from './components/SignupForm'
import api from '../../apifns'
import helpers from '../../helpers'

interface Props {
  sendNotification?: any
  userAuth?: any
}

class Signup extends Component<Props, {}> {
  constructor(props) {
    super(props)
    this.handleSignup = this.handleSignup.bind(this)
  }

  handleSignup(data) {
    api.userSignup(data)
      .then(res => {
        this.props.sendNotification('注册成功！')
        api.userLogin({ login: data.username, password: data.password }).then(() => {
          this.props.userAuth().then(() => {
            setTimeout(() => {
              helpers.redirect('/')
            }, 600)
          })
        })
      }, err => {
        this.props.sendNotification(err.message, 'error')
      })
  }

  render() {
    return (
      <DocContainer title="注册">
        <div className="content-container">
          <h1 className="page-title">加入 Readr</h1>
          <SignupForm
            onSave={this.handleSignup}
            />
          <p className="hint">已有账号？<Link to="/signin">登录</Link></p>
        </div>
      </DocContainer>
    )
  }
}

export default connect<{}, {}, Props>(
  state => ({
    notification: state.components.notification,
    user: state.user
  }),
  { sendNotification, userAuth }
)(Signup)
