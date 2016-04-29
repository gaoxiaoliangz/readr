'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _actions = require('actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_Component) {
  _inherits(Profile, _Component);

  // static fetchData({store, params}) {
  //   return store.dispatch(fetch())
  // }

  function Profile(props) {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Profile).call(this, props));
  }

  _createClass(Profile, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'profile' },
        _react2.default.createElement(
          'h1',
          { className: 'title' },
          '个人资料'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'label',
              null,
              '头像'
            ),
            _react2.default.createElement(
              'span',
              { className: 'avatar' },
              'pic'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'label',
              null,
              '用户名'
            ),
            _react2.default.createElement(
              'span',
              null,
              'liang'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'label',
              null,
              '邮箱'
            ),
            _react2.default.createElement(
              'span',
              null,
              'liang@gmail.com'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'label',
              null,
              '密码'
            ),
            _react2.default.createElement(
              'span',
              null,
              '******'
            )
          )
        )
      );
    }
  }]);

  return Profile;
}(_react.Component);

exports.default = Profile;
// export default connect(
//   state => ({
//     notification: state.notification,
//   }),
//   { handleNotification }
// )(Profile)
