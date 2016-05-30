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

var _apis = require('utils/apis');

var _apis2 = _interopRequireDefault(_apis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddCollection = function (_Component) {
  _inherits(AddCollection, _Component);

  function AddCollection(props) {
    _classCallCheck(this, AddCollection);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddCollection).call(this, props));

    _this.defaultState = {
      bookResults: [],
      collectedBooks: [],
      collectionName: '',
      collectionDesc: ''
    };
    _this.state = Object.assign({}, _this.defaultState);
    return _this;
  }

  // getCurrentSearchResults() {
  //   let query = this.state.booksToAdd
  //   let books = this.props.books
  //
  //   return this.props.bookSearchResults?this.props.bookSearchResults[query].ids.map((id, index) => {
  //     console.log(id);
  //     return books[id]
  //   }):[]
  // }

  _createClass(AddCollection, [{
    key: 'addCollection',
    value: function addCollection(e) {
      var _this2 = this;

      e.preventDefault();
      var name = this.state.collectionName;
      var items = JSON.stringify(this.state.collectedBooks.map(function (a) {
        return a.id;
      }));
      var description = this.state.collectionDesc;

      var data = { name: name, items: items, description: description };

      _apis2.default.addCollection(data).then(function (result) {
        _this2.props.handleNotification('添加成功');
        _this2.setState(_this2.defaultState);
      }, function (error) {
        _this2.props.handleNotification(error.message);
      });
    }
  }, {
    key: 'searchBooks',
    value: function searchBooks(e) {
      var _this3 = this;

      var query = e.target.value;

      if (query !== '') {
        _apis2.default.searchBooks(query).then(function (response) {
          console.log(response);
          _this3.setState({
            bookResults: response
          });
        });
      }
    }
  }, {
    key: 'searchTags',
    value: function searchTags(e) {
      var _this4 = this;

      var query = e.target.value;

      if (query !== '') {
        _apis2.default.searchTags(query).then(function (response) {
          console.log(response);
          _this4.setState({
            tagResults: response
          });
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var notification = this.props.notification;

      return _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(_Notification2.default, { notification: notification }),
        _react2.default.createElement(
          'h1',
          { className: 'page-title' },
          'Add Collection'
        ),
        _react2.default.createElement(_Input2.default, { value: this.state.collectionName, onChange: function onChange(e) {
            return _this5.setState({ collectionName: e.target.value });
          }, placeholder: 'Name' }),
        _react2.default.createElement(_SelectizeInput2.default, {
          ref: 'collectedBooks',
          onChange: this.searchBooks.bind(this),
          onValuesChange: function onValuesChange(targetIndex, type) {
            switch (type) {
              case 'ADD':
                _this5.setState({
                  collectedBooks: [].concat(_toConsumableArray(_this5.state.collectedBooks), [_this5.state.bookResults[targetIndex]])
                });
                break;

              case 'REMOVE':
                _this5.setState({
                  collectedBooks: _this5.state.collectedBooks.filter(function (value, index) {
                    return targetIndex !== index ? true : false;
                  })
                });
                break;

              default:
                console.error('Undefined type');
            }
          },
          options: this.state.bookResults.map(function (a) {
            return {
              value: a.title,
              subInfo: a.author.map(function (a) {
                return a.name;
              }).join(', '),
              thumb: a.cover
            };
          }),
          values: this.state.collectedBooks.map(function (book) {
            return book.title;
          }),
          placeholder: 'Books'
        }),
        _react2.default.createElement('textarea', { value: this.state.collectionDesc, onChange: function onChange(e) {
            return _this5.setState({ collectionDesc: e.target.value });
          }, placeholder: 'Description' }),
        _react2.default.createElement(
          _Button2.default,
          { onClick: this.addCollection.bind(this) },
          'Add'
        )
      );
    }
  }]);

  return AddCollection;
}(_react.Component);

function mapStateToProps(state) {
  return {
    bookSearchResults: state.pagination.bookSearchResults,
    books: state.entities.books,
    notification: state.components.notification
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { searchBooks: _actions.searchBooks, handleNotification: _actions.handleNotification })(AddCollection);
