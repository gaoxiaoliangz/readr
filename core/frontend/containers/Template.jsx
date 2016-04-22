import React, { Component, PropTypes } from 'react'
import { Link, match } from 'react-router'
import { Panel, Appbar, Container, Form, Input, Textarea, Button } from 'muicss/react'
import { connect } from 'react-redux'

import Branding from 'components/Branding'
import { fetchUserAuthInfo, handleNotification } from 'actions'
import { callApi } from 'utils'
import { API_ROOT } from 'constants/APIS'

class Template extends Component {

  componentDidMount() {
    this.props.fetchUserAuthInfo()
  }

  render() {
    return (
      <div className="page-home">
        <Branding user={this.props.user} />
        <Container>
          {this.props.children}
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
)(Template)
