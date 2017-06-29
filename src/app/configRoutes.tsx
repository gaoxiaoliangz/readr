import React from 'react'
import { Route, IndexRedirect, IndexRoute } from 'react-router'
import RootRoute from './containers/RootRoute'
import UserApp from './containers/UserApp'
import AdminApp from './containers/AdminApp'
import * as restAPI from './restAPI'

const configRoutes = (context = {}) => {
  // server side needs injected cookie
  const { cookie } = context as any

  const authorize = (roles: Roles[]) => (nextState, replace, callback?) => {
    // store may also be the option
    // but may have security issues
    // and will not be changed when session expires
    // so we still need to call to check on every enter
    restAPI.auth(cookie).then(res => {
      if (roles.indexOf(res.json.role) === -1) {
        // todo: use 404
        replace('/')
      }
      callback()
    })
  }

  const handleAppHomeEnter = (nextState, replace, callback?) => {
    restAPI.auth(cookie).then((res: { json: { role: Roles } }) => {
      if (res.json.role !== 'visitor') {
        replace('/browse')
      }
      callback()
    })
  }

  return (
    <Route path="/" component={RootRoute}>
      <Route component={UserApp}>
        <Route path="reader/v1/book/:id" getComponent={() => require.ensure([], require => require('./containers/ReaderL').default)} />
        <Route path="reader/v2/book/:id" getComponent={() => require.ensure([], require => require('./containers/Reader').default)} />
        <Route path="authors" getComponent={() => require.ensure([], require => require('./containers/Authors/Authors').default)} />
        <IndexRoute onEnter={handleAppHomeEnter} getComponent={() => require.ensure([], require => require('./containers/Welcome/Welcome').default)} />
        <Route path="welcome" getComponent={() => require.ensure([], require => require('./containers/Welcome/Welcome').default)} />
        <Route path="browse" getComponent={() => require.ensure([], require => require('./containers/Browse/Browse').default)} />
        <Route path="search" getComponent={() => require.ensure([], require => require('./containers/BookSearch/BookSearch').default)} />
        <Route path="page/:slug" getComponent={() => require.ensure([], require => require('./containers/Post/Post').default)} />
        <Route path="book/:id" getComponent={() => require.ensure([], require => require('./containers/BookDetail').default)} />
        <Route path="collections" getComponent={() => require.ensure([], require => require('./containers/Collections').default)} />
        <Route path="collections/:id" getComponent={() => require.ensure([], require => require('./containers/CollectionDetail').default)} />
        <Route path="signin" getComponent={() => require.ensure([], require => require('./containers/Signin').default)} />
        <Route path="signup" getComponent={() => require.ensure([], require => require('./containers/Signup').default)} />
        <Route onEnter={authorize(['user', 'admin'])} path="user">
          <IndexRedirect to="/user/profile" />
          <Route path="shelf" getComponent={() => require.ensure([], require => require('./containers/Shelf').default)} />
          <Route path="preference" getComponent={() => require.ensure([], require => require('./containers/Preference').default)} />
          <Route path="profile" getComponent={() => require.ensure([], require => require('./containers/Profile').default)} />
        </Route>
      </Route>
      <Route onEnter={authorize(['admin'])} path="console" component={AdminApp}>
        <IndexRedirect to="/console/books" />
        <Route path="books" getComponent={() => require.ensure([], require => require('./containers/ManageBooks').default)} />
        <Route path="users" getComponent={() => require.ensure([], require => require('./containers/ManageUsers').default)} />
        <Route path="posts" getComponent={() => require.ensure([], require => require('./containers/ManagePosts/ManagePosts').default)} />
        <Route path="posts/new" getComponent={() => require.ensure([], require => require('./containers/Post/AddPost').default)} />
        <Route path="posts/:id" getComponent={() => require.ensure([], require => require('./containers/Post/EditPost').default)} />
        <Route path="books/new" getComponent={() => require.ensure([], require => require('./containers/AddBook').default)} />
        <Route path="collections/new" getComponent={() => require.ensure([], require => require('./containers/AddCollection').default)} />
      </Route>
      <Route path="*" getComponent={() => require.ensure([], require => require('./containers/NoMatch').default)} />
    </Route>
  )
}

export default configRoutes
