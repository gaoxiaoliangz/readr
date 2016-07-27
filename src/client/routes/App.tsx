import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import NoMatch from '../containers/no-match'
import Viewer from '../containers/viewer'
import Signin from '../containers/signin'
import Signup from '../containers/signup'
import BookInfo from '../containers/book-info'
import App from '../containers/App'
import Home from '../containers/home'
import Profile from '../containers/profile'
import BookShelf from '../containers/book-shelf'
import Settings from '../containers/settings'
import Archive from '../containers/archive'
import Collection from '../containers/collection'
import ArchivedCollection from '../containers/archived-collection'
import Root from '../containers/root'

export default (
  <Router>
    <Route path="/" component={Root}>
      <Route component={App}>
        <IndexRoute component={Home} />
        <Route path="book/:id" component={BookInfo} />
        <Route path="profile" component={Profile} />
        <Route path="profile/:user" component={Profile} />
        <Route path="shelf" component={BookShelf} />
        <Route path="settings" component={Settings} />
        <Route path="browse" component={Archive} />
        <Route path="collections/:id" component={Collection} />
        <Route path="collections" component={ArchivedCollection} />
      </Route>
      <Route path="signin" component={Signin} />
      <Route path="signup" component={Signup} />
      <Route path="viewer/book/:id" component={Viewer} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
)
