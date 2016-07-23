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

	module.exports = __webpack_require__(117);


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
/* 12 */,
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
/* 15 */,
/* 16 */,
/* 17 */,
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
/* 21 */,
/* 22 */,
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
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ function(module, exports) {

	module.exports = require("react-addons-css-transition-group");

/***/ },
/* 31 */,
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
/* 35 */,
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
/* 42 */,
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
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ function(module, exports) {

	module.exports = require("react-side-effect");

/***/ },
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _input = __webpack_require__(25);
	
	var _input2 = _interopRequireDefault(_input);
	
	var _actions = __webpack_require__(3);
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RInput = function (_Component) {
	    _inherits(RInput, _Component);
	
	    function RInput(props) {
	        _classCallCheck(this, RInput);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(RInput).call(this, props));
	    }
	
	    _createClass(RInput, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            return _react2.default.createElement(_input2.default, { name: this.props.name, value: _lodash2.default.get(this.props.elements[this.props.symbol], 'value', ''), placeholder: this.props.placeholder, onChange: function onChange(e) {
	                    var newValue = e.target.value;
	                    _this2.props.changeValue(_this2.props.symbol, newValue);
	                    if (_this2.props.onChange) {
	                        _this2.props.onChange(newValue);
	                    }
	                } });
	        }
	    }]);
	
	    return RInput;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        elements: state.elements
	    };
	}, { changeValue: _actions.changeValue })(RInput);

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
	
	var _reactRedux = __webpack_require__(2);
	
	var _textarea = __webpack_require__(26);
	
	var _textarea2 = _interopRequireDefault(_textarea);
	
	var _actions = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RTextarea = function (_Component) {
	    _inherits(RTextarea, _Component);
	
	    function RTextarea(props) {
	        _classCallCheck(this, RTextarea);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(RTextarea).call(this, props));
	    }
	
	    _createClass(RTextarea, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            return _react2.default.createElement(_textarea2.default, { value: _.get(this.props.elements[this.props.symbol], 'value', ''), placeholder: this.props.placeholder, onChange: function onChange(e) {
	                    var newValue = e.target.value;
	                    _this2.props.changeValue(_this2.props.symbol, newValue);
	                    if (_this2.props.onChange) {
	                        _this2.props.onChange(newValue);
	                    }
	                } });
	        }
	    }]);
	
	    return RTextarea;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        elements: state.elements
	    };
	}, { changeValue: _actions.changeValue })(RTextarea);

/***/ },
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	var _container = __webpack_require__(10);
	
	var _container2 = _interopRequireDefault(_container);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ConsoleBranding = function (_Component) {
	    _inherits(ConsoleBranding, _Component);
	
	    function ConsoleBranding(props) {
	        _classCallCheck(this, ConsoleBranding);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ConsoleBranding).call(this, props));
	
	        _this.state = {
	            isDropdownMenuVisible: false
	        };
	        return _this;
	    }
	
	    _createClass(ConsoleBranding, [{
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
	            var isAdmin = this.props.isAdmin ? this.props.isAdmin : 'false';
	            return _react2.default.createElement("div", { className: "branding console-branding" }, _react2.default.createElement(_container2.default, { isFluid: true, className: "clearfix" }, _react2.default.createElement("div", null, _react2.default.createElement("h1", { className: "logo left" }, _react2.default.createElement(_reactRouter.Link, { to: "/console" }, "readr"), _react2.default.createElement("span", { className: "sep" }, "|"), _react2.default.createElement("span", { className: "sub" }, "Console")), username ? _react2.default.createElement("div", { onMouseLeave: this.toggleDropdownMenu.bind(this), onMouseEnter: this.toggleDropdownMenu.bind(this), className: "nav right" }, _react2.default.createElement("span", { className: "username" }, username, isAdmin ? _react2.default.createElement("span", { className: "badge-dark" }, "Admin") : null), this.state.isDropdownMenuVisible ? _react2.default.createElement("ul", { className: "dropdown-menu" }, isAdmin === true ? _react2.default.createElement("li", null, _react2.default.createElement("a", { href: "/" }, "Back to readr")) : null, _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: '/profile/' + username }, "我的账号")), _react2.default.createElement("li", null, _react2.default.createElement("a", { href: '/logout' }, "退出"))) : null) : _react2.default.createElement("div", { className: "nav right" }, _react2.default.createElement("ul", { className: "nav-links" }, _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: "/signin" }, "登录")), _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: "/signup" }, "注册")))))));
	        }
	    }]);
	
	    return ConsoleBranding;
	}(_react.Component);
	
	exports.default = ConsoleBranding;

/***/ },
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */
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
	
	var _form = __webpack_require__(6);
	
	var _Modal = __webpack_require__(110);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _apis = __webpack_require__(19);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _apisThirdParty = __webpack_require__(119);
	
	var _rInput = __webpack_require__(55);
	
	var _rInput2 = _interopRequireDefault(_rInput);
	
	var _rTextarea = __webpack_require__(56);
	
	var _rTextarea2 = _interopRequireDefault(_rTextarea);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var syls = {
	    inputBookName: Symbol('inputBookName'),
	    inputBookAuthor: Symbol('inputBookAuthor'),
	    inputAuthorName: Symbol('inputAuthorName'),
	    inputAuthorSlug: Symbol('inputAuthorSlug'),
	    inputBookCover: Symbol('inputBookCover'),
	    textareaAuthorDesc: Symbol('textareaAuthorDesc'),
	    textareaBookDesc: Symbol('textareaBookDesc'),
	    textareaBookContent: Symbol('textareaBookContent')
	};
	
	var AddBook = function (_Component) {
	    _inherits(AddBook, _Component);
	
	    function AddBook(props) {
	        _classCallCheck(this, AddBook);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddBook).call(this, props));
	
	        _this.defaultState = {
	            bookTitle: [],
	            bookAuthor: [],
	            authorResults: [],
	            isAddAuthorModalVisible: false
	        };
	        _this.state = Object.assign({}, _this.defaultState);
	        // todo
	        // this.fetchDoubanBooks = _.debounce(fetchDoubanBooks, 150)
	        return _this;
	    }
	
	    _createClass(AddBook, [{
	        key: 'resetForm',
	        value: function resetForm() {
	            this.props.changeValue(syls.inputBookCover, '');
	            this.props.changeValue(syls.textareaBookDesc, '');
	            this.props.changeValue(syls.textareaBookContent, '');
	            this.setState(this.defaultState);
	        }
	    }, {
	        key: 'addBook',
	        value: function addBook() {
	            var _this2 = this;
	
	            var data = {
	                title: this.state.bookTitle.length !== 0 ? this.state.bookTitle[0].value : '',
	                author: this.state.bookAuthor.map(function (a) {
	                    return a.value;
	                }),
	                description: this.props.elements[syls.textareaBookDesc].value,
	                cover: this.props.elements[syls.inputBookCover].value,
	                content: this.props.elements[syls.textareaBookContent].value
	            };
	            _apis2.default.addBook(data).then(function (result) {
	                _this2.props.sendNotification('添加成功');
	                _this2.resetForm();
	            }, function (error) {
	                _this2.props.sendNotification(error.message);
	            });
	        }
	    }, {
	        key: 'addAuthor',
	        value: function addAuthor() {
	            var _this3 = this;
	
	            var data = {
	                name: this.props.elements[syls.inputAuthorName].value,
	                slug: this.props.elements[syls.inputAuthorSlug].value,
	                description: this.props.elements[syls.textareaAuthorDesc].value
	            };
	            _apis2.default.addAuthor(data).then(function (result) {
	                _this3.props.sendNotification('添加成功');
	                var id = result.ops[0].id;
	                _this3.setState({
	                    bookAuthor: [].concat(_toConsumableArray(_this3.state.bookAuthor), [{ name: data.name, value: id }]),
	                    isAddAuthorModalVisible: false
	                });
	                _this3.props.changeValue(syls.inputBookAuthor, '');
	            }, function (error) {
	                _this3.props.sendNotification(error.message);
	            });
	        }
	    }, {
	        key: 'searchBooks',
	        value: function searchBooks(query) {
	            var _this4 = this;
	
	            if (query !== '') {
	                (0, _apisThirdParty.fetchDoubanBooks)(query).then(function (res) {
	                    _this4.setState({
	                        optionsOfBookTitle: res.books.map(function (book) {
	                            return {
	                                name: book.title,
	                                value: book.title,
	                                additional: {
	                                    description: book.summary,
	                                    cover: book.images.large,
	                                    author: book.author.join(', ')
	                                }
	                            };
	                        })
	                    });
	                });
	            }
	        }
	    }, {
	        key: 'searchAuthors',
	        value: function searchAuthors(query) {
	            var _this5 = this;
	
	            if (query !== '') {
	                _apis2.default.searchAuthors(query).then(function (response) {
	                    _this5.setState({
	                        optionsOfBookAuthor: response.map(function (r) {
	                            return {
	                                name: r.name,
	                                value: r.id
	                            };
	                        })
	                    });
	                });
	            } else {
	                this.setState({
	                    optionsOfBookAuthor: []
	                });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this6 = this;
	
	            return _react2.default.createElement("form", null, _react2.default.createElement(_Modal2.default, { width: 600, isVisible: this.state.isAddAuthorModalVisible, onRequestClose: function onRequestClose() {
	                    _this6.setState({
	                        isAddAuthorModalVisible: false
	                    });
	                } }, _react2.default.createElement("h1", { className: "page-title", style: { marginTop: 0 } }, "Add author"), _react2.default.createElement(_rInput2.default, { placeholder: "Name", symbol: syls.inputAuthorName }), _react2.default.createElement(_rInput2.default, { placeholder: "Slug", symbol: syls.inputAuthorSlug }), _react2.default.createElement(_rTextarea2.default, { symbol: syls.textareaAuthorDesc, placeholder: "Description" }), _react2.default.createElement(_form.Button, { onClick: function onClick(e) {
	                    e.preventDefault();
	                    _this6.addAuthor();
	                } }, "Add")), _react2.default.createElement("h1", { className: "page-title" }, "Add Book"), _react2.default.createElement(_form.SelectizeInput, { placeholder: "Book title", onInputChange: function onInputChange(newValue) {
	                    _this6.searchBooks(newValue);
	                    _this6.props.changeValue(syls.inputBookName, newValue);
	                }, value: _lodash2.default.get(this.props.elements[syls.inputBookName], 'value', ''), onValuesChange: function onValuesChange(newValues) {
	                    _this6.setState({
	                        bookTitle: newValues
	                    });
	                }, options: this.state.optionsOfBookTitle, values: this.state.bookTitle, onAddNewValue: function onAddNewValue() {
	                    // todo
	                }, onOptionClick: function onOptionClick(option) {
	                    _this6.props.changeValue(syls.inputBookCover, option.additional.cover);
	                    _this6.props.changeValue(syls.inputBookAuthor, option.additional.author);
	                    _this6.props.changeValue(syls.textareaBookDesc, option.additional.description);
	                } }), _react2.default.createElement(_form.SelectizeInput, { placeholder: "Book author", onInputChange: function onInputChange(newValue) {
	                    _this6.searchAuthors(newValue);
	                    _this6.props.changeValue(syls.inputBookAuthor, newValue);
	                }, value: _lodash2.default.get(this.props.elements[syls.inputBookAuthor], 'value', ''), onValuesChange: function onValuesChange(newValues) {
	                    _this6.setState({
	                        bookAuthor: newValues
	                    });
	                }, options: this.state.optionsOfBookAuthor, values: this.state.bookAuthor, addNewValue: true, onAddNewValue: function onAddNewValue(value) {
	                    _this6.props.changeValue(syls.inputAuthorName, value);
	                    // todo
	                    _this6.props.changeValue(syls.inputAuthorSlug, value);
	                    _this6.props.changeValue(syls.textareaAuthorDesc, '');
	                    _this6.setState({
	                        isAddAuthorModalVisible: true
	                    });
	                } }), _react2.default.createElement(_rInput2.default, { placeholder: "Cover", symbol: syls.inputBookCover }), _react2.default.createElement(_rTextarea2.default, { placeholder: "Description", symbol: syls.textareaBookDesc }), _react2.default.createElement(_rTextarea2.default, { placeholder: "Paste book content here", symbol: syls.textareaBookContent }), _react2.default.createElement(_form.Button, { onClick: function onClick(e) {
	                    e.preventDefault();
	                    _this6.addBook();
	                } }, "Add"));
	        }
	    }]);
	
	    return AddBook;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        notification: state.components.notification,
	        elements: state.elements
	    };
	}, { sendNotification: _actions.sendNotification, changeValue: _actions.changeValue })(AddBook);

/***/ },
/* 95 */
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
	
	var _form = __webpack_require__(6);
	
	var _apis = __webpack_require__(19);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _rInput = __webpack_require__(55);
	
	var _rInput2 = _interopRequireDefault(_rInput);
	
	var _rTextarea = __webpack_require__(56);
	
	var _rTextarea2 = _interopRequireDefault(_rTextarea);
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var syls = {
	    inputCollectionName: Symbol('inputCollectionName'),
	    inputBookName: Symbol('inputBookName'),
	    textareaCollectionDesc: Symbol('textareaCollectionDesc')
	};
	
	var AddCollection = function (_Component) {
	    _inherits(AddCollection, _Component);
	
	    function AddCollection(props) {
	        _classCallCheck(this, AddCollection);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddCollection).call(this, props));
	
	        _this.defaultState = {
	            optionsOfBooks: [],
	            valuesOfBooks: []
	        };
	        _this.state = Object.assign({}, _this.defaultState);
	        _this.addCollection = _this.addCollection.bind(_this);
	        return _this;
	    }
	
	    _createClass(AddCollection, [{
	        key: 'resetForm',
	        value: function resetForm() {
	            this.props.changeValue(syls.inputCollectionName, '');
	            this.props.changeValue(syls.textareaCollectionDesc, '');
	            this.setState(this.defaultState);
	        }
	    }, {
	        key: 'addCollection',
	        value: function addCollection() {
	            var _this2 = this;
	
	            var name = this.props.elements[syls.inputCollectionName].value;
	            var items = this.state.valuesOfBooks.map(function (a) {
	                return a.value;
	            });
	            var description = this.props.elements[syls.textareaCollectionDesc].value;
	            var data = { name: name, items: items, description: description, creator: this.props.session.user.id };
	            _apis2.default.addCollection(data).then(function (result) {
	                _this2.props.sendNotification('添加成功！');
	                _this2.resetForm();
	            }, function (error) {
	                _this2.props.sendNotification(error.message);
	            });
	        }
	    }, {
	        key: 'searchBooks',
	        value: function searchBooks(query) {
	            var _this3 = this;
	
	            if (query !== '') {
	                _apis2.default.searchBooks(query).then(function (response) {
	                    _this3.setState({
	                        optionsOfBooks: response.map(function (r) {
	                            return {
	                                name: r.title,
	                                value: r.id
	                            };
	                        })
	                    });
	                });
	            }
	        }
	        // searchTags(query) {
	        //   if(query !== '') {
	        //     apis.searchTags(query).then(response => {
	        //       console.log(response)
	        //       this.setState({
	        //         tagResults: response
	        //       })
	        //     })
	        //   }
	        // }
	
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this4 = this;
	
	            return _react2.default.createElement("form", null, _react2.default.createElement("h1", { className: "page-title" }, "Add Collection"), _react2.default.createElement(_rInput2.default, { symbol: syls.inputCollectionName, placeholder: "Name" }), _react2.default.createElement(_form.SelectizeInput, { placeholder: "Books", onInputChange: function onInputChange(newValue) {
	                    _this4.searchBooks(newValue);
	                    _this4.props.changeValue(syls.inputBookName, newValue);
	                }, value: _lodash2.default.get(this.props.elements[syls.inputBookName], 'value', ''), onValuesChange: function onValuesChange(newValues) {
	                    _this4.setState({
	                        valuesOfBooks: newValues
	                    });
	                }, options: this.state.optionsOfBooks, values: this.state.valuesOfBooks }), _react2.default.createElement(_rTextarea2.default, { symbol: syls.textareaCollectionDesc, placeholder: "Description" }), _react2.default.createElement(_form.Button, { onClick: this.addCollection }, "Add"));
	        }
	    }]);
	
	    return AddCollection;
	}(_react.Component);
	
	function mapStateToProps(state) {
	    return {
	        notification: state.components.notification,
	        elements: state.elements,
	        session: state.session
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, changeValue: _actions.changeValue })(AddCollection);

/***/ },
/* 96 */
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
	
	var _container = __webpack_require__(10);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _icon = __webpack_require__(9);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _consoleBranding = __webpack_require__(83);
	
	var _consoleBranding2 = _interopRequireDefault(_consoleBranding);
	
	var _actions = __webpack_require__(3);
	
	var _alert = __webpack_require__(37);
	
	var _alert2 = _interopRequireDefault(_alert);
	
	var _menus = __webpack_require__(99);
	
	var _menus2 = _interopRequireDefault(_menus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Console = function (_Component) {
	    _inherits(Console, _Component);
	
	    function Console() {
	        _classCallCheck(this, Console);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Console).apply(this, arguments));
	    }
	
	    _createClass(Console, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.userAuth();
	        }
	    }, {
	        key: 'renderMenu',
	        value: function renderMenu(menuMapping, currentPath) {
	            var currentMenu = {
	                rootIndex: 0,
	                subIndex: 0
	            };
	            menuMapping.forEach(function (item, rootIndex) {
	                var subIndex = void 0;
	                var result = item.subMenu.filter(function (item, index) {
	                    if (item.path === currentPath) {
	                        subIndex = index;
	                        return true;
	                    }
	                });
	                if (result.length > 0) {
	                    currentMenu.rootIndex = rootIndex;
	                    currentMenu.subIndex = subIndex;
	                }
	            });
	            var rootMenu = _react2.default.createElement("ul", { className: "nav-side nav-side-root" }, menuMapping.map(function (menu, index) {
	                var className = 'menu-' + menu.component;
	                if (index === currentMenu.rootIndex) {
	                    className += ' current';
	                }
	                return _react2.default.createElement("li", { key: index, className: className }, _react2.default.createElement(_reactRouter.Link, { to: '/' + menu.path }, _react2.default.createElement(_icon2.default, { name: menu.component })));
	            }));
	            var subMenu = _react2.default.createElement("ul", { className: "nav-side nav-side-sub" }, menuMapping[currentMenu.rootIndex].subMenu.map(function (menu, index) {
	                var className = 'menu-' + menu.component;
	                if (index === currentMenu.subIndex) {
	                    className += ' current';
	                }
	                return _react2.default.createElement("li", { key: index, className: className }, _react2.default.createElement(_reactRouter.Link, { to: '/' + menu.path }, menu.displayName));
	            }));
	            return _react2.default.createElement("div", { className: "sidebar-left" }, rootMenu, subMenu);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var isAdmin = this.props.session.user.role === 'admin' ? true : false;
	            var username = this.props.session.user.username ? this.props.session.user.username : null;
	            var pathname = this.props.routing.locationBeforeTransitions ? this.props.routing.locationBeforeTransitions.pathname : 'console';
	            return _react2.default.createElement("div", null, _react2.default.createElement(_consoleBranding2.default, { isAdmin: isAdmin, username: username }), _react2.default.createElement(_container2.default, { isFluid: true }, this.props.notifications.filter(function (noti) {
	                return noti.visible;
	            }).length > 0 ? _react2.default.createElement("div", { className: "notifications" }, this.props.notifications.map(function (noti, index) {
	                return _react2.default.createElement(_alert2.default, { key: index, type: noti.type, message: noti.message, visible: noti.visible });
	            })) : null, this.renderMenu(_menus2.default, pathname), _react2.default.createElement("div", { className: "content" }, this.props.children)));
	        }
	    }]);
	
	    return Console;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        notifications: state.components.notifications,
	        session: state.session,
	        routing: state.routing
	    };
	}, { sendNotification: _actions.sendNotification, userAuth: _actions.userAuth })(Console);

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _body = __webpack_require__(8);
	
	var _body2 = _interopRequireDefault(_body);
	
	var _apis = __webpack_require__(19);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _actions = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ManageBooks = function (_Component) {
	    _inherits(ManageBooks, _Component);
	
	    function ManageBooks(props) {
	        _classCallCheck(this, ManageBooks);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ManageBooks).call(this, props));
	    }
	
	    _createClass(ManageBooks, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.fetchBooks();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var bookListNewest = this.props.bookListNewest ? this.props.bookListNewest : null;
	            return _react2.default.createElement("div", null, _react2.default.createElement(_body2.default, { className: "manage-books" }), _react2.default.createElement("table", null, _react2.default.createElement("tbody", null, _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "ID"), _react2.default.createElement("td", null, "Name"), _react2.default.createElement("td", null, "Date created"), _react2.default.createElement("td", null, "Actions")), bookListNewest ? bookListNewest.map(function (book, index) {
	                return _react2.default.createElement("tr", { key: index }, _react2.default.createElement("td", null, book.id), _react2.default.createElement("td", null, book.title), _react2.default.createElement("td", null, book.dateCreated), _react2.default.createElement("td", null, _react2.default.createElement("a", { onClick: function onClick(e) {
	                        e.preventDefault();
	                        _apis2.default.deleteBook(book.id).then(function (res) {
	                            _this2.props.sendNotification('删除成功！');
	                            _this2.props.fetchBooks();
	                        });
	                        return false;
	                    }, href: "#" }, "Delete")));
	            }) : null)));
	        }
	    }], [{
	        key: 'fetchData',
	        value: function fetchData(_ref) {
	            var store = _ref.store;
	
	            return store.dispatch((0, _actions.fetchBooks)());
	        }
	    }]);
	
	    return ManageBooks;
	}(_react.Component);
	
	function mapStateToProps(state, ownProps) {
	    return {
	        bookListNewest: state.pagination.books.newest ? state.pagination.books.newest.ids.map(function (id) {
	            return state.entities.books[id];
	        }) : []
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchBooks: _actions.fetchBooks, sendNotification: _actions.sendNotification })(ManageBooks);

/***/ },
/* 98 */
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
	
	var ManageUsers = function (_Component) {
	    _inherits(ManageUsers, _Component);
	
	    function ManageUsers(props) {
	        _classCallCheck(this, ManageUsers);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ManageUsers).call(this, props));
	    }
	
	    _createClass(ManageUsers, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.fetchUserList();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var userListAll = this.props.userListAll ? this.props.userListAll : [];
	            return _react2.default.createElement("div", null, _react2.default.createElement("table", null, _react2.default.createElement("tbody", null, _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "ID"), _react2.default.createElement("td", null, "Name"), _react2.default.createElement("td", null, "Date created"), _react2.default.createElement("td", null, "Actions")), userListAll.map(function (user, index) {
	                return _react2.default.createElement("tr", { key: index }, _react2.default.createElement("td", null, user.id), _react2.default.createElement("td", null, user.username), _react2.default.createElement("td", null, user.dateCreated), _react2.default.createElement("td", null, _react2.default.createElement("a", { href: "#" }, "Delete")));
	            }))));
	        }
	    }]);
	
	    return ManageUsers;
	}(_react.Component);
	
	function mapStateToProps(state, ownProps) {
	    var type = 'all';
	    var userList = state.pagination.userList;
	    var users = state.entities.users;
	
	    var userListPagination = userList[type];
	    var userListAll = userListPagination ? userListPagination.ids.map(function (id) {
	        return users[id];
	    }) : [];
	    return {
	        userListAll: userListAll
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchUserList: _actions.fetchUserList })(ManageUsers);

/***/ },
/* 99 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var menus = [{
	    component: 'books',
	    displayName: '',
	    path: 'console/managebooks',
	    subMenu: [{
	        component: 'managebooks',
	        displayName: 'Manage Books',
	        path: 'console'
	    }, {
	        component: 'addbook',
	        displayName: 'Add Book',
	        path: 'console/addbook'
	    }, {
	        component: 'addcollection',
	        displayName: 'Add Collection',
	        path: 'console/collection/new'
	    }]
	}, {
	    component: 'users',
	    displayName: '',
	    path: 'console/manageusers',
	    subMenu: [{
	        component: 'manageusers',
	        displayName: 'Manage Users',
	        path: 'console/manageusers'
	    }]
	}, {
	    component: 'database',
	    displayName: '',
	    path: 'console/managebooks',
	    subMenu: []
	}, {
	    component: 'statistics',
	    displayName: '',
	    path: 'console/managebooks',
	    subMenu: []
	}];
	exports.default = menus;

/***/ },
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(163);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _view = __webpack_require__(43);
	
	var _view2 = _interopRequireDefault(_view);
	
	var _fade = __webpack_require__(38);
	
	var _fade2 = _interopRequireDefault(_fade);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Modal = function (_Component) {
	    _inherits(Modal, _Component);
	
	    function Modal(props) {
	        _classCallCheck(this, Modal);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, props));
	
	        _this.state = {
	            modalHeight: 0,
	            isModalHidden: false,
	            isModalVerticalCenter: true
	        };
	        _this.setView = _this.setView.bind(_this);
	        return _this;
	    }
	
	    _createClass(Modal, [{
	        key: 'hideModal',
	        value: function hideModal() {
	            this.props.onRequestClose();
	            _view2.default.unlockScroll();
	            window.removeEventListener('resize', this.setView);
	        }
	    }, {
	        key: 'setView',
	        value: function setView() {
	            var modalHeight = _reactDom2.default.findDOMNode(this.refs.modal).clientHeight;
	            var isModalVerticalCenter = true;
	            var documentHeight = document.body.clientHeight;
	            if (window.innerHeight < modalHeight) {
	                isModalVerticalCenter = false;
	            }
	            if (window.innerHeight > document.body.clientHeight) {
	                documentHeight = window.innerHeight;
	            }
	            this.setState({
	                modalHeight: modalHeight,
	                isModalVerticalCenter: isModalVerticalCenter,
	                documentHeight: documentHeight
	            });
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (prevProps.isVisible === false && this.props.isVisible === true) {
	                this.setView();
	                _view2.default.lockScroll();
	                window.addEventListener('resize', this.setView);
	            }
	        }
	    }, {
	        key: 'componentUnmount',
	        value: function componentUnmount() {
	            window.removeEventListener('resize', this.setView);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var defaultClass = 'modal';
	            var className = this.props.className ? defaultClass + ' ' + this.props.className : defaultClass;
	            var width = this.props.width ? this.props.width : 500;
	            var height = this.state.modalHeight;
	            var style = {
	                backdrop: {},
	                verticalCenter: {},
	                scroll: {},
	                modal: {}
	            };
	            var isVisible = this.props.isVisible ? this.props.isVisible : false;
	            // let onRequestClose = this.props.onRequestClose?this.props.onRequestClose:null
	            style.backdrop = {
	                position: 'fixed',
	                height: '100%',
	                width: '100%',
	                left: 0,
	                top: 0,
	                background: 'rgba(0, 0, 0, 0.86)',
	                zIndex: 9990,
	                overflow: 'scroll'
	            };
	            style.verticalCenter = {
	                width: width,
	                marginTop: -height / 2,
	                marginLeft: -width / 2,
	                position: 'absolute',
	                left: '50%',
	                top: '50%'
	            };
	            style.scroll = {
	                width: width,
	                margin: '50px auto'
	            };
	            style.modal = {
	                padding: '30px',
	                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.57)'
	            };
	            if (this.state.isModalVerticalCenter) {
	                style.modal = Object.assign({}, style.modal, style.verticalCenter);
	            } else {
	                style.modal = Object.assign({}, style.modal, style.scroll);
	            }
	            return _react2.default.createElement(_fade2.default, null, isVisible ? _react2.default.createElement("div", { onClick: this.hideModal.bind(this), className: "modal-backdrop", style: style.backdrop }, _react2.default.createElement("div", { style: style.modal, className: className, ref: "modal", onClick: function onClick(e) {
	                    e.stopPropagation();
	                } }, this.props.children)) : null);
	        }
	    }]);
	
	    return Modal;
	}(_react.Component);
	
	exports.default = Modal;

/***/ },
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	var _home = __webpack_require__(96);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _manageBooks = __webpack_require__(97);
	
	var _manageBooks2 = _interopRequireDefault(_manageBooks);
	
	var _manageUsers = __webpack_require__(98);
	
	var _manageUsers2 = _interopRequireDefault(_manageUsers);
	
	var _addBook = __webpack_require__(94);
	
	var _addBook2 = _interopRequireDefault(_addBook);
	
	var _addCollection = __webpack_require__(95);
	
	var _addCollection2 = _interopRequireDefault(_addCollection);
	
	var _noMatch = __webpack_require__(36);
	
	var _noMatch2 = _interopRequireDefault(_noMatch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createElement(_reactRouter.Router, null, _react2.default.createElement(_reactRouter.Route, { path: "/console", component: _home2.default }, _react2.default.createElement(_reactRouter.IndexRoute, { component: _manageBooks2.default }), _react2.default.createElement(_reactRouter.Route, { path: "managebooks", component: _manageBooks2.default }), _react2.default.createElement(_reactRouter.Route, { path: "manageusers", component: _manageUsers2.default }), _react2.default.createElement(_reactRouter.Route, { path: "addbook", component: _addBook2.default }), _react2.default.createElement(_reactRouter.Route, { path: "collection/new", component: _addCollection2.default })), _react2.default.createElement(_reactRouter.Route, { path: "*", component: _noMatch2.default }));

/***/ },
/* 118 */,
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetchDoubanBooks = fetchDoubanBooks;
	
	var _jsonp = __webpack_require__(122);
	
	var _jsonp2 = _interopRequireDefault(_jsonp);
	
	var _apiRoots = __webpack_require__(7);
	
	var _apiRoots2 = _interopRequireDefault(_apiRoots);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function fetchDoubanBooks(query) {
	    return (0, _jsonp2.default)(_apiRoots2.default.DOUBAN_BOOKS + '/search?count=5&q=' + query, {});
	}

/***/ },
/* 120 */,
/* 121 */,
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _handleResponseJson = __webpack_require__(14);
	
	var _handleResponseJson2 = _interopRequireDefault(_handleResponseJson);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function jsonp(fullUrl, config) {
	    if (fullUrl.indexOf('douban') !== -1) {
	        var _ret = function () {
	            var id = new Date().valueOf();
	            var jsonpId = 'jsonp-' + id;
	            var jsonpCallback = 'jsonpCallback' + id;
	            var jsonpCallbackData = '__JSONP_DATA_' + id + '__';
	            window[jsonpCallback] = function (data) {
	                window[jsonpCallbackData] = data;
	            };
	            var script = document.createElement('script');
	            script.setAttribute('src', fullUrl + '&callback=' + jsonpCallback);
	            script.setAttribute('id', jsonpId);
	            document.body.appendChild(script);
	            return {
	                v: new Promise(function (resolve) {
	                    script.onload = function () {
	                        document.body.removeChild(document.getElementById(jsonpId));
	                        var json = window[jsonpCallbackData];
	                        resolve((0, _handleResponseJson2.default)(json, config.schema));
	                    };
	                })
	            };
	        }();
	
	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }
	}
	exports.default = jsonp;

/***/ },
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDlmODhmNGIzMmQxNmU1MWNkYjM/NGYwYSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzNjNjIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIj9jYTY0Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYWN0aW9ucy9pbmRleC50cz9mZDhlIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiP2VlMTYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCI/MGM4YiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vaW5kZXgudHN4Pzg5YmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9hcGktY29uZmlnL2FwaS1yb290cy50cz81M2MwIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvc2lkZS1lZmZlY3RzL2JvZHkudHN4P2I2OTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9pY29uLnRzeD9mYjhmIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvbGF5b3V0L2NvbnRhaW5lci50c3g/NTc3NSIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL2NhbGwtYXBpLnRzPzQxNTYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9ybWFsaXpyXCI/YTQ2OSIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL2hhbmRsZS1yZXNwb25zZS1qc29uLnRzP2E2ODEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zY2hlbWFzL2luZGV4LnRzPzc3YWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC91dGlscy9hcGlzLnRzPzZkMTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC91dGlscy9wYXJzZS1mb3JtLWRhdGEudHM/YmQzZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodW1wc1wiPzZmY2YiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiPzlmNjciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2lucHV0LnRzeD9jODMxIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvZm9ybS90ZXh0YXJlYS50c3g/MDU3MSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXBcIj83YmYxIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYWN0aW9ucy9ib29rLnRzPzhmNmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9hY3Rpb25zL25vdGlmaWNhdGlvbi50cz9mMDljIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYWN0aW9ucy91c2VyLnRzPzkyZTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL25vLW1hdGNoLnRzeD84NzA3Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvYWxlcnQudHN4P2IyZDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9hbmltYXRpb25zL2ZhZGUudHN4P2VmNTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2J1dHRvbi9idXR0b24udHN4Pzg5OTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2J1dHRvbi9pbmRleC50c3g/MTBmMyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vc2VsZWN0aXplLWlucHV0LnRzeD8wZjlmIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvdmlldy50cz9lNzA1Iiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNpZGUtZWZmZWN0XCI/NTVmYyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3ItZWxlbWVudHMvci1pbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yLWVsZW1lbnRzL3ItdGV4dGFyZWEudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9jb25zb2xlLWJyYW5kaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvY29uc29sZS9hZGQtYm9vay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL2NvbnNvbGUvYWRkLWNvbGxlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9jb25zb2xlL2hvbWUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9jb25zb2xlL21hbmFnZS1ib29rcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL2NvbnNvbGUvbWFuYWdlLXVzZXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvY29uc29sZS9tZW51cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL01vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JvdXRlcy9jb25zb2xlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL2FwaXMtdGhpcmQtcGFydHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC91dGlscy9qc29ucC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBLG1DOzs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7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TyxPQUFPLGlCQUFQLENBQVAsQ0FGb0I7QUFHeEIsaUNBQVEsa0NBQW1CLElBQW5CLEVBQXlCLE9BQU8sTUFBUCxDQUFqQyxFQUh3QjtzQkFBWixDQURVO2tCQUFYO2NBQW5CO2FBWmtDOzs7TUFBdEM7RUFESjttQkFzQmUsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCZix1QyIsImZpbGUiOiJjb25zb2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAwOWY4OGY0YjMyZDE2ZTUxY2RiM1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3QtcmVkdXhcIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwiZXhwb3J0ICogZnJvbSAnLi4vYWN0aW9ucy9ib29rJztcbmV4cG9ydCAqIGZyb20gJy4uL2FjdGlvbnMvbm90aWZpY2F0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4uL2FjdGlvbnMvdXNlcic7XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVmFsdWUobmFtZSwgdmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnQ0hBTkdFX1ZBTFVFJyxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdmFsdWVcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQobmFtZSwgZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdVUERBVEVfRUxFTUVOVCcsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRhdGFcbiAgICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2FjdGlvbnMvaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0LXJvdXRlclwiXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImxvZGFzaFwiXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMlxuICoqLyIsImltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQnO1xuaW1wb3J0IFNlbGVjdGl6ZUlucHV0IGZyb20gJy4vc2VsZWN0aXplLWlucHV0JztcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL3RleHRhcmVhJztcbmV4cG9ydCB7IEJ1dHRvbiwgSW5wdXQsIFNlbGVjdGl6ZUlucHV0LCBUZXh0YXJlYSB9O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vaW5kZXgudHN4XG4gKiovIiwiY29uc3QgSE9TVCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LmxvY2F0aW9uLm9yaWdpbiA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xuY29uc3QgQXBpUm9vdHMgPSB7XG4gICAgTE9DQUw6IGAke0hPU1R9L2FwaS9gLFxuICAgIERPVUJBTl9CT09LUzogJ2h0dHBzOi8vYXBpLmRvdWJhbi5jb20vdjIvYm9vay8nXG59O1xuZXhwb3J0IGRlZmF1bHQgQXBpUm9vdHM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvYXBpLWNvbmZpZy9hcGktcm9vdHMudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTaWRlRWZmZWN0IGZyb20gJ3JlYWN0LXNpZGUtZWZmZWN0JztcbmNsYXNzIEJvZHkgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyZWFjdC1ib2R5LWNsYXNzIGhpZGRlblwifSk7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVkdWNlUHJvcHNUb1N0YXRlKHByb3BzTGlzdCkge1xuICAgIGxldCBjbGFzc05hbWU7XG4gICAgcHJvcHNMaXN0LmZvckVhY2goZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NOYW1lO1xufVxuZnVuY3Rpb24gaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudChjbGFzc05hbWUpIHtcbiAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCB3aXRoU2lkZUVmZmVjdChyZWR1Y2VQcm9wc1RvU3RhdGUsIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQpKEJvZHkpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3NpZGUtZWZmZWN0cy9ib2R5LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5jbGFzcyBJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG5hbWUgPSB0aGlzLnByb3BzLm5hbWU7XG4gICAgICAgIGxldCBtZXRob2QgPSB0aGlzLnByb3BzLm9uQ2xpY2s7XG4gICAgICAgIGxldCBzaXplID0gdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IGBpY29uIGljb24tJHtuYW1lfSAke3NpemV9YCwgb25DbGljazogbWV0aG9kfSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEljb247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvaWNvbi50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSAodGhpcy5wcm9wcy5pc0ZsdWlkID8gJ2NvbnRhaW5lci1mbHVpZCcgOiAnY29udGFpbmVyJykgKyAodGhpcy5wcm9wcy5jbGFzc05hbWUgPyBgICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YCA6ICcnKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0sIHRoaXMucHJvcHMuY2hpbGRyZW4pKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvbGF5b3V0L2NvbnRhaW5lci50c3hcbiAqKi8iLCJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IG9iamVjdFRvVXJsZW5jb2RlZCBmcm9tICcuLi91dGlscy9wYXJzZS1mb3JtLWRhdGEnO1xuaW1wb3J0IGhhbmRsZVJlc3BvbnNlSnNvbiBmcm9tICcuLi91dGlscy9oYW5kbGUtcmVzcG9uc2UtanNvbic7XG5jb25zdCBkZWZhdWx0Q29uZmlnID0ge1xuICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xufTtcbmV4cG9ydCBmdW5jdGlvbiBjYWxsQXBpKGZ1bGxVcmwsIGNvbmZpZyA9IHt9KSB7XG4gICAgLy8gcmV0dXJuIGZldGNoIGNvbmZpZ1xuICAgIGNvbnN0IHBhcnNlQ29uZmlnID0gKG9yaWdpbmFuQ29uZmlnKSA9PiB7XG4gICAgICAgIGxldCB7IG1ldGhvZCwgZGF0YSwgY3JlZGVudGlhbHMsIGRhdGFUeXBlIH0gPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0Q29uZmlnLCBvcmlnaW5hbkNvbmZpZyk7XG4gICAgICAgIGxldCBmZXRjaENvbmZpZyA9IHt9O1xuICAgICAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgICAgICBmZXRjaENvbmZpZy5tZXRob2QgPSBtZXRob2Q7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgICBmZXRjaENvbmZpZy5jcmVkZW50aWFscyA9IGNyZWRlbnRpYWxzO1xuICAgICAgICB9XG4gICAgICAgIC8vIGhhbmRsZSByZXF1ZXN0IGhlYWRlcnMgYW5kIGJvZHlcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgICAgICBsZXQgY29udGVudFR5cGU7XG4gICAgICAgICAgICBsZXQgYm9keTtcbiAgICAgICAgICAgIGlmIChkYXRhVHlwZSA9PT0gJ2pzb24nKSB7XG4gICAgICAgICAgICAgICAgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YVR5cGUgPT09ICd1cmxlbmNvZGVkJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG4gICAgICAgICAgICAgICAgYm9keSA9IG9iamVjdFRvVXJsZW5jb2RlZChkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSB1bnN1cHBvcnRlZCBkYXRhVHlwZVxuICAgICAgICAgICAgICAgIGRhdGFUeXBlID0gJ3VybGVuY29kZWQnO1xuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG4gICAgICAgICAgICAgICAgYm9keSA9IG9iamVjdFRvVXJsZW5jb2RlZChkYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1Vuc3VwcG9ydGVkIGRhdGFUeXBlIHVzZWQgXCJ1cmxlbmNvZGVkXCIgaW5zdGVhZCEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZldGNoQ29uZmlnLmhlYWRlcnMgPSB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IGNvbnRlbnRUeXBlLFxuICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1SZXF1ZXN0LU1ldGhvZCc6ICdQT1NUJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZldGNoQ29uZmlnLmJvZHkgPSBib2R5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgPT09ICdERUxFVEUnKSB7XG4gICAgICAgICAgICBmZXRjaENvbmZpZy5oZWFkZXJzID0ge1xuICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1SZXF1ZXN0LU1ldGhvZCc6ICdERUxFVEUnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaENvbmZpZztcbiAgICB9O1xuICAgIHJldHVybiBmZXRjaChmdWxsVXJsLCBwYXJzZUNvbmZpZyhjb25maWcpKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbihqc29uID0+ICh7IGpzb24sIHJlc3BvbnNlIH0pKTtcbiAgICB9KVxuICAgICAgICAudGhlbigoeyBqc29uLCByZXNwb25zZSB9KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVJlc3BvbnNlSnNvbihqc29uLCBjb25maWcuc2NoZW1hKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChqc29uKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgY2FsbEFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9jYWxsLWFwaS50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vcm1hbGl6clwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibm9ybWFsaXpyXCJcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMlxuICoqLyIsImltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gJ25vcm1hbGl6cic7XG5pbXBvcnQgaHVtcHMgZnJvbSAnaHVtcHMnO1xuZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2VKc29uKGpzb24sIHNjaGVtYSkge1xuICAgIGpzb24gPSBodW1wcy5jYW1lbGl6ZUtleXMoanNvbik7XG4gICAgbGV0IHJlc3VsdCA9IGpzb247XG4gICAgaWYgKHR5cGVvZiBzY2hlbWEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIG5vcm1hbGl6ZShqc29uLCBzY2hlbWEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZVJlc3BvbnNlSnNvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9oYW5kbGUtcmVzcG9uc2UtanNvbi50c1xuICoqLyIsImltcG9ydCB7IFNjaGVtYSwgYXJyYXlPZiB9IGZyb20gJ25vcm1hbGl6cic7XG5jb25zdCBib29rID0gbmV3IFNjaGVtYSgnYm9va3MnLCB7XG4gICAgaWRBdHRyaWJ1dGU6ICdpZCdcbn0pO1xuY29uc3QgY29sbGVjdGlvbiA9IG5ldyBTY2hlbWEoJ2Jvb2tDb2xsZWN0aW9ucycsIHtcbiAgICBpZEF0dHJpYnV0ZTogJ2lkJ1xufSk7XG5jb25zdCBwcm9maWxlID0gbmV3IFNjaGVtYSgncHJvZmlsZXMnLCB7XG4gICAgaWRBdHRyaWJ1dGU6ICdpZCdcbn0pO1xuY29uc3QgdXNlciA9IG5ldyBTY2hlbWEoJ3VzZXJzJywge1xuICAgIGlkQXR0cmlidXRlOiAnaWQnXG59KTtcbmNvbnN0IGRvdWJhbkJvb2sgPSBuZXcgU2NoZW1hKCdkb3ViYW5Cb29rcycsIHtcbiAgICBpZEF0dHJpYnV0ZTogJ2lkJ1xufSk7XG5jb25zdCBib29rUHJvZ3Jlc3MgPSBuZXcgU2NoZW1hKCdib29rcycsIHtcbiAgICBpZEF0dHJpYnV0ZTogJ2Jvb2tJZCdcbn0pO1xuY29uc3QgbWF0Y2hlZEJvb2tzID0gbmV3IFNjaGVtYSgnYm9va3MnLCB7XG4gICAgaWRBdHRyaWJ1dGU6ICdib29rSWQnXG59KTtcbmV4cG9ydCBjb25zdCBTY2hlbWFzID0ge1xuICAgIEJPT0s6IGJvb2ssXG4gICAgQk9PS19QUk9HUkVTUzogYm9va1Byb2dyZXNzLFxuICAgIEJPT0tfQVJSQVk6IGFycmF5T2YoYm9vayksXG4gICAgRE9VQkFOX0JPT0tfU0VBUkNIX1JFU1VMVFM6IHsgYm9va3M6IGFycmF5T2YoZG91YmFuQm9vaykgfSxcbiAgICBVU0VSX0FSUkFZOiBhcnJheU9mKHVzZXIpLFxuICAgIE1BVENIRURfQk9PS19BUlJBWTogYXJyYXlPZihtYXRjaGVkQm9va3MpLFxuICAgIENPTExFQ1RJT046IGNvbGxlY3Rpb24sXG4gICAgQ09MTEVDVElPTl9BUlJBWTogYXJyYXlPZihjb2xsZWN0aW9uKSxcbiAgICBQUk9GSUxFOiBwcm9maWxlXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3NjaGVtYXMvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgY2FsbEFwaSBmcm9tICcuL2NhbGwtYXBpJztcbmltcG9ydCBBcGlSb290cyBmcm9tICcuLi9hcGktY29uZmlnL2FwaS1yb290cyc7XG5leHBvcnQgZnVuY3Rpb24gYWRkQ29sbGVjdGlvbihkYXRhKSB7XG4gICAgcmV0dXJuIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9Y29sbGVjdGlvbnNgLCB7IG1ldGhvZDogJ1BPU1QnLCBkYXRhOiBkYXRhIH0pO1xufVxuLyoqXG4gKiBkYXRhOiBuYW1lLCBhdXRob3IsIGRlc2NyaXB0aW9uLCBjb3ZlciwgY29udGVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQm9vayhkYXRhKSB7XG4gICAgcmV0dXJuIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9Ym9va3NgLCB7IG1ldGhvZDogJ1BPU1QnLCBkYXRhOiBkYXRhIH0pO1xufVxuLyoqXG4gKiBkYXRhOiBuYW1lLCBzbHVnLCBkZXNjcmlwdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQXV0aG9yKGRhdGEpIHtcbiAgICByZXR1cm4gY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1hdXRob3JzYCwgeyBtZXRob2Q6ICdQT1NUJywgZGF0YTogZGF0YSB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hBdXRob3JzKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9YXV0aG9ycz9xPSR7cXVlcnl9YCk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQm9va3MocXVlcnkpIHtcbiAgICByZXR1cm4gY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1ib29rcz9xPSR7cXVlcnl9YCk7XG59XG4vKipcbiAqIGRhdGE6IHBhZ2VObywgcGFnZVN1bSwgcGVyY2VudGFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvZ3Jlc3MoYm9va0lkLCBkYXRhKSB7XG4gICAgY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1ib29rcy8ke2Jvb2tJZH0vcHJvZ3Jlc3NgLCB7IG1ldGhvZDogJ1BPU1QnLCBkYXRhIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUJvb2soaWQpIHtcbiAgICByZXR1cm4gY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1ib29rcy8ke2lkfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xuICAgIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGFkZENvbGxlY3Rpb24sXG4gICAgYWRkQm9vayxcbiAgICBhZGRBdXRob3IsXG4gICAgc2VhcmNoQm9va3MsXG4gICAgc2VhcmNoQXV0aG9ycyxcbiAgICBzZXRQcm9ncmVzcyxcbiAgICBkZWxldGVCb29rXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3V0aWxzL2FwaXMudHNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb2JqZWN0VG9VcmxlbmNvZGVkKG9yaWdpbmFsT2JqKSB7XG4gICAgbGV0IG9iamVjdCA9IF8uY2xvbmVEZWVwKG9yaWdpbmFsT2JqKTtcbiAgICBsZXQgZW5jb2RlZHVybCA9ICcnO1xuICAgIGZvciAobGV0IHByb3AgaW4gb2JqZWN0KSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0W3Byb3BdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgb2JqZWN0W3Byb3BdID0gb2JqZWN0W3Byb3BdLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZW5jb2RlZHVybCA9IGAke2VuY29kZWR1cmx9JHtwcm9wfT0ke29iamVjdFtwcm9wXX0mYDtcbiAgICB9XG4gICAgcmV0dXJuIGVuY29kZWR1cmwuc3Vic3RyKDAsIGVuY29kZWR1cmwubGVuZ3RoIC0gMSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvdXRpbHMvcGFyc2UtZm9ybS1kYXRhLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHVtcHNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImh1bXBzXCJcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMlxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImlzb21vcnBoaWMtZmV0Y2hcIlxuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMSAyXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmNsYXNzIElucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lID8gYGlucHV0LXdyYXAgJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gIDogJ2lucHV0LXdyYXAnO1xuICAgICAgICBsZXQgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKTtcbiAgICAgICAgZGVsZXRlIHByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7cGxhY2Vob2xkZXI6IHRoaXMucHJvcHMucGxhY2Vob2xkZXIsIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlLCBvbkNoYW5nZTogZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpO1xuICAgICAgICB9LCB0eXBlOiB0aGlzLnByb3BzLnR5cGUgPyB0aGlzLnByb3BzLnR5cGUgOiAndGV4dCcsIG5hbWU6IHRoaXMucHJvcHMubmFtZSA/IHRoaXMucHJvcHMubmFtZSA6IG51bGx9KSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vaW5wdXQudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmNsYXNzIFRleHRhcmVhIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lID8gYHRleHRhcmVhLXdyYXAgJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gIDogJ3RleHRhcmVhLXdyYXAnO1xuICAgICAgICBsZXQgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKTtcbiAgICAgICAgZGVsZXRlIHByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCB7cGxhY2Vob2xkZXI6IHRoaXMucHJvcHMucGxhY2Vob2xkZXIsIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlLCBvbkNoYW5nZTogZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpO1xuICAgICAgICB9LCB0eXBlOiB0aGlzLnByb3BzLnR5cGUgPyB0aGlzLnByb3BzLnR5cGUgOiAndGV4dCcsIG5hbWU6IHRoaXMucHJvcHMubmFtZSA/IHRoaXMucHJvcHMubmFtZSA6IG51bGx9KSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vdGV4dGFyZWEudHN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXBcIlxuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsImltcG9ydCB7IFNjaGVtYXMgfSBmcm9tICcuLi9zY2hlbWFzJztcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEJvb2tQcm9ncmVzcyhib29rSWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBib29rSWQsXG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydCT09LX1BST0dSRVNTX1JFUVVFU1QnLCAnQk9PS19QUk9HUkVTU19TVUNDRVNTJywgJ0JPT0tfUFJPR1JFU1NfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGBib29rcy8ke2Jvb2tJZH0vcHJvZ3Jlc3NgLFxuICAgICAgICAgICAgc2NoZW1hOiBTY2hlbWFzLkJPT0tfUFJPR1JFU1NcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hCb29rcyhmbG93VHlwZSA9ICduZXdlc3QnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gZm9yIHBhZ2luYXRlXG4gICAgICAgIGZsb3dUeXBlLFxuICAgICAgICBDQUxMX0FQSToge1xuICAgICAgICAgICAgdHlwZXM6IFsnQk9PS1NfUkVRVUVTVCcsICdCT09LU19TVUNDRVNTJywgJ0JPT0tTX0ZBSUxVUkUnXSxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgYm9va3M/ZXhjbHVkZT1jb250ZW50YCxcbiAgICAgICAgICAgIHNjaGVtYTogU2NoZW1hcy5CT09LX0FSUkFZLFxuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEJvb2soYm9va0lkLCBmaWVsZHMpIHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgYm9va3MvJHtib29rSWR9YDtcbiAgICBpZiAoZmllbGRzKSB7XG4gICAgICAgIGVuZHBvaW50ICs9IGA/ZmllbGRzPSR7ZmllbGRzLmpvaW4oJywnKX1gO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBib29rSWQsXG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydCT09LX1JFUVVFU1QnLCAnQk9PS19TVUNDRVNTJywgJ0JPT0tfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQsXG4gICAgICAgICAgICBzY2hlbWE6IFNjaGVtYXMuQk9PS1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENvbGxlY3Rpb25zKGZsb3dUeXBlID0gJ25ld2VzdCcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBmbG93VHlwZSxcbiAgICAgICAgQ0FMTF9BUEk6IHtcbiAgICAgICAgICAgIHR5cGVzOiBbJ0NPTExFQ1RJT05TX1JFUVVFU1QnLCAnQ09MTEVDVElPTlNfU1VDQ0VTUycsICdDT0xMRUNUSU9OU19GQUlMVVJFJ10sXG4gICAgICAgICAgICBlbmRwb2ludDogYGNvbGxlY3Rpb25zYCxcbiAgICAgICAgICAgIHNjaGVtYTogU2NoZW1hcy5DT0xMRUNUSU9OX0FSUkFZXG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQ29sbGVjdGlvbihjb2xsZWN0aW9uSWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb2xsZWN0aW9uSWQsXG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydDT0xMRUNUSU9OX1JFUVVFU1QnLCAnQ09MTEVDVElPTl9TVUNDRVNTJywgJ0NPTExFQ1RJT05fRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGBjb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb25JZH1gLFxuICAgICAgICAgICAgc2NoZW1hOiBTY2hlbWFzLkNPTExFQ1RJT05cbiAgICAgICAgfVxuICAgIH07XG59XG4vLyBleHBvcnQgZnVuY3Rpb24gZmV0Y2hCb29rQ29udGVudChib29rSWQpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBib29rSWQsXG4vLyAgICAgQ0FMTF9BUEk6IHtcbi8vICAgICAgIHR5cGVzOiBbJ0JPT0tfQ09OVEVOVF9SRVFVRVNUJywgJ0JPT0tfQ09OVEVOVF9TVUNDRVNTJywgJ0JPT0tfQ09OVEVOVF9GQUlMVVJFJ10sXG4vLyAgICAgICBlbmRwb2ludDogYGJvb2tzLyR7Ym9va0lkfS9jb250ZW50YCxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5CT09LXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG4vL1xuLy8gZXhwb3J0IGZ1bmN0aW9uIGZldGNoQm9va0luZm8oYm9va0lkKSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgYm9va0lkLFxuLy8gICAgIENBTExfQVBJOntcbi8vICAgICAgIHR5cGVzOiBbJ0JPT0tfSU5GT19SRVFVRVNUJywgJ0JPT0tfSU5GT19TVUNDRVNTJywgJ0JPT0tfSU5GT19GQUlMVVJFJ10sXG4vLyAgICAgICBlbmRwb2ludDogYGJvb2tzLyR7Ym9va0lkfWAsXG4vLyAgICAgICBzY2hlbWE6IFNjaGVtYXMuQk9PS19BUlJBWVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuLy8gZXhwb3J0IGZ1bmN0aW9uIGZldGNoRG91YmFuQm9va1NlYXJjaFJlc3VsdHMocXVlcnkpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBxdWVyeSxcbi8vICAgICBDQUxMX0FQSToge1xuLy8gICAgICAgdHlwZXM6IFsnRE9VQkFOX0JPT0tfU0VBUkNIX1JFUVVFU1QnLCAnRE9VQkFOX0JPT0tfU0VBUkNIX1NVQ0NFU1MnLCAnRE9VQkFOX0JPT0tfU0VBUkNIX0ZBSUxVUkUnXSxcbi8vICAgICAgIGVuZHBvaW50OiBgc2VhcmNoP2NvdW50PTUmcT0ke3F1ZXJ5fWAsXG4vLyAgICAgICBhcGlVcmw6IEFwaVJvb3RzLkRPVUJBTl9CT09LUyxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5ET1VCQU5fQk9PS19TRUFSQ0hfUkVTVUxUUyxcbi8vICAgICAgIGV4dGVuZGVkT3B0aW9uczogeyB1c2VKc29ucDogdHJ1ZSB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG4vLyBleHBvcnQgZnVuY3Rpb24gc2VhcmNoQm9va3MocXVlcnkpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBxdWVyeSxcbi8vICAgICBDQUxMX0FQSToge1xuLy8gICAgICAgdHlwZXM6IFsnQk9PS19TRUFSQ0hfUkVRVUVTVCcsICdCT09LX1NFQVJDSF9TVUNDRVNTJywgJ0JPT0tfU0VBUkNIX0ZBSUxVUkUnXSxcbi8vICAgICAgIGVuZHBvaW50OiBgc2VhcmNoP3E9JHtxdWVyeX1gLFxuLy8gICAgICAgYXBpVXJsOiBBcGlSb290cy5MT0NBTCxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5NQVRDSEVEX0JPT0tfQVJSQVlcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9hY3Rpb25zL2Jvb2sudHNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gc2VuZE5vdGlmaWNhdGlvbihtZXNzYWdlLCBtc2dUeXBlID0gJ3N1Y2Nlc3MnLCB0ID0gNTAwMCkge1xuICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gTWF0aC5yYW5kb20oKS50b0ZpeGVkKDgpLnN1YnN0cigyKTtcbiAgICAgICAgZGlzcGF0Y2goc2hvd05vdGlmaWNhdGlvbihpZCwgbWVzc2FnZSwgbXNnVHlwZSkpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGhpZGVOb3RpZmljYXRpb24oaWQpKTtcbiAgICAgICAgfSwgdCk7XG4gICAgfTtcbn1cbmV4cG9ydCBjb25zdCBTSE9XX05PVElGSUNBVElPTiA9ICdTSE9XX05PVElGSUNBVElPTic7XG5leHBvcnQgZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbihpZCwgbWVzc2FnZSwgbXNnVHlwZSA9ICdzdWNjZXNzJykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFNIT1dfTk9USUZJQ0FUSU9OLFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICBtc2dUeXBlLFxuICAgICAgICBpZFxuICAgIH07XG59XG5leHBvcnQgY29uc3QgSElERV9OT1RJRklDQVRJT04gPSAnSElERV9OT1RJRklDQVRJT04nO1xuZXhwb3J0IGZ1bmN0aW9uIGhpZGVOb3RpZmljYXRpb24oaWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBISURFX05PVElGSUNBVElPTixcbiAgICAgICAgaWRcbiAgICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2FjdGlvbnMvbm90aWZpY2F0aW9uLnRzXG4gKiovIiwiaW1wb3J0IHsgU2NoZW1hcyB9IGZyb20gJy4uL3NjaGVtYXMvaW5kZXgnO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZXJBdXRoKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydVU0VSX0FVVEhfUkVRVUVTVCcsICdVU0VSX0FVVEhfU1VDQ0VTUycsICdVU0VSX0FVVEhfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6ICdhdXRoJ1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFByb2ZpbGUoaWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBDQUxMX0FQSToge1xuICAgICAgICAgICAgdHlwZXM6IFsnUFJPRklMRV9SRVFVRVNUJywgJ1BST0ZJTEVfU1VDQ0VTUycsICdQUk9GSUxFX0ZBSUxVUkUnXSxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgdXNlcnMvJHtpZH0vcHJvZmlsZWAsXG4gICAgICAgICAgICBzY2hlbWE6IFNjaGVtYXMuUFJPRklMRVxuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFVzZXJMaXN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydVU0VSX0xJU1RfUkVRVUVTVCcsICdVU0VSX0xJU1RfU1VDQ0VTUycsICdVU0VSX0xJU1RfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6ICd1c2VycycsXG4gICAgICAgICAgICBzY2hlbWE6IFNjaGVtYXMuVVNFUl9BUlJBWVxuICAgICAgICB9XG4gICAgfTtcbn1cbi8vIGV4cG9ydCBmdW5jdGlvbiBmZXRjaFNoZWxmKHVzZXJJZCkge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHVzZXJJZCxcbi8vICAgICBDQUxMX0FQSToge1xuLy8gICAgICAgdHlwZXM6IFsnU0hFTEZfUkVRVUVTVCcsICdTSEVMRl9TVUNDRVNTJywgJ1NIRUxGX0ZBSUxVUkUnXSxcbi8vICAgICAgIGVuZHBvaW50OiBgdXNlcnMvJHt1c2VySWR9L3NoZWxmYCxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5CT09LX0FSUkFZLFxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoU2hlbGYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF5bG9hZDogJ2Jvb2tTaGVsZicsXG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydTSEVMRl9SRVFVRVNUJywgJ1NIRUxGX1NVQ0NFU1MnLCAnU0hFTEZfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGB1c2VyL2Jvb2tzL3NoZWxmYCxcbiAgICAgICAgfVxuICAgIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvYWN0aW9ucy91c2VyLnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmNsYXNzIE5vTWF0Y2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgXCI0MDRcIikpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE5vTWF0Y2g7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9uby1tYXRjaC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vZWxlbWVudHMvaWNvbic7XG5jbGFzcyBOb3RpZmljYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMucHJvcHMudHlwZSA/IHRoaXMucHJvcHMudHlwZSA6ICdzdWNjZXNzJztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIHRoaXMucHJvcHMudmlzaWJsZSAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBgbm90aWZpY2F0aW9uIG5vdGlmaWNhdGlvbi0tJHt0eXBlfSB6MWAudHJpbSgpfSwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7b25DbGljazogdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZSwgbmFtZTogXCJjbG9zZVwifSksIHRoaXMucHJvcHMubWVzc2FnZSkpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2FsZXJ0LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJztcbmNsYXNzIEZhZGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWU/dGhpcy5wcm9wcy5jbGFzc05hbWU6bnVsbFxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAsIHtjb21wb25lbnQ6IFwiZGl2XCIsIHRyYW5zaXRpb25OYW1lOiBcImZhZGVcIiwgdHJhbnNpdGlvbkVudGVyVGltZW91dDogMzAwLCB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0OiAzMDB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRmFkZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9hbmltYXRpb25zL2ZhZGUudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZSA/IGBidG4gJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gIDogJ2J0bic7XG4gICAgICAgIGxldCBzaXplID0gdGhpcy5wcm9wcy5zaXplID8gdGhpcy5wcm9wcy5zaXplIDogJ21lZGl1bSc7XG4gICAgICAgIGxldCBpc0ZsdWlkID0gdGhpcy5wcm9wcy5pc0ZsdWlkID8gdGhpcy5wcm9wcy5pc0ZsdWlkIDogZmFsc2U7XG4gICAgICAgIGxldCBjb2xvciA9IHRoaXMucHJvcHMuY29sb3IgPyB0aGlzLnByb3BzLmNvbG9yIDogbnVsbDtcbiAgICAgICAgbGV0IG9uQ2xpY2s7XG4gICAgICAgIGlmIChzaXplID09PSAnc21hbGwnKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBidG4tc21hbGwnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNpemUgPT09ICdsYXJnZScpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIGJ0bi1sYXJnZSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2l6ZSA9PT0gJ21lZGl1bScpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIGJ0bi1tZWRpdW0nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5zdXBwb3J0IHNpemUhJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gYCBidG4tJHtjb2xvcn1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0ZsdWlkKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9IGJ0bi1mbHVpZGA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMudG8pIHtcbiAgICAgICAgICAgIG9uQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCh0aGlzLnByb3BzLnRvKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvbkNsaWNrID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWUgfSwgeyBvbkNsaWNrIH0pO1xuICAgICAgICBkZWxldGUgcHJvcHMudG87XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5jb2xvcjtcbiAgICAgICAgZGVsZXRlIHByb3BzLnNpemU7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5pc0ZsdWlkO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHByb3BzLCB0aGlzLnByb3BzLmNoaWxkcmVuKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vYnV0dG9uL2J1dHRvbi50c3hcbiAqKi8iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2J1dHRvbi9pbmRleC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vaWNvbic7XG5jbGFzcyBTZWxlY3RpemVJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvd09wdGlvbnM6IGZhbHNlLFxuICAgICAgICAgICAgZm9jdXM6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgZXhwZW5kZWRPcHRpb25JbmRleDogMFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhpZGVPcHRpb25zID0gdGhpcy5oaWRlT3B0aW9ucy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZvY3VzSW5wdXQgPSB0aGlzLmZvY3VzSW5wdXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaG93T3B0aW9ucyA9IHRoaXMuc2hvd09wdGlvbnMuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgYWRkVmFsdWUobmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblZhbHVlc0NoYW5nZSh0aGlzLnByb3BzLnZhbHVlcy5jb25jYXQobmV3VmFsdWUpKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSh0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiAob3B0aW9uLnZhbHVlID09PSBuZXdWYWx1ZS52YWx1ZVxuICAgICAgICAgICAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9uLCB7IGRpc2FibGVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgOiBvcHRpb24pKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGVhcklucHV0VmFsdWUoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnN0YXlGb2N1c2VkID09PSAndW5kZWZpbmVkJyB8fCB0aGlzLnByb3BzLnN0YXlGb2N1c2VkICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oaWRlT3B0aW9ucygpO1xuICAgIH1cbiAgICByZW1vdmVWYWx1ZShpbmRleCkge1xuICAgICAgICBsZXQgbmV3VmFsdWVzID0gW107XG4gICAgICAgIGxldCByZW1vdmVkVmFsdWU7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlcyA9IHRoaXMucHJvcHMudmFsdWVzLnNsaWNlKDAsIHRoaXMucHJvcHMudmFsdWVzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgcmVtb3ZlZFZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZXNbdGhpcy5wcm9wcy52YWx1ZXMubGVuZ3RoIC0gMV0udmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXdWYWx1ZXMgPSB0aGlzLnByb3BzLnZhbHVlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZW1vdmVkVmFsdWUgPSB2LnZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBpICE9PSBpbmRleDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UodGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHRpb24gPT4gKG9wdGlvbi52YWx1ZSA9PT0gcmVtb3ZlZFZhbHVlXG4gICAgICAgICAgICAgICAgPyBPYmplY3QuYXNzaWduKHt9LCBvcHRpb24sIHsgZGlzYWJsZWQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgOiBvcHRpb24pKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5vblZhbHVlc0NoYW5nZShuZXdWYWx1ZXMpO1xuICAgIH1cbiAgICBjbGVhcklucHV0VmFsdWUoKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25JbnB1dENoYW5nZSgnJyk7XG4gICAgfVxuICAgIGhhbmRsZUtleVByZXNzKGUpIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gOCAmJiAhdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZSgtMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdG9kb1xuICAgICAgICAvLyBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiB0aGlzLnN0YXRlLnNob3dPcHRpb25zKSB7XG4gICAgICAgIC8vICAgdGhpcy5hZGRWYWx1ZSgpXG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgZm9jdXNJbnB1dCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgIH1cbiAgICBoaWRlT3B0aW9ucygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93T3B0aW9uczogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNob3dPcHRpb25zKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93T3B0aW9uczogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZU9wdGlvbnMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZU9wdGlvbnMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IHRoaXMucHJvcHMubGFiZWwgPyB0aGlzLnByb3BzLmxhYmVsIDogbnVsbDtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZSA/IHRoaXMucHJvcHMudmFsdWUgOiAnJztcbiAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMucHJvcHMudmFsdWVzO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9ucyA/IHRoaXMucHJvcHMub3B0aW9ucyA6IFtdO1xuICAgICAgICBsZXQgaW5wdXRXaWR0aCA9IHZhbHVlcy5sZW5ndGggPiAwID8gKHZhbHVlLmxlbmd0aCA9PT0gMCA/IDE2IDogdmFsdWUubGVuZ3RoICogMTYpIDogJzEwMCUnO1xuICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSB2YWx1ZXMubGVuZ3RoID4gMCA/ICcnIDogdGhpcy5wcm9wcy5wbGFjZWhvbGRlcjtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICdzZWxlY3RpemUtaW5wdXQnICsgKHRoaXMuc3RhdGUuZm9jdXMgPT09IHRydWUgPyAnIGZvY3VzJyA6ICcnKSArICh2YWx1ZXMubGVuZ3RoID09PSAwID8gJyBlbXB0eScgOiAnJyk7XG4gICAgICAgIGxldCBhZGROZXdWYWx1ZSA9IHRoaXMucHJvcHMuYWRkTmV3VmFsdWUgPyB0aGlzLnByb3BzLmFkZE5ld1ZhbHVlIDogdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogYHNlbGVjdGl6ZS1pbnB1dC13cmFwICR7dGhpcy5wcm9wcy5jbGFzc05hbWUgPyB0aGlzLnByb3BzLmNsYXNzTmFtZSA6ICcnfWAudHJpbSgpfSwgbGFiZWwgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHtjbGFzc05hbWU6IFwiZm9ybS1sYWJlbFwifSwgbGFiZWwpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogY2xhc3NOYW1lLCBvbkNsaWNrOiBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgICAgICAgdGhpcy5zaG93T3B0aW9ucyhlKTtcbiAgICAgICAgfX0sIHZhbHVlcy5tYXAoKHYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtrZXk6IGluZGV4LCBjbGFzc05hbWU6IFwic2VsZWN0aXplLXRhZ1wifSwgdi5uYW1lLCBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHtzaXplOiAnc21hbGwnLCBuYW1lOiBcImNsb3NlXCIsIG9uQ2xpY2s6IGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWUoaW5kZXgpO1xuICAgICAgICAgICAgfX0pKSk7XG4gICAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3N0eWxlOiB7IHdpZHRoOiBpbnB1dFdpZHRoIH0sIHJlZjogcmVmID0+IHsgdGhpcy5pbnB1dCA9IHJlZjsgfSwgdmFsdWU6IHZhbHVlLCBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsIG9uQmx1cjogZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IGZhbHNlIH0pO1xuICAgICAgICB9LCBvbkZvY3VzOiBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1czogdHJ1ZSB9KTtcbiAgICAgICAgfSwgb25DaGFuZ2U6IGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfSwgb25LZXlEb3duOiBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlS2V5UHJlc3MoZSk7XG4gICAgICAgIH19KSksICh0aGlzLnN0YXRlLnNob3dPcHRpb25zKSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJzZWxlY3RpemUtcXVlcnktcmVzdWx0c1wifSwgb3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtrZXk6IGluZGV4LCBjbGFzc05hbWU6IFwiZGlzYWJsZWRcIn0sIG9wdGlvbi5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtrZXk6IGluZGV4LCBvbkNsaWNrOiBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFZhbHVlKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25PcHRpb25DbGljaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uT3B0aW9uQ2xpY2sob3B0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgb3B0aW9uLm5hbWUpKSk7XG4gICAgICAgIH0pLCBhZGROZXdWYWx1ZSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge29uQ2xpY2s6IGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFkZE5ld1ZhbHVlKHRoaXMucHJvcHMudmFsdWUpO1xuICAgICAgICB9LCBjbGFzc05hbWU6IFwiYWRkXCJ9LCBcIua3u+WKoCBcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCB0aGlzLnByb3BzLnZhbHVlKSkpIDogbnVsbCkpIDogbnVsbCkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGl6ZUlucHV0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vc2VsZWN0aXplLWlucHV0LnRzeFxuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBnZXRCb29rVmlldygpIHtcbiAgICBsZXQgYXNwZWN0UmF0aW8gPSA3IC8gOTtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNTQwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JlZW46ICdwaG9uZScsXG4gICAgICAgICAgICBwYWdlV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgICAgcGFnZUhlaWdodDogd2luZG93LmlubmVyV2lkdGggLyBhc3BlY3RSYXRpb1xuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmVlbjogJ2hkJyxcbiAgICAgICAgICAgIHBhZ2VXaWR0aDogNzAwLFxuICAgICAgICAgICAgcGFnZUhlaWdodDogNzAwIC8gYXNwZWN0UmF0aW9cbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbG9ja1Njcm9sbCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG59XG5leHBvcnQgZnVuY3Rpb24gdW5sb2NrU2Nyb2xsKCkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG59XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0Qm9va1ZpZXcsXG4gICAgbG9ja1Njcm9sbCxcbiAgICB1bmxvY2tTY3JvbGxcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvdXRpbHMvdmlldy50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNpZGUtZWZmZWN0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdC1zaWRlLWVmZmVjdFwiXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vZWxlbWVudHMvZm9ybS9pbnB1dCc7XG5pbXBvcnQgeyBjaGFuZ2VWYWx1ZSB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmNsYXNzIFJJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwge25hbWU6IHRoaXMucHJvcHMubmFtZSwgdmFsdWU6IF8uZ2V0KHRoaXMucHJvcHMuZWxlbWVudHNbdGhpcy5wcm9wcy5zeW1ib2xdLCAndmFsdWUnLCAnJyksIHBsYWNlaG9sZGVyOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyLCBvbkNoYW5nZTogZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZSh0aGlzLnByb3BzLnN5bWJvbCwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfX0pKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+ICh7XG4gICAgZWxlbWVudHM6IHN0YXRlLmVsZW1lbnRzXG59KSwgeyBjaGFuZ2VWYWx1ZSB9KShSSW5wdXQpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3ItZWxlbWVudHMvci1pbnB1dC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuLi9lbGVtZW50cy9mb3JtL3RleHRhcmVhJztcbmltcG9ydCB7IGNoYW5nZVZhbHVlIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5jbGFzcyBSVGV4dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dGFyZWEsIHt2YWx1ZTogXy5nZXQodGhpcy5wcm9wcy5lbGVtZW50c1t0aGlzLnByb3BzLnN5bWJvbF0sICd2YWx1ZScsICcnKSwgcGxhY2Vob2xkZXI6IHRoaXMucHJvcHMucGxhY2Vob2xkZXIsIG9uQ2hhbmdlOiBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHRoaXMucHJvcHMuc3ltYm9sLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmV3VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9fSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgICBlbGVtZW50czogc3RhdGUuZWxlbWVudHNcbn0pLCB7IGNoYW5nZVZhbHVlIH0pKFJUZXh0YXJlYSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvci1lbGVtZW50cy9yLXRleHRhcmVhLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vZWxlbWVudHMvbGF5b3V0L2NvbnRhaW5lcic7XG5jbGFzcyBDb25zb2xlQnJhbmRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzRHJvcGRvd25NZW51VmlzaWJsZTogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9nZ2xlRHJvcGRvd25NZW51KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzRHJvcGRvd25NZW51VmlzaWJsZTogIXRoaXMuc3RhdGUuaXNEcm9wZG93bk1lbnVWaXNpYmxlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB1c2VybmFtZSA9IHRoaXMucHJvcHMudXNlcm5hbWU7XG4gICAgICAgIGxldCBpc0FkbWluID0gdGhpcy5wcm9wcy5pc0FkbWluID8gdGhpcy5wcm9wcy5pc0FkbWluIDogJ2ZhbHNlJztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYnJhbmRpbmcgY29uc29sZS1icmFuZGluZ1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIHtpc0ZsdWlkOiB0cnVlLCBjbGFzc05hbWU6IFwiY2xlYXJmaXhcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHtjbGFzc05hbWU6IFwibG9nbyBsZWZ0XCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvY29uc29sZVwifSwgXCJyZWFkclwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJzZXBcIn0sIFwifFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJzdWJcIn0sIFwiQ29uc29sZVwiKSksIHVzZXJuYW1lID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge29uTW91c2VMZWF2ZTogdGhpcy50b2dnbGVEcm9wZG93bk1lbnUuYmluZCh0aGlzKSwgb25Nb3VzZUVudGVyOiB0aGlzLnRvZ2dsZURyb3Bkb3duTWVudS5iaW5kKHRoaXMpLCBjbGFzc05hbWU6IFwibmF2IHJpZ2h0XCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcInVzZXJuYW1lXCJ9LCB1c2VybmFtZSwgaXNBZG1pbiA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcImJhZGdlLWRhcmtcIn0sIFwiQWRtaW5cIikpIDogbnVsbCksIHRoaXMuc3RhdGUuaXNEcm9wZG93bk1lbnVWaXNpYmxlID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcImRyb3Bkb3duLW1lbnVcIn0sIGlzQWRtaW4gPT09IHRydWUgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcIi9cIn0sIFwiQmFjayB0byByZWFkclwiKSkpIDogbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBgL3Byb2ZpbGUvJHt1c2VybmFtZX1gfSwgXCLmiJHnmoTotKblj7dcIikpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6ICcvbG9nb3V0J30sIFwi6YCA5Ye6XCIpKSkpIDogbnVsbCkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJuYXYgcmlnaHRcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcIm5hdi1saW5rc1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcIi9zaWduaW5cIn0sIFwi55m75b2VXCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcIi9zaWdudXBcIn0sIFwi5rOo5YaMXCIpKSkpKSkpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29uc29sZUJyYW5kaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvY29uc29sZS1icmFuZGluZy50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24sIGNoYW5nZVZhbHVlIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBCdXR0b24sIFNlbGVjdGl6ZUlucHV0IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvZm9ybSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vLi4vZWxlbWVudHMvTW9kYWwnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBhcGlzIGZyb20gJy4uLy4uL3V0aWxzL2FwaXMnO1xuaW1wb3J0IHsgZmV0Y2hEb3ViYW5Cb29rcyB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaXMtdGhpcmQtcGFydHknO1xuaW1wb3J0IFJJbnB1dCBmcm9tICcuLi8uLi9yLWVsZW1lbnRzL3ItaW5wdXQnO1xuaW1wb3J0IFJUZXh0YXJlYSBmcm9tICcuLi8uLi9yLWVsZW1lbnRzL3ItdGV4dGFyZWEnO1xuY29uc3Qgc3lscyA9IHtcbiAgICBpbnB1dEJvb2tOYW1lOiBTeW1ib2woJ2lucHV0Qm9va05hbWUnKSxcbiAgICBpbnB1dEJvb2tBdXRob3I6IFN5bWJvbCgnaW5wdXRCb29rQXV0aG9yJyksXG4gICAgaW5wdXRBdXRob3JOYW1lOiBTeW1ib2woJ2lucHV0QXV0aG9yTmFtZScpLFxuICAgIGlucHV0QXV0aG9yU2x1ZzogU3ltYm9sKCdpbnB1dEF1dGhvclNsdWcnKSxcbiAgICBpbnB1dEJvb2tDb3ZlcjogU3ltYm9sKCdpbnB1dEJvb2tDb3ZlcicpLFxuICAgIHRleHRhcmVhQXV0aG9yRGVzYzogU3ltYm9sKCd0ZXh0YXJlYUF1dGhvckRlc2MnKSxcbiAgICB0ZXh0YXJlYUJvb2tEZXNjOiBTeW1ib2woJ3RleHRhcmVhQm9va0Rlc2MnKSxcbiAgICB0ZXh0YXJlYUJvb2tDb250ZW50OiBTeW1ib2woJ3RleHRhcmVhQm9va0NvbnRlbnQnKVxufTtcbmNsYXNzIEFkZEJvb2sgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0U3RhdGUgPSB7XG4gICAgICAgICAgICBib29rVGl0bGU6IFtdLFxuICAgICAgICAgICAgYm9va0F1dGhvcjogW10sXG4gICAgICAgICAgICBhdXRob3JSZXN1bHRzOiBbXSxcbiAgICAgICAgICAgIGlzQWRkQXV0aG9yTW9kYWxWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0U3RhdGUpO1xuICAgICAgICAvLyB0b2RvXG4gICAgICAgIC8vIHRoaXMuZmV0Y2hEb3ViYW5Cb29rcyA9IF8uZGVib3VuY2UoZmV0Y2hEb3ViYW5Cb29rcywgMTUwKVxuICAgIH1cbiAgICByZXNldEZvcm0oKSB7XG4gICAgICAgIHRoaXMucHJvcHMuY2hhbmdlVmFsdWUoc3lscy5pbnB1dEJvb2tDb3ZlciwgJycpO1xuICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMudGV4dGFyZWFCb29rRGVzYywgJycpO1xuICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMudGV4dGFyZWFCb29rQ29udGVudCwgJycpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuZGVmYXVsdFN0YXRlKTtcbiAgICB9XG4gICAgYWRkQm9vaygpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnN0YXRlLmJvb2tUaXRsZS5sZW5ndGggIT09IDAgPyB0aGlzLnN0YXRlLmJvb2tUaXRsZVswXS52YWx1ZSA6ICcnLFxuICAgICAgICAgICAgYXV0aG9yOiB0aGlzLnN0YXRlLmJvb2tBdXRob3IubWFwKGEgPT4gYS52YWx1ZSksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5wcm9wcy5lbGVtZW50c1tzeWxzLnRleHRhcmVhQm9va0Rlc2NdLnZhbHVlLFxuICAgICAgICAgICAgY292ZXI6IHRoaXMucHJvcHMuZWxlbWVudHNbc3lscy5pbnB1dEJvb2tDb3Zlcl0udmFsdWUsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLnByb3BzLmVsZW1lbnRzW3N5bHMudGV4dGFyZWFCb29rQ29udGVudF0udmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgYXBpcy5hZGRCb29rKGRhdGEpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5re75Yqg5oiQ5YqfJyk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhZGRBdXRob3IoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBuYW1lOiB0aGlzLnByb3BzLmVsZW1lbnRzW3N5bHMuaW5wdXRBdXRob3JOYW1lXS52YWx1ZSxcbiAgICAgICAgICAgIHNsdWc6IHRoaXMucHJvcHMuZWxlbWVudHNbc3lscy5pbnB1dEF1dGhvclNsdWddLnZhbHVlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMucHJvcHMuZWxlbWVudHNbc3lscy50ZXh0YXJlYUF1dGhvckRlc2NdLnZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIGFwaXMuYWRkQXV0aG9yKGRhdGEpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5re75Yqg5oiQ5YqfJyk7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHJlc3VsdC5vcHNbMF0uaWQ7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBib29rQXV0aG9yOiBbLi4udGhpcy5zdGF0ZS5ib29rQXV0aG9yLCB7IG5hbWU6IGRhdGEubmFtZSwgdmFsdWU6IGlkIH1dLFxuICAgICAgICAgICAgICAgIGlzQWRkQXV0aG9yTW9kYWxWaXNpYmxlOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMuaW5wdXRCb29rQXV0aG9yLCAnJyk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbihlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNlYXJjaEJvb2tzKHF1ZXJ5KSB7XG4gICAgICAgIGlmIChxdWVyeSAhPT0gJycpIHtcbiAgICAgICAgICAgIGZldGNoRG91YmFuQm9va3MocXVlcnkpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc09mQm9va1RpdGxlOiByZXMuYm9va3MubWFwKGJvb2sgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGJvb2sudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYm9vay50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYm9vay5zdW1tYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyOiBib29rLmltYWdlcy5sYXJnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I6IGJvb2suYXV0aG9yLmpvaW4oJywgJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZWFyY2hBdXRob3JzKHF1ZXJ5KSB7XG4gICAgICAgIGlmIChxdWVyeSAhPT0gJycpIHtcbiAgICAgICAgICAgIGFwaXMuc2VhcmNoQXV0aG9ycyhxdWVyeSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNPZkJvb2tBdXRob3I6IHJlc3BvbnNlLm1hcChyID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiByLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogci5pZFxuICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgb3B0aW9uc09mQm9va0F1dGhvcjogW11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsLCB7d2lkdGg6IDYwMCwgaXNWaXNpYmxlOiB0aGlzLnN0YXRlLmlzQWRkQXV0aG9yTW9kYWxWaXNpYmxlLCBvblJlcXVlc3RDbG9zZTogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNBZGRBdXRob3JNb2RhbFZpc2libGU6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfX0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtdGl0bGVcIiwgc3R5bGU6IHsgbWFyZ2luVG9wOiAwIH19LCBcIkFkZCBhdXRob3JcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUklucHV0LCB7cGxhY2Vob2xkZXI6IFwiTmFtZVwiLCBzeW1ib2w6IHN5bHMuaW5wdXRBdXRob3JOYW1lfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUklucHV0LCB7cGxhY2Vob2xkZXI6IFwiU2x1Z1wiLCBzeW1ib2w6IHN5bHMuaW5wdXRBdXRob3JTbHVnfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUlRleHRhcmVhLCB7c3ltYm9sOiBzeWxzLnRleHRhcmVhQXV0aG9yRGVzYywgcGxhY2Vob2xkZXI6IFwiRGVzY3JpcHRpb25cIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge29uQ2xpY2s6IGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5hZGRBdXRob3IoKTtcbiAgICAgICAgfX0sIFwiQWRkXCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHtjbGFzc05hbWU6IFwicGFnZS10aXRsZVwifSwgXCJBZGQgQm9va1wiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3RpemVJbnB1dCwge3BsYWNlaG9sZGVyOiBcIkJvb2sgdGl0bGVcIiwgb25JbnB1dENoYW5nZTogbmV3VmFsdWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hCb29rcyhuZXdWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMuaW5wdXRCb29rTmFtZSwgbmV3VmFsdWUpO1xuICAgICAgICB9LCB2YWx1ZTogXy5nZXQodGhpcy5wcm9wcy5lbGVtZW50c1tzeWxzLmlucHV0Qm9va05hbWVdLCAndmFsdWUnLCAnJyksIG9uVmFsdWVzQ2hhbmdlOiBuZXdWYWx1ZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYm9va1RpdGxlOiBuZXdWYWx1ZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBvcHRpb25zOiB0aGlzLnN0YXRlLm9wdGlvbnNPZkJvb2tUaXRsZSwgdmFsdWVzOiB0aGlzLnN0YXRlLmJvb2tUaXRsZSwgb25BZGROZXdWYWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgLy8gdG9kb1xuICAgICAgICB9LCBvbk9wdGlvbkNsaWNrOiBvcHRpb24gPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZShzeWxzLmlucHV0Qm9va0NvdmVyLCBvcHRpb24uYWRkaXRpb25hbC5jb3Zlcik7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMuaW5wdXRCb29rQXV0aG9yLCBvcHRpb24uYWRkaXRpb25hbC5hdXRob3IpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZShzeWxzLnRleHRhcmVhQm9va0Rlc2MsIG9wdGlvbi5hZGRpdGlvbmFsLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgfX0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdGl6ZUlucHV0LCB7cGxhY2Vob2xkZXI6IFwiQm9vayBhdXRob3JcIiwgb25JbnB1dENoYW5nZTogbmV3VmFsdWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hBdXRob3JzKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hhbmdlVmFsdWUoc3lscy5pbnB1dEJvb2tBdXRob3IsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSwgdmFsdWU6IF8uZ2V0KHRoaXMucHJvcHMuZWxlbWVudHNbc3lscy5pbnB1dEJvb2tBdXRob3JdLCAndmFsdWUnLCAnJyksIG9uVmFsdWVzQ2hhbmdlOiBuZXdWYWx1ZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYm9va0F1dGhvcjogbmV3VmFsdWVzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgb3B0aW9uczogdGhpcy5zdGF0ZS5vcHRpb25zT2ZCb29rQXV0aG9yLCB2YWx1ZXM6IHRoaXMuc3RhdGUuYm9va0F1dGhvciwgYWRkTmV3VmFsdWU6IHRydWUsIG9uQWRkTmV3VmFsdWU6IHZhbHVlID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hhbmdlVmFsdWUoc3lscy5pbnB1dEF1dGhvck5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgIC8vIHRvZG9cbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hhbmdlVmFsdWUoc3lscy5pbnB1dEF1dGhvclNsdWcsIHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hhbmdlVmFsdWUoc3lscy50ZXh0YXJlYUF1dGhvckRlc2MsICcnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGlzQWRkQXV0aG9yTW9kYWxWaXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH19KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSSW5wdXQsIHtwbGFjZWhvbGRlcjogXCJDb3ZlclwiLCBzeW1ib2w6IHN5bHMuaW5wdXRCb29rQ292ZXJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSVGV4dGFyZWEsIHtwbGFjZWhvbGRlcjogXCJEZXNjcmlwdGlvblwiLCBzeW1ib2w6IHN5bHMudGV4dGFyZWFCb29rRGVzY30pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJUZXh0YXJlYSwge3BsYWNlaG9sZGVyOiBcIlBhc3RlIGJvb2sgY29udGVudCBoZXJlXCIsIHN5bWJvbDogc3lscy50ZXh0YXJlYUJvb2tDb250ZW50fSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7b25DbGljazogZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmFkZEJvb2soKTtcbiAgICAgICAgfX0sIFwiQWRkXCIpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiAoe1xuICAgIG5vdGlmaWNhdGlvbjogc3RhdGUuY29tcG9uZW50cy5ub3RpZmljYXRpb24sXG4gICAgZWxlbWVudHM6IHN0YXRlLmVsZW1lbnRzXG59KSwgeyBzZW5kTm90aWZpY2F0aW9uLCBjaGFuZ2VWYWx1ZSB9KShBZGRCb29rKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2NvbnNvbGUvYWRkLWJvb2sudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uLCBjaGFuZ2VWYWx1ZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgQnV0dG9uLCBTZWxlY3RpemVJbnB1dCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0nO1xuaW1wb3J0IGFwaXMgZnJvbSAnLi4vLi4vdXRpbHMvYXBpcyc7XG5pbXBvcnQgUklucHV0IGZyb20gJy4uLy4uL3ItZWxlbWVudHMvci1pbnB1dCc7XG5pbXBvcnQgUlRleHRhcmVhIGZyb20gJy4uLy4uL3ItZWxlbWVudHMvci10ZXh0YXJlYSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuY29uc3Qgc3lscyA9IHtcbiAgICBpbnB1dENvbGxlY3Rpb25OYW1lOiBTeW1ib2woJ2lucHV0Q29sbGVjdGlvbk5hbWUnKSxcbiAgICBpbnB1dEJvb2tOYW1lOiBTeW1ib2woJ2lucHV0Qm9va05hbWUnKSxcbiAgICB0ZXh0YXJlYUNvbGxlY3Rpb25EZXNjOiBTeW1ib2woJ3RleHRhcmVhQ29sbGVjdGlvbkRlc2MnKVxufTtcbmNsYXNzIEFkZENvbGxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0U3RhdGUgPSB7XG4gICAgICAgICAgICBvcHRpb25zT2ZCb29rczogW10sXG4gICAgICAgICAgICB2YWx1ZXNPZkJvb2tzOiBbXSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdFN0YXRlKTtcbiAgICAgICAgdGhpcy5hZGRDb2xsZWN0aW9uID0gdGhpcy5hZGRDb2xsZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZShzeWxzLmlucHV0Q29sbGVjdGlvbk5hbWUsICcnKTtcbiAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZShzeWxzLnRleHRhcmVhQ29sbGVjdGlvbkRlc2MsICcnKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmRlZmF1bHRTdGF0ZSk7XG4gICAgfVxuICAgIGFkZENvbGxlY3Rpb24oKSB7XG4gICAgICAgIGxldCBuYW1lID0gdGhpcy5wcm9wcy5lbGVtZW50c1tzeWxzLmlucHV0Q29sbGVjdGlvbk5hbWVdLnZhbHVlO1xuICAgICAgICBsZXQgaXRlbXMgPSB0aGlzLnN0YXRlLnZhbHVlc09mQm9va3MubWFwKGEgPT4gYS52YWx1ZSk7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IHRoaXMucHJvcHMuZWxlbWVudHNbc3lscy50ZXh0YXJlYUNvbGxlY3Rpb25EZXNjXS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgbmFtZSwgaXRlbXMsIGRlc2NyaXB0aW9uLCBjcmVhdG9yOiB0aGlzLnByb3BzLnNlc3Npb24udXNlci5pZCB9O1xuICAgICAgICBhcGlzLmFkZENvbGxlY3Rpb24oZGF0YSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKCfmt7vliqDmiJDlip/vvIEnKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRGb3JtKCk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbihlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNlYXJjaEJvb2tzKHF1ZXJ5KSB7XG4gICAgICAgIGlmIChxdWVyeSAhPT0gJycpIHtcbiAgICAgICAgICAgIGFwaXMuc2VhcmNoQm9va3MocXVlcnkpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zT2ZCb29rczogcmVzcG9uc2UubWFwKHIgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHIudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogci5pZFxuICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHNlYXJjaFRhZ3MocXVlcnkpIHtcbiAgICAvLyAgIGlmKHF1ZXJ5ICE9PSAnJykge1xuICAgIC8vICAgICBhcGlzLnNlYXJjaFRhZ3MocXVlcnkpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgdGFnUmVzdWx0czogcmVzcG9uc2VcbiAgICAvLyAgICAgICB9KVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtdGl0bGVcIn0sIFwiQWRkIENvbGxlY3Rpb25cIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUklucHV0LCB7c3ltYm9sOiBzeWxzLmlucHV0Q29sbGVjdGlvbk5hbWUsIHBsYWNlaG9sZGVyOiBcIk5hbWVcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdGl6ZUlucHV0LCB7cGxhY2Vob2xkZXI6IFwiQm9va3NcIiwgb25JbnB1dENoYW5nZTogbmV3VmFsdWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hCb29rcyhuZXdWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMuaW5wdXRCb29rTmFtZSwgbmV3VmFsdWUpO1xuICAgICAgICB9LCB2YWx1ZTogXy5nZXQodGhpcy5wcm9wcy5lbGVtZW50c1tzeWxzLmlucHV0Qm9va05hbWVdLCAndmFsdWUnLCAnJyksIG9uVmFsdWVzQ2hhbmdlOiBuZXdWYWx1ZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmFsdWVzT2ZCb29rczogbmV3VmFsdWVzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgb3B0aW9uczogdGhpcy5zdGF0ZS5vcHRpb25zT2ZCb29rcywgdmFsdWVzOiB0aGlzLnN0YXRlLnZhbHVlc09mQm9va3N9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSVGV4dGFyZWEsIHtzeW1ib2w6IHN5bHMudGV4dGFyZWFDb2xsZWN0aW9uRGVzYywgcGxhY2Vob2xkZXI6IFwiRGVzY3JpcHRpb25cIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge29uQ2xpY2s6IHRoaXMuYWRkQ29sbGVjdGlvbn0sIFwiQWRkXCIpKSk7XG4gICAgfVxufVxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbm90aWZpY2F0aW9uOiBzdGF0ZS5jb21wb25lbnRzLm5vdGlmaWNhdGlvbixcbiAgICAgICAgZWxlbWVudHM6IHN0YXRlLmVsZW1lbnRzLFxuICAgICAgICBzZXNzaW9uOiBzdGF0ZS5zZXNzaW9uXG4gICAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IHNlbmROb3RpZmljYXRpb24sIGNoYW5nZVZhbHVlIH0pKEFkZENvbGxlY3Rpb24pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvY29uc29sZS9hZGQtY29sbGVjdGlvbi50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9lbGVtZW50cy9sYXlvdXQvY29udGFpbmVyJztcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uL2VsZW1lbnRzL2ljb24nO1xuaW1wb3J0IENvbnNvbGVCcmFuZGluZyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbnNvbGUtYnJhbmRpbmcnO1xuaW1wb3J0IHsgdXNlckF1dGgsIHNlbmROb3RpZmljYXRpb24gfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcbmltcG9ydCBBbGVydCBmcm9tICcuLi8uLi9lbGVtZW50cy9hbGVydCc7XG5pbXBvcnQgbWVudXMgZnJvbSAnLi9tZW51cyc7XG5jbGFzcyBDb25zb2xlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy51c2VyQXV0aCgpO1xuICAgIH1cbiAgICByZW5kZXJNZW51KG1lbnVNYXBwaW5nLCBjdXJyZW50UGF0aCkge1xuICAgICAgICBsZXQgY3VycmVudE1lbnUgPSB7XG4gICAgICAgICAgICByb290SW5kZXg6IDAsXG4gICAgICAgICAgICBzdWJJbmRleDogMFxuICAgICAgICB9O1xuICAgICAgICBtZW51TWFwcGluZy5mb3JFYWNoKChpdGVtLCByb290SW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBzdWJJbmRleDtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBpdGVtLnN1Yk1lbnUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnBhdGggPT09IGN1cnJlbnRQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YkluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudE1lbnUucm9vdEluZGV4ID0gcm9vdEluZGV4O1xuICAgICAgICAgICAgICAgIGN1cnJlbnRNZW51LnN1YkluZGV4ID0gc3ViSW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgcm9vdE1lbnUgPSAoUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtjbGFzc05hbWU6IFwibmF2LXNpZGUgbmF2LXNpZGUtcm9vdFwifSwgbWVudU1hcHBpbmcubWFwKChtZW51LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGBtZW51LSR7bWVudS5jb21wb25lbnR9YDtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gY3VycmVudE1lbnUucm9vdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgY3VycmVudCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7a2V5OiBpbmRleCwgY2xhc3NOYW1lOiBjbGFzc05hbWV9LCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogYC8ke21lbnUucGF0aH1gfSwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7bmFtZTogbWVudS5jb21wb25lbnR9KSkpKTtcbiAgICAgICAgfSkpKTtcbiAgICAgICAgbGV0IHN1Yk1lbnUgPSAoUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtjbGFzc05hbWU6IFwibmF2LXNpZGUgbmF2LXNpZGUtc3ViXCJ9LCBtZW51TWFwcGluZ1tjdXJyZW50TWVudS5yb290SW5kZXhdLnN1Yk1lbnUubWFwKChtZW51LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGBtZW51LSR7bWVudS5jb21wb25lbnR9YDtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gY3VycmVudE1lbnUuc3ViSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBjdXJyZW50JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtrZXk6IGluZGV4LCBjbGFzc05hbWU6IGNsYXNzTmFtZX0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBgLyR7bWVudS5wYXRofWB9LCBtZW51LmRpc3BsYXlOYW1lKSkpO1xuICAgICAgICB9KSkpO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJzaWRlYmFyLWxlZnRcIn0sIHJvb3RNZW51LCBzdWJNZW51KSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGlzQWRtaW4gPSB0aGlzLnByb3BzLnNlc3Npb24udXNlci5yb2xlID09PSAnYWRtaW4nID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBsZXQgdXNlcm5hbWUgPSB0aGlzLnByb3BzLnNlc3Npb24udXNlci51c2VybmFtZSA/IHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLnVzZXJuYW1lIDogbnVsbDtcbiAgICAgICAgbGV0IHBhdGhuYW1lID0gdGhpcy5wcm9wcy5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMgPyB0aGlzLnByb3BzLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucy5wYXRobmFtZSA6ICdjb25zb2xlJztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29uc29sZUJyYW5kaW5nLCB7aXNBZG1pbjogaXNBZG1pbiwgdXNlcm5hbWU6IHVzZXJuYW1lfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCB7aXNGbHVpZDogdHJ1ZX0sIHRoaXMucHJvcHMubm90aWZpY2F0aW9ucy5maWx0ZXIobm90aSA9PiBub3RpLnZpc2libGUpLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJub3RpZmljYXRpb25zXCJ9LCB0aGlzLnByb3BzLm5vdGlmaWNhdGlvbnMubWFwKChub3RpLCBpbmRleCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWxlcnQsIHtrZXk6IGluZGV4LCB0eXBlOiBub3RpLnR5cGUsIG1lc3NhZ2U6IG5vdGkubWVzc2FnZSwgdmlzaWJsZTogbm90aS52aXNpYmxlfSkpKSkpXG4gICAgICAgICAgICA6IG51bGwsIHRoaXMucmVuZGVyTWVudShtZW51cywgcGF0aG5hbWUpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29udGVudFwifSwgdGhpcy5wcm9wcy5jaGlsZHJlbikpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiAoe1xuICAgIG5vdGlmaWNhdGlvbnM6IHN0YXRlLmNvbXBvbmVudHMubm90aWZpY2F0aW9ucyxcbiAgICBzZXNzaW9uOiBzdGF0ZS5zZXNzaW9uLFxuICAgIHJvdXRpbmc6IHN0YXRlLnJvdXRpbmdcbn0pLCB7IHNlbmROb3RpZmljYXRpb24sIHVzZXJBdXRoIH0pKENvbnNvbGUpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvY29uc29sZS9ob21lLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vLi4vc2lkZS1lZmZlY3RzL2JvZHknO1xuaW1wb3J0IGFwaXMgZnJvbSAnLi4vLi4vdXRpbHMvYXBpcyc7XG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uLCBmZXRjaEJvb2tzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5jbGFzcyBNYW5hZ2VCb29rcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBzdGF0aWMgZmV0Y2hEYXRhKHsgc3RvcmUgfSkge1xuICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZmV0Y2hCb29rcygpKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hCb29rcygpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBib29rTGlzdE5ld2VzdCA9IHRoaXMucHJvcHMuYm9va0xpc3ROZXdlc3QgPyB0aGlzLnByb3BzLmJvb2tMaXN0TmV3ZXN0IDogbnVsbDtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keSwge2NsYXNzTmFtZTogXCJtYW5hZ2UtYm9va3NcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRib2R5XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgXCJJRFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFwiTmFtZVwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFwiRGF0ZSBjcmVhdGVkXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgXCJBY3Rpb25zXCIpKSwgYm9va0xpc3ROZXdlc3QgPyBib29rTGlzdE5ld2VzdC5tYXAoKGJvb2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCB7a2V5OiBpbmRleH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBib29rLmlkKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIGJvb2sudGl0bGUpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgYm9vay5kYXRlQ3JlYXRlZCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7b25DbGljazogZSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGFwaXMuZGVsZXRlQm9vayhib29rLmlkKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5Yig6Zmk5oiQ5Yqf77yBJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hCb29rcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0sIGhyZWY6IFwiI1wifSwgXCJEZWxldGVcIikpKSk7XG4gICAgICAgIH0pIDogbnVsbCkpKSk7XG4gICAgfVxufVxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJvb2tMaXN0TmV3ZXN0OiBzdGF0ZS5wYWdpbmF0aW9uLmJvb2tzLm5ld2VzdFxuICAgICAgICAgICAgPyBzdGF0ZS5wYWdpbmF0aW9uLmJvb2tzLm5ld2VzdC5pZHMubWFwKGlkID0+IHN0YXRlLmVudGl0aWVzLmJvb2tzW2lkXSlcbiAgICAgICAgICAgIDogW10sXG4gICAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGZldGNoQm9va3MsIHNlbmROb3RpZmljYXRpb24gfSkoTWFuYWdlQm9va3MpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvY29uc29sZS9tYW5hZ2UtYm9va3MudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBmZXRjaFVzZXJMaXN0IH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5jbGFzcyBNYW5hZ2VVc2VycyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFVzZXJMaXN0KCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHVzZXJMaXN0QWxsID0gdGhpcy5wcm9wcy51c2VyTGlzdEFsbCA/IHRoaXMucHJvcHMudXNlckxpc3RBbGwgOiBbXTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBcIklEXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgXCJOYW1lXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgXCJEYXRlIGNyZWF0ZWRcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBcIkFjdGlvbnNcIikpLCB1c2VyTGlzdEFsbC5tYXAoKHVzZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCB7a2V5OiBpbmRleH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCB1c2VyLmlkKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIHVzZXIudXNlcm5hbWUpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgdXNlci5kYXRlQ3JlYXRlZCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCIjXCJ9LCBcIkRlbGV0ZVwiKSkpKTtcbiAgICAgICAgfSkpKSkpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgICBjb25zdCB0eXBlID0gJ2FsbCc7XG4gICAgY29uc3QgeyBwYWdpbmF0aW9uOiB7IHVzZXJMaXN0IH0sIGVudGl0aWVzOiB7IHVzZXJzIH0gfSA9IHN0YXRlO1xuICAgIGNvbnN0IHVzZXJMaXN0UGFnaW5hdGlvbiA9IHVzZXJMaXN0W3R5cGVdO1xuICAgIGNvbnN0IHVzZXJMaXN0QWxsID0gdXNlckxpc3RQYWdpbmF0aW9uID8gdXNlckxpc3RQYWdpbmF0aW9uLmlkcy5tYXAoaWQgPT4gdXNlcnNbaWRdKSA6IFtdO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZXJMaXN0QWxsXG4gICAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGZldGNoVXNlckxpc3QgfSkoTWFuYWdlVXNlcnMpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvY29uc29sZS9tYW5hZ2UtdXNlcnMudHN4XG4gKiovIiwiY29uc3QgbWVudXMgPSBbXG4gICAge1xuICAgICAgICBjb21wb25lbnQ6ICdib29rcycsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnJyxcbiAgICAgICAgcGF0aDogJ2NvbnNvbGUvbWFuYWdlYm9va3MnLFxuICAgICAgICBzdWJNZW51OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiAnbWFuYWdlYm9va3MnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnTWFuYWdlIEJvb2tzJyxcbiAgICAgICAgICAgICAgICBwYXRoOiAnY29uc29sZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiAnYWRkYm9vaycsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdBZGQgQm9vaycsXG4gICAgICAgICAgICAgICAgcGF0aDogJ2NvbnNvbGUvYWRkYm9vaydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiAnYWRkY29sbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdBZGQgQ29sbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgcGF0aDogJ2NvbnNvbGUvY29sbGVjdGlvbi9uZXcnXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgY29tcG9uZW50OiAndXNlcnMnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJycsXG4gICAgICAgIHBhdGg6ICdjb25zb2xlL21hbmFnZXVzZXJzJyxcbiAgICAgICAgc3ViTWVudTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogJ21hbmFnZXVzZXJzJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ01hbmFnZSBVc2VycycsXG4gICAgICAgICAgICAgICAgcGF0aDogJ2NvbnNvbGUvbWFuYWdldXNlcnMnXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgY29tcG9uZW50OiAnZGF0YWJhc2UnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJycsXG4gICAgICAgIHBhdGg6ICdjb25zb2xlL21hbmFnZWJvb2tzJyxcbiAgICAgICAgc3ViTWVudTogW11cbiAgICB9LFxuICAgIHtcbiAgICAgICAgY29tcG9uZW50OiAnc3RhdGlzdGljcycsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnJyxcbiAgICAgICAgcGF0aDogJ2NvbnNvbGUvbWFuYWdlYm9va3MnLFxuICAgICAgICBzdWJNZW51OiBbXVxuICAgIH1cbl07XG5leHBvcnQgZGVmYXVsdCBtZW51cztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2NvbnNvbGUvbWVudXMudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgdmlldyBmcm9tICcuLi91dGlscy92aWV3JztcbmltcG9ydCBGYWRlIGZyb20gJy4uL2VsZW1lbnRzL2FuaW1hdGlvbnMvZmFkZSc7XG5jbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbW9kYWxIZWlnaHQ6IDAsXG4gICAgICAgICAgICBpc01vZGFsSGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGlzTW9kYWxWZXJ0aWNhbENlbnRlcjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldFZpZXcgPSB0aGlzLnNldFZpZXcuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgaGlkZU1vZGFsKCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlKCk7XG4gICAgICAgIHZpZXcudW5sb2NrU2Nyb2xsKCk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNldFZpZXcpO1xuICAgIH1cbiAgICBzZXRWaWV3KCkge1xuICAgICAgICBsZXQgbW9kYWxIZWlnaHQgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMubW9kYWwpLmNsaWVudEhlaWdodDtcbiAgICAgICAgbGV0IGlzTW9kYWxWZXJ0aWNhbENlbnRlciA9IHRydWU7XG4gICAgICAgIGxldCBkb2N1bWVudEhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuICAgICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0IDwgbW9kYWxIZWlnaHQpIHtcbiAgICAgICAgICAgIGlzTW9kYWxWZXJ0aWNhbENlbnRlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPiBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgZG9jdW1lbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtb2RhbEhlaWdodCxcbiAgICAgICAgICAgIGlzTW9kYWxWZXJ0aWNhbENlbnRlcixcbiAgICAgICAgICAgIGRvY3VtZW50SGVpZ2h0XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGlmIChwcmV2UHJvcHMuaXNWaXNpYmxlID09PSBmYWxzZSAmJiB0aGlzLnByb3BzLmlzVmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRWaWV3KCk7XG4gICAgICAgICAgICB2aWV3LmxvY2tTY3JvbGwoKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNldFZpZXcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNldFZpZXcpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRDbGFzcyA9ICdtb2RhbCc7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZSA/IGAke2RlZmF1bHRDbGFzc30gJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gIDogZGVmYXVsdENsYXNzO1xuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLnByb3BzLndpZHRoID8gdGhpcy5wcm9wcy53aWR0aCA6IDUwMDtcbiAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMuc3RhdGUubW9kYWxIZWlnaHQ7XG4gICAgICAgIGxldCBzdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tkcm9wOiB7fSxcbiAgICAgICAgICAgIHZlcnRpY2FsQ2VudGVyOiB7fSxcbiAgICAgICAgICAgIHNjcm9sbDoge30sXG4gICAgICAgICAgICBtb2RhbDoge31cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGlzVmlzaWJsZSA9IHRoaXMucHJvcHMuaXNWaXNpYmxlID8gdGhpcy5wcm9wcy5pc1Zpc2libGUgOiBmYWxzZTtcbiAgICAgICAgLy8gbGV0IG9uUmVxdWVzdENsb3NlID0gdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZT90aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlOm51bGxcbiAgICAgICAgc3R5bGUuYmFja2Ryb3AgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjg2KScsXG4gICAgICAgICAgICB6SW5kZXg6IDk5OTAsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ3Njcm9sbCdcbiAgICAgICAgfTtcbiAgICAgICAgc3R5bGUudmVydGljYWxDZW50ZXIgPSB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIG1hcmdpblRvcDogLWhlaWdodCAvIDIsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAtd2lkdGggLyAyLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgICAgIHRvcDogJzUwJSdcbiAgICAgICAgfTtcbiAgICAgICAgc3R5bGUuc2Nyb2xsID0ge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBtYXJnaW46ICc1MHB4IGF1dG8nXG4gICAgICAgIH07XG4gICAgICAgIHN0eWxlLm1vZGFsID0ge1xuICAgICAgICAgICAgcGFkZGluZzogJzMwcHgnLFxuICAgICAgICAgICAgYm94U2hhZG93OiAnMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNTcpJ1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc01vZGFsVmVydGljYWxDZW50ZXIpIHtcbiAgICAgICAgICAgIHN0eWxlLm1vZGFsID0gT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUubW9kYWwsIHN0eWxlLnZlcnRpY2FsQ2VudGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlLm1vZGFsID0gT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUubW9kYWwsIHN0eWxlLnNjcm9sbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZhZGUsIG51bGwsIGlzVmlzaWJsZSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtvbkNsaWNrOiB0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpLCBjbGFzc05hbWU6IFwibW9kYWwtYmFja2Ryb3BcIiwgc3R5bGU6IHN0eWxlLmJhY2tkcm9wfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7c3R5bGU6IHN0eWxlLm1vZGFsLCBjbGFzc05hbWU6IGNsYXNzTmFtZSwgcmVmOiBcIm1vZGFsXCIsIG9uQ2xpY2s6IChlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9fSwgdGhpcy5wcm9wcy5jaGlsZHJlbikpKSA6IG51bGwpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9Nb2RhbC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQ29uc29sZSBmcm9tICcuLi9jb250YWluZXJzL2NvbnNvbGUvaG9tZSc7XG5pbXBvcnQgTWFuYWdlQm9va3MgZnJvbSAnLi4vY29udGFpbmVycy9jb25zb2xlL21hbmFnZS1ib29rcyc7XG5pbXBvcnQgTWFuYWdlVXNlcnMgZnJvbSAnLi4vY29udGFpbmVycy9jb25zb2xlL21hbmFnZS11c2Vycyc7XG5pbXBvcnQgQWRkQm9vayBmcm9tICcuLi9jb250YWluZXJzL2NvbnNvbGUvYWRkLWJvb2snO1xuaW1wb3J0IEFkZENvbGxlY3Rpb24gZnJvbSAnLi4vY29udGFpbmVycy9jb25zb2xlL2FkZC1jb2xsZWN0aW9uJztcbmltcG9ydCBOb01hdGNoIGZyb20gJy4uL2NvbnRhaW5lcnMvbm8tbWF0Y2gnO1xuZXhwb3J0IGRlZmF1bHQgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCIvY29uc29sZVwiLCBjb21wb25lbnQ6IENvbnNvbGV9LCBSZWFjdC5jcmVhdGVFbGVtZW50KEluZGV4Um91dGUsIHtjb21wb25lbnQ6IE1hbmFnZUJvb2tzfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcIm1hbmFnZWJvb2tzXCIsIGNvbXBvbmVudDogTWFuYWdlQm9va3N9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwibWFuYWdldXNlcnNcIiwgY29tcG9uZW50OiBNYW5hZ2VVc2Vyc30pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJhZGRib29rXCIsIGNvbXBvbmVudDogQWRkQm9va30pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJjb2xsZWN0aW9uL25ld1wiLCBjb21wb25lbnQ6IEFkZENvbGxlY3Rpb259KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcIipcIiwgY29tcG9uZW50OiBOb01hdGNofSkpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9yb3V0ZXMvY29uc29sZS50c3hcbiAqKi8iLCJpbXBvcnQganNvbnAgZnJvbSAnLi9qc29ucCc7XG5pbXBvcnQgQXBpUm9vdHMgZnJvbSAnLi4vYXBpLWNvbmZpZy9hcGktcm9vdHMnO1xuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRG91YmFuQm9va3MocXVlcnkpIHtcbiAgICByZXR1cm4ganNvbnAoYCR7QXBpUm9vdHMuRE9VQkFOX0JPT0tTfS9zZWFyY2g/Y291bnQ9NSZxPSR7cXVlcnl9YCwge30pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3V0aWxzL2FwaXMtdGhpcmQtcGFydHkudHNcbiAqKi8iLCJpbXBvcnQgaGFuZGxlUmVzcG9uc2VKc29uIGZyb20gJy4vaGFuZGxlLXJlc3BvbnNlLWpzb24nO1xuZnVuY3Rpb24ganNvbnAoZnVsbFVybCwgY29uZmlnKSB7XG4gICAgaWYgKGZ1bGxVcmwuaW5kZXhPZignZG91YmFuJykgIT09IC0xKSB7XG4gICAgICAgIGxldCBpZCA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAgICAgICBsZXQganNvbnBJZCA9ICdqc29ucC0nICsgaWQ7XG4gICAgICAgIGxldCBqc29ucENhbGxiYWNrID0gJ2pzb25wQ2FsbGJhY2snICsgaWQ7XG4gICAgICAgIGxldCBqc29ucENhbGxiYWNrRGF0YSA9IGBfX0pTT05QX0RBVEFfJHtpZH1fX2A7XG4gICAgICAgIHdpbmRvd1tqc29ucENhbGxiYWNrXSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB3aW5kb3dbanNvbnBDYWxsYmFja0RhdGFdID0gZGF0YTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtmdWxsVXJsfSZjYWxsYmFjaz0ke2pzb25wQ2FsbGJhY2t9YCk7XG4gICAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2lkJywganNvbnBJZCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGpzb25wSWQpKTtcbiAgICAgICAgICAgICAgICBsZXQganNvbiA9IHdpbmRvd1tqc29ucENhbGxiYWNrRGF0YV07XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShoYW5kbGVSZXNwb25zZUpzb24oanNvbiwgY29uZmlnLnNjaGVtYSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQganNvbnA7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvdXRpbHMvanNvbnAudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0LWRvbVwiXG4gKiogbW9kdWxlIGlkID0gMTYzXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9