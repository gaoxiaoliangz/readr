import React, { Component } from 'react'
import { Appbar, Button, Container } from 'muicss/react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchUserAuthInfo, fetchBookList } from 'actions'
import Branding from 'components/Branding'
import Colophon from 'components/Colophon'
import BookList from 'components/BookList'
import Loading from 'components/Loading'

class BookStore extends Component {

  static fetchData({store}) {
    return [store.dispatch(fetchBookList()), store.dispatch(fetchUserAuthInfo())]
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUserAuthInfo()
    this.props.fetchBookList()
  }

  render() {
    let isAdmin = this.props.user.role?(this.props.user.role === 'admin'?true:false):false
    
    return (
      <div className="page-book-store">
        {
          this.props.book.isFetchingList?(
            <Loading />
          ):null
        }
        <Branding isAdmin={isAdmin} user={this.props.user} />
        <BookList bookList={this.props.book.bookList} />
        <Colophon />
      </div>
    )
  }
}


export default connect(
  state => ({
    book: state.book,
    user: state.user
  }),
  { fetchBookList, fetchUserAuthInfo }
)(BookStore)
