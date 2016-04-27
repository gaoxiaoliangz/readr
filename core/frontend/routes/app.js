import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

import NoMatch from 'containers/NoMatch'
import BookViewer from 'containers/BookViewer'
import BookStore from 'containers/BookStore'
import Signin from 'containers/Signin'
import Signup from 'containers/Signup'
import BookInfo from 'containers/BookInfo'
import App from 'containers/App'


export default (
  <Router>
    <Router path="/" component={App}>
      <IndexRoute component={BookStore} />
      <Route path="book/:id" component={BookInfo} />
    </Router>
    <Route path="bookstore" component={BookStore} />
    <Route path="signin" component={Signin} />
    <Route path="signup" component={Signup} />
    <Route path="viewer/book/:id" component={BookViewer} />
    <Route path="*" component={NoMatch} />
  </Router>
)
