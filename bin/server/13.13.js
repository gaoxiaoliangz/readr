exports.ids = [13];
exports.modules = {

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(255);
	
	var _actions = __webpack_require__(259);
	
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
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchUserList: _actions.fetchUserList })(ManageUsers);

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZVVzZXJzL01hbmFnZVVzZXJzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3Qzs7OztBQUNIOztBQUdyQzs7Ozs7Ozs7OztLQUFtQzs7O0FBRWpDLDBCQUFpQixPQUNmOzs7K0ZBR2U7Ozs7OztBQUNYLGtCQUFNLE1BR047Ozs7O0FBQ0osaUJBQWUsY0FBTyxLQUFNLE1BQVksY0FBSyxLQUFNLE1BQVksY0FBRztBQUUzRCxrREFDRCwyQ0FDSSw2Q0FDRSxlQUNKLDhCQUFHLFlBQ0QsOEJBQUcsWUFBUSxPQUNYLDhCQUFHLFlBQVUsU0FDYiw4QkFBRyxZQUFrQixpQkFDckIsOEJBQUcsWUFDQSxhQUNPLFlBQUksY0FBTSxNQUFPO0FBQ3BCLHdCQUNMLDhCQUFHLFFBQUksS0FBUSxTQUNiLDhCQUFHLFlBQU0sS0FBUyxLQUNsQiw4QkFBRyxZQUFNLEtBQWUsV0FDeEIsOEJBQUcsWUFBTSxLQUFrQixjQUMzQiw4QkFBRyxZQUFDLDhCQUFFLE9BQUssTUFBSSxPQVNoQztjQWY0QixDQVBuQixDQURGLENBREY7Ozs7Ozs7QUEwQk4sMEJBQThCLE9BQVU7QUFDdEMsU0FBVSxPQUVKO1NBQ29CLGlCQUFaO1NBRWIsUUFBUSxNQURHOztBQUdaLFNBQXdCLHFCQUFXLFNBQU07QUFDekMsU0FBaUIsbUNBQXdDLG1CQUFJLElBQUk7Z0JBQVksTUFBSztNQUFkLENBQTlCLEdBQStDO0FBRS9FLFlBQUM7QUFLVDs7O21CQUFzQix5QkFDTCxpQkFDZixFQUNELHlDQUFhLGEiLCJmaWxlIjoiMTMuMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBmZXRjaFVzZXJMaXN0IH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcblxuY2xhc3MgTWFuYWdlVXNlcnMgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5mZXRjaFVzZXJMaXN0KClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgdXNlckxpc3RBbGwgPSB0aGlzLnByb3BzLnVzZXJMaXN0QWxsP3RoaXMucHJvcHMudXNlckxpc3RBbGw6W11cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+SUQ8L3RkPlxuICAgICAgICAgICAgICA8dGQ+TmFtZTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5EYXRlIGNyZWF0ZWQ8L3RkPlxuICAgICAgICAgICAgICA8dGQ+QWN0aW9uczwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAge3VzZXJMaXN0QWxsLm1hcCgodXNlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIuaWR9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci51c2VybmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyLmRhdGVDcmVhdGVkfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+PGEgaHJlZj1cIiNcIj5EZWxldGU8L2E+PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgY29uc3QgdHlwZSA9ICdhbGwnXG5cbiAgY29uc3Qge1xuICAgIHBhZ2luYXRpb246IHsgdXNlckxpc3QgfSxcbiAgICBlbnRpdGllczogeyB1c2VycyB9XG4gIH0gPSBzdGF0ZVxuXG4gIGNvbnN0IHVzZXJMaXN0UGFnaW5hdGlvbiA9IHVzZXJMaXN0W3R5cGVdXG4gIGNvbnN0IHVzZXJMaXN0QWxsID0gdXNlckxpc3RQYWdpbmF0aW9uP3VzZXJMaXN0UGFnaW5hdGlvbi5pZHMubWFwKGlkID0+IHVzZXJzW2lkXSk6W11cblxuICByZXR1cm4ge1xuICAgIHVzZXJMaXN0QWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICB7IGZldGNoVXNlckxpc3QgfSBhcyBhbnlcbikoTWFuYWdlVXNlcnMpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlVXNlcnMvTWFuYWdlVXNlcnMudHN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==