import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { sendNotification, signin } from '../../actions'
import { loadSession } from '../../actions/api'
import DocContainer from '../../components/DocContainer'
import SigninForm from './components/SigninForm'
import { Container } from '../../components/layout'
import Branding from '../Branding/Branding'
import Colophon from '../../components/Colophon/Colophon'

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
        <Branding />
        <Container maxWidth={600}>
          <div style={{margin: '100px 0'}}>
            <h1 className="page-title">欢迎回来</h1>
            <SigninForm
              onSave={this.handleSubmit}
            />
            <p className="hint">没有账号？<Link to="/signup">注册</Link></p>
          </div>
        </Container>
        <Colophon />
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
