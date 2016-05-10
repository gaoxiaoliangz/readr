import React, { Component, PropTypes } from 'react'
import { Link, match } from 'react-router'
import { connect } from 'react-redux'
import Branding from 'components/Branding'
import Container from 'elements/Container'
import Colophon from 'components/Colophon'
import { userAuth, handleNotification } from 'actions'
import Notification from 'components/Notification'

class App extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.userAuth()
  }

  render() {
    let isAdmin = false
    let username = null

    if(this.props.session.user.role !== 'visitor') {
      isAdmin = this.props.session.user.role === 'admin'?true:false
      username = this.props.session.user.username
    }

    let pageName = this.props.children.props.route.component.WrappedComponent ?
      this.props.children.props.route.component.WrappedComponent.displayName.toLowerCase() :
      this.props.children.props.route.component.displayName.toLowerCase()

    return (
      <div className={"page-"+pageName}>
        <Branding isAdmin={isAdmin} username={username} />
        <Container>
          <Notification notification={this.props.notification} />
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
  { handleNotification, userAuth }
)(App)
