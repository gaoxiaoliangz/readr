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

var _actions = require('actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = function (_Component) {
  _inherits(Template, _Component);

  function Template() {
    _classCallCheck(this, Template);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Template).apply(this, arguments));
  }

  _createClass(Template, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchUserAuthInfo();
    }
  }, {
    key: 'render',
    value: function render() {
      var spanStyle = { color: "white", marginTop: 12, marginRight: 20, fontSize: "16px", display: "inline-block" };

      return _react2.default.createElement(
        'div',
        { className: 'page-home' },
        _react2.default.createElement(
          Container,
          { style: { width: "100%", paddingLeft: "276px", paddingTop: 84, paddingBottom: 30, paddingRight: 30, boxSizing: "border-box" } },
          this.props.children
        )
      );
    }
  }]);

  return Template;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    notification: state.notification,
    user: state.user
  };
}, { handleNotification: _actions.handleNotification, fetchUserAuthInfo: _actions.fetchUserAuthInfo })(Template);
