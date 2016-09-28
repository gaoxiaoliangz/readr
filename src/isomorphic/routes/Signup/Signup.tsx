import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import { ApiRoots } from '../../config'
import callApi from '../../utils/callApi'
import { sendNotification, userAuth } from '../../store/actions'
import DocContainer from '../../containers/DocContainer'
import SignupForm from './components/SignupForm'

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
    callApi(`${ApiRoots.LOCAL}users`, { method: 'POST', data })
      .then(res => {
        this.props.sendNotification('注册成功！')
        // todo
        // 登录
        this.props.userAuth().then(() => {
          setTimeout(() => {
            browserHistory.push('/')
          }, 600)
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
