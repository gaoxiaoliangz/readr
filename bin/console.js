module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(87);


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

	var _book = __webpack_require__(23);

	Object.keys(_book).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _book[key];
	        }
	    });
	});

	var _notification = __webpack_require__(24);

	Object.keys(_notification).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _notification[key];
	        }
	    });
	});

	var _user = __webpack_require__(25);

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

	var _button = __webpack_require__(31);

	var _button2 = _interopRequireDefault(_button);

	var _input = __webpack_require__(19);

	var _input2 = _interopRequireDefault(_input);

	var _selectizeInput = __webpack_require__(32);

	var _selectizeInput2 = _interopRequireDefault(_selectizeInput);

	var _textarea = __webpack_require__(20);

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

	var _reactSideEffect = __webpack_require__(36);

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

	__webpack_require__(18);

	var _parseFormData = __webpack_require__(16);

	var _parseFormData2 = _interopRequireDefault(_parseFormData);

	var _handleResponseJson = __webpack_require__(13);

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
/***/ function(module, exports) {

	module.exports = require("normalizr");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _normalizr = __webpack_require__(12);

	var _humps = __webpack_require__(17);

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
/* 14 */,
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ function(module, exports) {

	module.exports = require("humps");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 19 */
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
/* 21 */
/***/ function(module, exports) {

	module.exports = require("react-addons-css-transition-group");

/***/ },
/* 22 */,
/* 23 */
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

	var _schemas = __webpack_require__(37);

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
/* 24 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.userAuth = userAuth;
	exports.fetchProfile = fetchProfile;
	exports.fetchUserList = fetchUserList;
	exports.fetchShelf = fetchShelf;

	var _index = __webpack_require__(34);

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
/* 26 */,
/* 27 */
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
/* 28 */
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCssTransitionGroup = __webpack_require__(21);

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
/* 30 */
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _button = __webpack_require__(30);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _button2.default;

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
/* 33 */,
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Schemas = undefined;

	var _normalizr = __webpack_require__(12);

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
/* 35 */
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
/* 36 */
/***/ function(module, exports) {

	module.exports = require("react-side-effect");

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = require("schemas");

/***/ },
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(2);

	var _input = __webpack_require__(19);

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

	var _textarea = __webpack_require__(20);

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
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
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
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
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

	var _Modal = __webpack_require__(80);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _lodash = __webpack_require__(5);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _apis = __webpack_require__(15);

	var _apis2 = _interopRequireDefault(_apis);

	var _apisThirdParty = __webpack_require__(89);

	var _rInput = __webpack_require__(41);

	var _rInput2 = _interopRequireDefault(_rInput);

	var _rTextarea = __webpack_require__(42);

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

	var _actions = __webpack_require__(3);

	var _form = __webpack_require__(6);

	var _apis = __webpack_require__(15);

	var _apis2 = _interopRequireDefault(_apis);

	var _rInput = __webpack_require__(41);

	var _rInput2 = _interopRequireDefault(_rInput);

	var _rTextarea = __webpack_require__(42);

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
/* 66 */
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

	var _consoleBranding = __webpack_require__(53);

	var _consoleBranding2 = _interopRequireDefault(_consoleBranding);

	var _actions = __webpack_require__(3);

	var _alert = __webpack_require__(28);

	var _alert2 = _interopRequireDefault(_alert);

	var _menus = __webpack_require__(69);

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
/* 67 */
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

	var _apis = __webpack_require__(15);

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
/* 68 */
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
/* 69 */
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
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(99);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _view = __webpack_require__(35);

	var _view2 = _interopRequireDefault(_view);

	var _fade = __webpack_require__(29);

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
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _home = __webpack_require__(66);

	var _home2 = _interopRequireDefault(_home);

	var _manageBooks = __webpack_require__(67);

	var _manageBooks2 = _interopRequireDefault(_manageBooks);

	var _manageUsers = __webpack_require__(68);

	var _manageUsers2 = _interopRequireDefault(_manageUsers);

	var _addBook = __webpack_require__(64);

	var _addBook2 = _interopRequireDefault(_addBook);

	var _addCollection = __webpack_require__(65);

	var _addCollection2 = _interopRequireDefault(_addCollection);

	var _noMatch = __webpack_require__(27);

	var _noMatch2 = _interopRequireDefault(_noMatch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createElement(_reactRouter.Router, null, _react2.default.createElement(_reactRouter.Route, { path: "/console", component: _home2.default }, _react2.default.createElement(_reactRouter.IndexRoute, { component: _manageBooks2.default }), _react2.default.createElement(_reactRouter.Route, { path: "managebooks", component: _manageBooks2.default }), _react2.default.createElement(_reactRouter.Route, { path: "manageusers", component: _manageUsers2.default }), _react2.default.createElement(_reactRouter.Route, { path: "addbook", component: _addBook2.default }), _react2.default.createElement(_reactRouter.Route, { path: "collection/new", component: _addCollection2.default })), _react2.default.createElement(_reactRouter.Route, { path: "*", component: _noMatch2.default }));

/***/ },
/* 88 */,
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetchDoubanBooks = fetchDoubanBooks;

	var _jsonp = __webpack_require__(92);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _apiRoots = __webpack_require__(7);

	var _apiRoots2 = _interopRequireDefault(_apiRoots);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function fetchDoubanBooks(query) {
	    return (0, _jsonp2.default)(_apiRoots2.default.DOUBAN_BOOKS + '/search?count=5&q=' + query, {});
	}

/***/ },
/* 90 */,
/* 91 */,
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _handleResponseJson = __webpack_require__(13);

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
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ }
/******/ ]);