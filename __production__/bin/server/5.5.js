exports.ids = [5];
exports.modules = {

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Loading = __webpack_require__(257);
	
	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Loading2.default;

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(122);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _classnames = __webpack_require__(120);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Loading = __webpack_require__(258);
	
	var _Loading2 = _interopRequireDefault(_Loading);
	
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
	Loading = __decorate([(0, _reactCssModules2.default)(_Loading2.default)], Loading);
	Loading['defaultProps'] = {
	    text: '加载中'
	};
	exports.default = Loading;

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(259);
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
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

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(89);
	
	var _actions = __webpack_require__(90);
	
	var _Loading = __webpack_require__(256);
	
	var _Loading2 = _interopRequireDefault(_Loading);
	
	var _form = __webpack_require__(147);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _DocContainer = __webpack_require__(201);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _reactCssModules = __webpack_require__(122);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _selectors = __webpack_require__(110);
	
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
	
	var styles = __webpack_require__(291);
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
	            return _react2.default.createElement(_DocContainer2.default, { bodyClass: "book-info", title: bookInfo.title }, _react2.default.createElement("div", { className: "container" }, _react2.default.createElement("article", { styleName: "book-info-container" }, _react2.default.createElement("div", { styleName: "book-detail" }, _react2.default.createElement("header", { styleName: "header" }, isFetching ? _react2.default.createElement(_Loading2.default, null) : _react2.default.createElement("div", null, _react2.default.createElement("div", { styleName: "left-col" }, bookInfo.cover && _react2.default.createElement("div", { styleName: "book-cover" }, _react2.default.createElement("img", { styleName: "img", src: bookInfo.cover }))), _react2.default.createElement("div", { styleName: "right-col" }, _react2.default.createElement("h1", { styleName: "book-name" }, bookInfo.title || '无标题'), _react2.default.createElement("div", { styleName: "book-author" }, _react2.default.createElement("strong", null, "\u4F5C\u8005\uFF1A", bookInfo.authors && bookInfo.authors.map(function (a) {
	                return a.name;
	            }).join(', ') || '未知')), _react2.default.createElement("div", null, _react2.default.createElement(_form.Button, { styleName: "btn-read", to: "/viewer/book/" + bookInfo.id, color: "blue" }, "\u9605\u8BFB"))))), bookInfo.description && _react2.default.createElement("div", { styleName: "content" }, _react2.default.createElement("h2", { styleName: "desc" }, "\u5185\u5BB9\u7B80\u4ECB"), _react2.default.createElement("p", null, bookInfo.description))))));
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

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(292);
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL2luZGV4LnRzPzk5YjMqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL0xvYWRpbmcudHN4P2RkYWYqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL0xvYWRpbmcuc2Nzcz8xMGRiKioqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy5zY3NzPzYxYTQqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQm9va0RldGFpbC9Cb29rRGV0YWlsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQm9va0RldGFpbC9Cb29rRGV0YWlsLnNjc3M/NmNlMSIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQm9va0RldGFpbC9Cb29rRGV0YWlsLnNjc3MiXSwibmFtZXMiOlsiX19kZWNvcmF0ZSIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjIiwiYyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJkIiwiUmVmbGVjdCIsImRlY29yYXRlIiwiaSIsImRlZmluZVByb3BlcnR5IiwiTG9hZGluZyIsInByb3BzIiwic3RhdGUiLCJkeW5hbWljVGV4dCIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInNldFN0YXRlIiwiY2xlYXJJbnRlcnZhbCIsInRleHQiLCJjZW50ZXIiLCJ3cmFwQ2xhc3MiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGVOYW1lIiwic2VsZWN0b3JzIiwic3R5bGVzIiwicmVxdWlyZSIsIkJvb2tEZXRhaWwiLCJib29rSWQiLCJwYXJhbXMiLCJpZCIsImxvYWRCb29rIiwiYm9va0luZm8iLCJpc0ZldGNoaW5nIiwiaXNFbXB0eSIsImJvZHlDbGFzcyIsInRpdGxlIiwiY2xhc3NOYW1lIiwiY292ZXIiLCJzcmMiLCJhdXRob3JzIiwibWFwIiwiYSIsIm5hbWUiLCJqb2luIiwidG8iLCJjb2xvciIsImRlc2NyaXB0aW9uIiwiYWxsb3dNdWx0aXBsZSIsIm1hcFN0YXRlVG9Qcm9wcyIsIm93blByb3BzIiwiY29tbW9uIiwiZW50aXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBVEEsS0FBSUEsYUFBYyxhQUFRLFVBQUtBLFVBQWQsSUFBNkIsVUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNuRixTQUFJQyxJQUFJQyxVQUFVQyxNQUFsQjtBQUFBLFNBQTBCQyxJQUFJSCxJQUFJLENBQUosR0FBUUgsTUFBUixHQUFpQkUsU0FBUyxJQUFULEdBQWdCQSxPQUFPSyxPQUFPQyx3QkFBUCxDQUFnQ1IsTUFBaEMsRUFBd0NDLEdBQXhDLENBQXZCLEdBQXNFQyxJQUFySDtBQUFBLFNBQTJITyxDQUEzSDtBQUNBLFNBQUksUUFBT0MsT0FBUCx5Q0FBT0EsT0FBUCxPQUFtQixRQUFuQixJQUErQixPQUFPQSxRQUFRQyxRQUFmLEtBQTRCLFVBQS9ELEVBQTJFTCxJQUFJSSxRQUFRQyxRQUFSLENBQWlCWixVQUFqQixFQUE2QkMsTUFBN0IsRUFBcUNDLEdBQXJDLEVBQTBDQyxJQUExQyxDQUFKLENBQTNFLEtBQ0ssS0FBSyxJQUFJVSxJQUFJYixXQUFXTSxNQUFYLEdBQW9CLENBQWpDLEVBQW9DTyxLQUFLLENBQXpDLEVBQTRDQSxHQUE1QztBQUFpRCxhQUFJSCxJQUFJVixXQUFXYSxDQUFYLENBQVIsRUFBdUJOLElBQUksQ0FBQ0gsSUFBSSxDQUFKLEdBQVFNLEVBQUVILENBQUYsQ0FBUixHQUFlSCxJQUFJLENBQUosR0FBUU0sRUFBRVQs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UCxNQUFQO0FBR0gsRUFMRDttQkFNZSx5QkFBUW9DLGVBQVIsRUFBeUIsRUFBRWxCLDJCQUFGLEVBQXpCLEVBQXVDSixVQUF2QyxDOzs7Ozs7OztBQzlEZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUF5QywyQkFBMkI7QUFDcEUsb0RBQW1EOzs7Ozs7OztBQ1ZuRDtBQUNBOzs7QUFHQTtBQUNBLCtDQUE4QyxxQkFBcUIsNkVBQTZFLHFCQUFxQixFQUFFLGdDQUFnQyxxQkFBcUIsbUJBQW1CLEVBQUUsbUJBQW1CLHFCQUFxQix1QkFBdUIsdUJBQXVCLEVBQUUsK0JBQStCLHFCQUFxQixzQkFBc0IsRUFBRSxFQUFFLG9CQUFvQix1QkFBdUIsK0JBQStCLHFCQUFxQixFQUFFLCtCQUErQixzQkFBc0Isc0JBQXNCLEVBQUUsRUFBRSxxQkFBcUIsdUJBQXVCLGlCQUFpQixFQUFFLHFCQUFxQixnQkFBZ0IsdUJBQXVCLEVBQUUsc0JBQXNCLGdCQUFnQixzQkFBc0IsRUFBRSxzQkFBc0Isc0JBQXNCLHNCQUFzQix1QkFBdUIsZ0JBQWdCLHFCQUFxQiwwQkFBMEIsRUFBRSx3QkFBd0Isb0JBQW9CLHdCQUF3QixFQUFFLHVCQUF1QixjQUFjLFdBQVcsdUJBQXVCLDZFQUE2RSxxQkFBcUIsdUJBQXVCLEVBQUUsZ0JBQWdCLGlCQUFpQixpQkFBaUIsbUJBQW1CLEVBQUUsaUJBQWlCLHNCQUFzQixzQkFBc0IsZ0JBQWdCLEVBQUU7O0FBRTF6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRyIsImZpbGUiOiI1LjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnO1xuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9pbmRleC50c1xuICoqLyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Mb2FkaW5nLnNjc3MnO1xubGV0IExvYWRpbmcgPSBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkeW5hbWljVGV4dDogJydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmR5bmFtaWNUZXh0Lmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkeW5hbWljVGV4dDogJycgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZHluYW1pY1RleHQ6IHRoaXMuc3RhdGUuZHluYW1pY1RleHQgKyAnLidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHRleHQsIGNlbnRlciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBkeW5hbWljVGV4dCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3Qgd3JhcENsYXNzID0gY2xhc3NuYW1lcyh7XG4gICAgICAgICAgICAnbG9hZGluZy13cmFwLS1jZW50ZXInOiBjZW50ZXIsXG4gICAgICAgICAgICAnbG9hZGluZy13cmFwJzogIWNlbnRlclxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiB3cmFwQ2xhc3MgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGVOYW1lOiBcInRleHQtbG9hZGluZ1wiIH0sIHRleHQgKyBkeW5hbWljVGV4dCkpKTtcbiAgICB9XG59O1xuTG9hZGluZyA9IF9fZGVjb3JhdGUoW1xuICAgIENTU01vZHVsZXMoc3R5bGVzKVxuXSwgTG9hZGluZyk7XG5Mb2FkaW5nWydkZWZhdWx0UHJvcHMnXSA9IHtcbiAgICB0ZXh0OiAn5Yqg6L295LitJ1xufTtcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0xvYWRpbmcuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgN1xuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRleHQtbG9hZGluZ18zZWZxaCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDUwcHggMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogIzk5OTsgfVxcblxcbi50ZXh0LWxvYWRpbmdfM2VmcWgge1xcbiAgbWFyZ2luOiAzMHB4IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4ubG9hZGluZy13cmFwX2h0eVl6IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG4ubG9hZGluZy13cmFwLS1jZW50ZXJfM1BFSWgge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidGV4dC1sb2FkaW5nXCI6IFwidGV4dC1sb2FkaW5nXzNlZnFoXCIsXG5cdFwibG9hZGluZy13cmFwXCI6IFwibG9hZGluZy13cmFwX2h0eVl6XCIsXG5cdFwibG9hZGluZy13cmFwLS1jZW50ZXJcIjogXCJsb2FkaW5nLXdyYXAtLWNlbnRlcl8zUEVJaFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL0xvYWRpbmcuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDdcbiAqKi8iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGxvYWRCb29rIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi8uLi9lbGVtZW50cy9Mb2FkaW5nJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0nO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBEb2NDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Eb2NDb250YWluZXInO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycyc7XG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0Jvb2tEZXRhaWwuc2NzcycpO1xubGV0IEJvb2tEZXRhaWwgPSBjbGFzcyBCb29rRGV0YWlsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvLyBzdGF0aWMgZmV0Y2hEYXRhKHtzdG9yZSwgcGFyYW1zfSkge1xuICAgIC8vICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGxvYWRCb29rKHBhcmFtcy5pZCkpXG4gICAgLy8gfVxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5ib29rSWQgPSBwcm9wcy5wYXJhbXMuaWQ7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmxvYWRCb29rKHRoaXMuYm9va0lkKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGJvb2tJbmZvIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBpc0ZldGNoaW5nID0gXy5pc0VtcHR5KGJvb2tJbmZvKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KERvY0NvbnRhaW5lciwgeyBib2R5Q2xhc3M6IFwiYm9vay1pbmZvXCIsIHRpdGxlOiBib29rSW5mby50aXRsZSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIsIHsgc3R5bGVOYW1lOiBcImJvb2staW5mby1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcImJvb2stZGV0YWlsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIiwgeyBzdHlsZU5hbWU6IFwiaGVhZGVyXCIgfSwgaXNGZXRjaGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nLCBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlTmFtZTogXCJsZWZ0LWNvbFwiIH0sIGJvb2tJbmZvLmNvdmVyICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcImJvb2stY292ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHN0eWxlTmFtZTogXCJpbWdcIiwgc3JjOiBib29rSW5mby5jb3ZlciB9KSkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlTmFtZTogXCJyaWdodC1jb2xcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHsgc3R5bGVOYW1lOiBcImJvb2stbmFtZVwiIH0sIGJvb2tJbmZvLnRpdGxlIHx8ICfml6DmoIfpopgnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZU5hbWU6IFwiYm9vay1hdXRob3JcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHU0RjVDXFx1ODAwNVxcdUZGMUFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9va0luZm8uYXV0aG9ycyAmJiBib29rSW5mby5hdXRob3JzLm1hcChhID0+IGEubmFtZSkuam9pbignLCAnKSB8fCAn5pyq55+lJykpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHN0eWxlTmFtZTogXCJidG4tcmVhZFwiLCB0bzogYC92aWV3ZXIvYm9vay8ke2Jvb2tJbmZvLmlkfWAsIGNvbG9yOiBcImJsdWVcIiB9LCBcIlxcdTk2MDVcXHU4QkZCXCIpKSkpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBib29rSW5mby5kZXNjcmlwdGlvbiAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlTmFtZTogXCJjb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBzdHlsZU5hbWU6IFwiZGVzY1wiIH0sIFwiXFx1NTE4NVxcdTVCQjlcXHU3QjgwXFx1NEVDQlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBib29rSW5mby5kZXNjcmlwdGlvbikpKSkpKSkpO1xuICAgIH1cbn07XG5Cb29rRGV0YWlsID0gX19kZWNvcmF0ZShbXG4gICAgQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgICAgICAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxuICAgIH0pXG5dLCBCb29rRGV0YWlsKTtcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCBpZCA9IG93blByb3BzLnBhcmFtcy5pZDtcbiAgICByZXR1cm4ge1xuICAgICAgICBib29rSW5mbzogc2VsZWN0b3JzLmNvbW1vbi5lbnRpdHkoJ2Jvb2tzJywgaWQpKHN0YXRlKVxuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgbG9hZEJvb2sgfSkoQm9va0RldGFpbCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Cb29rRGV0YWlsL0Jvb2tEZXRhaWwudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9Cb29rRGV0YWlsLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQm9va0RldGFpbC9Cb29rRGV0YWlsLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyOTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gNVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJvb2stZGV0YWlsXzJpelZKIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XFxuICBtYXJnaW4tdG9wOiA0MHB4OyB9XFxuXFxuLmJvb2staW5mby1jb250YWluZXJfMkZ3VlIge1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvOyB9XFxuXFxuLmhlYWRlcl8xdm8wSyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogNDBweCA0MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNTQwcHgpIHtcXG4gICAgLmhlYWRlcl8xdm8wSyB7XFxuICAgICAgcGFkZGluZzogMjBweDsgfSB9XFxuXFxuLmNvbnRlbnRfMXVvLWUge1xcbiAgcGFkZGluZzogNDBweCA0MHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XFxuICBsaW5lLWhlaWdodDogMS43OyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNTQwcHgpIHtcXG4gICAgLmNvbnRlbnRfMXVvLWUge1xcbiAgICAgIHBhZGRpbmc6IDIwcHg7IH0gfVxcblxcbi5idG4tcmVhZF8zRXV3YiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDQwcHg7IH1cXG5cXG4ubGVmdC1jb2xfMkdXZW8ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7IH1cXG5cXG4ucmlnaHQtY29sXzJfcjFwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTQwcHg7IH1cXG5cXG4uYm9vay1uYW1lX2pMdnVCIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IDAgMCAxMHB4IDA7XFxuICBjb2xvcjogIzMzMztcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IH1cXG5cXG4uYm9vay1hdXRob3JfLWVWdlcge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcblxcbi5ib29rLWNvdmVyXzFRSll5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHRvcDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmFkaXVzOiAzcHg7IH1cXG5cXG4uaW1nXzJYWkRnIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLmRlc2NfM3ladFQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMzMzOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiYm9vay1kZXRhaWxcIjogXCJib29rLWRldGFpbF8yaXpWSlwiLFxuXHRcImJvb2staW5mby1jb250YWluZXJcIjogXCJib29rLWluZm8tY29udGFpbmVyXzJGd1ZSXCIsXG5cdFwiaGVhZGVyXCI6IFwiaGVhZGVyXzF2bzBLXCIsXG5cdFwiY29udGVudFwiOiBcImNvbnRlbnRfMXVvLWVcIixcblx0XCJidG4tcmVhZFwiOiBcImJ0bi1yZWFkXzNFdXdiXCIsXG5cdFwibGVmdC1jb2xcIjogXCJsZWZ0LWNvbF8yR1dlb1wiLFxuXHRcInJpZ2h0LWNvbFwiOiBcInJpZ2h0LWNvbF8yX3IxcFwiLFxuXHRcImJvb2stbmFtZVwiOiBcImJvb2stbmFtZV9qTHZ1QlwiLFxuXHRcImJvb2stYXV0aG9yXCI6IFwiYm9vay1hdXRob3JfLWVWdldcIixcblx0XCJib29rLWNvdmVyXCI6IFwiYm9vay1jb3Zlcl8xUUpZeVwiLFxuXHRcImltZ1wiOiBcImltZ18yWFpEZ1wiLFxuXHRcImRlc2NcIjogXCJkZXNjXzN5WnRUXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Cb29rRGV0YWlsL0Jvb2tEZXRhaWwuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI5MlxuICoqIG1vZHVsZSBjaHVua3MgPSA1XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==