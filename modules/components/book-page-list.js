import React, { Component } from 'react'
import { Link } from 'react-router'

import BookPage from 'components/book-page'

class BookPageList extends Component {
  render() {
    return (
      <div className="pages">
        <div className="container">
          <ul>
            {
              this.props.pages.map((page, index)=>{
                if(page.type === "page") {
                  return (
                    <BookPage bookId={this.props.bookId} key={index} page={page.props.children}></BookPage>
                  )
                }else{
                  console.error("Not type page!");
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
