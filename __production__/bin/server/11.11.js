exports.ids = [11];
exports.modules = {

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switcher = __webpack_require__(308);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switcher2.default;

/***/ },

/***/ 308:
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
	
	var styles = __webpack_require__(309);
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

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(310);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
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

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(93);
	
	var _actions = __webpack_require__(94);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _PreferenceList = __webpack_require__(389);
	
	var _PreferenceList2 = _interopRequireDefault(_PreferenceList);
	
	var _DocContainer = __webpack_require__(267);
	
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

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Switcher = __webpack_require__(307);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);
	
	var _reactCssModules = __webpack_require__(127);
	
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
	
	var styles = __webpack_require__(390);
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

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(391);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, ".settings_3CH2Q .options_27WIw {\n  margin-top: -35px; }\n\n.settings_3CH2Q .option_Ieczx {\n  padding: 30px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.14);\n  position: relative; }\n  .settings_3CH2Q .option_Ieczx h2 {\n    color: #333;\n    font-size: 1.2rem;\n    margin: 0;\n    margin-bottom: 5px; }\n  .settings_3CH2Q .option_Ieczx:last-child {\n    display: none; }\n\n.settings_3CH2Q .option-input_2bEd9,\n.settings_3CH2Q .option-desc_2NmbV {\n  display: block; }\n\n.settings_3CH2Q .user-avatar_2AVO5 {\n  width: 100px;\n  height: 100px; }\n\n.settings_3CH2Q .edit_23Cpr,\n.settings_3CH2Q .switcher_1KFFw {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  margin-top: -19px; }\n\n.settings_3CH2Q .switcher_1KFFw {\n  margin-top: -8px; }\n\n.settings_3CH2Q .edit_23Cpr {\n  border: 1px solid #ddd;\n  padding: 6px 16px;\n  border-radius: 100px;\n  cursor: pointer;\n  display: none; }\n", ""]);
	
	// exports
	exports.locals = {
		"settings": "settings_3CH2Q",
		"options": "options_27WIw",
		"option": "option_Ieczx",
		"option-input": "option-input_2bEd9",
		"option-desc": "option-desc_2NmbV",
		"user-avatar": "user-avatar_2AVO5",
		"edit": "edit_23Cpr",
		"switcher": "switcher_1KFFw"
	};

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9pbmRleC50cz8zMTA3Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL1N3aXRjaGVyLnRzeD8xOWIwIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL19zd2l0Y2hlci5zY3NzP2EyMWUqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL19zd2l0Y2hlci5zY3NzPzUxY2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvUHJlZmVyZW5jZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvY29tcG9uZW50cy9QcmVmZXJlbmNlTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvY29tcG9uZW50cy9QcmVmZXJlbmNlTGlzdC5zY3NzPzAzMzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvY29tcG9uZW50cy9QcmVmZXJlbmNlTGlzdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUN1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEaUI7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFDLEtBQVksU0FBVSxvQkFBb0I7QUF3QjFDO0FBQWdDOztBQUU5Qix1QkFBaUI7QUFDZjs7b0hBQ0Y7QUFFaUI7Ozs7NkNBQ2pCLENBRU07Ozs7QUFDQTs7MEJBQWlDLEtBQU07aUJBQTFCLGNBQU47aUJBQW1COztBQUUzQixpQkFBQyxPQUFXLEtBQU0sTUFBTSxVQUFjLFVBQUU7QUFDdEMscUJBQUssU0FBUSxPQUFRLFNBQVksUUFBRTtBQUNoQyw0QkFDTjtBQUFN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QWlDLDJCQUEyQixzQkFBc0IseUJBQXlCLG9CQUFvQixrQkFBa0IsRUFBRTs7QUFFNzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRyIsImZpbGUiOiIxMS4xMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTd2l0Y2hlciBmcm9tICcuL1N3aXRjaGVyJ1xuZXhwb3J0IGRlZmF1bHQgU3dpdGNoZXJcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vX3N3aXRjaGVyLnNjc3MnKVxuXG4vLyBpbnRlcmZhY2UgUHJvcHMge1xuLy8gICBvbjogYm9vbGVhblxuLy8gfVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdmFsdWU6IHN0cmluZyB8IGJvb2xlYW5cbiAgdGl0bGU/OiBzdHJpbmdcbiAgb25DaGFuZ2U/OiAobmV3VmFsdWU6IHN0cmluZyB8IGJvb2xlYW4pID0+IHZvaWRcbiAgb3B0aW9ucz86IHtcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgdmFsdWU6IHN0cmluZyB8IGJvb2xlYW5cbiAgfVtdXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBzdHlsZU5hbWU/OiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgU3dpdGNoZXIgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgdmFsdWU6IGlzT24sIGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGlzT24gPT09ICcxJyB8fCBpc09uID09PSAndHJ1ZScpIHtcbiAgICAgICAgaXNPbiA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzT24gPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3RhdGUgPSBCb29sZWFuKGlzT24pID8gJ29uJyA6ICdvZmYnXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZSB8fCAnJ30gc3R5bGVOYW1lPVwic3dpdGNoZXItd3JhcFwiPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy50aXRsZSAmJiAoXG4gICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy50aXRsZX08L3NwYW4+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgIGxldCBuZXdWYWx1ZVxuXG4gICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VmFsdWVJbmRleCA9IHRoaXMucHJvcHMub3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSkuaW5kZXhPZih0aGlzLnByb3BzLnZhbHVlKVxuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZUluZGV4ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJvcHMub3B0aW9uc1swXS52YWx1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFZhbHVlSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5wcm9wcy5vcHRpb25zWzFdLnZhbHVlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5wcm9wcy5vcHRpb25zWzBdLnZhbHVlXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCflvZPliY3mlbDmja7mnInor6/vvIzlsIbkvb/nlKjpu5jorqTmlbDmja7vvIEnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCfmsqHmnInnu5kgb3B0aW9ucyDml7blv4Xpobvkvb/nlKjluIPlsJTlnovnmoQgdmFsdWXvvIEnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9ICF0aGlzLnByb3BzLnZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuZXdWYWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIHN0eWxlTmFtZT17YHN3aXRjaGVyLS0ke3N0YXRlfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInN3aXRjaGVyLWJ1dHRvblwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3dpdGNoZXItdHJhY2tcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy8gY2xhc3MgU3dpdGNoZXIgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuXG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgc3VwZXIocHJvcHMpXG4vLyAgIH1cblxuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMub24gPyAnb24nIDogJ29mZidcbi8vICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgKyAnIHN3aXRjaGVyJ1xuXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxkaXYgc3R5bGVOYW1lPXt0aGlzLnByb3BzLm9uID8gJ3N3aXRjaGVyLS1vbicgOiAnc3dpdGNoZXItLW9mZid9PlxuLy8gICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInN3aXRjaGVyLWJ1dHRvblwiPjwvZGl2PlxuLy8gICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInN3aXRjaGVyLXRyYWNrXCI+PC9kaXY+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApXG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoZXJcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL1N3aXRjaGVyLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vX3N3aXRjaGVyLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9fc3dpdGNoZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMwOVxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDExXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3dpdGNoZXItd3JhcF8zVU1BVSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4uc3dpdGNoZXJfRzNuNF8sIC5zd2l0Y2hlci0tb2ZmXzFFb09VLCAuc3dpdGNoZXItLW9uXzJ4aXdPIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIGNvbG9yOiBncmVlbjsgfVxcblxcbi5zd2l0Y2hlci1idXR0b25fMmtIR0wge1xcbiAgYmFja2dyb3VuZDogIzFCMjY3RjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMzIpOyB9XFxuXFxuLnN3aXRjaGVyLXRyYWNrX3h2aGpnIHtcXG4gIGhlaWdodDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7IH1cXG5cXG4uc3dpdGNoZXItLW9mZl8xRW9PVSAuc3dpdGNoZXItdHJhY2tfeHZoamcge1xcbiAgYmFja2dyb3VuZDogI2RkZDsgfVxcblxcbi5zd2l0Y2hlci0tb2ZmXzFFb09VIC5zd2l0Y2hlci1idXR0b25fMmtIR0wge1xcbiAgbGVmdDogMDsgfVxcblxcbi5zd2l0Y2hlci0tb25fMnhpd08gLnN3aXRjaGVyLWJ1dHRvbl8ya0hHTCB7XFxuICBsZWZ0OiAyMHB4OyB9XFxuXFxuLnN3aXRjaGVyLS1vbl8yeGl3TyAuc3dpdGNoZXItdHJhY2tfeHZoamcge1xcbiAgYmFja2dyb3VuZDogIzJlNDBkMjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInN3aXRjaGVyLXdyYXBcIjogXCJzd2l0Y2hlci13cmFwXzNVTUFVXCIsXG5cdFwic3dpdGNoZXJcIjogXCJzd2l0Y2hlcl9HM240X1wiLFxuXHRcInN3aXRjaGVyLS1vZmZcIjogXCJzd2l0Y2hlci0tb2ZmXzFFb09VXCIsXG5cdFwic3dpdGNoZXItLW9uXCI6IFwic3dpdGNoZXItLW9uXzJ4aXdPXCIsXG5cdFwic3dpdGNoZXItYnV0dG9uXCI6IFwic3dpdGNoZXItYnV0dG9uXzJrSEdMXCIsXG5cdFwic3dpdGNoZXItdHJhY2tcIjogXCJzd2l0Y2hlci10cmFja194dmhqZ1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9fc3dpdGNoZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDExXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgZmV0Y2hQcm9maWxlIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBQcmVmZXJlbmNlTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvUHJlZmVyZW5jZUxpc3QnXG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJ1xuXG5pbnRlcmZhY2UgSUFsbFByb3BzIHtcbiAgZmV0Y2hQcm9maWxlPzogYW55XG4gIHByb2ZpbGU/OiBhbnlcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIHNob3dGYXY/OiBib29sZWFuXG59XG5cbmNsYXNzIFByZWZlcmVuY2UgZXh0ZW5kcyBDb21wb25lbnQ8SUFsbFByb3BzLCBJU3RhdGU+IHtcblxuICAvLyBzdGF0aWMgZmV0Y2hEYXRhKHtzdG9yZSwgcGFyYW1zfSkge1xuICAvLyAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChmZXRjaCgpKVxuICAvLyB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0ZhdjogdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hQcm9maWxlKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2NDb250YWluZXIgdGl0bGU9XCLorr7nva5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8UHJlZmVyZW5jZUxpc3RcbiAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLnByb2ZpbGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRG9jQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2ZpbGU6IF8uZ2V0KHN0YXRlLnBheWxvYWRzLCAncHJvZmlsZScsIHt9KVxuICAgIH1cbiAgfSxcbiAgeyBzZW5kTm90aWZpY2F0aW9uLCBmZXRjaFByb2ZpbGUgfVxuKShQcmVmZXJlbmNlIGFzIGFueSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvUHJlZmVyZW5jZS50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU3dpdGNoZXIgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvU3dpdGNoZXInXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vUHJlZmVyZW5jZUxpc3Quc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB1c2VybmFtZTogc3RyaW5nXG4gIGVtYWlsOiBzdHJpbmdcbiAgZW5jcmlwdGVkUGFzc3dvcmQ6IHN0cmluZ1xuICBzaG93RmF2OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIFByZWZlcmVuY2VMaXN0IGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdXNlcm5hbWUsIGVtYWlsLCBlbmNyaXB0ZWRQYXNzd29yZCwgc2hvd0ZhdiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwic2V0dGluZ3NcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDEgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDB9fSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+6K6+572uPC9oMT5cbiAgICAgICAgICAgIDxzcGFuPuWKn+iDveW8gOWPkeS4re+8jOaaguS4uuWPquivuzwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dWwgc3R5bGVOYW1lPVwib3B0aW9uc1wiPlxuICAgICAgICAgICAgPGxpIHN0eWxlTmFtZT1cIm9wdGlvblwiPlxuICAgICAgICAgICAgICA8aDI+55So5oi35ZCNPC9oMj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwib3B0aW9uLWlucHV0XCI+cmVhZHJ3ZWIuY29tL0A8c3Ryb25nPnt1c2VybmFtZX08L3N0cm9uZz48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cImVkaXRcIj7nvJbovpE8L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIHN0eWxlTmFtZT1cIm9wdGlvblwiPlxuICAgICAgICAgICAgICA8aDI+6YKu566xPC9oMj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwib3B0aW9uLWlucHV0XCI+e2VtYWlsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwiZWRpdFwiPue8lui+kTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgc3R5bGVOYW1lPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgIDxoMj7lr4bnoIE8L2gyPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZU5hbWU9XCJvcHRpb24taW5wdXRcIj4qKioqKio8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cImVkaXRcIj7nvJbovpE8L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIHN0eWxlTmFtZT1cIm9wdGlvblwiPlxuICAgICAgICAgICAgICA8aDI+5YWs5byA5bGV56S65oiR55qE5pS26JePPC9oMj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwib3B0aW9uLWRlc2NcIj7lhbPpl63lkI7lhbbku5bnlKjmiLflsIbml6Dms5Xmn6XnnIvmgqjnmoTmlLbol488L3NwYW4+XG4gICAgICAgICAgICAgIDxTd2l0Y2hlclxuICAgICAgICAgICAgICAgIHN0eWxlTmFtZT1cInN3aXRjaGVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2hvd0Zhdn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17bmV3VmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNob3dGYXY6IG5ld1ZhbHVlIGFzIGJvb2xlYW5cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJlZmVyZW5jZUxpc3RcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvY29tcG9uZW50cy9QcmVmZXJlbmNlTGlzdC50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL1ByZWZlcmVuY2VMaXN0LnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvUHJlZmVyZW5jZS9jb21wb25lbnRzL1ByZWZlcmVuY2VMaXN0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzOTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zZXR0aW5nc18zQ0gyUSAub3B0aW9uc18yN1dJdyB7XFxuICBtYXJnaW4tdG9wOiAtMzVweDsgfVxcblxcbi5zZXR0aW5nc18zQ0gyUSAub3B0aW9uX0llY3p4IHtcXG4gIHBhZGRpbmc6IDMwcHggMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuc2V0dGluZ3NfM0NIMlEgLm9wdGlvbl9JZWN6eCBoMiB7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cXG4gIC5zZXR0aW5nc18zQ0gyUSAub3B0aW9uX0llY3p4Omxhc3QtY2hpbGQge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLnNldHRpbmdzXzNDSDJRIC5vcHRpb24taW5wdXRfMmJFZDksXFxuLnNldHRpbmdzXzNDSDJRIC5vcHRpb24tZGVzY18yTm1iViB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi5zZXR0aW5nc18zQ0gyUSAudXNlci1hdmF0YXJfMkFWTzUge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDsgfVxcblxcbi5zZXR0aW5nc18zQ0gyUSAuZWRpdF8yM0NwcixcXG4uc2V0dGluZ3NfM0NIMlEgLnN3aXRjaGVyXzFLRkZ3IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiA1MCU7XFxuICBtYXJnaW4tdG9wOiAtMTlweDsgfVxcblxcbi5zZXR0aW5nc18zQ0gyUSAuc3dpdGNoZXJfMUtGRncge1xcbiAgbWFyZ2luLXRvcDogLThweDsgfVxcblxcbi5zZXR0aW5nc18zQ0gyUSAuZWRpdF8yM0NwciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgcGFkZGluZzogNnB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJzZXR0aW5nc1wiOiBcInNldHRpbmdzXzNDSDJRXCIsXG5cdFwib3B0aW9uc1wiOiBcIm9wdGlvbnNfMjdXSXdcIixcblx0XCJvcHRpb25cIjogXCJvcHRpb25fSWVjenhcIixcblx0XCJvcHRpb24taW5wdXRcIjogXCJvcHRpb24taW5wdXRfMmJFZDlcIixcblx0XCJvcHRpb24tZGVzY1wiOiBcIm9wdGlvbi1kZXNjXzJObWJWXCIsXG5cdFwidXNlci1hdmF0YXJcIjogXCJ1c2VyLWF2YXRhcl8yQVZPNVwiLFxuXHRcImVkaXRcIjogXCJlZGl0XzIzQ3ByXCIsXG5cdFwic3dpdGNoZXJcIjogXCJzd2l0Y2hlcl8xS0ZGd1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvUHJlZmVyZW5jZS9jb21wb25lbnRzL1ByZWZlcmVuY2VMaXN0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzOTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9