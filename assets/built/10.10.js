webpackJsonp([10],{

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switcher = __webpack_require__(97);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switcher2.default;

/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(21);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
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
	
	var styles = __webpack_require__(98);
	var Switcher = function (_Component) {
	    _inherits(Switcher, _Component);
	
	    function Switcher(props) {
	        _classCallCheck(this, Switcher);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Switcher).call(this, props));
	    }
	
	    _createClass(Switcher, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props;
	            var isOn = _props.value;
	            var className = _props.className;
	
	            if (typeof this.props.value === 'string') {
	                if (isOn === '1' || isOn === 'true') {
	                    isOn = true;
	                } else {
	                    isOn = false;
	                }
	            }
	            var state = Boolean(isOn) ? 'on' : 'off';
	            return _react2.default.createElement("div", { className: className || '', styleName: "switcher-wrap" }, this.props.title && _react2.default.createElement("span", null, this.props.title), _react2.default.createElement("div", { onClick: function onClick(e) {
	                    if (_this2.props.onChange) {
	                        var newValue = void 0;
	                        if (_this2.props.options) {
	                            var currentValueIndex = _this2.props.options.map(function (option) {
	                                return option.value;
	                            }).indexOf(_this2.props.value);
	                            if (currentValueIndex === 1) {
	                                newValue = _this2.props.options[0].value;
	                            } else if (currentValueIndex === 0) {
	                                newValue = _this2.props.options[1].value;
	                            } else {
	                                newValue = _this2.props.options[0].value;
	                                console.error('当前数据有误，将使用默认数据！');
	                            }
	                        } else {
	                            if (typeof _this2.props.value === 'string') {
	                                console.error('没有给 options 时必须使用布尔型的 value！');
	                            } else {
	                                newValue = !_this2.props.value;
	                            }
	                        }
	                        _this2.props.onChange(newValue);
	                    }
	                }, styleName: "switcher--" + state }, _react2.default.createElement("div", { styleName: "switcher-button" }), _react2.default.createElement("div", { styleName: "switcher-track" })));
	        }
	    }]);
	
	    return Switcher;
	}(_react.Component);
	Switcher = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], Switcher);
	exports.default = Switcher;

/***/ },

/***/ 98:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"switcher-wrap":"switcher-wrap_3UMAU","switcher":"switcher_G3n4_","switcher--off":"switcher--off_1EoOU","switcher--on":"switcher--on_2xiwO","switcher-button":"switcher-button_2kHGL","switcher-track":"switcher-track_xvhjg"};

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(7);
	
	var _actions = __webpack_require__(8);
	
	var _lodash = __webpack_require__(25);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _PreferenceList = __webpack_require__(160);
	
	var _PreferenceList2 = _interopRequireDefault(_PreferenceList);
	
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
	
	var Preference = function (_Component) {
	    _inherits(Preference, _Component);
	
	    // static fetchData({store, params}) {
	    //   return store.dispatch(fetch())
	    // }
	
	    function Preference(props) {
	        _classCallCheck(this, Preference);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Preference).call(this, props));
	
	        _this.state = {
	            showFav: true
	        };
	        return _this;
	    }
	
	    _createClass(Preference, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.fetchProfile();
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_PreferenceList2.default, __assign({}, this.props.profile));
	        }
	    }]);
	
	    return Preference;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        profile: _lodash2.default.get(state.payloads, 'profile', {})
	    };
	}, { sendNotification: _actions.sendNotification, fetchProfile: _actions.fetchProfile })(Preference);

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PreferenceList = __webpack_require__(161);
	
	var _PreferenceList2 = _interopRequireDefault(_PreferenceList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _PreferenceList2.default;

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Switcher = __webpack_require__(96);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);
	
	var _reactCssModules = __webpack_require__(21);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
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
	
	var styles = __webpack_require__(162);
	var PreferenceList = function (_Component) {
	    _inherits(PreferenceList, _Component);
	
	    function PreferenceList(props) {
	        _classCallCheck(this, PreferenceList);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(PreferenceList).call(this, props));
	    }
	
	    _createClass(PreferenceList, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props;
	            var username = _props.username;
	            var email = _props.email;
	            var encriptedPassword = _props.encriptedPassword;
	            var showFav = _props.showFav;
	
	            return _react2.default.createElement("div", { styleName: "settings" }, _react2.default.createElement("div", { className: "page-content" }, _react2.default.createElement("div", { className: "page-header" }, _react2.default.createElement("h1", { style: { marginBottom: 0 }, className: "page-title" }, "设置"), _react2.default.createElement("span", null, "功能开发中，暂为只读")), _react2.default.createElement("ul", { styleName: "options" }, _react2.default.createElement("li", { styleName: "option" }, _react2.default.createElement("h2", null, "用户名"), _react2.default.createElement("span", { styleName: "option-input" }, "readrweb.com/@", _react2.default.createElement("strong", null, username)), _react2.default.createElement("span", { styleName: "edit" }, "编辑")), _react2.default.createElement("li", { styleName: "option" }, _react2.default.createElement("h2", null, "邮箱"), _react2.default.createElement("span", { styleName: "option-input" }, email), _react2.default.createElement("span", { styleName: "edit" }, "编辑")), _react2.default.createElement("li", { styleName: "option" }, _react2.default.createElement("h2", null, "密码"), _react2.default.createElement("span", { styleName: "option-input" }, "******"), _react2.default.createElement("span", { styleName: "edit" }, "编辑")), _react2.default.createElement("li", { styleName: "option" }, _react2.default.createElement("h2", null, "公开展示我的收藏"), _react2.default.createElement("span", { styleName: "option-desc" }, "关闭后其他用户将无法查看您的收藏"), _react2.default.createElement(_Switcher2.default, { styleName: "switcher", value: showFav, onChange: function onChange(newValue) {
	                    _this2.setState({
	                        showFav: newValue
	                    });
	                } })))));
	        }
	    }]);
	
	    return PreferenceList;
	}(_react.Component);
	PreferenceList = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], PreferenceList);
	exports.default = PreferenceList;

/***/ },

/***/ 162:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"settings":"settings_239Dg","options":"options_ADPll","option":"option_aC25y","option-input":"option-input_1K3I6","option-desc":"option-desc_3wAfQ","user-avatar":"user-avatar_1g7D4","edit":"edit_kzVtT","switcher":"switcher_sb9M0"};

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvaW5kZXgudHM/NGQwZiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvU3dpdGNoZXIudHN4P2MzZWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvX3N3aXRjaGVyLnNjc3M/MGRjZSIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvUHJlZmVyZW5jZS50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9QcmVmZXJlbmNlL1ByZWZlcmVuY2VMaXN0L2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvUHJlZmVyZW5jZS9QcmVmZXJlbmNlTGlzdC9QcmVmZXJlbmNlTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvUHJlZmVyZW5jZUxpc3QvX3ByZWZlcmVuY2UtbGlzdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3VCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RpQjs7OztBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsS0FBWSxTQUFVLG9CQUFvQjtBQXdCMUM7OztBQUVFLHVCQUFpQixPQUNmOzs7NEZBR2U7Ozs7OzZDQUdYOzs7a0NBQ0E7OzswQkFBaUMsS0FBTTtpQkFBMUIsY0FBTjtpQkFBbUI7O0FBRTNCLGlCQUFDLE9BQVcsS0FBTSxNQUFNLFVBQWMsVUFBRTtBQUN0QyxxQkFBSyxTQUFRLE9BQVEsU0FBWTtBQUM5Qiw0QkFDQSxLQUZnQzt3QkFFOUI7QUFDRiw0QkFFUDs7O0FBQ0QsaUJBQVMsUUFBVSxRQUFNLFFBQU8sT0FBUTtBQUVqQyxvQkFDTCw4QkFBSSxTQUFVLFdBQVcsYUFBTyxJQUFVLFdBQWdCLG1CQUVs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Q3pFN0I7QUFDQSxtQkFBa0IsdU8iLCJmaWxlIjoiMTAuMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3dpdGNoZXIgZnJvbSAnLi9Td2l0Y2hlcidcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaGVyXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9fc3dpdGNoZXIuc2NzcycpXG5cbi8vIGludGVyZmFjZSBQcm9wcyB7XG4vLyAgIG9uOiBib29sZWFuXG4vLyB9XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhblxuICB0aXRsZT86IHN0cmluZ1xuICBvbkNoYW5nZT86IChuZXdWYWx1ZTogc3RyaW5nIHwgYm9vbGVhbikgPT4gdm9pZFxuICBvcHRpb25zPzoge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhblxuICB9W11cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHN0eWxlTmFtZT86IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBTd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyB2YWx1ZTogaXNPbiwgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoaXNPbiA9PT0gJzEnIHx8IGlzT24gPT09ICd0cnVlJykge1xuICAgICAgICBpc09uID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNPbiA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzdGF0ZSA9IEJvb2xlYW4oaXNPbikgPyAnb24nIDogJ29mZidcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lIHx8ICcnfSBzdHlsZU5hbWU9XCJzd2l0Y2hlci13cmFwXCI+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLnRpdGxlICYmIChcbiAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlXG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZUluZGV4ID0gdGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKS5pbmRleE9mKHRoaXMucHJvcHMudmFsdWUpXG5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlSW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5wcm9wcy5vcHRpb25zWzBdLnZhbHVlXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VmFsdWVJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLnByb3BzLm9wdGlvbnNbMV0udmFsdWVcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLnByb3BzLm9wdGlvbnNbMF0udmFsdWVcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+W9k+WJjeaVsOaNruacieivr++8jOWwhuS9v+eUqOm7mOiupOaVsOaNru+8gScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy52YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+ayoeaciee7mSBvcHRpb25zIOaXtuW/hemhu+S9v+eUqOW4g+WwlOWei+eahCB2YWx1Ze+8gScpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gIXRoaXMucHJvcHMudmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ld1ZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgc3R5bGVOYW1lPXtgc3dpdGNoZXItLSR7c3RhdGV9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3dpdGNoZXItYnV0dG9uXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci10cmFja1wiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vLyBjbGFzcyBTd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cbi8vICAgY29uc3RydWN0b3IocHJvcHMpIHtcbi8vICAgICBzdXBlcihwcm9wcylcbi8vICAgfVxuXG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5vbiA/ICdvbicgOiAnb2ZmJ1xuLy8gICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSArICcgc3dpdGNoZXInXG5cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPGRpdiBzdHlsZU5hbWU9e3RoaXMucHJvcHMub24gPyAnc3dpdGNoZXItLW9uJyA6ICdzd2l0Y2hlci0tb2ZmJ30+XG4vLyAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3dpdGNoZXItYnV0dG9uXCI+PC9kaXY+XG4vLyAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3dpdGNoZXItdHJhY2tcIj48L2Rpdj5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIClcbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hlclxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL1N3aXRjaGVyLnRzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInN3aXRjaGVyLXdyYXBcIjpcInN3aXRjaGVyLXdyYXBfM1VNQVVcIixcInN3aXRjaGVyXCI6XCJzd2l0Y2hlcl9HM240X1wiLFwic3dpdGNoZXItLW9mZlwiOlwic3dpdGNoZXItLW9mZl8xRW9PVVwiLFwic3dpdGNoZXItLW9uXCI6XCJzd2l0Y2hlci0tb25fMnhpd09cIixcInN3aXRjaGVyLWJ1dHRvblwiOlwic3dpdGNoZXItYnV0dG9uXzJrSEdMXCIsXCJzd2l0Y2hlci10cmFja1wiOlwic3dpdGNoZXItdHJhY2tfeHZoamdcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL19zd2l0Y2hlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gOThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAxMFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24sIGZldGNoUHJvZmlsZSB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG4vLyBpbXBvcnQgQm9keSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0JvZHknXG4vLyBpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IFByZWZlcmVuY2VMaXN0IGZyb20gJy4vUHJlZmVyZW5jZUxpc3QnXG5cbmludGVyZmFjZSBJQWxsUHJvcHMge1xuICBmZXRjaFByb2ZpbGU/OiBhbnlcbiAgcHJvZmlsZT86IGFueVxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgc2hvd0Zhdj86IGJvb2xlYW5cbn1cblxuY2xhc3MgUHJlZmVyZW5jZSBleHRlbmRzIENvbXBvbmVudDxJQWxsUHJvcHMsIElTdGF0ZT4ge1xuXG4gIC8vIHN0YXRpYyBmZXRjaERhdGEoe3N0b3JlLCBwYXJhbXN9KSB7XG4gIC8vICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGZldGNoKCkpXG4gIC8vIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93RmF2OiB0cnVlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5mZXRjaFByb2ZpbGUoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFByZWZlcmVuY2VMaXN0XG4gICAgICAgIHsuLi50aGlzLnByb3BzLnByb2ZpbGV9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2ZpbGU6IF8uZ2V0KHN0YXRlLnBheWxvYWRzLCAncHJvZmlsZScsIHt9KVxuICAgIH1cbiAgfSxcbiAgeyBzZW5kTm90aWZpY2F0aW9uLCBmZXRjaFByb2ZpbGUgfVxuKShQcmVmZXJlbmNlIGFzIGFueSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9QcmVmZXJlbmNlL1ByZWZlcmVuY2UudHN4XG4gKiovIiwiaW1wb3J0IFByZWZlcmVuY2VMaXN0IGZyb20gJy4vUHJlZmVyZW5jZUxpc3QnXG5leHBvcnQgZGVmYXVsdCBQcmVmZXJlbmNlTGlzdFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvUHJlZmVyZW5jZUxpc3QvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU3dpdGNoZXIgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvU3dpdGNoZXInXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vX3ByZWZlcmVuY2UtbGlzdC5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHVzZXJuYW1lOiBzdHJpbmdcbiAgZW1haWw6IHN0cmluZ1xuICBlbmNyaXB0ZWRQYXNzd29yZDogc3RyaW5nXG4gIHNob3dGYXY6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgUHJlZmVyZW5jZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1c2VybmFtZSwgZW1haWwsIGVuY3JpcHRlZFBhc3N3b3JkLCBzaG93RmF2IH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzZXR0aW5nc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMSBzdHlsZT17e21hcmdpbkJvdHRvbTogMH19IGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj7orr7nva48L2gxPlxuICAgICAgICAgICAgPHNwYW4+5Yqf6IO95byA5Y+R5Lit77yM5pqC5Li65Y+q6K+7PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx1bCBzdHlsZU5hbWU9XCJvcHRpb25zXCI+XG4gICAgICAgICAgICA8bGkgc3R5bGVOYW1lPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgIDxoMj7nlKjmiLflkI08L2gyPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZU5hbWU9XCJvcHRpb24taW5wdXRcIj5yZWFkcndlYi5jb20vQDxzdHJvbmc+e3VzZXJuYW1lfTwvc3Ryb25nPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwiZWRpdFwiPue8lui+kTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgc3R5bGVOYW1lPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgIDxoMj7pgq7nrrE8L2gyPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZU5hbWU9XCJvcHRpb24taW5wdXRcIj57ZW1haWx9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZU5hbWU9XCJlZGl0XCI+57yW6L6RPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBzdHlsZU5hbWU9XCJvcHRpb25cIj5cbiAgICAgICAgICAgICAgPGgyPuWvhueggTwvaDI+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cIm9wdGlvbi1pbnB1dFwiPioqKioqKjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwiZWRpdFwiPue8lui+kTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgc3R5bGVOYW1lPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgIDxoMj7lhazlvIDlsZXnpLrmiJHnmoTmlLbol488L2gyPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZU5hbWU9XCJvcHRpb24tZGVzY1wiPuWFs+mXreWQjuWFtuS7lueUqOaIt+WwhuaXoOazleafpeeci+aCqOeahOaUtuiXjzwvc3Bhbj5cbiAgICAgICAgICAgICAgPFN3aXRjaGVyXG4gICAgICAgICAgICAgICAgc3R5bGVOYW1lPVwic3dpdGNoZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtzaG93RmF2fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtuZXdWYWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0ZhdjogbmV3VmFsdWUgYXMgYm9vbGVhblxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmVmZXJlbmNlTGlzdFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvUHJlZmVyZW5jZUxpc3QvUHJlZmVyZW5jZUxpc3QudHN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wic2V0dGluZ3NcIjpcInNldHRpbmdzXzIzOURnXCIsXCJvcHRpb25zXCI6XCJvcHRpb25zX0FEUGxsXCIsXCJvcHRpb25cIjpcIm9wdGlvbl9hQzI1eVwiLFwib3B0aW9uLWlucHV0XCI6XCJvcHRpb24taW5wdXRfMUszSTZcIixcIm9wdGlvbi1kZXNjXCI6XCJvcHRpb24tZGVzY18zd0FmUVwiLFwidXNlci1hdmF0YXJcIjpcInVzZXItYXZhdGFyXzFnN0Q0XCIsXCJlZGl0XCI6XCJlZGl0X2t6VnRUXCIsXCJzd2l0Y2hlclwiOlwic3dpdGNoZXJfc2I5TTBcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9QcmVmZXJlbmNlL1ByZWZlcmVuY2VMaXN0L19wcmVmZXJlbmNlLWxpc3Quc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDE2MlxuICoqIG1vZHVsZSBjaHVua3MgPSAxMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=