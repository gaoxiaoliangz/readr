'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

class Signup extends _react.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      status: ""
    };
  }

  handleSignup(event) {
    event.preventDefault();

    let params = {
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

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
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
}

exports.default = Signup;
