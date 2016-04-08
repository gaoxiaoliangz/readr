'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('muicss/react');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Book = function (_Component) {
  _inherits(Book, _Component);

  function Book() {
    _classCallCheck(this, Book);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Book).apply(this, arguments));
  }

  _createClass(Book, [{
    key: 'render',
    value: function render() {
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
  }]);

  return Book;
}(_react.Component);

exports.default = Book;
