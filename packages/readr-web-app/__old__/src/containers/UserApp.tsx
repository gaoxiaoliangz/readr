import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import * as selectors from '../selectors'
import DocContainer from '../components/DocContainer'

interface Props {
  session: State.Session
}

class App extends Component<Props, {}> {

  render() {
    let isAdmin = false
    let username = null
    const { session } = this.props

    if (session.role !== 'visitor') {
      isAdmin = session.role === 'admin'
      username = session.username
    }

    return (
      <DocContainer titleTemplate="%s - Readr">
        {this.props.children}
      </DocContainer>
    )
  }
}

export default connect<{}, {}, Props>(
  state => ({
    notification: state.components.notification,
    session: selectors.session(state)
  })
)(App)
