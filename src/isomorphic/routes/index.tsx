import React from 'react'
import Master from '../containers/Master'
import App from '../containers/App'
import Console from '../containers/Console'
import { Route, IndexRedirect, IndexRoute } from 'react-router'

export default (
  <Route path="/" component={Master}>
    <Route path="viewer/book/:id" {...require('./Viewer') } />
    <Route component={App}>
      <IndexRoute {...require('./AppHome') } />
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
    <Route path="console" component={Console}>
      <IndexRedirect to="/console/books" />
      <Route path="books" {...require('./ManageBooks') } />
      <Route path="users" {...require('./ManageUsers') } />
      <Route path="books/new" {...require('./AddBook') } />
      <Route path="collections/new" {...require('./AddCollection') } />
    </Route>
    <Route path="*" {...require('./NoMatch') } />
  </Route>
)
