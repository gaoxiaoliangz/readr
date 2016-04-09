'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _BookPageList = require('components/BookPageList');

var _BookPageList2 = _interopRequireDefault(_BookPageList);

var _Loading = require('components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _utils = require('utils');

var _book = require('utils/book');

var _cache = require('utils/cache');

var _book2 = require('actions/book');

var bookActions = _interopRequireWildcard(_book2);

var _user = require('actions/user');

var userActions = _interopRequireWildcard(_user);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var actions = Object.assign({}, bookActions, userActions);

// todo: remove this


// todo
function getUserReadingProgress(userId) {
  return {
    localProgress: '',
    cloudProgress: ''
  };
}

// todo
function getUserPreference(userId) {}

var BookViewer = function (_Component) {
  _inherits(BookViewer, _Component);

  function BookViewer(props) {
    _classCallCheck(this, BookViewer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BookViewer).call(this, props));

    _this.bookId = props.params.id;
    _this.state = {
      showPanel: false
    };
    return _this;
  }

  _createClass(BookViewer, [{
    key: 'scrollToLoadPages',
    value: function scrollToLoadPages() {
      var pageSum = this.props.book.pages.length;
      var percentage = (document.body.scrollTop / (900 * pageSum)).toFixed(4);

      this.props.actions.jumpTo((0, _book.convertPercentageToPage)(percentage, pageSum));
    }

    // todos:
    // unmounting bug
    // add animation

  }, {
    key: 'toggleBookPanel',
    value: function toggleBookPanel(event) {
      var y = event.pageY - document.body.scrollTop;

      if (y < 90) {
        this.setState({
          showPanel: true
        });
      } else {
        this.setState({
          showPanel: false
        });
      }
    }
  }, {
    key: 'addEventListeners',
    value: function addEventListeners() {
      window.addEventListener("scroll", (0, _utils.delayStuff)(this.scrollToLoadPages, 100).bind(this));
      window.addEventListener("mousemove", this.toggleBookPanel.bind(this));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // todo
      var defaultMode = "vertical";
      var screen = "hd";

      // todo: add mobile support
      if ((0, _jquery2.default)(window).width() < 768) {
        screen = "mobile";
      }

      // todo
      var pageHeight = 900;

      this.props.actions.fetchBookInfo(this.bookId, 'books/' + this.bookId);

      (0, _book.initBook)(this.bookId, this.props.actions, pageHeight).then(function (data) {
        if (data === true) {
          _this2.props.actions.jumpTo(1);
          _this2.addEventListeners();
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var book = this.props.book;
      var pages = book.pages;
      var pagesToRender = [];
      var height = book.pages ? book.pages.length * 900 : '100%';

      if (book.isPagesLoaded) {
        var currentPage = book.currentPage;

        pagesToRender = (0, _book.filterPages)({
          startPage: currentPage,
          offset: 2,
          quantity: 5,
          pages: pages
        });
      }

      return _react2.default.createElement(
        'div',
        { className: 'page-book-viewer' },
        book.isFetchingInfo || book.isFetchingContent ? _react2.default.createElement(_Loading2.default, null) : null,
        this.state.showPanel && book.meta && book.isPagesLoaded === true ? _react2.default.createElement(
          'div',
          { className: 'functions' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'span',
              { className: 'home' },
              _react2.default.createElement(_reactRouter.Link, { to: '/bookstore' })
            ),
            _react2.default.createElement(
              'span',
              { className: 'title' },
              book.meta.book_name
            ),
            _react2.default.createElement(
              'span',
              { className: 'loc' },
              book.currentPage + "/" + book.pages.length
            )
          )
        ) : null,
        book.mode === 'render' ? _react2.default.createElement(
          'div',
          { className: 'pages' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('div', { className: 'content', dangerouslySetInnerHTML: { __html: book.html } })
              )
            )
          )
        ) : null,
        book.mode === 'vertical' ? _react2.default.createElement(_BookPageList2.default, { height: height, view: book.view, bookId: this.bookId, pages: pagesToRender }) : null
      );
    }
  }]);

  return BookViewer;
}(_react.Component);

BookViewer.propTypes = {
  book: _react2.default.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    book: state.book
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, function (dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(actions, dispatch)
  };
})(BookViewer);
