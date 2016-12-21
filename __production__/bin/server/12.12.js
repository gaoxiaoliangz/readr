exports.ids = [12];
exports.modules = {

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Tabs = exports.Tab = undefined;
	
	var _Tab = __webpack_require__(315);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _Tabs = __webpack_require__(316);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Tab = _Tab2.default;
	exports.Tabs = _Tabs2.default;
	exports.default = _Tab2.default;

/***/ },

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(90);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tab = function (_Component) {
	    _inherits(Tab, _Component);
	
	    function Tab(props) {
	        _classCallCheck(this, Tab);
	
	        return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this, props));
	    }
	
	    _createClass(Tab, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement("div", { className: "tab" }, this.props.children);
	        }
	    }]);
	
	    return Tab;
	}(_react.Component);
	
	exports.default = Tab;

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(90);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(123);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(125);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	
	var styles = __webpack_require__(317);
	var Tabs = function (_Component) {
	    _inherits(Tabs, _Component);
	
	    function Tabs(props) {
	        _classCallCheck(this, Tabs);
	
	        var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));
	
	        _this.state = {
	            active: _this.props.defaultActive
	        };
	        _this.handleTabClick = _this.handleTabClick.bind(_this);
	        return _this;
	    }
	
	    _createClass(Tabs, [{
	        key: "handleTabClick",
	        value: function handleTabClick(index) {
	            this.setState({
	                active: index
	            });
	            if (this.props.onTabSwitch) {
	                this.props.onTabSwitch(index);
	            }
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var style = this.props.style;
	
	            return _react2.default.createElement("div", __assign({ className: "tabs" }, style ? { style: style } : null), _react2.default.createElement("div", { styleName: "tabs-header" }, _react2.default.createElement("ul", null, this.props.children.map(function (child, index) {
	                return _react2.default.createElement("li", { styleName: (0, _classnames2.default)({ 'active': index === _this2.state.active }), key: index, onClick: _this2.handleTabClick.bind(_this2, index) }, child.props.title);
	            }))), this.props.children.filter(function (child, index) {
	                return index === _this2.state.active;
	            }).map(function (child) {
	                return child.props.children;
	            })[0]);
	        }
	    }]);
	
	    return Tabs;
	}(_react.Component);
	Tabs = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], Tabs);
	Tabs.defaultProps = {
	    defaultActive: 0
	};
	exports.default = Tabs;

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(318);
	    var insertCss = __webpack_require__(129);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(128)();
	// imports
	
	
	// module
	exports.push([module.id, ".tabs-header_y5nSI {\n  margin-bottom: 15px;\n  font-size: 1.2rem; }\n  .tabs-header_y5nSI ul {\n    border-bottom: 1px solid #ddd; }\n    .tabs-header_y5nSI ul li {\n      margin-bottom: -2px;\n      display: inline-block;\n      margin-right: 15px;\n      cursor: pointer;\n      padding: 10px 0; }\n      .tabs-header_y5nSI ul li.active_3bbAo {\n        font-weight: bold;\n        color: #1B267F;\n        border-bottom: 2px solid #1B267F; }\n", ""]);
	
	// exports
	exports.locals = {
		"tabs-header": "tabs-header_y5nSI",
		"active": "active_3bbAo"
	};

/***/ },

/***/ 325:
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
	
	var _form = __webpack_require__(150);
	
	var _Tab = __webpack_require__(314);
	
	var _layout = __webpack_require__(173);
	
	var _reactCssModules = __webpack_require__(125);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _selectors = __webpack_require__(113);
	
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
	
	var styles = __webpack_require__(326);
	var Profile = function (_Component) {
	    _inherits(Profile, _Component);
	
	    // static fetchData({store, params}) {
	    //   return store.dispatch(fetch())
	    // }
	    function Profile(props) {
	        _classCallCheck(this, Profile);
	
	        return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
	    }
	
	    _createClass(Profile, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            // this.props.fetchBooks()
	            this.props.fetchProfile();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var username = this.props.profile.username;
	
	            return _react2.default.createElement(_layout.Container, null, _react2.default.createElement("div", { styleName: "profile" }, _react2.default.createElement("div", { styleName: "page-header" }, _react2.default.createElement("div", { styleName: "user-avatar" }, _react2.default.createElement("img", { src: "https://img3.doubanio.com/icon/ul43646706-43.jpg", alt: "user_avatar" })), _react2.default.createElement("span", { styleName: "username" }, username), _react2.default.createElement("span", { styleName: "tagline" }, "\u6682\u65E0\u7B7E\u540D"), _react2.default.createElement(_form.Button, { onClick: function onClick() {
	                    _this2.props.sendNotification('该功能尚不可用', 'warning');
	                }, styleName: "edit" }, "\u7F16\u8F91")), _react2.default.createElement(_Tab.Tabs, null, _react2.default.createElement(_Tab.Tab, { title: "收藏" }, "\u6682\u65E0\u6570\u636E"), _react2.default.createElement(_Tab.Tab, { title: "读过" }, "\u6682\u65E0\u6570\u636E"))));
	        }
	    }]);
	
	    return Profile;
	}(_react.Component);
	Profile = __decorate([(0, _reactCssModules2.default)(styles)], Profile);
	function mapStateToProps(state, ownProps) {
	    var userId = selectors.sessionUserId(state);
	    return {
	        newestBooks: state.pagination.books.newest ? state.pagination.books.newest.ids.map(function (id) {
	            return state.entities.books[id];
	        }) : [],
	        profile: selectors.common.entity('profiles', userId)(state)
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, fetchCollections: _actions.fetchCollections, fetchProfile: _actions.fetchProfile })(Profile);

/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(327);
	    var insertCss = __webpack_require__(129);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(128)();
	// imports
	
	
	// module
	exports.push([module.id, ".profile_1fQHZ {\n  min-height: 500px;\n  position: relative; }\n\n.page-header_1cNGe {\n  text-align: center;\n  margin: 30px 0; }\n  .page-header_1cNGe span {\n    display: block; }\n\n.username_5A6Jt {\n  margin-top: 20px;\n  font-size: 1.6rem;\n  font-weight: bold;\n  color: #333; }\n\n.edit_3JHc0 {\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.user-avatar_3zB5i {\n  width: 160px;\n  height: 160px;\n  display: inline-block; }\n  .user-avatar_3zB5i img {\n    width: 100%;\n    height: auto;\n    border-radius: 100%;\n    overflow: hidden;\n    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.32); }\n\n.tagline_3EM1H {\n  font-size: 1.2rem; }\n", ""]);
	
	// exports
	exports.locals = {
		"profile": "profile_1fQHZ",
		"page-header": "page-header_1cNGe",
		"username": "username_5A6Jt",
		"edit": "edit_3JHc0",
		"user-avatar": "user-avatar_3zB5i",
		"tagline": "tagline_3EM1H"
	};

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9UYWIvaW5kZXgudHM/MTYyYyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9UYWIvVGFiLnRzeD9kYmI1Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1RhYi9UYWJzLnRzeD9hZjlmIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1RhYi9fdGFiLnNjc3M/ZjA1YioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvVGFiL190YWIuc2Nzcz9jZDgyIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Qcm9maWxlL1Byb2ZpbGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Qcm9maWxlL1Byb2ZpbGUuc2Nzcz9hMTQ2Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Qcm9maWxlL1Byb2ZpbGUuc2NzcyJdLCJuYW1lcyI6WyJUYWIiLCJUYWJzIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJfX2Fzc2lnbiIsIk9iamVjdCIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiX19kZWNvcmF0ZSIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjIiwiYyIsInIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJkIiwiUmVmbGVjdCIsImRlY29yYXRlIiwiZGVmaW5lUHJvcGVydHkiLCJzdHlsZXMiLCJyZXF1aXJlIiwic3RhdGUiLCJhY3RpdmUiLCJkZWZhdWx0QWN0aXZlIiwiaGFuZGxlVGFiQ2xpY2siLCJiaW5kIiwiaW5kZXgiLCJzZXRTdGF0ZSIsIm9uVGFiU3dpdGNoIiwic3R5bGUiLCJzdHlsZU5hbWUiLCJtYXAiLCJjaGlsZCIsIm9uQ2xpY2siLCJ0aXRsZSIsImZpbHRlciIsImFsbG93TXVsdGlwbGUiLCJkZWZhdWx0UHJvcHMiLCJzZWxlY3RvcnMiLCJQcm9maWxlIiwiZmV0Y2hQcm9maWxlIiwidXNlcm5hbWUiLCJwcm9maWxlIiwic3JjIiwiYWx0Iiwic2VuZE5vdGlmaWNhdGlvbiIsIm1hcFN0YXRlVG9Qcm9wcyIsIm93blByb3BzIiwidXNlcklkIiwic2Vzc2lvblVzZXJJZCIsIm5ld2VzdEJvb2tzIiwicGFnaW5hdGlvbiIsImJvb2tzIiwibmV3ZXN0IiwiaWRzIiwiZW50aXRpZXMiLCJpZCIsImNvbW1vbiIsImVudGl0eSIsImZldGNoQ29sbGVjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7U0FDU0EsRztTQUFLQyxJOzs7Ozs7Ozs7Ozs7Ozs7O0FDRmQ7Ozs7Ozs7Ozs7OztLQUNNRCxHOzs7QUFDRixrQkFBWUUsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNUQSxLQURTO0FBRWxCOzs7OzZDQUNtQixDQUNuQjs7O2tDQUNRO0FBQ0wsb0JBQVEsZ0JBQU1DLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsRUFBRUMsV0FBVyxLQUFiLEVBQTNCLEVBQWlELEtBQUtGLEtBQUwsQ0FBV0csUUFBNUQsQ0FBUjtBQUNIOzs7Ozs7bUJBRVVMLEc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDR2Y7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFoQkEsS0FBSU0sV0FBWSxhQUFRLFVBQUtBLFFBQWQsSUFBMkJDLE9BQU9DLE1BQWxDLElBQTRDLFVBQVNDLENBQVQsRUFBWTtBQUNuRSxVQUFLLElBQUlDLENBQUosRUFBT0MsSUFBSSxDQUFYLEVBQWNDLElBQUlDLFVBQVVDLE1BQWpDLEVBQXlDSCxJQUFJQyxDQUE3QyxFQUFnREQsR0FBaEQsRUFBcUQ7QUFDakRELGFBQUlHLFVBQVVGLENBQVYsQ0FBSjtBQUNBLGNBQUssSUFBSUksQ0FB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RSx3QkFBd0IsdUJBQXVCLG1CQUFtQixFQUFFLDZCQUE2QixxQkFBcUIsRUFBRSxxQkFBcUIscUJBQXFCLHNCQUFzQixzQkFBc0IsZ0JBQWdCLEVBQUUsaUJBQWlCLHVCQUF1QixhQUFhLFdBQVcsRUFBRSx3QkFBd0IsaUJBQWlCLGtCQUFrQiwwQkFBMEIsRUFBRSw0QkFBNEIsa0JBQWtCLG1CQUFtQiwwQkFBMEIsdUJBQXVCLGlEQUFpRCxFQUFFLG9CQUFvQixzQkFBc0IsRUFBRTs7QUFFbnFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHIiwiZmlsZSI6IjEyLjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhYiBmcm9tICcuL1RhYic7XG5pbXBvcnQgVGFicyBmcm9tICcuL1RhYnMnO1xuZXhwb3J0IHsgVGFiLCBUYWJzIH07XG5leHBvcnQgZGVmYXVsdCBUYWI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1RhYi9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5jbGFzcyBUYWIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInRhYlwiIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBUYWI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1RhYi9UYWIudHN4XG4gKiovIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL190YWIuc2NzcycpO1xubGV0IFRhYnMgPSBjbGFzcyBUYWJzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmU6IHRoaXMucHJvcHMuZGVmYXVsdEFjdGl2ZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZVRhYkNsaWNrID0gdGhpcy5oYW5kbGVUYWJDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBoYW5kbGVUYWJDbGljayhpbmRleCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZTogaW5kZXhcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uVGFiU3dpdGNoKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uVGFiU3dpdGNoKGluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHN0eWxlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwidGFic1wiIH0sIHN0eWxlID8geyBzdHlsZSB9IDogbnVsbCksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcInRhYnMtaGVhZGVyXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgbnVsbCwgdGhpcy5wcm9wcy5jaGlsZHJlbi5tYXAoKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IHN0eWxlTmFtZTogY2xhc3NOYW1lcyh7ICdhY3RpdmUnOiBpbmRleCA9PT0gdGhpcy5zdGF0ZS5hY3RpdmUgfSksIGtleTogaW5kZXgsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlVGFiQ2xpY2suYmluZCh0aGlzLCBpbmRleCkgfSwgY2hpbGQucHJvcHMudGl0bGUpKTtcbiAgICAgICAgICAgICAgICB9KSkpLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleCA9PT0gdGhpcy5zdGF0ZS5hY3RpdmU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAoY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZC5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgICAgIH0pWzBdKSk7XG4gICAgfVxufTtcblRhYnMgPSBfX2RlY29yYXRlKFtcbiAgICBDU1NNb2R1bGVzKHN0eWxlcywge1xuICAgICAgICBhbGxvd011bHRpcGxlOiB0cnVlXG4gICAgfSlcbl0sIFRhYnMpO1xuVGFicy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZGVmYXVsdEFjdGl2ZTogMFxufTtcbmV4cG9ydCBkZWZhdWx0IFRhYnM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1RhYi9UYWJzLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vX3RhYi5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvVGFiL190YWIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAxMCAxMlxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRhYnMtaGVhZGVyX3k1blNJIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBmb250LXNpemU6IDEuMnJlbTsgfVxcbiAgLnRhYnMtaGVhZGVyX3k1blNJIHVsIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7IH1cXG4gICAgLnRhYnMtaGVhZGVyX3k1blNJIHVsIGxpIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHBhZGRpbmc6IDEwcHggMDsgfVxcbiAgICAgIC50YWJzLWhlYWRlcl95NW5TSSB1bCBsaS5hY3RpdmVfM2JiQW8ge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBjb2xvcjogIzFCMjY3RjtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMUIyNjdGOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidGFicy1oZWFkZXJcIjogXCJ0YWJzLWhlYWRlcl95NW5TSVwiLFxuXHRcImFjdGl2ZVwiOiBcImFjdGl2ZV8zYmJBb1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9UYWIvX3RhYi5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDEwIDEyXG4gKiovIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBmZXRjaENvbGxlY3Rpb25zLCBzZW5kTm90aWZpY2F0aW9uLCBmZXRjaFByb2ZpbGUgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0nO1xuaW1wb3J0IHsgVGFiLCBUYWJzIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvVGFiJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2xheW91dCc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vc3RvcmUvc2VsZWN0b3JzJztcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vUHJvZmlsZS5zY3NzJyk7XG5sZXQgUHJvZmlsZSA9IGNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8vIHN0YXRpYyBmZXRjaERhdGEoe3N0b3JlLCBwYXJhbXN9KSB7XG4gICAgLy8gICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZmV0Y2goKSlcbiAgICAvLyB9XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5mZXRjaEJvb2tzKClcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFByb2ZpbGUoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHByb2ZpbGU6IHsgdXNlcm5hbWUgfSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZU5hbWU6IFwicHJvZmlsZVwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlTmFtZTogXCJwYWdlLWhlYWRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZU5hbWU6IFwidXNlci1hdmF0YXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJodHRwczovL2ltZzMuZG91YmFuaW8uY29tL2ljb24vdWw0MzY0NjcwNi00My5qcGdcIiwgYWx0OiBcInVzZXJfYXZhdGFyXCIgfSkpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlTmFtZTogXCJ1c2VybmFtZVwiIH0sIHVzZXJuYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZU5hbWU6IFwidGFnbGluZVwiIH0sIFwiXFx1NjY4MlxcdTY1RTBcXHU3QjdFXFx1NTQwRFwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgb25DbGljazogKCkgPT4geyB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oJ+ivpeWKn+iDveWwmuS4jeWPr+eUqCcsICd3YXJuaW5nJyk7IH0sIHN0eWxlTmFtZTogXCJlZGl0XCIgfSwgXCJcXHU3RjE2XFx1OEY5MVwiKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJzLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYiwgeyB0aXRsZTogXCLmlLbol49cIiB9LCBcIlxcdTY2ODJcXHU2NUUwXFx1NjU3MFxcdTYzNkVcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFiLCB7IHRpdGxlOiBcIuivu+i/h1wiIH0sIFwiXFx1NjY4MlxcdTY1RTBcXHU2NTcwXFx1NjM2RVwiKSkpKSk7XG4gICAgfVxufTtcblByb2ZpbGUgPSBfX2RlY29yYXRlKFtcbiAgICBDU1NNb2R1bGVzKHN0eWxlcylcbl0sIFByb2ZpbGUpO1xuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIGNvbnN0IHVzZXJJZCA9IHNlbGVjdG9ycy5zZXNzaW9uVXNlcklkKHN0YXRlKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBuZXdlc3RCb29rczogc3RhdGUucGFnaW5hdGlvbi5ib29rcy5uZXdlc3RcbiAgICAgICAgICAgID8gc3RhdGUucGFnaW5hdGlvbi5ib29rcy5uZXdlc3QuaWRzLm1hcChpZCA9PiBzdGF0ZS5lbnRpdGllcy5ib29rc1tpZF0pXG4gICAgICAgICAgICA6IFtdLFxuICAgICAgICBwcm9maWxlOiBzZWxlY3RvcnMuY29tbW9uLmVudGl0eSgncHJvZmlsZXMnLCB1c2VySWQpKHN0YXRlKVxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBzZW5kTm90aWZpY2F0aW9uLCBmZXRjaENvbGxlY3Rpb25zLCBmZXRjaFByb2ZpbGUgfSkoUHJvZmlsZSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Qcm9maWxlL1Byb2ZpbGUudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9Qcm9maWxlLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvUHJvZmlsZS9Qcm9maWxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTJcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9maWxlXzFmUUhaIHtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnBhZ2UtaGVhZGVyXzFjTkdlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMzBweCAwOyB9XFxuICAucGFnZS1oZWFkZXJfMWNOR2Ugc3BhbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLnVzZXJuYW1lXzVBNkp0IHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMzMzM7IH1cXG5cXG4uZWRpdF8zSkhjMCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDsgfVxcblxcbi51c2VyLWF2YXRhcl8zekI1aSB7XFxuICB3aWR0aDogMTYwcHg7XFxuICBoZWlnaHQ6IDE2MHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuICAudXNlci1hdmF0YXJfM3pCNWkgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMzIpOyB9XFxuXFxuLnRhZ2xpbmVfM0VNMUgge1xcbiAgZm9udC1zaXplOiAxLjJyZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJwcm9maWxlXCI6IFwicHJvZmlsZV8xZlFIWlwiLFxuXHRcInBhZ2UtaGVhZGVyXCI6IFwicGFnZS1oZWFkZXJfMWNOR2VcIixcblx0XCJ1c2VybmFtZVwiOiBcInVzZXJuYW1lXzVBNkp0XCIsXG5cdFwiZWRpdFwiOiBcImVkaXRfM0pIYzBcIixcblx0XCJ1c2VyLWF2YXRhclwiOiBcInVzZXItYXZhdGFyXzN6QjVpXCIsXG5cdFwidGFnbGluZVwiOiBcInRhZ2xpbmVfM0VNMUhcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1Byb2ZpbGUvUHJvZmlsZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDEyXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==