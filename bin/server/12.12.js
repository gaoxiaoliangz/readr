exports.ids = [12];
exports.modules = {

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(102);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(268);
	
	var _DocContainer = __webpack_require__(265);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _apis = __webpack_require__(399);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _actions = __webpack_require__(77);
	
	var _reactCssModules = __webpack_require__(278);
	
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
	
	var styles = __webpack_require__(522);
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
	
	            this.props.openConfirmModal({
	                title: '确认删除',
	                content: "将删除《" + bookName + "》",
	                onConfirm: function onConfirm() {
	                    _apis2.default.deleteBook(id).then(function (res) {
	                        _this2.props.closeConfirmModal();
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
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchBooks: _actions.fetchBooks, sendNotification: _actions.sendNotification, openConfirmModal: _actions.openConfirmModal, closeConfirmModal: _actions.closeConfirmModal })(ManageBooks);

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(523);
	    var insertCss = __webpack_require__(282);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(281)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MuY3NzPzUxYzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDOzs7O0FBQ0g7O0FBQ21COzs7O0FBQzNCOzs7O0FBQzBFOztBQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzFDLEtBQVksU0FBVSxvQkFBcUI7QUFhM0M7OztBQU1FLDBCQUFpQixPQUNmOzs7K0ZBQ0Q7Ozs7OzJDQUVtQixJQUFVOzs7QUFDeEIsa0JBQU0sTUFBaUIsaUJBQUM7QUFDckIsd0JBQVE7QUFDSixtQ0FBa0I7QUFDbEI7QUFDSCxvQ0FBVyxXQUFJLElBQUs7QUFDbEIsZ0NBQU0sTUFBb0I7QUFDMUIsZ0NBQU0sTUFBaUIsaUJBQVM7QUFDaEMsZ0NBQU0sTUFBVyxXQUFDLEVBQU0sT0FNbkI7c0JBVGlCO2tCQURuQjs7Ozs7O0FBV1Qsa0JBQU0sTUFHTjs7Ozs7OztBQUNKLGlCQUFrQixpQkFBTyxLQUFNLE1BQWUsaUJBQU8sS0FBTSxNQUFlLGlCQUFPO0FBRTFFLG9CQUNMLGdCQUFhLHdDQUFNLE9BQU8sd0NBQ2xCLFdBQVUsV0FBYSxnQkFDM0IsOEJBQU0sZUFDSiw4QkFBRyxZQUNELDhCQUFHLFlBQVEsT0FDWCw4QkFBRyxZQUFVLFNBQ2IsOEJBQUcsWUFBa0IsaUJBQ3JCLDhCQUFHLFlBQ0EsOEJBQzJCLGVBQUksY0FBTSxNQUFPO0FBQ3hDLHdCQUNMLDhCQUFHLFFBQUksS0FBUSxTQUNiLDhCQUFHLFlBQU0sS0FBUyxLQUNsQiw4QkFBRyxZQUFNLEtBQVksUUFDckIsOEJBQUcsWUFBTSxLQUFrQiw0Q0FDeEIsMENBQ0MsT0FDTztBQUNKLDJCQUFpQjtBQUNkLGdDQUFrQixrQkFBSyxLQUFHLElBQU0sS0FBTztBQUNyQyxnQ0FDTDtzQkFKTyxFQUtOLE1BQUksS0FOVixFQVVOLFNBWEk7Y0FOK0IsQ0FBdEIsR0F1QjFCLEtBL0JPOzs7OztpQkEvQmtCOztBQUNoQixvQkFBTSxNQUFTLFNBT047Ozs7WUFWZ0I7O0FBSG5DLDBEQUFrQixRQUFFO0FBQ0wsb0JBQ2I7RUFGUyxJQUVUO0FBbUVGLDBCQUE4QixPQUFVO0FBQ2hDLFlBQUM7QUFDUywrQkFBa0IsV0FBTSxNQUFPLFNBQ3BDLE1BQVcsV0FBTSxNQUFPLE9BQUksSUFBSTtvQkFBWSxNQUFTLFNBQU0sTUFBSztVQUE3QixDQUR2QixHQU16Qjs7O21CQUFzQix5QkFDTCxpQkFDZixFQUFZLGlDQUFrQiw2Q0FBa0IsNkNBQ2pELGlEQUFvQixhOzs7Ozs7OztBQy9GckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBeUMsMkJBQTJCO0FBQ3BFLG9EQUFtRDs7Ozs7Ozs7QUNWbkQ7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQSIsImZpbGUiOiIxMi4xMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBEb2NDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Eb2NDb250YWluZXInXG5pbXBvcnQgYXBpcyBmcm9tICcuLi8uLi9hcGlzJ1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgZmV0Y2hCb29rcywgb3BlbkNvbmZpcm1Nb2RhbCwgY2xvc2VDb25maXJtTW9kYWwgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL01hbmFnZUJvb2tzLmNzcycpXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNlbmROb3RpZmljYXRpb24/OiBhbnlcbiAgZmV0Y2hCb29rcz86IChkYXRhPzogZmV0Y2hCb29rcykgPT4gdm9pZFxuICBib29rTGlzdE5ld2VzdD86IGFueVxuICBvcGVuQ29uZmlybU1vZGFsOiAoZGF0YTogb3BlbkNvbmZpcm1Nb2RhbCkgPT4gdm9pZFxuICBjbG9zZUNvbmZpcm1Nb2RhbDogYW55XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgTWFuYWdlQm9va3MgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuXG4gIHN0YXRpYyBmZXRjaERhdGEoe3N0b3JlfSkge1xuICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChmZXRjaEJvb2tzKCkpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgaGFuZGxlRGVsZXRlQ2xpY2soaWQsIGJvb2tOYW1lKSB7XG4gICAgdGhpcy5wcm9wcy5vcGVuQ29uZmlybU1vZGFsKHtcbiAgICAgIHRpdGxlOiAn56Gu6K6k5Yig6ZmkJyxcbiAgICAgIGNvbnRlbnQ6IGDlsIbliKDpmaTjgIoke2Jvb2tOYW1lfeOAi2AsXG4gICAgICBvbkNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgYXBpcy5kZWxldGVCb29rKGlkKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5jbG9zZUNvbmZpcm1Nb2RhbCgpXG4gICAgICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKCfliKDpmaTmiJDlip/vvIEnKVxuICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hCb29rcyh7bWVyZ2U6IGZhbHNlfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5mZXRjaEJvb2tzKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYm9va0xpc3ROZXdlc3QgPSB0aGlzLnByb3BzLmJvb2tMaXN0TmV3ZXN0ID8gdGhpcy5wcm9wcy5ib29rTGlzdE5ld2VzdCA6IG51bGxcblxuICAgIHJldHVybiAoXG4gICAgICA8RG9jQ29udGFpbmVyIHRpdGxlPVwi566h55CG5Lmm57GNXCI+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJpbmZvLXRhYmxlXCI+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+SUQ8L3RkPlxuICAgICAgICAgICAgICA8dGQ+TmFtZTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5EYXRlIGNyZWF0ZWQ8L3RkPlxuICAgICAgICAgICAgICA8dGQ+QWN0aW9uczwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAge2Jvb2tMaXN0TmV3ZXN0ID8gYm9va0xpc3ROZXdlc3QubWFwKChib29rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIDx0ZD57Ym9vay5pZH08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntib29rLnRpdGxlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e2Jvb2suZGF0ZUNyZWF0ZWR9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVEZWxldGVDbGljayhib29rLmlkLCBib29rLnRpdGxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIj5EZWxldGU8L2E+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pIDogbnVsbH1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9Eb2NDb250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBib29rTGlzdE5ld2VzdDogc3RhdGUucGFnaW5hdGlvbi5ib29rcy5uZXdlc3RcbiAgICAgID8gc3RhdGUucGFnaW5hdGlvbi5ib29rcy5uZXdlc3QuaWRzLm1hcChpZCA9PiBzdGF0ZS5lbnRpdGllcy5ib29rc1tpZF0pXG4gICAgICA6IFtdLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgeyBmZXRjaEJvb2tzLCBzZW5kTm90aWZpY2F0aW9uLCBvcGVuQ29uZmlybU1vZGFsLCBjbG9zZUNvbmZpcm1Nb2RhbCB9XG4pKE1hbmFnZUJvb2tzIGFzIGFueSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9NYW5hZ2VCb29rcy50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL01hbmFnZUJvb2tzLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9NYW5hZ2VCb29rcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1MjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTJcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9wb3N0Y3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MuY3NzXG4gKiogbW9kdWxlIGlkID0gNTIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDEyXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==