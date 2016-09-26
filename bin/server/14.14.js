exports.ids = [14];
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

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(74);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(240);
	
	var _reduxForm = __webpack_require__(246);
	
	var _actions = __webpack_require__(248);
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _apis = __webpack_require__(403);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _DocContainer = __webpack_require__(237);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _AddBookForm = __webpack_require__(547);
	
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
	
	            _apis2.default.addBook(data).then(function (result) {
	                _this2.props.sendNotification('添加成功');
	                _this2.props.reset('addBook');
	                _this2.setState({
	                    addBookFormInitialData: {}
	                });
	            }, function (error) {
	                _this2.props.sendNotification(error.message, 'error');
	            });
	        }
	    }, {
	        key: 'addAuthor',
	        value: function addAuthor(data) {
	            var _this3 = this;
	
	            _apis2.default.addAuthor(data).then(function (result) {
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
	            return _react2.default.createElement(_DocContainer2.default, { title: "添加书籍" }, _react2.default.createElement("h1", { className: "page-title" }, "Add Book"), _react2.default.createElement(_AddBookForm2.default, { onTitleInputChange: this.handleTitleValueChange, onAuthorInputChange: this.handleAuthorValueChange, onSaveAuthor: this.addAuthor, initialData: this.state.addBookFormInitialData, onSaveBook: this.addBook }));
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

/***/ 547:
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
	
	var _selectors = __webpack_require__(449);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _Input = __webpack_require__(461);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Textarea = __webpack_require__(469);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);
	
	var _form = __webpack_require__(460);
	
	var _AddAuthorForm = __webpack_require__(548);
	
	var _AddAuthorForm2 = _interopRequireDefault(_AddAuthorForm);
	
	var _lodash = __webpack_require__(9);
	
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
	
	            return _react2.default.createElement("div", null, _react2.default.createElement(_form.SelectizeInput, { placeholder: "Book title", onInputChange: function onInputChange(newValue) {
	                    onTitleInputChange(newValue);
	                    _titleValue.onChange(newValue);
	                }, value: _titleValue.value, onValuesChange: function onValuesChange(newValues) {
	                    _titleValues.onChange(newValues);
	                }, options: doubanBooksAsOptions, values: _titleValues.value || [], onOptionClick: this.handleTitleOptionClick }), _react2.default.createElement(_form.SelectizeInput, { placeholder: "Author", onInputChange: function onInputChange(newValue) {
	                    onAuthorInputChange(newValue);
	                    _authorValue.onChange(newValue);
	                }, value: _authorValue.value, onValuesChange: function onValuesChange(newValues) {
	                    _authorValues.onChange(newValues);
	                }, options: authorsAsOptions, values: _authorValues.value || [], onAddNewValue: function onAddNewValue(value) {
	                    _this2.props.openModal({
	                        title: 'Add Author',
	                        content: _react2.default.createElement(_AddAuthorForm2.default, { initialData: { name: value }, onSave: onSaveAuthor })
	                    });
	                } }), _react2.default.createElement(_Input2.default, __assign({ placeholder: "Cover" }, cover)), _react2.default.createElement(_Textarea2.default, __assign({ placeholder: "Description" }, description)), _react2.default.createElement(_Textarea2.default, __assign({ placeholder: "Paste book content here (markdown format)" }, content)), _react2.default.createElement(_form.Button, { onClick: handleSubmit(function (data) {
	                    var postData = _lodash2.default.pick(data, ['cover', 'description', 'content']);
	                    postData = _lodash2.default.assign({}, postData, {
	                        title: _lodash2.default.get(_titleValues, 'value[0].name', ''),
	                        authors: Array.isArray(_authorValues.value) ? _authorValues.value.map(function (v) {
	                            return v.value;
	                        }) : []
	                    });
	                    onSaveBook(postData);
	                }) }, "Add"));
	        }
	    }]);
	
	    return AddBookForm;
	}(_react.Component);
	AddBookForm = __decorate([(0, _reduxForm.reduxForm)({
	    form: 'addBook',
	    fields: fields
	})], AddBookForm);
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    var doubanBookQuery = _lodash2.default.get(state.form, 'addBook._titleValue.value', '');
	    var authorsQuery = _lodash2.default.get(state.form, 'addBook._authorValue.value', '');
	    return {
	        initialValues: ownProps.initialData,
	        routing: state.routing.locationBeforeTransitions,
	        doubanBooksAsOptions: selectors.doubanBooksAsOptions(doubanBookQuery)(state),
	        authorsAsOptions: selectors.authorsAsOptions(authorsQuery)(state)
	    };
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, openModal: _actions.openModal })(AddBookForm);

/***/ },

/***/ 548:
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
	
	var _ModalFooter = __webpack_require__(371);
	
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
	
	            return _react2.default.createElement("div", null, _react2.default.createElement(_Input2.default, __assign({ placeholder: "name" }, name)), _react2.default.createElement(_Input2.default, __assign({ placeholder: "slug" }, slug)), _react2.default.createElement(_Input2.default, __assign({ placeholder: "description" }, description)), _react2.default.createElement(_ModalFooter2.default, { onConfirm: handleSubmit(function (data) {
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

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvc2VsZWN0b3JzL2luZGV4LnRzPzcyNmIqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3N0b3JlL3NlbGVjdG9ycy9jb21tb24udHM/MzMzNioqKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXNlbGVjdFwiP2E5MDEqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL2luZGV4LnRzPzUwZDcqKioqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9pbmRleC50cz8yMWQzKioqKioqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQudHN4P2RhMWQqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L0lucHV0LmNzcz8wNTBhKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuY3NzP2Q5MjQqKioqKioqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvaW5kZXgudHM/N2U4MCoqKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LnRzeD80ZTczKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC5zY3NzP2NlYTQqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC5zY3NzPzhiOTMqKioqKioqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvaW5kZXgudHM/YjgxMioqKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLnRzeD9jMmFmKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS5jc3M/YWEyMSoqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLmNzcz81YmMyKioqKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9BZGRCb29rL0FkZEJvb2sudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQm9vay9jb21wb25lbnRzL0FkZEJvb2tGb3JtLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FkZEJvb2svY29tcG9uZW50cy9BZGRBdXRob3JGb3JtLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR087O0FBMEVQOzs7Ozs7Ozs7O0FBN0V5Qzs7S0FLekM7Ozs7QUFBTyxLQUE4QjsrRUFDWDtBQUNWLHVCQUFlO0FBQ2IseUJBQWU7QUFDZCwwQkFDZjtNQUpxQixDQURzQztnQkFTL0Q7TUFITztFQU5zQztBQVN0QyxLQUEwQjtpREFBb0M7QUFDdkQsdUJBQVc7QUFDVCx5QkFBVztBQUNWLDBCQUdqQjtNQU5vRTtFQUEzQjtBQU1sQyxLQUF5QjtpREFBb0M7QUFDdEQsdUJBQVM7QUFDUCx5QkFBUztBQUNSLDBCQUdqQjtNQU5tRTtFQUEzQjtBQU1qQyxLQUEwQjtZQUEwQiw4QkFDakMseUJBQU87QUFFdkIsZ0JBQU0sTUFBSTtvQkFBVTtBQUNwQix1QkFBTSxLQUFNO0FBQ1gsd0JBQU0sS0FBRztBQUNKLDZCQUFFO0FBQ0Msa0NBQU0s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eyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMgfSBmcm9tICcuL2NvbW1vbidcbmltcG9ydCAqIGFzIGNvbW1vbiBmcm9tICcuL2NvbW1vbidcblxuZXhwb3J0IGNvbnN0IHF1ZXJ5RG91YmFuQm9va3NTZWxlY3RvciA9IHF1ZXJ5ID0+IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyh7XG4gICAgZW50aXRpZXNOYW1lOiAnZG91YmFuQm9va3MnLFxuICAgIHBhZ2luYXRpb25OYW1lOiAnZG91YmFuQm9va3MnLFxuICAgIHBhZ2luYXRpb25RdWVyeTogcXVlcnlcbiAgfSksXG4gIGJvb2tzID0+IGJvb2tzXG4pXG5cbmV4cG9ydCBjb25zdCBxdWVyeUF1dGhvcnNTZWxlY3RvciA9IHF1ZXJ5ID0+IHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzKHtcbiAgZW50aXRpZXNOYW1lOiAnYXV0aG9ycycsXG4gIHBhZ2luYXRpb25OYW1lOiAnYXV0aG9ycycsXG4gIHBhZ2luYXRpb25RdWVyeTogcXVlcnlcbn0pXG5cbmV4cG9ydCBjb25zdCBzZWFyY2hCb29rc1NlbGVjdG9yID0gcXVlcnkgPT4gc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMoe1xuICBlbnRpdGllc05hbWU6ICdib29rcycsXG4gIHBhZ2luYXRpb25OYW1lOiAnYm9va3MnLFxuICBwYWdpbmF0aW9uUXVlcnk6IHF1ZXJ5XG59KVxuXG5leHBvcnQgY29uc3QgZG91YmFuQm9va3NBc09wdGlvbnMgPSBxdWVyeSA9PiBjcmVhdGVTZWxlY3RvcihcbiAgcXVlcnlEb3ViYW5Cb29rc1NlbGVjdG9yKHF1ZXJ5KSxcbiAgYm9va3MgPT4ge1xuICAgIHJldHVybiBib29rcy5tYXAoYm9vayA9PiAoe1xuICAgICAgbmFtZTogYm9vay50aXRsZSxcbiAgICAgIHZhbHVlOiBib29rLmlkLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICBkZXNjcmlwdGlvbjogYm9vay5zdW1tYXJ5LFxuICAgICAgICBjb3ZlcjogYm9vay5pbWFnZXMubGFyZ2UsXG4gICAgICAgIGF1dGhvcjogYm9vay5hdXRob3Iuam9pbignLCAnKVxuICAgICAgfVxuICAgIH0pKVxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBhdXRob3JzQXNPcHRpb25zID0gcXVlcnkgPT4gY3JlYXRlU2VsZWN0b3IoXG4gIHF1ZXJ5QXV0aG9yc1NlbGVjdG9yKHF1ZXJ5KSxcbiAgaXRlbXMgPT4ge1xuICAgIHJldHVybiBpdGVtcy5tYXAoaXRlbSA9PiAoe1xuICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgdmFsdWU6IGl0ZW0uaWRcbiAgICB9KSlcbiAgfVxuKVxuXG5leHBvcnQgY29uc3QgYm9va3NTZWFyY2hBc09wdGlvbnMgPSBxdWVyeSA9PiBjcmVhdGVTZWxlY3RvcihcbiAgc2VhcmNoQm9va3NTZWxlY3RvcihxdWVyeSksXG4gIGl0ZW1zID0+IHtcbiAgICByZXR1cm4gaXRlbXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgIG5hbWU6IGl0ZW0udGl0bGUsXG4gICAgICB2YWx1ZTogaXRlbS5pZFxuICAgIH0pKVxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBib29rc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gIHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzKHtcbiAgICBlbnRpdGllc05hbWU6ICdib29rcycsXG4gICAgcGFnaW5hdGlvbk5hbWU6ICdib29rcycsXG4gICAgcGFnaW5hdGlvbktleTogJ2RlZmF1bHQnXG4gIH0pLFxuICBib29rcyA9PiBib29rc1xuKVxuXG5leHBvcnQgY29uc3QgdXNlcnNTZWxlY3RvciA9IHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzKHtcbiAgZW50aXRpZXNOYW1lOiAndXNlcnMnLFxuICBwYWdpbmF0aW9uTmFtZTogJ3VzZXJzJyxcbiAgcGFnaW5hdGlvbktleTogJ2RlZmF1bHQnXG59KVxuXG5leHBvcnQgKiBmcm9tICcuL2NvbW1vbidcbmV4cG9ydCB7IGNvbW1vbiB9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9zZWxlY3RvcnMvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jb25zdCBlbnRpdGllc1NlbGVjdG9yID0gbmFtZSA9PiBzdGF0ZSA9PiB7XG4gIHJldHVybiBzdGF0ZS5lbnRpdGllc1tuYW1lXSB8fCB7fVxufVxuY29uc3QgcGFnaW5hdGlvblNlbGVjdG9yID0gKG5hbWUsIGtleSA9ICdkZWZhdWx0JykgPT4gc3RhdGUgPT4ge1xuICByZXR1cm4gXy5nZXQoc3RhdGUucGFnaW5hdGlvbiwgYCR7bmFtZX0uJHtrZXl9Lmlkc2AsIFtdKVxufVxuZXhwb3J0IGNvbnN0IHBhZ2luYXRpb25MaW5rU2VsZWN0b3IgPSAobmFtZSwga2V5ID0gJ2RlZmF1bHQnKSA9PiBzdGF0ZSA9PiB7XG4gIHJldHVybiBfLnBpY2soXy5nZXQoc3RhdGUucGFnaW5hdGlvbiwgYCR7bmFtZX0uJHtrZXl9YCwge30pLCBbJ25leHQnLCAnbGFzdCddKVxufVxuY29uc3QgcXVlcnlQYWdpbmF0aW9uU2VsZWN0b3IgPSAobmFtZSwgcXVlcnkpID0+IHN0YXRlID0+IHtcbiAgcmV0dXJuIF8uZ2V0KHN0YXRlLnBhZ2luYXRpb24sIFtuYW1lLCAncXVlcnknLCBxdWVyeSwgJ2lkcyddLCBbXSlcbn1cblxudHlwZSBTZWxlY3RQYWdpbmF0ZWRFbnRpdGllc09wdGlvbnMgPSB7XG4gIGVudGl0aWVzTmFtZTogc3RyaW5nXG4gIHBhZ2luYXRpb25OYW1lOiBzdHJpbmdcbiAgcGFnaW5hdGlvbktleT86IHN0cmluZ1xuICBwYWdpbmF0aW9uUXVlcnk/OiBzdHJpbmdcbn1cbmV4cG9ydCBjb25zdCBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyA9IChvcHRpb25zOiBTZWxlY3RQYWdpbmF0ZWRFbnRpdGllc09wdGlvbnMpID0+IHtcbiAgY29uc3Qge2VudGl0aWVzTmFtZSwgcGFnaW5hdGlvbk5hbWUsIHBhZ2luYXRpb25LZXksIHBhZ2luYXRpb25RdWVyeX0gPSBvcHRpb25zXG4gIGxldCBwYWdpU2VsZWN0b3I6IChzdGF0ZTogYW55KSA9PiBhbnlbXVxuXG4gIGlmIChwYWdpbmF0aW9uUXVlcnkpIHtcbiAgICBwYWdpU2VsZWN0b3IgPSBxdWVyeVBhZ2luYXRpb25TZWxlY3RvcihwYWdpbmF0aW9uTmFtZSwgcGFnaW5hdGlvblF1ZXJ5KVxuICB9IGVsc2Uge1xuICAgIHBhZ2lTZWxlY3RvciA9IHBhZ2luYXRpb25TZWxlY3RvcihwYWdpbmF0aW9uTmFtZSwgcGFnaW5hdGlvbktleSlcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBlbnRpdGllc1NlbGVjdG9yKGVudGl0aWVzTmFtZSksXG4gICAgcGFnaVNlbGVjdG9yLFxuICAgIChlbnRpdGllcywgaWRzKSA9PiB7XG4gICAgICByZXR1cm4gaWRzLm1hcChpZCA9PiBlbnRpdGllc1tpZF0pXG4gICAgfVxuICApXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9zZWxlY3RvcnMvY29tbW9uLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVzZWxlY3RcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlc2VsZWN0XCJcbiAqKiBtb2R1bGUgaWQgPSA0NTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDEyIDEzIDE0IDE1XG4gKiovIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuaW1wb3J0IFNlbGVjdGl6ZUlucHV0IGZyb20gJy4vU2VsZWN0aXplSW5wdXQnXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9UZXh0YXJlYSdcblxuZXhwb3J0IHsgQnV0dG9uLCBJbnB1dCwgU2VsZWN0aXplSW5wdXQsIFRleHRhcmVhIH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vSW5wdXQuY3NzJylcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICBvbkNoYW5nZT86IGFueVxuICB2YWx1ZT86IHN0cmluZ1xuICB0eXBlPzogc3RyaW5nXG4gIG5hbWU/OiBzdHJpbmdcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBJbnB1dCBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcylcbiAgICBkZWxldGUgcHJvcHMuY2xhc3NOYW1lXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9XCJpbnB1dC13cmFwXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJ30+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHN0eWxlTmFtZT1cImlucHV0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpXG4gICAgICAgICAgfX1cbiAgICAgICAgICB0eXBlPXt0aGlzLnByb3BzLnR5cGUgPyB0aGlzLnByb3BzLnR5cGUgOiAndGV4dCd9XG4gICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lID8gdGhpcy5wcm9wcy5uYW1lIDogbnVsbH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9JbnB1dC5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9JbnB1dC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0NjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSFzdHlsZXMvdmFyaWFibGVzLmNzc1wiKSwgXCJcIik7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmlucHV0LXdyYXBfM2RIQTMge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5pbnB1dF8yanVCTyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IHZhcigtLWlucHV0LXBhZGRpbmcpIDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXkpO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4zcztcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1pbnB1dC1saW5lLWhlaWdodCk7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uaW5wdXRfMmp1Qk86Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaW5wdXQtd3JhcFwiOiBcImlucHV0LXdyYXBfM2RIQTNcIixcblx0XCJpbnB1dFwiOiBcImlucHV0XzJqdUJPXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Bvc3Rjc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L0lucHV0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ2NFxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiaW1wb3J0IFNlbGVjdGl6ZUlucHV0IGZyb20gJy4vU2VsZWN0aXplSW5wdXQnXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RpemVJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9JY29uJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IGlzRGVzY2VuZGFudCBmcm9tICcuLi8uLi8uLi91dGlscy9kb20vaXNEZXNjZW5kYW50J1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9TZWxlY3RpemVJbnB1dC5zY3NzJylcblxudHlwZSBUeXBlT3B0aW9uID0ge1xuICB2YWx1ZTogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgYWRkaXRpb25hbD86IGFueVxufVxuXG50eXBlIFR5cGVWYWx1ZSA9IHtcbiAgdmFsdWU6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICBsYWJlbD86IHN0cmluZ1xuICBzdGF5Rm9jdXNlZD86IGJvb2xlYW4gLy8gZGVmYXVsdCB0cnVlXG5cbiAgdmFsdWU6IHN0cmluZ1xuICBvbklucHV0Q2hhbmdlOiAobmV3VmFsdWU6IHN0cmluZykgPT4gdm9pZFxuXG4gIG9wdGlvbnM6IEFycmF5PFR5cGVPcHRpb24+XG4gIG9uT3B0aW9uc0NoYW5nZT86IChuZXdWYWx1ZXM6IEFycmF5PFR5cGVPcHRpb24+KSA9PiB2b2lkXG5cbiAgdmFsdWVzOiBBcnJheTxUeXBlVmFsdWU+XG4gIG9uVmFsdWVzQ2hhbmdlOiAobmV3VmFsdWVzOiBBcnJheTxUeXBlVmFsdWU+KSA9PiB2b2lkXG5cbiAgLy8g6aKd5aSW5Yqf6IO9XG4gIG9uQWRkTmV3VmFsdWU/OiAobmV3VmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICBvbk9wdGlvbkNsaWNrPzogKHNlbGVjdGVkVmFsdWU6IFR5cGVPcHRpb24pID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIGZvY3VzPzogYm9vbGVhblxuICBzaG93T3B0aW9ucz86IGJvb2xlYW5cbiAgdmFsdWU/OiBzdHJpbmdcbiAgZXhwZW5kZWRPcHRpb25JbmRleD86IG51bWJlclxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIFNlbGVjdGl6ZUlucHV0IGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnRcbiAgaW5wdXRXcmFwOiBIVE1MRGl2RWxlbWVudFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dPcHRpb25zOiBmYWxzZSxcbiAgICAgIGZvY3VzOiBmYWxzZSxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIGV4cGVuZGVkT3B0aW9uSW5kZXg6IDBcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2sgPSB0aGlzLmhhbmRsZU91dHNpZGVDbGljay5iaW5kKHRoaXMpXG4gICAgdGhpcy5mb2N1c0lucHV0ID0gdGhpcy5mb2N1c0lucHV0LmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUlucHV0V3JhcENsaWNrID0gdGhpcy5oYW5kbGVJbnB1dFdyYXBDbGljay5iaW5kKHRoaXMpXG4gIH1cblxuICBhZGRWYWx1ZShuZXdWYWx1ZSkge1xuICAgIHRoaXMucHJvcHMub25WYWx1ZXNDaGFuZ2UodGhpcy5wcm9wcy52YWx1ZXMuY29uY2F0KG5ld1ZhbHVlKSlcbiAgICBpZiAodGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKHRoaXMucHJvcHMub3B0aW9ucy5tYXAob3B0aW9uID0+IChvcHRpb24udmFsdWUgPT09IG5ld1ZhbHVlLnZhbHVlXG4gICAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9uLCB7IGRpc2FibGVkOiB0cnVlIH0pXG4gICAgICAgIDogb3B0aW9uKSkpXG4gICAgfVxuICAgIHRoaXMuY2xlYXJJbnB1dFZhbHVlKClcbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuc3RheUZvY3VzZWQgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMucHJvcHMuc3RheUZvY3VzZWQgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmZvY3VzSW5wdXQoKVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dPcHRpb25zOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICByZW1vdmVWYWx1ZShpbmRleCkge1xuICAgIGxldCBuZXdWYWx1ZXMgPSBbXVxuICAgIGxldCByZW1vdmVkVmFsdWVcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIG5ld1ZhbHVlcyA9IHRoaXMucHJvcHMudmFsdWVzLnNsaWNlKDAsIHRoaXMucHJvcHMudmFsdWVzLmxlbmd0aCAtIDEpXG4gICAgICByZW1vdmVkVmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlc1t0aGlzLnByb3BzLnZhbHVlcy5sZW5ndGggLSAxXS52YWx1ZVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdWYWx1ZXMgPSB0aGlzLnByb3BzLnZhbHVlc1xuICAgICAgICAuZmlsdGVyKCh2LCBpKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlZFZhbHVlID0gdi52YWx1ZVxuICAgICAgICAgIHJldHVybiBpICE9PSBpbmRleFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UodGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHRpb24gPT4gKG9wdGlvbi52YWx1ZSA9PT0gcmVtb3ZlZFZhbHVlXG4gICAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9uLCB7IGRpc2FibGVkOiBmYWxzZSB9KVxuICAgICAgICA6IG9wdGlvbikpKVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25WYWx1ZXNDaGFuZ2UobmV3VmFsdWVzKVxuICB9XG5cbiAgY2xlYXJJbnB1dFZhbHVlKCkge1xuICAgIHRoaXMucHJvcHMub25JbnB1dENoYW5nZSgnJylcbiAgfVxuXG4gIGhhbmRsZUtleVByZXNzKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4ICYmICF0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICB0aGlzLnJlbW92ZVZhbHVlKC0gMSlcbiAgICB9XG4gICAgLy8gdG9kb1xuICAgIC8vIGlmIChlLmtleUNvZGUgPT09IDEzICYmIHRoaXMuc3RhdGUuc2hvd09wdGlvbnMpIHtcbiAgICAvLyAgIHRoaXMuYWRkVmFsdWUoKVxuICAgIC8vIH1cbiAgfVxuXG4gIGZvY3VzSW5wdXQoKSB7XG4gICAgdGhpcy5pbnB1dC5mb2N1cygpXG4gIH1cblxuICBoYW5kbGVPdXRzaWRlQ2xpY2soZSkge1xuICAgIGlmICghaXNEZXNjZW5kYW50KHRoaXMuaW5wdXRXcmFwLCBlLnRhcmdldCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93T3B0aW9uczogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlSW5wdXRXcmFwQ2xpY2soKSB7XG4gICAgdGhpcy5mb2N1c0lucHV0KClcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd09wdGlvbnM6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2spXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljaylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsLCB2YWx1ZXMsIG9uQWRkTmV3VmFsdWUgfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgJydcbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9ucyB8fCBbXVxuXG4gICAgbGV0IGlucHV0V2lkdGggPSB2YWx1ZXMubGVuZ3RoID4gMCA/ICh2YWx1ZS5sZW5ndGggPT09IDAgPyAxNiA6IHZhbHVlLmxlbmd0aCAqIDE2KSA6ICcxMDAlJ1xuICAgIGxldCBwbGFjZWhvbGRlciA9IHZhbHVlcy5sZW5ndGggPiAwID8gJycgOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyXG5cbiAgICBjb25zdCBzZWxlY3RpemVJbnB1dFN0eWxlTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgJ3NlbGVjdGl6ZS1pbnB1dCc6IHRydWUsXG4gICAgICAnc2VsZWN0aXplLWlucHV0LS1mb2N1cyc6IHRoaXMuc3RhdGUuZm9jdXMsXG4gICAgICAnc2VsZWN0aXplLWlucHV0LS1lbXB0eSc6IHZhbHVlcy5sZW5ndGggPT09IDBcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwic2VsZWN0aXplLXdyYXBcIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnfT5cbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsID8gKFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj57bGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICApIDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZU5hbWU9e3NlbGVjdGl6ZUlucHV0U3R5bGVOYW1lfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSW5wdXRXcmFwQ2xpY2t9XG4gICAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmlucHV0V3JhcCA9IHJlZiB9IH1cbiAgICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWVzLm1hcCgodiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fSBzdHlsZU5hbWU9XCJzZWxlY3RpemUtdGFnXCI+XG4gICAgICAgICAgICAgICAgICB7di5uYW1lfVxuICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgc3R5bGVOYW1lPVwiaWNvbi1yZW1vdmVcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZShpbmRleClcbiAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBpbnB1dFdpZHRoIH19XG4gICAgICAgICAgICByZWY9e3JlZiA9PiB7IHRoaXMuaW5wdXQgPSByZWYgfSB9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICBvbkJsdXI9e2UgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IGZhbHNlIH0pXG4gICAgICAgICAgICB9IH1cbiAgICAgICAgICAgIG9uRm9jdXM9e2UgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IHRydWUgfSlcbiAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UoKGUudGFyZ2V0IGFzIGFueSkudmFsdWUpXG4gICAgICAgICAgICB9IH1cbiAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlS2V5UHJlc3MoZSlcbiAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLnNob3dPcHRpb25zICYmIChvcHRpb25zLmxlbmd0aCAhPT0gMCB8fCBvbkFkZE5ld1ZhbHVlKSA/IChcbiAgICAgICAgICAgIDx1bCBzdHlsZU5hbWU9XCJxdWVyeS1yZXN1bHRzXCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImRpc2FibGVkXCI+e29wdGlvbi5uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRWYWx1ZShvcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbk9wdGlvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25PcHRpb25DbGljayhvcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntvcHRpb24ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb25BZGROZXdWYWx1ZSA/IChcbiAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBvbkFkZE5ld1ZhbHVlKHRoaXMucHJvcHMudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGRcIj7mt7vliqAgPHN0cm9uZz57dGhpcy5wcm9wcy52YWx1ZX08L3N0cm9uZz48L2xpPlxuICAgICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGl6ZUlucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL1NlbGVjdGl6ZUlucHV0LnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zZWxlY3RpemUtd3JhcF8zQU1BaSB7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5zZWxlY3RpemUtaW5wdXRfMTRiZ1Age1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0cmFuc2l0aW9uOiBhbGwgMHM7XFxuICBjdXJzb3I6IHRleHQ7XFxuICBiYWNrZ3JvdW5kOiAjZmZmOyB9XFxuICAuc2VsZWN0aXplLWlucHV0XzE0YmdQIGlucHV0IHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4OyB9XFxuXFxuLnNlbGVjdGl6ZS1pbnB1dC0tZm9jdXNfVW5aOEIge1xcbiAgYm9yZGVyLWNvbG9yOiAjMUIyNjdGOyB9XFxuXFxuLnNlbGVjdGl6ZS1pbnB1dC0tZW1wdHlfeG43VXkge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDVweCA1cHggMDsgfVxcblxcbi5zZWxlY3RpemUtaW5wdXRfMTRiZ1AgaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbi1ib3R0b206IDVweDsgfVxcblxcbi5xdWVyeS1yZXN1bHRzX09nRTJ0IHtcXG4gIG1hcmdpbi10b3A6IC0zcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zMik7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgei1pbmRleDogOTAwOyB9XFxuXFxuLnF1ZXJ5LXJlc3VsdHNfT2dFMnQgbGkge1xcbiAgcGFkZGluZzogMCA3cHg7XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcbiAgLnF1ZXJ5LXJlc3VsdHNfT2dFMnQgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMUIyNjdGO1xcbiAgICBjb2xvcjogI2ZmZjsgfVxcblxcbi5zZWxlY3RpemUtdGFnXzNhRDEzIHtcXG4gIGJhY2tncm91bmQ6ICMxQjI2N0Y7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiAzcHggMjVweCAzcHggNXB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5pY29uLXJlbW92ZV8xTzdGXyB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXB4O1xcbiAgdG9wOiAycHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJzZWxlY3RpemUtd3JhcFwiOiBcInNlbGVjdGl6ZS13cmFwXzNBTUFpXCIsXG5cdFwic2VsZWN0aXplLWlucHV0XCI6IFwic2VsZWN0aXplLWlucHV0XzE0YmdQXCIsXG5cdFwic2VsZWN0aXplLWlucHV0LS1mb2N1c1wiOiBcInNlbGVjdGl6ZS1pbnB1dC0tZm9jdXNfVW5aOEJcIixcblx0XCJzZWxlY3RpemUtaW5wdXQtLWVtcHR5XCI6IFwic2VsZWN0aXplLWlucHV0LS1lbXB0eV94bjdVeVwiLFxuXHRcInF1ZXJ5LXJlc3VsdHNcIjogXCJxdWVyeS1yZXN1bHRzX09nRTJ0XCIsXG5cdFwic2VsZWN0aXplLXRhZ1wiOiBcInNlbGVjdGl6ZS10YWdfM2FEMTNcIixcblx0XCJpY29uLXJlbW92ZVwiOiBcImljb24tcmVtb3ZlXzFPN0ZfXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0NjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsImltcG9ydCBUZXh0YXJlYSBmcm9tICcuL1RleHRhcmVhJ1xuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWFcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvcHMgYXMgSW5wdXRQcm9wcyB9IGZyb20gJy4uL0lucHV0L0lucHV0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1RleHRhcmVhLmNzcycpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJbnB1dFByb3BzIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBUZXh0YXJlYSBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwidGV4dGFyZWEtd3JhcFwiIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJyd9PlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpXG4gICAgICAgICAgfX1cbiAgICAgICAgICBzdHlsZU5hbWU9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgdHlwZT17dGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ3RleHQnfVxuICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZSA/IHRoaXMucHJvcHMubmFtZSA6IG51bGx9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWFcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vVGV4dGFyZWEuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEuY3NzXG4gKiogbW9kdWxlIGlkID0gNDcxXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2Uhc3R5bGVzL3ZhcmlhYmxlcy5jc3NcIiksIFwiXCIpO1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuLi9JbnB1dC9JbnB1dC5jc3NcIiksIHVuZGVmaW5lZCk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRleHRhcmVhLXdyYXBfWGtwajEge1xcbn1cXG5cXG4udGV4dGFyZWFfMUVkb1Mge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4zcztcXG59XFxuXFxuLnRleHRhcmVhXzFFZG9TOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInRleHRhcmVhLXdyYXBcIjogXCJ0ZXh0YXJlYS13cmFwX1hrcGoxIFwiICsgcmVxdWlyZShcIi0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4uL0lucHV0L0lucHV0LmNzc1wiKS5sb2NhbHNbXCJpbnB1dC13cmFwXCJdICsgXCJcIixcblx0XCJ0ZXh0YXJlYVwiOiBcInRleHRhcmVhXzFFZG9TXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Bvc3Rjc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ3MlxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHJlc2V0IH0gZnJvbSAncmVkdXgtZm9ybSdcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24sIGNoYW5nZVZhbHVlLCBvcGVuTW9kYWwsIHNlYXJjaERvdWJhbkJvb2tzLCBjbG9zZU1vZGFsLCBmZXRjaEF1dGhvcnMgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGFwaXMgZnJvbSAnLi4vLi4vYXBpcydcbmltcG9ydCBEb2NDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Eb2NDb250YWluZXInXG5pbXBvcnQgQWRkQm9va0Zvcm0gZnJvbSAnLi9jb21wb25lbnRzL0FkZEJvb2tGb3JtJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBlbGVtZW50cz86IGFueVxuICBjaGFuZ2VWYWx1ZT86IGFueVxuICBzZW5kTm90aWZpY2F0aW9uPzogYW55XG4gIG9wZW5Nb2RhbD86IChkYXRhOiBvcGVuTW9kYWwpID0+IHZvaWRcbiAgc2VhcmNoRG91YmFuQm9va3M/OiBhbnlcbiAgY2xvc2VNb2RhbD86IGFueVxuICBmZXRjaEF1dGhvcnM/OiBhbnlcbiAgcmVzZXQ/OiBhbnlcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgYWRkQm9va0Zvcm1Jbml0aWFsRGF0YT86IGFueVxufVxuXG5jbGFzcyBBZGRCb29rIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuXG4gIGRlZmF1bHRTdGF0ZToge31cbiAgZmV0Y2hEb3ViYW5Cb29rczogYW55XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWRkQm9va0Zvcm1Jbml0aWFsRGF0YToge31cbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZVRpdGxlVmFsdWVDaGFuZ2UgPSB0aGlzLmhhbmRsZVRpdGxlVmFsdWVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlQXV0aG9yVmFsdWVDaGFuZ2UgPSB0aGlzLmhhbmRsZUF1dGhvclZhbHVlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmFkZEF1dGhvciA9IHRoaXMuYWRkQXV0aG9yLmJpbmQodGhpcylcbiAgICB0aGlzLmFkZEJvb2sgPSB0aGlzLmFkZEJvb2suYmluZCh0aGlzKVxuICB9XG5cbiAgYWRkQm9vayhkYXRhKSB7XG4gICAgYXBpcy5hZGRCb29rKGRhdGEpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5re75Yqg5oiQ5YqfJylcbiAgICAgIHRoaXMucHJvcHMucmVzZXQoJ2FkZEJvb2snKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFkZEJvb2tGb3JtSW5pdGlhbERhdGE6IHt9XG4gICAgICB9KVxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbihlcnJvci5tZXNzYWdlLCAnZXJyb3InKVxuICAgIH0pXG4gIH1cblxuICBhZGRBdXRob3IoZGF0YSkge1xuICAgIGFwaXMuYWRkQXV0aG9yKGRhdGEpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5re75Yqg5oiQ5YqfJylcbiAgICAgIGNvbnN0IGlkID0gcmVzdWx0Lmpzb24ub3BzWzBdLl9pZFxuICAgICAgY29uc3QgbmFtZSA9IHJlc3VsdC5qc29uLm9wc1swXS5uYW1lXG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhZGRCb29rRm9ybUluaXRpYWxEYXRhOiB7XG4gICAgICAgICAgX2F1dGhvclZhbHVlczogW3tcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogaWRcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBfYXV0aG9yVmFsdWU6ICcnXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHRoaXMucHJvcHMuY2xvc2VNb2RhbCgpXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKGVycm9yLm1lc3NhZ2UpXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUF1dGhvclZhbHVlQ2hhbmdlKHF1ZXJ5KSB7XG4gICAgaWYgKCFfLmlzRW1wdHkocXVlcnkpKSB7XG4gICAgICB0aGlzLnByb3BzLmZldGNoQXV0aG9ycyh7XG4gICAgICAgIHE6IHF1ZXJ5XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVRpdGxlVmFsdWVDaGFuZ2UobmV3VmFsKSB7XG4gICAgaWYgKCFfLmlzRW1wdHkobmV3VmFsKSkge1xuICAgICAgdGhpcy5wcm9wcy5zZWFyY2hEb3ViYW5Cb29rcyhuZXdWYWwpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RG9jQ29udGFpbmVyIHRpdGxlPVwi5re75Yqg5Lmm57GNXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+QWRkIEJvb2s8L2gxPlxuICAgICAgICA8QWRkQm9va0Zvcm1cbiAgICAgICAgICBvblRpdGxlSW5wdXRDaGFuZ2U9e3RoaXMuaGFuZGxlVGl0bGVWYWx1ZUNoYW5nZX1cbiAgICAgICAgICBvbkF1dGhvcklucHV0Q2hhbmdlPXt0aGlzLmhhbmRsZUF1dGhvclZhbHVlQ2hhbmdlfVxuICAgICAgICAgIG9uU2F2ZUF1dGhvcj17dGhpcy5hZGRBdXRob3J9XG4gICAgICAgICAgaW5pdGlhbERhdGE9e3RoaXMuc3RhdGUuYWRkQm9va0Zvcm1Jbml0aWFsRGF0YX1cbiAgICAgICAgICBvblNhdmVCb29rPXt0aGlzLmFkZEJvb2t9XG4gICAgICAgIC8+XG4gICAgICA8L0RvY0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIG5vdGlmaWNhdGlvbjogc3RhdGUuY29tcG9uZW50cy5ub3RpZmljYXRpb24sXG4gICAgZWxlbWVudHM6IHN0YXRlLmVsZW1lbnRzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICB7IHNlbmROb3RpZmljYXRpb24sIGNoYW5nZVZhbHVlLCBvcGVuTW9kYWwsIHNlYXJjaERvdWJhbkJvb2tzLCBjbG9zZU1vZGFsLCBmZXRjaEF1dGhvcnMsIHJlc2V0IH1cbikoQWRkQm9vayBhcyBhbnkpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQm9vay9BZGRCb29rLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nXG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uLCBvcGVuTW9kYWwgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uLy4uL3N0b3JlL3NlbGVjdG9ycydcbmltcG9ydCBJbnB1dCBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9fZm9ybS9JbnB1dCdcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYSdcbmltcG9ydCB7IEJ1dHRvbiwgU2VsZWN0aXplSW5wdXR9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL19mb3JtJ1xuaW1wb3J0IEFkZEF1dGhvckZvcm0gZnJvbSAnLi9BZGRBdXRob3JGb3JtJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpbml0aWFsRGF0YT86IGFueVxuICBvblRpdGxlSW5wdXRDaGFuZ2U/OiAobmV3VmFsOiBzdHJpbmcpID0+IHZvaWRcbiAgb25BdXRob3JJbnB1dENoYW5nZT86IChuZXdWYWw6IHN0cmluZykgPT4gdm9pZFxuICBvblNhdmVBdXRob3I6IChkYXRhOiBhbnkpID0+IHZvaWRcbiAgb25TYXZlQm9vazogKGRhdGE6IGFueSkgPT4gdm9pZFxufVxuXG5pbnRlcmZhY2UgQWxsUHJvcHMgZXh0ZW5kcyBQcm9wcyB7XG4gIHJvdXRpbmc6IGFueVxuICBzZW5kTm90aWZpY2F0aW9uOiBhbnlcbiAgaGFuZGxlU3VibWl0OiBhbnlcbiAgZmllbGRzOiBhbnlcbiAgZG91YmFuQm9va3NBc09wdGlvbnM6IGFueVtdXG4gIGF1dGhvcnNBc09wdGlvbnM6IGFueVtdXG4gIG9wZW5Nb2RhbDogKGRhdGE6IG9wZW5Nb2RhbCkgPT4gdm9pZFxufVxuXG5jb25zdCBmaWVsZHMgPSBbJ190aXRsZVZhbHVlJywgJ190aXRsZVZhbHVlcycsICdfYXV0aG9yVmFsdWUnLCAnX2F1dGhvclZhbHVlcycsICdjb3ZlcicsICdkZXNjcmlwdGlvbicsICdjb250ZW50J11cblxuQHJlZHV4Rm9ybSh7XG4gIGZvcm06ICdhZGRCb29rJyxcbiAgZmllbGRzXG59KVxuY2xhc3MgQWRkQm9va0Zvcm0gZXh0ZW5kcyBDb21wb25lbnQ8QWxsUHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmhhbmRsZVRpdGxlT3B0aW9uQ2xpY2sgPSB0aGlzLmhhbmRsZVRpdGxlT3B0aW9uQ2xpY2suYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlVGl0bGVPcHRpb25DbGljayhvcHRpb24pIHtcbiAgICBjb25zdCB7XG4gICAgICBmaWVsZHM6IHsgX3RpdGxlVmFsdWUsIF90aXRsZVZhbHVlcywgX2F1dGhvclZhbHVlLCBjb3ZlciwgZGVzY3JpcHRpb24gfSxcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY292ZXIub25DaGFuZ2Uob3B0aW9uLmFkZGl0aW9uYWwuY292ZXIpXG4gICAgX2F1dGhvclZhbHVlLm9uQ2hhbmdlKG9wdGlvbi5hZGRpdGlvbmFsLmF1dGhvcilcbiAgICBkZXNjcmlwdGlvbi5vbkNoYW5nZShvcHRpb24uYWRkaXRpb25hbC5kZXNjcmlwdGlvbilcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmaWVsZHM6IHsgX3RpdGxlVmFsdWUsIF90aXRsZVZhbHVlcywgX2F1dGhvclZhbHVlLCBfYXV0aG9yVmFsdWVzLCBjb3ZlciwgZGVzY3JpcHRpb24sIGNvbnRlbnQgfSxcbiAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgIG9uVGl0bGVJbnB1dENoYW5nZSxcbiAgICAgIG9uQXV0aG9ySW5wdXRDaGFuZ2UsXG4gICAgICBkb3ViYW5Cb29rc0FzT3B0aW9ucyxcbiAgICAgIGF1dGhvcnNBc09wdGlvbnMsXG4gICAgICBvblNhdmVBdXRob3IsXG4gICAgICBvblNhdmVCb29rXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VsZWN0aXplSW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJvb2sgdGl0bGVcIlxuICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9e25ld1ZhbHVlID0+IHtcbiAgICAgICAgICAgIG9uVGl0bGVJbnB1dENoYW5nZShuZXdWYWx1ZSlcbiAgICAgICAgICAgIF90aXRsZVZhbHVlLm9uQ2hhbmdlKG5ld1ZhbHVlKVxuICAgICAgICAgIH0gfVxuICAgICAgICAgIHZhbHVlPXtfdGl0bGVWYWx1ZS52YWx1ZX1cbiAgICAgICAgICBvblZhbHVlc0NoYW5nZT17bmV3VmFsdWVzID0+IHtcbiAgICAgICAgICAgIF90aXRsZVZhbHVlcy5vbkNoYW5nZShuZXdWYWx1ZXMpXG4gICAgICAgICAgfSB9XG4gICAgICAgICAgb3B0aW9ucz17ZG91YmFuQm9va3NBc09wdGlvbnN9XG4gICAgICAgICAgdmFsdWVzPXtfdGl0bGVWYWx1ZXMudmFsdWUgfHwgW119XG4gICAgICAgICAgb25PcHRpb25DbGljaz17dGhpcy5oYW5kbGVUaXRsZU9wdGlvbkNsaWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgIDxTZWxlY3RpemVJbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXV0aG9yXCJcbiAgICAgICAgICBvbklucHV0Q2hhbmdlPXtuZXdWYWx1ZSA9PiB7XG4gICAgICAgICAgICBvbkF1dGhvcklucHV0Q2hhbmdlKG5ld1ZhbHVlKVxuICAgICAgICAgICAgX2F1dGhvclZhbHVlLm9uQ2hhbmdlKG5ld1ZhbHVlKVxuICAgICAgICAgIH0gfVxuICAgICAgICAgIHZhbHVlPXtfYXV0aG9yVmFsdWUudmFsdWV9XG4gICAgICAgICAgb25WYWx1ZXNDaGFuZ2U9e25ld1ZhbHVlcyA9PiB7XG4gICAgICAgICAgICBfYXV0aG9yVmFsdWVzLm9uQ2hhbmdlKG5ld1ZhbHVlcylcbiAgICAgICAgICB9IH1cbiAgICAgICAgICBvcHRpb25zPXthdXRob3JzQXNPcHRpb25zfVxuICAgICAgICAgIHZhbHVlcz17X2F1dGhvclZhbHVlcy52YWx1ZSB8fCBbXX1cbiAgICAgICAgICBvbkFkZE5ld1ZhbHVlPXt2YWx1ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9wZW5Nb2RhbCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAnQWRkIEF1dGhvcicsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IDxBZGRBdXRob3JGb3JtXG4gICAgICAgICAgICAgICAgaW5pdGlhbERhdGE9e3sgbmFtZTogdmFsdWUgfX1cbiAgICAgICAgICAgICAgICBvblNhdmU9e29uU2F2ZUF1dGhvcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IH1cbiAgICAgICAgICAvPlxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJDb3ZlclwiIHsuLi5jb3Zlcn0gLz5cbiAgICAgICAgPFRleHRhcmVhIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiB7Li4uZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxUZXh0YXJlYSBwbGFjZWhvbGRlcj1cIlBhc3RlIGJvb2sgY29udGVudCBoZXJlIChtYXJrZG93biBmb3JtYXQpXCIgey4uLmNvbnRlbnR9IC8+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0KGRhdGEgPT4ge1xuICAgICAgICAgIGxldCBwb3N0RGF0YSA9IF8ucGljayhkYXRhLCBbJ2NvdmVyJywgJ2Rlc2NyaXB0aW9uJywgJ2NvbnRlbnQnXSlcbiAgICAgICAgICBwb3N0RGF0YSA9IF8uYXNzaWduKHt9LCBwb3N0RGF0YSwge1xuICAgICAgICAgICAgdGl0bGU6IF8uZ2V0KF90aXRsZVZhbHVlcywgJ3ZhbHVlWzBdLm5hbWUnLCAnJyksXG4gICAgICAgICAgICBhdXRob3JzOiBBcnJheS5pc0FycmF5KF9hdXRob3JWYWx1ZXMudmFsdWUpID8gX2F1dGhvclZhbHVlcy52YWx1ZS5tYXAodiA9PiB2LnZhbHVlKSA6IFtdXG4gICAgICAgICAgfSlcbiAgICAgICAgICBvblNhdmVCb29rKHBvc3REYXRhKVxuICAgICAgICB9KSB9PkFkZDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgY29uc3QgZG91YmFuQm9va1F1ZXJ5ID0gXy5nZXQoc3RhdGUuZm9ybSwgJ2FkZEJvb2suX3RpdGxlVmFsdWUudmFsdWUnLCAnJylcbiAgY29uc3QgYXV0aG9yc1F1ZXJ5ID0gXy5nZXQoc3RhdGUuZm9ybSwgJ2FkZEJvb2suX2F1dGhvclZhbHVlLnZhbHVlJywgJycpXG5cbiAgcmV0dXJuIHtcbiAgICBpbml0aWFsVmFsdWVzOiBvd25Qcm9wcy5pbml0aWFsRGF0YSxcbiAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMsXG4gICAgZG91YmFuQm9va3NBc09wdGlvbnM6IHNlbGVjdG9ycy5kb3ViYW5Cb29rc0FzT3B0aW9ucyhkb3ViYW5Cb29rUXVlcnkpKHN0YXRlKSxcbiAgICBhdXRob3JzQXNPcHRpb25zOiBzZWxlY3RvcnMuYXV0aG9yc0FzT3B0aW9ucyhhdXRob3JzUXVlcnkpKHN0YXRlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCBQcm9wcz4oXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgeyBzZW5kTm90aWZpY2F0aW9uLCBvcGVuTW9kYWwgfVxuKShBZGRCb29rRm9ybSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9BZGRCb29rL2NvbXBvbmVudHMvQWRkQm9va0Zvcm0udHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSdcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24sIGNsb3NlTW9kYWwgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IElucHV0IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL19mb3JtL0lucHV0J1xuaW1wb3J0IE1vZGFsRm9vdGVyIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL01vZGFsL01vZGFsRm9vdGVyJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpbml0aWFsRGF0YT86IGFueVxuICBvblNhdmU6IChkYXRhOiBhbnkpID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIEFsbFByb3BzIGV4dGVuZHMgUHJvcHMge1xuICByb3V0aW5nOiBhbnlcbiAgc2VuZE5vdGlmaWNhdGlvbjogYW55XG4gIGhhbmRsZVN1Ym1pdDogYW55XG4gIGZpZWxkczogYW55XG4gIGNsb3NlTW9kYWw6ICgpID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbn1cblxuQHJlZHV4Rm9ybSh7XG4gIGZvcm06ICdhZGRBdXRob3InLFxuICBmaWVsZHM6IFsnbmFtZScsICdzbHVnJywgJ2Rlc2NyaXB0aW9uJ10sXG59KVxuY2xhc3MgQWRkQXV0aG9yRm9ybSBleHRlbmRzIENvbXBvbmVudDxBbGxQcm9wcywgU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZmllbGRzOiB7IG5hbWUsIHNsdWcsIGRlc2NyaXB0aW9uIH0sXG4gICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICBjbG9zZU1vZGFsLFxuICAgICAgb25TYXZlXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJuYW1lXCIgey4uLm5hbWV9IC8+XG4gICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cInNsdWdcIiB7Li4uc2x1Z30gLz5cbiAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiZGVzY3JpcHRpb25cIiB7Li4uZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxNb2RhbEZvb3RlclxuICAgICAgICAgIG9uQ29uZmlybT17aGFuZGxlU3VibWl0KGRhdGEgPT4ge1xuICAgICAgICAgICAgb25TYXZlKGRhdGEpXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgb25DYW5jZWw9e2Nsb3NlTW9kYWx9XG4gICAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PHt9LCB7fSwgUHJvcHM+KFxuICAoc3RhdGUsIG93blByb3BzKSA9PiAoe1xuICAgIGluaXRpYWxWYWx1ZXM6IG93blByb3BzLmluaXRpYWxEYXRhLFxuICAgIHJvdXRpbmc6IHN0YXRlLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9uc1xuICB9KSxcbiAgeyBzZW5kTm90aWZpY2F0aW9uLCBjbG9zZU1vZGFsIH1cbikoQWRkQXV0aG9yRm9ybSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9BZGRCb29rL2NvbXBvbmVudHMvQWRkQXV0aG9yRm9ybS50c3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9