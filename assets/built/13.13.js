webpackJsonp([13],{

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(7);
	
	var _actions = __webpack_require__(8);
	
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

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZVVzZXJzL01hbmFnZVVzZXJzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdDOzs7O0FBQ0g7O0FBR3JDOzs7Ozs7Ozs7O0tBQW1DOzs7QUFFakMsMEJBQWlCLE9BQ2Y7OzsrRkFHZTs7Ozs7O0FBQ1gsa0JBQU0sTUFHTjs7Ozs7QUFDSixpQkFBZSxjQUFPLEtBQU0sTUFBWSxjQUFPLEtBQU0sTUFBWSxjQUFLO0FBRS9ELGtEQUNELDJDQUNJLFdBQVUsV0FBYSw4Q0FDckIsZUFDSiw4QkFBRyxZQUNELDhCQUFHLFlBQVEsT0FDWCw4QkFBRyxZQUFVLFNBQ2IsOEJBQUcsWUFBa0IsaUJBQ3JCLDhCQUFHLFlBQ0EsYUFDTyxZQUFJLGNBQU0sTUFBTztBQUNwQix3QkFDTCw4QkFBRyxRQUFJLEtBQVEsU0FDYiw4QkFBRyxZQUFNLEtBQVMsS0FDbEIsOEJBQUcsWUFBTSxLQUFlLFdBQ3hCLDhCQUFHLFlBQU0sS0FBa0IsY0FDM0IsOEJBQUcsWUFBQyw4QkFBRSxPQUFLLE1BQUksT0FTaEM7Y0FmNEIsQ0FQbkIsQ0FERixDQURGOzs7Ozs7O0FBMEJOLDBCQUE4QixPQUFVO0FBQ3RDLFNBQVUsT0FFSjtTQUNvQixpQkFBWjtTQUViLFFBQVEsTUFERzs7QUFHWixTQUF3QixxQkFBVyxTQUFNO0FBQ3pDLFNBQWlCLG1DQUEwQyxtQkFBSSxJQUFJO2dCQUFZLE1BQUs7TUFBZCxDQUFoQyxHQUFtRDtBQUVuRixZQUFDO0FBS1Q7OzttQkFBc0IseUJBQ0wsaUJBQ2YsRUFDRCx5Q0FBYSxhIiwiZmlsZSI6IjEzLjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZmV0Y2hVc2VyTGlzdCB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5cbmNsYXNzIE1hbmFnZVVzZXJzIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hVc2VyTGlzdCgpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHVzZXJMaXN0QWxsID0gdGhpcy5wcm9wcy51c2VyTGlzdEFsbCA/IHRoaXMucHJvcHMudXNlckxpc3RBbGwgOiBbXVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJpbmZvLXRhYmxlXCI+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+SUQ8L3RoPlxuICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5EYXRlIGNyZWF0ZWQ8L3RoPlxuICAgICAgICAgICAgICA8dGg+QWN0aW9uczwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAge3VzZXJMaXN0QWxsLm1hcCgodXNlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3VzZXIuaWR9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57dXNlci51c2VybmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPnt1c2VyLmRhdGVDcmVhdGVkfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+PGEgaHJlZj1cIiNcIj5EZWxldGU8L2E+PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSB9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gIGNvbnN0IHR5cGUgPSAnYWxsJ1xuXG4gIGNvbnN0IHtcbiAgICBwYWdpbmF0aW9uOiB7IHVzZXJMaXN0IH0sXG4gICAgZW50aXRpZXM6IHsgdXNlcnMgfVxuICB9ID0gc3RhdGVcblxuICBjb25zdCB1c2VyTGlzdFBhZ2luYXRpb24gPSB1c2VyTGlzdFt0eXBlXVxuICBjb25zdCB1c2VyTGlzdEFsbCA9IHVzZXJMaXN0UGFnaW5hdGlvbiA/IHVzZXJMaXN0UGFnaW5hdGlvbi5pZHMubWFwKGlkID0+IHVzZXJzW2lkXSkgOiBbXVxuXG4gIHJldHVybiB7XG4gICAgdXNlckxpc3RBbGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIHsgZmV0Y2hVc2VyTGlzdCB9IGFzIGFueVxuKShNYW5hZ2VVc2VycylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VVc2Vycy9NYW5hZ2VVc2Vycy50c3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9