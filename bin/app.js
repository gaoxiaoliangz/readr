module.exports =
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

	module.exports = __webpack_require__(116);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _book = __webpack_require__(32);
	
	Object.keys(_book).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _book[key];
	        }
	    });
	});
	
	var _notification = __webpack_require__(33);
	
	Object.keys(_notification).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _notification[key];
	        }
	    });
	});
	
	var _user = __webpack_require__(34);
	
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

	module.exports = require("react-router");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Textarea = exports.SelectizeInput = exports.Input = exports.Button = undefined;
	
	var _button = __webpack_require__(40);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _input = __webpack_require__(25);
	
	var _input2 = _interopRequireDefault(_input);
	
	var _selectizeInput = __webpack_require__(41);
	
	var _selectizeInput2 = _interopRequireDefault(_selectizeInput);
	
	var _textarea = __webpack_require__(26);
	
	var _textarea2 = _interopRequireDefault(_textarea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Button = _button2.default;
	exports.Input = _input2.default;
	exports.SelectizeInput = _selectizeInput2.default;
	exports.Textarea = _textarea2.default;

/***/ },
/* 7 */
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSideEffect = __webpack_require__(51);
	
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
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.callApi = callApi;
	
	__webpack_require__(24);
	
	var _parseFormData = __webpack_require__(20);
	
	var _parseFormData2 = _interopRequireDefault(_parseFormData);
	
	var _handleResponseJson = __webpack_require__(14);
	
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(68)('wks')
	  , uid        = __webpack_require__(70)
	  , Symbol     = __webpack_require__(16).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("normalizr");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _normalizr = __webpack_require__(13);
	
	var _humps = __webpack_require__(23);
	
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
/* 15 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	var _bookList = __webpack_require__(78);
	
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Schemas = undefined;
	
	var _normalizr = __webpack_require__(13);
	
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
/* 19 */
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
	
	var _callApi = __webpack_require__(11);
	
	var _callApi2 = _interopRequireDefault(_callApi);
	
	var _apiRoots = __webpack_require__(7);
	
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.default = objectToUrlencoded;
	
	var _lodash = __webpack_require__(5);
	
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(47)
	  , createDesc = __webpack_require__(66);
	module.exports = __webpack_require__(28) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("humps");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 25 */
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
/* 26 */
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(46);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(45)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 29 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("react-addons-css-transition-group");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 32 */
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
	
	var _schemas = __webpack_require__(18);
	
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
/* 33 */
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.userAuth = userAuth;
	exports.fetchProfile = fetchProfile;
	exports.fetchUserList = fetchUserList;
	exports.fetchShelf = fetchShelf;
	
	var _index = __webpack_require__(18);
	
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	var _layout = __webpack_require__(52);
	
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
/* 36 */
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _icon = __webpack_require__(9);
	
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(30);
	
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _button = __webpack_require__(39);
	
	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _button2.default;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _icon = __webpack_require__(9);
	
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
/* 42 */
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
/* 43 */
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
/* 44 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(27)
	  , IE8_DOM_DEFINE = __webpack_require__(138)
	  , toPrimitive    = __webpack_require__(153)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(28) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(68)('keys')
	  , uid    = __webpack_require__(70);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(63)
	  , defined = __webpack_require__(44);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = require("react-side-effect");

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Container = undefined;
	
	var _container = __webpack_require__(10);
	
	var _container2 = _interopRequireDefault(_container);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Container = _container2.default;

/***/ },
/* 53 */
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
/* 54 */
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
/* 55 */,
/* 56 */,
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(129), __esModule: true };

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(59)
	  , TAG = __webpack_require__(12)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(46)
	  , document = __webpack_require__(16).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(16)
	  , core      = __webpack_require__(15)
	  , ctx       = __webpack_require__(136)
	  , hide      = __webpack_require__(21)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(59);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(141)
	  , $export        = __webpack_require__(62)
	  , redefine       = __webpack_require__(149)
	  , hide           = __webpack_require__(21)
	  , has            = __webpack_require__(29)
	  , Iterators      = __webpack_require__(22)
	  , $iterCreate    = __webpack_require__(139)
	  , setToStringTag = __webpack_require__(67)
	  , getPrototypeOf = __webpack_require__(146)
	  , ITERATOR       = __webpack_require__(12)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(147)
	  , enumBugKeys = __webpack_require__(61);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(47).f
	  , has = __webpack_require__(29)
	  , TAG = __webpack_require__(12)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(16)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(44);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(150)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(64)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(157);
	var global        = __webpack_require__(16)
	  , hide          = __webpack_require__(21)
	  , Iterators     = __webpack_require__(22)
	  , TO_STRING_TAG = __webpack_require__(12)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 73 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _assign = __webpack_require__(127);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _stringify = __webpack_require__(126);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _slicedToArray2 = __webpack_require__(128);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _getIterator2 = __webpack_require__(57);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Isomorphic CSS style loader for Webpack
	 *
	 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.txt file in the root directory of this source tree.
	 */
	
	var prefix = 's';
	var inserted = {};
	
	// Base64 encoding and decoding - The "Unicode Problem"
	// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
	function b64EncodeUnicode(str) {
	  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
	    return String.fromCharCode('0x' + p1);
	  }));
	}
	
	/**
	 * Remove style/link elements for specified node IDs
	 * if they are no longer referenced by UI components.
	 */
	function removeCss(ids) {
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var id = _step.value;
	
	      if (--inserted[id] <= 0) {
	        var elem = document.getElementById(prefix + id);
	        if (elem) {
	          elem.parentNode.removeChild(elem);
	        }
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	}
	
	/**
	 * Example:
	 *   // Insert CSS styles object generated by `css-loader` into DOM
	 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
	 *
	 *   // Remove it from the DOM
	 *   removeCss();
	 */
	function insertCss(styles, options) {
	  var _Object$assign = (0, _assign2.default)({
	    replace: false,
	    prepend: false
	  }, options);
	
	  var replace = _Object$assign.replace;
	  var prepend = _Object$assign.prepend;
	
	
	  var ids = [];
	  for (var i = 0; i < styles.length; i++) {
	    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4);
	
	    var moduleId = _styles$i[0];
	    var css = _styles$i[1];
	    var media = _styles$i[2];
	    var sourceMap = _styles$i[3];
	
	    var id = moduleId + '-' + i;
	
	    ids.push(id);
	
	    if (inserted[id]) {
	      if (!replace) {
	        inserted[id]++;
	        continue;
	      }
	    }
	
	    inserted[id] = 1;
	
	    var elem = document.getElementById(prefix + id);
	    var create = false;
	
	    if (!elem) {
	      create = true;
	
	      elem = document.createElement('style');
	      elem.setAttribute('type', 'text/css');
	      elem.id = prefix + id;
	
	      if (media) {
	        elem.setAttribute('media', media);
	      }
	    }
	
	    var cssText = css;
	    if (sourceMap) {
	      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
	      cssText += '\n/*# sourceURL=' + sourceMap.file + '*/';
	    }
	
	    if ('textContent' in elem) {
	      elem.textContent = cssText;
	    } else {
	      elem.styleSheet.cssText = cssText;
	    }
	
	    if (create) {
	      if (prepend) {
	        document.head.insertBefore(elem, document.head.childNodes[0]);
	      } else {
	        document.head.appendChild(elem);
	      }
	    }
	  }
	
	  return removeCss.bind(null, ids);
	}
	
	module.exports = insertCss;

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = require("react-css-modules");

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _container = __webpack_require__(10);
	
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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _form = __webpack_require__(6);
	
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _book = __webpack_require__(81);
	
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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _bookPage = __webpack_require__(80);
	
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
/* 80 */
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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	var _bookInfoPopup = __webpack_require__(77);
	
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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
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
/* 83 */,
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _viewerPreference = __webpack_require__(85);
	
	var _viewerPreference2 = _interopRequireDefault(_viewerPreference);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _viewerPreference2.default;

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
	
	var _switcher = __webpack_require__(42);
	
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
/* 87 */
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
	
	var _branding = __webpack_require__(35);
	
	var _branding2 = _interopRequireDefault(_branding);
	
	var _layout = __webpack_require__(52);
	
	var _Colophon = __webpack_require__(76);
	
	var _Colophon2 = _interopRequireDefault(_Colophon);
	
	var _actions = __webpack_require__(3);
	
	var _reactCssModules = __webpack_require__(75);
	
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
	
	var styles = __webpack_require__(161);
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
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _app = __webpack_require__(87);
	
	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _app2.default;

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
	
	var _reactRedux = __webpack_require__(2);
	
	var _switcher = __webpack_require__(42);
	
	var _switcher2 = _interopRequireDefault(_switcher);
	
	var _bookListSection = __webpack_require__(17);
	
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
/* 90 */
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
/* 91 */
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
	
	var _loading = __webpack_require__(53);
	
	var _loading2 = _interopRequireDefault(_loading);
	
	var _form = __webpack_require__(6);
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _body = __webpack_require__(8);
	
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
/* 92 */
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
	
	var _bookListSection = __webpack_require__(17);
	
	var _bookListSection2 = _interopRequireDefault(_bookListSection);
	
	var _lodash = __webpack_require__(5);
	
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
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _form = __webpack_require__(6);
	
	var _actions = __webpack_require__(3);
	
	var _bookListSection = __webpack_require__(17);
	
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
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */
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
	
	var _reactRouter = __webpack_require__(4);
	
	var _index = __webpack_require__(3);
	
	var _bookListSection = __webpack_require__(17);
	
	var _bookListSection2 = _interopRequireDefault(_bookListSection);
	
	var _candyBox = __webpack_require__(82);
	
	var _candyBox2 = _interopRequireDefault(_candyBox);
	
	var _body = __webpack_require__(8);
	
	var _body2 = _interopRequireDefault(_body);
	
	var _form = __webpack_require__(6);
	
	var _reactCssModules = __webpack_require__(75);
	
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
	
	var styles = __webpack_require__(162);
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
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _home = __webpack_require__(100);
	
	var _home2 = _interopRequireDefault(_home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _home2.default;
	// export default from './home'

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _navTab = __webpack_require__(54);
	
	var _navTab2 = _interopRequireDefault(_navTab);
	
	var _actions = __webpack_require__(3);
	
	var _bookListSection = __webpack_require__(17);
	
	var _bookListSection2 = _interopRequireDefault(_bookListSection);
	
	var _form = __webpack_require__(6);
	
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
/* 103 */
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
	
	var _alert = __webpack_require__(37);
	
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
/* 104 */
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
	
	var _navTab = __webpack_require__(54);
	
	var _navTab2 = _interopRequireDefault(_navTab);
	
	var _body = __webpack_require__(8);
	
	var _body2 = _interopRequireDefault(_body);
	
	var _switcher = __webpack_require__(42);
	
	var _switcher2 = _interopRequireDefault(_switcher);
	
	var _lodash = __webpack_require__(5);
	
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
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactRouter = __webpack_require__(4);
	
	var _apiRoots = __webpack_require__(7);
	
	var _apiRoots2 = _interopRequireDefault(_apiRoots);
	
	var _callApi = __webpack_require__(11);
	
	var _callApi2 = _interopRequireDefault(_callApi);
	
	var _actions = __webpack_require__(3);
	
	var _branding = __webpack_require__(35);
	
	var _branding2 = _interopRequireDefault(_branding);
	
	var _form = __webpack_require__(6);
	
	var _container = __webpack_require__(10);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _body = __webpack_require__(8);
	
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
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactRouter = __webpack_require__(4);
	
	var _apiRoots = __webpack_require__(7);
	
	var _apiRoots2 = _interopRequireDefault(_apiRoots);
	
	var _callApi = __webpack_require__(11);
	
	var _callApi2 = _interopRequireDefault(_callApi);
	
	var _actions = __webpack_require__(3);
	
	var _branding = __webpack_require__(35);
	
	var _branding2 = _interopRequireDefault(_branding);
	
	var _form = __webpack_require__(6);
	
	var _container = __webpack_require__(10);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _body = __webpack_require__(8);
	
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
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _viewer = __webpack_require__(108);
	
	var _viewer2 = _interopRequireDefault(_viewer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _viewer2.default;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	var _reactRedux = __webpack_require__(2);
	
	var _redux = __webpack_require__(31);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(30);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	var _icon = __webpack_require__(9);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _loading = __webpack_require__(53);
	
	var _loading2 = _interopRequireDefault(_loading);
	
	var _Dialog = __webpack_require__(109);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _bookPageList = __webpack_require__(79);
	
	var _bookPageList2 = _interopRequireDefault(_bookPageList);
	
	var _renderBook2 = __webpack_require__(124);
	
	var _renderBook = _interopRequireWildcard(_renderBook2);
	
	var _view = __webpack_require__(43);
	
	var _cache = __webpack_require__(120);
	
	var _object = __webpack_require__(123);
	
	var _index = __webpack_require__(3);
	
	var _apis = __webpack_require__(19);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _body = __webpack_require__(8);
	
	var _body2 = _interopRequireDefault(_body);
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _viewerPreference = __webpack_require__(84);
	
	var _viewerPreference2 = _interopRequireDefault(_viewerPreference);
	
	var _fade = __webpack_require__(38);
	
	var _fade2 = _interopRequireDefault(_fade);
	
	var _viewerScrollbar = __webpack_require__(86);
	
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
/* 109 */
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
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	var _noMatch = __webpack_require__(36);
	
	var _noMatch2 = _interopRequireDefault(_noMatch);
	
	var _viewer = __webpack_require__(107);
	
	var _viewer2 = _interopRequireDefault(_viewer);
	
	var _signin = __webpack_require__(105);
	
	var _signin2 = _interopRequireDefault(_signin);
	
	var _signup = __webpack_require__(106);
	
	var _signup2 = _interopRequireDefault(_signup);
	
	var _bookInfo = __webpack_require__(91);
	
	var _bookInfo2 = _interopRequireDefault(_bookInfo);
	
	var _app = __webpack_require__(88);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _home = __webpack_require__(101);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _profile = __webpack_require__(102);
	
	var _profile2 = _interopRequireDefault(_profile);
	
	var _bookShelf = __webpack_require__(92);
	
	var _bookShelf2 = _interopRequireDefault(_bookShelf);
	
	var _settings = __webpack_require__(104);
	
	var _settings2 = _interopRequireDefault(_settings);
	
	var _archive = __webpack_require__(89);
	
	var _archive2 = _interopRequireDefault(_archive);
	
	var _collection = __webpack_require__(93);
	
	var _collection2 = _interopRequireDefault(_collection);
	
	var _archivedCollection = __webpack_require__(90);
	
	var _archivedCollection2 = _interopRequireDefault(_archivedCollection);
	
	var _root = __webpack_require__(103);
	
	var _root2 = _interopRequireDefault(_root);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createElement(_reactRouter.Router, null, _react2.default.createElement(_reactRouter.Route, { path: "/", component: _root2.default }, _react2.default.createElement(_reactRouter.Route, { component: _app2.default }, _react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default }), _react2.default.createElement(_reactRouter.Route, { path: "book/:id", component: _bookInfo2.default }), _react2.default.createElement(_reactRouter.Route, { path: "profile", component: _profile2.default }), _react2.default.createElement(_reactRouter.Route, { path: "profile/:user", component: _profile2.default }), _react2.default.createElement(_reactRouter.Route, { path: "shelf", component: _bookShelf2.default }), _react2.default.createElement(_reactRouter.Route, { path: "settings", component: _settings2.default }), _react2.default.createElement(_reactRouter.Route, { path: "browse", component: _archive2.default }), _react2.default.createElement(_reactRouter.Route, { path: "collections/:id", component: _collection2.default }), _react2.default.createElement(_reactRouter.Route, { path: "collections", component: _archivedCollection2.default })), _react2.default.createElement(_reactRouter.Route, { path: "signin", component: _signin2.default }), _react2.default.createElement(_reactRouter.Route, { path: "signup", component: _signup2.default }), _react2.default.createElement(_reactRouter.Route, { path: "viewer/book/:id", component: _viewer2.default }), _react2.default.createElement(_reactRouter.Route, { path: "*", component: _noMatch2.default })));

/***/ },
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */
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
/* 121 */,
/* 122 */,
/* 123 */
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
/* 124 */
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
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(130), __esModule: true };

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(131), __esModule: true };

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(132), __esModule: true };

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _isIterable2 = __webpack_require__(125);
	
	var _isIterable3 = _interopRequireDefault(_isIterable2);
	
	var _getIterator2 = __webpack_require__(57);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;
	
	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);
	
	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }
	
	    return _arr;
	  }
	
	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(72);
	__webpack_require__(71);
	module.exports = __webpack_require__(155);

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(72);
	__webpack_require__(71);
	module.exports = __webpack_require__(156);

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(15)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(158);
	module.exports = __webpack_require__(15).Object.assign;

/***/ },
/* 133 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 134 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(50)
	  , toLength  = __webpack_require__(152)
	  , toIndex   = __webpack_require__(151);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(133);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16).document && document.documentElement;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(28) && !__webpack_require__(45)(function(){
	  return Object.defineProperty(__webpack_require__(60)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(143)
	  , descriptor     = __webpack_require__(66)
	  , setToStringTag = __webpack_require__(67)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(21)(IteratorPrototype, __webpack_require__(12)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 140 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(65)
	  , gOPS     = __webpack_require__(145)
	  , pIE      = __webpack_require__(148)
	  , toObject = __webpack_require__(69)
	  , IObject  = __webpack_require__(63)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(45)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(27)
	  , dPs         = __webpack_require__(144)
	  , enumBugKeys = __webpack_require__(61)
	  , IE_PROTO    = __webpack_require__(48)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(60)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(137).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(47)
	  , anObject = __webpack_require__(27)
	  , getKeys  = __webpack_require__(65);
	
	module.exports = __webpack_require__(28) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 145 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(29)
	  , toObject    = __webpack_require__(69)
	  , IE_PROTO    = __webpack_require__(48)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(29)
	  , toIObject    = __webpack_require__(50)
	  , arrayIndexOf = __webpack_require__(135)(false)
	  , IE_PROTO     = __webpack_require__(48)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 148 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(21);

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(49)
	  , defined   = __webpack_require__(44);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(49)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(49)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(46);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(58)
	  , ITERATOR  = __webpack_require__(12)('iterator')
	  , Iterators = __webpack_require__(22);
	module.exports = __webpack_require__(15).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(27)
	  , get      = __webpack_require__(154);
	module.exports = __webpack_require__(15).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(58)
	  , ITERATOR  = __webpack_require__(12)('iterator')
	  , Iterators = __webpack_require__(22);
	module.exports = __webpack_require__(15).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(134)
	  , step             = __webpack_require__(140)
	  , Iterators        = __webpack_require__(22)
	  , toIObject        = __webpack_require__(50);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(64)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(62);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(142)});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(73)();
	// imports
	
	
	// module
	exports.push([module.id, "h2 {\n  font-size: 2rem;\n}\n\n", ""]);
	
	// exports


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(73)();
	// imports
	
	
	// module
	exports.push([module.id, ".home-blue-3O3fQ {\n  background: red;\n}\n\n", ""]);
	
	// exports
	exports.locals = {
		"blue": "home-blue-3O3fQ"
	};

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(159);
	    var insertCss = __webpack_require__(74);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(160);
	    var insertCss = __webpack_require__(74);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDlmODhmNGIzMmQxNmU1MWNkYjMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYWN0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYXBpLWNvbmZpZy9hcGktcm9vdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zaWRlLWVmZmVjdHMvYm9keS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9pY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2xheW91dC9jb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvY2FsbC1hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub3JtYWxpenJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL2hhbmRsZS1yZXNwb25zZS1qc29uLnRzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL2Jvb2stbGlzdC1zZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NjaGVtYXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC91dGlscy9hcGlzLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvcGFyc2UtZm9ybS1kYXRhLnRzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHVtcHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2lucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vdGV4dGFyZWEudHN4Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FjdGlvbnMvYm9vay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FjdGlvbnMvbm90aWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYWN0aW9ucy91c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9icmFuZGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL25vLW1hdGNoLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2FsZXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2FuaW1hdGlvbnMvZmFkZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2J1dHRvbi9idXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvZm9ybS9idXR0b24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvZm9ybS9zZWxlY3RpemUtaW5wdXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvc3dpdGNoZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvdmlldy50cyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNpZGUtZWZmZWN0XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9sYXlvdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9sb2FkaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL25hdi10YWIudHN4Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNzcy1tb2R1bGVzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0NvbG9waG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYm9vay1pbmZvLXBvcHVwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYm9vay1saXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYm9vay1wYWdlLWxpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9ib29rLXBhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9ib29rLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvY2FuZHktYm94LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvdmlld2VyLXByZWZlcmVuY2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL3ZpZXdlci1wcmVmZXJlbmNlL3ZpZXdlci1wcmVmZXJlbmNlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvdmlld2VyLXNjcm9sbGJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL2FwcC9hcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9hcHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL2FyY2hpdmUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9hcmNoaXZlZC1jb2xsZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvYm9vay1pbmZvLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvYm9vay1zaGVsZi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL2NvbGxlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9ob21lL2hvbWUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9ob21lL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9wcm9maWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvcm9vdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL3NldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvc2lnbmluLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvc2lnbnVwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvdmlld2VyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy92aWV3ZXIvdmlld2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL0RpYWxvZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yb3V0ZXMvYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL2NhY2hlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvcmVuZGVyLWJvb2sudHMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9hcHAvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL2hvbWUvaG9tZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9hcHAvYXBwLnNjc3M/NjJmNSIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvaG9tZS9ob21lLnNjc3M/MmU0ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBLG1DOzs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7U0FDZ0I7U0FPQTtBQVBULFVBQVMsV0FBVCxDQUFxQixJQUFyQixFQUEyQixLQUEzQixFQUFrQztBQUNyQyxZQUFPO0FBQ0gsZUFBTSxjQUFOO0FBQ0EsbUJBRkc7QUFHSCxxQkFIRztNQUFQLENBRHFDO0VBQWxDO0FBT0EsVUFBUyxhQUFULENBQXVCLElBQXZCLEVBQTZCLElBQTdCLEVBQW1DO0FBQ3RDLFlBQU87QUFDSCxlQUFNLGdCQUFOO0FBQ0EsbUJBRkc7QUFHSCxtQkFIRztNQUFQLENBRHNDOzs7Ozs7O0FDVjFDLDBDOzs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFD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QUNBO0FBQ0EsRzs7Ozs7OztBQ1RBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQXlDLDJCQUEyQjtBQUNwRSxvREFBbUQ7Ozs7Ozs7O0FDVG5EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQXlDLDJCQUEyQjtBQUNwRSxvREFBbUQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAwOWY4OGY0YjMyZDE2ZTUxY2RiM1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3QtcmVkdXhcIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwiZXhwb3J0ICogZnJvbSAnLi4vYWN0aW9ucy9ib29rJztcbmV4cG9ydCAqIGZyb20gJy4uL2FjdGlvbnMvbm90aWZpY2F0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4uL2FjdGlvbnMvdXNlcic7XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVmFsdWUobmFtZSwgdmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnQ0hBTkdFX1ZBTFVFJyxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdmFsdWVcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQobmFtZSwgZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdVUERBVEVfRUxFTUVOVCcsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRhdGFcbiAgICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2FjdGlvbnMvaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0LXJvdXRlclwiXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImxvZGFzaFwiXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMlxuICoqLyIsImltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQnO1xuaW1wb3J0IFNlbGVjdGl6ZUlucHV0IGZyb20gJy4vc2VsZWN0aXplLWlucHV0JztcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL3RleHRhcmVhJztcbmV4cG9ydCB7IEJ1dHRvbiwgSW5wdXQsIFNlbGVjdGl6ZUlucHV0LCBUZXh0YXJlYSB9O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vaW5kZXgudHN4XG4gKiovIiwiY29uc3QgSE9TVCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LmxvY2F0aW9uLm9yaWdpbiA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xuY29uc3QgQXBpUm9vdHMgPSB7XG4gICAgTE9DQUw6IGAke0hPU1R9L2FwaS9gLFxuICAgIERPVUJBTl9CT09LUzogJ2h0dHBzOi8vYXBpLmRvdWJhbi5jb20vdjIvYm9vay8nXG59O1xuZXhwb3J0IGRlZmF1bHQgQXBpUm9vdHM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvYXBpLWNvbmZpZy9hcGktcm9vdHMudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTaWRlRWZmZWN0IGZyb20gJ3JlYWN0LXNpZGUtZWZmZWN0JztcbmNsYXNzIEJvZHkgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyZWFjdC1ib2R5LWNsYXNzIGhpZGRlblwifSk7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVkdWNlUHJvcHNUb1N0YXRlKHByb3BzTGlzdCkge1xuICAgIGxldCBjbGFzc05hbWU7XG4gICAgcHJvcHNMaXN0LmZvckVhY2goZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NOYW1lO1xufVxuZnVuY3Rpb24gaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudChjbGFzc05hbWUpIHtcbiAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCB3aXRoU2lkZUVmZmVjdChyZWR1Y2VQcm9wc1RvU3RhdGUsIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQpKEJvZHkpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3NpZGUtZWZmZWN0cy9ib2R5LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5jbGFzcyBJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG5hbWUgPSB0aGlzLnByb3BzLm5hbWU7XG4gICAgICAgIGxldCBtZXRob2QgPSB0aGlzLnByb3BzLm9uQ2xpY2s7XG4gICAgICAgIGxldCBzaXplID0gdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IGBpY29uIGljb24tJHtuYW1lfSAke3NpemV9YCwgb25DbGljazogbWV0aG9kfSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEljb247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvaWNvbi50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSAodGhpcy5wcm9wcy5pc0ZsdWlkID8gJ2NvbnRhaW5lci1mbHVpZCcgOiAnY29udGFpbmVyJykgKyAodGhpcy5wcm9wcy5jbGFzc05hbWUgPyBgICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YCA6ICcnKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0sIHRoaXMucHJvcHMuY2hpbGRyZW4pKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvbGF5b3V0L2NvbnRhaW5lci50c3hcbiAqKi8iLCJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IG9iamVjdFRvVXJsZW5jb2RlZCBmcm9tICcuLi91dGlscy9wYXJzZS1mb3JtLWRhdGEnO1xuaW1wb3J0IGhhbmRsZVJlc3BvbnNlSnNvbiBmcm9tICcuLi91dGlscy9oYW5kbGUtcmVzcG9uc2UtanNvbic7XG5jb25zdCBkZWZhdWx0Q29uZmlnID0ge1xuICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xufTtcbmV4cG9ydCBmdW5jdGlvbiBjYWxsQXBpKGZ1bGxVcmwsIGNvbmZpZyA9IHt9KSB7XG4gICAgLy8gcmV0dXJuIGZldGNoIGNvbmZpZ1xuICAgIGNvbnN0IHBhcnNlQ29uZmlnID0gKG9yaWdpbmFuQ29uZmlnKSA9PiB7XG4gICAgICAgIGxldCB7IG1ldGhvZCwgZGF0YSwgY3JlZGVudGlhbHMsIGRhdGFUeXBlIH0gPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0Q29uZmlnLCBvcmlnaW5hbkNvbmZpZyk7XG4gICAgICAgIGxldCBmZXRjaENvbmZpZyA9IHt9O1xuICAgICAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgICAgICBmZXRjaENvbmZpZy5tZXRob2QgPSBtZXRob2Q7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgICBmZXRjaENvbmZpZy5jcmVkZW50aWFscyA9IGNyZWRlbnRpYWxzO1xuICAgICAgICB9XG4gICAgICAgIC8vIGhhbmRsZSByZXF1ZXN0IGhlYWRlcnMgYW5kIGJvZHlcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgICAgICBsZXQgY29udGVudFR5cGU7XG4gICAgICAgICAgICBsZXQgYm9keTtcbiAgICAgICAgICAgIGlmIChkYXRhVHlwZSA9PT0gJ2pzb24nKSB7XG4gICAgICAgICAgICAgICAgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YVR5cGUgPT09ICd1cmxlbmNvZGVkJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG4gICAgICAgICAgICAgICAgYm9keSA9IG9iamVjdFRvVXJsZW5jb2RlZChkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSB1bnN1cHBvcnRlZCBkYXRhVHlwZVxuICAgICAgICAgICAgICAgIGRhdGFUeXBlID0gJ3VybGVuY29kZWQnO1xuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG4gICAgICAgICAgICAgICAgYm9keSA9IG9iamVjdFRvVXJsZW5jb2RlZChkYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1Vuc3VwcG9ydGVkIGRhdGFUeXBlIHVzZWQgXCJ1cmxlbmNvZGVkXCIgaW5zdGVhZCEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZldGNoQ29uZmlnLmhlYWRlcnMgPSB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IGNvbnRlbnRUeXBlLFxuICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1SZXF1ZXN0LU1ldGhvZCc6ICdQT1NUJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZldGNoQ29uZmlnLmJvZHkgPSBib2R5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgPT09ICdERUxFVEUnKSB7XG4gICAgICAgICAgICBmZXRjaENvbmZpZy5oZWFkZXJzID0ge1xuICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1SZXF1ZXN0LU1ldGhvZCc6ICdERUxFVEUnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaENvbmZpZztcbiAgICB9O1xuICAgIHJldHVybiBmZXRjaChmdWxsVXJsLCBwYXJzZUNvbmZpZyhjb25maWcpKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbihqc29uID0+ICh7IGpzb24sIHJlc3BvbnNlIH0pKTtcbiAgICB9KVxuICAgICAgICAudGhlbigoeyBqc29uLCByZXNwb25zZSB9KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVJlc3BvbnNlSnNvbihqc29uLCBjb25maWcuc2NoZW1hKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChqc29uKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgY2FsbEFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9jYWxsLWFwaS50c1xuICoqLyIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vcm1hbGl6clwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibm9ybWFsaXpyXCJcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMlxuICoqLyIsImltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gJ25vcm1hbGl6cic7XG5pbXBvcnQgaHVtcHMgZnJvbSAnaHVtcHMnO1xuZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2VKc29uKGpzb24sIHNjaGVtYSkge1xuICAgIGpzb24gPSBodW1wcy5jYW1lbGl6ZUtleXMoanNvbik7XG4gICAgbGV0IHJlc3VsdCA9IGpzb247XG4gICAgaWYgKHR5cGVvZiBzY2hlbWEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIG5vcm1hbGl6ZShqc29uLCBzY2hlbWEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZVJlc3BvbnNlSnNvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9oYW5kbGUtcmVzcG9uc2UtanNvbi50c1xuICoqLyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBCb29rTGlzdCBmcm9tICcuL2Jvb2stbGlzdCc7XG5jbGFzcyBCb29rTGlzdFNlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZTtcbiAgICAgICAgbGV0IG1vcmVMaW5rID0gdGhpcy5wcm9wcy5tb3JlTGluayA/IHRoaXMucHJvcHMubW9yZUxpbmsgOiBudWxsO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJib29rLWxpc3Qtc2VjdGlvblwifSwgdGhpcy5wcm9wcy50aXRsZSAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHtjbGFzc05hbWU6IFwic2VjdGlvbi10aXRsZVwifSwgdGl0bGUpKSwgbW9yZUxpbmsgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7Y2xhc3NOYW1lOiBcIm1vcmVcIiwgdG86IG1vcmVMaW5rfSwgXCLmn6XnnIvmm7TlpJpcIikpIDogbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChCb29rTGlzdCwge2Jvb2tFbnRpdGllczogdGhpcy5wcm9wcy5ib29rRW50aXRpZXN9KSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJvb2tMaXN0U2VjdGlvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb21wb25lbnRzL2Jvb2stbGlzdC1zZWN0aW9uLnRzeFxuICoqLyIsImltcG9ydCB7IFNjaGVtYSwgYXJyYXlPZiB9IGZyb20gJ25vcm1hbGl6cic7XG5jb25zdCBib29rID0gbmV3IFNjaGVtYSgnYm9va3MnLCB7XG4gICAgaWRBdHRyaWJ1dGU6ICdpZCdcbn0pO1xuY29uc3QgY29sbGVjdGlvbiA9IG5ldyBTY2hlbWEoJ2Jvb2tDb2xsZWN0aW9ucycsIHtcbiAgICBpZEF0dHJpYnV0ZTogJ2lkJ1xufSk7XG5jb25zdCBwcm9maWxlID0gbmV3IFNjaGVtYSgncHJvZmlsZXMnLCB7XG4gICAgaWRBdHRyaWJ1dGU6ICdpZCdcbn0pO1xuY29uc3QgdXNlciA9IG5ldyBTY2hlbWEoJ3VzZXJzJywge1xuICAgIGlkQXR0cmlidXRlOiAnaWQnXG59KTtcbmNvbnN0IGRvdWJhbkJvb2sgPSBuZXcgU2NoZW1hKCdkb3ViYW5Cb29rcycsIHtcbiAgICBpZEF0dHJpYnV0ZTogJ2lkJ1xufSk7XG5jb25zdCBib29rUHJvZ3Jlc3MgPSBuZXcgU2NoZW1hKCdib29rcycsIHtcbiAgICBpZEF0dHJpYnV0ZTogJ2Jvb2tJZCdcbn0pO1xuY29uc3QgbWF0Y2hlZEJvb2tzID0gbmV3IFNjaGVtYSgnYm9va3MnLCB7XG4gICAgaWRBdHRyaWJ1dGU6ICdib29rSWQnXG59KTtcbmV4cG9ydCBjb25zdCBTY2hlbWFzID0ge1xuICAgIEJPT0s6IGJvb2ssXG4gICAgQk9PS19QUk9HUkVTUzogYm9va1Byb2dyZXNzLFxuICAgIEJPT0tfQVJSQVk6IGFycmF5T2YoYm9vayksXG4gICAgRE9VQkFOX0JPT0tfU0VBUkNIX1JFU1VMVFM6IHsgYm9va3M6IGFycmF5T2YoZG91YmFuQm9vaykgfSxcbiAgICBVU0VSX0FSUkFZOiBhcnJheU9mKHVzZXIpLFxuICAgIE1BVENIRURfQk9PS19BUlJBWTogYXJyYXlPZihtYXRjaGVkQm9va3MpLFxuICAgIENPTExFQ1RJT046IGNvbGxlY3Rpb24sXG4gICAgQ09MTEVDVElPTl9BUlJBWTogYXJyYXlPZihjb2xsZWN0aW9uKSxcbiAgICBQUk9GSUxFOiBwcm9maWxlXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3NjaGVtYXMvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgY2FsbEFwaSBmcm9tICcuL2NhbGwtYXBpJztcbmltcG9ydCBBcGlSb290cyBmcm9tICcuLi9hcGktY29uZmlnL2FwaS1yb290cyc7XG5leHBvcnQgZnVuY3Rpb24gYWRkQ29sbGVjdGlvbihkYXRhKSB7XG4gICAgcmV0dXJuIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9Y29sbGVjdGlvbnNgLCB7IG1ldGhvZDogJ1BPU1QnLCBkYXRhOiBkYXRhIH0pO1xufVxuLyoqXG4gKiBkYXRhOiBuYW1lLCBhdXRob3IsIGRlc2NyaXB0aW9uLCBjb3ZlciwgY29udGVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQm9vayhkYXRhKSB7XG4gICAgcmV0dXJuIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9Ym9va3NgLCB7IG1ldGhvZDogJ1BPU1QnLCBkYXRhOiBkYXRhIH0pO1xufVxuLyoqXG4gKiBkYXRhOiBuYW1lLCBzbHVnLCBkZXNjcmlwdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQXV0aG9yKGRhdGEpIHtcbiAgICByZXR1cm4gY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1hdXRob3JzYCwgeyBtZXRob2Q6ICdQT1NUJywgZGF0YTogZGF0YSB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hBdXRob3JzKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9YXV0aG9ycz9xPSR7cXVlcnl9YCk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQm9va3MocXVlcnkpIHtcbiAgICByZXR1cm4gY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1ib29rcz9xPSR7cXVlcnl9YCk7XG59XG4vKipcbiAqIGRhdGE6IHBhZ2VObywgcGFnZVN1bSwgcGVyY2VudGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvZ3Jlc3MoYm9va0lkLCBkYXRhKSB7XG4gICAgY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1ib29rcy8ke2Jvb2tJZH0vcHJvZ3Jlc3NgLCB7IG1ldGhvZDogJ1BPU1QnLCBkYXRhIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUJvb2soaWQpIHtcbiAgICByZXR1cm4gY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1ib29rcy8ke2lkfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xuICAgIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGFkZENvbGxlY3Rpb24sXG4gICAgYWRkQm9vayxcbiAgICBhZGRBdXRob3IsXG4gICAgc2VhcmNoQm9va3MsXG4gICAgc2VhcmNoQXV0aG9ycyxcbiAgICBzZXRQcm9ncmVzcyxcbiAgICBkZWxldGVCb29rXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3V0aWxzL2FwaXMudHNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb2JqZWN0VG9VcmxlbmNvZGVkKG9yaWdpbmFsT2JqKSB7XG4gICAgbGV0IG9iamVjdCA9IF8uY2xvbmVEZWVwKG9yaWdpbmFsT2JqKTtcbiAgICBsZXQgZW5jb2RlZHVybCA9ICcnO1xuICAgIGZvciAobGV0IHByb3AgaW4gb2JqZWN0KSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0W3Byb3BdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgb2JqZWN0W3Byb3BdID0gb2JqZWN0W3Byb3BdLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZW5jb2RlZHVybCA9IGAke2VuY29kZWR1cmx9JHtwcm9wfT0ke29iamVjdFtwcm9wXX0mYDtcbiAgICB9XG4gICAgcmV0dXJuIGVuY29kZWR1cmwuc3Vic3RyKDAsIGVuY29kZWR1cmwubGVuZ3RoIC0gMSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvdXRpbHMvcGFyc2UtZm9ybS1kYXRhLnRzXG4gKiovIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh1bXBzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJodW1wc1wiXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxIDJcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCJcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMlxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5jbGFzcyBJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZSA/IGBpbnB1dC13cmFwICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YCA6ICdpbnB1dC13cmFwJztcbiAgICAgICAgbGV0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5jbGFzc05hbWU7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3BsYWNlaG9sZGVyOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyLCB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSwgb25DaGFuZ2U6IGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcbiAgICAgICAgfSwgdHlwZTogdGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ3RleHQnLCBuYW1lOiB0aGlzLnByb3BzLm5hbWUgPyB0aGlzLnByb3BzLm5hbWUgOiBudWxsfSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2lucHV0LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5jbGFzcyBUZXh0YXJlYSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZSA/IGB0ZXh0YXJlYS13cmFwICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YCA6ICd0ZXh0YXJlYS13cmFwJztcbiAgICAgICAgbGV0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5jbGFzc05hbWU7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwge3BsYWNlaG9sZGVyOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyLCB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSwgb25DaGFuZ2U6IGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcbiAgICAgICAgfSwgdHlwZTogdGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ3RleHQnLCBuYW1lOiB0aGlzLnByb3BzLm5hbWUgPyB0aGlzLnByb3BzLm5hbWUgOiBudWxsfSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL3RleHRhcmVhLnRzeFxuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXBcIlxuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWR1eFwiXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyXG4gKiovIiwiaW1wb3J0IHsgU2NoZW1hcyB9IGZyb20gJy4uL3NjaGVtYXMnO1xuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQm9va1Byb2dyZXNzKGJvb2tJZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJvb2tJZCxcbiAgICAgICAgQ0FMTF9BUEk6IHtcbiAgICAgICAgICAgIHR5cGVzOiBbJ0JPT0tfUFJPR1JFU1NfUkVRVUVTVCcsICdCT09LX1BST0dSRVNTX1NVQ0NFU1MnLCAnQk9PS19QUk9HUkVTU19GQUlMVVJFJ10sXG4gICAgICAgICAgICBlbmRwb2ludDogYGJvb2tzLyR7Ym9va0lkfS9wcm9ncmVzc2AsXG4gICAgICAgICAgICBzY2hlbWE6IFNjaGVtYXMuQk9PS19QUk9HUkVTU1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEJvb2tzKGZsb3dUeXBlID0gJ25ld2VzdCcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBmb3IgcGFnaW5hdGVcbiAgICAgICAgZmxvd1R5cGUsXG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydCT09LU19SRVFVRVNUJywgJ0JPT0tTX1NVQ0NFU1MnLCAnQk9PS1NfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGBib29rcz9leGNsdWRlPWNvbnRlbnRgLFxuICAgICAgICAgICAgc2NoZW1hOiBTY2hlbWFzLkJPT0tfQVJSQVksXG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQm9vayhib29rSWQsIGZpZWxkcykge1xuICAgIGxldCBlbmRwb2ludCA9IGBib29rcy8ke2Jvb2tJZH1gO1xuICAgIGlmIChmaWVsZHMpIHtcbiAgICAgICAgZW5kcG9pbnQgKz0gYD9maWVsZHM9JHtmaWVsZHMuam9pbignLCcpfWA7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGJvb2tJZCxcbiAgICAgICAgQ0FMTF9BUEk6IHtcbiAgICAgICAgICAgIHR5cGVzOiBbJ0JPT0tfUkVRVUVTVCcsICdCT09LX1NVQ0NFU1MnLCAnQk9PS19GQUlMVVJFJ10sXG4gICAgICAgICAgICBlbmRwb2ludCxcbiAgICAgICAgICAgIHNjaGVtYTogU2NoZW1hcy5CT09LXG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQ29sbGVjdGlvbnMoZmxvd1R5cGUgPSAnbmV3ZXN0Jykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGZsb3dUeXBlLFxuICAgICAgICBDQUxMX0FQSToge1xuICAgICAgICAgICAgdHlwZXM6IFsnQ09MTEVDVElPTlNfUkVRVUVTVCcsICdDT0xMRUNUSU9OU19TVUNDRVNTJywgJ0NPTExFQ1RJT05TX0ZBSUxVUkUnXSxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgY29sbGVjdGlvbnNgLFxuICAgICAgICAgICAgc2NoZW1hOiBTY2hlbWFzLkNPTExFQ1RJT05fQVJSQVlcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hDb2xsZWN0aW9uKGNvbGxlY3Rpb25JZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbGxlY3Rpb25JZCxcbiAgICAgICAgQ0FMTF9BUEk6IHtcbiAgICAgICAgICAgIHR5cGVzOiBbJ0NPTExFQ1RJT05fUkVRVUVTVCcsICdDT0xMRUNUSU9OX1NVQ0NFU1MnLCAnQ09MTEVDVElPTl9GQUlMVVJFJ10sXG4gICAgICAgICAgICBlbmRwb2ludDogYGNvbGxlY3Rpb25zLyR7Y29sbGVjdGlvbklkfWAsXG4gICAgICAgICAgICBzY2hlbWE6IFNjaGVtYXMuQ09MTEVDVElPTlxuICAgICAgICB9XG4gICAgfTtcbn1cbi8vIGV4cG9ydCBmdW5jdGlvbiBmZXRjaEJvb2tDb250ZW50KGJvb2tJZCkge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIGJvb2tJZCxcbi8vICAgICBDQUxMX0FQSToge1xuLy8gICAgICAgdHlwZXM6IFsnQk9PS19DT05URU5UX1JFUVVFU1QnLCAnQk9PS19DT05URU5UX1NVQ0NFU1MnLCAnQk9PS19DT05URU5UX0ZBSUxVUkUnXSxcbi8vICAgICAgIGVuZHBvaW50OiBgYm9va3MvJHtib29rSWR9L2NvbnRlbnRgLFxuLy8gICAgICAgc2NoZW1hOiBTY2hlbWFzLkJPT0tcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyBleHBvcnQgZnVuY3Rpb24gZmV0Y2hCb29rSW5mbyhib29rSWQpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBib29rSWQsXG4vLyAgICAgQ0FMTF9BUEk6e1xuLy8gICAgICAgdHlwZXM6IFsnQk9PS19JTkZPX1JFUVVFU1QnLCAnQk9PS19JTkZPX1NVQ0NFU1MnLCAnQk9PS19JTkZPX0ZBSUxVUkUnXSxcbi8vICAgICAgIGVuZHBvaW50OiBgYm9va3MvJHtib29rSWR9YCxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5CT09LX0FSUkFZXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG4vLyBleHBvcnQgZnVuY3Rpb24gZmV0Y2hEb3ViYW5Cb29rU2VhcmNoUmVzdWx0cyhxdWVyeSkge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHF1ZXJ5LFxuLy8gICAgIENBTExfQVBJOiB7XG4vLyAgICAgICB0eXBlczogWydET1VCQU5fQk9PS19TRUFSQ0hfUkVRVUVTVCcsICdET1VCQU5fQk9PS19TRUFSQ0hfU1VDQ0VTUycsICdET1VCQU5fQk9PS19TRUFSQ0hfRkFJTFVSRSddLFxuLy8gICAgICAgZW5kcG9pbnQ6IGBzZWFyY2g/Y291bnQ9NSZxPSR7cXVlcnl9YCxcbi8vICAgICAgIGFwaVVybDogQXBpUm9vdHMuRE9VQkFOX0JPT0tTLFxuLy8gICAgICAgc2NoZW1hOiBTY2hlbWFzLkRPVUJBTl9CT09LX1NFQVJDSF9SRVNVTFRTLFxuLy8gICAgICAgZXh0ZW5kZWRPcHRpb25zOiB7IHVzZUpzb25wOiB0cnVlIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbi8vIGV4cG9ydCBmdW5jdGlvbiBzZWFyY2hCb29rcyhxdWVyeSkge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHF1ZXJ5LFxuLy8gICAgIENBTExfQVBJOiB7XG4vLyAgICAgICB0eXBlczogWydCT09LX1NFQVJDSF9SRVFVRVNUJywgJ0JPT0tfU0VBUkNIX1NVQ0NFU1MnLCAnQk9PS19TRUFSQ0hfRkFJTFVSRSddLFxuLy8gICAgICAgZW5kcG9pbnQ6IGBzZWFyY2g/cT0ke3F1ZXJ5fWAsXG4vLyAgICAgICBhcGlVcmw6IEFwaVJvb3RzLkxPQ0FMLFxuLy8gICAgICAgc2NoZW1hOiBTY2hlbWFzLk1BVENIRURfQk9PS19BUlJBWVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2FjdGlvbnMvYm9vay50c1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBzZW5kTm90aWZpY2F0aW9uKG1lc3NhZ2UsIG1zZ1R5cGUgPSAnc3VjY2VzcycsIHQgPSA1MDAwKSB7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBNYXRoLnJhbmRvbSgpLnRvRml4ZWQoOCkuc3Vic3RyKDIpO1xuICAgICAgICBkaXNwYXRjaChzaG93Tm90aWZpY2F0aW9uKGlkLCBtZXNzYWdlLCBtc2dUeXBlKSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goaGlkZU5vdGlmaWNhdGlvbihpZCkpO1xuICAgICAgICB9LCB0KTtcbiAgICB9O1xufVxuZXhwb3J0IGNvbnN0IFNIT1dfTk9USUZJQ0FUSU9OID0gJ1NIT1dfTk9USUZJQ0FUSU9OJztcbmV4cG9ydCBmdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uKGlkLCBtZXNzYWdlLCBtc2dUeXBlID0gJ3N1Y2Nlc3MnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogU0hPV19OT1RJRklDQVRJT04sXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIG1zZ1R5cGUsXG4gICAgICAgIGlkXG4gICAgfTtcbn1cbmV4cG9ydCBjb25zdCBISURFX05PVElGSUNBVElPTiA9ICdISURFX05PVElGSUNBVElPTic7XG5leHBvcnQgZnVuY3Rpb24gaGlkZU5vdGlmaWNhdGlvbihpZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEhJREVfTk9USUZJQ0FUSU9OLFxuICAgICAgICBpZFxuICAgIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvYWN0aW9ucy9ub3RpZmljYXRpb24udHNcbiAqKi8iLCJpbXBvcnQgeyBTY2hlbWFzIH0gZnJvbSAnLi4vc2NoZW1hcy9pbmRleCc7XG5leHBvcnQgZnVuY3Rpb24gdXNlckF1dGgoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgQ0FMTF9BUEk6IHtcbiAgICAgICAgICAgIHR5cGVzOiBbJ1VTRVJfQVVUSF9SRVFVRVNUJywgJ1VTRVJfQVVUSF9TVUNDRVNTJywgJ1VTRVJfQVVUSF9GQUlMVVJFJ10sXG4gICAgICAgICAgICBlbmRwb2ludDogJ2F1dGgnXG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUHJvZmlsZShpZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydQUk9GSUxFX1JFUVVFU1QnLCAnUFJPRklMRV9TVUNDRVNTJywgJ1BST0ZJTEVfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGB1c2Vycy8ke2lkfS9wcm9maWxlYCxcbiAgICAgICAgICAgIHNjaGVtYTogU2NoZW1hcy5QUk9GSUxFXG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVXNlckxpc3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgQ0FMTF9BUEk6IHtcbiAgICAgICAgICAgIHR5cGVzOiBbJ1VTRVJfTElTVF9SRVFVRVNUJywgJ1VTRVJfTElTVF9TVUNDRVNTJywgJ1VTRVJfTElTVF9GQUlMVVJFJ10sXG4gICAgICAgICAgICBlbmRwb2ludDogJ3VzZXJzJyxcbiAgICAgICAgICAgIHNjaGVtYTogU2NoZW1hcy5VU0VSX0FSUkFZXG4gICAgICAgIH1cbiAgICB9O1xufVxuLy8gZXhwb3J0IGZ1bmN0aW9uIGZldGNoU2hlbGYodXNlcklkKSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgdXNlcklkLFxuLy8gICAgIENBTExfQVBJOiB7XG4vLyAgICAgICB0eXBlczogWydTSEVMRl9SRVFVRVNUJywgJ1NIRUxGX1NVQ0NFU1MnLCAnU0hFTEZfRkFJTFVSRSddLFxuLy8gICAgICAgZW5kcG9pbnQ6IGB1c2Vycy8ke3VzZXJJZH0vc2hlbGZgLFxuLy8gICAgICAgc2NoZW1hOiBTY2hlbWFzLkJPT0tfQVJSQVksXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hTaGVsZigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXlsb2FkOiAnYm9va1NoZWxmJyxcbiAgICAgICAgQ0FMTF9BUEk6IHtcbiAgICAgICAgICAgIHR5cGVzOiBbJ1NIRUxGX1JFUVVFU1QnLCAnU0hFTEZfU1VDQ0VTUycsICdTSEVMRl9GQUlMVVJFJ10sXG4gICAgICAgICAgICBlbmRwb2ludDogYHVzZXIvYm9va3Mvc2hlbGZgLFxuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9hY3Rpb25zL3VzZXIudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9lbGVtZW50cy9sYXlvdXQnO1xuY2xhc3MgQnJhbmRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzRHJvcGRvd25NZW51VmlzaWJsZTogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9nZ2xlRHJvcGRvd25NZW51KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzRHJvcGRvd25NZW51VmlzaWJsZTogIXRoaXMuc3RhdGUuaXNEcm9wZG93bk1lbnVWaXNpYmxlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB1c2VybmFtZSA9IHRoaXMucHJvcHMudXNlcm5hbWU7XG4gICAgICAgIGxldCBpc0FkbWluID0gdGhpcy5wcm9wcy5pc0FkbWluID8gdGhpcy5wcm9wcy5pc0FkbWluIDogZmFsc2U7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBgYnJhbmRpbmcgJHt0aGlzLnByb3BzLmNsYXNzTmFtZSA/IHRoaXMucHJvcHMuY2xhc3NOYW1lIDogJyd9YH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCB7Y2xhc3NOYW1lOiBcImNsZWFyZml4XCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7Y2xhc3NOYW1lOiBcImxvZ28gbGVmdFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiL1wifSwgXCJyZWFkclwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJuYXYgbGVmdFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtjbGFzc05hbWU6IFwibmF2LWxpbmtzXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiL2Jyb3dzZVwifSwgXCLmtY/op4hcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiL2NvbGxlY3Rpb25zXCJ9LCBcIuS5puWNlVwiKSkpKSwgdXNlcm5hbWUgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7b25Nb3VzZUxlYXZlOiB0aGlzLnRvZ2dsZURyb3Bkb3duTWVudS5iaW5kKHRoaXMpLCBvbk1vdXNlRW50ZXI6IHRoaXMudG9nZ2xlRHJvcGRvd25NZW51LmJpbmQodGhpcyksIGNsYXNzTmFtZTogXCJuYXYgcmlnaHRcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwicmVjZW50LXJlYWRpbmdcIn0sIFwi5pyA6L+R6ZiF6K+7XCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcInVzZXJuYW1lXCJ9LCB1c2VybmFtZSwgaXNBZG1pbiA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImJhZGdlLWRhcmtcIn0sIFwiQWRtaW5cIikpIDogbnVsbCksIHRoaXMuc3RhdGUuaXNEcm9wZG93bk1lbnVWaXNpYmxlID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7b25DbGljazogdGhpcy50b2dnbGVEcm9wZG93bk1lbnUuYmluZCh0aGlzKSwgY2xhc3NOYW1lOiBcImRyb3Bkb3duLW1lbnVcIn0sIGlzQWRtaW4gPT09IHRydWUgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcIi9jb25zb2xlXCJ9LCBcIuaOp+WItuWPsFwiKSkpIDogbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBgL3NoZWxmYH0sIFwi5Lmm5p62XCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBgL3Byb2ZpbGVgfSwgXCLkuKrkurrkuLvpobVcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IGAvc2V0dGluZ3NgfSwgXCLorr7nva5cIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6ICcvbG9nb3V0J30sIFwi6YCA5Ye6XCIpKSkpIDogbnVsbCkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJuYXYgcmlnaHRcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcIm5hdi1saW5rc1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcIi9zaWduaW5cIn0sIFwi55m75b2VXCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcIi9zaWdudXBcIn0sIFwi5rOo5YaMXCIpKSkpKSkpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQnJhbmRpbmc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29tcG9uZW50cy9icmFuZGluZy50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuY2xhc3MgTm9NYXRjaCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBcIjQwNFwiKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTm9NYXRjaDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL25vLW1hdGNoLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9lbGVtZW50cy9pY29uJztcbmNsYXNzIE5vdGlmaWNhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB0eXBlID0gdGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ3N1Y2Nlc3MnO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgdGhpcy5wcm9wcy52aXNpYmxlICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IGBub3RpZmljYXRpb24gbm90aWZpY2F0aW9uLS0ke3R5cGV9IHoxYC50cmltKCl9LCBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHtvbkNsaWNrOiB0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlLCBuYW1lOiBcImNsb3NlXCJ9KSwgdGhpcy5wcm9wcy5tZXNzYWdlKSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvYWxlcnQudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnO1xuY2xhc3MgRmFkZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZT90aGlzLnByb3BzLmNsYXNzTmFtZTpudWxsXG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdENTU1RyYW5zaXRpb25Hcm91cCwge2NvbXBvbmVudDogXCJkaXZcIiwgdHJhbnNpdGlvbk5hbWU6IFwiZmFkZVwiLCB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0OiAzMDAsIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ6IDMwMH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBGYWRlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2FuaW1hdGlvbnMvZmFkZS50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lID8gYGJ0biAke3RoaXMucHJvcHMuY2xhc3NOYW1lfWAgOiAnYnRuJztcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLnByb3BzLnNpemUgPyB0aGlzLnByb3BzLnNpemUgOiAnbWVkaXVtJztcbiAgICAgICAgbGV0IGlzRmx1aWQgPSB0aGlzLnByb3BzLmlzRmx1aWQgPyB0aGlzLnByb3BzLmlzRmx1aWQgOiBmYWxzZTtcbiAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5wcm9wcy5jb2xvciA/IHRoaXMucHJvcHMuY29sb3IgOiBudWxsO1xuICAgICAgICBsZXQgb25DbGljaztcbiAgICAgICAgaWYgKHNpemUgPT09ICdzbWFsbCcpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIGJ0bi1zbWFsbCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2l6ZSA9PT0gJ2xhcmdlJykge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgYnRuLWxhcmdlJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaXplID09PSAnbWVkaXVtJykge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgYnRuLW1lZGl1bSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbnN1cHBvcnQgc2l6ZSEnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBgIGJ0bi0ke2NvbG9yfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRmx1aWQpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0gYnRuLWZsdWlkYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy50bykge1xuICAgICAgICAgICAgb25DbGljayA9IGUgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKHRoaXMucHJvcHMudG8pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9uQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZSB9LCB7IG9uQ2xpY2sgfSk7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy50bztcbiAgICAgICAgZGVsZXRlIHByb3BzLmNvbG9yO1xuICAgICAgICBkZWxldGUgcHJvcHMuc2l6ZTtcbiAgICAgICAgZGVsZXRlIHByb3BzLmlzRmx1aWQ7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgcHJvcHMsIHRoaXMucHJvcHMuY2hpbGRyZW4pKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvZm9ybS9idXR0b24vYnV0dG9uLnRzeFxuICoqLyIsImltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vYnV0dG9uL2luZGV4LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9pY29uJztcbmNsYXNzIFNlbGVjdGl6ZUlucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzaG93T3B0aW9uczogZmFsc2UsXG4gICAgICAgICAgICBmb2N1czogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICBleHBlbmRlZE9wdGlvbkluZGV4OiAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGlkZU9wdGlvbnMgPSB0aGlzLmhpZGVPcHRpb25zLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZm9jdXNJbnB1dCA9IHRoaXMuZm9jdXNJbnB1dC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNob3dPcHRpb25zID0gdGhpcy5zaG93T3B0aW9ucy5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBhZGRWYWx1ZShuZXdWYWx1ZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uVmFsdWVzQ2hhbmdlKHRoaXMucHJvcHMudmFsdWVzLmNvbmNhdChuZXdWYWx1ZSkpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKHRoaXMucHJvcHMub3B0aW9ucy5tYXAob3B0aW9uID0+IChvcHRpb24udmFsdWUgPT09IG5ld1ZhbHVlLnZhbHVlXG4gICAgICAgICAgICAgICAgPyBPYmplY3QuYXNzaWduKHt9LCBvcHRpb24sIHsgZGlzYWJsZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICA6IG9wdGlvbikpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsZWFySW5wdXRWYWx1ZSgpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuc3RheUZvY3VzZWQgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMucHJvcHMuc3RheUZvY3VzZWQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhpZGVPcHRpb25zKCk7XG4gICAgfVxuICAgIHJlbW92ZVZhbHVlKGluZGV4KSB7XG4gICAgICAgIGxldCBuZXdWYWx1ZXMgPSBbXTtcbiAgICAgICAgbGV0IHJlbW92ZWRWYWx1ZTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgbmV3VmFsdWVzID0gdGhpcy5wcm9wcy52YWx1ZXMuc2xpY2UoMCwgdGhpcy5wcm9wcy52YWx1ZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICByZW1vdmVkVmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlc1t0aGlzLnByb3BzLnZhbHVlcy5sZW5ndGggLSAxXS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlcyA9IHRoaXMucHJvcHMudmFsdWVzXG4gICAgICAgICAgICAgICAgLmZpbHRlcigodiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlbW92ZWRWYWx1ZSA9IHYudmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkgIT09IGluZGV4O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSh0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiAob3B0aW9uLnZhbHVlID09PSByZW1vdmVkVmFsdWVcbiAgICAgICAgICAgICAgICA/IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbiwgeyBkaXNhYmxlZDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICA6IG9wdGlvbikpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLm9uVmFsdWVzQ2hhbmdlKG5ld1ZhbHVlcyk7XG4gICAgfVxuICAgIGNsZWFySW5wdXRWYWx1ZSgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKCcnKTtcbiAgICB9XG4gICAgaGFuZGxlS2V5UHJlc3MoZSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA4ICYmICF0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVZhbHVlKC0xKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0b2RvXG4gICAgICAgIC8vIGlmIChlLmtleUNvZGUgPT09IDEzICYmIHRoaXMuc3RhdGUuc2hvd09wdGlvbnMpIHtcbiAgICAgICAgLy8gICB0aGlzLmFkZFZhbHVlKClcbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICBmb2N1c0lucHV0KCkge1xuICAgICAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgfVxuICAgIGhpZGVPcHRpb25zKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dPcHRpb25zOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2hvd09wdGlvbnMoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dPcHRpb25zOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlT3B0aW9ucyk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlT3B0aW9ucyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxhYmVsID0gdGhpcy5wcm9wcy5sYWJlbCA/IHRoaXMucHJvcHMubGFiZWwgOiBudWxsO1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlID8gdGhpcy5wcm9wcy52YWx1ZSA6ICcnO1xuICAgICAgICBsZXQgdmFsdWVzID0gdGhpcy5wcm9wcy52YWx1ZXM7XG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5wcm9wcy5vcHRpb25zID8gdGhpcy5wcm9wcy5vcHRpb25zIDogW107XG4gICAgICAgIGxldCBpbnB1dFdpZHRoID0gdmFsdWVzLmxlbmd0aCA+IDAgPyAodmFsdWUubGVuZ3RoID09PSAwID8gMTYgOiB2YWx1ZS5sZW5ndGggKiAxNikgOiAnMTAwJSc7XG4gICAgICAgIGxldCBwbGFjZWhvbGRlciA9IHZhbHVlcy5sZW5ndGggPiAwID8gJycgOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyO1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gJ3NlbGVjdGl6ZS1pbnB1dCcgKyAodGhpcy5zdGF0ZS5mb2N1cyA9PT0gdHJ1ZSA/ICcgZm9jdXMnIDogJycpICsgKHZhbHVlcy5sZW5ndGggPT09IDAgPyAnIGVtcHR5JyA6ICcnKTtcbiAgICAgICAgbGV0IGFkZE5ld1ZhbHVlID0gdGhpcy5wcm9wcy5hZGROZXdWYWx1ZSA/IHRoaXMucHJvcHMuYWRkTmV3VmFsdWUgOiB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBgc2VsZWN0aXplLWlucHV0LXdyYXAgJHt0aGlzLnByb3BzLmNsYXNzTmFtZSA/IHRoaXMucHJvcHMuY2xhc3NOYW1lIDogJyd9YC50cmltKCl9LCBsYWJlbCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwge2NsYXNzTmFtZTogXCJmb3JtLWxhYmVsXCJ9LCBsYWJlbCkpIDogbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWUsIG9uQ2xpY2s6IGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgICAgICAgICB0aGlzLnNob3dPcHRpb25zKGUpO1xuICAgICAgICB9fSwgdmFsdWVzLm1hcCgodiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2tleTogaW5kZXgsIGNsYXNzTmFtZTogXCJzZWxlY3RpemUtdGFnXCJ9LCB2Lm5hbWUsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwge3NpemU6ICdzbWFsbCcsIG5hbWU6IFwiY2xvc2VcIiwgb25DbGljazogZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZShpbmRleCk7XG4gICAgICAgICAgICB9fSkpKTtcbiAgICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7c3R5bGU6IHsgd2lkdGg6IGlucHV0V2lkdGggfSwgcmVmOiByZWYgPT4geyB0aGlzLmlucHV0ID0gcmVmOyB9LCB2YWx1ZTogdmFsdWUsIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlciwgb25CbHVyOiBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1czogZmFsc2UgfSk7XG4gICAgICAgIH0sIG9uRm9jdXM6IGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiB0cnVlIH0pO1xuICAgICAgICB9LCBvbkNoYW5nZTogZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9LCBvbktleURvd246IGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVLZXlQcmVzcyhlKTtcbiAgICAgICAgfX0pKSwgKHRoaXMuc3RhdGUuc2hvd09wdGlvbnMpID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcInNlbGVjdGl6ZS1xdWVyeS1yZXN1bHRzXCJ9LCBvcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2tleTogaW5kZXgsIGNsYXNzTmFtZTogXCJkaXNhYmxlZFwifSwgb3B0aW9uLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2tleTogaW5kZXgsIG9uQ2xpY2s6IGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkVmFsdWUob3B0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbk9wdGlvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25PcHRpb25DbGljayhvcHRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBvcHRpb24ubmFtZSkpKTtcbiAgICAgICAgfSksIGFkZE5ld1ZhbHVlID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7b25DbGljazogZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQWRkTmV3VmFsdWUodGhpcy5wcm9wcy52YWx1ZSk7XG4gICAgICAgIH0sIGNsYXNzTmFtZTogXCJhZGRcIn0sIFwi5re75YqgIFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIHRoaXMucHJvcHMudmFsdWUpKSkgOiBudWxsKSkgOiBudWxsKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0aXplSW5wdXQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvZm9ybS9zZWxlY3RpemUtaW5wdXQudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5jbGFzcyBTd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLm9uID8gJ29uJyA6ICdvZmYnO1xuICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgKyAnIHN3aXRjaGVyJztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJzd2l0Y2hlci1idXR0b25cIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwic3dpdGNoZXItdHJhY2tcIn0pKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKFN3aXRjaGVyKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9zd2l0Y2hlci50c3hcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Qm9va1ZpZXcoKSB7XG4gICAgbGV0IGFzcGVjdFJhdGlvID0gNyAvIDk7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDU0MCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyZWVuOiAncGhvbmUnLFxuICAgICAgICAgICAgcGFnZVdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgICAgIHBhZ2VIZWlnaHQ6IHdpbmRvdy5pbm5lcldpZHRoIC8gYXNwZWN0UmF0aW9cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JlZW46ICdoZCcsXG4gICAgICAgICAgICBwYWdlV2lkdGg6IDcwMCxcbiAgICAgICAgICAgIHBhZ2VIZWlnaHQ6IDcwMCAvIGFzcGVjdFJhdGlvXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGxvY2tTY3JvbGwoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVubG9ja1Njcm9sbCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xufVxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldEJvb2tWaWV3LFxuICAgIGxvY2tTY3JvbGwsXG4gICAgdW5sb2NrU2Nyb2xsXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3V0aWxzL3ZpZXcudHNcbiAqKi8iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcclxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XHJcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcclxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zaWRlLWVmZmVjdFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3Qtc2lkZS1lZmZlY3RcIlxuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsImltcG9ydCBDb250YWluZXIgZnJvbSAnLi9jb250YWluZXInO1xuZXhwb3J0IHsgQ29udGFpbmVyIH07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvbGF5b3V0L2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmNsYXNzIExvYWRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibG9hZGluZy13cmFwXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImljb24gaWNvbi1sb2FkaW5nXCJ9KSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvbG9hZGluZy50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmNsYXNzIE5hdlRhYiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcIm5hdi10YWJcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCBudWxsLCB0aGlzLnByb3BzLnRhYnMubWFwKCh0YWIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5wcm9wcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gJ2N1cnJlbnQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogY2xhc3NOYW1lLCBrZXk6IGluZGV4fSwgdGFiKSk7XG4gICAgICAgIH0pKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShOYXZUYWIpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL25hdi10YWIudHN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanNcbiAqKiBtb2R1bGUgaWQgPSA1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcclxubW9kdWxlLmV4cG9ydHMgPSAoXHJcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcclxuKS5zcGxpdCgnLCcpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4gKiogbW9kdWxlIGlkID0gNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDYzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcclxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxyXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XHJcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcclxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbiAqKiBtb2R1bGUgaWQgPSA2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbiAqKiBtb2R1bGUgaWQgPSA2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuICoqIG1vZHVsZSBpZCA9IDY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbiAqKiBtb2R1bGUgaWQgPSA3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDcxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSA3MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gNzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbicpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeScpO1xuXG52YXIgX3N0cmluZ2lmeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpbmdpZnkpO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXknKTtcblxudmFyIF9zbGljZWRUb0FycmF5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NsaWNlZFRvQXJyYXkyKTtcblxudmFyIF9nZXRJdGVyYXRvcjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yJyk7XG5cbnZhciBfZ2V0SXRlcmF0b3IzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBJc29tb3JwaGljIENTUyBzdHlsZSBsb2FkZXIgZm9yIFdlYnBhY2tcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNS0yMDE2IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBwcmVmaXggPSAncyc7XG52YXIgaW5zZXJ0ZWQgPSB7fTtcblxuLy8gQmFzZTY0IGVuY29kaW5nIGFuZCBkZWNvZGluZyAtIFRoZSBcIlVuaWNvZGUgUHJvYmxlbVwiXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93QmFzZTY0L0Jhc2U2NF9lbmNvZGluZ19hbmRfZGVjb2RpbmcjVGhlX1VuaWNvZGVfUHJvYmxlbVxuZnVuY3Rpb24gYjY0RW5jb2RlVW5pY29kZShzdHIpIHtcbiAgcmV0dXJuIGJ0b2EoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvJShbMC05QS1GXXsyfSkvZywgZnVuY3Rpb24gKG1hdGNoLCBwMSkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKCcweCcgKyBwMSk7XG4gIH0pKTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgc3R5bGUvbGluayBlbGVtZW50cyBmb3Igc3BlY2lmaWVkIG5vZGUgSURzXG4gKiBpZiB0aGV5IGFyZSBubyBsb25nZXIgcmVmZXJlbmNlZCBieSBVSSBjb21wb25lbnRzLlxuICovXG5mdW5jdGlvbiByZW1vdmVDc3MoaWRzKSB7XG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9ICgwLCBfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGlkcyksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgIHZhciBpZCA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICBpZiAoLS1pbnNlcnRlZFtpZF0gPD0gMCkge1xuICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCArIGlkKTtcbiAgICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRXhhbXBsZTpcbiAqICAgLy8gSW5zZXJ0IENTUyBzdHlsZXMgb2JqZWN0IGdlbmVyYXRlZCBieSBgY3NzLWxvYWRlcmAgaW50byBET01cbiAqICAgdmFyIHJlbW92ZUNzcyA9IGluc2VydENzcyhbWzEsICdib2R5IHsgY29sb3I6IHJlZDsgfSddXSk7XG4gKlxuICogICAvLyBSZW1vdmUgaXQgZnJvbSB0aGUgRE9NXG4gKiAgIHJlbW92ZUNzcygpO1xuICovXG5mdW5jdGlvbiBpbnNlcnRDc3Moc3R5bGVzLCBvcHRpb25zKSB7XG4gIHZhciBfT2JqZWN0JGFzc2lnbiA9ICgwLCBfYXNzaWduMi5kZWZhdWx0KSh7XG4gICAgcmVwbGFjZTogZmFsc2UsXG4gICAgcHJlcGVuZDogZmFsc2VcbiAgfSwgb3B0aW9ucyk7XG5cbiAgdmFyIHJlcGxhY2UgPSBfT2JqZWN0JGFzc2lnbi5yZXBsYWNlO1xuICB2YXIgcHJlcGVuZCA9IF9PYmplY3QkYXNzaWduLnByZXBlbmQ7XG5cblxuICB2YXIgaWRzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIF9zdHlsZXMkaSA9ICgwLCBfc2xpY2VkVG9BcnJheTMuZGVmYXVsdCkoc3R5bGVzW2ldLCA0KTtcblxuICAgIHZhciBtb2R1bGVJZCA9IF9zdHlsZXMkaVswXTtcbiAgICB2YXIgY3NzID0gX3N0eWxlcyRpWzFdO1xuICAgIHZhciBtZWRpYSA9IF9zdHlsZXMkaVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gX3N0eWxlcyRpWzNdO1xuXG4gICAgdmFyIGlkID0gbW9kdWxlSWQgKyAnLScgKyBpO1xuXG4gICAgaWRzLnB1c2goaWQpO1xuXG4gICAgaWYgKGluc2VydGVkW2lkXSkge1xuICAgICAgaWYgKCFyZXBsYWNlKSB7XG4gICAgICAgIGluc2VydGVkW2lkXSsrO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbnNlcnRlZFtpZF0gPSAxO1xuXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXggKyBpZCk7XG4gICAgdmFyIGNyZWF0ZSA9IGZhbHNlO1xuXG4gICAgaWYgKCFlbGVtKSB7XG4gICAgICBjcmVhdGUgPSB0cnVlO1xuXG4gICAgICBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgICBlbGVtLmlkID0gcHJlZml4ICsgaWQ7XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNzc1RleHQgPSBjc3M7XG4gICAgaWYgKHNvdXJjZU1hcCkge1xuICAgICAgY3NzVGV4dCArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYjY0RW5jb2RlVW5pY29kZSgoMCwgX3N0cmluZ2lmeTIuZGVmYXVsdCkoc291cmNlTWFwKSkgKyAnKi8nO1xuICAgICAgY3NzVGV4dCArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLmZpbGUgKyAnKi8nO1xuICAgIH1cblxuICAgIGlmICgndGV4dENvbnRlbnQnIGluIGVsZW0pIHtcbiAgICAgIGVsZW0udGV4dENvbnRlbnQgPSBjc3NUZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1RleHQ7XG4gICAgfVxuXG4gICAgaWYgKGNyZWF0ZSkge1xuICAgICAgaWYgKHByZXBlbmQpIHtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoZWxlbSwgZG9jdW1lbnQuaGVhZC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbW92ZUNzcy5iaW5kKG51bGwsIGlkcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0Q3NzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcbiAqKiBtb2R1bGUgaWQgPSA3NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY3NzLW1vZHVsZXNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0LWNzcy1tb2R1bGVzXCJcbiAqKiBtb2R1bGUgaWQgPSA3NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vZWxlbWVudHMvbGF5b3V0L2NvbnRhaW5lcic7XG5jbGFzcyBDb2xvcGhvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb2xvcGhvblwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiwqkgMjAxNe+8jTIwMTYgcmVhZHJ3ZWIuY29tLCBhbGwgcmlnaHRzIHJlc2VydmVkXCIpKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvbG9waG9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvQ29sb3Bob24udHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2VsZW1lbnRzL2Zvcm0nO1xuY2xhc3MgQm9va0luZm9Qb3B1cCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBhdXRob3IgPSB0aGlzLnByb3BzLmF1dGhvcjtcbiAgICAgICAgbGV0IHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gdGhpcy5wcm9wcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgbGV0IGJvb2tJZCA9IHRoaXMucHJvcHMuYm9va0lkO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJib29rLWluZm8tcG9wdXAgcG9wdXBcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7Y2xhc3NOYW1lOiBcInRpdGxlXCJ9LCB0aXRsZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtjbGFzc05hbWU6IFwiYXV0aG9yXCJ9LCBhdXRob3IpLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge2NvbG9yOiBcImJsdWVcIiwgdG86ICcvdmlld2VyL2Jvb2svJyArIGJvb2tJZH0sIFwi6ZiF6K+7XCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiZGVzY3JpcHRpb25cIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGRlc2NyaXB0aW9uKSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBCb29rSW5mb1BvcHVwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYm9vay1pbmZvLXBvcHVwLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm9vayBmcm9tICcuL2Jvb2snO1xuY2xhc3MgQm9va0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJib29rLWxpc3QgY2xlYXJmaXhcIn0sIHRoaXMucHJvcHMuYm9va0VudGl0aWVzID8gKHRoaXMucHJvcHMuYm9va0VudGl0aWVzLm1hcCgoYm9vaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdGl0bGUsIGF1dGhvciwgZGVzY3JpcHRpb24sIGNvdmVyIH0gPSBib29rO1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2ssIHtpZDogYm9vay5pZCwga2V5OiBpbmRleCwgdGl0bGU6IHRpdGxlLCBhdXRob3I6IGF1dGhvci5tYXAoYSA9PiBhLnJlZkRhdGEgPyBhLnJlZkRhdGEubmFtZSA6ICcnKS5qb2luKCcsICcpLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIGNvdmVyOiBjb3Zlcn0pKTtcbiAgICAgICAgfSkpIDogbnVsbCkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJvb2tMaXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYm9vay1saXN0LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm9va1BhZ2UgZnJvbSAnLi9ib29rLXBhZ2UnO1xuY2xhc3MgQm9va1BhZ2VMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIGxldCBzdHlsZSA9IHN0eWxlcy5CT09LX0hEX1NUWUxFXG4gICAgICAgIC8vIGlmKHRoaXMucHJvcHMudmlldy5tb2RlID09PSBcIk1PQklMRVwiKSB7XG4gICAgICAgIC8vICAgc3R5bGUgPSBzdHlsZXMuQk9PS19NT0JJTEVfU1RZTEVcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZighdGhpcy5wcm9wcy5pc0NhbGN1bGF0ZWQpIHtcbiAgICAgICAgLy8gICBzdHlsZS5oZWlnaHQgPSBcIjEwMCVcIlxuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtjbGFzc05hbWU6IFwicGFnZXNcIiwgc3R5bGU6IHsgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCB9fSwgdGhpcy5wcm9wcy5wYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAocGFnZS50eXBlID09PSBcInBhZ2VcIikge1xuICAgICAgICAgICAgICAgIC8vIHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUsIHBhZ2UucHJvcHMuc3R5bGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tQYWdlLCB7c3R5bGU6IHBhZ2UucHJvcHMuc3R5bGUsIGJvb2tJZDogdGhpcy5wcm9wcy5ib29rSWQsIGtleTogaW5kZXgsIHBhZ2U6IHBhZ2V9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm90IHR5cGUgcGFnZSFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQm9va1BhZ2VMaXN0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYm9vay1wYWdlLWxpc3QudHN4XG4gKiovIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuY2xhc3MgQm9va1BhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHBhZ2UgPSB0aGlzLnByb3BzLnBhZ2U7XG4gICAgICAgIGxldCBzdHlsZSA9IHRoaXMucHJvcHMuc3R5bGU7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtzdHlsZTogc3R5bGV9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29udGVudFwifSwgcGFnZS5wcm9wcy5jaGlsZHJlbi5tYXAoKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlICE9PSBcInBcIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbnN1cHBvcnRlZCBjb250ZW50IGZvdW5kIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgX19hc3NpZ24oe30sIGluZGV4ID09PSAwID8geyBzdHlsZTogeyBtYXJnaW5Ub3A6IHBhZ2UucHJvcHMub2Zmc2V0IH0gfSA6IHt9LCB7a2V5OiBpbmRleH0pLCBub2RlLnByb3BzLmNoaWxkcmVuKSk7XG4gICAgICAgIH0pKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInBhZ2Utbm9cIn0sIHBhZ2UucHJvcHMucGFnZU5vKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJvb2tQYWdlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYm9vay1wYWdlLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBCb29rSW5mb1BvcHVwIGZyb20gJy4vYm9vay1pbmZvLXBvcHVwJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2sgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogXCJib29rXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogJy9ib29rLycgKyB0aGlzLnByb3BzLmlkfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImJvb2stY292ZXJcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge3NyYzogdGhpcy5wcm9wcy5jb3Zlcn0pKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImJvb2stbWV0YVwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge3RpdGxlOiB0aGlzLnByb3BzLnRpdGxlLCBjbGFzc05hbWU6IFwiYm9vay1uYW1lXCJ9LCB0aGlzLnByb3BzLnRpdGxlKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJib29rLWF1dGhvclwifSwgdGhpcy5wcm9wcy5hdXRob3IpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9va0luZm9Qb3B1cCwge2Jvb2tJZDogdGhpcy5wcm9wcy5pZCwgdGl0bGU6IHRoaXMucHJvcHMudGl0bGUsIGF1dGhvcjogdGhpcy5wcm9wcy5hdXRob3IsIGRlc2NyaXB0aW9uOiB0aGlzLnByb3BzLmRlc2NyaXB0aW9ufSkpKTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29tcG9uZW50cy9ib29rLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmNsYXNzIENhbmR5Qm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5wcm9wcy5saXN0O1xuICAgICAgICBsZXQgdGl0bGUgPSB0aGlzLnByb3BzLnRpdGxlO1xuICAgICAgICBsZXQgbW9yZUxpbmsgPSB0aGlzLnByb3BzLm1vcmVMaW5rID8gdGhpcy5wcm9wcy5tb3JlTGluayA6IG51bGw7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNhbmR5LWJveFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIHtjbGFzc05hbWU6IFwiYm94LXRpdGxlXCJ9LCB0aXRsZSksIG1vcmVMaW5rID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBtb3JlTGlua30sIFwi5p+l55yL5pu05aSaXCIpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCBudWxsLCBsaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2tleTogaW5kZXh9LCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogaXRlbS5saW5rfSwgaXRlbS5uYW1lKSkpKSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYW5keUJveDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb21wb25lbnRzL2NhbmR5LWJveC50c3hcbiAqKi8iLCJpbXBvcnQgVmlld2VyUHJlZmVyZW5jZSBmcm9tICcuL3ZpZXdlci1wcmVmZXJlbmNlJztcbmV4cG9ydCBkZWZhdWx0IFZpZXdlclByZWZlcmVuY2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29tcG9uZW50cy92aWV3ZXItcHJlZmVyZW5jZS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFN3aXRjaGVyIGZyb20gJy4uLy4uL2VsZW1lbnRzL3N3aXRjaGVyJztcbi8vIEBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIFZpZXdlclByZWZlcmVuY2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJ2aWV3ZXItcHJlZmVyZW5jZVwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtjbGFzc05hbWU6IFwib3B0aW9uc1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IFwib3B0aW9uIG9wdGlvbi1mb250LXNpemVcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFwiQS1cIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFwiQStcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogXCJvcHRpb24gb3B0aW9uLXNjcm9sbFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJsYWJlbFwifSwgXCLmu5rliqjmqKHlvI9cIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpdGNoZXIsIHtvbjogdHJ1ZX0pKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IFwib3B0aW9uIG9wdGlvbi10aGVtZVwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge3N0eWxlOiB7IGJhY2tncm91bmQ6ICcjZmZmJyB9fSwgXCJ0aGVtZTFcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtzdHlsZTogeyBiYWNrZ3JvdW5kOiAnI2VlZScgfX0sIFwidGhlbWUyXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7c3R5bGU6IHsgYmFja2dyb3VuZDogJyMyMjInIH19LCBcInRoZW1lM1wiKSkpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKFZpZXdlclByZWZlcmVuY2UpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvdmlld2VyLXByZWZlcmVuY2Uvdmlld2VyLXByZWZlcmVuY2UudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5jbGFzcyBWaWV3ZXJTY3JvbGxiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge3N0eWxlOiB7IGhlaWdodDogNDAwIH0sIGNsYXNzTmFtZTogXCJ2aWV3ZXItc2Nyb2xsYmFyXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYnV0dG9uXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibG9jLWluZm9cIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCB0aGlzLnByb3BzLmN1cnJlbnQpLCBcIi9cIiwgdGhpcy5wcm9wcy50b3RhbCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJzdWItaW5mb1wifSwgXCIzMC4zJVwiKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtzdHlsZTogeyBoZWlnaHQ6IDEwMCB9LCBjbGFzc05hbWU6IFwidHJhY2stcGFzdFwifSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge3N0eWxlOiB7IGhlaWdodDogNDAwIH0sIGNsYXNzTmFtZTogXCJ0cmFja1wifSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoVmlld2VyU2Nyb2xsYmFyKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb21wb25lbnRzL3ZpZXdlci1zY3JvbGxiYXIudHN4XG4gKiovIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgQnJhbmRpbmcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9icmFuZGluZyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9sYXlvdXQnO1xuaW1wb3J0IENvbG9waG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29sb3Bob24nO1xuaW1wb3J0IHsgdXNlckF1dGggfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vYXBwLnNjc3MnKTtcbi8vIGltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0nXG5sZXQgQXBwID0gY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLnVzZXJBdXRoKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGlzQWRtaW4gPSBmYWxzZTtcbiAgICAgICAgbGV0IHVzZXJuYW1lID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLnJvbGUgIT09ICd2aXNpdG9yJykge1xuICAgICAgICAgICAgaXNBZG1pbiA9IHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLnJvbGUgPT09ICdhZG1pbic7XG4gICAgICAgICAgICB1c2VybmFtZSA9IHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLnVzZXJuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJyYW5kaW5nLCB7aXNBZG1pbjogaXNBZG1pbiwgdXNlcm5hbWU6IHVzZXJuYW1lfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCBudWxsLCB0aGlzLnByb3BzLmNoaWxkcmVuKSwgUmVhY3QuY3JlYXRlRWxlbWVudChDb2xvcGhvbiwgbnVsbCkpKTtcbiAgICB9XG59O1xuQXBwID0gX19kZWNvcmF0ZShbXG4gICAgQ1NTTW9kdWxlcyhzdHlsZXMpXG5dLCBBcHApO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiAoe1xuICAgIG5vdGlmaWNhdGlvbjogc3RhdGUuY29tcG9uZW50cy5ub3RpZmljYXRpb24sXG4gICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvblxufSksIHsgdXNlckF1dGggfSkoQXBwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2FwcC9hcHAudHN4XG4gKiovIiwiaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9hcHAvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBTd2l0Y2hlciBmcm9tICcuLi9lbGVtZW50cy9zd2l0Y2hlcic7XG5pbXBvcnQgQm9va0xpc3RTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvYm9vay1saXN0LXNlY3Rpb24nO1xuaW1wb3J0IHsgZmV0Y2hCb29rcywgZmV0Y2hDb2xsZWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuY2xhc3MgQXJjaGl2ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaEJvb2tzKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYXJjaGl2ZSBwYWdlLWNvbnRlbnRcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwYWdlLWhlYWRlclwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtjbGFzc05hbWU6IFwiY2F0ZWdvcmllc1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IFwiY3VycmVudFwifSwgXCLlhajpg6hcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBcIuWFqOmDqFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFwi5YWo6YOoXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgXCLlhajpg6hcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBcIuWFqOmDqFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFwi5YWo6YOoXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgXCLlhajpg6hcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJsZWZ0IGRyb3Bkb3duLW1lbnVcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBcIuaXtumXtFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFwi54Ot5bqmXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgXCLlkI3np7BcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicmlnaHRcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJsYWJlbFwifSwgXCLkuI3mmL7npLrmiJHor7vov4fnmoRcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpdGNoZXIsIHtvbjogZmFsc2V9KSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tMaXN0U2VjdGlvbiwge2Jvb2tFbnRpdGllczogdGhpcy5wcm9wcy5uZXdlc3RCb29rc30pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicGFnZS1sb2FkLW1vcmVcIn0sIFwi5Yqg6L295pu05aSaXCIpKSk7XG4gICAgfVxufVxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5ld2VzdEJvb2tzOiBzdGF0ZS5wYWdpbmF0aW9uLmJvb2tzLm5ld2VzdFxuICAgICAgICAgICAgPyBzdGF0ZS5wYWdpbmF0aW9uLmJvb2tzLm5ld2VzdC5pZHMubWFwKGlkID0+IHN0YXRlLmVudGl0aWVzLmJvb2tzW2lkXSlcbiAgICAgICAgICAgIDogW11cbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZmV0Y2hCb29rcywgZmV0Y2hDb2xsZWN0aW9ucyB9KShBcmNoaXZlKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2FyY2hpdmUudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBmZXRjaENvbGxlY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5jbGFzcyBBcmNoaXZlZENvbGxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hDb2xsZWN0aW9ucygpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImFyY2hpdmVkLWNvbGxlY3Rpb25cIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwYWdlLXRpdGxlXCJ9LCBcIuW+gOacn+S5puWNlVwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIG51bGwsIHRoaXMucHJvcHMubmV3ZXN0Q29sbGVjdGlvbnMubGVuZ3RoICE9PSAwXG4gICAgICAgICAgICAmJiB0aGlzLnByb3BzLm5ld2VzdENvbGxlY3Rpb25zLm1hcCgoY29sbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7a2V5OiBpbmRleH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBjb2xsLm5hbWUpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBjb2xsLmRlc2NyaXB0aW9uKSkpO1xuICAgICAgICAgICAgfSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicGFnZS1sb2FkLW1vcmVcIn0sIFwi5Yqg6L295pu05aSaXCIpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiAoe1xuICAgIG5ld2VzdENvbGxlY3Rpb25zOiBzdGF0ZS5wYWdpbmF0aW9uLmJvb2tDb2xsZWN0aW9ucy5uZXdlc3RcbiAgICAgICAgPyBzdGF0ZS5wYWdpbmF0aW9uLmJvb2tDb2xsZWN0aW9ucy5uZXdlc3QuaWRzLm1hcChpZCA9PiBzdGF0ZS5lbnRpdGllcy5ib29rQ29sbGVjdGlvbnNbaWRdKVxuICAgICAgICA6IFtdXG59KSwgeyBmZXRjaENvbGxlY3Rpb25zIH0pKEFyY2hpdmVkQ29sbGVjdGlvbik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9hcmNoaXZlZC1jb2xsZWN0aW9uLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZmV0Y2hCb29rIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9lbGVtZW50cy9sb2FkaW5nJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2VsZW1lbnRzL2Zvcm0nO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBCb2R5IGZyb20gJy4uL3NpZGUtZWZmZWN0cy9ib2R5JztcbmNsYXNzIEJvb2tJbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuYm9va0lkID0gcHJvcHMucGFyYW1zLmlkO1xuICAgIH1cbiAgICBzdGF0aWMgZmV0Y2hEYXRhKHsgc3RvcmUsIHBhcmFtcyB9KSB7XG4gICAgICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChmZXRjaEJvb2socGFyYW1zLmlkKSk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoQm9vayh0aGlzLmJvb2tJZCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGJvb2tJbmZvID0gdGhpcy5wcm9wcy5ib29rSW5mbyA/IHRoaXMucHJvcHMuYm9va0luZm8gOiB7fTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiLCB7Y2xhc3NOYW1lOiBcImJvb2staW5mbyBjb250ZW50LWNvbnRhaW5lclwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5LCB7Y2xhc3NOYW1lOiBcImJvb2staW5mb1wifSksIF8uaXNFbXB0eShib29rSW5mbykgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nLCBudWxsKSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIHtjbGFzc05hbWU6IFwiYm9vay1pbmZvLWhlYWRlclwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImxlZnQtY29sXCJ9LCBib29rSW5mby5jb3ZlciA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYm9vay1jb3ZlclwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7c3JjOiBib29rSW5mby5jb3Zlcn0pKSkgOiBudWxsKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInJpZ2h0LWNvbFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHtjbGFzc05hbWU6IFwiYm9vay1uYW1lXCJ9LCBib29rSW5mby50aXRsZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJib29rLWF1dGhvclwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBcIuS9nOiAhe+8mlwiLCBib29rSW5mby5hdXRob3IgPyBib29rSW5mby5hdXRob3IubWFwKGEgPT4gYS5yZWZEYXRhID8gYS5yZWZEYXRhLm5hbWUgOiAnJykuam9pbignLCAnKSA6ICcnKSksIGJvb2tJbmZvLnRpdGxlID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHt0bzogYC92aWV3ZXIvYm9vay8ke2Jvb2tJbmZvLmlkfWAsIGNvbG9yOiBcImJsdWVcIn0sIFwi6ZiF6K+7XCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgbnVsbCwgXCLmt7vliqDliLDkuabmnrZcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCBudWxsLCBcIuagh+iusOS4uuW3suivu1wiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIG51bGwsIFwi5pS26JePXCIpKSkgOiBudWxsKSksIGJvb2tJbmZvLmRlc2NyaXB0aW9uID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIFwi5YaF5a65566A5LuLXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBib29rSW5mby5kZXNjcmlwdGlvbikpKSA6IG51bGwpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICByZXR1cm4geyBib29rSW5mbzogc3RhdGUuZW50aXRpZXMuYm9va3Nbb3duUHJvcHMucGFyYW1zLmlkXSB9O1xufSwgeyBmZXRjaEJvb2sgfSkoQm9va0luZm8pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvYm9vay1pbmZvLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZmV0Y2hTaGVsZiB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IEJvb2tMaXN0U2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2Jvb2stbGlzdC1zZWN0aW9uJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5jbGFzcyBCb29rU2hlbGYgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgc3RhdGljIGZldGNoRGF0YSh7IHN0b3JlLCBwYXJhbXMgfSkge1xuICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZmV0Y2hTaGVsZigpKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hTaGVsZigpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBib29rTGlzdCA9IHRoaXMucHJvcHMuc2hlbGY7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tMaXN0U2VjdGlvbiwge2Jvb2tFbnRpdGllczogYm9va0xpc3QsIHRpdGxlOiBcIuaIkeeahOS5puaetlwifSkpKTtcbiAgICB9XG59XG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2hlbGY6IF8uZ2V0KHN0YXRlLnBheWxvYWRzLmJvb2tTaGVsZiwgJ2RhdGEnLCBbXSlcbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZmV0Y2hTaGVsZiB9KShCb29rU2hlbGYpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvYm9vay1zaGVsZi50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2VsZW1lbnRzL2Zvcm0nO1xuaW1wb3J0IHsgZmV0Y2hDb2xsZWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgQm9va0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9ib29rLWxpc3Qtc2VjdGlvbic7XG5jbGFzcyBDb2xsZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoQ29sbGVjdGlvbih0aGlzLnByb3BzLnBhcmFtcy5pZCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgYm9va0NvbGxlY3Rpb24gPSB0aGlzLnByb3BzLmJvb2tDb2xsZWN0aW9uID8gdGhpcy5wcm9wcy5ib29rQ29sbGVjdGlvbiA6IHsgaXRlbXM6IFtdIH07XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gYm9va0NvbGxlY3Rpb24uaXRlbXNcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlZkRhdGEpXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbS5yZWZEYXRhKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29sbGVjdGlvblwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtaGVhZGVyXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicGFnZS10aXRsZVwifSwgYm9va0NvbGxlY3Rpb24ubmFtZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJzdWItdGl0bGVcIn0sIFwiMTAg5pys5LmmXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYm9vay1zbGlkZXJcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9va0xpc3QsIHtib29rRW50aXRpZXM6IGl0ZW1zfSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgbnVsbCwgXCLmlLbol49cIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicGFnZS1jb250ZW50XCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBib29rQ29sbGVjdGlvbi5kZXNjcmlwdGlvbikpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgcmV0dXJuIHsgYm9va0NvbGxlY3Rpb246IHN0YXRlLmVudGl0aWVzLmJvb2tDb2xsZWN0aW9uc1tvd25Qcm9wcy5wYXJhbXMuaWRdIH07XG59LCB7IGZldGNoQ29sbGVjdGlvbiB9KShDb2xsZWN0aW9uKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2NvbGxlY3Rpb24udHN4XG4gKiovIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgZmV0Y2hCb29rcywgZmV0Y2hDb2xsZWN0aW9ucyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IEJvb2tMaXN0U2VjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Jvb2stbGlzdC1zZWN0aW9uJztcbmltcG9ydCBDYW5keUJveCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NhbmR5LWJveCc7XG5pbXBvcnQgQm9keSBmcm9tICcuLi8uLi9zaWRlLWVmZmVjdHMvYm9keSc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9lbGVtZW50cy9mb3JtJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vaG9tZS5zY3NzJyk7XG5sZXQgSG9tZSA9IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNob3dSZWNlbnRSZWFkaW5nOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cbiAgICBzdGF0aWMgZmV0Y2hEYXRhKHsgc3RvcmUgfSkge1xuICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZmV0Y2hCb29rcygpKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hCb29rcygpO1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoQ29sbGVjdGlvbnMoKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2Vzc2lvbi5pc0ZldGNoaW5nICYmICFuZXh0UHJvcHMuc2Vzc2lvbi5pc0ZldGNoaW5nKSB7XG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLnNlc3Npb24udXNlci5yb2xlICE9PSAndmlzaXRvcicpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnByb3BzLmZldGNoQm9va3MoJ3VzZXInKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzaG93UmVjZW50UmVhZGluZzogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG5ld2VzdEJvb2tzID0gdGhpcy5wcm9wcy5uZXdlc3RCb29rcztcbiAgICAgICAgbGV0IGxpc3ROYW1lID0gdGhpcy5wcm9wcy5jb2xsZWN0aW9uID8gdGhpcy5wcm9wcy5jb2xsZWN0aW9uLm5hbWUgOiAnJztcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLnByb3BzLmNvbGxlY3Rpb24gPyB0aGlzLnByb3BzLmNvbGxlY3Rpb24uaXRlbXNcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBCb29sZWFuKGl0ZW0ucmVmRGF0YSkpXG4gICAgICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbS5yZWZEYXRhKSA6IFtdO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5LCB7Y2xhc3NOYW1lOiBcImhvbWVcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicm93XCJ9LCB0aGlzLnByb3BzLnNlc3Npb24udXNlci5yb2xlID09PSAndmlzaXRvcicgJiYgIXRoaXMucHJvcHMuc2Vzc2lvbi5pc0ZldGNoaW5nID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJoZXJvLWltYWdlXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibG9nb1wifSwgXCJSZWFkclwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtdGl0bGVcIn0sIFwi5paw5LiA5LujIHdlYiDpmIXor7vkvZPpqoxcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7dG86IFwiL3NpZ251cFwifSwgXCLms6jlhoxcIikpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb2wtbWQtOFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChCb29rTGlzdFNlY3Rpb24sIHtib29rRW50aXRpZXM6IG5ld2VzdEJvb2tzLCB0aXRsZTogXCLmlrDkuabpgJ/pgJJcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tMaXN0U2VjdGlvbiwge2Jvb2tFbnRpdGllczogbGlzdCwgdGl0bGU6IGxpc3ROYW1lLCBtb3JlTGluazogYC9jb2xsZWN0aW9ucy8ke3RoaXMucHJvcHMuY29sbGVjdGlvbiA/IHRoaXMucHJvcHMuY29sbGVjdGlvbi5pZCA6ICcnfWB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCBfX2Fzc2lnbih7fSwgeyBzdHlsZU5hbWU6ICdibHVlJyB9LCB7Y2xhc3NOYW1lOiBcInZpZXctbW9yZVwiLCB0bzogXCIvY29sbGVjdGlvbnNcIn0pLCBcIua1j+iniOabtOWkmuS5puWNlTIgPlwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb2wtbWQtNFwifSwgdGhpcy5zdGF0ZS5zaG93UmVjZW50UmVhZGluZyA/IChSZWFjdC5jcmVhdGVFbGVtZW50KENhbmR5Qm94LCB7dGl0bGU6IFwi5pyA6L+R6ZiF6K+7MjIyXCIsIGxpc3Q6IFtdfSkpIDogbnVsbCkpKSk7XG4gICAgfVxufTtcbkhvbWUgPSBfX2RlY29yYXRlKFtcbiAgICBDU1NNb2R1bGVzKHN0eWxlcylcbl0sIEhvbWUpO1xuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlLnBhZ2luYXRpb24uYm9va3MubmV3ZXN0KTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VyQm9va3M6IFtdLFxuICAgICAgICBuZXdlc3RCb29rczogc3RhdGUucGFnaW5hdGlvbi5ib29rcy5uZXdlc3RcbiAgICAgICAgICAgID8gc3RhdGUucGFnaW5hdGlvbi5ib29rcy5uZXdlc3QuaWRzLm1hcChpZCA9PiBzdGF0ZS5lbnRpdGllcy5ib29rc1tpZF0pXG4gICAgICAgICAgICA6IFtdLFxuICAgICAgICBzZXNzaW9uOiBzdGF0ZS5zZXNzaW9uLFxuICAgICAgICAvLyB0b2RvOiBjb2xsZWN0aW9uIHBhZ2luYXRpb25cbiAgICAgICAgY29sbGVjdGlvbjogKCgpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gc3RhdGUuZW50aXRpZXMuYm9va0NvbGxlY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmVudGl0aWVzLmJvb2tDb2xsZWN0aW9uc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKVxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBmZXRjaEJvb2tzLCBmZXRjaENvbGxlY3Rpb25zIH0pKEhvbWUpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvaG9tZS9ob21lLnRzeFxuICoqLyIsImltcG9ydCBIb21lIGZyb20gJy4vaG9tZSc7XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuLy8gZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9ob21lJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvaG9tZS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IE5hdlRhYiBmcm9tICcuLi9lbGVtZW50cy9uYXYtdGFiJztcbmltcG9ydCB7IGZldGNoQm9va3MsIGZldGNoQ29sbGVjdGlvbnMsIGZldGNoU2hlbGYsIHNlbmROb3RpZmljYXRpb24gfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBCb29rTGlzdFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9ib29rLWxpc3Qtc2VjdGlvbic7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9lbGVtZW50cy9mb3JtJztcbmNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8vIHN0YXRpYyBmZXRjaERhdGEoe3N0b3JlLCBwYXJhbXN9KSB7XG4gICAgLy8gICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZmV0Y2goKSlcbiAgICAvLyB9XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaEJvb2tzKCk7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hTaGVsZignMTU1OTMxODcnKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbmV3ZXN0Qm9va3MgPSB0aGlzLnByb3BzLm5ld2VzdEJvb2tzO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwcm9maWxlXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicGFnZS1oZWFkZXJcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJ1c2VyLWF2YXRhclwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7c3JjOiBcImh0dHBzOi8vaW1nMy5kb3ViYW5pby5jb20vaWNvbi91bDQzNjQ2NzA2LTQzLmpwZ1wiLCBhbHQ6IFwidXNlcl9hdmF0YXJcIn0pKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJ1c2VybmFtZVwifSwgXCJ1c2VybmFtZVwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJ0YWdsaW5lXCJ9LCBcInNvbWV0aGluZyB0byBzYXlcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCBudWxsLCBcIue8lui+kVwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2VGFiLCB7dGFiczogWyfmlLbol48nLCAn6K+76L+HJywgJ+S5puivhCddLCBjdXJyZW50OiAwfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChCb29rTGlzdFNlY3Rpb24sIHt0aXRsZTogXCLwn5iEXCIsIGJvb2tFbnRpdGllczogbmV3ZXN0Qm9va3N9KSkpKTtcbiAgICB9XG59XG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvbixcbiAgICAgICAgbmV3ZXN0Qm9va3M6IHN0YXRlLnBhZ2luYXRpb24uYm9va3MubmV3ZXN0XG4gICAgICAgICAgICA/IHN0YXRlLnBhZ2luYXRpb24uYm9va3MubmV3ZXN0Lmlkcy5tYXAoaWQgPT4gc3RhdGUuZW50aXRpZXMuYm9va3NbaWRdKVxuICAgICAgICAgICAgOiBbXVxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBzZW5kTm90aWZpY2F0aW9uLCBmZXRjaEJvb2tzLCBmZXRjaENvbGxlY3Rpb25zLCBmZXRjaFNoZWxmIH0pKFByb2ZpbGUpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvcHJvZmlsZS50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24gfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBBbGVydCBmcm9tICcuLi9lbGVtZW50cy9hbGVydCc7XG5jbGFzcyBSb290IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImFwcC1yb290XCJ9LCB0aGlzLnByb3BzLm5vdGlmaWNhdGlvbnMuZmlsdGVyKG5vdGkgPT4gbm90aS52aXNpYmxlKS5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibm90aWZpY2F0aW9uc1wifSwgdGhpcy5wcm9wcy5ub3RpZmljYXRpb25zLm1hcCgobm90aSwgaW5kZXgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEFsZXJ0LCB7a2V5OiBpbmRleCwgdHlwZTogbm90aS50eXBlLCBtZXNzYWdlOiBub3RpLm1lc3NhZ2UsIHZpc2libGU6IG5vdGkudmlzaWJsZX0pKSkpKVxuICAgICAgICAgICAgOiBudWxsLCB0aGlzLnByb3BzLmNoaWxkcmVuKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiAoeyBub3RpZmljYXRpb25zOiBzdGF0ZS5jb21wb25lbnRzLm5vdGlmaWNhdGlvbnMgfSksIHsgc2VuZE5vdGlmaWNhdGlvbiB9KShSb290KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL3Jvb3QudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uLCB1c2VyQXV0aCwgZmV0Y2hQcm9maWxlIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgTmF2VGFiIGZyb20gJy4uL2VsZW1lbnRzL25hdi10YWInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vc2lkZS1lZmZlY3RzL2JvZHknO1xuaW1wb3J0IFN3aXRjaGVyIGZyb20gJy4uL2VsZW1lbnRzL3N3aXRjaGVyJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5jbGFzcyBQcm9maWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvLyBzdGF0aWMgZmV0Y2hEYXRhKHtzdG9yZSwgcGFyYW1zfSkge1xuICAgIC8vICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGZldGNoKCkpXG4gICAgLy8gfVxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIC8vIHVzZXIgc2Vzc2lvbiBmZXRjaGVkXG4gICAgICAgIGlmIChuZXh0UHJvcHMuc2Vzc2lvbi5pc0ZldGNoaW5nID09PSBmYWxzZSAmJiB0aGlzLnByb3BzLnNlc3Npb24uaXNGZXRjaGluZykge1xuICAgICAgICAgICAgY29uc3QgdXNlcklkID0gbmV4dFByb3BzLnNlc3Npb24udXNlci5pZDtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hQcm9maWxlKHVzZXJJZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgdXNlciA9IHRoaXMucHJvcHMucHJvZmlsZTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwic2V0dGluZ3NcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keSwge2NsYXNzTmFtZTogXCJwYWdlLXNldHRpbmdzXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtY29udGVudFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtaGVhZGVyXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge2NsYXNzTmFtZTogXCJwYWdlLXRpdGxlXCJ9LCBcIuiuvue9rlwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChOYXZUYWIsIHt0YWJzOiBbJ+i1hOaWmScsICfkuKrkurrkuLvpobUnXSwgY3VycmVudDogMH0pKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtjbGFzc05hbWU6IFwib3B0aW9uc1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IFwib3B0aW9uXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgbnVsbCwgXCLnlKjmiLflkI1cIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwib3B0aW9uLWlucHV0XCJ9LCBcImh0dHA6Ly9yZWFkcndlYi5jb20vQFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIHVzZXIudXNlcm5hbWUpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJlZGl0XCJ9LCBcIue8lui+kVwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBcIm9wdGlvblwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIFwi6YKu566xXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcIm9wdGlvbi1pbnB1dFwifSwgdXNlci5lbWFpbCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiZWRpdFwifSwgXCLnvJbovpFcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogXCJvcHRpb25cIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBcIuWvhueggVwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJvcHRpb24taW5wdXRcIn0sIFwiKioqKioqXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImVkaXRcIn0sIFwi57yW6L6RXCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IFwib3B0aW9uXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgbnVsbCwgXCLlhazlvIDlsZXnpLrmiJHnmoTmlLbol49cIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwib3B0aW9uLWRlc2NcIn0sIFwi5YWz6Zet5ZCO5YW25LuW55So5oi35bCG5peg5rOV5p+l55yL5oKo55qE5pS26JePXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXRjaGVyLCB7b246IHRydWV9KSkpKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4ge1xuICAgIGNvbnN0IHVzZXJJZCA9IHN0YXRlLnNlc3Npb24udXNlci5yb2xlICE9PSAndmlzaXRvcicgPyBzdGF0ZS5zZXNzaW9uLnVzZXIuaWQgOiAnJztcbiAgICBjb25zdCBwcm9maWxlID0gdXNlcklkICYmICFfLmlzRW1wdHkoc3RhdGUuZW50aXRpZXMucHJvZmlsZXMpID8gc3RhdGUuZW50aXRpZXMucHJvZmlsZXNbdXNlcklkXSA6IHt9O1xuICAgIHJldHVybiB7XG4gICAgICAgIG5vdGlmaWNhdGlvbjogc3RhdGUubm90aWZpY2F0aW9uLFxuICAgICAgICBzZXNzaW9uOiBzdGF0ZS5zZXNzaW9uLFxuICAgICAgICBwcm9maWxlXG4gICAgfTtcbn0sIHsgc2VuZE5vdGlmaWNhdGlvbiwgdXNlckF1dGgsIGZldGNoUHJvZmlsZSB9KShQcm9maWxlKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL3NldHRpbmdzLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgTGluaywgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IEFwaVJvb3RzIGZyb20gJy4uL2FwaS1jb25maWcvYXBpLXJvb3RzJztcbmltcG9ydCBjYWxsQXBpIGZyb20gJy4uL3V0aWxzL2NhbGwtYXBpJztcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24gfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBCcmFuZGluZyBmcm9tICcuLi9jb21wb25lbnRzL2JyYW5kaW5nJztcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQgfSBmcm9tICcuLi9lbGVtZW50cy9mb3JtJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vZWxlbWVudHMvbGF5b3V0L2NvbnRhaW5lcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9zaWRlLWVmZmVjdHMvYm9keSc7XG5jbGFzcyBTaWduaW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvZ2luOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgICB9O1xuICAgIH1cbiAgICBoYW5kbGVTaWduaW4oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIGxvZ2luOiB0aGlzLnN0YXRlLmxvZ2luLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmRcbiAgICAgICAgfTtcbiAgICAgICAgY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1hdXRoYCwgeyBtZXRob2Q6ICdQT1NUJywgZGF0YTogcGFyYW1zIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign55m75b2V5oiQ5Yqf77yBJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgICAgICAgICB9LCA2MDApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5LCB7Y2xhc3NOYW1lOiBcInNpZ25pblwifSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnJhbmRpbmcsIG51bGwpLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwge2NsYXNzTmFtZTogXCJjb250ZW50LWNvbnRhaW5lclwiLCBhY3Rpb246IGAke0FwaVJvb3RzLkxPQ0FMfWF1dGhgLCBtZXRob2Q6IFwicG9zdFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHtjbGFzc05hbWU6IFwicGFnZS10aXRsZVwifSwgXCLmrKLov47lm57mnaVcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHtvbkNoYW5nZTogdGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpLCB2YWx1ZTogdGhpcy5zdGF0ZS5sb2dpbiwgbmFtZTogXCJsb2dpblwiLCBwbGFjZWhvbGRlcjogXCLnlKjmiLflkI3miJbpgq7nrrFcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7b25DaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKSwgdmFsdWU6IHRoaXMuc3RhdGUucGFzc3dvcmQsIG5hbWU6IFwicGFzc3dvcmRcIiwgcGxhY2Vob2xkZXI6IFwi5a+G56CBXCIsIHR5cGU6IFwicGFzc3dvcmRcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge2NsYXNzTmFtZTogXCJ6MVwiLCBjb2xvcjogXCJibHVlXCIsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlU2lnbmluLmJpbmQodGhpcyl9LCBcIueZu+W9lVwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwge2NsYXNzTmFtZTogXCJoaW50XCJ9LCBcIuayoeaciei0puWPt++8n1wiLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvc2lnbnVwXCJ9LCBcIuazqOWGjFwiKSkpKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgICBub3RpZmljYXRpb246IHN0YXRlLmNvbXBvbmVudHMubm90aWZpY2F0aW9uLFxuICAgIHVzZXI6IHN0YXRlLnVzZXJcbn0pLCB7IHNlbmROb3RpZmljYXRpb24gfSkoU2lnbmluKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL3NpZ25pbi50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IExpbmssIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBBcGlSb290cyBmcm9tICcuLi9hcGktY29uZmlnL2FwaS1yb290cyc7XG5pbXBvcnQgY2FsbEFwaSBmcm9tICcuLi91dGlscy9jYWxsLWFwaSc7XG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgQnJhbmRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9icmFuZGluZyc7XG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnLi4vZWxlbWVudHMvZm9ybSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2VsZW1lbnRzL2xheW91dC9jb250YWluZXInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vc2lkZS1lZmZlY3RzL2JvZHknO1xuY2xhc3MgU2lnbnVwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB1c2VybmFtZTogJycsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICBwYXNzd29yZDogJydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaGFuZGxlU2lnbnVwKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICB1c2VybmFtZTogdGhpcy5zdGF0ZS51c2VybmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmRcbiAgICAgICAgfTtcbiAgICAgICAgY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH11c2Vyc2AsIHsgbWV0aG9kOiAnUE9TVCcsIGRhdGE6IHBhcmFtcyB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5rOo5YaM5oiQ5Yqf77yBJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgICAgICAgICB9LCA2MDApO1xuICAgICAgICB9LCBlcnIgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKGVyci5tZXNzYWdlLCAnZXJyb3InKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZUlucHV0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keSwge2NsYXNzTmFtZTogXCJzaWdudXBcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJyYW5kaW5nLCBudWxsKSwgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHtjbGFzc05hbWU6IFwiY29udGVudC1jb250YWluZXJcIiwgbWV0aG9kOiBcInBvc3RcIiwgYWN0aW9uOiBcIi9zaWdudXBcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtdGl0bGVcIn0sIFwi5Yqg5YWlIFJlYWRyXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7b25DaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKSwgdmFsdWU6IHRoaXMuc3RhdGUudXNlcm5hbWUsIG5hbWU6IFwidXNlcm5hbWVcIiwgcGxhY2Vob2xkZXI6IFwi55So5oi35ZCNXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwge29uQ2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0LmJpbmQodGhpcyksIHZhbHVlOiB0aGlzLnN0YXRlLmVtYWlsLCBuYW1lOiBcImVtYWlsXCIsIHBsYWNlaG9sZGVyOiBcIumCrueusVwifSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHtvbkNoYW5nZTogdGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpLCB2YWx1ZTogdGhpcy5zdGF0ZS5wYXNzd29yZCwgbmFtZTogXCJwYXNzd29yZFwiLCBwbGFjZWhvbGRlcjogXCLlr4bnoIEgXCIsIHR5cGU6IFwicGFzc3dvcmRcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge2NsYXNzTmFtZTogXCJ6MVwiLCBjb2xvcjogXCJibHVlXCIsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlU2lnbnVwLmJpbmQodGhpcyl9LCBcIuazqOWGjFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwge2NsYXNzTmFtZTogXCJoaW50XCJ9LCBcIuayoeaciei0puWPt++8n1wiLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvc2lnbmluXCJ9LCBcIueZu+W9lVwiKSkpKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgICBub3RpZmljYXRpb246IHN0YXRlLmNvbXBvbmVudHMubm90aWZpY2F0aW9uLFxuICAgIHVzZXI6IHN0YXRlLnVzZXJcbn0pLCB7IHNlbmROb3RpZmljYXRpb24gfSkoU2lnbnVwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL3NpZ251cC50c3hcbiAqKi8iLCJpbXBvcnQgVmlld2VyIGZyb20gJy4vdmlld2VyJztcbmV4cG9ydCBkZWZhdWx0IFZpZXdlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL3ZpZXdlci9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uL2VsZW1lbnRzL2ljb24nO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vZWxlbWVudHMvbG9hZGluZyc7XG5pbXBvcnQgRGlhbG9nIGZyb20gJy4uLy4uL2VsZW1lbnRzL0RpYWxvZyc7XG5pbXBvcnQgQm9va1BhZ2VMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYm9vay1wYWdlLWxpc3QnO1xuaW1wb3J0ICogYXMgcmVuZGVyQm9vayBmcm9tICcuLi8uLi91dGlscy9yZW5kZXItYm9vayc7XG5pbXBvcnQgeyBnZXRCb29rVmlldyB9IGZyb20gJy4uLy4uL3V0aWxzL3ZpZXcnO1xuaW1wb3J0IHsgZ2V0Q2FjaGUsIHNldENhY2hlIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2FjaGUnO1xuaW1wb3J0IHsgc2ltcGxlQ29tcGFyZU9iamVjdHMgfSBmcm9tICcuLi8uLi91dGlscy9vYmplY3QnO1xuaW1wb3J0IHsgZmV0Y2hCb29rLCB1c2VyQXV0aCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IGFwaXMgZnJvbSAnLi4vLi4vdXRpbHMvYXBpcyc7XG5pbXBvcnQgQm9keSBmcm9tICcuLi8uLi9zaWRlLWVmZmVjdHMvYm9keSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFZpZXdlclByZWZlcmVuY2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy92aWV3ZXItcHJlZmVyZW5jZSc7XG5pbXBvcnQgRmFkZSBmcm9tICcuLi8uLi9lbGVtZW50cy9hbmltYXRpb25zL2ZhZGUnO1xuaW1wb3J0IFZpZXdlclNjcm9sbGJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3ZpZXdlci1zY3JvbGxiYXInO1xuY29uc3QgYWN0aW9ucyA9IHsgZmV0Y2hCb29rLCB1c2VyQXV0aCB9O1xuY2xhc3MgVmlld2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuYm9va0lkID0gcHJvcHMucGFyYW1zLmlkO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvd1BhbmVsOiB0cnVlLFxuICAgICAgICAgICAgc2hvd1Byb2dyZXNzRGlhbG9nOiBmYWxzZSxcbiAgICAgICAgICAgIGlzQ2FsY3VsYXRpbmdEb206IGZhbHNlLFxuICAgICAgICAgICAgaXNSZWFkaW5nTW9kZTogZmFsc2UsXG4gICAgICAgICAgICBpc1Njcm9sbE1vZGU6IHRydWUsXG4gICAgICAgICAgICBpc0luaXRpYWxQcm9ncmVzc1NldDogZmFsc2UsXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogMCxcbiAgICAgICAgICAgIGNhbGN1bGF0ZWRQYWdlczogbnVsbCxcbiAgICAgICAgICAgIGxhdGVzdFByb2dyZXNzOiAwLFxuICAgICAgICAgICAgdmlldzogZ2V0Qm9va1ZpZXcoKSxcbiAgICAgICAgICAgIHNob3dWaWV3ZXJQcmVmZXJlbmNlOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRvZ2dsZVZpZXdlclByZWZlcmVuY2UgPSB0aGlzLnRvZ2dsZVZpZXdlclByZWZlcmVuY2UuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgdG9nZ2xlVmlld2VyUHJlZmVyZW5jZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93Vmlld2VyUHJlZmVyZW5jZTogIXRoaXMuc3RhdGUuc2hvd1ZpZXdlclByZWZlcmVuY2VcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNjcm9sbFRvKHBvc2l0aW9uKSB7XG4gICAgICAgIGxldCBwYWdlQ291bnQgPSB0aGlzLnN0YXRlLmNhbGN1bGF0ZWRQYWdlcy5wcm9wcy5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGxldCBwYWdlSGVpZ2h0ID0gdGhpcy5zdGF0ZS5jYWxjdWxhdGVkUGFnZXMucHJvcHMudmlldy5wYWdlSGVpZ2h0O1xuICAgICAgICBsZXQgaGVpZ2h0ID0gcGFnZUNvdW50ICogcGFnZUhlaWdodDtcbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IHJlbmRlckJvb2sucGVyY2VudGFnZVRvUGFnZShwb3NpdGlvbiwgcGFnZUNvdW50KSxcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHBvc2l0aW9uICogaGVpZ2h0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gcGFnZUNvdW50ICogcGFnZUhlaWdodCAqIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogaGVpZ2h0ICogcG9zaXRpb24gLyBwYWdlQ291bnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBwYWdlSGVpZ2h0ICogcG9zaXRpb247XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMubWFwU2Nyb2xsVG9wVG9TdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogZG9jdW1lbnQuYm9keS5zY3JvbGxUb3BcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1hcFdpbmRvd1dpZHRoVG9TdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHdpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubWFwVmlld1RvU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB2aWV3OiBnZXRCb29rVmlldygpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jaGVja0FuZFNldFByb2dyZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRQYWdlTm8gPSB0aGlzLnByb3BzLmJvb2sucGFnZU5vO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLmZldGNoQm9va1Byb2dyZXNzKHRoaXMuYm9va0lkKS50aGVuKGFjdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYm9vay5wYWdlTm8gLSBjdXJyZW50UGFnZU5vID4gNSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dQcm9ncmVzc0RpYWxvZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVzdFByb2dyZXNzOiB0aGlzLnByb3BzLmJvb2sucGVyY2VudGFnZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwYWdlU3VtID0gdGhpcy5zdGF0ZS5jYWxjdWxhdGVkUGFnZXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0ID0gcGFnZVN1bSAqIHRoaXMuc3RhdGUudmlldy5wYWdlSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGVyY2VudGFnZSA9IHRoaXMuc3RhdGUuc2Nyb2xsVG9wIC8gaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGFnZU5vID0gcmVuZGVyQm9vay5wZXJjZW50YWdlVG9QYWdlKHBlcmNlbnRhZ2UsIHBhZ2VTdW0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlTm8sXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU3VtLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBhcGlzLnNldFByb2dyZXNzKHRoaXMuYm9va0lkLCBwcm9ncmVzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFRPRE86IHVzZSBzZXNzaW9uIHRvIGRldGVybWluZSBsYXRlc3QgcHJvZ3Jlc3NcbiAgICAgICAgdGhpcy5kZWJvdW5kZWRTZXRQcm9ncmVzcyA9IF8uZGVib3VuY2UodGhpcy5jaGVja0FuZFNldFByb2dyZXNzLCAyMDApO1xuICAgICAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5kZWJvdW5kZWRTZXRQcm9ncmVzcylcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMubWFwU2Nyb2xsVG9wVG9TdGF0ZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm1hcFdpbmRvd1dpZHRoVG9TdGF0ZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm1hcFZpZXdUb1N0YXRlKTtcbiAgICB9XG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmRlYm91bmRlZFNldFByb2dyZXNzKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMubWFwU2Nyb2xsVG9wVG9TdGF0ZSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm1hcFdpbmRvd1dpZHRoVG9TdGF0ZSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm1hcFZpZXdUb1N0YXRlKTtcbiAgICB9XG4gICAgdG9nZ2xlQm9va1BhbmVsKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNhbGN1bGF0ZWRQYWdlcy5wcm9wcy52aWV3LnNjcmVlbiA9PT0gJ2hkJykge1xuICAgICAgICAgICAgbGV0IHkgPSBldmVudC5wYWdlWSAtIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgaWYgKHkgPCA5MCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzaG93UGFuZWw6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzaG93UGFuZWw6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xpY2tUb1RvZ2dsZUJvb2tQYW5lbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY2FsY3VsYXRlZFBhZ2VzLnByb3BzLnZpZXcuc2NyZWVuID09PSAncGhvbmUnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzaG93UGFuZWw6ICF0aGlzLnN0YXRlLnNob3dQYW5lbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2FsY3VsYXRlRG9tKCkge1xuICAgICAgICBsZXQgaHRtbCA9IHRoaXMuc3RhdGUuYm9va0h0bWw7XG4gICAgICAgIGxldCBib29rSWQgPSB0aGlzLmJvb2tJZDtcbiAgICAgICAgbGV0IHZpZXcgPSBnZXRCb29rVmlldygpO1xuICAgICAgICBsZXQgbm9kZUhlaWdodHMgPSByZW5kZXJCb29rLmdldE5vZGVIZWlnaHRzKHRoaXMucmVmcy5ib29rSHRtbC5jaGlsZE5vZGVzKTtcbiAgICAgICAgbGV0IHBhZ2VzID0gcmVuZGVyQm9vay5odG1sVG9QYWdlcyhodG1sLCBub2RlSGVpZ2h0cywgdmlldyk7XG4gICAgICAgIHNldENhY2hlKGBib29rJHtib29rSWR9X3BhZ2VzYCwgSlNPTi5zdHJpbmdpZnkocGFnZXMpKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1JlYWRpbmdNb2RlOiB0cnVlLFxuICAgICAgICAgICAgaXNDYWxjdWxhdGluZ0RvbTogZmFsc2UsXG4gICAgICAgICAgICBjYWxjdWxhdGVkUGFnZXM6IHBhZ2VzXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsb2FkQ2FsY3VsYXRlZFBhZ2VzKCkge1xuICAgICAgICBjb25zdCBib29rSWQgPSB0aGlzLnByb3BzLnBhcmFtcy5pZDtcbiAgICAgICAgbGV0IHBhZ2VzID0gZ2V0Q2FjaGUoYGJvb2ske2Jvb2tJZH1fcGFnZXNgKTtcbiAgICAgICAgLy8gY2hlY2sgaWYgcGFnZXMgYXJlIGNhY2hlZFxuICAgICAgICBpZiAocGFnZXMpIHtcbiAgICAgICAgICAgIHBhZ2VzID0gSlNPTi5wYXJzZShwYWdlcyk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc1JlYWRpbmdNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZWRQYWdlczogcGFnZXMsXG4gICAgICAgICAgICAgICAgYm9va0h0bWw6IHJlbmRlckJvb2sucGFnZXNUb0h0bWwocGFnZXMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy5mZXRjaEJvb2soYm9va0lkLCBbJ2NvbnRlbnQnXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICBpZiAobmV4dFByb3BzLmJvb2sgJiYgbmV4dFByb3BzLmJvb2suY29udGVudCAmJiBuZXh0UHJvcHMuYm9vay5jb250ZW50Lmh0bWwgJiYgIXRoaXMucHJvcHMuYm9vay5jb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc0NhbGN1bGF0aW5nRG9tOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJvb2tIdG1sOiBuZXh0UHJvcHMuYm9vay5jb250ZW50Lmh0bWxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2ltcGxlQ29tcGFyZU9iamVjdHModGhpcy5zdGF0ZS52aWV3LCBuZXh0U3RhdGUudmlldykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGlzQ2FsY3VsYXRpbmdEb206IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNDYWxjdWxhdGluZ0RvbSAmJiAhcHJldlN0YXRlLmlzQ2FsY3VsYXRpbmdEb20pIHtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlRG9tKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2Nyb2xsIHRvIHByZXZpb3VzIHJlYWRpbmcgcHJvZ3Jlc3Mgd2hlbiBvcGVuaW5nIGEgYm9va1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5ib29rICYmIHRoaXMucHJvcHMuYm9vay5wZXJjZW50YWdlICYmIHRoaXMuc3RhdGUuY2FsY3VsYXRlZFBhZ2VzICYmICF0aGlzLnN0YXRlLmlzSW5pdGlhbFByb2dyZXNzU2V0KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMucHJvcHMuYm9vay5wZXJjZW50YWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgaXNJbml0aWFsUHJvZ3Jlc3NTZXQ6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5wcm9wcy5hY3Rpb25zO1xuICAgICAgICBjb25zdCBib29rSWQgPSB0aGlzLnByb3BzLnBhcmFtcy5pZDtcbiAgICAgICAgYWN0aW9ucy51c2VyQXV0aCgpO1xuICAgICAgICBhY3Rpb25zLmZldGNoQm9vayhib29rSWQpO1xuICAgICAgICAvLyBhY3Rpb25zLmZldGNoQm9va1Byb2dyZXNzKGJvb2tJZClcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLmxvYWRDYWxjdWxhdGVkUGFnZXMoKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0luaXRpYWxQcm9ncmVzc1NldDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbmRlckJvb2soKSB7XG4gICAgICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLnN0YXRlLnNjcm9sbFRvcDtcbiAgICAgICAgbGV0IGNhbGN1bGF0ZWRQYWdlcyA9IHRoaXMuc3RhdGUuY2FsY3VsYXRlZFBhZ2VzO1xuICAgICAgICBsZXQgYm9va0lkID0gdGhpcy5wcm9wcy5wYXJhbXMuaWQ7XG4gICAgICAgIGxldCB2aWV3ID0gY2FsY3VsYXRlZFBhZ2VzLnByb3BzLnZpZXc7XG4gICAgICAgIGxldCBoZWlnaHQgPSBjYWxjdWxhdGVkUGFnZXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoICogdmlldy5wYWdlSGVpZ2h0O1xuICAgICAgICBsZXQgY3VycmVudFBhZ2UgPSByZW5kZXJCb29rLnBlcmNlbnRhZ2VUb1BhZ2Uoc2Nyb2xsVG9wIC8gaGVpZ2h0LCBjYWxjdWxhdGVkUGFnZXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICAgICAgbGV0IHBhZ2VzID0gcmVuZGVyQm9vay5maWx0ZXJQYWdlcyh7XG4gICAgICAgICAgICBzdGFydFBhZ2U6IGN1cnJlbnRQYWdlLFxuICAgICAgICAgICAgb2Zmc2V0OiAyLFxuICAgICAgICAgICAgcXVhbnRpdHk6IDUsXG4gICAgICAgICAgICBwYWdlczogY2FsY3VsYXRlZFBhZ2VzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge29uQ2xpY2s6IHRoaXMuY2xpY2tUb1RvZ2dsZUJvb2tQYW5lbC5iaW5kKHRoaXMpfSwgUmVhY3QuY3JlYXRlRWxlbWVudChCb29rUGFnZUxpc3QsIHtoZWlnaHQ6IGhlaWdodCwgdmlldzogdmlldywgYm9va0lkOiBib29rSWQsIHBhZ2VzOiBwYWdlc30pKSk7XG4gICAgfVxuICAgIGhpZGVQcm9ncmVzc0RpYWxvZygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93UHJvZ3Jlc3NEaWFsb2c6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBib29rID0gdGhpcy5wcm9wcy5ib29rO1xuICAgICAgICBsZXQgdmlldyA9IHRoaXMuc3RhdGUudmlldztcbiAgICAgICAgbGV0IGFjdGlvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ1llcycsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb246ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUby5jYWxsKHRoaXMsIHRoaXMuc3RhdGUubGF0ZXN0UHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVQcm9ncmVzc0RpYWxvZy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ05vJyxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbjogdGhpcy5oaWRlUHJvZ3Jlc3NEaWFsb2cuYmluZCh0aGlzKVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogYHZpZXdlciB2aWV3ZXItLSR7dmlldy5zY3JlZW59YCwgb25Nb3VzZU1vdmU6IHRoaXMudG9nZ2xlQm9va1BhbmVsLmJpbmQodGhpcyl9LCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHksIHtjbGFzc05hbWU6IFwidmlld2VyXCJ9KSwgIWJvb2suY29udGVudCAmJiAhdGhpcy5zdGF0ZS5jYWxjdWxhdGVkUGFnZXMgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nLCBudWxsKSkgOiBudWxsLCB0aGlzLnN0YXRlLnNob3dQcm9ncmVzc0RpYWxvZyA/IChSZWFjdC5jcmVhdGVFbGVtZW50KERpYWxvZywge2FjdGlvbnM6IGFjdGlvbnMsIGNvbnRlbnQ6IFwiYXJlIHlvdSBzdXJlP1wifSkpIDogbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdENTU1RyYW5zaXRpb25Hcm91cCwge2NvbXBvbmVudDogXCJkaXZcIiwgdHJhbnNpdGlvbk5hbWU6IFwic2xpZGVcIiwgdHJhbnNpdGlvbkVudGVyVGltZW91dDogMzAwLCB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0OiAzMDB9LCAodGhpcy5zdGF0ZS5zaG93UGFuZWwgJiYgdGhpcy5zdGF0ZS5pc1JlYWRpbmdNb2RlKSB8fCB0aGlzLnN0YXRlLnNob3dWaWV3ZXJQcmVmZXJlbmNlID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJ2aWV3ZXItcGFuZWxcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb250YWluZXJcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJiYWNrXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHtuYW1lOiBcImJhY2tcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIui/lOWbnlwiKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcInRpdGxlXCJ9LCBib29rLnRpdGxlKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7b25DbGljazogdGhpcy50b2dnbGVWaWV3ZXJQcmVmZXJlbmNlLCBjbGFzc05hbWU6IFwicHJlZmVyZW5jZVwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7bmFtZTogXCJmb250XCJ9KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJhZGRcIn0sIFwi54K55Ye75re75Yqg6Iez5Lmm5p62XCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZhZGUsIG51bGwsIHRoaXMuc3RhdGUuc2hvd1ZpZXdlclByZWZlcmVuY2UgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChWaWV3ZXJQcmVmZXJlbmNlLCBudWxsKSkgOiBudWxsKSkpKSA6IG51bGwpLCAodGhpcy5zdGF0ZS5pc0NhbGN1bGF0aW5nRG9tICYmIHRoaXMuc3RhdGUuYm9va0h0bWwpID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcInBhZ2VzXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7cmVmOiBcImJvb2tIdG1sXCIsIGNsYXNzTmFtZTogXCJjb250ZW50XCIsIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogdGhpcy5zdGF0ZS5ib29rSHRtbCB9fSkpKSkgOiBudWxsLCB0aGlzLnN0YXRlLmlzUmVhZGluZ01vZGUgPyAodGhpcy5yZW5kZXJCb29rKCkpIDogbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChWaWV3ZXJTY3JvbGxiYXIsIHtjdXJyZW50OiAyMCwgdG90YWw6IDMwOX0pKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9vazogc3RhdGUuZW50aXRpZXMuYm9va3Nbb3duUHJvcHMucGFyYW1zLmlkXSA/IHN0YXRlLmVudGl0aWVzLmJvb2tzW293blByb3BzLnBhcmFtcy5pZF0gOiB7fSxcbiAgICAgICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvblxuICAgIH07XG59LCBkaXNwYXRjaCA9PiAoe1xuICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLCBkaXNwYXRjaClcbn0pKShWaWV3ZXIpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvdmlld2VyL3ZpZXdlci50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuY2xhc3MgRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRDbGFzcyA9ICdkaWFsb2cgejEnO1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWUgPyBgJHtkZWZhdWx0Q2xhc3N9ICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YCA6IGRlZmF1bHRDbGFzcztcbiAgICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLnByb3BzLmNvbnRlbnQ7XG4gICAgICAgIGxldCBhY3Rpb25zID0gdGhpcy5wcm9wcy5hY3Rpb25zO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogY2xhc3NOYW1lfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgY29udGVudCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJhY3Rpb25zXCJ9LCBhY3Rpb25zLm1hcCgoYWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtrZXk6IGluZGV4LCBvbkNsaWNrOiBhY3Rpb24uZnVuY3Rpb259LCBhY3Rpb24udGV4dCk7XG4gICAgICAgIH0pKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IERpYWxvZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9EaWFsb2cudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IE5vTWF0Y2ggZnJvbSAnLi4vY29udGFpbmVycy9uby1tYXRjaCc7XG5pbXBvcnQgVmlld2VyIGZyb20gJy4uL2NvbnRhaW5lcnMvdmlld2VyJztcbmltcG9ydCBTaWduaW4gZnJvbSAnLi4vY29udGFpbmVycy9zaWduaW4nO1xuaW1wb3J0IFNpZ251cCBmcm9tICcuLi9jb250YWluZXJzL3NpZ251cCc7XG5pbXBvcnQgQm9va0luZm8gZnJvbSAnLi4vY29udGFpbmVycy9ib29rLWluZm8nO1xuaW1wb3J0IEFwcCBmcm9tICcuLi9jb250YWluZXJzL2FwcCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuLi9jb250YWluZXJzL2hvbWUnO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi4vY29udGFpbmVycy9wcm9maWxlJztcbmltcG9ydCBCb29rU2hlbGYgZnJvbSAnLi4vY29udGFpbmVycy9ib29rLXNoZWxmJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuLi9jb250YWluZXJzL3NldHRpbmdzJztcbmltcG9ydCBBcmNoaXZlIGZyb20gJy4uL2NvbnRhaW5lcnMvYXJjaGl2ZSc7XG5pbXBvcnQgQ29sbGVjdGlvbiBmcm9tICcuLi9jb250YWluZXJzL2NvbGxlY3Rpb24nO1xuaW1wb3J0IEFyY2hpdmVkQ29sbGVjdGlvbiBmcm9tICcuLi9jb250YWluZXJzL2FyY2hpdmVkLWNvbGxlY3Rpb24nO1xuaW1wb3J0IFJvb3QgZnJvbSAnLi4vY29udGFpbmVycy9yb290JztcbmV4cG9ydCBkZWZhdWx0IChSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwiL1wiLCBjb21wb25lbnQ6IFJvb3R9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7Y29tcG9uZW50OiBBcHB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KEluZGV4Um91dGUsIHtjb21wb25lbnQ6IEhvbWV9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwiYm9vay86aWRcIiwgY29tcG9uZW50OiBCb29rSW5mb30pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJwcm9maWxlXCIsIGNvbXBvbmVudDogUHJvZmlsZX0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJwcm9maWxlLzp1c2VyXCIsIGNvbXBvbmVudDogUHJvZmlsZX0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJzaGVsZlwiLCBjb21wb25lbnQ6IEJvb2tTaGVsZn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJzZXR0aW5nc1wiLCBjb21wb25lbnQ6IFNldHRpbmdzfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcImJyb3dzZVwiLCBjb21wb25lbnQ6IEFyY2hpdmV9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwiY29sbGVjdGlvbnMvOmlkXCIsIGNvbXBvbmVudDogQ29sbGVjdGlvbn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJjb2xsZWN0aW9uc1wiLCBjb21wb25lbnQ6IEFyY2hpdmVkQ29sbGVjdGlvbn0pKSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwic2lnbmluXCIsIGNvbXBvbmVudDogU2lnbmlufSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcInNpZ251cFwiLCBjb21wb25lbnQ6IFNpZ251cH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJ2aWV3ZXIvYm9vay86aWRcIiwgY29tcG9uZW50OiBWaWV3ZXJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwiKlwiLCBjb21wb25lbnQ6IE5vTWF0Y2h9KSkpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9yb3V0ZXMvYXBwLnRzeFxuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBnZXRDYWNoZShuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdOYW1lIHNob3VsZCBiZSBzdHJpbmchJyk7XG4gICAgfVxuICAgIGxldCBjb250ZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSk7XG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgIGNvbnRlbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0Q2FjaGUobmFtZSwgY29udGVudCkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTmFtZSBzaG91bGQgYmUgc3RyaW5nIScpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhY2hlIGNvbnRlbnQgc2hvdWxkIGJlIHN0cmluZyEnKTtcbiAgICB9XG4gICAgbGV0IHN1Y2Nlc3MgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIGNvbnRlbnQpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICBzdWNjZXNzID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBzdWNjZXNzO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3V0aWxzL2NhY2hlLnRzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIHNpbXBsZUNvbXBhcmVPYmplY3RzKG9iajEsIG9iajIpIHtcbiAgICBsZXQgaXNFcXVhbCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBvYmoxKSB7XG4gICAgICAgICAgICBpZiAob2JqMVtwcm9wXSAhPT0gb2JqMltwcm9wXSkge1xuICAgICAgICAgICAgICAgIGlzRXF1YWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICBpc0VxdWFsID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBpc0VxdWFsO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3V0aWxzL29iamVjdC50c1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJQYWdlcyhjb25maWcpIHtcbiAgICBsZXQgeyBzdGFydFBhZ2UsIHF1YW50aXR5LCBvZmZzZXQsIHBhZ2VzIH0gPSBjb25maWc7XG4gICAgbGV0IG5ld1BhZ2VzID0gW107XG4gICAgd2hpbGUgKHN0YXJ0UGFnZSAtIG9mZnNldCA8IDApIHtcbiAgICAgICAgb2Zmc2V0LS07XG4gICAgfVxuICAgIHN0YXJ0UGFnZSA9IHN0YXJ0UGFnZSAtIG9mZnNldDtcbiAgICBmb3IgKGxldCBpID0gc3RhcnRQYWdlOyBpIDwgcXVhbnRpdHkgKyBzdGFydFBhZ2UgJiYgaSA8IHBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwYWdlID0gcGFnZXNbaV07XG4gICAgICAgIG5ld1BhZ2VzLnB1c2gocGFnZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdQYWdlcztcbn1cbmV4cG9ydCBmdW5jdGlvbiBodG1sVG9QYWdlcyhodG1sLCBub2RlSGVpZ2h0cywgdmlldykge1xuICAgIGxldCBwYWdlSGVpZ2h0ID0gdmlldy5wYWdlSGVpZ2h0O1xuICAgIGxldCBub2RlcyA9IHBhcnNlSFRNTChodG1sKTtcbiAgICBsZXQgcGFnZXMgPSBncm91cE5vZGVzQnlQYWdlKG5vZGVzLCBub2RlSGVpZ2h0cywgcGFnZUhlaWdodCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ3BhZ2VzJyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBwYWdlcyxcbiAgICAgICAgICAgIHZpZXdcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gcGFnZXNUb0h0bWwocGFnZXMpIHtcbiAgICBsZXQgbm9kZXMgPSBwYWdlcy5wcm9wcy5jaGlsZHJlbi5yZWR1Y2UoKGEsIGIpID0+IChhLmNvbmNhdChiLnByb3BzLmNoaWxkcmVuKSksIFtdKTtcbiAgICBsZXQgdW5pcXVlTm9kZXMgPSBbXTtcbiAgICBsZXQgcmVhbEluZGV4ID0gMDtcbiAgICAvLyByZW1vdmUgZHVwbGljYXRlIG5vZGVzXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGVzW2ldLnByb3BzLmluZGV4ID09PSByZWFsSW5kZXgpIHtcbiAgICAgICAgICAgIHVuaXF1ZU5vZGVzLnB1c2gobm9kZXNbaV0pO1xuICAgICAgICAgICAgcmVhbEluZGV4Kys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGh0bWwgPSBwYXJzZU5vZGVzKHVuaXF1ZU5vZGVzKTtcbiAgICByZXR1cm4gaHRtbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlSGVpZ2h0cyhub2Rlcykge1xuICAgIGxldCBub2Rlc0hlaWdodCA9IFtdO1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZXMsIChub2RlLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAobm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09IFwicFwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5zdXBwb3J0ZWQgY29udGVudCBmb3VuZCFcIik7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZXNIZWlnaHQucHVzaChub2RlLmNsaWVudEhlaWdodCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5vZGVzSGVpZ2h0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBlcmNlbnRhZ2VUb1BhZ2UocCwgcGFnZVN1bSkge1xuICAgIGlmIChwID4gMSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiV3JvbmcgcGFyYW1ldGVyIVwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoKHAgKiBwYWdlU3VtKSkgKyAxO1xuICAgIH1cbn1cbi8vIGZ1bmNzIHVzZWQgaW50ZXJuYWxseVxuZnVuY3Rpb24gcGFyc2VIVE1MKGh0bWxTdHJpbmcpIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICBsZXQgJGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCAkaHRtbE5vZGVzO1xuICAgICRodG1sLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XG4gICAgJGh0bWxOb2RlcyA9ICRodG1sLmNoaWxkTm9kZXM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkaHRtbE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICgkaHRtbE5vZGVzW2ldLm5vZGVUeXBlICE9IDEpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJGh0bWxOb2Rlc1tpXS50YWdOYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46ICRodG1sTm9kZXNbaV0uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGVzO1xufVxuZnVuY3Rpb24gcGFyc2VOb2Rlcyhub2Rlcykge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobm9kZXNbaV0udHlwZSAhPT0gJ3AnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbnN1cHBvcnRlZCBub2RlIGZvdW5kIScpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBodG1sICs9IGA8cD4ke25vZGVzW2ldLnByb3BzLmNoaWxkcmVufTwvcD5gO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xufVxuZnVuY3Rpb24gZ3JvdXBOb2Rlc0J5UGFnZShub2Rlcywgbm9kZUhlaWdodHMsIHBhZ2VIZWlnaHQpIHtcbiAgICBsZXQgcGFnZXMgPSBbXTtcbiAgICBsZXQgcGFnZUhlaWdodFN1bSA9IG5vZGVIZWlnaHRzLnJlZHVjZSgoYSwgYikgPT4gKGEgKyBiKSwgMCk7XG4gICAgbGV0IHBhZ2VTdW0gPSBNYXRoLmNlaWwocGFnZUhlaWdodFN1bSAvIHBhZ2VIZWlnaHQpO1xuICAgIG5vZGVzID0gbm9kZXMubWFwKChub2RlLCBpbmRleCkgPT4ge1xuICAgICAgICBub2RlLnByb3BzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0pO1xuICAgIC8vIGxvbmcgcGFyYWdyYXBoIHNpdHVhdGlvbiBkb2Vzbid0IHNlZW0gdG8gYWZmZWN0IHRoaXMgZnVuY3Rpb25cbiAgICAvLyBvZmZzZXQgZGlzdGFuY2UgaXMgYWx3YXlzIG5lZ3RpdmUgb3IgemVyb1xuICAgIC8vIHRoZSBpbmRleCB3aWxsIGJlIG9mIHRoZSBwYXJhZ3JhcGggd2l0aCB0aGlzIG9mZnNldCBhdCB0aGUgZW5kXG4gICAgY29uc3QgZ2V0UGFnZU9mZnNldCA9IGZ1bmN0aW9uIChwYWdlSW5kZXgpIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IGluZGV4O1xuICAgICAgICBpZiAocGFnZUluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICBsZXQgbm9kZUhlaWdodFN1bSA9IDA7XG4gICAgICAgICAgICB3aGlsZSAobm9kZUhlaWdodFN1bSA8PSBwYWdlSGVpZ2h0ICogcGFnZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgbm9kZUhlaWdodFN1bSArPSBub2RlSGVpZ2h0c1tpXTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmZzZXQgPSBub2RlSGVpZ2h0U3VtIC0gbm9kZUhlaWdodHNbaSAtIDFdIC0gcGFnZUluZGV4ICogcGFnZUhlaWdodDtcbiAgICAgICAgICAgIGluZGV4ID0gaSAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgIGluZGV4XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBjb25zdCBnZXROb2Rlc09mUGFnZSA9IGZ1bmN0aW9uIChwYWdlSW5kZXgpIHtcbiAgICAgICAgbGV0IG9mZnNldE9iamVjdCA9IGdldFBhZ2VPZmZzZXQocGFnZUluZGV4KTtcbiAgICAgICAgbGV0IG5vZGVTdGFydEluZGV4ID0gb2Zmc2V0T2JqZWN0LmluZGV4O1xuICAgICAgICBsZXQgb2Zmc2V0ID0gb2Zmc2V0T2JqZWN0Lm9mZnNldDtcbiAgICAgICAgbGV0IGkgPSBub2RlU3RhcnRJbmRleDtcbiAgICAgICAgbGV0IG5vZGVFbmRJbmRleDtcbiAgICAgICAgbGV0IHBhZ2VOb2RlcyA9IFtdO1xuICAgICAgICBsZXQgbm9kZUhlaWdodFN1bSA9IG9mZnNldCArIG5vZGVIZWlnaHRzW25vZGVTdGFydEluZGV4XTtcbiAgICAgICAgaSsrO1xuICAgICAgICBpZiAobm9kZUhlaWdodFN1bSA8IHBhZ2VIZWlnaHQpIHtcbiAgICAgICAgICAgIHdoaWxlIChub2RlSGVpZ2h0U3VtIDw9IHBhZ2VIZWlnaHQgJiYgaSAhPT0gbm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbm9kZUhlaWdodFN1bSArPSBub2RlSGVpZ2h0c1tpXTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlRW5kSW5kZXggPSBpIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGVFbmRJbmRleCA9IG5vZGVTdGFydEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSBub2RlU3RhcnRJbmRleDsgaSA8PSBub2RlRW5kSW5kZXggJiYgaSA8PSBub2Rlcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIHBhZ2VOb2Rlcy5wdXNoKG5vZGVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3BhZ2VOb2Rlcywgb2Zmc2V0XTtcbiAgICB9O1xuICAgIC8vIGZpbmFsbHlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VTdW07IGkrKykge1xuICAgICAgICBsZXQgYXJyYXkgPSBnZXROb2Rlc09mUGFnZShpKTtcbiAgICAgICAgbGV0IG5vZGVzID0gYXJyYXlbMF07XG4gICAgICAgIGxldCBvZmZzZXQgPSBhcnJheVsxXTtcbiAgICAgICAgcGFnZXMucHVzaCh7XG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBub2RlcyxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IGkgKiBwYWdlSGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBwYWdlSGVpZ2h0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYWdlTm86IGkgKyAxLFxuICAgICAgICAgICAgICAgIG9mZnNldFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6IFwicGFnZVwiXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcGFnZXM7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvdXRpbHMvcmVuZGVyLWJvb2sudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qc1xuICoqIG1vZHVsZSBpZCA9IDEyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDEyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXNJdGVyYWJsZTIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9pcy1pdGVyYWJsZVwiKTtcblxudmFyIF9pc0l0ZXJhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSXRlcmFibGUyKTtcblxudmFyIF9nZXRJdGVyYXRvcjIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9nZXQtaXRlcmF0b3JcIik7XG5cbnZhciBfZ2V0SXRlcmF0b3IzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkge1xuICAgIHZhciBfYXJyID0gW107XG4gICAgdmFyIF9uID0gdHJ1ZTtcbiAgICB2YXIgX2QgPSBmYWxzZTtcbiAgICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2kgPSAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShhcnIpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gdHJ1ZTtcbiAgICAgIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9IGVsc2UgaWYgKCgwLCBfaXNJdGVyYWJsZTMuZGVmYXVsdCkoT2JqZWN0KGFycikpKSB7XG4gICAgICByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICB9XG4gIH07XG59KCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDEyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNvcmUgID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpXG4gICwgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHtzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuICoqIG1vZHVsZSBpZCA9IDEzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSAxMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDEzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4gKiogbW9kdWxlIGlkID0gMTM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xyXG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gMTM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMTM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4gKiogbW9kdWxlIGlkID0gMTQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4gKiogbW9kdWxlIGlkID0gMTQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXHJcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXHJcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxyXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcclxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXHJcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cclxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XHJcblxyXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXHJcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcclxuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xyXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXHJcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxyXG4gICAgLCBndCAgICAgPSAnPidcclxuICAgICwgaWZyYW1lRG9jdW1lbnQ7XHJcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxyXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XHJcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xyXG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XHJcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xyXG4gIGlmcmFtZURvY3VtZW50LndyaXRlKCc8c2NyaXB0PmRvY3VtZW50LkY9T2JqZWN0PC9zY3JpcHQnICsgZ3QpO1xyXG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XHJcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XHJcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xyXG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xyXG4gIHZhciByZXN1bHQ7XHJcbiAgaWYoTyAhPT0gbnVsbCl7XHJcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XHJcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XHJcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcclxuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcclxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xyXG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XHJcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xyXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcclxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcclxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcclxuICBhbk9iamVjdChPKTtcclxuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxyXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxyXG4gICAgLCBpID0gMFxyXG4gICAgLCBQO1xyXG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcclxuICByZXR1cm4gTztcclxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcclxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcclxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcclxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXHJcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcclxuICBPID0gdG9PYmplY3QoTyk7XHJcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XHJcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XHJcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XHJcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcclxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbiAqKiBtb2R1bGUgaWQgPSAxNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxyXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXHJcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxyXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcclxuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcclxuICAgICwgaSAgICAgID0gMFxyXG4gICAgLCByZXN1bHQgPSBbXVxyXG4gICAgLCBrZXk7XHJcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xyXG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcclxuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XHJcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbiAqKiBtb2R1bGUgaWQgPSAxNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4gKiogbW9kdWxlIGlkID0gMTUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4gKiogbW9kdWxlIGlkID0gMTU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldCAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmlzSXRlcmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPID0gT2JqZWN0KGl0KTtcbiAgcmV0dXJuIE9bSVRFUkFUT1JdICE9PSB1bmRlZmluZWRcbiAgICB8fCAnQEBpdGVyYXRvcicgaW4gT1xuICAgIHx8IEl0ZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eShjbGFzc29mKE8pKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDE1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gMTU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImgyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9tb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV0hLi9+L3Jlc29sdmUtdXJsLWxvYWRlciEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwIS4vc3JjL2NsaWVudC9jb250YWluZXJzL2FwcC9hcHAuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDE1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaG9tZS1ibHVlLTNPM2ZRIHtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiYmx1ZVwiOiBcImhvbWUtYmx1ZS0zTzNmUVwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/bW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdIS4vfi9yZXNvbHZlLXVybC1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcCEuL3NyYy9jbGllbnQvY29udGFpbmVycy9ob21lL2hvbWUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDE2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vYXBwLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvYXBwL2FwcC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9ob21lLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvaG9tZS9ob21lLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=