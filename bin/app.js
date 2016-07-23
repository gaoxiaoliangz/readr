require('source-map-support').install()
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDlmODhmNGIzMmQxNmU1MWNkYjMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYWN0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYXBpLWNvbmZpZy9hcGktcm9vdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zaWRlLWVmZmVjdHMvYm9keS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9pY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2xheW91dC9jb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvY2FsbC1hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub3JtYWxpenJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL2hhbmRsZS1yZXNwb25zZS1qc29uLnRzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL2Jvb2stbGlzdC1zZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NjaGVtYXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC91dGlscy9hcGlzLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvcGFyc2UtZm9ybS1kYXRhLnRzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHVtcHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2lucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vdGV4dGFyZWEudHN4Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FjdGlvbnMvYm9vay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FjdGlvbnMvbm90aWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYWN0aW9ucy91c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9icmFuZGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL25vLW1hdGNoLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2FsZXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2FuaW1hdGlvbnMvZmFkZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2J1dHRvbi9idXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvZm9ybS9idXR0b24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvZm9ybS9zZWxlY3RpemUtaW5wdXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvc3dpdGNoZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvdmlldy50cyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNpZGUtZWZmZWN0XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9sYXlvdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9sb2FkaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL25hdi10YWIudHN4Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNzcy1tb2R1bGVzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0NvbG9waG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYm9vay1pbmZvLXBvcHVwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYm9vay1saXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYm9vay1wYWdlLWxpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9ib29rLXBhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9ib29rLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvY2FuZHktYm94LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvdmlld2VyLXByZWZlcmVuY2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL3ZpZXdlci1wcmVmZXJlbmNlL3ZpZXdlci1wcmVmZXJlbmNlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvdmlld2VyLXNjcm9sbGJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL2FwcC9hcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9hcHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL2FyY2hpdmUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9hcmNoaXZlZC1jb2xsZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvYm9vay1pbmZvLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvYm9vay1zaGVsZi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL2NvbGxlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9ob21lL2hvbWUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9ob21lL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9wcm9maWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvcm9vdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL3NldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvc2lnbmluLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvc2lnbnVwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvdmlld2VyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy92aWV3ZXIvdmlld2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL0RpYWxvZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yb3V0ZXMvYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL2NhY2hlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvcmVuZGVyLWJvb2sudHMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9hcHAvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL2hvbWUvaG9tZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9hcHAvYXBwLnNjc3M/NjJmNSIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvaG9tZS9ob21lLnNjc3M/MmU0ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RDQSxtQzs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7O1NBQ2dCO1NBT0E7QUFQVCxVQUFTLFdBQVQsQ0FBcUIsSUFBckIsRUFBMkIsS0FBM0IsRUFBa0M7QUFDckMsWUFBTztBQUNILGVBQU0sY0FBTjtBQUNBLG1CQUZHO0FBR0gscUJBSEc7TUFBUCxDQURxQztFQUFsQztBQU9BLFVBQVMsYUFBVCxDQUF1QixJQUF2QixFQUE2QixJQUE3QixFQUFtQztBQUN0QyxZQUFPO0FBQ0gsZUFBTSxnQkFBTjtBQUNBLG1CQUZHO0FBR0gsbUJBSEc7TUFBUCxDQURzQzs7Ozs7OztBQ1YxQywwQzs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O1NBQ1M7U0FBUTtTQUFPO1NBQWdCLDhCOzs7Ozs7Ozs7OztBQ0p4QyxLQUFNLE9BQU8sT0FBTyxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDLE9BQU8sUUFBUCxDQUFnQixNQUFoQixHQUF5Qix1QkFBekQ7QUFDYixLQUFNLFdBQVc7QUFDYixZQUFVLGNBQVY7QUFDQSxtQkFBYyxpQ0FBZDtFQUZFO21CQUlTLFM7Ozs7Ozs7Ozs7Ozs7O0FDTGY7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBQ007Ozs7Ozs7Ozs7O2tDQUNPO0FBQ0wsb0JBQU8sZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcseUJBQVgsRUFBNUIsQ0FBUCxDQURLOzs7O1lBRFA7OztBQUtOLFVBQVMsa0JBQVQsQ0FBNEIsU0FBNUIsRUFBdUM7QUFDbkMsU0FBSSxrQkFBSixDQURtQztBQUVuQyxlQUFVLE9BQVYsQ0FBa0IsVUFBVSxLQUFWLEVBQWlCO0FBQy9CLHFCQUFZLE1BQU0sU0FBTixDQURtQjtNQUFqQixDQUFsQixDQUZtQztBQUtuQyxZQUFPLFNBQVAsQ0FMbUM7RUFBdkM7QUFPQSxVQUFTLHlCQUFULENBQW1DLFNBQW5DLEVBQThDO0FBQzFDLFNBQUksT0FBTyxTQUFQLEtBQXFCLFdBQXJCLEVBQWtDO0FBQ2xDLGtCQUFTLElBQVQsQ0FBYyxTQUFkLEdBQTBCLFNBQTFCLENBRGtDO01BQXRDLE1BR0s7QUFDRCxrQkFBUyxJQUFULENBQWMsZUFBZCxDQUE4QixPQUE5QixFQURDO01BSEw7RUFESjttQkFRZSwrQkFBZSxrQkFBZixFQUFtQyx5QkFBbkMsRUFBOEQsSUFBOUQsRTs7Ozs7Ozs7Ozs7Ozs7QUN0QmY7Ozs7Ozs7Ozs7OztLQUNNOzs7QUFDRixjQURFLElBQ0YsQ0FBWSxLQUFaLEVBQW1COytCQURqQixNQUNpQjs7dUVBRGpCLGlCQUVRLFFBRFM7TUFBbkI7O2tCQURFOztrQ0FJTztBQUNMLGlCQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsSUFBWCxDQUROO0FBRUwsaUJBQUksU0FBUyxLQUFLLEtBQUwsQ0FBVyxPQUFYLENBRlI7QUFHTCxpQkFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FITjtBQUlMLG9CQUFRLGdCQUFNLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEIsRUFBQywwQkFBd0IsYUFBUSxJQUFoQyxFQUF3QyxTQUFTLE1BQVQsRUFBckUsQ0FBUixDQUpLOzs7O1lBSlA7OzttQkFXUyxLOzs7Ozs7Ozs7Ozs7OztBQ1pmOzs7Ozs7Ozs7Ozs7S0FDTTs7Ozs7Ozs7Ozs7a0NBQ087QUFDTCxpQkFBSSxZQUFZLENBQUMsS0FBSyxLQUFMLENBQVcsT0FBWCxHQUFxQixpQkFBckIsR0FBeUMsV0FBekMsQ0FBRCxJQUEwRCxLQUFLLEtBQUwsQ0FBVyxTQUFYLFNBQTJCLEtBQUssS0FBTCxDQUFXLFNBQVgsR0FBeUIsRUFBcEQsQ0FBMUQsQ0FEWDtBQUVMLG9CQUFRLGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsRUFBQyxXQUFXLFNBQVgsRUFBNUIsRUFBbUQsS0FBSyxLQUFMLENBQVcsUUFBWCxDQUEzRCxDQUZLOzs7O1lBRFA7OzttQkFNUyxVOzs7Ozs7Ozs7OztTQ0NDOztBQVJoQjs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQSxLQUFNLGdCQUFnQjtBQUNsQixlQUFVLE1BQVY7QUFDQSxhQUFRLEtBQVI7QUFDQSxrQkFBYSxhQUFiO0VBSEU7QUFLQyxVQUFTLE9BQVQsQ0FBaUIsT0FBakIsRUFBdUM7U0FBYiwrREFBUyxrQkFBSTs7O0FBRTFDLFNBQU0sY0FBYyxTQUFkLFdBQWMsQ0FBQyxjQUFELEVBQW9COzhCQUNVLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsYUFBbEIsRUFBaUMsY0FBakMsRUFEVjs7YUFDOUIsK0JBRDhCO2FBQ3RCLDJCQURzQjthQUNoQix5Q0FEZ0I7YUFDSCxtQ0FERzs7QUFFcEMsYUFBSSxjQUFjLEVBQWQsQ0FGZ0M7QUFHcEMsYUFBSSxNQUFKLEVBQVk7QUFDUix5QkFBWSxNQUFaLEdBQXFCLE1BQXJCLENBRFE7VUFBWjtBQUdBLGFBQUksV0FBSixFQUFpQjtBQUNiLHlCQUFZLFdBQVosR0FBMEIsV0FBMUIsQ0FEYTtVQUFqQjs7QUFOb0MsYUFVaEMsV0FBVyxNQUFYLEVBQW1CO0FBQ25CLGlCQUFJLG9CQUFKLENBRG1CO0FBRW5CLGlCQUFJLGFBQUosQ0FGbUI7QUFHbkIsaUJBQUksYUFBYSxNQUFiLEVBQXFCO0FBQ3JCLCtCQUFjLGtCQUFkLENBRHFCO0FBRXJCLHdCQUFPLEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBUCxDQUZxQjtjQUF6QixNQUlLLElBQUksYUFBYSxZQUFiLEVBQTJCO0FBQ2hDLCtCQUFjLG1DQUFkLENBRGdDO0FBRWhDLHdCQUFPLDZCQUFtQixJQUFuQixDQUFQLENBRmdDO2NBQS9CLE1BSUE7O0FBRUQsNEJBQVcsWUFBWCxDQUZDO0FBR0QsK0JBQWMsbUNBQWQsQ0FIQztBQUlELHdCQUFPLDZCQUFtQixJQUFuQixDQUFQLENBSkM7QUFLRCx5QkFBUSxJQUFSLENBQWEsaURBQWIsRUFMQztjQUpBO0FBV0wseUJBQVksT0FBWixHQUFzQjtBQUNsQixpQ0FBZ0IsV0FBaEI7QUFDQSxrREFBaUMsTUFBakM7Y0FGSixDQWxCbUI7QUFzQm5CLHlCQUFZLElBQVosR0FBbUIsSUFBbkIsQ0F0Qm1CO1VBQXZCO0FBd0JBLGFBQUksV0FBVyxRQUFYLEVBQXFCO0FBQ3JCLHlCQUFZLE9BQVosR0FBc0I7QUFDbEIsa0RBQWlDLFFBQWpDO2NBREosQ0FEcUI7VUFBekI7QUFLQSxnQkFBTyxXQUFQLENBdkNvQztNQUFwQixDQUZzQjtBQTJDMUMsWUFBTyxNQUFNLE9BQU4sRUFBZSxZQUFZLE1BQVosQ0FBZixFQUNGLElBREUsQ0FDRyxvQkFBWTtBQUNsQixnQkFBTyxTQUFTLElBQVQsR0FBZ0IsSUFBaEIsQ0FBcUI7b0JBQVMsRUFBRSxVQUFGLEVBQVEsa0JBQVI7VUFBVCxDQUE1QixDQURrQjtNQUFaLENBREgsQ0FJRixJQUpFLENBSUcsZ0JBQXdCO2FBQXJCLGlCQUFxQjthQUFmLHlCQUFlOztBQUM5QixhQUFJLFNBQVMsRUFBVCxFQUFhO0FBQ2Isb0JBQU8sa0NBQW1CLElBQW5CLEVBQXlCLE9BQU8sTUFBUCxDQUFoQyxDQURhO1VBQWpCLE1BR0s7QUFDRCxvQkFBTyxRQUFRLE1BQVIsQ0FBZSxJQUFmLENBQVAsQ0FEQztVQUhMO01BRE0sQ0FKVixDQTNDMEM7RUFBdkM7bUJBd0RRLFE7Ozs7OztBQ2hFZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qjs7Ozs7O0FDVkEsdUM7Ozs7Ozs7Ozs7OztBQ0FBOztBQUNBOzs7Ozs7QUFDQSxVQUFTLGtCQUFULENBQTRCLElBQTVCLEVBQWtDLE1BQWxDLEVBQTBDO0FBQ3RDLFlBQU8sZ0JBQU0sWUFBTixDQUFtQixJQUFuQixDQUFQLENBRHNDO0FBRXRDLFNBQUksU0FBUyxJQUFULENBRmtDO0FBR3RDLFNBQUksT0FBTyxNQUFQLEtBQWtCLFdBQWxCLEVBQStCO0FBQy9CLGtCQUFTLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsMEJBQVUsSUFBVixFQUFnQixNQUFoQixDQUFsQixDQUFULENBRCtCO01BQW5DO0FBR0EsWUFBTyxNQUFQLENBTnNDO0VBQTFDO21CQVFlLG1COzs7Ozs7QUNWZiw4QkFBNkI7QUFDN0Isc0NBQXFDLGdDOzs7Ozs7QUNEckM7QUFDQTtBQUNBO0FBQ0Esd0NBQXVDLGdDOzs7Ozs7Ozs7Ozs7OztBQ0h2Qzs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7S0FDTTs7Ozs7Ozs7Ozs7a0NBQ087QUFDTCxpQkFBSSxRQUFRLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FEUDtBQUVMLGlCQUFJLFdBQVcsS0FBSyxLQUFMLENBQVcsUUFBWCxHQUFzQixLQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQXNCLElBQTVDLENBRlY7QUFHTCxvQkFBUSxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxtQkFBWCxFQUE1QixFQUE2RCxLQUFLLEtBQUwsQ0FBVyxLQUFYLElBQXFCLGdCQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsRUFBQyxXQUFXLGVBQVgsRUFBM0IsRUFBd0QsS0FBeEQsQ0FBckIsRUFBc0YsV0FBWSxnQkFBTSxhQUFOLG9CQUEwQixFQUFDLFdBQVcsTUFBWCxFQUFtQixJQUFJLFFBQUosRUFBOUMsRUFBNkQsTUFBN0QsQ0FBWixHQUFvRixJQUFwRixFQUEwRixnQkFBTSxhQUFOLHFCQUE4QixFQUFDLGNBQWMsS0FBSyxLQUFMLENBQVcsWUFBWCxFQUE3QyxDQUE3TyxDQUFSLENBSEs7Ozs7WUFEUDs7O21CQU9TLGdCOzs7Ozs7Ozs7Ozs7O0FDVmY7O0FBQ0EsS0FBTSxPQUFPLHNCQUFXLE9BQVgsRUFBb0I7QUFDN0Isa0JBQWEsSUFBYjtFQURTLENBQVA7QUFHTixLQUFNLGFBQWEsc0JBQVcsaUJBQVgsRUFBOEI7QUFDN0Msa0JBQWEsSUFBYjtFQURlLENBQWI7QUFHTixLQUFNLFVBQVUsc0JBQVcsVUFBWCxFQUF1QjtBQUNuQyxrQkFBYSxJQUFiO0VBRFksQ0FBVjtBQUdOLEtBQU0sT0FBTyxzQkFBVyxPQUFYLEVBQW9CO0FBQzdCLGtCQUFhLElBQWI7RUFEUyxDQUFQO0FBR04sS0FBTSxhQUFhLHNCQUFXLGFBQVgsRUFBMEI7QUFDekMsa0JBQWEsSUFBYjtFQURlLENBQWI7QUFHTixLQUFNLGVBQWUsc0JBQVcsT0FBWCxFQUFvQjtBQUNyQyxrQkFBYSxRQUFiO0VBRGlCLENBQWY7QUFHTixLQUFNLGVBQWUsc0JBQVcsT0FBWCxFQUFvQjtBQUNyQyxrQkFBYSxRQUFiO0VBRGlCLENBQWY7QUFHQyxLQUFNLDRCQUFVO0FBQ25CLFdBQU0sSUFBTjtBQUNBLG9CQUFlLFlBQWY7QUFDQSxpQkFBWSx3QkFBUSxJQUFSLENBQVo7QUFDQSxpQ0FBNEIsRUFBRSxPQUFPLHdCQUFRLFVBQVIsQ0FBUCxFQUE5QjtBQUNBLGlCQUFZLHdCQUFRLElBQVIsQ0FBWjtBQUNBLHlCQUFvQix3QkFBUSxZQUFSLENBQXBCO0FBQ0EsaUJBQVksVUFBWjtBQUNBLHVCQUFrQix3QkFBUSxVQUFSLENBQWxCO0FBQ0EsY0FBUyxPQUFUO0VBVFMsQzs7Ozs7Ozs7Ozs7U0NwQkc7U0FNQTtTQU1BO1NBR0E7U0FHQTtTQU1BO1NBR0E7O0FBN0JoQjs7OztBQUNBOzs7Ozs7QUFDTyxVQUFTLGFBQVQsQ0FBdUIsSUFBdkIsRUFBNkI7QUFDaEMsWUFBTyx1QkFBVyxtQkFBUyxLQUFULGdCQUFYLEVBQXdDLEVBQUUsUUFBUSxNQUFSLEVBQWdCLE1BQU0sSUFBTixFQUExRCxDQUFQLENBRGdDO0VBQTdCOzs7O0FBTUEsVUFBUyxPQUFULENBQWlCLElBQWpCLEVBQXVCO0FBQzFCLFlBQU8sdUJBQVcsbUJBQVMsS0FBVCxVQUFYLEVBQWtDLEVBQUUsUUFBUSxNQUFSLEVBQWdCLE1BQU0sSUFBTixFQUFwRCxDQUFQLENBRDBCO0VBQXZCOzs7O0FBTUEsVUFBUyxTQUFULENBQW1CLElBQW5CLEVBQXlCO0FBQzVCLFlBQU8sdUJBQVcsbUJBQVMsS0FBVCxZQUFYLEVBQW9DLEVBQUUsUUFBUSxNQUFSLEVBQWdCLE1BQU0sSUFBTixFQUF0RCxDQUFQLENBRDRCO0VBQXpCO0FBR0EsVUFBUyxhQUFULENBQXVCLEtBQXZCLEVBQThCO0FBQ2pDLFlBQU8sdUJBQVcsbUJBQVMsS0FBVCxrQkFBMkIsS0FBdEMsQ0FBUCxDQURpQztFQUE5QjtBQUdBLFVBQVMsV0FBVCxDQUFxQixLQUFyQixFQUE0QjtBQUMvQixZQUFPLHVCQUFXLG1CQUFTLEtBQVQsZ0JBQXlCLEtBQXBDLENBQVAsQ0FEK0I7RUFBNUI7Ozs7QUFNQSxVQUFTLFdBQVQsQ0FBcUIsTUFBckIsRUFBNkIsSUFBN0IsRUFBbUM7QUFDdEMsNEJBQVcsbUJBQVMsS0FBVCxjQUF1QixvQkFBbEMsRUFBcUQsRUFBRSxRQUFRLE1BQVIsRUFBZ0IsVUFBbEIsRUFBckQsRUFEc0M7RUFBbkM7QUFHQSxVQUFTLFVBQVQsQ0FBb0IsRUFBcEIsRUFBd0I7QUFDM0IsWUFBTyx1QkFBVyxtQkFBUyxLQUFULGNBQXVCLEVBQWxDLEVBQXdDO0FBQzNDLGlCQUFRLFFBQVI7TUFERyxDQUFQLENBRDJCO0VBQXhCO21CQUtRO0FBQ1gsaUNBRFc7QUFFWCxxQkFGVztBQUdYLHlCQUhXO0FBSVgsNkJBSlc7QUFLWCxpQ0FMVztBQU1YLDZCQU5XO0FBT1gsMkJBUFc7Ozs7Ozs7Ozs7Ozs7OzttQkNqQ1M7O0FBRHhCOzs7Ozs7QUFDZSxVQUFTLGtCQUFULENBQTRCLFdBQTVCLEVBQXlDO0FBQ3BELFNBQUksU0FBUyxpQkFBRSxTQUFGLENBQVksV0FBWixDQUFULENBRGdEO0FBRXBELFNBQUksYUFBYSxFQUFiLENBRmdEO0FBR3BELFVBQUssSUFBSSxJQUFKLElBQVksTUFBakIsRUFBeUI7QUFDckIsYUFBSSxRQUFPLE9BQU8sSUFBUCxFQUFQLEtBQXdCLFFBQXhCLEVBQWtDO0FBQ2xDLG9CQUFPLElBQVAsSUFBZSxPQUFPLElBQVAsRUFBYSxRQUFiLEVBQWYsQ0FEa0M7VUFBdEM7QUFHQSwyQkFBZ0IsYUFBYSxhQUFRLE9BQU8sSUFBUCxPQUFyQyxDQUpxQjtNQUF6QjtBQU1BLFlBQU8sV0FBVyxNQUFYLENBQWtCLENBQWxCLEVBQXFCLFdBQVcsTUFBWCxHQUFvQixDQUFwQixDQUE1QixDQVRvRDs7Ozs7OztBQ0R4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0EsRzs7Ozs7O0FDUEEscUI7Ozs7OztBQ0FBLG1DOzs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0tBQ007OztBQUNGLGNBREUsS0FDRixDQUFZLEtBQVosRUFBbUI7K0JBRGpCLE9BQ2lCOzt1RUFEakIsa0JBRVEsUUFEUztNQUFuQjs7a0JBREU7O2tDQUlPOzs7QUFDTCxpQkFBSSxZQUFZLEtBQUssS0FBTCxDQUFXLFNBQVgsbUJBQXFDLEtBQUssS0FBTCxDQUFXLFNBQVgsR0FBeUIsWUFBOUQsQ0FEWDtBQUVMLGlCQUFJLFFBQVEsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLLEtBQUwsQ0FBMUIsQ0FGQztBQUdMLG9CQUFPLE1BQU0sU0FBTixDQUhGO0FBSUwsb0JBQVEsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcsU0FBWCxFQUE1QixFQUFtRCxnQkFBTSxhQUFOLENBQW9CLE9BQXBCLEVBQTZCLEVBQUMsYUFBYSxLQUFLLEtBQUwsQ0FBVyxXQUFYLEVBQXdCLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFrQixVQUFVLHFCQUFLO0FBQ2xLLDRCQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLENBQXBCLEVBRGtLO2tCQUFMLEVBRTlKLE1BQU0sS0FBSyxLQUFMLENBQVcsSUFBWCxHQUFrQixLQUFLLEtBQUwsQ0FBVyxJQUFYLEdBQWtCLE1BQXBDLEVBQTRDLE1BQU0sS0FBSyxLQUFMLENBQVcsSUFBWCxHQUFrQixLQUFLLEtBQUwsQ0FBVyxJQUFYLEdBQWtCLElBQXBDLEVBRkEsQ0FBbkQsQ0FBUixDQUpLOzs7O1lBSlA7OzttQkFhUyxNOzs7Ozs7Ozs7Ozs7OztBQ2RmOzs7Ozs7Ozs7Ozs7S0FDTTs7O0FBQ0YsY0FERSxRQUNGLENBQVksS0FBWixFQUFtQjsrQkFEakIsVUFDaUI7O3VFQURqQixxQkFFUSxRQURTO01BQW5COztrQkFERTs7a0NBSU87OztBQUNMLGlCQUFJLFlBQVksS0FBSyxLQUFMLENBQVcsU0FBWCxzQkFBd0MsS0FBSyxLQUFMLENBQVcsU0FBWCxHQUF5QixlQUFqRSxDQURYO0FBRUwsaUJBQUksUUFBUSxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUssS0FBTCxDQUExQixDQUZDO0FBR0wsb0JBQU8sTUFBTSxTQUFOLENBSEY7QUFJTCxvQkFBUSxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxTQUFYLEVBQTVCLEVBQW1ELGdCQUFNLGFBQU4sQ0FBb0IsVUFBcEIsRUFBZ0MsRUFBQyxhQUFhLEtBQUssS0FBTCxDQUFXLFdBQVgsRUFBd0IsT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLEVBQWtCLFVBQVUscUJBQUs7QUFDckssNEJBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsQ0FBcEIsRUFEcUs7a0JBQUwsRUFFakssTUFBTSxLQUFLLEtBQUwsQ0FBVyxJQUFYLEdBQWtCLEtBQUssS0FBTCxDQUFXLElBQVgsR0FBa0IsTUFBcEMsRUFBNEMsTUFBTSxLQUFLLEtBQUwsQ0FBVyxJQUFYLEdBQWtCLEtBQUssS0FBTCxDQUFXLElBQVgsR0FBa0IsSUFBcEMsRUFGQSxDQUFuRCxDQUFSLENBSks7Ozs7WUFKUDs7O21CQWFTLFM7Ozs7OztBQ2RmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSkE7QUFDQTtBQUNBLGtDQUFpQyxRQUFRLGdCQUFnQixVQUFVLEdBQUc7QUFDdEUsRUFBQyxFOzs7Ozs7QUNIRCx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBLEc7Ozs7OztBQ0hBLCtEOzs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7U0NDZ0I7U0FVQTtTQVdBO1NBY0E7U0FVQTs7QUE5Q2hCOztBQUNPLFVBQVMsaUJBQVQsQ0FBMkIsTUFBM0IsRUFBbUM7QUFDdEMsWUFBTztBQUNILHVCQURHO0FBRUgsbUJBQVU7QUFDTixvQkFBTyxDQUFDLHVCQUFELEVBQTBCLHVCQUExQixFQUFtRCx1QkFBbkQsQ0FBUDtBQUNBLGtDQUFtQixvQkFBbkI7QUFDQSxxQkFBUSxpQkFBUSxhQUFSO1VBSFo7TUFGSixDQURzQztFQUFuQztBQVVBLFVBQVMsVUFBVCxHQUF5QztTQUFyQixpRUFBVyx3QkFBVTs7QUFDNUMsWUFBTzs7QUFFSCwyQkFGRztBQUdILG1CQUFVO0FBQ04sb0JBQU8sQ0FBQyxlQUFELEVBQWtCLGVBQWxCLEVBQW1DLGVBQW5DLENBQVA7QUFDQSw4Q0FGTTtBQUdOLHFCQUFRLGlCQUFRLFVBQVI7VUFIWjtNQUhKLENBRDRDO0VBQXpDO0FBV0EsVUFBUyxTQUFULENBQW1CLE1BQW5CLEVBQTJCLE1BQTNCLEVBQW1DO0FBQ3RDLFNBQUksc0JBQW9CLE1BQXBCLENBRGtDO0FBRXRDLFNBQUksTUFBSixFQUFZO0FBQ1Isa0NBQXVCLE9BQU8sSUFBUCxDQUFZLEdBQVosQ0FBdkIsQ0FEUTtNQUFaO0FBR0EsWUFBTztBQUNILHVCQURHO0FBRUgsbUJBQVU7QUFDTixvQkFBTyxDQUFDLGNBQUQsRUFBaUIsY0FBakIsRUFBaUMsY0FBakMsQ0FBUDtBQUNBLCtCQUZNO0FBR04scUJBQVEsaUJBQVEsSUFBUjtVQUhaO01BRkosQ0FMc0M7RUFBbkM7QUFjQSxVQUFTLGdCQUFULEdBQStDO1NBQXJCLGlFQUFXLHdCQUFVOztBQUNsRCxZQUFPO0FBQ0gsMkJBREc7QUFFSCxtQkFBVTtBQUNOLG9CQUFPLENBQUMscUJBQUQsRUFBd0IscUJBQXhCLEVBQStDLHFCQUEvQyxDQUFQO0FBQ0Esb0NBRk07QUFHTixxQkFBUSxpQkFBUSxnQkFBUjtVQUhaO01BRkosQ0FEa0Q7RUFBL0M7QUFVQSxVQUFTLGVBQVQsQ0FBeUIsWUFBekIsRUFBdUM7QUFDMUMsWUFBTztBQUNILG1DQURHO0FBRUgsbUJBQVU7QUFDTixvQkFBTyxDQUFDLG9CQUFELEVBQXVCLG9CQUF2QixFQUE2QyxvQkFBN0MsQ0FBUDtBQUNBLHdDQUF5QixZQUF6QjtBQUNBLHFCQUFRLGlCQUFRLFVBQVI7VUFIWjtNQUZKLENBRDBDO0VBQXZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NDOUNTO1NBVUE7U0FTQTtBQW5CVCxVQUFTLGdCQUFULENBQTBCLE9BQTFCLEVBQWtFO1NBQS9CLGdFQUFVLHlCQUFxQjtTQUFWLDBEQUFJLG9CQUFNOztBQUNyRSxZQUFPLFVBQUMsUUFBRCxFQUFXLFFBQVgsRUFBd0I7QUFDM0IsYUFBTSxLQUFLLEtBQUssTUFBTCxHQUFjLE9BQWQsQ0FBc0IsQ0FBdEIsRUFBeUIsTUFBekIsQ0FBZ0MsQ0FBaEMsQ0FBTCxDQURxQjtBQUUzQixrQkFBUyxpQkFBaUIsRUFBakIsRUFBcUIsT0FBckIsRUFBOEIsT0FBOUIsQ0FBVCxFQUYyQjtBQUczQixvQkFBVyxZQUFNO0FBQ2Isc0JBQVMsaUJBQWlCLEVBQWpCLENBQVQsRUFEYTtVQUFOLEVBRVIsQ0FGSCxFQUgyQjtNQUF4QixDQUQ4RDtFQUFsRTtBQVNBLEtBQU0sZ0RBQW9CLG1CQUFwQjtBQUNOLFVBQVMsZ0JBQVQsQ0FBMEIsRUFBMUIsRUFBOEIsT0FBOUIsRUFBNEQ7U0FBckIsZ0VBQVUseUJBQVc7O0FBQy9ELFlBQU87QUFDSCxlQUFNLGlCQUFOO0FBQ0EseUJBRkc7QUFHSCx5QkFIRztBQUlILGVBSkc7TUFBUCxDQUQrRDtFQUE1RDtBQVFBLEtBQU0sZ0RBQW9CLG1CQUFwQjtBQUNOLFVBQVMsZ0JBQVQsQ0FBMEIsRUFBMUIsRUFBOEI7QUFDakMsWUFBTztBQUNILGVBQU0saUJBQU47QUFDQSxlQUZHO01BQVAsQ0FEaUM7Ozs7Ozs7Ozs7OztTQ2xCckI7U0FRQTtTQVNBO1NBbUJBOztBQXJDaEI7O0FBQ08sVUFBUyxRQUFULEdBQW9CO0FBQ3ZCLFlBQU87QUFDSCxtQkFBVTtBQUNOLG9CQUFPLENBQUMsbUJBQUQsRUFBc0IsbUJBQXRCLEVBQTJDLG1CQUEzQyxDQUFQO0FBQ0EsdUJBQVUsTUFBVjtVQUZKO01BREosQ0FEdUI7RUFBcEI7QUFRQSxVQUFTLFlBQVQsQ0FBc0IsRUFBdEIsRUFBMEI7QUFDN0IsWUFBTztBQUNILG1CQUFVO0FBQ04sb0JBQU8sQ0FBQyxpQkFBRCxFQUFvQixpQkFBcEIsRUFBdUMsaUJBQXZDLENBQVA7QUFDQSxrQ0FBbUIsZUFBbkI7QUFDQSxxQkFBUSxlQUFRLE9BQVI7VUFIWjtNQURKLENBRDZCO0VBQTFCO0FBU0EsVUFBUyxhQUFULEdBQXlCO0FBQzVCLFlBQU87QUFDSCxtQkFBVTtBQUNOLG9CQUFPLENBQUMsbUJBQUQsRUFBc0IsbUJBQXRCLEVBQTJDLG1CQUEzQyxDQUFQO0FBQ0EsdUJBQVUsT0FBVjtBQUNBLHFCQUFRLGVBQVEsVUFBUjtVQUhaO01BREosQ0FENEI7RUFBekI7Ozs7Ozs7Ozs7O0FBbUJBLFVBQVMsVUFBVCxHQUFzQjtBQUN6QixZQUFPO0FBQ0gsa0JBQVMsV0FBVDtBQUNBLG1CQUFVO0FBQ04sb0JBQU8sQ0FBQyxlQUFELEVBQWtCLGVBQWxCLEVBQW1DLGVBQW5DLENBQVA7QUFDQSx5Q0FGTTtVQUFWO01BRkosQ0FEeUI7Ozs7Ozs7Ozs7Ozs7OztBQ3JDN0I7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztLQUNNOzs7QUFDRixjQURFLFFBQ0YsQ0FBWSxLQUFaLEVBQW1COytCQURqQixVQUNpQjs7NEVBRGpCLHFCQUVRLFFBRFM7O0FBRWYsZUFBSyxLQUFMLEdBQWE7QUFDVCxvQ0FBdUIsS0FBdkI7VUFESixDQUZlOztNQUFuQjs7a0JBREU7OzhDQU9tQjtBQUNqQixrQkFBSyxRQUFMLENBQWM7QUFDVix3Q0FBdUIsQ0FBQyxLQUFLLEtBQUwsQ0FBVyxxQkFBWDtjQUQ1QixFQURpQjs7OztrQ0FLWjtBQUNMLGlCQUFJLFdBQVcsS0FBSyxLQUFMLENBQVcsUUFBWCxDQURWO0FBRUwsaUJBQUksVUFBVSxLQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLEtBQUssS0FBTCxDQUFXLE9BQVgsR0FBcUIsS0FBMUMsQ0FGVDtBQUdMLG9CQUFRLGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsRUFBQywwQkFBdUIsS0FBSyxLQUFMLENBQVcsU0FBWCxHQUF1QixLQUFLLEtBQUwsQ0FBVyxTQUFYLEdBQXVCLEVBQTlDLENBQXZCLEVBQTVCLEVBQXdHLGdCQUFNLGFBQU4sb0JBQStCLEVBQUMsV0FBVyxVQUFYLEVBQWhDLEVBQXdELGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsSUFBM0IsRUFBaUMsZ0JBQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixFQUFDLFdBQVcsV0FBWCxFQUEzQixFQUFvRCxnQkFBTSxhQUFOLG9CQUEwQixFQUFDLElBQUksR0FBSixFQUEzQixFQUFxQyxPQUFyQyxDQUFwRCxDQUFqQyxFQUFxSSxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxVQUFYLEVBQTVCLEVBQW9ELGdCQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsRUFBQyxXQUFXLFdBQVgsRUFBM0IsRUFBb0QsZ0JBQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUExQixFQUFnQyxnQkFBTSxhQUFOLG9CQUEwQixFQUFDLElBQUksU0FBSixFQUEzQixFQUEyQyxJQUEzQyxDQUFoQyxDQUFwRCxFQUF1SSxnQkFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDLGdCQUFNLGFBQU4sb0JBQTBCLEVBQUMsSUFBSSxjQUFKLEVBQTNCLEVBQWdELElBQWhELENBQWhDLENBQXZJLENBQXBELENBQXJJLEVBQTBaLFdBQVksZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLGNBQWMsS0FBSyxrQkFBTCxDQUF3QixJQUF4QixDQUE2QixJQUE3QixDQUFkLEVBQWtELGNBQWMsS0FBSyxrQkFBTCxDQUF3QixJQUF4QixDQUE2QixJQUE3QixDQUFkLEVBQWtELFdBQVcsV0FBWCxFQUFoSSxFQUF5SixnQkFBTSxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLEVBQUMsV0FBVyxnQkFBWCxFQUE3QixFQUEyRCxNQUEzRCxDQUF6SixFQUE2TixnQkFBTSxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLEVBQUMsV0FBVyxVQUFYLEVBQTdCLEVBQXFELFFBQXJELEVBQStELFVBQVcsZ0JBQU0sYUFBTixDQUFvQixNQUFwQixFQUE0QixFQUFDLFdBQVcsWUFBWCxFQUE3QixFQUF1RCxPQUF2RCxDQUFYLEdBQThFLElBQTlFLENBQTVSLEVBQWlYLEtBQUssS0FBTCxDQUFXLHFCQUFYLEdBQW9DLGdCQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsRUFBQyxTQUFTLEtBQUssa0JBQUwsQ0FBd0IsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBVCxFQUE2QyxXQUFXLGVBQVgsRUFBeEUsRUFBcUcsWUFBWSxJQUFaLEdBQW9CLGdCQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBMUIsRUFBZ0MsZ0JBQU0sYUFBTixDQUFvQixHQUFwQixFQUF5QixFQUFDLE1BQU0sVUFBTixFQUExQixFQUE2QyxLQUE3QyxDQUFoQyxDQUFwQixHQUE0RyxJQUE1RyxFQUFrSCxnQkFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDLGdCQUFNLGFBQU4sb0JBQTBCLEVBQUMsWUFBRCxFQUExQixFQUEwQyxJQUExQyxDQUFoQyxDQUF2TixFQUF5UyxnQkFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDLGdCQUFNLGFBQU4sb0JBQTBCLEVBQUMsY0FBRCxFQUExQixFQUE0QyxNQUE1QyxDQUFoQyxDQUF6UyxFQUErWCxnQkFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDLGdCQUFNLGFBQU4sb0JBQTBCLEVBQUMsZUFBRCxFQUExQixFQUE2QyxJQUE3QyxDQUFoQyxDQUEvWCxFQUFvZCxnQkFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDLGdCQUFNLGFBQU4sQ0FBb0IsR0FBcEIsRUFBeUIsRUFBQyxNQUFNLFNBQU4sRUFBMUIsRUFBNEMsSUFBNUMsQ0FBaEMsQ0FBcGQsQ0FBcEMsR0FBK2tCLElBQS9rQixDQUE3WCxHQUFzOUIsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcsV0FBWCxFQUE1QixFQUFxRCxnQkFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLEVBQUMsV0FBVyxXQUFYLEVBQTNCLEVBQW9ELGdCQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBMUIsRUFBZ0MsZ0JBQU0sYUFBTixvQkFBMEIsRUFBQyxJQUFJLFNBQUosRUFBM0IsRUFBMkMsSUFBM0MsQ0FBaEMsQ0FBcEQsRUFBdUksZ0JBQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUExQixFQUFnQyxnQkFBTSxhQUFOLG9CQUEwQixFQUFDLElBQUksU0FBSixFQUEzQixFQUEyQyxJQUEzQyxDQUFoQyxDQUF2SSxDQUFyRCxDQUF0OUIsQ0FBbGQsQ0FBeEcsQ0FBUixDQUhLOzs7O1lBWlA7OzttQkFrQlMsUzs7Ozs7Ozs7Ozs7Ozs7QUNyQmY7Ozs7Ozs7Ozs7OztLQUNNOzs7Ozs7Ozs7OztrQ0FDTztBQUNMLG9CQUFRLGdCQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBMUIsRUFBZ0MsS0FBaEMsQ0FBUixDQURLOzs7O1lBRFA7OzttQkFLUyxROzs7Ozs7Ozs7Ozs7OztBQ05mOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUNNOzs7Ozs7Ozs7OztrQ0FDTztBQUNMLGlCQUFNLE9BQU8sS0FBSyxLQUFMLENBQVcsSUFBWCxHQUFrQixLQUFLLEtBQUwsQ0FBVyxJQUFYLEdBQWtCLFNBQXBDLENBRFI7QUFFTCxvQkFBUSxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLElBQTNCLEVBQWlDLEtBQUssS0FBTCxDQUFXLE9BQVgsSUFBdUIsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcsaUNBQThCLGFBQTlCLENBQXdDLElBQXhDLEVBQVgsRUFBNUIsRUFBd0YsZ0JBQU0sYUFBTixpQkFBMEIsRUFBQyxTQUFTLEtBQUssS0FBTCxDQUFXLGNBQVgsRUFBMkIsTUFBTSxPQUFOLEVBQS9ELENBQXhGLEVBQXdLLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBL0wsQ0FBekMsQ0FGSzs7OztZQURQOzs7bUJBTVMsYTs7Ozs7Ozs7Ozs7Ozs7QUNSZjs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FDTTs7O0FBQ0YsY0FERSxJQUNGLENBQVksS0FBWixFQUFtQjsrQkFEakIsTUFDaUI7O3VFQURqQixpQkFFUSxRQURTO01BQW5COztrQkFERTs7a0NBSU87O0FBRUwsb0JBQVEsZ0JBQU0sYUFBTiwwQ0FBNkMsRUFBQyxXQUFXLEtBQVgsRUFBa0IsZ0JBQWdCLE1BQWhCLEVBQXdCLHdCQUF3QixHQUF4QixFQUE2Qix3QkFBd0IsR0FBeEIsRUFBckgsRUFBbUosS0FBSyxLQUFMLENBQVcsUUFBWCxDQUEzSixDQUZLOzs7O1lBSlA7OzttQkFTUyxLOzs7Ozs7Ozs7Ozs7OztBQ1hmOzs7O0FBQ0E7Ozs7Ozs7Ozs7S0FDTTs7O0FBQ0YsY0FERSxNQUNGLENBQVksS0FBWixFQUFtQjsrQkFEakIsUUFDaUI7O3VFQURqQixtQkFFUSxRQURTO01BQW5COztrQkFERTs7a0NBSU87OztBQUNMLGlCQUFJLFlBQVksS0FBSyxLQUFMLENBQVcsU0FBWCxZQUE4QixLQUFLLEtBQUwsQ0FBVyxTQUFYLEdBQXlCLEtBQXZELENBRFg7QUFFTCxpQkFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLElBQVgsR0FBa0IsS0FBSyxLQUFMLENBQVcsSUFBWCxHQUFrQixRQUFwQyxDQUZOO0FBR0wsaUJBQUksVUFBVSxLQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLEtBQUssS0FBTCxDQUFXLE9BQVgsR0FBcUIsS0FBMUMsQ0FIVDtBQUlMLGlCQUFJLFFBQVEsS0FBSyxLQUFMLENBQVcsS0FBWCxHQUFtQixLQUFLLEtBQUwsQ0FBVyxLQUFYLEdBQW1CLElBQXRDLENBSlA7QUFLTCxpQkFBSSxnQkFBSixDQUxLO0FBTUwsaUJBQUksU0FBUyxPQUFULEVBQWtCO0FBQ2xCLDhCQUFhLFlBQWIsQ0FEa0I7Y0FBdEIsTUFHSyxJQUFJLFNBQVMsT0FBVCxFQUFrQjtBQUN2Qiw4QkFBYSxZQUFiLENBRHVCO2NBQXRCLE1BR0EsSUFBSSxTQUFTLFFBQVQsRUFBbUI7QUFDeEIsOEJBQWEsYUFBYixDQUR3QjtjQUF2QixNQUdBO0FBQ0QseUJBQVEsS0FBUixDQUFjLGlCQUFkLEVBREM7Y0FIQTtBQU1MLGlCQUFJLEtBQUosRUFBVztBQUNQLHdDQUFxQixLQUFyQixDQURPO2NBQVg7QUFHQSxpQkFBSSxPQUFKLEVBQWE7QUFDVCw2QkFBZSx3QkFBZixDQURTO2NBQWI7QUFHQSxpQkFBSSxLQUFLLEtBQUwsQ0FBVyxFQUFYLEVBQWU7QUFDZiwyQkFBVSxvQkFBSztBQUNYLHVCQUFFLGNBQUYsR0FEVztBQUVYLGlEQUFlLElBQWYsQ0FBb0IsT0FBSyxLQUFMLENBQVcsRUFBWCxDQUFwQixDQUZXO2tCQUFMLENBREs7Y0FBbkIsTUFNSztBQUNELDJCQUFVLG9CQUFLO0FBQ1gsdUJBQUUsY0FBRixHQURXO0FBRVgseUJBQUksT0FBSyxLQUFMLENBQVcsT0FBWCxFQUFvQjtBQUNwQixnQ0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixDQUFuQixFQURvQjtzQkFBeEI7a0JBRk0sQ0FEVDtjQU5MO0FBY0EsaUJBQUksUUFBUSxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUssS0FBTCxFQUFZLEVBQUUsb0JBQUYsRUFBOUIsRUFBNkMsRUFBRSxnQkFBRixFQUE3QyxDQUFSLENBdENDO0FBdUNMLG9CQUFPLE1BQU0sRUFBTixDQXZDRjtBQXdDTCxvQkFBTyxNQUFNLEtBQU4sQ0F4Q0Y7QUF5Q0wsb0JBQU8sTUFBTSxJQUFOLENBekNGO0FBMENMLG9CQUFPLE1BQU0sT0FBTixDQTFDRjtBQTJDTCxvQkFBUSxnQkFBTSxhQUFOLENBQW9CLFFBQXBCLEVBQThCLEtBQTlCLEVBQXFDLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBN0MsQ0EzQ0s7Ozs7WUFKUDs7O21CQWtEUyxPOzs7Ozs7Ozs7Ozs7QUNwRGY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBQ007OztBQUNGLGNBREUsY0FDRixDQUFZLEtBQVosRUFBbUI7K0JBRGpCLGdCQUNpQjs7NEVBRGpCLDJCQUVRLFFBRFM7O0FBRWYsZUFBSyxLQUFMLEdBQWE7QUFDVCwwQkFBYSxLQUFiO0FBQ0Esb0JBQU8sS0FBUDtBQUNBLG9CQUFPLEVBQVA7QUFDQSxrQ0FBcUIsQ0FBckI7VUFKSixDQUZlO0FBUWYsZUFBSyxXQUFMLEdBQW1CLE1BQUssV0FBTCxDQUFpQixJQUFqQixPQUFuQixDQVJlO0FBU2YsZUFBSyxVQUFMLEdBQWtCLE1BQUssVUFBTCxDQUFnQixJQUFoQixPQUFsQixDQVRlO0FBVWYsZUFBSyxXQUFMLEdBQW1CLE1BQUssV0FBTCxDQUFpQixJQUFqQixPQUFuQixDQVZlOztNQUFuQjs7a0JBREU7O2tDQWFPLFVBQVU7QUFDZixrQkFBSyxLQUFMLENBQVcsY0FBWCxDQUEwQixLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLE1BQWxCLENBQXlCLFFBQXpCLENBQTFCLEVBRGU7QUFFZixpQkFBSSxLQUFLLEtBQUwsQ0FBVyxlQUFYLEVBQTRCO0FBQzVCLHNCQUFLLEtBQUwsQ0FBVyxlQUFYLENBQTJCLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsR0FBbkIsQ0FBdUI7NEJBQVcsT0FBTyxLQUFQLEtBQWlCLFNBQVMsS0FBVCxHQUN4RSxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLE1BQWxCLEVBQTBCLEVBQUUsVUFBVSxJQUFWLEVBQTVCLENBRHVELEdBRXZELE1BRnVEO2tCQUFYLENBQWxELEVBRDRCO2NBQWhDO0FBS0Esa0JBQUssZUFBTCxHQVBlO0FBUWYsaUJBQUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxXQUFYLEtBQTJCLFdBQWxDLElBQWlELEtBQUssS0FBTCxDQUFXLFdBQVgsS0FBMkIsS0FBM0IsRUFBa0M7QUFDbkYsc0JBQUssVUFBTCxHQURtRjtjQUF2RjtBQUdBLGtCQUFLLFdBQUwsR0FYZTs7OztxQ0FhUCxPQUFPO0FBQ2YsaUJBQUksWUFBWSxFQUFaLENBRFc7QUFFZixpQkFBSSxxQkFBSixDQUZlO0FBR2YsaUJBQUksVUFBVSxDQUFDLENBQUQsRUFBSTtBQUNkLDZCQUFZLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsS0FBbEIsQ0FBd0IsQ0FBeEIsRUFBMkIsS0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixNQUFsQixHQUEyQixDQUEzQixDQUF2QyxDQURjO0FBRWQsZ0NBQWUsS0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLE1BQWxCLEdBQTJCLENBQTNCLENBQWxCLENBQWdELEtBQWhELENBRkQ7Y0FBbEIsTUFJSztBQUNELDZCQUFZLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FDUCxNQURPLENBQ0EsVUFBQyxDQUFELEVBQUksQ0FBSixFQUFVO0FBQ2xCLG9DQUFlLEVBQUUsS0FBRixDQURHO0FBRWxCLDRCQUFPLE1BQU0sS0FBTixDQUZXO2tCQUFWLENBRFosQ0FEQztjQUpMO0FBV0EsaUJBQUksS0FBSyxLQUFMLENBQVcsZUFBWCxFQUE0QjtBQUM1QixzQkFBSyxLQUFMLENBQVcsZUFBWCxDQUEyQixLQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLEdBQW5CLENBQXVCOzRCQUFXLE9BQU8sS0FBUCxLQUFpQixZQUFqQixHQUN2RCxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLE1BQWxCLEVBQTBCLEVBQUUsVUFBVSxLQUFWLEVBQTVCLENBRHVELEdBRXZELE1BRnVEO2tCQUFYLENBQWxELEVBRDRCO2NBQWhDO0FBS0Esa0JBQUssS0FBTCxDQUFXLGNBQVgsQ0FBMEIsU0FBMUIsRUFuQmU7Ozs7MkNBcUJEO0FBQ2Qsa0JBQUssS0FBTCxDQUFXLGFBQVgsQ0FBeUIsRUFBekIsRUFEYzs7Ozt3Q0FHSCxHQUFHO0FBQ2QsaUJBQUksRUFBRSxPQUFGLEtBQWMsQ0FBZCxJQUFtQixDQUFDLEtBQUssS0FBTCxDQUFXLEtBQVgsRUFBa0I7QUFDdEMsc0JBQUssV0FBTCxDQUFpQixDQUFDLENBQUQsQ0FBakIsQ0FEc0M7Y0FBMUM7Ozs7O0FBRGM7OztzQ0FTTDtBQUNULGtCQUFLLEtBQUwsQ0FBVyxLQUFYLEdBRFM7Ozs7dUNBR0M7QUFDVixrQkFBSyxRQUFMLENBQWM7QUFDViw4QkFBYSxLQUFiO2NBREosRUFEVTs7OztxQ0FLRixHQUFHO0FBQ1gsZUFBRSxlQUFGLEdBRFc7QUFFWCxrQkFBSyxRQUFMLENBQWM7QUFDViw4QkFBYSxJQUFiO2NBREosRUFGVzs7Ozs2Q0FNSztBQUNoQixvQkFBTyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxLQUFLLFdBQUwsQ0FBakMsQ0FEZ0I7Ozs7NENBR0QsV0FBVyxXQUFXOzs7Z0RBRWxCO0FBQ25CLG9CQUFPLG1CQUFQLENBQTJCLE9BQTNCLEVBQW9DLEtBQUssV0FBTCxDQUFwQyxDQURtQjs7OztrQ0FHZDs7O0FBQ0wsaUJBQUksUUFBUSxLQUFLLEtBQUwsQ0FBVyxLQUFYLEdBQW1CLEtBQUssS0FBTCxDQUFXLEtBQVgsR0FBbUIsSUFBdEMsQ0FEUDtBQUVMLGlCQUFJLFFBQVEsS0FBSyxLQUFMLENBQVcsS0FBWCxHQUFtQixLQUFLLEtBQUwsQ0FBVyxLQUFYLEdBQW1CLEVBQXRDLENBRlA7QUFHTCxpQkFBSSxTQUFTLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FIUjtBQUlMLGlCQUFJLFVBQVUsS0FBSyxLQUFMLENBQVcsT0FBWCxHQUFxQixLQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLEVBQTFDLENBSlQ7QUFLTCxpQkFBSSxhQUFhLE9BQU8sTUFBUCxHQUFnQixDQUFoQixHQUFxQixNQUFNLE1BQU4sS0FBaUIsQ0FBakIsR0FBcUIsRUFBckIsR0FBMEIsTUFBTSxNQUFOLEdBQWUsRUFBZixHQUFxQixNQUFwRSxDQUxaO0FBTUwsaUJBQUksY0FBYyxPQUFPLE1BQVAsR0FBZ0IsQ0FBaEIsR0FBb0IsRUFBcEIsR0FBeUIsS0FBSyxLQUFMLENBQVcsV0FBWCxDQU50QztBQU9MLGlCQUFJLFlBQVkscUJBQXFCLEtBQUssS0FBTCxDQUFXLEtBQVgsS0FBcUIsSUFBckIsR0FBNEIsUUFBNUIsR0FBdUMsRUFBdkMsQ0FBckIsSUFBbUUsT0FBTyxNQUFQLEtBQWtCLENBQWxCLEdBQXNCLFFBQXRCLEdBQWlDLEVBQWpDLENBQW5FLENBUFg7QUFRTCxpQkFBSSxjQUFjLEtBQUssS0FBTCxDQUFXLFdBQVgsR0FBeUIsS0FBSyxLQUFMLENBQVcsV0FBWCxHQUF5QixTQUFsRCxDQVJiO0FBU0wsb0JBQVEsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcsNEJBQXdCLEtBQUssS0FBTCxDQUFXLFNBQVgsR0FBdUIsS0FBSyxLQUFMLENBQVcsU0FBWCxHQUF1QixFQUE5QyxFQUF4QixDQUEyRSxJQUEzRSxFQUFYLEVBQTVCLEVBQTJILFFBQVMsZ0JBQU0sYUFBTixDQUFvQixPQUFwQixFQUE2QixFQUFDLFdBQVcsWUFBWCxFQUE5QixFQUF3RCxLQUF4RCxDQUFULEdBQTJFLElBQTNFLEVBQWlGLGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsRUFBQyxXQUFXLFNBQVgsRUFBc0IsU0FBUyxvQkFBSztBQUNoUiw0QkFBSyxVQUFMLEdBRGdSO0FBRWhSLDRCQUFLLFdBQUwsQ0FBaUIsQ0FBakIsRUFGZ1I7a0JBQUwsRUFBM0QsRUFHaE4sT0FBTyxHQUFQLENBQVcsVUFBQyxDQUFELEVBQUksS0FBSixFQUFjO0FBQ3pCLHdCQUFRLGdCQUFNLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEIsRUFBQyxLQUFLLEtBQUwsRUFBWSxXQUFXLGVBQVgsRUFBekMsRUFBc0UsRUFBRSxJQUFGLEVBQVEsZ0JBQU0sYUFBTixpQkFBMEIsRUFBQyxNQUFNLE9BQU4sRUFBZSxNQUFNLE9BQU4sRUFBZSxTQUFTLG9CQUFLO0FBQ3pKLGdDQUFLLFdBQUwsQ0FBaUIsS0FBakIsRUFEeUo7c0JBQUwsRUFBbEUsQ0FBOUUsQ0FBUixDQUR5QjtjQUFkLENBSHFNLEVBT2hOLGdCQUFNLGFBQU4sQ0FBb0IsT0FBcEIsRUFBNkIsRUFBQyxPQUFPLEVBQUUsT0FBTyxVQUFQLEVBQVQsRUFBOEIsS0FBSyxtQkFBTztBQUFFLDRCQUFLLEtBQUwsR0FBYSxJQUFiLENBQUY7a0JBQVAsRUFBOEIsT0FBTyxLQUFQLEVBQWMsYUFBYSxXQUFiLEVBQTBCLFFBQVEsbUJBQUs7QUFDcEosNEJBQUssUUFBTCxDQUFjLEVBQUUsT0FBTyxLQUFQLEVBQWhCLEVBRG9KO2tCQUFMLEVBRWhKLFNBQVMsb0JBQUs7QUFDYiw0QkFBSyxRQUFMLENBQWMsRUFBRSxPQUFPLElBQVAsRUFBaEIsRUFEYTtrQkFBTCxFQUVULFVBQVUscUJBQUs7QUFDZCw0QkFBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixFQUFFLE1BQUYsQ0FBUyxLQUFULENBQXpCLENBRGM7a0JBQUwsRUFFVixXQUFXLHNCQUFLO0FBQ2YsNEJBQUssY0FBTCxDQUFvQixDQUFwQixFQURlO2tCQUFMLEVBTlYsQ0FQZ04sQ0FBNU0sRUFlRixJQUFDLENBQUssS0FBTCxDQUFXLFdBQVgsR0FBMkIsZ0JBQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixFQUFDLFdBQVcseUJBQVgsRUFBM0IsRUFBa0UsUUFBUSxHQUFSLENBQVksVUFBQyxNQUFELEVBQVMsS0FBVCxFQUFtQjtBQUMvSCxxQkFBSSxPQUFPLFFBQVAsRUFBaUI7QUFDakIsNEJBQU8sZ0JBQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixFQUFDLEtBQUssS0FBTCxFQUFZLFdBQVcsVUFBWCxFQUF2QyxFQUErRCxPQUFPLElBQVAsQ0FBdEUsQ0FEaUI7a0JBQXJCO0FBR0Esd0JBQVEsZ0JBQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixFQUFDLEtBQUssS0FBTCxFQUFZLFNBQVMsb0JBQUs7QUFDekQsZ0NBQUssUUFBTCxDQUFjLE1BQWQsRUFEeUQ7QUFFekQsNkJBQUksT0FBSyxLQUFMLENBQVcsYUFBWCxFQUEwQjtBQUMxQixvQ0FBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixNQUF6QixFQUQwQjswQkFBOUI7c0JBRm9ELEVBQWhELEVBS0osZ0JBQU0sYUFBTixDQUFvQixNQUFwQixFQUE0QixJQUE1QixFQUFrQyxPQUFPLElBQVAsQ0FMOUIsQ0FBUixDQUorSDtjQUFuQixDQUE5RSxFQVU5QixjQUFlLGdCQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsRUFBQyxTQUFTLG9CQUFLO0FBQ3hELDRCQUFLLEtBQUwsQ0FBVyxhQUFYLENBQXlCLE9BQUssS0FBTCxDQUFXLEtBQVgsQ0FBekIsQ0FEd0Q7a0JBQUwsRUFFcEQsV0FBVyxLQUFYLEVBRmdCLEVBRUcsS0FGSCxFQUVVLGdCQUFNLGFBQU4sQ0FBb0IsUUFBcEIsRUFBOEIsSUFBOUIsRUFBb0MsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUY5QyxDQUFmLEdBRW1GLElBRm5GLENBVkUsR0FZMEYsSUFaMUYsQ0FmTixDQVRLOzs7O1lBakZQOzs7bUJBd0hTLGU7Ozs7Ozs7Ozs7Ozs7O0FDMUhmOzs7O0FBQ0E7Ozs7Ozs7Ozs7S0FDTTs7O0FBQ0YsY0FERSxRQUNGLENBQVksS0FBWixFQUFtQjsrQkFEakIsVUFDaUI7O3VFQURqQixxQkFFUSxRQURTO01BQW5COztrQkFERTs7a0NBSU87QUFDTCxpQkFBSSxZQUFZLEtBQUssS0FBTCxDQUFXLEVBQVgsR0FBZ0IsSUFBaEIsR0FBdUIsS0FBdkIsQ0FEWDtBQUVMLHlCQUFZLFlBQVksV0FBWixDQUZQO0FBR0wsb0JBQVEsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcsU0FBWCxFQUE1QixFQUFtRCxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxpQkFBWCxFQUE1QixDQUFuRCxFQUErRyxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxnQkFBWCxFQUE1QixDQUEvRyxDQUFSLENBSEs7Ozs7WUFKUDs7O21CQVVTLDJCQUFVLFFBQVYsRTs7Ozs7Ozs7Ozs7U0NaQztTQWlCQTtTQUdBO0FBcEJULFVBQVMsV0FBVCxHQUF1QjtBQUMxQixTQUFJLGNBQWMsSUFBSSxDQUFKLENBRFE7QUFFMUIsU0FBSSxPQUFPLFVBQVAsSUFBcUIsR0FBckIsRUFBMEI7QUFDMUIsZ0JBQU87QUFDSCxxQkFBUSxPQUFSO0FBQ0Esd0JBQVcsT0FBTyxVQUFQO0FBQ1gseUJBQVksT0FBTyxVQUFQLEdBQW9CLFdBQXBCO1VBSGhCLENBRDBCO01BQTlCLE1BT0s7QUFDRCxnQkFBTztBQUNILHFCQUFRLElBQVI7QUFDQSx3QkFBVyxHQUFYO0FBQ0EseUJBQVksTUFBTSxXQUFOO1VBSGhCLENBREM7TUFQTDtFQUZHO0FBaUJBLFVBQVMsVUFBVCxHQUFzQjtBQUN6QixjQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLFFBQXBCLEdBQStCLFFBQS9CLENBRHlCO0VBQXRCO0FBR0EsVUFBUyxZQUFULEdBQXdCO0FBQzNCLGNBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsUUFBcEIsR0FBK0IsU0FBL0IsQ0FEMkI7RUFBeEI7bUJBR1E7QUFDWCw2QkFEVztBQUVYLDJCQUZXO0FBR1gsK0JBSFc7Ozs7Ozs7QUN2QmY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEc7Ozs7OztBQ05BO0FBQ0E7QUFDQSxHOzs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHLFVBQVU7QUFDYjtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDTEEsK0M7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1NBQ1MsZ0M7Ozs7Ozs7Ozs7Ozs7O0FDRFQ7Ozs7Ozs7Ozs7OztLQUNNOzs7Ozs7Ozs7OztrQ0FDTztBQUNMLG9CQUFRLGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsRUFBQyxXQUFXLGNBQVgsRUFBNUIsRUFBd0QsZ0JBQU0sYUFBTixDQUFvQixNQUFwQixFQUE0QixFQUFDLFdBQVcsbUJBQVgsRUFBN0IsQ0FBeEQsQ0FBUixDQURLOzs7O1lBRFA7OzttQkFLUyxROzs7Ozs7Ozs7Ozs7OztBQ05mOzs7O0FBQ0E7Ozs7Ozs7Ozs7S0FDTTs7O0FBQ0YsY0FERSxNQUNGLENBQVksS0FBWixFQUFtQjsrQkFEakIsUUFDaUI7O3VFQURqQixtQkFFUSxRQURTO01BQW5COztrQkFERTs7a0NBSU87OztBQUNMLG9CQUFRLGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsRUFBQyxXQUFXLFNBQVgsRUFBNUIsRUFBbUQsZ0JBQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUExQixFQUFnQyxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLEdBQWhCLENBQW9CLFVBQUMsR0FBRCxFQUFNLEtBQU4sRUFBZ0I7QUFDM0gscUJBQUksWUFBWSxJQUFaLENBRHVIO0FBRTNILHFCQUFJLFVBQVUsT0FBSyxLQUFMLENBQVcsT0FBWCxFQUFvQjtBQUM5QixpQ0FBWSxTQUFaLENBRDhCO2tCQUFsQztBQUdBLHdCQUFRLGdCQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsRUFBQyxXQUFXLFNBQVgsRUFBc0IsS0FBSyxLQUFMLEVBQWpELEVBQThELEdBQTlELENBQVIsQ0FMMkg7Y0FBaEIsQ0FBcEQsQ0FBbkQsQ0FBUixDQURLOzs7O1lBSlA7OzttQkFjUywyQkFBVSxNQUFWLEU7Ozs7Ozs7O0FDaEJmLG1CQUFrQix5RDs7Ozs7O0FDQWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCLGtCQUFrQixFQUFFOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUcsVUFBVTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ3RCQSxrQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQSxHOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQSxjOzs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW1FO0FBQ25FO0FBQ0Esc0ZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1gsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxnREFBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkLGVBQWM7QUFDZCxlQUFjO0FBQ2QsZUFBYztBQUNkLGdCQUFlO0FBQ2YsZ0JBQWU7QUFDZixnQkFBZTtBQUNmLGlCQUFnQjtBQUNoQiwwQjs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE0QixhQUFhOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXdDLG9DQUFvQztBQUM1RSw2Q0FBNEMsb0NBQW9DO0FBQ2hGLE1BQUssMkJBQTJCLG9DQUFvQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0Esa0NBQWlDLDJCQUEyQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRzs7Ozs7O0FDckVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRUFBa0UsK0JBQStCO0FBQ2pHLEc7Ozs7OztBQ05BO0FBQ0E7QUFDQSxvREFBbUQ7QUFDbkQ7QUFDQSx3Q0FBdUM7QUFDdkMsRzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ0pBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QixlQUFjO0FBQ2Q7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCO0FBQy9CO0FBQ0E7QUFDQSxXQUFVO0FBQ1YsRUFBQyxFOzs7Ozs7QUNoQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5R0FBd0csT0FBTztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0EseUNBQXdDLGdCQUFnQjtBQUN4RCxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pEQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJEQUEwRCxFQUFFO0FBQzVEO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBZ0UsZ0VBQWdFO0FBQ2hJOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxZQUFZLEVBQUU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7O0FBR0E7QUFDQSxrQkFBaUIsbUJBQW1CO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnRUFBK0Q7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNEI7Ozs7OztBQzNKQSwrQzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FDTTs7Ozs7Ozs7Ozs7a0NBQ087QUFDTCxvQkFBUSxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxVQUFYLEVBQTVCLEVBQW9ELGdCQUFNLGFBQU4sc0JBQStCLElBQS9CLEVBQXFDLGdCQUFNLGFBQU4sQ0FBb0IsR0FBcEIsRUFBeUIsSUFBekIsRUFBK0IsK0NBQS9CLENBQXJDLENBQXBELENBQVIsQ0FESzs7OztZQURQOzs7bUJBS1MsUzs7Ozs7Ozs7Ozs7Ozs7QUNQZjs7OztBQUNBOzs7Ozs7Ozs7O0tBQ007OztBQUNGLGNBREUsYUFDRixDQUFZLEtBQVosRUFBbUI7K0JBRGpCLGVBQ2lCOzt1RUFEakIsMEJBRVEsUUFEUztNQUFuQjs7a0JBREU7O2tDQUlPO0FBQ0wsaUJBQUksU0FBUyxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBRFI7QUFFTCxpQkFBSSxRQUFRLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FGUDtBQUdMLGlCQUFJLGNBQWMsS0FBSyxLQUFMLENBQVcsV0FBWCxDQUhiO0FBSUwsaUJBQUksU0FBUyxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBSlI7QUFLTCxvQkFBUSxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyx1QkFBWCxFQUE1QixFQUFpRSxnQkFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLEVBQUMsV0FBVyxPQUFYLEVBQTNCLEVBQWdELEtBQWhELENBQWpFLEVBQXlILGdCQUFNLGFBQU4sQ0FBb0IsR0FBcEIsRUFBeUIsRUFBQyxXQUFXLFFBQVgsRUFBMUIsRUFBZ0QsTUFBaEQsQ0FBekgsRUFBa0wsZ0JBQU0sYUFBTixlQUE0QixFQUFDLE9BQU8sTUFBUCxFQUFlLElBQUksa0JBQWtCLE1BQWxCLEVBQWhELEVBQTJFLElBQTNFLENBQWxMLEVBQW9RLGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsRUFBQyxXQUFXLGFBQVgsRUFBNUIsRUFBdUQsZ0JBQU0sYUFBTixDQUFvQixHQUFwQixFQUF5QixJQUF6QixFQUErQixXQUEvQixDQUF2RCxDQUFwUSxDQUFSLENBTEs7Ozs7WUFKUDs7O21CQVlTLGM7Ozs7Ozs7Ozs7Ozs7O0FDZGY7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBQ007Ozs7Ozs7Ozs7O2tDQUNPO0FBQ0wsb0JBQVEsZ0JBQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixFQUFDLFdBQVcsb0JBQVgsRUFBM0IsRUFBNkQsS0FBSyxLQUFMLENBQVcsWUFBWCxHQUEyQixLQUFLLEtBQUwsQ0FBVyxZQUFYLENBQXdCLEdBQXhCLENBQTRCLFVBQUMsSUFBRCxFQUFPLEtBQVAsRUFBaUI7cUJBQ2pJLFFBQXNDLEtBQXRDLE1BRGlJO3FCQUMxSCxTQUErQixLQUEvQixPQUQwSDtxQkFDbEgsY0FBdUIsS0FBdkIsWUFEa0g7cUJBQ3JHLFFBQVUsS0FBVixNQURxRzs7QUFFekksd0JBQVEsZ0JBQU0sYUFBTixpQkFBMEIsRUFBQyxJQUFJLEtBQUssRUFBTCxFQUFTLEtBQUssS0FBTCxFQUFZLE9BQU8sS0FBUCxFQUFjLFFBQVEsT0FBTyxHQUFQLENBQVc7Z0NBQUssRUFBRSxPQUFGLEdBQVksRUFBRSxPQUFGLENBQVUsSUFBVixHQUFpQixFQUE3QjtzQkFBTCxDQUFYLENBQWlELElBQWpELENBQXNELElBQXRELENBQVIsRUFBcUUsYUFBYSxXQUFiLEVBQTBCLE9BQU8sS0FBUCxFQUFqSyxDQUFSLENBRnlJO2NBQWpCLENBQXZELEdBRy9ELElBSCtELENBQXJFLENBREs7Ozs7WUFEUDs7O21CQVFTLFM7Ozs7Ozs7Ozs7Ozs7O0FDVmY7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBQ007Ozs7Ozs7Ozs7O2tDQUNPOzs7Ozs7Ozs7O0FBUUwsb0JBQVEsZ0JBQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixFQUFDLFdBQVcsT0FBWCxFQUFvQixPQUFPLEVBQUUsUUFBUSxLQUFLLEtBQUwsQ0FBVyxNQUFYLEVBQWpCLEVBQS9DLEVBQXNGLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsR0FBakIsQ0FBcUIsVUFBQyxJQUFELEVBQU8sS0FBUCxFQUFpQjtBQUNoSSxxQkFBSSxLQUFLLElBQUwsS0FBYyxNQUFkLEVBQXNCOztBQUV0Qiw0QkFBUSxnQkFBTSxhQUFOLHFCQUE4QixFQUFDLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFrQixRQUFRLE9BQUssS0FBTCxDQUFXLE1BQVgsRUFBbUIsS0FBSyxLQUFMLEVBQVksTUFBTSxJQUFOLEVBQS9GLENBQVIsQ0FGc0I7a0JBQTFCLE1BSUs7QUFDRCw2QkFBUSxLQUFSLENBQWMsZ0JBQWQsRUFEQztrQkFKTDtjQUQrRyxDQUEzRyxDQUFSLENBUks7Ozs7WUFEUDs7O21CQW9CUyxhOzs7Ozs7Ozs7Ozs7OztBQ2RmOzs7Ozs7Ozs7Ozs7QUFSQSxLQUFJLFdBQVcsU0FBQyxJQUFRLFVBQUssUUFBTCxJQUFrQixPQUFPLE1BQVAsSUFBaUIsVUFBUyxDQUFULEVBQVk7QUFDbkUsVUFBSyxJQUFJLENBQUosRUFBTyxJQUFJLENBQUosRUFBTyxJQUFJLFVBQVUsTUFBVixFQUFrQixJQUFJLENBQUosRUFBTyxHQUFoRCxFQUFxRDtBQUNqRCxhQUFJLFVBQVUsQ0FBVixDQUFKLENBRGlEO0FBRWpELGNBQUssSUFBSSxDQUFKLElBQVMsQ0FBZDtBQUFpQixpQkFBSSxPQUFPLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsQ0FBckMsRUFBd0MsQ0FBeEMsQ0FBSixFQUNiLEVBQUUsQ0FBRixJQUFPLEVBQUUsQ0FBRixDQUFQLENBRGE7VUFBakI7TUFGSjtBQUtBLFlBQU8sQ0FBUCxDQU5tRTtFQUFaOztLQVNyRDs7Ozs7Ozs7Ozs7a0NBQ087QUFDTCxpQkFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FETjtBQUVMLGlCQUFJLFFBQVEsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUZQO0FBR0wsb0JBQVEsZ0JBQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixFQUFDLE9BQU8sS0FBUCxFQUEzQixFQUEwQyxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxTQUFYLEVBQTVCLEVBQW1ELEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsR0FBcEIsQ0FBd0IsVUFBQyxJQUFELEVBQU8sS0FBUCxFQUFpQjtBQUMxSSxxQkFBSSxLQUFLLElBQUwsS0FBYyxHQUFkLEVBQW1CO0FBQ25CLDZCQUFRLEtBQVIsQ0FBYyw0QkFBZCxFQURtQjtrQkFBdkI7QUFHQSx3QkFBUSxnQkFBTSxhQUFOLENBQW9CLEdBQXBCLEVBQXlCLFNBQVMsRUFBVCxFQUFhLFVBQVUsQ0FBVixHQUFjLEVBQUUsT0FBTyxFQUFFLFdBQVcsS0FBSyxLQUFMLENBQVcsTUFBWCxFQUFwQixFQUFoQixHQUE0RCxFQUE1RCxFQUFnRSxFQUFDLEtBQUssS0FBTCxFQUE5RSxDQUF6QixFQUFxSCxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQTdILENBSjBJO2NBQWpCLENBQTNFLENBQTFDLEVBS0gsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcsU0FBWCxFQUE1QixFQUFtRCxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBTGhELENBQVIsQ0FISzs7OztZQURQOzs7bUJBWVMsUzs7Ozs7Ozs7Ozs7Ozs7QUNyQmY7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0tBQ3FCOzs7Ozs7Ozs7OztrQ0FDUjtBQUNMLG9CQUFRLGdCQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsRUFBQyxXQUFXLE1BQVgsRUFBM0IsRUFBK0MsZ0JBQU0sYUFBTixvQkFBMEIsRUFBQyxJQUFJLFdBQVcsS0FBSyxLQUFMLENBQVcsRUFBWCxFQUExQyxFQUEwRCxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxZQUFYLEVBQTVCLEVBQXNELGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsRUFBQyxLQUFLLEtBQUssS0FBTCxDQUFXLEtBQVgsRUFBakMsQ0FBdEQsQ0FBMUQsRUFBc0ssZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcsV0FBWCxFQUE1QixFQUFxRCxnQkFBTSxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLEVBQUMsT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLEVBQWtCLFdBQVcsV0FBWCxFQUF0RCxFQUErRSxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQXBJLEVBQXVKLGdCQUFNLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEIsRUFBQyxXQUFXLGFBQVgsRUFBN0IsRUFBd0QsS0FBSyxLQUFMLENBQVcsTUFBWCxDQUEvTSxDQUF0SyxDQUEvQyxFQUEwYixnQkFBTSxhQUFOLDBCQUFtQyxFQUFDLFFBQVEsS0FBSyxLQUFMLENBQVcsRUFBWCxFQUFlLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFrQixRQUFRLEtBQUssS0FBTCxDQUFXLE1BQVgsRUFBbUIsYUFBYSxLQUFLLEtBQUwsQ0FBVyxXQUFYLEVBQTVILENBQTFiLENBQVIsQ0FESzs7OztZQURROzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQjs7OztBQUNBOzs7Ozs7Ozs7O0tBQ007Ozs7Ozs7Ozs7O2tDQUNPO0FBQ0wsaUJBQUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBRE47QUFFTCxpQkFBSSxRQUFRLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FGUDtBQUdMLGlCQUFJLFdBQVcsS0FBSyxLQUFMLENBQVcsUUFBWCxHQUFzQixLQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQXNCLElBQTVDLENBSFY7QUFJTCxvQkFBUSxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxXQUFYLEVBQTVCLEVBQXFELGdCQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsRUFBQyxXQUFXLFdBQVgsRUFBM0IsRUFBb0QsS0FBcEQsQ0FBckQsRUFBaUgsV0FBWSxnQkFBTSxhQUFOLG9CQUEwQixFQUFDLElBQUksUUFBSixFQUEzQixFQUEwQyxNQUExQyxDQUFaLEdBQWlFLElBQWpFLEVBQXVFLGdCQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBMUIsRUFBZ0MsS0FBSyxHQUFMLENBQVMsVUFBQyxJQUFELEVBQU8sS0FBUDt3QkFBa0IsZ0JBQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixFQUFDLEtBQUssS0FBTCxFQUEzQixFQUF3QyxnQkFBTSxhQUFOLG9CQUEwQixFQUFDLElBQUksS0FBSyxJQUFMLEVBQS9CLEVBQTJDLEtBQUssSUFBTCxDQUFuRjtjQUFsQixDQUF6QyxDQUF4TCxDQUFSLENBSks7Ozs7WUFEUDs7O21CQVFTLFM7Ozs7Ozs7Ozs7Ozs7QUNWZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztLQUVNOzs7QUFDRixjQURFLGdCQUNGLENBQVksS0FBWixFQUFtQjsrQkFEakIsa0JBQ2lCOzt1RUFEakIsNkJBRVEsUUFEUztNQUFuQjs7a0JBREU7O2tDQUlPO0FBQ0wsb0JBQVEsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcsbUJBQVgsRUFBNUIsRUFBNkQsZ0JBQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixFQUFDLFdBQVcsU0FBWCxFQUEzQixFQUFrRCxnQkFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLEVBQUMsV0FBVyx5QkFBWCxFQUEzQixFQUFrRSxnQkFBTSxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLElBQTVCLEVBQWtDLElBQWxDLENBQWxFLEVBQTJHLGdCQUFNLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEIsSUFBNUIsRUFBa0MsSUFBbEMsQ0FBM0csQ0FBbEQsRUFBdU0sZ0JBQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixFQUFDLFdBQVcsc0JBQVgsRUFBM0IsRUFBK0QsZ0JBQU0sYUFBTixDQUFvQixNQUFwQixFQUE0QixFQUFDLFdBQVcsT0FBWCxFQUE3QixFQUFrRCxNQUFsRCxDQUEvRCxFQUEwSCxnQkFBTSxhQUFOLHFCQUE4QixFQUFDLElBQUksSUFBSixFQUEvQixDQUExSCxDQUF2TSxFQUE2VyxnQkFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLEVBQUMsV0FBVyxxQkFBWCxFQUEzQixFQUE4RCxnQkFBTSxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLEVBQUMsT0FBTyxFQUFFLFlBQVksTUFBWixFQUFULEVBQTdCLEVBQTZELFFBQTdELENBQTlELEVBQXNJLGdCQUFNLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEIsRUFBQyxPQUFPLEVBQUUsWUFBWSxNQUFaLEVBQVQsRUFBN0IsRUFBNkQsUUFBN0QsQ0FBdEksRUFBOE0sZ0JBQU0sYUFBTixDQUFvQixNQUFwQixFQUE0QixFQUFDLE9BQU8sRUFBRSxZQUFZLE1BQVosRUFBVCxFQUE3QixFQUE2RCxRQUE3RCxDQUE5TSxDQUE3VyxDQUE3RCxDQUFSLENBREs7Ozs7WUFKUDs7O21CQVFTLDJCQUFVLGdCQUFWLEU7Ozs7Ozs7Ozs7Ozs7O0FDWmY7Ozs7QUFDQTs7Ozs7Ozs7OztLQUNNOzs7QUFDRixjQURFLGVBQ0YsQ0FBWSxLQUFaLEVBQW1COytCQURqQixpQkFDaUI7O3VFQURqQiw0QkFFUSxRQURTO01BQW5COztrQkFERTs7a0NBSU87QUFDTCxvQkFBUSxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsT0FBTyxFQUFFLFFBQVEsR0FBUixFQUFULEVBQXdCLFdBQVcsa0JBQVgsRUFBcEQsRUFBb0YsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcsUUFBWCxFQUE1QixFQUFrRCxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxVQUFYLEVBQTVCLEVBQW9ELGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsSUFBM0IsRUFBaUMsZ0JBQU0sYUFBTixDQUFvQixRQUFwQixFQUE4QixJQUE5QixFQUFvQyxLQUFLLEtBQUwsQ0FBVyxPQUFYLENBQXJFLEVBQTBGLEdBQTFGLEVBQStGLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBbkosRUFBc0ssZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcsVUFBWCxFQUE1QixFQUFvRCxPQUFwRCxDQUF0SyxDQUFsRCxDQUFwRixFQUE0VyxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsT0FBTyxFQUFFLFFBQVEsR0FBUixFQUFULEVBQXdCLFdBQVcsWUFBWCxFQUFwRCxDQUE1VyxFQUEyYixnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsT0FBTyxFQUFFLFFBQVEsR0FBUixFQUFULEVBQXdCLFdBQVcsT0FBWCxFQUFwRCxDQUEzYixDQUFSLENBREs7Ozs7WUFKUDs7O21CQVFTLDJCQUFVLGVBQVYsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ0pmOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFaQSxLQUFJLGFBQWEsU0FBQyxJQUFRLFVBQUssVUFBTCxJQUFvQixVQUFVLFVBQVYsRUFBc0IsTUFBdEIsRUFBOEIsR0FBOUIsRUFBbUMsSUFBbkMsRUFBeUM7QUFDbkYsU0FBSSxJQUFJLFVBQVUsTUFBVjtTQUFrQixJQUFJLElBQUksQ0FBSixHQUFRLE1BQVIsR0FBaUIsU0FBUyxJQUFULEdBQWdCLE9BQU8sT0FBTyx3QkFBUCxDQUFnQyxNQUFoQyxFQUF3QyxHQUF4QyxDQUFQLEdBQXNELElBQXRFO1NBQTRFLENBQTNILENBRG1GO0FBRW5GLFNBQUksUUFBTyx5REFBUCxLQUFtQixRQUFuQixJQUErQixPQUFPLFFBQVEsUUFBUixLQUFxQixVQUE1QixFQUF3QyxJQUFJLFFBQVEsUUFBUixDQUFpQixVQUFqQixFQUE2QixNQUE3QixFQUFxQyxHQUFyQyxFQUEwQyxJQUExQyxDQUFKLENBQTNFLEtBQ0ssS0FBSyxJQUFJLElBQUksV0FBVyxNQUFYLEdBQW9CLENBQXBCLEVBQXVCLEtBQUssQ0FBTCxFQUFRLEdBQTVDO0FBQWlELGFBQUksSUFBSSxXQUFXLENBQVgsQ0FBSixFQUFtQixJQUFJLENBQUMsSUFBSSxDQUFKLEdBQVEsRUFBRSxDQUFGLENBQVIsR0FBZSxJQUFJLENBQUosR0FBUSxFQUFFLE1BQUYsRUFBVSxHQUFWLEVBQWUsQ0FBZixDQUFSLEdBQTRCLEVBQUUsTUFBRixFQUFVLEdBQVYsQ0FBNUIsQ0FBaEIsSUFBK0QsQ0FBL0QsQ0FBM0I7TUFBakQsT0FDRSxJQUFJLENBQUosSUFBUyxDQUFULElBQWMsT0FBTyxjQUFQLENBQXNCLE1BQXRCLEVBQThCLEdBQTlCLEVBQW1DLENBQW5DLENBQWQsRUFBcUQsQ0FBckQsQ0FKNEU7RUFBekM7O0FBYTlDLEtBQU0sU0FBUyxvQkFBUSxHQUFSLENBQVQ7O0FBRU4sS0FBSTtlQUFZOztBQUNaLGNBRFksR0FDWixDQUFZLEtBQVosRUFBbUI7K0JBRFAsS0FDTzs7dUVBRFAsZ0JBRUYsUUFEUztNQUFuQjs7a0JBRFk7OzZDQUlRO0FBQ2hCLGtCQUFLLEtBQUwsQ0FBVyxRQUFYLEdBRGdCOzs7O2tDQUdYO0FBQ0wsaUJBQUksVUFBVSxLQUFWLENBREM7QUFFTCxpQkFBSSxXQUFXLElBQVgsQ0FGQztBQUdMLGlCQUFJLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsSUFBbkIsQ0FBd0IsSUFBeEIsS0FBaUMsU0FBakMsRUFBNEM7QUFDNUMsMkJBQVUsS0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixJQUFuQixDQUF3QixJQUF4QixLQUFpQyxPQUFqQyxDQURrQztBQUU1Qyw0QkFBVyxLQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLElBQW5CLENBQXdCLFFBQXhCLENBRmlDO2NBQWhEO0FBSUEsb0JBQVEsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixJQUEzQixFQUFpQyxnQkFBTSxhQUFOLHFCQUE4QixFQUFDLFNBQVMsT0FBVCxFQUFrQixVQUFVLFFBQVYsRUFBakQsQ0FBakMsRUFBd0csZ0JBQU0sYUFBTixvQkFBK0IsSUFBL0IsRUFBcUMsS0FBSyxLQUFMLENBQVcsUUFBWCxDQUE3SSxFQUFtSyxnQkFBTSxhQUFOLHFCQUE4QixJQUE5QixDQUFuSyxDQUFSLENBUEs7Ozs7WUFQRztvQkFBWjtBQWlCSixPQUFNLFdBQVcsQ0FDYiwrQkFBVyxNQUFYLENBRGEsQ0FBWCxFQUVILEdBRkcsQ0FBTjttQkFHZSx5QkFBUTtZQUFVO0FBQzdCLHVCQUFjLE1BQU0sVUFBTixDQUFpQixZQUFqQjtBQUNkLGtCQUFTLE1BQU0sT0FBTjs7RUFGVSxFQUduQixFQUFFLDJCQUFGLEVBSFcsRUFHRyxHQUhILEU7Ozs7Ozs7Ozs7OztBQ25DZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztLQUNNOzs7QUFDRixjQURFLE9BQ0YsQ0FBWSxLQUFaLEVBQW1COytCQURqQixTQUNpQjs7dUVBRGpCLG9CQUVRLFFBRFM7TUFBbkI7O2tCQURFOzs2Q0FJa0I7QUFDaEIsa0JBQUssS0FBTCxDQUFXLFVBQVgsR0FEZ0I7Ozs7a0NBR1g7QUFDTCxvQkFBUSxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxzQkFBWCxFQUE1QixFQUFnRSxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxhQUFYLEVBQTVCLEVBQXVELGdCQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsRUFBQyxXQUFXLFlBQVgsRUFBM0IsRUFBcUQsZ0JBQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixFQUFDLFdBQVcsU0FBWCxFQUEzQixFQUFrRCxJQUFsRCxDQUFyRCxFQUE4RyxnQkFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDLElBQWhDLENBQTlHLEVBQXFKLGdCQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBMUIsRUFBZ0MsSUFBaEMsQ0FBckosRUFBNEwsZ0JBQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUExQixFQUFnQyxJQUFoQyxDQUE1TCxFQUFtTyxnQkFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDLElBQWhDLENBQW5PLEVBQTBRLGdCQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBMUIsRUFBZ0MsSUFBaEMsQ0FBMVEsRUFBaVQsZ0JBQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUExQixFQUFnQyxJQUFoQyxDQUFqVCxDQUF2RCxFQUFnWixnQkFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLEVBQUMsV0FBVyxvQkFBWCxFQUEzQixFQUE2RCxnQkFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDLElBQWhDLENBQTdELEVBQW9HLGdCQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBMUIsRUFBZ0MsSUFBaEMsQ0FBcEcsRUFBMkksZ0JBQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUExQixFQUFnQyxJQUFoQyxDQUEzSSxDQUFoWixFQUFta0IsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcsT0FBWCxFQUE1QixFQUFpRCxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxPQUFYLEVBQTVCLEVBQWlELFNBQWpELENBQWpELEVBQThHLGdCQUFNLGFBQU4scUJBQThCLEVBQUMsSUFBSSxLQUFKLEVBQS9CLENBQTlHLENBQW5rQixDQUFoRSxFQUEreEIsZ0JBQU0sYUFBTiw0QkFBcUMsRUFBQyxjQUFjLEtBQUssS0FBTCxDQUFXLFdBQVgsRUFBcEQsQ0FBL3hCLEVBQTYyQixnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxnQkFBWCxFQUE1QixFQUEwRCxNQUExRCxDQUE3MkIsQ0FBUixDQURLOzs7O1lBUFA7OztBQVdOLFVBQVMsZUFBVCxDQUF5QixLQUF6QixFQUFnQyxRQUFoQyxFQUEwQztBQUN0QyxZQUFPO0FBQ0gsc0JBQWEsTUFBTSxVQUFOLENBQWlCLEtBQWpCLENBQXVCLE1BQXZCLEdBQ1AsTUFBTSxVQUFOLENBQWlCLEtBQWpCLENBQXVCLE1BQXZCLENBQThCLEdBQTlCLENBQWtDLEdBQWxDLENBQXNDO29CQUFNLE1BQU0sUUFBTixDQUFlLEtBQWYsQ0FBcUIsRUFBckI7VUFBTixDQUQvQixHQUVQLEVBRk87TUFEakIsQ0FEc0M7RUFBMUM7bUJBT2UseUJBQVEsZUFBUixFQUF5QixFQUFFLCtCQUFGLEVBQWMsMkNBQWQsRUFBekIsRUFBMkQsT0FBM0QsRTs7Ozs7Ozs7Ozs7Ozs7QUN2QmY7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztLQUNNOzs7QUFDRixjQURFLGtCQUNGLENBQVksS0FBWixFQUFtQjsrQkFEakIsb0JBQ2lCOzt1RUFEakIsK0JBRVEsUUFEUztNQUFuQjs7a0JBREU7OzZDQUlrQjtBQUNoQixrQkFBSyxLQUFMLENBQVcsZ0JBQVgsR0FEZ0I7Ozs7a0NBR1g7QUFDTCxvQkFBUSxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxxQkFBWCxFQUE1QixFQUErRCxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxZQUFYLEVBQTVCLEVBQXNELE1BQXRELENBQS9ELEVBQThILGdCQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBMUIsRUFBZ0MsS0FBSyxLQUFMLENBQVcsaUJBQVgsQ0FBNkIsTUFBN0IsS0FBd0MsQ0FBeEMsSUFDL0osS0FBSyxLQUFMLENBQVcsaUJBQVgsQ0FBNkIsR0FBN0IsQ0FBaUMsVUFBQyxJQUFELEVBQU8sS0FBUCxFQUFpQjtBQUNqRCx3QkFBUSxnQkFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLEVBQUMsS0FBSyxLQUFMLEVBQTNCLEVBQXdDLGdCQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBMUIsRUFBZ0MsS0FBSyxJQUFMLENBQXhFLEVBQW9GLGdCQUFNLGFBQU4sQ0FBb0IsR0FBcEIsRUFBeUIsSUFBekIsRUFBK0IsS0FBSyxXQUFMLENBQW5ILENBQVIsQ0FEaUQ7Y0FBakIsQ0FEOEgsQ0FBOUosRUFHQyxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxnQkFBWCxFQUE1QixFQUEwRCxNQUExRCxDQUhELENBQVIsQ0FESzs7OztZQVBQOzs7bUJBY1MseUJBQVE7WUFBVTtBQUM3Qiw0QkFBbUIsTUFBTSxVQUFOLENBQWlCLGVBQWpCLENBQWlDLE1BQWpDLEdBQ2IsTUFBTSxVQUFOLENBQWlCLGVBQWpCLENBQWlDLE1BQWpDLENBQXdDLEdBQXhDLENBQTRDLEdBQTVDLENBQWdEO29CQUFNLE1BQU0sUUFBTixDQUFlLGVBQWYsQ0FBK0IsRUFBL0I7VUFBTixDQURuQyxHQUViLEVBRmE7O0VBREEsRUFJbkIsRUFBRSwyQ0FBRixFQUpXLEVBSVcsa0JBSlgsRTs7Ozs7Ozs7Ozs7Ozs7QUNqQmY7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUNNOzs7QUFDRixjQURFLFFBQ0YsQ0FBWSxLQUFaLEVBQW1COytCQURqQixVQUNpQjs7NEVBRGpCLHFCQUVRLFFBRFM7O0FBRWYsZUFBSyxNQUFMLEdBQWMsTUFBTSxNQUFOLENBQWEsRUFBYixDQUZDOztNQUFuQjs7a0JBREU7OzZDQVFrQjtBQUNoQixrQkFBSyxLQUFMLENBQVcsU0FBWCxDQUFxQixLQUFLLE1BQUwsQ0FBckIsQ0FEZ0I7Ozs7a0NBR1g7QUFDTCxpQkFBSSxXQUFXLEtBQUssS0FBTCxDQUFXLFFBQVgsR0FBc0IsS0FBSyxLQUFMLENBQVcsUUFBWCxHQUFzQixFQUE1QyxDQURWO0FBRUwsb0JBQVEsZ0JBQU0sYUFBTixDQUFvQixTQUFwQixFQUErQixFQUFDLFdBQVcsNkJBQVgsRUFBaEMsRUFBMkUsZ0JBQU0sYUFBTixpQkFBMEIsRUFBQyxXQUFXLFdBQVgsRUFBM0IsQ0FBM0UsRUFBZ0ksaUJBQUUsT0FBRixDQUFVLFFBQVYsSUFBdUIsZ0JBQU0sYUFBTixvQkFBNkIsSUFBN0IsQ0FBdkIsR0FBNkQsSUFBN0QsRUFBbUUsZ0JBQU0sYUFBTixDQUFvQixRQUFwQixFQUE4QixFQUFDLFdBQVcsa0JBQVgsRUFBL0IsRUFBK0QsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcsVUFBWCxFQUE1QixFQUFvRCxTQUFTLEtBQVQsR0FBa0IsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcsWUFBWCxFQUE1QixFQUFzRCxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsS0FBSyxTQUFTLEtBQVQsRUFBakMsQ0FBdEQsQ0FBbEIsR0FBOEgsSUFBOUgsQ0FBbkgsRUFBd1AsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcsV0FBWCxFQUE1QixFQUFxRCxnQkFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLEVBQUMsV0FBVyxXQUFYLEVBQTNCLEVBQW9ELFNBQVMsS0FBVCxDQUF6RyxFQUEwSCxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxhQUFYLEVBQTVCLEVBQXVELGdCQUFNLGFBQU4sQ0FBb0IsUUFBcEIsRUFBOEIsSUFBOUIsRUFBb0MsS0FBcEMsRUFBMkMsU0FBUyxNQUFULEdBQWtCLFNBQVMsTUFBVCxDQUFnQixHQUFoQixDQUFvQjt3QkFBSyxFQUFFLE9BQUYsR0FBWSxFQUFFLE9BQUYsQ0FBVSxJQUFWLEdBQWlCLEVBQTdCO2NBQUwsQ0FBcEIsQ0FBMEQsSUFBMUQsQ0FBK0QsSUFBL0QsQ0FBbEIsR0FBeUYsRUFBekYsQ0FBbEcsQ0FBMUgsRUFBMlQsU0FBUyxLQUFULEdBQWtCLGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsSUFBM0IsRUFBaUMsZ0JBQU0sYUFBTixlQUE0QixFQUFDLHNCQUFvQixTQUFTLEVBQVQsRUFBZSxPQUFPLE1BQVAsRUFBaEUsRUFBZ0YsSUFBaEYsQ0FBakMsRUFBd0gsZ0JBQU0sYUFBTixlQUE0QixJQUE1QixFQUFrQyxPQUFsQyxDQUF4SCxFQUFvSyxnQkFBTSxhQUFOLGVBQTRCLElBQTVCLEVBQWtDLE9BQWxDLENBQXBLLEVBQWdOLGdCQUFNLGFBQU4sZUFBNEIsSUFBNUIsRUFBa0MsSUFBbEMsQ0FBaE4sQ0FBbEIsR0FBOFEsSUFBOVEsQ0FBbmpCLENBQW5NLEVBQTRnQyxTQUFTLFdBQVQsR0FBd0IsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixJQUEzQixFQUFpQyxnQkFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDLE1BQWhDLENBQWpDLEVBQTBFLGdCQUFNLGFBQU4sQ0FBb0IsR0FBcEIsRUFBeUIsSUFBekIsRUFBK0IsU0FBUyxXQUFULENBQXpHLENBQXhCLEdBQTJKLElBQTNKLENBQXBoQyxDQUZLOzs7O3lDQU4yQjtpQkFBakIsbUJBQWlCO2lCQUFWLHFCQUFVOztBQUNoQyxvQkFBTyxNQUFNLFFBQU4sQ0FBZSx3QkFBVSxPQUFPLEVBQVAsQ0FBekIsQ0FBUCxDQURnQzs7OztZQUxsQzs7O21CQWdCUyx5QkFBUSxVQUFDLEtBQUQsRUFBUSxRQUFSLEVBQXFCO0FBQ3hDLFlBQU8sRUFBRSxVQUFVLE1BQU0sUUFBTixDQUFlLEtBQWYsQ0FBcUIsU0FBUyxNQUFULENBQWdCLEVBQWhCLENBQS9CLEVBQVQsQ0FEd0M7RUFBckIsRUFFcEIsRUFBRSw2QkFBRixFQUZZLEVBRUcsUUFGSCxFOzs7Ozs7Ozs7Ozs7OztBQ3ZCZjs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUNNOzs7QUFDRixjQURFLFNBQ0YsQ0FBWSxLQUFaLEVBQW1COytCQURqQixXQUNpQjs7dUVBRGpCLHNCQUVRLFFBRFM7TUFBbkI7O2tCQURFOzs2Q0FPa0I7QUFDaEIsa0JBQUssS0FBTCxDQUFXLFVBQVgsR0FEZ0I7Ozs7a0NBR1g7QUFDTCxpQkFBSSxXQUFXLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FEVjtBQUVMLG9CQUFRLGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsSUFBM0IsRUFBaUMsZ0JBQU0sYUFBTiw0QkFBcUMsRUFBQyxjQUFjLFFBQWQsRUFBd0IsT0FBTyxNQUFQLEVBQTlELENBQWpDLENBQVIsQ0FGSzs7Ozt5Q0FOMkI7aUJBQWpCLG1CQUFpQjtpQkFBVixxQkFBVTs7QUFDaEMsb0JBQU8sTUFBTSxRQUFOLENBQWUsMEJBQWYsQ0FBUCxDQURnQzs7OztZQUpsQzs7O0FBZU4sVUFBUyxlQUFULENBQXlCLEtBQXpCLEVBQWdDLFFBQWhDLEVBQTBDO0FBQ3RDLFlBQU87QUFDSCxnQkFBTyxpQkFBRSxHQUFGLENBQU0sTUFBTSxRQUFOLENBQWUsU0FBZixFQUEwQixNQUFoQyxFQUF3QyxFQUF4QyxDQUFQO01BREosQ0FEc0M7RUFBMUM7bUJBS2UseUJBQVEsZUFBUixFQUF5QixFQUFFLCtCQUFGLEVBQXpCLEVBQXlDLFNBQXpDLEU7Ozs7Ozs7Ozs7Ozs7O0FDekJmOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUNNOzs7QUFDRixjQURFLFVBQ0YsQ0FBWSxLQUFaLEVBQW1COytCQURqQixZQUNpQjs7dUVBRGpCLHVCQUVRLFFBRFM7TUFBbkI7O2tCQURFOzs2Q0FJa0I7QUFDaEIsa0JBQUssS0FBTCxDQUFXLGVBQVgsQ0FBMkIsS0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixFQUFsQixDQUEzQixDQURnQjs7OztrQ0FHWDtBQUNMLGlCQUFNLGlCQUFpQixLQUFLLEtBQUwsQ0FBVyxjQUFYLEdBQTRCLEtBQUssS0FBTCxDQUFXLGNBQVgsR0FBNEIsRUFBRSxPQUFPLEVBQVAsRUFBMUQsQ0FEbEI7QUFFTCxpQkFBTSxRQUFRLGVBQWUsS0FBZixDQUNULE1BRFMsQ0FDRjt3QkFBUSxLQUFLLE9BQUw7Y0FBUixDQURFLENBRVQsR0FGUyxDQUVMO3dCQUFRLEtBQUssT0FBTDtjQUFSLENBRkgsQ0FGRDtBQUtMLG9CQUFRLGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsRUFBQyxXQUFXLFlBQVgsRUFBNUIsRUFBc0QsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcsYUFBWCxFQUE1QixFQUF1RCxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxZQUFYLEVBQTVCLEVBQXNELGVBQWUsSUFBZixDQUE3RyxFQUFtSSxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxXQUFYLEVBQTVCLEVBQXFELE9BQXJELENBQW5JLEVBQWtNLGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsRUFBQyxXQUFXLGFBQVgsRUFBNUIsRUFBdUQsZ0JBQU0sYUFBTiw0QkFBOEIsRUFBQyxjQUFjLEtBQWQsRUFBL0IsQ0FBdkQsQ0FBbE0sRUFBZ1QsZ0JBQU0sYUFBTixlQUE0QixJQUE1QixFQUFrQyxJQUFsQyxDQUFoVCxDQUF0RCxFQUFnWixnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxjQUFYLEVBQTVCLEVBQXdELGdCQUFNLGFBQU4sQ0FBb0IsR0FBcEIsRUFBeUIsSUFBekIsRUFBK0IsZUFBZSxXQUFmLENBQXZGLENBQWhaLENBQVIsQ0FMSzs7OztZQVBQOzs7bUJBZVMseUJBQVEsVUFBQyxLQUFELEVBQVEsUUFBUixFQUFxQjtBQUN4QyxZQUFPLEVBQUUsZ0JBQWdCLE1BQU0sUUFBTixDQUFlLGVBQWYsQ0FBK0IsU0FBUyxNQUFULENBQWdCLEVBQWhCLENBQS9DLEVBQVQsQ0FEd0M7RUFBckIsRUFFcEIsRUFBRSx5Q0FBRixFQUZZLEVBRVMsVUFGVCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmY7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBdEJBLEtBQUksV0FBVyxTQUFDLElBQVEsVUFBSyxRQUFMLElBQWtCLE9BQU8sTUFBUCxJQUFpQixVQUFTLENBQVQsRUFBWTtBQUNuRSxVQUFLLElBQUksQ0FBSixFQUFPLElBQUksQ0FBSixFQUFPLElBQUksVUFBVSxNQUFWLEVBQWtCLElBQUksQ0FBSixFQUFPLEdBQWhELEVBQXFEO0FBQ2pELGFBQUksVUFBVSxDQUFWLENBQUosQ0FEaUQ7QUFFakQsY0FBSyxJQUFJLENBQUosSUFBUyxDQUFkO0FBQWlCLGlCQUFJLE9BQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxDQUFyQyxFQUF3QyxDQUF4QyxDQUFKLEVBQ2IsRUFBRSxDQUFGLElBQU8sRUFBRSxDQUFGLENBQVAsQ0FEYTtVQUFqQjtNQUZKO0FBS0EsWUFBTyxDQUFQLENBTm1FO0VBQVo7QUFRM0QsS0FBSSxhQUFhLFNBQUMsSUFBUSxVQUFLLFVBQUwsSUFBb0IsVUFBVSxVQUFWLEVBQXNCLE1BQXRCLEVBQThCLEdBQTlCLEVBQW1DLElBQW5DLEVBQXlDO0FBQ25GLFNBQUksSUFBSSxVQUFVLE1BQVY7U0FBa0IsSUFBSSxJQUFJLENBQUosR0FBUSxNQUFSLEdBQWlCLFNBQVMsSUFBVCxHQUFnQixPQUFPLE9BQU8sd0JBQVAsQ0FBZ0MsTUFBaEMsRUFBd0MsR0FBeEMsQ0FBUCxHQUFzRCxJQUF0RTtTQUE0RSxDQUEzSCxDQURtRjtBQUVuRixTQUFJLFFBQU8seURBQVAsS0FBbUIsUUFBbkIsSUFBK0IsT0FBTyxRQUFRLFFBQVIsS0FBcUIsVUFBNUIsRUFBd0MsSUFBSSxRQUFRLFFBQVIsQ0FBaUIsVUFBakIsRUFBNkIsTUFBN0IsRUFBcUMsR0FBckMsRUFBMEMsSUFBMUMsQ0FBSixDQUEzRSxLQUNLLEtBQUssSUFBSSxJQUFJLFdBQVcsTUFBWCxHQUFvQixDQUFwQixFQUF1QixLQUFLLENBQUwsRUFBUSxHQUE1QztBQUFpRCxhQUFJLElBQUksV0FBVyxDQUFYLENBQUosRUFBbUIsSUFBSSxDQUFDLElBQUksQ0FBSixHQUFRLEVBQUUsQ0FBRixDQUFSLEdBQWUsSUFBSSxDQUFKLEdBQVEsRUFBRSxNQUFGLEVBQVUsR0FBVixFQUFlLENBQWYsQ0FBUixHQUE0QixFQUFFLE1BQUYsRUFBVSxHQUFWLENBQTVCLENBQWhCLElBQStELENBQS9ELENBQTNCO01BQWpELE9BQ0UsSUFBSSxDQUFKLElBQVMsQ0FBVCxJQUFjLE9BQU8sY0FBUCxDQUFzQixNQUF0QixFQUE4QixHQUE5QixFQUFtQyxDQUFuQyxDQUFkLEVBQXFELENBQXJELENBSjRFO0VBQXpDOztBQWU5QyxLQUFNLFNBQVMsb0JBQVEsR0FBUixDQUFUO0FBQ04sS0FBSTtlQUFhOztBQUNiLGNBRGEsSUFDYixDQUFZLEtBQVosRUFBbUI7K0JBRE4sTUFDTTs7NEVBRE4saUJBRUgsUUFEUzs7QUFFZixlQUFLLEtBQUwsR0FBYTtBQUNULGdDQUFtQixLQUFuQjtVQURKLENBRmU7O01BQW5COztrQkFEYTs7NkNBVU87QUFDaEIsa0JBQUssS0FBTCxDQUFXLFVBQVgsR0FEZ0I7QUFFaEIsa0JBQUssS0FBTCxDQUFXLGdCQUFYLEdBRmdCOzs7O21EQUlNLFdBQVc7QUFDakMsaUJBQUksS0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixVQUFuQixJQUFpQyxDQUFDLFVBQVUsT0FBVixDQUFrQixVQUFsQixFQUE4QjtBQUNoRSxxQkFBSSxVQUFVLE9BQVYsQ0FBa0IsSUFBbEIsQ0FBdUIsSUFBdkIsS0FBZ0MsU0FBaEMsRUFBMkM7O0FBRTNDLDBCQUFLLFFBQUwsQ0FBYztBQUNWLDRDQUFtQixJQUFuQjtzQkFESixFQUYyQztrQkFBL0M7Y0FESjs7OztrQ0FTSztBQUNMLGlCQUFJLGNBQWMsS0FBSyxLQUFMLENBQVcsV0FBWCxDQURiO0FBRUwsaUJBQUksV0FBVyxLQUFLLEtBQUwsQ0FBVyxVQUFYLEdBQXdCLEtBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsSUFBdEIsR0FBNkIsRUFBckQsQ0FGVjtBQUdMLGlCQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsVUFBWCxHQUF3QixLQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLEtBQXRCLENBQzlCLE1BRDhCLENBQ3ZCO3dCQUFRLFFBQVEsS0FBSyxPQUFMO2NBQWhCLENBRHVCLENBRTlCLEdBRjhCLENBRTFCO3dCQUFRLEtBQUssT0FBTDtjQUFSLENBRkUsR0FFc0IsRUFGdEIsQ0FITjtBQU1MLG9CQUFRLGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsSUFBM0IsRUFBaUMsZ0JBQU0sYUFBTixpQkFBMEIsRUFBQyxXQUFXLE1BQVgsRUFBM0IsQ0FBakMsRUFBaUYsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcsS0FBWCxFQUE1QixFQUErQyxLQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLElBQW5CLENBQXdCLElBQXhCLEtBQWlDLFNBQWpDLElBQThDLENBQUMsS0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixVQUFuQixHQUFpQyxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxZQUFYLEVBQTVCLEVBQXNELGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsRUFBQyxXQUFXLE1BQVgsRUFBNUIsRUFBZ0QsT0FBaEQsQ0FBdEQsRUFBZ0gsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcsWUFBWCxFQUE1QixFQUFzRCxjQUF0RCxDQUFoSCxFQUF1TCxnQkFBTSxhQUFOLGVBQTRCLEVBQUMsSUFBSSxTQUFKLEVBQTdCLEVBQTZDLElBQTdDLENBQXZMLENBQWhGLEdBQThULElBQTlULEVBQW9VLGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsRUFBQyxXQUFXLFVBQVgsRUFBNUIsRUFBb0QsZ0JBQU0sYUFBTiw0QkFBcUMsRUFBQyxjQUFjLFdBQWQsRUFBMkIsT0FBTyxNQUFQLEVBQWpFLENBQXBELEVBQXNJLGdCQUFNLGFBQU4sNEJBQXFDLEVBQUMsY0FBYyxJQUFkLEVBQW9CLE9BQU8sUUFBUCxFQUFpQiw2QkFBMEIsS0FBSyxLQUFMLENBQVcsVUFBWCxHQUF3QixLQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLEVBQXRCLEdBQTJCLEVBQW5ELENBQTFCLEVBQTNFLENBQXRJLEVBQXNTLGdCQUFNLGFBQU4sb0JBQTBCLFNBQVMsRUFBVCxFQUFhLEVBQUUsV0FBVyxNQUFYLEVBQWYsRUFBb0MsRUFBQyxXQUFXLFdBQVgsRUFBd0IsSUFBSSxjQUFKLEVBQTdELENBQTFCLEVBQTZHLFdBQTdHLENBQXRTLENBQW5YLEVBQXF4QixnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxVQUFYLEVBQTVCLEVBQW9ELEtBQUssS0FBTCxDQUFXLGlCQUFYLEdBQWdDLGdCQUFNLGFBQU4scUJBQThCLEVBQUMsT0FBTyxTQUFQLEVBQWtCLE1BQU0sRUFBTixFQUFqRCxDQUFoQyxHQUErRixJQUEvRixDQUF6MEIsQ0FBakYsQ0FBUixDQU5LOzs7O3lDQWpCbUI7aUJBQVQsbUJBQVM7O0FBQ3hCLG9CQUFPLE1BQU0sUUFBTixDQUFlLHdCQUFmLENBQVAsQ0FEd0I7Ozs7WUFQZjtvQkFBYjtBQWlDSixRQUFPLFdBQVcsQ0FDZCwrQkFBVyxNQUFYLENBRGMsQ0FBWCxFQUVKLElBRkksQ0FBUDtBQUdBLFVBQVMsZUFBVCxDQUF5QixLQUF6QixFQUFnQyxRQUFoQyxFQUEwQzs7QUFFdEMsWUFBTztBQUNILG9CQUFXLEVBQVg7QUFDQSxzQkFBYSxNQUFNLFVBQU4sQ0FBaUIsS0FBakIsQ0FBdUIsTUFBdkIsR0FDUCxNQUFNLFVBQU4sQ0FBaUIsS0FBakIsQ0FBdUIsTUFBdkIsQ0FBOEIsR0FBOUIsQ0FBa0MsR0FBbEMsQ0FBc0M7b0JBQU0sTUFBTSxRQUFOLENBQWUsS0FBZixDQUFxQixFQUFyQjtVQUFOLENBRC9CLEdBRVAsRUFGTztBQUdiLGtCQUFTLE1BQU0sT0FBTjs7QUFFVCxxQkFBWSxZQUFPO0FBQ2Ysa0JBQUssSUFBSSxJQUFKLElBQVksTUFBTSxRQUFOLENBQWUsZUFBZixFQUFnQztBQUM3Qyx3QkFBTyxNQUFNLFFBQU4sQ0FBZSxlQUFmLENBQStCLElBQS9CLENBQVAsQ0FENkM7Y0FBakQ7VUFEUyxFQUFiO01BUEosQ0FGc0M7RUFBMUM7bUJBZ0JlLHlCQUFRLGVBQVIsRUFBeUIsRUFBRSw2QkFBRixFQUFjLHlDQUFkLEVBQXpCLEVBQTJELElBQTNELEU7Ozs7Ozs7Ozs7OztBQzVFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7S0FDTTs7Ozs7OztBQUlGLGNBSkUsT0FJRixDQUFZLEtBQVosRUFBbUI7K0JBSmpCLFNBSWlCOzt1RUFKakIsb0JBS1EsUUFEUztNQUFuQjs7a0JBSkU7OzZDQU9rQjtBQUNoQixrQkFBSyxLQUFMLENBQVcsVUFBWCxHQURnQjtBQUVoQixrQkFBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixVQUF0QixFQUZnQjs7OztrQ0FJWDtBQUNMLGlCQUFJLGNBQWMsS0FBSyxLQUFMLENBQVcsV0FBWCxDQURiO0FBRUwsb0JBQVEsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcsU0FBWCxFQUE1QixFQUFtRCxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxhQUFYLEVBQTVCLEVBQXVELGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsRUFBQyxXQUFXLGFBQVgsRUFBNUIsRUFBdUQsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLEtBQUssa0RBQUwsRUFBeUQsS0FBSyxhQUFMLEVBQXJGLENBQXZELENBQXZELEVBQTBOLGdCQUFNLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEIsRUFBQyxXQUFXLFVBQVgsRUFBN0IsRUFBcUQsVUFBckQsQ0FBMU4sRUFBNFIsZ0JBQU0sYUFBTixDQUFvQixNQUFwQixFQUE0QixFQUFDLFdBQVcsU0FBWCxFQUE3QixFQUFvRCxrQkFBcEQsQ0FBNVIsRUFBcVcsZ0JBQU0sYUFBTixlQUE0QixJQUE1QixFQUFrQyxJQUFsQyxDQUFyVyxDQUFuRCxFQUFrYyxnQkFBTSxhQUFOLG1CQUE0QixFQUFDLE1BQU0sQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsQ0FBTixFQUEwQixTQUFTLENBQVQsRUFBdkQsQ0FBbGMsRUFBdWdCLGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsSUFBM0IsRUFBaUMsZ0JBQU0sYUFBTiw0QkFBcUMsRUFBQyxPQUFPLElBQVAsRUFBYSxjQUFjLFdBQWQsRUFBbkQsQ0FBakMsQ0FBdmdCLENBQVIsQ0FGSzs7OztZQVhQOzs7QUFnQk4sVUFBUyxlQUFULENBQXlCLEtBQXpCLEVBQWdDLFFBQWhDLEVBQTBDO0FBQ3RDLFlBQU87QUFDSCxrQkFBUyxNQUFNLE9BQU47QUFDVCxzQkFBYSxNQUFNLFVBQU4sQ0FBaUIsS0FBakIsQ0FBdUIsTUFBdkIsR0FDUCxNQUFNLFVBQU4sQ0FBaUIsS0FBakIsQ0FBdUIsTUFBdkIsQ0FBOEIsR0FBOUIsQ0FBa0MsR0FBbEMsQ0FBc0M7b0JBQU0sTUFBTSxRQUFOLENBQWUsS0FBZixDQUFxQixFQUFyQjtVQUFOLENBRC9CLEdBRVAsRUFGTztNQUZqQixDQURzQztFQUExQzttQkFRZSx5QkFBUSxlQUFSLEVBQXlCLEVBQUUsMkNBQUYsRUFBb0IsK0JBQXBCLEVBQWdDLDJDQUFoQyxFQUFrRCwrQkFBbEQsRUFBekIsRUFBeUYsT0FBekYsRTs7Ozs7Ozs7Ozs7Ozs7QUM5QmY7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0tBQ007OztBQUNGLGNBREUsSUFDRixDQUFZLEtBQVosRUFBbUI7K0JBRGpCLE1BQ2lCOzt1RUFEakIsaUJBRVEsUUFEUztNQUFuQjs7a0JBREU7OzZDQUlrQjs7O2tDQUVYO0FBQ0wsb0JBQVEsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcsVUFBWCxFQUE1QixFQUFvRCxLQUFLLEtBQUwsQ0FBVyxhQUFYLENBQXlCLE1BQXpCLENBQWdDO3dCQUFRLEtBQUssT0FBTDtjQUFSLENBQWhDLENBQXNELE1BQXRELEdBQStELENBQS9ELEdBQ3JELGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsRUFBQyxXQUFXLGVBQVgsRUFBNUIsRUFBeUQsS0FBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixHQUF6QixDQUE2QixVQUFDLElBQUQsRUFBTyxLQUFQO3dCQUFrQixnQkFBTSxhQUFOLGtCQUEyQixFQUFDLEtBQUssS0FBTCxFQUFZLE1BQU0sS0FBSyxJQUFMLEVBQVcsU0FBUyxLQUFLLE9BQUwsRUFBYyxTQUFTLEtBQUssT0FBTCxFQUF6RjtjQUFsQixDQUF0RixDQURxRCxHQUV0RCxJQUZzRCxFQUVoRCxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBRlosQ0FESzs7OztZQU5QOzs7bUJBWVMseUJBQVE7WUFBVSxFQUFFLGVBQWUsTUFBTSxVQUFOLENBQWlCLGFBQWpCO0VBQTNCLEVBQThELEVBQUUsMkNBQUYsRUFBdEUsRUFBNEYsSUFBNUYsRTs7Ozs7Ozs7Ozs7Ozs7QUNoQmY7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBQ007Ozs7Ozs7QUFJRixjQUpFLE9BSUYsQ0FBWSxLQUFaLEVBQW1COytCQUpqQixTQUlpQjs7dUVBSmpCLG9CQUtRLFFBRFM7TUFBbkI7O2tCQUpFOzs2Q0FPa0I7OzttREFFTSxXQUFXOztBQUVqQyxpQkFBSSxVQUFVLE9BQVYsQ0FBa0IsVUFBbEIsS0FBaUMsS0FBakMsSUFBMEMsS0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixVQUFuQixFQUErQjtBQUN6RSxxQkFBTSxTQUFTLFVBQVUsT0FBVixDQUFrQixJQUFsQixDQUF1QixFQUF2QixDQUQwRDtBQUV6RSxzQkFBSyxLQUFMLENBQVcsWUFBWCxDQUF3QixNQUF4QixFQUZ5RTtjQUE3RTs7OztrQ0FLSztBQUNMLGlCQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsT0FBWCxDQUROO0FBRUwsb0JBQVEsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcsVUFBWCxFQUE1QixFQUFvRCxnQkFBTSxhQUFOLGlCQUEwQixFQUFDLFdBQVcsZUFBWCxFQUEzQixDQUFwRCxFQUE2RyxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxjQUFYLEVBQTVCLEVBQXdELGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsRUFBQyxXQUFXLGFBQVgsRUFBNUIsRUFBdUQsZ0JBQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixFQUFDLFdBQVcsWUFBWCxFQUEzQixFQUFxRCxJQUFyRCxDQUF2RCxFQUFtSCxnQkFBTSxhQUFOLG1CQUE0QixFQUFDLE1BQU0sQ0FBQyxJQUFELEVBQU8sTUFBUCxDQUFOLEVBQXNCLFNBQVMsQ0FBVCxFQUFuRCxDQUFuSCxDQUF4RCxFQUE2TyxnQkFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLEVBQUMsV0FBVyxTQUFYLEVBQTNCLEVBQWtELGdCQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsRUFBQyxXQUFXLFFBQVgsRUFBM0IsRUFBaUQsZ0JBQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUExQixFQUFnQyxLQUFoQyxDQUFqRCxFQUF5RixnQkFBTSxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLEVBQUMsV0FBVyxjQUFYLEVBQTdCLEVBQXlELHVCQUF6RCxFQUFrRixnQkFBTSxhQUFOLENBQW9CLFFBQXBCLEVBQThCLElBQTlCLEVBQW9DLEtBQUssUUFBTCxDQUF0SCxDQUF6RixFQUFnTyxnQkFBTSxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLEVBQUMsV0FBVyxNQUFYLEVBQTdCLEVBQWlELElBQWpELENBQWhPLENBQWxELEVBQTJVLGdCQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsRUFBQyxXQUFXLFFBQVgsRUFBM0IsRUFBaUQsZ0JBQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixJQUExQixFQUFnQyxJQUFoQyxDQUFqRCxFQUF3RixnQkFBTSxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLEVBQUMsV0FBVyxjQUFYLEVBQTdCLEVBQXlELEtBQUssS0FBTCxDQUFqSixFQUE4SixnQkFBTSxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLEVBQUMsV0FBVyxNQUFYLEVBQTdCLEVBQWlELElBQWpELENBQTlKLENBQTNVLEVBQWtpQixnQkFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLEVBQUMsV0FBVyxRQUFYLEVBQTNCLEVBQWlELGdCQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBMUIsRUFBZ0MsSUFBaEMsQ0FBakQsRUFBd0YsZ0JBQU0sYUFBTixDQUFvQixNQUFwQixFQUE0QixFQUFDLFdBQVcsY0FBWCxFQUE3QixFQUF5RCxRQUF6RCxDQUF4RixFQUE0SixnQkFBTSxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLEVBQUMsV0FBVyxNQUFYLEVBQTdCLEVBQWlELElBQWpELENBQTVKLENBQWxpQixFQUF1dkIsZ0JBQU0sYUFBTixDQUFvQixJQUFwQixFQUEwQixFQUFDLFdBQVcsUUFBWCxFQUEzQixFQUFpRCxnQkFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDLFVBQWhDLENBQWpELEVBQThGLGdCQUFNLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEIsRUFBQyxXQUFXLGFBQVgsRUFBN0IsRUFBd0Qsa0JBQXhELENBQTlGLEVBQTJLLGdCQUFNLGFBQU4scUJBQThCLEVBQUMsSUFBSSxJQUFKLEVBQS9CLENBQTNLLENBQXZ2QixDQUE3TyxDQUE3RyxDQUFSLENBRks7Ozs7WUFoQlA7OzttQkFxQlMseUJBQVEsaUJBQVM7QUFDNUIsU0FBTSxTQUFTLE1BQU0sT0FBTixDQUFjLElBQWQsQ0FBbUIsSUFBbkIsS0FBNEIsU0FBNUIsR0FBd0MsTUFBTSxPQUFOLENBQWMsSUFBZCxDQUFtQixFQUFuQixHQUF3QixFQUFoRSxDQURhO0FBRTVCLFNBQU0sVUFBVSxVQUFVLENBQUMsaUJBQUUsT0FBRixDQUFVLE1BQU0sUUFBTixDQUFlLFFBQWYsQ0FBWCxHQUFzQyxNQUFNLFFBQU4sQ0FBZSxRQUFmLENBQXdCLE1BQXhCLENBQWhELEdBQWtGLEVBQWxGLENBRlk7QUFHNUIsWUFBTztBQUNILHVCQUFjLE1BQU0sWUFBTjtBQUNkLGtCQUFTLE1BQU0sT0FBTjtBQUNULHlCQUhHO01BQVAsQ0FINEI7RUFBVCxFQVFwQixFQUFFLDJDQUFGLEVBQW9CLDJCQUFwQixFQUE4QixtQ0FBOUIsRUFSWSxFQVFrQyxPQVJsQyxFOzs7Ozs7Ozs7Ozs7OztBQzVCZjs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0tBQ007OztBQUNGLGNBREUsTUFDRixDQUFZLEtBQVosRUFBbUI7K0JBRGpCLFFBQ2lCOzs0RUFEakIsbUJBRVEsUUFEUzs7QUFFZixlQUFLLEtBQUwsR0FBYTtBQUNULG9CQUFPLEVBQVA7QUFDQSx1QkFBVSxFQUFWO1VBRkosQ0FGZTs7TUFBbkI7O2tCQURFOztzQ0FRVyxPQUFPOzs7QUFDaEIsbUJBQU0sY0FBTixHQURnQjtBQUVoQixpQkFBSSxTQUFTO0FBQ1Qsd0JBQU8sS0FBSyxLQUFMLENBQVcsS0FBWDtBQUNQLDJCQUFVLEtBQUssS0FBTCxDQUFXLFFBQVg7Y0FGVixDQUZZO0FBTWhCLG9DQUFXLG1CQUFTLEtBQVQsU0FBWCxFQUFpQyxFQUFFLFFBQVEsTUFBUixFQUFnQixNQUFNLE1BQU4sRUFBbkQsRUFBbUUsSUFBbkUsQ0FBd0UsZUFBTztBQUMzRSx3QkFBSyxLQUFMLENBQVcsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFEMkU7QUFFM0UsNEJBQVcsWUFBWTtBQUNuQixpREFBZSxJQUFmLENBQW9CLEdBQXBCLEVBRG1CO2tCQUFaLEVBRVIsR0FGSCxFQUYyRTtjQUFQLENBQXhFLENBS0csS0FMSCxDQUtTLFVBQUMsR0FBRCxFQUFTO0FBQ2Qsd0JBQUssS0FBTCxDQUFXLGdCQUFYLENBQTRCLElBQUksT0FBSixDQUE1QixDQURjO2NBQVQsQ0FMVCxDQU5nQjs7OztxQ0FlUixPQUFPO0FBQ2Ysa0JBQUssUUFBTCxxQkFBaUIsTUFBTSxNQUFOLENBQWEsSUFBYixFQUFvQixNQUFNLE1BQU4sQ0FBYSxLQUFiLENBQXJDLEVBRGU7Ozs7a0NBR1Y7QUFDTCxvQkFBUSxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLElBQTNCLEVBQWlDLGdCQUFNLGFBQU4saUJBQTBCLEVBQUMsV0FBVyxRQUFYLEVBQTNCLENBQWpDLEVBQW1GLGdCQUFNLGFBQU4scUJBQThCLElBQTlCLENBQW5GLEVBQXdILGdCQUFNLGFBQU4sc0JBQStCLElBQS9CLEVBQXFDLGdCQUFNLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEIsRUFBQyxXQUFXLG1CQUFYLEVBQWdDLFFBQVcsbUJBQVMsS0FBVCxTQUFYLEVBQWlDLFFBQVEsTUFBUixFQUE5RixFQUErRyxnQkFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLEVBQUMsV0FBVyxZQUFYLEVBQTNCLEVBQXFELE1BQXJELENBQS9HLEVBQTZLLGdCQUFNLGFBQU4sY0FBMkIsRUFBQyxVQUFVLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixJQUF0QixDQUFWLEVBQXVDLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFrQixNQUFNLE9BQU4sRUFBZSxhQUFhLFFBQWIsRUFBM0csQ0FBN0ssRUFBaVQsZ0JBQU0sYUFBTixjQUEyQixFQUFDLFVBQVUsS0FBSyxXQUFMLENBQWlCLElBQWpCLENBQXNCLElBQXRCLENBQVYsRUFBdUMsT0FBTyxLQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQXFCLE1BQU0sVUFBTixFQUFrQixhQUFhLElBQWIsRUFBbUIsTUFBTSxVQUFOLEVBQXBJLENBQWpULEVBQXljLGdCQUFNLGFBQU4sZUFBNEIsRUFBQyxXQUFXLElBQVgsRUFBaUIsT0FBTyxNQUFQLEVBQWUsU0FBUyxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBVCxFQUE3RCxFQUFxRyxJQUFyRyxDQUF6YyxFQUFxakIsZ0JBQU0sYUFBTixDQUFvQixHQUFwQixFQUF5QixFQUFDLFdBQVcsTUFBWCxFQUExQixFQUE4QyxPQUE5QyxFQUF1RCxnQkFBTSxhQUFOLG9CQUEwQixFQUFDLElBQUksU0FBSixFQUEzQixFQUEyQyxJQUEzQyxDQUF2RCxDQUFyakIsQ0FBckMsQ0FBeEgsQ0FBUixDQURLOzs7O1lBMUJQOzs7bUJBOEJTLHlCQUFRO1lBQVU7QUFDN0IsdUJBQWMsTUFBTSxVQUFOLENBQWlCLFlBQWpCO0FBQ2QsZUFBTSxNQUFNLElBQU47O0VBRmEsRUFHbkIsRUFBRSwyQ0FBRixFQUhXLEVBR1csTUFIWCxFOzs7Ozs7Ozs7Ozs7OztBQ3hDZjs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0tBQ007OztBQUNGLGNBREUsTUFDRixDQUFZLEtBQVosRUFBbUI7K0JBRGpCLFFBQ2lCOzs0RUFEakIsbUJBRVEsUUFEUzs7QUFFZixlQUFLLEtBQUwsR0FBYTtBQUNULHVCQUFVLEVBQVY7QUFDQSxvQkFBTyxFQUFQO0FBQ0EsdUJBQVUsRUFBVjtVQUhKLENBRmU7O01BQW5COztrQkFERTs7c0NBU1csT0FBTzs7O0FBQ2hCLG1CQUFNLGNBQU4sR0FEZ0I7QUFFaEIsaUJBQUksU0FBUztBQUNULDJCQUFVLEtBQUssS0FBTCxDQUFXLFFBQVg7QUFDVix3QkFBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYO0FBQ1AsMkJBQVUsS0FBSyxLQUFMLENBQVcsUUFBWDtjQUhWLENBRlk7QUFPaEIsb0NBQVcsbUJBQVMsS0FBVCxVQUFYLEVBQWtDLEVBQUUsUUFBUSxNQUFSLEVBQWdCLE1BQU0sTUFBTixFQUFwRCxFQUNLLElBREwsQ0FDVSxlQUFPO0FBQ2Isd0JBQUssS0FBTCxDQUFXLGdCQUFYLENBQTRCLE9BQTVCLEVBRGE7QUFFYiw0QkFBVyxZQUFZO0FBQ25CLGlEQUFlLElBQWYsQ0FBb0IsR0FBcEIsRUFEbUI7a0JBQVosRUFFUixHQUZILEVBRmE7Y0FBUCxFQUtQLGVBQU87QUFDTix3QkFBSyxLQUFMLENBQVcsZ0JBQVgsQ0FBNEIsSUFBSSxPQUFKLEVBQWEsT0FBekMsRUFETTtjQUFQLENBTkgsQ0FQZ0I7Ozs7cUNBaUJSLE9BQU87QUFDZixrQkFBSyxRQUFMLHFCQUFpQixNQUFNLE1BQU4sQ0FBYSxJQUFiLEVBQW9CLE1BQU0sTUFBTixDQUFhLEtBQWIsQ0FBckMsRUFEZTs7OztrQ0FHVjtBQUNMLG9CQUFRLGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsSUFBM0IsRUFBaUMsZ0JBQU0sYUFBTixpQkFBMEIsRUFBQyxXQUFXLFFBQVgsRUFBM0IsQ0FBakMsRUFBbUYsZ0JBQU0sYUFBTixxQkFBOEIsSUFBOUIsQ0FBbkYsRUFBd0gsZ0JBQU0sYUFBTixzQkFBK0IsSUFBL0IsRUFBcUMsZ0JBQU0sYUFBTixDQUFvQixNQUFwQixFQUE0QixFQUFDLFdBQVcsbUJBQVgsRUFBZ0MsUUFBUSxNQUFSLEVBQWdCLFFBQVEsU0FBUixFQUE3RSxFQUFpRyxnQkFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLEVBQUMsV0FBVyxZQUFYLEVBQTNCLEVBQXFELFVBQXJELENBQWpHLEVBQW1LLGdCQUFNLGFBQU4sY0FBMkIsRUFBQyxVQUFVLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixJQUF0QixDQUFWLEVBQXVDLE9BQU8sS0FBSyxLQUFMLENBQVcsUUFBWCxFQUFxQixNQUFNLFVBQU4sRUFBa0IsYUFBYSxLQUFiLEVBQWpILENBQW5LLEVBQTBTLGdCQUFNLGFBQU4sY0FBMkIsRUFBQyxVQUFVLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixJQUF0QixDQUFWLEVBQXVDLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFrQixNQUFNLE9BQU4sRUFBZSxhQUFhLElBQWIsRUFBM0csQ0FBMVMsRUFBMGEsZ0JBQU0sYUFBTixjQUEyQixFQUFDLFVBQVUsS0FBSyxXQUFMLENBQWlCLElBQWpCLENBQXNCLElBQXRCLENBQVYsRUFBdUMsT0FBTyxLQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQXFCLE1BQU0sVUFBTixFQUFrQixhQUFhLEtBQWIsRUFBb0IsTUFBTSxVQUFOLEVBQXJJLENBQTFhLEVBQW1rQixnQkFBTSxhQUFOLGVBQTRCLEVBQUMsV0FBVyxJQUFYLEVBQWlCLE9BQU8sTUFBUCxFQUFlLFNBQVMsS0FBSyxZQUFMLENBQWtCLElBQWxCLENBQXVCLElBQXZCLENBQVQsRUFBN0QsRUFBcUcsSUFBckcsQ0FBbmtCLEVBQStxQixnQkFBTSxhQUFOLENBQW9CLEdBQXBCLEVBQXlCLEVBQUMsV0FBVyxNQUFYLEVBQTFCLEVBQThDLE9BQTlDLEVBQXVELGdCQUFNLGFBQU4sb0JBQTBCLEVBQUMsSUFBSSxTQUFKLEVBQTNCLEVBQTJDLElBQTNDLENBQXZELENBQS9xQixDQUFyQyxDQUF4SCxDQUFSLENBREs7Ozs7WUE3QlA7OzttQkFpQ1MseUJBQVE7WUFBVTtBQUM3Qix1QkFBYyxNQUFNLFVBQU4sQ0FBaUIsWUFBakI7QUFDZCxlQUFNLE1BQU0sSUFBTjs7RUFGYSxFQUduQixFQUFFLDJDQUFGLEVBSFcsRUFHVyxNQUhYLEU7Ozs7Ozs7Ozs7OztBQzNDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7S0FBWTs7QUFDWjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsS0FBTSxVQUFVLEVBQUUsMkJBQUYsRUFBYSx5QkFBYixFQUFWOztLQUNBOzs7QUFDRixjQURFLE1BQ0YsQ0FBWSxLQUFaLEVBQW1COytCQURqQixRQUNpQjs7NEVBRGpCLG1CQUVRLFFBRFM7O0FBRWYsZUFBSyxNQUFMLEdBQWMsTUFBTSxNQUFOLENBQWEsRUFBYixDQUZDO0FBR2YsZUFBSyxLQUFMLEdBQWE7QUFDVCx3QkFBVyxJQUFYO0FBQ0EsaUNBQW9CLEtBQXBCO0FBQ0EsK0JBQWtCLEtBQWxCO0FBQ0EsNEJBQWUsS0FBZjtBQUNBLDJCQUFjLElBQWQ7QUFDQSxtQ0FBc0IsS0FBdEI7QUFDQSx3QkFBVyxDQUFYO0FBQ0EsMEJBQWEsQ0FBYjtBQUNBLDhCQUFpQixJQUFqQjtBQUNBLDZCQUFnQixDQUFoQjtBQUNBLG1CQUFNLHdCQUFOO0FBQ0EsbUNBQXNCLEtBQXRCO1VBWkosQ0FIZTtBQWlCZixlQUFLLHNCQUFMLEdBQThCLE1BQUssc0JBQUwsQ0FBNEIsSUFBNUIsT0FBOUIsQ0FqQmU7O01BQW5COztrQkFERTs7a0RBb0J1QjtBQUNyQixrQkFBSyxRQUFMLENBQWM7QUFDVix1Q0FBc0IsQ0FBQyxLQUFLLEtBQUwsQ0FBVyxvQkFBWDtjQUQzQixFQURxQjs7OztrQ0FLaEIsVUFBVTtBQUNmLGlCQUFJLFlBQVksS0FBSyxLQUFMLENBQVcsZUFBWCxDQUEyQixLQUEzQixDQUFpQyxRQUFqQyxDQUEwQyxNQUExQyxDQUREO0FBRWYsaUJBQUksYUFBYSxLQUFLLEtBQUwsQ0FBVyxlQUFYLENBQTJCLEtBQTNCLENBQWlDLElBQWpDLENBQXNDLFVBQXRDLENBRkY7QUFHZixpQkFBSSxTQUFTLFlBQVksVUFBWixDQUhFO0FBSWYsaUJBQUksV0FBVyxDQUFYLEVBQWM7QUFDZCxzQkFBSyxRQUFMLENBQWM7QUFDVixrQ0FBYSxZQUFXLGdCQUFYLENBQTRCLFFBQTVCLEVBQXNDLFNBQXRDLENBQWI7QUFDQSxnQ0FBVyxXQUFXLE1BQVg7a0JBRmYsRUFEYztBQUtkLDBCQUFTLElBQVQsQ0FBYyxTQUFkLEdBQTBCLFlBQVksVUFBWixHQUF5QixRQUF6QixDQUxaO2NBQWxCLE1BT0s7QUFDRCxzQkFBSyxRQUFMLENBQWM7QUFDVixrQ0FBYSxRQUFiO0FBQ0EsZ0NBQVcsU0FBUyxRQUFULEdBQW9CLFNBQXBCO2tCQUZmLEVBREM7QUFLRCwwQkFBUyxJQUFULENBQWMsU0FBZCxHQUEwQixhQUFhLFFBQWIsQ0FMekI7Y0FQTDs7Ozs2Q0FlZ0I7OztBQUNoQixrQkFBSyxtQkFBTCxHQUEyQixZQUFNO0FBQzdCLHdCQUFLLFFBQUwsQ0FBYztBQUNWLGdDQUFXLFNBQVMsSUFBVCxDQUFjLFNBQWQ7a0JBRGYsRUFENkI7Y0FBTixDQURYO0FBTWhCLGtCQUFLLHFCQUFMLEdBQTZCLFlBQU07QUFDL0Isd0JBQUssUUFBTCxDQUFjO0FBQ1Ysa0NBQWEsT0FBTyxVQUFQO2tCQURqQixFQUQrQjtjQUFOLENBTmI7QUFXaEIsa0JBQUssY0FBTCxHQUFzQixZQUFNO0FBQ3hCLHdCQUFLLFFBQUwsQ0FBYztBQUNWLDJCQUFNLHdCQUFOO2tCQURKLEVBRHdCO2NBQU4sQ0FYTjtBQWdCaEIsa0JBQUssbUJBQUwsR0FBMkIsWUFBTTtBQUM3QixxQkFBSSxnQkFBZ0IsT0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixNQUFoQixDQURTO0FBRTdCLHdCQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLGlCQUFuQixDQUFxQyxPQUFLLE1BQUwsQ0FBckMsQ0FBa0QsSUFBbEQsQ0FBdUQsa0JBQVU7QUFDN0QseUJBQUksT0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixNQUFoQixHQUF5QixhQUF6QixHQUF5QyxDQUF6QyxFQUE0QztBQUM1QyxnQ0FBSyxRQUFMLENBQWM7QUFDVixpREFBb0IsSUFBcEI7QUFDQSw2Q0FBZ0IsT0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixVQUFoQjswQkFGcEIsRUFENEM7c0JBQWhELE1BTUs7QUFDRCw2QkFBSSxVQUFVLE9BQUssS0FBTCxDQUFXLGVBQVgsQ0FBMkIsS0FBM0IsQ0FBaUMsUUFBakMsQ0FBMEMsTUFBMUMsQ0FEYjtBQUVELDZCQUFJLFNBQVMsVUFBVSxPQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLFVBQWhCLENBRnRCO0FBR0QsNkJBQUksYUFBYSxPQUFLLEtBQUwsQ0FBVyxTQUFYLEdBQXVCLE1BQXZCLENBSGhCO0FBSUQsNkJBQUksU0FBUyxZQUFXLGdCQUFYLENBQTRCLFVBQTVCLEVBQXdDLE9BQXhDLENBQVQsQ0FKSDtBQUtELDZCQUFJLFdBQVc7QUFDWCwyQ0FEVztBQUVYLDZDQUZXO0FBR1gsbURBSFc7MEJBQVgsQ0FMSDtBQVVELHdDQUFLLFdBQUwsQ0FBaUIsT0FBSyxNQUFMLEVBQWEsUUFBOUIsRUFWQztzQkFOTDtrQkFEbUQsQ0FBdkQsQ0FGNkI7Y0FBTjs7QUFoQlgsaUJBd0NoQixDQUFLLG9CQUFMLEdBQTRCLGlCQUFFLFFBQUYsQ0FBVyxLQUFLLG1CQUFMLEVBQTBCLEdBQXJDLENBQTVCOztBQXhDZ0IsbUJBMENoQixDQUFPLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUssbUJBQUwsQ0FBbEMsQ0ExQ2dCO0FBMkNoQixvQkFBTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLLHFCQUFMLENBQWxDLENBM0NnQjtBQTRDaEIsb0JBQU8sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsS0FBSyxjQUFMLENBQWxDLENBNUNnQjs7OztnREE4Q0c7QUFDbkIsb0JBQU8sbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsS0FBSyxvQkFBTCxDQUFyQyxDQURtQjtBQUVuQixvQkFBTyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLLG1CQUFMLENBQXJDLENBRm1CO0FBR25CLG9CQUFPLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUsscUJBQUwsQ0FBckMsQ0FIbUI7QUFJbkIsb0JBQU8sbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsS0FBSyxjQUFMLENBQXJDLENBSm1COzs7O3lDQU1QLE9BQU87QUFDbkIsaUJBQUksS0FBSyxLQUFMLENBQVcsZUFBWCxDQUEyQixLQUEzQixDQUFpQyxJQUFqQyxDQUFzQyxNQUF0QyxLQUFpRCxJQUFqRCxFQUF1RDtBQUN2RCxxQkFBSSxJQUFJLE1BQU0sS0FBTixHQUFjLFNBQVMsSUFBVCxDQUFjLFNBQWQsQ0FEaUM7QUFFdkQscUJBQUksSUFBSSxFQUFKLEVBQVE7QUFDUiwwQkFBSyxRQUFMLENBQWM7QUFDVixvQ0FBVyxJQUFYO3NCQURKLEVBRFE7a0JBQVosTUFLSztBQUNELDBCQUFLLFFBQUwsQ0FBYztBQUNWLG9DQUFXLEtBQVg7c0JBREosRUFEQztrQkFMTDtjQUZKOzs7O2tEQWNxQjtBQUNyQixpQkFBSSxLQUFLLEtBQUwsQ0FBVyxlQUFYLENBQTJCLEtBQTNCLENBQWlDLElBQWpDLENBQXNDLE1BQXRDLEtBQWlELE9BQWpELEVBQTBEO0FBQzFELHNCQUFLLFFBQUwsQ0FBYztBQUNWLGdDQUFXLENBQUMsS0FBSyxLQUFMLENBQVcsU0FBWDtrQkFEaEIsRUFEMEQ7Y0FBOUQ7Ozs7d0NBTVc7QUFDWCxpQkFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FEQTtBQUVYLGlCQUFJLFNBQVMsS0FBSyxNQUFMLENBRkY7QUFHWCxpQkFBSSxPQUFPLHdCQUFQLENBSE87QUFJWCxpQkFBSSxjQUFjLFlBQVcsY0FBWCxDQUEwQixLQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLFVBQW5CLENBQXhDLENBSk87QUFLWCxpQkFBSSxRQUFRLFlBQVcsV0FBWCxDQUF1QixJQUF2QixFQUE2QixXQUE3QixFQUEwQyxJQUExQyxDQUFSLENBTE87QUFNWCwyQ0FBZ0IsaUJBQWhCLEVBQWdDLEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FBaEMsRUFOVztBQU9YLGtCQUFLLFFBQUwsQ0FBYztBQUNWLGdDQUFlLElBQWY7QUFDQSxtQ0FBa0IsS0FBbEI7QUFDQSxrQ0FBaUIsS0FBakI7Y0FISixFQVBXOzs7OytDQWFPO0FBQ2xCLGlCQUFNLFNBQVMsS0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixFQUFsQixDQURHO0FBRWxCLGlCQUFJLFFBQVEsOEJBQWdCLGlCQUFoQixDQUFSOztBQUZjLGlCQUlkLEtBQUosRUFBVztBQUNQLHlCQUFRLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBUixDQURPO0FBRVAsc0JBQUssUUFBTCxDQUFjO0FBQ1Ysb0NBQWUsSUFBZjtBQUNBLHNDQUFpQixLQUFqQjtBQUNBLCtCQUFVLFlBQVcsV0FBWCxDQUF1QixLQUF2QixDQUFWO2tCQUhKLEVBRk87Y0FBWCxNQVFLO0FBQ0Qsc0JBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsU0FBbkIsQ0FBNkIsTUFBN0IsRUFBcUMsQ0FBQyxTQUFELENBQXJDLEVBREM7Y0FSTDs7Ozs2Q0FZZ0IsV0FBVyxXQUFXO0FBQ3RDLGlCQUFJLFVBQVUsSUFBVixJQUFrQixVQUFVLElBQVYsQ0FBZSxPQUFmLElBQTBCLFVBQVUsSUFBVixDQUFlLE9BQWYsQ0FBdUIsSUFBdkIsSUFBK0IsQ0FBQyxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLE9BQWhCLEVBQXlCO0FBQ3JHLHNCQUFLLFFBQUwsQ0FBYztBQUNWLHVDQUFrQixJQUFsQjtBQUNBLCtCQUFVLFVBQVUsSUFBVixDQUFlLE9BQWYsQ0FBdUIsSUFBdkI7a0JBRmQsRUFEcUc7Y0FBekc7QUFNQSxpQkFBSSxDQUFDLGtDQUFxQixLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLFVBQVUsSUFBVixDQUF2QyxFQUF3RDtBQUN4RCxzQkFBSyxRQUFMLENBQWM7QUFDVix1Q0FBa0IsSUFBbEI7a0JBREosRUFEd0Q7Y0FBNUQ7Ozs7NENBTWUsV0FBVyxXQUFXOzs7QUFDckMsaUJBQUksS0FBSyxLQUFMLENBQVcsZ0JBQVgsSUFBK0IsQ0FBQyxVQUFVLGdCQUFWLEVBQTRCO0FBQzVELHNCQUFLLFlBQUwsR0FENEQ7Y0FBaEU7O0FBRHFDLGlCQUtqQyxLQUFLLEtBQUwsQ0FBVyxJQUFYLElBQW1CLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsVUFBaEIsSUFBOEIsS0FBSyxLQUFMLENBQVcsZUFBWCxJQUE4QixDQUFDLEtBQUssS0FBTCxDQUFXLG9CQUFYLEVBQWlDO0FBQ2pILDRCQUFXLFlBQU07QUFDYiw0QkFBSyxRQUFMLENBQWMsT0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixVQUFoQixDQUFkLENBRGE7QUFFYiw0QkFBSyxRQUFMLENBQWM7QUFDViwrQ0FBc0IsSUFBdEI7c0JBREosRUFGYTtrQkFBTixFQUtSLENBTEgsRUFEaUg7Y0FBckg7Ozs7NkNBU2dCO0FBQ2hCLGlCQUFNLFVBQVUsS0FBSyxLQUFMLENBQVcsT0FBWCxDQURBO0FBRWhCLGlCQUFNLFNBQVMsS0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixFQUFsQixDQUZDO0FBR2hCLHFCQUFRLFFBQVIsR0FIZ0I7QUFJaEIscUJBQVEsU0FBUixDQUFrQixNQUFsQjs7QUFKZ0IsaUJBTWhCLENBQUssaUJBQUwsR0FOZ0I7QUFPaEIsa0JBQUssbUJBQUwsR0FQZ0I7Ozs7Z0RBU0c7QUFDbkIsa0JBQUssb0JBQUwsR0FEbUI7QUFFbkIsa0JBQUssUUFBTCxDQUFjO0FBQ1YsdUNBQXNCLEtBQXRCO2NBREosRUFGbUI7Ozs7c0NBTVY7QUFDVCxpQkFBSSxZQUFZLEtBQUssS0FBTCxDQUFXLFNBQVgsQ0FEUDtBQUVULGlCQUFJLGtCQUFrQixLQUFLLEtBQUwsQ0FBVyxlQUFYLENBRmI7QUFHVCxpQkFBSSxTQUFTLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsRUFBbEIsQ0FISjtBQUlULGlCQUFJLE9BQU8sZ0JBQWdCLEtBQWhCLENBQXNCLElBQXRCLENBSkY7QUFLVCxpQkFBSSxTQUFTLGdCQUFnQixLQUFoQixDQUFzQixRQUF0QixDQUErQixNQUEvQixHQUF3QyxLQUFLLFVBQUwsQ0FMNUM7QUFNVCxpQkFBSSxjQUFjLFlBQVcsZ0JBQVgsQ0FBNEIsWUFBWSxNQUFaLEVBQW9CLGdCQUFnQixLQUFoQixDQUFzQixRQUF0QixDQUErQixNQUEvQixDQUE5RCxDQU5LO0FBT1QsaUJBQUksUUFBUSxZQUFXLFdBQVgsQ0FBdUI7QUFDL0IsNEJBQVcsV0FBWDtBQUNBLHlCQUFRLENBQVI7QUFDQSwyQkFBVSxDQUFWO0FBQ0Esd0JBQU8sZ0JBQWdCLEtBQWhCLENBQXNCLFFBQXRCO2NBSkMsQ0FBUixDQVBLO0FBYVQsb0JBQVEsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFNBQVMsS0FBSyxzQkFBTCxDQUE0QixJQUE1QixDQUFpQyxJQUFqQyxDQUFULEVBQTVCLEVBQThFLGdCQUFNLGFBQU4seUJBQWtDLEVBQUMsUUFBUSxNQUFSLEVBQWdCLE1BQU0sSUFBTixFQUFZLFFBQVEsTUFBUixFQUFnQixPQUFPLEtBQVAsRUFBL0UsQ0FBOUUsQ0FBUixDQWJTOzs7OzhDQWVRO0FBQ2pCLGtCQUFLLFFBQUwsQ0FBYztBQUNWLHFDQUFvQixLQUFwQjtjQURKLEVBRGlCOzs7O2tDQUtaOzs7QUFDTCxpQkFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FETjtBQUVMLGlCQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsSUFBWCxDQUZOO0FBR0wsaUJBQUksVUFBVSxDQUNWO0FBQ0ksdUJBQU0sS0FBTjtBQUNBLDJCQUFVLHFCQUFNO0FBQ1osNEJBQUssUUFBTCxDQUFjLElBQWQsU0FBeUIsT0FBSyxLQUFMLENBQVcsY0FBWCxDQUF6QixDQURZO0FBRVosNEJBQUssa0JBQUwsQ0FBd0IsSUFBeEIsU0FGWTtrQkFBTjtjQUhKLEVBUVY7QUFDSSx1QkFBTSxJQUFOO0FBQ0EsMkJBQVUsS0FBSyxrQkFBTCxDQUF3QixJQUF4QixDQUE2QixJQUE3QixDQUFWO2NBVk0sQ0FBVixDQUhDO0FBZ0JMLG9CQUFRLGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsRUFBQywrQkFBNkIsS0FBSyxNQUFMLEVBQWUsYUFBYSxLQUFLLGVBQUwsQ0FBcUIsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBYixFQUF4RSxFQUF1SCxnQkFBTSxhQUFOLGlCQUEwQixFQUFDLFdBQVcsUUFBWCxFQUEzQixDQUF2SCxFQUF5SyxDQUFDLEtBQUssT0FBTCxJQUFnQixDQUFDLEtBQUssS0FBTCxDQUFXLGVBQVgsR0FBOEIsZ0JBQU0sYUFBTixvQkFBNkIsSUFBN0IsQ0FBaEQsR0FBc0YsSUFBdEYsRUFBNEYsS0FBSyxLQUFMLENBQVcsa0JBQVgsR0FBaUMsZ0JBQU0sYUFBTixtQkFBNEIsRUFBQyxTQUFTLE9BQVQsRUFBa0IsU0FBUyxlQUFULEVBQS9DLENBQWpDLEdBQThHLElBQTlHLEVBQW9ILGdCQUFNLGFBQU4sMENBQTZDLEVBQUMsV0FBVyxLQUFYLEVBQWtCLGdCQUFnQixPQUFoQixFQUF5Qix3QkFBd0IsR0FBeEIsRUFBNkIsd0JBQXdCLEdBQXhCLEVBQXRILEVBQW9KLElBQUMsQ0FBSyxLQUFMLENBQVcsU0FBWCxJQUF3QixLQUFLLEtBQUwsQ0FBVyxhQUFYLElBQTZCLEtBQUssS0FBTCxDQUFXLG9CQUFYLEdBQW1DLGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsRUFBQyxXQUFXLGNBQVgsRUFBNUIsRUFBd0QsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcsV0FBWCxFQUE1QixFQUFxRCxnQkFBTSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUMsV0FBVyxNQUFYLEVBQTVCLEVBQWdELGdCQUFNLGFBQU4sb0JBQTBCLEVBQUMsSUFBSSxHQUFKLEVBQTNCLEVBQXFDLGdCQUFNLGFBQU4saUJBQTBCLEVBQUMsTUFBTSxNQUFOLEVBQTNCLENBQXJDLEVBQWdGLGdCQUFNLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEIsSUFBNUIsRUFBa0MsSUFBbEMsQ0FBaEYsQ0FBaEQsQ0FBckQsRUFBZ08sZ0JBQU0sYUFBTixDQUFvQixNQUFwQixFQUE0QixFQUFDLFdBQVcsT0FBWCxFQUE3QixFQUFrRCxLQUFLLEtBQUwsQ0FBbFIsRUFBK1IsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFNBQVMsS0FBSyxzQkFBTCxFQUE2QixXQUFXLFlBQVgsRUFBbEUsRUFBNEYsZ0JBQU0sYUFBTixpQkFBMEIsRUFBQyxNQUFNLE1BQU4sRUFBM0IsQ0FBNUYsQ0FBL1IsRUFBdWEsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcsS0FBWCxFQUE1QixFQUErQyxTQUEvQyxDQUF2YSxFQUFrZSxnQkFBTSxhQUFOLGlCQUEwQixJQUExQixFQUFnQyxLQUFLLEtBQUwsQ0FBVyxvQkFBWCxHQUFtQyxnQkFBTSxhQUFOLDZCQUFzQyxJQUF0QyxDQUFuQyxHQUFrRixJQUFsRixDQUFsZ0IsQ0FBeEQsQ0FBekYsR0FBZ3ZCLElBQWh2QixDQUE3Z0IsRUFBb3dDLElBQUMsQ0FBSyxLQUFMLENBQVcsZ0JBQVgsSUFBK0IsS0FBSyxLQUFMLENBQVcsUUFBWCxHQUF3QixnQkFBTSxhQUFOLENBQW9CLElBQXBCLEVBQTBCLEVBQUMsV0FBVyxPQUFYLEVBQTNCLEVBQWdELGdCQUFNLGFBQU4sQ0FBb0IsSUFBcEIsRUFBMEIsSUFBMUIsRUFBZ0MsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLEtBQUssVUFBTCxFQUFpQixXQUFXLFNBQVgsRUFBc0IseUJBQXlCLEVBQUUsUUFBUSxLQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQW5DLEVBQW5FLENBQWhDLENBQWhELENBQXhELEdBQTJRLElBQTNRLEVBQWlSLEtBQUssS0FBTCxDQUFXLGFBQVgsR0FBNEIsS0FBSyxVQUFMLEVBQTVCLEdBQWlELElBQWpELEVBQXVELGdCQUFNLGFBQU4sNEJBQXFDLEVBQUMsU0FBUyxFQUFULEVBQWEsT0FBTyxHQUFQLEVBQW5ELENBQTVrRCxDQUFSLENBaEJLOzs7O1lBak5QOzs7bUJBb09TLHlCQUFRLFVBQUMsS0FBRCxFQUFRLFFBQVIsRUFBcUI7QUFDeEMsWUFBTztBQUNILGVBQU0sTUFBTSxRQUFOLENBQWUsS0FBZixDQUFxQixTQUFTLE1BQVQsQ0FBZ0IsRUFBaEIsQ0FBckIsR0FBMkMsTUFBTSxRQUFOLENBQWUsS0FBZixDQUFxQixTQUFTLE1BQVQsQ0FBZ0IsRUFBaEIsQ0FBaEUsR0FBc0YsRUFBdEY7QUFDTixrQkFBUyxNQUFNLE9BQU47TUFGYixDQUR3QztFQUFyQixFQUtwQjtZQUFhO0FBQ1osa0JBQVMsK0JBQW1CLE9BQW5CLEVBQTRCLFFBQTVCLENBQVQ7O0VBREQsQ0FMWSxDQU9YLE1BUFcsRTs7Ozs7Ozs7Ozs7Ozs7QUN6UGY7Ozs7Ozs7Ozs7OztLQUNNOzs7Ozs7Ozs7OztrQ0FDTztBQUNMLGlCQUFNLGVBQWUsV0FBZixDQUREO0FBRUwsaUJBQUksWUFBWSxLQUFLLEtBQUwsQ0FBVyxTQUFYLEdBQTBCLHFCQUFnQixLQUFLLEtBQUwsQ0FBVyxTQUFYLEdBQXlCLFlBQW5FLENBRlg7QUFHTCxpQkFBSSxVQUFVLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FIVDtBQUlMLGlCQUFJLFVBQVUsS0FBSyxLQUFMLENBQVcsT0FBWCxDQUpUO0FBS0wsb0JBQVEsZ0JBQU0sYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFDLFdBQVcsU0FBWCxFQUE1QixFQUFtRCxnQkFBTSxhQUFOLENBQW9CLEdBQXBCLEVBQXlCLElBQXpCLEVBQStCLE9BQS9CLENBQW5ELEVBQTRGLGdCQUFNLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsRUFBQyxXQUFXLFNBQVgsRUFBNUIsRUFBbUQsUUFBUSxHQUFSLENBQVksVUFBQyxNQUFELEVBQVMsS0FBVCxFQUFtQjtBQUNsTCx3QkFBTyxnQkFBTSxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLEVBQUMsS0FBSyxLQUFMLEVBQVksU0FBUyxPQUFPLFFBQVAsRUFBbEQsRUFBb0UsT0FBTyxJQUFQLENBQTNFLENBRGtMO2NBQW5CLENBQS9ELENBQTVGLENBQVIsQ0FMSzs7OztZQURQOzs7bUJBV1MsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWmY7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7bUJBQ2dCLGdCQUFNLGFBQU4sc0JBQTRCLElBQTVCLEVBQWtDLGdCQUFNLGFBQU4scUJBQTJCLEVBQUMsTUFBTSxHQUFOLEVBQVcseUJBQVosRUFBM0IsRUFBeUQsZ0JBQU0sYUFBTixxQkFBMkIsRUFBQyx3QkFBRCxFQUEzQixFQUE2QyxnQkFBTSxhQUFOLDBCQUFnQyxFQUFDLHlCQUFELEVBQWhDLENBQTdDLEVBQWlHLGdCQUFNLGFBQU4scUJBQTJCLEVBQUMsTUFBTSxVQUFOLEVBQWtCLDZCQUFuQixFQUEzQixDQUFqRyxFQUFzSyxnQkFBTSxhQUFOLHFCQUEyQixFQUFDLE1BQU0sU0FBTixFQUFpQiw0QkFBbEIsRUFBM0IsQ0FBdEssRUFBeU8sZ0JBQU0sYUFBTixxQkFBMkIsRUFBQyxNQUFNLGVBQU4sRUFBdUIsNEJBQXhCLEVBQTNCLENBQXpPLEVBQWtULGdCQUFNLGFBQU4scUJBQTJCLEVBQUMsTUFBTSxPQUFOLEVBQWUsOEJBQWhCLEVBQTNCLENBQWxULEVBQXFYLGdCQUFNLGFBQU4scUJBQTJCLEVBQUMsTUFBTSxVQUFOLEVBQWtCLDZCQUFuQixFQUEzQixDQUFyWCxFQUEwYixnQkFBTSxhQUFOLHFCQUEyQixFQUFDLE1BQU0sUUFBTixFQUFnQiw0QkFBakIsRUFBM0IsQ0FBMWIsRUFBNGYsZ0JBQU0sYUFBTixxQkFBMkIsRUFBQyxNQUFNLGlCQUFOLEVBQXlCLCtCQUExQixFQUEzQixDQUE1ZixFQUEwa0IsZ0JBQU0sYUFBTixxQkFBMkIsRUFBQyxNQUFNLGFBQU4sRUFBcUIsdUNBQXRCLEVBQTNCLENBQTFrQixDQUF6RCxFQUFzdEIsZ0JBQU0sYUFBTixxQkFBMkIsRUFBQyxNQUFNLFFBQU4sRUFBZ0IsMkJBQWpCLEVBQTNCLENBQXR0QixFQUF1eEIsZ0JBQU0sYUFBTixxQkFBMkIsRUFBQyxNQUFNLFFBQU4sRUFBZ0IsMkJBQWpCLEVBQTNCLENBQXZ4QixFQUF3MUIsZ0JBQU0sYUFBTixxQkFBMkIsRUFBQyxNQUFNLGlCQUFOLEVBQXlCLDJCQUExQixFQUEzQixDQUF4MUIsRUFBazZCLGdCQUFNLGFBQU4scUJBQTJCLEVBQUMsTUFBTSxHQUFOLEVBQVcsNEJBQVosRUFBM0IsQ0FBbDZCLENBQWxDLEU7Ozs7Ozs7Ozs7Ozs7O1NDaEJBO1NBVUE7QUFWVCxVQUFTLFFBQVQsQ0FBa0IsSUFBbEIsRUFBd0I7QUFDM0IsU0FBSSxPQUFPLElBQVAsS0FBZ0IsUUFBaEIsRUFBMEI7QUFDMUIsaUJBQVEsS0FBUixDQUFjLHdCQUFkLEVBRDBCO01BQTlCO0FBR0EsU0FBSSxVQUFVLGFBQWEsT0FBYixDQUFxQixJQUFyQixDQUFWLENBSnVCO0FBSzNCLFNBQUksQ0FBQyxPQUFELEVBQVU7QUFDVixtQkFBVSxLQUFWLENBRFU7TUFBZDtBQUdBLFlBQU8sT0FBUCxDQVIyQjtFQUF4QjtBQVVBLFVBQVMsUUFBVCxDQUFrQixJQUFsQixFQUF3QixPQUF4QixFQUFpQztBQUNwQyxTQUFJLE9BQU8sSUFBUCxLQUFnQixRQUFoQixFQUEwQjtBQUMxQixpQkFBUSxLQUFSLENBQWMsd0JBQWQsRUFEMEI7TUFBOUI7QUFHQSxTQUFJLE9BQU8sT0FBUCxLQUFtQixRQUFuQixFQUE2QjtBQUM3QixpQkFBUSxLQUFSLENBQWMsaUNBQWQsRUFENkI7TUFBakM7QUFHQSxTQUFJLFVBQVUsSUFBVixDQVBnQztBQVFwQyxTQUFJO0FBQ0Esc0JBQWEsT0FBYixDQUFxQixJQUFyQixFQUEyQixPQUEzQixFQURBO01BQUosQ0FHQSxPQUFPLENBQVAsRUFBVTtBQUNOLGlCQUFRLEtBQVIsQ0FBYyxDQUFkLEVBRE07QUFFTixtQkFBVSxLQUFWLENBRk07TUFBVjtBQUlBLFlBQU8sT0FBUCxDQWZvQzs7Ozs7Ozs7Ozs7Ozs7U0NWeEI7QUFBVCxVQUFTLG9CQUFULENBQThCLElBQTlCLEVBQW9DLElBQXBDLEVBQTBDO0FBQzdDLFNBQUksVUFBVSxJQUFWLENBRHlDO0FBRTdDLFNBQUk7QUFDQSxjQUFLLElBQUksSUFBSixJQUFZLElBQWpCLEVBQXVCO0FBQ25CLGlCQUFJLEtBQUssSUFBTCxNQUFlLEtBQUssSUFBTCxDQUFmLEVBQTJCO0FBQzNCLDJCQUFVLEtBQVYsQ0FEMkI7QUFFM0IsdUJBRjJCO2NBQS9CO1VBREo7TUFESixDQVFBLE9BQU8sQ0FBUCxFQUFVO0FBQ04saUJBQVEsS0FBUixDQUFjLENBQWQsRUFETTtBQUVOLG1CQUFVLEtBQVYsQ0FGTTtNQUFWO0FBSUEsWUFBTyxPQUFQLENBZDZDOzs7Ozs7Ozs7Ozs7U0NBakM7U0FhQTtTQVlBO1NBZUE7U0FVQTtBQWxEVCxVQUFTLFdBQVQsQ0FBcUIsTUFBckIsRUFBNkI7U0FDMUIsWUFBdUMsT0FBdkMsVUFEMEI7U0FDZixXQUE0QixPQUE1QixTQURlO1NBQ0wsU0FBa0IsT0FBbEIsT0FESztTQUNHLFFBQVUsT0FBVixNQURIOztBQUVoQyxTQUFJLFdBQVcsRUFBWCxDQUY0QjtBQUdoQyxZQUFPLFlBQVksTUFBWixHQUFxQixDQUFyQixFQUF3QjtBQUMzQixrQkFEMkI7TUFBL0I7QUFHQSxpQkFBWSxZQUFZLE1BQVosQ0FOb0I7QUFPaEMsVUFBSyxJQUFJLElBQUksU0FBSixFQUFlLElBQUksV0FBVyxTQUFYLElBQXdCLElBQUksTUFBTSxNQUFOLEVBQWMsR0FBdEUsRUFBMkU7QUFDdkUsYUFBSSxPQUFPLE1BQU0sQ0FBTixDQUFQLENBRG1FO0FBRXZFLGtCQUFTLElBQVQsQ0FBYyxJQUFkLEVBRnVFO01BQTNFO0FBSUEsWUFBTyxRQUFQLENBWGdDO0VBQTdCO0FBYUEsVUFBUyxXQUFULENBQXFCLElBQXJCLEVBQTJCLFdBQTNCLEVBQXdDLElBQXhDLEVBQThDO0FBQ2pELFNBQUksYUFBYSxLQUFLLFVBQUwsQ0FEZ0M7QUFFakQsU0FBSSxRQUFRLFVBQVUsSUFBVixDQUFSLENBRjZDO0FBR2pELFNBQUksUUFBUSxpQkFBaUIsS0FBakIsRUFBd0IsV0FBeEIsRUFBcUMsVUFBckMsQ0FBUixDQUg2QztBQUlqRCxZQUFPO0FBQ0gsZUFBTSxPQUFOO0FBQ0EsZ0JBQU87QUFDSCx1QkFBVSxLQUFWO0FBQ0EsdUJBRkc7VUFBUDtNQUZKLENBSmlEO0VBQTlDO0FBWUEsVUFBUyxXQUFULENBQXFCLEtBQXJCLEVBQTRCO0FBQy9CLFNBQUksUUFBUSxNQUFNLEtBQU4sQ0FBWSxRQUFaLENBQXFCLE1BQXJCLENBQTRCLFVBQUMsQ0FBRCxFQUFJLENBQUo7Z0JBQVcsRUFBRSxNQUFGLENBQVMsRUFBRSxLQUFGLENBQVEsUUFBUjtNQUFwQixFQUF3QyxFQUFwRSxDQUFSLENBRDJCO0FBRS9CLFNBQUksY0FBYyxFQUFkLENBRjJCO0FBRy9CLFNBQUksWUFBWSxDQUFaOztBQUgyQixVQUsxQixJQUFJLElBQUksQ0FBSixFQUFPLElBQUksTUFBTSxNQUFOLEVBQWMsR0FBbEMsRUFBdUM7QUFDbkMsZUFBTSxDQUFOLEVBRG1DO0FBRW5DLGFBQUksTUFBTSxDQUFOLEVBQVMsS0FBVCxDQUFlLEtBQWYsS0FBeUIsU0FBekIsRUFBb0M7QUFDcEMseUJBQVksSUFBWixDQUFpQixNQUFNLENBQU4sQ0FBakIsRUFEb0M7QUFFcEMseUJBRm9DO1VBQXhDO01BRko7QUFPQSxTQUFJLE9BQU8sV0FBVyxXQUFYLENBQVAsQ0FaMkI7QUFhL0IsWUFBTyxJQUFQLENBYitCO0VBQTVCO0FBZUEsVUFBUyxjQUFULENBQXdCLEtBQXhCLEVBQStCO0FBQ2xDLFNBQUksY0FBYyxFQUFkLENBRDhCO0FBRWxDLFdBQU0sU0FBTixDQUFnQixPQUFoQixDQUF3QixJQUF4QixDQUE2QixLQUE3QixFQUFvQyxVQUFDLElBQUQsRUFBTyxLQUFQLEVBQWlCO0FBQ2pELGFBQUksS0FBSyxPQUFMLENBQWEsV0FBYixPQUErQixHQUEvQixFQUFvQztBQUNwQyxxQkFBUSxLQUFSLENBQWMsNEJBQWQsRUFEb0M7VUFBeEM7QUFHQSxxQkFBWSxJQUFaLENBQWlCLEtBQUssWUFBTCxDQUFqQixDQUppRDtNQUFqQixDQUFwQyxDQUZrQztBQVFsQyxZQUFPLFdBQVAsQ0FSa0M7RUFBL0I7QUFVQSxVQUFTLGdCQUFULENBQTBCLENBQTFCLEVBQTZCLE9BQTdCLEVBQXNDO0FBQ3pDLFNBQUksSUFBSSxDQUFKLEVBQU87QUFDUCxpQkFBUSxLQUFSLENBQWMsa0JBQWQsRUFETztBQUVQLGdCQUFPLElBQVAsQ0FGTztNQUFYLE1BSUs7QUFDRCxnQkFBTyxTQUFVLElBQUksT0FBSixDQUFWLEdBQTBCLENBQTFCLENBRE47TUFKTDtFQURHOztBQVVQLFVBQVMsU0FBVCxDQUFtQixVQUFuQixFQUErQjtBQUMzQixTQUFJLFFBQVEsRUFBUixDQUR1QjtBQUUzQixTQUFJLFFBQVEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQVIsQ0FGdUI7QUFHM0IsU0FBSSxtQkFBSixDQUgyQjtBQUkzQixXQUFNLFNBQU4sR0FBa0IsVUFBbEIsQ0FKMkI7QUFLM0Isa0JBQWEsTUFBTSxVQUFOLENBTGM7QUFNM0IsVUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksV0FBVyxNQUFYLEVBQW1CLEdBQXZDLEVBQTRDO0FBQ3hDLGFBQUksV0FBVyxDQUFYLEVBQWMsUUFBZCxJQUEwQixDQUExQixFQUE2QjtBQUM3QixzQkFENkI7VUFBakMsTUFHSztBQUNELG1CQUFNLElBQU4sQ0FBVztBQUNQLHVCQUFNLFdBQVcsQ0FBWCxFQUFjLE9BQWQsQ0FBc0IsV0FBdEIsRUFBTjtBQUNBLHdCQUFPO0FBQ0gsK0JBQVUsV0FBVyxDQUFYLEVBQWMsU0FBZDtrQkFEZDtjQUZKLEVBREM7VUFITDtNQURKO0FBYUEsWUFBTyxLQUFQLENBbkIyQjtFQUEvQjtBQXFCQSxVQUFTLFVBQVQsQ0FBb0IsS0FBcEIsRUFBMkI7QUFDdkIsU0FBSSxPQUFPLEVBQVAsQ0FEbUI7QUFFdkIsVUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksTUFBTSxNQUFOLEVBQWMsR0FBbEMsRUFBdUM7QUFDbkMsYUFBSSxNQUFNLENBQU4sRUFBUyxJQUFULEtBQWtCLEdBQWxCLEVBQXVCO0FBQ3ZCLHFCQUFRLEtBQVIsQ0FBYyx5QkFBZCxFQUR1QjtBQUV2QixzQkFGdUI7VUFBM0IsTUFJSztBQUNELDZCQUFjLE1BQU0sQ0FBTixFQUFTLEtBQVQsQ0FBZSxRQUFmLFNBQWQsQ0FEQztVQUpMO01BREo7QUFTQSxZQUFPLElBQVAsQ0FYdUI7RUFBM0I7QUFhQSxVQUFTLGdCQUFULENBQTBCLEtBQTFCLEVBQWlDLFdBQWpDLEVBQThDLFVBQTlDLEVBQTBEO0FBQ3RELFNBQUksUUFBUSxFQUFSLENBRGtEO0FBRXRELFNBQUksZ0JBQWdCLFlBQVksTUFBWixDQUFtQixVQUFDLENBQUQsRUFBSSxDQUFKO2dCQUFXLElBQUksQ0FBSjtNQUFYLEVBQW1CLENBQXRDLENBQWhCLENBRmtEO0FBR3RELFNBQUksVUFBVSxLQUFLLElBQUwsQ0FBVSxnQkFBZ0IsVUFBaEIsQ0FBcEIsQ0FIa0Q7QUFJdEQsYUFBUSxNQUFNLEdBQU4sQ0FBVSxVQUFDLElBQUQsRUFBTyxLQUFQLEVBQWlCO0FBQy9CLGNBQUssS0FBTCxDQUFXLEtBQVgsR0FBbUIsS0FBbkIsQ0FEK0I7QUFFL0IsZ0JBQU8sSUFBUCxDQUYrQjtNQUFqQixDQUFsQjs7OztBQUpzRCxTQVdoRCxnQkFBZ0IsU0FBaEIsYUFBZ0IsQ0FBVSxTQUFWLEVBQXFCO0FBQ3ZDLGFBQUksU0FBUyxDQUFULENBRG1DO0FBRXZDLGFBQUksSUFBSSxDQUFKLENBRm1DO0FBR3ZDLGFBQUksY0FBSixDQUh1QztBQUl2QyxhQUFJLGNBQWMsQ0FBZCxFQUFpQjtBQUNqQixpQkFBSSxnQkFBZ0IsQ0FBaEIsQ0FEYTtBQUVqQixvQkFBTyxpQkFBaUIsYUFBYSxTQUFiLEVBQXdCO0FBQzVDLGtDQUFpQixZQUFZLENBQVosQ0FBakIsQ0FENEM7QUFFNUMscUJBRjRDO2NBQWhEO0FBSUEsc0JBQVMsZ0JBQWdCLFlBQVksSUFBSSxDQUFKLENBQTVCLEdBQXFDLFlBQVksVUFBWixDQU43QjtBQU9qQixxQkFBUSxJQUFJLENBQUosQ0FQUztVQUFyQixNQVNLO0FBQ0QscUJBQVEsQ0FBUixDQURDO1VBVEw7QUFZQSxnQkFBTztBQUNILDJCQURHO0FBRUgseUJBRkc7VUFBUCxDQWhCdUM7TUFBckIsQ0FYZ0M7QUFnQ3RELFNBQU0saUJBQWlCLFNBQWpCLGNBQWlCLENBQVUsU0FBVixFQUFxQjtBQUN4QyxhQUFJLGVBQWUsY0FBYyxTQUFkLENBQWYsQ0FEb0M7QUFFeEMsYUFBSSxpQkFBaUIsYUFBYSxLQUFiLENBRm1CO0FBR3hDLGFBQUksU0FBUyxhQUFhLE1BQWIsQ0FIMkI7QUFJeEMsYUFBSSxJQUFJLGNBQUosQ0FKb0M7QUFLeEMsYUFBSSxxQkFBSixDQUx3QztBQU14QyxhQUFJLFlBQVksRUFBWixDQU5vQztBQU94QyxhQUFJLGdCQUFnQixTQUFTLFlBQVksY0FBWixDQUFULENBUG9CO0FBUXhDLGFBUndDO0FBU3hDLGFBQUksZ0JBQWdCLFVBQWhCLEVBQTRCO0FBQzVCLG9CQUFPLGlCQUFpQixVQUFqQixJQUErQixNQUFNLE1BQU0sTUFBTixFQUFjO0FBQ3RELGtDQUFpQixZQUFZLENBQVosQ0FBakIsQ0FEc0Q7QUFFdEQscUJBRnNEO2NBQTFEO0FBSUEsNEJBQWUsSUFBSSxDQUFKLENBTGE7VUFBaEMsTUFPSztBQUNELDRCQUFlLGNBQWYsQ0FEQztVQVBMO0FBVUEsY0FBSyxJQUFJLEtBQUksY0FBSixFQUFvQixNQUFLLFlBQUwsSUFBcUIsTUFBSyxNQUFNLE1BQU4sR0FBZSxDQUFmLEVBQWtCLElBQXpFLEVBQThFO0FBQzFFLHVCQUFVLElBQVYsQ0FBZSxNQUFNLEVBQU4sQ0FBZixFQUQwRTtVQUE5RTtBQUdBLGdCQUFPLENBQUMsU0FBRCxFQUFZLE1BQVosQ0FBUCxDQXRCd0M7TUFBckI7O0FBaEMrQixVQXlEakQsSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE9BQUosRUFBYSxHQUE3QixFQUFrQztBQUM5QixhQUFJLFFBQVEsZUFBZSxDQUFmLENBQVIsQ0FEMEI7QUFFOUIsYUFBSSxTQUFRLE1BQU0sQ0FBTixDQUFSLENBRjBCO0FBRzlCLGFBQUksU0FBUyxNQUFNLENBQU4sQ0FBVCxDQUgwQjtBQUk5QixlQUFNLElBQU4sQ0FBVztBQUNQLG9CQUFPO0FBQ0gsMkJBQVUsTUFBVjtBQUNBLHdCQUFPO0FBQ0gsMEJBQUssSUFBSSxVQUFKO0FBQ0wsK0JBQVUsVUFBVjtBQUNBLDZCQUFRLFVBQVI7a0JBSEo7QUFLQSx5QkFBUSxJQUFJLENBQUo7QUFDUiwrQkFSRztjQUFQO0FBVUEsbUJBQU0sTUFBTjtVQVhKLEVBSjhCO01BQWxDO0FBa0JBLFlBQU8sS0FBUCxDQTNFc0Q7Ozs7Ozs7QUM5RjFELG1CQUFrQix5RDs7Ozs7O0FDQWxCLG1CQUFrQix5RDs7Ozs7O0FDQWxCLG1CQUFrQix5RDs7Ozs7O0FDQWxCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5REFBd0QsK0JBQStCO0FBQ3ZGOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxFQUFDLEc7Ozs7OztBQ2xERDtBQUNBO0FBQ0EsMkM7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSwyQzs7Ozs7O0FDRkE7QUFDQSx3Q0FBdUMsMEJBQTBCO0FBQ2pFLHlDQUF3QztBQUN4QztBQUNBLEc7Ozs7OztBQ0pBO0FBQ0Esd0Q7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ0hBLDZCQUE0QixlOzs7Ozs7QUNBNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLLFdBQVcsZUFBZTtBQUMvQjtBQUNBLE1BQUs7QUFDTDtBQUNBLEc7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ25CQSwrRTs7Ozs7O0FDQUE7QUFDQSxzRUFBc0UsZ0JBQWdCLFVBQVUsR0FBRztBQUNuRyxFQUFDLEU7Ozs7OztBQ0ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0RkFBZ0YsYUFBYSxFQUFFOztBQUUvRjtBQUNBLHNEQUFxRCwwQkFBMEI7QUFDL0U7QUFDQSxHOzs7Ozs7QUNaQTtBQUNBLFdBQVU7QUFDVixHOzs7Ozs7QUNGQSx1Qjs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFrQyxVQUFVLEVBQUU7QUFDOUMsb0JBQW1CLHNDQUFzQztBQUN6RCxFQUFDLG9DQUFvQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQyxXOzs7Ozs7QUNoQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLEc7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ1pBLDBDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ2hCQSxlQUFjLHNCOzs7Ozs7QUNBZCwwQzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBMkQ7QUFDM0QsRzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFnQztBQUNoQyxlQUFjO0FBQ2Qsa0JBQWlCO0FBQ2pCO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Qjs7Ozs7O0FDakNBO0FBQ0E7O0FBRUEsMkNBQTBDLGlDQUFvQyxFOzs7Ozs7QUNIOUU7QUFDQTs7O0FBR0E7QUFDQSwrQkFBOEIsb0JBQW9CLEdBQUc7O0FBRXJEOzs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSw2Q0FBNEMsb0JBQW9CLEdBQUc7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7QUNUQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUF5QywyQkFBMkI7QUFDcEUsb0RBQW1EOzs7Ozs7OztBQ1RuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUF5QywyQkFBMkI7QUFDcEUsb0RBQW1EIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMDlmODhmNGIzMmQxNmU1MWNkYjNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3RcIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0LXJlZHV4XCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsImV4cG9ydCAqIGZyb20gJy4uL2FjdGlvbnMvYm9vayc7XG5leHBvcnQgKiBmcm9tICcuLi9hY3Rpb25zL25vdGlmaWNhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuLi9hY3Rpb25zL3VzZXInO1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVZhbHVlKG5hbWUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ0NIQU5HRV9WQUxVRScsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHZhbHVlXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVFbGVtZW50KG5hbWUsIGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnVVBEQVRFX0VMRU1FTlQnLFxuICAgICAgICBuYW1lLFxuICAgICAgICBkYXRhXG4gICAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9hY3Rpb25zL2luZGV4LnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIlxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJsb2Rhc2hcIlxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxIDJcbiAqKi8iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0JztcbmltcG9ydCBTZWxlY3RpemVJbnB1dCBmcm9tICcuL3NlbGVjdGl6ZS1pbnB1dCc7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi90ZXh0YXJlYSc7XG5leHBvcnQgeyBCdXR0b24sIElucHV0LCBTZWxlY3RpemVJbnB1dCwgVGV4dGFyZWEgfTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2luZGV4LnRzeFxuICoqLyIsImNvbnN0IEhPU1QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJztcbmNvbnN0IEFwaVJvb3RzID0ge1xuICAgIExPQ0FMOiBgJHtIT1NUfS9hcGkvYCxcbiAgICBET1VCQU5fQk9PS1M6ICdodHRwczovL2FwaS5kb3ViYW4uY29tL3YyL2Jvb2svJ1xufTtcbmV4cG9ydCBkZWZhdWx0IEFwaVJvb3RzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2FwaS1jb25maWcvYXBpLXJvb3RzLnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU2lkZUVmZmVjdCBmcm9tICdyZWFjdC1zaWRlLWVmZmVjdCc7XG5jbGFzcyBCb2R5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicmVhY3QtYm9keS1jbGFzcyBoaWRkZW5cIn0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlZHVjZVByb3BzVG9TdGF0ZShwcm9wc0xpc3QpIHtcbiAgICBsZXQgY2xhc3NOYW1lO1xuICAgIHByb3BzTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbn1cbmZ1bmN0aW9uIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQoY2xhc3NOYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgd2l0aFNpZGVFZmZlY3QocmVkdWNlUHJvcHNUb1N0YXRlLCBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50KShCb2R5KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9zaWRlLWVmZmVjdHMvYm9keS50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuY2xhc3MgSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBuYW1lID0gdGhpcy5wcm9wcy5uYW1lO1xuICAgICAgICBsZXQgbWV0aG9kID0gdGhpcy5wcm9wcy5vbkNsaWNrO1xuICAgICAgICBsZXQgc2l6ZSA9IHRoaXMucHJvcHMuc2l6ZTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBgaWNvbiBpY29uLSR7bmFtZX0gJHtzaXplfWAsIG9uQ2xpY2s6IG1ldGhvZH0pKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBJY29uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2ljb24udHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmNsYXNzIENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gKHRoaXMucHJvcHMuaXNGbHVpZCA/ICdjb250YWluZXItZmx1aWQnIDogJ2NvbnRhaW5lcicpICsgKHRoaXMucHJvcHMuY2xhc3NOYW1lID8gYCAke3RoaXMucHJvcHMuY2xhc3NOYW1lfWAgOiAnJyk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9LCB0aGlzLnByb3BzLmNoaWxkcmVuKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2xheW91dC9jb250YWluZXIudHN4XG4gKiovIiwiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCBvYmplY3RUb1VybGVuY29kZWQgZnJvbSAnLi4vdXRpbHMvcGFyc2UtZm9ybS1kYXRhJztcbmltcG9ydCBoYW5kbGVSZXNwb25zZUpzb24gZnJvbSAnLi4vdXRpbHMvaGFuZGxlLXJlc3BvbnNlLWpzb24nO1xuY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbn07XG5leHBvcnQgZnVuY3Rpb24gY2FsbEFwaShmdWxsVXJsLCBjb25maWcgPSB7fSkge1xuICAgIC8vIHJldHVybiBmZXRjaCBjb25maWdcbiAgICBjb25zdCBwYXJzZUNvbmZpZyA9IChvcmlnaW5hbkNvbmZpZykgPT4ge1xuICAgICAgICBsZXQgeyBtZXRob2QsIGRhdGEsIGNyZWRlbnRpYWxzLCBkYXRhVHlwZSB9ID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdENvbmZpZywgb3JpZ2luYW5Db25maWcpO1xuICAgICAgICBsZXQgZmV0Y2hDb25maWcgPSB7fTtcbiAgICAgICAgaWYgKG1ldGhvZCkge1xuICAgICAgICAgICAgZmV0Y2hDb25maWcubWV0aG9kID0gbWV0aG9kO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjcmVkZW50aWFscykge1xuICAgICAgICAgICAgZmV0Y2hDb25maWcuY3JlZGVudGlhbHMgPSBjcmVkZW50aWFscztcbiAgICAgICAgfVxuICAgICAgICAvLyBoYW5kbGUgcmVxdWVzdCBoZWFkZXJzIGFuZCBib2R5XG4gICAgICAgIGlmIChtZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICAgICAgbGV0IGNvbnRlbnRUeXBlO1xuICAgICAgICAgICAgbGV0IGJvZHk7XG4gICAgICAgICAgICBpZiAoZGF0YVR5cGUgPT09ICdqc29uJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGFUeXBlID09PSAndXJsZW5jb2RlZCcpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xuICAgICAgICAgICAgICAgIGJvZHkgPSBvYmplY3RUb1VybGVuY29kZWQoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgdW5zdXBwb3J0ZWQgZGF0YVR5cGVcbiAgICAgICAgICAgICAgICBkYXRhVHlwZSA9ICd1cmxlbmNvZGVkJztcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xuICAgICAgICAgICAgICAgIGJvZHkgPSBvYmplY3RUb1VybGVuY29kZWQoZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdVbnN1cHBvcnRlZCBkYXRhVHlwZSB1c2VkIFwidXJsZW5jb2RlZFwiIGluc3RlYWQhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmZXRjaENvbmZpZy5oZWFkZXJzID0ge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiBjb250ZW50VHlwZSxcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtUmVxdWVzdC1NZXRob2QnOiAnUE9TVCdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmZXRjaENvbmZpZy5ib2R5ID0gYm9keTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kID09PSAnREVMRVRFJykge1xuICAgICAgICAgICAgZmV0Y2hDb25maWcuaGVhZGVycyA9IHtcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtUmVxdWVzdC1NZXRob2QnOiAnREVMRVRFJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hDb25maWc7XG4gICAgfTtcbiAgICByZXR1cm4gZmV0Y2goZnVsbFVybCwgcGFyc2VDb25maWcoY29uZmlnKSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oanNvbiA9PiAoeyBqc29uLCByZXNwb25zZSB9KSk7XG4gICAgfSlcbiAgICAgICAgLnRoZW4oKHsganNvbiwgcmVzcG9uc2UgfSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVSZXNwb25zZUpzb24oanNvbiwgY29uZmlnLnNjaGVtYSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoanNvbik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNhbGxBcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvdXRpbHMvY2FsbC1hcGkudHNcbiAqKi8iLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub3JtYWxpenJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIm5vcm1hbGl6clwiXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxIDJcbiAqKi8iLCJpbXBvcnQgeyBub3JtYWxpemUgfSBmcm9tICdub3JtYWxpenInO1xuaW1wb3J0IGh1bXBzIGZyb20gJ2h1bXBzJztcbmZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlSnNvbihqc29uLCBzY2hlbWEpIHtcbiAgICBqc29uID0gaHVtcHMuY2FtZWxpemVLZXlzKGpzb24pO1xuICAgIGxldCByZXN1bHQgPSBqc29uO1xuICAgIGlmICh0eXBlb2Ygc2NoZW1hICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBub3JtYWxpemUoanNvbiwgc2NoZW1hKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgZGVmYXVsdCBoYW5kbGVSZXNwb25zZUpzb247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvdXRpbHMvaGFuZGxlLXJlc3BvbnNlLWpzb24udHNcbiAqKi8iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQm9va0xpc3QgZnJvbSAnLi9ib29rLWxpc3QnO1xuY2xhc3MgQm9va0xpc3RTZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGU7XG4gICAgICAgIGxldCBtb3JlTGluayA9IHRoaXMucHJvcHMubW9yZUxpbmsgPyB0aGlzLnByb3BzLm1vcmVMaW5rIDogbnVsbDtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYm9vay1saXN0LXNlY3Rpb25cIn0sIHRoaXMucHJvcHMudGl0bGUgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7Y2xhc3NOYW1lOiBcInNlY3Rpb24tdGl0bGVcIn0sIHRpdGxlKSksIG1vcmVMaW5rID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge2NsYXNzTmFtZTogXCJtb3JlXCIsIHRvOiBtb3JlTGlua30sIFwi5p+l55yL5pu05aSaXCIpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9va0xpc3QsIHtib29rRW50aXRpZXM6IHRoaXMucHJvcHMuYm9va0VudGl0aWVzfSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBCb29rTGlzdFNlY3Rpb247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29tcG9uZW50cy9ib29rLWxpc3Qtc2VjdGlvbi50c3hcbiAqKi8iLCJpbXBvcnQgeyBTY2hlbWEsIGFycmF5T2YgfSBmcm9tICdub3JtYWxpenInO1xuY29uc3QgYm9vayA9IG5ldyBTY2hlbWEoJ2Jvb2tzJywge1xuICAgIGlkQXR0cmlidXRlOiAnaWQnXG59KTtcbmNvbnN0IGNvbGxlY3Rpb24gPSBuZXcgU2NoZW1hKCdib29rQ29sbGVjdGlvbnMnLCB7XG4gICAgaWRBdHRyaWJ1dGU6ICdpZCdcbn0pO1xuY29uc3QgcHJvZmlsZSA9IG5ldyBTY2hlbWEoJ3Byb2ZpbGVzJywge1xuICAgIGlkQXR0cmlidXRlOiAnaWQnXG59KTtcbmNvbnN0IHVzZXIgPSBuZXcgU2NoZW1hKCd1c2VycycsIHtcbiAgICBpZEF0dHJpYnV0ZTogJ2lkJ1xufSk7XG5jb25zdCBkb3ViYW5Cb29rID0gbmV3IFNjaGVtYSgnZG91YmFuQm9va3MnLCB7XG4gICAgaWRBdHRyaWJ1dGU6ICdpZCdcbn0pO1xuY29uc3QgYm9va1Byb2dyZXNzID0gbmV3IFNjaGVtYSgnYm9va3MnLCB7XG4gICAgaWRBdHRyaWJ1dGU6ICdib29rSWQnXG59KTtcbmNvbnN0IG1hdGNoZWRCb29rcyA9IG5ldyBTY2hlbWEoJ2Jvb2tzJywge1xuICAgIGlkQXR0cmlidXRlOiAnYm9va0lkJ1xufSk7XG5leHBvcnQgY29uc3QgU2NoZW1hcyA9IHtcbiAgICBCT09LOiBib29rLFxuICAgIEJPT0tfUFJPR1JFU1M6IGJvb2tQcm9ncmVzcyxcbiAgICBCT09LX0FSUkFZOiBhcnJheU9mKGJvb2spLFxuICAgIERPVUJBTl9CT09LX1NFQVJDSF9SRVNVTFRTOiB7IGJvb2tzOiBhcnJheU9mKGRvdWJhbkJvb2spIH0sXG4gICAgVVNFUl9BUlJBWTogYXJyYXlPZih1c2VyKSxcbiAgICBNQVRDSEVEX0JPT0tfQVJSQVk6IGFycmF5T2YobWF0Y2hlZEJvb2tzKSxcbiAgICBDT0xMRUNUSU9OOiBjb2xsZWN0aW9uLFxuICAgIENPTExFQ1RJT05fQVJSQVk6IGFycmF5T2YoY29sbGVjdGlvbiksXG4gICAgUFJPRklMRTogcHJvZmlsZVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9zY2hlbWFzL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IGNhbGxBcGkgZnJvbSAnLi9jYWxsLWFwaSc7XG5pbXBvcnQgQXBpUm9vdHMgZnJvbSAnLi4vYXBpLWNvbmZpZy9hcGktcm9vdHMnO1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbGxlY3Rpb24oZGF0YSkge1xuICAgIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWNvbGxlY3Rpb25zYCwgeyBtZXRob2Q6ICdQT1NUJywgZGF0YTogZGF0YSB9KTtcbn1cbi8qKlxuICogZGF0YTogbmFtZSwgYXV0aG9yLCBkZXNjcmlwdGlvbiwgY292ZXIsIGNvbnRlbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEJvb2soZGF0YSkge1xuICAgIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWJvb2tzYCwgeyBtZXRob2Q6ICdQT1NUJywgZGF0YTogZGF0YSB9KTtcbn1cbi8qKlxuICogZGF0YTogbmFtZSwgc2x1ZywgZGVzY3JpcHRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEF1dGhvcihkYXRhKSB7XG4gICAgcmV0dXJuIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9YXV0aG9yc2AsIHsgbWV0aG9kOiAnUE9TVCcsIGRhdGE6IGRhdGEgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQXV0aG9ycyhxdWVyeSkge1xuICAgIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWF1dGhvcnM/cT0ke3F1ZXJ5fWApO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEJvb2tzKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9Ym9va3M/cT0ke3F1ZXJ5fWApO1xufVxuLyoqXG4gKiBkYXRhOiBwYWdlTm8sIHBhZ2VTdW0sIHBlcmNlbnRhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2dyZXNzKGJvb2tJZCwgZGF0YSkge1xuICAgIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9Ym9va3MvJHtib29rSWR9L3Byb2dyZXNzYCwgeyBtZXRob2Q6ICdQT1NUJywgZGF0YSB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVCb29rKGlkKSB7XG4gICAgcmV0dXJuIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9Ym9va3MvJHtpZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhZGRDb2xsZWN0aW9uLFxuICAgIGFkZEJvb2ssXG4gICAgYWRkQXV0aG9yLFxuICAgIHNlYXJjaEJvb2tzLFxuICAgIHNlYXJjaEF1dGhvcnMsXG4gICAgc2V0UHJvZ3Jlc3MsXG4gICAgZGVsZXRlQm9va1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9hcGlzLnRzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9iamVjdFRvVXJsZW5jb2RlZChvcmlnaW5hbE9iaikge1xuICAgIGxldCBvYmplY3QgPSBfLmNsb25lRGVlcChvcmlnaW5hbE9iaik7XG4gICAgbGV0IGVuY29kZWR1cmwgPSAnJztcbiAgICBmb3IgKGxldCBwcm9wIGluIG9iamVjdCkge1xuICAgICAgICBpZiAodHlwZW9mIG9iamVjdFtwcm9wXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIG9iamVjdFtwcm9wXSA9IG9iamVjdFtwcm9wXS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGVuY29kZWR1cmwgPSBgJHtlbmNvZGVkdXJsfSR7cHJvcH09JHtvYmplY3RbcHJvcF19JmA7XG4gICAgfVxuICAgIHJldHVybiBlbmNvZGVkdXJsLnN1YnN0cigwLCBlbmNvZGVkdXJsLmxlbmd0aCAtIDEpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3V0aWxzL3BhcnNlLWZvcm0tZGF0YS50c1xuICoqLyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodW1wc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiaHVtcHNcIlxuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMSAyXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxIDJcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuY2xhc3MgSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWUgPyBgaW5wdXQtd3JhcCAke3RoaXMucHJvcHMuY2xhc3NOYW1lfWAgOiAnaW5wdXQtd3JhcCc7XG4gICAgICAgIGxldCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpO1xuICAgICAgICBkZWxldGUgcHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogY2xhc3NOYW1lfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtwbGFjZWhvbGRlcjogdGhpcy5wcm9wcy5wbGFjZWhvbGRlciwgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUsIG9uQ2hhbmdlOiBlID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSk7XG4gICAgICAgIH0sIHR5cGU6IHRoaXMucHJvcHMudHlwZSA/IHRoaXMucHJvcHMudHlwZSA6ICd0ZXh0JywgbmFtZTogdGhpcy5wcm9wcy5uYW1lID8gdGhpcy5wcm9wcy5uYW1lIDogbnVsbH0pKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvZm9ybS9pbnB1dC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWUgPyBgdGV4dGFyZWEtd3JhcCAke3RoaXMucHJvcHMuY2xhc3NOYW1lfWAgOiAndGV4dGFyZWEtd3JhcCc7XG4gICAgICAgIGxldCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpO1xuICAgICAgICBkZWxldGUgcHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogY2xhc3NOYW1lfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIHtwbGFjZWhvbGRlcjogdGhpcy5wcm9wcy5wbGFjZWhvbGRlciwgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUsIG9uQ2hhbmdlOiBlID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSk7XG4gICAgICAgIH0sIHR5cGU6IHRoaXMucHJvcHMudHlwZSA/IHRoaXMucHJvcHMudHlwZSA6ICd0ZXh0JywgbmFtZTogdGhpcy5wcm9wcy5uYW1lID8gdGhpcy5wcm9wcy5uYW1lIDogbnVsbH0pKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWE7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvZm9ybS90ZXh0YXJlYS50c3hcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwXCJcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVkdXhcIlxuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMlxuICoqLyIsImltcG9ydCB7IFNjaGVtYXMgfSBmcm9tICcuLi9zY2hlbWFzJztcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEJvb2tQcm9ncmVzcyhib29rSWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBib29rSWQsXG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydCT09LX1BST0dSRVNTX1JFUVVFU1QnLCAnQk9PS19QUk9HUkVTU19TVUNDRVNTJywgJ0JPT0tfUFJPR1JFU1NfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGBib29rcy8ke2Jvb2tJZH0vcHJvZ3Jlc3NgLFxuICAgICAgICAgICAgc2NoZW1hOiBTY2hlbWFzLkJPT0tfUFJPR1JFU1NcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hCb29rcyhmbG93VHlwZSA9ICduZXdlc3QnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gZm9yIHBhZ2luYXRlXG4gICAgICAgIGZsb3dUeXBlLFxuICAgICAgICBDQUxMX0FQSToge1xuICAgICAgICAgICAgdHlwZXM6IFsnQk9PS1NfUkVRVUVTVCcsICdCT09LU19TVUNDRVNTJywgJ0JPT0tTX0ZBSUxVUkUnXSxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgYm9va3M/ZXhjbHVkZT1jb250ZW50YCxcbiAgICAgICAgICAgIHNjaGVtYTogU2NoZW1hcy5CT09LX0FSUkFZLFxuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEJvb2soYm9va0lkLCBmaWVsZHMpIHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgYm9va3MvJHtib29rSWR9YDtcbiAgICBpZiAoZmllbGRzKSB7XG4gICAgICAgIGVuZHBvaW50ICs9IGA/ZmllbGRzPSR7ZmllbGRzLmpvaW4oJywnKX1gO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBib29rSWQsXG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydCT09LX1JFUVVFU1QnLCAnQk9PS19TVUNDRVNTJywgJ0JPT0tfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQsXG4gICAgICAgICAgICBzY2hlbWE6IFNjaGVtYXMuQk9PS1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENvbGxlY3Rpb25zKGZsb3dUeXBlID0gJ25ld2VzdCcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBmbG93VHlwZSxcbiAgICAgICAgQ0FMTF9BUEk6IHtcbiAgICAgICAgICAgIHR5cGVzOiBbJ0NPTExFQ1RJT05TX1JFUVVFU1QnLCAnQ09MTEVDVElPTlNfU1VDQ0VTUycsICdDT0xMRUNUSU9OU19GQUlMVVJFJ10sXG4gICAgICAgICAgICBlbmRwb2ludDogYGNvbGxlY3Rpb25zYCxcbiAgICAgICAgICAgIHNjaGVtYTogU2NoZW1hcy5DT0xMRUNUSU9OX0FSUkFZXG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQ29sbGVjdGlvbihjb2xsZWN0aW9uSWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb2xsZWN0aW9uSWQsXG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydDT0xMRUNUSU9OX1JFUVVFU1QnLCAnQ09MTEVDVElPTl9TVUNDRVNTJywgJ0NPTExFQ1RJT05fRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGBjb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb25JZH1gLFxuICAgICAgICAgICAgc2NoZW1hOiBTY2hlbWFzLkNPTExFQ1RJT05cbiAgICAgICAgfVxuICAgIH07XG59XG4vLyBleHBvcnQgZnVuY3Rpb24gZmV0Y2hCb29rQ29udGVudChib29rSWQpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBib29rSWQsXG4vLyAgICAgQ0FMTF9BUEk6IHtcbi8vICAgICAgIHR5cGVzOiBbJ0JPT0tfQ09OVEVOVF9SRVFVRVNUJywgJ0JPT0tfQ09OVEVOVF9TVUNDRVNTJywgJ0JPT0tfQ09OVEVOVF9GQUlMVVJFJ10sXG4vLyAgICAgICBlbmRwb2ludDogYGJvb2tzLyR7Ym9va0lkfS9jb250ZW50YCxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5CT09LXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG4vL1xuLy8gZXhwb3J0IGZ1bmN0aW9uIGZldGNoQm9va0luZm8oYm9va0lkKSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgYm9va0lkLFxuLy8gICAgIENBTExfQVBJOntcbi8vICAgICAgIHR5cGVzOiBbJ0JPT0tfSU5GT19SRVFVRVNUJywgJ0JPT0tfSU5GT19TVUNDRVNTJywgJ0JPT0tfSU5GT19GQUlMVVJFJ10sXG4vLyAgICAgICBlbmRwb2ludDogYGJvb2tzLyR7Ym9va0lkfWAsXG4vLyAgICAgICBzY2hlbWE6IFNjaGVtYXMuQk9PS19BUlJBWVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuLy8gZXhwb3J0IGZ1bmN0aW9uIGZldGNoRG91YmFuQm9va1NlYXJjaFJlc3VsdHMocXVlcnkpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBxdWVyeSxcbi8vICAgICBDQUxMX0FQSToge1xuLy8gICAgICAgdHlwZXM6IFsnRE9VQkFOX0JPT0tfU0VBUkNIX1JFUVVFU1QnLCAnRE9VQkFOX0JPT0tfU0VBUkNIX1NVQ0NFU1MnLCAnRE9VQkFOX0JPT0tfU0VBUkNIX0ZBSUxVUkUnXSxcbi8vICAgICAgIGVuZHBvaW50OiBgc2VhcmNoP2NvdW50PTUmcT0ke3F1ZXJ5fWAsXG4vLyAgICAgICBhcGlVcmw6IEFwaVJvb3RzLkRPVUJBTl9CT09LUyxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5ET1VCQU5fQk9PS19TRUFSQ0hfUkVTVUxUUyxcbi8vICAgICAgIGV4dGVuZGVkT3B0aW9uczogeyB1c2VKc29ucDogdHJ1ZSB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG4vLyBleHBvcnQgZnVuY3Rpb24gc2VhcmNoQm9va3MocXVlcnkpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBxdWVyeSxcbi8vICAgICBDQUxMX0FQSToge1xuLy8gICAgICAgdHlwZXM6IFsnQk9PS19TRUFSQ0hfUkVRVUVTVCcsICdCT09LX1NFQVJDSF9TVUNDRVNTJywgJ0JPT0tfU0VBUkNIX0ZBSUxVUkUnXSxcbi8vICAgICAgIGVuZHBvaW50OiBgc2VhcmNoP3E9JHtxdWVyeX1gLFxuLy8gICAgICAgYXBpVXJsOiBBcGlSb290cy5MT0NBTCxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5NQVRDSEVEX0JPT0tfQVJSQVlcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9hY3Rpb25zL2Jvb2sudHNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gc2VuZE5vdGlmaWNhdGlvbihtZXNzYWdlLCBtc2dUeXBlID0gJ3N1Y2Nlc3MnLCB0ID0gNTAwMCkge1xuICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gTWF0aC5yYW5kb20oKS50b0ZpeGVkKDgpLnN1YnN0cigyKTtcbiAgICAgICAgZGlzcGF0Y2goc2hvd05vdGlmaWNhdGlvbihpZCwgbWVzc2FnZSwgbXNnVHlwZSkpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGhpZGVOb3RpZmljYXRpb24oaWQpKTtcbiAgICAgICAgfSwgdCk7XG4gICAgfTtcbn1cbmV4cG9ydCBjb25zdCBTSE9XX05PVElGSUNBVElPTiA9ICdTSE9XX05PVElGSUNBVElPTic7XG5leHBvcnQgZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbihpZCwgbWVzc2FnZSwgbXNnVHlwZSA9ICdzdWNjZXNzJykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFNIT1dfTk9USUZJQ0FUSU9OLFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICBtc2dUeXBlLFxuICAgICAgICBpZFxuICAgIH07XG59XG5leHBvcnQgY29uc3QgSElERV9OT1RJRklDQVRJT04gPSAnSElERV9OT1RJRklDQVRJT04nO1xuZXhwb3J0IGZ1bmN0aW9uIGhpZGVOb3RpZmljYXRpb24oaWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBISURFX05PVElGSUNBVElPTixcbiAgICAgICAgaWRcbiAgICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2FjdGlvbnMvbm90aWZpY2F0aW9uLnRzXG4gKiovIiwiaW1wb3J0IHsgU2NoZW1hcyB9IGZyb20gJy4uL3NjaGVtYXMvaW5kZXgnO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZXJBdXRoKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydVU0VSX0FVVEhfUkVRVUVTVCcsICdVU0VSX0FVVEhfU1VDQ0VTUycsICdVU0VSX0FVVEhfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6ICdhdXRoJ1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFByb2ZpbGUoaWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBDQUxMX0FQSToge1xuICAgICAgICAgICAgdHlwZXM6IFsnUFJPRklMRV9SRVFVRVNUJywgJ1BST0ZJTEVfU1VDQ0VTUycsICdQUk9GSUxFX0ZBSUxVUkUnXSxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgdXNlcnMvJHtpZH0vcHJvZmlsZWAsXG4gICAgICAgICAgICBzY2hlbWE6IFNjaGVtYXMuUFJPRklMRVxuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFVzZXJMaXN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydVU0VSX0xJU1RfUkVRVUVTVCcsICdVU0VSX0xJU1RfU1VDQ0VTUycsICdVU0VSX0xJU1RfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6ICd1c2VycycsXG4gICAgICAgICAgICBzY2hlbWE6IFNjaGVtYXMuVVNFUl9BUlJBWVxuICAgICAgICB9XG4gICAgfTtcbn1cbi8vIGV4cG9ydCBmdW5jdGlvbiBmZXRjaFNoZWxmKHVzZXJJZCkge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHVzZXJJZCxcbi8vICAgICBDQUxMX0FQSToge1xuLy8gICAgICAgdHlwZXM6IFsnU0hFTEZfUkVRVUVTVCcsICdTSEVMRl9TVUNDRVNTJywgJ1NIRUxGX0ZBSUxVUkUnXSxcbi8vICAgICAgIGVuZHBvaW50OiBgdXNlcnMvJHt1c2VySWR9L3NoZWxmYCxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5CT09LX0FSUkFZLFxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoU2hlbGYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF5bG9hZDogJ2Jvb2tTaGVsZicsXG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydTSEVMRl9SRVFVRVNUJywgJ1NIRUxGX1NVQ0NFU1MnLCAnU0hFTEZfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGB1c2VyL2Jvb2tzL3NoZWxmYCxcbiAgICAgICAgfVxuICAgIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvYWN0aW9ucy91c2VyLnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vZWxlbWVudHMvbGF5b3V0JztcbmNsYXNzIEJyYW5kaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc0Ryb3Bkb3duTWVudVZpc2libGU6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvZ2dsZURyb3Bkb3duTWVudSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0Ryb3Bkb3duTWVudVZpc2libGU6ICF0aGlzLnN0YXRlLmlzRHJvcGRvd25NZW51VmlzaWJsZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgdXNlcm5hbWUgPSB0aGlzLnByb3BzLnVzZXJuYW1lO1xuICAgICAgICBsZXQgaXNBZG1pbiA9IHRoaXMucHJvcHMuaXNBZG1pbiA/IHRoaXMucHJvcHMuaXNBZG1pbiA6IGZhbHNlO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogYGJyYW5kaW5nICR7dGhpcy5wcm9wcy5jbGFzc05hbWUgPyB0aGlzLnByb3BzLmNsYXNzTmFtZSA6ICcnfWB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwge2NsYXNzTmFtZTogXCJjbGVhcmZpeFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge2NsYXNzTmFtZTogXCJsb2dvIGxlZnRcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcIi9cIn0sIFwicmVhZHJcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibmF2IGxlZnRcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcIm5hdi1saW5rc1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcIi9icm93c2VcIn0sIFwi5rWP6KeIXCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcIi9jb2xsZWN0aW9uc1wifSwgXCLkuabljZVcIikpKSksIHVzZXJuYW1lID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge29uTW91c2VMZWF2ZTogdGhpcy50b2dnbGVEcm9wZG93bk1lbnUuYmluZCh0aGlzKSwgb25Nb3VzZUVudGVyOiB0aGlzLnRvZ2dsZURyb3Bkb3duTWVudS5iaW5kKHRoaXMpLCBjbGFzc05hbWU6IFwibmF2IHJpZ2h0XCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcInJlY2VudC1yZWFkaW5nXCJ9LCBcIuacgOi/kemYheivu1wiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJ1c2VybmFtZVwifSwgdXNlcm5hbWUsIGlzQWRtaW4gPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJiYWRnZS1kYXJrXCJ9LCBcIkFkbWluXCIpKSA6IG51bGwpLCB0aGlzLnN0YXRlLmlzRHJvcGRvd25NZW51VmlzaWJsZSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge29uQ2xpY2s6IHRoaXMudG9nZ2xlRHJvcGRvd25NZW51LmJpbmQodGhpcyksIGNsYXNzTmFtZTogXCJkcm9wZG93bi1tZW51XCJ9LCBpc0FkbWluID09PSB0cnVlID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCIvY29uc29sZVwifSwgXCLmjqfliLblj7BcIikpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogYC9zaGVsZmB9LCBcIuS5puaetlwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogYC9wcm9maWxlYH0sIFwi5Liq5Lq65Li76aG1XCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBgL3NldHRpbmdzYH0sIFwi6K6+572uXCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiAnL2xvZ291dCd9LCBcIumAgOWHulwiKSkpKSA6IG51bGwpKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibmF2IHJpZ2h0XCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJuYXYtbGlua3NcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvc2lnbmluXCJ9LCBcIueZu+W9lVwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvc2lnbnVwXCJ9LCBcIuazqOWGjFwiKSkpKSkpKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJyYW5kaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYnJhbmRpbmcudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmNsYXNzIE5vTWF0Y2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgXCI0MDRcIikpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE5vTWF0Y2g7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9uby1tYXRjaC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vZWxlbWVudHMvaWNvbic7XG5jbGFzcyBOb3RpZmljYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMucHJvcHMudHlwZSA/IHRoaXMucHJvcHMudHlwZSA6ICdzdWNjZXNzJztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIHRoaXMucHJvcHMudmlzaWJsZSAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBgbm90aWZpY2F0aW9uIG5vdGlmaWNhdGlvbi0tJHt0eXBlfSB6MWAudHJpbSgpfSwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7b25DbGljazogdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZSwgbmFtZTogXCJjbG9zZVwifSksIHRoaXMucHJvcHMubWVzc2FnZSkpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2FsZXJ0LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJztcbmNsYXNzIEZhZGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWU/dGhpcy5wcm9wcy5jbGFzc05hbWU6bnVsbFxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAsIHtjb21wb25lbnQ6IFwiZGl2XCIsIHRyYW5zaXRpb25OYW1lOiBcImZhZGVcIiwgdHJhbnNpdGlvbkVudGVyVGltZW91dDogMzAwLCB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0OiAzMDB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRmFkZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9hbmltYXRpb25zL2ZhZGUudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZSA/IGBidG4gJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gIDogJ2J0bic7XG4gICAgICAgIGxldCBzaXplID0gdGhpcy5wcm9wcy5zaXplID8gdGhpcy5wcm9wcy5zaXplIDogJ21lZGl1bSc7XG4gICAgICAgIGxldCBpc0ZsdWlkID0gdGhpcy5wcm9wcy5pc0ZsdWlkID8gdGhpcy5wcm9wcy5pc0ZsdWlkIDogZmFsc2U7XG4gICAgICAgIGxldCBjb2xvciA9IHRoaXMucHJvcHMuY29sb3IgPyB0aGlzLnByb3BzLmNvbG9yIDogbnVsbDtcbiAgICAgICAgbGV0IG9uQ2xpY2s7XG4gICAgICAgIGlmIChzaXplID09PSAnc21hbGwnKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBidG4tc21hbGwnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNpemUgPT09ICdsYXJnZScpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIGJ0bi1sYXJnZSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2l6ZSA9PT0gJ21lZGl1bScpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIGJ0bi1tZWRpdW0nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5zdXBwb3J0IHNpemUhJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gYCBidG4tJHtjb2xvcn1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0ZsdWlkKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9IGJ0bi1mbHVpZGA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMudG8pIHtcbiAgICAgICAgICAgIG9uQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCh0aGlzLnByb3BzLnRvKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvbkNsaWNrID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWUgfSwgeyBvbkNsaWNrIH0pO1xuICAgICAgICBkZWxldGUgcHJvcHMudG87XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5jb2xvcjtcbiAgICAgICAgZGVsZXRlIHByb3BzLnNpemU7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5pc0ZsdWlkO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHByb3BzLCB0aGlzLnByb3BzLmNoaWxkcmVuKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vYnV0dG9uL2J1dHRvbi50c3hcbiAqKi8iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2J1dHRvbi9pbmRleC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vaWNvbic7XG5jbGFzcyBTZWxlY3RpemVJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvd09wdGlvbnM6IGZhbHNlLFxuICAgICAgICAgICAgZm9jdXM6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgZXhwZW5kZWRPcHRpb25JbmRleDogMFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhpZGVPcHRpb25zID0gdGhpcy5oaWRlT3B0aW9ucy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZvY3VzSW5wdXQgPSB0aGlzLmZvY3VzSW5wdXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaG93T3B0aW9ucyA9IHRoaXMuc2hvd09wdGlvbnMuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgYWRkVmFsdWUobmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblZhbHVlc0NoYW5nZSh0aGlzLnByb3BzLnZhbHVlcy5jb25jYXQobmV3VmFsdWUpKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSh0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiAob3B0aW9uLnZhbHVlID09PSBuZXdWYWx1ZS52YWx1ZVxuICAgICAgICAgICAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9uLCB7IGRpc2FibGVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgOiBvcHRpb24pKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGVhcklucHV0VmFsdWUoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnN0YXlGb2N1c2VkID09PSAndW5kZWZpbmVkJyB8fCB0aGlzLnByb3BzLnN0YXlGb2N1c2VkICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oaWRlT3B0aW9ucygpO1xuICAgIH1cbiAgICByZW1vdmVWYWx1ZShpbmRleCkge1xuICAgICAgICBsZXQgbmV3VmFsdWVzID0gW107XG4gICAgICAgIGxldCByZW1vdmVkVmFsdWU7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlcyA9IHRoaXMucHJvcHMudmFsdWVzLnNsaWNlKDAsIHRoaXMucHJvcHMudmFsdWVzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgcmVtb3ZlZFZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZXNbdGhpcy5wcm9wcy52YWx1ZXMubGVuZ3RoIC0gMV0udmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXdWYWx1ZXMgPSB0aGlzLnByb3BzLnZhbHVlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZW1vdmVkVmFsdWUgPSB2LnZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBpICE9PSBpbmRleDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UodGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHRpb24gPT4gKG9wdGlvbi52YWx1ZSA9PT0gcmVtb3ZlZFZhbHVlXG4gICAgICAgICAgICAgICAgPyBPYmplY3QuYXNzaWduKHt9LCBvcHRpb24sIHsgZGlzYWJsZWQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgOiBvcHRpb24pKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5vblZhbHVlc0NoYW5nZShuZXdWYWx1ZXMpO1xuICAgIH1cbiAgICBjbGVhcklucHV0VmFsdWUoKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25JbnB1dENoYW5nZSgnJyk7XG4gICAgfVxuICAgIGhhbmRsZUtleVByZXNzKGUpIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gOCAmJiAhdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZSgtMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdG9kb1xuICAgICAgICAvLyBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiB0aGlzLnN0YXRlLnNob3dPcHRpb25zKSB7XG4gICAgICAgIC8vICAgdGhpcy5hZGRWYWx1ZSgpXG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgZm9jdXNJbnB1dCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgIH1cbiAgICBoaWRlT3B0aW9ucygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93T3B0aW9uczogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNob3dPcHRpb25zKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93T3B0aW9uczogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZU9wdGlvbnMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZU9wdGlvbnMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IHRoaXMucHJvcHMubGFiZWwgPyB0aGlzLnByb3BzLmxhYmVsIDogbnVsbDtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZSA/IHRoaXMucHJvcHMudmFsdWUgOiAnJztcbiAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMucHJvcHMudmFsdWVzO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9ucyA/IHRoaXMucHJvcHMub3B0aW9ucyA6IFtdO1xuICAgICAgICBsZXQgaW5wdXRXaWR0aCA9IHZhbHVlcy5sZW5ndGggPiAwID8gKHZhbHVlLmxlbmd0aCA9PT0gMCA/IDE2IDogdmFsdWUubGVuZ3RoICogMTYpIDogJzEwMCUnO1xuICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSB2YWx1ZXMubGVuZ3RoID4gMCA/ICcnIDogdGhpcy5wcm9wcy5wbGFjZWhvbGRlcjtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICdzZWxlY3RpemUtaW5wdXQnICsgKHRoaXMuc3RhdGUuZm9jdXMgPT09IHRydWUgPyAnIGZvY3VzJyA6ICcnKSArICh2YWx1ZXMubGVuZ3RoID09PSAwID8gJyBlbXB0eScgOiAnJyk7XG4gICAgICAgIGxldCBhZGROZXdWYWx1ZSA9IHRoaXMucHJvcHMuYWRkTmV3VmFsdWUgPyB0aGlzLnByb3BzLmFkZE5ld1ZhbHVlIDogdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogYHNlbGVjdGl6ZS1pbnB1dC13cmFwICR7dGhpcy5wcm9wcy5jbGFzc05hbWUgPyB0aGlzLnByb3BzLmNsYXNzTmFtZSA6ICcnfWAudHJpbSgpfSwgbGFiZWwgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHtjbGFzc05hbWU6IFwiZm9ybS1sYWJlbFwifSwgbGFiZWwpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogY2xhc3NOYW1lLCBvbkNsaWNrOiBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgICAgICAgdGhpcy5zaG93T3B0aW9ucyhlKTtcbiAgICAgICAgfX0sIHZhbHVlcy5tYXAoKHYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtrZXk6IGluZGV4LCBjbGFzc05hbWU6IFwic2VsZWN0aXplLXRhZ1wifSwgdi5uYW1lLCBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHtzaXplOiAnc21hbGwnLCBuYW1lOiBcImNsb3NlXCIsIG9uQ2xpY2s6IGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWUoaW5kZXgpO1xuICAgICAgICAgICAgfX0pKSk7XG4gICAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3N0eWxlOiB7IHdpZHRoOiBpbnB1dFdpZHRoIH0sIHJlZjogcmVmID0+IHsgdGhpcy5pbnB1dCA9IHJlZjsgfSwgdmFsdWU6IHZhbHVlLCBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsIG9uQmx1cjogZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IGZhbHNlIH0pO1xuICAgICAgICB9LCBvbkZvY3VzOiBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1czogdHJ1ZSB9KTtcbiAgICAgICAgfSwgb25DaGFuZ2U6IGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfSwgb25LZXlEb3duOiBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlS2V5UHJlc3MoZSk7XG4gICAgICAgIH19KSksICh0aGlzLnN0YXRlLnNob3dPcHRpb25zKSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJzZWxlY3RpemUtcXVlcnktcmVzdWx0c1wifSwgb3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtrZXk6IGluZGV4LCBjbGFzc05hbWU6IFwiZGlzYWJsZWRcIn0sIG9wdGlvbi5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtrZXk6IGluZGV4LCBvbkNsaWNrOiBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFZhbHVlKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25PcHRpb25DbGljaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uT3B0aW9uQ2xpY2sob3B0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgb3B0aW9uLm5hbWUpKSk7XG4gICAgICAgIH0pLCBhZGROZXdWYWx1ZSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge29uQ2xpY2s6IGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFkZE5ld1ZhbHVlKHRoaXMucHJvcHMudmFsdWUpO1xuICAgICAgICB9LCBjbGFzc05hbWU6IFwiYWRkXCJ9LCBcIua3u+WKoCBcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCB0aGlzLnByb3BzLnZhbHVlKSkpIDogbnVsbCkpIDogbnVsbCkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGl6ZUlucHV0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vc2VsZWN0aXplLWlucHV0LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuY2xhc3MgU3dpdGNoZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5vbiA/ICdvbicgOiAnb2ZmJztcbiAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgJyBzd2l0Y2hlcic7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwic3dpdGNoZXItYnV0dG9uXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInN3aXRjaGVyLXRyYWNrXCJ9KSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShTd2l0Y2hlcik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvc3dpdGNoZXIudHN4XG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEJvb2tWaWV3KCkge1xuICAgIGxldCBhc3BlY3RSYXRpbyA9IDcgLyA5O1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA1NDApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmVlbjogJ3Bob25lJyxcbiAgICAgICAgICAgIHBhZ2VXaWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgICAgICBwYWdlSGVpZ2h0OiB3aW5kb3cuaW5uZXJXaWR0aCAvIGFzcGVjdFJhdGlvXG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyZWVuOiAnaGQnLFxuICAgICAgICAgICAgcGFnZVdpZHRoOiA3MDAsXG4gICAgICAgICAgICBwYWdlSGVpZ2h0OiA3MDAgLyBhc3BlY3RSYXRpb1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBsb2NrU2Nyb2xsKCkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bmxvY2tTY3JvbGwoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbn1cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXRCb29rVmlldyxcbiAgICBsb2NrU2Nyb2xsLFxuICAgIHVubG9ja1Njcm9sbFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy92aWV3LnRzXG4gKiovIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXHJcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xyXG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XHJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2lkZS1lZmZlY3RcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0LXNpZGUtZWZmZWN0XCJcbiAqKiBtb2R1bGUgaWQgPSA1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyJztcbmV4cG9ydCB7IENvbnRhaW5lciB9O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2xheW91dC9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5jbGFzcyBMb2FkaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImxvYWRpbmctd3JhcFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJpY29uIGljb24tbG9hZGluZ1wifSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2xvYWRpbmcudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5jbGFzcyBOYXZUYWIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJuYXYtdGFiXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgbnVsbCwgdGhpcy5wcm9wcy50YWJzLm1hcCgodGFiLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IG51bGw7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IHRoaXMucHJvcHMuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9ICdjdXJyZW50JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IGNsYXNzTmFtZSwga2V5OiBpbmRleH0sIHRhYikpO1xuICAgICAgICB9KSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoTmF2VGFiKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9uYXYtdGFiLnRzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzXG4gKiogbW9kdWxlIGlkID0gNThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbiAqKiBtb2R1bGUgaWQgPSA1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXHJcbm1vZHVsZS5leHBvcnRzID0gKFxyXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXHJcbikuc3BsaXQoJywnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbiAqKiBtb2R1bGUgaWQgPSA2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSA2NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXHJcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcclxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xyXG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XHJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4gKiogbW9kdWxlIGlkID0gNjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4gKiogbW9kdWxlIGlkID0gNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbiAqKiBtb2R1bGUgaWQgPSA2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4gKiogbW9kdWxlIGlkID0gNzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA3MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gNzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDczXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24nKTtcblxudmFyIF9hc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtcblxudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnknKTtcblxudmFyIF9zdHJpbmdpZnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5naWZ5KTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5Jyk7XG5cbnZhciBfc2xpY2VkVG9BcnJheTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zbGljZWRUb0FycmF5Mik7XG5cbnZhciBfZ2V0SXRlcmF0b3IyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvcicpO1xuXG52YXIgX2dldEl0ZXJhdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogSXNvbW9ycGhpYyBDU1Mgc3R5bGUgbG9hZGVyIGZvciBXZWJwYWNrXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTUtMjAxNiBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcHJlZml4ID0gJ3MnO1xudmFyIGluc2VydGVkID0ge307XG5cbi8vIEJhc2U2NCBlbmNvZGluZyBhbmQgZGVjb2RpbmcgLSBUaGUgXCJVbmljb2RlIFByb2JsZW1cIlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0Jhc2U2NC9CYXNlNjRfZW5jb2RpbmdfYW5kX2RlY29kaW5nI1RoZV9Vbmljb2RlX1Byb2JsZW1cbmZ1bmN0aW9uIGI2NEVuY29kZVVuaWNvZGUoc3RyKSB7XG4gIHJldHVybiBidG9hKGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoLyUoWzAtOUEtRl17Mn0pL2csIGZ1bmN0aW9uIChtYXRjaCwgcDEpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgnMHgnICsgcDEpO1xuICB9KSk7XG59XG5cbi8qKlxuICogUmVtb3ZlIHN0eWxlL2xpbmsgZWxlbWVudHMgZm9yIHNwZWNpZmllZCBub2RlIElEc1xuICogaWYgdGhleSBhcmUgbm8gbG9uZ2VyIHJlZmVyZW5jZWQgYnkgVUkgY29tcG9uZW50cy5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlQ3NzKGlkcykge1xuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShpZHMpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICB2YXIgaWQgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgaWYgKC0taW5zZXJ0ZWRbaWRdIDw9IDApIHtcbiAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXggKyBpZCk7XG4gICAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEV4YW1wbGU6XG4gKiAgIC8vIEluc2VydCBDU1Mgc3R5bGVzIG9iamVjdCBnZW5lcmF0ZWQgYnkgYGNzcy1sb2FkZXJgIGludG8gRE9NXG4gKiAgIHZhciByZW1vdmVDc3MgPSBpbnNlcnRDc3MoW1sxLCAnYm9keSB7IGNvbG9yOiByZWQ7IH0nXV0pO1xuICpcbiAqICAgLy8gUmVtb3ZlIGl0IGZyb20gdGhlIERPTVxuICogICByZW1vdmVDc3MoKTtcbiAqL1xuZnVuY3Rpb24gaW5zZXJ0Q3NzKHN0eWxlcywgb3B0aW9ucykge1xuICB2YXIgX09iamVjdCRhc3NpZ24gPSAoMCwgX2Fzc2lnbjIuZGVmYXVsdCkoe1xuICAgIHJlcGxhY2U6IGZhbHNlLFxuICAgIHByZXBlbmQ6IGZhbHNlXG4gIH0sIG9wdGlvbnMpO1xuXG4gIHZhciByZXBsYWNlID0gX09iamVjdCRhc3NpZ24ucmVwbGFjZTtcbiAgdmFyIHByZXBlbmQgPSBfT2JqZWN0JGFzc2lnbi5wcmVwZW5kO1xuXG5cbiAgdmFyIGlkcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBfc3R5bGVzJGkgPSAoMCwgX3NsaWNlZFRvQXJyYXkzLmRlZmF1bHQpKHN0eWxlc1tpXSwgNCk7XG5cbiAgICB2YXIgbW9kdWxlSWQgPSBfc3R5bGVzJGlbMF07XG4gICAgdmFyIGNzcyA9IF9zdHlsZXMkaVsxXTtcbiAgICB2YXIgbWVkaWEgPSBfc3R5bGVzJGlbMl07XG4gICAgdmFyIHNvdXJjZU1hcCA9IF9zdHlsZXMkaVszXTtcblxuICAgIHZhciBpZCA9IG1vZHVsZUlkICsgJy0nICsgaTtcblxuICAgIGlkcy5wdXNoKGlkKTtcblxuICAgIGlmIChpbnNlcnRlZFtpZF0pIHtcbiAgICAgIGlmICghcmVwbGFjZSkge1xuICAgICAgICBpbnNlcnRlZFtpZF0rKztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5zZXJ0ZWRbaWRdID0gMTtcblxuICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4ICsgaWQpO1xuICAgIHZhciBjcmVhdGUgPSBmYWxzZTtcblxuICAgIGlmICghZWxlbSkge1xuICAgICAgY3JlYXRlID0gdHJ1ZTtcblxuICAgICAgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgICAgZWxlbS5pZCA9IHByZWZpeCArIGlkO1xuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjc3NUZXh0ID0gY3NzO1xuICAgIGlmIChzb3VyY2VNYXApIHtcbiAgICAgIGNzc1RleHQgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGI2NEVuY29kZVVuaWNvZGUoKDAsIF9zdHJpbmdpZnkyLmRlZmF1bHQpKHNvdXJjZU1hcCkpICsgJyovJztcbiAgICAgIGNzc1RleHQgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5maWxlICsgJyovJztcbiAgICB9XG5cbiAgICBpZiAoJ3RleHRDb250ZW50JyBpbiBlbGVtKSB7XG4gICAgICBlbGVtLnRleHRDb250ZW50ID0gY3NzVGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NUZXh0O1xuICAgIH1cblxuICAgIGlmIChjcmVhdGUpIHtcbiAgICAgIGlmIChwcmVwZW5kKSB7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGVsZW0sIGRvY3VtZW50LmhlYWQuY2hpbGROb2Rlc1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGVsZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZW1vdmVDc3MuYmluZChudWxsLCBpZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydENzcztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXG4gKiogbW9kdWxlIGlkID0gNzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNzcy1tb2R1bGVzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdC1jc3MtbW9kdWxlc1wiXG4gKiogbW9kdWxlIGlkID0gNzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2VsZW1lbnRzL2xheW91dC9jb250YWluZXInO1xuY2xhc3MgQ29sb3Bob24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29sb3Bob25cIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIsKpIDIwMTXvvI0yMDE2IHJlYWRyd2ViLmNvbSwgYWxsIHJpZ2h0cyByZXNlcnZlZFwiKSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb2xvcGhvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb21wb25lbnRzL0NvbG9waG9uLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9lbGVtZW50cy9mb3JtJztcbmNsYXNzIEJvb2tJbmZvUG9wdXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgYXV0aG9yID0gdGhpcy5wcm9wcy5hdXRob3I7XG4gICAgICAgIGxldCB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGU7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IHRoaXMucHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgIGxldCBib29rSWQgPSB0aGlzLnByb3BzLmJvb2tJZDtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYm9vay1pbmZvLXBvcHVwIHBvcHVwXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwge2NsYXNzTmFtZTogXCJ0aXRsZVwifSwgdGl0bGUpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7Y2xhc3NOYW1lOiBcImF1dGhvclwifSwgYXV0aG9yKSwgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHtjb2xvcjogXCJibHVlXCIsIHRvOiAnL3ZpZXdlci9ib29rLycgKyBib29rSWR9LCBcIumYheivu1wiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImRlc2NyaXB0aW9uXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBkZXNjcmlwdGlvbikpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQm9va0luZm9Qb3B1cDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb21wb25lbnRzL2Jvb2staW5mby1wb3B1cC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJvb2sgZnJvbSAnLi9ib29rJztcbmNsYXNzIEJvb2tMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtjbGFzc05hbWU6IFwiYm9vay1saXN0IGNsZWFyZml4XCJ9LCB0aGlzLnByb3BzLmJvb2tFbnRpdGllcyA/ICh0aGlzLnByb3BzLmJvb2tFbnRpdGllcy5tYXAoKGJvb2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHRpdGxlLCBhdXRob3IsIGRlc2NyaXB0aW9uLCBjb3ZlciB9ID0gYm9vaztcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb29rLCB7aWQ6IGJvb2suaWQsIGtleTogaW5kZXgsIHRpdGxlOiB0aXRsZSwgYXV0aG9yOiBhdXRob3IubWFwKGEgPT4gYS5yZWZEYXRhID8gYS5yZWZEYXRhLm5hbWUgOiAnJykuam9pbignLCAnKSwgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBjb3ZlcjogY292ZXJ9KSk7XG4gICAgICAgIH0pKSA6IG51bGwpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBCb29rTGlzdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb21wb25lbnRzL2Jvb2stbGlzdC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJvb2tQYWdlIGZyb20gJy4vYm9vay1wYWdlJztcbmNsYXNzIEJvb2tQYWdlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBsZXQgc3R5bGUgPSBzdHlsZXMuQk9PS19IRF9TVFlMRVxuICAgICAgICAvLyBpZih0aGlzLnByb3BzLnZpZXcubW9kZSA9PT0gXCJNT0JJTEVcIikge1xuICAgICAgICAvLyAgIHN0eWxlID0gc3R5bGVzLkJPT0tfTU9CSUxFX1NUWUxFXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYoIXRoaXMucHJvcHMuaXNDYWxjdWxhdGVkKSB7XG4gICAgICAgIC8vICAgc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCJcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcInBhZ2VzXCIsIHN0eWxlOiB7IGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfX0sIHRoaXMucHJvcHMucGFnZXMubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBhZ2UudHlwZSA9PT0gXCJwYWdlXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBzdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0eWxlLCBwYWdlLnByb3BzLnN0eWxlKVxuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb29rUGFnZSwge3N0eWxlOiBwYWdlLnByb3BzLnN0eWxlLCBib29rSWQ6IHRoaXMucHJvcHMuYm9va0lkLCBrZXk6IGluZGV4LCBwYWdlOiBwYWdlfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vdCB0eXBlIHBhZ2UhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJvb2tQYWdlTGlzdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb21wb25lbnRzL2Jvb2stcGFnZS1saXN0LnRzeFxuICoqLyIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmNsYXNzIEJvb2tQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBwYWdlID0gdGhpcy5wcm9wcy5wYWdlO1xuICAgICAgICBsZXQgc3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7c3R5bGU6IHN0eWxlfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbnRlbnRcIn0sIHBhZ2UucHJvcHMuY2hpbGRyZW4ubWFwKChub2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSAhPT0gXCJwXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5zdXBwb3J0ZWQgY29udGVudCBmb3VuZCFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIF9fYXNzaWduKHt9LCBpbmRleCA9PT0gMCA/IHsgc3R5bGU6IHsgbWFyZ2luVG9wOiBwYWdlLnByb3BzLm9mZnNldCB9IH0gOiB7fSwge2tleTogaW5kZXh9KSwgbm9kZS5wcm9wcy5jaGlsZHJlbikpO1xuICAgICAgICB9KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwYWdlLW5vXCJ9LCBwYWdlLnByb3BzLnBhZ2VObykpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBCb29rUGFnZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb21wb25lbnRzL2Jvb2stcGFnZS50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQm9va0luZm9Qb3B1cCBmcm9tICcuL2Jvb2staW5mby1wb3B1cCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29rIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IFwiYm9va1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86ICcvYm9vay8nICsgdGhpcy5wcm9wcy5pZH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJib29rLWNvdmVyXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtzcmM6IHRoaXMucHJvcHMuY292ZXJ9KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJib29rLW1ldGFcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHt0aXRsZTogdGhpcy5wcm9wcy50aXRsZSwgY2xhc3NOYW1lOiBcImJvb2stbmFtZVwifSwgdGhpcy5wcm9wcy50aXRsZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiYm9vay1hdXRob3JcIn0sIHRoaXMucHJvcHMuYXV0aG9yKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tJbmZvUG9wdXAsIHtib29rSWQ6IHRoaXMucHJvcHMuaWQsIHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlLCBhdXRob3I6IHRoaXMucHJvcHMuYXV0aG9yLCBkZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5kZXNjcmlwdGlvbn0pKSk7XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYm9vay50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5jbGFzcyBDYW5keUJveCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbGlzdCA9IHRoaXMucHJvcHMubGlzdDtcbiAgICAgICAgbGV0IHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZTtcbiAgICAgICAgbGV0IG1vcmVMaW5rID0gdGhpcy5wcm9wcy5tb3JlTGluayA/IHRoaXMucHJvcHMubW9yZUxpbmsgOiBudWxsO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjYW5keS1ib3hcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCB7Y2xhc3NOYW1lOiBcImJveC10aXRsZVwifSwgdGl0bGUpLCBtb3JlTGluayA/IChSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogbW9yZUxpbmt9LCBcIuafpeeci+abtOWkmlwiKSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgbnVsbCwgbGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtrZXk6IGluZGV4fSwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IGl0ZW0ubGlua30sIGl0ZW0ubmFtZSkpKSkpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ2FuZHlCb3g7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29tcG9uZW50cy9jYW5keS1ib3gudHN4XG4gKiovIiwiaW1wb3J0IFZpZXdlclByZWZlcmVuY2UgZnJvbSAnLi92aWV3ZXItcHJlZmVyZW5jZSc7XG5leHBvcnQgZGVmYXVsdCBWaWV3ZXJQcmVmZXJlbmNlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvdmlld2VyLXByZWZlcmVuY2UvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBTd2l0Y2hlciBmcm9tICcuLi8uLi9lbGVtZW50cy9zd2l0Y2hlcic7XG4vLyBAQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBWaWV3ZXJQcmVmZXJlbmNlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwidmlld2VyLXByZWZlcmVuY2VcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcIm9wdGlvbnNcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBcIm9wdGlvbiBvcHRpb24tZm9udC1zaXplXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIkEtXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIkErXCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IFwib3B0aW9uIG9wdGlvbi1zY3JvbGxcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwibGFiZWxcIn0sIFwi5rua5Yqo5qih5byPXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXRjaGVyLCB7b246IHRydWV9KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBcIm9wdGlvbiBvcHRpb24tdGhlbWVcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtzdHlsZTogeyBiYWNrZ3JvdW5kOiAnI2ZmZicgfX0sIFwidGhlbWUxXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7c3R5bGU6IHsgYmFja2dyb3VuZDogJyNlZWUnIH19LCBcInRoZW1lMlwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge3N0eWxlOiB7IGJhY2tncm91bmQ6ICcjMjIyJyB9fSwgXCJ0aGVtZTNcIikpKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShWaWV3ZXJQcmVmZXJlbmNlKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb21wb25lbnRzL3ZpZXdlci1wcmVmZXJlbmNlL3ZpZXdlci1wcmVmZXJlbmNlLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuY2xhc3MgVmlld2VyU2Nyb2xsYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtzdHlsZTogeyBoZWlnaHQ6IDQwMCB9LCBjbGFzc05hbWU6IFwidmlld2VyLXNjcm9sbGJhclwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImJ1dHRvblwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImxvYy1pbmZvXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgdGhpcy5wcm9wcy5jdXJyZW50KSwgXCIvXCIsIHRoaXMucHJvcHMudG90YWwpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwic3ViLWluZm9cIn0sIFwiMzAuMyVcIikpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7c3R5bGU6IHsgaGVpZ2h0OiAxMDAgfSwgY2xhc3NOYW1lOiBcInRyYWNrLXBhc3RcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtzdHlsZTogeyBoZWlnaHQ6IDQwMCB9LCBjbGFzc05hbWU6IFwidHJhY2tcIn0pKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKFZpZXdlclNjcm9sbGJhcik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29tcG9uZW50cy92aWV3ZXItc2Nyb2xsYmFyLnRzeFxuICoqLyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEJyYW5kaW5nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnJhbmRpbmcnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvbGF5b3V0JztcbmltcG9ydCBDb2xvcGhvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbG9waG9uJztcbmltcG9ydCB7IHVzZXJBdXRoIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL2FwcC5zY3NzJyk7XG4vLyBpbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9lbGVtZW50cy9mb3JtJ1xubGV0IEFwcCA9IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy51c2VyQXV0aCgpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBpc0FkbWluID0gZmFsc2U7XG4gICAgICAgIGxldCB1c2VybmFtZSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlc3Npb24udXNlci5yb2xlICE9PSAndmlzaXRvcicpIHtcbiAgICAgICAgICAgIGlzQWRtaW4gPSB0aGlzLnByb3BzLnNlc3Npb24udXNlci5yb2xlID09PSAnYWRtaW4nO1xuICAgICAgICAgICAgdXNlcm5hbWUgPSB0aGlzLnByb3BzLnNlc3Npb24udXNlci51c2VybmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChCcmFuZGluZywge2lzQWRtaW46IGlzQWRtaW4sIHVzZXJuYW1lOiB1c2VybmFtZX0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwgbnVsbCwgdGhpcy5wcm9wcy5jaGlsZHJlbiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29sb3Bob24sIG51bGwpKSk7XG4gICAgfVxufTtcbkFwcCA9IF9fZGVjb3JhdGUoW1xuICAgIENTU01vZHVsZXMoc3R5bGVzKVxuXSwgQXBwKTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgICBub3RpZmljYXRpb246IHN0YXRlLmNvbXBvbmVudHMubm90aWZpY2F0aW9uLFxuICAgIHNlc3Npb246IHN0YXRlLnNlc3Npb25cbn0pLCB7IHVzZXJBdXRoIH0pKEFwcCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9hcHAvYXBwLnRzeFxuICoqLyIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvYXBwL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgU3dpdGNoZXIgZnJvbSAnLi4vZWxlbWVudHMvc3dpdGNoZXInO1xuaW1wb3J0IEJvb2tMaXN0U2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2Jvb2stbGlzdC1zZWN0aW9uJztcbmltcG9ydCB7IGZldGNoQm9va3MsIGZldGNoQ29sbGVjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zJztcbmNsYXNzIEFyY2hpdmUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hCb29rcygpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImFyY2hpdmUgcGFnZS1jb250ZW50XCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicGFnZS1oZWFkZXJcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcImNhdGVnb3JpZXNcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBcImN1cnJlbnRcIn0sIFwi5YWo6YOoXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgXCLlhajpg6hcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBcIuWFqOmDqFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFwi5YWo6YOoXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgXCLlhajpg6hcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBcIuWFqOmDqFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFwi5YWo6YOoXCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtjbGFzc05hbWU6IFwibGVmdCBkcm9wZG93bi1tZW51XCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgXCLml7bpl7RcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBcIueDreW6plwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFwi5ZCN56ewXCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInJpZ2h0XCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibGFiZWxcIn0sIFwi5LiN5pi+56S65oiR6K+76L+H55qEXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXRjaGVyLCB7b246IGZhbHNlfSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChCb29rTGlzdFNlY3Rpb24sIHtib29rRW50aXRpZXM6IHRoaXMucHJvcHMubmV3ZXN0Qm9va3N9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtbG9hZC1tb3JlXCJ9LCBcIuWKoOi9veabtOWkmlwiKSkpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuZXdlc3RCb29rczogc3RhdGUucGFnaW5hdGlvbi5ib29rcy5uZXdlc3RcbiAgICAgICAgICAgID8gc3RhdGUucGFnaW5hdGlvbi5ib29rcy5uZXdlc3QuaWRzLm1hcChpZCA9PiBzdGF0ZS5lbnRpdGllcy5ib29rc1tpZF0pXG4gICAgICAgICAgICA6IFtdXG4gICAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGZldGNoQm9va3MsIGZldGNoQ29sbGVjdGlvbnMgfSkoQXJjaGl2ZSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9hcmNoaXZlLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZmV0Y2hDb2xsZWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuY2xhc3MgQXJjaGl2ZWRDb2xsZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoQ29sbGVjdGlvbnMoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJhcmNoaXZlZC1jb2xsZWN0aW9uXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicGFnZS10aXRsZVwifSwgXCLlvoDmnJ/kuabljZVcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCBudWxsLCB0aGlzLnByb3BzLm5ld2VzdENvbGxlY3Rpb25zLmxlbmd0aCAhPT0gMFxuICAgICAgICAgICAgJiYgdGhpcy5wcm9wcy5uZXdlc3RDb2xsZWN0aW9ucy5tYXAoKGNvbGwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2tleTogaW5kZXh9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgbnVsbCwgY29sbC5uYW1lKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgY29sbC5kZXNjcmlwdGlvbikpKTtcbiAgICAgICAgICAgIH0pKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtbG9hZC1tb3JlXCJ9LCBcIuWKoOi9veabtOWkmlwiKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgICBuZXdlc3RDb2xsZWN0aW9uczogc3RhdGUucGFnaW5hdGlvbi5ib29rQ29sbGVjdGlvbnMubmV3ZXN0XG4gICAgICAgID8gc3RhdGUucGFnaW5hdGlvbi5ib29rQ29sbGVjdGlvbnMubmV3ZXN0Lmlkcy5tYXAoaWQgPT4gc3RhdGUuZW50aXRpZXMuYm9va0NvbGxlY3Rpb25zW2lkXSlcbiAgICAgICAgOiBbXVxufSksIHsgZmV0Y2hDb2xsZWN0aW9ucyB9KShBcmNoaXZlZENvbGxlY3Rpb24pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvYXJjaGl2ZWQtY29sbGVjdGlvbi50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGZldGNoQm9vayB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vZWxlbWVudHMvbG9hZGluZyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9lbGVtZW50cy9mb3JtJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9zaWRlLWVmZmVjdHMvYm9keSc7XG5jbGFzcyBCb29rSW5mbyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmJvb2tJZCA9IHByb3BzLnBhcmFtcy5pZDtcbiAgICB9XG4gICAgc3RhdGljIGZldGNoRGF0YSh7IHN0b3JlLCBwYXJhbXMgfSkge1xuICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZmV0Y2hCb29rKHBhcmFtcy5pZCkpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaEJvb2sodGhpcy5ib29rSWQpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBib29rSW5mbyA9IHRoaXMucHJvcHMuYm9va0luZm8gPyB0aGlzLnByb3BzLmJvb2tJbmZvIDoge307XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImFydGljbGVcIiwge2NsYXNzTmFtZTogXCJib29rLWluZm8gY29udGVudC1jb250YWluZXJcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keSwge2NsYXNzTmFtZTogXCJib29rLWluZm9cIn0pLCBfLmlzRW1wdHkoYm9va0luZm8pID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZywgbnVsbCkpIDogbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImhlYWRlclwiLCB7Y2xhc3NOYW1lOiBcImJvb2staW5mby1oZWFkZXJcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJsZWZ0LWNvbFwifSwgYm9va0luZm8uY292ZXIgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImJvb2stY292ZXJcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge3NyYzogYm9va0luZm8uY292ZXJ9KSkpIDogbnVsbCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyaWdodC1jb2xcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7Y2xhc3NOYW1lOiBcImJvb2stbmFtZVwifSwgYm9va0luZm8udGl0bGUpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYm9vay1hdXRob3JcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgXCLkvZzogIXvvJpcIiwgYm9va0luZm8uYXV0aG9yID8gYm9va0luZm8uYXV0aG9yLm1hcChhID0+IGEucmVmRGF0YSA/IGEucmVmRGF0YS5uYW1lIDogJycpLmpvaW4oJywgJykgOiAnJykpLCBib29rSW5mby50aXRsZSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7dG86IGAvdmlld2VyL2Jvb2svJHtib29rSW5mby5pZH1gLCBjb2xvcjogXCJibHVlXCJ9LCBcIumYheivu1wiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIG51bGwsIFwi5re75Yqg5Yiw5Lmm5p62XCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgbnVsbCwgXCLmoIforrDkuLrlt7Lor7tcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCBudWxsLCBcIuaUtuiXj1wiKSkpIDogbnVsbCkpLCBib29rSW5mby5kZXNjcmlwdGlvbiA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBcIuWGheWuueeugOS7i1wiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgYm9va0luZm8uZGVzY3JpcHRpb24pKSkgOiBudWxsKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgcmV0dXJuIHsgYm9va0luZm86IHN0YXRlLmVudGl0aWVzLmJvb2tzW293blByb3BzLnBhcmFtcy5pZF0gfTtcbn0sIHsgZmV0Y2hCb29rIH0pKEJvb2tJbmZvKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2Jvb2staW5mby50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGZldGNoU2hlbGYgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBCb29rTGlzdFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9ib29rLWxpc3Qtc2VjdGlvbic7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuY2xhc3MgQm9va1NoZWxmIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHN0YXRpYyBmZXRjaERhdGEoeyBzdG9yZSwgcGFyYW1zIH0pIHtcbiAgICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGZldGNoU2hlbGYoKSk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoU2hlbGYoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgYm9va0xpc3QgPSB0aGlzLnByb3BzLnNoZWxmO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChCb29rTGlzdFNlY3Rpb24sIHtib29rRW50aXRpZXM6IGJvb2tMaXN0LCB0aXRsZTogXCLmiJHnmoTkuabmnrZcIn0pKSk7XG4gICAgfVxufVxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNoZWxmOiBfLmdldChzdGF0ZS5wYXlsb2Fkcy5ib29rU2hlbGYsICdkYXRhJywgW10pXG4gICAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGZldGNoU2hlbGYgfSkoQm9va1NoZWxmKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2Jvb2stc2hlbGYudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9lbGVtZW50cy9mb3JtJztcbmltcG9ydCB7IGZldGNoQ29sbGVjdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IEJvb2tMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvYm9vay1saXN0LXNlY3Rpb24nO1xuY2xhc3MgQ29sbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaENvbGxlY3Rpb24odGhpcy5wcm9wcy5wYXJhbXMuaWQpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGJvb2tDb2xsZWN0aW9uID0gdGhpcy5wcm9wcy5ib29rQ29sbGVjdGlvbiA/IHRoaXMucHJvcHMuYm9va0NvbGxlY3Rpb24gOiB7IGl0ZW1zOiBbXSB9O1xuICAgICAgICBjb25zdCBpdGVtcyA9IGJvb2tDb2xsZWN0aW9uLml0ZW1zXG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZWZEYXRhKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0ucmVmRGF0YSk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbGxlY3Rpb25cIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwYWdlLWhlYWRlclwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtdGl0bGVcIn0sIGJvb2tDb2xsZWN0aW9uLm5hbWUpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwic3ViLXRpdGxlXCJ9LCBcIjEwIOacrOS5plwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImJvb2stc2xpZGVyXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tMaXN0LCB7Ym9va0VudGl0aWVzOiBpdGVtc30pKSwgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIG51bGwsIFwi5pS26JePXCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtY29udGVudFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgYm9va0NvbGxlY3Rpb24uZGVzY3JpcHRpb24pKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIHJldHVybiB7IGJvb2tDb2xsZWN0aW9uOiBzdGF0ZS5lbnRpdGllcy5ib29rQ29sbGVjdGlvbnNbb3duUHJvcHMucGFyYW1zLmlkXSB9O1xufSwgeyBmZXRjaENvbGxlY3Rpb24gfSkoQ29sbGVjdGlvbik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9jb2xsZWN0aW9uLnRzeFxuICoqLyIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGZldGNoQm9va3MsIGZldGNoQ29sbGVjdGlvbnMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCBCb29rTGlzdFNlY3Rpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ib29rLWxpc3Qtc2VjdGlvbic7XG5pbXBvcnQgQ2FuZHlCb3ggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jYW5keS1ib3gnO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vLi4vc2lkZS1lZmZlY3RzL2JvZHknO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvZm9ybSc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL2hvbWUuc2NzcycpO1xubGV0IEhvbWUgPSBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzaG93UmVjZW50UmVhZGluZzogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG4gICAgc3RhdGljIGZldGNoRGF0YSh7IHN0b3JlIH0pIHtcbiAgICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGZldGNoQm9va3MoKSk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoQm9va3MoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaENvbGxlY3Rpb25zKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlc3Npb24uaXNGZXRjaGluZyAmJiAhbmV4dFByb3BzLnNlc3Npb24uaXNGZXRjaGluZykge1xuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy5zZXNzaW9uLnVzZXIucm9sZSAhPT0gJ3Zpc2l0b3InKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5mZXRjaEJvb2tzKCd1c2VyJylcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1JlY2VudFJlYWRpbmc6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBuZXdlc3RCb29rcyA9IHRoaXMucHJvcHMubmV3ZXN0Qm9va3M7XG4gICAgICAgIGxldCBsaXN0TmFtZSA9IHRoaXMucHJvcHMuY29sbGVjdGlvbiA/IHRoaXMucHJvcHMuY29sbGVjdGlvbi5uYW1lIDogJyc7XG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5wcm9wcy5jb2xsZWN0aW9uID8gdGhpcy5wcm9wcy5jb2xsZWN0aW9uLml0ZW1zXG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gQm9vbGVhbihpdGVtLnJlZkRhdGEpKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0ucmVmRGF0YSkgOiBbXTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keSwge2NsYXNzTmFtZTogXCJob21lXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInJvd1wifSwgdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIucm9sZSA9PT0gJ3Zpc2l0b3InICYmICF0aGlzLnByb3BzLnNlc3Npb24uaXNGZXRjaGluZyA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiaGVyby1pbWFnZVwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImxvZ29cIn0sIFwiUmVhZHJcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwYWdlLXRpdGxlXCJ9LCBcIuaWsOS4gOS7oyB3ZWIg6ZiF6K+75L2T6aqMXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge3RvOiBcIi9zaWdudXBcIn0sIFwi5rOo5YaMXCIpKSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29sLW1kLThcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9va0xpc3RTZWN0aW9uLCB7Ym9va0VudGl0aWVzOiBuZXdlc3RCb29rcywgdGl0bGU6IFwi5paw5Lmm6YCf6YCSXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChCb29rTGlzdFNlY3Rpb24sIHtib29rRW50aXRpZXM6IGxpc3QsIHRpdGxlOiBsaXN0TmFtZSwgbW9yZUxpbms6IGAvY29sbGVjdGlvbnMvJHt0aGlzLnByb3BzLmNvbGxlY3Rpb24gPyB0aGlzLnByb3BzLmNvbGxlY3Rpb24uaWQgOiAnJ31gfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywgX19hc3NpZ24oe30sIHsgc3R5bGVOYW1lOiAnYmx1ZScgfSwge2NsYXNzTmFtZTogXCJ2aWV3LW1vcmVcIiwgdG86IFwiL2NvbGxlY3Rpb25zXCJ9KSwgXCLmtY/op4jmm7TlpJrkuabljZUyID5cIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29sLW1kLTRcIn0sIHRoaXMuc3RhdGUuc2hvd1JlY2VudFJlYWRpbmcgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChDYW5keUJveCwge3RpdGxlOiBcIuacgOi/kemYheivuzIyMlwiLCBsaXN0OiBbXX0pKSA6IG51bGwpKSkpO1xuICAgIH1cbn07XG5Ib21lID0gX19kZWNvcmF0ZShbXG4gICAgQ1NTTW9kdWxlcyhzdHlsZXMpXG5dLCBIb21lKTtcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZS5wYWdpbmF0aW9uLmJvb2tzLm5ld2VzdCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlckJvb2tzOiBbXSxcbiAgICAgICAgbmV3ZXN0Qm9va3M6IHN0YXRlLnBhZ2luYXRpb24uYm9va3MubmV3ZXN0XG4gICAgICAgICAgICA/IHN0YXRlLnBhZ2luYXRpb24uYm9va3MubmV3ZXN0Lmlkcy5tYXAoaWQgPT4gc3RhdGUuZW50aXRpZXMuYm9va3NbaWRdKVxuICAgICAgICAgICAgOiBbXSxcbiAgICAgICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvbixcbiAgICAgICAgLy8gdG9kbzogY29sbGVjdGlvbiBwYWdpbmF0aW9uXG4gICAgICAgIGNvbGxlY3Rpb246ICgoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIHN0YXRlLmVudGl0aWVzLmJvb2tDb2xsZWN0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS5lbnRpdGllcy5ib29rQ29sbGVjdGlvbnNbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKClcbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZmV0Y2hCb29rcywgZmV0Y2hDb2xsZWN0aW9ucyB9KShIb21lKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2hvbWUvaG9tZS50c3hcbiAqKi8iLCJpbXBvcnQgSG9tZSBmcm9tICcuL2hvbWUnO1xuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbi8vIGV4cG9ydCBkZWZhdWx0IGZyb20gJy4vaG9tZSdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2hvbWUvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBOYXZUYWIgZnJvbSAnLi4vZWxlbWVudHMvbmF2LXRhYic7XG5pbXBvcnQgeyBmZXRjaEJvb2tzLCBmZXRjaENvbGxlY3Rpb25zLCBmZXRjaFNoZWxmLCBzZW5kTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgQm9va0xpc3RTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvYm9vay1saXN0LXNlY3Rpb24nO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vZWxlbWVudHMvZm9ybSc7XG5jbGFzcyBQcm9maWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvLyBzdGF0aWMgZmV0Y2hEYXRhKHtzdG9yZSwgcGFyYW1zfSkge1xuICAgIC8vICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGZldGNoKCkpXG4gICAgLy8gfVxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hCb29rcygpO1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoU2hlbGYoJzE1NTkzMTg3Jyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG5ld2VzdEJvb2tzID0gdGhpcy5wcm9wcy5uZXdlc3RCb29rcztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicHJvZmlsZVwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtaGVhZGVyXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwidXNlci1hdmF0YXJcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge3NyYzogXCJodHRwczovL2ltZzMuZG91YmFuaW8uY29tL2ljb24vdWw0MzY0NjcwNi00My5qcGdcIiwgYWx0OiBcInVzZXJfYXZhdGFyXCJ9KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwidXNlcm5hbWVcIn0sIFwidXNlcm5hbWVcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwidGFnbGluZVwifSwgXCJzb21ldGhpbmcgdG8gc2F5XCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgbnVsbCwgXCLnvJbovpFcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdlRhYiwge3RhYnM6IFsn5pS26JePJywgJ+ivu+i/hycsICfkuabor4QnXSwgY3VycmVudDogMH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9va0xpc3RTZWN0aW9uLCB7dGl0bGU6IFwi8J+YhFwiLCBib29rRW50aXRpZXM6IG5ld2VzdEJvb2tzfSkpKSk7XG4gICAgfVxufVxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNlc3Npb246IHN0YXRlLnNlc3Npb24sXG4gICAgICAgIG5ld2VzdEJvb2tzOiBzdGF0ZS5wYWdpbmF0aW9uLmJvb2tzLm5ld2VzdFxuICAgICAgICAgICAgPyBzdGF0ZS5wYWdpbmF0aW9uLmJvb2tzLm5ld2VzdC5pZHMubWFwKGlkID0+IHN0YXRlLmVudGl0aWVzLmJvb2tzW2lkXSlcbiAgICAgICAgICAgIDogW11cbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgc2VuZE5vdGlmaWNhdGlvbiwgZmV0Y2hCb29rcywgZmV0Y2hDb2xsZWN0aW9ucywgZmV0Y2hTaGVsZiB9KShQcm9maWxlKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL3Byb2ZpbGUudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgQWxlcnQgZnJvbSAnLi4vZWxlbWVudHMvYWxlcnQnO1xuY2xhc3MgUm9vdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJhcHAtcm9vdFwifSwgdGhpcy5wcm9wcy5ub3RpZmljYXRpb25zLmZpbHRlcihub3RpID0+IG5vdGkudmlzaWJsZSkubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcIm5vdGlmaWNhdGlvbnNcIn0sIHRoaXMucHJvcHMubm90aWZpY2F0aW9ucy5tYXAoKG5vdGksIGluZGV4KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChBbGVydCwge2tleTogaW5kZXgsIHR5cGU6IG5vdGkudHlwZSwgbWVzc2FnZTogbm90aS5tZXNzYWdlLCB2aXNpYmxlOiBub3RpLnZpc2libGV9KSkpKSlcbiAgICAgICAgICAgIDogbnVsbCwgdGhpcy5wcm9wcy5jaGlsZHJlbikpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gKHsgbm90aWZpY2F0aW9uczogc3RhdGUuY29tcG9uZW50cy5ub3RpZmljYXRpb25zIH0pLCB7IHNlbmROb3RpZmljYXRpb24gfSkoUm9vdCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9yb290LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgdXNlckF1dGgsIGZldGNoUHJvZmlsZSB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IE5hdlRhYiBmcm9tICcuLi9lbGVtZW50cy9uYXYtdGFiJztcbmltcG9ydCBCb2R5IGZyb20gJy4uL3NpZGUtZWZmZWN0cy9ib2R5JztcbmltcG9ydCBTd2l0Y2hlciBmcm9tICcuLi9lbGVtZW50cy9zd2l0Y2hlcic7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuY2xhc3MgUHJvZmlsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLy8gc3RhdGljIGZldGNoRGF0YSh7c3RvcmUsIHBhcmFtc30pIHtcbiAgICAvLyAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChmZXRjaCgpKVxuICAgIC8vIH1cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAvLyB1c2VyIHNlc3Npb24gZmV0Y2hlZFxuICAgICAgICBpZiAobmV4dFByb3BzLnNlc3Npb24uaXNGZXRjaGluZyA9PT0gZmFsc2UgJiYgdGhpcy5wcm9wcy5zZXNzaW9uLmlzRmV0Y2hpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJZCA9IG5leHRQcm9wcy5zZXNzaW9uLnVzZXIuaWQ7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoUHJvZmlsZSh1c2VySWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHVzZXIgPSB0aGlzLnByb3BzLnByb2ZpbGU7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInNldHRpbmdzXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHksIHtjbGFzc05hbWU6IFwicGFnZS1zZXR0aW5nc1wifSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwYWdlLWNvbnRlbnRcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwYWdlLWhlYWRlclwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHtjbGFzc05hbWU6IFwicGFnZS10aXRsZVwifSwgXCLorr7nva5cIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2VGFiLCB7dGFiczogWyfotYTmlpknLCAn5Liq5Lq65Li76aG1J10sIGN1cnJlbnQ6IDB9KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcIm9wdGlvbnNcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBcIm9wdGlvblwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIFwi55So5oi35ZCNXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcIm9wdGlvbi1pbnB1dFwifSwgXCJodHRwOi8vcmVhZHJ3ZWIuY29tL0BcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCB1c2VyLnVzZXJuYW1lKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiZWRpdFwifSwgXCLnvJbovpFcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogXCJvcHRpb25cIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBcIumCrueusVwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJvcHRpb24taW5wdXRcIn0sIHVzZXIuZW1haWwpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImVkaXRcIn0sIFwi57yW6L6RXCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IFwib3B0aW9uXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgbnVsbCwgXCLlr4bnoIFcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwib3B0aW9uLWlucHV0XCJ9LCBcIioqKioqKlwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJlZGl0XCJ9LCBcIue8lui+kVwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBcIm9wdGlvblwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIFwi5YWs5byA5bGV56S65oiR55qE5pS26JePXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcIm9wdGlvbi1kZXNjXCJ9LCBcIuWFs+mXreWQjuWFtuS7lueUqOaIt+WwhuaXoOazleafpeeci+aCqOeahOaUtuiXj1wiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChTd2l0Y2hlciwge29uOiB0cnVlfSkpKSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHtcbiAgICBjb25zdCB1c2VySWQgPSBzdGF0ZS5zZXNzaW9uLnVzZXIucm9sZSAhPT0gJ3Zpc2l0b3InID8gc3RhdGUuc2Vzc2lvbi51c2VyLmlkIDogJyc7XG4gICAgY29uc3QgcHJvZmlsZSA9IHVzZXJJZCAmJiAhXy5pc0VtcHR5KHN0YXRlLmVudGl0aWVzLnByb2ZpbGVzKSA/IHN0YXRlLmVudGl0aWVzLnByb2ZpbGVzW3VzZXJJZF0gOiB7fTtcbiAgICByZXR1cm4ge1xuICAgICAgICBub3RpZmljYXRpb246IHN0YXRlLm5vdGlmaWNhdGlvbixcbiAgICAgICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvbixcbiAgICAgICAgcHJvZmlsZVxuICAgIH07XG59LCB7IHNlbmROb3RpZmljYXRpb24sIHVzZXJBdXRoLCBmZXRjaFByb2ZpbGUgfSkoUHJvZmlsZSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9zZXR0aW5ncy50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IExpbmssIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBBcGlSb290cyBmcm9tICcuLi9hcGktY29uZmlnL2FwaS1yb290cyc7XG5pbXBvcnQgY2FsbEFwaSBmcm9tICcuLi91dGlscy9jYWxsLWFwaSc7XG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgQnJhbmRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9icmFuZGluZyc7XG5pbXBvcnQgeyBCdXR0b24sIElucHV0IH0gZnJvbSAnLi4vZWxlbWVudHMvZm9ybSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2VsZW1lbnRzL2xheW91dC9jb250YWluZXInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vc2lkZS1lZmZlY3RzL2JvZHknO1xuY2xhc3MgU2lnbmluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2dpbjogJycsXG4gICAgICAgICAgICBwYXNzd29yZDogJydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaGFuZGxlU2lnbmluKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBsb2dpbjogdGhpcy5zdGF0ZS5sb2dpbixcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgICAgIH07XG4gICAgICAgIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9YXV0aGAsIHsgbWV0aG9kOiAnUE9TVCcsIGRhdGE6IHBhcmFtcyB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oJ+eZu+W9leaIkOWKn++8gScpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCgnLycpO1xuICAgICAgICAgICAgfSwgNjAwKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKGVyci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZUlucHV0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keSwge2NsYXNzTmFtZTogXCJzaWduaW5cIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJyYW5kaW5nLCBudWxsKSwgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHtjbGFzc05hbWU6IFwiY29udGVudC1jb250YWluZXJcIiwgYWN0aW9uOiBgJHtBcGlSb290cy5MT0NBTH1hdXRoYCwgbWV0aG9kOiBcInBvc3RcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtdGl0bGVcIn0sIFwi5qyi6L+O5Zue5p2lXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7b25DaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKSwgdmFsdWU6IHRoaXMuc3RhdGUubG9naW4sIG5hbWU6IFwibG9naW5cIiwgcGxhY2Vob2xkZXI6IFwi55So5oi35ZCN5oiW6YKu566xXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwge29uQ2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0LmJpbmQodGhpcyksIHZhbHVlOiB0aGlzLnN0YXRlLnBhc3N3b3JkLCBuYW1lOiBcInBhc3N3b3JkXCIsIHBsYWNlaG9sZGVyOiBcIuWvhueggVwiLCB0eXBlOiBcInBhc3N3b3JkXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHtjbGFzc05hbWU6IFwiejFcIiwgY29sb3I6IFwiYmx1ZVwiLCBvbkNsaWNrOiB0aGlzLmhhbmRsZVNpZ25pbi5iaW5kKHRoaXMpfSwgXCLnmbvlvZVcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtjbGFzc05hbWU6IFwiaGludFwifSwgXCLmsqHmnInotKblj7fvvJ9cIiwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiL3NpZ251cFwifSwgXCLms6jlhoxcIikpKSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+ICh7XG4gICAgbm90aWZpY2F0aW9uOiBzdGF0ZS5jb21wb25lbnRzLm5vdGlmaWNhdGlvbixcbiAgICB1c2VyOiBzdGF0ZS51c2VyXG59KSwgeyBzZW5kTm90aWZpY2F0aW9uIH0pKFNpZ25pbik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9zaWduaW4udHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBMaW5rLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQXBpUm9vdHMgZnJvbSAnLi4vYXBpLWNvbmZpZy9hcGktcm9vdHMnO1xuaW1wb3J0IGNhbGxBcGkgZnJvbSAnLi4vdXRpbHMvY2FsbC1hcGknO1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IEJyYW5kaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvYnJhbmRpbmcnO1xuaW1wb3J0IHsgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJy4uL2VsZW1lbnRzL2Zvcm0nO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9lbGVtZW50cy9sYXlvdXQvY29udGFpbmVyJztcbmltcG9ydCBCb2R5IGZyb20gJy4uL3NpZGUtZWZmZWN0cy9ib2R5JztcbmNsYXNzIFNpZ251cCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGhhbmRsZVNpZ251cChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMuc3RhdGUudXNlcm5hbWUsXG4gICAgICAgICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgICAgIH07XG4gICAgICAgIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9dXNlcnNgLCB7IG1ldGhvZDogJ1BPU1QnLCBkYXRhOiBwYXJhbXMgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oJ+azqOWGjOaIkOWKn++8gScpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCgnLycpO1xuICAgICAgICAgICAgfSwgNjAwKTtcbiAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbihlcnIubWVzc2FnZSwgJ2Vycm9yJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVJbnB1dChldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHksIHtjbGFzc05hbWU6IFwic2lnbnVwXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChCcmFuZGluZywgbnVsbCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7Y2xhc3NOYW1lOiBcImNvbnRlbnQtY29udGFpbmVyXCIsIG1ldGhvZDogXCJwb3N0XCIsIGFjdGlvbjogXCIvc2lnbnVwXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge2NsYXNzTmFtZTogXCJwYWdlLXRpdGxlXCJ9LCBcIuWKoOWFpSBSZWFkclwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwge29uQ2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0LmJpbmQodGhpcyksIHZhbHVlOiB0aGlzLnN0YXRlLnVzZXJuYW1lLCBuYW1lOiBcInVzZXJuYW1lXCIsIHBsYWNlaG9sZGVyOiBcIueUqOaIt+WQjVwifSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHtvbkNoYW5nZTogdGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpLCB2YWx1ZTogdGhpcy5zdGF0ZS5lbWFpbCwgbmFtZTogXCJlbWFpbFwiLCBwbGFjZWhvbGRlcjogXCLpgq7nrrFcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7b25DaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKSwgdmFsdWU6IHRoaXMuc3RhdGUucGFzc3dvcmQsIG5hbWU6IFwicGFzc3dvcmRcIiwgcGxhY2Vob2xkZXI6IFwi5a+G56CBIFwiLCB0eXBlOiBcInBhc3N3b3JkXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHtjbGFzc05hbWU6IFwiejFcIiwgY29sb3I6IFwiYmx1ZVwiLCBvbkNsaWNrOiB0aGlzLmhhbmRsZVNpZ251cC5iaW5kKHRoaXMpfSwgXCLms6jlhoxcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtjbGFzc05hbWU6IFwiaGludFwifSwgXCLmsqHmnInotKblj7fvvJ9cIiwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiL3NpZ25pblwifSwgXCLnmbvlvZVcIikpKSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+ICh7XG4gICAgbm90aWZpY2F0aW9uOiBzdGF0ZS5jb21wb25lbnRzLm5vdGlmaWNhdGlvbixcbiAgICB1c2VyOiBzdGF0ZS51c2VyXG59KSwgeyBzZW5kTm90aWZpY2F0aW9uIH0pKFNpZ251cCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9zaWdudXAudHN4XG4gKiovIiwiaW1wb3J0IFZpZXdlciBmcm9tICcuL3ZpZXdlcic7XG5leHBvcnQgZGVmYXVsdCBWaWV3ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy92aWV3ZXIvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9pY29uJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uLy4uL2VsZW1lbnRzL2xvYWRpbmcnO1xuaW1wb3J0IERpYWxvZyBmcm9tICcuLi8uLi9lbGVtZW50cy9EaWFsb2cnO1xuaW1wb3J0IEJvb2tQYWdlTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Jvb2stcGFnZS1saXN0JztcbmltcG9ydCAqIGFzIHJlbmRlckJvb2sgZnJvbSAnLi4vLi4vdXRpbHMvcmVuZGVyLWJvb2snO1xuaW1wb3J0IHsgZ2V0Qm9va1ZpZXcgfSBmcm9tICcuLi8uLi91dGlscy92aWV3JztcbmltcG9ydCB7IGdldENhY2hlLCBzZXRDYWNoZSB9IGZyb20gJy4uLy4uL3V0aWxzL2NhY2hlJztcbmltcG9ydCB7IHNpbXBsZUNvbXBhcmVPYmplY3RzIH0gZnJvbSAnLi4vLi4vdXRpbHMvb2JqZWN0JztcbmltcG9ydCB7IGZldGNoQm9vaywgdXNlckF1dGggfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCBhcGlzIGZyb20gJy4uLy4uL3V0aWxzL2FwaXMnO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vLi4vc2lkZS1lZmZlY3RzL2JvZHknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBWaWV3ZXJQcmVmZXJlbmNlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdmlld2VyLXByZWZlcmVuY2UnO1xuaW1wb3J0IEZhZGUgZnJvbSAnLi4vLi4vZWxlbWVudHMvYW5pbWF0aW9ucy9mYWRlJztcbmltcG9ydCBWaWV3ZXJTY3JvbGxiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy92aWV3ZXItc2Nyb2xsYmFyJztcbmNvbnN0IGFjdGlvbnMgPSB7IGZldGNoQm9vaywgdXNlckF1dGggfTtcbmNsYXNzIFZpZXdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmJvb2tJZCA9IHByb3BzLnBhcmFtcy5pZDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNob3dQYW5lbDogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dQcm9ncmVzc0RpYWxvZzogZmFsc2UsXG4gICAgICAgICAgICBpc0NhbGN1bGF0aW5nRG9tOiBmYWxzZSxcbiAgICAgICAgICAgIGlzUmVhZGluZ01vZGU6IGZhbHNlLFxuICAgICAgICAgICAgaXNTY3JvbGxNb2RlOiB0cnVlLFxuICAgICAgICAgICAgaXNJbml0aWFsUHJvZ3Jlc3NTZXQ6IGZhbHNlLFxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IDAsXG4gICAgICAgICAgICBjYWxjdWxhdGVkUGFnZXM6IG51bGwsXG4gICAgICAgICAgICBsYXRlc3RQcm9ncmVzczogMCxcbiAgICAgICAgICAgIHZpZXc6IGdldEJvb2tWaWV3KCksXG4gICAgICAgICAgICBzaG93Vmlld2VyUHJlZmVyZW5jZTogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50b2dnbGVWaWV3ZXJQcmVmZXJlbmNlID0gdGhpcy50b2dnbGVWaWV3ZXJQcmVmZXJlbmNlLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIHRvZ2dsZVZpZXdlclByZWZlcmVuY2UoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd1ZpZXdlclByZWZlcmVuY2U6ICF0aGlzLnN0YXRlLnNob3dWaWV3ZXJQcmVmZXJlbmNlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzY3JvbGxUbyhwb3NpdGlvbikge1xuICAgICAgICBsZXQgcGFnZUNvdW50ID0gdGhpcy5zdGF0ZS5jYWxjdWxhdGVkUGFnZXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBsZXQgcGFnZUhlaWdodCA9IHRoaXMuc3RhdGUuY2FsY3VsYXRlZFBhZ2VzLnByb3BzLnZpZXcucGFnZUhlaWdodDtcbiAgICAgICAgbGV0IGhlaWdodCA9IHBhZ2VDb3VudCAqIHBhZ2VIZWlnaHQ7XG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiByZW5kZXJCb29rLnBlcmNlbnRhZ2VUb1BhZ2UocG9zaXRpb24sIHBhZ2VDb3VudCksXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBwb3NpdGlvbiAqIGhlaWdodFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IHBhZ2VDb3VudCAqIHBhZ2VIZWlnaHQgKiBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IGhlaWdodCAqIHBvc2l0aW9uIC8gcGFnZUNvdW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gcGFnZUhlaWdodCAqIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLm1hcFNjcm9sbFRvcFRvU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tYXBXaW5kb3dXaWR0aFRvU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB3aW5kb3dXaWR0aDogd2luZG93LmlubmVyV2lkdGhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1hcFZpZXdUb1N0YXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmlldzogZ2V0Qm9va1ZpZXcoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2hlY2tBbmRTZXRQcm9ncmVzcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50UGFnZU5vID0gdGhpcy5wcm9wcy5ib29rLnBhZ2VObztcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy5mZXRjaEJvb2tQcm9ncmVzcyh0aGlzLmJvb2tJZCkudGhlbihhY3Rpb24gPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmJvb2sucGFnZU5vIC0gY3VycmVudFBhZ2VObyA+IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93UHJvZ3Jlc3NEaWFsb2c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlc3RQcm9ncmVzczogdGhpcy5wcm9wcy5ib29rLnBlcmNlbnRhZ2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGFnZVN1bSA9IHRoaXMuc3RhdGUuY2FsY3VsYXRlZFBhZ2VzLnByb3BzLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IHBhZ2VTdW0gKiB0aGlzLnN0YXRlLnZpZXcucGFnZUhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSB0aGlzLnN0YXRlLnNjcm9sbFRvcCAvIGhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhZ2VObyA9IHJlbmRlckJvb2sucGVyY2VudGFnZVRvUGFnZShwZXJjZW50YWdlLCBwYWdlU3VtKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2dyZXNzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZU5vLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVN1bSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2VcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYXBpcy5zZXRQcm9ncmVzcyh0aGlzLmJvb2tJZCwgcHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvLyBUT0RPOiB1c2Ugc2Vzc2lvbiB0byBkZXRlcm1pbmUgbGF0ZXN0IHByb2dyZXNzXG4gICAgICAgIHRoaXMuZGVib3VuZGVkU2V0UHJvZ3Jlc3MgPSBfLmRlYm91bmNlKHRoaXMuY2hlY2tBbmRTZXRQcm9ncmVzcywgMjAwKTtcbiAgICAgICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuZGVib3VuZGVkU2V0UHJvZ3Jlc3MpXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm1hcFNjcm9sbFRvcFRvU3RhdGUpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5tYXBXaW5kb3dXaWR0aFRvU3RhdGUpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5tYXBWaWV3VG9TdGF0ZSk7XG4gICAgfVxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5kZWJvdW5kZWRTZXRQcm9ncmVzcyk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm1hcFNjcm9sbFRvcFRvU3RhdGUpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5tYXBXaW5kb3dXaWR0aFRvU3RhdGUpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5tYXBWaWV3VG9TdGF0ZSk7XG4gICAgfVxuICAgIHRvZ2dsZUJvb2tQYW5lbChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jYWxjdWxhdGVkUGFnZXMucHJvcHMudmlldy5zY3JlZW4gPT09ICdoZCcpIHtcbiAgICAgICAgICAgIGxldCB5ID0gZXZlbnQucGFnZVkgLSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgICAgIGlmICh5IDwgOTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1BhbmVsOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1BhbmVsOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNsaWNrVG9Ub2dnbGVCb29rUGFuZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNhbGN1bGF0ZWRQYWdlcy5wcm9wcy52aWV3LnNjcmVlbiA9PT0gJ3Bob25lJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2hvd1BhbmVsOiAhdGhpcy5zdGF0ZS5zaG93UGFuZWxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhbGN1bGF0ZURvbSgpIHtcbiAgICAgICAgbGV0IGh0bWwgPSB0aGlzLnN0YXRlLmJvb2tIdG1sO1xuICAgICAgICBsZXQgYm9va0lkID0gdGhpcy5ib29rSWQ7XG4gICAgICAgIGxldCB2aWV3ID0gZ2V0Qm9va1ZpZXcoKTtcbiAgICAgICAgbGV0IG5vZGVIZWlnaHRzID0gcmVuZGVyQm9vay5nZXROb2RlSGVpZ2h0cyh0aGlzLnJlZnMuYm9va0h0bWwuY2hpbGROb2Rlcyk7XG4gICAgICAgIGxldCBwYWdlcyA9IHJlbmRlckJvb2suaHRtbFRvUGFnZXMoaHRtbCwgbm9kZUhlaWdodHMsIHZpZXcpO1xuICAgICAgICBzZXRDYWNoZShgYm9vayR7Ym9va0lkfV9wYWdlc2AsIEpTT04uc3RyaW5naWZ5KHBhZ2VzKSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNSZWFkaW5nTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIGlzQ2FsY3VsYXRpbmdEb206IGZhbHNlLFxuICAgICAgICAgICAgY2FsY3VsYXRlZFBhZ2VzOiBwYWdlc1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbG9hZENhbGN1bGF0ZWRQYWdlcygpIHtcbiAgICAgICAgY29uc3QgYm9va0lkID0gdGhpcy5wcm9wcy5wYXJhbXMuaWQ7XG4gICAgICAgIGxldCBwYWdlcyA9IGdldENhY2hlKGBib29rJHtib29rSWR9X3BhZ2VzYCk7XG4gICAgICAgIC8vIGNoZWNrIGlmIHBhZ2VzIGFyZSBjYWNoZWRcbiAgICAgICAgaWYgKHBhZ2VzKSB7XG4gICAgICAgICAgICBwYWdlcyA9IEpTT04ucGFyc2UocGFnZXMpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNSZWFkaW5nTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVkUGFnZXM6IHBhZ2VzLFxuICAgICAgICAgICAgICAgIGJvb2tIdG1sOiByZW5kZXJCb29rLnBhZ2VzVG9IdG1sKHBhZ2VzKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjdGlvbnMuZmV0Y2hCb29rKGJvb2tJZCwgWydjb250ZW50J10pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5ib29rICYmIG5leHRQcm9wcy5ib29rLmNvbnRlbnQgJiYgbmV4dFByb3BzLmJvb2suY29udGVudC5odG1sICYmICF0aGlzLnByb3BzLmJvb2suY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNDYWxjdWxhdGluZ0RvbTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBib29rSHRtbDogbmV4dFByb3BzLmJvb2suY29udGVudC5odG1sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNpbXBsZUNvbXBhcmVPYmplY3RzKHRoaXMuc3RhdGUudmlldywgbmV4dFN0YXRlLnZpZXcpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc0NhbGN1bGF0aW5nRG9tOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlzQ2FsY3VsYXRpbmdEb20gJiYgIXByZXZTdGF0ZS5pc0NhbGN1bGF0aW5nRG9tKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZURvbSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNjcm9sbCB0byBwcmV2aW91cyByZWFkaW5nIHByb2dyZXNzIHdoZW4gb3BlbmluZyBhIGJvb2tcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYm9vayAmJiB0aGlzLnByb3BzLmJvb2sucGVyY2VudGFnZSAmJiB0aGlzLnN0YXRlLmNhbGN1bGF0ZWRQYWdlcyAmJiAhdGhpcy5zdGF0ZS5pc0luaXRpYWxQcm9ncmVzc1NldCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyh0aGlzLnByb3BzLmJvb2sucGVyY2VudGFnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGlzSW5pdGlhbFByb2dyZXNzU2V0OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHRoaXMucHJvcHMuYWN0aW9ucztcbiAgICAgICAgY29uc3QgYm9va0lkID0gdGhpcy5wcm9wcy5wYXJhbXMuaWQ7XG4gICAgICAgIGFjdGlvbnMudXNlckF1dGgoKTtcbiAgICAgICAgYWN0aW9ucy5mZXRjaEJvb2soYm9va0lkKTtcbiAgICAgICAgLy8gYWN0aW9ucy5mZXRjaEJvb2tQcm9ncmVzcyhib29rSWQpXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5sb2FkQ2FsY3VsYXRlZFBhZ2VzKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNJbml0aWFsUHJvZ3Jlc3NTZXQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXJCb29rKCkge1xuICAgICAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5zdGF0ZS5zY3JvbGxUb3A7XG4gICAgICAgIGxldCBjYWxjdWxhdGVkUGFnZXMgPSB0aGlzLnN0YXRlLmNhbGN1bGF0ZWRQYWdlcztcbiAgICAgICAgbGV0IGJvb2tJZCA9IHRoaXMucHJvcHMucGFyYW1zLmlkO1xuICAgICAgICBsZXQgdmlldyA9IGNhbGN1bGF0ZWRQYWdlcy5wcm9wcy52aWV3O1xuICAgICAgICBsZXQgaGVpZ2h0ID0gY2FsY3VsYXRlZFBhZ2VzLnByb3BzLmNoaWxkcmVuLmxlbmd0aCAqIHZpZXcucGFnZUhlaWdodDtcbiAgICAgICAgbGV0IGN1cnJlbnRQYWdlID0gcmVuZGVyQm9vay5wZXJjZW50YWdlVG9QYWdlKHNjcm9sbFRvcCAvIGhlaWdodCwgY2FsY3VsYXRlZFBhZ2VzLnByb3BzLmNoaWxkcmVuLmxlbmd0aCk7XG4gICAgICAgIGxldCBwYWdlcyA9IHJlbmRlckJvb2suZmlsdGVyUGFnZXMoe1xuICAgICAgICAgICAgc3RhcnRQYWdlOiBjdXJyZW50UGFnZSxcbiAgICAgICAgICAgIG9mZnNldDogMixcbiAgICAgICAgICAgIHF1YW50aXR5OiA1LFxuICAgICAgICAgICAgcGFnZXM6IGNhbGN1bGF0ZWRQYWdlcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtvbkNsaWNrOiB0aGlzLmNsaWNrVG9Ub2dnbGVCb29rUGFuZWwuYmluZCh0aGlzKX0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9va1BhZ2VMaXN0LCB7aGVpZ2h0OiBoZWlnaHQsIHZpZXc6IHZpZXcsIGJvb2tJZDogYm9va0lkLCBwYWdlczogcGFnZXN9KSkpO1xuICAgIH1cbiAgICBoaWRlUHJvZ3Jlc3NEaWFsb2coKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd1Byb2dyZXNzRGlhbG9nOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgYm9vayA9IHRoaXMucHJvcHMuYm9vaztcbiAgICAgICAgbGV0IHZpZXcgPSB0aGlzLnN0YXRlLnZpZXc7XG4gICAgICAgIGxldCBhY3Rpb25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdZZXMnLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8uY2FsbCh0aGlzLCB0aGlzLnN0YXRlLmxhdGVzdFByb2dyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlUHJvZ3Jlc3NEaWFsb2cuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdObycsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb246IHRoaXMuaGlkZVByb2dyZXNzRGlhbG9nLmJpbmQodGhpcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IGB2aWV3ZXIgdmlld2VyLS0ke3ZpZXcuc2NyZWVufWAsIG9uTW91c2VNb3ZlOiB0aGlzLnRvZ2dsZUJvb2tQYW5lbC5iaW5kKHRoaXMpfSwgUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5LCB7Y2xhc3NOYW1lOiBcInZpZXdlclwifSksICFib29rLmNvbnRlbnQgJiYgIXRoaXMuc3RhdGUuY2FsY3VsYXRlZFBhZ2VzID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZywgbnVsbCkpIDogbnVsbCwgdGhpcy5zdGF0ZS5zaG93UHJvZ3Jlc3NEaWFsb2cgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChEaWFsb2csIHthY3Rpb25zOiBhY3Rpb25zLCBjb250ZW50OiBcImFyZSB5b3Ugc3VyZT9cIn0pKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAsIHtjb21wb25lbnQ6IFwiZGl2XCIsIHRyYW5zaXRpb25OYW1lOiBcInNsaWRlXCIsIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ6IDMwMCwgdHJhbnNpdGlvbkxlYXZlVGltZW91dDogMzAwfSwgKHRoaXMuc3RhdGUuc2hvd1BhbmVsICYmIHRoaXMuc3RhdGUuaXNSZWFkaW5nTW9kZSkgfHwgdGhpcy5zdGF0ZS5zaG93Vmlld2VyUHJlZmVyZW5jZSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwidmlld2VyLXBhbmVsXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29udGFpbmVyXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYmFja1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiL1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7bmFtZTogXCJiYWNrXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCLov5Tlm55cIikpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJ0aXRsZVwifSwgYm9vay50aXRsZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge29uQ2xpY2s6IHRoaXMudG9nZ2xlVmlld2VyUHJlZmVyZW5jZSwgY2xhc3NOYW1lOiBcInByZWZlcmVuY2VcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwge25hbWU6IFwiZm9udFwifSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYWRkXCJ9LCBcIueCueWHu+a3u+WKoOiHs+S5puaetlwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChGYWRlLCBudWxsLCB0aGlzLnN0YXRlLnNob3dWaWV3ZXJQcmVmZXJlbmNlID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVmlld2VyUHJlZmVyZW5jZSwgbnVsbCkpIDogbnVsbCkpKSkgOiBudWxsKSwgKHRoaXMuc3RhdGUuaXNDYWxjdWxhdGluZ0RvbSAmJiB0aGlzLnN0YXRlLmJvb2tIdG1sKSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJwYWdlc1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge3JlZjogXCJib29rSHRtbFwiLCBjbGFzc05hbWU6IFwiY29udGVudFwiLCBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IHRoaXMuc3RhdGUuYm9va0h0bWwgfX0pKSkpIDogbnVsbCwgdGhpcy5zdGF0ZS5pc1JlYWRpbmdNb2RlID8gKHRoaXMucmVuZGVyQm9vaygpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVmlld2VyU2Nyb2xsYmFyLCB7Y3VycmVudDogMjAsIHRvdGFsOiAzMDl9KSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJvb2s6IHN0YXRlLmVudGl0aWVzLmJvb2tzW293blByb3BzLnBhcmFtcy5pZF0gPyBzdGF0ZS5lbnRpdGllcy5ib29rc1tvd25Qcm9wcy5wYXJhbXMuaWRdIDoge30sXG4gICAgICAgIHNlc3Npb246IHN0YXRlLnNlc3Npb25cbiAgICB9O1xufSwgZGlzcGF0Y2ggPT4gKHtcbiAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpXG59KSkoVmlld2VyKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL3ZpZXdlci92aWV3ZXIudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmNsYXNzIERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBkZWZhdWx0Q2xhc3MgPSAnZGlhbG9nIHoxJztcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lID8gYCR7ZGVmYXVsdENsYXNzfSAke3RoaXMucHJvcHMuY2xhc3NOYW1lfWAgOiBkZWZhdWx0Q2xhc3M7XG4gICAgICAgIGxldCBjb250ZW50ID0gdGhpcy5wcm9wcy5jb250ZW50O1xuICAgICAgICBsZXQgYWN0aW9ucyA9IHRoaXMucHJvcHMuYWN0aW9ucztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGNvbnRlbnQpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYWN0aW9uc1wifSwgYWN0aW9ucy5tYXAoKGFjdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7a2V5OiBpbmRleCwgb25DbGljazogYWN0aW9uLmZ1bmN0aW9ufSwgYWN0aW9uLnRleHQpO1xuICAgICAgICB9KSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBEaWFsb2c7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvRGlhbG9nLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBOb01hdGNoIGZyb20gJy4uL2NvbnRhaW5lcnMvbm8tbWF0Y2gnO1xuaW1wb3J0IFZpZXdlciBmcm9tICcuLi9jb250YWluZXJzL3ZpZXdlcic7XG5pbXBvcnQgU2lnbmluIGZyb20gJy4uL2NvbnRhaW5lcnMvc2lnbmluJztcbmltcG9ydCBTaWdudXAgZnJvbSAnLi4vY29udGFpbmVycy9zaWdudXAnO1xuaW1wb3J0IEJvb2tJbmZvIGZyb20gJy4uL2NvbnRhaW5lcnMvYm9vay1pbmZvJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vY29udGFpbmVycy9hcHAnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29udGFpbmVycy9ob21lJztcbmltcG9ydCBQcm9maWxlIGZyb20gJy4uL2NvbnRhaW5lcnMvcHJvZmlsZSc7XG5pbXBvcnQgQm9va1NoZWxmIGZyb20gJy4uL2NvbnRhaW5lcnMvYm9vay1zaGVsZic7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi4vY29udGFpbmVycy9zZXR0aW5ncyc7XG5pbXBvcnQgQXJjaGl2ZSBmcm9tICcuLi9jb250YWluZXJzL2FyY2hpdmUnO1xuaW1wb3J0IENvbGxlY3Rpb24gZnJvbSAnLi4vY29udGFpbmVycy9jb2xsZWN0aW9uJztcbmltcG9ydCBBcmNoaXZlZENvbGxlY3Rpb24gZnJvbSAnLi4vY29udGFpbmVycy9hcmNoaXZlZC1jb2xsZWN0aW9uJztcbmltcG9ydCBSb290IGZyb20gJy4uL2NvbnRhaW5lcnMvcm9vdCc7XG5leHBvcnQgZGVmYXVsdCAoUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcIi9cIiwgY29tcG9uZW50OiBSb290fSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge2NvbXBvbmVudDogQXBwfSwgUmVhY3QuY3JlYXRlRWxlbWVudChJbmRleFJvdXRlLCB7Y29tcG9uZW50OiBIb21lfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcImJvb2svOmlkXCIsIGNvbXBvbmVudDogQm9va0luZm99KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwicHJvZmlsZVwiLCBjb21wb25lbnQ6IFByb2ZpbGV9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwicHJvZmlsZS86dXNlclwiLCBjb21wb25lbnQ6IFByb2ZpbGV9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwic2hlbGZcIiwgY29tcG9uZW50OiBCb29rU2hlbGZ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwic2V0dGluZ3NcIiwgY29tcG9uZW50OiBTZXR0aW5nc30pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJicm93c2VcIiwgY29tcG9uZW50OiBBcmNoaXZlfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcImNvbGxlY3Rpb25zLzppZFwiLCBjb21wb25lbnQ6IENvbGxlY3Rpb259KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwiY29sbGVjdGlvbnNcIiwgY29tcG9uZW50OiBBcmNoaXZlZENvbGxlY3Rpb259KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcInNpZ25pblwiLCBjb21wb25lbnQ6IFNpZ25pbn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJzaWdudXBcIiwgY29tcG9uZW50OiBTaWdudXB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwidmlld2VyL2Jvb2svOmlkXCIsIGNvbXBvbmVudDogVmlld2VyfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcIipcIiwgY29tcG9uZW50OiBOb01hdGNofSkpKSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvcm91dGVzL2FwcC50c3hcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Q2FjaGUobmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTmFtZSBzaG91bGQgYmUgc3RyaW5nIScpO1xuICAgIH1cbiAgICBsZXQgY29udGVudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpO1xuICAgIGlmICghY29udGVudCkge1xuICAgICAgICBjb250ZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBjb250ZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldENhY2hlKG5hbWUsIGNvbnRlbnQpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ05hbWUgc2hvdWxkIGJlIHN0cmluZyEnKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjb250ZW50ICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdDYWNoZSBjb250ZW50IHNob3VsZCBiZSBzdHJpbmchJyk7XG4gICAgfVxuICAgIGxldCBzdWNjZXNzID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBjb250ZW50KTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gc3VjY2Vzcztcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9jYWNoZS50c1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBzaW1wbGVDb21wYXJlT2JqZWN0cyhvYmoxLCBvYmoyKSB7XG4gICAgbGV0IGlzRXF1YWwgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gb2JqMSkge1xuICAgICAgICAgICAgaWYgKG9iajFbcHJvcF0gIT09IG9iajJbcHJvcF0pIHtcbiAgICAgICAgICAgICAgICBpc0VxdWFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgaXNFcXVhbCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gaXNFcXVhbDtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9vYmplY3QudHNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gZmlsdGVyUGFnZXMoY29uZmlnKSB7XG4gICAgbGV0IHsgc3RhcnRQYWdlLCBxdWFudGl0eSwgb2Zmc2V0LCBwYWdlcyB9ID0gY29uZmlnO1xuICAgIGxldCBuZXdQYWdlcyA9IFtdO1xuICAgIHdoaWxlIChzdGFydFBhZ2UgLSBvZmZzZXQgPCAwKSB7XG4gICAgICAgIG9mZnNldC0tO1xuICAgIH1cbiAgICBzdGFydFBhZ2UgPSBzdGFydFBhZ2UgLSBvZmZzZXQ7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0UGFnZTsgaSA8IHF1YW50aXR5ICsgc3RhcnRQYWdlICYmIGkgPCBwYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcGFnZSA9IHBhZ2VzW2ldO1xuICAgICAgICBuZXdQYWdlcy5wdXNoKHBhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3UGFnZXM7XG59XG5leHBvcnQgZnVuY3Rpb24gaHRtbFRvUGFnZXMoaHRtbCwgbm9kZUhlaWdodHMsIHZpZXcpIHtcbiAgICBsZXQgcGFnZUhlaWdodCA9IHZpZXcucGFnZUhlaWdodDtcbiAgICBsZXQgbm9kZXMgPSBwYXJzZUhUTUwoaHRtbCk7XG4gICAgbGV0IHBhZ2VzID0gZ3JvdXBOb2Rlc0J5UGFnZShub2Rlcywgbm9kZUhlaWdodHMsIHBhZ2VIZWlnaHQpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdwYWdlcycsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBjaGlsZHJlbjogcGFnZXMsXG4gICAgICAgICAgICB2aWV3XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VzVG9IdG1sKHBhZ2VzKSB7XG4gICAgbGV0IG5vZGVzID0gcGFnZXMucHJvcHMuY2hpbGRyZW4ucmVkdWNlKChhLCBiKSA9PiAoYS5jb25jYXQoYi5wcm9wcy5jaGlsZHJlbikpLCBbXSk7XG4gICAgbGV0IHVuaXF1ZU5vZGVzID0gW107XG4gICAgbGV0IHJlYWxJbmRleCA9IDA7XG4gICAgLy8gcmVtb3ZlIGR1cGxpY2F0ZSBub2Rlc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbm9kZXNbaV07XG4gICAgICAgIGlmIChub2Rlc1tpXS5wcm9wcy5pbmRleCA9PT0gcmVhbEluZGV4KSB7XG4gICAgICAgICAgICB1bmlxdWVOb2Rlcy5wdXNoKG5vZGVzW2ldKTtcbiAgICAgICAgICAgIHJlYWxJbmRleCsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBodG1sID0gcGFyc2VOb2Rlcyh1bmlxdWVOb2Rlcyk7XG4gICAgcmV0dXJuIGh0bWw7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZUhlaWdodHMobm9kZXMpIHtcbiAgICBsZXQgbm9kZXNIZWlnaHQgPSBbXTtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVzLCAobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSBcInBcIikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVuc3VwcG9ydGVkIGNvbnRlbnQgZm91bmQhXCIpO1xuICAgICAgICB9XG4gICAgICAgIG5vZGVzSGVpZ2h0LnB1c2gobm9kZS5jbGllbnRIZWlnaHQpO1xuICAgIH0pO1xuICAgIHJldHVybiBub2Rlc0hlaWdodDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwZXJjZW50YWdlVG9QYWdlKHAsIHBhZ2VTdW0pIHtcbiAgICBpZiAocCA+IDEpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIldyb25nIHBhcmFtZXRlciFcIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KChwICogcGFnZVN1bSkpICsgMTtcbiAgICB9XG59XG4vLyBmdW5jcyB1c2VkIGludGVybmFsbHlcbmZ1bmN0aW9uIHBhcnNlSFRNTChodG1sU3RyaW5nKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG4gICAgbGV0ICRodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgJGh0bWxOb2RlcztcbiAgICAkaHRtbC5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xuICAgICRodG1sTm9kZXMgPSAkaHRtbC5jaGlsZE5vZGVzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJGh0bWxOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoJGh0bWxOb2Rlc1tpXS5ub2RlVHlwZSAhPSAxKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICRodG1sTm9kZXNbaV0udGFnTmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAkaHRtbE5vZGVzW2ldLmlubmVySFRNTFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub2Rlcztcbn1cbmZ1bmN0aW9uIHBhcnNlTm9kZXMobm9kZXMpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG5vZGVzW2ldLnR5cGUgIT09ICdwJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5zdXBwb3J0ZWQgbm9kZSBmb3VuZCEnKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaHRtbCArPSBgPHA+JHtub2Rlc1tpXS5wcm9wcy5jaGlsZHJlbn08L3A+YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaHRtbDtcbn1cbmZ1bmN0aW9uIGdyb3VwTm9kZXNCeVBhZ2Uobm9kZXMsIG5vZGVIZWlnaHRzLCBwYWdlSGVpZ2h0KSB7XG4gICAgbGV0IHBhZ2VzID0gW107XG4gICAgbGV0IHBhZ2VIZWlnaHRTdW0gPSBub2RlSGVpZ2h0cy5yZWR1Y2UoKGEsIGIpID0+IChhICsgYiksIDApO1xuICAgIGxldCBwYWdlU3VtID0gTWF0aC5jZWlsKHBhZ2VIZWlnaHRTdW0gLyBwYWdlSGVpZ2h0KTtcbiAgICBub2RlcyA9IG5vZGVzLm1hcCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgbm9kZS5wcm9wcy5pbmRleCA9IGluZGV4O1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9KTtcbiAgICAvLyBsb25nIHBhcmFncmFwaCBzaXR1YXRpb24gZG9lc24ndCBzZWVtIHRvIGFmZmVjdCB0aGlzIGZ1bmN0aW9uXG4gICAgLy8gb2Zmc2V0IGRpc3RhbmNlIGlzIGFsd2F5cyBuZWd0aXZlIG9yIHplcm9cbiAgICAvLyB0aGUgaW5kZXggd2lsbCBiZSBvZiB0aGUgcGFyYWdyYXBoIHdpdGggdGhpcyBvZmZzZXQgYXQgdGhlIGVuZFxuICAgIGNvbnN0IGdldFBhZ2VPZmZzZXQgPSBmdW5jdGlvbiAocGFnZUluZGV4KSB7XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCBpbmRleDtcbiAgICAgICAgaWYgKHBhZ2VJbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgbGV0IG5vZGVIZWlnaHRTdW0gPSAwO1xuICAgICAgICAgICAgd2hpbGUgKG5vZGVIZWlnaHRTdW0gPD0gcGFnZUhlaWdodCAqIHBhZ2VJbmRleCkge1xuICAgICAgICAgICAgICAgIG5vZGVIZWlnaHRTdW0gKz0gbm9kZUhlaWdodHNbaV07XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2Zmc2V0ID0gbm9kZUhlaWdodFN1bSAtIG5vZGVIZWlnaHRzW2kgLSAxXSAtIHBhZ2VJbmRleCAqIHBhZ2VIZWlnaHQ7XG4gICAgICAgICAgICBpbmRleCA9IGkgLSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICBpbmRleFxuICAgICAgICB9O1xuICAgIH07XG4gICAgY29uc3QgZ2V0Tm9kZXNPZlBhZ2UgPSBmdW5jdGlvbiAocGFnZUluZGV4KSB7XG4gICAgICAgIGxldCBvZmZzZXRPYmplY3QgPSBnZXRQYWdlT2Zmc2V0KHBhZ2VJbmRleCk7XG4gICAgICAgIGxldCBub2RlU3RhcnRJbmRleCA9IG9mZnNldE9iamVjdC5pbmRleDtcbiAgICAgICAgbGV0IG9mZnNldCA9IG9mZnNldE9iamVjdC5vZmZzZXQ7XG4gICAgICAgIGxldCBpID0gbm9kZVN0YXJ0SW5kZXg7XG4gICAgICAgIGxldCBub2RlRW5kSW5kZXg7XG4gICAgICAgIGxldCBwYWdlTm9kZXMgPSBbXTtcbiAgICAgICAgbGV0IG5vZGVIZWlnaHRTdW0gPSBvZmZzZXQgKyBub2RlSGVpZ2h0c1tub2RlU3RhcnRJbmRleF07XG4gICAgICAgIGkrKztcbiAgICAgICAgaWYgKG5vZGVIZWlnaHRTdW0gPCBwYWdlSGVpZ2h0KSB7XG4gICAgICAgICAgICB3aGlsZSAobm9kZUhlaWdodFN1bSA8PSBwYWdlSGVpZ2h0ICYmIGkgIT09IG5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5vZGVIZWlnaHRTdW0gKz0gbm9kZUhlaWdodHNbaV07XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZUVuZEluZGV4ID0gaSAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlRW5kSW5kZXggPSBub2RlU3RhcnRJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gbm9kZVN0YXJ0SW5kZXg7IGkgPD0gbm9kZUVuZEluZGV4ICYmIGkgPD0gbm9kZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBwYWdlTm9kZXMucHVzaChub2Rlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtwYWdlTm9kZXMsIG9mZnNldF07XG4gICAgfTtcbiAgICAvLyBmaW5hbGx5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlU3VtOyBpKyspIHtcbiAgICAgICAgbGV0IGFycmF5ID0gZ2V0Tm9kZXNPZlBhZ2UoaSk7XG4gICAgICAgIGxldCBub2RlcyA9IGFycmF5WzBdO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gYXJyYXlbMV07XG4gICAgICAgIHBhZ2VzLnB1c2goe1xuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogbm9kZXMsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBpICogcGFnZUhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogcGFnZUhlaWdodFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFnZU5vOiBpICsgMSxcbiAgICAgICAgICAgICAgICBvZmZzZXRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiBcInBhZ2VcIlxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhZ2VzO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3V0aWxzL3JlbmRlci1ib29rLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2lzLWl0ZXJhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gMTI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSAxMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzSXRlcmFibGUyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvaXMtaXRlcmFibGVcIik7XG5cbnZhciBfaXNJdGVyYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0l0ZXJhYmxlMik7XG5cbnZhciBfZ2V0SXRlcmF0b3IyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG4gICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pID0gKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoYXJyKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9IHRydWU7XG4gICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnI7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSBlbHNlIGlmICgoMCwgX2lzSXRlcmFibGUzLmRlZmF1bHQpKE9iamVjdChhcnIpKSkge1xuICAgICAgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gICAgfVxuICB9O1xufSgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gMTI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZScpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjb3JlICA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKVxuICAsICRKU09OID0gY29yZS5KU09OIHx8IChjb3JlLkpTT04gPSB7c3RyaW5naWZ5OiBKU09OLnN0cmluZ2lmeX0pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiAkSlNPTi5zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3VtZW50cyk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gMTMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbiAqKiBtb2R1bGUgaWQgPSAxMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xyXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcclxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuICoqIG1vZHVsZSBpZCA9IDE0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDE0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSAxNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxyXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxyXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcclxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXHJcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxyXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XHJcbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xyXG5cclxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxyXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XHJcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcclxuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxyXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcclxuICAgICwgZ3QgICAgID0gJz4nXHJcbiAgICAsIGlmcmFtZURvY3VtZW50O1xyXG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcclxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xyXG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcclxuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xyXG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcclxuICBpZnJhbWVEb2N1bWVudC53cml0ZSgnPHNjcmlwdD5kb2N1bWVudC5GPU9iamVjdDwvc2NyaXB0JyArIGd0KTtcclxuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xyXG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xyXG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcclxuICByZXR1cm4gY3JlYXRlRGljdCgpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcclxuICB2YXIgcmVzdWx0O1xyXG4gIGlmKE8gIT09IG51bGwpe1xyXG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xyXG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xyXG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XHJcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXHJcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcclxuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xyXG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcclxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXHJcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXHJcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XHJcbiAgYW5PYmplY3QoTyk7XHJcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcclxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcclxuICAgICwgaSA9IDBcclxuICAgICwgUDtcclxuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XHJcbiAgcmV0dXJuIE87XHJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4gKiogbW9kdWxlIGlkID0gMTQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXHJcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXHJcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXHJcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxyXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XHJcbiAgTyA9IHRvT2JqZWN0KE8pO1xyXG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xyXG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xyXG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xyXG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XHJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4gKiogbW9kdWxlIGlkID0gMTQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcclxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxyXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcclxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XHJcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXHJcbiAgICAsIGkgICAgICA9IDBcclxuICAgICwgcmVzdWx0ID0gW11cclxuICAgICwga2V5O1xyXG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcclxuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXHJcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xyXG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMTQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4gKiogbW9kdWxlIGlkID0gMTUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4gKiogbW9kdWxlIGlkID0gMTUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXQgICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDE1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5pc0l0ZXJhYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTyA9IE9iamVjdChpdCk7XG4gIHJldHVybiBPW0lURVJBVE9SXSAhPT0gdW5kZWZpbmVkXG4gICAgfHwgJ0BAaXRlcmF0b3InIGluIE9cbiAgICB8fCBJdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoY2xhc3NvZihPKSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gMTU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJoMiB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/bW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdIS4vfi9yZXNvbHZlLXVybC1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcCEuL3NyYy9jbGllbnQvY29udGFpbmVycy9hcHAvYXBwLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhvbWUtYmx1ZS0zTzNmUSB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImJsdWVcIjogXCJob21lLWJsdWUtM08zZlFcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP21vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XSEuL34vcmVzb2x2ZS11cmwtbG9hZGVyIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXAhLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvaG9tZS9ob21lLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL2FwcC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2FwcC9hcHAuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDE2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vaG9tZS5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2hvbWUvaG9tZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9