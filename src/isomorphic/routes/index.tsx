import React from 'react'
import Master from '../containers/Master'
import App from '../containers/App'
import Console from '../containers/Console'
import { Route, IndexRedirect } from 'react-router'

// todo
// path 写到 Route 上
export default (
  <Route component={Master}>
    <Route path="viewer/book/:id" {...require('./Viewer') } />
    <Route component={App}>
      <Route path="/" {...require('./AppHome') } />
      <Route path="browse" {...require('./Browse') } />
      <Route path="book/:id" {...require('./BookDetail') } />
      <Route path="collections" {...require('./Collections') } />
      <Route path="collections/:id" {...require('./CollectionDetail') } />
      <Route path="signin" {...require('./Signin') } />
      <Route path="signup" {...require('./Signup') } />
      <Route path="user">
        <IndexRedirect to="/user/profile" />
        <Route path="shelf" {...require('./Shelf') } />
        <Route path="preference" {...require('./Preference') } />
        <Route path="profile" {...require('./Profile') } />
      </Route>
    </Route>
    <Route path="/console" component={Console}>
      <IndexRedirect to="/console/books" />
      <Route path="books" {...require('./ManageBooks') } />
      <Route path="users" {...require('./ManageUsers') } />
      <Route path="books/new" {...require('./AddBook') } />
      <Route path="collections/new" {...require('./AddCollection') } />
    </Route>
    <Route path="*" {...require('./NoMatch') } />
  </Route>
)
