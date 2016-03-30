import React, { Component } from 'react'
import { Link } from 'react-router'
import Immutable from 'immutable'
import { connect } from 'react-redux'

import 'whatwg-fetch'
import $ from 'jquery'

import BookPageList from 'components/book-page-list'
import { mountBook } from 'actions'


class BookViewer extends Component {

  constructor(props) {
    super(props)
    this.bookId = props.params.id
  }

  componentDidMount() {
    this.props.mountBook(this.bookId, {})
  }

  render() {
    let pages = this.props.book.contentNodes

    return (
      <div className="page-book-viewer">
        <div className="functions" style={{display: "none"}}>
          <div className="container">
            <span className="home">
              <Link to="/bookstore"></Link>
            </span>
            <span className="title"></span>
            <span className="loc"></span>
          </div>
        </div>
        <BookPageList bookId={this.props.book.id} pages={pages} />
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
  { mountBook }
)(BookViewer)
