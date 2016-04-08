'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react3 = require('muicss/react');

var _reactRouter = require('react-router');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _branding = require('components/branding');

var _branding2 = _interopRequireDefault(_branding);

var _msg = require('components/msg');

var _msg2 = _interopRequireDefault(_msg);

var _apiUrls = require('constants/api-urls');

var _reactRedux = require('react-redux');

var _user = require('actions/user');

var _book = require('actions/book');

var _utils = require('utils');

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
      this.props.fetchUserAuthInfo('auth');
    }
  }, {
    key: 'showMsg',
    value: function showMsg(content, t) {
      if (typeof t === 'undefined') {
        t = 3000;
      }
      this.setState({
        status: content
      });
      setTimeout(function () {
        this.setState({
          status: null
        });
      }.bind(this), t);
    }
  }, {
    key: 'handleAddBook',
    value: function handleAddBook(event) {
      var _this2 = this;

      event.preventDefault();

      var currentBook = this.state.currentBook;
      var dataToPost = {};
      var bookContent = _reactDom2.default.findDOMNode(this.refs.bookContent).childNodes[0].value;
      var isValid = false;

      while (true) {
        if (currentBook !== -1) {
          dataToPost.doubanBook = this.props.book.searchResults.books[currentBook];
        } else {
          this.showMsg('未选择书籍！');
          break;
        }

        if (bookContent) {
          dataToPost.bookContent = bookContent;
        } else {
          this.showMsg('请输入书籍内容！');
          break;
        }

        isValid = true;
        break;
      }

      dataToPost.doubanBook = JSON.stringify(dataToPost.doubanBook);

      if (isValid) {
        (0, _utils.callApi)(_apiUrls.API_ROOT + 'books', 'post', dataToPost).then(function (res) {
          _this2.showMsg('添加成功');
        }).catch(function (err) {
          console.error(err);
          _this2.showMsg('添加失败');
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
        'div',
        { className: 'page-add-book' },
        _react2.default.createElement(_branding2.default, null),
        _react2.default.createElement(
          _react3.Container,
          null,
          _react2.default.createElement(
            _react3.Form,
            { className: 'content-container', action: '#', method: 'post' },
            _react2.default.createElement(_msg2.default, { content: this.state.status }),
            _react2.default.createElement(
              'h1',
              { className: 'page-title' },
              '添加书籍'
            ),
            !this.state.conformed ? _react2.default.createElement(_react3.Input, { onChange: this.search.bind(this), value: this.state.searchQuery, hint: '输入书名或其他书籍相关信息' }) : null,
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
                'span',
                { onClick: this.removeResult.bind(this), className: 'icon icon-close' },
                '重新选择'
              ),
              _react2.default.createElement('img', { src: book.image }),
              _react2.default.createElement(
                'div',
                { className: 'book-name' },
                book.title
              ),
              _react2.default.createElement(
                'div',
                { className: 'book-author' },
                book.author[0]
              )
            ) : null,
            _react2.default.createElement(_react3.Textarea, { hint: '粘贴书籍的全部文本内容', style: { height: 200 }, name: 'book_content', ref: 'bookContent' }),
            _react2.default.createElement(
              _react3.Button,
              { onClick: this.handleAddBook.bind(this), variant: 'raised' },
              '确认添加'
            )
          )
        )
      );
    }
  }]);

  return AddBook;
}(_react.Component);

function mapStateToProps(state) {
  return {
    user: state.user,
    book: state.book
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchUserAuthInfo: _user.fetchUserAuthInfo, fetchDoubanBookSearchResults: _book.fetchDoubanBookSearchResults, clearBookSearch: _book.clearBookSearch })(AddBook);
