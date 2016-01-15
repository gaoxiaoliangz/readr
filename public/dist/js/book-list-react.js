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
        { className: "page-title" },
        "书籍列表"
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
        "a",
        { href: "/books/" + this.props.id },
        React.createElement(
          "div",
          { className: "book-cover" },
          React.createElement("img", { src: this.props.cover })
        ),
        React.createElement(
          "div",
          { className: "book-meta" },
          React.createElement(
            "span",
            { title: this.props.name, className: "book-name" },
            this.props.name
          ),
          React.createElement(
            "span",
            { className: "book-author" },
            this.props.author
          )
        )
      )
    );
  }
});

var BookList = React.createClass({
  displayName: "BookList",

  render: function () {
    var bookNodes = this.props.data.map(function (book) {
      return React.createElement(Book, { author: book.book_author, name: book.book_name, key: book._id, id: book._id, cover: book.book_cover });
    });
    return React.createElement(
      "ul",
      { className: "book-list clearfix" },
      bookNodes
    );
  }
});

ReactDOM.render(React.createElement(BookBox, { url: "/api/v0.1/books" }), document.getElementById('book-box'));
//# sourceMappingURL=book-list-react.js.map
