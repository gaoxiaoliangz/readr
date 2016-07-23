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

	module.exports = __webpack_require__(92);


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
/* 15 */,
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
/* 28 */,
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
/* 35 */,
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
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _input = __webpack_require__(20);
	
	var _input2 = _interopRequireDefault(_input);
	
	var _actions = __webpack_require__(3);
	
	var _lodash = __webpack_require__(6);
	
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
	
	var _textarea = __webpack_require__(21);
	
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
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(5);
	
	var _container = __webpack_require__(12);
	
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
/* 74 */
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
	
	var _form = __webpack_require__(7);
	
	var _Modal = __webpack_require__(90);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _apis = __webpack_require__(17);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _apisThirdParty = __webpack_require__(95);
	
	var _rInput = __webpack_require__(53);
	
	var _rInput2 = _interopRequireDefault(_rInput);
	
	var _rTextarea = __webpack_require__(54);
	
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
/* 75 */
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
	
	var _form = __webpack_require__(7);
	
	var _apis = __webpack_require__(17);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _rInput = __webpack_require__(53);
	
	var _rInput2 = _interopRequireDefault(_rInput);
	
	var _rTextarea = __webpack_require__(54);
	
	var _rTextarea2 = _interopRequireDefault(_rTextarea);
	
	var _lodash = __webpack_require__(6);
	
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
/* 76 */
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
	
	var _container = __webpack_require__(12);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _icon = __webpack_require__(11);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _consoleBranding = __webpack_require__(63);
	
	var _consoleBranding2 = _interopRequireDefault(_consoleBranding);
	
	var _actions = __webpack_require__(3);
	
	var _alert = __webpack_require__(30);
	
	var _alert2 = _interopRequireDefault(_alert);
	
	var _menus = __webpack_require__(79);
	
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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _body = __webpack_require__(10);
	
	var _body2 = _interopRequireDefault(_body);
	
	var _apis = __webpack_require__(17);
	
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
/* 78 */
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
/* 79 */
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
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(23);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _view = __webpack_require__(44);
	
	var _view2 = _interopRequireDefault(_view);
	
	var _fade = __webpack_require__(31);
	
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
/* 91 */,
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactDom = __webpack_require__(23);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(5);
	
	var _console = __webpack_require__(94);
	
	var _console2 = _interopRequireDefault(_console);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactRouterRedux = __webpack_require__(18);
	
	var _configureStore = __webpack_require__(41);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var store = (0, _configureStore2.default)();
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);
	(0, _reactDom.render)(_react2.default.createElement(_reactRedux.Provider, { store: store }, _react2.default.createElement(_reactRouter.Router, { history: history, routes: _console2.default })), document.getElementById('root'));

/***/ },
/* 93 */,
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(5);
	
	var _home = __webpack_require__(76);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _manageBooks = __webpack_require__(77);
	
	var _manageBooks2 = _interopRequireDefault(_manageBooks);
	
	var _manageUsers = __webpack_require__(78);
	
	var _manageUsers2 = _interopRequireDefault(_manageUsers);
	
	var _addBook = __webpack_require__(74);
	
	var _addBook2 = _interopRequireDefault(_addBook);
	
	var _addCollection = __webpack_require__(75);
	
	var _addCollection2 = _interopRequireDefault(_addCollection);
	
	var _noMatch = __webpack_require__(29);
	
	var _noMatch2 = _interopRequireDefault(_noMatch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createElement(_reactRouter.Router, null, _react2.default.createElement(_reactRouter.Route, { path: "/console", component: _home2.default }, _react2.default.createElement(_reactRouter.IndexRoute, { component: _manageBooks2.default }), _react2.default.createElement(_reactRouter.Route, { path: "managebooks", component: _manageBooks2.default }), _react2.default.createElement(_reactRouter.Route, { path: "manageusers", component: _manageUsers2.default }), _react2.default.createElement(_reactRouter.Route, { path: "addbook", component: _addBook2.default }), _react2.default.createElement(_reactRouter.Route, { path: "collection/new", component: _addCollection2.default })), _react2.default.createElement(_reactRouter.Route, { path: "*", component: _noMatch2.default }));

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetchDoubanBooks = fetchDoubanBooks;
	
	var _jsonp = __webpack_require__(97);
	
	var _jsonp2 = _interopRequireDefault(_jsonp);
	
	var _apiRoots = __webpack_require__(9);
	
	var _apiRoots2 = _interopRequireDefault(_apiRoots);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function fetchDoubanBooks(query) {
	    return (0, _jsonp2.default)(_apiRoots2.default.DOUBAN_BOOKS + '/search?count=5&q=' + query, {});
	}

/***/ },
/* 96 */,
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _handleResponseJson = __webpack_require__(22);
	
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDA2YjdhOWZkMzM2ZDdmMWYxNGU/ZGUzZSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3RfbGliP2E1YjMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9saWI/MzE3NiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FjdGlvbnMvaW5kZXgudHM/ZmQ4ZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJfcmVhY3RfbGliXCI/MDcyMCIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9saWI/ZTY3YyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3V0aWxzX2xpYj8zZDA2Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvZm9ybS9pbmRleC50c3g/ODliZiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJfdXRpbHNfbGliXCI/MDNlMCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FwaS1jb25maWcvYXBpLXJvb3RzLnRzPzUzYzAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zaWRlLWVmZmVjdHMvYm9keS50c3g/YjY5MyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2ljb24udHN4P2ZiOGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9sYXlvdXQvY29udGFpbmVyLnRzeD81Nzc1Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvY2FsbC1hcGkudHM/NDE1NiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2xpYj8xZmNmIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvc2NoZW1hcy9pbmRleC50cz83N2FmIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvYXBpcy50cz82ZDE5Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2xpYj8wNmEwIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbm9ybWFsaXpyL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3V0aWxzX2xpYj85NDkyIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvZm9ybS9pbnB1dC50c3g/YzgzMSIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vdGV4dGFyZWEudHN4PzA1NzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC91dGlscy9oYW5kbGUtcmVzcG9uc2UtanNvbi50cz9hNjgxIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3RfbGliP2I5OWEiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9saWI/MDFjNyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FjdGlvbnMvYm9vay50cz84ZjZiIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvYWN0aW9ucy9ub3RpZmljYXRpb24udHM/ZjA5YyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2FjdGlvbnMvdXNlci50cz85MmU3Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9uby1tYXRjaC50c3g/ODcwNyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2VsZW1lbnRzL2FsZXJ0LnRzeD9iMmQyIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvYW5pbWF0aW9ucy9mYWRlLnRzeD9lZjU0Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvZm9ybS9idXR0b24vYnV0dG9uLnRzeD84OTk3Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvZm9ybS9idXR0b24vaW5kZXgudHN4PzEwZjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL3NlbGVjdGl6ZS1pbnB1dC50c3g/MGY5ZiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21pZGRsZXdhcmUvYXBpLnRzP2MzMTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9taWRkbGV3YXJlL21vZGlmeS1yZXNwb25zZS50cz8wMjMzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcmVkdWNlcnMvaW5kZXgudHM/MjM0MCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JlZHVjZXJzL25vdGlmaWNhdGlvbnMudHM/MzNlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JlZHVjZXJzL3BhZ2luYXRlLnRzP2IwZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zdG9yZS9jb25maWd1cmUtc3RvcmUudHM/OTExMCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL2hhbmRsZS1pbml0aWFsLXN0YXRlLnRzP2E1ZGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC91dGlscy9wYXJzZS1mb3JtLWRhdGEudHM/YmQzZSIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL3ZpZXcudHM/ZTcwNSIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWxvZ2dlci9saWIvaW5kZXguanM/OTY0MCIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2xpYj9hMzZmIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2lkZS1lZmZlY3QvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3RfbGliPzc2MGYiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9odW1wcy9odW1wcy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3V0aWxzX2xpYj8zOTI2Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tYnJvd3NlcmlmeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3V0aWxzX2xpYj8yOTQ4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvci1lbGVtZW50cy9yLWlucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3ItZWxlbWVudHMvci10ZXh0YXJlYS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL2NvbnNvbGUtYnJhbmRpbmcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9jb25zb2xlL2FkZC1ib29rLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvY29uc29sZS9hZGQtY29sbGVjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL2NvbnNvbGUvaG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb250YWluZXJzL2NvbnNvbGUvbWFuYWdlLWJvb2tzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbnRhaW5lcnMvY29uc29sZS9tYW5hZ2UtdXNlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29udGFpbmVycy9jb25zb2xlL21lbnVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZWxlbWVudHMvTW9kYWwudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZW50cnkvY29uc29sZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yb3V0ZXMvY29uc29sZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC91dGlscy9hcGlzLXRoaXJkLXBhcnR5LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvanNvbnAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBLDhDOzs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7U0FDZ0I7U0FPQTtBQVBULFVBQVMsV0FBVCxDQUFxQixJQUFyQixFQUEyQixLQUEzQixFQUFrQztBQUNyQyxZQUFPO0FBQ0gsZUFBTSxjQUFOO0FBQ0EsbUJBRkc7QUFHSCxxQkFIRztNQUFQLENBRHFDO0VBQWxDO0FBT0EsVUFBUyxhQUFULENBQXVCLElBQXZCLEVBQTZCLElBQTdCLEVBQW1DO0FBQ3RDLFlBQU87QUFDSCxlQUFNLGdCQUFOO0FBQ0EsbUJBRkc7QUFHSCxtQkFIRztNQUFQLENBRHNDOzs7Ozs7O0FDVjFDLDZCOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O1NBQ1M7U0FBUTtTQUFPO1NBQWdCLDhCOzs7Ozs7QUNKeEMsNkI7Ozs7Ozs7Ozs7O0FDQUEs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Q0osaUJBQUksVUFBVSxXQUFXLEVBQVg7QUFDZCxpQkFBSSxnQkFBZ0Isa0JBQWtCLEVBQWxCO0FBQ3BCLGlCQUFJLHNDQUFvQyxTQUFwQztBQUNKLG9CQUFPLGFBQVAsSUFBd0IsVUFBVSxJQUFWLEVBQWdCO0FBQ3BDLHdCQUFPLGlCQUFQLElBQTRCLElBQTVCLENBRG9DO2NBQWhCO0FBR3hCLGlCQUFJLFNBQVMsU0FBUyxhQUFULENBQXVCLFFBQXZCLENBQVQ7QUFDSixvQkFBTyxZQUFQLENBQW9CLEtBQXBCLEVBQThCLHlCQUFvQixhQUFsRDtBQUNBLG9CQUFPLFlBQVAsQ0FBb0IsSUFBcEIsRUFBMEIsT0FBMUI7QUFDQSxzQkFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixNQUExQjtBQUNBO29CQUFPLElBQUksT0FBSixDQUFZLG1CQUFXO0FBQzFCLDRCQUFPLE1BQVAsR0FBZ0IsWUFBWTtBQUN4QixrQ0FBUyxJQUFULENBQWMsV0FBZCxDQUEwQixTQUFTLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBMUIsRUFEd0I7QUFFeEIsNkJBQUksT0FBTyxPQUFPLGlCQUFQLENBQVAsQ0FGb0I7QUFHeEIsaUNBQVEsa0NBQW1CLElBQW5CLEVBQXlCLE9BQU8sTUFBUCxDQUFqQyxFQUh3QjtzQkFBWixDQURVO2tCQUFYO2NBQW5CO2FBWmtDOzs7TUFBdEM7RUFESjttQkFzQmUsTSIsImZpbGUiOiJjb25zb2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBkMDZiN2E5ZmQzMzZkN2YxZjE0ZVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oNCkpKDEpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3RfbGliXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDQpKSg0NDkpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2xpYlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwiZXhwb3J0ICogZnJvbSAnLi4vYWN0aW9ucy9ib29rJztcbmV4cG9ydCAqIGZyb20gJy4uL2FjdGlvbnMvbm90aWZpY2F0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4uL2FjdGlvbnMvdXNlcic7XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVmFsdWUobmFtZSwgdmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnQ0hBTkdFX1ZBTFVFJyxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdmFsdWVcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQobmFtZSwgZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdVUERBVEVfRUxFTUVOVCcsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRhdGFcbiAgICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2FjdGlvbnMvaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9yZWFjdF9saWI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIl9yZWFjdF9saWJcIlxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg0KSkoNjAwKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3RfbGliXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDgpKSg2NzgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3V0aWxzX2xpYlxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgU2VsZWN0aXplSW5wdXQgZnJvbSAnLi9zZWxlY3RpemUtaW5wdXQnO1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vdGV4dGFyZWEnO1xuZXhwb3J0IHsgQnV0dG9uLCBJbnB1dCwgU2VsZWN0aXplSW5wdXQsIFRleHRhcmVhIH07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvZm9ybS9pbmRleC50c3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF91dGlsc19saWI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIl91dGlsc19saWJcIlxuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwiY29uc3QgSE9TVCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LmxvY2F0aW9uLm9yaWdpbiA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xuY29uc3QgQXBpUm9vdHMgPSB7XG4gICAgTE9DQUw6IGAke0hPU1R9L2FwaS9gLFxuICAgIERPVUJBTl9CT09LUzogJ2h0dHBzOi8vYXBpLmRvdWJhbi5jb20vdjIvYm9vay8nXG59O1xuZXhwb3J0IGRlZmF1bHQgQXBpUm9vdHM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvYXBpLWNvbmZpZy9hcGktcm9vdHMudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTaWRlRWZmZWN0IGZyb20gJ3JlYWN0LXNpZGUtZWZmZWN0JztcbmNsYXNzIEJvZHkgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyZWFjdC1ib2R5LWNsYXNzIGhpZGRlblwifSk7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVkdWNlUHJvcHNUb1N0YXRlKHByb3BzTGlzdCkge1xuICAgIGxldCBjbGFzc05hbWU7XG4gICAgcHJvcHNMaXN0LmZvckVhY2goZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcbiAgICB9KTtcbiAgICByZXR1cm4gY2xhc3NOYW1lO1xufVxuZnVuY3Rpb24gaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudChjbGFzc05hbWUpIHtcbiAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCB3aXRoU2lkZUVmZmVjdChyZWR1Y2VQcm9wc1RvU3RhdGUsIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQpKEJvZHkpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3NpZGUtZWZmZWN0cy9ib2R5LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5jbGFzcyBJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG5hbWUgPSB0aGlzLnByb3BzLm5hbWU7XG4gICAgICAgIGxldCBtZXRob2QgPSB0aGlzLnByb3BzLm9uQ2xpY2s7XG4gICAgICAgIGxldCBzaXplID0gdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IGBpY29uIGljb24tJHtuYW1lfSAke3NpemV9YCwgb25DbGljazogbWV0aG9kfSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEljb247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvaWNvbi50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSAodGhpcy5wcm9wcy5pc0ZsdWlkID8gJ2NvbnRhaW5lci1mbHVpZCcgOiAnY29udGFpbmVyJykgKyAodGhpcy5wcm9wcy5jbGFzc05hbWUgPyBgICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YCA6ICcnKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IGNsYXNzTmFtZX0sIHRoaXMucHJvcHMuY2hpbGRyZW4pKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvbGF5b3V0L2NvbnRhaW5lci50c3hcbiAqKi8iLCJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IG9iamVjdFRvVXJsZW5jb2RlZCBmcm9tICcuLi91dGlscy9wYXJzZS1mb3JtLWRhdGEnO1xuaW1wb3J0IGhhbmRsZVJlc3BvbnNlSnNvbiBmcm9tICcuLi91dGlscy9oYW5kbGUtcmVzcG9uc2UtanNvbic7XG5jb25zdCBkZWZhdWx0Q29uZmlnID0ge1xuICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xufTtcbmV4cG9ydCBmdW5jdGlvbiBjYWxsQXBpKGZ1bGxVcmwsIGNvbmZpZyA9IHt9KSB7XG4gICAgLy8gcmV0dXJuIGZldGNoIGNvbmZpZ1xuICAgIGNvbnN0IHBhcnNlQ29uZmlnID0gKG9yaWdpbmFuQ29uZmlnKSA9PiB7XG4gICAgICAgIGxldCB7IG1ldGhvZCwgZGF0YSwgY3JlZGVudGlhbHMsIGRhdGFUeXBlIH0gPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0Q29uZmlnLCBvcmlnaW5hbkNvbmZpZyk7XG4gICAgICAgIGxldCBmZXRjaENvbmZpZyA9IHt9O1xuICAgICAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgICAgICBmZXRjaENvbmZpZy5tZXRob2QgPSBtZXRob2Q7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgICBmZXRjaENvbmZpZy5jcmVkZW50aWFscyA9IGNyZWRlbnRpYWxzO1xuICAgICAgICB9XG4gICAgICAgIC8vIGhhbmRsZSByZXF1ZXN0IGhlYWRlcnMgYW5kIGJvZHlcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgICAgICBsZXQgY29udGVudFR5cGU7XG4gICAgICAgICAgICBsZXQgYm9keTtcbiAgICAgICAgICAgIGlmIChkYXRhVHlwZSA9PT0gJ2pzb24nKSB7XG4gICAgICAgICAgICAgICAgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YVR5cGUgPT09ICd1cmxlbmNvZGVkJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG4gICAgICAgICAgICAgICAgYm9keSA9IG9iamVjdFRvVXJsZW5jb2RlZChkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSB1bnN1cHBvcnRlZCBkYXRhVHlwZVxuICAgICAgICAgICAgICAgIGRhdGFUeXBlID0gJ3VybGVuY29kZWQnO1xuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG4gICAgICAgICAgICAgICAgYm9keSA9IG9iamVjdFRvVXJsZW5jb2RlZChkYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1Vuc3VwcG9ydGVkIGRhdGFUeXBlIHVzZWQgXCJ1cmxlbmNvZGVkXCIgaW5zdGVhZCEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZldGNoQ29uZmlnLmhlYWRlcnMgPSB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IGNvbnRlbnRUeXBlLFxuICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1SZXF1ZXN0LU1ldGhvZCc6ICdQT1NUJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZldGNoQ29uZmlnLmJvZHkgPSBib2R5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgPT09ICdERUxFVEUnKSB7XG4gICAgICAgICAgICBmZXRjaENvbmZpZy5oZWFkZXJzID0ge1xuICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1SZXF1ZXN0LU1ldGhvZCc6ICdERUxFVEUnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaENvbmZpZztcbiAgICB9O1xuICAgIHJldHVybiBmZXRjaChmdWxsVXJsLCBwYXJzZUNvbmZpZyhjb25maWcpKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbihqc29uID0+ICh7IGpzb24sIHJlc3BvbnNlIH0pKTtcbiAgICB9KVxuICAgICAgICAudGhlbigoeyBqc29uLCByZXNwb25zZSB9KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVJlc3BvbnNlSnNvbihqc29uLCBjb25maWcuc2NoZW1hKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChqc29uKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgY2FsbEFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9jYWxsLWFwaS50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oNCkpKDQ1NSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3RfbGliXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwiaW1wb3J0IHsgU2NoZW1hLCBhcnJheU9mIH0gZnJvbSAnbm9ybWFsaXpyJztcbmNvbnN0IGJvb2sgPSBuZXcgU2NoZW1hKCdib29rcycsIHtcbiAgICBpZEF0dHJpYnV0ZTogJ2lkJ1xufSk7XG5jb25zdCBjb2xsZWN0aW9uID0gbmV3IFNjaGVtYSgnYm9va0NvbGxlY3Rpb25zJywge1xuICAgIGlkQXR0cmlidXRlOiAnaWQnXG59KTtcbmNvbnN0IHByb2ZpbGUgPSBuZXcgU2NoZW1hKCdwcm9maWxlcycsIHtcbiAgICBpZEF0dHJpYnV0ZTogJ2lkJ1xufSk7XG5jb25zdCB1c2VyID0gbmV3IFNjaGVtYSgndXNlcnMnLCB7XG4gICAgaWRBdHRyaWJ1dGU6ICdpZCdcbn0pO1xuY29uc3QgZG91YmFuQm9vayA9IG5ldyBTY2hlbWEoJ2RvdWJhbkJvb2tzJywge1xuICAgIGlkQXR0cmlidXRlOiAnaWQnXG59KTtcbmNvbnN0IGJvb2tQcm9ncmVzcyA9IG5ldyBTY2hlbWEoJ2Jvb2tzJywge1xuICAgIGlkQXR0cmlidXRlOiAnYm9va0lkJ1xufSk7XG5jb25zdCBtYXRjaGVkQm9va3MgPSBuZXcgU2NoZW1hKCdib29rcycsIHtcbiAgICBpZEF0dHJpYnV0ZTogJ2Jvb2tJZCdcbn0pO1xuZXhwb3J0IGNvbnN0IFNjaGVtYXMgPSB7XG4gICAgQk9PSzogYm9vayxcbiAgICBCT09LX1BST0dSRVNTOiBib29rUHJvZ3Jlc3MsXG4gICAgQk9PS19BUlJBWTogYXJyYXlPZihib29rKSxcbiAgICBET1VCQU5fQk9PS19TRUFSQ0hfUkVTVUxUUzogeyBib29rczogYXJyYXlPZihkb3ViYW5Cb29rKSB9LFxuICAgIFVTRVJfQVJSQVk6IGFycmF5T2YodXNlciksXG4gICAgTUFUQ0hFRF9CT09LX0FSUkFZOiBhcnJheU9mKG1hdGNoZWRCb29rcyksXG4gICAgQ09MTEVDVElPTjogY29sbGVjdGlvbixcbiAgICBDT0xMRUNUSU9OX0FSUkFZOiBhcnJheU9mKGNvbGxlY3Rpb24pLFxuICAgIFBST0ZJTEU6IHByb2ZpbGVcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvc2NoZW1hcy9pbmRleC50c1xuICoqLyIsImltcG9ydCBjYWxsQXBpIGZyb20gJy4vY2FsbC1hcGknO1xuaW1wb3J0IEFwaVJvb3RzIGZyb20gJy4uL2FwaS1jb25maWcvYXBpLXJvb3RzJztcbmV4cG9ydCBmdW5jdGlvbiBhZGRDb2xsZWN0aW9uKGRhdGEpIHtcbiAgICByZXR1cm4gY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1jb2xsZWN0aW9uc2AsIHsgbWV0aG9kOiAnUE9TVCcsIGRhdGE6IGRhdGEgfSk7XG59XG4vKipcbiAqIGRhdGE6IG5hbWUsIGF1dGhvciwgZGVzY3JpcHRpb24sIGNvdmVyLCBjb250ZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRCb29rKGRhdGEpIHtcbiAgICByZXR1cm4gY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1ib29rc2AsIHsgbWV0aG9kOiAnUE9TVCcsIGRhdGE6IGRhdGEgfSk7XG59XG4vKipcbiAqIGRhdGE6IG5hbWUsIHNsdWcsIGRlc2NyaXB0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRBdXRob3IoZGF0YSkge1xuICAgIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWF1dGhvcnNgLCB7IG1ldGhvZDogJ1BPU1QnLCBkYXRhOiBkYXRhIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEF1dGhvcnMocXVlcnkpIHtcbiAgICByZXR1cm4gY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1hdXRob3JzP3E9JHtxdWVyeX1gKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hCb29rcyhxdWVyeSkge1xuICAgIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWJvb2tzP3E9JHtxdWVyeX1gKTtcbn1cbi8qKlxuICogZGF0YTogcGFnZU5vLCBwYWdlU3VtLCBwZXJjZW50YWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9ncmVzcyhib29rSWQsIGRhdGEpIHtcbiAgICBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWJvb2tzLyR7Ym9va0lkfS9wcm9ncmVzc2AsIHsgbWV0aG9kOiAnUE9TVCcsIGRhdGEgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQm9vayhpZCkge1xuICAgIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWJvb2tzLyR7aWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnXG4gICAgfSk7XG59XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYWRkQ29sbGVjdGlvbixcbiAgICBhZGRCb29rLFxuICAgIGFkZEF1dGhvcixcbiAgICBzZWFyY2hCb29rcyxcbiAgICBzZWFyY2hBdXRob3JzLFxuICAgIHNldFByb2dyZXNzLFxuICAgIGRlbGV0ZUJvb2tcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvdXRpbHMvYXBpcy50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oNCkpKDY3Myk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2xpYlxuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oOCkpKDY4MCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbm9ybWFsaXpyL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3V0aWxzX2xpYlxuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5jbGFzcyBJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZSA/IGBpbnB1dC13cmFwICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YCA6ICdpbnB1dC13cmFwJztcbiAgICAgICAgbGV0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5jbGFzc05hbWU7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3BsYWNlaG9sZGVyOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyLCB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSwgb25DaGFuZ2U6IGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcbiAgICAgICAgfSwgdHlwZTogdGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ3RleHQnLCBuYW1lOiB0aGlzLnByb3BzLm5hbWUgPyB0aGlzLnByb3BzLm5hbWUgOiBudWxsfSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2lucHV0LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5jbGFzcyBUZXh0YXJlYSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZSA/IGB0ZXh0YXJlYS13cmFwICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YCA6ICd0ZXh0YXJlYS13cmFwJztcbiAgICAgICAgbGV0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5jbGFzc05hbWU7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBjbGFzc05hbWV9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwge3BsYWNlaG9sZGVyOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyLCB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSwgb25DaGFuZ2U6IGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcbiAgICAgICAgfSwgdHlwZTogdGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ3RleHQnLCBuYW1lOiB0aGlzLnByb3BzLm5hbWUgPyB0aGlzLnByb3BzLm5hbWUgOiBudWxsfSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL3RleHRhcmVhLnRzeFxuICoqLyIsImltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gJ25vcm1hbGl6cic7XG5pbXBvcnQgaHVtcHMgZnJvbSAnaHVtcHMnO1xuZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2VKc29uKGpzb24sIHNjaGVtYSkge1xuICAgIGpzb24gPSBodW1wcy5jYW1lbGl6ZUtleXMoanNvbik7XG4gICAgbGV0IHJlc3VsdCA9IGpzb247XG4gICAgaWYgKHR5cGVvZiBzY2hlbWEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIG5vcm1hbGl6ZShqc29uLCBzY2hlbWEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZVJlc3BvbnNlSnNvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9oYW5kbGUtcmVzcG9uc2UtanNvbi50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oNCkpKDM4KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9saWJcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDQpKSg1OTMpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2xpYlxuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsImltcG9ydCB7IFNjaGVtYXMgfSBmcm9tICcuLi9zY2hlbWFzJztcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEJvb2tQcm9ncmVzcyhib29rSWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBib29rSWQsXG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydCT09LX1BST0dSRVNTX1JFUVVFU1QnLCAnQk9PS19QUk9HUkVTU19TVUNDRVNTJywgJ0JPT0tfUFJPR1JFU1NfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGBib29rcy8ke2Jvb2tJZH0vcHJvZ3Jlc3NgLFxuICAgICAgICAgICAgc2NoZW1hOiBTY2hlbWFzLkJPT0tfUFJPR1JFU1NcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hCb29rcyhmbG93VHlwZSA9ICduZXdlc3QnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gZm9yIHBhZ2luYXRlXG4gICAgICAgIGZsb3dUeXBlLFxuICAgICAgICBDQUxMX0FQSToge1xuICAgICAgICAgICAgdHlwZXM6IFsnQk9PS1NfUkVRVUVTVCcsICdCT09LU19TVUNDRVNTJywgJ0JPT0tTX0ZBSUxVUkUnXSxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgYm9va3M/ZXhjbHVkZT1jb250ZW50YCxcbiAgICAgICAgICAgIHNjaGVtYTogU2NoZW1hcy5CT09LX0FSUkFZLFxuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEJvb2soYm9va0lkLCBmaWVsZHMpIHtcbiAgICBsZXQgZW5kcG9pbnQgPSBgYm9va3MvJHtib29rSWR9YDtcbiAgICBpZiAoZmllbGRzKSB7XG4gICAgICAgIGVuZHBvaW50ICs9IGA/ZmllbGRzPSR7ZmllbGRzLmpvaW4oJywnKX1gO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBib29rSWQsXG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydCT09LX1JFUVVFU1QnLCAnQk9PS19TVUNDRVNTJywgJ0JPT0tfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQsXG4gICAgICAgICAgICBzY2hlbWE6IFNjaGVtYXMuQk9PS1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENvbGxlY3Rpb25zKGZsb3dUeXBlID0gJ25ld2VzdCcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBmbG93VHlwZSxcbiAgICAgICAgQ0FMTF9BUEk6IHtcbiAgICAgICAgICAgIHR5cGVzOiBbJ0NPTExFQ1RJT05TX1JFUVVFU1QnLCAnQ09MTEVDVElPTlNfU1VDQ0VTUycsICdDT0xMRUNUSU9OU19GQUlMVVJFJ10sXG4gICAgICAgICAgICBlbmRwb2ludDogYGNvbGxlY3Rpb25zYCxcbiAgICAgICAgICAgIHNjaGVtYTogU2NoZW1hcy5DT0xMRUNUSU9OX0FSUkFZXG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQ29sbGVjdGlvbihjb2xsZWN0aW9uSWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb2xsZWN0aW9uSWQsXG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydDT0xMRUNUSU9OX1JFUVVFU1QnLCAnQ09MTEVDVElPTl9TVUNDRVNTJywgJ0NPTExFQ1RJT05fRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGBjb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb25JZH1gLFxuICAgICAgICAgICAgc2NoZW1hOiBTY2hlbWFzLkNPTExFQ1RJT05cbiAgICAgICAgfVxuICAgIH07XG59XG4vLyBleHBvcnQgZnVuY3Rpb24gZmV0Y2hCb29rQ29udGVudChib29rSWQpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBib29rSWQsXG4vLyAgICAgQ0FMTF9BUEk6IHtcbi8vICAgICAgIHR5cGVzOiBbJ0JPT0tfQ09OVEVOVF9SRVFVRVNUJywgJ0JPT0tfQ09OVEVOVF9TVUNDRVNTJywgJ0JPT0tfQ09OVEVOVF9GQUlMVVJFJ10sXG4vLyAgICAgICBlbmRwb2ludDogYGJvb2tzLyR7Ym9va0lkfS9jb250ZW50YCxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5CT09LXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG4vL1xuLy8gZXhwb3J0IGZ1bmN0aW9uIGZldGNoQm9va0luZm8oYm9va0lkKSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgYm9va0lkLFxuLy8gICAgIENBTExfQVBJOntcbi8vICAgICAgIHR5cGVzOiBbJ0JPT0tfSU5GT19SRVFVRVNUJywgJ0JPT0tfSU5GT19TVUNDRVNTJywgJ0JPT0tfSU5GT19GQUlMVVJFJ10sXG4vLyAgICAgICBlbmRwb2ludDogYGJvb2tzLyR7Ym9va0lkfWAsXG4vLyAgICAgICBzY2hlbWE6IFNjaGVtYXMuQk9PS19BUlJBWVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuLy8gZXhwb3J0IGZ1bmN0aW9uIGZldGNoRG91YmFuQm9va1NlYXJjaFJlc3VsdHMocXVlcnkpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBxdWVyeSxcbi8vICAgICBDQUxMX0FQSToge1xuLy8gICAgICAgdHlwZXM6IFsnRE9VQkFOX0JPT0tfU0VBUkNIX1JFUVVFU1QnLCAnRE9VQkFOX0JPT0tfU0VBUkNIX1NVQ0NFU1MnLCAnRE9VQkFOX0JPT0tfU0VBUkNIX0ZBSUxVUkUnXSxcbi8vICAgICAgIGVuZHBvaW50OiBgc2VhcmNoP2NvdW50PTUmcT0ke3F1ZXJ5fWAsXG4vLyAgICAgICBhcGlVcmw6IEFwaVJvb3RzLkRPVUJBTl9CT09LUyxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5ET1VCQU5fQk9PS19TRUFSQ0hfUkVTVUxUUyxcbi8vICAgICAgIGV4dGVuZGVkT3B0aW9uczogeyB1c2VKc29ucDogdHJ1ZSB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG4vLyBleHBvcnQgZnVuY3Rpb24gc2VhcmNoQm9va3MocXVlcnkpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBxdWVyeSxcbi8vICAgICBDQUxMX0FQSToge1xuLy8gICAgICAgdHlwZXM6IFsnQk9PS19TRUFSQ0hfUkVRVUVTVCcsICdCT09LX1NFQVJDSF9TVUNDRVNTJywgJ0JPT0tfU0VBUkNIX0ZBSUxVUkUnXSxcbi8vICAgICAgIGVuZHBvaW50OiBgc2VhcmNoP3E9JHtxdWVyeX1gLFxuLy8gICAgICAgYXBpVXJsOiBBcGlSb290cy5MT0NBTCxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5NQVRDSEVEX0JPT0tfQVJSQVlcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9hY3Rpb25zL2Jvb2sudHNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gc2VuZE5vdGlmaWNhdGlvbihtZXNzYWdlLCBtc2dUeXBlID0gJ3N1Y2Nlc3MnLCB0ID0gNTAwMCkge1xuICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gTWF0aC5yYW5kb20oKS50b0ZpeGVkKDgpLnN1YnN0cigyKTtcbiAgICAgICAgZGlzcGF0Y2goc2hvd05vdGlmaWNhdGlvbihpZCwgbWVzc2FnZSwgbXNnVHlwZSkpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGhpZGVOb3RpZmljYXRpb24oaWQpKTtcbiAgICAgICAgfSwgdCk7XG4gICAgfTtcbn1cbmV4cG9ydCBjb25zdCBTSE9XX05PVElGSUNBVElPTiA9ICdTSE9XX05PVElGSUNBVElPTic7XG5leHBvcnQgZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbihpZCwgbWVzc2FnZSwgbXNnVHlwZSA9ICdzdWNjZXNzJykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFNIT1dfTk9USUZJQ0FUSU9OLFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICBtc2dUeXBlLFxuICAgICAgICBpZFxuICAgIH07XG59XG5leHBvcnQgY29uc3QgSElERV9OT1RJRklDQVRJT04gPSAnSElERV9OT1RJRklDQVRJT04nO1xuZXhwb3J0IGZ1bmN0aW9uIGhpZGVOb3RpZmljYXRpb24oaWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBISURFX05PVElGSUNBVElPTixcbiAgICAgICAgaWRcbiAgICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2FjdGlvbnMvbm90aWZpY2F0aW9uLnRzXG4gKiovIiwiaW1wb3J0IHsgU2NoZW1hcyB9IGZyb20gJy4uL3NjaGVtYXMvaW5kZXgnO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZXJBdXRoKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydVU0VSX0FVVEhfUkVRVUVTVCcsICdVU0VSX0FVVEhfU1VDQ0VTUycsICdVU0VSX0FVVEhfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6ICdhdXRoJ1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFByb2ZpbGUoaWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBDQUxMX0FQSToge1xuICAgICAgICAgICAgdHlwZXM6IFsnUFJPRklMRV9SRVFVRVNUJywgJ1BST0ZJTEVfU1VDQ0VTUycsICdQUk9GSUxFX0ZBSUxVUkUnXSxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgdXNlcnMvJHtpZH0vcHJvZmlsZWAsXG4gICAgICAgICAgICBzY2hlbWE6IFNjaGVtYXMuUFJPRklMRVxuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFVzZXJMaXN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydVU0VSX0xJU1RfUkVRVUVTVCcsICdVU0VSX0xJU1RfU1VDQ0VTUycsICdVU0VSX0xJU1RfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6ICd1c2VycycsXG4gICAgICAgICAgICBzY2hlbWE6IFNjaGVtYXMuVVNFUl9BUlJBWVxuICAgICAgICB9XG4gICAgfTtcbn1cbi8vIGV4cG9ydCBmdW5jdGlvbiBmZXRjaFNoZWxmKHVzZXJJZCkge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHVzZXJJZCxcbi8vICAgICBDQUxMX0FQSToge1xuLy8gICAgICAgdHlwZXM6IFsnU0hFTEZfUkVRVUVTVCcsICdTSEVMRl9TVUNDRVNTJywgJ1NIRUxGX0ZBSUxVUkUnXSxcbi8vICAgICAgIGVuZHBvaW50OiBgdXNlcnMvJHt1c2VySWR9L3NoZWxmYCxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5CT09LX0FSUkFZLFxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoU2hlbGYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF5bG9hZDogJ2Jvb2tTaGVsZicsXG4gICAgICAgIENBTExfQVBJOiB7XG4gICAgICAgICAgICB0eXBlczogWydTSEVMRl9SRVFVRVNUJywgJ1NIRUxGX1NVQ0NFU1MnLCAnU0hFTEZfRkFJTFVSRSddLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGB1c2VyL2Jvb2tzL3NoZWxmYCxcbiAgICAgICAgfVxuICAgIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvYWN0aW9ucy91c2VyLnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmNsYXNzIE5vTWF0Y2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgXCI0MDRcIikpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE5vTWF0Y2g7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9uby1tYXRjaC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vZWxlbWVudHMvaWNvbic7XG5jbGFzcyBOb3RpZmljYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMucHJvcHMudHlwZSA/IHRoaXMucHJvcHMudHlwZSA6ICdzdWNjZXNzJztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIHRoaXMucHJvcHMudmlzaWJsZSAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBgbm90aWZpY2F0aW9uIG5vdGlmaWNhdGlvbi0tJHt0eXBlfSB6MWAudHJpbSgpfSwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7b25DbGljazogdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZSwgbmFtZTogXCJjbG9zZVwifSksIHRoaXMucHJvcHMubWVzc2FnZSkpKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2FsZXJ0LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJztcbmNsYXNzIEZhZGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWU/dGhpcy5wcm9wcy5jbGFzc05hbWU6bnVsbFxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAsIHtjb21wb25lbnQ6IFwiZGl2XCIsIHRyYW5zaXRpb25OYW1lOiBcImZhZGVcIiwgdHJhbnNpdGlvbkVudGVyVGltZW91dDogMzAwLCB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0OiAzMDB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRmFkZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9hbmltYXRpb25zL2ZhZGUudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZSA/IGBidG4gJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gIDogJ2J0bic7XG4gICAgICAgIGxldCBzaXplID0gdGhpcy5wcm9wcy5zaXplID8gdGhpcy5wcm9wcy5zaXplIDogJ21lZGl1bSc7XG4gICAgICAgIGxldCBpc0ZsdWlkID0gdGhpcy5wcm9wcy5pc0ZsdWlkID8gdGhpcy5wcm9wcy5pc0ZsdWlkIDogZmFsc2U7XG4gICAgICAgIGxldCBjb2xvciA9IHRoaXMucHJvcHMuY29sb3IgPyB0aGlzLnByb3BzLmNvbG9yIDogbnVsbDtcbiAgICAgICAgbGV0IG9uQ2xpY2s7XG4gICAgICAgIGlmIChzaXplID09PSAnc21hbGwnKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gJyBidG4tc21hbGwnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNpemUgPT09ICdsYXJnZScpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIGJ0bi1sYXJnZSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2l6ZSA9PT0gJ21lZGl1bScpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIGJ0bi1tZWRpdW0nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5zdXBwb3J0IHNpemUhJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gYCBidG4tJHtjb2xvcn1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0ZsdWlkKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9IGJ0bi1mbHVpZGA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMudG8pIHtcbiAgICAgICAgICAgIG9uQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCh0aGlzLnByb3BzLnRvKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvbkNsaWNrID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWUgfSwgeyBvbkNsaWNrIH0pO1xuICAgICAgICBkZWxldGUgcHJvcHMudG87XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5jb2xvcjtcbiAgICAgICAgZGVsZXRlIHByb3BzLnNpemU7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5pc0ZsdWlkO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHByb3BzLCB0aGlzLnByb3BzLmNoaWxkcmVuKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vYnV0dG9uL2J1dHRvbi50c3hcbiAqKi8iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9lbGVtZW50cy9mb3JtL2J1dHRvbi9pbmRleC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vaWNvbic7XG5jbGFzcyBTZWxlY3RpemVJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvd09wdGlvbnM6IGZhbHNlLFxuICAgICAgICAgICAgZm9jdXM6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgZXhwZW5kZWRPcHRpb25JbmRleDogMFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhpZGVPcHRpb25zID0gdGhpcy5oaWRlT3B0aW9ucy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZvY3VzSW5wdXQgPSB0aGlzLmZvY3VzSW5wdXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaG93T3B0aW9ucyA9IHRoaXMuc2hvd09wdGlvbnMuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgYWRkVmFsdWUobmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblZhbHVlc0NoYW5nZSh0aGlzLnByb3BzLnZhbHVlcy5jb25jYXQobmV3VmFsdWUpKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSh0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiAob3B0aW9uLnZhbHVlID09PSBuZXdWYWx1ZS52YWx1ZVxuICAgICAgICAgICAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9uLCB7IGRpc2FibGVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgOiBvcHRpb24pKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGVhcklucHV0VmFsdWUoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnN0YXlGb2N1c2VkID09PSAndW5kZWZpbmVkJyB8fCB0aGlzLnByb3BzLnN0YXlGb2N1c2VkICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oaWRlT3B0aW9ucygpO1xuICAgIH1cbiAgICByZW1vdmVWYWx1ZShpbmRleCkge1xuICAgICAgICBsZXQgbmV3VmFsdWVzID0gW107XG4gICAgICAgIGxldCByZW1vdmVkVmFsdWU7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlcyA9IHRoaXMucHJvcHMudmFsdWVzLnNsaWNlKDAsIHRoaXMucHJvcHMudmFsdWVzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgcmVtb3ZlZFZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZXNbdGhpcy5wcm9wcy52YWx1ZXMubGVuZ3RoIC0gMV0udmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXdWYWx1ZXMgPSB0aGlzLnByb3BzLnZhbHVlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZW1vdmVkVmFsdWUgPSB2LnZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBpICE9PSBpbmRleDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk9wdGlvbnNDaGFuZ2UodGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHRpb24gPT4gKG9wdGlvbi52YWx1ZSA9PT0gcmVtb3ZlZFZhbHVlXG4gICAgICAgICAgICAgICAgPyBPYmplY3QuYXNzaWduKHt9LCBvcHRpb24sIHsgZGlzYWJsZWQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgOiBvcHRpb24pKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5vblZhbHVlc0NoYW5nZShuZXdWYWx1ZXMpO1xuICAgIH1cbiAgICBjbGVhcklucHV0VmFsdWUoKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25JbnB1dENoYW5nZSgnJyk7XG4gICAgfVxuICAgIGhhbmRsZUtleVByZXNzKGUpIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gOCAmJiAhdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZSgtMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdG9kb1xuICAgICAgICAvLyBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiB0aGlzLnN0YXRlLnNob3dPcHRpb25zKSB7XG4gICAgICAgIC8vICAgdGhpcy5hZGRWYWx1ZSgpXG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgZm9jdXNJbnB1dCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgIH1cbiAgICBoaWRlT3B0aW9ucygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93T3B0aW9uczogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNob3dPcHRpb25zKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93T3B0aW9uczogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZU9wdGlvbnMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZU9wdGlvbnMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IHRoaXMucHJvcHMubGFiZWwgPyB0aGlzLnByb3BzLmxhYmVsIDogbnVsbDtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZSA/IHRoaXMucHJvcHMudmFsdWUgOiAnJztcbiAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMucHJvcHMudmFsdWVzO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9ucyA/IHRoaXMucHJvcHMub3B0aW9ucyA6IFtdO1xuICAgICAgICBsZXQgaW5wdXRXaWR0aCA9IHZhbHVlcy5sZW5ndGggPiAwID8gKHZhbHVlLmxlbmd0aCA9PT0gMCA/IDE2IDogdmFsdWUubGVuZ3RoICogMTYpIDogJzEwMCUnO1xuICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSB2YWx1ZXMubGVuZ3RoID4gMCA/ICcnIDogdGhpcy5wcm9wcy5wbGFjZWhvbGRlcjtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICdzZWxlY3RpemUtaW5wdXQnICsgKHRoaXMuc3RhdGUuZm9jdXMgPT09IHRydWUgPyAnIGZvY3VzJyA6ICcnKSArICh2YWx1ZXMubGVuZ3RoID09PSAwID8gJyBlbXB0eScgOiAnJyk7XG4gICAgICAgIGxldCBhZGROZXdWYWx1ZSA9IHRoaXMucHJvcHMuYWRkTmV3VmFsdWUgPyB0aGlzLnByb3BzLmFkZE5ld1ZhbHVlIDogdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogYHNlbGVjdGl6ZS1pbnB1dC13cmFwICR7dGhpcy5wcm9wcy5jbGFzc05hbWUgPyB0aGlzLnByb3BzLmNsYXNzTmFtZSA6ICcnfWAudHJpbSgpfSwgbGFiZWwgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHtjbGFzc05hbWU6IFwiZm9ybS1sYWJlbFwifSwgbGFiZWwpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogY2xhc3NOYW1lLCBvbkNsaWNrOiBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgICAgICAgdGhpcy5zaG93T3B0aW9ucyhlKTtcbiAgICAgICAgfX0sIHZhbHVlcy5tYXAoKHYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtrZXk6IGluZGV4LCBjbGFzc05hbWU6IFwic2VsZWN0aXplLXRhZ1wifSwgdi5uYW1lLCBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHtzaXplOiAnc21hbGwnLCBuYW1lOiBcImNsb3NlXCIsIG9uQ2xpY2s6IGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWUoaW5kZXgpO1xuICAgICAgICAgICAgfX0pKSk7XG4gICAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3N0eWxlOiB7IHdpZHRoOiBpbnB1dFdpZHRoIH0sIHJlZjogcmVmID0+IHsgdGhpcy5pbnB1dCA9IHJlZjsgfSwgdmFsdWU6IHZhbHVlLCBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsIG9uQmx1cjogZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IGZhbHNlIH0pO1xuICAgICAgICB9LCBvbkZvY3VzOiBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1czogdHJ1ZSB9KTtcbiAgICAgICAgfSwgb25DaGFuZ2U6IGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfSwgb25LZXlEb3duOiBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlS2V5UHJlc3MoZSk7XG4gICAgICAgIH19KSksICh0aGlzLnN0YXRlLnNob3dPcHRpb25zKSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJzZWxlY3RpemUtcXVlcnktcmVzdWx0c1wifSwgb3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtrZXk6IGluZGV4LCBjbGFzc05hbWU6IFwiZGlzYWJsZWRcIn0sIG9wdGlvbi5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtrZXk6IGluZGV4LCBvbkNsaWNrOiBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFZhbHVlKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25PcHRpb25DbGljaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uT3B0aW9uQ2xpY2sob3B0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgb3B0aW9uLm5hbWUpKSk7XG4gICAgICAgIH0pLCBhZGROZXdWYWx1ZSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge29uQ2xpY2s6IGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFkZE5ld1ZhbHVlKHRoaXMucHJvcHMudmFsdWUpO1xuICAgICAgICB9LCBjbGFzc05hbWU6IFwiYWRkXCJ9LCBcIua3u+WKoCBcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCB0aGlzLnByb3BzLnZhbHVlKSkpIDogbnVsbCkpIDogbnVsbCkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGl6ZUlucHV0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VsZW1lbnRzL2Zvcm0vc2VsZWN0aXplLWlucHV0LnRzeFxuICoqLyIsImltcG9ydCBjYWxsQXBpIGZyb20gJy4uL3V0aWxzL2NhbGwtYXBpJztcbmltcG9ydCBBcGlSb290cyBmcm9tICcuLi9hcGktY29uZmlnL2FwaS1yb290cyc7XG5leHBvcnQgZGVmYXVsdCBzdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XG4gICAgY29uc3QgQ0FMTF9BUEkgPSBhY3Rpb24uQ0FMTF9BUEk7XG4gICAgaWYgKHR5cGVvZiBDQUxMX0FQSSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICB9XG4gICAgbGV0IHsgZW5kcG9pbnQsIGFwaVVybCwgZXh0ZW5kZWRPcHRpb25zIH0gPSBDQUxMX0FQSTtcbiAgICBjb25zdCB7IHR5cGVzLCBzY2hlbWEgfSA9IENBTExfQVBJO1xuICAgIGNvbnN0IFtyZXF1ZXN0VHlwZSwgc3VjY2Vzc1R5cGUsIGZhaWx1cmVUeXBlXSA9IHR5cGVzO1xuICAgIGZ1bmN0aW9uIGFjdGlvbldpdGgoZGF0YSkge1xuICAgICAgICBjb25zdCBmaW5hbEFjdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIGFjdGlvbiwgZGF0YSk7XG4gICAgICAgIGRlbGV0ZSBmaW5hbEFjdGlvbi5DQUxMX0FQSTtcbiAgICAgICAgcmV0dXJuIGZpbmFsQWN0aW9uO1xuICAgIH1cbiAgICBuZXh0KGFjdGlvbldpdGgoeyB0eXBlOiByZXF1ZXN0VHlwZSB9KSk7XG4gICAgaWYgKHR5cGVvZiBlbmRwb2ludCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlbmRwb2ludCA9IGVuZHBvaW50KHN0b3JlLmdldFN0YXRlKCkpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGFwaVVybCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgYXBpVXJsID0gQXBpUm9vdHMuTE9DQUw7XG4gICAgfVxuICAgIGNvbnN0IGZ1bGxVcmwgPSBhcGlVcmwgKyBlbmRwb2ludDtcbiAgICBsZXQgb3B0aW9ucyA9IHsgc2NoZW1hIH07XG4gICAgaWYgKHR5cGVvZiBleHRlbmRlZE9wdGlvbnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCBleHRlbmRlZE9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gY2FsbEFwaShmdWxsVXJsLCBvcHRpb25zKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uV2l0aCh7XG4gICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgIHR5cGU6IHN1Y2Nlc3NUeXBlXG4gICAgICAgIH0pKTtcbiAgICB9LCBlcnJvciA9PiBuZXh0KGFjdGlvbldpdGgoe1xuICAgICAgICB0eXBlOiBmYWlsdXJlVHlwZSxcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgJ09vcHMhJ1xuICAgIH0pKSk7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L21pZGRsZXdhcmUvYXBpLnRzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgc3RvcmUgPT4gbmV4dCA9PiBhY3Rpb24gPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnRE9VQkFOX0JPT0tfU0VBUkNIX1NVQ0NFU1MnOlxuICAgICAgICAgICAgLy8gVE9ETzogY2FuIGJlIGZpeGVkIGluIG5vcm1hbGl6cj9cbiAgICAgICAgICAgIGFjdGlvbi5yZXNwb25zZS5yZXN1bHQgPSBhY3Rpb24ucmVzcG9uc2UucmVzdWx0LmJvb2tzO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgbmV4dChhY3Rpb24pO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9taWRkbGV3YXJlL21vZGlmeS1yZXNwb25zZS50c1xuICoqLyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIgYXMgcm91dGluZyB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5pbXBvcnQgbm90aWZpY2F0aW9ucyBmcm9tICcuL25vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IHBhZ2luYXRlIGZyb20gJy4vcGFnaW5hdGUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbi8vIFVwZGF0ZXMgYW4gZW50aXR5IGNhY2hlIGluIHJlc3BvbnNlIHRvIGFueSBhY3Rpb24gd2l0aCByZXNwb25zZS5lbnRpdGllcy5cbmZ1bmN0aW9uIGVudGl0aWVzKHN0YXRlID0geyBib29rczoge30sIHVzZXJzOiB7fSwgYm9va0NvbGxlY3Rpb25zOiB7fSB9LCBhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uLnJlc3BvbnNlICYmIGFjdGlvbi5yZXNwb25zZS5lbnRpdGllcykge1xuICAgICAgICByZXR1cm4gXy5tZXJnZSh7fSwgc3RhdGUsIGFjdGlvbi5yZXNwb25zZS5lbnRpdGllcyk7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbn1cbmZ1bmN0aW9uIHBheWxvYWRzKHN0YXRlID0ge30sIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24uZXJyb3IgJiYgYWN0aW9uLnBheWxvYWQpIHtcbiAgICAgICAgcmV0dXJuIF8uYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgW2FjdGlvbi5wYXlsb2FkXToge1xuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChhY3Rpb24ucmVzcG9uc2UgJiYgYWN0aW9uLnBheWxvYWQpIHtcbiAgICAgICAgcmV0dXJuIF8uYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgW2FjdGlvbi5wYXlsb2FkXToge1xuICAgICAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5yZXNwb25zZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xufVxuLy8gVXBkYXRlcyBlcnJvciBtZXNzYWdlIHRvIG5vdGlmeSBhYm91dCB0aGUgZmFpbGVkIGZldGNoZXMuXG5mdW5jdGlvbiBlcnJvck1lc3NhZ2Uoc3RhdGUgPSBudWxsLCBhY3Rpb24pIHtcbiAgICBjb25zdCB7IHR5cGUsIGVycm9yIH0gPSBhY3Rpb247XG4gICAgLy8gaWYgKHR5cGUgPT09IEFjdGlvblR5cGVzLlJFU0VUX0VSUk9SX01FU1NBR0UpIHtcbiAgICAvLyAgIHJldHVybiBudWxsXG4gICAgLy8gfVxuICAgIGlmIChlcnJvcikge1xuICAgICAgICByZXR1cm4gYWN0aW9uLmVycm9yO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG59XG5mdW5jdGlvbiBzZXNzaW9uKHN0YXRlID0geyB1c2VyOiB7IHJvbGU6ICd2aXNpdG9yJyB9IH0sIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnVVNFUl9BVVRIX1JFUVVFU1QnOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgJ1VTRVJfQVVUSF9TVUNDRVNTJzpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVzZXI6IGFjdGlvbi5yZXNwb25zZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgJ1VTRVJfQVVUSF9GQUlMVVJFJzpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVzZXI6IGFjdGlvbi5yZXNwb25zZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuLy8gVXBkYXRlcyB0aGUgcGFnaW5hdGlvbiBkYXRhIGZvciBkaWZmZXJlbnQgYWN0aW9ucy5cbmNvbnN0IHBhZ2luYXRpb24gPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIC8vIGJvb2tMaXN0OiBwYWdpbmF0ZSh7XG4gICAgLy8gICBtYXBBY3Rpb25Ub0tleTogYWN0aW9uID0+IGFjdGlvbi5maWx0ZXIsXG4gICAgLy8gICB0eXBlczogWydCT09LX0xJU1RfUkVRVUVTVCcsICdCT09LX0xJU1RfU1VDQ0VTUycsICdCT09LX0xJU1RfRkFJTFVSRSddXG4gICAgLy8gfSksXG4gICAgYm9va3M6IHBhZ2luYXRlKHtcbiAgICAgICAgbWFwQWN0aW9uVG9LZXk6IGFjdGlvbiA9PiBhY3Rpb24uZmxvd1R5cGUsXG4gICAgICAgIHR5cGVzOiBbJ0JPT0tTX1JFUVVFU1QnLCAnQk9PS1NfU1VDQ0VTUycsICdCT09LU19GQUlMVVJFJ11cbiAgICB9KSxcbiAgICBib29rQ29sbGVjdGlvbnM6IHBhZ2luYXRlKHtcbiAgICAgICAgbWFwQWN0aW9uVG9LZXk6IGFjdGlvbiA9PiBhY3Rpb24uZmxvd1R5cGUsXG4gICAgICAgIHR5cGVzOiBbJ0NPTExFQ1RJT05TX1JFUVVFU1QnLCAnQ09MTEVDVElPTlNfU1VDQ0VTUycsICdDT0xMRUNUSU9OU19GQUlMVVJFJ11cbiAgICB9KSxcbiAgICAvLyBzaGVsZjogcGFnaW5hdGUoe1xuICAgIC8vICAgbWFwQWN0aW9uVG9LZXk6IGFjdGlvbiA9PiBhY3Rpb24udXNlcklkLFxuICAgIC8vICAgdHlwZXM6IFsnU0hFTEZfUkVRVUVTVCcsICdTSEVMRl9TVUNDRVNTJywgJ1NIRUxGX0ZBSUxVUkUnXVxuICAgIC8vIH0pLFxuICAgIHVzZXJMaXN0OiBwYWdpbmF0ZSh7XG4gICAgICAgIC8vIFRPRE9cbiAgICAgICAgbWFwQWN0aW9uVG9LZXk6IGFjdGlvbiA9PiAnYWxsJyxcbiAgICAgICAgdHlwZXM6IFsnVVNFUl9MSVNUX1JFUVVFU1QnLCAnVVNFUl9MSVNUX1NVQ0NFU1MnLCAnVVNFUl9MSVNUX0ZBSUxVUkUnXSxcbiAgICB9KSxcbiAgICBkb3ViYW5Cb29rU2VhcmNoUmVzdWx0czogcGFnaW5hdGUoe1xuICAgICAgICBtYXBBY3Rpb25Ub0tleTogYWN0aW9uID0+IGFjdGlvbi5xdWVyeSxcbiAgICAgICAgdHlwZXM6IFsnRE9VQkFOX0JPT0tfU0VBUkNIX1JFUVVFU1QnLCAnRE9VQkFOX0JPT0tfU0VBUkNIX1NVQ0NFU1MnLCAnRE9VQkFOX0JPT0tfU0VBUkNIX0ZBSUxVUkUnXVxuICAgIH0pLFxuICAgIGJvb2tTZWFyY2hSZXN1bHRzOiBwYWdpbmF0ZSh7XG4gICAgICAgIG1hcEFjdGlvblRvS2V5OiBhY3Rpb24gPT4gYWN0aW9uLnF1ZXJ5LFxuICAgICAgICB0eXBlczogWydCT09LX1NFQVJDSF9SRVFVRVNUJywgJ0JPT0tfU0VBUkNIX1NVQ0NFU1MnLCAnQk9PS19TRUFSQ0hfRkFJTFVSRSddXG4gICAgfSlcbn0pO1xuZnVuY3Rpb24gZWxlbWVudHMoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQ0hBTkdFX1ZBTFVFJykge1xuICAgICAgICAvLyBsb2Rhc2gjbWVyZ2Ug5LiN5pSv5oyBIFN5bWJvbFxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgIFthY3Rpb24ubmFtZV06IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlW2FjdGlvbi5uYW1lXSwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBhY3Rpb24udmFsdWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdVUERBVEVfRUxFTUVOVCcpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICBbYWN0aW9uLm5hbWVdOiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZVthY3Rpb24ubmFtZV0sIGFjdGlvbi5kYXRhKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xufVxuY29uc3QgY29tcG9uZW50cyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgbm90aWZpY2F0aW9uc1xufSk7XG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgcGF5bG9hZHMsXG4gICAgY29tcG9uZW50cyxcbiAgICBlbGVtZW50cyxcbiAgICByb3V0aW5nLFxuICAgIGVudGl0aWVzLFxuICAgIGVycm9yTWVzc2FnZSxcbiAgICBwYWdpbmF0aW9uLFxuICAgIHNlc3Npb25cbn0pO1xuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvcmVkdWNlcnMvaW5kZXgudHNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3RpZmljYXRpb25zKHN0YXRlID0gW10sIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0hJREVfTk9USUZJQ0FUSU9OJykge1xuICAgICAgICByZXR1cm4gc3RhdGUubWFwKG4gPT4gbi5pZCA9PT0gYWN0aW9uLmlkID8gT2JqZWN0LmFzc2lnbih7fSwgbiwgeyB2aXNpYmxlOiBmYWxzZSB9KSA6IG4pO1xuICAgIH1cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdTSE9XX05PVElGSUNBVElPTicpIHtcbiAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwge1xuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYWN0aW9uLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9uLm1zZ1R5cGUsXG4gICAgICAgICAgICAgICAgaWQ6IGFjdGlvbi5pZFxuICAgICAgICAgICAgfV07XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9yZWR1Y2Vycy9ub3RpZmljYXRpb25zLnRzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbi8vIENyZWF0ZXMgYSByZWR1Y2VyIG1hbmFnaW5nIHBhZ2luYXRpb24sIGdpdmVuIHRoZSBhY3Rpb24gdHlwZXMgdG8gaGFuZGxlLFxuLy8gYW5kIGEgZnVuY3Rpb24gdGVsbGluZyBob3cgdG8gZXh0cmFjdCB0aGUga2V5IGZyb20gYW4gYWN0aW9uLlxuLy8gdG9kbzogdHlwZXMgbGVuZ3RoIHNob3VsZCBiZSAzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdpbmF0ZSh7IHR5cGVzLCBtYXBBY3Rpb25Ub0tleSB9KSB7XG4gICAgY29uc3QgW3JlcXVlc3RUeXBlLCBzdWNjZXNzVHlwZSwgZmFpbHVyZVR5cGVdID0gdHlwZXM7XG4gICAgZnVuY3Rpb24gdXBkYXRlUGFnaW5hdGlvbihzdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgbmV4dFBhZ2VVcmw6IG51bGwsXG4gICAgICAgICAgICBwYWdlQ291bnQ6IDAsXG4gICAgICAgICAgICBpZHM6IFtdXG4gICAgICAgIH0sIGFjdGlvbikge1xuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIHJlcXVlc3RUeXBlOlxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYXNlIHN1Y2Nlc3NUeXBlOlxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaWRzOiBfLnVuaW9uKHN0YXRlLmlkcywgYWN0aW9uLnJlc3BvbnNlLnJlc3VsdCksXG4gICAgICAgICAgICAgICAgICAgIC8vIOS4jeS9v+eUqCB1bmlvbiDkvJrlr7zoh7Qgc2VydmVyIHJlbmRlcmluZyDpl67popjvvJ9cbiAgICAgICAgICAgICAgICAgICAgLy8gaWRzOiBhY3Rpb24ucmVzcG9uc2UucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBuZXh0UGFnZVVybDogYWN0aW9uLnJlc3BvbnNlLm5leHRQYWdlVXJsLFxuICAgICAgICAgICAgICAgICAgICBwYWdlQ291bnQ6IHN0YXRlLnBhZ2VDb3VudCArIDFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhc2UgZmFpbHVyZVR5cGU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlUGFnaW5hdGlvbkJ5S2V5KHN0YXRlID0ge30sIGFjdGlvbikge1xuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIHJlcXVlc3RUeXBlOlxuICAgICAgICAgICAgY2FzZSBzdWNjZXNzVHlwZTpcbiAgICAgICAgICAgIGNhc2UgZmFpbHVyZVR5cGU6XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gbWFwQWN0aW9uVG9LZXkoYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBrZXkgdG8gYmUgYSBzdHJpbmcuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgICAgIFtrZXldOiB1cGRhdGVQYWdpbmF0aW9uKHN0YXRlW2tleV0sIGFjdGlvbilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3JlZHVjZXJzL3BhZ2luYXRlLnRzXG4gKiovIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9taWRkbGV3YXJlL2FwaSc7XG5pbXBvcnQgbW9kaWZ5UmVzcG9uc2UgZnJvbSAnLi4vbWlkZGxld2FyZS9tb2RpZnktcmVzcG9uc2UnO1xuaW1wb3J0IGhhbmRsZUluaXRpYWxTdGF0ZSBmcm9tICcuLi91dGlscy9oYW5kbGUtaW5pdGlhbC1zdGF0ZSc7XG5pbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcic7XG5jb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKCkge1xuICAgIGxldCBzdG9yZTtcbiAgICAvLyBpZihtb2R1bGUuaG90KSB7XG4gICAgLy8gICBtb2R1bGUuaG90LmFjY2VwdCgnLi4vcmVkdWNlcnMnLCAoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmUoJy4uL3JlZHVjZXJzJykuZGVmYXVsdFxuICAgIC8vICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihuZXh0Um9vdFJlZHVjZXIpXG4gICAgLy8gICB9KVxuICAgIC8vIH1cbiAgICAvLyBzZXJ2ZXIgc2lkZVxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCB7fSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rLCBhcGksIG1vZGlmeVJlc3BvbnNlKSk7XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICB9XG4gICAgaWYgKGVudiA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGhhbmRsZUluaXRpYWxTdGF0ZSgpLCBhcHBseU1pZGRsZXdhcmUodGh1bmssIGFwaSwgbW9kaWZ5UmVzcG9uc2UpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGhhbmRsZUluaXRpYWxTdGF0ZSgpLCBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSh0aHVuaywgYXBpLCBtb2RpZnlSZXNwb25zZSwgY3JlYXRlTG9nZ2VyKHsgY29sbGFwc2VkOiB0cnVlIH0pKSkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RvcmU7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvc3RvcmUvY29uZmlndXJlLXN0b3JlLnRzXG4gKiovIiwiZnVuY3Rpb24gaGFuZGxlSW5pdGlhbFN0YXRlKCkge1xuICAgIGxldCBpbml0aWFsU3RhdGU7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuX19JTklUSUFMX1NUQVRFX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGluaXRpYWxTdGF0ZSA9IHdpbmRvdy5fX0lOSVRJQUxfU1RBVEVfXztcbiAgICB9XG4gICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbn1cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUluaXRpYWxTdGF0ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9oYW5kbGUtaW5pdGlhbC1zdGF0ZS50c1xuICoqLyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvYmplY3RUb1VybGVuY29kZWQob3JpZ2luYWxPYmopIHtcbiAgICBsZXQgb2JqZWN0ID0gXy5jbG9uZURlZXAob3JpZ2luYWxPYmopO1xuICAgIGxldCBlbmNvZGVkdXJsID0gJyc7XG4gICAgZm9yIChsZXQgcHJvcCBpbiBvYmplY3QpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmplY3RbcHJvcF0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBvYmplY3RbcHJvcF0gPSBvYmplY3RbcHJvcF0udG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbmNvZGVkdXJsID0gYCR7ZW5jb2RlZHVybH0ke3Byb3B9PSR7b2JqZWN0W3Byb3BdfSZgO1xuICAgIH1cbiAgICByZXR1cm4gZW5jb2RlZHVybC5zdWJzdHIoMCwgZW5jb2RlZHVybC5sZW5ndGggLSAxKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9wYXJzZS1mb3JtLWRhdGEudHNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Qm9va1ZpZXcoKSB7XG4gICAgbGV0IGFzcGVjdFJhdGlvID0gNyAvIDk7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDU0MCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyZWVuOiAncGhvbmUnLFxuICAgICAgICAgICAgcGFnZVdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgICAgIHBhZ2VIZWlnaHQ6IHdpbmRvdy5pbm5lcldpZHRoIC8gYXNwZWN0UmF0aW9cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JlZW46ICdoZCcsXG4gICAgICAgICAgICBwYWdlV2lkdGg6IDcwMCxcbiAgICAgICAgICAgIHBhZ2VIZWlnaHQ6IDcwMCAvIGFzcGVjdFJhdGlvXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGxvY2tTY3JvbGwoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVubG9ja1Njcm9sbCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xufVxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldEJvb2tWaWV3LFxuICAgIGxvY2tTY3JvbGwsXG4gICAgdW5sb2NrU2Nyb2xsXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3V0aWxzL3ZpZXcudHNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9XG5cbnZhciByZXBlYXQgPSBmdW5jdGlvbiByZXBlYXQoc3RyLCB0aW1lcykge1xuICByZXR1cm4gbmV3IEFycmF5KHRpbWVzICsgMSkuam9pbihzdHIpO1xufTtcbnZhciBwYWQgPSBmdW5jdGlvbiBwYWQobnVtLCBtYXhMZW5ndGgpIHtcbiAgcmV0dXJuIHJlcGVhdChcIjBcIiwgbWF4TGVuZ3RoIC0gbnVtLnRvU3RyaW5nKCkubGVuZ3RoKSArIG51bTtcbn07XG52YXIgZm9ybWF0VGltZSA9IGZ1bmN0aW9uIGZvcm1hdFRpbWUodGltZSkge1xuICByZXR1cm4gXCJAIFwiICsgcGFkKHRpbWUuZ2V0SG91cnMoKSwgMikgKyBcIjpcIiArIHBhZCh0aW1lLmdldE1pbnV0ZXMoKSwgMikgKyBcIjpcIiArIHBhZCh0aW1lLmdldFNlY29uZHMoKSwgMikgKyBcIi5cIiArIHBhZCh0aW1lLmdldE1pbGxpc2Vjb25kcygpLCAzKTtcbn07XG5cbi8vIFVzZSB0aGUgbmV3IHBlcmZvcm1hbmNlIGFwaSB0byBnZXQgYmV0dGVyIHByZWNpc2lvbiBpZiBhdmFpbGFibGVcbnZhciB0aW1lciA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgcGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIgPyBwZXJmb3JtYW5jZSA6IERhdGU7XG5cbi8qKlxuICogcGFyc2UgdGhlIGxldmVsIG9wdGlvbiBvZiBjcmVhdGVMb2dnZXJcbiAqXG4gKiBAcHJvcGVydHkge3N0cmluZyB8IGZ1bmN0aW9uIHwgb2JqZWN0fSBsZXZlbCAtIGNvbnNvbGVbbGV2ZWxdXG4gKiBAcHJvcGVydHkge29iamVjdH0gYWN0aW9uXG4gKiBAcHJvcGVydHkge2FycmF5fSBwYXlsb2FkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZVxuICovXG5cbmZ1bmN0aW9uIGdldExvZ0xldmVsKGxldmVsLCBhY3Rpb24sIHBheWxvYWQsIHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlb2YgbGV2ZWwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihsZXZlbCkpIHtcbiAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICByZXR1cm4gdHlwZW9mIGxldmVsW3R5cGVdID09PSBcImZ1bmN0aW9uXCIgPyBsZXZlbFt0eXBlXS5hcHBseShsZXZlbCwgX3RvQ29uc3VtYWJsZUFycmF5KHBheWxvYWQpKSA6IGxldmVsW3R5cGVdO1xuICAgIGNhc2UgXCJmdW5jdGlvblwiOlxuICAgICAgcmV0dXJuIGxldmVsKGFjdGlvbik7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBsZXZlbDtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgbG9nZ2VyIHdpdGggZm9sbG93ZWQgb3B0aW9uc1xuICpcbiAqIEBuYW1lc3BhY2VcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyBmb3IgbG9nZ2VyXG4gKiBAcHJvcGVydHkge3N0cmluZyB8IGZ1bmN0aW9uIHwgb2JqZWN0fSBvcHRpb25zLmxldmVsIC0gY29uc29sZVtsZXZlbF1cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3B0aW9ucy5kdXJhdGlvbiAtIHByaW50IGR1cmF0aW9uIG9mIGVhY2ggYWN0aW9uP1xuICogQHByb3BlcnR5IHtib29sZWFufSBvcHRpb25zLnRpbWVzdGFtcCAtIHByaW50IHRpbWVzdGFtcCB3aXRoIGVhY2ggYWN0aW9uP1xuICogQHByb3BlcnR5IHtvYmplY3R9IG9wdGlvbnMuY29sb3JzIC0gY3VzdG9tIGNvbG9yc1xuICogQHByb3BlcnR5IHtvYmplY3R9IG9wdGlvbnMubG9nZ2VyIC0gaW1wbGVtZW50YXRpb24gb2YgdGhlIGBjb25zb2xlYCBBUElcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3B0aW9ucy5sb2dFcnJvcnMgLSBzaG91bGQgZXJyb3JzIGluIGFjdGlvbiBleGVjdXRpb24gYmUgY2F1Z2h0LCBsb2dnZWQsIGFuZCByZS10aHJvd24/XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG9wdGlvbnMuY29sbGFwc2VkIC0gaXMgZ3JvdXAgY29sbGFwc2VkP1xuICogQHByb3BlcnR5IHtib29sZWFufSBvcHRpb25zLnByZWRpY2F0ZSAtIGNvbmRpdGlvbiB3aGljaCByZXNvbHZlcyBsb2dnZXIgYmVoYXZpb3JcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG9wdGlvbnMuc3RhdGVUcmFuc2Zvcm1lciAtIHRyYW5zZm9ybSBzdGF0ZSBiZWZvcmUgcHJpbnRcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG9wdGlvbnMuYWN0aW9uVHJhbnNmb3JtZXIgLSB0cmFuc2Zvcm0gYWN0aW9uIGJlZm9yZSBwcmludFxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gb3B0aW9ucy5lcnJvclRyYW5zZm9ybWVyIC0gdHJhbnNmb3JtIGVycm9yIGJlZm9yZSBwcmludFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUxvZ2dlcigpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcbiAgdmFyIF9vcHRpb25zJGxldmVsID0gb3B0aW9ucy5sZXZlbDtcbiAgdmFyIGxldmVsID0gX29wdGlvbnMkbGV2ZWwgPT09IHVuZGVmaW5lZCA/IFwibG9nXCIgOiBfb3B0aW9ucyRsZXZlbDtcbiAgdmFyIF9vcHRpb25zJGxvZ2dlciA9IG9wdGlvbnMubG9nZ2VyO1xuICB2YXIgbG9nZ2VyID0gX29wdGlvbnMkbG9nZ2VyID09PSB1bmRlZmluZWQgPyBjb25zb2xlIDogX29wdGlvbnMkbG9nZ2VyO1xuICB2YXIgX29wdGlvbnMkbG9nRXJyb3JzID0gb3B0aW9ucy5sb2dFcnJvcnM7XG4gIHZhciBsb2dFcnJvcnMgPSBfb3B0aW9ucyRsb2dFcnJvcnMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfb3B0aW9ucyRsb2dFcnJvcnM7XG4gIHZhciBjb2xsYXBzZWQgPSBvcHRpb25zLmNvbGxhcHNlZDtcbiAgdmFyIHByZWRpY2F0ZSA9IG9wdGlvbnMucHJlZGljYXRlO1xuICB2YXIgX29wdGlvbnMkZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uO1xuICB2YXIgZHVyYXRpb24gPSBfb3B0aW9ucyRkdXJhdGlvbiA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfb3B0aW9ucyRkdXJhdGlvbjtcbiAgdmFyIF9vcHRpb25zJHRpbWVzdGFtcCA9IG9wdGlvbnMudGltZXN0YW1wO1xuICB2YXIgdGltZXN0YW1wID0gX29wdGlvbnMkdGltZXN0YW1wID09PSB1bmRlZmluZWQgPyB0cnVlIDogX29wdGlvbnMkdGltZXN0YW1wO1xuICB2YXIgdHJhbnNmb3JtZXIgPSBvcHRpb25zLnRyYW5zZm9ybWVyO1xuICB2YXIgX29wdGlvbnMkc3RhdGVUcmFuc2ZvID0gb3B0aW9ucy5zdGF0ZVRyYW5zZm9ybWVyO1xuICB2YXIgLy8gZGVwcmVjYXRlZFxuICBzdGF0ZVRyYW5zZm9ybWVyID0gX29wdGlvbnMkc3RhdGVUcmFuc2ZvID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH0gOiBfb3B0aW9ucyRzdGF0ZVRyYW5zZm87XG4gIHZhciBfb3B0aW9ucyRhY3Rpb25UcmFuc2YgPSBvcHRpb25zLmFjdGlvblRyYW5zZm9ybWVyO1xuICB2YXIgYWN0aW9uVHJhbnNmb3JtZXIgPSBfb3B0aW9ucyRhY3Rpb25UcmFuc2YgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChhY3RuKSB7XG4gICAgcmV0dXJuIGFjdG47XG4gIH0gOiBfb3B0aW9ucyRhY3Rpb25UcmFuc2Y7XG4gIHZhciBfb3B0aW9ucyRlcnJvclRyYW5zZm8gPSBvcHRpb25zLmVycm9yVHJhbnNmb3JtZXI7XG4gIHZhciBlcnJvclRyYW5zZm9ybWVyID0gX29wdGlvbnMkZXJyb3JUcmFuc2ZvID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH0gOiBfb3B0aW9ucyRlcnJvclRyYW5zZm87XG4gIHZhciBfb3B0aW9ucyRjb2xvcnMgPSBvcHRpb25zLmNvbG9ycztcbiAgdmFyIGNvbG9ycyA9IF9vcHRpb25zJGNvbG9ycyA9PT0gdW5kZWZpbmVkID8ge1xuICAgIHRpdGxlOiBmdW5jdGlvbiB0aXRsZSgpIHtcbiAgICAgIHJldHVybiBcIiMwMDAwMDBcIjtcbiAgICB9LFxuICAgIHByZXZTdGF0ZTogZnVuY3Rpb24gcHJldlN0YXRlKCkge1xuICAgICAgcmV0dXJuIFwiIzlFOUU5RVwiO1xuICAgIH0sXG4gICAgYWN0aW9uOiBmdW5jdGlvbiBhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gXCIjMDNBOUY0XCI7XG4gICAgfSxcbiAgICBuZXh0U3RhdGU6IGZ1bmN0aW9uIG5leHRTdGF0ZSgpIHtcbiAgICAgIHJldHVybiBcIiM0Q0FGNTBcIjtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiBlcnJvcigpIHtcbiAgICAgIHJldHVybiBcIiNGMjA0MDRcIjtcbiAgICB9XG4gIH0gOiBfb3B0aW9ucyRjb2xvcnM7XG5cbiAgLy8gZXhpdCBpZiBjb25zb2xlIHVuZGVmaW5lZFxuXG4gIGlmICh0eXBlb2YgbG9nZ2VyID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH07XG4gIH1cblxuICBpZiAodHJhbnNmb3JtZXIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiT3B0aW9uICd0cmFuc2Zvcm1lcicgaXMgZGVwcmVjYXRlZCwgdXNlIHN0YXRlVHJhbnNmb3JtZXIgaW5zdGVhZFwiKTtcbiAgfVxuXG4gIHZhciBsb2dCdWZmZXIgPSBbXTtcbiAgZnVuY3Rpb24gcHJpbnRCdWZmZXIoKSB7XG4gICAgbG9nQnVmZmVyLmZvckVhY2goZnVuY3Rpb24gKGxvZ0VudHJ5LCBrZXkpIHtcbiAgICAgIHZhciBzdGFydGVkID0gbG9nRW50cnkuc3RhcnRlZDtcbiAgICAgIHZhciBzdGFydGVkVGltZSA9IGxvZ0VudHJ5LnN0YXJ0ZWRUaW1lO1xuICAgICAgdmFyIGFjdGlvbiA9IGxvZ0VudHJ5LmFjdGlvbjtcbiAgICAgIHZhciBwcmV2U3RhdGUgPSBsb2dFbnRyeS5wcmV2U3RhdGU7XG4gICAgICB2YXIgZXJyb3IgPSBsb2dFbnRyeS5lcnJvcjtcbiAgICAgIHZhciB0b29rID0gbG9nRW50cnkudG9vaztcbiAgICAgIHZhciBuZXh0U3RhdGUgPSBsb2dFbnRyeS5uZXh0U3RhdGU7XG5cbiAgICAgIHZhciBuZXh0RW50cnkgPSBsb2dCdWZmZXJba2V5ICsgMV07XG4gICAgICBpZiAobmV4dEVudHJ5KSB7XG4gICAgICAgIG5leHRTdGF0ZSA9IG5leHRFbnRyeS5wcmV2U3RhdGU7XG4gICAgICAgIHRvb2sgPSBuZXh0RW50cnkuc3RhcnRlZCAtIHN0YXJ0ZWQ7XG4gICAgICB9XG4gICAgICAvLyBtZXNzYWdlXG4gICAgICB2YXIgZm9ybWF0dGVkQWN0aW9uID0gYWN0aW9uVHJhbnNmb3JtZXIoYWN0aW9uKTtcbiAgICAgIHZhciBpc0NvbGxhcHNlZCA9IHR5cGVvZiBjb2xsYXBzZWQgPT09IFwiZnVuY3Rpb25cIiA/IGNvbGxhcHNlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgICB9LCBhY3Rpb24pIDogY29sbGFwc2VkO1xuXG4gICAgICB2YXIgZm9ybWF0dGVkVGltZSA9IGZvcm1hdFRpbWUoc3RhcnRlZFRpbWUpO1xuICAgICAgdmFyIHRpdGxlQ1NTID0gY29sb3JzLnRpdGxlID8gXCJjb2xvcjogXCIgKyBjb2xvcnMudGl0bGUoZm9ybWF0dGVkQWN0aW9uKSArIFwiO1wiIDogbnVsbDtcbiAgICAgIHZhciB0aXRsZSA9IFwiYWN0aW9uIFwiICsgKHRpbWVzdGFtcCA/IGZvcm1hdHRlZFRpbWUgOiBcIlwiKSArIFwiIFwiICsgZm9ybWF0dGVkQWN0aW9uLnR5cGUgKyBcIiBcIiArIChkdXJhdGlvbiA/IFwiKGluIFwiICsgdG9vay50b0ZpeGVkKDIpICsgXCIgbXMpXCIgOiBcIlwiKTtcblxuICAgICAgLy8gcmVuZGVyXG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICBpZiAoY29sb3JzLnRpdGxlKSBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoXCIlYyBcIiArIHRpdGxlLCB0aXRsZUNTUyk7ZWxzZSBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQodGl0bGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChjb2xvcnMudGl0bGUpIGxvZ2dlci5ncm91cChcIiVjIFwiICsgdGl0bGUsIHRpdGxlQ1NTKTtlbHNlIGxvZ2dlci5ncm91cCh0aXRsZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyh0aXRsZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcmV2U3RhdGVMZXZlbCA9IGdldExvZ0xldmVsKGxldmVsLCBmb3JtYXR0ZWRBY3Rpb24sIFtwcmV2U3RhdGVdLCBcInByZXZTdGF0ZVwiKTtcbiAgICAgIHZhciBhY3Rpb25MZXZlbCA9IGdldExvZ0xldmVsKGxldmVsLCBmb3JtYXR0ZWRBY3Rpb24sIFtmb3JtYXR0ZWRBY3Rpb25dLCBcImFjdGlvblwiKTtcbiAgICAgIHZhciBlcnJvckxldmVsID0gZ2V0TG9nTGV2ZWwobGV2ZWwsIGZvcm1hdHRlZEFjdGlvbiwgW2Vycm9yLCBwcmV2U3RhdGVdLCBcImVycm9yXCIpO1xuICAgICAgdmFyIG5leHRTdGF0ZUxldmVsID0gZ2V0TG9nTGV2ZWwobGV2ZWwsIGZvcm1hdHRlZEFjdGlvbiwgW25leHRTdGF0ZV0sIFwibmV4dFN0YXRlXCIpO1xuXG4gICAgICBpZiAocHJldlN0YXRlTGV2ZWwpIHtcbiAgICAgICAgaWYgKGNvbG9ycy5wcmV2U3RhdGUpIGxvZ2dlcltwcmV2U3RhdGVMZXZlbF0oXCIlYyBwcmV2IHN0YXRlXCIsIFwiY29sb3I6IFwiICsgY29sb3JzLnByZXZTdGF0ZShwcmV2U3RhdGUpICsgXCI7IGZvbnQtd2VpZ2h0OiBib2xkXCIsIHByZXZTdGF0ZSk7ZWxzZSBsb2dnZXJbcHJldlN0YXRlTGV2ZWxdKFwicHJldiBzdGF0ZVwiLCBwcmV2U3RhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aW9uTGV2ZWwpIHtcbiAgICAgICAgaWYgKGNvbG9ycy5hY3Rpb24pIGxvZ2dlclthY3Rpb25MZXZlbF0oXCIlYyBhY3Rpb25cIiwgXCJjb2xvcjogXCIgKyBjb2xvcnMuYWN0aW9uKGZvcm1hdHRlZEFjdGlvbikgKyBcIjsgZm9udC13ZWlnaHQ6IGJvbGRcIiwgZm9ybWF0dGVkQWN0aW9uKTtlbHNlIGxvZ2dlclthY3Rpb25MZXZlbF0oXCJhY3Rpb25cIiwgZm9ybWF0dGVkQWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVycm9yICYmIGVycm9yTGV2ZWwpIHtcbiAgICAgICAgaWYgKGNvbG9ycy5lcnJvcikgbG9nZ2VyW2Vycm9yTGV2ZWxdKFwiJWMgZXJyb3JcIiwgXCJjb2xvcjogXCIgKyBjb2xvcnMuZXJyb3IoZXJyb3IsIHByZXZTdGF0ZSkgKyBcIjsgZm9udC13ZWlnaHQ6IGJvbGRcIiwgZXJyb3IpO2Vsc2UgbG9nZ2VyW2Vycm9yTGV2ZWxdKFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dFN0YXRlTGV2ZWwpIHtcbiAgICAgICAgaWYgKGNvbG9ycy5uZXh0U3RhdGUpIGxvZ2dlcltuZXh0U3RhdGVMZXZlbF0oXCIlYyBuZXh0IHN0YXRlXCIsIFwiY29sb3I6IFwiICsgY29sb3JzLm5leHRTdGF0ZShuZXh0U3RhdGUpICsgXCI7IGZvbnQtd2VpZ2h0OiBib2xkXCIsIG5leHRTdGF0ZSk7ZWxzZSBsb2dnZXJbbmV4dFN0YXRlTGV2ZWxdKFwibmV4dCBzdGF0ZVwiLCBuZXh0U3RhdGUpO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyhcIuKAlOKAlCBsb2cgZW5kIOKAlOKAlFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsb2dCdWZmZXIubGVuZ3RoID0gMDtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBnZXRTdGF0ZSA9IF9yZWYuZ2V0U3RhdGU7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAvLyBleGl0IGVhcmx5IGlmIHByZWRpY2F0ZSBmdW5jdGlvbiByZXR1cm5zIGZhbHNlXG4gICAgICAgIGlmICh0eXBlb2YgcHJlZGljYXRlID09PSBcImZ1bmN0aW9uXCIgJiYgIXByZWRpY2F0ZShnZXRTdGF0ZSwgYWN0aW9uKSkge1xuICAgICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbG9nRW50cnkgPSB7fTtcbiAgICAgICAgbG9nQnVmZmVyLnB1c2gobG9nRW50cnkpO1xuXG4gICAgICAgIGxvZ0VudHJ5LnN0YXJ0ZWQgPSB0aW1lci5ub3coKTtcbiAgICAgICAgbG9nRW50cnkuc3RhcnRlZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsb2dFbnRyeS5wcmV2U3RhdGUgPSBzdGF0ZVRyYW5zZm9ybWVyKGdldFN0YXRlKCkpO1xuICAgICAgICBsb2dFbnRyeS5hY3Rpb24gPSBhY3Rpb247XG5cbiAgICAgICAgdmFyIHJldHVybmVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChsb2dFcnJvcnMpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuZWRWYWx1ZSA9IG5leHQoYWN0aW9uKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBsb2dFbnRyeS5lcnJvciA9IGVycm9yVHJhbnNmb3JtZXIoZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybmVkVmFsdWUgPSBuZXh0KGFjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBsb2dFbnRyeS50b29rID0gdGltZXIubm93KCkgLSBsb2dFbnRyeS5zdGFydGVkO1xuICAgICAgICBsb2dFbnRyeS5uZXh0U3RhdGUgPSBzdGF0ZVRyYW5zZm9ybWVyKGdldFN0YXRlKCkpO1xuXG4gICAgICAgIHByaW50QnVmZmVyKCk7XG5cbiAgICAgICAgaWYgKGxvZ0VudHJ5LmVycm9yKSB0aHJvdyBsb2dFbnRyeS5lcnJvcjtcbiAgICAgICAgcmV0dXJuIHJldHVybmVkVmFsdWU7XG4gICAgICB9O1xuICAgIH07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlTG9nZ2VyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWxvZ2dlci9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDQpKSg2NTcpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2xpYlxuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oNCkpKDY3MCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2lkZS1lZmZlY3QvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3RfbGliXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg4KSkoNzUyKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9odW1wcy9odW1wcy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3V0aWxzX2xpYlxuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oOCkpKDc1Myk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tYnJvd3NlcmlmeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3V0aWxzX2xpYlxuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IElucHV0IGZyb20gJy4uL2VsZW1lbnRzL2Zvcm0vaW5wdXQnO1xuaW1wb3J0IHsgY2hhbmdlVmFsdWUgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5jbGFzcyBSSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHtuYW1lOiB0aGlzLnByb3BzLm5hbWUsIHZhbHVlOiBfLmdldCh0aGlzLnByb3BzLmVsZW1lbnRzW3RoaXMucHJvcHMuc3ltYm9sXSwgJ3ZhbHVlJywgJycpLCBwbGFjZWhvbGRlcjogdGhpcy5wcm9wcy5wbGFjZWhvbGRlciwgb25DaGFuZ2U6IGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hhbmdlVmFsdWUodGhpcy5wcm9wcy5zeW1ib2wsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH19KSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiAoe1xuICAgIGVsZW1lbnRzOiBzdGF0ZS5lbGVtZW50c1xufSksIHsgY2hhbmdlVmFsdWUgfSkoUklucHV0KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9yLWVsZW1lbnRzL3ItaW5wdXQudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi4vZWxlbWVudHMvZm9ybS90ZXh0YXJlYSc7XG5pbXBvcnQgeyBjaGFuZ2VWYWx1ZSB9IGZyb20gJy4uL2FjdGlvbnMnO1xuY2xhc3MgUlRleHRhcmVhIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRhcmVhLCB7dmFsdWU6IF8uZ2V0KHRoaXMucHJvcHMuZWxlbWVudHNbdGhpcy5wcm9wcy5zeW1ib2xdLCAndmFsdWUnLCAnJyksIHBsYWNlaG9sZGVyOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyLCBvbkNoYW5nZTogZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZSh0aGlzLnByb3BzLnN5bWJvbCwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfX0pKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+ICh7XG4gICAgZWxlbWVudHM6IHN0YXRlLmVsZW1lbnRzXG59KSwgeyBjaGFuZ2VWYWx1ZSB9KShSVGV4dGFyZWEpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3ItZWxlbWVudHMvci10ZXh0YXJlYS50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2VsZW1lbnRzL2xheW91dC9jb250YWluZXInO1xuY2xhc3MgQ29uc29sZUJyYW5kaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc0Ryb3Bkb3duTWVudVZpc2libGU6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvZ2dsZURyb3Bkb3duTWVudSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0Ryb3Bkb3duTWVudVZpc2libGU6ICF0aGlzLnN0YXRlLmlzRHJvcGRvd25NZW51VmlzaWJsZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgdXNlcm5hbWUgPSB0aGlzLnByb3BzLnVzZXJuYW1lO1xuICAgICAgICBsZXQgaXNBZG1pbiA9IHRoaXMucHJvcHMuaXNBZG1pbiA/IHRoaXMucHJvcHMuaXNBZG1pbiA6ICdmYWxzZSc7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImJyYW5kaW5nIGNvbnNvbGUtYnJhbmRpbmdcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCB7aXNGbHVpZDogdHJ1ZSwgY2xhc3NOYW1lOiBcImNsZWFyZml4XCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7Y2xhc3NOYW1lOiBcImxvZ28gbGVmdFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiL2NvbnNvbGVcIn0sIFwicmVhZHJcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwic2VwXCJ9LCBcInxcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwic3ViXCJ9LCBcIkNvbnNvbGVcIikpLCB1c2VybmFtZSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtvbk1vdXNlTGVhdmU6IHRoaXMudG9nZ2xlRHJvcGRvd25NZW51LmJpbmQodGhpcyksIG9uTW91c2VFbnRlcjogdGhpcy50b2dnbGVEcm9wZG93bk1lbnUuYmluZCh0aGlzKSwgY2xhc3NOYW1lOiBcIm5hdiByaWdodFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJ1c2VybmFtZVwifSwgdXNlcm5hbWUsIGlzQWRtaW4gPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJiYWRnZS1kYXJrXCJ9LCBcIkFkbWluXCIpKSA6IG51bGwpLCB0aGlzLnN0YXRlLmlzRHJvcGRvd25NZW51VmlzaWJsZSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJkcm9wZG93bi1tZW51XCJ9LCBpc0FkbWluID09PSB0cnVlID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCIvXCJ9LCBcIkJhY2sgdG8gcmVhZHJcIikpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogYC9wcm9maWxlLyR7dXNlcm5hbWV9YH0sIFwi5oiR55qE6LSm5Y+3XCIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiAnL2xvZ291dCd9LCBcIumAgOWHulwiKSkpKSA6IG51bGwpKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibmF2IHJpZ2h0XCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJuYXYtbGlua3NcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvc2lnbmluXCJ9LCBcIueZu+W9lVwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCIvc2lnbnVwXCJ9LCBcIuazqOWGjFwiKSkpKSkpKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvbnNvbGVCcmFuZGluZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb21wb25lbnRzL2NvbnNvbGUtYnJhbmRpbmcudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uLCBjaGFuZ2VWYWx1ZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgQnV0dG9uLCBTZWxlY3RpemVJbnB1dCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0nO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uLy4uL2VsZW1lbnRzL01vZGFsJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgYXBpcyBmcm9tICcuLi8uLi91dGlscy9hcGlzJztcbmltcG9ydCB7IGZldGNoRG91YmFuQm9va3MgfSBmcm9tICcuLi8uLi91dGlscy9hcGlzLXRoaXJkLXBhcnR5JztcbmltcG9ydCBSSW5wdXQgZnJvbSAnLi4vLi4vci1lbGVtZW50cy9yLWlucHV0JztcbmltcG9ydCBSVGV4dGFyZWEgZnJvbSAnLi4vLi4vci1lbGVtZW50cy9yLXRleHRhcmVhJztcbmNvbnN0IHN5bHMgPSB7XG4gICAgaW5wdXRCb29rTmFtZTogU3ltYm9sKCdpbnB1dEJvb2tOYW1lJyksXG4gICAgaW5wdXRCb29rQXV0aG9yOiBTeW1ib2woJ2lucHV0Qm9va0F1dGhvcicpLFxuICAgIGlucHV0QXV0aG9yTmFtZTogU3ltYm9sKCdpbnB1dEF1dGhvck5hbWUnKSxcbiAgICBpbnB1dEF1dGhvclNsdWc6IFN5bWJvbCgnaW5wdXRBdXRob3JTbHVnJyksXG4gICAgaW5wdXRCb29rQ292ZXI6IFN5bWJvbCgnaW5wdXRCb29rQ292ZXInKSxcbiAgICB0ZXh0YXJlYUF1dGhvckRlc2M6IFN5bWJvbCgndGV4dGFyZWFBdXRob3JEZXNjJyksXG4gICAgdGV4dGFyZWFCb29rRGVzYzogU3ltYm9sKCd0ZXh0YXJlYUJvb2tEZXNjJyksXG4gICAgdGV4dGFyZWFCb29rQ29udGVudDogU3ltYm9sKCd0ZXh0YXJlYUJvb2tDb250ZW50Jylcbn07XG5jbGFzcyBBZGRCb29rIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZGVmYXVsdFN0YXRlID0ge1xuICAgICAgICAgICAgYm9va1RpdGxlOiBbXSxcbiAgICAgICAgICAgIGJvb2tBdXRob3I6IFtdLFxuICAgICAgICAgICAgYXV0aG9yUmVzdWx0czogW10sXG4gICAgICAgICAgICBpc0FkZEF1dGhvck1vZGFsVmlzaWJsZTogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdFN0YXRlKTtcbiAgICAgICAgLy8gdG9kb1xuICAgICAgICAvLyB0aGlzLmZldGNoRG91YmFuQm9va3MgPSBfLmRlYm91bmNlKGZldGNoRG91YmFuQm9va3MsIDE1MClcbiAgICB9XG4gICAgcmVzZXRGb3JtKCkge1xuICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMuaW5wdXRCb29rQ292ZXIsICcnKTtcbiAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZShzeWxzLnRleHRhcmVhQm9va0Rlc2MsICcnKTtcbiAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZShzeWxzLnRleHRhcmVhQm9va0NvbnRlbnQsICcnKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmRlZmF1bHRTdGF0ZSk7XG4gICAgfVxuICAgIGFkZEJvb2soKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICB0aXRsZTogdGhpcy5zdGF0ZS5ib29rVGl0bGUubGVuZ3RoICE9PSAwID8gdGhpcy5zdGF0ZS5ib29rVGl0bGVbMF0udmFsdWUgOiAnJyxcbiAgICAgICAgICAgIGF1dGhvcjogdGhpcy5zdGF0ZS5ib29rQXV0aG9yLm1hcChhID0+IGEudmFsdWUpLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMucHJvcHMuZWxlbWVudHNbc3lscy50ZXh0YXJlYUJvb2tEZXNjXS52YWx1ZSxcbiAgICAgICAgICAgIGNvdmVyOiB0aGlzLnByb3BzLmVsZW1lbnRzW3N5bHMuaW5wdXRCb29rQ292ZXJdLnZhbHVlLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5wcm9wcy5lbGVtZW50c1tzeWxzLnRleHRhcmVhQm9va0NvbnRlbnRdLnZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIGFwaXMuYWRkQm9vayhkYXRhKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oJ+a3u+WKoOaIkOWKnycpO1xuICAgICAgICAgICAgdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWRkQXV0aG9yKCkge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5lbGVtZW50c1tzeWxzLmlucHV0QXV0aG9yTmFtZV0udmFsdWUsXG4gICAgICAgICAgICBzbHVnOiB0aGlzLnByb3BzLmVsZW1lbnRzW3N5bHMuaW5wdXRBdXRob3JTbHVnXS52YWx1ZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLnByb3BzLmVsZW1lbnRzW3N5bHMudGV4dGFyZWFBdXRob3JEZXNjXS52YWx1ZVxuICAgICAgICB9O1xuICAgICAgICBhcGlzLmFkZEF1dGhvcihkYXRhKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oJ+a3u+WKoOaIkOWKnycpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSByZXN1bHQub3BzWzBdLmlkO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYm9va0F1dGhvcjogWy4uLnRoaXMuc3RhdGUuYm9va0F1dGhvciwgeyBuYW1lOiBkYXRhLm5hbWUsIHZhbHVlOiBpZCB9XSxcbiAgICAgICAgICAgICAgICBpc0FkZEF1dGhvck1vZGFsVmlzaWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZShzeWxzLmlucHV0Qm9va0F1dGhvciwgJycpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZWFyY2hCb29rcyhxdWVyeSkge1xuICAgICAgICBpZiAocXVlcnkgIT09ICcnKSB7XG4gICAgICAgICAgICBmZXRjaERvdWJhbkJvb2tzKHF1ZXJ5KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNPZkJvb2tUaXRsZTogcmVzLmJvb2tzLm1hcChib29rID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBib29rLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGJvb2sudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGJvb2suc3VtbWFyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3ZlcjogYm9vay5pbWFnZXMubGFyZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiBib29rLmF1dGhvci5qb2luKCcsICcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VhcmNoQXV0aG9ycyhxdWVyeSkge1xuICAgICAgICBpZiAocXVlcnkgIT09ICcnKSB7XG4gICAgICAgICAgICBhcGlzLnNlYXJjaEF1dGhvcnMocXVlcnkpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zT2ZCb29rQXV0aG9yOiByZXNwb25zZS5tYXAociA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHIuaWRcbiAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG9wdGlvbnNPZkJvb2tBdXRob3I6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbCwge3dpZHRoOiA2MDAsIGlzVmlzaWJsZTogdGhpcy5zdGF0ZS5pc0FkZEF1dGhvck1vZGFsVmlzaWJsZSwgb25SZXF1ZXN0Q2xvc2U6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGlzQWRkQXV0aG9yTW9kYWxWaXNpYmxlOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH19LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge2NsYXNzTmFtZTogXCJwYWdlLXRpdGxlXCIsIHN0eWxlOiB7IG1hcmdpblRvcDogMCB9fSwgXCJBZGQgYXV0aG9yXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJJbnB1dCwge3BsYWNlaG9sZGVyOiBcIk5hbWVcIiwgc3ltYm9sOiBzeWxzLmlucHV0QXV0aG9yTmFtZX0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJJbnB1dCwge3BsYWNlaG9sZGVyOiBcIlNsdWdcIiwgc3ltYm9sOiBzeWxzLmlucHV0QXV0aG9yU2x1Z30pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJUZXh0YXJlYSwge3N5bWJvbDogc3lscy50ZXh0YXJlYUF1dGhvckRlc2MsIHBsYWNlaG9sZGVyOiBcIkRlc2NyaXB0aW9uXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHtvbkNsaWNrOiBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQXV0aG9yKCk7XG4gICAgICAgIH19LCBcIkFkZFwiKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7Y2xhc3NOYW1lOiBcInBhZ2UtdGl0bGVcIn0sIFwiQWRkIEJvb2tcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0aXplSW5wdXQsIHtwbGFjZWhvbGRlcjogXCJCb29rIHRpdGxlXCIsIG9uSW5wdXRDaGFuZ2U6IG5ld1ZhbHVlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQm9va3MobmV3VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZShzeWxzLmlucHV0Qm9va05hbWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSwgdmFsdWU6IF8uZ2V0KHRoaXMucHJvcHMuZWxlbWVudHNbc3lscy5pbnB1dEJvb2tOYW1lXSwgJ3ZhbHVlJywgJycpLCBvblZhbHVlc0NoYW5nZTogbmV3VmFsdWVzID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGJvb2tUaXRsZTogbmV3VmFsdWVzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgb3B0aW9uczogdGhpcy5zdGF0ZS5vcHRpb25zT2ZCb29rVGl0bGUsIHZhbHVlczogdGhpcy5zdGF0ZS5ib29rVGl0bGUsIG9uQWRkTmV3VmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgIC8vIHRvZG9cbiAgICAgICAgfSwgb25PcHRpb25DbGljazogb3B0aW9uID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hhbmdlVmFsdWUoc3lscy5pbnB1dEJvb2tDb3Zlciwgb3B0aW9uLmFkZGl0aW9uYWwuY292ZXIpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZShzeWxzLmlucHV0Qm9va0F1dGhvciwgb3B0aW9uLmFkZGl0aW9uYWwuYXV0aG9yKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hhbmdlVmFsdWUoc3lscy50ZXh0YXJlYUJvb2tEZXNjLCBvcHRpb24uYWRkaXRpb25hbC5kZXNjcmlwdGlvbik7XG4gICAgICAgIH19KSwgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3RpemVJbnB1dCwge3BsYWNlaG9sZGVyOiBcIkJvb2sgYXV0aG9yXCIsIG9uSW5wdXRDaGFuZ2U6IG5ld1ZhbHVlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQXV0aG9ycyhuZXdWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMuaW5wdXRCb29rQXV0aG9yLCBuZXdWYWx1ZSk7XG4gICAgICAgIH0sIHZhbHVlOiBfLmdldCh0aGlzLnByb3BzLmVsZW1lbnRzW3N5bHMuaW5wdXRCb29rQXV0aG9yXSwgJ3ZhbHVlJywgJycpLCBvblZhbHVlc0NoYW5nZTogbmV3VmFsdWVzID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGJvb2tBdXRob3I6IG5ld1ZhbHVlc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIG9wdGlvbnM6IHRoaXMuc3RhdGUub3B0aW9uc09mQm9va0F1dGhvciwgdmFsdWVzOiB0aGlzLnN0YXRlLmJvb2tBdXRob3IsIGFkZE5ld1ZhbHVlOiB0cnVlLCBvbkFkZE5ld1ZhbHVlOiB2YWx1ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMuaW5wdXRBdXRob3JOYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAvLyB0b2RvXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMuaW5wdXRBdXRob3JTbHVnLCB2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVZhbHVlKHN5bHMudGV4dGFyZWFBdXRob3JEZXNjLCAnJyk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc0FkZEF1dGhvck1vZGFsVmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9fSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUklucHV0LCB7cGxhY2Vob2xkZXI6IFwiQ292ZXJcIiwgc3ltYm9sOiBzeWxzLmlucHV0Qm9va0NvdmVyfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUlRleHRhcmVhLCB7cGxhY2Vob2xkZXI6IFwiRGVzY3JpcHRpb25cIiwgc3ltYm9sOiBzeWxzLnRleHRhcmVhQm9va0Rlc2N9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSVGV4dGFyZWEsIHtwbGFjZWhvbGRlcjogXCJQYXN0ZSBib29rIGNvbnRlbnQgaGVyZVwiLCBzeW1ib2w6IHN5bHMudGV4dGFyZWFCb29rQ29udGVudH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge29uQ2xpY2s6IGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5hZGRCb29rKCk7XG4gICAgICAgIH19LCBcIkFkZFwiKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgICBub3RpZmljYXRpb246IHN0YXRlLmNvbXBvbmVudHMubm90aWZpY2F0aW9uLFxuICAgIGVsZW1lbnRzOiBzdGF0ZS5lbGVtZW50c1xufSksIHsgc2VuZE5vdGlmaWNhdGlvbiwgY2hhbmdlVmFsdWUgfSkoQWRkQm9vayk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9jb25zb2xlL2FkZC1ib29rLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgY2hhbmdlVmFsdWUgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcbmltcG9ydCB7IEJ1dHRvbiwgU2VsZWN0aXplSW5wdXQgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9mb3JtJztcbmltcG9ydCBhcGlzIGZyb20gJy4uLy4uL3V0aWxzL2FwaXMnO1xuaW1wb3J0IFJJbnB1dCBmcm9tICcuLi8uLi9yLWVsZW1lbnRzL3ItaW5wdXQnO1xuaW1wb3J0IFJUZXh0YXJlYSBmcm9tICcuLi8uLi9yLWVsZW1lbnRzL3ItdGV4dGFyZWEnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmNvbnN0IHN5bHMgPSB7XG4gICAgaW5wdXRDb2xsZWN0aW9uTmFtZTogU3ltYm9sKCdpbnB1dENvbGxlY3Rpb25OYW1lJyksXG4gICAgaW5wdXRCb29rTmFtZTogU3ltYm9sKCdpbnB1dEJvb2tOYW1lJyksXG4gICAgdGV4dGFyZWFDb2xsZWN0aW9uRGVzYzogU3ltYm9sKCd0ZXh0YXJlYUNvbGxlY3Rpb25EZXNjJylcbn07XG5jbGFzcyBBZGRDb2xsZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZGVmYXVsdFN0YXRlID0ge1xuICAgICAgICAgICAgb3B0aW9uc09mQm9va3M6IFtdLFxuICAgICAgICAgICAgdmFsdWVzT2ZCb29rczogW10sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRTdGF0ZSk7XG4gICAgICAgIHRoaXMuYWRkQ29sbGVjdGlvbiA9IHRoaXMuYWRkQ29sbGVjdGlvbi5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICByZXNldEZvcm0oKSB7XG4gICAgICAgIHRoaXMucHJvcHMuY2hhbmdlVmFsdWUoc3lscy5pbnB1dENvbGxlY3Rpb25OYW1lLCAnJyk7XG4gICAgICAgIHRoaXMucHJvcHMuY2hhbmdlVmFsdWUoc3lscy50ZXh0YXJlYUNvbGxlY3Rpb25EZXNjLCAnJyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5kZWZhdWx0U3RhdGUpO1xuICAgIH1cbiAgICBhZGRDb2xsZWN0aW9uKCkge1xuICAgICAgICBsZXQgbmFtZSA9IHRoaXMucHJvcHMuZWxlbWVudHNbc3lscy5pbnB1dENvbGxlY3Rpb25OYW1lXS52YWx1ZTtcbiAgICAgICAgbGV0IGl0ZW1zID0gdGhpcy5zdGF0ZS52YWx1ZXNPZkJvb2tzLm1hcChhID0+IGEudmFsdWUpO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSB0aGlzLnByb3BzLmVsZW1lbnRzW3N5bHMudGV4dGFyZWFDb2xsZWN0aW9uRGVzY10udmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7IG5hbWUsIGl0ZW1zLCBkZXNjcmlwdGlvbiwgY3JlYXRvcjogdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIuaWQgfTtcbiAgICAgICAgYXBpcy5hZGRDb2xsZWN0aW9uKGRhdGEpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5re75Yqg5oiQ5Yqf77yBJyk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZWFyY2hCb29rcyhxdWVyeSkge1xuICAgICAgICBpZiAocXVlcnkgIT09ICcnKSB7XG4gICAgICAgICAgICBhcGlzLnNlYXJjaEJvb2tzKHF1ZXJ5KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc09mQm9va3M6IHJlc3BvbnNlLm1hcChyID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiByLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHIuaWRcbiAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzZWFyY2hUYWdzKHF1ZXJ5KSB7XG4gICAgLy8gICBpZihxdWVyeSAhPT0gJycpIHtcbiAgICAvLyAgICAgYXBpcy5zZWFyY2hUYWdzKHF1ZXJ5KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgIHRhZ1Jlc3VsdHM6IHJlc3BvbnNlXG4gICAgLy8gICAgICAgfSlcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge2NsYXNzTmFtZTogXCJwYWdlLXRpdGxlXCJ9LCBcIkFkZCBDb2xsZWN0aW9uXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJJbnB1dCwge3N5bWJvbDogc3lscy5pbnB1dENvbGxlY3Rpb25OYW1lLCBwbGFjZWhvbGRlcjogXCJOYW1lXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3RpemVJbnB1dCwge3BsYWNlaG9sZGVyOiBcIkJvb2tzXCIsIG9uSW5wdXRDaGFuZ2U6IG5ld1ZhbHVlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQm9va3MobmV3VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWYWx1ZShzeWxzLmlucHV0Qm9va05hbWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSwgdmFsdWU6IF8uZ2V0KHRoaXMucHJvcHMuZWxlbWVudHNbc3lscy5pbnB1dEJvb2tOYW1lXSwgJ3ZhbHVlJywgJycpLCBvblZhbHVlc0NoYW5nZTogbmV3VmFsdWVzID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHZhbHVlc09mQm9va3M6IG5ld1ZhbHVlc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIG9wdGlvbnM6IHRoaXMuc3RhdGUub3B0aW9uc09mQm9va3MsIHZhbHVlczogdGhpcy5zdGF0ZS52YWx1ZXNPZkJvb2tzfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUlRleHRhcmVhLCB7c3ltYm9sOiBzeWxzLnRleHRhcmVhQ29sbGVjdGlvbkRlc2MsIHBsYWNlaG9sZGVyOiBcIkRlc2NyaXB0aW9uXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHtvbkNsaWNrOiB0aGlzLmFkZENvbGxlY3Rpb259LCBcIkFkZFwiKSkpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5vdGlmaWNhdGlvbjogc3RhdGUuY29tcG9uZW50cy5ub3RpZmljYXRpb24sXG4gICAgICAgIGVsZW1lbnRzOiBzdGF0ZS5lbGVtZW50cyxcbiAgICAgICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvblxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBzZW5kTm90aWZpY2F0aW9uLCBjaGFuZ2VWYWx1ZSB9KShBZGRDb2xsZWN0aW9uKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2NvbnNvbGUvYWRkLWNvbGxlY3Rpb24udHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vZWxlbWVudHMvbGF5b3V0L2NvbnRhaW5lcic7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9pY29uJztcbmltcG9ydCBDb25zb2xlQnJhbmRpbmcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb25zb2xlLWJyYW5kaW5nJztcbmltcG9ydCB7IHVzZXJBdXRoLCBzZW5kTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgQWxlcnQgZnJvbSAnLi4vLi4vZWxlbWVudHMvYWxlcnQnO1xuaW1wb3J0IG1lbnVzIGZyb20gJy4vbWVudXMnO1xuY2xhc3MgQ29uc29sZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXNlckF1dGgoKTtcbiAgICB9XG4gICAgcmVuZGVyTWVudShtZW51TWFwcGluZywgY3VycmVudFBhdGgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRNZW51ID0ge1xuICAgICAgICAgICAgcm9vdEluZGV4OiAwLFxuICAgICAgICAgICAgc3ViSW5kZXg6IDBcbiAgICAgICAgfTtcbiAgICAgICAgbWVudU1hcHBpbmcuZm9yRWFjaCgoaXRlbSwgcm9vdEluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgc3ViSW5kZXg7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gaXRlbS5zdWJNZW51LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5wYXRoID09PSBjdXJyZW50UGF0aCkge1xuICAgICAgICAgICAgICAgICAgICBzdWJJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRNZW51LnJvb3RJbmRleCA9IHJvb3RJbmRleDtcbiAgICAgICAgICAgICAgICBjdXJyZW50TWVudS5zdWJJbmRleCA9IHN1YkluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHJvb3RNZW51ID0gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcIm5hdi1zaWRlIG5hdi1zaWRlLXJvb3RcIn0sIG1lbnVNYXBwaW5nLm1hcCgobWVudSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSBgbWVudS0ke21lbnUuY29tcG9uZW50fWA7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IGN1cnJlbnRNZW51LnJvb3RJbmRleCkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIGN1cnJlbnQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2tleTogaW5kZXgsIGNsYXNzTmFtZTogY2xhc3NOYW1lfSwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IGAvJHttZW51LnBhdGh9YH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwge25hbWU6IG1lbnUuY29tcG9uZW50fSkpKSk7XG4gICAgICAgIH0pKSk7XG4gICAgICAgIGxldCBzdWJNZW51ID0gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcIm5hdi1zaWRlIG5hdi1zaWRlLXN1YlwifSwgbWVudU1hcHBpbmdbY3VycmVudE1lbnUucm9vdEluZGV4XS5zdWJNZW51Lm1hcCgobWVudSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBjbGFzc05hbWUgPSBgbWVudS0ke21lbnUuY29tcG9uZW50fWA7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IGN1cnJlbnRNZW51LnN1YkluZGV4KSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgY3VycmVudCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7a2V5OiBpbmRleCwgY2xhc3NOYW1lOiBjbGFzc05hbWV9LCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogYC8ke21lbnUucGF0aH1gfSwgbWVudS5kaXNwbGF5TmFtZSkpKTtcbiAgICAgICAgfSkpKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwic2lkZWJhci1sZWZ0XCJ9LCByb290TWVudSwgc3ViTWVudSkpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBpc0FkbWluID0gdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIucm9sZSA9PT0gJ2FkbWluJyA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgbGV0IHVzZXJuYW1lID0gdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIudXNlcm5hbWUgPyB0aGlzLnByb3BzLnNlc3Npb24udXNlci51c2VybmFtZSA6IG51bGw7XG4gICAgICAgIGxldCBwYXRobmFtZSA9IHRoaXMucHJvcHMucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zID8gdGhpcy5wcm9wcy5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMucGF0aG5hbWUgOiAnY29uc29sZSc7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnNvbGVCcmFuZGluZywge2lzQWRtaW46IGlzQWRtaW4sIHVzZXJuYW1lOiB1c2VybmFtZX0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwge2lzRmx1aWQ6IHRydWV9LCB0aGlzLnByb3BzLm5vdGlmaWNhdGlvbnMuZmlsdGVyKG5vdGkgPT4gbm90aS52aXNpYmxlKS5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibm90aWZpY2F0aW9uc1wifSwgdGhpcy5wcm9wcy5ub3RpZmljYXRpb25zLm1hcCgobm90aSwgaW5kZXgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEFsZXJ0LCB7a2V5OiBpbmRleCwgdHlwZTogbm90aS50eXBlLCBtZXNzYWdlOiBub3RpLm1lc3NhZ2UsIHZpc2libGU6IG5vdGkudmlzaWJsZX0pKSkpKVxuICAgICAgICAgICAgOiBudWxsLCB0aGlzLnJlbmRlck1lbnUobWVudXMsIHBhdGhuYW1lKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbnRlbnRcIn0sIHRoaXMucHJvcHMuY2hpbGRyZW4pKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgICBub3RpZmljYXRpb25zOiBzdGF0ZS5jb21wb25lbnRzLm5vdGlmaWNhdGlvbnMsXG4gICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvbixcbiAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nXG59KSwgeyBzZW5kTm90aWZpY2F0aW9uLCB1c2VyQXV0aCB9KShDb25zb2xlKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2NvbnNvbGUvaG9tZS50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBCb2R5IGZyb20gJy4uLy4uL3NpZGUtZWZmZWN0cy9ib2R5JztcbmltcG9ydCBhcGlzIGZyb20gJy4uLy4uL3V0aWxzL2FwaXMnO1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgZmV0Y2hCb29rcyB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuY2xhc3MgTWFuYWdlQm9va3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgc3RhdGljIGZldGNoRGF0YSh7IHN0b3JlIH0pIHtcbiAgICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGZldGNoQm9va3MoKSk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoQm9va3MoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgYm9va0xpc3ROZXdlc3QgPSB0aGlzLnByb3BzLmJvb2tMaXN0TmV3ZXN0ID8gdGhpcy5wcm9wcy5ib29rTGlzdE5ld2VzdCA6IG51bGw7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHksIHtjbGFzc05hbWU6IFwibWFuYWdlLWJvb2tzXCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFwiSURcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBcIk5hbWVcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBcIkRhdGUgY3JlYXRlZFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFwiQWN0aW9uc1wiKSksIGJvb2tMaXN0TmV3ZXN0ID8gYm9va0xpc3ROZXdlc3QubWFwKChib29rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwge2tleTogaW5kZXh9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgYm9vay5pZCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBib29rLnRpdGxlKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIGJvb2suZGF0ZUNyZWF0ZWQpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge29uQ2xpY2s6IGUgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBhcGlzLmRlbGV0ZUJvb2soYm9vay5pZCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oJ+WIoOmZpOaIkOWKn++8gScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoQm9va3MoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9LCBocmVmOiBcIiNcIn0sIFwiRGVsZXRlXCIpKSkpO1xuICAgICAgICB9KSA6IG51bGwpKSkpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBib29rTGlzdE5ld2VzdDogc3RhdGUucGFnaW5hdGlvbi5ib29rcy5uZXdlc3RcbiAgICAgICAgICAgID8gc3RhdGUucGFnaW5hdGlvbi5ib29rcy5uZXdlc3QuaWRzLm1hcChpZCA9PiBzdGF0ZS5lbnRpdGllcy5ib29rc1tpZF0pXG4gICAgICAgICAgICA6IFtdLFxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBmZXRjaEJvb2tzLCBzZW5kTm90aWZpY2F0aW9uIH0pKE1hbmFnZUJvb2tzKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2NvbnNvbGUvbWFuYWdlLWJvb2tzLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZmV0Y2hVc2VyTGlzdCB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuY2xhc3MgTWFuYWdlVXNlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hVc2VyTGlzdCgpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB1c2VyTGlzdEFsbCA9IHRoaXMucHJvcHMudXNlckxpc3RBbGwgPyB0aGlzLnByb3BzLnVzZXJMaXN0QWxsIDogW107XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRib2R5XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgXCJJRFwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFwiTmFtZVwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIFwiRGF0ZSBjcmVhdGVkXCIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgXCJBY3Rpb25zXCIpKSwgdXNlckxpc3RBbGwubWFwKCh1c2VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwge2tleTogaW5kZXh9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgdXNlci5pZCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCB1c2VyLnVzZXJuYW1lKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIHVzZXIuZGF0ZUNyZWF0ZWQpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiI1wifSwgXCJEZWxldGVcIikpKSk7XG4gICAgICAgIH0pKSkpKTtcbiAgICB9XG59XG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gICAgY29uc3QgdHlwZSA9ICdhbGwnO1xuICAgIGNvbnN0IHsgcGFnaW5hdGlvbjogeyB1c2VyTGlzdCB9LCBlbnRpdGllczogeyB1c2VycyB9IH0gPSBzdGF0ZTtcbiAgICBjb25zdCB1c2VyTGlzdFBhZ2luYXRpb24gPSB1c2VyTGlzdFt0eXBlXTtcbiAgICBjb25zdCB1c2VyTGlzdEFsbCA9IHVzZXJMaXN0UGFnaW5hdGlvbiA/IHVzZXJMaXN0UGFnaW5hdGlvbi5pZHMubWFwKGlkID0+IHVzZXJzW2lkXSkgOiBbXTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VyTGlzdEFsbFxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBmZXRjaFVzZXJMaXN0IH0pKE1hbmFnZVVzZXJzKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9jb250YWluZXJzL2NvbnNvbGUvbWFuYWdlLXVzZXJzLnRzeFxuICoqLyIsImNvbnN0IG1lbnVzID0gW1xuICAgIHtcbiAgICAgICAgY29tcG9uZW50OiAnYm9va3MnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJycsXG4gICAgICAgIHBhdGg6ICdjb25zb2xlL21hbmFnZWJvb2tzJyxcbiAgICAgICAgc3ViTWVudTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogJ21hbmFnZWJvb2tzJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ01hbmFnZSBCb29rcycsXG4gICAgICAgICAgICAgICAgcGF0aDogJ2NvbnNvbGUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogJ2FkZGJvb2snLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnQWRkIEJvb2snLFxuICAgICAgICAgICAgICAgIHBhdGg6ICdjb25zb2xlL2FkZGJvb2snXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogJ2FkZGNvbGxlY3Rpb24nLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnQWRkIENvbGxlY3Rpb24nLFxuICAgICAgICAgICAgICAgIHBhdGg6ICdjb25zb2xlL2NvbGxlY3Rpb24vbmV3J1xuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvbXBvbmVudDogJ3VzZXJzJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICcnLFxuICAgICAgICBwYXRoOiAnY29uc29sZS9tYW5hZ2V1c2VycycsXG4gICAgICAgIHN1Yk1lbnU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICdtYW5hZ2V1c2VycycsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdNYW5hZ2UgVXNlcnMnLFxuICAgICAgICAgICAgICAgIHBhdGg6ICdjb25zb2xlL21hbmFnZXVzZXJzJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvbXBvbmVudDogJ2RhdGFiYXNlJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICcnLFxuICAgICAgICBwYXRoOiAnY29uc29sZS9tYW5hZ2Vib29rcycsXG4gICAgICAgIHN1Yk1lbnU6IFtdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNvbXBvbmVudDogJ3N0YXRpc3RpY3MnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJycsXG4gICAgICAgIHBhdGg6ICdjb25zb2xlL21hbmFnZWJvb2tzJyxcbiAgICAgICAgc3ViTWVudTogW11cbiAgICB9XG5dO1xuZXhwb3J0IGRlZmF1bHQgbWVudXM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvY29udGFpbmVycy9jb25zb2xlL21lbnVzLnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHZpZXcgZnJvbSAnLi4vdXRpbHMvdmlldyc7XG5pbXBvcnQgRmFkZSBmcm9tICcuLi9lbGVtZW50cy9hbmltYXRpb25zL2ZhZGUnO1xuY2xhc3MgTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1vZGFsSGVpZ2h0OiAwLFxuICAgICAgICAgICAgaXNNb2RhbEhpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICBpc01vZGFsVmVydGljYWxDZW50ZXI6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRWaWV3ID0gdGhpcy5zZXRWaWV3LmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGhpZGVNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZSgpO1xuICAgICAgICB2aWV3LnVubG9ja1Njcm9sbCgpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zZXRWaWV3KTtcbiAgICB9XG4gICAgc2V0VmlldygpIHtcbiAgICAgICAgbGV0IG1vZGFsSGVpZ2h0ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLm1vZGFsKS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGxldCBpc01vZGFsVmVydGljYWxDZW50ZXIgPSB0cnVlO1xuICAgICAgICBsZXQgZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA8IG1vZGFsSGVpZ2h0KSB7XG4gICAgICAgICAgICBpc01vZGFsVmVydGljYWxDZW50ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ID4gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbW9kYWxIZWlnaHQsXG4gICAgICAgICAgICBpc01vZGFsVmVydGljYWxDZW50ZXIsXG4gICAgICAgICAgICBkb2N1bWVudEhlaWdodFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICBpZiAocHJldlByb3BzLmlzVmlzaWJsZSA9PT0gZmFsc2UgJiYgdGhpcy5wcm9wcy5pc1Zpc2libGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmlldygpO1xuICAgICAgICAgICAgdmlldy5sb2NrU2Nyb2xsKCk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zZXRWaWV3KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zZXRWaWV3KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBkZWZhdWx0Q2xhc3MgPSAnbW9kYWwnO1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWUgPyBgJHtkZWZhdWx0Q2xhc3N9ICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YCA6IGRlZmF1bHRDbGFzcztcbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5wcm9wcy53aWR0aCA/IHRoaXMucHJvcHMud2lkdGggOiA1MDA7XG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLnN0YXRlLm1vZGFsSGVpZ2h0O1xuICAgICAgICBsZXQgc3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZHJvcDoge30sXG4gICAgICAgICAgICB2ZXJ0aWNhbENlbnRlcjoge30sXG4gICAgICAgICAgICBzY3JvbGw6IHt9LFxuICAgICAgICAgICAgbW9kYWw6IHt9XG4gICAgICAgIH07XG4gICAgICAgIGxldCBpc1Zpc2libGUgPSB0aGlzLnByb3BzLmlzVmlzaWJsZSA/IHRoaXMucHJvcHMuaXNWaXNpYmxlIDogZmFsc2U7XG4gICAgICAgIC8vIGxldCBvblJlcXVlc3RDbG9zZSA9IHRoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2U/dGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZTpudWxsXG4gICAgICAgIHN0eWxlLmJhY2tkcm9wID0ge1xuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC44NiknLFxuICAgICAgICAgICAgekluZGV4OiA5OTkwLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdzY3JvbGwnXG4gICAgICAgIH07XG4gICAgICAgIHN0eWxlLnZlcnRpY2FsQ2VudGVyID0ge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IC1oZWlnaHQgLyAyLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogLXdpZHRoIC8gMixcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgICAgICB0b3A6ICc1MCUnXG4gICAgICAgIH07XG4gICAgICAgIHN0eWxlLnNjcm9sbCA9IHtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgbWFyZ2luOiAnNTBweCBhdXRvJ1xuICAgICAgICB9O1xuICAgICAgICBzdHlsZS5tb2RhbCA9IHtcbiAgICAgICAgICAgIHBhZGRpbmc6ICczMHB4JyxcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjU3KSdcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNNb2RhbFZlcnRpY2FsQ2VudGVyKSB7XG4gICAgICAgICAgICBzdHlsZS5tb2RhbCA9IE9iamVjdC5hc3NpZ24oe30sIHN0eWxlLm1vZGFsLCBzdHlsZS52ZXJ0aWNhbENlbnRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdHlsZS5tb2RhbCA9IE9iamVjdC5hc3NpZ24oe30sIHN0eWxlLm1vZGFsLCBzdHlsZS5zY3JvbGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGYWRlLCBudWxsLCBpc1Zpc2libGUgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7b25DbGljazogdGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKSwgY2xhc3NOYW1lOiBcIm1vZGFsLWJhY2tkcm9wXCIsIHN0eWxlOiBzdHlsZS5iYWNrZHJvcH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge3N0eWxlOiBzdHlsZS5tb2RhbCwgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHJlZjogXCJtb2RhbFwiLCBvbkNsaWNrOiAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfX0sIHRoaXMucHJvcHMuY2hpbGRyZW4pKSkgOiBudWxsKSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvZWxlbWVudHMvTW9kYWwudHN4XG4gKiovIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgcm91dGVzIGZyb20gJy4uL3JvdXRlcy9jb25zb2xlJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IHN5bmNIaXN0b3J5V2l0aFN0b3JlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuLi9zdG9yZS9jb25maWd1cmUtc3RvcmUnO1xuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuY29uc3QgaGlzdG9yeSA9IHN5bmNIaXN0b3J5V2l0aFN0b3JlKGJyb3dzZXJIaXN0b3J5LCBzdG9yZSk7XG5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChQcm92aWRlciwge3N0b3JlOiBzdG9yZX0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7aGlzdG9yeTogaGlzdG9yeSwgcm91dGVzOiByb3V0ZXN9KSksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2VudHJ5L2NvbnNvbGUudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IENvbnNvbGUgZnJvbSAnLi4vY29udGFpbmVycy9jb25zb2xlL2hvbWUnO1xuaW1wb3J0IE1hbmFnZUJvb2tzIGZyb20gJy4uL2NvbnRhaW5lcnMvY29uc29sZS9tYW5hZ2UtYm9va3MnO1xuaW1wb3J0IE1hbmFnZVVzZXJzIGZyb20gJy4uL2NvbnRhaW5lcnMvY29uc29sZS9tYW5hZ2UtdXNlcnMnO1xuaW1wb3J0IEFkZEJvb2sgZnJvbSAnLi4vY29udGFpbmVycy9jb25zb2xlL2FkZC1ib29rJztcbmltcG9ydCBBZGRDb2xsZWN0aW9uIGZyb20gJy4uL2NvbnRhaW5lcnMvY29uc29sZS9hZGQtY29sbGVjdGlvbic7XG5pbXBvcnQgTm9NYXRjaCBmcm9tICcuLi9jb250YWluZXJzL25vLW1hdGNoJztcbmV4cG9ydCBkZWZhdWx0IChSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwiL2NvbnNvbGVcIiwgY29tcG9uZW50OiBDb25zb2xlfSwgUmVhY3QuY3JlYXRlRWxlbWVudChJbmRleFJvdXRlLCB7Y29tcG9uZW50OiBNYW5hZ2VCb29rc30pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCJtYW5hZ2Vib29rc1wiLCBjb21wb25lbnQ6IE1hbmFnZUJvb2tzfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtwYXRoOiBcIm1hbmFnZXVzZXJzXCIsIGNvbXBvbmVudDogTWFuYWdlVXNlcnN9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwiYWRkYm9va1wiLCBjb21wb25lbnQ6IEFkZEJvb2t9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge3BhdGg6IFwiY29sbGVjdGlvbi9uZXdcIiwgY29tcG9uZW50OiBBZGRDb2xsZWN0aW9ufSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7cGF0aDogXCIqXCIsIGNvbXBvbmVudDogTm9NYXRjaH0pKSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvcm91dGVzL2NvbnNvbGUudHN4XG4gKiovIiwiaW1wb3J0IGpzb25wIGZyb20gJy4vanNvbnAnO1xuaW1wb3J0IEFwaVJvb3RzIGZyb20gJy4uL2FwaS1jb25maWcvYXBpLXJvb3RzJztcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaERvdWJhbkJvb2tzKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIGpzb25wKGAke0FwaVJvb3RzLkRPVUJBTl9CT09LU30vc2VhcmNoP2NvdW50PTUmcT0ke3F1ZXJ5fWAsIHt9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9hcGlzLXRoaXJkLXBhcnR5LnRzXG4gKiovIiwiaW1wb3J0IGhhbmRsZVJlc3BvbnNlSnNvbiBmcm9tICcuL2hhbmRsZS1yZXNwb25zZS1qc29uJztcbmZ1bmN0aW9uIGpzb25wKGZ1bGxVcmwsIGNvbmZpZykge1xuICAgIGlmIChmdWxsVXJsLmluZGV4T2YoJ2RvdWJhbicpICE9PSAtMSkge1xuICAgICAgICBsZXQgaWQgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgICAgICAgbGV0IGpzb25wSWQgPSAnanNvbnAtJyArIGlkO1xuICAgICAgICBsZXQganNvbnBDYWxsYmFjayA9ICdqc29ucENhbGxiYWNrJyArIGlkO1xuICAgICAgICBsZXQganNvbnBDYWxsYmFja0RhdGEgPSBgX19KU09OUF9EQVRBXyR7aWR9X19gO1xuICAgICAgICB3aW5kb3dbanNvbnBDYWxsYmFja10gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgd2luZG93W2pzb25wQ2FsbGJhY2tEYXRhXSA9IGRhdGE7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgYCR7ZnVsbFVybH0mY2FsbGJhY2s9JHtqc29ucENhbGxiYWNrfWApO1xuICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdpZCcsIGpzb25wSWQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChqc29ucElkKSk7XG4gICAgICAgICAgICAgICAgbGV0IGpzb24gPSB3aW5kb3dbanNvbnBDYWxsYmFja0RhdGFdO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoaGFuZGxlUmVzcG9uc2VKc29uKGpzb24sIGNvbmZpZy5zY2hlbWEpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGpzb25wO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3V0aWxzL2pzb25wLnRzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==