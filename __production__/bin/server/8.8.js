exports.ids = [8];
exports.modules = {

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Textarea = exports.SelectizeInput = exports.Input = exports.Button = undefined;
	
	var _Button = __webpack_require__(194);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Input = __webpack_require__(290);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _SelectizeInput = __webpack_require__(294);
	
	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);
	
	var _Textarea = __webpack_require__(298);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Button = _Button2.default;
	exports.Input = _Input2.default;
	exports.SelectizeInput = _SelectizeInput2.default;
	exports.Textarea = _Textarea2.default;

/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Input = __webpack_require__(291);
	
	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Input2.default;

/***/ },

/***/ 291:
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
	
	var _classnames = __webpack_require__(106);
	
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
	
	var styles = __webpack_require__(292);
	var Input = function (_Component) {
	    _inherits(Input, _Component);
	
	    function Input(props) {
	        _classCallCheck(this, Input);
	
	        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));
	    }
	
	    _createClass(Input, [{
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var props = Object.assign({}, this.props);
	            delete props.className;
	            var _props = this.props;
	            var error = _props.error;
	            var touched = _props.touched;
	
	            var showError = error && touched;
	            return _react2.default.createElement("div", { styleName: (0, _classnames2.default)({ 'input-wrap': !showError, 'input-wrap--error': showError }), className: this.props.className || '' }, _react2.default.createElement("input", { styleName: "input", placeholder: this.props.placeholder, value: this.props.value, onChange: function onChange(e) {
	                    _this2.props.onChange(e);
	                }, type: this.props.type ? this.props.type : 'text', name: this.props.name ? this.props.name : null }), showError && _react2.default.createElement("div", { styleName: "error-msg" }, error));
	        }
	    }]);
	
	    return Input;
	}(_react.Component);
	Input = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], Input);
	exports.default = Input;

/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(293);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(111)();
	// imports
	
	
	// module
	exports.push([module.id, ".input-wrap_13Bbk, .input-wrap--error_2SJA1 {\n  margin: 10px 0;\n  position: relative; }\n\n.input_75rlN {\n  width: 100%;\n  padding: 5px 5px;\n  border: 1px solid #ddd;\n  transition: border-color .3s;\n  line-height: 25px;\n  outline: none; }\n\n.input_75rlN:focus {\n  border-color: #1B267F; }\n\n.input-wrap--error_2SJA1 .input_75rlN {\n  border-color: #cc0000; }\n\n.error-msg_3Efzi {\n  position: absolute;\n  right: 10px;\n  top: 6px;\n  line-height: 25px;\n  color: #cc0000; }\n", ""]);
	
	// exports
	exports.locals = {
		"input-wrap": "input-wrap_13Bbk",
		"input-wrap--error": "input-wrap--error_2SJA1",
		"input": "input_75rlN",
		"error-msg": "error-msg_3Efzi"
	};

/***/ },

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _SelectizeInput = __webpack_require__(295);
	
	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SelectizeInput2.default;

/***/ },

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Icon = __webpack_require__(104);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _classnames = __webpack_require__(106);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(108);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _isDescendant = __webpack_require__(93);
	
	var _isDescendant2 = _interopRequireDefault(_isDescendant);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
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
	
	var styles = __webpack_require__(296);
	var SelectizeInput = function (_Component) {
	    _inherits(SelectizeInput, _Component);
	
	    function SelectizeInput(props) {
	        _classCallCheck(this, SelectizeInput);
	
	        var _this = _possibleConstructorReturn(this, (SelectizeInput.__proto__ || Object.getPrototypeOf(SelectizeInput)).call(this, props));
	
	        _this.state = {
	            showOptions: false,
	            focus: false,
	            value: '',
	            expendedOptionIndex: 0
	        };
	        _this.handleOutsideClick = _this.handleOutsideClick.bind(_this);
	        _this.focusInput = _this.focusInput.bind(_this);
	        _this.handleInputChange = _this.handleInputChange.bind(_this);
	        return _this;
	    }
	
	    _createClass(SelectizeInput, [{
	        key: "addValue",
	        value: function addValue(newValue) {
	            var _this2 = this;
	
	            if (!this.props.useValue) {
	                this.props.onValuesChange(this.props.values.concat(newValue));
	                if (this.props.onOptionsChange) {
	                    this.props.onOptionsChange(this.props.options.map(function (option) {
	                        return option.value === newValue.value ? Object.assign({}, option, { disabled: true }) : option;
	                    }));
	                }
	                // React setState 是异步的，如果都是用 state 管理则会出现同时调用 setState 的情况，从而造成问题
	                setTimeout(function () {
	                    _this2.clearInputValue();
	                }, 1);
	                if (typeof this.props.stayFocused === 'undefined' || this.props.stayFocused !== false) {
	                    this.focusInput();
	                }
	                this.hideOptions();
	            } else {
	                this.props.onInputChange(newValue.name);
	                this.hideOptions();
	            }
	        }
	    }, {
	        key: "showOptions",
	        value: function showOptions() {
	            this.setState({
	                showOptions: true
	            });
	        }
	    }, {
	        key: "hideOptions",
	        value: function hideOptions() {
	            this.setState({
	                showOptions: false
	            });
	        }
	    }, {
	        key: "removeValue",
	        value: function removeValue(index) {
	            var newValues = [];
	            var removedValue = void 0;
	            if (index === -1) {
	                newValues = this.props.values.slice(0, this.props.values.length - 1);
	                removedValue = this.props.values[this.props.values.length - 1].value;
	            } else {
	                newValues = this.props.values.filter(function (v, i) {
	                    removedValue = v.value;
	                    return i !== index;
	                });
	            }
	            if (this.props.onOptionsChange) {
	                this.props.onOptionsChange(this.props.options.map(function (option) {
	                    return option.value === removedValue ? Object.assign({}, option, { disabled: false }) : option;
	                }));
	            }
	            this.props.onValuesChange(newValues);
	        }
	    }, {
	        key: "clearInputValue",
	        value: function clearInputValue() {
	            this.props.onInputChange('');
	        }
	    }, {
	        key: "handleKeyPress",
	        value: function handleKeyPress(e) {
	            if (e.keyCode === 8 && !this.props.value && this.props.values.length !== 0) {
	                this.removeValue(-1);
	            }
	        }
	    }, {
	        key: "handleInputChange",
	        value: function handleInputChange(e) {
	            this.props.onInputChange(e.target.value);
	            if ((this.props.options || []).length !== 0) {
	                this.showOptions();
	            }
	        }
	    }, {
	        key: "focusInput",
	        value: function focusInput() {
	            this.input.focus();
	        }
	    }, {
	        key: "handleOutsideClick",
	        value: function handleOutsideClick(e) {
	            if ((0, _isDescendant2.default)(this.inputWrap, e.target) || this.inputWrap === e.target) {
	                this.focusInput();
	                this.showOptions();
	            } else {
	                this.hideOptions();
	            }
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            var optionsLoaded = (nextProps.options || []).length !== 0 && (this.props.options || []).length === 0;
	            if (optionsLoaded && this.state.focus) {
	                this.showOptions();
	            }
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            window.addEventListener('click', this.handleOutsideClick);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            window.removeEventListener('click', this.handleOutsideClick);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this3 = this;
	
	            var _props = this.props;
	            var label = _props.label;
	            var values = _props.values;
	            var onAddNewValue = _props.onAddNewValue;
	            var omitSelectedValuesFromOptions = _props.omitSelectedValuesFromOptions;
	
	            var value = this.props.value || '';
	            var options = this.props.options || [];
	            var inputWidth = values.length > 0 ? value.length === 0 ? 16 : value.length * 16 : '100%';
	            var placeholder = values.length > 0 ? '' : this.props.placeholder;
	            var filteredOptions = options.filter(function (option) {
	                if (omitSelectedValuesFromOptions) {
	                    var valueOfValues = _lodash2.default.map(values, 'value');
	                    return valueOfValues.indexOf(option.value) === -1;
	                }
	                return true;
	            });
	            var selectizeInputStyleName = (0, _classnames2.default)({
	                'selectize-input': true,
	                'selectize-input--focus': this.state.focus,
	                'selectize-input--empty': values.length === 0
	            });
	            return _react2.default.createElement("div", { styleName: "selectize-wrap", className: this.props.className || '' }, label ? _react2.default.createElement("label", { className: "form-label" }, label) : null, _react2.default.createElement("div", { styleName: selectizeInputStyleName, ref: function ref(_ref) {
	                    _this3.inputWrap = _ref;
	                } }, values.map(function (v, index) {
	                return _react2.default.createElement("span", { key: index, styleName: "selectize-tag" }, v.name, _react2.default.createElement(_Icon2.default, { styleName: "icon-remove", size: 20, name: "close", onClick: function onClick(e) {
	                        _this3.removeValue(index);
	                    } }));
	            }), _react2.default.createElement("input", { style: { width: inputWidth }, ref: function ref(_ref2) {
	                    _this3.input = _ref2;
	                }, value: value, placeholder: placeholder, onBlur: function onBlur(e) {
	                    _this3.setState({ focus: false });
	                }, onFocus: function onFocus(e) {
	                    _this3.setState({ focus: true });
	                }, onChange: this.handleInputChange, onKeyDown: function onKeyDown(e) {
	                    _this3.handleKeyPress(e);
	                } })), this.state.showOptions && (filteredOptions.length !== 0 || onAddNewValue) ? _react2.default.createElement("ul", { styleName: "query-results" }, filteredOptions.map(function (option, index) {
	                if (option.disabled) {
	                    return _react2.default.createElement("li", { key: index, className: "disabled" }, option.name);
	                }
	                return _react2.default.createElement("li", { key: index, onClick: function onClick(e) {
	                        _this3.addValue(option);
	                        if (_this3.props.onOptionClick) {
	                            _this3.props.onOptionClick(option);
	                        }
	                    } }, _react2.default.createElement("span", null, option.name));
	            }), onAddNewValue ? _react2.default.createElement("li", { onClick: function onClick(e) {
	                    onAddNewValue(_this3.props.value);
	                }, className: "add" }, "添加 ", _react2.default.createElement("strong", null, this.props.value)) : null) : null);
	        }
	    }]);
	
	    return SelectizeInput;
	}(_react.Component);
	SelectizeInput = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], SelectizeInput);
	SelectizeInput['defaultProps'] = {
	    omitSelectedValuesFromOptions: true
	};
	exports.default = SelectizeInput;

/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(297);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(111)();
	// imports
	
	
	// module
	exports.push([module.id, ".selectize-wrap_3AMAi {\n  margin: 10px 0;\n  position: relative; }\n\n.selectize-input_14bgP {\n  min-width: 300px;\n  border: 1px solid #ddd;\n  margin: 10px 0;\n  box-sizing: border-box;\n  transition: all 0s;\n  cursor: text;\n  background: #fff; }\n  .selectize-input_14bgP input {\n    background: transparent;\n    line-height: 22px; }\n\n.selectize-input--focus_UnZ8B {\n  border-color: #1B267F; }\n\n.selectize-input--empty_xn7Uy {\n  background: #fff;\n  padding: 5px 5px 0; }\n\n.selectize-input_14bgP input {\n  border: none;\n  outline: none;\n  margin-bottom: 5px; }\n\n.query-results_OgE2t {\n  margin-top: -3px;\n  margin-bottom: 5px;\n  padding: 5px;\n  border-radius: 3px;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.32);\n  background: #fff;\n  z-index: 900; }\n\n.query-results_OgE2t li {\n  padding: 0 7px;\n  line-height: 2;\n  cursor: pointer;\n  border-radius: 3px; }\n  .query-results_OgE2t li:hover {\n    background: #1B267F;\n    color: #fff; }\n\n.selectize-tag_3aD13 {\n  background: #1B267F;\n  cursor: pointer;\n  border-radius: 3px;\n  padding: 3px 25px 3px 5px;\n  margin: 5px;\n  color: #fff;\n  display: inline-block;\n  position: relative; }\n\n.icon-remove_1O7F_ {\n  font-size: 0.8rem;\n  margin-left: 5px;\n  position: absolute;\n  right: 5px;\n  top: 2px; }\n", ""]);
	
	// exports
	exports.locals = {
		"selectize-wrap": "selectize-wrap_3AMAi",
		"selectize-input": "selectize-input_14bgP",
		"selectize-input--focus": "selectize-input--focus_UnZ8B",
		"selectize-input--empty": "selectize-input--empty_xn7Uy",
		"query-results": "query-results_OgE2t",
		"selectize-tag": "selectize-tag_3aD13",
		"icon-remove": "icon-remove_1O7F_"
	};

/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Textarea = __webpack_require__(299);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Textarea2.default;

/***/ },

/***/ 299:
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
	
	var styles = __webpack_require__(300);
	var Textarea = function (_Component) {
	    _inherits(Textarea, _Component);
	
	    function Textarea(props) {
	        _classCallCheck(this, Textarea);
	
	        return _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, props));
	    }
	
	    _createClass(Textarea, [{
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            return _react2.default.createElement("div", { styleName: "textarea-wrap", className: this.props.className || '' }, _react2.default.createElement("textarea", { placeholder: this.props.placeholder, value: this.props.value, onChange: function onChange(e) {
	                    _this2.props.onChange(e);
	                }, styleName: "textarea", type: this.props.type ? this.props.type : 'text', name: this.props.name ? this.props.name : null }));
	        }
	    }]);
	
	    return Textarea;
	}(_react.Component);
	Textarea = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], Textarea);
	exports.default = Textarea;

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(301);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(111)();
	// imports
	exports.i(__webpack_require__(236), "");
	
	// module
	exports.push([module.id, ".textarea-wrap_Xkpj1 {\n  margin: 10px 0;\n  position: relative;\n}\n\n.textarea_1EdoS {\n  width: 100%;\n  padding: 5px;\n  border: 1px solid var(--gray);\n  outline: none;\n  height: 100px;\n  transition: border-color .3s;\n}\n\n.textarea_1EdoS:focus {\n  border-color: var(--blue);\n}\n", ""]);
	
	// exports
	exports.locals = {
		"textarea-wrap": "textarea-wrap_Xkpj1",
		"textarea": "textarea_1EdoS"
	};

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.form = undefined;
	
	var _createForm = __webpack_require__(337);
	
	var _createForm2 = _interopRequireDefault(_createForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var form = exports.form = _createForm2.default;

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(82);
	
	var _reactRedux = __webpack_require__(84);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _actions = __webpack_require__(85);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _selectors = __webpack_require__(223);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var formActions = actions.form;
	
	var ElementClass = function (_Component) {
	    _inherits(ElementClass, _Component);
	
	    function ElementClass() {
	        _classCallCheck(this, ElementClass);
	
	        return _possibleConstructorReturn(this, (ElementClass.__proto__ || Object.getPrototypeOf(ElementClass)).apply(this, arguments));
	    }
	
	    return ElementClass;
	}(_react.Component);
	
	var validateForm = function validateForm(fields, formValues, validateFn) {
	    if (validateFn) {
	        var errors = validateFn(formValues);
	        if (!_lodash2.default.isEmpty(errors)) {
	            var fieldsWithErrors = _lodash2.default.mapValues(errors, function (val) {
	                return {
	                    error: val
	                };
	            });
	            return {
	                fields: _lodash2.default.merge({}, fields, fieldsWithErrors),
	                hasError: true
	            };
	        }
	    }
	    return { fields: fields, hasError: false };
	};
	var createForm = function createForm(config) {
	    var fieldsArr = config.fields;
	    var formName = config.form;
	    var validate = config.validate;
	    var destroyOnUnmount = config.destroyOnUnmount;
	
	    return function (WrappedComponent) {
	        var Form = function (_Component2) {
	            _inherits(Form, _Component2);
	
	            function Form() {
	                _classCallCheck(this, Form);
	
	                return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
	            }
	
	            _createClass(Form, [{
	                key: 'createField',
	                value: function createField(value, key) {
	                    var change = this.props.change;
	
	                    var setFieldValue = function setFieldValue(val) {
	                        var newVal = val;
	                        if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val.target) {
	                            newVal = val.target.value || '';
	                        }
	                        change(formName, key, newVal, false, false);
	                    };
	                    var events = {
	                        onChange: function onChange(val) {
	                            return setFieldValue(val);
	                        }
	                    };
	                    return _defineProperty({}, key, {
	                        get: function get(defaultVal) {
	                            return value || defaultVal || '';
	                        },
	                        set: events.onChange,
	                        value: value,
	                        onChange: events.onChange,
	                        events: events
	                    });
	                }
	            }, {
	                key: 'componentDidMount',
	                value: function componentDidMount() {
	                    var defineField = this.props.defineField;
	
	                    fieldsArr.forEach(function (field) {
	                        defineField(formName, field);
	                    });
	                }
	            }, {
	                key: 'componentWillUnmount',
	                value: function componentWillUnmount() {
	                    // TODO
	                    // 生成版本的 React 会在初始化时执行一次 unmount 尚未查明原因
	                    if (destroyOnUnmount) {
	                        this.props.destroy(formName);
	                    }
	                }
	            }, {
	                key: 'render',
	                value: function render() {
	                    var _this3 = this;
	
	                    var decoratedFields = void 0;
	                    var _props = this.props;
	                    var touch = _props.touch;
	                    var formValues = _props.formValues;
	                    var formDefinition = _props.formDefinition;
	                    var formMeta = _props.formMeta;
	
	                    var fieldsObjArr = _lodash2.default.map(fieldsArr, function (key) {
	                        var fieldValue = formValues[key] || '';
	                        return _this3.createField(fieldValue, key);
	                    });
	                    fieldsObjArr.forEach(function (field) {
	                        decoratedFields = _lodash2.default.assign({}, decoratedFields, field);
	                    });
	                    var collectedValues = {};
	                    formDefinition.forEach(function (def) {
	                        var key = def.name;
	                        collectedValues[key] = formValues[key];
	                    });
	
	                    var _validateForm = validateForm(decoratedFields, collectedValues, validate);
	
	                    var fieldsWithError = _validateForm.fields;
	                    var hasError = _validateForm.hasError;
	
	                    decoratedFields = fieldsWithError;
	                    decoratedFields = _lodash2.default.merge({}, decoratedFields, formMeta);
	                    var handleSubmit = function handleSubmit(fn) {
	                        return function (e) {
	                            touch(formName, formDefinition.map(function (def) {
	                                return def.name;
	                            }));
	                            if (!hasError) {
	                                fn(collectedValues);
	                            }
	                        };
	                    };
	                    return (0, _react.createElement)(WrappedComponent, _lodash2.default.assign({}, this.props, {
	                        fields: decoratedFields,
	                        handleSubmit: handleSubmit
	                    }));
	                }
	            }]);
	
	            return Form;
	        }(_react.Component);
	
	        return (0, _reactRedux.connect)(function (state) {
	            return {
	                form: selectors.form.fullForm(formName)(state),
	                formValues: selectors.form.formValues(formName)(state),
	                formDefinition: selectors.form.formDefinition(formName)(state),
	                formMeta: selectors.form.formMeta(formName)(state)
	            };
	        }, formActions)(Form);
	    };
	};
	exports.default = createForm;

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = validation;
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validation(values, config) {
	    var errors = {};
	    _lodash2.default.keys(values).forEach(function (key) {
	        if (!values[key]) {
	            errors[key] = '\u4E0D\u80FD\u4E3A\u7A7A\uFF01';
	        }
	    });
	    return errors;
	}

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(84);
	
	var _reactRouter = __webpack_require__(69);
	
	var _actions = __webpack_require__(85);
	
	var _DocContainer = __webpack_require__(238);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _SignupForm = __webpack_require__(341);
	
	var _SignupForm2 = _interopRequireDefault(_SignupForm);
	
	var _api = __webpack_require__(240);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _helpers = __webpack_require__(62);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Signup = function (_Component) {
	    _inherits(Signup, _Component);
	
	    function Signup(props) {
	        _classCallCheck(this, Signup);
	
	        var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));
	
	        _this.handleSignup = _this.handleSignup.bind(_this);
	        return _this;
	    }
	
	    _createClass(Signup, [{
	        key: 'handleSignup',
	        value: function handleSignup(data) {
	            var _this2 = this;
	
	            _api2.default.userSignup(data).then(function (res) {
	                _this2.props.sendNotification('注册成功！');
	                _api2.default.userLogin({ login: data.username, password: data.password }).then(function () {
	                    _this2.props.userAuth().then(function () {
	                        setTimeout(function () {
	                            _helpers2.default.redirect('/');
	                        }, 600);
	                    });
	                });
	            }, function (err) {
	                _this2.props.sendNotification(err.message, 'error');
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_DocContainer2.default, { title: "注册" }, _react2.default.createElement("div", { className: "content-container" }, _react2.default.createElement("h1", { className: "page-title" }, "加入 Readr"), _react2.default.createElement(_SignupForm2.default, { onSave: this.handleSignup }), _react2.default.createElement("p", { className: "hint" }, "已有账号？", _react2.default.createElement(_reactRouter.Link, { to: "/signin" }, "登录"))));
	        }
	    }]);
	
	    return Signup;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        notification: state.components.notification,
	        user: state.user
	    };
	}, { sendNotification: _actions.sendNotification, userAuth: _actions.userAuth })(Signup);

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(84);
	
	var _form = __webpack_require__(336);
	
	var _actions = __webpack_require__(85);
	
	var _form2 = __webpack_require__(289);
	
	var _validation = __webpack_require__(338);
	
	var _validation2 = _interopRequireDefault(_validation);
	
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
	
	var SignupForm = function (_Component) {
	    _inherits(SignupForm, _Component);
	
	    function SignupForm(props) {
	        _classCallCheck(this, SignupForm);
	
	        return _possibleConstructorReturn(this, (SignupForm.__proto__ || Object.getPrototypeOf(SignupForm)).call(this, props));
	    }
	
	    _createClass(SignupForm, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var _props$fields = _props.fields;
	            var username = _props$fields.username;
	            var email = _props$fields.email;
	            var password = _props$fields.password;
	            var handleSubmit = _props.handleSubmit;
	            var onSave = _props.onSave;
	
	            return _react2.default.createElement("div", null, _react2.default.createElement(_form2.Input, __assign({ placeholder: "用户名" }, username)), _react2.default.createElement(_form2.Input, __assign({ placeholder: "邮箱" }, email)), _react2.default.createElement(_form2.Input, __assign({ placeholder: "密码", type: "password" }, password)), _react2.default.createElement(_form2.Button, { color: "blue", onClick: handleSubmit(function (data) {
	                    onSave(data);
	                }) }, "注册"));
	        }
	    }]);
	
	    return SignupForm;
	}(_react.Component);
	SignupForm = __decorate([(0, _form.form)({
	    form: 'signup',
	    fields: ['username', 'email', 'password'],
	    validate: function validate(values) {
	        return (0, _validation2.default)(values);
	    }
	})], SignupForm);
	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	    return {
	        initialValues: ownProps.initialValues,
	        routing: state.routing.locationBeforeTransitions
	    };
	}, { sendNotification: _actions.sendNotification })(SignupForm);

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vaW5kZXgudHM/NTBkNyoqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L2luZGV4LnRzPzIxZDMqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9JbnB1dC50c3g/ZGExZCoqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuc2Nzcz80MDE3KioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuc2Nzcz8wNDgzKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L2luZGV4LnRzPzdlODAqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC50c3g/NGU3MyoqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQuc2Nzcz9jZWE0KioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQuc2Nzcz84YjkzKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL2luZGV4LnRzP2I4MTIqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS50c3g/YzJhZioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEuY3NzP2FhMjEqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS5jc3M/NWJjMioqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9mb3JtL2luZGV4LnRzPzRiNGMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2Zvcm0vY3JlYXRlRm9ybS50c3g/M2JmZiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZGF0YS92YWxpZGF0aW9uLnRzP2I0ODkiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9TaWdudXAvU2lnbnVwLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1NpZ251cC9jb21wb25lbnRzL1NpZ251cEZvcm0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNkI7Ozs7QUFDRjs7OztBQUNrQjs7OztBQUc3Qzs7Ozs7O1NBQWU7U0FBTztTQUFnQjtTQUFZLDhCOzs7Ozs7Ozs7Ozs7O0FDSjlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RvQjs7OztBQUNFOzs7O0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNuQyxLQUFZLFNBQVUsb0JBQWdCO0FBZ0J0QztBQUE2Qjs7QUFDM0Isb0JBQWlCO0FBQ2Y7OzhHQUNGO0FBRU07Ozs7Ozs7QUFDSixpQkFBUyxRQUFTLE9BQU8sT0FBRyxJQUFNLEtBQU87QUFDekMsb0JBQVksTUFDTjswQkFBeUIsS0FBTTtpQkFBeEI7aUJBQVc7O0FBRXhCLGlCQUFlLFlBQVEsU0FBVztBQUUzQixvQkFDTCw4QkFBSSxTQUFVLFdBQVksMEJBQUMsRUFBYSxjQUFFLENBQVUsV0FBcUIscUJBQWMsY0FBVSxXQUFNLEtBQU0sTUFBVSxhQUFPLG9DQUN0SCxXQUNLLFdBQVEsU0FDTixhQUFNLEtBQU0sTUFBYSxhQUMvQixPQUFNLEtBQU0sTUFBTyxPQUNoQixVQUFHO0FBQ0wsNEJBQU0sTUFB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LDBCQUNuQjtBQUNBO0FBTkksRUFBRCxJQW1DTDs0Q0FDRSxVQUFNLE9BQVU7QUFDUjtBQUNTLHdCQUFVLFNBQWM7QUFDOUIsa0JBQU8sTUFBUSxRQUUxQjtBQUpTO0FBSVIsRUFObUIsRUFPcEIsRUFDRCwrQ0FBWSxZIiwiZmlsZSI6IjguOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcbmltcG9ydCBTZWxlY3RpemVJbnB1dCBmcm9tICcuL1NlbGVjdGl6ZUlucHV0J1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vVGV4dGFyZWEnXG5cbmV4cG9ydCB7IEJ1dHRvbiwgSW5wdXQsIFNlbGVjdGl6ZUlucHV0LCBUZXh0YXJlYSB9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9pbmRleC50c1xuICoqLyIsImltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuZXhwb3J0IGRlZmF1bHQgSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9JbnB1dC5zY3NzJylcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICBvbkNoYW5nZT86IGFueVxuICB2YWx1ZT86IHN0cmluZ1xuICB0eXBlPzogc3RyaW5nXG4gIG5hbWU/OiBzdHJpbmdcbiAgZXJyb3I/OiBhbnlcbiAgdG91Y2hlZD86IGJvb2xlYW5cbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBJbnB1dCBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcylcbiAgICBkZWxldGUgcHJvcHMuY2xhc3NOYW1lXG4gICAgY29uc3QgeyBlcnJvciwgdG91Y2hlZCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gZXJyb3IgJiYgdG91Y2hlZFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPXtjbGFzc25hbWVzKHsnaW5wdXQtd3JhcCc6ICFzaG93RXJyb3IsICdpbnB1dC13cmFwLS1lcnJvcic6IHNob3dFcnJvcn0pfSBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgc3R5bGVOYW1lPVwiaW5wdXRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIHR5cGU9e3RoaXMucHJvcHMudHlwZSA/IHRoaXMucHJvcHMudHlwZSA6ICd0ZXh0J31cbiAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLm5hbWUgPyB0aGlzLnByb3BzLm5hbWUgOiBudWxsfVxuICAgICAgICAvPlxuICAgICAgICB7XG4gICAgICAgICAgc2hvd0Vycm9yICYmIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiZXJyb3ItbXNnXCI+e2Vycm9yfTwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9JbnB1dC50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0lucHV0LnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9JbnB1dC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjkyXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbnB1dC13cmFwXzEzQmJrLCAuaW5wdXQtd3JhcC0tZXJyb3JfMlNKQTEge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uaW5wdXRfNzVybE4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA1cHggNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuM3M7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIG91dGxpbmU6IG5vbmU7IH1cXG5cXG4uaW5wdXRfNzVybE46Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjMUIyNjdGOyB9XFxuXFxuLmlucHV0LXdyYXAtLWVycm9yXzJTSkExIC5pbnB1dF83NXJsTiB7XFxuICBib3JkZXItY29sb3I6ICNjYzAwMDA7IH1cXG5cXG4uZXJyb3ItbXNnXzNFZnppIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgdG9wOiA2cHg7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIGNvbG9yOiAjY2MwMDAwOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaW5wdXQtd3JhcFwiOiBcImlucHV0LXdyYXBfMTNCYmtcIixcblx0XCJpbnB1dC13cmFwLS1lcnJvclwiOiBcImlucHV0LXdyYXAtLWVycm9yXzJTSkExXCIsXG5cdFwiaW5wdXRcIjogXCJpbnB1dF83NXJsTlwiLFxuXHRcImVycm9yLW1zZ1wiOiBcImVycm9yLW1zZ18zRWZ6aVwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9JbnB1dC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjkzXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJpbXBvcnQgU2VsZWN0aXplSW5wdXQgZnJvbSAnLi9TZWxlY3RpemVJbnB1dCdcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGl6ZUlucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uL0ljb24nXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgaXNEZXNjZW5kYW50IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RvbS9pc0Rlc2NlbmRhbnQnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1NlbGVjdGl6ZUlucHV0LnNjc3MnKVxuXG50eXBlIFR5cGVPcHRpb24gPSB7XG4gIHZhbHVlOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICBhZGRpdGlvbmFsPzogYW55XG59XG5cbnR5cGUgVHlwZVZhbHVlID0ge1xuICB2YWx1ZTogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nXG4gIGxhYmVsPzogc3RyaW5nXG4gIHN0YXlGb2N1c2VkPzogYm9vbGVhbiAvLyBkZWZhdWx0IHRydWVcbiAgb21pdFNlbGVjdGVkVmFsdWVzRnJvbU9wdGlvbnM/OiBib29sZWFuXG5cbiAgdmFsdWU6IHN0cmluZ1xuICBvbklucHV0Q2hhbmdlOiAobmV3VmFsdWU6IHN0cmluZykgPT4gdm9pZFxuXG4gIC8vIOS9v+eUqCB2YWx1ZSDogIzkuI3mmK8gdmFsdWVzIOS9nOS4uui+k+WFpSBcbiAgdXNlVmFsdWU/OiBib29sZWFuXG5cbiAgb3B0aW9uczogQXJyYXk8VHlwZU9wdGlvbj5cbiAgb25PcHRpb25zQ2hhbmdlPzogKG5ld1ZhbHVlczogQXJyYXk8VHlwZU9wdGlvbj4pID0+IHZvaWRcblxuICB2YWx1ZXM6IEFycmF5PFR5cGVWYWx1ZT5cbiAgb25WYWx1ZXNDaGFuZ2U/OiAobmV3VmFsdWVzOiBBcnJheTxUeXBlVmFsdWU+KSA9PiB2b2lkXG5cbiAgLy8g6aKd5aSW5Yqf6IO9XG4gIG9uQWRkTmV3VmFsdWU/OiAobmV3VmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICBvbk9wdGlvbkNsaWNrPzogKHNlbGVjdGVkVmFsdWU6IFR5cGVPcHRpb24pID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIGZvY3VzPzogYm9vbGVhblxuICBzaG93T3B0aW9ucz86IGJvb2xlYW5cbiAgdmFsdWU/OiBzdHJpbmdcbiAgZXhwZW5kZWRPcHRpb25JbmRleD86IG51bWJlclxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIFNlbGVjdGl6ZUlucHV0IGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnRcbiAgaW5wdXRXcmFwOiBIVE1MRGl2RWxlbWVudFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dPcHRpb25zOiBmYWxzZSxcbiAgICAgIGZvY3VzOiBmYWxzZSxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIGV4cGVuZGVkT3B0aW9uSW5kZXg6IDBcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2sgPSB0aGlzLmhhbmRsZU91dHNpZGVDbGljay5iaW5kKHRoaXMpXG4gICAgdGhpcy5mb2N1c0lucHV0ID0gdGhpcy5mb2N1c0lucHV0LmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBhZGRWYWx1ZShuZXdWYWx1ZSkge1xuICAgIGlmICghdGhpcy5wcm9wcy51c2VWYWx1ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblZhbHVlc0NoYW5nZSh0aGlzLnByb3BzLnZhbHVlcy5jb25jYXQobmV3VmFsdWUpKVxuICAgICAgaWYgKHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKHRoaXMucHJvcHMub3B0aW9ucy5tYXAob3B0aW9uID0+IChvcHRpb24udmFsdWUgPT09IG5ld1ZhbHVlLnZhbHVlXG4gICAgICAgICAgPyBPYmplY3QuYXNzaWduKHt9LCBvcHRpb24sIHsgZGlzYWJsZWQ6IHRydWUgfSlcbiAgICAgICAgICA6IG9wdGlvbikpKVxuICAgICAgfVxuXG4gICAgICAvLyBSZWFjdCBzZXRTdGF0ZSDmmK/lvILmraXnmoTvvIzlpoLmnpzpg73mmK/nlKggc3RhdGUg566h55CG5YiZ5Lya5Ye6546w5ZCM5pe26LCD55SoIHNldFN0YXRlIOeahOaDheWGte+8jOS7juiAjOmAoOaIkOmXrumimFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xlYXJJbnB1dFZhbHVlKClcbiAgICAgIH0sIDEpXG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5zdGF5Rm9jdXNlZCA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5wcm9wcy5zdGF5Rm9jdXNlZCAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5mb2N1c0lucHV0KClcbiAgICAgIH1cbiAgICAgIHRoaXMuaGlkZU9wdGlvbnMoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UobmV3VmFsdWUubmFtZSlcbiAgICAgIHRoaXMuaGlkZU9wdGlvbnMoKVxuICAgIH1cbiAgfVxuXG4gIHNob3dPcHRpb25zKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd09wdGlvbnM6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgaGlkZU9wdGlvbnMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3B0aW9uczogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlVmFsdWUoaW5kZXgpIHtcbiAgICBsZXQgbmV3VmFsdWVzID0gW11cbiAgICBsZXQgcmVtb3ZlZFZhbHVlXG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICBuZXdWYWx1ZXMgPSB0aGlzLnByb3BzLnZhbHVlcy5zbGljZSgwLCB0aGlzLnByb3BzLnZhbHVlcy5sZW5ndGggLSAxKVxuICAgICAgcmVtb3ZlZFZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZXNbdGhpcy5wcm9wcy52YWx1ZXMubGVuZ3RoIC0gMV0udmFsdWVcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3VmFsdWVzID0gdGhpcy5wcm9wcy52YWx1ZXNcbiAgICAgICAgLmZpbHRlcigodiwgaSkgPT4ge1xuICAgICAgICAgIHJlbW92ZWRWYWx1ZSA9IHYudmFsdWVcbiAgICAgICAgICByZXR1cm4gaSAhPT0gaW5kZXhcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKHRoaXMucHJvcHMub3B0aW9ucy5tYXAob3B0aW9uID0+IChvcHRpb24udmFsdWUgPT09IHJlbW92ZWRWYWx1ZVxuICAgICAgICA/IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbiwgeyBkaXNhYmxlZDogZmFsc2UgfSlcbiAgICAgICAgOiBvcHRpb24pKSlcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uVmFsdWVzQ2hhbmdlKG5ld1ZhbHVlcylcbiAgfVxuXG4gIGNsZWFySW5wdXRWYWx1ZSgpIHtcbiAgICB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UoJycpXG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gOCAmJiAhdGhpcy5wcm9wcy52YWx1ZSAmJiB0aGlzLnByb3BzLnZhbHVlcy5sZW5ndGggIT09IDApIHtcbiAgICAgIHRoaXMucmVtb3ZlVmFsdWUoLTEpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZSkge1xuICAgIHRoaXMucHJvcHMub25JbnB1dENoYW5nZShlLnRhcmdldC52YWx1ZSlcbiAgICBpZiAoKHRoaXMucHJvcHMub3B0aW9ucyB8fCBbXSkubGVuZ3RoICE9PSAwKSB7XG4gICAgICB0aGlzLnNob3dPcHRpb25zKClcbiAgICB9XG4gIH1cblxuICBmb2N1c0lucHV0KCkge1xuICAgIHRoaXMuaW5wdXQuZm9jdXMoKVxuICB9XG5cbiAgaGFuZGxlT3V0c2lkZUNsaWNrKGUpIHtcbiAgICBpZiAoaXNEZXNjZW5kYW50KHRoaXMuaW5wdXRXcmFwLCBlLnRhcmdldCkgfHwgdGhpcy5pbnB1dFdyYXAgPT09IGUudGFyZ2V0KSB7XG4gICAgICB0aGlzLmZvY3VzSW5wdXQoKVxuICAgICAgdGhpcy5zaG93T3B0aW9ucygpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZU9wdGlvbnMoKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc3Qgb3B0aW9uc0xvYWRlZCA9IChuZXh0UHJvcHMub3B0aW9ucyB8fCBbXSkubGVuZ3RoICE9PSAwICYmICh0aGlzLnByb3BzLm9wdGlvbnMgfHwgW10pLmxlbmd0aCA9PT0gMFxuICAgIGlmIChvcHRpb25zTG9hZGVkICYmIHRoaXMuc3RhdGUuZm9jdXMpIHtcbiAgICAgIHRoaXMuc2hvd09wdGlvbnMoKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2spXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYWJlbCwgdmFsdWVzLCBvbkFkZE5ld1ZhbHVlLCBvbWl0U2VsZWN0ZWRWYWx1ZXNGcm9tT3B0aW9ucyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZSB8fCAnJ1xuICAgIGxldCBvcHRpb25zID0gdGhpcy5wcm9wcy5vcHRpb25zIHx8IFtdXG5cbiAgICBsZXQgaW5wdXRXaWR0aCA9IHZhbHVlcy5sZW5ndGggPiAwID8gKHZhbHVlLmxlbmd0aCA9PT0gMCA/IDE2IDogdmFsdWUubGVuZ3RoICogMTYpIDogJzEwMCUnXG4gICAgbGV0IHBsYWNlaG9sZGVyID0gdmFsdWVzLmxlbmd0aCA+IDAgPyAnJyA6IHRoaXMucHJvcHMucGxhY2Vob2xkZXJcblxuICAgIGxldCBmaWx0ZXJlZE9wdGlvbnMgPSBvcHRpb25zXG4gICAgICAuZmlsdGVyKG9wdGlvbiA9PiB7XG4gICAgICAgIGlmIChvbWl0U2VsZWN0ZWRWYWx1ZXNGcm9tT3B0aW9ucykge1xuICAgICAgICAgIGNvbnN0IHZhbHVlT2ZWYWx1ZXMgPSBfLm1hcCh2YWx1ZXMsICd2YWx1ZScpXG4gICAgICAgICAgcmV0dXJuIHZhbHVlT2ZWYWx1ZXMuaW5kZXhPZihvcHRpb24udmFsdWUpID09PSAtMVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pXG5cbiAgICBjb25zdCBzZWxlY3RpemVJbnB1dFN0eWxlTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgJ3NlbGVjdGl6ZS1pbnB1dCc6IHRydWUsXG4gICAgICAnc2VsZWN0aXplLWlucHV0LS1mb2N1cyc6IHRoaXMuc3RhdGUuZm9jdXMsXG4gICAgICAnc2VsZWN0aXplLWlucHV0LS1lbXB0eSc6IHZhbHVlcy5sZW5ndGggPT09IDBcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwic2VsZWN0aXplLXdyYXBcIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnfT5cbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsID8gKFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj57bGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICApIDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZU5hbWU9e3NlbGVjdGl6ZUlucHV0U3R5bGVOYW1lfVxuICAgICAgICAgIHJlZj17cmVmID0+IHsgdGhpcy5pbnB1dFdyYXAgPSByZWYgfSB9XG4gICAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlcy5tYXAoKHYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gc3R5bGVOYW1lPVwic2VsZWN0aXplLXRhZ1wiPlxuICAgICAgICAgICAgICAgICAge3YubmFtZX1cbiAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlTmFtZT1cImljb24tcmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjB9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWUoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogaW5wdXRXaWR0aCB9fVxuICAgICAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmlucHV0ID0gcmVmIH0gfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgb25CbHVyPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiBmYWxzZSB9KVxuICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICBvbkZvY3VzPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiB0cnVlIH0pXG4gICAgICAgICAgICB9IH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgb25LZXlEb3duPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVLZXlQcmVzcyhlKVxuICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd09wdGlvbnMgJiYgKGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggIT09IDAgfHwgb25BZGROZXdWYWx1ZSkgPyAoXG4gICAgICAgICAgICA8dWwgc3R5bGVOYW1lPVwicXVlcnktcmVzdWx0c1wiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRPcHRpb25zXG4gICAgICAgICAgICAgICAgICAubWFwKChvcHRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImRpc2FibGVkXCI+e29wdGlvbi5uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRWYWx1ZShvcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uT3B0aW9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uT3B0aW9uQ2xpY2sob3B0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntvcHRpb24ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb25BZGROZXdWYWx1ZSA/IChcbiAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBvbkFkZE5ld1ZhbHVlKHRoaXMucHJvcHMudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGRcIj7mt7vliqAgPHN0cm9uZz57dGhpcy5wcm9wcy52YWx1ZX08L3N0cm9uZz48L2xpPlxuICAgICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblNlbGVjdGl6ZUlucHV0WydkZWZhdWx0UHJvcHMnXSA9IHtcbiAgb21pdFNlbGVjdGVkVmFsdWVzRnJvbU9wdGlvbnM6IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0aXplSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vU2VsZWN0aXplSW5wdXQuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyOTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlbGVjdGl6ZS13cmFwXzNBTUFpIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnNlbGVjdGl6ZS1pbnB1dF8xNGJnUCB7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHRyYW5zaXRpb246IGFsbCAwcztcXG4gIGN1cnNvcjogdGV4dDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cXG4gIC5zZWxlY3RpemUtaW5wdXRfMTRiZ1AgaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7IH1cXG5cXG4uc2VsZWN0aXplLWlucHV0LS1mb2N1c19Vblo4QiB7XFxuICBib3JkZXItY29sb3I6ICMxQjI2N0Y7IH1cXG5cXG4uc2VsZWN0aXplLWlucHV0LS1lbXB0eV94bjdVeSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogNXB4IDVweCAwOyB9XFxuXFxuLnNlbGVjdGl6ZS1pbnB1dF8xNGJnUCBpbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XFxuXFxuLnF1ZXJ5LXJlc3VsdHNfT2dFMnQge1xcbiAgbWFyZ2luLXRvcDogLTNweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMyKTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB6LWluZGV4OiA5MDA7IH1cXG5cXG4ucXVlcnktcmVzdWx0c19PZ0UydCBsaSB7XFxuICBwYWRkaW5nOiAwIDdweDtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4OyB9XFxuICAucXVlcnktcmVzdWx0c19PZ0UydCBsaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMxQjI2N0Y7XFxuICAgIGNvbG9yOiAjZmZmOyB9XFxuXFxuLnNlbGVjdGl6ZS10YWdfM2FEMTMge1xcbiAgYmFja2dyb3VuZDogIzFCMjY3RjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDNweCAyNXB4IDNweCA1cHg7XFxuICBtYXJnaW46IDVweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmljb24tcmVtb3ZlXzFPN0ZfIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1cHg7XFxuICB0b3A6IDJweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInNlbGVjdGl6ZS13cmFwXCI6IFwic2VsZWN0aXplLXdyYXBfM0FNQWlcIixcblx0XCJzZWxlY3RpemUtaW5wdXRcIjogXCJzZWxlY3RpemUtaW5wdXRfMTRiZ1BcIixcblx0XCJzZWxlY3RpemUtaW5wdXQtLWZvY3VzXCI6IFwic2VsZWN0aXplLWlucHV0LS1mb2N1c19Vblo4QlwiLFxuXHRcInNlbGVjdGl6ZS1pbnB1dC0tZW1wdHlcIjogXCJzZWxlY3RpemUtaW5wdXQtLWVtcHR5X3huN1V5XCIsXG5cdFwicXVlcnktcmVzdWx0c1wiOiBcInF1ZXJ5LXJlc3VsdHNfT2dFMnRcIixcblx0XCJzZWxlY3RpemUtdGFnXCI6IFwic2VsZWN0aXplLXRhZ18zYUQxM1wiLFxuXHRcImljb24tcmVtb3ZlXCI6IFwiaWNvbi1yZW1vdmVfMU83Rl9cIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI5N1xuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vVGV4dGFyZWEnXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm9wcyBhcyBJbnB1dFByb3BzIH0gZnJvbSAnLi4vSW5wdXQvSW5wdXQnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vVGV4dGFyZWEuY3NzJylcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyBleHRlbmRzIElucHV0UHJvcHMge1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIFRleHRhcmVhIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9XCJ0ZXh0YXJlYS13cmFwXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJ30+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIHN0eWxlTmFtZT1cInRleHRhcmVhXCJcbiAgICAgICAgICB0eXBlPXt0aGlzLnByb3BzLnR5cGUgPyB0aGlzLnByb3BzLnR5cGUgOiAndGV4dCd9XG4gICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lID8gdGhpcy5wcm9wcy5uYW1lIDogbnVsbH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9UZXh0YXJlYS5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzMDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSFzdHlsZXMvdmFyaWFibGVzLmNzc1wiKSwgXCJcIik7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRleHRhcmVhLXdyYXBfWGtwajEge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50ZXh0YXJlYV8xRWRvUyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXkpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjNzO1xcbn1cXG5cXG4udGV4dGFyZWFfMUVkb1M6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidGV4dGFyZWEtd3JhcFwiOiBcInRleHRhcmVhLXdyYXBfWGtwajFcIixcblx0XCJ0ZXh0YXJlYVwiOiBcInRleHRhcmVhXzFFZG9TXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Bvc3Rjc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLmNzc1xuICoqIG1vZHVsZSBpZCA9IDMwMVxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiaW1wb3J0IGNyZWF0ZUZvcm0gZnJvbSAnLi9jcmVhdGVGb3JtJ1xuXG5leHBvcnQgY29uc3QgZm9ybSA9IGNyZWF0ZUZvcm1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2Zvcm0vaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzJ1xuXG5jb25zdCBmb3JtQWN0aW9ucyA9IGFjdGlvbnMuZm9ybVxuXG5pbnRlcmZhY2UgRm9ybUNvbmZpZyB7XG4gIGZvcm06IHN0cmluZ1xuICBmaWVsZHM6IHN0cmluZ1tdXG4gIHZhbGlkYXRlPzogKHZhbHVlczogYW55KSA9PiBhbnlcbiAgZGVzdHJveU9uVW5tb3VudD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIEZvcm1Qcm9wcyB7XG4gIGNoYW5nZTogYWN0aW9ucy5jaGFuZ2VcbiAgdG91Y2g6IGFjdGlvbnMudG91Y2hcbiAgZGVmaW5lRmllbGQ6IGFjdGlvbnMuZGVmaW5lRmllbGRcbiAgZGVzdHJveTogYWN0aW9ucy5kZXN0cm95XG4gIGZvcm06IGFueVxuICBmb3JtVmFsdWVzOiBhbnlcbiAgZm9ybU1ldGE6IGFueVxuICBmb3JtRGVmaW5pdGlvbjogYW55XG59XG5cbmNsYXNzIEVsZW1lbnRDbGFzcyBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xufVxuXG5pbnRlcmZhY2UgQ2xhc3NEZWNvcmF0b3Ige1xuICA8VCBleHRlbmRzICh0eXBlb2YgRWxlbWVudENsYXNzKT4oY29uZmlnOiBGb3JtQ29uZmlnKTogVFxufVxuXG5jb25zdCB2YWxpZGF0ZUZvcm0gPSAoZmllbGRzLCBmb3JtVmFsdWVzLCB2YWxpZGF0ZUZuKSA9PiB7XG4gIGlmICh2YWxpZGF0ZUZuKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdmFsaWRhdGVGbihmb3JtVmFsdWVzKVxuXG4gICAgaWYgKCFfLmlzRW1wdHkoZXJyb3JzKSkge1xuICAgICAgY29uc3QgZmllbGRzV2l0aEVycm9ycyA9IF8ubWFwVmFsdWVzKGVycm9ycywgdmFsID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcjogdmFsXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZpZWxkczogXy5tZXJnZSh7fSwgZmllbGRzLCBmaWVsZHNXaXRoRXJyb3JzKSxcbiAgICAgICAgaGFzRXJyb3I6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBmaWVsZHMsIGhhc0Vycm9yOiBmYWxzZSB9XG59XG5cbmNvbnN0IGNyZWF0ZUZvcm06IENsYXNzRGVjb3JhdG9yID0gKGNvbmZpZzogRm9ybUNvbmZpZykgPT4ge1xuICBjb25zdCB7IGZpZWxkczogZmllbGRzQXJyLCBmb3JtOiBmb3JtTmFtZSwgdmFsaWRhdGUsIGRlc3Ryb3lPblVubW91bnQgfSA9IGNvbmZpZ1xuXG4gIHJldHVybiBXcmFwcGVkQ29tcG9uZW50ID0+IHtcbiAgICBjbGFzcyBGb3JtIGV4dGVuZHMgQ29tcG9uZW50PEZvcm1Qcm9wcywge30+IHtcblxuICAgICAgY3JlYXRlRmllbGQodmFsdWUsIGtleSkge1xuICAgICAgICBjb25zdCB7IGNoYW5nZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIGNvbnN0IHNldEZpZWxkVmFsdWUgPSB2YWwgPT4ge1xuICAgICAgICAgIGxldCBuZXdWYWwgPSB2YWxcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgdmFsLnRhcmdldCkge1xuICAgICAgICAgICAgbmV3VmFsID0gdmFsLnRhcmdldC52YWx1ZSB8fCAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBjaGFuZ2UoZm9ybU5hbWUsIGtleSwgbmV3VmFsLCBmYWxzZSwgZmFsc2UpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBldmVudHMgPSB7XG4gICAgICAgICAgb25DaGFuZ2U6IHZhbCA9PiBzZXRGaWVsZFZhbHVlKHZhbClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2tleV06IHtcbiAgICAgICAgICAgIGdldDogKGRlZmF1bHRWYWw/KSA9PiB2YWx1ZSB8fCBkZWZhdWx0VmFsIHx8ICcnLFxuICAgICAgICAgICAgc2V0OiBldmVudHMub25DaGFuZ2UsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBldmVudHMub25DaGFuZ2UsXG4gICAgICAgICAgICBldmVudHNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHsgZGVmaW5lRmllbGQgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgZmllbGRzQXJyLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgIGRlZmluZUZpZWxkKGZvcm1OYW1lLCBmaWVsZClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIC8vIFRPRE9cbiAgICAgICAgLy8g55Sf5oiQ54mI5pys55qEIFJlYWN0IOS8muWcqOWIneWni+WMluaXtuaJp+ihjOS4gOasoSB1bm1vdW50IOWwmuacquafpeaYjuWOn+WboFxuICAgICAgICBpZiAoZGVzdHJveU9uVW5tb3VudCkge1xuICAgICAgICAgIHRoaXMucHJvcHMuZGVzdHJveShmb3JtTmFtZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBkZWNvcmF0ZWRGaWVsZHNcbiAgICAgICAgY29uc3QgeyB0b3VjaCwgZm9ybVZhbHVlcywgZm9ybURlZmluaXRpb24sIGZvcm1NZXRhIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgICAgY29uc3QgZmllbGRzT2JqQXJyID0gXy5tYXAoZmllbGRzQXJyLCBrZXkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpZWxkVmFsdWUgPSBmb3JtVmFsdWVzW2tleV0gfHwgJydcbiAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVGaWVsZChmaWVsZFZhbHVlLCBrZXkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZmllbGRzT2JqQXJyLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgIGRlY29yYXRlZEZpZWxkcyA9IF8uYXNzaWduKHt9LCBkZWNvcmF0ZWRGaWVsZHMsIGZpZWxkKVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBjb2xsZWN0ZWRWYWx1ZXMgPSB7fVxuICAgICAgICBmb3JtRGVmaW5pdGlvbi5mb3JFYWNoKGRlZiA9PiB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gZGVmLm5hbWVcbiAgICAgICAgICBjb2xsZWN0ZWRWYWx1ZXNba2V5XSA9IGZvcm1WYWx1ZXNba2V5XVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHsgZmllbGRzOiBmaWVsZHNXaXRoRXJyb3IsIGhhc0Vycm9yIH0gPSB2YWxpZGF0ZUZvcm0oZGVjb3JhdGVkRmllbGRzLCBjb2xsZWN0ZWRWYWx1ZXMsIHZhbGlkYXRlKVxuICAgICAgICBkZWNvcmF0ZWRGaWVsZHMgPSBmaWVsZHNXaXRoRXJyb3JcbiAgICAgICAgZGVjb3JhdGVkRmllbGRzID0gXy5tZXJnZSh7fSwgZGVjb3JhdGVkRmllbGRzLCBmb3JtTWV0YSlcblxuICAgICAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBmbiA9PiB7XG4gICAgICAgICAgcmV0dXJuIGUgPT4ge1xuICAgICAgICAgICAgdG91Y2goZm9ybU5hbWUsIGZvcm1EZWZpbml0aW9uLm1hcChkZWYgPT4gZGVmLm5hbWUpKVxuICAgICAgICAgICAgaWYgKCFoYXNFcnJvcikge1xuICAgICAgICAgICAgICBmbihjb2xsZWN0ZWRWYWx1ZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgXy5hc3NpZ24oe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgICBmaWVsZHM6IGRlY29yYXRlZEZpZWxkcyxcbiAgICAgICAgICBoYW5kbGVTdWJtaXRcbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbm5lY3QoXG4gICAgICBzdGF0ZSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZm9ybTogc2VsZWN0b3JzLmZvcm0uZnVsbEZvcm0oZm9ybU5hbWUpKHN0YXRlKSxcbiAgICAgICAgICBmb3JtVmFsdWVzOiBzZWxlY3RvcnMuZm9ybS5mb3JtVmFsdWVzKGZvcm1OYW1lKShzdGF0ZSksXG4gICAgICAgICAgZm9ybURlZmluaXRpb246IHNlbGVjdG9ycy5mb3JtLmZvcm1EZWZpbml0aW9uKGZvcm1OYW1lKShzdGF0ZSksXG4gICAgICAgICAgZm9ybU1ldGE6IHNlbGVjdG9ycy5mb3JtLmZvcm1NZXRhKGZvcm1OYW1lKShzdGF0ZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZvcm1BY3Rpb25zXG4gICAgKShGb3JtIGFzIGFueSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb3JtXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9mb3JtL2NyZWF0ZUZvcm0udHN4XG4gKiovIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG50eXBlIENvbmZpZyA9IHtcbiAgdmFsaWRhdG9yczoge1xuICAgIFtrZXk6IHN0cmluZ106IFsodmFsdWU6IHN0cmluZykgPT4gYm9vbGVhbiwgc3RyaW5nXVxuICB9W11cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGlvbih2YWx1ZXMsIGNvbmZpZz86IENvbmZpZykge1xuICBjb25zdCBlcnJvcnM6IGFueSA9IHt9XG5cbiAgXy5rZXlzKHZhbHVlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmICghdmFsdWVzW2tleV0pIHtcbiAgICAgIGVycm9yc1trZXldID0gYOS4jeiDveS4uuepuu+8gWBcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGVycm9yc1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZGF0YS92YWxpZGF0aW9uLnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24sIHVzZXJBdXRoIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCBEb2NDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Eb2NDb250YWluZXInXG5pbXBvcnQgU2lnbnVwRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvU2lnbnVwRm9ybSdcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJ1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vaGVscGVycydcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2VuZE5vdGlmaWNhdGlvbj86IGFueVxuICB1c2VyQXV0aD86IGFueVxufVxuXG5jbGFzcyBTaWdudXAgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5oYW5kbGVTaWdudXAgPSB0aGlzLmhhbmRsZVNpZ251cC5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVTaWdudXAoZGF0YSkge1xuICAgIGFwaS51c2VyU2lnbnVwKGRhdGEpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oJ+azqOWGjOaIkOWKn++8gScpXG4gICAgICAgIGFwaS51c2VyTG9naW4oeyBsb2dpbjogZGF0YS51c2VybmFtZSwgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9wcy51c2VyQXV0aCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGhlbHBlcnMucmVkaXJlY3QoJy8nKVxuICAgICAgICAgICAgfSwgNjAwKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9LCBlcnIgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oZXJyLm1lc3NhZ2UsICdlcnJvcicpXG4gICAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RG9jQ29udGFpbmVyIHRpdGxlPVwi5rOo5YaMXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPuWKoOWFpSBSZWFkcjwvaDE+XG4gICAgICAgICAgPFNpZ251cEZvcm1cbiAgICAgICAgICAgIG9uU2F2ZT17dGhpcy5oYW5kbGVTaWdudXB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhpbnRcIj7lt7LmnInotKblj7fvvJ88TGluayB0bz1cIi9zaWduaW5cIj7nmbvlvZU8L0xpbms+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRG9jQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PHt9LCB7fSwgUHJvcHM+KFxuICBzdGF0ZSA9PiAoe1xuICAgIG5vdGlmaWNhdGlvbjogc3RhdGUuY29tcG9uZW50cy5ub3RpZmljYXRpb24sXG4gICAgdXNlcjogc3RhdGUudXNlclxuICB9KSxcbiAgeyBzZW5kTm90aWZpY2F0aW9uLCB1c2VyQXV0aCB9XG4pKFNpZ251cClcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9TaWdudXAvU2lnbnVwLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGZvcm0gfSBmcm9tICcuLi8uLi8uLi9mb3JtJ1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvX2Zvcm0nXG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tICcuLi8uLi8uLi9kYXRhL3ZhbGlkYXRpb24nXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGluaXRpYWxWYWx1ZXM/OiBhbnlcbiAgb25TYXZlOiAoZGF0YTogYW55KSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBBbGxQcm9wcyBleHRlbmRzIFByb3BzIHtcbiAgcm91dGluZzogYW55XG4gIHNlbmROb3RpZmljYXRpb246IGFueVxuICBoYW5kbGVTdWJtaXQ6IGFueVxuICBmaWVsZHM6IGFueVxufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xufVxuXG5AZm9ybSh7XG4gIGZvcm06ICdzaWdudXAnLFxuICBmaWVsZHM6IFsndXNlcm5hbWUnLCAnZW1haWwnLCAncGFzc3dvcmQnXSxcbiAgdmFsaWRhdGU6IHZhbHVlcyA9PiB7XG4gICAgcmV0dXJuIHZhbGlkYXRpb24odmFsdWVzKVxuICB9XG59KVxuY2xhc3MgU2lnbnVwRm9ybSBleHRlbmRzIENvbXBvbmVudDxBbGxQcm9wcywgU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZpZWxkczogeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0sXG4gICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICBvblNhdmVcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIueUqOaIt+WQjVwiIHsuLi51c2VybmFtZX0gLz5cbiAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwi6YKu566xXCIgey4uLmVtYWlsfSAvPlxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCLlr4bnoIFcIiB0eXBlPVwicGFzc3dvcmRcIiB7Li4ucGFzc3dvcmR9IC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdChkYXRhID0+IHtcbiAgICAgICAgICAgIG9uU2F2ZShkYXRhKVxuICAgICAgICAgIH0pfT7ms6jlhow8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PHt9LCB7fSwgUHJvcHM+KFxuICAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluaXRpYWxWYWx1ZXM6IG93blByb3BzLmluaXRpYWxWYWx1ZXMsXG4gICAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnNcbiAgICB9XG4gIH0sXG4gIHsgc2VuZE5vdGlmaWNhdGlvbiB9XG4pKFNpZ251cEZvcm0pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvU2lnbnVwL2NvbXBvbmVudHMvU2lnbnVwRm9ybS50c3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9