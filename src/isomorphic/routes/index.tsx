import React from 'react'
import Master from '../containers/Master'
import App from '../containers/App'
import Console from '../containers/Console'
import { Route, IndexRedirect } from 'react-router'

// todo
// path 写到 Route 上
export default (
  <Route component={Master}>
    <Route {...require('./Viewer') } />
    <Route component={App}>
      <Route {...require('./AppHome') } />
      <Route path="browse" {...require('./Browse') } />
      <Route {...require('./BookDetail') } />
      <Route {...require('./Collections') } />
      <Route {...require('./CollectionDetail') } />
      <Route {...require('./Signin') } />
      <Route {...require('./Signup') } />
      <Route path="user">
        <IndexRedirect to="/user/profile" />
        <Route {...require('./Shelf') } />
        <Route {...require('./Preference') } />
        <Route {...require('./Profile') } />
      </Route>
    </Route>
    <Route path="console" component={Console}>
      <IndexRedirect to="/console/books" />
      <Route {...require('./ManageBooks') } />
      <Route {...require('./ManageUsers') } />
      <Route {...require('./AddBook') } />
      <Route {...require('./AddCollection') } />
    </Route>
    <Route {...require('./NoMatch') } />
  </Route>
)
