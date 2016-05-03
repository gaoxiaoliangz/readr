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
    let isAdmin = false
    let username = null

    if(this.props.userAuthInfo.authed === true) {
      isAdmin = this.props.userAuthInfo.user.role?(this.props.userAuthInfo.user.role === 'admin'?true:false):false
      username = this.props.userAuthInfo.user.username
    }

    let pageName = this.props.children.props.route.component.WrappedComponent ?
      this.props.children.props.route.component.WrappedComponent.displayName.toLowerCase() :
      this.props.children.props.route.component.displayName.toLowerCase()

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
    userAuthInfo: state.entities.userAuthInfo?state.entities.userAuthInfo.current:{}
  }),
  { handleNotification, fetchUserAuthInfo }
)(App)
