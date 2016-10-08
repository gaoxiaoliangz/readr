exports.ids = [15];
exports.modules = {

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Textarea = exports.SelectizeInput = exports.Input = exports.Button = undefined;
	
	var _Button = __webpack_require__(413);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Input = __webpack_require__(505);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _SelectizeInput = __webpack_require__(509);
	
	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);
	
	var _Textarea = __webpack_require__(513);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Button = _Button2.default;
	exports.Input = _Input2.default;
	exports.SelectizeInput = _SelectizeInput2.default;
	exports.Textarea = _Textarea2.default;

/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Input = __webpack_require__(506);
	
	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Input2.default;

/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(107);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(327);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _classnames = __webpack_require__(325);
	
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
	
	var styles = __webpack_require__(507);
	var Input = function (_Component) {
	    _inherits(Input, _Component);
	
	    function Input(props) {
	        _classCallCheck(this, Input);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, props));
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

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(508);
	    var insertCss = __webpack_require__(331);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(330)();
	// imports
	
	
	// module
	exports.push([module.id, ".input-wrap_13Bbk, .input-wrap--error_2SJA1 {\n  margin: 10px 0;\n  position: relative; }\n\n.input_75rlN {\n  width: 100%;\n  padding: 5px 5px;\n  border: 1px solid #ddd;\n  transition: border-color .3s;\n  line-height: 25px;\n  outline: none; }\n\n.input_75rlN:focus {\n  border-color: #1B267F; }\n\n.input-wrap--error_2SJA1 .input_75rlN {\n  border-color: #f2165e; }\n\n.error-msg_3Efzi {\n  position: absolute;\n  right: 10px;\n  top: 6px;\n  line-height: 25px;\n  color: #f2165e; }\n", ""]);
	
	// exports
	exports.locals = {
		"input-wrap": "input-wrap_13Bbk",
		"input-wrap--error": "input-wrap--error_2SJA1",
		"input": "input_75rlN",
		"error-msg": "error-msg_3Efzi"
	};

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _SelectizeInput = __webpack_require__(510);
	
	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SelectizeInput2.default;

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(107);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Icon = __webpack_require__(323);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _classnames = __webpack_require__(325);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(327);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _isDescendant = __webpack_require__(290);
	
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
	
	var styles = __webpack_require__(511);
	var SelectizeInput = function (_Component) {
	    _inherits(SelectizeInput, _Component);
	
	    function SelectizeInput(props) {
	        _classCallCheck(this, SelectizeInput);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SelectizeInput).call(this, props));
	
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
	            this.props.onValuesChange(this.props.values.concat(newValue));
	            if (this.props.onOptionsChange) {
	                this.props.onOptionsChange(this.props.options.map(function (option) {
	                    return option.value === newValue.value ? Object.assign({}, option, { disabled: true }) : option;
	                }));
	            }
	            this.clearInputValue();
	            if (typeof this.props.stayFocused === 'undefined' || this.props.stayFocused !== false) {
	                this.focusInput();
	            }
	            this.hideOptions();
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
	            var _this2 = this;
	
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
	                    _this2.inputWrap = _ref;
	                } }, values.map(function (v, index) {
	                return _react2.default.createElement("span", { key: index, styleName: "selectize-tag" }, v.name, _react2.default.createElement(_Icon2.default, { styleName: "icon-remove", size: 20, name: "close", onClick: function onClick(e) {
	                        _this2.removeValue(index);
	                    } }));
	            }), _react2.default.createElement("input", { style: { width: inputWidth }, ref: function ref(_ref2) {
	                    _this2.input = _ref2;
	                }, value: value, placeholder: placeholder, onBlur: function onBlur(e) {
	                    _this2.setState({ focus: false });
	                }, onFocus: function onFocus(e) {
	                    _this2.setState({ focus: true });
	                }, onChange: this.handleInputChange, onKeyDown: function onKeyDown(e) {
	                    _this2.handleKeyPress(e);
	                } })), this.state.showOptions && (filteredOptions.length !== 0 || onAddNewValue) ? _react2.default.createElement("ul", { styleName: "query-results" }, filteredOptions.map(function (option, index) {
	                if (option.disabled) {
	                    return _react2.default.createElement("li", { key: index, className: "disabled" }, option.name);
	                }
	                return _react2.default.createElement("li", { key: index, onClick: function onClick(e) {
	                        _this2.addValue(option);
	                        if (_this2.props.onOptionClick) {
	                            _this2.props.onOptionClick(option);
	                        }
	                    } }, _react2.default.createElement("span", null, option.name));
	            }), onAddNewValue ? _react2.default.createElement("li", { onClick: function onClick(e) {
	                    onAddNewValue(_this2.props.value);
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

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(512);
	    var insertCss = __webpack_require__(331);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(330)();
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

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Textarea = __webpack_require__(514);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Textarea2.default;

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(107);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(327);
	
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
	
	var styles = __webpack_require__(515);
	var Textarea = function (_Component) {
	    _inherits(Textarea, _Component);
	
	    function Textarea(props) {
	        _classCallCheck(this, Textarea);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Textarea).call(this, props));
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

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(516);
	    var insertCss = __webpack_require__(331);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(330)();
	// imports
	exports.i(__webpack_require__(442), "");
	
	// module
	exports.push([module.id, ".textarea-wrap_Xkpj1 {\n  margin: 10px 0;\n  position: relative;\n}\n\n.textarea_1EdoS {\n  width: 100%;\n  padding: 5px;\n  border: 1px solid var(--gray);\n  outline: none;\n  height: 100px;\n  transition: border-color .3s;\n}\n\n.textarea_1EdoS:focus {\n  border-color: var(--blue);\n}\n", ""]);
	
	// exports
	exports.locals = {
		"textarea-wrap": "textarea-wrap_Xkpj1",
		"textarea": "textarea_1EdoS"
	};

/***/ },

/***/ 592:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(107);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(276);
	
	var _actions = __webpack_require__(282);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _AddCollectionForm = __webpack_require__(593);
	
	var _AddCollectionForm2 = _interopRequireDefault(_AddCollectionForm);
	
	var _api = __webpack_require__(443);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _DocContainer = __webpack_require__(273);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AddCollection = function (_Component) {
	    _inherits(AddCollection, _Component);
	
	    function AddCollection(props) {
	        _classCallCheck(this, AddCollection);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddCollection).call(this, props));
	
	        _this.handleSave = _this.handleSave.bind(_this);
	        _this.handleBooksValueChange = _this.handleBooksValueChange.bind(_this);
	        return _this;
	    }
	
	    _createClass(AddCollection, [{
	        key: 'handleSave',
	        value: function handleSave(data) {
	            var _this2 = this;
	
	            var creator = this.props.session.user.id;
	            var postData = Object.assign({}, data, {
	                creator: creator
	            });
	            _api2.default.addCollection(postData).then(function (result) {
	                _this2.props.sendNotification('添加成功！');
	                _this2.props.reset('addCollection');
	            }, function (error) {
	                _this2.props.sendNotification(error.message);
	            });
	        }
	    }, {
	        key: 'handleBooksValueChange',
	        value: function handleBooksValueChange(newVal) {
	            if (!_lodash2.default.isEmpty(newVal)) {
	                this.props.loadBooks({
	                    q: newVal
	                });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_DocContainer2.default, { title: "添加合集" }, _react2.default.createElement("h1", { className: "page-title" }, "添加合集"), _react2.default.createElement(_AddCollectionForm2.default, { onSave: this.handleSave, onBooksValueChange: this.handleBooksValueChange }));
	        }
	    }]);
	
	    return AddCollection;
	}(_react.Component);
	
	function mapStateToProps(state) {
	    return {
	        notification: state.components.notification,
	        elements: state.elements,
	        session: state.session
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, reset: _actions.reset, loadBooks: _actions.loadBooks })(AddCollection);

/***/ },

/***/ 593:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(107);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(276);
	
	var _reduxForm = __webpack_require__(281);
	
	var _actions = __webpack_require__(282);
	
	var _Input = __webpack_require__(505);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _SelectizeInput = __webpack_require__(509);
	
	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);
	
	var _form = __webpack_require__(504);
	
	var _selectors = __webpack_require__(446);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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
	
	var AddCollectionForm = function (_Component) {
	    _inherits(AddCollectionForm, _Component);
	
	    function AddCollectionForm(props) {
	        _classCallCheck(this, AddCollectionForm);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(AddCollectionForm).call(this, props));
	    }
	
	    _createClass(AddCollectionForm, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var _props$fields = _props.fields;
	            var name = _props$fields.name;
	            var _booksValue = _props$fields._booksValue;
	            var _booksValues = _props$fields._booksValues;
	            var _booksOptions = _props$fields._booksOptions;
	            var description = _props$fields.description;
	            var handleSubmit = _props.handleSubmit;
	            var onSave = _props.onSave;
	            var onBooksValueChange = _props.onBooksValueChange;
	            var booksSearchAsOptions = _props.booksSearchAsOptions;
	
	            return _react2.default.createElement("div", null, _react2.default.createElement(_Input2.default, __assign({ placeholder: "合集名称" }, name)), _react2.default.createElement(_SelectizeInput2.default, { placeholder: "选择书籍", onInputChange: function onInputChange(newValue) {
	                    if (onBooksValueChange) {
	                        onBooksValueChange(newValue);
	                    }
	                    _booksValue.onChange(newValue);
	                }, value: _booksValue.value, onValuesChange: _booksValues.onChange, options: booksSearchAsOptions, values: _booksValues.value || [] }), _react2.default.createElement(_form.Textarea, __assign({}, description, { placeholder: "描述" })), _react2.default.createElement(_form.Button, { onClick: handleSubmit(function (data) {
	                    var postData = _lodash2.default.pick(data, ['name', 'description']);
	                    postData = Object.assign({}, postData, {
	                        items: _booksValues.value ? _booksValues.value.map(function (item) {
	                            return item.value;
	                        }) : []
	                    });
	                    onSave(postData);
	                }) }, "添加"));
	        }
	    }]);
	
	    return AddCollectionForm;
	}(_react.Component);
	AddCollectionForm = __decorate([(0, _reduxForm.reduxForm)({
	    form: 'addCollection',
	    fields: ['name', '_booksValue', '_booksValues', '_booksOptions', 'description']
	})], AddCollectionForm);
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    return {
	        initialValues: ownProps.initialData,
	        routing: state.routing.locationBeforeTransitions,
	        booksSearchAsOptions: selectors.booksAsOptions('search')(state)
	    };
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification })(AddCollectionForm);

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vaW5kZXgudHM/NTBkNyoqKioqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9pbmRleC50cz8yMWQzKioqKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L0lucHV0LnRzeD9kYTFkKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuc2Nzcz80MDE3KioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L0lucHV0LnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L2luZGV4LnRzPzdlODAqKioqKioqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQudHN4PzRlNzMqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC5zY3NzP2NlYTQqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvaW5kZXgudHM/YjgxMioqKioqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS50c3g/YzJhZioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLmNzcz9hYTIxKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FkZENvbGxlY3Rpb24vQWRkQ29sbGVjdGlvbi50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9BZGRDb2xsZWN0aW9uL2NvbXBvbmVudHMvQWRkQ29sbGVjdGlvbkZvcm0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNkI7Ozs7QUFDRjs7OztBQUNrQjs7OztBQUc3Qzs7Ozs7O1NBQWU7U0FBTztTQUFnQjtTQUFZLDhCOzs7Ozs7Ozs7Ozs7O0FDSjlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RvQjs7OztBQUNFOzs7O0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNuQyxLQUFZLFNBQVUsb0JBQWdCO0FBZ0J0Qzs7O0FBQ0Usb0JBQWlCLE9BQ2Y7Ozt5RkFHSTs7Ozs7Ozs7QUFDSixpQkFBUyxRQUFTLE9BQU8sT0FBRyxJQUFNLEtBQU87QUFDekMsb0JBQVksTUFDTjswQkFBeUIsS0FBTTtpQkFBeEI7aUJBQVc7O0FBRXhCLGlCQUFlLFlBQVEsU0FBVztBQUUzQixvQkFDTCw4QkFBSSxTQUFVLFdBQVksMEJBQUMsRUFBYSxjQUFFLENBQVUsV0FBcUIscUJBQWMsY0FBVSxXQUFNLEtBQU0sTUFBVSxhQUFPLG9DQUN0SCxXQUNLLFdBQVEsU0FDTixhQUFNLEtBQU0sTUFBYSxhQUMvQixPQUFNLEtBQU0sTUFBTyxPQUNoQjtBQUNGLDRCQUFNLE1BQVMsU0FDbkI7a0JBRlMsRUFHUCxNQUFNLEtBQU0sTUFBSyxPQUFPLEtBQU0sTUFBSyxPQUFVLFFBQzdDLE1BQU0sS0FBTSxNQUFLLE9BQU8sS0FBTSxNQUFLLE9BQ3ZDLE1BVEYsR0FXZSxhQUNYLDhCQUFJLFNBQVUsV0FBWSxl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b250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcbmltcG9ydCBTZWxlY3RpemVJbnB1dCBmcm9tICcuL1NlbGVjdGl6ZUlucHV0J1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vVGV4dGFyZWEnXG5cbmV4cG9ydCB7IEJ1dHRvbiwgSW5wdXQsIFNlbGVjdGl6ZUlucHV0LCBUZXh0YXJlYSB9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9pbmRleC50c1xuICoqLyIsImltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuZXhwb3J0IGRlZmF1bHQgSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9JbnB1dC5zY3NzJylcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICBvbkNoYW5nZT86IGFueVxuICB2YWx1ZT86IHN0cmluZ1xuICB0eXBlPzogc3RyaW5nXG4gIG5hbWU/OiBzdHJpbmdcbiAgZXJyb3I/OiBhbnlcbiAgdG91Y2hlZD86IGJvb2xlYW5cbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBJbnB1dCBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcylcbiAgICBkZWxldGUgcHJvcHMuY2xhc3NOYW1lXG4gICAgY29uc3QgeyBlcnJvciwgdG91Y2hlZCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gZXJyb3IgJiYgdG91Y2hlZFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPXtjbGFzc25hbWVzKHsnaW5wdXQtd3JhcCc6ICFzaG93RXJyb3IsICdpbnB1dC13cmFwLS1lcnJvcic6IHNob3dFcnJvcn0pfSBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgc3R5bGVOYW1lPVwiaW5wdXRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIHR5cGU9e3RoaXMucHJvcHMudHlwZSA/IHRoaXMucHJvcHMudHlwZSA6ICd0ZXh0J31cbiAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLm5hbWUgPyB0aGlzLnByb3BzLm5hbWUgOiBudWxsfVxuICAgICAgICAvPlxuICAgICAgICB7XG4gICAgICAgICAgc2hvd0Vycm9yICYmIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiZXJyb3ItbXNnXCI+e2Vycm9yfTwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9JbnB1dC50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0lucHV0LnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9JbnB1dC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNTA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbnB1dC13cmFwXzEzQmJrLCAuaW5wdXQtd3JhcC0tZXJyb3JfMlNKQTEge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uaW5wdXRfNzVybE4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA1cHggNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuM3M7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIG91dGxpbmU6IG5vbmU7IH1cXG5cXG4uaW5wdXRfNzVybE46Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjMUIyNjdGOyB9XFxuXFxuLmlucHV0LXdyYXAtLWVycm9yXzJTSkExIC5pbnB1dF83NXJsTiB7XFxuICBib3JkZXItY29sb3I6ICNmMjE2NWU7IH1cXG5cXG4uZXJyb3ItbXNnXzNFZnppIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgdG9wOiA2cHg7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIGNvbG9yOiAjZjIxNjVlOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaW5wdXQtd3JhcFwiOiBcImlucHV0LXdyYXBfMTNCYmtcIixcblx0XCJpbnB1dC13cmFwLS1lcnJvclwiOiBcImlucHV0LXdyYXAtLWVycm9yXzJTSkExXCIsXG5cdFwiaW5wdXRcIjogXCJpbnB1dF83NXJsTlwiLFxuXHRcImVycm9yLW1zZ1wiOiBcImVycm9yLW1zZ18zRWZ6aVwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9JbnB1dC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNTA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJpbXBvcnQgU2VsZWN0aXplSW5wdXQgZnJvbSAnLi9TZWxlY3RpemVJbnB1dCdcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGl6ZUlucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uL0ljb24nXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgaXNEZXNjZW5kYW50IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RvbS9pc0Rlc2NlbmRhbnQnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1NlbGVjdGl6ZUlucHV0LnNjc3MnKVxuXG50eXBlIFR5cGVPcHRpb24gPSB7XG4gIHZhbHVlOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICBhZGRpdGlvbmFsPzogYW55XG59XG5cbnR5cGUgVHlwZVZhbHVlID0ge1xuICB2YWx1ZTogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nXG4gIGxhYmVsPzogc3RyaW5nXG4gIHN0YXlGb2N1c2VkPzogYm9vbGVhbiAvLyBkZWZhdWx0IHRydWVcbiAgb21pdFNlbGVjdGVkVmFsdWVzRnJvbU9wdGlvbnM/OiBib29sZWFuXG5cbiAgdmFsdWU6IHN0cmluZ1xuICBvbklucHV0Q2hhbmdlOiAobmV3VmFsdWU6IHN0cmluZykgPT4gdm9pZFxuXG4gIG9wdGlvbnM6IEFycmF5PFR5cGVPcHRpb24+XG4gIG9uT3B0aW9uc0NoYW5nZT86IChuZXdWYWx1ZXM6IEFycmF5PFR5cGVPcHRpb24+KSA9PiB2b2lkXG5cbiAgdmFsdWVzOiBBcnJheTxUeXBlVmFsdWU+XG4gIG9uVmFsdWVzQ2hhbmdlOiAobmV3VmFsdWVzOiBBcnJheTxUeXBlVmFsdWU+KSA9PiB2b2lkXG5cbiAgLy8g6aKd5aSW5Yqf6IO9XG4gIG9uQWRkTmV3VmFsdWU/OiAobmV3VmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICBvbk9wdGlvbkNsaWNrPzogKHNlbGVjdGVkVmFsdWU6IFR5cGVPcHRpb24pID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIGZvY3VzPzogYm9vbGVhblxuICBzaG93T3B0aW9ucz86IGJvb2xlYW5cbiAgdmFsdWU/OiBzdHJpbmdcbiAgZXhwZW5kZWRPcHRpb25JbmRleD86IG51bWJlclxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIFNlbGVjdGl6ZUlucHV0IGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnRcbiAgaW5wdXRXcmFwOiBIVE1MRGl2RWxlbWVudFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dPcHRpb25zOiBmYWxzZSxcbiAgICAgIGZvY3VzOiBmYWxzZSxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIGV4cGVuZGVkT3B0aW9uSW5kZXg6IDBcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2sgPSB0aGlzLmhhbmRsZU91dHNpZGVDbGljay5iaW5kKHRoaXMpXG4gICAgdGhpcy5mb2N1c0lucHV0ID0gdGhpcy5mb2N1c0lucHV0LmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBhZGRWYWx1ZShuZXdWYWx1ZSkge1xuICAgIHRoaXMucHJvcHMub25WYWx1ZXNDaGFuZ2UodGhpcy5wcm9wcy52YWx1ZXMuY29uY2F0KG5ld1ZhbHVlKSlcbiAgICBpZiAodGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKHRoaXMucHJvcHMub3B0aW9ucy5tYXAob3B0aW9uID0+IChvcHRpb24udmFsdWUgPT09IG5ld1ZhbHVlLnZhbHVlXG4gICAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9uLCB7IGRpc2FibGVkOiB0cnVlIH0pXG4gICAgICAgIDogb3B0aW9uKSkpXG4gICAgfVxuICAgIHRoaXMuY2xlYXJJbnB1dFZhbHVlKClcbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuc3RheUZvY3VzZWQgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMucHJvcHMuc3RheUZvY3VzZWQgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmZvY3VzSW5wdXQoKVxuICAgIH1cbiAgICB0aGlzLmhpZGVPcHRpb25zKClcbiAgfVxuXG4gIHNob3dPcHRpb25zKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd09wdGlvbnM6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgaGlkZU9wdGlvbnMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3B0aW9uczogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlVmFsdWUoaW5kZXgpIHtcbiAgICBsZXQgbmV3VmFsdWVzID0gW11cbiAgICBsZXQgcmVtb3ZlZFZhbHVlXG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICBuZXdWYWx1ZXMgPSB0aGlzLnByb3BzLnZhbHVlcy5zbGljZSgwLCB0aGlzLnByb3BzLnZhbHVlcy5sZW5ndGggLSAxKVxuICAgICAgcmVtb3ZlZFZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZXNbdGhpcy5wcm9wcy52YWx1ZXMubGVuZ3RoIC0gMV0udmFsdWVcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3VmFsdWVzID0gdGhpcy5wcm9wcy52YWx1ZXNcbiAgICAgICAgLmZpbHRlcigodiwgaSkgPT4ge1xuICAgICAgICAgIHJlbW92ZWRWYWx1ZSA9IHYudmFsdWVcbiAgICAgICAgICByZXR1cm4gaSAhPT0gaW5kZXhcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKHRoaXMucHJvcHMub3B0aW9ucy5tYXAob3B0aW9uID0+IChvcHRpb24udmFsdWUgPT09IHJlbW92ZWRWYWx1ZVxuICAgICAgICA/IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbiwgeyBkaXNhYmxlZDogZmFsc2UgfSlcbiAgICAgICAgOiBvcHRpb24pKSlcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uVmFsdWVzQ2hhbmdlKG5ld1ZhbHVlcylcbiAgfVxuXG4gIGNsZWFySW5wdXRWYWx1ZSgpIHtcbiAgICB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UoJycpXG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gOCAmJiAhdGhpcy5wcm9wcy52YWx1ZSAmJiB0aGlzLnByb3BzLnZhbHVlcy5sZW5ndGggIT09IDApIHtcbiAgICAgIHRoaXMucmVtb3ZlVmFsdWUoLTEpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZSkge1xuICAgIHRoaXMucHJvcHMub25JbnB1dENoYW5nZShlLnRhcmdldC52YWx1ZSlcbiAgICBpZiAoKHRoaXMucHJvcHMub3B0aW9ucyB8fCBbXSkubGVuZ3RoICE9PSAwKSB7XG4gICAgICB0aGlzLnNob3dPcHRpb25zKClcbiAgICB9XG4gIH1cblxuICBmb2N1c0lucHV0KCkge1xuICAgIHRoaXMuaW5wdXQuZm9jdXMoKVxuICB9XG5cbiAgaGFuZGxlT3V0c2lkZUNsaWNrKGUpIHtcbiAgICBpZiAoaXNEZXNjZW5kYW50KHRoaXMuaW5wdXRXcmFwLCBlLnRhcmdldCkgfHwgdGhpcy5pbnB1dFdyYXAgPT09IGUudGFyZ2V0KSB7XG4gICAgICB0aGlzLmZvY3VzSW5wdXQoKVxuICAgICAgdGhpcy5zaG93T3B0aW9ucygpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZU9wdGlvbnMoKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc3Qgb3B0aW9uc0xvYWRlZCA9IChuZXh0UHJvcHMub3B0aW9ucyB8fCBbXSkubGVuZ3RoICE9PSAwICYmICh0aGlzLnByb3BzLm9wdGlvbnMgfHwgW10pLmxlbmd0aCA9PT0gMFxuICAgIGlmIChvcHRpb25zTG9hZGVkICYmIHRoaXMuc3RhdGUuZm9jdXMpIHtcbiAgICAgIHRoaXMuc2hvd09wdGlvbnMoKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2spXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYWJlbCwgdmFsdWVzLCBvbkFkZE5ld1ZhbHVlLCBvbWl0U2VsZWN0ZWRWYWx1ZXNGcm9tT3B0aW9ucyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZSB8fCAnJ1xuICAgIGxldCBvcHRpb25zID0gdGhpcy5wcm9wcy5vcHRpb25zIHx8IFtdXG5cbiAgICBsZXQgaW5wdXRXaWR0aCA9IHZhbHVlcy5sZW5ndGggPiAwID8gKHZhbHVlLmxlbmd0aCA9PT0gMCA/IDE2IDogdmFsdWUubGVuZ3RoICogMTYpIDogJzEwMCUnXG4gICAgbGV0IHBsYWNlaG9sZGVyID0gdmFsdWVzLmxlbmd0aCA+IDAgPyAnJyA6IHRoaXMucHJvcHMucGxhY2Vob2xkZXJcblxuICAgIGxldCBmaWx0ZXJlZE9wdGlvbnMgPSBvcHRpb25zXG4gICAgICAuZmlsdGVyKG9wdGlvbiA9PiB7XG4gICAgICAgIGlmIChvbWl0U2VsZWN0ZWRWYWx1ZXNGcm9tT3B0aW9ucykge1xuICAgICAgICAgIGNvbnN0IHZhbHVlT2ZWYWx1ZXMgPSBfLm1hcCh2YWx1ZXMsICd2YWx1ZScpXG4gICAgICAgICAgcmV0dXJuIHZhbHVlT2ZWYWx1ZXMuaW5kZXhPZihvcHRpb24udmFsdWUpID09PSAtMVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pXG5cbiAgICBjb25zdCBzZWxlY3RpemVJbnB1dFN0eWxlTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgJ3NlbGVjdGl6ZS1pbnB1dCc6IHRydWUsXG4gICAgICAnc2VsZWN0aXplLWlucHV0LS1mb2N1cyc6IHRoaXMuc3RhdGUuZm9jdXMsXG4gICAgICAnc2VsZWN0aXplLWlucHV0LS1lbXB0eSc6IHZhbHVlcy5sZW5ndGggPT09IDBcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwic2VsZWN0aXplLXdyYXBcIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnfT5cbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsID8gKFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj57bGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICApIDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZU5hbWU9e3NlbGVjdGl6ZUlucHV0U3R5bGVOYW1lfVxuICAgICAgICAgIHJlZj17cmVmID0+IHsgdGhpcy5pbnB1dFdyYXAgPSByZWYgfSB9XG4gICAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlcy5tYXAoKHYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gc3R5bGVOYW1lPVwic2VsZWN0aXplLXRhZ1wiPlxuICAgICAgICAgICAgICAgICAge3YubmFtZX1cbiAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlTmFtZT1cImljb24tcmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjB9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWUoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogaW5wdXRXaWR0aCB9fVxuICAgICAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmlucHV0ID0gcmVmIH0gfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgb25CbHVyPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiBmYWxzZSB9KVxuICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICBvbkZvY3VzPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiB0cnVlIH0pXG4gICAgICAgICAgICB9IH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgb25LZXlEb3duPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVLZXlQcmVzcyhlKVxuICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd09wdGlvbnMgJiYgKGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggIT09IDAgfHwgb25BZGROZXdWYWx1ZSkgPyAoXG4gICAgICAgICAgICA8dWwgc3R5bGVOYW1lPVwicXVlcnktcmVzdWx0c1wiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRPcHRpb25zXG4gICAgICAgICAgICAgICAgICAubWFwKChvcHRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImRpc2FibGVkXCI+e29wdGlvbi5uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRWYWx1ZShvcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uT3B0aW9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uT3B0aW9uQ2xpY2sob3B0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntvcHRpb24ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb25BZGROZXdWYWx1ZSA/IChcbiAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBvbkFkZE5ld1ZhbHVlKHRoaXMucHJvcHMudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGRcIj7mt7vliqAgPHN0cm9uZz57dGhpcy5wcm9wcy52YWx1ZX08L3N0cm9uZz48L2xpPlxuICAgICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblNlbGVjdGl6ZUlucHV0WydkZWZhdWx0UHJvcHMnXSA9IHtcbiAgb21pdFNlbGVjdGVkVmFsdWVzRnJvbU9wdGlvbnM6IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0aXplSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vU2VsZWN0aXplSW5wdXQuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA1MTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlbGVjdGl6ZS13cmFwXzNBTUFpIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnNlbGVjdGl6ZS1pbnB1dF8xNGJnUCB7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHRyYW5zaXRpb246IGFsbCAwcztcXG4gIGN1cnNvcjogdGV4dDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cXG4gIC5zZWxlY3RpemUtaW5wdXRfMTRiZ1AgaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7IH1cXG5cXG4uc2VsZWN0aXplLWlucHV0LS1mb2N1c19Vblo4QiB7XFxuICBib3JkZXItY29sb3I6ICMxQjI2N0Y7IH1cXG5cXG4uc2VsZWN0aXplLWlucHV0LS1lbXB0eV94bjdVeSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogNXB4IDVweCAwOyB9XFxuXFxuLnNlbGVjdGl6ZS1pbnB1dF8xNGJnUCBpbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XFxuXFxuLnF1ZXJ5LXJlc3VsdHNfT2dFMnQge1xcbiAgbWFyZ2luLXRvcDogLTNweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMyKTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB6LWluZGV4OiA5MDA7IH1cXG5cXG4ucXVlcnktcmVzdWx0c19PZ0UydCBsaSB7XFxuICBwYWRkaW5nOiAwIDdweDtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4OyB9XFxuICAucXVlcnktcmVzdWx0c19PZ0UydCBsaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMxQjI2N0Y7XFxuICAgIGNvbG9yOiAjZmZmOyB9XFxuXFxuLnNlbGVjdGl6ZS10YWdfM2FEMTMge1xcbiAgYmFja2dyb3VuZDogIzFCMjY3RjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDNweCAyNXB4IDNweCA1cHg7XFxuICBtYXJnaW46IDVweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmljb24tcmVtb3ZlXzFPN0ZfIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1cHg7XFxuICB0b3A6IDJweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInNlbGVjdGl6ZS13cmFwXCI6IFwic2VsZWN0aXplLXdyYXBfM0FNQWlcIixcblx0XCJzZWxlY3RpemUtaW5wdXRcIjogXCJzZWxlY3RpemUtaW5wdXRfMTRiZ1BcIixcblx0XCJzZWxlY3RpemUtaW5wdXQtLWZvY3VzXCI6IFwic2VsZWN0aXplLWlucHV0LS1mb2N1c19Vblo4QlwiLFxuXHRcInNlbGVjdGl6ZS1pbnB1dC0tZW1wdHlcIjogXCJzZWxlY3RpemUtaW5wdXQtLWVtcHR5X3huN1V5XCIsXG5cdFwicXVlcnktcmVzdWx0c1wiOiBcInF1ZXJ5LXJlc3VsdHNfT2dFMnRcIixcblx0XCJzZWxlY3RpemUtdGFnXCI6IFwic2VsZWN0aXplLXRhZ18zYUQxM1wiLFxuXHRcImljb24tcmVtb3ZlXCI6IFwiaWNvbi1yZW1vdmVfMU83Rl9cIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDUxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vVGV4dGFyZWEnXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm9wcyBhcyBJbnB1dFByb3BzIH0gZnJvbSAnLi4vSW5wdXQvSW5wdXQnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vVGV4dGFyZWEuY3NzJylcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyBleHRlbmRzIElucHV0UHJvcHMge1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIFRleHRhcmVhIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9XCJ0ZXh0YXJlYS13cmFwXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJ30+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIHN0eWxlTmFtZT1cInRleHRhcmVhXCJcbiAgICAgICAgICB0eXBlPXt0aGlzLnByb3BzLnR5cGUgPyB0aGlzLnByb3BzLnR5cGUgOiAndGV4dCd9XG4gICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lID8gdGhpcy5wcm9wcy5uYW1lIDogbnVsbH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9UZXh0YXJlYS5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1MTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSFzdHlsZXMvdmFyaWFibGVzLmNzc1wiKSwgXCJcIik7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRleHRhcmVhLXdyYXBfWGtwajEge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50ZXh0YXJlYV8xRWRvUyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXkpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjNzO1xcbn1cXG5cXG4udGV4dGFyZWFfMUVkb1M6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidGV4dGFyZWEtd3JhcFwiOiBcInRleHRhcmVhLXdyYXBfWGtwajFcIixcblx0XCJ0ZXh0YXJlYVwiOiBcInRleHRhcmVhXzFFZG9TXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Bvc3Rjc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLmNzc1xuICoqIG1vZHVsZSBpZCA9IDUxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24sIHJlc2V0LCBsb2FkQm9va3MgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IEFkZENvbGxlY3Rpb25Gb3JtIGZyb20gJy4vY29tcG9uZW50cy9BZGRDb2xsZWN0aW9uRm9ybSdcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJ1xuaW1wb3J0IERvY0NvbnRhaW5lciBmcm9tICcuLi8uLi9jb250YWluZXJzL0RvY0NvbnRhaW5lcidcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2Vzc2lvbjogYW55XG4gIHNlbmROb3RpZmljYXRpb24/OiBhbnlcbiAgbm90aWZpY2F0aW9uPzogYW55XG4gIHJlc2V0OiBhbnlcbiAgbG9hZEJvb2tzPzogbG9hZEJvb2tzXG59XG5cbmNsYXNzIEFkZENvbGxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmhhbmRsZVNhdmUgPSB0aGlzLmhhbmRsZVNhdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlQm9va3NWYWx1ZUNoYW5nZSA9IHRoaXMuaGFuZGxlQm9va3NWYWx1ZUNoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVTYXZlKGRhdGEpIHtcbiAgICBjb25zdCBjcmVhdG9yID0gdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIuaWRcbiAgICBjb25zdCBwb3N0RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIGNyZWF0b3JcbiAgICB9KVxuXG4gICAgYXBpLmFkZENvbGxlY3Rpb24ocG9zdERhdGEpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5re75Yqg5oiQ5Yqf77yBJylcbiAgICAgIHRoaXMucHJvcHMucmVzZXQoJ2FkZENvbGxlY3Rpb24nKVxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbihlcnJvci5tZXNzYWdlKVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVCb29rc1ZhbHVlQ2hhbmdlKG5ld1ZhbCkge1xuICAgIGlmICghXy5pc0VtcHR5KG5ld1ZhbCkpIHtcbiAgICAgIHRoaXMucHJvcHMubG9hZEJvb2tzKHtcbiAgICAgICAgcTogbmV3VmFsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERvY0NvbnRhaW5lciB0aXRsZT1cIua3u+WKoOWQiOmbhlwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPua3u+WKoOWQiOmbhjwvaDE+XG4gICAgICAgIDxBZGRDb2xsZWN0aW9uRm9ybVxuICAgICAgICAgIG9uU2F2ZT17dGhpcy5oYW5kbGVTYXZlfVxuICAgICAgICAgIG9uQm9va3NWYWx1ZUNoYW5nZT17dGhpcy5oYW5kbGVCb29rc1ZhbHVlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICA8L0RvY0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgbm90aWZpY2F0aW9uOiBzdGF0ZS5jb21wb25lbnRzLm5vdGlmaWNhdGlvbixcbiAgICBlbGVtZW50czogc3RhdGUuZWxlbWVudHMsXG4gICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgeyBzZW5kTm90aWZpY2F0aW9uLCByZXNldCwgbG9hZEJvb2tzIH1cbikoQWRkQ29sbGVjdGlvbiBhcyBhbnkpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQ29sbGVjdGlvbi9BZGRDb2xsZWN0aW9uLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nXG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCBJbnB1dCBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9fZm9ybS9JbnB1dCdcbmltcG9ydCBTZWxlY3RpemVJbnB1dCBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dCdcbmltcG9ydCB7VGV4dGFyZWEsIEJ1dHRvbn0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvX2Zvcm0nXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2VsZWN0b3JzJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpbml0aWFsRGF0YT86IGFueVxuICBvblNhdmU6IChkYXRhOiBhbnkpID0+IHZvaWRcbiAgb25Cb29rc1ZhbHVlQ2hhbmdlPzogKHZhbDogc3RyaW5nKSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBBbGxQcm9wcyBleHRlbmRzIFByb3BzIHtcbiAgcm91dGluZzogYW55XG4gIHNlbmROb3RpZmljYXRpb246IGFueVxuICBoYW5kbGVTdWJtaXQ6IGFueVxuICBmaWVsZHM6IGFueVxuICBib29rc1NlYXJjaEFzT3B0aW9uczogYW55XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG59XG5cbkByZWR1eEZvcm0oe1xuICBmb3JtOiAnYWRkQ29sbGVjdGlvbicsXG4gIGZpZWxkczogWyduYW1lJywgJ19ib29rc1ZhbHVlJywgJ19ib29rc1ZhbHVlcycsICdfYm9va3NPcHRpb25zJywgJ2Rlc2NyaXB0aW9uJ10sXG59KVxuY2xhc3MgQWRkQ29sbGVjdGlvbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQ8QWxsUHJvcHMsIFN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZpZWxkczogeyBuYW1lLCBfYm9va3NWYWx1ZSwgX2Jvb2tzVmFsdWVzLCBfYm9va3NPcHRpb25zLCBkZXNjcmlwdGlvbiB9LFxuICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgb25TYXZlLFxuICAgICAgb25Cb29rc1ZhbHVlQ2hhbmdlLFxuICAgICAgYm9va3NTZWFyY2hBc09wdGlvbnNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIuWQiOmbhuWQjeensFwiIHsuLi5uYW1lfSAvPlxuICAgICAgICA8U2VsZWN0aXplSW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIumAieaLqeS5puexjVwiXG4gICAgICAgICAgb25JbnB1dENoYW5nZT17bmV3VmFsdWUgPT4ge1xuICAgICAgICAgICAgaWYgKG9uQm9va3NWYWx1ZUNoYW5nZSkge1xuICAgICAgICAgICAgICBvbkJvb2tzVmFsdWVDaGFuZ2UobmV3VmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfYm9va3NWYWx1ZS5vbkNoYW5nZShuZXdWYWx1ZSlcbiAgICAgICAgICB9IH1cbiAgICAgICAgICB2YWx1ZT17X2Jvb2tzVmFsdWUudmFsdWV9XG4gICAgICAgICAgb25WYWx1ZXNDaGFuZ2U9e19ib29rc1ZhbHVlcy5vbkNoYW5nZX1cbiAgICAgICAgICBvcHRpb25zPXtib29rc1NlYXJjaEFzT3B0aW9uc31cbiAgICAgICAgICB2YWx1ZXM9e19ib29rc1ZhbHVlcy52YWx1ZSB8fCBbXX1cbiAgICAgICAgICAvPlxuICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICB7Li4uZGVzY3JpcHRpb259XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLmj4/ov7BcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXQoZGF0YSA9PiB7XG4gICAgICAgICAgICBsZXQgcG9zdERhdGEgPSBfLnBpY2soZGF0YSwgWyduYW1lJywgJ2Rlc2NyaXB0aW9uJ10pXG4gICAgICAgICAgICBwb3N0RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHBvc3REYXRhLCB7XG4gICAgICAgICAgICAgIGl0ZW1zOiBfYm9va3NWYWx1ZXMudmFsdWUgPyBfYm9va3NWYWx1ZXMudmFsdWUubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSkgOiBbXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIG9uU2F2ZShwb3N0RGF0YSlcbiAgICAgICAgICB9KSB9XG4gICAgICAgICAgPua3u+WKoDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpbml0aWFsVmFsdWVzOiBvd25Qcm9wcy5pbml0aWFsRGF0YSxcbiAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMsXG4gICAgYm9va3NTZWFyY2hBc09wdGlvbnM6IHNlbGVjdG9ycy5ib29rc0FzT3B0aW9ucygnc2VhcmNoJykoc3RhdGUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDx7fSwge30sIFByb3BzPihcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICB7IHNlbmROb3RpZmljYXRpb24gfVxuKShBZGRDb2xsZWN0aW9uRm9ybSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9BZGRDb2xsZWN0aW9uL2NvbXBvbmVudHMvQWRkQ29sbGVjdGlvbkZvcm0udHN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==