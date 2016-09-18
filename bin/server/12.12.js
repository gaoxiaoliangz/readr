exports.ids = [12];
exports.modules = {

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(93);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(259);
	
	var _DocContainer = __webpack_require__(256);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _apis = __webpack_require__(393);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _actions = __webpack_require__(263);
	
	var _reactCssModules = __webpack_require__(274);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	
	var styles = __webpack_require__(517);
	var ManageBooks = function (_Component) {
	    _inherits(ManageBooks, _Component);
	
	    function ManageBooks(props) {
	        _classCallCheck(this, ManageBooks);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ManageBooks).call(this, props));
	    }
	
	    _createClass(ManageBooks, [{
	        key: "handleDeleteClick",
	        value: function handleDeleteClick(id, bookName) {
	            var _this2 = this;
	
	            this.props.openDialog({
	                title: '确认删除',
	                content: "将删除《" + bookName + "》",
	                onConfirm: function onConfirm() {
	                    _apis2.default.deleteBook(id).then(function (res) {
	                        _this2.props.closeDialog();
	                        _this2.props.sendNotification('删除成功！');
	                        _this2.props.fetchBooks({ merge: false });
	                    });
	                }
	            });
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.props.fetchBooks();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this3 = this;
	
	            var bookListNewest = this.props.bookListNewest ? this.props.bookListNewest : null;
	            return _react2.default.createElement(_DocContainer2.default, { title: "管理书籍" }, _react2.default.createElement("table", { className: "info-table" }, _react2.default.createElement("tbody", null, _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "ID"), _react2.default.createElement("td", null, "Name"), _react2.default.createElement("td", null, "Date created"), _react2.default.createElement("td", null, "Actions")), bookListNewest ? bookListNewest.map(function (book, index) {
	                return _react2.default.createElement("tr", { key: index }, _react2.default.createElement("td", null, book.id), _react2.default.createElement("td", null, book.title), _react2.default.createElement("td", null, book.dateCreated), _react2.default.createElement("td", null, _react2.default.createElement("a", { onClick: function onClick(e) {
	                        e.preventDefault();
	                        _this3.handleDeleteClick(book.id, book.title);
	                        return false;
	                    }, href: "#" }, "Delete")));
	            }) : null)));
	        }
	    }], [{
	        key: "fetchData",
	        value: function fetchData(_ref) {
	            var store = _ref.store;
	
	            return store.dispatch((0, _actions.fetchBooks)());
	        }
	    }]);
	
	    return ManageBooks;
	}(_react.Component);
	ManageBooks = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], ManageBooks);
	function mapStateToProps(state, ownProps) {
	    return {
	        bookListNewest: state.pagination.books.newest ? state.pagination.books.newest.ids.map(function (id) {
	            return state.entities.books[id];
	        }) : []
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchBooks: _actions.fetchBooks, sendNotification: _actions.sendNotification, openDialog: _actions.openDialog, closeDialog: _actions.closeDialog })(ManageBooks);

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(518);
	    var insertCss = __webpack_require__(278);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(277)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MuY3NzPzUxYzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDOzs7O0FBQ0g7O0FBQ21COzs7O0FBQzNCOzs7O0FBQzhEOztBQUNqRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzFDLEtBQVksU0FBVSxvQkFBcUI7QUFhM0M7OztBQU1FLDBCQUFpQixPQUNmOzs7K0ZBQ0Q7Ozs7OzJDQUVtQixJQUFVOzs7QUFDeEIsa0JBQU0sTUFBVyxXQUFDO0FBQ2Ysd0JBQVE7QUFDSixtQ0FBa0I7QUFDbEI7QUFDSCxvQ0FBVyxXQUFJLElBQUs7QUFDbEIsZ0NBQU0sTUFBYztBQUNwQixnQ0FBTSxNQUFpQixpQkFBUztBQUNoQyxnQ0FBTSxNQUFXLFdBQUMsRUFBTSxPQU1uQjtzQkFUaUI7a0JBRG5COzs7Ozs7QUFXVCxrQkFBTSxNQUdOOzs7Ozs7O0FBQ0osaUJBQWtCLGlCQUFPLEtBQU0sTUFBZSxpQkFBTyxLQUFNLE1BQWUsaUJBQU87QUFFMUUsb0JBQ0wsZ0JBQWEsd0NBQU0sT0FBTyx3Q0FDbEIsV0FBVSxXQUFhLGdCQUMzQiw4QkFBTSxlQUNKLDhCQUFHLFlBQ0QsOEJBQUcsWUFBUSxPQUNYLDhCQUFHLFlBQVUsU0FDYiw4QkFBRyxZQUFrQixpQkFDckIsOEJBQUcsWUFDQSw4QkFDMkIsZUFBSSxjQUFNLE1BQU87QUFDeEMsd0JBQ0wsOEJBQUcsUUFBSSxLQUFRLFNBQ2IsOEJBQUcsWUFBTSxLQUFTLEtBQ2xCLDhCQUFHLFlBQU0sS0FBWSxRQUNyQiw4QkFBRyxZQUFNLEtBQWtCLDRDQUN4QiwwQ0FDQyxPQUNPO0FBQ0osMkJBQWlCO0FBQ2QsZ0NBQWtCLGtCQUFLLEtBQUcsSUFBTSxLQUFPO0FBQ3JDLGdDQUNMO3NCQUpPLEVBS04sTUFBSSxLQU5WLEVBVU4sU0FYSTtjQU4rQixDQUF0QixHQXVCMUIsS0EvQk87Ozs7O2lCQS9Ca0I7O0FBQ2hCLG9CQUFNLE1BQVMsU0FPTjs7OztZQVZnQjs7QUFIbkMsMERBQWtCLFFBQUU7QUFDTCxvQkFDYjtFQUZTLElBRVQ7QUFtRUYsMEJBQThCLE9BQVU7QUFDaEMsWUFBQztBQUNTLCtCQUFrQixXQUFNLE1BQU8sU0FDcEMsTUFBVyxXQUFNLE1BQU8sT0FBSSxJQUFJO29CQUFZLE1BQVMsU0FBTSxNQUFLO1VBQTdCLENBRHZCLEdBTXpCOzs7bUJBQXNCLHlCQUNMLGlCQUNmLEVBQVksaUNBQWtCLDZDQUFZLGlDQUMzQyxxQ0FBb0IsYTs7Ozs7Ozs7QUMvRnJCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQXlDLDJCQUEyQjtBQUNwRSxvREFBbUQ7Ozs7Ozs7O0FDVm5EO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMTIuMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJ1xuaW1wb3J0IGFwaXMgZnJvbSAnLi4vLi4vYXBpcydcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24sIGZldGNoQm9va3MsIG9wZW5EaWFsb2csIGNsb3NlRGlhbG9nIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9NYW5hZ2VCb29rcy5jc3MnKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzZW5kTm90aWZpY2F0aW9uPzogYW55XG4gIGZldGNoQm9va3M/OiAoZGF0YT86IGZldGNoQm9va3MpID0+IHZvaWRcbiAgYm9va0xpc3ROZXdlc3Q/OiBhbnlcbiAgb3BlbkRpYWxvZzogKGRhdGE6IG9wZW5EaWFsb2cpID0+IHZvaWRcbiAgY2xvc2VEaWFsb2c6IGFueVxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIE1hbmFnZUJvb2tzIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcblxuICBzdGF0aWMgZmV0Y2hEYXRhKHtzdG9yZX0pIHtcbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZmV0Y2hCb29rcygpKVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGhhbmRsZURlbGV0ZUNsaWNrKGlkLCBib29rTmFtZSkge1xuICAgIHRoaXMucHJvcHMub3BlbkRpYWxvZyh7XG4gICAgICB0aXRsZTogJ+ehruiupOWIoOmZpCcsXG4gICAgICBjb250ZW50OiBg5bCG5Yig6Zmk44CKJHtib29rTmFtZX3jgItgLFxuICAgICAgb25Db25maXJtOiAoKSA9PiB7XG4gICAgICAgIGFwaXMuZGVsZXRlQm9vayhpZCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VEaWFsb2coKVxuICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5Yig6Zmk5oiQ5Yqf77yBJylcbiAgICAgICAgICB0aGlzLnByb3BzLmZldGNoQm9va3Moe21lcmdlOiBmYWxzZX0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hCb29rcygpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGJvb2tMaXN0TmV3ZXN0ID0gdGhpcy5wcm9wcy5ib29rTGlzdE5ld2VzdCA/IHRoaXMucHJvcHMuYm9va0xpc3ROZXdlc3QgOiBudWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgPERvY0NvbnRhaW5lciB0aXRsZT1cIueuoeeQhuS5puexjVwiPlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiaW5mby10YWJsZVwiPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPklEPC90ZD5cbiAgICAgICAgICAgICAgPHRkPk5hbWU8L3RkPlxuICAgICAgICAgICAgICA8dGQ+RGF0ZSBjcmVhdGVkPC90ZD5cbiAgICAgICAgICAgICAgPHRkPkFjdGlvbnM8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIHtib29rTGlzdE5ld2VzdCA/IGJvb2tMaXN0TmV3ZXN0Lm1hcCgoYm9vaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8dGQ+e2Jvb2suaWR9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57Ym9vay50aXRsZX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntib29rLmRhdGVDcmVhdGVkfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRGVsZXRlQ2xpY2soYm9vay5pZCwgYm9vay50aXRsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCI+RGVsZXRlPC9hPlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSA6IG51bGx9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvRG9jQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgYm9va0xpc3ROZXdlc3Q6IHN0YXRlLnBhZ2luYXRpb24uYm9va3MubmV3ZXN0XG4gICAgICA/IHN0YXRlLnBhZ2luYXRpb24uYm9va3MubmV3ZXN0Lmlkcy5tYXAoaWQgPT4gc3RhdGUuZW50aXRpZXMuYm9va3NbaWRdKVxuICAgICAgOiBbXSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIHsgZmV0Y2hCb29rcywgc2VuZE5vdGlmaWNhdGlvbiwgb3BlbkRpYWxvZywgY2xvc2VEaWFsb2cgfVxuKShNYW5hZ2VCb29rcyBhcyBhbnkpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9NYW5hZ2VCb29rcy5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MuY3NzXG4gKiogbW9kdWxlIGlkID0gNTE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDEyXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vcG9zdGNzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDUxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAxMlxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=