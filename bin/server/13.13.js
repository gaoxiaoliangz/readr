exports.ids = [13];
exports.modules = {

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(109);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(275);
	
	var _actions = __webpack_require__(78);
	
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
	            return _react2.default.createElement("div", null, _react2.default.createElement("table", { className: "info-table" }, _react2.default.createElement("tbody", null, _react2.default.createElement("tr", null, _react2.default.createElement("th", null, "ID"), _react2.default.createElement("th", null, "Name"), _react2.default.createElement("th", null, "Date created"), _react2.default.createElement("th", null, "Actions")), userListAll.map(function (user, index) {
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
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchUserList: _actions.fetchUserList })(ManageUsers);

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZVVzZXJzL01hbmFnZVVzZXJzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3Qzs7OztBQUNIOztBQUdyQzs7Ozs7Ozs7OztLQUFtQzs7O0FBRWpDLDBCQUFpQixPQUNmOzs7K0ZBR2U7Ozs7OztBQUNYLGtCQUFNLE1BR047Ozs7O0FBQ0osaUJBQWUsY0FBTyxLQUFNLE1BQVksY0FBTyxLQUFNLE1BQVksY0FBSztBQUUvRCxrREFDRCwyQ0FDSSxXQUFVLFdBQWEsOENBQ3JCLGVBQ0osOEJBQUcsWUFDRCw4QkFBRyxZQUFRLE9BQ1gsOEJBQUcsWUFBVSxTQUNiLDhCQUFHLFlBQWtCLGlCQUNyQiw4QkFBRyxZQUNBLGFBQ08sWUFBSSxjQUFNLE1BQU87QUFDcEIsd0JBQ0wsOEJBQUcsUUFBSSxLQUFRLFNBQ2IsOEJBQUcsWUFBTSxLQUFTLEtBQ2xCLDhCQUFHLFlBQU0sS0FBZSxXQUN4Qiw4QkFBRyxZQUFNLEtBQWtCLGNBQzNCLDhCQUFHLFlBQUMsOEJBQUUsT0FBSyxNQUFJLE9BU2hDO2NBZjRCLENBUG5CLENBREYsQ0FERjs7Ozs7OztBQTBCTiwwQkFBOEIsT0FBVTtBQUN0QyxTQUFVLE9BRUo7U0FDb0IsaUJBQVo7U0FFYixRQUFRLE1BREc7O0FBR1osU0FBd0IscUJBQVcsU0FBTTtBQUN6QyxTQUFpQixtQ0FBMEMsbUJBQUksSUFBSTtnQkFBWSxNQUFLO01BQWQsQ0FBaEMsR0FBbUQ7QUFFbkYsWUFBQztBQUtUOzs7bUJBQXNCLHlCQUNMLGlCQUNmLEVBQ0QseUNBQWEsYSIsImZpbGUiOiIxMy4xMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGZldGNoVXNlckxpc3QgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuXG5jbGFzcyBNYW5hZ2VVc2VycyBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmZldGNoVXNlckxpc3QoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB1c2VyTGlzdEFsbCA9IHRoaXMucHJvcHMudXNlckxpc3RBbGwgPyB0aGlzLnByb3BzLnVzZXJMaXN0QWxsIDogW11cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiaW5mby10YWJsZVwiPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPklEPC90aD5cbiAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICA8dGg+RGF0ZSBjcmVhdGVkPC90aD5cbiAgICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIHt1c2VyTGlzdEFsbC5tYXAoKHVzZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyLmlkfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIudXNlcm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci5kYXRlQ3JlYXRlZH08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCIjXCI+RGVsZXRlPC9hPjwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSkgfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICBjb25zdCB0eXBlID0gJ2FsbCdcblxuICBjb25zdCB7XG4gICAgcGFnaW5hdGlvbjogeyB1c2VyTGlzdCB9LFxuICAgIGVudGl0aWVzOiB7IHVzZXJzIH1cbiAgfSA9IHN0YXRlXG5cbiAgY29uc3QgdXNlckxpc3RQYWdpbmF0aW9uID0gdXNlckxpc3RbdHlwZV1cbiAgY29uc3QgdXNlckxpc3RBbGwgPSB1c2VyTGlzdFBhZ2luYXRpb24gPyB1c2VyTGlzdFBhZ2luYXRpb24uaWRzLm1hcChpZCA9PiB1c2Vyc1tpZF0pIDogW11cblxuICByZXR1cm4ge1xuICAgIHVzZXJMaXN0QWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICB7IGZldGNoVXNlckxpc3QgfSBhcyBhbnlcbikoTWFuYWdlVXNlcnMpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlVXNlcnMvTWFuYWdlVXNlcnMudHN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==