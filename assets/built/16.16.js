webpackJsonp([16],{

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NoMatch = function (_Component) {
	    _inherits(NoMatch, _Component);
	
	    function NoMatch() {
	        _classCallCheck(this, NoMatch);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(NoMatch).apply(this, arguments));
	    }
	
	    _createClass(NoMatch, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement("div", null, _react2.default.createElement("h1", null, this.props.title || 'Not Found'), _react2.default.createElement("div", null, this.props.message));
	        }
	    }]);
	
	    return NoMatch;
	}(_react.Component);
	
	exports.default = NoMatch;

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL05vTWF0Y2gvTm9NYXRjaC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7S0FDUTs7Ozs7Ozs7Ozs7O0FBQ0csb0JBQ0wsOEJBQUksYUFDRiw4QkFBRyxZQUFNLEtBQU0sTUFBTSxTQUFxQixjQUMxQyw4QkFBSSxhQUFNLEtBQU0sTUFNeEI7Ozs7Ozs7bUJBQXNCLFEiLCJmaWxlIjoiMTYuMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB0aXRsZT86IHN0cmluZ1xuICBtZXNzYWdlPzogc3RyaW5nXG59XG5cbmNsYXNzIE5vTWF0Y2ggZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCB7fT4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT57dGhpcy5wcm9wcy50aXRsZSB8fCAnTm90IEZvdW5kJ308L2gxPlxuICAgICAgICA8ZGl2Pnt0aGlzLnByb3BzLm1lc3NhZ2V9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9NYXRjaFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL05vTWF0Y2gvTm9NYXRjaC50c3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9