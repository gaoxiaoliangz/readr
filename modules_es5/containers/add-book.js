'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('muicss/react');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _branding = require('components/branding');

var _branding2 = _interopRequireDefault(_branding);

var _apiUrls = require('constants/api-urls');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AddBook extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookName: "",
      author: "",
      cover: "",
      bookContent: ""
    };
  }

  handleAddBook(event) {
    event.preventDefault();

    let params = {
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

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
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
}

exports.default = AddBook;
