'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('muicss/react');

var _reactRouter = require('react-router');

require('whatwg-fetch');

var _apiUrls = require('constants/api-urls');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _branding = require('components/branding');

var _branding2 = _interopRequireDefault(_branding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BookStore = _react2.default.createClass({
  displayName: 'BookStore',
  loadBooksFromServer: function loadBooksFromServer() {
    fetch(_apiUrls.URL_BOOKS).then(function (res) {
      return res.json();
    }).then(function (json) {
      console.log(json.data);
      this.setState({ data: json.data });

      json.data.map(function (item, index) {
        var url = _apiUrls.URL_DOUBAN_BOOKS + item.douban_item_id;
        console.log(item);

        _jquery2.default.ajax({
          url: url,
          dataType: "jsonp"
        }).done(function (data) {
          console.log(data);
          var dataFromDouban = this.state.dataFromDouban;
          dataFromDouban[index] = data;
          this.setState({
            dataFromDouban: dataFromDouban
          });
        }.bind(this));
      }.bind(this));
    }.bind(this)).catch(function (err) {
      console.error(err);
    });
  },
  getInitialState: function getInitialState() {
    return {
      data: [],
      dataFromDouban: []
    };
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
            '新书速递'
          ),
          _react2.default.createElement(BookList, { data: this.state.data, dataFromDouban: this.state.dataFromDouban })
        )
      )
    );
  }
});

var BookList = _react2.default.createClass({
  displayName: 'BookList',

  render: function render() {
    var bookNodes = this.props.dataFromDouban.map(function (book, index) {
      return _react2.default.createElement(Book, { id: this.props.data[index].id, key: index, book: book });
    }.bind(this));
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
        { to: "/bookstore/book/" + this.props.id },
        _react2.default.createElement(
          'div',
          { className: 'book-cover' },
          _react2.default.createElement('img', { src: book.image })
        ),
        _react2.default.createElement(
          'div',
          { className: 'book-meta' },
          _react2.default.createElement(
            'span',
            { title: book.title, className: 'book-name' },
            book.title
          ),
          _react2.default.createElement(
            'span',
            { className: 'book-author' },
            Array.isArray(book.author) ? book.author.join(' ') : book.author
          )
        )
      )
    );
  }
});

exports.default = BookStore;
