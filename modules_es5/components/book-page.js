'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

require('whatwg-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BookPage extends _react.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let page = this.props.page;
    let style = this.props.style;

    return _react2.default.createElement(
      'li',
      { style: style },
      _react2.default.createElement(
        'div',
        { className: 'content' },
        page.props.children.map((node, index) => {
          if (node.type !== "p") {
            console.error("Unsupported content found!");
          }
          return _react2.default.createElement(
            'p',
            _extends({}, node.props.style ? node.props.style.marginTop ? { style: node.props.style } : {} : {}, {
              key: index }),
            node.props.children
          );
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'page-no' },
        page.props.pageNo
      )
    );
  }
}

exports.default = BookPage;
