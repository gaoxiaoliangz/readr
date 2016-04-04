'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

require('whatwg-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookPage = function (_Component) {
  _inherits(BookPage, _Component);

  function BookPage(props) {
    _classCallCheck(this, BookPage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BookPage).call(this, props));
  }

  _createClass(BookPage, [{
    key: 'render',
    value: function render() {
      var page = this.props.page;
      var style = this.props.style;

      return _react2.default.createElement(
        'li',
        { style: style },
        _react2.default.createElement(
          'div',
          { className: 'content' },
          page.props.children.map(function (node, index) {
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
  }]);

  return BookPage;
}(_react.Component);

exports.default = BookPage;
