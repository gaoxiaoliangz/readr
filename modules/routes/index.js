import React from 'react'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

import App from 'containers/app'
import NoMatch from 'containers/no-match'
import Home from 'containers/home'
import BookViewer from 'containers/book-viewer'
import BookStore from 'containers/book-store'
import Signin from 'containers/signin'
import Signup from 'containers/signup'
import AddBook from 'containers/add-book'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="signin" component={Signin}/>
    <Route path="Signup" component={Signup}/>
    <Route path="addbook" component={AddBook}/>
    <Route path="bookstore" component={App}>
      <IndexRoute component={BookStore}/>
      <Route path="book/:bookname" component={BookViewer}/>
    </Route>
    <Route path="book/:id" component={BookViewer}/>
    <Route path="*" component={NoMatch} />
  </Route>
)
