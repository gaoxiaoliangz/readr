import React from 'react'
import { Route, IndexRedirect, IndexRoute } from 'react-router'
import Master from '../components/Master'
import App from '../components/App'
import Console from '../components/Console'
import webAPI from '../webAPI'

const createRoutes = (context = {}) => {
  // server side needs injected cookie
  const { cookie } = context as any

  const authorize = (roles: Roles[]) => (nextState, replace, callback?) => {
    // store may also be the option
    // but may have security issues
    // and will not be changed when session expires
    // so we still need to call to check on every enter
    webAPI.auth(cookie).then(res => {
      if (roles.indexOf(res.json.role) === -1) {
        // todo: use 404
        replace('/')
      }
      callback()
    })
  }

  return (
    <Route path="/" component={Master}>
      <Route path="viewer/book/:id" {...require('./Viewer') } />
      <Route path="test" {...require('./TestPlace') } />
      <Route component={App}>
        <IndexRoute {...require('./AppHome') } />
        <Route path="browse" {...require('./Browse') } />
        <Route path="book/:id" {...require('./BookDetail') } />
        <Route path="collections" {...require('./Collections') } />
        <Route path="collections/:id" {...require('./CollectionDetail') } />
        <Route path="signin" {...require('./Signin') } />
        <Route path="signup" {...require('./Signup') } />
        <Route onEnter={authorize(['user', 'admin'])} path="user">
          <IndexRedirect to="/user/profile" />
          <Route path="shelf" {...require('./Shelf') } />
          <Route path="preference" {...require('./Preference') } />
          <Route path="profile" {...require('./Profile') } />
        </Route>
      </Route>
      <Route onEnter={authorize(['admin'])} path="console" component={Console}>
        <IndexRedirect to="/console/books" />
        <Route path="books" {...require('./ManageBooks') } />
        <Route path="users" {...require('./ManageUsers') } />
        <Route path="books/new" {...require('./AddBook') } />
        <Route path="collections/new" {...require('./AddCollection') } />
      </Route>
      <Route path="*" {...require('./NoMatch') } />
    </Route>
  )
}

export default createRoutes
