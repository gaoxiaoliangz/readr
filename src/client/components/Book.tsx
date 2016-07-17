import React, { Component } from 'react'
import { Link } from 'react-router'
import BookInfoPopup from 'components/BookInfoPopup'
import _ from 'lodash'


interface Props {
  title: string
  author: string
  description: string
  id: string
  cover: string
}

export default class Book extends Component<Props, {}> {
  render() {
    return (
      <li className="book">
        <Link to={'/book/' + this.props.id} >
          <div className="book-cover"><img src={this.props.cover}/></div>
          <div className="book-meta">
            <span title={this.props.title} className="book-name">{this.props.title}</span>
            <span className="book-author">{this.props.author}</span>
          </div>
        </Link>
        <BookInfoPopup bookId={this.props.id} title={this.props.title} author={this.props.author} description={this.props.description} />
      </li>
    )
  }
}