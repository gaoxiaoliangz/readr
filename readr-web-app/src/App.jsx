import React from 'react'
import { Route, HashRouter as Router } from 'react-router-dom'
import { asyncComponent } from 'react-async-component'

const Welcome = asyncComponent({
  resolve: () => import('./containers/Shelf/Shelf')
})

const Shelf = asyncComponent({
  resolve: () => import('./containers/Welcome/Welcome')
})

const Book = asyncComponent({
  resolve: () => import('./containers/Book/Book')
})

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Shelf} />
      <Route path="/book/:id" component={Book} />
      <Route path="/shelf" component={Welcome} />
    </div>
  </Router>
)

export default App
