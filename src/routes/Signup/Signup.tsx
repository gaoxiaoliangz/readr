import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { sendNotification } from '../../actions'
import { signup } from '../../actions/api'
import DocContainer from '../../components/DocContainer'
import SignupForm from './components/SignupForm'

interface Props {
  sendNotification?: any
  userAuth?: any
  signup: typeof signup
}

class Signup extends Component<Props, {}> {
  constructor(props) {
    super(props)
    this.handleSignup = this.handleSignup.bind(this)
  }

  handleSignup(data) {
    this.props.signup(data)
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
  { sendNotification, signup }
)(Signup)
