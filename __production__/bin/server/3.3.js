exports.ids = [3];
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
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(122);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _classnames = __webpack_require__(120);
	
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
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
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

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(89);
	
	var _actions = __webpack_require__(90);
	
	var _selectors = __webpack_require__(110);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _BookListSection = __webpack_require__(266);
	
	var _BookListSection2 = _interopRequireDefault(_BookListSection);
	
	var _DocContainer = __webpack_require__(201);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _form = __webpack_require__(147);
	
	var _reactCssModules = __webpack_require__(122);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _layout = __webpack_require__(170);
	
	var _AppHome = __webpack_require__(283);
	
	var _AppHome2 = _interopRequireDefault(_AppHome);
	
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
	
	var Home = function (_Component) {
	    _inherits(Home, _Component);
	
	    function Home(props) {
	        _classCallCheck(this, Home);
	
	        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
	
	        _this.state = {
	            showRecentReading: false
	        };
	        return _this;
	    }
	
	    _createClass(Home, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.props.loadBooks();
	            this.props.fetchCollections();
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.session.isFetching && !nextProps.session.isFetching) {
	                if (nextProps.session.user.role !== 'visitor') {
	                    this.setState({
	                        showRecentReading: true
	                    });
	                }
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var newestBooks = _props.newestBooks;
	            var isBooksFetching = _props.isBooksFetching;
	
	            return _react2.default.createElement(_DocContainer2.default, { bodyClass: "home" }, this.props.session.user.role === 'visitor' && this.props.session.isFetching === false && _react2.default.createElement("div", { styleName: "hero-image" }, _react2.default.createElement(_layout.Container, null, _react2.default.createElement("div", { styleName: "logo" }, "Readr"), _react2.default.createElement("h1", { styleName: "page-title" }, "\u65B0\u7684\u9605\u8BFB\u4F53\u9A8C"), _react2.default.createElement(_form.Button, { to: "/signup" }, "\u73B0\u5728\u52A0\u5165"))), _react2.default.createElement(_layout.Container, null, _react2.default.createElement(_BookListSection2.default, { bookEntities: newestBooks.slice(0, 6), title: "新书速递", moreLink: "/browse", isFetching: isBooksFetching })));
	        }
	    }], [{
	        key: "fetchData",
	        value: function fetchData(_ref) {
	            var store = _ref.store;
	
	            return store.dispatch((0, _actions.loadBooks)());
	        }
	    }]);
	
	    return Home;
	}(_react.Component);
	Home = __decorate([(0, _reactCssModules2.default)(_AppHome2.default)], Home);
	function mapStateToProps(state, ownProps) {
	    return {
	        newestBooks: selectors.books(undefined, '1')(state),
	        isBooksFetching: selectors.common.isPaginationFetching('books')(state),
	        session: state.session
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { loadBooks: _actions.loadBooks, fetchCollections: _actions.fetchCollections, sendNotification: _actions.sendNotification })(Home);

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
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(63);
	
	var _BookList = __webpack_require__(268);
	
	var _BookList2 = _interopRequireDefault(_BookList);
	
	var _Loading = __webpack_require__(256);
	
	var _Loading2 = _interopRequireDefault(_Loading);
	
	var _reactCssModules = __webpack_require__(122);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _Icon = __webpack_require__(118);
	
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
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Book = __webpack_require__(270);
	
	var _Book2 = _interopRequireDefault(_Book);
	
	var _reactCssModules = __webpack_require__(122);
	
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
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(63);
	
	var _BookInfoPopup = __webpack_require__(272);
	
	var _BookInfoPopup2 = _interopRequireDefault(_BookInfoPopup);
	
	var _reactCssModules = __webpack_require__(122);
	
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
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _form = __webpack_require__(147);
	
	var _reactCssModules = __webpack_require__(122);
	
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
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
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
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
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
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
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
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
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

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(284);
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
	// imports
	
	
	// module
	exports.push([module.id, ".page-title_Z366V {\n  margin: 35px 0;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #333; }\n\n.hero-image_14ZUX {\n  text-align: center;\n  height: 500px; }\n\n.logo_siT7A {\n  text-align: center;\n  padding-top: 150px;\n  font-size: 1.2rem; }\n\n.btn_1dcmq {\n  margin: 0 auto; }\n\n.page-title_Z366V {\n  margin: 10px 0 20px;\n  font-size: 2rem; }\n", ""]);
	
	// exports
	exports.locals = {
		"page-title": "page-title_Z366V",
		"hero-image": "hero-image_14ZUX",
		"logo": "logo_siT7A",
		"btn": "btn_1dcmq"
	};

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL2luZGV4LnRzPzk5YjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9Mb2FkaW5nLnRzeD9kZGFmIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy5zY3NzPzEwZGIqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy5zY3NzPzYxYTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FwcEhvbWUvQXBwSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdFNlY3Rpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdFNlY3Rpb24vQm9va0xpc3RTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3QvQm9va0xpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9vay9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2svQm9vay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0luZm9Qb3B1cC9Cb29rSW5mb1BvcHVwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tJbmZvUG9wdXAvQm9va0luZm9Qb3B1cC5zY3NzPzM1NmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL0Jvb2tJbmZvUG9wdXAuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2svX2Jvb2suc2Nzcz9lODE2Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9vay9fYm9vay5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1nL3NoYWRvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdC9Cb29rTGlzdC5zY3NzPzhlMzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdC9Cb29rTGlzdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3RTZWN0aW9uL0Jvb2tMaXN0U2VjdGlvbi5zY3NzPzBlYmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdFNlY3Rpb24vQm9va0xpc3RTZWN0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FwcEhvbWUvQXBwSG9tZS5zY3NzPzljZGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FwcEhvbWUvQXBwSG9tZS5zY3NzIl0sIm5hbWVzIjpbIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZCIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsIkxvYWRpbmciLCJwcm9wcyIsInN0YXRlIiwiZHluYW1pY1RleHQiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJzZXRTdGF0ZSIsImNsZWFySW50ZXJ2YWwiLCJ0ZXh0IiwiY2VudGVyIiwid3JhcENsYXNzIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlTmFtZSIsInNlbGVjdG9ycyIsIkhvbWUiLCJzaG93UmVjZW50UmVhZGluZyIsImxvYWRCb29rcyIsImZldGNoQ29sbGVjdGlvbnMiLCJuZXh0UHJvcHMiLCJzZXNzaW9uIiwiaXNGZXRjaGluZyIsInVzZXIiLCJyb2xlIiwibmV3ZXN0Qm9va3MiLCJpc0Jvb2tzRmV0Y2hpbmciLCJib2R5Q2xhc3MiLCJ0byIsImJvb2tFbnRpdGllcyIsInNsaWNlIiwidGl0bGUiLCJtb3JlTGluayIsInN0b3JlIiwiZGlzcGF0Y2giLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsImJvb2tzIiwidW5kZWZpbmVkIiwiY29tbW9uIiwiaXNQYWdpbmF0aW9uRmV0Y2hpbmciLCJzZW5kTm90aWZpY2F0aW9uIiwic3R5bGVzIiwicmVxdWlyZSIsIkJvb2tMaXN0U2VjdGlvbiIsIm5hbWUiLCJzaXplIiwiYWxsb3dNdWx0aXBsZSIsIkJvb2tMaXN0IiwiY2xhc3NOYW1lIiwibWFwIiwiYm9vayIsImluZGV4IiwiYXV0aG9ycyIsImRlc2NyaXB0aW9uIiwiY292ZXIiLCJpZCIsImF1dGhvciIsImpvaW4iLCJkaXNhYmxlUG9wdXAiLCJCb29rIiwic2hvd1BvcHVwIiwiYmluZCIsImhpZGVQb3B1cCIsInNob3dEZXNjIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwic3JjIiwiYm9va0lkIiwiQm9va0luZm9Qb3B1cCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBVEEsS0FBSUEsYUFBYyxhQUFRLFVBQUtBLFVBQWQsSUFBNkIsVUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNuRixTQUFJQyxJQUFJQyxVQUFVQyxNQUFsQjtBQUFBLFNBQTBCQyxJQUFJSCxJQUFJLENBQUosR0FBUUgsTUFBUixHQUFpQkUsU0FBUyxJQUFULEdBQWdCQSxPQUFPSyxPQUFPQyx3QkFBUCxDQUFnQ1IsTUFBaEMsRUFBd0NDLEdBQXhDLENBQXZCLEdBQXNFQyxJQUFySDtBQUFBLFNBQTJITyxDQUEzSDtBQUNBLFNBQUksUUFBT0MsT0FBUCx5Q0FBT0EsT0FBUCxPQUFtQixRQUFuQixJQUErQixPQUFPQSxRQUFRQyxRQUFmLEtBQTRCLFVBQS9ELEVBQTJFTCxJQUFJSSxRQUFRQyxRQUFSLENBQWlCWixVQUFqQixFQUE2QkMsTUFBN0IsRUFBcUNDLEdBQXJDLEVBQTBDQyxJQUExQyxDQUFKLENBQTNFLEtBQ0ssS0FBSyxJQUFJVSxJQUFJYixXQUFXTSxNQUFYLEdBQW9CLENBQWpDLEVBQW9DTyxLQUFLLENBQXpDLEVBQTRDQSxHQUE1QztBQUFpRCxhQUFJSCxJQUFJVixXQUFXYSxDQUFYLENBQVIsRUFBdUJOLElBQUksQ0FBQ0gsSUFBSSxDQUFKLEdBQVFNLEVBQUVILENBQUYsQ0FBUixHQUFlSCxJQUFJLENBQUosR0FBUU0sRUFBRVQsTUFBRixFQUFVQyxHQUFWLEVBQWVLLENBQWYsQ0FBUixHQUE0QkcsRUFBRVQsTUFBRixFQUFVQyxHQUFWLENBQTVDLEtBQStESyxDQUFuRTtBQUF4RSxNQUNMLE9BQU9ILElBQUksQ0FBSixJQUFTRyxDQUFULElBQWNDLE9BQU9NLGNBQVAsQ0FBc0JiLE1BQXRCLEVBQThCQyxHQUE5QixFQUFtQ0ssQ0FBbkMsQ0FBZCxFQUFxREEsQ0FBNUQ7QUFDSCxFQUxEOztBQVVBLEtBQUlRO0FBQUE7O0FBQ0Esc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx1SEFDVEEsS0FEUzs7QUFFZixlQUFLQyxLQUFMLEdBQWE7QUFDVEMsMEJBQWE7QUFESixVQUFiO0FBRmU7QUFLbEI7O0FBTkQ7QUFBQTtBQUFBLDZDQU9vQjtBQUFBOztBQUNoQixrQkFBS0MsVUFBTCxHQUFrQkMsWUFBWSxZQUFNO0FBQ2hDLHFCQUFJLE9BQUtILEtBQUwsQ0FBV0MsV0FBWCxDQUF1QlosTUFBdkIsS0FBa0MsQ0FBdEMsRUFBeUM7QUFDckMsNEJBQUtlLFFBQUwsQ0FBYyxFQUFFSCxhQUFhLEVBQWYsRUFBZDtBQUNILGtCQUZELE1BR0s7QUFDRCw0QkFBS0csUUFBTCxDQUFjO0FBQ1ZILHNDQUFhLE9BQUtELEtBQUwsQ0FBV0MsV0FBWCxHQUF5QjtBQUQ1QixzQkFBZDtBQUdIO0FBQ0osY0FUaUIsRUFTZixHQVRlLENBQWxCO0FBVUg7QUFsQkQ7QUFBQTtBQUFBLGdEQW1CdUI7QUFDbkJJLDJCQUFjLEtBQUtILFVBQW5CO0FBQ0g7QUFyQkQ7QUFBQTtBQUFBLGtDQXNCUztBQUFBLDBCQUNvQixLQUFLSCxLQUR6QjtBQUFBLGlCQUNHTyxJQURILFVBQ0dBLElBREg7QUFBQSxpQkFDU0MsTUFEVCxVQUNTQSxNQURUO0FBQUEsaUJBRUdOLFdBRkgsR0FFbUIsS0FBS0QsS0FGeEIsQ0FFR0MsV0FGSDs7QUFHTCxpQkFBTU8sWUFBWSwwQkFBVztBQUN6Qix5Q0FBd0JELE1BREM7QUFFekIsaUNBQWdCLENBQUNBO0FBRlEsY0FBWCxDQUFsQjtBQUlBLG9CQUFRLGdCQUFNRSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUVDLFdBQVdGLFNBQWIsRUFBM0IsRUFDSixnQkFBTUMsYUFBTixDQUFvQixNQUFwQixFQUE0QixFQUFFQyxXQUFXLGNBQWIsRUFBNUIsRUFBMkRKLE9BQU9MLFdBQWxFLENBREksQ0FBUjtBQUVIO0FBL0JEOztBQUFBO0FBQUEsb0JBQUo7QUFpQ0FILFdBQVVoQixXQUFXLENBQ2pCLGlEQURpQixDQUFYLEVBRVBnQixPQUZPLENBQVY7QUFHQUEsU0FBUSxjQUFSLElBQTBCO0FBQ3RCUSxXQUFNO0FBRGdCLEVBQTFCO21CQUdlUixPOzs7Ozs7OztBQ2hEZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUF5QywyQkFBMkI7QUFDcEUsb0RBQW1EOzs7Ozs7OztBQ1ZuRDtBQUNBOzs7QUFHQTtBQUNBLGdEQUErQyx1QkFBdUIsbUJBQW1CLG9CQUFvQix3QkFBd0IsZ0JBQWdCLEVBQUUseUJBQXlCLG1CQUFtQiwwQkFBMEIsRUFBRSx5QkFBeUIscUJBQXFCLEVBQUUsaUNBQWlDLHVCQUF1QixFQUFFOztBQUV6VTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7OztBQUNBOztBQUNBOztBQUNBOztLQUFZYSxTOztBQUNaOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQWZBLEtBQUk3QixhQUFjLGFBQVEsVUFBS0EsVUFBZCxJQUE2QixVQUFVQyxVQUFWLEVBQXNCQyxNQUF0QixFQUE4QkMsR0FBOUIsRUFBbUNDLElBQW5DLEVBQXlDO0FBQ25GLFNBQUlDLElBQUlDLFVBQVVDLE1BQWxCO0FBQUEsU0FBMEJDLElBQUlILElBQUksQ0FBSixHQUFRSCxNQUFSLEdBQWlCRSxTQUFTLElBQVQsR0FBZ0JBLE9BQU9LLE9BQU9DLHdCQUFQLENBQWdDUixNQUFoQyxFQUF3Q0MsR0FBeEMsQ0FBdkIsR0FBc0VDLElBQXJIO0FBQUEsU0FBMkhPLENBQTNIO0FBQ0EsU0FBSSxRQUFPQyxPQUFQLHlDQUFPQSxPQUFQLE9BQW1CLFFBQW5CLElBQStCLE9BQU9BLFFBQVFDLFFBQWYsS0FBNEIsVUFBL0QsRUFBMkVMLElBQUlJLFFBQVFDLFFBQVIsQ0FBaUJaLFVBQWpCLEVBQTZCQyxNQUE3QixFQUFxQ0MsR0FBckMsRUFBMENDLElBQTFDLENBQUosQ0FBM0UsS0FDSyxLQUFLLElBQUlVLElBQUliLFdBQVdNLE1BQVgsR0FBb0IsQ0FBakMsRUFBb0NPLEtBQUssQ0FBekMsRUFBNENBLEdBQTVDO0FBQWlELGFBQUlILElBQUlWLFdBQVdhLENBQVgsQ0FBUixFQUF1Qk4sSUFBSSxDQUFDSCxJQUFJLENBQUosR0FBUU0sRUFBRUgsQ0FBRixDQUFSLEdBQWVILElBQUksQ0FBSixHQUFRTSxFQUFFVCxNQUFGLEVBQVVDLEdBQVYsRUFBZUssQ0FBZixDQUFSLEdBQTRCRyxFQUFFVCxNQUFGLEVBQVVDLEdBQVYsQ0FBNUMsS0FBK0RLLENBQW5FO0FBQXhFLE1BQ0wsT0FBT0gsSUFBSSxDQUFKLElBQVNHLENBQVQsSUFBY0MsT0FBT00sY0FBUCxDQUFzQmIsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DSyxDQUFuQyxDQUFkLEVBQXFEQSxDQUE1RDtBQUNILEVBTEQ7O0FBZ0JBLEtBQUlzQjtBQUFBOztBQUNBLG1CQUFZYixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaUhBQ1RBLEtBRFM7O0FBRWYsZUFBS0MsS0FBTCxHQUFhO0FBQ1RhLGdDQUFtQjtBQURWLFVBQWI7QUFGZTtBQUtsQjs7QUFORDtBQUFBO0FBQUEsNkNBVW9CO0FBQ2hCLGtCQUFLZCxLQUFMLENBQVdlLFNBQVg7QUFDQSxrQkFBS2YsS0FBTCxDQUFXZ0IsZ0JBQVg7QUFDSDtBQWJEO0FBQUE7QUFBQSxtREFjMEJDLFNBZDFCLEVBY3FDO0FBQ2pDLGlCQUFJLEtBQUtqQixLQUFMLENBQVdrQixPQUFYLENBQW1CQyxVQUFuQixJQUFpQyxDQUFDRixVQUFVQyxPQUFWLENBQWtCQyxVQUF4RCxFQUFvRTtBQUNoRSxxQkFBSUYsVUFBVUMsT0FBVixDQUFrQkUsSUFBbEIsQ0FBdUJDLElBQXZCLEtBQWdDLFNBQXBDLEVBQStDO0FBQzNDLDBCQUFLaEIsUUFBTCxDQUFjO0FBQ1ZTLDRDQUFtQjtBQURULHNCQUFkO0FBR0g7QUFDSjtBQUNKO0FBdEJEO0FBQUE7QUFBQSxrQ0F1QlM7QUFBQSwwQkFDa0MsS0FBS2QsS0FEdkM7QUFBQSxpQkFDQ3NCLFdBREQsVUFDQ0EsV0FERDtBQUFBLGlCQUNjQyxlQURkLFVBQ2NBLGVBRGQ7O0FBRUwsb0JBQVEsZ0JBQU1iLGFBQU4seUJBQWtDLEVBQUVjLFdBQVcsTUFBYixFQUFsQyxFQUNKLEtBQUt4QixLQUFMLENBQVdrQixPQUFYLENBQW1CRSxJQUFuQixDQUF3QkMsSUFBeEIsS0FBaUMsU0FBakMsSUFBOEMsS0FBS3JCLEtBQUwsQ0FBV2tCLE9BQVgsQ0FBbUJDLFVBQW5CLEtBQWtDLEtBQWhGLElBQTBGLGdCQUFNVCxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUVDLFdBQVcsWUFBYixFQUEzQixFQUN0RixnQkFBTUQsYUFBTixvQkFBK0IsSUFBL0IsRUFDSSxnQkFBTUEsYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFFQyxXQUFXLE1BQWIsRUFBM0IsRUFBa0QsT0FBbEQsQ0FESixFQUVJLGdCQUFNRCxhQUFOLENBQW9CLElBQXBCLEVBQTBCLEVBQUVDLFdBQVcsWUFBYixFQUExQixFQUF1RCxzQ0FBdkQsQ0FGSixFQUdJLGdCQUFNRCxhQUFOLGVBQTRCLEVBQUVlLElBQUksU0FBTixFQUE1QixFQUErQywwQkFBL0MsQ0FISixDQURzRixDQUR0RixFQU1KLGdCQUFNZixhQUFOLG9CQUErQixJQUEvQixFQUNJLGdCQUFNQSxhQUFOLDRCQUFxQyxFQUFFZ0IsY0FBY0osWUFBWUssS0FBWixDQUFrQixDQUFsQixFQUFxQixDQUFyQixDQUFoQixFQUF5Q0MsT0FBTyxNQUFoRCxFQUF3REMsVUFBVSxTQUFsRSxFQUE2RVYsWUFBWUksZUFBekYsRUFBckMsQ0FESixDQU5JLENBQVI7QUFRSDtBQWpDRDtBQUFBO0FBQUEseUNBTzRCO0FBQUEsaUJBQVRPLEtBQVMsUUFBVEEsS0FBUzs7QUFDeEIsb0JBQU9BLE1BQU1DLFFBQU4sQ0FBZSx5QkFBZixDQUFQO0FBQ0g7QUFURDs7QUFBQTtBQUFBLG9CQUFKO0FBbUNBbEIsUUFBTzlCLFdBQVcsQ0FDZCxpREFEYyxDQUFYLEVBRUo4QixJQUZJLENBQVA7QUFHQSxVQUFTbUIsZUFBVCxDQUF5Qi9CLEtBQXpCLEVBQWdDZ0MsUUFBaEMsRUFBMEM7QUFDdEMsWUFBTztBQUNIWCxzQkFBYVYsVUFBVXNCLEtBQVYsQ0FBZ0JDLFNBQWhCLEVBQTJCLEdBQTNCLEVBQWdDbEMsS0FBaEMsQ0FEVjtBQUVIc0IsMEJBQWlCWCxVQUFVd0IsTUFBVixDQUFpQkMsb0JBQWpCLENBQXNDLE9BQXRDLEVBQStDcEMsS0FBL0MsQ0FGZDtBQUdIaUIsa0JBQVNqQixNQUFNaUI7QUFIWixNQUFQO0FBS0g7bUJBQ2MseUJBQVFjLGVBQVIsRUFBeUIsRUFBRWpCLDZCQUFGLEVBQWFDLDJDQUFiLEVBQStCc0IsMkNBQS9CLEVBQXpCLEVBQTRFekIsSUFBNUUsQzs7Ozs7Ozs7Ozs7OztBQzdEZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFYQSxLQUFJOUIsYUFBYyxhQUFRLFVBQUtBLFVBQWQsSUFBNkIsVUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNuRixTQUFJQyxJQUFJQyxVQUFVQyxNQUFsQjtBQUFBLFNBQTBCQyxJQUFJSCxJQUFJLENBQUosR0FBUUgsTUFBUixHQUFpQkUsU0FBUyxJQUFULEdBQWdCQSxPQUFPSyxPQUFPQyx3QkFBUCxDQUFnQ1IsTUFBaEMsRUFBd0NDLEdBQXhDLENBQXZCLEdBQXNFQyxJQUFySDtBQUFBLFNBQTJITyxDQUEzSDtBQUNBLFNBQUksUUFBT0MsT0FBUCx5Q0FBT0EsT0FBUCxPQUFtQixRQUFuQixJQUErQixPQUFPQSxRQUFRQyxRQUFmLEtBQTRCLFVBQS9ELEVBQTJFTCxJQUFJSSxRQUFRQyxRQUFSLENBQWlCWixVQUFqQixFQUE2QkMsTUFBN0IsRUFBcUNDLEdBQXJDLEVBQTBDQyxJQUExQyxDQUFKLENBQTNFLEtBQ0ssS0FBSyxJQUFJVSxJQUFJYixXQUFXTSxNQUFYLEdBQW9CLENBQWpDLEVBQW9DTyxLQUFLLENBQXpDLEVBQTRDQSxHQUE1QztBQUFpRCxhQUFJSCxJQUFJVixXQUFXYSxDQUFYLENBQVIsRUFBdUJOLElBQUksQ0FBQ0gsSUFBSSxDQUFKLEdBQVFNLEVBQUVILENBQUYsQ0FBUixHQUFlSCxJQUFJLENBQUosR0FBUU0sRUFBRVQsTUFBRixFQUFVQyxHQUFWLEVBQWVLLENBQWYsQ0FBUixHQUE0QkcsRUFBRVQsTUFBRixFQUFVQyxHQUFWLENBQTVDLEtBQStESyxDQUFuRTtBQUF4RSxNQUNMLE9BQU9ILElBQUksQ0FBSixJQUFTRyxDQUFULElBQWNDLE9BQU9NLGNBQVAsQ0FBc0JiLE1BQXRCLEVBQThCQyxHQUE5QixFQUFtQ0ssQ0FBbkMsQ0FBZCxFQUFxREEsQ0FBNUQ7QUFDSCxFQUxEOztBQVlBLEtBQU1nRCxTQUFTLG1CQUFBQyxDQUFRLEdBQVIsQ0FBZjtBQUNBLEtBQUlDO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxrQ0FDUztBQUFBLDBCQUNpRCxLQUFLekMsS0FEdEQ7QUFBQSxpQkFDR21CLFVBREgsVUFDR0EsVUFESDtBQUFBLGlCQUNlUyxLQURmLFVBQ2VBLEtBRGY7QUFBQSxpQkFDc0JDLFFBRHRCLFVBQ3NCQSxRQUR0QjtBQUFBLGlCQUNnQ0gsWUFEaEMsVUFDZ0NBLFlBRGhDOztBQUVMLG9CQUFRLGdCQUFNaEIsYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFFQyxXQUFXLG1CQUFiLEVBQTNCLEVBQ0osS0FBS1gsS0FBTCxDQUFXNEIsS0FBWCxLQUFxQkMsV0FDZCxnQkFBTW5CLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsRUFBRUMsV0FBVyxlQUFiLEVBQTFCLEVBQ0MsZ0JBQU1ELGFBQU4sb0JBQTBCLEVBQUVlLElBQUlJLFFBQU4sRUFBMUIsRUFDSUQsS0FESixFQUVJLGdCQUFNbEIsYUFBTixpQkFBMEIsRUFBRWdDLE1BQU0sWUFBUixFQUFzQkMsTUFBTSxFQUE1QixFQUExQixDQUZKLENBREQsQ0FEYyxHQUtkLGdCQUFNakMsYUFBTixDQUFvQixJQUFwQixFQUEwQixFQUFFQyxXQUFXLGVBQWIsRUFBMUIsRUFBMERpQixLQUExRCxDQUxQLENBREksRUFPSlQsY0FBY08sYUFBYXBDLE1BQWIsS0FBd0IsQ0FBdEMsR0FDTSxnQkFBTW9CLGFBQU4sb0JBQTZCLElBQTdCLENBRE4sR0FFTSxnQkFBTUEsYUFBTixxQkFBOEIsRUFBRWdCLGNBQWNBLFlBQWhCLEVBQTlCLENBVEYsQ0FBUjtBQVVIO0FBYkQ7O0FBQUE7QUFBQSxvQkFBSjtBQWVBZSxtQkFBa0IxRCxXQUFXLENBQ3pCLCtCQUFXd0QsTUFBWCxFQUFtQjtBQUNmSyxvQkFBZTtBQURBLEVBQW5CLENBRHlCLENBQVgsRUFJZkgsZUFKZSxDQUFsQjttQkFLZUEsZTs7Ozs7Ozs7Ozs7OztBQ2pDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQVJBLEtBQUkxRCxhQUFjLGFBQVEsVUFBS0EsVUFBZCxJQUE2QixVQUFVQyxVQUFWLEVBQXNCQyxNQUF0QixFQUE4QkMsR0FBOUIsRUFBbUNDLElBQW5DLEVBQXlDO0FBQ25GLFNBQUlDLElBQUlDLFVBQVVDLE1BQWxCO0FBQUEsU0FBMEJDLElBQUlILElBQUksQ0FBSixHQUFRSCxNQUFSLEdBQWlCRSxTQUFTLElBQVQsR0FBZ0JBLE9BQU9LLE9BQU9DLHdCQUFQLENBQWdDUixNQUFoQyxFQUF3Q0MsR0FBeEMsQ0FBdkIsR0FBc0VDLElBQXJIO0FBQUEsU0FBMkhPLENBQTNIO0FBQ0EsU0FBSSxRQUFPQyxPQUFQLHlDQUFPQSxPQUFQLE9BQW1CLFFBQW5CLElBQStCLE9BQU9BLFFBQVFDLFFBQWYsS0FBNEIsVUFBL0QsRUFBMkVMLElBQUlJLFFBQVFDLFFBQVIsQ0FBaUJaLFVBQWpCLEVBQTZCQyxNQUE3QixFQUFxQ0MsR0FBckMsRUFBMENDLElBQTFDLENBQUosQ0FBM0UsS0FDSyxLQUFLLElBQUlVLElBQUliLFdBQVdNLE1BQVgsR0FBb0IsQ0FBakMsRUFBb0NPLEtBQUssQ0FBekMsRUFBNENBLEdBQTVDO0FBQWlELGFBQUlILElBQUlWLFdBQVdhLENBQVgsQ0FBUixFQUF1Qk4sSUFBSSxDQUFDSCxJQUFJLENBQUosR0FBUU0sRUFBRUgsQ0FBRixDQUFSLEdBQWVILElBQUksQ0FBSixHQUFRTSxFQUFFVCxNQUFGLEVBQVVDLEdBQVYsRUFBZUssQ0FBZixDQUFSLEdBQTRCRyxFQUFFVCxNQUFGLEVBQVVDLEdBQVYsQ0FBNUMsS0FBK0RLLENBQW5FO0FBQXhFLE1BQ0wsT0FBT0gsSUFBSSxDQUFKLElBQVNHLENBQVQsSUFBY0MsT0FBT00sY0FBUCxDQUFzQmIsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DSyxDQUFuQyxDQUFkLEVBQXFEQSxDQUE1RDtBQUNILEVBTEQ7O0FBU0EsS0FBTWdELFNBQVMsbUJBQUFDLENBQVEsR0FBUixDQUFmO0FBQ0EsS0FBSUs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGtDQUNTO0FBQ0wsb0JBQVEsZ0JBQU1uQyxhQUFOLENBQW9CLElBQXBCLEVBQTBCLEVBQUVDLFdBQVcsV0FBYixFQUEwQm1DLFdBQVcsVUFBckMsRUFBMUIsRUFBNkUsS0FBSzlDLEtBQUwsQ0FBVzBCLFlBQVgsSUFBMkIsS0FBSzFCLEtBQUwsQ0FBVzBCLFlBQVgsQ0FBd0JwQyxNQUF4QixLQUFtQyxDQUE5RCxHQUM5RSxLQUFLVSxLQUFMLENBQVcwQixZQUFYLENBQXdCcUIsR0FBeEIsQ0FBNEIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQUEscUJBQ3BDckIsS0FEb0MsR0FDR29CLElBREgsQ0FDcENwQixLQURvQztBQUFBLHFCQUM3QnNCLE9BRDZCLEdBQ0dGLElBREgsQ0FDN0JFLE9BRDZCO0FBQUEscUJBQ3BCQyxXQURvQixHQUNHSCxJQURILENBQ3BCRyxXQURvQjtBQUFBLHFCQUNQQyxLQURPLEdBQ0dKLElBREgsQ0FDUEksS0FETzs7QUFFNUMsd0JBQVEsZ0JBQU0xQyxhQUFOLENBQW9CLElBQXBCLEVBQTBCLEVBQUV4QixLQUFLK0QsS0FBUCxFQUExQixFQUNKLGdCQUFNdkMsYUFBTixpQkFBMEIsRUFBRTJDLElBQUlMLEtBQUtLLEVBQVgsRUFBZXpCLE9BQU9BLFNBQVMsS0FBL0IsRUFBc0NzQixTQUFTQSxXQUFXQSxRQUFRSCxHQUFSLENBQVk7QUFBQSxnQ0FBVU8sT0FBT1osSUFBakI7QUFBQSxzQkFBWixFQUFtQ2EsSUFBbkMsQ0FBd0MsSUFBeEMsQ0FBWCxJQUE0RCxNQUEzRyxFQUFtSEosYUFBYUEsV0FBaEksRUFBNklDLE9BQU9BLEtBQXBKLEVBQTJKSSxjQUFjLElBQXpLLEVBQTFCLENBREksQ0FBUjtBQUVILGNBSkUsQ0FEOEUsR0FNOUUsZ0JBQU05QyxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDLDBCQUFoQyxDQU5DLENBQVI7QUFPSDtBQVREOztBQUFBO0FBQUEsb0JBQUo7QUFXQW1DLFlBQVc5RCxXQUFXLENBQ2xCLCtCQUFXd0QsTUFBWCxDQURrQixDQUFYLEVBRVJNLFFBRlEsQ0FBWDttQkFHZUEsUTs7Ozs7Ozs7Ozs7OztBQ3hCZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQVRBLEtBQUk5RCxhQUFjLGFBQVEsVUFBS0EsVUFBZCxJQUE2QixVQUFVQyxVQUFWLEVBQXNCQyxNQUF0QixFQUE4QkMsR0FBOUIsRUFBbUNDLElBQW5DLEVBQXlDO0FBQ25GLFNBQUlDLElBQUlDLFVBQVVDLE1BQWxCO0FBQUEsU0FBMEJDLElBQUlILElBQUksQ0FBSixHQUFRSCxNQUFSLEdBQWlCRSxTQUFTLElBQVQsR0FBZ0JBLE9BQU9LLE9BQU9DLHdCQUFQLENBQWdDUixNQUFoQyxFQUF3Q0MsR0FBeEMsQ0FBdkIsR0FBc0VDLElBQXJIO0FBQUEsU0FBMkhPLENBQTNIO0FBQ0EsU0FBSSxRQUFPQyxPQUFQLHlDQUFPQSxPQUFQLE9BQW1CLFFBQW5CLElBQStCLE9BQU9BLFFBQVFDLFFBQWYsS0FBNEIsVUFBL0QsRUFBMkVMLElBQUlJLFFBQVFDLFFBQVIsQ0FBaUJaLFVBQWpCLEVBQTZCQyxNQUE3QixFQUFxQ0MsR0FBckMsRUFBMENDLElBQTFDLENBQUosQ0FBM0UsS0FDSyxLQUFLLElBQUlVLElBQUliLFdBQVdNLE1BQVgsR0FBb0IsQ0FBakMsRUFBb0NPLEtBQUssQ0FBekMsRUFBNENBLEdBQTVDO0FBQWlELGFBQUlILElBQUlWLFdBQVdhLENBQVgsQ0FBUixFQUF1Qk4sSUFBSSxDQUFDSCxJQUFJLENBQUosR0FBUU0sRUFBRUgsQ0FBRixDQUFSLEdBQWVILElBQUksQ0FBSixHQUFRTSxFQUFFVCxNQUFGLEVBQVVDLEdBQVYsRUFBZUssQ0FBZixDQUFSLEdBQTRCRyxFQUFFVCxNQUFGLEVBQVVDLEdBQVYsQ0FBNUMsS0FBK0RLLENBQW5FO0FBQXhFLE1BQ0wsT0FBT0gsSUFBSSxDQUFKLElBQVNHLENBQVQsSUFBY0MsT0FBT00sY0FBUCxDQUFzQmIsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DSyxDQUFuQyxDQUFkLEVBQXFEQSxDQUE1RDtBQUNILEVBTEQ7O0FBVUEsS0FBTWdELFNBQVMsbUJBQUFDLENBQVEsR0FBUixDQUFmO0FBQ0EsS0FBSWlCO0FBQUE7O0FBQ0EsbUJBQVl6RCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaUhBQ1RBLEtBRFM7O0FBRWYsZUFBS0MsS0FBTCxHQUFhO0FBQ1R5RCx3QkFBVztBQURGLFVBQWI7QUFHQSxlQUFLQSxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUMsSUFBZixPQUFqQjtBQUNBLGVBQUtDLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlRCxJQUFmLE9BQWpCO0FBTmU7QUFPbEI7O0FBUkQ7QUFBQTtBQUFBLHFDQVNZO0FBQ1Isa0JBQUt0RCxRQUFMLENBQWM7QUFDVnFELDRCQUFXO0FBREQsY0FBZDtBQUdIO0FBYkQ7QUFBQTtBQUFBLHFDQWNZO0FBQ1Isa0JBQUtyRCxRQUFMLENBQWM7QUFDVnFELDRCQUFXO0FBREQsY0FBZDtBQUdIO0FBbEJEO0FBQUE7QUFBQSxrQ0FtQlM7QUFBQSwwQkFDb0MsS0FBSzFELEtBRHpDO0FBQUEsaUJBQ0c2RCxRQURILFVBQ0dBLFFBREg7QUFBQSxpQkFDYVYsV0FEYixVQUNhQSxXQURiO0FBQUEsaUJBQzBCQyxLQUQxQixVQUMwQkEsS0FEMUI7O0FBRUwsb0JBQVEsZ0JBQU0xQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUVvRCxjQUFjLEtBQUtKLFNBQXJCLEVBQWdDSyxjQUFjLEtBQUtILFNBQW5ELEVBQThEakQsV0FBVyxZQUF6RSxFQUEzQixFQUNKLGdCQUFNRCxhQUFOLG9CQUEwQixFQUFFZSxJQUFJLFdBQVcsS0FBS3pCLEtBQUwsQ0FBV3FELEVBQTVCLEVBQTFCLEVBQ0lELFNBQVUsZ0JBQU0xQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUVDLFdBQVcsWUFBYixFQUEzQixFQUNOLGdCQUFNRCxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUVzRCxLQUFLLEtBQUtoRSxLQUFMLENBQVdvRCxLQUFsQixFQUEzQixDQURNLENBRGQsRUFHSSxnQkFBTTFDLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsRUFBRUMsV0FBVyxXQUFiLEVBQTNCLEVBQ0ksZ0JBQU1ELGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEIsRUFBRWtCLE9BQU8sS0FBSzVCLEtBQUwsQ0FBVzRCLEtBQXBCLEVBQTJCakIsV0FBVyxXQUF0QyxFQUE1QixFQUFpRixLQUFLWCxLQUFMLENBQVc0QixLQUFYLElBQW9CLEtBQXJHLENBREosRUFFSSxnQkFBTWxCLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEIsRUFBRUMsV0FBVyxhQUFiLEVBQTVCLEVBQTBELEtBQUtYLEtBQUwsQ0FBV2tELE9BQVgsSUFBc0IsTUFBaEYsQ0FGSixFQUdJVyxZQUFhLGdCQUFNbkQsYUFBTixDQUFvQixNQUFwQixFQUE0QixFQUFFQyxXQUFXLFdBQWIsRUFBNUIsRUFBd0R3QyxlQUFlLEdBQXZFLENBSGpCLENBSEosQ0FESSxFQVFKLEtBQUtsRCxLQUFMLENBQVd5RCxTQUFYLElBQXdCLENBQUMsS0FBSzFELEtBQUwsQ0FBV3dELFlBQXBDLElBQXFELGdCQUFNOUMsYUFBTiwwQkFBbUMsRUFBRXVELFFBQVEsS0FBS2pFLEtBQUwsQ0FBV3FELEVBQXJCLEVBQXlCekIsT0FBTyxLQUFLNUIsS0FBTCxDQUFXNEIsS0FBM0MsRUFBa0QwQixRQUFRLEtBQUt0RCxLQUFMLENBQVdrRCxPQUFyRSxFQUE4RUMsYUFBYSxLQUFLbkQsS0FBTCxDQUFXbUQsV0FBdEcsRUFBbkMsQ0FSakQsQ0FBUjtBQVNIO0FBOUJEOztBQUFBO0FBQUEsb0JBQUo7QUFnQ0FNLFFBQU8xRSxXQUFXLENBQ2QsK0JBQVd3RCxNQUFYLEVBQW1CO0FBQ2ZLLG9CQUFlO0FBREEsRUFBbkIsQ0FEYyxDQUFYLEVBSUphLElBSkksQ0FBUDttQkFLZUEsSTs7Ozs7Ozs7Ozs7OztBQ2hEZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFSQSxLQUFJMUUsYUFBYyxhQUFRLFVBQUtBLFVBQWQsSUFBNkIsVUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNuRixTQUFJQyxJQUFJQyxVQUFVQyxNQUFsQjtBQUFBLFNBQTBCQyxJQUFJSCxJQUFJLENBQUosR0FBUUgsTUFBUixHQUFpQkUsU0FBUyxJQUFULEdBQWdCQSxPQUFPSyxPQUFPQyx3QkFBUCxDQUFnQ1IsTUFBaEMsRUFBd0NDLEdBQXhDLENBQXZCLEdBQXNFQyxJQUFySDtBQUFBLFNBQTJITyxDQUEzSDtBQUNBLFNBQUksUUFBT0MsT0FBUCx5Q0FBT0EsT0FBUCxPQUFtQixRQUFuQixJQUErQixPQUFPQSxRQUFRQyxRQUFmLEtBQTRCLFVBQS9ELEVBQTJFTCxJQUFJSSxRQUFRQyxRQUFSLENBQWlCWixVQUFqQixFQUE2QkMsTUFBN0IsRUFBcUNDLEdBQXJDLEVBQTBDQyxJQUExQyxDQUFKLENBQTNFLEtBQ0ssS0FBSyxJQUFJVSxJQUFJYixXQUFXTSxNQUFYLEdBQW9CLENBQWpDLEVBQW9DTyxLQUFLLENBQXpDLEVBQTRDQSxHQUE1QztBQUFpRCxhQUFJSCxJQUFJVixXQUFXYSxDQUFYLENBQVIsRUFBdUJOLElBQUksQ0FBQ0gsSUFBSSxDQUFKLEdBQVFNLEVBQUVILENBQUYsQ0FBUixHQUFlSCxJQUFJLENBQUosR0FBUU0sRUFBRVQsTUFBRixFQUFVQyxHQUFWLEVBQWVLLENBQWYsQ0FBUixHQUE0QkcsRUFBRVQsTUFBRixFQUFVQyxHQUFWLENBQTVDLEtBQStESyxDQUFuRTtBQUF4RSxNQUNMLE9BQU9ILElBQUksQ0FBSixJQUFTRyxDQUFULElBQWNDLE9BQU9NLGNBQVAsQ0FBc0JiLE1BQXRCLEVBQThCQyxHQUE5QixFQUFtQ0ssQ0FBbkMsQ0FBZCxFQUFxREEsQ0FBNUQ7QUFDSCxFQUxEOztBQVNBLEtBQU1nRCxTQUFTLG1CQUFBQyxDQUFRLEdBQVIsQ0FBZjtBQUNBLEtBQUkwQjtBQUFBOztBQUNBLDRCQUFZbEUsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNUQSxLQURTO0FBRWxCOztBQUhEO0FBQUE7QUFBQSxrQ0FJUztBQUFBLDBCQUMwQyxLQUFLQSxLQUQvQztBQUFBLGlCQUNHc0QsTUFESCxVQUNHQSxNQURIO0FBQUEsaUJBQ1cxQixLQURYLFVBQ1dBLEtBRFg7QUFBQSxpQkFDa0J1QixXQURsQixVQUNrQkEsV0FEbEI7QUFBQSxpQkFDK0JjLE1BRC9CLFVBQytCQSxNQUQvQjs7QUFFTCxvQkFBUSxnQkFBTXZELGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsRUFBRUMsV0FBVyxPQUFiLEVBQTNCLEVBQ0osZ0JBQU1ELGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsRUFBRUMsV0FBVyxRQUFiLEVBQTNCLEVBQ0ksZ0JBQU1ELGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsRUFBRUMsV0FBVyxPQUFiLEVBQTFCLEVBQWtEaUIsS0FBbEQsQ0FESixFQUVJLGdCQUFNbEIsYUFBTixDQUFvQixHQUFwQixFQUF5QixFQUFFQyxXQUFXLFFBQWIsRUFBekIsRUFBa0QyQyxNQUFsRCxDQUZKLEVBR0ksZ0JBQU01QyxhQUFOLGVBQTRCLEVBQUV5RCxPQUFPLE1BQVQsRUFBaUIxQyxJQUFJLGtCQUFrQndDLE1BQXZDLEVBQTVCLEVBQTZFLGNBQTdFLENBSEosQ0FESSxFQUtKLGdCQUFNdkQsYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFFQyxXQUFXLGFBQWIsRUFBM0IsRUFDSSxnQkFBTUQsYUFBTixDQUFvQixHQUFwQixFQUF5QixJQUF6QixFQUErQnlDLFdBQS9CLENBREosQ0FMSSxDQUFSO0FBT0g7QUFiRDs7QUFBQTtBQUFBLG9CQUFKO0FBZUFlLGlCQUFnQm5GLFdBQVcsQ0FDdkIsK0JBQVd3RCxNQUFYLEVBQW1CO0FBQ2ZLLG9CQUFlO0FBREEsRUFBbkIsQ0FEdUIsQ0FBWCxFQUlic0IsYUFKYSxDQUFoQjttQkFLZUEsYTs7Ozs7Ozs7QUM3QmY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBeUMsMkJBQTJCO0FBQ3BFLG9EQUFtRDs7Ozs7Ozs7QUNWbkQ7QUFDQTs7O0FBR0E7QUFDQSx5Q0FBd0MsbUJBQW1CLHNCQUFzQixzQkFBc0IsZ0JBQWdCLEVBQUUsa0JBQWtCLHVCQUF1QixpQkFBaUIsZ0JBQWdCLFdBQVcsaUJBQWlCLHFCQUFxQiwrQ0FBK0MseUJBQXlCLDJCQUEyQixFQUFFLG1CQUFtQix3QkFBd0IsRUFBRSxrQkFBa0IsMEJBQTBCLEVBQUUsbUJBQW1CLHNCQUFzQixzQkFBc0IsRUFBRSx3QkFBd0IscUJBQXFCLG9CQUFvQiwrQkFBK0IsRUFBRTs7QUFFdmxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7QUNiQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUF5QywyQkFBMkI7QUFDcEUsb0RBQW1EOzs7Ozs7OztBQ1ZuRDtBQUNBOzs7QUFHQTtBQUNBLDZDQUE0Qyw0QkFBNEIsd0JBQXdCLHFCQUFxQixFQUFFLGlCQUFpQixnQkFBZ0IsaUNBQWlDLHVCQUF1QixpQkFBaUIsb0JBQW9CLEVBQUUsbUJBQW1CLHFCQUFxQix3QkFBd0IseUJBQXlCLEVBQUUsK0JBQStCLHFCQUFxQixFQUFFLGdDQUFnQyxvQkFBb0IsRUFBRSxzQkFBc0IsNEJBQTRCLEVBQUUsc0JBQXNCLGdCQUFnQixxQkFBcUIsbUJBQW1CLHFCQUFxQixzQkFBc0IsaUJBQWlCLEVBQUUsc0JBQXNCLHNCQUFzQixnQkFBZ0IsRUFBRSx3QkFBd0IsZ0JBQWdCLEVBQUUsdUJBQXVCLHVCQUF1QixjQUFjLGlCQUFpQixrQkFBa0IsV0FBVyxvRUFBNEUsaUNBQWlDLHVCQUF1QixFQUFFLDJCQUEyQixtQkFBbUIsb0JBQW9CLHFCQUFxQix5QkFBeUIsbUJBQW1CLGlCQUFpQixlQUFlLHlCQUF5QixFQUFFLDZCQUE2QixnQkFBZ0IsRUFBRSxzQkFBc0IsZ0JBQWdCLEVBQUUsdUJBQXVCLGdCQUFnQixxQkFBcUIsNkVBQTZFLGtCQUFrQixnQkFBZ0Isa0JBQWtCLEVBQUUseUJBQXlCLGlCQUFpQixxQkFBcUIsdUJBQXVCLGlCQUFpQixFQUFFLHFDQUFxQyxtQkFBbUIsRUFBRSxzQ0FBc0MsbUJBQW1CLEVBQUUseUNBQXlDLGtCQUFrQixtQkFBbUIsbUJBQW1CLHVCQUF1Qix1QkFBdUIsa0JBQWtCLHlCQUF5Qix5QkFBeUIsRUFBRSxpREFBaUQsZUFBZSxFQUFFLCtDQUErQyxvQkFBb0IscUJBQXFCLDJCQUEyQixlQUFlLGdCQUFnQixFQUFFLHdDQUF3QyxrQkFBa0IsRUFBRSx3Q0FBd0Msa0JBQWtCLEVBQUU7O0FBRTNxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7QUNqQkEsc0U7Ozs7Ozs7O0FDQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBeUMsMkJBQTJCO0FBQ3BFLG9EQUFtRDs7Ozs7Ozs7QUNWbkQ7QUFDQTs7O0FBR0E7QUFDQSw2Q0FBNEMscUJBQXFCLGVBQWUsY0FBYyx1QkFBdUIsd0JBQXdCLEVBQUUseUJBQXlCLGtCQUFrQixpQkFBaUIsb0JBQW9CLDZCQUE2QixFQUFFLGlDQUFpQyw2QkFBNkIsc0JBQXNCLEVBQUUsRUFBRTs7QUFFdFY7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7QUNUQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUF5QywyQkFBMkI7QUFDcEUsb0RBQW1EOzs7Ozs7OztBQ1ZuRDtBQUNBOzs7QUFHQTtBQUNBLGlEQUFnRCxtQkFBbUIsc0JBQXNCLHNCQUFzQixnQkFBZ0IsRUFBRSw4QkFBOEIsdUJBQXVCLEVBQUUsaUJBQWlCLHVCQUF1QixhQUFhLFdBQVcsc0JBQXNCLEVBQUUsMEJBQTBCLHdCQUF3QixFQUFFLDRCQUE0QixrQkFBa0IsRUFBRSxvQ0FBb0Msb0JBQW9CLEVBQUU7O0FBRTlhO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7OztBQ1hBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQXlDLDJCQUEyQjtBQUNwRSxvREFBbUQ7Ozs7Ozs7O0FDVm5EO0FBQ0E7OztBQUdBO0FBQ0EsOENBQTZDLG1CQUFtQixzQkFBc0Isc0JBQXNCLGdCQUFnQixFQUFFLHVCQUF1Qix1QkFBdUIsa0JBQWtCLEVBQUUsaUJBQWlCLHVCQUF1Qix1QkFBdUIsc0JBQXNCLEVBQUUsZ0JBQWdCLG1CQUFtQixFQUFFLHVCQUF1Qix3QkFBd0Isb0JBQW9CLEVBQUU7O0FBRWpZO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEciLCJmaWxlIjoiMy4zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJztcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvaW5kZXgudHNcbiAqKi8iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9hZGluZy5zY3NzJztcbmxldCBMb2FkaW5nID0gY2xhc3MgTG9hZGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZHluYW1pY1RleHQ6ICcnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5keW5hbWljVGV4dC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZHluYW1pY1RleHQ6ICcnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGR5bmFtaWNUZXh0OiB0aGlzLnN0YXRlLmR5bmFtaWNUZXh0ICsgJy4nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB0ZXh0LCBjZW50ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgZHluYW1pY1RleHQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHdyYXBDbGFzcyA9IGNsYXNzbmFtZXMoe1xuICAgICAgICAgICAgJ2xvYWRpbmctd3JhcC0tY2VudGVyJzogY2VudGVyLFxuICAgICAgICAgICAgJ2xvYWRpbmctd3JhcCc6ICFjZW50ZXJcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlTmFtZTogd3JhcENsYXNzIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlTmFtZTogXCJ0ZXh0LWxvYWRpbmdcIiB9LCB0ZXh0ICsgZHluYW1pY1RleHQpKSk7XG4gICAgfVxufTtcbkxvYWRpbmcgPSBfX2RlY29yYXRlKFtcbiAgICBDU1NNb2R1bGVzKHN0eWxlcylcbl0sIExvYWRpbmcpO1xuTG9hZGluZ1snZGVmYXVsdFByb3BzJ10gPSB7XG4gICAgdGV4dDogJ+WKoOi9veS4rSdcbn07XG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL0xvYWRpbmcudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9Mb2FkaW5nLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL0xvYWRpbmcuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDdcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50ZXh0LWxvYWRpbmdfM2VmcWgge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiA1MHB4IDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICM5OTk7IH1cXG5cXG4udGV4dC1sb2FkaW5nXzNlZnFoIHtcXG4gIG1hcmdpbjogMzBweCAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLmxvYWRpbmctd3JhcF9odHlZeiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLmxvYWRpbmctd3JhcC0tY2VudGVyXzNQRUloIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInRleHQtbG9hZGluZ1wiOiBcInRleHQtbG9hZGluZ18zZWZxaFwiLFxuXHRcImxvYWRpbmctd3JhcFwiOiBcImxvYWRpbmctd3JhcF9odHlZelwiLFxuXHRcImxvYWRpbmctd3JhcC0tY2VudGVyXCI6IFwibG9hZGluZy13cmFwLS1jZW50ZXJfM1BFSWhcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9Mb2FkaW5nLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA3XG4gKiovIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBsb2FkQm9va3MsIGZldGNoQ29sbGVjdGlvbnMsIHNlbmROb3RpZmljYXRpb24gfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi9zdG9yZS9zZWxlY3RvcnMnO1xuaW1wb3J0IEJvb2tMaXN0U2VjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jvb2tMaXN0U2VjdGlvbic7XG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0nO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvbGF5b3V0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BcHBIb21lLnNjc3MnO1xubGV0IEhvbWUgPSBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzaG93UmVjZW50UmVhZGluZzogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG4gICAgc3RhdGljIGZldGNoRGF0YSh7IHN0b3JlIH0pIHtcbiAgICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGxvYWRCb29rcygpKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMubG9hZEJvb2tzKCk7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hDb2xsZWN0aW9ucygpO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZXNzaW9uLmlzRmV0Y2hpbmcgJiYgIW5leHRQcm9wcy5zZXNzaW9uLmlzRmV0Y2hpbmcpIHtcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuc2Vzc2lvbi51c2VyLnJvbGUgIT09ICd2aXNpdG9yJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzaG93UmVjZW50UmVhZGluZzogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgbmV3ZXN0Qm9va3MsIGlzQm9va3NGZXRjaGluZyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KERvY0NvbnRhaW5lciwgeyBib2R5Q2xhc3M6IFwiaG9tZVwiIH0sXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlc3Npb24udXNlci5yb2xlID09PSAndmlzaXRvcicgJiYgdGhpcy5wcm9wcy5zZXNzaW9uLmlzRmV0Y2hpbmcgPT09IGZhbHNlICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcImhlcm8taW1hZ2VcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcImxvZ29cIiB9LCBcIlJlYWRyXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgeyBzdHlsZU5hbWU6IFwicGFnZS10aXRsZVwiIH0sIFwiXFx1NjVCMFxcdTc2ODRcXHU5NjA1XFx1OEJGQlxcdTRGNTNcXHU5QThDXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB0bzogXCIvc2lnbnVwXCIgfSwgXCJcXHU3M0IwXFx1NTcyOFxcdTUyQTBcXHU1MTY1XCIpKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb29rTGlzdFNlY3Rpb24sIHsgYm9va0VudGl0aWVzOiBuZXdlc3RCb29rcy5zbGljZSgwLCA2KSwgdGl0bGU6IFwi5paw5Lmm6YCf6YCSXCIsIG1vcmVMaW5rOiBcIi9icm93c2VcIiwgaXNGZXRjaGluZzogaXNCb29rc0ZldGNoaW5nIH0pKSkpO1xuICAgIH1cbn07XG5Ib21lID0gX19kZWNvcmF0ZShbXG4gICAgQ1NTTW9kdWxlcyhzdHlsZXMpXG5dLCBIb21lKTtcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuZXdlc3RCb29rczogc2VsZWN0b3JzLmJvb2tzKHVuZGVmaW5lZCwgJzEnKShzdGF0ZSksXG4gICAgICAgIGlzQm9va3NGZXRjaGluZzogc2VsZWN0b3JzLmNvbW1vbi5pc1BhZ2luYXRpb25GZXRjaGluZygnYm9va3MnKShzdGF0ZSksXG4gICAgICAgIHNlc3Npb246IHN0YXRlLnNlc3Npb24sXG4gICAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGxvYWRCb29rcywgZmV0Y2hDb2xsZWN0aW9ucywgc2VuZE5vdGlmaWNhdGlvbiB9KShIb21lKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FwcEhvbWUvQXBwSG9tZS50c3hcbiAqKi8iLCJpbXBvcnQgQm9va0xpc3RTZWN0aW9uIGZyb20gJy4vQm9va0xpc3RTZWN0aW9uJztcbmV4cG9ydCBkZWZhdWx0IEJvb2tMaXN0U2VjdGlvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdFNlY3Rpb24vaW5kZXgudHNcbiAqKi8iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQm9va0xpc3QgZnJvbSAnLi4vQm9va0xpc3QnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vZWxlbWVudHMvTG9hZGluZyc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9JY29uJztcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vQm9va0xpc3RTZWN0aW9uLnNjc3MnKTtcbmxldCBCb29rTGlzdFNlY3Rpb24gPSBjbGFzcyBCb29rTGlzdFNlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBpc0ZldGNoaW5nLCB0aXRsZSwgbW9yZUxpbmssIGJvb2tFbnRpdGllcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcImJvb2stbGlzdC1zZWN0aW9uXCIgfSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMudGl0bGUgJiYgKG1vcmVMaW5rXG4gICAgICAgICAgICAgICAgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgc3R5bGVOYW1lOiBcInNlY3Rpb24tdGl0bGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHsgdG86IG1vcmVMaW5rIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyBuYW1lOiBcImFycm93UmlnaHRcIiwgc2l6ZTogMjAgfSkpKSlcbiAgICAgICAgICAgICAgICA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBzdHlsZU5hbWU6IFwic2VjdGlvbi10aXRsZVwiIH0sIHRpdGxlKSkpLFxuICAgICAgICAgICAgaXNGZXRjaGluZyAmJiBib29rRW50aXRpZXMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmcsIG51bGwpXG4gICAgICAgICAgICAgICAgOiBSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tMaXN0LCB7IGJvb2tFbnRpdGllczogYm9va0VudGl0aWVzIH0pKSk7XG4gICAgfVxufTtcbkJvb2tMaXN0U2VjdGlvbiA9IF9fZGVjb3JhdGUoW1xuICAgIENTU01vZHVsZXMoc3R5bGVzLCB7XG4gICAgICAgIGFsbG93TXVsdGlwbGU6IHRydWVcbiAgICB9KVxuXSwgQm9va0xpc3RTZWN0aW9uKTtcbmV4cG9ydCBkZWZhdWx0IEJvb2tMaXN0U2VjdGlvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdFNlY3Rpb24vQm9va0xpc3RTZWN0aW9uLnRzeFxuICoqLyIsImltcG9ydCBCb29rTGlzdCBmcm9tICcuL0Jvb2tMaXN0JztcbmV4cG9ydCBkZWZhdWx0IEJvb2tMaXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0L2luZGV4LnRzXG4gKiovIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb29rIGZyb20gJy4uL0Jvb2snO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Cb29rTGlzdC5zY3NzJyk7XG5sZXQgQm9va0xpc3QgPSBjbGFzcyBCb29rTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7IHN0eWxlTmFtZTogXCJib29rLWxpc3RcIiwgY2xhc3NOYW1lOiBcImNsZWFyZml4XCIgfSwgdGhpcy5wcm9wcy5ib29rRW50aXRpZXMgJiYgdGhpcy5wcm9wcy5ib29rRW50aXRpZXMubGVuZ3RoICE9PSAwXG4gICAgICAgICAgICA/ICh0aGlzLnByb3BzLmJvb2tFbnRpdGllcy5tYXAoKGJvb2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0aXRsZSwgYXV0aG9ycywgZGVzY3JpcHRpb24sIGNvdmVyIH0gPSBib29rO1xuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsga2V5OiBpbmRleCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2ssIHsgaWQ6IGJvb2suaWQsIHRpdGxlOiB0aXRsZSB8fCAn5peg5qCH6aKYJywgYXV0aG9yczogYXV0aG9ycyAmJiBhdXRob3JzLm1hcChhdXRob3IgPT4gYXV0aG9yLm5hbWUpLmpvaW4oJywgJykgfHwgJ+acquefpeS9nOiAhScsIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgY292ZXI6IGNvdmVyLCBkaXNhYmxlUG9wdXA6IHRydWUgfSkpKTtcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFwiXFx1NjY4MlxcdTY1RTBcXHU4QkIwXFx1NUY1NVwiKSkpKTtcbiAgICB9XG59O1xuQm9va0xpc3QgPSBfX2RlY29yYXRlKFtcbiAgICBDU1NNb2R1bGVzKHN0eWxlcylcbl0sIEJvb2tMaXN0KTtcbmV4cG9ydCBkZWZhdWx0IEJvb2tMaXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0L0Jvb2tMaXN0LnRzeFxuICoqLyIsImltcG9ydCBCb29rIGZyb20gJy4vQm9vayc7XG5leHBvcnQgZGVmYXVsdCBCb29rO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2svaW5kZXgudHNcbiAqKi8iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQm9va0luZm9Qb3B1cCBmcm9tICcuLi9Cb29rSW5mb1BvcHVwJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vX2Jvb2suc2NzcycpO1xubGV0IEJvb2sgPSBjbGFzcyBCb29rIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzaG93UG9wdXA6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2hvd1BvcHVwID0gdGhpcy5zaG93UG9wdXAuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oaWRlUG9wdXAgPSB0aGlzLmhpZGVQb3B1cC5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBzaG93UG9wdXAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd1BvcHVwOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoaWRlUG9wdXAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd1BvcHVwOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHNob3dEZXNjLCBkZXNjcmlwdGlvbiwgY292ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IG9uTW91c2VFbnRlcjogdGhpcy5zaG93UG9wdXAsIG9uTW91c2VMZWF2ZTogdGhpcy5oaWRlUG9wdXAsIHN0eWxlTmFtZTogXCJib29rLS1jYXJkXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywgeyB0bzogJy9ib29rLycgKyB0aGlzLnByb3BzLmlkIH0sXG4gICAgICAgICAgICAgICAgY292ZXIgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZU5hbWU6IFwiYm9vay1jb3ZlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IHRoaXMucHJvcHMuY292ZXIgfSkpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcImJvb2stbWV0YVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgdGl0bGU6IHRoaXMucHJvcHMudGl0bGUsIHN0eWxlTmFtZTogXCJib29rLW5hbWVcIiB9LCB0aGlzLnByb3BzLnRpdGxlIHx8ICfml6DmoIfpopgnKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZU5hbWU6IFwiYm9vay1hdXRob3JcIiB9LCB0aGlzLnByb3BzLmF1dGhvcnMgfHwgJ+S9nOiAheS4jeivpicpLFxuICAgICAgICAgICAgICAgICAgICBzaG93RGVzYyAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZU5hbWU6IFwiYm9vay1kZXNjXCIgfSwgZGVzY3JpcHRpb24gfHwgJ+epuicpKSkpLFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93UG9wdXAgJiYgIXRoaXMucHJvcHMuZGlzYWJsZVBvcHVwICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tJbmZvUG9wdXAsIHsgYm9va0lkOiB0aGlzLnByb3BzLmlkLCB0aXRsZTogdGhpcy5wcm9wcy50aXRsZSwgYXV0aG9yOiB0aGlzLnByb3BzLmF1dGhvcnMsIGRlc2NyaXB0aW9uOiB0aGlzLnByb3BzLmRlc2NyaXB0aW9uIH0pKSkpO1xuICAgIH1cbn07XG5Cb29rID0gX19kZWNvcmF0ZShbXG4gICAgQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgICAgICAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxuICAgIH0pXG5dLCBCb29rKTtcbmV4cG9ydCBkZWZhdWx0IEJvb2s7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9vay9Cb29rLnRzeFxuICoqLyIsImltcG9ydCBCb29rSW5mb1BvcHVwIGZyb20gJy4vQm9va0luZm9Qb3B1cCc7XG5leHBvcnQgZGVmYXVsdCBCb29rSW5mb1BvcHVwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tJbmZvUG9wdXAvaW5kZXgudHNcbiAqKi8iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvZm9ybSc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0Jvb2tJbmZvUG9wdXAuc2NzcycpO1xubGV0IEJvb2tJbmZvUG9wdXAgPSBjbGFzcyBCb29rSW5mb1BvcHVwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBhdXRob3IsIHRpdGxlLCBkZXNjcmlwdGlvbiwgYm9va0lkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZU5hbWU6IFwicG9wdXBcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlTmFtZTogXCJoZWFkZXJcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7IHN0eWxlTmFtZTogXCJ0aXRsZVwiIH0sIHRpdGxlKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IHN0eWxlTmFtZTogXCJhdXRob3JcIiB9LCBhdXRob3IpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGNvbG9yOiBcImJsdWVcIiwgdG86ICcvdmlld2VyL2Jvb2svJyArIGJvb2tJZCB9LCBcIlxcdTk2MDVcXHU4QkZCXCIpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZU5hbWU6IFwiZGVzY3JpcHRpb25cIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGRlc2NyaXB0aW9uKSkpKTtcbiAgICB9XG59O1xuQm9va0luZm9Qb3B1cCA9IF9fZGVjb3JhdGUoW1xuICAgIENTU01vZHVsZXMoc3R5bGVzLCB7XG4gICAgICAgIGFsbG93TXVsdGlwbGU6IHRydWVcbiAgICB9KVxuXSwgQm9va0luZm9Qb3B1cCk7XG5leHBvcnQgZGVmYXVsdCBCb29rSW5mb1BvcHVwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tJbmZvUG9wdXAvQm9va0luZm9Qb3B1cC50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0Jvb2tJbmZvUG9wdXAuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0luZm9Qb3B1cC9Cb29rSW5mb1BvcHVwLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMyA0IDcgMTBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50aXRsZV9CVk83ZSB7XFxuICBtYXJnaW46IDM1cHggMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzMzMzsgfVxcblxcbi5wb3B1cF9NUENxciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTk7XFxuICBsZWZ0OiAxMzRweDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHggMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7IH1cXG5cXG4uaGVhZGVyXzFJbklmIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cXG5cXG4udGl0bGVfQlZPN2Uge1xcbiAgbWFyZ2luOiAzMHB4IDAgMTBweCAwOyB9XFxuXFxuLmF1dGhvcl8yOEJpQSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIG1hcmdpbjogMCAwIDJlbSAwOyB9XFxuXFxuLmRlc2NyaXB0aW9uX0Q5clZOIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInRpdGxlXCI6IFwidGl0bGVfQlZPN2VcIixcblx0XCJwb3B1cFwiOiBcInBvcHVwX01QQ3FyXCIsXG5cdFwiaGVhZGVyXCI6IFwiaGVhZGVyXzFJbklmXCIsXG5cdFwiYXV0aG9yXCI6IFwiYXV0aG9yXzI4QmlBXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJkZXNjcmlwdGlvbl9EOXJWTlwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tJbmZvUG9wdXAvQm9va0luZm9Qb3B1cC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjc1XG4gKiogbW9kdWxlIGNodW5rcyA9IDMgNCA3IDEwXG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9fYm9vay5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rL19ib29rLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMyA0IDcgMTBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tZXRhLWl0ZW1fMmNSeUoge1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5ib29rXzNPcXpfIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAwcztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIHBhZGRpbmc6IDAgMTBweDsgfVxcbiAgLmJvb2tfM09xel8gYSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgIC5ib29rXzNPcXpfIGE6aG92ZXIgaW1nIHtcXG4gICAgICBvcGFjaXR5OiAuOTY7IH1cXG4gICAgLmJvb2tfM09xel8gYTphY3RpdmUgaW1nIHtcXG4gICAgICBvcGFjaXR5OiAuODsgfVxcblxcbi5ib29rLW1ldGFfM2dsY1oge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cXG5cXG4ubWV0YS1pdGVtXzJjUnlKIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIG1hcmdpbi1sZWZ0OiAxN3B4O1xcbiAgd2lkdGg6IDEzNHB4OyB9XFxuXFxuLmJvb2stbmFtZV8yakl1WiB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiAjMzMzOyB9XFxuXFxuLmJvb2stYXV0aG9yXzFWTTdlIHtcXG4gIGNvbG9yOiAjOTk5OyB9XFxuXFxuLmJvb2stY292ZXJfMWpySzgge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDEzNHB4O1xcbiAgaGVpZ2h0OiAxODRweDtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIHJlcXVpcmUoXCJhc3NldHMvaW1nL3NoYWRvdy5wbmdcIikgKyBcIikgbm8tcmVwZWF0IHRvcDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5ib29rLWNvdmVyXzFqcks4IGltZyB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBsZWZ0OiAxN3B4O1xcbiAgICB0b3A6IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyB9XFxuICAuYm9vay1jb3Zlcl8xanJLODpob3ZlciB7XFxuICAgIHRvcDogLTdweDsgfVxcblxcbi5ib29rLWRlc2NfeEZGS2wge1xcbiAgY29sb3I6ICM5OTk7IH1cXG5cXG4uYm9vay0tY2FyZF8zRk9reSB7XFxuICB3aWR0aDogYXV0bztcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZmxvYXQ6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMHB4OyB9XFxuICAuYm9vay0tY2FyZF8zRk9reSBhIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgLmJvb2stLWNhcmRfM0ZPa3kgYTpob3ZlciBpbWcge1xcbiAgICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgLmJvb2stLWNhcmRfM0ZPa3kgYTphY3RpdmUgaW1nIHtcXG4gICAgICBvcGFjaXR5OiAxOyB9XFxuICAuYm9vay0tY2FyZF8zRk9reSAuYm9vay1jb3Zlcl8xanJLOCB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGhlaWdodDogNzJweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XFxuICAgIC5ib29rLS1jYXJkXzNGT2t5IC5ib29rLWNvdmVyXzFqcks4OmhvdmVyIHtcXG4gICAgICB0b3A6IDA7IH1cXG4gICAgLmJvb2stLWNhcmRfM0ZPa3kgLmJvb2stY292ZXJfMWpySzggaW1nIHtcXG4gICAgICB3aWR0aDogNTBweDtcXG4gICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwOyB9XFxuICAuYm9vay0tY2FyZF8zRk9reSAuYm9vay1tZXRhXzNnbGNaIHtcXG4gICAgZmxvYXQ6IG5vbmU7IH1cXG4gIC5ib29rLS1jYXJkXzNGT2t5IC5tZXRhLWl0ZW1fMmNSeUoge1xcbiAgICB3aWR0aDogYXV0bzsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIm1ldGEtaXRlbVwiOiBcIm1ldGEtaXRlbV8yY1J5SlwiLFxuXHRcImJvb2tcIjogXCJib29rXzNPcXpfXCIsXG5cdFwiYm9vay1tZXRhXCI6IFwiYm9vay1tZXRhXzNnbGNaXCIsXG5cdFwiYm9vay1uYW1lXCI6IFwiYm9vay1uYW1lXzJqSXVaIG1ldGEtaXRlbV8yY1J5SlwiLFxuXHRcImJvb2stYXV0aG9yXCI6IFwiYm9vay1hdXRob3JfMVZNN2UgbWV0YS1pdGVtXzJjUnlKXCIsXG5cdFwiYm9vay1jb3ZlclwiOiBcImJvb2stY292ZXJfMWpySzhcIixcblx0XCJib29rLWRlc2NcIjogXCJib29rLWRlc2NfeEZGS2xcIixcblx0XCJib29rLS1jYXJkXCI6IFwiYm9vay0tY2FyZF8zRk9reSBib29rXzNPcXpfXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9vay9fYm9vay5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjc3XG4gKiogbW9kdWxlIGNodW5rcyA9IDMgNCA3IDEwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3NoYWRvdy40NzFlYTM3Zjk2LnBuZ1wiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYXNzZXRzL2ltZy9zaGFkb3cucG5nXG4gKiogbW9kdWxlIGlkID0gMjc4XG4gKiogbW9kdWxlIGNodW5rcyA9IDMgNCA3IDEwXG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9Cb29rTGlzdC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdC9Cb29rTGlzdC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjc5XG4gKiogbW9kdWxlIGNodW5rcyA9IDMgNCA3IDEwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYm9vay1saXN0XzJzX0psIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDsgfVxcbiAgLmJvb2stbGlzdF8yc19KbCBsaSB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xcbiAgICAgIC5ib29rLWxpc3RfMnNfSmwgbGkge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7IH0gfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImJvb2stbGlzdFwiOiBcImJvb2stbGlzdF8yc19KbFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0L0Jvb2tMaXN0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyODBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMyA0IDcgMTBcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0Jvb2tMaXN0U2VjdGlvbi5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdFNlY3Rpb24vQm9va0xpc3RTZWN0aW9uLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyODFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMyA0IDdcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zZWN0aW9uLXRpdGxlXzJLdjNEIHtcXG4gIG1hcmdpbjogMzVweCAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMzMzOyB9XFxuXFxuLmJvb2stbGlzdC1zZWN0aW9uXzJDZkRlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5tb3JlX21nUUhnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDMycHg7IH1cXG5cXG4uc2VjdGlvbi10aXRsZV8yS3YzRCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuICAuc2VjdGlvbi10aXRsZV8yS3YzRCBhIHtcXG4gICAgY29sb3I6ICMzMzM7IH1cXG4gICAgLnNlY3Rpb24tdGl0bGVfMkt2M0QgYTpob3ZlciB7XFxuICAgICAgY29sb3I6ICM2NjY7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJzZWN0aW9uLXRpdGxlXCI6IFwic2VjdGlvbi10aXRsZV8yS3YzRFwiLFxuXHRcImJvb2stbGlzdC1zZWN0aW9uXCI6IFwiYm9vay1saXN0LXNlY3Rpb25fMkNmRGVcIixcblx0XCJtb3JlXCI6IFwibW9yZV9tZ1FIZ1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0U2VjdGlvbi9Cb29rTGlzdFNlY3Rpb24uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI4MlxuICoqIG1vZHVsZSBjaHVua3MgPSAzIDQgN1xuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vQXBwSG9tZS5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FwcEhvbWUvQXBwSG9tZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjgzXG4gKiogbW9kdWxlIGNodW5rcyA9IDNcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wYWdlLXRpdGxlX1ozNjZWIHtcXG4gIG1hcmdpbjogMzVweCAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMzMzOyB9XFxuXFxuLmhlcm8taW1hZ2VfMTRaVVgge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MDBweDsgfVxcblxcbi5sb2dvX3NpVDdBIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAxNTBweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtOyB9XFxuXFxuLmJ0bl8xZGNtcSB7XFxuICBtYXJnaW46IDAgYXV0bzsgfVxcblxcbi5wYWdlLXRpdGxlX1ozNjZWIHtcXG4gIG1hcmdpbjogMTBweCAwIDIwcHg7XFxuICBmb250LXNpemU6IDJyZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJwYWdlLXRpdGxlXCI6IFwicGFnZS10aXRsZV9aMzY2VlwiLFxuXHRcImhlcm8taW1hZ2VcIjogXCJoZXJvLWltYWdlXzE0WlVYXCIsXG5cdFwibG9nb1wiOiBcImxvZ29fc2lUN0FcIixcblx0XCJidG5cIjogXCJidG5fMWRjbXFcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FwcEhvbWUvQXBwSG9tZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjg0XG4gKiogbW9kdWxlIGNodW5rcyA9IDNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9