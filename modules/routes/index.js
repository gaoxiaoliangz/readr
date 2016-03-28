import React from 'react'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

import App from 'containers/app'
import NoMatch from 'containers/no-match'
import IndexPage from 'containers/index-page'
import BookViewer from 'containers/book-viewer2'
import BookStore from 'containers/book-store'
import Signin from 'containers/signin'
import Signup from 'containers/signup'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage}/>
    <Route path="signin" component={Signin}/>
    <Route path="Signup" component={Signup}/>
    <Route path="bookstore" component={App}>
      <IndexRoute component={BookStore}/>
      <Route path="book/:bookname" component={BookViewer}/>
    </Route>
    <Route path="book/:id" component={BookViewer}/>
    <Route path="*" component={NoMatch} />
  </Route>
)
