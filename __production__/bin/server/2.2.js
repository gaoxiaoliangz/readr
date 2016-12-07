exports.ids = [2];
exports.modules = {

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(93);
	
	var _actions = __webpack_require__(94);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _redux = __webpack_require__(278);
	
	var _form = __webpack_require__(213);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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
	
	function mapStateToProps(state) {
	    return {
	        routing: state.routing.locationBeforeTransitions
	    };
	}
	// function mapDispatchToProps(dispatch) {
	//   return {
	//     actions: bindActionCreators(_.assign({}, actions), dispatch)
	//   }
	// }
	var TestPlace = function (_Component) {
	    _inherits(TestPlace, _Component);
	
	    function TestPlace(props) {
	        _classCallCheck(this, TestPlace);
	
	        return _possibleConstructorReturn(this, (TestPlace.__proto__ || Object.getPrototypeOf(TestPlace)).call(this, props));
	    }
	    // componentDidMount() {
	    //   this.props.actions.updateBookProgress(89)
	    // }
	
	
	    _createClass(TestPlace, [{
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            return _react2.default.createElement("div", null, _react2.default.createElement("h1", null, "Test Place"), _react2.default.createElement(_form.Button, { onClick: function onClick(e) {
	                    _this2.props.actions.loadSomething();
	                } }, "load"), _react2.default.createElement("span", null, " "), _react2.default.createElement(_form.Button, { onClick: function onClick(e) {
	                    _this2.props.actions.saveSomething();
	                } }, "save"));
	        }
	    }]);
	
	    return TestPlace;
	}(_react.Component);
	TestPlace = __decorate([(0, _reactRedux.connect)(mapStateToProps, function (dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)(actions, dispatch)
	    };
	})], TestPlace);
	exports.default = TestPlace;

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVGVzdFBsYWNlL1Rlc3RQbGFjZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF3Qzs7OztBQUNIOztBQUU5Qjs7S0FBdUM7O0FBQ0o7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCNUMsMEJBQThCO0FBQ3RCO0FBQ0csa0JBQU8sTUFBUSxRQUUxQjtBQUhTO0FBR1I7QUFFeUM7QUFDN0I7QUFDc0Q7QUFDN0Q7QUFDRjtBQVVKO0FBQWdEOztBQUU5Qyx3QkFBaUI7QUFDZjs7c0hBQ0Y7QUFBQztBQUV1QjtBQUNzQjtBQUd4Qzs7Ozs7Ozs7QUFDRyxvQkFDTCw4QkFBSSxhQUNGLDhCQUFHLFlBQWdCLCtCQUNaLDhCQUFRLFNBQUc7QUFBVSw0QkFBTSxNQUFRLFFBQWlCO0FBQUcsb0JBQTlELEVBQTRFLFNBQzVFLDhCQUFLLGNBQVMsc0JBQ1AsOEJBQVEsU0FBRztBQUFVLDRCQUFNLE1BQVEsUUFBaUI7QUFBRyxvQkFBOUQsRUFHTjtBQUNEOzs7OztBQTVCRCxrREFDaUI7QUFDSDtBQUNILGtCQUFvQiwrQkFBYyxTQUk1QztBQUxjO0VBRlAsSUFPUDttQkFxQkEsVSIsImZpbGUiOiIyLjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG4vLyBpbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uLCBsb2FkU29tZXRoaW5nLCBzYXZlU29tZXRoaW5nIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvZm9ybSdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuaW50ZXJmYWNlIFByb3BzIHtcbn1cblxuaW50ZXJmYWNlIExvY2FsU3RhdGUge1xufVxuXG5pbnRlcmZhY2UgQWxsUHJvcHMgZXh0ZW5kcyBQcm9wcyB7XG4gIHJvdXRpbmc6IGFueVxuICAvLyBzZW5kTm90aWZpY2F0aW9uOiBhbnlcbiAgLy8gbG9hZFNvbWV0aGluZzogYW55XG4gIC8vIHNhdmVTb21ldGhpbmc6IGFueVxuICBhY3Rpb25zOiB0eXBlb2YgYWN0aW9uc1xufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnNcbiAgfVxufVxuXG4vLyBmdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoXy5hc3NpZ24oe30sIGFjdGlvbnMpLCBkaXNwYXRjaClcbi8vICAgfVxuLy8gfVxuXG5AY29ubmVjdDxBbGxQcm9wcz4oXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgZGlzcGF0Y2ggPT4gKHtcbiAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucyBhcyB7fSwgZGlzcGF0Y2gpXG4gIH0pXG4gIC8vIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAvLyB7IGFjdGlvbnM6IF8uYXNzaWduKHt9LCBhY3Rpb25zKSB9XG4pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0UGxhY2UgZXh0ZW5kcyBDb21wb25lbnQ8QWxsUHJvcHMsIExvY2FsU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIC8vICAgdGhpcy5wcm9wcy5hY3Rpb25zLnVwZGF0ZUJvb2tQcm9ncmVzcyg4OSlcbiAgLy8gfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlRlc3QgUGxhY2U8L2gxPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2UgPT4geyB0aGlzLnByb3BzLmFjdGlvbnMubG9hZFNvbWV0aGluZygpIH0gfT5sb2FkPC9CdXR0b24+XG4gICAgICAgIDxzcGFuPiA8L3NwYW4+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17ZSA9PiB7IHRoaXMucHJvcHMuYWN0aW9ucy5zYXZlU29tZXRoaW5nKCkgfSB9PnNhdmU8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVGVzdFBsYWNlL1Rlc3RQbGFjZS50c3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9