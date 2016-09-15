exports.ids = [12];
exports.modules = {

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(255);
	
	var _DocContainer = __webpack_require__(256);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _apis = __webpack_require__(389);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _actions = __webpack_require__(261);
	
	var _reactCssModules = __webpack_require__(272);
	
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
	
	var styles = __webpack_require__(513);
	var ManageBooks = function (_Component) {
	    _inherits(ManageBooks, _Component);
	
	    function ManageBooks(props) {
	        _classCallCheck(this, ManageBooks);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ManageBooks).call(this, props));
	    }
	
	    _createClass(ManageBooks, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.props.fetchBooks();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var bookListNewest = this.props.bookListNewest ? this.props.bookListNewest : null;
	            return _react2.default.createElement(_DocContainer2.default, { title: "管理书籍" }, _react2.default.createElement("table", { className: "info-table" }, _react2.default.createElement("tbody", null, _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "ID"), _react2.default.createElement("td", null, "Name"), _react2.default.createElement("td", null, "Date created"), _react2.default.createElement("td", null, "Actions")), bookListNewest ? bookListNewest.map(function (book, index) {
	                return _react2.default.createElement("tr", { key: index }, _react2.default.createElement("td", null, book.id), _react2.default.createElement("td", null, book.title), _react2.default.createElement("td", null, book.dateCreated), _react2.default.createElement("td", null, _react2.default.createElement("a", { onClick: function onClick(e) {
	                        e.preventDefault();
	                        _apis2.default.deleteBook(book.id).then(function (res) {
	                            _this2.props.sendNotification('删除成功！');
	                            _this2.props.fetchBooks();
	                        });
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
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchBooks: _actions.fetchBooks, sendNotification: _actions.sendNotification })(ManageBooks);

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(514);
	    var insertCss = __webpack_require__(276);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(275)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MuY3NzPzUxYzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDOzs7O0FBQ0g7O0FBQ21COzs7O0FBQzNCOzs7O0FBQ3FDOztBQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzFDLEtBQVksU0FBZSxvQkFBcUI7QUFXaEQ7OztBQU1FLDBCQUFpQixPQUNmOzs7K0ZBQ0Q7Ozs7OztBQUdLLGtCQUFNLE1BR047Ozs7Ozs7QUFDSixpQkFBa0IsaUJBQU8sS0FBTSxNQUFlLGlCQUFPLEtBQU0sTUFBZSxpQkFBTztBQUUxRSxvQkFDTCxnQkFBYSx3Q0FBTSxPQUFPLHdDQUNsQixXQUFVLFdBQWEsZ0JBQzNCLDhCQUFNLGVBQ0osOEJBQUcsWUFDRCw4QkFBRyxZQUFRLE9BQ1gsOEJBQUcsWUFBVSxTQUNiLDhCQUFHLFlBQWtCLGlCQUNyQiw4QkFBRyxZQUNBLDhCQUMyQixlQUFJLGNBQU0sTUFBTztBQUN4Qyx3QkFDTCw4QkFBRyxRQUFJLEtBQVEsU0FDYiw4QkFBRyxZQUFNLEtBQVMsS0FDbEIsOEJBQUcsWUFBTSxLQUFZLFFBQ3JCLDhCQUFHLFlBQU0sS0FBa0IsNENBQ3hCLDBDQUNDLE9BQ087QUFDSiwyQkFBaUI7QUFDZCx3Q0FBVyxXQUFLLEtBQUksSUFBSztBQUN2QixvQ0FBTSxNQUFpQixpQkFBUztBQUNoQyxvQ0FBTSxNQUNWOzBCQUgrQjtBQUkzQixnQ0FDTDtzQkFQTyxFQVFOLE1BQUksS0FUVixFQWFOLFNBZEk7Y0FOK0IsQ0FBdEIsR0EwQjFCLEtBbENPOzs7OztpQkFqQmtCOztBQUNoQixvQkFBTSxNQUFTLFNBT047Ozs7WUFWZ0I7O0FBSG5DLDBEQUFrQixRQUFFO0FBQ0wsb0JBQ2I7RUFGUyxJQUVUO0FBd0RGLDBCQUE4QixPQUFVO0FBQ2hDLFlBQUM7QUFDUywrQkFBa0IsV0FBTSxNQUFPLFNBQ3BDLE1BQVcsV0FBTSxNQUFPLE9BQUksSUFBSTtvQkFBWSxNQUFTLFNBQU0sTUFBSztVQUE3QixDQUR2QixHQU16Qjs7O21CQUFzQix5QkFDTCxpQkFDZixFQUFZLGlDQUNiLCtDQUFvQixhOzs7Ozs7OztBQ2xGckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBeUMsMkJBQTJCO0FBQ3BFLG9EQUFtRDs7Ozs7Ozs7QUNWbkQ7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQSIsImZpbGUiOiIxMi4xMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBEb2NDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Eb2NDb250YWluZXInXG5pbXBvcnQgYXBpcyBmcm9tICcuLi8uLi9hcGlzJ1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgZmV0Y2hCb29rcyB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlczogYW55ID0gcmVxdWlyZSgnLi9NYW5hZ2VCb29rcy5jc3MnKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzZW5kTm90aWZpY2F0aW9uPzogYW55XG4gIGZldGNoQm9va3M/OiBhbnlcbiAgYm9va0xpc3ROZXdlc3Q/OiBhbnlcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBNYW5hZ2VCb29rcyBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cbiAgc3RhdGljIGZldGNoRGF0YSh7c3RvcmV9KSB7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGZldGNoQm9va3MoKSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmZldGNoQm9va3MoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBib29rTGlzdE5ld2VzdCA9IHRoaXMucHJvcHMuYm9va0xpc3ROZXdlc3QgPyB0aGlzLnByb3BzLmJvb2tMaXN0TmV3ZXN0IDogbnVsbFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2NDb250YWluZXIgdGl0bGU9XCLnrqHnkIbkuabnsY1cIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImluZm8tdGFibGVcIj5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5JRDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5OYW1lPC90ZD5cbiAgICAgICAgICAgICAgPHRkPkRhdGUgY3JlYXRlZDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5BY3Rpb25zPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICB7Ym9va0xpc3ROZXdlc3QgPyBib29rTGlzdE5ld2VzdC5tYXAoKGJvb2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPHRkPntib29rLmlkfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e2Jvb2sudGl0bGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57Ym9vay5kYXRlQ3JlYXRlZH08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGlzLmRlbGV0ZUJvb2soYm9vay5pZCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oJ+WIoOmZpOaIkOWKn++8gScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hCb29rcygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIj5EZWxldGU8L2E+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pIDogbnVsbH1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9Eb2NDb250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBib29rTGlzdE5ld2VzdDogc3RhdGUucGFnaW5hdGlvbi5ib29rcy5uZXdlc3RcbiAgICAgID8gc3RhdGUucGFnaW5hdGlvbi5ib29rcy5uZXdlc3QuaWRzLm1hcChpZCA9PiBzdGF0ZS5lbnRpdGllcy5ib29rc1tpZF0pXG4gICAgICA6IFtdLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgeyBmZXRjaEJvb2tzLCBzZW5kTm90aWZpY2F0aW9uIH1cbikoTWFuYWdlQm9va3MgYXMgYW55KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vTWFuYWdlQm9va3MuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDUxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAxMlxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Bvc3Rjc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9NYW5hZ2VCb29rcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1MTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTJcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9