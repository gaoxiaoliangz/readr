exports.ids = [3];
exports.modules = {

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.common = exports.usersSelector = exports.booksSelector = exports.booksSearchAsOptions = exports.authorsAsOptions = exports.doubanBooksAsOptions = exports.searchBooksSelector = exports.queryAuthorsSelector = exports.queryDoubanBooksSelector = undefined;
	
	var _common = __webpack_require__(452);
	
	Object.keys(_common).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _common[key];
	        }
	    });
	});
	
	var _reselect = __webpack_require__(453);
	
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

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.selectPaginatedEntities = exports.paginationLinkSelector = undefined;
	
	var _reselect = __webpack_require__(453);
	
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

/***/ 453:
/***/ function(module, exports) {

	module.exports = require("reselect");

/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _BookListSection = __webpack_require__(455);
	
	var _BookListSection2 = _interopRequireDefault(_BookListSection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _BookListSection2.default;

/***/ },

/***/ 455:
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
	
	var _BookList = __webpack_require__(456);
	
	var _BookList2 = _interopRequireDefault(_BookList);
	
	var _reactCssModules = __webpack_require__(288);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _Icon = __webpack_require__(284);
	
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
	
	var styles = __webpack_require__(482);
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
	exports.i(__webpack_require__(404), "");
	
	// module
	exports.push([module.id, ".input-wrap_3dHA3 {\n  margin: 10px 0;\n  position: relative;\n}\n\n.input_2juBO {\n  width: 100%;\n  padding: var(--input-padding) 5px;\n  border: 1px solid var(--gray);\n  transition: border-color .3s;\n  line-height: var(--input-line-height);\n  outline: none;\n}\n\n.input_2juBO:focus {\n  border-color: var(--blue);\n}\n", ""]);
	
	// exports
	exports.locals = {
		"input-wrap": "input-wrap_3dHA3",
		"input": "input_2juBO"
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
	exports.i(__webpack_require__(466), undefined);
	
	// module
	exports.push([module.id, ".textarea-wrap_Xkpj1 {\n}\n\n.textarea_1EdoS {\n  width: 100%;\n  padding: 5px;\n  border: 1px solid var(--gray);\n  outline: none;\n  height: 100px;\n  transition: border-color .3s;\n}\n\n.textarea_1EdoS:focus {\n  border-color: var(--blue);\n}\n", ""]);
	
	// exports
	exports.locals = {
		"textarea-wrap": "textarea-wrap_Xkpj1 " + __webpack_require__(466).locals["input-wrap"] + "",
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

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(483);
	    var insertCss = __webpack_require__(292);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
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

/***/ 487:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(243);
	
	var _Button = __webpack_require__(374);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _BookListSection = __webpack_require__(454);
	
	var _BookListSection2 = _interopRequireDefault(_BookListSection);
	
	var _actions = __webpack_require__(251);
	
	var _Container = __webpack_require__(385);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _selectors = __webpack_require__(451);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _reactCssModules = __webpack_require__(288);
	
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
	
	var styles = __webpack_require__(488);
	var Browse = function (_Component) {
	    _inherits(Browse, _Component);
	
	    function Browse(props) {
	        _classCallCheck(this, Browse);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Browse).call(this, props));
	    }
	
	    _createClass(Browse, [{
	        key: "loadMore",
	        value: function loadMore(page) {
	            this.props.fetchBooks({ merge: true, page: page });
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.props.fetchBooks();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var nextPage = this.props.nextPage;
	
	            return _react2.default.createElement(_Container2.default, { className: "archive" }, _react2.default.createElement("div", { className: "page-header" }, _react2.default.createElement(_BookListSection2.default, { title: "所有书籍", bookEntities: this.props.newestBooks }), nextPage !== 0 && _react2.default.createElement(_Button2.default, { onClick: function onClick() {
	                    _this2.loadMore(nextPage);
	                }, styleName: "btn-load-more", width: 200, color: "white" }, "加载更多")));
	        }
	    }], [{
	        key: "fetchData",
	        value: function fetchData(_ref) {
	            var store = _ref.store;
	
	            return store.dispatch((0, _actions.fetchBooks)());
	        }
	    }]);
	
	    return Browse;
	}(_react.Component);
	Browse = __decorate([(0, _reactCssModules2.default)(styles)], Browse);
	function mapStateToProps(state, ownProps) {
	    return {
	        newestBooks: selectors.booksSelector(state),
	        nextPage: _lodash2.default.get(selectors.common.paginationLinkSelector('books')(state), 'next.page', 0)
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchBooks: _actions.fetchBooks, fetchCollections: _actions.fetchCollections })(Browse);

/***/ },

/***/ 488:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(489);
	    var insertCss = __webpack_require__(292);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports
	
	
	// module
	exports.push([module.id, ".btn-load-more_26sdQ {\n  margin: 20px auto;\n  display: block; }\n", ""]);
	
	// exports
	exports.locals = {
		"btn-load-more": "btn-load-more_26sdQ"
	};

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvc2VsZWN0b3JzL2luZGV4LnRzPzcyNmIiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3N0b3JlL3NlbGVjdG9ycy9jb21tb24udHM/MzMzNiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXNlbGVjdFwiP2E5MDEiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3RTZWN0aW9uL2luZGV4LnRzP2I1YTUiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3RTZWN0aW9uL0Jvb2tMaXN0U2VjdGlvbi50c3g/OThiNiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdC9pbmRleC50cz9kOTA5Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0L0Jvb2tMaXN0LnRzeD84YjYzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2svaW5kZXgudHM/OTU3YiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rL0Jvb2sudHN4P2FiOTgiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0luZm9Qb3B1cC9pbmRleC50cz9hYjdhIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tJbmZvUG9wdXAvQm9va0luZm9Qb3B1cC50c3g/Mzc5ZCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vaW5kZXgudHM/NTBkNyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvaW5kZXgudHM/MjFkMyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQudHN4P2RhMWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuY3NzPzA1MGEqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L0lucHV0LmNzcz9kOTI0KiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvaW5kZXgudHM/N2U4MCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQudHN4PzRlNzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQuc2Nzcz9jZWE0KiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC5zY3NzPzhiOTMqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9pbmRleC50cz9iODEyIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS50c3g/YzJhZiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS5jc3M/YWEyMSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vVGV4dGFyZWEvVGV4dGFyZWEuY3NzPzViYzIqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0luZm9Qb3B1cC9Cb29rSW5mb1BvcHVwLnNjc3M/MzU2ZCoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL0Jvb2tJbmZvUG9wdXAuc2Nzcz84ZTRjIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9vay9fYm9vay5zY3NzP2U4MTYqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9vay9fYm9vay5zY3NzP2MwYWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pbWcvc2hhZG93LnBuZz9mZjc0Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3QvQm9va0xpc3Quc2Nzcz84ZTM1KiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0L0Jvb2tMaXN0LnNjc3M/NzA3NSIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0U2VjdGlvbi9Cb29rTGlzdFNlY3Rpb24uc2Nzcz8wZWJmKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0U2VjdGlvbi9Cb29rTGlzdFNlY3Rpb24uc2Nzcz85MzBiIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQnJvd3NlL0Jyb3dzZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL0Jyb3dzZS9Ccm93c2Uuc2Nzcz8wNjZiIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Ccm93c2UvQnJvd3NlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdPOztBQTBFUDs7Ozs7Ozs7OztBQTdFeUM7O0tBS3pDOzs7O0FBQU8sS0FBOEI7K0VBQ1g7QUFDVix1QkFBZTtBQUNiLHlCQUFlO0FBQ2QsMEJBQ2Y7TUFKcUIsQ0FEc0M7Z0JBUy9EO01BSE87RUFOc0M7QUFTdEMsS0FBMEI7aURBQW9DO0FBQ3ZELHVCQUFXO0FBQ1QseUJBQVc7QUFDViwwQkFHakI7TUFOb0U7RUFBM0I7QUFNbEMsS0FBeUI7aURBQW9DO0FBQ3RELHVCQUFT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WndDOzs7O0FBQ0g7O0FBQ1c7Ozs7QUFDYzs7OztBQUNJOztBQUNWOzs7O0FBQ2xDOzs7O0FBQ2Y7O0tBQTJDOztBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMxQyxLQUFZLFNBQWUsb0JBQWlCO0FBUzVDOzs7QUFNRSxxQkFBaUIsT0FDZjs7OzBGQUNEOzs7OztrQ0FFWTtBQUNQLGtCQUFNLE1BQVcsV0FBQyxFQUFPLE9BQU0sTUFHcEI7Ozs7O0FBQ1gsa0JBQU0sTUFHTjs7OztrQ0FDRTs7O2lCQUFZLFdBQU8sS0FBTTs7QUFFeEIsb0JBQ0wsZ0JBQVUscUNBQVUsV0FBVSxhQUM1Qiw4QkFBSSxTQUFVLFdBQWMsaUJBQzFCLGdCQUFnQiwyQ0FBTSxPQUFPLFFBQWEsY0FBTSxLQUFNLE1BQWdCLDZCQUVsRCxxQkFDVCxrQ0FDRTtBQUFjLDRCQUFTLFNBQWM7a0JBQW5DLEVBQ0EsV0FBZ0IsaUJBQ3BCLE9BQU0sS0FDTixPQUFRLFNBSmYsRUFZYixPQWJtQjs7Ozs7aUJBeEJNOztBQUNoQixvQkFBTSxNQUFTLFNBT2Y7Ozs7WUFWb0I7O0FBRDlCLHNCQUFXLCtCQUFRO0FBMENuQiwwQkFBOEIsT0FBVTtBQUNoQyxZQUFDO0FBQ00sc0JBQVcsVUFBYyxjQUFPO0FBQ25DLG1CQUFHLGlCQUFJLElBQVUsVUFBTyxPQUF1Qix1QkFBUyxTQUFPLFFBQWEsYUFJeEY7OzttQkFBc0IseUJBQ0wsaUJBQ2YsRUFBWSxpQ0FDYiwrQ0FBZSxROzs7Ozs7OztBQ3BFaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBeUMsMkJBQTJCO0FBQ3BFLG9EQUFtRDs7Ozs7Ozs7QUNWbkQ7QUFDQTs7O0FBR0E7QUFDQSxpREFBZ0Qsc0JBQXNCLG1CQUFtQixFQUFFOztBQUUzRjtBQUNBO0FBQ0E7QUFDQSxHIiwiZmlsZSI6IjMuMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyB9IGZyb20gJy4vY29tbW9uJ1xuaW1wb3J0ICogYXMgY29tbW9uIGZyb20gJy4vY29tbW9uJ1xuXG5leHBvcnQgY29uc3QgcXVlcnlEb3ViYW5Cb29rc1NlbGVjdG9yID0gcXVlcnkgPT4gY3JlYXRlU2VsZWN0b3IoXG4gIHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzKHtcbiAgICBlbnRpdGllc05hbWU6ICdkb3ViYW5Cb29rcycsXG4gICAgcGFnaW5hdGlvbk5hbWU6ICdkb3ViYW5Cb29rcycsXG4gICAgcGFnaW5hdGlvblF1ZXJ5OiBxdWVyeVxuICB9KSxcbiAgYm9va3MgPT4gYm9va3NcbilcblxuZXhwb3J0IGNvbnN0IHF1ZXJ5QXV0aG9yc1NlbGVjdG9yID0gcXVlcnkgPT4gc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMoe1xuICBlbnRpdGllc05hbWU6ICdhdXRob3JzJyxcbiAgcGFnaW5hdGlvbk5hbWU6ICdhdXRob3JzJyxcbiAgcGFnaW5hdGlvblF1ZXJ5OiBxdWVyeVxufSlcblxuZXhwb3J0IGNvbnN0IHNlYXJjaEJvb2tzU2VsZWN0b3IgPSBxdWVyeSA9PiBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyh7XG4gIGVudGl0aWVzTmFtZTogJ2Jvb2tzJyxcbiAgcGFnaW5hdGlvbk5hbWU6ICdib29rcycsXG4gIHBhZ2luYXRpb25RdWVyeTogcXVlcnlcbn0pXG5cbmV4cG9ydCBjb25zdCBkb3ViYW5Cb29rc0FzT3B0aW9ucyA9IHF1ZXJ5ID0+IGNyZWF0ZVNlbGVjdG9yKFxuICBxdWVyeURvdWJhbkJvb2tzU2VsZWN0b3IocXVlcnkpLFxuICBib29rcyA9PiB7XG4gICAgcmV0dXJuIGJvb2tzLm1hcChib29rID0+ICh7XG4gICAgICBuYW1lOiBib29rLnRpdGxlLFxuICAgICAgdmFsdWU6IGJvb2suaWQsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBib29rLnN1bW1hcnksXG4gICAgICAgIGNvdmVyOiBib29rLmltYWdlcy5sYXJnZSxcbiAgICAgICAgYXV0aG9yOiBib29rLmF1dGhvci5qb2luKCcsICcpXG4gICAgICB9XG4gICAgfSkpXG4gIH1cbilcblxuZXhwb3J0IGNvbnN0IGF1dGhvcnNBc09wdGlvbnMgPSBxdWVyeSA9PiBjcmVhdGVTZWxlY3RvcihcbiAgcXVlcnlBdXRob3JzU2VsZWN0b3IocXVlcnkpLFxuICBpdGVtcyA9PiB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcChpdGVtID0+ICh7XG4gICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICB2YWx1ZTogaXRlbS5pZFxuICAgIH0pKVxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBib29rc1NlYXJjaEFzT3B0aW9ucyA9IHF1ZXJ5ID0+IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWFyY2hCb29rc1NlbGVjdG9yKHF1ZXJ5KSxcbiAgaXRlbXMgPT4ge1xuICAgIHJldHVybiBpdGVtcy5tYXAoaXRlbSA9PiAoe1xuICAgICAgbmFtZTogaXRlbS50aXRsZSxcbiAgICAgIHZhbHVlOiBpdGVtLmlkXG4gICAgfSkpXG4gIH1cbilcblxuZXhwb3J0IGNvbnN0IGJvb2tzU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMoe1xuICAgIGVudGl0aWVzTmFtZTogJ2Jvb2tzJyxcbiAgICBwYWdpbmF0aW9uTmFtZTogJ2Jvb2tzJyxcbiAgICBwYWdpbmF0aW9uS2V5OiAnZGVmYXVsdCdcbiAgfSksXG4gIGJvb2tzID0+IGJvb2tzXG4pXG5cbmV4cG9ydCBjb25zdCB1c2Vyc1NlbGVjdG9yID0gc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMoe1xuICBlbnRpdGllc05hbWU6ICd1c2VycycsXG4gIHBhZ2luYXRpb25OYW1lOiAndXNlcnMnLFxuICBwYWdpbmF0aW9uS2V5OiAnZGVmYXVsdCdcbn0pXG5cbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uJ1xuZXhwb3J0IHsgY29tbW9uIH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL3NlbGVjdG9ycy9pbmRleC50c1xuICoqLyIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmNvbnN0IGVudGl0aWVzU2VsZWN0b3IgPSBuYW1lID0+IHN0YXRlID0+IHtcbiAgcmV0dXJuIHN0YXRlLmVudGl0aWVzW25hbWVdIHx8IHt9XG59XG5jb25zdCBwYWdpbmF0aW9uU2VsZWN0b3IgPSAobmFtZSwga2V5ID0gJ2RlZmF1bHQnKSA9PiBzdGF0ZSA9PiB7XG4gIHJldHVybiBfLmdldChzdGF0ZS5wYWdpbmF0aW9uLCBgJHtuYW1lfS4ke2tleX0uaWRzYCwgW10pXG59XG5leHBvcnQgY29uc3QgcGFnaW5hdGlvbkxpbmtTZWxlY3RvciA9IChuYW1lLCBrZXkgPSAnZGVmYXVsdCcpID0+IHN0YXRlID0+IHtcbiAgcmV0dXJuIF8ucGljayhfLmdldChzdGF0ZS5wYWdpbmF0aW9uLCBgJHtuYW1lfS4ke2tleX1gLCB7fSksIFsnbmV4dCcsICdsYXN0J10pXG59XG5jb25zdCBxdWVyeVBhZ2luYXRpb25TZWxlY3RvciA9IChuYW1lLCBxdWVyeSkgPT4gc3RhdGUgPT4ge1xuICByZXR1cm4gXy5nZXQoc3RhdGUucGFnaW5hdGlvbiwgW25hbWUsICdxdWVyeScsIHF1ZXJ5LCAnaWRzJ10sIFtdKVxufVxuXG50eXBlIFNlbGVjdFBhZ2luYXRlZEVudGl0aWVzT3B0aW9ucyA9IHtcbiAgZW50aXRpZXNOYW1lOiBzdHJpbmdcbiAgcGFnaW5hdGlvbk5hbWU6IHN0cmluZ1xuICBwYWdpbmF0aW9uS2V5Pzogc3RyaW5nXG4gIHBhZ2luYXRpb25RdWVyeT86IHN0cmluZ1xufVxuZXhwb3J0IGNvbnN0IHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzID0gKG9wdGlvbnM6IFNlbGVjdFBhZ2luYXRlZEVudGl0aWVzT3B0aW9ucykgPT4ge1xuICBjb25zdCB7ZW50aXRpZXNOYW1lLCBwYWdpbmF0aW9uTmFtZSwgcGFnaW5hdGlvbktleSwgcGFnaW5hdGlvblF1ZXJ5fSA9IG9wdGlvbnNcbiAgbGV0IHBhZ2lTZWxlY3RvcjogKHN0YXRlOiBhbnkpID0+IGFueVtdXG5cbiAgaWYgKHBhZ2luYXRpb25RdWVyeSkge1xuICAgIHBhZ2lTZWxlY3RvciA9IHF1ZXJ5UGFnaW5hdGlvblNlbGVjdG9yKHBhZ2luYXRpb25OYW1lLCBwYWdpbmF0aW9uUXVlcnkpXG4gIH0gZWxzZSB7XG4gICAgcGFnaVNlbGVjdG9yID0gcGFnaW5hdGlvblNlbGVjdG9yKHBhZ2luYXRpb25OYW1lLCBwYWdpbmF0aW9uS2V5KVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGVudGl0aWVzU2VsZWN0b3IoZW50aXRpZXNOYW1lKSxcbiAgICBwYWdpU2VsZWN0b3IsXG4gICAgKGVudGl0aWVzLCBpZHMpID0+IHtcbiAgICAgIHJldHVybiBpZHMubWFwKGlkID0+IGVudGl0aWVzW2lkXSlcbiAgICB9XG4gIClcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL3NlbGVjdG9ycy9jb21tb24udHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZXNlbGVjdFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVzZWxlY3RcIlxuICoqIG1vZHVsZSBpZCA9IDQ1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgMTIgMTMgMTQgMTVcbiAqKi8iLCJpbXBvcnQgQm9va0xpc3RTZWN0aW9uIGZyb20gJy4vQm9va0xpc3RTZWN0aW9uJ1xuZXhwb3J0IGRlZmF1bHQgQm9va0xpc3RTZWN0aW9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0U2VjdGlvbi9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgQm9va0xpc3QgZnJvbSAnLi4vQm9va0xpc3QnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uL2VsZW1lbnRzL0ljb24nXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0Jvb2tMaXN0U2VjdGlvbi5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGJvb2tFbnRpdGllczogYW55XG4gIHRpdGxlPzogc3RyaW5nXG4gIG1vcmVMaW5rPzogc3RyaW5nXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgQm9va0xpc3RTZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywge30+IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGVcbiAgICBsZXQgbW9yZUxpbmsgPSB0aGlzLnByb3BzLm1vcmVMaW5rID8gdGhpcy5wcm9wcy5tb3JlTGluayA6IG51bGxcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cImJvb2stbGlzdC1zZWN0aW9uXCI+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLnRpdGxlICYmIChcbiAgICAgICAgICAgIG1vcmVMaW5rXG4gICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgIDxoMiBzdHlsZU5hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz17bW9yZUxpbmt9Pnt0aXRsZX08SWNvbiBuYW1lPVwiYXJyb3dSaWdodFwiIHNpemU9ezIwfSAvPjwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICAgIDxoMiBzdHlsZU5hbWU9XCJzZWN0aW9uLXRpdGxlXCI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgPEJvb2tMaXN0IGJvb2tFbnRpdGllcz17dGhpcy5wcm9wcy5ib29rRW50aXRpZXN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va0xpc3RTZWN0aW9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0U2VjdGlvbi9Cb29rTGlzdFNlY3Rpb24udHN4XG4gKiovIiwiaW1wb3J0IEJvb2tMaXN0IGZyb20gJy4vQm9va0xpc3QnXG5leHBvcnQgZGVmYXVsdCBCb29rTGlzdFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdC9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCb29rIGZyb20gJy4uL0Jvb2snXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vQm9va0xpc3Quc2NzcycpXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGJvb2tFbnRpdGllczoge1xuICAgIGlkOiBzdHJpbmdcbiAgICB0aXRsZTogc3RyaW5nXG4gICAgYXV0aG9yczogYW55XG4gICAgZGVzY3JpcHRpb246IHN0cmluZ1xuICAgIGNvdmVyOiBzdHJpbmdcbiAgfVtdXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIEJvb2tMaXN0IGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCB7fT4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBzdHlsZU5hbWU9XCJib29rLWxpc3RcIiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5ib29rRW50aXRpZXMgJiYgdGhpcy5wcm9wcy5ib29rRW50aXRpZXMubGVuZ3RoICE9PSAwXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ib29rRW50aXRpZXMubWFwKChib29rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdGl0bGUsIGF1dGhvcnMsIGRlc2NyaXB0aW9uLCBjb3ZlciB9ID0gYm9va1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxCb29rXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2Jvb2suaWR9XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlIHx8ICfml6DmoIfpopgnfVxuICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcnM9e2F1dGhvcnMgJiYgYXV0aG9ycy5tYXAoYXV0aG9yID0+IGF1dGhvci5uYW1lKS5qb2luKCcsICcpIHx8ICfmnKrnn6XkvZzogIUnfVxuICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICBjb3Zlcj17Y292ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVBvcHVwXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgIDxsaT7mmoLml6DorrDlvZU8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rTGlzdFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rTGlzdC9Cb29rTGlzdC50c3hcbiAqKi8iLCJpbXBvcnQgQm9vayBmcm9tICcuL0Jvb2snXG5leHBvcnQgZGVmYXVsdCBCb29rXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2svaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IEJvb2tJbmZvUG9wdXAgZnJvbSAnLi4vQm9va0luZm9Qb3B1cCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9fYm9vay5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgYXV0aG9yczogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgaWQ6IHN0cmluZ1xuICBjb3Zlcjogc3RyaW5nXG4gIGRpc2FibGVQb3B1cD86IGJvb2xlYW5cbiAgc2hvd0Rlc2M/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBzaG93UG9wdXA6IGJvb2xlYW5cbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29rIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd1BvcHVwOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLnNob3dQb3B1cCA9IHRoaXMuc2hvd1BvcHVwLmJpbmQodGhpcylcbiAgICB0aGlzLmhpZGVQb3B1cCA9IHRoaXMuaGlkZVBvcHVwLmJpbmQodGhpcylcbiAgfVxuXG4gIHNob3dQb3B1cCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dQb3B1cDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBoaWRlUG9wdXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93UG9wdXA6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNob3dEZXNjLCBkZXNjcmlwdGlvbiwgY292ZXIgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IG9uTW91c2VFbnRlcj17dGhpcy5zaG93UG9wdXB9IG9uTW91c2VMZWF2ZT17dGhpcy5oaWRlUG9wdXB9IHN0eWxlTmFtZT1cImJvb2stLWNhcmRcIj5cbiAgICAgICAgPExpbmsgdG89eycvYm9vay8nICsgdGhpcy5wcm9wcy5pZH0gPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvdmVyICYmIChcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJib29rLWNvdmVyXCI+PGltZyBzcmM9e3RoaXMucHJvcHMuY292ZXJ9Lz48L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJib29rLW1ldGFcIj5cbiAgICAgICAgICAgIDxzcGFuIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfSBzdHlsZU5hbWU9XCJib29rLW5hbWVcIj57dGhpcy5wcm9wcy50aXRsZSB8fCAn5peg5qCH6aKYJ308L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZU5hbWU9XCJib29rLWF1dGhvclwiPnt0aGlzLnByb3BzLmF1dGhvcnMgfHwgJ+S9nOiAheS4jeivpid9PC9zcGFuPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzaG93RGVzYyAmJiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwiYm9vay1kZXNjXCI+e2Rlc2NyaXB0aW9uIHx8ICfnqbonfTwvc3Bhbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLnNob3dQb3B1cCAmJiAhdGhpcy5wcm9wcy5kaXNhYmxlUG9wdXAgJiYgKFxuICAgICAgICAgICAgPEJvb2tJbmZvUG9wdXBcbiAgICAgICAgICAgICAgYm9va0lkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgYXV0aG9yPXt0aGlzLnByb3BzLmF1dGhvcnN9XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2svQm9vay50c3hcbiAqKi8iLCJpbXBvcnQgQm9va0luZm9Qb3B1cCBmcm9tICcuL0Jvb2tJbmZvUG9wdXAnXG5leHBvcnQgZGVmYXVsdCBCb29rSW5mb1BvcHVwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tJbmZvUG9wdXAvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvX2Zvcm0nXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vQm9va0luZm9Qb3B1cC5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGF1dGhvcjogc3RyaW5nXG4gIHRpdGxlOiBzdHJpbmdcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBib29rSWQ6IHN0cmluZ1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIEJvb2tJbmZvUG9wdXAgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCB7fT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYXV0aG9yLCB0aXRsZSwgZGVzY3JpcHRpb24sIGJvb2tJZCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwicG9wdXBcIj5cbiAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8aDIgc3R5bGVOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMj5cbiAgICAgICAgICA8cCBzdHlsZU5hbWU9XCJhdXRob3JcIj57YXV0aG9yfTwvcD5cbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiYmx1ZVwiIHRvPXsnL3ZpZXdlci9ib29rLycgKyBib29rSWR9PumYheivuzwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tJbmZvUG9wdXBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0luZm9Qb3B1cC9Cb29rSW5mb1BvcHVwLnRzeFxuICoqLyIsImltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcbmltcG9ydCBTZWxlY3RpemVJbnB1dCBmcm9tICcuL1NlbGVjdGl6ZUlucHV0J1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vVGV4dGFyZWEnXG5cbmV4cG9ydCB7IEJ1dHRvbiwgSW5wdXQsIFNlbGVjdGl6ZUlucHV0LCBUZXh0YXJlYSB9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9pbmRleC50c1xuICoqLyIsImltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuZXhwb3J0IGRlZmF1bHQgSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0lucHV0LmNzcycpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgb25DaGFuZ2U/OiBhbnlcbiAgdmFsdWU/OiBzdHJpbmdcbiAgdHlwZT86IHN0cmluZ1xuICBuYW1lPzogc3RyaW5nXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpXG4gICAgZGVsZXRlIHByb3BzLmNsYXNzTmFtZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwiaW5wdXQtd3JhcFwiIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJyd9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBzdHlsZU5hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKVxuICAgICAgICAgIH19XG4gICAgICAgICAgdHlwZT17dGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ3RleHQnfVxuICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZSA/IHRoaXMucHJvcHMubmFtZSA6IG51bGx9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0lucHV0L0lucHV0LnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vSW5wdXQuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vSW5wdXQvSW5wdXQuY3NzXG4gKiogbW9kdWxlIGlkID0gNDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2Uhc3R5bGVzL3ZhcmlhYmxlcy5jc3NcIiksIFwiXCIpO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbnB1dC13cmFwXzNkSEEzIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaW5wdXRfMmp1Qk8ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiB2YXIoLS1pbnB1dC1wYWRkaW5nKSA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5KTtcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuM3M7XFxuICBsaW5lLWhlaWdodDogdmFyKC0taW5wdXQtbGluZS1oZWlnaHQpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmlucHV0XzJqdUJPOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImlucHV0LXdyYXBcIjogXCJpbnB1dC13cmFwXzNkSEEzXCIsXG5cdFwiaW5wdXRcIjogXCJpbnB1dF8yanVCT1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9wb3N0Y3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9JbnB1dC9JbnB1dC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0NjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsImltcG9ydCBTZWxlY3RpemVJbnB1dCBmcm9tICcuL1NlbGVjdGl6ZUlucHV0J1xuZXhwb3J0IGRlZmF1bHQgU2VsZWN0aXplSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1NlbGVjdGl6ZUlucHV0L2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vSWNvbidcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBpc0Rlc2NlbmRhbnQgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZG9tL2lzRGVzY2VuZGFudCdcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vU2VsZWN0aXplSW5wdXQuc2NzcycpXG5cbnR5cGUgVHlwZU9wdGlvbiA9IHtcbiAgdmFsdWU6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGFkZGl0aW9uYWw/OiBhbnlcbn1cblxudHlwZSBUeXBlVmFsdWUgPSB7XG4gIHZhbHVlOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgbGFiZWw/OiBzdHJpbmdcbiAgc3RheUZvY3VzZWQ/OiBib29sZWFuIC8vIGRlZmF1bHQgdHJ1ZVxuXG4gIHZhbHVlOiBzdHJpbmdcbiAgb25JbnB1dENoYW5nZTogKG5ld1ZhbHVlOiBzdHJpbmcpID0+IHZvaWRcblxuICBvcHRpb25zOiBBcnJheTxUeXBlT3B0aW9uPlxuICBvbk9wdGlvbnNDaGFuZ2U/OiAobmV3VmFsdWVzOiBBcnJheTxUeXBlT3B0aW9uPikgPT4gdm9pZFxuXG4gIHZhbHVlczogQXJyYXk8VHlwZVZhbHVlPlxuICBvblZhbHVlc0NoYW5nZTogKG5ld1ZhbHVlczogQXJyYXk8VHlwZVZhbHVlPikgPT4gdm9pZFxuXG4gIC8vIOmineWkluWKn+iDvVxuICBvbkFkZE5ld1ZhbHVlPzogKG5ld1ZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbiAgb25PcHRpb25DbGljaz86IChzZWxlY3RlZFZhbHVlOiBUeXBlT3B0aW9uKSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBmb2N1cz86IGJvb2xlYW5cbiAgc2hvd09wdGlvbnM/OiBib29sZWFuXG4gIHZhbHVlPzogc3RyaW5nXG4gIGV4cGVuZGVkT3B0aW9uSW5kZXg/OiBudW1iZXJcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBTZWxlY3RpemVJbnB1dCBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50XG4gIGlucHV0V3JhcDogSFRNTERpdkVsZW1lbnRcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93T3B0aW9uczogZmFsc2UsXG4gICAgICBmb2N1czogZmFsc2UsXG4gICAgICB2YWx1ZTogJycsXG4gICAgICBleHBlbmRlZE9wdGlvbkluZGV4OiAwXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrID0gdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2suYmluZCh0aGlzKVxuICAgIHRoaXMuZm9jdXNJbnB1dCA9IHRoaXMuZm9jdXNJbnB1dC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVJbnB1dFdyYXBDbGljayA9IHRoaXMuaGFuZGxlSW5wdXRXcmFwQ2xpY2suYmluZCh0aGlzKVxuICB9XG5cbiAgYWRkVmFsdWUobmV3VmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLm9uVmFsdWVzQ2hhbmdlKHRoaXMucHJvcHMudmFsdWVzLmNvbmNhdChuZXdWYWx1ZSkpXG4gICAgaWYgKHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSh0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiAob3B0aW9uLnZhbHVlID09PSBuZXdWYWx1ZS52YWx1ZVxuICAgICAgICA/IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbiwgeyBkaXNhYmxlZDogdHJ1ZSB9KVxuICAgICAgICA6IG9wdGlvbikpKVxuICAgIH1cbiAgICB0aGlzLmNsZWFySW5wdXRWYWx1ZSgpXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnN0YXlGb2N1c2VkID09PSAndW5kZWZpbmVkJyB8fCB0aGlzLnByb3BzLnN0YXlGb2N1c2VkICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5mb2N1c0lucHV0KClcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3B0aW9uczogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlVmFsdWUoaW5kZXgpIHtcbiAgICBsZXQgbmV3VmFsdWVzID0gW11cbiAgICBsZXQgcmVtb3ZlZFZhbHVlXG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICBuZXdWYWx1ZXMgPSB0aGlzLnByb3BzLnZhbHVlcy5zbGljZSgwLCB0aGlzLnByb3BzLnZhbHVlcy5sZW5ndGggLSAxKVxuICAgICAgcmVtb3ZlZFZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZXNbdGhpcy5wcm9wcy52YWx1ZXMubGVuZ3RoIC0gMV0udmFsdWVcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3VmFsdWVzID0gdGhpcy5wcm9wcy52YWx1ZXNcbiAgICAgICAgLmZpbHRlcigodiwgaSkgPT4ge1xuICAgICAgICAgIHJlbW92ZWRWYWx1ZSA9IHYudmFsdWVcbiAgICAgICAgICByZXR1cm4gaSAhPT0gaW5kZXhcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKHRoaXMucHJvcHMub3B0aW9ucy5tYXAob3B0aW9uID0+IChvcHRpb24udmFsdWUgPT09IHJlbW92ZWRWYWx1ZVxuICAgICAgICA/IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbiwgeyBkaXNhYmxlZDogZmFsc2UgfSlcbiAgICAgICAgOiBvcHRpb24pKSlcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uVmFsdWVzQ2hhbmdlKG5ld1ZhbHVlcylcbiAgfVxuXG4gIGNsZWFySW5wdXRWYWx1ZSgpIHtcbiAgICB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UoJycpXG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gOCAmJiAhdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgdGhpcy5yZW1vdmVWYWx1ZSgtIDEpXG4gICAgfVxuICAgIC8vIHRvZG9cbiAgICAvLyBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiB0aGlzLnN0YXRlLnNob3dPcHRpb25zKSB7XG4gICAgLy8gICB0aGlzLmFkZFZhbHVlKClcbiAgICAvLyB9XG4gIH1cblxuICBmb2N1c0lucHV0KCkge1xuICAgIHRoaXMuaW5wdXQuZm9jdXMoKVxuICB9XG5cbiAgaGFuZGxlT3V0c2lkZUNsaWNrKGUpIHtcbiAgICBpZiAoIWlzRGVzY2VuZGFudCh0aGlzLmlucHV0V3JhcCwgZS50YXJnZXQpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd09wdGlvbnM6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUlucHV0V3JhcENsaWNrKCkge1xuICAgIHRoaXMuZm9jdXNJbnB1dCgpXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dPcHRpb25zOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2spXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYWJlbCwgdmFsdWVzLCBvbkFkZE5ld1ZhbHVlIH0gPSB0aGlzLnByb3BzXG5cbiAgICBsZXQgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlIHx8ICcnXG4gICAgbGV0IG9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnMgfHwgW11cblxuICAgIGxldCBpbnB1dFdpZHRoID0gdmFsdWVzLmxlbmd0aCA+IDAgPyAodmFsdWUubGVuZ3RoID09PSAwID8gMTYgOiB2YWx1ZS5sZW5ndGggKiAxNikgOiAnMTAwJSdcbiAgICBsZXQgcGxhY2Vob2xkZXIgPSB2YWx1ZXMubGVuZ3RoID4gMCA/ICcnIDogdGhpcy5wcm9wcy5wbGFjZWhvbGRlclxuXG4gICAgY29uc3Qgc2VsZWN0aXplSW5wdXRTdHlsZU5hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICdzZWxlY3RpemUtaW5wdXQnOiB0cnVlLFxuICAgICAgJ3NlbGVjdGl6ZS1pbnB1dC0tZm9jdXMnOiB0aGlzLnN0YXRlLmZvY3VzLFxuICAgICAgJ3NlbGVjdGl6ZS1pbnB1dC0tZW1wdHknOiB2YWx1ZXMubGVuZ3RoID09PSAwXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cInNlbGVjdGl6ZS13cmFwXCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJ30+XG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbCA/IChcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+e2xhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGVOYW1lPXtzZWxlY3RpemVJbnB1dFN0eWxlTmFtZX1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUlucHV0V3JhcENsaWNrfVxuICAgICAgICAgIHJlZj17cmVmID0+IHsgdGhpcy5pbnB1dFdyYXAgPSByZWYgfSB9XG4gICAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlcy5tYXAoKHYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gc3R5bGVOYW1lPVwic2VsZWN0aXplLXRhZ1wiPlxuICAgICAgICAgICAgICAgICAge3YubmFtZX1cbiAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlTmFtZT1cImljb24tcmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjB9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWUoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogaW5wdXRXaWR0aCB9fVxuICAgICAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmlucHV0ID0gcmVmIH0gfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgb25CbHVyPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiBmYWxzZSB9KVxuICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICBvbkZvY3VzPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiB0cnVlIH0pXG4gICAgICAgICAgICB9IH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKChlLnRhcmdldCBhcyBhbnkpLnZhbHVlKVxuICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICBvbktleURvd249e2UgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZUtleVByZXNzKGUpXG4gICAgICAgICAgICB9IH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5zaG93T3B0aW9ucyAmJiAob3B0aW9ucy5sZW5ndGggIT09IDAgfHwgb25BZGROZXdWYWx1ZSkgPyAoXG4gICAgICAgICAgICA8dWwgc3R5bGVOYW1lPVwicXVlcnktcmVzdWx0c1wiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJkaXNhYmxlZFwiPntvcHRpb24ubmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVmFsdWUob3B0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25PcHRpb25DbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uT3B0aW9uQ2xpY2sob3B0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57b3B0aW9uLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uQWRkTmV3VmFsdWUgPyAoXG4gICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgb25BZGROZXdWYWx1ZSh0aGlzLnByb3BzLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkXCI+5re75YqgIDxzdHJvbmc+e3RoaXMucHJvcHMudmFsdWV9PC9zdHJvbmc+PC9saT5cbiAgICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICkgOiBudWxsXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RpemVJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9TZWxlY3RpemVJbnB1dC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vU2VsZWN0aXplSW5wdXQvU2VsZWN0aXplSW5wdXQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2VsZWN0aXplLXdyYXBfM0FNQWkge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uc2VsZWN0aXplLWlucHV0XzE0YmdQIHtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdHJhbnNpdGlvbjogYWxsIDBzO1xcbiAgY3Vyc29yOiB0ZXh0O1xcbiAgYmFja2dyb3VuZDogI2ZmZjsgfVxcbiAgLnNlbGVjdGl6ZS1pbnB1dF8xNGJnUCBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBsaW5lLWhlaWdodDogMjJweDsgfVxcblxcbi5zZWxlY3RpemUtaW5wdXQtLWZvY3VzX1VuWjhCIHtcXG4gIGJvcmRlci1jb2xvcjogIzFCMjY3RjsgfVxcblxcbi5zZWxlY3RpemUtaW5wdXQtLWVtcHR5X3huN1V5IHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiA1cHggNXB4IDA7IH1cXG5cXG4uc2VsZWN0aXplLWlucHV0XzE0YmdQIGlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cXG5cXG4ucXVlcnktcmVzdWx0c19PZ0UydCB7XFxuICBtYXJnaW4tdG9wOiAtM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMzIpO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHotaW5kZXg6IDkwMDsgfVxcblxcbi5xdWVyeS1yZXN1bHRzX09nRTJ0IGxpIHtcXG4gIHBhZGRpbmc6IDAgN3B4O1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7IH1cXG4gIC5xdWVyeS1yZXN1bHRzX09nRTJ0IGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzFCMjY3RjtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG5cXG4uc2VsZWN0aXplLXRhZ18zYUQxMyB7XFxuICBiYWNrZ3JvdW5kOiAjMUIyNjdGO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogM3B4IDI1cHggM3B4IDVweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uaWNvbi1yZW1vdmVfMU83Rl8ge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDVweDtcXG4gIHRvcDogMnB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic2VsZWN0aXplLXdyYXBcIjogXCJzZWxlY3RpemUtd3JhcF8zQU1BaVwiLFxuXHRcInNlbGVjdGl6ZS1pbnB1dFwiOiBcInNlbGVjdGl6ZS1pbnB1dF8xNGJnUFwiLFxuXHRcInNlbGVjdGl6ZS1pbnB1dC0tZm9jdXNcIjogXCJzZWxlY3RpemUtaW5wdXQtLWZvY3VzX1VuWjhCXCIsXG5cdFwic2VsZWN0aXplLWlucHV0LS1lbXB0eVwiOiBcInNlbGVjdGl6ZS1pbnB1dC0tZW1wdHlfeG43VXlcIixcblx0XCJxdWVyeS1yZXN1bHRzXCI6IFwicXVlcnktcmVzdWx0c19PZ0UydFwiLFxuXHRcInNlbGVjdGl6ZS10YWdcIjogXCJzZWxlY3RpemUtdGFnXzNhRDEzXCIsXG5cdFwiaWNvbi1yZW1vdmVcIjogXCJpY29uLXJlbW92ZV8xTzdGX1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9TZWxlY3RpemVJbnB1dC9TZWxlY3RpemVJbnB1dC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDcwXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDYgNyA4IDkgMTEgMTQgMTVcbiAqKi8iLCJpbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9UZXh0YXJlYSdcbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb3BzIGFzIElucHV0UHJvcHMgfSBmcm9tICcuLi9JbnB1dC9JbnB1dCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9UZXh0YXJlYS5jc3MnKVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSW5wdXRQcm9wcyB7XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cInRleHRhcmVhLXdyYXBcIiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnfT5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKVxuICAgICAgICAgIH19XG4gICAgICAgICAgc3R5bGVOYW1lPVwidGV4dGFyZWFcIlxuICAgICAgICAgIHR5cGU9e3RoaXMucHJvcHMudHlwZSA/IHRoaXMucHJvcHMudHlwZSA6ICd0ZXh0J31cbiAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLm5hbWUgPyB0aGlzLnByb3BzLm5hbWUgOiBudWxsfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL1RleHRhcmVhLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL1RleHRhcmVhL1RleHRhcmVhLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ3M1xuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNCA2IDcgOCA5IDExIDE0IDE1XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIXN0eWxlcy92YXJpYWJsZXMuY3NzXCIpLCBcIlwiKTtcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi4vSW5wdXQvSW5wdXQuY3NzXCIpLCB1bmRlZmluZWQpO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50ZXh0YXJlYS13cmFwX1hrcGoxIHtcXG59XFxuXFxuLnRleHRhcmVhXzFFZG9TIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheSk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuM3M7XFxufVxcblxcbi50ZXh0YXJlYV8xRWRvUzpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ0ZXh0YXJlYS13cmFwXCI6IFwidGV4dGFyZWEtd3JhcF9Ya3BqMSBcIiArIHJlcXVpcmUoXCItIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuLi9JbnB1dC9JbnB1dC5jc3NcIikubG9jYWxzW1wiaW5wdXQtd3JhcFwiXSArIFwiXCIsXG5cdFwidGV4dGFyZWFcIjogXCJ0ZXh0YXJlYV8xRWRvU1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9wb3N0Y3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9UZXh0YXJlYS9UZXh0YXJlYS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0NzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDQgNiA3IDggOSAxMSAxNCAxNVxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vQm9va0luZm9Qb3B1cC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL0Jvb2tJbmZvUG9wdXAuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ3NVxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNiA5XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGl0bGVfQlZPN2Uge1xcbiAgbWFyZ2luOiAzNXB4IDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMzMzM7IH1cXG5cXG4ucG9wdXBfTVBDcXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogOTk5O1xcbiAgbGVmdDogMTM0cHg7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xcbiAgcGFkZGluZzogMjBweCAyMHB4IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyB9XFxuXFxuLmhlYWRlcl8xSW5JZiB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XFxuXFxuLnRpdGxlX0JWTzdlIHtcXG4gIG1hcmdpbjogMzBweCAwIDEwcHggMDsgfVxcblxcbi5hdXRob3JfMjhCaUEge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBtYXJnaW46IDAgMCAyZW0gMDsgfVxcblxcbi5kZXNjcmlwdGlvbl9EOXJWTiB7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ0aXRsZVwiOiBcInRpdGxlX0JWTzdlXCIsXG5cdFwicG9wdXBcIjogXCJwb3B1cF9NUENxclwiLFxuXHRcImhlYWRlclwiOiBcImhlYWRlcl8xSW5JZlwiLFxuXHRcImF1dGhvclwiOiBcImF1dGhvcl8yOEJpQVwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiZGVzY3JpcHRpb25fRDlyVk5cIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwL0Jvb2tJbmZvUG9wdXAuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ3NlxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNiA5XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9fYm9vay5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Cb29rL19ib29rLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0NzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDYgOVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1ldGEtaXRlbV8yY1J5SiB7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLmJvb2tfM09xel8ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlIDBzO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgcGFkZGluZzogMCAxMHB4OyB9XFxuICAuYm9va18zT3F6XyBhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICAgLmJvb2tfM09xel8gYTpob3ZlciBpbWcge1xcbiAgICAgIG9wYWNpdHk6IC45NjsgfVxcbiAgICAuYm9va18zT3F6XyBhOmFjdGl2ZSBpbWcge1xcbiAgICAgIG9wYWNpdHk6IC44OyB9XFxuXFxuLmJvb2stbWV0YV8zZ2xjWiB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxcblxcbi5tZXRhLWl0ZW1fMmNSeUoge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgbWFyZ2luLWxlZnQ6IDE3cHg7XFxuICB3aWR0aDogMTM0cHg7IH1cXG5cXG4uYm9vay1uYW1lXzJqSXVaIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY29sb3I6ICMzMzM7IH1cXG5cXG4uYm9vay1hdXRob3JfMVZNN2Uge1xcbiAgY29sb3I6ICM5OTk7IH1cXG5cXG4uYm9vay1jb3Zlcl8xanJLOCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTM0cHg7XFxuICBoZWlnaHQ6IDE4NHB4O1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcInN0YXRpYy9pbWcvc2hhZG93LnBuZ1wiKSArIFwiKSBuby1yZXBlYXQgdG9wO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAwcztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmJvb2stY292ZXJfMWpySzggaW1nIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGxlZnQ6IDE3cHg7XFxuICAgIHRvcDogN3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7IH1cXG4gIC5ib29rLWNvdmVyXzFqcks4OmhvdmVyIHtcXG4gICAgdG9wOiAtN3B4OyB9XFxuXFxuLmJvb2stZGVzY194RkZLbCB7XFxuICBjb2xvcjogIzk5OTsgfVxcblxcbi5ib29rLS1jYXJkXzNGT2t5IHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmbG9hdDogbm9uZTsgfVxcbiAgLmJvb2stLWNhcmRfM0ZPa3kgYSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICAgIC5ib29rLS1jYXJkXzNGT2t5IGE6aG92ZXIgaW1nIHtcXG4gICAgICBvcGFjaXR5OiAxOyB9XFxuICAgIC5ib29rLS1jYXJkXzNGT2t5IGE6YWN0aXZlIGltZyB7XFxuICAgICAgb3BhY2l0eTogMTsgfVxcbiAgLmJvb2stLWNhcmRfM0ZPa3kgLmJvb2stY292ZXJfMWpySzgge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDsgfVxcbiAgICAuYm9vay0tY2FyZF8zRk9reSAuYm9vay1jb3Zlcl8xanJLODpob3ZlciB7XFxuICAgICAgdG9wOiAwOyB9XFxuICAgIC5ib29rLS1jYXJkXzNGT2t5IC5ib29rLWNvdmVyXzFqcks4IGltZyB7XFxuICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDsgfVxcbiAgLmJvb2stLWNhcmRfM0ZPa3kgLmJvb2stbWV0YV8zZ2xjWiB7XFxuICAgIGZsb2F0OiBub25lOyB9XFxuICAuYm9vay0tY2FyZF8zRk9reSAubWV0YS1pdGVtXzJjUnlKIHtcXG4gICAgd2lkdGg6IGF1dG87IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJtZXRhLWl0ZW1cIjogXCJtZXRhLWl0ZW1fMmNSeUpcIixcblx0XCJib29rXCI6IFwiYm9va18zT3F6X1wiLFxuXHRcImJvb2stbWV0YVwiOiBcImJvb2stbWV0YV8zZ2xjWlwiLFxuXHRcImJvb2stbmFtZVwiOiBcImJvb2stbmFtZV8yakl1WiBtZXRhLWl0ZW1fMmNSeUpcIixcblx0XCJib29rLWF1dGhvclwiOiBcImJvb2stYXV0aG9yXzFWTTdlIG1ldGEtaXRlbV8yY1J5SlwiLFxuXHRcImJvb2stY292ZXJcIjogXCJib29rLWNvdmVyXzFqcks4XCIsXG5cdFwiYm9vay1kZXNjXCI6IFwiYm9vay1kZXNjX3hGRktsXCIsXG5cdFwiYm9vay0tY2FyZFwiOiBcImJvb2stLWNhcmRfM0ZPa3kgYm9va18zT3F6X1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2svX2Jvb2suc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ3OFxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNiA5XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3NoYWRvdy40NzFlYTM3Zjk2LnBuZ1wiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3RhdGljL2ltZy9zaGFkb3cucG5nXG4gKiogbW9kdWxlIGlkID0gNDc5XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA2IDlcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0Jvb2tMaXN0LnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0L0Jvb2tMaXN0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0ODBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDYgOVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJvb2stbGlzdF8yc19KbCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcXG4gIG1hcmdpbi1yaWdodDogLTEwcHg7IH1cXG4gIC5ib29rLWxpc3RfMnNfSmwgbGkge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImJvb2stbGlzdFwiOiBcImJvb2stbGlzdF8yc19KbFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0L0Jvb2tMaXN0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0ODFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDYgOVxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vQm9va0xpc3RTZWN0aW9uLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0Jvb2tMaXN0U2VjdGlvbi9Cb29rTGlzdFNlY3Rpb24uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ4MlxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgNlxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlY3Rpb24tdGl0bGVfMkt2M0Qge1xcbiAgbWFyZ2luOiAzNXB4IDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMzMzM7IH1cXG5cXG4uYm9vay1saXN0LXNlY3Rpb25fMkNmRGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLm1vcmVfbWdRSGcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBsaW5lLWhlaWdodDogMzJweDsgfVxcblxcbi5zZWN0aW9uLXRpdGxlXzJLdjNEIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG4gIC5zZWN0aW9uLXRpdGxlXzJLdjNEIGEge1xcbiAgICBjb2xvcjogIzMzMzsgfVxcbiAgICAuc2VjdGlvbi10aXRsZV8yS3YzRCBhOmhvdmVyIHtcXG4gICAgICBjb2xvcjogIzY2NjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInNlY3Rpb24tdGl0bGVcIjogXCJzZWN0aW9uLXRpdGxlXzJLdjNEXCIsXG5cdFwiYm9vay1saXN0LXNlY3Rpb25cIjogXCJib29rLWxpc3Qtc2VjdGlvbl8yQ2ZEZVwiLFxuXHRcIm1vcmVcIjogXCJtb3JlX21nUUhnXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9va0xpc3RTZWN0aW9uL0Jvb2tMaXN0U2VjdGlvbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDgzXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA2XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9fZm9ybS9CdXR0b24nXG5pbXBvcnQgQm9va0xpc3RTZWN0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQm9va0xpc3RTZWN0aW9uJ1xuaW1wb3J0IHsgZmV0Y2hCb29rcywgZmV0Y2hDb2xsZWN0aW9ucyB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2VsZW1lbnRzL19sYXlvdXQvQ29udGFpbmVyJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzOiBhbnkgPSByZXF1aXJlKCcuL0Jyb3dzZS5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGZldGNoQm9va3M6IChkYXRhPzogZmV0Y2hCb29rcykgPT4gdm9pZFxuICBuZXdlc3RCb29rczogYW55XG4gIG5leHRQYWdlOiBudW1iZXJcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgQnJvd3NlIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywge30+IHtcblxuICBzdGF0aWMgZmV0Y2hEYXRhKHtzdG9yZX0pIHtcbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZmV0Y2hCb29rcygpKVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGxvYWRNb3JlKHBhZ2UpIHtcbiAgICB0aGlzLnByb3BzLmZldGNoQm9va3MoeyBtZXJnZTogdHJ1ZSwgcGFnZSB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5mZXRjaEJvb2tzKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5leHRQYWdlIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJhcmNoaXZlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgICAgICA8Qm9va0xpc3RTZWN0aW9uIHRpdGxlPVwi5omA5pyJ5Lmm57GNXCIgYm9va0VudGl0aWVzPXt0aGlzLnByb3BzLm5ld2VzdEJvb2tzfSAvPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5leHRQYWdlICE9PSAwICYmIChcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgdGhpcy5sb2FkTW9yZShuZXh0UGFnZSkgfSB9XG4gICAgICAgICAgICAgICAgc3R5bGVOYW1lPVwiYnRuLWxvYWQtbW9yZVwiXG4gICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgPuWKoOi9veabtOWkmjwvQnV0dG9uPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICByZXR1cm4ge1xuICAgIG5ld2VzdEJvb2tzOiBzZWxlY3RvcnMuYm9va3NTZWxlY3RvcihzdGF0ZSksXG4gICAgbmV4dFBhZ2U6IF8uZ2V0KHNlbGVjdG9ycy5jb21tb24ucGFnaW5hdGlvbkxpbmtTZWxlY3RvcignYm9va3MnKShzdGF0ZSksICduZXh0LnBhZ2UnLCAwKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgeyBmZXRjaEJvb2tzLCBmZXRjaENvbGxlY3Rpb25zIH1cbikoQnJvd3NlIGFzIGFueSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9Ccm93c2UvQnJvd3NlLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vQnJvd3NlLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQnJvd3NlL0Jyb3dzZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDg4XG4gKiogbW9kdWxlIGNodW5rcyA9IDNcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5idG4tbG9hZC1tb3JlXzI2c2RRIHtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJidG4tbG9hZC1tb3JlXCI6IFwiYnRuLWxvYWQtbW9yZV8yNnNkUVwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQnJvd3NlL0Jyb3dzZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDg5XG4gKiogbW9kdWxlIGNodW5rcyA9IDNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9