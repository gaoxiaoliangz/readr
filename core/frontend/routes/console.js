import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import App from 'containers/App'
import Template from 'containers/Template'
import ManageBooks from 'containers/ManageBooks'
import ManageUsers from 'containers/ManageUsers'
import AddBook from 'containers/AddBook'

function handleEnter(a, b) {
  // console.log(a);
  // console.log(b);
}

function requireAdminPermission(nextState, replace) {
  if(true) {
    replace({
      pathname: '/Signin',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default (
  <Router path="/" component={App}>
    <Router path="/console" component={Template}>
      <Route path="books" component={ManageBooks} />
      <Route path="users" component={ManageUsers} />
      <Route path="addbook" component={AddBook} />
    </Router>
  </Router>
)
