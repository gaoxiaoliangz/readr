import React, { Component } from 'react'
import { connect } from 'react-redux'
import Branding from '../components/Branding'
import Colophon from '../components/Colophon'
import { fetchShelf } from '../store/actions'
import _ from 'lodash'
import api from '../services/api'
import * as selectors from '../store/selectors'

interface Props {
  fetchShelf: any
  session: any
  bookShelf: any
}

class App extends Component<Props, {}> {

  constructor(props) {
    super(props)
  }

  handleLogout() {
    api.logout().then(() => {
      location.href = '/'
    })
  }

  componentDidMount() {
    if (this.props.session.user.role !== 'visitor') {
      this.props.fetchShelf()
    }
  }

  componentWillReceiveProps(nextProps) {
    const userLoggedIn = this.props.session.user.role === 'visitor' && nextProps.session.user.role !== 'visitor'
    if (userLoggedIn) {
      this.props.fetchShelf()
    }
  }

  render() {
    let isAdmin = false
    let username = null

    if (this.props.session.user.role !== 'visitor') {
      isAdmin = this.props.session.user.role === 'admin'
      username = this.props.session.user.username
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
    session: state.session,
    bookShelf: selectors.shelfBooks()(state)
  }),
  { fetchShelf }
)(App)
