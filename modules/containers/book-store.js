import React, { Component } from 'react'
import { Appbar, Button, Container } from 'muicss/react'
import 'whatwg-fetch'

import { Branding } from 'components/page-parts'

var url = "/api/v0.1/books"

var BookStore = React.createClass({
  loadBooksFromServer() {
    fetch(url).then(function(res){
      return res.json()
    }).then(function(json){
      this.setState({data: json.data});
    }.bind(this)).catch(err => {
      console.error(err)
    })
  },
  getInitialState() {
    return {data: []}
  },
  componentDidMount() {
    this.loadBooksFromServer()
  },
  render() {
    return (
      <div className="page-book-store">
        <Branding />
        <Container>
          <div className="book-box">
            <h1 className="page-title">书籍列表</h1>
            <BookList data={this.state.data}/>
          </div>
        </Container>
      </div>
    )
  }
})

var BookList = React.createClass({
  render: function() {
    var bookNodes = this.props.data.map(function(book) {
      return (
        <Book book={book} />
      );
    });
    return (
      <ul className="book-list clearfix">
        {bookNodes}
      </ul>
    );
  }
})

var Book = React.createClass({
  render() {
    var book = this.props.book
    return (
      <li className="book">
        <a href={"/book/"+book._id} >
          <div className="book-cover"><img src={`/data/bookcovers/${book.book_cover}`}/></div>
          <div className="book-meta">
            <span title={this.props.name} className="book-name">{book.book_name}</span>
            <span className="book-author">{book.book_author}</span>
          </div>
        </a>
      </li>
    )
  }
})

export default BookStore
