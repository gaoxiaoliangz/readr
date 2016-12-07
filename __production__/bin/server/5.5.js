exports.ids = [5];
exports.modules = {

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Loading = __webpack_require__(323);
	
	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Loading2.default;

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(127);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _classnames = __webpack_require__(125);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
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
	
	var styles = __webpack_require__(324);
	var Loading = function (_Component) {
	    _inherits(Loading, _Component);
	
	    function Loading(props) {
	        _classCallCheck(this, Loading);
	
	        var _this = _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, props));
	
	        _this.state = {
	            dynamicText: ''
	        };
	        return _this;
	    }
	
	    _createClass(Loading, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            this.intervalId = setInterval(function () {
	                if (_this2.state.dynamicText.length === 3) {
	                    _this2.setState({ dynamicText: '' });
	                } else {
	                    _this2.setState({
	                        dynamicText: _this2.state.dynamicText + '.'
	                    });
	                }
	            }, 500);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            clearInterval(this.intervalId);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var text = _props.text;
	            var center = _props.center;
	            var dynamicText = this.state.dynamicText;
	
	            var wrapClass = (0, _classnames2.default)({
	                'loading-wrap--center': center,
	                'loading-wrap': !center
	            });
	            return _react2.default.createElement("div", { styleName: wrapClass }, _react2.default.createElement("span", { styleName: "text-loading" }, text + dynamicText));
	        }
	    }]);
	
	    return Loading;
	}(_react.Component);
	Loading = __decorate([(0, _reactCssModules2.default)(styles)], Loading);
	Loading['defaultProps'] = {
	    text: '加载中'
	};
	exports.default = Loading;

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(325);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, ".text-loading_3efqh {\n  text-align: center;\n  margin: 50px 0;\n  font-size: 20px;\n  font-weight: normal;\n  color: #999; }\n\n.text-loading_3efqh {\n  margin: 30px 0;\n  display: inline-block; }\n\n.loading-wrap_htyYz {\n  text-align: left; }\n\n.loading-wrap--center_3PEIh {\n  text-align: center; }\n", ""]);
	
	// exports
	exports.locals = {
		"text-loading": "text-loading_3efqh",
		"loading-wrap": "loading-wrap_htyYz",
		"loading-wrap--center": "loading-wrap--center_3PEIh"
	};

/***/ },

/***/ 356:
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
	
	var _Loading = __webpack_require__(322);
	
	var _Loading2 = _interopRequireDefault(_Loading);
	
	var _form = __webpack_require__(213);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _DocContainer = __webpack_require__(267);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _reactCssModules = __webpack_require__(127);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _selectors = __webpack_require__(115);
	
	var selectors = _interopRequireWildcard(_selectors);
	
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
	
	var styles = __webpack_require__(357);
	var BookDetail = function (_Component) {
	    _inherits(BookDetail, _Component);
	
	    // static fetchData({store, params}) {
	    //   return store.dispatch(loadBook(params.id))
	    // }
	    function BookDetail(props) {
	        _classCallCheck(this, BookDetail);
	
	        var _this = _possibleConstructorReturn(this, (BookDetail.__proto__ || Object.getPrototypeOf(BookDetail)).call(this, props));
	
	        _this.bookId = props.params.id;
	        return _this;
	    }
	
	    _createClass(BookDetail, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.props.loadBook(this.bookId);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var bookInfo = this.props.bookInfo;
	
	            var isFetching = _lodash2.default.isEmpty(bookInfo);
	            return _react2.default.createElement(_DocContainer2.default, { bodyClass: "book-info", title: bookInfo.title }, _react2.default.createElement("div", { className: "container" }, _react2.default.createElement("article", { styleName: "book-info-container" }, _react2.default.createElement("div", { styleName: "book-detail" }, _react2.default.createElement("header", { styleName: "header" }, isFetching ? _react2.default.createElement(_Loading2.default, null) : _react2.default.createElement("div", null, _react2.default.createElement("div", { styleName: "left-col" }, bookInfo.cover && _react2.default.createElement("div", { styleName: "book-cover" }, _react2.default.createElement("img", { styleName: "img", src: bookInfo.cover }))), _react2.default.createElement("div", { styleName: "right-col" }, _react2.default.createElement("h1", { styleName: "book-name" }, bookInfo.title || '无标题'), _react2.default.createElement("div", { styleName: "book-author" }, _react2.default.createElement("strong", null, "作者：", bookInfo.authors && bookInfo.authors.map(function (a) {
	                return a.name;
	            }).join(', ') || '未知')), _react2.default.createElement("div", null, _react2.default.createElement(_form.Button, { styleName: "btn-read", to: "/viewer/book/" + bookInfo.id, color: "blue" }, "阅读"))))), bookInfo.description && _react2.default.createElement("div", { styleName: "content" }, _react2.default.createElement("h2", { styleName: "desc" }, "内容简介"), _react2.default.createElement("p", null, bookInfo.description))))));
	        }
	    }]);
	
	    return BookDetail;
	}(_react.Component);
	BookDetail = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], BookDetail);
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    var id = ownProps.params.id;
	    return {
	        bookInfo: selectors.common.entity('books', id)(state)
	    };
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { loadBook: _actions.loadBook })(BookDetail);

/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(358);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, ".book-detail_2izVJ {\n  background: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  margin-top: 40px; }\n\n.book-info-container_2FwVR {\n  max-width: 700px;\n  margin: 0 auto; }\n\n.header_1vo0K {\n  overflow: hidden;\n  padding: 40px 40px;\n  position: relative; }\n  @media (max-width: 540px) {\n    .header_1vo0K {\n      padding: 20px; } }\n\n.content_1uo-e {\n  padding: 40px 40px;\n  border-top: 1px solid #ddd;\n  line-height: 1.7; }\n  @media (max-width: 540px) {\n    .content_1uo-e {\n      padding: 20px; } }\n\n.btn-read_3Euwb {\n  position: absolute;\n  bottom: 40px; }\n\n.left-col_2GWeo {\n  float: left;\n  margin-right: 30px; }\n\n.right-col_2_r1p {\n  width: 100%;\n  min-height: 140px; }\n\n.book-name_jLvuB {\n  font-size: 1.6rem;\n  font-weight: bold;\n  margin: 0 0 10px 0;\n  color: #333;\n  line-height: 1.2;\n  word-wrap: break-word; }\n\n.book-author_-eVvW {\n  font-size: 1rem;\n  margin-bottom: 10px; }\n\n.book-cover_1QJYy {\n  margin: 0;\n  top: 0;\n  position: relative;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  overflow: hidden;\n  border-radius: 3px; }\n\n.img_2XZDg {\n  width: 100px;\n  height: auto;\n  display: block; }\n\n.desc_3yZtT {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: #333; }\n", ""]);
	
	// exports
	exports.locals = {
		"book-detail": "book-detail_2izVJ",
		"book-info-container": "book-info-container_2FwVR",
		"header": "header_1vo0K",
		"content": "content_1uo-e",
		"btn-read": "btn-read_3Euwb",
		"left-col": "left-col_2GWeo",
		"right-col": "right-col_2_r1p",
		"book-name": "book-name_jLvuB",
		"book-author": "book-author_-eVvW",
		"book-cover": "book-cover_1QJYy",
		"img": "img_2XZDg",
		"desc": "desc_3yZtT"
	};

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL2luZGV4LnRzPzk5YjMqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL0xvYWRpbmcudHN4P2RkYWYqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL0xvYWRpbmcuc2Nzcz8xMGRiKioqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy5zY3NzPzYxYTQqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQm9va0RldGFpbC9Cb29rRGV0YWlsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQm9va0RldGFpbC9Cb29rRGV0YWlsLnNjc3M/NmNlMSIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQm9va0RldGFpbC9Cb29rRGV0YWlsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RrQjs7OztBQUNFOzs7O0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNuQyxLQUFZLFNBQVUsb0JBQWtCO0FBYXhDO0FBQStCOztBQUk3QixzQkFBaUI7QUFDZjs7dUhBQVk7O0FBQ1IsZUFBTTtBQUNHLDBCQUVmO0FBSGU7O0FBS0U7Ozs7Ozs7QUFDWCxrQkFBVyx5QkFBZTtBQUN6QixxQkFBSyxPQUFNLE1BQVksWUFBTyxXQUFPLEdBQUU7QUFDcEMsNEJBQVMsU0FBQyxFQUFhLGFBQzdCO0FBQU0sd0JBQUU7QUFDRiw0QkFBUztBQUNBLHNDQUFNLE9BQU0sTUFBWSxjQUV2QztBQUhnQjtBQUlsQjtBQUFDLGNBUjRCLEVBUy9CO0FBRW9COzs7O0FBQ0wsMkJBQUssS0FDcEI7QUFFTTs7OztBQUNFLDBCQUF1QixLQUN2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QkFBc0IsRUFBRSxFQUFFLHFCQUFxQix1QkFBdUIsaUJBQWlCLEVBQUUscUJBQXFCLGdCQUFnQix1QkFBdUIsRUFBRSxzQkFBc0IsZ0JBQWdCLHNCQUFzQixFQUFFLHNCQUFzQixzQkFBc0Isc0JBQXNCLHVCQUF1QixnQkFBZ0IscUJBQXFCLDBCQUEwQixFQUFFLHdCQUF3QixvQkFBb0Isd0JBQXdCLEVBQUUsdUJBQXVCLGNBQWMsV0FBVyx1QkFBdUIsNkVBQTZFLHFCQUFxQix1QkFBdUIsRUFBRSxnQkFBZ0IsaUJBQWlCLGlCQUFpQixtQkFBbUIsRUFBRSxpQkFBaUIsc0JBQXNCLHNCQUFzQixnQkFBZ0IsRUFBRTs7QUFFMXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHIiwiZmlsZSI6IjUuNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZydcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vTG9hZGluZy5zY3NzJylcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYmFja2Ryb3A/OiBib29sZWFuXG4gIHRleHQ/OiBzdHJpbmdcbiAgY2VudGVyPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBkeW5hbWljVGV4dD86IHN0cmluZ1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBMb2FkaW5nIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuXG4gIGludGVydmFsSWQ6IE5vZGVKUy5UaW1lclxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGR5bmFtaWNUZXh0OiAnJ1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmR5bmFtaWNUZXh0Lmxlbmd0aCA9PT0gMykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZHluYW1pY1RleHQ6ICcnIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkeW5hbWljVGV4dDogdGhpcy5zdGF0ZS5keW5hbWljVGV4dCArICcuJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sIDUwMClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGV4dCwgY2VudGVyIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBkeW5hbWljVGV4dCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3Qgd3JhcENsYXNzID0gY2xhc3NuYW1lcyh7XG4gICAgICAnbG9hZGluZy13cmFwLS1jZW50ZXInOiBjZW50ZXIsXG4gICAgICAnbG9hZGluZy13cmFwJzogIWNlbnRlclxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9e3dyYXBDbGFzc30+XG4gICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cInRleHQtbG9hZGluZ1wiPnt0ZXh0ICsgZHluYW1pY1RleHR9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbkxvYWRpbmdbJ2RlZmF1bHRQcm9wcyddID0ge1xuICB0ZXh0OiAn5Yqg6L295LitJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0xvYWRpbmcuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgN1xuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRleHQtbG9hZGluZ18zZWZxaCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDUwcHggMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogIzk5OTsgfVxcblxcbi50ZXh0LWxvYWRpbmdfM2VmcWgge1xcbiAgbWFyZ2luOiAzMHB4IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4ubG9hZGluZy13cmFwX2h0eVl6IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG4ubG9hZGluZy13cmFwLS1jZW50ZXJfM1BFSWgge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidGV4dC1sb2FkaW5nXCI6IFwidGV4dC1sb2FkaW5nXzNlZnFoXCIsXG5cdFwibG9hZGluZy13cmFwXCI6IFwibG9hZGluZy13cmFwX2h0eVl6XCIsXG5cdFwibG9hZGluZy13cmFwLS1jZW50ZXJcIjogXCJsb2FkaW5nLXdyYXAtLWNlbnRlcl8zUEVJaFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL0xvYWRpbmcuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDdcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBsb2FkQm9vayB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi8uLi9lbGVtZW50cy9Mb2FkaW5nJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvZm9ybSdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBEb2NDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Eb2NDb250YWluZXInXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi9zdG9yZS9zZWxlY3RvcnMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0Jvb2tEZXRhaWwuc2NzcycpXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGxvYWRCb29rOiB0eXBlb2YgbG9hZEJvb2tcbiAgYm9va0luZm86IGFueVxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIEJvb2tEZXRhaWwgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG5cbiAgYm9va0lkOiBzdHJpbmdcblxuICAvLyBzdGF0aWMgZmV0Y2hEYXRhKHtzdG9yZSwgcGFyYW1zfSkge1xuICAvLyAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChsb2FkQm9vayhwYXJhbXMuaWQpKVxuICAvLyB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmJvb2tJZCA9IHByb3BzLnBhcmFtcy5pZFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5sb2FkQm9vayh0aGlzLmJvb2tJZClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGJvb2tJbmZvIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgaXNGZXRjaGluZyA9IF8uaXNFbXB0eShib29rSW5mbylcblxuICAgIHJldHVybiAoXG4gICAgICA8RG9jQ29udGFpbmVyIGJvZHlDbGFzcz1cImJvb2staW5mb1wiIHRpdGxlPXtib29rSW5mby50aXRsZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGFydGljbGUgc3R5bGVOYW1lPVwiYm9vay1pbmZvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJib29rLWRldGFpbFwiPlxuICAgICAgICAgICAgICA8aGVhZGVyIHN0eWxlTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmdcbiAgICAgICAgICAgICAgICAgICAgPyA8TG9hZGluZyAvPlxuICAgICAgICAgICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJsZWZ0LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9va0luZm8uY292ZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJib29rLWNvdmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGVOYW1lPVwiaW1nXCIgc3JjPXtib29rSW5mby5jb3Zlcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInJpZ2h0LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGVOYW1lPVwiYm9vay1uYW1lXCI+e2Jvb2tJbmZvLnRpdGxlIHx8ICfml6DmoIfpopgnfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiYm9vay1hdXRob3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPuS9nOiAhe+8mntib29rSW5mby5hdXRob3JzICYmIGJvb2tJbmZvLmF1dGhvcnMubWFwKGEgPT4gYS5uYW1lKS5qb2luKCcsICcpIHx8ICfmnKrnn6UnfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlTmFtZT1cImJ0bi1yZWFkXCIgdG89e2Avdmlld2VyL2Jvb2svJHtib29rSW5mby5pZH1gfSBjb2xvcj1cImJsdWVcIj7pmIXor7s8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBib29rSW5mby5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlTmFtZT1cImRlc2NcIj7lhoXlrrnnroDku4s8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cD57Ym9va0luZm8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Eb2NDb250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHM6IGFueSkgPT4ge1xuICBjb25zdCBpZCA9IG93blByb3BzLnBhcmFtcy5pZFxuXG4gIHJldHVybiB7XG4gICAgYm9va0luZm86IHNlbGVjdG9ycy5jb21tb24uZW50aXR5KCdib29rcycsIGlkKShzdGF0ZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PHt9LCB7fSwgUHJvcHM+KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIHsgbG9hZEJvb2sgfVxuKShCb29rRGV0YWlsKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQm9va0RldGFpbC9Cb29rRGV0YWlsLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vQm9va0RldGFpbC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL0Jvb2tEZXRhaWwvQm9va0RldGFpbC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDVcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ib29rLWRldGFpbF8yaXpWSiB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xcbiAgbWFyZ2luLXRvcDogNDBweDsgfVxcblxcbi5ib29rLWluZm8tY29udGFpbmVyXzJGd1ZSIHtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBtYXJnaW46IDAgYXV0bzsgfVxcblxcbi5oZWFkZXJfMXZvMEsge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDQwcHggNDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XFxuICAgIC5oZWFkZXJfMXZvMEsge1xcbiAgICAgIHBhZGRpbmc6IDIwcHg7IH0gfVxcblxcbi5jb250ZW50XzF1by1lIHtcXG4gIHBhZGRpbmc6IDQwcHggNDBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XFxuICAgIC5jb250ZW50XzF1by1lIHtcXG4gICAgICBwYWRkaW5nOiAyMHB4OyB9IH1cXG5cXG4uYnRuLXJlYWRfM0V1d2Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA0MHB4OyB9XFxuXFxuLmxlZnQtY29sXzJHV2VvIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4OyB9XFxuXFxuLnJpZ2h0LWNvbF8yX3IxcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDE0MHB4OyB9XFxuXFxuLmJvb2stbmFtZV9qTHZ1QiB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xcbiAgY29sb3I6ICMzMzM7XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkOyB9XFxuXFxuLmJvb2stYXV0aG9yXy1lVnZXIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG5cXG4uYm9vay1jb3Zlcl8xUUpZeSB7XFxuICBtYXJnaW46IDA7XFxuICB0b3A6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4OyB9XFxuXFxuLmltZ18yWFpEZyB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi5kZXNjXzN5WnRUIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzMzMzsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImJvb2stZGV0YWlsXCI6IFwiYm9vay1kZXRhaWxfMml6VkpcIixcblx0XCJib29rLWluZm8tY29udGFpbmVyXCI6IFwiYm9vay1pbmZvLWNvbnRhaW5lcl8yRndWUlwiLFxuXHRcImhlYWRlclwiOiBcImhlYWRlcl8xdm8wS1wiLFxuXHRcImNvbnRlbnRcIjogXCJjb250ZW50XzF1by1lXCIsXG5cdFwiYnRuLXJlYWRcIjogXCJidG4tcmVhZF8zRXV3YlwiLFxuXHRcImxlZnQtY29sXCI6IFwibGVmdC1jb2xfMkdXZW9cIixcblx0XCJyaWdodC1jb2xcIjogXCJyaWdodC1jb2xfMl9yMXBcIixcblx0XCJib29rLW5hbWVcIjogXCJib29rLW5hbWVfakx2dUJcIixcblx0XCJib29rLWF1dGhvclwiOiBcImJvb2stYXV0aG9yXy1lVnZXXCIsXG5cdFwiYm9vay1jb3ZlclwiOiBcImJvb2stY292ZXJfMVFKWXlcIixcblx0XCJpbWdcIjogXCJpbWdfMlhaRGdcIixcblx0XCJkZXNjXCI6IFwiZGVzY18zeVp0VFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQm9va0RldGFpbC9Cb29rRGV0YWlsLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzNThcbiAqKiBtb2R1bGUgY2h1bmtzID0gNVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=