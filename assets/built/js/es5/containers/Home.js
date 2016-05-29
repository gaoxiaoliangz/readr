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

var _BookListSection = require('components/BookListSection');

var _BookListSection2 = _interopRequireDefault(_BookListSection);

var _Loading = require('components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _CandyBox = require('components/CandyBox');

var _CandyBox2 = _interopRequireDefault(_CandyBox);

var _Body = require('side-effects/Body');

var _Body2 = _interopRequireDefault(_Body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  _createClass(Home, null, [{
    key: 'fetchData',
    value: function fetchData(_ref) {
      var store = _ref.store;

      return store.dispatch((0, _actions.fetchBooks)('newest'));
    }
  }]);

  function Home(props) {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchBooks('newest');
      this.props.fetchBooks('user');
      this.props.fetchCollections();
    }
  }, {
    key: 'render',
    value: function render() {
      var newestBooks = this.props.newestBooks;
      var hotBooks = newestBooks.map(function (book, index) {
        return {
          name: book.title,
          link: '/book/' + book.id
        };
      });
      var userBooks = this.props.userBooks.map(function (book, index) {
        return {
          name: book.title,
          link: '/book/' + book.id
        };
      });
      var listName = this.props.collection ? this.props.collection.name : '';
      var list = this.props.collection ? this.props.collection.items : [];

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Body2.default, { className: 'home' }),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-8' },
            _react2.default.createElement(_BookListSection2.default, { bookList: newestBooks, title: '新书速递' }),
            _react2.default.createElement(_BookListSection2.default, { bookList: list, title: listName })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-4' },
            _react2.default.createElement(_CandyBox2.default, { title: '最近阅读', list: userBooks })
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

function mapStateToProps(state, ownProps) {
  var filteredBooks = state.pagination.filteredBooks;
  var _state$entities = state.entities;
  var books = _state$entities.books;
  var collections = _state$entities.collections;


  var genList = function genList(whichPagination) {
    return whichPagination ? whichPagination.ids.map(function (id) {
      return books[id];
    }) : [];
  };

  return {
    userBooks: genList(filteredBooks['user']),
    newestBooks: genList(filteredBooks['newest']),
    collection: function () {
      for (var prop in collections) {
        return collections[prop];
      }
    }()
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchBooks: _actions.fetchBooks, fetchCollections: _actions.fetchCollections })(Home);