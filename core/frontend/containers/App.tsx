import React, { Component } from 'react'
import { Link, match } from 'react-router'
import { connect } from 'react-redux'
import Branding from 'components/Branding'
import Container from 'elements/Container'
import Colophon from 'components/Colophon'
import { userAuth } from 'actions/index'
import Notification from 'components/Notification'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
// const styles = require('containers/App.scss')
const styles = require('./App.scss')
import Button from 'elements/Button'

console.log((styles as any));

@CSSModules((styles as any))
class App extends Component<any, any> {

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
        <Branding styleName="fuck" isAdmin={isAdmin} username={username} />
        <Button {...{styleName: 'btn'}}>test</Button>
        <Container>
          {this.props.children}
        </Container>
        <Colophon />
        <div></div>
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
)(App)
