import React from 'react'
import Master from '../containers/Master'
import Console from '../containers/Console'
import App from '../containers/App'
import { Route, IndexRedirect } from 'react-router'
import Test from '../containers/Test'

import AppHome from './AppHome/AppHome'
import Browse from './Browse/Browse'

// todo
// path 写到 Route 上
export default (
  <Route component={Master}>
    <Route path="/test" component={Test} />
    <Route component={App}>
      <Route path="/" component={AppHome} />
      <Route path="browse" component={Browse} />
    </Route>
  </Route>
)
