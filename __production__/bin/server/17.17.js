exports.ids = [17];
exports.modules = {

/***/ 421:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(61);
	
	var _DocContainer = __webpack_require__(267);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _AppError = __webpack_require__(422);
	
	var _AppError2 = _interopRequireDefault(_AppError);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NoMatch = function (_Component) {
	    _inherits(NoMatch, _Component);
	
	    function NoMatch() {
	        _classCallCheck(this, NoMatch);
	
	        return _possibleConstructorReturn(this, (NoMatch.__proto__ || Object.getPrototypeOf(NoMatch)).apply(this, arguments));
	    }
	
	    _createClass(NoMatch, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_DocContainer2.default, { title: "页面未找到" }, _react2.default.createElement(_AppError2.default, { title: "抱歉，页面未找到！", message: _react2.default.createElement("div", null, "你可以", _react2.default.createElement(_reactRouter.Link, { className: "border-link", to: "/" }, "返回首页"), "继续浏览") }));
	        }
	    }]);
	
	    return NoMatch;
	}(_react.Component);
	
	exports.default = NoMatch;

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTm9NYXRjaC9Ob01hdGNoLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3Qzs7OztBQUNMOztBQUNxQjs7OztBQVF4RDs7Ozs7Ozs7Ozs7O0tBQ1E7Ozs7Ozs7Ozs7OztBQUNHLG9CQUNMLGdCQUFhLHdDQUFNLE9BQVEsV0FDekIsZ0JBQVMsb0NBQ0YsT0FBWSxhQUNSLFNBQUMsOEJBQUksYUFBSSx1QkFBSyxtQ0FBVSxXQUFjLGVBQUcsSUFBSSxPQUFZLFNBSTFFO0FBR0Y7Ozs7OzttQkFBc0IsUSIsImZpbGUiOiIxNy4xNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJ1xuaW1wb3J0IEFwcEVycm9yIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXBwRXJyb3InXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB0aXRsZT86IHN0cmluZ1xuICBtZXNzYWdlPzogc3RyaW5nXG59XG5cbmNsYXNzIE5vTWF0Y2ggZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCB7fT4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2NDb250YWluZXIgdGl0bGU9XCLpobXpnaLmnKrmib7liLBcIj5cbiAgICAgICAgPEFwcEVycm9yXG4gICAgICAgICAgdGl0bGU9XCLmirHmrYnvvIzpobXpnaLmnKrmib7liLDvvIFcIlxuICAgICAgICAgIG1lc3NhZ2U9eyg8ZGl2PuS9oOWPr+S7pTxMaW5rIGNsYXNzTmFtZT1cImJvcmRlci1saW5rXCIgdG89XCIvXCI+6L+U5Zue6aaW6aG1PC9MaW5rPue7p+e7rea1j+iniDwvZGl2Pil9XG4gICAgICAgIC8+XG4gICAgICA8L0RvY0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9NYXRjaFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTm9NYXRjaC9Ob01hdGNoLnRzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=