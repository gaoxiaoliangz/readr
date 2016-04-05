'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('muicss/react');

var _reactRouter = require('react-router');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _branding = require('components/branding');

var _branding2 = _interopRequireDefault(_branding);

var _msg = require('components/msg');

var _msg2 = _interopRequireDefault(_msg);

var _apiUrls = require('constants/api-urls');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddBook = function (_Component) {
  _inherits(AddBook, _Component);

  function AddBook(props) {
    _classCallCheck(this, AddBook);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddBook).call(this, props));

    _this.state = {
      bookName: "",
      bookContent: "",
      doubanItemId: "",
      status: ""
    };
    return _this;
  }

  _createClass(AddBook, [{
    key: 'handleAddBook',
    value: function handleAddBook(event) {
      event.preventDefault();
      var isValid = true;
      var params = {
        book_name: this.state.bookName,
        book_content: this.state.bookContent,
        douban_item_id: this.state.doubanItemId
      };

      for (var prop in params) {
        console.log(prop);
        if (params[prop].length === 0) {
          isValid = false;
          this.setState({
            status: prop + ' 不能为空！'
          });
          setTimeout(function () {
            this.setState({
              status: null
            });
          }.bind(this), 3000);
          break;
        }
      }

      if (isValid) {
        _jquery2.default.post(_apiUrls.URL_BOOKS, params, function (data) {
          console.log(data);
          if (data.data) {
            this.setState({
              status: '添加成功！',
              bookName: '',
              bookContent: '',
              doubanItemId: '',
              dataFromDouban: '',
              visiableCoverIndex: -1,
              currentBook: ''
            });

            setTimeout(function () {
              this.setState({
                status: ''
              });
            }.bind(this), 3000);
          }
        }.bind(this));
      }
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));

      if (event.target.value && event.target.name === "bookName") {
        var url = _apiUrls.URL_DOUBAN_BOOKS + 'search?count=5&q=' + event.target.value;
        _jquery2.default.ajax({
          url: url,
          dataType: "jsonp"
        }).done(function (data) {
          console.log(data);
          data.books.forEach(function (item) {
            console.log(item.title);
          });
          this.setState({
            dataFromDouban: data,
            visiableCoverIndex: -1
          });
        }.bind(this));
      } else {
        this.setState({
          dataFromDouban: { books: [] }
        });
      }
    }
  }, {
    key: 'conformResult',
    value: function conformResult(item) {
      this.setState({
        dataFromDouban: { books: [] }
      });
      this.setState({
        doubanItemId: item.id,
        bookName: item.title,
        currentBook: item
      });
    }
  }, {
    key: 'showBookCover',
    value: function showBookCover(index) {
      this.setState({
        visiableCoverIndex: index
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

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
            _react2.default.createElement(_react3.Input, { onChange: this.handleInputChange.bind(this), value: this.state.bookName, name: 'bookName', label: '搜索', floatingLabel: false, hint: '现阶段，书籍信息均从豆瓣获取，输入书名或书籍相关信息以检索' }),
            _react2.default.createElement('p', null),
            function () {
              if (_this2.state.dataFromDouban) {
                return _react2.default.createElement(
                  'div',
                  { className: 'drop-down' },
                  _react2.default.createElement(
                    'ul',
                    null,
                    _this2.state.dataFromDouban.books.map(function (item, index) {
                      return _react2.default.createElement(
                        'li',
                        { onMouseOver: _this2.showBookCover.bind(_this2, index), onClick: _this2.conformResult.bind(_this2, item), key: index },
                        item.title,
                        ' (',
                        item.author,
                        ')',
                        function () {
                          if (_this2.state.visiableCoverIndex === index) {
                            return _react2.default.createElement(
                              'div',
                              null,
                              _react2.default.createElement('img', { src: item.image })
                            );
                          }
                        }()
                      );
                    })
                  )
                );
              }
            }(),
            function () {
              if (_this2.state.currentBook) {
                var book = _this2.state.currentBook;
                return _react2.default.createElement(
                  'div',
                  { className: 'book' },
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
                );
              }
            }(),
            _react2.default.createElement(_react3.Input, { onChange: this.handleInputChange.bind(this), value: this.state.doubanItemId, name: 'doubanItemId', label: '豆瓣条目 ID ', floatingLabel: false }),
            _react2.default.createElement(_react3.Textarea, { style: { height: 200 }, onChange: this.handleInputChange.bind(this), value: this.state.bookContent, name: 'bookContent', label: '书籍内容', floatingLabel: false }),
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

exports.default = AddBook;
