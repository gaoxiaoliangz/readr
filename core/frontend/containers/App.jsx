import React, { Component, PropTypes } from 'react'
import { Link, match } from 'react-router'
import { connect } from 'react-redux'
import Branding from 'components/Branding'
import Container from 'elements/Container'
import Colophon from 'components/Colophon'
import { fetchUserAuthInfo, handleNotification } from 'actions'


class App extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUserAuthInfo()
  }

  render() {
    let isAdmin = this.props.user.role?(this.props.user.role === 'admin'?true:false):false
    let username = this.props.user.username
    let pageName = this.props.children.props.route.component.WrappedComponent?this.props.children.props.route.component.WrappedComponent.displayName.toLowerCase():'404'

    return (
      <div className={"page-"+pageName}>
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
    notification: state.notification,
    user: state.user
  }),
  { handleNotification, fetchUserAuthInfo }
)(App)
