import React, { Component } from 'react'
import { connect } from 'react-redux'
import Branding from '../components/Branding'
import Colophon from '../components/Colophon'
import { fetchShelf, userLogout } from '../actions'
import _ from 'lodash'
import * as selectors from '../selectors'

interface Props {
  fetchShelf: any
  session: any
  bookShelf: any
  userLogout: typeof userLogout
}

class App extends Component<Props, {}> {

  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    this.props.userLogout()
  }

  componentDidMount() {
    if (this.props.session.role !== 'visitor') {
      this.props.fetchShelf()
    }
  }

  componentWillReceiveProps(nextProps) {
    const userLoggedIn = this.props.session.role === 'visitor'
      && nextProps.session.role !== 'visitor'

    if (userLoggedIn) {
      this.props.fetchShelf()
    }
  }

  render() {
    let isAdmin = false
    let username = null
    const { session } = this.props

    if (session.role !== 'visitor') {
      isAdmin = session.role === 'admin'
      username = session.username
    }

    const {bookShelf} = this.props
    const bookShelfList = bookShelf
      .map(book => ({
        title: book.title,
        id: book.id
      }))

    return (
      <div>
        <Branding
          recentReading={bookShelfList}
          isAdmin={isAdmin}
          username={username}
          onLogout={this.handleLogout}
          />
        {this.props.children}
        <Colophon />
      </div>
    )
  }
}

export default connect<{}, {}, Props>(
  state => ({
    notification: state.components.notification,
    bookShelf: selectors.shelfBooks()(state),
    session: selectors.session(state)
  }),
  { fetchShelf, userLogout }
)(App)
