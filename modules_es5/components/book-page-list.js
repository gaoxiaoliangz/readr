'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _styles = require('constants/styles');

var styles = _interopRequireWildcard(_styles);

var _bookPage = require('components/book-page');

var _bookPage2 = _interopRequireDefault(_bookPage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BookPageList extends _react.Component {

  render() {
    let style = styles.BOOK_HD_STYLE;
    if (this.props.view.mode === "MOBILE") {
      style = styles.BOOK_MOBILE_STYLE;
    }

    if (!this.props.isCalculated) {
      style.height = "100%";
    }

    return _react2.default.createElement(
      'div',
      { className: 'pages' },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'ul',
          { style: { height: this.props.height } },
          this.props.pages.map((page, index) => {
            if (page.type === "page") {
              style = Object.assign({}, style, page.props.style);
              return _react2.default.createElement(_bookPage2.default, { style: style, bookId: this.props.bookId, key: index, page: page });
            } else {
              console.error("Not type page!");
            }
          })
        )
      )
    );
  }
}

exports.default = BookPageList;
