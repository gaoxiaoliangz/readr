import React, { Component } from 'react'
import { Link } from 'react-router'
import Immutable from 'immutable'
import { connect } from 'react-redux'

import BookPageList from 'components/book-page-list'
import { mountBook, loadPages } from 'actions'
import { genPageList } from 'utils/filters'


class BookViewer extends Component {

  constructor(props) {
    super(props)
    this.bookId = props.params.id
  }

  componentDidMount() {
    this.props.mountBook(this.bookId, {}, function(){
      this.props.loadPages(this.bookId, 1)
    }.bind(this))
  }

  render() {
    let book = this.props.book
    let pages = []
    let quantity = 5
    let startPage = 10
    let offset = 2

    if(book.pagesLoaded) {
      pages = genPageList(startPage, quantity, offset, book.content.nodes, book.config)
    }else{
      pages = [
        {
          props: {
            children: book.content.nodes
          },
          type: "page",
        }
      ]
    }

    return (
      <div className="page-book-viewer">
        <div className="functions" style={{display: "none"}}>
          <div className="container">
            <span className="home">
              <Link to="/bookstore"></Link>
            </span>
            <span className="title"></span>
            <span className="loc">{book.currentPage}</span>
          </div>
        </div>
        <BookPageList status={book.status} bookId={this.bookId} pages={pages} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.book
  }
}

export default connect(
  mapStateToProps,
  { mountBook, loadPages }
)(BookViewer)
