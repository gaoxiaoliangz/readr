import React, { Component } from 'react'
import { connect } from 'react-redux'
import Branding from '../components/Branding'
import Colophon from '../components/Colophon'
import { loadShelf } from '../actions/api'
import _ from 'lodash'
import * as selectors from '../selectors'
import DocContainer from './DocContainer'

interface Props {
  loadShelf: typeof loadShelf
  session: Session
  bookShelf: SelectedPagination
}

class App extends Component<Props, {}> {

  componentWillMount() {
    if (this.props.session.role !== 'visitor') {
      this.props.loadShelf()
    }
  }

  componentWillReceiveProps(nextProps) {
    const userLoggedIn = this.props.session.role === 'visitor'
      && nextProps.session.role !== 'visitor'

    if (userLoggedIn) {
      this.props.loadShelf()
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
    const bookShelfList = _.get(bookShelf, ['pages', '1'], [])
      .map(book => ({
        title: book.title,
        id: book.id
      }))

    return (
      <DocContainer titleTemplate="%s - Readr">
        <Branding
          recentReading={bookShelfList}
          isAdmin={isAdmin}
          username={username}
          />
        {this.props.children}
        <Colophon />
      </DocContainer>
    )
  }
}

export default connect<{}, {}, Props>(
  state => ({
    notification: state.components.notification,
    bookShelf: selectors.pagination.shelf(state),
    session: selectors.session(state)
  }),
  { loadShelf }
)(App)
