import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import routes from '../routes'
import { Router } from 'react-router'
import DevTools from 'containers/DevTools'
import { getEnv } from 'utils'


export default class Root extends Component {
  render() {
    const { store, history } = this.props
    let routerAndMore
    let env = getEnv()

    if(env === 'development') {
      routerAndMore = (
        <div>
          <Router history={history} routes={routes} />
          <DevTools />
        </div>
      )
    } else if(env === 'production') {
      routerAndMore = (
        <Router history={history} routes={routes} />
      )
    } else {
      console.error('env is neither development nor production!')
    }

    return (
      <Provider store={store}>
        {routerAndMore}
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
