exports.ids = [2];
exports.modules = {

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(90);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(92);
	
	var _actions = __webpack_require__(93);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _redux = __webpack_require__(212);
	
	var _form = __webpack_require__(150);
	
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
	// import { sendNotification, loadSomething, saveSomething } from '../../store/actions'
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVGVzdFBsYWNlL1Rlc3RQbGFjZS50c3giXSwibmFtZXMiOlsiYWN0aW9ucyIsIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZCIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicm91dGluZyIsImxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMiLCJUZXN0UGxhY2UiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwibG9hZFNvbWV0aGluZyIsInNhdmVTb21ldGhpbmciLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQU1BOzs7O0FBQ0E7O0FBRUE7O0tBQVlBLE87O0FBQ1o7O0FBQ0E7Ozs7Ozs7Ozs7OztBQVhBLEtBQUlDLGFBQWMsYUFBUSxVQUFLQSxVQUFkLElBQTZCLFVBQVVDLFVBQVYsRUFBc0JDLE1BQXRCLEVBQThCQyxHQUE5QixFQUFtQ0MsSUFBbkMsRUFBeUM7QUFDbkYsU0FBSUMsSUFBSUMsVUFBVUMsTUFBbEI7QUFBQSxTQUEwQkMsSUFBSUgsSUFBSSxDQUFKLEdBQVFILE1BQVIsR0FBaUJFLFNBQVMsSUFBVCxHQUFnQkEsT0FBT0ssT0FBT0Msd0JBQVAsQ0FBZ0NSLE1BQWhDLEVBQXdDQyxHQUF4QyxDQUF2QixHQUFzRUMsSUFBckg7QUFBQSxTQUEySE8sQ0FBM0g7QUFDQSxTQUFJLFFBQU9DLE9BQVAseUNBQU9BLE9BQVAsT0FBbUIsUUFBbkIsSUFBK0IsT0FBT0EsUUFBUUMsUUFBZixLQUE0QixVQUEvRCxFQUEyRUwsSUFBSUksUUFBUUMsUUFBUixDQUFpQlosVUFBakIsRUFBNkJDLE1BQTdCLEVBQXFDQyxHQUFyQyxFQUEwQ0MsSUFBMUMsQ0FBSixDQUEzRSxLQUNLLEtBQUssSUFBSVUsSUFBSWIsV0FBV00sTUFBWCxHQUFvQixDQUFqQyxFQUFvQ08sS0FBSyxDQUF6QyxFQUE0Q0EsR0FBNUM7QUFBaUQsYUFBSUgsSUFBSVYsV0FBV2EsQ0FBWCxDQUFSLEVBQXVCTixJQUFJLENBQUNILElBQUksQ0FBSixHQUFRTSxFQUFFSCxDQUFGLENBQVIsR0FBZUgsSUFBSSxDQUFKLEdBQVFNLEVBQUVULE1BQUYsRUFBVUMsR0FBVixFQUFlSyxDQUFmLENBQVIsR0FBNEJHLEVBQUVULE1BQUYsRUFBVUMsR0FBVixDQUE1QyxLQUErREssQ0FBbkU7QUFBeEUsTUFDTCxPQUFPSCxJQUFJLENBQUosSUFBU0csQ0FBVCxJQUFjQyxPQUFPTSxjQUFQLENBQXNCYixNQUF0QixFQUE4QkMsR0FBOUIsRUFBbUNLLENBQW5DLENBQWQsRUFBcURBLENBQTVEO0FBQ0gsRUFMRDtBQVFBOztBQUlBLFVBQVNRLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQzVCLFlBQU87QUFDSEMsa0JBQVNELE1BQU1DLE9BQU4sQ0FBY0M7QUFEcEIsTUFBUDtBQUdIO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUlDO0FBQUE7O0FBQ0Esd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDVEEsS0FEUztBQUVsQjtBQUNEO0FBQ0E7QUFDQTs7O0FBTkE7QUFBQTtBQUFBLGtDQU9TO0FBQUE7O0FBQ0wsb0JBQVEsZ0JBQU1DLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsSUFBM0IsRUFDSixnQkFBTUEsYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUExQixFQUFnQyxZQUFoQyxDQURJLEVBRUosZ0JBQU1BLGFBQU4sZUFBNEIsRUFBRUMsU0FBUyxvQkFBSztBQUFFLDRCQUFLRixLQUFMLENBQVd0QixPQUFYLENBQW1CeUIsYUFBbkI7QUFBcUMsa0JBQXZELEVBQTVCLEVBQXVGLE1BQXZGLENBRkksRUFHSixnQkFBTUYsYUFBTixDQUFvQixNQUFwQixFQUE0QixJQUE1QixFQUFrQyxHQUFsQyxDQUhJLEVBSUosZ0JBQU1BLGFBQU4sZUFBNEIsRUFBRUMsU0FBUyxvQkFBSztBQUFFLDRCQUFLRixLQUFMLENBQVd0QixPQUFYLENBQW1CMEIsYUFBbkI7QUFBcUMsa0JBQXZELEVBQTVCLEVBQXVGLE1BQXZGLENBSkksQ0FBUjtBQUtIO0FBYkQ7O0FBQUE7QUFBQSxvQkFBSjtBQWVBTCxhQUFZcEIsV0FBVyxDQUNuQix5QkFBUWdCLGVBQVIsRUFBeUI7QUFBQSxZQUFhO0FBQ2xDakIsa0JBQVMsK0JBQW1CQSxPQUFuQixFQUE0QjJCLFFBQTVCO0FBRHlCLE1BQWI7QUFBQSxFQUF6QixDQURtQixDQUFYLEVBSVROLFNBSlMsQ0FBWjttQkFLZUEsUyIsImZpbGUiOiIyLjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4Jztcbi8vIGltcG9ydCB7IHNlbmROb3RpZmljYXRpb24sIGxvYWRTb21ldGhpbmcsIHNhdmVTb21ldGhpbmcgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0nO1xuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm91dGluZzogc3RhdGUucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zXG4gICAgfTtcbn1cbi8vIGZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhfLmFzc2lnbih7fSwgYWN0aW9ucyksIGRpc3BhdGNoKVxuLy8gICB9XG4vLyB9XG5sZXQgVGVzdFBsYWNlID0gY2xhc3MgVGVzdFBsYWNlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vICAgdGhpcy5wcm9wcy5hY3Rpb25zLnVwZGF0ZUJvb2tQcm9ncmVzcyg4OSlcbiAgICAvLyB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBcIlRlc3QgUGxhY2VcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBvbkNsaWNrOiBlID0+IHsgdGhpcy5wcm9wcy5hY3Rpb25zLmxvYWRTb21ldGhpbmcoKTsgfSB9LCBcImxvYWRcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIiBcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBvbkNsaWNrOiBlID0+IHsgdGhpcy5wcm9wcy5hY3Rpb25zLnNhdmVTb21ldGhpbmcoKTsgfSB9LCBcInNhdmVcIikpKTtcbiAgICB9XG59O1xuVGVzdFBsYWNlID0gX19kZWNvcmF0ZShbXG4gICAgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGRpc3BhdGNoID0+ICh7XG4gICAgICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLCBkaXNwYXRjaClcbiAgICB9KSlcbl0sIFRlc3RQbGFjZSk7XG5leHBvcnQgZGVmYXVsdCBUZXN0UGxhY2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9UZXN0UGxhY2UvVGVzdFBsYWNlLnRzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=