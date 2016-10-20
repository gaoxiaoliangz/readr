exports.ids = [10];
exports.modules = {

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switcher = __webpack_require__(265);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switcher2.default;

/***/ },

/***/ 265:
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
	
	var styles = __webpack_require__(266);
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

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(267);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 267:
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

/***/ 350:
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
	
	var _PreferenceList = __webpack_require__(351);
	
	var _PreferenceList2 = _interopRequireDefault(_PreferenceList);
	
	var _DocContainer = __webpack_require__(238);
	
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

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Switcher = __webpack_require__(264);
	
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
	
	var styles = __webpack_require__(352);
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

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(353);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(111)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvaW5kZXgudHM/NGQwZiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvU3dpdGNoZXIudHN4P2MzZWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvX3N3aXRjaGVyLnNjc3M/YTIxZSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvX3N3aXRjaGVyLnNjc3M/NTFjYiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvUHJlZmVyZW5jZS50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9QcmVmZXJlbmNlL2NvbXBvbmVudHMvUHJlZmVyZW5jZUxpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9QcmVmZXJlbmNlL2NvbXBvbmVudHMvUHJlZmVyZW5jZUxpc3Quc2Nzcz8wMzM5Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9QcmVmZXJlbmNlL2NvbXBvbmVudHMvUHJlZmVyZW5jZUxpc3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRGlCOzs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQyxLQUFZLFNBQVUsb0JBQW9CO0FBd0IxQztBQUFnQzs7QUFFOUIsdUJBQWlCO0FBQ2Y7O29IQUNGO0FBRWlCOzs7OzZDQUNqQixDQUVNOzs7O0FBQ0E7OzBCQUFpQyxLQUFNO2lCQUExQixjQUFOO2lCQUFtQjs7QUFFM0IsaUJBQUMsT0FBVyxLQUFNLE1BQU0sVUFBYyxVQUFFO0FBQ3RDLHFCQUFLLFNBQVEsT0FBUSxTQUFZLFFBQUU7QUFDaEMsNEJBQ047QUFBTSx3QkFBRTtB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MkIsc0JBQXNCLHlCQUF5QixvQkFBb0Isa0JBQWtCLEVBQUU7O0FBRTc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEciLCJmaWxlIjoiMTAuMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3dpdGNoZXIgZnJvbSAnLi9Td2l0Y2hlcidcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaGVyXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9fc3dpdGNoZXIuc2NzcycpXG5cbi8vIGludGVyZmFjZSBQcm9wcyB7XG4vLyAgIG9uOiBib29sZWFuXG4vLyB9XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhblxuICB0aXRsZT86IHN0cmluZ1xuICBvbkNoYW5nZT86IChuZXdWYWx1ZTogc3RyaW5nIHwgYm9vbGVhbikgPT4gdm9pZFxuICBvcHRpb25zPzoge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhblxuICB9W11cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHN0eWxlTmFtZT86IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBTd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyB2YWx1ZTogaXNPbiwgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoaXNPbiA9PT0gJzEnIHx8IGlzT24gPT09ICd0cnVlJykge1xuICAgICAgICBpc09uID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNPbiA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzdGF0ZSA9IEJvb2xlYW4oaXNPbikgPyAnb24nIDogJ29mZidcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lIHx8ICcnfSBzdHlsZU5hbWU9XCJzd2l0Y2hlci13cmFwXCI+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLnRpdGxlICYmIChcbiAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlXG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZUluZGV4ID0gdGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKS5pbmRleE9mKHRoaXMucHJvcHMudmFsdWUpXG5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlSW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5wcm9wcy5vcHRpb25zWzBdLnZhbHVlXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VmFsdWVJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLnByb3BzLm9wdGlvbnNbMV0udmFsdWVcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLnByb3BzLm9wdGlvbnNbMF0udmFsdWVcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+W9k+WJjeaVsOaNruacieivr++8jOWwhuS9v+eUqOm7mOiupOaVsOaNru+8gScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy52YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+ayoeaciee7mSBvcHRpb25zIOaXtuW/hemhu+S9v+eUqOW4g+WwlOWei+eahCB2YWx1Ze+8gScpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gIXRoaXMucHJvcHMudmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ld1ZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgc3R5bGVOYW1lPXtgc3dpdGNoZXItLSR7c3RhdGV9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3dpdGNoZXItYnV0dG9uXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci10cmFja1wiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vLyBjbGFzcyBTd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cbi8vICAgY29uc3RydWN0b3IocHJvcHMpIHtcbi8vICAgICBzdXBlcihwcm9wcylcbi8vICAgfVxuXG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5vbiA/ICdvbicgOiAnb2ZmJ1xuLy8gICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSArICcgc3dpdGNoZXInXG5cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPGRpdiBzdHlsZU5hbWU9e3RoaXMucHJvcHMub24gPyAnc3dpdGNoZXItLW9uJyA6ICdzd2l0Y2hlci0tb2ZmJ30+XG4vLyAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3dpdGNoZXItYnV0dG9uXCI+PC9kaXY+XG4vLyAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3dpdGNoZXItdHJhY2tcIj48L2Rpdj5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIClcbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hlclxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL1N3aXRjaGVyLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vX3N3aXRjaGVyLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9fc3dpdGNoZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDEwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3dpdGNoZXItd3JhcF8zVU1BVSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4uc3dpdGNoZXJfRzNuNF8sIC5zd2l0Y2hlci0tb2ZmXzFFb09VLCAuc3dpdGNoZXItLW9uXzJ4aXdPIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIGNvbG9yOiBncmVlbjsgfVxcblxcbi5zd2l0Y2hlci1idXR0b25fMmtIR0wge1xcbiAgYmFja2dyb3VuZDogIzFCMjY3RjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMzIpOyB9XFxuXFxuLnN3aXRjaGVyLXRyYWNrX3h2aGpnIHtcXG4gIGhlaWdodDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7IH1cXG5cXG4uc3dpdGNoZXItLW9mZl8xRW9PVSAuc3dpdGNoZXItdHJhY2tfeHZoamcge1xcbiAgYmFja2dyb3VuZDogI2RkZDsgfVxcblxcbi5zd2l0Y2hlci0tb2ZmXzFFb09VIC5zd2l0Y2hlci1idXR0b25fMmtIR0wge1xcbiAgbGVmdDogMDsgfVxcblxcbi5zd2l0Y2hlci0tb25fMnhpd08gLnN3aXRjaGVyLWJ1dHRvbl8ya0hHTCB7XFxuICBsZWZ0OiAyMHB4OyB9XFxuXFxuLnN3aXRjaGVyLS1vbl8yeGl3TyAuc3dpdGNoZXItdHJhY2tfeHZoamcge1xcbiAgYmFja2dyb3VuZDogIzJlNDBkMjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInN3aXRjaGVyLXdyYXBcIjogXCJzd2l0Y2hlci13cmFwXzNVTUFVXCIsXG5cdFwic3dpdGNoZXJcIjogXCJzd2l0Y2hlcl9HM240X1wiLFxuXHRcInN3aXRjaGVyLS1vZmZcIjogXCJzd2l0Y2hlci0tb2ZmXzFFb09VXCIsXG5cdFwic3dpdGNoZXItLW9uXCI6IFwic3dpdGNoZXItLW9uXzJ4aXdPXCIsXG5cdFwic3dpdGNoZXItYnV0dG9uXCI6IFwic3dpdGNoZXItYnV0dG9uXzJrSEdMXCIsXG5cdFwic3dpdGNoZXItdHJhY2tcIjogXCJzd2l0Y2hlci10cmFja194dmhqZ1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9fc3dpdGNoZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAxIDEwXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgZmV0Y2hQcm9maWxlIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBQcmVmZXJlbmNlTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvUHJlZmVyZW5jZUxpc3QnXG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJ1xuXG5pbnRlcmZhY2UgSUFsbFByb3BzIHtcbiAgZmV0Y2hQcm9maWxlPzogYW55XG4gIHByb2ZpbGU/OiBhbnlcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIHNob3dGYXY/OiBib29sZWFuXG59XG5cbmNsYXNzIFByZWZlcmVuY2UgZXh0ZW5kcyBDb21wb25lbnQ8SUFsbFByb3BzLCBJU3RhdGU+IHtcblxuICAvLyBzdGF0aWMgZmV0Y2hEYXRhKHtzdG9yZSwgcGFyYW1zfSkge1xuICAvLyAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChmZXRjaCgpKVxuICAvLyB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0ZhdjogdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hQcm9maWxlKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2NDb250YWluZXIgdGl0bGU9XCLorr7nva5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8UHJlZmVyZW5jZUxpc3RcbiAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLnByb2ZpbGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRG9jQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2ZpbGU6IF8uZ2V0KHN0YXRlLnBheWxvYWRzLCAncHJvZmlsZScsIHt9KVxuICAgIH1cbiAgfSxcbiAgeyBzZW5kTm90aWZpY2F0aW9uLCBmZXRjaFByb2ZpbGUgfVxuKShQcmVmZXJlbmNlIGFzIGFueSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9QcmVmZXJlbmNlL1ByZWZlcmVuY2UudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFN3aXRjaGVyIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL1N3aXRjaGVyJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1ByZWZlcmVuY2VMaXN0LnNjc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdXNlcm5hbWU6IHN0cmluZ1xuICBlbWFpbDogc3RyaW5nXG4gIGVuY3JpcHRlZFBhc3N3b3JkOiBzdHJpbmdcbiAgc2hvd0ZhdjogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBQcmVmZXJlbmNlTGlzdCBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBlbWFpbCwgZW5jcmlwdGVkUGFzc3dvcmQsIHNob3dGYXYgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cInNldHRpbmdzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAwfX0gY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPuiuvue9rjwvaDE+XG4gICAgICAgICAgICA8c3Bhbj7lip/og73lvIDlj5HkuK3vvIzmmoLkuLrlj6ror7s8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHVsIHN0eWxlTmFtZT1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgIDxsaSBzdHlsZU5hbWU9XCJvcHRpb25cIj5cbiAgICAgICAgICAgICAgPGgyPueUqOaIt+WQjTwvaDI+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cIm9wdGlvbi1pbnB1dFwiPnJlYWRyd2ViLmNvbS9APHN0cm9uZz57dXNlcm5hbWV9PC9zdHJvbmc+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZU5hbWU9XCJlZGl0XCI+57yW6L6RPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBzdHlsZU5hbWU9XCJvcHRpb25cIj5cbiAgICAgICAgICAgICAgPGgyPumCrueusTwvaDI+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cIm9wdGlvbi1pbnB1dFwiPntlbWFpbH08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cImVkaXRcIj7nvJbovpE8L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIHN0eWxlTmFtZT1cIm9wdGlvblwiPlxuICAgICAgICAgICAgICA8aDI+5a+G56CBPC9oMj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwib3B0aW9uLWlucHV0XCI+KioqKioqPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZU5hbWU9XCJlZGl0XCI+57yW6L6RPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBzdHlsZU5hbWU9XCJvcHRpb25cIj5cbiAgICAgICAgICAgICAgPGgyPuWFrOW8gOWxleekuuaIkeeahOaUtuiXjzwvaDI+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cIm9wdGlvbi1kZXNjXCI+5YWz6Zet5ZCO5YW25LuW55So5oi35bCG5peg5rOV5p+l55yL5oKo55qE5pS26JePPC9zcGFuPlxuICAgICAgICAgICAgICA8U3dpdGNoZXJcbiAgICAgICAgICAgICAgICBzdHlsZU5hbWU9XCJzd2l0Y2hlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Nob3dGYXZ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e25ld1ZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzaG93RmF2OiBuZXdWYWx1ZSBhcyBib29sZWFuXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZWZlcmVuY2VMaXN0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvUHJlZmVyZW5jZS9jb21wb25lbnRzL1ByZWZlcmVuY2VMaXN0LnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vUHJlZmVyZW5jZUxpc3Quc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9QcmVmZXJlbmNlL2NvbXBvbmVudHMvUHJlZmVyZW5jZUxpc3Quc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDM1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAxMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNldHRpbmdzXzNDSDJRIC5vcHRpb25zXzI3V0l3IHtcXG4gIG1hcmdpbi10b3A6IC0zNXB4OyB9XFxuXFxuLnNldHRpbmdzXzNDSDJRIC5vcHRpb25fSWVjengge1xcbiAgcGFkZGluZzogMzBweCAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5zZXR0aW5nc18zQ0gyUSAub3B0aW9uX0llY3p4IGgyIHtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDsgfVxcbiAgLnNldHRpbmdzXzNDSDJRIC5vcHRpb25fSWVjeng6bGFzdC1jaGlsZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uc2V0dGluZ3NfM0NIMlEgLm9wdGlvbi1pbnB1dF8yYkVkOSxcXG4uc2V0dGluZ3NfM0NIMlEgLm9wdGlvbi1kZXNjXzJObWJWIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLnNldHRpbmdzXzNDSDJRIC51c2VyLWF2YXRhcl8yQVZPNSB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4OyB9XFxuXFxuLnNldHRpbmdzXzNDSDJRIC5lZGl0XzIzQ3ByLFxcbi5zZXR0aW5nc18zQ0gyUSAuc3dpdGNoZXJfMUtGRncge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDUwJTtcXG4gIG1hcmdpbi10b3A6IC0xOXB4OyB9XFxuXFxuLnNldHRpbmdzXzNDSDJRIC5zd2l0Y2hlcl8xS0ZGdyB7XFxuICBtYXJnaW4tdG9wOiAtOHB4OyB9XFxuXFxuLnNldHRpbmdzXzNDSDJRIC5lZGl0XzIzQ3ByIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBwYWRkaW5nOiA2cHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInNldHRpbmdzXCI6IFwic2V0dGluZ3NfM0NIMlFcIixcblx0XCJvcHRpb25zXCI6IFwib3B0aW9uc18yN1dJd1wiLFxuXHRcIm9wdGlvblwiOiBcIm9wdGlvbl9JZWN6eFwiLFxuXHRcIm9wdGlvbi1pbnB1dFwiOiBcIm9wdGlvbi1pbnB1dF8yYkVkOVwiLFxuXHRcIm9wdGlvbi1kZXNjXCI6IFwib3B0aW9uLWRlc2NfMk5tYlZcIixcblx0XCJ1c2VyLWF2YXRhclwiOiBcInVzZXItYXZhdGFyXzJBVk81XCIsXG5cdFwiZWRpdFwiOiBcImVkaXRfMjNDcHJcIixcblx0XCJzd2l0Y2hlclwiOiBcInN3aXRjaGVyXzFLRkZ3XCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9QcmVmZXJlbmNlL2NvbXBvbmVudHMvUHJlZmVyZW5jZUxpc3Quc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDM1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAxMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=