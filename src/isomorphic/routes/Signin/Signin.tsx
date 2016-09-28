import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import {ApiRoots} from '../../config'
import callApi from '../../utils/callApi'
import { sendNotification, userAuth } from '../../store/actions'
import DocContainer from '../../containers/DocContainer'
import SigninForm from './components/SigninForm'

interface Props {
  sendNotification?: any
  userAuth?: any
}

class Signin extends Component<Props, {}> {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(data) {
    callApi(`${ApiRoots.LOCAL}auth`, { method: 'POST', data }).then(res => {
      this.props.sendNotification('登录成功！', 'success', 1500)
      this.props.userAuth().then(() => {
        setTimeout(() => {
          browserHistory.push('/')
        }, 600)
      })
    }).catch((err) => {
      this.props.sendNotification(err.message, 'error')
    })
  }

  render() {
    return (
      <DocContainer title="登录">
        <div className="content-container">
          <h1 className="page-title">欢迎回来</h1>
          <SigninForm
            onSave={this.handleSubmit}
          />
          <p className="hint">没有账号？<Link to="/signup">注册</Link></p>
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
)(Signin)
