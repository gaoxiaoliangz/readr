import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import Root from '../containers/Root'
import AppMaster from '../containers/AppMaster'
import AppCommon from '../containers/AppCommon'

export default (
  <Router>
    <Route path="/" component={Root}>
      <Route component={AppMaster}>
        <Route component={AppCommon}>
          <IndexRoute
            getComponents={
              (nextState, callback) => {
                require.ensure([], function (require) {
                  callback(null, (require('./AppHome') as any).default)
                })
              } }
            />
        </Route>
      </Route>
    </Route>
  </Router>
)
