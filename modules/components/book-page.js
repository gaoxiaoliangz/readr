import React, { Component } from 'react'
import { Link } from 'react-router'
import 'whatwg-fetch'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { requestBook, receiveBook, fetchBook } from 'actions'

class BookPage extends Component {

  componentDidMount() {
    this.props.fetchBook(this.props.bookId)
  }

  render() {

    // let page = this.props.page,
    //     liStyle,
    //     pStyle,
    //     currentPage
    //
    // if(page.style){
    //   if(this.props.config.mode === "VERTICAL") {
    //     liStyle = {
    //       top: page.style.top,
    //       position: page.style.position,
    //       height: page.style.height
    //     }
    //     pStyle = {
    //       marginTop: page.style.marginTop
    //     }
    //   }
    //   currentPage = page.index + 1
    // }

    return (
      <div>bookpage</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.book
  }
}

// export default connect(
//   mapStateToProps,
//   { fetchBook }
// )(BookPage)

// export default BookPage


export default connect(
  mapStateToProps,
  { fetchBook }
)(BookPage)
