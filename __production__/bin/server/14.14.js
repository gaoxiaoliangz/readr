exports.ids = [14];
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

/***/ 374:
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
	
	var _api = __webpack_require__(240);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _DocContainer = __webpack_require__(238);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _AddBookForm = __webpack_require__(375);
	
	var _AddBookForm2 = _interopRequireDefault(_AddBookForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AddBook = function (_Component) {
	    _inherits(AddBook, _Component);
	
	    function AddBook(props) {
	        _classCallCheck(this, AddBook);
	
	        var _this = _possibleConstructorReturn(this, (AddBook.__proto__ || Object.getPrototypeOf(AddBook)).call(this, props));
	
	        _this.state = {
	            slData: {
	                author: {}
	            }
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
	                _this2.props.reset('addBook');
	            }, function (error) {
	                _this2.props.sendNotification(error.message, 'error', 0);
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
	                _this3.props.initialize('addBook', {
	                    authors: [{
	                        name: name,
	                        value: id
	                    }],
	                    author: ''
	                });
	                _this3.props.closeModal();
	            }, function (error) {
	                _this3.props.sendNotification(error.message, 'error');
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
	            return _react2.default.createElement(_DocContainer2.default, { title: "添加书籍" }, _react2.default.createElement("h1", { className: "page-title" }, "添加书籍"), _react2.default.createElement(_AddBookForm2.default, { onTitleInputChange: this.handleTitleValueChange, onAuthorInputChange: this.handleAuthorValueChange, onSaveAuthor: this.addAuthor, onSaveBook: this.addBook }));
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
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, openModal: _actions.openModal, searchDoubanBooks: _actions.searchDoubanBooks, closeModal: _actions.closeModal, fetchAuthors: _actions.fetchAuthors, reset: _actions.reset, initialize: _actions.initialize })(AddBook);

/***/ },

/***/ 375:
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
	
	var _selectors = __webpack_require__(223);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _Input = __webpack_require__(290);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Textarea = __webpack_require__(298);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);
	
	var _form2 = __webpack_require__(289);
	
	var _AddAuthorForm = __webpack_require__(376);
	
	var _AddAuthorForm2 = _interopRequireDefault(_AddAuthorForm);
	
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
	
	var AddBookForm = function (_Component) {
	    _inherits(AddBookForm, _Component);
	
	    function AddBookForm(props) {
	        _classCallCheck(this, AddBookForm);
	
	        var _this = _possibleConstructorReturn(this, (AddBookForm.__proto__ || Object.getPrototypeOf(AddBookForm)).call(this, props));
	
	        _this.handleTitleOptionClick = _this.handleTitleOptionClick.bind(_this);
	        _this.handleAddNewAuthor = _this.handleAddNewAuthor.bind(_this);
	        return _this;
	    }
	
	    _createClass(AddBookForm, [{
	        key: "handleTitleOptionClick",
	        value: function handleTitleOptionClick(option) {
	            var data = {
	                cover: option.additional.cover,
	                description: option.additional.description,
	                author: option.additional.author
	            };
	            this.props.initialize('addBook', data);
	            this.setState({
	                slAuthor: {
	                    value: option.additional.author,
	                    values: []
	                }
	            });
	        }
	    }, {
	        key: "handleAddNewAuthor",
	        value: function handleAddNewAuthor(value) {
	            this.props.openModal({
	                title: '添加作者',
	                content: _react2.default.createElement(_AddAuthorForm2.default, { onSave: this.props.onSaveAuthor })
	            });
	            this.props.initialize('addAuthor', { name: value });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var _props$fields = _props.fields;
	            var title = _props$fields.title;
	            var author = _props$fields.author;
	            var authors = _props$fields.authors;
	            var cover = _props$fields.cover;
	            var description = _props$fields.description;
	            var content = _props$fields.content;
	            var handleSubmit = _props.handleSubmit;
	            var onTitleInputChange = _props.onTitleInputChange;
	            var onAuthorInputChange = _props.onAuthorInputChange;
	            var doubanBooksAsOptions = _props.doubanBooksAsOptions;
	            var authorsAsOptions = _props.authorsAsOptions;
	            var onSaveBook = _props.onSaveBook;
	
	            var selectedAuthorIds = authors.get([]).map(function (a) {
	                return a.value;
	            });
	            var filteredAuthorOptions = authorsAsOptions.filter(function (a) {
	                return selectedAuthorIds.indexOf(a.value) === -1;
	            });
	            return _react2.default.createElement("div", null, _react2.default.createElement(_form2.SelectizeInput, { placeholder: "书名", value: title.value, values: [], options: doubanBooksAsOptions, onInputChange: function onInputChange(newValue) {
	                    onTitleInputChange(newValue);
	                    title.set(newValue);
	                }, useValue: true, onOptionClick: this.handleTitleOptionClick }), _react2.default.createElement(_form2.SelectizeInput, { placeholder: "作者", value: author.get(), values: authors.get([]), options: filteredAuthorOptions, onInputChange: function onInputChange(newValue) {
	                    onAuthorInputChange(newValue);
	                    author.set(newValue);
	                }, onValuesChange: authors.onChange, onAddNewValue: this.handleAddNewAuthor }), _react2.default.createElement(_Input2.default, __assign({ placeholder: "封面图片地址" }, cover)), _react2.default.createElement(_Textarea2.default, __assign({ placeholder: "描述" }, description)), _react2.default.createElement(_Textarea2.default, __assign({ placeholder: "在此粘贴书籍内容 (markdown 格式)" }, content)), _react2.default.createElement(_form2.Button, { onClick: handleSubmit(function (data) {
	                    var postData = _lodash2.default.omit(data, ['author']);
	                    postData['authors'] = _lodash2.default.map(postData['authors'], 'value');
	                    onSaveBook(postData);
	                }) }, "添加"));
	        }
	    }]);
	
	    return AddBookForm;
	}(_react.Component);
	AddBookForm = __decorate([(0, _form.form)({
	    form: 'addBook',
	    fields: ['title', 'author', 'authors', 'cover', 'description', 'content'],
	    destroyOnUnmount: true
	})], AddBookForm);
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    return {
	        routing: state.routing.locationBeforeTransitions,
	        doubanBooksAsOptions: selectors.doubanBooksAsOptions('search')(state),
	        authorsAsOptions: selectors.authorsAsOptions('search')(state)
	    };
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, openModal: _actions.openModal, initialize: _actions.initialize })(AddBookForm);

/***/ },

/***/ 376:
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
	
	var _Input = __webpack_require__(290);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _ModalFooter = __webpack_require__(193);
	
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
	
	        return _possibleConstructorReturn(this, (AddAuthorForm.__proto__ || Object.getPrototypeOf(AddAuthorForm)).call(this, props));
	    }
	
	    _createClass(AddAuthorForm, [{
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
	AddAuthorForm = __decorate([(0, _form.form)({
	    form: 'addAuthor',
	    fields: ['name', 'slug', 'description']
	})], AddAuthorForm);
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return state;
	}, { sendNotification: _actions.sendNotification, closeModal: _actions.closeModal })(AddAuthorForm);

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vaW5kZXgudHM/NTBkNyoqKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L2luZGV4LnRzPzIxZDMqKioqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9JbnB1dC50c3g/ZGExZCoqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuc2Nzcz80MDE3KioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuc2Nzcz8wNDgzKioqKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L2luZGV4LnRzPzdlODAqKioqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC50c3g/NGU3MyoqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQuc2Nzcz9jZWE0KioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQuc2Nzcz84YjkzKioqKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL2luZGV4LnRzP2I4MTIqKioqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS50c3g/YzJhZioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEuY3NzP2FhMjEqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS5jc3M/NWJjMioqKioqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9mb3JtL2luZGV4LnRzPzRiNGMqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9mb3JtL2NyZWF0ZUZvcm0udHN4PzNiZmYqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQm9vay9BZGRCb29rLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FkZEJvb2svY29tcG9uZW50cy9BZGRCb29rRm9ybS50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9BZGRCb29rL2NvbXBvbmVudHMvQWRkQXV0aG9yRm9ybS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2Qjs7OztBQUNGOzs7O0FBQ2tCOzs7O0FBRzdDOzs7Ozs7U0FBZTtTQUFPO1NBQWdCO1NBQVksOEI7Ozs7Ozs7Ozs7Ozs7QUNKOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRG9COzs7O0FBQ0U7Ozs7QUFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ25DLEtBQVksU0FBVSxvQkFBZ0I7QUFnQnRDO0FBQTZCOztBQUMzQixvQkFBaUI7QUFDZjs7OEdBQ0Y7QUFFTTs7Ozs7OztBQUNKLGlCQUFTLFFBQVMsT0FBTyxPQUFHLElBQU0sS0FBTztBQUN6QyxvQkFBWSxNQUNOOzBCQUF5QixLQUFNO2lCQUF4QjtpQkFBVzs7QUFFeEIsaUJBQWUsWUFBUSxTQUFXO0FBRTNCLG9CQUNMLDhCQUFJLFNBQVUsV0FBWSwwQkFBQyxFQUFhLGNBQUUsQ0FBVSxXQUFxQixxQkFBYyxjQUFVLFdBQU0sS0FBTSxNQUFVLGFBQU8sb0NBQ3RILFdBQ0ssV0FBUSxT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LFVBQWEsUUFDdEMsZ0JBQU0sMENBQVksYUFBSyxRQUFvQiwrQkFDL0IsdUNBQ0Qsd0JBQW1CO0FBQ3BCLDRCQUNSO0FBQUcsa0JBRm9CLEdBR2YsVUFJaEIsWUFSTTtBQVNQOzs7OztBQTlCRDtBQUNNLFdBQWE7QUFDWCxhQUFFLENBQU8sUUFBUSxRQUN2QjtBQUhJLEVBQUQsSUFnQ0w7O0FBQ08sWUFBUztFQURNLEVBRXBCLEVBQWtCLDZDQUNuQixtQ0FBZSxlIiwiZmlsZSI6IjE0LjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuaW1wb3J0IFNlbGVjdGl6ZUlucHV0IGZyb20gJy4vU2VsZWN0aXplSW5wdXQnXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9UZXh0YXJlYSdcblxuZXhwb3J0IHsgQnV0dG9uLCBJbnB1dCwgU2VsZWN0aXplSW5wdXQsIFRleHRhcmVhIH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0lucHV0LnNjc3MnKVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nXG4gIG9uQ2hhbmdlPzogYW55XG4gIHZhbHVlPzogc3RyaW5nXG4gIHR5cGU/OiBzdHJpbmdcbiAgbmFtZT86IHN0cmluZ1xuICBlcnJvcj86IGFueVxuICB0b3VjaGVkPzogYm9vbGVhblxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIElucHV0IGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKVxuICAgIGRlbGV0ZSBwcm9wcy5jbGFzc05hbWVcbiAgICBjb25zdCB7IGVycm9yLCB0b3VjaGVkIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBzaG93RXJyb3IgPSBlcnJvciAmJiB0b3VjaGVkXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9e2NsYXNzbmFtZXMoeydpbnB1dC13cmFwJzogIXNob3dFcnJvciwgJ2lucHV0LXdyYXAtLWVycm9yJzogc2hvd0Vycm9yfSl9IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJyd9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBzdHlsZU5hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKVxuICAgICAgICAgIH19XG4gICAgICAgICAgdHlwZT17dGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ3RleHQnfVxuICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZSA/IHRoaXMucHJvcHMubmFtZSA6IG51bGx9XG4gICAgICAgIC8+XG4gICAgICAgIHtcbiAgICAgICAgICBzaG93RXJyb3IgJiYgKFxuICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJlcnJvci1tc2dcIj57ZXJyb3J9PC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L0lucHV0LnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vSW5wdXQuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L0lucHV0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyOTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmlucHV0LXdyYXBfMTNCYmssIC5pbnB1dC13cmFwLS1lcnJvcl8yU0pBMSB7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5pbnB1dF83NXJsTiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDVweCA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4zcztcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgb3V0bGluZTogbm9uZTsgfVxcblxcbi5pbnB1dF83NXJsTjpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICMxQjI2N0Y7IH1cXG5cXG4uaW5wdXQtd3JhcC0tZXJyb3JfMlNKQTEgLmlucHV0Xzc1cmxOIHtcXG4gIGJvcmRlci1jb2xvcjogI2NjMDAwMDsgfVxcblxcbi5lcnJvci1tc2dfM0Vmemkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICB0b3A6IDZweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgY29sb3I6ICNjYzAwMDA7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJpbnB1dC13cmFwXCI6IFwiaW5wdXQtd3JhcF8xM0Jia1wiLFxuXHRcImlucHV0LXdyYXAtLWVycm9yXCI6IFwiaW5wdXQtd3JhcC0tZXJyb3JfMlNKQTFcIixcblx0XCJpbnB1dFwiOiBcImlucHV0Xzc1cmxOXCIsXG5cdFwiZXJyb3ItbXNnXCI6IFwiZXJyb3ItbXNnXzNFZnppXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L0lucHV0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyOTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsImltcG9ydCBTZWxlY3RpemVJbnB1dCBmcm9tICcuL1NlbGVjdGl6ZUlucHV0J1xuZXhwb3J0IGRlZmF1bHQgU2VsZWN0aXplSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vSWNvbidcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBpc0Rlc2NlbmRhbnQgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZG9tL2lzRGVzY2VuZGFudCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vU2VsZWN0aXplSW5wdXQuc2NzcycpXG5cbnR5cGUgVHlwZU9wdGlvbiA9IHtcbiAgdmFsdWU6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGFkZGl0aW9uYWw/OiBhbnlcbn1cblxudHlwZSBUeXBlVmFsdWUgPSB7XG4gIHZhbHVlOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgbGFiZWw/OiBzdHJpbmdcbiAgc3RheUZvY3VzZWQ/OiBib29sZWFuIC8vIGRlZmF1bHQgdHJ1ZVxuICBvbWl0U2VsZWN0ZWRWYWx1ZXNGcm9tT3B0aW9ucz86IGJvb2xlYW5cblxuICB2YWx1ZTogc3RyaW5nXG4gIG9uSW5wdXRDaGFuZ2U6IChuZXdWYWx1ZTogc3RyaW5nKSA9PiB2b2lkXG5cbiAgLy8g5L2/55SoIHZhbHVlIOiAjOS4jeaYryB2YWx1ZXMg5L2c5Li66L6T5YWlIFxuICB1c2VWYWx1ZT86IGJvb2xlYW5cblxuICBvcHRpb25zOiBBcnJheTxUeXBlT3B0aW9uPlxuICBvbk9wdGlvbnNDaGFuZ2U/OiAobmV3VmFsdWVzOiBBcnJheTxUeXBlT3B0aW9uPikgPT4gdm9pZFxuXG4gIHZhbHVlczogQXJyYXk8VHlwZVZhbHVlPlxuICBvblZhbHVlc0NoYW5nZT86IChuZXdWYWx1ZXM6IEFycmF5PFR5cGVWYWx1ZT4pID0+IHZvaWRcblxuICAvLyDpop3lpJblip/og71cbiAgb25BZGROZXdWYWx1ZT86IChuZXdWYWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIG9uT3B0aW9uQ2xpY2s/OiAoc2VsZWN0ZWRWYWx1ZTogVHlwZU9wdGlvbikgPT4gdm9pZFxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgZm9jdXM/OiBib29sZWFuXG4gIHNob3dPcHRpb25zPzogYm9vbGVhblxuICB2YWx1ZT86IHN0cmluZ1xuICBleHBlbmRlZE9wdGlvbkluZGV4PzogbnVtYmVyXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgU2VsZWN0aXplSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBpbnB1dDogSFRNTElucHV0RWxlbWVudFxuICBpbnB1dFdyYXA6IEhUTUxEaXZFbGVtZW50XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd09wdGlvbnM6IGZhbHNlLFxuICAgICAgZm9jdXM6IGZhbHNlLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgZXhwZW5kZWRPcHRpb25JbmRleDogMFxuICAgIH1cbiAgICB0aGlzLmhhbmRsZU91dHNpZGVDbGljayA9IHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLmJpbmQodGhpcylcbiAgICB0aGlzLmZvY3VzSW5wdXQgPSB0aGlzLmZvY3VzSW5wdXQuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcylcbiAgfVxuXG4gIGFkZFZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLnVzZVZhbHVlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uVmFsdWVzQ2hhbmdlKHRoaXMucHJvcHMudmFsdWVzLmNvbmNhdChuZXdWYWx1ZSkpXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UodGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHRpb24gPT4gKG9wdGlvbi52YWx1ZSA9PT0gbmV3VmFsdWUudmFsdWVcbiAgICAgICAgICA/IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbiwgeyBkaXNhYmxlZDogdHJ1ZSB9KVxuICAgICAgICAgIDogb3B0aW9uKSkpXG4gICAgICB9XG5cbiAgICAgIC8vIFJlYWN0IHNldFN0YXRlIOaYr+W8guatpeeahO+8jOWmguaenOmDveaYr+eUqCBzdGF0ZSDnrqHnkIbliJnkvJrlh7rnjrDlkIzml7bosIPnlKggc2V0U3RhdGUg55qE5oOF5Ya177yM5LuO6ICM6YCg5oiQ6Zeu6aKYXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jbGVhcklucHV0VmFsdWUoKVxuICAgICAgfSwgMSlcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnN0YXlGb2N1c2VkID09PSAndW5kZWZpbmVkJyB8fCB0aGlzLnByb3BzLnN0YXlGb2N1c2VkICE9PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmZvY3VzSW5wdXQoKVxuICAgICAgfVxuICAgICAgdGhpcy5oaWRlT3B0aW9ucygpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMub25JbnB1dENoYW5nZShuZXdWYWx1ZS5uYW1lKVxuICAgICAgdGhpcy5oaWRlT3B0aW9ucygpXG4gICAgfVxuICB9XG5cbiAgc2hvd09wdGlvbnMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3B0aW9uczogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBoaWRlT3B0aW9ucygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dPcHRpb25zOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICByZW1vdmVWYWx1ZShpbmRleCkge1xuICAgIGxldCBuZXdWYWx1ZXMgPSBbXVxuICAgIGxldCByZW1vdmVkVmFsdWVcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIG5ld1ZhbHVlcyA9IHRoaXMucHJvcHMudmFsdWVzLnNsaWNlKDAsIHRoaXMucHJvcHMudmFsdWVzLmxlbmd0aCAtIDEpXG4gICAgICByZW1vdmVkVmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlc1t0aGlzLnByb3BzLnZhbHVlcy5sZW5ndGggLSAxXS52YWx1ZVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdWYWx1ZXMgPSB0aGlzLnByb3BzLnZhbHVlc1xuICAgICAgICAuZmlsdGVyKCh2LCBpKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlZFZhbHVlID0gdi52YWx1ZVxuICAgICAgICAgIHJldHVybiBpICE9PSBpbmRleFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UodGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHRpb24gPT4gKG9wdGlvbi52YWx1ZSA9PT0gcmVtb3ZlZFZhbHVlXG4gICAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9uLCB7IGRpc2FibGVkOiBmYWxzZSB9KVxuICAgICAgICA6IG9wdGlvbikpKVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25WYWx1ZXNDaGFuZ2UobmV3VmFsdWVzKVxuICB9XG5cbiAgY2xlYXJJbnB1dFZhbHVlKCkge1xuICAgIHRoaXMucHJvcHMub25JbnB1dENoYW5nZSgnJylcbiAgfVxuXG4gIGhhbmRsZUtleVByZXNzKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4ICYmICF0aGlzLnByb3BzLnZhbHVlICYmIHRoaXMucHJvcHMudmFsdWVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdGhpcy5yZW1vdmVWYWx1ZSgtMSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZShlKSB7XG4gICAgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKVxuICAgIGlmICgodGhpcy5wcm9wcy5vcHRpb25zIHx8IFtdKS5sZW5ndGggIT09IDApIHtcbiAgICAgIHRoaXMuc2hvd09wdGlvbnMoKVxuICAgIH1cbiAgfVxuXG4gIGZvY3VzSW5wdXQoKSB7XG4gICAgdGhpcy5pbnB1dC5mb2N1cygpXG4gIH1cblxuICBoYW5kbGVPdXRzaWRlQ2xpY2soZSkge1xuICAgIGlmIChpc0Rlc2NlbmRhbnQodGhpcy5pbnB1dFdyYXAsIGUudGFyZ2V0KSB8fCB0aGlzLmlucHV0V3JhcCA9PT0gZS50YXJnZXQpIHtcbiAgICAgIHRoaXMuZm9jdXNJbnB1dCgpXG4gICAgICB0aGlzLnNob3dPcHRpb25zKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlT3B0aW9ucygpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCBvcHRpb25zTG9hZGVkID0gKG5leHRQcm9wcy5vcHRpb25zIHx8IFtdKS5sZW5ndGggIT09IDAgJiYgKHRoaXMucHJvcHMub3B0aW9ucyB8fCBbXSkubGVuZ3RoID09PSAwXG4gICAgaWYgKG9wdGlvbnNMb2FkZWQgJiYgdGhpcy5zdGF0ZS5mb2N1cykge1xuICAgICAgdGhpcy5zaG93T3B0aW9ucygpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2spXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljaylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsLCB2YWx1ZXMsIG9uQWRkTmV3VmFsdWUsIG9taXRTZWxlY3RlZFZhbHVlc0Zyb21PcHRpb25zIH0gPSB0aGlzLnByb3BzXG5cbiAgICBsZXQgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlIHx8ICcnXG4gICAgbGV0IG9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnMgfHwgW11cblxuICAgIGxldCBpbnB1dFdpZHRoID0gdmFsdWVzLmxlbmd0aCA+IDAgPyAodmFsdWUubGVuZ3RoID09PSAwID8gMTYgOiB2YWx1ZS5sZW5ndGggKiAxNikgOiAnMTAwJSdcbiAgICBsZXQgcGxhY2Vob2xkZXIgPSB2YWx1ZXMubGVuZ3RoID4gMCA/ICcnIDogdGhpcy5wcm9wcy5wbGFjZWhvbGRlclxuXG4gICAgbGV0IGZpbHRlcmVkT3B0aW9ucyA9IG9wdGlvbnNcbiAgICAgIC5maWx0ZXIob3B0aW9uID0+IHtcbiAgICAgICAgaWYgKG9taXRTZWxlY3RlZFZhbHVlc0Zyb21PcHRpb25zKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWVPZlZhbHVlcyA9IF8ubWFwKHZhbHVlcywgJ3ZhbHVlJylcbiAgICAgICAgICByZXR1cm4gdmFsdWVPZlZhbHVlcy5pbmRleE9mKG9wdGlvbi52YWx1ZSkgPT09IC0xXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSlcblxuICAgIGNvbnN0IHNlbGVjdGl6ZUlucHV0U3R5bGVOYW1lID0gY2xhc3NuYW1lcyh7XG4gICAgICAnc2VsZWN0aXplLWlucHV0JzogdHJ1ZSxcbiAgICAgICdzZWxlY3RpemUtaW5wdXQtLWZvY3VzJzogdGhpcy5zdGF0ZS5mb2N1cyxcbiAgICAgICdzZWxlY3RpemUtaW5wdXQtLWVtcHR5JzogdmFsdWVzLmxlbmd0aCA9PT0gMFxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzZWxlY3RpemUtd3JhcFwiIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJyd9PlxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWwgPyAoXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPntsYWJlbH08L2xhYmVsPlxuICAgICAgICAgICkgOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlTmFtZT17c2VsZWN0aXplSW5wdXRTdHlsZU5hbWV9XG4gICAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmlucHV0V3JhcCA9IHJlZiB9IH1cbiAgICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWVzLm1hcCgodiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fSBzdHlsZU5hbWU9XCJzZWxlY3RpemUtdGFnXCI+XG4gICAgICAgICAgICAgICAgICB7di5uYW1lfVxuICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgc3R5bGVOYW1lPVwiaWNvbi1yZW1vdmVcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZShpbmRleClcbiAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBpbnB1dFdpZHRoIH19XG4gICAgICAgICAgICByZWY9e3JlZiA9PiB7IHRoaXMuaW5wdXQgPSByZWYgfSB9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICBvbkJsdXI9e2UgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IGZhbHNlIH0pXG4gICAgICAgICAgICB9IH1cbiAgICAgICAgICAgIG9uRm9jdXM9e2UgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IHRydWUgfSlcbiAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICBvbktleURvd249e2UgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZUtleVByZXNzKGUpXG4gICAgICAgICAgICB9IH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5zaG93T3B0aW9ucyAmJiAoZmlsdGVyZWRPcHRpb25zLmxlbmd0aCAhPT0gMCB8fCBvbkFkZE5ld1ZhbHVlKSA/IChcbiAgICAgICAgICAgIDx1bCBzdHlsZU5hbWU9XCJxdWVyeS1yZXN1bHRzXCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZE9wdGlvbnNcbiAgICAgICAgICAgICAgICAgIC5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZGlzYWJsZWRcIj57b3B0aW9uLm5hbWV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFZhbHVlKG9wdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25PcHRpb25DbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25PcHRpb25DbGljayhvcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e29wdGlvbi5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbkFkZE5ld1ZhbHVlID8gKFxuICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIG9uQWRkTmV3VmFsdWUodGhpcy5wcm9wcy52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZFwiPua3u+WKoCA8c3Ryb25nPnt0aGlzLnByb3BzLnZhbHVlfTwvc3Ryb25nPjwvbGk+XG4gICAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICApIDogbnVsbFxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuU2VsZWN0aXplSW5wdXRbJ2RlZmF1bHRQcm9wcyddID0ge1xuICBvbWl0U2VsZWN0ZWRWYWx1ZXNGcm9tT3B0aW9uczogdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RpemVJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9TZWxlY3RpemVJbnB1dC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI5NlxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2VsZWN0aXplLXdyYXBfM0FNQWkge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uc2VsZWN0aXplLWlucHV0XzE0YmdQIHtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdHJhbnNpdGlvbjogYWxsIDBzO1xcbiAgY3Vyc29yOiB0ZXh0O1xcbiAgYmFja2dyb3VuZDogI2ZmZjsgfVxcbiAgLnNlbGVjdGl6ZS1pbnB1dF8xNGJnUCBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBsaW5lLWhlaWdodDogMjJweDsgfVxcblxcbi5zZWxlY3RpemUtaW5wdXQtLWZvY3VzX1VuWjhCIHtcXG4gIGJvcmRlci1jb2xvcjogIzFCMjY3RjsgfVxcblxcbi5zZWxlY3RpemUtaW5wdXQtLWVtcHR5X3huN1V5IHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiA1cHggNXB4IDA7IH1cXG5cXG4uc2VsZWN0aXplLWlucHV0XzE0YmdQIGlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cXG5cXG4ucXVlcnktcmVzdWx0c19PZ0UydCB7XFxuICBtYXJnaW4tdG9wOiAtM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMzIpO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHotaW5kZXg6IDkwMDsgfVxcblxcbi5xdWVyeS1yZXN1bHRzX09nRTJ0IGxpIHtcXG4gIHBhZGRpbmc6IDAgN3B4O1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7IH1cXG4gIC5xdWVyeS1yZXN1bHRzX09nRTJ0IGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzFCMjY3RjtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG5cXG4uc2VsZWN0aXplLXRhZ18zYUQxMyB7XFxuICBiYWNrZ3JvdW5kOiAjMUIyNjdGO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogM3B4IDI1cHggM3B4IDVweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uaWNvbi1yZW1vdmVfMU83Rl8ge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDVweDtcXG4gIHRvcDogMnB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic2VsZWN0aXplLXdyYXBcIjogXCJzZWxlY3RpemUtd3JhcF8zQU1BaVwiLFxuXHRcInNlbGVjdGl6ZS1pbnB1dFwiOiBcInNlbGVjdGl6ZS1pbnB1dF8xNGJnUFwiLFxuXHRcInNlbGVjdGl6ZS1pbnB1dC0tZm9jdXNcIjogXCJzZWxlY3RpemUtaW5wdXQtLWZvY3VzX1VuWjhCXCIsXG5cdFwic2VsZWN0aXplLWlucHV0LS1lbXB0eVwiOiBcInNlbGVjdGl6ZS1pbnB1dC0tZW1wdHlfeG43VXlcIixcblx0XCJxdWVyeS1yZXN1bHRzXCI6IFwicXVlcnktcmVzdWx0c19PZ0UydFwiLFxuXHRcInNlbGVjdGl6ZS10YWdcIjogXCJzZWxlY3RpemUtdGFnXzNhRDEzXCIsXG5cdFwiaWNvbi1yZW1vdmVcIjogXCJpY29uLXJlbW92ZV8xTzdGX1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjk3XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJpbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9UZXh0YXJlYSdcbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb3BzIGFzIElucHV0UHJvcHMgfSBmcm9tICcuLi9JbnB1dC9JbnB1dCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9UZXh0YXJlYS5jc3MnKVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSW5wdXRQcm9wcyB7XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cInRleHRhcmVhLXdyYXBcIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnfT5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKVxuICAgICAgICAgIH19XG4gICAgICAgICAgc3R5bGVOYW1lPVwidGV4dGFyZWFcIlxuICAgICAgICAgIHR5cGU9e3RoaXMucHJvcHMudHlwZSA/IHRoaXMucHJvcHMudHlwZSA6ICd0ZXh0J31cbiAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLm5hbWUgPyB0aGlzLnByb3BzLm5hbWUgOiBudWxsfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL1RleHRhcmVhLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLmNzc1xuICoqIG1vZHVsZSBpZCA9IDMwMFxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIXN0eWxlcy92YXJpYWJsZXMuY3NzXCIpLCBcIlwiKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGV4dGFyZWEtd3JhcF9Ya3BqMSB7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRleHRhcmVhXzFFZG9TIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheSk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuM3M7XFxufVxcblxcbi50ZXh0YXJlYV8xRWRvUzpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ0ZXh0YXJlYS13cmFwXCI6IFwidGV4dGFyZWEtd3JhcF9Ya3BqMVwiLFxuXHRcInRleHRhcmVhXCI6IFwidGV4dGFyZWFfMUVkb1NcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vcG9zdGNzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEuY3NzXG4gKiogbW9kdWxlIGlkID0gMzAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJpbXBvcnQgY3JlYXRlRm9ybSBmcm9tICcuL2NyZWF0ZUZvcm0nXG5cbmV4cG9ydCBjb25zdCBmb3JtID0gY3JlYXRlRm9ybVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZm9ybS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMnXG5cbmNvbnN0IGZvcm1BY3Rpb25zID0gYWN0aW9ucy5mb3JtXG5cbmludGVyZmFjZSBGb3JtQ29uZmlnIHtcbiAgZm9ybTogc3RyaW5nXG4gIGZpZWxkczogc3RyaW5nW11cbiAgdmFsaWRhdGU/OiAodmFsdWVzOiBhbnkpID0+IGFueVxuICBkZXN0cm95T25Vbm1vdW50PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgRm9ybVByb3BzIHtcbiAgY2hhbmdlOiBhY3Rpb25zLmNoYW5nZVxuICB0b3VjaDogYWN0aW9ucy50b3VjaFxuICBkZWZpbmVGaWVsZDogYWN0aW9ucy5kZWZpbmVGaWVsZFxuICBkZXN0cm95OiBhY3Rpb25zLmRlc3Ryb3lcbiAgZm9ybTogYW55XG4gIGZvcm1WYWx1ZXM6IGFueVxuICBmb3JtTWV0YTogYW55XG4gIGZvcm1EZWZpbml0aW9uOiBhbnlcbn1cblxuY2xhc3MgRWxlbWVudENsYXNzIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG59XG5cbmludGVyZmFjZSBDbGFzc0RlY29yYXRvciB7XG4gIDxUIGV4dGVuZHMgKHR5cGVvZiBFbGVtZW50Q2xhc3MpPihjb25maWc6IEZvcm1Db25maWcpOiBUXG59XG5cbmNvbnN0IHZhbGlkYXRlRm9ybSA9IChmaWVsZHMsIGZvcm1WYWx1ZXMsIHZhbGlkYXRlRm4pID0+IHtcbiAgaWYgKHZhbGlkYXRlRm4pIHtcbiAgICBjb25zdCBlcnJvcnMgPSB2YWxpZGF0ZUZuKGZvcm1WYWx1ZXMpXG5cbiAgICBpZiAoIV8uaXNFbXB0eShlcnJvcnMpKSB7XG4gICAgICBjb25zdCBmaWVsZHNXaXRoRXJyb3JzID0gXy5tYXBWYWx1ZXMoZXJyb3JzLCB2YWwgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVycm9yOiB2YWxcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmllbGRzOiBfLm1lcmdlKHt9LCBmaWVsZHMsIGZpZWxkc1dpdGhFcnJvcnMpLFxuICAgICAgICBoYXNFcnJvcjogdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGZpZWxkcywgaGFzRXJyb3I6IGZhbHNlIH1cbn1cblxuY29uc3QgY3JlYXRlRm9ybTogQ2xhc3NEZWNvcmF0b3IgPSAoY29uZmlnOiBGb3JtQ29uZmlnKSA9PiB7XG4gIGNvbnN0IHsgZmllbGRzOiBmaWVsZHNBcnIsIGZvcm06IGZvcm1OYW1lLCB2YWxpZGF0ZSwgZGVzdHJveU9uVW5tb3VudCB9ID0gY29uZmlnXG5cbiAgcmV0dXJuIFdyYXBwZWRDb21wb25lbnQgPT4ge1xuICAgIGNsYXNzIEZvcm0gZXh0ZW5kcyBDb21wb25lbnQ8Rm9ybVByb3BzLCB7fT4ge1xuXG4gICAgICBjcmVhdGVGaWVsZCh2YWx1ZSwga2V5KSB7XG4gICAgICAgIGNvbnN0IHsgY2hhbmdlIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgICAgY29uc3Qgc2V0RmllbGRWYWx1ZSA9IHZhbCA9PiB7XG4gICAgICAgICAgbGV0IG5ld1ZhbCA9IHZhbFxuICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiB2YWwudGFyZ2V0KSB7XG4gICAgICAgICAgICBuZXdWYWwgPSB2YWwudGFyZ2V0LnZhbHVlIHx8ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIGNoYW5nZShmb3JtTmFtZSwga2V5LCBuZXdWYWwsIGZhbHNlLCBmYWxzZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHtcbiAgICAgICAgICBvbkNoYW5nZTogdmFsID0+IHNldEZpZWxkVmFsdWUodmFsKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBba2V5XToge1xuICAgICAgICAgICAgZ2V0OiAoZGVmYXVsdFZhbD8pID0+IHZhbHVlIHx8IGRlZmF1bHRWYWwgfHwgJycsXG4gICAgICAgICAgICBzZXQ6IGV2ZW50cy5vbkNoYW5nZSxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgb25DaGFuZ2U6IGV2ZW50cy5vbkNoYW5nZSxcbiAgICAgICAgICAgIGV2ZW50c1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgeyBkZWZpbmVGaWVsZCB9ID0gdGhpcy5wcm9wc1xuICAgICAgICBmaWVsZHNBcnIuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgZGVmaW5lRmllbGQoZm9ybU5hbWUsIGZpZWxkKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgLy8gVE9ET1xuICAgICAgICAvLyDnlJ/miJDniYjmnKznmoQgUmVhY3Qg5Lya5Zyo5Yid5aeL5YyW5pe25omn6KGM5LiA5qyhIHVubW91bnQg5bCa5pyq5p+l5piO5Y6f5ZugXG4gICAgICAgIGlmIChkZXN0cm95T25Vbm1vdW50KSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5kZXN0cm95KGZvcm1OYW1lKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGRlY29yYXRlZEZpZWxkc1xuICAgICAgICBjb25zdCB7IHRvdWNoLCBmb3JtVmFsdWVzLCBmb3JtRGVmaW5pdGlvbiwgZm9ybU1ldGEgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICBjb25zdCBmaWVsZHNPYmpBcnIgPSBfLm1hcChmaWVsZHNBcnIsIGtleSA9PiB7XG4gICAgICAgICAgY29uc3QgZmllbGRWYWx1ZSA9IGZvcm1WYWx1ZXNba2V5XSB8fCAnJ1xuICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUZpZWxkKGZpZWxkVmFsdWUsIGtleSlcbiAgICAgICAgfSlcblxuICAgICAgICBmaWVsZHNPYmpBcnIuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgZGVjb3JhdGVkRmllbGRzID0gXy5hc3NpZ24oe30sIGRlY29yYXRlZEZpZWxkcywgZmllbGQpXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IGNvbGxlY3RlZFZhbHVlcyA9IHt9XG4gICAgICAgIGZvcm1EZWZpbml0aW9uLmZvckVhY2goZGVmID0+IHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBkZWYubmFtZVxuICAgICAgICAgIGNvbGxlY3RlZFZhbHVlc1trZXldID0gZm9ybVZhbHVlc1trZXldXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgeyBmaWVsZHM6IGZpZWxkc1dpdGhFcnJvciwgaGFzRXJyb3IgfSA9IHZhbGlkYXRlRm9ybShkZWNvcmF0ZWRGaWVsZHMsIGNvbGxlY3RlZFZhbHVlcywgdmFsaWRhdGUpXG4gICAgICAgIGRlY29yYXRlZEZpZWxkcyA9IGZpZWxkc1dpdGhFcnJvclxuICAgICAgICBkZWNvcmF0ZWRGaWVsZHMgPSBfLm1lcmdlKHt9LCBkZWNvcmF0ZWRGaWVsZHMsIGZvcm1NZXRhKVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGZuID0+IHtcbiAgICAgICAgICByZXR1cm4gZSA9PiB7XG4gICAgICAgICAgICB0b3VjaChmb3JtTmFtZSwgZm9ybURlZmluaXRpb24ubWFwKGRlZiA9PiBkZWYubmFtZSkpXG4gICAgICAgICAgICBpZiAoIWhhc0Vycm9yKSB7XG4gICAgICAgICAgICAgIGZuKGNvbGxlY3RlZFZhbHVlcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBfLmFzc2lnbih7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICAgIGZpZWxkczogZGVjb3JhdGVkRmllbGRzLFxuICAgICAgICAgIGhhbmRsZVN1Ym1pdFxuICAgICAgICB9KSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29ubmVjdChcbiAgICAgIHN0YXRlID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBmb3JtOiBzZWxlY3RvcnMuZm9ybS5mdWxsRm9ybShmb3JtTmFtZSkoc3RhdGUpLFxuICAgICAgICAgIGZvcm1WYWx1ZXM6IHNlbGVjdG9ycy5mb3JtLmZvcm1WYWx1ZXMoZm9ybU5hbWUpKHN0YXRlKSxcbiAgICAgICAgICBmb3JtRGVmaW5pdGlvbjogc2VsZWN0b3JzLmZvcm0uZm9ybURlZmluaXRpb24oZm9ybU5hbWUpKHN0YXRlKSxcbiAgICAgICAgICBmb3JtTWV0YTogc2VsZWN0b3JzLmZvcm0uZm9ybU1ldGEoZm9ybU5hbWUpKHN0YXRlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZm9ybUFjdGlvbnNcbiAgICApKEZvcm0gYXMgYW55KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvcm1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2Zvcm0vY3JlYXRlRm9ybS50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgb3Blbk1vZGFsLCBzZWFyY2hEb3ViYW5Cb29rcywgY2xvc2VNb2RhbCwgZmV0Y2hBdXRob3JzLCByZXNldCwgaW5pdGlhbGl6ZSB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaSdcbmltcG9ydCBEb2NDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Eb2NDb250YWluZXInXG5pbXBvcnQgQWRkQm9va0Zvcm0gZnJvbSAnLi9jb21wb25lbnRzL0FkZEJvb2tGb3JtJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBlbGVtZW50cz86IGFueVxuICBjaGFuZ2VWYWx1ZT86IGFueVxuICBzZW5kTm90aWZpY2F0aW9uPzogYW55XG4gIG9wZW5Nb2RhbD86IChkYXRhOiBvcGVuTW9kYWwpID0+IHZvaWRcbiAgc2VhcmNoRG91YmFuQm9va3M/OiBhbnlcbiAgY2xvc2VNb2RhbD86IGFueVxuICBmZXRjaEF1dGhvcnM/OiBhbnlcbiAgcmVzZXQ/OiByZXNldFxuICBmZXRjaERvdWJhbkJvb2tzOiBhbnlcbiAgaW5pdGlhbGl6ZT86IGluaXRpYWxpemVcbn1cblxuY2xhc3MgQWRkQm9vayBleHRlbmRzIENvbXBvbmVudDxQcm9wcywge30+IHtcblxuICBkZWZhdWx0U3RhdGU6IHt9XG4gIGZldGNoRG91YmFuQm9va3M6IGFueVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNsRGF0YToge1xuICAgICAgICBhdXRob3I6IHt9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVUaXRsZVZhbHVlQ2hhbmdlID0gdGhpcy5oYW5kbGVUaXRsZVZhbHVlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUF1dGhvclZhbHVlQ2hhbmdlID0gdGhpcy5oYW5kbGVBdXRob3JWYWx1ZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5hZGRBdXRob3IgPSB0aGlzLmFkZEF1dGhvci5iaW5kKHRoaXMpXG4gICAgdGhpcy5hZGRCb29rID0gdGhpcy5hZGRCb29rLmJpbmQodGhpcylcbiAgfVxuXG4gIGFkZEJvb2soZGF0YSkge1xuICAgIGFwaS5hZGRCb29rKGRhdGEpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5re75Yqg5oiQ5YqfJylcbiAgICAgIHRoaXMucHJvcHMucmVzZXQoJ2FkZEJvb2snKVxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbihlcnJvci5tZXNzYWdlLCAnZXJyb3InLCAwKVxuICAgIH0pXG4gIH1cblxuICBhZGRBdXRob3IoZGF0YSkge1xuICAgIGFwaS5hZGRBdXRob3IoZGF0YSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKCfmt7vliqDmiJDlip8nKVxuICAgICAgY29uc3QgaWQgPSByZXN1bHQuanNvbi5vcHNbMF0uX2lkXG4gICAgICBjb25zdCBuYW1lID0gcmVzdWx0Lmpzb24ub3BzWzBdLm5hbWVcbiAgICAgIHRoaXMucHJvcHMuaW5pdGlhbGl6ZSgnYWRkQm9vaycsIHtcbiAgICAgICAgYXV0aG9yczogW3tcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHZhbHVlOiBpZFxuICAgICAgICB9XSxcbiAgICAgICAgYXV0aG9yOiAnJ1xuICAgICAgfSlcbiAgICAgIHRoaXMucHJvcHMuY2xvc2VNb2RhbCgpXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKGVycm9yLm1lc3NhZ2UsICdlcnJvcicpXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUF1dGhvclZhbHVlQ2hhbmdlKHF1ZXJ5KSB7XG4gICAgaWYgKCFfLmlzRW1wdHkocXVlcnkpKSB7XG4gICAgICB0aGlzLnByb3BzLmZldGNoQXV0aG9ycyh7XG4gICAgICAgIHE6IHF1ZXJ5XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVRpdGxlVmFsdWVDaGFuZ2UobmV3VmFsKSB7XG4gICAgaWYgKCFfLmlzRW1wdHkobmV3VmFsKSkge1xuICAgICAgdGhpcy5wcm9wcy5zZWFyY2hEb3ViYW5Cb29rcyhuZXdWYWwpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RG9jQ29udGFpbmVyIHRpdGxlPVwi5re75Yqg5Lmm57GNXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+5re75Yqg5Lmm57GNPC9oMT5cbiAgICAgICAgPEFkZEJvb2tGb3JtXG4gICAgICAgICAgb25UaXRsZUlucHV0Q2hhbmdlPXt0aGlzLmhhbmRsZVRpdGxlVmFsdWVDaGFuZ2V9XG4gICAgICAgICAgb25BdXRob3JJbnB1dENoYW5nZT17dGhpcy5oYW5kbGVBdXRob3JWYWx1ZUNoYW5nZX1cbiAgICAgICAgICBvblNhdmVBdXRob3I9e3RoaXMuYWRkQXV0aG9yfVxuICAgICAgICAgIG9uU2F2ZUJvb2s9e3RoaXMuYWRkQm9va31cbiAgICAgICAgICAvPlxuICAgICAgPC9Eb2NDb250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBub3RpZmljYXRpb246IHN0YXRlLmNvbXBvbmVudHMubm90aWZpY2F0aW9uLFxuICAgIGVsZW1lbnRzOiBzdGF0ZS5lbGVtZW50c1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgeyBzZW5kTm90aWZpY2F0aW9uLCBvcGVuTW9kYWwsIHNlYXJjaERvdWJhbkJvb2tzLCBjbG9zZU1vZGFsLCBmZXRjaEF1dGhvcnMsIHJlc2V0LCBpbml0aWFsaXplIH1cbikoQWRkQm9vayBhcyBhbnkpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQm9vay9BZGRCb29rLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGZvcm0gfSBmcm9tICcuLi8uLi8uLi9mb3JtJ1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgb3Blbk1vZGFsLCBpbml0aWFsaXplIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi8uLi9zdG9yZS9zZWxlY3RvcnMnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvX2Zvcm0vSW5wdXQnXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEnXG5pbXBvcnQgeyBCdXR0b24sIFNlbGVjdGl6ZUlucHV0IH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvX2Zvcm0nXG5pbXBvcnQgQWRkQXV0aG9yRm9ybSBmcm9tICcuL0FkZEF1dGhvckZvcm0nXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9uVGl0bGVJbnB1dENoYW5nZT86IChuZXdWYWw6IHN0cmluZykgPT4gdm9pZFxuICBvbkF1dGhvcklucHV0Q2hhbmdlPzogKG5ld1ZhbDogc3RyaW5nKSA9PiB2b2lkXG4gIG9uU2F2ZUF1dGhvcjogKGRhdGE6IGFueSkgPT4gdm9pZFxuICBvblNhdmVCb29rOiAoZGF0YTogYW55KSA9PiB2b2lkXG4gIGluaXRpYWxpemU/OiBpbml0aWFsaXplXG59XG5cbmludGVyZmFjZSBBbGxQcm9wcyBleHRlbmRzIFByb3BzIHtcbiAgcm91dGluZzogYW55XG4gIHNlbmROb3RpZmljYXRpb246IGFueVxuICBoYW5kbGVTdWJtaXQ6IGFueVxuICBmaWVsZHM6IGFueVxuICBkb3ViYW5Cb29rc0FzT3B0aW9uczogYW55W11cbiAgYXV0aG9yc0FzT3B0aW9uczogYW55W11cbiAgb3Blbk1vZGFsOiAoZGF0YTogb3Blbk1vZGFsKSA9PiB2b2lkXG59XG5cbkBmb3JtKHtcbiAgZm9ybTogJ2FkZEJvb2snLFxuICBmaWVsZHM6IFsndGl0bGUnLCAnYXV0aG9yJywgJ2F1dGhvcnMnLCAnY292ZXInLCAnZGVzY3JpcHRpb24nLCAnY29udGVudCddLFxuICBkZXN0cm95T25Vbm1vdW50OiB0cnVlXG59KVxuY2xhc3MgQWRkQm9va0Zvcm0gZXh0ZW5kcyBDb21wb25lbnQ8QWxsUHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmhhbmRsZVRpdGxlT3B0aW9uQ2xpY2sgPSB0aGlzLmhhbmRsZVRpdGxlT3B0aW9uQ2xpY2suYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlQWRkTmV3QXV0aG9yID0gdGhpcy5oYW5kbGVBZGROZXdBdXRob3IuYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlVGl0bGVPcHRpb25DbGljayhvcHRpb24pIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgY292ZXI6IG9wdGlvbi5hZGRpdGlvbmFsLmNvdmVyLFxuICAgICAgZGVzY3JpcHRpb246IG9wdGlvbi5hZGRpdGlvbmFsLmRlc2NyaXB0aW9uLFxuICAgICAgYXV0aG9yOiBvcHRpb24uYWRkaXRpb25hbC5hdXRob3JcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5pbml0aWFsaXplKCdhZGRCb29rJywgZGF0YSlcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNsQXV0aG9yOiB7XG4gICAgICAgIHZhbHVlOiBvcHRpb24uYWRkaXRpb25hbC5hdXRob3IsXG4gICAgICAgIHZhbHVlczogW11cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlQWRkTmV3QXV0aG9yKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5vcGVuTW9kYWwoe1xuICAgICAgdGl0bGU6ICfmt7vliqDkvZzogIUnLFxuICAgICAgY29udGVudDogPEFkZEF1dGhvckZvcm1cbiAgICAgICAgb25TYXZlPXt0aGlzLnByb3BzLm9uU2F2ZUF1dGhvcn1cbiAgICAgICAgLz5cbiAgICB9KVxuICAgIHRoaXMucHJvcHMuaW5pdGlhbGl6ZSgnYWRkQXV0aG9yJywgeyBuYW1lOiB2YWx1ZSB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZpZWxkczoge1xuICAgICAgICB0aXRsZSwgYXV0aG9yLCBhdXRob3JzLCBjb3ZlciwgZGVzY3JpcHRpb24sIGNvbnRlbnRcbiAgICAgIH0sXG4gICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICBvblRpdGxlSW5wdXRDaGFuZ2UsXG4gICAgICBvbkF1dGhvcklucHV0Q2hhbmdlLFxuICAgICAgZG91YmFuQm9va3NBc09wdGlvbnMsXG4gICAgICBhdXRob3JzQXNPcHRpb25zLFxuICAgICAgb25TYXZlQm9vayxcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRBdXRob3JJZHMgPSBhdXRob3JzLmdldChbXSkubWFwKGEgPT4gYS52YWx1ZSlcbiAgICBjb25zdCBmaWx0ZXJlZEF1dGhvck9wdGlvbnMgPSBhdXRob3JzQXNPcHRpb25zLmZpbHRlcihhID0+IHtcbiAgICAgIHJldHVybiBzZWxlY3RlZEF1dGhvcklkcy5pbmRleE9mKGEudmFsdWUpID09PSAtMVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlbGVjdGl6ZUlucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLkuablkI1cIlxuICAgICAgICAgIHZhbHVlPXt0aXRsZS52YWx1ZX1cbiAgICAgICAgICB2YWx1ZXM9e1tdfVxuICAgICAgICAgIG9wdGlvbnM9e2RvdWJhbkJvb2tzQXNPcHRpb25zfVxuICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9e25ld1ZhbHVlID0+IHtcbiAgICAgICAgICAgIG9uVGl0bGVJbnB1dENoYW5nZShuZXdWYWx1ZSlcbiAgICAgICAgICAgIHRpdGxlLnNldChuZXdWYWx1ZSlcbiAgICAgICAgICB9IH1cbiAgICAgICAgICB1c2VWYWx1ZVxuICAgICAgICAgIG9uT3B0aW9uQ2xpY2s9e3RoaXMuaGFuZGxlVGl0bGVPcHRpb25DbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICA8U2VsZWN0aXplSW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuS9nOiAhVwiXG4gICAgICAgICAgdmFsdWU9e2F1dGhvci5nZXQoKX1cbiAgICAgICAgICB2YWx1ZXM9e2F1dGhvcnMuZ2V0KFtdKX1cbiAgICAgICAgICBvcHRpb25zPXtmaWx0ZXJlZEF1dGhvck9wdGlvbnN9XG4gICAgICAgICAgb25JbnB1dENoYW5nZT17bmV3VmFsdWUgPT4ge1xuICAgICAgICAgICAgb25BdXRob3JJbnB1dENoYW5nZShuZXdWYWx1ZSlcbiAgICAgICAgICAgIGF1dGhvci5zZXQobmV3VmFsdWUpXG4gICAgICAgICAgfSB9XG4gICAgICAgICAgb25WYWx1ZXNDaGFuZ2U9e2F1dGhvcnMub25DaGFuZ2V9XG4gICAgICAgICAgb25BZGROZXdWYWx1ZT17dGhpcy5oYW5kbGVBZGROZXdBdXRob3J9XG4gICAgICAgICAgLz5cbiAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwi5bCB6Z2i5Zu+54mH5Zyw5Z2AXCIgey4uLmNvdmVyfSAvPlxuICAgICAgICA8VGV4dGFyZWEgcGxhY2Vob2xkZXI9XCLmj4/ov7BcIiB7Li4uZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxUZXh0YXJlYSBwbGFjZWhvbGRlcj1cIuWcqOatpOeymOi0tOS5puexjeWGheWuuSAobWFya2Rvd24g5qC85byPKVwiIHsuLi5jb250ZW50fSAvPlxuXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0KGRhdGEgPT4ge1xuICAgICAgICAgIGNvbnN0IHBvc3REYXRhID0gXy5vbWl0KGRhdGEsIFsnYXV0aG9yJ10pXG4gICAgICAgICAgcG9zdERhdGFbJ2F1dGhvcnMnXSA9IF8ubWFwKHBvc3REYXRhWydhdXRob3JzJ10sICd2YWx1ZScpXG4gICAgICAgICAgb25TYXZlQm9vayhwb3N0RGF0YSlcbiAgICAgICAgfSl9Pua3u+WKoDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMsXG4gICAgZG91YmFuQm9va3NBc09wdGlvbnM6IHNlbGVjdG9ycy5kb3ViYW5Cb29rc0FzT3B0aW9ucygnc2VhcmNoJykoc3RhdGUpLFxuICAgIGF1dGhvcnNBc09wdGlvbnM6IHNlbGVjdG9ycy5hdXRob3JzQXNPcHRpb25zKCdzZWFyY2gnKShzdGF0ZSksXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDx7fSwge30sIFByb3BzPihcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICB7IHNlbmROb3RpZmljYXRpb24sIG9wZW5Nb2RhbCwgaW5pdGlhbGl6ZSB9XG4pKEFkZEJvb2tGb3JtKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL0FkZEJvb2svY29tcG9uZW50cy9BZGRCb29rRm9ybS50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBmb3JtIH0gZnJvbSAnLi4vLi4vLi4vZm9ybSdcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24sIGNsb3NlTW9kYWwgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IElucHV0IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL19mb3JtL0lucHV0J1xuaW1wb3J0IE1vZGFsRm9vdGVyIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL01vZGFsL01vZGFsRm9vdGVyJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvblNhdmU6IChkYXRhOiBhbnkpID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIEFsbFByb3BzIGV4dGVuZHMgUHJvcHMge1xuICBzZW5kTm90aWZpY2F0aW9uOiBhbnlcbiAgaGFuZGxlU3VibWl0OiBhbnlcbiAgZmllbGRzOiBhbnlcbiAgY2xvc2VNb2RhbDogKCkgPT4gdm9pZFxufVxuXG5AZm9ybSh7XG4gIGZvcm06ICdhZGRBdXRob3InLFxuICBmaWVsZHM6IFsnbmFtZScsICdzbHVnJywgJ2Rlc2NyaXB0aW9uJ11cbn0pXG5jbGFzcyBBZGRBdXRob3JGb3JtIGV4dGVuZHMgQ29tcG9uZW50PEFsbFByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZmllbGRzOiB7IG5hbWUsIHNsdWcsIGRlc2NyaXB0aW9uIH0sXG4gICAgICBoYW5kbGVTdWJtaXQsIGNsb3NlTW9kYWwsIG9uU2F2ZVxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwi5ZCN5a2XXCIgey4uLm5hbWV9IC8+XG4gICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIuWUr+S4gOagh+ivhlwiIHsuLi5zbHVnfSAvPlxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCLmj4/ov7BcIiB7Li4uZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxNb2RhbEZvb3RlclxuICAgICAgICAgIG9uQ29uZmlybT17aGFuZGxlU3VibWl0KGRhdGEgPT4ge1xuICAgICAgICAgICAgb25TYXZlKGRhdGEpXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgb25DYW5jZWw9e2Nsb3NlTW9kYWx9XG4gICAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PHt9LCB7fSwgUHJvcHM+KFxuICBzdGF0ZSA9PiBzdGF0ZSxcbiAgeyBzZW5kTm90aWZpY2F0aW9uLCBjbG9zZU1vZGFsIH1cbikoQWRkQXV0aG9yRm9ybSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9BZGRCb29rL2NvbXBvbmVudHMvQWRkQXV0aG9yRm9ybS50c3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9