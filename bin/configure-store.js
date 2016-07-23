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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(118);


/***/ },

/***/ 5:
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },

/***/ 7:
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

/***/ 11:
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

/***/ 13:
/***/ function(module, exports) {

	module.exports = require("normalizr");

/***/ },

/***/ 14:
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

/***/ 20:
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

/***/ 23:
/***/ function(module, exports) {

	module.exports = require("humps");

/***/ },

/***/ 24:
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },

/***/ 31:
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },

/***/ 111:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _callApi = __webpack_require__(11);
	
	var _callApi2 = _interopRequireDefault(_callApi);
	
	var _apiRoots = __webpack_require__(7);
	
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

/***/ 112:
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

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _redux = __webpack_require__(31);
	
	var _reactRouterRedux = __webpack_require__(164);
	
	var _notifications = __webpack_require__(114);
	
	var _notifications2 = _interopRequireDefault(_notifications);
	
	var _paginate = __webpack_require__(115);
	
	var _paginate2 = _interopRequireDefault(_paginate);
	
	var _lodash = __webpack_require__(5);
	
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

/***/ 114:
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

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = paginate;
	
	var _lodash = __webpack_require__(5);
	
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

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configureStore;
	
	var _redux = __webpack_require__(31);
	
	var _reduxThunk = __webpack_require__(166);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reducers = __webpack_require__(113);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _api = __webpack_require__(111);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _modifyResponse = __webpack_require__(112);
	
	var _modifyResponse2 = _interopRequireDefault(_modifyResponse);
	
	var _handleInitialState = __webpack_require__(121);
	
	var _handleInitialState2 = _interopRequireDefault(_handleInitialState);
	
	var _reduxLogger = __webpack_require__(165);
	
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

/***/ 121:
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

/***/ 164:
/***/ function(module, exports) {

	module.exports = require("react-router-redux");

/***/ },

/***/ 165:
/***/ function(module, exports) {

	module.exports = require("redux-logger");

/***/ },

/***/ 166:
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDlmODhmNGIzMmQxNmU1MWNkYjM/NGYwYSoiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCI/MGM4YioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9hcGktY29uZmlnL2FwaS1yb290cy50cz81M2MwKiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL2NhbGwtYXBpLnRzPzQxNTYqIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vcm1hbGl6clwiP2E0NjkqIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvaGFuZGxlLXJlc3BvbnNlLWpzb24udHM/YTY4MSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC91dGlscy9wYXJzZS1mb3JtLWRhdGEudHM/YmQzZSoiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHVtcHNcIj82ZmNmKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCI/OWY2NyoiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIj81YzllIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbWlkZGxld2FyZS9hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9taWRkbGV3YXJlL21vZGlmeS1yZXNwb25zZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JlZHVjZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcmVkdWNlcnMvbm90aWZpY2F0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JlZHVjZXJzL3BhZ2luYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvc3RvcmUvY29uZmlndXJlLXN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvaGFuZGxlLWluaXRpYWwtc3RhdGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBLG9DOzs7Ozs7Ozs7Ozs7QUNBQSxLQUFNLE9BQU8sT0FBTyxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDLE9BQU8sUUFBUCxDQUFnQixNQUFoQixHQUF5Qix1QkFBekQ7QUFDYixLQUFNLFdBQVc7QUFDYixZQUFVLGNBQVY7QUFDQSxtQkFBYyxpQ0FBZDtFQUZFO21CQUlTLFM7Ozs7Ozs7Ozs7OztTQ0dDOztBQVJoQjs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQSxLQUFNLGdCQUFnQjtBQUNsQixlQUFVLE1BQVY7QUFDQSxhQUFRLEtBQVI7QUFDQSxrQkFBYSxhQUFiO0VBSEU7QUFLQyxVQUFTLE9BQVQsQ0FBaUIsT0FBakIsRUFBdUM7U0FBYiwrREFBUyxrQkFBSTs7O0FBRTFDLFNBQU0sY0FBYyxTQUFkLFdBQWMsQ0FBQyxjQUFELEVBQW9COzhCQUNVLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsYUFBbEIsRUFBaUMsY0FBakMsRUFEVjs7YUFDOUIsK0JBRDhCO2FBQ3RCLDJCQURzQjthQUNoQix5Q0FEZ0I7YUFDSCxtQ0FERzs7QUFFcEMsYUFBSSxjQUFjLEVBQWQsQ0FGZ0M7QUFHcEMsYUFBSSxNQUFKLEVBQVk7QUFDUix5QkFBWSxNQUFaLEdBQXFCLE1BQXJCLENBRFE7VUFBWjtBQUdBLGFBQUksV0FBSixFQUFpQjtBQUNiLHlCQUFZLFdBQVosR0FBMEIsV0FBMUIsQ0FEYTtVQUFqQjs7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Ozs7OztBQ0FBLHlDIiwiZmlsZSI6ImNvbmZpZ3VyZS1zdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMDlmODhmNGIzMmQxNmU1MWNkYjNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImxvZGFzaFwiXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMlxuICoqLyIsImNvbnN0IEhPU1QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJztcbmNvbnN0IEFwaVJvb3RzID0ge1xuICAgIExPQ0FMOiBgJHtIT1NUfS9hcGkvYCxcbiAgICBET1VCQU5fQk9PS1M6ICdodHRwczovL2FwaS5kb3ViYW4uY29tL3YyL2Jvb2svJ1xufTtcbmV4cG9ydCBkZWZhdWx0IEFwaVJvb3RzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L2FwaS1jb25maWcvYXBpLXJvb3RzLnRzXG4gKiovIiwiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCBvYmplY3RUb1VybGVuY29kZWQgZnJvbSAnLi4vdXRpbHMvcGFyc2UtZm9ybS1kYXRhJztcbmltcG9ydCBoYW5kbGVSZXNwb25zZUpzb24gZnJvbSAnLi4vdXRpbHMvaGFuZGxlLXJlc3BvbnNlLWpzb24nO1xuY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbn07XG5leHBvcnQgZnVuY3Rpb24gY2FsbEFwaShmdWxsVXJsLCBjb25maWcgPSB7fSkge1xuICAgIC8vIHJldHVybiBmZXRjaCBjb25maWdcbiAgICBjb25zdCBwYXJzZUNvbmZpZyA9IChvcmlnaW5hbkNvbmZpZykgPT4ge1xuICAgICAgICBsZXQgeyBtZXRob2QsIGRhdGEsIGNyZWRlbnRpYWxzLCBkYXRhVHlwZSB9ID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdENvbmZpZywgb3JpZ2luYW5Db25maWcpO1xuICAgICAgICBsZXQgZmV0Y2hDb25maWcgPSB7fTtcbiAgICAgICAgaWYgKG1ldGhvZCkge1xuICAgICAgICAgICAgZmV0Y2hDb25maWcubWV0aG9kID0gbWV0aG9kO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjcmVkZW50aWFscykge1xuICAgICAgICAgICAgZmV0Y2hDb25maWcuY3JlZGVudGlhbHMgPSBjcmVkZW50aWFscztcbiAgICAgICAgfVxuICAgICAgICAvLyBoYW5kbGUgcmVxdWVzdCBoZWFkZXJzIGFuZCBib2R5XG4gICAgICAgIGlmIChtZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICAgICAgbGV0IGNvbnRlbnRUeXBlO1xuICAgICAgICAgICAgbGV0IGJvZHk7XG4gICAgICAgICAgICBpZiAoZGF0YVR5cGUgPT09ICdqc29uJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGFUeXBlID09PSAndXJsZW5jb2RlZCcpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xuICAgICAgICAgICAgICAgIGJvZHkgPSBvYmplY3RUb1VybGVuY29kZWQoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgdW5zdXBwb3J0ZWQgZGF0YVR5cGVcbiAgICAgICAgICAgICAgICBkYXRhVHlwZSA9ICd1cmxlbmNvZGVkJztcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xuICAgICAgICAgICAgICAgIGJvZHkgPSBvYmplY3RUb1VybGVuY29kZWQoZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdVbnN1cHBvcnRlZCBkYXRhVHlwZSB1c2VkIFwidXJsZW5jb2RlZFwiIGluc3RlYWQhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmZXRjaENvbmZpZy5oZWFkZXJzID0ge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiBjb250ZW50VHlwZSxcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtUmVxdWVzdC1NZXRob2QnOiAnUE9TVCdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmZXRjaENvbmZpZy5ib2R5ID0gYm9keTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kID09PSAnREVMRVRFJykge1xuICAgICAgICAgICAgZmV0Y2hDb25maWcuaGVhZGVycyA9IHtcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtUmVxdWVzdC1NZXRob2QnOiAnREVMRVRFJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hDb25maWc7XG4gICAgfTtcbiAgICByZXR1cm4gZmV0Y2goZnVsbFVybCwgcGFyc2VDb25maWcoY29uZmlnKSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oanNvbiA9PiAoeyBqc29uLCByZXNwb25zZSB9KSk7XG4gICAgfSlcbiAgICAgICAgLnRoZW4oKHsganNvbiwgcmVzcG9uc2UgfSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVSZXNwb25zZUpzb24oanNvbiwgY29uZmlnLnNjaGVtYSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoanNvbik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNhbGxBcGk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvdXRpbHMvY2FsbC1hcGkudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub3JtYWxpenJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIm5vcm1hbGl6clwiXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxIDJcbiAqKi8iLCJpbXBvcnQgeyBub3JtYWxpemUgfSBmcm9tICdub3JtYWxpenInO1xuaW1wb3J0IGh1bXBzIGZyb20gJ2h1bXBzJztcbmZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlSnNvbihqc29uLCBzY2hlbWEpIHtcbiAgICBqc29uID0gaHVtcHMuY2FtZWxpemVLZXlzKGpzb24pO1xuICAgIGxldCByZXN1bHQgPSBqc29uO1xuICAgIGlmICh0eXBlb2Ygc2NoZW1hICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBub3JtYWxpemUoanNvbiwgc2NoZW1hKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgZGVmYXVsdCBoYW5kbGVSZXNwb25zZUpzb247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvdXRpbHMvaGFuZGxlLXJlc3BvbnNlLWpzb24udHNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb2JqZWN0VG9VcmxlbmNvZGVkKG9yaWdpbmFsT2JqKSB7XG4gICAgbGV0IG9iamVjdCA9IF8uY2xvbmVEZWVwKG9yaWdpbmFsT2JqKTtcbiAgICBsZXQgZW5jb2RlZHVybCA9ICcnO1xuICAgIGZvciAobGV0IHByb3AgaW4gb2JqZWN0KSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0W3Byb3BdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgb2JqZWN0W3Byb3BdID0gb2JqZWN0W3Byb3BdLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZW5jb2RlZHVybCA9IGAke2VuY29kZWR1cmx9JHtwcm9wfT0ke29iamVjdFtwcm9wXX0mYDtcbiAgICB9XG4gICAgcmV0dXJuIGVuY29kZWR1cmwuc3Vic3RyKDAsIGVuY29kZWR1cmwubGVuZ3RoIC0gMSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvdXRpbHMvcGFyc2UtZm9ybS1kYXRhLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHVtcHNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImh1bXBzXCJcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMlxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImlzb21vcnBoaWMtZmV0Y2hcIlxuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMSAyXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlZHV4XCJcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDJcbiAqKi8iLCJpbXBvcnQgY2FsbEFwaSBmcm9tICcuLi91dGlscy9jYWxsLWFwaSc7XG5pbXBvcnQgQXBpUm9vdHMgZnJvbSAnLi4vYXBpLWNvbmZpZy9hcGktcm9vdHMnO1xuZXhwb3J0IGRlZmF1bHQgc3RvcmUgPT4gbmV4dCA9PiBhY3Rpb24gPT4ge1xuICAgIGNvbnN0IENBTExfQVBJID0gYWN0aW9uLkNBTExfQVBJO1xuICAgIGlmICh0eXBlb2YgQ0FMTF9BUEkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgfVxuICAgIGxldCB7IGVuZHBvaW50LCBhcGlVcmwsIGV4dGVuZGVkT3B0aW9ucyB9ID0gQ0FMTF9BUEk7XG4gICAgY29uc3QgeyB0eXBlcywgc2NoZW1hIH0gPSBDQUxMX0FQSTtcbiAgICBjb25zdCBbcmVxdWVzdFR5cGUsIHN1Y2Nlc3NUeXBlLCBmYWlsdXJlVHlwZV0gPSB0eXBlcztcbiAgICBmdW5jdGlvbiBhY3Rpb25XaXRoKGRhdGEpIHtcbiAgICAgICAgY29uc3QgZmluYWxBY3Rpb24gPSBPYmplY3QuYXNzaWduKHt9LCBhY3Rpb24sIGRhdGEpO1xuICAgICAgICBkZWxldGUgZmluYWxBY3Rpb24uQ0FMTF9BUEk7XG4gICAgICAgIHJldHVybiBmaW5hbEFjdGlvbjtcbiAgICB9XG4gICAgbmV4dChhY3Rpb25XaXRoKHsgdHlwZTogcmVxdWVzdFR5cGUgfSkpO1xuICAgIGlmICh0eXBlb2YgZW5kcG9pbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZW5kcG9pbnQgPSBlbmRwb2ludChzdG9yZS5nZXRTdGF0ZSgpKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBhcGlVcmwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGFwaVVybCA9IEFwaVJvb3RzLkxPQ0FMO1xuICAgIH1cbiAgICBjb25zdCBmdWxsVXJsID0gYXBpVXJsICsgZW5kcG9pbnQ7XG4gICAgbGV0IG9wdGlvbnMgPSB7IHNjaGVtYSB9O1xuICAgIGlmICh0eXBlb2YgZXh0ZW5kZWRPcHRpb25zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgZXh0ZW5kZWRPcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhbGxBcGkoZnVsbFVybCwgb3B0aW9ucykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHJldHVybiBuZXh0KGFjdGlvbldpdGgoe1xuICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICB0eXBlOiBzdWNjZXNzVHlwZVxuICAgICAgICB9KSk7XG4gICAgfSwgZXJyb3IgPT4gbmV4dChhY3Rpb25XaXRoKHtcbiAgICAgICAgdHlwZTogZmFpbHVyZVR5cGUsXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdPb3BzISdcbiAgICB9KSkpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9taWRkbGV3YXJlL2FwaS50c1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IHN0b3JlID0+IG5leHQgPT4gYWN0aW9uID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0RPVUJBTl9CT09LX1NFQVJDSF9TVUNDRVNTJzpcbiAgICAgICAgICAgIC8vIFRPRE86IGNhbiBiZSBmaXhlZCBpbiBub3JtYWxpenI/XG4gICAgICAgICAgICBhY3Rpb24ucmVzcG9uc2UucmVzdWx0ID0gYWN0aW9uLnJlc3BvbnNlLnJlc3VsdC5ib29rcztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIG5leHQoYWN0aW9uKTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvbWlkZGxld2FyZS9tb2RpZnktcmVzcG9uc2UudHNcbiAqKi8iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyByb3V0ZXJSZWR1Y2VyIGFzIHJvdXRpbmcgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xuaW1wb3J0IG5vdGlmaWNhdGlvbnMgZnJvbSAnLi9ub3RpZmljYXRpb25zJztcbmltcG9ydCBwYWdpbmF0ZSBmcm9tICcuL3BhZ2luYXRlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG4vLyBVcGRhdGVzIGFuIGVudGl0eSBjYWNoZSBpbiByZXNwb25zZSB0byBhbnkgYWN0aW9uIHdpdGggcmVzcG9uc2UuZW50aXRpZXMuXG5mdW5jdGlvbiBlbnRpdGllcyhzdGF0ZSA9IHsgYm9va3M6IHt9LCB1c2Vyczoge30sIGJvb2tDb2xsZWN0aW9uczoge30gfSwgYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbi5yZXNwb25zZSAmJiBhY3Rpb24ucmVzcG9uc2UuZW50aXRpZXMpIHtcbiAgICAgICAgcmV0dXJuIF8ubWVyZ2Uoe30sIHN0YXRlLCBhY3Rpb24ucmVzcG9uc2UuZW50aXRpZXMpO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG59XG5mdW5jdGlvbiBwYXlsb2FkcyhzdGF0ZSA9IHt9LCBhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uLmVycm9yICYmIGFjdGlvbi5wYXlsb2FkKSB7XG4gICAgICAgIHJldHVybiBfLmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgIFthY3Rpb24ucGF5bG9hZF06IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYWN0aW9uLnJlc3BvbnNlICYmIGFjdGlvbi5wYXlsb2FkKSB7XG4gICAgICAgIHJldHVybiBfLmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgIFthY3Rpb24ucGF5bG9hZF06IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBhY3Rpb24ucmVzcG9uc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbn1cbi8vIFVwZGF0ZXMgZXJyb3IgbWVzc2FnZSB0byBub3RpZnkgYWJvdXQgdGhlIGZhaWxlZCBmZXRjaGVzLlxuZnVuY3Rpb24gZXJyb3JNZXNzYWdlKHN0YXRlID0gbnVsbCwgYWN0aW9uKSB7XG4gICAgY29uc3QgeyB0eXBlLCBlcnJvciB9ID0gYWN0aW9uO1xuICAgIC8vIGlmICh0eXBlID09PSBBY3Rpb25UeXBlcy5SRVNFVF9FUlJPUl9NRVNTQUdFKSB7XG4gICAgLy8gICByZXR1cm4gbnVsbFxuICAgIC8vIH1cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5lcnJvcjtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xufVxuZnVuY3Rpb24gc2Vzc2lvbihzdGF0ZSA9IHsgdXNlcjogeyByb2xlOiAndmlzaXRvcicgfSB9LCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ1VTRVJfQVVUSF9SRVFVRVNUJzpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlICdVU0VSX0FVVEhfU1VDQ0VTUyc6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1c2VyOiBhY3Rpb24ucmVzcG9uc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlICdVU0VSX0FVVEhfRkFJTFVSRSc6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1c2VyOiBhY3Rpb24ucmVzcG9uc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cbi8vIFVwZGF0ZXMgdGhlIHBhZ2luYXRpb24gZGF0YSBmb3IgZGlmZmVyZW50IGFjdGlvbnMuXG5jb25zdCBwYWdpbmF0aW9uID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICAvLyBib29rTGlzdDogcGFnaW5hdGUoe1xuICAgIC8vICAgbWFwQWN0aW9uVG9LZXk6IGFjdGlvbiA9PiBhY3Rpb24uZmlsdGVyLFxuICAgIC8vICAgdHlwZXM6IFsnQk9PS19MSVNUX1JFUVVFU1QnLCAnQk9PS19MSVNUX1NVQ0NFU1MnLCAnQk9PS19MSVNUX0ZBSUxVUkUnXVxuICAgIC8vIH0pLFxuICAgIGJvb2tzOiBwYWdpbmF0ZSh7XG4gICAgICAgIG1hcEFjdGlvblRvS2V5OiBhY3Rpb24gPT4gYWN0aW9uLmZsb3dUeXBlLFxuICAgICAgICB0eXBlczogWydCT09LU19SRVFVRVNUJywgJ0JPT0tTX1NVQ0NFU1MnLCAnQk9PS1NfRkFJTFVSRSddXG4gICAgfSksXG4gICAgYm9va0NvbGxlY3Rpb25zOiBwYWdpbmF0ZSh7XG4gICAgICAgIG1hcEFjdGlvblRvS2V5OiBhY3Rpb24gPT4gYWN0aW9uLmZsb3dUeXBlLFxuICAgICAgICB0eXBlczogWydDT0xMRUNUSU9OU19SRVFVRVNUJywgJ0NPTExFQ1RJT05TX1NVQ0NFU1MnLCAnQ09MTEVDVElPTlNfRkFJTFVSRSddXG4gICAgfSksXG4gICAgLy8gc2hlbGY6IHBhZ2luYXRlKHtcbiAgICAvLyAgIG1hcEFjdGlvblRvS2V5OiBhY3Rpb24gPT4gYWN0aW9uLnVzZXJJZCxcbiAgICAvLyAgIHR5cGVzOiBbJ1NIRUxGX1JFUVVFU1QnLCAnU0hFTEZfU1VDQ0VTUycsICdTSEVMRl9GQUlMVVJFJ11cbiAgICAvLyB9KSxcbiAgICB1c2VyTGlzdDogcGFnaW5hdGUoe1xuICAgICAgICAvLyBUT0RPXG4gICAgICAgIG1hcEFjdGlvblRvS2V5OiBhY3Rpb24gPT4gJ2FsbCcsXG4gICAgICAgIHR5cGVzOiBbJ1VTRVJfTElTVF9SRVFVRVNUJywgJ1VTRVJfTElTVF9TVUNDRVNTJywgJ1VTRVJfTElTVF9GQUlMVVJFJ10sXG4gICAgfSksXG4gICAgZG91YmFuQm9va1NlYXJjaFJlc3VsdHM6IHBhZ2luYXRlKHtcbiAgICAgICAgbWFwQWN0aW9uVG9LZXk6IGFjdGlvbiA9PiBhY3Rpb24ucXVlcnksXG4gICAgICAgIHR5cGVzOiBbJ0RPVUJBTl9CT09LX1NFQVJDSF9SRVFVRVNUJywgJ0RPVUJBTl9CT09LX1NFQVJDSF9TVUNDRVNTJywgJ0RPVUJBTl9CT09LX1NFQVJDSF9GQUlMVVJFJ11cbiAgICB9KSxcbiAgICBib29rU2VhcmNoUmVzdWx0czogcGFnaW5hdGUoe1xuICAgICAgICBtYXBBY3Rpb25Ub0tleTogYWN0aW9uID0+IGFjdGlvbi5xdWVyeSxcbiAgICAgICAgdHlwZXM6IFsnQk9PS19TRUFSQ0hfUkVRVUVTVCcsICdCT09LX1NFQVJDSF9TVUNDRVNTJywgJ0JPT0tfU0VBUkNIX0ZBSUxVUkUnXVxuICAgIH0pXG59KTtcbmZ1bmN0aW9uIGVsZW1lbnRzKHN0YXRlID0ge30sIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0NIQU5HRV9WQUxVRScpIHtcbiAgICAgICAgLy8gbG9kYXNoI21lcmdlIOS4jeaUr+aMgSBTeW1ib2xcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICBbYWN0aW9uLm5hbWVdOiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZVthY3Rpb24ubmFtZV0sIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogYWN0aW9uLnZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnVVBEQVRFX0VMRU1FTlQnKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgW2FjdGlvbi5uYW1lXTogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVbYWN0aW9uLm5hbWVdLCBhY3Rpb24uZGF0YSlcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbn1cbmNvbnN0IGNvbXBvbmVudHMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIG5vdGlmaWNhdGlvbnNcbn0pO1xuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHBheWxvYWRzLFxuICAgIGNvbXBvbmVudHMsXG4gICAgZWxlbWVudHMsXG4gICAgcm91dGluZyxcbiAgICBlbnRpdGllcyxcbiAgICBlcnJvck1lc3NhZ2UsXG4gICAgcGFnaW5hdGlvbixcbiAgICBzZXNzaW9uXG59KTtcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3JlZHVjZXJzL2luZGV4LnRzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm90aWZpY2F0aW9ucyhzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdISURFX05PVElGSUNBVElPTicpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLm1hcChuID0+IG4uaWQgPT09IGFjdGlvbi5pZCA/IE9iamVjdC5hc3NpZ24oe30sIG4sIHsgdmlzaWJsZTogZmFsc2UgfSkgOiBuKTtcbiAgICB9XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnU0hPV19OT1RJRklDQVRJT04nKSB7XG4gICAgICAgIHJldHVybiBbLi4uc3RhdGUsIHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGFjdGlvbi5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIHR5cGU6IGFjdGlvbi5tc2dUeXBlLFxuICAgICAgICAgICAgICAgIGlkOiBhY3Rpb24uaWRcbiAgICAgICAgICAgIH1dO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvcmVkdWNlcnMvbm90aWZpY2F0aW9ucy50c1xuICoqLyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG4vLyBDcmVhdGVzIGEgcmVkdWNlciBtYW5hZ2luZyBwYWdpbmF0aW9uLCBnaXZlbiB0aGUgYWN0aW9uIHR5cGVzIHRvIGhhbmRsZSxcbi8vIGFuZCBhIGZ1bmN0aW9uIHRlbGxpbmcgaG93IHRvIGV4dHJhY3QgdGhlIGtleSBmcm9tIGFuIGFjdGlvbi5cbi8vIHRvZG86IHR5cGVzIGxlbmd0aCBzaG91bGQgYmUgM1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnaW5hdGUoeyB0eXBlcywgbWFwQWN0aW9uVG9LZXkgfSkge1xuICAgIGNvbnN0IFtyZXF1ZXN0VHlwZSwgc3VjY2Vzc1R5cGUsIGZhaWx1cmVUeXBlXSA9IHR5cGVzO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZVBhZ2luYXRpb24oc3RhdGUgPSB7XG4gICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIG5leHRQYWdlVXJsOiBudWxsLFxuICAgICAgICAgICAgcGFnZUNvdW50OiAwLFxuICAgICAgICAgICAgaWRzOiBbXVxuICAgICAgICB9LCBhY3Rpb24pIHtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSByZXF1ZXN0VHlwZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2FzZSBzdWNjZXNzVHlwZTpcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGlkczogXy51bmlvbihzdGF0ZS5pZHMsIGFjdGlvbi5yZXNwb25zZS5yZXN1bHQpLFxuICAgICAgICAgICAgICAgICAgICAvLyDkuI3kvb/nlKggdW5pb24g5Lya5a+86Ie0IHNlcnZlciByZW5kZXJpbmcg6Zeu6aKY77yfXG4gICAgICAgICAgICAgICAgICAgIC8vIGlkczogYWN0aW9uLnJlc3BvbnNlLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBhZ2VVcmw6IGFjdGlvbi5yZXNwb25zZS5uZXh0UGFnZVVybCxcbiAgICAgICAgICAgICAgICAgICAgcGFnZUNvdW50OiBzdGF0ZS5wYWdlQ291bnQgKyAxXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYXNlIGZhaWx1cmVUeXBlOlxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVBhZ2luYXRpb25CeUtleShzdGF0ZSA9IHt9LCBhY3Rpb24pIHtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSByZXF1ZXN0VHlwZTpcbiAgICAgICAgICAgIGNhc2Ugc3VjY2Vzc1R5cGU6XG4gICAgICAgICAgICBjYXNlIGZhaWx1cmVUeXBlOlxuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IG1hcEFjdGlvblRvS2V5KGFjdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQga2V5IHRvIGJlIGEgc3RyaW5nLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICBba2V5XTogdXBkYXRlUGFnaW5hdGlvbihzdGF0ZVtrZXldLCBhY3Rpb24pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9yZWR1Y2Vycy9wYWdpbmF0ZS50c1xuICoqLyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21wb3NlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vbWlkZGxld2FyZS9hcGknO1xuaW1wb3J0IG1vZGlmeVJlc3BvbnNlIGZyb20gJy4uL21pZGRsZXdhcmUvbW9kaWZ5LXJlc3BvbnNlJztcbmltcG9ydCBoYW5kbGVJbml0aWFsU3RhdGUgZnJvbSAnLi4vdXRpbHMvaGFuZGxlLWluaXRpYWwtc3RhdGUnO1xuaW1wb3J0IGNyZWF0ZUxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInO1xuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZSgpIHtcbiAgICBsZXQgc3RvcmU7XG4gICAgLy8gaWYobW9kdWxlLmhvdCkge1xuICAgIC8vICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4uL3JlZHVjZXJzJywgKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBuZXh0Um9vdFJlZHVjZXIgPSByZXF1aXJlKCcuLi9yZWR1Y2VycycpLmRlZmF1bHRcbiAgICAvLyAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIobmV4dFJvb3RSZWR1Y2VyKVxuICAgIC8vICAgfSlcbiAgICAvLyB9XG4gICAgLy8gc2VydmVyIHNpZGVcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwge30sIGFwcGx5TWlkZGxld2FyZSh0aHVuaywgYXBpLCBtb2RpZnlSZXNwb25zZSkpO1xuICAgICAgICByZXR1cm4gc3RvcmU7XG4gICAgfVxuICAgIGlmIChlbnYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBoYW5kbGVJbml0aWFsU3RhdGUoKSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rLCBhcGksIG1vZGlmeVJlc3BvbnNlKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBoYW5kbGVJbml0aWFsU3RhdGUoKSwgY29tcG9zZShhcHBseU1pZGRsZXdhcmUodGh1bmssIGFwaSwgbW9kaWZ5UmVzcG9uc2UsIGNyZWF0ZUxvZ2dlcih7IGNvbGxhcHNlZDogdHJ1ZSB9KSkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0b3JlO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3N0b3JlL2NvbmZpZ3VyZS1zdG9yZS50c1xuICoqLyIsImZ1bmN0aW9uIGhhbmRsZUluaXRpYWxTdGF0ZSgpIHtcbiAgICBsZXQgaW5pdGlhbFN0YXRlO1xuICAgIGlmICh0eXBlb2Ygd2luZG93Ll9fSU5JVElBTF9TVEFURV9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpbml0aWFsU3RhdGUgPSB3aW5kb3cuX19JTklUSUFMX1NUQVRFX187XG4gICAgfVxuICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG59XG5leHBvcnQgZGVmYXVsdCBoYW5kbGVJbml0aWFsU3RhdGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvdXRpbHMvaGFuZGxlLWluaXRpYWwtc3RhdGUudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItcmVkdXhcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1yZWR1eFwiXG4gKiogbW9kdWxlIGlkID0gMTY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1sb2dnZXJcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlZHV4LWxvZ2dlclwiXG4gKiogbW9kdWxlIGlkID0gMTY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVkdXgtdGh1bmtcIlxuICoqIG1vZHVsZSBpZCA9IDE2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==