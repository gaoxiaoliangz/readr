import React, { Component } from 'react'
import { Appbar, Button, Container } from 'muicss/react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Branding from 'components/Branding'
import BookList from 'components/BookList'
import { fetchBookList } from 'actions/book'
import { fetchUserAuthInfo } from 'actions/user'


class BookStore extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBookList('books')
    this.props.fetchUserAuthInfo()
  }

  render() {
    return (
      <div className="page-book-store">
        <Branding user={this.props.user} />
        <BookList bookList={this.props.bookList} />
      </div>
    )
  }
}


export default connect(
  state => ({
    bookList: state.book.bookList,
    user: state.user
  }),
  { fetchBookList, fetchUserAuthInfo }
)(BookStore)
