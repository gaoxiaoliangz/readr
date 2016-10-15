exports.ids = [10];
exports.modules = {

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switcher = __webpack_require__(266);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switcher2.default;

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(108);
	
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
	
	var styles = __webpack_require__(267);
	var Switcher = function (_Component) {
	    _inherits(Switcher, _Component);
	
	    function Switcher(props) {
	        _classCallCheck(this, Switcher);
	
	        return _possibleConstructorReturn(this, (Switcher.__proto__ || Object.getPrototypeOf(Switcher)).call(this, props));
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

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(268);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(111)();
	// imports
	
	
	// module
	exports.push([module.id, ".switcher-wrap_3UMAU {\n  display: inline-block; }\n\n.switcher_G3n4_, .switcher--off_1EoOU, .switcher--on_2xiwO {\n  display: inline-block;\n  width: 40px;\n  position: relative;\n  cursor: pointer;\n  margin: 0 5px;\n  color: green; }\n\n.switcher-button_2kHGL {\n  background: #1B267F;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 0;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.32); }\n\n.switcher-track_xvhjg {\n  height: 10px;\n  margin-top: 5px;\n  border-radius: 50px; }\n\n.switcher--off_1EoOU .switcher-track_xvhjg {\n  background: #ddd; }\n\n.switcher--off_1EoOU .switcher-button_2kHGL {\n  left: 0; }\n\n.switcher--on_2xiwO .switcher-button_2kHGL {\n  left: 20px; }\n\n.switcher--on_2xiwO .switcher-track_xvhjg {\n  background: #2e40d2; }\n", ""]);
	
	// exports
	exports.locals = {
		"switcher-wrap": "switcher-wrap_3UMAU",
		"switcher": "switcher_G3n4_",
		"switcher--off": "switcher--off_1EoOU",
		"switcher--on": "switcher--on_2xiwO",
		"switcher-button": "switcher-button_2kHGL",
		"switcher-track": "switcher-track_xvhjg"
	};

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(84);
	
	var _actions = __webpack_require__(85);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _PreferenceList = __webpack_require__(352);
	
	var _PreferenceList2 = _interopRequireDefault(_PreferenceList);
	
	var _DocContainer = __webpack_require__(245);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
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
	
	        var _this = _possibleConstructorReturn(this, (Preference.__proto__ || Object.getPrototypeOf(Preference)).call(this, props));
	
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
	            return _react2.default.createElement(_DocContainer2.default, { title: "设置" }, _react2.default.createElement("div", { className: "container" }, _react2.default.createElement(_PreferenceList2.default, __assign({}, this.props.profile))));
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

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PreferenceList = __webpack_require__(353);
	
	var _PreferenceList2 = _interopRequireDefault(_PreferenceList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _PreferenceList2.default;

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Switcher = __webpack_require__(265);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);
	
	var _reactCssModules = __webpack_require__(108);
	
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
	
	var styles = __webpack_require__(354);
	var PreferenceList = function (_Component) {
	    _inherits(PreferenceList, _Component);
	
	    function PreferenceList(props) {
	        _classCallCheck(this, PreferenceList);
	
	        return _possibleConstructorReturn(this, (PreferenceList.__proto__ || Object.getPrototypeOf(PreferenceList)).call(this, props));
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

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(355);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(111)();
	// imports
	
	
	// module
	exports.push([module.id, ".settings_LlmaB .options_3LAJ2 {\n  margin-top: -35px; }\n\n.settings_LlmaB .option_3zvSV {\n  padding: 30px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.14);\n  position: relative; }\n  .settings_LlmaB .option_3zvSV h2 {\n    color: #333;\n    font-size: 1.2rem;\n    margin: 0;\n    margin-bottom: 5px; }\n  .settings_LlmaB .option_3zvSV:last-child {\n    display: none; }\n\n.settings_LlmaB .option-input_3Nlu0,\n.settings_LlmaB .option-desc_cSyEY {\n  display: block; }\n\n.settings_LlmaB .user-avatar_24IHX {\n  width: 100px;\n  height: 100px; }\n\n.settings_LlmaB .edit_2PegI,\n.settings_LlmaB .switcher_Jgg5T {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  margin-top: -19px; }\n\n.settings_LlmaB .switcher_Jgg5T {\n  margin-top: -8px; }\n\n.settings_LlmaB .edit_2PegI {\n  border: 1px solid #ddd;\n  padding: 6px 16px;\n  border-radius: 100px;\n  cursor: pointer;\n  display: none; }\n", ""]);
	
	// exports
	exports.locals = {
		"settings": "settings_LlmaB",
		"options": "options_3LAJ2",
		"option": "option_3zvSV",
		"option-input": "option-input_3Nlu0",
		"option-desc": "option-desc_cSyEY",
		"user-avatar": "user-avatar_24IHX",
		"edit": "edit_2PegI",
		"switcher": "switcher_Jgg5T"
	};

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvaW5kZXgudHM/NGQwZiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvU3dpdGNoZXIudHN4P2MzZWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvX3N3aXRjaGVyLnNjc3M/YTIxZSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvX3N3aXRjaGVyLnNjc3M/NTFjYiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvUHJlZmVyZW5jZS50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9QcmVmZXJlbmNlL1ByZWZlcmVuY2VMaXN0L2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvUHJlZmVyZW5jZS9QcmVmZXJlbmNlTGlzdC9QcmVmZXJlbmNlTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvUHJlZmVyZW5jZUxpc3QvUHJlZmVyZW5jZUxpc3Quc2Nzcz9iNWQ3Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9QcmVmZXJlbmNlL1ByZWZlcmVuY2VMaXN0L1ByZWZlcmVuY2VMaXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3VCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RpQjs7OztBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsS0FBWSxTQUFVLG9CQUFvQjtBQXdCMUM7QUFBZ0M7O0FBRTlCLHVCQUFpQjtBQUNmOztvSEFDRjtBQUVpQjs7Ozs2Q0FDakIsQ0FFTTs7OztBQUNBOzswQkFBaUMsS0FBTTtpQkFBMUIsY0FBTjtpQkFBbUI7O0FBRTNCLGlCQUFD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bUJBQW1CLEVBQUUsd0NBQXdDLGlCQUFpQixrQkFBa0IsRUFBRSxtRUFBbUUsdUJBQXVCLGFBQWEsYUFBYSxzQkFBc0IsRUFBRSxxQ0FBcUMscUJBQXFCLEVBQUUsaUNBQWlDLDJCQUEyQixzQkFBc0IseUJBQXlCLG9CQUFvQixrQkFBa0IsRUFBRTs7QUFFNzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRyIsImZpbGUiOiIxMC4xMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTd2l0Y2hlciBmcm9tICcuL1N3aXRjaGVyJ1xuZXhwb3J0IGRlZmF1bHQgU3dpdGNoZXJcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL19zd2l0Y2hlci5zY3NzJylcblxuLy8gaW50ZXJmYWNlIFByb3BzIHtcbi8vICAgb246IGJvb2xlYW5cbi8vIH1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuXG4gIHRpdGxlPzogc3RyaW5nXG4gIG9uQ2hhbmdlPzogKG5ld1ZhbHVlOiBzdHJpbmcgfCBib29sZWFuKSA9PiB2b2lkXG4gIG9wdGlvbnM/OiB7XG4gICAgbmFtZT86IHN0cmluZ1xuICAgIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuXG4gIH1bXVxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgc3R5bGVOYW1lPzogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIFN3aXRjaGVyIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IHZhbHVlOiBpc09uLCBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy52YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChpc09uID09PSAnMScgfHwgaXNPbiA9PT0gJ3RydWUnKSB7XG4gICAgICAgIGlzT24gPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc09uID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN0YXRlID0gQm9vbGVhbihpc09uKSA/ICdvbicgOiAnb2ZmJ1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWUgfHwgJyd9IHN0eWxlTmFtZT1cInN3aXRjaGVyLXdyYXBcIj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMudGl0bGUgJiYgKFxuICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICBsZXQgbmV3VmFsdWVcblxuICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlSW5kZXggPSB0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpLmluZGV4T2YodGhpcy5wcm9wcy52YWx1ZSlcblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWVJbmRleCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLnByb3BzLm9wdGlvbnNbMF0udmFsdWVcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRWYWx1ZUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJvcHMub3B0aW9uc1sxXS52YWx1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJvcHMub3B0aW9uc1swXS52YWx1ZVxuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5b2T5YmN5pWw5o2u5pyJ6K+v77yM5bCG5L2/55So6buY6K6k5pWw5o2u77yBJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5rKh5pyJ57uZIG9wdGlvbnMg5pe25b+F6aG75L2/55So5biD5bCU5Z6L55qEIHZhbHVl77yBJylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSAhdGhpcy5wcm9wcy52YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmV3VmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBzdHlsZU5hbWU9e2Bzd2l0Y2hlci0tJHtzdGF0ZX1gfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci1idXR0b25cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInN3aXRjaGVyLXRyYWNrXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbi8vIGNsYXNzIFN3aXRjaGVyIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcblxuLy8gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuLy8gICAgIHN1cGVyKHByb3BzKVxuLy8gICB9XG5cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLm9uID8gJ29uJyA6ICdvZmYnXG4vLyAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgJyBzd2l0Y2hlcidcblxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2IHN0eWxlTmFtZT17dGhpcy5wcm9wcy5vbiA/ICdzd2l0Y2hlci0tb24nIDogJ3N3aXRjaGVyLS1vZmYnfT5cbi8vICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci1idXR0b25cIj48L2Rpdj5cbi8vICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci10cmFja1wiPjwvZGl2PlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKVxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaGVyXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvU3dpdGNoZXIudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9fc3dpdGNoZXIuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL19zd2l0Y2hlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMTBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zd2l0Y2hlci13cmFwXzNVTUFVIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi5zd2l0Y2hlcl9HM240XywgLnN3aXRjaGVyLS1vZmZfMUVvT1UsIC5zd2l0Y2hlci0tb25fMnhpd08ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgY29sb3I6IGdyZWVuOyB9XFxuXFxuLnN3aXRjaGVyLWJ1dHRvbl8ya0hHTCB7XFxuICBiYWNrZ3JvdW5kOiAjMUIyNjdGO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zMik7IH1cXG5cXG4uc3dpdGNoZXItdHJhY2tfeHZoamcge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDsgfVxcblxcbi5zd2l0Y2hlci0tb2ZmXzFFb09VIC5zd2l0Y2hlci10cmFja194dmhqZyB7XFxuICBiYWNrZ3JvdW5kOiAjZGRkOyB9XFxuXFxuLnN3aXRjaGVyLS1vZmZfMUVvT1UgLnN3aXRjaGVyLWJ1dHRvbl8ya0hHTCB7XFxuICBsZWZ0OiAwOyB9XFxuXFxuLnN3aXRjaGVyLS1vbl8yeGl3TyAuc3dpdGNoZXItYnV0dG9uXzJrSEdMIHtcXG4gIGxlZnQ6IDIwcHg7IH1cXG5cXG4uc3dpdGNoZXItLW9uXzJ4aXdPIC5zd2l0Y2hlci10cmFja194dmhqZyB7XFxuICBiYWNrZ3JvdW5kOiAjMmU0MGQyOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic3dpdGNoZXItd3JhcFwiOiBcInN3aXRjaGVyLXdyYXBfM1VNQVVcIixcblx0XCJzd2l0Y2hlclwiOiBcInN3aXRjaGVyX0czbjRfXCIsXG5cdFwic3dpdGNoZXItLW9mZlwiOiBcInN3aXRjaGVyLS1vZmZfMUVvT1VcIixcblx0XCJzd2l0Y2hlci0tb25cIjogXCJzd2l0Y2hlci0tb25fMnhpd09cIixcblx0XCJzd2l0Y2hlci1idXR0b25cIjogXCJzd2l0Y2hlci1idXR0b25fMmtIR0xcIixcblx0XCJzd2l0Y2hlci10cmFja1wiOiBcInN3aXRjaGVyLXRyYWNrX3h2aGpnXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL19zd2l0Y2hlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMTBcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uLCBmZXRjaFByb2ZpbGUgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IFByZWZlcmVuY2VMaXN0IGZyb20gJy4vUHJlZmVyZW5jZUxpc3QnXG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJ1xuXG5pbnRlcmZhY2UgSUFsbFByb3BzIHtcbiAgZmV0Y2hQcm9maWxlPzogYW55XG4gIHByb2ZpbGU/OiBhbnlcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIHNob3dGYXY/OiBib29sZWFuXG59XG5cbmNsYXNzIFByZWZlcmVuY2UgZXh0ZW5kcyBDb21wb25lbnQ8SUFsbFByb3BzLCBJU3RhdGU+IHtcblxuICAvLyBzdGF0aWMgZmV0Y2hEYXRhKHtzdG9yZSwgcGFyYW1zfSkge1xuICAvLyAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChmZXRjaCgpKVxuICAvLyB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0ZhdjogdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hQcm9maWxlKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2NDb250YWluZXIgdGl0bGU9XCLorr7nva5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8UHJlZmVyZW5jZUxpc3RcbiAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLnByb2ZpbGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRG9jQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2ZpbGU6IF8uZ2V0KHN0YXRlLnBheWxvYWRzLCAncHJvZmlsZScsIHt9KVxuICAgIH1cbiAgfSxcbiAgeyBzZW5kTm90aWZpY2F0aW9uLCBmZXRjaFByb2ZpbGUgfVxuKShQcmVmZXJlbmNlIGFzIGFueSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9QcmVmZXJlbmNlL1ByZWZlcmVuY2UudHN4XG4gKiovIiwiaW1wb3J0IFByZWZlcmVuY2VMaXN0IGZyb20gJy4vUHJlZmVyZW5jZUxpc3QnXG5leHBvcnQgZGVmYXVsdCBQcmVmZXJlbmNlTGlzdFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvUHJlZmVyZW5jZUxpc3QvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU3dpdGNoZXIgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvU3dpdGNoZXInXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vUHJlZmVyZW5jZUxpc3Quc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB1c2VybmFtZTogc3RyaW5nXG4gIGVtYWlsOiBzdHJpbmdcbiAgZW5jcmlwdGVkUGFzc3dvcmQ6IHN0cmluZ1xuICBzaG93RmF2OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIFByZWZlcmVuY2VMaXN0IGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdXNlcm5hbWUsIGVtYWlsLCBlbmNyaXB0ZWRQYXNzd29yZCwgc2hvd0ZhdiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwic2V0dGluZ3NcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDEgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDB9fSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+6K6+572uPC9oMT5cbiAgICAgICAgICAgIDxzcGFuPuWKn+iDveW8gOWPkeS4re+8jOaaguS4uuWPquivuzwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dWwgc3R5bGVOYW1lPVwib3B0aW9uc1wiPlxuICAgICAgICAgICAgPGxpIHN0eWxlTmFtZT1cIm9wdGlvblwiPlxuICAgICAgICAgICAgICA8aDI+55So5oi35ZCNPC9oMj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwib3B0aW9uLWlucHV0XCI+cmVhZHJ3ZWIuY29tL0A8c3Ryb25nPnt1c2VybmFtZX08L3N0cm9uZz48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cImVkaXRcIj7nvJbovpE8L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIHN0eWxlTmFtZT1cIm9wdGlvblwiPlxuICAgICAgICAgICAgICA8aDI+6YKu566xPC9oMj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwib3B0aW9uLWlucHV0XCI+e2VtYWlsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwiZWRpdFwiPue8lui+kTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgc3R5bGVOYW1lPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgIDxoMj7lr4bnoIE8L2gyPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZU5hbWU9XCJvcHRpb24taW5wdXRcIj4qKioqKio8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cImVkaXRcIj7nvJbovpE8L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIHN0eWxlTmFtZT1cIm9wdGlvblwiPlxuICAgICAgICAgICAgICA8aDI+5YWs5byA5bGV56S65oiR55qE5pS26JePPC9oMj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwib3B0aW9uLWRlc2NcIj7lhbPpl63lkI7lhbbku5bnlKjmiLflsIbml6Dms5Xmn6XnnIvmgqjnmoTmlLbol488L3NwYW4+XG4gICAgICAgICAgICAgIDxTd2l0Y2hlclxuICAgICAgICAgICAgICAgIHN0eWxlTmFtZT1cInN3aXRjaGVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2hvd0Zhdn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17bmV3VmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNob3dGYXY6IG5ld1ZhbHVlIGFzIGJvb2xlYW5cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJlZmVyZW5jZUxpc3RcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9QcmVmZXJlbmNlL1ByZWZlcmVuY2VMaXN0L1ByZWZlcmVuY2VMaXN0LnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vUHJlZmVyZW5jZUxpc3Quc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9QcmVmZXJlbmNlL1ByZWZlcmVuY2VMaXN0L1ByZWZlcmVuY2VMaXN0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zZXR0aW5nc19MbG1hQiAub3B0aW9uc18zTEFKMiB7XFxuICBtYXJnaW4tdG9wOiAtMzVweDsgfVxcblxcbi5zZXR0aW5nc19MbG1hQiAub3B0aW9uXzN6dlNWIHtcXG4gIHBhZGRpbmc6IDMwcHggMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuc2V0dGluZ3NfTGxtYUIgLm9wdGlvbl8zenZTViBoMiB7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cXG4gIC5zZXR0aW5nc19MbG1hQiAub3B0aW9uXzN6dlNWOmxhc3QtY2hpbGQge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLnNldHRpbmdzX0xsbWFCIC5vcHRpb24taW5wdXRfM05sdTAsXFxuLnNldHRpbmdzX0xsbWFCIC5vcHRpb24tZGVzY19jU3lFWSB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi5zZXR0aW5nc19MbG1hQiAudXNlci1hdmF0YXJfMjRJSFgge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDsgfVxcblxcbi5zZXR0aW5nc19MbG1hQiAuZWRpdF8yUGVnSSxcXG4uc2V0dGluZ3NfTGxtYUIgLnN3aXRjaGVyX0pnZzVUIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiA1MCU7XFxuICBtYXJnaW4tdG9wOiAtMTlweDsgfVxcblxcbi5zZXR0aW5nc19MbG1hQiAuc3dpdGNoZXJfSmdnNVQge1xcbiAgbWFyZ2luLXRvcDogLThweDsgfVxcblxcbi5zZXR0aW5nc19MbG1hQiAuZWRpdF8yUGVnSSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgcGFkZGluZzogNnB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJzZXR0aW5nc1wiOiBcInNldHRpbmdzX0xsbWFCXCIsXG5cdFwib3B0aW9uc1wiOiBcIm9wdGlvbnNfM0xBSjJcIixcblx0XCJvcHRpb25cIjogXCJvcHRpb25fM3p2U1ZcIixcblx0XCJvcHRpb24taW5wdXRcIjogXCJvcHRpb24taW5wdXRfM05sdTBcIixcblx0XCJvcHRpb24tZGVzY1wiOiBcIm9wdGlvbi1kZXNjX2NTeUVZXCIsXG5cdFwidXNlci1hdmF0YXJcIjogXCJ1c2VyLWF2YXRhcl8yNElIWFwiLFxuXHRcImVkaXRcIjogXCJlZGl0XzJQZWdJXCIsXG5cdFwic3dpdGNoZXJcIjogXCJzd2l0Y2hlcl9KZ2c1VFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvUHJlZmVyZW5jZS9QcmVmZXJlbmNlTGlzdC9QcmVmZXJlbmNlTGlzdC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDEwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==