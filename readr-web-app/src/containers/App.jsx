import React from 'react'
import _ from 'lodash'
import { Route, HashRouter as Router } from 'react-router-dom'
import { asyncComponent } from 'react-async-component'
import PT from 'prop-types'
import { subscriptions } from '../service'
import appModel from './appModel'
import Loading from '../components/Loading/Loading'

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
    authStatus: PT.number.isRequired,
    isLoading: PT.bool.isRequired
  }

  componentDidMount() {
    appModel.$set('authStatus', 2)
    subscriptions.onAuthStateChanged(appModel.handleUserStateChange)
  }

  componentDidCatch(err) {
    console.error(err)
  }

  renderRoutes() {
    switch (this.props.authStatus) {
      case 1:
        return (
          <div>
            <Route exact path="/" component={Shelf} />
            <Route path="/book/:id" component={Book} />
          </div>
        )
      case 2:
        return <Loading useNProgress={false} text="Authenticating" />
      case 0:
      default:
        return <Route path="/" component={Welcome} />
    }
  }

  render() {
    // todo: not found
    const { isLoading } = this.props
    return (
      <Router>
        <div>
          {isLoading && <Loading useNProgress />}
          {this.renderRoutes()}
        </div>
      </Router>
    )
  }
}

export default appModel.connect(App, state => {
  const isLoading = _.some(state.app.loading, value => {
    return value.isLoading
  })
  
  return {
    ...state.app,
    isLoading
  }
})
