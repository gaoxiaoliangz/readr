import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import Root from '../containers/Root'
import AppMaster from '../containers/AppMaster'
import AppCommon from '../containers/AppCommon'
import ConsoleMaster from '../containers/ConsoleMaster'

export default (
  <Router>
    <Route path="/" component={Root}>
      <Route component={AppMaster}>
        <Route component={AppCommon}>
          <IndexRoute
            getComponents={
              (nextState, callback) => {
                require.ensure([], function (require) {
                  callback(null, (require('./containers/app-home') as any).default)
                })
              } }
            />
          <Route
            path="book/:id"
            getComponents={
              (nextState, callback) => {
                require.ensure([], function (require) {
                  callback(null, (require('./containers/book-detail') as any).default)
                })
              } }
            />
          <Route
            path="browse"
            getComponents={
              (nextState, callback) => {
                require.ensure([], function (require) {
                  callback(null, (require('./containers/book-archive') as any).default)
                })
              } }
            />
          <Route
            path="collectiions"
            getComponents={
              (nextState, callback) => {
                require.ensure([], function (require) {
                  callback(null, (require('./containers/archived-collection') as any).default)
                })
              } }
            />

          <Route path="user" component={ConsoleMaster}>
            <Route
              path="shelf"
              getComponents={
                (nextState, callback) => {
                  require.ensure([], function (require) {
                    callback(null, (require('./containers/book-shelf') as any).default)
                  })
                } }
              />
            <Route
              path="profile"
              getComponents={
                (nextState, callback) => {
                  require.ensure([], function (require) {
                    callback(null, (require('./containers/user-profile') as any).default)
                  })
                } }
              />
            <Route
              path="preference"
              getComponents={
                (nextState, callback) => {
                  require.ensure([], function (require) {
                    callback(null, (require('./containers/user-preference') as any).default)
                  })
                } }
              />
          </Route>
        </Route>
      </Route>

      <Route path="console" component={ConsoleMaster}>
        <IndexRoute
          getComponents={
            (nextState, callback) => {
              require.ensure([], function (require) {
                callback(null, (require('./containers/manage-books') as any).default)
              })
            } }
          />
        <Route
          path="books"
          getComponents={
            (nextState, callback) => {
              require.ensure([], function (require) {
                callback(null, (require('./containers/manage-books') as any).default)
              })
            } }
          />
        <Route
          path="users"
          getComponents={
            (nextState, callback) => {
              require.ensure([], function (require) {
                callback(null, (require('./containers/manage-users') as any).default)
              })
            } }
          />
      </Route>
    </Route>
  </Router>
)
