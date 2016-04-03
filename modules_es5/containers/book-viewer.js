'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

class BookViewer extends _react.Component {

  scrollToLoadPages() {
    let pageSum = this.props.book.content.pageSum;
    let percentage = (document.body.scrollTop / (this.props.book.view.style.height * pageSum)).toFixed(4);

    this.props.actions.loadPages((0, _book.convertPercentageToPage)(percentage, pageSum));
  }

  // todo
  toggleBookPanel(e) {
    var y = e.pageY - (0, _jquery2.default)("body").scrollTop();
    var x = e.pageX;

    if (y < 90) {
      (0, _jquery2.default)(".page-book-viewer .functions").slideDown();
    } else if ((0, _jquery2.default)(".dia-wrap").length == 0) {
      (0, _jquery2.default)(".page-book-viewer .functions").slideUp();
    }
  }

  constructor(props) {
    super(props);
    this.bookId = props.params.id;
    this.state = {
      bookName: "loading ..."
    };
  }

  addEventListeners() {
    window.addEventListener("scroll", (0, _utils.delayStuff)(this.scrollToLoadPages, 100).bind(this));
    window.addEventListener("mousemove", this.toggleBookPanel.bind(this));
  }

  componentDidMount() {
    let mode = "VERTICAL";
    let screen = "HD";
    var book = this.props.book;
    let actions = this.props.actions;
    let bookId = this.bookId;
    let url = "/api/v0.1/books/" + bookId;

    // get book info
    fetch(url).then(function (res) {
      return res.json();
    }).then(function (json) {
      this.setState({
        bookName: json.data[0].book_name
      });
    }.bind(this)).catch(err => {
      console.log(err);
    });

    // todo: bug in mobile mode
    if ((0, _jquery2.default)(window).width() < 768) {
      screen = "MOBILE";
    }

    actions.dispatchWrap(function (dispatch, getState) {
      actions.loadBookContentFromCache(bookId);

      // check if content is cached
      if (getState().book.content.cacheReadingState !== 'SUCCESS') {
        actions.fetchBookContent(bookId).then(getState => {
          actions.setViewMode(mode);
          actions.setViewScreen(screen);
          actions.calculateBookContent(getState().book.content.nodes, getState().book.view.style.height);
          actions.cacheBookContent(bookId, getState().book.content);
          actions.cacheView(bookId, getState().book.view);
          actions.loadPages(1);
          this.addEventListeners();
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

  render() {
    let book = this.props.book;
    let pages = [];
    let quantity = 5;
    let startPage = 1;
    let offset = 2;
    let height = "100%";

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
          (() => {
            if (book.content.nodes.length) {
              return _react2.default.createElement(
                'span',
                { className: 'loc' },
                book.currentPage + "/" + book.content.pageSum
              );
            }
          })()
        )
      ),
      (() => {
        if (book.content.nodes.length) {
          return _react2.default.createElement(_bookPageList2.default, { isCalculated: book.content.isCalculated, height: height, view: book.view, bookId: this.bookId, pages: pages });
        }
      })()
    );
  }
}

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
