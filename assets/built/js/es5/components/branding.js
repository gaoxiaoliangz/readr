'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _react3 = require('muicss/react');

var _utils = require('utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Branding = function (_Component) {
  _inherits(Branding, _Component);

  function Branding(props) {
    _classCallCheck(this, Branding);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Branding).call(this, props));

    _this.state = {
      isAuthed: false,
      username: '',
      loadingAuthStatus: true
    };
    return _this;
  }

  _createClass(Branding, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _utils.checkAuthStatus)().then(function (data) {
        if (data.authed) {
          this.setState({
            username: data.user,
            isAuthed: true,
            loadingAuthStatus: false
          });
        } else {
          this.setState({
            loadingAuthStatus: false
          });
        }
      }.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var hidden = 'hidden';
      if (!this.state.loadingAuthStatus) {
        hidden = '';
      }

      return _react2.default.createElement(
        _react3.Appbar,
        { className: 'mui--z1 branding' },
        _react2.default.createElement(
          _react3.Container,
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h1',
              { className: 'logo left' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/' },
                'readr'
              )
            ),
            function () {
              if (_this2.state.isAuthed) {
                return _react2.default.createElement(
                  'ul',
                  { className: "right mui-list--inline mui--text-body2 " + hidden },
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: '/#' },
                      _this2.state.username
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '/logout' },
                      '退出'
                    )
                  )
                );
              } else {
                return _react2.default.createElement(
                  'ul',
                  { className: "right mui-list--inline mui--text-body2 " + hidden },
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
                );
              }
            }()
          )
        )
      );
    }
  }]);

  return Branding;
}(_react.Component);

exports.default = Branding;
