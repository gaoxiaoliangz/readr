import React, { Component, PropTypes } from 'react'
import { Link, match } from 'react-router'
import { Panel, Appbar, Container, Form, Input, Textarea, Button } from 'muicss/react'
import { connect } from 'react-redux'

import Branding from 'components/Branding'
import { fetchUserAuthInfo, handleNotification } from 'actions'
import { callApi } from 'utils'
import { API_ROOT } from 'constants/APIS'
import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menus/menu-item'
import RaisedButton from 'material-ui/lib/raised-button'
import AppBar from 'material-ui/lib/app-bar'


class Template extends Component {

  componentDidMount() {
    this.props.fetchUserAuthInfo()
  }

  render() {
    const spanStyle = {color: "white", marginTop: 12, marginRight: 20, fontSize: "16px", display: "inline-block"}

    return (
      <div className="page-home">
        <AppBar
          title={"readr console"}
          zDepth={0}
          style={{position: "fixed", top: 0, zIndex: 9999, background: "black"}}
          iconElementRight={
            <div>
              <span style={spanStyle}>Admin</span>
              <span style={spanStyle}><a href="/">Back to readr</a></span>
            </div>
          }
          iconElementLeft={<div></div>}
        />

        <LeftNav docked={true} open={true} style={{zIndex: 9990, top: 64}}>
          <Link to="/console/books"><MenuItem>Books</MenuItem></Link>
          <Link to="/console/users"><MenuItem>Users</MenuItem></Link>
          <MenuItem>Database</MenuItem>
          <MenuItem>BookLists</MenuItem>
          <MenuItem>Statistics</MenuItem>
        </LeftNav>

        <Container style={{width: "100%", paddingLeft: "276px", paddingTop: 84, paddingBottom: 30, paddingRight: 30, boxSizing: "border-box"}}>
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
