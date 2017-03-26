import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { sendNotification, signin } from '../../actions'
import { loadSession } from '../../actions/api'
import DocContainer from '../../components/DocContainer'
import SigninForm from './components/SigninForm'
import { Container } from '../../components/layout'

interface Props {
  sendNotification: typeof sendNotification
  signin: typeof signin
  loadSession: typeof loadSession
}

class Signin extends Component<Props, {}> {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(data) {
    this.props.signin(data)
  }

  render() {
    return (
      <DocContainer title="登录">
        <Container>
          <h1 className="page-title">欢迎回来</h1>
          <SigninForm
            onSave={this.handleSubmit}
          />
          <p className="hint">没有账号？<Link to="/signup">注册</Link></p>
        </Container>
      </DocContainer>
    )
  }
}

export default connect<{}, {}, {}>(
  state => ({
    notification: state.components.notification,
    user: state.user
  }),
  { sendNotification, loadSession, signin }
)(Signin)
