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

var _Input = require('elements/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Button = require('elements/Button');

var _Button2 = _interopRequireDefault(_Button);

var _AddTags = require('elements/AddTags');

var _AddTags2 = _interopRequireDefault(_AddTags);

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
        return books[id];
      }) : [];
    }
  }, {
    key: 'check',
    value: function check() {
      console.log(this.refs.addBooks.state);
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
      var _this2 = this;

      var query = event.target.value;
      this.setState({
        booksToAdd: query
      });

      if (query !== '') {
        this.props.searchBooks(query).then(function () {
          _this2.setState({
            bookQueryResults: _this2.getCurrentSearchResults().map(function (item) {
              return item.title;
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
      return _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(
          'h1',
          { className: 'page-title' },
          'Add book list'
        ),
        _react2.default.createElement(_Input2.default, { placeholder: 'Name' }),
        _react2.default.createElement(_AddTags2.default, {
          className: 'add-books',
          value: this.state.booksToAdd,
          onChange: this.handleAddBook.bind(this),
          ref: 'addBooks',
          queryResults: this.state.bookQueryResults,
          resetValue: this.resetBooksValue.bind(this),
          placeholder: 'Type book name to begin'
        }),
        _react2.default.createElement(_AddTags2.default, {
          className: 'add-tags',
          value: this.state.tagsToAdd,
          onChange: this.handleAddTag.bind(this),
          ref: 'addTags',
          queryResults: ['tag1', 'tag2', 'uoeuoi', 'eoioie'],
          resetValue: this.resetTagsValue.bind(this),
          placeholder: 'Tags'
        }),
        _react2.default.createElement('textarea', { placeholder: 'Description' }),
        _react2.default.createElement(
          _Button2.default,
          { onClick: this.check.bind(this) },
          'Check'
        )
      );
    }
  }]);

  return AddBookList;
}(_react.Component);

function mapStateToProps(state) {
  return {
    bookSearchResults: state.pagination.bookSearchResults,
    books: state.entities.books
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { searchBooks: _actions.searchBooks })(AddBookList);
