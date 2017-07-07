import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { sendNotification } from '../../actions'
import { signup } from '../../actions/api'
import DocContainer from '../../components/DocContainer'
import SignupForm from './components/SignupForm'
import { Container } from '../../components/layout'
import Branding from '../Branding/Branding'
import Colophon from '../../components/Colophon/Colophon'

interface Props {
  sendNotification?: any
  userAuth?: any
  signup: typeof signup
}

class Signup extends Component<Props, {}> {
  handleSignup = (data) => {
    this.props.signup(data)
  }

  render() {
    return (
      <DocContainer title="注册">
        <Branding />
        <Container maxWidth={600}>
          <h1 className="page-title">注册</h1>
          <SignupForm
            onSave={this.handleSignup}
          />
          <p className="hint">已有账号？<Link to="/signin">登录</Link></p>
        </Container>
        <Colophon />
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
