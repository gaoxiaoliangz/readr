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

var _APIS = require('constants/APIS');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Message = require('components/Message');

var _Message2 = _interopRequireDefault(_Message);

var _Branding = require('components/Branding');

var _Branding2 = _interopRequireDefault(_Branding);

var _actions = require('actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signin = function (_Component) {
  _inherits(Signin, _Component);

  function Signin(props) {
    _classCallCheck(this, Signin);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Signin).call(this, props));

    _this.state = {
      username: "",
      password: "",
      status: ""
    };
    return _this;
  }

  _createClass(Signin, [{
    key: 'handleSignin',
    value: function handleSignin(event) {
      event.preventDefault();

      var params = {
        username: this.state.username,
        password: this.state.password
      };

      _jquery2.default.post(URL_AUTH, params, function (data) {
        console.log(data);
        if (data.authed) {
          this.setState({
            status: "登录成功"
          });
          setTimeout(function () {
            _reactRouter.browserHistory.push('/');
          }, 600);
        } else {
          this.setState({
            status: data.error.msg
          });
          setTimeout(function () {
            this.setState({
              status: null
            });
          }.bind(this), 3000);
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
        _react2.default.createElement(_Branding2.default, null),
        _react2.default.createElement(
          _react3.Container,
          null,
          _react2.default.createElement(
            _react3.Form,
            { className: 'content-container', action: '/signin', method: 'post' },
            _react2.default.createElement(_Message2.default, { content: this.state.status }),
            _react2.default.createElement(
              'h1',
              { className: 'page-title' },
              '欢迎回来'
            ),
            _react2.default.createElement(_react3.Input, { onChange: this.handleInputChange.bind(this), value: this.state.username, name: 'username', hint: '用户名' }),
            _react2.default.createElement(_react3.Input, { onChange: this.handleInputChange.bind(this), value: this.state.password, name: 'password', hint: '密码', type: 'password' }),
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
  }]);

  return Signin;
}(_react.Component);

exports.default = Signin;
