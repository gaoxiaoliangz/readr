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

var _APIS = require('constants/APIS');

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


var BookViewer = function (_Component) {
  _inherits(BookViewer, _Component);

  function BookViewer(props) {
    _classCallCheck(this, BookViewer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BookViewer).call(this, props));

    _this.bookId = props.params.id;
    _this.state = {
      showPanel: false,
      pageHeight: 900,
      screen: 'hd'
    };
    return _this;
  }

  _createClass(BookViewer, [{
    key: 'scrollToLoadPages',
    value: function scrollToLoadPages(props) {
      var pages = props.book.pages.props.children;
      var pageSum = pages.length;
      var percentage = (document.body.scrollTop / (this.state.pageHeight * pageSum)).toFixed(4);

      props.actions.jumpTo((0, _utils.convertPercentageToPage)(percentage, pageSum));
      (0, _utils.setProgress)(this.bookId, {
        page: this.props.book.currentPage,
        page_sum: pageSum,
        percentage: percentage
      });
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
    key: 'setView',
    value: function setView() {
      this.setState(this.getView());
    }
  }, {
    key: 'getView',
    value: function getView() {
      if ((0, _jquery2.default)(window).width() < 768) {
        return {
          screen: 'phone',
          pageHeight: 600
        };
      } else {
        return {
          screen: 'hd',
          pageHeight: 900
        };
      }
    }
  }, {
    key: 'handleResize',
    value: function handleResize() {
      var _this2 = this;

      this.setView();

      console.log(7878);
      var bookId = this.bookId;
      var actions = this.props.actions;
      var pageHeight = this.getView().pageHeight;
      // todo
      (0, _utils.initBook)(bookId, actions, pageHeight, this.getView().screen).then(function (data) {
        if (data.pages) {
          (0, _utils.getProgress)(bookId).then(function (res) {
            if (!res.message) {
              _this2.addEventListeners();

              // scroll to position and this will trigger JUMP_TO
              document.body.scrollTop = data.pages.props.children.length * pageHeight * res.percentage;
            } else {
              actions.jumpTo(1);
            }
          });
        }
      });
    }
  }, {
    key: 'addEventListeners',
    value: function addEventListeners() {
      this.handleScroll = (0, _utils.delayStuff)(this.scrollToLoadPages.bind(this, this.props), 100).bind(this);
      this.handleResize2 = (0, _utils.delayStuff)(this.handleResize.bind(this), 100).bind(this);

      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.handleResize2);
    }
  }, {
    key: 'removeEventListeners',
    value: function removeEventListeners() {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      this.setView();

      var actions = this.props.actions;
      var bookId = this.bookId;
      var pageHeight = this.getView().pageHeight;
      var screen = this.getView().screen;

      actions.fetchUserAuthInfo();
      actions.fetchBookInfo(this.bookId, 'books/' + this.bookId);

      (0, _utils.initBook)(bookId, actions, pageHeight, screen).then(function (data) {
        if (data.pages) {
          (0, _utils.getProgress)(bookId).then(function (res) {
            if (!res.message) {
              _this3.addEventListeners();

              // scroll to position and this will trigger JUMP_TO
              document.body.scrollTop = data.pages.props.children.length * pageHeight * res.percentage;
            } else {
              actions.jumpTo(1);
            }
          });
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeEventListeners();
    }
  }, {
    key: 'render',
    value: function render() {
      var book = this.props.book;
      var pages = book.pages ? book.pages.props.children : null;
      var pagesToRender = [];
      var height = pages ? pages.length * this.state.pageHeight : '100%';

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
        { className: 'page-book-viewer book-viewer--' + this.state.screen,
          onMouseMove: this.toggleBookPanel.bind(this) },
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
              book.meta.title
            ),
            _react2.default.createElement(
              'span',
              { className: 'loc' },
              book.currentPage + "/" + pages.length
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
          null,
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
