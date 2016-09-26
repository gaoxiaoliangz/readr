webpackJsonp([14],{

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactCssModules = __webpack_require__(2);

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

	var styles = __webpack_require__(116);
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

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Switcher = __webpack_require__(103);

	var _Switcher2 = _interopRequireDefault(_Switcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switcher2.default;

/***/ },

/***/ 116:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"switcher-wrap":"switcher-wrap_3UMAU","switcher":"switcher_G3n4_","switcher--off":"switcher--off_1EoOU","switcher--on":"switcher--on_2xiwO","switcher-button":"switcher-button_2kHGL","switcher-track":"switcher-track_xvhjg"};

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	var _actions = __webpack_require__(8);

	var _lodash = __webpack_require__(4);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _PreferenceList = __webpack_require__(313);

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

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Switcher = __webpack_require__(104);

	var _Switcher2 = _interopRequireDefault(_Switcher);

	var _reactCssModules = __webpack_require__(2);

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

	var styles = __webpack_require__(373);
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

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _PreferenceList = __webpack_require__(312);

	var _PreferenceList2 = _interopRequireDefault(_PreferenceList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _PreferenceList2.default;

/***/ },

/***/ 373:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"settings":"settings_239Dg","options":"options_ADPll","option":"option_aC25y","option-input":"option-input_1K3I6","option-desc":"option-desc_3wAfQ","user-avatar":"user-avatar_1g7D4","edit":"edit_kzVtT","switcher":"switcher_sb9M0"};

/***/ }

});