import React from 'react'
import Root from '../containers/Root'
import AppMaster from '../containers/AppMaster'
import ConsoleMaster from '../containers/ConsoleMaster'
import { Route, IndexRedirect } from 'react-router'

export default (
  <Route component={Root}>
    <Route {...require('./Viewer') } />
    <Route component={AppMaster}>
      <Route {...require('./AppHome') } />
      <Route {...require('./Browse') } />
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
    <Route path="console" component={ConsoleMaster}>
      <IndexRedirect to="/console/books" />
      <Route {...require('./ManageBooks') } />
      <Route {...require('./ManageUsers') } />
      <Route {...require('./AddBook') } />
      <Route {...require('./AddCollection') } />
    </Route>
    <Route {...require('./NoMatch') } />
  </Route>
)
