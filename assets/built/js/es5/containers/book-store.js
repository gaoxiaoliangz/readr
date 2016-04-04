'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('muicss/react');

var _reactRouter = require('react-router');

require('whatwg-fetch');

var _branding = require('components/branding');

var _branding2 = _interopRequireDefault(_branding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = "/api/v0.1/books";

var BookStore = _react2.default.createClass({
  displayName: 'BookStore',
  loadBooksFromServer: function loadBooksFromServer() {
    fetch(url).then(function (res) {
      return res.json();
    }).then(function (json) {
      this.setState({ data: json.data });
    }.bind(this)).catch(function (err) {
      console.error(err);
    });
  },
  getInitialState: function getInitialState() {
    return { data: [] };
  },
  componentDidMount: function componentDidMount() {
    this.loadBooksFromServer();
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'page-book-store' },
      _react2.default.createElement(_branding2.default, null),
      _react2.default.createElement(
        _react3.Container,
        null,
        _react2.default.createElement(
          'div',
          { className: 'book-box' },
          _react2.default.createElement(
            'h1',
            { className: 'page-title' },
            '书籍列表'
          ),
          _react2.default.createElement(BookList, { data: this.state.data })
        )
      )
    );
  }
});

var BookList = _react2.default.createClass({
  displayName: 'BookList',

  render: function render() {
    var bookNodes = this.props.data.map(function (book, index) {
      return _react2.default.createElement(Book, { key: index, book: book });
    });
    return _react2.default.createElement(
      'ul',
      { className: 'book-list clearfix' },
      bookNodes
    );
  }
});

var Book = _react2.default.createClass({
  displayName: 'Book',
  render: function render() {
    var book = this.props.book;
    return _react2.default.createElement(
      'li',
      { className: 'book' },
      _react2.default.createElement(
        _reactRouter.Link,
        { to: "/book/" + book._id },
        _react2.default.createElement(
          'div',
          { className: 'book-cover' },
          _react2.default.createElement('img', { src: '/data/bookcovers/' + book.book_cover })
        ),
        _react2.default.createElement(
          'div',
          { className: 'book-meta' },
          _react2.default.createElement(
            'span',
            { title: this.props.name, className: 'book-name' },
            book.book_name
          ),
          _react2.default.createElement(
            'span',
            { className: 'book-author' },
            book.book_author
          )
        )
      )
    );
  }
});

exports.default = BookStore;
