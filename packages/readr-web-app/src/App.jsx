import React from 'react'
import {
  Route,
  Link,
  HashRouter as Router
} from 'react-router-dom'
import DynamicComponent from './DynamicComponent'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    <DynamicComponent
      loader={() => import('./Comp1')}
    />
  </div>
)

const Topic = ({ match, label }) => {
  import('./Comp1').then(module => {
    console.log(module)
  })
  return (
    <div>
      <h3>{label}{match.params.topicId}</h3>
    </div>
  )
}

const Topics = ({ match }) => {
  console.log(match)
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>
            Rendering with React
        </Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>
            Components
        </Link>
        </li>
        <li>
          <Link to={`/props-v-state`}>
            Props v. State
        </Link>
        </li>
      </ul>

      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route label="pvs" path={`/props-v-state`} component={Topic} />
      <Route
        exact
        path={match.url} render={() => (
          <h3>Please select a topic.</h3>
        )}
      />
    </div>
  )
}

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
)

export default BasicExample
