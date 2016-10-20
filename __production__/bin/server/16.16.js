exports.ids = [16];
exports.modules = {

/***/ 381:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(69);
	
	var _DocContainer = __webpack_require__(238);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _AppError = __webpack_require__(382);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL05vTWF0Y2gvTm9NYXRjaC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7Ozs7QUFDTDs7QUFDcUI7Ozs7QUFReEQ7Ozs7Ozs7Ozs7OztLQUNROzs7Ozs7Ozs7Ozs7QUFDRyxvQkFDTCxnQkFBYSx3Q0FBTSxPQUFRLFdBQ3pCLGdCQUFTLG9DQUNGLE9BQVksYUFDUixTQUFDLDhCQUFJLGFBQUksdUJBQUssbUNBQVUsV0FBYyxlQUFHLElBQUksT0FBWSxTQUkxRTtBQUdGOzs7Ozs7bUJBQXNCLFEiLCJmaWxlIjoiMTYuMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IERvY0NvbnRhaW5lciBmcm9tICcuLi8uLi9jb250YWluZXJzL0RvY0NvbnRhaW5lcidcbmltcG9ydCBBcHBFcnJvciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FwcEVycm9yJ1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdGl0bGU/OiBzdHJpbmdcbiAgbWVzc2FnZT86IHN0cmluZ1xufVxuXG5jbGFzcyBOb01hdGNoIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywge30+IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RG9jQ29udGFpbmVyIHRpdGxlPVwi6aG16Z2i5pyq5om+5YiwXCI+XG4gICAgICAgIDxBcHBFcnJvclxuICAgICAgICAgIHRpdGxlPVwi5oqx5q2J77yM6aG16Z2i5pyq5om+5Yiw77yBXCJcbiAgICAgICAgICBtZXNzYWdlPXsoPGRpdj7kvaDlj6/ku6U8TGluayBjbGFzc05hbWU9XCJib3JkZXItbGlua1wiIHRvPVwiL1wiPui/lOWbnummlumhtTwvTGluaz7nu6fnu63mtY/op4g8L2Rpdj4pfVxuICAgICAgICAvPlxuICAgICAgPC9Eb2NDb250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vTWF0Y2hcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9Ob01hdGNoL05vTWF0Y2gudHN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==