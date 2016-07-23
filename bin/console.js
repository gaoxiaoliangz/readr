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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjk1MzgyNWU5ZjU1M2Y0ZjYzMjM/NTBiYiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzNjNjIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIj9jYTY0Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYWN0aW9ucy9pbmRleC50cz9mZDhlIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiP2VlMTYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCI/MGM4YiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vaW5kZXgudHN4Pzg5YmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9hcGktY29uZmlnL2FwaS1yb290cy50cz81M2MwIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvc2lkZS1lZmZlY3RzL2JvZHkudHN4P2I2OTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9pY29uLnRzeD9mYjhmIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvbGF5b3V0L2NvbnRhaW5lci50c3g/NTc3NSIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL2NhbGwtYXBpLnRzPzQxNTYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9ybWFsaXpyXCI/YTQ2OSIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL2hhbmRsZS1yZXNwb25zZS1qc29uLnRzP2E2ODEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zY2hlbWFzL2luZGV4LnRzPzc3YWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC91dGlscy9hcGlzLnRzPzZkMTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC91dGlscy9wYXJzZS1mb3JtLWRhdGEudHM/YmQzZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodW1wc1wiPzZmY2YiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiPzlmNjciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2lucHV0LnRzeD9jODMxIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvZm9ybS90ZXh0YXJlYS50c3g/MDU3MSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXBcIj83YmYxIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYWN0aW9ucy9ib29rLnRzPzhmNmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9hY3Rpb25zL25vdGlmaWNhdGlvbi50cz9mMDljIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYWN0aW9ucy91c2VyLnRzPzkyZTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL25vLW1hdGNoLnRzeD84NzA3Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvYWxlcnQudHN4P2IyZDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9hbmltYXRpb25zL2ZhZGUudHN4P2VmNTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2J1dHRvbi9idXR0b24udHN4Pzg5OTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2J1dHRvbi9pbmRleC50c3g/MTBmMyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vc2VsZWN0aXplLWlucHV0LnRzeD8wZjlmIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvdmlldy50cz9lNzA1Iiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNpZGUtZWZmZWN0XCI/NTVmYyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3ItZWxlbWVudHMvci1pbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yLWVsZW1lbnRzL3ItdGV4dGFyZWEudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9jb25zb2xlLWJyYW5kaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvY29uc29sZS9hZGQtYm9vay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL2NvbnNvbGUvYWRkLWNvbGxlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9jb25zb2xlL2hvbWUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9jb25zb2xlL21hbmFnZS1ib29rcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL2NvbnNvbGUvbWFuYWdlLXVzZXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvY29uc29sZS9tZW51cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL01vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JvdXRlcy9jb25zb2xlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL2FwaXMtdGhpcmQtcGFydHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC91dGlscy9qc29ucC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RDQSxtQzs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7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QU8sT0FBTyxpQkFBUCxDQUFQLENBRm9CO0FBR3hCLGlDQUFRLGtDQUFtQixJQUFuQixFQUF5QixPQUFPLE1BQVAsQ0FBakMsRUFId0I7c0JBQVosQ0FEVTtrQkFBWDtjQUFuQjthQVprQzs7O01BQXRDO0VBREo7bUJBc0JlLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QmYsdUMiLCJmaWxlIjoiY29uc29sZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMjk1MzgyNWU5ZjU1M2Y0ZjYzMjNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3RcIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0LXJlZHV4XCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsImV4cG9ydCAqIGZyb20gJy4uL2FjdGlvbnMvYm9vayc7XG5leHBvcnQgKiBmcm9tICcuLi9hY3Rpb25zL25vdGlmaWNhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuLi9hY3Rpb25zL3VzZXInO1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVZhbHVlKG5hbWUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ0NIQU5HRV9WQUxVRScsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHZhbHVlXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVFbGVtZW50KG5hbWUsIGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnVVBEQVRFX0VMRU1FTlQnLFxuICAgICAgICBuYW1lLFxuICAgICAgICBkYXRhXG4gICAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9hY3Rpb25zL2luZGV4LnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIlxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJsb2Rhc2hcIlxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxIDJcbiAqKi8iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0JztcbmltcG9ydCBTZWxlY3RpemVJbnB1dCBmcm9tICcuL3NlbGVjdGl6ZS1pbnB1dCc7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi90ZXh0YXJlYSc7XG5leHBvcnQgeyBCdXR0b24sIElucHV0LCBTZWxlY3RpemVJbnB1dCwgVGV4dGFyZWEgfTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2luZGV4LnRzeFxuICoqLyIsImNvbnN0IEhPU1QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJztcbmNvbnN0IEFwaVJvb3RzID0ge1xuICAgIExPQ0FMOiBgJHtIT1NUfS9hcGkvYCxcbiAgICBET1VCQU5fQk9PS1M6ICdodHRwczovL2FwaS5kb3ViYW4uY29tL3YyL2Jvb2svJ1xufTtcbmV4cG9ydCBkZWZhdWx0IEFwaVJvb3RzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2FwaS1jb25maWcvYXBpLXJvb3RzLnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU2lkZUVmZmVjdCBmcm9tICdyZWFjdC1zaWRlLWVmZmVjdCc7XG5jbGFzcyBCb2R5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicmVhY3QtYm9keS1jbGFzcyBoaWRkZW5cIn0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlZHVjZVByb3BzVG9TdGF0ZShwcm9wc0xpc3QpIHtcbiAgICBsZXQgY2xhc3NOYW1lO1xuICAgIHByb3BzTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbn1cbmZ1bmN0aW9uIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQoY2xhc3NOYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgd2l0aFNpZGVFZmZlY3QocmVkdWNlUHJvcHNUb1N0YXRlLCBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50KShCb2R5KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9zaWRlLWVmZmVjdHMvYm9keS50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuY2xhc3MgSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBuYW1lID0gdGhpcy5wcm9wcy5uYW1lO1xuICAgICAgICBsZXQgbWV0aG9kID0gdGhpcy5wcm9wcy5vbkNsaWNrO1xuICAgICAgICBsZXQgc2l6ZSA9IHRoaXMucHJvcHMuc2l6ZTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBgaWNvbiBpY29uLSR7bmFtZX0gJHtzaXplfWAsIG9uQ2xpY2s6IG1ldGhvZH0pKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBJY29uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2ljb24udHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmNsYXNzIENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gKHRoaXMucHJvcHMuaXNGbHVpZCA/ICdjb250YWluZXItZmx1aWQnIDogJ2NvbnRhaW5lcicpICsgKHRoaXMucHJvcHMuY2xhc3NOYW1lID8gYCAke3RoaXMucHJvcHMuY2xhc3NOYW1lfWAgOiAnJyk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9LCB0aGlzLnByb3BzLmNoaWxkcmVuKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2xheW91dC9jb250YWluZXIudHN4XG4gKiovIiwiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCBvYmplY3RUb1VybGVuY29kZWQgZnJvbSAnLi4vdXRpbHMvcGFyc2UtZm9ybS1kYXRhJztcbmltcG9ydCBoYW5kbGVSZXNwb25zZUpzb24gZnJvbSAnLi4vdXRpbHMvaGFuZGxlLXJlc3BvbnNlLWpzb24nO1xuY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbn07XG5leHBvcnQgZnVuY3Rpb24gY2FsbEFwaShmdWxsVXJsLCBjb25maWcgPSB7fSkge1xuICAgIC8vIHJldHVybiBmZXRjaCBjb25maWdcbiAgICBjb25zdCBwYXJzZUNvbmZpZyA9IChvcmlnaW5hbkNvbmZpZykgPT4ge1xuICAgICAgICBsZXQgeyBtZXRob2QsIGRhdGEsIGNyZWRlbnRpYWxzLCBkYXRhVHlwZSB9ID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdENvbmZpZywgb3JpZ2luYW5Db25maWcpO1xuICAgICAgICBsZXQgZmV0Y2hDb25maWcgPSB7fTtcbiAgICAgICAgaWYgKG1ldGhvZCkge1xuICAgICAgICAgICAgZmV0Y2hDb25maWcubWV0aG9kID0gbWV0aG9kO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjcmVkZW50aWFscykge1xuICAgICAgICAgICAgZmV0Y2hDb25maWcuY3JlZGVudGlhbHMgPSBjcmVkZW50aWFscztcbiAgICAgICAgfVxuICAgICAgICAvLyBoYW5kbGUgcmVxdWVzdCBoZWFkZXJzIGFuZCBib2R5XG4gICAgICAgIGlmIChtZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICAgICAgbGV0IGNvbnRlbnRUeXBlO1xuICAgICAgICAgICAgbGV0IGJvZHk7XG4gICAgICAgICAgICBpZiAoZGF0YVR5cGUgPT09ICdqc29uJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGFUeXBlID09PSAndXJsZW5jb2RlZCcpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xuICAgICAgICAgICAgICAgIGJvZHkgPSBvYmplY3RUb1VybGVuY29kZWQoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgdW5zdXBwb3J0ZWQgZGF0YVR5cGVcbiAgICAgICAgICAgICAgICBkYXRhVHlwZSA9ICd1cmxlbmNvZGVkJztcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xuICAgICAgICAgICAgICAgIGJvZHkgPSBvYmplY3RUb1VybGVuY29kZWQoZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdVbnN1cHBvcnRlZCBkYXRhVHlwZSB1c2VkIFwidXJsZW5jb2RlZFwiIGluc3RlYWQhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmZXRjaENvbmZpZy5oZWFkZXJzID0ge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiBjb250ZW50VHlwZSxcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtUmVxdWVzdC1NZXRob2QnOiAnUE9TVCdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmZXRjaENvbmZpZy5ib2R5ID0gYm9keTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kID09PSAnREVMRVRFJykge1xuICAgICAgICAgICAgZmV0Y2hDb25maWcuaGVhZGVycyA9IHtcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtUmVxdWVzdC1NZXRob2QnOiAnREVMRVRFJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hDb25maWc7XG4gICAgfTtcbiAgICByZXR1cm4gZmV0Y2goZnVsbFVybCwgcGFyc2VDb25maWcoY29uZmlnKSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oanNvbiA9PiAoeyBqc29uLCByZXNwb25zZSB9KSk7XG4gICAgfSlcbiAgICAgICAgLnRoZW4oKHsganNvbiwgcmVzcG9uc2UgfSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVSZXNwb25zZUpzb24oanNvbiwgY29uZmlnLnNjaGVtYSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoanNvbik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNhbGxBcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvdXRpbHMvY2FsbC1hcGkudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub3JtYWxpenJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIm5vcm1hbGl6clwiXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxIDJcbiAqKi8iLCJpbXBvcnQgeyBub3JtYWxpemUgfSBmcm9tICdub3JtYWxpenInO1xuaW1wb3J0IGh1bXBzIGZyb20gJ2h1bXBzJztcbmZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlSnNvbihqc29uLCBzY2hlbWEpIHtcbiAgICBqc29uID0gaHVtcHMuY2FtZWxpemVLZXlzKGpzb24pO1xuICAgIGxldCByZXN1bHQgPSBqc29uO1xuICAgIGlmICh0eXBlb2Ygc2NoZW1hICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBub3JtYWxpemUoanNvbiwgc2NoZW1hKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgZGVmYXVsdCBoYW5kbGVSZXNwb25zZUpzb247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvdXRpbHMvaGFuZGxlLXJlc3BvbnNlLWpzb24udHNcbiAqKi8iLCJpbXBvcnQgeyBTY2hlbWEsIGFycmF5T2YgfSBmcm9tICdub3JtYWxpenInO1xuY29uc3QgYm9vayA9IG5ldyBTY2hlbWEoJ2Jvb2tzJywge1xuICAgIGlkQXR0cmlidXRlOiAnaWQnXG59KTtcbmNvbnN0IGNvbGxlY3Rpb24gPSBuZXcgU2NoZW1hKCdib29rQ29sbGVjdGlvbnMnLCB7XG4gICAgaWRBdHRyaWJ1dGU6ICdpZCdcbn0pO1xuY29uc3QgcHJvZmlsZSA9IG5ldyBTY2hlbWEoJ3Byb2ZpbGVzJywge1xuICAgIGlkQXR0cmlidXRlOiAnaWQnXG59KTtcbmNvbnN0IHVzZXIgPSBuZXcgU2NoZW1hKCd1c2VycycsIHtcbiAgICBpZEF0dHJpYnV0ZTogJ2lkJ1xufSk7XG5jb25zdCBkb3ViYW5Cb29rID0gbmV3IFNjaGVtYSgnZG91YmFuQm9va3MnLCB7XG4gICAgaWRBdHRyaWJ1dGU6ICdpZCdcbn0pO1xuY29uc3QgYm9va1Byb2dyZXNzID0gbmV3IFNjaGVtYSgnYm9va3MnLCB7XG4gICAgaWRBdHRyaWJ1dGU6ICdib29rSWQnXG59KTtcbmNvbnN0IG1hdGNoZWRCb29rcyA9IG5ldyBTY2hlbWEoJ2Jvb2tzJywge1xuICAgIGlkQXR0cmlidXRlOiAnYm9va0lkJ1xufSk7XG5leHBvcnQgY29uc3QgU2NoZW1hcyA9IHtcbiAgICBCT09LOiBib29rLFxuICAgIEJPT0tfUFJPR1JFU1M6IGJvb2tQcm9ncmVzcyxcbiAgICBCT09LX0FSUkFZOiBhcnJheU9mKGJvb2spLFxuICAgIERPVUJBTl9CT09LX1NFQVJDSF9SRVNVTFRTOiB7IGJvb2tzOiBhcnJheU9mKGRvdWJhbkJvb2spIH0sXG4gICAgVVNFUl9BUlJBWTogYXJyYXlPZih1c2VyKSxcbiAgICBNQVRDSEVEX0JPT0tfQVJSQVk6IGFycmF5T2YobWF0Y2hlZEJvb2tzKSxcbiAgICBDT0xMRUNUSU9OOiBjb2xsZWN0aW9uLFxuICAgIENPTExFQ1RJT05fQVJSQVk6IGFycmF5T2YoY29sbGVjdGlvbiksXG4gICAgUFJPRklMRTogcHJvZmlsZVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9zY2hlbWFzL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IGNhbGxBcGkgZnJvbSAnLi9jYWxsLWFwaSc7XG5pbXBvcnQgQXBpUm9vdHMgZnJvbSAnLi4vYXBpLWNvbmZpZy9hcGktcm9vdHMnO1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbGxlY3Rpb24oZGF0YSkge1xuICAgIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWNvbGxlY3Rpb25zYCwgeyBtZXRob2Q6ICdQT1NUJywgZGF0YTogZGF0YSB9KTtcbn1cbi8qKlxuICogZGF0YTogbmFtZSwgYXV0aG9yLCBkZXNjcmlwdGlvbiwgY292ZXIsIGNvbnRlbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEJvb2soZGF0YSkge1xuICAgIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWJvb2tzYCwgeyBtZXRob2Q6ICdQT1NUJywgZGF0YTogZGF0YSB9KTtcbn1cbi8qKlxuICogZGF0YTogbmFtZSwgc2x1ZywgZGVzY3JpcHRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEF1dGhvcihkYXRhKSB7XG4gICAgcmV0dXJuIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9YXV0aG9yc2AsIHsgbWV0aG9kOiAnUE9TVCcsIGRhdGE6IGRhdGEgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQXV0aG9ycyhxdWVyeSkge1xuICAgIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWF1dGhvcnM/cT0ke3F1ZXJ5fWApO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEJvb2tzKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9Ym9va3M/cT0ke3F1ZXJ5fWApO1xufVxuLyoqXG4gKiBkYXRhOiBwYWdlTm8sIHBhZ2VTdW0sIHBlcmNlbnRhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2dyZXNzKGJvb2tJZCwgZGF0YSkge1xuICAgIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9Ym9va3MvJHtib29rSWR9L3Byb2dyZXNzYCwgeyBtZXRob2Q6ICdQT1NUJywgZGF0YSB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVCb29rKGlkKSB7XG4gICAgcmV0dXJuIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9Ym9va3MvJHtpZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhZGRDb2xsZWN0aW9uLFxuICAgIGFkZEJvb2ssXG4gICAgYWRkQXV0aG9yLFxuICAgIHNlYXJjaEJvb2tzLFxuICAgIHNlYXJjaEF1dGhvcnMsXG4gICAgc2V0UHJvZ3Jlc3MsXG4gICAgZGVsZXRlQm9va1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9hcGlzLnRzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9iamVjdFRvVXJsZW5jb2RlZChvcmlnaW5hbE9iaikge1xuICAgIGxldCBvYmplY3QgPSBfLmNsb25lRGVlcChvcmlnaW5hbE9iaik7XG4gICAgbGV0IGVuY29kZWR1cmwgPSAnJztcbiAgICBmb3IgKGxldCBwcm9wIGluIG9iamVjdCkge1xuICAgICAgICBpZiAodHlwZW9mIG9iamVjdFtwcm9wXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIG9iamVjdFtwcm9wXSA9IG9iamVjdFtwcm9wXS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGVuY29kZWR1cmwgPSBgJHtlbmNvZGVkdXJsfSR7cHJvcH09JHtvYmplY3RbcHJvcF19JmA7XG4gICAgfVxuICAgIHJldHVybiBlbmNvZGVkdXJsLnN1YnN0cigwLCBlbmNvZGVkdXJsLmxlbmd0aCAtIDEpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3V0aWxzL3BhcnNlLWZvcm0tZGF0YS50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh1bXBzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJodW1wc1wiXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxIDJcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCJcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMlxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5jbGFzcyBJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZSA/IGBpbnB1dC13cmFwICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YCA6ICdpbnB1dC13cmFwJztcbiAgICAgICAgbGV0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5jbGFzc05hbWU7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3BsYWNlaG9sZGVyOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyLCB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSwgb25DaGFuZ2U6IGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcbiAgICAgICAgfSwgdHlwZTogdGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ3RleHQnLCBuYW1lOiB0aGlzLnByb3BzLm5hbWUgPyB0aGlzLnByb3BzLm5hbWUgOiBudWxsfSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2lucHV0LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5jbGFzcyBUZXh0YXJlYSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZSA/IGB0ZXh0YXJlYS13cmFwICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YCA6ICd0ZXh0YXJlYS13cmFwJztcbiAgICAgICAgbGV0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5jbGFzc05hbWU7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwge3BsYWNlaG9sZGVyOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyLCB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSwgb25DaGFuZ2U6IGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcbiAgICAgICAgfSwgdHlwZTogdGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ3RleHQnLCBuYW1lOiB0aGlzLnByb3BzLm5hbWUgPyB0aGlzLnByb3BzLm5hbWUgOiBudWxsfSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL3RleHRhcmVhLnRzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwXCJcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJpbXBvcnQgeyBTY2hlbWFzIH0gZnJvbSAnLi4vc2NoZW1hcyc7XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hCb29rUHJvZ3Jlc3MoYm9va0lkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9va0lkLFxuICAgICAgICBDQUxMX0FQSToge1xuICAgICAgICAgICAgdHlwZXM6IFsnQk9PS19QUk9HUkVTU19SRVFVRVNUJywgJ0JPT0tfUFJPR1JFU1NfU1VDQ0VTUycsICdCT09LX1BST0dSRVNTX0ZBSUxVUkUnXSxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgYm9va3MvJHtib29rSWR9L3Byb2dyZXNzYCxcbiAgICAgICAgICAgIHNjaGVtYTogU2NoZW1hcy5CT09LX1BST0dSRVNTXG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQm9va3MoZmxvd1R5cGUgPSAnbmV3ZXN0Jykge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIGZvciBwYWdpbmF0ZVxuICAgICAgICBmbG93VHlwZSxcbiAgICAgICAgQ0FMTF9BUEk6IHtcbiAgICAgICAgICAgIHR5cGVzOiBbJ0JPT0tTX1JFUVVFU1QnLCAnQk9PS1NfU1VDQ0VTUycsICdCT09LU19GQUlMVVJFJ10sXG4gICAgICAgICAgICBlbmRwb2ludDogYGJvb2tzP2V4Y2x1ZGU9Y29udGVudGAsXG4gICAgICAgICAgICBzY2hlbWE6IFNjaGVtYXMuQk9PS19BUlJBWSxcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hCb29rKGJvb2tJZCwgZmllbGRzKSB7XG4gICAgbGV0IGVuZHBvaW50ID0gYGJvb2tzLyR7Ym9va0lkfWA7XG4gICAgaWYgKGZpZWxkcykge1xuICAgICAgICBlbmRwb2ludCArPSBgP2ZpZWxkcz0ke2ZpZWxkcy5qb2luKCcsJyl9YDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9va0lkLFxuICAgICAgICBDQUxMX0FQSToge1xuICAgICAgICAgICAgdHlwZXM6IFsnQk9PS19SRVFVRVNUJywgJ0JPT0tfU1VDQ0VTUycsICdCT09LX0ZBSUxVUkUnXSxcbiAgICAgICAgICAgIGVuZHBvaW50LFxuICAgICAgICAgICAgc2NoZW1hOiBTY2hlbWFzLkJPT0tcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hDb2xsZWN0aW9ucyhmbG93VHlwZSA9ICduZXdlc3QnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZmxvd1R5cGUsXG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydDT0xMRUNUSU9OU19SRVFVRVNUJywgJ0NPTExFQ1RJT05TX1NVQ0NFU1MnLCAnQ09MTEVDVElPTlNfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGBjb2xsZWN0aW9uc2AsXG4gICAgICAgICAgICBzY2hlbWE6IFNjaGVtYXMuQ09MTEVDVElPTl9BUlJBWVxuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENvbGxlY3Rpb24oY29sbGVjdGlvbklkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29sbGVjdGlvbklkLFxuICAgICAgICBDQUxMX0FQSToge1xuICAgICAgICAgICAgdHlwZXM6IFsnQ09MTEVDVElPTl9SRVFVRVNUJywgJ0NPTExFQ1RJT05fU1VDQ0VTUycsICdDT0xMRUNUSU9OX0ZBSUxVUkUnXSxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgY29sbGVjdGlvbnMvJHtjb2xsZWN0aW9uSWR9YCxcbiAgICAgICAgICAgIHNjaGVtYTogU2NoZW1hcy5DT0xMRUNUSU9OXG4gICAgICAgIH1cbiAgICB9O1xufVxuLy8gZXhwb3J0IGZ1bmN0aW9uIGZldGNoQm9va0NvbnRlbnQoYm9va0lkKSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgYm9va0lkLFxuLy8gICAgIENBTExfQVBJOiB7XG4vLyAgICAgICB0eXBlczogWydCT09LX0NPTlRFTlRfUkVRVUVTVCcsICdCT09LX0NPTlRFTlRfU1VDQ0VTUycsICdCT09LX0NPTlRFTlRfRkFJTFVSRSddLFxuLy8gICAgICAgZW5kcG9pbnQ6IGBib29rcy8ke2Jvb2tJZH0vY29udGVudGAsXG4vLyAgICAgICBzY2hlbWE6IFNjaGVtYXMuQk9PS1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuLy9cbi8vIGV4cG9ydCBmdW5jdGlvbiBmZXRjaEJvb2tJbmZvKGJvb2tJZCkge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIGJvb2tJZCxcbi8vICAgICBDQUxMX0FQSTp7XG4vLyAgICAgICB0eXBlczogWydCT09LX0lORk9fUkVRVUVTVCcsICdCT09LX0lORk9fU1VDQ0VTUycsICdCT09LX0lORk9fRkFJTFVSRSddLFxuLy8gICAgICAgZW5kcG9pbnQ6IGBib29rcy8ke2Jvb2tJZH1gLFxuLy8gICAgICAgc2NoZW1hOiBTY2hlbWFzLkJPT0tfQVJSQVlcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbi8vIGV4cG9ydCBmdW5jdGlvbiBmZXRjaERvdWJhbkJvb2tTZWFyY2hSZXN1bHRzKHF1ZXJ5KSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgcXVlcnksXG4vLyAgICAgQ0FMTF9BUEk6IHtcbi8vICAgICAgIHR5cGVzOiBbJ0RPVUJBTl9CT09LX1NFQVJDSF9SRVFVRVNUJywgJ0RPVUJBTl9CT09LX1NFQVJDSF9TVUNDRVNTJywgJ0RPVUJBTl9CT09LX1NFQVJDSF9GQUlMVVJFJ10sXG4vLyAgICAgICBlbmRwb2ludDogYHNlYXJjaD9jb3VudD01JnE9JHtxdWVyeX1gLFxuLy8gICAgICAgYXBpVXJsOiBBcGlSb290cy5ET1VCQU5fQk9PS1MsXG4vLyAgICAgICBzY2hlbWE6IFNjaGVtYXMuRE9VQkFOX0JPT0tfU0VBUkNIX1JFU1VMVFMsXG4vLyAgICAgICBleHRlbmRlZE9wdGlvbnM6IHsgdXNlSnNvbnA6IHRydWUgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuLy8gZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEJvb2tzKHF1ZXJ5KSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgcXVlcnksXG4vLyAgICAgQ0FMTF9BUEk6IHtcbi8vICAgICAgIHR5cGVzOiBbJ0JPT0tfU0VBUkNIX1JFUVVFU1QnLCAnQk9PS19TRUFSQ0hfU1VDQ0VTUycsICdCT09LX1NFQVJDSF9GQUlMVVJFJ10sXG4vLyAgICAgICBlbmRwb2ludDogYHNlYXJjaD9xPSR7cXVlcnl9YCxcbi8vICAgICAgIGFwaVVybDogQXBpUm9vdHMuTE9DQUwsXG4vLyAgICAgICBzY2hlbWE6IFNjaGVtYXMuTUFUQ0hFRF9CT09LX0FSUkFZXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvYWN0aW9ucy9ib29rLnRzXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIHNlbmROb3RpZmljYXRpb24obWVzc2FnZSwgbXNnVHlwZSA9ICdzdWNjZXNzJywgdCA9IDUwMDApIHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IE1hdGgucmFuZG9tKCkudG9GaXhlZCg4KS5zdWJzdHIoMik7XG4gICAgICAgIGRpc3BhdGNoKHNob3dOb3RpZmljYXRpb24oaWQsIG1lc3NhZ2UsIG1zZ1R5cGUpKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChoaWRlTm90aWZpY2F0aW9uKGlkKSk7XG4gICAgICAgIH0sIHQpO1xuICAgIH07XG59XG5leHBvcnQgY29uc3QgU0hPV19OT1RJRklDQVRJT04gPSAnU0hPV19OT1RJRklDQVRJT04nO1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24oaWQsIG1lc3NhZ2UsIG1zZ1R5cGUgPSAnc3VjY2VzcycpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTSE9XX05PVElGSUNBVElPTixcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgbXNnVHlwZSxcbiAgICAgICAgaWRcbiAgICB9O1xufVxuZXhwb3J0IGNvbnN0IEhJREVfTk9USUZJQ0FUSU9OID0gJ0hJREVfTk9USUZJQ0FUSU9OJztcbmV4cG9ydCBmdW5jdGlvbiBoaWRlTm90aWZpY2F0aW9uKGlkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogSElERV9OT1RJRklDQVRJT04sXG4gICAgICAgIGlkXG4gICAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9hY3Rpb25zL25vdGlmaWNhdGlvbi50c1xuICoqLyIsImltcG9ydCB7IFNjaGVtYXMgfSBmcm9tICcuLi9zY2hlbWFzL2luZGV4JztcbmV4cG9ydCBmdW5jdGlvbiB1c2VyQXV0aCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBDQUxMX0FQSToge1xuICAgICAgICAgICAgdHlwZXM6IFsnVVNFUl9BVVRIX1JFUVVFU1QnLCAnVVNFUl9BVVRIX1NVQ0NFU1MnLCAnVVNFUl9BVVRIX0ZBSUxVUkUnXSxcbiAgICAgICAgICAgIGVuZHBvaW50OiAnYXV0aCdcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQcm9maWxlKGlkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgQ0FMTF9BUEk6IHtcbiAgICAgICAgICAgIHR5cGVzOiBbJ1BST0ZJTEVfUkVRVUVTVCcsICdQUk9GSUxFX1NVQ0NFU1MnLCAnUFJPRklMRV9GQUlMVVJFJ10sXG4gICAgICAgICAgICBlbmRwb2ludDogYHVzZXJzLyR7aWR9L3Byb2ZpbGVgLFxuICAgICAgICAgICAgc2NoZW1hOiBTY2hlbWFzLlBST0ZJTEVcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hVc2VyTGlzdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBDQUxMX0FQSToge1xuICAgICAgICAgICAgdHlwZXM6IFsnVVNFUl9MSVNUX1JFUVVFU1QnLCAnVVNFUl9MSVNUX1NVQ0NFU1MnLCAnVVNFUl9MSVNUX0ZBSUxVUkUnXSxcbiAgICAgICAgICAgIGVuZHBvaW50OiAndXNlcnMnLFxuICAgICAgICAgICAgc2NoZW1hOiBTY2hlbWFzLlVTRVJfQVJSQVlcbiAgICAgICAgfVxuICAgIH07XG59XG4vLyBleHBvcnQgZnVuY3Rpb24gZmV0Y2hTaGVsZih1c2VySWQpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICB1c2VySWQsXG4vLyAgICAgQ0FMTF9BUEk6IHtcbi8vICAgICAgIHR5cGVzOiBbJ1NIRUxGX1JFUVVFU1QnLCAnU0hFTEZfU1VDQ0VTUycsICdTSEVMRl9GQUlMVVJFJ10sXG4vLyAgICAgICBlbmRwb2ludDogYHVzZXJzLyR7dXNlcklkfS9zaGVsZmAsXG4vLyAgICAgICBzY2hlbWE6IFNjaGVtYXMuQk9PS19BUlJBWSxcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFNoZWxmKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBheWxvYWQ6ICdib29rU2hlbGYnLFxuICAgICAgICBDQUxMX0FQSToge1xuICAgICAgICAgICAgdHlwZXM6IFsnU0hFTEZfUkVRVUVTVCcsICdTSEVMRl9TVUNDRVNTJywgJ1NIRUxGX0ZBSUxVUkUnXSxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgdXNlci9ib29rcy9zaGVsZmAsXG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2FjdGlvbnMvdXNlci50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5jbGFzcyBOb01hdGNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsIFwiNDA0XCIpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBOb01hdGNoO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvbm8tbWF0Y2gudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uIGZyb20gJy4uL2VsZW1lbnRzL2ljb24nO1xuY2xhc3MgTm90aWZpY2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLnByb3BzLnR5cGUgPyB0aGlzLnByb3BzLnR5cGUgOiAnc3VjY2Vzcyc7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCB0aGlzLnByb3BzLnZpc2libGUgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogYG5vdGlmaWNhdGlvbiBub3RpZmljYXRpb24tLSR7dHlwZX0gejFgLnRyaW0oKX0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwge29uQ2xpY2s6IHRoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2UsIG5hbWU6IFwiY2xvc2VcIn0pLCB0aGlzLnByb3BzLm1lc3NhZ2UpKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9hbGVydC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCc7XG5jbGFzcyBGYWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gbGV0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lP3RoaXMucHJvcHMuY2xhc3NOYW1lOm51bGxcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwLCB7Y29tcG9uZW50OiBcImRpdlwiLCB0cmFuc2l0aW9uTmFtZTogXCJmYWRlXCIsIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ6IDMwMCwgdHJhbnNpdGlvbkxlYXZlVGltZW91dDogMzAwfSwgdGhpcy5wcm9wcy5jaGlsZHJlbikpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZhZGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvYW5pbWF0aW9ucy9mYWRlLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWUgPyBgYnRuICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YCA6ICdidG4nO1xuICAgICAgICBsZXQgc2l6ZSA9IHRoaXMucHJvcHMuc2l6ZSA/IHRoaXMucHJvcHMuc2l6ZSA6ICdtZWRpdW0nO1xuICAgICAgICBsZXQgaXNGbHVpZCA9IHRoaXMucHJvcHMuaXNGbHVpZCA/IHRoaXMucHJvcHMuaXNGbHVpZCA6IGZhbHNlO1xuICAgICAgICBsZXQgY29sb3IgPSB0aGlzLnByb3BzLmNvbG9yID8gdGhpcy5wcm9wcy5jb2xvciA6IG51bGw7XG4gICAgICAgIGxldCBvbkNsaWNrO1xuICAgICAgICBpZiAoc2l6ZSA9PT0gJ3NtYWxsJykge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgYnRuLXNtYWxsJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaXplID09PSAnbGFyZ2UnKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBidG4tbGFyZ2UnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNpemUgPT09ICdtZWRpdW0nKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBidG4tbWVkaXVtJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Vuc3VwcG9ydCBzaXplIScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9IGAgYnRuLSR7Y29sb3J9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNGbHVpZCkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSBidG4tZmx1aWRgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRvKSB7XG4gICAgICAgICAgICBvbkNsaWNrID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2godGhpcy5wcm9wcy50byk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb25DbGljayA9IGUgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGxldCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lIH0sIHsgb25DbGljayB9KTtcbiAgICAgICAgZGVsZXRlIHByb3BzLnRvO1xuICAgICAgICBkZWxldGUgcHJvcHMuY29sb3I7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5zaXplO1xuICAgICAgICBkZWxldGUgcHJvcHMuaXNGbHVpZDtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KCdidXR0b24nLCBwcm9wcywgdGhpcy5wcm9wcy5jaGlsZHJlbikpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2J1dHRvbi9idXR0b24udHN4XG4gKiovIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvZm9ybS9idXR0b24vaW5kZXgudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uIGZyb20gJy4uL2ljb24nO1xuY2xhc3MgU2VsZWN0aXplSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNob3dPcHRpb25zOiBmYWxzZSxcbiAgICAgICAgICAgIGZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIGV4cGVuZGVkT3B0aW9uSW5kZXg6IDBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oaWRlT3B0aW9ucyA9IHRoaXMuaGlkZU9wdGlvbnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5mb2N1c0lucHV0ID0gdGhpcy5mb2N1c0lucHV0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2hvd09wdGlvbnMgPSB0aGlzLnNob3dPcHRpb25zLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGFkZFZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25WYWx1ZXNDaGFuZ2UodGhpcy5wcm9wcy52YWx1ZXMuY29uY2F0KG5ld1ZhbHVlKSk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UodGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHRpb24gPT4gKG9wdGlvbi52YWx1ZSA9PT0gbmV3VmFsdWUudmFsdWVcbiAgICAgICAgICAgICAgICA/IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbiwgeyBkaXNhYmxlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIDogb3B0aW9uKSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xlYXJJbnB1dFZhbHVlKCk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5zdGF5Rm9jdXNlZCA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5wcm9wcy5zdGF5Rm9jdXNlZCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGlkZU9wdGlvbnMoKTtcbiAgICB9XG4gICAgcmVtb3ZlVmFsdWUoaW5kZXgpIHtcbiAgICAgICAgbGV0IG5ld1ZhbHVlcyA9IFtdO1xuICAgICAgICBsZXQgcmVtb3ZlZFZhbHVlO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZXMgPSB0aGlzLnByb3BzLnZhbHVlcy5zbGljZSgwLCB0aGlzLnByb3BzLnZhbHVlcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIHJlbW92ZWRWYWx1ZSA9IHRoaXMucHJvcHMudmFsdWVzW3RoaXMucHJvcHMudmFsdWVzLmxlbmd0aCAtIDFdLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV3VmFsdWVzID0gdGhpcy5wcm9wcy52YWx1ZXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlZFZhbHVlID0gdi52YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaSAhPT0gaW5kZXg7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKHRoaXMucHJvcHMub3B0aW9ucy5tYXAob3B0aW9uID0+IChvcHRpb24udmFsdWUgPT09IHJlbW92ZWRWYWx1ZVxuICAgICAgICAgICAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9uLCB7IGRpc2FibGVkOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIDogb3B0aW9uKSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMub25WYWx1ZXNDaGFuZ2UobmV3VmFsdWVzKTtcbiAgICB9XG4gICAgY2xlYXJJbnB1dFZhbHVlKCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UoJycpO1xuICAgIH1cbiAgICBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDggJiYgIXRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWUoLTEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRvZG9cbiAgICAgICAgLy8gaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgdGhpcy5zdGF0ZS5zaG93T3B0aW9ucykge1xuICAgICAgICAvLyAgIHRoaXMuYWRkVmFsdWUoKVxuICAgICAgICAvLyB9XG4gICAgfVxuICAgIGZvY3VzSW5wdXQoKSB7XG4gICAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICB9XG4gICAgaGlkZU9wdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd09wdGlvbnM6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaG93T3B0aW9ucyhlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd09wdGlvbnM6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVPcHRpb25zKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVPcHRpb25zKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbGFiZWwgPSB0aGlzLnByb3BzLmxhYmVsID8gdGhpcy5wcm9wcy5sYWJlbCA6IG51bGw7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgPyB0aGlzLnByb3BzLnZhbHVlIDogJyc7XG4gICAgICAgIGxldCB2YWx1ZXMgPSB0aGlzLnByb3BzLnZhbHVlcztcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnMgPyB0aGlzLnByb3BzLm9wdGlvbnMgOiBbXTtcbiAgICAgICAgbGV0IGlucHV0V2lkdGggPSB2YWx1ZXMubGVuZ3RoID4gMCA/ICh2YWx1ZS5sZW5ndGggPT09IDAgPyAxNiA6IHZhbHVlLmxlbmd0aCAqIDE2KSA6ICcxMDAlJztcbiAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gdmFsdWVzLmxlbmd0aCA+IDAgPyAnJyA6IHRoaXMucHJvcHMucGxhY2Vob2xkZXI7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSAnc2VsZWN0aXplLWlucHV0JyArICh0aGlzLnN0YXRlLmZvY3VzID09PSB0cnVlID8gJyBmb2N1cycgOiAnJykgKyAodmFsdWVzLmxlbmd0aCA9PT0gMCA/ICcgZW1wdHknIDogJycpO1xuICAgICAgICBsZXQgYWRkTmV3VmFsdWUgPSB0aGlzLnByb3BzLmFkZE5ld1ZhbHVlID8gdGhpcy5wcm9wcy5hZGROZXdWYWx1ZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IGBzZWxlY3RpemUtaW5wdXQtd3JhcCAke3RoaXMucHJvcHMuY2xhc3NOYW1lID8gdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAnJ31gLnRyaW0oKX0sIGxhYmVsID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7Y2xhc3NOYW1lOiBcImZvcm0tbGFiZWxcIn0sIGxhYmVsKSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IGNsYXNzTmFtZSwgb25DbGljazogZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd09wdGlvbnMoZSk7XG4gICAgICAgIH19LCB2YWx1ZXMubWFwKCh2LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7a2V5OiBpbmRleCwgY2xhc3NOYW1lOiBcInNlbGVjdGl6ZS10YWdcIn0sIHYubmFtZSwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7c2l6ZTogJ3NtYWxsJywgbmFtZTogXCJjbG9zZVwiLCBvbkNsaWNrOiBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVZhbHVlKGluZGV4KTtcbiAgICAgICAgICAgIH19KSkpO1xuICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtzdHlsZTogeyB3aWR0aDogaW5wdXRXaWR0aCB9LCByZWY6IHJlZiA9PiB7IHRoaXMuaW5wdXQgPSByZWY7IH0sIHZhbHVlOiB2YWx1ZSwgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLCBvbkJsdXI6IGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiBmYWxzZSB9KTtcbiAgICAgICAgfSwgb25Gb2N1czogZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IHRydWUgfSk7XG4gICAgICAgIH0sIG9uQ2hhbmdlOiBlID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25JbnB1dENoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH0sIG9uS2V5RG93bjogZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUtleVByZXNzKGUpO1xuICAgICAgICB9fSkpLCAodGhpcy5zdGF0ZS5zaG93T3B0aW9ucykgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtjbGFzc05hbWU6IFwic2VsZWN0aXplLXF1ZXJ5LXJlc3VsdHNcIn0sIG9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7a2V5OiBpbmRleCwgY2xhc3NOYW1lOiBcImRpc2FibGVkXCJ9LCBvcHRpb24ubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7a2V5OiBpbmRleCwgb25DbGljazogZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRWYWx1ZShvcHRpb24pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uT3B0aW9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk9wdGlvbkNsaWNrKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIG9wdGlvbi5uYW1lKSkpO1xuICAgICAgICB9KSwgYWRkTmV3VmFsdWUgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtvbkNsaWNrOiBlID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25BZGROZXdWYWx1ZSh0aGlzLnByb3BzLnZhbHVlKTtcbiAgICAgICAgfSwgY2xhc3NOYW1lOiBcImFkZFwifSwgXCLmt7vliqAgXCIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgdGhpcy5wcm9wcy52YWx1ZSkpKSA6IG51bGwpKSA6IG51bGwpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBTZWxlY3RpemVJbnB1dDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL3NlbGVjdGl6ZS1pbnB1dC50c3hcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Qm9va1ZpZXcoKSB7XG4gICAgbGV0IGFzcGVjdFJhdGlvID0gNyAvIDk7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDU0MCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyZWVuOiAncGhvbmUnLFxuICAgICAgICAgICAgcGFnZVdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgICAgIHBhZ2VIZWlnaHQ6IHdpbmRvdy5pbm5lcldpZHRoIC8gYXNwZWN0UmF0aW9cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JlZW46ICdoZCcsXG4gICAgICAgICAgICBwYWdlV2lkdGg6IDcwMCxcbiAgICAgICAgICAgIHBhZ2VIZWlnaHQ6IDcwMCAvIGFzcGVjdFJhdGlvXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGxvY2tTY3JvbGwoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVubG9ja1Njcm9sbCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xufVxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldEJvb2tWaWV3LFxuICAgIGxvY2tTY3JvbGwsXG4gICAgdW5sb2NrU2Nyb2xsXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3V0aWxzL3ZpZXcudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zaWRlLWVmZmVjdFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3Qtc2lkZS1lZmZlY3RcIlxuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IElucHV0IGZyb20gJy4uL2VsZW1lbnRzL2Zvcm0vaW5wdXQnO1xuaW1wb3J0IHsgY2hhbmdlVmFsdWUgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5jbGFzcyBSSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHtuYW1lOiB0aGlzLnByb3BzLm5hbWUsIHZhbHVlOiBfLmdldCh0aGlzLnByb3BzLmVsZW1lbnRzW3RoaXMucHJvcHMuc3ltYm9sXSwgJ3ZhbHVlJywgJycpLCBwbGFjZWhvbGRlcjogdGhpcy5wcm9wcy5wbGFjZWhvbGRlciwgb25DaGFuZ2U6IGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hhbmdlVmFsdWUodGhpcy5wcm9wcy5zeW1ib2wsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH19KSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiAoe1xuICAgIGVsZW1lbnRzOiBzdGF0ZS5lbGVtZW50c1xufSksIHsgY2hhbmdlVmFsdWUgfSkoUklucHV0KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9yLWVsZW1lbnRzL3ItaW5wdXQudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi4vZWxlbWVudHMvZm9ybS90ZXh0YXJlYSc7XG5pbXBvcnQgeyBjaGFuZ2VWYWx1ZSB9IGZyb20gJy4uL2FjdGlvbnMnO1xuY2xhc3MgUlRleHRhcmVhIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRhcmVhLCB7dmFsdWU6IF8uZ2V0KHRoaXMucHJvcHMuZWxlbWVudHNbdGhpcy5wcm9wcy5zeW1ib2xdLCAndmFsdWUnLCAnJyksIHBsYWNlaG9sZGVyOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyLCBvbkNoYW5nZTogZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZSh0aGlzLnByb3BzLnN5bWJvbCwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfX0pKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+ICh7XG4gICAgZWxlbWVudHM6IHN0YXRlLmVsZW1lbnRzXG59KSwgeyBjaGFuZ2VWYWx1ZSB9KShSVGV4dGFyZWEpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3ItZWxlbWVudHMvci10ZXh0YXJlYS50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2VsZW1lbnRzL2xheW91dC9jb250YWluZXInO1xuY2xhc3MgQ29uc29sZUJyYW5kaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc0Ryb3Bkb3duTWVudVZpc2libGU6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvZ2dsZURyb3Bkb3duTWVudSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0Ryb3Bkb3duTWVudVZpc2libGU6ICF0aGlzLnN0YXRlLmlzRHJvcGRvd25NZW51VmlzaWJsZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgdXNlcm5hbWUgPSB0aGlzLnByb3BzLnVzZXJuYW1lO1xuICAgICAgICBsZXQgaXNBZG1pbiA9IHRoaXMucHJvcHMuaXNBZG1pbiA/IHRoaXMucHJvcHMuaXNBZG1pbiA6ICdmYWxzZSc7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImJyYW5kaW5nIGNvbnNvbGUtYnJhbmRpbmdcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCB7aXNGbHVpZDogdHJ1ZSwgY2xhc3NOYW1lOiBcImNsZWFyZml4XCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7Y2xhc3NOYW1lOiBcImxvZ28gbGVmdFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiL2NvbnNvbGVcIn0sIFwicmVhZHJcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwic2VwXCJ9LCBcInxcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwic3ViXCJ9LCBcIkNvbnNvbGVcIikpLCB1c2VybmFtZSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtvbk1vdXNlTGVhdmU6IHRoaXMudG9nZ2xlRHJvcGRvd25NZW51LmJpbmQodGhpcyksIG9uTW91c2VFbnRlcjogdGhpcy50b2dnbGVEcm9wZG93bk1lbnUuYmluZCh0aGlzKSwgY2xhc3NOYW1lOiBcIm5hdiByaWdodFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJ1c2VybmFtZVwifSwgdXNlcm5hbWUsIGlzQWRtaW4gPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJiYWRnZS1kYXJrXCJ9LCBcIkFkbWluXCIpKSA6IG51bGwpLCB0aGlzLnN0YXRlLmlzRHJvcGRvd25NZW51VmlzaWJsZSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJkcm9wZG93bi1tZW51XCJ9LCBpc0FkbWluID09PSB0cnVlID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCIvXCJ9LCBcIkJhY2sgdG8gcmVhZHJcIikpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogYC9wcm9maWxlLyR7dXNlcm5hbWV9YH0sIFwi5oiR55qE6LSm5Y+3XCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiAnL2xvZ291dCd9LCBcIumAgOWHulwiKSkpKSA6IG51bGwpKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibmF2IHJpZ2h0XCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJuYXYtbGlua3NcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvc2lnbmluXCJ9LCBcIueZu+W9lVwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvc2lnbnVwXCJ9LCBcIuazqOWGjFwiKSkpKSkpKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvbnNvbGVCcmFuZGluZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb21wb25lbnRzL2NvbnNvbGUtYnJhbmRpbmcudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uLCBjaGFuZ2VWYWx1ZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgQnV0dG9uLCBTZWxlY3RpemVJbnB1dCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0nO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uLy4uL2VsZW1lbnRzL01vZGFsJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgYXBpcyBmcm9tICcuLi8uLi91dGlscy9hcGlzJztcbmltcG9ydCB7IGZldGNoRG91YmFuQm9va3MgfSBmcm9tICcuLi8uLi91dGlscy9hcGlzLXRoaXJkLXBhcnR5JztcbmltcG9ydCBSSW5wdXQgZnJvbSAnLi4vLi4vci1lbGVtZW50cy9yLWlucHV0JztcbmltcG9ydCBSVGV4dGFyZWEgZnJvbSAnLi4vLi4vci1lbGVtZW50cy9yLXRleHRhcmVhJztcbmNvbnN0IHN5bHMgPSB7XG4gICAgaW5wdXRCb29rTmFtZTogU3ltYm9sKCdpbnB1dEJvb2tOYW1lJyksXG4gICAgaW5wdXRCb29rQXV0aG9yOiBTeW1ib2woJ2lucHV0Qm9va0F1dGhvcicpLFxuICAgIGlucHV0QXV0aG9yTmFtZTogU3ltYm9sKCdpbnB1dEF1dGhvck5hbWUnKSxcbiAgICBpbnB1dEF1dGhvclNsdWc6IFN5bWJvbCgnaW5wdXRBdXRob3JTbHVnJyksXG4gICAgaW5wdXRCb29rQ292ZXI6IFN5bWJvbCgnaW5wdXRCb29rQ292ZXInKSxcbiAgICB0ZXh0YXJlYUF1dGhvckRlc2M6IFN5bWJvbCgndGV4dGFyZWFBdXRob3JEZXNjJyksXG4gICAgdGV4dGFyZWFCb29rRGVzYzogU3ltYm9sKCd0ZXh0YXJlYUJvb2tEZXNjJyksXG4gICAgdGV4dGFyZWFCb29rQ29udGVudDogU3ltYm9sKCd0ZXh0YXJlYUJvb2tDb250ZW50Jylcbn07XG5jbGFzcyBBZGRCb29rIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZGVmYXVsdFN0YXRlID0ge1xuICAgICAgICAgICAgYm9va1RpdGxlOiBbXSxcbiAgICAgICAgICAgIGJvb2tBdXRob3I6IFtdLFxuICAgICAgICAgICAgYXV0aG9yUmVzdWx0czogW10sXG4gICAgICAgICAgICBpc0FkZEF1dGhvck1vZGFsVmlzaWJsZTogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdFN0YXRlKTtcbiAgICAgICAgLy8gdG9kb1xuICAgICAgICAvLyB0aGlzLmZldGNoRG91YmFuQm9va3MgPSBfLmRlYm91bmNlKGZldGNoRG91YmFuQm9va3MsIDE1MClcbiAgICB9XG4gICAgcmVzZXRGb3JtKCkge1xuICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMuaW5wdXRCb29rQ292ZXIsICcnKTtcbiAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZShzeWxzLnRleHRhcmVhQm9va0Rlc2MsICcnKTtcbiAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZShzeWxzLnRleHRhcmVhQm9va0NvbnRlbnQsICcnKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmRlZmF1bHRTdGF0ZSk7XG4gICAgfVxuICAgIGFkZEJvb2soKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICB0aXRsZTogdGhpcy5zdGF0ZS5ib29rVGl0bGUubGVuZ3RoICE9PSAwID8gdGhpcy5zdGF0ZS5ib29rVGl0bGVbMF0udmFsdWUgOiAnJyxcbiAgICAgICAgICAgIGF1dGhvcjogdGhpcy5zdGF0ZS5ib29rQXV0aG9yLm1hcChhID0+IGEudmFsdWUpLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMucHJvcHMuZWxlbWVudHNbc3lscy50ZXh0YXJlYUJvb2tEZXNjXS52YWx1ZSxcbiAgICAgICAgICAgIGNvdmVyOiB0aGlzLnByb3BzLmVsZW1lbnRzW3N5bHMuaW5wdXRCb29rQ292ZXJdLnZhbHVlLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5wcm9wcy5lbGVtZW50c1tzeWxzLnRleHRhcmVhQm9va0NvbnRlbnRdLnZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIGFwaXMuYWRkQm9vayhkYXRhKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oJ+a3u+WKoOaIkOWKnycpO1xuICAgICAgICAgICAgdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWRkQXV0aG9yKCkge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5lbGVtZW50c1tzeWxzLmlucHV0QXV0aG9yTmFtZV0udmFsdWUsXG4gICAgICAgICAgICBzbHVnOiB0aGlzLnByb3BzLmVsZW1lbnRzW3N5bHMuaW5wdXRBdXRob3JTbHVnXS52YWx1ZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLnByb3BzLmVsZW1lbnRzW3N5bHMudGV4dGFyZWFBdXRob3JEZXNjXS52YWx1ZVxuICAgICAgICB9O1xuICAgICAgICBhcGlzLmFkZEF1dGhvcihkYXRhKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oJ+a3u+WKoOaIkOWKnycpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSByZXN1bHQub3BzWzBdLmlkO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYm9va0F1dGhvcjogWy4uLnRoaXMuc3RhdGUuYm9va0F1dGhvciwgeyBuYW1lOiBkYXRhLm5hbWUsIHZhbHVlOiBpZCB9XSxcbiAgICAgICAgICAgICAgICBpc0FkZEF1dGhvck1vZGFsVmlzaWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZShzeWxzLmlucHV0Qm9va0F1dGhvciwgJycpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZWFyY2hCb29rcyhxdWVyeSkge1xuICAgICAgICBpZiAocXVlcnkgIT09ICcnKSB7XG4gICAgICAgICAgICBmZXRjaERvdWJhbkJvb2tzKHF1ZXJ5KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNPZkJvb2tUaXRsZTogcmVzLmJvb2tzLm1hcChib29rID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBib29rLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGJvb2sudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGJvb2suc3VtbWFyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3ZlcjogYm9vay5pbWFnZXMubGFyZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiBib29rLmF1dGhvci5qb2luKCcsICcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VhcmNoQXV0aG9ycyhxdWVyeSkge1xuICAgICAgICBpZiAocXVlcnkgIT09ICcnKSB7XG4gICAgICAgICAgICBhcGlzLnNlYXJjaEF1dGhvcnMocXVlcnkpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zT2ZCb29rQXV0aG9yOiByZXNwb25zZS5tYXAociA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHIuaWRcbiAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG9wdGlvbnNPZkJvb2tBdXRob3I6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbCwge3dpZHRoOiA2MDAsIGlzVmlzaWJsZTogdGhpcy5zdGF0ZS5pc0FkZEF1dGhvck1vZGFsVmlzaWJsZSwgb25SZXF1ZXN0Q2xvc2U6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGlzQWRkQXV0aG9yTW9kYWxWaXNpYmxlOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH19LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge2NsYXNzTmFtZTogXCJwYWdlLXRpdGxlXCIsIHN0eWxlOiB7IG1hcmdpblRvcDogMCB9fSwgXCJBZGQgYXV0aG9yXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJJbnB1dCwge3BsYWNlaG9sZGVyOiBcIk5hbWVcIiwgc3ltYm9sOiBzeWxzLmlucHV0QXV0aG9yTmFtZX0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJJbnB1dCwge3BsYWNlaG9sZGVyOiBcIlNsdWdcIiwgc3ltYm9sOiBzeWxzLmlucHV0QXV0aG9yU2x1Z30pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJUZXh0YXJlYSwge3N5bWJvbDogc3lscy50ZXh0YXJlYUF1dGhvckRlc2MsIHBsYWNlaG9sZGVyOiBcIkRlc2NyaXB0aW9uXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHtvbkNsaWNrOiBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQXV0aG9yKCk7XG4gICAgICAgIH19LCBcIkFkZFwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtdGl0bGVcIn0sIFwiQWRkIEJvb2tcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0aXplSW5wdXQsIHtwbGFjZWhvbGRlcjogXCJCb29rIHRpdGxlXCIsIG9uSW5wdXRDaGFuZ2U6IG5ld1ZhbHVlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQm9va3MobmV3VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZShzeWxzLmlucHV0Qm9va05hbWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSwgdmFsdWU6IF8uZ2V0KHRoaXMucHJvcHMuZWxlbWVudHNbc3lscy5pbnB1dEJvb2tOYW1lXSwgJ3ZhbHVlJywgJycpLCBvblZhbHVlc0NoYW5nZTogbmV3VmFsdWVzID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGJvb2tUaXRsZTogbmV3VmFsdWVzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgb3B0aW9uczogdGhpcy5zdGF0ZS5vcHRpb25zT2ZCb29rVGl0bGUsIHZhbHVlczogdGhpcy5zdGF0ZS5ib29rVGl0bGUsIG9uQWRkTmV3VmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgIC8vIHRvZG9cbiAgICAgICAgfSwgb25PcHRpb25DbGljazogb3B0aW9uID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hhbmdlVmFsdWUoc3lscy5pbnB1dEJvb2tDb3Zlciwgb3B0aW9uLmFkZGl0aW9uYWwuY292ZXIpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZShzeWxzLmlucHV0Qm9va0F1dGhvciwgb3B0aW9uLmFkZGl0aW9uYWwuYXV0aG9yKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hhbmdlVmFsdWUoc3lscy50ZXh0YXJlYUJvb2tEZXNjLCBvcHRpb24uYWRkaXRpb25hbC5kZXNjcmlwdGlvbik7XG4gICAgICAgIH19KSwgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3RpemVJbnB1dCwge3BsYWNlaG9sZGVyOiBcIkJvb2sgYXV0aG9yXCIsIG9uSW5wdXRDaGFuZ2U6IG5ld1ZhbHVlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQXV0aG9ycyhuZXdWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMuaW5wdXRCb29rQXV0aG9yLCBuZXdWYWx1ZSk7XG4gICAgICAgIH0sIHZhbHVlOiBfLmdldCh0aGlzLnByb3BzLmVsZW1lbnRzW3N5bHMuaW5wdXRCb29rQXV0aG9yXSwgJ3ZhbHVlJywgJycpLCBvblZhbHVlc0NoYW5nZTogbmV3VmFsdWVzID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGJvb2tBdXRob3I6IG5ld1ZhbHVlc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIG9wdGlvbnM6IHRoaXMuc3RhdGUub3B0aW9uc09mQm9va0F1dGhvciwgdmFsdWVzOiB0aGlzLnN0YXRlLmJvb2tBdXRob3IsIGFkZE5ld1ZhbHVlOiB0cnVlLCBvbkFkZE5ld1ZhbHVlOiB2YWx1ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMuaW5wdXRBdXRob3JOYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAvLyB0b2RvXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMuaW5wdXRBdXRob3JTbHVnLCB2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMudGV4dGFyZWFBdXRob3JEZXNjLCAnJyk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc0FkZEF1dGhvck1vZGFsVmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9fSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUklucHV0LCB7cGxhY2Vob2xkZXI6IFwiQ292ZXJcIiwgc3ltYm9sOiBzeWxzLmlucHV0Qm9va0NvdmVyfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUlRleHRhcmVhLCB7cGxhY2Vob2xkZXI6IFwiRGVzY3JpcHRpb25cIiwgc3ltYm9sOiBzeWxzLnRleHRhcmVhQm9va0Rlc2N9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSVGV4dGFyZWEsIHtwbGFjZWhvbGRlcjogXCJQYXN0ZSBib29rIGNvbnRlbnQgaGVyZVwiLCBzeW1ib2w6IHN5bHMudGV4dGFyZWFCb29rQ29udGVudH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge29uQ2xpY2s6IGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5hZGRCb29rKCk7XG4gICAgICAgIH19LCBcIkFkZFwiKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgICBub3RpZmljYXRpb246IHN0YXRlLmNvbXBvbmVudHMubm90aWZpY2F0aW9uLFxuICAgIGVsZW1lbnRzOiBzdGF0ZS5lbGVtZW50c1xufSksIHsgc2VuZE5vdGlmaWNhdGlvbiwgY2hhbmdlVmFsdWUgfSkoQWRkQm9vayk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9jb25zb2xlL2FkZC1ib29rLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgY2hhbmdlVmFsdWUgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcbmltcG9ydCB7IEJ1dHRvbiwgU2VsZWN0aXplSW5wdXQgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9mb3JtJztcbmltcG9ydCBhcGlzIGZyb20gJy4uLy4uL3V0aWxzL2FwaXMnO1xuaW1wb3J0IFJJbnB1dCBmcm9tICcuLi8uLi9yLWVsZW1lbnRzL3ItaW5wdXQnO1xuaW1wb3J0IFJUZXh0YXJlYSBmcm9tICcuLi8uLi9yLWVsZW1lbnRzL3ItdGV4dGFyZWEnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmNvbnN0IHN5bHMgPSB7XG4gICAgaW5wdXRDb2xsZWN0aW9uTmFtZTogU3ltYm9sKCdpbnB1dENvbGxlY3Rpb25OYW1lJyksXG4gICAgaW5wdXRCb29rTmFtZTogU3ltYm9sKCdpbnB1dEJvb2tOYW1lJyksXG4gICAgdGV4dGFyZWFDb2xsZWN0aW9uRGVzYzogU3ltYm9sKCd0ZXh0YXJlYUNvbGxlY3Rpb25EZXNjJylcbn07XG5jbGFzcyBBZGRDb2xsZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZGVmYXVsdFN0YXRlID0ge1xuICAgICAgICAgICAgb3B0aW9uc09mQm9va3M6IFtdLFxuICAgICAgICAgICAgdmFsdWVzT2ZCb29rczogW10sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRTdGF0ZSk7XG4gICAgICAgIHRoaXMuYWRkQ29sbGVjdGlvbiA9IHRoaXMuYWRkQ29sbGVjdGlvbi5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICByZXNldEZvcm0oKSB7XG4gICAgICAgIHRoaXMucHJvcHMuY2hhbmdlVmFsdWUoc3lscy5pbnB1dENvbGxlY3Rpb25OYW1lLCAnJyk7XG4gICAgICAgIHRoaXMucHJvcHMuY2hhbmdlVmFsdWUoc3lscy50ZXh0YXJlYUNvbGxlY3Rpb25EZXNjLCAnJyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5kZWZhdWx0U3RhdGUpO1xuICAgIH1cbiAgICBhZGRDb2xsZWN0aW9uKCkge1xuICAgICAgICBsZXQgbmFtZSA9IHRoaXMucHJvcHMuZWxlbWVudHNbc3lscy5pbnB1dENvbGxlY3Rpb25OYW1lXS52YWx1ZTtcbiAgICAgICAgbGV0IGl0ZW1zID0gdGhpcy5zdGF0ZS52YWx1ZXNPZkJvb2tzLm1hcChhID0+IGEudmFsdWUpO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSB0aGlzLnByb3BzLmVsZW1lbnRzW3N5bHMudGV4dGFyZWFDb2xsZWN0aW9uRGVzY10udmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IG5hbWUsIGl0ZW1zLCBkZXNjcmlwdGlvbiwgY3JlYXRvcjogdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIuaWQgfTtcbiAgICAgICAgYXBpcy5hZGRDb2xsZWN0aW9uKGRhdGEpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5re75Yqg5oiQ5Yqf77yBJyk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZWFyY2hCb29rcyhxdWVyeSkge1xuICAgICAgICBpZiAocXVlcnkgIT09ICcnKSB7XG4gICAgICAgICAgICBhcGlzLnNlYXJjaEJvb2tzKHF1ZXJ5KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc09mQm9va3M6IHJlc3BvbnNlLm1hcChyID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiByLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHIuaWRcbiAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzZWFyY2hUYWdzKHF1ZXJ5KSB7XG4gICAgLy8gICBpZihxdWVyeSAhPT0gJycpIHtcbiAgICAvLyAgICAgYXBpcy5zZWFyY2hUYWdzKHF1ZXJ5KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgIHRhZ1Jlc3VsdHM6IHJlc3BvbnNlXG4gICAgLy8gICAgICAgfSlcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge2NsYXNzTmFtZTogXCJwYWdlLXRpdGxlXCJ9LCBcIkFkZCBDb2xsZWN0aW9uXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJJbnB1dCwge3N5bWJvbDogc3lscy5pbnB1dENvbGxlY3Rpb25OYW1lLCBwbGFjZWhvbGRlcjogXCJOYW1lXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3RpemVJbnB1dCwge3BsYWNlaG9sZGVyOiBcIkJvb2tzXCIsIG9uSW5wdXRDaGFuZ2U6IG5ld1ZhbHVlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQm9va3MobmV3VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZShzeWxzLmlucHV0Qm9va05hbWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSwgdmFsdWU6IF8uZ2V0KHRoaXMucHJvcHMuZWxlbWVudHNbc3lscy5pbnB1dEJvb2tOYW1lXSwgJ3ZhbHVlJywgJycpLCBvblZhbHVlc0NoYW5nZTogbmV3VmFsdWVzID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHZhbHVlc09mQm9va3M6IG5ld1ZhbHVlc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIG9wdGlvbnM6IHRoaXMuc3RhdGUub3B0aW9uc09mQm9va3MsIHZhbHVlczogdGhpcy5zdGF0ZS52YWx1ZXNPZkJvb2tzfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUlRleHRhcmVhLCB7c3ltYm9sOiBzeWxzLnRleHRhcmVhQ29sbGVjdGlvbkRlc2MsIHBsYWNlaG9sZGVyOiBcIkRlc2NyaXB0aW9uXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHtvbkNsaWNrOiB0aGlzLmFkZENvbGxlY3Rpb259LCBcIkFkZFwiKSkpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5vdGlmaWNhdGlvbjogc3RhdGUuY29tcG9uZW50cy5ub3RpZmljYXRpb24sXG4gICAgICAgIGVsZW1lbnRzOiBzdGF0ZS5lbGVtZW50cyxcbiAgICAgICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvblxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBzZW5kTm90aWZpY2F0aW9uLCBjaGFuZ2VWYWx1ZSB9KShBZGRDb2xsZWN0aW9uKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2NvbnNvbGUvYWRkLWNvbGxlY3Rpb24udHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vZWxlbWVudHMvbGF5b3V0L2NvbnRhaW5lcic7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9pY29uJztcbmltcG9ydCBDb25zb2xlQnJhbmRpbmcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb25zb2xlLWJyYW5kaW5nJztcbmltcG9ydCB7IHVzZXJBdXRoLCBzZW5kTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgQWxlcnQgZnJvbSAnLi4vLi4vZWxlbWVudHMvYWxlcnQnO1xuaW1wb3J0IG1lbnVzIGZyb20gJy4vbWVudXMnO1xuY2xhc3MgQ29uc29sZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXNlckF1dGgoKTtcbiAgICB9XG4gICAgcmVuZGVyTWVudShtZW51TWFwcGluZywgY3VycmVudFBhdGgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRNZW51ID0ge1xuICAgICAgICAgICAgcm9vdEluZGV4OiAwLFxuICAgICAgICAgICAgc3ViSW5kZXg6IDBcbiAgICAgICAgfTtcbiAgICAgICAgbWVudU1hcHBpbmcuZm9yRWFjaCgoaXRlbSwgcm9vdEluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgc3ViSW5kZXg7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gaXRlbS5zdWJNZW51LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5wYXRoID09PSBjdXJyZW50UGF0aCkge1xuICAgICAgICAgICAgICAgICAgICBzdWJJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRNZW51LnJvb3RJbmRleCA9IHJvb3RJbmRleDtcbiAgICAgICAgICAgICAgICBjdXJyZW50TWVudS5zdWJJbmRleCA9IHN1YkluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHJvb3RNZW51ID0gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcIm5hdi1zaWRlIG5hdi1zaWRlLXJvb3RcIn0sIG1lbnVNYXBwaW5nLm1hcCgobWVudSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSBgbWVudS0ke21lbnUuY29tcG9uZW50fWA7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IGN1cnJlbnRNZW51LnJvb3RJbmRleCkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIGN1cnJlbnQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2tleTogaW5kZXgsIGNsYXNzTmFtZTogY2xhc3NOYW1lfSwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IGAvJHttZW51LnBhdGh9YH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwge25hbWU6IG1lbnUuY29tcG9uZW50fSkpKSk7XG4gICAgICAgIH0pKSk7XG4gICAgICAgIGxldCBzdWJNZW51ID0gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcIm5hdi1zaWRlIG5hdi1zaWRlLXN1YlwifSwgbWVudU1hcHBpbmdbY3VycmVudE1lbnUucm9vdEluZGV4XS5zdWJNZW51Lm1hcCgobWVudSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSBgbWVudS0ke21lbnUuY29tcG9uZW50fWA7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IGN1cnJlbnRNZW51LnN1YkluZGV4KSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgY3VycmVudCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7a2V5OiBpbmRleCwgY2xhc3NOYW1lOiBjbGFzc05hbWV9LCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogYC8ke21lbnUucGF0aH1gfSwgbWVudS5kaXNwbGF5TmFtZSkpKTtcbiAgICAgICAgfSkpKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwic2lkZWJhci1sZWZ0XCJ9LCByb290TWVudSwgc3ViTWVudSkpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBpc0FkbWluID0gdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIucm9sZSA9PT0gJ2FkbWluJyA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgbGV0IHVzZXJuYW1lID0gdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIudXNlcm5hbWUgPyB0aGlzLnByb3BzLnNlc3Npb24udXNlci51c2VybmFtZSA6IG51bGw7XG4gICAgICAgIGxldCBwYXRobmFtZSA9IHRoaXMucHJvcHMucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zID8gdGhpcy5wcm9wcy5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMucGF0aG5hbWUgOiAnY29uc29sZSc7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnNvbGVCcmFuZGluZywge2lzQWRtaW46IGlzQWRtaW4sIHVzZXJuYW1lOiB1c2VybmFtZX0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwge2lzRmx1aWQ6IHRydWV9LCB0aGlzLnByb3BzLm5vdGlmaWNhdGlvbnMuZmlsdGVyKG5vdGkgPT4gbm90aS52aXNpYmxlKS5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibm90aWZpY2F0aW9uc1wifSwgdGhpcy5wcm9wcy5ub3RpZmljYXRpb25zLm1hcCgobm90aSwgaW5kZXgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEFsZXJ0LCB7a2V5OiBpbmRleCwgdHlwZTogbm90aS50eXBlLCBtZXNzYWdlOiBub3RpLm1lc3NhZ2UsIHZpc2libGU6IG5vdGkudmlzaWJsZX0pKSkpKVxuICAgICAgICAgICAgOiBudWxsLCB0aGlzLnJlbmRlck1lbnUobWVudXMsIHBhdGhuYW1lKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbnRlbnRcIn0sIHRoaXMucHJvcHMuY2hpbGRyZW4pKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgICBub3RpZmljYXRpb25zOiBzdGF0ZS5jb21wb25lbnRzLm5vdGlmaWNhdGlvbnMsXG4gICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvbixcbiAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nXG59KSwgeyBzZW5kTm90aWZpY2F0aW9uLCB1c2VyQXV0aCB9KShDb25zb2xlKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2NvbnNvbGUvaG9tZS50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBCb2R5IGZyb20gJy4uLy4uL3NpZGUtZWZmZWN0cy9ib2R5JztcbmltcG9ydCBhcGlzIGZyb20gJy4uLy4uL3V0aWxzL2FwaXMnO1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgZmV0Y2hCb29rcyB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuY2xhc3MgTWFuYWdlQm9va3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgc3RhdGljIGZldGNoRGF0YSh7IHN0b3JlIH0pIHtcbiAgICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGZldGNoQm9va3MoKSk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoQm9va3MoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgYm9va0xpc3ROZXdlc3QgPSB0aGlzLnByb3BzLmJvb2tMaXN0TmV3ZXN0ID8gdGhpcy5wcm9wcy5ib29rTGlzdE5ld2VzdCA6IG51bGw7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHksIHtjbGFzc05hbWU6IFwibWFuYWdlLWJvb2tzXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFwiSURcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBcIk5hbWVcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBcIkRhdGUgY3JlYXRlZFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFwiQWN0aW9uc1wiKSksIGJvb2tMaXN0TmV3ZXN0ID8gYm9va0xpc3ROZXdlc3QubWFwKChib29rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwge2tleTogaW5kZXh9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgYm9vay5pZCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBib29rLnRpdGxlKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIGJvb2suZGF0ZUNyZWF0ZWQpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge29uQ2xpY2s6IGUgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBhcGlzLmRlbGV0ZUJvb2soYm9vay5pZCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oJ+WIoOmZpOaIkOWKn++8gScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoQm9va3MoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9LCBocmVmOiBcIiNcIn0sIFwiRGVsZXRlXCIpKSkpO1xuICAgICAgICB9KSA6IG51bGwpKSkpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBib29rTGlzdE5ld2VzdDogc3RhdGUucGFnaW5hdGlvbi5ib29rcy5uZXdlc3RcbiAgICAgICAgICAgID8gc3RhdGUucGFnaW5hdGlvbi5ib29rcy5uZXdlc3QuaWRzLm1hcChpZCA9PiBzdGF0ZS5lbnRpdGllcy5ib29rc1tpZF0pXG4gICAgICAgICAgICA6IFtdLFxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBmZXRjaEJvb2tzLCBzZW5kTm90aWZpY2F0aW9uIH0pKE1hbmFnZUJvb2tzKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2NvbnNvbGUvbWFuYWdlLWJvb2tzLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZmV0Y2hVc2VyTGlzdCB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuY2xhc3MgTWFuYWdlVXNlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hVc2VyTGlzdCgpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB1c2VyTGlzdEFsbCA9IHRoaXMucHJvcHMudXNlckxpc3RBbGwgPyB0aGlzLnByb3BzLnVzZXJMaXN0QWxsIDogW107XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRib2R5XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgXCJJRFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFwiTmFtZVwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFwiRGF0ZSBjcmVhdGVkXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgXCJBY3Rpb25zXCIpKSwgdXNlckxpc3RBbGwubWFwKCh1c2VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwge2tleTogaW5kZXh9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgdXNlci5pZCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCB1c2VyLnVzZXJuYW1lKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIHVzZXIuZGF0ZUNyZWF0ZWQpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiI1wifSwgXCJEZWxldGVcIikpKSk7XG4gICAgICAgIH0pKSkpKTtcbiAgICB9XG59XG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gICAgY29uc3QgdHlwZSA9ICdhbGwnO1xuICAgIGNvbnN0IHsgcGFnaW5hdGlvbjogeyB1c2VyTGlzdCB9LCBlbnRpdGllczogeyB1c2VycyB9IH0gPSBzdGF0ZTtcbiAgICBjb25zdCB1c2VyTGlzdFBhZ2luYXRpb24gPSB1c2VyTGlzdFt0eXBlXTtcbiAgICBjb25zdCB1c2VyTGlzdEFsbCA9IHVzZXJMaXN0UGFnaW5hdGlvbiA/IHVzZXJMaXN0UGFnaW5hdGlvbi5pZHMubWFwKGlkID0+IHVzZXJzW2lkXSkgOiBbXTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VyTGlzdEFsbFxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBmZXRjaFVzZXJMaXN0IH0pKE1hbmFnZVVzZXJzKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2NvbnNvbGUvbWFuYWdlLXVzZXJzLnRzeFxuICoqLyIsImNvbnN0IG1lbnVzID0gW1xuICAgIHtcbiAgICAgICAgY29tcG9uZW50OiAnYm9va3MnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJycsXG4gICAgICAgIHBhdGg6ICdjb25zb2xlL21hbmFnZWJvb2tzJyxcbiAgICAgICAgc3ViTWVudTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogJ21hbmFnZWJvb2tzJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ01hbmFnZSBCb29rcycsXG4gICAgICAgICAgICAgICAgcGF0aDogJ2NvbnNvbGUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogJ2FkZGJvb2snLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnQWRkIEJvb2snLFxuICAgICAgICAgICAgICAgIHBhdGg6ICdjb25zb2xlL2FkZGJvb2snXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogJ2FkZGNvbGxlY3Rpb24nLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnQWRkIENvbGxlY3Rpb24nLFxuICAgICAgICAgICAgICAgIHBhdGg6ICdjb25zb2xlL2NvbGxlY3Rpb24vbmV3J1xuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvbXBvbmVudDogJ3VzZXJzJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICcnLFxuICAgICAgICBwYXRoOiAnY29uc29sZS9tYW5hZ2V1c2VycycsXG4gICAgICAgIHN1Yk1lbnU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICdtYW5hZ2V1c2VycycsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdNYW5hZ2UgVXNlcnMnLFxuICAgICAgICAgICAgICAgIHBhdGg6ICdjb25zb2xlL21hbmFnZXVzZXJzJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvbXBvbmVudDogJ2RhdGFiYXNlJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICcnLFxuICAgICAgICBwYXRoOiAnY29uc29sZS9tYW5hZ2Vib29rcycsXG4gICAgICAgIHN1Yk1lbnU6IFtdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvbXBvbmVudDogJ3N0YXRpc3RpY3MnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJycsXG4gICAgICAgIHBhdGg6ICdjb25zb2xlL21hbmFnZWJvb2tzJyxcbiAgICAgICAgc3ViTWVudTogW11cbiAgICB9XG5dO1xuZXhwb3J0IGRlZmF1bHQgbWVudXM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9jb25zb2xlL21lbnVzLnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHZpZXcgZnJvbSAnLi4vdXRpbHMvdmlldyc7XG5pbXBvcnQgRmFkZSBmcm9tICcuLi9lbGVtZW50cy9hbmltYXRpb25zL2ZhZGUnO1xuY2xhc3MgTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1vZGFsSGVpZ2h0OiAwLFxuICAgICAgICAgICAgaXNNb2RhbEhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICBpc01vZGFsVmVydGljYWxDZW50ZXI6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRWaWV3ID0gdGhpcy5zZXRWaWV3LmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGhpZGVNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZSgpO1xuICAgICAgICB2aWV3LnVubG9ja1Njcm9sbCgpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zZXRWaWV3KTtcbiAgICB9XG4gICAgc2V0VmlldygpIHtcbiAgICAgICAgbGV0IG1vZGFsSGVpZ2h0ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLm1vZGFsKS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGxldCBpc01vZGFsVmVydGljYWxDZW50ZXIgPSB0cnVlO1xuICAgICAgICBsZXQgZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA8IG1vZGFsSGVpZ2h0KSB7XG4gICAgICAgICAgICBpc01vZGFsVmVydGljYWxDZW50ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ID4gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbW9kYWxIZWlnaHQsXG4gICAgICAgICAgICBpc01vZGFsVmVydGljYWxDZW50ZXIsXG4gICAgICAgICAgICBkb2N1bWVudEhlaWdodFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICBpZiAocHJldlByb3BzLmlzVmlzaWJsZSA9PT0gZmFsc2UgJiYgdGhpcy5wcm9wcy5pc1Zpc2libGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmlldygpO1xuICAgICAgICAgICAgdmlldy5sb2NrU2Nyb2xsKCk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zZXRWaWV3KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zZXRWaWV3KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBkZWZhdWx0Q2xhc3MgPSAnbW9kYWwnO1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWUgPyBgJHtkZWZhdWx0Q2xhc3N9ICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YCA6IGRlZmF1bHRDbGFzcztcbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5wcm9wcy53aWR0aCA/IHRoaXMucHJvcHMud2lkdGggOiA1MDA7XG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLnN0YXRlLm1vZGFsSGVpZ2h0O1xuICAgICAgICBsZXQgc3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZHJvcDoge30sXG4gICAgICAgICAgICB2ZXJ0aWNhbENlbnRlcjoge30sXG4gICAgICAgICAgICBzY3JvbGw6IHt9LFxuICAgICAgICAgICAgbW9kYWw6IHt9XG4gICAgICAgIH07XG4gICAgICAgIGxldCBpc1Zpc2libGUgPSB0aGlzLnByb3BzLmlzVmlzaWJsZSA/IHRoaXMucHJvcHMuaXNWaXNpYmxlIDogZmFsc2U7XG4gICAgICAgIC8vIGxldCBvblJlcXVlc3RDbG9zZSA9IHRoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2U/dGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZTpudWxsXG4gICAgICAgIHN0eWxlLmJhY2tkcm9wID0ge1xuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC44NiknLFxuICAgICAgICAgICAgekluZGV4OiA5OTkwLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdzY3JvbGwnXG4gICAgICAgIH07XG4gICAgICAgIHN0eWxlLnZlcnRpY2FsQ2VudGVyID0ge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IC1oZWlnaHQgLyAyLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogLXdpZHRoIC8gMixcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgICAgICB0b3A6ICc1MCUnXG4gICAgICAgIH07XG4gICAgICAgIHN0eWxlLnNjcm9sbCA9IHtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgbWFyZ2luOiAnNTBweCBhdXRvJ1xuICAgICAgICB9O1xuICAgICAgICBzdHlsZS5tb2RhbCA9IHtcbiAgICAgICAgICAgIHBhZGRpbmc6ICczMHB4JyxcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjU3KSdcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNNb2RhbFZlcnRpY2FsQ2VudGVyKSB7XG4gICAgICAgICAgICBzdHlsZS5tb2RhbCA9IE9iamVjdC5hc3NpZ24oe30sIHN0eWxlLm1vZGFsLCBzdHlsZS52ZXJ0aWNhbENlbnRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdHlsZS5tb2RhbCA9IE9iamVjdC5hc3NpZ24oe30sIHN0eWxlLm1vZGFsLCBzdHlsZS5zY3JvbGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGYWRlLCBudWxsLCBpc1Zpc2libGUgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7b25DbGljazogdGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKSwgY2xhc3NOYW1lOiBcIm1vZGFsLWJhY2tkcm9wXCIsIHN0eWxlOiBzdHlsZS5iYWNrZHJvcH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge3N0eWxlOiBzdHlsZS5tb2RhbCwgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHJlZjogXCJtb2RhbFwiLCBvbkNsaWNrOiAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfX0sIHRoaXMucHJvcHMuY2hpbGRyZW4pKSkgOiBudWxsKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvTW9kYWwudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IENvbnNvbGUgZnJvbSAnLi4vY29udGFpbmVycy9jb25zb2xlL2hvbWUnO1xuaW1wb3J0IE1hbmFnZUJvb2tzIGZyb20gJy4uL2NvbnRhaW5lcnMvY29uc29sZS9tYW5hZ2UtYm9va3MnO1xuaW1wb3J0IE1hbmFnZVVzZXJzIGZyb20gJy4uL2NvbnRhaW5lcnMvY29uc29sZS9tYW5hZ2UtdXNlcnMnO1xuaW1wb3J0IEFkZEJvb2sgZnJvbSAnLi4vY29udGFpbmVycy9jb25zb2xlL2FkZC1ib29rJztcbmltcG9ydCBBZGRDb2xsZWN0aW9uIGZyb20gJy4uL2NvbnRhaW5lcnMvY29uc29sZS9hZGQtY29sbGVjdGlvbic7XG5pbXBvcnQgTm9NYXRjaCBmcm9tICcuLi9jb250YWluZXJzL25vLW1hdGNoJztcbmV4cG9ydCBkZWZhdWx0IChSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwiL2NvbnNvbGVcIiwgY29tcG9uZW50OiBDb25zb2xlfSwgUmVhY3QuY3JlYXRlRWxlbWVudChJbmRleFJvdXRlLCB7Y29tcG9uZW50OiBNYW5hZ2VCb29rc30pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJtYW5hZ2Vib29rc1wiLCBjb21wb25lbnQ6IE1hbmFnZUJvb2tzfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcIm1hbmFnZXVzZXJzXCIsIGNvbXBvbmVudDogTWFuYWdlVXNlcnN9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwiYWRkYm9va1wiLCBjb21wb25lbnQ6IEFkZEJvb2t9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwiY29sbGVjdGlvbi9uZXdcIiwgY29tcG9uZW50OiBBZGRDb2xsZWN0aW9ufSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCIqXCIsIGNvbXBvbmVudDogTm9NYXRjaH0pKSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvcm91dGVzL2NvbnNvbGUudHN4XG4gKiovIiwiaW1wb3J0IGpzb25wIGZyb20gJy4vanNvbnAnO1xuaW1wb3J0IEFwaVJvb3RzIGZyb20gJy4uL2FwaS1jb25maWcvYXBpLXJvb3RzJztcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaERvdWJhbkJvb2tzKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIGpzb25wKGAke0FwaVJvb3RzLkRPVUJBTl9CT09LU30vc2VhcmNoP2NvdW50PTUmcT0ke3F1ZXJ5fWAsIHt9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9hcGlzLXRoaXJkLXBhcnR5LnRzXG4gKiovIiwiaW1wb3J0IGhhbmRsZVJlc3BvbnNlSnNvbiBmcm9tICcuL2hhbmRsZS1yZXNwb25zZS1qc29uJztcbmZ1bmN0aW9uIGpzb25wKGZ1bGxVcmwsIGNvbmZpZykge1xuICAgIGlmIChmdWxsVXJsLmluZGV4T2YoJ2RvdWJhbicpICE9PSAtMSkge1xuICAgICAgICBsZXQgaWQgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgICAgICAgbGV0IGpzb25wSWQgPSAnanNvbnAtJyArIGlkO1xuICAgICAgICBsZXQganNvbnBDYWxsYmFjayA9ICdqc29ucENhbGxiYWNrJyArIGlkO1xuICAgICAgICBsZXQganNvbnBDYWxsYmFja0RhdGEgPSBgX19KU09OUF9EQVRBXyR7aWR9X19gO1xuICAgICAgICB3aW5kb3dbanNvbnBDYWxsYmFja10gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgd2luZG93W2pzb25wQ2FsbGJhY2tEYXRhXSA9IGRhdGE7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgYCR7ZnVsbFVybH0mY2FsbGJhY2s9JHtqc29ucENhbGxiYWNrfWApO1xuICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdpZCcsIGpzb25wSWQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChqc29ucElkKSk7XG4gICAgICAgICAgICAgICAgbGV0IGpzb24gPSB3aW5kb3dbanNvbnBDYWxsYmFja0RhdGFdO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoaGFuZGxlUmVzcG9uc2VKc29uKGpzb24sIGNvbmZpZy5zY2hlbWEpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGpzb25wO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3V0aWxzL2pzb25wLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdC1kb21cIlxuICoqIG1vZHVsZSBpZCA9IDE2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==