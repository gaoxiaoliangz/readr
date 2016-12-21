exports.ids = [4];
exports.modules = {

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Loading = __webpack_require__(257);
	
	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Loading2.default;

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(90);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(125);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _classnames = __webpack_require__(123);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Loading = __webpack_require__(258);
	
	var _Loading2 = _interopRequireDefault(_Loading);
	
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
	
	var Loading = function (_Component) {
	    _inherits(Loading, _Component);
	
	    function Loading(props) {
	        _classCallCheck(this, Loading);
	
	        var _this = _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, props));
	
	        _this.state = {
	            dynamicText: ''
	        };
	        return _this;
	    }
	
	    _createClass(Loading, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            this.intervalId = setInterval(function () {
	                if (_this2.state.dynamicText.length === 3) {
	                    _this2.setState({ dynamicText: '' });
	                } else {
	                    _this2.setState({
	                        dynamicText: _this2.state.dynamicText + '.'
	                    });
	                }
	            }, 500);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            clearInterval(this.intervalId);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var text = _props.text;
	            var center = _props.center;
	            var dynamicText = this.state.dynamicText;
	
	            var wrapClass = (0, _classnames2.default)({
	                'loading-wrap--center': center,
	                'loading-wrap': !center
	            });
	            return _react2.default.createElement("div", { styleName: wrapClass }, _react2.default.createElement("span", { styleName: "text-loading" }, text + dynamicText));
	        }
	    }]);
	
	    return Loading;
	}(_react.Component);
	Loading = __decorate([(0, _reactCssModules2.default)(_Loading2.default)], Loading);
	Loading['defaultProps'] = {
	    text: '加载中'
	};
	exports.default = Loading;

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(259);
	    var insertCss = __webpack_require__(129);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(128)();
	// imports
	
	
	// module
	exports.push([module.id, ".text-loading_3efqh {\n  text-align: center;\n  margin: 50px 0;\n  font-size: 20px;\n  font-weight: normal;\n  color: #999; }\n\n.text-loading_3efqh {\n  margin: 30px 0;\n  display: inline-block; }\n\n.loading-wrap_htyYz {\n  text-align: left; }\n\n.loading-wrap--center_3PEIh {\n  text-align: center; }\n", ""]);
	
	// exports
	exports.locals = {
		"text-loading": "text-loading_3efqh",
		"loading-wrap": "loading-wrap_htyYz",
		"loading-wrap--center": "loading-wrap--center_3PEIh"
	};

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _BookListSection = __webpack_require__(267);
	
	var _BookListSection2 = _interopRequireDefault(_BookListSection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _BookListSection2.default;

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(90);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(63);
	
	var _BookList = __webpack_require__(268);
	
	var _BookList2 = _interopRequireDefault(_BookList);
	
	var _Loading = __webpack_require__(256);
	
	var _Loading2 = _interopRequireDefault(_Loading);
	
	var _reactCssModules = __webpack_require__(125);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _Icon = __webpack_require__(121);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
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
	
	var styles = __webpack_require__(281);
	var BookListSection = function (_Component) {
	    _inherits(BookListSection, _Component);
	
	    function BookListSection() {
	        _classCallCheck(this, BookListSection);
	
	        return _possibleConstructorReturn(this, (BookListSection.__proto__ || Object.getPrototypeOf(BookListSection)).apply(this, arguments));
	    }
	
	    _createClass(BookListSection, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var isFetching = _props.isFetching;
	            var title = _props.title;
	            var moreLink = _props.moreLink;
	            var bookEntities = _props.bookEntities;
	
	            return _react2.default.createElement("div", { styleName: "book-list-section" }, this.props.title && (moreLink ? _react2.default.createElement("h2", { styleName: "section-title" }, _react2.default.createElement(_reactRouter.Link, { to: moreLink }, title, _react2.default.createElement(_Icon2.default, { name: "arrowRight", size: 20 }))) : _react2.default.createElement("h2", { styleName: "section-title" }, title)), isFetching && bookEntities.length === 0 ? _react2.default.createElement(_Loading2.default, null) : _react2.default.createElement(_BookList2.default, { bookEntities: bookEntities }));
	        }
	    }]);
	
	    return BookListSection;
	}(_react.Component);
	BookListSection = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], BookListSection);
	exports.default = BookListSection;

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _BookList = __webpack_require__(269);
	
	var _BookList2 = _interopRequireDefault(_BookList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _BookList2.default;

/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(90);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Book = __webpack_require__(270);
	
	var _Book2 = _interopRequireDefault(_Book);
	
	var _reactCssModules = __webpack_require__(125);
	
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
	
	var styles = __webpack_require__(279);
	var BookList = function (_Component) {
	    _inherits(BookList, _Component);
	
	    function BookList() {
	        _classCallCheck(this, BookList);
	
	        return _possibleConstructorReturn(this, (BookList.__proto__ || Object.getPrototypeOf(BookList)).apply(this, arguments));
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
	            }) : _react2.default.createElement("li", null, "\u6682\u65E0\u8BB0\u5F55"));
	        }
	    }]);
	
	    return BookList;
	}(_react.Component);
	BookList = __decorate([(0, _reactCssModules2.default)(styles)], BookList);
	exports.default = BookList;

/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Book = __webpack_require__(271);
	
	var _Book2 = _interopRequireDefault(_Book);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Book2.default;

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(90);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(63);
	
	var _BookInfoPopup = __webpack_require__(272);
	
	var _BookInfoPopup2 = _interopRequireDefault(_BookInfoPopup);
	
	var _reactCssModules = __webpack_require__(125);
	
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
	
	var styles = __webpack_require__(276);
	var Book = function (_Component) {
	    _inherits(Book, _Component);
	
	    function Book(props) {
	        _classCallCheck(this, Book);
	
	        var _this = _possibleConstructorReturn(this, (Book.__proto__ || Object.getPrototypeOf(Book)).call(this, props));
	
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

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _BookInfoPopup = __webpack_require__(273);
	
	var _BookInfoPopup2 = _interopRequireDefault(_BookInfoPopup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _BookInfoPopup2.default;

/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(90);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _form = __webpack_require__(150);
	
	var _reactCssModules = __webpack_require__(125);
	
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
	
	var styles = __webpack_require__(274);
	var BookInfoPopup = function (_Component) {
	    _inherits(BookInfoPopup, _Component);
	
	    function BookInfoPopup(props) {
	        _classCallCheck(this, BookInfoPopup);
	
	        return _possibleConstructorReturn(this, (BookInfoPopup.__proto__ || Object.getPrototypeOf(BookInfoPopup)).call(this, props));
	    }
	
	    _createClass(BookInfoPopup, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var author = _props.author;
	            var title = _props.title;
	            var description = _props.description;
	            var bookId = _props.bookId;
	
	            return _react2.default.createElement("div", { styleName: "popup" }, _react2.default.createElement("div", { styleName: "header" }, _react2.default.createElement("h2", { styleName: "title" }, title), _react2.default.createElement("p", { styleName: "author" }, author), _react2.default.createElement(_form.Button, { color: "blue", to: '/viewer/book/' + bookId }, "\u9605\u8BFB")), _react2.default.createElement("div", { styleName: "description" }, _react2.default.createElement("p", null, description)));
	        }
	    }]);
	
	    return BookInfoPopup;
	}(_react.Component);
	BookInfoPopup = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], BookInfoPopup);
	exports.default = BookInfoPopup;

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(275);
	    var insertCss = __webpack_require__(129);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(128)();
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

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(277);
	    var insertCss = __webpack_require__(129);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(128)();
	// imports
	
	
	// module
	exports.push([module.id, ".meta-item_2cRyJ {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.book_3Oqz_ {\n  float: left;\n  transition: all 0.2s ease 0s;\n  position: relative;\n  width: 150px;\n  padding: 0 10px; }\n  .book_3Oqz_ a {\n    display: block;\n    padding-top: 10px;\n    position: relative; }\n    .book_3Oqz_ a:hover img {\n      opacity: .96; }\n    .book_3Oqz_ a:active img {\n      opacity: .8; }\n\n.book-meta_3glcZ {\n  background: transparent; }\n\n.meta-item_2cRyJ {\n  width: 100%;\n  text-align: left;\n  display: block;\n  line-height: 1.5;\n  margin-left: 17px;\n  width: 134px; }\n\n.book-name_2jIuZ {\n  font-size: 1.3rem;\n  color: #333; }\n\n.book-author_1VM7e {\n  color: #999; }\n\n.book-cover_1jrK8 {\n  position: relative;\n  margin: 0;\n  width: 134px;\n  height: 184px;\n  top: 0;\n  background: url(" + __webpack_require__(278) + ") no-repeat top;\n  transition: all 0.2s ease 0s;\n  position: relative; }\n  .book-cover_1jrK8 img {\n    width: 100px;\n    height: 150px;\n    display: block;\n    position: absolute;\n    border: none;\n    left: 17px;\n    top: 7px;\n    border-radius: 4px; }\n  .book-cover_1jrK8:hover {\n    top: -7px; }\n\n.book-desc_xFFKl {\n  color: #999; }\n\n.book--card_3FOky {\n  width: auto;\n  background: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  padding: 10px;\n  float: none;\n  height: 100px; }\n  .book--card_3FOky a {\n    padding: 0;\n    display: block;\n    overflow: hidden;\n    opacity: 1; }\n    .book--card_3FOky a:hover img {\n      opacity: 1; }\n    .book--card_3FOky a:active img {\n      opacity: 1; }\n  .book--card_3FOky .book-cover_1jrK8 {\n    width: auto;\n    height: auto;\n    height: 72px;\n    background: none;\n    overflow: hidden;\n    float: left;\n    border-radius: 4px;\n    margin-right: 20px; }\n    .book--card_3FOky .book-cover_1jrK8:hover {\n      top: 0; }\n    .book--card_3FOky .book-cover_1jrK8 img {\n      width: 50px;\n      height: auto;\n      position: relative;\n      top: 0;\n      left: 0; }\n  .book--card_3FOky .book-meta_3glcZ {\n    float: none; }\n  .book--card_3FOky .meta-item_2cRyJ {\n    width: auto; }\n", ""]);
	
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

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/shadow.471ea37f96.png";

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(280);
	    var insertCss = __webpack_require__(129);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(128)();
	// imports
	
	
	// module
	exports.push([module.id, ".book-list_2s_Jl {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin-left: -10px;\n  margin-right: -10px; }\n  .book-list_2s_Jl li {\n    float: left;\n    width: 50%;\n    padding: 10px;\n    box-sizing: border-box; }\n    @media (max-width: 540px) {\n      .book-list_2s_Jl li {\n        width: 100%; } }\n", ""]);
	
	// exports
	exports.locals = {
		"book-list": "book-list_2s_Jl"
	};

/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(282);
	    var insertCss = __webpack_require__(129);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(128)();
	// imports
	
	
	// module
	exports.push([module.id, ".section-title_2Kv3D {\n  margin: 35px 0;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #333; }\n\n.book-list-section_2CfDe {\n  position: relative; }\n\n.more_mgQHg {\n  position: absolute;\n  right: 0;\n  top: 0;\n  line-height: 32px; }\n\n.section-title_2Kv3D {\n  margin-bottom: 10px; }\n  .section-title_2Kv3D a {\n    color: #333; }\n    .section-title_2Kv3D a:hover {\n      color: #666; }\n", ""]);
	
	// exports
	exports.locals = {
		"section-title": "section-title_2Kv3D",
		"book-list-section": "book-list-section_2CfDe",
		"more": "more_mgQHg"
	};

/***/ },

/***/ 286:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(90);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(92);
	
	var _Button = __webpack_require__(151);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _BookListSection = __webpack_require__(266);
	
	var _BookListSection2 = _interopRequireDefault(_BookListSection);
	
	var _actions = __webpack_require__(93);
	
	var _Container = __webpack_require__(174);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	var _selectors = __webpack_require__(113);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _reactCssModules = __webpack_require__(125);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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
	
	var styles = __webpack_require__(287);
	var Browse = function (_Component) {
	    _inherits(Browse, _Component);
	
	    function Browse(props) {
	        _classCallCheck(this, Browse);
	
	        return _possibleConstructorReturn(this, (Browse.__proto__ || Object.getPrototypeOf(Browse)).call(this, props));
	    }
	
	    _createClass(Browse, [{
	        key: "loadMore",
	        value: function loadMore() {
	            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	
	            this.props.loadBooks({ page: page }, 'browse');
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.loadMore();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props;
	            var nextPage = _props.nextPage;
	            var isBooksFetching = _props.isBooksFetching;
	
	            return _react2.default.createElement(_Container2.default, { className: "archive" }, _react2.default.createElement(_BookListSection2.default, { title: "所有书籍", bookEntities: this.props.newestBooks, isFetching: isBooksFetching }), nextPage !== 0 && _react2.default.createElement(_Button2.default, { onClick: function onClick() {
	                    _this2.loadMore(nextPage);
	                }, styleName: "btn-load-more", width: 200, color: "white" }, isBooksFetching ? '加载中 ...' : '加载更多'));
	        }
	    }], [{
	        key: "fetchData",
	        value: function fetchData(_ref) {
	            var store = _ref.store;
	
	            return store.dispatch((0, _actions.loadBooks)());
	        }
	    }]);
	
	    return Browse;
	}(_react.Component);
	Browse = __decorate([(0, _reactCssModules2.default)(styles)], Browse);
	function mapStateToProps(state, ownProps) {
	    return {
	        newestBooks: selectors.books('browse')(state),
	        isBooksFetching: selectors.common.isPaginationFetching('books', 'browse')(state),
	        nextPage: selectors.common.nextPage('books', 'browse')(state)
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { loadBooks: _actions.loadBooks, fetchCollections: _actions.fetchCollections })(Browse);

/***/ },

/***/ 287:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(288);
	    var insertCss = __webpack_require__(129);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(128)();
	// imports
	
	
	// module
	exports.push([module.id, ".btn-load-more_26sdQ {\n  margin: 20px auto;\n  display: block; }\n", ""]);
	
	// exports
	exports.locals = {
		"btn-load-more": "btn-load-more_26sdQ"
	};

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL2luZGV4LnRzPzk5YjMqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy50c3g/ZGRhZioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9Mb2FkaW5nLnNjc3M/MTBkYioqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy5zY3NzPzYxYTQqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3RTZWN0aW9uL2luZGV4LnRzPzQ3MDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdFNlY3Rpb24vQm9va0xpc3RTZWN0aW9uLnRzeD84N2I3Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3QvaW5kZXgudHM/NTljMyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0L0Jvb2tMaXN0LnRzeD9iNjEwIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9vay9pbmRleC50cz9hNWE5Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9vay9Cb29rLnRzeD85ZDdlIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0luZm9Qb3B1cC9pbmRleC50cz9iYjRjIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0luZm9Qb3B1cC9Cb29rSW5mb1BvcHVwLnRzeD9mZTIxIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0luZm9Qb3B1cC9Cb29rSW5mb1BvcHVwLnNjc3M/MzU2ZCoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL0Jvb2tJbmZvUG9wdXAuc2Nzcz84ZTRjIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9vay9fYm9vay5zY3NzP2U4MTYqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9vay9fYm9vay5zY3NzP2MwYWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWcvc2hhZG93LnBuZz82ZjQwIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3QvQm9va0xpc3Quc2Nzcz84ZTM1KiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0L0Jvb2tMaXN0LnNjc3M/NzA3NSIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0U2VjdGlvbi9Cb29rTGlzdFNlY3Rpb24uc2Nzcz8wZWJmKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0U2VjdGlvbi9Cb29rTGlzdFNlY3Rpb24uc2Nzcz85MzBiIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Ccm93c2UvQnJvd3NlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQnJvd3NlL0Jyb3dzZS5zY3NzPzA2NmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL0Jyb3dzZS9Ccm93c2Uuc2NzcyJdLCJuYW1lcyI6WyJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImQiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJMb2FkaW5nIiwicHJvcHMiLCJzdGF0ZSIsImR5bmFtaWNUZXh0IiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwic2V0U3RhdGUiLCJjbGVhckludGVydmFsIiwidGV4dCIsImNlbnRlciIsIndyYXBDbGFzcyIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZU5hbWUiLCJzdHlsZXMiLCJyZXF1aXJlIiwiQm9va0xpc3RTZWN0aW9uIiwiaXNGZXRjaGluZyIsInRpdGxlIiwibW9yZUxpbmsiLCJib29rRW50aXRpZXMiLCJ0byIsIm5hbWUiLCJzaXplIiwiYWxsb3dNdWx0aXBsZSIsIkJvb2tMaXN0IiwiY2xhc3NOYW1lIiwibWFwIiwiYm9vayIsImluZGV4IiwiYXV0aG9ycyIsImRlc2NyaXB0aW9uIiwiY292ZXIiLCJpZCIsImF1dGhvciIsImpvaW4iLCJkaXNhYmxlUG9wdXAiLCJCb29rIiwic2hvd1BvcHVwIiwiYmluZCIsImhpZGVQb3B1cCIsInNob3dEZXNjIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwic3JjIiwiYm9va0lkIiwiQm9va0luZm9Qb3B1cCIsImNvbG9yIiwic2VsZWN0b3JzIiwiQnJvd3NlIiwicGFnZSIsImxvYWRCb29rcyIsImxvYWRNb3JlIiwibmV4dFBhZ2UiLCJpc0Jvb2tzRmV0Y2hpbmciLCJuZXdlc3RCb29rcyIsIm9uQ2xpY2siLCJ3aWR0aCIsInN0b3JlIiwiZGlzcGF0Y2giLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsImJvb2tzIiwiY29tbW9uIiwiaXNQYWdpbmF0aW9uRmV0Y2hpbmciLCJmZXRjaENvbGxlY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBVEEsS0FBSUEsYUFBYyxhQUFRLFVBQUtBLFVBQWQsSUFBNkIsVUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNuRixTQUFJQyxJQUFJQyxVQUFVQyxNQUFsQjtBQUFBLFNBQTBCQyxJQUFJSCxJQUFJLENBQUosR0FBUUgsTUFBUixHQUFpQkUsU0FBUyxJQUFULEdBQWdCQSxPQUFPSyxPQUFPQyx3QkFBUCxDQUFnQ1IsTUFBaEMsRUFBd0NDLEdBQXhDLENBQXZCLEdBQXNFQyxJQUFySDtBQUFBLFNBQTJITyxDQUEzSDtBQUNBLFNBQUksUUFBT0MsT0FBUCx5Q0FBT0EsT0FBUCxPQUFtQixRQUFuQixJQUErQixPQUFPQSxRQUFRQyxRQUFmLEtBQTRCLFVBQS9ELEVBQTJFTCxJQUFJSSxRQUFRQyxRQUFSLENBQWlCWixVQUFqQixFQUE2QkMsTUFBN0IsRUFBcUNDLEdBQXJDLEVBQTBDQyxJQUExQyxDQUFKLENBQTNFLEtBQ0ssS0FBSyxJQUFJVSxJQUFJYixXQUFXTSxNQUFYLEdBQW9CLENBQWpDLEVBQW9DTyxLQUFLLENBQXpDLEVBQTRDQSxHQUE1QztBQUFpRCxhQUFJSCxJQUFJVixXQUFXYSxDQUFYLENBQVIsRUFBdUJOLElBQUksQ0FBQ0gsSUFBSSxDQUFKLEdBQVFNLEVBQUVILENBQUYsQ0FBUixHQUFlSCxJQUFJLENBQUosR0FBUU0sRUFBRVQsTUFBRixFQUFVQyxHQUFWLEVBQWVLLENBQWYsQ0FBUixHQUE0QkcsRUFBRVQsTUFBRixFQUFVQyxHQUFWLENBQTVDLEtBQStESyxDQUFuRTtBQUF4RSxNQUNMLE9BQU9ILElBQUksQ0FBSixJQUFTRyxDQUFULElBQWNDLE9BQU9NLGNBQVAsQ0FBc0JiLE1BQXRCLEVBQThCQyxHQUE5QixFQUFtQ0ssQ0FBbkMsQ0FBZCxFQUFxREEsQ0FBNUQ7QUFDSCxFQUxEOztBQVVBLEtBQUlRO0FBQUE7O0FBQ0Esc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx1SEFDVEEsS0FEUzs7QUFFZixlQUFLQyxLQUFMLEdBQWE7QUFDVEMsMEJBQWE7QUFESixVQUFiO0FBRmU7QUFLbEI7O0FBTkQ7QUFBQTtBQUFBLDZDQU9vQjtBQUFBOztBQUNoQixrQkFBS0MsVUFBTCxHQUFrQkMsWUFBWSxZQUFNO0FBQ2hDLHFCQUFJLE9BQUtILEtBQUwsQ0FBV0MsV0FBWCxDQUF1QlosTUFBdkIsS0FBa0MsQ0FBdEMsRUFBeUM7QUFDckMsNEJBQUtlLFFBQUwsQ0FBYyxFQUFFSCxhQUFhLEVBQWYsRUFBZDtBQUNILGtCQUZELE1BR0s7QUFDRCw0QkFBS0csUUFBTCxDQUFjO0FBQ1ZILHNDQUFhLE9BQUtELEtBQUwsQ0FBV0MsV0FBWCxHQUF5QjtBQUQ1QixzQkFBZDtBQUdIO0FBQ0osY0FUaUIsRUFTZixHQVRlLENBQWxCO0FBVUg7QUFsQkQ7QUFBQTtBQUFBLGdEQW1CdUI7QUFDbkJJLDJCQUFjLEtBQUtILFVBQW5CO0FBQ0g7QUFyQkQ7QUFBQTtBQUFBLGtDQXNCUztBQUFBLDBCQUNvQixLQUFLSCxLQUR6QjtBQUFBLGlCQUNHTyxJQURILFVBQ0dBLElBREg7QUFBQSxpQkFDU0MsTUFEVCxVQUNTQSxNQURUO0FBQUEsaUJBRUdOLFdBRkgsR0FFbUIsS0FBS0QsS0FGeEIsQ0FFR0MsV0FGSDs7QUFHTCxpQkFBTU8sWUFBWSwwQkFBVztBQUN6Qix5Q0FBd0JELE1BREM7QUFFekIsaUNBQWdCLENBQUNBO0FBRlEsY0FBWCxDQUFsQjtBQUlBLG9CQUFRLGdCQUFNRSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUVDLFdBQVdGLFNBQWIsRUFBM0IsRUFDSixnQkFBTUMsYUFBTixDQUFvQixNQUFwQixFQUE0QixFQUFFQyxXQUFXLGNBQWIsRUFBNUIsRUFBMkRKLE9BQU9MLFdBQWxFLENBREksQ0FBUjtBQUVIO0FBL0JEOztBQUFBO0FBQUEsb0JBQUo7QUFpQ0FILFdBQVVoQixXQUFXLENBQ2pCLGlEQURpQixDQUFYLEVBRVBnQixPQUZPLENBQVY7QUFHQUEsU0FBUSxjQUFSLElBQTBCO0FBQ3RCUSxXQUFNO0FBRGdCLEVBQTFCO21CQUdlUixPOzs7Ozs7OztBQ2hEZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUF5QywyQkFBMkI7QUFDcEUsb0RBQW1EOzs7Ozs7OztBQ1ZuRDtBQUNBOzs7QUFHQTtBQUNBLGdEQUErQyx1QkFBdUIsbUJBQW1CLG9CQUFvQix3QkFBd0IsZ0JBQWdCLEVBQUUseUJBQXlCLG1CQUFtQiwwQkFBMEIsRUFBRSx5QkFBeUIscUJBQXFCLEVBQUUsaUNBQWlDLHVCQUF1QixFQUFFOztBQUV6VTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7Ozs7OztBQ1pBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ01BOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQVhBLEtBQUloQixhQUFjLGFBQVEsVUFBS0EsVUFBZCxJQUE2QixVQUFVQyxVQUFWLEVBQXNCQyxNQUF0QixFQUE4QkMsR0FBOUIsRUFBbUNDLElBQW5DLEVBQXlDO0FBQ25GLFNBQUlDLElBQUlDLFVBQVVDLE1BQWxCO0FBQUEsU0FBMEJDLElBQUlILElBQUksQ0FBSixHQUFRSCxNQUFSLEdBQWlCRSxTQUFTLElBQVQsR0FBZ0JBLE9BQU9LLE9BQU9DLHdCQUFQLENBQWdDUixNQUFoQyxFQUF3Q0MsR0FBeEMsQ0FBdkIsR0FBc0VDLElBQXJIO0FBQUEsU0FBMkhPLENBQTNIO0FBQ0EsU0FBSSxRQUFPQyxPQUFQLHlDQUFPQSxPQUFQLE9BQW1CLFFBQW5CLElBQStCLE9BQU9BLFFBQVFDLFFBQWYsS0FBNEIsVUFBL0QsRUFBMkVMLElBQUlJLFFBQVFDLFFBQVIsQ0FBaUJaLFVBQWpCLEVBQTZCQyxNQUE3QixFQUFxQ0MsR0FBckMsRUFBMENDLElBQTFDLENBQUosQ0FBM0UsS0FDSyxLQUFLLElBQUlVLElBQUliLFdBQVdNLE1BQVgsR0FBb0IsQ0FBakMsRUFBb0NPLEtBQUssQ0FBekMsRUFBNENBLEdBQTVDO0FBQWlELGFBQUlILElBQUlWLFdBQVdhLENBQVgsQ0FBUixFQUF1Qk4sSUFBSSxDQUFDSCxJQUFJLENBQUosR0FBUU0sRUFBRUgsQ0FBRixDQUFSLEdBQWVILElBQUksQ0FBSixHQUFRTSxFQUFFVCxNQUFGLEVBQVVDLEdBQVYsRUFBZUssQ0FBZixDQUFSLEdBQTRCRyxFQUFFVCxNQUFGLEVBQVVDLEdBQVYsQ0FBNUMsS0FBK0RLLENBQW5FO0FBQXhFLE1BQ0wsT0FBT0gsSUFBSSxDQUFKLElBQVNHLENBQVQsSUFBY0MsT0FBT00sY0FBUCxDQUFzQmIsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DSyxDQUFuQyxDQUFkLEVBQXFEQSxDQUE1RDtBQUNILEVBTEQ7O0FBWUEsS0FBTXFCLFNBQVMsbUJBQUFDLENBQVEsR0FBUixDQUFmO0FBQ0EsS0FBSUM7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGtDQUNTO0FBQUEsMEJBQ2lELEtBQUtkLEtBRHREO0FBQUEsaUJBQ0dlLFVBREgsVUFDR0EsVUFESDtBQUFBLGlCQUNlQyxLQURmLFVBQ2VBLEtBRGY7QUFBQSxpQkFDc0JDLFFBRHRCLFVBQ3NCQSxRQUR0QjtBQUFBLGlCQUNnQ0MsWUFEaEMsVUFDZ0NBLFlBRGhDOztBQUVMLG9CQUFRLGdCQUFNUixhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUVDLFdBQVcsbUJBQWIsRUFBM0IsRUFDSixLQUFLWCxLQUFMLENBQVdnQixLQUFYLEtBQXFCQyxXQUNkLGdCQUFNUCxhQUFOLENBQW9CLElBQXBCLEVBQTBCLEVBQUVDLFdBQVcsZUFBYixFQUExQixFQUNDLGdCQUFNRCxhQUFOLG9CQUEwQixFQUFFUyxJQUFJRixRQUFOLEVBQTFCLEVBQ0lELEtBREosRUFFSSxnQkFBTU4sYUFBTixpQkFBMEIsRUFBRVUsTUFBTSxZQUFSLEVBQXNCQyxNQUFNLEVBQTVCLEVBQTFCLENBRkosQ0FERCxDQURjLEdBS2QsZ0JBQU1YLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsRUFBRUMsV0FBVyxlQUFiLEVBQTFCLEVBQTBESyxLQUExRCxDQUxQLENBREksRUFPSkQsY0FBY0csYUFBYTVCLE1BQWIsS0FBd0IsQ0FBdEMsR0FDTSxnQkFBTW9CLGFBQU4sb0JBQTZCLElBQTdCLENBRE4sR0FFTSxnQkFBTUEsYUFBTixxQkFBOEIsRUFBRVEsY0FBY0EsWUFBaEIsRUFBOUIsQ0FURixDQUFSO0FBVUg7QUFiRDs7QUFBQTtBQUFBLG9CQUFKO0FBZUFKLG1CQUFrQi9CLFdBQVcsQ0FDekIsK0JBQVc2QixNQUFYLEVBQW1CO0FBQ2ZVLG9CQUFlO0FBREEsRUFBbkIsQ0FEeUIsQ0FBWCxFQUlmUixlQUplLENBQWxCO21CQUtlQSxlOzs7Ozs7Ozs7Ozs7O0FDakNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ01BOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBUkEsS0FBSS9CLGFBQWMsYUFBUSxVQUFLQSxVQUFkLElBQTZCLFVBQVVDLFVBQVYsRUFBc0JDLE1BQXRCLEVBQThCQyxHQUE5QixFQUFtQ0MsSUFBbkMsRUFBeUM7QUFDbkYsU0FBSUMsSUFBSUMsVUFBVUMsTUFBbEI7QUFBQSxTQUEwQkMsSUFBSUgsSUFBSSxDQUFKLEdBQVFILE1BQVIsR0FBaUJFLFNBQVMsSUFBVCxHQUFnQkEsT0FBT0ssT0FBT0Msd0JBQVAsQ0FBZ0NSLE1BQWhDLEVBQXdDQyxHQUF4QyxDQUF2QixHQUFzRUMsSUFBckg7QUFBQSxTQUEySE8sQ0FBM0g7QUFDQSxTQUFJLFFBQU9DLE9BQVAseUNBQU9BLE9BQVAsT0FBbUIsUUFBbkIsSUFBK0IsT0FBT0EsUUFBUUMsUUFBZixLQUE0QixVQUEvRCxFQUEyRUwsSUFBSUksUUFBUUMsUUFBUixDQUFpQlosVUFBakIsRUFBNkJDLE1BQTdCLEVBQXFDQyxHQUFyQyxFQUEwQ0MsSUFBMUMsQ0FBSixDQUEzRSxLQUNLLEtBQUssSUFBSVUsSUFBSWIsV0FBV00sTUFBWCxHQUFvQixDQUFqQyxFQUFvQ08sS0FBSyxDQUF6QyxFQUE0Q0EsR0FBNUM7QUFBaUQsYUFBSUgsSUFBSVYsV0FBV2EsQ0FBWCxDQUFSLEVBQXVCTixJQUFJLENBQUNILElBQUksQ0FBSixHQUFRTSxFQUFFSCxDQUFGLENBQVIsR0FBZUgsSUFBSSxDQUFKLEdBQVFNLEVBQUVULE1BQUYsRUFBVUMsR0FBVixFQUFlSyxDQUFmLENBQVIsR0FBNEJHLEVBQUVULE1BQUYsRUFBVUMsR0FBVixDQUE1QyxLQUErREssQ0FBbkU7QUFBeEUsTUFDTCxPQUFPSCxJQUFJLENBQUosSUFBU0csQ0FBVCxJQUFjQyxPQUFPTSxjQUFQLENBQXNCYixNQUF0QixFQUE4QkMsR0FBOUIsRUFBbUNLLENBQW5DLENBQWQsRUFBcURBLENBQTVEO0FBQ0gsRUFMRDs7QUFTQSxLQUFNcUIsU0FBUyxtQkFBQUMsQ0FBUSxHQUFSLENBQWY7QUFDQSxLQUFJVTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsa0NBQ1M7QUFDTCxvQkFBUSxnQkFBTWIsYUFBTixDQUFvQixJQUFwQixFQUEwQixFQUFFQyxXQUFXLFdBQWIsRUFBMEJhLFdBQVcsVUFBckMsRUFBMUIsRUFBNkUsS0FBS3hCLEtBQUwsQ0FBV2tCLFlBQVgsSUFBMkIsS0FBS2xCLEtBQUwsQ0FBV2tCLFlBQVgsQ0FBd0I1QixNQUF4QixLQUFtQyxDQUE5RCxHQUM5RSxLQUFLVSxLQUFMLENBQVdrQixZQUFYLENBQXdCTyxHQUF4QixDQUE0QixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFBQSxxQkFDcENYLEtBRG9DLEdBQ0dVLElBREgsQ0FDcENWLEtBRG9DO0FBQUEscUJBQzdCWSxPQUQ2QixHQUNHRixJQURILENBQzdCRSxPQUQ2QjtBQUFBLHFCQUNwQkMsV0FEb0IsR0FDR0gsSUFESCxDQUNwQkcsV0FEb0I7QUFBQSxxQkFDUEMsS0FETyxHQUNHSixJQURILENBQ1BJLEtBRE87O0FBRTVDLHdCQUFRLGdCQUFNcEIsYUFBTixDQUFvQixJQUFwQixFQUEwQixFQUFFeEIsS0FBS3lDLEtBQVAsRUFBMUIsRUFDSixnQkFBTWpCLGFBQU4saUJBQTBCLEVBQUVxQixJQUFJTCxLQUFLSyxFQUFYLEVBQWVmLE9BQU9BLFNBQVMsS0FBL0IsRUFBc0NZLFNBQVNBLFdBQVdBLFFBQVFILEdBQVIsQ0FBWTtBQUFBLGdDQUFVTyxPQUFPWixJQUFqQjtBQUFBLHNCQUFaLEVBQW1DYSxJQUFuQyxDQUF3QyxJQUF4QyxDQUFYLElBQTRELE1BQTNHLEVBQW1ISixhQUFhQSxXQUFoSSxFQUE2SUMsT0FBT0EsS0FBcEosRUFBMkpJLGNBQWMsSUFBekssRUFBMUIsQ0FESSxDQUFSO0FBRUgsY0FKRSxDQUQ4RSxHQU05RSxnQkFBTXhCLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBMUIsRUFBZ0MsMEJBQWhDLENBTkMsQ0FBUjtBQU9IO0FBVEQ7O0FBQUE7QUFBQSxvQkFBSjtBQVdBYSxZQUFXeEMsV0FBVyxDQUNsQiwrQkFBVzZCLE1BQVgsQ0FEa0IsQ0FBWCxFQUVSVyxRQUZRLENBQVg7bUJBR2VBLFE7Ozs7Ozs7Ozs7Ozs7QUN4QmY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFUQSxLQUFJeEMsYUFBYyxhQUFRLFVBQUtBLFVBQWQsSUFBNkIsVUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNuRixTQUFJQyxJQUFJQyxVQUFVQyxNQUFsQjtBQUFBLFNBQTBCQyxJQUFJSCxJQUFJLENBQUosR0FBUUgsTUFBUixHQUFpQkUsU0FBUyxJQUFULEdBQWdCQSxPQUFPSyxPQUFPQyx3QkFBUCxDQUFnQ1IsTUFBaEMsRUFBd0NDLEdBQXhDLENBQXZCLEdBQXNFQyxJQUFySDtBQUFBLFNBQTJITyxDQUEzSDtBQUNBLFNBQUksUUFBT0MsT0FBUCx5Q0FBT0EsT0FBUCxPQUFtQixRQUFuQixJQUErQixPQUFPQSxRQUFRQyxRQUFmLEtBQTRCLFVBQS9ELEVBQTJFTCxJQUFJSSxRQUFRQyxRQUFSLENBQWlCWixVQUFqQixFQUE2QkMsTUFBN0IsRUFBcUNDLEdBQXJDLEVBQTBDQyxJQUExQyxDQUFKLENBQTNFLEtBQ0ssS0FBSyxJQUFJVSxJQUFJYixXQUFXTSxNQUFYLEdBQW9CLENBQWpDLEVBQW9DTyxLQUFLLENBQXpDLEVBQTRDQSxHQUE1QztBQUFpRCxhQUFJSCxJQUFJVixXQUFXYSxDQUFYLENBQVIsRUFBdUJOLElBQUksQ0FBQ0gsSUFBSSxDQUFKLEdBQVFNLEVBQUVILENBQUYsQ0FBUixHQUFlSCxJQUFJLENBQUosR0FBUU0sRUFBRVQsTUFBRixFQUFVQyxHQUFWLEVBQWVLLENBQWYsQ0FBUixHQUE0QkcsRUFBRVQsTUFBRixFQUFVQyxHQUFWLENBQTVDLEtBQStESyxDQUFuRTtBQUF4RSxNQUNMLE9BQU9ILElBQUksQ0FBSixJQUFTRyxDQUFULElBQWNDLE9BQU9NLGNBQVAsQ0FBc0JiLE1BQXRCLEVBQThCQyxHQUE5QixFQUFtQ0ssQ0FBbkMsQ0FBZCxFQUFxREEsQ0FBNUQ7QUFDSCxFQUxEOztBQVVBLEtBQU1xQixTQUFTLG1CQUFBQyxDQUFRLEdBQVIsQ0FBZjtBQUNBLEtBQUlzQjtBQUFBOztBQUNBLG1CQUFZbkMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlIQUNUQSxLQURTOztBQUVmLGVBQUtDLEtBQUwsR0FBYTtBQUNUbUMsd0JBQVc7QUFERixVQUFiO0FBR0EsZUFBS0EsU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVDLElBQWYsT0FBakI7QUFDQSxlQUFLQyxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUQsSUFBZixPQUFqQjtBQU5lO0FBT2xCOztBQVJEO0FBQUE7QUFBQSxxQ0FTWTtBQUNSLGtCQUFLaEMsUUFBTCxDQUFjO0FBQ1YrQiw0QkFBVztBQURELGNBQWQ7QUFHSDtBQWJEO0FBQUE7QUFBQSxxQ0FjWTtBQUNSLGtCQUFLL0IsUUFBTCxDQUFjO0FBQ1YrQiw0QkFBVztBQURELGNBQWQ7QUFHSDtBQWxCRDtBQUFBO0FBQUEsa0NBbUJTO0FBQUEsMEJBQ29DLEtBQUtwQyxLQUR6QztBQUFBLGlCQUNHdUMsUUFESCxVQUNHQSxRQURIO0FBQUEsaUJBQ2FWLFdBRGIsVUFDYUEsV0FEYjtBQUFBLGlCQUMwQkMsS0FEMUIsVUFDMEJBLEtBRDFCOztBQUVMLG9CQUFRLGdCQUFNcEIsYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFFOEIsY0FBYyxLQUFLSixTQUFyQixFQUFnQ0ssY0FBYyxLQUFLSCxTQUFuRCxFQUE4RDNCLFdBQVcsWUFBekUsRUFBM0IsRUFDSixnQkFBTUQsYUFBTixvQkFBMEIsRUFBRVMsSUFBSSxXQUFXLEtBQUtuQixLQUFMLENBQVcrQixFQUE1QixFQUExQixFQUNJRCxTQUFVLGdCQUFNcEIsYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFFQyxXQUFXLFlBQWIsRUFBM0IsRUFDTixnQkFBTUQsYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFFZ0MsS0FBSyxLQUFLMUMsS0FBTCxDQUFXOEIsS0FBbEIsRUFBM0IsQ0FETSxDQURkLEVBR0ksZ0JBQU1wQixhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUVDLFdBQVcsV0FBYixFQUEzQixFQUNJLGdCQUFNRCxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLEVBQUVNLE9BQU8sS0FBS2hCLEtBQUwsQ0FBV2dCLEtBQXBCLEVBQTJCTCxXQUFXLFdBQXRDLEVBQTVCLEVBQWlGLEtBQUtYLEtBQUwsQ0FBV2dCLEtBQVgsSUFBb0IsS0FBckcsQ0FESixFQUVJLGdCQUFNTixhQUFOLENBQW9CLE1BQXBCLEVBQTRCLEVBQUVDLFdBQVcsYUFBYixFQUE1QixFQUEwRCxLQUFLWCxLQUFMLENBQVc0QixPQUFYLElBQXNCLE1BQWhGLENBRkosRUFHSVcsWUFBYSxnQkFBTTdCLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEIsRUFBRUMsV0FBVyxXQUFiLEVBQTVCLEVBQXdEa0IsZUFBZSxHQUF2RSxDQUhqQixDQUhKLENBREksRUFRSixLQUFLNUIsS0FBTCxDQUFXbUMsU0FBWCxJQUF3QixDQUFDLEtBQUtwQyxLQUFMLENBQVdrQyxZQUFwQyxJQUFxRCxnQkFBTXhCLGFBQU4sMEJBQW1DLEVBQUVpQyxRQUFRLEtBQUszQyxLQUFMLENBQVcrQixFQUFyQixFQUF5QmYsT0FBTyxLQUFLaEIsS0FBTCxDQUFXZ0IsS0FBM0MsRUFBa0RnQixRQUFRLEtBQUtoQyxLQUFMLENBQVc0QixPQUFyRSxFQUE4RUMsYUFBYSxLQUFLN0IsS0FBTCxDQUFXNkIsV0FBdEcsRUFBbkMsQ0FSakQsQ0FBUjtBQVNIO0FBOUJEOztBQUFBO0FBQUEsb0JBQUo7QUFnQ0FNLFFBQU9wRCxXQUFXLENBQ2QsK0JBQVc2QixNQUFYLEVBQW1CO0FBQ2ZVLG9CQUFlO0FBREEsRUFBbkIsQ0FEYyxDQUFYLEVBSUphLElBSkksQ0FBUDttQkFLZUEsSTs7Ozs7Ozs7Ozs7OztBQ2hEZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFSQSxLQUFJcEQsYUFBYyxhQUFRLFVBQUtBLFVBQWQsSUFBNkIsVUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNuRixTQUFJQyxJQUFJQyxVQUFVQyxNQUFsQjtBQUFBLFNBQTBCQyxJQUFJSCxJQUFJLENBQUosR0FBUUgsTUFBUixHQUFpQkUsU0FBUyxJQUFULEdBQWdCQSxPQUFPSyxPQUFPQyx3QkFBUCxDQUFnQ1IsTUFBaEMsRUFBd0NDLEdBQXhDLENBQXZCLEdBQXNFQyxJQUFySDtBQUFBLFNBQTJITyxDQUEzSDtBQUNBLFNBQUksUUFBT0MsT0FBUCx5Q0FBT0EsT0FBUCxPQUFtQixRQUFuQixJQUErQixPQUFPQSxRQUFRQyxRQUFmLEtBQTRCLFVBQS9ELEVBQTJFTCxJQUFJSSxRQUFRQyxRQUFSLENBQWlCWixVQUFqQixFQUE2QkMsTUFBN0IsRUFBcUNDLEdBQXJDLEVBQTBDQyxJQUExQyxDQUFKLENBQTNFLEtBQ0ssS0FBSyxJQUFJVSxJQUFJYixXQUFXTSxNQUFYLEdBQW9CLENBQWpDLEVBQW9DTyxLQUFLLENBQXpDLEVBQTRDQSxHQUE1QztBQUFpRCxhQUFJSCxJQUFJVixXQUFXYSxDQUFYLENBQVIsRUFBdUJOLElBQUksQ0FBQ0gsSUFBSSxDQUFKLEdBQVFNLEVBQUVILENBQUYsQ0FBUixHQUFlSCxJQUFJLENBQUosR0FBUU0sRUFBRVQsTUFBRixFQUFVQyxHQUFWLEVBQWVLLENBQWYsQ0FBUixHQUE0QkcsRUFBRVQsTUFBRixFQUFVQyxHQUFWLENBQTVDLEtBQStESyxDQUFuRTtBQUF4RSxNQUNMLE9BQU9ILElBQUksQ0FBSixJQUFTRyxDQUFULElBQWNDLE9BQU9NLGNBQVAsQ0FBc0JiLE1BQXRCLEVBQThCQyxHQUE5QixFQUFtQ0ssQ0FBbkMsQ0FBZCxFQUFxREEsQ0FBNUQ7QUFDSCxFQUxEOztBQVNBLEtBQU1xQixTQUFTLG1CQUFBQyxDQUFRLEdBQVIsQ0FBZjtBQUNBLEtBQUkrQjtBQUFBOztBQUNBLDRCQUFZNUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNUQSxLQURTO0FBRWxCOztBQUhEO0FBQUE7QUFBQSxrQ0FJUztBQUFBLDBCQUMwQyxLQUFLQSxLQUQvQztBQUFBLGlCQUNHZ0MsTUFESCxVQUNHQSxNQURIO0FBQUEsaUJBQ1doQixLQURYLFVBQ1dBLEtBRFg7QUFBQSxpQkFDa0JhLFdBRGxCLFVBQ2tCQSxXQURsQjtBQUFBLGlCQUMrQmMsTUFEL0IsVUFDK0JBLE1BRC9COztBQUVMLG9CQUFRLGdCQUFNakMsYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFFQyxXQUFXLE9BQWIsRUFBM0IsRUFDSixnQkFBTUQsYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFFQyxXQUFXLFFBQWIsRUFBM0IsRUFDSSxnQkFBTUQsYUFBTixDQUFvQixJQUFwQixFQUEwQixFQUFFQyxXQUFXLE9BQWIsRUFBMUIsRUFBa0RLLEtBQWxELENBREosRUFFSSxnQkFBTU4sYUFBTixDQUFvQixHQUFwQixFQUF5QixFQUFFQyxXQUFXLFFBQWIsRUFBekIsRUFBa0RxQixNQUFsRCxDQUZKLEVBR0ksZ0JBQU10QixhQUFOLGVBQTRCLEVBQUVtQyxPQUFPLE1BQVQsRUFBaUIxQixJQUFJLGtCQUFrQndCLE1BQXZDLEVBQTVCLEVBQTZFLGNBQTdFLENBSEosQ0FESSxFQUtKLGdCQUFNakMsYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFFQyxXQUFXLGFBQWIsRUFBM0IsRUFDSSxnQkFBTUQsYUFBTixDQUFvQixHQUFwQixFQUF5QixJQUF6QixFQUErQm1CLFdBQS9CLENBREosQ0FMSSxDQUFSO0FBT0g7QUFiRDs7QUFBQTtBQUFBLG9CQUFKO0FBZUFlLGlCQUFnQjdELFdBQVcsQ0FDdkIsK0JBQVc2QixNQUFYLEVBQW1CO0FBQ2ZVLG9CQUFlO0FBREEsRUFBbkIsQ0FEdUIsQ0FBWCxFQUlic0IsYUFKYSxDQUFoQjttQkFLZUEsYTs7Ozs7Ozs7QUM3QmY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBeUMsMkJBQTJCO0FBQ3BFLG9EQUFtRDs7Ozs7Ozs7QUNWbkQ7QUFDQTs7O0FBR0E7QUFDQSx5Q0FBd0MsbUJBQW1CLHNCQUFzQixzQkFBc0IsZ0JBQWdCLEVBQUUsa0JBQWtCLHVCQUF1QixpQkFBaUIsZ0JBQWdCLFdBQVcsaUJBQWlCLHFCQUFxQiwrQ0FBK0MseUJBQXlCLDJCQUEyQixFQUFFLG1CQUFtQix3QkFBd0IsRUFBRSxrQkFBa0IsMEJBQTBCLEVBQUUsbUJBQW1CLHNCQUFzQixzQkFBc0IsRUFBRSx3QkFBd0IscUJBQXFCLG9CQUFvQiwrQkFBK0IsRUFBRTs7QUFFdmxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7QUNiQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUF5QywyQkFBMkI7QUFDcEUsb0RBQW1EOzs7Ozs7OztBQ1ZuRDtBQUNBOzs7QUFHQTtBQUNBLDZDQUE0Qyw0QkFBNEIsd0JBQXdCLHFCQUFxQixFQUFFLGlCQUFpQixnQkFBZ0IsaUNBQWlDLHVCQUF1QixpQkFBaUIsb0JBQW9CLEVBQUUsbUJBQW1CLHFCQUFxQix3QkFBd0IseUJBQXlCLEVBQUUsK0JBQStCLHFCQUFxQixFQUFFLGdDQUFnQyxvQkFBb0IsRUFBRSxzQkFBc0IsNEJBQTRCLEVBQUUsc0JBQXNCLGdCQUFnQixxQkFBcUIsbUJBQW1CLHFCQUFxQixzQkFBc0IsaUJBQWlCLEVBQUUsc0JBQXNCLHNCQUFzQixnQkFBZ0IsRUFBRSx3QkFBd0IsZ0JBQWdCLEVBQUUsdUJBQXVCLHVCQUF1QixjQUFjLGlCQUFpQixrQkFBa0IsV0FBVyxvRUFBNEUsaUNBQWlDLHVCQUF1QixFQUFFLDJCQUEyQixtQkFBbUIsb0JBQW9CLHFCQUFxQix5QkFBeUIsbUJBQW1CLGlCQUFpQixlQUFlLHlCQUF5QixFQUFFLDZCQUE2QixnQkFBZ0IsRUFBRSxzQkFBc0IsZ0JBQWdCLEVBQUUsdUJBQXVCLGdCQUFnQixxQkFBcUIsNkVBQTZFLGtCQUFrQixnQkFBZ0Isa0JBQWtCLEVBQUUseUJBQXlCLGlCQUFpQixxQkFBcUIsdUJBQXVCLGlCQUFpQixFQUFFLHFDQUFxQyxtQkFBbUIsRUFBRSxzQ0FBc0MsbUJBQW1CLEVBQUUseUNBQXlDLGtCQUFrQixtQkFBbUIsbUJBQW1CLHVCQUF1Qix1QkFBdUIsa0JBQWtCLHlCQUF5Qix5QkFBeUIsRUFBRSxpREFBaUQsZUFBZSxFQUFFLCtDQUErQyxvQkFBb0IscUJBQXFCLDJCQUEyQixlQUFlLGdCQUFnQixFQUFFLHdDQUF3QyxrQkFBa0IsRUFBRSx3Q0FBd0Msa0JBQWtCLEVBQUU7O0FBRTNxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7QUNqQkEsc0U7Ozs7Ozs7O0FDQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBeUMsMkJBQTJCO0FBQ3BFLG9EQUFtRDs7Ozs7Ozs7QUNWbkQ7QUFDQTs7O0FBR0E7QUFDQSw2Q0FBNEMscUJBQXFCLGVBQWUsY0FBYyx1QkFBdUIsd0JBQXdCLEVBQUUseUJBQXlCLGtCQUFrQixpQkFBaUIsb0JBQW9CLDZCQUE2QixFQUFFLGlDQUFpQyw2QkFBNkIsc0JBQXNCLEVBQUUsRUFBRTs7QUFFdFY7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7QUNUQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUF5QywyQkFBMkI7QUFDcEUsb0RBQW1EOzs7Ozs7OztBQ1ZuRDtBQUNBOzs7QUFHQTtBQUNBLGlEQUFnRCxtQkFBbUIsc0JBQXNCLHNCQUFzQixnQkFBZ0IsRUFBRSw4QkFBOEIsdUJBQXVCLEVBQUUsaUJBQWlCLHVCQUF1QixhQUFhLFdBQVcsc0JBQXNCLEVBQUUsMEJBQTBCLHdCQUF3QixFQUFFLDRCQUE0QixrQkFBa0IsRUFBRSxvQ0FBb0Msb0JBQW9CLEVBQUU7O0FBRTlhO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0tBQVlFLFM7O0FBQ1o7Ozs7Ozs7Ozs7Ozs7O0FBYkEsS0FBSS9ELGFBQWMsYUFBUSxVQUFLQSxVQUFkLElBQTZCLFVBQVVDLFVBQVYsRUFBc0JDLE1BQXRCLEVBQThCQyxHQUE5QixFQUFtQ0MsSUFBbkMsRUFBeUM7QUFDbkYsU0FBSUMsSUFBSUMsVUFBVUMsTUFBbEI7QUFBQSxTQUEwQkMsSUFBSUgsSUFBSSxDQUFKLEdBQVFILE1BQVIsR0FBaUJFLFNBQVMsSUFBVCxHQUFnQkEsT0FBT0ssT0FBT0Msd0JBQVAsQ0FBZ0NSLE1BQWhDLEVBQXdDQyxHQUF4QyxDQUF2QixHQUFzRUMsSUFBckg7QUFBQSxTQUEySE8sQ0FBM0g7QUFDQSxTQUFJLFFBQU9DLE9BQVAseUNBQU9BLE9BQVAsT0FBbUIsUUFBbkIsSUFBK0IsT0FBT0EsUUFBUUMsUUFBZixLQUE0QixVQUEvRCxFQUEyRUwsSUFBSUksUUFBUUMsUUFBUixDQUFpQlosVUFBakIsRUFBNkJDLE1BQTdCLEVBQXFDQyxHQUFyQyxFQUEwQ0MsSUFBMUMsQ0FBSixDQUEzRSxLQUNLLEtBQUssSUFBSVUsSUFBSWIsV0FBV00sTUFBWCxHQUFvQixDQUFqQyxFQUFvQ08sS0FBSyxDQUF6QyxFQUE0Q0EsR0FBNUM7QUFBaUQsYUFBSUgsSUFBSVYsV0FBV2EsQ0FBWCxDQUFSLEVBQXVCTixJQUFJLENBQUNILElBQUksQ0FBSixHQUFRTSxFQUFFSCxDQUFGLENBQVIsR0FBZUgsSUFBSSxDQUFKLEdBQVFNLEVBQUVULE1BQUYsRUFBVUMsR0FBVixFQUFlSyxDQUFmLENBQVIsR0FBNEJHLEVBQUVULE1BQUYsRUFBVUMsR0FBVixDQUE1QyxLQUErREssQ0FBbkU7QUFBeEUsTUFDTCxPQUFPSCxJQUFJLENBQUosSUFBU0csQ0FBVCxJQUFjQyxPQUFPTSxjQUFQLENBQXNCYixNQUF0QixFQUE4QkMsR0FBOUIsRUFBbUNLLENBQW5DLENBQWQsRUFBcURBLENBQTVEO0FBQ0gsRUFMRDs7QUFjQSxLQUFNcUIsU0FBUyxtQkFBQUMsQ0FBUSxHQUFSLENBQWY7QUFDQSxLQUFJa0M7QUFBQTs7QUFDQSxxQkFBWS9DLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDVEEsS0FEUztBQUVsQjs7QUFIRDtBQUFBO0FBQUEsb0NBT21CO0FBQUEsaUJBQVZnRCxJQUFVLHVFQUFILENBQUc7O0FBQ2Ysa0JBQUtoRCxLQUFMLENBQVdpRCxTQUFYLENBQXFCLEVBQUVELFVBQUYsRUFBckIsRUFBK0IsUUFBL0I7QUFDSDtBQVREO0FBQUE7QUFBQSw2Q0FVb0I7QUFDaEIsa0JBQUtFLFFBQUw7QUFDSDtBQVpEO0FBQUE7QUFBQSxrQ0FhUztBQUFBOztBQUFBLDBCQUNpQyxLQUFLbEQsS0FEdEM7QUFBQSxpQkFDR21ELFFBREgsVUFDR0EsUUFESDtBQUFBLGlCQUNhQyxlQURiLFVBQ2FBLGVBRGI7O0FBRUwsb0JBQVEsZ0JBQU0xQyxhQUFOLHNCQUErQixFQUFFYyxXQUFXLFNBQWIsRUFBL0IsRUFDSixnQkFBTWQsYUFBTiw0QkFBcUMsRUFBRU0sT0FBTyxNQUFULEVBQWlCRSxjQUFjLEtBQUtsQixLQUFMLENBQVdxRCxXQUExQyxFQUF1RHRDLFlBQVlxQyxlQUFuRSxFQUFyQyxDQURJLEVBRUpELGFBQWEsQ0FBYixJQUFtQixnQkFBTXpDLGFBQU4sbUJBQTRCLEVBQUU0QyxTQUFTLG1CQUFNO0FBQUUsNEJBQUtKLFFBQUwsQ0FBY0MsUUFBZDtBQUEwQixrQkFBN0MsRUFBK0N4QyxXQUFXLGVBQTFELEVBQTJFNEMsT0FBTyxHQUFsRixFQUF1RlYsT0FBTyxPQUE5RixFQUE1QixFQUFxSU8sa0JBQWtCLFNBQWxCLEdBQThCLE1BQW5LLENBRmYsQ0FBUjtBQUdIO0FBbEJEO0FBQUE7QUFBQSx5Q0FJNEI7QUFBQSxpQkFBVEksS0FBUyxRQUFUQSxLQUFTOztBQUN4QixvQkFBT0EsTUFBTUMsUUFBTixDQUFlLHlCQUFmLENBQVA7QUFDSDtBQU5EOztBQUFBO0FBQUEsb0JBQUo7QUFvQkFWLFVBQVNoRSxXQUFXLENBQ2hCLCtCQUFXNkIsTUFBWCxDQURnQixDQUFYLEVBRU5tQyxNQUZNLENBQVQ7QUFHQSxVQUFTVyxlQUFULENBQXlCekQsS0FBekIsRUFBZ0MwRCxRQUFoQyxFQUEwQztBQUN0QyxZQUFPO0FBQ0hOLHNCQUFhUCxVQUFVYyxLQUFWLENBQWdCLFFBQWhCLEVBQTBCM0QsS0FBMUIsQ0FEVjtBQUVIbUQsMEJBQWlCTixVQUFVZSxNQUFWLENBQWlCQyxvQkFBakIsQ0FBc0MsT0FBdEMsRUFBK0MsUUFBL0MsRUFBeUQ3RCxLQUF6RCxDQUZkO0FBR0hrRCxtQkFBVUwsVUFBVWUsTUFBVixDQUFpQlYsUUFBakIsQ0FBMEIsT0FBMUIsRUFBbUMsUUFBbkMsRUFBNkNsRCxLQUE3QztBQUhQLE1BQVA7QUFLSDttQkFDYyx5QkFBUXlELGVBQVIsRUFBeUIsRUFBRVQsNkJBQUYsRUFBYWMsMkNBQWIsRUFBekIsRUFBMERoQixNQUExRCxDOzs7Ozs7OztBQzVDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUF5QywyQkFBMkI7QUFDcEUsb0RBQW1EOzs7Ozs7OztBQ1ZuRDtBQUNBOzs7QUFHQTtBQUNBLGlEQUFnRCxzQkFBc0IsbUJBQW1CLEVBQUU7O0FBRTNGO0FBQ0E7QUFDQTtBQUNBLEciLCJmaWxlIjoiNC40LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJztcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvaW5kZXgudHNcbiAqKi8iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9hZGluZy5zY3NzJztcbmxldCBMb2FkaW5nID0gY2xhc3MgTG9hZGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZHluYW1pY1RleHQ6ICcnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5keW5hbWljVGV4dC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZHluYW1pY1RleHQ6ICcnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGR5bmFtaWNUZXh0OiB0aGlzLnN0YXRlLmR5bmFtaWNUZXh0ICsgJy4nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB0ZXh0LCBjZW50ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgZHluYW1pY1RleHQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHdyYXBDbGFzcyA9IGNsYXNzbmFtZXMoe1xuICAgICAgICAgICAgJ2xvYWRpbmctd3JhcC0tY2VudGVyJzogY2VudGVyLFxuICAgICAgICAgICAgJ2xvYWRpbmctd3JhcCc6ICFjZW50ZXJcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlTmFtZTogd3JhcENsYXNzIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlTmFtZTogXCJ0ZXh0LWxvYWRpbmdcIiB9LCB0ZXh0ICsgZHluYW1pY1RleHQpKSk7XG4gICAgfVxufTtcbkxvYWRpbmcgPSBfX2RlY29yYXRlKFtcbiAgICBDU1NNb2R1bGVzKHN0eWxlcylcbl0sIExvYWRpbmcpO1xuTG9hZGluZ1snZGVmYXVsdFByb3BzJ10gPSB7XG4gICAgdGV4dDogJ+WKoOi9veS4rSdcbn07XG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL0xvYWRpbmcudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9Mb2FkaW5nLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL0xvYWRpbmcuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDdcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50ZXh0LWxvYWRpbmdfM2VmcWgge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiA1MHB4IDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICM5OTk7IH1cXG5cXG4udGV4dC1sb2FkaW5nXzNlZnFoIHtcXG4gIG1hcmdpbjogMzBweCAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLmxvYWRpbmctd3JhcF9odHlZeiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLmxvYWRpbmctd3JhcC0tY2VudGVyXzNQRUloIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInRleHQtbG9hZGluZ1wiOiBcInRleHQtbG9hZGluZ18zZWZxaFwiLFxuXHRcImxvYWRpbmctd3JhcFwiOiBcImxvYWRpbmctd3JhcF9odHlZelwiLFxuXHRcImxvYWRpbmctd3JhcC0tY2VudGVyXCI6IFwibG9hZGluZy13cmFwLS1jZW50ZXJfM1BFSWhcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9Mb2FkaW5nLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA3XG4gKiovIiwiaW1wb3J0IEJvb2tMaXN0U2VjdGlvbiBmcm9tICcuL0Jvb2tMaXN0U2VjdGlvbic7XG5leHBvcnQgZGVmYXVsdCBCb29rTGlzdFNlY3Rpb247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3RTZWN0aW9uL2luZGV4LnRzXG4gKiovIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IEJvb2tMaXN0IGZyb20gJy4uL0Jvb2tMaXN0JztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uLy4uL2VsZW1lbnRzL0xvYWRpbmcnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vZWxlbWVudHMvSWNvbic7XG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0Jvb2tMaXN0U2VjdGlvbi5zY3NzJyk7XG5sZXQgQm9va0xpc3RTZWN0aW9uID0gY2xhc3MgQm9va0xpc3RTZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaXNGZXRjaGluZywgdGl0bGUsIG1vcmVMaW5rLCBib29rRW50aXRpZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlTmFtZTogXCJib29rLWxpc3Qtc2VjdGlvblwiIH0sXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRpdGxlICYmIChtb3JlTGlua1xuICAgICAgICAgICAgICAgID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7IHN0eWxlTmFtZTogXCJzZWN0aW9uLXRpdGxlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7IHRvOiBtb3JlTGluayB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgbmFtZTogXCJhcnJvd1JpZ2h0XCIsIHNpemU6IDIwIH0pKSkpXG4gICAgICAgICAgICAgICAgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgc3R5bGVOYW1lOiBcInNlY3Rpb24tdGl0bGVcIiB9LCB0aXRsZSkpKSxcbiAgICAgICAgICAgIGlzRmV0Y2hpbmcgJiYgYm9va0VudGl0aWVzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgID8gUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nLCBudWxsKVxuICAgICAgICAgICAgICAgIDogUmVhY3QuY3JlYXRlRWxlbWVudChCb29rTGlzdCwgeyBib29rRW50aXRpZXM6IGJvb2tFbnRpdGllcyB9KSkpO1xuICAgIH1cbn07XG5Cb29rTGlzdFNlY3Rpb24gPSBfX2RlY29yYXRlKFtcbiAgICBDU1NNb2R1bGVzKHN0eWxlcywge1xuICAgICAgICBhbGxvd011bHRpcGxlOiB0cnVlXG4gICAgfSlcbl0sIEJvb2tMaXN0U2VjdGlvbik7XG5leHBvcnQgZGVmYXVsdCBCb29rTGlzdFNlY3Rpb247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3RTZWN0aW9uL0Jvb2tMaXN0U2VjdGlvbi50c3hcbiAqKi8iLCJpbXBvcnQgQm9va0xpc3QgZnJvbSAnLi9Cb29rTGlzdCc7XG5leHBvcnQgZGVmYXVsdCBCb29rTGlzdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdC9pbmRleC50c1xuICoqLyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm9vayBmcm9tICcuLi9Cb29rJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vQm9va0xpc3Quc2NzcycpO1xubGV0IEJvb2tMaXN0ID0gY2xhc3MgQm9va0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgeyBzdHlsZU5hbWU6IFwiYm9vay1saXN0XCIsIGNsYXNzTmFtZTogXCJjbGVhcmZpeFwiIH0sIHRoaXMucHJvcHMuYm9va0VudGl0aWVzICYmIHRoaXMucHJvcHMuYm9va0VudGl0aWVzLmxlbmd0aCAhPT0gMFxuICAgICAgICAgICAgPyAodGhpcy5wcm9wcy5ib29rRW50aXRpZXMubWFwKChib29rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdGl0bGUsIGF1dGhvcnMsIGRlc2NyaXB0aW9uLCBjb3ZlciB9ID0gYm9vaztcbiAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IGtleTogaW5kZXggfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb29rLCB7IGlkOiBib29rLmlkLCB0aXRsZTogdGl0bGUgfHwgJ+aXoOagh+mimCcsIGF1dGhvcnM6IGF1dGhvcnMgJiYgYXV0aG9ycy5tYXAoYXV0aG9yID0+IGF1dGhvci5uYW1lKS5qb2luKCcsICcpIHx8ICfmnKrnn6XkvZzogIUnLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIGNvdmVyOiBjb3ZlciwgZGlzYWJsZVBvcHVwOiB0cnVlIH0pKSk7XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBcIlxcdTY2ODJcXHU2NUUwXFx1OEJCMFxcdTVGNTVcIikpKSk7XG4gICAgfVxufTtcbkJvb2tMaXN0ID0gX19kZWNvcmF0ZShbXG4gICAgQ1NTTW9kdWxlcyhzdHlsZXMpXG5dLCBCb29rTGlzdCk7XG5leHBvcnQgZGVmYXVsdCBCb29rTGlzdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdC9Cb29rTGlzdC50c3hcbiAqKi8iLCJpbXBvcnQgQm9vayBmcm9tICcuL0Jvb2snO1xuZXhwb3J0IGRlZmF1bHQgQm9vaztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rL2luZGV4LnRzXG4gKiovIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IEJvb2tJbmZvUG9wdXAgZnJvbSAnLi4vQm9va0luZm9Qb3B1cCc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL19ib29rLnNjc3MnKTtcbmxldCBCb29rID0gY2xhc3MgQm9vayBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvd1BvcHVwOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNob3dQb3B1cCA9IHRoaXMuc2hvd1BvcHVwLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGlkZVBvcHVwID0gdGhpcy5oaWRlUG9wdXAuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgc2hvd1BvcHVwKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dQb3B1cDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGlkZVBvcHVwKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dQb3B1cDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzaG93RGVzYywgZGVzY3JpcHRpb24sIGNvdmVyIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBvbk1vdXNlRW50ZXI6IHRoaXMuc2hvd1BvcHVwLCBvbk1vdXNlTGVhdmU6IHRoaXMuaGlkZVBvcHVwLCBzdHlsZU5hbWU6IFwiYm9vay0tY2FyZFwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHsgdG86ICcvYm9vay8nICsgdGhpcy5wcm9wcy5pZCB9LFxuICAgICAgICAgICAgICAgIGNvdmVyICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcImJvb2stY292ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiB0aGlzLnByb3BzLmNvdmVyIH0pKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlTmFtZTogXCJib29rLW1ldGFcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlLCBzdHlsZU5hbWU6IFwiYm9vay1uYW1lXCIgfSwgdGhpcy5wcm9wcy50aXRsZSB8fCAn5peg5qCH6aKYJyksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGVOYW1lOiBcImJvb2stYXV0aG9yXCIgfSwgdGhpcy5wcm9wcy5hdXRob3JzIHx8ICfkvZzogIXkuI3or6YnKSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0Rlc2MgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGVOYW1lOiBcImJvb2stZGVzY1wiIH0sIGRlc2NyaXB0aW9uIHx8ICfnqbonKSkpKSxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1BvcHVwICYmICF0aGlzLnByb3BzLmRpc2FibGVQb3B1cCAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb29rSW5mb1BvcHVwLCB7IGJvb2tJZDogdGhpcy5wcm9wcy5pZCwgdGl0bGU6IHRoaXMucHJvcHMudGl0bGUsIGF1dGhvcjogdGhpcy5wcm9wcy5hdXRob3JzLCBkZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5kZXNjcmlwdGlvbiB9KSkpKTtcbiAgICB9XG59O1xuQm9vayA9IF9fZGVjb3JhdGUoW1xuICAgIENTU01vZHVsZXMoc3R5bGVzLCB7XG4gICAgICAgIGFsbG93TXVsdGlwbGU6IHRydWVcbiAgICB9KVxuXSwgQm9vayk7XG5leHBvcnQgZGVmYXVsdCBCb29rO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2svQm9vay50c3hcbiAqKi8iLCJpbXBvcnQgQm9va0luZm9Qb3B1cCBmcm9tICcuL0Jvb2tJbmZvUG9wdXAnO1xuZXhwb3J0IGRlZmF1bHQgQm9va0luZm9Qb3B1cDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL2luZGV4LnRzXG4gKiovIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0nO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Cb29rSW5mb1BvcHVwLnNjc3MnKTtcbmxldCBCb29rSW5mb1BvcHVwID0gY2xhc3MgQm9va0luZm9Qb3B1cCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYXV0aG9yLCB0aXRsZSwgZGVzY3JpcHRpb24sIGJvb2tJZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcInBvcHVwXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZU5hbWU6IFwiaGVhZGVyXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBzdHlsZU5hbWU6IFwidGl0bGVcIiB9LCB0aXRsZSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgeyBzdHlsZU5hbWU6IFwiYXV0aG9yXCIgfSwgYXV0aG9yKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBjb2xvcjogXCJibHVlXCIsIHRvOiAnL3ZpZXdlci9ib29rLycgKyBib29rSWQgfSwgXCJcXHU5NjA1XFx1OEJGQlwiKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcImRlc2NyaXB0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBkZXNjcmlwdGlvbikpKSk7XG4gICAgfVxufTtcbkJvb2tJbmZvUG9wdXAgPSBfX2RlY29yYXRlKFtcbiAgICBDU1NNb2R1bGVzKHN0eWxlcywge1xuICAgICAgICBhbGxvd011bHRpcGxlOiB0cnVlXG4gICAgfSlcbl0sIEJvb2tJbmZvUG9wdXApO1xuZXhwb3J0IGRlZmF1bHQgQm9va0luZm9Qb3B1cDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL0Jvb2tJbmZvUG9wdXAudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9Cb29rSW5mb1BvcHVwLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tJbmZvUG9wdXAvQm9va0luZm9Qb3B1cC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjc0XG4gKiogbW9kdWxlIGNodW5rcyA9IDMgNCA3IDEwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGl0bGVfQlZPN2Uge1xcbiAgbWFyZ2luOiAzNXB4IDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMzMzM7IH1cXG5cXG4ucG9wdXBfTVBDcXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogOTk5O1xcbiAgbGVmdDogMTM0cHg7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xcbiAgcGFkZGluZzogMjBweCAyMHB4IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyB9XFxuXFxuLmhlYWRlcl8xSW5JZiB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XFxuXFxuLnRpdGxlX0JWTzdlIHtcXG4gIG1hcmdpbjogMzBweCAwIDEwcHggMDsgfVxcblxcbi5hdXRob3JfMjhCaUEge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBtYXJnaW46IDAgMCAyZW0gMDsgfVxcblxcbi5kZXNjcmlwdGlvbl9EOXJWTiB7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ0aXRsZVwiOiBcInRpdGxlX0JWTzdlXCIsXG5cdFwicG9wdXBcIjogXCJwb3B1cF9NUENxclwiLFxuXHRcImhlYWRlclwiOiBcImhlYWRlcl8xSW5JZlwiLFxuXHRcImF1dGhvclwiOiBcImF1dGhvcl8yOEJpQVwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiZGVzY3JpcHRpb25fRDlyVk5cIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL0Jvb2tJbmZvUG9wdXAuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI3NVxuICoqIG1vZHVsZSBjaHVua3MgPSAzIDQgNyAxMFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vX2Jvb2suc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9vay9fYm9vay5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjc2XG4gKiogbW9kdWxlIGNodW5rcyA9IDMgNCA3IDEwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWV0YS1pdGVtXzJjUnlKIHtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4uYm9va18zT3F6XyB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTUwcHg7XFxuICBwYWRkaW5nOiAwIDEwcHg7IH1cXG4gIC5ib29rXzNPcXpfIGEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgICAuYm9va18zT3F6XyBhOmhvdmVyIGltZyB7XFxuICAgICAgb3BhY2l0eTogLjk2OyB9XFxuICAgIC5ib29rXzNPcXpfIGE6YWN0aXZlIGltZyB7XFxuICAgICAgb3BhY2l0eTogLjg7IH1cXG5cXG4uYm9vay1tZXRhXzNnbGNaIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XFxuXFxuLm1ldGEtaXRlbV8yY1J5SiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBtYXJnaW4tbGVmdDogMTdweDtcXG4gIHdpZHRoOiAxMzRweDsgfVxcblxcbi5ib29rLW5hbWVfMmpJdVoge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBjb2xvcjogIzMzMzsgfVxcblxcbi5ib29rLWF1dGhvcl8xVk03ZSB7XFxuICBjb2xvcjogIzk5OTsgfVxcblxcbi5ib29rLWNvdmVyXzFqcks4IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMzRweDtcXG4gIGhlaWdodDogMTg0cHg7XFxuICB0b3A6IDA7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyByZXF1aXJlKFwiYXNzZXRzL2ltZy9zaGFkb3cucG5nXCIpICsgXCIpIG5vLXJlcGVhdCB0b3A7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlIDBzO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuYm9vay1jb3Zlcl8xanJLOCBpbWcge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbGVmdDogMTdweDtcXG4gICAgdG9wOiA3cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgfVxcbiAgLmJvb2stY292ZXJfMWpySzg6aG92ZXIge1xcbiAgICB0b3A6IC03cHg7IH1cXG5cXG4uYm9vay1kZXNjX3hGRktsIHtcXG4gIGNvbG9yOiAjOTk5OyB9XFxuXFxuLmJvb2stLWNhcmRfM0ZPa3kge1xcbiAgd2lkdGg6IGF1dG87XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZsb2F0OiBub25lO1xcbiAgaGVpZ2h0OiAxMDBweDsgfVxcbiAgLmJvb2stLWNhcmRfM0ZPa3kgYSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICAgIC5ib29rLS1jYXJkXzNGT2t5IGE6aG92ZXIgaW1nIHtcXG4gICAgICBvcGFjaXR5OiAxOyB9XFxuICAgIC5ib29rLS1jYXJkXzNGT2t5IGE6YWN0aXZlIGltZyB7XFxuICAgICAgb3BhY2l0eTogMTsgfVxcbiAgLmJvb2stLWNhcmRfM0ZPa3kgLmJvb2stY292ZXJfMWpySzgge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDsgfVxcbiAgICAuYm9vay0tY2FyZF8zRk9reSAuYm9vay1jb3Zlcl8xanJLODpob3ZlciB7XFxuICAgICAgdG9wOiAwOyB9XFxuICAgIC5ib29rLS1jYXJkXzNGT2t5IC5ib29rLWNvdmVyXzFqcks4IGltZyB7XFxuICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDsgfVxcbiAgLmJvb2stLWNhcmRfM0ZPa3kgLmJvb2stbWV0YV8zZ2xjWiB7XFxuICAgIGZsb2F0OiBub25lOyB9XFxuICAuYm9vay0tY2FyZF8zRk9reSAubWV0YS1pdGVtXzJjUnlKIHtcXG4gICAgd2lkdGg6IGF1dG87IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJtZXRhLWl0ZW1cIjogXCJtZXRhLWl0ZW1fMmNSeUpcIixcblx0XCJib29rXCI6IFwiYm9va18zT3F6X1wiLFxuXHRcImJvb2stbWV0YVwiOiBcImJvb2stbWV0YV8zZ2xjWlwiLFxuXHRcImJvb2stbmFtZVwiOiBcImJvb2stbmFtZV8yakl1WiBtZXRhLWl0ZW1fMmNSeUpcIixcblx0XCJib29rLWF1dGhvclwiOiBcImJvb2stYXV0aG9yXzFWTTdlIG1ldGEtaXRlbV8yY1J5SlwiLFxuXHRcImJvb2stY292ZXJcIjogXCJib29rLWNvdmVyXzFqcks4XCIsXG5cdFwiYm9vay1kZXNjXCI6IFwiYm9vay1kZXNjX3hGRktsXCIsXG5cdFwiYm9vay0tY2FyZFwiOiBcImJvb2stLWNhcmRfM0ZPa3kgYm9va18zT3F6X1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2svX2Jvb2suc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI3N1xuICoqIG1vZHVsZSBjaHVua3MgPSAzIDQgNyAxMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9zaGFkb3cuNDcxZWEzN2Y5Ni5wbmdcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2Fzc2V0cy9pbWcvc2hhZG93LnBuZ1xuICoqIG1vZHVsZSBpZCA9IDI3OFxuICoqIG1vZHVsZSBjaHVua3MgPSAzIDQgNyAxMFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vQm9va0xpc3Quc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3QvQm9va0xpc3Quc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI3OVxuICoqIG1vZHVsZSBjaHVua3MgPSAzIDQgNyAxMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJvb2stbGlzdF8yc19KbCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcXG4gIG1hcmdpbi1yaWdodDogLTEwcHg7IH1cXG4gIC5ib29rLWxpc3RfMnNfSmwgbGkge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTQwcHgpIHtcXG4gICAgICAuYm9vay1saXN0XzJzX0psIGxpIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlOyB9IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJib29rLWxpc3RcIjogXCJib29rLWxpc3RfMnNfSmxcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdC9Cb29rTGlzdC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjgwXG4gKiogbW9kdWxlIGNodW5rcyA9IDMgNCA3IDEwXG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9Cb29rTGlzdFNlY3Rpb24uc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3RTZWN0aW9uL0Jvb2tMaXN0U2VjdGlvbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjgxXG4gKiogbW9kdWxlIGNodW5rcyA9IDMgNCA3XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2VjdGlvbi10aXRsZV8yS3YzRCB7XFxuICBtYXJnaW46IDM1cHggMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzMzMzsgfVxcblxcbi5ib29rLWxpc3Qtc2VjdGlvbl8yQ2ZEZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4ubW9yZV9tZ1FIZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4OyB9XFxuXFxuLnNlY3Rpb24tdGl0bGVfMkt2M0Qge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgLnNlY3Rpb24tdGl0bGVfMkt2M0QgYSB7XFxuICAgIGNvbG9yOiAjMzMzOyB9XFxuICAgIC5zZWN0aW9uLXRpdGxlXzJLdjNEIGE6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjNjY2OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic2VjdGlvbi10aXRsZVwiOiBcInNlY3Rpb24tdGl0bGVfMkt2M0RcIixcblx0XCJib29rLWxpc3Qtc2VjdGlvblwiOiBcImJvb2stbGlzdC1zZWN0aW9uXzJDZkRlXCIsXG5cdFwibW9yZVwiOiBcIm1vcmVfbWdRSGdcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdFNlY3Rpb24vQm9va0xpc3RTZWN0aW9uLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyODJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMyA0IDdcbiAqKi8iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vZWxlbWVudHMvQnV0dG9uJztcbmltcG9ydCBCb29rTGlzdFNlY3Rpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Cb29rTGlzdFNlY3Rpb24nO1xuaW1wb3J0IHsgbG9hZEJvb2tzLCBmZXRjaENvbGxlY3Rpb25zIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2VsZW1lbnRzL0NvbnRhaW5lcic7XG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vc3RvcmUvc2VsZWN0b3JzJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vQnJvd3NlLnNjc3MnKTtcbmxldCBCcm93c2UgPSBjbGFzcyBCcm93c2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgc3RhdGljIGZldGNoRGF0YSh7IHN0b3JlIH0pIHtcbiAgICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGxvYWRCb29rcygpKTtcbiAgICB9XG4gICAgbG9hZE1vcmUocGFnZSA9IDEpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5sb2FkQm9va3MoeyBwYWdlIH0sICdicm93c2UnKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMubG9hZE1vcmUoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IG5leHRQYWdlLCBpc0Jvb2tzRmV0Y2hpbmcgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIHsgY2xhc3NOYW1lOiBcImFyY2hpdmVcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb29rTGlzdFNlY3Rpb24sIHsgdGl0bGU6IFwi5omA5pyJ5Lmm57GNXCIsIGJvb2tFbnRpdGllczogdGhpcy5wcm9wcy5uZXdlc3RCb29rcywgaXNGZXRjaGluZzogaXNCb29rc0ZldGNoaW5nIH0pLFxuICAgICAgICAgICAgbmV4dFBhZ2UgIT09IDAgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IG9uQ2xpY2s6ICgpID0+IHsgdGhpcy5sb2FkTW9yZShuZXh0UGFnZSk7IH0sIHN0eWxlTmFtZTogXCJidG4tbG9hZC1tb3JlXCIsIHdpZHRoOiAyMDAsIGNvbG9yOiBcIndoaXRlXCIgfSwgaXNCb29rc0ZldGNoaW5nID8gJ+WKoOi9veS4rSAuLi4nIDogJ+WKoOi9veabtOWkmicpKSkpO1xuICAgIH1cbn07XG5Ccm93c2UgPSBfX2RlY29yYXRlKFtcbiAgICBDU1NNb2R1bGVzKHN0eWxlcylcbl0sIEJyb3dzZSk7XG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmV3ZXN0Qm9va3M6IHNlbGVjdG9ycy5ib29rcygnYnJvd3NlJykoc3RhdGUpLFxuICAgICAgICBpc0Jvb2tzRmV0Y2hpbmc6IHNlbGVjdG9ycy5jb21tb24uaXNQYWdpbmF0aW9uRmV0Y2hpbmcoJ2Jvb2tzJywgJ2Jyb3dzZScpKHN0YXRlKSxcbiAgICAgICAgbmV4dFBhZ2U6IHNlbGVjdG9ycy5jb21tb24ubmV4dFBhZ2UoJ2Jvb2tzJywgJ2Jyb3dzZScpKHN0YXRlKVxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBsb2FkQm9va3MsIGZldGNoQ29sbGVjdGlvbnMgfSkoQnJvd3NlKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL0Jyb3dzZS9Ccm93c2UudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9Ccm93c2Uuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Ccm93c2UvQnJvd3NlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyODdcbiAqKiBtb2R1bGUgY2h1bmtzID0gNFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJ0bi1sb2FkLW1vcmVfMjZzZFEge1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImJ0bi1sb2FkLW1vcmVcIjogXCJidG4tbG9hZC1tb3JlXzI2c2RRXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Ccm93c2UvQnJvd3NlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyODhcbiAqKiBtb2R1bGUgY2h1bmtzID0gNFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=