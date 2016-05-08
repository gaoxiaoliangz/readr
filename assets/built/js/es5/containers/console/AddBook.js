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

var _ApiRoots = require('constants/ApiRoots');

var _ApiRoots2 = _interopRequireDefault(_ApiRoots);

var _actions = require('actions');

var _callApi = require('utils/callApi');

var _callApi2 = _interopRequireDefault(_callApi);

var _Notification = require('components/Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _Input = require('elements/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Button = require('elements/Button');

var _Button2 = _interopRequireDefault(_Button);

var _SelectizeInput = require('elements/SelectizeInput');

var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _apis = require('utils/apis');

var _apis2 = _interopRequireDefault(_apis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactSelectize = require("react-selectize");
var SimpleSelect = ReactSelectize.SimpleSelect;
var MultiSelect = ReactSelectize.MultiSelect;

var AddBook = function (_Component) {
  _inherits(AddBook, _Component);

  function AddBook(props) {
    _classCallCheck(this, AddBook);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddBook).call(this, props));

    _this.defaultState = {
      searchQuery: "",
      currentBook: -1,
      previewIndex: -1,
      conformed: false,
      bookTitle: '',
      bookAuthor: '',
      bookCover: '',
      bookDescription: '',
      bookContent: '',
      dbQuery: '',
      dbBook: []
    };
    _this.state = _this.defaultState;
    _this.fetchDoubanBookSearchResults = _lodash2.default.debounce(_this.props.fetchDoubanBookSearchResults, 150);
    return _this;
  }

  // handleAddBook2(event) {
  //   event.preventDefault()
  //
  //   let currentBook = this.state.currentBook
  //   let dataToPost = {}
  //   let bookContent = ReactDOM.findDOMNode(this.refs.bookContent).value
  //   let isValid = false
  //
  //   console.log(this.state);
  //
  //   while (true) {
  //     if(currentBook !== -1) {
  //       dataToPost.bookInfo = this.props.doubanBooks[this.props.doubanBookSearchResults[this.state.searchQuery].ids.filter((book, index) => {
  //         if(index === currentBook) {
  //           return true
  //         }
  //       })[0]]
  //     }else{
  //       this.props.handleNotification('未选择书籍！')
  //       break
  //     }
  //
  //     if(bookContent) {
  //       dataToPost.bookContent = bookContent
  //     }else{
  //       this.props.handleNotification('请输入书籍内容！')
  //       break
  //     }
  //
  //     isValid = true
  //     break
  //   }
  //
  //   dataToPost.bookInfo = JSON.stringify(dataToPost.bookInfo)
  //
  //   if(isValid) {
  //     callApi({ fullUrl: `${ApiRoots.LOCAL}books`, method: 'POST', data: dataToPost }).then(res => {
  //       this.props.handleNotification('添加成功')
  //       this.removeResult()
  //       ReactDOM.findDOMNode(this.refs.bookContent).value = ''
  //     }).catch((err) => {
  //       console.error(err)
  //       this.props.handleNotification(err.message)
  //     })
  //   }
  // }

  _createClass(AddBook, [{
    key: 'handleAddBook',
    value: function handleAddBook(e) {
      var _this2 = this;

      var data = {
        title: this.state.bookTitle,
        description: this.state.bookDescription,
        content: this.state.bookContent,
        author: '567890',
        cover: this.state.bookCover
      };
      console.log(data);
      _apis2.default.addBook(data).then(function (result) {
        _this2.props.handleNotification('添加成功');
      }, function (error) {
        _this2.props.handleNotification(err.message);
      });
      e.preventDefault();
    }
  }, {
    key: 'search',
    value: function search(event) {
      var query = event.target.value;

      this.setState({
        searchQuery: query,
        dbQuery: query
      });
      if (query !== '') {
        this.fetchDoubanBookSearchResults(query);
      }
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
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var book = null;
      var searchResultIds = this.props.doubanBookSearchResults[this.state.searchQuery] ? this.props.doubanBookSearchResults[this.state.searchQuery].ids : [];
      var doubanBooks = this.props.doubanBooks;
      var searchResults = searchResultIds.map(function (id) {
        return doubanBooks[id].title;
      });

      if (this.state.currentBook !== -1) {
        book = searchResults[this.state.currentBook];
      }

      return _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(_Notification2.default, { notification: this.props.notification }),
        _react2.default.createElement(
          'h1',
          { className: 'page-title' },
          'Add Book'
        ),
        _react2.default.createElement(_SelectizeInput2.default, {
          onChange: this.search.bind(this),
          onValuesChange: function onValuesChange(values) {
            _this3.setState({
              dbBook: values
            });
          },
          ref: 'dbBook',
          options: searchResults,
          values: this.state.dbBook,
          placeholder: 'Type book name to begin'
        }),
        !this.state.conformed ? _react2.default.createElement(_Input2.default, { onChange: this.search.bind(this), value: this.state.searchQuery, placeholder: 'Type something to match book info' }) : null,
        _react2.default.createElement(_Input2.default, {
          onChange: function onChange(event) {
            _this3.setState({
              bookTitle: event.target.value
            });
          },
          value: this.state.bookTitle,
          placeholder: 'Title'
        }),
        _react2.default.createElement(_Input2.default, {
          onChange: function onChange(event) {
            _this3.setState({
              bookAuthor: event.target.value
            });
          },
          value: this.state.bookAuthor,
          placeholder: 'Author'
        }),
        _react2.default.createElement(_Input2.default, {
          onChange: function onChange(event) {
            _this3.setState({
              bookCover: event.target.value
            });
          },
          value: this.state.bookCover,
          placeholder: 'Cover'
        }),
        !this.state.conformed && searchResults ? _react2.default.createElement(
          'div',
          { className: 'drop-down' },
          _react2.default.createElement(
            'ul',
            null,
            searchResults.map(function (item, index) {
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
            _Button2.default,
            { onClick: this.removeResult.bind(this) },
            'Reselect'
          )
        ) : null,
        _react2.default.createElement('textarea', {
          placeholder: 'Description',
          style: { height: 100 },
          value: this.state.bookDescription,
          onChange: function onChange(event) {
            _this3.setState({
              bookDescription: event.target.value
            });
          }
        }),
        _react2.default.createElement('textarea', {
          placeholder: 'Paste book content here',
          style: { height: 100 },
          value: this.state.bookContent,
          onChange: function onChange(event) {
            _this3.setState({
              bookContent: event.target.value
            });
          }
        }),
        _react2.default.createElement(
          _Button2.default,
          { onClick: this.handleAddBook.bind(this) },
          'Add'
        )
      );
    }
  }]);

  return AddBook;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    doubanBookSearchResults: state.pagination.doubanBookSearchResults,
    doubanBooks: state.entities.doubanBooks,
    notification: state.components.notification
  };
}, { fetchDoubanBookSearchResults: _actions.fetchDoubanBookSearchResults, handleNotification: _actions.handleNotification })(AddBook);
