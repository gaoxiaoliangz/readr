'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('muicss/react');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _branding = require('components/branding');

var _branding2 = _interopRequireDefault(_branding);

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
      author: "",
      cover: "",
      bookContent: ""
    };
    return _this;
  }

  _createClass(AddBook, [{
    key: 'handleAddBook',
    value: function handleAddBook(event) {
      event.preventDefault();

      var params = {
        book_name: this.state.bookName,
        book_author: this.state.author,
        book_cover: this.state.cover,
        book_content: this.state.bookContent
      };

      console.log(params);

      _jquery2.default.post(_apiUrls.URL_BOOKS, params, function (data) {
        console.log(data);
      }.bind(this));
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: 'render',
    value: function render() {
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
            _react2.default.createElement(
              'h1',
              { className: 'page-title' },
              '添加书籍'
            ),
            _react2.default.createElement(_react3.Input, { onChange: this.handleInputChange.bind(this), value: this.state.bookName, name: 'bookName', label: '书名', floatingLabel: true }),
            _react2.default.createElement(_react3.Input, { onChange: this.handleInputChange.bind(this), value: this.state.author, name: 'author', label: '作者', floatingLabel: true }),
            _react2.default.createElement(_react3.Input, { onChange: this.handleInputChange.bind(this), value: this.state.cover, name: 'cover', label: '封面', floatingLabel: true }),
            _react2.default.createElement(_react3.Textarea, { style: { height: 200 }, onChange: this.handleInputChange.bind(this), value: this.state.bookContent, name: 'bookContent', label: '书籍内容', floatingLabel: true }),
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
