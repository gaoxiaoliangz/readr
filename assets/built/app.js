/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(91);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(4))(1);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(4))(449);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _book = __webpack_require__(25);
	
	Object.keys(_book).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _book[key];
	        }
	    });
	});
	
	var _notification = __webpack_require__(26);
	
	Object.keys(_notification).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _notification[key];
	        }
	    });
	});
	
	var _user = __webpack_require__(27);
	
	Object.keys(_user).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _user[key];
	        }
	    });
	});
	exports.changeValue = changeValue;
	exports.updateElement = updateElement;
	function changeValue(name, value) {
	    return {
	        type: 'CHANGE_VALUE',
	        name: name,
	        value: value
	    };
	}
	function updateElement(name, data) {
	    return {
	        type: 'UPDATE_ELEMENT',
	        name: name,
	        data: data
	    };
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = _react_lib;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(4))(600);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(8))(678);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Textarea = exports.SelectizeInput = exports.Input = exports.Button = undefined;
	
	var _button = __webpack_require__(33);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _input = __webpack_require__(20);
	
	var _input2 = _interopRequireDefault(_input);
	
	var _selectizeInput = __webpack_require__(34);
	
	var _selectizeInput2 = _interopRequireDefault(_selectizeInput);
	
	var _textarea = __webpack_require__(21);
	
	var _textarea2 = _interopRequireDefault(_textarea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Button = _button2.default;
	exports.Input = _input2.default;
	exports.SelectizeInput = _selectizeInput2.default;
	exports.Textarea = _textarea2.default;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = _utils_lib;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var HOST = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000';
	var ApiRoots = {
	    LOCAL: HOST + '/api/',
	    DOUBAN_BOOKS: 'https://api.douban.com/v2/book/'
	};
	exports.default = ApiRoots;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSideEffect = __webpack_require__(47);
	
	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Body = function (_Component) {
	    _inherits(Body, _Component);
	
	    function Body() {
	        _classCallCheck(this, Body);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Body).apply(this, arguments));
	    }
	
	    _createClass(Body, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement("div", { className: "react-body-class hidden" });
	        }
	    }]);
	
	    return Body;
	}(_react.Component);
	
	function reducePropsToState(propsList) {
	    var className = void 0;
	    propsList.forEach(function (props) {
	        className = props.className;
	    });
	    return className;
	}
	function handleStateChangeOnClient(className) {
	    if (typeof className !== 'undefined') {
	        document.body.className = className;
	    } else {
	        document.body.removeAttribute('class');
	    }
	}
	exports.default = (0, _reactSideEffect2.default)(reducePropsToState, handleStateChangeOnClient)(Body);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Icon = function (_Component) {
	    _inherits(Icon, _Component);
	
	    function Icon(props) {
	        _classCallCheck(this, Icon);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Icon).call(this, props));
	    }
	
	    _createClass(Icon, [{
	        key: "render",
	        value: function render() {
	            var name = this.props.name;
	            var method = this.props.onClick;
	            var size = this.props.size;
	            return _react2.default.createElement("span", { className: "icon icon-" + name + " " + size, onClick: method });
	        }
	    }]);
	
	    return Icon;
	}(_react.Component);
	
	exports.default = Icon;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Container = function (_Component) {
	    _inherits(Container, _Component);
	
	    function Container() {
	        _classCallCheck(this, Container);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Container).apply(this, arguments));
	    }
	
	    _createClass(Container, [{
	        key: 'render',
	        value: function render() {
	            var className = (this.props.isFluid ? 'container-fluid' : 'container') + (this.props.className ? ' ' + this.props.className : '');
	            return _react2.default.createElement("div", { className: className }, this.props.children);
	        }
	    }]);
	
	    return Container;
	}(_react.Component);
	
	exports.default = Container;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.callApi = callApi;
	
	__webpack_require__(49);
	
	var _parseFormData = __webpack_require__(43);
	
	var _parseFormData2 = _interopRequireDefault(_parseFormData);
	
	var _handleResponseJson = __webpack_require__(22);
	
	var _handleResponseJson2 = _interopRequireDefault(_handleResponseJson);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultConfig = {
	    dataType: 'json',
	    method: 'GET',
	    credentials: 'same-origin'
	};
	function callApi(fullUrl) {
	    var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    // return fetch config
	    var parseConfig = function parseConfig(originanConfig) {
	        var _Object$assign = Object.assign({}, defaultConfig, originanConfig);
	
	        var method = _Object$assign.method;
	        var data = _Object$assign.data;
	        var credentials = _Object$assign.credentials;
	        var dataType = _Object$assign.dataType;
	
	        var fetchConfig = {};
	        if (method) {
	            fetchConfig.method = method;
	        }
	        if (credentials) {
	            fetchConfig.credentials = credentials;
	        }
	        // handle request headers and body
	        if (method === 'POST') {
	            var contentType = void 0;
	            var body = void 0;
	            if (dataType === 'json') {
	                contentType = 'application/json';
	                body = JSON.stringify(data);
	            } else if (dataType === 'urlencoded') {
	                contentType = 'application/x-www-form-urlencoded';
	                body = (0, _parseFormData2.default)(data);
	            } else {
	                // handle unsupported dataType
	                dataType = 'urlencoded';
	                contentType = 'application/x-www-form-urlencoded';
	                body = (0, _parseFormData2.default)(data);
	                console.warn('Unsupported dataType used "urlencoded" instead!');
	            }
	            fetchConfig.headers = {
	                'Content-Type': contentType,
	                'Access-Control-Request-Method': 'POST'
	            };
	            fetchConfig.body = body;
	        }
	        if (method === 'DELETE') {
	            fetchConfig.headers = {
	                'Access-Control-Request-Method': 'DELETE'
	            };
	        }
	        return fetchConfig;
	    };
	    return fetch(fullUrl, parseConfig(config)).then(function (response) {
	        return response.json().then(function (json) {
	            return { json: json, response: response };
	        });
	    }).then(function (_ref) {
	        var json = _ref.json;
	        var response = _ref.response;
	
	        if (response.ok) {
	            return (0, _handleResponseJson2.default)(json, config.schema);
	        } else {
	            return Promise.reject(json);
	        }
	    });
	}
	exports.default = callApi;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(4))(455);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(5);
	
	var _bookList = __webpack_require__(58);
	
	var _bookList2 = _interopRequireDefault(_bookList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BookListSection = function (_Component) {
	    _inherits(BookListSection, _Component);
	
	    function BookListSection() {
	        _classCallCheck(this, BookListSection);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(BookListSection).apply(this, arguments));
	    }
	
	    _createClass(BookListSection, [{
	        key: 'render',
	        value: function render() {
	            var title = this.props.title;
	            var moreLink = this.props.moreLink ? this.props.moreLink : null;
	            return _react2.default.createElement("div", { className: "book-list-section" }, this.props.title && _react2.default.createElement("h2", { className: "section-title" }, title), moreLink ? _react2.default.createElement(_reactRouter.Link, { className: "more", to: moreLink }, "查看更多") : null, _react2.default.createElement(_bookList2.default, { bookEntities: this.props.bookEntities }));
	        }
	    }]);
	
	    return BookListSection;
	}(_react.Component);
	
	exports.default = BookListSection;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Schemas = undefined;
	
	var _normalizr = __webpack_require__(19);
	
	var book = new _normalizr.Schema('books', {
	    idAttribute: 'id'
	});
	var collection = new _normalizr.Schema('bookCollections', {
	    idAttribute: 'id'
	});
	var profile = new _normalizr.Schema('profiles', {
	    idAttribute: 'id'
	});
	var user = new _normalizr.Schema('users', {
	    idAttribute: 'id'
	});
	var doubanBook = new _normalizr.Schema('doubanBooks', {
	    idAttribute: 'id'
	});
	var bookProgress = new _normalizr.Schema('books', {
	    idAttribute: 'bookId'
	});
	var matchedBooks = new _normalizr.Schema('books', {
	    idAttribute: 'bookId'
	});
	var Schemas = exports.Schemas = {
	    BOOK: book,
	    BOOK_PROGRESS: bookProgress,
	    BOOK_ARRAY: (0, _normalizr.arrayOf)(book),
	    DOUBAN_BOOK_SEARCH_RESULTS: { books: (0, _normalizr.arrayOf)(doubanBook) },
	    USER_ARRAY: (0, _normalizr.arrayOf)(user),
	    MATCHED_BOOK_ARRAY: (0, _normalizr.arrayOf)(matchedBooks),
	    COLLECTION: collection,
	    COLLECTION_ARRAY: (0, _normalizr.arrayOf)(collection),
	    PROFILE: profile
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.addCollection = addCollection;
	exports.addBook = addBook;
	exports.addAuthor = addAuthor;
	exports.searchAuthors = searchAuthors;
	exports.searchBooks = searchBooks;
	exports.setProgress = setProgress;
	exports.deleteBook = deleteBook;
	
	var _callApi = __webpack_require__(13);
	
	var _callApi2 = _interopRequireDefault(_callApi);
	
	var _apiRoots = __webpack_require__(9);
	
	var _apiRoots2 = _interopRequireDefault(_apiRoots);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function addCollection(data) {
	    return (0, _callApi2.default)(_apiRoots2.default.LOCAL + 'collections', { method: 'POST', data: data });
	}
	/**
	 * data: name, author, description, cover, content
	 */
	function addBook(data) {
	    return (0, _callApi2.default)(_apiRoots2.default.LOCAL + 'books', { method: 'POST', data: data });
	}
	/**
	 * data: name, slug, description
	 */
	function addAuthor(data) {
	    return (0, _callApi2.default)(_apiRoots2.default.LOCAL + 'authors', { method: 'POST', data: data });
	}
	function searchAuthors(query) {
	    return (0, _callApi2.default)(_apiRoots2.default.LOCAL + 'authors?q=' + query);
	}
	function searchBooks(query) {
	    return (0, _callApi2.default)(_apiRoots2.default.LOCAL + 'books?q=' + query);
	}
	/**
	 * data: pageNo, pageSum, percentage
	 */
	function setProgress(bookId, data) {
	    (0, _callApi2.default)(_apiRoots2.default.LOCAL + 'books/' + bookId + '/progress', { method: 'POST', data: data });
	}
	function deleteBook(id) {
	    return (0, _callApi2.default)(_apiRoots2.default.LOCAL + 'books/' + id, {
	        method: 'DELETE'
	    });
	}
	exports.default = {
	    addCollection: addCollection,
	    addBook: addBook,
	    addAuthor: addAuthor,
	    searchBooks: searchBooks,
	    searchAuthors: searchAuthors,
	    setProgress: setProgress,
	    deleteBook: deleteBook
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(4))(673);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(8))(680);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Input = function (_Component) {
	    _inherits(Input, _Component);
	
	    function Input(props) {
	        _classCallCheck(this, Input);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, props));
	    }
	
	    _createClass(Input, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var className = this.props.className ? 'input-wrap ' + this.props.className : 'input-wrap';
	            var props = Object.assign({}, this.props);
	            delete props.className;
	            return _react2.default.createElement("div", { className: className }, _react2.default.createElement("input", { placeholder: this.props.placeholder, value: this.props.value, onChange: function onChange(e) {
	                    _this2.props.onChange(e);
	                }, type: this.props.type ? this.props.type : 'text', name: this.props.name ? this.props.name : null }));
	        }
	    }]);
	
	    return Input;
	}(_react.Component);
	
	exports.default = Input;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Textarea = function (_Component) {
	    _inherits(Textarea, _Component);
	
	    function Textarea(props) {
	        _classCallCheck(this, Textarea);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Textarea).call(this, props));
	    }
	
	    _createClass(Textarea, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var className = this.props.className ? 'textarea-wrap ' + this.props.className : 'textarea-wrap';
	            var props = Object.assign({}, this.props);
	            delete props.className;
	            return _react2.default.createElement("div", { className: className }, _react2.default.createElement("textarea", { placeholder: this.props.placeholder, value: this.props.value, onChange: function onChange(e) {
	                    _this2.props.onChange(e);
	                }, type: this.props.type ? this.props.type : 'text', name: this.props.name ? this.props.name : null }));
	        }
	    }]);
	
	    return Textarea;
	}(_react.Component);
	
	exports.default = Textarea;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _normalizr = __webpack_require__(19);
	
	var _humps = __webpack_require__(48);
	
	var _humps2 = _interopRequireDefault(_humps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function handleResponseJson(json, schema) {
	    json = _humps2.default.camelizeKeys(json);
	    var result = json;
	    if (typeof schema !== 'undefined') {
	        result = Object.assign({}, (0, _normalizr.normalize)(json, schema));
	    }
	    return result;
	}
	exports.default = handleResponseJson;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(4))(38);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(4))(593);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetchBookProgress = fetchBookProgress;
	exports.fetchBooks = fetchBooks;
	exports.fetchBook = fetchBook;
	exports.fetchCollections = fetchCollections;
	exports.fetchCollection = fetchCollection;
	
	var _schemas = __webpack_require__(16);
	
	function fetchBookProgress(bookId) {
	    return {
	        bookId: bookId,
	        CALL_API: {
	            types: ['BOOK_PROGRESS_REQUEST', 'BOOK_PROGRESS_SUCCESS', 'BOOK_PROGRESS_FAILURE'],
	            endpoint: 'books/' + bookId + '/progress',
	            schema: _schemas.Schemas.BOOK_PROGRESS
	        }
	    };
	}
	function fetchBooks() {
	    var flowType = arguments.length <= 0 || arguments[0] === undefined ? 'newest' : arguments[0];
	
	    return {
	        // for paginate
	        flowType: flowType,
	        CALL_API: {
	            types: ['BOOKS_REQUEST', 'BOOKS_SUCCESS', 'BOOKS_FAILURE'],
	            endpoint: 'books?exclude=content',
	            schema: _schemas.Schemas.BOOK_ARRAY
	        }
	    };
	}
	function fetchBook(bookId, fields) {
	    var endpoint = 'books/' + bookId;
	    if (fields) {
	        endpoint += '?fields=' + fields.join(',');
	    }
	    return {
	        bookId: bookId,
	        CALL_API: {
	            types: ['BOOK_REQUEST', 'BOOK_SUCCESS', 'BOOK_FAILURE'],
	            endpoint: endpoint,
	            schema: _schemas.Schemas.BOOK
	        }
	    };
	}
	function fetchCollections() {
	    var flowType = arguments.length <= 0 || arguments[0] === undefined ? 'newest' : arguments[0];
	
	    return {
	        flowType: flowType,
	        CALL_API: {
	            types: ['COLLECTIONS_REQUEST', 'COLLECTIONS_SUCCESS', 'COLLECTIONS_FAILURE'],
	            endpoint: 'collections',
	            schema: _schemas.Schemas.COLLECTION_ARRAY
	        }
	    };
	}
	function fetchCollection(collectionId) {
	    return {
	        collectionId: collectionId,
	        CALL_API: {
	            types: ['COLLECTION_REQUEST', 'COLLECTION_SUCCESS', 'COLLECTION_FAILURE'],
	            endpoint: 'collections/' + collectionId,
	            schema: _schemas.Schemas.COLLECTION
	        }
	    };
	}
	// export function fetchBookContent(bookId) {
	//   return {
	//     bookId,
	//     CALL_API: {
	//       types: ['BOOK_CONTENT_REQUEST', 'BOOK_CONTENT_SUCCESS', 'BOOK_CONTENT_FAILURE'],
	//       endpoint: `books/${bookId}/content`,
	//       schema: Schemas.BOOK
	//     }
	//   }
	// }
	//
	// export function fetchBookInfo(bookId) {
	//   return {
	//     bookId,
	//     CALL_API:{
	//       types: ['BOOK_INFO_REQUEST', 'BOOK_INFO_SUCCESS', 'BOOK_INFO_FAILURE'],
	//       endpoint: `books/${bookId}`,
	//       schema: Schemas.BOOK_ARRAY
	//     }
	//   }
	// }
	// export function fetchDoubanBookSearchResults(query) {
	//   return {
	//     query,
	//     CALL_API: {
	//       types: ['DOUBAN_BOOK_SEARCH_REQUEST', 'DOUBAN_BOOK_SEARCH_SUCCESS', 'DOUBAN_BOOK_SEARCH_FAILURE'],
	//       endpoint: `search?count=5&q=${query}`,
	//       apiUrl: ApiRoots.DOUBAN_BOOKS,
	//       schema: Schemas.DOUBAN_BOOK_SEARCH_RESULTS,
	//       extendedOptions: { useJsonp: true }
	//     }
	//   }
	// }
	// export function searchBooks(query) {
	//   return {
	//     query,
	//     CALL_API: {
	//       types: ['BOOK_SEARCH_REQUEST', 'BOOK_SEARCH_SUCCESS', 'BOOK_SEARCH_FAILURE'],
	//       endpoint: `search?q=${query}`,
	//       apiUrl: ApiRoots.LOCAL,
	//       schema: Schemas.MATCHED_BOOK_ARRAY
	//     }
	//   }
	// }

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.sendNotification = sendNotification;
	exports.showNotification = showNotification;
	exports.hideNotification = hideNotification;
	function sendNotification(message) {
	    var msgType = arguments.length <= 1 || arguments[1] === undefined ? 'success' : arguments[1];
	    var t = arguments.length <= 2 || arguments[2] === undefined ? 5000 : arguments[2];
	
	    return function (dispatch, getState) {
	        var id = Math.random().toFixed(8).substr(2);
	        dispatch(showNotification(id, message, msgType));
	        setTimeout(function () {
	            dispatch(hideNotification(id));
	        }, t);
	    };
	}
	var SHOW_NOTIFICATION = exports.SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
	function showNotification(id, message) {
	    var msgType = arguments.length <= 2 || arguments[2] === undefined ? 'success' : arguments[2];
	
	    return {
	        type: SHOW_NOTIFICATION,
	        message: message,
	        msgType: msgType,
	        id: id
	    };
	}
	var HIDE_NOTIFICATION = exports.HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';
	function hideNotification(id) {
	    return {
	        type: HIDE_NOTIFICATION,
	        id: id
	    };
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.userAuth = userAuth;
	exports.fetchProfile = fetchProfile;
	exports.fetchUserList = fetchUserList;
	exports.fetchShelf = fetchShelf;
	
	var _index = __webpack_require__(16);
	
	function userAuth() {
	    return {
	        CALL_API: {
	            types: ['USER_AUTH_REQUEST', 'USER_AUTH_SUCCESS', 'USER_AUTH_FAILURE'],
	            endpoint: 'auth'
	        }
	    };
	}
	function fetchProfile(id) {
	    return {
	        CALL_API: {
	            types: ['PROFILE_REQUEST', 'PROFILE_SUCCESS', 'PROFILE_FAILURE'],
	            endpoint: 'users/' + id + '/profile',
	            schema: _index.Schemas.PROFILE
	        }
	    };
	}
	function fetchUserList() {
	    return {
	        CALL_API: {
	            types: ['USER_LIST_REQUEST', 'USER_LIST_SUCCESS', 'USER_LIST_FAILURE'],
	            endpoint: 'users',
	            schema: _index.Schemas.USER_ARRAY
	        }
	    };
	}
	// export function fetchShelf(userId) {
	//   return {
	//     userId,
	//     CALL_API: {
	//       types: ['SHELF_REQUEST', 'SHELF_SUCCESS', 'SHELF_FAILURE'],
	//       endpoint: `users/${userId}/shelf`,
	//       schema: Schemas.BOOK_ARRAY,
	//     }
	//   }
	// }
	function fetchShelf() {
	    return {
	        payload: 'bookShelf',
	        CALL_API: {
	            types: ['SHELF_REQUEST', 'SHELF_SUCCESS', 'SHELF_FAILURE'],
	            endpoint: 'user/books/shelf'
	        }
	    };
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(5);
	
	var _layout = __webpack_require__(50);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Branding = function (_Component) {
	    _inherits(Branding, _Component);
	
	    function Branding(props) {
	        _classCallCheck(this, Branding);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Branding).call(this, props));
	
	        _this.state = {
	            isDropdownMenuVisible: false
	        };
	        return _this;
	    }
	
	    _createClass(Branding, [{
	        key: 'toggleDropdownMenu',
	        value: function toggleDropdownMenu() {
	            this.setState({
	                isDropdownMenuVisible: !this.state.isDropdownMenuVisible
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var username = this.props.username;
	            var isAdmin = this.props.isAdmin ? this.props.isAdmin : false;
	            return _react2.default.createElement("div", { className: 'branding ' + (this.props.className ? this.props.className : '') }, _react2.default.createElement(_layout.Container, { className: "clearfix" }, _react2.default.createElement("div", null, _react2.default.createElement("h1", { className: "logo left" }, _react2.default.createElement(_reactRouter.Link, { to: "/" }, "readr")), _react2.default.createElement("div", { className: "nav left" }, _react2.default.createElement("ul", { className: "nav-links" }, _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: "/browse" }, "浏览")), _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: "/collections" }, "书单")))), username ? _react2.default.createElement("div", { onMouseLeave: this.toggleDropdownMenu.bind(this), onMouseEnter: this.toggleDropdownMenu.bind(this), className: "nav right" }, _react2.default.createElement("span", { className: "recent-reading" }, "最近阅读"), _react2.default.createElement("span", { className: "username" }, username, isAdmin ? _react2.default.createElement("span", { className: "badge-dark" }, "Admin") : null), this.state.isDropdownMenuVisible ? _react2.default.createElement("ul", { onClick: this.toggleDropdownMenu.bind(this), className: "dropdown-menu" }, isAdmin === true ? _react2.default.createElement("li", null, _react2.default.createElement("a", { href: "/console" }, "控制台")) : null, _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: '/shelf' }, "书架")), _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: '/profile' }, "个人主页")), _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: '/settings' }, "设置")), _react2.default.createElement("li", null, _react2.default.createElement("a", { href: '/logout' }, "退出"))) : null) : _react2.default.createElement("div", { className: "nav right" }, _react2.default.createElement("ul", { className: "nav-links" }, _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: "/signin" }, "登录")), _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: "/signup" }, "注册")))))));
	        }
	    }]);
	
	    return Branding;
	}(_react.Component);
	
	exports.default = Branding;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NoMatch = function (_Component) {
	    _inherits(NoMatch, _Component);
	
	    function NoMatch() {
	        _classCallCheck(this, NoMatch);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(NoMatch).apply(this, arguments));
	    }
	
	    _createClass(NoMatch, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement("h1", null, "404");
	        }
	    }]);
	
	    return NoMatch;
	}(_react.Component);
	
	exports.default = NoMatch;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _icon = __webpack_require__(11);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Notification = function (_Component) {
	    _inherits(Notification, _Component);
	
	    function Notification() {
	        _classCallCheck(this, Notification);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Notification).apply(this, arguments));
	    }
	
	    _createClass(Notification, [{
	        key: 'render',
	        value: function render() {
	            var type = this.props.type ? this.props.type : 'success';
	            return _react2.default.createElement("div", null, this.props.visible && _react2.default.createElement("div", { className: ('notification notification--' + type + ' z1').trim() }, _react2.default.createElement(_icon2.default, { onClick: this.props.onRequestClose, name: "close" }), this.props.message));
	        }
	    }]);
	
	    return Notification;
	}(_react.Component);
	
	exports.default = Notification;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(24);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Fade = function (_Component) {
	    _inherits(Fade, _Component);
	
	    function Fade(props) {
	        _classCallCheck(this, Fade);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Fade).call(this, props));
	    }
	
	    _createClass(Fade, [{
	        key: 'render',
	        value: function render() {
	            // let className = this.props.className?this.props.className:null
	            return _react2.default.createElement(_reactAddonsCssTransitionGroup2.default, { component: "div", transitionName: "fade", transitionEnterTimeout: 300, transitionLeaveTimeout: 300 }, this.props.children);
	        }
	    }]);
	
	    return Fade;
	}(_react.Component);
	
	exports.default = Fade;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Button = function (_Component) {
	    _inherits(Button, _Component);
	
	    function Button(props) {
	        _classCallCheck(this, Button);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, props));
	    }
	
	    _createClass(Button, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var className = this.props.className ? 'btn ' + this.props.className : 'btn';
	            var size = this.props.size ? this.props.size : 'medium';
	            var isFluid = this.props.isFluid ? this.props.isFluid : false;
	            var color = this.props.color ? this.props.color : null;
	            var onClick = void 0;
	            if (size === 'small') {
	                className += ' btn-small';
	            } else if (size === 'large') {
	                className += ' btn-large';
	            } else if (size === 'medium') {
	                className += ' btn-medium';
	            } else {
	                console.error('Unsupport size!');
	            }
	            if (color) {
	                className += ' btn-' + color;
	            }
	            if (isFluid) {
	                className = className + ' btn-fluid';
	            }
	            if (this.props.to) {
	                onClick = function onClick(e) {
	                    e.preventDefault();
	                    _reactRouter.browserHistory.push(_this2.props.to);
	                };
	            } else {
	                onClick = function onClick(e) {
	                    e.preventDefault();
	                    if (_this2.props.onClick) {
	                        _this2.props.onClick(e);
	                    }
	                };
	            }
	            var props = Object.assign({}, this.props, { className: className }, { onClick: onClick });
	            delete props.to;
	            delete props.color;
	            delete props.size;
	            delete props.isFluid;
	            return _react2.default.createElement('button', props, this.props.children);
	        }
	    }]);
	
	    return Button;
	}(_react.Component);
	
	exports.default = Button;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _button = __webpack_require__(32);
	
	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _button2.default;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _icon = __webpack_require__(11);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	        key: 'addValue',
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
	        key: 'removeValue',
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
	        key: 'clearInputValue',
	        value: function clearInputValue() {
	            this.props.onInputChange('');
	        }
	    }, {
	        key: 'handleKeyPress',
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
	        key: 'focusInput',
	        value: function focusInput() {
	            this.input.focus();
	        }
	    }, {
	        key: 'hideOptions',
	        value: function hideOptions() {
	            this.setState({
	                showOptions: false
	            });
	        }
	    }, {
	        key: 'showOptions',
	        value: function showOptions(e) {
	            e.stopPropagation();
	            this.setState({
	                showOptions: true
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            window.addEventListener('click', this.hideOptions);
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            window.removeEventListener('click', this.hideOptions);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var label = this.props.label ? this.props.label : null;
	            var value = this.props.value ? this.props.value : '';
	            var values = this.props.values;
	            var options = this.props.options ? this.props.options : [];
	            var inputWidth = values.length > 0 ? value.length === 0 ? 16 : value.length * 16 : '100%';
	            var placeholder = values.length > 0 ? '' : this.props.placeholder;
	            var className = 'selectize-input' + (this.state.focus === true ? ' focus' : '') + (values.length === 0 ? ' empty' : '');
	            var addNewValue = this.props.addNewValue ? this.props.addNewValue : undefined;
	            return _react2.default.createElement("div", { className: ('selectize-input-wrap ' + (this.props.className ? this.props.className : '')).trim() }, label ? _react2.default.createElement("label", { className: "form-label" }, label) : null, _react2.default.createElement("div", { className: className, onClick: function onClick(e) {
	                    _this2.focusInput();
	                    _this2.showOptions(e);
	                } }, values.map(function (v, index) {
	                return _react2.default.createElement("span", { key: index, className: "selectize-tag" }, v.name, _react2.default.createElement(_icon2.default, { size: 'small', name: "close", onClick: function onClick(e) {
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
	                } })), this.state.showOptions ? _react2.default.createElement("ul", { className: "selectize-query-results" }, options.map(function (option, index) {
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
	
	exports.default = SelectizeInput;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Switcher = function (_Component) {
	    _inherits(Switcher, _Component);
	
	    function Switcher(props) {
	        _classCallCheck(this, Switcher);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Switcher).call(this, props));
	    }
	
	    _createClass(Switcher, [{
	        key: 'render',
	        value: function render() {
	            var className = this.props.on ? 'on' : 'off';
	            className = className + ' switcher';
	            return _react2.default.createElement("div", { className: className }, _react2.default.createElement("div", { className: "switcher-button" }), _react2.default.createElement("div", { className: "switcher-track" }));
	        }
	    }]);
	
	    return Switcher;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)()(Switcher);

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _callApi = __webpack_require__(13);
	
	var _callApi2 = _interopRequireDefault(_callApi);
	
	var _apiRoots = __webpack_require__(9);
	
	var _apiRoots2 = _interopRequireDefault(_apiRoots);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (store) {
	    return function (next) {
	        return function (action) {
	            var CALL_API = action.CALL_API;
	            if (typeof CALL_API === 'undefined') {
	                return next(action);
	            }
	            var endpoint = CALL_API.endpoint;
	            var apiUrl = CALL_API.apiUrl;
	            var extendedOptions = CALL_API.extendedOptions;
	            var types = CALL_API.types;
	            var schema = CALL_API.schema;
	
	            var _types = _slicedToArray(types, 3);
	
	            var requestType = _types[0];
	            var successType = _types[1];
	            var failureType = _types[2];
	
	            function actionWith(data) {
	                var finalAction = Object.assign({}, action, data);
	                delete finalAction.CALL_API;
	                return finalAction;
	            }
	            next(actionWith({ type: requestType }));
	            if (typeof endpoint === 'function') {
	                endpoint = endpoint(store.getState());
	            }
	            if (typeof apiUrl === 'undefined') {
	                apiUrl = _apiRoots2.default.LOCAL;
	            }
	            var fullUrl = apiUrl + endpoint;
	            var options = { schema: schema };
	            if (typeof extendedOptions !== 'undefined') {
	                options = Object.assign({}, options, extendedOptions);
	            }
	            return (0, _callApi2.default)(fullUrl, options).then(function (response) {
	                return next(actionWith({
	                    response: response,
	                    type: successType
	                }));
	            }, function (error) {
	                return next(actionWith({
	                    type: failureType,
	                    error: error.message || 'Oops!'
	                }));
	            });
	        };
	    };
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (store) {
	    return function (next) {
	        return function (action) {
	            switch (action.type) {
	                case 'DOUBAN_BOOK_SEARCH_SUCCESS':
	                    // TODO: can be fixed in normalizr?
	                    action.response.result = action.response.result.books;
	                    break;
	                default:
	                    break;
	            }
	            next(action);
	        };
	    };
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _redux = __webpack_require__(14);
	
	var _reactRouterRedux = __webpack_require__(18);
	
	var _notifications = __webpack_require__(39);
	
	var _notifications2 = _interopRequireDefault(_notifications);
	
	var _paginate = __webpack_require__(40);
	
	var _paginate2 = _interopRequireDefault(_paginate);
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	// Updates an entity cache in response to any action with response.entities.
	function entities() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? { books: {}, users: {}, bookCollections: {} } : arguments[0];
	    var action = arguments[1];
	
	    if (action.response && action.response.entities) {
	        return _lodash2.default.merge({}, state, action.response.entities);
	    }
	    return state;
	}
	function payloads() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    if (action.error && action.payload) {
	        return _lodash2.default.assign({}, state, _defineProperty({}, action.payload, {
	            error: action.error
	        }));
	    }
	    if (action.response && action.payload) {
	        return _lodash2.default.assign({}, state, _defineProperty({}, action.payload, {
	            data: action.response
	        }));
	    }
	    return state;
	}
	// Updates error message to notify about the failed fetches.
	function errorMessage() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	    var action = arguments[1];
	    var type = action.type;
	    var error = action.error;
	    // if (type === ActionTypes.RESET_ERROR_MESSAGE) {
	    //   return null
	    // }
	
	    if (error) {
	        return action.error;
	    }
	    return state;
	}
	function session() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? { user: { role: 'visitor' } } : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case 'USER_AUTH_REQUEST':
	            return Object.assign({}, state, {
	                isFetching: true
	            });
	        case 'USER_AUTH_SUCCESS':
	            return Object.assign({}, state, {
	                isFetching: false,
	                user: action.response
	            });
	        case 'USER_AUTH_FAILURE':
	            return Object.assign({}, state, {
	                isFetching: false,
	                user: action.response
	            });
	        default:
	            return state;
	    }
	}
	// Updates the pagination data for different actions.
	var pagination = (0, _redux.combineReducers)({
	    // bookList: paginate({
	    //   mapActionToKey: action => action.filter,
	    //   types: ['BOOK_LIST_REQUEST', 'BOOK_LIST_SUCCESS', 'BOOK_LIST_FAILURE']
	    // }),
	    books: (0, _paginate2.default)({
	        mapActionToKey: function mapActionToKey(action) {
	            return action.flowType;
	        },
	        types: ['BOOKS_REQUEST', 'BOOKS_SUCCESS', 'BOOKS_FAILURE']
	    }),
	    bookCollections: (0, _paginate2.default)({
	        mapActionToKey: function mapActionToKey(action) {
	            return action.flowType;
	        },
	        types: ['COLLECTIONS_REQUEST', 'COLLECTIONS_SUCCESS', 'COLLECTIONS_FAILURE']
	    }),
	    // shelf: paginate({
	    //   mapActionToKey: action => action.userId,
	    //   types: ['SHELF_REQUEST', 'SHELF_SUCCESS', 'SHELF_FAILURE']
	    // }),
	    userList: (0, _paginate2.default)({
	        // TODO
	        mapActionToKey: function mapActionToKey(action) {
	            return 'all';
	        },
	        types: ['USER_LIST_REQUEST', 'USER_LIST_SUCCESS', 'USER_LIST_FAILURE']
	    }),
	    doubanBookSearchResults: (0, _paginate2.default)({
	        mapActionToKey: function mapActionToKey(action) {
	            return action.query;
	        },
	        types: ['DOUBAN_BOOK_SEARCH_REQUEST', 'DOUBAN_BOOK_SEARCH_SUCCESS', 'DOUBAN_BOOK_SEARCH_FAILURE']
	    }),
	    bookSearchResults: (0, _paginate2.default)({
	        mapActionToKey: function mapActionToKey(action) {
	            return action.query;
	        },
	        types: ['BOOK_SEARCH_REQUEST', 'BOOK_SEARCH_SUCCESS', 'BOOK_SEARCH_FAILURE']
	    })
	});
	function elements() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    if (action.type === 'CHANGE_VALUE') {
	        // lodash#merge 不支持 Symbol
	        return Object.assign({}, state, _defineProperty({}, action.name, Object.assign({}, state[action.name], {
	            value: action.value
	        })));
	    }
	    if (action.type === 'UPDATE_ELEMENT') {
	        return Object.assign({}, state, _defineProperty({}, action.name, Object.assign({}, state[action.name], action.data)));
	    }
	    return state;
	}
	var components = (0, _redux.combineReducers)({
	    notifications: _notifications2.default
	});
	var rootReducer = (0, _redux.combineReducers)({
	    payloads: payloads,
	    components: components,
	    elements: elements,
	    routing: _reactRouterRedux.routerReducer,
	    entities: entities,
	    errorMessage: errorMessage,
	    pagination: pagination,
	    session: session
	});
	exports.default = rootReducer;

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = notifications;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function notifications() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var action = arguments[1];
	
	    if (action.type === 'HIDE_NOTIFICATION') {
	        return state.map(function (n) {
	            return n.id === action.id ? Object.assign({}, n, { visible: false }) : n;
	        });
	    }
	    if (action.type === 'SHOW_NOTIFICATION') {
	        return [].concat(_toConsumableArray(state), [{
	            visible: true,
	            message: action.message,
	            type: action.msgType,
	            id: action.id
	        }]);
	    }
	    return state;
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = paginate;
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	// Creates a reducer managing pagination, given the action types to handle,
	// and a function telling how to extract the key from an action.
	// todo: types length should be 3
	function paginate(_ref) {
	    var types = _ref.types;
	    var mapActionToKey = _ref.mapActionToKey;
	
	    var _types = _slicedToArray(types, 3);
	
	    var requestType = _types[0];
	    var successType = _types[1];
	    var failureType = _types[2];
	
	    function updatePagination() {
	        var state = arguments.length <= 0 || arguments[0] === undefined ? {
	            isFetching: false,
	            nextPageUrl: null,
	            pageCount: 0,
	            ids: []
	        } : arguments[0];
	        var action = arguments[1];
	
	        switch (action.type) {
	            case requestType:
	                return Object.assign({}, state, {
	                    isFetching: true
	                });
	            case successType:
	                return Object.assign({}, state, {
	                    isFetching: false,
	                    ids: _lodash2.default.union(state.ids, action.response.result),
	                    // 不使用 union 会导致 server rendering 问题？
	                    // ids: action.response.result,
	                    nextPageUrl: action.response.nextPageUrl,
	                    pageCount: state.pageCount + 1
	                });
	            case failureType:
	                return Object.assign({}, state, {
	                    isFetching: false
	                });
	            default:
	                return state;
	        }
	    }
	    return function updatePaginationByKey() {
	        var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	        var action = arguments[1];
	
	        switch (action.type) {
	            case requestType:
	            case successType:
	            case failureType:
	                var key = mapActionToKey(action);
	                if (typeof key !== 'string') {
	                    throw new Error('Expected key to be a string.');
	                }
	                var res = Object.assign({}, state, _defineProperty({}, key, updatePagination(state[key], action)));
	                return res;
	            default:
	                return state;
	        }
	    };
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configureStore;
	
	var _redux = __webpack_require__(14);
	
	var _reduxThunk = __webpack_require__(46);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reducers = __webpack_require__(38);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _api = __webpack_require__(36);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _modifyResponse = __webpack_require__(37);
	
	var _modifyResponse2 = _interopRequireDefault(_modifyResponse);
	
	var _handleInitialState = __webpack_require__(42);
	
	var _handleInitialState2 = _interopRequireDefault(_handleInitialState);
	
	var _reduxLogger = __webpack_require__(45);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var env = ("development");
	function configureStore() {
	    var store = void 0;
	    // if(module.hot) {
	    //   module.hot.accept('../reducers', () => {
	    //     const nextRootReducer = require('../reducers').default
	    //     store.replaceReducer(nextRootReducer)
	    //   })
	    // }
	    // server side
	    if (typeof window === 'undefined') {
	        store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default, _api2.default, _modifyResponse2.default));
	        return store;
	    }
	    if (env === 'production') {
	        store = (0, _redux.createStore)(_reducers2.default, (0, _handleInitialState2.default)(), (0, _redux.applyMiddleware)(_reduxThunk2.default, _api2.default, _modifyResponse2.default));
	    } else {
	        store = (0, _redux.createStore)(_reducers2.default, (0, _handleInitialState2.default)(), (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, _api2.default, _modifyResponse2.default, (0, _reduxLogger2.default)({ collapsed: true }))));
	    }
	    return store;
	}

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function handleInitialState() {
	    var initialState = void 0;
	    if (typeof window.__INITIAL_STATE__ !== 'undefined') {
	        initialState = window.__INITIAL_STATE__;
	    }
	    return initialState;
	}
	exports.default = handleInitialState;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.default = objectToUrlencoded;
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function objectToUrlencoded(originalObj) {
	    var object = _lodash2.default.cloneDeep(originalObj);
	    var encodedurl = '';
	    for (var prop in object) {
	        if (_typeof(object[prop]) === 'object') {
	            object[prop] = object[prop].toString();
	        }
	        encodedurl = '' + encodedurl + prop + '=' + object[prop] + '&';
	    }
	    return encodedurl.substr(0, encodedurl.length - 1);
	}

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getBookView = getBookView;
	exports.lockScroll = lockScroll;
	exports.unlockScroll = unlockScroll;
	function getBookView() {
	    var aspectRatio = 7 / 9;
	    if (window.innerWidth <= 540) {
	        return {
	            screen: 'phone',
	            pageWidth: window.innerWidth,
	            pageHeight: window.innerWidth / aspectRatio
	        };
	    } else {
	        return {
	            screen: 'hd',
	            pageWidth: 700,
	            pageHeight: 700 / aspectRatio
	        };
	    }
	}
	function lockScroll() {
	    document.body.style.overflow = 'hidden';
	}
	function unlockScroll() {
	    document.body.style.overflow = 'visible';
	}
	exports.default = {
	    getBookView: getBookView,
	    lockScroll: lockScroll,
	    unlockScroll: unlockScroll
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var repeat = function repeat(str, times) {
	  return new Array(times + 1).join(str);
	};
	var pad = function pad(num, maxLength) {
	  return repeat("0", maxLength - num.toString().length) + num;
	};
	var formatTime = function formatTime(time) {
	  return "@ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
	};
	
	// Use the new performance api to get better precision if available
	var timer = typeof performance !== "undefined" && typeof performance.now === "function" ? performance : Date;
	
	/**
	 * parse the level option of createLogger
	 *
	 * @property {string | function | object} level - console[level]
	 * @property {object} action
	 * @property {array} payload
	 * @property {string} type
	 */
	
	function getLogLevel(level, action, payload, type) {
	  switch (typeof level === "undefined" ? "undefined" : _typeof(level)) {
	    case "object":
	      return typeof level[type] === "function" ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
	    case "function":
	      return level(action);
	    default:
	      return level;
	  }
	}
	
	/**
	 * Creates logger with followed options
	 *
	 * @namespace
	 * @property {object} options - options for logger
	 * @property {string | function | object} options.level - console[level]
	 * @property {boolean} options.duration - print duration of each action?
	 * @property {boolean} options.timestamp - print timestamp with each action?
	 * @property {object} options.colors - custom colors
	 * @property {object} options.logger - implementation of the `console` API
	 * @property {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
	 * @property {boolean} options.collapsed - is group collapsed?
	 * @property {boolean} options.predicate - condition which resolves logger behavior
	 * @property {function} options.stateTransformer - transform state before print
	 * @property {function} options.actionTransformer - transform action before print
	 * @property {function} options.errorTransformer - transform error before print
	 */
	
	function createLogger() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var _options$level = options.level;
	  var level = _options$level === undefined ? "log" : _options$level;
	  var _options$logger = options.logger;
	  var logger = _options$logger === undefined ? console : _options$logger;
	  var _options$logErrors = options.logErrors;
	  var logErrors = _options$logErrors === undefined ? true : _options$logErrors;
	  var collapsed = options.collapsed;
	  var predicate = options.predicate;
	  var _options$duration = options.duration;
	  var duration = _options$duration === undefined ? false : _options$duration;
	  var _options$timestamp = options.timestamp;
	  var timestamp = _options$timestamp === undefined ? true : _options$timestamp;
	  var transformer = options.transformer;
	  var _options$stateTransfo = options.stateTransformer;
	  var // deprecated
	  stateTransformer = _options$stateTransfo === undefined ? function (state) {
	    return state;
	  } : _options$stateTransfo;
	  var _options$actionTransf = options.actionTransformer;
	  var actionTransformer = _options$actionTransf === undefined ? function (actn) {
	    return actn;
	  } : _options$actionTransf;
	  var _options$errorTransfo = options.errorTransformer;
	  var errorTransformer = _options$errorTransfo === undefined ? function (error) {
	    return error;
	  } : _options$errorTransfo;
	  var _options$colors = options.colors;
	  var colors = _options$colors === undefined ? {
	    title: function title() {
	      return "#000000";
	    },
	    prevState: function prevState() {
	      return "#9E9E9E";
	    },
	    action: function action() {
	      return "#03A9F4";
	    },
	    nextState: function nextState() {
	      return "#4CAF50";
	    },
	    error: function error() {
	      return "#F20404";
	    }
	  } : _options$colors;
	
	  // exit if console undefined
	
	  if (typeof logger === "undefined") {
	    return function () {
	      return function (next) {
	        return function (action) {
	          return next(action);
	        };
	      };
	    };
	  }
	
	  if (transformer) {
	    console.error("Option 'transformer' is deprecated, use stateTransformer instead");
	  }
	
	  var logBuffer = [];
	  function printBuffer() {
	    logBuffer.forEach(function (logEntry, key) {
	      var started = logEntry.started;
	      var startedTime = logEntry.startedTime;
	      var action = logEntry.action;
	      var prevState = logEntry.prevState;
	      var error = logEntry.error;
	      var took = logEntry.took;
	      var nextState = logEntry.nextState;
	
	      var nextEntry = logBuffer[key + 1];
	      if (nextEntry) {
	        nextState = nextEntry.prevState;
	        took = nextEntry.started - started;
	      }
	      // message
	      var formattedAction = actionTransformer(action);
	      var isCollapsed = typeof collapsed === "function" ? collapsed(function () {
	        return nextState;
	      }, action) : collapsed;
	
	      var formattedTime = formatTime(startedTime);
	      var titleCSS = colors.title ? "color: " + colors.title(formattedAction) + ";" : null;
	      var title = "action " + (timestamp ? formattedTime : "") + " " + formattedAction.type + " " + (duration ? "(in " + took.toFixed(2) + " ms)" : "");
	
	      // render
	      try {
	        if (isCollapsed) {
	          if (colors.title) logger.groupCollapsed("%c " + title, titleCSS);else logger.groupCollapsed(title);
	        } else {
	          if (colors.title) logger.group("%c " + title, titleCSS);else logger.group(title);
	        }
	      } catch (e) {
	        logger.log(title);
	      }
	
	      var prevStateLevel = getLogLevel(level, formattedAction, [prevState], "prevState");
	      var actionLevel = getLogLevel(level, formattedAction, [formattedAction], "action");
	      var errorLevel = getLogLevel(level, formattedAction, [error, prevState], "error");
	      var nextStateLevel = getLogLevel(level, formattedAction, [nextState], "nextState");
	
	      if (prevStateLevel) {
	        if (colors.prevState) logger[prevStateLevel]("%c prev state", "color: " + colors.prevState(prevState) + "; font-weight: bold", prevState);else logger[prevStateLevel]("prev state", prevState);
	      }
	
	      if (actionLevel) {
	        if (colors.action) logger[actionLevel]("%c action", "color: " + colors.action(formattedAction) + "; font-weight: bold", formattedAction);else logger[actionLevel]("action", formattedAction);
	      }
	
	      if (error && errorLevel) {
	        if (colors.error) logger[errorLevel]("%c error", "color: " + colors.error(error, prevState) + "; font-weight: bold", error);else logger[errorLevel]("error", error);
	      }
	
	      if (nextStateLevel) {
	        if (colors.nextState) logger[nextStateLevel]("%c next state", "color: " + colors.nextState(nextState) + "; font-weight: bold", nextState);else logger[nextStateLevel]("next state", nextState);
	      }
	
	      try {
	        logger.groupEnd();
	      } catch (e) {
	        logger.log("—— log end ——");
	      }
	    });
	    logBuffer.length = 0;
	  }
	
	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        // exit early if predicate function returns false
	        if (typeof predicate === "function" && !predicate(getState, action)) {
	          return next(action);
	        }
	
	        var logEntry = {};
	        logBuffer.push(logEntry);
	
	        logEntry.started = timer.now();
	        logEntry.startedTime = new Date();
	        logEntry.prevState = stateTransformer(getState());
	        logEntry.action = action;
	
	        var returnedValue = undefined;
	        if (logErrors) {
	          try {
	            returnedValue = next(action);
	          } catch (e) {
	            logEntry.error = errorTransformer(e);
	          }
	        } else {
	          returnedValue = next(action);
	        }
	
	        logEntry.took = timer.now() - logEntry.started;
	        logEntry.nextState = stateTransformer(getState());
	
	        printBuffer();
	
	        if (logEntry.error) throw logEntry.error;
	        return returnedValue;
	      };
	    };
	  };
	}
	
	module.exports = createLogger;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(4))(657);

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(4))(670);

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(8))(752);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(8))(753);

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Container = undefined;
	
	var _container = __webpack_require__(12);
	
	var _container2 = _interopRequireDefault(_container);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Container = _container2.default;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Loading = function (_Component) {
	    _inherits(Loading, _Component);
	
	    function Loading() {
	        _classCallCheck(this, Loading);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Loading).apply(this, arguments));
	    }
	
	    _createClass(Loading, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement("div", { className: "loading-wrap" }, _react2.default.createElement("span", { className: "icon icon-loading" }));
	        }
	    }]);
	
	    return Loading;
	}(_react.Component);
	
	exports.default = Loading;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NavTab = function (_Component) {
	    _inherits(NavTab, _Component);
	
	    function NavTab(props) {
	        _classCallCheck(this, NavTab);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(NavTab).call(this, props));
	    }
	
	    _createClass(NavTab, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            return _react2.default.createElement("div", { className: "nav-tab" }, _react2.default.createElement("ul", null, this.props.tabs.map(function (tab, index) {
	                var className = null;
	                if (index === _this2.props.current) {
	                    className = 'current';
	                }
	                return _react2.default.createElement("li", { className: className, key: index }, tab);
	            })));
	        }
	    }]);
	
	    return NavTab;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)()(NavTab);

/***/ },
/* 53 */,
/* 54 */,
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(4))(658);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _container = __webpack_require__(12);
	
	var _container2 = _interopRequireDefault(_container);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Colophon = function (_Component) {
	    _inherits(Colophon, _Component);
	
	    function Colophon() {
	        _classCallCheck(this, Colophon);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Colophon).apply(this, arguments));
	    }
	
	    _createClass(Colophon, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement("div", { className: "colophon" }, _react2.default.createElement(_container2.default, null, _react2.default.createElement("p", null, "© 2015－2016 readrweb.com, all rights reserved")));
	        }
	    }]);
	
	    return Colophon;
	}(_react.Component);
	
	exports.default = Colophon;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _form = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BookInfoPopup = function (_Component) {
	    _inherits(BookInfoPopup, _Component);
	
	    function BookInfoPopup(props) {
	        _classCallCheck(this, BookInfoPopup);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(BookInfoPopup).call(this, props));
	    }
	
	    _createClass(BookInfoPopup, [{
	        key: 'render',
	        value: function render() {
	            var author = this.props.author;
	            var title = this.props.title;
	            var description = this.props.description;
	            var bookId = this.props.bookId;
	            return _react2.default.createElement("div", { className: "book-info-popup popup" }, _react2.default.createElement("h2", { className: "title" }, title), _react2.default.createElement("p", { className: "author" }, author), _react2.default.createElement(_form.Button, { color: "blue", to: '/viewer/book/' + bookId }, "阅读"), _react2.default.createElement("div", { className: "description" }, _react2.default.createElement("p", null, description)));
	        }
	    }]);
	
	    return BookInfoPopup;
	}(_react.Component);
	
	exports.default = BookInfoPopup;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _book = __webpack_require__(61);
	
	var _book2 = _interopRequireDefault(_book);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BookList = function (_Component) {
	    _inherits(BookList, _Component);
	
	    function BookList() {
	        _classCallCheck(this, BookList);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(BookList).apply(this, arguments));
	    }
	
	    _createClass(BookList, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement("ul", { className: "book-list clearfix" }, this.props.bookEntities ? this.props.bookEntities.map(function (book, index) {
	                var title = book.title;
	                var author = book.author;
	                var description = book.description;
	                var cover = book.cover;
	
	                return _react2.default.createElement(_book2.default, { id: book.id, key: index, title: title, author: author.map(function (a) {
	                        return a.refData ? a.refData.name : '';
	                    }).join(', '), description: description, cover: cover });
	            }) : null);
	        }
	    }]);
	
	    return BookList;
	}(_react.Component);
	
	exports.default = BookList;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _bookPage = __webpack_require__(60);
	
	var _bookPage2 = _interopRequireDefault(_bookPage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BookPageList = function (_Component) {
	    _inherits(BookPageList, _Component);
	
	    function BookPageList() {
	        _classCallCheck(this, BookPageList);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(BookPageList).apply(this, arguments));
	    }
	
	    _createClass(BookPageList, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            // let style = styles.BOOK_HD_STYLE
	            // if(this.props.view.mode === "MOBILE") {
	            //   style = styles.BOOK_MOBILE_STYLE
	            // }
	            // if(!this.props.isCalculated) {
	            //   style.height = "100%"
	            // }
	            return _react2.default.createElement("ul", { className: "pages", style: { height: this.props.height } }, this.props.pages.map(function (page, index) {
	                if (page.type === "page") {
	                    // style = Object.assign({}, style, page.props.style)
	                    return _react2.default.createElement(_bookPage2.default, { style: page.props.style, bookId: _this2.props.bookId, key: index, page: page });
	                } else {
	                    console.error("Not type page!");
	                }
	            }));
	        }
	    }]);
	
	    return BookPageList;
	}(_react.Component);
	
	exports.default = BookPageList;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
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
	
	var BookPage = function (_Component) {
	    _inherits(BookPage, _Component);
	
	    function BookPage() {
	        _classCallCheck(this, BookPage);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(BookPage).apply(this, arguments));
	    }
	
	    _createClass(BookPage, [{
	        key: "render",
	        value: function render() {
	            var page = this.props.page;
	            var style = this.props.style;
	            return _react2.default.createElement("li", { style: style }, _react2.default.createElement("div", { className: "content" }, page.props.children.map(function (node, index) {
	                if (node.type !== "p") {
	                    console.error("Unsupported content found!");
	                }
	                return _react2.default.createElement("p", __assign({}, index === 0 ? { style: { marginTop: page.props.offset } } : {}, { key: index }), node.props.children);
	            })), _react2.default.createElement("div", { className: "page-no" }, page.props.pageNo));
	        }
	    }]);
	
	    return BookPage;
	}(_react.Component);
	
	exports.default = BookPage;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(5);
	
	var _bookInfoPopup = __webpack_require__(57);
	
	var _bookInfoPopup2 = _interopRequireDefault(_bookInfoPopup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Book = function (_Component) {
	    _inherits(Book, _Component);
	
	    function Book() {
	        _classCallCheck(this, Book);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Book).apply(this, arguments));
	    }
	
	    _createClass(Book, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement("li", { className: "book" }, _react2.default.createElement(_reactRouter.Link, { to: '/book/' + this.props.id }, _react2.default.createElement("div", { className: "book-cover" }, _react2.default.createElement("img", { src: this.props.cover })), _react2.default.createElement("div", { className: "book-meta" }, _react2.default.createElement("span", { title: this.props.title, className: "book-name" }, this.props.title), _react2.default.createElement("span", { className: "book-author" }, this.props.author))), _react2.default.createElement(_bookInfoPopup2.default, { bookId: this.props.id, title: this.props.title, author: this.props.author, description: this.props.description }));
	        }
	    }]);
	
	    return Book;
	}(_react.Component);

	exports.default = Book;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CandyBox = function (_Component) {
	    _inherits(CandyBox, _Component);
	
	    function CandyBox() {
	        _classCallCheck(this, CandyBox);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(CandyBox).apply(this, arguments));
	    }
	
	    _createClass(CandyBox, [{
	        key: 'render',
	        value: function render() {
	            var list = this.props.list;
	            var title = this.props.title;
	            var moreLink = this.props.moreLink ? this.props.moreLink : null;
	            return _react2.default.createElement("div", { className: "candy-box" }, _react2.default.createElement("h3", { className: "box-title" }, title), moreLink ? _react2.default.createElement(_reactRouter.Link, { to: moreLink }, "查看更多") : null, _react2.default.createElement("ul", null, list.map(function (item, index) {
	                return _react2.default.createElement("li", { key: index }, _react2.default.createElement(_reactRouter.Link, { to: item.link }, item.name));
	            })));
	        }
	    }]);
	
	    return CandyBox;
	}(_react.Component);
	
	exports.default = CandyBox;

/***/ },
/* 63 */,
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _viewerPreference = __webpack_require__(65);
	
	var _viewerPreference2 = _interopRequireDefault(_viewerPreference);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _viewerPreference2.default;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _switcher = __webpack_require__(35);
	
	var _switcher2 = _interopRequireDefault(_switcher);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// @CSSModules(styles)
	
	var ViewerPreference = function (_Component) {
	    _inherits(ViewerPreference, _Component);
	
	    function ViewerPreference(props) {
	        _classCallCheck(this, ViewerPreference);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ViewerPreference).call(this, props));
	    }
	
	    _createClass(ViewerPreference, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement("div", { className: "viewer-preference" }, _react2.default.createElement("ul", { className: "options" }, _react2.default.createElement("li", { className: "option option-font-size" }, _react2.default.createElement("span", null, "A-"), _react2.default.createElement("span", null, "A+")), _react2.default.createElement("li", { className: "option option-scroll" }, _react2.default.createElement("span", { className: "label" }, "滚动模式"), _react2.default.createElement(_switcher2.default, { on: true })), _react2.default.createElement("li", { className: "option option-theme" }, _react2.default.createElement("span", { style: { background: '#fff' } }, "theme1"), _react2.default.createElement("span", { style: { background: '#eee' } }, "theme2"), _react2.default.createElement("span", { style: { background: '#222' } }, "theme3"))));
	        }
	    }]);
	
	    return ViewerPreference;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)()(ViewerPreference);

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ViewerScrollbar = function (_Component) {
	    _inherits(ViewerScrollbar, _Component);
	
	    function ViewerScrollbar(props) {
	        _classCallCheck(this, ViewerScrollbar);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ViewerScrollbar).call(this, props));
	    }
	
	    _createClass(ViewerScrollbar, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement("div", { style: { height: 400 }, className: "viewer-scrollbar" }, _react2.default.createElement("div", { className: "button" }, _react2.default.createElement("div", { className: "loc-info" }, _react2.default.createElement("div", null, _react2.default.createElement("strong", null, this.props.current), "/", this.props.total), _react2.default.createElement("div", { className: "sub-info" }, "30.3%"))), _react2.default.createElement("div", { style: { height: 100 }, className: "track-past" }), _react2.default.createElement("div", { style: { height: 400 }, className: "track" }));
	        }
	    }]);
	
	    return ViewerScrollbar;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)()(ViewerScrollbar);

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _branding = __webpack_require__(28);
	
	var _branding2 = _interopRequireDefault(_branding);
	
	var _layout = __webpack_require__(50);
	
	var _Colophon = __webpack_require__(56);
	
	var _Colophon2 = _interopRequireDefault(_Colophon);
	
	var _actions = __webpack_require__(3);
	
	var _reactCssModules = __webpack_require__(55);
	
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
	
	var styles = __webpack_require__(100);
	// import { Button } from '../../elements/form'
	var App = function (_Component) {
	    _inherits(App, _Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	    }
	
	    _createClass(App, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.props.userAuth();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var isAdmin = false;
	            var username = null;
	            if (this.props.session.user.role !== 'visitor') {
	                isAdmin = this.props.session.user.role === 'admin';
	                username = this.props.session.user.username;
	            }
	            return _react2.default.createElement("div", null, _react2.default.createElement(_branding2.default, { isAdmin: isAdmin, username: username }), _react2.default.createElement(_layout.Container, null, this.props.children), _react2.default.createElement(_Colophon2.default, null));
	        }
	    }]);
	
	    return App;
	}(_react.Component);
	App = __decorate([(0, _reactCssModules2.default)(styles)], App);
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        notification: state.components.notification,
	        session: state.session
	    };
	}, { userAuth: _actions.userAuth })(App);

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _app = __webpack_require__(67);
	
	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _app2.default;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _switcher = __webpack_require__(35);
	
	var _switcher2 = _interopRequireDefault(_switcher);
	
	var _bookListSection = __webpack_require__(15);
	
	var _bookListSection2 = _interopRequireDefault(_bookListSection);
	
	var _actions = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Archive = function (_Component) {
	    _inherits(Archive, _Component);
	
	    function Archive(props) {
	        _classCallCheck(this, Archive);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Archive).call(this, props));
	    }
	
	    _createClass(Archive, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.fetchBooks();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement("div", { className: "archive page-content" }, _react2.default.createElement("div", { className: "page-header" }, _react2.default.createElement("ul", { className: "categories" }, _react2.default.createElement("li", { className: "current" }, "全部"), _react2.default.createElement("li", null, "全部"), _react2.default.createElement("li", null, "全部"), _react2.default.createElement("li", null, "全部"), _react2.default.createElement("li", null, "全部"), _react2.default.createElement("li", null, "全部"), _react2.default.createElement("li", null, "全部")), _react2.default.createElement("ul", { className: "left dropdown-menu" }, _react2.default.createElement("li", null, "时间"), _react2.default.createElement("li", null, "热度"), _react2.default.createElement("li", null, "名称")), _react2.default.createElement("div", { className: "right" }, _react2.default.createElement("div", { className: "label" }, "不显示我读过的"), _react2.default.createElement(_switcher2.default, { on: false }))), _react2.default.createElement(_bookListSection2.default, { bookEntities: this.props.newestBooks }), _react2.default.createElement("div", { className: "page-load-more" }, "加载更多"));
	        }
	    }]);
	
	    return Archive;
	}(_react.Component);
	
	function mapStateToProps(state, ownProps) {
	    return {
	        newestBooks: state.pagination.books.newest ? state.pagination.books.newest.ids.map(function (id) {
	            return state.entities.books[id];
	        }) : []
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchBooks: _actions.fetchBooks, fetchCollections: _actions.fetchCollections })(Archive);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _actions = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ArchivedCollection = function (_Component) {
	    _inherits(ArchivedCollection, _Component);
	
	    function ArchivedCollection(props) {
	        _classCallCheck(this, ArchivedCollection);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ArchivedCollection).call(this, props));
	    }
	
	    _createClass(ArchivedCollection, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.fetchCollections();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement("div", { className: "archived-collection" }, _react2.default.createElement("div", { className: "page-title" }, "往期书单"), _react2.default.createElement("ul", null, this.props.newestCollections.length !== 0 && this.props.newestCollections.map(function (coll, index) {
	                return _react2.default.createElement("li", { key: index }, _react2.default.createElement("h2", null, coll.name), _react2.default.createElement("p", null, coll.description));
	            })), _react2.default.createElement("div", { className: "page-load-more" }, "加载更多"));
	        }
	    }]);
	
	    return ArchivedCollection;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        newestCollections: state.pagination.bookCollections.newest ? state.pagination.bookCollections.newest.ids.map(function (id) {
	            return state.entities.bookCollections[id];
	        }) : []
	    };
	}, { fetchCollections: _actions.fetchCollections })(ArchivedCollection);

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _actions = __webpack_require__(3);
	
	var _loading = __webpack_require__(51);
	
	var _loading2 = _interopRequireDefault(_loading);
	
	var _form = __webpack_require__(7);
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _body = __webpack_require__(10);
	
	var _body2 = _interopRequireDefault(_body);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BookInfo = function (_Component) {
	    _inherits(BookInfo, _Component);
	
	    function BookInfo(props) {
	        _classCallCheck(this, BookInfo);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BookInfo).call(this, props));
	
	        _this.bookId = props.params.id;
	        return _this;
	    }
	
	    _createClass(BookInfo, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.fetchBook(this.bookId);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var bookInfo = this.props.bookInfo ? this.props.bookInfo : {};
	            return _react2.default.createElement("article", { className: "book-info content-container" }, _react2.default.createElement(_body2.default, { className: "book-info" }), _lodash2.default.isEmpty(bookInfo) ? _react2.default.createElement(_loading2.default, null) : null, _react2.default.createElement("header", { className: "book-info-header" }, _react2.default.createElement("div", { className: "left-col" }, bookInfo.cover ? _react2.default.createElement("div", { className: "book-cover" }, _react2.default.createElement("img", { src: bookInfo.cover })) : null), _react2.default.createElement("div", { className: "right-col" }, _react2.default.createElement("h1", { className: "book-name" }, bookInfo.title), _react2.default.createElement("div", { className: "book-author" }, _react2.default.createElement("strong", null, "作者：", bookInfo.author ? bookInfo.author.map(function (a) {
	                return a.refData ? a.refData.name : '';
	            }).join(', ') : '')), bookInfo.title ? _react2.default.createElement("div", null, _react2.default.createElement(_form.Button, { to: '/viewer/book/' + bookInfo.id, color: "blue" }, "阅读"), _react2.default.createElement(_form.Button, null, "添加到书架"), _react2.default.createElement(_form.Button, null, "标记为已读"), _react2.default.createElement(_form.Button, null, "收藏")) : null)), bookInfo.description ? _react2.default.createElement("div", null, _react2.default.createElement("h2", null, "内容简介"), _react2.default.createElement("p", null, bookInfo.description)) : null);
	        }
	    }], [{
	        key: 'fetchData',
	        value: function fetchData(_ref) {
	            var store = _ref.store;
	            var params = _ref.params;
	
	            return store.dispatch((0, _actions.fetchBook)(params.id));
	        }
	    }]);
	
	    return BookInfo;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	    return { bookInfo: state.entities.books[ownProps.params.id] };
	}, { fetchBook: _actions.fetchBook })(BookInfo);

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _actions = __webpack_require__(3);
	
	var _bookListSection = __webpack_require__(15);
	
	var _bookListSection2 = _interopRequireDefault(_bookListSection);
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BookShelf = function (_Component) {
	    _inherits(BookShelf, _Component);
	
	    function BookShelf(props) {
	        _classCallCheck(this, BookShelf);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(BookShelf).call(this, props));
	    }
	
	    _createClass(BookShelf, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.fetchShelf();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var bookList = this.props.shelf;
	            return _react2.default.createElement("div", null, _react2.default.createElement(_bookListSection2.default, { bookEntities: bookList, title: "我的书架" }));
	        }
	    }], [{
	        key: 'fetchData',
	        value: function fetchData(_ref) {
	            var store = _ref.store;
	            var params = _ref.params;
	
	            return store.dispatch((0, _actions.fetchShelf)());
	        }
	    }]);
	
	    return BookShelf;
	}(_react.Component);
	
	function mapStateToProps(state, ownProps) {
	    return {
	        shelf: _lodash2.default.get(state.payloads.bookShelf, 'data', [])
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchShelf: _actions.fetchShelf })(BookShelf);

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _form = __webpack_require__(7);
	
	var _actions = __webpack_require__(3);
	
	var _bookListSection = __webpack_require__(15);
	
	var _bookListSection2 = _interopRequireDefault(_bookListSection);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Collection = function (_Component) {
	    _inherits(Collection, _Component);
	
	    function Collection(props) {
	        _classCallCheck(this, Collection);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Collection).call(this, props));
	    }
	
	    _createClass(Collection, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.fetchCollection(this.props.params.id);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var bookCollection = this.props.bookCollection ? this.props.bookCollection : { items: [] };
	            var items = bookCollection.items.filter(function (item) {
	                return item.refData;
	            }).map(function (item) {
	                return item.refData;
	            });
	            return _react2.default.createElement("div", { className: "collection" }, _react2.default.createElement("div", { className: "page-header" }, _react2.default.createElement("div", { className: "page-title" }, bookCollection.name), _react2.default.createElement("div", { className: "sub-title" }, "10 本书"), _react2.default.createElement("div", { className: "book-slider" }, _react2.default.createElement(_bookListSection2.default, { bookEntities: items })), _react2.default.createElement(_form.Button, null, "收藏")), _react2.default.createElement("div", { className: "page-content" }, _react2.default.createElement("p", null, bookCollection.description)));
	        }
	    }]);
	
	    return Collection;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	    return { bookCollection: state.entities.bookCollections[ownProps.params.id] };
	}, { fetchCollection: _actions.fetchCollection })(Collection);

/***/ },
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactRouter = __webpack_require__(5);
	
	var _index = __webpack_require__(3);
	
	var _bookListSection = __webpack_require__(15);
	
	var _bookListSection2 = _interopRequireDefault(_bookListSection);
	
	var _candyBox = __webpack_require__(62);
	
	var _candyBox2 = _interopRequireDefault(_candyBox);
	
	var _body = __webpack_require__(10);
	
	var _body2 = _interopRequireDefault(_body);
	
	var _form = __webpack_require__(7);
	
	var _reactCssModules = __webpack_require__(55);
	
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
	
	var styles = __webpack_require__(101);
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
	                    // this.props.fetchBooks('user')
	                    this.setState({
	                        showRecentReading: true
	                    });
	                }
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var newestBooks = this.props.newestBooks;
	            var listName = this.props.collection ? this.props.collection.name : '';
	            var list = this.props.collection ? this.props.collection.items.filter(function (item) {
	                return Boolean(item.refData);
	            }).map(function (item) {
	                return item.refData;
	            }) : [];
	            return _react2.default.createElement("div", null, _react2.default.createElement(_body2.default, { className: "home" }), _react2.default.createElement("div", { className: "row" }, this.props.session.user.role === 'visitor' && !this.props.session.isFetching ? _react2.default.createElement("div", { className: "hero-image" }, _react2.default.createElement("div", { className: "logo" }, "Readr"), _react2.default.createElement("div", { className: "page-title" }, "新一代 web 阅读体验"), _react2.default.createElement(_form.Button, { to: "/signup" }, "注册")) : null, _react2.default.createElement("div", { className: "col-md-8" }, _react2.default.createElement(_bookListSection2.default, { bookEntities: newestBooks, title: "新书速递" }), _react2.default.createElement(_bookListSection2.default, { bookEntities: list, title: listName, moreLink: "/collections/" + (this.props.collection ? this.props.collection.id : '') }), _react2.default.createElement(_reactRouter.Link, __assign({}, { styleName: 'blue' }, { className: "view-more", to: "/collections" }), "浏览更多书单2 >")), _react2.default.createElement("div", { className: "col-md-4" }, this.state.showRecentReading ? _react2.default.createElement(_candyBox2.default, { title: "最近阅读222", list: [] }) : null)));
	        }
	    }], [{
	        key: "fetchData",
	        value: function fetchData(_ref) {
	            var store = _ref.store;
	
	            return store.dispatch((0, _index.fetchBooks)());
	        }
	    }]);
	
	    return Home;
	}(_react.Component);
	Home = __decorate([(0, _reactCssModules2.default)(styles)], Home);
	function mapStateToProps(state, ownProps) {
	    // console.log(state.pagination.books.newest);
	    return {
	        userBooks: [],
	        newestBooks: state.pagination.books.newest ? state.pagination.books.newest.ids.map(function (id) {
	            return state.entities.books[id];
	        }) : [],
	        session: state.session,
	        // todo: collection pagination
	        collection: function () {
	            for (var prop in state.entities.bookCollections) {
	                return state.entities.bookCollections[prop];
	            }
	        }()
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchBooks: _index.fetchBooks, fetchCollections: _index.fetchCollections })(Home);

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _home = __webpack_require__(80);
	
	var _home2 = _interopRequireDefault(_home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _home2.default;
	// export default from './home'

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _navTab = __webpack_require__(52);
	
	var _navTab2 = _interopRequireDefault(_navTab);
	
	var _actions = __webpack_require__(3);
	
	var _bookListSection = __webpack_require__(15);
	
	var _bookListSection2 = _interopRequireDefault(_bookListSection);
	
	var _form = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Profile = function (_Component) {
	    _inherits(Profile, _Component);
	
	    // static fetchData({store, params}) {
	    //   return store.dispatch(fetch())
	    // }
	
	    function Profile(props) {
	        _classCallCheck(this, Profile);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Profile).call(this, props));
	    }
	
	    _createClass(Profile, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.fetchBooks();
	            this.props.fetchShelf('15593187');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var newestBooks = this.props.newestBooks;
	            return _react2.default.createElement("div", { className: "profile" }, _react2.default.createElement("div", { className: "page-header" }, _react2.default.createElement("div", { className: "user-avatar" }, _react2.default.createElement("img", { src: "https://img3.doubanio.com/icon/ul43646706-43.jpg", alt: "user_avatar" })), _react2.default.createElement("span", { className: "username" }, "username"), _react2.default.createElement("span", { className: "tagline" }, "something to say"), _react2.default.createElement(_form.Button, null, "编辑")), _react2.default.createElement(_navTab2.default, { tabs: ['收藏', '读过', '书评'], current: 0 }), _react2.default.createElement("div", null, _react2.default.createElement(_bookListSection2.default, { title: "😄", bookEntities: newestBooks })));
	        }
	    }]);
	
	    return Profile;
	}(_react.Component);
	
	function mapStateToProps(state, ownProps) {
	    return {
	        session: state.session,
	        newestBooks: state.pagination.books.newest ? state.pagination.books.newest.ids.map(function (id) {
	            return state.entities.books[id];
	        }) : []
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, fetchBooks: _actions.fetchBooks, fetchCollections: _actions.fetchCollections, fetchShelf: _actions.fetchShelf })(Profile);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _actions = __webpack_require__(3);
	
	var _alert = __webpack_require__(30);
	
	var _alert2 = _interopRequireDefault(_alert);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Root = function (_Component) {
	    _inherits(Root, _Component);
	
	    function Root(props) {
	        _classCallCheck(this, Root);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Root).call(this, props));
	    }
	
	    _createClass(Root, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement("div", { className: "app-root" }, this.props.notifications.filter(function (noti) {
	                return noti.visible;
	            }).length > 0 ? _react2.default.createElement("div", { className: "notifications" }, this.props.notifications.map(function (noti, index) {
	                return _react2.default.createElement(_alert2.default, { key: index, type: noti.type, message: noti.message, visible: noti.visible });
	            })) : null, this.props.children);
	        }
	    }]);
	
	    return Root;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return { notifications: state.components.notifications };
	}, { sendNotification: _actions.sendNotification })(Root);

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _actions = __webpack_require__(3);
	
	var _navTab = __webpack_require__(52);
	
	var _navTab2 = _interopRequireDefault(_navTab);
	
	var _body = __webpack_require__(10);
	
	var _body2 = _interopRequireDefault(_body);
	
	var _switcher = __webpack_require__(35);
	
	var _switcher2 = _interopRequireDefault(_switcher);
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Profile = function (_Component) {
	    _inherits(Profile, _Component);
	
	    // static fetchData({store, params}) {
	    //   return store.dispatch(fetch())
	    // }
	
	    function Profile(props) {
	        _classCallCheck(this, Profile);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Profile).call(this, props));
	    }
	
	    _createClass(Profile, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            // user session fetched
	            if (nextProps.session.isFetching === false && this.props.session.isFetching) {
	                var userId = nextProps.session.user.id;
	                this.props.fetchProfile(userId);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var user = this.props.profile;
	            return _react2.default.createElement("div", { className: "settings" }, _react2.default.createElement(_body2.default, { className: "page-settings" }), _react2.default.createElement("div", { className: "page-content" }, _react2.default.createElement("div", { className: "page-header" }, _react2.default.createElement("h1", { className: "page-title" }, "设置"), _react2.default.createElement(_navTab2.default, { tabs: ['资料', '个人主页'], current: 0 })), _react2.default.createElement("ul", { className: "options" }, _react2.default.createElement("li", { className: "option" }, _react2.default.createElement("h2", null, "用户名"), _react2.default.createElement("span", { className: "option-input" }, "http://readrweb.com/@", _react2.default.createElement("strong", null, user.username)), _react2.default.createElement("span", { className: "edit" }, "编辑")), _react2.default.createElement("li", { className: "option" }, _react2.default.createElement("h2", null, "邮箱"), _react2.default.createElement("span", { className: "option-input" }, user.email), _react2.default.createElement("span", { className: "edit" }, "编辑")), _react2.default.createElement("li", { className: "option" }, _react2.default.createElement("h2", null, "密码"), _react2.default.createElement("span", { className: "option-input" }, "******"), _react2.default.createElement("span", { className: "edit" }, "编辑")), _react2.default.createElement("li", { className: "option" }, _react2.default.createElement("h2", null, "公开展示我的收藏"), _react2.default.createElement("span", { className: "option-desc" }, "关闭后其他用户将无法查看您的收藏"), _react2.default.createElement(_switcher2.default, { on: true })))));
	        }
	    }]);
	
	    return Profile;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    var userId = state.session.user.role !== 'visitor' ? state.session.user.id : '';
	    var profile = userId && !_lodash2.default.isEmpty(state.entities.profiles) ? state.entities.profiles[userId] : {};
	    return {
	        notification: state.notification,
	        session: state.session,
	        profile: profile
	    };
	}, { sendNotification: _actions.sendNotification, userAuth: _actions.userAuth, fetchProfile: _actions.fetchProfile })(Profile);

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactRouter = __webpack_require__(5);
	
	var _apiRoots = __webpack_require__(9);
	
	var _apiRoots2 = _interopRequireDefault(_apiRoots);
	
	var _callApi = __webpack_require__(13);
	
	var _callApi2 = _interopRequireDefault(_callApi);
	
	var _actions = __webpack_require__(3);
	
	var _branding = __webpack_require__(28);
	
	var _branding2 = _interopRequireDefault(_branding);
	
	var _form = __webpack_require__(7);
	
	var _container = __webpack_require__(12);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _body = __webpack_require__(10);
	
	var _body2 = _interopRequireDefault(_body);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Signin = function (_Component) {
	    _inherits(Signin, _Component);
	
	    function Signin(props) {
	        _classCallCheck(this, Signin);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Signin).call(this, props));
	
	        _this.state = {
	            login: '',
	            password: ''
	        };
	        return _this;
	    }
	
	    _createClass(Signin, [{
	        key: 'handleSignin',
	        value: function handleSignin(event) {
	            var _this2 = this;
	
	            event.preventDefault();
	            var params = {
	                login: this.state.login,
	                password: this.state.password
	            };
	            (0, _callApi2.default)(_apiRoots2.default.LOCAL + 'auth', { method: 'POST', data: params }).then(function (res) {
	                _this2.props.sendNotification('登录成功！');
	                setTimeout(function () {
	                    _reactRouter.browserHistory.push('/');
	                }, 600);
	            }).catch(function (err) {
	                _this2.props.sendNotification(err.message);
	            });
	        }
	    }, {
	        key: 'handleInput',
	        value: function handleInput(event) {
	            this.setState(_defineProperty({}, event.target.name, event.target.value));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement("div", null, _react2.default.createElement(_body2.default, { className: "signin" }), _react2.default.createElement(_branding2.default, null), _react2.default.createElement(_container2.default, null, _react2.default.createElement("form", { className: "content-container", action: _apiRoots2.default.LOCAL + 'auth', method: "post" }, _react2.default.createElement("h1", { className: "page-title" }, "欢迎回来"), _react2.default.createElement(_form.Input, { onChange: this.handleInput.bind(this), value: this.state.login, name: "login", placeholder: "用户名或邮箱" }), _react2.default.createElement(_form.Input, { onChange: this.handleInput.bind(this), value: this.state.password, name: "password", placeholder: "密码", type: "password" }), _react2.default.createElement(_form.Button, { className: "z1", color: "blue", onClick: this.handleSignin.bind(this) }, "登录"), _react2.default.createElement("p", { className: "hint" }, "没有账号？", _react2.default.createElement(_reactRouter.Link, { to: "/signup" }, "注册")))));
	        }
	    }]);
	
	    return Signin;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        notification: state.components.notification,
	        user: state.user
	    };
	}, { sendNotification: _actions.sendNotification })(Signin);

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactRouter = __webpack_require__(5);
	
	var _apiRoots = __webpack_require__(9);
	
	var _apiRoots2 = _interopRequireDefault(_apiRoots);
	
	var _callApi = __webpack_require__(13);
	
	var _callApi2 = _interopRequireDefault(_callApi);
	
	var _actions = __webpack_require__(3);
	
	var _branding = __webpack_require__(28);
	
	var _branding2 = _interopRequireDefault(_branding);
	
	var _form = __webpack_require__(7);
	
	var _container = __webpack_require__(12);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _body = __webpack_require__(10);
	
	var _body2 = _interopRequireDefault(_body);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Signup = function (_Component) {
	    _inherits(Signup, _Component);
	
	    function Signup(props) {
	        _classCallCheck(this, Signup);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Signup).call(this, props));
	
	        _this.state = {
	            username: '',
	            email: '',
	            password: ''
	        };
	        return _this;
	    }
	
	    _createClass(Signup, [{
	        key: 'handleSignup',
	        value: function handleSignup(event) {
	            var _this2 = this;
	
	            event.preventDefault();
	            var params = {
	                username: this.state.username,
	                email: this.state.email,
	                password: this.state.password
	            };
	            (0, _callApi2.default)(_apiRoots2.default.LOCAL + 'users', { method: 'POST', data: params }).then(function (res) {
	                _this2.props.sendNotification('注册成功！');
	                setTimeout(function () {
	                    _reactRouter.browserHistory.push('/');
	                }, 600);
	            }, function (err) {
	                _this2.props.sendNotification(err.message, 'error');
	            });
	        }
	    }, {
	        key: 'handleInput',
	        value: function handleInput(event) {
	            this.setState(_defineProperty({}, event.target.name, event.target.value));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement("div", null, _react2.default.createElement(_body2.default, { className: "signup" }), _react2.default.createElement(_branding2.default, null), _react2.default.createElement(_container2.default, null, _react2.default.createElement("form", { className: "content-container", method: "post", action: "/signup" }, _react2.default.createElement("h1", { className: "page-title" }, "加入 Readr"), _react2.default.createElement(_form.Input, { onChange: this.handleInput.bind(this), value: this.state.username, name: "username", placeholder: "用户名" }), _react2.default.createElement(_form.Input, { onChange: this.handleInput.bind(this), value: this.state.email, name: "email", placeholder: "邮箱" }), _react2.default.createElement(_form.Input, { onChange: this.handleInput.bind(this), value: this.state.password, name: "password", placeholder: "密码 ", type: "password" }), _react2.default.createElement(_form.Button, { className: "z1", color: "blue", onClick: this.handleSignup.bind(this) }, "注册"), _react2.default.createElement("p", { className: "hint" }, "没有账号？", _react2.default.createElement(_reactRouter.Link, { to: "/signin" }, "登录")))));
	        }
	    }]);
	
	    return Signup;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        notification: state.components.notification,
	        user: state.user
	    };
	}, { sendNotification: _actions.sendNotification })(Signup);

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _viewer = __webpack_require__(88);
	
	var _viewer2 = _interopRequireDefault(_viewer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _viewer2.default;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(5);
	
	var _reactRedux = __webpack_require__(2);
	
	var _redux = __webpack_require__(14);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(24);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	var _icon = __webpack_require__(11);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _loading = __webpack_require__(51);
	
	var _loading2 = _interopRequireDefault(_loading);
	
	var _Dialog = __webpack_require__(89);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _bookPageList = __webpack_require__(59);
	
	var _bookPageList2 = _interopRequireDefault(_bookPageList);
	
	var _renderBook2 = __webpack_require__(99);
	
	var _renderBook = _interopRequireWildcard(_renderBook2);
	
	var _view = __webpack_require__(44);
	
	var _cache = __webpack_require__(96);
	
	var _object = __webpack_require__(98);
	
	var _index = __webpack_require__(3);
	
	var _apis = __webpack_require__(17);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _body = __webpack_require__(10);
	
	var _body2 = _interopRequireDefault(_body);
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _viewerPreference = __webpack_require__(64);
	
	var _viewerPreference2 = _interopRequireDefault(_viewerPreference);
	
	var _fade = __webpack_require__(31);
	
	var _fade2 = _interopRequireDefault(_fade);
	
	var _viewerScrollbar = __webpack_require__(66);
	
	var _viewerScrollbar2 = _interopRequireDefault(_viewerScrollbar);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var actions = { fetchBook: _index.fetchBook, userAuth: _index.userAuth };
	
	var Viewer = function (_Component) {
	    _inherits(Viewer, _Component);
	
	    function Viewer(props) {
	        _classCallCheck(this, Viewer);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Viewer).call(this, props));
	
	        _this.bookId = props.params.id;
	        _this.state = {
	            showPanel: true,
	            showProgressDialog: false,
	            isCalculatingDom: false,
	            isReadingMode: false,
	            isScrollMode: true,
	            isInitialProgressSet: false,
	            scrollTop: 0,
	            currentPage: 0,
	            calculatedPages: null,
	            latestProgress: 0,
	            view: (0, _view.getBookView)(),
	            showViewerPreference: false
	        };
	        _this.toggleViewerPreference = _this.toggleViewerPreference.bind(_this);
	        return _this;
	    }
	
	    _createClass(Viewer, [{
	        key: 'toggleViewerPreference',
	        value: function toggleViewerPreference() {
	            this.setState({
	                showViewerPreference: !this.state.showViewerPreference
	            });
	        }
	    }, {
	        key: 'scrollTo',
	        value: function scrollTo(position) {
	            var pageCount = this.state.calculatedPages.props.children.length;
	            var pageHeight = this.state.calculatedPages.props.view.pageHeight;
	            var height = pageCount * pageHeight;
	            if (position < 1) {
	                this.setState({
	                    currentPage: _renderBook.percentageToPage(position, pageCount),
	                    scrollTop: position * height
	                });
	                document.body.scrollTop = pageCount * pageHeight * position;
	            } else {
	                this.setState({
	                    currentPage: position,
	                    scrollTop: height * position / pageCount
	                });
	                document.body.scrollTop = pageHeight * position;
	            }
	        }
	    }, {
	        key: 'addEventListeners',
	        value: function addEventListeners() {
	            var _this2 = this;
	
	            this.mapScrollTopToState = function () {
	                _this2.setState({
	                    scrollTop: document.body.scrollTop
	                });
	            };
	            this.mapWindowWidthToState = function () {
	                _this2.setState({
	                    windowWidth: window.innerWidth
	                });
	            };
	            this.mapViewToState = function () {
	                _this2.setState({
	                    view: (0, _view.getBookView)()
	                });
	            };
	            this.checkAndSetProgress = function () {
	                var currentPageNo = _this2.props.book.pageNo;
	                _this2.props.actions.fetchBookProgress(_this2.bookId).then(function (action) {
	                    if (_this2.props.book.pageNo - currentPageNo > 5) {
	                        _this2.setState({
	                            showProgressDialog: true,
	                            latestProgress: _this2.props.book.percentage
	                        });
	                    } else {
	                        var pageSum = _this2.state.calculatedPages.props.children.length;
	                        var height = pageSum * _this2.state.view.pageHeight;
	                        var percentage = _this2.state.scrollTop / height;
	                        var pageNo = _renderBook.percentageToPage(percentage, pageSum);
	                        var progress = {
	                            pageNo: pageNo,
	                            pageSum: pageSum,
	                            percentage: percentage
	                        };
	                        _apis2.default.setProgress(_this2.bookId, progress);
	                    }
	                });
	            };
	            // TODO: use session to determine latest progress
	            this.deboundedSetProgress = _lodash2.default.debounce(this.checkAndSetProgress, 200);
	            // window.addEventListener('scroll', this.deboundedSetProgress)
	            window.addEventListener('scroll', this.mapScrollTopToState);
	            window.addEventListener('resize', this.mapWindowWidthToState);
	            window.addEventListener('resize', this.mapViewToState);
	        }
	    }, {
	        key: 'removeEventListeners',
	        value: function removeEventListeners() {
	            window.removeEventListener('scroll', this.deboundedSetProgress);
	            window.removeEventListener('scroll', this.mapScrollTopToState);
	            window.removeEventListener('resize', this.mapWindowWidthToState);
	            window.removeEventListener('resize', this.mapViewToState);
	        }
	    }, {
	        key: 'toggleBookPanel',
	        value: function toggleBookPanel(event) {
	            if (this.state.calculatedPages.props.view.screen === 'hd') {
	                var y = event.pageY - document.body.scrollTop;
	                if (y < 90) {
	                    this.setState({
	                        showPanel: true
	                    });
	                } else {
	                    this.setState({
	                        showPanel: false
	                    });
	                }
	            }
	        }
	    }, {
	        key: 'clickToToggleBookPanel',
	        value: function clickToToggleBookPanel() {
	            if (this.state.calculatedPages.props.view.screen === 'phone') {
	                this.setState({
	                    showPanel: !this.state.showPanel
	                });
	            }
	        }
	    }, {
	        key: 'calculateDom',
	        value: function calculateDom() {
	            var html = this.state.bookHtml;
	            var bookId = this.bookId;
	            var view = (0, _view.getBookView)();
	            var nodeHeights = _renderBook.getNodeHeights(this.refs.bookHtml.childNodes);
	            var pages = _renderBook.htmlToPages(html, nodeHeights, view);
	            (0, _cache.setCache)('book' + bookId + '_pages', JSON.stringify(pages));
	            this.setState({
	                isReadingMode: true,
	                isCalculatingDom: false,
	                calculatedPages: pages
	            });
	        }
	    }, {
	        key: 'loadCalculatedPages',
	        value: function loadCalculatedPages() {
	            var bookId = this.props.params.id;
	            var pages = (0, _cache.getCache)('book' + bookId + '_pages');
	            // check if pages are cached
	            if (pages) {
	                pages = JSON.parse(pages);
	                this.setState({
	                    isReadingMode: true,
	                    calculatedPages: pages,
	                    bookHtml: _renderBook.pagesToHtml(pages)
	                });
	            } else {
	                this.props.actions.fetchBook(bookId, ['content']);
	            }
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {
	            if (nextProps.book && nextProps.book.content && nextProps.book.content.html && !this.props.book.content) {
	                this.setState({
	                    isCalculatingDom: true,
	                    bookHtml: nextProps.book.content.html
	                });
	            }
	            if (!(0, _object.simpleCompareObjects)(this.state.view, nextState.view)) {
	                this.setState({
	                    isCalculatingDom: true
	                });
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {
	            var _this3 = this;
	
	            if (this.state.isCalculatingDom && !prevState.isCalculatingDom) {
	                this.calculateDom();
	            }
	            // scroll to previous reading progress when opening a book
	            if (this.props.book && this.props.book.percentage && this.state.calculatedPages && !this.state.isInitialProgressSet) {
	                setTimeout(function () {
	                    _this3.scrollTo(_this3.props.book.percentage);
	                    _this3.setState({
	                        isInitialProgressSet: true
	                    });
	                }, 1);
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var actions = this.props.actions;
	            var bookId = this.props.params.id;
	            actions.userAuth();
	            actions.fetchBook(bookId);
	            // actions.fetchBookProgress(bookId)
	            this.addEventListeners();
	            this.loadCalculatedPages();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.removeEventListeners();
	            this.setState({
	                isInitialProgressSet: false
	            });
	        }
	    }, {
	        key: 'renderBook',
	        value: function renderBook() {
	            var scrollTop = this.state.scrollTop;
	            var calculatedPages = this.state.calculatedPages;
	            var bookId = this.props.params.id;
	            var view = calculatedPages.props.view;
	            var height = calculatedPages.props.children.length * view.pageHeight;
	            var currentPage = _renderBook.percentageToPage(scrollTop / height, calculatedPages.props.children.length);
	            var pages = _renderBook.filterPages({
	                startPage: currentPage,
	                offset: 2,
	                quantity: 5,
	                pages: calculatedPages.props.children
	            });
	            return _react2.default.createElement("div", { onClick: this.clickToToggleBookPanel.bind(this) }, _react2.default.createElement(_bookPageList2.default, { height: height, view: view, bookId: bookId, pages: pages }));
	        }
	    }, {
	        key: 'hideProgressDialog',
	        value: function hideProgressDialog() {
	            this.setState({
	                showProgressDialog: false
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this4 = this;
	
	            var book = this.props.book;
	            var view = this.state.view;
	            var actions = [{
	                text: 'Yes',
	                function: function _function() {
	                    _this4.scrollTo.call(_this4, _this4.state.latestProgress);
	                    _this4.hideProgressDialog.call(_this4);
	                }
	            }, {
	                text: 'No',
	                function: this.hideProgressDialog.bind(this)
	            }];
	            return _react2.default.createElement("div", { className: 'viewer viewer--' + view.screen, onMouseMove: this.toggleBookPanel.bind(this) }, _react2.default.createElement(_body2.default, { className: "viewer" }), !book.content && !this.state.calculatedPages ? _react2.default.createElement(_loading2.default, null) : null, this.state.showProgressDialog ? _react2.default.createElement(_Dialog2.default, { actions: actions, content: "are you sure?" }) : null, _react2.default.createElement(_reactAddonsCssTransitionGroup2.default, { component: "div", transitionName: "slide", transitionEnterTimeout: 300, transitionLeaveTimeout: 300 }, this.state.showPanel && this.state.isReadingMode || this.state.showViewerPreference ? _react2.default.createElement("div", { className: "viewer-panel" }, _react2.default.createElement("div", { className: "container" }, _react2.default.createElement("div", { className: "back" }, _react2.default.createElement(_reactRouter.Link, { to: "/" }, _react2.default.createElement(_icon2.default, { name: "back" }), _react2.default.createElement("span", null, "返回"))), _react2.default.createElement("span", { className: "title" }, book.title), _react2.default.createElement("div", { onClick: this.toggleViewerPreference, className: "preference" }, _react2.default.createElement(_icon2.default, { name: "font" })), _react2.default.createElement("div", { className: "add" }, "点击添加至书架"), _react2.default.createElement(_fade2.default, null, this.state.showViewerPreference ? _react2.default.createElement(_viewerPreference2.default, null) : null))) : null), this.state.isCalculatingDom && this.state.bookHtml ? _react2.default.createElement("ul", { className: "pages" }, _react2.default.createElement("li", null, _react2.default.createElement("div", { ref: "bookHtml", className: "content", dangerouslySetInnerHTML: { __html: this.state.bookHtml } }))) : null, this.state.isReadingMode ? this.renderBook() : null, _react2.default.createElement(_viewerScrollbar2.default, { current: 20, total: 309 }));
	        }
	    }]);
	
	    return Viewer;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	    return {
	        book: state.entities.books[ownProps.params.id] ? state.entities.books[ownProps.params.id] : {},
	        session: state.session
	    };
	}, function (dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)(actions, dispatch)
	    };
	})(Viewer);

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Dialog = function (_Component) {
	    _inherits(Dialog, _Component);
	
	    function Dialog() {
	        _classCallCheck(this, Dialog);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Dialog).apply(this, arguments));
	    }
	
	    _createClass(Dialog, [{
	        key: 'render',
	        value: function render() {
	            var defaultClass = 'dialog z1';
	            var className = this.props.className ? defaultClass + ' ' + this.props.className : defaultClass;
	            var content = this.props.content;
	            var actions = this.props.actions;
	            return _react2.default.createElement("div", { className: className }, _react2.default.createElement("p", null, content), _react2.default.createElement("div", { className: "actions" }, actions.map(function (action, index) {
	                return _react2.default.createElement("span", { key: index, onClick: action.function }, action.text);
	            })));
	        }
	    }]);
	
	    return Dialog;
	}(_react.Component);
	
	exports.default = Dialog;

/***/ },
/* 90 */,
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactDom = __webpack_require__(23);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(5);
	
	var _app = __webpack_require__(93);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactRouterRedux = __webpack_require__(18);
	
	var _configureStore = __webpack_require__(41);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var store = (0, _configureStore2.default)();
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);
	(0, _reactDom.render)(_react2.default.createElement(_reactRedux.Provider, { store: store }, _react2.default.createElement(_reactRouter.Router, { history: history, routes: _app2.default.props.children })), document.getElementById('root'));

/***/ },
/* 92 */,
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(5);
	
	var _noMatch = __webpack_require__(29);
	
	var _noMatch2 = _interopRequireDefault(_noMatch);
	
	var _viewer = __webpack_require__(87);
	
	var _viewer2 = _interopRequireDefault(_viewer);
	
	var _signin = __webpack_require__(85);
	
	var _signin2 = _interopRequireDefault(_signin);
	
	var _signup = __webpack_require__(86);
	
	var _signup2 = _interopRequireDefault(_signup);
	
	var _bookInfo = __webpack_require__(71);
	
	var _bookInfo2 = _interopRequireDefault(_bookInfo);
	
	var _app = __webpack_require__(68);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _home = __webpack_require__(81);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _profile = __webpack_require__(82);
	
	var _profile2 = _interopRequireDefault(_profile);
	
	var _bookShelf = __webpack_require__(72);
	
	var _bookShelf2 = _interopRequireDefault(_bookShelf);
	
	var _settings = __webpack_require__(84);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	var _archive = __webpack_require__(69);
	
	var _archive2 = _interopRequireDefault(_archive);
	
	var _collection = __webpack_require__(73);
	
	var _collection2 = _interopRequireDefault(_collection);
	
	var _archivedCollection = __webpack_require__(70);
	
	var _archivedCollection2 = _interopRequireDefault(_archivedCollection);
	
	var _root = __webpack_require__(83);
	
	var _root2 = _interopRequireDefault(_root);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createElement(_reactRouter.Router, null, _react2.default.createElement(_reactRouter.Route, { path: "/", component: _root2.default }, _react2.default.createElement(_reactRouter.Route, { component: _app2.default }, _react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default }), _react2.default.createElement(_reactRouter.Route, { path: "book/:id", component: _bookInfo2.default }), _react2.default.createElement(_reactRouter.Route, { path: "profile", component: _profile2.default }), _react2.default.createElement(_reactRouter.Route, { path: "profile/:user", component: _profile2.default }), _react2.default.createElement(_reactRouter.Route, { path: "shelf", component: _bookShelf2.default }), _react2.default.createElement(_reactRouter.Route, { path: "settings", component: _settings2.default }), _react2.default.createElement(_reactRouter.Route, { path: "browse", component: _archive2.default }), _react2.default.createElement(_reactRouter.Route, { path: "collections/:id", component: _collection2.default }), _react2.default.createElement(_reactRouter.Route, { path: "collections", component: _archivedCollection2.default })), _react2.default.createElement(_reactRouter.Route, { path: "signin", component: _signin2.default }), _react2.default.createElement(_reactRouter.Route, { path: "signup", component: _signup2.default }), _react2.default.createElement(_reactRouter.Route, { path: "viewer/book/:id", component: _viewer2.default }), _react2.default.createElement(_reactRouter.Route, { path: "*", component: _noMatch2.default })));

/***/ },
/* 94 */,
/* 95 */,
/* 96 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getCache = getCache;
	exports.setCache = setCache;
	function getCache(name) {
	    if (typeof name !== 'string') {
	        console.error('Name should be string!');
	    }
	    var content = localStorage.getItem(name);
	    if (!content) {
	        content = false;
	    }
	    return content;
	}
	function setCache(name, content) {
	    if (typeof name !== 'string') {
	        console.error('Name should be string!');
	    }
	    if (typeof content !== 'string') {
	        console.error('Cache content should be string!');
	    }
	    var success = true;
	    try {
	        localStorage.setItem(name, content);
	    } catch (e) {
	        console.error(e);
	        success = false;
	    }
	    return success;
	}

/***/ },
/* 97 */,
/* 98 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.simpleCompareObjects = simpleCompareObjects;
	function simpleCompareObjects(obj1, obj2) {
	    var isEqual = true;
	    try {
	        for (var prop in obj1) {
	            if (obj1[prop] !== obj2[prop]) {
	                isEqual = false;
	                break;
	            }
	        }
	    } catch (e) {
	        console.error(e);
	        isEqual = false;
	    }
	    return isEqual;
	}

/***/ },
/* 99 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.filterPages = filterPages;
	exports.htmlToPages = htmlToPages;
	exports.pagesToHtml = pagesToHtml;
	exports.getNodeHeights = getNodeHeights;
	exports.percentageToPage = percentageToPage;
	function filterPages(config) {
	    var startPage = config.startPage;
	    var quantity = config.quantity;
	    var offset = config.offset;
	    var pages = config.pages;
	
	    var newPages = [];
	    while (startPage - offset < 0) {
	        offset--;
	    }
	    startPage = startPage - offset;
	    for (var i = startPage; i < quantity + startPage && i < pages.length; i++) {
	        var page = pages[i];
	        newPages.push(page);
	    }
	    return newPages;
	}
	function htmlToPages(html, nodeHeights, view) {
	    var pageHeight = view.pageHeight;
	    var nodes = parseHTML(html);
	    var pages = groupNodesByPage(nodes, nodeHeights, pageHeight);
	    return {
	        type: 'pages',
	        props: {
	            children: pages,
	            view: view
	        }
	    };
	}
	function pagesToHtml(pages) {
	    var nodes = pages.props.children.reduce(function (a, b) {
	        return a.concat(b.props.children);
	    }, []);
	    var uniqueNodes = [];
	    var realIndex = 0;
	    // remove duplicate nodes
	    for (var i = 0; i < nodes.length; i++) {
	        nodes[i];
	        if (nodes[i].props.index === realIndex) {
	            uniqueNodes.push(nodes[i]);
	            realIndex++;
	        }
	    }
	    var html = parseNodes(uniqueNodes);
	    return html;
	}
	function getNodeHeights(nodes) {
	    var nodesHeight = [];
	    Array.prototype.forEach.call(nodes, function (node, index) {
	        if (node.tagName.toLowerCase() !== "p") {
	            console.error("Unsupported content found!");
	        }
	        nodesHeight.push(node.clientHeight);
	    });
	    return nodesHeight;
	}
	function percentageToPage(p, pageSum) {
	    if (p > 1) {
	        console.error("Wrong parameter!");
	        return null;
	    } else {
	        return parseInt(p * pageSum) + 1;
	    }
	}
	// funcs used internally
	function parseHTML(htmlString) {
	    var nodes = [];
	    var $html = document.createElement("div");
	    var $htmlNodes = void 0;
	    $html.innerHTML = htmlString;
	    $htmlNodes = $html.childNodes;
	    for (var i = 0; i < $htmlNodes.length; i++) {
	        if ($htmlNodes[i].nodeType != 1) {
	            continue;
	        } else {
	            nodes.push({
	                type: $htmlNodes[i].tagName.toLowerCase(),
	                props: {
	                    children: $htmlNodes[i].innerHTML
	                }
	            });
	        }
	    }
	    return nodes;
	}
	function parseNodes(nodes) {
	    var html = '';
	    for (var i = 0; i < nodes.length; i++) {
	        if (nodes[i].type !== 'p') {
	            console.error('Unsupported node found!');
	            continue;
	        } else {
	            html += "<p>" + nodes[i].props.children + "</p>";
	        }
	    }
	    return html;
	}
	function groupNodesByPage(nodes, nodeHeights, pageHeight) {
	    var pages = [];
	    var pageHeightSum = nodeHeights.reduce(function (a, b) {
	        return a + b;
	    }, 0);
	    var pageSum = Math.ceil(pageHeightSum / pageHeight);
	    nodes = nodes.map(function (node, index) {
	        node.props.index = index;
	        return node;
	    });
	    // long paragraph situation doesn't seem to affect this function
	    // offset distance is always negtive or zero
	    // the index will be of the paragraph with this offset at the end
	    var getPageOffset = function getPageOffset(pageIndex) {
	        var offset = 0;
	        var i = 0;
	        var index = void 0;
	        if (pageIndex !== 0) {
	            var nodeHeightSum = 0;
	            while (nodeHeightSum <= pageHeight * pageIndex) {
	                nodeHeightSum += nodeHeights[i];
	                i++;
	            }
	            offset = nodeHeightSum - nodeHeights[i - 1] - pageIndex * pageHeight;
	            index = i - 1;
	        } else {
	            index = 0;
	        }
	        return {
	            offset: offset,
	            index: index
	        };
	    };
	    var getNodesOfPage = function getNodesOfPage(pageIndex) {
	        var offsetObject = getPageOffset(pageIndex);
	        var nodeStartIndex = offsetObject.index;
	        var offset = offsetObject.offset;
	        var i = nodeStartIndex;
	        var nodeEndIndex = void 0;
	        var pageNodes = [];
	        var nodeHeightSum = offset + nodeHeights[nodeStartIndex];
	        i++;
	        if (nodeHeightSum < pageHeight) {
	            while (nodeHeightSum <= pageHeight && i !== nodes.length) {
	                nodeHeightSum += nodeHeights[i];
	                i++;
	            }
	            nodeEndIndex = i - 1;
	        } else {
	            nodeEndIndex = nodeStartIndex;
	        }
	        for (var _i = nodeStartIndex; _i <= nodeEndIndex && _i <= nodes.length - 1; _i++) {
	            pageNodes.push(nodes[_i]);
	        }
	        return [pageNodes, offset];
	    };
	    // finally
	    for (var i = 0; i < pageSum; i++) {
	        var array = getNodesOfPage(i);
	        var _nodes = array[0];
	        var offset = array[1];
	        pages.push({
	            props: {
	                children: _nodes,
	                style: {
	                    top: i * pageHeight,
	                    position: 'absolute',
	                    height: pageHeight
	                },
	                pageNo: i + 1,
	                offset: offset
	            },
	            type: "page"
	        });
	    }
	    return pages;
	}

/***/ },
/* 100 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 101 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"blue":"home-blue-3O3fQ"};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDA2YjdhOWZkMzM2ZDdmMWYxNGUiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9yZWFjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2xpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2xpYiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FjdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiX3JlYWN0X2xpYlwiIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2xpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3V0aWxzX2xpYiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIl91dGlsc19saWJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FwaS1jb25maWcvYXBpLXJvb3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvc2lkZS1lZmZlY3RzL2JvZHkudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvaWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9sYXlvdXQvY29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL2NhbGwtYXBpLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3RfbGliIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9ib29rLWxpc3Qtc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zY2hlbWFzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvYXBpcy50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9saWIiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9ub3JtYWxpenIvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfdXRpbHNfbGliIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvZm9ybS9pbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL3RleHRhcmVhLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL2hhbmRsZS1yZXNwb25zZS1qc29uLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3RfbGliIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3RfbGliIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYWN0aW9ucy9ib29rLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYWN0aW9ucy9ub3RpZmljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9hY3Rpb25zL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL2JyYW5kaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvbm8tbWF0Y2gudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvYWxlcnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvYW5pbWF0aW9ucy9mYWRlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vYnV0dG9uL2J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2J1dHRvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL3NlbGVjdGl6ZS1pbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9zd2l0Y2hlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9taWRkbGV3YXJlL2FwaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21pZGRsZXdhcmUvbW9kaWZ5LXJlc3BvbnNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yZWR1Y2Vycy9ub3RpZmljYXRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcmVkdWNlcnMvcGFnaW5hdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zdG9yZS9jb25maWd1cmUtc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC91dGlscy9oYW5kbGUtaW5pdGlhbC1zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL3BhcnNlLWZvcm0tZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1sb2dnZXIvbGliL2luZGV4LmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3RfbGliIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2lkZS1lZmZlY3QvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3RfbGliIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaHVtcHMvaHVtcHMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIF91dGlsc19saWIiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1icm93c2VyaWZ5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfdXRpbHNfbGliIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvbGF5b3V0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvbG9hZGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9uYXYtdGFiLnRzeCIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWNzcy1tb2R1bGVzL2Rpc3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9saWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0NvbG9waG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYm9vay1pbmZvLXBvcHVwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYm9vay1saXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYm9vay1wYWdlLWxpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9ib29rLXBhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9ib29rLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvY2FuZHktYm94LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvdmlld2VyLXByZWZlcmVuY2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL3ZpZXdlci1wcmVmZXJlbmNlL3ZpZXdlci1wcmVmZXJlbmNlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvdmlld2VyLXNjcm9sbGJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL2FwcC9hcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9hcHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL2FyY2hpdmUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9hcmNoaXZlZC1jb2xsZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvYm9vay1pbmZvLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvYm9vay1zaGVsZi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL2NvbGxlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9ob21lL2hvbWUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9ob21lL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9wcm9maWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvcm9vdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL3NldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvc2lnbmluLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvc2lnbnVwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvdmlld2VyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy92aWV3ZXIvdmlld2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL0RpYWxvZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbnRyeS9hcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcm91dGVzL2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC91dGlscy9jYWNoZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL29iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL3JlbmRlci1ib29rLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9hcHAvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL2hvbWUvaG9tZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RDQSw4Qzs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7O1NBQ2dCO1NBT0E7QUFQVCxVQUFTLFdBQVQsQ0FBcUIsSUFBckIsRUFBMkIsS0FBM0IsRUFBa0M7QUFDckMsWUFBTztBQUNILGVBQU0sY0FBTjtBQUNBLG1CQUZHO0FBR0gscUJBSEc7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QUE0QjtBQUM1QixvQkFBTyxpQkFBaUIsVUFBakIsSUFBK0IsTUFBTSxNQUFNLE1BQU4sRUFBYztBQUN0RCxrQ0FBaUIsWUFBWSxDQUFaLENBQWpCLENBRHNEO0FBRXRELHFCQUZzRDtjQUExRDtBQUlBLDRCQUFlLElBQUksQ0FBSixDQUxhO1VBQWhDLE1BT0s7QUFDRCw0QkFBZSxjQUFmLENBREM7VUFQTDtBQVVBLGNBQUssSUFBSSxLQUFJLGNBQUosRUFBb0IsTUFBSyxZQUFMLElBQXFCLE1BQUssTUFBTSxNQUFOLEdBQWUsQ0FBZixFQUFrQixJQUF6RSxFQUE4RTtBQUMxRSx1QkFBVSxJQUFWLENBQWUsTUFBTSxFQUFOLENBQWYsRUFEMEU7VUFBOUU7QUFHQSxnQkFBTyxDQUFDLFNBQUQsRUFBWSxNQUFaLENBQVAsQ0F0QndDO01BQXJCOztBQWhDK0IsVUF5RGpELElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxPQUFKLEVBQWEsR0FBN0IsRUFBa0M7QUFDOUIsYUFBSSxRQUFRLGVBQWUsQ0FBZixDQUFSLENBRDBCO0FBRTlCLGFBQUksU0FBUSxNQUFNLENBQU4sQ0FBUixDQUYwQjtBQUc5QixhQUFJLFNBQVMsTUFBTSxDQUFOLENBQVQsQ0FIMEI7QUFJOUIsZUFBTSxJQUFOLENBQVc7QUFDUCxvQkFBTztBQUNILDJCQUFVLE1BQVY7QUFDQSx3QkFBTztBQUNILDBCQUFLLElBQUksVUFBSjtBQUNMLCtCQUFVLFVBQVY7QUFDQSw2QkFBUSxVQUFSO2tCQUhKO0FBS0EseUJBQVEsSUFBSSxDQUFKO0FBQ1IsK0JBUkc7Y0FBUDtBQVVBLG1CQUFNLE1BQU47VUFYSixFQUo4QjtNQUFsQztBQWtCQSxZQUFPLEtBQVAsQ0EzRXNEOzs7Ozs7O0FDOUYxRCwwQzs7Ozs7O0FDQUE7QUFDQSxtQkFBa0IsMEIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBkMDZiN2E5ZmQzMzZkN2YxZjE0ZVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oNCkpKDEpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3RfbGliXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDQpKSg0NDkpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2xpYlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwiZXhwb3J0ICogZnJvbSAnLi4vYWN0aW9ucy9ib29rJztcbmV4cG9ydCAqIGZyb20gJy4uL2FjdGlvbnMvbm90aWZpY2F0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4uL2FjdGlvbnMvdXNlcic7XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVmFsdWUobmFtZSwgdmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnQ0hBTkdFX1ZBTFVFJyxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdmFsdWVcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQobmFtZSwgZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdVUERBVEVfRUxFTUVOVCcsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRhdGFcbiAgICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2FjdGlvbnMvaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9yZWFjdF9saWI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIl9yZWFjdF9saWJcIlxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg0KSkoNjAwKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3RfbGliXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDgpKSg2NzgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3V0aWxzX2xpYlxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgU2VsZWN0aXplSW5wdXQgZnJvbSAnLi9zZWxlY3RpemUtaW5wdXQnO1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vdGV4dGFyZWEnO1xuZXhwb3J0IHsgQnV0dG9uLCBJbnB1dCwgU2VsZWN0aXplSW5wdXQsIFRleHRhcmVhIH07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvZm9ybS9pbmRleC50c3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF91dGlsc19saWI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIl91dGlsc19saWJcIlxuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwiY29uc3QgSE9TVCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LmxvY2F0aW9uLm9yaWdpbiA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xuY29uc3QgQXBpUm9vdHMgPSB7XG4gICAgTE9DQUw6IGAke0hPU1R9L2FwaS9gLFxuICAgIERPVUJBTl9CT09LUzogJ2h0dHBzOi8vYXBpLmRvdWJhbi5jb20vdjIvYm9vay8nXG59O1xuZXhwb3J0IGRlZmF1bHQgQXBpUm9vdHM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvYXBpLWNvbmZpZy9hcGktcm9vdHMudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTaWRlRWZmZWN0IGZyb20gJ3JlYWN0LXNpZGUtZWZmZWN0JztcbmNsYXNzIEJvZHkgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyZWFjdC1ib2R5LWNsYXNzIGhpZGRlblwifSk7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVkdWNlUHJvcHNUb1N0YXRlKHByb3BzTGlzdCkge1xuICAgIGxldCBjbGFzc05hbWU7XG4gICAgcHJvcHNMaXN0LmZvckVhY2goZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NOYW1lO1xufVxuZnVuY3Rpb24gaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudChjbGFzc05hbWUpIHtcbiAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCB3aXRoU2lkZUVmZmVjdChyZWR1Y2VQcm9wc1RvU3RhdGUsIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQpKEJvZHkpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3NpZGUtZWZmZWN0cy9ib2R5LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5jbGFzcyBJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG5hbWUgPSB0aGlzLnByb3BzLm5hbWU7XG4gICAgICAgIGxldCBtZXRob2QgPSB0aGlzLnByb3BzLm9uQ2xpY2s7XG4gICAgICAgIGxldCBzaXplID0gdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IGBpY29uIGljb24tJHtuYW1lfSAke3NpemV9YCwgb25DbGljazogbWV0aG9kfSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEljb247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvaWNvbi50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSAodGhpcy5wcm9wcy5pc0ZsdWlkID8gJ2NvbnRhaW5lci1mbHVpZCcgOiAnY29udGFpbmVyJykgKyAodGhpcy5wcm9wcy5jbGFzc05hbWUgPyBgICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YCA6ICcnKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0sIHRoaXMucHJvcHMuY2hpbGRyZW4pKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvbGF5b3V0L2NvbnRhaW5lci50c3hcbiAqKi8iLCJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IG9iamVjdFRvVXJsZW5jb2RlZCBmcm9tICcuLi91dGlscy9wYXJzZS1mb3JtLWRhdGEnO1xuaW1wb3J0IGhhbmRsZVJlc3BvbnNlSnNvbiBmcm9tICcuLi91dGlscy9oYW5kbGUtcmVzcG9uc2UtanNvbic7XG5jb25zdCBkZWZhdWx0Q29uZmlnID0ge1xuICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xufTtcbmV4cG9ydCBmdW5jdGlvbiBjYWxsQXBpKGZ1bGxVcmwsIGNvbmZpZyA9IHt9KSB7XG4gICAgLy8gcmV0dXJuIGZldGNoIGNvbmZpZ1xuICAgIGNvbnN0IHBhcnNlQ29uZmlnID0gKG9yaWdpbmFuQ29uZmlnKSA9PiB7XG4gICAgICAgIGxldCB7IG1ldGhvZCwgZGF0YSwgY3JlZGVudGlhbHMsIGRhdGFUeXBlIH0gPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0Q29uZmlnLCBvcmlnaW5hbkNvbmZpZyk7XG4gICAgICAgIGxldCBmZXRjaENvbmZpZyA9IHt9O1xuICAgICAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgICAgICBmZXRjaENvbmZpZy5tZXRob2QgPSBtZXRob2Q7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgICBmZXRjaENvbmZpZy5jcmVkZW50aWFscyA9IGNyZWRlbnRpYWxzO1xuICAgICAgICB9XG4gICAgICAgIC8vIGhhbmRsZSByZXF1ZXN0IGhlYWRlcnMgYW5kIGJvZHlcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgICAgICBsZXQgY29udGVudFR5cGU7XG4gICAgICAgICAgICBsZXQgYm9keTtcbiAgICAgICAgICAgIGlmIChkYXRhVHlwZSA9PT0gJ2pzb24nKSB7XG4gICAgICAgICAgICAgICAgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YVR5cGUgPT09ICd1cmxlbmNvZGVkJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG4gICAgICAgICAgICAgICAgYm9keSA9IG9iamVjdFRvVXJsZW5jb2RlZChkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSB1bnN1cHBvcnRlZCBkYXRhVHlwZVxuICAgICAgICAgICAgICAgIGRhdGFUeXBlID0gJ3VybGVuY29kZWQnO1xuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG4gICAgICAgICAgICAgICAgYm9keSA9IG9iamVjdFRvVXJsZW5jb2RlZChkYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1Vuc3VwcG9ydGVkIGRhdGFUeXBlIHVzZWQgXCJ1cmxlbmNvZGVkXCIgaW5zdGVhZCEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZldGNoQ29uZmlnLmhlYWRlcnMgPSB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IGNvbnRlbnRUeXBlLFxuICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1SZXF1ZXN0LU1ldGhvZCc6ICdQT1NUJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZldGNoQ29uZmlnLmJvZHkgPSBib2R5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgPT09ICdERUxFVEUnKSB7XG4gICAgICAgICAgICBmZXRjaENvbmZpZy5oZWFkZXJzID0ge1xuICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1SZXF1ZXN0LU1ldGhvZCc6ICdERUxFVEUnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaENvbmZpZztcbiAgICB9O1xuICAgIHJldHVybiBmZXRjaChmdWxsVXJsLCBwYXJzZUNvbmZpZyhjb25maWcpKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbihqc29uID0+ICh7IGpzb24sIHJlc3BvbnNlIH0pKTtcbiAgICB9KVxuICAgICAgICAudGhlbigoeyBqc29uLCByZXNwb25zZSB9KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVJlc3BvbnNlSnNvbihqc29uLCBjb25maWcuc2NoZW1hKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChqc29uKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgY2FsbEFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9jYWxsLWFwaS50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oNCkpKDQ1NSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3RfbGliXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IEJvb2tMaXN0IGZyb20gJy4vYm9vay1saXN0JztcbmNsYXNzIEJvb2tMaXN0U2VjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgdGl0bGUgPSB0aGlzLnByb3BzLnRpdGxlO1xuICAgICAgICBsZXQgbW9yZUxpbmsgPSB0aGlzLnByb3BzLm1vcmVMaW5rID8gdGhpcy5wcm9wcy5tb3JlTGluayA6IG51bGw7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImJvb2stbGlzdC1zZWN0aW9uXCJ9LCB0aGlzLnByb3BzLnRpdGxlICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwge2NsYXNzTmFtZTogXCJzZWN0aW9uLXRpdGxlXCJ9LCB0aXRsZSkpLCBtb3JlTGluayA/IChSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHtjbGFzc05hbWU6IFwibW9yZVwiLCB0bzogbW9yZUxpbmt9LCBcIuafpeeci+abtOWkmlwiKSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tMaXN0LCB7Ym9va0VudGl0aWVzOiB0aGlzLnByb3BzLmJvb2tFbnRpdGllc30pKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQm9va0xpc3RTZWN0aW9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYm9vay1saXN0LXNlY3Rpb24udHN4XG4gKiovIiwiaW1wb3J0IHsgU2NoZW1hLCBhcnJheU9mIH0gZnJvbSAnbm9ybWFsaXpyJztcbmNvbnN0IGJvb2sgPSBuZXcgU2NoZW1hKCdib29rcycsIHtcbiAgICBpZEF0dHJpYnV0ZTogJ2lkJ1xufSk7XG5jb25zdCBjb2xsZWN0aW9uID0gbmV3IFNjaGVtYSgnYm9va0NvbGxlY3Rpb25zJywge1xuICAgIGlkQXR0cmlidXRlOiAnaWQnXG59KTtcbmNvbnN0IHByb2ZpbGUgPSBuZXcgU2NoZW1hKCdwcm9maWxlcycsIHtcbiAgICBpZEF0dHJpYnV0ZTogJ2lkJ1xufSk7XG5jb25zdCB1c2VyID0gbmV3IFNjaGVtYSgndXNlcnMnLCB7XG4gICAgaWRBdHRyaWJ1dGU6ICdpZCdcbn0pO1xuY29uc3QgZG91YmFuQm9vayA9IG5ldyBTY2hlbWEoJ2RvdWJhbkJvb2tzJywge1xuICAgIGlkQXR0cmlidXRlOiAnaWQnXG59KTtcbmNvbnN0IGJvb2tQcm9ncmVzcyA9IG5ldyBTY2hlbWEoJ2Jvb2tzJywge1xuICAgIGlkQXR0cmlidXRlOiAnYm9va0lkJ1xufSk7XG5jb25zdCBtYXRjaGVkQm9va3MgPSBuZXcgU2NoZW1hKCdib29rcycsIHtcbiAgICBpZEF0dHJpYnV0ZTogJ2Jvb2tJZCdcbn0pO1xuZXhwb3J0IGNvbnN0IFNjaGVtYXMgPSB7XG4gICAgQk9PSzogYm9vayxcbiAgICBCT09LX1BST0dSRVNTOiBib29rUHJvZ3Jlc3MsXG4gICAgQk9PS19BUlJBWTogYXJyYXlPZihib29rKSxcbiAgICBET1VCQU5fQk9PS19TRUFSQ0hfUkVTVUxUUzogeyBib29rczogYXJyYXlPZihkb3ViYW5Cb29rKSB9LFxuICAgIFVTRVJfQVJSQVk6IGFycmF5T2YodXNlciksXG4gICAgTUFUQ0hFRF9CT09LX0FSUkFZOiBhcnJheU9mKG1hdGNoZWRCb29rcyksXG4gICAgQ09MTEVDVElPTjogY29sbGVjdGlvbixcbiAgICBDT0xMRUNUSU9OX0FSUkFZOiBhcnJheU9mKGNvbGxlY3Rpb24pLFxuICAgIFBST0ZJTEU6IHByb2ZpbGVcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvc2NoZW1hcy9pbmRleC50c1xuICoqLyIsImltcG9ydCBjYWxsQXBpIGZyb20gJy4vY2FsbC1hcGknO1xuaW1wb3J0IEFwaVJvb3RzIGZyb20gJy4uL2FwaS1jb25maWcvYXBpLXJvb3RzJztcbmV4cG9ydCBmdW5jdGlvbiBhZGRDb2xsZWN0aW9uKGRhdGEpIHtcbiAgICByZXR1cm4gY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1jb2xsZWN0aW9uc2AsIHsgbWV0aG9kOiAnUE9TVCcsIGRhdGE6IGRhdGEgfSk7XG59XG4vKipcbiAqIGRhdGE6IG5hbWUsIGF1dGhvciwgZGVzY3JpcHRpb24sIGNvdmVyLCBjb250ZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRCb29rKGRhdGEpIHtcbiAgICByZXR1cm4gY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1ib29rc2AsIHsgbWV0aG9kOiAnUE9TVCcsIGRhdGE6IGRhdGEgfSk7XG59XG4vKipcbiAqIGRhdGE6IG5hbWUsIHNsdWcsIGRlc2NyaXB0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRBdXRob3IoZGF0YSkge1xuICAgIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWF1dGhvcnNgLCB7IG1ldGhvZDogJ1BPU1QnLCBkYXRhOiBkYXRhIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEF1dGhvcnMocXVlcnkpIHtcbiAgICByZXR1cm4gY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1hdXRob3JzP3E9JHtxdWVyeX1gKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hCb29rcyhxdWVyeSkge1xuICAgIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWJvb2tzP3E9JHtxdWVyeX1gKTtcbn1cbi8qKlxuICogZGF0YTogcGFnZU5vLCBwYWdlU3VtLCBwZXJjZW50YWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9ncmVzcyhib29rSWQsIGRhdGEpIHtcbiAgICBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWJvb2tzLyR7Ym9va0lkfS9wcm9ncmVzc2AsIHsgbWV0aG9kOiAnUE9TVCcsIGRhdGEgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQm9vayhpZCkge1xuICAgIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWJvb2tzLyR7aWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnXG4gICAgfSk7XG59XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYWRkQ29sbGVjdGlvbixcbiAgICBhZGRCb29rLFxuICAgIGFkZEF1dGhvcixcbiAgICBzZWFyY2hCb29rcyxcbiAgICBzZWFyY2hBdXRob3JzLFxuICAgIHNldFByb2dyZXNzLFxuICAgIGRlbGV0ZUJvb2tcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvdXRpbHMvYXBpcy50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oNCkpKDY3Myk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2xpYlxuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oOCkpKDY4MCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbm9ybWFsaXpyL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3V0aWxzX2xpYlxuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5jbGFzcyBJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZSA/IGBpbnB1dC13cmFwICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YCA6ICdpbnB1dC13cmFwJztcbiAgICAgICAgbGV0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5jbGFzc05hbWU7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3BsYWNlaG9sZGVyOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyLCB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSwgb25DaGFuZ2U6IGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcbiAgICAgICAgfSwgdHlwZTogdGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ3RleHQnLCBuYW1lOiB0aGlzLnByb3BzLm5hbWUgPyB0aGlzLnByb3BzLm5hbWUgOiBudWxsfSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2lucHV0LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5jbGFzcyBUZXh0YXJlYSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZSA/IGB0ZXh0YXJlYS13cmFwICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YCA6ICd0ZXh0YXJlYS13cmFwJztcbiAgICAgICAgbGV0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5jbGFzc05hbWU7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwge3BsYWNlaG9sZGVyOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyLCB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSwgb25DaGFuZ2U6IGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcbiAgICAgICAgfSwgdHlwZTogdGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ3RleHQnLCBuYW1lOiB0aGlzLnByb3BzLm5hbWUgPyB0aGlzLnByb3BzLm5hbWUgOiBudWxsfSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL3RleHRhcmVhLnRzeFxuICoqLyIsImltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gJ25vcm1hbGl6cic7XG5pbXBvcnQgaHVtcHMgZnJvbSAnaHVtcHMnO1xuZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2VKc29uKGpzb24sIHNjaGVtYSkge1xuICAgIGpzb24gPSBodW1wcy5jYW1lbGl6ZUtleXMoanNvbik7XG4gICAgbGV0IHJlc3VsdCA9IGpzb247XG4gICAgaWYgKHR5cGVvZiBzY2hlbWEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIG5vcm1hbGl6ZShqc29uLCBzY2hlbWEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZVJlc3BvbnNlSnNvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9oYW5kbGUtcmVzcG9uc2UtanNvbi50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oNCkpKDM4KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9saWJcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDQpKSg1OTMpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2xpYlxuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsImltcG9ydCB7IFNjaGVtYXMgfSBmcm9tICcuLi9zY2hlbWFzJztcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEJvb2tQcm9ncmVzcyhib29rSWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBib29rSWQsXG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydCT09LX1BST0dSRVNTX1JFUVVFU1QnLCAnQk9PS19QUk9HUkVTU19TVUNDRVNTJywgJ0JPT0tfUFJPR1JFU1NfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGBib29rcy8ke2Jvb2tJZH0vcHJvZ3Jlc3NgLFxuICAgICAgICAgICAgc2NoZW1hOiBTY2hlbWFzLkJPT0tfUFJPR1JFU1NcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hCb29rcyhmbG93VHlwZSA9ICduZXdlc3QnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gZm9yIHBhZ2luYXRlXG4gICAgICAgIGZsb3dUeXBlLFxuICAgICAgICBDQUxMX0FQSToge1xuICAgICAgICAgICAgdHlwZXM6IFsnQk9PS1NfUkVRVUVTVCcsICdCT09LU19TVUNDRVNTJywgJ0JPT0tTX0ZBSUxVUkUnXSxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgYm9va3M/ZXhjbHVkZT1jb250ZW50YCxcbiAgICAgICAgICAgIHNjaGVtYTogU2NoZW1hcy5CT09LX0FSUkFZLFxuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEJvb2soYm9va0lkLCBmaWVsZHMpIHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgYm9va3MvJHtib29rSWR9YDtcbiAgICBpZiAoZmllbGRzKSB7XG4gICAgICAgIGVuZHBvaW50ICs9IGA/ZmllbGRzPSR7ZmllbGRzLmpvaW4oJywnKX1gO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBib29rSWQsXG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydCT09LX1JFUVVFU1QnLCAnQk9PS19TVUNDRVNTJywgJ0JPT0tfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQsXG4gICAgICAgICAgICBzY2hlbWE6IFNjaGVtYXMuQk9PS1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENvbGxlY3Rpb25zKGZsb3dUeXBlID0gJ25ld2VzdCcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBmbG93VHlwZSxcbiAgICAgICAgQ0FMTF9BUEk6IHtcbiAgICAgICAgICAgIHR5cGVzOiBbJ0NPTExFQ1RJT05TX1JFUVVFU1QnLCAnQ09MTEVDVElPTlNfU1VDQ0VTUycsICdDT0xMRUNUSU9OU19GQUlMVVJFJ10sXG4gICAgICAgICAgICBlbmRwb2ludDogYGNvbGxlY3Rpb25zYCxcbiAgICAgICAgICAgIHNjaGVtYTogU2NoZW1hcy5DT0xMRUNUSU9OX0FSUkFZXG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQ29sbGVjdGlvbihjb2xsZWN0aW9uSWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb2xsZWN0aW9uSWQsXG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydDT0xMRUNUSU9OX1JFUVVFU1QnLCAnQ09MTEVDVElPTl9TVUNDRVNTJywgJ0NPTExFQ1RJT05fRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGBjb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb25JZH1gLFxuICAgICAgICAgICAgc2NoZW1hOiBTY2hlbWFzLkNPTExFQ1RJT05cbiAgICAgICAgfVxuICAgIH07XG59XG4vLyBleHBvcnQgZnVuY3Rpb24gZmV0Y2hCb29rQ29udGVudChib29rSWQpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBib29rSWQsXG4vLyAgICAgQ0FMTF9BUEk6IHtcbi8vICAgICAgIHR5cGVzOiBbJ0JPT0tfQ09OVEVOVF9SRVFVRVNUJywgJ0JPT0tfQ09OVEVOVF9TVUNDRVNTJywgJ0JPT0tfQ09OVEVOVF9GQUlMVVJFJ10sXG4vLyAgICAgICBlbmRwb2ludDogYGJvb2tzLyR7Ym9va0lkfS9jb250ZW50YCxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5CT09LXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG4vL1xuLy8gZXhwb3J0IGZ1bmN0aW9uIGZldGNoQm9va0luZm8oYm9va0lkKSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgYm9va0lkLFxuLy8gICAgIENBTExfQVBJOntcbi8vICAgICAgIHR5cGVzOiBbJ0JPT0tfSU5GT19SRVFVRVNUJywgJ0JPT0tfSU5GT19TVUNDRVNTJywgJ0JPT0tfSU5GT19GQUlMVVJFJ10sXG4vLyAgICAgICBlbmRwb2ludDogYGJvb2tzLyR7Ym9va0lkfWAsXG4vLyAgICAgICBzY2hlbWE6IFNjaGVtYXMuQk9PS19BUlJBWVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuLy8gZXhwb3J0IGZ1bmN0aW9uIGZldGNoRG91YmFuQm9va1NlYXJjaFJlc3VsdHMocXVlcnkpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBxdWVyeSxcbi8vICAgICBDQUxMX0FQSToge1xuLy8gICAgICAgdHlwZXM6IFsnRE9VQkFOX0JPT0tfU0VBUkNIX1JFUVVFU1QnLCAnRE9VQkFOX0JPT0tfU0VBUkNIX1NVQ0NFU1MnLCAnRE9VQkFOX0JPT0tfU0VBUkNIX0ZBSUxVUkUnXSxcbi8vICAgICAgIGVuZHBvaW50OiBgc2VhcmNoP2NvdW50PTUmcT0ke3F1ZXJ5fWAsXG4vLyAgICAgICBhcGlVcmw6IEFwaVJvb3RzLkRPVUJBTl9CT09LUyxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5ET1VCQU5fQk9PS19TRUFSQ0hfUkVTVUxUUyxcbi8vICAgICAgIGV4dGVuZGVkT3B0aW9uczogeyB1c2VKc29ucDogdHJ1ZSB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG4vLyBleHBvcnQgZnVuY3Rpb24gc2VhcmNoQm9va3MocXVlcnkpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBxdWVyeSxcbi8vICAgICBDQUxMX0FQSToge1xuLy8gICAgICAgdHlwZXM6IFsnQk9PS19TRUFSQ0hfUkVRVUVTVCcsICdCT09LX1NFQVJDSF9TVUNDRVNTJywgJ0JPT0tfU0VBUkNIX0ZBSUxVUkUnXSxcbi8vICAgICAgIGVuZHBvaW50OiBgc2VhcmNoP3E9JHtxdWVyeX1gLFxuLy8gICAgICAgYXBpVXJsOiBBcGlSb290cy5MT0NBTCxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5NQVRDSEVEX0JPT0tfQVJSQVlcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9hY3Rpb25zL2Jvb2sudHNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gc2VuZE5vdGlmaWNhdGlvbihtZXNzYWdlLCBtc2dUeXBlID0gJ3N1Y2Nlc3MnLCB0ID0gNTAwMCkge1xuICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gTWF0aC5yYW5kb20oKS50b0ZpeGVkKDgpLnN1YnN0cigyKTtcbiAgICAgICAgZGlzcGF0Y2goc2hvd05vdGlmaWNhdGlvbihpZCwgbWVzc2FnZSwgbXNnVHlwZSkpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGhpZGVOb3RpZmljYXRpb24oaWQpKTtcbiAgICAgICAgfSwgdCk7XG4gICAgfTtcbn1cbmV4cG9ydCBjb25zdCBTSE9XX05PVElGSUNBVElPTiA9ICdTSE9XX05PVElGSUNBVElPTic7XG5leHBvcnQgZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbihpZCwgbWVzc2FnZSwgbXNnVHlwZSA9ICdzdWNjZXNzJykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFNIT1dfTk9USUZJQ0FUSU9OLFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICBtc2dUeXBlLFxuICAgICAgICBpZFxuICAgIH07XG59XG5leHBvcnQgY29uc3QgSElERV9OT1RJRklDQVRJT04gPSAnSElERV9OT1RJRklDQVRJT04nO1xuZXhwb3J0IGZ1bmN0aW9uIGhpZGVOb3RpZmljYXRpb24oaWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBISURFX05PVElGSUNBVElPTixcbiAgICAgICAgaWRcbiAgICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2FjdGlvbnMvbm90aWZpY2F0aW9uLnRzXG4gKiovIiwiaW1wb3J0IHsgU2NoZW1hcyB9IGZyb20gJy4uL3NjaGVtYXMvaW5kZXgnO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZXJBdXRoKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydVU0VSX0FVVEhfUkVRVUVTVCcsICdVU0VSX0FVVEhfU1VDQ0VTUycsICdVU0VSX0FVVEhfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6ICdhdXRoJ1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFByb2ZpbGUoaWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBDQUxMX0FQSToge1xuICAgICAgICAgICAgdHlwZXM6IFsnUFJPRklMRV9SRVFVRVNUJywgJ1BST0ZJTEVfU1VDQ0VTUycsICdQUk9GSUxFX0ZBSUxVUkUnXSxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgdXNlcnMvJHtpZH0vcHJvZmlsZWAsXG4gICAgICAgICAgICBzY2hlbWE6IFNjaGVtYXMuUFJPRklMRVxuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFVzZXJMaXN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydVU0VSX0xJU1RfUkVRVUVTVCcsICdVU0VSX0xJU1RfU1VDQ0VTUycsICdVU0VSX0xJU1RfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6ICd1c2VycycsXG4gICAgICAgICAgICBzY2hlbWE6IFNjaGVtYXMuVVNFUl9BUlJBWVxuICAgICAgICB9XG4gICAgfTtcbn1cbi8vIGV4cG9ydCBmdW5jdGlvbiBmZXRjaFNoZWxmKHVzZXJJZCkge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHVzZXJJZCxcbi8vICAgICBDQUxMX0FQSToge1xuLy8gICAgICAgdHlwZXM6IFsnU0hFTEZfUkVRVUVTVCcsICdTSEVMRl9TVUNDRVNTJywgJ1NIRUxGX0ZBSUxVUkUnXSxcbi8vICAgICAgIGVuZHBvaW50OiBgdXNlcnMvJHt1c2VySWR9L3NoZWxmYCxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5CT09LX0FSUkFZLFxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoU2hlbGYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF5bG9hZDogJ2Jvb2tTaGVsZicsXG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydTSEVMRl9SRVFVRVNUJywgJ1NIRUxGX1NVQ0NFU1MnLCAnU0hFTEZfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGB1c2VyL2Jvb2tzL3NoZWxmYCxcbiAgICAgICAgfVxuICAgIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvYWN0aW9ucy91c2VyLnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vZWxlbWVudHMvbGF5b3V0JztcbmNsYXNzIEJyYW5kaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc0Ryb3Bkb3duTWVudVZpc2libGU6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvZ2dsZURyb3Bkb3duTWVudSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0Ryb3Bkb3duTWVudVZpc2libGU6ICF0aGlzLnN0YXRlLmlzRHJvcGRvd25NZW51VmlzaWJsZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgdXNlcm5hbWUgPSB0aGlzLnByb3BzLnVzZXJuYW1lO1xuICAgICAgICBsZXQgaXNBZG1pbiA9IHRoaXMucHJvcHMuaXNBZG1pbiA/IHRoaXMucHJvcHMuaXNBZG1pbiA6IGZhbHNlO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogYGJyYW5kaW5nICR7dGhpcy5wcm9wcy5jbGFzc05hbWUgPyB0aGlzLnByb3BzLmNsYXNzTmFtZSA6ICcnfWB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwge2NsYXNzTmFtZTogXCJjbGVhcmZpeFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge2NsYXNzTmFtZTogXCJsb2dvIGxlZnRcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcIi9cIn0sIFwicmVhZHJcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibmF2IGxlZnRcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcIm5hdi1saW5rc1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcIi9icm93c2VcIn0sIFwi5rWP6KeIXCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcIi9jb2xsZWN0aW9uc1wifSwgXCLkuabljZVcIikpKSksIHVzZXJuYW1lID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge29uTW91c2VMZWF2ZTogdGhpcy50b2dnbGVEcm9wZG93bk1lbnUuYmluZCh0aGlzKSwgb25Nb3VzZUVudGVyOiB0aGlzLnRvZ2dsZURyb3Bkb3duTWVudS5iaW5kKHRoaXMpLCBjbGFzc05hbWU6IFwibmF2IHJpZ2h0XCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcInJlY2VudC1yZWFkaW5nXCJ9LCBcIuacgOi/kemYheivu1wiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJ1c2VybmFtZVwifSwgdXNlcm5hbWUsIGlzQWRtaW4gPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJiYWRnZS1kYXJrXCJ9LCBcIkFkbWluXCIpKSA6IG51bGwpLCB0aGlzLnN0YXRlLmlzRHJvcGRvd25NZW51VmlzaWJsZSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge29uQ2xpY2s6IHRoaXMudG9nZ2xlRHJvcGRvd25NZW51LmJpbmQodGhpcyksIGNsYXNzTmFtZTogXCJkcm9wZG93bi1tZW51XCJ9LCBpc0FkbWluID09PSB0cnVlID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCIvY29uc29sZVwifSwgXCLmjqfliLblj7BcIikpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogYC9zaGVsZmB9LCBcIuS5puaetlwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogYC9wcm9maWxlYH0sIFwi5Liq5Lq65Li76aG1XCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBgL3NldHRpbmdzYH0sIFwi6K6+572uXCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiAnL2xvZ291dCd9LCBcIumAgOWHulwiKSkpKSA6IG51bGwpKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibmF2IHJpZ2h0XCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJuYXYtbGlua3NcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvc2lnbmluXCJ9LCBcIueZu+W9lVwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvc2lnbnVwXCJ9LCBcIuazqOWGjFwiKSkpKSkpKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJyYW5kaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYnJhbmRpbmcudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmNsYXNzIE5vTWF0Y2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgXCI0MDRcIikpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE5vTWF0Y2g7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9uby1tYXRjaC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vZWxlbWVudHMvaWNvbic7XG5jbGFzcyBOb3RpZmljYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMucHJvcHMudHlwZSA/IHRoaXMucHJvcHMudHlwZSA6ICdzdWNjZXNzJztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIHRoaXMucHJvcHMudmlzaWJsZSAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBgbm90aWZpY2F0aW9uIG5vdGlmaWNhdGlvbi0tJHt0eXBlfSB6MWAudHJpbSgpfSwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7b25DbGljazogdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZSwgbmFtZTogXCJjbG9zZVwifSksIHRoaXMucHJvcHMubWVzc2FnZSkpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2FsZXJ0LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJztcbmNsYXNzIEZhZGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWU/dGhpcy5wcm9wcy5jbGFzc05hbWU6bnVsbFxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAsIHtjb21wb25lbnQ6IFwiZGl2XCIsIHRyYW5zaXRpb25OYW1lOiBcImZhZGVcIiwgdHJhbnNpdGlvbkVudGVyVGltZW91dDogMzAwLCB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0OiAzMDB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRmFkZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9hbmltYXRpb25zL2ZhZGUudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZSA/IGBidG4gJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gIDogJ2J0bic7XG4gICAgICAgIGxldCBzaXplID0gdGhpcy5wcm9wcy5zaXplID8gdGhpcy5wcm9wcy5zaXplIDogJ21lZGl1bSc7XG4gICAgICAgIGxldCBpc0ZsdWlkID0gdGhpcy5wcm9wcy5pc0ZsdWlkID8gdGhpcy5wcm9wcy5pc0ZsdWlkIDogZmFsc2U7XG4gICAgICAgIGxldCBjb2xvciA9IHRoaXMucHJvcHMuY29sb3IgPyB0aGlzLnByb3BzLmNvbG9yIDogbnVsbDtcbiAgICAgICAgbGV0IG9uQ2xpY2s7XG4gICAgICAgIGlmIChzaXplID09PSAnc21hbGwnKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBidG4tc21hbGwnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNpemUgPT09ICdsYXJnZScpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIGJ0bi1sYXJnZSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2l6ZSA9PT0gJ21lZGl1bScpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIGJ0bi1tZWRpdW0nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5zdXBwb3J0IHNpemUhJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gYCBidG4tJHtjb2xvcn1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0ZsdWlkKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9IGJ0bi1mbHVpZGA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMudG8pIHtcbiAgICAgICAgICAgIG9uQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCh0aGlzLnByb3BzLnRvKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvbkNsaWNrID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWUgfSwgeyBvbkNsaWNrIH0pO1xuICAgICAgICBkZWxldGUgcHJvcHMudG87XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5jb2xvcjtcbiAgICAgICAgZGVsZXRlIHByb3BzLnNpemU7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5pc0ZsdWlkO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHByb3BzLCB0aGlzLnByb3BzLmNoaWxkcmVuKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vYnV0dG9uL2J1dHRvbi50c3hcbiAqKi8iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2J1dHRvbi9pbmRleC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vaWNvbic7XG5jbGFzcyBTZWxlY3RpemVJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvd09wdGlvbnM6IGZhbHNlLFxuICAgICAgICAgICAgZm9jdXM6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgZXhwZW5kZWRPcHRpb25JbmRleDogMFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhpZGVPcHRpb25zID0gdGhpcy5oaWRlT3B0aW9ucy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZvY3VzSW5wdXQgPSB0aGlzLmZvY3VzSW5wdXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaG93T3B0aW9ucyA9IHRoaXMuc2hvd09wdGlvbnMuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgYWRkVmFsdWUobmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblZhbHVlc0NoYW5nZSh0aGlzLnByb3BzLnZhbHVlcy5jb25jYXQobmV3VmFsdWUpKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSh0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiAob3B0aW9uLnZhbHVlID09PSBuZXdWYWx1ZS52YWx1ZVxuICAgICAgICAgICAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9uLCB7IGRpc2FibGVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgOiBvcHRpb24pKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGVhcklucHV0VmFsdWUoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnN0YXlGb2N1c2VkID09PSAndW5kZWZpbmVkJyB8fCB0aGlzLnByb3BzLnN0YXlGb2N1c2VkICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oaWRlT3B0aW9ucygpO1xuICAgIH1cbiAgICByZW1vdmVWYWx1ZShpbmRleCkge1xuICAgICAgICBsZXQgbmV3VmFsdWVzID0gW107XG4gICAgICAgIGxldCByZW1vdmVkVmFsdWU7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlcyA9IHRoaXMucHJvcHMudmFsdWVzLnNsaWNlKDAsIHRoaXMucHJvcHMudmFsdWVzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgcmVtb3ZlZFZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZXNbdGhpcy5wcm9wcy52YWx1ZXMubGVuZ3RoIC0gMV0udmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXdWYWx1ZXMgPSB0aGlzLnByb3BzLnZhbHVlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZW1vdmVkVmFsdWUgPSB2LnZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBpICE9PSBpbmRleDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UodGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHRpb24gPT4gKG9wdGlvbi52YWx1ZSA9PT0gcmVtb3ZlZFZhbHVlXG4gICAgICAgICAgICAgICAgPyBPYmplY3QuYXNzaWduKHt9LCBvcHRpb24sIHsgZGlzYWJsZWQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgOiBvcHRpb24pKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5vblZhbHVlc0NoYW5nZShuZXdWYWx1ZXMpO1xuICAgIH1cbiAgICBjbGVhcklucHV0VmFsdWUoKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25JbnB1dENoYW5nZSgnJyk7XG4gICAgfVxuICAgIGhhbmRsZUtleVByZXNzKGUpIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gOCAmJiAhdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZSgtMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdG9kb1xuICAgICAgICAvLyBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiB0aGlzLnN0YXRlLnNob3dPcHRpb25zKSB7XG4gICAgICAgIC8vICAgdGhpcy5hZGRWYWx1ZSgpXG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgZm9jdXNJbnB1dCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgIH1cbiAgICBoaWRlT3B0aW9ucygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93T3B0aW9uczogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNob3dPcHRpb25zKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93T3B0aW9uczogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZU9wdGlvbnMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZU9wdGlvbnMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IHRoaXMucHJvcHMubGFiZWwgPyB0aGlzLnByb3BzLmxhYmVsIDogbnVsbDtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZSA/IHRoaXMucHJvcHMudmFsdWUgOiAnJztcbiAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMucHJvcHMudmFsdWVzO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9ucyA/IHRoaXMucHJvcHMub3B0aW9ucyA6IFtdO1xuICAgICAgICBsZXQgaW5wdXRXaWR0aCA9IHZhbHVlcy5sZW5ndGggPiAwID8gKHZhbHVlLmxlbmd0aCA9PT0gMCA/IDE2IDogdmFsdWUubGVuZ3RoICogMTYpIDogJzEwMCUnO1xuICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSB2YWx1ZXMubGVuZ3RoID4gMCA/ICcnIDogdGhpcy5wcm9wcy5wbGFjZWhvbGRlcjtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICdzZWxlY3RpemUtaW5wdXQnICsgKHRoaXMuc3RhdGUuZm9jdXMgPT09IHRydWUgPyAnIGZvY3VzJyA6ICcnKSArICh2YWx1ZXMubGVuZ3RoID09PSAwID8gJyBlbXB0eScgOiAnJyk7XG4gICAgICAgIGxldCBhZGROZXdWYWx1ZSA9IHRoaXMucHJvcHMuYWRkTmV3VmFsdWUgPyB0aGlzLnByb3BzLmFkZE5ld1ZhbHVlIDogdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogYHNlbGVjdGl6ZS1pbnB1dC13cmFwICR7dGhpcy5wcm9wcy5jbGFzc05hbWUgPyB0aGlzLnByb3BzLmNsYXNzTmFtZSA6ICcnfWAudHJpbSgpfSwgbGFiZWwgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHtjbGFzc05hbWU6IFwiZm9ybS1sYWJlbFwifSwgbGFiZWwpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogY2xhc3NOYW1lLCBvbkNsaWNrOiBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgICAgICAgdGhpcy5zaG93T3B0aW9ucyhlKTtcbiAgICAgICAgfX0sIHZhbHVlcy5tYXAoKHYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtrZXk6IGluZGV4LCBjbGFzc05hbWU6IFwic2VsZWN0aXplLXRhZ1wifSwgdi5uYW1lLCBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHtzaXplOiAnc21hbGwnLCBuYW1lOiBcImNsb3NlXCIsIG9uQ2xpY2s6IGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWUoaW5kZXgpO1xuICAgICAgICAgICAgfX0pKSk7XG4gICAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3N0eWxlOiB7IHdpZHRoOiBpbnB1dFdpZHRoIH0sIHJlZjogcmVmID0+IHsgdGhpcy5pbnB1dCA9IHJlZjsgfSwgdmFsdWU6IHZhbHVlLCBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsIG9uQmx1cjogZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IGZhbHNlIH0pO1xuICAgICAgICB9LCBvbkZvY3VzOiBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1czogdHJ1ZSB9KTtcbiAgICAgICAgfSwgb25DaGFuZ2U6IGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfSwgb25LZXlEb3duOiBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlS2V5UHJlc3MoZSk7XG4gICAgICAgIH19KSksICh0aGlzLnN0YXRlLnNob3dPcHRpb25zKSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJzZWxlY3RpemUtcXVlcnktcmVzdWx0c1wifSwgb3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtrZXk6IGluZGV4LCBjbGFzc05hbWU6IFwiZGlzYWJsZWRcIn0sIG9wdGlvbi5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtrZXk6IGluZGV4LCBvbkNsaWNrOiBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFZhbHVlKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25PcHRpb25DbGljaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uT3B0aW9uQ2xpY2sob3B0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgb3B0aW9uLm5hbWUpKSk7XG4gICAgICAgIH0pLCBhZGROZXdWYWx1ZSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge29uQ2xpY2s6IGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFkZE5ld1ZhbHVlKHRoaXMucHJvcHMudmFsdWUpO1xuICAgICAgICB9LCBjbGFzc05hbWU6IFwiYWRkXCJ9LCBcIua3u+WKoCBcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCB0aGlzLnByb3BzLnZhbHVlKSkpIDogbnVsbCkpIDogbnVsbCkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGl6ZUlucHV0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vc2VsZWN0aXplLWlucHV0LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuY2xhc3MgU3dpdGNoZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5vbiA/ICdvbicgOiAnb2ZmJztcbiAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgJyBzd2l0Y2hlcic7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwic3dpdGNoZXItYnV0dG9uXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInN3aXRjaGVyLXRyYWNrXCJ9KSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShTd2l0Y2hlcik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvc3dpdGNoZXIudHN4XG4gKiovIiwiaW1wb3J0IGNhbGxBcGkgZnJvbSAnLi4vdXRpbHMvY2FsbC1hcGknO1xuaW1wb3J0IEFwaVJvb3RzIGZyb20gJy4uL2FwaS1jb25maWcvYXBpLXJvb3RzJztcbmV4cG9ydCBkZWZhdWx0IHN0b3JlID0+IG5leHQgPT4gYWN0aW9uID0+IHtcbiAgICBjb25zdCBDQUxMX0FQSSA9IGFjdGlvbi5DQUxMX0FQSTtcbiAgICBpZiAodHlwZW9mIENBTExfQVBJID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICAgIH1cbiAgICBsZXQgeyBlbmRwb2ludCwgYXBpVXJsLCBleHRlbmRlZE9wdGlvbnMgfSA9IENBTExfQVBJO1xuICAgIGNvbnN0IHsgdHlwZXMsIHNjaGVtYSB9ID0gQ0FMTF9BUEk7XG4gICAgY29uc3QgW3JlcXVlc3RUeXBlLCBzdWNjZXNzVHlwZSwgZmFpbHVyZVR5cGVdID0gdHlwZXM7XG4gICAgZnVuY3Rpb24gYWN0aW9uV2l0aChkYXRhKSB7XG4gICAgICAgIGNvbnN0IGZpbmFsQWN0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgYWN0aW9uLCBkYXRhKTtcbiAgICAgICAgZGVsZXRlIGZpbmFsQWN0aW9uLkNBTExfQVBJO1xuICAgICAgICByZXR1cm4gZmluYWxBY3Rpb247XG4gICAgfVxuICAgIG5leHQoYWN0aW9uV2l0aCh7IHR5cGU6IHJlcXVlc3RUeXBlIH0pKTtcbiAgICBpZiAodHlwZW9mIGVuZHBvaW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVuZHBvaW50ID0gZW5kcG9pbnQoc3RvcmUuZ2V0U3RhdGUoKSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYXBpVXJsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBhcGlVcmwgPSBBcGlSb290cy5MT0NBTDtcbiAgICB9XG4gICAgY29uc3QgZnVsbFVybCA9IGFwaVVybCArIGVuZHBvaW50O1xuICAgIGxldCBvcHRpb25zID0geyBzY2hlbWEgfTtcbiAgICBpZiAodHlwZW9mIGV4dGVuZGVkT3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIGV4dGVuZGVkT3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiBjYWxsQXBpKGZ1bGxVcmwsIG9wdGlvbnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICByZXR1cm4gbmV4dChhY3Rpb25XaXRoKHtcbiAgICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgICAgdHlwZTogc3VjY2Vzc1R5cGVcbiAgICAgICAgfSkpO1xuICAgIH0sIGVycm9yID0+IG5leHQoYWN0aW9uV2l0aCh7XG4gICAgICAgIHR5cGU6IGZhaWx1cmVUeXBlLFxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAnT29wcyEnXG4gICAgfSkpKTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvbWlkZGxld2FyZS9hcGkudHNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBzdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdET1VCQU5fQk9PS19TRUFSQ0hfU1VDQ0VTUyc6XG4gICAgICAgICAgICAvLyBUT0RPOiBjYW4gYmUgZml4ZWQgaW4gbm9ybWFsaXpyP1xuICAgICAgICAgICAgYWN0aW9uLnJlc3BvbnNlLnJlc3VsdCA9IGFjdGlvbi5yZXNwb25zZS5yZXN1bHQuYm9va3M7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBuZXh0KGFjdGlvbik7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L21pZGRsZXdhcmUvbW9kaWZ5LXJlc3BvbnNlLnRzXG4gKiovIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgcm91dGVyUmVkdWNlciBhcyByb3V0aW5nIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcbmltcG9ydCBub3RpZmljYXRpb25zIGZyb20gJy4vbm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgcGFnaW5hdGUgZnJvbSAnLi9wYWdpbmF0ZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuLy8gVXBkYXRlcyBhbiBlbnRpdHkgY2FjaGUgaW4gcmVzcG9uc2UgdG8gYW55IGFjdGlvbiB3aXRoIHJlc3BvbnNlLmVudGl0aWVzLlxuZnVuY3Rpb24gZW50aXRpZXMoc3RhdGUgPSB7IGJvb2tzOiB7fSwgdXNlcnM6IHt9LCBib29rQ29sbGVjdGlvbnM6IHt9IH0sIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24ucmVzcG9uc2UgJiYgYWN0aW9uLnJlc3BvbnNlLmVudGl0aWVzKSB7XG4gICAgICAgIHJldHVybiBfLm1lcmdlKHt9LCBzdGF0ZSwgYWN0aW9uLnJlc3BvbnNlLmVudGl0aWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xufVxuZnVuY3Rpb24gcGF5bG9hZHMoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbi5lcnJvciAmJiBhY3Rpb24ucGF5bG9hZCkge1xuICAgICAgICByZXR1cm4gXy5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICBbYWN0aW9uLnBheWxvYWRdOiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvclxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGFjdGlvbi5yZXNwb25zZSAmJiBhY3Rpb24ucGF5bG9hZCkge1xuICAgICAgICByZXR1cm4gXy5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICBbYWN0aW9uLnBheWxvYWRdOiB7XG4gICAgICAgICAgICAgICAgZGF0YTogYWN0aW9uLnJlc3BvbnNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG59XG4vLyBVcGRhdGVzIGVycm9yIG1lc3NhZ2UgdG8gbm90aWZ5IGFib3V0IHRoZSBmYWlsZWQgZmV0Y2hlcy5cbmZ1bmN0aW9uIGVycm9yTWVzc2FnZShzdGF0ZSA9IG51bGwsIGFjdGlvbikge1xuICAgIGNvbnN0IHsgdHlwZSwgZXJyb3IgfSA9IGFjdGlvbjtcbiAgICAvLyBpZiAodHlwZSA9PT0gQWN0aW9uVHlwZXMuUkVTRVRfRVJST1JfTUVTU0FHRSkge1xuICAgIC8vICAgcmV0dXJuIG51bGxcbiAgICAvLyB9XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBhY3Rpb24uZXJyb3I7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbn1cbmZ1bmN0aW9uIHNlc3Npb24oc3RhdGUgPSB7IHVzZXI6IHsgcm9sZTogJ3Zpc2l0b3InIH0gfSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdVU0VSX0FVVEhfUkVRVUVTVCc6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSAnVVNFUl9BVVRIX1NVQ0NFU1MnOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgdXNlcjogYWN0aW9uLnJlc3BvbnNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSAnVVNFUl9BVVRIX0ZBSUxVUkUnOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgdXNlcjogYWN0aW9uLnJlc3BvbnNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG4vLyBVcGRhdGVzIHRoZSBwYWdpbmF0aW9uIGRhdGEgZm9yIGRpZmZlcmVudCBhY3Rpb25zLlxuY29uc3QgcGFnaW5hdGlvbiA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgLy8gYm9va0xpc3Q6IHBhZ2luYXRlKHtcbiAgICAvLyAgIG1hcEFjdGlvblRvS2V5OiBhY3Rpb24gPT4gYWN0aW9uLmZpbHRlcixcbiAgICAvLyAgIHR5cGVzOiBbJ0JPT0tfTElTVF9SRVFVRVNUJywgJ0JPT0tfTElTVF9TVUNDRVNTJywgJ0JPT0tfTElTVF9GQUlMVVJFJ11cbiAgICAvLyB9KSxcbiAgICBib29rczogcGFnaW5hdGUoe1xuICAgICAgICBtYXBBY3Rpb25Ub0tleTogYWN0aW9uID0+IGFjdGlvbi5mbG93VHlwZSxcbiAgICAgICAgdHlwZXM6IFsnQk9PS1NfUkVRVUVTVCcsICdCT09LU19TVUNDRVNTJywgJ0JPT0tTX0ZBSUxVUkUnXVxuICAgIH0pLFxuICAgIGJvb2tDb2xsZWN0aW9uczogcGFnaW5hdGUoe1xuICAgICAgICBtYXBBY3Rpb25Ub0tleTogYWN0aW9uID0+IGFjdGlvbi5mbG93VHlwZSxcbiAgICAgICAgdHlwZXM6IFsnQ09MTEVDVElPTlNfUkVRVUVTVCcsICdDT0xMRUNUSU9OU19TVUNDRVNTJywgJ0NPTExFQ1RJT05TX0ZBSUxVUkUnXVxuICAgIH0pLFxuICAgIC8vIHNoZWxmOiBwYWdpbmF0ZSh7XG4gICAgLy8gICBtYXBBY3Rpb25Ub0tleTogYWN0aW9uID0+IGFjdGlvbi51c2VySWQsXG4gICAgLy8gICB0eXBlczogWydTSEVMRl9SRVFVRVNUJywgJ1NIRUxGX1NVQ0NFU1MnLCAnU0hFTEZfRkFJTFVSRSddXG4gICAgLy8gfSksXG4gICAgdXNlckxpc3Q6IHBhZ2luYXRlKHtcbiAgICAgICAgLy8gVE9ET1xuICAgICAgICBtYXBBY3Rpb25Ub0tleTogYWN0aW9uID0+ICdhbGwnLFxuICAgICAgICB0eXBlczogWydVU0VSX0xJU1RfUkVRVUVTVCcsICdVU0VSX0xJU1RfU1VDQ0VTUycsICdVU0VSX0xJU1RfRkFJTFVSRSddLFxuICAgIH0pLFxuICAgIGRvdWJhbkJvb2tTZWFyY2hSZXN1bHRzOiBwYWdpbmF0ZSh7XG4gICAgICAgIG1hcEFjdGlvblRvS2V5OiBhY3Rpb24gPT4gYWN0aW9uLnF1ZXJ5LFxuICAgICAgICB0eXBlczogWydET1VCQU5fQk9PS19TRUFSQ0hfUkVRVUVTVCcsICdET1VCQU5fQk9PS19TRUFSQ0hfU1VDQ0VTUycsICdET1VCQU5fQk9PS19TRUFSQ0hfRkFJTFVSRSddXG4gICAgfSksXG4gICAgYm9va1NlYXJjaFJlc3VsdHM6IHBhZ2luYXRlKHtcbiAgICAgICAgbWFwQWN0aW9uVG9LZXk6IGFjdGlvbiA9PiBhY3Rpb24ucXVlcnksXG4gICAgICAgIHR5cGVzOiBbJ0JPT0tfU0VBUkNIX1JFUVVFU1QnLCAnQk9PS19TRUFSQ0hfU1VDQ0VTUycsICdCT09LX1NFQVJDSF9GQUlMVVJFJ11cbiAgICB9KVxufSk7XG5mdW5jdGlvbiBlbGVtZW50cyhzdGF0ZSA9IHt9LCBhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDSEFOR0VfVkFMVUUnKSB7XG4gICAgICAgIC8vIGxvZGFzaCNtZXJnZSDkuI3mlK/mjIEgU3ltYm9sXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgW2FjdGlvbi5uYW1lXTogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVbYWN0aW9uLm5hbWVdLCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGFjdGlvbi52YWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1VQREFURV9FTEVNRU5UJykge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgIFthY3Rpb24ubmFtZV06IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlW2FjdGlvbi5uYW1lXSwgYWN0aW9uLmRhdGEpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG59XG5jb25zdCBjb21wb25lbnRzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBub3RpZmljYXRpb25zXG59KTtcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBwYXlsb2FkcyxcbiAgICBjb21wb25lbnRzLFxuICAgIGVsZW1lbnRzLFxuICAgIHJvdXRpbmcsXG4gICAgZW50aXRpZXMsXG4gICAgZXJyb3JNZXNzYWdlLFxuICAgIHBhZ2luYXRpb24sXG4gICAgc2Vzc2lvblxufSk7XG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9yZWR1Y2Vycy9pbmRleC50c1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vdGlmaWNhdGlvbnMoc3RhdGUgPSBbXSwgYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnSElERV9OT1RJRklDQVRJT04nKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5tYXAobiA9PiBuLmlkID09PSBhY3Rpb24uaWQgPyBPYmplY3QuYXNzaWduKHt9LCBuLCB7IHZpc2libGU6IGZhbHNlIH0pIDogbik7XG4gICAgfVxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1NIT1dfTk9USUZJQ0FUSU9OJykge1xuICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCB7XG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBhY3Rpb24ubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb24ubXNnVHlwZSxcbiAgICAgICAgICAgICAgICBpZDogYWN0aW9uLmlkXG4gICAgICAgICAgICB9XTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3JlZHVjZXJzL25vdGlmaWNhdGlvbnMudHNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuLy8gQ3JlYXRlcyBhIHJlZHVjZXIgbWFuYWdpbmcgcGFnaW5hdGlvbiwgZ2l2ZW4gdGhlIGFjdGlvbiB0eXBlcyB0byBoYW5kbGUsXG4vLyBhbmQgYSBmdW5jdGlvbiB0ZWxsaW5nIGhvdyB0byBleHRyYWN0IHRoZSBrZXkgZnJvbSBhbiBhY3Rpb24uXG4vLyB0b2RvOiB0eXBlcyBsZW5ndGggc2hvdWxkIGJlIDNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2luYXRlKHsgdHlwZXMsIG1hcEFjdGlvblRvS2V5IH0pIHtcbiAgICBjb25zdCBbcmVxdWVzdFR5cGUsIHN1Y2Nlc3NUeXBlLCBmYWlsdXJlVHlwZV0gPSB0eXBlcztcbiAgICBmdW5jdGlvbiB1cGRhdGVQYWdpbmF0aW9uKHN0YXRlID0ge1xuICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICBuZXh0UGFnZVVybDogbnVsbCxcbiAgICAgICAgICAgIHBhZ2VDb3VudDogMCxcbiAgICAgICAgICAgIGlkczogW11cbiAgICAgICAgfSwgYWN0aW9uKSB7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgcmVxdWVzdFR5cGU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhc2Ugc3VjY2Vzc1R5cGU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBpZHM6IF8udW5pb24oc3RhdGUuaWRzLCBhY3Rpb24ucmVzcG9uc2UucmVzdWx0KSxcbiAgICAgICAgICAgICAgICAgICAgLy8g5LiN5L2/55SoIHVuaW9uIOS8muWvvOiHtCBzZXJ2ZXIgcmVuZGVyaW5nIOmXrumimO+8n1xuICAgICAgICAgICAgICAgICAgICAvLyBpZHM6IGFjdGlvbi5yZXNwb25zZS5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIG5leHRQYWdlVXJsOiBhY3Rpb24ucmVzcG9uc2UubmV4dFBhZ2VVcmwsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VDb3VudDogc3RhdGUucGFnZUNvdW50ICsgMVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2FzZSBmYWlsdXJlVHlwZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiB1cGRhdGVQYWdpbmF0aW9uQnlLZXkoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgcmVxdWVzdFR5cGU6XG4gICAgICAgICAgICBjYXNlIHN1Y2Nlc3NUeXBlOlxuICAgICAgICAgICAgY2FzZSBmYWlsdXJlVHlwZTpcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBtYXBBY3Rpb25Ub0tleShhY3Rpb24pO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGtleSB0byBiZSBhIHN0cmluZy4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgW2tleV06IHVwZGF0ZVBhZ2luYXRpb24oc3RhdGVba2V5XSwgYWN0aW9uKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvcmVkdWNlcnMvcGFnaW5hdGUudHNcbiAqKi8iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tcG9zZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL21pZGRsZXdhcmUvYXBpJztcbmltcG9ydCBtb2RpZnlSZXNwb25zZSBmcm9tICcuLi9taWRkbGV3YXJlL21vZGlmeS1yZXNwb25zZSc7XG5pbXBvcnQgaGFuZGxlSW5pdGlhbFN0YXRlIGZyb20gJy4uL3V0aWxzL2hhbmRsZS1pbml0aWFsLXN0YXRlJztcbmltcG9ydCBjcmVhdGVMb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJztcbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoKSB7XG4gICAgbGV0IHN0b3JlO1xuICAgIC8vIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAvLyAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuLi9yZWR1Y2VycycsICgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgbmV4dFJvb3RSZWR1Y2VyID0gcmVxdWlyZSgnLi4vcmVkdWNlcnMnKS5kZWZhdWx0XG4gICAgLy8gICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKG5leHRSb290UmVkdWNlcilcbiAgICAvLyAgIH0pXG4gICAgLy8gfVxuICAgIC8vIHNlcnZlciBzaWRlXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIHt9LCBhcHBseU1pZGRsZXdhcmUodGh1bmssIGFwaSwgbW9kaWZ5UmVzcG9uc2UpKTtcbiAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgIH1cbiAgICBpZiAoZW52ID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgaGFuZGxlSW5pdGlhbFN0YXRlKCksIGFwcGx5TWlkZGxld2FyZSh0aHVuaywgYXBpLCBtb2RpZnlSZXNwb25zZSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgaGFuZGxlSW5pdGlhbFN0YXRlKCksIGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKHRodW5rLCBhcGksIG1vZGlmeVJlc3BvbnNlLCBjcmVhdGVMb2dnZXIoeyBjb2xsYXBzZWQ6IHRydWUgfSkpKSk7XG4gICAgfVxuICAgIHJldHVybiBzdG9yZTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9zdG9yZS9jb25maWd1cmUtc3RvcmUudHNcbiAqKi8iLCJmdW5jdGlvbiBoYW5kbGVJbml0aWFsU3RhdGUoKSB7XG4gICAgbGV0IGluaXRpYWxTdGF0ZTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5fX0lOSVRJQUxfU1RBVEVfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaW5pdGlhbFN0YXRlID0gd2luZG93Ll9fSU5JVElBTF9TVEFURV9fO1xuICAgIH1cbiAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xufVxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlSW5pdGlhbFN0YXRlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3V0aWxzL2hhbmRsZS1pbml0aWFsLXN0YXRlLnRzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9iamVjdFRvVXJsZW5jb2RlZChvcmlnaW5hbE9iaikge1xuICAgIGxldCBvYmplY3QgPSBfLmNsb25lRGVlcChvcmlnaW5hbE9iaik7XG4gICAgbGV0IGVuY29kZWR1cmwgPSAnJztcbiAgICBmb3IgKGxldCBwcm9wIGluIG9iamVjdCkge1xuICAgICAgICBpZiAodHlwZW9mIG9iamVjdFtwcm9wXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIG9iamVjdFtwcm9wXSA9IG9iamVjdFtwcm9wXS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGVuY29kZWR1cmwgPSBgJHtlbmNvZGVkdXJsfSR7cHJvcH09JHtvYmplY3RbcHJvcF19JmA7XG4gICAgfVxuICAgIHJldHVybiBlbmNvZGVkdXJsLnN1YnN0cigwLCBlbmNvZGVkdXJsLmxlbmd0aCAtIDEpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3V0aWxzL3BhcnNlLWZvcm0tZGF0YS50c1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBnZXRCb29rVmlldygpIHtcbiAgICBsZXQgYXNwZWN0UmF0aW8gPSA3IC8gOTtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNTQwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JlZW46ICdwaG9uZScsXG4gICAgICAgICAgICBwYWdlV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgICAgcGFnZUhlaWdodDogd2luZG93LmlubmVyV2lkdGggLyBhc3BlY3RSYXRpb1xuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmVlbjogJ2hkJyxcbiAgICAgICAgICAgIHBhZ2VXaWR0aDogNzAwLFxuICAgICAgICAgICAgcGFnZUhlaWdodDogNzAwIC8gYXNwZWN0UmF0aW9cbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbG9ja1Njcm9sbCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG59XG5leHBvcnQgZnVuY3Rpb24gdW5sb2NrU2Nyb2xsKCkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG59XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0Qm9va1ZpZXcsXG4gICAgbG9ja1Njcm9sbCxcbiAgICB1bmxvY2tTY3JvbGxcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvdXRpbHMvdmlldy50c1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH1cblxudmFyIHJlcGVhdCA9IGZ1bmN0aW9uIHJlcGVhdChzdHIsIHRpbWVzKSB7XG4gIHJldHVybiBuZXcgQXJyYXkodGltZXMgKyAxKS5qb2luKHN0cik7XG59O1xudmFyIHBhZCA9IGZ1bmN0aW9uIHBhZChudW0sIG1heExlbmd0aCkge1xuICByZXR1cm4gcmVwZWF0KFwiMFwiLCBtYXhMZW5ndGggLSBudW0udG9TdHJpbmcoKS5sZW5ndGgpICsgbnVtO1xufTtcbnZhciBmb3JtYXRUaW1lID0gZnVuY3Rpb24gZm9ybWF0VGltZSh0aW1lKSB7XG4gIHJldHVybiBcIkAgXCIgKyBwYWQodGltZS5nZXRIb3VycygpLCAyKSArIFwiOlwiICsgcGFkKHRpbWUuZ2V0TWludXRlcygpLCAyKSArIFwiOlwiICsgcGFkKHRpbWUuZ2V0U2Vjb25kcygpLCAyKSArIFwiLlwiICsgcGFkKHRpbWUuZ2V0TWlsbGlzZWNvbmRzKCksIDMpO1xufTtcblxuLy8gVXNlIHRoZSBuZXcgcGVyZm9ybWFuY2UgYXBpIHRvIGdldCBiZXR0ZXIgcHJlY2lzaW9uIGlmIGF2YWlsYWJsZVxudmFyIHRpbWVyID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBwZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIiA/IHBlcmZvcm1hbmNlIDogRGF0ZTtcblxuLyoqXG4gKiBwYXJzZSB0aGUgbGV2ZWwgb3B0aW9uIG9mIGNyZWF0ZUxvZ2dlclxuICpcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nIHwgZnVuY3Rpb24gfCBvYmplY3R9IGxldmVsIC0gY29uc29sZVtsZXZlbF1cbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBhY3Rpb25cbiAqIEBwcm9wZXJ0eSB7YXJyYXl9IHBheWxvYWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlXG4gKi9cblxuZnVuY3Rpb24gZ2V0TG9nTGV2ZWwobGV2ZWwsIGFjdGlvbiwgcGF5bG9hZCwgdHlwZSkge1xuICBzd2l0Y2ggKHR5cGVvZiBsZXZlbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGxldmVsKSkge1xuICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgIHJldHVybiB0eXBlb2YgbGV2ZWxbdHlwZV0gPT09IFwiZnVuY3Rpb25cIiA/IGxldmVsW3R5cGVdLmFwcGx5KGxldmVsLCBfdG9Db25zdW1hYmxlQXJyYXkocGF5bG9hZCkpIDogbGV2ZWxbdHlwZV07XG4gICAgY2FzZSBcImZ1bmN0aW9uXCI6XG4gICAgICByZXR1cm4gbGV2ZWwoYWN0aW9uKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGxldmVsO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBsb2dnZXIgd2l0aCBmb2xsb3dlZCBvcHRpb25zXG4gKlxuICogQG5hbWVzcGFjZVxuICogQHByb3BlcnR5IHtvYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIGZvciBsb2dnZXJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nIHwgZnVuY3Rpb24gfCBvYmplY3R9IG9wdGlvbnMubGV2ZWwgLSBjb25zb2xlW2xldmVsXVxuICogQHByb3BlcnR5IHtib29sZWFufSBvcHRpb25zLmR1cmF0aW9uIC0gcHJpbnQgZHVyYXRpb24gb2YgZWFjaCBhY3Rpb24/XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG9wdGlvbnMudGltZXN0YW1wIC0gcHJpbnQgdGltZXN0YW1wIHdpdGggZWFjaCBhY3Rpb24/XG4gKiBAcHJvcGVydHkge29iamVjdH0gb3B0aW9ucy5jb2xvcnMgLSBjdXN0b20gY29sb3JzXG4gKiBAcHJvcGVydHkge29iamVjdH0gb3B0aW9ucy5sb2dnZXIgLSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgYGNvbnNvbGVgIEFQSVxuICogQHByb3BlcnR5IHtib29sZWFufSBvcHRpb25zLmxvZ0Vycm9ycyAtIHNob3VsZCBlcnJvcnMgaW4gYWN0aW9uIGV4ZWN1dGlvbiBiZSBjYXVnaHQsIGxvZ2dlZCwgYW5kIHJlLXRocm93bj9cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3B0aW9ucy5jb2xsYXBzZWQgLSBpcyBncm91cCBjb2xsYXBzZWQ/XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG9wdGlvbnMucHJlZGljYXRlIC0gY29uZGl0aW9uIHdoaWNoIHJlc29sdmVzIGxvZ2dlciBiZWhhdmlvclxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gb3B0aW9ucy5zdGF0ZVRyYW5zZm9ybWVyIC0gdHJhbnNmb3JtIHN0YXRlIGJlZm9yZSBwcmludFxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gb3B0aW9ucy5hY3Rpb25UcmFuc2Zvcm1lciAtIHRyYW5zZm9ybSBhY3Rpb24gYmVmb3JlIHByaW50XG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBvcHRpb25zLmVycm9yVHJhbnNmb3JtZXIgLSB0cmFuc2Zvcm0gZXJyb3IgYmVmb3JlIHByaW50XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlTG9nZ2VyKCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICB2YXIgX29wdGlvbnMkbGV2ZWwgPSBvcHRpb25zLmxldmVsO1xuICB2YXIgbGV2ZWwgPSBfb3B0aW9ucyRsZXZlbCA9PT0gdW5kZWZpbmVkID8gXCJsb2dcIiA6IF9vcHRpb25zJGxldmVsO1xuICB2YXIgX29wdGlvbnMkbG9nZ2VyID0gb3B0aW9ucy5sb2dnZXI7XG4gIHZhciBsb2dnZXIgPSBfb3B0aW9ucyRsb2dnZXIgPT09IHVuZGVmaW5lZCA/IGNvbnNvbGUgOiBfb3B0aW9ucyRsb2dnZXI7XG4gIHZhciBfb3B0aW9ucyRsb2dFcnJvcnMgPSBvcHRpb25zLmxvZ0Vycm9ycztcbiAgdmFyIGxvZ0Vycm9ycyA9IF9vcHRpb25zJGxvZ0Vycm9ycyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9vcHRpb25zJGxvZ0Vycm9ycztcbiAgdmFyIGNvbGxhcHNlZCA9IG9wdGlvbnMuY29sbGFwc2VkO1xuICB2YXIgcHJlZGljYXRlID0gb3B0aW9ucy5wcmVkaWNhdGU7XG4gIHZhciBfb3B0aW9ucyRkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb247XG4gIHZhciBkdXJhdGlvbiA9IF9vcHRpb25zJGR1cmF0aW9uID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9vcHRpb25zJGR1cmF0aW9uO1xuICB2YXIgX29wdGlvbnMkdGltZXN0YW1wID0gb3B0aW9ucy50aW1lc3RhbXA7XG4gIHZhciB0aW1lc3RhbXAgPSBfb3B0aW9ucyR0aW1lc3RhbXAgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfb3B0aW9ucyR0aW1lc3RhbXA7XG4gIHZhciB0cmFuc2Zvcm1lciA9IG9wdGlvbnMudHJhbnNmb3JtZXI7XG4gIHZhciBfb3B0aW9ucyRzdGF0ZVRyYW5zZm8gPSBvcHRpb25zLnN0YXRlVHJhbnNmb3JtZXI7XG4gIHZhciAvLyBkZXByZWNhdGVkXG4gIHN0YXRlVHJhbnNmb3JtZXIgPSBfb3B0aW9ucyRzdGF0ZVRyYW5zZm8gPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfSA6IF9vcHRpb25zJHN0YXRlVHJhbnNmbztcbiAgdmFyIF9vcHRpb25zJGFjdGlvblRyYW5zZiA9IG9wdGlvbnMuYWN0aW9uVHJhbnNmb3JtZXI7XG4gIHZhciBhY3Rpb25UcmFuc2Zvcm1lciA9IF9vcHRpb25zJGFjdGlvblRyYW5zZiA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFjdG4pIHtcbiAgICByZXR1cm4gYWN0bjtcbiAgfSA6IF9vcHRpb25zJGFjdGlvblRyYW5zZjtcbiAgdmFyIF9vcHRpb25zJGVycm9yVHJhbnNmbyA9IG9wdGlvbnMuZXJyb3JUcmFuc2Zvcm1lcjtcbiAgdmFyIGVycm9yVHJhbnNmb3JtZXIgPSBfb3B0aW9ucyRlcnJvclRyYW5zZm8gPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfSA6IF9vcHRpb25zJGVycm9yVHJhbnNmbztcbiAgdmFyIF9vcHRpb25zJGNvbG9ycyA9IG9wdGlvbnMuY29sb3JzO1xuICB2YXIgY29sb3JzID0gX29wdGlvbnMkY29sb3JzID09PSB1bmRlZmluZWQgPyB7XG4gICAgdGl0bGU6IGZ1bmN0aW9uIHRpdGxlKCkge1xuICAgICAgcmV0dXJuIFwiIzAwMDAwMFwiO1xuICAgIH0sXG4gICAgcHJldlN0YXRlOiBmdW5jdGlvbiBwcmV2U3RhdGUoKSB7XG4gICAgICByZXR1cm4gXCIjOUU5RTlFXCI7XG4gICAgfSxcbiAgICBhY3Rpb246IGZ1bmN0aW9uIGFjdGlvbigpIHtcbiAgICAgIHJldHVybiBcIiMwM0E5RjRcIjtcbiAgICB9LFxuICAgIG5leHRTdGF0ZTogZnVuY3Rpb24gbmV4dFN0YXRlKCkge1xuICAgICAgcmV0dXJuIFwiIzRDQUY1MFwiO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKCkge1xuICAgICAgcmV0dXJuIFwiI0YyMDQwNFwiO1xuICAgIH1cbiAgfSA6IF9vcHRpb25zJGNvbG9ycztcblxuICAvLyBleGl0IGlmIGNvbnNvbGUgdW5kZWZpbmVkXG5cbiAgaWYgKHR5cGVvZiBsb2dnZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfTtcbiAgfVxuXG4gIGlmICh0cmFuc2Zvcm1lcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJPcHRpb24gJ3RyYW5zZm9ybWVyJyBpcyBkZXByZWNhdGVkLCB1c2Ugc3RhdGVUcmFuc2Zvcm1lciBpbnN0ZWFkXCIpO1xuICB9XG5cbiAgdmFyIGxvZ0J1ZmZlciA9IFtdO1xuICBmdW5jdGlvbiBwcmludEJ1ZmZlcigpIHtcbiAgICBsb2dCdWZmZXIuZm9yRWFjaChmdW5jdGlvbiAobG9nRW50cnksIGtleSkge1xuICAgICAgdmFyIHN0YXJ0ZWQgPSBsb2dFbnRyeS5zdGFydGVkO1xuICAgICAgdmFyIHN0YXJ0ZWRUaW1lID0gbG9nRW50cnkuc3RhcnRlZFRpbWU7XG4gICAgICB2YXIgYWN0aW9uID0gbG9nRW50cnkuYWN0aW9uO1xuICAgICAgdmFyIHByZXZTdGF0ZSA9IGxvZ0VudHJ5LnByZXZTdGF0ZTtcbiAgICAgIHZhciBlcnJvciA9IGxvZ0VudHJ5LmVycm9yO1xuICAgICAgdmFyIHRvb2sgPSBsb2dFbnRyeS50b29rO1xuICAgICAgdmFyIG5leHRTdGF0ZSA9IGxvZ0VudHJ5Lm5leHRTdGF0ZTtcblxuICAgICAgdmFyIG5leHRFbnRyeSA9IGxvZ0J1ZmZlcltrZXkgKyAxXTtcbiAgICAgIGlmIChuZXh0RW50cnkpIHtcbiAgICAgICAgbmV4dFN0YXRlID0gbmV4dEVudHJ5LnByZXZTdGF0ZTtcbiAgICAgICAgdG9vayA9IG5leHRFbnRyeS5zdGFydGVkIC0gc3RhcnRlZDtcbiAgICAgIH1cbiAgICAgIC8vIG1lc3NhZ2VcbiAgICAgIHZhciBmb3JtYXR0ZWRBY3Rpb24gPSBhY3Rpb25UcmFuc2Zvcm1lcihhY3Rpb24pO1xuICAgICAgdmFyIGlzQ29sbGFwc2VkID0gdHlwZW9mIGNvbGxhcHNlZCA9PT0gXCJmdW5jdGlvblwiID8gY29sbGFwc2VkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICAgIH0sIGFjdGlvbikgOiBjb2xsYXBzZWQ7XG5cbiAgICAgIHZhciBmb3JtYXR0ZWRUaW1lID0gZm9ybWF0VGltZShzdGFydGVkVGltZSk7XG4gICAgICB2YXIgdGl0bGVDU1MgPSBjb2xvcnMudGl0bGUgPyBcImNvbG9yOiBcIiArIGNvbG9ycy50aXRsZShmb3JtYXR0ZWRBY3Rpb24pICsgXCI7XCIgOiBudWxsO1xuICAgICAgdmFyIHRpdGxlID0gXCJhY3Rpb24gXCIgKyAodGltZXN0YW1wID8gZm9ybWF0dGVkVGltZSA6IFwiXCIpICsgXCIgXCIgKyBmb3JtYXR0ZWRBY3Rpb24udHlwZSArIFwiIFwiICsgKGR1cmF0aW9uID8gXCIoaW4gXCIgKyB0b29rLnRvRml4ZWQoMikgKyBcIiBtcylcIiA6IFwiXCIpO1xuXG4gICAgICAvLyByZW5kZXJcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChpc0NvbGxhcHNlZCkge1xuICAgICAgICAgIGlmIChjb2xvcnMudGl0bGUpIGxvZ2dlci5ncm91cENvbGxhcHNlZChcIiVjIFwiICsgdGl0bGUsIHRpdGxlQ1NTKTtlbHNlIGxvZ2dlci5ncm91cENvbGxhcHNlZCh0aXRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGNvbG9ycy50aXRsZSkgbG9nZ2VyLmdyb3VwKFwiJWMgXCIgKyB0aXRsZSwgdGl0bGVDU1MpO2Vsc2UgbG9nZ2VyLmdyb3VwKHRpdGxlKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsb2dnZXIubG9nKHRpdGxlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByZXZTdGF0ZUxldmVsID0gZ2V0TG9nTGV2ZWwobGV2ZWwsIGZvcm1hdHRlZEFjdGlvbiwgW3ByZXZTdGF0ZV0sIFwicHJldlN0YXRlXCIpO1xuICAgICAgdmFyIGFjdGlvbkxldmVsID0gZ2V0TG9nTGV2ZWwobGV2ZWwsIGZvcm1hdHRlZEFjdGlvbiwgW2Zvcm1hdHRlZEFjdGlvbl0sIFwiYWN0aW9uXCIpO1xuICAgICAgdmFyIGVycm9yTGV2ZWwgPSBnZXRMb2dMZXZlbChsZXZlbCwgZm9ybWF0dGVkQWN0aW9uLCBbZXJyb3IsIHByZXZTdGF0ZV0sIFwiZXJyb3JcIik7XG4gICAgICB2YXIgbmV4dFN0YXRlTGV2ZWwgPSBnZXRMb2dMZXZlbChsZXZlbCwgZm9ybWF0dGVkQWN0aW9uLCBbbmV4dFN0YXRlXSwgXCJuZXh0U3RhdGVcIik7XG5cbiAgICAgIGlmIChwcmV2U3RhdGVMZXZlbCkge1xuICAgICAgICBpZiAoY29sb3JzLnByZXZTdGF0ZSkgbG9nZ2VyW3ByZXZTdGF0ZUxldmVsXShcIiVjIHByZXYgc3RhdGVcIiwgXCJjb2xvcjogXCIgKyBjb2xvcnMucHJldlN0YXRlKHByZXZTdGF0ZSkgKyBcIjsgZm9udC13ZWlnaHQ6IGJvbGRcIiwgcHJldlN0YXRlKTtlbHNlIGxvZ2dlcltwcmV2U3RhdGVMZXZlbF0oXCJwcmV2IHN0YXRlXCIsIHByZXZTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3Rpb25MZXZlbCkge1xuICAgICAgICBpZiAoY29sb3JzLmFjdGlvbikgbG9nZ2VyW2FjdGlvbkxldmVsXShcIiVjIGFjdGlvblwiLCBcImNvbG9yOiBcIiArIGNvbG9ycy5hY3Rpb24oZm9ybWF0dGVkQWN0aW9uKSArIFwiOyBmb250LXdlaWdodDogYm9sZFwiLCBmb3JtYXR0ZWRBY3Rpb24pO2Vsc2UgbG9nZ2VyW2FjdGlvbkxldmVsXShcImFjdGlvblwiLCBmb3JtYXR0ZWRBY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXJyb3IgJiYgZXJyb3JMZXZlbCkge1xuICAgICAgICBpZiAoY29sb3JzLmVycm9yKSBsb2dnZXJbZXJyb3JMZXZlbF0oXCIlYyBlcnJvclwiLCBcImNvbG9yOiBcIiArIGNvbG9ycy5lcnJvcihlcnJvciwgcHJldlN0YXRlKSArIFwiOyBmb250LXdlaWdodDogYm9sZFwiLCBlcnJvcik7ZWxzZSBsb2dnZXJbZXJyb3JMZXZlbF0oXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0U3RhdGVMZXZlbCkge1xuICAgICAgICBpZiAoY29sb3JzLm5leHRTdGF0ZSkgbG9nZ2VyW25leHRTdGF0ZUxldmVsXShcIiVjIG5leHQgc3RhdGVcIiwgXCJjb2xvcjogXCIgKyBjb2xvcnMubmV4dFN0YXRlKG5leHRTdGF0ZSkgKyBcIjsgZm9udC13ZWlnaHQ6IGJvbGRcIiwgbmV4dFN0YXRlKTtlbHNlIGxvZ2dlcltuZXh0U3RhdGVMZXZlbF0oXCJuZXh0IHN0YXRlXCIsIG5leHRTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsb2dnZXIubG9nKFwi4oCU4oCUIGxvZyBlbmQg4oCU4oCUXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxvZ0J1ZmZlci5sZW5ndGggPSAwO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGdldFN0YXRlID0gX3JlZi5nZXRTdGF0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIC8vIGV4aXQgZWFybHkgaWYgcHJlZGljYXRlIGZ1bmN0aW9uIHJldHVybnMgZmFsc2VcbiAgICAgICAgaWYgKHR5cGVvZiBwcmVkaWNhdGUgPT09IFwiZnVuY3Rpb25cIiAmJiAhcHJlZGljYXRlKGdldFN0YXRlLCBhY3Rpb24pKSB7XG4gICAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsb2dFbnRyeSA9IHt9O1xuICAgICAgICBsb2dCdWZmZXIucHVzaChsb2dFbnRyeSk7XG5cbiAgICAgICAgbG9nRW50cnkuc3RhcnRlZCA9IHRpbWVyLm5vdygpO1xuICAgICAgICBsb2dFbnRyeS5zdGFydGVkVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxvZ0VudHJ5LnByZXZTdGF0ZSA9IHN0YXRlVHJhbnNmb3JtZXIoZ2V0U3RhdGUoKSk7XG4gICAgICAgIGxvZ0VudHJ5LmFjdGlvbiA9IGFjdGlvbjtcblxuICAgICAgICB2YXIgcmV0dXJuZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGxvZ0Vycm9ycykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm5lZFZhbHVlID0gbmV4dChhY3Rpb24pO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGxvZ0VudHJ5LmVycm9yID0gZXJyb3JUcmFuc2Zvcm1lcihlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuZWRWYWx1ZSA9IG5leHQoYWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvZ0VudHJ5LnRvb2sgPSB0aW1lci5ub3coKSAtIGxvZ0VudHJ5LnN0YXJ0ZWQ7XG4gICAgICAgIGxvZ0VudHJ5Lm5leHRTdGF0ZSA9IHN0YXRlVHJhbnNmb3JtZXIoZ2V0U3RhdGUoKSk7XG5cbiAgICAgICAgcHJpbnRCdWZmZXIoKTtcblxuICAgICAgICBpZiAobG9nRW50cnkuZXJyb3IpIHRocm93IGxvZ0VudHJ5LmVycm9yO1xuICAgICAgICByZXR1cm4gcmV0dXJuZWRWYWx1ZTtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVMb2dnZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtbG9nZ2VyL2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oNCkpKDY1Nyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3RfbGliXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg0KSkoNjcwKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1zaWRlLWVmZmVjdC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9saWJcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDgpKSg3NTIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2h1bXBzL2h1bXBzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfdXRpbHNfbGliXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg4KSkoNzUzKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1icm93c2VyaWZ5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfdXRpbHNfbGliXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcic7XG5leHBvcnQgeyBDb250YWluZXIgfTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9sYXlvdXQvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuY2xhc3MgTG9hZGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJsb2FkaW5nLXdyYXBcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiaWNvbiBpY29uLWxvYWRpbmdcIn0pKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9sb2FkaW5nLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuY2xhc3MgTmF2VGFiIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibmF2LXRhYlwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIG51bGwsIHRoaXMucHJvcHMudGFicy5tYXAoKHRhYiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSBudWxsO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLnByb3BzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSAnY3VycmVudCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWUsIGtleTogaW5kZXh9LCB0YWIpKTtcbiAgICAgICAgfSkpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKE5hdlRhYik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvbmF2LXRhYi50c3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDQpKSg2NTgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWNzcy1tb2R1bGVzL2Rpc3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9saWJcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vZWxlbWVudHMvbGF5b3V0L2NvbnRhaW5lcic7XG5jbGFzcyBDb2xvcGhvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb2xvcGhvblwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiwqkgMjAxNe+8jTIwMTYgcmVhZHJ3ZWIuY29tLCBhbGwgcmlnaHRzIHJlc2VydmVkXCIpKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvbG9waG9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvQ29sb3Bob24udHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2VsZW1lbnRzL2Zvcm0nO1xuY2xhc3MgQm9va0luZm9Qb3B1cCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBhdXRob3IgPSB0aGlzLnByb3BzLmF1dGhvcjtcbiAgICAgICAgbGV0IHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gdGhpcy5wcm9wcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgbGV0IGJvb2tJZCA9IHRoaXMucHJvcHMuYm9va0lkO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJib29rLWluZm8tcG9wdXAgcG9wdXBcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7Y2xhc3NOYW1lOiBcInRpdGxlXCJ9LCB0aXRsZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtjbGFzc05hbWU6IFwiYXV0aG9yXCJ9LCBhdXRob3IpLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge2NvbG9yOiBcImJsdWVcIiwgdG86ICcvdmlld2VyL2Jvb2svJyArIGJvb2tJZH0sIFwi6ZiF6K+7XCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiZGVzY3JpcHRpb25cIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGRlc2NyaXB0aW9uKSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBCb29rSW5mb1BvcHVwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYm9vay1pbmZvLXBvcHVwLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm9vayBmcm9tICcuL2Jvb2snO1xuY2xhc3MgQm9va0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJib29rLWxpc3QgY2xlYXJmaXhcIn0sIHRoaXMucHJvcHMuYm9va0VudGl0aWVzID8gKHRoaXMucHJvcHMuYm9va0VudGl0aWVzLm1hcCgoYm9vaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdGl0bGUsIGF1dGhvciwgZGVzY3JpcHRpb24sIGNvdmVyIH0gPSBib29rO1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2ssIHtpZDogYm9vay5pZCwga2V5OiBpbmRleCwgdGl0bGU6IHRpdGxlLCBhdXRob3I6IGF1dGhvci5tYXAoYSA9PiBhLnJlZkRhdGEgPyBhLnJlZkRhdGEubmFtZSA6ICcnKS5qb2luKCcsICcpLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIGNvdmVyOiBjb3Zlcn0pKTtcbiAgICAgICAgfSkpIDogbnVsbCkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJvb2tMaXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYm9vay1saXN0LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm9va1BhZ2UgZnJvbSAnLi9ib29rLXBhZ2UnO1xuY2xhc3MgQm9va1BhZ2VMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIGxldCBzdHlsZSA9IHN0eWxlcy5CT09LX0hEX1NUWUxFXG4gICAgICAgIC8vIGlmKHRoaXMucHJvcHMudmlldy5tb2RlID09PSBcIk1PQklMRVwiKSB7XG4gICAgICAgIC8vICAgc3R5bGUgPSBzdHlsZXMuQk9PS19NT0JJTEVfU1RZTEVcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZighdGhpcy5wcm9wcy5pc0NhbGN1bGF0ZWQpIHtcbiAgICAgICAgLy8gICBzdHlsZS5oZWlnaHQgPSBcIjEwMCVcIlxuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtjbGFzc05hbWU6IFwicGFnZXNcIiwgc3R5bGU6IHsgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCB9fSwgdGhpcy5wcm9wcy5wYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAocGFnZS50eXBlID09PSBcInBhZ2VcIikge1xuICAgICAgICAgICAgICAgIC8vIHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUsIHBhZ2UucHJvcHMuc3R5bGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tQYWdlLCB7c3R5bGU6IHBhZ2UucHJvcHMuc3R5bGUsIGJvb2tJZDogdGhpcy5wcm9wcy5ib29rSWQsIGtleTogaW5kZXgsIHBhZ2U6IHBhZ2V9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IHR5cGUgcGFnZSFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQm9va1BhZ2VMaXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYm9vay1wYWdlLWxpc3QudHN4XG4gKiovIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuY2xhc3MgQm9va1BhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHBhZ2UgPSB0aGlzLnByb3BzLnBhZ2U7XG4gICAgICAgIGxldCBzdHlsZSA9IHRoaXMucHJvcHMuc3R5bGU7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtzdHlsZTogc3R5bGV9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29udGVudFwifSwgcGFnZS5wcm9wcy5jaGlsZHJlbi5tYXAoKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlICE9PSBcInBcIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbnN1cHBvcnRlZCBjb250ZW50IGZvdW5kIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgX19hc3NpZ24oe30sIGluZGV4ID09PSAwID8geyBzdHlsZTogeyBtYXJnaW5Ub3A6IHBhZ2UucHJvcHMub2Zmc2V0IH0gfSA6IHt9LCB7a2V5OiBpbmRleH0pLCBub2RlLnByb3BzLmNoaWxkcmVuKSk7XG4gICAgICAgIH0pKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInBhZ2Utbm9cIn0sIHBhZ2UucHJvcHMucGFnZU5vKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJvb2tQYWdlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYm9vay1wYWdlLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBCb29rSW5mb1BvcHVwIGZyb20gJy4vYm9vay1pbmZvLXBvcHVwJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2sgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogXCJib29rXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogJy9ib29rLycgKyB0aGlzLnByb3BzLmlkfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImJvb2stY292ZXJcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge3NyYzogdGhpcy5wcm9wcy5jb3Zlcn0pKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImJvb2stbWV0YVwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge3RpdGxlOiB0aGlzLnByb3BzLnRpdGxlLCBjbGFzc05hbWU6IFwiYm9vay1uYW1lXCJ9LCB0aGlzLnByb3BzLnRpdGxlKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJib29rLWF1dGhvclwifSwgdGhpcy5wcm9wcy5hdXRob3IpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9va0luZm9Qb3B1cCwge2Jvb2tJZDogdGhpcy5wcm9wcy5pZCwgdGl0bGU6IHRoaXMucHJvcHMudGl0bGUsIGF1dGhvcjogdGhpcy5wcm9wcy5hdXRob3IsIGRlc2NyaXB0aW9uOiB0aGlzLnByb3BzLmRlc2NyaXB0aW9ufSkpKTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29tcG9uZW50cy9ib29rLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmNsYXNzIENhbmR5Qm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5wcm9wcy5saXN0O1xuICAgICAgICBsZXQgdGl0bGUgPSB0aGlzLnByb3BzLnRpdGxlO1xuICAgICAgICBsZXQgbW9yZUxpbmsgPSB0aGlzLnByb3BzLm1vcmVMaW5rID8gdGhpcy5wcm9wcy5tb3JlTGluayA6IG51bGw7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNhbmR5LWJveFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIHtjbGFzc05hbWU6IFwiYm94LXRpdGxlXCJ9LCB0aXRsZSksIG1vcmVMaW5rID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBtb3JlTGlua30sIFwi5p+l55yL5pu05aSaXCIpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCBudWxsLCBsaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2tleTogaW5kZXh9LCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogaXRlbS5saW5rfSwgaXRlbS5uYW1lKSkpKSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYW5keUJveDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb21wb25lbnRzL2NhbmR5LWJveC50c3hcbiAqKi8iLCJpbXBvcnQgVmlld2VyUHJlZmVyZW5jZSBmcm9tICcuL3ZpZXdlci1wcmVmZXJlbmNlJztcbmV4cG9ydCBkZWZhdWx0IFZpZXdlclByZWZlcmVuY2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29tcG9uZW50cy92aWV3ZXItcHJlZmVyZW5jZS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFN3aXRjaGVyIGZyb20gJy4uLy4uL2VsZW1lbnRzL3N3aXRjaGVyJztcbi8vIEBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIFZpZXdlclByZWZlcmVuY2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJ2aWV3ZXItcHJlZmVyZW5jZVwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtjbGFzc05hbWU6IFwib3B0aW9uc1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IFwib3B0aW9uIG9wdGlvbi1mb250LXNpemVcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFwiQS1cIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFwiQStcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogXCJvcHRpb24gb3B0aW9uLXNjcm9sbFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJsYWJlbFwifSwgXCLmu5rliqjmqKHlvI9cIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpdGNoZXIsIHtvbjogdHJ1ZX0pKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IFwib3B0aW9uIG9wdGlvbi10aGVtZVwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge3N0eWxlOiB7IGJhY2tncm91bmQ6ICcjZmZmJyB9fSwgXCJ0aGVtZTFcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtzdHlsZTogeyBiYWNrZ3JvdW5kOiAnI2VlZScgfX0sIFwidGhlbWUyXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7c3R5bGU6IHsgYmFja2dyb3VuZDogJyMyMjInIH19LCBcInRoZW1lM1wiKSkpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKFZpZXdlclByZWZlcmVuY2UpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvdmlld2VyLXByZWZlcmVuY2Uvdmlld2VyLXByZWZlcmVuY2UudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5jbGFzcyBWaWV3ZXJTY3JvbGxiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge3N0eWxlOiB7IGhlaWdodDogNDAwIH0sIGNsYXNzTmFtZTogXCJ2aWV3ZXItc2Nyb2xsYmFyXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYnV0dG9uXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibG9jLWluZm9cIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCB0aGlzLnByb3BzLmN1cnJlbnQpLCBcIi9cIiwgdGhpcy5wcm9wcy50b3RhbCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJzdWItaW5mb1wifSwgXCIzMC4zJVwiKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtzdHlsZTogeyBoZWlnaHQ6IDEwMCB9LCBjbGFzc05hbWU6IFwidHJhY2stcGFzdFwifSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge3N0eWxlOiB7IGhlaWdodDogNDAwIH0sIGNsYXNzTmFtZTogXCJ0cmFja1wifSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoVmlld2VyU2Nyb2xsYmFyKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb21wb25lbnRzL3ZpZXdlci1zY3JvbGxiYXIudHN4XG4gKiovIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgQnJhbmRpbmcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9icmFuZGluZyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9sYXlvdXQnO1xuaW1wb3J0IENvbG9waG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29sb3Bob24nO1xuaW1wb3J0IHsgdXNlckF1dGggfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vYXBwLnNjc3MnKTtcbi8vIGltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0nXG5sZXQgQXBwID0gY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLnVzZXJBdXRoKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGlzQWRtaW4gPSBmYWxzZTtcbiAgICAgICAgbGV0IHVzZXJuYW1lID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLnJvbGUgIT09ICd2aXNpdG9yJykge1xuICAgICAgICAgICAgaXNBZG1pbiA9IHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLnJvbGUgPT09ICdhZG1pbic7XG4gICAgICAgICAgICB1c2VybmFtZSA9IHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLnVzZXJuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJyYW5kaW5nLCB7aXNBZG1pbjogaXNBZG1pbiwgdXNlcm5hbWU6IHVzZXJuYW1lfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCBudWxsLCB0aGlzLnByb3BzLmNoaWxkcmVuKSwgUmVhY3QuY3JlYXRlRWxlbWVudChDb2xvcGhvbiwgbnVsbCkpKTtcbiAgICB9XG59O1xuQXBwID0gX19kZWNvcmF0ZShbXG4gICAgQ1NTTW9kdWxlcyhzdHlsZXMpXG5dLCBBcHApO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiAoe1xuICAgIG5vdGlmaWNhdGlvbjogc3RhdGUuY29tcG9uZW50cy5ub3RpZmljYXRpb24sXG4gICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvblxufSksIHsgdXNlckF1dGggfSkoQXBwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2FwcC9hcHAudHN4XG4gKiovIiwiaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9hcHAvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBTd2l0Y2hlciBmcm9tICcuLi9lbGVtZW50cy9zd2l0Y2hlcic7XG5pbXBvcnQgQm9va0xpc3RTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvYm9vay1saXN0LXNlY3Rpb24nO1xuaW1wb3J0IHsgZmV0Y2hCb29rcywgZmV0Y2hDb2xsZWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuY2xhc3MgQXJjaGl2ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaEJvb2tzKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYXJjaGl2ZSBwYWdlLWNvbnRlbnRcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwYWdlLWhlYWRlclwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtjbGFzc05hbWU6IFwiY2F0ZWdvcmllc1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IFwiY3VycmVudFwifSwgXCLlhajpg6hcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBcIuWFqOmDqFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFwi5YWo6YOoXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgXCLlhajpg6hcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBcIuWFqOmDqFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFwi5YWo6YOoXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgXCLlhajpg6hcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJsZWZ0IGRyb3Bkb3duLW1lbnVcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBcIuaXtumXtFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFwi54Ot5bqmXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgXCLlkI3np7BcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicmlnaHRcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJsYWJlbFwifSwgXCLkuI3mmL7npLrmiJHor7vov4fnmoRcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpdGNoZXIsIHtvbjogZmFsc2V9KSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tMaXN0U2VjdGlvbiwge2Jvb2tFbnRpdGllczogdGhpcy5wcm9wcy5uZXdlc3RCb29rc30pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicGFnZS1sb2FkLW1vcmVcIn0sIFwi5Yqg6L295pu05aSaXCIpKSk7XG4gICAgfVxufVxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5ld2VzdEJvb2tzOiBzdGF0ZS5wYWdpbmF0aW9uLmJvb2tzLm5ld2VzdFxuICAgICAgICAgICAgPyBzdGF0ZS5wYWdpbmF0aW9uLmJvb2tzLm5ld2VzdC5pZHMubWFwKGlkID0+IHN0YXRlLmVudGl0aWVzLmJvb2tzW2lkXSlcbiAgICAgICAgICAgIDogW11cbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZmV0Y2hCb29rcywgZmV0Y2hDb2xsZWN0aW9ucyB9KShBcmNoaXZlKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2FyY2hpdmUudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBmZXRjaENvbGxlY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5jbGFzcyBBcmNoaXZlZENvbGxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hDb2xsZWN0aW9ucygpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImFyY2hpdmVkLWNvbGxlY3Rpb25cIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwYWdlLXRpdGxlXCJ9LCBcIuW+gOacn+S5puWNlVwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIG51bGwsIHRoaXMucHJvcHMubmV3ZXN0Q29sbGVjdGlvbnMubGVuZ3RoICE9PSAwXG4gICAgICAgICAgICAmJiB0aGlzLnByb3BzLm5ld2VzdENvbGxlY3Rpb25zLm1hcCgoY29sbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7a2V5OiBpbmRleH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBjb2xsLm5hbWUpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBjb2xsLmRlc2NyaXB0aW9uKSkpO1xuICAgICAgICAgICAgfSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicGFnZS1sb2FkLW1vcmVcIn0sIFwi5Yqg6L295pu05aSaXCIpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiAoe1xuICAgIG5ld2VzdENvbGxlY3Rpb25zOiBzdGF0ZS5wYWdpbmF0aW9uLmJvb2tDb2xsZWN0aW9ucy5uZXdlc3RcbiAgICAgICAgPyBzdGF0ZS5wYWdpbmF0aW9uLmJvb2tDb2xsZWN0aW9ucy5uZXdlc3QuaWRzLm1hcChpZCA9PiBzdGF0ZS5lbnRpdGllcy5ib29rQ29sbGVjdGlvbnNbaWRdKVxuICAgICAgICA6IFtdXG59KSwgeyBmZXRjaENvbGxlY3Rpb25zIH0pKEFyY2hpdmVkQ29sbGVjdGlvbik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9hcmNoaXZlZC1jb2xsZWN0aW9uLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZmV0Y2hCb29rIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9lbGVtZW50cy9sb2FkaW5nJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2VsZW1lbnRzL2Zvcm0nO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBCb2R5IGZyb20gJy4uL3NpZGUtZWZmZWN0cy9ib2R5JztcbmNsYXNzIEJvb2tJbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuYm9va0lkID0gcHJvcHMucGFyYW1zLmlkO1xuICAgIH1cbiAgICBzdGF0aWMgZmV0Y2hEYXRhKHsgc3RvcmUsIHBhcmFtcyB9KSB7XG4gICAgICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChmZXRjaEJvb2socGFyYW1zLmlkKSk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoQm9vayh0aGlzLmJvb2tJZCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGJvb2tJbmZvID0gdGhpcy5wcm9wcy5ib29rSW5mbyA/IHRoaXMucHJvcHMuYm9va0luZm8gOiB7fTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiLCB7Y2xhc3NOYW1lOiBcImJvb2staW5mbyBjb250ZW50LWNvbnRhaW5lclwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5LCB7Y2xhc3NOYW1lOiBcImJvb2staW5mb1wifSksIF8uaXNFbXB0eShib29rSW5mbykgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nLCBudWxsKSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIHtjbGFzc05hbWU6IFwiYm9vay1pbmZvLWhlYWRlclwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImxlZnQtY29sXCJ9LCBib29rSW5mby5jb3ZlciA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYm9vay1jb3ZlclwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7c3JjOiBib29rSW5mby5jb3Zlcn0pKSkgOiBudWxsKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInJpZ2h0LWNvbFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHtjbGFzc05hbWU6IFwiYm9vay1uYW1lXCJ9LCBib29rSW5mby50aXRsZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJib29rLWF1dGhvclwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBcIuS9nOiAhe+8mlwiLCBib29rSW5mby5hdXRob3IgPyBib29rSW5mby5hdXRob3IubWFwKGEgPT4gYS5yZWZEYXRhID8gYS5yZWZEYXRhLm5hbWUgOiAnJykuam9pbignLCAnKSA6ICcnKSksIGJvb2tJbmZvLnRpdGxlID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHt0bzogYC92aWV3ZXIvYm9vay8ke2Jvb2tJbmZvLmlkfWAsIGNvbG9yOiBcImJsdWVcIn0sIFwi6ZiF6K+7XCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgbnVsbCwgXCLmt7vliqDliLDkuabmnrZcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCBudWxsLCBcIuagh+iusOS4uuW3suivu1wiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIG51bGwsIFwi5pS26JePXCIpKSkgOiBudWxsKSksIGJvb2tJbmZvLmRlc2NyaXB0aW9uID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIFwi5YaF5a65566A5LuLXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBib29rSW5mby5kZXNjcmlwdGlvbikpKSA6IG51bGwpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICByZXR1cm4geyBib29rSW5mbzogc3RhdGUuZW50aXRpZXMuYm9va3Nbb3duUHJvcHMucGFyYW1zLmlkXSB9O1xufSwgeyBmZXRjaEJvb2sgfSkoQm9va0luZm8pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvYm9vay1pbmZvLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZmV0Y2hTaGVsZiB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IEJvb2tMaXN0U2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2Jvb2stbGlzdC1zZWN0aW9uJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5jbGFzcyBCb29rU2hlbGYgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgc3RhdGljIGZldGNoRGF0YSh7IHN0b3JlLCBwYXJhbXMgfSkge1xuICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZmV0Y2hTaGVsZigpKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hTaGVsZigpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBib29rTGlzdCA9IHRoaXMucHJvcHMuc2hlbGY7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tMaXN0U2VjdGlvbiwge2Jvb2tFbnRpdGllczogYm9va0xpc3QsIHRpdGxlOiBcIuaIkeeahOS5puaetlwifSkpKTtcbiAgICB9XG59XG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2hlbGY6IF8uZ2V0KHN0YXRlLnBheWxvYWRzLmJvb2tTaGVsZiwgJ2RhdGEnLCBbXSlcbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZmV0Y2hTaGVsZiB9KShCb29rU2hlbGYpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvYm9vay1zaGVsZi50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2VsZW1lbnRzL2Zvcm0nO1xuaW1wb3J0IHsgZmV0Y2hDb2xsZWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgQm9va0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9ib29rLWxpc3Qtc2VjdGlvbic7XG5jbGFzcyBDb2xsZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoQ29sbGVjdGlvbih0aGlzLnByb3BzLnBhcmFtcy5pZCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgYm9va0NvbGxlY3Rpb24gPSB0aGlzLnByb3BzLmJvb2tDb2xsZWN0aW9uID8gdGhpcy5wcm9wcy5ib29rQ29sbGVjdGlvbiA6IHsgaXRlbXM6IFtdIH07XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gYm9va0NvbGxlY3Rpb24uaXRlbXNcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlZkRhdGEpXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbS5yZWZEYXRhKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29sbGVjdGlvblwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtaGVhZGVyXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicGFnZS10aXRsZVwifSwgYm9va0NvbGxlY3Rpb24ubmFtZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJzdWItdGl0bGVcIn0sIFwiMTAg5pys5LmmXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYm9vay1zbGlkZXJcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9va0xpc3QsIHtib29rRW50aXRpZXM6IGl0ZW1zfSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgbnVsbCwgXCLmlLbol49cIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicGFnZS1jb250ZW50XCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBib29rQ29sbGVjdGlvbi5kZXNjcmlwdGlvbikpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgcmV0dXJuIHsgYm9va0NvbGxlY3Rpb246IHN0YXRlLmVudGl0aWVzLmJvb2tDb2xsZWN0aW9uc1tvd25Qcm9wcy5wYXJhbXMuaWRdIH07XG59LCB7IGZldGNoQ29sbGVjdGlvbiB9KShDb2xsZWN0aW9uKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2NvbGxlY3Rpb24udHN4XG4gKiovIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgZmV0Y2hCb29rcywgZmV0Y2hDb2xsZWN0aW9ucyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IEJvb2tMaXN0U2VjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Jvb2stbGlzdC1zZWN0aW9uJztcbmltcG9ydCBDYW5keUJveCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NhbmR5LWJveCc7XG5pbXBvcnQgQm9keSBmcm9tICcuLi8uLi9zaWRlLWVmZmVjdHMvYm9keSc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9lbGVtZW50cy9mb3JtJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vaG9tZS5zY3NzJyk7XG5sZXQgSG9tZSA9IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNob3dSZWNlbnRSZWFkaW5nOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cbiAgICBzdGF0aWMgZmV0Y2hEYXRhKHsgc3RvcmUgfSkge1xuICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZmV0Y2hCb29rcygpKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hCb29rcygpO1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoQ29sbGVjdGlvbnMoKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2Vzc2lvbi5pc0ZldGNoaW5nICYmICFuZXh0UHJvcHMuc2Vzc2lvbi5pc0ZldGNoaW5nKSB7XG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLnNlc3Npb24udXNlci5yb2xlICE9PSAndmlzaXRvcicpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnByb3BzLmZldGNoQm9va3MoJ3VzZXInKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzaG93UmVjZW50UmVhZGluZzogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG5ld2VzdEJvb2tzID0gdGhpcy5wcm9wcy5uZXdlc3RCb29rcztcbiAgICAgICAgbGV0IGxpc3ROYW1lID0gdGhpcy5wcm9wcy5jb2xsZWN0aW9uID8gdGhpcy5wcm9wcy5jb2xsZWN0aW9uLm5hbWUgOiAnJztcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLnByb3BzLmNvbGxlY3Rpb24gPyB0aGlzLnByb3BzLmNvbGxlY3Rpb24uaXRlbXNcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBCb29sZWFuKGl0ZW0ucmVmRGF0YSkpXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbS5yZWZEYXRhKSA6IFtdO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5LCB7Y2xhc3NOYW1lOiBcImhvbWVcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicm93XCJ9LCB0aGlzLnByb3BzLnNlc3Npb24udXNlci5yb2xlID09PSAndmlzaXRvcicgJiYgIXRoaXMucHJvcHMuc2Vzc2lvbi5pc0ZldGNoaW5nID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJoZXJvLWltYWdlXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibG9nb1wifSwgXCJSZWFkclwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtdGl0bGVcIn0sIFwi5paw5LiA5LujIHdlYiDpmIXor7vkvZPpqoxcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7dG86IFwiL3NpZ251cFwifSwgXCLms6jlhoxcIikpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb2wtbWQtOFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChCb29rTGlzdFNlY3Rpb24sIHtib29rRW50aXRpZXM6IG5ld2VzdEJvb2tzLCB0aXRsZTogXCLmlrDkuabpgJ/pgJJcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tMaXN0U2VjdGlvbiwge2Jvb2tFbnRpdGllczogbGlzdCwgdGl0bGU6IGxpc3ROYW1lLCBtb3JlTGluazogYC9jb2xsZWN0aW9ucy8ke3RoaXMucHJvcHMuY29sbGVjdGlvbiA/IHRoaXMucHJvcHMuY29sbGVjdGlvbi5pZCA6ICcnfWB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCBfX2Fzc2lnbih7fSwgeyBzdHlsZU5hbWU6ICdibHVlJyB9LCB7Y2xhc3NOYW1lOiBcInZpZXctbW9yZVwiLCB0bzogXCIvY29sbGVjdGlvbnNcIn0pLCBcIua1j+iniOabtOWkmuS5puWNlTIgPlwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb2wtbWQtNFwifSwgdGhpcy5zdGF0ZS5zaG93UmVjZW50UmVhZGluZyA/IChSZWFjdC5jcmVhdGVFbGVtZW50KENhbmR5Qm94LCB7dGl0bGU6IFwi5pyA6L+R6ZiF6K+7MjIyXCIsIGxpc3Q6IFtdfSkpIDogbnVsbCkpKSk7XG4gICAgfVxufTtcbkhvbWUgPSBfX2RlY29yYXRlKFtcbiAgICBDU1NNb2R1bGVzKHN0eWxlcylcbl0sIEhvbWUpO1xuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlLnBhZ2luYXRpb24uYm9va3MubmV3ZXN0KTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VyQm9va3M6IFtdLFxuICAgICAgICBuZXdlc3RCb29rczogc3RhdGUucGFnaW5hdGlvbi5ib29rcy5uZXdlc3RcbiAgICAgICAgICAgID8gc3RhdGUucGFnaW5hdGlvbi5ib29rcy5uZXdlc3QuaWRzLm1hcChpZCA9PiBzdGF0ZS5lbnRpdGllcy5ib29rc1tpZF0pXG4gICAgICAgICAgICA6IFtdLFxuICAgICAgICBzZXNzaW9uOiBzdGF0ZS5zZXNzaW9uLFxuICAgICAgICAvLyB0b2RvOiBjb2xsZWN0aW9uIHBhZ2luYXRpb25cbiAgICAgICAgY29sbGVjdGlvbjogKCgpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gc3RhdGUuZW50aXRpZXMuYm9va0NvbGxlY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmVudGl0aWVzLmJvb2tDb2xsZWN0aW9uc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKVxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBmZXRjaEJvb2tzLCBmZXRjaENvbGxlY3Rpb25zIH0pKEhvbWUpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvaG9tZS9ob21lLnRzeFxuICoqLyIsImltcG9ydCBIb21lIGZyb20gJy4vaG9tZSc7XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuLy8gZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9ob21lJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvaG9tZS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IE5hdlRhYiBmcm9tICcuLi9lbGVtZW50cy9uYXYtdGFiJztcbmltcG9ydCB7IGZldGNoQm9va3MsIGZldGNoQ29sbGVjdGlvbnMsIGZldGNoU2hlbGYsIHNlbmROb3RpZmljYXRpb24gfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBCb29rTGlzdFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9ib29rLWxpc3Qtc2VjdGlvbic7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9lbGVtZW50cy9mb3JtJztcbmNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8vIHN0YXRpYyBmZXRjaERhdGEoe3N0b3JlLCBwYXJhbXN9KSB7XG4gICAgLy8gICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZmV0Y2goKSlcbiAgICAvLyB9XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaEJvb2tzKCk7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hTaGVsZignMTU1OTMxODcnKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbmV3ZXN0Qm9va3MgPSB0aGlzLnByb3BzLm5ld2VzdEJvb2tzO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwcm9maWxlXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicGFnZS1oZWFkZXJcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJ1c2VyLWF2YXRhclwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7c3JjOiBcImh0dHBzOi8vaW1nMy5kb3ViYW5pby5jb20vaWNvbi91bDQzNjQ2NzA2LTQzLmpwZ1wiLCBhbHQ6IFwidXNlcl9hdmF0YXJcIn0pKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJ1c2VybmFtZVwifSwgXCJ1c2VybmFtZVwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJ0YWdsaW5lXCJ9LCBcInNvbWV0aGluZyB0byBzYXlcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCBudWxsLCBcIue8lui+kVwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2VGFiLCB7dGFiczogWyfmlLbol48nLCAn6K+76L+HJywgJ+S5puivhCddLCBjdXJyZW50OiAwfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChCb29rTGlzdFNlY3Rpb24sIHt0aXRsZTogXCLwn5iEXCIsIGJvb2tFbnRpdGllczogbmV3ZXN0Qm9va3N9KSkpKTtcbiAgICB9XG59XG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvbixcbiAgICAgICAgbmV3ZXN0Qm9va3M6IHN0YXRlLnBhZ2luYXRpb24uYm9va3MubmV3ZXN0XG4gICAgICAgICAgICA/IHN0YXRlLnBhZ2luYXRpb24uYm9va3MubmV3ZXN0Lmlkcy5tYXAoaWQgPT4gc3RhdGUuZW50aXRpZXMuYm9va3NbaWRdKVxuICAgICAgICAgICAgOiBbXVxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBzZW5kTm90aWZpY2F0aW9uLCBmZXRjaEJvb2tzLCBmZXRjaENvbGxlY3Rpb25zLCBmZXRjaFNoZWxmIH0pKFByb2ZpbGUpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvcHJvZmlsZS50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24gfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBBbGVydCBmcm9tICcuLi9lbGVtZW50cy9hbGVydCc7XG5jbGFzcyBSb290IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImFwcC1yb290XCJ9LCB0aGlzLnByb3BzLm5vdGlmaWNhdGlvbnMuZmlsdGVyKG5vdGkgPT4gbm90aS52aXNpYmxlKS5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibm90aWZpY2F0aW9uc1wifSwgdGhpcy5wcm9wcy5ub3RpZmljYXRpb25zLm1hcCgobm90aSwgaW5kZXgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEFsZXJ0LCB7a2V5OiBpbmRleCwgdHlwZTogbm90aS50eXBlLCBtZXNzYWdlOiBub3RpLm1lc3NhZ2UsIHZpc2libGU6IG5vdGkudmlzaWJsZX0pKSkpKVxuICAgICAgICAgICAgOiBudWxsLCB0aGlzLnByb3BzLmNoaWxkcmVuKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiAoeyBub3RpZmljYXRpb25zOiBzdGF0ZS5jb21wb25lbnRzLm5vdGlmaWNhdGlvbnMgfSksIHsgc2VuZE5vdGlmaWNhdGlvbiB9KShSb290KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL3Jvb3QudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uLCB1c2VyQXV0aCwgZmV0Y2hQcm9maWxlIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgTmF2VGFiIGZyb20gJy4uL2VsZW1lbnRzL25hdi10YWInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vc2lkZS1lZmZlY3RzL2JvZHknO1xuaW1wb3J0IFN3aXRjaGVyIGZyb20gJy4uL2VsZW1lbnRzL3N3aXRjaGVyJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5jbGFzcyBQcm9maWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvLyBzdGF0aWMgZmV0Y2hEYXRhKHtzdG9yZSwgcGFyYW1zfSkge1xuICAgIC8vICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGZldGNoKCkpXG4gICAgLy8gfVxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIC8vIHVzZXIgc2Vzc2lvbiBmZXRjaGVkXG4gICAgICAgIGlmIChuZXh0UHJvcHMuc2Vzc2lvbi5pc0ZldGNoaW5nID09PSBmYWxzZSAmJiB0aGlzLnByb3BzLnNlc3Npb24uaXNGZXRjaGluZykge1xuICAgICAgICAgICAgY29uc3QgdXNlcklkID0gbmV4dFByb3BzLnNlc3Npb24udXNlci5pZDtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hQcm9maWxlKHVzZXJJZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgdXNlciA9IHRoaXMucHJvcHMucHJvZmlsZTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwic2V0dGluZ3NcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keSwge2NsYXNzTmFtZTogXCJwYWdlLXNldHRpbmdzXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtY29udGVudFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtaGVhZGVyXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge2NsYXNzTmFtZTogXCJwYWdlLXRpdGxlXCJ9LCBcIuiuvue9rlwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChOYXZUYWIsIHt0YWJzOiBbJ+i1hOaWmScsICfkuKrkurrkuLvpobUnXSwgY3VycmVudDogMH0pKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtjbGFzc05hbWU6IFwib3B0aW9uc1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IFwib3B0aW9uXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgbnVsbCwgXCLnlKjmiLflkI1cIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwib3B0aW9uLWlucHV0XCJ9LCBcImh0dHA6Ly9yZWFkcndlYi5jb20vQFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIHVzZXIudXNlcm5hbWUpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJlZGl0XCJ9LCBcIue8lui+kVwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBcIm9wdGlvblwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIFwi6YKu566xXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcIm9wdGlvbi1pbnB1dFwifSwgdXNlci5lbWFpbCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiZWRpdFwifSwgXCLnvJbovpFcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogXCJvcHRpb25cIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBcIuWvhueggVwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJvcHRpb24taW5wdXRcIn0sIFwiKioqKioqXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImVkaXRcIn0sIFwi57yW6L6RXCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IFwib3B0aW9uXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgbnVsbCwgXCLlhazlvIDlsZXnpLrmiJHnmoTmlLbol49cIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwib3B0aW9uLWRlc2NcIn0sIFwi5YWz6Zet5ZCO5YW25LuW55So5oi35bCG5peg5rOV5p+l55yL5oKo55qE5pS26JePXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXRjaGVyLCB7b246IHRydWV9KSkpKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4ge1xuICAgIGNvbnN0IHVzZXJJZCA9IHN0YXRlLnNlc3Npb24udXNlci5yb2xlICE9PSAndmlzaXRvcicgPyBzdGF0ZS5zZXNzaW9uLnVzZXIuaWQgOiAnJztcbiAgICBjb25zdCBwcm9maWxlID0gdXNlcklkICYmICFfLmlzRW1wdHkoc3RhdGUuZW50aXRpZXMucHJvZmlsZXMpID8gc3RhdGUuZW50aXRpZXMucHJvZmlsZXNbdXNlcklkXSA6IHt9O1xuICAgIHJldHVybiB7XG4gICAgICAgIG5vdGlmaWNhdGlvbjogc3RhdGUubm90aWZpY2F0aW9uLFxuICAgICAgICBzZXNzaW9uOiBzdGF0ZS5zZXNzaW9uLFxuICAgICAgICBwcm9maWxlXG4gICAgfTtcbn0sIHsgc2VuZE5vdGlmaWNhdGlvbiwgdXNlckF1dGgsIGZldGNoUHJvZmlsZSB9KShQcm9maWxlKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL3NldHRpbmdzLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgTGluaywgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IEFwaVJvb3RzIGZyb20gJy4uL2FwaS1jb25maWcvYXBpLXJvb3RzJztcbmltcG9ydCBjYWxsQXBpIGZyb20gJy4uL3V0aWxzL2NhbGwtYXBpJztcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24gfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBCcmFuZGluZyBmcm9tICcuLi9jb21wb25lbnRzL2JyYW5kaW5nJztcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQgfSBmcm9tICcuLi9lbGVtZW50cy9mb3JtJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vZWxlbWVudHMvbGF5b3V0L2NvbnRhaW5lcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9zaWRlLWVmZmVjdHMvYm9keSc7XG5jbGFzcyBTaWduaW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvZ2luOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgICB9O1xuICAgIH1cbiAgICBoYW5kbGVTaWduaW4oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIGxvZ2luOiB0aGlzLnN0YXRlLmxvZ2luLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmRcbiAgICAgICAgfTtcbiAgICAgICAgY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1hdXRoYCwgeyBtZXRob2Q6ICdQT1NUJywgZGF0YTogcGFyYW1zIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign55m75b2V5oiQ5Yqf77yBJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgICAgICAgICB9LCA2MDApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5LCB7Y2xhc3NOYW1lOiBcInNpZ25pblwifSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnJhbmRpbmcsIG51bGwpLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwge2NsYXNzTmFtZTogXCJjb250ZW50LWNvbnRhaW5lclwiLCBhY3Rpb246IGAke0FwaVJvb3RzLkxPQ0FMfWF1dGhgLCBtZXRob2Q6IFwicG9zdFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHtjbGFzc05hbWU6IFwicGFnZS10aXRsZVwifSwgXCLmrKLov47lm57mnaVcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHtvbkNoYW5nZTogdGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpLCB2YWx1ZTogdGhpcy5zdGF0ZS5sb2dpbiwgbmFtZTogXCJsb2dpblwiLCBwbGFjZWhvbGRlcjogXCLnlKjmiLflkI3miJbpgq7nrrFcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7b25DaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKSwgdmFsdWU6IHRoaXMuc3RhdGUucGFzc3dvcmQsIG5hbWU6IFwicGFzc3dvcmRcIiwgcGxhY2Vob2xkZXI6IFwi5a+G56CBXCIsIHR5cGU6IFwicGFzc3dvcmRcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge2NsYXNzTmFtZTogXCJ6MVwiLCBjb2xvcjogXCJibHVlXCIsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlU2lnbmluLmJpbmQodGhpcyl9LCBcIueZu+W9lVwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwge2NsYXNzTmFtZTogXCJoaW50XCJ9LCBcIuayoeaciei0puWPt++8n1wiLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvc2lnbnVwXCJ9LCBcIuazqOWGjFwiKSkpKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgICBub3RpZmljYXRpb246IHN0YXRlLmNvbXBvbmVudHMubm90aWZpY2F0aW9uLFxuICAgIHVzZXI6IHN0YXRlLnVzZXJcbn0pLCB7IHNlbmROb3RpZmljYXRpb24gfSkoU2lnbmluKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL3NpZ25pbi50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IExpbmssIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBBcGlSb290cyBmcm9tICcuLi9hcGktY29uZmlnL2FwaS1yb290cyc7XG5pbXBvcnQgY2FsbEFwaSBmcm9tICcuLi91dGlscy9jYWxsLWFwaSc7XG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgQnJhbmRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9icmFuZGluZyc7XG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnLi4vZWxlbWVudHMvZm9ybSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2VsZW1lbnRzL2xheW91dC9jb250YWluZXInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vc2lkZS1lZmZlY3RzL2JvZHknO1xuY2xhc3MgU2lnbnVwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB1c2VybmFtZTogJycsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICBwYXNzd29yZDogJydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaGFuZGxlU2lnbnVwKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICB1c2VybmFtZTogdGhpcy5zdGF0ZS51c2VybmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmRcbiAgICAgICAgfTtcbiAgICAgICAgY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH11c2Vyc2AsIHsgbWV0aG9kOiAnUE9TVCcsIGRhdGE6IHBhcmFtcyB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5rOo5YaM5oiQ5Yqf77yBJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgICAgICAgICB9LCA2MDApO1xuICAgICAgICB9LCBlcnIgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKGVyci5tZXNzYWdlLCAnZXJyb3InKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZUlucHV0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keSwge2NsYXNzTmFtZTogXCJzaWdudXBcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJyYW5kaW5nLCBudWxsKSwgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHtjbGFzc05hbWU6IFwiY29udGVudC1jb250YWluZXJcIiwgbWV0aG9kOiBcInBvc3RcIiwgYWN0aW9uOiBcIi9zaWdudXBcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtdGl0bGVcIn0sIFwi5Yqg5YWlIFJlYWRyXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7b25DaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKSwgdmFsdWU6IHRoaXMuc3RhdGUudXNlcm5hbWUsIG5hbWU6IFwidXNlcm5hbWVcIiwgcGxhY2Vob2xkZXI6IFwi55So5oi35ZCNXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwge29uQ2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0LmJpbmQodGhpcyksIHZhbHVlOiB0aGlzLnN0YXRlLmVtYWlsLCBuYW1lOiBcImVtYWlsXCIsIHBsYWNlaG9sZGVyOiBcIumCrueusVwifSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHtvbkNoYW5nZTogdGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpLCB2YWx1ZTogdGhpcy5zdGF0ZS5wYXNzd29yZCwgbmFtZTogXCJwYXNzd29yZFwiLCBwbGFjZWhvbGRlcjogXCLlr4bnoIEgXCIsIHR5cGU6IFwicGFzc3dvcmRcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge2NsYXNzTmFtZTogXCJ6MVwiLCBjb2xvcjogXCJibHVlXCIsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlU2lnbnVwLmJpbmQodGhpcyl9LCBcIuazqOWGjFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwge2NsYXNzTmFtZTogXCJoaW50XCJ9LCBcIuayoeaciei0puWPt++8n1wiLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvc2lnbmluXCJ9LCBcIueZu+W9lVwiKSkpKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgICBub3RpZmljYXRpb246IHN0YXRlLmNvbXBvbmVudHMubm90aWZpY2F0aW9uLFxuICAgIHVzZXI6IHN0YXRlLnVzZXJcbn0pLCB7IHNlbmROb3RpZmljYXRpb24gfSkoU2lnbnVwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL3NpZ251cC50c3hcbiAqKi8iLCJpbXBvcnQgVmlld2VyIGZyb20gJy4vdmlld2VyJztcbmV4cG9ydCBkZWZhdWx0IFZpZXdlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL3ZpZXdlci9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uL2VsZW1lbnRzL2ljb24nO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vZWxlbWVudHMvbG9hZGluZyc7XG5pbXBvcnQgRGlhbG9nIGZyb20gJy4uLy4uL2VsZW1lbnRzL0RpYWxvZyc7XG5pbXBvcnQgQm9va1BhZ2VMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYm9vay1wYWdlLWxpc3QnO1xuaW1wb3J0ICogYXMgcmVuZGVyQm9vayBmcm9tICcuLi8uLi91dGlscy9yZW5kZXItYm9vayc7XG5pbXBvcnQgeyBnZXRCb29rVmlldyB9IGZyb20gJy4uLy4uL3V0aWxzL3ZpZXcnO1xuaW1wb3J0IHsgZ2V0Q2FjaGUsIHNldENhY2hlIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2FjaGUnO1xuaW1wb3J0IHsgc2ltcGxlQ29tcGFyZU9iamVjdHMgfSBmcm9tICcuLi8uLi91dGlscy9vYmplY3QnO1xuaW1wb3J0IHsgZmV0Y2hCb29rLCB1c2VyQXV0aCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IGFwaXMgZnJvbSAnLi4vLi4vdXRpbHMvYXBpcyc7XG5pbXBvcnQgQm9keSBmcm9tICcuLi8uLi9zaWRlLWVmZmVjdHMvYm9keSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFZpZXdlclByZWZlcmVuY2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy92aWV3ZXItcHJlZmVyZW5jZSc7XG5pbXBvcnQgRmFkZSBmcm9tICcuLi8uLi9lbGVtZW50cy9hbmltYXRpb25zL2ZhZGUnO1xuaW1wb3J0IFZpZXdlclNjcm9sbGJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3ZpZXdlci1zY3JvbGxiYXInO1xuY29uc3QgYWN0aW9ucyA9IHsgZmV0Y2hCb29rLCB1c2VyQXV0aCB9O1xuY2xhc3MgVmlld2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuYm9va0lkID0gcHJvcHMucGFyYW1zLmlkO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvd1BhbmVsOiB0cnVlLFxuICAgICAgICAgICAgc2hvd1Byb2dyZXNzRGlhbG9nOiBmYWxzZSxcbiAgICAgICAgICAgIGlzQ2FsY3VsYXRpbmdEb206IGZhbHNlLFxuICAgICAgICAgICAgaXNSZWFkaW5nTW9kZTogZmFsc2UsXG4gICAgICAgICAgICBpc1Njcm9sbE1vZGU6IHRydWUsXG4gICAgICAgICAgICBpc0luaXRpYWxQcm9ncmVzc1NldDogZmFsc2UsXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogMCxcbiAgICAgICAgICAgIGNhbGN1bGF0ZWRQYWdlczogbnVsbCxcbiAgICAgICAgICAgIGxhdGVzdFByb2dyZXNzOiAwLFxuICAgICAgICAgICAgdmlldzogZ2V0Qm9va1ZpZXcoKSxcbiAgICAgICAgICAgIHNob3dWaWV3ZXJQcmVmZXJlbmNlOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRvZ2dsZVZpZXdlclByZWZlcmVuY2UgPSB0aGlzLnRvZ2dsZVZpZXdlclByZWZlcmVuY2UuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgdG9nZ2xlVmlld2VyUHJlZmVyZW5jZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93Vmlld2VyUHJlZmVyZW5jZTogIXRoaXMuc3RhdGUuc2hvd1ZpZXdlclByZWZlcmVuY2VcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNjcm9sbFRvKHBvc2l0aW9uKSB7XG4gICAgICAgIGxldCBwYWdlQ291bnQgPSB0aGlzLnN0YXRlLmNhbGN1bGF0ZWRQYWdlcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGxldCBwYWdlSGVpZ2h0ID0gdGhpcy5zdGF0ZS5jYWxjdWxhdGVkUGFnZXMucHJvcHMudmlldy5wYWdlSGVpZ2h0O1xuICAgICAgICBsZXQgaGVpZ2h0ID0gcGFnZUNvdW50ICogcGFnZUhlaWdodDtcbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IHJlbmRlckJvb2sucGVyY2VudGFnZVRvUGFnZShwb3NpdGlvbiwgcGFnZUNvdW50KSxcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHBvc2l0aW9uICogaGVpZ2h0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gcGFnZUNvdW50ICogcGFnZUhlaWdodCAqIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogaGVpZ2h0ICogcG9zaXRpb24gLyBwYWdlQ291bnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBwYWdlSGVpZ2h0ICogcG9zaXRpb247XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMubWFwU2Nyb2xsVG9wVG9TdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogZG9jdW1lbnQuYm9keS5zY3JvbGxUb3BcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1hcFdpbmRvd1dpZHRoVG9TdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHdpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubWFwVmlld1RvU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB2aWV3OiBnZXRCb29rVmlldygpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jaGVja0FuZFNldFByb2dyZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRQYWdlTm8gPSB0aGlzLnByb3BzLmJvb2sucGFnZU5vO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLmZldGNoQm9va1Byb2dyZXNzKHRoaXMuYm9va0lkKS50aGVuKGFjdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYm9vay5wYWdlTm8gLSBjdXJyZW50UGFnZU5vID4gNSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dQcm9ncmVzc0RpYWxvZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVzdFByb2dyZXNzOiB0aGlzLnByb3BzLmJvb2sucGVyY2VudGFnZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwYWdlU3VtID0gdGhpcy5zdGF0ZS5jYWxjdWxhdGVkUGFnZXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0ID0gcGFnZVN1bSAqIHRoaXMuc3RhdGUudmlldy5wYWdlSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGVyY2VudGFnZSA9IHRoaXMuc3RhdGUuc2Nyb2xsVG9wIC8gaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGFnZU5vID0gcmVuZGVyQm9vay5wZXJjZW50YWdlVG9QYWdlKHBlcmNlbnRhZ2UsIHBhZ2VTdW0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlTm8sXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU3VtLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBhcGlzLnNldFByb2dyZXNzKHRoaXMuYm9va0lkLCBwcm9ncmVzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFRPRE86IHVzZSBzZXNzaW9uIHRvIGRldGVybWluZSBsYXRlc3QgcHJvZ3Jlc3NcbiAgICAgICAgdGhpcy5kZWJvdW5kZWRTZXRQcm9ncmVzcyA9IF8uZGVib3VuY2UodGhpcy5jaGVja0FuZFNldFByb2dyZXNzLCAyMDApO1xuICAgICAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5kZWJvdW5kZWRTZXRQcm9ncmVzcylcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMubWFwU2Nyb2xsVG9wVG9TdGF0ZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm1hcFdpbmRvd1dpZHRoVG9TdGF0ZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm1hcFZpZXdUb1N0YXRlKTtcbiAgICB9XG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmRlYm91bmRlZFNldFByb2dyZXNzKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMubWFwU2Nyb2xsVG9wVG9TdGF0ZSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm1hcFdpbmRvd1dpZHRoVG9TdGF0ZSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm1hcFZpZXdUb1N0YXRlKTtcbiAgICB9XG4gICAgdG9nZ2xlQm9va1BhbmVsKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNhbGN1bGF0ZWRQYWdlcy5wcm9wcy52aWV3LnNjcmVlbiA9PT0gJ2hkJykge1xuICAgICAgICAgICAgbGV0IHkgPSBldmVudC5wYWdlWSAtIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgaWYgKHkgPCA5MCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzaG93UGFuZWw6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzaG93UGFuZWw6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xpY2tUb1RvZ2dsZUJvb2tQYW5lbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY2FsY3VsYXRlZFBhZ2VzLnByb3BzLnZpZXcuc2NyZWVuID09PSAncGhvbmUnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzaG93UGFuZWw6ICF0aGlzLnN0YXRlLnNob3dQYW5lbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2FsY3VsYXRlRG9tKCkge1xuICAgICAgICBsZXQgaHRtbCA9IHRoaXMuc3RhdGUuYm9va0h0bWw7XG4gICAgICAgIGxldCBib29rSWQgPSB0aGlzLmJvb2tJZDtcbiAgICAgICAgbGV0IHZpZXcgPSBnZXRCb29rVmlldygpO1xuICAgICAgICBsZXQgbm9kZUhlaWdodHMgPSByZW5kZXJCb29rLmdldE5vZGVIZWlnaHRzKHRoaXMucmVmcy5ib29rSHRtbC5jaGlsZE5vZGVzKTtcbiAgICAgICAgbGV0IHBhZ2VzID0gcmVuZGVyQm9vay5odG1sVG9QYWdlcyhodG1sLCBub2RlSGVpZ2h0cywgdmlldyk7XG4gICAgICAgIHNldENhY2hlKGBib29rJHtib29rSWR9X3BhZ2VzYCwgSlNPTi5zdHJpbmdpZnkocGFnZXMpKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1JlYWRpbmdNb2RlOiB0cnVlLFxuICAgICAgICAgICAgaXNDYWxjdWxhdGluZ0RvbTogZmFsc2UsXG4gICAgICAgICAgICBjYWxjdWxhdGVkUGFnZXM6IHBhZ2VzXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsb2FkQ2FsY3VsYXRlZFBhZ2VzKCkge1xuICAgICAgICBjb25zdCBib29rSWQgPSB0aGlzLnByb3BzLnBhcmFtcy5pZDtcbiAgICAgICAgbGV0IHBhZ2VzID0gZ2V0Q2FjaGUoYGJvb2ske2Jvb2tJZH1fcGFnZXNgKTtcbiAgICAgICAgLy8gY2hlY2sgaWYgcGFnZXMgYXJlIGNhY2hlZFxuICAgICAgICBpZiAocGFnZXMpIHtcbiAgICAgICAgICAgIHBhZ2VzID0gSlNPTi5wYXJzZShwYWdlcyk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc1JlYWRpbmdNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZWRQYWdlczogcGFnZXMsXG4gICAgICAgICAgICAgICAgYm9va0h0bWw6IHJlbmRlckJvb2sucGFnZXNUb0h0bWwocGFnZXMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy5mZXRjaEJvb2soYm9va0lkLCBbJ2NvbnRlbnQnXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICBpZiAobmV4dFByb3BzLmJvb2sgJiYgbmV4dFByb3BzLmJvb2suY29udGVudCAmJiBuZXh0UHJvcHMuYm9vay5jb250ZW50Lmh0bWwgJiYgIXRoaXMucHJvcHMuYm9vay5jb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc0NhbGN1bGF0aW5nRG9tOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJvb2tIdG1sOiBuZXh0UHJvcHMuYm9vay5jb250ZW50Lmh0bWxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2ltcGxlQ29tcGFyZU9iamVjdHModGhpcy5zdGF0ZS52aWV3LCBuZXh0U3RhdGUudmlldykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGlzQ2FsY3VsYXRpbmdEb206IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNDYWxjdWxhdGluZ0RvbSAmJiAhcHJldlN0YXRlLmlzQ2FsY3VsYXRpbmdEb20pIHtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlRG9tKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2Nyb2xsIHRvIHByZXZpb3VzIHJlYWRpbmcgcHJvZ3Jlc3Mgd2hlbiBvcGVuaW5nIGEgYm9va1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5ib29rICYmIHRoaXMucHJvcHMuYm9vay5wZXJjZW50YWdlICYmIHRoaXMuc3RhdGUuY2FsY3VsYXRlZFBhZ2VzICYmICF0aGlzLnN0YXRlLmlzSW5pdGlhbFByb2dyZXNzU2V0KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMucHJvcHMuYm9vay5wZXJjZW50YWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgaXNJbml0aWFsUHJvZ3Jlc3NTZXQ6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5wcm9wcy5hY3Rpb25zO1xuICAgICAgICBjb25zdCBib29rSWQgPSB0aGlzLnByb3BzLnBhcmFtcy5pZDtcbiAgICAgICAgYWN0aW9ucy51c2VyQXV0aCgpO1xuICAgICAgICBhY3Rpb25zLmZldGNoQm9vayhib29rSWQpO1xuICAgICAgICAvLyBhY3Rpb25zLmZldGNoQm9va1Byb2dyZXNzKGJvb2tJZClcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLmxvYWRDYWxjdWxhdGVkUGFnZXMoKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0luaXRpYWxQcm9ncmVzc1NldDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbmRlckJvb2soKSB7XG4gICAgICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLnN0YXRlLnNjcm9sbFRvcDtcbiAgICAgICAgbGV0IGNhbGN1bGF0ZWRQYWdlcyA9IHRoaXMuc3RhdGUuY2FsY3VsYXRlZFBhZ2VzO1xuICAgICAgICBsZXQgYm9va0lkID0gdGhpcy5wcm9wcy5wYXJhbXMuaWQ7XG4gICAgICAgIGxldCB2aWV3ID0gY2FsY3VsYXRlZFBhZ2VzLnByb3BzLnZpZXc7XG4gICAgICAgIGxldCBoZWlnaHQgPSBjYWxjdWxhdGVkUGFnZXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoICogdmlldy5wYWdlSGVpZ2h0O1xuICAgICAgICBsZXQgY3VycmVudFBhZ2UgPSByZW5kZXJCb29rLnBlcmNlbnRhZ2VUb1BhZ2Uoc2Nyb2xsVG9wIC8gaGVpZ2h0LCBjYWxjdWxhdGVkUGFnZXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICAgICAgbGV0IHBhZ2VzID0gcmVuZGVyQm9vay5maWx0ZXJQYWdlcyh7XG4gICAgICAgICAgICBzdGFydFBhZ2U6IGN1cnJlbnRQYWdlLFxuICAgICAgICAgICAgb2Zmc2V0OiAyLFxuICAgICAgICAgICAgcXVhbnRpdHk6IDUsXG4gICAgICAgICAgICBwYWdlczogY2FsY3VsYXRlZFBhZ2VzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge29uQ2xpY2s6IHRoaXMuY2xpY2tUb1RvZ2dsZUJvb2tQYW5lbC5iaW5kKHRoaXMpfSwgUmVhY3QuY3JlYXRlRWxlbWVudChCb29rUGFnZUxpc3QsIHtoZWlnaHQ6IGhlaWdodCwgdmlldzogdmlldywgYm9va0lkOiBib29rSWQsIHBhZ2VzOiBwYWdlc30pKSk7XG4gICAgfVxuICAgIGhpZGVQcm9ncmVzc0RpYWxvZygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93UHJvZ3Jlc3NEaWFsb2c6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBib29rID0gdGhpcy5wcm9wcy5ib29rO1xuICAgICAgICBsZXQgdmlldyA9IHRoaXMuc3RhdGUudmlldztcbiAgICAgICAgbGV0IGFjdGlvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ1llcycsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb246ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUby5jYWxsKHRoaXMsIHRoaXMuc3RhdGUubGF0ZXN0UHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVQcm9ncmVzc0RpYWxvZy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ05vJyxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbjogdGhpcy5oaWRlUHJvZ3Jlc3NEaWFsb2cuYmluZCh0aGlzKVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogYHZpZXdlciB2aWV3ZXItLSR7dmlldy5zY3JlZW59YCwgb25Nb3VzZU1vdmU6IHRoaXMudG9nZ2xlQm9va1BhbmVsLmJpbmQodGhpcyl9LCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHksIHtjbGFzc05hbWU6IFwidmlld2VyXCJ9KSwgIWJvb2suY29udGVudCAmJiAhdGhpcy5zdGF0ZS5jYWxjdWxhdGVkUGFnZXMgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nLCBudWxsKSkgOiBudWxsLCB0aGlzLnN0YXRlLnNob3dQcm9ncmVzc0RpYWxvZyA/IChSZWFjdC5jcmVhdGVFbGVtZW50KERpYWxvZywge2FjdGlvbnM6IGFjdGlvbnMsIGNvbnRlbnQ6IFwiYXJlIHlvdSBzdXJlP1wifSkpIDogbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdENTU1RyYW5zaXRpb25Hcm91cCwge2NvbXBvbmVudDogXCJkaXZcIiwgdHJhbnNpdGlvbk5hbWU6IFwic2xpZGVcIiwgdHJhbnNpdGlvbkVudGVyVGltZW91dDogMzAwLCB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0OiAzMDB9LCAodGhpcy5zdGF0ZS5zaG93UGFuZWwgJiYgdGhpcy5zdGF0ZS5pc1JlYWRpbmdNb2RlKSB8fCB0aGlzLnN0YXRlLnNob3dWaWV3ZXJQcmVmZXJlbmNlID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJ2aWV3ZXItcGFuZWxcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb250YWluZXJcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJiYWNrXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHtuYW1lOiBcImJhY2tcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIui/lOWbnlwiKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcInRpdGxlXCJ9LCBib29rLnRpdGxlKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7b25DbGljazogdGhpcy50b2dnbGVWaWV3ZXJQcmVmZXJlbmNlLCBjbGFzc05hbWU6IFwicHJlZmVyZW5jZVwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7bmFtZTogXCJmb250XCJ9KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJhZGRcIn0sIFwi54K55Ye75re75Yqg6Iez5Lmm5p62XCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZhZGUsIG51bGwsIHRoaXMuc3RhdGUuc2hvd1ZpZXdlclByZWZlcmVuY2UgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChWaWV3ZXJQcmVmZXJlbmNlLCBudWxsKSkgOiBudWxsKSkpKSA6IG51bGwpLCAodGhpcy5zdGF0ZS5pc0NhbGN1bGF0aW5nRG9tICYmIHRoaXMuc3RhdGUuYm9va0h0bWwpID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcInBhZ2VzXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7cmVmOiBcImJvb2tIdG1sXCIsIGNsYXNzTmFtZTogXCJjb250ZW50XCIsIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogdGhpcy5zdGF0ZS5ib29rSHRtbCB9fSkpKSkgOiBudWxsLCB0aGlzLnN0YXRlLmlzUmVhZGluZ01vZGUgPyAodGhpcy5yZW5kZXJCb29rKCkpIDogbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChWaWV3ZXJTY3JvbGxiYXIsIHtjdXJyZW50OiAyMCwgdG90YWw6IDMwOX0pKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9vazogc3RhdGUuZW50aXRpZXMuYm9va3Nbb3duUHJvcHMucGFyYW1zLmlkXSA/IHN0YXRlLmVudGl0aWVzLmJvb2tzW293blByb3BzLnBhcmFtcy5pZF0gOiB7fSxcbiAgICAgICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvblxuICAgIH07XG59LCBkaXNwYXRjaCA9PiAoe1xuICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLCBkaXNwYXRjaClcbn0pKShWaWV3ZXIpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvdmlld2VyL3ZpZXdlci50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuY2xhc3MgRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRDbGFzcyA9ICdkaWFsb2cgejEnO1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWUgPyBgJHtkZWZhdWx0Q2xhc3N9ICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YCA6IGRlZmF1bHRDbGFzcztcbiAgICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLnByb3BzLmNvbnRlbnQ7XG4gICAgICAgIGxldCBhY3Rpb25zID0gdGhpcy5wcm9wcy5hY3Rpb25zO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogY2xhc3NOYW1lfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgY29udGVudCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJhY3Rpb25zXCJ9LCBhY3Rpb25zLm1hcCgoYWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtrZXk6IGluZGV4LCBvbkNsaWNrOiBhY3Rpb24uZnVuY3Rpb259LCBhY3Rpb24udGV4dCk7XG4gICAgICAgIH0pKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IERpYWxvZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9EaWFsb2cudHN4XG4gKiovIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSwgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vcm91dGVzL2FwcCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHN5bmNIaXN0b3J5V2l0aFN0b3JlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuLi9zdG9yZS9jb25maWd1cmUtc3RvcmUnO1xuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuY29uc3QgaGlzdG9yeSA9IHN5bmNIaXN0b3J5V2l0aFN0b3JlKGJyb3dzZXJIaXN0b3J5LCBzdG9yZSk7XG5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChQcm92aWRlciwge3N0b3JlOiBzdG9yZX0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7aGlzdG9yeTogaGlzdG9yeSwgcm91dGVzOiByb3V0ZXMucHJvcHMuY2hpbGRyZW59KSksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VudHJ5L2FwcC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgTm9NYXRjaCBmcm9tICcuLi9jb250YWluZXJzL25vLW1hdGNoJztcbmltcG9ydCBWaWV3ZXIgZnJvbSAnLi4vY29udGFpbmVycy92aWV3ZXInO1xuaW1wb3J0IFNpZ25pbiBmcm9tICcuLi9jb250YWluZXJzL3NpZ25pbic7XG5pbXBvcnQgU2lnbnVwIGZyb20gJy4uL2NvbnRhaW5lcnMvc2lnbnVwJztcbmltcG9ydCBCb29rSW5mbyBmcm9tICcuLi9jb250YWluZXJzL2Jvb2staW5mbyc7XG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbnRhaW5lcnMvYXBwJztcbmltcG9ydCBIb21lIGZyb20gJy4uL2NvbnRhaW5lcnMvaG9tZSc7XG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuLi9jb250YWluZXJzL3Byb2ZpbGUnO1xuaW1wb3J0IEJvb2tTaGVsZiBmcm9tICcuLi9jb250YWluZXJzL2Jvb2stc2hlbGYnO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4uL2NvbnRhaW5lcnMvc2V0dGluZ3MnO1xuaW1wb3J0IEFyY2hpdmUgZnJvbSAnLi4vY29udGFpbmVycy9hcmNoaXZlJztcbmltcG9ydCBDb2xsZWN0aW9uIGZyb20gJy4uL2NvbnRhaW5lcnMvY29sbGVjdGlvbic7XG5pbXBvcnQgQXJjaGl2ZWRDb2xsZWN0aW9uIGZyb20gJy4uL2NvbnRhaW5lcnMvYXJjaGl2ZWQtY29sbGVjdGlvbic7XG5pbXBvcnQgUm9vdCBmcm9tICcuLi9jb250YWluZXJzL3Jvb3QnO1xuZXhwb3J0IGRlZmF1bHQgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCIvXCIsIGNvbXBvbmVudDogUm9vdH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtjb21wb25lbnQ6IEFwcH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5kZXhSb3V0ZSwge2NvbXBvbmVudDogSG9tZX0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJib29rLzppZFwiLCBjb21wb25lbnQ6IEJvb2tJbmZvfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcInByb2ZpbGVcIiwgY29tcG9uZW50OiBQcm9maWxlfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcInByb2ZpbGUvOnVzZXJcIiwgY29tcG9uZW50OiBQcm9maWxlfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcInNoZWxmXCIsIGNvbXBvbmVudDogQm9va1NoZWxmfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcInNldHRpbmdzXCIsIGNvbXBvbmVudDogU2V0dGluZ3N9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwiYnJvd3NlXCIsIGNvbXBvbmVudDogQXJjaGl2ZX0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJjb2xsZWN0aW9ucy86aWRcIiwgY29tcG9uZW50OiBDb2xsZWN0aW9ufSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcImNvbGxlY3Rpb25zXCIsIGNvbXBvbmVudDogQXJjaGl2ZWRDb2xsZWN0aW9ufSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJzaWduaW5cIiwgY29tcG9uZW50OiBTaWduaW59KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwic2lnbnVwXCIsIGNvbXBvbmVudDogU2lnbnVwfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcInZpZXdlci9ib29rLzppZFwiLCBjb21wb25lbnQ6IFZpZXdlcn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCIqXCIsIGNvbXBvbmVudDogTm9NYXRjaH0pKSkpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3JvdXRlcy9hcHAudHN4XG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIGdldENhY2hlKG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ05hbWUgc2hvdWxkIGJlIHN0cmluZyEnKTtcbiAgICB9XG4gICAgbGV0IGNvbnRlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKTtcbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgY29udGVudCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gY29udGVudDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRDYWNoZShuYW1lLCBjb250ZW50KSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdOYW1lIHNob3VsZCBiZSBzdHJpbmchJyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY29udGVudCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQ2FjaGUgY29udGVudCBzaG91bGQgYmUgc3RyaW5nIScpO1xuICAgIH1cbiAgICBsZXQgc3VjY2VzcyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgY29udGVudCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvdXRpbHMvY2FjaGUudHNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gc2ltcGxlQ29tcGFyZU9iamVjdHMob2JqMSwgb2JqMikge1xuICAgIGxldCBpc0VxdWFsID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICBmb3IgKGxldCBwcm9wIGluIG9iajEpIHtcbiAgICAgICAgICAgIGlmIChvYmoxW3Byb3BdICE9PSBvYmoyW3Byb3BdKSB7XG4gICAgICAgICAgICAgICAgaXNFcXVhbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIGlzRXF1YWwgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGlzRXF1YWw7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvdXRpbHMvb2JqZWN0LnRzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIGZpbHRlclBhZ2VzKGNvbmZpZykge1xuICAgIGxldCB7IHN0YXJ0UGFnZSwgcXVhbnRpdHksIG9mZnNldCwgcGFnZXMgfSA9IGNvbmZpZztcbiAgICBsZXQgbmV3UGFnZXMgPSBbXTtcbiAgICB3aGlsZSAoc3RhcnRQYWdlIC0gb2Zmc2V0IDwgMCkge1xuICAgICAgICBvZmZzZXQtLTtcbiAgICB9XG4gICAgc3RhcnRQYWdlID0gc3RhcnRQYWdlIC0gb2Zmc2V0O1xuICAgIGZvciAobGV0IGkgPSBzdGFydFBhZ2U7IGkgPCBxdWFudGl0eSArIHN0YXJ0UGFnZSAmJiBpIDwgcGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHBhZ2UgPSBwYWdlc1tpXTtcbiAgICAgICAgbmV3UGFnZXMucHVzaChwYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1BhZ2VzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGh0bWxUb1BhZ2VzKGh0bWwsIG5vZGVIZWlnaHRzLCB2aWV3KSB7XG4gICAgbGV0IHBhZ2VIZWlnaHQgPSB2aWV3LnBhZ2VIZWlnaHQ7XG4gICAgbGV0IG5vZGVzID0gcGFyc2VIVE1MKGh0bWwpO1xuICAgIGxldCBwYWdlcyA9IGdyb3VwTm9kZXNCeVBhZ2Uobm9kZXMsIG5vZGVIZWlnaHRzLCBwYWdlSGVpZ2h0KTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAncGFnZXMnLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgY2hpbGRyZW46IHBhZ2VzLFxuICAgICAgICAgICAgdmlld1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYWdlc1RvSHRtbChwYWdlcykge1xuICAgIGxldCBub2RlcyA9IHBhZ2VzLnByb3BzLmNoaWxkcmVuLnJlZHVjZSgoYSwgYikgPT4gKGEuY29uY2F0KGIucHJvcHMuY2hpbGRyZW4pKSwgW10pO1xuICAgIGxldCB1bmlxdWVOb2RlcyA9IFtdO1xuICAgIGxldCByZWFsSW5kZXggPSAwO1xuICAgIC8vIHJlbW92ZSBkdXBsaWNhdGUgbm9kZXNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5vZGVzW2ldO1xuICAgICAgICBpZiAobm9kZXNbaV0ucHJvcHMuaW5kZXggPT09IHJlYWxJbmRleCkge1xuICAgICAgICAgICAgdW5pcXVlTm9kZXMucHVzaChub2Rlc1tpXSk7XG4gICAgICAgICAgICByZWFsSW5kZXgrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgaHRtbCA9IHBhcnNlTm9kZXModW5pcXVlTm9kZXMpO1xuICAgIHJldHVybiBodG1sO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vZGVIZWlnaHRzKG5vZGVzKSB7XG4gICAgbGV0IG5vZGVzSGVpZ2h0ID0gW107XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlcywgKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJwXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbnN1cHBvcnRlZCBjb250ZW50IGZvdW5kIVwiKTtcbiAgICAgICAgfVxuICAgICAgICBub2Rlc0hlaWdodC5wdXNoKG5vZGUuY2xpZW50SGVpZ2h0KTtcbiAgICB9KTtcbiAgICByZXR1cm4gbm9kZXNIZWlnaHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gcGVyY2VudGFnZVRvUGFnZShwLCBwYWdlU3VtKSB7XG4gICAgaWYgKHAgPiAxKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJXcm9uZyBwYXJhbWV0ZXIhXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCgocCAqIHBhZ2VTdW0pKSArIDE7XG4gICAgfVxufVxuLy8gZnVuY3MgdXNlZCBpbnRlcm5hbGx5XG5mdW5jdGlvbiBwYXJzZUhUTUwoaHRtbFN0cmluZykge1xuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIGxldCAkaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0ICRodG1sTm9kZXM7XG4gICAgJGh0bWwuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcbiAgICAkaHRtbE5vZGVzID0gJGh0bWwuY2hpbGROb2RlcztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRodG1sTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCRodG1sTm9kZXNbaV0ubm9kZVR5cGUgIT0gMSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2Rlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAkaHRtbE5vZGVzW2ldLnRhZ05hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogJGh0bWxOb2Rlc1tpXS5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZXM7XG59XG5mdW5jdGlvbiBwYXJzZU5vZGVzKG5vZGVzKSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChub2Rlc1tpXS50eXBlICE9PSAncCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Vuc3VwcG9ydGVkIG5vZGUgZm91bmQhJyk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGh0bWwgKz0gYDxwPiR7bm9kZXNbaV0ucHJvcHMuY2hpbGRyZW59PC9wPmA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGh0bWw7XG59XG5mdW5jdGlvbiBncm91cE5vZGVzQnlQYWdlKG5vZGVzLCBub2RlSGVpZ2h0cywgcGFnZUhlaWdodCkge1xuICAgIGxldCBwYWdlcyA9IFtdO1xuICAgIGxldCBwYWdlSGVpZ2h0U3VtID0gbm9kZUhlaWdodHMucmVkdWNlKChhLCBiKSA9PiAoYSArIGIpLCAwKTtcbiAgICBsZXQgcGFnZVN1bSA9IE1hdGguY2VpbChwYWdlSGVpZ2h0U3VtIC8gcGFnZUhlaWdodCk7XG4gICAgbm9kZXMgPSBub2Rlcy5tYXAoKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgIG5vZGUucHJvcHMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSk7XG4gICAgLy8gbG9uZyBwYXJhZ3JhcGggc2l0dWF0aW9uIGRvZXNuJ3Qgc2VlbSB0byBhZmZlY3QgdGhpcyBmdW5jdGlvblxuICAgIC8vIG9mZnNldCBkaXN0YW5jZSBpcyBhbHdheXMgbmVndGl2ZSBvciB6ZXJvXG4gICAgLy8gdGhlIGluZGV4IHdpbGwgYmUgb2YgdGhlIHBhcmFncmFwaCB3aXRoIHRoaXMgb2Zmc2V0IGF0IHRoZSBlbmRcbiAgICBjb25zdCBnZXRQYWdlT2Zmc2V0ID0gZnVuY3Rpb24gKHBhZ2VJbmRleCkge1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgaW5kZXg7XG4gICAgICAgIGlmIChwYWdlSW5kZXggIT09IDApIHtcbiAgICAgICAgICAgIGxldCBub2RlSGVpZ2h0U3VtID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChub2RlSGVpZ2h0U3VtIDw9IHBhZ2VIZWlnaHQgKiBwYWdlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBub2RlSGVpZ2h0U3VtICs9IG5vZGVIZWlnaHRzW2ldO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9mZnNldCA9IG5vZGVIZWlnaHRTdW0gLSBub2RlSGVpZ2h0c1tpIC0gMV0gLSBwYWdlSW5kZXggKiBwYWdlSGVpZ2h0O1xuICAgICAgICAgICAgaW5kZXggPSBpIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGNvbnN0IGdldE5vZGVzT2ZQYWdlID0gZnVuY3Rpb24gKHBhZ2VJbmRleCkge1xuICAgICAgICBsZXQgb2Zmc2V0T2JqZWN0ID0gZ2V0UGFnZU9mZnNldChwYWdlSW5kZXgpO1xuICAgICAgICBsZXQgbm9kZVN0YXJ0SW5kZXggPSBvZmZzZXRPYmplY3QuaW5kZXg7XG4gICAgICAgIGxldCBvZmZzZXQgPSBvZmZzZXRPYmplY3Qub2Zmc2V0O1xuICAgICAgICBsZXQgaSA9IG5vZGVTdGFydEluZGV4O1xuICAgICAgICBsZXQgbm9kZUVuZEluZGV4O1xuICAgICAgICBsZXQgcGFnZU5vZGVzID0gW107XG4gICAgICAgIGxldCBub2RlSGVpZ2h0U3VtID0gb2Zmc2V0ICsgbm9kZUhlaWdodHNbbm9kZVN0YXJ0SW5kZXhdO1xuICAgICAgICBpKys7XG4gICAgICAgIGlmIChub2RlSGVpZ2h0U3VtIDwgcGFnZUhlaWdodCkge1xuICAgICAgICAgICAgd2hpbGUgKG5vZGVIZWlnaHRTdW0gPD0gcGFnZUhlaWdodCAmJiBpICE9PSBub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBub2RlSGVpZ2h0U3VtICs9IG5vZGVIZWlnaHRzW2ldO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGVFbmRJbmRleCA9IGkgLSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZUVuZEluZGV4ID0gbm9kZVN0YXJ0SW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IG5vZGVTdGFydEluZGV4OyBpIDw9IG5vZGVFbmRJbmRleCAmJiBpIDw9IG5vZGVzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgcGFnZU5vZGVzLnB1c2gobm9kZXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbcGFnZU5vZGVzLCBvZmZzZXRdO1xuICAgIH07XG4gICAgLy8gZmluYWxseVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZVN1bTsgaSsrKSB7XG4gICAgICAgIGxldCBhcnJheSA9IGdldE5vZGVzT2ZQYWdlKGkpO1xuICAgICAgICBsZXQgbm9kZXMgPSBhcnJheVswXTtcbiAgICAgICAgbGV0IG9mZnNldCA9IGFycmF5WzFdO1xuICAgICAgICBwYWdlcy5wdXNoKHtcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IG5vZGVzLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogaSAqIHBhZ2VIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHBhZ2VIZWlnaHRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhZ2VObzogaSArIDEsXG4gICAgICAgICAgICAgICAgb2Zmc2V0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogXCJwYWdlXCJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwYWdlcztcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9yZW5kZXItYm9vay50c1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9hcHAvYXBwLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxMDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImJsdWVcIjpcImhvbWUtYmx1ZS0zTzNmUVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2hvbWUvaG9tZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9