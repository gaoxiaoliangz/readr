var BookBox = React.createClass({
  loadBooksFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
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
        <h1>books</h1>
        <BookList data={this.state.data}/>
      </div>
    );
  }
});

var Book = React.createClass({
  render: function() {
    return (
      <li className="book">
        <h2 className="book-name"><a href={"/books/"+this.props.id} >{this.props.name}</a></h2>
        <span className="book-author">{this.props.author}</span>
        <img src={this.props.cover}/>
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
      <ul className="book-list">
        {bookNodes}
      </ul>
    );
  }
});

ReactDOM.render(
  <BookBox url="/api/v0.1/books" />,
  document.getElementById('book-box')
);
