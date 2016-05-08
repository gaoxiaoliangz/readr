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

var _actions = require('actions');

var _Input = require('elements/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Button = require('elements/Button');

var _Button2 = _interopRequireDefault(_Button);

var _SelectizeInput = require('elements/SelectizeInput');

var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);

var _Notification = require('components/Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _data = require('utils/data');

var data = _interopRequireWildcard(_data);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddBookList = function (_Component) {
  _inherits(AddBookList, _Component);

  function AddBookList(props) {
    _classCallCheck(this, AddBookList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddBookList).call(this, props));

    _this.state = {
      booksToAdd: '',
      tagsToAdd: '',
      bookQueryResults: []
    };
    return _this;
  }

  _createClass(AddBookList, [{
    key: 'getCurrentSearchResults',
    value: function getCurrentSearchResults() {
      var query = this.state.booksToAdd;
      var books = this.props.books;

      return this.props.bookSearchResults ? this.props.bookSearchResults[query].ids.map(function (id, index) {
        console.log(id);
        return books[id];
      }) : [];
    }
  }, {
    key: 'add',
    value: function add(e) {
      var _this2 = this;

      var books = JSON.stringify(this.refs.addBooks.state.tags.map(function (tag) {
        return tag.key;
      }));
      var name = _reactDom2.default.findDOMNode(this.refs.name).querySelector('input').value;
      var description = _reactDom2.default.findDOMNode(this.refs.description).value;

      data.addBookList(name, books, description).then(function (result) {
        _this2.refs.addBooks.resetTags();
        _reactDom2.default.findDOMNode(_this2.refs.name).querySelector('input').value = '';
        _reactDom2.default.findDOMNode(_this2.refs.description).value = '';
        _this2.props.handleNotification('添加成功');
      }, function (error) {
        _this2.props.handleNotification(error.message);
      });
      e.preventDefault();
    }
  }, {
    key: 'resetBooksValue',
    value: function resetBooksValue() {
      this.setState({
        booksToAdd: ''
      });
    }
  }, {
    key: 'resetTagsValue',
    value: function resetTagsValue() {
      this.setState({
        tagsToAdd: ''
      });
    }
  }, {
    key: 'handleAddBook',
    value: function handleAddBook(event) {
      var _this3 = this;

      var query = event.target.value;
      this.setState({
        booksToAdd: query
      });

      if (query !== '') {
        this.props.searchBooks(query).then(function () {
          _this3.setState({
            bookQueryResults: _this3.getCurrentSearchResults().map(function (item) {
              return { text: item.title, key: item.id };
            })
          });
        });
      } else {
        this.setState({
          bookQueryResults: []
        });
      }
    }
  }, {
    key: 'handleAddTag',
    value: function handleAddTag(event) {
      this.setState({
        tagsToAdd: event.target.value
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var notification = this.props.notification;

      return _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(_Notification2.default, { notification: notification }),
        _react2.default.createElement(
          'h1',
          { className: 'page-title' },
          'Add book list'
        ),
        _react2.default.createElement(_Input2.default, { ref: 'name', placeholder: 'Name' }),
        _react2.default.createElement(_SelectizeInput2.default, {
          value: this.state.booksToAdd,
          onChange: this.handleAddBook.bind(this),
          ref: 'addBooks',
          queryResults: this.state.bookQueryResults,
          resetValue: this.resetBooksValue.bind(this),
          placeholder: 'Type book name to begin'
        }),
        _react2.default.createElement(_SelectizeInput2.default, {
          value: this.state.tagsToAdd,
          onChange: this.handleAddTag.bind(this),
          ref: 'addTags',
          queryResults: ['tag1', 'tag2', 'uoeuoi', 'eoioie'],
          resetValue: this.resetTagsValue.bind(this),
          placeholder: 'Tags'
        }),
        _react2.default.createElement('textarea', { ref: 'description', placeholder: 'Description' }),
        _react2.default.createElement(
          _Button2.default,
          { onClick: this.add.bind(this) },
          'Add'
        )
      );
    }
  }]);

  return AddBookList;
}(_react.Component);

function mapStateToProps(state) {
  return {
    bookSearchResults: state.pagination.bookSearchResults,
    books: state.entities.books,
    notification: state.components.notification
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { searchBooks: _actions.searchBooks, handleNotification: _actions.handleNotification })(AddBookList);
