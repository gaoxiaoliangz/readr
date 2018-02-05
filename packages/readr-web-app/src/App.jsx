import React from 'react'
import { Route, HashRouter as Router } from 'react-router-dom'
import { asyncComponent } from 'react-async-component'

const App = () => (
  <Router>
    <div>
      <Route
        exact
        path="/"
        component={asyncComponent({
          resolve: () => import('./containers/Welcome/Welcome')
        })} />
      <Route
        path="/shelf"
        component={asyncComponent({
          resolve: () => import('./containers/Shelf/Shelf')
        })} />
    </div>
  </Router>
)

export default App
