webpackJsonp([9],{

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _BookList = __webpack_require__(110);
	
	var _BookList2 = _interopRequireDefault(_BookList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _BookList2.default;

/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Book = __webpack_require__(111);
	
	var _Book2 = _interopRequireDefault(_Book);
	
	var _reactCssModules = __webpack_require__(21);
	
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
	
	var styles = __webpack_require__(127);
	var BookList = function (_Component) {
	    _inherits(BookList, _Component);
	
	    function BookList() {
	        _classCallCheck(this, BookList);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(BookList).apply(this, arguments));
	    }
	
	    _createClass(BookList, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement("ul", { styleName: "book-list", className: "clearfix" }, this.props.bookEntities && this.props.bookEntities.length !== 0 ? this.props.bookEntities.map(function (book, index) {
	                var title = book.title;
	                var authors = book.authors;
	                var description = book.description;
	                var cover = book.cover;
	
	                return _react2.default.createElement("li", { key: index }, _react2.default.createElement(_Book2.default, { id: book.id, title: title, authors: authors.map(function (author) {
	                        return author.name;
	                    }).join(', '), description: description, cover: cover, disablePopup: true }));
	            }) : _react2.default.createElement("li", null, "暂无记录"));
	        }
	    }]);
	
	    return BookList;
	}(_react.Component);
	BookList = __decorate([(0, _reactCssModules2.default)(styles)], BookList);
	exports.default = BookList;

/***/ },

/***/ 111:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Book = __webpack_require__(112);
	
	var _Book2 = _interopRequireDefault(_Book);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Book2.default;

/***/ },

/***/ 112:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	var _BookInfoPopup = __webpack_require__(113);
	
	var _BookInfoPopup2 = _interopRequireDefault(_BookInfoPopup);
	
	var _reactCssModules = __webpack_require__(21);
	
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
	
	var styles = __webpack_require__(126);
	var Book = function (_Component) {
	    _inherits(Book, _Component);
	
	    function Book(props) {
	        _classCallCheck(this, Book);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Book).call(this, props));
	
	        _this.state = {
	            showPopup: false
	        };
	        _this.showPopup = _this.showPopup.bind(_this);
	        _this.hidePopup = _this.hidePopup.bind(_this);
	        return _this;
	    }
	
	    _createClass(Book, [{
	        key: "showPopup",
	        value: function showPopup() {
	            this.setState({
	                showPopup: true
	            });
	        }
	    }, {
	        key: "hidePopup",
	        value: function hidePopup() {
	            this.setState({
	                showPopup: false
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var showDesc = _props.showDesc;
	            var description = _props.description;
	
	            return _react2.default.createElement("div", { onMouseEnter: this.showPopup, onMouseLeave: this.hidePopup, styleName: "book--card" }, _react2.default.createElement(_reactRouter.Link, { to: '/book/' + this.props.id }, _react2.default.createElement("div", { styleName: "book-cover" }, _react2.default.createElement("img", { src: this.props.cover })), _react2.default.createElement("div", { styleName: "book-meta" }, _react2.default.createElement("span", { title: this.props.title, styleName: "book-name" }, this.props.title || '无标题'), _react2.default.createElement("span", { styleName: "book-author" }, this.props.authors || '作者不详'), showDesc && _react2.default.createElement("span", { styleName: "book-desc" }, description || '空'))), this.state.showPopup && !this.props.disablePopup && _react2.default.createElement(_BookInfoPopup2.default, { bookId: this.props.id, title: this.props.title, author: this.props.authors, description: this.props.description }));
	        }
	    }]);
	
	    return Book;
	}(_react.Component);
	Book = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], Book);
	exports.default = Book;

/***/ },

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _BookInfoPopup = __webpack_require__(114);
	
	var _BookInfoPopup2 = _interopRequireDefault(_BookInfoPopup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _BookInfoPopup2.default;

/***/ },

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _form = __webpack_require__(115);
	
	var _reactCssModules = __webpack_require__(21);
	
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
	
	var styles = __webpack_require__(125);
	var BookInfoPopup = function (_Component) {
	    _inherits(BookInfoPopup, _Component);
	
	    function BookInfoPopup(props) {
	        _classCallCheck(this, BookInfoPopup);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(BookInfoPopup).call(this, props));
	    }
	
	    _createClass(BookInfoPopup, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var author = _props.author;
	            var title = _props.title;
	            var description = _props.description;
	            var bookId = _props.bookId;
	
	            return _react2.default.createElement("div", { styleName: "popup" }, _react2.default.createElement("div", { styleName: "header" }, _react2.default.createElement("h2", { styleName: "title" }, title), _react2.default.createElement("p", { styleName: "author" }, author), _react2.default.createElement(_form.Button, { color: "blue", to: '/viewer/book/' + bookId }, "阅读")), _react2.default.createElement("div", { styleName: "description" }, _react2.default.createElement("p", null, description)));
	        }
	    }]);
	
	    return BookInfoPopup;
	}(_react.Component);
	BookInfoPopup = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], BookInfoPopup);
	exports.default = BookInfoPopup;

/***/ },

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Textarea = exports.SelectizeInput = exports.Input = exports.Button = undefined;
	
	var _Button = __webpack_require__(40);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Input = __webpack_require__(116);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _SelectizeInput = __webpack_require__(119);
	
	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);
	
	var _Textarea = __webpack_require__(122);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Button = _Button2.default;
	exports.Input = _Input2.default;
	exports.SelectizeInput = _SelectizeInput2.default;
	exports.Textarea = _Textarea2.default;

/***/ },

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Input = __webpack_require__(117);
	
	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Input2.default;

/***/ },

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(21);
	
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
	
	var styles = __webpack_require__(118);
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

/***/ 118:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"input-wrap":"input-wrap_3dHA3","input":"input_2juBO"};

/***/ },

/***/ 119:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _SelectizeInput = __webpack_require__(120);
	
	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SelectizeInput2.default;

/***/ },

/***/ 120:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Icon = __webpack_require__(17);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _classnames = __webpack_require__(19);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(21);
	
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
	
	var styles = __webpack_require__(121);
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

/***/ 121:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"selectize-wrap":"selectize-wrap_1HASb input-wrap_3dHA3","selectize-input":"selectize-input_1xAYz","selectize-input--focus":"selectize-input--focus_1uc2r selectize-input_1xAYz","selectize-input--empty":"selectize-input--empty_19EF1 selectize-input_1xAYz","query-results":"query-results_2fBA9","selectize-tag":"selectize-tag_1L1JH","icon":"icon_NOc-E"};

/***/ },

/***/ 122:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Textarea = __webpack_require__(123);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Textarea2.default;

/***/ },

/***/ 123:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(21);
	
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
	
	var styles = __webpack_require__(124);
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

/***/ 124:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"textarea-wrap":"textarea-wrap_Xkpj1 input-wrap_3dHA3","textarea":"textarea_1EdoS"};

/***/ },

/***/ 125:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"title":"title_BVO7e","popup":"popup_MPCqr","header":"header_1InIf","author":"author_28BiA","description":"description_D9rVN"};

/***/ },

/***/ 126:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"meta-item":"meta-item_2cRyJ","book":"book_3Oqz_","book-meta":"book-meta_3glcZ","book-name":"book-name_2jIuZ meta-item_2cRyJ","book-author":"book-author_1VM7e meta-item_2cRyJ","book-cover":"book-cover_1jrK8","book-desc":"book-desc_xFFKl","book--card":"book--card_3FOky book_3Oqz_"};

/***/ },

/***/ 127:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"book-list":"book-list_2s_Jl"};

/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(7);
	
	var _actions = __webpack_require__(8);
	
	var _BookList = __webpack_require__(109);
	
	var _BookList2 = _interopRequireDefault(_BookList);
	
	var _Container = __webpack_require__(49);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	var _Tab = __webpack_require__(154);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Shelf = function (_Component) {
	    _inherits(Shelf, _Component);
	
	    function Shelf(props) {
	        _classCallCheck(this, Shelf);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Shelf).call(this, props));
	    }
	
	    _createClass(Shelf, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.fetchShelf();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var bookList = this.props.shelf;
	            return _react2.default.createElement(_Container2.default, null, _react2.default.createElement(_Tab.Tabs, { style: { marginTop: 20 } }, _react2.default.createElement(_Tab.Tab, { title: "全部" }, _react2.default.createElement(_BookList2.default, { bookEntities: bookList })), _react2.default.createElement(_Tab.Tab, { title: "我的上传" }, "空")));
	        }
	    }], [{
	        key: 'fetchData',
	        value: function fetchData(_ref) {
	            var store = _ref.store;
	            var params = _ref.params;
	
	            return store.dispatch((0, _actions.fetchShelf)());
	        }
	    }]);
	
	    return Shelf;
	}(_react.Component);
	
	function mapStateToProps(state, ownProps) {
	    return {
	        shelf: state.payloads.bookShelf || []
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchShelf: _actions.fetchShelf })(Shelf);

/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Tabs = exports.Tab = undefined;
	
	var _Tab = __webpack_require__(155);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _Tabs = __webpack_require__(156);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Tab = _Tab2.default;
	exports.Tabs = _Tabs2.default;
	exports.default = _Tab2.default;

/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
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

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(19);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(21);
	
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
	
	var styles = __webpack_require__(157);
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

/***/ 157:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"tabs-header":"tabs-header_y5nSI","active":"active_3bbAo"};

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdC9pbmRleC50cz9kOTA5KioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3QvQm9va0xpc3QudHN4PzhiNjMqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rL2luZGV4LnRzPzk1N2IqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rL0Jvb2sudHN4P2FiOTgqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL2luZGV4LnRzP2FiN2EqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL0Jvb2tJbmZvUG9wdXAudHN4PzM3OWQqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vaW5kZXgudHM/NTBkNyoqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9pbmRleC50cz8yMWQzKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L0lucHV0LnRzeD9kYTFkKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuY3NzP2VkZjUqKioqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvaW5kZXgudHM/N2U4MCoqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC50c3g/NGU3MyoqKioqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LmNzcz8wYmY3KioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL2luZGV4LnRzP2I4MTIqKioqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEudHN4P2MyYWYqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS5jc3M/ZDlmZioqKioqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0luZm9Qb3B1cC9Cb29rSW5mb1BvcHVwLnNjc3M/NDE0OCoqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9vay9fYm9vay5zY3NzP2ExMDgqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0L0Jvb2tMaXN0LnNjc3M/NmMzMioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvU2hlbGYvU2hlbGYudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9UYWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1RhYi9UYWIudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9UYWIvVGFicy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvVGFiL190YWIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEaUI7Ozs7QUFDZDs7OztBQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzFDLEtBQVksU0FBVSxvQkFBbUI7QUFhekM7Ozs7Ozs7Ozs7OztBQUVXLG9CQUNMLDhCQUFH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WUFJVDs7Ozs7NkNBR1g7Ozs7OztpQkFDVyxRQUFPLEtBQU07O0FBRXJCLGtEQUNELGtCQUFVLFdBQU8sVUFBVSxRQUFHLEVBQU8saUJBQU8scUNBQzFDLFNBQVUsV0FBYywrQ0FDdkIsWUFDSyxLQUFNLE1BQWlCLFNBQUksY0FBTyxPQUFPO0FBQ3RDLHdCQUNMLDhCQUFHLFFBQVUsV0FBWSwwQkFBQyxFQUFTLFVBQU8sVUFBUyxPQUFNLE1BQVUsV0FBSSxLQUFRLE9BQVEsU0FBTSxPQUFlLGVBQVUsYUFBVSxVQUN4SCxNQUFNLE1BS2hCO2NBUmdDLENBRHBDLENBREYsQ0FERixPQWFlLE1BQWlCLFNBQ25CLGlCQUFPLE9BQU87QUFDYix3QkFBTSxVQUFTLE9BQU0sTUFDM0I7Y0FGTSxDQURMLENBSUM7QUFDSSx3QkFBTSxNQUFNLE1BQ2xCO2NBRlEsRUFPckIsSUEzQlM7Ozs7WUF2QmtCOztBQUg1QixtREFBa0IsUUFBRTtBQUNMLG9CQUNiO0VBRlMsSUFFVDtBQXFEVyxNQUFhLGVBQUc7QUFDZCxvQkFHZjs7bUJBQW1CLEs7Ozs7Ozs7QUMxRW5CO0FBQ0EsbUJBQWtCLDJEIiwiZmlsZSI6IjkuOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb29rTGlzdCBmcm9tICcuL0Jvb2tMaXN0J1xuZXhwb3J0IGRlZmF1bHQgQm9va0xpc3RcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3QvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm9vayBmcm9tICcuLi9Cb29rJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0Jvb2tMaXN0LnNjc3MnKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBib29rRW50aXRpZXM6IHtcbiAgICBpZDogc3RyaW5nXG4gICAgdGl0bGU6IHN0cmluZ1xuICAgIGF1dGhvcnM6IGFueVxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgICBjb3Zlcjogc3RyaW5nXG4gIH1bXVxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBCb29rTGlzdCBleHRlbmRzIENvbXBvbmVudDxQcm9wcywge30+IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dWwgc3R5bGVOYW1lPVwiYm9vay1saXN0XCIgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMuYm9va0VudGl0aWVzICYmIHRoaXMucHJvcHMuYm9va0VudGl0aWVzLmxlbmd0aCAhPT0gMFxuICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuYm9va0VudGl0aWVzLm1hcCgoYm9vaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHRpdGxlLCBhdXRob3JzLCBkZXNjcmlwdGlvbiwgY292ZXIgfSA9IGJvb2tcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8Qm9va1xuICAgICAgICAgICAgICAgICAgICAgIGlkPXtib29rLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICBhdXRob3JzPXthdXRob3JzLm1hcChhdXRob3IgPT4gYXV0aG9yLm5hbWUpLmpvaW4oJywgJykgfVxuICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICBjb3Zlcj17Y292ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVBvcHVwXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgIDxsaT7mmoLml6DorrDlvZU8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rTGlzdFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdC9Cb29rTGlzdC50c3hcbiAqKi8iLCJpbXBvcnQgQm9vayBmcm9tICcuL0Jvb2snXG5leHBvcnQgZGVmYXVsdCBCb29rXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2svaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IEJvb2tJbmZvUG9wdXAgZnJvbSAnLi4vQm9va0luZm9Qb3B1cCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9fYm9vay5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgYXV0aG9yczogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgaWQ6IHN0cmluZ1xuICBjb3Zlcjogc3RyaW5nXG4gIGRpc2FibGVQb3B1cD86IGJvb2xlYW5cbiAgc2hvd0Rlc2M/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBzaG93UG9wdXA6IGJvb2xlYW5cbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29rIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd1BvcHVwOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLnNob3dQb3B1cCA9IHRoaXMuc2hvd1BvcHVwLmJpbmQodGhpcylcbiAgICB0aGlzLmhpZGVQb3B1cCA9IHRoaXMuaGlkZVBvcHVwLmJpbmQodGhpcylcbiAgfVxuXG4gIHNob3dQb3B1cCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dQb3B1cDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBoaWRlUG9wdXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93UG9wdXA6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNob3dEZXNjLCBkZXNjcmlwdGlvbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgb25Nb3VzZUVudGVyPXt0aGlzLnNob3dQb3B1cH0gb25Nb3VzZUxlYXZlPXt0aGlzLmhpZGVQb3B1cH0gc3R5bGVOYW1lPVwiYm9vay0tY2FyZFwiPlxuICAgICAgICA8TGluayB0bz17Jy9ib29rLycgKyB0aGlzLnByb3BzLmlkfSA+XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJib29rLWNvdmVyXCI+PGltZyBzcmM9e3RoaXMucHJvcHMuY292ZXJ9Lz48L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImJvb2stbWV0YVwiPlxuICAgICAgICAgICAgPHNwYW4gdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9IHN0eWxlTmFtZT1cImJvb2stbmFtZVwiPnt0aGlzLnByb3BzLnRpdGxlIHx8ICfml6DmoIfpopgnfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cImJvb2stYXV0aG9yXCI+e3RoaXMucHJvcHMuYXV0aG9ycyB8fCAn5L2c6ICF5LiN6K+mJ308L3NwYW4+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNob3dEZXNjICYmIChcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZU5hbWU9XCJib29rLWRlc2NcIj57ZGVzY3JpcHRpb24gfHwgJ+epuid9PC9zcGFuPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1BvcHVwICYmICF0aGlzLnByb3BzLmRpc2FibGVQb3B1cCAmJiAoXG4gICAgICAgICAgICA8Qm9va0luZm9Qb3B1cFxuICAgICAgICAgICAgICBib29rSWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgICAgICBhdXRob3I9e3RoaXMucHJvcHMuYXV0aG9yc31cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3RoaXMucHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2svQm9vay50c3hcbiAqKi8iLCJpbXBvcnQgQm9va0luZm9Qb3B1cCBmcm9tICcuL0Jvb2tJbmZvUG9wdXAnXG5leHBvcnQgZGVmYXVsdCBCb29rSW5mb1BvcHVwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tJbmZvUG9wdXAvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvX2Zvcm0nXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vQm9va0luZm9Qb3B1cC5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGF1dGhvcjogc3RyaW5nXG4gIHRpdGxlOiBzdHJpbmdcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBib29rSWQ6IHN0cmluZ1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIEJvb2tJbmZvUG9wdXAgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCB7fT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYXV0aG9yLCB0aXRsZSwgZGVzY3JpcHRpb24sIGJvb2tJZCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwicG9wdXBcIj5cbiAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8aDIgc3R5bGVOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMj5cbiAgICAgICAgICA8cCBzdHlsZU5hbWU9XCJhdXRob3JcIj57YXV0aG9yfTwvcD5cbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiYmx1ZVwiIHRvPXsnL3ZpZXdlci9ib29rLycgKyBib29rSWR9PumYheivuzwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tJbmZvUG9wdXBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0luZm9Qb3B1cC9Cb29rSW5mb1BvcHVwLnRzeFxuICoqLyIsImltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcbmltcG9ydCBTZWxlY3RpemVJbnB1dCBmcm9tICcuL1NlbGVjdGl6ZUlucHV0J1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vVGV4dGFyZWEnXG5cbmV4cG9ydCB7IEJ1dHRvbiwgSW5wdXQsIFNlbGVjdGl6ZUlucHV0LCBUZXh0YXJlYSB9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9pbmRleC50c1xuICoqLyIsImltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuZXhwb3J0IGRlZmF1bHQgSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0lucHV0LmNzcycpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgb25DaGFuZ2U/OiBhbnlcbiAgdmFsdWU/OiBzdHJpbmdcbiAgdHlwZT86IHN0cmluZ1xuICBuYW1lPzogc3RyaW5nXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpXG4gICAgZGVsZXRlIHByb3BzLmNsYXNzTmFtZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwiaW5wdXQtd3JhcFwiIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJyd9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBzdHlsZU5hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKVxuICAgICAgICAgIH19XG4gICAgICAgICAgdHlwZT17dGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ3RleHQnfVxuICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZSA/IHRoaXMucHJvcHMubmFtZSA6IG51bGx9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L0lucHV0LnRzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImlucHV0LXdyYXBcIjpcImlucHV0LXdyYXBfM2RIQTNcIixcImlucHV0XCI6XCJpbnB1dF8yanVCT1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuY3NzXG4gKiogbW9kdWxlIGlkID0gMTE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJpbXBvcnQgU2VsZWN0aXplSW5wdXQgZnJvbSAnLi9TZWxlY3RpemVJbnB1dCdcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGl6ZUlucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uL0ljb24nXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1NlbGVjdGl6ZUlucHV0LmNzcycpXG5cbnR5cGUgVHlwZU9wdGlvbiA9IHtcbiAgdmFsdWU6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGFkZGl0aW9uYWw/OiBhbnlcbn1cblxudHlwZSBUeXBlVmFsdWUgPSB7XG4gIHZhbHVlOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgbGFiZWw/OiBzdHJpbmdcbiAgc3RheUZvY3VzZWQ/OiBib29sZWFuIC8vIGRlZmF1bHQgdHJ1ZVxuXG4gIHZhbHVlOiBzdHJpbmdcbiAgb25JbnB1dENoYW5nZTogKG5ld1ZhbHVlOiBzdHJpbmcpID0+IHZvaWRcblxuICBvcHRpb25zOiBBcnJheTxUeXBlT3B0aW9uPlxuICBvbk9wdGlvbnNDaGFuZ2U/OiAobmV3VmFsdWVzOiBBcnJheTxUeXBlT3B0aW9uPikgPT4gdm9pZFxuXG4gIHZhbHVlczogQXJyYXk8VHlwZVZhbHVlPlxuICBvblZhbHVlc0NoYW5nZTogKG5ld1ZhbHVlczogQXJyYXk8VHlwZVZhbHVlPikgPT4gdm9pZFxuXG4gIC8vIOmineWkluWKn+iDvVxuICBhZGROZXdWYWx1ZT86IGJvb2xlYW5cbiAgb25BZGROZXdWYWx1ZT86IChuZXdWYWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIG9uT3B0aW9uQ2xpY2s/OiAoc2VsZWN0ZWRWYWx1ZTogVHlwZU9wdGlvbikgPT4gdm9pZFxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgZm9jdXM/OiBib29sZWFuXG4gIHNob3dPcHRpb25zPzogYm9vbGVhblxuICB2YWx1ZT86IHN0cmluZ1xuICBleHBlbmRlZE9wdGlvbkluZGV4PzogbnVtYmVyXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgU2VsZWN0aXplSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBpbnB1dDogYW55XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd09wdGlvbnM6IGZhbHNlLFxuICAgICAgZm9jdXM6IGZhbHNlLFxuICAgICAgdmFsdWU6ICcnLFxuICAgICAgZXhwZW5kZWRPcHRpb25JbmRleDogMFxuICAgIH1cbiAgICB0aGlzLmhpZGVPcHRpb25zID0gdGhpcy5oaWRlT3B0aW9ucy5iaW5kKHRoaXMpXG4gICAgdGhpcy5mb2N1c0lucHV0ID0gdGhpcy5mb2N1c0lucHV0LmJpbmQodGhpcylcbiAgICB0aGlzLnNob3dPcHRpb25zID0gdGhpcy5zaG93T3B0aW9ucy5iaW5kKHRoaXMpXG4gIH1cblxuICBhZGRWYWx1ZShuZXdWYWx1ZSkge1xuICAgIHRoaXMucHJvcHMub25WYWx1ZXNDaGFuZ2UodGhpcy5wcm9wcy52YWx1ZXMuY29uY2F0KG5ld1ZhbHVlKSlcbiAgICBpZiAodGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKHRoaXMucHJvcHMub3B0aW9ucy5tYXAob3B0aW9uID0+IChvcHRpb24udmFsdWUgPT09IG5ld1ZhbHVlLnZhbHVlXG4gICAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9uLCB7IGRpc2FibGVkOiB0cnVlIH0pXG4gICAgICAgIDogb3B0aW9uKSkpXG4gICAgfVxuICAgIHRoaXMuY2xlYXJJbnB1dFZhbHVlKClcbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuc3RheUZvY3VzZWQgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMucHJvcHMuc3RheUZvY3VzZWQgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmZvY3VzSW5wdXQoKVxuICAgIH1cbiAgICB0aGlzLmhpZGVPcHRpb25zKClcbiAgfVxuXG4gIHJlbW92ZVZhbHVlKGluZGV4KSB7XG4gICAgbGV0IG5ld1ZhbHVlcyA9IFtdXG4gICAgbGV0IHJlbW92ZWRWYWx1ZVxuXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgbmV3VmFsdWVzID0gdGhpcy5wcm9wcy52YWx1ZXMuc2xpY2UoMCwgdGhpcy5wcm9wcy52YWx1ZXMubGVuZ3RoIC0gMSlcbiAgICAgIHJlbW92ZWRWYWx1ZSA9IHRoaXMucHJvcHMudmFsdWVzW3RoaXMucHJvcHMudmFsdWVzLmxlbmd0aCAtIDFdLnZhbHVlXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlcyA9IHRoaXMucHJvcHMudmFsdWVzXG4gICAgICAgIC5maWx0ZXIoKHYsIGkpID0+IHtcbiAgICAgICAgICByZW1vdmVkVmFsdWUgPSB2LnZhbHVlXG4gICAgICAgICAgcmV0dXJuIGkgIT09IGluZGV4XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSh0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiAob3B0aW9uLnZhbHVlID09PSByZW1vdmVkVmFsdWVcbiAgICAgICAgPyBPYmplY3QuYXNzaWduKHt9LCBvcHRpb24sIHsgZGlzYWJsZWQ6IGZhbHNlIH0pXG4gICAgICAgIDogb3B0aW9uKSkpXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vblZhbHVlc0NoYW5nZShuZXdWYWx1ZXMpXG4gIH1cblxuICBjbGVhcklucHV0VmFsdWUoKSB7XG4gICAgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKCcnKVxuICB9XG5cbiAgaGFuZGxlS2V5UHJlc3MoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDggJiYgIXRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgIHRoaXMucmVtb3ZlVmFsdWUoLSAxKVxuICAgIH1cbiAgICAvLyB0b2RvXG4gICAgLy8gaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgdGhpcy5zdGF0ZS5zaG93T3B0aW9ucykge1xuICAgIC8vICAgdGhpcy5hZGRWYWx1ZSgpXG4gICAgLy8gfVxuICB9XG5cbiAgZm9jdXNJbnB1dCgpIHtcbiAgICAodGhpcy5pbnB1dCBhcyBhbnkgYXMgSFRNTElucHV0RWxlbWVudCkuZm9jdXMoKVxuICB9XG5cbiAgaGlkZU9wdGlvbnMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3B0aW9uczogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgc2hvd09wdGlvbnMoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dPcHRpb25zOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZU9wdGlvbnMpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZU9wdGlvbnMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGxhYmVsID0gdGhpcy5wcm9wcy5sYWJlbCA/IHRoaXMucHJvcHMubGFiZWwgOiBudWxsXG4gICAgbGV0IHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZSA/IHRoaXMucHJvcHMudmFsdWUgOiAnJ1xuICAgIGxldCB2YWx1ZXMgPSB0aGlzLnByb3BzLnZhbHVlc1xuICAgIGxldCBvcHRpb25zID0gdGhpcy5wcm9wcy5vcHRpb25zID8gdGhpcy5wcm9wcy5vcHRpb25zIDogW11cbiAgICBsZXQgaW5wdXRXaWR0aCA9IHZhbHVlcy5sZW5ndGggPiAwID8gKHZhbHVlLmxlbmd0aCA9PT0gMCA/IDE2IDogdmFsdWUubGVuZ3RoICogMTYpIDogJzEwMCUnXG4gICAgbGV0IHBsYWNlaG9sZGVyID0gdmFsdWVzLmxlbmd0aCA+IDAgPyAnJyA6IHRoaXMucHJvcHMucGxhY2Vob2xkZXJcbiAgICBsZXQgYWRkTmV3VmFsdWUgPSB0aGlzLnByb3BzLmFkZE5ld1ZhbHVlID8gdGhpcy5wcm9wcy5hZGROZXdWYWx1ZSA6IHVuZGVmaW5lZFxuXG4gICAgY29uc3Qgc2VsZWN0aXplSW5wdXRTdHlsZU5hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICdzZWxlY3RpemUtaW5wdXQnOiB0cnVlLFxuICAgICAgJ3NlbGVjdGl6ZS1pbnB1dC0tZm9jdXMnOiB0aGlzLnN0YXRlLmZvY3VzLFxuICAgICAgJ3NlbGVjdGl6ZS1pbnB1dC0tZW1wdHknOiB2YWx1ZXMubGVuZ3RoID09PSAwXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cInNlbGVjdGl6ZS13cmFwXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJ30+XG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbCA/IChcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+e2xhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgKSA6bnVsbFxuICAgICAgICB9XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZU5hbWU9e3NlbGVjdGl6ZUlucHV0U3R5bGVOYW1lfVxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb2N1c0lucHV0KClcbiAgICAgICAgICAgIHRoaXMuc2hvd09wdGlvbnMoZSlcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWVzLm1hcCgodiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fSBzdHlsZU5hbWU9XCJzZWxlY3RpemUtdGFnXCI+XG4gICAgICAgICAgICAgICAgICB7di5uYW1lfVxuICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgc3R5bGVOYW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9ezIwfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVZhbHVlKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogaW5wdXRXaWR0aH19XG4gICAgICAgICAgICByZWY9e3JlZiA9PiB7dGhpcy5pbnB1dCA9IHJlZn19XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICBvbkJsdXI9e2UgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IGZhbHNlIH0pXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Gb2N1cz17ZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1czogdHJ1ZSB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKChlLnRhcmdldCBhcyBhbnkpLnZhbHVlKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlS2V5UHJlc3MoZSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICAodGhpcy5zdGF0ZS5zaG93T3B0aW9ucykgPyAoXG4gICAgICAgICAgICA8dWwgc3R5bGVOYW1lPVwicXVlcnktcmVzdWx0c1wiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJkaXNhYmxlZFwiPntvcHRpb24ubmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVmFsdWUob3B0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25PcHRpb25DbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uT3B0aW9uQ2xpY2sob3B0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57b3B0aW9uLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFkZE5ld1ZhbHVlID8gKFxuICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25BZGROZXdWYWx1ZSh0aGlzLnByb3BzLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGRcIj7mt7vliqAgPHN0cm9uZz57dGhpcy5wcm9wcy52YWx1ZX08L3N0cm9uZz48L2xpPlxuICAgICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGl6ZUlucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC50c3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJzZWxlY3RpemUtd3JhcFwiOlwic2VsZWN0aXplLXdyYXBfMUhBU2IgaW5wdXQtd3JhcF8zZEhBM1wiLFwic2VsZWN0aXplLWlucHV0XCI6XCJzZWxlY3RpemUtaW5wdXRfMXhBWXpcIixcInNlbGVjdGl6ZS1pbnB1dC0tZm9jdXNcIjpcInNlbGVjdGl6ZS1pbnB1dC0tZm9jdXNfMXVjMnIgc2VsZWN0aXplLWlucHV0XzF4QVl6XCIsXCJzZWxlY3RpemUtaW5wdXQtLWVtcHR5XCI6XCJzZWxlY3RpemUtaW5wdXQtLWVtcHR5XzE5RUYxIHNlbGVjdGl6ZS1pbnB1dF8xeEFZelwiLFwicXVlcnktcmVzdWx0c1wiOlwicXVlcnktcmVzdWx0c18yZkJBOVwiLFwic2VsZWN0aXplLXRhZ1wiOlwic2VsZWN0aXplLXRhZ18xTDFKSFwiLFwiaWNvblwiOlwiaWNvbl9OT2MtRVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQuY3NzXG4gKiogbW9kdWxlIGlkID0gMTIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJpbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9UZXh0YXJlYSdcbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb3BzIGFzIElucHV0UHJvcHMgfSBmcm9tICcuLi9JbnB1dC9JbnB1dCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9UZXh0YXJlYS5jc3MnKVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSW5wdXRQcm9wcyB7XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cInRleHRhcmVhLXdyYXBcIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnfT5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKVxuICAgICAgICAgIH19XG4gICAgICAgICAgc3R5bGVOYW1lPVwidGV4dGFyZWFcIlxuICAgICAgICAgIHR5cGU9e3RoaXMucHJvcHMudHlwZSA/IHRoaXMucHJvcHMudHlwZSA6ICd0ZXh0J31cbiAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLm5hbWUgPyB0aGlzLnByb3BzLm5hbWUgOiBudWxsfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS50c3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJ0ZXh0YXJlYS13cmFwXCI6XCJ0ZXh0YXJlYS13cmFwX1hrcGoxIGlucHV0LXdyYXBfM2RIQTNcIixcInRleHRhcmVhXCI6XCJ0ZXh0YXJlYV8xRWRvU1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEuY3NzXG4gKiogbW9kdWxlIGlkID0gMTI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJ0aXRsZVwiOlwidGl0bGVfQlZPN2VcIixcInBvcHVwXCI6XCJwb3B1cF9NUENxclwiLFwiaGVhZGVyXCI6XCJoZWFkZXJfMUluSWZcIixcImF1dGhvclwiOlwiYXV0aG9yXzI4QmlBXCIsXCJkZXNjcmlwdGlvblwiOlwiZGVzY3JpcHRpb25fRDlyVk5cIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0luZm9Qb3B1cC9Cb29rSW5mb1BvcHVwLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDYgOVxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIm1ldGEtaXRlbVwiOlwibWV0YS1pdGVtXzJjUnlKXCIsXCJib29rXCI6XCJib29rXzNPcXpfXCIsXCJib29rLW1ldGFcIjpcImJvb2stbWV0YV8zZ2xjWlwiLFwiYm9vay1uYW1lXCI6XCJib29rLW5hbWVfMmpJdVogbWV0YS1pdGVtXzJjUnlKXCIsXCJib29rLWF1dGhvclwiOlwiYm9vay1hdXRob3JfMVZNN2UgbWV0YS1pdGVtXzJjUnlKXCIsXCJib29rLWNvdmVyXCI6XCJib29rLWNvdmVyXzFqcks4XCIsXCJib29rLWRlc2NcIjpcImJvb2stZGVzY194RkZLbFwiLFwiYm9vay0tY2FyZFwiOlwiYm9vay0tY2FyZF8zRk9reSBib29rXzNPcXpfXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2svX2Jvb2suc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDEyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNiA5XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiYm9vay1saXN0XCI6XCJib29rLWxpc3RfMnNfSmxcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3QvQm9va0xpc3Quc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDEyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNiA5XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZmV0Y2hTaGVsZiB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgQm9va0xpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Cb29rTGlzdCdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vZWxlbWVudHMvX2xheW91dC9Db250YWluZXInXG5pbXBvcnQgeyBUYWIsIFRhYnMgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9UYWInXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBzaGVsZj86IGFueVxuICBmZXRjaFNoZWxmPzogYW55XG59XG5cbmNsYXNzIFNoZWxmIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywge30+IHtcblxuICBzdGF0aWMgZmV0Y2hEYXRhKHtzdG9yZSwgcGFyYW1zfSkge1xuICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChmZXRjaFNoZWxmKCkpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5mZXRjaFNoZWxmKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYm9va0xpc3QgPSB0aGlzLnByb3BzLnNoZWxmXG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFRhYnMgc3R5bGU9e3ttYXJnaW5Ub3A6IDIwfX0+XG4gICAgICAgICAgPFRhYiB0aXRsZT1cIuWFqOmDqFwiPlxuICAgICAgICAgICAgPEJvb2tMaXN0IGJvb2tFbnRpdGllcz17Ym9va0xpc3R9IC8+XG4gICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgPFRhYiB0aXRsZT1cIuaIkeeahOS4iuS8oFwiPlxuICAgICAgICAgICAg56m6XG4gICAgICAgICAgPC9UYWI+XG4gICAgICAgIDwvVGFicz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgc2hlbGY6IHN0YXRlLnBheWxvYWRzLmJvb2tTaGVsZiB8fCBbXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgeyBmZXRjaFNoZWxmIH1cbikoU2hlbGYgYXMgYW55KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1NoZWxmL1NoZWxmLnRzeFxuICoqLyIsImltcG9ydCBUYWIgZnJvbSAnLi9UYWInXG5pbXBvcnQgVGFicyBmcm9tICcuL1RhYnMnXG5cbmV4cG9ydCB7IFRhYiwgVGFicyB9XG5leHBvcnQgZGVmYXVsdCBUYWJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL1RhYi9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cbmNsYXNzIFRhYiBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJcIj5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9UYWIvVGFiLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vX3RhYi5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIG9uVGFiU3dpdGNoPzogKGFjdGl2ZVRhYkluZGV4OiBudW1iZXIpID0+IHZvaWRcbiAgZGVmYXVsdEFjdGl2ZT86IG51bWJlclxuICBzdHlsZT86IGFueVxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgYWN0aXZlOiBudW1iZXJcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBUYWJzIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlOiB0aGlzLnByb3BzLmRlZmF1bHRBY3RpdmVcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVUYWJDbGljayA9IHRoaXMuaGFuZGxlVGFiQ2xpY2suYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlVGFiQ2xpY2soaW5kZXgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZTogaW5kZXhcbiAgICB9KVxuICAgIGlmICh0aGlzLnByb3BzLm9uVGFiU3dpdGNoKSB7XG4gICAgICB0aGlzLnByb3BzLm9uVGFiU3dpdGNoKGluZGV4KVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3R5bGUgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnNcIiB7Li4uc3R5bGUgPyB7c3R5bGV9IDogbnVsbH0+XG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPVwidGFicy1oZWFkZXJcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7KHRoaXMucHJvcHMuY2hpbGRyZW4gYXMgYW55KS5tYXAoKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBzdHlsZU5hbWU9e2NsYXNzTmFtZXMoeydhY3RpdmUnOiBpbmRleCA9PT0gdGhpcy5zdGF0ZS5hY3RpdmV9KX0ga2V5PXtpbmRleH0gb25DbGljaz17dGhpcy5oYW5kbGVUYWJDbGljay5iaW5kKHRoaXMsIGluZGV4KSB9PlxuICAgICAgICAgICAgICAgICAge2NoaWxkLnByb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pIH1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgICh0aGlzLnByb3BzLmNoaWxkcmVuIGFzIGFueSlcbiAgICAgICAgICAgIC5maWx0ZXIoKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gaW5kZXggPT09IHRoaXMuc3RhdGUuYWN0aXZlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChjaGlsZCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBjaGlsZC5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgICAgfSlbMF1cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbihUYWJzIGFzIGFueSkuZGVmYXVsdFByb3BzID0ge1xuICBkZWZhdWx0QWN0aXZlOiAwXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL1RhYi9UYWJzLnRzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInRhYnMtaGVhZGVyXCI6XCJ0YWJzLWhlYWRlcl95NW5TSVwiLFwiYWN0aXZlXCI6XCJhY3RpdmVfM2JiQW9cIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1RhYi9fdGFiLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gOSAxMVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=