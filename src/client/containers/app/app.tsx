import React, { Component } from 'react'
import { connect } from 'react-redux'
import Branding from '../../components/branding'
import { Container } from '../../elements/layout'
import Colophon from '../../components/Colophon'
import { userAuth } from '../../actions'
import _ from 'lodash'
import CSSModules from 'react-css-modules'
const styles = require('./app.scss')
// import { Button } from '../../elements/form'

@CSSModules(styles)
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
        <Branding isAdmin={isAdmin} username={username} />
        <Container>
          {this.props.children}
        </Container>
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
)(App)
