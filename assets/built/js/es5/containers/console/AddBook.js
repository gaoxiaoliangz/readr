'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _APIS = require('constants/APIS');

var _actions = require('actions');

var _utils = require('utils');

var _Notification = require('components/Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _Input = require('elements/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddBook = function (_Component) {
  _inherits(AddBook, _Component);

  function AddBook(props) {
    _classCallCheck(this, AddBook);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddBook).call(this, props));

    _this.defaultState = {
      searchQuery: "",
      currentBook: -1,
      previewIndex: -1,
      conformed: false
    };
    _this.state = _this.defaultState;
    return _this;
  }

  _createClass(AddBook, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchUserAuthInfo();
    }
  }, {
    key: 'handleAddBook',
    value: function handleAddBook(event) {
      var _this2 = this;

      event.preventDefault();

      var currentBook = this.state.currentBook;
      var dataToPost = {};
      var bookContent = _reactDom2.default.findDOMNode(this.refs.bookContent).value;
      console.log(bookContent);
      var isValid = false;

      while (true) {
        if (currentBook !== -1) {
          dataToPost.bookInfo = this.props.book.searchResults.books[currentBook];
        } else {
          this.props.handleNotification('未选择书籍！');
          break;
        }

        if (bookContent) {
          dataToPost.bookContent = bookContent;
        } else {
          this.props.handleNotification('请输入书籍内容！');
          break;
        }

        isValid = true;
        break;
      }

      dataToPost.bookInfo = JSON.stringify(dataToPost.bookInfo);

      if (isValid) {
        (0, _utils.callApi)(_APIS.API_ROOT + 'books', 'POST', dataToPost).then(function (res) {
          _this2.props.handleNotification('添加成功');
        }).catch(function (err) {
          console.error(err);
          _this2.props.handleNotification(err.message);
        });
      }
    }
  }, {
    key: 'search',
    value: function search(event) {
      this.setState({ searchQuery: event.target.value });
      this.props.fetchDoubanBookSearchResults('search?count=5&q=' + event.target.value);
    }
  }, {
    key: 'conformResult',
    value: function conformResult(index) {
      this.setState({
        currentBook: index,
        conformed: true
      });
    }
  }, {
    key: 'showBookCover',
    value: function showBookCover(index) {
      this.setState({
        previewIndex: index
      });
    }
  }, {
    key: 'removeResult',
    value: function removeResult() {
      this.setState(this.defaultState);
      this.props.clearBookSearch();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var book = null;

      if (this.state.currentBook !== -1) {
        book = this.props.book.searchResults.books[this.state.currentBook];
      }

      return _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(_Notification2.default, { notification: this.props.notification }),
        _react2.default.createElement(
          'h1',
          { className: 'page-title' },
          'Add book'
        ),
        !this.state.conformed ? _react2.default.createElement(_Input2.default, { onChange: this.search.bind(this), value: this.state.searchQuery, placeholder: 'Type something to match book info' }) : null,
        !this.state.conformed && this.props.book.searchResults ? _react2.default.createElement(
          'div',
          { className: 'drop-down' },
          _react2.default.createElement(
            'ul',
            null,
            this.props.book.searchResults.books.map(function (item, index) {
              return _react2.default.createElement(
                'li',
                { onMouseOver: _this3.showBookCover.bind(_this3, index), onClick: _this3.conformResult.bind(_this3, index), key: index },
                item.title,
                ' (',
                item.author,
                ')',
                _this3.state.previewIndex === index ? _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('img', { src: item.image })
                ) : null
              );
            })
          )
        ) : null,
        book ? _react2.default.createElement(
          'div',
          { className: 'book' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('img', { src: book.image })
          ),
          _react2.default.createElement(
            'h2',
            { className: 'book-name' },
            book.title
          ),
          _react2.default.createElement(
            'div',
            { className: 'book-author' },
            '作者：',
            book.author[0]
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn', onClick: this.removeResult.bind(this) },
            'Reselect'
          )
        ) : null,
        _react2.default.createElement('textarea', { placeholder: 'Paste book content here', style: { height: 200 }, name: 'book_content', ref: 'bookContent' }),
        _react2.default.createElement(
          'button',
          { className: 'btn', onClick: this.handleAddBook.bind(this) },
          'Add'
        )
      );
    }
  }]);

  return AddBook;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    user: state.user,
    book: state.book,
    notification: state.notification
  };
}, { fetchUserAuthInfo: _actions.fetchUserAuthInfo, fetchDoubanBookSearchResults: _actions.fetchDoubanBookSearchResults, clearBookSearch: _actions.clearBookSearch, handleNotification: _actions.handleNotification })(AddBook);
