import React from 'react'
import Master from '../containers/Master'
import Console from '../containers/Console'
import App from '../containers/App'
import { Route, IndexRedirect } from 'react-router'
import AppHome from './AppHome/AppHome'
import Browse from './Browse/Browse'

export default (
  <Route component={Master}>
    <Route component={App}>
      <Route path="/" component={AppHome} />
      <Route path="browse" component={Browse} />
    </Route>
  </Route>
)
