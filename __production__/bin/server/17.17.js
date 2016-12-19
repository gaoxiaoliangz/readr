exports.ids = [17];
exports.modules = {

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(63);
	
	var _DocContainer = __webpack_require__(201);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _AppError = __webpack_require__(355);
	
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
	            return _react2.default.createElement(_DocContainer2.default, { title: "页面未找到" }, _react2.default.createElement(_AppError2.default, { title: "抱歉，页面未找到！", message: _react2.default.createElement("div", null, '\u4F60\u53EF\u4EE5', _react2.default.createElement(_reactRouter.Link, { className: "border-link", to: "/" }, '\u8FD4\u56DE\u9996\u9875'), '\u7EE7\u7EED\u6D4F\u89C8') }));
	        }
	    }]);
	
	    return NoMatch;
	}(_react.Component);
	
	exports.default = NoMatch;

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTm9NYXRjaC9Ob01hdGNoLnRzeCJdLCJuYW1lcyI6WyJOb01hdGNoIiwiY3JlYXRlRWxlbWVudCIsInRpdGxlIiwibWVzc2FnZSIsImNsYXNzTmFtZSIsInRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBQ01BLE87Ozs7Ozs7Ozs7O2tDQUNPO0FBQ0wsb0JBQVEsZ0JBQU1DLGFBQU4seUJBQWtDLEVBQUVDLE9BQU8sT0FBVCxFQUFsQyxFQUNKLGdCQUFNRCxhQUFOLHFCQUE4QixFQUFFQyxPQUFPLFdBQVQsRUFBc0JDLFNBQVUsZ0JBQU1GLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsSUFBM0IsRUFDdEQsb0JBRHNELEVBRXRELGdCQUFNQSxhQUFOLG9CQUEwQixFQUFFRyxXQUFXLGFBQWIsRUFBNEJDLElBQUksR0FBaEMsRUFBMUIsRUFBaUUsMEJBQWpFLENBRnNELEVBR3RELDBCQUhzRCxDQUFoQyxFQUE5QixDQURJLENBQVI7QUFLSDs7Ozs7O21CQUVVTCxPIiwiZmlsZSI6IjE3LjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IERvY0NvbnRhaW5lciBmcm9tICcuLi8uLi9jb250YWluZXJzL0RvY0NvbnRhaW5lcic7XG5pbXBvcnQgQXBwRXJyb3IgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BcHBFcnJvcic7XG5jbGFzcyBOb01hdGNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChEb2NDb250YWluZXIsIHsgdGl0bGU6IFwi6aG16Z2i5pyq5om+5YiwXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwRXJyb3IsIHsgdGl0bGU6IFwi5oqx5q2J77yM6aG16Z2i5pyq5om+5Yiw77yBXCIsIG1lc3NhZ2U6IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiXFx1NEY2MFxcdTUzRUZcXHU0RUU1XCIsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywgeyBjbGFzc05hbWU6IFwiYm9yZGVyLWxpbmtcIiwgdG86IFwiL1wiIH0sIFwiXFx1OEZENFxcdTU2REVcXHU5OTk2XFx1OTg3NVwiKSxcbiAgICAgICAgICAgICAgICAgICAgXCJcXHU3RUU3XFx1N0VFRFxcdTZENEZcXHU4OUM4XCIpKSB9KSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE5vTWF0Y2g7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Ob01hdGNoL05vTWF0Y2gudHN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==