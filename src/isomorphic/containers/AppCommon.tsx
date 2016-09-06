import React, { Component } from 'react'
import { connect } from 'react-redux'
import Branding from '../components/Branding'
import Colophon from '../components/Colophon'
import { userAuth, fetchShelf } from '../store/actions'
import _ from 'lodash'
import apis from '../apis'

class AppCommon extends Component<any, any> {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.userAuth()
    this.props.fetchShelf()
  }

  handleLogout() {
    apis.logout()
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

export default connect(
  state => ({
    notification: state.components.notification,
    session: state.session,
    bookShelf: state.payloads.bookShelf || []
  }),
  { userAuth, fetchShelf } as any
)(AppCommon)
