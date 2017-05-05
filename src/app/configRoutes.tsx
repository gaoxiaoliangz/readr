import React from 'react'
import { Route, IndexRedirect, IndexRoute } from 'react-router'
import Master from './components/Master'
import App from './components/App'
import Console from './components/Console'
import webAPI from './webAPI'

const Home = (nextState, fn) => {
  require.ensure([], function (require) {
    fn(null, (require('./containers/AppHome')).default)
  })
}
const Browse = (nextState, fn) => {
  require.ensure([], function (require) {
    fn(null, (require('./containers/Browse')).default)
  })
}
const Viewer = (nextState, fn) => {
  require.ensure([], function (require) {
    fn(null, (require('./containers/Viewer')).default)
  })
}
const Next = (nextState, fn) => {
  require.ensure([], function (require) {
    fn(null, (require('./containers/Next')).default)
  })
}
const Authors = (nextState, fn) => {
  require.ensure([], function (require) {
    fn(null, (require('./containers/Authors/Authors')).default)
  })
}
const BookDetail = (nextState, fn) => {
  require.ensure([], function (require) {
    fn(null, (require('./containers/BookDetail')).default)
  })
}
const Collections = (nextState, fn) => {
  require.ensure([], function (require) {
    fn(null, (require('./containers/Collections')).default)
  })
}
const CollectionDetail = (nextState, fn) => {
  require.ensure([], function (require) {
    fn(null, (require('./containers/CollectionDetail')).default)
  })
}
const Signin = (nextState, fn) => {
  require.ensure([], function (require) {
    fn(null, (require('./containers/Signin')).default)
  })
}
const Signup = (nextState, fn) => {
  require.ensure([], function (require) {
    fn(null, (require('./containers/Signup')).default)
  })
}
const Shelf = (nextState, fn) => {
  require.ensure([], function (require) {
    fn(null, (require('./containers/Shelf')).default)
  })
}
const Preference = (nextState, fn) => {
  require.ensure([], function (require) {
    fn(null, (require('./containers/Preference')).default)
  })
}
const Profile = (nextState, fn) => {
  require.ensure([], function (require) {
    fn(null, (require('./containers/Profile')).default)
  })
}
const ManageBooks = (nextState, fn) => {
  require.ensure([], function (require) {
    fn(null, (require('./containers/ManageBooks')).default)
  })
}
const ManageUsers = (nextState, fn) => {
  require.ensure([], function (require) {
    fn(null, (require('./containers/ManageUsers')).default)
  })
}
const AddBook = (nextState, fn) => {
  require.ensure([], function (require) {
    fn(null, (require('./containers/AddBook')).default)
  })
}
const AddCollection = (nextState, fn) => {
  require.ensure([], function (require) {
    fn(null, (require('./containers/AddCollection')).default)
  })
}
const NoMatch = (nextState, fn) => {
  require.ensure([], function (require) {
    fn(null, (require('./containers/NoMatch')).default)
  })
}

const configRoutes = (context = {}) => {
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
      <Route path="viewer/book/:id" getComponent={Viewer} />
      <Route path="next" getComponent={Next} />
      <Route path="authors" getComponent={Authors} />
      <Route component={App}>
        <IndexRoute getComponent={Home} />
        <Route path="browse" getComponent={Browse} />
        <Route path="book/:id" getComponent={BookDetail} />
        <Route path="collections" getComponent={Collections} />
        <Route path="collections/:id" getComponent={CollectionDetail} />
        <Route path="signin" getComponent={Signin} />
        <Route path="signup" getComponent={Signup} />
        <Route onEnter={authorize(['user', 'admin'])} path="user">
          <IndexRedirect to="/user/profile" />
          <Route path="shelf" getComponent={Shelf} />
          <Route path="preference" getComponent={Preference} />
          <Route path="profile" getComponent={Profile} />
        </Route>
      </Route>
      <Route onEnter={authorize(['admin'])} path="console" component={Console}>
        <IndexRedirect to="/console/books" />
        <Route path="books" getComponent={ManageBooks} />
        <Route path="users" getComponent={ManageUsers} />
        <Route path="books/new" getComponent={AddBook} />
        <Route path="collections/new" getComponent={AddCollection} />
      </Route>
      <Route path="*" getComponent={NoMatch} />
    </Route>
  )
}

export default configRoutes
