exports.ids = [12];
exports.modules = {

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSideEffect = __webpack_require__(432);
	
	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Body = function (_Component) {
	    _inherits(Body, _Component);
	
	    function Body() {
	        _classCallCheck(this, Body);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Body).apply(this, arguments));
	    }
	
	    _createClass(Body, [{
	        key: 'render',
	        value: function render() {
	            var className = this.props.className;
	
	            return _react2.default.createElement("div", { className: className || '' }, this.props.children);
	        }
	    }]);
	
	    return Body;
	}(_react.Component);
	
	function reducePropsToState(propsList) {
	    var bodyClass = void 0;
	    propsList.forEach(function (props) {
	        bodyClass = props.bodyClass;
	    });
	    return bodyClass;
	}
	function handleStateChangeOnClient(className) {
	    if (typeof className !== 'undefined') {
	        document.body.className = className;
	    } else {
	        document.body.removeAttribute('class');
	    }
	}
	exports.default = (0, _reactSideEffect2.default)(reducePropsToState, handleStateChangeOnClient)(Body);

/***/ },

/***/ 432:
/***/ function(module, exports) {

	module.exports = require("react-side-effect");

/***/ },

/***/ 513:
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
	
	var _Body = __webpack_require__(431);
	
	var _Body2 = _interopRequireDefault(_Body);
	
	var _apis = __webpack_require__(388);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _actions = __webpack_require__(259);
	
	var _reactCssModules = __webpack_require__(270);
	
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
	
	var styles = __webpack_require__(514);
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
	            return _react2.default.createElement("div", null, _react2.default.createElement(_Body2.default, { className: "manage-books" }), _react2.default.createElement("table", null, _react2.default.createElement("tbody", null, _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "ID"), _react2.default.createElement("td", null, "Name"), _react2.default.createElement("td", null, "Date created"), _react2.default.createElement("td", null, "Actions")), bookListNewest ? bookListNewest.map(function (book, index) {
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

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(515);
	    var insertCss = __webpack_require__(274);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(273)();
	// imports
	
	
	// module
	exports.push([module.id, ".test_JZpbZ {\n  background: red;\n}", ""]);
	
	// exports
	exports.locals = {
		"test": "test_JZpbZ"
	};

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb2R5LnRzeD9jMjkwKioqKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zaWRlLWVmZmVjdFwiPzU1ZmMqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9NYW5hZ2VCb29rcy5jc3M/NTFjNiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDOzs7O0FBU3hDOzs7Ozs7Ozs7Ozs7S0FDUTs7Ozs7Ozs7Ozs7a0NBQ0U7aUJBQWEsWUFBTyxLQUFNOztBQUV6QixvQkFDTCw4QkFBSSxTQUFVLFdBQVcsYUFBTyxNQUN6QixLQUFNLE1BSWxCOzs7Ozs7O0FBRUQsNkJBQXFDO0FBQ25DLFNBQWE7QUFFSixlQUFRLGtCQUFnQjtBQUN0QixxQkFBUSxNQUNqQjtNQUZnQjtBQUlaLFlBQ1A7O0FBRUQsb0NBQTRDO0FBQ3ZDLFNBQUMsT0FBZ0IsY0FBaUIsYUFBRTtBQUM3QixrQkFBSyxLQUFVLFlBQ25CO1lBQUU7QUFDRSxrQkFBSyxLQUFnQixnQkFJakM7OzttQkFBNkIsK0JBQ1Qsb0JBRW5CLDJCQUFNLE07Ozs7Ozs7QUMxQ1AsK0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXdDOzs7O0FBQ0g7O0FBQ0c7Ozs7QUFDWDs7OztBQUNxQzs7QUFDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMxQyxLQUFZLFNBQWUsb0JBQXFCO0FBV2hEOzs7QUFNRSwwQkFBaUIsT0FDZjs7OytGQUNEOzs7Ozs7QUFHSyxrQkFBTSxNQUdOOzs7Ozs7O0FBQ0osaUJBQWtCLGlCQUFPLEtBQU0sTUFBZSxpQkFBTyxLQUFNLE1BQWUsaUJBQU87QUFFMUUsb0JBQ0wsOEJBQUksYUFDRixnQkFBSyxnQ0FBVSxXQUFrQixpREFDM0IsZUFDSiw4QkFBTSxlQUNKLDhCQUFHLFlBQ0QsOEJBQUcsWUFBUSxPQUNYLDhCQUFHLFlBQVUsU0FDYiw4QkFBRyxZQUFrQixpQkFDckIsOEJBQUcsWUFDQSw4QkFDMkIsZUFBSSxjQUFNLE1BQU87QUFDeEMsd0JBQ0wsOEJBQUcsUUFBSSxLQUFRLFNBQ2IsOEJBQUcsWUFBTSxLQUFTLEtBQ2xCLDhCQUFHLFlBQU0sS0FBWSxRQUNyQiw4QkFBRyxZQUFNLEtBQWtCLDRDQUN4QiwwQ0FDQyxPQUNPO0FBQ0osMkJBQWlCO0FBQ2Qsd0NBQVcsV0FBSyxLQUFJLElBQUs7QUFDdkIsb0NBQU0sTUFBaUIsaUJBQVM7QUFDaEMsb0NBQU0sTUFDVjswQkFIK0I7QUFJM0IsZ0NBQ0w7c0JBUE8sRUFRTixNQUFJLEtBVFYsRUFhTixTQWRJO2NBTitCLENBQXRCLEdBMEIxQixLQWxDTzs7Ozs7aUJBbEJrQjs7QUFDaEIsb0JBQU0sTUFBUyxTQU9OOzs7O1lBVmdCOztBQUhuQywwREFBa0IsUUFBRTtBQUNMLG9CQUNiO0VBRlMsSUFFVDtBQXlERiwwQkFBOEIsT0FBVTtBQUNoQyxZQUFDO0FBQ1MsK0JBQWtCLFdBQU0sTUFBTyxTQUNwQyxNQUFXLFdBQU0sTUFBTyxPQUFJLElBQUk7b0JBQVksTUFBUyxTQUFNLE1BQUs7VUFBN0IsQ0FEdkIsR0FNekI7OzttQkFBc0IseUJBQ0wsaUJBQ2YsRUFBWSxpQ0FDYiwrQ0FBb0IsYTs7Ozs7Ozs7QUNuRnJCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQXlDLDJCQUEyQjtBQUNwRSxvREFBbUQ7Ozs7Ozs7O0FDVm5EO0FBQ0E7OztBQUdBO0FBQ0Esd0NBQXVDLG9CQUFvQixHQUFHOztBQUU5RDtBQUNBO0FBQ0E7QUFDQSxHIiwiZmlsZSI6IjEyLjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHdpdGhTaWRlRWZmZWN0IGZyb20gJ3JlYWN0LXNpZGUtZWZmZWN0J1xuXG5pbnRlcmZhY2UgQm9keVByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHN0eWxlTmFtZT86IHN0cmluZ1xuICBib2R5Q2xhc3M6IHN0cmluZ1xufVxuXG5jbGFzcyBCb2R5IGV4dGVuZHMgQ29tcG9uZW50PEJvZHlQcm9wcywge30+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZSB8fCAnJ30+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVByb3BzVG9TdGF0ZShwcm9wc0xpc3QpIHtcbiAgbGV0IGJvZHlDbGFzc1xuXG4gIHByb3BzTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGJvZHlDbGFzcyA9IHByb3BzLmJvZHlDbGFzc1xuICB9KVxuXG4gIHJldHVybiBib2R5Q2xhc3Ncbn1cblxuZnVuY3Rpb24gaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudChjbGFzc05hbWUpIHtcbiAgaWYgKHR5cGVvZiBjbGFzc05hbWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBjbGFzc05hbWVcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTaWRlRWZmZWN0KFxuICByZWR1Y2VQcm9wc1RvU3RhdGUsXG4gIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnRcbikoQm9keSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9keS50c3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zaWRlLWVmZmVjdFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3Qtc2lkZS1lZmZlY3RcIlxuICoqIG1vZHVsZSBpZCA9IDQzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA3IDggMTJcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQm9keSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0JvZHknXG5pbXBvcnQgYXBpcyBmcm9tICcuLi8uLi9hcGlzJ1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgZmV0Y2hCb29rcyB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlczogYW55ID0gcmVxdWlyZSgnLi9NYW5hZ2VCb29rcy5jc3MnKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzZW5kTm90aWZpY2F0aW9uPzogYW55XG4gIGZldGNoQm9va3M/OiBhbnlcbiAgYm9va0xpc3ROZXdlc3Q/OiBhbnlcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBNYW5hZ2VCb29rcyBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cbiAgc3RhdGljIGZldGNoRGF0YSh7c3RvcmV9KSB7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGZldGNoQm9va3MoKSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmZldGNoQm9va3MoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBib29rTGlzdE5ld2VzdCA9IHRoaXMucHJvcHMuYm9va0xpc3ROZXdlc3QgPyB0aGlzLnByb3BzLmJvb2tMaXN0TmV3ZXN0IDogbnVsbFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxCb2R5IGNsYXNzTmFtZT1cIm1hbmFnZS1ib29rc1wiIC8+XG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5JRDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5OYW1lPC90ZD5cbiAgICAgICAgICAgICAgPHRkPkRhdGUgY3JlYXRlZDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5BY3Rpb25zPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICB7Ym9va0xpc3ROZXdlc3QgPyBib29rTGlzdE5ld2VzdC5tYXAoKGJvb2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPHRkPntib29rLmlkfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e2Jvb2sudGl0bGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57Ym9vay5kYXRlQ3JlYXRlZH08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGlzLmRlbGV0ZUJvb2soYm9vay5pZCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oJ+WIoOmZpOaIkOWKn++8gScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hCb29rcygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIj5EZWxldGU8L2E+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pIDogbnVsbH1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBib29rTGlzdE5ld2VzdDogc3RhdGUucGFnaW5hdGlvbi5ib29rcy5uZXdlc3RcbiAgICAgID8gc3RhdGUucGFnaW5hdGlvbi5ib29rcy5uZXdlc3QuaWRzLm1hcChpZCA9PiBzdGF0ZS5lbnRpdGllcy5ib29rc1tpZF0pXG4gICAgICA6IFtdLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgeyBmZXRjaEJvb2tzLCBzZW5kTm90aWZpY2F0aW9uIH1cbikoTWFuYWdlQm9va3MgYXMgYW55KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vTWFuYWdlQm9va3MuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDUxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAxMlxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRlc3RfSlpwYloge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ0ZXN0XCI6IFwidGVzdF9KWnBiWlwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9wb3N0Y3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MuY3NzXG4gKiogbW9kdWxlIGlkID0gNTE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDEyXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==