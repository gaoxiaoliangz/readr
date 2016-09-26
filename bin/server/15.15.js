exports.ids = [15];
exports.modules = {

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.common = exports.usersSelector = exports.booksSelector = exports.booksSearchAsOptions = exports.authorsAsOptions = exports.doubanBooksAsOptions = exports.searchBooksSelector = exports.queryAuthorsSelector = exports.queryDoubanBooksSelector = undefined;
	
	var _common = __webpack_require__(450);
	
	Object.keys(_common).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _common[key];
	        }
	    });
	});
	
	var _reselect = __webpack_require__(451);
	
	var common = _interopRequireWildcard(_common);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var queryDoubanBooksSelector = exports.queryDoubanBooksSelector = function queryDoubanBooksSelector(query) {
	    return (0, _reselect.createSelector)((0, _common.selectPaginatedEntities)({
	        entitiesName: 'doubanBooks',
	        paginationName: 'doubanBooks',
	        paginationQuery: query
	    }), function (books) {
	        return books;
	    });
	};
	var queryAuthorsSelector = exports.queryAuthorsSelector = function queryAuthorsSelector(query) {
	    return (0, _common.selectPaginatedEntities)({
	        entitiesName: 'authors',
	        paginationName: 'authors',
	        paginationQuery: query
	    });
	};
	var searchBooksSelector = exports.searchBooksSelector = function searchBooksSelector(query) {
	    return (0, _common.selectPaginatedEntities)({
	        entitiesName: 'books',
	        paginationName: 'books',
	        paginationQuery: query
	    });
	};
	var doubanBooksAsOptions = exports.doubanBooksAsOptions = function doubanBooksAsOptions(query) {
	    return (0, _reselect.createSelector)(queryDoubanBooksSelector(query), function (books) {
	        return books.map(function (book) {
	            return {
	                name: book.title,
	                value: book.id,
	                additional: {
	                    description: book.summary,
	                    cover: book.images.large,
	                    author: book.author.join(', ')
	                }
	            };
	        });
	    });
	};
	var authorsAsOptions = exports.authorsAsOptions = function authorsAsOptions(query) {
	    return (0, _reselect.createSelector)(queryAuthorsSelector(query), function (items) {
	        return items.map(function (item) {
	            return {
	                name: item.name,
	                value: item.id
	            };
	        });
	    });
	};
	var booksSearchAsOptions = exports.booksSearchAsOptions = function booksSearchAsOptions(query) {
	    return (0, _reselect.createSelector)(searchBooksSelector(query), function (items) {
	        return items.map(function (item) {
	            return {
	                name: item.title,
	                value: item.id
	            };
	        });
	    });
	};
	var booksSelector = exports.booksSelector = (0, _reselect.createSelector)((0, _common.selectPaginatedEntities)({
	    entitiesName: 'books',
	    paginationName: 'books',
	    paginationKey: 'default'
	}), function (books) {
	    return books;
	});
	var usersSelector = exports.usersSelector = (0, _common.selectPaginatedEntities)({
	    entitiesName: 'users',
	    paginationName: 'users',
	    paginationKey: 'default'
	});
	exports.common = common;

/***/ },

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.selectPaginatedEntities = exports.paginationLinkSelector = undefined;
	
	var _reselect = __webpack_require__(451);
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var entitiesSelector = function entitiesSelector(name) {
	    return function (state) {
	        return state.entities[name] || {};
	    };
	};
	var paginationSelector = function paginationSelector(name) {
	    var key = arguments.length <= 1 || arguments[1] === undefined ? 'default' : arguments[1];
	    return function (state) {
	        return _lodash2.default.get(state.pagination, name + '.' + key + '.ids', []);
	    };
	};
	var paginationLinkSelector = exports.paginationLinkSelector = function paginationLinkSelector(name) {
	    var key = arguments.length <= 1 || arguments[1] === undefined ? 'default' : arguments[1];
	    return function (state) {
	        return _lodash2.default.pick(_lodash2.default.get(state.pagination, name + '.' + key, {}), ['next', 'last']);
	    };
	};
	var queryPaginationSelector = function queryPaginationSelector(name, query) {
	    return function (state) {
	        return _lodash2.default.get(state.pagination, [name, 'query', query, 'ids'], []);
	    };
	};
	var selectPaginatedEntities = exports.selectPaginatedEntities = function selectPaginatedEntities(options) {
	    var entitiesName = options.entitiesName;
	    var paginationName = options.paginationName;
	    var paginationKey = options.paginationKey;
	    var paginationQuery = options.paginationQuery;
	
	    var pagiSelector = void 0;
	    if (paginationQuery) {
	        pagiSelector = queryPaginationSelector(paginationName, paginationQuery);
	    } else {
	        pagiSelector = paginationSelector(paginationName, paginationKey);
	    }
	    return (0, _reselect.createSelector)(entitiesSelector(entitiesName), pagiSelector, function (entities, ids) {
	        return ids.map(function (id) {
	            return entities[id];
	        });
	    });
	};

/***/ },

/***/ 451:
/***/ function(module, exports) {

	module.exports = require("reselect");

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Textarea = exports.SelectizeInput = exports.Input = exports.Button = undefined;
	
	var _Button = __webpack_require__(372);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Input = __webpack_require__(461);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _SelectizeInput = __webpack_require__(465);
	
	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);
	
	var _Textarea = __webpack_require__(469);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Button = _Button2.default;
	exports.Input = _Input2.default;
	exports.SelectizeInput = _SelectizeInput2.default;
	exports.Textarea = _Textarea2.default;

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Input = __webpack_require__(462);
	
	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Input2.default;

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(74);
	
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
	
	var styles = __webpack_require__(463);
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

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(464);
	    var insertCss = __webpack_require__(290);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 464:
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

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _SelectizeInput = __webpack_require__(466);
	
	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SelectizeInput2.default;

/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(74);
	
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
	
	var styles = __webpack_require__(467);
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

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(468);
	    var insertCss = __webpack_require__(290);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 468:
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

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Textarea = __webpack_require__(470);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Textarea2.default;

/***/ },

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(74);
	
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
	
	var styles = __webpack_require__(471);
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

/***/ 471:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(472);
	    var insertCss = __webpack_require__(290);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(289)();
	// imports
	exports.i(__webpack_require__(402), "");
	exports.i(__webpack_require__(464), undefined);
	
	// module
	exports.push([module.id, ".textarea-wrap_Xkpj1 {\n}\n\n.textarea_1EdoS {\n  width: 100%;\n  padding: 5px;\n  border: 1px solid var(--gray);\n  outline: none;\n  height: 100px;\n  transition: border-color .3s;\n}\n\n.textarea_1EdoS:focus {\n  border-color: var(--blue);\n}\n", ""]);
	
	// exports
	exports.locals = {
		"textarea-wrap": "textarea-wrap_Xkpj1 " + __webpack_require__(464).locals["input-wrap"] + "",
		"textarea": "textarea_1EdoS"
	};

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(74);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(240);
	
	var _actions = __webpack_require__(248);
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _AddCollectionForm = __webpack_require__(551);
	
	var _AddCollectionForm2 = _interopRequireDefault(_AddCollectionForm);
	
	var _apis = __webpack_require__(403);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _DocContainer = __webpack_require__(237);
	
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
	            _apis2.default.addCollection(postData).then(function (result) {
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
	                this.props.fetchBooks({
	                    q: newVal
	                });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_DocContainer2.default, { title: "添加合集" }, _react2.default.createElement("h1", { className: "page-title" }, "Add Collection"), _react2.default.createElement(_AddCollectionForm2.default, { onSave: this.handleSave, onBooksValueChange: this.handleBooksValueChange }));
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
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, reset: _actions.reset, fetchBooks: _actions.fetchBooks })(AddCollection);

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(74);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(240);
	
	var _reduxForm = __webpack_require__(246);
	
	var _actions = __webpack_require__(248);
	
	var _Input = __webpack_require__(461);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _SelectizeInput = __webpack_require__(465);
	
	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);
	
	var _form = __webpack_require__(460);
	
	var _selectors = __webpack_require__(449);
	
	var selectors = _interopRequireWildcard(_selectors);
	
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
	
	            return _react2.default.createElement("div", null, _react2.default.createElement(_Input2.default, __assign({ placeholder: "name" }, name)), _react2.default.createElement(_SelectizeInput2.default, { placeholder: "Books", onInputChange: function onInputChange(newValue) {
	                    if (onBooksValueChange) {
	                        onBooksValueChange(newValue);
	                    }
	                    _booksValue.onChange(newValue);
	                }, value: _booksValue.value, onValuesChange: _booksValues.onChange, options: booksSearchAsOptions, values: _booksValues.value || [] }), _react2.default.createElement(_form.Textarea, __assign({}, description, { placeholder: "Description" })), _react2.default.createElement(_form.Button, { onClick: handleSubmit(function (data) {
	                    var postData = _.pick(data, ['name', 'description']);
	                    postData = Object.assign({}, postData, {
	                        items: _booksValues.value ? _booksValues.value.map(function (item) {
	                            return item.value;
	                        }) : []
	                    });
	                    onSave(postData);
	                }) }, "Add"));
	        }
	    }]);
	
	    return AddCollectionForm;
	}(_react.Component);
	AddCollectionForm = __decorate([(0, _reduxForm.reduxForm)({
	    form: 'addCollection',
	    fields: ['name', '_booksValue', '_booksValues', '_booksOptions', 'description']
	})], AddCollectionForm);
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    var booksQuery = _.get(state.form, 'addCollection._booksValue.value', '');
	    return {
	        initialValues: ownProps.initialData,
	        routing: state.routing.locationBeforeTransitions,
	        booksSearchAsOptions: selectors.booksSearchAsOptions(booksQuery)(state)
	    };
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification })(AddCollectionForm);

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvc2VsZWN0b3JzL2luZGV4LnRzPzcyNmIqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9zdG9yZS9zZWxlY3RvcnMvY29tbW9uLnRzPzMzMzYqKioqIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlc2VsZWN0XCI/YTkwMSoqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL2luZGV4LnRzPzUwZDcqKioqKioqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvaW5kZXgudHM/MjFkMyoqKioqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9JbnB1dC50c3g/ZGExZCoqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L0lucHV0LmNzcz8wNTBhKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L0lucHV0LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvaW5kZXgudHM/N2U4MCoqKioqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC50c3g/NGU3MyoqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LnNjc3M/Y2VhNCoqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9pbmRleC50cz9iODEyKioqKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLnRzeD9jMmFmKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEuY3NzP2FhMjEqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEuY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQ29sbGVjdGlvbi9BZGRDb2xsZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FkZENvbGxlY3Rpb24vY29tcG9uZW50cy9BZGRDb2xsZWN0aW9uRm9ybS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdPOztBQTBFUDs7Ozs7Ozs7OztBQTdFeUM7O0tBS3pDOzs7O0FBQU8sS0FBOEI7K0VBQ1g7QUFDVix1QkFBZTtBQUNiLHlCQUFlO0FBQ2QsMEJBQ2Y7TUFKcUIsQ0FEc0M7Z0JBUy9EO01BSE87RUFOc0M7QUFTdEMsS0FBMEI7aURBQW9DO0FBQ3ZELHVCQUFXO0FBQ1QseUJBQVc7QUFDViwwQkFHakI7TUFOb0U7RUFBM0I7QUFNbEMsS0FBeUI7aURBQW9DO0FBQ3RELHVCQUFTO0FBQ1AseUJBQVM7QUFDUiwwQkFHakI7TUFObUU7RUFBM0I7QUFNakMsS0FBMEI7WUFBMEIsOEJBQ2pDLHlCQUFPO0FBRXZCLGdCQUFNLE1BQUk7b0JBQVU7QUFDcEIsdUJBQU0sS0FBTTtBQUNYLHdCQUFNLEtBQUc7QUFDSiw2QkFBRTtBQUNDLGtDQUFNLEtBQVE7QUFDcEIsNEJBQU0sS0FBTyxPQUFNO0FBQ2xCLDZCQUFNLEtBQU8sT0FBSyxLQU1oQzs7O1VBWjZCO01BRHRCO0VBRmtD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QUFDNUIsK0JBQVcsVUFBcUIscUJBQVksWUFJcEU7O0VBVndCO21CQVVGLHlCQUNMLGlCQUNmLEVBQ0QsK0NBQW1CLG1CIiwiZmlsZSI6IjE1LjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzIH0gZnJvbSAnLi9jb21tb24nXG5pbXBvcnQgKiBhcyBjb21tb24gZnJvbSAnLi9jb21tb24nXG5cbmV4cG9ydCBjb25zdCBxdWVyeURvdWJhbkJvb2tzU2VsZWN0b3IgPSBxdWVyeSA9PiBjcmVhdGVTZWxlY3RvcihcbiAgc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMoe1xuICAgIGVudGl0aWVzTmFtZTogJ2RvdWJhbkJvb2tzJyxcbiAgICBwYWdpbmF0aW9uTmFtZTogJ2RvdWJhbkJvb2tzJyxcbiAgICBwYWdpbmF0aW9uUXVlcnk6IHF1ZXJ5XG4gIH0pLFxuICBib29rcyA9PiBib29rc1xuKVxuXG5leHBvcnQgY29uc3QgcXVlcnlBdXRob3JzU2VsZWN0b3IgPSBxdWVyeSA9PiBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyh7XG4gIGVudGl0aWVzTmFtZTogJ2F1dGhvcnMnLFxuICBwYWdpbmF0aW9uTmFtZTogJ2F1dGhvcnMnLFxuICBwYWdpbmF0aW9uUXVlcnk6IHF1ZXJ5XG59KVxuXG5leHBvcnQgY29uc3Qgc2VhcmNoQm9va3NTZWxlY3RvciA9IHF1ZXJ5ID0+IHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzKHtcbiAgZW50aXRpZXNOYW1lOiAnYm9va3MnLFxuICBwYWdpbmF0aW9uTmFtZTogJ2Jvb2tzJyxcbiAgcGFnaW5hdGlvblF1ZXJ5OiBxdWVyeVxufSlcblxuZXhwb3J0IGNvbnN0IGRvdWJhbkJvb2tzQXNPcHRpb25zID0gcXVlcnkgPT4gY3JlYXRlU2VsZWN0b3IoXG4gIHF1ZXJ5RG91YmFuQm9va3NTZWxlY3RvcihxdWVyeSksXG4gIGJvb2tzID0+IHtcbiAgICByZXR1cm4gYm9va3MubWFwKGJvb2sgPT4gKHtcbiAgICAgIG5hbWU6IGJvb2sudGl0bGUsXG4gICAgICB2YWx1ZTogYm9vay5pZCxcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgZGVzY3JpcHRpb246IGJvb2suc3VtbWFyeSxcbiAgICAgICAgY292ZXI6IGJvb2suaW1hZ2VzLmxhcmdlLFxuICAgICAgICBhdXRob3I6IGJvb2suYXV0aG9yLmpvaW4oJywgJylcbiAgICAgIH1cbiAgICB9KSlcbiAgfVxuKVxuXG5leHBvcnQgY29uc3QgYXV0aG9yc0FzT3B0aW9ucyA9IHF1ZXJ5ID0+IGNyZWF0ZVNlbGVjdG9yKFxuICBxdWVyeUF1dGhvcnNTZWxlY3RvcihxdWVyeSksXG4gIGl0ZW1zID0+IHtcbiAgICByZXR1cm4gaXRlbXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgIHZhbHVlOiBpdGVtLmlkXG4gICAgfSkpXG4gIH1cbilcblxuZXhwb3J0IGNvbnN0IGJvb2tzU2VhcmNoQXNPcHRpb25zID0gcXVlcnkgPT4gY3JlYXRlU2VsZWN0b3IoXG4gIHNlYXJjaEJvb2tzU2VsZWN0b3IocXVlcnkpLFxuICBpdGVtcyA9PiB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcChpdGVtID0+ICh7XG4gICAgICBuYW1lOiBpdGVtLnRpdGxlLFxuICAgICAgdmFsdWU6IGl0ZW0uaWRcbiAgICB9KSlcbiAgfVxuKVxuXG5leHBvcnQgY29uc3QgYm9va3NTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyh7XG4gICAgZW50aXRpZXNOYW1lOiAnYm9va3MnLFxuICAgIHBhZ2luYXRpb25OYW1lOiAnYm9va3MnLFxuICAgIHBhZ2luYXRpb25LZXk6ICdkZWZhdWx0J1xuICB9KSxcbiAgYm9va3MgPT4gYm9va3NcbilcblxuZXhwb3J0IGNvbnN0IHVzZXJzU2VsZWN0b3IgPSBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyh7XG4gIGVudGl0aWVzTmFtZTogJ3VzZXJzJyxcbiAgcGFnaW5hdGlvbk5hbWU6ICd1c2VycycsXG4gIHBhZ2luYXRpb25LZXk6ICdkZWZhdWx0J1xufSlcblxuZXhwb3J0ICogZnJvbSAnLi9jb21tb24nXG5leHBvcnQgeyBjb21tb24gfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvc2VsZWN0b3JzL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY29uc3QgZW50aXRpZXNTZWxlY3RvciA9IG5hbWUgPT4gc3RhdGUgPT4ge1xuICByZXR1cm4gc3RhdGUuZW50aXRpZXNbbmFtZV0gfHwge31cbn1cbmNvbnN0IHBhZ2luYXRpb25TZWxlY3RvciA9IChuYW1lLCBrZXkgPSAnZGVmYXVsdCcpID0+IHN0YXRlID0+IHtcbiAgcmV0dXJuIF8uZ2V0KHN0YXRlLnBhZ2luYXRpb24sIGAke25hbWV9LiR7a2V5fS5pZHNgLCBbXSlcbn1cbmV4cG9ydCBjb25zdCBwYWdpbmF0aW9uTGlua1NlbGVjdG9yID0gKG5hbWUsIGtleSA9ICdkZWZhdWx0JykgPT4gc3RhdGUgPT4ge1xuICByZXR1cm4gXy5waWNrKF8uZ2V0KHN0YXRlLnBhZ2luYXRpb24sIGAke25hbWV9LiR7a2V5fWAsIHt9KSwgWyduZXh0JywgJ2xhc3QnXSlcbn1cbmNvbnN0IHF1ZXJ5UGFnaW5hdGlvblNlbGVjdG9yID0gKG5hbWUsIHF1ZXJ5KSA9PiBzdGF0ZSA9PiB7XG4gIHJldHVybiBfLmdldChzdGF0ZS5wYWdpbmF0aW9uLCBbbmFtZSwgJ3F1ZXJ5JywgcXVlcnksICdpZHMnXSwgW10pXG59XG5cbnR5cGUgU2VsZWN0UGFnaW5hdGVkRW50aXRpZXNPcHRpb25zID0ge1xuICBlbnRpdGllc05hbWU6IHN0cmluZ1xuICBwYWdpbmF0aW9uTmFtZTogc3RyaW5nXG4gIHBhZ2luYXRpb25LZXk/OiBzdHJpbmdcbiAgcGFnaW5hdGlvblF1ZXJ5Pzogc3RyaW5nXG59XG5leHBvcnQgY29uc3Qgc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMgPSAob3B0aW9uczogU2VsZWN0UGFnaW5hdGVkRW50aXRpZXNPcHRpb25zKSA9PiB7XG4gIGNvbnN0IHtlbnRpdGllc05hbWUsIHBhZ2luYXRpb25OYW1lLCBwYWdpbmF0aW9uS2V5LCBwYWdpbmF0aW9uUXVlcnl9ID0gb3B0aW9uc1xuICBsZXQgcGFnaVNlbGVjdG9yOiAoc3RhdGU6IGFueSkgPT4gYW55W11cblxuICBpZiAocGFnaW5hdGlvblF1ZXJ5KSB7XG4gICAgcGFnaVNlbGVjdG9yID0gcXVlcnlQYWdpbmF0aW9uU2VsZWN0b3IocGFnaW5hdGlvbk5hbWUsIHBhZ2luYXRpb25RdWVyeSlcbiAgfSBlbHNlIHtcbiAgICBwYWdpU2VsZWN0b3IgPSBwYWdpbmF0aW9uU2VsZWN0b3IocGFnaW5hdGlvbk5hbWUsIHBhZ2luYXRpb25LZXkpXG4gIH1cblxuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZW50aXRpZXNTZWxlY3RvcihlbnRpdGllc05hbWUpLFxuICAgIHBhZ2lTZWxlY3RvcixcbiAgICAoZW50aXRpZXMsIGlkcykgPT4ge1xuICAgICAgcmV0dXJuIGlkcy5tYXAoaWQgPT4gZW50aXRpZXNbaWRdKVxuICAgIH1cbiAgKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvc2VsZWN0b3JzL2NvbW1vbi50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlc2VsZWN0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZXNlbGVjdFwiXG4gKiogbW9kdWxlIGlkID0gNDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyAxMiAxMyAxNCAxNVxuICoqLyIsImltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcbmltcG9ydCBTZWxlY3RpemVJbnB1dCBmcm9tICcuL1NlbGVjdGl6ZUlucHV0J1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vVGV4dGFyZWEnXG5cbmV4cG9ydCB7IEJ1dHRvbiwgSW5wdXQsIFNlbGVjdGl6ZUlucHV0LCBUZXh0YXJlYSB9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9pbmRleC50c1xuICoqLyIsImltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuZXhwb3J0IGRlZmF1bHQgSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0lucHV0LmNzcycpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgb25DaGFuZ2U/OiBhbnlcbiAgdmFsdWU/OiBzdHJpbmdcbiAgdHlwZT86IHN0cmluZ1xuICBuYW1lPzogc3RyaW5nXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpXG4gICAgZGVsZXRlIHByb3BzLmNsYXNzTmFtZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwiaW5wdXQtd3JhcFwiIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJyd9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBzdHlsZU5hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKVxuICAgICAgICAgIH19XG4gICAgICAgICAgdHlwZT17dGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ3RleHQnfVxuICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZSA/IHRoaXMucHJvcHMubmFtZSA6IG51bGx9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L0lucHV0LnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vSW5wdXQuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuY3NzXG4gKiogbW9kdWxlIGlkID0gNDYzXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2Uhc3R5bGVzL3ZhcmlhYmxlcy5jc3NcIiksIFwiXCIpO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbnB1dC13cmFwXzNkSEEzIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaW5wdXRfMmp1Qk8ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiB2YXIoLS1pbnB1dC1wYWRkaW5nKSA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5KTtcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuM3M7XFxuICBsaW5lLWhlaWdodDogdmFyKC0taW5wdXQtbGluZS1oZWlnaHQpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmlucHV0XzJqdUJPOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImlucHV0LXdyYXBcIjogXCJpbnB1dC13cmFwXzNkSEEzXCIsXG5cdFwiaW5wdXRcIjogXCJpbnB1dF8yanVCT1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9wb3N0Y3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9JbnB1dC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0NjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsImltcG9ydCBTZWxlY3RpemVJbnB1dCBmcm9tICcuL1NlbGVjdGl6ZUlucHV0J1xuZXhwb3J0IGRlZmF1bHQgU2VsZWN0aXplSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vSWNvbidcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBpc0Rlc2NlbmRhbnQgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZG9tL2lzRGVzY2VuZGFudCdcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vU2VsZWN0aXplSW5wdXQuc2NzcycpXG5cbnR5cGUgVHlwZU9wdGlvbiA9IHtcbiAgdmFsdWU6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGFkZGl0aW9uYWw/OiBhbnlcbn1cblxudHlwZSBUeXBlVmFsdWUgPSB7XG4gIHZhbHVlOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgbGFiZWw/OiBzdHJpbmdcbiAgc3RheUZvY3VzZWQ/OiBib29sZWFuIC8vIGRlZmF1bHQgdHJ1ZVxuXG4gIHZhbHVlOiBzdHJpbmdcbiAgb25JbnB1dENoYW5nZTogKG5ld1ZhbHVlOiBzdHJpbmcpID0+IHZvaWRcblxuICBvcHRpb25zOiBBcnJheTxUeXBlT3B0aW9uPlxuICBvbk9wdGlvbnNDaGFuZ2U/OiAobmV3VmFsdWVzOiBBcnJheTxUeXBlT3B0aW9uPikgPT4gdm9pZFxuXG4gIHZhbHVlczogQXJyYXk8VHlwZVZhbHVlPlxuICBvblZhbHVlc0NoYW5nZTogKG5ld1ZhbHVlczogQXJyYXk8VHlwZVZhbHVlPikgPT4gdm9pZFxuXG4gIC8vIOmineWkluWKn+iDvVxuICBvbkFkZE5ld1ZhbHVlPzogKG5ld1ZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbiAgb25PcHRpb25DbGljaz86IChzZWxlY3RlZFZhbHVlOiBUeXBlT3B0aW9uKSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBmb2N1cz86IGJvb2xlYW5cbiAgc2hvd09wdGlvbnM/OiBib29sZWFuXG4gIHZhbHVlPzogc3RyaW5nXG4gIGV4cGVuZGVkT3B0aW9uSW5kZXg/OiBudW1iZXJcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBTZWxlY3RpemVJbnB1dCBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50XG4gIGlucHV0V3JhcDogSFRNTERpdkVsZW1lbnRcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93T3B0aW9uczogZmFsc2UsXG4gICAgICBmb2N1czogZmFsc2UsXG4gICAgICB2YWx1ZTogJycsXG4gICAgICBleHBlbmRlZE9wdGlvbkluZGV4OiAwXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrID0gdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2suYmluZCh0aGlzKVxuICAgIHRoaXMuZm9jdXNJbnB1dCA9IHRoaXMuZm9jdXNJbnB1dC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVJbnB1dFdyYXBDbGljayA9IHRoaXMuaGFuZGxlSW5wdXRXcmFwQ2xpY2suYmluZCh0aGlzKVxuICB9XG5cbiAgYWRkVmFsdWUobmV3VmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLm9uVmFsdWVzQ2hhbmdlKHRoaXMucHJvcHMudmFsdWVzLmNvbmNhdChuZXdWYWx1ZSkpXG4gICAgaWYgKHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSh0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiAob3B0aW9uLnZhbHVlID09PSBuZXdWYWx1ZS52YWx1ZVxuICAgICAgICA/IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbiwgeyBkaXNhYmxlZDogdHJ1ZSB9KVxuICAgICAgICA6IG9wdGlvbikpKVxuICAgIH1cbiAgICB0aGlzLmNsZWFySW5wdXRWYWx1ZSgpXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnN0YXlGb2N1c2VkID09PSAndW5kZWZpbmVkJyB8fCB0aGlzLnByb3BzLnN0YXlGb2N1c2VkICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5mb2N1c0lucHV0KClcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3B0aW9uczogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlVmFsdWUoaW5kZXgpIHtcbiAgICBsZXQgbmV3VmFsdWVzID0gW11cbiAgICBsZXQgcmVtb3ZlZFZhbHVlXG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICBuZXdWYWx1ZXMgPSB0aGlzLnByb3BzLnZhbHVlcy5zbGljZSgwLCB0aGlzLnByb3BzLnZhbHVlcy5sZW5ndGggLSAxKVxuICAgICAgcmVtb3ZlZFZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZXNbdGhpcy5wcm9wcy52YWx1ZXMubGVuZ3RoIC0gMV0udmFsdWVcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3VmFsdWVzID0gdGhpcy5wcm9wcy52YWx1ZXNcbiAgICAgICAgLmZpbHRlcigodiwgaSkgPT4ge1xuICAgICAgICAgIHJlbW92ZWRWYWx1ZSA9IHYudmFsdWVcbiAgICAgICAgICByZXR1cm4gaSAhPT0gaW5kZXhcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKHRoaXMucHJvcHMub3B0aW9ucy5tYXAob3B0aW9uID0+IChvcHRpb24udmFsdWUgPT09IHJlbW92ZWRWYWx1ZVxuICAgICAgICA/IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbiwgeyBkaXNhYmxlZDogZmFsc2UgfSlcbiAgICAgICAgOiBvcHRpb24pKSlcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uVmFsdWVzQ2hhbmdlKG5ld1ZhbHVlcylcbiAgfVxuXG4gIGNsZWFySW5wdXRWYWx1ZSgpIHtcbiAgICB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UoJycpXG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gOCAmJiAhdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgdGhpcy5yZW1vdmVWYWx1ZSgtIDEpXG4gICAgfVxuICAgIC8vIHRvZG9cbiAgICAvLyBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiB0aGlzLnN0YXRlLnNob3dPcHRpb25zKSB7XG4gICAgLy8gICB0aGlzLmFkZFZhbHVlKClcbiAgICAvLyB9XG4gIH1cblxuICBmb2N1c0lucHV0KCkge1xuICAgIHRoaXMuaW5wdXQuZm9jdXMoKVxuICB9XG5cbiAgaGFuZGxlT3V0c2lkZUNsaWNrKGUpIHtcbiAgICBpZiAoIWlzRGVzY2VuZGFudCh0aGlzLmlucHV0V3JhcCwgZS50YXJnZXQpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd09wdGlvbnM6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUlucHV0V3JhcENsaWNrKCkge1xuICAgIHRoaXMuZm9jdXNJbnB1dCgpXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dPcHRpb25zOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2spXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYWJlbCwgdmFsdWVzLCBvbkFkZE5ld1ZhbHVlIH0gPSB0aGlzLnByb3BzXG5cbiAgICBsZXQgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlIHx8ICcnXG4gICAgbGV0IG9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnMgfHwgW11cblxuICAgIGxldCBpbnB1dFdpZHRoID0gdmFsdWVzLmxlbmd0aCA+IDAgPyAodmFsdWUubGVuZ3RoID09PSAwID8gMTYgOiB2YWx1ZS5sZW5ndGggKiAxNikgOiAnMTAwJSdcbiAgICBsZXQgcGxhY2Vob2xkZXIgPSB2YWx1ZXMubGVuZ3RoID4gMCA/ICcnIDogdGhpcy5wcm9wcy5wbGFjZWhvbGRlclxuXG4gICAgY29uc3Qgc2VsZWN0aXplSW5wdXRTdHlsZU5hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICdzZWxlY3RpemUtaW5wdXQnOiB0cnVlLFxuICAgICAgJ3NlbGVjdGl6ZS1pbnB1dC0tZm9jdXMnOiB0aGlzLnN0YXRlLmZvY3VzLFxuICAgICAgJ3NlbGVjdGl6ZS1pbnB1dC0tZW1wdHknOiB2YWx1ZXMubGVuZ3RoID09PSAwXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cInNlbGVjdGl6ZS13cmFwXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJ30+XG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbCA/IChcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+e2xhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGVOYW1lPXtzZWxlY3RpemVJbnB1dFN0eWxlTmFtZX1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUlucHV0V3JhcENsaWNrfVxuICAgICAgICAgIHJlZj17cmVmID0+IHsgdGhpcy5pbnB1dFdyYXAgPSByZWYgfSB9XG4gICAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlcy5tYXAoKHYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gc3R5bGVOYW1lPVwic2VsZWN0aXplLXRhZ1wiPlxuICAgICAgICAgICAgICAgICAge3YubmFtZX1cbiAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlTmFtZT1cImljb24tcmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjB9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWUoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogaW5wdXRXaWR0aCB9fVxuICAgICAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmlucHV0ID0gcmVmIH0gfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgb25CbHVyPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiBmYWxzZSB9KVxuICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICBvbkZvY3VzPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiB0cnVlIH0pXG4gICAgICAgICAgICB9IH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKChlLnRhcmdldCBhcyBhbnkpLnZhbHVlKVxuICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICBvbktleURvd249e2UgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZUtleVByZXNzKGUpXG4gICAgICAgICAgICB9IH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5zaG93T3B0aW9ucyAmJiAob3B0aW9ucy5sZW5ndGggIT09IDAgfHwgb25BZGROZXdWYWx1ZSkgPyAoXG4gICAgICAgICAgICA8dWwgc3R5bGVOYW1lPVwicXVlcnktcmVzdWx0c1wiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJkaXNhYmxlZFwiPntvcHRpb24ubmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVmFsdWUob3B0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25PcHRpb25DbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uT3B0aW9uQ2xpY2sob3B0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57b3B0aW9uLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uQWRkTmV3VmFsdWUgPyAoXG4gICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgb25BZGROZXdWYWx1ZSh0aGlzLnByb3BzLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkXCI+5re75YqgIDxzdHJvbmc+e3RoaXMucHJvcHMudmFsdWV9PC9zdHJvbmc+PC9saT5cbiAgICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICkgOiBudWxsXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RpemVJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9TZWxlY3RpemVJbnB1dC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2VsZWN0aXplLXdyYXBfM0FNQWkge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uc2VsZWN0aXplLWlucHV0XzE0YmdQIHtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdHJhbnNpdGlvbjogYWxsIDBzO1xcbiAgY3Vyc29yOiB0ZXh0O1xcbiAgYmFja2dyb3VuZDogI2ZmZjsgfVxcbiAgLnNlbGVjdGl6ZS1pbnB1dF8xNGJnUCBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBsaW5lLWhlaWdodDogMjJweDsgfVxcblxcbi5zZWxlY3RpemUtaW5wdXQtLWZvY3VzX1VuWjhCIHtcXG4gIGJvcmRlci1jb2xvcjogIzFCMjY3RjsgfVxcblxcbi5zZWxlY3RpemUtaW5wdXQtLWVtcHR5X3huN1V5IHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiA1cHggNXB4IDA7IH1cXG5cXG4uc2VsZWN0aXplLWlucHV0XzE0YmdQIGlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cXG5cXG4ucXVlcnktcmVzdWx0c19PZ0UydCB7XFxuICBtYXJnaW4tdG9wOiAtM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMzIpO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHotaW5kZXg6IDkwMDsgfVxcblxcbi5xdWVyeS1yZXN1bHRzX09nRTJ0IGxpIHtcXG4gIHBhZGRpbmc6IDAgN3B4O1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7IH1cXG4gIC5xdWVyeS1yZXN1bHRzX09nRTJ0IGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzFCMjY3RjtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG5cXG4uc2VsZWN0aXplLXRhZ18zYUQxMyB7XFxuICBiYWNrZ3JvdW5kOiAjMUIyNjdGO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogM3B4IDI1cHggM3B4IDVweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uaWNvbi1yZW1vdmVfMU83Rl8ge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDVweDtcXG4gIHRvcDogMnB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic2VsZWN0aXplLXdyYXBcIjogXCJzZWxlY3RpemUtd3JhcF8zQU1BaVwiLFxuXHRcInNlbGVjdGl6ZS1pbnB1dFwiOiBcInNlbGVjdGl6ZS1pbnB1dF8xNGJnUFwiLFxuXHRcInNlbGVjdGl6ZS1pbnB1dC0tZm9jdXNcIjogXCJzZWxlY3RpemUtaW5wdXQtLWZvY3VzX1VuWjhCXCIsXG5cdFwic2VsZWN0aXplLWlucHV0LS1lbXB0eVwiOiBcInNlbGVjdGl6ZS1pbnB1dC0tZW1wdHlfeG43VXlcIixcblx0XCJxdWVyeS1yZXN1bHRzXCI6IFwicXVlcnktcmVzdWx0c19PZ0UydFwiLFxuXHRcInNlbGVjdGl6ZS10YWdcIjogXCJzZWxlY3RpemUtdGFnXzNhRDEzXCIsXG5cdFwiaWNvbi1yZW1vdmVcIjogXCJpY29uLXJlbW92ZV8xTzdGX1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJpbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9UZXh0YXJlYSdcbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb3BzIGFzIElucHV0UHJvcHMgfSBmcm9tICcuLi9JbnB1dC9JbnB1dCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9UZXh0YXJlYS5jc3MnKVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSW5wdXRQcm9wcyB7XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cInRleHRhcmVhLXdyYXBcIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnfT5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKVxuICAgICAgICAgIH19XG4gICAgICAgICAgc3R5bGVOYW1lPVwidGV4dGFyZWFcIlxuICAgICAgICAgIHR5cGU9e3RoaXMucHJvcHMudHlwZSA/IHRoaXMucHJvcHMudHlwZSA6ICd0ZXh0J31cbiAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLm5hbWUgPyB0aGlzLnByb3BzLm5hbWUgOiBudWxsfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL1RleHRhcmVhLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ3MVxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIXN0eWxlcy92YXJpYWJsZXMuY3NzXCIpLCBcIlwiKTtcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi4vSW5wdXQvSW5wdXQuY3NzXCIpLCB1bmRlZmluZWQpO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50ZXh0YXJlYS13cmFwX1hrcGoxIHtcXG59XFxuXFxuLnRleHRhcmVhXzFFZG9TIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheSk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuM3M7XFxufVxcblxcbi50ZXh0YXJlYV8xRWRvUzpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ0ZXh0YXJlYS13cmFwXCI6IFwidGV4dGFyZWEtd3JhcF9Ya3BqMSBcIiArIHJlcXVpcmUoXCItIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuLi9JbnB1dC9JbnB1dC5jc3NcIikubG9jYWxzW1wiaW5wdXQtd3JhcFwiXSArIFwiXCIsXG5cdFwidGV4dGFyZWFcIjogXCJ0ZXh0YXJlYV8xRWRvU1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9wb3N0Y3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0NzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uLCByZXNldCwgZmV0Y2hCb29rcyB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgQWRkQ29sbGVjdGlvbkZvcm0gZnJvbSAnLi9jb21wb25lbnRzL0FkZENvbGxlY3Rpb25Gb3JtJ1xuaW1wb3J0IGFwaXMgZnJvbSAnLi4vLi4vYXBpcydcbmltcG9ydCBEb2NDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Eb2NDb250YWluZXInXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNlc3Npb246IGFueVxuICBzZW5kTm90aWZpY2F0aW9uPzogYW55XG4gIG5vdGlmaWNhdGlvbj86IGFueVxuICByZXNldDogYW55XG4gIGZldGNoQm9va3M/OiAoZGF0YTogZmV0Y2hCb29rcykgPT4gdm9pZFxufVxuXG5jbGFzcyBBZGRDb2xsZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5oYW5kbGVTYXZlID0gdGhpcy5oYW5kbGVTYXZlLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUJvb2tzVmFsdWVDaGFuZ2UgPSB0aGlzLmhhbmRsZUJvb2tzVmFsdWVDaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlU2F2ZShkYXRhKSB7XG4gICAgY29uc3QgY3JlYXRvciA9IHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLmlkXG4gICAgY29uc3QgcG9zdERhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBjcmVhdG9yXG4gICAgfSlcblxuICAgIGFwaXMuYWRkQ29sbGVjdGlvbihwb3N0RGF0YSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKCfmt7vliqDmiJDlip/vvIEnKVxuICAgICAgdGhpcy5wcm9wcy5yZXNldCgnYWRkQ29sbGVjdGlvbicpXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKGVycm9yLm1lc3NhZ2UpXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUJvb2tzVmFsdWVDaGFuZ2UobmV3VmFsKSB7XG4gICAgaWYgKCFfLmlzRW1wdHkobmV3VmFsKSkge1xuICAgICAgdGhpcy5wcm9wcy5mZXRjaEJvb2tzKHtcbiAgICAgICAgcTogbmV3VmFsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERvY0NvbnRhaW5lciB0aXRsZT1cIua3u+WKoOWQiOmbhlwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPkFkZCBDb2xsZWN0aW9uPC9oMT5cbiAgICAgICAgPEFkZENvbGxlY3Rpb25Gb3JtXG4gICAgICAgICAgb25TYXZlPXt0aGlzLmhhbmRsZVNhdmV9XG4gICAgICAgICAgb25Cb29rc1ZhbHVlQ2hhbmdlPXt0aGlzLmhhbmRsZUJvb2tzVmFsdWVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgIDwvRG9jQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBub3RpZmljYXRpb246IHN0YXRlLmNvbXBvbmVudHMubm90aWZpY2F0aW9uLFxuICAgIGVsZW1lbnRzOiBzdGF0ZS5lbGVtZW50cyxcbiAgICBzZXNzaW9uOiBzdGF0ZS5zZXNzaW9uXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICB7IHNlbmROb3RpZmljYXRpb24sIHJlc2V0LCBmZXRjaEJvb2tzIH1cbikoQWRkQ29sbGVjdGlvbiBhcyBhbnkpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQ29sbGVjdGlvbi9BZGRDb2xsZWN0aW9uLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nXG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCBJbnB1dCBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9fZm9ybS9JbnB1dCdcbmltcG9ydCBTZWxlY3RpemVJbnB1dCBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dCdcbmltcG9ydCB7VGV4dGFyZWEsIEJ1dHRvbn0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvX2Zvcm0nXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2VsZWN0b3JzJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpbml0aWFsRGF0YT86IGFueVxuICBvblNhdmU6IChkYXRhOiBhbnkpID0+IHZvaWRcbiAgb25Cb29rc1ZhbHVlQ2hhbmdlPzogKHZhbDogc3RyaW5nKSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBBbGxQcm9wcyBleHRlbmRzIFByb3BzIHtcbiAgcm91dGluZzogYW55XG4gIHNlbmROb3RpZmljYXRpb246IGFueVxuICBoYW5kbGVTdWJtaXQ6IGFueVxuICBmaWVsZHM6IGFueVxuICBib29rc1NlYXJjaEFzT3B0aW9uczogYW55XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG59XG5cbkByZWR1eEZvcm0oe1xuICBmb3JtOiAnYWRkQ29sbGVjdGlvbicsXG4gIGZpZWxkczogWyduYW1lJywgJ19ib29rc1ZhbHVlJywgJ19ib29rc1ZhbHVlcycsICdfYm9va3NPcHRpb25zJywgJ2Rlc2NyaXB0aW9uJ10sXG59KVxuY2xhc3MgQWRkQ29sbGVjdGlvbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQ8QWxsUHJvcHMsIFN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZpZWxkczogeyBuYW1lLCBfYm9va3NWYWx1ZSwgX2Jvb2tzVmFsdWVzLCBfYm9va3NPcHRpb25zLCBkZXNjcmlwdGlvbiB9LFxuICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgb25TYXZlLFxuICAgICAgb25Cb29rc1ZhbHVlQ2hhbmdlLFxuICAgICAgYm9va3NTZWFyY2hBc09wdGlvbnNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIm5hbWVcIiB7Li4ubmFtZX0gLz5cbiAgICAgICAgPFNlbGVjdGl6ZUlucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJCb29rc1wiXG4gICAgICAgICAgb25JbnB1dENoYW5nZT17bmV3VmFsdWUgPT4ge1xuICAgICAgICAgICAgaWYgKG9uQm9va3NWYWx1ZUNoYW5nZSkge1xuICAgICAgICAgICAgICBvbkJvb2tzVmFsdWVDaGFuZ2UobmV3VmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfYm9va3NWYWx1ZS5vbkNoYW5nZShuZXdWYWx1ZSlcbiAgICAgICAgICB9IH1cbiAgICAgICAgICB2YWx1ZT17X2Jvb2tzVmFsdWUudmFsdWV9XG4gICAgICAgICAgb25WYWx1ZXNDaGFuZ2U9e19ib29rc1ZhbHVlcy5vbkNoYW5nZX1cbiAgICAgICAgICBvcHRpb25zPXtib29rc1NlYXJjaEFzT3B0aW9uc31cbiAgICAgICAgICB2YWx1ZXM9e19ib29rc1ZhbHVlcy52YWx1ZSB8fCBbXX1cbiAgICAgICAgICAvPlxuICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICB7Li4uZGVzY3JpcHRpb259XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdChkYXRhID0+IHtcbiAgICAgICAgICAgIGxldCBwb3N0RGF0YSA9IF8ucGljayhkYXRhLCBbJ25hbWUnLCAnZGVzY3JpcHRpb24nXSlcbiAgICAgICAgICAgIHBvc3REYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgcG9zdERhdGEsIHtcbiAgICAgICAgICAgICAgaXRlbXM6IF9ib29rc1ZhbHVlcy52YWx1ZSA/IF9ib29rc1ZhbHVlcy52YWx1ZS5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKSA6IFtdXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgb25TYXZlKHBvc3REYXRhKVxuICAgICAgICAgIH0pIH1cbiAgICAgICAgICA+QWRkPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICBjb25zdCBib29rc1F1ZXJ5ID0gXy5nZXQoc3RhdGUuZm9ybSwgJ2FkZENvbGxlY3Rpb24uX2Jvb2tzVmFsdWUudmFsdWUnLCAnJylcblxuICByZXR1cm4ge1xuICAgIGluaXRpYWxWYWx1ZXM6IG93blByb3BzLmluaXRpYWxEYXRhLFxuICAgIHJvdXRpbmc6IHN0YXRlLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyxcbiAgICBib29rc1NlYXJjaEFzT3B0aW9uczogc2VsZWN0b3JzLmJvb2tzU2VhcmNoQXNPcHRpb25zKGJvb2tzUXVlcnkpKHN0YXRlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCBQcm9wcz4oXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgeyBzZW5kTm90aWZpY2F0aW9uIH1cbikoQWRkQ29sbGVjdGlvbkZvcm0pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQ29sbGVjdGlvbi9jb21wb25lbnRzL0FkZENvbGxlY3Rpb25Gb3JtLnRzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=