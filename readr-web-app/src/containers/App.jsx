import React from 'react'
import _ from 'lodash'
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
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

const NotFound = asyncComponent({
  resolve: () => import('./NotFound/NotFound')
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
          <Switch>
            <Route exact path="/" component={Shelf} />
            <Route path="/book/:id" component={Book} />
            <Route component={NotFound} />
          </Switch>
        )
      case 2:
        return (
          <Switch>
            <Loading useNProgress={false} text="Authenticating" />
            <Route component={NotFound} />
          </Switch>
        )
      case 0:
      default:
        return (
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route component={NotFound} />
          </Switch>
        )
    }
  }

  render() {
    const { isLoading } = this.props
    return (
      <Router>
        <React.Fragment>
          {isLoading && <Loading useNProgress />}
          {this.renderRoutes()}
        </React.Fragment>
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
