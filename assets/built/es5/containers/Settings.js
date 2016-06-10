'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _index = require('actions/index');

var _NavTab = require('../components/NavTab');

var _NavTab2 = _interopRequireDefault(_NavTab);

var _Body = require('../side-effects/Body');

var _Body2 = _interopRequireDefault(_Body);

var _Switcher = require('../components/Switcher');

var _Switcher2 = _interopRequireDefault(_Switcher);

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
        value: function componentDidMount() {
            this.props.userAuth();
        }
    }, {
        key: 'render',
        value: function render() {
            var user = this.props.session.user;
            return _react2.default.createElement(_Body2.default, { className: "page-settings" }), _react2.default.createElement("div", { className: "settings" }, _react2.default.createElement("div", { className: "page-content" }, _react2.default.createElement("div", { className: "page-header" }, _react2.default.createElement("h1", { className: "page-title" }, "设置"), _react2.default.createElement(_NavTab2.default, { tabs: ['资料', '个人主页'], current: 0 })), _react2.default.createElement("ul", { className: "options" }, _react2.default.createElement("li", { className: "option" }, _react2.default.createElement("h2", null, "用户名"), _react2.default.createElement("span", { className: "option-input" }, "http://readrweb.com/@", _react2.default.createElement("strong", null, user.username)), _react2.default.createElement("span", { className: "edit" }, "编辑")), _react2.default.createElement("li", { className: "option" }, _react2.default.createElement("h2", null, "邮箱"), _react2.default.createElement("span", { className: "option-input" }, user.email), _react2.default.createElement("span", { className: "edit" }, "编辑")), _react2.default.createElement("li", { className: "option" }, _react2.default.createElement("h2", null, "密码"), _react2.default.createElement("span", { className: "option-input" }, "******"), _react2.default.createElement("span", { className: "edit" }, "编辑")), _react2.default.createElement("li", { className: "option" }, _react2.default.createElement("h2", null, "公开展示我的收藏"), _react2.default.createElement("span", { className: "option-desc" }, "关闭后其他用户将无法查看您的收藏"), _react2.default.createElement(_Switcher2.default, { on: true })))));
        }
    }]);

    return Profile;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return {
        notification: state.notification,
        session: state.session
    };
}, { handleNotification: _index.handleNotification, userAuth: _index.userAuth })(Profile);