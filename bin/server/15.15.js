exports.ids = [15];
exports.modules = {

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Textarea = exports.SelectizeInput = exports.Input = exports.Button = undefined;
	
	var _Button = __webpack_require__(363);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Input = __webpack_require__(408);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _SelectizeInput = __webpack_require__(412);
	
	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);
	
	var _Textarea = __webpack_require__(416);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Button = _Button2.default;
	exports.Input = _Input2.default;
	exports.SelectizeInput = _SelectizeInput2.default;
	exports.Textarea = _Textarea2.default;

/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Input = __webpack_require__(409);
	
	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Input2.default;

/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(93);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(274);
	
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
	
	var styles = __webpack_require__(410);
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

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(411);
	    var insertCss = __webpack_require__(278);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(277)();
	// imports
	exports.i(__webpack_require__(392), "");
	
	// module
	exports.push([module.id, ".input-wrap_3dHA3 {\n  margin: 10px 0;\n  position: relative;\n}\n\n.input_2juBO {\n  width: 100%;\n  padding: var(--input-padding) 5px;\n  border: 1px solid var(--gray);\n  transition: border-color .3s;\n  line-height: var(--input-line-height);\n  outline: none;\n}\n\n.input_2juBO:focus {\n  border-color: var(--blue);\n}\n", ""]);
	
	// exports
	exports.locals = {
		"input-wrap": "input-wrap_3dHA3",
		"input": "input_2juBO"
	};

/***/ },

/***/ 412:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _SelectizeInput = __webpack_require__(413);
	
	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SelectizeInput2.default;

/***/ },

/***/ 413:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(93);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Icon = __webpack_require__(270);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _classnames = __webpack_require__(272);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(274);
	
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
	
	var styles = __webpack_require__(414);
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
	        _this.hideOptions = _this.hideOptions.bind(_this);
	        _this.focusInput = _this.focusInput.bind(_this);
	        _this.showOptions = _this.showOptions.bind(_this);
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
	        key: "hideOptions",
	        value: function hideOptions() {
	            this.setState({
	                showOptions: false
	            });
	        }
	    }, {
	        key: "showOptions",
	        value: function showOptions(e) {
	            e.stopPropagation();
	            this.setState({
	                showOptions: true
	            });
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            window.addEventListener('click', this.hideOptions);
	        }
	    }, {
	        key: "componentDidUpdate",
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            window.removeEventListener('click', this.hideOptions);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var label = this.props.label ? this.props.label : null;
	            var value = this.props.value ? this.props.value : '';
	            var values = this.props.values;
	            var options = this.props.options ? this.props.options : [];
	            var inputWidth = values.length > 0 ? value.length === 0 ? 16 : value.length * 16 : '100%';
	            var placeholder = values.length > 0 ? '' : this.props.placeholder;
	            var addNewValue = this.props.addNewValue ? this.props.addNewValue : undefined;
	            var selectizeInputStyleName = (0, _classnames2.default)({
	                'selectize-input': true,
	                'selectize-input--focus': this.state.focus,
	                'selectize-input--empty': values.length === 0
	            });
	            return _react2.default.createElement("div", { styleName: "selectize-wrap", className: this.props.className || '' }, label ? _react2.default.createElement("label", { className: "form-label" }, label) : null, _react2.default.createElement("div", { styleName: selectizeInputStyleName, onClick: function onClick(e) {
	                    _this2.focusInput();
	                    _this2.showOptions(e);
	                } }, values.map(function (v, index) {
	                return _react2.default.createElement("span", { key: index, styleName: "selectize-tag" }, v.name, _react2.default.createElement(_Icon2.default, { styleName: "icon", size: 20, name: "close", onClick: function onClick(e) {
	                        _this2.removeValue(index);
	                    } }));
	            }), _react2.default.createElement("input", { style: { width: inputWidth }, ref: function ref(_ref) {
	                    _this2.input = _ref;
	                }, value: value, placeholder: placeholder, onBlur: function onBlur(e) {
	                    _this2.setState({ focus: false });
	                }, onFocus: function onFocus(e) {
	                    _this2.setState({ focus: true });
	                }, onChange: function onChange(e) {
	                    _this2.props.onInputChange(e.target.value);
	                }, onKeyDown: function onKeyDown(e) {
	                    _this2.handleKeyPress(e);
	                } })), this.state.showOptions ? _react2.default.createElement("ul", { styleName: "query-results" }, options.map(function (option, index) {
	                if (option.disabled) {
	                    return _react2.default.createElement("li", { key: index, className: "disabled" }, option.name);
	                }
	                return _react2.default.createElement("li", { key: index, onClick: function onClick(e) {
	                        _this2.addValue(option);
	                        if (_this2.props.onOptionClick) {
	                            _this2.props.onOptionClick(option);
	                        }
	                    } }, _react2.default.createElement("span", null, option.name));
	            }), addNewValue ? _react2.default.createElement("li", { onClick: function onClick(e) {
	                    _this2.props.onAddNewValue(_this2.props.value);
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

/***/ 414:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(415);
	    var insertCss = __webpack_require__(278);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 415:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(277)();
	// imports
	exports.i(__webpack_require__(392), "");
	exports.i(__webpack_require__(411), undefined);
	
	// module
	exports.push([module.id, ".selectize-wrap_1HASb {\n}\n\n.selectize-input_1xAYz {\n  min-width: 300px;\n  border: 1px solid var(--gray);\n  margin: 10px 0;\n  box-sizing: border-box;\n  padding: $input_padding 5px calc(var(--input-padding) - 5);\n  transition: var(--gray) .3s;\n  cursor: text;\n}\n\n.selectize-input--focus_1uc2r {\n  border-color: var(--blue);\n}\n.selectize-input--empty_19EF1 {\n  padding-bottom: var(--input-padding);\n}\n\n.selectize-input_1xAYz input {\n  border: none;\n  outline: none;\n  line-height: $input_line_height;\n  margin-bottom: 5px;\n}\n\n.query-results_2fBA9 {\n  margin-top: -3px;\n  margin-bottom: 5px;\n  padding: 5px;\n  border-radius: 3px;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  box-shadow: var(--shadow-y1);\n  background: #fff;\n  z-index: var(--z-selectize-options);\n}\n\n.query-results_2fBA9 li {\n  padding: 0 7px;\n  line-height: 2;\n  cursor: pointer;\n}\n.query-results_2fBA9 li:hover {\n  background: var(--blue);\n  color: #fff;\n}\n\n.selectize-tag_1L1JH {\n  /*@extend .tag;*/\n  /*composes: tag from \"styles/base.css\";*/\n  /* todo */\n  background: var(--blue);\n  cursor: pointer;\n}\n\n.selectize-tag_1L1JH .icon_NOc-E {\n  font-size: 0.8rem;\n  margin-left: 5px;\n}", ""]);
	
	// exports
	exports.locals = {
		"selectize-wrap": "selectize-wrap_1HASb " + __webpack_require__(411).locals["input-wrap"] + "",
		"selectize-input": "selectize-input_1xAYz",
		"selectize-input--focus": "selectize-input--focus_1uc2r selectize-input_1xAYz",
		"selectize-input--empty": "selectize-input--empty_19EF1 selectize-input_1xAYz",
		"query-results": "query-results_2fBA9",
		"selectize-tag": "selectize-tag_1L1JH",
		"icon": "icon_NOc-E"
	};

/***/ },

/***/ 416:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Textarea = __webpack_require__(417);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Textarea2.default;

/***/ },

/***/ 417:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(93);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(274);
	
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
	
	var styles = __webpack_require__(418);
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

/***/ 418:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(419);
	    var insertCss = __webpack_require__(278);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 419:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(277)();
	// imports
	exports.i(__webpack_require__(392), "");
	exports.i(__webpack_require__(411), undefined);
	
	// module
	exports.push([module.id, ".textarea-wrap_Xkpj1 {\n}\n\n.textarea_1EdoS {\n  width: 100%;\n  padding: 5px;\n  border: 1px solid var(--gray);\n  outline: none;\n  height: 100px;\n  transition: border-color .3s;\n}\n\n.textarea_1EdoS:focus {\n  border-color: var(--blue);\n}\n", ""]);
	
	// exports
	exports.locals = {
		"textarea-wrap": "textarea-wrap_Xkpj1 " + __webpack_require__(411).locals["input-wrap"] + "",
		"textarea": "textarea_1EdoS"
	};

/***/ },

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(93);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(259);
	
	var _Input = __webpack_require__(409);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _actions = __webpack_require__(263);
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RInput = function (_Component) {
	    _inherits(RInput, _Component);
	
	    function RInput(props) {
	        _classCallCheck(this, RInput);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(RInput).call(this, props));
	    }
	
	    _createClass(RInput, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            return _react2.default.createElement(_Input2.default, { name: this.props.name, value: _lodash2.default.get(this.props.elements[this.props.symbol], 'value', ''), placeholder: this.props.placeholder, onChange: function onChange(e) {
	                    var newValue = e.target.value;
	                    _this2.props.changeValue(_this2.props.symbol, newValue);
	                    if (_this2.props.onChange) {
	                        _this2.props.onChange(newValue);
	                    }
	                } });
	        }
	    }]);
	
	    return RInput;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        elements: state.elements
	    };
	}, { changeValue: _actions.changeValue })(RInput);

/***/ },

/***/ 542:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(93);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(259);
	
	var _Textarea = __webpack_require__(417);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);
	
	var _actions = __webpack_require__(263);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RTextarea = function (_Component) {
	    _inherits(RTextarea, _Component);
	
	    function RTextarea(props) {
	        _classCallCheck(this, RTextarea);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(RTextarea).call(this, props));
	    }
	
	    _createClass(RTextarea, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            return _react2.default.createElement(_Textarea2.default, { value: _.get(this.props.elements[this.props.symbol], 'value', ''), placeholder: this.props.placeholder, onChange: function onChange(e) {
	                    var newValue = e.target.value;
	                    _this2.props.changeValue(_this2.props.symbol, newValue);
	                    if (_this2.props.onChange) {
	                        _this2.props.onChange(newValue);
	                    }
	                } });
	        }
	    }]);
	
	    return RTextarea;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        elements: state.elements
	    };
	}, { changeValue: _actions.changeValue })(RTextarea);

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(93);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(259);
	
	var _actions = __webpack_require__(263);
	
	var _form = __webpack_require__(407);
	
	var _apis = __webpack_require__(393);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _RInput = __webpack_require__(541);
	
	var _RInput2 = _interopRequireDefault(_RInput);
	
	var _RTextarea = __webpack_require__(542);
	
	var _RTextarea2 = _interopRequireDefault(_RTextarea);
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var syls = {
	    inputCollectionName: Symbol('inputCollectionName'),
	    inputBookName: Symbol('inputBookName'),
	    textareaCollectionDesc: Symbol('textareaCollectionDesc')
	};
	
	var AddCollection = function (_Component) {
	    _inherits(AddCollection, _Component);
	
	    function AddCollection(props) {
	        _classCallCheck(this, AddCollection);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddCollection).call(this, props));
	
	        _this.defaultState = {
	            optionsOfBooks: [],
	            valuesOfBooks: []
	        };
	        _this.state = Object.assign({}, _this.defaultState);
	        _this.addCollection = _this.addCollection.bind(_this);
	        return _this;
	    }
	
	    _createClass(AddCollection, [{
	        key: 'resetForm',
	        value: function resetForm() {
	            this.props.changeValue(syls.inputCollectionName, '');
	            this.props.changeValue(syls.textareaCollectionDesc, '');
	            this.setState(this.defaultState);
	        }
	    }, {
	        key: 'addCollection',
	        value: function addCollection() {
	            var _this2 = this;
	
	            var name = this.props.elements[syls.inputCollectionName].value;
	            var items = this.state.valuesOfBooks.map(function (a) {
	                return a.value;
	            });
	            var description = this.props.elements[syls.textareaCollectionDesc].value;
	            var data = { name: name, items: items, description: description, creator: this.props.session.user.id };
	            _apis2.default.addCollection(data).then(function (result) {
	                _this2.props.sendNotification('添加成功！');
	                _this2.resetForm();
	            }, function (error) {
	                _this2.props.sendNotification(error.message);
	            });
	        }
	    }, {
	        key: 'searchBooks',
	        value: function searchBooks(query) {
	            var _this3 = this;
	
	            if (query !== '') {
	                _apis2.default.searchBooks(query).then(function (response) {
	                    _this3.setState({
	                        optionsOfBooks: response.map(function (r) {
	                            return {
	                                name: r.title,
	                                value: r.id
	                            };
	                        })
	                    });
	                });
	            }
	        }
	        // searchTags(query) {
	        //   if(query !== '') {
	        //     apis.searchTags(query).then(response => {
	        //       console.log(response)
	        //       this.setState({
	        //         tagResults: response
	        //       })
	        //     })
	        //   }
	        // }
	
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this4 = this;
	
	            return _react2.default.createElement("form", null, _react2.default.createElement("h1", { className: "page-title" }, "Add Collection"), _react2.default.createElement(_RInput2.default, { symbol: syls.inputCollectionName, placeholder: "Name" }), _react2.default.createElement(_form.SelectizeInput, { placeholder: "Books", onInputChange: function onInputChange(newValue) {
	                    _this4.searchBooks(newValue);
	                    _this4.props.changeValue(syls.inputBookName, newValue);
	                }, value: _lodash2.default.get(this.props.elements[syls.inputBookName], 'value', ''), onValuesChange: function onValuesChange(newValues) {
	                    _this4.setState({
	                        valuesOfBooks: newValues
	                    });
	                }, options: this.state.optionsOfBooks, values: this.state.valuesOfBooks }), _react2.default.createElement(_RTextarea2.default, { symbol: syls.textareaCollectionDesc, placeholder: "Description" }), _react2.default.createElement(_form.Button, { onClick: this.addCollection }, "Add"));
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
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, changeValue: _actions.changeValue })(AddCollection);

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vaW5kZXgudHM/NTBkNyoqKioqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvaW5kZXgudHM/MjFkMyoqKioqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQudHN4P2RhMWQqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuY3NzPzA1MGEqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L0lucHV0LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvaW5kZXgudHM/N2U4MCoqKioqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQudHN4PzRlNzMqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQuY3NzPzUzOTkqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvaW5kZXgudHM/YjgxMioqKioqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEudHN4P2MyYWYqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEuY3NzP2FhMjEqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX3dyYXBwZWQvUklucHV0LnRzeD9mYmM1Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fd3JhcHBlZC9SVGV4dGFyZWEudHN4PzBjYTEiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9BZGRDb2xsZWN0aW9uL0FkZENvbGxlY3Rpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNkI7Ozs7QUFDRjs7OztBQUNrQjs7OztBQUc3Qzs7Ozs7O1NBQWU7U0FBTztTQUFnQjtTQUFZLDhCOzs7Ozs7Ozs7Ozs7O0FDSjlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RvQjs7OztBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMUMsS0FBWSxTQUFVLG9CQUFlO0FBY3JDOzs7QUFDRSxvQkFBaUIsT0FDZjs7O3lGQUdJOzs7Ozs7OztBQUNKLGlCQUFTLFFBQVMsT0FBTyxPQUFHLElBQU0sS0FBTztBQUN6QyxvQkFBWSxNQUFVO0FBRWYsb0JBQ0wsOEJBQUksU0FBVSxXQUFhLGNBQVUsV0FBTSxLQUFNLE1BQVUsYUFBTyxvQ0FDMUQsV0FDSyxXQUFRLFNBQ04sYUFBTSxLQUFNLE1BQWEsYUFDL0IsT0FBTSxLQUFNLE1BQU8sT0FDaEI7QUFDRiw0QkFBTSxNQUFTLFNBQ25CO2tCQUZTLEVBR1AsTUFBTSxLQUFNLE1BQUssT0FBTyxLQUFNLE1BQUssT0FBVSxRQUM3QyxNQUFNLEtBQU0sTUFBSyxPQUFPLEtBQU0sTUFBSyxPQUtoRCxNQWJPOzs7O1lBWHFCOztBQUg3QixvREFBa0IsUUFBRTtBQUNMLG9CQUNiO0VBRlMsSUE2Qlg7bUJBQW9CLE07Ozs7Ozs7O0FDekNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFF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LEtBQU0sTUFBUSxRQUFLLEtBQUs7QUFFMUUsNEJBQWMsY0FBTSxNQUFLO0FBQ3ZCLHdCQUFNLE1BQWlCLGlCQUFTO0FBQ2hDLHdCQUNMO2NBSG1DO0FBSTlCLHdCQUFNLE1BQWlCLGlCQUFNLE1BSTFCO2NBTEQ7Ozs7cUNBS087OztBQUNaLGlCQUFNLFVBQVE7QUFDWCxnQ0FBWSxZQUFPLE9BQUs7QUFDdEIsNEJBQVMsU0FBQztBQUNFLHlDQUFVLFNBQUk7b0NBQU87QUFDN0IsdUNBQUcsRUFBTTtBQUNSLHdDQUFHLEVBa0JEOzswQkFwQnlCOztrQkFGRCxFQURwQjs7Ozs7Ozs7Ozs7Ozs7Ozs2Q0EwQmY7Ozs7OztBQUNHLG9CQUNMLDhCQUFLLGNBQ0gsOEJBQUcsUUFBVSxXQUFhLGdCQUFvQixtQkFDOUMsZ0JBQU8sa0NBQU8sUUFBTSxLQUFxQixxQkFBWSxhQUFVLDJCQUNoRCxzQ0FDRixhQUFRLFNBQ047QUFDUCw0QkFBWSxZQUFVO0FBQ3RCLDRCQUFNLE1BQVksWUFBSyxLQUFjLGVBQ3hDO2tCQUhvQixFQUlsQixPQUFHLGlCQUFJLElBQUssS0FBTSxNQUFTLFNBQUssS0FBZSxnQkFBUyxTQUFNLEtBQ3JEO0FBQ1IsNEJBQVMsU0FBQztBQUNDLHdDQUVkOztrQkFKc0IsRUFLbEIsU0FBTSxLQUFNLE1BQWdCLGdCQUM3QixRQUFNLEtBQU0sTUFDbEIsZUFkRixHQWVBLGdCQUFVLHFDQUFPLFFBQU0sS0FBd0Isd0JBQWEsYUFBaUIsa0JBQzdFLGdCQUFPLDhCQUFRLFNBQU0sS0FBZSxpQkFJM0M7Ozs7Ozs7QUFFRCwwQkFBOEI7QUFDdEIsWUFBQztBQUNPLHVCQUFPLE1BQVcsV0FBYTtBQUNuQyxtQkFBTyxNQUFTO0FBQ2pCLGtCQUFPLE1BSWxCOzs7bUJBQXNCLHlCQUNMLGlCQUNmLEVBQWtCLDZDQUNuQixxQ0FBc0IsZSIsImZpbGUiOiIxNS4xNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcbmltcG9ydCBTZWxlY3RpemVJbnB1dCBmcm9tICcuL1NlbGVjdGl6ZUlucHV0J1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vVGV4dGFyZWEnXG5cbmV4cG9ydCB7IEJ1dHRvbiwgSW5wdXQsIFNlbGVjdGl6ZUlucHV0LCBUZXh0YXJlYSB9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9pbmRleC50c1xuICoqLyIsImltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuZXhwb3J0IGRlZmF1bHQgSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0lucHV0LmNzcycpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgb25DaGFuZ2U/OiBhbnlcbiAgdmFsdWU/OiBzdHJpbmdcbiAgdHlwZT86IHN0cmluZ1xuICBuYW1lPzogc3RyaW5nXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpXG4gICAgZGVsZXRlIHByb3BzLmNsYXNzTmFtZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwiaW5wdXQtd3JhcFwiIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJyd9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBzdHlsZU5hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKVxuICAgICAgICAgIH19XG4gICAgICAgICAgdHlwZT17dGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ3RleHQnfVxuICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZSA/IHRoaXMucHJvcHMubmFtZSA6IG51bGx9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L0lucHV0LnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vSW5wdXQuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuY3NzXG4gKiogbW9kdWxlIGlkID0gNDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMiA1IDcgOCA5IDEwIDEyIDE0IDE1XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIXN0eWxlcy92YXJpYWJsZXMuY3NzXCIpLCBcIlwiKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5wdXQtd3JhcF8zZEhBMyB7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmlucHV0XzJqdUJPIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogdmFyKC0taW5wdXQtcGFkZGluZykgNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheSk7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjNzO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWlucHV0LWxpbmUtaGVpZ2h0KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5pbnB1dF8yanVCTzpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJpbnB1dC13cmFwXCI6IFwiaW5wdXQtd3JhcF8zZEhBM1wiLFxuXHRcImlucHV0XCI6IFwiaW5wdXRfMmp1Qk9cIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vcG9zdGNzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuY3NzXG4gKiogbW9kdWxlIGlkID0gNDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMiA1IDcgOCA5IDEwIDEyIDE0IDE1XG4gKiovIiwiaW1wb3J0IFNlbGVjdGl6ZUlucHV0IGZyb20gJy4vU2VsZWN0aXplSW5wdXQnXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RpemVJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9JY29uJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9TZWxlY3RpemVJbnB1dC5jc3MnKVxuXG50eXBlIFR5cGVPcHRpb24gPSB7XG4gIHZhbHVlOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICBhZGRpdGlvbmFsPzogYW55XG59XG5cbnR5cGUgVHlwZVZhbHVlID0ge1xuICB2YWx1ZTogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nXG4gIGxhYmVsPzogc3RyaW5nXG4gIHN0YXlGb2N1c2VkPzogYm9vbGVhbiAvLyBkZWZhdWx0IHRydWVcblxuICB2YWx1ZTogc3RyaW5nXG4gIG9uSW5wdXRDaGFuZ2U6IChuZXdWYWx1ZTogc3RyaW5nKSA9PiB2b2lkXG5cbiAgb3B0aW9uczogQXJyYXk8VHlwZU9wdGlvbj5cbiAgb25PcHRpb25zQ2hhbmdlPzogKG5ld1ZhbHVlczogQXJyYXk8VHlwZU9wdGlvbj4pID0+IHZvaWRcblxuICB2YWx1ZXM6IEFycmF5PFR5cGVWYWx1ZT5cbiAgb25WYWx1ZXNDaGFuZ2U6IChuZXdWYWx1ZXM6IEFycmF5PFR5cGVWYWx1ZT4pID0+IHZvaWRcblxuICAvLyDpop3lpJblip/og71cbiAgYWRkTmV3VmFsdWU/OiBib29sZWFuXG4gIG9uQWRkTmV3VmFsdWU/OiAobmV3VmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICBvbk9wdGlvbkNsaWNrPzogKHNlbGVjdGVkVmFsdWU6IFR5cGVPcHRpb24pID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIGZvY3VzPzogYm9vbGVhblxuICBzaG93T3B0aW9ucz86IGJvb2xlYW5cbiAgdmFsdWU/OiBzdHJpbmdcbiAgZXhwZW5kZWRPcHRpb25JbmRleD86IG51bWJlclxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIFNlbGVjdGl6ZUlucHV0IGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgaW5wdXQ6IGFueVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dPcHRpb25zOiBmYWxzZSxcbiAgICAgIGZvY3VzOiBmYWxzZSxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIGV4cGVuZGVkT3B0aW9uSW5kZXg6IDBcbiAgICB9XG4gICAgdGhpcy5oaWRlT3B0aW9ucyA9IHRoaXMuaGlkZU9wdGlvbnMuYmluZCh0aGlzKVxuICAgIHRoaXMuZm9jdXNJbnB1dCA9IHRoaXMuZm9jdXNJbnB1dC5iaW5kKHRoaXMpXG4gICAgdGhpcy5zaG93T3B0aW9ucyA9IHRoaXMuc2hvd09wdGlvbnMuYmluZCh0aGlzKVxuICB9XG5cbiAgYWRkVmFsdWUobmV3VmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLm9uVmFsdWVzQ2hhbmdlKHRoaXMucHJvcHMudmFsdWVzLmNvbmNhdChuZXdWYWx1ZSkpXG4gICAgaWYgKHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSh0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiAob3B0aW9uLnZhbHVlID09PSBuZXdWYWx1ZS52YWx1ZVxuICAgICAgICA/IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbiwgeyBkaXNhYmxlZDogdHJ1ZSB9KVxuICAgICAgICA6IG9wdGlvbikpKVxuICAgIH1cbiAgICB0aGlzLmNsZWFySW5wdXRWYWx1ZSgpXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnN0YXlGb2N1c2VkID09PSAndW5kZWZpbmVkJyB8fCB0aGlzLnByb3BzLnN0YXlGb2N1c2VkICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5mb2N1c0lucHV0KClcbiAgICB9XG4gICAgdGhpcy5oaWRlT3B0aW9ucygpXG4gIH1cblxuICByZW1vdmVWYWx1ZShpbmRleCkge1xuICAgIGxldCBuZXdWYWx1ZXMgPSBbXVxuICAgIGxldCByZW1vdmVkVmFsdWVcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIG5ld1ZhbHVlcyA9IHRoaXMucHJvcHMudmFsdWVzLnNsaWNlKDAsIHRoaXMucHJvcHMudmFsdWVzLmxlbmd0aCAtIDEpXG4gICAgICByZW1vdmVkVmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlc1t0aGlzLnByb3BzLnZhbHVlcy5sZW5ndGggLSAxXS52YWx1ZVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdWYWx1ZXMgPSB0aGlzLnByb3BzLnZhbHVlc1xuICAgICAgICAuZmlsdGVyKCh2LCBpKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlZFZhbHVlID0gdi52YWx1ZVxuICAgICAgICAgIHJldHVybiBpICE9PSBpbmRleFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UodGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHRpb24gPT4gKG9wdGlvbi52YWx1ZSA9PT0gcmVtb3ZlZFZhbHVlXG4gICAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9uLCB7IGRpc2FibGVkOiBmYWxzZSB9KVxuICAgICAgICA6IG9wdGlvbikpKVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25WYWx1ZXNDaGFuZ2UobmV3VmFsdWVzKVxuICB9XG5cbiAgY2xlYXJJbnB1dFZhbHVlKCkge1xuICAgIHRoaXMucHJvcHMub25JbnB1dENoYW5nZSgnJylcbiAgfVxuXG4gIGhhbmRsZUtleVByZXNzKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4ICYmICF0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICB0aGlzLnJlbW92ZVZhbHVlKC0gMSlcbiAgICB9XG4gICAgLy8gdG9kb1xuICAgIC8vIGlmIChlLmtleUNvZGUgPT09IDEzICYmIHRoaXMuc3RhdGUuc2hvd09wdGlvbnMpIHtcbiAgICAvLyAgIHRoaXMuYWRkVmFsdWUoKVxuICAgIC8vIH1cbiAgfVxuXG4gIGZvY3VzSW5wdXQoKSB7XG4gICAgKHRoaXMuaW5wdXQgYXMgYW55IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmZvY3VzKClcbiAgfVxuXG4gIGhpZGVPcHRpb25zKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd09wdGlvbnM6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHNob3dPcHRpb25zKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3B0aW9uczogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVPcHRpb25zKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVPcHRpb25zKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBsYWJlbCA9IHRoaXMucHJvcHMubGFiZWwgPyB0aGlzLnByb3BzLmxhYmVsIDogbnVsbFxuICAgIGxldCB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgPyB0aGlzLnByb3BzLnZhbHVlIDogJydcbiAgICBsZXQgdmFsdWVzID0gdGhpcy5wcm9wcy52YWx1ZXNcbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9ucyA/IHRoaXMucHJvcHMub3B0aW9ucyA6IFtdXG4gICAgbGV0IGlucHV0V2lkdGggPSB2YWx1ZXMubGVuZ3RoID4gMCA/ICh2YWx1ZS5sZW5ndGggPT09IDAgPyAxNiA6IHZhbHVlLmxlbmd0aCAqIDE2KSA6ICcxMDAlJ1xuICAgIGxldCBwbGFjZWhvbGRlciA9IHZhbHVlcy5sZW5ndGggPiAwID8gJycgOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyXG4gICAgbGV0IGFkZE5ld1ZhbHVlID0gdGhpcy5wcm9wcy5hZGROZXdWYWx1ZSA/IHRoaXMucHJvcHMuYWRkTmV3VmFsdWUgOiB1bmRlZmluZWRcblxuICAgIGNvbnN0IHNlbGVjdGl6ZUlucHV0U3R5bGVOYW1lID0gY2xhc3NuYW1lcyh7XG4gICAgICAnc2VsZWN0aXplLWlucHV0JzogdHJ1ZSxcbiAgICAgICdzZWxlY3RpemUtaW5wdXQtLWZvY3VzJzogdGhpcy5zdGF0ZS5mb2N1cyxcbiAgICAgICdzZWxlY3RpemUtaW5wdXQtLWVtcHR5JzogdmFsdWVzLmxlbmd0aCA9PT0gMFxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzZWxlY3RpemUtd3JhcFwiIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJyd9PlxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWwgPyAoXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPntsYWJlbH08L2xhYmVsPlxuICAgICAgICAgICkgOm51bGxcbiAgICAgICAgfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGVOYW1lPXtzZWxlY3RpemVJbnB1dFN0eWxlTmFtZX1cbiAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNJbnB1dCgpXG4gICAgICAgICAgICB0aGlzLnNob3dPcHRpb25zKGUpXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlcy5tYXAoKHYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gc3R5bGVOYW1lPVwic2VsZWN0aXplLXRhZ1wiPlxuICAgICAgICAgICAgICAgICAge3YubmFtZX1cbiAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlTmFtZT1cImljb25cIlxuICAgICAgICAgICAgICAgICAgICBzaXplPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZShpbmRleClcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IGlucHV0V2lkdGh9fVxuICAgICAgICAgICAgcmVmPXtyZWYgPT4ge3RoaXMuaW5wdXQgPSByZWZ9fVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgb25CbHVyPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiBmYWxzZSB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uRm9jdXM9e2UgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IHRydWUgfSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMub25JbnB1dENoYW5nZSgoZS50YXJnZXQgYXMgYW55KS52YWx1ZSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbktleURvd249e2UgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZUtleVByZXNzKGUpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgKHRoaXMuc3RhdGUuc2hvd09wdGlvbnMpID8gKFxuICAgICAgICAgICAgPHVsIHN0eWxlTmFtZT1cInF1ZXJ5LXJlc3VsdHNcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAob3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZGlzYWJsZWRcIj57b3B0aW9uLm5hbWV9PC9saT5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFZhbHVlKG9wdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uT3B0aW9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk9wdGlvbkNsaWNrKG9wdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e29wdGlvbi5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhZGROZXdWYWx1ZSA/IChcbiAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQWRkTmV3VmFsdWUodGhpcy5wcm9wcy52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkXCI+5re75YqgIDxzdHJvbmc+e3RoaXMucHJvcHMudmFsdWV9PC9zdHJvbmc+PC9saT5cbiAgICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICkgOiBudWxsXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RpemVJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9TZWxlY3RpemVJbnB1dC5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0MTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyIDUgNyA4IDkgMTAgMTIgMTQgMTVcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2Uhc3R5bGVzL3ZhcmlhYmxlcy5jc3NcIiksIFwiXCIpO1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuLi9JbnB1dC9JbnB1dC5jc3NcIiksIHVuZGVmaW5lZCk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlbGVjdGl6ZS13cmFwXzFIQVNiIHtcXG59XFxuXFxuLnNlbGVjdGl6ZS1pbnB1dF8xeEFZeiB7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheSk7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAkaW5wdXRfcGFkZGluZyA1cHggY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nKSAtIDUpO1xcbiAgdHJhbnNpdGlvbjogdmFyKC0tZ3JheSkgLjNzO1xcbiAgY3Vyc29yOiB0ZXh0O1xcbn1cXG5cXG4uc2VsZWN0aXplLWlucHV0LS1mb2N1c18xdWMyciB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG4uc2VsZWN0aXplLWlucHV0LS1lbXB0eV8xOUVGMSB7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW5wdXQtcGFkZGluZyk7XFxufVxcblxcbi5zZWxlY3RpemUtaW5wdXRfMXhBWXogaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAkaW5wdXRfbGluZV9oZWlnaHQ7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5xdWVyeS1yZXN1bHRzXzJmQkE5IHtcXG4gIG1hcmdpbi10b3A6IC0zcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteTEpO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHotaW5kZXg6IHZhcigtLXotc2VsZWN0aXplLW9wdGlvbnMpO1xcbn1cXG5cXG4ucXVlcnktcmVzdWx0c18yZkJBOSBsaSB7XFxuICBwYWRkaW5nOiAwIDdweDtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucXVlcnktcmVzdWx0c18yZkJBOSBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uc2VsZWN0aXplLXRhZ18xTDFKSCB7XFxuICAvKkBleHRlbmQgLnRhZzsqL1xcbiAgLypjb21wb3NlczogdGFnIGZyb20gXFxcInN0eWxlcy9iYXNlLmNzc1xcXCI7Ki9cXG4gIC8qIHRvZG8gKi9cXG4gIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VsZWN0aXplLXRhZ18xTDFKSCAuaWNvbl9OT2MtRSB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInNlbGVjdGl6ZS13cmFwXCI6IFwic2VsZWN0aXplLXdyYXBfMUhBU2IgXCIgKyByZXF1aXJlKFwiLSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi4vSW5wdXQvSW5wdXQuY3NzXCIpLmxvY2Fsc1tcImlucHV0LXdyYXBcIl0gKyBcIlwiLFxuXHRcInNlbGVjdGl6ZS1pbnB1dFwiOiBcInNlbGVjdGl6ZS1pbnB1dF8xeEFZelwiLFxuXHRcInNlbGVjdGl6ZS1pbnB1dC0tZm9jdXNcIjogXCJzZWxlY3RpemUtaW5wdXQtLWZvY3VzXzF1YzJyIHNlbGVjdGl6ZS1pbnB1dF8xeEFZelwiLFxuXHRcInNlbGVjdGl6ZS1pbnB1dC0tZW1wdHlcIjogXCJzZWxlY3RpemUtaW5wdXQtLWVtcHR5XzE5RUYxIHNlbGVjdGl6ZS1pbnB1dF8xeEFZelwiLFxuXHRcInF1ZXJ5LXJlc3VsdHNcIjogXCJxdWVyeS1yZXN1bHRzXzJmQkE5XCIsXG5cdFwic2VsZWN0aXplLXRhZ1wiOiBcInNlbGVjdGl6ZS10YWdfMUwxSkhcIixcblx0XCJpY29uXCI6IFwiaWNvbl9OT2MtRVwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9wb3N0Y3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0MTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyIDUgNyA4IDkgMTAgMTIgMTQgMTVcbiAqKi8iLCJpbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9UZXh0YXJlYSdcbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb3BzIGFzIElucHV0UHJvcHMgfSBmcm9tICcuLi9JbnB1dC9JbnB1dCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9UZXh0YXJlYS5jc3MnKVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSW5wdXRQcm9wcyB7XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cInRleHRhcmVhLXdyYXBcIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnfT5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKVxuICAgICAgICAgIH19XG4gICAgICAgICAgc3R5bGVOYW1lPVwidGV4dGFyZWFcIlxuICAgICAgICAgIHR5cGU9e3RoaXMucHJvcHMudHlwZSA/IHRoaXMucHJvcHMudHlwZSA6ICd0ZXh0J31cbiAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLm5hbWUgPyB0aGlzLnByb3BzLm5hbWUgOiBudWxsfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL1RleHRhcmVhLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDIgNSA3IDggOSAxMCAxMiAxNCAxNVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSFzdHlsZXMvdmFyaWFibGVzLmNzc1wiKSwgXCJcIik7XG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4uL0lucHV0L0lucHV0LmNzc1wiKSwgdW5kZWZpbmVkKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGV4dGFyZWEtd3JhcF9Ya3BqMSB7XFxufVxcblxcbi50ZXh0YXJlYV8xRWRvUyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXkpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjNzO1xcbn1cXG5cXG4udGV4dGFyZWFfMUVkb1M6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidGV4dGFyZWEtd3JhcFwiOiBcInRleHRhcmVhLXdyYXBfWGtwajEgXCIgKyByZXF1aXJlKFwiLSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi4vSW5wdXQvSW5wdXQuY3NzXCIpLmxvY2Fsc1tcImlucHV0LXdyYXBcIl0gKyBcIlwiLFxuXHRcInRleHRhcmVhXCI6IFwidGV4dGFyZWFfMUVkb1NcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vcG9zdGNzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEuY3NzXG4gKiogbW9kdWxlIGlkID0gNDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMiA1IDcgOCA5IDEwIDEyIDE0IDE1XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IElucHV0LCB7IFByb3BzIGFzIElucHV0UHJvcHMgfSBmcm9tICcuLi9fZm9ybS9JbnB1dC9JbnB1dCdcbmltcG9ydCB7IGNoYW5nZVZhbHVlIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSW5wdXRQcm9wcyB7XG4gIHN5bWJvbDogc3ltYm9sXG5cbiAgZWxlbWVudHM/OiBhbnlcbiAgY2hhbmdlVmFsdWU/OiBhbnlcbn1cblxuY2xhc3MgUklucHV0IGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SW5wdXRcbiAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICB2YWx1ZT17Xy5nZXQodGhpcy5wcm9wcy5lbGVtZW50c1t0aGlzLnByb3BzLnN5bWJvbF0sICd2YWx1ZScsICcnKX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZSh0aGlzLnByb3BzLnN5bWJvbCwgbmV3VmFsdWUpXG4gICAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmV3VmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDx7fSwge30sIFByb3BzPihcbiAgc3RhdGUgPT4gKHtcbiAgICBlbGVtZW50czogc3RhdGUuZWxlbWVudHNcbiAgfSksXG4gIHsgY2hhbmdlVmFsdWUgfVxuKShSSW5wdXQpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fd3JhcHBlZC9SSW5wdXQudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFRleHRhcmVhLCB7IFByb3BzIGFzIFRleHRhcmVhUHJvcHMgfSBmcm9tICcuLi9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYSdcbmltcG9ydCB7IGNoYW5nZVZhbHVlIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgVGV4dGFyZWFQcm9wcyB7XG4gIHN5bWJvbD86IHN5bWJvbFxuXG4gIGVsZW1lbnRzPzogYW55XG4gIGNoYW5nZVZhbHVlPzogYW55XG59XG5cbmNsYXNzIFJUZXh0YXJlYSBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRleHRhcmVhXG4gICAgICAgIHZhbHVlPXtfLmdldCh0aGlzLnByb3BzLmVsZW1lbnRzW3RoaXMucHJvcHMuc3ltYm9sXSwgJ3ZhbHVlJywgJycpfVxuICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHRoaXMucHJvcHMuc3ltYm9sLCBuZXdWYWx1ZSlcbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuZXdWYWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PHt9LCB7fSwgUHJvcHM+KFxuICBzdGF0ZSA9PiAoe1xuICAgIGVsZW1lbnRzOiBzdGF0ZS5lbGVtZW50c1xuICB9KSxcbiAgeyBjaGFuZ2VWYWx1ZSB9XG4pKFJUZXh0YXJlYSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL193cmFwcGVkL1JUZXh0YXJlYS50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgY2hhbmdlVmFsdWUgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IHsgQnV0dG9uLCBTZWxlY3RpemVJbnB1dCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL19mb3JtJ1xuaW1wb3J0IGFwaXMgZnJvbSAnLi4vLi4vYXBpcydcbmltcG9ydCBSSW5wdXQgZnJvbSAnLi4vLi4vZWxlbWVudHMvX3dyYXBwZWQvUklucHV0J1xuaW1wb3J0IFJUZXh0YXJlYSBmcm9tICcuLi8uLi9lbGVtZW50cy9fd3JhcHBlZC9SVGV4dGFyZWEnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmNvbnN0IHN5bHMgPSB7XG4gIGlucHV0Q29sbGVjdGlvbk5hbWU6IFN5bWJvbCgnaW5wdXRDb2xsZWN0aW9uTmFtZScpLFxuICBpbnB1dEJvb2tOYW1lOiBTeW1ib2woJ2lucHV0Qm9va05hbWUnKSxcbiAgdGV4dGFyZWFDb2xsZWN0aW9uRGVzYzogU3ltYm9sKCd0ZXh0YXJlYUNvbGxlY3Rpb25EZXNjJylcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZWxlbWVudHM/OiBhbnlcbiAgY2hhbmdlVmFsdWU/OiBhbnlcbiAgc2VuZE5vdGlmaWNhdGlvbj86IGFueVxuICBub3RpZmljYXRpb24/OiBhbnlcbiAgc2Vzc2lvbj86IGFueVxufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBvcHRpb25zT2ZCb29rcz86IEFycmF5PGFueT5cbiAgdmFsdWVzT2ZCb29rcz86IEFycmF5PGFueT5cbn1cblxuY2xhc3MgQWRkQ29sbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcblxuICBkZWZhdWx0U3RhdGU6IHt9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmRlZmF1bHRTdGF0ZSA9IHtcbiAgICAgIG9wdGlvbnNPZkJvb2tzOiBbXSxcbiAgICAgIHZhbHVlc09mQm9va3M6IFtdLFxuICAgIH1cbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0U3RhdGUpXG4gICAgdGhpcy5hZGRDb2xsZWN0aW9uID0gdGhpcy5hZGRDb2xsZWN0aW9uLmJpbmQodGhpcylcbiAgfVxuXG4gIHJlc2V0Rm9ybSgpIHtcbiAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMuaW5wdXRDb2xsZWN0aW9uTmFtZSwgJycpXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZShzeWxzLnRleHRhcmVhQ29sbGVjdGlvbkRlc2MsICcnKVxuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5kZWZhdWx0U3RhdGUpXG4gIH1cblxuICBhZGRDb2xsZWN0aW9uKCkge1xuICAgIGxldCBuYW1lID0gdGhpcy5wcm9wcy5lbGVtZW50c1tzeWxzLmlucHV0Q29sbGVjdGlvbk5hbWVdLnZhbHVlXG4gICAgbGV0IGl0ZW1zID0gdGhpcy5zdGF0ZS52YWx1ZXNPZkJvb2tzLm1hcChhID0+IGEudmFsdWUpIGFzIGFueVxuICAgIGxldCBkZXNjcmlwdGlvbiA9IHRoaXMucHJvcHMuZWxlbWVudHNbc3lscy50ZXh0YXJlYUNvbGxlY3Rpb25EZXNjXS52YWx1ZVxuICAgIGNvbnN0IGRhdGEgPSB7IG5hbWUsIGl0ZW1zLCBkZXNjcmlwdGlvbiwgY3JlYXRvcjogdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIuaWQgfVxuXG4gICAgYXBpcy5hZGRDb2xsZWN0aW9uKGRhdGEpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5re75Yqg5oiQ5Yqf77yBJylcbiAgICAgIHRoaXMucmVzZXRGb3JtKClcbiAgICB9LCBlcnJvciA9PiB7XG4gICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSlcbiAgICB9KVxuICB9XG5cbiAgc2VhcmNoQm9va3MocXVlcnkpIHtcbiAgICBpZiAocXVlcnkgIT09ICcnKSB7XG4gICAgICBhcGlzLnNlYXJjaEJvb2tzKHF1ZXJ5KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgb3B0aW9uc09mQm9va3M6IHJlc3BvbnNlLm1hcChyID0+ICh7XG4gICAgICAgICAgICBuYW1lOiByLnRpdGxlLFxuICAgICAgICAgICAgdmFsdWU6IHIuaWRcbiAgICAgICAgICB9KSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gc2VhcmNoVGFncyhxdWVyeSkge1xuICAvLyAgIGlmKHF1ZXJ5ICE9PSAnJykge1xuICAvLyAgICAgYXBpcy5zZWFyY2hUYWdzKHF1ZXJ5KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgLy8gICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgICAgICAgIHRhZ1Jlc3VsdHM6IHJlc3BvbnNlXG4gIC8vICAgICAgIH0pXG4gIC8vICAgICB9KVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5BZGQgQ29sbGVjdGlvbjwvaDE+XG4gICAgICAgIDxSSW5wdXQgc3ltYm9sPXtzeWxzLmlucHV0Q29sbGVjdGlvbk5hbWV9IHBsYWNlaG9sZGVyPVwiTmFtZVwiIC8+XG4gICAgICAgIDxTZWxlY3RpemVJbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQm9va3NcIlxuICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9e25ld1ZhbHVlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQm9va3MobmV3VmFsdWUpXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMuaW5wdXRCb29rTmFtZSwgbmV3VmFsdWUpXG4gICAgICAgICAgfSB9XG4gICAgICAgICAgdmFsdWU9e18uZ2V0KHRoaXMucHJvcHMuZWxlbWVudHNbc3lscy5pbnB1dEJvb2tOYW1lXSwgJ3ZhbHVlJywgJycpfVxuICAgICAgICAgIG9uVmFsdWVzQ2hhbmdlPXtuZXdWYWx1ZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHZhbHVlc09mQm9va3M6IG5ld1ZhbHVlc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IH1cbiAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLm9wdGlvbnNPZkJvb2tzfVxuICAgICAgICAgIHZhbHVlcz17dGhpcy5zdGF0ZS52YWx1ZXNPZkJvb2tzfVxuICAgICAgICAvPlxuICAgICAgICA8UlRleHRhcmVhIHN5bWJvbD17c3lscy50ZXh0YXJlYUNvbGxlY3Rpb25EZXNjfSAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIC8+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5hZGRDb2xsZWN0aW9ufT5BZGQ8L0J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgbm90aWZpY2F0aW9uOiBzdGF0ZS5jb21wb25lbnRzLm5vdGlmaWNhdGlvbixcbiAgICBlbGVtZW50czogc3RhdGUuZWxlbWVudHMsXG4gICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgeyBzZW5kTm90aWZpY2F0aW9uLCBjaGFuZ2VWYWx1ZSB9XG4pKEFkZENvbGxlY3Rpb24gYXMgYW55KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL0FkZENvbGxlY3Rpb24vQWRkQ29sbGVjdGlvbi50c3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9