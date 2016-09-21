exports.ids = [4];
exports.modules = {

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Textarea = exports.SelectizeInput = exports.Input = exports.Button = undefined;
	
	var _Button = __webpack_require__(372);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Input = __webpack_require__(458);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _SelectizeInput = __webpack_require__(462);
	
	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);
	
	var _Textarea = __webpack_require__(466);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Button = _Button2.default;
	exports.Input = _Input2.default;
	exports.SelectizeInput = _SelectizeInput2.default;
	exports.Textarea = _Textarea2.default;

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Input = __webpack_require__(459);
	
	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Input2.default;

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(110);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(286);
	
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
	
	var styles = __webpack_require__(460);
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
	            return _react2.default.createElement("div", { styleName: "input-wrap", className: this.props.className || '' }, _react2.default.createElement("input", { styleName: "input", placeholder: this.props.placeholder, value: this.props.value, onChange: function onChange(e) {
	                    _this2.props.onChange(e);
	                }, type: this.props.type ? this.props.type : 'text', name: this.props.name ? this.props.name : null }));
	        }
	    }]);
	
	    return Input;
	}(_react.Component);
	Input = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], Input);
	exports.default = Input;

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(461);
	    var insertCss = __webpack_require__(290);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(289)();
	// imports
	exports.i(__webpack_require__(402), "");
	
	// module
	exports.push([module.id, ".input-wrap_3dHA3 {\n  margin: 10px 0;\n  position: relative;\n}\n\n.input_2juBO {\n  width: 100%;\n  padding: var(--input-padding) 5px;\n  border: 1px solid var(--gray);\n  transition: border-color .3s;\n  line-height: var(--input-line-height);\n  outline: none;\n}\n\n.input_2juBO:focus {\n  border-color: var(--blue);\n}\n", ""]);
	
	// exports
	exports.locals = {
		"input-wrap": "input-wrap_3dHA3",
		"input": "input_2juBO"
	};

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _SelectizeInput = __webpack_require__(463);
	
	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SelectizeInput2.default;

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(110);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Icon = __webpack_require__(282);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _classnames = __webpack_require__(284);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(286);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _isDescendant = __webpack_require__(386);
	
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
	
	var styles = __webpack_require__(464);
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
	        _this.handleInputWrapClick = _this.handleInputWrapClick.bind(_this);
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
	        key: "focusInput",
	        value: function focusInput() {
	            this.input.focus();
	        }
	    }, {
	        key: "handleOutsideClick",
	        value: function handleOutsideClick(e) {
	            if (!(0, _isDescendant2.default)(this.inputWrap, e.target)) {
	                this.setState({
	                    showOptions: false
	                });
	            }
	        }
	    }, {
	        key: "handleInputWrapClick",
	        value: function handleInputWrapClick() {
	            this.focusInput();
	            this.setState({
	                showOptions: true
	            });
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
	            return _react2.default.createElement("div", { styleName: "selectize-wrap", className: this.props.className || '' }, label ? _react2.default.createElement("label", { className: "form-label" }, label) : null, _react2.default.createElement("div", { styleName: selectizeInputStyleName, onClick: this.handleInputWrapClick, ref: function ref(_ref) {
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
	                }, onChange: function onChange(e) {
	                    _this2.props.onInputChange(e.target.value);
	                }, onKeyDown: function onKeyDown(e) {
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

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(465);
	    var insertCss = __webpack_require__(290);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(289)();
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

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Textarea = __webpack_require__(467);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Textarea2.default;

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(110);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(286);
	
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
	
	var styles = __webpack_require__(468);
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

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(469);
	    var insertCss = __webpack_require__(290);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(289)();
	// imports
	exports.i(__webpack_require__(402), "");
	exports.i(__webpack_require__(461), undefined);
	
	// module
	exports.push([module.id, ".textarea-wrap_Xkpj1 {\n}\n\n.textarea_1EdoS {\n  width: 100%;\n  padding: 5px;\n  border: 1px solid var(--gray);\n  outline: none;\n  height: 100px;\n  transition: border-color .3s;\n}\n\n.textarea_1EdoS:focus {\n  border-color: var(--blue);\n}\n", ""]);
	
	// exports
	exports.locals = {
		"textarea-wrap": "textarea-wrap_Xkpj1 " + __webpack_require__(461).locals["input-wrap"] + "",
		"textarea": "textarea_1EdoS"
	};

/***/ },

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(110);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(276);
	
	var _actions = __webpack_require__(78);
	
	var _Loading = __webpack_require__(487);
	
	var _Loading2 = _interopRequireDefault(_Loading);
	
	var _form = __webpack_require__(457);
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _DocContainer = __webpack_require__(273);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _reactCssModules = __webpack_require__(286);
	
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
	
	var styles = __webpack_require__(489);
	var BookDetail = function (_Component) {
	    _inherits(BookDetail, _Component);
	
	    function BookDetail(props) {
	        _classCallCheck(this, BookDetail);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BookDetail).call(this, props));
	
	        _this.bookId = props.params.id;
	        return _this;
	    }
	
	    _createClass(BookDetail, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.props.fetchBook(this.bookId);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var bookInfo = this.props.bookInfo ? this.props.bookInfo : {};
	            return _react2.default.createElement(_DocContainer2.default, { bodyClass: "book-info", title: bookInfo.title }, _react2.default.createElement("article", { styleName: "book-info-container", className: "container" }, _lodash2.default.isEmpty(bookInfo) && _react2.default.createElement(_Loading2.default, null), _react2.default.createElement("div", { styleName: "book-detail" }, _react2.default.createElement("header", { styleName: "header" }, _react2.default.createElement("div", { styleName: "left-col" }, bookInfo.cover && _react2.default.createElement("div", { styleName: "book-cover" }, _react2.default.createElement("img", { styleName: "img", src: bookInfo.cover }))), _react2.default.createElement("div", { styleName: "right-col" }, _react2.default.createElement("h1", { styleName: "book-name" }, bookInfo.title), _react2.default.createElement("div", { styleName: "book-author" }, _react2.default.createElement("strong", null, "作者：", bookInfo.authors && bookInfo.authors.map(function (a) {
	                return a.name;
	            }).join(', '))), bookInfo.title && _react2.default.createElement("div", null, _react2.default.createElement(_form.Button, { styleName: "btn-read", to: "/viewer/book/" + bookInfo.id, color: "blue" }, "阅读")))), bookInfo.description && _react2.default.createElement("div", { styleName: "content" }, _react2.default.createElement("h2", { styleName: "desc" }, "内容简介"), _react2.default.createElement("p", null, bookInfo.description)))));
	        }
	    }], [{
	        key: "fetchData",
	        value: function fetchData(_ref) {
	            var store = _ref.store;
	            var params = _ref.params;
	
	            return store.dispatch((0, _actions.fetchBook)(params.id));
	        }
	    }]);
	
	    return BookDetail;
	}(_react.Component);
	BookDetail = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], BookDetail);
	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	    return { bookInfo: state.entities.books[ownProps.params.id] };
	}, { fetchBook: _actions.fetchBook })(BookDetail);

/***/ },

/***/ 487:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Loading = __webpack_require__(488);
	
	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Loading2.default;

/***/ },

/***/ 488:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(110);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Loading = function (_Component) {
	    _inherits(Loading, _Component);
	
	    function Loading() {
	        _classCallCheck(this, Loading);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Loading).apply(this, arguments));
	    }
	
	    _createClass(Loading, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement("div", { className: "loading-wrap" }, _react2.default.createElement("span", { className: "icon icon-loading" }));
	        }
	    }]);
	
	    return Loading;
	}(_react.Component);
	
	exports.default = Loading;

/***/ },

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(490);
	    var insertCss = __webpack_require__(290);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(289)();
	// imports
	
	
	// module
	exports.push([module.id, ".book-detail_2izVJ {\n  background: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  margin-top: 40px; }\n\n.book-info-container_2FwVR {\n  width: 850px;\n  margin: 0 auto; }\n\n.header_1vo0K {\n  overflow: hidden;\n  padding: 40px 80px;\n  position: relative; }\n\n.btn-read_3Euwb {\n  position: absolute;\n  bottom: 40px; }\n\n.left-col_2GWeo {\n  float: left;\n  margin-right: 30px; }\n\n.right-col_2_r1p {\n  width: 100%; }\n\n.book-name_jLvuB {\n  font-size: 1.6rem;\n  font-weight: bold;\n  margin: 0 0 10px 0;\n  color: #333;\n  line-height: 1.2;\n  word-wrap: break-word; }\n\n.book-author_-eVvW {\n  font-size: 1rem;\n  margin-bottom: 10px; }\n\n.book-cover_1QJYy {\n  margin: 0;\n  top: 0;\n  position: relative; }\n\n.img_2XZDg {\n  width: 100px;\n  height: auto;\n  display: block; }\n\n.content_1uo-e {\n  padding: 40px 80px;\n  border-top: 1px solid #ddd;\n  line-height: 1.7; }\n\n.desc_3yZtT {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: #333; }\n", ""]);
	
	// exports
	exports.locals = {
		"book-detail": "book-detail_2izVJ",
		"book-info-container": "book-info-container_2FwVR",
		"header": "header_1vo0K",
		"btn-read": "btn-read_3Euwb",
		"left-col": "left-col_2GWeo",
		"right-col": "right-col_2_r1p",
		"book-name": "book-name_jLvuB",
		"book-author": "book-author_-eVvW",
		"book-cover": "book-cover_1QJYy",
		"img": "img_2XZDg",
		"content": "content_1uo-e",
		"desc": "desc_3yZtT"
	};

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vaW5kZXgudHM/NTBkNyoiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L2luZGV4LnRzPzIxZDMqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9JbnB1dC50c3g/ZGExZCoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuY3NzPzA1MGEqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9JbnB1dC5jc3M/ZDkyNCoqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9pbmRleC50cz83ZTgwKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQudHN4PzRlNzMqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LnNjc3M/Y2VhNCoqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LnNjc3M/OGI5MyoqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9pbmRleC50cz9iODEyKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEudHN4P2MyYWYqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLmNzcz9hYTIxKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEuY3NzPzViYzIqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL0Jvb2tEZXRhaWwvQm9va0RldGFpbC50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL0Jvb2tEZXRhaWwvQm9va0RldGFpbC5zY3NzPzZjZTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL0Jvb2tEZXRhaWwvQm9va0RldGFpbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNkI7Ozs7QUFDRjs7OztBQUNrQjs7OztBQUc3Qzs7Ozs7O1NBQWU7U0FBTztTQUFnQjtTQUFZLDhCOzs7Ozs7Ozs7Ozs7O0FDSjlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RvQjs7OztBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMUMsS0FBWSxTQUFVLG9CQUFlO0FBY3JDOzs7QUFDRSxvQkFBaUIsT0FDZjs7O3lGQUdJOzs7Ozs7OztBQUNKLGlCQUFTLFFBQVMsT0FBTyxPQUFHLElBQU0sS0FBTztBQUN6QyxvQkFBWSxNQUFVO0FBRWYsb0JBQ0wsOEJBQUksU0FBVSxXQUFhLGNBQVUsV0FBTSxLQUFNLE1BQVUsYUFBTyxvQ0FDMUQsV0FDSyxXQUFRLFNBQ04sYUFBTSxLQUFNLE1BQWEsYUFDL0IsT0FBTSxLQUFNLE1BQU8sT0FDaEI7QUFDRiw0QkFBTSxNQUFTLFNBQ25CO2tCQUZTLEVBR1AsTUFBTSxLQUFNLE1BQUssT0FBTyxLQUFNLE1BQUssT0FBVSxRQUM3QyxNQUFNLEtBQU0sTUFBSyxPQUFPLEtBQU0sTUFBSyxPQUtoRCxNQWJPOzs7O1lBWHFCOztBQUg3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OztBQ1ZuRDtBQUNBOzs7QUFHQTtBQUNBLCtDQUE4QyxxQkFBcUIsNkVBQTZFLHFCQUFxQixFQUFFLGdDQUFnQyxpQkFBaUIsbUJBQW1CLEVBQUUsbUJBQW1CLHFCQUFxQix1QkFBdUIsdUJBQXVCLEVBQUUscUJBQXFCLHVCQUF1QixpQkFBaUIsRUFBRSxxQkFBcUIsZ0JBQWdCLHVCQUF1QixFQUFFLHNCQUFzQixnQkFBZ0IsRUFBRSxzQkFBc0Isc0JBQXNCLHNCQUFzQix1QkFBdUIsZ0JBQWdCLHFCQUFxQiwwQkFBMEIsRUFBRSx3QkFBd0Isb0JBQW9CLHdCQUF3QixFQUFFLHVCQUF1QixjQUFjLFdBQVcsdUJBQXVCLEVBQUUsZ0JBQWdCLGlCQUFpQixpQkFBaUIsbUJBQW1CLEVBQUUsb0JBQW9CLHVCQUF1QiwrQkFBK0IscUJBQXFCLEVBQUUsaUJBQWlCLHNCQUFzQixzQkFBc0IsZ0JBQWdCLEVBQUU7O0FBRTFnQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRyIsImZpbGUiOiI0LjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnXG5pbXBvcnQgU2VsZWN0aXplSW5wdXQgZnJvbSAnLi9TZWxlY3RpemVJbnB1dCdcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL1RleHRhcmVhJ1xuXG5leHBvcnQgeyBCdXR0b24sIElucHV0LCBTZWxlY3RpemVJbnB1dCwgVGV4dGFyZWEgfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcbmV4cG9ydCBkZWZhdWx0IElucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9JbnB1dC5jc3MnKVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nXG4gIG9uQ2hhbmdlPzogYW55XG4gIHZhbHVlPzogc3RyaW5nXG4gIHR5cGU/OiBzdHJpbmdcbiAgbmFtZT86IHN0cmluZ1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIElucHV0IGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKVxuICAgIGRlbGV0ZSBwcm9wcy5jbGFzc05hbWVcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cImlucHV0LXdyYXBcIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgc3R5bGVOYW1lPVwiaW5wdXRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIHR5cGU9e3RoaXMucHJvcHMudHlwZSA/IHRoaXMucHJvcHMudHlwZSA6ICd0ZXh0J31cbiAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLm5hbWUgPyB0aGlzLnByb3BzLm5hbWUgOiBudWxsfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9JbnB1dC50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0lucHV0LmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L0lucHV0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIXN0eWxlcy92YXJpYWJsZXMuY3NzXCIpLCBcIlwiKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5wdXQtd3JhcF8zZEhBMyB7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmlucHV0XzJqdUJPIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogdmFyKC0taW5wdXQtcGFkZGluZykgNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheSk7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjNzO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWlucHV0LWxpbmUtaGVpZ2h0KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5pbnB1dF8yanVCTzpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJpbnB1dC13cmFwXCI6IFwiaW5wdXQtd3JhcF8zZEhBM1wiLFxuXHRcImlucHV0XCI6IFwiaW5wdXRfMmp1Qk9cIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vcG9zdGNzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuY3NzXG4gKiogbW9kdWxlIGlkID0gNDYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJpbXBvcnQgU2VsZWN0aXplSW5wdXQgZnJvbSAnLi9TZWxlY3RpemVJbnB1dCdcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGl6ZUlucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uL0ljb24nXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgaXNEZXNjZW5kYW50IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RvbS9pc0Rlc2NlbmRhbnQnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1NlbGVjdGl6ZUlucHV0LnNjc3MnKVxuXG50eXBlIFR5cGVPcHRpb24gPSB7XG4gIHZhbHVlOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICBhZGRpdGlvbmFsPzogYW55XG59XG5cbnR5cGUgVHlwZVZhbHVlID0ge1xuICB2YWx1ZTogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nXG4gIGxhYmVsPzogc3RyaW5nXG4gIHN0YXlGb2N1c2VkPzogYm9vbGVhbiAvLyBkZWZhdWx0IHRydWVcblxuICB2YWx1ZTogc3RyaW5nXG4gIG9uSW5wdXRDaGFuZ2U6IChuZXdWYWx1ZTogc3RyaW5nKSA9PiB2b2lkXG5cbiAgb3B0aW9uczogQXJyYXk8VHlwZU9wdGlvbj5cbiAgb25PcHRpb25zQ2hhbmdlPzogKG5ld1ZhbHVlczogQXJyYXk8VHlwZU9wdGlvbj4pID0+IHZvaWRcblxuICB2YWx1ZXM6IEFycmF5PFR5cGVWYWx1ZT5cbiAgb25WYWx1ZXNDaGFuZ2U6IChuZXdWYWx1ZXM6IEFycmF5PFR5cGVWYWx1ZT4pID0+IHZvaWRcblxuICAvLyDpop3lpJblip/og71cbiAgb25BZGROZXdWYWx1ZT86IChuZXdWYWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIG9uT3B0aW9uQ2xpY2s/OiAoc2VsZWN0ZWRWYWx1ZTogVHlwZU9wdGlvbikgPT4gdm9pZFxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgZm9jdXM/OiBib29sZWFuXG4gIHNob3dPcHRpb25zPzogYm9vbGVhblxuICB2YWx1ZT86IHN0cmluZ1xuICBleHBlbmRlZE9wdGlvbkluZGV4PzogbnVtYmVyXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgU2VsZWN0aXplSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBpbnB1dDogSFRNTElucHV0RWxlbWVudFxuICBpbnB1dFdyYXA6IEhUTUxEaXZFbGVtZW50XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd09wdGlvbnM6IGZhbHNlLFxuICAgICAgZm9jdXM6IGZhbHNlLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgZXhwZW5kZWRPcHRpb25JbmRleDogMFxuICAgIH1cbiAgICB0aGlzLmhhbmRsZU91dHNpZGVDbGljayA9IHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLmJpbmQodGhpcylcbiAgICB0aGlzLmZvY3VzSW5wdXQgPSB0aGlzLmZvY3VzSW5wdXQuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlSW5wdXRXcmFwQ2xpY2sgPSB0aGlzLmhhbmRsZUlucHV0V3JhcENsaWNrLmJpbmQodGhpcylcbiAgfVxuXG4gIGFkZFZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5vblZhbHVlc0NoYW5nZSh0aGlzLnByb3BzLnZhbHVlcy5jb25jYXQobmV3VmFsdWUpKVxuICAgIGlmICh0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UodGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHRpb24gPT4gKG9wdGlvbi52YWx1ZSA9PT0gbmV3VmFsdWUudmFsdWVcbiAgICAgICAgPyBPYmplY3QuYXNzaWduKHt9LCBvcHRpb24sIHsgZGlzYWJsZWQ6IHRydWUgfSlcbiAgICAgICAgOiBvcHRpb24pKSlcbiAgICB9XG4gICAgdGhpcy5jbGVhcklucHV0VmFsdWUoKVxuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5zdGF5Rm9jdXNlZCA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5wcm9wcy5zdGF5Rm9jdXNlZCAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuZm9jdXNJbnB1dCgpXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd09wdGlvbnM6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZVZhbHVlKGluZGV4KSB7XG4gICAgbGV0IG5ld1ZhbHVlcyA9IFtdXG4gICAgbGV0IHJlbW92ZWRWYWx1ZVxuXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgbmV3VmFsdWVzID0gdGhpcy5wcm9wcy52YWx1ZXMuc2xpY2UoMCwgdGhpcy5wcm9wcy52YWx1ZXMubGVuZ3RoIC0gMSlcbiAgICAgIHJlbW92ZWRWYWx1ZSA9IHRoaXMucHJvcHMudmFsdWVzW3RoaXMucHJvcHMudmFsdWVzLmxlbmd0aCAtIDFdLnZhbHVlXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlcyA9IHRoaXMucHJvcHMudmFsdWVzXG4gICAgICAgIC5maWx0ZXIoKHYsIGkpID0+IHtcbiAgICAgICAgICByZW1vdmVkVmFsdWUgPSB2LnZhbHVlXG4gICAgICAgICAgcmV0dXJuIGkgIT09IGluZGV4XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSh0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiAob3B0aW9uLnZhbHVlID09PSByZW1vdmVkVmFsdWVcbiAgICAgICAgPyBPYmplY3QuYXNzaWduKHt9LCBvcHRpb24sIHsgZGlzYWJsZWQ6IGZhbHNlIH0pXG4gICAgICAgIDogb3B0aW9uKSkpXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vblZhbHVlc0NoYW5nZShuZXdWYWx1ZXMpXG4gIH1cblxuICBjbGVhcklucHV0VmFsdWUoKSB7XG4gICAgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKCcnKVxuICB9XG5cbiAgaGFuZGxlS2V5UHJlc3MoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDggJiYgIXRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgIHRoaXMucmVtb3ZlVmFsdWUoLSAxKVxuICAgIH1cbiAgICAvLyB0b2RvXG4gICAgLy8gaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgdGhpcy5zdGF0ZS5zaG93T3B0aW9ucykge1xuICAgIC8vICAgdGhpcy5hZGRWYWx1ZSgpXG4gICAgLy8gfVxuICB9XG5cbiAgZm9jdXNJbnB1dCgpIHtcbiAgICB0aGlzLmlucHV0LmZvY3VzKClcbiAgfVxuXG4gIGhhbmRsZU91dHNpZGVDbGljayhlKSB7XG4gICAgaWYgKCFpc0Rlc2NlbmRhbnQodGhpcy5pbnB1dFdyYXAsIGUudGFyZ2V0KSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dPcHRpb25zOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVJbnB1dFdyYXBDbGljaygpIHtcbiAgICB0aGlzLmZvY3VzSW5wdXQoKVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3B0aW9uczogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljaylcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIHZhbHVlcywgb25BZGROZXdWYWx1ZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZSB8fCAnJ1xuICAgIGxldCBvcHRpb25zID0gdGhpcy5wcm9wcy5vcHRpb25zIHx8IFtdXG5cbiAgICBsZXQgaW5wdXRXaWR0aCA9IHZhbHVlcy5sZW5ndGggPiAwID8gKHZhbHVlLmxlbmd0aCA9PT0gMCA/IDE2IDogdmFsdWUubGVuZ3RoICogMTYpIDogJzEwMCUnXG4gICAgbGV0IHBsYWNlaG9sZGVyID0gdmFsdWVzLmxlbmd0aCA+IDAgPyAnJyA6IHRoaXMucHJvcHMucGxhY2Vob2xkZXJcblxuICAgIGNvbnN0IHNlbGVjdGl6ZUlucHV0U3R5bGVOYW1lID0gY2xhc3NuYW1lcyh7XG4gICAgICAnc2VsZWN0aXplLWlucHV0JzogdHJ1ZSxcbiAgICAgICdzZWxlY3RpemUtaW5wdXQtLWZvY3VzJzogdGhpcy5zdGF0ZS5mb2N1cyxcbiAgICAgICdzZWxlY3RpemUtaW5wdXQtLWVtcHR5JzogdmFsdWVzLmxlbmd0aCA9PT0gMFxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzZWxlY3RpemUtd3JhcFwiIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJyd9PlxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWwgPyAoXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPntsYWJlbH08L2xhYmVsPlxuICAgICAgICAgICkgOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlTmFtZT17c2VsZWN0aXplSW5wdXRTdHlsZU5hbWV9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJbnB1dFdyYXBDbGlja31cbiAgICAgICAgICByZWY9e3JlZiA9PiB7IHRoaXMuaW5wdXRXcmFwID0gcmVmIH0gfVxuICAgICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZXMubWFwKCh2LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9IHN0eWxlTmFtZT1cInNlbGVjdGl6ZS10YWdcIj5cbiAgICAgICAgICAgICAgICAgIHt2Lm5hbWV9XG4gICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICBzdHlsZU5hbWU9XCJpY29uLXJlbW92ZVwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9ezIwfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVZhbHVlKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGlucHV0V2lkdGggfX1cbiAgICAgICAgICAgIHJlZj17cmVmID0+IHsgdGhpcy5pbnB1dCA9IHJlZiB9IH1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIG9uQmx1cj17ZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1czogZmFsc2UgfSlcbiAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgb25Gb2N1cz17ZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1czogdHJ1ZSB9KVxuICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMub25JbnB1dENoYW5nZSgoZS50YXJnZXQgYXMgYW55KS52YWx1ZSlcbiAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgb25LZXlEb3duPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVLZXlQcmVzcyhlKVxuICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd09wdGlvbnMgJiYgKG9wdGlvbnMubGVuZ3RoICE9PSAwIHx8IG9uQWRkTmV3VmFsdWUpID8gKFxuICAgICAgICAgICAgPHVsIHN0eWxlTmFtZT1cInF1ZXJ5LXJlc3VsdHNcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAob3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZGlzYWJsZWRcIj57b3B0aW9uLm5hbWV9PC9saT5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFZhbHVlKG9wdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uT3B0aW9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk9wdGlvbkNsaWNrKG9wdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e29wdGlvbi5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbkFkZE5ld1ZhbHVlID8gKFxuICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIG9uQWRkTmV3VmFsdWUodGhpcy5wcm9wcy52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZFwiPua3u+WKoCA8c3Ryb25nPnt0aGlzLnByb3BzLnZhbHVlfTwvc3Ryb25nPjwvbGk+XG4gICAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICApIDogbnVsbFxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0aXplSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vU2VsZWN0aXplSW5wdXQuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0NjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlbGVjdGl6ZS13cmFwXzNBTUFpIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLnNlbGVjdGl6ZS1pbnB1dF8xNGJnUCB7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHRyYW5zaXRpb246IGFsbCAwcztcXG4gIGN1cnNvcjogdGV4dDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cXG4gIC5zZWxlY3RpemUtaW5wdXRfMTRiZ1AgaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7IH1cXG5cXG4uc2VsZWN0aXplLWlucHV0LS1mb2N1c19Vblo4QiB7XFxuICBib3JkZXItY29sb3I6ICMxQjI2N0Y7IH1cXG5cXG4uc2VsZWN0aXplLWlucHV0LS1lbXB0eV94bjdVeSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogNXB4IDVweCAwOyB9XFxuXFxuLnNlbGVjdGl6ZS1pbnB1dF8xNGJnUCBpbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XFxuXFxuLnF1ZXJ5LXJlc3VsdHNfT2dFMnQge1xcbiAgbWFyZ2luLXRvcDogLTNweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMyKTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB6LWluZGV4OiA5MDA7IH1cXG5cXG4ucXVlcnktcmVzdWx0c19PZ0UydCBsaSB7XFxuICBwYWRkaW5nOiAwIDdweDtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4OyB9XFxuICAucXVlcnktcmVzdWx0c19PZ0UydCBsaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMxQjI2N0Y7XFxuICAgIGNvbG9yOiAjZmZmOyB9XFxuXFxuLnNlbGVjdGl6ZS10YWdfM2FEMTMge1xcbiAgYmFja2dyb3VuZDogIzFCMjY3RjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDNweCAyNXB4IDNweCA1cHg7XFxuICBtYXJnaW46IDVweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmljb24tcmVtb3ZlXzFPN0ZfIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1cHg7XFxuICB0b3A6IDJweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInNlbGVjdGl6ZS13cmFwXCI6IFwic2VsZWN0aXplLXdyYXBfM0FNQWlcIixcblx0XCJzZWxlY3RpemUtaW5wdXRcIjogXCJzZWxlY3RpemUtaW5wdXRfMTRiZ1BcIixcblx0XCJzZWxlY3RpemUtaW5wdXQtLWZvY3VzXCI6IFwic2VsZWN0aXplLWlucHV0LS1mb2N1c19Vblo4QlwiLFxuXHRcInNlbGVjdGl6ZS1pbnB1dC0tZW1wdHlcIjogXCJzZWxlY3RpemUtaW5wdXQtLWVtcHR5X3huN1V5XCIsXG5cdFwicXVlcnktcmVzdWx0c1wiOiBcInF1ZXJ5LXJlc3VsdHNfT2dFMnRcIixcblx0XCJzZWxlY3RpemUtdGFnXCI6IFwic2VsZWN0aXplLXRhZ18zYUQxM1wiLFxuXHRcImljb24tcmVtb3ZlXCI6IFwiaWNvbi1yZW1vdmVfMU83Rl9cIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ2NVxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vVGV4dGFyZWEnXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm9wcyBhcyBJbnB1dFByb3BzIH0gZnJvbSAnLi4vSW5wdXQvSW5wdXQnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vVGV4dGFyZWEuY3NzJylcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyBleHRlbmRzIElucHV0UHJvcHMge1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIFRleHRhcmVhIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9XCJ0ZXh0YXJlYS13cmFwXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJ30+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIHN0eWxlTmFtZT1cInRleHRhcmVhXCJcbiAgICAgICAgICB0eXBlPXt0aGlzLnByb3BzLnR5cGUgPyB0aGlzLnByb3BzLnR5cGUgOiAndGV4dCd9XG4gICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lID8gdGhpcy5wcm9wcy5uYW1lIDogbnVsbH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9UZXh0YXJlYS5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0NjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSFzdHlsZXMvdmFyaWFibGVzLmNzc1wiKSwgXCJcIik7XG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4uL0lucHV0L0lucHV0LmNzc1wiKSwgdW5kZWZpbmVkKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGV4dGFyZWEtd3JhcF9Ya3BqMSB7XFxufVxcblxcbi50ZXh0YXJlYV8xRWRvUyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXkpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjNzO1xcbn1cXG5cXG4udGV4dGFyZWFfMUVkb1M6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidGV4dGFyZWEtd3JhcFwiOiBcInRleHRhcmVhLXdyYXBfWGtwajEgXCIgKyByZXF1aXJlKFwiLSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi4vSW5wdXQvSW5wdXQuY3NzXCIpLmxvY2Fsc1tcImlucHV0LXdyYXBcIl0gKyBcIlwiLFxuXHRcInRleHRhcmVhXCI6IFwidGV4dGFyZWFfMUVkb1NcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vcG9zdGNzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEuY3NzXG4gKiogbW9kdWxlIGlkID0gNDY5XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBmZXRjaEJvb2sgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vZWxlbWVudHMvTG9hZGluZydcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL19mb3JtJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IERvY0NvbnRhaW5lciBmcm9tICcuLi8uLi9jb250YWluZXJzL0RvY0NvbnRhaW5lcidcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Cb29rRGV0YWlsLnNjc3MnKVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIEJvb2tEZXRhaWwgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcblxuICBib29rSWQ6IHN0cmluZ1xuXG4gIHN0YXRpYyBmZXRjaERhdGEoe3N0b3JlLCBwYXJhbXN9KSB7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGZldGNoQm9vayhwYXJhbXMuaWQpKVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmJvb2tJZCA9IHByb3BzLnBhcmFtcy5pZFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5mZXRjaEJvb2sodGhpcy5ib29rSWQpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGJvb2tJbmZvID0gdGhpcy5wcm9wcy5ib29rSW5mbyA/IHRoaXMucHJvcHMuYm9va0luZm8gOiB7fVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2NDb250YWluZXIgYm9keUNsYXNzPVwiYm9vay1pbmZvXCIgdGl0bGU9e2Jvb2tJbmZvLnRpdGxlfT5cbiAgICAgICAgPGFydGljbGUgc3R5bGVOYW1lPVwiYm9vay1pbmZvLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF8uaXNFbXB0eShib29rSW5mbykgJiYgKFxuICAgICAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImJvb2stZGV0YWlsXCI+XG4gICAgICAgICAgICA8aGVhZGVyIHN0eWxlTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImxlZnQtY29sXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYm9va0luZm8uY292ZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImJvb2stY292ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlTmFtZT1cImltZ1wiIHNyYz17Ym9va0luZm8uY292ZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwicmlnaHQtY29sXCI+XG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlTmFtZT1cImJvb2stbmFtZVwiPntib29rSW5mby50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiYm9vay1hdXRob3JcIj5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+5L2c6ICF77yae2Jvb2tJbmZvLmF1dGhvcnMgJiYgYm9va0luZm8uYXV0aG9ycy5tYXAoYSA9PiBhLm5hbWUpLmpvaW4oJywgJykgfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJvb2tJbmZvLnRpdGxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlTmFtZT1cImJ0bi1yZWFkXCIgdG89e2Avdmlld2VyL2Jvb2svJHtib29rSW5mby5pZH1gfSBjb2xvcj1cImJsdWVcIj7pmIXor7s8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsvKjxwPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2BodHRwOi8vYm9vay5kb3ViYW4uY29tL3N1YmplY3QvJHtib29rSW5mby5ib29rX2lkfWB9PuWcqOixhueTo+afpeecizwvYT48L3A+Ki99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJvb2tJbmZvLmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZU5hbWU9XCJkZXNjXCI+5YaF5a65566A5LuLPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxwPntib29rSW5mby5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9Eb2NDb250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHM6IGFueSkgPT4ge1xuICAgIHJldHVybiB7IGJvb2tJbmZvOiBzdGF0ZS5lbnRpdGllcy5ib29rc1tvd25Qcm9wcy5wYXJhbXMuaWRdIH1cbiAgfSxcbiAgeyBmZXRjaEJvb2sgfVxuKShCb29rRGV0YWlsKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL0Jvb2tEZXRhaWwvQm9va0RldGFpbC50c3hcbiAqKi8iLCJpbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBMb2FkaW5nIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLXdyYXBcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLWxvYWRpbmdcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0Jvb2tEZXRhaWwuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Cb29rRGV0YWlsL0Jvb2tEZXRhaWwuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ4OVxuICoqIG1vZHVsZSBjaHVua3MgPSA0XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYm9vay1kZXRhaWxfMml6Vkoge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcXG4gIG1hcmdpbi10b3A6IDQwcHg7IH1cXG5cXG4uYm9vay1pbmZvLWNvbnRhaW5lcl8yRndWUiB7XFxuICB3aWR0aDogODUwcHg7XFxuICBtYXJnaW46IDAgYXV0bzsgfVxcblxcbi5oZWFkZXJfMXZvMEsge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDQwcHggODBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5idG4tcmVhZF8zRXV3YiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDQwcHg7IH1cXG5cXG4ubGVmdC1jb2xfMkdXZW8ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7IH1cXG5cXG4ucmlnaHQtY29sXzJfcjFwIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmJvb2stbmFtZV9qTHZ1QiB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xcbiAgY29sb3I6ICMzMzM7XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkOyB9XFxuXFxuLmJvb2stYXV0aG9yXy1lVnZXIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG5cXG4uYm9vay1jb3Zlcl8xUUpZeSB7XFxuICBtYXJnaW46IDA7XFxuICB0b3A6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uaW1nXzJYWkRnIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLmNvbnRlbnRfMXVvLWUge1xcbiAgcGFkZGluZzogNDBweCA4MHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XFxuICBsaW5lLWhlaWdodDogMS43OyB9XFxuXFxuLmRlc2NfM3ladFQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMzMzOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiYm9vay1kZXRhaWxcIjogXCJib29rLWRldGFpbF8yaXpWSlwiLFxuXHRcImJvb2staW5mby1jb250YWluZXJcIjogXCJib29rLWluZm8tY29udGFpbmVyXzJGd1ZSXCIsXG5cdFwiaGVhZGVyXCI6IFwiaGVhZGVyXzF2bzBLXCIsXG5cdFwiYnRuLXJlYWRcIjogXCJidG4tcmVhZF8zRXV3YlwiLFxuXHRcImxlZnQtY29sXCI6IFwibGVmdC1jb2xfMkdXZW9cIixcblx0XCJyaWdodC1jb2xcIjogXCJyaWdodC1jb2xfMl9yMXBcIixcblx0XCJib29rLW5hbWVcIjogXCJib29rLW5hbWVfakx2dUJcIixcblx0XCJib29rLWF1dGhvclwiOiBcImJvb2stYXV0aG9yXy1lVnZXXCIsXG5cdFwiYm9vay1jb3ZlclwiOiBcImJvb2stY292ZXJfMVFKWXlcIixcblx0XCJpbWdcIjogXCJpbWdfMlhaRGdcIixcblx0XCJjb250ZW50XCI6IFwiY29udGVudF8xdW8tZVwiLFxuXHRcImRlc2NcIjogXCJkZXNjXzN5WnRUXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Cb29rRGV0YWlsL0Jvb2tEZXRhaWwuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ5MFxuICoqIG1vZHVsZSBjaHVua3MgPSA0XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==