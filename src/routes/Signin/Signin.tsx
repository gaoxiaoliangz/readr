import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { sendNotification, userAuth, loadSession } from '../../actions'
import DocContainer from '../../components/DocContainer'
import SigninForm from './components/SigninForm'
import webAPI from '../../webAPI'
// import helpers from '../../helpers'

interface Props {
  sendNotification?: any
  userAuth?: any
  loadSession?: typeof loadSession
}

class Signin extends Component<Props, {}> {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(data) {
    webAPI.userLogin(data).then(res => {
      this.props.sendNotification('登录成功！', 'success', 1500)
      // this.props.loadSession().then(() => {
      //   setTimeout(() => {
      //     helpers.redirect('/')
      //   }, 600)
      // })
      this.props.loadSession()
    }).catch((err) => {
      console.error(err)
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
  { sendNotification, userAuth, loadSession }
)(Signin)
