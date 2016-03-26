import React from 'react'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

import App from 'containers/app'
import NoMatch from 'containers/no-match'
import IndexPage from 'containers/index-page'
import BookViewer from 'containers/bookviewer'
import BookStore from 'containers/bookstore'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage}/>
    <Route path="bookstore" component={App}>
      <IndexRoute component={BookStore}/>
      <Route path="book/:bookname" component={BookViewer}/>
    </Route>
    <Route path="book/:bookname" component={BookViewer}/>
    <Route path="*" component={NoMatch} />
  </Route>
)
