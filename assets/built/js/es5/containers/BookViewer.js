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

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _utils = require('utils');

var _actions = require('actions');

var actions = _interopRequireWildcard(_actions);

var _APIS = require('constants/APIS');

var _BookPageList = require('components/BookPageList');

var _BookPageList2 = _interopRequireDefault(_BookPageList);

var _Loading = require('components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var windowWidth = (0, _jquery2.default)(window).width();

var BookViewer = function (_Component) {
  _inherits(BookViewer, _Component);

  function BookViewer(props) {
    _classCallCheck(this, BookViewer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BookViewer).call(this, props));

    _this.bookId = props.params.id;
    _this.state = {
      showPanel: false,
      isListenersAdded: false
    };
    return _this;
  }

  // props have to be loaded and updated simultaneously
  // so it's better to put it in React component


  _createClass(BookViewer, [{
    key: 'scrollToLoadPages',
    value: function scrollToLoadPages() {
      var props = this.props;
      var pages = props.book.pages.props.children;
      var pageSum = pages.length;
      var percentage = (document.body.scrollTop / (props.book.pages.props.view.pageHeight * pageSum)).toFixed(4);
      var page = (0, _utils.convertPercentageToPage)(percentage, pageSum);

      props.actions.jumpTo(page);
      if (this.props.user.authed) {
        (0, _utils.setProgress)(props.book.id, {
          page: page,
          page_sum: pageSum,
          percentage: percentage
        });
      }
    }
  }, {
    key: 'prepareBook',
    value: function prepareBook(bookId, props, view) {
      var _this2 = this;

      var actions = props.actions;
      var user = props.user;

      (0, _utils.initBook)(bookId, actions, view).then(function (data) {
        if (data.pages) {
          if (user.authed) {
            (0, _utils.getProgress)(bookId).then(function (res) {
              if (!res.message) {
                actions.jumpTo(res.page);
                document.body.scrollTop = data.pages.props.children.length * view.pageHeight * res.percentage;
              } else {
                actions.jumpTo(1);
              }
              _this2.setState({
                isLoading: false
              });
            }).catch(function (err) {
              _this2.setState({
                isLoading: false
              });
              actions.jumpTo(1);
            });
          } else {
            _this2.setState({
              isLoading: false
            });
            actions.jumpTo(1);
            // this is a bad fix
            // localstorage solution is recommended
            document.body.scrollTop = document.body.scrollTop + 1;
          }
        }
      });
    }
  }, {
    key: 'addEventListeners',
    value: function addEventListeners() {
      var timers = [];

      function lazilize(callback, t) {
        var _this3 = this;

        return function () {
          clearTimeout(timers.slice(-1)[0]);

          var timer = setTimeout(callback.bind(_this3), t);
          timers.push(timer);
        };
      }

      this.handleScroll = lazilize(this.scrollToLoadPages.bind(this), 100);
      this.handleResize = function () {
        var view = (0, _utils.getView)();

        if ((0, _jquery2.default)(window).width() !== windowWidth) {
          this.setState({
            isLoading: true
          });

          windowWidth = (0, _jquery2.default)(window).width();
          lazilize(this.prepareBook.bind(this, this.bookId, this.props, view), 500)();
        }
      }.bind(this);

      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: 'removeEventListeners',
    value: function removeEventListeners() {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleResize);
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
      var _this4 = this;

      var actions = this.props.actions;
      var bookId = this.bookId;

      actions.fetchUserAuthInfo();
      actions.fetchBookInfo(bookId, 'books/' + this.bookId).then(function (getState) {
        _this4.prepareBook(bookId, Object.assign({}, { actions: actions }, getState()), (0, _utils.getView)());
      });

      this.addEventListeners();
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
      var view = this.props.view;
      var height = pages ? pages.length * view.pageHeight : '100%';

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
        { className: 'page-book-viewer book-viewer--' + view.screen,
          onMouseMove: this.toggleBookPanel.bind(this) },
        this.state.isLoading || book.isFetchingInfo || book.isFetchingContent ? _react2.default.createElement(_Loading2.default, null) : null,
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
    user: state.user,
    view: state.view
  };
}, function (dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(actions, dispatch)
  };
})(BookViewer);
