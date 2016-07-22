import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import Console from '../containers/console/home'
import ManageBooks from '../containers/console/manage-books'
import ManageUsers from '../containers/console/manage-users'
import AddBook from '../containers/console/add-book'
import AddCollection from '../containers/console/add-collection'
import NoMatch from '../containers/no-match'

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
