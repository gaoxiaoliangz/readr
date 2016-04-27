import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import Console from 'containers/console'
import ManageBooks from 'containers/console/ManageBooks'
import ManageUsers from 'containers/console/ManageUsers'
import AddBook from 'containers/console/AddBook'
import NoMatch from 'containers/NoMatch'

export default (
  <Router path="/">
    <Router path="console" component={Console}>
      <Route path="books" component={ManageBooks} />
      <Route path="users" component={ManageUsers} />
      <Route path="addbook" component={AddBook} />
    </Router>
    <Route path="*" component={NoMatch} />
  </Router>
)
