import React from 'react'
import {
  Route,
  Link,
  HashRouter as Router
} from 'react-router-dom'
import DynamicComponent from './components/DynamicComponent'

const Shelf = () => <DynamicComponent
  loader={() => import('./containers/Shelf/Shelf')}
/>

const Welcome = () => <DynamicComponent
  loader={() => import('./containers/Welcome/Welcome')}
/>

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Welcome} />
      <Route path="/shelf" component={Shelf} />
    </div>
  </Router>
)

export default App
