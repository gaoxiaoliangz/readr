import React from 'react'
import { Route, HashRouter as Router } from 'react-router-dom'
import { asyncComponent } from 'react-async-component'
import PT from 'prop-types'
import { subscriptions } from '../service'
import appModel from './appModel'

const Shelf = asyncComponent({
  resolve: () => import('./Shelf/Shelf')
})

const Welcome = asyncComponent({
  resolve: () => import('./Welcome/Welcome')
})

const Book = asyncComponent({
  resolve: () => import('./Book/Book')
})

class App extends React.Component {
  static propTypes = {
    user: PT.object.isRequired
  }

  componentDidMount() {
    subscriptions.onAuthStateChanged(appModel.handleUserStateChange)
  }

  componentDidCatch(err) {
    console.error(err)
  }

  render() {
    const signedIn = this.props.user.uid
    // todo: not found
    return (
      <Router>
        <div>
          {
            signedIn
              ? (
                <div>
                  <Route exact path="/" component={Shelf} />
                  <Route path="/book/:id" component={Book} />
                </div>
              )
              : (
                <Route path="/" component={Welcome} />
              )
          }
        </div>
      </Router>
    )
  }
}

export default appModel.connect(App)
