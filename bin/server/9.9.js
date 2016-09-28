exports.ids = [9];
exports.modules = {

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _BookList = __webpack_require__(457);
	
	var _BookList2 = _interopRequireDefault(_BookList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _BookList2.default;

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Book = __webpack_require__(458);
	
	var _Book2 = _interopRequireDefault(_Book);
	
	var _reactCssModules = __webpack_require__(288);
	
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
	
	var styles = __webpack_require__(480);
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
	
	                return _react2.default.createElement("li", { key: index }, _react2.default.createElement(_Book2.default, { id: book.id, title: title || '无标题', authors: authors && authors.map(function (author) {
	                        return author.name;
	                    }).join(', ') || '未知作者', description: description, cover: cover, disablePopup: true }));
	            }) : _react2.default.createElement("li", null, "暂无记录"));
	        }
	    }]);
	
	    return BookList;
	}(_react.Component);
	BookList = __decorate([(0, _reactCssModules2.default)(styles)], BookList);
	exports.default = BookList;

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Book = __webpack_require__(459);
	
	var _Book2 = _interopRequireDefault(_Book);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Book2.default;

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(73);
	
	var _BookInfoPopup = __webpack_require__(460);
	
	var _BookInfoPopup2 = _interopRequireDefault(_BookInfoPopup);
	
	var _reactCssModules = __webpack_require__(288);
	
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
	            var cover = _props.cover;
	
	            return _react2.default.createElement("div", { onMouseEnter: this.showPopup, onMouseLeave: this.hidePopup, styleName: "book--card" }, _react2.default.createElement(_reactRouter.Link, { to: '/book/' + this.props.id }, cover && _react2.default.createElement("div", { styleName: "book-cover" }, _react2.default.createElement("img", { src: this.props.cover })), _react2.default.createElement("div", { styleName: "book-meta" }, _react2.default.createElement("span", { title: this.props.title, styleName: "book-name" }, this.props.title || '无标题'), _react2.default.createElement("span", { styleName: "book-author" }, this.props.authors || '作者不详'), showDesc && _react2.default.createElement("span", { styleName: "book-desc" }, description || '空'))), this.state.showPopup && !this.props.disablePopup && _react2.default.createElement(_BookInfoPopup2.default, { bookId: this.props.id, title: this.props.title, author: this.props.authors, description: this.props.description }));
	        }
	    }]);
	
	    return Book;
	}(_react.Component);
	Book = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], Book);
	exports.default = Book;

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _BookInfoPopup = __webpack_require__(461);
	
	var _BookInfoPopup2 = _interopRequireDefault(_BookInfoPopup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _BookInfoPopup2.default;

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _form = __webpack_require__(462);
	
	var _reactCssModules = __webpack_require__(288);
	
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
	
	var styles = __webpack_require__(475);
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

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Textarea = exports.SelectizeInput = exports.Input = exports.Button = undefined;
	
	var _Button = __webpack_require__(374);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Input = __webpack_require__(463);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _SelectizeInput = __webpack_require__(467);
	
	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);
	
	var _Textarea = __webpack_require__(471);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Button = _Button2.default;
	exports.Input = _Input2.default;
	exports.SelectizeInput = _SelectizeInput2.default;
	exports.Textarea = _Textarea2.default;

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Input = __webpack_require__(464);
	
	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Input2.default;

/***/ },

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(288);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _classnames = __webpack_require__(286);
	
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
	
	var styles = __webpack_require__(465);
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

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(466);
	    var insertCss = __webpack_require__(292);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
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

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _SelectizeInput = __webpack_require__(468);
	
	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SelectizeInput2.default;

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
	
	var _Icon = __webpack_require__(284);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _classnames = __webpack_require__(286);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(288);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _isDescendant = __webpack_require__(388);
	
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
	
	var styles = __webpack_require__(469);
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

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(470);
	    var insertCss = __webpack_require__(292);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
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

/***/ 471:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Textarea = __webpack_require__(472);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Textarea2.default;

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
	
	var _reactCssModules = __webpack_require__(288);
	
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
	
	var styles = __webpack_require__(473);
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

/***/ 473:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(474);
	    var insertCss = __webpack_require__(292);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports
	exports.i(__webpack_require__(404), "");
	
	// module
	exports.push([module.id, ".textarea-wrap_Xkpj1 {\n  margin: 10px 0;\n  position: relative;\n}\n\n.textarea_1EdoS {\n  width: 100%;\n  padding: 5px;\n  border: 1px solid var(--gray);\n  outline: none;\n  height: 100px;\n  transition: border-color .3s;\n}\n\n.textarea_1EdoS:focus {\n  border-color: var(--blue);\n}\n", ""]);
	
	// exports
	exports.locals = {
		"textarea-wrap": "textarea-wrap_Xkpj1",
		"textarea": "textarea_1EdoS"
	};

/***/ },

/***/ 475:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(476);
	    var insertCss = __webpack_require__(292);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports
	
	
	// module
	exports.push([module.id, ".title_BVO7e {\n  margin: 35px 0;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #333; }\n\n.popup_MPCqr {\n  position: absolute;\n  z-index: 999;\n  left: 134px;\n  top: 0;\n  width: 300px;\n  background: #fff;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.16);\n  padding: 20px 20px 0;\n  border: 1px solid #ddd; }\n\n.header_1InIf {\n  margin-bottom: 20px; }\n\n.title_BVO7e {\n  margin: 30px 0 10px 0; }\n\n.author_28BiA {\n  font-size: 0.9rem;\n  margin: 0 0 2em 0; }\n\n.description_D9rVN {\n  line-height: 1.6;\n  padding: 10px 0;\n  border-top: 1px solid #ddd; }\n", ""]);
	
	// exports
	exports.locals = {
		"title": "title_BVO7e",
		"popup": "popup_MPCqr",
		"header": "header_1InIf",
		"author": "author_28BiA",
		"description": "description_D9rVN"
	};

/***/ },

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(478);
	    var insertCss = __webpack_require__(292);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports
	
	
	// module
	exports.push([module.id, ".meta-item_2cRyJ {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.book_3Oqz_ {\n  float: left;\n  transition: all 0.2s ease 0s;\n  position: relative;\n  width: 150px;\n  padding: 0 10px; }\n  .book_3Oqz_ a {\n    display: block;\n    padding-top: 10px;\n    position: relative; }\n    .book_3Oqz_ a:hover img {\n      opacity: .96; }\n    .book_3Oqz_ a:active img {\n      opacity: .8; }\n\n.book-meta_3glcZ {\n  background: transparent; }\n\n.meta-item_2cRyJ {\n  width: 100%;\n  text-align: left;\n  display: block;\n  line-height: 1.5;\n  margin-left: 17px;\n  width: 134px; }\n\n.book-name_2jIuZ {\n  font-size: 1.3rem;\n  color: #333; }\n\n.book-author_1VM7e {\n  color: #999; }\n\n.book-cover_1jrK8 {\n  position: relative;\n  margin: 0;\n  width: 134px;\n  height: 184px;\n  top: 0;\n  background: url(" + __webpack_require__(479) + ") no-repeat top;\n  transition: all 0.2s ease 0s;\n  position: relative; }\n  .book-cover_1jrK8 img {\n    width: 100px;\n    height: 150px;\n    display: block;\n    position: absolute;\n    border: none;\n    left: 17px;\n    top: 7px;\n    border-radius: 4px; }\n  .book-cover_1jrK8:hover {\n    top: -7px; }\n\n.book-desc_xFFKl {\n  color: #999; }\n\n.book--card_3FOky {\n  width: auto;\n  background: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  padding: 10px;\n  float: none; }\n  .book--card_3FOky a {\n    padding: 0;\n    display: block;\n    overflow: hidden;\n    opacity: 1; }\n    .book--card_3FOky a:hover img {\n      opacity: 1; }\n    .book--card_3FOky a:active img {\n      opacity: 1; }\n  .book--card_3FOky .book-cover_1jrK8 {\n    width: auto;\n    height: auto;\n    height: 72px;\n    background: none;\n    overflow: hidden;\n    float: left;\n    border-radius: 4px;\n    margin-right: 20px; }\n    .book--card_3FOky .book-cover_1jrK8:hover {\n      top: 0; }\n    .book--card_3FOky .book-cover_1jrK8 img {\n      width: 50px;\n      height: auto;\n      position: relative;\n      top: 0;\n      left: 0; }\n  .book--card_3FOky .book-meta_3glcZ {\n    float: none; }\n  .book--card_3FOky .meta-item_2cRyJ {\n    width: auto; }\n", ""]);
	
	// exports
	exports.locals = {
		"meta-item": "meta-item_2cRyJ",
		"book": "book_3Oqz_",
		"book-meta": "book-meta_3glcZ",
		"book-name": "book-name_2jIuZ meta-item_2cRyJ",
		"book-author": "book-author_1VM7e meta-item_2cRyJ",
		"book-cover": "book-cover_1jrK8",
		"book-desc": "book-desc_xFFKl",
		"book--card": "book--card_3FOky book_3Oqz_"
	};

/***/ },

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/shadow.471ea37f96.png";

/***/ },

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(481);
	    var insertCss = __webpack_require__(292);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports
	
	
	// module
	exports.push([module.id, ".book-list_2s_Jl {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin-left: -10px;\n  margin-right: -10px; }\n  .book-list_2s_Jl li {\n    float: left;\n    width: 50%;\n    padding: 10px;\n    box-sizing: border-box; }\n", ""]);
	
	// exports
	exports.locals = {
		"book-list": "book-list_2s_Jl"
	};

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(243);
	
	var _actions = __webpack_require__(251);
	
	var _BookList = __webpack_require__(456);
	
	var _BookList2 = _interopRequireDefault(_BookList);
	
	var _Container = __webpack_require__(385);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	var _Tab = __webpack_require__(517);
	
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

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Tabs = exports.Tab = undefined;
	
	var _Tab = __webpack_require__(518);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _Tabs = __webpack_require__(519);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Tab = _Tab2.default;
	exports.Tabs = _Tabs2.default;
	exports.default = _Tab2.default;

/***/ },

/***/ 518:
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

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(286);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(288);
	
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
	
	var styles = __webpack_require__(520);
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

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(521);
	    var insertCss = __webpack_require__(292);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports
	
	
	// module
	exports.push([module.id, ".tabs-header_y5nSI {\n  margin-bottom: 15px;\n  font-size: 1.2rem; }\n  .tabs-header_y5nSI ul {\n    border-bottom: 1px solid #ddd; }\n    .tabs-header_y5nSI ul li {\n      margin-bottom: -2px;\n      display: inline-block;\n      margin-right: 15px;\n      cursor: pointer;\n      padding: 10px 0; }\n      .tabs-header_y5nSI ul li.active_3bbAo {\n        font-weight: bold;\n        color: #1B267F;\n        border-bottom: 2px solid #1B267F; }\n", ""]);
	
	// exports
	exports.locals = {
		"tabs-header": "tabs-header_y5nSI",
		"active": "active_3bbAo"
	};

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdC9pbmRleC50cz9kOTA5KioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3QvQm9va0xpc3QudHN4PzhiNjMqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rL2luZGV4LnRzPzk1N2IqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rL0Jvb2sudHN4P2FiOTgqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL2luZGV4LnRzP2FiN2EqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL0Jvb2tJbmZvUG9wdXAudHN4PzM3OWQqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vaW5kZXgudHM/NTBkNyoqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9pbmRleC50cz8yMWQzKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L0lucHV0LnRzeD9kYTFkKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuc2Nzcz80MDE3KioqKioqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L0lucHV0LnNjc3M/MDQ4MyoqKioqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvaW5kZXgudHM/N2U4MCoqKioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC50c3g/NGU3MyoqKioqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LnNjc3M/Y2VhNCoqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC5zY3NzPzhiOTMqKioqKioiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL2luZGV4LnRzP2I4MTIqKioqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEudHN4P2MyYWYqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS5jc3M/YWEyMSoqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS5jc3M/NWJjMioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tJbmZvUG9wdXAvQm9va0luZm9Qb3B1cC5zY3NzPzM1NmQqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL0Jvb2tJbmZvUG9wdXAuc2Nzcz84ZTRjKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rL19ib29rLnNjc3M/ZTgxNioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2svX2Jvb2suc2Nzcz9jMGFkKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pbWcvc2hhZG93LnBuZz9mZjc0KioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdC9Cb29rTGlzdC5zY3NzPzhlMzUqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdC9Cb29rTGlzdC5zY3NzPzcwNzUqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1NoZWxmL1NoZWxmLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvVGFiL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9UYWIvVGFiLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvVGFiL1RhYnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1RhYi9fdGFiLnNjc3M/ZjA1YiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9UYWIvX3RhYi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUN1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEaUI7Ozs7QUFDZDs7OztBQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzFDLEtBQVksU0FBVSxvQkFBbUI7QUFhekM7Ozs7Ozs7Ozs7OztBQUVXLG9CQUNMLDhCQUFHLFFBQVUsV0FBWSxhQUFVLFdBQVcsbUJBRWhDLE1BQWEsZ0JBQVEsS0FBTSxNQUFhLGFBQU8sV0FDckQsSUFDSSxLQUFNLE1BQWEsYUFBSSxjQUFNLE1BQU87cUJBQ3pCLFFBQXNDLFdBQTdDO3FCQUFnQjtxQkFBYTtxQkFBUzs7QUFDckMsd0JBQ0wsOEJBQUcsUUFBSSxLQUFRLFNBQ2IsZ0JBQUssZ0NBQ0QsSUFBTSxLQUFJLElBQ1AsT0FBTyxTQUFVLE9BQ2YsNEJBQXdCO2dDQUFpQixPQUFNO3NCQUFoQixDQUFYLENBQWdDLEtBQU0sS0FBakQsSUFBNEQsUUFDakUsYUFBYyxhQUNwQixPQUFRLE9BQ0QsY0FNcEI7Y0FoQjRCLENBRjVCLEdBbUJBLDhCQUFHLFlBTWhCOzs7O1lB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QkFBbUIsSzs7Ozs7Ozs7QUN6RW5CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQXlDLDJCQUEyQjtBQUNwRSxvREFBbUQ7Ozs7Ozs7O0FDVm5EO0FBQ0E7OztBQUdBO0FBQ0EsK0NBQThDLHdCQUF3QixzQkFBc0IsRUFBRSwyQkFBMkIsb0NBQW9DLEVBQUUsZ0NBQWdDLDRCQUE0Qiw4QkFBOEIsMkJBQTJCLHdCQUF3Qix3QkFBd0IsRUFBRSwrQ0FBK0MsNEJBQTRCLHlCQUF5QiwyQ0FBMkMsRUFBRTs7QUFFdmQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHIiwiZmlsZSI6IjkuOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb29rTGlzdCBmcm9tICcuL0Jvb2tMaXN0J1xuZXhwb3J0IGRlZmF1bHQgQm9va0xpc3RcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3QvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm9vayBmcm9tICcuLi9Cb29rJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0Jvb2tMaXN0LnNjc3MnKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBib29rRW50aXRpZXM6IHtcbiAgICBpZDogc3RyaW5nXG4gICAgdGl0bGU6IHN0cmluZ1xuICAgIGF1dGhvcnM6IGFueVxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgICBjb3Zlcjogc3RyaW5nXG4gIH1bXVxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBCb29rTGlzdCBleHRlbmRzIENvbXBvbmVudDxQcm9wcywge30+IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dWwgc3R5bGVOYW1lPVwiYm9vay1saXN0XCIgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMuYm9va0VudGl0aWVzICYmIHRoaXMucHJvcHMuYm9va0VudGl0aWVzLmxlbmd0aCAhPT0gMFxuICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuYm9va0VudGl0aWVzLm1hcCgoYm9vaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHRpdGxlLCBhdXRob3JzLCBkZXNjcmlwdGlvbiwgY292ZXIgfSA9IGJvb2tcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8Qm9va1xuICAgICAgICAgICAgICAgICAgICAgIGlkPXtib29rLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZSB8fCAn5peg5qCH6aKYJ31cbiAgICAgICAgICAgICAgICAgICAgICBhdXRob3JzPXthdXRob3JzICYmIGF1dGhvcnMubWFwKGF1dGhvciA9PiBhdXRob3IubmFtZSkuam9pbignLCAnKSB8fCAn5pyq55+l5L2c6ICFJ31cbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgY292ZXI9e2NvdmVyfVxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVQb3B1cFxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICA8bGk+5pqC5peg6K6w5b2VPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va0xpc3RcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3QvQm9va0xpc3QudHN4XG4gKiovIiwiaW1wb3J0IEJvb2sgZnJvbSAnLi9Cb29rJ1xuZXhwb3J0IGRlZmF1bHQgQm9va1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBCb29rSW5mb1BvcHVwIGZyb20gJy4uL0Jvb2tJbmZvUG9wdXAnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vX2Jvb2suc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB0aXRsZTogc3RyaW5nXG4gIGF1dGhvcnM6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGlkOiBzdHJpbmdcbiAgY292ZXI6IHN0cmluZ1xuICBkaXNhYmxlUG9wdXA/OiBib29sZWFuXG4gIHNob3dEZXNjPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgc2hvd1BvcHVwOiBib29sZWFuXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9vayBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dQb3B1cDogZmFsc2VcbiAgICB9XG4gICAgdGhpcy5zaG93UG9wdXAgPSB0aGlzLnNob3dQb3B1cC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oaWRlUG9wdXAgPSB0aGlzLmhpZGVQb3B1cC5iaW5kKHRoaXMpXG4gIH1cblxuICBzaG93UG9wdXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93UG9wdXA6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgaGlkZVBvcHVwKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd1BvcHVwOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzaG93RGVzYywgZGVzY3JpcHRpb24sIGNvdmVyIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBvbk1vdXNlRW50ZXI9e3RoaXMuc2hvd1BvcHVwfSBvbk1vdXNlTGVhdmU9e3RoaXMuaGlkZVBvcHVwfSBzdHlsZU5hbWU9XCJib29rLS1jYXJkXCI+XG4gICAgICAgIDxMaW5rIHRvPXsnL2Jvb2svJyArIHRoaXMucHJvcHMuaWR9ID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb3ZlciAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiYm9vay1jb3ZlclwiPjxpbWcgc3JjPXt0aGlzLnByb3BzLmNvdmVyfS8+PC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiYm9vay1tZXRhXCI+XG4gICAgICAgICAgICA8c3BhbiB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gc3R5bGVOYW1lPVwiYm9vay1uYW1lXCI+e3RoaXMucHJvcHMudGl0bGUgfHwgJ+aXoOagh+mimCd9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwiYm9vay1hdXRob3JcIj57dGhpcy5wcm9wcy5hdXRob3JzIHx8ICfkvZzogIXkuI3or6YnfTwvc3Bhbj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2hvd0Rlc2MgJiYgKFxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cImJvb2stZGVzY1wiPntkZXNjcmlwdGlvbiB8fCAn56m6J308L3NwYW4+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5zaG93UG9wdXAgJiYgIXRoaXMucHJvcHMuZGlzYWJsZVBvcHVwICYmIChcbiAgICAgICAgICAgIDxCb29rSW5mb1BvcHVwXG4gICAgICAgICAgICAgIGJvb2tJZD17dGhpcy5wcm9wcy5pZH1cbiAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgIGF1dGhvcj17dGhpcy5wcm9wcy5hdXRob3JzfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dGhpcy5wcm9wcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rL0Jvb2sudHN4XG4gKiovIiwiaW1wb3J0IEJvb2tJbmZvUG9wdXAgZnJvbSAnLi9Cb29rSW5mb1BvcHVwJ1xuZXhwb3J0IGRlZmF1bHQgQm9va0luZm9Qb3B1cFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL19mb3JtJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0Jvb2tJbmZvUG9wdXAuc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBhdXRob3I6IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgYm9va0lkOiBzdHJpbmdcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBCb29rSW5mb1BvcHVwIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywge30+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGF1dGhvciwgdGl0bGUsIGRlc2NyaXB0aW9uLCBib29rSWQgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cInBvcHVwXCI+XG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGgyIHN0eWxlTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgPHAgc3R5bGVOYW1lPVwiYXV0aG9yXCI+e2F1dGhvcn08L3A+XG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImJsdWVcIiB0bz17Jy92aWV3ZXIvYm9vay8nICsgYm9va0lkfT7pmIXor7s8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rSW5mb1BvcHVwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tJbmZvUG9wdXAvQm9va0luZm9Qb3B1cC50c3hcbiAqKi8iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnXG5pbXBvcnQgU2VsZWN0aXplSW5wdXQgZnJvbSAnLi9TZWxlY3RpemVJbnB1dCdcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL1RleHRhcmVhJ1xuXG5leHBvcnQgeyBCdXR0b24sIElucHV0LCBTZWxlY3RpemVJbnB1dCwgVGV4dGFyZWEgfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcbmV4cG9ydCBkZWZhdWx0IElucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vSW5wdXQuc2NzcycpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgb25DaGFuZ2U/OiBhbnlcbiAgdmFsdWU/OiBzdHJpbmdcbiAgdHlwZT86IHN0cmluZ1xuICBuYW1lPzogc3RyaW5nXG4gIGVycm9yPzogYW55XG4gIHRvdWNoZWQ/OiBib29sZWFuXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpXG4gICAgZGVsZXRlIHByb3BzLmNsYXNzTmFtZVxuICAgIGNvbnN0IHsgZXJyb3IsIHRvdWNoZWQgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHNob3dFcnJvciA9IGVycm9yICYmIHRvdWNoZWRcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT17Y2xhc3NuYW1lcyh7J2lucHV0LXdyYXAnOiAhc2hvd0Vycm9yLCAnaW5wdXQtd3JhcC0tZXJyb3InOiBzaG93RXJyb3J9KX0gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJ30+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHN0eWxlTmFtZT1cImlucHV0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpXG4gICAgICAgICAgfX1cbiAgICAgICAgICB0eXBlPXt0aGlzLnByb3BzLnR5cGUgPyB0aGlzLnByb3BzLnR5cGUgOiAndGV4dCd9XG4gICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lID8gdGhpcy5wcm9wcy5uYW1lIDogbnVsbH1cbiAgICAgICAgLz5cbiAgICAgICAge1xuICAgICAgICAgIHNob3dFcnJvciAmJiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImVycm9yLW1zZ1wiPntlcnJvcn08L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9JbnB1dC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ2NVxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5wdXQtd3JhcF8xM0JiaywgLmlucHV0LXdyYXAtLWVycm9yXzJTSkExIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmlucHV0Xzc1cmxOIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjNzO1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICBvdXRsaW5lOiBub25lOyB9XFxuXFxuLmlucHV0Xzc1cmxOOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzFCMjY3RjsgfVxcblxcbi5pbnB1dC13cmFwLS1lcnJvcl8yU0pBMSAuaW5wdXRfNzVybE4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjZjIxNjVlOyB9XFxuXFxuLmVycm9yLW1zZ18zRWZ6aSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICBjb2xvcjogI2YyMTY1ZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImlucHV0LXdyYXBcIjogXCJpbnB1dC13cmFwXzEzQmJrXCIsXG5cdFwiaW5wdXQtd3JhcC0tZXJyb3JcIjogXCJpbnB1dC13cmFwLS1lcnJvcl8yU0pBMVwiLFxuXHRcImlucHV0XCI6IFwiaW5wdXRfNzVybE5cIixcblx0XCJlcnJvci1tc2dcIjogXCJlcnJvci1tc2dfM0VmemlcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiaW1wb3J0IFNlbGVjdGl6ZUlucHV0IGZyb20gJy4vU2VsZWN0aXplSW5wdXQnXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RpemVJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9JY29uJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IGlzRGVzY2VuZGFudCBmcm9tICcuLi8uLi8uLi91dGlscy9kb20vaXNEZXNjZW5kYW50J1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9TZWxlY3RpemVJbnB1dC5zY3NzJylcblxudHlwZSBUeXBlT3B0aW9uID0ge1xuICB2YWx1ZTogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgYWRkaXRpb25hbD86IGFueVxufVxuXG50eXBlIFR5cGVWYWx1ZSA9IHtcbiAgdmFsdWU6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICBsYWJlbD86IHN0cmluZ1xuICBzdGF5Rm9jdXNlZD86IGJvb2xlYW4gLy8gZGVmYXVsdCB0cnVlXG5cbiAgdmFsdWU6IHN0cmluZ1xuICBvbklucHV0Q2hhbmdlOiAobmV3VmFsdWU6IHN0cmluZykgPT4gdm9pZFxuXG4gIG9wdGlvbnM6IEFycmF5PFR5cGVPcHRpb24+XG4gIG9uT3B0aW9uc0NoYW5nZT86IChuZXdWYWx1ZXM6IEFycmF5PFR5cGVPcHRpb24+KSA9PiB2b2lkXG5cbiAgdmFsdWVzOiBBcnJheTxUeXBlVmFsdWU+XG4gIG9uVmFsdWVzQ2hhbmdlOiAobmV3VmFsdWVzOiBBcnJheTxUeXBlVmFsdWU+KSA9PiB2b2lkXG5cbiAgLy8g6aKd5aSW5Yqf6IO9XG4gIG9uQWRkTmV3VmFsdWU/OiAobmV3VmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICBvbk9wdGlvbkNsaWNrPzogKHNlbGVjdGVkVmFsdWU6IFR5cGVPcHRpb24pID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIGZvY3VzPzogYm9vbGVhblxuICBzaG93T3B0aW9ucz86IGJvb2xlYW5cbiAgdmFsdWU/OiBzdHJpbmdcbiAgZXhwZW5kZWRPcHRpb25JbmRleD86IG51bWJlclxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIFNlbGVjdGl6ZUlucHV0IGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnRcbiAgaW5wdXRXcmFwOiBIVE1MRGl2RWxlbWVudFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dPcHRpb25zOiBmYWxzZSxcbiAgICAgIGZvY3VzOiBmYWxzZSxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIGV4cGVuZGVkT3B0aW9uSW5kZXg6IDBcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2sgPSB0aGlzLmhhbmRsZU91dHNpZGVDbGljay5iaW5kKHRoaXMpXG4gICAgdGhpcy5mb2N1c0lucHV0ID0gdGhpcy5mb2N1c0lucHV0LmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUlucHV0V3JhcENsaWNrID0gdGhpcy5oYW5kbGVJbnB1dFdyYXBDbGljay5iaW5kKHRoaXMpXG4gIH1cblxuICBhZGRWYWx1ZShuZXdWYWx1ZSkge1xuICAgIHRoaXMucHJvcHMub25WYWx1ZXNDaGFuZ2UodGhpcy5wcm9wcy52YWx1ZXMuY29uY2F0KG5ld1ZhbHVlKSlcbiAgICBpZiAodGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKHRoaXMucHJvcHMub3B0aW9ucy5tYXAob3B0aW9uID0+IChvcHRpb24udmFsdWUgPT09IG5ld1ZhbHVlLnZhbHVlXG4gICAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9uLCB7IGRpc2FibGVkOiB0cnVlIH0pXG4gICAgICAgIDogb3B0aW9uKSkpXG4gICAgfVxuICAgIHRoaXMuY2xlYXJJbnB1dFZhbHVlKClcbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuc3RheUZvY3VzZWQgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMucHJvcHMuc3RheUZvY3VzZWQgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmZvY3VzSW5wdXQoKVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dPcHRpb25zOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICByZW1vdmVWYWx1ZShpbmRleCkge1xuICAgIGxldCBuZXdWYWx1ZXMgPSBbXVxuICAgIGxldCByZW1vdmVkVmFsdWVcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIG5ld1ZhbHVlcyA9IHRoaXMucHJvcHMudmFsdWVzLnNsaWNlKDAsIHRoaXMucHJvcHMudmFsdWVzLmxlbmd0aCAtIDEpXG4gICAgICByZW1vdmVkVmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlc1t0aGlzLnByb3BzLnZhbHVlcy5sZW5ndGggLSAxXS52YWx1ZVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdWYWx1ZXMgPSB0aGlzLnByb3BzLnZhbHVlc1xuICAgICAgICAuZmlsdGVyKCh2LCBpKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlZFZhbHVlID0gdi52YWx1ZVxuICAgICAgICAgIHJldHVybiBpICE9PSBpbmRleFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UodGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHRpb24gPT4gKG9wdGlvbi52YWx1ZSA9PT0gcmVtb3ZlZFZhbHVlXG4gICAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9uLCB7IGRpc2FibGVkOiBmYWxzZSB9KVxuICAgICAgICA6IG9wdGlvbikpKVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25WYWx1ZXNDaGFuZ2UobmV3VmFsdWVzKVxuICB9XG5cbiAgY2xlYXJJbnB1dFZhbHVlKCkge1xuICAgIHRoaXMucHJvcHMub25JbnB1dENoYW5nZSgnJylcbiAgfVxuXG4gIGhhbmRsZUtleVByZXNzKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4ICYmICF0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICB0aGlzLnJlbW92ZVZhbHVlKC0gMSlcbiAgICB9XG4gICAgLy8gdG9kb1xuICAgIC8vIGlmIChlLmtleUNvZGUgPT09IDEzICYmIHRoaXMuc3RhdGUuc2hvd09wdGlvbnMpIHtcbiAgICAvLyAgIHRoaXMuYWRkVmFsdWUoKVxuICAgIC8vIH1cbiAgfVxuXG4gIGZvY3VzSW5wdXQoKSB7XG4gICAgdGhpcy5pbnB1dC5mb2N1cygpXG4gIH1cblxuICBoYW5kbGVPdXRzaWRlQ2xpY2soZSkge1xuICAgIGlmICghaXNEZXNjZW5kYW50KHRoaXMuaW5wdXRXcmFwLCBlLnRhcmdldCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93T3B0aW9uczogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlSW5wdXRXcmFwQ2xpY2soKSB7XG4gICAgdGhpcy5mb2N1c0lucHV0KClcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd09wdGlvbnM6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2spXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljaylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsLCB2YWx1ZXMsIG9uQWRkTmV3VmFsdWUgfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgJydcbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9ucyB8fCBbXVxuXG4gICAgbGV0IGlucHV0V2lkdGggPSB2YWx1ZXMubGVuZ3RoID4gMCA/ICh2YWx1ZS5sZW5ndGggPT09IDAgPyAxNiA6IHZhbHVlLmxlbmd0aCAqIDE2KSA6ICcxMDAlJ1xuICAgIGxldCBwbGFjZWhvbGRlciA9IHZhbHVlcy5sZW5ndGggPiAwID8gJycgOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyXG5cbiAgICBjb25zdCBzZWxlY3RpemVJbnB1dFN0eWxlTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgJ3NlbGVjdGl6ZS1pbnB1dCc6IHRydWUsXG4gICAgICAnc2VsZWN0aXplLWlucHV0LS1mb2N1cyc6IHRoaXMuc3RhdGUuZm9jdXMsXG4gICAgICAnc2VsZWN0aXplLWlucHV0LS1lbXB0eSc6IHZhbHVlcy5sZW5ndGggPT09IDBcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwic2VsZWN0aXplLXdyYXBcIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnfT5cbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsID8gKFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj57bGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICApIDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZU5hbWU9e3NlbGVjdGl6ZUlucHV0U3R5bGVOYW1lfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSW5wdXRXcmFwQ2xpY2t9XG4gICAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmlucHV0V3JhcCA9IHJlZiB9IH1cbiAgICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWVzLm1hcCgodiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fSBzdHlsZU5hbWU9XCJzZWxlY3RpemUtdGFnXCI+XG4gICAgICAgICAgICAgICAgICB7di5uYW1lfVxuICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgc3R5bGVOYW1lPVwiaWNvbi1yZW1vdmVcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZShpbmRleClcbiAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBpbnB1dFdpZHRoIH19XG4gICAgICAgICAgICByZWY9e3JlZiA9PiB7IHRoaXMuaW5wdXQgPSByZWYgfSB9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICBvbkJsdXI9e2UgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IGZhbHNlIH0pXG4gICAgICAgICAgICB9IH1cbiAgICAgICAgICAgIG9uRm9jdXM9e2UgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IHRydWUgfSlcbiAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UoKGUudGFyZ2V0IGFzIGFueSkudmFsdWUpXG4gICAgICAgICAgICB9IH1cbiAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlS2V5UHJlc3MoZSlcbiAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLnNob3dPcHRpb25zICYmIChvcHRpb25zLmxlbmd0aCAhPT0gMCB8fCBvbkFkZE5ld1ZhbHVlKSA/IChcbiAgICAgICAgICAgIDx1bCBzdHlsZU5hbWU9XCJxdWVyeS1yZXN1bHRzXCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImRpc2FibGVkXCI+e29wdGlvbi5uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRWYWx1ZShvcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbk9wdGlvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25PcHRpb25DbGljayhvcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntvcHRpb24ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb25BZGROZXdWYWx1ZSA/IChcbiAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBvbkFkZE5ld1ZhbHVlKHRoaXMucHJvcHMudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGRcIj7mt7vliqAgPHN0cm9uZz57dGhpcy5wcm9wcy52YWx1ZX08L3N0cm9uZz48L2xpPlxuICAgICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGl6ZUlucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL1NlbGVjdGl6ZUlucHV0LnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDY5XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zZWxlY3RpemUtd3JhcF8zQU1BaSB7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5zZWxlY3RpemUtaW5wdXRfMTRiZ1Age1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0cmFuc2l0aW9uOiBhbGwgMHM7XFxuICBjdXJzb3I6IHRleHQ7XFxuICBiYWNrZ3JvdW5kOiAjZmZmOyB9XFxuICAuc2VsZWN0aXplLWlucHV0XzE0YmdQIGlucHV0IHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4OyB9XFxuXFxuLnNlbGVjdGl6ZS1pbnB1dC0tZm9jdXNfVW5aOEIge1xcbiAgYm9yZGVyLWNvbG9yOiAjMUIyNjdGOyB9XFxuXFxuLnNlbGVjdGl6ZS1pbnB1dC0tZW1wdHlfeG43VXkge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDVweCA1cHggMDsgfVxcblxcbi5zZWxlY3RpemUtaW5wdXRfMTRiZ1AgaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbi1ib3R0b206IDVweDsgfVxcblxcbi5xdWVyeS1yZXN1bHRzX09nRTJ0IHtcXG4gIG1hcmdpbi10b3A6IC0zcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zMik7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgei1pbmRleDogOTAwOyB9XFxuXFxuLnF1ZXJ5LXJlc3VsdHNfT2dFMnQgbGkge1xcbiAgcGFkZGluZzogMCA3cHg7XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcbiAgLnF1ZXJ5LXJlc3VsdHNfT2dFMnQgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMUIyNjdGO1xcbiAgICBjb2xvcjogI2ZmZjsgfVxcblxcbi5zZWxlY3RpemUtdGFnXzNhRDEzIHtcXG4gIGJhY2tncm91bmQ6ICMxQjI2N0Y7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiAzcHggMjVweCAzcHggNXB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5pY29uLXJlbW92ZV8xTzdGXyB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXB4O1xcbiAgdG9wOiAycHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJzZWxlY3RpemUtd3JhcFwiOiBcInNlbGVjdGl6ZS13cmFwXzNBTUFpXCIsXG5cdFwic2VsZWN0aXplLWlucHV0XCI6IFwic2VsZWN0aXplLWlucHV0XzE0YmdQXCIsXG5cdFwic2VsZWN0aXplLWlucHV0LS1mb2N1c1wiOiBcInNlbGVjdGl6ZS1pbnB1dC0tZm9jdXNfVW5aOEJcIixcblx0XCJzZWxlY3RpemUtaW5wdXQtLWVtcHR5XCI6IFwic2VsZWN0aXplLWlucHV0LS1lbXB0eV94bjdVeVwiLFxuXHRcInF1ZXJ5LXJlc3VsdHNcIjogXCJxdWVyeS1yZXN1bHRzX09nRTJ0XCIsXG5cdFwic2VsZWN0aXplLXRhZ1wiOiBcInNlbGVjdGl6ZS10YWdfM2FEMTNcIixcblx0XCJpY29uLXJlbW92ZVwiOiBcImljb24tcmVtb3ZlXzFPN0ZfXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0NzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsImltcG9ydCBUZXh0YXJlYSBmcm9tICcuL1RleHRhcmVhJ1xuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWFcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvcHMgYXMgSW5wdXRQcm9wcyB9IGZyb20gJy4uL0lucHV0L0lucHV0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1RleHRhcmVhLmNzcycpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJbnB1dFByb3BzIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBUZXh0YXJlYSBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwidGV4dGFyZWEtd3JhcFwiIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJyd9PlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpXG4gICAgICAgICAgfX1cbiAgICAgICAgICBzdHlsZU5hbWU9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgdHlwZT17dGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ3RleHQnfVxuICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZSA/IHRoaXMucHJvcHMubmFtZSA6IG51bGx9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWFcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vVGV4dGFyZWEuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEuY3NzXG4gKiogbW9kdWxlIGlkID0gNDczXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2Uhc3R5bGVzL3ZhcmlhYmxlcy5jc3NcIiksIFwiXCIpO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50ZXh0YXJlYS13cmFwX1hrcGoxIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGV4dGFyZWFfMUVkb1Mge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4zcztcXG59XFxuXFxuLnRleHRhcmVhXzFFZG9TOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInRleHRhcmVhLXdyYXBcIjogXCJ0ZXh0YXJlYS13cmFwX1hrcGoxXCIsXG5cdFwidGV4dGFyZWFcIjogXCJ0ZXh0YXJlYV8xRWRvU1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9wb3N0Y3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0NzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vQm9va0luZm9Qb3B1cC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL0Jvb2tJbmZvUG9wdXAuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ3NVxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNiA5XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGl0bGVfQlZPN2Uge1xcbiAgbWFyZ2luOiAzNXB4IDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMzMzM7IH1cXG5cXG4ucG9wdXBfTVBDcXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogOTk5O1xcbiAgbGVmdDogMTM0cHg7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xcbiAgcGFkZGluZzogMjBweCAyMHB4IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyB9XFxuXFxuLmhlYWRlcl8xSW5JZiB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XFxuXFxuLnRpdGxlX0JWTzdlIHtcXG4gIG1hcmdpbjogMzBweCAwIDEwcHggMDsgfVxcblxcbi5hdXRob3JfMjhCaUEge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBtYXJnaW46IDAgMCAyZW0gMDsgfVxcblxcbi5kZXNjcmlwdGlvbl9EOXJWTiB7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ0aXRsZVwiOiBcInRpdGxlX0JWTzdlXCIsXG5cdFwicG9wdXBcIjogXCJwb3B1cF9NUENxclwiLFxuXHRcImhlYWRlclwiOiBcImhlYWRlcl8xSW5JZlwiLFxuXHRcImF1dGhvclwiOiBcImF1dGhvcl8yOEJpQVwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiZGVzY3JpcHRpb25fRDlyVk5cIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL0Jvb2tJbmZvUG9wdXAuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ3NlxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNiA5XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9fYm9vay5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rL19ib29rLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0NzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDYgOVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1ldGEtaXRlbV8yY1J5SiB7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLmJvb2tfM09xel8ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlIDBzO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgcGFkZGluZzogMCAxMHB4OyB9XFxuICAuYm9va18zT3F6XyBhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICAgLmJvb2tfM09xel8gYTpob3ZlciBpbWcge1xcbiAgICAgIG9wYWNpdHk6IC45NjsgfVxcbiAgICAuYm9va18zT3F6XyBhOmFjdGl2ZSBpbWcge1xcbiAgICAgIG9wYWNpdHk6IC44OyB9XFxuXFxuLmJvb2stbWV0YV8zZ2xjWiB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxcblxcbi5tZXRhLWl0ZW1fMmNSeUoge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgbWFyZ2luLWxlZnQ6IDE3cHg7XFxuICB3aWR0aDogMTM0cHg7IH1cXG5cXG4uYm9vay1uYW1lXzJqSXVaIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY29sb3I6ICMzMzM7IH1cXG5cXG4uYm9vay1hdXRob3JfMVZNN2Uge1xcbiAgY29sb3I6ICM5OTk7IH1cXG5cXG4uYm9vay1jb3Zlcl8xanJLOCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTM0cHg7XFxuICBoZWlnaHQ6IDE4NHB4O1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcInN0YXRpYy9pbWcvc2hhZG93LnBuZ1wiKSArIFwiKSBuby1yZXBlYXQgdG9wO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAwcztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmJvb2stY292ZXJfMWpySzggaW1nIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGxlZnQ6IDE3cHg7XFxuICAgIHRvcDogN3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7IH1cXG4gIC5ib29rLWNvdmVyXzFqcks4OmhvdmVyIHtcXG4gICAgdG9wOiAtN3B4OyB9XFxuXFxuLmJvb2stZGVzY194RkZLbCB7XFxuICBjb2xvcjogIzk5OTsgfVxcblxcbi5ib29rLS1jYXJkXzNGT2t5IHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmbG9hdDogbm9uZTsgfVxcbiAgLmJvb2stLWNhcmRfM0ZPa3kgYSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICAgIC5ib29rLS1jYXJkXzNGT2t5IGE6aG92ZXIgaW1nIHtcXG4gICAgICBvcGFjaXR5OiAxOyB9XFxuICAgIC5ib29rLS1jYXJkXzNGT2t5IGE6YWN0aXZlIGltZyB7XFxuICAgICAgb3BhY2l0eTogMTsgfVxcbiAgLmJvb2stLWNhcmRfM0ZPa3kgLmJvb2stY292ZXJfMWpySzgge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDsgfVxcbiAgICAuYm9vay0tY2FyZF8zRk9reSAuYm9vay1jb3Zlcl8xanJLODpob3ZlciB7XFxuICAgICAgdG9wOiAwOyB9XFxuICAgIC5ib29rLS1jYXJkXzNGT2t5IC5ib29rLWNvdmVyXzFqcks4IGltZyB7XFxuICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDsgfVxcbiAgLmJvb2stLWNhcmRfM0ZPa3kgLmJvb2stbWV0YV8zZ2xjWiB7XFxuICAgIGZsb2F0OiBub25lOyB9XFxuICAuYm9vay0tY2FyZF8zRk9reSAubWV0YS1pdGVtXzJjUnlKIHtcXG4gICAgd2lkdGg6IGF1dG87IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJtZXRhLWl0ZW1cIjogXCJtZXRhLWl0ZW1fMmNSeUpcIixcblx0XCJib29rXCI6IFwiYm9va18zT3F6X1wiLFxuXHRcImJvb2stbWV0YVwiOiBcImJvb2stbWV0YV8zZ2xjWlwiLFxuXHRcImJvb2stbmFtZVwiOiBcImJvb2stbmFtZV8yakl1WiBtZXRhLWl0ZW1fMmNSeUpcIixcblx0XCJib29rLWF1dGhvclwiOiBcImJvb2stYXV0aG9yXzFWTTdlIG1ldGEtaXRlbV8yY1J5SlwiLFxuXHRcImJvb2stY292ZXJcIjogXCJib29rLWNvdmVyXzFqcks4XCIsXG5cdFwiYm9vay1kZXNjXCI6IFwiYm9vay1kZXNjX3hGRktsXCIsXG5cdFwiYm9vay0tY2FyZFwiOiBcImJvb2stLWNhcmRfM0ZPa3kgYm9va18zT3F6X1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2svX2Jvb2suc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ3OFxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNiA5XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3NoYWRvdy40NzFlYTM3Zjk2LnBuZ1wiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3RhdGljL2ltZy9zaGFkb3cucG5nXG4gKiogbW9kdWxlIGlkID0gNDc5XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA2IDlcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0Jvb2tMaXN0LnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0L0Jvb2tMaXN0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0ODBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDYgOVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJvb2stbGlzdF8yc19KbCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcXG4gIG1hcmdpbi1yaWdodDogLTEwcHg7IH1cXG4gIC5ib29rLWxpc3RfMnNfSmwgbGkge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImJvb2stbGlzdFwiOiBcImJvb2stbGlzdF8yc19KbFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0L0Jvb2tMaXN0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0ODFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDYgOVxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGZldGNoU2hlbGYgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IEJvb2tMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQm9va0xpc3QnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2VsZW1lbnRzL19sYXlvdXQvQ29udGFpbmVyJ1xuaW1wb3J0IHsgVGFiLCBUYWJzIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvVGFiJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgc2hlbGY/OiBhbnlcbiAgZmV0Y2hTaGVsZj86IGFueVxufVxuXG5jbGFzcyBTaGVsZiBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIHt9PiB7XG5cbiAgc3RhdGljIGZldGNoRGF0YSh7c3RvcmUsIHBhcmFtc30pIHtcbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZmV0Y2hTaGVsZigpKVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hTaGVsZigpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGJvb2tMaXN0ID0gdGhpcy5wcm9wcy5zaGVsZlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxUYWJzIHN0eWxlPXt7bWFyZ2luVG9wOiAyMH19PlxuICAgICAgICAgIDxUYWIgdGl0bGU9XCLlhajpg6hcIj5cbiAgICAgICAgICAgIDxCb29rTGlzdCBib29rRW50aXRpZXM9e2Jvb2tMaXN0fSAvPlxuICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgIDxUYWIgdGl0bGU9XCLmiJHnmoTkuIrkvKBcIj5cbiAgICAgICAgICAgIOepulxuICAgICAgICAgIDwvVGFiPlxuICAgICAgICA8L1RhYnM+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICByZXR1cm4ge1xuICAgIHNoZWxmOiBzdGF0ZS5wYXlsb2Fkcy5ib29rU2hlbGYgfHwgW11cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIHsgZmV0Y2hTaGVsZiB9XG4pKFNoZWxmIGFzIGFueSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9TaGVsZi9TaGVsZi50c3hcbiAqKi8iLCJpbXBvcnQgVGFiIGZyb20gJy4vVGFiJ1xuaW1wb3J0IFRhYnMgZnJvbSAnLi9UYWJzJ1xuXG5leHBvcnQgeyBUYWIsIFRhYnMgfVxuZXhwb3J0IGRlZmF1bHQgVGFiXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9UYWIvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB0aXRsZTogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5jbGFzcyBUYWIgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiXCI+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvVGFiL1RhYi50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL190YWIuc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBvblRhYlN3aXRjaD86IChhY3RpdmVUYWJJbmRleDogbnVtYmVyKSA9PiB2b2lkXG4gIGRlZmF1bHRBY3RpdmU/OiBudW1iZXJcbiAgc3R5bGU/OiBhbnlcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIGFjdGl2ZTogbnVtYmVyXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgVGFicyBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZTogdGhpcy5wcm9wcy5kZWZhdWx0QWN0aXZlXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlVGFiQ2xpY2sgPSB0aGlzLmhhbmRsZVRhYkNsaWNrLmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZVRhYkNsaWNrKGluZGV4KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmU6IGluZGV4XG4gICAgfSlcbiAgICBpZiAodGhpcy5wcm9wcy5vblRhYlN3aXRjaCkge1xuICAgICAgdGhpcy5wcm9wcy5vblRhYlN3aXRjaChpbmRleClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0eWxlIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzXCIgey4uLnN0eWxlID8ge3N0eWxlfSA6IG51bGx9PlxuICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInRhYnMtaGVhZGVyXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgeyh0aGlzLnByb3BzLmNoaWxkcmVuIGFzIGFueSkubWFwKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkgc3R5bGVOYW1lPXtjbGFzc05hbWVzKHsnYWN0aXZlJzogaW5kZXggPT09IHRoaXMuc3RhdGUuYWN0aXZlfSl9IGtleT17aW5kZXh9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlVGFiQ2xpY2suYmluZCh0aGlzLCBpbmRleCkgfT5cbiAgICAgICAgICAgICAgICAgIHtjaGlsZC5wcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSB9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICAodGhpcy5wcm9wcy5jaGlsZHJlbiBhcyBhbnkpXG4gICAgICAgICAgICAuZmlsdGVyKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGluZGV4ID09PSB0aGlzLnN0YXRlLmFjdGl2ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoY2hpbGQgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gY2hpbGQucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICAgIH0pWzBdXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4oVGFicyBhcyBhbnkpLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGVmYXVsdEFjdGl2ZTogMFxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9UYWIvVGFicy50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL190YWIuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1RhYi9fdGFiLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA1MjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gOSAxMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRhYnMtaGVhZGVyX3k1blNJIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBmb250LXNpemU6IDEuMnJlbTsgfVxcbiAgLnRhYnMtaGVhZGVyX3k1blNJIHVsIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7IH1cXG4gICAgLnRhYnMtaGVhZGVyX3k1blNJIHVsIGxpIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHBhZGRpbmc6IDEwcHggMDsgfVxcbiAgICAgIC50YWJzLWhlYWRlcl95NW5TSSB1bCBsaS5hY3RpdmVfM2JiQW8ge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBjb2xvcjogIzFCMjY3RjtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMUIyNjdGOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidGFicy1oZWFkZXJcIjogXCJ0YWJzLWhlYWRlcl95NW5TSVwiLFxuXHRcImFjdGl2ZVwiOiBcImFjdGl2ZV8zYmJBb1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9UYWIvX3RhYi5zY3NzXG4gKiogbW9kdWxlIGlkID0gNTIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDkgMTFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9