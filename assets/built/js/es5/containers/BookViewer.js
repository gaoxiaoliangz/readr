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

var _utils = require('utils');

var _actions = require('actions');

var actions = _interopRequireWildcard(_actions);

var _BookPageList = require('components/BookPageList');

var _BookPageList2 = _interopRequireDefault(_BookPageList);

var _Loading = require('components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import fetchBookInfo, fetchUserAuthInfo, jumpTo, loadPages, setBookMode, fetchBookContent as actions from 'actions'
// const actions = { fetchBookInfo, fetchUserAuthInfo, jumpTo, loadPages, setBookMode, fetchBookContent }

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

      this.props.actions.jumpTo((0, _utils.convertPercentageToPage)(percentage, pageSum));
    }

    // todos:
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
    key: 'componentDidMount',
    value: function componentDidMount() {
      var actions = this.props.actions;
      // todo
      var defaultMode = "vertical";
      var screen = "hd";

      // todo: add mobile support
      if ((0, _jquery2.default)(window).width() < 768) {
        screen = "mobile";
      }

      // todo
      var pageHeight = 900;

      actions.fetchUserAuthInfo();
      actions.fetchBookInfo(this.bookId, 'books/' + this.bookId);

      (0, _utils.initBook)(this.bookId, actions, pageHeight).then(function (data) {
        if (data === true) {
          // todo
          actions.jumpTo(1);
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

        pagesToRender = (0, _utils.filterPages)({
          startPage: currentPage,
          offset: 2,
          quantity: 5,
          pages: pages
        });
      }

      return _react2.default.createElement(
        'div',
        { className: 'page-book-viewer',
          onMouseMove: this.toggleBookPanel.bind(this) },
        book.isFetchingInfo || book.isFetchingContent ? _react2.default.createElement(_Loading2.default, null) : null,
        this.state.showPanel && book.meta && book.isPagesLoaded === true ? _react2.default.createElement(
          'div',
          { className: 'functions'

          },
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
              book.meta.title
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
        book.mode === 'vertical' ? _react2.default.createElement(
          'div',
          { onWheel: (0, _utils.delayStuff)(this.scrollToLoadPages, 100).bind(this) },
          _react2.default.createElement(_BookPageList2.default, { height: height, view: book.view, bookId: this.bookId, pages: pagesToRender })
        ) : null
      );
    }
  }]);

  return BookViewer;
}(_react.Component);

BookViewer.propTypes = {
  book: _react2.default.PropTypes.object.isRequired
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    book: state.book,
    user: state.user
  };
}, function (dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(actions, dispatch)
  };
})(BookViewer);
