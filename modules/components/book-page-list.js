import React, { Component } from 'react'
import { Link } from 'react-router'
import * as styles from 'constants/styles'

import BookPage from 'components/book-page'

class BookPageList extends Component {

  render() {
    let style = styles.BOOK_HD_STYLE
    if(this.props.view.mode === "MOBILE") {
      style = styles.BOOK_MOBILE_STYLE
    }

    if(!this.props.isCalculated) {
      style.height = "100%"
    }

    return (
      <div className="pages">
        <div className="container">
          <ul style={{height: this.props.height}}>
            {
              this.props.pages.map((page, index)=>{
                if(page.type === "page") {
                  style = Object.assign({}, style, page.props.style)
                  return (
                    <BookPage style={style} bookId={this.props.bookId} key={index} page={page}></BookPage>
                  )
                }else{
                  console.error("Not type page!")
                }
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default BookPageList
