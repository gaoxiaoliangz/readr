exports.ids = [14];
exports.modules = {

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Textarea = exports.SelectizeInput = exports.Input = exports.Button = undefined;
	
	var _Button = __webpack_require__(361);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Input = __webpack_require__(445);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _SelectizeInput = __webpack_require__(449);
	
	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);
	
	var _Textarea = __webpack_require__(453);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Button = _Button2.default;
	exports.Input = _Input2.default;
	exports.SelectizeInput = _SelectizeInput2.default;
	exports.Textarea = _Textarea2.default;

/***/ },

/***/ 445:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Input = __webpack_require__(446);
	
	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Input2.default;

/***/ },

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(272);
	
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
	
	var styles = __webpack_require__(447);
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

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(448);
	    var insertCss = __webpack_require__(276);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(275)();
	// imports
	exports.i(__webpack_require__(388), "");
	
	// module
	exports.push([module.id, ".input-wrap_3dHA3 {\n  margin: 10px 0;\n  position: relative;\n}\n\n.input_2juBO {\n  width: 100%;\n  padding: var(--input-padding) 5px;\n  border: 1px solid var(--gray);\n  transition: border-color .3s;\n  line-height: var(--input-line-height);\n  outline: none;\n}\n\n.input_2juBO:focus {\n  border-color: var(--blue);\n}\n", ""]);
	
	// exports
	exports.locals = {
		"input-wrap": "input-wrap_3dHA3",
		"input": "input_2juBO"
	};

/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _SelectizeInput = __webpack_require__(450);
	
	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SelectizeInput2.default;

/***/ },

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Icon = __webpack_require__(268);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _classnames = __webpack_require__(270);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(272);
	
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
	
	var styles = __webpack_require__(451);
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

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(452);
	    var insertCss = __webpack_require__(276);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(275)();
	// imports
	exports.i(__webpack_require__(388), "");
	exports.i(__webpack_require__(448), undefined);
	
	// module
	exports.push([module.id, ".selectize-wrap_1HASb {\n}\n\n.selectize-input_1xAYz {\n  min-width: 300px;\n  border: 1px solid var(--gray);\n  margin: 10px 0;\n  box-sizing: border-box;\n  padding: $input_padding 5px calc(var(--input-padding) - 5);\n  transition: var(--gray) .3s;\n  cursor: text;\n}\n\n.selectize-input--focus_1uc2r {\n  border-color: var(--blue);\n}\n.selectize-input--empty_19EF1 {\n  padding-bottom: var(--input-padding);\n}\n\n.selectize-input_1xAYz input {\n  border: none;\n  outline: none;\n  line-height: $input_line_height;\n  margin-bottom: 5px;\n}\n\n.query-results_2fBA9 {\n  margin-top: -3px;\n  margin-bottom: 5px;\n  padding: 5px;\n  border-radius: 3px;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  box-shadow: var(--shadow-y1);\n  background: #fff;\n  z-index: var(--z-selectize-options);\n}\n\n.query-results_2fBA9 li {\n  padding: 0 7px;\n  line-height: 2;\n  cursor: pointer;\n}\n.query-results_2fBA9 li:hover {\n  background: var(--blue);\n  color: #fff;\n}\n\n.selectize-tag_1L1JH {\n  /*@extend .tag;*/\n  /*composes: tag from \"styles/base.css\";*/\n  /* todo */\n  background: var(--blue);\n  cursor: pointer;\n}\n\n.selectize-tag_1L1JH .icon_NOc-E {\n  font-size: 0.8rem;\n  margin-left: 5px;\n}", ""]);
	
	// exports
	exports.locals = {
		"selectize-wrap": "selectize-wrap_1HASb " + __webpack_require__(448).locals["input-wrap"] + "",
		"selectize-input": "selectize-input_1xAYz",
		"selectize-input--focus": "selectize-input--focus_1uc2r selectize-input_1xAYz",
		"selectize-input--empty": "selectize-input--empty_19EF1 selectize-input_1xAYz",
		"query-results": "query-results_2fBA9",
		"selectize-tag": "selectize-tag_1L1JH",
		"icon": "icon_NOc-E"
	};

/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Textarea = __webpack_require__(454);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Textarea2.default;

/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(272);
	
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
	
	var styles = __webpack_require__(455);
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

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(456);
	    var insertCss = __webpack_require__(276);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(275)();
	// imports
	exports.i(__webpack_require__(388), "");
	exports.i(__webpack_require__(448), undefined);
	
	// module
	exports.push([module.id, ".textarea-wrap_Xkpj1 {\n}\n\n.textarea_1EdoS {\n  width: 100%;\n  padding: 5px;\n  border: 1px solid var(--gray);\n  outline: none;\n  height: 100px;\n  transition: border-color .3s;\n}\n\n.textarea_1EdoS:focus {\n  border-color: var(--blue);\n}\n", ""]);
	
	// exports
	exports.locals = {
		"textarea-wrap": "textarea-wrap_Xkpj1 " + __webpack_require__(448).locals["input-wrap"] + "",
		"textarea": "textarea_1EdoS"
	};

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(255);
	
	var _actions = __webpack_require__(261);
	
	var _form = __webpack_require__(444);
	
	var _Modal = __webpack_require__(347);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _apis = __webpack_require__(389);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _RInput = __webpack_require__(519);
	
	var _RInput2 = _interopRequireDefault(_RInput);
	
	var _RTextarea = __webpack_require__(520);
	
	var _RTextarea2 = _interopRequireDefault(_RTextarea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var fetchDoubanBooks = _apis2.default.fetchDoubanBooks;
	var syls = {
	    inputBookName: Symbol('inputBookName'),
	    inputBookAuthor: Symbol('inputBookAuthor'),
	    inputAuthorName: Symbol('inputAuthorName'),
	    inputAuthorSlug: Symbol('inputAuthorSlug'),
	    inputBookCover: Symbol('inputBookCover'),
	    textareaAuthorDesc: Symbol('textareaAuthorDesc'),
	    textareaBookDesc: Symbol('textareaBookDesc'),
	    textareaBookContent: Symbol('textareaBookContent')
	};
	
	var AddBook = function (_Component) {
	    _inherits(AddBook, _Component);
	
	    function AddBook(props) {
	        _classCallCheck(this, AddBook);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddBook).call(this, props));
	
	        _this.defaultState = {
	            bookTitle: [],
	            bookAuthor: [],
	            authorResults: [],
	            isAddAuthorModalVisible: false
	        };
	        _this.state = Object.assign({}, _this.defaultState);
	        // todo
	        // this.fetchDoubanBooks = _.debounce(fetchDoubanBooks, 150)
	        return _this;
	    }
	
	    _createClass(AddBook, [{
	        key: 'resetForm',
	        value: function resetForm() {
	            this.props.changeValue(syls.inputBookCover, '');
	            this.props.changeValue(syls.textareaBookDesc, '');
	            this.props.changeValue(syls.textareaBookContent, '');
	            this.setState(this.defaultState);
	        }
	    }, {
	        key: 'addBook',
	        value: function addBook() {
	            var _this2 = this;
	
	            var data = {
	                title: this.state.bookTitle.length !== 0 ? this.state.bookTitle[0].value : '',
	                authors: this.state.bookAuthor.map(function (a) {
	                    return a.value;
	                }),
	                description: this.props.elements[syls.textareaBookDesc].value,
	                cover: this.props.elements[syls.inputBookCover].value,
	                content: this.props.elements[syls.textareaBookContent].value
	            };
	            _apis2.default.addBook(data).then(function (result) {
	                _this2.props.sendNotification('添加成功');
	                _this2.resetForm();
	            }, function (error) {
	                _this2.props.sendNotification(error.message);
	            });
	        }
	    }, {
	        key: 'addAuthor',
	        value: function addAuthor() {
	            var _this3 = this;
	
	            var data = {
	                name: this.props.elements[syls.inputAuthorName].value,
	                slug: this.props.elements[syls.inputAuthorSlug].value,
	                description: this.props.elements[syls.textareaAuthorDesc].value
	            };
	            _apis2.default.addAuthor(data).then(function (result) {
	                _this3.props.sendNotification('添加成功');
	                var id = result.ops[0].id;
	                _this3.setState({
	                    bookAuthor: [].concat(_toConsumableArray(_this3.state.bookAuthor), [{ name: data.name, value: id }]),
	                    isAddAuthorModalVisible: false
	                });
	                _this3.props.changeValue(syls.inputBookAuthor, '');
	            }, function (error) {
	                _this3.props.sendNotification(error.message);
	            });
	        }
	    }, {
	        key: 'searchBooks',
	        value: function searchBooks(query) {
	            var _this4 = this;
	
	            if (query !== '') {
	                fetchDoubanBooks(query).then(function (res) {
	                    _this4.setState({
	                        optionsOfBookTitle: res.books.map(function (book) {
	                            return {
	                                name: book.title,
	                                value: book.title,
	                                additional: {
	                                    description: book.summary,
	                                    cover: book.images.large,
	                                    author: book.author.join(', ')
	                                }
	                            };
	                        })
	                    });
	                });
	            }
	        }
	    }, {
	        key: 'searchAuthors',
	        value: function searchAuthors(query) {
	            var _this5 = this;
	
	            if (query !== '') {
	                _apis2.default.searchAuthors(query).then(function (response) {
	                    _this5.setState({
	                        optionsOfBookAuthor: response.map(function (r) {
	                            return {
	                                name: r.name,
	                                value: r.id
	                            };
	                        })
	                    });
	                });
	            } else {
	                this.setState({
	                    optionsOfBookAuthor: []
	                });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this6 = this;
	
	            return _react2.default.createElement("form", null, _react2.default.createElement(_Modal2.default, { width: 600, isVisible: this.state.isAddAuthorModalVisible, onRequestClose: function onRequestClose() {
	                    _this6.setState({
	                        isAddAuthorModalVisible: false
	                    });
	                } }, _react2.default.createElement("h1", { className: "page-title", style: { marginTop: 0 } }, "Add author"), _react2.default.createElement(_RInput2.default, { placeholder: "Name", symbol: syls.inputAuthorName }), _react2.default.createElement(_RInput2.default, { placeholder: "Slug", symbol: syls.inputAuthorSlug }), _react2.default.createElement(_RTextarea2.default, { symbol: syls.textareaAuthorDesc, placeholder: "Description" }), _react2.default.createElement(_form.Button, { onClick: function onClick(e) {
	                    e.preventDefault();
	                    _this6.addAuthor();
	                } }, "Add")), _react2.default.createElement("h1", { className: "page-title" }, "Add Book"), _react2.default.createElement(_form.SelectizeInput, { placeholder: "Book title", onInputChange: function onInputChange(newValue) {
	                    _this6.searchBooks(newValue);
	                    _this6.props.changeValue(syls.inputBookName, newValue);
	                }, value: _lodash2.default.get(this.props.elements[syls.inputBookName], 'value', ''), onValuesChange: function onValuesChange(newValues) {
	                    _this6.setState({
	                        bookTitle: newValues
	                    });
	                }, options: this.state.optionsOfBookTitle, values: this.state.bookTitle, onAddNewValue: function onAddNewValue() {
	                    // todo
	                }, onOptionClick: function onOptionClick(option) {
	                    _this6.props.changeValue(syls.inputBookCover, option.additional.cover);
	                    _this6.props.changeValue(syls.inputBookAuthor, option.additional.author);
	                    _this6.props.changeValue(syls.textareaBookDesc, option.additional.description);
	                } }), _react2.default.createElement(_form.SelectizeInput, { placeholder: "Book author", onInputChange: function onInputChange(newValue) {
	                    _this6.searchAuthors(newValue);
	                    _this6.props.changeValue(syls.inputBookAuthor, newValue);
	                }, value: _lodash2.default.get(this.props.elements[syls.inputBookAuthor], 'value', ''), onValuesChange: function onValuesChange(newValues) {
	                    _this6.setState({
	                        bookAuthor: newValues
	                    });
	                }, options: this.state.optionsOfBookAuthor, values: this.state.bookAuthor, addNewValue: true, onAddNewValue: function onAddNewValue(value) {
	                    _this6.props.changeValue(syls.inputAuthorName, value);
	                    // todo
	                    _this6.props.changeValue(syls.inputAuthorSlug, value);
	                    _this6.props.changeValue(syls.textareaAuthorDesc, '');
	                    _this6.setState({
	                        isAddAuthorModalVisible: true
	                    });
	                } }), _react2.default.createElement(_RInput2.default, { placeholder: "Cover", symbol: syls.inputBookCover }), _react2.default.createElement(_RTextarea2.default, { placeholder: "Description", symbol: syls.textareaBookDesc }), _react2.default.createElement(_RTextarea2.default, { placeholder: "Paste book content here", symbol: syls.textareaBookContent }), _react2.default.createElement(_form.Button, { onClick: function onClick(e) {
	                    e.preventDefault();
	                    _this6.addBook();
	                } }, "Add"));
	        }
	    }]);
	
	    return AddBook;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        notification: state.components.notification,
	        elements: state.elements
	    };
	}, { sendNotification: _actions.sendNotification, changeValue: _actions.changeValue })(AddBook);

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(255);
	
	var _Input = __webpack_require__(446);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _actions = __webpack_require__(261);
	
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

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(255);
	
	var _Textarea = __webpack_require__(454);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);
	
	var _actions = __webpack_require__(261);
	
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

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vaW5kZXgudHM/NTBkNyoqKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L2luZGV4LnRzPzIxZDMqKioqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9JbnB1dC50c3g/ZGExZCoqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuY3NzPzA1MGEqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9JbnB1dC5jc3M/ZDkyNCoqKioqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9pbmRleC50cz83ZTgwKioqKioqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQudHN4PzRlNzMqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LmNzcz81Mzk5KioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQuY3NzPzhkYzMqKioqKioqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvaW5kZXgudHM/YjgxMioqKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLnRzeD9jMmFmKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS5jc3M/YWEyMSoqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLmNzcz81YmMyKioqKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9BZGRCb29rL0FkZEJvb2sudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fd3JhcHBlZC9SSW5wdXQudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fd3JhcHBlZC9SVGV4dGFyZWEudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNkI7Ozs7QUFDRjs7OztBQUNrQjs7OztBQUc3Qzs7Ozs7O1NBQWU7U0FBTztTQUFnQjtTQUFZLDhCOzs7Ozs7Ozs7Ozs7O0FDSjlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RvQjs7OztBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMUMsS0FBWSxTQUFVLG9CQUFlO0FBY3JDOzs7QUFDRSxvQkFBaUIsT0FDZjs7O3lGQUdJOzs7Ozs7OztBQUNKLGlCQUFTLFFBQVMsT0FBTyxPQUFHLElBQU0sS0FBTztBQUN6QyxvQkFBWSxNQUFVO0FBRWYsb0JBQ0wsOEJBQUksU0FBVSxXQUFhLGNBQVUsV0FBTSxLQUFNLE1BQVUsYUFBTyxvQ0FDMUQsV0FDSyxXQUFRLFNBQ04sYUFBTSxLQUFNLE1BQWEsYUFDL0IsT0FBTSxLQUFNLE1BQU8sT0FDaEI7QUFDRiw0QkFBTSxNQUFTLFNBQ25CO2tCQUZTLEVBR1AsTUFBTSxLQUFNLE1BQUssT0FBTyxLQUFNLE1BQUssT0FBVSxRQUM3QyxNQUFNLEtBQU0sTUFBSyxPQUFPLEtBQU0sTUFBSyxPQUtoRCxNQWJPOzs7O1lBWHFCOztBQUg3QixvREFBa0IsUUFBRTtBQUNMLG9CQUNiO0VBRlMsSUE2Qlg7bUJBQW9CLE07Ozs7Ozs7O0FDekNw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QUFpQixPQUNmOzs7MEZBR0k7Ozs7Ozs7O0FBQ0csb0JBQ0wsZ0JBQU0saUNBQ0EsTUFBTSxLQUFNLE1BQU0sTUFDakIsT0FBRyxpQkFBSSxJQUFLLEtBQU0sTUFBUyxTQUFLLEtBQU0sTUFBUSxTQUFTLFNBQU0sS0FDdkQsYUFBTSxLQUFNLE1BQWEsYUFDNUI7QUFDTix5QkFBYyxXQUFJLEVBQU8sT0FBTTtBQUMzQiw0QkFBTSxNQUFZLFlBQUssT0FBTSxNQUFPLFFBQVc7QUFDaEQseUJBQUssT0FBTSxNQUFVLFVBQUU7QUFDcEIsZ0NBQU0sTUFBUyxTQVEvQjs7a0JBWm1COzs7Ozs7O21CQVlHO1lBQ1Y7QUFDQSxtQkFBTyxNQUNmOztFQUZPLEVBR1QsRUFDRCxxQ0FBUSxROzs7Ozs7Ozs7Ozs7Ozs7QUMxQytCOzs7O0FBQ0g7O0FBQ3dDOzs7O0FBVTdFOzs7Ozs7Ozs7O0tBQWlDOzs7QUFFL0Isd0JBQWlCLE9BQ2Y7Ozs2RkFHSTs7Ozs7Ozs7QUFDRyxvQkFDTCxnQkFBUyxvQ0FDRixPQUFHLEVBQUksSUFBSyxLQUFNLE1BQVMsU0FBSyxLQUFNLE1BQVEsU0FBUyxTQUFNLEtBQ3ZELGFBQU0sS0FBTSxNQUFhLGFBQzVCO0FBQ04seUJBQWMsV0FBSSxFQUFPLE9BQU07QUFDM0IsNEJBQU0sTUFBWSxZQUFLLE9BQU0sTUFBTyxRQUFXO0FBQ2hELHlCQUFLLE9BQU0sTUFBVSxVQUFFO0FBQ3BCLGdDQUFNLE1BQVMsU0FRL0I7O2tCQVptQjs7Ozs7OzttQkFZRztZQUNWO0FBQ0EsbUJBQU8sTUFDZjs7RUFGTyxFQUdULEVBQ0QscUNBQVcsVyIsImZpbGUiOiIxNC4xNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcbmltcG9ydCBTZWxlY3RpemVJbnB1dCBmcm9tICcuL1NlbGVjdGl6ZUlucHV0J1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vVGV4dGFyZWEnXG5cbmV4cG9ydCB7IEJ1dHRvbiwgSW5wdXQsIFNlbGVjdGl6ZUlucHV0LCBUZXh0YXJlYSB9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9pbmRleC50c1xuICoqLyIsImltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuZXhwb3J0IGRlZmF1bHQgSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0lucHV0LmNzcycpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgb25DaGFuZ2U/OiBhbnlcbiAgdmFsdWU/OiBzdHJpbmdcbiAgdHlwZT86IHN0cmluZ1xuICBuYW1lPzogc3RyaW5nXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpXG4gICAgZGVsZXRlIHByb3BzLmNsYXNzTmFtZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwiaW5wdXQtd3JhcFwiIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJyd9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBzdHlsZU5hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKVxuICAgICAgICAgIH19XG4gICAgICAgICAgdHlwZT17dGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ3RleHQnfVxuICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZSA/IHRoaXMucHJvcHMubmFtZSA6IG51bGx9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L0lucHV0LnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vSW5wdXQuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuY3NzXG4gKiogbW9kdWxlIGlkID0gNDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2Uhc3R5bGVzL3ZhcmlhYmxlcy5jc3NcIiksIFwiXCIpO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbnB1dC13cmFwXzNkSEEzIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaW5wdXRfMmp1Qk8ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiB2YXIoLS1pbnB1dC1wYWRkaW5nKSA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5KTtcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuM3M7XFxuICBsaW5lLWhlaWdodDogdmFyKC0taW5wdXQtbGluZS1oZWlnaHQpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmlucHV0XzJqdUJPOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImlucHV0LXdyYXBcIjogXCJpbnB1dC13cmFwXzNkSEEzXCIsXG5cdFwiaW5wdXRcIjogXCJpbnB1dF8yanVCT1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9wb3N0Y3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9JbnB1dC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0NDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsImltcG9ydCBTZWxlY3RpemVJbnB1dCBmcm9tICcuL1NlbGVjdGl6ZUlucHV0J1xuZXhwb3J0IGRlZmF1bHQgU2VsZWN0aXplSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vSWNvbidcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vU2VsZWN0aXplSW5wdXQuY3NzJylcblxudHlwZSBUeXBlT3B0aW9uID0ge1xuICB2YWx1ZTogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgYWRkaXRpb25hbD86IGFueVxufVxuXG50eXBlIFR5cGVWYWx1ZSA9IHtcbiAgdmFsdWU6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICBsYWJlbD86IHN0cmluZ1xuICBzdGF5Rm9jdXNlZD86IGJvb2xlYW4gLy8gZGVmYXVsdCB0cnVlXG5cbiAgdmFsdWU6IHN0cmluZ1xuICBvbklucHV0Q2hhbmdlOiAobmV3VmFsdWU6IHN0cmluZykgPT4gdm9pZFxuXG4gIG9wdGlvbnM6IEFycmF5PFR5cGVPcHRpb24+XG4gIG9uT3B0aW9uc0NoYW5nZT86IChuZXdWYWx1ZXM6IEFycmF5PFR5cGVPcHRpb24+KSA9PiB2b2lkXG5cbiAgdmFsdWVzOiBBcnJheTxUeXBlVmFsdWU+XG4gIG9uVmFsdWVzQ2hhbmdlOiAobmV3VmFsdWVzOiBBcnJheTxUeXBlVmFsdWU+KSA9PiB2b2lkXG5cbiAgLy8g6aKd5aSW5Yqf6IO9XG4gIGFkZE5ld1ZhbHVlPzogYm9vbGVhblxuICBvbkFkZE5ld1ZhbHVlPzogKG5ld1ZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbiAgb25PcHRpb25DbGljaz86IChzZWxlY3RlZFZhbHVlOiBUeXBlT3B0aW9uKSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBmb2N1cz86IGJvb2xlYW5cbiAgc2hvd09wdGlvbnM/OiBib29sZWFuXG4gIHZhbHVlPzogc3RyaW5nXG4gIGV4cGVuZGVkT3B0aW9uSW5kZXg/OiBudW1iZXJcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBTZWxlY3RpemVJbnB1dCBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGlucHV0OiBhbnlcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93T3B0aW9uczogZmFsc2UsXG4gICAgICBmb2N1czogZmFsc2UsXG4gICAgICB2YWx1ZTogJycsXG4gICAgICBleHBlbmRlZE9wdGlvbkluZGV4OiAwXG4gICAgfVxuICAgIHRoaXMuaGlkZU9wdGlvbnMgPSB0aGlzLmhpZGVPcHRpb25zLmJpbmQodGhpcylcbiAgICB0aGlzLmZvY3VzSW5wdXQgPSB0aGlzLmZvY3VzSW5wdXQuYmluZCh0aGlzKVxuICAgIHRoaXMuc2hvd09wdGlvbnMgPSB0aGlzLnNob3dPcHRpb25zLmJpbmQodGhpcylcbiAgfVxuXG4gIGFkZFZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5vblZhbHVlc0NoYW5nZSh0aGlzLnByb3BzLnZhbHVlcy5jb25jYXQobmV3VmFsdWUpKVxuICAgIGlmICh0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UodGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHRpb24gPT4gKG9wdGlvbi52YWx1ZSA9PT0gbmV3VmFsdWUudmFsdWVcbiAgICAgICAgPyBPYmplY3QuYXNzaWduKHt9LCBvcHRpb24sIHsgZGlzYWJsZWQ6IHRydWUgfSlcbiAgICAgICAgOiBvcHRpb24pKSlcbiAgICB9XG4gICAgdGhpcy5jbGVhcklucHV0VmFsdWUoKVxuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5zdGF5Rm9jdXNlZCA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5wcm9wcy5zdGF5Rm9jdXNlZCAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuZm9jdXNJbnB1dCgpXG4gICAgfVxuICAgIHRoaXMuaGlkZU9wdGlvbnMoKVxuICB9XG5cbiAgcmVtb3ZlVmFsdWUoaW5kZXgpIHtcbiAgICBsZXQgbmV3VmFsdWVzID0gW11cbiAgICBsZXQgcmVtb3ZlZFZhbHVlXG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICBuZXdWYWx1ZXMgPSB0aGlzLnByb3BzLnZhbHVlcy5zbGljZSgwLCB0aGlzLnByb3BzLnZhbHVlcy5sZW5ndGggLSAxKVxuICAgICAgcmVtb3ZlZFZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZXNbdGhpcy5wcm9wcy52YWx1ZXMubGVuZ3RoIC0gMV0udmFsdWVcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3VmFsdWVzID0gdGhpcy5wcm9wcy52YWx1ZXNcbiAgICAgICAgLmZpbHRlcigodiwgaSkgPT4ge1xuICAgICAgICAgIHJlbW92ZWRWYWx1ZSA9IHYudmFsdWVcbiAgICAgICAgICByZXR1cm4gaSAhPT0gaW5kZXhcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKHRoaXMucHJvcHMub3B0aW9ucy5tYXAob3B0aW9uID0+IChvcHRpb24udmFsdWUgPT09IHJlbW92ZWRWYWx1ZVxuICAgICAgICA/IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbiwgeyBkaXNhYmxlZDogZmFsc2UgfSlcbiAgICAgICAgOiBvcHRpb24pKSlcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uVmFsdWVzQ2hhbmdlKG5ld1ZhbHVlcylcbiAgfVxuXG4gIGNsZWFySW5wdXRWYWx1ZSgpIHtcbiAgICB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UoJycpXG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gOCAmJiAhdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgdGhpcy5yZW1vdmVWYWx1ZSgtIDEpXG4gICAgfVxuICAgIC8vIHRvZG9cbiAgICAvLyBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiB0aGlzLnN0YXRlLnNob3dPcHRpb25zKSB7XG4gICAgLy8gICB0aGlzLmFkZFZhbHVlKClcbiAgICAvLyB9XG4gIH1cblxuICBmb2N1c0lucHV0KCkge1xuICAgICh0aGlzLmlucHV0IGFzIGFueSBhcyBIVE1MSW5wdXRFbGVtZW50KS5mb2N1cygpXG4gIH1cblxuICBoaWRlT3B0aW9ucygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dPcHRpb25zOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICBzaG93T3B0aW9ucyhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd09wdGlvbnM6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlT3B0aW9ucylcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlT3B0aW9ucylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbGFiZWwgPSB0aGlzLnByb3BzLmxhYmVsID8gdGhpcy5wcm9wcy5sYWJlbCA6IG51bGxcbiAgICBsZXQgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlID8gdGhpcy5wcm9wcy52YWx1ZSA6ICcnXG4gICAgbGV0IHZhbHVlcyA9IHRoaXMucHJvcHMudmFsdWVzXG4gICAgbGV0IG9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnMgPyB0aGlzLnByb3BzLm9wdGlvbnMgOiBbXVxuICAgIGxldCBpbnB1dFdpZHRoID0gdmFsdWVzLmxlbmd0aCA+IDAgPyAodmFsdWUubGVuZ3RoID09PSAwID8gMTYgOiB2YWx1ZS5sZW5ndGggKiAxNikgOiAnMTAwJSdcbiAgICBsZXQgcGxhY2Vob2xkZXIgPSB2YWx1ZXMubGVuZ3RoID4gMCA/ICcnIDogdGhpcy5wcm9wcy5wbGFjZWhvbGRlclxuICAgIGxldCBhZGROZXdWYWx1ZSA9IHRoaXMucHJvcHMuYWRkTmV3VmFsdWUgPyB0aGlzLnByb3BzLmFkZE5ld1ZhbHVlIDogdW5kZWZpbmVkXG5cbiAgICBjb25zdCBzZWxlY3RpemVJbnB1dFN0eWxlTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgJ3NlbGVjdGl6ZS1pbnB1dCc6IHRydWUsXG4gICAgICAnc2VsZWN0aXplLWlucHV0LS1mb2N1cyc6IHRoaXMuc3RhdGUuZm9jdXMsXG4gICAgICAnc2VsZWN0aXplLWlucHV0LS1lbXB0eSc6IHZhbHVlcy5sZW5ndGggPT09IDBcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwic2VsZWN0aXplLXdyYXBcIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnfT5cbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsID8gKFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj57bGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICApIDpudWxsXG4gICAgICAgIH1cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlTmFtZT17c2VsZWN0aXplSW5wdXRTdHlsZU5hbWV9XG4gICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzSW5wdXQoKVxuICAgICAgICAgICAgdGhpcy5zaG93T3B0aW9ucyhlKVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZXMubWFwKCh2LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9IHN0eWxlTmFtZT1cInNlbGVjdGl6ZS10YWdcIj5cbiAgICAgICAgICAgICAgICAgIHt2Lm5hbWV9XG4gICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICBzdHlsZU5hbWU9XCJpY29uXCJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjB9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWUoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBpbnB1dFdpZHRofX1cbiAgICAgICAgICAgIHJlZj17cmVmID0+IHt0aGlzLmlucHV0ID0gcmVmfX1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIG9uQmx1cj17ZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1czogZmFsc2UgfSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkZvY3VzPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiB0cnVlIH0pXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UoKGUudGFyZ2V0IGFzIGFueSkudmFsdWUpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25LZXlEb3duPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVLZXlQcmVzcyhlKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgICh0aGlzLnN0YXRlLnNob3dPcHRpb25zKSA/IChcbiAgICAgICAgICAgIDx1bCBzdHlsZU5hbWU9XCJxdWVyeS1yZXN1bHRzXCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImRpc2FibGVkXCI+e29wdGlvbi5uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRWYWx1ZShvcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbk9wdGlvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25PcHRpb25DbGljayhvcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntvcHRpb24ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWRkTmV3VmFsdWUgPyAoXG4gICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFkZE5ld1ZhbHVlKHRoaXMucHJvcHMudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZFwiPua3u+WKoCA8c3Ryb25nPnt0aGlzLnByb3BzLnZhbHVlfTwvc3Ryb25nPjwvbGk+XG4gICAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICApIDogbnVsbFxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0aXplSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vU2VsZWN0aXplSW5wdXQuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQuY3NzXG4gKiogbW9kdWxlIGlkID0gNDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2Uhc3R5bGVzL3ZhcmlhYmxlcy5jc3NcIiksIFwiXCIpO1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuLi9JbnB1dC9JbnB1dC5jc3NcIiksIHVuZGVmaW5lZCk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlbGVjdGl6ZS13cmFwXzFIQVNiIHtcXG59XFxuXFxuLnNlbGVjdGl6ZS1pbnB1dF8xeEFZeiB7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheSk7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAkaW5wdXRfcGFkZGluZyA1cHggY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nKSAtIDUpO1xcbiAgdHJhbnNpdGlvbjogdmFyKC0tZ3JheSkgLjNzO1xcbiAgY3Vyc29yOiB0ZXh0O1xcbn1cXG5cXG4uc2VsZWN0aXplLWlucHV0LS1mb2N1c18xdWMyciB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG4uc2VsZWN0aXplLWlucHV0LS1lbXB0eV8xOUVGMSB7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW5wdXQtcGFkZGluZyk7XFxufVxcblxcbi5zZWxlY3RpemUtaW5wdXRfMXhBWXogaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAkaW5wdXRfbGluZV9oZWlnaHQ7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5xdWVyeS1yZXN1bHRzXzJmQkE5IHtcXG4gIG1hcmdpbi10b3A6IC0zcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteTEpO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHotaW5kZXg6IHZhcigtLXotc2VsZWN0aXplLW9wdGlvbnMpO1xcbn1cXG5cXG4ucXVlcnktcmVzdWx0c18yZkJBOSBsaSB7XFxuICBwYWRkaW5nOiAwIDdweDtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucXVlcnktcmVzdWx0c18yZkJBOSBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uc2VsZWN0aXplLXRhZ18xTDFKSCB7XFxuICAvKkBleHRlbmQgLnRhZzsqL1xcbiAgLypjb21wb3NlczogdGFnIGZyb20gXFxcInN0eWxlcy9iYXNlLmNzc1xcXCI7Ki9cXG4gIC8qIHRvZG8gKi9cXG4gIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VsZWN0aXplLXRhZ18xTDFKSCAuaWNvbl9OT2MtRSB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInNlbGVjdGl6ZS13cmFwXCI6IFwic2VsZWN0aXplLXdyYXBfMUhBU2IgXCIgKyByZXF1aXJlKFwiLSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi4vSW5wdXQvSW5wdXQuY3NzXCIpLmxvY2Fsc1tcImlucHV0LXdyYXBcIl0gKyBcIlwiLFxuXHRcInNlbGVjdGl6ZS1pbnB1dFwiOiBcInNlbGVjdGl6ZS1pbnB1dF8xeEFZelwiLFxuXHRcInNlbGVjdGl6ZS1pbnB1dC0tZm9jdXNcIjogXCJzZWxlY3RpemUtaW5wdXQtLWZvY3VzXzF1YzJyIHNlbGVjdGl6ZS1pbnB1dF8xeEFZelwiLFxuXHRcInNlbGVjdGl6ZS1pbnB1dC0tZW1wdHlcIjogXCJzZWxlY3RpemUtaW5wdXQtLWVtcHR5XzE5RUYxIHNlbGVjdGl6ZS1pbnB1dF8xeEFZelwiLFxuXHRcInF1ZXJ5LXJlc3VsdHNcIjogXCJxdWVyeS1yZXN1bHRzXzJmQkE5XCIsXG5cdFwic2VsZWN0aXplLXRhZ1wiOiBcInNlbGVjdGl6ZS10YWdfMUwxSkhcIixcblx0XCJpY29uXCI6IFwiaWNvbl9OT2MtRVwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9wb3N0Y3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0NTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsImltcG9ydCBUZXh0YXJlYSBmcm9tICcuL1RleHRhcmVhJ1xuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWFcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvcHMgYXMgSW5wdXRQcm9wcyB9IGZyb20gJy4uL0lucHV0L0lucHV0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1RleHRhcmVhLmNzcycpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJbnB1dFByb3BzIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBUZXh0YXJlYSBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwidGV4dGFyZWEtd3JhcFwiIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJyd9PlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpXG4gICAgICAgICAgfX1cbiAgICAgICAgICBzdHlsZU5hbWU9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgdHlwZT17dGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ3RleHQnfVxuICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZSA/IHRoaXMucHJvcHMubmFtZSA6IG51bGx9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWFcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vVGV4dGFyZWEuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEuY3NzXG4gKiogbW9kdWxlIGlkID0gNDU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2Uhc3R5bGVzL3ZhcmlhYmxlcy5jc3NcIiksIFwiXCIpO1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuLi9JbnB1dC9JbnB1dC5jc3NcIiksIHVuZGVmaW5lZCk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRleHRhcmVhLXdyYXBfWGtwajEge1xcbn1cXG5cXG4udGV4dGFyZWFfMUVkb1Mge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4zcztcXG59XFxuXFxuLnRleHRhcmVhXzFFZG9TOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInRleHRhcmVhLXdyYXBcIjogXCJ0ZXh0YXJlYS13cmFwX1hrcGoxIFwiICsgcmVxdWlyZShcIi0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4uL0lucHV0L0lucHV0LmNzc1wiKS5sb2NhbHNbXCJpbnB1dC13cmFwXCJdICsgXCJcIixcblx0XCJ0ZXh0YXJlYVwiOiBcInRleHRhcmVhXzFFZG9TXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Bvc3Rjc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24sIGNoYW5nZVZhbHVlIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCB7IEJ1dHRvbiwgU2VsZWN0aXplSW5wdXR9IGZyb20gJy4uLy4uL2VsZW1lbnRzL19mb3JtJ1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uLy4uL2VsZW1lbnRzL01vZGFsJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGFwaXMgZnJvbSAnLi4vLi4vYXBpcydcbmltcG9ydCBSSW5wdXQgZnJvbSAnLi4vLi4vZWxlbWVudHMvX3dyYXBwZWQvUklucHV0J1xuaW1wb3J0IFJUZXh0YXJlYSBmcm9tICcuLi8uLi9lbGVtZW50cy9fd3JhcHBlZC9SVGV4dGFyZWEnXG5cbmNvbnN0IGZldGNoRG91YmFuQm9va3MgPSBhcGlzLmZldGNoRG91YmFuQm9va3NcblxuY29uc3Qgc3lscyA9IHtcbiAgaW5wdXRCb29rTmFtZTogU3ltYm9sKCdpbnB1dEJvb2tOYW1lJyksXG4gIGlucHV0Qm9va0F1dGhvcjogU3ltYm9sKCdpbnB1dEJvb2tBdXRob3InKSxcbiAgaW5wdXRBdXRob3JOYW1lOiBTeW1ib2woJ2lucHV0QXV0aG9yTmFtZScpLFxuICBpbnB1dEF1dGhvclNsdWc6IFN5bWJvbCgnaW5wdXRBdXRob3JTbHVnJyksXG4gIGlucHV0Qm9va0NvdmVyOiBTeW1ib2woJ2lucHV0Qm9va0NvdmVyJyksXG4gIHRleHRhcmVhQXV0aG9yRGVzYzogU3ltYm9sKCd0ZXh0YXJlYUF1dGhvckRlc2MnKSxcbiAgdGV4dGFyZWFCb29rRGVzYzogU3ltYm9sKCd0ZXh0YXJlYUJvb2tEZXNjJyksXG4gIHRleHRhcmVhQm9va0NvbnRlbnQ6IFN5bWJvbCgndGV4dGFyZWFCb29rQ29udGVudCcpXG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGVsZW1lbnRzPzogYW55XG4gIGNoYW5nZVZhbHVlPzogYW55XG4gIHNlbmROb3RpZmljYXRpb24/OiBhbnlcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgYm9va1RpdGxlPzogQXJyYXk8YW55PlxuICBib29rQXV0aG9yPzogQXJyYXk8YW55PlxuICBpc0FkZEF1dGhvck1vZGFsVmlzaWJsZT86IGJvb2xlYW5cbiAgb3B0aW9uc09mQm9va1RpdGxlPzogQXJyYXk8YW55PlxuICBvcHRpb25zT2ZCb29rQXV0aG9yPzogQXJyYXk8YW55PlxufVxuXG5jbGFzcyBBZGRCb29rIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuXG4gIGRlZmF1bHRTdGF0ZToge31cbiAgZmV0Y2hEb3ViYW5Cb29rczogYW55XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmRlZmF1bHRTdGF0ZSA9IHtcbiAgICAgIGJvb2tUaXRsZTogW10sXG4gICAgICBib29rQXV0aG9yOiBbXSxcbiAgICAgIGF1dGhvclJlc3VsdHM6IFtdLFxuICAgICAgaXNBZGRBdXRob3JNb2RhbFZpc2libGU6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRTdGF0ZSlcblxuICAgIC8vIHRvZG9cbiAgICAvLyB0aGlzLmZldGNoRG91YmFuQm9va3MgPSBfLmRlYm91bmNlKGZldGNoRG91YmFuQm9va3MsIDE1MClcbiAgfVxuXG4gIHJlc2V0Rm9ybSgpIHtcbiAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMuaW5wdXRCb29rQ292ZXIsICcnKVxuICAgIHRoaXMucHJvcHMuY2hhbmdlVmFsdWUoc3lscy50ZXh0YXJlYUJvb2tEZXNjLCAnJylcbiAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMudGV4dGFyZWFCb29rQ29udGVudCwgJycpXG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmRlZmF1bHRTdGF0ZSlcbiAgfVxuXG4gIGFkZEJvb2soKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHRpdGxlOiB0aGlzLnN0YXRlLmJvb2tUaXRsZS5sZW5ndGggIT09IDAgPyB0aGlzLnN0YXRlLmJvb2tUaXRsZVswXS52YWx1ZSA6ICcnLFxuICAgICAgYXV0aG9yczogdGhpcy5zdGF0ZS5ib29rQXV0aG9yLm1hcChhID0+IGEudmFsdWUpLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMucHJvcHMuZWxlbWVudHNbc3lscy50ZXh0YXJlYUJvb2tEZXNjXS52YWx1ZSxcbiAgICAgIGNvdmVyOiB0aGlzLnByb3BzLmVsZW1lbnRzW3N5bHMuaW5wdXRCb29rQ292ZXJdLnZhbHVlLFxuICAgICAgY29udGVudDogdGhpcy5wcm9wcy5lbGVtZW50c1tzeWxzLnRleHRhcmVhQm9va0NvbnRlbnRdLnZhbHVlXG4gICAgfVxuXG4gICAgYXBpcy5hZGRCb29rKGRhdGEpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5re75Yqg5oiQ5YqfJylcbiAgICAgIHRoaXMucmVzZXRGb3JtKClcbiAgICB9LCBlcnJvciA9PiB7XG4gICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSlcbiAgICB9KVxuICB9XG5cbiAgYWRkQXV0aG9yKCkge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBuYW1lOiB0aGlzLnByb3BzLmVsZW1lbnRzW3N5bHMuaW5wdXRBdXRob3JOYW1lXS52YWx1ZSxcbiAgICAgIHNsdWc6IHRoaXMucHJvcHMuZWxlbWVudHNbc3lscy5pbnB1dEF1dGhvclNsdWddLnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMucHJvcHMuZWxlbWVudHNbc3lscy50ZXh0YXJlYUF1dGhvckRlc2NdLnZhbHVlXG4gICAgfVxuXG4gICAgYXBpcy5hZGRBdXRob3IoZGF0YSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKCfmt7vliqDmiJDlip8nKVxuICAgICAgY29uc3QgaWQgPSByZXN1bHQub3BzWzBdLmlkXG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBib29rQXV0aG9yOiBbLi4udGhpcy5zdGF0ZS5ib29rQXV0aG9yLCB7IG5hbWU6IGRhdGEubmFtZSwgdmFsdWU6IGlkIH1dLFxuICAgICAgICBpc0FkZEF1dGhvck1vZGFsVmlzaWJsZTogZmFsc2VcbiAgICAgIH0pXG4gICAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMuaW5wdXRCb29rQXV0aG9yLCAnJylcbiAgICB9LCBlcnJvciA9PiB7XG4gICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSlcbiAgICB9KVxuICB9XG5cbiAgc2VhcmNoQm9va3MocXVlcnkpIHtcbiAgICBpZiAocXVlcnkgIT09ICcnKSB7XG4gICAgICBmZXRjaERvdWJhbkJvb2tzKHF1ZXJ5KS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG9wdGlvbnNPZkJvb2tUaXRsZTogKHJlcyBhcyBhbnkpLmJvb2tzLm1hcChib29rID0+ICh7XG4gICAgICAgICAgICBuYW1lOiBib29rLnRpdGxlLFxuICAgICAgICAgICAgdmFsdWU6IGJvb2sudGl0bGUsXG4gICAgICAgICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBib29rLnN1bW1hcnksXG4gICAgICAgICAgICAgIGNvdmVyOiBib29rLmltYWdlcy5sYXJnZSxcbiAgICAgICAgICAgICAgYXV0aG9yOiBib29rLmF1dGhvci5qb2luKCcsICcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHNlYXJjaEF1dGhvcnMocXVlcnkpIHtcbiAgICBpZiAocXVlcnkgIT09ICcnKSB7XG4gICAgICBhcGlzLnNlYXJjaEF1dGhvcnMocXVlcnkpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBvcHRpb25zT2ZCb29rQXV0aG9yOiByZXNwb25zZS5tYXAociA9PiAoe1xuICAgICAgICAgICAgbmFtZTogci5uYW1lLFxuICAgICAgICAgICAgdmFsdWU6IHIuaWRcbiAgICAgICAgICB9KSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcHRpb25zT2ZCb29rQXV0aG9yOiBbXVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtPlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICB3aWR0aD17NjAwfVxuICAgICAgICAgIGlzVmlzaWJsZT17dGhpcy5zdGF0ZS5pc0FkZEF1dGhvck1vZGFsVmlzaWJsZX1cbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17KCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGlzQWRkQXV0aG9yTW9kYWxWaXNpYmxlOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIiBzdHlsZT17e21hcmdpblRvcDogMH19PkFkZCBhdXRob3I8L2gxPlxuICAgICAgICAgIDxSSW5wdXQgcGxhY2Vob2xkZXI9XCJOYW1lXCIgc3ltYm9sPXtzeWxzLmlucHV0QXV0aG9yTmFtZX0gLz5cbiAgICAgICAgICA8UklucHV0IHBsYWNlaG9sZGVyPVwiU2x1Z1wiIHN5bWJvbD17c3lscy5pbnB1dEF1dGhvclNsdWd9IC8+XG4gICAgICAgICAgPFJUZXh0YXJlYVxuICAgICAgICAgICAgc3ltYm9sPXtzeWxzLnRleHRhcmVhQXV0aG9yRGVzY31cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgdGhpcy5hZGRBdXRob3IoKVxuICAgICAgICAgIH19PkFkZDwvQnV0dG9uPlxuICAgICAgICA8L01vZGFsPlxuXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+QWRkIEJvb2s8L2gxPlxuICAgICAgICA8U2VsZWN0aXplSW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJvb2sgdGl0bGVcIlxuICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9e25ld1ZhbHVlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQm9va3MobmV3VmFsdWUpXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMuaW5wdXRCb29rTmFtZSwgbmV3VmFsdWUpXG4gICAgICAgICAgfX1cbiAgICAgICAgICB2YWx1ZT17Xy5nZXQodGhpcy5wcm9wcy5lbGVtZW50c1tzeWxzLmlucHV0Qm9va05hbWVdLCAndmFsdWUnLCAnJyl9XG4gICAgICAgICAgb25WYWx1ZXNDaGFuZ2U9e25ld1ZhbHVlcyA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgYm9va1RpdGxlOiBuZXdWYWx1ZXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLm9wdGlvbnNPZkJvb2tUaXRsZX1cbiAgICAgICAgICB2YWx1ZXM9e3RoaXMuc3RhdGUuYm9va1RpdGxlfVxuICAgICAgICAgIG9uQWRkTmV3VmFsdWU9eygpID0+IHtcbiAgICAgICAgICAgIC8vIHRvZG9cbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uT3B0aW9uQ2xpY2s9e29wdGlvbiA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMuaW5wdXRCb29rQ292ZXIsIG9wdGlvbi5hZGRpdGlvbmFsLmNvdmVyKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZShzeWxzLmlucHV0Qm9va0F1dGhvciwgb3B0aW9uLmFkZGl0aW9uYWwuYXV0aG9yKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZShzeWxzLnRleHRhcmVhQm9va0Rlc2MsIG9wdGlvbi5hZGRpdGlvbmFsLmRlc2NyaXB0aW9uKVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG5cbiAgICAgICAgPFNlbGVjdGl6ZUlucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJCb29rIGF1dGhvclwiXG4gICAgICAgICAgb25JbnB1dENoYW5nZT17bmV3VmFsdWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hBdXRob3JzKG5ld1ZhbHVlKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZShzeWxzLmlucHV0Qm9va0F1dGhvciwgbmV3VmFsdWUpXG4gICAgICAgICAgfX1cbiAgICAgICAgICB2YWx1ZT17Xy5nZXQodGhpcy5wcm9wcy5lbGVtZW50c1tzeWxzLmlucHV0Qm9va0F1dGhvcl0sICd2YWx1ZScsICcnKX1cbiAgICAgICAgICBvblZhbHVlc0NoYW5nZT17bmV3VmFsdWVzID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBib29rQXV0aG9yOiBuZXdWYWx1ZXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLm9wdGlvbnNPZkJvb2tBdXRob3J9XG4gICAgICAgICAgdmFsdWVzPXt0aGlzLnN0YXRlLmJvb2tBdXRob3J9XG4gICAgICAgICAgYWRkTmV3VmFsdWU9e3RydWV9XG4gICAgICAgICAgb25BZGROZXdWYWx1ZT17dmFsdWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZShzeWxzLmlucHV0QXV0aG9yTmFtZSwgdmFsdWUpXG4gICAgICAgICAgICAvLyB0b2RvXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMuaW5wdXRBdXRob3JTbHVnLCB2YWx1ZSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hhbmdlVmFsdWUoc3lscy50ZXh0YXJlYUF1dGhvckRlc2MsICcnKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGlzQWRkQXV0aG9yTW9kYWxWaXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuXG4gICAgICAgIDxSSW5wdXQgcGxhY2Vob2xkZXI9XCJDb3ZlclwiIHN5bWJvbD17c3lscy5pbnB1dEJvb2tDb3Zlcn0gLz5cbiAgICAgICAgPFJUZXh0YXJlYSBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgc3ltYm9sPXtzeWxzLnRleHRhcmVhQm9va0Rlc2N9IC8+XG4gICAgICAgIDxSVGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJQYXN0ZSBib29rIGNvbnRlbnQgaGVyZVwiIHN5bWJvbD17c3lscy50ZXh0YXJlYUJvb2tDb250ZW50fSAvPlxuXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5hZGRCb29rKCl9fT5BZGQ8L0J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICBub3RpZmljYXRpb246IHN0YXRlLmNvbXBvbmVudHMubm90aWZpY2F0aW9uLFxuICAgIGVsZW1lbnRzOiBzdGF0ZS5lbGVtZW50c1xuICB9KSxcbiAgeyBzZW5kTm90aWZpY2F0aW9uLCBjaGFuZ2VWYWx1ZX1cbikoQWRkQm9vayBhcyBhbnkpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQm9vay9BZGRCb29rLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBJbnB1dCwgeyBQcm9wcyBhcyBJbnB1dFByb3BzIH0gZnJvbSAnLi4vX2Zvcm0vSW5wdXQvSW5wdXQnXG5pbXBvcnQgeyBjaGFuZ2VWYWx1ZSB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIElucHV0UHJvcHMge1xuICBzeW1ib2w6IHN5bWJvbFxuXG4gIGVsZW1lbnRzPzogYW55XG4gIGNoYW5nZVZhbHVlPzogYW55XG59XG5cbmNsYXNzIFJJbnB1dCBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPElucHV0XG4gICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgdmFsdWU9e18uZ2V0KHRoaXMucHJvcHMuZWxlbWVudHNbdGhpcy5wcm9wcy5zeW1ib2xdLCAndmFsdWUnLCAnJyl9XG4gICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxuICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgIHRoaXMucHJvcHMuY2hhbmdlVmFsdWUodGhpcy5wcm9wcy5zeW1ib2wsIG5ld1ZhbHVlKVxuICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ld1ZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCBQcm9wcz4oXG4gIHN0YXRlID0+ICh7XG4gICAgZWxlbWVudHM6IHN0YXRlLmVsZW1lbnRzXG4gIH0pLFxuICB7IGNoYW5nZVZhbHVlIH1cbikoUklucHV0KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX3dyYXBwZWQvUklucHV0LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBUZXh0YXJlYSwgeyBQcm9wcyBhcyBUZXh0YXJlYVByb3BzIH0gZnJvbSAnLi4vX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEnXG5pbXBvcnQgeyBjaGFuZ2VWYWx1ZSB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFRleHRhcmVhUHJvcHMge1xuICBzeW1ib2w/OiBzeW1ib2xcblxuICBlbGVtZW50cz86IGFueVxuICBjaGFuZ2VWYWx1ZT86IGFueVxufVxuXG5jbGFzcyBSVGV4dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0YXJlYVxuICAgICAgICB2YWx1ZT17Xy5nZXQodGhpcy5wcm9wcy5lbGVtZW50c1t0aGlzLnByb3BzLnN5bWJvbF0sICd2YWx1ZScsICcnKX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZSh0aGlzLnByb3BzLnN5bWJvbCwgbmV3VmFsdWUpXG4gICAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmV3VmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDx7fSwge30sIFByb3BzPihcbiAgc3RhdGUgPT4gKHtcbiAgICBlbGVtZW50czogc3RhdGUuZWxlbWVudHNcbiAgfSksXG4gIHsgY2hhbmdlVmFsdWUgfVxuKShSVGV4dGFyZWEpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fd3JhcHBlZC9SVGV4dGFyZWEudHN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==