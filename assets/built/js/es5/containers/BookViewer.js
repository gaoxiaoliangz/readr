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

  // props have to be loaded and updated simultaneously
  // so it's better to put it in React component
  // scrollToLoadPages() {
  //   let props = this.props
  //   let pages = props.book.pages.props.children
  //   let pageSum = pages.length
  //   let percentage = Number((document.body.scrollTop/(props.book.pages.props.view.pageHeight*pageSum)).toFixed(4))
  //   let page = convertPercentageToPage(percentage, pageSum)
  //   let tolerance = 2
  //   let progress = {
  //     pageNo: page,
  //     pageSum: pageSum,
  //     percentage
  //   }
  //   currentProgress = progress
  //
  //   props.actions.jumpTo(page)
  //   if(this.props.user.authed) {
  //     getProgress(this.bookId).then(res => {
  //       if(_.isEmpty(res)) {
  //         setProgress(props.book.id, progress)
  //       } else {
  //         latestProgress = res
  //
  //         if(percentage + tolerance/pageSum <= res.percentage && !isResolvingProgressRejection) {
  //           props.actions.showConfirm('是否跳转到最新进度？')
  //         } else {
  //           setProgress(this.bookId, progress)
  //           isResolvingProgressRejection = false
  //         }
  //       }
  //     })
  //   }
  // }

  // scrollTo(position) {
  //   let props = this.props
  //
  //   if(position < 1) {
  //     props.actions.jumpTo(convertPercentageToPage(position, props.book.pages.props.children.length))
  //     document.body.scrollTop = props.book.pages.props.children.length * props.book.pages.props.view.pageHeight * position
  //   }else{
  //     props.actions.jumpTo(position)
  //     document.body.scrollTop = props.book.pages.props.view.pageHeight * position
  //   }
  // }

  // prepareBook(bookId, props, view) {
  //   let actions = props.actions
  //   let user = props.user
  //
  //   initBook(bookId, actions, view).then(book => {
  //     if(book.pages) {
  //       if(user.authed) {
  //         getProgress(bookId).then(res => {
  //           this.scrollTo(res.percentage)
  //           this.setState({ isLoading: false })
  //         }, err => {
  //           this.setState({ isLoading: false })
  //           actions.jumpTo(1)
  //         })
  //       }else{
  //         this.setState({ isLoading: false })
  //         actions.jumpTo(1)
  //         // this is a bad fix
  //         // localstorage solution is recommended
  //         document.body.scrollTop = document.body.scrollTop + 1
  //       }
  //     }
  //   })
  // }

  _createClass(BookViewer, [{
    key: 'addEventListeners',
    value: function addEventListeners() {
      var _this2 = this;

      // let timers = []

      // function lazilize(callback, t) {
      //   return () => {
      //     clearTimeout(timers.slice(-1)[0])
      //
      //     let timer = setTimeout(callback.bind(this), t)
      //     timers.push(timer)
      //   }
      // }
      //
      // this.handleScroll = lazilize(this.scrollToLoadPages.bind(this), 100)
      // this.handleResize = () => {
      //   let view = getView()
      //
      //   if(window.innerWidth !== windowWidth) {
      //     this.setState({
      //       isLoading: true
      //     })
      //
      //     windowWidth = window.innerWidth
      //     lazilize(this.prepareBook.bind(this, this.bookId, this.props, view), 500)()
      //   }
      // }

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

      // window.addEventListener('scroll', () => {
      //   this.setState({
      //     scrollTop: document.body.scrollTop
      //   })
      //
      //   // getProgress(this.props.book.id).then(res => {
      //   //   latestProgress = res.page_no
      //   // })
      // })

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
    key: 'calculateDom',
    value: function calculateDom() {
      var html = this.state.bookHtml;
      var bookId = this.bookId;
      var view = (0, _utils.getView)();
      // TODO: ref?
      var nodeHeights = _renderBook.getNodeHeights(document.querySelector('ul.pages>li>.content').childNodes);

      var pages = _renderBook.htmlToPages(html, nodeHeights, view);

      (0, _utils.setCache)('book' + bookId + '_pages', JSON.stringify(pages));

      console.log('calculated');

      this.setState({
        isReadingMode: true,
        isCalculatingDom: false,
        calculatedPages: pages
      });
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      // let view = getView()
      //
      // if(nextState.windowWidth < 700 ) {
      //   console.log('update');
      // }
      if (!utils.compareObjects(this.state.view, nextState.view)) {
        console.log('update');
        this.setState({
          isCalculatingDom: true,
          fuck: 'yeah'
        });
        // this.calculateDom()
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.isCalculatingDom && !prevState.isCalculatingDom) {
        this.calculateDom();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      var actions = this.props.actions;
      var bookId = this.props.params.id;

      actions.fetchUserAuthInfo();
      actions.fetchBookInfo(bookId);

      this.addEventListeners();

      var pages = (0, _utils.getCache)('book' + bookId + '_pages');

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
            _react2.default.createElement('div', { className: 'content', dangerouslySetInnerHTML: { __html: book.html } })
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
