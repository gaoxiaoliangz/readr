import React, { Component } from 'react'
// import { Link } from 'react-router'
// import * as styles from '../constants/STYLES'
import BookPage from './BookPage'
import CSSModules from 'react-css-modules'
const styles: any = require('./_book-page-list.scss')

@CSSModules(styles)
class BookPageList extends Component<any, any> {

  render() {
    // let style = styles.BOOK_HD_STYLE
    // if(this.props.view.mode === "MOBILE") {
    //   style = styles.BOOK_MOBILE_STYLE
    // }

    // if(!this.props.isCalculated) {
    //   style.height = "100%"
    // }

    return (
      <ul styleName="pages" style={{ height: this.props.height }}>
        {
          this.props.pages.map((page, index) => {
            if (page.type === 'page') {
              // style = Object.assign({}, style, page.props.style)
              return (
                <BookPage style={page.props.style} bookId={this.props.bookId} key={index} page={page}></BookPage>
              )
            } else {
              console.error('Not type page!')
            }
          })
        }
      </ul>
    )
  }
}

export default BookPageList
