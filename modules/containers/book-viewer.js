import React, { Component } from 'react'
import { Link } from 'react-router'
import Immutable from 'immutable'
import { connect } from 'react-redux'
import { fetchBookIfNeeded } from 'actions'

import 'whatwg-fetch'
import $ from 'jquery'

import BookPageList from 'components/book-page-list'

import { formatHTMLStringToArray } from 'utils'

class BookViewer extends Component {

  constructor(props) {
    super(props)
    let bookId = props.params.id
    this.bookId = bookId
  }

  getFormatdData() {
    let content = formatHTMLStringToArray(this.props.book.content)
    return content
  }


  componentWillUnmount () {
  }

  componentDidMount() {
    this.props.fetchBookIfNeeded(this.bookId)
  }

  render() {
    let pages
    pages = this.getFormatdData()

    // if(this.props.book.unFormated) {
    //   pages = this.props.book
    // }

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
        <BookPageList pages={pages} />
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
  { fetchBookIfNeeded }
)(BookViewer)
