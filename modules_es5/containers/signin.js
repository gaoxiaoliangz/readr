'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('muicss/react');

var _reactRouter = require('react-router');

require('whatwg-fetch');

var _apiUrls = require('constants/api-urls');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _branding = require('components/branding');

var _branding2 = _interopRequireDefault(_branding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Signin extends _react.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      status: ""
    };
  }

  handleSignin(event) {
    event.preventDefault();

    let params = {
      username: this.state.username,
      password: this.state.password
    };

    _jquery2.default.post(_apiUrls.URL_AUTH, params, function (data) {
      console.log(data);
      if (data.authed) {
        this.setState({
          status: "登录成功"
        });

        location.href = "/";
      } else {
        this.setState({
          status: data.error.msg
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
          { className: 'content-container', action: '/signin', method: 'post' },
          _react2.default.createElement(
            'h1',
            { className: 'page-title' },
            '欢迎回来'
          ),
          _react2.default.createElement(_react3.Input, { onChange: this.handleInputChange.bind(this), value: this.state.username, name: 'username', label: '用户名', floatingLabel: true }),
          _react2.default.createElement(_react3.Input, { onChange: this.handleInputChange.bind(this), value: this.state.password, name: 'password', label: '密码', floatingLabel: true, type: 'password' }),
          _react2.default.createElement(
            _react3.Button,
            { onClick: this.handleSignin.bind(this), variant: 'raised' },
            '登录'
          ),
          _react2.default.createElement(
            'p',
            { className: 'hint' },
            '没有账号？',
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/signup' },
              '注册'
            )
          )
        )
      )
    );
  }
}

exports.default = Signin;
