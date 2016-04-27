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

var _actions = require('actions');

var _Colophon = require('components/Colophon');

var _Colophon2 = _interopRequireDefault(_Colophon);

var _BookList = require('components/BookList');

var _BookList2 = _interopRequireDefault(_BookList);

var _Loading = require('components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookStore = function (_Component) {
  _inherits(BookStore, _Component);

  _createClass(BookStore, null, [{
    key: 'fetchData',
    value: function fetchData(_ref) {
      var store = _ref.store;

      return [store.dispatch((0, _actions.fetchBookList)()), store.dispatch((0, _actions.fetchUserAuthInfo)())];
    }
  }]);

  function BookStore(props) {
    _classCallCheck(this, BookStore);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BookStore).call(this, props));
  }

  _createClass(BookStore, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchUserAuthInfo();
      this.props.fetchBookList();
    }
  }, {
    key: 'render',
    value: function render() {
      var isAdmin = this.props.user.role ? this.props.user.role === 'admin' ? true : false : false;

      return _react2.default.createElement(
        'div',
        { className: 'page-book-store' },
        this.props.book.isFetchingList ? _react2.default.createElement(_Loading2.default, null) : null,
        _react2.default.createElement(_BookList2.default, { bookList: this.props.book.bookList })
      );
    }
  }]);

  return BookStore;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    book: state.book,
    user: state.user
  };
}, { fetchBookList: _actions.fetchBookList, fetchUserAuthInfo: _actions.fetchUserAuthInfo })(BookStore);
