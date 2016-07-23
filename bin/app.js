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
	
	        // return store.dispatch(fetchBooks())
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
	
	            throw new Error('hahaha');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjk1MzgyNWU5ZjU1M2Y0ZjYzMjMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYWN0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYXBpLWNvbmZpZy9hcGktcm9vdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zaWRlLWVmZmVjdHMvYm9keS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9pY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2xheW91dC9jb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvY2FsbC1hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub3JtYWxpenJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL2hhbmRsZS1yZXNwb25zZS1qc29uLnRzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL2Jvb2stbGlzdC1zZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3NjaGVtYXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC91dGlscy9hcGlzLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvcGFyc2UtZm9ybS1kYXRhLnRzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHVtcHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2lucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vdGV4dGFyZWEudHN4Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FjdGlvbnMvYm9vay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FjdGlvbnMvbm90aWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYWN0aW9ucy91c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9icmFuZGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL25vLW1hdGNoLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2FsZXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2FuaW1hdGlvbnMvZmFkZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2J1dHRvbi9idXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvZm9ybS9idXR0b24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvZm9ybS9zZWxlY3RpemUtaW5wdXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvc3dpdGNoZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvdmlldy50cyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNpZGUtZWZmZWN0XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9sYXlvdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9sb2FkaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL25hdi10YWIudHN4Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNzcy1tb2R1bGVzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0NvbG9waG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYm9vay1pbmZvLXBvcHVwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYm9vay1saXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYm9vay1wYWdlLWxpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9ib29rLXBhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9ib29rLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvY2FuZHktYm94LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvdmlld2VyLXByZWZlcmVuY2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL3ZpZXdlci1wcmVmZXJlbmNlL3ZpZXdlci1wcmVmZXJlbmNlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvdmlld2VyLXNjcm9sbGJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL2FwcC9hcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9hcHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL2FyY2hpdmUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9hcmNoaXZlZC1jb2xsZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvYm9vay1pbmZvLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvYm9vay1zaGVsZi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL2NvbGxlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9ob21lL2hvbWUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9ob21lL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9wcm9maWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvcm9vdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL3NldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvc2lnbmluLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvc2lnbnVwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvdmlld2VyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy92aWV3ZXIvdmlld2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL0RpYWxvZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yb3V0ZXMvYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL2NhY2hlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvcmVuZGVyLWJvb2sudHMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9hcHAvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL2hvbWUvaG9tZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9hcHAvYXBwLnNjc3M/NjJmNSIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvaG9tZS9ob21lLnNjc3M/MmU0ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RDQSxtQzs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7O1NBQ2dCO1NBT0E7QUFQVCxVQUFTLFdBQVQsQ0FBcUIsSUFBckIsRUFBMkIsS0FBM0IsRUFBa0M7QUFDckMsWUFBTztBQUNILGVBQU0sY0FBTjtBQUNBLG1CQUZHO0FBR0gscUJBSEc7TUFBUCxDQURxQztFQUFsQztBQU9BLFVBQVMsYUFBVCxDQUF1QixJQUF2QixFQUE2QixJQUE3QixFQUFtQztBQUN0QyxZQUFPO0FBQ0gsZUFBTSxnQkFBTjtBQUNBLG1CQUZHO0FBR0gsbUJBSEc7TUFBUCxDQURzQzs7Ozs7OztBQ1YxQywwQzs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FB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O0FBQ0E7QUFDQSxHOzs7Ozs7O0FDVEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBeUMsMkJBQTJCO0FBQ3BFLG9EQUFtRDs7Ozs7Ozs7QUNUbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBeUMsMkJBQTJCO0FBQ3BFLG9EQUFtRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDI5NTM4MjVlOWY1NTNmNGY2MzIzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0XCJcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJleHBvcnQgKiBmcm9tICcuLi9hY3Rpb25zL2Jvb2snO1xuZXhwb3J0ICogZnJvbSAnLi4vYWN0aW9ucy9ub3RpZmljYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi4vYWN0aW9ucy91c2VyJztcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VWYWx1ZShuYW1lLCB2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdDSEFOR0VfVkFMVUUnLFxuICAgICAgICBuYW1lLFxuICAgICAgICB2YWx1ZVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRWxlbWVudChuYW1lLCBkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1VQREFURV9FTEVNRU5UJyxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGF0YVxuICAgIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvYWN0aW9ucy9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyXCJcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibG9kYXNoXCJcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMSAyXG4gKiovIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgU2VsZWN0aXplSW5wdXQgZnJvbSAnLi9zZWxlY3RpemUtaW5wdXQnO1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vdGV4dGFyZWEnO1xuZXhwb3J0IHsgQnV0dG9uLCBJbnB1dCwgU2VsZWN0aXplSW5wdXQsIFRleHRhcmVhIH07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvZm9ybS9pbmRleC50c3hcbiAqKi8iLCJjb25zdCBIT1NUID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cubG9jYXRpb24ub3JpZ2luIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XG5jb25zdCBBcGlSb290cyA9IHtcbiAgICBMT0NBTDogYCR7SE9TVH0vYXBpL2AsXG4gICAgRE9VQkFOX0JPT0tTOiAnaHR0cHM6Ly9hcGkuZG91YmFuLmNvbS92Mi9ib29rLydcbn07XG5leHBvcnQgZGVmYXVsdCBBcGlSb290cztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9hcGktY29uZmlnL2FwaS1yb290cy50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFNpZGVFZmZlY3QgZnJvbSAncmVhY3Qtc2lkZS1lZmZlY3QnO1xuY2xhc3MgQm9keSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInJlYWN0LWJvZHktY2xhc3MgaGlkZGVuXCJ9KTtcbiAgICB9XG59XG5mdW5jdGlvbiByZWR1Y2VQcm9wc1RvU3RhdGUocHJvcHNMaXN0KSB7XG4gICAgbGV0IGNsYXNzTmFtZTtcbiAgICBwcm9wc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuICAgIH0pO1xuICAgIHJldHVybiBjbGFzc05hbWU7XG59XG5mdW5jdGlvbiBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50KGNsYXNzTmFtZSkge1xuICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhTaWRlRWZmZWN0KHJlZHVjZVByb3BzVG9TdGF0ZSwgaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudCkoQm9keSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvc2lkZS1lZmZlY3RzL2JvZHkudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmNsYXNzIEljb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbmFtZSA9IHRoaXMucHJvcHMubmFtZTtcbiAgICAgICAgbGV0IG1ldGhvZCA9IHRoaXMucHJvcHMub25DbGljaztcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLnByb3BzLnNpemU7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogYGljb24gaWNvbi0ke25hbWV9ICR7c2l6ZX1gLCBvbkNsaWNrOiBtZXRob2R9KSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9pY29uLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5jbGFzcyBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICh0aGlzLnByb3BzLmlzRmx1aWQgPyAnY29udGFpbmVyLWZsdWlkJyA6ICdjb250YWluZXInKSArICh0aGlzLnByb3BzLmNsYXNzTmFtZSA/IGAgJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gIDogJycpO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogY2xhc3NOYW1lfSwgdGhpcy5wcm9wcy5jaGlsZHJlbikpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9sYXlvdXQvY29udGFpbmVyLnRzeFxuICoqLyIsImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgb2JqZWN0VG9VcmxlbmNvZGVkIGZyb20gJy4uL3V0aWxzL3BhcnNlLWZvcm0tZGF0YSc7XG5pbXBvcnQgaGFuZGxlUmVzcG9uc2VKc29uIGZyb20gJy4uL3V0aWxzL2hhbmRsZS1yZXNwb25zZS1qc29uJztcbmNvbnN0IGRlZmF1bHRDb25maWcgPSB7XG4gICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG59O1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGxBcGkoZnVsbFVybCwgY29uZmlnID0ge30pIHtcbiAgICAvLyByZXR1cm4gZmV0Y2ggY29uZmlnXG4gICAgY29uc3QgcGFyc2VDb25maWcgPSAob3JpZ2luYW5Db25maWcpID0+IHtcbiAgICAgICAgbGV0IHsgbWV0aG9kLCBkYXRhLCBjcmVkZW50aWFscywgZGF0YVR5cGUgfSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRDb25maWcsIG9yaWdpbmFuQ29uZmlnKTtcbiAgICAgICAgbGV0IGZldGNoQ29uZmlnID0ge307XG4gICAgICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgICAgIGZldGNoQ29uZmlnLm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgICAgIGZldGNoQ29uZmlnLmNyZWRlbnRpYWxzID0gY3JlZGVudGlhbHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaGFuZGxlIHJlcXVlc3QgaGVhZGVycyBhbmQgYm9keVxuICAgICAgICBpZiAobWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgICAgIGxldCBjb250ZW50VHlwZTtcbiAgICAgICAgICAgIGxldCBib2R5O1xuICAgICAgICAgICAgaWYgKGRhdGFUeXBlID09PSAnanNvbicpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgICAgICBib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhVHlwZSA9PT0gJ3VybGVuY29kZWQnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcbiAgICAgICAgICAgICAgICBib2R5ID0gb2JqZWN0VG9VcmxlbmNvZGVkKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIHVuc3VwcG9ydGVkIGRhdGFUeXBlXG4gICAgICAgICAgICAgICAgZGF0YVR5cGUgPSAndXJsZW5jb2RlZCc7XG4gICAgICAgICAgICAgICAgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcbiAgICAgICAgICAgICAgICBib2R5ID0gb2JqZWN0VG9VcmxlbmNvZGVkKGRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVW5zdXBwb3J0ZWQgZGF0YVR5cGUgdXNlZCBcInVybGVuY29kZWRcIiBpbnN0ZWFkIScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmV0Y2hDb25maWcuaGVhZGVycyA9IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogY29udGVudFR5cGUsXG4gICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLVJlcXVlc3QtTWV0aG9kJzogJ1BPU1QnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZmV0Y2hDb25maWcuYm9keSA9IGJvZHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ0RFTEVURScpIHtcbiAgICAgICAgICAgIGZldGNoQ29uZmlnLmhlYWRlcnMgPSB7XG4gICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLVJlcXVlc3QtTWV0aG9kJzogJ0RFTEVURSdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoQ29uZmlnO1xuICAgIH07XG4gICAgcmV0dXJuIGZldGNoKGZ1bGxVcmwsIHBhcnNlQ29uZmlnKGNvbmZpZykpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKGpzb24gPT4gKHsganNvbiwgcmVzcG9uc2UgfSkpO1xuICAgIH0pXG4gICAgICAgIC50aGVuKCh7IGpzb24sIHJlc3BvbnNlIH0pID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlUmVzcG9uc2VKc29uKGpzb24sIGNvbmZpZy5zY2hlbWEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGpzb24pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnQgZGVmYXVsdCBjYWxsQXBpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3V0aWxzL2NhbGwtYXBpLnRzXG4gKiovIiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9ybWFsaXpyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJub3JtYWxpenJcIlxuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMSAyXG4gKiovIiwiaW1wb3J0IHsgbm9ybWFsaXplIH0gZnJvbSAnbm9ybWFsaXpyJztcbmltcG9ydCBodW1wcyBmcm9tICdodW1wcyc7XG5mdW5jdGlvbiBoYW5kbGVSZXNwb25zZUpzb24oanNvbiwgc2NoZW1hKSB7XG4gICAganNvbiA9IGh1bXBzLmNhbWVsaXplS2V5cyhqc29uKTtcbiAgICBsZXQgcmVzdWx0ID0ganNvbjtcbiAgICBpZiAodHlwZW9mIHNjaGVtYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbih7fSwgbm9ybWFsaXplKGpzb24sIHNjaGVtYSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlUmVzcG9uc2VKc29uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3V0aWxzL2hhbmRsZS1yZXNwb25zZS1qc29uLnRzXG4gKiovIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IEJvb2tMaXN0IGZyb20gJy4vYm9vay1saXN0JztcbmNsYXNzIEJvb2tMaXN0U2VjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgdGl0bGUgPSB0aGlzLnByb3BzLnRpdGxlO1xuICAgICAgICBsZXQgbW9yZUxpbmsgPSB0aGlzLnByb3BzLm1vcmVMaW5rID8gdGhpcy5wcm9wcy5tb3JlTGluayA6IG51bGw7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImJvb2stbGlzdC1zZWN0aW9uXCJ9LCB0aGlzLnByb3BzLnRpdGxlICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwge2NsYXNzTmFtZTogXCJzZWN0aW9uLXRpdGxlXCJ9LCB0aXRsZSkpLCBtb3JlTGluayA/IChSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHtjbGFzc05hbWU6IFwibW9yZVwiLCB0bzogbW9yZUxpbmt9LCBcIuafpeeci+abtOWkmlwiKSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tMaXN0LCB7Ym9va0VudGl0aWVzOiB0aGlzLnByb3BzLmJvb2tFbnRpdGllc30pKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQm9va0xpc3RTZWN0aW9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvYm9vay1saXN0LXNlY3Rpb24udHN4XG4gKiovIiwiaW1wb3J0IHsgU2NoZW1hLCBhcnJheU9mIH0gZnJvbSAnbm9ybWFsaXpyJztcbmNvbnN0IGJvb2sgPSBuZXcgU2NoZW1hKCdib29rcycsIHtcbiAgICBpZEF0dHJpYnV0ZTogJ2lkJ1xufSk7XG5jb25zdCBjb2xsZWN0aW9uID0gbmV3IFNjaGVtYSgnYm9va0NvbGxlY3Rpb25zJywge1xuICAgIGlkQXR0cmlidXRlOiAnaWQnXG59KTtcbmNvbnN0IHByb2ZpbGUgPSBuZXcgU2NoZW1hKCdwcm9maWxlcycsIHtcbiAgICBpZEF0dHJpYnV0ZTogJ2lkJ1xufSk7XG5jb25zdCB1c2VyID0gbmV3IFNjaGVtYSgndXNlcnMnLCB7XG4gICAgaWRBdHRyaWJ1dGU6ICdpZCdcbn0pO1xuY29uc3QgZG91YmFuQm9vayA9IG5ldyBTY2hlbWEoJ2RvdWJhbkJvb2tzJywge1xuICAgIGlkQXR0cmlidXRlOiAnaWQnXG59KTtcbmNvbnN0IGJvb2tQcm9ncmVzcyA9IG5ldyBTY2hlbWEoJ2Jvb2tzJywge1xuICAgIGlkQXR0cmlidXRlOiAnYm9va0lkJ1xufSk7XG5jb25zdCBtYXRjaGVkQm9va3MgPSBuZXcgU2NoZW1hKCdib29rcycsIHtcbiAgICBpZEF0dHJpYnV0ZTogJ2Jvb2tJZCdcbn0pO1xuZXhwb3J0IGNvbnN0IFNjaGVtYXMgPSB7XG4gICAgQk9PSzogYm9vayxcbiAgICBCT09LX1BST0dSRVNTOiBib29rUHJvZ3Jlc3MsXG4gICAgQk9PS19BUlJBWTogYXJyYXlPZihib29rKSxcbiAgICBET1VCQU5fQk9PS19TRUFSQ0hfUkVTVUxUUzogeyBib29rczogYXJyYXlPZihkb3ViYW5Cb29rKSB9LFxuICAgIFVTRVJfQVJSQVk6IGFycmF5T2YodXNlciksXG4gICAgTUFUQ0hFRF9CT09LX0FSUkFZOiBhcnJheU9mKG1hdGNoZWRCb29rcyksXG4gICAgQ09MTEVDVElPTjogY29sbGVjdGlvbixcbiAgICBDT0xMRUNUSU9OX0FSUkFZOiBhcnJheU9mKGNvbGxlY3Rpb24pLFxuICAgIFBST0ZJTEU6IHByb2ZpbGVcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvc2NoZW1hcy9pbmRleC50c1xuICoqLyIsImltcG9ydCBjYWxsQXBpIGZyb20gJy4vY2FsbC1hcGknO1xuaW1wb3J0IEFwaVJvb3RzIGZyb20gJy4uL2FwaS1jb25maWcvYXBpLXJvb3RzJztcbmV4cG9ydCBmdW5jdGlvbiBhZGRDb2xsZWN0aW9uKGRhdGEpIHtcbiAgICByZXR1cm4gY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1jb2xsZWN0aW9uc2AsIHsgbWV0aG9kOiAnUE9TVCcsIGRhdGE6IGRhdGEgfSk7XG59XG4vKipcbiAqIGRhdGE6IG5hbWUsIGF1dGhvciwgZGVzY3JpcHRpb24sIGNvdmVyLCBjb250ZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRCb29rKGRhdGEpIHtcbiAgICByZXR1cm4gY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1ib29rc2AsIHsgbWV0aG9kOiAnUE9TVCcsIGRhdGE6IGRhdGEgfSk7XG59XG4vKipcbiAqIGRhdGE6IG5hbWUsIHNsdWcsIGRlc2NyaXB0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRBdXRob3IoZGF0YSkge1xuICAgIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWF1dGhvcnNgLCB7IG1ldGhvZDogJ1BPU1QnLCBkYXRhOiBkYXRhIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEF1dGhvcnMocXVlcnkpIHtcbiAgICByZXR1cm4gY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1hdXRob3JzP3E9JHtxdWVyeX1gKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hCb29rcyhxdWVyeSkge1xuICAgIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWJvb2tzP3E9JHtxdWVyeX1gKTtcbn1cbi8qKlxuICogZGF0YTogcGFnZU5vLCBwYWdlU3VtLCBwZXJjZW50YWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9ncmVzcyhib29rSWQsIGRhdGEpIHtcbiAgICBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWJvb2tzLyR7Ym9va0lkfS9wcm9ncmVzc2AsIHsgbWV0aG9kOiAnUE9TVCcsIGRhdGEgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQm9vayhpZCkge1xuICAgIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWJvb2tzLyR7aWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnXG4gICAgfSk7XG59XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYWRkQ29sbGVjdGlvbixcbiAgICBhZGRCb29rLFxuICAgIGFkZEF1dGhvcixcbiAgICBzZWFyY2hCb29rcyxcbiAgICBzZWFyY2hBdXRob3JzLFxuICAgIHNldFByb2dyZXNzLFxuICAgIGRlbGV0ZUJvb2tcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvdXRpbHMvYXBpcy50c1xuICoqLyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvYmplY3RUb1VybGVuY29kZWQob3JpZ2luYWxPYmopIHtcbiAgICBsZXQgb2JqZWN0ID0gXy5jbG9uZURlZXAob3JpZ2luYWxPYmopO1xuICAgIGxldCBlbmNvZGVkdXJsID0gJyc7XG4gICAgZm9yIChsZXQgcHJvcCBpbiBvYmplY3QpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmplY3RbcHJvcF0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBvYmplY3RbcHJvcF0gPSBvYmplY3RbcHJvcF0udG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbmNvZGVkdXJsID0gYCR7ZW5jb2RlZHVybH0ke3Byb3B9PSR7b2JqZWN0W3Byb3BdfSZgO1xuICAgIH1cbiAgICByZXR1cm4gZW5jb2RlZHVybC5zdWJzdHIoMCwgZW5jb2RlZHVybC5sZW5ndGggLSAxKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9wYXJzZS1mb3JtLWRhdGEudHNcbiAqKi8iLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHVtcHNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImh1bXBzXCJcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMlxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImlzb21vcnBoaWMtZmV0Y2hcIlxuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMSAyXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmNsYXNzIElucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lID8gYGlucHV0LXdyYXAgJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gIDogJ2lucHV0LXdyYXAnO1xuICAgICAgICBsZXQgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKTtcbiAgICAgICAgZGVsZXRlIHByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7cGxhY2Vob2xkZXI6IHRoaXMucHJvcHMucGxhY2Vob2xkZXIsIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlLCBvbkNoYW5nZTogZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpO1xuICAgICAgICB9LCB0eXBlOiB0aGlzLnByb3BzLnR5cGUgPyB0aGlzLnByb3BzLnR5cGUgOiAndGV4dCcsIG5hbWU6IHRoaXMucHJvcHMubmFtZSA/IHRoaXMucHJvcHMubmFtZSA6IG51bGx9KSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vaW5wdXQudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmNsYXNzIFRleHRhcmVhIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lID8gYHRleHRhcmVhLXdyYXAgJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gIDogJ3RleHRhcmVhLXdyYXAnO1xuICAgICAgICBsZXQgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKTtcbiAgICAgICAgZGVsZXRlIHByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCB7cGxhY2Vob2xkZXI6IHRoaXMucHJvcHMucGxhY2Vob2xkZXIsIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlLCBvbkNoYW5nZTogZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpO1xuICAgICAgICB9LCB0eXBlOiB0aGlzLnByb3BzLnR5cGUgPyB0aGlzLnByb3BzLnR5cGUgOiAndGV4dCcsIG5hbWU6IHRoaXMucHJvcHMubmFtZSA/IHRoaXMucHJvcHMubmFtZSA6IG51bGx9KSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vdGV4dGFyZWEudHN4XG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXBcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cFwiXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlZHV4XCJcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDJcbiAqKi8iLCJpbXBvcnQgeyBTY2hlbWFzIH0gZnJvbSAnLi4vc2NoZW1hcyc7XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hCb29rUHJvZ3Jlc3MoYm9va0lkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9va0lkLFxuICAgICAgICBDQUxMX0FQSToge1xuICAgICAgICAgICAgdHlwZXM6IFsnQk9PS19QUk9HUkVTU19SRVFVRVNUJywgJ0JPT0tfUFJPR1JFU1NfU1VDQ0VTUycsICdCT09LX1BST0dSRVNTX0ZBSUxVUkUnXSxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgYm9va3MvJHtib29rSWR9L3Byb2dyZXNzYCxcbiAgICAgICAgICAgIHNjaGVtYTogU2NoZW1hcy5CT09LX1BST0dSRVNTXG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQm9va3MoZmxvd1R5cGUgPSAnbmV3ZXN0Jykge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIGZvciBwYWdpbmF0ZVxuICAgICAgICBmbG93VHlwZSxcbiAgICAgICAgQ0FMTF9BUEk6IHtcbiAgICAgICAgICAgIHR5cGVzOiBbJ0JPT0tTX1JFUVVFU1QnLCAnQk9PS1NfU1VDQ0VTUycsICdCT09LU19GQUlMVVJFJ10sXG4gICAgICAgICAgICBlbmRwb2ludDogYGJvb2tzP2V4Y2x1ZGU9Y29udGVudGAsXG4gICAgICAgICAgICBzY2hlbWE6IFNjaGVtYXMuQk9PS19BUlJBWSxcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hCb29rKGJvb2tJZCwgZmllbGRzKSB7XG4gICAgbGV0IGVuZHBvaW50ID0gYGJvb2tzLyR7Ym9va0lkfWA7XG4gICAgaWYgKGZpZWxkcykge1xuICAgICAgICBlbmRwb2ludCArPSBgP2ZpZWxkcz0ke2ZpZWxkcy5qb2luKCcsJyl9YDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9va0lkLFxuICAgICAgICBDQUxMX0FQSToge1xuICAgICAgICAgICAgdHlwZXM6IFsnQk9PS19SRVFVRVNUJywgJ0JPT0tfU1VDQ0VTUycsICdCT09LX0ZBSUxVUkUnXSxcbiAgICAgICAgICAgIGVuZHBvaW50LFxuICAgICAgICAgICAgc2NoZW1hOiBTY2hlbWFzLkJPT0tcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hDb2xsZWN0aW9ucyhmbG93VHlwZSA9ICduZXdlc3QnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZmxvd1R5cGUsXG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydDT0xMRUNUSU9OU19SRVFVRVNUJywgJ0NPTExFQ1RJT05TX1NVQ0NFU1MnLCAnQ09MTEVDVElPTlNfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGBjb2xsZWN0aW9uc2AsXG4gICAgICAgICAgICBzY2hlbWE6IFNjaGVtYXMuQ09MTEVDVElPTl9BUlJBWVxuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENvbGxlY3Rpb24oY29sbGVjdGlvbklkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29sbGVjdGlvbklkLFxuICAgICAgICBDQUxMX0FQSToge1xuICAgICAgICAgICAgdHlwZXM6IFsnQ09MTEVDVElPTl9SRVFVRVNUJywgJ0NPTExFQ1RJT05fU1VDQ0VTUycsICdDT0xMRUNUSU9OX0ZBSUxVUkUnXSxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgY29sbGVjdGlvbnMvJHtjb2xsZWN0aW9uSWR9YCxcbiAgICAgICAgICAgIHNjaGVtYTogU2NoZW1hcy5DT0xMRUNUSU9OXG4gICAgICAgIH1cbiAgICB9O1xufVxuLy8gZXhwb3J0IGZ1bmN0aW9uIGZldGNoQm9va0NvbnRlbnQoYm9va0lkKSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgYm9va0lkLFxuLy8gICAgIENBTExfQVBJOiB7XG4vLyAgICAgICB0eXBlczogWydCT09LX0NPTlRFTlRfUkVRVUVTVCcsICdCT09LX0NPTlRFTlRfU1VDQ0VTUycsICdCT09LX0NPTlRFTlRfRkFJTFVSRSddLFxuLy8gICAgICAgZW5kcG9pbnQ6IGBib29rcy8ke2Jvb2tJZH0vY29udGVudGAsXG4vLyAgICAgICBzY2hlbWE6IFNjaGVtYXMuQk9PS1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuLy9cbi8vIGV4cG9ydCBmdW5jdGlvbiBmZXRjaEJvb2tJbmZvKGJvb2tJZCkge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIGJvb2tJZCxcbi8vICAgICBDQUxMX0FQSTp7XG4vLyAgICAgICB0eXBlczogWydCT09LX0lORk9fUkVRVUVTVCcsICdCT09LX0lORk9fU1VDQ0VTUycsICdCT09LX0lORk9fRkFJTFVSRSddLFxuLy8gICAgICAgZW5kcG9pbnQ6IGBib29rcy8ke2Jvb2tJZH1gLFxuLy8gICAgICAgc2NoZW1hOiBTY2hlbWFzLkJPT0tfQVJSQVlcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbi8vIGV4cG9ydCBmdW5jdGlvbiBmZXRjaERvdWJhbkJvb2tTZWFyY2hSZXN1bHRzKHF1ZXJ5KSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgcXVlcnksXG4vLyAgICAgQ0FMTF9BUEk6IHtcbi8vICAgICAgIHR5cGVzOiBbJ0RPVUJBTl9CT09LX1NFQVJDSF9SRVFVRVNUJywgJ0RPVUJBTl9CT09LX1NFQVJDSF9TVUNDRVNTJywgJ0RPVUJBTl9CT09LX1NFQVJDSF9GQUlMVVJFJ10sXG4vLyAgICAgICBlbmRwb2ludDogYHNlYXJjaD9jb3VudD01JnE9JHtxdWVyeX1gLFxuLy8gICAgICAgYXBpVXJsOiBBcGlSb290cy5ET1VCQU5fQk9PS1MsXG4vLyAgICAgICBzY2hlbWE6IFNjaGVtYXMuRE9VQkFOX0JPT0tfU0VBUkNIX1JFU1VMVFMsXG4vLyAgICAgICBleHRlbmRlZE9wdGlvbnM6IHsgdXNlSnNvbnA6IHRydWUgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuLy8gZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEJvb2tzKHF1ZXJ5KSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgcXVlcnksXG4vLyAgICAgQ0FMTF9BUEk6IHtcbi8vICAgICAgIHR5cGVzOiBbJ0JPT0tfU0VBUkNIX1JFUVVFU1QnLCAnQk9PS19TRUFSQ0hfU1VDQ0VTUycsICdCT09LX1NFQVJDSF9GQUlMVVJFJ10sXG4vLyAgICAgICBlbmRwb2ludDogYHNlYXJjaD9xPSR7cXVlcnl9YCxcbi8vICAgICAgIGFwaVVybDogQXBpUm9vdHMuTE9DQUwsXG4vLyAgICAgICBzY2hlbWE6IFNjaGVtYXMuTUFUQ0hFRF9CT09LX0FSUkFZXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvYWN0aW9ucy9ib29rLnRzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIHNlbmROb3RpZmljYXRpb24obWVzc2FnZSwgbXNnVHlwZSA9ICdzdWNjZXNzJywgdCA9IDUwMDApIHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IE1hdGgucmFuZG9tKCkudG9GaXhlZCg4KS5zdWJzdHIoMik7XG4gICAgICAgIGRpc3BhdGNoKHNob3dOb3RpZmljYXRpb24oaWQsIG1lc3NhZ2UsIG1zZ1R5cGUpKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChoaWRlTm90aWZpY2F0aW9uKGlkKSk7XG4gICAgICAgIH0sIHQpO1xuICAgIH07XG59XG5leHBvcnQgY29uc3QgU0hPV19OT1RJRklDQVRJT04gPSAnU0hPV19OT1RJRklDQVRJT04nO1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24oaWQsIG1lc3NhZ2UsIG1zZ1R5cGUgPSAnc3VjY2VzcycpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTSE9XX05PVElGSUNBVElPTixcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgbXNnVHlwZSxcbiAgICAgICAgaWRcbiAgICB9O1xufVxuZXhwb3J0IGNvbnN0IEhJREVfTk9USUZJQ0FUSU9OID0gJ0hJREVfTk9USUZJQ0FUSU9OJztcbmV4cG9ydCBmdW5jdGlvbiBoaWRlTm90aWZpY2F0aW9uKGlkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogSElERV9OT1RJRklDQVRJT04sXG4gICAgICAgIGlkXG4gICAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9hY3Rpb25zL25vdGlmaWNhdGlvbi50c1xuICoqLyIsImltcG9ydCB7IFNjaGVtYXMgfSBmcm9tICcuLi9zY2hlbWFzL2luZGV4JztcbmV4cG9ydCBmdW5jdGlvbiB1c2VyQXV0aCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBDQUxMX0FQSToge1xuICAgICAgICAgICAgdHlwZXM6IFsnVVNFUl9BVVRIX1JFUVVFU1QnLCAnVVNFUl9BVVRIX1NVQ0NFU1MnLCAnVVNFUl9BVVRIX0ZBSUxVUkUnXSxcbiAgICAgICAgICAgIGVuZHBvaW50OiAnYXV0aCdcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQcm9maWxlKGlkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgQ0FMTF9BUEk6IHtcbiAgICAgICAgICAgIHR5cGVzOiBbJ1BST0ZJTEVfUkVRVUVTVCcsICdQUk9GSUxFX1NVQ0NFU1MnLCAnUFJPRklMRV9GQUlMVVJFJ10sXG4gICAgICAgICAgICBlbmRwb2ludDogYHVzZXJzLyR7aWR9L3Byb2ZpbGVgLFxuICAgICAgICAgICAgc2NoZW1hOiBTY2hlbWFzLlBST0ZJTEVcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hVc2VyTGlzdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBDQUxMX0FQSToge1xuICAgICAgICAgICAgdHlwZXM6IFsnVVNFUl9MSVNUX1JFUVVFU1QnLCAnVVNFUl9MSVNUX1NVQ0NFU1MnLCAnVVNFUl9MSVNUX0ZBSUxVUkUnXSxcbiAgICAgICAgICAgIGVuZHBvaW50OiAndXNlcnMnLFxuICAgICAgICAgICAgc2NoZW1hOiBTY2hlbWFzLlVTRVJfQVJSQVlcbiAgICAgICAgfVxuICAgIH07XG59XG4vLyBleHBvcnQgZnVuY3Rpb24gZmV0Y2hTaGVsZih1c2VySWQpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICB1c2VySWQsXG4vLyAgICAgQ0FMTF9BUEk6IHtcbi8vICAgICAgIHR5cGVzOiBbJ1NIRUxGX1JFUVVFU1QnLCAnU0hFTEZfU1VDQ0VTUycsICdTSEVMRl9GQUlMVVJFJ10sXG4vLyAgICAgICBlbmRwb2ludDogYHVzZXJzLyR7dXNlcklkfS9zaGVsZmAsXG4vLyAgICAgICBzY2hlbWE6IFNjaGVtYXMuQk9PS19BUlJBWSxcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFNoZWxmKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBheWxvYWQ6ICdib29rU2hlbGYnLFxuICAgICAgICBDQUxMX0FQSToge1xuICAgICAgICAgICAgdHlwZXM6IFsnU0hFTEZfUkVRVUVTVCcsICdTSEVMRl9TVUNDRVNTJywgJ1NIRUxGX0ZBSUxVUkUnXSxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgdXNlci9ib29rcy9zaGVsZmAsXG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2FjdGlvbnMvdXNlci50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2VsZW1lbnRzL2xheW91dCc7XG5jbGFzcyBCcmFuZGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNEcm9wZG93bk1lbnVWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b2dnbGVEcm9wZG93bk1lbnUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNEcm9wZG93bk1lbnVWaXNpYmxlOiAhdGhpcy5zdGF0ZS5pc0Ryb3Bkb3duTWVudVZpc2libGVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHVzZXJuYW1lID0gdGhpcy5wcm9wcy51c2VybmFtZTtcbiAgICAgICAgbGV0IGlzQWRtaW4gPSB0aGlzLnByb3BzLmlzQWRtaW4gPyB0aGlzLnByb3BzLmlzQWRtaW4gOiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IGBicmFuZGluZyAke3RoaXMucHJvcHMuY2xhc3NOYW1lID8gdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAnJ31gfSwgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIHtjbGFzc05hbWU6IFwiY2xlYXJmaXhcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHtjbGFzc05hbWU6IFwibG9nbyBsZWZ0XCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvXCJ9LCBcInJlYWRyXCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcIm5hdiBsZWZ0XCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJuYXYtbGlua3NcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvYnJvd3NlXCJ9LCBcIua1j+iniFwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvY29sbGVjdGlvbnNcIn0sIFwi5Lmm5Y2VXCIpKSkpLCB1c2VybmFtZSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtvbk1vdXNlTGVhdmU6IHRoaXMudG9nZ2xlRHJvcGRvd25NZW51LmJpbmQodGhpcyksIG9uTW91c2VFbnRlcjogdGhpcy50b2dnbGVEcm9wZG93bk1lbnUuYmluZCh0aGlzKSwgY2xhc3NOYW1lOiBcIm5hdiByaWdodFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJyZWNlbnQtcmVhZGluZ1wifSwgXCLmnIDov5HpmIXor7tcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwidXNlcm5hbWVcIn0sIHVzZXJuYW1lLCBpc0FkbWluID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiYmFkZ2UtZGFya1wifSwgXCJBZG1pblwiKSkgOiBudWxsKSwgdGhpcy5zdGF0ZS5pc0Ryb3Bkb3duTWVudVZpc2libGUgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtvbkNsaWNrOiB0aGlzLnRvZ2dsZURyb3Bkb3duTWVudS5iaW5kKHRoaXMpLCBjbGFzc05hbWU6IFwiZHJvcGRvd24tbWVudVwifSwgaXNBZG1pbiA9PT0gdHJ1ZSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiL2NvbnNvbGVcIn0sIFwi5o6n5Yi25Y+wXCIpKSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IGAvc2hlbGZgfSwgXCLkuabmnrZcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IGAvcHJvZmlsZWB9LCBcIuS4quS6uuS4u+mhtVwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogYC9zZXR0aW5nc2B9LCBcIuiuvue9rlwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogJy9sb2dvdXQnfSwgXCLpgIDlh7pcIikpKSkgOiBudWxsKSkgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcIm5hdiByaWdodFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtjbGFzc05hbWU6IFwibmF2LWxpbmtzXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiL3NpZ25pblwifSwgXCLnmbvlvZVcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiL3NpZ251cFwifSwgXCLms6jlhoxcIikpKSkpKSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBCcmFuZGluZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb21wb25lbnRzL2JyYW5kaW5nLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5jbGFzcyBOb01hdGNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsIFwiNDA0XCIpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBOb01hdGNoO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvbm8tbWF0Y2gudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uIGZyb20gJy4uL2VsZW1lbnRzL2ljb24nO1xuY2xhc3MgTm90aWZpY2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLnByb3BzLnR5cGUgPyB0aGlzLnByb3BzLnR5cGUgOiAnc3VjY2Vzcyc7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCB0aGlzLnByb3BzLnZpc2libGUgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogYG5vdGlmaWNhdGlvbiBub3RpZmljYXRpb24tLSR7dHlwZX0gejFgLnRyaW0oKX0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwge29uQ2xpY2s6IHRoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2UsIG5hbWU6IFwiY2xvc2VcIn0pLCB0aGlzLnByb3BzLm1lc3NhZ2UpKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9hbGVydC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCc7XG5jbGFzcyBGYWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gbGV0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lP3RoaXMucHJvcHMuY2xhc3NOYW1lOm51bGxcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwLCB7Y29tcG9uZW50OiBcImRpdlwiLCB0cmFuc2l0aW9uTmFtZTogXCJmYWRlXCIsIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ6IDMwMCwgdHJhbnNpdGlvbkxlYXZlVGltZW91dDogMzAwfSwgdGhpcy5wcm9wcy5jaGlsZHJlbikpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZhZGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvYW5pbWF0aW9ucy9mYWRlLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWUgPyBgYnRuICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YCA6ICdidG4nO1xuICAgICAgICBsZXQgc2l6ZSA9IHRoaXMucHJvcHMuc2l6ZSA/IHRoaXMucHJvcHMuc2l6ZSA6ICdtZWRpdW0nO1xuICAgICAgICBsZXQgaXNGbHVpZCA9IHRoaXMucHJvcHMuaXNGbHVpZCA/IHRoaXMucHJvcHMuaXNGbHVpZCA6IGZhbHNlO1xuICAgICAgICBsZXQgY29sb3IgPSB0aGlzLnByb3BzLmNvbG9yID8gdGhpcy5wcm9wcy5jb2xvciA6IG51bGw7XG4gICAgICAgIGxldCBvbkNsaWNrO1xuICAgICAgICBpZiAoc2l6ZSA9PT0gJ3NtYWxsJykge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgYnRuLXNtYWxsJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaXplID09PSAnbGFyZ2UnKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBidG4tbGFyZ2UnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNpemUgPT09ICdtZWRpdW0nKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBidG4tbWVkaXVtJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Vuc3VwcG9ydCBzaXplIScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9IGAgYnRuLSR7Y29sb3J9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNGbHVpZCkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSBidG4tZmx1aWRgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRvKSB7XG4gICAgICAgICAgICBvbkNsaWNrID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2godGhpcy5wcm9wcy50byk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb25DbGljayA9IGUgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGxldCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lIH0sIHsgb25DbGljayB9KTtcbiAgICAgICAgZGVsZXRlIHByb3BzLnRvO1xuICAgICAgICBkZWxldGUgcHJvcHMuY29sb3I7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5zaXplO1xuICAgICAgICBkZWxldGUgcHJvcHMuaXNGbHVpZDtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KCdidXR0b24nLCBwcm9wcywgdGhpcy5wcm9wcy5jaGlsZHJlbikpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2J1dHRvbi9idXR0b24udHN4XG4gKiovIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvZm9ybS9idXR0b24vaW5kZXgudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uIGZyb20gJy4uL2ljb24nO1xuY2xhc3MgU2VsZWN0aXplSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNob3dPcHRpb25zOiBmYWxzZSxcbiAgICAgICAgICAgIGZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIGV4cGVuZGVkT3B0aW9uSW5kZXg6IDBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oaWRlT3B0aW9ucyA9IHRoaXMuaGlkZU9wdGlvbnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5mb2N1c0lucHV0ID0gdGhpcy5mb2N1c0lucHV0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2hvd09wdGlvbnMgPSB0aGlzLnNob3dPcHRpb25zLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGFkZFZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25WYWx1ZXNDaGFuZ2UodGhpcy5wcm9wcy52YWx1ZXMuY29uY2F0KG5ld1ZhbHVlKSk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UodGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHRpb24gPT4gKG9wdGlvbi52YWx1ZSA9PT0gbmV3VmFsdWUudmFsdWVcbiAgICAgICAgICAgICAgICA/IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbiwgeyBkaXNhYmxlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIDogb3B0aW9uKSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xlYXJJbnB1dFZhbHVlKCk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5zdGF5Rm9jdXNlZCA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5wcm9wcy5zdGF5Rm9jdXNlZCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGlkZU9wdGlvbnMoKTtcbiAgICB9XG4gICAgcmVtb3ZlVmFsdWUoaW5kZXgpIHtcbiAgICAgICAgbGV0IG5ld1ZhbHVlcyA9IFtdO1xuICAgICAgICBsZXQgcmVtb3ZlZFZhbHVlO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZXMgPSB0aGlzLnByb3BzLnZhbHVlcy5zbGljZSgwLCB0aGlzLnByb3BzLnZhbHVlcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIHJlbW92ZWRWYWx1ZSA9IHRoaXMucHJvcHMudmFsdWVzW3RoaXMucHJvcHMudmFsdWVzLmxlbmd0aCAtIDFdLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV3VmFsdWVzID0gdGhpcy5wcm9wcy52YWx1ZXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlZFZhbHVlID0gdi52YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaSAhPT0gaW5kZXg7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKHRoaXMucHJvcHMub3B0aW9ucy5tYXAob3B0aW9uID0+IChvcHRpb24udmFsdWUgPT09IHJlbW92ZWRWYWx1ZVxuICAgICAgICAgICAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9uLCB7IGRpc2FibGVkOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIDogb3B0aW9uKSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMub25WYWx1ZXNDaGFuZ2UobmV3VmFsdWVzKTtcbiAgICB9XG4gICAgY2xlYXJJbnB1dFZhbHVlKCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UoJycpO1xuICAgIH1cbiAgICBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDggJiYgIXRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWUoLTEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRvZG9cbiAgICAgICAgLy8gaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgdGhpcy5zdGF0ZS5zaG93T3B0aW9ucykge1xuICAgICAgICAvLyAgIHRoaXMuYWRkVmFsdWUoKVxuICAgICAgICAvLyB9XG4gICAgfVxuICAgIGZvY3VzSW5wdXQoKSB7XG4gICAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICB9XG4gICAgaGlkZU9wdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd09wdGlvbnM6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaG93T3B0aW9ucyhlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd09wdGlvbnM6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVPcHRpb25zKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVPcHRpb25zKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbGFiZWwgPSB0aGlzLnByb3BzLmxhYmVsID8gdGhpcy5wcm9wcy5sYWJlbCA6IG51bGw7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgPyB0aGlzLnByb3BzLnZhbHVlIDogJyc7XG4gICAgICAgIGxldCB2YWx1ZXMgPSB0aGlzLnByb3BzLnZhbHVlcztcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnMgPyB0aGlzLnByb3BzLm9wdGlvbnMgOiBbXTtcbiAgICAgICAgbGV0IGlucHV0V2lkdGggPSB2YWx1ZXMubGVuZ3RoID4gMCA/ICh2YWx1ZS5sZW5ndGggPT09IDAgPyAxNiA6IHZhbHVlLmxlbmd0aCAqIDE2KSA6ICcxMDAlJztcbiAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gdmFsdWVzLmxlbmd0aCA+IDAgPyAnJyA6IHRoaXMucHJvcHMucGxhY2Vob2xkZXI7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSAnc2VsZWN0aXplLWlucHV0JyArICh0aGlzLnN0YXRlLmZvY3VzID09PSB0cnVlID8gJyBmb2N1cycgOiAnJykgKyAodmFsdWVzLmxlbmd0aCA9PT0gMCA/ICcgZW1wdHknIDogJycpO1xuICAgICAgICBsZXQgYWRkTmV3VmFsdWUgPSB0aGlzLnByb3BzLmFkZE5ld1ZhbHVlID8gdGhpcy5wcm9wcy5hZGROZXdWYWx1ZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IGBzZWxlY3RpemUtaW5wdXQtd3JhcCAke3RoaXMucHJvcHMuY2xhc3NOYW1lID8gdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAnJ31gLnRyaW0oKX0sIGxhYmVsID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7Y2xhc3NOYW1lOiBcImZvcm0tbGFiZWxcIn0sIGxhYmVsKSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IGNsYXNzTmFtZSwgb25DbGljazogZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd09wdGlvbnMoZSk7XG4gICAgICAgIH19LCB2YWx1ZXMubWFwKCh2LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7a2V5OiBpbmRleCwgY2xhc3NOYW1lOiBcInNlbGVjdGl6ZS10YWdcIn0sIHYubmFtZSwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7c2l6ZTogJ3NtYWxsJywgbmFtZTogXCJjbG9zZVwiLCBvbkNsaWNrOiBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVZhbHVlKGluZGV4KTtcbiAgICAgICAgICAgIH19KSkpO1xuICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtzdHlsZTogeyB3aWR0aDogaW5wdXRXaWR0aCB9LCByZWY6IHJlZiA9PiB7IHRoaXMuaW5wdXQgPSByZWY7IH0sIHZhbHVlOiB2YWx1ZSwgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLCBvbkJsdXI6IGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiBmYWxzZSB9KTtcbiAgICAgICAgfSwgb25Gb2N1czogZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IHRydWUgfSk7XG4gICAgICAgIH0sIG9uQ2hhbmdlOiBlID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25JbnB1dENoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH0sIG9uS2V5RG93bjogZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUtleVByZXNzKGUpO1xuICAgICAgICB9fSkpLCAodGhpcy5zdGF0ZS5zaG93T3B0aW9ucykgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtjbGFzc05hbWU6IFwic2VsZWN0aXplLXF1ZXJ5LXJlc3VsdHNcIn0sIG9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7a2V5OiBpbmRleCwgY2xhc3NOYW1lOiBcImRpc2FibGVkXCJ9LCBvcHRpb24ubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7a2V5OiBpbmRleCwgb25DbGljazogZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRWYWx1ZShvcHRpb24pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uT3B0aW9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk9wdGlvbkNsaWNrKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIG9wdGlvbi5uYW1lKSkpO1xuICAgICAgICB9KSwgYWRkTmV3VmFsdWUgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtvbkNsaWNrOiBlID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25BZGROZXdWYWx1ZSh0aGlzLnByb3BzLnZhbHVlKTtcbiAgICAgICAgfSwgY2xhc3NOYW1lOiBcImFkZFwifSwgXCLmt7vliqAgXCIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgdGhpcy5wcm9wcy52YWx1ZSkpKSA6IG51bGwpKSA6IG51bGwpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBTZWxlY3RpemVJbnB1dDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL3NlbGVjdGl6ZS1pbnB1dC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmNsYXNzIFN3aXRjaGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMub24gPyAnb24nIDogJ29mZic7XG4gICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSArICcgc3dpdGNoZXInO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogY2xhc3NOYW1lfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInN3aXRjaGVyLWJ1dHRvblwifSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJzd2l0Y2hlci10cmFja1wifSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoU3dpdGNoZXIpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL3N3aXRjaGVyLnRzeFxuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBnZXRCb29rVmlldygpIHtcbiAgICBsZXQgYXNwZWN0UmF0aW8gPSA3IC8gOTtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNTQwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JlZW46ICdwaG9uZScsXG4gICAgICAgICAgICBwYWdlV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgICAgcGFnZUhlaWdodDogd2luZG93LmlubmVyV2lkdGggLyBhc3BlY3RSYXRpb1xuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmVlbjogJ2hkJyxcbiAgICAgICAgICAgIHBhZ2VXaWR0aDogNzAwLFxuICAgICAgICAgICAgcGFnZUhlaWdodDogNzAwIC8gYXNwZWN0UmF0aW9cbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbG9ja1Njcm9sbCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG59XG5leHBvcnQgZnVuY3Rpb24gdW5sb2NrU2Nyb2xsKCkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG59XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0Qm9va1ZpZXcsXG4gICAgbG9ja1Njcm9sbCxcbiAgICB1bmxvY2tTY3JvbGxcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvdXRpbHMvdmlldy50c1xuICoqLyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxyXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcclxuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xyXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNpZGUtZWZmZWN0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdC1zaWRlLWVmZmVjdFwiXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcic7XG5leHBvcnQgeyBDb250YWluZXIgfTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9sYXlvdXQvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuY2xhc3MgTG9hZGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJsb2FkaW5nLXdyYXBcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiaWNvbiBpY29uLWxvYWRpbmdcIn0pKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9sb2FkaW5nLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuY2xhc3MgTmF2VGFiIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibmF2LXRhYlwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIG51bGwsIHRoaXMucHJvcHMudGFicy5tYXAoKHRhYiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSBudWxsO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLnByb3BzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSAnY3VycmVudCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWUsIGtleTogaW5kZXh9LCB0YWIpKTtcbiAgICAgICAgfSkpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKE5hdlRhYik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvbmF2LXRhYi50c3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4gKiogbW9kdWxlIGlkID0gNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSA2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xyXG5tb2R1bGUuZXhwb3J0cyA9IChcclxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xyXG4pLnNwbGl0KCcsJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gNjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbiAqKiBtb2R1bGUgaWQgPSA2MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gNjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxyXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXHJcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcclxuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xyXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbiAqKiBtb2R1bGUgaWQgPSA2NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuICoqIG1vZHVsZSBpZCA9IDY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuICoqIG1vZHVsZSBpZCA9IDY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4gKiogbW9kdWxlIGlkID0gNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDY5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuICoqIG1vZHVsZSBpZCA9IDcwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDcyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbiAqKiBtb2R1bGUgaWQgPSA3M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduJyk7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5Jyk7XG5cbnZhciBfc3RyaW5naWZ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZ2lmeSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheTIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheScpO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2xpY2VkVG9BcnJheTIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3InKTtcblxudmFyIF9nZXRJdGVyYXRvcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRJdGVyYXRvcjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIElzb21vcnBoaWMgQ1NTIHN0eWxlIGxvYWRlciBmb3IgV2VicGFja1xuICpcbiAqIENvcHlyaWdodCDCqSAyMDE1LTIwMTYgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHByZWZpeCA9ICdzJztcbnZhciBpbnNlcnRlZCA9IHt9O1xuXG4vLyBCYXNlNjQgZW5jb2RpbmcgYW5kIGRlY29kaW5nIC0gVGhlIFwiVW5pY29kZSBQcm9ibGVtXCJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dCYXNlNjQvQmFzZTY0X2VuY29kaW5nX2FuZF9kZWNvZGluZyNUaGVfVW5pY29kZV9Qcm9ibGVtXG5mdW5jdGlvbiBiNjRFbmNvZGVVbmljb2RlKHN0cikge1xuICByZXR1cm4gYnRvYShlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC8lKFswLTlBLUZdezJ9KS9nLCBmdW5jdGlvbiAobWF0Y2gsIHAxKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoJzB4JyArIHAxKTtcbiAgfSkpO1xufVxuXG4vKipcbiAqIFJlbW92ZSBzdHlsZS9saW5rIGVsZW1lbnRzIGZvciBzcGVjaWZpZWQgbm9kZSBJRHNcbiAqIGlmIHRoZXkgYXJlIG5vIGxvbmdlciByZWZlcmVuY2VkIGJ5IFVJIGNvbXBvbmVudHMuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUNzcyhpZHMpIHtcbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoaWRzKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgdmFyIGlkID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgIGlmICgtLWluc2VydGVkW2lkXSA8PSAwKSB7XG4gICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4ICsgaWQpO1xuICAgICAgICBpZiAoZWxlbSkge1xuICAgICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBFeGFtcGxlOlxuICogICAvLyBJbnNlcnQgQ1NTIHN0eWxlcyBvYmplY3QgZ2VuZXJhdGVkIGJ5IGBjc3MtbG9hZGVyYCBpbnRvIERPTVxuICogICB2YXIgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKFtbMSwgJ2JvZHkgeyBjb2xvcjogcmVkOyB9J11dKTtcbiAqXG4gKiAgIC8vIFJlbW92ZSBpdCBmcm9tIHRoZSBET01cbiAqICAgcmVtb3ZlQ3NzKCk7XG4gKi9cbmZ1bmN0aW9uIGluc2VydENzcyhzdHlsZXMsIG9wdGlvbnMpIHtcbiAgdmFyIF9PYmplY3QkYXNzaWduID0gKDAsIF9hc3NpZ24yLmRlZmF1bHQpKHtcbiAgICByZXBsYWNlOiBmYWxzZSxcbiAgICBwcmVwZW5kOiBmYWxzZVxuICB9LCBvcHRpb25zKTtcblxuICB2YXIgcmVwbGFjZSA9IF9PYmplY3QkYXNzaWduLnJlcGxhY2U7XG4gIHZhciBwcmVwZW5kID0gX09iamVjdCRhc3NpZ24ucHJlcGVuZDtcblxuXG4gIHZhciBpZHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgX3N0eWxlcyRpID0gKDAsIF9zbGljZWRUb0FycmF5My5kZWZhdWx0KShzdHlsZXNbaV0sIDQpO1xuXG4gICAgdmFyIG1vZHVsZUlkID0gX3N0eWxlcyRpWzBdO1xuICAgIHZhciBjc3MgPSBfc3R5bGVzJGlbMV07XG4gICAgdmFyIG1lZGlhID0gX3N0eWxlcyRpWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBfc3R5bGVzJGlbM107XG5cbiAgICB2YXIgaWQgPSBtb2R1bGVJZCArICctJyArIGk7XG5cbiAgICBpZHMucHVzaChpZCk7XG5cbiAgICBpZiAoaW5zZXJ0ZWRbaWRdKSB7XG4gICAgICBpZiAoIXJlcGxhY2UpIHtcbiAgICAgICAgaW5zZXJ0ZWRbaWRdKys7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGluc2VydGVkW2lkXSA9IDE7XG5cbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCArIGlkKTtcbiAgICB2YXIgY3JlYXRlID0gZmFsc2U7XG5cbiAgICBpZiAoIWVsZW0pIHtcbiAgICAgIGNyZWF0ZSA9IHRydWU7XG5cbiAgICAgIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICAgIGVsZW0uaWQgPSBwcmVmaXggKyBpZDtcblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY3NzVGV4dCA9IGNzcztcbiAgICBpZiAoc291cmNlTWFwKSB7XG4gICAgICBjc3NUZXh0ICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBiNjRFbmNvZGVVbmljb2RlKCgwLCBfc3RyaW5naWZ5Mi5kZWZhdWx0KShzb3VyY2VNYXApKSArICcqLyc7XG4gICAgICBjc3NUZXh0ICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuZmlsZSArICcqLyc7XG4gICAgfVxuXG4gICAgaWYgKCd0ZXh0Q29udGVudCcgaW4gZWxlbSkge1xuICAgICAgZWxlbS50ZXh0Q29udGVudCA9IGNzc1RleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzVGV4dDtcbiAgICB9XG5cbiAgICBpZiAoY3JlYXRlKSB7XG4gICAgICBpZiAocHJlcGVuZCkge1xuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShlbGVtLCBkb2N1bWVudC5oZWFkLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVtb3ZlQ3NzLmJpbmQobnVsbCwgaWRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRDc3M7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1xuICoqIG1vZHVsZSBpZCA9IDc0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jc3MtbW9kdWxlc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3QtY3NzLW1vZHVsZXNcIlxuICoqIG1vZHVsZSBpZCA9IDc1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9lbGVtZW50cy9sYXlvdXQvY29udGFpbmVyJztcbmNsYXNzIENvbG9waG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbG9waG9uXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCLCqSAyMDE177yNMjAxNiByZWFkcndlYi5jb20sIGFsbCByaWdodHMgcmVzZXJ2ZWRcIikpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29sb3Bob247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29tcG9uZW50cy9Db2xvcGhvbi50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vZWxlbWVudHMvZm9ybSc7XG5jbGFzcyBCb29rSW5mb1BvcHVwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGF1dGhvciA9IHRoaXMucHJvcHMuYXV0aG9yO1xuICAgICAgICBsZXQgdGl0bGUgPSB0aGlzLnByb3BzLnRpdGxlO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSB0aGlzLnByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICBsZXQgYm9va0lkID0gdGhpcy5wcm9wcy5ib29rSWQ7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImJvb2staW5mby1wb3B1cCBwb3B1cFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHtjbGFzc05hbWU6IFwidGl0bGVcIn0sIHRpdGxlKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwge2NsYXNzTmFtZTogXCJhdXRob3JcIn0sIGF1dGhvciksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7Y29sb3I6IFwiYmx1ZVwiLCB0bzogJy92aWV3ZXIvYm9vay8nICsgYm9va0lkfSwgXCLpmIXor7tcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJkZXNjcmlwdGlvblwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgZGVzY3JpcHRpb24pKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJvb2tJbmZvUG9wdXA7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29tcG9uZW50cy9ib29rLWluZm8tcG9wdXAudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb29rIGZyb20gJy4vYm9vayc7XG5jbGFzcyBCb29rTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcImJvb2stbGlzdCBjbGVhcmZpeFwifSwgdGhpcy5wcm9wcy5ib29rRW50aXRpZXMgPyAodGhpcy5wcm9wcy5ib29rRW50aXRpZXMubWFwKChib29rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyB0aXRsZSwgYXV0aG9yLCBkZXNjcmlwdGlvbiwgY292ZXIgfSA9IGJvb2s7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9vaywge2lkOiBib29rLmlkLCBrZXk6IGluZGV4LCB0aXRsZTogdGl0bGUsIGF1dGhvcjogYXV0aG9yLm1hcChhID0+IGEucmVmRGF0YSA/IGEucmVmRGF0YS5uYW1lIDogJycpLmpvaW4oJywgJyksIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgY292ZXI6IGNvdmVyfSkpO1xuICAgICAgICB9KSkgOiBudWxsKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQm9va0xpc3Q7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29tcG9uZW50cy9ib29rLWxpc3QudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb29rUGFnZSBmcm9tICcuL2Jvb2stcGFnZSc7XG5jbGFzcyBCb29rUGFnZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gbGV0IHN0eWxlID0gc3R5bGVzLkJPT0tfSERfU1RZTEVcbiAgICAgICAgLy8gaWYodGhpcy5wcm9wcy52aWV3Lm1vZGUgPT09IFwiTU9CSUxFXCIpIHtcbiAgICAgICAgLy8gICBzdHlsZSA9IHN0eWxlcy5CT09LX01PQklMRV9TVFlMRVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmKCF0aGlzLnByb3BzLmlzQ2FsY3VsYXRlZCkge1xuICAgICAgICAvLyAgIHN0eWxlLmhlaWdodCA9IFwiMTAwJVwiXG4gICAgICAgIC8vIH1cbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJwYWdlc1wiLCBzdHlsZTogeyBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IH19LCB0aGlzLnByb3BzLnBhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChwYWdlLnR5cGUgPT09IFwicGFnZVwiKSB7XG4gICAgICAgICAgICAgICAgLy8gc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdHlsZSwgcGFnZS5wcm9wcy5zdHlsZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9va1BhZ2UsIHtzdHlsZTogcGFnZS5wcm9wcy5zdHlsZSwgYm9va0lkOiB0aGlzLnByb3BzLmJvb2tJZCwga2V5OiBpbmRleCwgcGFnZTogcGFnZX0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJOb3QgdHlwZSBwYWdlIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBCb29rUGFnZUxpc3Q7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29tcG9uZW50cy9ib29rLXBhZ2UtbGlzdC50c3hcbiAqKi8iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5jbGFzcyBCb29rUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgcGFnZSA9IHRoaXMucHJvcHMucGFnZTtcbiAgICAgICAgbGV0IHN0eWxlID0gdGhpcy5wcm9wcy5zdHlsZTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge3N0eWxlOiBzdHlsZX0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb250ZW50XCJ9LCBwYWdlLnByb3BzLmNoaWxkcmVuLm1hcCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChub2RlLnR5cGUgIT09IFwicFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVuc3VwcG9ydGVkIGNvbnRlbnQgZm91bmQhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBfX2Fzc2lnbih7fSwgaW5kZXggPT09IDAgPyB7IHN0eWxlOiB7IG1hcmdpblRvcDogcGFnZS5wcm9wcy5vZmZzZXQgfSB9IDoge30sIHtrZXk6IGluZGV4fSksIG5vZGUucHJvcHMuY2hpbGRyZW4pKTtcbiAgICAgICAgfSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicGFnZS1ub1wifSwgcGFnZS5wcm9wcy5wYWdlTm8pKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQm9va1BhZ2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29tcG9uZW50cy9ib29rLXBhZ2UudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IEJvb2tJbmZvUG9wdXAgZnJvbSAnLi9ib29rLWluZm8tcG9wdXAnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9vayBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBcImJvb2tcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiAnL2Jvb2svJyArIHRoaXMucHJvcHMuaWR9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYm9vay1jb3ZlclwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7c3JjOiB0aGlzLnByb3BzLmNvdmVyfSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYm9vay1tZXRhXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7dGl0bGU6IHRoaXMucHJvcHMudGl0bGUsIGNsYXNzTmFtZTogXCJib29rLW5hbWVcIn0sIHRoaXMucHJvcHMudGl0bGUpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImJvb2stYXV0aG9yXCJ9LCB0aGlzLnByb3BzLmF1dGhvcikpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChCb29rSW5mb1BvcHVwLCB7Ym9va0lkOiB0aGlzLnByb3BzLmlkLCB0aXRsZTogdGhpcy5wcm9wcy50aXRsZSwgYXV0aG9yOiB0aGlzLnByb3BzLmF1dGhvciwgZGVzY3JpcHRpb246IHRoaXMucHJvcHMuZGVzY3JpcHRpb259KSkpO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb21wb25lbnRzL2Jvb2sudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuY2xhc3MgQ2FuZHlCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLnByb3BzLmxpc3Q7XG4gICAgICAgIGxldCB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGU7XG4gICAgICAgIGxldCBtb3JlTGluayA9IHRoaXMucHJvcHMubW9yZUxpbmsgPyB0aGlzLnByb3BzLm1vcmVMaW5rIDogbnVsbDtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY2FuZHktYm94XCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwge2NsYXNzTmFtZTogXCJib3gtdGl0bGVcIn0sIHRpdGxlKSwgbW9yZUxpbmsgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IG1vcmVMaW5rfSwgXCLmn6XnnIvmm7TlpJpcIikpIDogbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIG51bGwsIGxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7a2V5OiBpbmRleH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBpdGVtLmxpbmt9LCBpdGVtLm5hbWUpKSkpKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENhbmR5Qm94O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvY2FuZHktYm94LnRzeFxuICoqLyIsImltcG9ydCBWaWV3ZXJQcmVmZXJlbmNlIGZyb20gJy4vdmlld2VyLXByZWZlcmVuY2UnO1xuZXhwb3J0IGRlZmF1bHQgVmlld2VyUHJlZmVyZW5jZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb21wb25lbnRzL3ZpZXdlci1wcmVmZXJlbmNlL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgU3dpdGNoZXIgZnJvbSAnLi4vLi4vZWxlbWVudHMvc3dpdGNoZXInO1xuLy8gQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgVmlld2VyUHJlZmVyZW5jZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInZpZXdlci1wcmVmZXJlbmNlXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJvcHRpb25zXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogXCJvcHRpb24gb3B0aW9uLWZvbnQtc2l6ZVwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCJBLVwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCJBK1wiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBcIm9wdGlvbiBvcHRpb24tc2Nyb2xsXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImxhYmVsXCJ9LCBcIua7muWKqOaooeW8j1wiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChTd2l0Y2hlciwge29uOiB0cnVlfSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogXCJvcHRpb24gb3B0aW9uLXRoZW1lXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7c3R5bGU6IHsgYmFja2dyb3VuZDogJyNmZmYnIH19LCBcInRoZW1lMVwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge3N0eWxlOiB7IGJhY2tncm91bmQ6ICcjZWVlJyB9fSwgXCJ0aGVtZTJcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtzdHlsZTogeyBiYWNrZ3JvdW5kOiAnIzIyMicgfX0sIFwidGhlbWUzXCIpKSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoVmlld2VyUHJlZmVyZW5jZSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29tcG9uZW50cy92aWV3ZXItcHJlZmVyZW5jZS92aWV3ZXItcHJlZmVyZW5jZS50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmNsYXNzIFZpZXdlclNjcm9sbGJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7c3R5bGU6IHsgaGVpZ2h0OiA0MDAgfSwgY2xhc3NOYW1lOiBcInZpZXdlci1zY3JvbGxiYXJcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJidXR0b25cIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJsb2MtaW5mb1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIHRoaXMucHJvcHMuY3VycmVudCksIFwiL1wiLCB0aGlzLnByb3BzLnRvdGFsKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInN1Yi1pbmZvXCJ9LCBcIjMwLjMlXCIpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge3N0eWxlOiB7IGhlaWdodDogMTAwIH0sIGNsYXNzTmFtZTogXCJ0cmFjay1wYXN0XCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7c3R5bGU6IHsgaGVpZ2h0OiA0MDAgfSwgY2xhc3NOYW1lOiBcInRyYWNrXCJ9KSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShWaWV3ZXJTY3JvbGxiYXIpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvdmlld2VyLXNjcm9sbGJhci50c3hcbiAqKi8iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBCcmFuZGluZyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2JyYW5kaW5nJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2xheW91dCc7XG5pbXBvcnQgQ29sb3Bob24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db2xvcGhvbic7XG5pbXBvcnQgeyB1c2VyQXV0aCB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9hcHAuc2NzcycpO1xuLy8gaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvZm9ybSdcbmxldCBBcHAgPSBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXNlckF1dGgoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgaXNBZG1pbiA9IGZhbHNlO1xuICAgICAgICBsZXQgdXNlcm5hbWUgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIucm9sZSAhPT0gJ3Zpc2l0b3InKSB7XG4gICAgICAgICAgICBpc0FkbWluID0gdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIucm9sZSA9PT0gJ2FkbWluJztcbiAgICAgICAgICAgIHVzZXJuYW1lID0gdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIudXNlcm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnJhbmRpbmcsIHtpc0FkbWluOiBpc0FkbWluLCB1c2VybmFtZTogdXNlcm5hbWV9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIG51bGwsIHRoaXMucHJvcHMuY2hpbGRyZW4pLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbG9waG9uLCBudWxsKSkpO1xuICAgIH1cbn07XG5BcHAgPSBfX2RlY29yYXRlKFtcbiAgICBDU1NNb2R1bGVzKHN0eWxlcylcbl0sIEFwcCk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+ICh7XG4gICAgbm90aWZpY2F0aW9uOiBzdGF0ZS5jb21wb25lbnRzLm5vdGlmaWNhdGlvbixcbiAgICBzZXNzaW9uOiBzdGF0ZS5zZXNzaW9uXG59KSwgeyB1c2VyQXV0aCB9KShBcHApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvYXBwL2FwcC50c3hcbiAqKi8iLCJpbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2FwcC9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFN3aXRjaGVyIGZyb20gJy4uL2VsZW1lbnRzL3N3aXRjaGVyJztcbmltcG9ydCBCb29rTGlzdFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9ib29rLWxpc3Qtc2VjdGlvbic7XG5pbXBvcnQgeyBmZXRjaEJvb2tzLCBmZXRjaENvbGxlY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5jbGFzcyBBcmNoaXZlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoQm9va3MoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJhcmNoaXZlIHBhZ2UtY29udGVudFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtaGVhZGVyXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJjYXRlZ29yaWVzXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogXCJjdXJyZW50XCJ9LCBcIuWFqOmDqFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFwi5YWo6YOoXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgXCLlhajpg6hcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBcIuWFqOmDqFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFwi5YWo6YOoXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgXCLlhajpg6hcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBcIuWFqOmDqFwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcImxlZnQgZHJvcGRvd24tbWVudVwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFwi5pe26Ze0XCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgXCLng63luqZcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBcIuWQjeensFwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyaWdodFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImxhYmVsXCJ9LCBcIuS4jeaYvuekuuaIkeivu+i/h+eahFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChTd2l0Y2hlciwge29uOiBmYWxzZX0pKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9va0xpc3RTZWN0aW9uLCB7Ym9va0VudGl0aWVzOiB0aGlzLnByb3BzLm5ld2VzdEJvb2tzfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwYWdlLWxvYWQtbW9yZVwifSwgXCLliqDovb3mm7TlpJpcIikpKTtcbiAgICB9XG59XG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmV3ZXN0Qm9va3M6IHN0YXRlLnBhZ2luYXRpb24uYm9va3MubmV3ZXN0XG4gICAgICAgICAgICA/IHN0YXRlLnBhZ2luYXRpb24uYm9va3MubmV3ZXN0Lmlkcy5tYXAoaWQgPT4gc3RhdGUuZW50aXRpZXMuYm9va3NbaWRdKVxuICAgICAgICAgICAgOiBbXVxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBmZXRjaEJvb2tzLCBmZXRjaENvbGxlY3Rpb25zIH0pKEFyY2hpdmUpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvYXJjaGl2ZS50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGZldGNoQ29sbGVjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zJztcbmNsYXNzIEFyY2hpdmVkQ29sbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaENvbGxlY3Rpb25zKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYXJjaGl2ZWQtY29sbGVjdGlvblwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtdGl0bGVcIn0sIFwi5b6A5pyf5Lmm5Y2VXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgbnVsbCwgdGhpcy5wcm9wcy5uZXdlc3RDb2xsZWN0aW9ucy5sZW5ndGggIT09IDBcbiAgICAgICAgICAgICYmIHRoaXMucHJvcHMubmV3ZXN0Q29sbGVjdGlvbnMubWFwKChjb2xsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtrZXk6IGluZGV4fSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIGNvbGwubmFtZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGNvbGwuZGVzY3JpcHRpb24pKSk7XG4gICAgICAgICAgICB9KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwYWdlLWxvYWQtbW9yZVwifSwgXCLliqDovb3mm7TlpJpcIikpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+ICh7XG4gICAgbmV3ZXN0Q29sbGVjdGlvbnM6IHN0YXRlLnBhZ2luYXRpb24uYm9va0NvbGxlY3Rpb25zLm5ld2VzdFxuICAgICAgICA/IHN0YXRlLnBhZ2luYXRpb24uYm9va0NvbGxlY3Rpb25zLm5ld2VzdC5pZHMubWFwKGlkID0+IHN0YXRlLmVudGl0aWVzLmJvb2tDb2xsZWN0aW9uc1tpZF0pXG4gICAgICAgIDogW11cbn0pLCB7IGZldGNoQ29sbGVjdGlvbnMgfSkoQXJjaGl2ZWRDb2xsZWN0aW9uKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2FyY2hpdmVkLWNvbGxlY3Rpb24udHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBmZXRjaEJvb2sgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2VsZW1lbnRzL2xvYWRpbmcnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vZWxlbWVudHMvZm9ybSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vc2lkZS1lZmZlY3RzL2JvZHknO1xuY2xhc3MgQm9va0luZm8gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5ib29rSWQgPSBwcm9wcy5wYXJhbXMuaWQ7XG4gICAgfVxuICAgIHN0YXRpYyBmZXRjaERhdGEoeyBzdG9yZSwgcGFyYW1zIH0pIHtcbiAgICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGZldGNoQm9vayhwYXJhbXMuaWQpKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hCb29rKHRoaXMuYm9va0lkKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgYm9va0luZm8gPSB0aGlzLnByb3BzLmJvb2tJbmZvID8gdGhpcy5wcm9wcy5ib29rSW5mbyA6IHt9O1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIsIHtjbGFzc05hbWU6IFwiYm9vay1pbmZvIGNvbnRlbnQtY29udGFpbmVyXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHksIHtjbGFzc05hbWU6IFwiYm9vay1pbmZvXCJ9KSwgXy5pc0VtcHR5KGJvb2tJbmZvKSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmcsIG51bGwpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIiwge2NsYXNzTmFtZTogXCJib29rLWluZm8taGVhZGVyXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibGVmdC1jb2xcIn0sIGJvb2tJbmZvLmNvdmVyID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJib29rLWNvdmVyXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtzcmM6IGJvb2tJbmZvLmNvdmVyfSkpKSA6IG51bGwpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicmlnaHQtY29sXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge2NsYXNzTmFtZTogXCJib29rLW5hbWVcIn0sIGJvb2tJbmZvLnRpdGxlKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImJvb2stYXV0aG9yXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIFwi5L2c6ICF77yaXCIsIGJvb2tJbmZvLmF1dGhvciA/IGJvb2tJbmZvLmF1dGhvci5tYXAoYSA9PiBhLnJlZkRhdGEgPyBhLnJlZkRhdGEubmFtZSA6ICcnKS5qb2luKCcsICcpIDogJycpKSwgYm9va0luZm8udGl0bGUgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge3RvOiBgL3ZpZXdlci9ib29rLyR7Ym9va0luZm8uaWR9YCwgY29sb3I6IFwiYmx1ZVwifSwgXCLpmIXor7tcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCBudWxsLCBcIua3u+WKoOWIsOS5puaetlwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIG51bGwsIFwi5qCH6K6w5Li65bey6K+7XCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgbnVsbCwgXCLmlLbol49cIikpKSA6IG51bGwpKSwgYm9va0luZm8uZGVzY3JpcHRpb24gPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgbnVsbCwgXCLlhoXlrrnnroDku4tcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGJvb2tJbmZvLmRlc2NyaXB0aW9uKSkpIDogbnVsbCkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIHJldHVybiB7IGJvb2tJbmZvOiBzdGF0ZS5lbnRpdGllcy5ib29rc1tvd25Qcm9wcy5wYXJhbXMuaWRdIH07XG59LCB7IGZldGNoQm9vayB9KShCb29rSW5mbyk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9ib29rLWluZm8udHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBmZXRjaFNoZWxmIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgQm9va0xpc3RTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvYm9vay1saXN0LXNlY3Rpb24nO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmNsYXNzIEJvb2tTaGVsZiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBzdGF0aWMgZmV0Y2hEYXRhKHsgc3RvcmUsIHBhcmFtcyB9KSB7XG4gICAgICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChmZXRjaFNoZWxmKCkpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFNoZWxmKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGJvb2tMaXN0ID0gdGhpcy5wcm9wcy5zaGVsZjtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9va0xpc3RTZWN0aW9uLCB7Ym9va0VudGl0aWVzOiBib29rTGlzdCwgdGl0bGU6IFwi5oiR55qE5Lmm5p62XCJ9KSkpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaGVsZjogXy5nZXQoc3RhdGUucGF5bG9hZHMuYm9va1NoZWxmLCAnZGF0YScsIFtdKVxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBmZXRjaFNoZWxmIH0pKEJvb2tTaGVsZik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9ib29rLXNoZWxmLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vZWxlbWVudHMvZm9ybSc7XG5pbXBvcnQgeyBmZXRjaENvbGxlY3Rpb24gfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBCb29rTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2Jvb2stbGlzdC1zZWN0aW9uJztcbmNsYXNzIENvbGxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hDb2xsZWN0aW9uKHRoaXMucHJvcHMucGFyYW1zLmlkKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBib29rQ29sbGVjdGlvbiA9IHRoaXMucHJvcHMuYm9va0NvbGxlY3Rpb24gPyB0aGlzLnByb3BzLmJvb2tDb2xsZWN0aW9uIDogeyBpdGVtczogW10gfTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBib29rQ29sbGVjdGlvbi5pdGVtc1xuICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0ucmVmRGF0YSlcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLnJlZkRhdGEpO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb2xsZWN0aW9uXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicGFnZS1oZWFkZXJcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwYWdlLXRpdGxlXCJ9LCBib29rQ29sbGVjdGlvbi5uYW1lKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInN1Yi10aXRsZVwifSwgXCIxMCDmnKzkuaZcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJib29rLXNsaWRlclwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChCb29rTGlzdCwge2Jvb2tFbnRpdGllczogaXRlbXN9KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCBudWxsLCBcIuaUtuiXj1wiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwYWdlLWNvbnRlbnRcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGJvb2tDb2xsZWN0aW9uLmRlc2NyaXB0aW9uKSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICByZXR1cm4geyBib29rQ29sbGVjdGlvbjogc3RhdGUuZW50aXRpZXMuYm9va0NvbGxlY3Rpb25zW293blByb3BzLnBhcmFtcy5pZF0gfTtcbn0sIHsgZmV0Y2hDb2xsZWN0aW9uIH0pKENvbGxlY3Rpb24pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvY29sbGVjdGlvbi50c3hcbiAqKi8iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgfVxuICAgIHJldHVybiB0O1xufTtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBmZXRjaEJvb2tzLCBmZXRjaENvbGxlY3Rpb25zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgQm9va0xpc3RTZWN0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYm9vay1saXN0LXNlY3Rpb24nO1xuaW1wb3J0IENhbmR5Qm94IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2FuZHktYm94JztcbmltcG9ydCBCb2R5IGZyb20gJy4uLy4uL3NpZGUtZWZmZWN0cy9ib2R5JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0nO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9ob21lLnNjc3MnKTtcbmxldCBIb21lID0gY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvd1JlY2VudFJlYWRpbmc6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuICAgIHN0YXRpYyBmZXRjaERhdGEoeyBzdG9yZSB9KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaGFoYWhhJyk7XG4gICAgICAgIC8vIHJldHVybiBzdG9yZS5kaXNwYXRjaChmZXRjaEJvb2tzKCkpXG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoQm9va3MoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaENvbGxlY3Rpb25zKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlc3Npb24uaXNGZXRjaGluZyAmJiAhbmV4dFByb3BzLnNlc3Npb24uaXNGZXRjaGluZykge1xuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy5zZXNzaW9uLnVzZXIucm9sZSAhPT0gJ3Zpc2l0b3InKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5mZXRjaEJvb2tzKCd1c2VyJylcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1JlY2VudFJlYWRpbmc6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBuZXdlc3RCb29rcyA9IHRoaXMucHJvcHMubmV3ZXN0Qm9va3M7XG4gICAgICAgIGxldCBsaXN0TmFtZSA9IHRoaXMucHJvcHMuY29sbGVjdGlvbiA/IHRoaXMucHJvcHMuY29sbGVjdGlvbi5uYW1lIDogJyc7XG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5wcm9wcy5jb2xsZWN0aW9uID8gdGhpcy5wcm9wcy5jb2xsZWN0aW9uLml0ZW1zXG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gQm9vbGVhbihpdGVtLnJlZkRhdGEpKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0ucmVmRGF0YSkgOiBbXTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keSwge2NsYXNzTmFtZTogXCJob21lXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInJvd1wifSwgdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIucm9sZSA9PT0gJ3Zpc2l0b3InICYmICF0aGlzLnByb3BzLnNlc3Npb24uaXNGZXRjaGluZyA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiaGVyby1pbWFnZVwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImxvZ29cIn0sIFwiUmVhZHJcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwYWdlLXRpdGxlXCJ9LCBcIuaWsOS4gOS7oyB3ZWIg6ZiF6K+75L2T6aqMXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge3RvOiBcIi9zaWdudXBcIn0sIFwi5rOo5YaMXCIpKSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29sLW1kLThcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9va0xpc3RTZWN0aW9uLCB7Ym9va0VudGl0aWVzOiBuZXdlc3RCb29rcywgdGl0bGU6IFwi5paw5Lmm6YCf6YCSXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChCb29rTGlzdFNlY3Rpb24sIHtib29rRW50aXRpZXM6IGxpc3QsIHRpdGxlOiBsaXN0TmFtZSwgbW9yZUxpbms6IGAvY29sbGVjdGlvbnMvJHt0aGlzLnByb3BzLmNvbGxlY3Rpb24gPyB0aGlzLnByb3BzLmNvbGxlY3Rpb24uaWQgOiAnJ31gfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywgX19hc3NpZ24oe30sIHsgc3R5bGVOYW1lOiAnYmx1ZScgfSwge2NsYXNzTmFtZTogXCJ2aWV3LW1vcmVcIiwgdG86IFwiL2NvbGxlY3Rpb25zXCJ9KSwgXCLmtY/op4jmm7TlpJrkuabljZUyID5cIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29sLW1kLTRcIn0sIHRoaXMuc3RhdGUuc2hvd1JlY2VudFJlYWRpbmcgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChDYW5keUJveCwge3RpdGxlOiBcIuacgOi/kemYheivuzIyMlwiLCBsaXN0OiBbXX0pKSA6IG51bGwpKSkpO1xuICAgIH1cbn07XG5Ib21lID0gX19kZWNvcmF0ZShbXG4gICAgQ1NTTW9kdWxlcyhzdHlsZXMpXG5dLCBIb21lKTtcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZS5wYWdpbmF0aW9uLmJvb2tzLm5ld2VzdCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlckJvb2tzOiBbXSxcbiAgICAgICAgbmV3ZXN0Qm9va3M6IHN0YXRlLnBhZ2luYXRpb24uYm9va3MubmV3ZXN0XG4gICAgICAgICAgICA/IHN0YXRlLnBhZ2luYXRpb24uYm9va3MubmV3ZXN0Lmlkcy5tYXAoaWQgPT4gc3RhdGUuZW50aXRpZXMuYm9va3NbaWRdKVxuICAgICAgICAgICAgOiBbXSxcbiAgICAgICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvbixcbiAgICAgICAgLy8gdG9kbzogY29sbGVjdGlvbiBwYWdpbmF0aW9uXG4gICAgICAgIGNvbGxlY3Rpb246ICgoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIHN0YXRlLmVudGl0aWVzLmJvb2tDb2xsZWN0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS5lbnRpdGllcy5ib29rQ29sbGVjdGlvbnNbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKClcbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZmV0Y2hCb29rcywgZmV0Y2hDb2xsZWN0aW9ucyB9KShIb21lKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2hvbWUvaG9tZS50c3hcbiAqKi8iLCJpbXBvcnQgSG9tZSBmcm9tICcuL2hvbWUnO1xuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbi8vIGV4cG9ydCBkZWZhdWx0IGZyb20gJy4vaG9tZSdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2hvbWUvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBOYXZUYWIgZnJvbSAnLi4vZWxlbWVudHMvbmF2LXRhYic7XG5pbXBvcnQgeyBmZXRjaEJvb2tzLCBmZXRjaENvbGxlY3Rpb25zLCBmZXRjaFNoZWxmLCBzZW5kTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgQm9va0xpc3RTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvYm9vay1saXN0LXNlY3Rpb24nO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vZWxlbWVudHMvZm9ybSc7XG5jbGFzcyBQcm9maWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvLyBzdGF0aWMgZmV0Y2hEYXRhKHtzdG9yZSwgcGFyYW1zfSkge1xuICAgIC8vICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGZldGNoKCkpXG4gICAgLy8gfVxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hCb29rcygpO1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoU2hlbGYoJzE1NTkzMTg3Jyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG5ld2VzdEJvb2tzID0gdGhpcy5wcm9wcy5uZXdlc3RCb29rcztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicHJvZmlsZVwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtaGVhZGVyXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwidXNlci1hdmF0YXJcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge3NyYzogXCJodHRwczovL2ltZzMuZG91YmFuaW8uY29tL2ljb24vdWw0MzY0NjcwNi00My5qcGdcIiwgYWx0OiBcInVzZXJfYXZhdGFyXCJ9KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwidXNlcm5hbWVcIn0sIFwidXNlcm5hbWVcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwidGFnbGluZVwifSwgXCJzb21ldGhpbmcgdG8gc2F5XCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgbnVsbCwgXCLnvJbovpFcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdlRhYiwge3RhYnM6IFsn5pS26JePJywgJ+ivu+i/hycsICfkuabor4QnXSwgY3VycmVudDogMH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9va0xpc3RTZWN0aW9uLCB7dGl0bGU6IFwi8J+YhFwiLCBib29rRW50aXRpZXM6IG5ld2VzdEJvb2tzfSkpKSk7XG4gICAgfVxufVxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNlc3Npb246IHN0YXRlLnNlc3Npb24sXG4gICAgICAgIG5ld2VzdEJvb2tzOiBzdGF0ZS5wYWdpbmF0aW9uLmJvb2tzLm5ld2VzdFxuICAgICAgICAgICAgPyBzdGF0ZS5wYWdpbmF0aW9uLmJvb2tzLm5ld2VzdC5pZHMubWFwKGlkID0+IHN0YXRlLmVudGl0aWVzLmJvb2tzW2lkXSlcbiAgICAgICAgICAgIDogW11cbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgc2VuZE5vdGlmaWNhdGlvbiwgZmV0Y2hCb29rcywgZmV0Y2hDb2xsZWN0aW9ucywgZmV0Y2hTaGVsZiB9KShQcm9maWxlKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL3Byb2ZpbGUudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgQWxlcnQgZnJvbSAnLi4vZWxlbWVudHMvYWxlcnQnO1xuY2xhc3MgUm9vdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJhcHAtcm9vdFwifSwgdGhpcy5wcm9wcy5ub3RpZmljYXRpb25zLmZpbHRlcihub3RpID0+IG5vdGkudmlzaWJsZSkubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcIm5vdGlmaWNhdGlvbnNcIn0sIHRoaXMucHJvcHMubm90aWZpY2F0aW9ucy5tYXAoKG5vdGksIGluZGV4KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChBbGVydCwge2tleTogaW5kZXgsIHR5cGU6IG5vdGkudHlwZSwgbWVzc2FnZTogbm90aS5tZXNzYWdlLCB2aXNpYmxlOiBub3RpLnZpc2libGV9KSkpKSlcbiAgICAgICAgICAgIDogbnVsbCwgdGhpcy5wcm9wcy5jaGlsZHJlbikpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gKHsgbm90aWZpY2F0aW9uczogc3RhdGUuY29tcG9uZW50cy5ub3RpZmljYXRpb25zIH0pLCB7IHNlbmROb3RpZmljYXRpb24gfSkoUm9vdCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9yb290LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgdXNlckF1dGgsIGZldGNoUHJvZmlsZSB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IE5hdlRhYiBmcm9tICcuLi9lbGVtZW50cy9uYXYtdGFiJztcbmltcG9ydCBCb2R5IGZyb20gJy4uL3NpZGUtZWZmZWN0cy9ib2R5JztcbmltcG9ydCBTd2l0Y2hlciBmcm9tICcuLi9lbGVtZW50cy9zd2l0Y2hlcic7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuY2xhc3MgUHJvZmlsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLy8gc3RhdGljIGZldGNoRGF0YSh7c3RvcmUsIHBhcmFtc30pIHtcbiAgICAvLyAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChmZXRjaCgpKVxuICAgIC8vIH1cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAvLyB1c2VyIHNlc3Npb24gZmV0Y2hlZFxuICAgICAgICBpZiAobmV4dFByb3BzLnNlc3Npb24uaXNGZXRjaGluZyA9PT0gZmFsc2UgJiYgdGhpcy5wcm9wcy5zZXNzaW9uLmlzRmV0Y2hpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJZCA9IG5leHRQcm9wcy5zZXNzaW9uLnVzZXIuaWQ7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoUHJvZmlsZSh1c2VySWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHVzZXIgPSB0aGlzLnByb3BzLnByb2ZpbGU7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInNldHRpbmdzXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHksIHtjbGFzc05hbWU6IFwicGFnZS1zZXR0aW5nc1wifSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwYWdlLWNvbnRlbnRcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJwYWdlLWhlYWRlclwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHtjbGFzc05hbWU6IFwicGFnZS10aXRsZVwifSwgXCLorr7nva5cIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2VGFiLCB7dGFiczogWyfotYTmlpknLCAn5Liq5Lq65Li76aG1J10sIGN1cnJlbnQ6IDB9KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcIm9wdGlvbnNcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBcIm9wdGlvblwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIFwi55So5oi35ZCNXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcIm9wdGlvbi1pbnB1dFwifSwgXCJodHRwOi8vcmVhZHJ3ZWIuY29tL0BcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCB1c2VyLnVzZXJuYW1lKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwiZWRpdFwifSwgXCLnvJbovpFcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogXCJvcHRpb25cIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBcIumCrueusVwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJvcHRpb24taW5wdXRcIn0sIHVzZXIuZW1haWwpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImVkaXRcIn0sIFwi57yW6L6RXCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IFwib3B0aW9uXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgbnVsbCwgXCLlr4bnoIFcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwib3B0aW9uLWlucHV0XCJ9LCBcIioqKioqKlwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJlZGl0XCJ9LCBcIue8lui+kVwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBcIm9wdGlvblwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIFwi5YWs5byA5bGV56S65oiR55qE5pS26JePXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcIm9wdGlvbi1kZXNjXCJ9LCBcIuWFs+mXreWQjuWFtuS7lueUqOaIt+WwhuaXoOazleafpeeci+aCqOeahOaUtuiXj1wiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChTd2l0Y2hlciwge29uOiB0cnVlfSkpKSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHtcbiAgICBjb25zdCB1c2VySWQgPSBzdGF0ZS5zZXNzaW9uLnVzZXIucm9sZSAhPT0gJ3Zpc2l0b3InID8gc3RhdGUuc2Vzc2lvbi51c2VyLmlkIDogJyc7XG4gICAgY29uc3QgcHJvZmlsZSA9IHVzZXJJZCAmJiAhXy5pc0VtcHR5KHN0YXRlLmVudGl0aWVzLnByb2ZpbGVzKSA/IHN0YXRlLmVudGl0aWVzLnByb2ZpbGVzW3VzZXJJZF0gOiB7fTtcbiAgICByZXR1cm4ge1xuICAgICAgICBub3RpZmljYXRpb246IHN0YXRlLm5vdGlmaWNhdGlvbixcbiAgICAgICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvbixcbiAgICAgICAgcHJvZmlsZVxuICAgIH07XG59LCB7IHNlbmROb3RpZmljYXRpb24sIHVzZXJBdXRoLCBmZXRjaFByb2ZpbGUgfSkoUHJvZmlsZSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9zZXR0aW5ncy50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IExpbmssIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBBcGlSb290cyBmcm9tICcuLi9hcGktY29uZmlnL2FwaS1yb290cyc7XG5pbXBvcnQgY2FsbEFwaSBmcm9tICcuLi91dGlscy9jYWxsLWFwaSc7XG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgQnJhbmRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9icmFuZGluZyc7XG5pbXBvcnQgeyBCdXR0b24sIElucHV0IH0gZnJvbSAnLi4vZWxlbWVudHMvZm9ybSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2VsZW1lbnRzL2xheW91dC9jb250YWluZXInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vc2lkZS1lZmZlY3RzL2JvZHknO1xuY2xhc3MgU2lnbmluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2dpbjogJycsXG4gICAgICAgICAgICBwYXNzd29yZDogJydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaGFuZGxlU2lnbmluKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBsb2dpbjogdGhpcy5zdGF0ZS5sb2dpbixcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgICAgIH07XG4gICAgICAgIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9YXV0aGAsIHsgbWV0aG9kOiAnUE9TVCcsIGRhdGE6IHBhcmFtcyB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oJ+eZu+W9leaIkOWKn++8gScpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCgnLycpO1xuICAgICAgICAgICAgfSwgNjAwKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKGVyci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZUlucHV0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keSwge2NsYXNzTmFtZTogXCJzaWduaW5cIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJyYW5kaW5nLCBudWxsKSwgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHtjbGFzc05hbWU6IFwiY29udGVudC1jb250YWluZXJcIiwgYWN0aW9uOiBgJHtBcGlSb290cy5MT0NBTH1hdXRoYCwgbWV0aG9kOiBcInBvc3RcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtdGl0bGVcIn0sIFwi5qyi6L+O5Zue5p2lXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7b25DaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKSwgdmFsdWU6IHRoaXMuc3RhdGUubG9naW4sIG5hbWU6IFwibG9naW5cIiwgcGxhY2Vob2xkZXI6IFwi55So5oi35ZCN5oiW6YKu566xXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwge29uQ2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0LmJpbmQodGhpcyksIHZhbHVlOiB0aGlzLnN0YXRlLnBhc3N3b3JkLCBuYW1lOiBcInBhc3N3b3JkXCIsIHBsYWNlaG9sZGVyOiBcIuWvhueggVwiLCB0eXBlOiBcInBhc3N3b3JkXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHtjbGFzc05hbWU6IFwiejFcIiwgY29sb3I6IFwiYmx1ZVwiLCBvbkNsaWNrOiB0aGlzLmhhbmRsZVNpZ25pbi5iaW5kKHRoaXMpfSwgXCLnmbvlvZVcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtjbGFzc05hbWU6IFwiaGludFwifSwgXCLmsqHmnInotKblj7fvvJ9cIiwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiL3NpZ251cFwifSwgXCLms6jlhoxcIikpKSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+ICh7XG4gICAgbm90aWZpY2F0aW9uOiBzdGF0ZS5jb21wb25lbnRzLm5vdGlmaWNhdGlvbixcbiAgICB1c2VyOiBzdGF0ZS51c2VyXG59KSwgeyBzZW5kTm90aWZpY2F0aW9uIH0pKFNpZ25pbik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9zaWduaW4udHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBMaW5rLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQXBpUm9vdHMgZnJvbSAnLi4vYXBpLWNvbmZpZy9hcGktcm9vdHMnO1xuaW1wb3J0IGNhbGxBcGkgZnJvbSAnLi4vdXRpbHMvY2FsbC1hcGknO1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IEJyYW5kaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvYnJhbmRpbmcnO1xuaW1wb3J0IHsgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJy4uL2VsZW1lbnRzL2Zvcm0nO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9lbGVtZW50cy9sYXlvdXQvY29udGFpbmVyJztcbmltcG9ydCBCb2R5IGZyb20gJy4uL3NpZGUtZWZmZWN0cy9ib2R5JztcbmNsYXNzIFNpZ251cCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGhhbmRsZVNpZ251cChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMuc3RhdGUudXNlcm5hbWUsXG4gICAgICAgICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgICAgIH07XG4gICAgICAgIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9dXNlcnNgLCB7IG1ldGhvZDogJ1BPU1QnLCBkYXRhOiBwYXJhbXMgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oJ+azqOWGjOaIkOWKn++8gScpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCgnLycpO1xuICAgICAgICAgICAgfSwgNjAwKTtcbiAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbihlcnIubWVzc2FnZSwgJ2Vycm9yJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVJbnB1dChldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHksIHtjbGFzc05hbWU6IFwic2lnbnVwXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChCcmFuZGluZywgbnVsbCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7Y2xhc3NOYW1lOiBcImNvbnRlbnQtY29udGFpbmVyXCIsIG1ldGhvZDogXCJwb3N0XCIsIGFjdGlvbjogXCIvc2lnbnVwXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge2NsYXNzTmFtZTogXCJwYWdlLXRpdGxlXCJ9LCBcIuWKoOWFpSBSZWFkclwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwge29uQ2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0LmJpbmQodGhpcyksIHZhbHVlOiB0aGlzLnN0YXRlLnVzZXJuYW1lLCBuYW1lOiBcInVzZXJuYW1lXCIsIHBsYWNlaG9sZGVyOiBcIueUqOaIt+WQjVwifSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHtvbkNoYW5nZTogdGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpLCB2YWx1ZTogdGhpcy5zdGF0ZS5lbWFpbCwgbmFtZTogXCJlbWFpbFwiLCBwbGFjZWhvbGRlcjogXCLpgq7nrrFcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7b25DaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKSwgdmFsdWU6IHRoaXMuc3RhdGUucGFzc3dvcmQsIG5hbWU6IFwicGFzc3dvcmRcIiwgcGxhY2Vob2xkZXI6IFwi5a+G56CBIFwiLCB0eXBlOiBcInBhc3N3b3JkXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHtjbGFzc05hbWU6IFwiejFcIiwgY29sb3I6IFwiYmx1ZVwiLCBvbkNsaWNrOiB0aGlzLmhhbmRsZVNpZ251cC5iaW5kKHRoaXMpfSwgXCLms6jlhoxcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtjbGFzc05hbWU6IFwiaGludFwifSwgXCLmsqHmnInotKblj7fvvJ9cIiwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiL3NpZ25pblwifSwgXCLnmbvlvZVcIikpKSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+ICh7XG4gICAgbm90aWZpY2F0aW9uOiBzdGF0ZS5jb21wb25lbnRzLm5vdGlmaWNhdGlvbixcbiAgICB1c2VyOiBzdGF0ZS51c2VyXG59KSwgeyBzZW5kTm90aWZpY2F0aW9uIH0pKFNpZ251cCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9zaWdudXAudHN4XG4gKiovIiwiaW1wb3J0IFZpZXdlciBmcm9tICcuL3ZpZXdlcic7XG5leHBvcnQgZGVmYXVsdCBWaWV3ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy92aWV3ZXIvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9pY29uJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uLy4uL2VsZW1lbnRzL2xvYWRpbmcnO1xuaW1wb3J0IERpYWxvZyBmcm9tICcuLi8uLi9lbGVtZW50cy9EaWFsb2cnO1xuaW1wb3J0IEJvb2tQYWdlTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Jvb2stcGFnZS1saXN0JztcbmltcG9ydCAqIGFzIHJlbmRlckJvb2sgZnJvbSAnLi4vLi4vdXRpbHMvcmVuZGVyLWJvb2snO1xuaW1wb3J0IHsgZ2V0Qm9va1ZpZXcgfSBmcm9tICcuLi8uLi91dGlscy92aWV3JztcbmltcG9ydCB7IGdldENhY2hlLCBzZXRDYWNoZSB9IGZyb20gJy4uLy4uL3V0aWxzL2NhY2hlJztcbmltcG9ydCB7IHNpbXBsZUNvbXBhcmVPYmplY3RzIH0gZnJvbSAnLi4vLi4vdXRpbHMvb2JqZWN0JztcbmltcG9ydCB7IGZldGNoQm9vaywgdXNlckF1dGggfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCBhcGlzIGZyb20gJy4uLy4uL3V0aWxzL2FwaXMnO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vLi4vc2lkZS1lZmZlY3RzL2JvZHknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBWaWV3ZXJQcmVmZXJlbmNlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdmlld2VyLXByZWZlcmVuY2UnO1xuaW1wb3J0IEZhZGUgZnJvbSAnLi4vLi4vZWxlbWVudHMvYW5pbWF0aW9ucy9mYWRlJztcbmltcG9ydCBWaWV3ZXJTY3JvbGxiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy92aWV3ZXItc2Nyb2xsYmFyJztcbmNvbnN0IGFjdGlvbnMgPSB7IGZldGNoQm9vaywgdXNlckF1dGggfTtcbmNsYXNzIFZpZXdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmJvb2tJZCA9IHByb3BzLnBhcmFtcy5pZDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNob3dQYW5lbDogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dQcm9ncmVzc0RpYWxvZzogZmFsc2UsXG4gICAgICAgICAgICBpc0NhbGN1bGF0aW5nRG9tOiBmYWxzZSxcbiAgICAgICAgICAgIGlzUmVhZGluZ01vZGU6IGZhbHNlLFxuICAgICAgICAgICAgaXNTY3JvbGxNb2RlOiB0cnVlLFxuICAgICAgICAgICAgaXNJbml0aWFsUHJvZ3Jlc3NTZXQ6IGZhbHNlLFxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IDAsXG4gICAgICAgICAgICBjYWxjdWxhdGVkUGFnZXM6IG51bGwsXG4gICAgICAgICAgICBsYXRlc3RQcm9ncmVzczogMCxcbiAgICAgICAgICAgIHZpZXc6IGdldEJvb2tWaWV3KCksXG4gICAgICAgICAgICBzaG93Vmlld2VyUHJlZmVyZW5jZTogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50b2dnbGVWaWV3ZXJQcmVmZXJlbmNlID0gdGhpcy50b2dnbGVWaWV3ZXJQcmVmZXJlbmNlLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIHRvZ2dsZVZpZXdlclByZWZlcmVuY2UoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd1ZpZXdlclByZWZlcmVuY2U6ICF0aGlzLnN0YXRlLnNob3dWaWV3ZXJQcmVmZXJlbmNlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzY3JvbGxUbyhwb3NpdGlvbikge1xuICAgICAgICBsZXQgcGFnZUNvdW50ID0gdGhpcy5zdGF0ZS5jYWxjdWxhdGVkUGFnZXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBsZXQgcGFnZUhlaWdodCA9IHRoaXMuc3RhdGUuY2FsY3VsYXRlZFBhZ2VzLnByb3BzLnZpZXcucGFnZUhlaWdodDtcbiAgICAgICAgbGV0IGhlaWdodCA9IHBhZ2VDb3VudCAqIHBhZ2VIZWlnaHQ7XG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiByZW5kZXJCb29rLnBlcmNlbnRhZ2VUb1BhZ2UocG9zaXRpb24sIHBhZ2VDb3VudCksXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBwb3NpdGlvbiAqIGhlaWdodFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IHBhZ2VDb3VudCAqIHBhZ2VIZWlnaHQgKiBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IGhlaWdodCAqIHBvc2l0aW9uIC8gcGFnZUNvdW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gcGFnZUhlaWdodCAqIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLm1hcFNjcm9sbFRvcFRvU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tYXBXaW5kb3dXaWR0aFRvU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB3aW5kb3dXaWR0aDogd2luZG93LmlubmVyV2lkdGhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1hcFZpZXdUb1N0YXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmlldzogZ2V0Qm9va1ZpZXcoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2hlY2tBbmRTZXRQcm9ncmVzcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50UGFnZU5vID0gdGhpcy5wcm9wcy5ib29rLnBhZ2VObztcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy5mZXRjaEJvb2tQcm9ncmVzcyh0aGlzLmJvb2tJZCkudGhlbihhY3Rpb24gPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmJvb2sucGFnZU5vIC0gY3VycmVudFBhZ2VObyA+IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93UHJvZ3Jlc3NEaWFsb2c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlc3RQcm9ncmVzczogdGhpcy5wcm9wcy5ib29rLnBlcmNlbnRhZ2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGFnZVN1bSA9IHRoaXMuc3RhdGUuY2FsY3VsYXRlZFBhZ2VzLnByb3BzLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IHBhZ2VTdW0gKiB0aGlzLnN0YXRlLnZpZXcucGFnZUhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSB0aGlzLnN0YXRlLnNjcm9sbFRvcCAvIGhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhZ2VObyA9IHJlbmRlckJvb2sucGVyY2VudGFnZVRvUGFnZShwZXJjZW50YWdlLCBwYWdlU3VtKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2dyZXNzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZU5vLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVN1bSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2VcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYXBpcy5zZXRQcm9ncmVzcyh0aGlzLmJvb2tJZCwgcHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvLyBUT0RPOiB1c2Ugc2Vzc2lvbiB0byBkZXRlcm1pbmUgbGF0ZXN0IHByb2dyZXNzXG4gICAgICAgIHRoaXMuZGVib3VuZGVkU2V0UHJvZ3Jlc3MgPSBfLmRlYm91bmNlKHRoaXMuY2hlY2tBbmRTZXRQcm9ncmVzcywgMjAwKTtcbiAgICAgICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuZGVib3VuZGVkU2V0UHJvZ3Jlc3MpXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm1hcFNjcm9sbFRvcFRvU3RhdGUpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5tYXBXaW5kb3dXaWR0aFRvU3RhdGUpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5tYXBWaWV3VG9TdGF0ZSk7XG4gICAgfVxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5kZWJvdW5kZWRTZXRQcm9ncmVzcyk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm1hcFNjcm9sbFRvcFRvU3RhdGUpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5tYXBXaW5kb3dXaWR0aFRvU3RhdGUpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5tYXBWaWV3VG9TdGF0ZSk7XG4gICAgfVxuICAgIHRvZ2dsZUJvb2tQYW5lbChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jYWxjdWxhdGVkUGFnZXMucHJvcHMudmlldy5zY3JlZW4gPT09ICdoZCcpIHtcbiAgICAgICAgICAgIGxldCB5ID0gZXZlbnQucGFnZVkgLSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgICAgIGlmICh5IDwgOTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1BhbmVsOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1BhbmVsOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNsaWNrVG9Ub2dnbGVCb29rUGFuZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNhbGN1bGF0ZWRQYWdlcy5wcm9wcy52aWV3LnNjcmVlbiA9PT0gJ3Bob25lJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2hvd1BhbmVsOiAhdGhpcy5zdGF0ZS5zaG93UGFuZWxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhbGN1bGF0ZURvbSgpIHtcbiAgICAgICAgbGV0IGh0bWwgPSB0aGlzLnN0YXRlLmJvb2tIdG1sO1xuICAgICAgICBsZXQgYm9va0lkID0gdGhpcy5ib29rSWQ7XG4gICAgICAgIGxldCB2aWV3ID0gZ2V0Qm9va1ZpZXcoKTtcbiAgICAgICAgbGV0IG5vZGVIZWlnaHRzID0gcmVuZGVyQm9vay5nZXROb2RlSGVpZ2h0cyh0aGlzLnJlZnMuYm9va0h0bWwuY2hpbGROb2Rlcyk7XG4gICAgICAgIGxldCBwYWdlcyA9IHJlbmRlckJvb2suaHRtbFRvUGFnZXMoaHRtbCwgbm9kZUhlaWdodHMsIHZpZXcpO1xuICAgICAgICBzZXRDYWNoZShgYm9vayR7Ym9va0lkfV9wYWdlc2AsIEpTT04uc3RyaW5naWZ5KHBhZ2VzKSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNSZWFkaW5nTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIGlzQ2FsY3VsYXRpbmdEb206IGZhbHNlLFxuICAgICAgICAgICAgY2FsY3VsYXRlZFBhZ2VzOiBwYWdlc1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbG9hZENhbGN1bGF0ZWRQYWdlcygpIHtcbiAgICAgICAgY29uc3QgYm9va0lkID0gdGhpcy5wcm9wcy5wYXJhbXMuaWQ7XG4gICAgICAgIGxldCBwYWdlcyA9IGdldENhY2hlKGBib29rJHtib29rSWR9X3BhZ2VzYCk7XG4gICAgICAgIC8vIGNoZWNrIGlmIHBhZ2VzIGFyZSBjYWNoZWRcbiAgICAgICAgaWYgKHBhZ2VzKSB7XG4gICAgICAgICAgICBwYWdlcyA9IEpTT04ucGFyc2UocGFnZXMpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNSZWFkaW5nTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVkUGFnZXM6IHBhZ2VzLFxuICAgICAgICAgICAgICAgIGJvb2tIdG1sOiByZW5kZXJCb29rLnBhZ2VzVG9IdG1sKHBhZ2VzKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjdGlvbnMuZmV0Y2hCb29rKGJvb2tJZCwgWydjb250ZW50J10pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5ib29rICYmIG5leHRQcm9wcy5ib29rLmNvbnRlbnQgJiYgbmV4dFByb3BzLmJvb2suY29udGVudC5odG1sICYmICF0aGlzLnByb3BzLmJvb2suY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNDYWxjdWxhdGluZ0RvbTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBib29rSHRtbDogbmV4dFByb3BzLmJvb2suY29udGVudC5odG1sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNpbXBsZUNvbXBhcmVPYmplY3RzKHRoaXMuc3RhdGUudmlldywgbmV4dFN0YXRlLnZpZXcpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc0NhbGN1bGF0aW5nRG9tOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlzQ2FsY3VsYXRpbmdEb20gJiYgIXByZXZTdGF0ZS5pc0NhbGN1bGF0aW5nRG9tKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZURvbSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNjcm9sbCB0byBwcmV2aW91cyByZWFkaW5nIHByb2dyZXNzIHdoZW4gb3BlbmluZyBhIGJvb2tcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYm9vayAmJiB0aGlzLnByb3BzLmJvb2sucGVyY2VudGFnZSAmJiB0aGlzLnN0YXRlLmNhbGN1bGF0ZWRQYWdlcyAmJiAhdGhpcy5zdGF0ZS5pc0luaXRpYWxQcm9ncmVzc1NldCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyh0aGlzLnByb3BzLmJvb2sucGVyY2VudGFnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGlzSW5pdGlhbFByb2dyZXNzU2V0OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHRoaXMucHJvcHMuYWN0aW9ucztcbiAgICAgICAgY29uc3QgYm9va0lkID0gdGhpcy5wcm9wcy5wYXJhbXMuaWQ7XG4gICAgICAgIGFjdGlvbnMudXNlckF1dGgoKTtcbiAgICAgICAgYWN0aW9ucy5mZXRjaEJvb2soYm9va0lkKTtcbiAgICAgICAgLy8gYWN0aW9ucy5mZXRjaEJvb2tQcm9ncmVzcyhib29rSWQpXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5sb2FkQ2FsY3VsYXRlZFBhZ2VzKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNJbml0aWFsUHJvZ3Jlc3NTZXQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXJCb29rKCkge1xuICAgICAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5zdGF0ZS5zY3JvbGxUb3A7XG4gICAgICAgIGxldCBjYWxjdWxhdGVkUGFnZXMgPSB0aGlzLnN0YXRlLmNhbGN1bGF0ZWRQYWdlcztcbiAgICAgICAgbGV0IGJvb2tJZCA9IHRoaXMucHJvcHMucGFyYW1zLmlkO1xuICAgICAgICBsZXQgdmlldyA9IGNhbGN1bGF0ZWRQYWdlcy5wcm9wcy52aWV3O1xuICAgICAgICBsZXQgaGVpZ2h0ID0gY2FsY3VsYXRlZFBhZ2VzLnByb3BzLmNoaWxkcmVuLmxlbmd0aCAqIHZpZXcucGFnZUhlaWdodDtcbiAgICAgICAgbGV0IGN1cnJlbnRQYWdlID0gcmVuZGVyQm9vay5wZXJjZW50YWdlVG9QYWdlKHNjcm9sbFRvcCAvIGhlaWdodCwgY2FsY3VsYXRlZFBhZ2VzLnByb3BzLmNoaWxkcmVuLmxlbmd0aCk7XG4gICAgICAgIGxldCBwYWdlcyA9IHJlbmRlckJvb2suZmlsdGVyUGFnZXMoe1xuICAgICAgICAgICAgc3RhcnRQYWdlOiBjdXJyZW50UGFnZSxcbiAgICAgICAgICAgIG9mZnNldDogMixcbiAgICAgICAgICAgIHF1YW50aXR5OiA1LFxuICAgICAgICAgICAgcGFnZXM6IGNhbGN1bGF0ZWRQYWdlcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtvbkNsaWNrOiB0aGlzLmNsaWNrVG9Ub2dnbGVCb29rUGFuZWwuYmluZCh0aGlzKX0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9va1BhZ2VMaXN0LCB7aGVpZ2h0OiBoZWlnaHQsIHZpZXc6IHZpZXcsIGJvb2tJZDogYm9va0lkLCBwYWdlczogcGFnZXN9KSkpO1xuICAgIH1cbiAgICBoaWRlUHJvZ3Jlc3NEaWFsb2coKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd1Byb2dyZXNzRGlhbG9nOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgYm9vayA9IHRoaXMucHJvcHMuYm9vaztcbiAgICAgICAgbGV0IHZpZXcgPSB0aGlzLnN0YXRlLnZpZXc7XG4gICAgICAgIGxldCBhY3Rpb25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdZZXMnLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8uY2FsbCh0aGlzLCB0aGlzLnN0YXRlLmxhdGVzdFByb2dyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlUHJvZ3Jlc3NEaWFsb2cuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdObycsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb246IHRoaXMuaGlkZVByb2dyZXNzRGlhbG9nLmJpbmQodGhpcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IGB2aWV3ZXIgdmlld2VyLS0ke3ZpZXcuc2NyZWVufWAsIG9uTW91c2VNb3ZlOiB0aGlzLnRvZ2dsZUJvb2tQYW5lbC5iaW5kKHRoaXMpfSwgUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5LCB7Y2xhc3NOYW1lOiBcInZpZXdlclwifSksICFib29rLmNvbnRlbnQgJiYgIXRoaXMuc3RhdGUuY2FsY3VsYXRlZFBhZ2VzID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZywgbnVsbCkpIDogbnVsbCwgdGhpcy5zdGF0ZS5zaG93UHJvZ3Jlc3NEaWFsb2cgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChEaWFsb2csIHthY3Rpb25zOiBhY3Rpb25zLCBjb250ZW50OiBcImFyZSB5b3Ugc3VyZT9cIn0pKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAsIHtjb21wb25lbnQ6IFwiZGl2XCIsIHRyYW5zaXRpb25OYW1lOiBcInNsaWRlXCIsIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ6IDMwMCwgdHJhbnNpdGlvbkxlYXZlVGltZW91dDogMzAwfSwgKHRoaXMuc3RhdGUuc2hvd1BhbmVsICYmIHRoaXMuc3RhdGUuaXNSZWFkaW5nTW9kZSkgfHwgdGhpcy5zdGF0ZS5zaG93Vmlld2VyUHJlZmVyZW5jZSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwidmlld2VyLXBhbmVsXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29udGFpbmVyXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYmFja1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiL1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7bmFtZTogXCJiYWNrXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCLov5Tlm55cIikpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJ0aXRsZVwifSwgYm9vay50aXRsZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge29uQ2xpY2s6IHRoaXMudG9nZ2xlVmlld2VyUHJlZmVyZW5jZSwgY2xhc3NOYW1lOiBcInByZWZlcmVuY2VcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwge25hbWU6IFwiZm9udFwifSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYWRkXCJ9LCBcIueCueWHu+a3u+WKoOiHs+S5puaetlwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChGYWRlLCBudWxsLCB0aGlzLnN0YXRlLnNob3dWaWV3ZXJQcmVmZXJlbmNlID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVmlld2VyUHJlZmVyZW5jZSwgbnVsbCkpIDogbnVsbCkpKSkgOiBudWxsKSwgKHRoaXMuc3RhdGUuaXNDYWxjdWxhdGluZ0RvbSAmJiB0aGlzLnN0YXRlLmJvb2tIdG1sKSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJwYWdlc1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge3JlZjogXCJib29rSHRtbFwiLCBjbGFzc05hbWU6IFwiY29udGVudFwiLCBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IHRoaXMuc3RhdGUuYm9va0h0bWwgfX0pKSkpIDogbnVsbCwgdGhpcy5zdGF0ZS5pc1JlYWRpbmdNb2RlID8gKHRoaXMucmVuZGVyQm9vaygpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVmlld2VyU2Nyb2xsYmFyLCB7Y3VycmVudDogMjAsIHRvdGFsOiAzMDl9KSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJvb2s6IHN0YXRlLmVudGl0aWVzLmJvb2tzW293blByb3BzLnBhcmFtcy5pZF0gPyBzdGF0ZS5lbnRpdGllcy5ib29rc1tvd25Qcm9wcy5wYXJhbXMuaWRdIDoge30sXG4gICAgICAgIHNlc3Npb246IHN0YXRlLnNlc3Npb25cbiAgICB9O1xufSwgZGlzcGF0Y2ggPT4gKHtcbiAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpXG59KSkoVmlld2VyKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL3ZpZXdlci92aWV3ZXIudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmNsYXNzIERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBkZWZhdWx0Q2xhc3MgPSAnZGlhbG9nIHoxJztcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lID8gYCR7ZGVmYXVsdENsYXNzfSAke3RoaXMucHJvcHMuY2xhc3NOYW1lfWAgOiBkZWZhdWx0Q2xhc3M7XG4gICAgICAgIGxldCBjb250ZW50ID0gdGhpcy5wcm9wcy5jb250ZW50O1xuICAgICAgICBsZXQgYWN0aW9ucyA9IHRoaXMucHJvcHMuYWN0aW9ucztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGNvbnRlbnQpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYWN0aW9uc1wifSwgYWN0aW9ucy5tYXAoKGFjdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7a2V5OiBpbmRleCwgb25DbGljazogYWN0aW9uLmZ1bmN0aW9ufSwgYWN0aW9uLnRleHQpO1xuICAgICAgICB9KSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBEaWFsb2c7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvRGlhbG9nLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBOb01hdGNoIGZyb20gJy4uL2NvbnRhaW5lcnMvbm8tbWF0Y2gnO1xuaW1wb3J0IFZpZXdlciBmcm9tICcuLi9jb250YWluZXJzL3ZpZXdlcic7XG5pbXBvcnQgU2lnbmluIGZyb20gJy4uL2NvbnRhaW5lcnMvc2lnbmluJztcbmltcG9ydCBTaWdudXAgZnJvbSAnLi4vY29udGFpbmVycy9zaWdudXAnO1xuaW1wb3J0IEJvb2tJbmZvIGZyb20gJy4uL2NvbnRhaW5lcnMvYm9vay1pbmZvJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vY29udGFpbmVycy9hcHAnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29udGFpbmVycy9ob21lJztcbmltcG9ydCBQcm9maWxlIGZyb20gJy4uL2NvbnRhaW5lcnMvcHJvZmlsZSc7XG5pbXBvcnQgQm9va1NoZWxmIGZyb20gJy4uL2NvbnRhaW5lcnMvYm9vay1zaGVsZic7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi4vY29udGFpbmVycy9zZXR0aW5ncyc7XG5pbXBvcnQgQXJjaGl2ZSBmcm9tICcuLi9jb250YWluZXJzL2FyY2hpdmUnO1xuaW1wb3J0IENvbGxlY3Rpb24gZnJvbSAnLi4vY29udGFpbmVycy9jb2xsZWN0aW9uJztcbmltcG9ydCBBcmNoaXZlZENvbGxlY3Rpb24gZnJvbSAnLi4vY29udGFpbmVycy9hcmNoaXZlZC1jb2xsZWN0aW9uJztcbmltcG9ydCBSb290IGZyb20gJy4uL2NvbnRhaW5lcnMvcm9vdCc7XG5leHBvcnQgZGVmYXVsdCAoUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcIi9cIiwgY29tcG9uZW50OiBSb290fSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge2NvbXBvbmVudDogQXBwfSwgUmVhY3QuY3JlYXRlRWxlbWVudChJbmRleFJvdXRlLCB7Y29tcG9uZW50OiBIb21lfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcImJvb2svOmlkXCIsIGNvbXBvbmVudDogQm9va0luZm99KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwicHJvZmlsZVwiLCBjb21wb25lbnQ6IFByb2ZpbGV9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwicHJvZmlsZS86dXNlclwiLCBjb21wb25lbnQ6IFByb2ZpbGV9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwic2hlbGZcIiwgY29tcG9uZW50OiBCb29rU2hlbGZ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwic2V0dGluZ3NcIiwgY29tcG9uZW50OiBTZXR0aW5nc30pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJicm93c2VcIiwgY29tcG9uZW50OiBBcmNoaXZlfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcImNvbGxlY3Rpb25zLzppZFwiLCBjb21wb25lbnQ6IENvbGxlY3Rpb259KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwiY29sbGVjdGlvbnNcIiwgY29tcG9uZW50OiBBcmNoaXZlZENvbGxlY3Rpb259KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcInNpZ25pblwiLCBjb21wb25lbnQ6IFNpZ25pbn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJzaWdudXBcIiwgY29tcG9uZW50OiBTaWdudXB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwidmlld2VyL2Jvb2svOmlkXCIsIGNvbXBvbmVudDogVmlld2VyfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcIipcIiwgY29tcG9uZW50OiBOb01hdGNofSkpKSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvcm91dGVzL2FwcC50c3hcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Q2FjaGUobmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTmFtZSBzaG91bGQgYmUgc3RyaW5nIScpO1xuICAgIH1cbiAgICBsZXQgY29udGVudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpO1xuICAgIGlmICghY29udGVudCkge1xuICAgICAgICBjb250ZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBjb250ZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldENhY2hlKG5hbWUsIGNvbnRlbnQpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ05hbWUgc2hvdWxkIGJlIHN0cmluZyEnKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjb250ZW50ICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdDYWNoZSBjb250ZW50IHNob3VsZCBiZSBzdHJpbmchJyk7XG4gICAgfVxuICAgIGxldCBzdWNjZXNzID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBjb250ZW50KTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gc3VjY2Vzcztcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9jYWNoZS50c1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBzaW1wbGVDb21wYXJlT2JqZWN0cyhvYmoxLCBvYmoyKSB7XG4gICAgbGV0IGlzRXF1YWwgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gb2JqMSkge1xuICAgICAgICAgICAgaWYgKG9iajFbcHJvcF0gIT09IG9iajJbcHJvcF0pIHtcbiAgICAgICAgICAgICAgICBpc0VxdWFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgaXNFcXVhbCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gaXNFcXVhbDtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9vYmplY3QudHNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gZmlsdGVyUGFnZXMoY29uZmlnKSB7XG4gICAgbGV0IHsgc3RhcnRQYWdlLCBxdWFudGl0eSwgb2Zmc2V0LCBwYWdlcyB9ID0gY29uZmlnO1xuICAgIGxldCBuZXdQYWdlcyA9IFtdO1xuICAgIHdoaWxlIChzdGFydFBhZ2UgLSBvZmZzZXQgPCAwKSB7XG4gICAgICAgIG9mZnNldC0tO1xuICAgIH1cbiAgICBzdGFydFBhZ2UgPSBzdGFydFBhZ2UgLSBvZmZzZXQ7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0UGFnZTsgaSA8IHF1YW50aXR5ICsgc3RhcnRQYWdlICYmIGkgPCBwYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcGFnZSA9IHBhZ2VzW2ldO1xuICAgICAgICBuZXdQYWdlcy5wdXNoKHBhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3UGFnZXM7XG59XG5leHBvcnQgZnVuY3Rpb24gaHRtbFRvUGFnZXMoaHRtbCwgbm9kZUhlaWdodHMsIHZpZXcpIHtcbiAgICBsZXQgcGFnZUhlaWdodCA9IHZpZXcucGFnZUhlaWdodDtcbiAgICBsZXQgbm9kZXMgPSBwYXJzZUhUTUwoaHRtbCk7XG4gICAgbGV0IHBhZ2VzID0gZ3JvdXBOb2Rlc0J5UGFnZShub2Rlcywgbm9kZUhlaWdodHMsIHBhZ2VIZWlnaHQpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdwYWdlcycsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBjaGlsZHJlbjogcGFnZXMsXG4gICAgICAgICAgICB2aWV3XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VzVG9IdG1sKHBhZ2VzKSB7XG4gICAgbGV0IG5vZGVzID0gcGFnZXMucHJvcHMuY2hpbGRyZW4ucmVkdWNlKChhLCBiKSA9PiAoYS5jb25jYXQoYi5wcm9wcy5jaGlsZHJlbikpLCBbXSk7XG4gICAgbGV0IHVuaXF1ZU5vZGVzID0gW107XG4gICAgbGV0IHJlYWxJbmRleCA9IDA7XG4gICAgLy8gcmVtb3ZlIGR1cGxpY2F0ZSBub2Rlc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbm9kZXNbaV07XG4gICAgICAgIGlmIChub2Rlc1tpXS5wcm9wcy5pbmRleCA9PT0gcmVhbEluZGV4KSB7XG4gICAgICAgICAgICB1bmlxdWVOb2Rlcy5wdXNoKG5vZGVzW2ldKTtcbiAgICAgICAgICAgIHJlYWxJbmRleCsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBodG1sID0gcGFyc2VOb2Rlcyh1bmlxdWVOb2Rlcyk7XG4gICAgcmV0dXJuIGh0bWw7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZUhlaWdodHMobm9kZXMpIHtcbiAgICBsZXQgbm9kZXNIZWlnaHQgPSBbXTtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVzLCAobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSBcInBcIikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVuc3VwcG9ydGVkIGNvbnRlbnQgZm91bmQhXCIpO1xuICAgICAgICB9XG4gICAgICAgIG5vZGVzSGVpZ2h0LnB1c2gobm9kZS5jbGllbnRIZWlnaHQpO1xuICAgIH0pO1xuICAgIHJldHVybiBub2Rlc0hlaWdodDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwZXJjZW50YWdlVG9QYWdlKHAsIHBhZ2VTdW0pIHtcbiAgICBpZiAocCA+IDEpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIldyb25nIHBhcmFtZXRlciFcIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KChwICogcGFnZVN1bSkpICsgMTtcbiAgICB9XG59XG4vLyBmdW5jcyB1c2VkIGludGVybmFsbHlcbmZ1bmN0aW9uIHBhcnNlSFRNTChodG1sU3RyaW5nKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG4gICAgbGV0ICRodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgJGh0bWxOb2RlcztcbiAgICAkaHRtbC5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xuICAgICRodG1sTm9kZXMgPSAkaHRtbC5jaGlsZE5vZGVzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJGh0bWxOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoJGh0bWxOb2Rlc1tpXS5ub2RlVHlwZSAhPSAxKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICRodG1sTm9kZXNbaV0udGFnTmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAkaHRtbE5vZGVzW2ldLmlubmVySFRNTFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub2Rlcztcbn1cbmZ1bmN0aW9uIHBhcnNlTm9kZXMobm9kZXMpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG5vZGVzW2ldLnR5cGUgIT09ICdwJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5zdXBwb3J0ZWQgbm9kZSBmb3VuZCEnKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaHRtbCArPSBgPHA+JHtub2Rlc1tpXS5wcm9wcy5jaGlsZHJlbn08L3A+YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaHRtbDtcbn1cbmZ1bmN0aW9uIGdyb3VwTm9kZXNCeVBhZ2Uobm9kZXMsIG5vZGVIZWlnaHRzLCBwYWdlSGVpZ2h0KSB7XG4gICAgbGV0IHBhZ2VzID0gW107XG4gICAgbGV0IHBhZ2VIZWlnaHRTdW0gPSBub2RlSGVpZ2h0cy5yZWR1Y2UoKGEsIGIpID0+IChhICsgYiksIDApO1xuICAgIGxldCBwYWdlU3VtID0gTWF0aC5jZWlsKHBhZ2VIZWlnaHRTdW0gLyBwYWdlSGVpZ2h0KTtcbiAgICBub2RlcyA9IG5vZGVzLm1hcCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgbm9kZS5wcm9wcy5pbmRleCA9IGluZGV4O1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9KTtcbiAgICAvLyBsb25nIHBhcmFncmFwaCBzaXR1YXRpb24gZG9lc24ndCBzZWVtIHRvIGFmZmVjdCB0aGlzIGZ1bmN0aW9uXG4gICAgLy8gb2Zmc2V0IGRpc3RhbmNlIGlzIGFsd2F5cyBuZWd0aXZlIG9yIHplcm9cbiAgICAvLyB0aGUgaW5kZXggd2lsbCBiZSBvZiB0aGUgcGFyYWdyYXBoIHdpdGggdGhpcyBvZmZzZXQgYXQgdGhlIGVuZFxuICAgIGNvbnN0IGdldFBhZ2VPZmZzZXQgPSBmdW5jdGlvbiAocGFnZUluZGV4KSB7XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCBpbmRleDtcbiAgICAgICAgaWYgKHBhZ2VJbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgbGV0IG5vZGVIZWlnaHRTdW0gPSAwO1xuICAgICAgICAgICAgd2hpbGUgKG5vZGVIZWlnaHRTdW0gPD0gcGFnZUhlaWdodCAqIHBhZ2VJbmRleCkge1xuICAgICAgICAgICAgICAgIG5vZGVIZWlnaHRTdW0gKz0gbm9kZUhlaWdodHNbaV07XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2Zmc2V0ID0gbm9kZUhlaWdodFN1bSAtIG5vZGVIZWlnaHRzW2kgLSAxXSAtIHBhZ2VJbmRleCAqIHBhZ2VIZWlnaHQ7XG4gICAgICAgICAgICBpbmRleCA9IGkgLSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICBpbmRleFxuICAgICAgICB9O1xuICAgIH07XG4gICAgY29uc3QgZ2V0Tm9kZXNPZlBhZ2UgPSBmdW5jdGlvbiAocGFnZUluZGV4KSB7XG4gICAgICAgIGxldCBvZmZzZXRPYmplY3QgPSBnZXRQYWdlT2Zmc2V0KHBhZ2VJbmRleCk7XG4gICAgICAgIGxldCBub2RlU3RhcnRJbmRleCA9IG9mZnNldE9iamVjdC5pbmRleDtcbiAgICAgICAgbGV0IG9mZnNldCA9IG9mZnNldE9iamVjdC5vZmZzZXQ7XG4gICAgICAgIGxldCBpID0gbm9kZVN0YXJ0SW5kZXg7XG4gICAgICAgIGxldCBub2RlRW5kSW5kZXg7XG4gICAgICAgIGxldCBwYWdlTm9kZXMgPSBbXTtcbiAgICAgICAgbGV0IG5vZGVIZWlnaHRTdW0gPSBvZmZzZXQgKyBub2RlSGVpZ2h0c1tub2RlU3RhcnRJbmRleF07XG4gICAgICAgIGkrKztcbiAgICAgICAgaWYgKG5vZGVIZWlnaHRTdW0gPCBwYWdlSGVpZ2h0KSB7XG4gICAgICAgICAgICB3aGlsZSAobm9kZUhlaWdodFN1bSA8PSBwYWdlSGVpZ2h0ICYmIGkgIT09IG5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5vZGVIZWlnaHRTdW0gKz0gbm9kZUhlaWdodHNbaV07XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZUVuZEluZGV4ID0gaSAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlRW5kSW5kZXggPSBub2RlU3RhcnRJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gbm9kZVN0YXJ0SW5kZXg7IGkgPD0gbm9kZUVuZEluZGV4ICYmIGkgPD0gbm9kZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBwYWdlTm9kZXMucHVzaChub2Rlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtwYWdlTm9kZXMsIG9mZnNldF07XG4gICAgfTtcbiAgICAvLyBmaW5hbGx5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlU3VtOyBpKyspIHtcbiAgICAgICAgbGV0IGFycmF5ID0gZ2V0Tm9kZXNPZlBhZ2UoaSk7XG4gICAgICAgIGxldCBub2RlcyA9IGFycmF5WzBdO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gYXJyYXlbMV07XG4gICAgICAgIHBhZ2VzLnB1c2goe1xuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogbm9kZXMsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBpICogcGFnZUhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogcGFnZUhlaWdodFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFnZU5vOiBpICsgMSxcbiAgICAgICAgICAgICAgICBvZmZzZXRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiBcInBhZ2VcIlxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhZ2VzO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3V0aWxzL3JlbmRlci1ib29rLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2lzLWl0ZXJhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gMTI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSAxMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzSXRlcmFibGUyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvaXMtaXRlcmFibGVcIik7XG5cbnZhciBfaXNJdGVyYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0l0ZXJhYmxlMik7XG5cbnZhciBfZ2V0SXRlcmF0b3IyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG4gICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pID0gKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoYXJyKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9IHRydWU7XG4gICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnI7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSBlbHNlIGlmICgoMCwgX2lzSXRlcmFibGUzLmRlZmF1bHQpKE9iamVjdChhcnIpKSkge1xuICAgICAgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gICAgfVxuICB9O1xufSgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gMTI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZScpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjb3JlICA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKVxuICAsICRKU09OID0gY29yZS5KU09OIHx8IChjb3JlLkpTT04gPSB7c3RyaW5naWZ5OiBKU09OLnN0cmluZ2lmeX0pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiAkSlNPTi5zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3VtZW50cyk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gMTMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbiAqKiBtb2R1bGUgaWQgPSAxMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xyXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcclxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuICoqIG1vZHVsZSBpZCA9IDE0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDE0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSAxNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxyXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxyXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcclxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXHJcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxyXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XHJcbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xyXG5cclxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxyXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XHJcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcclxuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxyXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcclxuICAgICwgZ3QgICAgID0gJz4nXHJcbiAgICAsIGlmcmFtZURvY3VtZW50O1xyXG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcclxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xyXG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcclxuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xyXG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcclxuICBpZnJhbWVEb2N1bWVudC53cml0ZSgnPHNjcmlwdD5kb2N1bWVudC5GPU9iamVjdDwvc2NyaXB0JyArIGd0KTtcclxuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xyXG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xyXG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcclxuICByZXR1cm4gY3JlYXRlRGljdCgpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcclxuICB2YXIgcmVzdWx0O1xyXG4gIGlmKE8gIT09IG51bGwpe1xyXG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xyXG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xyXG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XHJcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXHJcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcclxuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xyXG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcclxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXHJcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXHJcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XHJcbiAgYW5PYmplY3QoTyk7XHJcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcclxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcclxuICAgICwgaSA9IDBcclxuICAgICwgUDtcclxuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XHJcbiAgcmV0dXJuIE87XHJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4gKiogbW9kdWxlIGlkID0gMTQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXHJcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXHJcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXHJcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxyXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XHJcbiAgTyA9IHRvT2JqZWN0KE8pO1xyXG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xyXG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xyXG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xyXG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XHJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4gKiogbW9kdWxlIGlkID0gMTQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcclxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxyXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcclxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XHJcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXHJcbiAgICAsIGkgICAgICA9IDBcclxuICAgICwgcmVzdWx0ID0gW11cclxuICAgICwga2V5O1xyXG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcclxuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXHJcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xyXG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMTQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4gKiogbW9kdWxlIGlkID0gMTUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4gKiogbW9kdWxlIGlkID0gMTUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXQgICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDE1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5pc0l0ZXJhYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTyA9IE9iamVjdChpdCk7XG4gIHJldHVybiBPW0lURVJBVE9SXSAhPT0gdW5kZWZpbmVkXG4gICAgfHwgJ0BAaXRlcmF0b3InIGluIE9cbiAgICB8fCBJdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoY2xhc3NvZihPKSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gMTU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJoMiB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/bW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdIS4vfi9yZXNvbHZlLXVybC1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcCEuL3NyYy9jbGllbnQvY29udGFpbmVycy9hcHAvYXBwLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhvbWUtYmx1ZS0zTzNmUSB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImJsdWVcIjogXCJob21lLWJsdWUtM08zZlFcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP21vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XSEuL34vcmVzb2x2ZS11cmwtbG9hZGVyIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXAhLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvaG9tZS9ob21lLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbmFtZV0tW2xvY2FsXS1baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL2FwcC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2FwcC9hcHAuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDE2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtuYW1lXS1bbG9jYWxdLVtoYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vaG9tZS5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2hvbWUvaG9tZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9