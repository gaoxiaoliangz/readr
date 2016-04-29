import React, { Component } from 'react'
import { Link } from 'react-router'
import BookList from 'components/BookList'

class BookListSection extends Component {
  render() {
    let bookList = this.props.bookList
    let title = this.props.title
    let moreLink = this.props.moreLink?this.props.moreLink:null

    return (
      <div className="book-list-section">
        <h1 className="page-title">{title}</h1>
        {
          moreLink?(
            <Link to={moreLink}>查看更多</Link>
          ):null
        }
        <BookList bookList={bookList} />
      </div>
    )
  }
}

export default BookListSection
