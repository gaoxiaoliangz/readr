'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _actions = require('actions');

var _BookListSection = require('components/BookListSection');

var _BookListSection2 = _interopRequireDefault(_BookListSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookShelf = function (_Component) {
  _inherits(BookShelf, _Component);

  _createClass(BookShelf, null, [{
    key: 'fetchData',
    value: function fetchData(_ref) {
      var store = _ref.store;
      var params = _ref.params;

      return store.dispatch((0, _actions.fetchBooks)('user'));
    }
  }]);

  function BookShelf(props) {
    _classCallCheck(this, BookShelf);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BookShelf).call(this, props));
  }

  _createClass(BookShelf, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchBooks('user');
    }
  }, {
    key: 'render',
    value: function render() {
      var bookList = this.props.bookListUser;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_BookListSection2.default, { bookList: bookList, title: '我的书架' })
      );
    }
  }]);

  return BookShelf;
}(_react.Component);

function mapStateToProps(state, ownProps) {
  var filteredBooks = state.pagination.filteredBooks;
  var books = state.entities.books;


  var genList = function genList(whichPagination) {
    return whichPagination ? whichPagination.ids.map(function (id) {
      return books[id];
    }) : [];
  };

  return {
    bookListUser: genList(filteredBooks['user'])
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchBooks: _actions.fetchBooks })(BookShelf);