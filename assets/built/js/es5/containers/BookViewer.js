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

var _utils = require('utils');

var utils = _interopRequireWildcard(_utils);

var _actions = require('actions');

var actions = _interopRequireWildcard(_actions);

var _APIS = require('constants/APIS');

var _BookPageList = require('components/BookPageList');

var _BookPageList2 = _interopRequireDefault(_BookPageList);

var _Loading = require('components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _Confirm = require('components/Confirm');

var _Confirm2 = _interopRequireDefault(_Confirm);

var _Icon = require('elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _renderBook2 = require('utils/renderBook');

var _renderBook = _interopRequireWildcard(_renderBook2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var windowWidth = void 0;
if (typeof window !== 'undefined') {
  windowWidth = window.innerWidth;
}

var latestProgress = {};
var currentProgress = {};
var isResolvingProgressRejection = false;

var BookViewer = function (_Component) {
  _inherits(BookViewer, _Component);

  function BookViewer(props) {
    _classCallCheck(this, BookViewer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BookViewer).call(this, props));

    _this.bookId = props.params.id;
    _this.state = {
      scrollTop: 0,
      currentPage: 0,
      showPanel: true,
      isListenersAdded: false,
      isCalculatingDom: false,
      isReadingMode: false,
      isScrollMode: true,
      calculatedPages: null,
      view: (0, _utils.getView)()
    };
    return _this;
  }

  _createClass(BookViewer, [{
    key: 'scrollTo',
    value: function scrollTo(position) {
      var pageCount = this.state.calculatedPages.props.children.length;
      var pageHeight = this.state.calculatedPages.props.view.pageHeight;
      var height = pageCount * pageHeight;

      if (position < 1) {
        this.setState({
          currentPage: (0, _utils.convertPercentageToPage)(position, pageCount),
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
          view: (0, _utils.getView)()
        });
      };

      window.addEventListener('scroll', this.mapScrollTopToState);
      window.addEventListener('resize', this.mapWindowWidthToState);
      window.addEventListener('resize', this.mapViewToState);
    }
  }, {
    key: 'removeEventListeners',
    value: function removeEventListeners() {
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
      console.log('calculating dom ...');
      var html = this.state.bookHtml;
      var bookId = this.bookId;
      var view = (0, _utils.getView)();
      // console.log(this.refs.bookHtml.childNodes);
      // let nodeHeights = renderBook.getNodeHeights(document.querySelector('ul.pages>li>.content').childNodes)
      var nodeHeights = _renderBook.getNodeHeights(this.refs.bookHtml.childNodes);

      var pages = _renderBook.htmlToPages(html, nodeHeights, view);

      (0, _utils.setCache)('book' + bookId + '_pages', JSON.stringify(pages));

      this.setState({
        isReadingMode: true,
        isCalculatingDom: false,
        calculatedPages: pages
      });
    }
  }, {
    key: 'loadCalculatedPages',
    value: function loadCalculatedPages() {
      var _this3 = this;

      var pages = (0, _utils.getCache)('book' + bookId + '_pages');
      var bookId = this.props.params.id;

      // check if pages are cached
      if (pages) {
        pages = JSON.parse(pages);

        this.setState({
          isReadingMode: true,
          calculatedPages: pages,
          bookHtml: _renderBook.pagesToHtml(pages)
        });
      } else {
        this.props.actions.fetchBookContent(bookId).then(function (res) {
          _this3.setState({
            isCalculatingDom: true,
            bookHtml: res.response.html
          });
        });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (!utils.compareObjects(this.state.view, nextState.view)) {
        console.log('update');
        this.setState({
          isCalculatingDom: true
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this4 = this;

      if (this.state.isCalculatingDom && !prevState.isCalculatingDom) {
        this.calculateDom();
      }
      if (this.state.calculatedPages && !prevState.calculatedPages) {
        setTimeout(function () {
          _this4.scrollTo(10);
        }, 1);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // if(this.props.confirm.isVisible === true) {
      //   if(nextProps.confirm.result === 'yes') {
      //     this.scrollTo(latestProgress.percentage)
      //   }
      //   if(nextProps.confirm.result === 'no') {
      //     isResolvingProgressRejection = true
      //     this.scrollTo(currentProgress.percentage)
      //   }
      // }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var actions = this.props.actions;
      var bookId = this.props.params.id;

      actions.fetchUserAuthInfo();
      actions.fetchBookInfo(bookId);
      actions.fetchBookProgress(bookId);

      this.addEventListeners();
      this.loadCalculatedPages();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeEventListeners();
    }
  }, {
    key: 'renderBook',
    value: function renderBook() {
      var scrollTop = this.state.scrollTop;
      var calculatedPages = this.state.calculatedPages;
      var bookId = this.props.params.id;
      var view = calculatedPages.props.view;
      var height = calculatedPages.props.children.length * view.pageHeight;
      var currentPage = _renderBook.convertPercentageToPage(scrollTop / height, calculatedPages.props.children.length);

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
    key: 'render',
    value: function render() {
      var book = this.props.book;
      var view = this.state.view;

      return _react2.default.createElement(
        'div',
        { className: 'viewer viewer--' + view.screen, onMouseMove: this.toggleBookPanel.bind(this) },
        _react2.default.createElement(_Confirm2.default, { confirm: this.props.confirm }),
        this.state.isLoading || book.isFetchingInfo || book.isFetchingContent ? _react2.default.createElement(_Loading2.default, null) : null,
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          {
            component: 'div',
            transitionName: 'slide',
            transitionEnterTimeout: 300,
            transitionLeaveTimeout: 300
          },
          this.state.showPanel && this.state.isReadingMode && book.meta ? _react2.default.createElement(
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
                book.meta.title
              ),
              _react2.default.createElement(
                'div',
                { className: 'preference' },
                _react2.default.createElement(_Icon2.default, { name: 'font' })
              )
            )
          ) : null
        ),
        this.state.isCalculatingDom && book.html ? _react2.default.createElement(
          'ul',
          { className: 'pages' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement('div', { ref: 'bookHtml', className: 'content', dangerouslySetInnerHTML: { __html: book.html } })
          )
        ) : null,
        this.state.isReadingMode ? this.renderBook() : null
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
    view: state.view,
    confirm: state.confirm
  };
}, function (dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(actions, dispatch)
  };
})(BookViewer);
