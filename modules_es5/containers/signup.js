'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('muicss/react');

var _reactRouter = require('react-router');

require('whatwg-fetch');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _apiUrls = require('constants/api-urls');

var _branding = require('components/branding');

var _branding2 = _interopRequireDefault(_branding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_Component) {
  _inherits(Signup, _Component);

  function Signup(props) {
    _classCallCheck(this, Signup);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Signup).call(this, props));

    _this.state = {
      username: "",
      password: "",
      status: ""
    };
    return _this;
  }

  _createClass(Signup, [{
    key: 'handleSignup',
    value: function handleSignup(event) {
      event.preventDefault();

      var params = {
        username: this.state.username,
        password: this.state.password
      };

      _jquery2.default.post(_apiUrls.URL_USERS, params, function (json) {
        console.log(json);
        if (json.data) {
          this.setState({
            status: "注册成功"
          });
          location.href = "/";
        } else {
          this.setState({
            status: json.error.msg
          });
        }
      }.bind(this));
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'page-signin' },
        _react2.default.createElement(_branding2.default, null),
        _react2.default.createElement(
          _react3.Container,
          null,
          _react2.default.createElement(
            'div',
            { className: 'auth-status' },
            this.state.status
          ),
          _react2.default.createElement(
            _react3.Form,
            { className: 'content-container', method: 'post', action: '/signup' },
            _react2.default.createElement(
              'h1',
              { className: 'page-title' },
              '加入 Readr'
            ),
            _react2.default.createElement(_react3.Input, { onChange: this.handleInputChange.bind(this), value: this.state.username, name: 'username', label: '用户名', floatingLabel: true }),
            _react2.default.createElement(_react3.Input, { onChange: this.handleInputChange.bind(this), value: this.state.password, name: 'password', label: '密码', floatingLabel: true, type: 'password' }),
            _react2.default.createElement(
              _react3.Button,
              { onClick: this.handleSignup.bind(this), variant: 'raised' },
              '注册'
            ),
            _react2.default.createElement(
              'p',
              { className: 'hint' },
              '没有账号？',
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/signin' },
                '登录'
              )
            )
          )
        )
      );
    }
  }]);

  return Signup;
}(_react.Component);

exports.default = Signup;
