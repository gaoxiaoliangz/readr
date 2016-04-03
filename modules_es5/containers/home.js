'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _react3 = require('muicss/react');

require('whatwg-fetch');

var _branding = require('components/branding');

var _branding2 = _interopRequireDefault(_branding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Home extends _react.Component {

  render() {
    return _react2.default.createElement(
      'div',
      { className: 'page-home' },
      _react2.default.createElement(_branding2.default, null),
      _react2.default.createElement(
        _react3.Container,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            { className: 'page-title' },
            'This is home, bitch!!!!'
          ),
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/bookstore' },
                '查看书城'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/addbook' },
                '添加书籍'
              )
            )
          )
        )
      )
    );
  }
}

exports.default = Home;
