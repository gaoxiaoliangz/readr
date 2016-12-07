exports.ids = [12];
exports.modules = {

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Tabs = exports.Tab = undefined;
	
	var _Tab = __webpack_require__(383);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _Tabs = __webpack_require__(384);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Tab = _Tab2.default;
	exports.Tabs = _Tabs2.default;
	exports.default = _Tab2.default;

/***/ },

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(91);
	
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

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(125);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(127);
	
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
	
	var styles = __webpack_require__(385);
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

/***/ 385:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(386);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 386:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, ".tabs-header_y5nSI {\n  margin-bottom: 15px;\n  font-size: 1.2rem; }\n  .tabs-header_y5nSI ul {\n    border-bottom: 1px solid #ddd; }\n    .tabs-header_y5nSI ul li {\n      margin-bottom: -2px;\n      display: inline-block;\n      margin-right: 15px;\n      cursor: pointer;\n      padding: 10px 0; }\n      .tabs-header_y5nSI ul li.active_3bbAo {\n        font-weight: bold;\n        color: #1B267F;\n        border-bottom: 2px solid #1B267F; }\n", ""]);
	
	// exports
	exports.locals = {
		"tabs-header": "tabs-header_y5nSI",
		"active": "active_3bbAo"
	};

/***/ },

/***/ 393:
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
	
	var _form = __webpack_require__(213);
	
	var _Tab = __webpack_require__(382);
	
	var _layout = __webpack_require__(236);
	
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
	
	var styles = __webpack_require__(394);
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
	
	            return _react2.default.createElement(_layout.Container, null, _react2.default.createElement("div", { styleName: "profile" }, _react2.default.createElement("div", { styleName: "page-header" }, _react2.default.createElement("div", { styleName: "user-avatar" }, _react2.default.createElement("img", { src: "https://img3.doubanio.com/icon/ul43646706-43.jpg", alt: "user_avatar" })), _react2.default.createElement("span", { styleName: "username" }, username), _react2.default.createElement("span", { styleName: "tagline" }, "暂无签名"), _react2.default.createElement(_form.Button, { onClick: function onClick() {
	                    _this2.props.sendNotification('该功能尚不可用', 'warning');
	                }, styleName: "edit" }, "编辑")), _react2.default.createElement(_Tab.Tabs, null, _react2.default.createElement(_Tab.Tab, { title: "收藏" }, "暂无数据"), _react2.default.createElement(_Tab.Tab, { title: "读过" }, "暂无数据"))));
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

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(395);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9UYWIvaW5kZXgudHM/MTYyYyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9UYWIvVGFiLnRzeD9kYmI1Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1RhYi9UYWJzLnRzeD9hZjlmIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1RhYi9fdGFiLnNjc3M/ZjA1YioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvVGFiL190YWIuc2Nzcz9jZDgyIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Qcm9maWxlL1Byb2ZpbGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Qcm9maWxlL1Byb2ZpbGUuc2Nzcz9hMTQ2Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Qcm9maWxlL1Byb2ZpbGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVCOzs7O0FBR3ZCOzs7Ozs7U0FBWTtTQUNNOzs7Ozs7Ozs7Ozs7Ozs7O0FDS2xCOzs7Ozs7Ozs7Ozs7S0FBMkI7OztBQUV6QixrQkFBaUI7QUFDZjs7MEdBQ0Y7QUFFaUI7Ozs7NkNBQ2pCLENBRU07Ozs7QUFDRyxvQkFDTCw4QkFBSSxTQUFVLFdBQU0sU0FDYixLQUFNLE1BR2pCO0FBR0Y7Ozs7OzttQkFBa0IsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQnNCOzs7O0FBQ0w7Ozs7QUFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzFDLEtBQVksU0FBVSxvQkFBZTtBQWVyQztBQUE0Qjs7QUFFMUIsbUJBQWlCO0FBQ2Y7O2lIQUFZOztBQUNSLGVBQU07QUFDRixxQkFBTSxNQUFNLE1BQ25CO0FBRlk7QUFHVCxlQUFlLGlCQUFPLE1BQWUsZUFDM0M7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bUIsRUFBRSw2QkFBNkIscUJBQXFCLEVBQUUscUJBQXFCLHFCQUFxQixzQkFBc0Isc0JBQXNCLGdCQUFnQixFQUFFLGlCQUFpQix1QkFBdUIsYUFBYSxXQUFXLEVBQUUsd0JBQXdCLGlCQUFpQixrQkFBa0IsMEJBQTBCLEVBQUUsNEJBQTRCLGtCQUFrQixtQkFBbUIsMEJBQTBCLHVCQUF1QixpREFBaUQsRUFBRSxvQkFBb0Isc0JBQXNCLEVBQUU7O0FBRW5xQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRyIsImZpbGUiOiIxMi4xMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYWIgZnJvbSAnLi9UYWInXG5pbXBvcnQgVGFicyBmcm9tICcuL1RhYnMnXG5cbmV4cG9ydCB7IFRhYiwgVGFicyB9XG5leHBvcnQgZGVmYXVsdCBUYWJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvVGFiL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdGl0bGU6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuY2xhc3MgVGFiIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYlwiPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvVGFiL1RhYi50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL190YWIuc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBvblRhYlN3aXRjaD86IChhY3RpdmVUYWJJbmRleDogbnVtYmVyKSA9PiB2b2lkXG4gIGRlZmF1bHRBY3RpdmU/OiBudW1iZXJcbiAgc3R5bGU/OiBhbnlcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIGFjdGl2ZTogbnVtYmVyXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgVGFicyBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZTogdGhpcy5wcm9wcy5kZWZhdWx0QWN0aXZlXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlVGFiQ2xpY2sgPSB0aGlzLmhhbmRsZVRhYkNsaWNrLmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZVRhYkNsaWNrKGluZGV4KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmU6IGluZGV4XG4gICAgfSlcbiAgICBpZiAodGhpcy5wcm9wcy5vblRhYlN3aXRjaCkge1xuICAgICAgdGhpcy5wcm9wcy5vblRhYlN3aXRjaChpbmRleClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0eWxlIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzXCIgey4uLnN0eWxlID8ge3N0eWxlfSA6IG51bGx9PlxuICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInRhYnMtaGVhZGVyXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgeyh0aGlzLnByb3BzLmNoaWxkcmVuIGFzIGFueSkubWFwKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkgc3R5bGVOYW1lPXtjbGFzc05hbWVzKHsnYWN0aXZlJzogaW5kZXggPT09IHRoaXMuc3RhdGUuYWN0aXZlfSl9IGtleT17aW5kZXh9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlVGFiQ2xpY2suYmluZCh0aGlzLCBpbmRleCkgfT5cbiAgICAgICAgICAgICAgICAgIHtjaGlsZC5wcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSB9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICAodGhpcy5wcm9wcy5jaGlsZHJlbiBhcyBhbnkpXG4gICAgICAgICAgICAuZmlsdGVyKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGluZGV4ID09PSB0aGlzLnN0YXRlLmFjdGl2ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoY2hpbGQgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gY2hpbGQucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICAgIH0pWzBdXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4oVGFicyBhcyBhbnkpLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGVmYXVsdEFjdGl2ZTogMFxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1RhYi9UYWJzLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vX3RhYi5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvVGFiL190YWIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDM4NVxuICoqIG1vZHVsZSBjaHVua3MgPSAxMCAxMlxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRhYnMtaGVhZGVyX3k1blNJIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBmb250LXNpemU6IDEuMnJlbTsgfVxcbiAgLnRhYnMtaGVhZGVyX3k1blNJIHVsIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7IH1cXG4gICAgLnRhYnMtaGVhZGVyX3k1blNJIHVsIGxpIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHBhZGRpbmc6IDEwcHggMDsgfVxcbiAgICAgIC50YWJzLWhlYWRlcl95NW5TSSB1bCBsaS5hY3RpdmVfM2JiQW8ge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBjb2xvcjogIzFCMjY3RjtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMUIyNjdGOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidGFicy1oZWFkZXJcIjogXCJ0YWJzLWhlYWRlcl95NW5TSVwiLFxuXHRcImFjdGl2ZVwiOiBcImFjdGl2ZV8zYmJBb1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9UYWIvX3RhYi5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzg2XG4gKiogbW9kdWxlIGNodW5rcyA9IDEwIDEyXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZmV0Y2hDb2xsZWN0aW9ucywgc2VuZE5vdGlmaWNhdGlvbiwgZmV0Y2hQcm9maWxlIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0nXG5pbXBvcnQgeyBUYWIsIFRhYnMgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9UYWInXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9sYXlvdXQnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi9zdG9yZS9zZWxlY3RvcnMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1Byb2ZpbGUuc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBmZXRjaEJvb2tzPzogYW55XG4gIG5ld2VzdEJvb2tzPzogYW55XG4gIGZldGNoUHJvZmlsZT86IGFueVxuICBzZW5kTm90aWZpY2F0aW9uPzogYW55XG4gIHByb2ZpbGU/OiBhbnlcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgUHJvZmlsZSBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIHt9PiB7XG5cbiAgLy8gc3RhdGljIGZldGNoRGF0YSh7c3RvcmUsIHBhcmFtc30pIHtcbiAgLy8gICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZmV0Y2goKSlcbiAgLy8gfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyB0aGlzLnByb3BzLmZldGNoQm9va3MoKVxuICAgIHRoaXMucHJvcHMuZmV0Y2hQcm9maWxlKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByb2ZpbGU6IHsgdXNlcm5hbWUgfSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPVwicHJvZmlsZVwiPlxuICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwidXNlci1hdmF0YXJcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZzMuZG91YmFuaW8uY29tL2ljb24vdWw0MzY0NjcwNi00My5qcGdcIiBhbHQ9XCJ1c2VyX2F2YXRhclwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwidXNlcm5hbWVcIj57dXNlcm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwidGFnbGluZVwiPuaaguaXoOetvuWQjTwvc3Bhbj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oJ+ivpeWKn+iDveWwmuS4jeWPr+eUqCcsICd3YXJuaW5nJykgfX0gc3R5bGVOYW1lPVwiZWRpdFwiPue8lui+kTwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxUYWJzPlxuICAgICAgICAgICAgPFRhYiB0aXRsZT1cIuaUtuiXj1wiPlxuICAgICAgICAgICAgICDmmoLml6DmlbDmja5cbiAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgPFRhYiB0aXRsZT1cIuivu+i/h1wiPlxuICAgICAgICAgICAgICDmmoLml6DmlbDmja5cbiAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICBjb25zdCB1c2VySWQgPSBzZWxlY3RvcnMuc2Vzc2lvblVzZXJJZChzdGF0ZSlcblxuICByZXR1cm4ge1xuICAgIG5ld2VzdEJvb2tzOiBzdGF0ZS5wYWdpbmF0aW9uLmJvb2tzLm5ld2VzdFxuICAgICAgPyBzdGF0ZS5wYWdpbmF0aW9uLmJvb2tzLm5ld2VzdC5pZHMubWFwKGlkID0+IHN0YXRlLmVudGl0aWVzLmJvb2tzW2lkXSlcbiAgICAgIDogW10sXG4gICAgcHJvZmlsZTogc2VsZWN0b3JzLmNvbW1vbi5lbnRpdHkoJ3Byb2ZpbGVzJywgdXNlcklkKShzdGF0ZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIHsgc2VuZE5vdGlmaWNhdGlvbiwgZmV0Y2hDb2xsZWN0aW9ucywgZmV0Y2hQcm9maWxlIH1cbikoUHJvZmlsZSBhcyBhbnkpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Qcm9maWxlL1Byb2ZpbGUudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9Qcm9maWxlLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvUHJvZmlsZS9Qcm9maWxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzOTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTJcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9maWxlXzFmUUhaIHtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnBhZ2UtaGVhZGVyXzFjTkdlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMzBweCAwOyB9XFxuICAucGFnZS1oZWFkZXJfMWNOR2Ugc3BhbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLnVzZXJuYW1lXzVBNkp0IHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMzMzM7IH1cXG5cXG4uZWRpdF8zSkhjMCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDsgfVxcblxcbi51c2VyLWF2YXRhcl8zekI1aSB7XFxuICB3aWR0aDogMTYwcHg7XFxuICBoZWlnaHQ6IDE2MHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuICAudXNlci1hdmF0YXJfM3pCNWkgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMzIpOyB9XFxuXFxuLnRhZ2xpbmVfM0VNMUgge1xcbiAgZm9udC1zaXplOiAxLjJyZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJwcm9maWxlXCI6IFwicHJvZmlsZV8xZlFIWlwiLFxuXHRcInBhZ2UtaGVhZGVyXCI6IFwicGFnZS1oZWFkZXJfMWNOR2VcIixcblx0XCJ1c2VybmFtZVwiOiBcInVzZXJuYW1lXzVBNkp0XCIsXG5cdFwiZWRpdFwiOiBcImVkaXRfM0pIYzBcIixcblx0XCJ1c2VyLWF2YXRhclwiOiBcInVzZXItYXZhdGFyXzN6QjVpXCIsXG5cdFwidGFnbGluZVwiOiBcInRhZ2xpbmVfM0VNMUhcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1Byb2ZpbGUvUHJvZmlsZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzk1XG4gKiogbW9kdWxlIGNodW5rcyA9IDEyXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==