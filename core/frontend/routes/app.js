import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import NoMatch from 'containers/NoMatch'
import BookViewer from 'containers/BookViewer'
import Signin from 'containers/Signin'
import Signup from 'containers/Signup'
import BookInfo from 'containers/BookInfo'
import App from 'containers/App'
import Home from 'containers/Home'

export default (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="book/:id" component={BookInfo} />
    </Route>
    <Route path="signin" component={Signin} />
    <Route path="signup" component={Signup} />
    <Route path="viewer/book/:id" component={BookViewer} />
    <Route path="*" component={NoMatch} />
  </Router>
)
