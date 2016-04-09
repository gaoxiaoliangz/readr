'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('muicss/react');

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _Branding = require('components/Branding');

var _Branding2 = _interopRequireDefault(_Branding);

var _BookList = require('components/BookList');

var _BookList2 = _interopRequireDefault(_BookList);

var _book = require('actions/book');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookStore = function (_Component) {
  _inherits(BookStore, _Component);

  function BookStore(props) {
    _classCallCheck(this, BookStore);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BookStore).call(this, props));
  }

  _createClass(BookStore, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchBookList('books');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'page-book-store' },
        _react2.default.createElement(_Branding2.default, null),
        _react2.default.createElement(_BookList2.default, { bookList: this.props.bookList })
      );
    }
  }]);

  return BookStore;
}(_react.Component);

function mapStateToProps(state) {
  return {
    bookList: state.book.bookList
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchBookList: _book.fetchBookList })(BookStore);
