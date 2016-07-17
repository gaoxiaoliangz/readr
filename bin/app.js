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

	module.exports = __webpack_require__(112);


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

	module.exports = require("lodash");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 6 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactSideEffect = __webpack_require__(48);

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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.callApi = callApi;

	__webpack_require__(23);

	var _objectToUrlencoded = __webpack_require__(19);

	var _objectToUrlencoded2 = _interopRequireDefault(_objectToUrlencoded);

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
	                body = (0, _objectToUrlencoded2.default)(data);
	            } else {
	                // handle unsupported dataType
	                dataType = 'urlencoded';
	                contentType = 'application/x-www-form-urlencoded';
	                body = (0, _objectToUrlencoded2.default)(data);
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
/* 11 */
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
/* 12 */
/***/ function(module, exports) {

	module.exports = require("normalizr");

/***/ },
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _normalizr = __webpack_require__(12);

	var _humps = __webpack_require__(22);

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
/* 18 */
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

	var _callApi = __webpack_require__(10);

	var _callApi2 = _interopRequireDefault(_callApi);

	var _ApiRoots = __webpack_require__(7);

	var _ApiRoots2 = _interopRequireDefault(_ApiRoots);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function addCollection(data) {
	    return (0, _callApi2.default)(_ApiRoots2.default.LOCAL + 'collections', { method: 'POST', data: data });
	}
	/**
	 * data: name, author, description, cover, content
	 */
	function addBook(data) {
	    return (0, _callApi2.default)(_ApiRoots2.default.LOCAL + 'books', { method: 'POST', data: data });
	}
	/**
	 * data: name, slug, description
	 */
	function addAuthor(data) {
	    return (0, _callApi2.default)(_ApiRoots2.default.LOCAL + 'authors', { method: 'POST', data: data });
	}
	function searchAuthors(query) {
	    return (0, _callApi2.default)(_ApiRoots2.default.LOCAL + 'authors?q=' + query);
	}
	function searchBooks(query) {
	    return (0, _callApi2.default)(_ApiRoots2.default.LOCAL + 'books?q=' + query);
	}
	/**
	 * data: pageNo, pageSum, percentage
	 */
	function setProgress(bookId, data) {
	    (0, _callApi2.default)(_ApiRoots2.default.LOCAL + 'books/' + bookId + '/progress', { method: 'POST', data: data });
	}
	function deleteBook(id) {
	    return (0, _callApi2.default)(_ApiRoots2.default.LOCAL + 'books/' + id, {
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = objectToUrlencoded;

	var _lodash = __webpack_require__(4);

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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(44)
	  , createDesc = __webpack_require__(66);
	module.exports = __webpack_require__(28) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("humps");

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(5);

	var _BookList = __webpack_require__(51);

	var _BookList2 = _interopRequireDefault(_BookList);

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
	            return _react2.default.createElement("div", { className: "book-list-section" }, this.props.title && _react2.default.createElement("h2", { className: "section-title" }, title), moreLink ? _react2.default.createElement(_reactRouter.Link, { className: "more", to: moreLink }, "查看更多") : null, _react2.default.createElement(_BookList2.default, { bookEntities: this.props.bookEntities }));
	        }
	    }]);

	    return BookListSection;
	}(_react.Component);

	exports.default = BookListSection;

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
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(43);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(42)(function(){
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

	var _schemas = __webpack_require__(17);

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

	var _index = __webpack_require__(17);

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
	function fetchShelf(userId) {
	    return {
	        userId: userId,
	        CALL_API: {
	            types: ['SHELF_REQUEST', 'SHELF_SUCCESS', 'SHELF_FAILURE'],
	            endpoint: 'users/' + userId + '/shelf',
	            schema: _index.Schemas.BOOK_ARRAY
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

	var _reactRouter = __webpack_require__(5);

	var _Container = __webpack_require__(8);

	var _Container2 = _interopRequireDefault(_Container);

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
	            return _react2.default.createElement("div", { className: 'branding ' + (this.props.className ? this.props.className : '') }, _react2.default.createElement(_Container2.default, { className: "clearfix" }, _react2.default.createElement("div", null, _react2.default.createElement("h1", { className: "logo left" }, _react2.default.createElement(_reactRouter.Link, { to: "/" }, "readr")), _react2.default.createElement("div", { className: "nav left" }, _react2.default.createElement("ul", { className: "nav-links" }, _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: "/browse" }, "浏览")), _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: "/collections" }, "书单")))), username ? _react2.default.createElement("div", { onMouseLeave: this.toggleDropdownMenu.bind(this), onMouseEnter: this.toggleDropdownMenu.bind(this), className: "nav right" }, _react2.default.createElement("span", { className: "recent-reading" }, "最近阅读"), _react2.default.createElement("span", { className: "username" }, username, isAdmin ? _react2.default.createElement("span", { className: "badge-dark" }, "Admin") : null), this.state.isDropdownMenuVisible ? _react2.default.createElement("ul", { onClick: this.toggleDropdownMenu.bind(this), className: "dropdown-menu" }, isAdmin === true ? _react2.default.createElement("li", null, _react2.default.createElement("a", { href: "/console" }, "控制台")) : null, _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: '/shelf' }, "书架")), _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: '/profile' }, "个人主页")), _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: '/settings' }, "设置")), _react2.default.createElement("li", null, _react2.default.createElement("a", { href: '/logout' }, "退出"))) : null) : _react2.default.createElement("div", { className: "nav right" }, _react2.default.createElement("ul", { className: "nav-links" }, _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: "/signin" }, "登录")), _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: "/signup" }, "注册")))))));
	        }
	    }]);

	    return Branding;
	}(_react.Component);

	exports.default = Branding;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Icon = __webpack_require__(13);

	var _Icon2 = _interopRequireDefault(_Icon);

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
	            return _react2.default.createElement("div", null, this.props.visible && _react2.default.createElement("div", { className: ('notification notification--' + type + ' z1').trim() }, _react2.default.createElement(_Icon2.default, { onClick: this.props.onRequestClose, name: "close" }), this.props.message));
	        }
	    }]);

	    return Notification;
	}(_react.Component);

	exports.default = Notification;

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
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(27)
	  , IE8_DOM_DEFINE = __webpack_require__(134)
	  , toPrimitive    = __webpack_require__(149)
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(68)('keys')
	  , uid    = __webpack_require__(70);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(63)
	  , defined = __webpack_require__(41);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _fbjsLibExecutionEnvironment = __webpack_require__(49);

	var _fbjsLibExecutionEnvironment2 = _interopRequireDefault(_fbjsLibExecutionEnvironment);

	var _fbjsLibShallowEqual = __webpack_require__(50);

	var _fbjsLibShallowEqual2 = _interopRequireDefault(_fbjsLibShallowEqual);

	module.exports = function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
	  if (typeof reducePropsToState !== 'function') {
	    throw new Error('Expected reducePropsToState to be a function.');
	  }
	  if (typeof handleStateChangeOnClient !== 'function') {
	    throw new Error('Expected handleStateChangeOnClient to be a function.');
	  }
	  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
	    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
	  }

	  function getDisplayName(WrappedComponent) {
	    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	  }

	  return function wrap(WrappedComponent) {
	    if (typeof WrappedComponent !== 'function') {
	      throw new Error('Expected WrappedComponent to be a React component.');
	    }

	    var mountedInstances = [];
	    var state = undefined;

	    function emitChange() {
	      state = reducePropsToState(mountedInstances.map(function (instance) {
	        return instance.props;
	      }));

	      if (SideEffect.canUseDOM) {
	        handleStateChangeOnClient(state);
	      } else if (mapStateOnServer) {
	        state = mapStateOnServer(state);
	      }
	    }

	    var SideEffect = (function (_Component) {
	      _inherits(SideEffect, _Component);

	      function SideEffect() {
	        _classCallCheck(this, SideEffect);

	        _Component.apply(this, arguments);
	      }

	      SideEffect.peek = function peek() {
	        return state;
	      };

	      SideEffect.rewind = function rewind() {
	        if (SideEffect.canUseDOM) {
	          throw new Error('You may ony call rewind() on the server. Call peek() to read the current state.');
	        }

	        var recordedState = state;
	        state = undefined;
	        mountedInstances = [];
	        return recordedState;
	      };

	      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return !_fbjsLibShallowEqual2['default'](nextProps, this.props);
	      };

	      SideEffect.prototype.componentWillMount = function componentWillMount() {
	        mountedInstances.push(this);
	        emitChange();
	      };

	      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
	        emitChange();
	      };

	      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
	        var index = mountedInstances.indexOf(this);
	        mountedInstances.splice(index, 1);
	        emitChange();
	      };

	      SideEffect.prototype.render = function render() {
	        return _react2['default'].createElement(WrappedComponent, this.props);
	      };

	      _createClass(SideEffect, null, [{
	        key: 'displayName',

	        // Try to use displayName of wrapped component
	        value: 'SideEffect(' + getDisplayName(WrappedComponent) + ')',

	        // Expose canUseDOM so tests can monkeypatch it
	        enumerable: true
	      }, {
	        key: 'canUseDOM',
	        value: _fbjsLibExecutionEnvironment2['default'].canUseDOM,
	        enumerable: true
	      }]);

	      return SideEffect;
	    })(_react.Component);

	    return SideEffect;
	  };
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ExecutionEnvironment
	 */

	'use strict';

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;

/***/ },
/* 50 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 * @typechecks
	 * 
	 */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var bHasOwnProperty = hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Book = __webpack_require__(76);

	var _Book2 = _interopRequireDefault(_Book);

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

	                return _react2.default.createElement(_Book2.default, { id: book.id, key: index, title: title, author: author.map(function (a) {
	                        return a.refData ? a.refData.name : '';
	                    }).join(', '), description: description, cover: cover });
	            }) : null);
	        }
	    }]);

	    return BookList;
	}(_react.Component);

	exports.default = BookList;

/***/ },
/* 52 */
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
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(125), __esModule: true };

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(59)
	  , TAG = __webpack_require__(11)('toStringTag')
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

	var isObject = __webpack_require__(43)
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
	  , ctx       = __webpack_require__(132)
	  , hide      = __webpack_require__(20)
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
	var LIBRARY        = __webpack_require__(137)
	  , $export        = __webpack_require__(62)
	  , redefine       = __webpack_require__(145)
	  , hide           = __webpack_require__(20)
	  , has            = __webpack_require__(29)
	  , Iterators      = __webpack_require__(21)
	  , $iterCreate    = __webpack_require__(135)
	  , setToStringTag = __webpack_require__(67)
	  , getPrototypeOf = __webpack_require__(142)
	  , ITERATOR       = __webpack_require__(11)('iterator')
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
	var $keys       = __webpack_require__(143)
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

	var def = __webpack_require__(44).f
	  , has = __webpack_require__(29)
	  , TAG = __webpack_require__(11)('toStringTag');

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
	var defined = __webpack_require__(41);
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
	var $at  = __webpack_require__(146)(true);

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

	__webpack_require__(153);
	var global        = __webpack_require__(16)
	  , hide          = __webpack_require__(20)
	  , Iterators     = __webpack_require__(21)
	  , TO_STRING_TAG = __webpack_require__(11)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _lodash = __webpack_require__(4);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _objectUnfreeze = __webpack_require__(161);

	var _objectUnfreeze2 = _interopRequireDefault(_objectUnfreeze);

	var _isIterable = __webpack_require__(165);

	var _isIterable2 = _interopRequireDefault(_isIterable);

	var _parseStyleName = __webpack_require__(167);

	var _parseStyleName2 = _interopRequireDefault(_parseStyleName);

	var _generateAppendClassName = __webpack_require__(163);

	var _generateAppendClassName2 = _interopRequireDefault(_generateAppendClassName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var linkElement = function linkElement(element, styles, configuration) {
	    var appendClassName = void 0,
	        elementIsFrozen = void 0,
	        elementShallowCopy = void 0;

	    elementShallowCopy = element;

	    if (Object.isFrozen && Object.isFrozen(elementShallowCopy)) {
	        elementIsFrozen = true;

	        // https://github.com/facebook/react/blob/v0.13.3/src/classic/element/ReactElement.js#L131
	        elementShallowCopy = (0, _objectUnfreeze2.default)(elementShallowCopy);
	        elementShallowCopy.props = (0, _objectUnfreeze2.default)(elementShallowCopy.props);
	    }

	    var styleNames = (0, _parseStyleName2.default)(elementShallowCopy.props.styleName || '', configuration.allowMultiple);

	    if (_react2.default.isValidElement(elementShallowCopy.props.children)) {
	        elementShallowCopy.props.children = linkElement(_react2.default.Children.only(elementShallowCopy.props.children), styles, configuration);
	    } else if (_lodash2.default.isArray(elementShallowCopy.props.children) || (0, _isIterable2.default)(elementShallowCopy.props.children)) {
	        elementShallowCopy.props.children = _react2.default.Children.map(elementShallowCopy.props.children, function (node) {
	            if (_react2.default.isValidElement(node)) {
	                return linkElement(node, styles, configuration);
	            } else {
	                return node;
	            }
	        });
	    }

	    if (styleNames.length) {
	        appendClassName = (0, _generateAppendClassName2.default)(styles, styleNames, configuration.errorWhenNotFound);

	        if (appendClassName) {
	            if (elementShallowCopy.props.className) {
	                appendClassName = elementShallowCopy.props.className + ' ' + appendClassName;
	            }

	            elementShallowCopy.props.className = appendClassName;
	        }
	    }

	    delete elementShallowCopy.props.styleName;

	    if (elementIsFrozen) {
	        Object.freeze(elementShallowCopy.props);
	        Object.freeze(elementShallowCopy);
	    }

	    return elementShallowCopy;
	};

	/**
	 * @param {ReactElement} element
	 * @param {Object} styles CSS modules class map.
	 * @param {CSSModules~Options} configuration
	 */

	exports.default = function (element) {
	    var styles = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var configuration = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    // @see https://github.com/gajus/react-css-modules/pull/30
	    if (!_lodash2.default.isObject(element)) {
	        return element;
	    }

	    return linkElement(element, styles, configuration);
	};

	module.exports = exports['default'];

/***/ },
/* 74 */,
/* 75 */,
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

	var _BookInfoPopup = __webpack_require__(77);

	var _BookInfoPopup2 = _interopRequireDefault(_BookInfoPopup);

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
	            return _react2.default.createElement("li", { className: "book" }, _react2.default.createElement(_reactRouter.Link, { to: '/book/' + this.props.id }, _react2.default.createElement("div", { className: "book-cover" }, _react2.default.createElement("img", { src: this.props.cover })), _react2.default.createElement("div", { className: "book-meta" }, _react2.default.createElement("span", { title: this.props.title, className: "book-name" }, this.props.title), _react2.default.createElement("span", { className: "book-author" }, this.props.author))), _react2.default.createElement(_BookInfoPopup2.default, { bookId: this.props.id, title: this.props.title, author: this.props.author, description: this.props.description }));
	        }
	    }]);

	    return Book;
	}(_react.Component);

	exports.default = Book;

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

	var _Button = __webpack_require__(6);

	var _Button2 = _interopRequireDefault(_Button);

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
	            return _react2.default.createElement("div", { className: "book-info-popup popup" }, _react2.default.createElement("h2", { className: "title" }, title), _react2.default.createElement("p", { className: "author" }, author), _react2.default.createElement(_Button2.default, { color: "blue", to: '/viewer/book/' + bookId }, "阅读"), _react2.default.createElement("div", { className: "description" }, _react2.default.createElement("p", null, description)));
	        }
	    }]);

	    return BookInfoPopup;
	}(_react.Component);

	exports.default = BookInfoPopup;

/***/ },
/* 78 */
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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _BookPage = __webpack_require__(78);

	var _BookPage2 = _interopRequireDefault(_BookPage);

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
	                    return _react2.default.createElement(_BookPage2.default, { style: page.props.style, bookId: _this2.props.bookId, key: index, page: page });
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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Container = __webpack_require__(8);

	var _Container2 = _interopRequireDefault(_Container);

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
	            return _react2.default.createElement("div", { className: "colophon" }, _react2.default.createElement(_Container2.default, null, _react2.default.createElement("p", null, "© 2015－2016 readrweb.com, all rights reserved")));
	        }
	    }]);

	    return Colophon;
	}(_react.Component);

	exports.default = Colophon;

/***/ },
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

	var _reactRedux = __webpack_require__(2);

	var _Switcher = __webpack_require__(37);

	var _Switcher2 = _interopRequireDefault(_Switcher);

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
	            return _react2.default.createElement("div", { className: "viewer-preference" }, _react2.default.createElement("ul", { className: "options" }, _react2.default.createElement("li", { className: "option option-font-size" }, _react2.default.createElement("span", null, "A"), _react2.default.createElement("span", null, "A")), _react2.default.createElement("li", { className: "option option-scroll" }, _react2.default.createElement("span", { className: "label" }, "滚动模式"), _react2.default.createElement(_Switcher2.default, { on: true })), _react2.default.createElement("li", { className: "option option-theme" }, _react2.default.createElement("span", { style: { background: '#fff' } }, "theme1"), _react2.default.createElement("span", { style: { background: '#eee' } }, "theme2"), _react2.default.createElement("span", { style: { background: '#222' } }, "theme3"))));
	        }
	    }]);

	    return ViewerPreference;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)()(ViewerPreference);

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
/* 85 */
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

	var _Branding = __webpack_require__(35);

	var _Branding2 = _interopRequireDefault(_Branding);

	var _Container = __webpack_require__(8);

	var _Container2 = _interopRequireDefault(_Container);

	var _Colophon = __webpack_require__(81);

	var _Colophon2 = _interopRequireDefault(_Colophon);

	var _index = __webpack_require__(3);

	var _reactCssModules = __webpack_require__(164);

	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

	var _Button = __webpack_require__(6);

	var _Button2 = _interopRequireDefault(_Button);

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

	// const styles = require('containers/App.scss')
	var styles = __webpack_require__(159);

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
	            return _react2.default.createElement("div", null, _react2.default.createElement(_Branding2.default, { styleName: "fuck", isAdmin: isAdmin, username: username }), _react2.default.createElement(_Button2.default, __assign({}, { styleName: 'btn' }), "test"), _react2.default.createElement(_Container2.default, null, this.props.children), _react2.default.createElement(_Colophon2.default, null), _react2.default.createElement("div", null));
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
	}, { userAuth: _index.userAuth })(App);

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

	var _Switcher = __webpack_require__(37);

	var _Switcher2 = _interopRequireDefault(_Switcher);

	var _BookListSection = __webpack_require__(24);

	var _BookListSection2 = _interopRequireDefault(_BookListSection);

	var _index = __webpack_require__(3);

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
	            return _react2.default.createElement("div", { className: "archive page-content" }, _react2.default.createElement("div", { className: "page-header" }, _react2.default.createElement("ul", { className: "categories" }, _react2.default.createElement("li", { className: "current" }, "全部"), _react2.default.createElement("li", null, "全部"), _react2.default.createElement("li", null, "全部"), _react2.default.createElement("li", null, "全部"), _react2.default.createElement("li", null, "全部"), _react2.default.createElement("li", null, "全部"), _react2.default.createElement("li", null, "全部")), _react2.default.createElement("ul", { className: "left dropdown-menu" }, _react2.default.createElement("li", null, "时间"), _react2.default.createElement("li", null, "热度"), _react2.default.createElement("li", null, "名称")), _react2.default.createElement("div", { className: "right" }, _react2.default.createElement("div", { className: "label" }, "不显示我读过的"), _react2.default.createElement(_Switcher2.default, { on: false }))), _react2.default.createElement(_BookListSection2.default, { bookEntities: this.props.newestBooks }), _react2.default.createElement("div", { className: "page-load-more" }, "加载更多"));
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
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchBooks: _index.fetchBooks, fetchCollections: _index.fetchCollections })(Archive);

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(2);

	var _index = __webpack_require__(3);

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
	}, { fetchCollections: _index.fetchCollections })(ArchivedCollection);

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

	var _reactRedux = __webpack_require__(2);

	var _index = __webpack_require__(3);

	var _Loading = __webpack_require__(52);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _Button = __webpack_require__(6);

	var _Button2 = _interopRequireDefault(_Button);

	var _lodash = __webpack_require__(4);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _Body = __webpack_require__(9);

	var _Body2 = _interopRequireDefault(_Body);

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
	            return _react2.default.createElement("article", { className: "book-info content-container" }, _react2.default.createElement(_Body2.default, { className: "book-info" }), _lodash2.default.isEmpty(bookInfo) ? _react2.default.createElement(_Loading2.default, null) : null, _react2.default.createElement("header", { className: "book-info-header" }, _react2.default.createElement("div", { className: "left-col" }, bookInfo.cover ? _react2.default.createElement("div", { className: "book-cover" }, _react2.default.createElement("img", { src: bookInfo.cover })) : null), _react2.default.createElement("div", { className: "right-col" }, _react2.default.createElement("h1", { className: "book-name" }, bookInfo.title), _react2.default.createElement("div", { className: "book-author" }, _react2.default.createElement("strong", null, "作者：", bookInfo.author ? bookInfo.author.map(function (a) {
	                return a.refData ? a.refData.name : '';
	            }).join(', ') : '')), bookInfo.title ? _react2.default.createElement("div", null, _react2.default.createElement(_Button2.default, { to: '/viewer/book/' + bookInfo.id, color: "blue" }, "阅读"), _react2.default.createElement(_Button2.default, null, "添加到书架"), _react2.default.createElement(_Button2.default, null, "标记为已读"), _react2.default.createElement(_Button2.default, null, "收藏")) : null)), bookInfo.description ? _react2.default.createElement("div", null, _react2.default.createElement("h2", null, "内容简介"), _react2.default.createElement("p", null, bookInfo.description)) : null);
	        }
	    }], [{
	        key: 'fetchData',
	        value: function fetchData(_ref) {
	            var store = _ref.store;
	            var params = _ref.params;

	            return store.dispatch((0, _index.fetchBook)(params.id));
	        }
	    }]);

	    return BookInfo;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	    return { bookInfo: state.entities.books[ownProps.params.id] };
	}, { fetchBook: _index.fetchBook })(BookInfo);

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

	var _index = __webpack_require__(3);

	var _BookListSection = __webpack_require__(24);

	var _BookListSection2 = _interopRequireDefault(_BookListSection);

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
	            this.props.fetchBooks();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var bookList = this.props.newestBooks;
	            return _react2.default.createElement("div", null, _react2.default.createElement(_BookListSection2.default, { bookEntities: bookList, title: "我的书架" }));
	        }
	    }], [{
	        key: 'fetchData',
	        value: function fetchData(_ref) {
	            var store = _ref.store;
	            var params = _ref.params;

	            return store.dispatch((0, _index.fetchBooks)());
	        }
	    }]);

	    return BookShelf;
	}(_react.Component);

	function mapStateToProps(state, ownProps) {
	    return {
	        newestBooks: state.pagination.books.newest ? state.pagination.books.newest.ids.map(function (id) {
	            return state.entities.books[id];
	        }) : []
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchBooks: _index.fetchBooks })(BookShelf);

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

	var _Button = __webpack_require__(6);

	var _Button2 = _interopRequireDefault(_Button);

	var _index = __webpack_require__(3);

	var _BookList = __webpack_require__(51);

	var _BookList2 = _interopRequireDefault(_BookList);

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
	            return _react2.default.createElement("div", { className: "collection" }, _react2.default.createElement("div", { className: "page-header" }, _react2.default.createElement("div", { className: "page-title" }, bookCollection.name), _react2.default.createElement("div", { className: "sub-title" }, "10 本书"), _react2.default.createElement("div", { className: "book-slider" }, _react2.default.createElement(_BookList2.default, { bookEntities: items })), _react2.default.createElement(_Button2.default, null, "收藏")), _react2.default.createElement("div", { className: "page-content" }, _react2.default.createElement("p", null, bookCollection.description)));
	        }
	    }]);

	    return Collection;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	    return { bookCollection: state.entities.bookCollections[ownProps.params.id] };
	}, { fetchCollection: _index.fetchCollection })(Collection);

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

	var _reactRouter = __webpack_require__(5);

	var _index = __webpack_require__(3);

	var _BookListSection = __webpack_require__(24);

	var _BookListSection2 = _interopRequireDefault(_BookListSection);

	var _CandyBox = __webpack_require__(80);

	var _CandyBox2 = _interopRequireDefault(_CandyBox);

	var _Body = __webpack_require__(9);

	var _Body2 = _interopRequireDefault(_Body);

	var _Button = __webpack_require__(6);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.fetchBooks();
	            this.props.fetchCollections();
	        }
	    }, {
	        key: 'componentWillReceiveProps',
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
	        key: 'render',
	        value: function render() {
	            var newestBooks = this.props.newestBooks;
	            var listName = this.props.collection ? this.props.collection.name : '';
	            var list = this.props.collection ? this.props.collection.items.filter(function (item) {
	                return Boolean(item.refData);
	            }).map(function (item) {
	                return item.refData;
	            }) : [];
	            return _react2.default.createElement("div", null, _react2.default.createElement(_Body2.default, { className: "home" }), _react2.default.createElement("div", { className: "row" }, this.props.session.user.role === 'visitor' && !this.props.session.isFetching ? _react2.default.createElement("div", { className: "hero-image" }, _react2.default.createElement("div", { className: "logo" }, "Readr"), _react2.default.createElement("div", { className: "page-title" }, "新一代 web 阅读体验"), _react2.default.createElement(_Button2.default, { to: "/signup" }, "注册")) : null, _react2.default.createElement("div", { className: "col-md-8" }, _react2.default.createElement(_BookListSection2.default, { bookEntities: newestBooks, title: "新书速递" }), _react2.default.createElement(_BookListSection2.default, { bookEntities: list, title: listName, moreLink: '/collections/' + (this.props.collection ? this.props.collection.id : '') }), _react2.default.createElement(_reactRouter.Link, { className: "view-more", to: "/collections" }, "浏览更多书单 >")), _react2.default.createElement("div", { className: "col-md-4" }, this.state.showRecentReading ? _react2.default.createElement(_CandyBox2.default, { title: "最近阅读", list: [] }) : null)));
	        }
	    }], [{
	        key: 'fetchData',
	        value: function fetchData(_ref) {
	            var store = _ref.store;

	            return store.dispatch((0, _index.fetchBooks)());
	        }
	    }]);

	    return Home;
	}(_react.Component);

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

	var _index = __webpack_require__(3);

	var _NavTab = __webpack_require__(53);

	var _NavTab2 = _interopRequireDefault(_NavTab);

	var _BookListSection = __webpack_require__(24);

	var _BookListSection2 = _interopRequireDefault(_BookListSection);

	var _Button = __webpack_require__(6);

	var _Button2 = _interopRequireDefault(_Button);

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
	            return _react2.default.createElement("div", { className: "profile" }, _react2.default.createElement("div", { className: "page-header" }, _react2.default.createElement("div", { className: "user-avatar" }, _react2.default.createElement("img", { src: "https://img3.doubanio.com/icon/ul43646706-43.jpg", alt: "user_avatar" })), _react2.default.createElement("span", { className: "username" }, "username"), _react2.default.createElement("span", { className: "tagline" }, "something to say"), _react2.default.createElement(_Button2.default, null, "编辑")), _react2.default.createElement(_NavTab2.default, { tabs: ['收藏', '读过', '书评'], current: 0 }), _react2.default.createElement("div", null, _react2.default.createElement(_BookListSection2.default, { title: "😄", bookEntities: newestBooks })));
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
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _index.sendNotification, fetchBooks: _index.fetchBooks, fetchCollections: _index.fetchCollections, fetchShelf: _index.fetchShelf })(Profile);

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

	var _index = __webpack_require__(3);

	var _Notification = __webpack_require__(36);

	var _Notification2 = _interopRequireDefault(_Notification);

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
	                return _react2.default.createElement(_Notification2.default, { key: index, type: noti.type, message: noti.message, visible: noti.visible });
	            })) : null, this.props.children);
	        }
	    }]);

	    return Root;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	    return { notifications: state.components.notifications };
	}, { sendNotification: _index.sendNotification })(Root);

/***/ },
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

	var _index = __webpack_require__(3);

	var _NavTab = __webpack_require__(53);

	var _NavTab2 = _interopRequireDefault(_NavTab);

	var _Body = __webpack_require__(9);

	var _Body2 = _interopRequireDefault(_Body);

	var _Switcher = __webpack_require__(37);

	var _Switcher2 = _interopRequireDefault(_Switcher);

	var _lodash = __webpack_require__(4);

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
	            return _react2.default.createElement("div", { className: "settings" }, _react2.default.createElement(_Body2.default, { className: "page-settings" }), _react2.default.createElement("div", { className: "page-content" }, _react2.default.createElement("div", { className: "page-header" }, _react2.default.createElement("h1", { className: "page-title" }, "设置"), _react2.default.createElement(_NavTab2.default, { tabs: ['资料', '个人主页'], current: 0 })), _react2.default.createElement("ul", { className: "options" }, _react2.default.createElement("li", { className: "option" }, _react2.default.createElement("h2", null, "用户名"), _react2.default.createElement("span", { className: "option-input" }, "http://readrweb.com/@", _react2.default.createElement("strong", null, user.username)), _react2.default.createElement("span", { className: "edit" }, "编辑")), _react2.default.createElement("li", { className: "option" }, _react2.default.createElement("h2", null, "邮箱"), _react2.default.createElement("span", { className: "option-input" }, user.email), _react2.default.createElement("span", { className: "edit" }, "编辑")), _react2.default.createElement("li", { className: "option" }, _react2.default.createElement("h2", null, "密码"), _react2.default.createElement("span", { className: "option-input" }, "******"), _react2.default.createElement("span", { className: "edit" }, "编辑")), _react2.default.createElement("li", { className: "option" }, _react2.default.createElement("h2", null, "公开展示我的收藏"), _react2.default.createElement("span", { className: "option-desc" }, "关闭后其他用户将无法查看您的收藏"), _react2.default.createElement(_Switcher2.default, { on: true })))));
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
	}, { sendNotification: _index.sendNotification, userAuth: _index.userAuth, fetchProfile: _index.fetchProfile })(Profile);

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

	var _reactRouter = __webpack_require__(5);

	var _ApiRoots = __webpack_require__(7);

	var _ApiRoots2 = _interopRequireDefault(_ApiRoots);

	var _callApi = __webpack_require__(10);

	var _callApi2 = _interopRequireDefault(_callApi);

	var _index = __webpack_require__(3);

	var _Branding = __webpack_require__(35);

	var _Branding2 = _interopRequireDefault(_Branding);

	var _Input = __webpack_require__(25);

	var _Input2 = _interopRequireDefault(_Input);

	var _Button = __webpack_require__(6);

	var _Button2 = _interopRequireDefault(_Button);

	var _Container = __webpack_require__(8);

	var _Container2 = _interopRequireDefault(_Container);

	var _Body = __webpack_require__(9);

	var _Body2 = _interopRequireDefault(_Body);

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
	            (0, _callApi2.default)(_ApiRoots2.default.LOCAL + 'auth', { method: 'POST', data: params }).then(function (res) {
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
	            return _react2.default.createElement("div", null, _react2.default.createElement(_Body2.default, { className: "signin" }), _react2.default.createElement(_Branding2.default, null), _react2.default.createElement(_Container2.default, null, _react2.default.createElement("form", { className: "content-container", action: _ApiRoots2.default.LOCAL + 'auth', method: "post" }, _react2.default.createElement("h1", { className: "page-title" }, "欢迎回来"), _react2.default.createElement(_Input2.default, { onChange: this.handleInput.bind(this), value: this.state.login, name: "login", placeholder: "用户名或邮箱" }), _react2.default.createElement(_Input2.default, { onChange: this.handleInput.bind(this), value: this.state.password, name: "password", placeholder: "密码", type: "password" }), _react2.default.createElement(_Button2.default, { className: "z1", color: "blue", onClick: this.handleSignin.bind(this) }, "登录"), _react2.default.createElement("p", { className: "hint" }, "没有账号？", _react2.default.createElement(_reactRouter.Link, { to: "/signup" }, "注册")))));
	        }
	    }]);

	    return Signin;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        notification: state.components.notification,
	        user: state.user
	    };
	}, { sendNotification: _index.sendNotification })(Signin);

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

	var _reactRedux = __webpack_require__(2);

	var _reactRouter = __webpack_require__(5);

	var _ApiRoots = __webpack_require__(7);

	var _ApiRoots2 = _interopRequireDefault(_ApiRoots);

	var _callApi = __webpack_require__(10);

	var _callApi2 = _interopRequireDefault(_callApi);

	var _index = __webpack_require__(3);

	var _Branding = __webpack_require__(35);

	var _Branding2 = _interopRequireDefault(_Branding);

	var _Input = __webpack_require__(25);

	var _Input2 = _interopRequireDefault(_Input);

	var _Button = __webpack_require__(6);

	var _Button2 = _interopRequireDefault(_Button);

	var _Container = __webpack_require__(8);

	var _Container2 = _interopRequireDefault(_Container);

	var _Body = __webpack_require__(9);

	var _Body2 = _interopRequireDefault(_Body);

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
	            (0, _callApi2.default)(_ApiRoots2.default.LOCAL + 'users', { method: 'POST', data: params }).then(function (res) {
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
	            return _react2.default.createElement("div", null, _react2.default.createElement(_Body2.default, { className: "signup" }), _react2.default.createElement(_Branding2.default, null), _react2.default.createElement(_Container2.default, null, _react2.default.createElement("form", { className: "content-container", method: "post", action: "/signup" }, _react2.default.createElement("h1", { className: "page-title" }, "加入 Readr"), _react2.default.createElement(_Input2.default, { onChange: this.handleInput.bind(this), value: this.state.username, name: "username", placeholder: "用户名" }), _react2.default.createElement(_Input2.default, { onChange: this.handleInput.bind(this), value: this.state.email, name: "email", placeholder: "邮箱" }), _react2.default.createElement(_Input2.default, { onChange: this.handleInput.bind(this), value: this.state.password, name: "password", placeholder: "密码 ", type: "password" }), _react2.default.createElement(_Button2.default, { className: "z1", color: "blue", onClick: this.handleSignup.bind(this) }, "注册"), _react2.default.createElement("p", { className: "hint" }, "没有账号？", _react2.default.createElement(_reactRouter.Link, { to: "/signin" }, "登录")))));
	        }
	    }]);

	    return Signup;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        notification: state.components.notification,
	        user: state.user
	    };
	}, { sendNotification: _index.sendNotification })(Signup);

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

	var _reactRouter = __webpack_require__(5);

	var _reactRedux = __webpack_require__(2);

	var _redux = __webpack_require__(31);

	var _reactAddonsCssTransitionGroup = __webpack_require__(30);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _Icon = __webpack_require__(13);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Loading = __webpack_require__(52);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _Dialog = __webpack_require__(104);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _BookPageList = __webpack_require__(79);

	var _BookPageList2 = _interopRequireDefault(_BookPageList);

	var _renderBook2 = __webpack_require__(120);

	var _renderBook = _interopRequireWildcard(_renderBook2);

	var _view = __webpack_require__(40);

	var _cache = __webpack_require__(116);

	var _object = __webpack_require__(119);

	var _index = __webpack_require__(3);

	var _apis = __webpack_require__(18);

	var _apis2 = _interopRequireDefault(_apis);

	var _Body = __webpack_require__(9);

	var _Body2 = _interopRequireDefault(_Body);

	var _lodash = __webpack_require__(4);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _ViewerPreference = __webpack_require__(83);

	var _ViewerPreference2 = _interopRequireDefault(_ViewerPreference);

	var _Fade = __webpack_require__(39);

	var _Fade2 = _interopRequireDefault(_Fade);

	var _ViewerScrollbar = __webpack_require__(84);

	var _ViewerScrollbar2 = _interopRequireDefault(_ViewerScrollbar);

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
	            return _react2.default.createElement("div", { onClick: this.clickToToggleBookPanel.bind(this) }, _react2.default.createElement(_BookPageList2.default, { height: height, view: view, bookId: bookId, pages: pages }));
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
	            return _react2.default.createElement("div", { className: 'viewer viewer--' + view.screen, onMouseMove: this.toggleBookPanel.bind(this) }, _react2.default.createElement(_Body2.default, { className: "viewer" }), !book.content && !this.state.calculatedPages ? _react2.default.createElement(_Loading2.default, null) : null, this.state.showProgressDialog ? _react2.default.createElement(_Dialog2.default, { actions: actions, content: "are you sure?" }) : null, _react2.default.createElement(_reactAddonsCssTransitionGroup2.default, { component: "div", transitionName: "slide", transitionEnterTimeout: 300, transitionLeaveTimeout: 300 }, this.state.showPanel && this.state.isReadingMode || this.state.showViewerPreference ? _react2.default.createElement("div", { className: "viewer-panel" }, _react2.default.createElement("div", { className: "container" }, _react2.default.createElement("div", { className: "back" }, _react2.default.createElement(_reactRouter.Link, { to: "/" }, _react2.default.createElement(_Icon2.default, { name: "back" }), _react2.default.createElement("span", null, "返回"))), _react2.default.createElement("span", { className: "title" }, book.title), _react2.default.createElement("div", { onClick: this.toggleViewerPreference, className: "preference" }, _react2.default.createElement(_Icon2.default, { name: "font" })), _react2.default.createElement("div", { className: "add" }, "点击添加至书架"), _react2.default.createElement(_Fade2.default, null, this.state.showViewerPreference ? _react2.default.createElement(_ViewerPreference2.default, null) : null))) : null), this.state.isCalculatingDom && this.state.bookHtml ? _react2.default.createElement("ul", { className: "pages" }, _react2.default.createElement("li", null, _react2.default.createElement("div", { ref: "bookHtml", className: "content", dangerouslySetInnerHTML: { __html: this.state.bookHtml } }))) : null, this.state.isReadingMode ? this.renderBook() : null, _react2.default.createElement(_ViewerScrollbar2.default, { current: 20, total: 309 }));
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
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */
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
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(5);

	var _NoMatch = __webpack_require__(38);

	var _NoMatch2 = _interopRequireDefault(_NoMatch);

	var _Viewer = __webpack_require__(97);

	var _Viewer2 = _interopRequireDefault(_Viewer);

	var _Signin = __webpack_require__(95);

	var _Signin2 = _interopRequireDefault(_Signin);

	var _Signup = __webpack_require__(96);

	var _Signup2 = _interopRequireDefault(_Signup);

	var _BookInfo = __webpack_require__(88);

	var _BookInfo2 = _interopRequireDefault(_BookInfo);

	var _App = __webpack_require__(85);

	var _App2 = _interopRequireDefault(_App);

	var _Home = __webpack_require__(91);

	var _Home2 = _interopRequireDefault(_Home);

	var _Profile = __webpack_require__(92);

	var _Profile2 = _interopRequireDefault(_Profile);

	var _BookShelf = __webpack_require__(89);

	var _BookShelf2 = _interopRequireDefault(_BookShelf);

	var _Settings = __webpack_require__(94);

	var _Settings2 = _interopRequireDefault(_Settings);

	var _Archive = __webpack_require__(86);

	var _Archive2 = _interopRequireDefault(_Archive);

	var _Collection = __webpack_require__(90);

	var _Collection2 = _interopRequireDefault(_Collection);

	var _ArchivedCollection = __webpack_require__(87);

	var _ArchivedCollection2 = _interopRequireDefault(_ArchivedCollection);

	var _Root = __webpack_require__(93);

	var _Root2 = _interopRequireDefault(_Root);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createElement(_reactRouter.Router, null, _react2.default.createElement(_reactRouter.Route, { path: "/", component: _Root2.default }, _react2.default.createElement(_reactRouter.Route, { component: _App2.default }, _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }), _react2.default.createElement(_reactRouter.Route, { path: "book/:id", component: _BookInfo2.default }), _react2.default.createElement(_reactRouter.Route, { path: "profile/:userId", component: _Profile2.default }), _react2.default.createElement(_reactRouter.Route, { path: "shelf", component: _BookShelf2.default }), _react2.default.createElement(_reactRouter.Route, { path: "settings", component: _Settings2.default }), _react2.default.createElement(_reactRouter.Route, { path: "browse", component: _Archive2.default }), _react2.default.createElement(_reactRouter.Route, { path: "collections/:id", component: _Collection2.default }), _react2.default.createElement(_reactRouter.Route, { path: "collections", component: _ArchivedCollection2.default })), _react2.default.createElement(_reactRouter.Route, { path: "signin", component: _Signin2.default }), _react2.default.createElement(_reactRouter.Route, { path: "signup", component: _Signup2.default }), _react2.default.createElement(_reactRouter.Route, { path: "viewer/book/:id", component: _Viewer2.default }), _react2.default.createElement(_reactRouter.Route, { path: "*", component: _NoMatch2.default })));

/***/ },
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */
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
/* 117 */,
/* 118 */,
/* 119 */
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
/* 120 */
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
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(126), __esModule: true };

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(127), __esModule: true };

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(128), __esModule: true };

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _isIterable2 = __webpack_require__(121);

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
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(72);
	__webpack_require__(71);
	module.exports = __webpack_require__(151);

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(72);
	__webpack_require__(71);
	module.exports = __webpack_require__(152);

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(15)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(154);
	module.exports = __webpack_require__(15).Object.assign;

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(47)
	  , toLength  = __webpack_require__(148)
	  , toIndex   = __webpack_require__(147);
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
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(129);
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
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16).document && document.documentElement;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(28) && !__webpack_require__(42)(function(){
	  return Object.defineProperty(__webpack_require__(60)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(139)
	  , descriptor     = __webpack_require__(66)
	  , setToStringTag = __webpack_require__(67)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(20)(IteratorPrototype, __webpack_require__(11)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 137 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(65)
	  , gOPS     = __webpack_require__(141)
	  , pIE      = __webpack_require__(144)
	  , toObject = __webpack_require__(69)
	  , IObject  = __webpack_require__(63)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(42)(function(){
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
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(27)
	  , dPs         = __webpack_require__(140)
	  , enumBugKeys = __webpack_require__(61)
	  , IE_PROTO    = __webpack_require__(45)('IE_PROTO')
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
	  __webpack_require__(133).appendChild(iframe);
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
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(44)
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
/* 141 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(29)
	  , toObject    = __webpack_require__(69)
	  , IE_PROTO    = __webpack_require__(45)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(29)
	  , toIObject    = __webpack_require__(47)
	  , arrayIndexOf = __webpack_require__(131)(false)
	  , IE_PROTO     = __webpack_require__(45)('IE_PROTO');

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
/* 144 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(20);

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(46)
	  , defined   = __webpack_require__(41);
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
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(46)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(46)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(43);
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
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(58)
	  , ITERATOR  = __webpack_require__(11)('iterator')
	  , Iterators = __webpack_require__(21);
	module.exports = __webpack_require__(15).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(27)
	  , get      = __webpack_require__(150);
	module.exports = __webpack_require__(15).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(58)
	  , ITERATOR  = __webpack_require__(11)('iterator')
	  , Iterators = __webpack_require__(21);
	module.exports = __webpack_require__(15).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(130)
	  , step             = __webpack_require__(136)
	  , Iterators        = __webpack_require__(21)
	  , toIObject        = __webpack_require__(47);

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
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(62);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(138)});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(156)();
	// imports


	// module
	exports.push([module.id, "/*:root {\n--fontSize: 1rem;\n--mainColor: blue;\n--highlightColor: hwb(190, 35%, 20%);\n}\n\n:root {\n  --centered: {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  };\n}*/\n\n/*.centered {\n  @apply --centered;\n}\n\n.fuck {\n  @apply --centered;\n  color: var(--mainColor);\n}\n\n.btn {\n  font-size: 2rem;\n  height: 52px;\n  color: var(--mainColor);\n  composes: var1 from './_lib.css';\n}*/\n\n/*$a: blue;*/\n\n/*:root {\n  --varA: composes: var1 from './_lib.css';\n}*/\n\n.App__fuck-Q3ezm {\n  width: 1000px;\n}\n\n.App__btn-1WIxj {\n  /*color: $a;*/\n  width: 500px;\n  color: blue;\n  color: red;\n  background-image: none;\n  background-color: transparent;\n  border-color: red;\n  background: url(" + __webpack_require__(157) + ");\n}\n\n.App__btn-1WIxj:hover {\n  color: #fff;\n  background-color: red;\n  border-color: red;\n}\n\n.App__btn-1WIxj:focus,\n.App__btn-1WIxj.App__focus-hDGvD {\n  color: #fff;\n  background-color: red;\n  border-color: red;\n}\n\n.App__btn-1WIxj:active,\n.App__btn-1WIxj.App__active-UqBx_ {\n  color: #fff;\n  background-color: red;\n  border-color: red;\n}\n\n.App__btn-1WIxj:active:hover,\n.App__btn-1WIxj:active:focus,\n.App__btn-1WIxj:active.App__focus-hDGvD,\n.App__btn-1WIxj.App__active-UqBx_:hover,\n.App__btn-1WIxj.App__active-UqBx_:focus,\n.App__btn-1WIxj.App__active-UqBx_.App__focus-hDGvD {\n  color: #fff;\n  background-color: #a80000;\n  border-color: maroon;\n}\n\n.App__btn-1WIxj.App__disabled-3PszQ:focus,\n.App__btn-1WIxj.App__disabled-3PszQ.App__focus-hDGvD,\n.App__btn-1WIxj:disabled:focus,\n.App__btn-1WIxj:disabled.App__focus-hDGvD {\n  border-color: #ff6666;\n}\n\n.App__btn-1WIxj.App__disabled-3PszQ:hover,\n.App__btn-1WIxj:disabled:hover {\n  border-color: #ff6666;\n}\n\n/*.btn {\n   width: 300px;\n   composes: btn from './_lib.css';\n}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2xpYW5nL2Rldi9yZWFkci9zcmMvY2xpZW50L2NvbnRhaW5lcnMvQXBwLnNjc3MiLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZy9kZXYvcmVhZHIvc3JjL2NsaWVudC9jb250YWluZXJzL0FwcC5zY3NzIiwiL1VzZXJzL2xpYW5nL2Rldi9yZWFkci9zcmMvY2xpZW50L2NvbnRhaW5lcnMvX2xpYi5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qOnJvb3Qge1xuLS1mb250U2l6ZTogMXJlbTtcbi0tbWFpbkNvbG9yOiBibHVlO1xuLS1oaWdobGlnaHRDb2xvcjogaHdiKDE5MCwgMzUlLCAyMCUpO1xufVxuXG46cm9vdCB7XG4gIC0tY2VudGVyZWQ6IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH07XG59Ki9cblxuLyouY2VudGVyZWQge1xuICBAYXBwbHkgLS1jZW50ZXJlZDtcbn1cblxuLmZ1Y2sge1xuICBAYXBwbHkgLS1jZW50ZXJlZDtcbiAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XG59XG5cbi5idG4ge1xuICBmb250LXNpemU6IDJyZW07XG4gIGhlaWdodDogNTJweDtcbiAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XG4gIGNvbXBvc2VzOiB2YXIxIGZyb20gJy4vX2xpYi5jc3MnO1xufSovXG5cbi8vIDpyb290IHtcbi8vICAgLS12YXIyOiByZWQ7XG4vLyAgIC8qY29tcG9zZXM6IHJvb3QgZnJvbSAnLi9fbGliLmNzcycqL1xuLy8gfVxuXG4vKiRhOiBibHVlOyovXG5cbkBpbXBvcnQgXCJjb250YWluZXJzL19saWIuc2Nzc1wiO1xuXG4vKjpyb290IHtcbiAgLS12YXJBOiBjb21wb3NlczogdmFyMSBmcm9tICcuL19saWIuY3NzJztcbn0qL1xuXG4uZnVjayB7XG4gIHdpZHRoOiAxMDAwcHg7XG59XG4uYnRuIHtcbiAgLypjb2xvcjogJGE7Ki9cbiAgd2lkdGg6IDUwMHB4O1xuICBjb2xvcjogJHZhcjE7XG4gIEBpbmNsdWRlIGJ1dHRvbi1vdXRsaW5lLXZhcmlhbnQocmVkKTtcbiAgYmFja2dyb3VuZDogdXJsKGltZy9jbGVhcjIucG5nKTtcbn1cbi8qLmJ0biB7XG4gICB3aWR0aDogMzAwcHg7XG4gICBjb21wb3NlczogYnRuIGZyb20gJy4vX2xpYi5jc3MnO1xufSovXG5cblxuXG4iLCIkdmFyMTogYmx1ZTtcblxuQG1peGluIGJ1dHRvbi1vdXRsaW5lLXZhcmlhbnQoJGNvbG9yKSB7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6ICRjb2xvcjtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yO1xuICB9XG5cbiAgJjpmb2N1cyxcbiAgJi5mb2N1cyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcjtcbiAgfVxuXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcjtcblxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyxcbiAgICAmLmZvY3VzIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvciwgMTclKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkY29sb3IsIDI1JSk7XG4gICAgfVxuICB9XG5cbiAgJi5kaXNhYmxlZCxcbiAgJjpkaXNhYmxlZCB7XG4gICAgJjpmb2N1cyxcbiAgICAmLmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogbGlnaHRlbigkY29sb3IsIDIwJSk7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCRjb2xvciwgMjAlKTtcbiAgICB9XG4gIH1cbn0iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7R0FZRztBQUVIOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBT0gsYUFBYTtBQUliOztHQUVHO0FBRUgsQUFBQSxLQUFLLENBQUM7RUFDSixLQUFLLEVBQUUsTUFBTyxHQUNmOztBQUNELEFBQUEsSUFBSSxDQUFDO0VBQ0gsY0FBYztFQUNkLEtBQUssRUFBRSxLQUFNO0VBQ2IsS0FBSyxFQ2pEQSxJQUFJO0VBR1QsS0FBSyxFRCtDMkIsR0FBRztFQzlDbkMsZ0JBQWdCLEVBQUUsSUFBSztFQUN2QixnQkFBZ0IsRUFBRSxXQUFZO0VBQzlCLFlBQVksRUQ0Q29CLEdBQUc7RUFDbkMsVUFBVSxFQUFvQixtQkFBQyxHQUNoQztFQU5ELEFBQUEsSUFBSSxBQ3RDRCxNQUFNLENBQUM7SUFDTixLQUFLLEVBQUUsSUFBSztJQUNaLGdCQUFnQixFRHdDYyxHQUFHO0lDdkM3QixZQUFZLEVEdUNjLEdBQUcsR0N0Q2xDO0VEa0NILEFBQUEsSUFBSSxBQ2hDRCxNQUFNLEVEZ0NULEFBQUEsSUFBSSxBQy9CRCxNQUFNLENBQUM7SUFDTixLQUFLLEVBQUUsSUFBSztJQUNaLGdCQUFnQixFRGlDYyxHQUFHO0lDaEM3QixZQUFZLEVEZ0NjLEdBQUcsR0MvQmxDO0VEMkJILEFBQUEsSUFBSSxBQ3pCRCxPQUFPLEVEeUJWLEFBQUEsSUFBSSxBQ3hCRCxPQUFPLENBQUM7SUFDUCxLQUFLLEVBQUUsSUFBSztJQUNaLGdCQUFnQixFRDBCYyxHQUFHO0lDekI3QixZQUFZLEVEeUJjLEdBQUcsR0NoQmxDO0lEWUgsQUFBQSxJQUFJLEFDekJELE9BQU8sQUFNTCxNQUFNLEVEbUJYLEFBQUEsSUFBSSxBQ3pCRCxPQUFPLEFBT0wsTUFBTSxFRGtCWCxBQUFBLElBQUksQUN6QkQsT0FBTyxBQVFMLE1BQU0sRURpQlgsQUFBQSxJQUFJLEFDeEJELE9BQU8sQUFLTCxNQUFNLEVEbUJYLEFBQUEsSUFBSSxBQ3hCRCxPQUFPLEFBTUwsTUFBTSxFRGtCWCxBQUFBLElBQUksQUN4QkQsT0FBTyxBQU9MLE1BQU0sQ0FBQztNQUNOLEtBQUssRUFBRSxJQUFLO01BQ1osZ0JBQWdCLEVBQUUsT0FBTTtNQUNwQixZQUFZLEVBQUUsTUFBTSxHQUN6QjtFRGFMLEFBQUEsSUFBSSxBQ1ZELFNBQVMsQUFFUCxNQUFNLEVEUVgsQUFBQSxJQUFJLEFDVkQsU0FBUyxBQUdQLE1BQU0sRURPWCxBQUFBLElBQUksQUNURCxTQUFTLEFBQ1AsTUFBTSxFRFFYLEFBQUEsSUFBSSxBQ1RELFNBQVMsQUFFUCxNQUFNLENBQUM7SUFDTixZQUFZLEVBQUUsT0FBTyxHQUN0QjtFREtMLEFBQUEsSUFBSSxBQ1ZELFNBQVMsQUFNUCxNQUFNLEVESVgsQUFBQSxJQUFJLEFDVEQsU0FBUyxBQUtQLE1BQU0sQ0FBQztJQUNOLFlBQVksRUFBRSxPQUFPLEdBQ3RCOztBRFNMOzs7R0FHRyIsIm5hbWVzIjpbXX0= */", ""]);

	// exports
	exports.locals = {
		"fuck": "App__fuck-Q3ezm",
		"btn": "App__btn-1WIxj",
		"focus": "App__focus-hDGvD",
		"active": "App__active-UqBx_",
		"disabled": "App__disabled-3PszQ"
	};

/***/ },
/* 156 */
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
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4368df9ac3cb99ada3e81a4c6c0c67d8.png";

/***/ },
/* 158 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(155);
	    var insertCss = __webpack_require__(160);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _assign = __webpack_require__(123);

	var _assign2 = _interopRequireDefault(_assign);

	var _stringify = __webpack_require__(122);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _slicedToArray2 = __webpack_require__(124);

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
/* 161 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	/**
	 * Make a shallow copy of the object maintaining the prototype.
	 */

	exports.default = function (source) {
	    var target = void 0;

	    if (source.constructor === Array) {
	        target = source.map(function (element) {
	            return element;
	        });
	    } else {
	        target = {};
	        for (var property in source) {
	            if (source.hasOwnProperty(property)) {
	                target[property] = source[property];
	            }
	        }
	    }

	    _defaults(target, Object.getPrototypeOf(source));

	    return target;
	};

	module.exports = exports['default'];
	//# sourceMappingURL=objectUnfreeze.js.map


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(4);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _hoistNonReactStatics = __webpack_require__(158);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _linkClass = __webpack_require__(73);

	var _linkClass2 = _interopRequireDefault(_linkClass);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/prop-types */

	/**
	 * @param {ReactClass} Component
	 * @param {Object} defaultStyles
	 * @param {Object} options
	 * @returns {ReactClass}
	 */

	exports.default = function (Component, defaultStyles, options) {
	    var WrappedComponent = function (_Component) {
	        _inherits(WrappedComponent, _Component);

	        function WrappedComponent() {
	            _classCallCheck(this, WrappedComponent);

	            return _possibleConstructorReturn(this, Object.getPrototypeOf(WrappedComponent).apply(this, arguments));
	        }

	        _createClass(WrappedComponent, [{
	            key: 'render',
	            value: function render() {
	                var propsChanged = void 0,
	                    styles = void 0;

	                propsChanged = false;

	                if (this.props.styles) {
	                    styles = this.props.styles;
	                } else if (_lodash2.default.isObject(defaultStyles)) {
	                    this.props = _lodash2.default.assign({}, this.props, {
	                        styles: defaultStyles
	                    });

	                    propsChanged = true;
	                    styles = defaultStyles;
	                } else {
	                    styles = {};
	                }

	                var renderResult = _get(Object.getPrototypeOf(WrappedComponent.prototype), 'render', this).call(this);

	                if (propsChanged) {
	                    delete this.props.styles;
	                }

	                if (renderResult) {
	                    return (0, _linkClass2.default)(renderResult, styles, options);
	                }

	                return _react2.default.createElement('noscript');
	            }
	        }]);

	        return WrappedComponent;
	    }(Component);

	    return (0, _hoistNonReactStatics2.default)(WrappedComponent, Component);
	};

	module.exports = exports['default'];

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _simpleMap = __webpack_require__(168);

	var _simpleMap2 = _interopRequireDefault(_simpleMap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var stylesIndex = new _simpleMap2.default();

	exports.default = function (styles, styleNames, errorWhenNotFound) {
	    var appendClassName = void 0,
	        stylesIndexMap = void 0;

	    stylesIndexMap = stylesIndex.get(styles);

	    if (stylesIndexMap) {
	        var styleNameIndex = stylesIndexMap.get(styleNames);

	        if (styleNameIndex) {
	            return styleNameIndex;
	        }
	    } else {
	        stylesIndexMap = stylesIndex.set(styles, new _simpleMap2.default());
	    }

	    appendClassName = '';

	    for (var styleName in styleNames) {
	        if (styleNames.hasOwnProperty(styleName)) {
	            var className = styles[styleNames[styleName]];

	            if (className) {
	                appendClassName += ' ' + className;
	            } else if (errorWhenNotFound === true) {
	                throw new Error('"' + styleNames[styleName] + '" CSS module is undefined.');
	            }
	        }
	    }

	    appendClassName = appendClassName.trim();

	    stylesIndexMap.set(styleNames, appendClassName);

	    return appendClassName;
	};

	module.exports = exports['default'];

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _lodash = __webpack_require__(4);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _extendReactClass = __webpack_require__(162);

	var _extendReactClass2 = _interopRequireDefault(_extendReactClass);

	var _wrapStatelessFunction = __webpack_require__(169);

	var _wrapStatelessFunction2 = _interopRequireDefault(_wrapStatelessFunction);

	var _makeConfiguration = __webpack_require__(166);

	var _makeConfiguration2 = _interopRequireDefault(_makeConfiguration);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Determines if the given object has the signature of a class that inherits React.Component.
	 */


	/**
	 * @see https://github.com/gajus/react-css-modules#options
	 */
	var isReactComponent = function isReactComponent(maybeReactComponent) {
	    return 'prototype' in maybeReactComponent && _lodash2.default.isFunction(maybeReactComponent.prototype.render);
	};

	/**
	 * When used as a function.
	 */
	var functionConstructor = function functionConstructor(Component, defaultStyles, options) {
	    var decoratedClass = void 0;

	    var configuration = (0, _makeConfiguration2.default)(options);

	    if (isReactComponent(Component)) {
	        decoratedClass = (0, _extendReactClass2.default)(Component, defaultStyles, configuration);
	    } else {
	        decoratedClass = (0, _wrapStatelessFunction2.default)(Component, defaultStyles, configuration);
	    }

	    if (Component.displayName) {
	        decoratedClass.displayName = Component.displayName;
	    } else {
	        decoratedClass.displayName = Component.name;
	    }

	    return decoratedClass;
	};

	/**
	 * When used as a ES7 decorator.
	 */
	var decoratorConstructor = function decoratorConstructor(defaultStyles, options) {
	    return function (Component) {
	        return functionConstructor(Component, defaultStyles, options);
	    };
	};

	exports.default = function () {
	    if (_lodash2.default.isFunction(arguments.length <= 0 ? undefined : arguments[0])) {
	        return functionConstructor(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
	    } else {
	        return decoratorConstructor(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]);
	    }
	};

	module.exports = exports['default'];

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _lodash = __webpack_require__(4);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ITERATOR_SYMBOL = typeof Symbol !== 'undefined' && _lodash2.default.isFunction(Symbol) && Symbol.iterator;
	var OLD_ITERATOR_SYMBOL = '@@iterator';

	/**
	 * @see https://github.com/lodash/lodash/issues/1668
	 * @see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols
	 */

	exports.default = function (maybeIterable) {
	    var iterator = void 0;

	    if (!_lodash2.default.isObject(maybeIterable)) {
	        return false;
	    }

	    if (ITERATOR_SYMBOL) {
	        iterator = maybeIterable[ITERATOR_SYMBOL];
	    } else {
	        iterator = maybeIterable[OLD_ITERATOR_SYMBOL];
	    }

	    return _lodash2.default.isFunction(iterator);
	};

	module.exports = exports['default'];

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _lodash = __webpack_require__(4);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @typedef CSSModules~Options
	 * @see {@link https://github.com/gajus/react-css-modules#options}
	 * @property {boolean} allowMultiple
	 * @property {boolean} errorWhenNotFound
	 */

	/**
	 * @param {CSSModules~Options} userConfiguration
	 * @returns {CSSModules~Options}
	 */

	exports.default = function () {
	    var userConfiguration = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var configuration = {
	        allowMultiple: false,
	        errorWhenNotFound: true
	    };

	    _lodash2.default.forEach(userConfiguration, function (value, name) {
	        if (_lodash2.default.isUndefined(configuration[name])) {
	            throw new Error('Unknown configuration property "' + name + '".');
	        }

	        if (!_lodash2.default.isBoolean(value)) {
	            throw new Error('"' + name + '" property value must be a boolean.');
	        }

	        configuration[name] = value;
	    });

	    return configuration;
	};

	module.exports = exports['default'];

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _lodash = __webpack_require__(4);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var styleNameIndex = {};

	exports.default = function (styleNamePropertyValue, allowMultiple) {
	    var styleNames = void 0;

	    if (styleNameIndex[styleNamePropertyValue]) {
	        styleNames = styleNameIndex[styleNamePropertyValue];
	    } else {
	        styleNames = _lodash2.default.trim(styleNamePropertyValue).split(' ');
	        styleNames = _lodash2.default.filter(styleNames);

	        styleNameIndex[styleNamePropertyValue] = styleNames;
	    }

	    if (allowMultiple === false && styleNames.length > 1) {
	        throw new Error('ReactElement styleName property defines multiple module names ("' + styleNamePropertyValue + '").');
	    }

	    return styleNames;
	};

	module.exports = exports['default'];

/***/ },
/* 168 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SimpleMap = exports.SimpleMap = function () {
	    function SimpleMap() {
	        _classCallCheck(this, SimpleMap);

	        this.keys = [];
	        this.values = [];
	    }

	    _createClass(SimpleMap, [{
	        key: 'get',
	        value: function get(key) {
	            var index = this.keys.indexOf(key);

	            return this.values[index];
	        }
	    }, {
	        key: 'set',
	        value: function set(key, value) {
	            this.keys.push(key);
	            this.values.push(value);

	            return value;
	        }
	    }, {
	        key: 'size',
	        get: function get() {
	            return this.keys.length;
	        }
	    }]);

	    return SimpleMap;
	}();

	var exportedMap = typeof Map === 'undefined' ? SimpleMap : Map;

	exports.default = exportedMap;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _lodash = __webpack_require__(4);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _linkClass = __webpack_require__(73);

	var _linkClass2 = _interopRequireDefault(_linkClass);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @see https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html#stateless-function-components
	 */

	exports.default = function (Component, defaultStyles, options) {
	    var WrappedComponent = function WrappedComponent() {
	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            args[_key - 1] = arguments[_key];
	        }

	        var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var styles = void 0,
	            useProps = void 0;

	        if (props.styles) {
	            useProps = props;
	            styles = props.styles;
	        } else if (_lodash2.default.isObject(defaultStyles)) {
	            useProps = _lodash2.default.assign({}, props, {
	                styles: defaultStyles
	            });

	            styles = defaultStyles;
	        } else {
	            useProps = props;
	            styles = {};
	        }

	        var renderResult = Component.apply(undefined, [useProps].concat(args));

	        if (renderResult) {
	            return (0, _linkClass2.default)(renderResult, styles, options);
	        }

	        return _react2.default.createElement('noscript');
	    };

	    _lodash2.default.assign(WrappedComponent, Component);

	    return WrappedComponent;
	}; /* eslint-disable react/prop-types */

	module.exports = exports['default'];

/***/ }
/******/ ]);