import React from 'react'
import { Route, IndexRedirect, IndexRoute } from 'react-router'
import RootRoute from './containers/RootRoute'
import UserApp from './containers/UserApp'
import AdminApp from './containers/AdminApp'
import restAPI from './webAPI'
import { ROLES } from '../constants'

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
    restAPI.auth(cookie).then(res => {
      if (res.json.role !== ROLES.VISITOR) {
        replace('/browse')
      }
      callback()
    })
  }

  // const getHomeComponent = () => {
  //   return restAPI.auth(cookie).then(res => {
  //     if (res.json.role === ROLES.VISITOR) {
  //       return require.ensure([], require => require('./containers/Welcome/Welcome').default)
  //     }
  //     return require.ensure([], require => require('./containers/AppHome').default)
  //   })
  // }

  return (
    <Route path="/" component={RootRoute}>
      <Route path="viewer/book/:id" getComponent={() => require.ensure([], require => require('./containers/Viewer').default)} />
      <Route path="viewer/v2/book/:id" getComponent={() => require.ensure([], require => require('./containers/Viewer2').default)} />
      <Route path="authors" getComponent={() => require.ensure([], require => require('./containers/Authors/Authors').default)} />
      <Route component={UserApp}>
        <IndexRoute onEnter={handleAppHomeEnter} getComponent={() => require.ensure([], require => require('./containers/Welcome/Welcome').default)} />
        <Route path="welcome" getComponent={() => require.ensure([], require => require('./containers/Welcome/Welcome').default)} />
        <Route path="browse" getComponent={() => require.ensure([], require => require('./containers/Browse/Browse').default)} />
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
        <Route path="books/new" getComponent={() => require.ensure([], require => require('./containers/AddBook').default)} />
        <Route path="collections/new" getComponent={() => require.ensure([], require => require('./containers/AddCollection').default)} />
      </Route>
      <Route path="*" getComponent={() => require.ensure([], require => require('./containers/NoMatch').default)} />
    </Route>
  )
}

export default configRoutes
