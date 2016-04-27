import React, { Component } from 'react'
import { Appbar, Button, Container } from 'muicss/react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchUserAuthInfo, fetchBookList } from 'actions'
import BookList from 'components/BookList'
import Loading from 'components/Loading'

class BookStore extends Component {

  static fetchData({store}) {
    return store.dispatch(fetchBookList())
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBookList()
  }

  render() {
    return (
      <div className="page-book-store">
        {
          this.props.book.isFetchingList?(
            <Loading />
          ):null
        }
        <BookList bookList={this.props.book.bookList} />
      </div>
    )
  }
}

export default connect(
  state => ({
    book: state.book
  }),
  { fetchBookList }
)(BookStore)
