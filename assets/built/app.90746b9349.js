webpackJsonp([17],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reactDom = __webpack_require__(122);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(9);

	var _routes = __webpack_require__(332);

	var _routes2 = _interopRequireDefault(_routes);

	var _reactRedux = __webpack_require__(6);

	var _reactRouterRedux = __webpack_require__(123);

	var _configureStore = __webpack_require__(340);

	var _configureStore2 = _interopRequireDefault(_configureStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};

	var store = (0, _configureStore2.default)();
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);
	(0, _reactRouter.match)({ history: history, routes: _routes2.default }, function (error, redirectLocation, renderProps) {
	    (0, _reactDom.render)(_react2.default.createElement(_reactRedux.Provider, { store: store }, _react2.default.createElement(_reactRouter.Router, __assign({}, renderProps))), document.getElementById('root'));
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reset = undefined;

	var _components = __webpack_require__(333);

	Object.keys(_components).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _components[key];
	    }
	  });
	});

	var _dataFetching = __webpack_require__(336);

	Object.keys(_dataFetching).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _dataFetching[key];
	    }
	  });
	});

	var _deprecatedActions = __webpack_require__(339);

	Object.keys(_deprecatedActions).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _deprecatedActions[key];
	    }
	  });
	});

	var _reduxForm = __webpack_require__(68);

	exports.reset = _reduxForm.reset;

/***/ },
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 22 */,
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Icon = __webpack_require__(280);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Icon2.default;

/***/ },
/* 25 */,
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Button = __webpack_require__(287);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Button2.default;

/***/ },
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = isDescendant;
	function isDescendant(parent, child) {
	    var node = child.parentNode;
	    while (node != null) {
	        if (node === parent) {
	            return true;
	        }
	        node = node.parentNode;
	    }
	    return false;
	}

/***/ },
/* 33 */,
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactSideEffect = __webpack_require__(199);

	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

	var _lodash = __webpack_require__(4);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultTitle = 'Readr';

	var DocContainer = function (_Component) {
	    _inherits(DocContainer, _Component);

	    function DocContainer() {
	        _classCallCheck(this, DocContainer);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(DocContainer).apply(this, arguments));
	    }

	    _createClass(DocContainer, [{
	        key: 'render',
	        value: function render() {
	            var className = this.props.className;

	            return className ? _react2.default.createElement("div", { className: 'gb-doc-container' + className }, this.props.children) : _react2.default.createElement("div", { className: "gb-doc-container" }, this.props.children);
	        }
	    }]);

	    return DocContainer;
	}(_react.Component);

	function reducePropsToState(propsList) {
	    var innermostProps = propsList[propsList.length - 1];
	    var data = {};
	    if (innermostProps) {
	        data = _lodash2.default.pick(innermostProps, ['title', 'bodyClass']);
	        if (data.title && !innermostProps.useAsMasterTitle) {
	            data.title = data.title + ' | ' + defaultTitle;
	        } else {
	            data.title = data.title || defaultTitle;
	        }
	    }
	    data.bodyClass = propsList.filter(function (prop) {
	        return prop.bodyClass;
	    }).map(function (prop) {
	        return prop.bodyClass;
	    }).join(' ');
	    return data;
	}
	function handleStateChangeOnClient(propList) {
	    var title = propList.title;
	    var bodyClass = propList.bodyClass;

	    if (typeof bodyClass !== 'undefined') {
	        document.body.className = bodyClass;
	    } else {
	        document.body.removeAttribute('class');
	    }
	    if (typeof title !== 'undefined') {
	        document.title = title;
	    } else {
	        document.title = defaultTitle;
	    }
	}
	exports.default = (0, _reactSideEffect2.default)(reducePropsToState, handleStateChangeOnClient)(DocContainer);

/***/ },
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _parseFormData = __webpack_require__(163);

	var _parseFormData2 = _interopRequireDefault(_parseFormData);

	var _lockScroll = __webpack_require__(353);

	var _lockScroll2 = _interopRequireDefault(_lockScroll);

	var _unlockScroll = __webpack_require__(355);

	var _unlockScroll2 = _interopRequireDefault(_unlockScroll);

	var _getScreenInfo = __webpack_require__(350);

	var _getScreenInfo2 = _interopRequireDefault(_getScreenInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// todo
	function addZero(num) {
	    var numStrWithZero = void 0;
	    if (num < 10) {
	        numStrWithZero = '0' + num.toString();
	    } else {
	        numStrWithZero = num.toString();
	    }
	    return numStrWithZero;
	}
	// todo
	function getTime() {
	    var d = new Date();
	    var time = [d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()];
	    return time.map(function (t) {
	        return addZero(t);
	    }).join('');
	}
	exports.default = {
	    parseFormData: _parseFormData2.default,
	    lockScroll: _lockScroll2.default,
	    unlockScroll: _unlockScroll2.default,
	    getScreenInfo: _getScreenInfo2.default
	};

/***/ },
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var HOST = exports.HOST = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000';
	var ApiRoots = exports.ApiRoots = {
	    LOCAL: HOST + '/api/',
	    DOUBAN_BOOKS: 'https://api.douban.com/v2/book/'
	};

/***/ },
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.makeFieldValue = makeFieldValue;
	exports.isFieldValue = isFieldValue;
	var flag = '_isFieldValue';
	var isObject = function isObject(object) {
	  return typeof object === 'object';
	};

	function makeFieldValue(object) {
	  if (object && isObject(object)) {
	    // This flag has to be enumerable, because otherwise it is not possible
	    // to serialize object with this field.
	    // The consequence is you lose information that particular field is
	    // field or nested group of fields, so you're not able to fetch
	    // field value from state when it has been affected in some way
	    // by serializing/using immutable and so on.
	    // @fixme marking field as leaf should be made in other way
	    Object.defineProperty(object, flag, { value: true, enumerable: true });
	  }
	  return object;
	}

	function isFieldValue(object) {
	  return !!(object && isObject(object) && object[flag]);
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.untouchWithKey = exports.untouch = exports.touchWithKey = exports.touch = exports.swapArrayValues = exports.stopSubmit = exports.stopAsyncValidation = exports.startSubmit = exports.startAsyncValidation = exports.reset = exports.propTypes = exports.initializeWithKey = exports.initialize = exports.getValues = exports.removeArrayValue = exports.reduxForm = exports.reducer = exports.focus = exports.destroy = exports.changeWithKey = exports.change = exports.blur = exports.autofillWithKey = exports.autofill = exports.addArrayValue = exports.actionTypes = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	var _createAll2 = __webpack_require__(562);

	var _createAll3 = _interopRequireDefault(_createAll2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isNative = typeof window !== 'undefined' && window.navigator && window.navigator.product && window.navigator.product === 'ReactNative';

	var _createAll = (0, _createAll3.default)(isNative, _react2.default, _reactRedux.connect);

	var actionTypes = _createAll.actionTypes;
	var addArrayValue = _createAll.addArrayValue;
	var autofill = _createAll.autofill;
	var autofillWithKey = _createAll.autofillWithKey;
	var blur = _createAll.blur;
	var change = _createAll.change;
	var changeWithKey = _createAll.changeWithKey;
	var destroy = _createAll.destroy;
	var focus = _createAll.focus;
	var reducer = _createAll.reducer;
	var reduxForm = _createAll.reduxForm;
	var removeArrayValue = _createAll.removeArrayValue;
	var getValues = _createAll.getValues;
	var initialize = _createAll.initialize;
	var initializeWithKey = _createAll.initializeWithKey;
	var propTypes = _createAll.propTypes;
	var reset = _createAll.reset;
	var startAsyncValidation = _createAll.startAsyncValidation;
	var startSubmit = _createAll.startSubmit;
	var stopAsyncValidation = _createAll.stopAsyncValidation;
	var stopSubmit = _createAll.stopSubmit;
	var swapArrayValues = _createAll.swapArrayValues;
	var touch = _createAll.touch;
	var touchWithKey = _createAll.touchWithKey;
	var untouch = _createAll.untouch;
	var untouchWithKey = _createAll.untouchWithKey;
	exports.actionTypes = actionTypes;
	exports.addArrayValue = addArrayValue;
	exports.autofill = autofill;
	exports.autofillWithKey = autofillWithKey;
	exports.blur = blur;
	exports.change = change;
	exports.changeWithKey = changeWithKey;
	exports.destroy = destroy;
	exports.focus = focus;
	exports.reducer = reducer;
	exports.reduxForm = reduxForm;
	exports.removeArrayValue = removeArrayValue;
	exports.getValues = getValues;
	exports.initialize = initialize;
	exports.initializeWithKey = initializeWithKey;
	exports.propTypes = propTypes;
	exports.reset = reset;
	exports.startAsyncValidation = startAsyncValidation;
	exports.startSubmit = startSubmit;
	exports.stopAsyncValidation = stopAsyncValidation;
	exports.stopSubmit = stopSubmit;
	exports.swapArrayValues = swapArrayValues;
	exports.touch = touch;
	exports.touchWithKey = touchWithKey;
	exports.untouch = untouch;
	exports.untouchWithKey = untouchWithKey;

/***/ },
/* 69 */,
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _apis = __webpack_require__(256);

	var apis = _interopRequireWildcard(_apis);

	var _externalApis = __webpack_require__(257);

	var externalApis = _interopRequireWildcard(_externalApis);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	exports.default = Object.assign({}, apis, externalApis);

/***/ },
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Container = undefined;

	var _Container = __webpack_require__(49);

	var _Container2 = _interopRequireDefault(_Container);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Container = _Container2.default;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.callApi = callApi;

	__webpack_require__(168);

	var _parseFormData = __webpack_require__(163);

	var _parseFormData2 = _interopRequireDefault(_parseFormData);

	var _jsonp = __webpack_require__(162);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultOptions = {
	    dataType: 'json',
	    method: 'GET',
	    credentials: 'same-origin'
	};
	// return fetch options
	var parseOptions = function parseOptions(originanOptions) {
	    var _Object$assign = Object.assign({}, defaultOptions, originanOptions);

	    var method = _Object$assign.method;
	    var data = _Object$assign.data;
	    var credentials = _Object$assign.credentials;
	    var dataType = _Object$assign.dataType;
	    var useJsonp = _Object$assign.useJsonp;

	    var fetchOptions = {};
	    if (useJsonp) {
	        return {
	            useJsonp: true
	        };
	    }
	    if (method) {
	        fetchOptions.method = method;
	    }
	    if (credentials) {
	        fetchOptions.credentials = credentials;
	    }
	    // handle request headers and body
	    if (method === 'POST' || method === 'PUT') {
	        var contentType = void 0;
	        var body = void 0;
	        if (dataType === 'json') {
	            contentType = 'application/json';
	            body = JSON.stringify(data);
	        } else {
	            contentType = 'application/x-www-form-urlencoded';
	            body = (0, _parseFormData2.default)(data);
	            if (dataType !== 'urlencoded') {
	                console.warn('Unsupported dataType used "urlencoded" instead!');
	            }
	        }
	        fetchOptions.headers = {
	            'Content-Type': contentType,
	            'Access-Control-Request-Method': method
	        };
	        fetchOptions.body = body;
	    }
	    if (method === 'DELETE') {
	        fetchOptions.headers = {
	            'Access-Control-Request-Method': 'DELETE'
	        };
	    }
	    return fetchOptions;
	};
	// type Result = {
	//   json: any
	//   response: any
	// }
	function callApi(fullUrl) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    if (options.useJsonp) {
	        return (0, _jsonp2.default)(fullUrl);
	    }
	    return fetch(fullUrl, parseOptions(options)).then(function (response) {
	        if (response.status !== 204) {
	            return response.json().then(function (json) {
	                if (!response.ok) {
	                    return Promise.reject(json);
	                }
	                return { json: json, _response: response };
	            });
	        }
	        return { json: {}, _response: response };
	    });
	}
	exports.default = callApi;

/***/ },
/* 79 */,
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
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = isValid;
	function isValid(error) {
	  if (Array.isArray(error)) {
	    return error.reduce(function (valid, errorValue) {
	      return valid && isValid(errorValue);
	    }, true);
	  }
	  if (error && typeof error === 'object') {
	    return Object.keys(error).reduce(function (valid, key) {
	      return valid && isValid(error[key]);
	    }, true);
	  }
	  return !error;
	}

/***/ },
/* 97 */,
/* 98 */,
/* 99 */,
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
	exports.Schemas = undefined;

	var _normalizr = __webpack_require__(119);

	var book = new _normalizr.Schema('books', {
	    idAttribute: 'id'
	});
	var author = new _normalizr.Schema('authors', {
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
	    PROFILE: profile,
	    AUTHOR: author,
	    AUTHOR_ARRAY: (0, _normalizr.arrayOf)(author)
	};

/***/ },
/* 111 */,
/* 112 */,
/* 113 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"dropdown-item":"dropdown-item_2C1dz light-link_2QDeA","light-link":"light-link_2QDeA","dropdown":"dropdown_SZfyp","dropdown-toggle":"dropdown-toggle_34Qfd","dropdown-menu":"dropdown-menu_1HgbS","dropdown-caret":"dropdown-caret_FcBWI","sep":"sep_10Y0o","dropdown-menu--dark":"dropdown-menu--dark_6eVPX dropdown-menu_1HgbS"};

/***/ },
/* 114 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"modal":"modal_20AZ1","icon-close":"icon-close_5uuLa","modal-backdrop":"modal-backdrop_3rq0k","modal-body":"modal-body_2gT23","modal-header":"modal-header_2dz68","modal-title":"modal-title_8pOfE","modal-footer":"modal-footer_fyZtS","btn-red":"btn-red_3zomi","modal-content":"modal-content_3ZIHb","confirm-modal":"confirm-modal_k5GF0","modal-plus":"modal-plus_1_TST"};

/***/ },
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */
/***/ function(module, exports) {

	module.exports = isPromise;

	function isPromise(obj) {
	  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
	}


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
/* 149 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var ADD_ARRAY_VALUE = exports.ADD_ARRAY_VALUE = 'redux-form/ADD_ARRAY_VALUE';
	var AUTOFILL = exports.AUTOFILL = 'redux-form/AUTOFILL';
	var BLUR = exports.BLUR = 'redux-form/BLUR';
	var CHANGE = exports.CHANGE = 'redux-form/CHANGE';
	var DESTROY = exports.DESTROY = 'redux-form/DESTROY';
	var FOCUS = exports.FOCUS = 'redux-form/FOCUS';
	var INITIALIZE = exports.INITIALIZE = 'redux-form/INITIALIZE';
	var REMOVE_ARRAY_VALUE = exports.REMOVE_ARRAY_VALUE = 'redux-form/REMOVE_ARRAY_VALUE';
	var RESET = exports.RESET = 'redux-form/RESET';
	var START_ASYNC_VALIDATION = exports.START_ASYNC_VALIDATION = 'redux-form/START_ASYNC_VALIDATION';
	var START_SUBMIT = exports.START_SUBMIT = 'redux-form/START_SUBMIT';
	var STOP_ASYNC_VALIDATION = exports.STOP_ASYNC_VALIDATION = 'redux-form/STOP_ASYNC_VALIDATION';
	var STOP_SUBMIT = exports.STOP_SUBMIT = 'redux-form/STOP_SUBMIT';
	var SUBMIT_FAILED = exports.SUBMIT_FAILED = 'redux-form/SUBMIT_FAILED';
	var SWAP_ARRAY_VALUES = exports.SWAP_ARRAY_VALUES = 'redux-form/SWAP_ARRAY_VALUES';
	var TOUCH = exports.TOUCH = 'redux-form/TOUCH';
	var UNTOUCH = exports.UNTOUCH = 'redux-form/UNTOUCH';

/***/ },
/* 150 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = mapValues;
	/**
	 * Maps all the values in the given object through the given function and saves them, by key, to a result object
	 */
	function mapValues(obj, fn) {
	  return obj ? Object.keys(obj).reduce(function (accumulator, key) {
	    var _extends2;

	    return _extends({}, accumulator, (_extends2 = {}, _extends2[key] = fn(obj[key], key), _extends2));
	  }, {}) : obj;
	}

/***/ },
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Logo = __webpack_require__(268);

	var _Logo2 = _interopRequireDefault(_Logo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Logo2.default;

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Icon = __webpack_require__(24);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _reactCssModules = __webpack_require__(2);

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

	var styles = __webpack_require__(165);
	var Alert = function (_Component) {
	    _inherits(Alert, _Component);

	    function Alert() {
	        _classCallCheck(this, Alert);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Alert).apply(this, arguments));
	    }

	    _createClass(Alert, [{
	        key: "render",
	        value: function render() {
	            var type = this.props.type ? this.props.type : 'success';
	            return _react2.default.createElement("div", null, this.props.visible && _react2.default.createElement("div", { styleName: "alert--" + type }, _react2.default.createElement("div", { styleName: "alert-close" }, _react2.default.createElement(_Icon2.default, { onClick: this.props.onRequestClose, name: "close", size: 15 })), _react2.default.createElement("div", { styleName: "content" }, this.props.message)));
	        }
	    }]);

	    return Alert;
	}(_react.Component);
	Alert = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], Alert);
	exports.default = Alert;

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DropdownItemSep = exports.Dropdown = exports.DropdownItem = undefined;

	var _Dropdown = __webpack_require__(277);

	var _Dropdown2 = _interopRequireDefault(_Dropdown);

	var _DropdownItem = __webpack_require__(278);

	var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

	var _DropdownItemSep = __webpack_require__(279);

	var _DropdownItemSep2 = _interopRequireDefault(_DropdownItemSep);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.DropdownItem = _DropdownItem2.default;
	exports.Dropdown = _Dropdown2.default;
	exports.DropdownItemSep = _DropdownItemSep2.default;
	exports.default = _Dropdown2.default;

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(122);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	var _Fade = __webpack_require__(160);

	var _Fade2 = _interopRequireDefault(_Fade);

	var _reactCssModules = __webpack_require__(2);

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

	var styles = __webpack_require__(114);
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
	        _this.hideModal = _this.hideModal.bind(_this);
	        return _this;
	    }

	    _createClass(Modal, [{
	        key: "hideModal",
	        value: function hideModal() {
	            this.props.onRequestClose();
	            _utils2.default.unlockScroll();
	            window.removeEventListener('resize', this.setView);
	        }
	    }, {
	        key: "setView",
	        value: function setView() {
	            var modalHeight = _reactDom2.default.findDOMNode(this.modal).clientHeight;
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
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: "componentDidUpdate",
	        value: function componentDidUpdate(prevProps) {
	            // modal show
	            if (!prevProps.open && this.props.open === true) {
	                this.setView();
	                _utils2.default.lockScroll();
	                window.addEventListener('resize', this.setView);
	            }
	            // modal hide
	            if (prevProps.open === true && this.props.open === false) {
	                window.removeEventListener('resize', this.setView);
	                _utils2.default.unlockScroll();
	            }
	        }
	    }, {
	        key: "componentUnmount",
	        value: function componentUnmount() {
	            window.removeEventListener('resize', this.setView);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;

	            var open = this.props.open;

	            var defaultClass = 'modal';
	            var modalId = "modal-" + new Date().valueOf();
	            var className = this.props.className ? defaultClass + " " + this.props.className : defaultClass;
	            var width = this.props.width ? this.props.width : 500;
	            var height = this.state.modalHeight;
	            var style = {
	                backdrop: {},
	                verticalCenter: {},
	                scroll: {},
	                modal: {}
	            };
	            style.backdrop = {
	                position: 'fixed',
	                height: '100%',
	                width: '100%',
	                left: 0,
	                top: 0,
	                background: 'rgba(0, 0, 0, 0.23)',
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
	            style.modal = {};
	            if (this.state.isModalVerticalCenter) {
	                style.modal = Object.assign({}, style.modal, style.verticalCenter);
	            } else {
	                style.modal = Object.assign({}, style.modal, style.scroll);
	            }
	            return _react2.default.createElement(_Fade2.default, null, open === true ? _react2.default.createElement("div", { onClick: function onClick(e) {
	                    // 使用阻止冒泡会造成问题
	                    if (e.target.querySelector("#" + modalId)) {
	                        _this2.hideModal();
	                    }
	                }, styleName: "modal-backdrop", style: style.backdrop }, _react2.default.createElement("div", { id: modalId, style: style.modal, className: className, styleName: "modal", ref: function ref(_ref) {
	                    _this2.modal = _ref;
	                } }, this.props.children)) : null);
	        }
	    }]);

	    return Modal;
	}(_react.Component);
	Modal = __decorate([(0, _reactCssModules2.default)(styles)], Modal);
	exports.default = Modal;

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Button = __webpack_require__(27);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var styles = __webpack_require__(368);
	function ModalFooter(props) {
	    var onConfirm = props.onConfirm;
	    var onCancel = props.onCancel;

	    return _react2.default.createElement("div", { className: styles['modal-footer'] }, _react2.default.createElement(_Button2.default, { color: "blue", onClick: onConfirm }, "确认"), onCancel && _react2.default.createElement(_Button2.default, { color: "white", onClick: onCancel }, "取消"));
	}
	exports.default = ModalFooter;

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ConfirmModal = exports.ModalPlus = undefined;

	var _Modal = __webpack_require__(157);

	Object.keys(_Modal).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _Modal[key];
	    }
	  });
	});

	var _Modal2 = _interopRequireDefault(_Modal);

	var _ModalPlus = __webpack_require__(285);

	var _ModalPlus2 = _interopRequireDefault(_ModalPlus);

	var _ConfirmModal = __webpack_require__(284);

	var _ConfirmModal2 = _interopRequireDefault(_ConfirmModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Modal2.default;
	exports.ModalPlus = _ModalPlus2.default;
	exports.ConfirmModal = _ConfirmModal2.default;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Fade = __webpack_require__(286);

	var _Fade2 = _interopRequireDefault(_Fade);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Fade2.default;

/***/ },
/* 161 */,
/* 162 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = jsonp;
	function jsonp(fullUrl) {
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
	                        resolve({ json: window[jsonpCallbackData] });
	                    };
	                })
	            };
	        }();

	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }
	}

/***/ },
/* 163 */
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

	// todo
	function objectToUrlencoded(originalObj) {
	    if (_lodash2.default.isEmpty(originalObj)) {
	        return '';
	    }
	    var object = _lodash2.default.cloneDeep(originalObj);
	    var encodedurl = '';
	    for (var prop in object) {
	        if (_typeof(object[prop]) === 'object' && object[prop] !== null) {
	            object[prop] = object[prop].toString();
	        }
	        encodedurl = '' + encodedurl + prop + '=' + object[prop] + '&';
	    }
	    return encodedurl.substr(0, encodedurl.length - 1);
	}

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(357);
	var isArguments = __webpack_require__(356);

	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },
/* 165 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"alerts":"alerts_3anah","alert":"alert_3WAye","alert--success":"alert--success_NTR5L","alert--error":"alert--error_1C2fM","alert--warning":"alert--warning_3gSWv","content":"content_1U4Ts","alert-close":"alert-close_1UULS"};

/***/ },
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.untouch = exports.touch = exports.swapArrayValues = exports.submitFailed = exports.stopSubmit = exports.stopAsyncValidation = exports.startSubmit = exports.startAsyncValidation = exports.reset = exports.removeArrayValue = exports.initialize = exports.focus = exports.destroy = exports.change = exports.blur = exports.autofill = exports.addArrayValue = undefined;

	var _actionTypes = __webpack_require__(149);

	var addArrayValue = exports.addArrayValue = function addArrayValue(path, value, index, fields) {
	  return { type: _actionTypes.ADD_ARRAY_VALUE, path: path, value: value, index: index, fields: fields };
	};

	var autofill = exports.autofill = function autofill(field, value) {
	  return { type: _actionTypes.AUTOFILL, field: field, value: value };
	};

	var blur = exports.blur = function blur(field, value) {
	  return { type: _actionTypes.BLUR, field: field, value: value };
	};

	var change = exports.change = function change(field, value) {
	  return { type: _actionTypes.CHANGE, field: field, value: value };
	};

	var destroy = exports.destroy = function destroy() {
	  return { type: _actionTypes.DESTROY };
	};

	var focus = exports.focus = function focus(field) {
	  return { type: _actionTypes.FOCUS, field: field };
	};

	var initialize = exports.initialize = function initialize(data, fields) {
	  var overwriteValues = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

	  if (!Array.isArray(fields)) {
	    throw new Error('must provide fields array to initialize() action creator');
	  }
	  return { type: _actionTypes.INITIALIZE, data: data, fields: fields, overwriteValues: overwriteValues };
	};

	var removeArrayValue = exports.removeArrayValue = function removeArrayValue(path, index) {
	  return { type: _actionTypes.REMOVE_ARRAY_VALUE, path: path, index: index };
	};

	var reset = exports.reset = function reset() {
	  return { type: _actionTypes.RESET };
	};

	var startAsyncValidation = exports.startAsyncValidation = function startAsyncValidation(field) {
	  return { type: _actionTypes.START_ASYNC_VALIDATION, field: field };
	};

	var startSubmit = exports.startSubmit = function startSubmit() {
	  return { type: _actionTypes.START_SUBMIT };
	};

	var stopAsyncValidation = exports.stopAsyncValidation = function stopAsyncValidation(errors) {
	  return { type: _actionTypes.STOP_ASYNC_VALIDATION, errors: errors };
	};

	var stopSubmit = exports.stopSubmit = function stopSubmit(errors) {
	  return { type: _actionTypes.STOP_SUBMIT, errors: errors };
	};

	var submitFailed = exports.submitFailed = function submitFailed() {
	  return { type: _actionTypes.SUBMIT_FAILED };
	};

	var swapArrayValues = exports.swapArrayValues = function swapArrayValues(path, indexA, indexB) {
	  return { type: _actionTypes.SWAP_ARRAY_VALUES, path: path, indexA: indexA, indexB: indexB };
	};

	var touch = exports.touch = function touch() {
	  for (var _len = arguments.length, fields = Array(_len), _key = 0; _key < _len; _key++) {
	    fields[_key] = arguments[_key];
	  }

	  return { type: _actionTypes.TOUCH, fields: fields };
	};

	var untouch = exports.untouch = function untouch() {
	  for (var _len2 = arguments.length, fields = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    fields[_key2] = arguments[_key2];
	  }

	  return { type: _actionTypes.UNTOUCH, fields: fields };
	};

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = bindActionData;

	var _mapValues = __webpack_require__(150);

	var _mapValues2 = _interopRequireDefault(_mapValues);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Adds additional properties to the results of the function or map of functions passed
	 */
	function bindActionData(action, data) {
	  if (typeof action === 'function') {
	    return function () {
	      return _extends({}, action.apply(undefined, arguments), data);
	    };
	  }
	  if (typeof action === 'object') {
	    return (0, _mapValues2.default)(action, function (value) {
	      return bindActionData(value, data);
	    });
	  }
	  return action;
	}

/***/ },
/* 240 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var dataKey = exports.dataKey = 'value';
	var createOnDragStart = function createOnDragStart(name, getValue) {
	  return function (event) {
	    event.dataTransfer.setData(dataKey, getValue());
	  };
	};

	exports.default = createOnDragStart;

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _isEvent = __webpack_require__(242);

	var _isEvent2 = _interopRequireDefault(_isEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getSelectedValues = function getSelectedValues(options) {
	  var result = [];
	  if (options) {
	    for (var index = 0; index < options.length; index++) {
	      var option = options[index];
	      if (option.selected) {
	        result.push(option.value);
	      }
	    }
	  }
	  return result;
	};

	var getValue = function getValue(event, isReactNative) {
	  if ((0, _isEvent2.default)(event)) {
	    if (!isReactNative && event.nativeEvent && event.nativeEvent.text !== undefined) {
	      return event.nativeEvent.text;
	    }
	    if (isReactNative && event.nativeEvent !== undefined) {
	      return event.nativeEvent.text;
	    }
	    var _event$target = event.target;
	    var type = _event$target.type;
	    var value = _event$target.value;
	    var checked = _event$target.checked;
	    var files = _event$target.files;
	    var dataTransfer = event.dataTransfer;

	    if (type === 'checkbox') {
	      return checked;
	    }
	    if (type === 'file') {
	      return files || dataTransfer && dataTransfer.files;
	    }
	    if (type === 'select-multiple') {
	      return getSelectedValues(event.target.options);
	    }
	    if (type === 'number' || type === 'range') {
	      return parseFloat(value);
	    }
	    return value;
	  }
	  // not an event, so must be either our value or an object containing our value in the 'value' key
	  return event && typeof event === 'object' && event.value !== undefined ? event.value : // extract value from { value: value } structure. https://github.com/nikgraf/belle/issues/58
	  event;
	};

	exports.default = getValue;

/***/ },
/* 242 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var isEvent = function isEvent(candidate) {
	  return !!(candidate && candidate.stopPropagation && candidate.preventDefault);
	};

	exports.default = isEvent;

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _isEvent = __webpack_require__(242);

	var _isEvent2 = _interopRequireDefault(_isEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var silenceEvent = function silenceEvent(event) {
	  var is = (0, _isEvent2.default)(event);
	  if (is) {
	    event.preventDefault();
	  }
	  return is;
	};

	exports.default = silenceEvent;

/***/ },
/* 244 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = getDisplayName;
	function getDisplayName(Comp) {
	  return Comp.displayName || Comp.name || 'Component';
	}

/***/ },
/* 245 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	/**
	 * Given a state[field], get the value.
	 *  Fallback to .initialValue when .value is undefined to prevent double render/initialize cycle.
	 *  See {@link https://github.com/erikras/redux-form/issues/621}.
	 */
	var itemToValue = function itemToValue(_ref) {
	  var value = _ref.value;
	  var initialValue = _ref.initialValue;
	  return typeof value !== 'undefined' ? value : initialValue;
	};

	var getValue = function getValue(field, state, dest) {
	  var dotIndex = field.indexOf('.');
	  var openIndex = field.indexOf('[');
	  var closeIndex = field.indexOf(']');
	  if (openIndex > 0 && closeIndex !== openIndex + 1) {
	    throw new Error('found [ not followed by ]');
	  }
	  if (openIndex > 0 && (dotIndex < 0 || openIndex < dotIndex)) {
	    (function () {
	      // array field
	      var key = field.substring(0, openIndex);
	      var rest = field.substring(closeIndex + 1);
	      if (rest[0] === '.') {
	        rest = rest.substring(1);
	      }
	      var array = state && state[key] || [];
	      if (rest) {
	        if (!dest[key]) {
	          dest[key] = [];
	        }
	        array.forEach(function (item, index) {
	          if (!dest[key][index]) {
	            dest[key][index] = {};
	          }
	          getValue(rest, item, dest[key][index]);
	        });
	      } else {
	        dest[key] = array.map(itemToValue);
	      }
	    })();
	  } else if (dotIndex > 0) {
	    // subobject field
	    var _key = field.substring(0, dotIndex);
	    var _rest = field.substring(dotIndex + 1);
	    if (!dest[_key]) {
	      dest[_key] = {};
	    }
	    getValue(_rest, state && state[_key] || {}, dest[_key]);
	  } else {
	    dest[field] = state[field] && itemToValue(state[field]);
	  }
	};

	var getValues = function getValues(fields, state) {
	  return fields.reduce(function (accumulator, field) {
	    getValue(field, state, accumulator);
	    return accumulator;
	  }, {});
	};

	exports.default = getValues;

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _fieldValue = __webpack_require__(67);

	/**
	 * A different version of getValues() that does not need the fields array
	 */
	var getValuesFromState = function getValuesFromState(state) {
	  if (!state) {
	    return state;
	  }
	  var keys = Object.keys(state);
	  if (!keys.length) {
	    return undefined;
	  }
	  return keys.reduce(function (accumulator, key) {
	    var field = state[key];
	    if (field) {
	      if ((0, _fieldValue.isFieldValue)(field)) {
	        if (field.value !== undefined) {
	          accumulator[key] = field.value;
	        }
	      } else if (Array.isArray(field)) {
	        accumulator[key] = field.map(function (arrayField) {
	          return (0, _fieldValue.isFieldValue)(arrayField) ? arrayField.value : getValuesFromState(arrayField);
	        });
	      } else if (typeof field === 'object') {
	        var result = getValuesFromState(field);

	        if (result && Object.keys(result).length > 0) {
	          accumulator[key] = result;
	        }
	      }
	    }
	    return accumulator;
	  }, {});
	};

	exports.default = getValuesFromState;

/***/ },
/* 247 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var isChecked = function isChecked(value) {
	  if (typeof value === 'boolean') {
	    return value;
	  }
	  if (typeof value === 'string') {
	    var lower = value.toLowerCase();
	    if (lower === 'true') {
	      return true;
	    }
	    if (lower === 'false') {
	      return false;
	    }
	  }
	  return undefined;
	};

	exports.default = isChecked;

/***/ },
/* 248 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	/**
	 * Reads any potentially deep value from an object using dot and array syntax
	 */
	var read = function read(path, object) {
	  if (!path || !object) {
	    return object;
	  }
	  var dotIndex = path.indexOf('.');
	  if (dotIndex === 0) {
	    return read(path.substring(1), object);
	  }
	  var openIndex = path.indexOf('[');
	  var closeIndex = path.indexOf(']');
	  if (dotIndex >= 0 && (openIndex < 0 || dotIndex < openIndex)) {
	    // iterate down object tree
	    return read(path.substring(dotIndex + 1), object[path.substring(0, dotIndex)]);
	  }
	  if (openIndex >= 0 && (dotIndex < 0 || openIndex < dotIndex)) {
	    if (closeIndex < 0) {
	      throw new Error('found [ but no ]');
	    }
	    var key = path.substring(0, openIndex);
	    var index = path.substring(openIndex + 1, closeIndex);
	    if (!index.length) {
	      return object[key];
	    }
	    if (openIndex === 0) {
	      return read(path.substring(closeIndex + 1), object[index]);
	    }
	    if (!object[key]) {
	      return undefined;
	    }
	    return read(path.substring(closeIndex + 1), object[key][index]);
	  }
	  return object[path];
	};

	exports.default = read;

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.initialState = exports.globalErrorKey = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _initialState, _behaviors;

	var _actionTypes = __webpack_require__(149);

	var _mapValues = __webpack_require__(150);

	var _mapValues2 = _interopRequireDefault(_mapValues);

	var _read = __webpack_require__(248);

	var _read2 = _interopRequireDefault(_read);

	var _write = __webpack_require__(250);

	var _write2 = _interopRequireDefault(_write);

	var _getValuesFromState = __webpack_require__(246);

	var _getValuesFromState2 = _interopRequireDefault(_getValuesFromState);

	var _initializeState = __webpack_require__(573);

	var _initializeState2 = _interopRequireDefault(_initializeState);

	var _resetState = __webpack_require__(579);

	var _resetState2 = _interopRequireDefault(_resetState);

	var _setErrors = __webpack_require__(580);

	var _setErrors2 = _interopRequireDefault(_setErrors);

	var _fieldValue = __webpack_require__(67);

	var _normalizeFields = __webpack_require__(575);

	var _normalizeFields2 = _interopRequireDefault(_normalizeFields);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var globalErrorKey = exports.globalErrorKey = '_error';

	var initialState = exports.initialState = (_initialState = {
	  _active: undefined,
	  _asyncValidating: false
	}, _initialState[globalErrorKey] = undefined, _initialState._initialized = false, _initialState._submitting = false, _initialState._submitFailed = false, _initialState);

	var behaviors = (_behaviors = {}, _behaviors[_actionTypes.ADD_ARRAY_VALUE] = function (state, _ref) {
	  var path = _ref.path;
	  var index = _ref.index;
	  var value = _ref.value;
	  var fields = _ref.fields;

	  var array = (0, _read2.default)(path, state);
	  var stateCopy = _extends({}, state);
	  var arrayCopy = array ? [].concat(array) : [];
	  var newValue = value !== null && typeof value === 'object' ? (0, _initializeState2.default)(value, fields || Object.keys(value)) : (0, _fieldValue.makeFieldValue)({ value: value });
	  if (index === undefined) {
	    arrayCopy.push(newValue);
	  } else {
	    arrayCopy.splice(index, 0, newValue);
	  }
	  return (0, _write2.default)(path, arrayCopy, stateCopy);
	}, _behaviors[_actionTypes.AUTOFILL] = function (state, _ref2) {
	  var field = _ref2.field;
	  var value = _ref2.value;

	  return (0, _write2.default)(field, function (previous) {
	    var _previous$value$autof = _extends({}, previous, { value: value, autofilled: true });

	    var asyncError = _previous$value$autof.asyncError;
	    var submitError = _previous$value$autof.submitError;

	    var result = _objectWithoutProperties(_previous$value$autof, ['asyncError', 'submitError']);

	    return (0, _fieldValue.makeFieldValue)(result);
	  }, state);
	}, _behaviors[_actionTypes.BLUR] = function (state, _ref3) {
	  var field = _ref3.field;
	  var value = _ref3.value;
	  var touch = _ref3.touch;
	  var _active = state._active;

	  var stateCopy = _objectWithoutProperties(state, ['_active']);

	  if (_active && _active !== field) {
	    // remove _active from state
	    stateCopy._active = _active;
	  }
	  return (0, _write2.default)(field, function (previous) {
	    var result = _extends({}, previous);
	    if (value !== undefined) {
	      result.value = value;
	    }
	    if (touch) {
	      result.touched = true;
	    }
	    return (0, _fieldValue.makeFieldValue)(result);
	  }, stateCopy);
	}, _behaviors[_actionTypes.CHANGE] = function (state, _ref4) {
	  var field = _ref4.field;
	  var value = _ref4.value;
	  var touch = _ref4.touch;

	  return (0, _write2.default)(field, function (previous) {
	    var _previous$value = _extends({}, previous, { value: value });

	    var asyncError = _previous$value.asyncError;
	    var submitError = _previous$value.submitError;
	    var autofilled = _previous$value.autofilled;

	    var result = _objectWithoutProperties(_previous$value, ['asyncError', 'submitError', 'autofilled']);

	    if (touch) {
	      result.touched = true;
	    }
	    return (0, _fieldValue.makeFieldValue)(result);
	  }, state);
	}, _behaviors[_actionTypes.DESTROY] = function () {
	  return undefined;
	}, _behaviors[_actionTypes.FOCUS] = function (state, _ref5) {
	  var field = _ref5.field;

	  var stateCopy = (0, _write2.default)(field, function (previous) {
	    return (0, _fieldValue.makeFieldValue)(_extends({}, previous, { visited: true }));
	  }, state);
	  stateCopy._active = field;
	  return stateCopy;
	}, _behaviors[_actionTypes.INITIALIZE] = function (state, _ref6) {
	  var _extends2;

	  var data = _ref6.data;
	  var fields = _ref6.fields;
	  var overwriteValues = _ref6.overwriteValues;

	  return _extends({}, (0, _initializeState2.default)(data, fields, state, overwriteValues), (_extends2 = {
	    _asyncValidating: false,
	    _active: undefined
	  }, _extends2[globalErrorKey] = undefined, _extends2._initialized = true, _extends2._submitting = false, _extends2._submitFailed = false, _extends2));
	}, _behaviors[_actionTypes.REMOVE_ARRAY_VALUE] = function (state, _ref7) {
	  var path = _ref7.path;
	  var index = _ref7.index;

	  var array = (0, _read2.default)(path, state);
	  var stateCopy = _extends({}, state);
	  var arrayCopy = array ? [].concat(array) : [];
	  if (index === undefined) {
	    arrayCopy.pop();
	  } else if (isNaN(index)) {
	    delete arrayCopy[index];
	  } else {
	    arrayCopy.splice(index, 1);
	  }
	  return (0, _write2.default)(path, arrayCopy, stateCopy);
	}, _behaviors[_actionTypes.RESET] = function (state) {
	  var _extends3;

	  return _extends({}, (0, _resetState2.default)(state), (_extends3 = {
	    _active: undefined,
	    _asyncValidating: false
	  }, _extends3[globalErrorKey] = undefined, _extends3._initialized = state._initialized, _extends3._submitting = false, _extends3._submitFailed = false, _extends3));
	}, _behaviors[_actionTypes.START_ASYNC_VALIDATION] = function (state, _ref8) {
	  var field = _ref8.field;

	  return _extends({}, state, {
	    _asyncValidating: field || true
	  });
	}, _behaviors[_actionTypes.START_SUBMIT] = function (state) {
	  return _extends({}, state, {
	    _submitting: true
	  });
	}, _behaviors[_actionTypes.STOP_ASYNC_VALIDATION] = function (state, _ref9) {
	  var _extends4;

	  var errors = _ref9.errors;

	  return _extends({}, (0, _setErrors2.default)(state, errors, 'asyncError'), (_extends4 = {
	    _asyncValidating: false
	  }, _extends4[globalErrorKey] = errors && errors[globalErrorKey], _extends4));
	}, _behaviors[_actionTypes.STOP_SUBMIT] = function (state, _ref10) {
	  var _extends5;

	  var errors = _ref10.errors;

	  return _extends({}, (0, _setErrors2.default)(state, errors, 'submitError'), (_extends5 = {}, _extends5[globalErrorKey] = errors && errors[globalErrorKey], _extends5._submitting = false, _extends5._submitFailed = !!(errors && Object.keys(errors).length), _extends5));
	}, _behaviors[_actionTypes.SUBMIT_FAILED] = function (state) {
	  return _extends({}, state, {
	    _submitFailed: true
	  });
	}, _behaviors[_actionTypes.SWAP_ARRAY_VALUES] = function (state, _ref11) {
	  var path = _ref11.path;
	  var indexA = _ref11.indexA;
	  var indexB = _ref11.indexB;

	  var array = (0, _read2.default)(path, state);
	  var arrayLength = array.length;
	  if (indexA === indexB || isNaN(indexA) || isNaN(indexB) || indexA >= arrayLength || indexB >= arrayLength) {
	    return state; // do nothing
	  }
	  var stateCopy = _extends({}, state);
	  var arrayCopy = [].concat(array);
	  arrayCopy[indexA] = array[indexB];
	  arrayCopy[indexB] = array[indexA];
	  return (0, _write2.default)(path, arrayCopy, stateCopy);
	}, _behaviors[_actionTypes.TOUCH] = function (state, _ref12) {
	  var fields = _ref12.fields;

	  return _extends({}, state, fields.reduce(function (accumulator, field) {
	    return (0, _write2.default)(field, function (value) {
	      return (0, _fieldValue.makeFieldValue)(_extends({}, value, { touched: true }));
	    }, accumulator);
	  }, state));
	}, _behaviors[_actionTypes.UNTOUCH] = function (state, _ref13) {
	  var fields = _ref13.fields;

	  return _extends({}, state, fields.reduce(function (accumulator, field) {
	    return (0, _write2.default)(field, function (value) {
	      if (value) {
	        var touched = value.touched;

	        var rest = _objectWithoutProperties(value, ['touched']);

	        return (0, _fieldValue.makeFieldValue)(rest);
	      }
	      return (0, _fieldValue.makeFieldValue)(value);
	    }, accumulator);
	  }, state));
	}, _behaviors);

	var reducer = function reducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  var behavior = behaviors[action.type];
	  return behavior ? behavior(state, action) : state;
	};

	function formReducer() {
	  var _extends11;

	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var form = action.form;
	  var key = action.key;

	  var rest = _objectWithoutProperties(action, ['form', 'key']); // eslint-disable-line no-redeclare


	  if (!form) {
	    return state;
	  }
	  if (key) {
	    var _extends8, _extends9;

	    if (action.type === _actionTypes.DESTROY) {
	      var _extends7;

	      return _extends({}, state, (_extends7 = {}, _extends7[form] = state[form] && Object.keys(state[form]).reduce(function (accumulator, stateKey) {
	        var _extends6;

	        return stateKey === key ? accumulator : _extends({}, accumulator, (_extends6 = {}, _extends6[stateKey] = state[form][stateKey], _extends6));
	      }, {}), _extends7));
	    }
	    return _extends({}, state, (_extends9 = {}, _extends9[form] = _extends({}, state[form], (_extends8 = {}, _extends8[key] = reducer((state[form] || {})[key], rest), _extends8)), _extends9));
	  }
	  if (action.type === _actionTypes.DESTROY) {
	    return Object.keys(state).reduce(function (accumulator, formName) {
	      var _extends10;

	      return formName === form ? accumulator : _extends({}, accumulator, (_extends10 = {}, _extends10[formName] = state[formName], _extends10));
	    }, {});
	  }
	  return _extends({}, state, (_extends11 = {}, _extends11[form] = reducer(state[form], rest), _extends11));
	}

	/**
	 * Adds additional functionality to the reducer
	 */
	function decorate(target) {
	  target.plugin = function plugin(reducers) {
	    var _this = this;

	    // use 'function' keyword to enable 'this'
	    return decorate(function () {
	      var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	      var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var result = _this(state, action);
	      return _extends({}, result, (0, _mapValues2.default)(reducers, function (pluginReducer, key) {
	        return pluginReducer(result[key] || initialState, action);
	      }));
	    });
	  };

	  target.normalize = function normalize(normalizers) {
	    var _this2 = this;

	    // use 'function' keyword to enable 'this'
	    return decorate(function () {
	      var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	      var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var result = _this2(state, action);
	      return _extends({}, result, (0, _mapValues2.default)(normalizers, function (formNormalizers, form) {
	        var runNormalize = function runNormalize(previous, currentResult) {
	          var previousValues = (0, _getValuesFromState2.default)(_extends({}, initialState, previous));
	          var formResult = _extends({}, initialState, currentResult);
	          var values = (0, _getValuesFromState2.default)(formResult);
	          return (0, _normalizeFields2.default)(formNormalizers, formResult, previous, values, previousValues);
	        };
	        if (action.key) {
	          var _extends12;

	          return _extends({}, result[form], (_extends12 = {}, _extends12[action.key] = runNormalize(state[form][action.key], result[form][action.key]), _extends12));
	        }
	        return runNormalize(state[form], result[form]);
	      }));
	    });
	  };

	  return target;
	}

	exports.default = decorate(formReducer);

/***/ },
/* 250 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	/**
	 * Writes any potentially deep value from an object using dot and array syntax,
	 * and returns a new copy of the object.
	 */
	var write = function write(path, value, object) {
	  var _extends7;

	  var dotIndex = path.indexOf('.');
	  if (dotIndex === 0) {
	    return write(path.substring(1), value, object);
	  }
	  var openIndex = path.indexOf('[');
	  var closeIndex = path.indexOf(']');
	  if (dotIndex >= 0 && (openIndex < 0 || dotIndex < openIndex)) {
	    var _extends2;

	    // is dot notation
	    var key = path.substring(0, dotIndex);
	    return _extends({}, object, (_extends2 = {}, _extends2[key] = write(path.substring(dotIndex + 1), value, object[key] || {}), _extends2));
	  }
	  if (openIndex >= 0 && (dotIndex < 0 || openIndex < dotIndex)) {
	    var _ret = function () {
	      var _extends6;

	      // is array notation
	      if (closeIndex < 0) {
	        throw new Error('found [ but no ]');
	      }
	      var key = path.substring(0, openIndex);
	      var index = path.substring(openIndex + 1, closeIndex);
	      var array = object[key] || [];
	      var rest = path.substring(closeIndex + 1);
	      if (index) {
	        var _extends4;

	        // indexed array
	        if (rest.length) {
	          var _extends3;

	          // need to keep recursing
	          var dest = array[index] || {};
	          var arrayCopy = [].concat(array);
	          arrayCopy[index] = write(rest, value, dest);
	          return {
	            v: _extends({}, object || {}, (_extends3 = {}, _extends3[key] = arrayCopy, _extends3))
	          };
	        }
	        var copy = [].concat(array);
	        copy[index] = typeof value === 'function' ? value(copy[index]) : value;
	        return {
	          v: _extends({}, object || {}, (_extends4 = {}, _extends4[key] = copy, _extends4))
	        };
	      }
	      // indexless array
	      if (rest.length) {
	        var _extends5;

	        // need to keep recursing
	        if ((!array || !array.length) && typeof value === 'function') {
	          return {
	            v: object
	          }; // don't even set a value under [key]
	        }
	        var _arrayCopy = array.map(function (dest) {
	          return write(rest, value, dest);
	        });
	        return {
	          v: _extends({}, object || {}, (_extends5 = {}, _extends5[key] = _arrayCopy, _extends5))
	        };
	      }
	      var result = void 0;
	      if (Array.isArray(value)) {
	        result = value;
	      } else if (object[key]) {
	        result = array.map(function (dest) {
	          return typeof value === 'function' ? value(dest) : value;
	        });
	      } else if (typeof value === 'function') {
	        return {
	          v: object
	        }; // don't even set a value under [key]
	      } else {
	          result = value;
	        }
	      return {
	        v: _extends({}, object || {}, (_extends6 = {}, _extends6[key] = result, _extends6))
	      };
	    }();

	    if (typeof _ret === "object") return _ret.v;
	  }
	  return _extends({}, object, (_extends7 = {}, _extends7[path] = typeof value === 'function' ? value(object[path]) : value, _extends7));
	};

	exports.default = write;

/***/ },
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */
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
	exports.logout = logout;

	var _callApi = __webpack_require__(78);

	var _callApi2 = _interopRequireDefault(_callApi);

	var _config = __webpack_require__(59);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function addCollection(data) {
	    return (0, _callApi2.default)(_config.ApiRoots.LOCAL + 'collections', { method: 'POST', data: data });
	}
	/**
	 * data: name, author, description, cover, content
	 * todo
	 */
	function addBook(data) {
	    return (0, _callApi2.default)(_config.ApiRoots.LOCAL + 'books', { method: 'POST', data: data });
	}
	/**
	 * data: name, slug, description
	 * todo
	 */
	function addAuthor(data) {
	    return (0, _callApi2.default)(_config.ApiRoots.LOCAL + 'authors', { method: 'POST', data: data });
	}
	function searchAuthors(query) {
	    return (0, _callApi2.default)(_config.ApiRoots.LOCAL + 'authors?q=' + query);
	}
	function searchBooks(query) {
	    return (0, _callApi2.default)(_config.ApiRoots.LOCAL + 'books?q=' + query);
	}
	function setProgress(bookId, data) {
	    (0, _callApi2.default)(_config.ApiRoots.LOCAL + 'user/books/' + bookId + '/progress', { method: 'PUT', data: data });
	}
	function deleteBook(id) {
	    return (0, _callApi2.default)(_config.ApiRoots.LOCAL + 'books/' + id, {
	        method: 'DELETE'
	    });
	}
	function logout() {
	    return (0, _callApi2.default)(_config.ApiRoots.LOCAL + 'auth/revoke', {
	        method: 'PUT'
	    });
	}

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetchDoubanBooks = fetchDoubanBooks;

	var _jsonp = __webpack_require__(162);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _config = __webpack_require__(59);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function fetchDoubanBooks(query) {
	    return (0, _jsonp2.default)(_config.ApiRoots.DOUBAN_BOOKS + '/search?count=5&q=' + query);
	}

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(9);

	var _layout = __webpack_require__(77);

	var _Dropdown = __webpack_require__(156);

	var _Logo = __webpack_require__(154);

	var _Logo2 = _interopRequireDefault(_Logo);

	var _reactCssModules = __webpack_require__(2);

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

	var styles = __webpack_require__(366);
	var Branding = function (_Component) {
	    _inherits(Branding, _Component);

	    function Branding(props) {
	        _classCallCheck(this, Branding);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Branding).call(this, props));

	        _this.state = {
	            isDropdownMenuVisible: false
	        };
	        _this.handleLogoutClick = _this.handleLogoutClick.bind(_this);
	        return _this;
	    }

	    _createClass(Branding, [{
	        key: "toggleDropdownMenu",
	        value: function toggleDropdownMenu() {
	            this.setState({
	                isDropdownMenuVisible: !this.state.isDropdownMenuVisible
	            });
	        }
	    }, {
	        key: "handleLogoutClick",
	        value: function handleLogoutClick() {
	            this.props.onLogout();
	            return false;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var isAdmin = this.props.isAdmin ? this.props.isAdmin : false;
	            var _props = this.props;
	            var username = _props.username;
	            var recentReading = _props.recentReading;

	            return _react2.default.createElement("div", { styleName: "branding " + (this.props.className ? this.props.className : '') }, _react2.default.createElement(_layout.Container, { className: "clearfix" }, _react2.default.createElement("div", null, _react2.default.createElement(_Logo2.default, { to: "/" }), _react2.default.createElement("div", { styleName: "nav" }, _react2.default.createElement("ul", { styleName: "nav-links" }, _react2.default.createElement("li", { styleName: "nav-item" }, _react2.default.createElement(_reactRouter.Link, { styleName: "nav-link", to: "/browse" }, "浏览")))), username ? _react2.default.createElement("div", { styleName: "nav--user" }, recentReading.length !== 0 && _react2.default.createElement(_Dropdown.Dropdown, { styleName: "dropdown-recent-reading", title: "最近阅读" }, recentReading.slice(0, 5).map(function (book, index) {
	                return _react2.default.createElement(_Dropdown.DropdownItem, { key: index }, _react2.default.createElement(_reactRouter.Link, { to: "/viewer/book/" + book.id }, book.title));
	            }), _react2.default.createElement(_Dropdown.DropdownItemSep, null), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/user/shelf" }, "查看全部"))), _react2.default.createElement(_Dropdown.Dropdown, { title: _react2.default.createElement("span", null, username, isAdmin && _react2.default.createElement("span", { className: "badge" }, "管理员")) }, isAdmin === true && _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/console" }, "控制台")), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/user/shelf" }, "书架")), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/user/profile" }, "个人主页")), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/user/preference" }, "设置")), _react2.default.createElement(_Dropdown.DropdownItemSep, null), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement("a", { onClick: this.handleLogoutClick, href: "#" }, "退出")))) : _react2.default.createElement("div", { styleName: "nav--user" }, _react2.default.createElement("ul", { styleName: "nav-links" }, _react2.default.createElement("li", { styleName: "nav-item" }, _react2.default.createElement(_reactRouter.Link, { styleName: "nav-link", to: "/signin" }, "登录")), _react2.default.createElement("li", { styleName: "nav-item" }, _react2.default.createElement(_reactRouter.Link, { styleName: "nav-link", to: "/signup" }, "注册")))))));
	        }
	    }]);

	    return Branding;
	}(_react.Component);
	Branding = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], Branding);
	exports.default = Branding;

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Branding = __webpack_require__(258);

	var _Branding2 = _interopRequireDefault(_Branding);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Branding2.default;

/***/ },
/* 260 */,
/* 261 */,
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Container = __webpack_require__(49);

	var _Container2 = _interopRequireDefault(_Container);

	var _reactCssModules = __webpack_require__(2);

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

	var styles = __webpack_require__(358);
	var Colophon = function (_Component) {
	    _inherits(Colophon, _Component);

	    function Colophon() {
	        _classCallCheck(this, Colophon);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Colophon).apply(this, arguments));
	    }

	    _createClass(Colophon, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement("div", { className: "colophon", styleName: "colophon" }, _react2.default.createElement(_Container2.default, null, _react2.default.createElement("p", null, "© 2015－2016 readrweb.com, all rights reserved")));
	        }
	    }]);

	    return Colophon;
	}(_react.Component);
	Colophon = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], Colophon);
	exports.default = Colophon;

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Colophon = __webpack_require__(262);

	var _Colophon2 = _interopRequireDefault(_Colophon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Colophon2.default;

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(9);

	var _Container = __webpack_require__(49);

	var _Container2 = _interopRequireDefault(_Container);

	var _Dropdown = __webpack_require__(156);

	var _reactCssModules = __webpack_require__(2);

	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

	var _Logo = __webpack_require__(154);

	var _Logo2 = _interopRequireDefault(_Logo);

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

	var styles = __webpack_require__(367);
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
	        key: "toggleDropdownMenu",
	        value: function toggleDropdownMenu() {
	            this.setState({
	                isDropdownMenuVisible: !this.state.isDropdownMenuVisible
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var username = this.props.username;
	            var isAdmin = this.props.isAdmin ? this.props.isAdmin : 'false';
	            return _react2.default.createElement("div", { styleName: "branding" }, _react2.default.createElement(_Container2.default, { isFluid: true, className: "clearfix" }, _react2.default.createElement("div", null, _react2.default.createElement(_Logo2.default, { to: "/console" }), _react2.default.createElement("div", { styleName: "sub-name" }, _react2.default.createElement("span", { styleName: "sub" }, "控制台")), _react2.default.createElement("div", { styleName: "nav right" }, username ? _react2.default.createElement(_Dropdown.Dropdown, { style: "dark", title: _react2.default.createElement("span", null, username, isAdmin && _react2.default.createElement("span", { className: "badge badge--dark" }, "管理员")) }, _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/" }, "回到 Readr")), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/user/profile" }, "个人主页")), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/user/preference" }, "设置")), _react2.default.createElement(_Dropdown.DropdownItemSep, null), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement("a", { href: "/logout" }, "退出"))) : _react2.default.createElement("ul", { className: "nav-links" }, _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: "/signin" }, "登录")), _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: "/signup" }, "注册")))))));
	        }
	    }]);

	    return ConsoleBranding;
	}(_react.Component);
	ConsoleBranding = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], ConsoleBranding);
	exports.default = ConsoleBranding;

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ConsoleBranding = __webpack_require__(264);

	var _ConsoleBranding2 = _interopRequireDefault(_ConsoleBranding);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ConsoleBranding2.default;

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(9);

	var _Icon = __webpack_require__(24);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _reactCssModules = __webpack_require__(2);

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

	var styles = __webpack_require__(359);
	var ConsoleSidebar = function (_Component) {
	    _inherits(ConsoleSidebar, _Component);

	    function ConsoleSidebar(props) {
	        _classCallCheck(this, ConsoleSidebar);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ConsoleSidebar).call(this, props));
	    }

	    _createClass(ConsoleSidebar, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var menuMapping = _props.menuMapping;
	            var currentPath = _props.currentPath;

	            var currentMenu = {
	                rootIndex: 0,
	                subIndex: 0
	            };
	            menuMapping.forEach(function (menu, rootIndex) {
	                var subIndex = void 0;
	                var result = menu.subMenu.filter(function (item, index) {
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
	            var rootMenu = _react2.default.createElement("ul", { styleName: "nav-side-root" }, menuMapping.map(function (menu, index) {
	                return _react2.default.createElement("li", { key: index, styleName: index !== currentMenu.rootIndex ? 'root-item' : 'root-item--current' }, _react2.default.createElement(_reactRouter.Link, { to: menu.path }, _react2.default.createElement(_Icon2.default, { size: 25, styleName: "icon", name: menu.component })));
	            }));
	            var subMenu = _react2.default.createElement("ul", { styleName: "nav-side-sub" }, menuMapping[currentMenu.rootIndex].subMenu.map(function (menu, index) {
	                return _react2.default.createElement("li", { key: index, styleName: index !== currentMenu.subIndex ? 'sub-item' : 'sub-item--current' }, _react2.default.createElement(_reactRouter.Link, { to: menu.path }, menu.displayName));
	            }));
	            return _react2.default.createElement("div", { styleName: "sidebar-left" }, rootMenu, subMenu);
	        }
	    }]);

	    return ConsoleSidebar;
	}(_react.Component);
	ConsoleSidebar = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], ConsoleSidebar);
	exports.default = ConsoleSidebar;

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ConsoleSidebar = __webpack_require__(266);

	var _ConsoleSidebar2 = _interopRequireDefault(_ConsoleSidebar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ConsoleSidebar2.default;

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var styles = __webpack_require__(360);
	function Logo(props) {
	    return _react2.default.createElement("h1", { className: styles['logo-wrap'] }, _react2.default.createElement(_reactRouter.Link, { className: styles['logo'], to: props.to }, "readr"));
	}
	exports.default = Logo;

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	var _Branding = __webpack_require__(259);

	var _Branding2 = _interopRequireDefault(_Branding);

	var _Colophon = __webpack_require__(263);

	var _Colophon2 = _interopRequireDefault(_Colophon);

	var _actions = __webpack_require__(8);

	var _apis = __webpack_require__(70);

	var _apis2 = _interopRequireDefault(_apis);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AppCommon = function (_Component) {
	    _inherits(AppCommon, _Component);

	    function AppCommon(props) {
	        _classCallCheck(this, AppCommon);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(AppCommon).call(this, props));
	    }

	    _createClass(AppCommon, [{
	        key: 'handleLogout',
	        value: function handleLogout() {
	            _apis2.default.logout().then(function () {
	                location.href = location.href;
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.session.user.role !== 'visitor') {
	                this.props.fetchShelf();
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var userLoggedIn = this.props.session.user.role === 'visitor' && nextProps.session.user.role !== 'visitor';
	            if (userLoggedIn) {
	                this.props.fetchShelf();
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var isAdmin = false;
	            var username = null;
	            if (this.props.session.user.role !== 'visitor') {
	                isAdmin = this.props.session.user.role === 'admin';
	                username = this.props.session.user.username;
	            }
	            var bookShelf = this.props.bookShelf;

	            var bookShelfList = bookShelf.map(function (book) {
	                return {
	                    title: book.title,
	                    id: book.id
	                };
	            });
	            return _react2.default.createElement("div", null, _react2.default.createElement(_Branding2.default, { recentReading: bookShelfList, isAdmin: isAdmin, username: username, onLogout: this.handleLogout }), this.props.children, _react2.default.createElement(_Colophon2.default, null));
	        }
	    }]);

	    return AppCommon;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        notification: state.components.notification,
	        session: state.session,
	        bookShelf: state.payloads.bookShelf || []
	    };
	}, { fetchShelf: _actions.fetchShelf })(AppCommon);

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AppMaster = function (_Component) {
	    _inherits(AppMaster, _Component);

	    function AppMaster(props) {
	        _classCallCheck(this, AppMaster);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(AppMaster).call(this, props));
	    }

	    _createClass(AppMaster, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement("div", null, this.props.children);
	        }
	    }]);

	    return AppMaster;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        elements: state.elements,
	        routing: state.routing.locationBeforeTransitions
	    };
	}, {})(AppMaster);

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	var _Container = __webpack_require__(49);

	var _Container2 = _interopRequireDefault(_Container);

	var _ConsoleBranding = __webpack_require__(265);

	var _ConsoleBranding2 = _interopRequireDefault(_ConsoleBranding);

	var _actions = __webpack_require__(8);

	var _ConsoleSidebar = __webpack_require__(267);

	var _ConsoleSidebar2 = _interopRequireDefault(_ConsoleSidebar);

	var _menus = __webpack_require__(274);

	var _menus2 = _interopRequireDefault(_menus);

	var _DocContainer = __webpack_require__(34);

	var _DocContainer2 = _interopRequireDefault(_DocContainer);

	var _reactCssModules = __webpack_require__(2);

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

	var styles = __webpack_require__(361);
	var Console = function (_Component) {
	    _inherits(Console, _Component);

	    function Console() {
	        _classCallCheck(this, Console);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Console).apply(this, arguments));
	    }

	    _createClass(Console, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.props.userAuth();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var isAdmin = this.props.session.user.role === 'admin' ? true : false;
	            var username = this.props.session.user.username ? this.props.session.user.username : null;
	            var pathname = this.props.routing.locationBeforeTransitions ? this.props.routing.locationBeforeTransitions.pathname : 'console';
	            return _react2.default.createElement(_DocContainer2.default, { bodyClass: "console" }, _react2.default.createElement(_ConsoleBranding2.default, { isAdmin: isAdmin, username: username }), _react2.default.createElement(_Container2.default, { isFluid: true }, _react2.default.createElement(_ConsoleSidebar2.default, { menuMapping: _menus2.default, currentPath: pathname }), _react2.default.createElement("div", { styleName: "content" }, this.props.children)));
	        }
	    }]);

	    return Console;
	}(_react.Component);
	Console = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], Console);
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        notifications: state.components.notifications,
	        session: state.session,
	        routing: state.routing
	    };
	}, { sendNotification: _actions.sendNotification, userAuth: _actions.userAuth })(Console);

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ConsoleMaster = __webpack_require__(271);

	var _ConsoleMaster2 = _interopRequireDefault(_ConsoleMaster);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ConsoleMaster2.default;

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(6);

	var _reactRouter = __webpack_require__(9);

	var _actions = __webpack_require__(8);

	var _Alert = __webpack_require__(276);

	var _lodash = __webpack_require__(4);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _Modal = __webpack_require__(159);

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
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var hasNewErrorMsg = this.props.errorMessage.length !== nextProps.errorMessage.length;
	            var routerChanged = nextProps.routing.locationBeforeTransitions.pathname !== this.props.routing.locationBeforeTransitions.pathname;
	            if (hasNewErrorMsg) {
	                this.props.sendNotification(_lodash2.default.last(nextProps.errorMessage), 'error');
	            }
	            if (routerChanged) {
	                // 返回顶部
	                window.document.body.scrollTop = 0;
	                // 简单权限验证
	                if (nextProps.routing.locationBeforeTransitions.pathname.indexOf('console') !== -1) {
	                    if (this.props.session.user.role !== 'admin') {
	                        _reactRouter.browserHistory.push('/');
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.userAuth();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var confirmModal = _props.confirmModal;
	            var closeConfirmModal = _props.closeConfirmModal;
	            var modal = _props.modal;
	            var closeModal = _props.closeModal;

	            return _react2.default.createElement("div", { className: "app-root" }, _react2.default.createElement(_Modal.ConfirmModal, { open: confirmModal.open, title: confirmModal.title, onConfirm: confirmModal.onConfirm, onRequestClose: closeConfirmModal, width: 500 }, confirmModal.content), _react2.default.createElement(_Modal.ModalPlus, { open: modal.open, width: 500, onRequestClose: closeModal, title: modal.title }, modal.content), this.props.notifications.filter(function (noti) {
	                return noti.visible;
	            }).length > 0 && _react2.default.createElement(_Alert.Alerts, { onRequestClose: this.props.hideNotification, messages: this.props.notifications.map(function (noti) {
	                    return {
	                        content: noti.message,
	                        type: noti.type,
	                        visible: noti.visible,
	                        id: noti.id
	                    };
	                }) }), this.props.children);
	        }
	    }], [{
	        key: 'fetchData',
	        value: function fetchData(_ref) {
	            var store = _ref.store;
	            var userSession = _ref.userSession;

	            return store.dispatch((0, _actions.userAuth)(userSession));
	        }
	    }]);

	    return Root;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        notifications: state.components.notifications,
	        errorMessage: state.errorMessage,
	        confirmModal: state.components.confirmModal,
	        modal: state.components.modal,
	        routing: state.routing,
	        session: state.session
	    };
	}, { sendNotification: _actions.sendNotification, hideNotification: _actions.hideNotification, closeConfirmModal: _actions.closeConfirmModal, userAuth: _actions.userAuth, closeModal: _actions.closeModal })(Root);

/***/ },
/* 274 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var menus = [{
	    component: 'books',
	    displayName: '',
	    path: '/console/books',
	    subMenu: [{
	        component: 'managebooks',
	        displayName: '书籍管理',
	        path: '/console/books'
	    }, {
	        component: 'addbook',
	        displayName: '添加书籍',
	        path: '/console/books/new'
	    }, {
	        component: 'addcollection',
	        displayName: '添加合集',
	        path: '/console/collections/new'
	    }]
	}, {
	    component: 'users',
	    displayName: '',
	    path: '/console/users',
	    subMenu: [{
	        component: 'manageusers',
	        displayName: '用户管理',
	        path: '/console/users'
	    }]
	}];
	exports.default = menus;

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Alert = __webpack_require__(155);

	var _Alert2 = _interopRequireDefault(_Alert);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var styles = __webpack_require__(165);
	function Alerts(props) {
	    return _react2.default.createElement("div", { className: styles.alerts }, props.messages.map(function (msg, index) {
	        return _react2.default.createElement(_Alert2.default, { key: index, type: msg.type, message: msg.content, visible: msg.visible, onRequestClose: function onRequestClose() {
	                props.onRequestClose(msg.id);
	            } });
	    }));
	}
	exports.default = Alerts;

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Alert = exports.Alerts = undefined;

	var _Alert = __webpack_require__(155);

	var _Alert2 = _interopRequireDefault(_Alert);

	var _Alerts = __webpack_require__(275);

	var _Alerts2 = _interopRequireDefault(_Alerts);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Alerts = _Alerts2.default;
	exports.Alert = _Alert2.default;
	exports.default = _Alert2.default;

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactCssModules = __webpack_require__(2);

	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

	var _isDescendant = __webpack_require__(32);

	var _isDescendant2 = _interopRequireDefault(_isDescendant);

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

	// import $ from 'jquery'
	var styles = __webpack_require__(113);
	var Dropdown = function (_Component) {
	    _inherits(Dropdown, _Component);

	    function Dropdown(props) {
	        _classCallCheck(this, Dropdown);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).call(this, props));

	        _this.state = {
	            showMenu: false
	        };
	        _this.toggleDropdown = _this.toggleDropdown.bind(_this);
	        _this.hideExpended = _this.hideExpended.bind(_this);
	        return _this;
	    }

	    _createClass(Dropdown, [{
	        key: "toggleDropdown",
	        value: function toggleDropdown(e) {
	            this.setState({
	                showMenu: !this.state.showMenu
	            });
	        }
	    }, {
	        key: "hideExpended",
	        value: function hideExpended(e) {
	            // 检查点击的 dom 是否是 dropdown 的子元素
	            // 如果是那么就不做处理，而 toggleDropdown 会响应
	            // 解决了页面上同时用两个 dropdown 时，其中一个展开，点击另一个前者不合上的问题
	            if (!(0, _isDescendant2.default)(this.dropdown, e.target)) {
	                // if ($(this.dropdown).find(e.target).length === 0) {
	                this.setState({
	                    showMenu: false
	                });
	            }
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            window.addEventListener('click', this.hideExpended);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            window.removeEventListener('click', this.hideExpended);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var className = _props.className;
	            var style = _props.style;

	            return _react2.default.createElement("div", { ref: function ref(_ref) {
	                    _this2.dropdown = _ref;
	                }, onClick: this.toggleDropdown, styleName: "dropdown", className: className || '' }, _react2.default.createElement("span", { styleName: "dropdown-toggle" }, this.props.title, " ", _react2.default.createElement("span", { styleName: "dropdown-caret" })), this.state.showMenu && _react2.default.createElement("div", { styleName: style === 'dark' ? 'dropdown-menu--dark' : 'dropdown-menu' }, _react2.default.createElement("ul", null, this.props.children)));
	        }
	    }]);

	    return Dropdown;
	}(_react.Component);
	Dropdown = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], Dropdown);
	exports.default = Dropdown;

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var styles = __webpack_require__(113);
	function DropdownItem(props) {
	    return _react2.default.createElement("li", null, typeof props.children === 'string' ? _react2.default.createElement("div", { className: styles['dropdown-item'] }, props.children) : _react2.default.cloneElement(props.children, {
	        className: styles['dropdown-item']
	    }));
	}
	exports.default = DropdownItem;

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var styles = __webpack_require__(113);
	function DropdownItemSep(props) {
	    return _react2.default.createElement("li", { className: styles['sep'] });
	}
	exports.default = DropdownItemSep;

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(21);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _svgIcons = __webpack_require__(281);

	var _svgIcons2 = _interopRequireDefault(_svgIcons);

	var _reactCssModules = __webpack_require__(2);

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

	var styles = __webpack_require__(362);
	var Icon = function (_Component) {
	    _inherits(Icon, _Component);

	    function Icon(props) {
	        _classCallCheck(this, Icon);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Icon).call(this, props));
	    }

	    _createClass(Icon, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var name = _props.name;
	            var onClick = _props.onClick;
	            var size = _props.size;

	            var className = (0, _classnames2.default)('icon', "icon-" + name, this.props.className);
	            if (typeof _svgIcons2.default[name] === 'undefined') {
	                console.error('Icon name (%s) not found! ', name);
	            }
	            size = size || 30;
	            return _react2.default.createElement("span", { styleName: "icon", className: className, onClick: onClick }, _react2.default.createElement("svg", __assign({}, _svgIcons2.default[name].viewBox && { viewBox: _svgIcons2.default[name].viewBox }, { width: size, height: size, styleName: "svg-shape" }), _react2.default.createElement("path", { d: _svgIcons2.default[name].path })));
	        }
	    }]);

	    return Icon;
	}(_react.Component);
	Icon = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], Icon);
	exports.default = Icon;

/***/ },
/* 281 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    close: {
	        path: 'M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z',
	        viewBox: '0 0 12 16'
	    },
	    star: {
	        path: 'M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z'
	    },
	    users: {
	        path: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'
	    },
	    folder: {
	        path: 'M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z'
	    },
	    database: {
	        path: 'M20.2 5.9l.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7zm-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1 .9 0 1.8.3 2.5 1l.8-.8zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM8 18H6v-2h2v2zm3.5 0h-2v-2h2v2zm3.5 0h-2v-2h2v2z'
	    },
	    statistics: {
	        path: 'M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z'
	    },
	    books: {
	        path: 'M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z'
	    },
	    back: {
	        // path: 'M732 832l-55 55l-505 -505l505 -505l55 54l-451 451z'
	        // path: 'M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z',
	        path: 'm 26,25 c -0.467574,0 -0.909434,0.16865 -1.25,0.4375 C 24.555279,25.591215 6.6130516,42.546285 6.46875,42.71875 6.1782332,43.06596 6,43.51187 6,44 6,44.51946 6.2065566,44.98818 6.53125,45.34375 6.6683992,45.493941 24.625,62.4375 24.625,62.4375 c 0.759842,0.725152 2.121842,0.700421 2.84375,-0.0625 0.721908,-0.76293 0.672244,-2.125099 -0.09375,-2.84375 L 13.03125,46 64,46 c 13.888871,0 25.660392,11.63955 26,26.03125 0.0035,0.140557 0,0.77485 0,0.96875 0,1.108 0.892,2 2,2 1.108,0 2,-0.892 2,-2 l 0,-1.0625 C 93.610208,55.4194 80.118529,42 64,42 L 13.03125,42 C 13.03125,42 27.362732,28.495959 27.5,28.34375 27.81971,27.98925 28,27.51497 28,27 28,25.89543 27.104569,25 26,25 z',
	        viewBox: '0 0 100 125'
	    },
	    preference: {
	        path: 'M 17.78125 8.96875 A 2.0002 2.0002 0 0 0 16 11 L 16 56.25 C 12.008188 57.168302 9 60.741406 9 65 C 9 69.259224 12.007427 72.863534 16 73.78125 L 16 89 A 2.0002 2.0002 0 1 0 20 89 L 20 73.78125 C 23.992573 72.863534 27 69.259224 27 65 C 27 60.741406 23.991812 57.168302 20 56.25 L 20 11 A 2.0002 2.0002 0 0 0 17.78125 8.96875 z M 49.78125 8.96875 A 2.0002 2.0002 0 0 0 48 11 L 48 26.25 C 44.008188 27.168305 41 30.741423 41 35 C 41 39.25912 44.007427 42.863511 48 43.78125 L 48 89 A 2.0002 2.0002 0 1 0 52 89 L 52 43.78125 C 55.992573 42.863511 59 39.25912 59 35 C 59 30.741423 55.991812 27.168305 52 26.25 L 52 11 A 2.0002 2.0002 0 0 0 49.78125 8.96875 z M 81.78125 8.96875 A 2.0002 2.0002 0 0 0 80 11 L 80 56.25 C 76.008188 57.168302 73 60.741406 73 65 C 73 69.259224 76.007427 72.863534 80 73.78125 L 80 89 A 2.0002 2.0002 0 1 0 84 89 L 84 73.78125 C 87.992573 72.863534 91 69.259224 91 65 C 91 60.741406 87.991812 57.168302 84 56.25 L 84 11 A 2.0002 2.0002 0 0 0 81.78125 8.96875 z M 50 30 C 52.785116 30 55 32.21488 55 35 C 55 37.78512 52.785116 40 50 40 C 47.214884 40 45 37.78512 45 35 C 45 32.21488 47.214884 30 50 30 z M 18 60 C 20.785116 60 23 62.2149 23 65 C 23 67.7852 20.785116 70 18 70 C 15.214884 70 13 67.7852 13 65 C 13 62.2149 15.214884 60 18 60 z M 82 60 C 84.785116 60 87 62.2149 87 65 C 87 67.7852 84.785116 70 82 70 C 79.214884 70 77 67.7852 77 65 C 77 62.2149 79.214884 60 82 60 z ',
	        viewBox: '0 0 100 125'
	    },
	    font: {
	        // path: 'M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'
	        path: 'M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z'
	    },
	    arrowRight: {
	        path: 'M-290.9,430.1l-0.7-0.7l8.2-8.6l-8.2-8.2l0.7-0.7l8.9,8.9L-290.9,430.1z',
	        viewBox: '-292 411.9 11 18'
	    }
	};

/***/ },
/* 282 */,
/* 283 */,
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Modal = __webpack_require__(159);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _ModalFooter = __webpack_require__(158);

	var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

	var _reactCssModules = __webpack_require__(2);

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

	var styles = __webpack_require__(114);
	var Dialog = function (_Component) {
	    _inherits(Dialog, _Component);

	    function Dialog(props) {
	        _classCallCheck(this, Dialog);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Dialog).call(this, props));
	    }

	    _createClass(Dialog, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var onConfirm = _props.onConfirm;
	            var onRequestClose = _props.onRequestClose;
	            var open = _props.open;

	            return _react2.default.createElement(_Modal2.default, { open: open, onRequestClose: onRequestClose, width: this.props.width }, _react2.default.createElement("div", { styleName: "confirm-modal" }, this.props.title && _react2.default.createElement("div", { styleName: "modal-header" }, _react2.default.createElement("h1", { styleName: "modal-title" }, this.props.title)), _react2.default.createElement("div", { styleName: "modal-content" }, this.props.children), _react2.default.createElement(_ModalFooter2.default, { onConfirm: onConfirm, onCancel: onRequestClose })));
	        }
	    }]);

	    return Dialog;
	}(_react.Component);
	Dialog = __decorate([(0, _reactCssModules2.default)(styles)], Dialog);
	exports.default = Dialog;

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Modal = __webpack_require__(157);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _reactCssModules = __webpack_require__(2);

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

	var styles = __webpack_require__(114);
	var ModalPlus = function (_Component) {
	    _inherits(ModalPlus, _Component);

	    function ModalPlus(props) {
	        _classCallCheck(this, ModalPlus);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalPlus).call(this, props));
	    }

	    _createClass(ModalPlus, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var title = _props.title;
	            var open = _props.open;
	            var onRequestClose = _props.onRequestClose;
	            var width = _props.width;
	            var actions = _props.actions;

	            return _react2.default.createElement(_Modal2.default, { open: open, onRequestClose: onRequestClose, width: width || 600 }, _react2.default.createElement("div", { styleName: "modal-plus" }, title && _react2.default.createElement("div", { styleName: "modal-header" }, _react2.default.createElement("h1", { styleName: "modal-title" }, title)), _react2.default.createElement("div", { styleName: "modal-body" }, this.props.children), actions && actions.map(function (action, index) {
	                return _react2.default.cloneElement(action, {
	                    key: index
	                });
	            })));
	        }
	    }]);

	    return ModalPlus;
	}(_react.Component);
	ModalPlus = __decorate([(0, _reactCssModules2.default)(styles)], ModalPlus);
	exports.default = ModalPlus;

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCssTransitionGroup = __webpack_require__(182);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = __webpack_require__(363);

	var Fade = function (_Component) {
	    _inherits(Fade, _Component);

	    function Fade(props) {
	        _classCallCheck(this, Fade);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Fade).call(this, props));
	    }

	    _createClass(Fade, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_reactAddonsCssTransitionGroup2.default, { component: "div", transitionName: styles, transitionEnterTimeout: 300, transitionLeaveTimeout: 300 }, this.props.children);
	        }
	    }]);

	    return Fade;
	}(_react.Component);

	exports.default = Fade;

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(9);

	var _reactCssModules = __webpack_require__(2);

	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

	var _classnames2 = __webpack_require__(21);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _lodash = __webpack_require__(4);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

	var styles = __webpack_require__(369);
	var Button = function (_Component) {
	    _inherits(Button, _Component);

	    function Button(props) {
	        _classCallCheck(this, Button);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, props));

	        _this.state = {
	            isMouseOver: false
	        };
	        return _this;
	    }

	    _createClass(Button, [{
	        key: "render",
	        value: function render() {
	            var _classnames,
	                _this2 = this;

	            var _props = this.props;
	            var onClick = _props.onClick;
	            var className = _props.className;
	            var color = _props.color;
	            var size = _props.size;
	            var isFluid = _props.isFluid;
	            var width = _props.width;

	            var style = {};
	            var styleName = (0, _classnames3.default)((_classnames = {
	                'btn': true,
	                'btn--hover': this.state.isMouseOver,
	                'btn--fluid': isFluid
	            }, _defineProperty(_classnames, "btn--" + color, Boolean(color)), _defineProperty(_classnames, "btn--" + size, Boolean(size)), _classnames));
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
	            if (typeof width !== 'undefined') {
	                style = {
	                    width: width
	                };
	            }
	            var props = (0, _lodash2.default)(this.props).omit(['to', 'color', 'size', 'isFluid', 'width']).assign({}, {
	                className: className || '',
	                onClick: onClick,
	                style: style
	            }).value();
	            return _react2.default.createElement("button", __assign({}, props, { styleName: styleName, onMouseOver: function onMouseOver() {
	                    _this2.setState({
	                        isMouseOver: true
	                    });
	                }, onMouseOut: function onMouseOut() {
	                    _this2.setState({
	                        isMouseOver: false
	                    });
	                } }), this.props.children);
	        }
	    }]);

	    return Button;
	}(_react.Component);
	Button = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], Button);
	Button.defaultProps = {
	    color: 'blue'
	};
	exports.default = Button;

/***/ },
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    path: 'books/new',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(6, function (require) {
	            fn(null, __webpack_require__(288).default);
	        });
	    }
	};

/***/ },
/* 292 */,
/* 293 */,
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    path: 'collections/new',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(8, function (require) {
	            fn(null, __webpack_require__(292).default);
	        });
	    }
	};

/***/ },
/* 295 */,
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    path: '/',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(2, function (require) {
	            fn(null, __webpack_require__(295).default);
	        });
	    }
	};

/***/ },
/* 297 */,
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    path: 'book/:id',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(10, function (require) {
	            fn(null, __webpack_require__(297).default);
	        });
	    }
	};

/***/ },
/* 299 */,
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    path: 'browse',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(1, function (require) {
	            fn(null, __webpack_require__(299).default);
	        });
	    }
	};

/***/ },
/* 301 */,
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    path: 'collections/:id',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(4, function (require) {
	            fn(null, __webpack_require__(301).default);
	        });
	    }
	};

/***/ },
/* 303 */,
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    path: 'collections',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(15, function (require) {
	            fn(null, __webpack_require__(303).default);
	        });
	    }
	};

/***/ },
/* 305 */,
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    path: 'books',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(9, function (require) {
	            fn(null, __webpack_require__(305).default);
	        });
	    }
	};

/***/ },
/* 307 */,
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    path: 'users',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(11, function (require) {
	            fn(null, __webpack_require__(307).default);
	        });
	    }
	};

/***/ },
/* 309 */,
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    path: '*',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(16, function (require) {
	            fn(null, __webpack_require__(309).default);
	        });
	    }
	};

/***/ },
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    path: 'preference',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(14, function (require) {
	            fn(null, __webpack_require__(311).default);
	        });
	    }
	};

/***/ },
/* 315 */,
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    path: 'profile',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(7, function (require) {
	            fn(null, __webpack_require__(315).default);
	        });
	    }
	};

/***/ },
/* 317 */,
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    path: 'shelf',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(3, function (require) {
	            fn(null, __webpack_require__(317).default);
	        });
	    }
	};

/***/ },
/* 319 */,
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    path: 'signin',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(13, function (require) {
	            fn(null, __webpack_require__(319).default);
	        });
	    }
	};

/***/ },
/* 321 */,
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    path: 'signup',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(12, function (require) {
	            fn(null, __webpack_require__(321).default);
	        });
	    }
	};

/***/ },
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	    path: 'viewer/book/:id',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(5, function (require) {
	            fn(null, __webpack_require__(326).default);
	        });
	    }
	};

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Root = __webpack_require__(273);

	var _Root2 = _interopRequireDefault(_Root);

	var _AppMaster = __webpack_require__(270);

	var _AppMaster2 = _interopRequireDefault(_AppMaster);

	var _AppCommon = __webpack_require__(269);

	var _AppCommon2 = _interopRequireDefault(_AppCommon);

	var _ConsoleMaster = __webpack_require__(272);

	var _ConsoleMaster2 = _interopRequireDefault(_ConsoleMaster);

	var _reactRouter = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};
	exports.default = _react2.default.createElement(_reactRouter.Route, { component: _Root2.default }, _react2.default.createElement(_reactRouter.Route, { component: _AppMaster2.default }, _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(331))), _react2.default.createElement(_reactRouter.Route, { component: _AppCommon2.default }, _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(296))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(300))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(298))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(304))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(302))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(320))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(322))), _react2.default.createElement(_reactRouter.Route, { path: "user", component: "div" }, _react2.default.createElement(_reactRouter.IndexRedirect, { to: "/user/profile" }), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(318))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(314))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(316))))), _react2.default.createElement(_reactRouter.Route, { path: "console", component: _ConsoleMaster2.default }, _react2.default.createElement(_reactRouter.IndexRedirect, { to: "/console/books" }), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(306))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(308))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(291))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(294))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(310))))));

/***/ },
/* 333 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.sendNotification = sendNotification;
	exports.showNotification = showNotification;
	exports.hideNotification = hideNotification;
	exports.openConfirmModal = openConfirmModal;
	exports.closeConfirmModal = closeConfirmModal;
	exports.openModal = openModal;
	exports.closeModal = closeModal;
	function sendNotification(message) {
	    var msgType = arguments.length <= 1 || arguments[1] === undefined ? 'success' : arguments[1];
	    var t = arguments.length <= 2 || arguments[2] === undefined ? 2000 : arguments[2];

	    return function (dispatch, getState) {
	        var id = Math.random().toFixed(8).substr(2);
	        dispatch(showNotification(id, message, msgType));
	        if (t !== 0) {
	            setTimeout(function () {
	                dispatch(hideNotification(id));
	            }, t);
	        }
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
	// confirm modal
	var OPEN_CONFIRM_MODAL = exports.OPEN_CONFIRM_MODAL = 'components/confirm-modal/OPEN';
	var CLOSE_CONFIRM_MODAL = exports.CLOSE_CONFIRM_MODAL = 'components/confirm-modal/CLOSE';
	function openConfirmModal(data) {
	    return {
	        type: OPEN_CONFIRM_MODAL,
	        data: data
	    };
	}
	function closeConfirmModal() {
	    return {
	        type: CLOSE_CONFIRM_MODAL
	    };
	}
	function openModal(data) {
	    return {
	        type: 'OPEN_MODAL',
	        data: data
	    };
	}
	function closeModal() {
	    return {
	        type: 'CLOSE_MODAL'
	    };
	}

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AUTHOR_FAILURE = exports.AUTHOR_SUCCESS = exports.AUTHOR_REQUEST = undefined;
	exports.fetchAuthors = fetchAuthors;

	var _schemas = __webpack_require__(110);

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AUTHOR_REQUEST = exports.AUTHOR_REQUEST = 'data-fetching/authors/REQUEST';
	var AUTHOR_SUCCESS = exports.AUTHOR_SUCCESS = 'data-fetching/authors/SUCCESS';
	var AUTHOR_FAILURE = exports.AUTHOR_FAILURE = 'data-fetching/authors/FAILURE';
	function fetchAuthors(options) {
	    var CALL_API = {
	        types: [AUTHOR_REQUEST, AUTHOR_SUCCESS, AUTHOR_FAILURE],
	        endpoint: 'authors?' + _utils2.default.parseFormData(options),
	        schema: _schemas.Schemas.AUTHOR_ARRAY,
	        pagination: {
	            name: 'authors',
	            query: options.q
	        }
	    };
	    return {
	        CALL_API: CALL_API
	    };
	}

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DOUBAN_BOOK_SEARCH_FAILURE = exports.DOUBAN_BOOK_SEARCH_SUCCESS = exports.DOUBAN_BOOK_SEARCH_REQUEST = exports.BOOKS_FAILURE = exports.BOOKS_SUCCESS = exports.BOOKS_REQUEST = undefined;
	exports.fetchBooks = fetchBooks;
	exports.fetchBook = fetchBook;
	exports.fetchCollections = fetchCollections;
	exports.fetchCollection = fetchCollection;
	exports.searchDoubanBooks = searchDoubanBooks;

	var _schemas = __webpack_require__(110);

	var _config = __webpack_require__(59);

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	var _lodash = __webpack_require__(4);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BOOKS_REQUEST = exports.BOOKS_REQUEST = 'data-fetching/books/REQUEST';
	var BOOKS_SUCCESS = exports.BOOKS_SUCCESS = 'data-fetching/books/SUCCESS';
	var BOOKS_FAILURE = exports.BOOKS_FAILURE = 'data-fetching/books/FAILURE';
	function fetchBooks(options) {
	    var defaultConfig = { page: 1, merge: false };
	    var mergedOptions = Object.assign(defaultConfig, options || {});
	    var merge = mergedOptions.merge;
	    var q = mergedOptions.q;

	    var queryOptions = _lodash2.default.omit(mergedOptions, ['merge']);
	    queryOptions = _lodash2.default.assign({}, queryOptions, {
	        exclude: 'content'
	    });
	    var queryString = _utils2.default.parseFormData(queryOptions);
	    var CALL_API = {
	        types: [BOOKS_REQUEST, BOOKS_SUCCESS, BOOKS_FAILURE],
	        endpoint: 'books?' + queryString,
	        schema: _schemas.Schemas.BOOK_ARRAY,
	        pagination: {
	            name: 'books',
	            merge: merge,
	            query: q
	        }
	    };
	    return {
	        CALL_API: CALL_API
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
	var DOUBAN_BOOK_SEARCH_REQUEST = exports.DOUBAN_BOOK_SEARCH_REQUEST = 'data-fetching/douban-book-search/REQUEST';
	var DOUBAN_BOOK_SEARCH_SUCCESS = exports.DOUBAN_BOOK_SEARCH_SUCCESS = 'data-fetching/douban-book-search/SUCCESS';
	var DOUBAN_BOOK_SEARCH_FAILURE = exports.DOUBAN_BOOK_SEARCH_FAILURE = 'data-fetching/douban-book-search/FAILURE';
	function searchDoubanBooks(query) {
	    var CALL_API = {
	        types: [DOUBAN_BOOK_SEARCH_REQUEST, DOUBAN_BOOK_SEARCH_SUCCESS, DOUBAN_BOOK_SEARCH_FAILURE],
	        endpoint: 'search?count=5&q=' + query,
	        apiUrl: _config.ApiRoots.DOUBAN_BOOKS,
	        schema: _schemas.Schemas.DOUBAN_BOOK_SEARCH_RESULTS,
	        options: { useJsonp: true },
	        pagination: {
	            name: 'doubanBooks',
	            query: query
	        }
	    };
	    return {
	        query: query,
	        CALL_API: CALL_API
	    };
	}

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _book = __webpack_require__(335);

	Object.keys(_book).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _book[key];
	    }
	  });
	});

	var _user = __webpack_require__(337);

	Object.keys(_user).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _user[key];
	    }
	  });
	});

	var _users = __webpack_require__(338);

	Object.keys(_users).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _users[key];
	    }
	  });
	});

	var _author = __webpack_require__(334);

	Object.keys(_author).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _author[key];
	    }
	  });
	});

/***/ },
/* 337 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.userAuth = userAuth;
	exports.fetchProfile = fetchProfile;
	exports.fetchShelf = fetchShelf;
	exports.fetchProgress = fetchProgress;
	function userAuth(userSession) {
	    // 服务端渲染 session
	    if (userSession) {
	        return {
	            SERVER_STORE: {
	                body: {
	                    response: userSession,
	                    type: 'USER_AUTH_SUCCESS'
	                }
	            }
	        };
	    }
	    return {
	        CALL_API: {
	            types: ['USER_AUTH_REQUEST', 'USER_AUTH_SUCCESS', 'USER_AUTH_FAILURE'],
	            endpoint: 'auth'
	        }
	    };
	}
	function fetchProfile() {
	    return {
	        payload: 'profile',
	        CALL_API: {
	            types: ['PROFILE_REQUEST', 'PROFILE_SUCCESS', 'PROFILE_FAILURE'],
	            endpoint: 'user/profile'
	        }
	    };
	}
	// export function fetchPublicProfile() {
	//   return {
	//     CALL_API: {
	//       types: ['PROFILE_REQUEST', 'PROFILE_SUCCESS', 'PROFILE_FAILURE'],
	//       endpoint: `user/profile`,
	//       schema: Schemas.PROFILE
	//     }
	//   }
	// }
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
	function fetchProgress(bookId) {
	    return {
	        bookId: bookId,
	        payload: 'progress',
	        CALL_API: {
	            types: ['PROGRESS_REQUEST', 'PROGRESS_SUCCESS', 'PROGRESS_FAILURE'],
	            endpoint: 'user/books/' + bookId + '/progress'
	        }
	    };
	}

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.USERS_FAILURE = exports.USERS_SUCCESS = exports.USERS_REQUEST = undefined;
	exports.fetchUsers = fetchUsers;

	var _schemas = __webpack_require__(110);

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	var _lodash = __webpack_require__(4);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var USERS_REQUEST = exports.USERS_REQUEST = 'data-fetching/users/REQUEST';
	var USERS_SUCCESS = exports.USERS_SUCCESS = 'data-fetching/users/SUCCESS';
	var USERS_FAILURE = exports.USERS_FAILURE = 'data-fetching/users/FAILURE';
	function fetchUsers() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var queryString = _utils2.default.parseFormData(options.api);
	    var CALL_API = {
	        types: [USERS_REQUEST, USERS_SUCCESS, USERS_FAILURE],
	        endpoint: 'users?' + queryString,
	        schema: _schemas.Schemas.USER_ARRAY,
	        pagination: {
	            name: 'users',
	            merge: options.merge,
	            query: _lodash2.default.get(options, 'api.q', '')
	        }
	    };
	    return { CALL_API: CALL_API };
	}

/***/ },
/* 339 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
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
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(69);

	var _reduxThunk = __webpack_require__(251);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reducers = __webpack_require__(349);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _api = __webpack_require__(341);

	var _api2 = _interopRequireDefault(_api);

	var _modifyResponse = __webpack_require__(344);

	var _modifyResponse2 = _interopRequireDefault(_modifyResponse);

	var _handleServerStore = __webpack_require__(342);

	var _handleServerStore2 = _interopRequireDefault(_handleServerStore);

	var _handleInitialState = __webpack_require__(351);

	var _handleInitialState2 = _interopRequireDefault(_handleInitialState);

	var _logActionTypes = __webpack_require__(343);

	var _logActionTypes2 = _interopRequireDefault(_logActionTypes);

	var _reduxLogger = __webpack_require__(585);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var env = ("production");
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
	        store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_handleServerStore2.default, _api2.default, _modifyResponse2.default, _reduxThunk2.default, _logActionTypes2.default));
	        return store;
	    }
	    if (env === 'production') {
	        store = (0, _redux.createStore)(_reducers2.default, (0, _handleInitialState2.default)(), (0, _redux.applyMiddleware)(_handleServerStore2.default, _api2.default, _modifyResponse2.default, _reduxThunk2.default));
	    } else {
	        store = (0, _redux.createStore)(_reducers2.default, (0, _handleInitialState2.default)(), (0, _redux.compose)((0, _redux.applyMiddleware)(_handleServerStore2.default, _api2.default, _modifyResponse2.default, _reduxThunk2.default, (0, _reduxLogger2.default)({ collapsed: true }))));
	    }
	    return store;
	}

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _callApi = __webpack_require__(78);

	var _callApi2 = _interopRequireDefault(_callApi);

	var _config = __webpack_require__(59);

	var _lodash = __webpack_require__(4);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _handleResponse = __webpack_require__(352);

	var _handleResponse2 = _interopRequireDefault(_handleResponse);

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
	            var options = CALL_API.options;
	            var pagination = CALL_API.pagination;
	            var types = CALL_API.types;
	            var schema = CALL_API.schema;

	            var _types = _slicedToArray(types, 3);

	            var requestType = _types[0];
	            var successType = _types[1];
	            var failureType = _types[2];

	            var actionWith = function actionWith(_ref) {
	                var data = _ref.data;
	                var hasPagination = _ref.hasPagination;

	                var finalAction = Object.assign({}, action, data);
	                finalAction = _lodash2.default.omit(finalAction, ['CALL_API']);
	                if (!hasPagination) {
	                    finalAction = _lodash2.default.omit(finalAction, ['CALL_API', 'pagination']);
	                }
	                return finalAction;
	            };
	            next(actionWith({
	                data: {
	                    type: requestType,
	                    pagination: pagination
	                },
	                hasPagination: Boolean(pagination)
	            }));
	            if (typeof endpoint === 'function') {
	                endpoint = endpoint(store.getState());
	            }
	            if (typeof apiUrl === 'undefined') {
	                apiUrl = _config.ApiRoots.LOCAL;
	            }
	            var fullUrl = apiUrl + endpoint;
	            return (0, _callApi2.default)(fullUrl, options || {}).then(function (response) {
	                var normalizedRes = (0, _handleResponse2.default)(response, schema);
	                var finalAction = {
	                    response: normalizedRes,
	                    type: successType,
	                    pagination: pagination
	                };
	                return next(function (dispatch) {
	                    dispatch(actionWith({ data: finalAction, hasPagination: Boolean(pagination) }));
	                    return {
	                        ok: true,
	                        response: response
	                    };
	                });
	            }, function (error) {
	                return next(function (dispatch) {
	                    dispatch(actionWith({
	                        data: {
	                            type: failureType,
	                            pagination: pagination,
	                            error: error.message || '发生未知 API 错误！(Code 1000)'
	                        },
	                        hasPagination: Boolean(pagination)
	                    }));
	                    return {
	                        ok: false,
	                        error: {
	                            message: error.message
	                        }
	                    };
	                });
	            });
	        };
	    };
	};

/***/ },
/* 342 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (store) {
	    return function (next) {
	        return function (action) {
	            if (typeof action.SERVER_STORE === 'undefined') {
	                return next(action);
	            }
	            var actionBody = new Promise(function (resolve) {
	                resolve(action.SERVER_STORE.body);
	            });
	            return actionBody.then(function (body) {
	                return next(function (dispatch) {
	                    dispatch(body);
	                    return {
	                        ok: true,
	                        response: action.body.response
	                    };
	                });
	            });
	        };
	    };
	};

/***/ },
/* 343 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (store) {
	    return function (next) {
	        return function (action) {
	            console.info(action.type);
	            // if (action.type === '@@router/LOCATION_CHANGE') {
	            //   console.info(action.payload)
	            // }
	            next(action);
	        };
	    };
	};

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _actions = __webpack_require__(8);

	var actions = _interopRequireWildcard(_actions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	exports.default = function (store) {
	    return function (next) {
	        return function (action) {
	            if (action.type === actions.DOUBAN_BOOK_SEARCH_SUCCESS) {
	                action.response.result = action.response.result.books;
	            }
	            next(action);
	        };
	    };
	};

/***/ },
/* 345 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = errorMessage;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	// Updates error message to notify about the failed fetches.
	function errorMessage() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var action = arguments[1];
	    var error = action.error;

	    if (error) {
	        return [].concat(_toConsumableArray(state), [action.error]);
	    }
	    return state;
	}

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.errorMessage = exports.pagination = undefined;
	exports.entities = entities;
	exports.payloads = payloads;
	exports.session = session;

	var _errorMessage = __webpack_require__(345);

	var _errorMessage2 = _interopRequireDefault(_errorMessage);

	var _pagination = __webpack_require__(347);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _lodash = __webpack_require__(4);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.pagination = _pagination2.default;
	exports.errorMessage = _errorMessage2.default;
	function entities() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (action.response && action.response.entities) {
	        return _lodash2.default.merge({}, state, action.response.entities);
	    }
	    return state;
	}
	function payloads() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if ((action.response || action.error) && action.payload) {
	        return _lodash2.default.assign({}, state, _defineProperty({}, action.payload, action.response));
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

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = pagination;

	var _lodash = __webpack_require__(4);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var updatePagination = function updatePagination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {
	        isFetching: false,
	        nextPageUrl: null,
	        pageCount: 0,
	        ids: []
	    } : arguments[0];
	    var action = arguments[1];
	    var merge = arguments[2];

	    if (!action.response) {
	        return Object.assign({}, state, {
	            isFetching: true
	        });
	    } else {
	        return _lodash2.default.omitBy(Object.assign({}, state, {
	            isFetching: false,
	            ids: merge ? _lodash2.default.union(state.ids, action.response.result) : action.response.result,
	            next: action.response._next,
	            last: action.response._last
	        }), _lodash2.default.isEmpty);
	    }
	};
	function pagination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (action.pagination) {
	        var _action$pagination = action.pagination;
	        var name = _action$pagination.name;
	        var query = _action$pagination.query;
	        var key = _action$pagination.key;
	        var merge = _action$pagination.merge;

	        var originalState = query ? state[name] && state[name]['query'] && state[name]['query'][query] || {} : state[name] && state[name][key || 'default'] || {};
	        var paginationBody = updatePagination(originalState, action, merge);
	        var paginationObj = query ? {
	            query: _defineProperty({}, query, paginationBody)
	        } : _defineProperty({}, key || 'default', paginationBody);
	        return Object.assign({}, state, _defineProperty({}, name, paginationObj));
	    }
	    return state;
	}

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(69);

	var _actions = __webpack_require__(8);

	var actions = _interopRequireWildcard(_actions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
	function confirmModal() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (action.type === actions.OPEN_CONFIRM_MODAL) {
	        return Object.assign({}, state, { open: true }, action.data);
	    }
	    if (action.type === actions.CLOSE_CONFIRM_MODAL) {
	        return {
	            open: false
	        };
	    }
	    return state;
	}
	function modal() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (action.type === 'OPEN_MODAL') {
	        return Object.assign({}, state, { open: true }, action.data);
	    }
	    if (action.type === 'CLOSE_MODAL') {
	        return {
	            open: false
	        };
	    }
	    return state;
	}
	var components = (0, _redux.combineReducers)({
	    notifications: notifications,
	    confirmModal: confirmModal,
	    modal: modal
	});
	exports.default = components;

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reduxForm = __webpack_require__(68);

	var _redux = __webpack_require__(69);

	var _reactRouterRedux = __webpack_require__(123);

	var _components = __webpack_require__(348);

	var _components2 = _interopRequireDefault(_components);

	var _apiData = __webpack_require__(346);

	var apiDataReducers = _interopRequireWildcard(_apiData);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	// import * as actions from '../actions'
	// deprecated
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
	var rootReducer = (0, _redux.combineReducers)(Object.assign({}, {
	    components: _components2.default,
	    elements: elements,
	    routing: _reactRouterRedux.routerReducer,
	    form: _reduxForm.reducer
	}, apiDataReducers));
	exports.default = rootReducer;

/***/ },
/* 350 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = getScreenInfo;
	function getScreenInfo() {
	    if (typeof window === 'undefined') {
	        console.error('window is undefined, empty info object will be returned!');
	        return {
	            view: {},
	            screen: {}
	        };
	    }
	    return {
	        view: {
	            width: window.innerWidth,
	            height: window.innerHeight,
	            aspectRatio: window.innerWidth / window.innerHeight
	        },
	        screen: window.screen
	    };
	}

/***/ },
/* 351 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function handleInitialState() {
	    var initialState = {};
	    if (typeof window.__INITIAL_STATE__ !== 'undefined') {
	        initialState = window.__INITIAL_STATE__;
	    }
	    return initialState;
	}
	exports.default = handleInitialState;

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _normalizr = __webpack_require__(119);

	var _humps = __webpack_require__(167);

	var _humps2 = _interopRequireDefault(_humps);

	var _parseQueryString = __webpack_require__(354);

	var _parseQueryString2 = _interopRequireDefault(_parseQueryString);

	var _lodash = __webpack_require__(4);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var parseHeaderPageLinkByRel = function parseHeaderPageLinkByRel(links, rel) {
	    var link = links.split(',').find(function (s) {
	        return s.indexOf('rel="' + rel + '"') > -1;
	    });
	    if (!link) {
	        return undefined;
	    }
	    var url = link.split(';')[0].trim().slice(1, -1);
	    return {
	        // todo
	        page: parseInt(_lodash2.default.get((0, _parseQueryString2.default)(url.split('?')[1] || ''), 'page', 0), 10),
	        url: url
	    };
	};
	function parseResHeaderToPagination(response) {
	    if (!response) {
	        return {};
	    }
	    var links = response.headers.get('link');
	    if (!links) {
	        return {};
	    }
	    var next = parseHeaderPageLinkByRel(links, 'next');
	    var last = parseHeaderPageLinkByRel(links, 'last');
	    return {
	        next: next,
	        last: last
	    };
	}
	function handleResponse(_ref, schema) {
	    var json = _ref.json;
	    var _response = _ref._response;

	    var camelizedJson = _humps2.default.camelizeKeys(json);

	    var _parseResHeaderToPagi = parseResHeaderToPagination(_response);

	    var next = _parseResHeaderToPagi.next;
	    var last = _parseResHeaderToPagi.last;

	    if (typeof schema !== 'undefined') {
	        return Object.assign({}, (0, _normalizr.normalize)(camelizedJson, schema), {
	            _next: next,
	            _last: last
	        });
	    }
	    return camelizedJson;
	}
	exports.default = handleResponse;

/***/ },
/* 353 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = lockScroll;
	function lockScroll() {
	    document.body.style.overflow = 'hidden';
	}

/***/ },
/* 354 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = parseQueryString;
	function parseQueryString(queryString) {
	    var params = queryString.split('&');
	    var object = {};
	    params.forEach(function (param) {
	        var key = param.split('=')[0];
	        var val = param.split('=')[1];
	        object[key] = val;
	    });
	    return object;
	}

/***/ },
/* 355 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = unlockScroll;
	function unlockScroll() {
	    document.body.style.overflow = 'visible';
	}

/***/ },
/* 356 */
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },
/* 357 */
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;

	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },
/* 358 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"colophon":"colophon_FVdSR"};

/***/ },
/* 359 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"sidebar-left":"sidebar-left_2Nfva","nav-side":"nav-side_3L8f6","nav-side-root":"nav-side-root_1_PBg nav-side_3L8f6","nav-side-root--current":"nav-side-root--current_3BV5t nav-side-root_1_PBg nav-side_3L8f6","nav-side-sub":"nav-side-sub_5Q_f5 nav-side_3L8f6","nav-item":"nav-item_2r1zn","icon":"icon_26PwG","root-item":"root-item_VPwuM nav-item_2r1zn","root-item--current":"root-item--current_3LMnD root-item_VPwuM nav-item_2r1zn","sub-item":"sub-item_waA-O nav-item_2r1zn","sub-item--current":"sub-item--current_3CzmM sub-item_waA-O nav-item_2r1zn"};

/***/ },
/* 360 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"logo-wrap":"logo-wrap_CP5P9","logo":"logo_3qcbV"};

/***/ },
/* 361 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"content":"content_2oBQl"};

/***/ },
/* 362 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"svg-shape":"svg-shape_30-k0","icon":"icon_VsVR4"};

/***/ },
/* 363 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"enter":"enter_1c4SW","enterActive":"enterActive_nCJQw","leave":"leave_1oTp_","leaveActive":"leaveActive_3hTgH"};

/***/ },
/* 364 */,
/* 365 */,
/* 366 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"nav-link":"nav-link_3X0T8","branding":"branding_8EVAt","dropdown-menu":"dropdown-menu_5Sc50","username":"username_3Mm6z","nav-links":"nav-links_2wTYY","nav":"nav_1oj1z","nav--user":"nav--user_1L7Lb","dropdown-recent-reading":"dropdown-recent-reading_2oyjH","nav-item":"nav-item_f83bh","recent-reading":"recent-reading_1kJKh"};

/***/ },
/* 367 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"branding":"branding_3goRG","sep":"sep_AT6Gl","sub":"sub_Iyhms","right":"right_1ZAQP","sub-name":"sub-name_2T8ah","nav":"nav_10yn4 nav_1oj1z"};

/***/ },
/* 368 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"modal-footer":"modal-footer_FaHiU"};

/***/ },
/* 369 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"btn":"btn_2aW__","focus":"focus_2Y5ov","active":"active_jFdNZ","disabled":"disabled_2NFJX","btn--hover":"btn--hover_344mi","btn--blue":"btn--blue_1nEIM","btn--orange":"btn--orange_v4x5_","btn--red":"btn--red_2gsfS","btn--white":"btn--white_3rWF3"};

/***/ },
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _deepEqual = __webpack_require__(164);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	function intersects(array1, array2) {
	  return !!(array1 && array2 && array1.some(function (item) {
	    return ~array2.indexOf(item);
	  }));
	}

	var LazyCache = (function () {
	  function LazyCache(component, calculators) {
	    var _this = this;

	    _classCallCheck(this, LazyCache);

	    this.component = component;
	    this.allProps = [];
	    this.cache = Object.keys(calculators).reduce(function (accumulator, key) {
	      var _extends2;

	      var calculator = calculators[key];
	      var fn = calculator.fn;
	      var paramNames = calculator.params;
	      paramNames.forEach(function (param) {
	        if (! ~_this.allProps.indexOf(param)) {
	          _this.allProps.push(param);
	        }
	      });
	      return _extends({}, accumulator, (_extends2 = {}, _extends2[key] = {
	        value: undefined,
	        props: paramNames,
	        fn: fn
	      }, _extends2));
	    }, {});
	  }

	  LazyCache.prototype.get = function get(key) {
	    var component = this.component;
	    var _cache$key = this.cache[key];
	    var value = _cache$key.value;
	    var fn = _cache$key.fn;
	    var props = _cache$key.props;

	    if (value !== undefined) {
	      return value;
	    }
	    var params = props.map(function (prop) {
	      return component.props[prop];
	    });
	    var result = fn.apply(undefined, params);
	    this.cache[key].value = result;
	    return result;
	  };

	  LazyCache.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _this2 = this;

	    var component = this.component;

	    var diffProps = [];
	    this.allProps.forEach(function (prop) {
	      if (!_deepEqual2['default'](component.props[prop], nextProps[prop])) {
	        diffProps.push(prop);
	      }
	    });
	    if (diffProps.length) {
	      Object.keys(this.cache).forEach(function (key) {
	        if (intersects(diffProps, _this2.cache[key].props)) {
	          delete _this2.cache[key].value; // uncache value
	        }
	      });
	    }
	  };

	  return LazyCache;
	})();

	exports['default'] = LazyCache;
	module.exports = exports['default'];

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(439);


/***/ },
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _isPromise = __webpack_require__(118);

	var _isPromise2 = _interopRequireDefault(_isPromise);

	var _isValid = __webpack_require__(96);

	var _isValid2 = _interopRequireDefault(_isValid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var asyncValidation = function asyncValidation(fn, start, stop, field) {
	  start(field);
	  var promise = fn();
	  if (!(0, _isPromise2.default)(promise)) {
	    throw new Error('asyncValidate function passed to reduxForm must return a promise');
	  }
	  var handleErrors = function handleErrors(rejected) {
	    return function (errors) {
	      if (!(0, _isValid2.default)(errors)) {
	        stop(errors);
	        return Promise.reject();
	      } else if (rejected) {
	        stop();
	        throw new Error('Asynchronous validation promise was rejected without errors.');
	      }
	      stop();
	      return Promise.resolve();
	    };
	  };
	  return promise.then(handleErrors(false), handleErrors(true));
	};

	exports.default = asyncValidation;

/***/ },
/* 562 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = createAll;

	var _reducer = __webpack_require__(249);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _createReduxForm = __webpack_require__(565);

	var _createReduxForm2 = _interopRequireDefault(_createReduxForm);

	var _mapValues = __webpack_require__(150);

	var _mapValues2 = _interopRequireDefault(_mapValues);

	var _bindActionData = __webpack_require__(239);

	var _bindActionData2 = _interopRequireDefault(_bindActionData);

	var _actions = __webpack_require__(238);

	var actions = _interopRequireWildcard(_actions);

	var _actionTypes = __webpack_require__(149);

	var actionTypes = _interopRequireWildcard(_actionTypes);

	var _createPropTypes = __webpack_require__(564);

	var _createPropTypes2 = _interopRequireDefault(_createPropTypes);

	var _getValuesFromState = __webpack_require__(246);

	var _getValuesFromState2 = _interopRequireDefault(_getValuesFromState);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// bind form as first parameter of action creators
	var boundActions = _extends({}, (0, _mapValues2.default)(_extends({}, actions, {
	  autofillWithKey: function autofillWithKey(key) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    return (0, _bindActionData2.default)(actions.autofill, { key: key }).apply(undefined, args);
	  },
	  changeWithKey: function changeWithKey(key) {
	    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	      args[_key2 - 1] = arguments[_key2];
	    }

	    return (0, _bindActionData2.default)(actions.change, { key: key }).apply(undefined, args);
	  },
	  initializeWithKey: function initializeWithKey(key) {
	    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	      args[_key3 - 1] = arguments[_key3];
	    }

	    return (0, _bindActionData2.default)(actions.initialize, { key: key }).apply(undefined, args);
	  },
	  reset: function reset(key) {
	    return (0, _bindActionData2.default)(actions.reset, { key: key })();
	  },
	  touchWithKey: function touchWithKey(key) {
	    for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	      args[_key4 - 1] = arguments[_key4];
	    }

	    return (0, _bindActionData2.default)(actions.touch, { key: key }).apply(undefined, args);
	  },
	  untouchWithKey: function untouchWithKey(key) {
	    for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
	      args[_key5 - 1] = arguments[_key5];
	    }

	    return (0, _bindActionData2.default)(actions.untouch, { key: key }).apply(undefined, args);
	  },
	  destroy: function destroy(key) {
	    return (0, _bindActionData2.default)(actions.destroy, { key: key })();
	  }
	}), function (action) {
	  return function (form) {
	    for (var _len6 = arguments.length, args = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
	      args[_key6 - 1] = arguments[_key6];
	    }

	    return (0, _bindActionData2.default)(action, { form: form }).apply(undefined, args);
	  };
	}));

	var addArrayValue = boundActions.addArrayValue;
	var autofill = boundActions.autofill;
	var autofillWithKey = boundActions.autofillWithKey;
	var blur = boundActions.blur;
	var change = boundActions.change;
	var changeWithKey = boundActions.changeWithKey;
	var destroy = boundActions.destroy;
	var focus = boundActions.focus;
	var initialize = boundActions.initialize;
	var initializeWithKey = boundActions.initializeWithKey;
	var removeArrayValue = boundActions.removeArrayValue;
	var reset = boundActions.reset;
	var startAsyncValidation = boundActions.startAsyncValidation;
	var startSubmit = boundActions.startSubmit;
	var stopAsyncValidation = boundActions.stopAsyncValidation;
	var stopSubmit = boundActions.stopSubmit;
	var submitFailed = boundActions.submitFailed;
	var swapArrayValues = boundActions.swapArrayValues;
	var touch = boundActions.touch;
	var touchWithKey = boundActions.touchWithKey;
	var untouch = boundActions.untouch;
	var untouchWithKey = boundActions.untouchWithKey;

	function createAll(isReactNative, React, connect) {
	  return {
	    actionTypes: actionTypes,
	    addArrayValue: addArrayValue,
	    autofill: autofill,
	    autofillWithKey: autofillWithKey,
	    blur: blur,
	    change: change,
	    changeWithKey: changeWithKey,
	    destroy: destroy,
	    focus: focus,
	    getValues: _getValuesFromState2.default,
	    initialize: initialize,
	    initializeWithKey: initializeWithKey,
	    propTypes: (0, _createPropTypes2.default)(React),
	    reduxForm: (0, _createReduxForm2.default)(isReactNative, React, connect),
	    reducer: _reducer2.default,
	    removeArrayValue: removeArrayValue,
	    reset: reset,
	    startAsyncValidation: startAsyncValidation,
	    startSubmit: startSubmit,
	    stopAsyncValidation: stopAsyncValidation,
	    stopSubmit: stopSubmit,
	    submitFailed: submitFailed,
	    swapArrayValues: swapArrayValues,
	    touch: touch,
	    touchWithKey: touchWithKey,
	    untouch: untouch,
	    untouchWithKey: untouchWithKey
	  };
	}

/***/ },
/* 563 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _actions = __webpack_require__(238);

	var importedActions = _interopRequireWildcard(_actions);

	var _getDisplayName = __webpack_require__(244);

	var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

	var _reducer = __webpack_require__(249);

	var _deepEqual = __webpack_require__(164);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _bindActionData = __webpack_require__(239);

	var _bindActionData2 = _interopRequireDefault(_bindActionData);

	var _getValues = __webpack_require__(245);

	var _getValues2 = _interopRequireDefault(_getValues);

	var _isValid = __webpack_require__(96);

	var _isValid2 = _interopRequireDefault(_isValid);

	var _readFields = __webpack_require__(577);

	var _readFields2 = _interopRequireDefault(_readFields);

	var _handleSubmit2 = __webpack_require__(572);

	var _handleSubmit3 = _interopRequireDefault(_handleSubmit2);

	var _asyncValidation = __webpack_require__(561);

	var _asyncValidation2 = _interopRequireDefault(_asyncValidation);

	var _silenceEvents = __webpack_require__(571);

	var _silenceEvents2 = _interopRequireDefault(_silenceEvents);

	var _silenceEvent = __webpack_require__(243);

	var _silenceEvent2 = _interopRequireDefault(_silenceEvent);

	var _wrapMapDispatchToProps = __webpack_require__(583);

	var _wrapMapDispatchToProps2 = _interopRequireDefault(_wrapMapDispatchToProps);

	var _wrapMapStateToProps = __webpack_require__(584);

	var _wrapMapStateToProps2 = _interopRequireDefault(_wrapMapStateToProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Creates a HOC that knows how to create redux-connected sub-components.
	 */
	var createHigherOrderComponent = function createHigherOrderComponent(config, isReactNative, React, connect, WrappedComponent, mapStateToProps, mapDispatchToProps, mergeProps, options) {
	  var Component = React.Component;
	  var PropTypes = React.PropTypes;

	  return function (reduxMountPoint, formName, formKey, getFormState) {
	    var ReduxForm = function (_Component) {
	      _inherits(ReduxForm, _Component);

	      function ReduxForm(props) {
	        _classCallCheck(this, ReduxForm);

	        // bind functions

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	        _this.asyncValidate = _this.asyncValidate.bind(_this);
	        _this.handleSubmit = _this.handleSubmit.bind(_this);
	        _this.fields = (0, _readFields2.default)(props, {}, {}, _this.asyncValidate, isReactNative);
	        var submitPassback = _this.props.submitPassback;

	        submitPassback(function () {
	          return _this.handleSubmit();
	        }); // wrapped in function to disallow params
	        return _this;
	      }

	      ReduxForm.prototype.componentWillMount = function componentWillMount() {
	        var _props = this.props;
	        var fields = _props.fields;
	        var form = _props.form;
	        var initialize = _props.initialize;
	        var initialValues = _props.initialValues;

	        if (initialValues && !form._initialized) {
	          initialize(initialValues, fields);
	        }
	      };

	      ReduxForm.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!(0, _deepEqual2.default)(this.props.fields, nextProps.fields) || !(0, _deepEqual2.default)(this.props.form, nextProps.form, { strict: true })) {
	          this.fields = (0, _readFields2.default)(nextProps, this.props, this.fields, this.asyncValidate, isReactNative);
	        }
	        if (!(0, _deepEqual2.default)(this.props.initialValues, nextProps.initialValues)) {
	          this.props.initialize(nextProps.initialValues, nextProps.fields, this.props.overwriteOnInitialValuesChange || !this.props.form._initialized);
	        }
	      };

	      ReduxForm.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (config.destroyOnUnmount) {
	          this.props.destroy();
	        }
	      };

	      ReduxForm.prototype.asyncValidate = function asyncValidate(name, value) {
	        var _this2 = this;

	        var _props2 = this.props;
	        var alwaysAsyncValidate = _props2.alwaysAsyncValidate;
	        var asyncValidate = _props2.asyncValidate;
	        var dispatch = _props2.dispatch;
	        var fields = _props2.fields;
	        var form = _props2.form;
	        var startAsyncValidation = _props2.startAsyncValidation;
	        var stopAsyncValidation = _props2.stopAsyncValidation;
	        var validate = _props2.validate;

	        var isSubmitting = !name;
	        if (asyncValidate) {
	          var _ret = function () {
	            var values = (0, _getValues2.default)(fields, form);
	            if (name) {
	              values[name] = value;
	            }
	            var syncErrors = validate(values, _this2.props);
	            var allPristine = _this2.fields._meta.allPristine;

	            var initialized = form._initialized;

	            // if blur validating, only run async validate if sync validation passes
	            // and submitting (not blur validation) or form is dirty or form was never initialized
	            // unless alwaysAsyncValidate is true
	            var syncValidationPasses = isSubmitting || (0, _isValid2.default)(syncErrors[name]);
	            if (alwaysAsyncValidate || syncValidationPasses && (isSubmitting || !allPristine || !initialized)) {
	              return {
	                v: (0, _asyncValidation2.default)(function () {
	                  return asyncValidate(values, dispatch, _this2.props);
	                }, startAsyncValidation, stopAsyncValidation, name)
	              };
	            }
	          }();

	          if (typeof _ret === "object") return _ret.v;
	        }
	      };

	      ReduxForm.prototype.handleSubmit = function handleSubmit(submitOrEvent) {
	        var _this3 = this;

	        var _props3 = this.props;
	        var onSubmit = _props3.onSubmit;
	        var fields = _props3.fields;
	        var form = _props3.form;

	        var check = function check(submit) {
	          if (!submit || typeof submit !== 'function') {
	            throw new Error('You must either pass handleSubmit() an onSubmit function or pass onSubmit as a prop');
	          }
	          return submit;
	        };
	        return !submitOrEvent || (0, _silenceEvent2.default)(submitOrEvent) ?
	        // submitOrEvent is an event: fire submit
	        (0, _handleSubmit3.default)(check(onSubmit), (0, _getValues2.default)(fields, form), this.props, this.asyncValidate) :
	        // submitOrEvent is the submit function: return deferred submit thunk
	        (0, _silenceEvents2.default)(function () {
	          return (0, _handleSubmit3.default)(check(submitOrEvent), (0, _getValues2.default)(fields, form), _this3.props, _this3.asyncValidate);
	        });
	      };

	      ReduxForm.prototype.render = function render() {
	        var _this4 = this,
	            _ref;

	        var allFields = this.fields;
	        var _props4 = this.props;
	        var addArrayValue = _props4.addArrayValue;
	        var asyncBlurFields = _props4.asyncBlurFields;
	        var autofill = _props4.autofill;
	        var blur = _props4.blur;
	        var change = _props4.change;
	        var destroy = _props4.destroy;
	        var focus = _props4.focus;
	        var fields = _props4.fields;
	        var form = _props4.form;
	        var initialValues = _props4.initialValues;
	        var initialize = _props4.initialize;
	        var onSubmit = _props4.onSubmit;
	        var propNamespace = _props4.propNamespace;
	        var reset = _props4.reset;
	        var removeArrayValue = _props4.removeArrayValue;
	        var returnRejectedSubmitPromise = _props4.returnRejectedSubmitPromise;
	        var startAsyncValidation = _props4.startAsyncValidation;
	        var startSubmit = _props4.startSubmit;
	        var stopAsyncValidation = _props4.stopAsyncValidation;
	        var stopSubmit = _props4.stopSubmit;
	        var submitFailed = _props4.submitFailed;
	        var swapArrayValues = _props4.swapArrayValues;
	        var touch = _props4.touch;
	        var untouch = _props4.untouch;
	        var validate = _props4.validate;

	        var passableProps = _objectWithoutProperties(_props4, ['addArrayValue', 'asyncBlurFields', 'autofill', 'blur', 'change', 'destroy', 'focus', 'fields', 'form', 'initialValues', 'initialize', 'onSubmit', 'propNamespace', 'reset', 'removeArrayValue', 'returnRejectedSubmitPromise', 'startAsyncValidation', 'startSubmit', 'stopAsyncValidation', 'stopSubmit', 'submitFailed', 'swapArrayValues', 'touch', 'untouch', 'validate']); // eslint-disable-line no-redeclare


	        var _allFields$_meta = allFields._meta;
	        var allPristine = _allFields$_meta.allPristine;
	        var allValid = _allFields$_meta.allValid;
	        var errors = _allFields$_meta.errors;
	        var formError = _allFields$_meta.formError;
	        var values = _allFields$_meta.values;


	        var props = {
	          // State:
	          active: form._active,
	          asyncValidating: form._asyncValidating,
	          dirty: !allPristine,
	          error: formError,
	          errors: errors,
	          fields: allFields,
	          formKey: formKey,
	          invalid: !allValid,
	          pristine: allPristine,
	          submitting: form._submitting,
	          submitFailed: form._submitFailed,
	          valid: allValid,
	          values: values,

	          // Actions:
	          asyncValidate: (0, _silenceEvents2.default)(function () {
	            return _this4.asyncValidate();
	          }),
	          // ^ doesn't just pass this.asyncValidate to disallow values passing
	          destroyForm: (0, _silenceEvents2.default)(destroy),
	          handleSubmit: this.handleSubmit,
	          initializeForm: (0, _silenceEvents2.default)(function (initValues) {
	            return initialize(initValues, fields);
	          }),
	          resetForm: (0, _silenceEvents2.default)(reset),
	          touch: (0, _silenceEvents2.default)(function () {
	            return touch.apply(undefined, arguments);
	          }),
	          touchAll: (0, _silenceEvents2.default)(function () {
	            return touch.apply(undefined, fields);
	          }),
	          untouch: (0, _silenceEvents2.default)(function () {
	            return untouch.apply(undefined, arguments);
	          }),
	          untouchAll: (0, _silenceEvents2.default)(function () {
	            return untouch.apply(undefined, fields);
	          })
	        };
	        var passedProps = propNamespace ? (_ref = {}, _ref[propNamespace] = props, _ref) : props;
	        return React.createElement(WrappedComponent, _extends({}, passableProps, passedProps));
	      };

	      return ReduxForm;
	    }(Component);

	    ReduxForm.displayName = 'ReduxForm(' + (0, _getDisplayName2.default)(WrappedComponent) + ')';
	    ReduxForm.WrappedComponent = WrappedComponent;
	    ReduxForm.propTypes = {
	      // props:
	      alwaysAsyncValidate: PropTypes.bool,
	      asyncBlurFields: PropTypes.arrayOf(PropTypes.string),
	      asyncValidate: PropTypes.func,
	      dispatch: PropTypes.func.isRequired,
	      fields: PropTypes.arrayOf(PropTypes.string).isRequired,
	      form: PropTypes.object,
	      initialValues: PropTypes.any,
	      onSubmit: PropTypes.func,
	      onSubmitSuccess: PropTypes.func,
	      onSubmitFail: PropTypes.func,
	      overwriteOnInitialValuesChange: PropTypes.bool.isRequired,
	      propNamespace: PropTypes.string,
	      readonly: PropTypes.bool,
	      returnRejectedSubmitPromise: PropTypes.bool,
	      submitPassback: PropTypes.func.isRequired,
	      validate: PropTypes.func,

	      // actions:
	      addArrayValue: PropTypes.func.isRequired,
	      autofill: PropTypes.func.isRequired,
	      blur: PropTypes.func.isRequired,
	      change: PropTypes.func.isRequired,
	      destroy: PropTypes.func.isRequired,
	      focus: PropTypes.func.isRequired,
	      initialize: PropTypes.func.isRequired,
	      removeArrayValue: PropTypes.func.isRequired,
	      reset: PropTypes.func.isRequired,
	      startAsyncValidation: PropTypes.func.isRequired,
	      startSubmit: PropTypes.func.isRequired,
	      stopAsyncValidation: PropTypes.func.isRequired,
	      stopSubmit: PropTypes.func.isRequired,
	      submitFailed: PropTypes.func.isRequired,
	      swapArrayValues: PropTypes.func.isRequired,
	      touch: PropTypes.func.isRequired,
	      untouch: PropTypes.func.isRequired
	    };
	    ReduxForm.defaultProps = {
	      asyncBlurFields: [],
	      form: _reducer.initialState,
	      readonly: false,
	      returnRejectedSubmitPromise: false,
	      validate: function validate() {
	        return {};
	      }
	    };

	    // bind touch flags to blur and change
	    var unboundActions = _extends({}, importedActions, {
	      blur: (0, _bindActionData2.default)(importedActions.blur, {
	        touch: !!config.touchOnBlur
	      }),
	      change: (0, _bindActionData2.default)(importedActions.change, {
	        touch: !!config.touchOnChange
	      })
	    });

	    // make redux connector with or without form key
	    var decorate = formKey !== undefined && formKey !== null ? connect((0, _wrapMapStateToProps2.default)(mapStateToProps, function (state) {
	      var formState = getFormState(state, reduxMountPoint);
	      if (!formState) {
	        throw new Error('You need to mount the redux-form reducer at "' + reduxMountPoint + '"');
	      }
	      return formState && formState[formName] && formState[formName][formKey];
	    }), (0, _wrapMapDispatchToProps2.default)(mapDispatchToProps, (0, _bindActionData2.default)(unboundActions, {
	      form: formName,
	      key: formKey
	    })), mergeProps, options) : connect((0, _wrapMapStateToProps2.default)(mapStateToProps, function (state) {
	      var formState = getFormState(state, reduxMountPoint);
	      if (!formState) {
	        throw new Error('You need to mount the redux-form reducer at "' + reduxMountPoint + '"');
	      }
	      return formState && formState[formName];
	    }), (0, _wrapMapDispatchToProps2.default)(mapDispatchToProps, (0, _bindActionData2.default)(unboundActions, { form: formName })), mergeProps, options);

	    return decorate(ReduxForm);
	  };
	};

	exports.default = createHigherOrderComponent;

/***/ },
/* 564 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var createPropTypes = function createPropTypes(_ref) {
	  var _ref$PropTypes = _ref.PropTypes;
	  var any = _ref$PropTypes.any;
	  var bool = _ref$PropTypes.bool;
	  var string = _ref$PropTypes.string;
	  var func = _ref$PropTypes.func;
	  var object = _ref$PropTypes.object;
	  return {
	    // State:
	    active: string, // currently active field
	    asyncValidating: bool.isRequired, // true if async validation is running
	    autofilled: bool, // true if set programmatically by autofill
	    dirty: bool.isRequired, // true if any values are different from initialValues
	    error: any, // form-wide error from '_error' key in validation result
	    errors: object, // a map of errors corresponding to structure of form data (result of validation)
	    fields: object.isRequired, // the map of fields
	    formKey: any, // the form key if one was provided (used when doing multirecord forms)
	    invalid: bool.isRequired, // true if there are any validation errors
	    pristine: bool.isRequired, // true if the values are the same as initialValues
	    submitting: bool.isRequired, // true if the form is in the process of being submitted
	    submitFailed: bool.isRequired, // true if the form was submitted and failed for any reason
	    valid: bool.isRequired, // true if there are no validation errors
	    values: object.isRequired, // the values of the form as they will be submitted

	    // Actions:
	    asyncValidate: func.isRequired, // function to trigger async validation
	    destroyForm: func.isRequired, // action to destroy the form's data in Redux
	    handleSubmit: func.isRequired, // function to submit the form
	    initializeForm: func.isRequired, // action to initialize form data
	    resetForm: func.isRequired, // action to reset the form data to previously initialized values
	    touch: func.isRequired, // action to mark fields as touched
	    touchAll: func.isRequired, // action to mark ALL fields as touched
	    untouch: func.isRequired, // action to mark fields as untouched
	    untouchAll: func.isRequired // action to mark ALL fields as untouched
	  };
	};

	exports.default = createPropTypes;

/***/ },
/* 565 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createReduxFormConnector = __webpack_require__(566);

	var _createReduxFormConnector2 = _interopRequireDefault(_createReduxFormConnector);

	var _hoistNonReactStatics = __webpack_require__(166);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The decorator that is the main API to redux-form
	 */
	var createReduxForm = function createReduxForm(isReactNative, React, connect) {
	  var Component = React.Component;

	  var reduxFormConnector = (0, _createReduxFormConnector2.default)(isReactNative, React, connect);
	  return function (config, mapStateToProps, mapDispatchToProps, mergeProps, options) {
	    return function (WrappedComponent) {
	      var ReduxFormConnector = reduxFormConnector(WrappedComponent, mapStateToProps, mapDispatchToProps, mergeProps, options);
	      var configWithDefaults = _extends({
	        overwriteOnInitialValuesChange: true,
	        touchOnBlur: true,
	        touchOnChange: false,
	        destroyOnUnmount: true
	      }, config);

	      var ConnectedForm = function (_Component) {
	        _inherits(ConnectedForm, _Component);

	        function ConnectedForm(props) {
	          _classCallCheck(this, ConnectedForm);

	          var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	          _this.handleSubmitPassback = _this.handleSubmitPassback.bind(_this);
	          return _this;
	        }

	        ConnectedForm.prototype.handleSubmitPassback = function handleSubmitPassback(submit) {
	          this.submit = submit;
	        };

	        ConnectedForm.prototype.render = function render() {
	          return React.createElement(ReduxFormConnector, _extends({}, configWithDefaults, this.props, {
	            submitPassback: this.handleSubmitPassback }));
	        };

	        return ConnectedForm;
	      }(Component);

	      return (0, _hoistNonReactStatics2.default)(ConnectedForm, WrappedComponent);
	    };
	  };
	};

	exports.default = createReduxForm;

/***/ },
/* 566 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _noGetters = __webpack_require__(440);

	var _noGetters2 = _interopRequireDefault(_noGetters);

	var _getDisplayName = __webpack_require__(244);

	var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

	var _createHigherOrderComponent = __webpack_require__(563);

	var _createHigherOrderComponent2 = _interopRequireDefault(_createHigherOrderComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * This component tracks props that affect how the form is mounted to the store. Normally these should not change,
	 * but if they do, the connected components below it need to be redefined.
	 */
	var createReduxFormConnector = function createReduxFormConnector(isReactNative, React, connect) {
	  return function (WrappedComponent, mapStateToProps, mapDispatchToProps, mergeProps, options) {
	    var Component = React.Component;
	    var PropTypes = React.PropTypes;

	    var ReduxFormConnector = function (_Component) {
	      _inherits(ReduxFormConnector, _Component);

	      function ReduxFormConnector(props) {
	        _classCallCheck(this, ReduxFormConnector);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	        _this.cache = new _noGetters2.default(_this, {
	          ReduxForm: {
	            params: [
	            // props that effect how redux-form connects to the redux store
	            'reduxMountPoint', 'form', 'formKey', 'getFormState'],
	            fn: (0, _createHigherOrderComponent2.default)(props, isReactNative, React, connect, WrappedComponent, mapStateToProps, mapDispatchToProps, mergeProps, options)
	          }
	        });
	        return _this;
	      }

	      ReduxFormConnector.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.cache.componentWillReceiveProps(nextProps);
	      };

	      ReduxFormConnector.prototype.render = function render() {
	        var ReduxForm = this.cache.get('ReduxForm');
	        // remove some redux-form config-only props
	        var _props = this.props;
	        var reduxMountPoint = _props.reduxMountPoint;
	        var destroyOnUnmount = _props.destroyOnUnmount;
	        var form = _props.form;
	        var getFormState = _props.getFormState;
	        var touchOnBlur = _props.touchOnBlur;
	        var touchOnChange = _props.touchOnChange;

	        var passableProps = _objectWithoutProperties(_props, ['reduxMountPoint', 'destroyOnUnmount', 'form', 'getFormState', 'touchOnBlur', 'touchOnChange']); // eslint-disable-line no-redeclare


	        return React.createElement(ReduxForm, passableProps);
	      };

	      return ReduxFormConnector;
	    }(Component);

	    ReduxFormConnector.displayName = 'ReduxFormConnector(' + (0, _getDisplayName2.default)(WrappedComponent) + ')';
	    ReduxFormConnector.WrappedComponent = WrappedComponent;
	    ReduxFormConnector.propTypes = {
	      destroyOnUnmount: PropTypes.bool,
	      reduxMountPoint: PropTypes.string,
	      form: PropTypes.string.isRequired,
	      formKey: PropTypes.string,
	      getFormState: PropTypes.func,
	      touchOnBlur: PropTypes.bool,
	      touchOnChange: PropTypes.bool
	    };
	    ReduxFormConnector.defaultProps = {
	      reduxMountPoint: 'form',
	      getFormState: function getFormState(state, reduxMountPoint) {
	        return state[reduxMountPoint];
	      }
	    };
	    return ReduxFormConnector;
	  };
	};

	exports.default = createReduxFormConnector;

/***/ },
/* 567 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _getValue = __webpack_require__(241);

	var _getValue2 = _interopRequireDefault(_getValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createOnBlur = function createOnBlur(name, blur, isReactNative, afterBlur) {
	  return function (event) {
	    var value = (0, _getValue2.default)(event, isReactNative);
	    blur(name, value);
	    if (afterBlur) {
	      afterBlur(name, value);
	    }
	  };
	};
	exports.default = createOnBlur;

/***/ },
/* 568 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _getValue = __webpack_require__(241);

	var _getValue2 = _interopRequireDefault(_getValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createOnChange = function createOnChange(name, change, isReactNative) {
	  return function (event) {
	    return change(name, (0, _getValue2.default)(event, isReactNative));
	  };
	};
	exports.default = createOnChange;

/***/ },
/* 569 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createOnDragStart = __webpack_require__(240);

	var createOnDrop = function createOnDrop(name, change) {
	  return function (event) {
	    change(name, event.dataTransfer.getData(_createOnDragStart.dataKey));
	  };
	};
	exports.default = createOnDrop;

/***/ },
/* 570 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var createOnFocus = function createOnFocus(name, focus) {
	  return function () {
	    return focus(name);
	  };
	};
	exports.default = createOnFocus;

/***/ },
/* 571 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _silenceEvent = __webpack_require__(243);

	var _silenceEvent2 = _interopRequireDefault(_silenceEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var silenceEvents = function silenceEvents(fn) {
	  return function (event) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    return (0, _silenceEvent2.default)(event) ? fn.apply(undefined, args) : fn.apply(undefined, [event].concat(args));
	  };
	};

	exports.default = silenceEvents;

/***/ },
/* 572 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _isPromise = __webpack_require__(118);

	var _isPromise2 = _interopRequireDefault(_isPromise);

	var _isValid = __webpack_require__(96);

	var _isValid2 = _interopRequireDefault(_isValid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var handleSubmit = function handleSubmit(submit, values, props, asyncValidate) {
	  var dispatch = props.dispatch;
	  var fields = props.fields;
	  var onSubmitSuccess = props.onSubmitSuccess;
	  var onSubmitFail = props.onSubmitFail;
	  var startSubmit = props.startSubmit;
	  var stopSubmit = props.stopSubmit;
	  var submitFailed = props.submitFailed;
	  var returnRejectedSubmitPromise = props.returnRejectedSubmitPromise;
	  var touch = props.touch;
	  var validate = props.validate;

	  var syncErrors = validate(values, props);
	  touch.apply(undefined, fields); // touch all fields
	  if ((0, _isValid2.default)(syncErrors)) {
	    var doSubmit = function doSubmit() {
	      var result = submit(values, dispatch);
	      if ((0, _isPromise2.default)(result)) {
	        startSubmit();
	        return result.then(function (submitResult) {
	          stopSubmit();
	          if (onSubmitSuccess) {
	            onSubmitSuccess(submitResult);
	          }
	          return submitResult;
	        }, function (submitError) {
	          stopSubmit(submitError);
	          if (onSubmitFail) {
	            onSubmitFail(submitError);
	          }
	          if (returnRejectedSubmitPromise) {
	            return Promise.reject(submitError);
	          }
	        });
	      }
	      if (onSubmitSuccess) {
	        onSubmitSuccess(result);
	      }
	      return result;
	    };
	    var asyncValidateResult = asyncValidate();
	    return (0, _isPromise2.default)(asyncValidateResult) ?
	    // asyncValidateResult will be rejected if async validation failed
	    asyncValidateResult.then(doSubmit, function () {
	      submitFailed();
	      if (onSubmitFail) {
	        onSubmitFail();
	      }
	      return returnRejectedSubmitPromise ? Promise.reject() : Promise.resolve();
	    }) : doSubmit(); // no async validation, so submit
	  }
	  submitFailed();

	  if (onSubmitFail) {
	    onSubmitFail(syncErrors);
	  }

	  if (returnRejectedSubmitPromise) {
	    return Promise.reject(syncErrors);
	  }
	};

	exports.default = handleSubmit;

/***/ },
/* 573 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _fieldValue = __webpack_require__(67);

	var makeEntry = function makeEntry(value, previousValue, overwriteValues) {
	  return (0, _fieldValue.makeFieldValue)(value === undefined ? {} : {
	    initial: value,
	    value: overwriteValues ? value : previousValue
	  });
	};

	/**
	 * Sets the initial values into the state and returns a new copy of the state
	 */
	var initializeState = function initializeState(values, fields) {
	  var state = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	  var overwriteValues = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];

	  if (!fields) {
	    throw new Error('fields must be passed when initializing state');
	  }
	  if (!values || !fields.length) {
	    return state;
	  }
	  var initializeField = function initializeField(path, src, dest) {
	    var dotIndex = path.indexOf('.');
	    if (dotIndex === 0) {
	      return initializeField(path.substring(1), src, dest);
	    }
	    var openIndex = path.indexOf('[');
	    var closeIndex = path.indexOf(']');
	    var result = _extends({}, dest) || {};
	    if (dotIndex >= 0 && (openIndex < 0 || dotIndex < openIndex)) {
	      // is dot notation
	      var key = path.substring(0, dotIndex);
	      result[key] = src[key] && initializeField(path.substring(dotIndex + 1), src[key], result[key] || {});
	    } else if (openIndex >= 0 && (dotIndex < 0 || openIndex < dotIndex)) {
	      (function () {
	        // is array notation
	        if (closeIndex < 0) {
	          throw new Error('found \'[\' but no \']\': \'' + path + '\'');
	        }
	        var key = path.substring(0, openIndex);
	        var srcArray = src[key];
	        var destArray = result[key];
	        var rest = path.substring(closeIndex + 1);
	        if (Array.isArray(srcArray)) {
	          if (rest.length) {
	            // need to keep recursing
	            result[key] = srcArray.map(function (srcValue, srcIndex) {
	              return initializeField(rest, srcValue, destArray && destArray[srcIndex]);
	            });
	          } else {
	            result[key] = srcArray.map(function (srcValue, srcIndex) {
	              return makeEntry(srcValue, destArray && destArray[srcIndex] && destArray[srcIndex].value, overwriteValues);
	            });
	          }
	        } else {
	          result[key] = [];
	        }
	      })();
	    } else {
	      result[path] = makeEntry(src && src[path], dest && dest[path] && dest[path].value, overwriteValues);
	    }
	    return result;
	  };
	  return fields.reduce(function (accumulator, field) {
	    return initializeField(field, values, accumulator);
	  }, _extends({}, state));
	};

	exports.default = initializeState;

/***/ },
/* 574 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = isPristine;
	function isPristine(initial, data) {
	  if (initial === data) {
	    return true;
	  }
	  if (typeof initial === 'boolean' || typeof data === 'boolean') {
	    return initial === data;
	  } else if (initial instanceof Date && data instanceof Date) {
	    return initial.getTime() === data.getTime();
	  } else if (initial && typeof initial === 'object') {
	    if (!data || typeof data !== 'object') {
	      return false;
	    }
	    var initialKeys = Object.keys(initial);
	    var dataKeys = Object.keys(data);
	    if (initialKeys.length !== dataKeys.length) {
	      return false;
	    }
	    for (var index = 0; index < dataKeys.length; index++) {
	      var key = dataKeys[index];
	      if (!isPristine(initial[key], data[key])) {
	        return false;
	      }
	    }
	  } else if (initial || data) {
	    // allow '' to equate to undefined or null
	    return initial === data;
	  }
	  return true;
	}

/***/ },
/* 575 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = normalizeFields;

	var _fieldValue = __webpack_require__(67);

	function extractKey(field) {
	  var dotIndex = field.indexOf('.');
	  var openIndex = field.indexOf('[');
	  var closeIndex = field.indexOf(']');

	  if (openIndex > 0 && closeIndex !== openIndex + 1) {
	    throw new Error('found [ not followed by ]');
	  }

	  var isArray = openIndex > 0 && (dotIndex < 0 || openIndex < dotIndex);
	  var key = void 0;
	  var nestedPath = void 0;

	  if (isArray) {
	    key = field.substring(0, openIndex);
	    nestedPath = field.substring(closeIndex + 1);

	    if (nestedPath[0] === '.') {
	      nestedPath = nestedPath.substring(1);
	    }
	  } else if (dotIndex > 0) {
	    key = field.substring(0, dotIndex);
	    nestedPath = field.substring(dotIndex + 1);
	  } else {
	    key = field;
	  }

	  return { isArray: isArray, key: key, nestedPath: nestedPath };
	}

	function normalizeField(field, fullFieldPath, state, previousState, values, previousValues, normalizers) {
	  if (field.isArray) {
	    if (field.nestedPath) {
	      var _ret = function () {
	        var array = state && state[field.key] || [];
	        var previousArray = previousState && previousState[field.key] || [];
	        var nestedField = extractKey(field.nestedPath);

	        return {
	          v: array.map(function (nestedState, i) {
	            nestedState[nestedField.key] = normalizeField(nestedField, fullFieldPath, nestedState, previousArray[i], values, previousValues, normalizers);

	            return nestedState;
	          })
	        };
	      }();

	      if (typeof _ret === "object") return _ret.v;
	    }

	    var _normalizer = normalizers[fullFieldPath];

	    var result = _normalizer(state && state[field.key], previousState && previousState[field.key], values, previousValues);
	    return field.isArray ? result && result.map(_fieldValue.makeFieldValue) : result;
	  } else if (field.nestedPath) {
	    var nestedState = state && state[field.key] || {};
	    var _nestedField = extractKey(field.nestedPath);

	    nestedState[_nestedField.key] = normalizeField(_nestedField, fullFieldPath, nestedState, previousState && previousState[field.key], values, previousValues, normalizers);

	    return nestedState;
	  }

	  var finalField = state && state[field.key] || {};
	  var normalizer = normalizers[fullFieldPath];

	  finalField.value = normalizer(finalField.value, previousState && previousState[field.key] && previousState[field.key].value, values, previousValues);

	  return (0, _fieldValue.makeFieldValue)(finalField);
	}

	function normalizeFields(normalizers, state, previousState, values, previousValues) {
	  var newState = Object.keys(normalizers).reduce(function (accumulator, field) {
	    var extracted = extractKey(field);

	    accumulator[extracted.key] = normalizeField(extracted, field, state, previousState, values, previousValues, normalizers);

	    return accumulator;
	  }, {});

	  return _extends({}, state, newState);
	}

/***/ },
/* 576 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createOnBlur = __webpack_require__(567);

	var _createOnBlur2 = _interopRequireDefault(_createOnBlur);

	var _createOnChange = __webpack_require__(568);

	var _createOnChange2 = _interopRequireDefault(_createOnChange);

	var _createOnDragStart = __webpack_require__(240);

	var _createOnDragStart2 = _interopRequireDefault(_createOnDragStart);

	var _createOnDrop = __webpack_require__(569);

	var _createOnDrop2 = _interopRequireDefault(_createOnDrop);

	var _createOnFocus = __webpack_require__(570);

	var _createOnFocus2 = _interopRequireDefault(_createOnFocus);

	var _silencePromise = __webpack_require__(581);

	var _silencePromise2 = _interopRequireDefault(_silencePromise);

	var _read = __webpack_require__(248);

	var _read2 = _interopRequireDefault(_read);

	var _updateField = __webpack_require__(582);

	var _updateField2 = _interopRequireDefault(_updateField);

	var _isChecked = __webpack_require__(247);

	var _isChecked2 = _interopRequireDefault(_isChecked);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getSuffix(input, closeIndex) {
	  var suffix = input.substring(closeIndex + 1);
	  if (suffix[0] === '.') {
	    suffix = suffix.substring(1);
	  }
	  return suffix;
	}

	var getNextKey = function getNextKey(path) {
	  var dotIndex = path.indexOf('.');
	  var openIndex = path.indexOf('[');
	  if (openIndex > 0 && (dotIndex < 0 || openIndex < dotIndex)) {
	    return path.substring(0, openIndex);
	  }
	  return dotIndex > 0 ? path.substring(0, dotIndex) : path;
	};

	var shouldAsyncValidate = function shouldAsyncValidate(name, asyncBlurFields) {
	  return(
	    // remove array indices
	    ~asyncBlurFields.indexOf(name.replace(/\[[0-9]+\]/g, '[]'))
	  );
	};

	var readField = function readField(state, fieldName) {
	  var pathToHere = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];
	  var fields = arguments[3];
	  var syncErrors = arguments[4];
	  var asyncValidate = arguments[5];
	  var isReactNative = arguments[6];
	  var props = arguments[7];
	  var callback = arguments.length <= 8 || arguments[8] === undefined ? function () {
	    return null;
	  } : arguments[8];
	  var prefix = arguments.length <= 9 || arguments[9] === undefined ? '' : arguments[9];
	  var asyncBlurFields = props.asyncBlurFields;
	  var autofill = props.autofill;
	  var blur = props.blur;
	  var change = props.change;
	  var focus = props.focus;
	  var form = props.form;
	  var initialValues = props.initialValues;
	  var readonly = props.readonly;
	  var addArrayValue = props.addArrayValue;
	  var removeArrayValue = props.removeArrayValue;
	  var swapArrayValues = props.swapArrayValues;

	  var dotIndex = fieldName.indexOf('.');
	  var openIndex = fieldName.indexOf('[');
	  var closeIndex = fieldName.indexOf(']');
	  if (openIndex > 0 && closeIndex !== openIndex + 1) {
	    throw new Error('found [ not followed by ]');
	  }

	  if (openIndex > 0 && (dotIndex < 0 || openIndex < dotIndex)) {
	    var _ret = function () {
	      // array field
	      var key = fieldName.substring(0, openIndex);
	      var rest = getSuffix(fieldName, closeIndex);
	      var stateArray = state && state[key] || [];
	      var fullPrefix = prefix + fieldName.substring(0, closeIndex + 1);
	      var subfields = props.fields.reduce(function (accumulator, field) {
	        if (field.indexOf(fullPrefix) === 0) {
	          accumulator.push(field);
	        }
	        return accumulator;
	      }, []).map(function (field) {
	        return getSuffix(field, prefix.length + closeIndex);
	      });
	      var addMethods = function addMethods(dest) {
	        Object.defineProperty(dest, 'addField', {
	          value: function value(_value, index) {
	            return addArrayValue(pathToHere + key, _value, index, subfields);
	          }
	        });
	        Object.defineProperty(dest, 'removeField', {
	          value: function value(index) {
	            return removeArrayValue(pathToHere + key, index);
	          }
	        });
	        Object.defineProperty(dest, 'swapFields', {
	          value: function value(indexA, indexB) {
	            return swapArrayValues(pathToHere + key, indexA, indexB);
	          }
	        });
	        return dest;
	      };
	      if (!fields[key] || fields[key].length !== stateArray.length) {
	        fields[key] = fields[key] ? [].concat(fields[key]) : [];
	        addMethods(fields[key]);
	      }
	      var fieldArray = fields[key];
	      var changed = false;
	      stateArray.forEach(function (fieldState, index) {
	        if (rest && !fieldArray[index]) {
	          fieldArray[index] = {};
	          changed = true;
	        }
	        var dest = rest ? fieldArray[index] : {};
	        var nextPath = '' + pathToHere + key + '[' + index + ']' + (rest ? '.' : '');
	        var nextPrefix = '' + prefix + key + '[]' + (rest ? '.' : '');

	        var result = readField(fieldState, rest, nextPath, dest, syncErrors, asyncValidate, isReactNative, props, callback, nextPrefix);
	        if (!rest && fieldArray[index] !== result) {
	          // if nothing after [] in field name, assign directly to array
	          fieldArray[index] = result;
	          changed = true;
	        }
	      });
	      if (fieldArray.length > stateArray.length) {
	        // remove extra items that aren't in state array
	        fieldArray.splice(stateArray.length, fieldArray.length - stateArray.length);
	      }
	      return {
	        v: changed ? addMethods([].concat(fieldArray)) : fieldArray
	      };
	    }();

	    if (typeof _ret === "object") return _ret.v;
	  }
	  if (dotIndex > 0) {
	    // subobject field
	    var _key = fieldName.substring(0, dotIndex);
	    var _rest = fieldName.substring(dotIndex + 1);
	    var subobject = fields[_key] || {};
	    var nextPath = pathToHere + _key + '.';
	    var nextKey = getNextKey(_rest);
	    var nextPrefix = prefix + _key + '.';
	    var previous = subobject[nextKey];
	    var result = readField(state[_key] || {}, _rest, nextPath, subobject, syncErrors, asyncValidate, isReactNative, props, callback, nextPrefix);
	    if (result !== previous) {
	      var _extends2;

	      subobject = _extends({}, subobject, (_extends2 = {}, _extends2[nextKey] = result, _extends2));
	    }
	    fields[_key] = subobject;
	    return subobject;
	  }
	  var name = pathToHere + fieldName;
	  var field = fields[fieldName] || {};
	  if (field.name !== name) {
	    var onChange = (0, _createOnChange2.default)(name, change, isReactNative);
	    var initialFormValue = (0, _read2.default)(name + '.initial', form);
	    var initialValue = initialFormValue || (0, _read2.default)(name, initialValues);
	    initialValue = initialValue === undefined ? '' : initialValue;
	    field.name = name;
	    field.checked = (0, _isChecked2.default)(initialValue);
	    field.value = initialValue;
	    field.initialValue = initialValue;
	    if (!readonly) {
	      field.autofill = function (value) {
	        return autofill(name, value);
	      };
	      field.onBlur = (0, _createOnBlur2.default)(name, blur, isReactNative, shouldAsyncValidate(name, asyncBlurFields) && function (blurName, blurValue) {
	        return (0, _silencePromise2.default)(asyncValidate(blurName, blurValue));
	      });
	      field.onChange = onChange;
	      field.onDragStart = (0, _createOnDragStart2.default)(name, function () {
	        return field.value;
	      });
	      field.onDrop = (0, _createOnDrop2.default)(name, change);
	      field.onFocus = (0, _createOnFocus2.default)(name, focus);
	      field.onUpdate = onChange; // alias to support belle. https://github.com/nikgraf/belle/issues/58
	    }
	    field.valid = true;
	    field.invalid = false;
	    Object.defineProperty(field, '_isField', { value: true });
	  }

	  var defaultFieldState = {
	    initial: field.value,
	    value: field.value
	  };

	  var fieldState = (fieldName ? state[fieldName] : state) || defaultFieldState;
	  var syncError = (0, _read2.default)(name, syncErrors);
	  var updated = (0, _updateField2.default)(field, fieldState, name === form._active, syncError);
	  if (fieldName || fields[fieldName] !== updated) {
	    fields[fieldName] = updated;
	  }
	  callback(updated);
	  return updated;
	};

	exports.default = readField;

/***/ },
/* 577 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _readField = __webpack_require__(576);

	var _readField2 = _interopRequireDefault(_readField);

	var _write = __webpack_require__(250);

	var _write2 = _interopRequireDefault(_write);

	var _getValues = __webpack_require__(245);

	var _getValues2 = _interopRequireDefault(_getValues);

	var _removeField = __webpack_require__(578);

	var _removeField2 = _interopRequireDefault(_removeField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Reads props and generates (or updates) field structure
	 */
	var readFields = function readFields(props, previousProps, myFields, asyncValidate, isReactNative) {
	  var fields = props.fields;
	  var form = props.form;
	  var validate = props.validate;

	  var previousFields = previousProps.fields;
	  var values = (0, _getValues2.default)(fields, form);
	  var syncErrors = validate(values, props) || {};
	  var errors = {};
	  var formError = syncErrors._error || form._error;
	  var allValid = !formError;
	  var allPristine = true;
	  var tally = function tally(field) {
	    if (field.error) {
	      errors = (0, _write2.default)(field.name, field.error, errors);
	      allValid = false;
	    }
	    if (field.dirty) {
	      allPristine = false;
	    }
	  };
	  var fieldObjects = previousFields ? previousFields.reduce(function (accumulator, previousField) {
	    return ~fields.indexOf(previousField) ? accumulator : (0, _removeField2.default)(accumulator, previousField);
	  }, _extends({}, myFields)) : _extends({}, myFields);
	  fields.forEach(function (name) {
	    (0, _readField2.default)(form, name, undefined, fieldObjects, syncErrors, asyncValidate, isReactNative, props, tally);
	  });
	  Object.defineProperty(fieldObjects, '_meta', {
	    value: {
	      allPristine: allPristine,
	      allValid: allValid,
	      values: values,
	      errors: errors,
	      formError: formError
	    }
	  });
	  return fieldObjects;
	};
	exports.default = readFields;

/***/ },
/* 578 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var without = function without(object, key) {
	  var copy = _extends({}, object);
	  delete copy[key];
	  return copy;
	};

	var removeField = function removeField(fields, path) {
	  var dotIndex = path.indexOf('.');
	  var openIndex = path.indexOf('[');
	  var closeIndex = path.indexOf(']');
	  if (openIndex > 0 && closeIndex !== openIndex + 1) {
	    throw new Error('found [ not followed by ]');
	  }
	  if (openIndex > 0 && (dotIndex < 0 || openIndex < dotIndex)) {
	    var _ret = function () {
	      // array field
	      var key = path.substring(0, openIndex);
	      if (!Array.isArray(fields[key])) {
	        return {
	          v: without(fields, key)
	        };
	      }
	      var rest = path.substring(closeIndex + 1);
	      if (rest[0] === '.') {
	        rest = rest.substring(1);
	      }
	      if (rest) {
	        var _ret2 = function () {
	          var _extends2;

	          var copy = [];
	          fields[key].forEach(function (item, index) {
	            var result = removeField(item, rest);
	            if (Object.keys(result).length) {
	              copy[index] = result;
	            }
	          });
	          return {
	            v: {
	              v: copy.length ? _extends({}, fields, (_extends2 = {}, _extends2[key] = copy, _extends2)) : without(fields, key)
	            }
	          };
	        }();

	        if (typeof _ret2 === "object") return _ret2.v;
	      }
	      return {
	        v: without(fields, key)
	      };
	    }();

	    if (typeof _ret === "object") return _ret.v;
	  }
	  if (dotIndex > 0) {
	    var _extends3;

	    // subobject field
	    var _key = path.substring(0, dotIndex);
	    var _rest = path.substring(dotIndex + 1);
	    if (!fields[_key]) {
	      return fields;
	    }
	    var result = removeField(fields[_key], _rest);
	    return Object.keys(result).length ? _extends({}, fields, (_extends3 = {}, _extends3[_key] = removeField(fields[_key], _rest), _extends3)) : without(fields, _key);
	  }
	  return without(fields, path);
	};

	exports.default = removeField;

/***/ },
/* 579 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _fieldValue = __webpack_require__(67);

	var reset = function reset(value) {
	  return (0, _fieldValue.makeFieldValue)(value === undefined || value && value.initial === undefined ? {} : { initial: value.initial, value: value.initial });
	};

	/**
	 * Sets the initial values into the state and returns a new copy of the state
	 */
	var resetState = function resetState(values) {
	  return values ? Object.keys(values).reduce(function (accumulator, key) {
	    var value = values[key];
	    if (Array.isArray(value)) {
	      accumulator[key] = value.map(function (item) {
	        return (0, _fieldValue.isFieldValue)(item) ? reset(item) : resetState(item);
	      });
	    } else if (value) {
	      if ((0, _fieldValue.isFieldValue)(value)) {
	        accumulator[key] = reset(value);
	      } else if (typeof value === 'object' && value !== null) {
	        accumulator[key] = resetState(value);
	      } else {
	        accumulator[key] = value;
	      }
	    }
	    return accumulator;
	  }, {}) : values;
	};

	exports.default = resetState;

/***/ },
/* 580 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _fieldValue = __webpack_require__(67);

	var isMetaKey = function isMetaKey(key) {
	  return key[0] === '_';
	};

	/**
	 * Sets an error on a field deep in the tree, returning a new copy of the state
	 */
	var setErrors = function setErrors(state, errors, destKey) {
	  var clear = function clear() {
	    if (Array.isArray(state)) {
	      return state.map(function (stateItem, index) {
	        return setErrors(stateItem, errors && errors[index], destKey);
	      });
	    }
	    if (state && typeof state === 'object') {
	      var result = Object.keys(state).reduce(function (accumulator, key) {
	        var _extends2;

	        return isMetaKey(key) ? accumulator : _extends({}, accumulator, (_extends2 = {}, _extends2[key] = setErrors(state[key], errors && errors[key], destKey), _extends2));
	      }, state);
	      if ((0, _fieldValue.isFieldValue)(state)) {
	        (0, _fieldValue.makeFieldValue)(result);
	      }
	      return result;
	    }
	    return (0, _fieldValue.makeFieldValue)(state);
	  };
	  if (typeof File !== 'undefined' && state instanceof File) {
	    return state;
	  }
	  if (!errors) {
	    if (!state) {
	      return state;
	    }
	    if (state[destKey]) {
	      var copy = _extends({}, state);
	      delete copy[destKey];
	      return (0, _fieldValue.makeFieldValue)(copy);
	    }
	    return clear();
	  }
	  if (typeof errors === 'string') {
	    var _extends3;

	    return (0, _fieldValue.makeFieldValue)(_extends({}, state, (_extends3 = {}, _extends3[destKey] = errors, _extends3)));
	  }
	  if (Array.isArray(errors)) {
	    if (!state || Array.isArray(state)) {
	      var _ret = function () {
	        var copy = (state || []).map(function (stateItem, index) {
	          return setErrors(stateItem, errors[index], destKey);
	        });
	        errors.forEach(function (errorItem, index) {
	          return copy[index] = setErrors(copy[index], errorItem, destKey);
	        });
	        return {
	          v: copy
	        };
	      }();

	      if (typeof _ret === "object") return _ret.v;
	    }
	    return setErrors(state, errors[0], destKey); // use first error
	  }
	  if ((0, _fieldValue.isFieldValue)(state)) {
	    var _extends4;

	    return (0, _fieldValue.makeFieldValue)(_extends({}, state, (_extends4 = {}, _extends4[destKey] = errors, _extends4)));
	  }
	  var errorKeys = Object.keys(errors);
	  if (!errorKeys.length && !state) {
	    return state;
	  }
	  return errorKeys.reduce(function (accumulator, key) {
	    var _extends5;

	    return isMetaKey(key) ? accumulator : _extends({}, accumulator, (_extends5 = {}, _extends5[key] = setErrors(state && state[key], errors[key], destKey), _extends5));
	  }, clear() || {});
	};

	exports.default = setErrors;

/***/ },
/* 581 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _isPromise = __webpack_require__(118);

	var _isPromise2 = _interopRequireDefault(_isPromise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var noop = function noop() {
	  return undefined;
	};

	var silencePromise = function silencePromise(promise) {
	  return (0, _isPromise2.default)(promise) ? promise.then(noop, noop) : promise;
	};

	exports.default = silencePromise;

/***/ },
/* 582 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _isPristine = __webpack_require__(574);

	var _isPristine2 = _interopRequireDefault(_isPristine);

	var _isValid = __webpack_require__(96);

	var _isValid2 = _interopRequireDefault(_isValid);

	var _isChecked = __webpack_require__(247);

	var _isChecked2 = _interopRequireDefault(_isChecked);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Updates a field object from the store values
	 */
	var updateField = function updateField(field, formField, active, syncError) {
	  var diff = {};
	  var formFieldValue = formField.value === undefined ? '' : formField.value;

	  // update field value
	  if (field.value !== formFieldValue) {
	    diff.value = formFieldValue;
	    diff.checked = (0, _isChecked2.default)(formFieldValue);
	  }

	  // update dirty/pristine
	  var pristine = (0, _isPristine2.default)(formFieldValue, formField.initial);
	  if (field.pristine !== pristine) {
	    diff.dirty = !pristine;
	    diff.pristine = pristine;
	  }

	  // update field error
	  var error = syncError || formField.submitError || formField.asyncError;
	  if (error !== field.error) {
	    diff.error = error;
	  }
	  var valid = (0, _isValid2.default)(error);
	  if (field.valid !== valid) {
	    diff.invalid = !valid;
	    diff.valid = valid;
	  }

	  if (active !== field.active) {
	    diff.active = active;
	  }
	  var touched = !!formField.touched;
	  if (touched !== field.touched) {
	    diff.touched = touched;
	  }
	  var visited = !!formField.visited;
	  if (visited !== field.visited) {
	    diff.visited = visited;
	  }
	  var autofilled = !!formField.autofilled;
	  if (autofilled !== field.autofilled) {
	    diff.autofilled = autofilled;
	  }

	  if ('initial' in formField && formField.initial !== field.initialValue) {
	    field.initialValue = formField.initial;
	  }

	  return Object.keys(diff).length ? _extends({}, field, diff) : field;
	};
	exports.default = updateField;

/***/ },
/* 583 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _redux = __webpack_require__(69);

	var wrapMapDispatchToProps = function wrapMapDispatchToProps(mapDispatchToProps, actionCreators) {
	  if (mapDispatchToProps) {
	    if (typeof mapDispatchToProps === 'function') {
	      if (mapDispatchToProps.length > 1) {
	        return function (dispatch, ownProps) {
	          return _extends({
	            dispatch: dispatch
	          }, mapDispatchToProps(dispatch, ownProps), (0, _redux.bindActionCreators)(actionCreators, dispatch));
	        };
	      }
	      return function (dispatch) {
	        return _extends({
	          dispatch: dispatch
	        }, mapDispatchToProps(dispatch), (0, _redux.bindActionCreators)(actionCreators, dispatch));
	      };
	    }
	    return function (dispatch) {
	      return _extends({
	        dispatch: dispatch
	      }, (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch), (0, _redux.bindActionCreators)(actionCreators, dispatch));
	    };
	  }
	  return function (dispatch) {
	    return _extends({
	      dispatch: dispatch
	    }, (0, _redux.bindActionCreators)(actionCreators, dispatch));
	  };
	};

	exports.default = wrapMapDispatchToProps;

/***/ },
/* 584 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var wrapMapStateToProps = function wrapMapStateToProps(mapStateToProps, getForm) {
	  if (mapStateToProps) {
	    if (typeof mapStateToProps !== 'function') {
	      throw new Error('mapStateToProps must be a function');
	    }
	    if (mapStateToProps.length > 1) {
	      return function (state, ownProps) {
	        return _extends({}, mapStateToProps(state, ownProps), {
	          form: getForm(state)
	        });
	      };
	    }
	    return function (state) {
	      return _extends({}, mapStateToProps(state), {
	        form: getForm(state)
	      });
	    };
	  }
	  return function (state) {
	    return {
	      form: getForm(state)
	    };
	  };
	};

	exports.default = wrapMapStateToProps;

/***/ },
/* 585 */
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

/***/ }
]);