'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('muicss/react');

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _actions = require('actions');

var _Loading = require('components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _Branding = require('components/Branding');

var _Branding2 = _interopRequireDefault(_Branding);

var _Colophon = require('components/Colophon');

var _Colophon2 = _interopRequireDefault(_Colophon);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookInfo = function (_Component) {
  _inherits(BookInfo, _Component);

  _createClass(BookInfo, null, [{
    key: 'fetchData',
    value: function fetchData(_ref) {
      var store = _ref.store;
      var params = _ref.params;

      return store.dispatch((0, _actions.fetchBookInfo)(params.id));
    }
  }]);

  function BookInfo(props) {
    _classCallCheck(this, BookInfo);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BookInfo).call(this, props));

    _this.bookId = props.params.id;
    return _this;
  }

  _createClass(BookInfo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchUserAuthInfo();
      this.props.fetchBookInfo(this.bookId);
    }
  }, {
    key: 'render',
    value: function render() {
      var bookInfo = this.props.bookInfo ? this.props.bookInfo : {};

      return _react2.default.createElement(
        'article',
        { className: 'book-info content-container' },
        _lodash2.default.isEmpty(bookInfo) ? _react2.default.createElement(_Loading2.default, null) : null,
        _react2.default.createElement(
          'header',
          { className: 'book-info-header' },
          _react2.default.createElement(
            'div',
            { className: 'left-col' },
            bookInfo.image ? _react2.default.createElement(
              'div',
              { className: 'book-cover' },
              _react2.default.createElement('img', { src: bookInfo.image })
            ) : null
          ),
          _react2.default.createElement(
            'div',
            { className: 'right-col' },
            _react2.default.createElement(
              'h1',
              { className: 'book-name' },
              bookInfo.title
            ),
            _react2.default.createElement(
              'div',
              { className: 'book-author' },
              _react2.default.createElement(
                'strong',
                null,
                '作者：',
                bookInfo.author
              )
            ),
            bookInfo.title ? _react2.default.createElement(
              _reactRouter.Link,
              { to: '/viewer/book/' + bookInfo.id },
              _react2.default.createElement(
                _react3.Button,
                { color: 'primary' },
                '阅读'
              )
            ) : null,
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'a',
                { target: '_blank', href: 'http://book.douban.com/subject/' + bookInfo.book_id },
                '在豆瓣查看'
              )
            )
          )
        ),
        bookInfo.author_intro ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h2',
            null,
            '作者简介'
          ),
          _react2.default.createElement(
            'p',
            null,
            bookInfo.author_intro
          )
        ) : null,
        bookInfo.summary ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h2',
            null,
            '内容简介'
          ),
          _react2.default.createElement(
            'p',
            null,
            bookInfo.summary
          )
        ) : null
      );
    }
  }]);

  return BookInfo;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
  return {
    bookInfo: state.entities.books[ownProps.params.id],
    user: state.user
  };
}, { fetchBookInfo: _actions.fetchBookInfo, fetchUserAuthInfo: _actions.fetchUserAuthInfo })(BookInfo);
