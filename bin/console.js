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

	module.exports = __webpack_require__(113);


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
/* 11 */,
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
/* 15 */,
/* 16 */,
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
/* 20 */,
/* 21 */,
/* 22 */
/***/ function(module, exports) {

	module.exports = require("humps");

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 24 */,
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
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = getElement_R;
	function getElement_R(ui, name) {
	    if (ui[name]) {
	        return ui[name];
	    }
	    return {
	        value: ''
	    };
	}

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
/* 35 */,
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
/* 37 */,
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
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
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
/* 51 */,
/* 52 */,
/* 53 */,
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

	var _Input = __webpack_require__(25);

	var _Input2 = _interopRequireDefault(_Input);

	var _index = __webpack_require__(3);

	var _getElement_R = __webpack_require__(26);

	var _getElement_R2 = _interopRequireDefault(_getElement_R);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputR = function (_Component) {
	    _inherits(InputR, _Component);

	    function InputR(props) {
	        _classCallCheck(this, InputR);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(InputR).call(this, props));
	    }

	    _createClass(InputR, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(_Input2.default, { name: this.props.name, value: (0, _getElement_R2.default)(this.props.elements, this.props.symbol).value, placeholder: this.props.placeholder, onChange: function onChange(e) {
	                    var newValue = e.target.value;
	                    _this2.props.changeValue(_this2.props.symbol, newValue);
	                    if (_this2.props.onChange) {
	                        _this2.props.onChange(newValue);
	                    }
	                } });
	        }
	    }]);

	    return InputR;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        elements: state.elements
	    };
	}, { changeValue: _index.changeValue })(InputR);

/***/ },
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

	var _Textarea = __webpack_require__(106);

	var _Textarea2 = _interopRequireDefault(_Textarea);

	var _index = __webpack_require__(3);

	var _getElement_R = __webpack_require__(26);

	var _getElement_R2 = _interopRequireDefault(_getElement_R);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextareaR = function (_Component) {
	    _inherits(TextareaR, _Component);

	    function TextareaR(props) {
	        _classCallCheck(this, TextareaR);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TextareaR).call(this, props));
	    }

	    _createClass(TextareaR, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(_Textarea2.default, { value: (0, _getElement_R2.default)(this.props.elements, this.props.symbol).value, placeholder: this.props.placeholder, onChange: function onChange(e) {
	                    var newValue = e.target.value;
	                    _this2.props.changeValue(_this2.props.symbol, newValue);
	                    if (_this2.props.onChange) {
	                        _this2.props.onChange(newValue);
	                    }
	                } });
	        }
	    }]);

	    return TextareaR;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        elements: state.elements
	    };
	}, { changeValue: _index.changeValue })(TextareaR);

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

	var _Icon = __webpack_require__(13);

	var _Icon2 = _interopRequireDefault(_Icon);

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
	                return _react2.default.createElement("span", { key: index, className: "selectize-tag" }, v.name, _react2.default.createElement(_Icon2.default, { size: 'small', name: "close", onClick: function onClick(e) {
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
/* 82 */
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
	            return _react2.default.createElement("div", { className: "branding console-branding" }, _react2.default.createElement(_Container2.default, { isFluid: true, className: "clearfix" }, _react2.default.createElement("div", null, _react2.default.createElement("h1", { className: "logo left" }, _react2.default.createElement(_reactRouter.Link, { to: "/console" }, "readr"), _react2.default.createElement("span", { className: "sep" }, "|"), _react2.default.createElement("span", { className: "sub" }, "Console")), username ? _react2.default.createElement("div", { onMouseLeave: this.toggleDropdownMenu.bind(this), onMouseEnter: this.toggleDropdownMenu.bind(this), className: "nav right" }, _react2.default.createElement("span", { className: "username" }, username, isAdmin ? _react2.default.createElement("span", { className: "badge-dark" }, "Admin") : null), this.state.isDropdownMenuVisible ? _react2.default.createElement("ul", { className: "dropdown-menu" }, isAdmin === true ? _react2.default.createElement("li", null, _react2.default.createElement("a", { href: "/" }, "Back to readr")) : null, _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: '/profile/' + username }, "我的账号")), _react2.default.createElement("li", null, _react2.default.createElement("a", { href: '/logout' }, "退出"))) : null) : _react2.default.createElement("div", { className: "nav right" }, _react2.default.createElement("ul", { className: "nav-links" }, _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: "/signin" }, "登录")), _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: "/signup" }, "注册")))))));
	        }
	    }]);

	    return ConsoleBranding;
	}(_react.Component);

	exports.default = ConsoleBranding;

/***/ },
/* 83 */,
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
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
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

	var _index = __webpack_require__(3);

	var _Button = __webpack_require__(6);

	var _Button2 = _interopRequireDefault(_Button);

	var _SelectizeInput = __webpack_require__(56);

	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);

	var _Modal = __webpack_require__(105);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _apis = __webpack_require__(18);

	var _apis2 = _interopRequireDefault(_apis);

	var _getElement_R = __webpack_require__(26);

	var _getElement_R2 = _interopRequireDefault(_getElement_R);

	var _apisThirdParty = __webpack_require__(115);

	var _InputR = __webpack_require__(54);

	var _InputR2 = _interopRequireDefault(_InputR);

	var _TextareaR = __webpack_require__(55);

	var _TextareaR2 = _interopRequireDefault(_TextareaR);

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
	                } }, _react2.default.createElement("h1", { className: "page-title", style: { marginTop: 0 } }, "Add author"), _react2.default.createElement(_InputR2.default, { placeholder: "Name", symbol: syls.inputAuthorName }), _react2.default.createElement(_InputR2.default, { placeholder: "Slug", symbol: syls.inputAuthorSlug }), _react2.default.createElement(_TextareaR2.default, { symbol: syls.textareaAuthorDesc, placeholder: "Description" }), _react2.default.createElement(_Button2.default, { onClick: function onClick(e) {
	                    e.preventDefault();
	                    _this6.addAuthor();
	                } }, "Add")), _react2.default.createElement("h1", { className: "page-title" }, "Add Book"), _react2.default.createElement(_SelectizeInput2.default, { placeholder: "Book title", onInputChange: function onInputChange(newValue) {
	                    _this6.searchBooks(newValue);
	                    _this6.props.changeValue(syls.inputBookName, newValue);
	                }, value: (0, _getElement_R2.default)(this.props.elements, syls.inputBookName).value, onValuesChange: function onValuesChange(newValues) {
	                    _this6.setState({
	                        bookTitle: newValues
	                    });
	                }, options: this.state.optionsOfBookTitle, values: this.state.bookTitle, onAddNewValue: function onAddNewValue() {
	                    // todo
	                }, onOptionClick: function onOptionClick(option) {
	                    _this6.props.changeValue(syls.inputBookCover, option.additional.cover);
	                    _this6.props.changeValue(syls.inputBookAuthor, option.additional.author);
	                    _this6.props.changeValue(syls.textareaBookDesc, option.additional.description);
	                } }), _react2.default.createElement(_SelectizeInput2.default, { placeholder: "Book author", onInputChange: function onInputChange(newValue) {
	                    _this6.searchAuthors(newValue);
	                    _this6.props.changeValue(syls.inputBookAuthor, newValue);
	                }, value: (0, _getElement_R2.default)(this.props.elements, syls.inputBookAuthor).value, onValuesChange: function onValuesChange(newValues) {
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
	                } }), _react2.default.createElement(_InputR2.default, { placeholder: "Cover", symbol: syls.inputBookCover }), _react2.default.createElement(_TextareaR2.default, { placeholder: "Description", symbol: syls.textareaBookDesc }), _react2.default.createElement(_TextareaR2.default, { placeholder: "Paste book content here", symbol: syls.textareaBookContent }), _react2.default.createElement(_Button2.default, { onClick: function onClick(e) {
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
	}, { sendNotification: _index.sendNotification, changeValue: _index.changeValue })(AddBook);

/***/ },
/* 99 */
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

	var _Button = __webpack_require__(6);

	var _Button2 = _interopRequireDefault(_Button);

	var _SelectizeInput = __webpack_require__(56);

	var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);

	var _apis = __webpack_require__(18);

	var _apis2 = _interopRequireDefault(_apis);

	var _getElement_R = __webpack_require__(26);

	var _getElement_R2 = _interopRequireDefault(_getElement_R);

	var _InputR = __webpack_require__(54);

	var _InputR2 = _interopRequireDefault(_InputR);

	var _TextareaR = __webpack_require__(55);

	var _TextareaR2 = _interopRequireDefault(_TextareaR);

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

	            return _react2.default.createElement("form", null, _react2.default.createElement("h1", { className: "page-title" }, "Add Collection"), _react2.default.createElement(_InputR2.default, { symbol: syls.inputCollectionName, placeholder: "Name" }), _react2.default.createElement(_SelectizeInput2.default, { placeholder: "Books", onInputChange: function onInputChange(newValue) {
	                    _this4.searchBooks(newValue);
	                    _this4.props.changeValue(syls.inputBookName, newValue);
	                }, value: (0, _getElement_R2.default)(this.props.elements, syls.inputBookName).value, onValuesChange: function onValuesChange(newValues) {
	                    _this4.setState({
	                        valuesOfBooks: newValues
	                    });
	                }, options: this.state.optionsOfBooks, values: this.state.valuesOfBooks }), _react2.default.createElement(_TextareaR2.default, { symbol: syls.textareaCollectionDesc, placeholder: "Description" }), _react2.default.createElement(_Button2.default, { onClick: this.addCollection }, "Add"));
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
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _index.sendNotification, changeValue: _index.changeValue })(AddCollection);

/***/ },
/* 100 */
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

	var _Body = __webpack_require__(9);

	var _Body2 = _interopRequireDefault(_Body);

	var _apis = __webpack_require__(18);

	var _apis2 = _interopRequireDefault(_apis);

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
	            return _react2.default.createElement("div", null, _react2.default.createElement(_Body2.default, { className: "manage-books" }), _react2.default.createElement("table", null, _react2.default.createElement("tbody", null, _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "ID"), _react2.default.createElement("td", null, "Name"), _react2.default.createElement("td", null, "Date created"), _react2.default.createElement("td", null, "Actions")), bookListNewest ? bookListNewest.map(function (book, index) {
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

	            return store.dispatch((0, _index.fetchBooks)());
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
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchBooks: _index.fetchBooks, sendNotification: _index.sendNotification })(ManageBooks);

/***/ },
/* 101 */
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
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchUserList: _index.fetchUserList })(ManageUsers);

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

	var _reactRouter = __webpack_require__(5);

	var _reactRedux = __webpack_require__(2);

	var _Container = __webpack_require__(8);

	var _Container2 = _interopRequireDefault(_Container);

	var _Icon = __webpack_require__(13);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _ConsoleBranding = __webpack_require__(82);

	var _ConsoleBranding2 = _interopRequireDefault(_ConsoleBranding);

	var _index = __webpack_require__(3);

	var _Notification = __webpack_require__(36);

	var _Notification2 = _interopRequireDefault(_Notification);

	var _menus = __webpack_require__(103);

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
	                return _react2.default.createElement("li", { key: index, className: className }, _react2.default.createElement(_reactRouter.Link, { to: '/' + menu.path }, _react2.default.createElement(_Icon2.default, { name: menu.component })));
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
	            return _react2.default.createElement("div", null, _react2.default.createElement(_ConsoleBranding2.default, { isAdmin: isAdmin, username: username }), _react2.default.createElement(_Container2.default, { isFluid: true }, this.props.notifications.filter(function (noti) {
	                return noti.visible;
	            }).length > 0 ? _react2.default.createElement("div", { className: "notifications" }, this.props.notifications.map(function (noti, index) {
	                return _react2.default.createElement(_Notification2.default, { key: index, type: noti.type, message: noti.message, visible: noti.visible });
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
	}, { sendNotification: _index.sendNotification, userAuth: _index.userAuth })(Console);

/***/ },
/* 103 */
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
/* 104 */,
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(174);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _view = __webpack_require__(40);

	var _view2 = _interopRequireDefault(_view);

	var _Fade = __webpack_require__(39);

	var _Fade2 = _interopRequireDefault(_Fade);

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
	            return _react2.default.createElement(_Fade2.default, null, isVisible ? _react2.default.createElement("div", { onClick: this.hideModal.bind(this), className: "modal-backdrop", style: style.backdrop }, _react2.default.createElement("div", { style: style.modal, className: className, ref: "modal", onClick: function onClick(e) {
	                    e.stopPropagation();
	                } }, this.props.children)) : null);
	        }
	    }]);

	    return Modal;
	}(_react.Component);

	exports.default = Modal;

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
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(5);

	var _index = __webpack_require__(102);

	var _index2 = _interopRequireDefault(_index);

	var _ManageBooks = __webpack_require__(100);

	var _ManageBooks2 = _interopRequireDefault(_ManageBooks);

	var _ManageUsers = __webpack_require__(101);

	var _ManageUsers2 = _interopRequireDefault(_ManageUsers);

	var _AddBook = __webpack_require__(98);

	var _AddBook2 = _interopRequireDefault(_AddBook);

	var _AddCollection = __webpack_require__(99);

	var _AddCollection2 = _interopRequireDefault(_AddCollection);

	var _NoMatch = __webpack_require__(38);

	var _NoMatch2 = _interopRequireDefault(_NoMatch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createElement(_reactRouter.Router, null, _react2.default.createElement(_reactRouter.Route, { path: "/console", component: _index2.default }, _react2.default.createElement(_reactRouter.IndexRoute, { component: _ManageBooks2.default }), _react2.default.createElement(_reactRouter.Route, { path: "managebooks", component: _ManageBooks2.default }), _react2.default.createElement(_reactRouter.Route, { path: "manageusers", component: _ManageUsers2.default }), _react2.default.createElement(_reactRouter.Route, { path: "addbook", component: _AddBook2.default }), _react2.default.createElement(_reactRouter.Route, { path: "collection/new", component: _AddCollection2.default })), _react2.default.createElement(_reactRouter.Route, { path: "*", component: _NoMatch2.default }));

/***/ },
/* 114 */,
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetchDoubanBooks = fetchDoubanBooks;

	var _jsonp = __webpack_require__(118);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _ApiRoots = __webpack_require__(7);

	var _ApiRoots2 = _interopRequireDefault(_ApiRoots);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function fetchDoubanBooks(query) {
	    return (0, _jsonp2.default)(_ApiRoots2.default.DOUBAN_BOOKS + '/search?count=5&q=' + query, {});
	}

/***/ },
/* 116 */,
/* 117 */,
/* 118 */
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
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
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
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ }
/******/ ]);