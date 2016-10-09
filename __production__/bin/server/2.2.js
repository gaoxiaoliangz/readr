exports.ids = [2];
exports.modules = {

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Loading = __webpack_require__(274);
	
	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Loading2.default;

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(109);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _classnames = __webpack_require__(107);
	
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
	
	var styles = __webpack_require__(275);
	var Loading = function (_Component) {
	    _inherits(Loading, _Component);
	
	    function Loading() {
	        _classCallCheck(this, Loading);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Loading).apply(this, arguments));
	    }
	
	    _createClass(Loading, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var text = _props.text;
	            var center = _props.center;
	
	            var wrapClass = (0, _classnames2.default)({
	                'loading-wrap--center': center,
	                'loading-wrap': !center
	            });
	            return _react2.default.createElement("div", { styleName: wrapClass }, _react2.default.createElement("span", { styleName: "text-loading" }, text));
	        }
	    }]);
	
	    return Loading;
	}(_react.Component);
	Loading = __decorate([(0, _reactCssModules2.default)(styles)], Loading);
	Loading['defaultProps'] = {
	    text: '加载中 ...'
	};
	exports.default = Loading;

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(276);
	    var insertCss = __webpack_require__(113);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(112)();
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

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(84);
	
	var _actions = __webpack_require__(85);
	
	var _selectors = __webpack_require__(231);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _BookListSection = __webpack_require__(281);
	
	var _BookListSection2 = _interopRequireDefault(_BookListSection);
	
	var _DocContainer = __webpack_require__(245);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _form = __webpack_require__(289);
	
	var _reactCssModules = __webpack_require__(109);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _layout = __webpack_require__(204);
	
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
	
	// import Loading from '../../elements/Loading'
	var styles = __webpack_require__(311);
	var Home = function (_Component) {
	    _inherits(Home, _Component);
	
	    function Home(props) {
	        _classCallCheck(this, Home);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));
	
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
	
	            return _react2.default.createElement(_DocContainer2.default, { bodyClass: "home" }, this.props.session.user.role === 'visitor' && this.props.session.isFetching === false ? _react2.default.createElement("div", { styleName: "hero-image" }, _react2.default.createElement(_layout.Container, null, _react2.default.createElement("div", { styleName: "logo" }, "Readr"), _react2.default.createElement("h1", { styleName: "page-title" }, "新的阅读体验"), _react2.default.createElement(_form.Button, { to: "/signup" }, "现在加入"))) : null, _react2.default.createElement(_layout.Container, null, _react2.default.createElement(_BookListSection2.default, { bookEntities: newestBooks.slice(0, 6), title: "新书速递", moreLink: "/browse", isFetching: isBooksFetching })));
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
	Home = __decorate([(0, _reactCssModules2.default)(styles)], Home);
	function mapStateToProps(state, ownProps) {
	    return {
	        newestBooks: selectors.books(undefined, '1')(state),
	        isBooksFetching: selectors.common.isPaginationFetching('books')(state),
	        session: state.session
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { loadBooks: _actions.loadBooks, fetchCollections: _actions.fetchCollections, sendNotification: _actions.sendNotification })(Home);

/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _BookListSection = __webpack_require__(282);
	
	var _BookListSection2 = _interopRequireDefault(_BookListSection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _BookListSection2.default;

/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(69);
	
	var _BookList = __webpack_require__(283);
	
	var _BookList2 = _interopRequireDefault(_BookList);
	
	var _Loading = __webpack_require__(273);
	
	var _Loading2 = _interopRequireDefault(_Loading);
	
	var _reactCssModules = __webpack_require__(109);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _Icon = __webpack_require__(105);
	
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
	
	var styles = __webpack_require__(309);
	var BookListSection = function (_Component) {
	    _inherits(BookListSection, _Component);
	
	    function BookListSection() {
	        _classCallCheck(this, BookListSection);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(BookListSection).apply(this, arguments));
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

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _BookList = __webpack_require__(284);
	
	var _BookList2 = _interopRequireDefault(_BookList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _BookList2.default;

/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Book = __webpack_require__(285);
	
	var _Book2 = _interopRequireDefault(_Book);
	
	var _reactCssModules = __webpack_require__(109);
	
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
	
	var styles = __webpack_require__(307);
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

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Book = __webpack_require__(286);
	
	var _Book2 = _interopRequireDefault(_Book);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Book2.default;

/***/ },

/***/ 286:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(69);
	
	var _BookInfoPopup = __webpack_require__(287);
	
	var _BookInfoPopup2 = _interopRequireDefault(_BookInfoPopup);
	
	var _reactCssModules = __webpack_require__(109);
	
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
	
	var styles = __webpack_require__(304);
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

/***/ 287:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _BookInfoPopup = __webpack_require__(288);
	
	var _BookInfoPopup2 = _interopRequireDefault(_BookInfoPopup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _BookInfoPopup2.default;

/***/ },

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _form = __webpack_require__(289);
	
	var _reactCssModules = __webpack_require__(109);
	
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
	
	var styles = __webpack_require__(302);
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

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Textarea = exports.SelectizeInput = exports.Input = exports.Button = undefined;
	
	var _Button = __webpack_require__(195);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Input = __webpack_require__(290);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _SelectizeInput = __webpack_require__(294);
	
	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);
	
	var _Textarea = __webpack_require__(298);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Button = _Button2.default;
	exports.Input = _Input2.default;
	exports.SelectizeInput = _SelectizeInput2.default;
	exports.Textarea = _Textarea2.default;

/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Input = __webpack_require__(291);
	
	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Input2.default;

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(109);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _classnames = __webpack_require__(107);
	
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
	
	var styles = __webpack_require__(292);
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

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(293);
	    var insertCss = __webpack_require__(113);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(112)();
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

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _SelectizeInput = __webpack_require__(295);
	
	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SelectizeInput2.default;

/***/ },

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Icon = __webpack_require__(105);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _classnames = __webpack_require__(107);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(109);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _isDescendant = __webpack_require__(93);
	
	var _isDescendant2 = _interopRequireDefault(_isDescendant);
	
	var _lodash = __webpack_require__(10);
	
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
	
	var styles = __webpack_require__(296);
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
	            if (e.keyCode === 8 && !this.props.value && this.props.values.length !== 0) {
	                this.removeValue(-1);
	            }
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
	            var omitSelectedValuesFromOptions = _props.omitSelectedValuesFromOptions;
	
	            var value = this.props.value || '';
	            var options = this.props.options || [];
	            var inputWidth = values.length > 0 ? value.length === 0 ? 16 : value.length * 16 : '100%';
	            var placeholder = values.length > 0 ? '' : this.props.placeholder;
	            var filteredOptions = options.filter(function (option) {
	                if (omitSelectedValuesFromOptions) {
	                    var valueOfValues = _lodash2.default.map(values, 'value');
	                    return valueOfValues.indexOf(option.value) === -1;
	                }
	                return true;
	            });
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
	                } })), this.state.showOptions && (filteredOptions.length !== 0 || onAddNewValue) ? _react2.default.createElement("ul", { styleName: "query-results" }, filteredOptions.map(function (option, index) {
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
	SelectizeInput['defaultProps'] = {
	    omitSelectedValuesFromOptions: true
	};
	exports.default = SelectizeInput;

/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(297);
	    var insertCss = __webpack_require__(113);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(112)();
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

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Textarea = __webpack_require__(299);
	
	var _Textarea2 = _interopRequireDefault(_Textarea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Textarea2.default;

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(109);
	
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
	
	var styles = __webpack_require__(300);
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

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(301);
	    var insertCss = __webpack_require__(113);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(112)();
	// imports
	exports.i(__webpack_require__(243), "");
	
	// module
	exports.push([module.id, ".textarea-wrap_Xkpj1 {\n  margin: 10px 0;\n  position: relative;\n}\n\n.textarea_1EdoS {\n  width: 100%;\n  padding: 5px;\n  border: 1px solid var(--gray);\n  outline: none;\n  height: 100px;\n  transition: border-color .3s;\n}\n\n.textarea_1EdoS:focus {\n  border-color: var(--blue);\n}\n", ""]);
	
	// exports
	exports.locals = {
		"textarea-wrap": "textarea-wrap_Xkpj1",
		"textarea": "textarea_1EdoS"
	};

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(303);
	    var insertCss = __webpack_require__(113);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(112)();
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

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(305);
	    var insertCss = __webpack_require__(113);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(112)();
	// imports
	
	
	// module
	exports.push([module.id, ".meta-item_2cRyJ {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.book_3Oqz_ {\n  float: left;\n  transition: all 0.2s ease 0s;\n  position: relative;\n  width: 150px;\n  padding: 0 10px; }\n  .book_3Oqz_ a {\n    display: block;\n    padding-top: 10px;\n    position: relative; }\n    .book_3Oqz_ a:hover img {\n      opacity: .96; }\n    .book_3Oqz_ a:active img {\n      opacity: .8; }\n\n.book-meta_3glcZ {\n  background: transparent; }\n\n.meta-item_2cRyJ {\n  width: 100%;\n  text-align: left;\n  display: block;\n  line-height: 1.5;\n  margin-left: 17px;\n  width: 134px; }\n\n.book-name_2jIuZ {\n  font-size: 1.3rem;\n  color: #333; }\n\n.book-author_1VM7e {\n  color: #999; }\n\n.book-cover_1jrK8 {\n  position: relative;\n  margin: 0;\n  width: 134px;\n  height: 184px;\n  top: 0;\n  background: url(" + __webpack_require__(306) + ") no-repeat top;\n  transition: all 0.2s ease 0s;\n  position: relative; }\n  .book-cover_1jrK8 img {\n    width: 100px;\n    height: 150px;\n    display: block;\n    position: absolute;\n    border: none;\n    left: 17px;\n    top: 7px;\n    border-radius: 4px; }\n  .book-cover_1jrK8:hover {\n    top: -7px; }\n\n.book-desc_xFFKl {\n  color: #999; }\n\n.book--card_3FOky {\n  width: auto;\n  background: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  padding: 10px;\n  float: none;\n  height: 100px; }\n  .book--card_3FOky a {\n    padding: 0;\n    display: block;\n    overflow: hidden;\n    opacity: 1; }\n    .book--card_3FOky a:hover img {\n      opacity: 1; }\n    .book--card_3FOky a:active img {\n      opacity: 1; }\n  .book--card_3FOky .book-cover_1jrK8 {\n    width: auto;\n    height: auto;\n    height: 72px;\n    background: none;\n    overflow: hidden;\n    float: left;\n    border-radius: 4px;\n    margin-right: 20px; }\n    .book--card_3FOky .book-cover_1jrK8:hover {\n      top: 0; }\n    .book--card_3FOky .book-cover_1jrK8 img {\n      width: 50px;\n      height: auto;\n      position: relative;\n      top: 0;\n      left: 0; }\n  .book--card_3FOky .book-meta_3glcZ {\n    float: none; }\n  .book--card_3FOky .meta-item_2cRyJ {\n    width: auto; }\n", ""]);
	
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

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/shadow.471ea37f96.png";

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(308);
	    var insertCss = __webpack_require__(113);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(112)();
	// imports
	
	
	// module
	exports.push([module.id, ".book-list_2s_Jl {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin-left: -10px;\n  margin-right: -10px; }\n  .book-list_2s_Jl li {\n    float: left;\n    width: 50%;\n    padding: 10px;\n    box-sizing: border-box; }\n    @media (max-width: 540px) {\n      .book-list_2s_Jl li {\n        width: 100%; } }\n", ""]);
	
	// exports
	exports.locals = {
		"book-list": "book-list_2s_Jl"
	};

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(310);
	    var insertCss = __webpack_require__(113);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(112)();
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

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(312);
	    var insertCss = __webpack_require__(113);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(112)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9pbmRleC50cz9hNjBiIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL0xvYWRpbmcudHN4PzZhN2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9Mb2FkaW5nLnNjc3M/MTBkYioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9Mb2FkaW5nLnNjc3M/NjFhNCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FwcEhvbWUvQXBwSG9tZS50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3RTZWN0aW9uL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0U2VjdGlvbi9Cb29rTGlzdFNlY3Rpb24udHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0L2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0L0Jvb2tMaXN0LnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2svQm9vay50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0luZm9Qb3B1cC9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL0Jvb2tJbmZvUG9wdXAudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L0lucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9JbnB1dC5zY3NzPzQwMTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuc2Nzcz8wNDgzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LnNjc3M/Y2VhNCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC5zY3NzPzhiOTMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEuY3NzP2FhMjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEuY3NzPzViYzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL0Jvb2tJbmZvUG9wdXAuc2Nzcz8zNTZkIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0luZm9Qb3B1cC9Cb29rSW5mb1BvcHVwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rL19ib29rLnNjc3M/ZTgxNiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2svX2Jvb2suc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltZy9zaGFkb3cucG5nIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3QvQm9va0xpc3Quc2Nzcz84ZTM1Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3QvQm9va0xpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0U2VjdGlvbi9Cb29rTGlzdFNlY3Rpb24uc2Nzcz8wZWJmIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3RTZWN0aW9uL0Jvb2tMaXN0U2VjdGlvbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9BcHBIb21lL0FwcEhvbWUuc2Nzcz85Y2RlIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9BcHBIb21lL0FwcEhvbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRGtCOzs7O0FBQ0U7Ozs7QUFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ25DLEtBQVksU0FBVSxvQkFBa0I7QUFTeEM7Ozs7Ozs7Ozs7OzswQkFFaUMsS0FBTTtpQkFBdkI7aUJBQVU7O0FBRXRCLHVEQUE2QjtBQUNMLHlDQUFRO0FBQ2hCLGlDQUFFLENBQ2hCO2NBSDBCLENBQWIsQ0FGVDtBQU9DLG9CQUNMLDhCQUFJLFNBQVUsV0FBWSxh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QUF1QixzQkFBc0IsRUFBRSxnQkFBZ0IsbUJBQW1CLEVBQUUsdUJBQXVCLHdCQUF3QixvQkFBb0IsRUFBRTs7QUFFalk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRyIsImZpbGUiOiIyLjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Mb2FkaW5nLnNjc3MnKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBiYWNrZHJvcD86IGJvb2xlYW5cbiAgdGV4dD86IHN0cmluZ1xuICBjZW50ZXI/OiBib29sZWFuXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIExvYWRpbmcgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRleHQsIGNlbnRlciB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3Qgd3JhcENsYXNzID0gY2xhc3NuYW1lcyh7XG4gICAgICAnbG9hZGluZy13cmFwLS1jZW50ZXInOiBjZW50ZXIsXG4gICAgICAnbG9hZGluZy13cmFwJzogIWNlbnRlclxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9e3dyYXBDbGFzc30+XG4gICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cInRleHQtbG9hZGluZ1wiPnt0ZXh0fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5Mb2FkaW5nWydkZWZhdWx0UHJvcHMnXSA9IHtcbiAgdGV4dDogJ+WKoOi9veS4rSAuLi4nXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0xvYWRpbmcuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjc1XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNlxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRleHQtbG9hZGluZ18zZWZxaCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDUwcHggMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogIzk5OTsgfVxcblxcbi50ZXh0LWxvYWRpbmdfM2VmcWgge1xcbiAgbWFyZ2luOiAzMHB4IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4ubG9hZGluZy13cmFwX2h0eVl6IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG4ubG9hZGluZy13cmFwLS1jZW50ZXJfM1BFSWgge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidGV4dC1sb2FkaW5nXCI6IFwidGV4dC1sb2FkaW5nXzNlZnFoXCIsXG5cdFwibG9hZGluZy13cmFwXCI6IFwibG9hZGluZy13cmFwX2h0eVl6XCIsXG5cdFwibG9hZGluZy13cmFwLS1jZW50ZXJcIjogXCJsb2FkaW5nLXdyYXAtLWNlbnRlcl8zUEVJaFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL0xvYWRpbmcuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI3NlxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDZcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBsb2FkQm9va3MsIGZldGNoQ29sbGVjdGlvbnMsIHNlbmROb3RpZmljYXRpb24gfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycydcbmltcG9ydCBCb29rTGlzdFNlY3Rpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Cb29rTGlzdFNlY3Rpb24nXG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvX2Zvcm0nXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL19sYXlvdXQnXG4vLyBpbXBvcnQgTG9hZGluZyBmcm9tICcuLi8uLi9lbGVtZW50cy9Mb2FkaW5nJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9BcHBIb21lLnNjc3MnKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBsb2FkQm9va3M6IChkYXRhPzogbG9hZEJvb2tzKSA9PiB2b2lkXG4gIGZldGNoQ29sbGVjdGlvbnM6IGFueVxuICBzZXNzaW9uOiBhbnlcbiAgbmV3ZXN0Qm9va3M6IGFueVxuICBzZW5kTm90aWZpY2F0aW9uOiBhbnlcbiAgaXNCb29rc0ZldGNoaW5nOiBib29sZWFuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBzaG93UmVjZW50UmVhZGluZzogYm9vbGVhblxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBJU3RhdGU+IHtcblxuICBzdGF0aWMgZmV0Y2hEYXRhKHtzdG9yZX0pIHtcbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2gobG9hZEJvb2tzKCkpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93UmVjZW50UmVhZGluZzogZmFsc2VcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmxvYWRCb29rcygpXG4gICAgdGhpcy5wcm9wcy5mZXRjaENvbGxlY3Rpb25zKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuc2Vzc2lvbi5pc0ZldGNoaW5nICYmICFuZXh0UHJvcHMuc2Vzc2lvbi5pc0ZldGNoaW5nKSB7XG4gICAgICBpZiAobmV4dFByb3BzLnNlc3Npb24udXNlci5yb2xlICE9PSAndmlzaXRvcicpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2hvd1JlY2VudFJlYWRpbmc6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgbmV3ZXN0Qm9va3MsIGlzQm9va3NGZXRjaGluZyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2NDb250YWluZXIgYm9keUNsYXNzPVwiaG9tZVwiPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIucm9sZSA9PT0gJ3Zpc2l0b3InICYmIHRoaXMucHJvcHMuc2Vzc2lvbi5pc0ZldGNoaW5nID09PSBmYWxzZSA/IChcbiAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiaGVyby1pbWFnZVwiPlxuICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwibG9nb1wiPlJlYWRyPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlTmFtZT1cInBhZ2UtdGl0bGVcIj7mlrDnmoTpmIXor7vkvZPpqow8L2gxPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdG89XCIvc2lnbnVwXCI+546w5Zyo5Yqg5YWlPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxCb29rTGlzdFNlY3Rpb25cbiAgICAgICAgICAgIGJvb2tFbnRpdGllcz17bmV3ZXN0Qm9va3Muc2xpY2UoMCwgNikgfVxuICAgICAgICAgICAgdGl0bGU9XCLmlrDkuabpgJ/pgJJcIlxuICAgICAgICAgICAgbW9yZUxpbms9XCIvYnJvd3NlXCJcbiAgICAgICAgICAgIGlzRmV0Y2hpbmc9e2lzQm9va3NGZXRjaGluZ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Eb2NDb250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBuZXdlc3RCb29rczogc2VsZWN0b3JzLmJvb2tzKHVuZGVmaW5lZCwgJzEnKShzdGF0ZSksXG4gICAgaXNCb29rc0ZldGNoaW5nOiBzZWxlY3RvcnMuY29tbW9uLmlzUGFnaW5hdGlvbkZldGNoaW5nKCdib29rcycpKHN0YXRlKSxcbiAgICBzZXNzaW9uOiBzdGF0ZS5zZXNzaW9uLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCB7fT4oXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgeyBsb2FkQm9va3MsIGZldGNoQ29sbGVjdGlvbnMsIHNlbmROb3RpZmljYXRpb24gfVxuKShIb21lKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL0FwcEhvbWUvQXBwSG9tZS50c3hcbiAqKi8iLCJpbXBvcnQgQm9va0xpc3RTZWN0aW9uIGZyb20gJy4vQm9va0xpc3RTZWN0aW9uJ1xuZXhwb3J0IGRlZmF1bHQgQm9va0xpc3RTZWN0aW9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0U2VjdGlvbi9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgQm9va0xpc3QgZnJvbSAnLi4vQm9va0xpc3QnXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi8uLi9lbGVtZW50cy9Mb2FkaW5nJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9JY29uJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Cb29rTGlzdFNlY3Rpb24uc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBib29rRW50aXRpZXM6IGFueVxuICB0aXRsZT86IHN0cmluZ1xuICBtb3JlTGluaz86IHN0cmluZ1xuICBpc0ZldGNoaW5nPzogYm9vbGVhblxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIEJvb2tMaXN0U2VjdGlvbiBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIHt9PiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7aXNGZXRjaGluZywgdGl0bGUsIG1vcmVMaW5rLCBib29rRW50aXRpZXN9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwiYm9vay1saXN0LXNlY3Rpb25cIj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMudGl0bGUgJiYgKFxuICAgICAgICAgICAgbW9yZUxpbmtcbiAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgPGgyIHN0eWxlTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXttb3JlTGlua30+e3RpdGxlfTxJY29uIG5hbWU9XCJhcnJvd1JpZ2h0XCIgc2l6ZT17MjB9IC8+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgPGgyIHN0eWxlTmFtZT1cInNlY3Rpb24tdGl0bGVcIj57dGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgaXNGZXRjaGluZyAmJiBib29rRW50aXRpZXMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICA/IDxMb2FkaW5nIC8+XG4gICAgICAgICAgICA6IDxCb29rTGlzdCBib29rRW50aXRpZXM9e2Jvb2tFbnRpdGllc30gLz5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tMaXN0U2VjdGlvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdFNlY3Rpb24vQm9va0xpc3RTZWN0aW9uLnRzeFxuICoqLyIsImltcG9ydCBCb29rTGlzdCBmcm9tICcuL0Jvb2tMaXN0J1xuZXhwb3J0IGRlZmF1bHQgQm9va0xpc3RcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3QvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm9vayBmcm9tICcuLi9Cb29rJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0Jvb2tMaXN0LnNjc3MnKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBib29rRW50aXRpZXM6IHtcbiAgICBpZDogc3RyaW5nXG4gICAgdGl0bGU6IHN0cmluZ1xuICAgIGF1dGhvcnM6IGFueVxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgICBjb3Zlcjogc3RyaW5nXG4gIH1bXVxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBCb29rTGlzdCBleHRlbmRzIENvbXBvbmVudDxQcm9wcywge30+IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dWwgc3R5bGVOYW1lPVwiYm9vay1saXN0XCIgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMuYm9va0VudGl0aWVzICYmIHRoaXMucHJvcHMuYm9va0VudGl0aWVzLmxlbmd0aCAhPT0gMFxuICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuYm9va0VudGl0aWVzLm1hcCgoYm9vaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHRpdGxlLCBhdXRob3JzLCBkZXNjcmlwdGlvbiwgY292ZXIgfSA9IGJvb2tcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8Qm9va1xuICAgICAgICAgICAgICAgICAgICAgIGlkPXtib29rLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZSB8fCAn5peg5qCH6aKYJ31cbiAgICAgICAgICAgICAgICAgICAgICBhdXRob3JzPXthdXRob3JzICYmIGF1dGhvcnMubWFwKGF1dGhvciA9PiBhdXRob3IubmFtZSkuam9pbignLCAnKSB8fCAn5pyq55+l5L2c6ICFJ31cbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgY292ZXI9e2NvdmVyfVxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVQb3B1cFxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICA8bGk+5pqC5peg6K6w5b2VPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va0xpc3RcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3QvQm9va0xpc3QudHN4XG4gKiovIiwiaW1wb3J0IEJvb2sgZnJvbSAnLi9Cb29rJ1xuZXhwb3J0IGRlZmF1bHQgQm9va1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBCb29rSW5mb1BvcHVwIGZyb20gJy4uL0Jvb2tJbmZvUG9wdXAnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vX2Jvb2suc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB0aXRsZTogc3RyaW5nXG4gIGF1dGhvcnM6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGlkOiBzdHJpbmdcbiAgY292ZXI6IHN0cmluZ1xuICBkaXNhYmxlUG9wdXA/OiBib29sZWFuXG4gIHNob3dEZXNjPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgc2hvd1BvcHVwOiBib29sZWFuXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9vayBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dQb3B1cDogZmFsc2VcbiAgICB9XG4gICAgdGhpcy5zaG93UG9wdXAgPSB0aGlzLnNob3dQb3B1cC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oaWRlUG9wdXAgPSB0aGlzLmhpZGVQb3B1cC5iaW5kKHRoaXMpXG4gIH1cblxuICBzaG93UG9wdXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93UG9wdXA6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgaGlkZVBvcHVwKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd1BvcHVwOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzaG93RGVzYywgZGVzY3JpcHRpb24sIGNvdmVyIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBvbk1vdXNlRW50ZXI9e3RoaXMuc2hvd1BvcHVwfSBvbk1vdXNlTGVhdmU9e3RoaXMuaGlkZVBvcHVwfSBzdHlsZU5hbWU9XCJib29rLS1jYXJkXCI+XG4gICAgICAgIDxMaW5rIHRvPXsnL2Jvb2svJyArIHRoaXMucHJvcHMuaWR9ID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb3ZlciAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiYm9vay1jb3ZlclwiPjxpbWcgc3JjPXt0aGlzLnByb3BzLmNvdmVyfS8+PC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiYm9vay1tZXRhXCI+XG4gICAgICAgICAgICA8c3BhbiB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gc3R5bGVOYW1lPVwiYm9vay1uYW1lXCI+e3RoaXMucHJvcHMudGl0bGUgfHwgJ+aXoOagh+mimCd9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwiYm9vay1hdXRob3JcIj57dGhpcy5wcm9wcy5hdXRob3JzIHx8ICfkvZzogIXkuI3or6YnfTwvc3Bhbj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2hvd0Rlc2MgJiYgKFxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cImJvb2stZGVzY1wiPntkZXNjcmlwdGlvbiB8fCAn56m6J308L3NwYW4+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5zaG93UG9wdXAgJiYgIXRoaXMucHJvcHMuZGlzYWJsZVBvcHVwICYmIChcbiAgICAgICAgICAgIDxCb29rSW5mb1BvcHVwXG4gICAgICAgICAgICAgIGJvb2tJZD17dGhpcy5wcm9wcy5pZH1cbiAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgIGF1dGhvcj17dGhpcy5wcm9wcy5hdXRob3JzfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dGhpcy5wcm9wcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rL0Jvb2sudHN4XG4gKiovIiwiaW1wb3J0IEJvb2tJbmZvUG9wdXAgZnJvbSAnLi9Cb29rSW5mb1BvcHVwJ1xuZXhwb3J0IGRlZmF1bHQgQm9va0luZm9Qb3B1cFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL19mb3JtJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0Jvb2tJbmZvUG9wdXAuc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBhdXRob3I6IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgYm9va0lkOiBzdHJpbmdcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBCb29rSW5mb1BvcHVwIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywge30+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGF1dGhvciwgdGl0bGUsIGRlc2NyaXB0aW9uLCBib29rSWQgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cInBvcHVwXCI+XG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGgyIHN0eWxlTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgPHAgc3R5bGVOYW1lPVwiYXV0aG9yXCI+e2F1dGhvcn08L3A+XG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImJsdWVcIiB0bz17Jy92aWV3ZXIvYm9vay8nICsgYm9va0lkfT7pmIXor7s8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rSW5mb1BvcHVwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tJbmZvUG9wdXAvQm9va0luZm9Qb3B1cC50c3hcbiAqKi8iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnXG5pbXBvcnQgU2VsZWN0aXplSW5wdXQgZnJvbSAnLi9TZWxlY3RpemVJbnB1dCdcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL1RleHRhcmVhJ1xuXG5leHBvcnQgeyBCdXR0b24sIElucHV0LCBTZWxlY3RpemVJbnB1dCwgVGV4dGFyZWEgfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcbmV4cG9ydCBkZWZhdWx0IElucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vSW5wdXQuc2NzcycpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgb25DaGFuZ2U/OiBhbnlcbiAgdmFsdWU/OiBzdHJpbmdcbiAgdHlwZT86IHN0cmluZ1xuICBuYW1lPzogc3RyaW5nXG4gIGVycm9yPzogYW55XG4gIHRvdWNoZWQ/OiBib29sZWFuXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpXG4gICAgZGVsZXRlIHByb3BzLmNsYXNzTmFtZVxuICAgIGNvbnN0IHsgZXJyb3IsIHRvdWNoZWQgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHNob3dFcnJvciA9IGVycm9yICYmIHRvdWNoZWRcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT17Y2xhc3NuYW1lcyh7J2lucHV0LXdyYXAnOiAhc2hvd0Vycm9yLCAnaW5wdXQtd3JhcC0tZXJyb3InOiBzaG93RXJyb3J9KX0gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJ30+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHN0eWxlTmFtZT1cImlucHV0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpXG4gICAgICAgICAgfX1cbiAgICAgICAgICB0eXBlPXt0aGlzLnByb3BzLnR5cGUgPyB0aGlzLnByb3BzLnR5cGUgOiAndGV4dCd9XG4gICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lID8gdGhpcy5wcm9wcy5uYW1lIDogbnVsbH1cbiAgICAgICAgLz5cbiAgICAgICAge1xuICAgICAgICAgIHNob3dFcnJvciAmJiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImVycm9yLW1zZ1wiPntlcnJvcn08L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9JbnB1dC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI5MlxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5wdXQtd3JhcF8xM0JiaywgLmlucHV0LXdyYXAtLWVycm9yXzJTSkExIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmlucHV0Xzc1cmxOIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjNzO1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICBvdXRsaW5lOiBub25lOyB9XFxuXFxuLmlucHV0Xzc1cmxOOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzFCMjY3RjsgfVxcblxcbi5pbnB1dC13cmFwLS1lcnJvcl8yU0pBMSAuaW5wdXRfNzVybE4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjZjIxNjVlOyB9XFxuXFxuLmVycm9yLW1zZ18zRWZ6aSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICBjb2xvcjogI2YyMTY1ZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImlucHV0LXdyYXBcIjogXCJpbnB1dC13cmFwXzEzQmJrXCIsXG5cdFwiaW5wdXQtd3JhcC0tZXJyb3JcIjogXCJpbnB1dC13cmFwLS1lcnJvcl8yU0pBMVwiLFxuXHRcImlucHV0XCI6IFwiaW5wdXRfNzVybE5cIixcblx0XCJlcnJvci1tc2dcIjogXCJlcnJvci1tc2dfM0VmemlcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI5M1xuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiaW1wb3J0IFNlbGVjdGl6ZUlucHV0IGZyb20gJy4vU2VsZWN0aXplSW5wdXQnXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RpemVJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9JY29uJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IGlzRGVzY2VuZGFudCBmcm9tICcuLi8uLi8uLi91dGlscy9kb20vaXNEZXNjZW5kYW50J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9TZWxlY3RpemVJbnB1dC5zY3NzJylcblxudHlwZSBUeXBlT3B0aW9uID0ge1xuICB2YWx1ZTogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgYWRkaXRpb25hbD86IGFueVxufVxuXG50eXBlIFR5cGVWYWx1ZSA9IHtcbiAgdmFsdWU6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICBsYWJlbD86IHN0cmluZ1xuICBzdGF5Rm9jdXNlZD86IGJvb2xlYW4gLy8gZGVmYXVsdCB0cnVlXG4gIG9taXRTZWxlY3RlZFZhbHVlc0Zyb21PcHRpb25zPzogYm9vbGVhblxuXG4gIHZhbHVlOiBzdHJpbmdcbiAgb25JbnB1dENoYW5nZTogKG5ld1ZhbHVlOiBzdHJpbmcpID0+IHZvaWRcblxuICBvcHRpb25zOiBBcnJheTxUeXBlT3B0aW9uPlxuICBvbk9wdGlvbnNDaGFuZ2U/OiAobmV3VmFsdWVzOiBBcnJheTxUeXBlT3B0aW9uPikgPT4gdm9pZFxuXG4gIHZhbHVlczogQXJyYXk8VHlwZVZhbHVlPlxuICBvblZhbHVlc0NoYW5nZTogKG5ld1ZhbHVlczogQXJyYXk8VHlwZVZhbHVlPikgPT4gdm9pZFxuXG4gIC8vIOmineWkluWKn+iDvVxuICBvbkFkZE5ld1ZhbHVlPzogKG5ld1ZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbiAgb25PcHRpb25DbGljaz86IChzZWxlY3RlZFZhbHVlOiBUeXBlT3B0aW9uKSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBmb2N1cz86IGJvb2xlYW5cbiAgc2hvd09wdGlvbnM/OiBib29sZWFuXG4gIHZhbHVlPzogc3RyaW5nXG4gIGV4cGVuZGVkT3B0aW9uSW5kZXg/OiBudW1iZXJcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBTZWxlY3RpemVJbnB1dCBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50XG4gIGlucHV0V3JhcDogSFRNTERpdkVsZW1lbnRcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93T3B0aW9uczogZmFsc2UsXG4gICAgICBmb2N1czogZmFsc2UsXG4gICAgICB2YWx1ZTogJycsXG4gICAgICBleHBlbmRlZE9wdGlvbkluZGV4OiAwXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrID0gdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2suYmluZCh0aGlzKVxuICAgIHRoaXMuZm9jdXNJbnB1dCA9IHRoaXMuZm9jdXNJbnB1dC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgYWRkVmFsdWUobmV3VmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLm9uVmFsdWVzQ2hhbmdlKHRoaXMucHJvcHMudmFsdWVzLmNvbmNhdChuZXdWYWx1ZSkpXG4gICAgaWYgKHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSh0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiAob3B0aW9uLnZhbHVlID09PSBuZXdWYWx1ZS52YWx1ZVxuICAgICAgICA/IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbiwgeyBkaXNhYmxlZDogdHJ1ZSB9KVxuICAgICAgICA6IG9wdGlvbikpKVxuICAgIH1cbiAgICB0aGlzLmNsZWFySW5wdXRWYWx1ZSgpXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnN0YXlGb2N1c2VkID09PSAndW5kZWZpbmVkJyB8fCB0aGlzLnByb3BzLnN0YXlGb2N1c2VkICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5mb2N1c0lucHV0KClcbiAgICB9XG4gICAgdGhpcy5oaWRlT3B0aW9ucygpXG4gIH1cblxuICBzaG93T3B0aW9ucygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dPcHRpb25zOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIGhpZGVPcHRpb25zKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd09wdGlvbnM6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZVZhbHVlKGluZGV4KSB7XG4gICAgbGV0IG5ld1ZhbHVlcyA9IFtdXG4gICAgbGV0IHJlbW92ZWRWYWx1ZVxuXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgbmV3VmFsdWVzID0gdGhpcy5wcm9wcy52YWx1ZXMuc2xpY2UoMCwgdGhpcy5wcm9wcy52YWx1ZXMubGVuZ3RoIC0gMSlcbiAgICAgIHJlbW92ZWRWYWx1ZSA9IHRoaXMucHJvcHMudmFsdWVzW3RoaXMucHJvcHMudmFsdWVzLmxlbmd0aCAtIDFdLnZhbHVlXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlcyA9IHRoaXMucHJvcHMudmFsdWVzXG4gICAgICAgIC5maWx0ZXIoKHYsIGkpID0+IHtcbiAgICAgICAgICByZW1vdmVkVmFsdWUgPSB2LnZhbHVlXG4gICAgICAgICAgcmV0dXJuIGkgIT09IGluZGV4XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSh0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiAob3B0aW9uLnZhbHVlID09PSByZW1vdmVkVmFsdWVcbiAgICAgICAgPyBPYmplY3QuYXNzaWduKHt9LCBvcHRpb24sIHsgZGlzYWJsZWQ6IGZhbHNlIH0pXG4gICAgICAgIDogb3B0aW9uKSkpXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vblZhbHVlc0NoYW5nZShuZXdWYWx1ZXMpXG4gIH1cblxuICBjbGVhcklucHV0VmFsdWUoKSB7XG4gICAgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKCcnKVxuICB9XG5cbiAgaGFuZGxlS2V5UHJlc3MoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDggJiYgIXRoaXMucHJvcHMudmFsdWUgJiYgdGhpcy5wcm9wcy52YWx1ZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICB0aGlzLnJlbW92ZVZhbHVlKC0xKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UoZS50YXJnZXQudmFsdWUpXG4gICAgaWYgKCh0aGlzLnByb3BzLm9wdGlvbnMgfHwgW10pLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdGhpcy5zaG93T3B0aW9ucygpXG4gICAgfVxuICB9XG5cbiAgZm9jdXNJbnB1dCgpIHtcbiAgICB0aGlzLmlucHV0LmZvY3VzKClcbiAgfVxuXG4gIGhhbmRsZU91dHNpZGVDbGljayhlKSB7XG4gICAgaWYgKGlzRGVzY2VuZGFudCh0aGlzLmlucHV0V3JhcCwgZS50YXJnZXQpIHx8IHRoaXMuaW5wdXRXcmFwID09PSBlLnRhcmdldCkge1xuICAgICAgdGhpcy5mb2N1c0lucHV0KClcbiAgICAgIHRoaXMuc2hvd09wdGlvbnMoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGVPcHRpb25zKClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnN0IG9wdGlvbnNMb2FkZWQgPSAobmV4dFByb3BzLm9wdGlvbnMgfHwgW10pLmxlbmd0aCAhPT0gMCAmJiAodGhpcy5wcm9wcy5vcHRpb25zIHx8IFtdKS5sZW5ndGggPT09IDBcbiAgICBpZiAob3B0aW9uc0xvYWRlZCAmJiB0aGlzLnN0YXRlLmZvY3VzKSB7XG4gICAgICB0aGlzLnNob3dPcHRpb25zKClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljaylcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIHZhbHVlcywgb25BZGROZXdWYWx1ZSwgb21pdFNlbGVjdGVkVmFsdWVzRnJvbU9wdGlvbnMgfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgJydcbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9ucyB8fCBbXVxuXG4gICAgbGV0IGlucHV0V2lkdGggPSB2YWx1ZXMubGVuZ3RoID4gMCA/ICh2YWx1ZS5sZW5ndGggPT09IDAgPyAxNiA6IHZhbHVlLmxlbmd0aCAqIDE2KSA6ICcxMDAlJ1xuICAgIGxldCBwbGFjZWhvbGRlciA9IHZhbHVlcy5sZW5ndGggPiAwID8gJycgOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyXG5cbiAgICBsZXQgZmlsdGVyZWRPcHRpb25zID0gb3B0aW9uc1xuICAgICAgLmZpbHRlcihvcHRpb24gPT4ge1xuICAgICAgICBpZiAob21pdFNlbGVjdGVkVmFsdWVzRnJvbU9wdGlvbnMpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZU9mVmFsdWVzID0gXy5tYXAodmFsdWVzLCAndmFsdWUnKVxuICAgICAgICAgIHJldHVybiB2YWx1ZU9mVmFsdWVzLmluZGV4T2Yob3B0aW9uLnZhbHVlKSA9PT0gLTFcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9KVxuXG4gICAgY29uc3Qgc2VsZWN0aXplSW5wdXRTdHlsZU5hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICdzZWxlY3RpemUtaW5wdXQnOiB0cnVlLFxuICAgICAgJ3NlbGVjdGl6ZS1pbnB1dC0tZm9jdXMnOiB0aGlzLnN0YXRlLmZvY3VzLFxuICAgICAgJ3NlbGVjdGl6ZS1pbnB1dC0tZW1wdHknOiB2YWx1ZXMubGVuZ3RoID09PSAwXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cInNlbGVjdGl6ZS13cmFwXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJ30+XG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbCA/IChcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+e2xhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGVOYW1lPXtzZWxlY3RpemVJbnB1dFN0eWxlTmFtZX1cbiAgICAgICAgICByZWY9e3JlZiA9PiB7IHRoaXMuaW5wdXRXcmFwID0gcmVmIH0gfVxuICAgICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZXMubWFwKCh2LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9IHN0eWxlTmFtZT1cInNlbGVjdGl6ZS10YWdcIj5cbiAgICAgICAgICAgICAgICAgIHt2Lm5hbWV9XG4gICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICBzdHlsZU5hbWU9XCJpY29uLXJlbW92ZVwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9ezIwfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVZhbHVlKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGlucHV0V2lkdGggfX1cbiAgICAgICAgICAgIHJlZj17cmVmID0+IHsgdGhpcy5pbnB1dCA9IHJlZiB9IH1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIG9uQmx1cj17ZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1czogZmFsc2UgfSlcbiAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgb25Gb2N1cz17ZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1czogdHJ1ZSB9KVxuICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlS2V5UHJlc3MoZSlcbiAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLnNob3dPcHRpb25zICYmIChmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoICE9PSAwIHx8IG9uQWRkTmV3VmFsdWUpID8gKFxuICAgICAgICAgICAgPHVsIHN0eWxlTmFtZT1cInF1ZXJ5LXJlc3VsdHNcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgLm1hcCgob3B0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJkaXNhYmxlZFwiPntvcHRpb24ubmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVmFsdWUob3B0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbk9wdGlvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk9wdGlvbkNsaWNrKG9wdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57b3B0aW9uLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uQWRkTmV3VmFsdWUgPyAoXG4gICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgb25BZGROZXdWYWx1ZSh0aGlzLnByb3BzLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkXCI+5re75YqgIDxzdHJvbmc+e3RoaXMucHJvcHMudmFsdWV9PC9zdHJvbmc+PC9saT5cbiAgICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICkgOiBudWxsXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5TZWxlY3RpemVJbnB1dFsnZGVmYXVsdFByb3BzJ10gPSB7XG4gIG9taXRTZWxlY3RlZFZhbHVlc0Zyb21PcHRpb25zOiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGl6ZUlucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL1NlbGVjdGl6ZUlucHV0LnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjk2XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zZWxlY3RpemUtd3JhcF8zQU1BaSB7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5zZWxlY3RpemUtaW5wdXRfMTRiZ1Age1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0cmFuc2l0aW9uOiBhbGwgMHM7XFxuICBjdXJzb3I6IHRleHQ7XFxuICBiYWNrZ3JvdW5kOiAjZmZmOyB9XFxuICAuc2VsZWN0aXplLWlucHV0XzE0YmdQIGlucHV0IHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4OyB9XFxuXFxuLnNlbGVjdGl6ZS1pbnB1dC0tZm9jdXNfVW5aOEIge1xcbiAgYm9yZGVyLWNvbG9yOiAjMUIyNjdGOyB9XFxuXFxuLnNlbGVjdGl6ZS1pbnB1dC0tZW1wdHlfeG43VXkge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDVweCA1cHggMDsgfVxcblxcbi5zZWxlY3RpemUtaW5wdXRfMTRiZ1AgaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbi1ib3R0b206IDVweDsgfVxcblxcbi5xdWVyeS1yZXN1bHRzX09nRTJ0IHtcXG4gIG1hcmdpbi10b3A6IC0zcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zMik7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgei1pbmRleDogOTAwOyB9XFxuXFxuLnF1ZXJ5LXJlc3VsdHNfT2dFMnQgbGkge1xcbiAgcGFkZGluZzogMCA3cHg7XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcbiAgLnF1ZXJ5LXJlc3VsdHNfT2dFMnQgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMUIyNjdGO1xcbiAgICBjb2xvcjogI2ZmZjsgfVxcblxcbi5zZWxlY3RpemUtdGFnXzNhRDEzIHtcXG4gIGJhY2tncm91bmQ6ICMxQjI2N0Y7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiAzcHggMjVweCAzcHggNXB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5pY29uLXJlbW92ZV8xTzdGXyB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXB4O1xcbiAgdG9wOiAycHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJzZWxlY3RpemUtd3JhcFwiOiBcInNlbGVjdGl6ZS13cmFwXzNBTUFpXCIsXG5cdFwic2VsZWN0aXplLWlucHV0XCI6IFwic2VsZWN0aXplLWlucHV0XzE0YmdQXCIsXG5cdFwic2VsZWN0aXplLWlucHV0LS1mb2N1c1wiOiBcInNlbGVjdGl6ZS1pbnB1dC0tZm9jdXNfVW5aOEJcIixcblx0XCJzZWxlY3RpemUtaW5wdXQtLWVtcHR5XCI6IFwic2VsZWN0aXplLWlucHV0LS1lbXB0eV94bjdVeVwiLFxuXHRcInF1ZXJ5LXJlc3VsdHNcIjogXCJxdWVyeS1yZXN1bHRzX09nRTJ0XCIsXG5cdFwic2VsZWN0aXplLXRhZ1wiOiBcInNlbGVjdGl6ZS10YWdfM2FEMTNcIixcblx0XCJpY29uLXJlbW92ZVwiOiBcImljb24tcmVtb3ZlXzFPN0ZfXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyOTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsImltcG9ydCBUZXh0YXJlYSBmcm9tICcuL1RleHRhcmVhJ1xuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWFcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvcHMgYXMgSW5wdXRQcm9wcyB9IGZyb20gJy4uL0lucHV0L0lucHV0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1RleHRhcmVhLmNzcycpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJbnB1dFByb3BzIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBUZXh0YXJlYSBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwidGV4dGFyZWEtd3JhcFwiIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJyd9PlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpXG4gICAgICAgICAgfX1cbiAgICAgICAgICBzdHlsZU5hbWU9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgdHlwZT17dGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ3RleHQnfVxuICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZSA/IHRoaXMucHJvcHMubmFtZSA6IG51bGx9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWFcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vVGV4dGFyZWEuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEuY3NzXG4gKiogbW9kdWxlIGlkID0gMzAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2Uhc3R5bGVzL3ZhcmlhYmxlcy5jc3NcIiksIFwiXCIpO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50ZXh0YXJlYS13cmFwX1hrcGoxIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGV4dGFyZWFfMUVkb1Mge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4zcztcXG59XFxuXFxuLnRleHRhcmVhXzFFZG9TOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInRleHRhcmVhLXdyYXBcIjogXCJ0ZXh0YXJlYS13cmFwX1hrcGoxXCIsXG5cdFwidGV4dGFyZWFcIjogXCJ0ZXh0YXJlYV8xRWRvU1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9wb3N0Y3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzMDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vQm9va0luZm9Qb3B1cC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL0Jvb2tJbmZvUG9wdXAuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMwMlxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNiA5XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGl0bGVfQlZPN2Uge1xcbiAgbWFyZ2luOiAzNXB4IDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMzMzM7IH1cXG5cXG4ucG9wdXBfTVBDcXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogOTk5O1xcbiAgbGVmdDogMTM0cHg7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xcbiAgcGFkZGluZzogMjBweCAyMHB4IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyB9XFxuXFxuLmhlYWRlcl8xSW5JZiB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XFxuXFxuLnRpdGxlX0JWTzdlIHtcXG4gIG1hcmdpbjogMzBweCAwIDEwcHggMDsgfVxcblxcbi5hdXRob3JfMjhCaUEge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBtYXJnaW46IDAgMCAyZW0gMDsgfVxcblxcbi5kZXNjcmlwdGlvbl9EOXJWTiB7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ0aXRsZVwiOiBcInRpdGxlX0JWTzdlXCIsXG5cdFwicG9wdXBcIjogXCJwb3B1cF9NUENxclwiLFxuXHRcImhlYWRlclwiOiBcImhlYWRlcl8xSW5JZlwiLFxuXHRcImF1dGhvclwiOiBcImF1dGhvcl8yOEJpQVwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiZGVzY3JpcHRpb25fRDlyVk5cIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL0Jvb2tJbmZvUG9wdXAuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMwM1xuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNiA5XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9fYm9vay5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rL19ib29rLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDYgOVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1ldGEtaXRlbV8yY1J5SiB7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLmJvb2tfM09xel8ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlIDBzO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgcGFkZGluZzogMCAxMHB4OyB9XFxuICAuYm9va18zT3F6XyBhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICAgLmJvb2tfM09xel8gYTpob3ZlciBpbWcge1xcbiAgICAgIG9wYWNpdHk6IC45NjsgfVxcbiAgICAuYm9va18zT3F6XyBhOmFjdGl2ZSBpbWcge1xcbiAgICAgIG9wYWNpdHk6IC44OyB9XFxuXFxuLmJvb2stbWV0YV8zZ2xjWiB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxcblxcbi5tZXRhLWl0ZW1fMmNSeUoge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgbWFyZ2luLWxlZnQ6IDE3cHg7XFxuICB3aWR0aDogMTM0cHg7IH1cXG5cXG4uYm9vay1uYW1lXzJqSXVaIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY29sb3I6ICMzMzM7IH1cXG5cXG4uYm9vay1hdXRob3JfMVZNN2Uge1xcbiAgY29sb3I6ICM5OTk7IH1cXG5cXG4uYm9vay1jb3Zlcl8xanJLOCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTM0cHg7XFxuICBoZWlnaHQ6IDE4NHB4O1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcImFzc2V0cy9pbWcvc2hhZG93LnBuZ1wiKSArIFwiKSBuby1yZXBlYXQgdG9wO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAwcztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmJvb2stY292ZXJfMWpySzggaW1nIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGxlZnQ6IDE3cHg7XFxuICAgIHRvcDogN3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7IH1cXG4gIC5ib29rLWNvdmVyXzFqcks4OmhvdmVyIHtcXG4gICAgdG9wOiAtN3B4OyB9XFxuXFxuLmJvb2stZGVzY194RkZLbCB7XFxuICBjb2xvcjogIzk5OTsgfVxcblxcbi5ib29rLS1jYXJkXzNGT2t5IHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmbG9hdDogbm9uZTtcXG4gIGhlaWdodDogMTAwcHg7IH1cXG4gIC5ib29rLS1jYXJkXzNGT2t5IGEge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgICAuYm9vay0tY2FyZF8zRk9reSBhOmhvdmVyIGltZyB7XFxuICAgICAgb3BhY2l0eTogMTsgfVxcbiAgICAuYm9vay0tY2FyZF8zRk9reSBhOmFjdGl2ZSBpbWcge1xcbiAgICAgIG9wYWNpdHk6IDE7IH1cXG4gIC5ib29rLS1jYXJkXzNGT2t5IC5ib29rLWNvdmVyXzFqcks4IHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgaGVpZ2h0OiA3MnB4O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7IH1cXG4gICAgLmJvb2stLWNhcmRfM0ZPa3kgLmJvb2stY292ZXJfMWpySzg6aG92ZXIge1xcbiAgICAgIHRvcDogMDsgfVxcbiAgICAuYm9vay0tY2FyZF8zRk9reSAuYm9vay1jb3Zlcl8xanJLOCBpbWcge1xcbiAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7IH1cXG4gIC5ib29rLS1jYXJkXzNGT2t5IC5ib29rLW1ldGFfM2dsY1oge1xcbiAgICBmbG9hdDogbm9uZTsgfVxcbiAgLmJvb2stLWNhcmRfM0ZPa3kgLm1ldGEtaXRlbV8yY1J5SiB7XFxuICAgIHdpZHRoOiBhdXRvOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwibWV0YS1pdGVtXCI6IFwibWV0YS1pdGVtXzJjUnlKXCIsXG5cdFwiYm9va1wiOiBcImJvb2tfM09xel9cIixcblx0XCJib29rLW1ldGFcIjogXCJib29rLW1ldGFfM2dsY1pcIixcblx0XCJib29rLW5hbWVcIjogXCJib29rLW5hbWVfMmpJdVogbWV0YS1pdGVtXzJjUnlKXCIsXG5cdFwiYm9vay1hdXRob3JcIjogXCJib29rLWF1dGhvcl8xVk03ZSBtZXRhLWl0ZW1fMmNSeUpcIixcblx0XCJib29rLWNvdmVyXCI6IFwiYm9vay1jb3Zlcl8xanJLOFwiLFxuXHRcImJvb2stZGVzY1wiOiBcImJvb2stZGVzY194RkZLbFwiLFxuXHRcImJvb2stLWNhcmRcIjogXCJib29rLS1jYXJkXzNGT2t5IGJvb2tfM09xel9cIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rL19ib29rLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDYgOVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9zaGFkb3cuNDcxZWEzN2Y5Ni5wbmdcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2Fzc2V0cy9pbWcvc2hhZG93LnBuZ1xuICoqIG1vZHVsZSBpZCA9IDMwNlxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNiA5XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9Cb29rTGlzdC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdC9Cb29rTGlzdC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA2IDlcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ib29rLWxpc3RfMnNfSmwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tbGVmdDogLTEwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IC0xMHB4OyB9XFxuICAuYm9vay1saXN0XzJzX0psIGxpIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XFxuICAgICAgLmJvb2stbGlzdF8yc19KbCBsaSB7XFxuICAgICAgICB3aWR0aDogMTAwJTsgfSB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiYm9vay1saXN0XCI6IFwiYm9vay1saXN0XzJzX0psXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3QvQm9va0xpc3Quc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMwOFxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNiA5XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9Cb29rTGlzdFNlY3Rpb24uc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3RTZWN0aW9uL0Jvb2tMaXN0U2VjdGlvbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA2XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2VjdGlvbi10aXRsZV8yS3YzRCB7XFxuICBtYXJnaW46IDM1cHggMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzMzMzsgfVxcblxcbi5ib29rLWxpc3Qtc2VjdGlvbl8yQ2ZEZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4ubW9yZV9tZ1FIZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4OyB9XFxuXFxuLnNlY3Rpb24tdGl0bGVfMkt2M0Qge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgLnNlY3Rpb24tdGl0bGVfMkt2M0QgYSB7XFxuICAgIGNvbG9yOiAjMzMzOyB9XFxuICAgIC5zZWN0aW9uLXRpdGxlXzJLdjNEIGE6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjNjY2OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic2VjdGlvbi10aXRsZVwiOiBcInNlY3Rpb24tdGl0bGVfMkt2M0RcIixcblx0XCJib29rLWxpc3Qtc2VjdGlvblwiOiBcImJvb2stbGlzdC1zZWN0aW9uXzJDZkRlXCIsXG5cdFwibW9yZVwiOiBcIm1vcmVfbWdRSGdcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdFNlY3Rpb24vQm9va0xpc3RTZWN0aW9uLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDZcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0FwcEhvbWUuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9BcHBIb21lL0FwcEhvbWUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGFnZS10aXRsZV9aMzY2ViB7XFxuICBtYXJnaW46IDM1cHggMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzMzMzsgfVxcblxcbi5oZXJvLWltYWdlXzE0WlVYIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogNTAwcHg7IH1cXG5cXG4ubG9nb19zaVQ3QSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMTUwcHg7XFxuICBmb250LXNpemU6IDEuMnJlbTsgfVxcblxcbi5idG5fMWRjbXEge1xcbiAgbWFyZ2luOiAwIGF1dG87IH1cXG5cXG4ucGFnZS10aXRsZV9aMzY2ViB7XFxuICBtYXJnaW46IDEwcHggMCAyMHB4O1xcbiAgZm9udC1zaXplOiAycmVtOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicGFnZS10aXRsZVwiOiBcInBhZ2UtdGl0bGVfWjM2NlZcIixcblx0XCJoZXJvLWltYWdlXCI6IFwiaGVyby1pbWFnZV8xNFpVWFwiLFxuXHRcImxvZ29cIjogXCJsb2dvX3NpVDdBXCIsXG5cdFwiYnRuXCI6IFwiYnRuXzFkY21xXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9BcHBIb21lL0FwcEhvbWUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==