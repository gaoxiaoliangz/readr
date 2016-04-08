import React, { Component } from 'react'
import { Appbar, Button, Container } from 'muicss/react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Branding from 'components/branding'
import BookList from 'components/BookList'
import { fetchBookList } from 'actions/book'


class BookStore extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBookList('books')
  }

  render() {
    return (
      <div className="page-book-store">
        <Branding />
        <BookList bookList={this.props.bookList} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    bookList: state.book.bookList
  }
}

export default connect(
  mapStateToProps,
  { fetchBookList }
)(BookStore)
