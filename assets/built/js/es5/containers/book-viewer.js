'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _bookPageList = require('components/book-page-list');

var _bookPageList2 = _interopRequireDefault(_bookPageList);

var _actions = require('actions');

var actions = _interopRequireWildcard(_actions);

var _filters = require('utils/filters');

var _book = require('utils/book');

var _utils = require('utils');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookViewer = function (_Component) {
  _inherits(BookViewer, _Component);

  _createClass(BookViewer, [{
    key: 'scrollToLoadPages',
    value: function scrollToLoadPages() {
      var pageSum = this.props.book.content.pageSum;
      var percentage = (document.body.scrollTop / (this.props.book.view.style.height * pageSum)).toFixed(4);

      this.props.actions.loadPages((0, _book.convertPercentageToPage)(percentage, pageSum));
    }

    // todo

  }, {
    key: 'toggleBookPanel',
    value: function toggleBookPanel(e) {
      var y = e.pageY - (0, _jquery2.default)("body").scrollTop();
      var x = e.pageX;

      if (y < 90) {
        (0, _jquery2.default)(".page-book-viewer .functions").slideDown();
      } else if ((0, _jquery2.default)(".dia-wrap").length == 0) {
        (0, _jquery2.default)(".page-book-viewer .functions").slideUp();
      }
    }
  }]);

  function BookViewer(props) {
    _classCallCheck(this, BookViewer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BookViewer).call(this, props));

    _this.bookId = props.params.id;
    _this.state = {
      bookName: "loading ..."
    };
    return _this;
  }

  _createClass(BookViewer, [{
    key: 'addEventListeners',
    value: function addEventListeners() {
      window.addEventListener("scroll", (0, _utils.delayStuff)(this.scrollToLoadPages, 100).bind(this));
      window.addEventListener("mousemove", this.toggleBookPanel.bind(this));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var mode = "VERTICAL";
      var screen = "HD";
      var book = this.props.book;
      var actions = this.props.actions;
      var bookId = this.bookId;

      // todo
      var url = "/api/v0.1/books/" + bookId;

      // get book info
      fetch(url).then(function (res) {
        return res.json();
      }).then(function (json) {
        this.setState({
          bookName: json.data[0].book_name
        });
      }.bind(this)).catch(function (err) {
        console.log(err);
      });

      // todo: bug in mobile mode
      if ((0, _jquery2.default)(window).width() < 768) {
        screen = "MOBILE";
      }

      actions.dispatchWrap(function (dispatch, getState) {
        var _this2 = this;

        actions.loadBookContentFromCache(bookId);

        // check if content is cached
        if (getState().book.content.cacheReadingState !== 'SUCCESS') {
          actions.fetchBookContent(bookId).then(function (getState) {
            actions.setViewMode(mode);
            actions.setViewScreen(screen);
            actions.calculateBookContent(getState().book.content.nodes, getState().book.view.style.height);
            actions.cacheBookContent(bookId, getState().book.content);
            actions.cacheView(bookId, getState().book.view);
            actions.loadPages(1);
            _this2.addEventListeners();
          });
        } else {
          actions.loadViewFromCache(bookId);

          // check if view is cached
          if (getState().book.view.cacheReadingState !== 'SUCCESS') {
            actions.setViewMode(mode);
            actions.setViewScreen(screen);
            actions.cacheView(bookId, getState().book.view);
          }

          actions.loadPages(1);
          this.addEventListeners();
        }
      }.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var book = this.props.book;
      var pages = [];
      var quantity = 5;
      var startPage = 1;
      var offset = 2;
      var height = "100%";

      if (book.content.nodes.length) {
        if (book.isPagesLoaded) {
          pages = (0, _filters.genPageList)(book.currentPage, quantity, offset, book.content.nodes, { pageHeight: book.view.style.height });
          height = book.content.pageSum * book.view.style.height;
        } else {
          pages = [{
            props: {
              children: book.content.nodes,
              pageNo: "NA"
            },
            type: "page"
          }];
        }
      }

      return _react2.default.createElement(
        'div',
        { className: 'page-book-viewer' },
        _react2.default.createElement(
          'div',
          { className: 'functions', style: { display: "none" } },
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
              this.state.bookName
            ),
            function () {
              if (book.content.nodes.length) {
                return _react2.default.createElement(
                  'span',
                  { className: 'loc' },
                  book.currentPage + "/" + book.content.pageSum
                );
              }
            }()
          )
        ),
        function () {
          if (book.content.nodes.length) {
            return _react2.default.createElement(_bookPageList2.default, { isCalculated: book.content.isCalculated, height: height, view: book.view, bookId: _this3.bookId, pages: pages });
          }
        }()
      );
    }
  }]);

  return BookViewer;
}(_react.Component);

function mapStateToProps(state) {
  return {
    book: state.book
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(actions, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BookViewer);
