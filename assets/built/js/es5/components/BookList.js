'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('muicss/react');

var _reactRouter = require('react-router');

var _Book = require('components/Book');

var _Book2 = _interopRequireDefault(_Book);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookList = function (_Component) {
  _inherits(BookList, _Component);

  function BookList() {
    _classCallCheck(this, BookList);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BookList).apply(this, arguments));
  }

  _createClass(BookList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
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
          _react2.default.createElement(
            'ul',
            { className: 'book-list clearfix' },
            this.props.bookList ? this.props.bookList.map(function (book, index) {
              return _react2.default.createElement(_Book2.default, { id: book.id, key: index, book: book });
            }) : null
          )
        )
      );
    }
  }]);

  return BookList;
}(_react.Component);

exports.default = BookList;
