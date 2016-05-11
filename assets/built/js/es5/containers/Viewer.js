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

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _Icon = require('elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Loading = require('components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _Dialog = require('elements/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _BookPageList = require('components/BookPageList');

var _BookPageList2 = _interopRequireDefault(_BookPageList);

var _renderBook2 = require('utils/renderBook');

var _renderBook = _interopRequireWildcard(_renderBook2);

var _callApi = require('utils/callApi');

var _callApi2 = _interopRequireDefault(_callApi);

var _view = require('utils/view');

var _cache = require('utils/cache');

var _object = require('utils/object');

var _actions = require('actions');

var _apis = require('utils/apis');

var _apis2 = _interopRequireDefault(_apis);

var _Body = require('side-effects/Body');

var _Body2 = _interopRequireDefault(_Body);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var actions = { fetchBook: _actions.fetchBook, fetchBookProgress: _actions.fetchBookProgress, userAuth: _actions.userAuth };

var Viewer = function (_Component) {
  _inherits(Viewer, _Component);

  function Viewer(props) {
    _classCallCheck(this, Viewer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Viewer).call(this, props));

    _this.bookId = props.params.id;
    _this.state = {
      showPanel: true,
      showProgressDialog: false,

      isCalculatingDom: false,
      isReadingMode: false,
      isScrollMode: true,
      isInitialProgressSet: false,

      scrollTop: 0,
      currentPage: 0, // TODO: remove?
      calculatedPages: null,
      latestProgress: 0,
      view: (0, _view.getBookView)()
    };
    return _this;
  }

  _createClass(Viewer, [{
    key: 'scrollTo',
    value: function scrollTo(position) {
      var pageCount = this.state.calculatedPages.props.children.length;
      var pageHeight = this.state.calculatedPages.props.view.pageHeight;
      var height = pageCount * pageHeight;

      if (position < 1) {
        this.setState({
          currentPage: _renderBook.percentageToPage(position, pageCount),
          scrollTop: position * height
        });
        document.body.scrollTop = pageCount * pageHeight * position;
      } else {
        this.setState({
          currentPage: position,
          scrollTop: height * position / pageCount
        });
        document.body.scrollTop = pageHeight * position;
      }
    }
  }, {
    key: 'addEventListeners',
    value: function addEventListeners() {
      var _this2 = this;

      this.mapScrollTopToState = function () {
        _this2.setState({
          scrollTop: document.body.scrollTop
        });
      };

      this.mapWindowWidthToState = function () {
        _this2.setState({
          windowWidth: window.innerWidth
        });
      };

      this.mapViewToState = function () {
        _this2.setState({
          view: (0, _view.getBookView)()
        });
      };

      this.checkAndSetProgress = function () {
        var currentPageNo = _this2.props.book.pageNo;
        _this2.props.actions.fetchBookProgress(_this2.bookId).then(function (action) {
          if (_this2.props.book.pageNo - currentPageNo > 5) {
            _this2.setState({
              showProgressDialog: true,
              latestProgress: _this2.props.book.percentage
            });
          } else {
            var pageSum = _this2.state.calculatedPages.props.children.length;
            var height = pageSum * _this2.state.view.pageHeight;
            var percentage = _this2.state.scrollTop / height;
            var pageNo = _renderBook.percentageToPage(percentage, pageSum);

            var progress = {
              pageNo: pageNo,
              pageSum: pageSum,
              percentage: percentage
            };

            _apis2.default.setProgress(_this2.bookId, progress);
          }
        });
      };

      // TODO: use session to determine latest progress
      this.deboundedSetProgress = _.debounce(this.checkAndSetProgress, 200);

      window.addEventListener('scroll', this.deboundedSetProgress);
      window.addEventListener('scroll', this.mapScrollTopToState);
      window.addEventListener('resize', this.mapWindowWidthToState);
      window.addEventListener('resize', this.mapViewToState);
    }
  }, {
    key: 'removeEventListeners',
    value: function removeEventListeners() {
      window.removeEventListener('scroll', this.deboundedSetProgress);
      window.removeEventListener('scroll', this.mapScrollTopToState);
      window.removeEventListener('resize', this.mapWindowWidthToState);
      window.removeEventListener('resize', this.mapViewToState);
    }
  }, {
    key: 'toggleBookPanel',
    value: function toggleBookPanel(event) {
      if (this.state.calculatedPages.props.view.screen === 'hd') {
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
    }
  }, {
    key: 'clickToToggleBookPanel',
    value: function clickToToggleBookPanel() {
      if (this.state.calculatedPages.props.view.screen === 'phone') {
        this.setState({
          showPanel: !this.state.showPanel
        });
      }
    }
  }, {
    key: 'calculateDom',
    value: function calculateDom() {
      var html = this.state.bookHtml;
      var bookId = this.bookId;
      var view = (0, _view.getBookView)();
      var nodeHeights = _renderBook.getNodeHeights(this.refs.bookHtml.childNodes);
      var pages = _renderBook.htmlToPages(html, nodeHeights, view);

      (0, _cache.setCache)('book' + bookId + '_pages', JSON.stringify(pages));

      this.setState({
        isReadingMode: true,
        isCalculatingDom: false,
        calculatedPages: pages
      });
    }
  }, {
    key: 'loadCalculatedPages',
    value: function loadCalculatedPages() {
      var bookId = this.props.params.id;
      var pages = (0, _cache.getCache)('book' + bookId + '_pages');

      // check if pages are cached
      if (pages) {
        pages = JSON.parse(pages);

        this.setState({
          isReadingMode: true,
          calculatedPages: pages,
          bookHtml: _renderBook.pagesToHtml(pages)
        });
      } else {
        this.props.actions.fetchBook(bookId, ['content']);
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextProps.book && nextProps.book.content && nextProps.book.content.html && !this.props.book.content) {
        this.setState({
          isCalculatingDom: true,
          bookHtml: nextProps.book.content.html
        });
      }

      if (!(0, _object.simpleCompareObjects)(this.state.view, nextState.view)) {
        this.setState({
          isCalculatingDom: true
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this3 = this;

      if (this.state.isCalculatingDom && !prevState.isCalculatingDom) {
        this.calculateDom();
      }

      // scroll to previous reading progress when opening a book
      if (this.props.book && this.props.book.percentage && this.state.calculatedPages && !this.state.isInitialProgressSet) {
        setTimeout(function () {
          _this3.scrollTo(_this3.props.book.percentage);
          _this3.setState({
            isInitialProgressSet: true
          });
        }, 1);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var actions = this.props.actions;
      var bookId = this.props.params.id;

      actions.userAuth();
      actions.fetchBook(bookId);
      actions.fetchBookProgress(bookId);

      this.addEventListeners();
      this.loadCalculatedPages();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeEventListeners();
      this.setState({
        isInitialProgressSet: false
      });
    }
  }, {
    key: 'renderBook',
    value: function renderBook() {
      var scrollTop = this.state.scrollTop;
      var calculatedPages = this.state.calculatedPages;
      var bookId = this.props.params.id;
      var view = calculatedPages.props.view;
      var height = calculatedPages.props.children.length * view.pageHeight;
      var currentPage = _renderBook.percentageToPage(scrollTop / height, calculatedPages.props.children.length);

      var pages = _renderBook.filterPages({
        startPage: currentPage,
        offset: 2,
        quantity: 5,
        pages: calculatedPages.props.children
      });

      return _react2.default.createElement(
        'div',
        { onClick: this.clickToToggleBookPanel.bind(this) },
        _react2.default.createElement(_BookPageList2.default, { height: height, view: view, bookId: bookId, pages: pages })
      );
    }
  }, {
    key: 'hideProgressDialog',
    value: function hideProgressDialog() {
      this.setState({
        showProgressDialog: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var book = this.props.book;
      var view = this.state.view;
      var actions = [{
        text: 'Yes',
        function: function _function() {
          _this4.scrollTo.call(_this4, _this4.state.latestProgress);
          _this4.hideProgressDialog.call(_this4);
        }
      }, {
        text: 'No',
        function: this.hideProgressDialog.bind(this)
      }];

      return _react2.default.createElement(
        'div',
        { className: 'viewer viewer--' + view.screen, onMouseMove: this.toggleBookPanel.bind(this) },
        _react2.default.createElement(_Body2.default, { className: 'viewer' }),
        !book.content && !this.state.calculatedPages ? _react2.default.createElement(_Loading2.default, null) : null,
        this.state.showProgressDialog ? _react2.default.createElement(_Dialog2.default, { actions: actions, content: 'are you sure?' }) : null,
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          {
            component: 'div',
            transitionName: 'slide',
            transitionEnterTimeout: 300,
            transitionLeaveTimeout: 300
          },
          this.state.showPanel && this.state.isReadingMode ? _react2.default.createElement(
            'div',
            { className: 'viewer-panel' },
            _react2.default.createElement(
              'div',
              { className: 'container' },
              _react2.default.createElement(
                'div',
                { className: 'back' },
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/' },
                  _react2.default.createElement(_Icon2.default, { name: 'back' }),
                  _react2.default.createElement(
                    'span',
                    null,
                    '返回'
                  )
                )
              ),
              _react2.default.createElement(
                'span',
                { className: 'title' },
                book.title
              )
            )
          ) : null
        ),
        this.state.isCalculatingDom && this.state.bookHtml ? _react2.default.createElement(
          'ul',
          { className: 'pages' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement('div', { ref: 'bookHtml', className: 'content', dangerouslySetInnerHTML: { __html: this.state.bookHtml } })
          )
        ) : null,
        this.state.isReadingMode ? this.renderBook() : null
      );
    }
  }]);

  return Viewer;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
  return {
    book: state.entities.books[ownProps.params.id] ? state.entities.books[ownProps.params.id] : {},
    session: state.session
  };
}, function (dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(actions, dispatch)
  };
})(Viewer);
