import React, { Component } from 'react'
import { Appbar, Button, Container } from 'muicss/react'
import { Link } from 'react-router'
import 'whatwg-fetch'
import { URL_BOOKS } from 'constants/api-urls'
import { URL_DOUBAN_BOOKS } from 'constants/api-urls'
import $ from 'jquery'
import Branding from 'components/branding'

var BookStore = React.createClass({
  loadBooksFromServer() {
    fetch(URL_BOOKS).then(function(res){
      return res.json()
    }).then(function(json){
      console.log(json.data);
      this.setState({data: json.data});

      json.data.map(function(item, index){
        let url = URL_DOUBAN_BOOKS+item.douban_item_id
        console.log(item)

        $.ajax({
          url: url,
          dataType: "jsonp"
        }).done(function(data){
          console.log(data)
          var dataFromDouban = this.state.dataFromDouban
          dataFromDouban[index] = data
          this.setState({
            dataFromDouban: dataFromDouban
          })
        }.bind(this))
      }.bind(this))

    }.bind(this)).catch(err => {
      console.error(err)
    })
  },
  getInitialState() {
    return {
      data: [],
      dataFromDouban: []
    }
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
            <h1 className="page-title">新书速递</h1>
            <BookList data={this.state.data} dataFromDouban={this.state.dataFromDouban}/>
          </div>
        </Container>
      </div>
    )
  }
})

var BookList = React.createClass({
  render: function() {
    var bookNodes = this.props.dataFromDouban.map(function(book, index) {
      return (
        <Book id={this.props.data[index].id} key={index} book={book} />
      );
    }.bind(this));
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
        <Link to={"/bookstore/book/"+this.props.id} >
          <div className="book-cover"><img src={book.image}/></div>
          <div className="book-meta">
            <span title={book.title} className="book-name">{book.title}</span>
            <span className="book-author">{Array.isArray(book.author)?book.author.join(' '):book.author}</span>
          </div>
        </Link>
      </li>
    )
  }
})

export default BookStore
