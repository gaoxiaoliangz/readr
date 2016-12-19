exports.ids = [11];
exports.modules = {

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switcher = __webpack_require__(242);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switcher2.default;

/***/ },

/***/ 242:
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
	
	var styles = __webpack_require__(243);
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
	// class Switcher extends Component<Props, any> {
	//   constructor(props) {
	//     super(props)
	//   }
	//   render() {
	//     let className = this.props.on ? 'on' : 'off'
	//     className = className + ' switcher'
	//     return (
	//       <div styleName={this.props.on ? 'switcher--on' : 'switcher--off'}>
	//         <div styleName="switcher-button"></div>
	//         <div styleName="switcher-track"></div>
	//       </div>
	//     )
	//   }
	// }
	exports.default = Switcher;

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(244);
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
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

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(89);
	
	var _actions = __webpack_require__(90);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _PreferenceList = __webpack_require__(321);
	
	var _PreferenceList2 = _interopRequireDefault(_PreferenceList);
	
	var _DocContainer = __webpack_require__(201);
	
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

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Switcher = __webpack_require__(241);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);
	
	var _reactCssModules = __webpack_require__(122);
	
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
	
	var styles = __webpack_require__(322);
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
	
	            return _react2.default.createElement("div", { styleName: "settings" }, _react2.default.createElement("div", { className: "page-content" }, _react2.default.createElement("div", { className: "page-header" }, _react2.default.createElement("h1", { style: { marginBottom: 0 }, className: "page-title" }, "\u8BBE\u7F6E"), _react2.default.createElement("span", null, "\u529F\u80FD\u5F00\u53D1\u4E2D\uFF0C\u6682\u4E3A\u53EA\u8BFB")), _react2.default.createElement("ul", { styleName: "options" }, _react2.default.createElement("li", { styleName: "option" }, _react2.default.createElement("h2", null, "\u7528\u6237\u540D"), _react2.default.createElement("span", { styleName: "option-input" }, "readrweb.com/@", _react2.default.createElement("strong", null, username)), _react2.default.createElement("span", { styleName: "edit" }, "\u7F16\u8F91")), _react2.default.createElement("li", { styleName: "option" }, _react2.default.createElement("h2", null, "\u90AE\u7BB1"), _react2.default.createElement("span", { styleName: "option-input" }, email), _react2.default.createElement("span", { styleName: "edit" }, "\u7F16\u8F91")), _react2.default.createElement("li", { styleName: "option" }, _react2.default.createElement("h2", null, "\u5BC6\u7801"), _react2.default.createElement("span", { styleName: "option-input" }, "******"), _react2.default.createElement("span", { styleName: "edit" }, "\u7F16\u8F91")), _react2.default.createElement("li", { styleName: "option" }, _react2.default.createElement("h2", null, "\u516C\u5F00\u5C55\u793A\u6211\u7684\u6536\u85CF"), _react2.default.createElement("span", { styleName: "option-desc" }, "\u5173\u95ED\u540E\u5176\u4ED6\u7528\u6237\u5C06\u65E0\u6CD5\u67E5\u770B\u60A8\u7684\u6536\u85CF"), _react2.default.createElement(_Switcher2.default, { styleName: "switcher", value: showFav, onChange: function onChange(newValue) {
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

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(323);
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9pbmRleC50cz8zMTA3Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL1N3aXRjaGVyLnRzeD8xOWIwIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL19zd2l0Y2hlci5zY3NzP2EyMWUqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL19zd2l0Y2hlci5zY3NzPzUxY2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvUHJlZmVyZW5jZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvY29tcG9uZW50cy9QcmVmZXJlbmNlTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvY29tcG9uZW50cy9QcmVmZXJlbmNlTGlzdC5zY3NzPzAzMzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvY29tcG9uZW50cy9QcmVmZXJlbmNlTGlzdC5zY3NzIl0sIm5hbWVzIjpbIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZCIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsInN0eWxlcyIsInJlcXVpcmUiLCJTd2l0Y2hlciIsInByb3BzIiwiaXNPbiIsInZhbHVlIiwiY2xhc3NOYW1lIiwic3RhdGUiLCJCb29sZWFuIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlTmFtZSIsInRpdGxlIiwib25DbGljayIsIm9uQ2hhbmdlIiwibmV3VmFsdWUiLCJvcHRpb25zIiwiY3VycmVudFZhbHVlSW5kZXgiLCJtYXAiLCJvcHRpb24iLCJpbmRleE9mIiwiY29uc29sZSIsImVycm9yIiwiYWxsb3dNdWx0aXBsZSIsIl9fYXNzaWduIiwiYXNzaWduIiwidCIsInMiLCJuIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlByZWZlcmVuY2UiLCJzaG93RmF2IiwiZmV0Y2hQcm9maWxlIiwibmV4dFByb3BzIiwicHJvZmlsZSIsImdldCIsInBheWxvYWRzIiwic2VuZE5vdGlmaWNhdGlvbiIsIlByZWZlcmVuY2VMaXN0IiwidXNlcm5hbWUiLCJlbWFpbCIsImVuY3JpcHRlZFBhc3N3b3JkIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBUEEsS0FBSUEsYUFBYyxhQUFRLFVBQUtBLFVBQWQsSUFBNkIsVUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNuRixTQUFJQyxJQUFJQyxVQUFVQyxNQUFsQjtBQUFBLFNBQTBCQyxJQUFJSCxJQUFJLENBQUosR0FBUUgsTUFBUixHQUFpQkUsU0FBUyxJQUFULEdBQWdCQSxPQUFPSyxPQUFPQyx3QkFBUCxDQUFnQ1IsTUFBaEMsRUFBd0NDLEdBQXhDLENBQXZCLEdBQXNFQyxJQUFySDtBQUFBLFNBQTJITyxDQUEzSDtBQUNBLFNBQUksUUFBT0MsT0FBUCx5Q0FBT0EsT0FBUCxPQUFtQixRQUFuQixJQUErQixPQUFPQSxRQUFRQyxRQUFmLEtBQTRCLFVBQS9ELEVBQTJFTCxJQUFJSSxRQUFRQyxRQUFSLENBQWlCWixVQUFqQixFQUE2QkMsTUFBN0IsRUFBcUNDLEdBQXJDLEVBQTBDQyxJQUExQyxDQUFKLENBQTNFLEtBQ0ssS0FBSyxJQUFJVSxJQUFJYixXQUFXTSxN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RCxrR0FBMUQsQ0FGSixFQUdJLGdCQUFNRCxhQUFOLHFCQUE4QixFQUFFQyxXQUFXLFVBQWIsRUFBeUJMLE9BQU80QixPQUFoQyxFQUF5Q3BCLFVBQVUsNEJBQVk7QUFDckYsNEJBQUtpQyxRQUFMLENBQWM7QUFDVmIsa0NBQVNuQjtBQURDLHNCQUFkO0FBR0gsa0JBSnlCLEVBQTlCLENBSEosQ0FmSixDQUpKLENBREksQ0FBUjtBQTRCSDtBQXBDRDs7QUFBQTtBQUFBLG9CQUFKO0FBc0NBMEIsa0JBQWlCeEQsV0FBVyxDQUN4QiwrQkFBV2dCLE1BQVgsRUFBbUI7QUFDZnNCLG9CQUFlO0FBREEsRUFBbkIsQ0FEd0IsQ0FBWCxFQUlka0IsY0FKYyxDQUFqQjttQkFLZUEsYzs7Ozs7Ozs7QUNwRGY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBeUMsMkJBQTJCO0FBQ3BFLG9EQUFtRDs7Ozs7Ozs7QUNWbkQ7QUFDQTs7O0FBR0E7QUFDQSwyREFBMEQsc0JBQXNCLEVBQUUsbUNBQW1DLG9CQUFvQixpREFBaUQsdUJBQXVCLEVBQUUsc0NBQXNDLGtCQUFrQix3QkFBd0IsZ0JBQWdCLHlCQUF5QixFQUFFLDhDQUE4QyxvQkFBb0IsRUFBRSw4RUFBOEUsbUJBQW1CLEVBQUUsd0NBQXdDLGlCQUFpQixrQkFBa0IsRUFBRSxtRUFBbUUsdUJBQXVCLGFBQWEsYUFBYSxzQkFBc0IsRUFBRSxxQ0FBcUMscUJBQXFCLEVBQUUsaUNBQWlDLDJCQUEyQixzQkFBc0IseUJBQXlCLG9CQUFvQixrQkFBa0IsRUFBRTs7QUFFNzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRyIsImZpbGUiOiIxMS4xMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTd2l0Y2hlciBmcm9tICcuL1N3aXRjaGVyJztcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9pbmRleC50c1xuICoqLyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL19zd2l0Y2hlci5zY3NzJyk7XG5sZXQgU3dpdGNoZXIgPSBjbGFzcyBTd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyB2YWx1ZTogaXNPbiwgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoaXNPbiA9PT0gJzEnIHx8IGlzT24gPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgIGlzT24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaXNPbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBzdGF0ZSA9IEJvb2xlYW4oaXNPbikgPyAnb24nIDogJ29mZic7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIHx8ICcnLCBzdHlsZU5hbWU6IFwic3dpdGNoZXItd3JhcFwiIH0sXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRpdGxlICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCB0aGlzLnByb3BzLnRpdGxlKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgb25DbGljazogZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlSW5kZXggPSB0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpLmluZGV4T2YodGhpcy5wcm9wcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZUluZGV4ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5wcm9wcy5vcHRpb25zWzBdLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50VmFsdWVJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJvcHMub3B0aW9uc1sxXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5wcm9wcy5vcHRpb25zWzBdLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCflvZPliY3mlbDmja7mnInor6/vvIzlsIbkvb/nlKjpu5jorqTmlbDmja7vvIEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+ayoeaciee7mSBvcHRpb25zIOaXtuW/hemhu+S9v+eUqOW4g+WwlOWei+eahCB2YWx1Ze+8gScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSAhdGhpcy5wcm9wcy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHN0eWxlTmFtZTogYHN3aXRjaGVyLS0ke3N0YXRlfWAgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcInN3aXRjaGVyLWJ1dHRvblwiIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZU5hbWU6IFwic3dpdGNoZXItdHJhY2tcIiB9KSkpKTtcbiAgICB9XG59O1xuU3dpdGNoZXIgPSBfX2RlY29yYXRlKFtcbiAgICBDU1NNb2R1bGVzKHN0eWxlcywge1xuICAgICAgICBhbGxvd011bHRpcGxlOiB0cnVlXG4gICAgfSlcbl0sIFN3aXRjaGVyKTtcbi8vIGNsYXNzIFN3aXRjaGVyIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcbi8vICAgY29uc3RydWN0b3IocHJvcHMpIHtcbi8vICAgICBzdXBlcihwcm9wcylcbi8vICAgfVxuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMub24gPyAnb24nIDogJ29mZidcbi8vICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgKyAnIHN3aXRjaGVyJ1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2IHN0eWxlTmFtZT17dGhpcy5wcm9wcy5vbiA/ICdzd2l0Y2hlci0tb24nIDogJ3N3aXRjaGVyLS1vZmYnfT5cbi8vICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci1idXR0b25cIj48L2Rpdj5cbi8vICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci10cmFja1wiPjwvZGl2PlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKVxuLy8gICB9XG4vLyB9XG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvU3dpdGNoZXIudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9fc3dpdGNoZXIuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL19zd2l0Y2hlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMTFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zd2l0Y2hlci13cmFwXzNVTUFVIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi5zd2l0Y2hlcl9HM240XywgLnN3aXRjaGVyLS1vZmZfMUVvT1UsIC5zd2l0Y2hlci0tb25fMnhpd08ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgY29sb3I6IGdyZWVuOyB9XFxuXFxuLnN3aXRjaGVyLWJ1dHRvbl8ya0hHTCB7XFxuICBiYWNrZ3JvdW5kOiAjMUIyNjdGO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zMik7IH1cXG5cXG4uc3dpdGNoZXItdHJhY2tfeHZoamcge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDsgfVxcblxcbi5zd2l0Y2hlci0tb2ZmXzFFb09VIC5zd2l0Y2hlci10cmFja194dmhqZyB7XFxuICBiYWNrZ3JvdW5kOiAjZGRkOyB9XFxuXFxuLnN3aXRjaGVyLS1vZmZfMUVvT1UgLnN3aXRjaGVyLWJ1dHRvbl8ya0hHTCB7XFxuICBsZWZ0OiAwOyB9XFxuXFxuLnN3aXRjaGVyLS1vbl8yeGl3TyAuc3dpdGNoZXItYnV0dG9uXzJrSEdMIHtcXG4gIGxlZnQ6IDIwcHg7IH1cXG5cXG4uc3dpdGNoZXItLW9uXzJ4aXdPIC5zd2l0Y2hlci10cmFja194dmhqZyB7XFxuICBiYWNrZ3JvdW5kOiAjMmU0MGQyOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic3dpdGNoZXItd3JhcFwiOiBcInN3aXRjaGVyLXdyYXBfM1VNQVVcIixcblx0XCJzd2l0Y2hlclwiOiBcInN3aXRjaGVyX0czbjRfXCIsXG5cdFwic3dpdGNoZXItLW9mZlwiOiBcInN3aXRjaGVyLS1vZmZfMUVvT1VcIixcblx0XCJzd2l0Y2hlci0tb25cIjogXCJzd2l0Y2hlci0tb25fMnhpd09cIixcblx0XCJzd2l0Y2hlci1idXR0b25cIjogXCJzd2l0Y2hlci1idXR0b25fMmtIR0xcIixcblx0XCJzd2l0Y2hlci10cmFja1wiOiBcInN3aXRjaGVyLXRyYWNrX3h2aGpnXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL19zd2l0Y2hlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMTFcbiAqKi8iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgZmV0Y2hQcm9maWxlIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFByZWZlcmVuY2VMaXN0IGZyb20gJy4vY29tcG9uZW50cy9QcmVmZXJlbmNlTGlzdCc7XG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJztcbmNsYXNzIFByZWZlcmVuY2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8vIHN0YXRpYyBmZXRjaERhdGEoe3N0b3JlLCBwYXJhbXN9KSB7XG4gICAgLy8gICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZmV0Y2goKSlcbiAgICAvLyB9XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvd0ZhdjogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFByb2ZpbGUoKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRG9jQ29udGFpbmVyLCB7IHRpdGxlOiBcIuiuvue9rlwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChQcmVmZXJlbmNlTGlzdCwgX19hc3NpZ24oe30sIHRoaXMucHJvcHMucHJvZmlsZSkpKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb2ZpbGU6IF8uZ2V0KHN0YXRlLnBheWxvYWRzLCAncHJvZmlsZScsIHt9KVxuICAgIH07XG59LCB7IHNlbmROb3RpZmljYXRpb24sIGZldGNoUHJvZmlsZSB9KShQcmVmZXJlbmNlKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvUHJlZmVyZW5jZS50c3hcbiAqKi8iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN3aXRjaGVyIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL1N3aXRjaGVyJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vUHJlZmVyZW5jZUxpc3Quc2NzcycpO1xubGV0IFByZWZlcmVuY2VMaXN0ID0gY2xhc3MgUHJlZmVyZW5jZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB1c2VybmFtZSwgZW1haWwsIGVuY3JpcHRlZFBhc3N3b3JkLCBzaG93RmF2IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZU5hbWU6IFwic2V0dGluZ3NcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJwYWdlLWNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicGFnZS1oZWFkZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgeyBzdHlsZTogeyBtYXJnaW5Cb3R0b206IDAgfSwgY2xhc3NOYW1lOiBcInBhZ2UtdGl0bGVcIiB9LCBcIlxcdThCQkVcXHU3RjZFXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIlxcdTUyOUZcXHU4MEZEXFx1NUYwMFxcdTUzRDFcXHU0RTJEXFx1RkYwQ1xcdTY2ODJcXHU0RTNBXFx1NTNFQVxcdThCRkJcIikpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7IHN0eWxlTmFtZTogXCJvcHRpb25zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsgc3R5bGVOYW1lOiBcIm9wdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgbnVsbCwgXCJcXHU3NTI4XFx1NjIzN1xcdTU0MERcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlTmFtZTogXCJvcHRpb24taW5wdXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVhZHJ3ZWIuY29tL0BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIHVzZXJuYW1lKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlTmFtZTogXCJlZGl0XCIgfSwgXCJcXHU3RjE2XFx1OEY5MVwiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IHN0eWxlTmFtZTogXCJvcHRpb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIFwiXFx1OTBBRVxcdTdCQjFcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlTmFtZTogXCJvcHRpb24taW5wdXRcIiB9LCBlbWFpbCksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlTmFtZTogXCJlZGl0XCIgfSwgXCJcXHU3RjE2XFx1OEY5MVwiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IHN0eWxlTmFtZTogXCJvcHRpb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIFwiXFx1NUJDNlxcdTc4MDFcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlTmFtZTogXCJvcHRpb24taW5wdXRcIiB9LCBcIioqKioqKlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGVOYW1lOiBcImVkaXRcIiB9LCBcIlxcdTdGMTZcXHU4RjkxXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsgc3R5bGVOYW1lOiBcIm9wdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgbnVsbCwgXCJcXHU1MTZDXFx1NUYwMFxcdTVDNTVcXHU3OTNBXFx1NjIxMVxcdTc2ODRcXHU2NTM2XFx1ODVDRlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGVOYW1lOiBcIm9wdGlvbi1kZXNjXCIgfSwgXCJcXHU1MTczXFx1OTVFRFxcdTU0MEVcXHU1MTc2XFx1NEVENlxcdTc1MjhcXHU2MjM3XFx1NUMwNlxcdTY1RTBcXHU2Q0Q1XFx1NjdFNVxcdTc3MEJcXHU2MEE4XFx1NzY4NFxcdTY1MzZcXHU4NUNGXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2l0Y2hlciwgeyBzdHlsZU5hbWU6IFwic3dpdGNoZXJcIiwgdmFsdWU6IHNob3dGYXYsIG9uQ2hhbmdlOiBuZXdWYWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0ZhdjogbmV3VmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSkpKSkpO1xuICAgIH1cbn07XG5QcmVmZXJlbmNlTGlzdCA9IF9fZGVjb3JhdGUoW1xuICAgIENTU01vZHVsZXMoc3R5bGVzLCB7XG4gICAgICAgIGFsbG93TXVsdGlwbGU6IHRydWVcbiAgICB9KVxuXSwgUHJlZmVyZW5jZUxpc3QpO1xuZXhwb3J0IGRlZmF1bHQgUHJlZmVyZW5jZUxpc3Q7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9QcmVmZXJlbmNlL2NvbXBvbmVudHMvUHJlZmVyZW5jZUxpc3QudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9QcmVmZXJlbmNlTGlzdC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvY29tcG9uZW50cy9QcmVmZXJlbmNlTGlzdC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDExXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2V0dGluZ3NfM0NIMlEgLm9wdGlvbnNfMjdXSXcge1xcbiAgbWFyZ2luLXRvcDogLTM1cHg7IH1cXG5cXG4uc2V0dGluZ3NfM0NIMlEgLm9wdGlvbl9JZWN6eCB7XFxuICBwYWRkaW5nOiAzMHB4IDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE0KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLnNldHRpbmdzXzNDSDJRIC5vcHRpb25fSWVjenggaDIge1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XFxuICAuc2V0dGluZ3NfM0NIMlEgLm9wdGlvbl9JZWN6eDpsYXN0LWNoaWxkIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5zZXR0aW5nc18zQ0gyUSAub3B0aW9uLWlucHV0XzJiRWQ5LFxcbi5zZXR0aW5nc18zQ0gyUSAub3B0aW9uLWRlc2NfMk5tYlYge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4uc2V0dGluZ3NfM0NIMlEgLnVzZXItYXZhdGFyXzJBVk81IHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7IH1cXG5cXG4uc2V0dGluZ3NfM0NIMlEgLmVkaXRfMjNDcHIsXFxuLnNldHRpbmdzXzNDSDJRIC5zd2l0Y2hlcl8xS0ZGdyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogNTAlO1xcbiAgbWFyZ2luLXRvcDogLTE5cHg7IH1cXG5cXG4uc2V0dGluZ3NfM0NIMlEgLnN3aXRjaGVyXzFLRkZ3IHtcXG4gIG1hcmdpbi10b3A6IC04cHg7IH1cXG5cXG4uc2V0dGluZ3NfM0NIMlEgLmVkaXRfMjNDcHIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIHBhZGRpbmc6IDZweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic2V0dGluZ3NcIjogXCJzZXR0aW5nc18zQ0gyUVwiLFxuXHRcIm9wdGlvbnNcIjogXCJvcHRpb25zXzI3V0l3XCIsXG5cdFwib3B0aW9uXCI6IFwib3B0aW9uX0llY3p4XCIsXG5cdFwib3B0aW9uLWlucHV0XCI6IFwib3B0aW9uLWlucHV0XzJiRWQ5XCIsXG5cdFwib3B0aW9uLWRlc2NcIjogXCJvcHRpb24tZGVzY18yTm1iVlwiLFxuXHRcInVzZXItYXZhdGFyXCI6IFwidXNlci1hdmF0YXJfMkFWTzVcIixcblx0XCJlZGl0XCI6IFwiZWRpdF8yM0NwclwiLFxuXHRcInN3aXRjaGVyXCI6IFwic3dpdGNoZXJfMUtGRndcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvY29tcG9uZW50cy9QcmVmZXJlbmNlTGlzdC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDExXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==