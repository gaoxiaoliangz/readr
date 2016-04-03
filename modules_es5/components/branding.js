'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _react3 = require('muicss/react');

var _utils = require('utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Branding extends _react.Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthed: false,
      username: '',
      loadingAuthStatus: true
    };
  }

  componentDidMount() {
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

  render() {

    let hidden = 'hidden';
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
          (() => {
            if (this.state.isAuthed) {
              return _react2.default.createElement(
                'ul',
                { className: "right mui-list--inline mui--text-body2 " + hidden },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/#' },
                    this.state.username
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
          })()
        )
      )
    );
  }
}

exports.default = Branding;
