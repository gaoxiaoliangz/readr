import React, { Component } from 'react'
import { Link } from 'react-router'
import BookPage from 'components/book-page'

class BookPageList extends Component {

  render() {

    // let style = {}
    //
    // if(this.props.view) {
    //   if(this.props.config.mode === "VERTICAL") {
    //     style = {
    //       height: this.props.view.bookHeight
    //     }
    //   }
    // }
    //
    // let pageNode =             {
    //               this.props.pages.map((page, index) => {
    //                 return (
    //                   <Page key={index} page={page} config={this.props.config} />
    //                 )
    //               })
    //             }

    return (
      <div className="pages">
        <div className="container">
          <ul>
            <BookPage page={this.props.pages}></BookPage>
            {/*{
              if(this.props.pages.unFormated) {
                return (
                  <BookPage page={this.props.pages}></BookPage>
                )
              }
            }*/}
          </ul>
        </div>
      </div>
    )
  }
}

export default BookPageList
