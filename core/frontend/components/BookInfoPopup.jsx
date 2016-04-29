import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class BookInfoPopup extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    let author = this.props.author
    let title = this.props.title
    let description = this.props.description
    let bookId = this.props.bookId

    return (
      <div className="book-info-popup popup">
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <Link to={"/viewer/book/"+bookId}>阅读</Link>
        <h3>内容简介</h3>
        <p>{description}</p>
      </div>
    )
  }
}

export default BookInfoPopup
