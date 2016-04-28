'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('actions');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ManageBooks = function (_Component) {
  _inherits(ManageBooks, _Component);

  function ManageBooks(props) {
    _classCallCheck(this, ManageBooks);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ManageBooks).call(this, props));
  }

  _createClass(ManageBooks, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchBookList();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'table',
          null,
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                'ID'
              ),
              _react2.default.createElement(
                'td',
                null,
                'Name'
              ),
              _react2.default.createElement(
                'td',
                null,
                'Date created'
              ),
              _react2.default.createElement(
                'td',
                null,
                'Actions'
              )
            ),
            this.props.book.bookList ? this.props.book.bookList.map(function (book, index) {
              return _react2.default.createElement(
                'tr',
                { key: index },
                _react2.default.createElement(
                  'td',
                  null,
                  book.id
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  book.title
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  book.date_created
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'Delete'
                  )
                )
              );
            }) : null
          )
        )
      );
    }
  }]);

  return ManageBooks;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    book: state.book
  };
}, { fetchBookList: _actions.fetchBookList })(ManageBooks);
