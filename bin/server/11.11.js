exports.ids = [11];
exports.modules = {

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Textarea = exports.SelectizeInput = exports.Input = exports.Button = undefined;
	
	var _Button = __webpack_require__(378);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Input = __webpack_require__(467);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _SelectizeInput = __webpack_require__(471);
	
	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);
	
	var _Textarea = __webpack_require__(475);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Button = _Button2.default;
	exports.Input = _Input2.default;
	exports.SelectizeInput = _SelectizeInput2.default;
	exports.Textarea = _Textarea2.default;

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Input = __webpack_require__(468);
	
	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Input2.default;

/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(292);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _classnames = __webpack_require__(290);
	
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
	
	var styles = __webpack_require__(469);
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

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(470);
	    var insertCss = __webpack_require__(296);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(295)();
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

/***/ 471:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _SelectizeInput = __webpack_require__(472);
	
	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SelectizeInput2.default;

/***/ },

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Icon = __webpack_require__(288);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _classnames = __webpack_require__(290);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(292);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _isDescendant = __webpack_require__(392);
	
	var _isDescendant2 = _interopRequireDefault(_isDescendant);
	
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
	
	var styles = __webpack_require__(473);
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
	            if (e.keyCode === 8 && !this.props.value) {
	                this.removeValue(-1);
	            }
	            // todo
	            // if (e.keyCode === 13 && this.state.showOptions) {
	            //   this.addValue()
	            // }
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
	
	            var value = this.props.value || '';
	            var options = this.props.options || [];
	            var inputWidth = values.length > 0 ? value.length === 0 ? 16 : value.length * 16 : '100%';
	            var placeholder = values.length > 0 ? '' : this.props.placeholder;
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
	                } })), this.state.showOptions && (options.length !== 0 || onAddNewValue) ? _react2.default.createElement("ul", { styleName: "query-results" }, options.map(function (option, index) {
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
	exports.default = SelectizeInput;

/***/ },

/***/ 473:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(474);
	    var insertCss = __webpack_require__(296);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(295)();
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

/***/ 475:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Textarea = __webpack_require__(476);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Textarea2.default;

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(292);
	
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
	
	var styles = __webpack_require__(477);
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

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(478);
	    var insertCss = __webpack_require__(296);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(295)();
	// imports
	exports.i(__webpack_require__(408), "");
	
	// module
	exports.push([module.id, ".textarea-wrap_Xkpj1 {\n  margin: 10px 0;\n  position: relative;\n}\n\n.textarea_1EdoS {\n  width: 100%;\n  padding: 5px;\n  border: 1px solid var(--gray);\n  outline: none;\n  height: 100px;\n  transition: border-color .3s;\n}\n\n.textarea_1EdoS:focus {\n  border-color: var(--blue);\n}\n", ""]);
	
	// exports
	exports.locals = {
		"textarea-wrap": "textarea-wrap_Xkpj1",
		"textarea": "textarea_1EdoS"
	};

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Tabs = exports.Tab = undefined;
	
	var _Tab = __webpack_require__(522);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _Tabs = __webpack_require__(523);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Tab = _Tab2.default;
	exports.Tabs = _Tabs2.default;
	exports.default = _Tab2.default;

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tab = function (_Component) {
	    _inherits(Tab, _Component);
	
	    function Tab(props) {
	        _classCallCheck(this, Tab);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).call(this, props));
	    }
	
	    _createClass(Tab, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement("div", { className: "tab" }, this.props.children);
	        }
	    }]);
	
	    return Tab;
	}(_react.Component);
	
	exports.default = Tab;

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(290);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(292);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
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
	
	var styles = __webpack_require__(524);
	var Tabs = function (_Component) {
	    _inherits(Tabs, _Component);
	
	    function Tabs(props) {
	        _classCallCheck(this, Tabs);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).call(this, props));
	
	        _this.state = {
	            active: _this.props.defaultActive
	        };
	        _this.handleTabClick = _this.handleTabClick.bind(_this);
	        return _this;
	    }
	
	    _createClass(Tabs, [{
	        key: "handleTabClick",
	        value: function handleTabClick(index) {
	            this.setState({
	                active: index
	            });
	            if (this.props.onTabSwitch) {
	                this.props.onTabSwitch(index);
	            }
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var style = this.props.style;
	
	            return _react2.default.createElement("div", __assign({ className: "tabs" }, style ? { style: style } : null), _react2.default.createElement("div", { styleName: "tabs-header" }, _react2.default.createElement("ul", null, this.props.children.map(function (child, index) {
	                return _react2.default.createElement("li", { styleName: (0, _classnames2.default)({ 'active': index === _this2.state.active }), key: index, onClick: _this2.handleTabClick.bind(_this2, index) }, child.props.title);
	            }))), this.props.children.filter(function (child, index) {
	                return index === _this2.state.active;
	            }).map(function (child) {
	                return child.props.children;
	            })[0]);
	        }
	    }]);
	
	    return Tabs;
	}(_react.Component);
	Tabs = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], Tabs);
	Tabs.defaultProps = {
	    defaultActive: 0
	};
	exports.default = Tabs;

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(525);
	    var insertCss = __webpack_require__(296);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(295)();
	// imports
	
	
	// module
	exports.push([module.id, ".tabs-header_y5nSI {\n  margin-bottom: 15px;\n  font-size: 1.2rem; }\n  .tabs-header_y5nSI ul {\n    border-bottom: 1px solid #ddd; }\n    .tabs-header_y5nSI ul li {\n      margin-bottom: -2px;\n      display: inline-block;\n      margin-right: 15px;\n      cursor: pointer;\n      padding: 10px 0; }\n      .tabs-header_y5nSI ul li.active_3bbAo {\n        font-weight: bold;\n        color: #1B267F;\n        border-bottom: 2px solid #1B267F; }\n", ""]);
	
	// exports
	exports.locals = {
		"tabs-header": "tabs-header_y5nSI",
		"active": "active_3bbAo"
	};

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(243);
	
	var _actions = __webpack_require__(251);
	
	var _form = __webpack_require__(466);
	
	var _Tab = __webpack_require__(521);
	
	var _Container = __webpack_require__(389);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	var _reactCssModules = __webpack_require__(292);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _lodash = __webpack_require__(9);
	
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
	
	var styles = __webpack_require__(534);
	var Profile = function (_Component) {
	    _inherits(Profile, _Component);
	
	    // static fetchData({store, params}) {
	    //   return store.dispatch(fetch())
	    // }
	
	    function Profile(props) {
	        _classCallCheck(this, Profile);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Profile).call(this, props));
	    }
	
	    _createClass(Profile, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            // this.props.fetchBooks()
	            this.props.fetchProfile();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var username = this.props.profile.username;
	
	            return _react2.default.createElement(_Container2.default, null, _react2.default.createElement("div", { styleName: "profile" }, _react2.default.createElement("div", { styleName: "page-header" }, _react2.default.createElement("div", { styleName: "user-avatar" }, _react2.default.createElement("img", { src: "https://img3.doubanio.com/icon/ul43646706-43.jpg", alt: "user_avatar" })), _react2.default.createElement("span", { styleName: "username" }, username), _react2.default.createElement("span", { styleName: "tagline" }, "暂无签名"), _react2.default.createElement(_form.Button, { onClick: function onClick() {
	                    _this2.props.sendNotification('该功能尚不可用', 'warning');
	                }, styleName: "edit" }, "编辑")), _react2.default.createElement(_Tab.Tabs, null, _react2.default.createElement(_Tab.Tab, { title: "收藏" }, "暂无数据"), _react2.default.createElement(_Tab.Tab, { title: "读过" }, "暂无数据"))));
	        }
	    }]);
	
	    return Profile;
	}(_react.Component);
	Profile = __decorate([(0, _reactCssModules2.default)(styles)], Profile);
	function mapStateToProps(state, ownProps) {
	    return {
	        newestBooks: state.pagination.books.newest ? state.pagination.books.newest.ids.map(function (id) {
	            return state.entities.books[id];
	        }) : [],
	        profile: _lodash2.default.get(state.payloads, 'profile', {})
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, fetchBooks: _actions.fetchBooks, fetchCollections: _actions.fetchCollections, fetchProfile: _actions.fetchProfile })(Profile);

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(535);
	    var insertCss = __webpack_require__(296);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(295)();
	// imports
	
	
	// module
	exports.push([module.id, ".profile_28CdI {\n  min-height: 500px;\n  position: relative; }\n\n.page-header_Paj4H {\n  text-align: center;\n  margin: 30px 0; }\n  .page-header_Paj4H span {\n    display: block; }\n\n.username_2WC6D {\n  margin-top: 20px;\n  font-size: 1.6rem;\n  font-weight: bold;\n  color: #333; }\n\n.edit_3MJW3 {\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.user-avatar_2vc2X {\n  width: 160px;\n  height: 160px;\n  display: inline-block; }\n  .user-avatar_2vc2X img {\n    width: 100%;\n    height: auto;\n    border-radius: 100%;\n    overflow: hidden;\n    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.32); }\n\n.tagline_1sqmx {\n  font-size: 1.2rem; }\n", ""]);
	
	// exports
	exports.locals = {
		"profile": "profile_28CdI",
		"page-header": "page-header_Paj4H",
		"username": "username_2WC6D",
		"edit": "edit_3MJW3",
		"user-avatar": "user-avatar_2vc2X",
		"tagline": "tagline_1sqmx"
	};

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vaW5kZXgudHM/NTBkNyoqKioqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvaW5kZXgudHM/MjFkMyoqKioqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQudHN4P2RhMWQqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuc2Nzcz80MDE3KioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9JbnB1dC5zY3NzPzA0ODMqKioqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9pbmRleC50cz83ZTgwKioqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC50c3g/NGU3MyoqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC5zY3NzP2NlYTQqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LnNjc3M/OGI5MyoqKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL2luZGV4LnRzP2I4MTIqKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLnRzeD9jMmFmKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLmNzcz9hYTIxKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS5jc3M/NWJjMioqKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1RhYi9pbmRleC50cz84ZTE4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9UYWIvVGFiLnRzeD8wOGQ3Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9UYWIvVGFicy50c3g/Njk2MCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9UYWIvX3RhYi5zY3NzP2YwNWIqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1RhYi9fdGFiLnNjc3M/Y2Q4MiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1Byb2ZpbGUvUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1Byb2ZpbGUvX3Byb2ZpbGUuc2Nzcz80MzM3Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Qcm9maWxlL19wcm9maWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2Qjs7OztBQUNGOzs7O0FBQ2tCOzs7O0FBRzdDOzs7Ozs7U0FBZTtTQUFPO1NBQWdCO1NBQVksOEI7Ozs7Ozs7Ozs7Ozs7QUNKOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRG9COzs7O0FBQ0U7Ozs7QUFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ25DLEtBQVksU0FBVSxvQkFBZ0I7QUFnQnRDOzs7QUFDRSxvQkFBaUIsT0FDZjs7O3lGQUdJOzs7Ozs7OztBQUNKLGlCQUFTLFFBQVMsT0FBTyxPQUFHLElBQU0sS0FBTztBQUN6QyxvQkFBWSxNQUNOOzBCQUF5QixLQUFNO2lC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WyJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnXG5pbXBvcnQgU2VsZWN0aXplSW5wdXQgZnJvbSAnLi9TZWxlY3RpemVJbnB1dCdcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL1RleHRhcmVhJ1xuXG5leHBvcnQgeyBCdXR0b24sIElucHV0LCBTZWxlY3RpemVJbnB1dCwgVGV4dGFyZWEgfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcbmV4cG9ydCBkZWZhdWx0IElucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vSW5wdXQuc2NzcycpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgb25DaGFuZ2U/OiBhbnlcbiAgdmFsdWU/OiBzdHJpbmdcbiAgdHlwZT86IHN0cmluZ1xuICBuYW1lPzogc3RyaW5nXG4gIGVycm9yPzogYW55XG4gIHRvdWNoZWQ/OiBib29sZWFuXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpXG4gICAgZGVsZXRlIHByb3BzLmNsYXNzTmFtZVxuICAgIGNvbnN0IHsgZXJyb3IsIHRvdWNoZWQgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHNob3dFcnJvciA9IGVycm9yICYmIHRvdWNoZWRcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT17Y2xhc3NuYW1lcyh7J2lucHV0LXdyYXAnOiAhc2hvd0Vycm9yLCAnaW5wdXQtd3JhcC0tZXJyb3InOiBzaG93RXJyb3J9KX0gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJ30+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHN0eWxlTmFtZT1cImlucHV0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpXG4gICAgICAgICAgfX1cbiAgICAgICAgICB0eXBlPXt0aGlzLnByb3BzLnR5cGUgPyB0aGlzLnByb3BzLnR5cGUgOiAndGV4dCd9XG4gICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lID8gdGhpcy5wcm9wcy5uYW1lIDogbnVsbH1cbiAgICAgICAgLz5cbiAgICAgICAge1xuICAgICAgICAgIHNob3dFcnJvciAmJiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImVycm9yLW1zZ1wiPntlcnJvcn08L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9JbnB1dC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5wdXQtd3JhcF8xM0JiaywgLmlucHV0LXdyYXAtLWVycm9yXzJTSkExIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmlucHV0Xzc1cmxOIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjNzO1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICBvdXRsaW5lOiBub25lOyB9XFxuXFxuLmlucHV0Xzc1cmxOOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzFCMjY3RjsgfVxcblxcbi5pbnB1dC13cmFwLS1lcnJvcl8yU0pBMSAuaW5wdXRfNzVybE4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjZjIxNjVlOyB9XFxuXFxuLmVycm9yLW1zZ18zRWZ6aSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICBjb2xvcjogI2YyMTY1ZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImlucHV0LXdyYXBcIjogXCJpbnB1dC13cmFwXzEzQmJrXCIsXG5cdFwiaW5wdXQtd3JhcC0tZXJyb3JcIjogXCJpbnB1dC13cmFwLS1lcnJvcl8yU0pBMVwiLFxuXHRcImlucHV0XCI6IFwiaW5wdXRfNzVybE5cIixcblx0XCJlcnJvci1tc2dcIjogXCJlcnJvci1tc2dfM0VmemlcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiaW1wb3J0IFNlbGVjdGl6ZUlucHV0IGZyb20gJy4vU2VsZWN0aXplSW5wdXQnXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RpemVJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9JY29uJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IGlzRGVzY2VuZGFudCBmcm9tICcuLi8uLi8uLi91dGlscy9kb20vaXNEZXNjZW5kYW50J1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9TZWxlY3RpemVJbnB1dC5zY3NzJylcblxudHlwZSBUeXBlT3B0aW9uID0ge1xuICB2YWx1ZTogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgYWRkaXRpb25hbD86IGFueVxufVxuXG50eXBlIFR5cGVWYWx1ZSA9IHtcbiAgdmFsdWU6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICBsYWJlbD86IHN0cmluZ1xuICBzdGF5Rm9jdXNlZD86IGJvb2xlYW4gLy8gZGVmYXVsdCB0cnVlXG5cbiAgdmFsdWU6IHN0cmluZ1xuICBvbklucHV0Q2hhbmdlOiAobmV3VmFsdWU6IHN0cmluZykgPT4gdm9pZFxuXG4gIG9wdGlvbnM6IEFycmF5PFR5cGVPcHRpb24+XG4gIG9uT3B0aW9uc0NoYW5nZT86IChuZXdWYWx1ZXM6IEFycmF5PFR5cGVPcHRpb24+KSA9PiB2b2lkXG5cbiAgdmFsdWVzOiBBcnJheTxUeXBlVmFsdWU+XG4gIG9uVmFsdWVzQ2hhbmdlOiAobmV3VmFsdWVzOiBBcnJheTxUeXBlVmFsdWU+KSA9PiB2b2lkXG5cbiAgLy8g6aKd5aSW5Yqf6IO9XG4gIG9uQWRkTmV3VmFsdWU/OiAobmV3VmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICBvbk9wdGlvbkNsaWNrPzogKHNlbGVjdGVkVmFsdWU6IFR5cGVPcHRpb24pID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIGZvY3VzPzogYm9vbGVhblxuICBzaG93T3B0aW9ucz86IGJvb2xlYW5cbiAgdmFsdWU/OiBzdHJpbmdcbiAgZXhwZW5kZWRPcHRpb25JbmRleD86IG51bWJlclxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIFNlbGVjdGl6ZUlucHV0IGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnRcbiAgaW5wdXRXcmFwOiBIVE1MRGl2RWxlbWVudFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dPcHRpb25zOiBmYWxzZSxcbiAgICAgIGZvY3VzOiBmYWxzZSxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIGV4cGVuZGVkT3B0aW9uSW5kZXg6IDBcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2sgPSB0aGlzLmhhbmRsZU91dHNpZGVDbGljay5iaW5kKHRoaXMpXG4gICAgdGhpcy5mb2N1c0lucHV0ID0gdGhpcy5mb2N1c0lucHV0LmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBhZGRWYWx1ZShuZXdWYWx1ZSkge1xuICAgIHRoaXMucHJvcHMub25WYWx1ZXNDaGFuZ2UodGhpcy5wcm9wcy52YWx1ZXMuY29uY2F0KG5ld1ZhbHVlKSlcbiAgICBpZiAodGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKHRoaXMucHJvcHMub3B0aW9ucy5tYXAob3B0aW9uID0+IChvcHRpb24udmFsdWUgPT09IG5ld1ZhbHVlLnZhbHVlXG4gICAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9uLCB7IGRpc2FibGVkOiB0cnVlIH0pXG4gICAgICAgIDogb3B0aW9uKSkpXG4gICAgfVxuICAgIHRoaXMuY2xlYXJJbnB1dFZhbHVlKClcbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuc3RheUZvY3VzZWQgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMucHJvcHMuc3RheUZvY3VzZWQgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmZvY3VzSW5wdXQoKVxuICAgIH1cbiAgICB0aGlzLmhpZGVPcHRpb25zKClcbiAgfVxuXG4gIHNob3dPcHRpb25zKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd09wdGlvbnM6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgaGlkZU9wdGlvbnMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3B0aW9uczogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlVmFsdWUoaW5kZXgpIHtcbiAgICBsZXQgbmV3VmFsdWVzID0gW11cbiAgICBsZXQgcmVtb3ZlZFZhbHVlXG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICBuZXdWYWx1ZXMgPSB0aGlzLnByb3BzLnZhbHVlcy5zbGljZSgwLCB0aGlzLnByb3BzLnZhbHVlcy5sZW5ndGggLSAxKVxuICAgICAgcmVtb3ZlZFZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZXNbdGhpcy5wcm9wcy52YWx1ZXMubGVuZ3RoIC0gMV0udmFsdWVcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3VmFsdWVzID0gdGhpcy5wcm9wcy52YWx1ZXNcbiAgICAgICAgLmZpbHRlcigodiwgaSkgPT4ge1xuICAgICAgICAgIHJlbW92ZWRWYWx1ZSA9IHYudmFsdWVcbiAgICAgICAgICByZXR1cm4gaSAhPT0gaW5kZXhcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKHRoaXMucHJvcHMub3B0aW9ucy5tYXAob3B0aW9uID0+IChvcHRpb24udmFsdWUgPT09IHJlbW92ZWRWYWx1ZVxuICAgICAgICA/IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbiwgeyBkaXNhYmxlZDogZmFsc2UgfSlcbiAgICAgICAgOiBvcHRpb24pKSlcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uVmFsdWVzQ2hhbmdlKG5ld1ZhbHVlcylcbiAgfVxuXG4gIGNsZWFySW5wdXRWYWx1ZSgpIHtcbiAgICB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UoJycpXG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gOCAmJiAhdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgdGhpcy5yZW1vdmVWYWx1ZSgtIDEpXG4gICAgfVxuICAgIC8vIHRvZG9cbiAgICAvLyBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiB0aGlzLnN0YXRlLnNob3dPcHRpb25zKSB7XG4gICAgLy8gICB0aGlzLmFkZFZhbHVlKClcbiAgICAvLyB9XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZShlKSB7XG4gICAgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKVxuICAgIGlmICgodGhpcy5wcm9wcy5vcHRpb25zIHx8IFtdKS5sZW5ndGggIT09IDApIHtcbiAgICAgIHRoaXMuc2hvd09wdGlvbnMoKVxuICAgIH1cbiAgfVxuXG4gIGZvY3VzSW5wdXQoKSB7XG4gICAgdGhpcy5pbnB1dC5mb2N1cygpXG4gIH1cblxuICBoYW5kbGVPdXRzaWRlQ2xpY2soZSkge1xuICAgIGlmIChpc0Rlc2NlbmRhbnQodGhpcy5pbnB1dFdyYXAsIGUudGFyZ2V0KSB8fCB0aGlzLmlucHV0V3JhcCA9PT0gZS50YXJnZXQpIHtcbiAgICAgIHRoaXMuZm9jdXNJbnB1dCgpXG4gICAgICB0aGlzLnNob3dPcHRpb25zKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlT3B0aW9ucygpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCBvcHRpb25zTG9hZGVkID0gKG5leHRQcm9wcy5vcHRpb25zIHx8IFtdKS5sZW5ndGggIT09IDAgJiYgKHRoaXMucHJvcHMub3B0aW9ucyB8fCBbXSkubGVuZ3RoID09PSAwXG4gICAgaWYgKG9wdGlvbnNMb2FkZWQgJiYgdGhpcy5zdGF0ZS5mb2N1cykge1xuICAgICAgdGhpcy5zaG93T3B0aW9ucygpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2spXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljaylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsLCB2YWx1ZXMsIG9uQWRkTmV3VmFsdWUgfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgJydcbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9ucyB8fCBbXVxuXG4gICAgbGV0IGlucHV0V2lkdGggPSB2YWx1ZXMubGVuZ3RoID4gMCA/ICh2YWx1ZS5sZW5ndGggPT09IDAgPyAxNiA6IHZhbHVlLmxlbmd0aCAqIDE2KSA6ICcxMDAlJ1xuICAgIGxldCBwbGFjZWhvbGRlciA9IHZhbHVlcy5sZW5ndGggPiAwID8gJycgOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyXG5cbiAgICBjb25zdCBzZWxlY3RpemVJbnB1dFN0eWxlTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgJ3NlbGVjdGl6ZS1pbnB1dCc6IHRydWUsXG4gICAgICAnc2VsZWN0aXplLWlucHV0LS1mb2N1cyc6IHRoaXMuc3RhdGUuZm9jdXMsXG4gICAgICAnc2VsZWN0aXplLWlucHV0LS1lbXB0eSc6IHZhbHVlcy5sZW5ndGggPT09IDBcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwic2VsZWN0aXplLXdyYXBcIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnfT5cbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsID8gKFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj57bGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICApIDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZU5hbWU9e3NlbGVjdGl6ZUlucHV0U3R5bGVOYW1lfVxuICAgICAgICAgIHJlZj17cmVmID0+IHsgdGhpcy5pbnB1dFdyYXAgPSByZWYgfSB9XG4gICAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlcy5tYXAoKHYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gc3R5bGVOYW1lPVwic2VsZWN0aXplLXRhZ1wiPlxuICAgICAgICAgICAgICAgICAge3YubmFtZX1cbiAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlTmFtZT1cImljb24tcmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjB9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWUoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogaW5wdXRXaWR0aCB9fVxuICAgICAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmlucHV0ID0gcmVmIH0gfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgb25CbHVyPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiBmYWxzZSB9KVxuICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICBvbkZvY3VzPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiB0cnVlIH0pXG4gICAgICAgICAgICB9IH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgb25LZXlEb3duPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVLZXlQcmVzcyhlKVxuICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd09wdGlvbnMgJiYgKG9wdGlvbnMubGVuZ3RoICE9PSAwIHx8IG9uQWRkTmV3VmFsdWUpID8gKFxuICAgICAgICAgICAgPHVsIHN0eWxlTmFtZT1cInF1ZXJ5LXJlc3VsdHNcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAob3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZGlzYWJsZWRcIj57b3B0aW9uLm5hbWV9PC9saT5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFZhbHVlKG9wdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uT3B0aW9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk9wdGlvbkNsaWNrKG9wdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e29wdGlvbi5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbkFkZE5ld1ZhbHVlID8gKFxuICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIG9uQWRkTmV3VmFsdWUodGhpcy5wcm9wcy52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZFwiPua3u+WKoCA8c3Ryb25nPnt0aGlzLnByb3BzLnZhbHVlfTwvc3Ryb25nPjwvbGk+XG4gICAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICApIDogbnVsbFxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0aXplSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vU2VsZWN0aXplSW5wdXQuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0NzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlbGVjdGl6ZS13cmFwXzNBTUFpIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnNlbGVjdGl6ZS1pbnB1dF8xNGJnUCB7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHRyYW5zaXRpb246IGFsbCAwcztcXG4gIGN1cnNvcjogdGV4dDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cXG4gIC5zZWxlY3RpemUtaW5wdXRfMTRiZ1AgaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7IH1cXG5cXG4uc2VsZWN0aXplLWlucHV0LS1mb2N1c19Vblo4QiB7XFxuICBib3JkZXItY29sb3I6ICMxQjI2N0Y7IH1cXG5cXG4uc2VsZWN0aXplLWlucHV0LS1lbXB0eV94bjdVeSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogNXB4IDVweCAwOyB9XFxuXFxuLnNlbGVjdGl6ZS1pbnB1dF8xNGJnUCBpbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XFxuXFxuLnF1ZXJ5LXJlc3VsdHNfT2dFMnQge1xcbiAgbWFyZ2luLXRvcDogLTNweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMyKTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB6LWluZGV4OiA5MDA7IH1cXG5cXG4ucXVlcnktcmVzdWx0c19PZ0UydCBsaSB7XFxuICBwYWRkaW5nOiAwIDdweDtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4OyB9XFxuICAucXVlcnktcmVzdWx0c19PZ0UydCBsaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMxQjI2N0Y7XFxuICAgIGNvbG9yOiAjZmZmOyB9XFxuXFxuLnNlbGVjdGl6ZS10YWdfM2FEMTMge1xcbiAgYmFja2dyb3VuZDogIzFCMjY3RjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDNweCAyNXB4IDNweCA1cHg7XFxuICBtYXJnaW46IDVweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmljb24tcmVtb3ZlXzFPN0ZfIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1cHg7XFxuICB0b3A6IDJweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInNlbGVjdGl6ZS13cmFwXCI6IFwic2VsZWN0aXplLXdyYXBfM0FNQWlcIixcblx0XCJzZWxlY3RpemUtaW5wdXRcIjogXCJzZWxlY3RpemUtaW5wdXRfMTRiZ1BcIixcblx0XCJzZWxlY3RpemUtaW5wdXQtLWZvY3VzXCI6IFwic2VsZWN0aXplLWlucHV0LS1mb2N1c19Vblo4QlwiLFxuXHRcInNlbGVjdGl6ZS1pbnB1dC0tZW1wdHlcIjogXCJzZWxlY3RpemUtaW5wdXQtLWVtcHR5X3huN1V5XCIsXG5cdFwicXVlcnktcmVzdWx0c1wiOiBcInF1ZXJ5LXJlc3VsdHNfT2dFMnRcIixcblx0XCJzZWxlY3RpemUtdGFnXCI6IFwic2VsZWN0aXplLXRhZ18zYUQxM1wiLFxuXHRcImljb24tcmVtb3ZlXCI6IFwiaWNvbi1yZW1vdmVfMU83Rl9cIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ3NFxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vVGV4dGFyZWEnXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm9wcyBhcyBJbnB1dFByb3BzIH0gZnJvbSAnLi4vSW5wdXQvSW5wdXQnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vVGV4dGFyZWEuY3NzJylcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyBleHRlbmRzIElucHV0UHJvcHMge1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIFRleHRhcmVhIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9XCJ0ZXh0YXJlYS13cmFwXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJ30+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIHN0eWxlTmFtZT1cInRleHRhcmVhXCJcbiAgICAgICAgICB0eXBlPXt0aGlzLnByb3BzLnR5cGUgPyB0aGlzLnByb3BzLnR5cGUgOiAndGV4dCd9XG4gICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lID8gdGhpcy5wcm9wcy5uYW1lIDogbnVsbH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9UZXh0YXJlYS5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0NzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSFzdHlsZXMvdmFyaWFibGVzLmNzc1wiKSwgXCJcIik7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRleHRhcmVhLXdyYXBfWGtwajEge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50ZXh0YXJlYV8xRWRvUyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXkpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjNzO1xcbn1cXG5cXG4udGV4dGFyZWFfMUVkb1M6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidGV4dGFyZWEtd3JhcFwiOiBcInRleHRhcmVhLXdyYXBfWGtwajFcIixcblx0XCJ0ZXh0YXJlYVwiOiBcInRleHRhcmVhXzFFZG9TXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Bvc3Rjc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ3OFxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiaW1wb3J0IFRhYiBmcm9tICcuL1RhYidcbmltcG9ydCBUYWJzIGZyb20gJy4vVGFicydcblxuZXhwb3J0IHsgVGFiLCBUYWJzIH1cbmV4cG9ydCBkZWZhdWx0IFRhYlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvVGFiL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdGl0bGU6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuY2xhc3MgVGFiIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYlwiPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL1RhYi9UYWIudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9fdGFiLnNjc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgb25UYWJTd2l0Y2g/OiAoYWN0aXZlVGFiSW5kZXg6IG51bWJlcikgPT4gdm9pZFxuICBkZWZhdWx0QWN0aXZlPzogbnVtYmVyXG4gIHN0eWxlPzogYW55XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBhY3RpdmU6IG51bWJlclxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIFRhYnMgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmU6IHRoaXMucHJvcHMuZGVmYXVsdEFjdGl2ZVxuICAgIH1cbiAgICB0aGlzLmhhbmRsZVRhYkNsaWNrID0gdGhpcy5oYW5kbGVUYWJDbGljay5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVUYWJDbGljayhpbmRleCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlOiBpbmRleFxuICAgIH0pXG4gICAgaWYgKHRoaXMucHJvcHMub25UYWJTd2l0Y2gpIHtcbiAgICAgIHRoaXMucHJvcHMub25UYWJTd2l0Y2goaW5kZXgpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdHlsZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic1wiIHsuLi5zdHlsZSA/IHtzdHlsZX0gOiBudWxsfT5cbiAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJ0YWJzLWhlYWRlclwiPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHsodGhpcy5wcm9wcy5jaGlsZHJlbiBhcyBhbnkpLm1hcCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIHN0eWxlTmFtZT17Y2xhc3NOYW1lcyh7J2FjdGl2ZSc6IGluZGV4ID09PSB0aGlzLnN0YXRlLmFjdGl2ZX0pfSBrZXk9e2luZGV4fSBvbkNsaWNrPXt0aGlzLmhhbmRsZVRhYkNsaWNrLmJpbmQodGhpcywgaW5kZXgpIH0+XG4gICAgICAgICAgICAgICAgICB7Y2hpbGQucHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSkgfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgKHRoaXMucHJvcHMuY2hpbGRyZW4gYXMgYW55KVxuICAgICAgICAgICAgLmZpbHRlcigoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBpbmRleCA9PT0gdGhpcy5zdGF0ZS5hY3RpdmVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICB9KVswXVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuKFRhYnMgYXMgYW55KS5kZWZhdWx0UHJvcHMgPSB7XG4gIGRlZmF1bHRBY3RpdmU6IDBcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFic1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvVGFiL1RhYnMudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9fdGFiLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9UYWIvX3RhYi5zY3NzXG4gKiogbW9kdWxlIGlkID0gNTI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDkgMTFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50YWJzLWhlYWRlcl95NW5TSSB7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07IH1cXG4gIC50YWJzLWhlYWRlcl95NW5TSSB1bCB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkOyB9XFxuICAgIC50YWJzLWhlYWRlcl95NW5TSSB1bCBsaSB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBwYWRkaW5nOiAxMHB4IDA7IH1cXG4gICAgICAudGFicy1oZWFkZXJfeTVuU0kgdWwgbGkuYWN0aXZlXzNiYkFvIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgY29sb3I6ICMxQjI2N0Y7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzFCMjY3RjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInRhYnMtaGVhZGVyXCI6IFwidGFicy1oZWFkZXJfeTVuU0lcIixcblx0XCJhY3RpdmVcIjogXCJhY3RpdmVfM2JiQW9cIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvVGFiL190YWIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDUyNVxuICoqIG1vZHVsZSBjaHVua3MgPSA5IDExXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuLy8gaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IGZldGNoQm9va3MsIGZldGNoQ29sbGVjdGlvbnMsIHNlbmROb3RpZmljYXRpb24sIGZldGNoUHJvZmlsZSB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG4vLyBpbXBvcnQgQm9va0xpc3RTZWN0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQm9va0xpc3RTZWN0aW9uJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvX2Zvcm0nXG5pbXBvcnQgeyBUYWIsIFRhYnMgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9UYWInXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2VsZW1lbnRzL19sYXlvdXQvQ29udGFpbmVyJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vX3Byb2ZpbGUuc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBmZXRjaEJvb2tzPzogYW55XG4gIG5ld2VzdEJvb2tzPzogYW55XG4gIGZldGNoUHJvZmlsZT86IGFueVxuICBzZW5kTm90aWZpY2F0aW9uPzogYW55XG4gIHByb2ZpbGU/OiBhbnlcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgUHJvZmlsZSBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIHt9PiB7XG5cbiAgLy8gc3RhdGljIGZldGNoRGF0YSh7c3RvcmUsIHBhcmFtc30pIHtcbiAgLy8gICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZmV0Y2goKSlcbiAgLy8gfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyB0aGlzLnByb3BzLmZldGNoQm9va3MoKVxuICAgIHRoaXMucHJvcHMuZmV0Y2hQcm9maWxlKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByb2ZpbGU6IHsgdXNlcm5hbWUgfSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPVwicHJvZmlsZVwiPlxuICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwidXNlci1hdmF0YXJcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZzMuZG91YmFuaW8uY29tL2ljb24vdWw0MzY0NjcwNi00My5qcGdcIiBhbHQ9XCJ1c2VyX2F2YXRhclwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwidXNlcm5hbWVcIj57dXNlcm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwidGFnbGluZVwiPuaaguaXoOetvuWQjTwvc3Bhbj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oJ+ivpeWKn+iDveWwmuS4jeWPr+eUqCcsICd3YXJuaW5nJykgfX0gc3R5bGVOYW1lPVwiZWRpdFwiPue8lui+kTwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxUYWJzPlxuICAgICAgICAgICAgPFRhYiB0aXRsZT1cIuaUtuiXj1wiPlxuICAgICAgICAgICAgICDmmoLml6DmlbDmja5cbiAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgPFRhYiB0aXRsZT1cIuivu+i/h1wiPlxuICAgICAgICAgICAgICDmmoLml6DmlbDmja5cbiAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICByZXR1cm4ge1xuICAgIG5ld2VzdEJvb2tzOiBzdGF0ZS5wYWdpbmF0aW9uLmJvb2tzLm5ld2VzdFxuICAgICAgPyBzdGF0ZS5wYWdpbmF0aW9uLmJvb2tzLm5ld2VzdC5pZHMubWFwKGlkID0+IHN0YXRlLmVudGl0aWVzLmJvb2tzW2lkXSlcbiAgICAgIDogW10sXG4gICAgcHJvZmlsZTogXy5nZXQoc3RhdGUucGF5bG9hZHMsICdwcm9maWxlJywge30pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICB7IHNlbmROb3RpZmljYXRpb24sIGZldGNoQm9va3MsIGZldGNoQ29sbGVjdGlvbnMsIGZldGNoUHJvZmlsZSB9XG4pKFByb2ZpbGUgYXMgYW55KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1Byb2ZpbGUvUHJvZmlsZS50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL19wcm9maWxlLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvUHJvZmlsZS9fcHJvZmlsZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gNTM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDExXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucHJvZmlsZV8yOENkSSB7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5wYWdlLWhlYWRlcl9QYWo0SCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDMwcHggMDsgfVxcbiAgLnBhZ2UtaGVhZGVyX1BhajRIIHNwYW4ge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi51c2VybmFtZV8yV0M2RCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMzMzOyB9XFxuXFxuLmVkaXRfM01KVzMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7IH1cXG5cXG4udXNlci1hdmF0YXJfMnZjMlgge1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgaGVpZ2h0OiAxNjBweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcbiAgLnVzZXItYXZhdGFyXzJ2YzJYIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMyKTsgfVxcblxcbi50YWdsaW5lXzFzcW14IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicHJvZmlsZVwiOiBcInByb2ZpbGVfMjhDZElcIixcblx0XCJwYWdlLWhlYWRlclwiOiBcInBhZ2UtaGVhZGVyX1BhajRIXCIsXG5cdFwidXNlcm5hbWVcIjogXCJ1c2VybmFtZV8yV0M2RFwiLFxuXHRcImVkaXRcIjogXCJlZGl0XzNNSlczXCIsXG5cdFwidXNlci1hdmF0YXJcIjogXCJ1c2VyLWF2YXRhcl8ydmMyWFwiLFxuXHRcInRhZ2xpbmVcIjogXCJ0YWdsaW5lXzFzcW14XCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Qcm9maWxlL19wcm9maWxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA1MzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9