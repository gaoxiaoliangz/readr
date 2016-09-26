exports.ids = [2];
exports.modules = {

/***/ 448:
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
	
	var _actions = __webpack_require__(248);
	
	var _selectors = __webpack_require__(449);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _BookListSection = __webpack_require__(452);
	
	var _BookListSection2 = _interopRequireDefault(_BookListSection);
	
	var _DocContainer = __webpack_require__(237);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _form = __webpack_require__(460);
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _reactCssModules = __webpack_require__(286);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _layout = __webpack_require__(382);
	
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
	
	var styles = __webpack_require__(482);
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
	            this.props.fetchBooks();
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
	            var bookCollections = _props.bookCollections;
	
	            bookCollections = bookCollections.map(function (item) {
	                return {
	                    name: item.name,
	                    id: item.id,
	                    bookCovers: item.items.map(function (book) {
	                        return book.cover;
	                    }),
	                    description: item.description
	                };
	            });
	            return _react2.default.createElement(_DocContainer2.default, { bodyClass: "home" }, this.props.session.user.role === 'visitor' && this.props.session.isFetching === false ? _react2.default.createElement("div", { styleName: "hero-image" }, _react2.default.createElement(_layout.Container, null, _react2.default.createElement("div", { styleName: "logo" }, "Readr"), _react2.default.createElement("h1", { styleName: "page-title" }, "新的阅读体验"), _react2.default.createElement(_form.Button, { to: "/signup" }, "现在加入"))) : null, _react2.default.createElement(_layout.Container, null, _react2.default.createElement(_BookListSection2.default, { bookEntities: newestBooks.slice(0, 6), title: "新书速递", moreLink: "/browse" })));
	        }
	    }], [{
	        key: "fetchData",
	        value: function fetchData(_ref) {
	            var store = _ref.store;
	
	            return store.dispatch((0, _actions.fetchBooks)());
	        }
	    }]);
	
	    return Home;
	}(_react.Component);
	Home = __decorate([(0, _reactCssModules2.default)(styles)], Home);
	function mapStateToProps(state, ownProps) {
	    return {
	        userBooks: [],
	        newestBooks: selectors.booksSelector(state),
	        session: state.session,
	        bookCollections: _lodash2.default.get(state.pagination, 'bookCollections.default', null) ? state.pagination.bookCollections.default.ids.map(function (id) {
	            return state.entities.bookCollections[id];
	        }) : [],
	        bookShelf: _lodash2.default.get(state.payloads, 'bookShelf.data', [])
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchBooks: _actions.fetchBooks, fetchCollections: _actions.fetchCollections, sendNotification: _actions.sendNotification })(Home);

/***/ },

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

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _BookListSection = __webpack_require__(453);
	
	var _BookListSection2 = _interopRequireDefault(_BookListSection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _BookListSection2.default;

/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(74);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(72);
	
	var _BookList = __webpack_require__(454);
	
	var _BookList2 = _interopRequireDefault(_BookList);
	
	var _reactCssModules = __webpack_require__(286);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _Icon = __webpack_require__(282);
	
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
	
	var styles = __webpack_require__(480);
	var BookListSection = function (_Component) {
	    _inherits(BookListSection, _Component);
	
	    function BookListSection() {
	        _classCallCheck(this, BookListSection);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(BookListSection).apply(this, arguments));
	    }
	
	    _createClass(BookListSection, [{
	        key: "render",
	        value: function render() {
	            var title = this.props.title;
	            var moreLink = this.props.moreLink ? this.props.moreLink : null;
	            return _react2.default.createElement("div", { styleName: "book-list-section" }, this.props.title && (moreLink ? _react2.default.createElement("h2", { styleName: "section-title" }, _react2.default.createElement(_reactRouter.Link, { to: moreLink }, title, _react2.default.createElement(_Icon2.default, { name: "arrowRight", size: 20 }))) : _react2.default.createElement("h2", { styleName: "section-title" }, title)), _react2.default.createElement(_BookList2.default, { bookEntities: this.props.bookEntities }));
	        }
	    }]);
	
	    return BookListSection;
	}(_react.Component);
	BookListSection = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], BookListSection);
	exports.default = BookListSection;

/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _BookList = __webpack_require__(455);
	
	var _BookList2 = _interopRequireDefault(_BookList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _BookList2.default;

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(74);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Book = __webpack_require__(456);
	
	var _Book2 = _interopRequireDefault(_Book);
	
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
	
	var styles = __webpack_require__(478);
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

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Book = __webpack_require__(457);
	
	var _Book2 = _interopRequireDefault(_Book);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Book2.default;

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(74);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(72);
	
	var _BookInfoPopup = __webpack_require__(458);
	
	var _BookInfoPopup2 = _interopRequireDefault(_BookInfoPopup);
	
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
	
	var styles = __webpack_require__(475);
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

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _BookInfoPopup = __webpack_require__(459);
	
	var _BookInfoPopup2 = _interopRequireDefault(_BookInfoPopup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _BookInfoPopup2.default;

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(74);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _form = __webpack_require__(460);
	
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
	
	var styles = __webpack_require__(473);
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

/***/ 473:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(474);
	    var insertCss = __webpack_require__(290);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(289)();
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

/***/ 475:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(476);
	    var insertCss = __webpack_require__(290);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(289)();
	// imports
	
	
	// module
	exports.push([module.id, ".meta-item_2cRyJ {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.book_3Oqz_ {\n  float: left;\n  transition: all 0.2s ease 0s;\n  position: relative;\n  width: 150px;\n  padding: 0 10px; }\n  .book_3Oqz_ a {\n    display: block;\n    padding-top: 10px;\n    position: relative; }\n    .book_3Oqz_ a:hover img {\n      opacity: .96; }\n    .book_3Oqz_ a:active img {\n      opacity: .8; }\n\n.book-meta_3glcZ {\n  background: transparent; }\n\n.meta-item_2cRyJ {\n  width: 100%;\n  text-align: left;\n  display: block;\n  line-height: 1.5;\n  margin-left: 17px;\n  width: 134px; }\n\n.book-name_2jIuZ {\n  font-size: 1.3rem;\n  color: #333; }\n\n.book-author_1VM7e {\n  color: #999; }\n\n.book-cover_1jrK8 {\n  position: relative;\n  margin: 0;\n  width: 134px;\n  height: 184px;\n  top: 0;\n  background: url(" + __webpack_require__(477) + ") no-repeat top;\n  transition: all 0.2s ease 0s;\n  position: relative; }\n  .book-cover_1jrK8 img {\n    width: 100px;\n    height: 150px;\n    display: block;\n    position: absolute;\n    border: none;\n    left: 17px;\n    top: 7px;\n    border-radius: 4px; }\n  .book-cover_1jrK8:hover {\n    top: -7px; }\n\n.book-desc_xFFKl {\n  color: #999; }\n\n.book--card_3FOky {\n  width: auto;\n  background: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  padding: 10px;\n  float: none; }\n  .book--card_3FOky a {\n    padding: 0;\n    display: block;\n    overflow: hidden;\n    opacity: 1; }\n    .book--card_3FOky a:hover img {\n      opacity: 1; }\n    .book--card_3FOky a:active img {\n      opacity: 1; }\n  .book--card_3FOky .book-cover_1jrK8 {\n    width: auto;\n    height: auto;\n    height: 72px;\n    background: none;\n    overflow: hidden;\n    float: left;\n    border-radius: 4px;\n    margin-right: 20px; }\n    .book--card_3FOky .book-cover_1jrK8:hover {\n      top: 0; }\n    .book--card_3FOky .book-cover_1jrK8 img {\n      width: 50px;\n      height: auto;\n      position: relative;\n      top: 0;\n      left: 0; }\n  .book--card_3FOky .book-meta_3glcZ {\n    float: none; }\n  .book--card_3FOky .meta-item_2cRyJ {\n    width: auto; }\n", ""]);
	
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

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/shadow.471ea37f96.png";

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(479);
	    var insertCss = __webpack_require__(290);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(289)();
	// imports
	
	
	// module
	exports.push([module.id, ".book-list_2s_Jl {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin-left: -10px;\n  margin-right: -10px; }\n  .book-list_2s_Jl li {\n    float: left;\n    width: 50%;\n    padding: 10px;\n    box-sizing: border-box; }\n", ""]);
	
	// exports
	exports.locals = {
		"book-list": "book-list_2s_Jl"
	};

/***/ },

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(481);
	    var insertCss = __webpack_require__(290);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(289)();
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

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(483);
	    var insertCss = __webpack_require__(290);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(289)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FwcEhvbWUvQXBwSG9tZS50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3N0b3JlL3NlbGVjdG9ycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvc2VsZWN0b3JzL2NvbW1vbi50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXNlbGVjdFwiIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0U2VjdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdFNlY3Rpb24vQm9va0xpc3RTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdC9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdC9Cb29rTGlzdC50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9vay9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rL0Jvb2sudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tJbmZvUG9wdXAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0luZm9Qb3B1cC9Cb29rSW5mb1BvcHVwLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuY3NzPzA1MGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuY3NzP2Q5MjQiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQuc2Nzcz9jZWE0Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LnNjc3M/OGI5MyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS5jc3M/YWEyMSIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS5jc3M/NWJjMiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tJbmZvUG9wdXAvQm9va0luZm9Qb3B1cC5zY3NzPzM1NmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL0Jvb2tJbmZvUG9wdXAuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2svX2Jvb2suc2Nzcz9lODE2Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9vay9fYm9vay5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaW1nL3NoYWRvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdC9Cb29rTGlzdC5zY3NzPzhlMzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdC9Cb29rTGlzdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3RTZWN0aW9uL0Jvb2tMaXN0U2VjdGlvbi5zY3NzPzBlYmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdFNlY3Rpb24vQm9va0xpc3RTZWN0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FwcEhvbWUvQXBwSG9tZS5zY3NzPzljZGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FwcEhvbWUvQXBwSG9tZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7Ozs7QUFDSDs7QUFDK0M7O0FBQzdFOztLQUEyQzs7QUFDWTs7OztBQUNOOzs7O0FBQ1g7O0FBQ3ZCOzs7O0FBQ29COzs7O0FBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNsRCxLQUFZLFNBQVUsb0JBQWtCO0FBb0J4Qzs7O0FBTUUsbUJBQWlCOzs7NkZBQ0g7O0FBQ1IsZUFBTSxRQUFHO0FBQ00sZ0NBRXBCO1dBSkM7Ozs7Ozs7QUFPSSxrQkFBTSxNQUFhO0FBQ25CLGtCQUFNLE1BR2E7Ozs7bURBQVU7QUFDOUIsaUJBQUssS0FBTSxNQUFRLFFBQVcsY0FBSSxDQUFVLFVBQVEsUUFBWSxZQUFFO0FBQ2hFLHFCQUFVLFVBQVEsUUFBSyxLQUFLLFNBQWU7QUFDeEMsMEJBQVMs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QVcsc0JBQXNCLEVBQUUsMEJBQTBCLHdCQUF3QixFQUFFLDRCQUE0QixrQkFBa0IsRUFBRSxvQ0FBb0Msb0JBQW9CLEVBQUU7O0FBRTlhO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7OztBQ1hBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQXlDLDJCQUEyQjtBQUNwRSxvREFBbUQ7Ozs7Ozs7O0FDVm5EO0FBQ0E7OztBQUdBO0FBQ0EsOENBQTZDLG1CQUFtQixzQkFBc0Isc0JBQXNCLGdCQUFnQixFQUFFLHVCQUF1Qix1QkFBdUIsa0JBQWtCLEVBQUUsaUJBQWlCLHVCQUF1Qix1QkFBdUIsc0JBQXNCLEVBQUUsZ0JBQWdCLG1CQUFtQixFQUFFLHVCQUF1Qix3QkFBd0Isb0JBQW9CLEVBQUU7O0FBRWpZO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEciLCJmaWxlIjoiMi4yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZmV0Y2hCb29rcywgZmV0Y2hDb2xsZWN0aW9ucywgc2VuZE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vc3RvcmUvc2VsZWN0b3JzJ1xuaW1wb3J0IEJvb2tMaXN0U2VjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jvb2tMaXN0U2VjdGlvbidcbmltcG9ydCBEb2NDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Eb2NDb250YWluZXInXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9lbGVtZW50cy9fZm9ybSdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvX2xheW91dCdcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vQXBwSG9tZS5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG59XG5cbmludGVyZmFjZSBJQWxsUHJvcHMgZXh0ZW5kcyBJUHJvcHMge1xuICBmZXRjaEJvb2tzOiBhbnlcbiAgZmV0Y2hDb2xsZWN0aW9uczogYW55XG4gIHNlc3Npb246IGFueVxuICBuZXdlc3RCb29rczogYW55XG4gIGJvb2tDb2xsZWN0aW9uczogYW55XG4gIHNlbmROb3RpZmljYXRpb246IGFueVxuICBib29rU2hlbGY6IGFueVtdXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBzaG93UmVjZW50UmVhZGluZzogYm9vbGVhblxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50PElBbGxQcm9wcywgSVN0YXRlPiB7XG5cbiAgc3RhdGljIGZldGNoRGF0YSh7c3RvcmV9KSB7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGZldGNoQm9va3MoKSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dSZWNlbnRSZWFkaW5nOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hCb29rcygpXG4gICAgdGhpcy5wcm9wcy5mZXRjaENvbGxlY3Rpb25zKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuc2Vzc2lvbi5pc0ZldGNoaW5nICYmICFuZXh0UHJvcHMuc2Vzc2lvbi5pc0ZldGNoaW5nKSB7XG4gICAgICBpZiAobmV4dFByb3BzLnNlc3Npb24udXNlci5yb2xlICE9PSAndmlzaXRvcicpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2hvd1JlY2VudFJlYWRpbmc6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgbmV3ZXN0Qm9va3MsIGJvb2tDb2xsZWN0aW9ucyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgYm9va0NvbGxlY3Rpb25zID0gYm9va0NvbGxlY3Rpb25zXG4gICAgICAubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgYm9va0NvdmVyczogaXRlbS5pdGVtcy5tYXAoYm9vayA9PiBib29rLmNvdmVyKSxcbiAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb25cbiAgICAgIH0pKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2NDb250YWluZXIgYm9keUNsYXNzPVwiaG9tZVwiPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIucm9sZSA9PT0gJ3Zpc2l0b3InICYmIHRoaXMucHJvcHMuc2Vzc2lvbi5pc0ZldGNoaW5nID09PSBmYWxzZSA/IChcbiAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiaGVyby1pbWFnZVwiPlxuICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwibG9nb1wiPlJlYWRyPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlTmFtZT1cInBhZ2UtdGl0bGVcIj7mlrDnmoTpmIXor7vkvZPpqow8L2gxPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdG89XCIvc2lnbnVwXCI+546w5Zyo5Yqg5YWlPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxCb29rTGlzdFNlY3Rpb25cbiAgICAgICAgICAgIGJvb2tFbnRpdGllcz17bmV3ZXN0Qm9va3Muc2xpY2UoMCwgNil9XG4gICAgICAgICAgICB0aXRsZT1cIuaWsOS5pumAn+mAklwiXG4gICAgICAgICAgICBtb3JlTGluaz1cIi9icm93c2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0RvY0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICByZXR1cm4ge1xuICAgIHVzZXJCb29rczogW10sXG4gICAgbmV3ZXN0Qm9va3M6IHNlbGVjdG9ycy5ib29rc1NlbGVjdG9yKHN0YXRlKSxcbiAgICBzZXNzaW9uOiBzdGF0ZS5zZXNzaW9uLFxuICAgIGJvb2tDb2xsZWN0aW9uczogXy5nZXQoc3RhdGUucGFnaW5hdGlvbiwgJ2Jvb2tDb2xsZWN0aW9ucy5kZWZhdWx0JywgbnVsbClcbiAgICAgID8gc3RhdGUucGFnaW5hdGlvbi5ib29rQ29sbGVjdGlvbnMuZGVmYXVsdC5pZHMubWFwKGlkID0+IHN0YXRlLmVudGl0aWVzLmJvb2tDb2xsZWN0aW9uc1tpZF0pXG4gICAgICA6IFtdLFxuICAgIGJvb2tTaGVsZjogXy5nZXQoc3RhdGUucGF5bG9hZHMsICdib29rU2hlbGYuZGF0YScsIFtdKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCB7fT4oXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgeyBmZXRjaEJvb2tzLCBmZXRjaENvbGxlY3Rpb25zLCBzZW5kTm90aWZpY2F0aW9uIH1cbikoSG9tZSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9BcHBIb21lL0FwcEhvbWUudHN4XG4gKiovIiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzIH0gZnJvbSAnLi9jb21tb24nXG5pbXBvcnQgKiBhcyBjb21tb24gZnJvbSAnLi9jb21tb24nXG5cbmV4cG9ydCBjb25zdCBxdWVyeURvdWJhbkJvb2tzU2VsZWN0b3IgPSBxdWVyeSA9PiBjcmVhdGVTZWxlY3RvcihcbiAgc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMoe1xuICAgIGVudGl0aWVzTmFtZTogJ2RvdWJhbkJvb2tzJyxcbiAgICBwYWdpbmF0aW9uTmFtZTogJ2RvdWJhbkJvb2tzJyxcbiAgICBwYWdpbmF0aW9uUXVlcnk6IHF1ZXJ5XG4gIH0pLFxuICBib29rcyA9PiBib29rc1xuKVxuXG5leHBvcnQgY29uc3QgcXVlcnlBdXRob3JzU2VsZWN0b3IgPSBxdWVyeSA9PiBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyh7XG4gIGVudGl0aWVzTmFtZTogJ2F1dGhvcnMnLFxuICBwYWdpbmF0aW9uTmFtZTogJ2F1dGhvcnMnLFxuICBwYWdpbmF0aW9uUXVlcnk6IHF1ZXJ5XG59KVxuXG5leHBvcnQgY29uc3Qgc2VhcmNoQm9va3NTZWxlY3RvciA9IHF1ZXJ5ID0+IHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzKHtcbiAgZW50aXRpZXNOYW1lOiAnYm9va3MnLFxuICBwYWdpbmF0aW9uTmFtZTogJ2Jvb2tzJyxcbiAgcGFnaW5hdGlvblF1ZXJ5OiBxdWVyeVxufSlcblxuZXhwb3J0IGNvbnN0IGRvdWJhbkJvb2tzQXNPcHRpb25zID0gcXVlcnkgPT4gY3JlYXRlU2VsZWN0b3IoXG4gIHF1ZXJ5RG91YmFuQm9va3NTZWxlY3RvcihxdWVyeSksXG4gIGJvb2tzID0+IHtcbiAgICByZXR1cm4gYm9va3MubWFwKGJvb2sgPT4gKHtcbiAgICAgIG5hbWU6IGJvb2sudGl0bGUsXG4gICAgICB2YWx1ZTogYm9vay5pZCxcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgZGVzY3JpcHRpb246IGJvb2suc3VtbWFyeSxcbiAgICAgICAgY292ZXI6IGJvb2suaW1hZ2VzLmxhcmdlLFxuICAgICAgICBhdXRob3I6IGJvb2suYXV0aG9yLmpvaW4oJywgJylcbiAgICAgIH1cbiAgICB9KSlcbiAgfVxuKVxuXG5leHBvcnQgY29uc3QgYXV0aG9yc0FzT3B0aW9ucyA9IHF1ZXJ5ID0+IGNyZWF0ZVNlbGVjdG9yKFxuICBxdWVyeUF1dGhvcnNTZWxlY3RvcihxdWVyeSksXG4gIGl0ZW1zID0+IHtcbiAgICByZXR1cm4gaXRlbXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgIHZhbHVlOiBpdGVtLmlkXG4gICAgfSkpXG4gIH1cbilcblxuZXhwb3J0IGNvbnN0IGJvb2tzU2VhcmNoQXNPcHRpb25zID0gcXVlcnkgPT4gY3JlYXRlU2VsZWN0b3IoXG4gIHNlYXJjaEJvb2tzU2VsZWN0b3IocXVlcnkpLFxuICBpdGVtcyA9PiB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcChpdGVtID0+ICh7XG4gICAgICBuYW1lOiBpdGVtLnRpdGxlLFxuICAgICAgdmFsdWU6IGl0ZW0uaWRcbiAgICB9KSlcbiAgfVxuKVxuXG5leHBvcnQgY29uc3QgYm9va3NTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyh7XG4gICAgZW50aXRpZXNOYW1lOiAnYm9va3MnLFxuICAgIHBhZ2luYXRpb25OYW1lOiAnYm9va3MnLFxuICAgIHBhZ2luYXRpb25LZXk6ICdkZWZhdWx0J1xuICB9KSxcbiAgYm9va3MgPT4gYm9va3NcbilcblxuZXhwb3J0IGNvbnN0IHVzZXJzU2VsZWN0b3IgPSBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyh7XG4gIGVudGl0aWVzTmFtZTogJ3VzZXJzJyxcbiAgcGFnaW5hdGlvbk5hbWU6ICd1c2VycycsXG4gIHBhZ2luYXRpb25LZXk6ICdkZWZhdWx0J1xufSlcblxuZXhwb3J0ICogZnJvbSAnLi9jb21tb24nXG5leHBvcnQgeyBjb21tb24gfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvc2VsZWN0b3JzL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY29uc3QgZW50aXRpZXNTZWxlY3RvciA9IG5hbWUgPT4gc3RhdGUgPT4ge1xuICByZXR1cm4gc3RhdGUuZW50aXRpZXNbbmFtZV0gfHwge31cbn1cbmNvbnN0IHBhZ2luYXRpb25TZWxlY3RvciA9IChuYW1lLCBrZXkgPSAnZGVmYXVsdCcpID0+IHN0YXRlID0+IHtcbiAgcmV0dXJuIF8uZ2V0KHN0YXRlLnBhZ2luYXRpb24sIGAke25hbWV9LiR7a2V5fS5pZHNgLCBbXSlcbn1cbmV4cG9ydCBjb25zdCBwYWdpbmF0aW9uTGlua1NlbGVjdG9yID0gKG5hbWUsIGtleSA9ICdkZWZhdWx0JykgPT4gc3RhdGUgPT4ge1xuICByZXR1cm4gXy5waWNrKF8uZ2V0KHN0YXRlLnBhZ2luYXRpb24sIGAke25hbWV9LiR7a2V5fWAsIHt9KSwgWyduZXh0JywgJ2xhc3QnXSlcbn1cbmNvbnN0IHF1ZXJ5UGFnaW5hdGlvblNlbGVjdG9yID0gKG5hbWUsIHF1ZXJ5KSA9PiBzdGF0ZSA9PiB7XG4gIHJldHVybiBfLmdldChzdGF0ZS5wYWdpbmF0aW9uLCBbbmFtZSwgJ3F1ZXJ5JywgcXVlcnksICdpZHMnXSwgW10pXG59XG5cbnR5cGUgU2VsZWN0UGFnaW5hdGVkRW50aXRpZXNPcHRpb25zID0ge1xuICBlbnRpdGllc05hbWU6IHN0cmluZ1xuICBwYWdpbmF0aW9uTmFtZTogc3RyaW5nXG4gIHBhZ2luYXRpb25LZXk/OiBzdHJpbmdcbiAgcGFnaW5hdGlvblF1ZXJ5Pzogc3RyaW5nXG59XG5leHBvcnQgY29uc3Qgc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMgPSAob3B0aW9uczogU2VsZWN0UGFnaW5hdGVkRW50aXRpZXNPcHRpb25zKSA9PiB7XG4gIGNvbnN0IHtlbnRpdGllc05hbWUsIHBhZ2luYXRpb25OYW1lLCBwYWdpbmF0aW9uS2V5LCBwYWdpbmF0aW9uUXVlcnl9ID0gb3B0aW9uc1xuICBsZXQgcGFnaVNlbGVjdG9yOiAoc3RhdGU6IGFueSkgPT4gYW55W11cblxuICBpZiAocGFnaW5hdGlvblF1ZXJ5KSB7XG4gICAgcGFnaVNlbGVjdG9yID0gcXVlcnlQYWdpbmF0aW9uU2VsZWN0b3IocGFnaW5hdGlvbk5hbWUsIHBhZ2luYXRpb25RdWVyeSlcbiAgfSBlbHNlIHtcbiAgICBwYWdpU2VsZWN0b3IgPSBwYWdpbmF0aW9uU2VsZWN0b3IocGFnaW5hdGlvbk5hbWUsIHBhZ2luYXRpb25LZXkpXG4gIH1cblxuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZW50aXRpZXNTZWxlY3RvcihlbnRpdGllc05hbWUpLFxuICAgIHBhZ2lTZWxlY3RvcixcbiAgICAoZW50aXRpZXMsIGlkcykgPT4ge1xuICAgICAgcmV0dXJuIGlkcy5tYXAoaWQgPT4gZW50aXRpZXNbaWRdKVxuICAgIH1cbiAgKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvc2VsZWN0b3JzL2NvbW1vbi50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlc2VsZWN0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZXNlbGVjdFwiXG4gKiogbW9kdWxlIGlkID0gNDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyAxMiAxMyAxNCAxNVxuICoqLyIsImltcG9ydCBCb29rTGlzdFNlY3Rpb24gZnJvbSAnLi9Cb29rTGlzdFNlY3Rpb24nXG5leHBvcnQgZGVmYXVsdCBCb29rTGlzdFNlY3Rpb25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3RTZWN0aW9uL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBCb29rTGlzdCBmcm9tICcuLi9Cb29rTGlzdCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vZWxlbWVudHMvSWNvbidcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vQm9va0xpc3RTZWN0aW9uLnNjc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgYm9va0VudGl0aWVzOiBhbnlcbiAgdGl0bGU/OiBzdHJpbmdcbiAgbW9yZUxpbms/OiBzdHJpbmdcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBCb29rTGlzdFNlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCB7fT4ge1xuICByZW5kZXIoKSB7XG4gICAgbGV0IHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZVxuICAgIGxldCBtb3JlTGluayA9IHRoaXMucHJvcHMubW9yZUxpbmsgPyB0aGlzLnByb3BzLm1vcmVMaW5rIDogbnVsbFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwiYm9vay1saXN0LXNlY3Rpb25cIj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMudGl0bGUgJiYgKFxuICAgICAgICAgICAgbW9yZUxpbmtcbiAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgPGgyIHN0eWxlTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXttb3JlTGlua30+e3RpdGxlfTxJY29uIG5hbWU9XCJhcnJvd1JpZ2h0XCIgc2l6ZT17MjB9IC8+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgPGgyIHN0eWxlTmFtZT1cInNlY3Rpb24tdGl0bGVcIj57dGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8Qm9va0xpc3QgYm9va0VudGl0aWVzPXt0aGlzLnByb3BzLmJvb2tFbnRpdGllc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rTGlzdFNlY3Rpb25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3RTZWN0aW9uL0Jvb2tMaXN0U2VjdGlvbi50c3hcbiAqKi8iLCJpbXBvcnQgQm9va0xpc3QgZnJvbSAnLi9Cb29rTGlzdCdcbmV4cG9ydCBkZWZhdWx0IEJvb2tMaXN0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0L2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJvb2sgZnJvbSAnLi4vQm9vaydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Cb29rTGlzdC5zY3NzJylcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYm9va0VudGl0aWVzOiB7XG4gICAgaWQ6IHN0cmluZ1xuICAgIHRpdGxlOiBzdHJpbmdcbiAgICBhdXRob3JzOiBhbnlcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICAgY292ZXI6IHN0cmluZ1xuICB9W11cbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgQm9va0xpc3QgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsIHN0eWxlTmFtZT1cImJvb2stbGlzdFwiIGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmJvb2tFbnRpdGllcyAmJiB0aGlzLnByb3BzLmJvb2tFbnRpdGllcy5sZW5ndGggIT09IDBcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICB0aGlzLnByb3BzLmJvb2tFbnRpdGllcy5tYXAoKGJvb2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0aXRsZSwgYXV0aG9ycywgZGVzY3JpcHRpb24sIGNvdmVyIH0gPSBib29rXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPEJvb2tcbiAgICAgICAgICAgICAgICAgICAgICBpZD17Ym9vay5pZH1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGUgfHwgJ+aXoOagh+mimCd9XG4gICAgICAgICAgICAgICAgICAgICAgYXV0aG9ycz17YXV0aG9ycyAmJiBhdXRob3JzLm1hcChhdXRob3IgPT4gYXV0aG9yLm5hbWUpLmpvaW4oJywgJykgfHwgJ+acquefpeS9nOiAhSd9XG4gICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIGNvdmVyPXtjb3Zlcn1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgPGxpPuaaguaXoOiusOW9lTwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tMaXN0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0L0Jvb2tMaXN0LnRzeFxuICoqLyIsImltcG9ydCBCb29rIGZyb20gJy4vQm9vaydcbmV4cG9ydCBkZWZhdWx0IEJvb2tcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9vay9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgQm9va0luZm9Qb3B1cCBmcm9tICcuLi9Cb29rSW5mb1BvcHVwJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL19ib29rLnNjc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdGl0bGU6IHN0cmluZ1xuICBhdXRob3JzOiBzdHJpbmdcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBpZDogc3RyaW5nXG4gIGNvdmVyOiBzdHJpbmdcbiAgZGlzYWJsZVBvcHVwPzogYm9vbGVhblxuICBzaG93RGVzYz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIHNob3dQb3B1cDogYm9vbGVhblxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2sgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93UG9wdXA6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuc2hvd1BvcHVwID0gdGhpcy5zaG93UG9wdXAuYmluZCh0aGlzKVxuICAgIHRoaXMuaGlkZVBvcHVwID0gdGhpcy5oaWRlUG9wdXAuYmluZCh0aGlzKVxuICB9XG5cbiAgc2hvd1BvcHVwKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd1BvcHVwOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIGhpZGVQb3B1cCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dQb3B1cDogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2hvd0Rlc2MsIGRlc2NyaXB0aW9uLCBjb3ZlciB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgb25Nb3VzZUVudGVyPXt0aGlzLnNob3dQb3B1cH0gb25Nb3VzZUxlYXZlPXt0aGlzLmhpZGVQb3B1cH0gc3R5bGVOYW1lPVwiYm9vay0tY2FyZFwiPlxuICAgICAgICA8TGluayB0bz17Jy9ib29rLycgKyB0aGlzLnByb3BzLmlkfSA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgY292ZXIgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImJvb2stY292ZXJcIj48aW1nIHNyYz17dGhpcy5wcm9wcy5jb3Zlcn0vPjwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImJvb2stbWV0YVwiPlxuICAgICAgICAgICAgPHNwYW4gdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9IHN0eWxlTmFtZT1cImJvb2stbmFtZVwiPnt0aGlzLnByb3BzLnRpdGxlIHx8ICfml6DmoIfpopgnfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cImJvb2stYXV0aG9yXCI+e3RoaXMucHJvcHMuYXV0aG9ycyB8fCAn5L2c6ICF5LiN6K+mJ308L3NwYW4+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNob3dEZXNjICYmIChcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZU5hbWU9XCJib29rLWRlc2NcIj57ZGVzY3JpcHRpb24gfHwgJ+epuid9PC9zcGFuPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1BvcHVwICYmICF0aGlzLnByb3BzLmRpc2FibGVQb3B1cCAmJiAoXG4gICAgICAgICAgICA8Qm9va0luZm9Qb3B1cFxuICAgICAgICAgICAgICBib29rSWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgICAgICBhdXRob3I9e3RoaXMucHJvcHMuYXV0aG9yc31cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3RoaXMucHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9vay9Cb29rLnRzeFxuICoqLyIsImltcG9ydCBCb29rSW5mb1BvcHVwIGZyb20gJy4vQm9va0luZm9Qb3B1cCdcbmV4cG9ydCBkZWZhdWx0IEJvb2tJbmZvUG9wdXBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0luZm9Qb3B1cC9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9lbGVtZW50cy9fZm9ybSdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Cb29rSW5mb1BvcHVwLnNjc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgYXV0aG9yOiBzdHJpbmdcbiAgdGl0bGU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGJvb2tJZDogc3RyaW5nXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgQm9va0luZm9Qb3B1cCBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIHt9PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhdXRob3IsIHRpdGxlLCBkZXNjcmlwdGlvbiwgYm9va0lkIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9XCJwb3B1cFwiPlxuICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxoMiBzdHlsZU5hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gyPlxuICAgICAgICAgIDxwIHN0eWxlTmFtZT1cImF1dGhvclwiPnthdXRob3J9PC9wPlxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJibHVlXCIgdG89eycvdmlld2VyL2Jvb2svJyArIGJvb2tJZH0+6ZiF6K+7PC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va0luZm9Qb3B1cFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL0Jvb2tJbmZvUG9wdXAudHN4XG4gKiovIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuaW1wb3J0IFNlbGVjdGl6ZUlucHV0IGZyb20gJy4vU2VsZWN0aXplSW5wdXQnXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9UZXh0YXJlYSdcblxuZXhwb3J0IHsgQnV0dG9uLCBJbnB1dCwgU2VsZWN0aXplSW5wdXQsIFRleHRhcmVhIH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vSW5wdXQuY3NzJylcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICBvbkNoYW5nZT86IGFueVxuICB2YWx1ZT86IHN0cmluZ1xuICB0eXBlPzogc3RyaW5nXG4gIG5hbWU/OiBzdHJpbmdcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBJbnB1dCBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcylcbiAgICBkZWxldGUgcHJvcHMuY2xhc3NOYW1lXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9XCJpbnB1dC13cmFwXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJ30+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHN0eWxlTmFtZT1cImlucHV0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpXG4gICAgICAgICAgfX1cbiAgICAgICAgICB0eXBlPXt0aGlzLnByb3BzLnR5cGUgPyB0aGlzLnByb3BzLnR5cGUgOiAndGV4dCd9XG4gICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lID8gdGhpcy5wcm9wcy5uYW1lIDogbnVsbH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9JbnB1dC5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9JbnB1dC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0NjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSFzdHlsZXMvdmFyaWFibGVzLmNzc1wiKSwgXCJcIik7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmlucHV0LXdyYXBfM2RIQTMge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5pbnB1dF8yanVCTyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IHZhcigtLWlucHV0LXBhZGRpbmcpIDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXkpO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4zcztcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1pbnB1dC1saW5lLWhlaWdodCk7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uaW5wdXRfMmp1Qk86Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaW5wdXQtd3JhcFwiOiBcImlucHV0LXdyYXBfM2RIQTNcIixcblx0XCJpbnB1dFwiOiBcImlucHV0XzJqdUJPXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Bvc3Rjc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L0lucHV0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ2NFxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiaW1wb3J0IFNlbGVjdGl6ZUlucHV0IGZyb20gJy4vU2VsZWN0aXplSW5wdXQnXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RpemVJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9JY29uJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IGlzRGVzY2VuZGFudCBmcm9tICcuLi8uLi8uLi91dGlscy9kb20vaXNEZXNjZW5kYW50J1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9TZWxlY3RpemVJbnB1dC5zY3NzJylcblxudHlwZSBUeXBlT3B0aW9uID0ge1xuICB2YWx1ZTogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgYWRkaXRpb25hbD86IGFueVxufVxuXG50eXBlIFR5cGVWYWx1ZSA9IHtcbiAgdmFsdWU6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICBsYWJlbD86IHN0cmluZ1xuICBzdGF5Rm9jdXNlZD86IGJvb2xlYW4gLy8gZGVmYXVsdCB0cnVlXG5cbiAgdmFsdWU6IHN0cmluZ1xuICBvbklucHV0Q2hhbmdlOiAobmV3VmFsdWU6IHN0cmluZykgPT4gdm9pZFxuXG4gIG9wdGlvbnM6IEFycmF5PFR5cGVPcHRpb24+XG4gIG9uT3B0aW9uc0NoYW5nZT86IChuZXdWYWx1ZXM6IEFycmF5PFR5cGVPcHRpb24+KSA9PiB2b2lkXG5cbiAgdmFsdWVzOiBBcnJheTxUeXBlVmFsdWU+XG4gIG9uVmFsdWVzQ2hhbmdlOiAobmV3VmFsdWVzOiBBcnJheTxUeXBlVmFsdWU+KSA9PiB2b2lkXG5cbiAgLy8g6aKd5aSW5Yqf6IO9XG4gIG9uQWRkTmV3VmFsdWU/OiAobmV3VmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICBvbk9wdGlvbkNsaWNrPzogKHNlbGVjdGVkVmFsdWU6IFR5cGVPcHRpb24pID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIGZvY3VzPzogYm9vbGVhblxuICBzaG93T3B0aW9ucz86IGJvb2xlYW5cbiAgdmFsdWU/OiBzdHJpbmdcbiAgZXhwZW5kZWRPcHRpb25JbmRleD86IG51bWJlclxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIFNlbGVjdGl6ZUlucHV0IGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnRcbiAgaW5wdXRXcmFwOiBIVE1MRGl2RWxlbWVudFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dPcHRpb25zOiBmYWxzZSxcbiAgICAgIGZvY3VzOiBmYWxzZSxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIGV4cGVuZGVkT3B0aW9uSW5kZXg6IDBcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2sgPSB0aGlzLmhhbmRsZU91dHNpZGVDbGljay5iaW5kKHRoaXMpXG4gICAgdGhpcy5mb2N1c0lucHV0ID0gdGhpcy5mb2N1c0lucHV0LmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUlucHV0V3JhcENsaWNrID0gdGhpcy5oYW5kbGVJbnB1dFdyYXBDbGljay5iaW5kKHRoaXMpXG4gIH1cblxuICBhZGRWYWx1ZShuZXdWYWx1ZSkge1xuICAgIHRoaXMucHJvcHMub25WYWx1ZXNDaGFuZ2UodGhpcy5wcm9wcy52YWx1ZXMuY29uY2F0KG5ld1ZhbHVlKSlcbiAgICBpZiAodGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKHRoaXMucHJvcHMub3B0aW9ucy5tYXAob3B0aW9uID0+IChvcHRpb24udmFsdWUgPT09IG5ld1ZhbHVlLnZhbHVlXG4gICAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9uLCB7IGRpc2FibGVkOiB0cnVlIH0pXG4gICAgICAgIDogb3B0aW9uKSkpXG4gICAgfVxuICAgIHRoaXMuY2xlYXJJbnB1dFZhbHVlKClcbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuc3RheUZvY3VzZWQgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMucHJvcHMuc3RheUZvY3VzZWQgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmZvY3VzSW5wdXQoKVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dPcHRpb25zOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICByZW1vdmVWYWx1ZShpbmRleCkge1xuICAgIGxldCBuZXdWYWx1ZXMgPSBbXVxuICAgIGxldCByZW1vdmVkVmFsdWVcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIG5ld1ZhbHVlcyA9IHRoaXMucHJvcHMudmFsdWVzLnNsaWNlKDAsIHRoaXMucHJvcHMudmFsdWVzLmxlbmd0aCAtIDEpXG4gICAgICByZW1vdmVkVmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlc1t0aGlzLnByb3BzLnZhbHVlcy5sZW5ndGggLSAxXS52YWx1ZVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdWYWx1ZXMgPSB0aGlzLnByb3BzLnZhbHVlc1xuICAgICAgICAuZmlsdGVyKCh2LCBpKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlZFZhbHVlID0gdi52YWx1ZVxuICAgICAgICAgIHJldHVybiBpICE9PSBpbmRleFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UodGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHRpb24gPT4gKG9wdGlvbi52YWx1ZSA9PT0gcmVtb3ZlZFZhbHVlXG4gICAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9uLCB7IGRpc2FibGVkOiBmYWxzZSB9KVxuICAgICAgICA6IG9wdGlvbikpKVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25WYWx1ZXNDaGFuZ2UobmV3VmFsdWVzKVxuICB9XG5cbiAgY2xlYXJJbnB1dFZhbHVlKCkge1xuICAgIHRoaXMucHJvcHMub25JbnB1dENoYW5nZSgnJylcbiAgfVxuXG4gIGhhbmRsZUtleVByZXNzKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4ICYmICF0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICB0aGlzLnJlbW92ZVZhbHVlKC0gMSlcbiAgICB9XG4gICAgLy8gdG9kb1xuICAgIC8vIGlmIChlLmtleUNvZGUgPT09IDEzICYmIHRoaXMuc3RhdGUuc2hvd09wdGlvbnMpIHtcbiAgICAvLyAgIHRoaXMuYWRkVmFsdWUoKVxuICAgIC8vIH1cbiAgfVxuXG4gIGZvY3VzSW5wdXQoKSB7XG4gICAgdGhpcy5pbnB1dC5mb2N1cygpXG4gIH1cblxuICBoYW5kbGVPdXRzaWRlQ2xpY2soZSkge1xuICAgIGlmICghaXNEZXNjZW5kYW50KHRoaXMuaW5wdXRXcmFwLCBlLnRhcmdldCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93T3B0aW9uczogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlSW5wdXRXcmFwQ2xpY2soKSB7XG4gICAgdGhpcy5mb2N1c0lucHV0KClcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd09wdGlvbnM6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2spXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljaylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsLCB2YWx1ZXMsIG9uQWRkTmV3VmFsdWUgfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgJydcbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9ucyB8fCBbXVxuXG4gICAgbGV0IGlucHV0V2lkdGggPSB2YWx1ZXMubGVuZ3RoID4gMCA/ICh2YWx1ZS5sZW5ndGggPT09IDAgPyAxNiA6IHZhbHVlLmxlbmd0aCAqIDE2KSA6ICcxMDAlJ1xuICAgIGxldCBwbGFjZWhvbGRlciA9IHZhbHVlcy5sZW5ndGggPiAwID8gJycgOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyXG5cbiAgICBjb25zdCBzZWxlY3RpemVJbnB1dFN0eWxlTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgJ3NlbGVjdGl6ZS1pbnB1dCc6IHRydWUsXG4gICAgICAnc2VsZWN0aXplLWlucHV0LS1mb2N1cyc6IHRoaXMuc3RhdGUuZm9jdXMsXG4gICAgICAnc2VsZWN0aXplLWlucHV0LS1lbXB0eSc6IHZhbHVlcy5sZW5ndGggPT09IDBcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwic2VsZWN0aXplLXdyYXBcIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnfT5cbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsID8gKFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj57bGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICApIDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZU5hbWU9e3NlbGVjdGl6ZUlucHV0U3R5bGVOYW1lfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSW5wdXRXcmFwQ2xpY2t9XG4gICAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmlucHV0V3JhcCA9IHJlZiB9IH1cbiAgICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWVzLm1hcCgodiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fSBzdHlsZU5hbWU9XCJzZWxlY3RpemUtdGFnXCI+XG4gICAgICAgICAgICAgICAgICB7di5uYW1lfVxuICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgc3R5bGVOYW1lPVwiaWNvbi1yZW1vdmVcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZShpbmRleClcbiAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBpbnB1dFdpZHRoIH19XG4gICAgICAgICAgICByZWY9e3JlZiA9PiB7IHRoaXMuaW5wdXQgPSByZWYgfSB9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICBvbkJsdXI9e2UgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IGZhbHNlIH0pXG4gICAgICAgICAgICB9IH1cbiAgICAgICAgICAgIG9uRm9jdXM9e2UgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IHRydWUgfSlcbiAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UoKGUudGFyZ2V0IGFzIGFueSkudmFsdWUpXG4gICAgICAgICAgICB9IH1cbiAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlS2V5UHJlc3MoZSlcbiAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLnNob3dPcHRpb25zICYmIChvcHRpb25zLmxlbmd0aCAhPT0gMCB8fCBvbkFkZE5ld1ZhbHVlKSA/IChcbiAgICAgICAgICAgIDx1bCBzdHlsZU5hbWU9XCJxdWVyeS1yZXN1bHRzXCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImRpc2FibGVkXCI+e29wdGlvbi5uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRWYWx1ZShvcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbk9wdGlvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25PcHRpb25DbGljayhvcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntvcHRpb24ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb25BZGROZXdWYWx1ZSA/IChcbiAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBvbkFkZE5ld1ZhbHVlKHRoaXMucHJvcHMudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGRcIj7mt7vliqAgPHN0cm9uZz57dGhpcy5wcm9wcy52YWx1ZX08L3N0cm9uZz48L2xpPlxuICAgICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGl6ZUlucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL1NlbGVjdGl6ZUlucHV0LnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zZWxlY3RpemUtd3JhcF8zQU1BaSB7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5zZWxlY3RpemUtaW5wdXRfMTRiZ1Age1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0cmFuc2l0aW9uOiBhbGwgMHM7XFxuICBjdXJzb3I6IHRleHQ7XFxuICBiYWNrZ3JvdW5kOiAjZmZmOyB9XFxuICAuc2VsZWN0aXplLWlucHV0XzE0YmdQIGlucHV0IHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4OyB9XFxuXFxuLnNlbGVjdGl6ZS1pbnB1dC0tZm9jdXNfVW5aOEIge1xcbiAgYm9yZGVyLWNvbG9yOiAjMUIyNjdGOyB9XFxuXFxuLnNlbGVjdGl6ZS1pbnB1dC0tZW1wdHlfeG43VXkge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDVweCA1cHggMDsgfVxcblxcbi5zZWxlY3RpemUtaW5wdXRfMTRiZ1AgaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbi1ib3R0b206IDVweDsgfVxcblxcbi5xdWVyeS1yZXN1bHRzX09nRTJ0IHtcXG4gIG1hcmdpbi10b3A6IC0zcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zMik7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgei1pbmRleDogOTAwOyB9XFxuXFxuLnF1ZXJ5LXJlc3VsdHNfT2dFMnQgbGkge1xcbiAgcGFkZGluZzogMCA3cHg7XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcbiAgLnF1ZXJ5LXJlc3VsdHNfT2dFMnQgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMUIyNjdGO1xcbiAgICBjb2xvcjogI2ZmZjsgfVxcblxcbi5zZWxlY3RpemUtdGFnXzNhRDEzIHtcXG4gIGJhY2tncm91bmQ6ICMxQjI2N0Y7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiAzcHggMjVweCAzcHggNXB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5pY29uLXJlbW92ZV8xTzdGXyB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXB4O1xcbiAgdG9wOiAycHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJzZWxlY3RpemUtd3JhcFwiOiBcInNlbGVjdGl6ZS13cmFwXzNBTUFpXCIsXG5cdFwic2VsZWN0aXplLWlucHV0XCI6IFwic2VsZWN0aXplLWlucHV0XzE0YmdQXCIsXG5cdFwic2VsZWN0aXplLWlucHV0LS1mb2N1c1wiOiBcInNlbGVjdGl6ZS1pbnB1dC0tZm9jdXNfVW5aOEJcIixcblx0XCJzZWxlY3RpemUtaW5wdXQtLWVtcHR5XCI6IFwic2VsZWN0aXplLWlucHV0LS1lbXB0eV94bjdVeVwiLFxuXHRcInF1ZXJ5LXJlc3VsdHNcIjogXCJxdWVyeS1yZXN1bHRzX09nRTJ0XCIsXG5cdFwic2VsZWN0aXplLXRhZ1wiOiBcInNlbGVjdGl6ZS10YWdfM2FEMTNcIixcblx0XCJpY29uLXJlbW92ZVwiOiBcImljb24tcmVtb3ZlXzFPN0ZfXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L1NlbGVjdGl6ZUlucHV0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0NjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsImltcG9ydCBUZXh0YXJlYSBmcm9tICcuL1RleHRhcmVhJ1xuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWFcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvcHMgYXMgSW5wdXRQcm9wcyB9IGZyb20gJy4uL0lucHV0L0lucHV0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1RleHRhcmVhLmNzcycpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJbnB1dFByb3BzIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBUZXh0YXJlYSBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwidGV4dGFyZWEtd3JhcFwiIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJyd9PlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpXG4gICAgICAgICAgfX1cbiAgICAgICAgICBzdHlsZU5hbWU9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgdHlwZT17dGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ3RleHQnfVxuICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZSA/IHRoaXMucHJvcHMubmFtZSA6IG51bGx9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWFcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vVGV4dGFyZWEuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEuY3NzXG4gKiogbW9kdWxlIGlkID0gNDcxXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2Uhc3R5bGVzL3ZhcmlhYmxlcy5jc3NcIiksIFwiXCIpO1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuLi9JbnB1dC9JbnB1dC5jc3NcIiksIHVuZGVmaW5lZCk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRleHRhcmVhLXdyYXBfWGtwajEge1xcbn1cXG5cXG4udGV4dGFyZWFfMUVkb1Mge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4zcztcXG59XFxuXFxuLnRleHRhcmVhXzFFZG9TOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInRleHRhcmVhLXdyYXBcIjogXCJ0ZXh0YXJlYS13cmFwX1hrcGoxIFwiICsgcmVxdWlyZShcIi0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4uL0lucHV0L0lucHV0LmNzc1wiKS5sb2NhbHNbXCJpbnB1dC13cmFwXCJdICsgXCJcIixcblx0XCJ0ZXh0YXJlYVwiOiBcInRleHRhcmVhXzFFZG9TXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Bvc3Rjc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ3MlxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9Cb29rSW5mb1BvcHVwLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tJbmZvUG9wdXAvQm9va0luZm9Qb3B1cC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDczXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA2IDlcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50aXRsZV9CVk83ZSB7XFxuICBtYXJnaW46IDM1cHggMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzMzMzsgfVxcblxcbi5wb3B1cF9NUENxciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTk7XFxuICBsZWZ0OiAxMzRweDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHggMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7IH1cXG5cXG4uaGVhZGVyXzFJbklmIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cXG5cXG4udGl0bGVfQlZPN2Uge1xcbiAgbWFyZ2luOiAzMHB4IDAgMTBweCAwOyB9XFxuXFxuLmF1dGhvcl8yOEJpQSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIG1hcmdpbjogMCAwIDJlbSAwOyB9XFxuXFxuLmRlc2NyaXB0aW9uX0Q5clZOIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInRpdGxlXCI6IFwidGl0bGVfQlZPN2VcIixcblx0XCJwb3B1cFwiOiBcInBvcHVwX01QQ3FyXCIsXG5cdFwiaGVhZGVyXCI6IFwiaGVhZGVyXzFJbklmXCIsXG5cdFwiYXV0aG9yXCI6IFwiYXV0aG9yXzI4QmlBXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJkZXNjcmlwdGlvbl9EOXJWTlwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tJbmZvUG9wdXAvQm9va0luZm9Qb3B1cC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDc0XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA2IDlcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL19ib29rLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2svX2Jvb2suc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ3NVxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNiA5XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWV0YS1pdGVtXzJjUnlKIHtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4uYm9va18zT3F6XyB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTUwcHg7XFxuICBwYWRkaW5nOiAwIDEwcHg7IH1cXG4gIC5ib29rXzNPcXpfIGEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgICAuYm9va18zT3F6XyBhOmhvdmVyIGltZyB7XFxuICAgICAgb3BhY2l0eTogLjk2OyB9XFxuICAgIC5ib29rXzNPcXpfIGE6YWN0aXZlIGltZyB7XFxuICAgICAgb3BhY2l0eTogLjg7IH1cXG5cXG4uYm9vay1tZXRhXzNnbGNaIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XFxuXFxuLm1ldGEtaXRlbV8yY1J5SiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBtYXJnaW4tbGVmdDogMTdweDtcXG4gIHdpZHRoOiAxMzRweDsgfVxcblxcbi5ib29rLW5hbWVfMmpJdVoge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBjb2xvcjogIzMzMzsgfVxcblxcbi5ib29rLWF1dGhvcl8xVk03ZSB7XFxuICBjb2xvcjogIzk5OTsgfVxcblxcbi5ib29rLWNvdmVyXzFqcks4IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMzRweDtcXG4gIGhlaWdodDogMTg0cHg7XFxuICB0b3A6IDA7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyByZXF1aXJlKFwic3RhdGljL2ltZy9zaGFkb3cucG5nXCIpICsgXCIpIG5vLXJlcGVhdCB0b3A7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlIDBzO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuYm9vay1jb3Zlcl8xanJLOCBpbWcge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbGVmdDogMTdweDtcXG4gICAgdG9wOiA3cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgfVxcbiAgLmJvb2stY292ZXJfMWpySzg6aG92ZXIge1xcbiAgICB0b3A6IC03cHg7IH1cXG5cXG4uYm9vay1kZXNjX3hGRktsIHtcXG4gIGNvbG9yOiAjOTk5OyB9XFxuXFxuLmJvb2stLWNhcmRfM0ZPa3kge1xcbiAgd2lkdGg6IGF1dG87XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZsb2F0OiBub25lOyB9XFxuICAuYm9vay0tY2FyZF8zRk9reSBhIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgLmJvb2stLWNhcmRfM0ZPa3kgYTpob3ZlciBpbWcge1xcbiAgICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgLmJvb2stLWNhcmRfM0ZPa3kgYTphY3RpdmUgaW1nIHtcXG4gICAgICBvcGFjaXR5OiAxOyB9XFxuICAuYm9vay0tY2FyZF8zRk9reSAuYm9vay1jb3Zlcl8xanJLOCB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGhlaWdodDogNzJweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XFxuICAgIC5ib29rLS1jYXJkXzNGT2t5IC5ib29rLWNvdmVyXzFqcks4OmhvdmVyIHtcXG4gICAgICB0b3A6IDA7IH1cXG4gICAgLmJvb2stLWNhcmRfM0ZPa3kgLmJvb2stY292ZXJfMWpySzggaW1nIHtcXG4gICAgICB3aWR0aDogNTBweDtcXG4gICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwOyB9XFxuICAuYm9vay0tY2FyZF8zRk9reSAuYm9vay1tZXRhXzNnbGNaIHtcXG4gICAgZmxvYXQ6IG5vbmU7IH1cXG4gIC5ib29rLS1jYXJkXzNGT2t5IC5tZXRhLWl0ZW1fMmNSeUoge1xcbiAgICB3aWR0aDogYXV0bzsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIm1ldGEtaXRlbVwiOiBcIm1ldGEtaXRlbV8yY1J5SlwiLFxuXHRcImJvb2tcIjogXCJib29rXzNPcXpfXCIsXG5cdFwiYm9vay1tZXRhXCI6IFwiYm9vay1tZXRhXzNnbGNaXCIsXG5cdFwiYm9vay1uYW1lXCI6IFwiYm9vay1uYW1lXzJqSXVaIG1ldGEtaXRlbV8yY1J5SlwiLFxuXHRcImJvb2stYXV0aG9yXCI6IFwiYm9vay1hdXRob3JfMVZNN2UgbWV0YS1pdGVtXzJjUnlKXCIsXG5cdFwiYm9vay1jb3ZlclwiOiBcImJvb2stY292ZXJfMWpySzhcIixcblx0XCJib29rLWRlc2NcIjogXCJib29rLWRlc2NfeEZGS2xcIixcblx0XCJib29rLS1jYXJkXCI6IFwiYm9vay0tY2FyZF8zRk9reSBib29rXzNPcXpfXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9vay9fYm9vay5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDc2XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA2IDlcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvc2hhZG93LjQ3MWVhMzdmOTYucG5nXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdGF0aWMvaW1nL3NoYWRvdy5wbmdcbiAqKiBtb2R1bGUgaWQgPSA0NzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDYgOVxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vQm9va0xpc3Quc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3QvQm9va0xpc3Quc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ3OFxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNiA5XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYm9vay1saXN0XzJzX0psIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDsgfVxcbiAgLmJvb2stbGlzdF8yc19KbCBsaSB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiYm9vay1saXN0XCI6IFwiYm9vay1saXN0XzJzX0psXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3QvQm9va0xpc3Quc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ3OVxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNiA5XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9Cb29rTGlzdFNlY3Rpb24uc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3RTZWN0aW9uL0Jvb2tMaXN0U2VjdGlvbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDgwXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA2XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2VjdGlvbi10aXRsZV8yS3YzRCB7XFxuICBtYXJnaW46IDM1cHggMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzMzMzsgfVxcblxcbi5ib29rLWxpc3Qtc2VjdGlvbl8yQ2ZEZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4ubW9yZV9tZ1FIZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4OyB9XFxuXFxuLnNlY3Rpb24tdGl0bGVfMkt2M0Qge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgLnNlY3Rpb24tdGl0bGVfMkt2M0QgYSB7XFxuICAgIGNvbG9yOiAjMzMzOyB9XFxuICAgIC5zZWN0aW9uLXRpdGxlXzJLdjNEIGE6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjNjY2OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic2VjdGlvbi10aXRsZVwiOiBcInNlY3Rpb24tdGl0bGVfMkt2M0RcIixcblx0XCJib29rLWxpc3Qtc2VjdGlvblwiOiBcImJvb2stbGlzdC1zZWN0aW9uXzJDZkRlXCIsXG5cdFwibW9yZVwiOiBcIm1vcmVfbWdRSGdcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdFNlY3Rpb24vQm9va0xpc3RTZWN0aW9uLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0ODFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDZcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0FwcEhvbWUuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9BcHBIb21lL0FwcEhvbWUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ4MlxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGFnZS10aXRsZV9aMzY2ViB7XFxuICBtYXJnaW46IDM1cHggMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzMzMzsgfVxcblxcbi5oZXJvLWltYWdlXzE0WlVYIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogNTAwcHg7IH1cXG5cXG4ubG9nb19zaVQ3QSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMTUwcHg7XFxuICBmb250LXNpemU6IDEuMnJlbTsgfVxcblxcbi5idG5fMWRjbXEge1xcbiAgbWFyZ2luOiAwIGF1dG87IH1cXG5cXG4ucGFnZS10aXRsZV9aMzY2ViB7XFxuICBtYXJnaW46IDEwcHggMCAyMHB4O1xcbiAgZm9udC1zaXplOiAycmVtOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicGFnZS10aXRsZVwiOiBcInBhZ2UtdGl0bGVfWjM2NlZcIixcblx0XCJoZXJvLWltYWdlXCI6IFwiaGVyby1pbWFnZV8xNFpVWFwiLFxuXHRcImxvZ29cIjogXCJsb2dvX3NpVDdBXCIsXG5cdFwiYnRuXCI6IFwiYnRuXzFkY21xXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9BcHBIb21lL0FwcEhvbWUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ4M1xuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==