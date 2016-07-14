'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _index = require('actions/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ManageUsers = function (_Component) {
    _inherits(ManageUsers, _Component);

    function ManageUsers(props) {
        _classCallCheck(this, ManageUsers);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ManageUsers).call(this, props));
    }

    _createClass(ManageUsers, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchUserList();
        }
    }, {
        key: 'render',
        value: function render() {
            var userListAll = this.props.userListAll ? this.props.userListAll : [];
            return _react2.default.createElement("div", null, _react2.default.createElement("table", null, _react2.default.createElement("tbody", null, _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "ID"), _react2.default.createElement("td", null, "Name"), _react2.default.createElement("td", null, "Date created"), _react2.default.createElement("td", null, "Actions")), userListAll.map(function (user, index) {
                return _react2.default.createElement("tr", { key: index }, _react2.default.createElement("td", null, user.id), _react2.default.createElement("td", null, user.username), _react2.default.createElement("td", null, user.dateCreated), _react2.default.createElement("td", null, _react2.default.createElement("a", { href: "#" }, "Delete")));
            }))));
        }
    }]);

    return ManageUsers;
}(_react.Component);

function mapStateToProps(state, ownProps) {
    var type = 'all';
    var userList = state.pagination.userList;
    var users = state.entities.users;

    var userListPagination = userList[type];
    var userListAll = userListPagination ? userListPagination.ids.map(function (id) {
        return users[id];
    }) : [];
    return {
        userListAll: userListAll
    };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchUserList: _index.fetchUserList })(ManageUsers);