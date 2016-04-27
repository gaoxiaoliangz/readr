'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _utils = require('utils');

var _Container = require('elements/Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConsoleBranding = function (_Component) {
  _inherits(ConsoleBranding, _Component);

  function ConsoleBranding() {
    _classCallCheck(this, ConsoleBranding);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ConsoleBranding).apply(this, arguments));
  }

  _createClass(ConsoleBranding, [{
    key: 'render',
    value: function render() {
      var username = this.props.username;
      var isAdmin = this.props.admin ? this.props.admin : 'false';

      return _react2.default.createElement(
        'div',
        { className: 'branding console-branding' },
        _react2.default.createElement(
          _Container2.default,
          { fluid: true, className: 'clearfix' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h1',
              { className: 'logo left' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/console' },
                'readr'
              ),
              _react2.default.createElement(
                'span',
                { className: 'sep' },
                '|'
              ),
              _react2.default.createElement(
                'span',
                { className: 'sub' },
                'Console'
              )
            ),
            username ? _react2.default.createElement(
              'div',
              { className: 'nav right' },
              _react2.default.createElement(
                'span',
                { className: 'username' },
                username,
                isAdmin ? _react2.default.createElement(
                  'span',
                  { className: 'badge-dark' },
                  'Admin'
                ) : null
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/profile/' + username },
                    '我的账号'
                  )
                ),
                isAdmin === true ? _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: '/console' },
                    'Console'
                  )
                ) : null,
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: '/logout' },
                    '退出'
                  )
                )
              )
            ) : _react2.default.createElement(
              'div',
              { className: 'nav right' },
              _react2.default.createElement(
                'ul',
                { className: 'nav-links' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/signin' },
                    '登录'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/signup' },
                    '注册'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ConsoleBranding;
}(_react.Component);

exports.default = ConsoleBranding;
