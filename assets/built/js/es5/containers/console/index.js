'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _Container = require('elements/Container');

var _Container2 = _interopRequireDefault(_Container);

var _ConsoleBranding = require('components/ConsoleBranding');

var _ConsoleBranding2 = _interopRequireDefault(_ConsoleBranding);

var _actions = require('actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Console = function (_Component) {
  _inherits(Console, _Component);

  function Console() {
    _classCallCheck(this, Console);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Console).apply(this, arguments));
  }

  _createClass(Console, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchUserAuthInfo();
    }
  }, {
    key: 'render',
    value: function render() {
      var isAdmin = this.props.user.role ? this.props.user.role === 'admin' ? true : false : false;
      var username = this.props.user.username;

      // TODO: getCurrentComponentDisplayName
      console.log(this.props);
      var pageName = this.props.children.props.route.component.WrappedComponent ? this.props.children.props.route.component.WrappedComponent.displayName.toLowerCase() : '404';
      // let pageName = "test"

      console.log(this.props.children.props.route.component);
      // console.log(this.props.children.props);
      return _react2.default.createElement(
        'div',
        { className: "page-" + pageName },
        _react2.default.createElement(_ConsoleBranding2.default, { fluid: true, admin: isAdmin, username: username }),
        _react2.default.createElement(
          _Container2.default,
          null,
          _react2.default.createElement(
            'div',
            { className: 'sidebar-left' },
            _react2.default.createElement(
              'ul',
              { className: 'nav-side nav-side-root' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/console/books' },
                  'Books'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/console/users' },
                  'Users'
                )
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'nav-side nav-side-sub' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/console/books' },
                  'Books'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/console/users' },
                  'Users'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            this.props.children
          )
        )
      );
    }
  }]);

  return Console;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    notification: state.notification,
    user: state.user
  };
}, { handleNotification: _actions.handleNotification, fetchUserAuthInfo: _actions.fetchUserAuthInfo })(Console);
