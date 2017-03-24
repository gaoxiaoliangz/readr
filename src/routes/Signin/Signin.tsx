import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { sendNotification } from '../../actions'
import { loadSession, basicAuth } from '../../actions/api'
import DocContainer from '../../components/DocContainer'
import SigninForm from './components/SigninForm'

interface Props {
  sendNotification: typeof sendNotification
  basicAuth: typeof basicAuth
  loadSession: typeof loadSession
}

class Signin extends Component<Props, {}> {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(data) {
    this.props.basicAuth(data)
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

export default connect<{}, {}, {}>(
  state => ({
    notification: state.components.notification,
    user: state.user
  }),
  { sendNotification, loadSession, basicAuth }
)(Signin)
