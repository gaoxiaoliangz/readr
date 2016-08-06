import React, { Component } from 'react'
import { connect } from 'react-redux'
import Branding from '../components/Branding'
import Colophon from '../components/Colophon'
import { userAuth } from '../store/actions'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
// const styles = require('./_app.scss')

// @CSSModules(styles)
class AppCommon extends Component<any, any> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.userAuth()
  }

  render() {
    let isAdmin = false
    let username = null

    if (this.props.session.user.role !== 'visitor') {
      isAdmin = this.props.session.user.role === 'admin'
      username = this.props.session.user.username
    }

    return (
      <div>
        <Branding isAdmin={isAdmin} username={username} />
        {this.props.children}
        <Colophon />
      </div>
    )
  }
}

export default connect(
  state => ({
    notification: state.components.notification,
    session: state.session
  }),
  { userAuth } as any
)(AppCommon)
