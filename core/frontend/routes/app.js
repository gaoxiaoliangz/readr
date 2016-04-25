import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

import App from 'containers/App'
import NoMatch from 'containers/NoMatch'
import BookViewer from 'containers/BookViewer'
import BookStore from 'containers/BookStore'
import Signin from 'containers/Signin'
import Signup from 'containers/Signup'
import BookInfo from 'containers/BookInfo'
// import Template from 'containers/Template'


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
    <IndexRoute component={BookStore} onEnter={handleEnter.bind(this)} />
    <Route path="/bookstore" component={BookStore} />
    <Route path="signin" component={Signin} />
    <Route path="Signup" component={Signup} />
    <Route path="bookstore/book/:id" component={BookInfo} />
    <Route path="book/:id" component={BookViewer} />
  </Router>
)
