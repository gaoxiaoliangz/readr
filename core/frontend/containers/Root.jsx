import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import routes from '../routes'
import { Router } from 'react-router'
import DevTools from 'containers/DevTools'



export default class Root extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
      {
        (() => {
          if(process.env.NODE_ENV === 'development') {
            return (
              <div>
                <Router history={history} routes={routes} />
                <DevTools />
              </div>
            )
          } else if(process.env.NODE_ENV === 'production') {
            return (
              <Router history={history} routes={routes} />
            )
          }
        })()
      }
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
