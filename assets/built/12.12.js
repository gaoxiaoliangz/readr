webpackJsonp([12],{

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSideEffect = __webpack_require__(103);
	
	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);
	
	var _lodash = __webpack_require__(25);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var defaultTitle = 'Readr';
	
	var DocContainer = function (_Component) {
	    _inherits(DocContainer, _Component);
	
	    function DocContainer() {
	        _classCallCheck(this, DocContainer);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(DocContainer).apply(this, arguments));
	    }
	
	    _createClass(DocContainer, [{
	        key: 'render',
	        value: function render() {
	            var className = this.props.className;
	
	            return className ? _react2.default.createElement("div", { className: 'gb-doc-container' + className }, this.props.children) : _react2.default.createElement("div", { className: "gb-doc-container" }, this.props.children);
	        }
	    }]);
	
	    return DocContainer;
	}(_react.Component);
	
	function reducePropsToState(propsList) {
	    var innermostProps = propsList[propsList.length - 1];
	    var data = {};
	    if (innermostProps) {
	        data = _lodash2.default.pick(innermostProps, ['title', 'bodyClass']);
	        if (data.title && !innermostProps.useAsMasterTitle) {
	            data.title = data.title + ' | ' + defaultTitle;
	        } else {
	            data.title = data.title || defaultTitle;
	        }
	    }
	    return data;
	}
	function handleStateChangeOnClient(propList) {
	    var title = propList.title;
	    var bodyClass = propList.bodyClass;
	
	    if (typeof bodyClass !== 'undefined') {
	        document.body.className = bodyClass;
	    } else {
	        document.body.removeAttribute('class');
	    }
	    if (typeof title !== 'undefined') {
	        document.title = title;
	    } else {
	        document.title = defaultTitle;
	    }
	}
	exports.default = (0, _reactSideEffect2.default)(reducePropsToState, handleStateChangeOnClient)(DocContainer);

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(670);

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(7);
	
	var _DocContainer = __webpack_require__(102);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _apis = __webpack_require__(62);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _actions = __webpack_require__(8);
	
	var _reactCssModules = __webpack_require__(21);
	
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
	
	var styles = __webpack_require__(168);
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

/***/ 168:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29udGFpbmVycy9Eb2NDb250YWluZXIudHN4P2QxNDAqKioqIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2lkZS1lZmZlY3QvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbD85ZTA4KioqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7Ozs7QUFDTTs7OztBQUN4Qjs7Ozs7Ozs7Ozs7O0FBRXRCLEtBQWtCLGVBVWxCOztLQUNROzs7Ozs7Ozs7OztrQ0FDRTtpQkFBYSxZQUFPLEtBQU07O0FBRXpCLG9CQUVELFlBQ0EsOEJBQUksU0FBVSxXQUFvQixxQkFBYSxhQUN4QyxLQUFNLE1BRWQsWUFDQyw4QkFBSSxTQUFVLFdBQW1CLHNCQUFNLEtBQU0sTUFHdEQ7Ozs7Ozs7QUFFRCw2QkFBcUM7QUFDbkMsU0FBb0IsaUJBQVksVUFBVSxVQUFPLFNBQUs7QUFDdEQsU0FBUSxPQUFVO0FBRWYsU0FBZ0IsZ0JBQUU7QUFDZixnQkFBSSxpQkFBSyxLQUFlLGdCQUFFLENBQVEsU0FBZTtBQUNsRCxhQUFLLEtBQU0sU0FBSSxDQUFlLGVBQWtCO0FBQzdDLGtCQUFTLFFBQU8sS0FBTSxnQkFDdEIsYUFGK0M7Z0JBRTdDO0FBQ0Ysa0JBQU0sUUFBTyxLQUFNLFNBRTFCOzs7QUFFSyxZQUNQOztBQUVELG9DQUEyQztTQUM1QixRQUF3QixlQUEvQjtTQUFvQjs7QUFFdkIsU0FBQyxPQUFnQixjQUFpQixhQUFFO0FBQzdCLGtCQUFLLEtBQVUsWUFDbkI7WUFBRTtBQUNFLGtCQUFLLEtBQWdCLGdCQUM5Qjs7QUFFRSxTQUFDLE9BQVksVUFBaUI7QUFDdkIsa0JBQU0sUUFDVixNQUY2QjtZQUUzQjtBQUNFLGtCQUFNLFFBSWxCOzs7bUJBQTZCLCtCQUNULG9CQUVuQiwyQkFBYyxjOzs7Ozs7O0FDakVmLGdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0F3Qzs7OztBQUNIOztBQUNtQjs7OztBQUMzQjs7OztBQUM4RDs7QUFDakQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMxQyxLQUFZLFNBQVUsb0JBQXFCO0FBYTNDOzs7QUFNRSwwQkFBaUIsT0FDZjs7OytGQUNEOzs7OzsyQ0FFbUIsSUFBVTs7O0FBQ3hCLGtCQUFNLE1BQVcsV0FBQztBQUNmLHdCQUFRO0FBQ0osbUNBQWtCO0FBQ2xCO0FBQ0gsb0NBQVcsV0FBSSxJQUFLO0FBQ2xCLGdDQUFNLE1BQWM7QUFDcEIsZ0NBQU0sTUFBaUIsaUJBQVM7QUFDaEMsZ0NBQU0sTUFBVyxXQUFDLEVBQU0sT0FNbkI7c0JBVGlCO2tCQURuQjs7Ozs7O0FBV1Qsa0JBQU0sTUFHTjs7Ozs7OztBQUNKLGlCQUFrQixpQkFBTyxLQUFNLE1BQWUsaUJBQU8sS0FBTSxNQUFlLGlCQUFPO0FBRTFFLG9CQUNMLGdCQUFhLHdDQUFNLE9BQU8sd0NBQ2xCLFdBQVUsV0FBYSxnQkFDM0IsOEJBQU0sZUFDSiw4QkFBRyxZQUNELDhCQUFHLFlBQVEsT0FDWCw4QkFBRyxZQUFVLFNBQ2IsOEJBQUcsWUFBa0IsaUJBQ3JCLDhCQUFHLFlBQ0EsOEJBQzJCLGVBQUksY0FBTSxNQUFPO0FBQ3hDLHdCQUNMLDhCQUFHLFFBQUksS0FBUSxTQUNiLDhCQUFHLFlBQU0sS0FBUyxLQUNsQiw4QkFBRyxZQUFNLEtBQVksUUFDckIsOEJBQUcsWUFBTSxLQUFrQiw0Q0FDeEIsMENBQ0MsT0FDTztBQUNKLDJCQUFpQjtBQUNkLGdDQUFrQixrQkFBSyxLQUFHLElBQU0sS0FBTztBQUNyQyxnQ0FDTDtzQkFKTyxFQUtOLE1BQUksS0FOVixFQVVOLFNBWEk7Y0FOK0IsQ0FBdEIsR0F1QjFCLEtBL0JPOzs7OztpQkEvQmtCOztBQUNoQixvQkFBTSxNQUFTLFNBT047Ozs7WUFWZ0I7O0FBSG5DLDBEQUFrQixRQUFFO0FBQ0wsb0JBQ2I7RUFGUyxJQUVUO0FBbUVGLDBCQUE4QixPQUFVO0FBQ2hDLFlBQUM7QUFDUywrQkFBa0IsV0FBTSxNQUFPLFNBQ3BDLE1BQVcsV0FBTSxNQUFPLE9BQUksSUFBSTtvQkFBWSxNQUFTLFNBQU0sTUFBSztVQUE3QixDQUR2QixHQU16Qjs7O21CQUFzQix5QkFDTCxpQkFDZixFQUFZLGlDQUFrQiw2Q0FBWSxpQ0FDM0MscUNBQW9CLGE7Ozs7Ozs7QUNoR3JCLDBDIiwiZmlsZSI6IjEyLjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHdpdGhTaWRlRWZmZWN0IGZyb20gJ3JlYWN0LXNpZGUtZWZmZWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jb25zdCBkZWZhdWx0VGl0bGUgPSAnUmVhZHInXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBzdHlsZU5hbWU/OiBzdHJpbmdcbiAgYm9keUNsYXNzPzogc3RyaW5nXG4gIHRpdGxlPzogc3RyaW5nXG4gIHVzZUFzTWFzdGVyVGl0bGU/OiBib29sZWFuXG59XG5cbmNsYXNzIERvY0NvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudDxQcm9wcywge30+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgY2xhc3NOYW1lXG4gICAgICAgID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZ2ItZG9jLWNvbnRhaW5lcicgKyBjbGFzc05hbWV9PlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cImdiLWRvYy1jb250YWluZXJcIj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkdWNlUHJvcHNUb1N0YXRlKHByb3BzTGlzdCkge1xuICBjb25zdCBpbm5lcm1vc3RQcm9wcyA9IHByb3BzTGlzdFtwcm9wc0xpc3QubGVuZ3RoIC0gMV1cbiAgbGV0IGRhdGE6IGFueSA9IHt9XG5cbiAgaWYgKGlubmVybW9zdFByb3BzKSB7XG4gICAgZGF0YSA9IF8ucGljayhpbm5lcm1vc3RQcm9wcywgWyd0aXRsZScsICdib2R5Q2xhc3MnXSlcbiAgICBpZiAoZGF0YS50aXRsZSAmJiAhaW5uZXJtb3N0UHJvcHMudXNlQXNNYXN0ZXJUaXRsZSkge1xuICAgICAgZGF0YS50aXRsZSA9IGAke2RhdGEudGl0bGV9IHwgJHtkZWZhdWx0VGl0bGV9YFxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLnRpdGxlID0gZGF0YS50aXRsZSB8fCBkZWZhdWx0VGl0bGVcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0YVxufVxuXG5mdW5jdGlvbiBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50KHByb3BMaXN0KSB7XG4gIGNvbnN0IHsgdGl0bGUsIGJvZHlDbGFzcyB9ID0gcHJvcExpc3RcblxuICBpZiAodHlwZW9mIGJvZHlDbGFzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGJvZHlDbGFzc1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpXG4gIH1cblxuICBpZiAodHlwZW9mIHRpdGxlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGVcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC50aXRsZSA9IGRlZmF1bHRUaXRsZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTaWRlRWZmZWN0KFxuICByZWR1Y2VQcm9wc1RvU3RhdGUsXG4gIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnRcbikoRG9jQ29udGFpbmVyKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29udGFpbmVycy9Eb2NDb250YWluZXIudHN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNjcwKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1zaWRlLWVmZmVjdC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsXG4gKiogbW9kdWxlIGlkID0gMTAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMiA0IDcgOCAxMlxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBEb2NDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Eb2NDb250YWluZXInXG5pbXBvcnQgYXBpcyBmcm9tICcuLi8uLi9hcGlzJ1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgZmV0Y2hCb29rcywgb3BlbkRpYWxvZywgY2xvc2VEaWFsb2cgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL01hbmFnZUJvb2tzLmNzcycpXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNlbmROb3RpZmljYXRpb24/OiBhbnlcbiAgZmV0Y2hCb29rcz86IChkYXRhPzogZmV0Y2hCb29rcykgPT4gdm9pZFxuICBib29rTGlzdE5ld2VzdD86IGFueVxuICBvcGVuRGlhbG9nOiAoZGF0YTogb3BlbkRpYWxvZykgPT4gdm9pZFxuICBjbG9zZURpYWxvZzogYW55XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgTWFuYWdlQm9va3MgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuXG4gIHN0YXRpYyBmZXRjaERhdGEoe3N0b3JlfSkge1xuICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChmZXRjaEJvb2tzKCkpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgaGFuZGxlRGVsZXRlQ2xpY2soaWQsIGJvb2tOYW1lKSB7XG4gICAgdGhpcy5wcm9wcy5vcGVuRGlhbG9nKHtcbiAgICAgIHRpdGxlOiAn56Gu6K6k5Yig6ZmkJyxcbiAgICAgIGNvbnRlbnQ6IGDlsIbliKDpmaTjgIoke2Jvb2tOYW1lfeOAi2AsXG4gICAgICBvbkNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgYXBpcy5kZWxldGVCb29rKGlkKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5jbG9zZURpYWxvZygpXG4gICAgICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKCfliKDpmaTmiJDlip/vvIEnKVxuICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hCb29rcyh7bWVyZ2U6IGZhbHNlfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5mZXRjaEJvb2tzKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYm9va0xpc3ROZXdlc3QgPSB0aGlzLnByb3BzLmJvb2tMaXN0TmV3ZXN0ID8gdGhpcy5wcm9wcy5ib29rTGlzdE5ld2VzdCA6IG51bGxcblxuICAgIHJldHVybiAoXG4gICAgICA8RG9jQ29udGFpbmVyIHRpdGxlPVwi566h55CG5Lmm57GNXCI+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJpbmZvLXRhYmxlXCI+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+SUQ8L3RkPlxuICAgICAgICAgICAgICA8dGQ+TmFtZTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5EYXRlIGNyZWF0ZWQ8L3RkPlxuICAgICAgICAgICAgICA8dGQ+QWN0aW9uczwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAge2Jvb2tMaXN0TmV3ZXN0ID8gYm9va0xpc3ROZXdlc3QubWFwKChib29rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIDx0ZD57Ym9vay5pZH08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntib29rLnRpdGxlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e2Jvb2suZGF0ZUNyZWF0ZWR9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVEZWxldGVDbGljayhib29rLmlkLCBib29rLnRpdGxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIj5EZWxldGU8L2E+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pIDogbnVsbH1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9Eb2NDb250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBib29rTGlzdE5ld2VzdDogc3RhdGUucGFnaW5hdGlvbi5ib29rcy5uZXdlc3RcbiAgICAgID8gc3RhdGUucGFnaW5hdGlvbi5ib29rcy5uZXdlc3QuaWRzLm1hcChpZCA9PiBzdGF0ZS5lbnRpdGllcy5ib29rc1tpZF0pXG4gICAgICA6IFtdLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgeyBmZXRjaEJvb2tzLCBzZW5kTm90aWZpY2F0aW9uLCBvcGVuRGlhbG9nLCBjbG9zZURpYWxvZyB9XG4pKE1hbmFnZUJvb2tzIGFzIGFueSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9NYW5hZ2VCb29rcy50c3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MuY3NzXG4gKiogbW9kdWxlIGlkID0gMTY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDEyXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==