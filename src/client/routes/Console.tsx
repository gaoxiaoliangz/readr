import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import Console from 'containers/console/index'
import ManageBooks from 'containers/console/ManageBooks'
import ManageUsers from 'containers/console/ManageUsers'
import AddBook from 'containers/console/AddBook'
import AddCollection from 'containers/console/AddCollection'
import NoMatch from 'containers/NoMatch'

export default (
  <Router>
    <Route path="/console" component={Console}>
      <IndexRoute component={ManageBooks} />
      <Route path="managebooks" component={ManageBooks} />
      <Route path="manageusers" component={ManageUsers} />
      <Route path="addbook" component={AddBook} />
      <Route path="collection/new" component={AddCollection} />
    </Route>
    <Route path="*" component={NoMatch} />
  </Router>
)
