import React from 'react'
import 'whatwg-fetch'

var url = "/api/v0.1/books"

var BookStore = React.createClass({
  loadBooksFromServer: function() {
    fetch(url).then(function(res){
      return res.json()
    }).then(function(json){
      this.setState({data: json.data});
    }.bind(this)).catch(err => {
      console.error(err);
    })
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadBooksFromServer();
  },
  render: function() {
    return (
      <div className="book-box">
        <h1 className="page-title">书籍列表</h1>
        <BookList data={this.state.data}/>
      </div>
    );
  }
});

var Book = React.createClass({
  render: function() {
    return (
      <li className="book">
        <a href={"/books/"+this.props.id} >
          <div className="book-cover"><img src={`/data/bookcovers/${this.props.cover}`}/></div>
          <div className="book-meta">
            <span title={this.props.name} className="book-name">{this.props.name}</span>
            <span className="book-author">{this.props.author}</span>
          </div>
        </a>
      </li>
    );
  }
});

var BookList = React.createClass({
  render: function() {
    var bookNodes = this.props.data.map(function(book) {
      return (
        <Book author={book.book_author} name={book.book_name} key={book._id} id={book._id} cover={book.book_cover} />
      );
    });
    return (
      <ul className="book-list clearfix">
        {bookNodes}
      </ul>
    );
  }
});

export default BookStore
