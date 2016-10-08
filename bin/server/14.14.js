exports.ids = [14];
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

/***/ 587:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(107);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(276);
	
	var _reduxForm = __webpack_require__(281);
	
	var _actions = __webpack_require__(282);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _api = __webpack_require__(443);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _DocContainer = __webpack_require__(273);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _AddBookForm = __webpack_require__(588);
	
	var _AddBookForm2 = _interopRequireDefault(_AddBookForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AddBook = function (_Component) {
	    _inherits(AddBook, _Component);
	
	    function AddBook(props) {
	        _classCallCheck(this, AddBook);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddBook).call(this, props));
	
	        _this.state = {
	            addBookFormInitialData: {}
	        };
	        _this.handleTitleValueChange = _this.handleTitleValueChange.bind(_this);
	        _this.handleAuthorValueChange = _this.handleAuthorValueChange.bind(_this);
	        _this.addAuthor = _this.addAuthor.bind(_this);
	        _this.addBook = _this.addBook.bind(_this);
	        return _this;
	    }
	
	    _createClass(AddBook, [{
	        key: 'addBook',
	        value: function addBook(data) {
	            var _this2 = this;
	
	            _api2.default.addBook(data).then(function (result) {
	                _this2.props.sendNotification('添加成功');
	                _this2.setState({
	                    addBookFormInitialData: {}
	                }, function () {
	                    _this2.props.reset('addBook');
	                });
	            }, function (error) {
	                _this2.props.sendNotification(error.message, 'error');
	            });
	        }
	    }, {
	        key: 'addAuthor',
	        value: function addAuthor(data) {
	            var _this3 = this;
	
	            _api2.default.addAuthor(data).then(function (result) {
	                _this3.props.sendNotification('添加成功');
	                var id = result.json.ops[0]._id;
	                var name = result.json.ops[0].name;
	                _this3.setState({
	                    addBookFormInitialData: {
	                        _authorValues: [{
	                            name: name,
	                            value: id
	                        }],
	                        _authorValue: ''
	                    }
	                });
	                _this3.props.closeModal();
	            }, function (error) {
	                _this3.props.sendNotification(error.message);
	            });
	        }
	    }, {
	        key: 'handleAuthorValueChange',
	        value: function handleAuthorValueChange(query) {
	            if (!_lodash2.default.isEmpty(query)) {
	                this.props.fetchAuthors({
	                    q: query
	                });
	            }
	        }
	    }, {
	        key: 'handleTitleValueChange',
	        value: function handleTitleValueChange(newVal) {
	            if (!_lodash2.default.isEmpty(newVal)) {
	                this.props.searchDoubanBooks(newVal);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_DocContainer2.default, { title: "添加书籍" }, _react2.default.createElement("h1", { className: "page-title" }, "添加书籍"), _react2.default.createElement(_AddBookForm2.default, { onTitleInputChange: this.handleTitleValueChange, onAuthorInputChange: this.handleAuthorValueChange, onSaveAuthor: this.addAuthor, initialData: this.state.addBookFormInitialData, onSaveBook: this.addBook }));
	        }
	    }]);
	
	    return AddBook;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        notification: state.components.notification,
	        elements: state.elements
	    };
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, changeValue: _actions.changeValue, openModal: _actions.openModal, searchDoubanBooks: _actions.searchDoubanBooks, closeModal: _actions.closeModal, fetchAuthors: _actions.fetchAuthors, reset: _reduxForm.reset })(AddBook);

/***/ },

/***/ 588:
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
	
	var _selectors = __webpack_require__(446);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _Input = __webpack_require__(505);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Textarea = __webpack_require__(513);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);
	
	var _form = __webpack_require__(504);
	
	var _AddAuthorForm = __webpack_require__(589);
	
	var _AddAuthorForm2 = _interopRequireDefault(_AddAuthorForm);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _getFormValues = __webpack_require__(590);
	
	var _getFormValues2 = _interopRequireDefault(_getFormValues);
	
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
	
	var fields = ['_titleValue', '_titleValues', '_authorValue', '_authorValues', 'cover', 'description', 'content'];
	var AddBookForm = function (_Component) {
	    _inherits(AddBookForm, _Component);
	
	    function AddBookForm(props) {
	        _classCallCheck(this, AddBookForm);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddBookForm).call(this, props));
	
	        _this.handleTitleOptionClick = _this.handleTitleOptionClick.bind(_this);
	        return _this;
	    }
	
	    _createClass(AddBookForm, [{
	        key: "handleTitleOptionClick",
	        value: function handleTitleOptionClick(option) {
	            var _props$fields = this.props.fields;
	            var _titleValue = _props$fields._titleValue;
	            var _titleValues = _props$fields._titleValues;
	            var _authorValue = _props$fields._authorValue;
	            var cover = _props$fields.cover;
	            var description = _props$fields.description;
	
	            cover.onChange(option.additional.cover);
	            _authorValue.onChange(option.additional.author);
	            description.onChange(option.additional.description);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props;
	            var _props$fields2 = _props.fields;
	            var _titleValue = _props$fields2._titleValue;
	            var _titleValues = _props$fields2._titleValues;
	            var _authorValue = _props$fields2._authorValue;
	            var _authorValues = _props$fields2._authorValues;
	            var cover = _props$fields2.cover;
	            var description = _props$fields2.description;
	            var content = _props$fields2.content;
	            var handleSubmit = _props.handleSubmit;
	            var onTitleInputChange = _props.onTitleInputChange;
	            var onAuthorInputChange = _props.onAuthorInputChange;
	            var doubanBooksAsOptions = _props.doubanBooksAsOptions;
	            var authorsAsOptions = _props.authorsAsOptions;
	            var onSaveAuthor = _props.onSaveAuthor;
	            var onSaveBook = _props.onSaveBook;
	
	            var selectedAuthorIds = (_authorValues.value || []).map(function (author) {
	                return author.value;
	            });
	            var filteredAuthorOptions = authorsAsOptions.filter(function (author) {
	                return selectedAuthorIds.indexOf(author.value) === -1;
	            });
	            return _react2.default.createElement("div", null, _react2.default.createElement(_form.SelectizeInput, { placeholder: "书名", onInputChange: function onInputChange(newValue) {
	                    onTitleInputChange(newValue);
	                    _titleValue.onChange(newValue);
	                }, value: _titleValue.value, onValuesChange: function onValuesChange(newValues) {
	                    _titleValues.onChange(newValues);
	                }, options: doubanBooksAsOptions, values: _titleValues.value || [], onOptionClick: this.handleTitleOptionClick }), _react2.default.createElement(_form.SelectizeInput, { placeholder: "作者", onInputChange: function onInputChange(newValue) {
	                    onAuthorInputChange(newValue);
	                    _authorValue.onChange(newValue);
	                }, value: _authorValue.value, onValuesChange: function onValuesChange(newValues) {
	                    _authorValues.onChange(newValues);
	                }, options: filteredAuthorOptions, values: _authorValues.value || [], onAddNewValue: function onAddNewValue(value) {
	                    _this2.props.openModal({
	                        title: '添加作者',
	                        content: _react2.default.createElement(_AddAuthorForm2.default, { initialData: { name: value }, onSave: onSaveAuthor })
	                    });
	                } }), _react2.default.createElement(_Input2.default, __assign({ placeholder: "封面图片地址" }, cover)), _react2.default.createElement(_Textarea2.default, __assign({ placeholder: "描述" }, description)), _react2.default.createElement(_Textarea2.default, __assign({ placeholder: "在此粘贴书籍内容 (markdown 格式)" }, content)), _react2.default.createElement(_form.Button, { onClick: handleSubmit(function (data) {
	                    var postData = _lodash2.default.pick(data, ['cover', 'description', 'content']);
	                    postData = _lodash2.default.assign({}, postData, {
	                        title: _lodash2.default.get(_titleValues, 'value[0].name', ''),
	                        authors: Array.isArray(_authorValues.value) ? _authorValues.value.map(function (v) {
	                            return v.value;
	                        }) : []
	                    });
	                    onSaveBook(postData);
	                }) }, "添加"));
	        }
	    }]);
	
	    return AddBookForm;
	}(_react.Component);
	AddBookForm = __decorate([(0, _reduxForm.reduxForm)({
	    form: 'addBook',
	    fields: fields
	})], AddBookForm);
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    var form = _lodash2.default.get(state.form, 'addBook', {});
	    var formData = (0, _getFormValues2.default)(form, fields);
	    return {
	        initialValues: Object.assign({}, formData, ownProps.initialData),
	        routing: state.routing.locationBeforeTransitions,
	        doubanBooksAsOptions: selectors.doubanBooksAsOptions('search')(state),
	        authorsAsOptions: selectors.authorsAsOptions('search')(state)
	    };
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, openModal: _actions.openModal })(AddBookForm);

/***/ },

/***/ 589:
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
	
	var _ModalFooter = __webpack_require__(412);
	
	var _ModalFooter2 = _interopRequireDefault(_ModalFooter);
	
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
	
	var AddAuthorForm = function (_Component) {
	    _inherits(AddAuthorForm, _Component);
	
	    function AddAuthorForm(props) {
	        _classCallCheck(this, AddAuthorForm);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(AddAuthorForm).call(this, props));
	    }
	
	    _createClass(AddAuthorForm, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var _props$fields = _props.fields;
	            var name = _props$fields.name;
	            var slug = _props$fields.slug;
	            var description = _props$fields.description;
	            var handleSubmit = _props.handleSubmit;
	            var closeModal = _props.closeModal;
	            var onSave = _props.onSave;
	
	            return _react2.default.createElement("div", null, _react2.default.createElement(_Input2.default, __assign({ placeholder: "名字" }, name)), _react2.default.createElement(_Input2.default, __assign({ placeholder: "唯一标识" }, slug)), _react2.default.createElement(_Input2.default, __assign({ placeholder: "描述" }, description)), _react2.default.createElement(_ModalFooter2.default, { onConfirm: handleSubmit(function (data) {
	                    onSave(data);
	                }), onCancel: closeModal }));
	        }
	    }]);
	
	    return AddAuthorForm;
	}(_react.Component);
	AddAuthorForm = __decorate([(0, _reduxForm.reduxForm)({
	    form: 'addAuthor',
	    fields: ['name', 'slug', 'description']
	})], AddAuthorForm);
	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	    return {
	        initialValues: ownProps.initialData,
	        routing: state.routing.locationBeforeTransitions
	    };
	}, { sendNotification: _actions.sendNotification, closeModal: _actions.closeModal })(AddAuthorForm);

/***/ },

/***/ 590:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = getFormValues;
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getFormValues(formData, fields) {
	    if (!formData) {
	        return {};
	    }
	    return _lodash2.default.mapValues(_lodash2.default.pick(formData, fields), function (val) {
	        return val.value;
	    });
	}

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vaW5kZXgudHM/NTBkNyoqKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L2luZGV4LnRzPzIxZDMqKioqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9JbnB1dC50c3g/ZGExZCoqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuc2Nzcz80MDE3KioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuc2Nzcz8wNDgzKioqKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L2luZGV4LnRzPzdlODAqKioqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC50c3g/NGU3MyoqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQuc2Nzcz9jZWE0KioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQuc2Nzcz84YjkzKioqKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL2luZGV4LnRzP2I4MTIqKioqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS50c3g/YzJhZioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEuY3NzP2FhMjEqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS5jc3M/NWJjMioqKioqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQm9vay9BZGRCb29rLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FkZEJvb2svY29tcG9uZW50cy9BZGRCb29rRm9ybS50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9BZGRCb29rL2NvbXBvbmVudHMvQWRkQXV0aG9yRm9ybS50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2hlbHBlcnMvZ2V0Rm9ybVZhbHVlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZCOzs7O0FBQ0Y7Ozs7QUFDa0I7Ozs7QUFHN0M7Ozs7OztTQUFlO1NBQU87U0FBZ0I7U0FBWSw4Qjs7Ozs7Ozs7Ozs7OztBQ0o5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEb0I7Ozs7QUFDRTs7OztBQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDbkMsS0FBWSxTQUFVLG9CQUFnQjtBQWdCdEM7OztBQUNFLG9CQUFpQixPQUNmOzs7eUZBR0k7Ozs7Ozs7O0FBQ0osaUJBQVMsUUFBUyxPQUFPLE9BQUcsSUFBTSxLQUFPO0FBQ3pDLG9CQUFZLE1BQ047MEJBQXlCLEtBQU07aUJBQXhCO2lCQUFXOztBQUV4QixpQkFBZSxZQUFRLFNBQVc7QUFFM0Isb0JBQ0wsOEJBQUksU0FBVSxXQUFZLDBCQUFDLEVBQWEsY0FBRSxDQUFVLFdBQXFCLHFCQUFjLGNBQVUsV0FBTSxLQUFNLE1BQVUsYUFBTyxvQ0FDdEgsV0FDSyxXQUFRLFNBQ04sYUFBTSxLQUFNLE1BQWEsYUFDL0IsT0FBTSxLQUFNLE1BQU8sT0FDaEI7QUFDRiw0QkFBTSxN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LG1DQUNkLE9BQWU7WUFBQztBQUNQLHdCQUFVLFNBQVk7QUFDNUIsa0JBQU8sTUFBUSxRQUN0Qjs7RUFIRixFQUlBLEVBQWtCLDZDQUNuQixtQ0FBZSxlOzs7Ozs7Ozs7Ozs7OztBQ2hFaEI7Ozs7Ozt3QkFBOEMsVUFBa0I7QUFDM0QsU0FBQyxDQUFVO0FBQ04sZ0JBQ1AsR0FGZTs7QUFJVixZQUFFLGlCQUFVLFVBQUUsaUJBQUssS0FBUyxVQUFTO0FBQ25DLGdCQUFJLElBRWI7TUFIaUQiLCJmaWxlIjoiMTQuMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnXG5pbXBvcnQgU2VsZWN0aXplSW5wdXQgZnJvbSAnLi9TZWxlY3RpemVJbnB1dCdcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL1RleHRhcmVhJ1xuXG5leHBvcnQgeyBCdXR0b24sIElucHV0LCBTZWxlY3RpemVJbnB1dCwgVGV4dGFyZWEgfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcbmV4cG9ydCBkZWZhdWx0IElucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vSW5wdXQuc2NzcycpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgb25DaGFuZ2U/OiBhbnlcbiAgdmFsdWU/OiBzdHJpbmdcbiAgdHlwZT86IHN0cmluZ1xuICBuYW1lPzogc3RyaW5nXG4gIGVycm9yPzogYW55XG4gIHRvdWNoZWQ/OiBib29sZWFuXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpXG4gICAgZGVsZXRlIHByb3BzLmNsYXNzTmFtZVxuICAgIGNvbnN0IHsgZXJyb3IsIHRvdWNoZWQgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHNob3dFcnJvciA9IGVycm9yICYmIHRvdWNoZWRcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT17Y2xhc3NuYW1lcyh7J2lucHV0LXdyYXAnOiAhc2hvd0Vycm9yLCAnaW5wdXQtd3JhcC0tZXJyb3InOiBzaG93RXJyb3J9KX0gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJ30+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHN0eWxlTmFtZT1cImlucHV0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpXG4gICAgICAgICAgfX1cbiAgICAgICAgICB0eXBlPXt0aGlzLnByb3BzLnR5cGUgPyB0aGlzLnByb3BzLnR5cGUgOiAndGV4dCd9XG4gICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lID8gdGhpcy5wcm9wcy5uYW1lIDogbnVsbH1cbiAgICAgICAgLz5cbiAgICAgICAge1xuICAgICAgICAgIHNob3dFcnJvciAmJiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImVycm9yLW1zZ1wiPntlcnJvcn08L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9JbnB1dC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDUwN1xuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5wdXQtd3JhcF8xM0JiaywgLmlucHV0LXdyYXAtLWVycm9yXzJTSkExIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmlucHV0Xzc1cmxOIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjNzO1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICBvdXRsaW5lOiBub25lOyB9XFxuXFxuLmlucHV0Xzc1cmxOOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzFCMjY3RjsgfVxcblxcbi5pbnB1dC13cmFwLS1lcnJvcl8yU0pBMSAuaW5wdXRfNzVybE4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjZjIxNjVlOyB9XFxuXFxuLmVycm9yLW1zZ18zRWZ6aSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICBjb2xvcjogI2YyMTY1ZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImlucHV0LXdyYXBcIjogXCJpbnB1dC13cmFwXzEzQmJrXCIsXG5cdFwiaW5wdXQtd3JhcC0tZXJyb3JcIjogXCJpbnB1dC13cmFwLS1lcnJvcl8yU0pBMVwiLFxuXHRcImlucHV0XCI6IFwiaW5wdXRfNzVybE5cIixcblx0XCJlcnJvci1tc2dcIjogXCJlcnJvci1tc2dfM0VmemlcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDUwOFxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiaW1wb3J0IFNlbGVjdGl6ZUlucHV0IGZyb20gJy4vU2VsZWN0aXplSW5wdXQnXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RpemVJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9JY29uJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IGlzRGVzY2VuZGFudCBmcm9tICcuLi8uLi8uLi91dGlscy9kb20vaXNEZXNjZW5kYW50J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9TZWxlY3RpemVJbnB1dC5zY3NzJylcblxudHlwZSBUeXBlT3B0aW9uID0ge1xuICB2YWx1ZTogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgYWRkaXRpb25hbD86IGFueVxufVxuXG50eXBlIFR5cGVWYWx1ZSA9IHtcbiAgdmFsdWU6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICBsYWJlbD86IHN0cmluZ1xuICBzdGF5Rm9jdXNlZD86IGJvb2xlYW4gLy8gZGVmYXVsdCB0cnVlXG4gIG9taXRTZWxlY3RlZFZhbHVlc0Zyb21PcHRpb25zPzogYm9vbGVhblxuXG4gIHZhbHVlOiBzdHJpbmdcbiAgb25JbnB1dENoYW5nZTogKG5ld1ZhbHVlOiBzdHJpbmcpID0+IHZvaWRcblxuICBvcHRpb25zOiBBcnJheTxUeXBlT3B0aW9uPlxuICBvbk9wdGlvbnNDaGFuZ2U/OiAobmV3VmFsdWVzOiBBcnJheTxUeXBlT3B0aW9uPikgPT4gdm9pZFxuXG4gIHZhbHVlczogQXJyYXk8VHlwZVZhbHVlPlxuICBvblZhbHVlc0NoYW5nZTogKG5ld1ZhbHVlczogQXJyYXk8VHlwZVZhbHVlPikgPT4gdm9pZFxuXG4gIC8vIOmineWkluWKn+iDvVxuICBvbkFkZE5ld1ZhbHVlPzogKG5ld1ZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbiAgb25PcHRpb25DbGljaz86IChzZWxlY3RlZFZhbHVlOiBUeXBlT3B0aW9uKSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBmb2N1cz86IGJvb2xlYW5cbiAgc2hvd09wdGlvbnM/OiBib29sZWFuXG4gIHZhbHVlPzogc3RyaW5nXG4gIGV4cGVuZGVkT3B0aW9uSW5kZXg/OiBudW1iZXJcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBTZWxlY3RpemVJbnB1dCBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50XG4gIGlucHV0V3JhcDogSFRNTERpdkVsZW1lbnRcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93T3B0aW9uczogZmFsc2UsXG4gICAgICBmb2N1czogZmFsc2UsXG4gICAgICB2YWx1ZTogJycsXG4gICAgICBleHBlbmRlZE9wdGlvbkluZGV4OiAwXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrID0gdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2suYmluZCh0aGlzKVxuICAgIHRoaXMuZm9jdXNJbnB1dCA9IHRoaXMuZm9jdXNJbnB1dC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgYWRkVmFsdWUobmV3VmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLm9uVmFsdWVzQ2hhbmdlKHRoaXMucHJvcHMudmFsdWVzLmNvbmNhdChuZXdWYWx1ZSkpXG4gICAgaWYgKHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSh0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiAob3B0aW9uLnZhbHVlID09PSBuZXdWYWx1ZS52YWx1ZVxuICAgICAgICA/IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbiwgeyBkaXNhYmxlZDogdHJ1ZSB9KVxuICAgICAgICA6IG9wdGlvbikpKVxuICAgIH1cbiAgICB0aGlzLmNsZWFySW5wdXRWYWx1ZSgpXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnN0YXlGb2N1c2VkID09PSAndW5kZWZpbmVkJyB8fCB0aGlzLnByb3BzLnN0YXlGb2N1c2VkICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5mb2N1c0lucHV0KClcbiAgICB9XG4gICAgdGhpcy5oaWRlT3B0aW9ucygpXG4gIH1cblxuICBzaG93T3B0aW9ucygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dPcHRpb25zOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIGhpZGVPcHRpb25zKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd09wdGlvbnM6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZVZhbHVlKGluZGV4KSB7XG4gICAgbGV0IG5ld1ZhbHVlcyA9IFtdXG4gICAgbGV0IHJlbW92ZWRWYWx1ZVxuXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgbmV3VmFsdWVzID0gdGhpcy5wcm9wcy52YWx1ZXMuc2xpY2UoMCwgdGhpcy5wcm9wcy52YWx1ZXMubGVuZ3RoIC0gMSlcbiAgICAgIHJlbW92ZWRWYWx1ZSA9IHRoaXMucHJvcHMudmFsdWVzW3RoaXMucHJvcHMudmFsdWVzLmxlbmd0aCAtIDFdLnZhbHVlXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlcyA9IHRoaXMucHJvcHMudmFsdWVzXG4gICAgICAgIC5maWx0ZXIoKHYsIGkpID0+IHtcbiAgICAgICAgICByZW1vdmVkVmFsdWUgPSB2LnZhbHVlXG4gICAgICAgICAgcmV0dXJuIGkgIT09IGluZGV4XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSh0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiAob3B0aW9uLnZhbHVlID09PSByZW1vdmVkVmFsdWVcbiAgICAgICAgPyBPYmplY3QuYXNzaWduKHt9LCBvcHRpb24sIHsgZGlzYWJsZWQ6IGZhbHNlIH0pXG4gICAgICAgIDogb3B0aW9uKSkpXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vblZhbHVlc0NoYW5nZShuZXdWYWx1ZXMpXG4gIH1cblxuICBjbGVhcklucHV0VmFsdWUoKSB7XG4gICAgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKCcnKVxuICB9XG5cbiAgaGFuZGxlS2V5UHJlc3MoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDggJiYgIXRoaXMucHJvcHMudmFsdWUgJiYgdGhpcy5wcm9wcy52YWx1ZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICB0aGlzLnJlbW92ZVZhbHVlKC0xKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UoZS50YXJnZXQudmFsdWUpXG4gICAgaWYgKCh0aGlzLnByb3BzLm9wdGlvbnMgfHwgW10pLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdGhpcy5zaG93T3B0aW9ucygpXG4gICAgfVxuICB9XG5cbiAgZm9jdXNJbnB1dCgpIHtcbiAgICB0aGlzLmlucHV0LmZvY3VzKClcbiAgfVxuXG4gIGhhbmRsZU91dHNpZGVDbGljayhlKSB7XG4gICAgaWYgKGlzRGVzY2VuZGFudCh0aGlzLmlucHV0V3JhcCwgZS50YXJnZXQpIHx8IHRoaXMuaW5wdXRXcmFwID09PSBlLnRhcmdldCkge1xuICAgICAgdGhpcy5mb2N1c0lucHV0KClcbiAgICAgIHRoaXMuc2hvd09wdGlvbnMoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGVPcHRpb25zKClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnN0IG9wdGlvbnNMb2FkZWQgPSAobmV4dFByb3BzLm9wdGlvbnMgfHwgW10pLmxlbmd0aCAhPT0gMCAmJiAodGhpcy5wcm9wcy5vcHRpb25zIHx8IFtdKS5sZW5ndGggPT09IDBcbiAgICBpZiAob3B0aW9uc0xvYWRlZCAmJiB0aGlzLnN0YXRlLmZvY3VzKSB7XG4gICAgICB0aGlzLnNob3dPcHRpb25zKClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljaylcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIHZhbHVlcywgb25BZGROZXdWYWx1ZSwgb21pdFNlbGVjdGVkVmFsdWVzRnJvbU9wdGlvbnMgfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgJydcbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9ucyB8fCBbXVxuXG4gICAgbGV0IGlucHV0V2lkdGggPSB2YWx1ZXMubGVuZ3RoID4gMCA/ICh2YWx1ZS5sZW5ndGggPT09IDAgPyAxNiA6IHZhbHVlLmxlbmd0aCAqIDE2KSA6ICcxMDAlJ1xuICAgIGxldCBwbGFjZWhvbGRlciA9IHZhbHVlcy5sZW5ndGggPiAwID8gJycgOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyXG5cbiAgICBsZXQgZmlsdGVyZWRPcHRpb25zID0gb3B0aW9uc1xuICAgICAgLmZpbHRlcihvcHRpb24gPT4ge1xuICAgICAgICBpZiAob21pdFNlbGVjdGVkVmFsdWVzRnJvbU9wdGlvbnMpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZU9mVmFsdWVzID0gXy5tYXAodmFsdWVzLCAndmFsdWUnKVxuICAgICAgICAgIHJldHVybiB2YWx1ZU9mVmFsdWVzLmluZGV4T2Yob3B0aW9uLnZhbHVlKSA9PT0gLTFcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9KVxuXG4gICAgY29uc3Qgc2VsZWN0aXplSW5wdXRTdHlsZU5hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICdzZWxlY3RpemUtaW5wdXQnOiB0cnVlLFxuICAgICAgJ3NlbGVjdGl6ZS1pbnB1dC0tZm9jdXMnOiB0aGlzLnN0YXRlLmZvY3VzLFxuICAgICAgJ3NlbGVjdGl6ZS1pbnB1dC0tZW1wdHknOiB2YWx1ZXMubGVuZ3RoID09PSAwXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cInNlbGVjdGl6ZS13cmFwXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJ30+XG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbCA/IChcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+e2xhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGVOYW1lPXtzZWxlY3RpemVJbnB1dFN0eWxlTmFtZX1cbiAgICAgICAgICByZWY9e3JlZiA9PiB7IHRoaXMuaW5wdXRXcmFwID0gcmVmIH0gfVxuICAgICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZXMubWFwKCh2LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9IHN0eWxlTmFtZT1cInNlbGVjdGl6ZS10YWdcIj5cbiAgICAgICAgICAgICAgICAgIHt2Lm5hbWV9XG4gICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICBzdHlsZU5hbWU9XCJpY29uLXJlbW92ZVwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9ezIwfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVZhbHVlKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGlucHV0V2lkdGggfX1cbiAgICAgICAgICAgIHJlZj17cmVmID0+IHsgdGhpcy5pbnB1dCA9IHJlZiB9IH1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIG9uQmx1cj17ZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1czogZmFsc2UgfSlcbiAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgb25Gb2N1cz17ZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1czogdHJ1ZSB9KVxuICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlS2V5UHJlc3MoZSlcbiAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLnNob3dPcHRpb25zICYmIChmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoICE9PSAwIHx8IG9uQWRkTmV3VmFsdWUpID8gKFxuICAgICAgICAgICAgPHVsIHN0eWxlTmFtZT1cInF1ZXJ5LXJlc3VsdHNcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgLm1hcCgob3B0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJkaXNhYmxlZFwiPntvcHRpb24ubmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVmFsdWUob3B0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbk9wdGlvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk9wdGlvbkNsaWNrKG9wdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57b3B0aW9uLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uQWRkTmV3VmFsdWUgPyAoXG4gICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgb25BZGROZXdWYWx1ZSh0aGlzLnByb3BzLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkXCI+5re75YqgIDxzdHJvbmc+e3RoaXMucHJvcHMudmFsdWV9PC9zdHJvbmc+PC9saT5cbiAgICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICkgOiBudWxsXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5TZWxlY3RpemVJbnB1dFsnZGVmYXVsdFByb3BzJ10gPSB7XG4gIG9taXRTZWxlY3RlZFZhbHVlc0Zyb21PcHRpb25zOiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGl6ZUlucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL1NlbGVjdGl6ZUlucHV0LnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNTExXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zZWxlY3RpemUtd3JhcF8zQU1BaSB7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5zZWxlY3RpemUtaW5wdXRfMTRiZ1Age1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0cmFuc2l0aW9uOiBhbGwgMHM7XFxuICBjdXJzb3I6IHRleHQ7XFxuICBiYWNrZ3JvdW5kOiAjZmZmOyB9XFxuICAuc2VsZWN0aXplLWlucHV0XzE0YmdQIGlucHV0IHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4OyB9XFxuXFxuLnNlbGVjdGl6ZS1pbnB1dC0tZm9jdXNfVW5aOEIge1xcbiAgYm9yZGVyLWNvbG9yOiAjMUIyNjdGOyB9XFxuXFxuLnNlbGVjdGl6ZS1pbnB1dC0tZW1wdHlfeG43VXkge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDVweCA1cHggMDsgfVxcblxcbi5zZWxlY3RpemUtaW5wdXRfMTRiZ1AgaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbi1ib3R0b206IDVweDsgfVxcblxcbi5xdWVyeS1yZXN1bHRzX09nRTJ0IHtcXG4gIG1hcmdpbi10b3A6IC0zcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zMik7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgei1pbmRleDogOTAwOyB9XFxuXFxuLnF1ZXJ5LXJlc3VsdHNfT2dFMnQgbGkge1xcbiAgcGFkZGluZzogMCA3cHg7XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcbiAgLnF1ZXJ5LXJlc3VsdHNfT2dFMnQgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMUIyNjdGO1xcbiAgICBjb2xvcjogI2ZmZjsgfVxcblxcbi5zZWxlY3RpemUtdGFnXzNhRDEzIHtcXG4gIGJhY2tncm91bmQ6ICMxQjI2N0Y7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiAzcHggMjVweCAzcHggNXB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5pY29uLXJlbW92ZV8xTzdGXyB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXB4O1xcbiAgdG9wOiAycHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJzZWxlY3RpemUtd3JhcFwiOiBcInNlbGVjdGl6ZS13cmFwXzNBTUFpXCIsXG5cdFwic2VsZWN0aXplLWlucHV0XCI6IFwic2VsZWN0aXplLWlucHV0XzE0YmdQXCIsXG5cdFwic2VsZWN0aXplLWlucHV0LS1mb2N1c1wiOiBcInNlbGVjdGl6ZS1pbnB1dC0tZm9jdXNfVW5aOEJcIixcblx0XCJzZWxlY3RpemUtaW5wdXQtLWVtcHR5XCI6IFwic2VsZWN0aXplLWlucHV0LS1lbXB0eV94bjdVeVwiLFxuXHRcInF1ZXJ5LXJlc3VsdHNcIjogXCJxdWVyeS1yZXN1bHRzX09nRTJ0XCIsXG5cdFwic2VsZWN0aXplLXRhZ1wiOiBcInNlbGVjdGl6ZS10YWdfM2FEMTNcIixcblx0XCJpY29uLXJlbW92ZVwiOiBcImljb24tcmVtb3ZlXzFPN0ZfXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA1MTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsImltcG9ydCBUZXh0YXJlYSBmcm9tICcuL1RleHRhcmVhJ1xuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWFcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvcHMgYXMgSW5wdXRQcm9wcyB9IGZyb20gJy4uL0lucHV0L0lucHV0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1RleHRhcmVhLmNzcycpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJbnB1dFByb3BzIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBUZXh0YXJlYSBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwidGV4dGFyZWEtd3JhcFwiIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJyd9PlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpXG4gICAgICAgICAgfX1cbiAgICAgICAgICBzdHlsZU5hbWU9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgdHlwZT17dGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ3RleHQnfVxuICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZSA/IHRoaXMucHJvcHMubmFtZSA6IG51bGx9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWFcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vVGV4dGFyZWEuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEuY3NzXG4gKiogbW9kdWxlIGlkID0gNTE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2Uhc3R5bGVzL3ZhcmlhYmxlcy5jc3NcIiksIFwiXCIpO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50ZXh0YXJlYS13cmFwX1hrcGoxIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGV4dGFyZWFfMUVkb1Mge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4zcztcXG59XFxuXFxuLnRleHRhcmVhXzFFZG9TOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInRleHRhcmVhLXdyYXBcIjogXCJ0ZXh0YXJlYS13cmFwX1hrcGoxXCIsXG5cdFwidGV4dGFyZWFcIjogXCJ0ZXh0YXJlYV8xRWRvU1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9wb3N0Y3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1MTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyByZXNldCB9IGZyb20gJ3JlZHV4LWZvcm0nXG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uLCBjaGFuZ2VWYWx1ZSwgb3Blbk1vZGFsLCBzZWFyY2hEb3ViYW5Cb29rcywgY2xvc2VNb2RhbCwgZmV0Y2hBdXRob3JzIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJ1xuaW1wb3J0IERvY0NvbnRhaW5lciBmcm9tICcuLi8uLi9jb250YWluZXJzL0RvY0NvbnRhaW5lcidcbmltcG9ydCBBZGRCb29rRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvQWRkQm9va0Zvcm0nXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGVsZW1lbnRzPzogYW55XG4gIGNoYW5nZVZhbHVlPzogYW55XG4gIHNlbmROb3RpZmljYXRpb24/OiBhbnlcbiAgb3Blbk1vZGFsPzogKGRhdGE6IG9wZW5Nb2RhbCkgPT4gdm9pZFxuICBzZWFyY2hEb3ViYW5Cb29rcz86IGFueVxuICBjbG9zZU1vZGFsPzogYW55XG4gIGZldGNoQXV0aG9ycz86IGFueVxuICByZXNldD86IGFueVxuICBmZXRjaERvdWJhbkJvb2tzOiBhbnlcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgYWRkQm9va0Zvcm1Jbml0aWFsRGF0YT86IGFueVxufVxuXG5jbGFzcyBBZGRCb29rIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuXG4gIGRlZmF1bHRTdGF0ZToge31cbiAgZmV0Y2hEb3ViYW5Cb29rczogYW55XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWRkQm9va0Zvcm1Jbml0aWFsRGF0YToge31cbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZVRpdGxlVmFsdWVDaGFuZ2UgPSB0aGlzLmhhbmRsZVRpdGxlVmFsdWVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlQXV0aG9yVmFsdWVDaGFuZ2UgPSB0aGlzLmhhbmRsZUF1dGhvclZhbHVlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmFkZEF1dGhvciA9IHRoaXMuYWRkQXV0aG9yLmJpbmQodGhpcylcbiAgICB0aGlzLmFkZEJvb2sgPSB0aGlzLmFkZEJvb2suYmluZCh0aGlzKVxuICB9XG5cbiAgYWRkQm9vayhkYXRhKSB7XG4gICAgYXBpLmFkZEJvb2soZGF0YSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKCfmt7vliqDmiJDlip8nKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFkZEJvb2tGb3JtSW5pdGlhbERhdGE6IHt9XG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMucmVzZXQoJ2FkZEJvb2snKVxuICAgICAgfSlcbiAgICB9LCBlcnJvciA9PiB7XG4gICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSwgJ2Vycm9yJylcbiAgICB9KVxuICB9XG5cbiAgYWRkQXV0aG9yKGRhdGEpIHtcbiAgICBhcGkuYWRkQXV0aG9yKGRhdGEpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5re75Yqg5oiQ5YqfJylcbiAgICAgIGNvbnN0IGlkID0gcmVzdWx0Lmpzb24ub3BzWzBdLl9pZFxuICAgICAgY29uc3QgbmFtZSA9IHJlc3VsdC5qc29uLm9wc1swXS5uYW1lXG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhZGRCb29rRm9ybUluaXRpYWxEYXRhOiB7XG4gICAgICAgICAgX2F1dGhvclZhbHVlczogW3tcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogaWRcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBfYXV0aG9yVmFsdWU6ICcnXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHRoaXMucHJvcHMuY2xvc2VNb2RhbCgpXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKGVycm9yLm1lc3NhZ2UpXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUF1dGhvclZhbHVlQ2hhbmdlKHF1ZXJ5KSB7XG4gICAgaWYgKCFfLmlzRW1wdHkocXVlcnkpKSB7XG4gICAgICB0aGlzLnByb3BzLmZldGNoQXV0aG9ycyh7XG4gICAgICAgIHE6IHF1ZXJ5XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVRpdGxlVmFsdWVDaGFuZ2UobmV3VmFsKSB7XG4gICAgaWYgKCFfLmlzRW1wdHkobmV3VmFsKSkge1xuICAgICAgdGhpcy5wcm9wcy5zZWFyY2hEb3ViYW5Cb29rcyhuZXdWYWwpXG4gICAgICAvLyB0aGlzLnByb3BzLmZldGNoRG91YmFuQm9va3MobmV3VmFsKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERvY0NvbnRhaW5lciB0aXRsZT1cIua3u+WKoOS5puexjVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPua3u+WKoOS5puexjTwvaDE+XG4gICAgICAgIDxBZGRCb29rRm9ybVxuICAgICAgICAgIG9uVGl0bGVJbnB1dENoYW5nZT17dGhpcy5oYW5kbGVUaXRsZVZhbHVlQ2hhbmdlfVxuICAgICAgICAgIG9uQXV0aG9ySW5wdXRDaGFuZ2U9e3RoaXMuaGFuZGxlQXV0aG9yVmFsdWVDaGFuZ2V9XG4gICAgICAgICAgb25TYXZlQXV0aG9yPXt0aGlzLmFkZEF1dGhvcn1cbiAgICAgICAgICBpbml0aWFsRGF0YT17dGhpcy5zdGF0ZS5hZGRCb29rRm9ybUluaXRpYWxEYXRhfVxuICAgICAgICAgIG9uU2F2ZUJvb2s9e3RoaXMuYWRkQm9va31cbiAgICAgICAgLz5cbiAgICAgIDwvRG9jQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgbm90aWZpY2F0aW9uOiBzdGF0ZS5jb21wb25lbnRzLm5vdGlmaWNhdGlvbixcbiAgICBlbGVtZW50czogc3RhdGUuZWxlbWVudHNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIHsgc2VuZE5vdGlmaWNhdGlvbiwgY2hhbmdlVmFsdWUsIG9wZW5Nb2RhbCwgc2VhcmNoRG91YmFuQm9va3MsIGNsb3NlTW9kYWwsIGZldGNoQXV0aG9ycywgcmVzZXQgfVxuKShBZGRCb29rIGFzIGFueSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9BZGRCb29rL0FkZEJvb2sudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSdcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24sIG9wZW5Nb2RhbCB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2VsZWN0b3JzJ1xuaW1wb3J0IElucHV0IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL19mb3JtL0lucHV0J1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhJ1xuaW1wb3J0IHsgQnV0dG9uLCBTZWxlY3RpemVJbnB1dH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvX2Zvcm0nXG5pbXBvcnQgQWRkQXV0aG9yRm9ybSBmcm9tICcuL0FkZEF1dGhvckZvcm0nXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgZ2V0Rm9ybVZhbHVlcyBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2dldEZvcm1WYWx1ZXMnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGluaXRpYWxEYXRhPzogYW55XG4gIG9uVGl0bGVJbnB1dENoYW5nZT86IChuZXdWYWw6IHN0cmluZykgPT4gdm9pZFxuICBvbkF1dGhvcklucHV0Q2hhbmdlPzogKG5ld1ZhbDogc3RyaW5nKSA9PiB2b2lkXG4gIG9uU2F2ZUF1dGhvcjogKGRhdGE6IGFueSkgPT4gdm9pZFxuICBvblNhdmVCb29rOiAoZGF0YTogYW55KSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBBbGxQcm9wcyBleHRlbmRzIFByb3BzIHtcbiAgcm91dGluZzogYW55XG4gIHNlbmROb3RpZmljYXRpb246IGFueVxuICBoYW5kbGVTdWJtaXQ6IGFueVxuICBmaWVsZHM6IGFueVxuICBkb3ViYW5Cb29rc0FzT3B0aW9uczogYW55W11cbiAgYXV0aG9yc0FzT3B0aW9uczogYW55W11cbiAgb3Blbk1vZGFsOiAoZGF0YTogb3Blbk1vZGFsKSA9PiB2b2lkXG59XG5cbmNvbnN0IGZpZWxkcyA9IFsnX3RpdGxlVmFsdWUnLCAnX3RpdGxlVmFsdWVzJywgJ19hdXRob3JWYWx1ZScsICdfYXV0aG9yVmFsdWVzJywgJ2NvdmVyJywgJ2Rlc2NyaXB0aW9uJywgJ2NvbnRlbnQnXVxuXG5AcmVkdXhGb3JtKHtcbiAgZm9ybTogJ2FkZEJvb2snLFxuICBmaWVsZHNcbn0pXG5jbGFzcyBBZGRCb29rRm9ybSBleHRlbmRzIENvbXBvbmVudDxBbGxQcm9wcywge30+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuaGFuZGxlVGl0bGVPcHRpb25DbGljayA9IHRoaXMuaGFuZGxlVGl0bGVPcHRpb25DbGljay5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVUaXRsZU9wdGlvbkNsaWNrKG9wdGlvbikge1xuICAgIGNvbnN0IHtcbiAgICAgIGZpZWxkczogeyBfdGl0bGVWYWx1ZSwgX3RpdGxlVmFsdWVzLCBfYXV0aG9yVmFsdWUsIGNvdmVyLCBkZXNjcmlwdGlvbiB9LFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb3Zlci5vbkNoYW5nZShvcHRpb24uYWRkaXRpb25hbC5jb3ZlcilcbiAgICBfYXV0aG9yVmFsdWUub25DaGFuZ2Uob3B0aW9uLmFkZGl0aW9uYWwuYXV0aG9yKVxuICAgIGRlc2NyaXB0aW9uLm9uQ2hhbmdlKG9wdGlvbi5hZGRpdGlvbmFsLmRlc2NyaXB0aW9uKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZpZWxkczogeyBfdGl0bGVWYWx1ZSwgX3RpdGxlVmFsdWVzLCBfYXV0aG9yVmFsdWUsIF9hdXRob3JWYWx1ZXMsIGNvdmVyLCBkZXNjcmlwdGlvbiwgY29udGVudCB9LFxuICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgb25UaXRsZUlucHV0Q2hhbmdlLFxuICAgICAgb25BdXRob3JJbnB1dENoYW5nZSxcbiAgICAgIGRvdWJhbkJvb2tzQXNPcHRpb25zLFxuICAgICAgYXV0aG9yc0FzT3B0aW9ucyxcbiAgICAgIG9uU2F2ZUF1dGhvcixcbiAgICAgIG9uU2F2ZUJvb2tcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRBdXRob3JJZHMgPSAoX2F1dGhvclZhbHVlcy52YWx1ZSB8fCBbXSkubWFwKGF1dGhvciA9PiBhdXRob3IudmFsdWUpXG4gICAgY29uc3QgZmlsdGVyZWRBdXRob3JPcHRpb25zID0gYXV0aG9yc0FzT3B0aW9ucy5maWx0ZXIoYXV0aG9yID0+IHtcbiAgICAgIHJldHVybiBzZWxlY3RlZEF1dGhvcklkcy5pbmRleE9mKGF1dGhvci52YWx1ZSkgPT09IC0xXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VsZWN0aXplSW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuS5puWQjVwiXG4gICAgICAgICAgb25JbnB1dENoYW5nZT17bmV3VmFsdWUgPT4ge1xuICAgICAgICAgICAgb25UaXRsZUlucHV0Q2hhbmdlKG5ld1ZhbHVlKVxuICAgICAgICAgICAgX3RpdGxlVmFsdWUub25DaGFuZ2UobmV3VmFsdWUpXG4gICAgICAgICAgfSB9XG4gICAgICAgICAgdmFsdWU9e190aXRsZVZhbHVlLnZhbHVlfVxuICAgICAgICAgIG9uVmFsdWVzQ2hhbmdlPXtuZXdWYWx1ZXMgPT4ge1xuICAgICAgICAgICAgX3RpdGxlVmFsdWVzLm9uQ2hhbmdlKG5ld1ZhbHVlcylcbiAgICAgICAgICB9IH1cbiAgICAgICAgICBvcHRpb25zPXtkb3ViYW5Cb29rc0FzT3B0aW9uc31cbiAgICAgICAgICB2YWx1ZXM9e190aXRsZVZhbHVlcy52YWx1ZSB8fCBbXX1cbiAgICAgICAgICBvbk9wdGlvbkNsaWNrPXt0aGlzLmhhbmRsZVRpdGxlT3B0aW9uQ2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgPFNlbGVjdGl6ZUlucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLkvZzogIVcIlxuICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9e25ld1ZhbHVlID0+IHtcbiAgICAgICAgICAgIG9uQXV0aG9ySW5wdXRDaGFuZ2UobmV3VmFsdWUpXG4gICAgICAgICAgICBfYXV0aG9yVmFsdWUub25DaGFuZ2UobmV3VmFsdWUpXG4gICAgICAgICAgfSB9XG4gICAgICAgICAgdmFsdWU9e19hdXRob3JWYWx1ZS52YWx1ZX1cbiAgICAgICAgICBvblZhbHVlc0NoYW5nZT17bmV3VmFsdWVzID0+IHtcbiAgICAgICAgICAgIF9hdXRob3JWYWx1ZXMub25DaGFuZ2UobmV3VmFsdWVzKVxuICAgICAgICAgIH0gfVxuICAgICAgICAgIG9wdGlvbnM9e2ZpbHRlcmVkQXV0aG9yT3B0aW9uc31cbiAgICAgICAgICB2YWx1ZXM9e19hdXRob3JWYWx1ZXMudmFsdWUgfHwgW119XG4gICAgICAgICAgb25BZGROZXdWYWx1ZT17dmFsdWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vcGVuTW9kYWwoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+a3u+WKoOS9nOiAhScsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IDxBZGRBdXRob3JGb3JtXG4gICAgICAgICAgICAgICAgaW5pdGlhbERhdGE9e3sgbmFtZTogdmFsdWUgfX1cbiAgICAgICAgICAgICAgICBvblNhdmU9e29uU2F2ZUF1dGhvcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IH1cbiAgICAgICAgICAvPlxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCLlsIHpnaLlm77niYflnLDlnYBcIiB7Li4uY292ZXJ9IC8+XG4gICAgICAgIDxUZXh0YXJlYSBwbGFjZWhvbGRlcj1cIuaPj+i/sFwiIHsuLi5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPFRleHRhcmVhIHBsYWNlaG9sZGVyPVwi5Zyo5q2k57KY6LS05Lmm57GN5YaF5a65IChtYXJrZG93biDmoLzlvI8pXCIgey4uLmNvbnRlbnR9IC8+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0KGRhdGEgPT4ge1xuICAgICAgICAgIGxldCBwb3N0RGF0YSA9IF8ucGljayhkYXRhLCBbJ2NvdmVyJywgJ2Rlc2NyaXB0aW9uJywgJ2NvbnRlbnQnXSlcbiAgICAgICAgICBwb3N0RGF0YSA9IF8uYXNzaWduKHt9LCBwb3N0RGF0YSwge1xuICAgICAgICAgICAgdGl0bGU6IF8uZ2V0KF90aXRsZVZhbHVlcywgJ3ZhbHVlWzBdLm5hbWUnLCAnJyksXG4gICAgICAgICAgICBhdXRob3JzOiBBcnJheS5pc0FycmF5KF9hdXRob3JWYWx1ZXMudmFsdWUpID8gX2F1dGhvclZhbHVlcy52YWx1ZS5tYXAodiA9PiB2LnZhbHVlKSA6IFtdXG4gICAgICAgICAgfSlcbiAgICAgICAgICBvblNhdmVCb29rKHBvc3REYXRhKVxuICAgICAgICB9KSB9Pua3u+WKoDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgY29uc3QgZm9ybSA9IF8uZ2V0KHN0YXRlLmZvcm0sICdhZGRCb29rJywge30pXG4gIGNvbnN0IGZvcm1EYXRhID0gZ2V0Rm9ybVZhbHVlcyhmb3JtLCBmaWVsZHMpXG5cbiAgcmV0dXJuIHtcbiAgICBpbml0aWFsVmFsdWVzOiBPYmplY3QuYXNzaWduKHt9LCBmb3JtRGF0YSwgb3duUHJvcHMuaW5pdGlhbERhdGEpLFxuICAgIHJvdXRpbmc6IHN0YXRlLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyxcbiAgICBkb3ViYW5Cb29rc0FzT3B0aW9uczogc2VsZWN0b3JzLmRvdWJhbkJvb2tzQXNPcHRpb25zKCdzZWFyY2gnKShzdGF0ZSksXG4gICAgYXV0aG9yc0FzT3B0aW9uczogc2VsZWN0b3JzLmF1dGhvcnNBc09wdGlvbnMoJ3NlYXJjaCcpKHN0YXRlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCBQcm9wcz4oXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgeyBzZW5kTm90aWZpY2F0aW9uLCBvcGVuTW9kYWwgfVxuKShBZGRCb29rRm9ybSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9BZGRCb29rL2NvbXBvbmVudHMvQWRkQm9va0Zvcm0udHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSdcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24sIGNsb3NlTW9kYWwgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IElucHV0IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL19mb3JtL0lucHV0J1xuaW1wb3J0IE1vZGFsRm9vdGVyIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL01vZGFsL01vZGFsRm9vdGVyJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpbml0aWFsRGF0YT86IGFueVxuICBvblNhdmU6IChkYXRhOiBhbnkpID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIEFsbFByb3BzIGV4dGVuZHMgUHJvcHMge1xuICByb3V0aW5nOiBhbnlcbiAgc2VuZE5vdGlmaWNhdGlvbjogYW55XG4gIGhhbmRsZVN1Ym1pdDogYW55XG4gIGZpZWxkczogYW55XG4gIGNsb3NlTW9kYWw6ICgpID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbn1cblxuQHJlZHV4Rm9ybSh7XG4gIGZvcm06ICdhZGRBdXRob3InLFxuICBmaWVsZHM6IFsnbmFtZScsICdzbHVnJywgJ2Rlc2NyaXB0aW9uJ10sXG59KVxuY2xhc3MgQWRkQXV0aG9yRm9ybSBleHRlbmRzIENvbXBvbmVudDxBbGxQcm9wcywgU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZmllbGRzOiB7IG5hbWUsIHNsdWcsIGRlc2NyaXB0aW9uIH0sXG4gICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICBjbG9zZU1vZGFsLFxuICAgICAgb25TYXZlXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCLlkI3lrZdcIiB7Li4ubmFtZX0gLz5cbiAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwi5ZSv5LiA5qCH6K+GXCIgey4uLnNsdWd9IC8+XG4gICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIuaPj+i/sFwiIHsuLi5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPE1vZGFsRm9vdGVyXG4gICAgICAgICAgb25Db25maXJtPXtoYW5kbGVTdWJtaXQoZGF0YSA9PiB7XG4gICAgICAgICAgICBvblNhdmUoZGF0YSlcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBvbkNhbmNlbD17Y2xvc2VNb2RhbH1cbiAgICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCBQcm9wcz4oXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+ICh7XG4gICAgaW5pdGlhbFZhbHVlczogb3duUHJvcHMuaW5pdGlhbERhdGEsXG4gICAgcm91dGluZzogc3RhdGUucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zXG4gIH0pLFxuICB7IHNlbmROb3RpZmljYXRpb24sIGNsb3NlTW9kYWwgfVxuKShBZGRBdXRob3JGb3JtKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL0FkZEJvb2svY29tcG9uZW50cy9BZGRBdXRob3JGb3JtLnRzeFxuICoqLyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Rm9ybVZhbHVlcyhmb3JtRGF0YSwgZmllbGRzOiBzdHJpbmdbXSkge1xuICBpZiAoIWZvcm1EYXRhKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICByZXR1cm4gXy5tYXBWYWx1ZXMoXy5waWNrKGZvcm1EYXRhLCBmaWVsZHMpLCB2YWwgPT4ge1xuICAgIHJldHVybiB2YWwudmFsdWVcbiAgfSlcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2hlbHBlcnMvZ2V0Rm9ybVZhbHVlcy50c1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=