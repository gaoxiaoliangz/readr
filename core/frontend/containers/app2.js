import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Panel, Appbar, Container, Form, Input, Textarea, Button } from 'muicss/react'
import { Link, browserHistory } from 'react-router'
import $ from 'jquery'
import Branding from 'components/branding'
import Msg from 'components/msg'
import { API_ROOT } from 'constants/api-urls'
import { connect } from 'react-redux'

import { fetchUserAuthInfo } from 'actions/user'
import { fetchDoubanBookSearchResults, clearBookSearch } from 'actions/book'

class App extends Component {
  constructor(props) {
    super(props)
    console.log(props.params)
  }

  render() {
    return (
      <div className="page-">
        <Branding />
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    book: state.book
  }
}

export default connect(
  mapStateToProps,
  { fetchUserAuthInfo, fetchDoubanBookSearchResults, clearBookSearch }
)(App)
