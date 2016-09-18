exports.ids = [3];
exports.modules = {

/***/ 469:
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
	
	var styles = __webpack_require__(470);
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

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(471);
	    var insertCss = __webpack_require__(278);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 471:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(277)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MuY3NzPzUxYzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDOzs7O0FBQ0g7O0FBQ21COzs7O0FBQzNCOzs7O0FBQzhEOztBQUNqRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzFDLEtBQVksU0FBVSxvQkFBcUI7QUFhM0M7OztBQU1FLDBCQUFpQixPQUNmOzs7K0ZBQ0Q7Ozs7OzJDQUVtQixJQUFVOzs7QUFDeEIsa0JBQU0sTUFBVyxXQUFDO0FBQ2Ysd0JBQVE7QUFDSixtQ0FBa0I7QUFDbEI7QUFDSCxvQ0FBVyxXQUFJLElBQUs7QUFDbEIsZ0NBQU0sTUFBYztBQUNwQixnQ0FBTSxNQUFpQixpQkFBUztBQUNoQyxnQ0FBTSxNQUFXLFdBQUMsRUFBTSxPQU1uQjtzQkFUaUI7a0JBRG5COzs7Ozs7QUFXVCxrQkFBTSxNQUdOOzs7Ozs7O0FBQ0osaUJBQWtCLGlCQUFPLEtBQU0sTUFBZSxpQkFBTyxLQUFNLE1BQWUsaUJBQU87QUFFMUUsb0JBQ0wsZ0JBQWEsd0NBQU0sT0FBTyx3Q0FDbEIsV0FBVSxXQUFhLGdCQUMzQiw4QkFBTSxlQUNKLDhCQUFHLFlBQ0QsOEJBQUcsWUFBUSxPQUNYLDhCQUFHLFlBQVUsU0FDYiw4QkFBRyxZQUFrQixpQkFDckIsOEJBQUcsWUFDQSw4QkFDMkIsZUFBSSxjQUFNLE1BQU87QUFDeEMsd0JBQ0wsOEJBQUcsUUFBSSxLQUFRLFNBQ2IsOEJBQUcsWUFBTSxLQUFTLEtBQ2xCLDhCQUFHLFlBQU0sS0FBWSxRQUNyQiw4QkFBRyxZQUFNLEtBQWtCLDRDQUN4QiwwQ0FDQyxPQUNPO0FBQ0osMkJBQWlCO0FBQ2QsZ0NBQWtCLGtCQUFLLEtBQUcsSUFBTSxLQUFPO0FBQ3JDLGdDQUNMO3NCQUpPLEVBS04sTUFBSSxLQU5WLEVBVU4sU0FYSTtjQU4rQixDQUF0QixHQXVCMUIsS0EvQk87Ozs7O2lCQS9Ca0I7O0FBQ2hCLG9CQUFNLE1BQVMsU0FPTjs7OztZQVZnQjs7QUFIbkMsMERBQWtCLFFBQUU7QUFDTCxvQkFDYjtFQUZTLElBRVQ7QUFtRUYsMEJBQThCLE9BQVU7QUFDaEMsWUFBQztBQUNTLCtCQUFrQixXQUFNLE1BQU8sU0FDcEMsTUFBVyxXQUFNLE1BQU8sT0FBSSxJQUFJO29CQUFZLE1BQVMsU0FBTSxNQUFLO1VBQTdCLENBRHZCLEdBTXpCOzs7bUJBQXNCLHlCQUNMLGlCQUNmLEVBQVksaUNBQWtCLDZDQUFZLGlDQUMzQyxxQ0FBb0IsYTs7Ozs7Ozs7QUMvRnJCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQXlDLDJCQUEyQjtBQUNwRSxvREFBbUQ7Ozs7Ozs7O0FDVm5EO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMy4zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IERvY0NvbnRhaW5lciBmcm9tICcuLi8uLi9jb250YWluZXJzL0RvY0NvbnRhaW5lcidcbmltcG9ydCBhcGlzIGZyb20gJy4uLy4uL2FwaXMnXG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uLCBmZXRjaEJvb2tzLCBvcGVuRGlhbG9nLCBjbG9zZURpYWxvZyB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vTWFuYWdlQm9va3MuY3NzJylcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2VuZE5vdGlmaWNhdGlvbj86IGFueVxuICBmZXRjaEJvb2tzPzogKGRhdGE/OiBmZXRjaEJvb2tzKSA9PiB2b2lkXG4gIGJvb2tMaXN0TmV3ZXN0PzogYW55XG4gIG9wZW5EaWFsb2c6IChkYXRhOiBvcGVuRGlhbG9nKSA9PiB2b2lkXG4gIGNsb3NlRGlhbG9nOiBhbnlcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBNYW5hZ2VCb29rcyBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cbiAgc3RhdGljIGZldGNoRGF0YSh7c3RvcmV9KSB7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGZldGNoQm9va3MoKSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBoYW5kbGVEZWxldGVDbGljayhpZCwgYm9va05hbWUpIHtcbiAgICB0aGlzLnByb3BzLm9wZW5EaWFsb2coe1xuICAgICAgdGl0bGU6ICfnoa7orqTliKDpmaQnLFxuICAgICAgY29udGVudDogYOWwhuWIoOmZpOOAiiR7Ym9va05hbWV944CLYCxcbiAgICAgIG9uQ29uZmlybTogKCkgPT4ge1xuICAgICAgICBhcGlzLmRlbGV0ZUJvb2soaWQpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICB0aGlzLnByb3BzLmNsb3NlRGlhbG9nKClcbiAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oJ+WIoOmZpOaIkOWKn++8gScpXG4gICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaEJvb2tzKHttZXJnZTogZmFsc2V9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmZldGNoQm9va3MoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBib29rTGlzdE5ld2VzdCA9IHRoaXMucHJvcHMuYm9va0xpc3ROZXdlc3QgPyB0aGlzLnByb3BzLmJvb2tMaXN0TmV3ZXN0IDogbnVsbFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2NDb250YWluZXIgdGl0bGU9XCLnrqHnkIbkuabnsY1cIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImluZm8tdGFibGVcIj5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5JRDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5OYW1lPC90ZD5cbiAgICAgICAgICAgICAgPHRkPkRhdGUgY3JlYXRlZDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5BY3Rpb25zPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICB7Ym9va0xpc3ROZXdlc3QgPyBib29rTGlzdE5ld2VzdC5tYXAoKGJvb2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPHRkPntib29rLmlkfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e2Jvb2sudGl0bGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57Ym9vay5kYXRlQ3JlYXRlZH08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZURlbGV0ZUNsaWNrKGJvb2suaWQsIGJvb2sudGl0bGUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiPkRlbGV0ZTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSkgOiBudWxsfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L0RvY0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICByZXR1cm4ge1xuICAgIGJvb2tMaXN0TmV3ZXN0OiBzdGF0ZS5wYWdpbmF0aW9uLmJvb2tzLm5ld2VzdFxuICAgICAgPyBzdGF0ZS5wYWdpbmF0aW9uLmJvb2tzLm5ld2VzdC5pZHMubWFwKGlkID0+IHN0YXRlLmVudGl0aWVzLmJvb2tzW2lkXSlcbiAgICAgIDogW10sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICB7IGZldGNoQm9va3MsIHNlbmROb3RpZmljYXRpb24sIG9wZW5EaWFsb2csIGNsb3NlRGlhbG9nIH1cbikoTWFuYWdlQm9va3MgYXMgYW55KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vTWFuYWdlQm9va3MuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAzXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vcG9zdGNzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ3MVxuICoqIG1vZHVsZSBjaHVua3MgPSAzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==