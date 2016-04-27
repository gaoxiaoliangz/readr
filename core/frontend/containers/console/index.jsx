import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import Container from 'elements/Container'
import ConsoleBranding from 'components/ConsoleBranding'
import { fetchUserAuthInfo, handleNotification } from 'actions'

class Console extends Component {

  componentDidMount() {
    this.props.fetchUserAuthInfo()
  }

  render() {
    let isAdmin = this.props.user.role?(this.props.user.role === 'admin'?true:false):false
    let username = this.props.user.username

    // TODO: getCurrentComponentDisplayName
    console.log(this.props);
    let pageName = this.props.children.props.route.component.WrappedComponent?this.props.children.props.route.component.WrappedComponent.displayName.toLowerCase():'404'
    // let pageName = "test"

    console.log(this.props.children.props.route.component);
    // console.log(this.props.children.props);
    return (
      <div className={"page-"+pageName}>
        <ConsoleBranding fluid={true} admin={isAdmin} username={username} />
        <Container>
          <div className="sidebar-left">
            <ul className="nav-side nav-side-root">
              <li><Link to="/console/books">Books</Link></li>
              <li><Link to="/console/users">Users</Link></li>
            </ul>
            <ul className="nav-side nav-side-sub">
              <li><Link to="/console/books">Books</Link></li>
              <li><Link to="/console/users">Users</Link></li>
            </ul>
          </div>
          <div className="content">
            {this.props.children}
          </div>
        </Container>
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
)(Console)
