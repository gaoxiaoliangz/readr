'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _Container = require('elements/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Icon = require('elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _ConsoleBranding = require('components/ConsoleBranding');

var _ConsoleBranding2 = _interopRequireDefault(_ConsoleBranding);

var _index = require('actions/index');

var _Notification = require('components/Notification');

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var menuMapping = [{
    component: 'books',
    displayName: '',
    path: 'console/managebooks',
    subMenu: [{
        component: 'managebooks',
        displayName: 'Manage Books',
        path: 'console'
    }, {
        component: 'addbook',
        displayName: 'Add Book',
        path: 'console/addbook'
    }, {
        component: 'addcollection',
        displayName: 'Add Collection',
        path: 'console/collection/new'
    }]
}, {
    component: 'users',
    displayName: '',
    path: 'console/manageusers',
    subMenu: [{
        component: 'manageusers',
        displayName: 'Manage Users',
        path: 'console/manageusers'
    }]
}, {
    component: 'database',
    displayName: '',
    path: 'console/managebooks',
    subMenu: []
}, {
    component: 'statistics',
    displayName: '',
    path: 'console/managebooks',
    subMenu: []
}];

var Console = function (_Component) {
    _inherits(Console, _Component);

    function Console() {
        _classCallCheck(this, Console);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Console).apply(this, arguments));
    }

    _createClass(Console, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.userAuth();
        }
    }, {
        key: 'renderMenu',
        value: function renderMenu(menuMapping, currentPath) {
            var currentMenu = {
                rootIndex: 0,
                subIndex: 0
            };
            menuMapping.forEach(function (item, rootIndex) {
                var subIndex = void 0;
                var result = item.subMenu.filter(function (item, index) {
                    if (item.path === currentPath) {
                        subIndex = index;
                        return true;
                    }
                });
                if (result.length > 0) {
                    currentMenu.rootIndex = rootIndex;
                    currentMenu.subIndex = subIndex;
                }
            });
            var rootMenu = _react2.default.createElement("ul", { className: "nav-side nav-side-root" }, menuMapping.map(function (menu, index) {
                var className = 'menu-' + menu.component;
                if (index === currentMenu.rootIndex) {
                    className += ' current';
                }
                return _react2.default.createElement("li", { key: index, className: className }, _react2.default.createElement(_reactRouter.Link, { to: '/' + menu.path }, _react2.default.createElement(_Icon2.default, { name: menu.component })));
            }));
            var subMenu = _react2.default.createElement("ul", { className: "nav-side nav-side-sub" }, menuMapping[currentMenu.rootIndex].subMenu.map(function (menu, index) {
                var className = 'menu-' + menu.component;
                if (index === currentMenu.subIndex) {
                    className += ' current';
                }
                return _react2.default.createElement("li", { key: index, className: className }, _react2.default.createElement(_reactRouter.Link, { to: '/' + menu.path }, menu.displayName));
            }));
            return _react2.default.createElement("div", { className: "sidebar-left" }, rootMenu, subMenu);
        }
    }, {
        key: 'render',
        value: function render() {
            var isAdmin = this.props.session.user.role === 'admin' ? true : false;
            var username = this.props.session.user.username ? this.props.session.user.username : null;
            var pathname = this.props.routing.locationBeforeTransitions ? this.props.routing.locationBeforeTransitions.pathname : 'console';
            return _react2.default.createElement("div", null, _react2.default.createElement(_ConsoleBranding2.default, { isAdmin: isAdmin, username: username }), _react2.default.createElement(_Container2.default, { isFluid: true }, _react2.default.createElement(_Notification2.default, { notification: this.props.notification }), this.renderMenu(menuMapping, pathname), _react2.default.createElement("div", { className: "content" }, this.props.children)));
        }
    }]);

    return Console;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return {
        notification: state.components.notification,
        session: state.session,
        routing: state.routing
    };
}, { handleNotification: _index.handleNotification, userAuth: _index.userAuth })(Console);