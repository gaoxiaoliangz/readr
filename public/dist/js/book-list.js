var BookBox = React.createClass({
  displayName: "BookBox",

  loadBooksFromServer: function () {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (function (data) {
        this.setState({ data: data.data });
      }).bind(this),
      error: (function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }).bind(this)
    });
  },
  getInitialState: function () {
    return { data: [] };
  },
  componentDidMount: function () {
    this.loadBooksFromServer();
  },
  render: function () {
    return React.createElement(
      "div",
      { className: "book-box" },
      React.createElement(
        "h1",
        null,
        "books"
      ),
      React.createElement(BookList, { data: this.state.data })
    );
  }
});

var Book = React.createClass({
  displayName: "Book",

  render: function () {
    return React.createElement(
      "li",
      { className: "book" },
      React.createElement(
        "h2",
        { className: "book-name" },
        this.props.name
      ),
      React.createElement(
        "span",
        { className: "book-author" },
        this.props.author
      ),
      React.createElement("img", { src: this.props.cover })
    );
  }
});

var BookList = React.createClass({
  displayName: "BookList",

  render: function () {
    var bookNodes = this.props.data.map(function (book) {
      return React.createElement(Book, { author: book.book_author, name: book.book_name, key: book._id, cover: book.book_cover });
    });
    return React.createElement(
      "ul",
      { className: "book-list" },
      bookNodes
    );
  }
});

ReactDOM.render(React.createElement(BookBox, { url: "/api/books" }), document.getElementById('book-box'));
//# sourceMappingURL=book-list.js.map
