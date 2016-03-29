import React, { Component } from 'react'
import { Link } from 'react-router'
import 'whatwg-fetch'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { requestBook, receiveBook, fetchBook } from 'actions'

import { formatHTMLStringToArray } from 'utils'

class BookPage extends Component {

  constructor(props) {
    super(props)


  }


  componentDidMount() {
    // this.props.fetchBook(this.props.bookId)
  }



  render() {

    let page = this.props.page
    // console.log(page);
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


// style={(index===0)?pStyle:{}}



    return (
      <li>
        <div className="content">
          {
            page.map((ele, index) => {
              return (
                <p key={index}>{ele}</p>
              )
            })
            // page.content
          }
        </div>
        <div className="pg_num"></div>
      </li>
    )
  }
}

// function mapStateToProps(state) {
//   return {
//     book: state.book
//   }
// }

// export default connect(
//   mapStateToProps,
//   { fetchBook }
// )(BookPage)

export default BookPage


// export default connect(
//   mapStateToProps,
//   { fetchBook }
// )(BookPage)
