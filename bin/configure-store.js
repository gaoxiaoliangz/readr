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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDlmODhmNGIzMmQxNmU1MWNkYjM/NGYwYSoiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCI/MGM4YioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9hcGktY29uZmlnL2FwaS1yb290cy50cz81M2MwKiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL2NhbGwtYXBpLnRzPzQxNTYqIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vcm1hbGl6clwiP2E0NjkqIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvaGFuZGxlLXJlc3BvbnNlLWpzb24udHM/YTY4MSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC91dGlscy9wYXJzZS1mb3JtLWRhdGEudHM/YmQzZSoiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHVtcHNcIj82ZmNmKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCI/OWY2NyoiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIj81YzllIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbWlkZGxld2FyZS9hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9taWRkbGV3YXJlL21vZGlmeS1yZXNwb25zZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JlZHVjZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcmVkdWNlcnMvbm90aWZpY2F0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JlZHVjZXJzL3BhZ2luYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvc3RvcmUvY29uZmlndXJlLXN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvaGFuZGxlLWluaXRpYWwtc3RhdGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0Esb0M7Ozs7Ozs7Ozs7OztBQ0FBLEtBQU0sT0FBTyxPQUFPLE1BQVAsS0FBa0IsV0FBbEIsR0FBZ0MsT0FBTyxRQUFQLENBQWdCLE1BQWhCLEdBQXlCLHVCQUF6RDtBQUNiLEtBQU0sV0FBVztBQUNiLFlBQVUsY0FBVjtBQUNBLG1CQUFjLGlDQUFkO0VBRkU7bUJBSVMsUzs7Ozs7Ozs7Ozs7O1NDR0M7O0FBUmhCOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBLEtBQU0sZ0JBQWdCO0FBQ2xCLGVBQVUsTUFBVjtBQUNBLGFBQVEsS0FBUjtBQUNBLGtCQUFhLGFBQWI7RUFIRTtBQUtDLFVBQVMsT0FBVCxDQUFpQixPQUFqQixFQUF1QztTQUFiLCtEQUFTLGtCQUFJOzs7QUFFMUMsU0FBTSxjQUFjLFNBQWQsV0FBYyxDQUFDLGNBQUQsRUFBb0I7OEJBQ1UsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixhQUFsQixFQUFpQyxjQUFqQyxFQURWOzthQUM5QiwrQkFEOEI7YUFDdEIsMkJBRHNCO2FBQ2hCLHlDQURnQjthQUNILG1DQURHOztBQUVwQyxhQUFJLGNBQWMsRUFBZCxDQUZnQztBQUdwQyxhQUFJLE1BQUosRUFBWTtBQUNSLHlCQUFZLE1BQVosR0FBcUIsTUFBckIsQ0FEUTtVQUFaO0FBR0EsYUFBSSxXQUFKLEVBQWlCO0FBQ2IseUJBQVksV0FBWixHQUEwQixXQUExQixDQURhO1VBQWpCOztB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Ozs7O0FDQUEseUMiLCJmaWxlIjoiY29uZmlndXJlLXN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAwOWY4OGY0YjMyZDE2ZTUxY2RiM1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibG9kYXNoXCJcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMSAyXG4gKiovIiwiY29uc3QgSE9TVCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LmxvY2F0aW9uLm9yaWdpbiA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xuY29uc3QgQXBpUm9vdHMgPSB7XG4gICAgTE9DQUw6IGAke0hPU1R9L2FwaS9gLFxuICAgIERPVUJBTl9CT09LUzogJ2h0dHBzOi8vYXBpLmRvdWJhbi5jb20vdjIvYm9vay8nXG59O1xuZXhwb3J0IGRlZmF1bHQgQXBpUm9vdHM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvYXBpLWNvbmZpZy9hcGktcm9vdHMudHNcbiAqKi8iLCJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IG9iamVjdFRvVXJsZW5jb2RlZCBmcm9tICcuLi91dGlscy9wYXJzZS1mb3JtLWRhdGEnO1xuaW1wb3J0IGhhbmRsZVJlc3BvbnNlSnNvbiBmcm9tICcuLi91dGlscy9oYW5kbGUtcmVzcG9uc2UtanNvbic7XG5jb25zdCBkZWZhdWx0Q29uZmlnID0ge1xuICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xufTtcbmV4cG9ydCBmdW5jdGlvbiBjYWxsQXBpKGZ1bGxVcmwsIGNvbmZpZyA9IHt9KSB7XG4gICAgLy8gcmV0dXJuIGZldGNoIGNvbmZpZ1xuICAgIGNvbnN0IHBhcnNlQ29uZmlnID0gKG9yaWdpbmFuQ29uZmlnKSA9PiB7XG4gICAgICAgIGxldCB7IG1ldGhvZCwgZGF0YSwgY3JlZGVudGlhbHMsIGRhdGFUeXBlIH0gPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0Q29uZmlnLCBvcmlnaW5hbkNvbmZpZyk7XG4gICAgICAgIGxldCBmZXRjaENvbmZpZyA9IHt9O1xuICAgICAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgICAgICBmZXRjaENvbmZpZy5tZXRob2QgPSBtZXRob2Q7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgICBmZXRjaENvbmZpZy5jcmVkZW50aWFscyA9IGNyZWRlbnRpYWxzO1xuICAgICAgICB9XG4gICAgICAgIC8vIGhhbmRsZSByZXF1ZXN0IGhlYWRlcnMgYW5kIGJvZHlcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgICAgICBsZXQgY29udGVudFR5cGU7XG4gICAgICAgICAgICBsZXQgYm9keTtcbiAgICAgICAgICAgIGlmIChkYXRhVHlwZSA9PT0gJ2pzb24nKSB7XG4gICAgICAgICAgICAgICAgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YVR5cGUgPT09ICd1cmxlbmNvZGVkJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG4gICAgICAgICAgICAgICAgYm9keSA9IG9iamVjdFRvVXJsZW5jb2RlZChkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSB1bnN1cHBvcnRlZCBkYXRhVHlwZVxuICAgICAgICAgICAgICAgIGRhdGFUeXBlID0gJ3VybGVuY29kZWQnO1xuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG4gICAgICAgICAgICAgICAgYm9keSA9IG9iamVjdFRvVXJsZW5jb2RlZChkYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1Vuc3VwcG9ydGVkIGRhdGFUeXBlIHVzZWQgXCJ1cmxlbmNvZGVkXCIgaW5zdGVhZCEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZldGNoQ29uZmlnLmhlYWRlcnMgPSB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IGNvbnRlbnRUeXBlLFxuICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1SZXF1ZXN0LU1ldGhvZCc6ICdQT1NUJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZldGNoQ29uZmlnLmJvZHkgPSBib2R5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgPT09ICdERUxFVEUnKSB7XG4gICAgICAgICAgICBmZXRjaENvbmZpZy5oZWFkZXJzID0ge1xuICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1SZXF1ZXN0LU1ldGhvZCc6ICdERUxFVEUnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaENvbmZpZztcbiAgICB9O1xuICAgIHJldHVybiBmZXRjaChmdWxsVXJsLCBwYXJzZUNvbmZpZyhjb25maWcpKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbihqc29uID0+ICh7IGpzb24sIHJlc3BvbnNlIH0pKTtcbiAgICB9KVxuICAgICAgICAudGhlbigoeyBqc29uLCByZXNwb25zZSB9KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVJlc3BvbnNlSnNvbihqc29uLCBjb25maWcuc2NoZW1hKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChqc29uKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgY2FsbEFwaTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9jYWxsLWFwaS50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vcm1hbGl6clwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibm9ybWFsaXpyXCJcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDEgMlxuICoqLyIsImltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gJ25vcm1hbGl6cic7XG5pbXBvcnQgaHVtcHMgZnJvbSAnaHVtcHMnO1xuZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2VKc29uKGpzb24sIHNjaGVtYSkge1xuICAgIGpzb24gPSBodW1wcy5jYW1lbGl6ZUtleXMoanNvbik7XG4gICAgbGV0IHJlc3VsdCA9IGpzb247XG4gICAgaWYgKHR5cGVvZiBzY2hlbWEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIG5vcm1hbGl6ZShqc29uLCBzY2hlbWEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZVJlc3BvbnNlSnNvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9oYW5kbGUtcmVzcG9uc2UtanNvbi50c1xuICoqLyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvYmplY3RUb1VybGVuY29kZWQob3JpZ2luYWxPYmopIHtcbiAgICBsZXQgb2JqZWN0ID0gXy5jbG9uZURlZXAob3JpZ2luYWxPYmopO1xuICAgIGxldCBlbmNvZGVkdXJsID0gJyc7XG4gICAgZm9yIChsZXQgcHJvcCBpbiBvYmplY3QpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmplY3RbcHJvcF0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBvYmplY3RbcHJvcF0gPSBvYmplY3RbcHJvcF0udG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbmNvZGVkdXJsID0gYCR7ZW5jb2RlZHVybH0ke3Byb3B9PSR7b2JqZWN0W3Byb3BdfSZgO1xuICAgIH1cbiAgICByZXR1cm4gZW5jb2RlZHVybC5zdWJzdHIoMCwgZW5jb2RlZHVybC5sZW5ndGggLSAxKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9wYXJzZS1mb3JtLWRhdGEudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodW1wc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiaHVtcHNcIlxuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMSAyXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxIDJcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVkdXhcIlxuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMlxuICoqLyIsImltcG9ydCBjYWxsQXBpIGZyb20gJy4uL3V0aWxzL2NhbGwtYXBpJztcbmltcG9ydCBBcGlSb290cyBmcm9tICcuLi9hcGktY29uZmlnL2FwaS1yb290cyc7XG5leHBvcnQgZGVmYXVsdCBzdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XG4gICAgY29uc3QgQ0FMTF9BUEkgPSBhY3Rpb24uQ0FMTF9BUEk7XG4gICAgaWYgKHR5cGVvZiBDQUxMX0FQSSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICB9XG4gICAgbGV0IHsgZW5kcG9pbnQsIGFwaVVybCwgZXh0ZW5kZWRPcHRpb25zIH0gPSBDQUxMX0FQSTtcbiAgICBjb25zdCB7IHR5cGVzLCBzY2hlbWEgfSA9IENBTExfQVBJO1xuICAgIGNvbnN0IFtyZXF1ZXN0VHlwZSwgc3VjY2Vzc1R5cGUsIGZhaWx1cmVUeXBlXSA9IHR5cGVzO1xuICAgIGZ1bmN0aW9uIGFjdGlvbldpdGgoZGF0YSkge1xuICAgICAgICBjb25zdCBmaW5hbEFjdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIGFjdGlvbiwgZGF0YSk7XG4gICAgICAgIGRlbGV0ZSBmaW5hbEFjdGlvbi5DQUxMX0FQSTtcbiAgICAgICAgcmV0dXJuIGZpbmFsQWN0aW9uO1xuICAgIH1cbiAgICBuZXh0KGFjdGlvbldpdGgoeyB0eXBlOiByZXF1ZXN0VHlwZSB9KSk7XG4gICAgaWYgKHR5cGVvZiBlbmRwb2ludCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlbmRwb2ludCA9IGVuZHBvaW50KHN0b3JlLmdldFN0YXRlKCkpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGFwaVVybCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgYXBpVXJsID0gQXBpUm9vdHMuTE9DQUw7XG4gICAgfVxuICAgIGNvbnN0IGZ1bGxVcmwgPSBhcGlVcmwgKyBlbmRwb2ludDtcbiAgICBsZXQgb3B0aW9ucyA9IHsgc2NoZW1hIH07XG4gICAgaWYgKHR5cGVvZiBleHRlbmRlZE9wdGlvbnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCBleHRlbmRlZE9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gY2FsbEFwaShmdWxsVXJsLCBvcHRpb25zKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uV2l0aCh7XG4gICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgIHR5cGU6IHN1Y2Nlc3NUeXBlXG4gICAgICAgIH0pKTtcbiAgICB9LCBlcnJvciA9PiBuZXh0KGFjdGlvbldpdGgoe1xuICAgICAgICB0eXBlOiBmYWlsdXJlVHlwZSxcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgJ09vcHMhJ1xuICAgIH0pKSk7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L21pZGRsZXdhcmUvYXBpLnRzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgc3RvcmUgPT4gbmV4dCA9PiBhY3Rpb24gPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnRE9VQkFOX0JPT0tfU0VBUkNIX1NVQ0NFU1MnOlxuICAgICAgICAgICAgLy8gVE9ETzogY2FuIGJlIGZpeGVkIGluIG5vcm1hbGl6cj9cbiAgICAgICAgICAgIGFjdGlvbi5yZXNwb25zZS5yZXN1bHQgPSBhY3Rpb24ucmVzcG9uc2UucmVzdWx0LmJvb2tzO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgbmV4dChhY3Rpb24pO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9taWRkbGV3YXJlL21vZGlmeS1yZXNwb25zZS50c1xuICoqLyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIgYXMgcm91dGluZyB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5pbXBvcnQgbm90aWZpY2F0aW9ucyBmcm9tICcuL25vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IHBhZ2luYXRlIGZyb20gJy4vcGFnaW5hdGUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbi8vIFVwZGF0ZXMgYW4gZW50aXR5IGNhY2hlIGluIHJlc3BvbnNlIHRvIGFueSBhY3Rpb24gd2l0aCByZXNwb25zZS5lbnRpdGllcy5cbmZ1bmN0aW9uIGVudGl0aWVzKHN0YXRlID0geyBib29rczoge30sIHVzZXJzOiB7fSwgYm9va0NvbGxlY3Rpb25zOiB7fSB9LCBhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uLnJlc3BvbnNlICYmIGFjdGlvbi5yZXNwb25zZS5lbnRpdGllcykge1xuICAgICAgICByZXR1cm4gXy5tZXJnZSh7fSwgc3RhdGUsIGFjdGlvbi5yZXNwb25zZS5lbnRpdGllcyk7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbn1cbmZ1bmN0aW9uIHBheWxvYWRzKHN0YXRlID0ge30sIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24uZXJyb3IgJiYgYWN0aW9uLnBheWxvYWQpIHtcbiAgICAgICAgcmV0dXJuIF8uYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgW2FjdGlvbi5wYXlsb2FkXToge1xuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChhY3Rpb24ucmVzcG9uc2UgJiYgYWN0aW9uLnBheWxvYWQpIHtcbiAgICAgICAgcmV0dXJuIF8uYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgW2FjdGlvbi5wYXlsb2FkXToge1xuICAgICAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5yZXNwb25zZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xufVxuLy8gVXBkYXRlcyBlcnJvciBtZXNzYWdlIHRvIG5vdGlmeSBhYm91dCB0aGUgZmFpbGVkIGZldGNoZXMuXG5mdW5jdGlvbiBlcnJvck1lc3NhZ2Uoc3RhdGUgPSBudWxsLCBhY3Rpb24pIHtcbiAgICBjb25zdCB7IHR5cGUsIGVycm9yIH0gPSBhY3Rpb247XG4gICAgLy8gaWYgKHR5cGUgPT09IEFjdGlvblR5cGVzLlJFU0VUX0VSUk9SX01FU1NBR0UpIHtcbiAgICAvLyAgIHJldHVybiBudWxsXG4gICAgLy8gfVxuICAgIGlmIChlcnJvcikge1xuICAgICAgICByZXR1cm4gYWN0aW9uLmVycm9yO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG59XG5mdW5jdGlvbiBzZXNzaW9uKHN0YXRlID0geyB1c2VyOiB7IHJvbGU6ICd2aXNpdG9yJyB9IH0sIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnVVNFUl9BVVRIX1JFUVVFU1QnOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgJ1VTRVJfQVVUSF9TVUNDRVNTJzpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVzZXI6IGFjdGlvbi5yZXNwb25zZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgJ1VTRVJfQVVUSF9GQUlMVVJFJzpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVzZXI6IGFjdGlvbi5yZXNwb25zZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuLy8gVXBkYXRlcyB0aGUgcGFnaW5hdGlvbiBkYXRhIGZvciBkaWZmZXJlbnQgYWN0aW9ucy5cbmNvbnN0IHBhZ2luYXRpb24gPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIC8vIGJvb2tMaXN0OiBwYWdpbmF0ZSh7XG4gICAgLy8gICBtYXBBY3Rpb25Ub0tleTogYWN0aW9uID0+IGFjdGlvbi5maWx0ZXIsXG4gICAgLy8gICB0eXBlczogWydCT09LX0xJU1RfUkVRVUVTVCcsICdCT09LX0xJU1RfU1VDQ0VTUycsICdCT09LX0xJU1RfRkFJTFVSRSddXG4gICAgLy8gfSksXG4gICAgYm9va3M6IHBhZ2luYXRlKHtcbiAgICAgICAgbWFwQWN0aW9uVG9LZXk6IGFjdGlvbiA9PiBhY3Rpb24uZmxvd1R5cGUsXG4gICAgICAgIHR5cGVzOiBbJ0JPT0tTX1JFUVVFU1QnLCAnQk9PS1NfU1VDQ0VTUycsICdCT09LU19GQUlMVVJFJ11cbiAgICB9KSxcbiAgICBib29rQ29sbGVjdGlvbnM6IHBhZ2luYXRlKHtcbiAgICAgICAgbWFwQWN0aW9uVG9LZXk6IGFjdGlvbiA9PiBhY3Rpb24uZmxvd1R5cGUsXG4gICAgICAgIHR5cGVzOiBbJ0NPTExFQ1RJT05TX1JFUVVFU1QnLCAnQ09MTEVDVElPTlNfU1VDQ0VTUycsICdDT0xMRUNUSU9OU19GQUlMVVJFJ11cbiAgICB9KSxcbiAgICAvLyBzaGVsZjogcGFnaW5hdGUoe1xuICAgIC8vICAgbWFwQWN0aW9uVG9LZXk6IGFjdGlvbiA9PiBhY3Rpb24udXNlcklkLFxuICAgIC8vICAgdHlwZXM6IFsnU0hFTEZfUkVRVUVTVCcsICdTSEVMRl9TVUNDRVNTJywgJ1NIRUxGX0ZBSUxVUkUnXVxuICAgIC8vIH0pLFxuICAgIHVzZXJMaXN0OiBwYWdpbmF0ZSh7XG4gICAgICAgIC8vIFRPRE9cbiAgICAgICAgbWFwQWN0aW9uVG9LZXk6IGFjdGlvbiA9PiAnYWxsJyxcbiAgICAgICAgdHlwZXM6IFsnVVNFUl9MSVNUX1JFUVVFU1QnLCAnVVNFUl9MSVNUX1NVQ0NFU1MnLCAnVVNFUl9MSVNUX0ZBSUxVUkUnXSxcbiAgICB9KSxcbiAgICBkb3ViYW5Cb29rU2VhcmNoUmVzdWx0czogcGFnaW5hdGUoe1xuICAgICAgICBtYXBBY3Rpb25Ub0tleTogYWN0aW9uID0+IGFjdGlvbi5xdWVyeSxcbiAgICAgICAgdHlwZXM6IFsnRE9VQkFOX0JPT0tfU0VBUkNIX1JFUVVFU1QnLCAnRE9VQkFOX0JPT0tfU0VBUkNIX1NVQ0NFU1MnLCAnRE9VQkFOX0JPT0tfU0VBUkNIX0ZBSUxVUkUnXVxuICAgIH0pLFxuICAgIGJvb2tTZWFyY2hSZXN1bHRzOiBwYWdpbmF0ZSh7XG4gICAgICAgIG1hcEFjdGlvblRvS2V5OiBhY3Rpb24gPT4gYWN0aW9uLnF1ZXJ5LFxuICAgICAgICB0eXBlczogWydCT09LX1NFQVJDSF9SRVFVRVNUJywgJ0JPT0tfU0VBUkNIX1NVQ0NFU1MnLCAnQk9PS19TRUFSQ0hfRkFJTFVSRSddXG4gICAgfSlcbn0pO1xuZnVuY3Rpb24gZWxlbWVudHMoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQ0hBTkdFX1ZBTFVFJykge1xuICAgICAgICAvLyBsb2Rhc2gjbWVyZ2Ug5LiN5pSv5oyBIFN5bWJvbFxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgIFthY3Rpb24ubmFtZV06IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlW2FjdGlvbi5uYW1lXSwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBhY3Rpb24udmFsdWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdVUERBVEVfRUxFTUVOVCcpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICBbYWN0aW9uLm5hbWVdOiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZVthY3Rpb24ubmFtZV0sIGFjdGlvbi5kYXRhKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xufVxuY29uc3QgY29tcG9uZW50cyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgbm90aWZpY2F0aW9uc1xufSk7XG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgcGF5bG9hZHMsXG4gICAgY29tcG9uZW50cyxcbiAgICBlbGVtZW50cyxcbiAgICByb3V0aW5nLFxuICAgIGVudGl0aWVzLFxuICAgIGVycm9yTWVzc2FnZSxcbiAgICBwYWdpbmF0aW9uLFxuICAgIHNlc3Npb25cbn0pO1xuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvcmVkdWNlcnMvaW5kZXgudHNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3RpZmljYXRpb25zKHN0YXRlID0gW10sIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0hJREVfTk9USUZJQ0FUSU9OJykge1xuICAgICAgICByZXR1cm4gc3RhdGUubWFwKG4gPT4gbi5pZCA9PT0gYWN0aW9uLmlkID8gT2JqZWN0LmFzc2lnbih7fSwgbiwgeyB2aXNpYmxlOiBmYWxzZSB9KSA6IG4pO1xuICAgIH1cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdTSE9XX05PVElGSUNBVElPTicpIHtcbiAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwge1xuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYWN0aW9uLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9uLm1zZ1R5cGUsXG4gICAgICAgICAgICAgICAgaWQ6IGFjdGlvbi5pZFxuICAgICAgICAgICAgfV07XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC9yZWR1Y2Vycy9ub3RpZmljYXRpb25zLnRzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbi8vIENyZWF0ZXMgYSByZWR1Y2VyIG1hbmFnaW5nIHBhZ2luYXRpb24sIGdpdmVuIHRoZSBhY3Rpb24gdHlwZXMgdG8gaGFuZGxlLFxuLy8gYW5kIGEgZnVuY3Rpb24gdGVsbGluZyBob3cgdG8gZXh0cmFjdCB0aGUga2V5IGZyb20gYW4gYWN0aW9uLlxuLy8gdG9kbzogdHlwZXMgbGVuZ3RoIHNob3VsZCBiZSAzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdpbmF0ZSh7IHR5cGVzLCBtYXBBY3Rpb25Ub0tleSB9KSB7XG4gICAgY29uc3QgW3JlcXVlc3RUeXBlLCBzdWNjZXNzVHlwZSwgZmFpbHVyZVR5cGVdID0gdHlwZXM7XG4gICAgZnVuY3Rpb24gdXBkYXRlUGFnaW5hdGlvbihzdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgbmV4dFBhZ2VVcmw6IG51bGwsXG4gICAgICAgICAgICBwYWdlQ291bnQ6IDAsXG4gICAgICAgICAgICBpZHM6IFtdXG4gICAgICAgIH0sIGFjdGlvbikge1xuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIHJlcXVlc3RUeXBlOlxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYXNlIHN1Y2Nlc3NUeXBlOlxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaWRzOiBfLnVuaW9uKHN0YXRlLmlkcywgYWN0aW9uLnJlc3BvbnNlLnJlc3VsdCksXG4gICAgICAgICAgICAgICAgICAgIC8vIOS4jeS9v+eUqCB1bmlvbiDkvJrlr7zoh7Qgc2VydmVyIHJlbmRlcmluZyDpl67popjvvJ9cbiAgICAgICAgICAgICAgICAgICAgLy8gaWRzOiBhY3Rpb24ucmVzcG9uc2UucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBuZXh0UGFnZVVybDogYWN0aW9uLnJlc3BvbnNlLm5leHRQYWdlVXJsLFxuICAgICAgICAgICAgICAgICAgICBwYWdlQ291bnQ6IHN0YXRlLnBhZ2VDb3VudCArIDFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhc2UgZmFpbHVyZVR5cGU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlUGFnaW5hdGlvbkJ5S2V5KHN0YXRlID0ge30sIGFjdGlvbikge1xuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIHJlcXVlc3RUeXBlOlxuICAgICAgICAgICAgY2FzZSBzdWNjZXNzVHlwZTpcbiAgICAgICAgICAgIGNhc2UgZmFpbHVyZVR5cGU6XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gbWFwQWN0aW9uVG9LZXkoYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBrZXkgdG8gYmUgYSBzdHJpbmcuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgICAgIFtrZXldOiB1cGRhdGVQYWdpbmF0aW9uKHN0YXRlW2tleV0sIGFjdGlvbilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xpZW50L3JlZHVjZXJzL3BhZ2luYXRlLnRzXG4gKiovIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xuaW1wb3J0IGFwaSBmcm9tICcuLi9taWRkbGV3YXJlL2FwaSc7XG5pbXBvcnQgbW9kaWZ5UmVzcG9uc2UgZnJvbSAnLi4vbWlkZGxld2FyZS9tb2RpZnktcmVzcG9uc2UnO1xuaW1wb3J0IGhhbmRsZUluaXRpYWxTdGF0ZSBmcm9tICcuLi91dGlscy9oYW5kbGUtaW5pdGlhbC1zdGF0ZSc7XG5pbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcic7XG5jb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKCkge1xuICAgIGxldCBzdG9yZTtcbiAgICAvLyBpZihtb2R1bGUuaG90KSB7XG4gICAgLy8gICBtb2R1bGUuaG90LmFjY2VwdCgnLi4vcmVkdWNlcnMnLCAoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmUoJy4uL3JlZHVjZXJzJykuZGVmYXVsdFxuICAgIC8vICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihuZXh0Um9vdFJlZHVjZXIpXG4gICAgLy8gICB9KVxuICAgIC8vIH1cbiAgICAvLyBzZXJ2ZXIgc2lkZVxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCB7fSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rLCBhcGksIG1vZGlmeVJlc3BvbnNlKSk7XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICB9XG4gICAgaWYgKGVudiA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGhhbmRsZUluaXRpYWxTdGF0ZSgpLCBhcHBseU1pZGRsZXdhcmUodGh1bmssIGFwaSwgbW9kaWZ5UmVzcG9uc2UpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGhhbmRsZUluaXRpYWxTdGF0ZSgpLCBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSh0aHVuaywgYXBpLCBtb2RpZnlSZXNwb25zZSwgY3JlYXRlTG9nZ2VyKHsgY29sbGFwc2VkOiB0cnVlIH0pKSkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RvcmU7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGllbnQvc3RvcmUvY29uZmlndXJlLXN0b3JlLnRzXG4gKiovIiwiZnVuY3Rpb24gaGFuZGxlSW5pdGlhbFN0YXRlKCkge1xuICAgIGxldCBpbml0aWFsU3RhdGU7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuX19JTklUSUFMX1NUQVRFX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGluaXRpYWxTdGF0ZSA9IHdpbmRvdy5fX0lOSVRJQUxfU1RBVEVfXztcbiAgICB9XG4gICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbn1cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUluaXRpYWxTdGF0ZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsaWVudC91dGlscy9oYW5kbGUtaW5pdGlhbC1zdGF0ZS50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1yZWR1eFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyLXJlZHV4XCJcbiAqKiBtb2R1bGUgaWQgPSAxNjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWxvZ2dlclwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVkdXgtbG9nZ2VyXCJcbiAqKiBtb2R1bGUgaWQgPSAxNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiXG4gKiogbW9kdWxlIGlkID0gMTY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDJcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9