'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _Branding = require('components/Branding');

var _Branding2 = _interopRequireDefault(_Branding);

var _Container = require('elements/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Colophon = require('components/Colophon');

var _Colophon2 = _interopRequireDefault(_Colophon);

var _actions = require('actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.userAuth();
    }
  }, {
    key: 'render',
    value: function render() {
      var isAdmin = false;
      var username = null;

      if (this.props.session.user.role !== 'visitor') {
        isAdmin = this.props.session.user.role === 'admin' ? true : false;
        username = this.props.session.user.username;
      }

      var pageName = this.props.children.props.route.component.WrappedComponent ? this.props.children.props.route.component.WrappedComponent.displayName.toLowerCase() : this.props.children.props.route.component.displayName.toLowerCase();

      return _react2.default.createElement(
        'div',
        { className: "page-" + pageName },
        _react2.default.createElement(_Branding2.default, { isAdmin: isAdmin, username: username }),
        _react2.default.createElement(
          _Container2.default,
          null,
          this.props.children
        ),
        _react2.default.createElement(_Colophon2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    notification: state.notification,
    session: state.session
  };
}, { handleNotification: _actions.handleNotification, userAuth: _actions.userAuth })(App);
