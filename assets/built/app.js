/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/built/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactDom = __webpack_require__(1);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	var _routes = __webpack_require__(5);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _reactRedux = __webpack_require__(7);
	
	var _reactRouterRedux = __webpack_require__(179);
	
	var _configureStore = __webpack_require__(180);
	
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
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(38);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = _react_kit_dll;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(600);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Root = __webpack_require__(6);
	
	var _Root2 = _interopRequireDefault(_Root);
	
	var _AppMaster = __webpack_require__(44);
	
	var _AppMaster2 = _interopRequireDefault(_AppMaster);
	
	var _AppCommon = __webpack_require__(45);
	
	var _AppCommon2 = _interopRequireDefault(_AppCommon);
	
	var _ConsoleMaster = __webpack_require__(72);
	
	var _ConsoleMaster2 = _interopRequireDefault(_ConsoleMaster);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    component: _Root2.default,
	    childRoutes: [{
	        component: _AppMaster2.default,
	        childRoutes: [__webpack_require__(82), {
	            component: _AppCommon2.default,
	            childRoutes: [__webpack_require__(105), __webpack_require__(130), __webpack_require__(133), __webpack_require__(138), __webpack_require__(145), __webpack_require__(148), __webpack_require__(150), {
	                path: 'user',
	                childRoutes: [__webpack_require__(152), __webpack_require__(158), __webpack_require__(163)]
	            }]
	        }, {
	            component: _ConsoleMaster2.default,
	            path: 'console',
	            indexRoute: __webpack_require__(166),
	            childRoutes: [__webpack_require__(166), __webpack_require__(169), __webpack_require__(171), __webpack_require__(175), __webpack_require__(177)]
	        }]
	    }]
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(7);
	
	var _reactRouter = __webpack_require__(4);
	
	var _actions = __webpack_require__(8);
	
	var _Alert = __webpack_require__(15);
	
	var _lodash = __webpack_require__(25);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Dialog = __webpack_require__(26);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
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
	            var dialog = _props.dialog;
	            var closeDialog = _props.closeDialog;
	
	            return _react2.default.createElement("div", { className: "app-root" }, _react2.default.createElement(_Dialog2.default, { isVisible: dialog.isVisible, title: dialog.title, onConfirm: dialog.onConfirm, onRequestClose: closeDialog, width: 500 }, dialog.content), this.props.notifications.filter(function (noti) {
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
	    }]);
	
	    return Root;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        notifications: state.components.notifications,
	        errorMessage: state.errorMessage,
	        dialog: state.components.dialog,
	        routing: state.routing,
	        session: state.session
	    };
	}, { sendNotification: _actions.sendNotification, hideNotification: _actions.hideNotification, closeDialog: _actions.closeDialog, userAuth: _actions.userAuth })(Root);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(449);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _book = __webpack_require__(9);
	
	Object.keys(_book).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _book[key];
	        }
	    });
	});
	
	var _components = __webpack_require__(13);
	
	Object.keys(_components).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _components[key];
	        }
	    });
	});
	
	var _user = __webpack_require__(14);
	
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetchBooks = fetchBooks;
	exports.fetchBook = fetchBook;
	exports.fetchCollections = fetchCollections;
	exports.fetchCollection = fetchCollection;
	
	var _schemas = __webpack_require__(10);
	
	function fetchBooks(config) {
	    var defaultConfig = { flowType: 'newest', page: 1, merge: true };
	
	    var _Object$assign = Object.assign(defaultConfig, config || {});
	
	    var flowType = _Object$assign.flowType;
	    var page = _Object$assign.page;
	    var merge = _Object$assign.merge;
	
	    return {
	        // for paginate
	        flowType: flowType,
	        merge: merge,
	        CALL_API: {
	            types: ['BOOKS_REQUEST', 'BOOKS_SUCCESS', 'BOOKS_FAILURE'],
	            endpoint: 'books?exclude=content&page=' + page,
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Schemas = undefined;
	
	var _normalizr = __webpack_require__(11);
	
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(12))(680);

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = _utils_dll;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.sendNotification = sendNotification;
	exports.showNotification = showNotification;
	exports.hideNotification = hideNotification;
	exports.openDialog = openDialog;
	exports.closeDialog = closeDialog;
	exports.openBasicModal = openBasicModal;
	exports.closeBasicModal = closeBasicModal;
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
	function openDialog(data) {
	    return {
	        type: 'OPEN_DIALOG',
	        data: data
	    };
	}
	function closeDialog() {
	    return {
	        type: 'CLOSE_DIALOG'
	    };
	}
	function openBasicModal(data) {
	    return {
	        type: 'OPEN_BASIC_MODAL',
	        data: data
	    };
	}
	function closeBasicModal() {
	    return {
	        type: 'CLOSE_BASIC_MODAL'
	    };
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.userAuth = userAuth;
	exports.fetchProfile = fetchProfile;
	exports.fetchUserList = fetchUserList;
	exports.fetchShelf = fetchShelf;
	exports.fetchProgress = fetchProgress;
	
	var _schemas = __webpack_require__(10);
	
	function userAuth() {
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
	function fetchUserList() {
	    return {
	        CALL_API: {
	            types: ['USER_LIST_REQUEST', 'USER_LIST_SUCCESS', 'USER_LIST_FAILURE'],
	            endpoint: 'users',
	            schema: _schemas.Schemas.USER_ARRAY
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Alert = exports.Alerts = undefined;
	
	var _Alert = __webpack_require__(16);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	var _Alerts = __webpack_require__(24);
	
	var _Alerts2 = _interopRequireDefault(_Alerts);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Alerts = _Alerts2.default;
	exports.Alert = _Alert2.default;
	exports.default = _Alert2.default;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Icon = __webpack_require__(17);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _reactCssModules = __webpack_require__(21);
	
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
	
	var styles = __webpack_require__(23);
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(18);
	
	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Icon2.default;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(19);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _svgIcons = __webpack_require__(20);
	
	var _svgIcons2 = _interopRequireDefault(_svgIcons);
	
	var _reactCssModules = __webpack_require__(21);
	
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
	
	var styles = __webpack_require__(22);
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
/* 19 */
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
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(658);

/***/ },
/* 22 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"svg-shape":"svg-shape_30-k0","icon":"icon_VsVR4"};

/***/ },
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"alerts":"alerts_3anah","alert":"alert_3WAye","alert--success":"alert--success_NTR5L","alert--error":"alert--error_1C2fM","alert--warning":"alert--warning_3gSWv","content":"content_1U4Ts","alert-close":"alert-close_1UULS"};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Alert = __webpack_require__(16);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = __webpack_require__(23);
	function Alerts(props) {
	    return _react2.default.createElement("div", { className: styles.alerts }, props.messages.map(function (msg, index) {
	        return _react2.default.createElement(_Alert2.default, { key: index, type: msg.type, message: msg.content, visible: msg.visible, onRequestClose: function onRequestClose() {
	                props.onRequestClose(msg.id);
	            } });
	    }));
	}
	exports.default = Alerts;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(12))(678);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Dialog = __webpack_require__(27);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Dialog2.default;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(28);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(40);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _reactCssModules = __webpack_require__(21);
	
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
	
	var styles = __webpack_require__(43);
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
	            return _react2.default.createElement(_Modal2.default, { isVisible: this.props.isVisible, onRequestClose: this.props.onRequestClose, width: this.props.width }, _react2.default.createElement("div", { styleName: "dialog" }, this.props.title && _react2.default.createElement("div", { styleName: "dialog-header" }, _react2.default.createElement("h1", { styleName: "dialog-title" }, this.props.title)), _react2.default.createElement("div", { styleName: "dialog-content" }, this.props.children), _react2.default.createElement("div", { styleName: "dialog-footer" }, _react2.default.createElement(_Button2.default, { color: "blue", onClick: this.props.onConfirm }, "确认"), _react2.default.createElement(_Button2.default, { color: "white", onClick: this.props.onRequestClose }, "取消"))));
	        }
	    }]);
	
	    return Dialog;
	}(_react.Component);
	Dialog = __decorate([(0, _reactCssModules2.default)(styles)], Dialog);
	exports.default = Dialog;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Modal = __webpack_require__(29);
	
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Modal2.default;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(1);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _utils = __webpack_require__(30);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _Fade = __webpack_require__(35);
	
	var _Fade2 = _interopRequireDefault(_Fade);
	
	var _reactCssModules = __webpack_require__(21);
	
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
	
	var styles = __webpack_require__(39);
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
	            if (!prevProps.isVisible && this.props.isVisible === true) {
	                this.setView();
	                _utils2.default.lockScroll();
	                window.addEventListener('resize', this.setView);
	            }
	            // modal hide
	            if (prevProps.isVisible === true && this.props.isVisible === false) {
	                window.removeEventListener('resize', this.setView);
	                this.hideModal();
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
	            var isVisible = this.props.isVisible ? this.props.isVisible : false;
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
	            return _react2.default.createElement(_Fade2.default, null, isVisible === true ? _react2.default.createElement("div", { onClick: function onClick(e) {
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _parseFormData = __webpack_require__(31);
	
	var _parseFormData2 = _interopRequireDefault(_parseFormData);
	
	var _lockScroll = __webpack_require__(32);
	
	var _lockScroll2 = _interopRequireDefault(_lockScroll);
	
	var _unlockScroll = __webpack_require__(33);
	
	var _unlockScroll2 = _interopRequireDefault(_unlockScroll);
	
	var _getScreenInfo = __webpack_require__(34);
	
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.default = objectToUrlencoded;
	
	var _lodash = __webpack_require__(25);
	
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Fade = __webpack_require__(36);
	
	var _Fade2 = _interopRequireDefault(_Fade);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Fade2.default;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(37);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = __webpack_require__(38);
	
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(593);

/***/ },
/* 38 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"enter":"enter_1c4SW","enterActive":"enterActive_nCJQw","leave":"leave_1oTp_","leaveActive":"leaveActive_3hTgH"};

/***/ },
/* 39 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"modal":"modal_uwXiR","icon-close":"icon-close_2uQN5","modal-backdrop":"modal-backdrop_29NrH","modal-header":"modal-header_3Ab1N","modal-footer":"modal-footer_3jnrI","modal-body":"modal-body_GggaJ","modal-title":"modal-title_3DcAt","modal-sub-title":"modal-sub-title_3hGWi","btn-red":"btn-red_33SHU"};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Button = __webpack_require__(41);
	
	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Button2.default;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	var _reactCssModules = __webpack_require__(21);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _classnames2 = __webpack_require__(19);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _lodash = __webpack_require__(25);
	
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
	
	var styles = __webpack_require__(42);
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
/* 42 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"btn":"btn_2aW__","focus":"focus_2Y5ov","active":"active_jFdNZ","disabled":"disabled_2NFJX","btn--hover":"btn--hover_344mi","btn--blue":"btn--blue_1nEIM","btn--orange":"btn--orange_v4x5_","btn--red":"btn--red_2gsfS","btn--white":"btn--white_3rWF3"};

/***/ },
/* 43 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"dialog":"dialog_3WJ-C","dialog-header":"dialog-header_2-TPB","dialog-title":"dialog-title_3u0QW","dialog-content":"dialog-content_32Qrk","dialog-footer":"dialog-footer_2IuSC"};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(7);
	
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(7);
	
	var _Branding = __webpack_require__(46);
	
	var _Branding2 = _interopRequireDefault(_Branding);
	
	var _Colophon = __webpack_require__(59);
	
	var _Colophon2 = _interopRequireDefault(_Colophon);
	
	var _actions = __webpack_require__(8);
	
	var _apis = __webpack_require__(62);
	
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Branding = __webpack_require__(47);
	
	var _Branding2 = _interopRequireDefault(_Branding);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Branding2.default;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	var _layout = __webpack_require__(48);
	
	var _Dropdown = __webpack_require__(50);
	
	var _Logo = __webpack_require__(55);
	
	var _Logo2 = _interopRequireDefault(_Logo);
	
	var _reactCssModules = __webpack_require__(21);
	
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
	
	var styles = __webpack_require__(58);
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
	            }), _react2.default.createElement(_Dropdown.DropdownItemSep, null), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/user/shelf" }, "查看全部"))), _react2.default.createElement(_Dropdown.Dropdown, { title: _react2.default.createElement("span", null, username, isAdmin && _react2.default.createElement("span", { className: "badge" }, "Admin")) }, isAdmin === true && _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/console" }, "控制台")), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/user/shelf" }, "书架")), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/user/profile" }, "个人主页")), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/user/preference" }, "设置")), _react2.default.createElement(_Dropdown.DropdownItemSep, null), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement("a", { onClick: this.handleLogoutClick, href: "#" }, "退出")))) : _react2.default.createElement("div", { styleName: "nav--user" }, _react2.default.createElement("ul", { styleName: "nav-links" }, _react2.default.createElement("li", { styleName: "nav-item" }, _react2.default.createElement(_reactRouter.Link, { styleName: "nav-link", to: "/signin" }, "登录")), _react2.default.createElement("li", { styleName: "nav-item" }, _react2.default.createElement(_reactRouter.Link, { styleName: "nav-link", to: "/signup" }, "注册")))))));
	        }
	    }]);
	
	    return Branding;
	}(_react.Component);
	Branding = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], Branding);
	exports.default = Branding;

/***/ },
/* 48 */
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
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
	exports.DropdownItemSep = exports.Dropdown = exports.DropdownItem = undefined;
	
	var _Dropdown = __webpack_require__(51);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _DropdownItem = __webpack_require__(53);
	
	var _DropdownItem2 = _interopRequireDefault(_DropdownItem);
	
	var _DropdownItemSep = __webpack_require__(54);
	
	var _DropdownItemSep2 = _interopRequireDefault(_DropdownItemSep);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.DropdownItem = _DropdownItem2.default;
	exports.Dropdown = _Dropdown2.default;
	exports.DropdownItemSep = _DropdownItemSep2.default;
	exports.default = _Dropdown2.default;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(21);
	
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
	
	var styles = __webpack_require__(52);
	// todo: 放到 utils/dom 里面
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
	            if (!isDescendant(this.dropdown, e.target)) {
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
/* 52 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"dropdown-item":"dropdown-item_2C1dz light-link_2QDeA","light-link":"light-link_2QDeA","dropdown":"dropdown_SZfyp","dropdown-toggle":"dropdown-toggle_34Qfd","dropdown-menu":"dropdown-menu_1HgbS","dropdown-caret":"dropdown-caret_FcBWI","sep":"sep_10Y0o","dropdown-menu--dark":"dropdown-menu--dark_6eVPX dropdown-menu_1HgbS"};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = __webpack_require__(52);
	function DropdownItem(props) {
	    return _react2.default.createElement("li", null, typeof props.children === 'string' ? _react2.default.createElement("div", { className: styles['dropdown-item'] }, props.children) : _react2.default.cloneElement(props.children, {
	        className: styles['dropdown-item']
	    }));
	}
	exports.default = DropdownItem;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = __webpack_require__(52);
	function DropdownItemSep(props) {
	    return _react2.default.createElement("li", { className: styles['sep'] });
	}
	exports.default = DropdownItemSep;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Logo = __webpack_require__(56);
	
	var _Logo2 = _interopRequireDefault(_Logo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Logo2.default;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = __webpack_require__(57);
	function Logo(props) {
	    return _react2.default.createElement("h1", { className: styles['logo-wrap'] }, _react2.default.createElement(_reactRouter.Link, { className: styles['logo'], to: props.to }, "readr"));
	}
	exports.default = Logo;

/***/ },
/* 57 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"logo-wrap":"logo-wrap_CP5P9","logo":"logo_3qcbV"};

/***/ },
/* 58 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"nav-link":"nav-link_3X0T8","branding":"branding_8EVAt","dropdown-menu":"dropdown-menu_5Sc50","username":"username_3Mm6z","nav-links":"nav-links_2wTYY","nav":"nav_1oj1z","nav--user":"nav--user_1L7Lb","dropdown-recent-reading":"dropdown-recent-reading_2oyjH","nav-item":"nav-item_f83bh","recent-reading":"recent-reading_1kJKh"};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Colophon = __webpack_require__(60);
	
	var _Colophon2 = _interopRequireDefault(_Colophon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Colophon2.default;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Container = __webpack_require__(49);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	var _reactCssModules = __webpack_require__(21);
	
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
	
	var styles = __webpack_require__(61);
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
/* 61 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"colophon":"colophon_FVdSR"};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _apis = __webpack_require__(63);
	
	var apis = _interopRequireWildcard(_apis);
	
	var _externalApis = __webpack_require__(70);
	
	var externalApis = _interopRequireWildcard(_externalApis);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = Object.assign({}, apis, externalApis);

/***/ },
/* 63 */
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
	
	var _callApi = __webpack_require__(64);
	
	var _callApi2 = _interopRequireDefault(_callApi);
	
	var _config = __webpack_require__(69);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function addCollection(data) {
	    return (0, _callApi2.default)(_config2.default.LOCAL + 'collections', { method: 'POST', data: data });
	}
	/**
	 * data: name, author, description, cover, content
	 * todo
	 */
	function addBook(data) {
	    return (0, _callApi2.default)(_config2.default.LOCAL + 'books', { method: 'POST', data: data });
	}
	/**
	 * data: name, slug, description
	 * todo
	 */
	function addAuthor(data) {
	    return (0, _callApi2.default)(_config2.default.LOCAL + 'authors', { method: 'POST', data: data });
	}
	function searchAuthors(query) {
	    return (0, _callApi2.default)(_config2.default.LOCAL + 'authors?q=' + query);
	}
	function searchBooks(query) {
	    return (0, _callApi2.default)(_config2.default.LOCAL + 'books?q=' + query);
	}
	function setProgress(bookId, data) {
	    (0, _callApi2.default)(_config2.default.LOCAL + 'user/books/' + bookId + '/progress', { method: 'PUT', data: data });
	}
	function deleteBook(id) {
	    return (0, _callApi2.default)(_config2.default.LOCAL + 'books/' + id, {
	        method: 'DELETE'
	    });
	}
	function logout() {
	    return (0, _callApi2.default)(_config2.default.LOCAL + 'auth/revoke', {
	        method: 'PUT'
	    });
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.callApi = callApi;
	
	__webpack_require__(65);
	
	var _parseFormData = __webpack_require__(31);
	
	var _parseFormData2 = _interopRequireDefault(_parseFormData);
	
	var _handleResponse = __webpack_require__(66);
	
	var _handleResponse2 = _interopRequireDefault(_handleResponse);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultConfig = {
	    dataType: 'json',
	    method: 'GET',
	    credentials: 'same-origin'
	};
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
	    if (method === 'POST' || method === 'PUT') {
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
	            'Access-Control-Request-Method': method
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
	function callApi(fullUrl) {
	    var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    return fetch(fullUrl, parseConfig(config)).then(function (response) {
	        if (response.status !== 204) {
	            return response.json().then(function (json) {
	                return { json: json, response: response };
	            });
	        }
	        return { response: response, json: {} };
	    }).then(function (_ref) {
	        var json = _ref.json;
	        var response = _ref.response;
	
	        if (response.ok) {
	            return (0, _handleResponse2.default)({ json: json, response: response }, config.schema);
	        } else {
	            return Promise.reject(json);
	        }
	    });
	}
	exports.default = callApi;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(12))(753);

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _normalizr = __webpack_require__(11);
	
	var _humps = __webpack_require__(67);
	
	var _humps2 = _interopRequireDefault(_humps);
	
	var _parseQueryString = __webpack_require__(68);
	
	var _parseQueryString2 = _interopRequireDefault(_parseQueryString);
	
	var _lodash = __webpack_require__(25);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getNextPageUrl(response) {
	    var link = response.headers.get('link');
	    if (!link) {
	        return '';
	    }
	    var nextLink = link.split(',').find(function (s) {
	        return s.indexOf('rel="next"') > -1;
	    });
	    if (!nextLink) {
	        return '';
	    }
	    return nextLink.split(';')[0].trim().slice(1, -1);
	}
	function handleResponse(data, schema) {
	    var json = data.json;
	    var response = data.response;
	
	    var camelizedJson = _humps2.default.camelizeKeys(json);
	    if (typeof schema !== 'undefined') {
	        var nextPageUrl = getNextPageUrl(response);
	        return Object.assign({}, (0, _normalizr.normalize)(camelizedJson, schema), {
	            nextPageUrl: nextPageUrl,
	            nextPage: _lodash2.default.get((0, _parseQueryString2.default)(nextPageUrl.split('?')[1] || ''), 'page', 0)
	        });
	    }
	    return camelizedJson;
	}
	exports.default = handleResponse;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(12))(752);

/***/ },
/* 68 */
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
/* 69 */
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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetchDoubanBooks = fetchDoubanBooks;
	
	var _jsonp = __webpack_require__(71);
	
	var _jsonp2 = _interopRequireDefault(_jsonp);
	
	var _config = __webpack_require__(69);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function fetchDoubanBooks(query) {
	    return (0, _jsonp2.default)(_config2.default.DOUBAN_BOOKS + '/search?count=5&q=' + query, {});
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _handleResponse = __webpack_require__(66);
	
	var _handleResponse2 = _interopRequireDefault(_handleResponse);
	
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
	                        resolve((0, _handleResponse2.default)({ json: json }, config.schema));
	                    };
	                })
	            };
	        }();
	
	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }
	}
	exports.default = jsonp;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ConsoleMaster = __webpack_require__(73);
	
	var _ConsoleMaster2 = _interopRequireDefault(_ConsoleMaster);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ConsoleMaster2.default;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(7);
	
	var _Container = __webpack_require__(49);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	var _ConsoleBranding = __webpack_require__(74);
	
	var _ConsoleBranding2 = _interopRequireDefault(_ConsoleBranding);
	
	var _actions = __webpack_require__(8);
	
	var _ConsoleSidebar = __webpack_require__(77);
	
	var _ConsoleSidebar2 = _interopRequireDefault(_ConsoleSidebar);
	
	var _menus = __webpack_require__(80);
	
	var _menus2 = _interopRequireDefault(_menus);
	
	var _reactCssModules = __webpack_require__(21);
	
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
	
	var styles = __webpack_require__(81);
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
	            return _react2.default.createElement("div", null, _react2.default.createElement(_ConsoleBranding2.default, { isAdmin: isAdmin, username: username }), _react2.default.createElement(_Container2.default, { isFluid: true }, _react2.default.createElement(_ConsoleSidebar2.default, { menuMapping: _menus2.default, currentPath: pathname }), _react2.default.createElement("div", { styleName: "content" }, this.props.children)));
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ConsoleBranding = __webpack_require__(75);
	
	var _ConsoleBranding2 = _interopRequireDefault(_ConsoleBranding);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ConsoleBranding2.default;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	var _Container = __webpack_require__(49);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	var _Dropdown = __webpack_require__(50);
	
	var _reactCssModules = __webpack_require__(21);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _Logo = __webpack_require__(55);
	
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
	
	// const brandingStyles = require('../Branding/Branding.css')
	var styles = __webpack_require__(76);
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
	            return _react2.default.createElement("div", { styleName: "branding" }, _react2.default.createElement(_Container2.default, { isFluid: true, className: "clearfix" }, _react2.default.createElement("div", null, _react2.default.createElement(_Logo2.default, { to: "/console" }), _react2.default.createElement("div", { styleName: "sub-name" }, _react2.default.createElement("span", { styleName: "sub" }, "Console")), _react2.default.createElement("div", { styleName: "nav right" }, username ? _react2.default.createElement(_Dropdown.Dropdown, { style: "dark", title: _react2.default.createElement("span", null, username, isAdmin && _react2.default.createElement("span", { className: "badge badge--dark" }, "Admin")) }, _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/" }, "回到 Readr")), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/user/profile" }, "个人主页")), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/user/preference" }, "设置")), _react2.default.createElement(_Dropdown.DropdownItemSep, null), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement("a", { href: "/logout" }, "退出"))) : _react2.default.createElement("ul", { className: "nav-links" }, _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: "/signin" }, "登录")), _react2.default.createElement("li", null, _react2.default.createElement(_reactRouter.Link, { to: "/signup" }, "注册")))))));
	        }
	    }]);
	
	    return ConsoleBranding;
	}(_react.Component);
	ConsoleBranding = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], ConsoleBranding);
	exports.default = ConsoleBranding;

/***/ },
/* 76 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"branding":"branding_3goRG","sep":"sep_AT6Gl","sub":"sub_Iyhms","right":"right_1ZAQP","sub-name":"sub-name_2T8ah","nav":"nav_10yn4 nav_1oj1z"};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ConsoleSidebar = __webpack_require__(78);
	
	var _ConsoleSidebar2 = _interopRequireDefault(_ConsoleSidebar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ConsoleSidebar2.default;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	var _Icon = __webpack_require__(17);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _reactCssModules = __webpack_require__(21);
	
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
	
	var styles = __webpack_require__(79);
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
/* 79 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"sidebar-left":"sidebar-left_2Nfva","nav-side":"nav-side_3L8f6","nav-side-root":"nav-side-root_1_PBg nav-side_3L8f6","nav-side-root--current":"nav-side-root--current_3BV5t nav-side-root_1_PBg nav-side_3L8f6","nav-side-sub":"nav-side-sub_5Q_f5 nav-side_3L8f6","nav-item":"nav-item_2r1zn","icon":"icon_26PwG","root-item":"root-item_VPwuM nav-item_2r1zn","root-item--current":"root-item--current_3LMnD root-item_VPwuM nav-item_2r1zn","sub-item":"sub-item_waA-O nav-item_2r1zn","sub-item--current":"sub-item--current_3CzmM sub-item_waA-O nav-item_2r1zn"};

/***/ },
/* 80 */
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
	        displayName: 'Manage Books',
	        path: '/console/books'
	    }, {
	        component: 'addbook',
	        displayName: 'Add Book',
	        path: '/console/books/new'
	    }, {
	        component: 'addcollection',
	        displayName: 'Add Collection',
	        path: '/console/collections/new'
	    }]
	}, {
	    component: 'users',
	    displayName: '',
	    path: '/console/users',
	    subMenu: [{
	        component: 'manageusers',
	        displayName: 'Manage Users',
	        path: '/console/users'
	    }]
	}];
	exports.default = menus;

/***/ },
/* 81 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"content":"content_2oBQl"};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'viewer/book/:id',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(1, function (require) {
	            fn(null, __webpack_require__(83).default);
	        });
	    }
	};

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
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: '/',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(2, function (require) {
	            fn(null, __webpack_require__(106).default);
	        });
	    }
	};

/***/ },
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
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
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'browse',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(3, function (require) {
	            fn(null, __webpack_require__(131).default);
	        });
	    }
	};

/***/ },
/* 131 */,
/* 132 */,
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'book/:id',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(4, function (require) {
	            fn(null, __webpack_require__(134).default);
	        });
	    }
	};

/***/ },
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'collections',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(5, function (require) {
	            fn(null, __webpack_require__(139).default);
	        });
	    }
	};

/***/ },
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'collections/:id',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(6, function (require) {
	            fn(null, __webpack_require__(146).default);
	        });
	    }
	};

/***/ },
/* 146 */,
/* 147 */,
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'signin',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(7, function (require) {
	            fn(null, __webpack_require__(149).default);
	        });
	    }
	};

/***/ },
/* 149 */,
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'signup',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(8, function (require) {
	            fn(null, __webpack_require__(151).default);
	        });
	    }
	};

/***/ },
/* 151 */,
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'shelf',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(9, function (require) {
	            fn(null, __webpack_require__(153).default);
	        });
	    }
	};

/***/ },
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'preference',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(10, function (require) {
	            fn(null, __webpack_require__(159).default);
	        });
	    }
	};

/***/ },
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'profile',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(11, function (require) {
	            fn(null, __webpack_require__(164).default);
	        });
	    }
	};

/***/ },
/* 164 */,
/* 165 */,
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'books',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(12, function (require) {
	            fn(null, __webpack_require__(167).default);
	        });
	    }
	};

/***/ },
/* 167 */,
/* 168 */,
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'users',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(13, function (require) {
	            fn(null, __webpack_require__(170).default);
	        });
	    }
	};

/***/ },
/* 170 */,
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'books/new',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(14, function (require) {
	            fn(null, __webpack_require__(172).default);
	        });
	    }
	};

/***/ },
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'collections/new',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(15, function (require) {
	            fn(null, __webpack_require__(176).default);
	        });
	    }
	};

/***/ },
/* 176 */,
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: '*',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(16, function (require) {
	            fn(null, __webpack_require__(178).default);
	        });
	    }
	};

/***/ },
/* 178 */,
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(673);

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configureStore;
	
	var _redux = __webpack_require__(181);
	
	var _reduxThunk = __webpack_require__(182);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reducers = __webpack_require__(183);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _api = __webpack_require__(186);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _modifyResponse = __webpack_require__(187);
	
	var _modifyResponse2 = _interopRequireDefault(_modifyResponse);
	
	var _handleInitialState = __webpack_require__(188);
	
	var _handleInitialState2 = _interopRequireDefault(_handleInitialState);
	
	var _reduxLogger = __webpack_require__(189);
	
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
	        store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_api2.default, _reduxThunk2.default, _modifyResponse2.default));
	        return store;
	    }
	    if (env === 'production') {
	        store = (0, _redux.createStore)(_reducers2.default, (0, _handleInitialState2.default)(), (0, _redux.applyMiddleware)(_api2.default, _reduxThunk2.default, _modifyResponse2.default));
	    } else {
	        store = (0, _redux.createStore)(_reducers2.default, (0, _handleInitialState2.default)(), (0, _redux.compose)((0, _redux.applyMiddleware)(_api2.default, _reduxThunk2.default, _modifyResponse2.default, (0, _reduxLogger2.default)({ collapsed: true }))));
	    }
	    return store;
	}

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(455);

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(657);

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _redux = __webpack_require__(181);
	
	var _reactRouterRedux = __webpack_require__(179);
	
	var _components = __webpack_require__(184);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _paginate = __webpack_require__(185);
	
	var _paginate2 = _interopRequireDefault(_paginate);
	
	var _lodash = __webpack_require__(25);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
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
	
	    if ((action.response || action.error) && action.payload) {
	        return _lodash2.default.assign({}, state, _defineProperty({}, action.payload, action.response));
	    }
	    return state;
	}
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
	        types: ['BOOKS_REQUEST', 'BOOKS_SUCCESS', 'BOOKS_FAILURE'],
	        merge: function merge(action) {
	            return action.merge;
	        }
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
	var rootReducer = (0, _redux.combineReducers)({
	    payloads: payloads,
	    components: _components2.default,
	    elements: elements,
	    routing: _reactRouterRedux.routerReducer,
	    entities: entities,
	    errorMessage: errorMessage,
	    pagination: pagination,
	    session: session
	});
	exports.default = rootReducer;

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _redux = __webpack_require__(181);
	
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
	function dialog() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    if (action.type === 'OPEN_DIALOG') {
	        return Object.assign({}, state, { isVisible: true }, action.data);
	    }
	    if (action.type === 'CLOSE_DIALOG') {
	        return {
	            isVisible: false
	        };
	    }
	    return state;
	}
	function basicModal() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    if (action.type === 'OPEN_BASIC_MODAL') {
	        return Object.assign({}, state, { isVisible: true }, action.data);
	    }
	    if (action.type === 'CLOSE_BASIC_MODAL') {
	        return {
	            isVisible: false
	        };
	    }
	    return state;
	}
	var components = (0, _redux.combineReducers)({
	    notifications: notifications,
	    dialog: dialog,
	    basicModal: basicModal
	});
	exports.default = components;

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = paginate;
	
	var _lodash = __webpack_require__(25);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	// Creates a reducer managing pagination, given the action types to handle,
	// and a function telling how to extract the key from an action.
	// todo: types length should be 3
	function paginate(_ref) {
	    var types = _ref.types;
	    var mapActionToKey = _ref.mapActionToKey;
	    var merge = _ref.merge;
	
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
	                    ids: !merge || merge(action) ? _lodash2.default.union(state.ids, action.response.result) : action.response.result,
	                    // 不使用 union 会导致 server rendering 问题？
	                    // ids: action.response.result,
	                    nextPageUrl: action.response.nextPageUrl,
	                    nextPage: action.response.nextPage,
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
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _callApi = __webpack_require__(64);
	
	var _callApi2 = _interopRequireDefault(_callApi);
	
	var _config = __webpack_require__(69);
	
	var _config2 = _interopRequireDefault(_config);
	
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
	                apiUrl = _config2.default.LOCAL;
	            }
	            var fullUrl = apiUrl + endpoint;
	            var options = { schema: schema };
	            if (typeof extendedOptions !== 'undefined') {
	                options = Object.assign({}, options, extendedOptions);
	            }
	            return (0, _callApi2.default)(fullUrl, options).then(function (response) {
	                return next(function (dispatch) {
	                    dispatch(actionWith({
	                        response: response,
	                        type: successType
	                    }));
	                    return {
	                        ok: true,
	                        response: response
	                    };
	                });
	            }, function (error) {
	                return next(function (dispatch) {
	                    dispatch(actionWith({
	                        type: failureType,
	                        error: error.message || '发生未知 API 错误！(Code 1000)'
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
/* 187 */
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
/* 188 */
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
/* 189 */
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
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWI4YjE5MmUyNTJhNjM1MTdkNzUiLCJ3ZWJwYWNrOi8vL3NyYy9lbnRyeS9hcHAudHN4Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJfcmVhY3Rfa2l0X2RsbFwiIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvcmVhY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2tpdF9kbGwiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29udGFpbmVycy9Sb290LnRzeCIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2tpdF9kbGwiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3N0b3JlL2FjdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3N0b3JlL2FjdGlvbnMvYm9vay50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc2NoZW1hcy50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ci9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF91dGlsc19kbGwiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiX3V0aWxzX2RsbFwiIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9zdG9yZS9hY3Rpb25zL2NvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3N0b3JlL2FjdGlvbnMvdXNlci50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvQWxlcnQvaW5kZXgudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9BbGVydC9BbGVydC50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0ljb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0ljb24vSWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vfi9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9JY29uL3N2Zy1pY29ucy50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWNzcy1tb2R1bGVzL2Rpc3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0ljb24vSWNvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvQWxlcnQvX2FsZXJ0LnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0FsZXJ0L0FsZXJ0cy50c3giLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF91dGlsc19kbGwiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0RpYWxvZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRGlhbG9nL0RpYWxvZy50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL01vZGFsL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Nb2RhbC9Nb2RhbC50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy91dGlscy9wYXJzZUZvcm1EYXRhLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy91dGlscy9sb2NrU2Nyb2xsLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy91dGlscy91bmxvY2tTY3JvbGwudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3V0aWxzL2dldFNjcmVlbkluZm8udHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19hbmltYXRpb25zL0ZhZGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19hbmltYXRpb25zL0ZhZGUvRmFkZS50c3giLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19hbmltYXRpb25zL0ZhZGUvRmFkZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTW9kYWwvX21vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0J1dHRvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vQnV0dG9uL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vQnV0dG9uL19idXR0b24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9EaWFsb2cvRGlhbG9nLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvQXBwTWFzdGVyLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29udGFpbmVycy9BcHBDb21tb24udHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0JyYW5kaW5nL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9CcmFuZGluZy9CcmFuZGluZy50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19sYXlvdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19sYXlvdXQvQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRHJvcGRvd24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0Ryb3Bkb3duL0Ryb3Bkb3duLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Ecm9wZG93bi9Ecm9wZG93bi5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Ecm9wZG93bi9Ecm9wZG93bkl0ZW0udHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Ecm9wZG93bi9Ecm9wZG93bkl0ZW1TZXAudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0xvZ28vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvTG9nby9Mb2dvLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0xvZ28vTG9nby5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9CcmFuZGluZy9CcmFuZGluZy5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbG9waG9uL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbG9waG9uL0NvbG9waG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbG9waG9uL0NvbG9waG9uLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvYXBpcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvYXBpcy9hcGlzLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy91dGlscy9jYWxsQXBpLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tYnJvd3NlcmlmeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3V0aWxzX2RsbCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvdXRpbHMvaGFuZGxlUmVzcG9uc2UudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9odW1wcy9odW1wcy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3V0aWxzX2RsbCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvdXRpbHMvcGFyc2VRdWVyeVN0cmluZy50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29uZmlnLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9hcGlzL2V4dGVybmFsQXBpcy50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvdXRpbHMvanNvbnAudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvQ29uc29sZU1hc3Rlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29udGFpbmVycy9Db25zb2xlTWFzdGVyL0NvbnNvbGVNYXN0ZXIudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnNvbGVCcmFuZGluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db25zb2xlQnJhbmRpbmcvQ29uc29sZUJyYW5kaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnNvbGVCcmFuZGluZy9Db25zb2xlQnJhbmRpbmcuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db25zb2xlU2lkZWJhci9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db25zb2xlU2lkZWJhci9Db25zb2xlU2lkZWJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db25zb2xlU2lkZWJhci9Db25zb2xlU2lkZWJhci5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbnRlbnQvbWVudXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29udGFpbmVycy9Db25zb2xlTWFzdGVyL0NvbnNvbGVNYXN0ZXIuY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQXBwSG9tZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL0Jyb3dzZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL0Jvb2tEZXRhaWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Db2xsZWN0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL0NvbGxlY3Rpb25EZXRhaWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9TaWduaW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9TaWdudXAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9TaGVsZi9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Qcm9maWxlL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VVc2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FkZEJvb2svaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9BZGRDb2xsZWN0aW9uL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTm9NYXRjaC9pbmRleC50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9zdG9yZS9jb25maWd1cmVTdG9yZS50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2tpdF9kbGwiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvcmVkdWNlcnMvY29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvcmVkdWNlcnMvcGFnaW5hdGUudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3N0b3JlL21pZGRsZXdhcmUvYXBpLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9zdG9yZS9taWRkbGV3YXJlL21vZGlmeVJlc3BvbnNlLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy91dGlscy9oYW5kbGVJbml0aWFsU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1sb2dnZXIvbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDekZrQzs7QUFDVDs7OztBQUNtQzs7QUFDbkI7Ozs7QUFDSDs7QUFDbUI7O0FBQ007Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0QsS0FBVyxRQUFtQjtBQUM5QixLQUFhLFVBQXNDLHlFQUFRO0FBRXRELHlCQUFDLEVBQVMsa0JBQVUsc0NBQVEsT0FBa0Isa0JBQWE7QUFDeEQsMkJBQ0osZ0JBQVMsc0NBQU0sT0FBUSxTQUNyQixn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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0IiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rSWRzLCBtb3JlTW9kdWxlcykge1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pXG4gXHRcdFx0XHRjYWxsYmFja3MucHVzaC5hcHBseShjYWxsYmFja3MsIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSk7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGNodW5rSWRzLCBtb3JlTW9kdWxlcyk7XG4gXHRcdHdoaWxlKGNhbGxiYWNrcy5sZW5ndGgpXG4gXHRcdFx0Y2FsbGJhY2tzLnNoaWZ0KCkuY2FsbChudWxsLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0fTtcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0Ly8gQXJyYXkgbWVhbnMgXCJsb2FkaW5nXCIsIGFycmF5IGNvbnRhaW5zIGNhbGxiYWNrc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MDowXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkLCBjYWxsYmFjaykge1xuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKVxuIFx0XHRcdHJldHVybiBjYWxsYmFjay5jYWxsKG51bGwsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIGFuIGFycmF5IG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWQpIHtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0ucHVzaChjYWxsYmFjayk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtjYWxsYmFja107XG4gXHRcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuIFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuIFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuXG4gXHRcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIjtcbiBcdFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWx0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgOWI4YjE5MmUyNTJhNjM1MTdkNzVcbiAqKi8iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSwgUm91dGVyLCBtYXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vaXNvbW9ycGhpYy9yb3V0ZXMnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgc3luY0hpc3RvcnlXaXRoU3RvcmUgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi4vaXNvbW9ycGhpYy9zdG9yZS9jb25maWd1cmVTdG9yZSdcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpXG5jb25zdCBoaXN0b3J5ID0gc3luY0hpc3RvcnlXaXRoU3RvcmUoYnJvd3Nlckhpc3RvcnksIHN0b3JlKVxuXG5tYXRjaCh7IGhpc3RvcnksIHJvdXRlcyB9LCAoZXJyb3IsIHJlZGlyZWN0TG9jYXRpb24sIHJlbmRlclByb3BzKSA9PiB7XG4gIHJlbmRlcihcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxSb3V0ZXIgey4uLnJlbmRlclByb3BzfSAvPlxuICAgIDwvUHJvdmlkZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKVxufSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9lbnRyeS9hcHAudHN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMzgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2tpdF9kbGxcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9yZWFjdF9raXRfZGxsO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJfcmVhY3Rfa2l0X2RsbFwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvcmVhY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNjAwKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbFxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSb290IGZyb20gJy4uL2NvbnRhaW5lcnMvUm9vdCdcbmltcG9ydCBBcHBNYXN0ZXIgZnJvbSAnLi4vY29udGFpbmVycy9BcHBNYXN0ZXInXG5pbXBvcnQgQXBwQ29tbW9uIGZyb20gJy4uL2NvbnRhaW5lcnMvQXBwQ29tbW9uJ1xuaW1wb3J0IENvbnNvbGVNYXN0ZXIgZnJvbSAnLi4vY29udGFpbmVycy9Db25zb2xlTWFzdGVyJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudDogUm9vdCxcblxuICBjaGlsZFJvdXRlczogW3tcbiAgICBjb21wb25lbnQ6IEFwcE1hc3RlcixcblxuICAgIGNoaWxkUm91dGVzOiBbXG4gICAgICByZXF1aXJlKCcuL1ZpZXdlcicpXG4gICAgICAsIHtcbiAgICAgIGNvbXBvbmVudDogQXBwQ29tbW9uLFxuXG4gICAgICBjaGlsZFJvdXRlczogW1xuICAgICAgICByZXF1aXJlKCcuL0FwcEhvbWUnKSxcbiAgICAgICAgcmVxdWlyZSgnLi9Ccm93c2UnKSxcbiAgICAgICAgcmVxdWlyZSgnLi9Cb29rRGV0YWlsJyksXG4gICAgICAgIHJlcXVpcmUoJy4vQ29sbGVjdGlvbnMnKSxcbiAgICAgICAgcmVxdWlyZSgnLi9Db2xsZWN0aW9uRGV0YWlsJyksXG4gICAgICAgIHJlcXVpcmUoJy4vU2lnbmluJyksXG4gICAgICAgIHJlcXVpcmUoJy4vU2lnbnVwJyksXG5cbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6ICd1c2VyJyxcblxuICAgICAgICAgIGNoaWxkUm91dGVzOiBbXG4gICAgICAgICAgICByZXF1aXJlKCcuL1NoZWxmJyksXG4gICAgICAgICAgICByZXF1aXJlKCcuL1ByZWZlcmVuY2UnKSxcbiAgICAgICAgICAgIHJlcXVpcmUoJy4vUHJvZmlsZScpLFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICB9LCB7XG4gICAgICBjb21wb25lbnQ6IENvbnNvbGVNYXN0ZXIsXG5cbiAgICAgIHBhdGg6ICdjb25zb2xlJyxcblxuICAgICAgaW5kZXhSb3V0ZTogcmVxdWlyZSgnLi9NYW5hZ2VCb29rcycpLFxuICAgICAgY2hpbGRSb3V0ZXM6IFtcbiAgICAgICAgcmVxdWlyZSgnLi9NYW5hZ2VCb29rcycpLFxuICAgICAgICByZXF1aXJlKCcuL01hbmFnZVVzZXJzJyksXG4gICAgICAgIHJlcXVpcmUoJy4vQWRkQm9vaycpLFxuICAgICAgICByZXF1aXJlKCcuL0FkZENvbGxlY3Rpb24nKSxcbiAgICAgICAgcmVxdWlyZSgnLi9Ob01hdGNoJyksXG4gICAgICBdXG4gICAgfV1cbiAgfV1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgaGlkZU5vdGlmaWNhdGlvbiwgY2xvc2VEaWFsb2csIHVzZXJBdXRoIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCB7IEFsZXJ0cyB9IGZyb20gJy4uL2VsZW1lbnRzL0FsZXJ0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IERpYWxvZyBmcm9tICcuLi9lbGVtZW50cy9EaWFsb2cnXG5cbmludGVyZmFjZSBJQWxsUHJvcHMge1xuICBub3RpZmljYXRpb25zOiBhbnlcbiAgaGlkZU5vdGlmaWNhdGlvbjogYW55XG4gIGVycm9yTWVzc2FnZTogc3RyaW5nXG4gIHNlbmROb3RpZmljYXRpb246IGFueVxuICBkaWFsb2c6IGFueVxuICBjbG9zZURpYWxvZzogYW55XG4gIHVzZXJBdXRoOiBhbnlcbiAgcm91dGluZzogYW55XG4gIHNlc3Npb246IGFueVxufVxuXG5jbGFzcyBSb290IGV4dGVuZHMgQ29tcG9uZW50PElBbGxQcm9wcywge30+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCBoYXNOZXdFcnJvck1zZyA9IHRoaXMucHJvcHMuZXJyb3JNZXNzYWdlLmxlbmd0aCAhPT0gbmV4dFByb3BzLmVycm9yTWVzc2FnZS5sZW5ndGhcbiAgICBjb25zdCByb3V0ZXJDaGFuZ2VkID0gbmV4dFByb3BzLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucy5wYXRobmFtZSAhPT0gdGhpcy5wcm9wcy5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMucGF0aG5hbWVcblxuICAgIGlmIChoYXNOZXdFcnJvck1zZykge1xuICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKF8ubGFzdChuZXh0UHJvcHMuZXJyb3JNZXNzYWdlKSwgJ2Vycm9yJylcbiAgICB9XG5cbiAgICBpZiAocm91dGVyQ2hhbmdlZCkge1xuICAgICAgLy8g6L+U5Zue6aG26YOoXG4gICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwXG5cbiAgICAgIC8vIOeugOWNleadg+mZkOmqjOivgVxuICAgICAgaWYgKG5leHRQcm9wcy5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMucGF0aG5hbWUuaW5kZXhPZignY29uc29sZScpICE9PSAtMSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIucm9sZSAhPT0gJ2FkbWluJykge1xuICAgICAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goJy8nKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy51c2VyQXV0aCgpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkaWFsb2csIGNsb3NlRGlhbG9nIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtcm9vdFwiPlxuICAgICAgICA8RGlhbG9nXG4gICAgICAgICAgaXNWaXNpYmxlPXtkaWFsb2cuaXNWaXNpYmxlfVxuICAgICAgICAgIHRpdGxlPXtkaWFsb2cudGl0bGV9XG4gICAgICAgICAgb25Db25maXJtPXtkaWFsb2cub25Db25maXJtfVxuICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZURpYWxvZ31cbiAgICAgICAgICB3aWR0aD17NTAwfVxuICAgICAgICAgID5cbiAgICAgICAgICB7ZGlhbG9nLmNvbnRlbnR9XG4gICAgICAgIDwvRGlhbG9nPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5ub3RpZmljYXRpb25zLmZpbHRlcihub3RpID0+IG5vdGkudmlzaWJsZSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8QWxlcnRzXG4gICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXt0aGlzLnByb3BzLmhpZGVOb3RpZmljYXRpb259XG4gICAgICAgICAgICAgIG1lc3NhZ2VzPXt0aGlzLnByb3BzLm5vdGlmaWNhdGlvbnMubWFwKG5vdGkgPT4gKHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBub3RpLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgdHlwZTogbm90aS50eXBlLFxuICAgICAgICAgICAgICAgIHZpc2libGU6IG5vdGkudmlzaWJsZSxcbiAgICAgICAgICAgICAgICBpZDogbm90aS5pZFxuICAgICAgICAgICAgICB9KSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PHt9LCB7fSwgSUFsbFByb3BzPihcbiAgc3RhdGUgPT4gKHtcbiAgICBub3RpZmljYXRpb25zOiBzdGF0ZS5jb21wb25lbnRzLm5vdGlmaWNhdGlvbnMsXG4gICAgZXJyb3JNZXNzYWdlOiBzdGF0ZS5lcnJvck1lc3NhZ2UsXG4gICAgZGlhbG9nOiBzdGF0ZS5jb21wb25lbnRzLmRpYWxvZyxcbiAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLFxuICAgIHNlc3Npb246IHN0YXRlLnNlc3Npb24sXG4gIH0pLFxuICB7IHNlbmROb3RpZmljYXRpb24sIGhpZGVOb3RpZmljYXRpb24sIGNsb3NlRGlhbG9nLCB1c2VyQXV0aCB9XG4pKFJvb3QpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb250YWluZXJzL1Jvb3QudHN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNDQ5KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0ICogZnJvbSAnLi4vYWN0aW9ucy9ib29rJ1xuZXhwb3J0ICogZnJvbSAnLi4vYWN0aW9ucy9jb21wb25lbnRzJ1xuZXhwb3J0ICogZnJvbSAnLi4vYWN0aW9ucy91c2VyJ1xuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVmFsdWUobmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQ0hBTkdFX1ZBTFVFJyxcbiAgICBuYW1lLFxuICAgIHZhbHVlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQobmFtZSwgZGF0YSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdVUERBVEVfRUxFTUVOVCcsXG4gICAgbmFtZSxcbiAgICBkYXRhXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL2FjdGlvbnMvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgeyBTY2hlbWFzIH0gZnJvbSAnLi4vLi4vc2NoZW1hcydcblxuZXhwb3J0IHR5cGUgZmV0Y2hCb29rcyA9IHtcbiAgZmxvd1R5cGU/OiAnbmV3ZXN0JyB8ICdob3QnXG4gIHBhZ2U/OiBudW1iZXJcbiAgbWVyZ2U/OiBib29sZWFuXG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hCb29rcyhjb25maWc/OiBmZXRjaEJvb2tzKSB7XG4gIGNvbnN0IGRlZmF1bHRDb25maWcgPSB7IGZsb3dUeXBlOiAnbmV3ZXN0JywgcGFnZTogMSwgbWVyZ2U6IHRydWV9XG4gIGNvbnN0IHsgZmxvd1R5cGUsIHBhZ2UsIG1lcmdlIH0gPSBPYmplY3QuYXNzaWduKGRlZmF1bHRDb25maWcsIGNvbmZpZyB8fCB7fSlcblxuICByZXR1cm4ge1xuICAgIC8vIGZvciBwYWdpbmF0ZVxuICAgIGZsb3dUeXBlLFxuICAgIG1lcmdlLFxuICAgIENBTExfQVBJOiB7XG4gICAgICB0eXBlczogWydCT09LU19SRVFVRVNUJywgJ0JPT0tTX1NVQ0NFU1MnLCAnQk9PS1NfRkFJTFVSRSddLFxuICAgICAgZW5kcG9pbnQ6IGBib29rcz9leGNsdWRlPWNvbnRlbnQmcGFnZT0ke3BhZ2V9YCxcbiAgICAgIHNjaGVtYTogU2NoZW1hcy5CT09LX0FSUkFZLFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hCb29rKGJvb2tJZCwgZmllbGRzPzogQXJyYXk8YW55Pikge1xuICBsZXQgZW5kcG9pbnQgPSBgYm9va3MvJHtib29rSWR9YFxuXG4gIGlmIChmaWVsZHMpIHtcbiAgICBlbmRwb2ludCArPSBgP2ZpZWxkcz0ke2ZpZWxkcy5qb2luKCcsJyl9YFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBib29rSWQsXG4gICAgQ0FMTF9BUEk6IHtcbiAgICAgIHR5cGVzOiBbJ0JPT0tfUkVRVUVTVCcsICdCT09LX1NVQ0NFU1MnLCAnQk9PS19GQUlMVVJFJ10sXG4gICAgICBlbmRwb2ludCxcbiAgICAgIHNjaGVtYTogU2NoZW1hcy5CT09LXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENvbGxlY3Rpb25zKGZsb3dUeXBlOiAnbmV3ZXN0JyB8ICdob3QnID0gJ25ld2VzdCcpIHtcbiAgcmV0dXJuIHtcbiAgICBmbG93VHlwZSxcbiAgICBDQUxMX0FQSToge1xuICAgICAgdHlwZXM6IFsnQ09MTEVDVElPTlNfUkVRVUVTVCcsICdDT0xMRUNUSU9OU19TVUNDRVNTJywgJ0NPTExFQ1RJT05TX0ZBSUxVUkUnXSxcbiAgICAgIGVuZHBvaW50OiBgY29sbGVjdGlvbnNgLFxuICAgICAgc2NoZW1hOiBTY2hlbWFzLkNPTExFQ1RJT05fQVJSQVlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQ29sbGVjdGlvbihjb2xsZWN0aW9uSWQpIHtcbiAgcmV0dXJuIHtcbiAgICBjb2xsZWN0aW9uSWQsXG4gICAgQ0FMTF9BUEk6IHtcbiAgICAgIHR5cGVzOiBbJ0NPTExFQ1RJT05fUkVRVUVTVCcsICdDT0xMRUNUSU9OX1NVQ0NFU1MnLCAnQ09MTEVDVElPTl9GQUlMVVJFJ10sXG4gICAgICBlbmRwb2ludDogYGNvbGxlY3Rpb25zLyR7Y29sbGVjdGlvbklkfWAsXG4gICAgICBzY2hlbWE6IFNjaGVtYXMuQ09MTEVDVElPTlxuICAgIH1cbiAgfVxufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZmV0Y2hCb29rQ29udGVudChib29rSWQpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBib29rSWQsXG4vLyAgICAgQ0FMTF9BUEk6IHtcbi8vICAgICAgIHR5cGVzOiBbJ0JPT0tfQ09OVEVOVF9SRVFVRVNUJywgJ0JPT0tfQ09OVEVOVF9TVUNDRVNTJywgJ0JPT0tfQ09OVEVOVF9GQUlMVVJFJ10sXG4vLyAgICAgICBlbmRwb2ludDogYGJvb2tzLyR7Ym9va0lkfS9jb250ZW50YCxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5CT09LXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG4vL1xuLy8gZXhwb3J0IGZ1bmN0aW9uIGZldGNoQm9va0luZm8oYm9va0lkKSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgYm9va0lkLFxuLy8gICAgIENBTExfQVBJOntcbi8vICAgICAgIHR5cGVzOiBbJ0JPT0tfSU5GT19SRVFVRVNUJywgJ0JPT0tfSU5GT19TVUNDRVNTJywgJ0JPT0tfSU5GT19GQUlMVVJFJ10sXG4vLyAgICAgICBlbmRwb2ludDogYGJvb2tzLyR7Ym9va0lkfWAsXG4vLyAgICAgICBzY2hlbWE6IFNjaGVtYXMuQk9PS19BUlJBWVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZmV0Y2hEb3ViYW5Cb29rU2VhcmNoUmVzdWx0cyhxdWVyeSkge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHF1ZXJ5LFxuLy8gICAgIENBTExfQVBJOiB7XG4vLyAgICAgICB0eXBlczogWydET1VCQU5fQk9PS19TRUFSQ0hfUkVRVUVTVCcsICdET1VCQU5fQk9PS19TRUFSQ0hfU1VDQ0VTUycsICdET1VCQU5fQk9PS19TRUFSQ0hfRkFJTFVSRSddLFxuLy8gICAgICAgZW5kcG9pbnQ6IGBzZWFyY2g/Y291bnQ9NSZxPSR7cXVlcnl9YCxcbi8vICAgICAgIGFwaVVybDogQXBpUm9vdHMuRE9VQkFOX0JPT0tTLFxuLy8gICAgICAgc2NoZW1hOiBTY2hlbWFzLkRPVUJBTl9CT09LX1NFQVJDSF9SRVNVTFRTLFxuLy8gICAgICAgZXh0ZW5kZWRPcHRpb25zOiB7IHVzZUpzb25wOiB0cnVlIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEJvb2tzKHF1ZXJ5KSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgcXVlcnksXG4vLyAgICAgQ0FMTF9BUEk6IHtcbi8vICAgICAgIHR5cGVzOiBbJ0JPT0tfU0VBUkNIX1JFUVVFU1QnLCAnQk9PS19TRUFSQ0hfU1VDQ0VTUycsICdCT09LX1NFQVJDSF9GQUlMVVJFJ10sXG4vLyAgICAgICBlbmRwb2ludDogYHNlYXJjaD9xPSR7cXVlcnl9YCxcbi8vICAgICAgIGFwaVVybDogQXBpUm9vdHMuTE9DQUwsXG4vLyAgICAgICBzY2hlbWE6IFNjaGVtYXMuTUFUQ0hFRF9CT09LX0FSUkFZXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9hY3Rpb25zL2Jvb2sudHNcbiAqKi8iLCJpbXBvcnQgeyBTY2hlbWEsIGFycmF5T2YsIG5vcm1hbGl6ZSwgdW5pb25PZiB9IGZyb20gJ25vcm1hbGl6cidcblxuY29uc3QgYm9vayA9IG5ldyBTY2hlbWEoJ2Jvb2tzJywge1xuICBpZEF0dHJpYnV0ZTogJ2lkJ1xufSlcblxuY29uc3QgY29sbGVjdGlvbiA9IG5ldyBTY2hlbWEoJ2Jvb2tDb2xsZWN0aW9ucycsIHtcbiAgaWRBdHRyaWJ1dGU6ICdpZCdcbn0pXG5cbmNvbnN0IHByb2ZpbGUgPSBuZXcgU2NoZW1hKCdwcm9maWxlcycsIHtcbiAgaWRBdHRyaWJ1dGU6ICdpZCdcbn0pXG5cbmNvbnN0IHVzZXIgPSBuZXcgU2NoZW1hKCd1c2VycycsIHtcbiAgaWRBdHRyaWJ1dGU6ICdpZCdcbn0pXG5cbmNvbnN0IGRvdWJhbkJvb2sgPSBuZXcgU2NoZW1hKCdkb3ViYW5Cb29rcycsIHtcbiAgaWRBdHRyaWJ1dGU6ICdpZCdcbn0pXG5cbmNvbnN0IGJvb2tQcm9ncmVzcyA9IG5ldyBTY2hlbWEoJ2Jvb2tzJywge1xuICBpZEF0dHJpYnV0ZTogJ2Jvb2tJZCdcbn0pXG5cbmNvbnN0IG1hdGNoZWRCb29rcyA9IG5ldyBTY2hlbWEoJ2Jvb2tzJywge1xuICBpZEF0dHJpYnV0ZTogJ2Jvb2tJZCdcbn0pXG5cbmV4cG9ydCBjb25zdCBTY2hlbWFzID0ge1xuICBCT09LOiBib29rLFxuICBCT09LX1BST0dSRVNTOiBib29rUHJvZ3Jlc3MsXG4gIEJPT0tfQVJSQVk6IGFycmF5T2YoYm9vayksXG4gIERPVUJBTl9CT09LX1NFQVJDSF9SRVNVTFRTOiB7Ym9va3M6IGFycmF5T2YoZG91YmFuQm9vayl9LFxuICBVU0VSX0FSUkFZOiBhcnJheU9mKHVzZXIpLFxuICBNQVRDSEVEX0JPT0tfQVJSQVk6IGFycmF5T2YobWF0Y2hlZEJvb2tzKSxcbiAgQ09MTEVDVElPTjogY29sbGVjdGlvbixcbiAgQ09MTEVDVElPTl9BUlJBWTogYXJyYXlPZihjb2xsZWN0aW9uKSxcbiAgUFJPRklMRTogcHJvZmlsZVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc2NoZW1hcy50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMTIpKSg2ODApO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ci9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF91dGlsc19kbGxcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfdXRpbHNfZGxsO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJfdXRpbHNfZGxsXCJcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IHR5cGUgTXNnVHlwZSA9ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnd2FybmluZycgfCAnb25nb2luZydcbmV4cG9ydCBmdW5jdGlvbiBzZW5kTm90aWZpY2F0aW9uKG1lc3NhZ2U6IHN0cmluZywgbXNnVHlwZTogTXNnVHlwZSA9ICdzdWNjZXNzJywgdCA9IDIwMDApIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBjb25zdCBpZCA9IE1hdGgucmFuZG9tKCkudG9GaXhlZCg4KS5zdWJzdHIoMilcblxuICAgIGRpc3BhdGNoKHNob3dOb3RpZmljYXRpb24oaWQsIG1lc3NhZ2UsIG1zZ1R5cGUpKVxuICAgIGlmICh0ICE9PSAwKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goaGlkZU5vdGlmaWNhdGlvbihpZCkpXG4gICAgICB9LCB0KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgU0hPV19OT1RJRklDQVRJT04gPSAnU0hPV19OT1RJRklDQVRJT04nXG5leHBvcnQgZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbihpZDogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIG1zZ1R5cGU6IE1zZ1R5cGUgPSAnc3VjY2VzcycpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTSE9XX05PVElGSUNBVElPTixcbiAgICBtZXNzYWdlLFxuICAgIG1zZ1R5cGUsXG4gICAgaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgSElERV9OT1RJRklDQVRJT04gPSAnSElERV9OT1RJRklDQVRJT04nXG5leHBvcnQgZnVuY3Rpb24gaGlkZU5vdGlmaWNhdGlvbihpZDogc3RyaW5nKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogSElERV9OT1RJRklDQVRJT04sXG4gICAgaWRcbiAgfVxufVxuXG4vLyBkaWFsb2dcbmV4cG9ydCB0eXBlIG9wZW5EaWFsb2cgPSB7XG4gIHRpdGxlPzogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xuICBvbkNvbmZpcm06ICgpID0+IHZvaWRcbn1cbmV4cG9ydCBmdW5jdGlvbiBvcGVuRGlhbG9nKGRhdGE6IG9wZW5EaWFsb2cpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnT1BFTl9ESUFMT0cnLFxuICAgIGRhdGFcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VEaWFsb2coKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0NMT1NFX0RJQUxPRydcbiAgfVxufVxuXG4vLyBiYXNpYyBtb2RhbFxuZXhwb3J0IHR5cGUgb3BlbkJhc2ljTW9kYWwgPSB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgc3ViVGl0bGU/OiBzdHJpbmdcbiAgY29udGVudD86IEpTWC5FbGVtZW50XG59XG5leHBvcnQgZnVuY3Rpb24gb3BlbkJhc2ljTW9kYWwoZGF0YTogb3BlbkJhc2ljTW9kYWwpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnT1BFTl9CQVNJQ19NT0RBTCcsXG4gICAgZGF0YVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUJhc2ljTW9kYWwoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0NMT1NFX0JBU0lDX01PREFMJ1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9hY3Rpb25zL2NvbXBvbmVudHMudHNcbiAqKi8iLCJpbXBvcnQgeyBTY2hlbWFzIH0gZnJvbSAnLi4vLi4vc2NoZW1hcydcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJBdXRoKCkge1xuICByZXR1cm4ge1xuICAgIENBTExfQVBJOiB7XG4gICAgICB0eXBlczogWydVU0VSX0FVVEhfUkVRVUVTVCcsICdVU0VSX0FVVEhfU1VDQ0VTUycsICdVU0VSX0FVVEhfRkFJTFVSRSddLFxuICAgICAgZW5kcG9pbnQ6ICdhdXRoJ1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQcm9maWxlKCkge1xuICByZXR1cm4ge1xuICAgIHBheWxvYWQ6ICdwcm9maWxlJyxcbiAgICBDQUxMX0FQSToge1xuICAgICAgdHlwZXM6IFsnUFJPRklMRV9SRVFVRVNUJywgJ1BST0ZJTEVfU1VDQ0VTUycsICdQUk9GSUxFX0ZBSUxVUkUnXSxcbiAgICAgIGVuZHBvaW50OiBgdXNlci9wcm9maWxlYCxcbiAgICB9XG4gIH1cbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGZldGNoUHVibGljUHJvZmlsZSgpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBDQUxMX0FQSToge1xuLy8gICAgICAgdHlwZXM6IFsnUFJPRklMRV9SRVFVRVNUJywgJ1BST0ZJTEVfU1VDQ0VTUycsICdQUk9GSUxFX0ZBSUxVUkUnXSxcbi8vICAgICAgIGVuZHBvaW50OiBgdXNlci9wcm9maWxlYCxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5QUk9GSUxFXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFVzZXJMaXN0KCkge1xuICByZXR1cm4ge1xuICAgIENBTExfQVBJOiB7XG4gICAgICB0eXBlczogWydVU0VSX0xJU1RfUkVRVUVTVCcsICdVU0VSX0xJU1RfU1VDQ0VTUycsICdVU0VSX0xJU1RfRkFJTFVSRSddLFxuICAgICAgZW5kcG9pbnQ6ICd1c2VycycsXG4gICAgICBzY2hlbWE6IFNjaGVtYXMuVVNFUl9BUlJBWVxuICAgIH1cbiAgfVxufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZmV0Y2hTaGVsZih1c2VySWQpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICB1c2VySWQsXG4vLyAgICAgQ0FMTF9BUEk6IHtcbi8vICAgICAgIHR5cGVzOiBbJ1NIRUxGX1JFUVVFU1QnLCAnU0hFTEZfU1VDQ0VTUycsICdTSEVMRl9GQUlMVVJFJ10sXG4vLyAgICAgICBlbmRwb2ludDogYHVzZXJzLyR7dXNlcklkfS9zaGVsZmAsXG4vLyAgICAgICBzY2hlbWE6IFNjaGVtYXMuQk9PS19BUlJBWSxcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoU2hlbGYoKSB7XG4gIHJldHVybiB7XG4gICAgcGF5bG9hZDogJ2Jvb2tTaGVsZicsXG4gICAgQ0FMTF9BUEk6IHtcbiAgICAgIHR5cGVzOiBbJ1NIRUxGX1JFUVVFU1QnLCAnU0hFTEZfU1VDQ0VTUycsICdTSEVMRl9GQUlMVVJFJ10sXG4gICAgICBlbmRwb2ludDogYHVzZXIvYm9va3Mvc2hlbGZgLFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQcm9ncmVzcyhib29rSWQpIHtcbiAgcmV0dXJuIHtcbiAgICBib29rSWQsXG4gICAgcGF5bG9hZDogJ3Byb2dyZXNzJyxcbiAgICBDQUxMX0FQSToge1xuICAgICAgdHlwZXM6IFsnUFJPR1JFU1NfUkVRVUVTVCcsICdQUk9HUkVTU19TVUNDRVNTJywgJ1BST0dSRVNTX0ZBSUxVUkUnXSxcbiAgICAgIGVuZHBvaW50OiBgdXNlci9ib29rcy8ke2Jvb2tJZH0vcHJvZ3Jlc3NgLFxuICAgICAgLy8gc2NoZW1hOiBTY2hlbWFzLkJPT0tfUFJPR1JFU1NcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL2FjdGlvbnMvdXNlci50c1xuICoqLyIsImltcG9ydCBBbGVydCBmcm9tICcuL0FsZXJ0J1xuaW1wb3J0IEFsZXJ0cyBmcm9tICcuL0FsZXJ0cydcbmV4cG9ydCB7IEFsZXJ0cywgQWxlcnQgfVxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL0FsZXJ0L2luZGV4LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1zZ1R5cGUgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL2NvbXBvbmVudHMnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vX2FsZXJ0LnNjc3MnKVxuLy8gaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbWVzc2FnZTogc3RyaW5nXG4gIHR5cGU/OiBNc2dUeXBlXG4gIG9uUmVxdWVzdENsb3NlPzogKCkgPT4gdm9pZFxuICB2aXNpYmxlOiBib29sZWFuXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgQWxlcnQgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ3N1Y2Nlc3MnXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLnZpc2libGUgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZU5hbWU9e2BhbGVydC0tJHt0eXBlfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJhbGVydC1jbG9zZVwiPlxuICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezE1fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiY29udGVudFwiPnt0aGlzLnByb3BzLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvQWxlcnQvQWxlcnQudHN4XG4gKiovIiwiaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJ1xuZXhwb3J0IGRlZmF1bHQgSWNvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvSWNvbi9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgc3ZnSWNvbnMgZnJvbSAnLi9zdmctaWNvbnMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vSWNvbi5jc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgbmFtZTogc3RyaW5nXG4gIG9uQ2xpY2s/OiBhbnlcbiAgc2l6ZT86IG51bWJlclxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgc3R5bGVOYW1lPzogc3RyaW5nXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgSWNvbiBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIHt9PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgbmFtZSwgb25DbGljaywgc2l6ZSB9ID0gdGhpcy5wcm9wc1xuICAgIGxldCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKCdpY29uJywgYGljb24tJHtuYW1lfWAsIHRoaXMucHJvcHMuY2xhc3NOYW1lKVxuXG4gICAgaWYgKHR5cGVvZiBzdmdJY29uc1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ljb24gbmFtZSAoJXMpIG5vdCBmb3VuZCEgJywgbmFtZSlcbiAgICB9XG5cbiAgICBzaXplID0gc2l6ZSB8fCAzMFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIHN0eWxlTmFtZT1cImljb25cIiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25DbGljaz17b25DbGlja30+XG4gICAgICAgIDxzdmcgey4uLnN2Z0ljb25zW25hbWVdLnZpZXdCb3ggJiYge3ZpZXdCb3g6IHN2Z0ljb25zW25hbWVdLnZpZXdCb3h9fSB3aWR0aD17c2l6ZX0gaGVpZ2h0PXtzaXplfSBzdHlsZU5hbWU9XCJzdmctc2hhcGVcIj5cbiAgICAgICAgICA8cGF0aCBkPXtzdmdJY29uc1tuYW1lXS5wYXRofS8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9zcGFuPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJY29uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9JY29uL0ljb24udHN4XG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgY2xvc2U6IHtcbiAgICBwYXRoOiAnTTcuNDggOGwzLjc1IDMuNzUtMS40OCAxLjQ4TDYgOS40OGwtMy43NSAzLjc1LTEuNDgtMS40OEw0LjUyIDggLjc3IDQuMjVsMS40OC0xLjQ4TDYgNi41MmwzLjc1LTMuNzUgMS40OCAxLjQ4eicsXG4gICAgdmlld0JveDogJzAgMCAxMiAxNidcbiAgfSxcbiAgc3Rhcjoge1xuICAgIHBhdGg6ICdNMTQgNmwtNC45LS42NEw3IDEgNC45IDUuMzYgMCA2bDMuNiAzLjI2TDIuNjcgMTQgNyAxMS42NyAxMS4zMyAxNGwtLjkzLTQuNzR6JyxcbiAgfSxcbiAgdXNlcnM6IHtcbiAgICBwYXRoOiAnTTE2IDExYzEuNjYgMCAyLjk5LTEuMzQgMi45OS0zUzE3LjY2IDUgMTYgNWMtMS42NiAwLTMgMS4zNC0zIDNzMS4zNCAzIDMgM3ptLTggMGMxLjY2IDAgMi45OS0xLjM0IDIuOTktM1M5LjY2IDUgOCA1QzYuMzQgNSA1IDYuMzQgNSA4czEuMzQgMyAzIDN6bTAgMmMtMi4zMyAwLTcgMS4xNy03IDMuNVYxOWgxNHYtMi41YzAtMi4zMy00LjY3LTMuNS03LTMuNXptOCAwYy0uMjkgMC0uNjIuMDItLjk3LjA1IDEuMTYuODQgMS45NyAxLjk3IDEuOTcgMy40NVYxOWg2di0yLjVjMC0yLjMzLTQuNjctMy41LTctMy41eicsXG4gIH0sXG4gIGZvbGRlcjoge1xuICAgIHBhdGg6ICdNMTAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY4YzAtMS4xLS45LTItMi0yaC04bC0yLTJ6JyxcbiAgfSxcbiAgZGF0YWJhc2U6IHtcbiAgICBwYXRoOiAnTTIwLjIgNS45bC44LS44QzE5LjYgMy43IDE3LjggMyAxNiAzcy0zLjYuNy01IDIuMWwuOC44QzEzIDQuOCAxNC41IDQuMiAxNiA0LjJzMyAuNiA0LjIgMS43em0tLjkuOGMtLjktLjktMi4xLTEuNC0zLjMtMS40cy0yLjQuNS0zLjMgMS40bC44LjhjLjctLjcgMS42LTEgMi41LTEgLjkgMCAxLjguMyAyLjUgMWwuOC0uOHpNMTkgMTNoLTJWOWgtMnY0SDVjLTEuMSAwLTIgLjktMiAydjRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnYtNGMwLTEuMS0uOS0yLTItMnpNOCAxOEg2di0yaDJ2MnptMy41IDBoLTJ2LTJoMnYyem0zLjUgMGgtMnYtMmgydjJ6J1xuICB9LFxuICBzdGF0aXN0aWNzOiB7XG4gICAgcGF0aDogJ00yMSAySDNjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoN3YySDh2Mmg4di0yaC0ydi0yaDdjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnptMCAxNEgzVjRoMTh2MTJ6JyxcbiAgfSxcbiAgYm9va3M6IHtcbiAgICBwYXRoOiAnTTIwLjU0IDUuMjNsLTEuMzktMS42OEMxOC44OCAzLjIxIDE4LjQ3IDMgMTggM0g2Yy0uNDcgMC0uODguMjEtMS4xNi41NUwzLjQ2IDUuMjNDMy4xNyA1LjU3IDMgNi4wMiAzIDYuNVYxOWMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjYuNWMwLS40OC0uMTctLjkzLS40Ni0xLjI3ek0xMiAxNy41TDYuNSAxMkgxMHYtMmg0djJoMy41TDEyIDE3LjV6TTUuMTIgNWwuODEtMWgxMmwuOTQgMUg1LjEyeicsXG4gICAgLy8gdmlld0JveDogJzMgMyAxOCAxOCdcbiAgfSxcbiAgYmFjazoge1xuICAgIC8vIHBhdGg6ICdNNzMyIDgzMmwtNTUgNTVsLTUwNSAtNTA1bDUwNSAtNTA1bDU1IDU0bC00NTEgNDUxeidcbiAgICAvLyBwYXRoOiAnTTE0IDZsLTQuOS0uNjRMNyAxIDQuOSA1LjM2IDAgNmwzLjYgMy4yNkwyLjY3IDE0IDcgMTEuNjcgMTEuMzMgMTRsLS45My00Ljc0eicsXG4gICAgcGF0aDogJ20gMjYsMjUgYyAtMC40Njc1NzQsMCAtMC45MDk0MzQsMC4xNjg2NSAtMS4yNSwwLjQzNzUgQyAyNC41NTUyNzksMjUuNTkxMjE1IDYuNjEzMDUxNiw0Mi41NDYyODUgNi40Njg3NSw0Mi43MTg3NSA2LjE3ODIzMzIsNDMuMDY1OTYgNiw0My41MTE4NyA2LDQ0IDYsNDQuNTE5NDYgNi4yMDY1NTY2LDQ0Ljk4ODE4IDYuNTMxMjUsNDUuMzQzNzUgNi42NjgzOTkyLDQ1LjQ5Mzk0MSAyNC42MjUsNjIuNDM3NSAyNC42MjUsNjIuNDM3NSBjIDAuNzU5ODQyLDAuNzI1MTUyIDIuMTIxODQyLDAuNzAwNDIxIDIuODQzNzUsLTAuMDYyNSAwLjcyMTkwOCwtMC43NjI5MyAwLjY3MjI0NCwtMi4xMjUwOTkgLTAuMDkzNzUsLTIuODQzNzUgTCAxMy4wMzEyNSw0NiA2NCw0NiBjIDEzLjg4ODg3MSwwIDI1LjY2MDM5MiwxMS42Mzk1NSAyNiwyNi4wMzEyNSAwLjAwMzUsMC4xNDA1NTcgMCwwLjc3NDg1IDAsMC45Njg3NSAwLDEuMTA4IDAuODkyLDIgMiwyIDEuMTA4LDAgMiwtMC44OTIgMiwtMiBsIDAsLTEuMDYyNSBDIDkzLjYxMDIwOCw1NS40MTk0IDgwLjExODUyOSw0MiA2NCw0MiBMIDEzLjAzMTI1LDQyIEMgMTMuMDMxMjUsNDIgMjcuMzYyNzMyLDI4LjQ5NTk1OSAyNy41LDI4LjM0Mzc1IDI3LjgxOTcxLDI3Ljk4OTI1IDI4LDI3LjUxNDk3IDI4LDI3IDI4LDI1Ljg5NTQzIDI3LjEwNDU2OSwyNSAyNiwyNSB6JyxcbiAgICB2aWV3Qm94OiAnMCAwIDEwMCAxMjUnXG4gIH0sXG4gIHByZWZlcmVuY2U6IHtcbiAgICBwYXRoOiAnTSAxNy43ODEyNSA4Ljk2ODc1IEEgMi4wMDAyIDIuMDAwMiAwIDAgMCAxNiAxMSBMIDE2IDU2LjI1IEMgMTIuMDA4MTg4IDU3LjE2ODMwMiA5IDYwLjc0MTQwNiA5IDY1IEMgOSA2OS4yNTkyMjQgMTIuMDA3NDI3IDcyLjg2MzUzNCAxNiA3My43ODEyNSBMIDE2IDg5IEEgMi4wMDAyIDIuMDAwMiAwIDEgMCAyMCA4OSBMIDIwIDczLjc4MTI1IEMgMjMuOTkyNTczIDcyLjg2MzUzNCAyNyA2OS4yNTkyMjQgMjcgNjUgQyAyNyA2MC43NDE0MDYgMjMuOTkxODEyIDU3LjE2ODMwMiAyMCA1Ni4yNSBMIDIwIDExIEEgMi4wMDAyIDIuMDAwMiAwIDAgMCAxNy43ODEyNSA4Ljk2ODc1IHogTSA0OS43ODEyNSA4Ljk2ODc1IEEgMi4wMDAyIDIuMDAwMiAwIDAgMCA0OCAxMSBMIDQ4IDI2LjI1IEMgNDQuMDA4MTg4IDI3LjE2ODMwNSA0MSAzMC43NDE0MjMgNDEgMzUgQyA0MSAzOS4yNTkxMiA0NC4wMDc0MjcgNDIuODYzNTExIDQ4IDQzLjc4MTI1IEwgNDggODkgQSAyLjAwMDIgMi4wMDAyIDAgMSAwIDUyIDg5IEwgNTIgNDMuNzgxMjUgQyA1NS45OTI1NzMgNDIuODYzNTExIDU5IDM5LjI1OTEyIDU5IDM1IEMgNTkgMzAuNzQxNDIzIDU1Ljk5MTgxMiAyNy4xNjgzMDUgNTIgMjYuMjUgTCA1MiAxMSBBIDIuMDAwMiAyLjAwMDIgMCAwIDAgNDkuNzgxMjUgOC45Njg3NSB6IE0gODEuNzgxMjUgOC45Njg3NSBBIDIuMDAwMiAyLjAwMDIgMCAwIDAgODAgMTEgTCA4MCA1Ni4yNSBDIDc2LjAwODE4OCA1Ny4xNjgzMDIgNzMgNjAuNzQxNDA2IDczIDY1IEMgNzMgNjkuMjU5MjI0IDc2LjAwNzQyNyA3Mi44NjM1MzQgODAgNzMuNzgxMjUgTCA4MCA4OSBBIDIuMDAwMiAyLjAwMDIgMCAxIDAgODQgODkgTCA4NCA3My43ODEyNSBDIDg3Ljk5MjU3MyA3Mi44NjM1MzQgOTEgNjkuMjU5MjI0IDkxIDY1IEMgOTEgNjAuNzQxNDA2IDg3Ljk5MTgxMiA1Ny4xNjgzMDIgODQgNTYuMjUgTCA4NCAxMSBBIDIuMDAwMiAyLjAwMDIgMCAwIDAgODEuNzgxMjUgOC45Njg3NSB6IE0gNTAgMzAgQyA1Mi43ODUxMTYgMzAgNTUgMzIuMjE0ODggNTUgMzUgQyA1NSAzNy43ODUxMiA1Mi43ODUxMTYgNDAgNTAgNDAgQyA0Ny4yMTQ4ODQgNDAgNDUgMzcuNzg1MTIgNDUgMzUgQyA0NSAzMi4yMTQ4OCA0Ny4yMTQ4ODQgMzAgNTAgMzAgeiBNIDE4IDYwIEMgMjAuNzg1MTE2IDYwIDIzIDYyLjIxNDkgMjMgNjUgQyAyMyA2Ny43ODUyIDIwLjc4NTExNiA3MCAxOCA3MCBDIDE1LjIxNDg4NCA3MCAxMyA2Ny43ODUyIDEzIDY1IEMgMTMgNjIuMjE0OSAxNS4yMTQ4ODQgNjAgMTggNjAgeiBNIDgyIDYwIEMgODQuNzg1MTE2IDYwIDg3IDYyLjIxNDkgODcgNjUgQyA4NyA2Ny43ODUyIDg0Ljc4NTExNiA3MCA4MiA3MCBDIDc5LjIxNDg4NCA3MCA3NyA2Ny43ODUyIDc3IDY1IEMgNzcgNjIuMjE0OSA3OS4yMTQ4ODQgNjAgODIgNjAgeiAnLFxuICAgIHZpZXdCb3g6ICcwIDAgMTAwIDEyNSdcbiAgfSxcbiAgZm9udDoge1xuICAgIC8vIHBhdGg6ICdNMTQgOC43N3YtMS42bC0xLjk0LS42NC0uNDUtMS4wOS44OC0xLjg0LTEuMTMtMS4xMy0xLjgxLjkxLTEuMDktLjQ1LS42OS0xLjkyaC0xLjZsLS42MyAxLjk0LTEuMTEuNDUtMS44NC0uODgtMS4xMyAxLjEzLjkxIDEuODEtLjQ1IDEuMDlMMCA3LjIzdjEuNTlsMS45NC42NC40NSAxLjA5LS44OCAxLjg0IDEuMTMgMS4xMyAxLjgxLS45MSAxLjA5LjQ1LjY5IDEuOTJoMS41OWwuNjMtMS45NCAxLjExLS40NSAxLjg0Ljg4IDEuMTMtMS4xMy0uOTItMS44MS40Ny0xLjA5TDE0IDguNzV2LjAyek03IDExYy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM3onXG4gICAgcGF0aDogJ00xNCA2bC00LjktLjY0TDcgMSA0LjkgNS4zNiAwIDZsMy42IDMuMjZMMi42NyAxNCA3IDExLjY3IDExLjMzIDE0bC0uOTMtNC43NHonLFxuICB9LFxuICBhcnJvd1JpZ2h0OiB7XG4gICAgcGF0aDogJ00tMjkwLjksNDMwLjFsLTAuNy0wLjdsOC4yLTguNmwtOC4yLTguMmwwLjctMC43bDguOSw4LjlMLTI5MC45LDQzMC4xeicsXG4gICAgdmlld0JveDogJy0yOTIgNDExLjkgMTEgMTgnXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL0ljb24vc3ZnLWljb25zLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNjU4KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1jc3MtbW9kdWxlcy9kaXN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbFxuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJzdmctc2hhcGVcIjpcInN2Zy1zaGFwZV8zMC1rMFwiLFwiaWNvblwiOlwiaWNvbl9Wc1ZSNFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvSWNvbi9JY29uLmNzc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJhbGVydHNcIjpcImFsZXJ0c18zYW5haFwiLFwiYWxlcnRcIjpcImFsZXJ0XzNXQXllXCIsXCJhbGVydC0tc3VjY2Vzc1wiOlwiYWxlcnQtLXN1Y2Nlc3NfTlRSNUxcIixcImFsZXJ0LS1lcnJvclwiOlwiYWxlcnQtLWVycm9yXzFDMmZNXCIsXCJhbGVydC0td2FybmluZ1wiOlwiYWxlcnQtLXdhcm5pbmdfM2dTV3ZcIixcImNvbnRlbnRcIjpcImNvbnRlbnRfMVU0VHNcIixcImFsZXJ0LWNsb3NlXCI6XCJhbGVydC1jbG9zZV8xVVVMU1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvQWxlcnQvX2FsZXJ0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4vQWxlcnQnXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vX2FsZXJ0LnNjc3MnKVxuXG50eXBlIFRQcm9wcyA9IHtcbiAgY2hpbGRyZW4/OiBhbnlcbiAgb25SZXF1ZXN0Q2xvc2U/OiAoaWQ6IHN0cmluZykgPT4gdm9pZFxuICBtZXNzYWdlczoge1xuICAgIGNvbnRlbnQ6IHN0cmluZ1xuICAgIHZpc2libGU6IGJvb2xlYW5cbiAgICB0eXBlOiAnc3VjY2VzcycgfCAnZXJyb3InIHwgJ3dhcm5pbmcnXG4gICAgaWQ6IHN0cmluZ1xuICB9W11cbn1cblxuZnVuY3Rpb24gQWxlcnRzKHByb3BzOiBUUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFsZXJ0c30+XG4gICAgICB7XG4gICAgICAgIHByb3BzLm1lc3NhZ2VzLm1hcCgobXNnLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxBbGVydFxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHR5cGU9e21zZy50eXBlfVxuICAgICAgICAgICAgbWVzc2FnZT17bXNnLmNvbnRlbnR9XG4gICAgICAgICAgICB2aXNpYmxlPXttc2cudmlzaWJsZX1cbiAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHByb3BzLm9uUmVxdWVzdENsb3NlKG1zZy5pZClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydHNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL0FsZXJ0L0FsZXJ0cy50c3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKSkoNjc4KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF91dGlsc19kbGxcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IERpYWxvZyBmcm9tICcuL0RpYWxvZydcbmV4cG9ydCBkZWZhdWx0IERpYWxvZ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRGlhbG9nL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1vZGFsLCB7IElQcm9wcyBhcyBJTW9kYWxQcm9wcyB9IGZyb20gJy4uL01vZGFsJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9fZm9ybS9CdXR0b24nXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vRGlhbG9nLnNjc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSU1vZGFsUHJvcHMge1xuICBvbkNvbmZpcm06IGFueVxuICB0aXRsZTogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbFxuICAgICAgICBpc1Zpc2libGU9e3RoaXMucHJvcHMuaXNWaXNpYmxlfVxuICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZX1cbiAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XG4gICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiZGlhbG9nXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy50aXRsZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiZGlhbG9nLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoMSBzdHlsZU5hbWU9XCJkaWFsb2ctdGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L2gxPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJkaWFsb2ctY29udGVudFwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJkaWFsb2ctZm9vdGVyXCI+XG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiYmx1ZVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25Db25maXJtfT7noa7orqQ8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJ3aGl0ZVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2V9PuWPlua2iDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpYWxvZ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRGlhbG9nL0RpYWxvZy50c3hcbiAqKi8iLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCdcbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG5leHBvcnQgKiBmcm9tICcuL01vZGFsJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTW9kYWwvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEZhZGUgZnJvbSAnLi4vX2FuaW1hdGlvbnMvRmFkZSdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzOiBhbnkgPSByZXF1aXJlKCcuL19tb2RhbC5zY3NzJylcblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuICB3aWR0aDogbnVtYmVyXG4gIG9uUmVxdWVzdENsb3NlPzogKCkgPT4gdm9pZFxuICBpc1Zpc2libGU6IGJvb2xlYW5cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBtb2RhbEhlaWdodD86IG51bWJlclxuICBpc01vZGFsSGlkZGVuPzogYm9vbGVhblxuICBpc01vZGFsVmVydGljYWxDZW50ZXI/OiBib29sZWFuXG4gIGRvY3VtZW50SGVpZ2h0PzogbnVtYmVyXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgbW9kYWw6IGFueVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vZGFsSGVpZ2h0OiAwLFxuICAgICAgaXNNb2RhbEhpZGRlbjogZmFsc2UsXG4gICAgICBpc01vZGFsVmVydGljYWxDZW50ZXI6IHRydWVcbiAgICB9XG4gICAgdGhpcy5zZXRWaWV3ID0gdGhpcy5zZXRWaWV3LmJpbmQodGhpcylcbiAgICB0aGlzLmhpZGVNb2RhbCA9IHRoaXMuaGlkZU1vZGFsLmJpbmQodGhpcylcbiAgfVxuXG4gIGhpZGVNb2RhbCgpIHtcbiAgICB0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlKClcbiAgICB1dGlscy51bmxvY2tTY3JvbGwoKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNldFZpZXcpXG4gIH1cblxuICBzZXRWaWV3KCkge1xuICAgIGxldCBtb2RhbEhlaWdodCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMubW9kYWwpLmNsaWVudEhlaWdodFxuICAgIGxldCBpc01vZGFsVmVydGljYWxDZW50ZXIgPSB0cnVlXG4gICAgbGV0IGRvY3VtZW50SGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHRcblxuICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPCBtb2RhbEhlaWdodCkge1xuICAgICAgaXNNb2RhbFZlcnRpY2FsQ2VudGVyID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ID4gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpIHtcbiAgICAgIGRvY3VtZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtb2RhbEhlaWdodCxcbiAgICAgIGlzTW9kYWxWZXJ0aWNhbENlbnRlcixcbiAgICAgIGRvY3VtZW50SGVpZ2h0XG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAvLyBtb2RhbCBzaG93XG4gICAgaWYgKCFwcmV2UHJvcHMuaXNWaXNpYmxlICYmIHRoaXMucHJvcHMuaXNWaXNpYmxlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnNldFZpZXcoKVxuICAgICAgdXRpbHMubG9ja1Njcm9sbCgpXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zZXRWaWV3KVxuICAgIH1cblxuICAgIC8vIG1vZGFsIGhpZGVcbiAgICBpZiAocHJldlByb3BzLmlzVmlzaWJsZSA9PT0gdHJ1ZSAmJiB0aGlzLnByb3BzLmlzVmlzaWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNldFZpZXcpXG4gICAgICB0aGlzLmhpZGVNb2RhbCgpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50VW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zZXRWaWV3KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRlZmF1bHRDbGFzcyA9ICdtb2RhbCdcbiAgICBjb25zdCBtb2RhbElkID0gYG1vZGFsLSR7KG5ldyBEYXRlKCkpLnZhbHVlT2YoKX1gXG5cbiAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWUgPyBgJHtkZWZhdWx0Q2xhc3N9ICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YCA6IGRlZmF1bHRDbGFzc1xuXG4gICAgbGV0IHdpZHRoID0gdGhpcy5wcm9wcy53aWR0aCA/IHRoaXMucHJvcHMud2lkdGggOiA1MDBcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5zdGF0ZS5tb2RhbEhlaWdodFxuICAgIGxldCBzdHlsZSA9IHtcbiAgICAgIGJhY2tkcm9wOiB7fSxcbiAgICAgIHZlcnRpY2FsQ2VudGVyOiB7fSxcbiAgICAgIHNjcm9sbDoge30sXG4gICAgICBtb2RhbDoge31cbiAgICB9XG4gICAgbGV0IGlzVmlzaWJsZSA9IHRoaXMucHJvcHMuaXNWaXNpYmxlID8gdGhpcy5wcm9wcy5pc1Zpc2libGUgOiBmYWxzZVxuXG4gICAgc3R5bGUuYmFja2Ryb3AgPSB7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjIzKScsXG4gICAgICBvdmVyZmxvdzogJ3Njcm9sbCdcbiAgICB9XG5cbiAgICBzdHlsZS52ZXJ0aWNhbENlbnRlciA9IHtcbiAgICAgIHdpZHRoLFxuICAgICAgbWFyZ2luVG9wOiAtaGVpZ2h0IC8gMixcbiAgICAgIG1hcmdpbkxlZnQ6IC13aWR0aCAvIDIsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgdG9wOiAnNTAlJ1xuICAgIH1cblxuICAgIHN0eWxlLnNjcm9sbCA9IHtcbiAgICAgIHdpZHRoLFxuICAgICAgbWFyZ2luOiAnNTBweCBhdXRvJ1xuICAgIH1cblxuICAgIHN0eWxlLm1vZGFsID0ge31cblxuICAgIGlmICh0aGlzLnN0YXRlLmlzTW9kYWxWZXJ0aWNhbENlbnRlcikge1xuICAgICAgc3R5bGUubW9kYWwgPSBPYmplY3QuYXNzaWduKHt9LCBzdHlsZS5tb2RhbCwgc3R5bGUudmVydGljYWxDZW50ZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLm1vZGFsID0gT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUubW9kYWwsIHN0eWxlLnNjcm9sbClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZhZGU+XG4gICAgICAgIHtcbiAgICAgICAgICBpc1Zpc2libGUgPT09IHRydWUgPyAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgIC8vIOS9v+eUqOmYu+atouWGkuazoeS8mumAoOaIkOmXrumimFxuICAgICAgICAgICAgICAgIGlmICgoZS50YXJnZXQgYXMgYW55KS5xdWVyeVNlbGVjdG9yKGAjJHttb2RhbElkfWApKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhpZGVNb2RhbCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgc3R5bGVOYW1lPVwibW9kYWwtYmFja2Ryb3BcIlxuICAgICAgICAgICAgICBzdHlsZT17c3R5bGUuYmFja2Ryb3B9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGlkPXttb2RhbElkfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZS5tb2RhbH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBzdHlsZU5hbWU9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLm1vZGFsID0gcmVmIH0gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbFxuICAgICAgICB9XG4gICAgICA8L0ZhZGU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Nb2RhbC9Nb2RhbC50c3hcbiAqKi8iLCJpbXBvcnQgcGFyc2VGb3JtRGF0YSBmcm9tICcuL3BhcnNlRm9ybURhdGEnXG5pbXBvcnQgbG9ja1Njcm9sbCBmcm9tICcuL2xvY2tTY3JvbGwnXG5pbXBvcnQgdW5sb2NrU2Nyb2xsIGZyb20gJy4vdW5sb2NrU2Nyb2xsJ1xuaW1wb3J0IGdldFNjcmVlbkluZm8gZnJvbSAnLi9nZXRTY3JlZW5JbmZvJ1xuXG4vLyB0b2RvXG5mdW5jdGlvbiBhZGRaZXJvKG51bSkge1xuICBsZXQgbnVtU3RyV2l0aFplcm9cblxuICBpZiAobnVtIDwgMTApIHtcbiAgICBudW1TdHJXaXRoWmVybyA9ICcwJyArIG51bS50b1N0cmluZygpXG4gIH0gZWxzZSB7XG4gICAgbnVtU3RyV2l0aFplcm8gPSBudW0udG9TdHJpbmcoKVxuICB9XG5cbiAgcmV0dXJuIG51bVN0cldpdGhaZXJvXG59XG5cbi8vIHRvZG9cbmZ1bmN0aW9uIGdldFRpbWUoKSB7XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZSgpXG4gIGNvbnN0IHRpbWUgPSBbZC5nZXRGdWxsWWVhcigpLCBkLmdldE1vbnRoKCksIGQuZ2V0RGF0ZSgpLCBkLmdldEhvdXJzKCksIGQuZ2V0TWludXRlcygpLCBkLmdldFNlY29uZHMoKV1cblxuICByZXR1cm4gdGltZS5tYXAodCA9PiB7XG4gICAgcmV0dXJuIGFkZFplcm8odClcbiAgfSkuam9pbignJylcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwYXJzZUZvcm1EYXRhLFxuICBsb2NrU2Nyb2xsLFxuICB1bmxvY2tTY3JvbGwsXG4gIGdldFNjcmVlbkluZm9cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3V0aWxzL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvYmplY3RUb1VybGVuY29kZWQob3JpZ2luYWxPYmopIHtcbiAgbGV0IG9iamVjdCA9IF8uY2xvbmVEZWVwKG9yaWdpbmFsT2JqKVxuICBsZXQgZW5jb2RlZHVybCA9ICcnXG5cbiAgZm9yIChsZXQgcHJvcCBpbiBvYmplY3QpIHtcbiAgICBpZiAodHlwZW9mIG9iamVjdFtwcm9wXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG9iamVjdFtwcm9wXSA9IG9iamVjdFtwcm9wXS50b1N0cmluZygpXG4gICAgfVxuXG4gICAgZW5jb2RlZHVybCA9IGAke2VuY29kZWR1cmx9JHtwcm9wfT0ke29iamVjdFtwcm9wXX0mYFxuICB9XG5cbiAgcmV0dXJuIGVuY29kZWR1cmwuc3Vic3RyKDAsIGVuY29kZWR1cmwubGVuZ3RoIC0gMSlcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy91dGlscy9wYXJzZUZvcm1EYXRhLnRzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9ja1Njcm9sbCgpIHtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy91dGlscy9sb2NrU2Nyb2xsLnRzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdW5sb2NrU2Nyb2xsKCkge1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy91dGlscy91bmxvY2tTY3JvbGwudHNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JlZW5JbmZvKCk6IHtcbiAgdmlldzogYW55XG4gIHNjcmVlbjogYW55XG59IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS5lcnJvcignd2luZG93IGlzIHVuZGVmaW5lZCwgZW1wdHkgaW5mbyBvYmplY3Qgd2lsbCBiZSByZXR1cm5lZCEnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZpZXc6IHt9LFxuICAgICAgc2NyZWVuOiB7fVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmlldzoge1xuICAgICAgd2lkdGg6ICB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgYXNwZWN0UmF0aW86IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgfSxcbiAgICBzY3JlZW46IHdpbmRvdy5zY3JlZW5cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvdXRpbHMvZ2V0U2NyZWVuSW5mby50c1xuICoqLyIsImltcG9ydCBGYWRlIGZyb20gJy4vRmFkZSdcbmV4cG9ydCBkZWZhdWx0IEZhZGVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19hbmltYXRpb25zL0ZhZGUvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJ1xuY29uc3Qgc3R5bGVzOiBhbnkgPSByZXF1aXJlKCcuL0ZhZGUuY3NzJylcblxuY2xhc3MgRmFkZSBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBcbiAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgdHJhbnNpdGlvbk5hbWU9e3N0eWxlc31cbiAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17MzAwfVxuICAgICAgICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXszMDB9XG4gICAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYWRlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fYW5pbWF0aW9ucy9GYWRlL0ZhZGUudHN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNTkzKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImVudGVyXCI6XCJlbnRlcl8xYzRTV1wiLFwiZW50ZXJBY3RpdmVcIjpcImVudGVyQWN0aXZlX25DSlF3XCIsXCJsZWF2ZVwiOlwibGVhdmVfMW9UcF9cIixcImxlYXZlQWN0aXZlXCI6XCJsZWF2ZUFjdGl2ZV8zaFRnSFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2FuaW1hdGlvbnMvRmFkZS9GYWRlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJtb2RhbFwiOlwibW9kYWxfdXdYaVJcIixcImljb24tY2xvc2VcIjpcImljb24tY2xvc2VfMnVRTjVcIixcIm1vZGFsLWJhY2tkcm9wXCI6XCJtb2RhbC1iYWNrZHJvcF8yOU5ySFwiLFwibW9kYWwtaGVhZGVyXCI6XCJtb2RhbC1oZWFkZXJfM0FiMU5cIixcIm1vZGFsLWZvb3RlclwiOlwibW9kYWwtZm9vdGVyXzNqbnJJXCIsXCJtb2RhbC1ib2R5XCI6XCJtb2RhbC1ib2R5X0dnZ2FKXCIsXCJtb2RhbC10aXRsZVwiOlwibW9kYWwtdGl0bGVfM0RjQXRcIixcIm1vZGFsLXN1Yi10aXRsZVwiOlwibW9kYWwtc3ViLXRpdGxlXzNoR1dpXCIsXCJidG4tcmVkXCI6XCJidG4tcmVkXzMzU0hVXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Nb2RhbC9fbW9kYWwuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9CdXR0b24vaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vX2J1dHRvbi5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBzdHlsZU5hbWU/OiBhbnlcbiAgc2l6ZT86ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSdcbiAgaXNGbHVpZD86IGJvb2xlYW5cbiAgY29sb3I/OiAncmVkJyB8ICdibHVlJyB8ICdncmVlbicgfCAnb3JhbmdlJyB8ICd3aGl0ZSdcbiAgdG8/OiBzdHJpbmdcbiAgb25DbGljaz86IGFueVxuICB3aWR0aD86IG51bWJlciB8IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgaXNNb3VzZU92ZXI/OiBib29sZWFuXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzTW91c2VPdmVyOiBmYWxzZSxcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgb25DbGljaywgY2xhc3NOYW1lLCBjb2xvciwgc2l6ZSwgaXNGbHVpZCwgd2lkdGggfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgc3R5bGUgPSB7fVxuXG4gICAgY29uc3Qgc3R5bGVOYW1lID0gY2xhc3NuYW1lcyh7XG4gICAgICAnYnRuJzogdHJ1ZSxcbiAgICAgICdidG4tLWhvdmVyJzogdGhpcy5zdGF0ZS5pc01vdXNlT3ZlcixcbiAgICAgICdidG4tLWZsdWlkJzogaXNGbHVpZCxcbiAgICAgIFtgYnRuLS0ke2NvbG9yfWBdOiBCb29sZWFuKGNvbG9yKSxcbiAgICAgIFtgYnRuLS0ke3NpemV9YF06IEJvb2xlYW4oc2l6ZSksXG4gICAgfSlcbiAgICBpZiAodGhpcy5wcm9wcy50bykge1xuICAgICAgb25DbGljayA9IGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCh0aGlzLnByb3BzLnRvKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvbkNsaWNrID0gZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc3R5bGUgPSB7XG4gICAgICAgIHdpZHRoXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHJvcHMgPSBfKHRoaXMucHJvcHMpXG4gICAgICAub21pdChbJ3RvJywgJ2NvbG9yJywgJ3NpemUnLCAnaXNGbHVpZCcsICd3aWR0aCddKVxuICAgICAgLmFzc2lnbih7fSwge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSB8fCAnJyxcbiAgICAgICAgb25DbGljayxcbiAgICAgICAgc3R5bGVcbiAgICAgIH0pXG4gICAgICAudmFsdWUoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBzdHlsZU5hbWU9e3N0eWxlTmFtZX1cbiAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzTW91c2VPdmVyOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfX1cbiAgICAgICAgb25Nb3VzZU91dD17KCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNNb3VzZU92ZXI6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2J1dHRvbj5cbiAgICApXG4gIH1cbn1cblxuKEJ1dHRvbiBhcyBhbnkpLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sb3I6ICdibHVlJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0J1dHRvbi9CdXR0b24udHN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiYnRuXCI6XCJidG5fMmFXX19cIixcImZvY3VzXCI6XCJmb2N1c18yWTVvdlwiLFwiYWN0aXZlXCI6XCJhY3RpdmVfakZkTlpcIixcImRpc2FibGVkXCI6XCJkaXNhYmxlZF8yTkZKWFwiLFwiYnRuLS1ob3ZlclwiOlwiYnRuLS1ob3Zlcl8zNDRtaVwiLFwiYnRuLS1ibHVlXCI6XCJidG4tLWJsdWVfMW5FSU1cIixcImJ0bi0tb3JhbmdlXCI6XCJidG4tLW9yYW5nZV92NHg1X1wiLFwiYnRuLS1yZWRcIjpcImJ0bi0tcmVkXzJnc2ZTXCIsXCJidG4tLXdoaXRlXCI6XCJidG4tLXdoaXRlXzNyV0YzXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9CdXR0b24vX2J1dHRvbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImRpYWxvZ1wiOlwiZGlhbG9nXzNXSi1DXCIsXCJkaWFsb2ctaGVhZGVyXCI6XCJkaWFsb2ctaGVhZGVyXzItVFBCXCIsXCJkaWFsb2ctdGl0bGVcIjpcImRpYWxvZy10aXRsZV8zdTBRV1wiLFwiZGlhbG9nLWNvbnRlbnRcIjpcImRpYWxvZy1jb250ZW50XzMyUXJrXCIsXCJkaWFsb2ctZm9vdGVyXCI6XCJkaWFsb2ctZm9vdGVyXzJJdVNDXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9EaWFsb2cvRGlhbG9nLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbn1cblxuaW50ZXJmYWNlIElBbGxQcm9wcyBleHRlbmRzIElQcm9wcyB7XG4gIHJvdXRpbmc6IGFueVxuICBlbGVtZW50czogYW55XG4gIHNlbmROb3RpZmljYXRpb246IGFueVxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuY2xhc3MgQXBwTWFzdGVyIGV4dGVuZHMgQ29tcG9uZW50PElBbGxQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PHt9LCB7fSwgSVByb3BzPihcbiAgc3RhdGUgPT4gKHtcbiAgICBlbGVtZW50czogc3RhdGUuZWxlbWVudHMsXG4gICAgcm91dGluZzogc3RhdGUucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zXG59KSwge31cbikoQXBwTWFzdGVyIGFzIGFueSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvQXBwTWFzdGVyLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBCcmFuZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0JyYW5kaW5nJ1xuaW1wb3J0IENvbG9waG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQ29sb3Bob24nXG5pbXBvcnQgeyBmZXRjaFNoZWxmIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBhcGlzIGZyb20gJy4uL2FwaXMnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGZldGNoU2hlbGY6IGFueVxuICBzZXNzaW9uOiBhbnlcbiAgYm9va1NoZWxmOiBhbnlcbn1cblxuY2xhc3MgQXBwQ29tbW9uIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBoYW5kbGVMb2dvdXQoKSB7XG4gICAgYXBpcy5sb2dvdXQoKS50aGVuKCgpID0+IHtcbiAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5ocmVmXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLnNlc3Npb24udXNlci5yb2xlICE9PSAndmlzaXRvcicpIHtcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hTaGVsZigpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB1c2VyTG9nZ2VkSW4gPSB0aGlzLnByb3BzLnNlc3Npb24udXNlci5yb2xlID09PSAndmlzaXRvcicgJiYgbmV4dFByb3BzLnNlc3Npb24udXNlci5yb2xlICE9PSAndmlzaXRvcidcbiAgICBpZiAodXNlckxvZ2dlZEluKSB7XG4gICAgICB0aGlzLnByb3BzLmZldGNoU2hlbGYoKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgaXNBZG1pbiA9IGZhbHNlXG4gICAgbGV0IHVzZXJuYW1lID0gbnVsbFxuXG4gICAgaWYgKHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLnJvbGUgIT09ICd2aXNpdG9yJykge1xuICAgICAgaXNBZG1pbiA9IHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLnJvbGUgPT09ICdhZG1pbidcbiAgICAgIHVzZXJuYW1lID0gdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIudXNlcm5hbWVcbiAgICB9XG5cbiAgICBjb25zdCB7Ym9va1NoZWxmfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBib29rU2hlbGZMaXN0ID0gYm9va1NoZWxmXG4gICAgICAubWFwKGJvb2sgPT4gKHtcbiAgICAgICAgdGl0bGU6IGJvb2sudGl0bGUsXG4gICAgICAgIGlkOiBib29rLmlkXG4gICAgICB9KSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QnJhbmRpbmdcbiAgICAgICAgICByZWNlbnRSZWFkaW5nPXtib29rU2hlbGZMaXN0fVxuICAgICAgICAgIGlzQWRtaW49e2lzQWRtaW59XG4gICAgICAgICAgdXNlcm5hbWU9e3VzZXJuYW1lfVxuICAgICAgICAgIG9uTG9nb3V0PXt0aGlzLmhhbmRsZUxvZ291dH1cbiAgICAgICAgLz5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxDb2xvcGhvbiAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCBQcm9wcz4oXG4gIHN0YXRlID0+ICh7XG4gICAgbm90aWZpY2F0aW9uOiBzdGF0ZS5jb21wb25lbnRzLm5vdGlmaWNhdGlvbixcbiAgICBzZXNzaW9uOiBzdGF0ZS5zZXNzaW9uLFxuICAgIGJvb2tTaGVsZjogc3RhdGUucGF5bG9hZHMuYm9va1NoZWxmIHx8IFtdXG4gIH0pLFxuICB7IGZldGNoU2hlbGYgfSBhcyBhbnlcbikoQXBwQ29tbW9uKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29udGFpbmVycy9BcHBDb21tb24udHN4XG4gKiovIiwiaW1wb3J0IEJyYW5kaW5nIGZyb20gJy4vQnJhbmRpbmcnXG5leHBvcnQgZGVmYXVsdCBCcmFuZGluZ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9CcmFuZGluZy9pbmRleC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvX2xheW91dCdcbmltcG9ydCB7IERyb3Bkb3duLCBEcm9wZG93bkl0ZW0sIERyb3Bkb3duSXRlbVNlcCB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL0Ryb3Bkb3duJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vTG9nbydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9CcmFuZGluZy5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHVzZXJuYW1lOiBzdHJpbmdcbiAgaXNBZG1pbj86IGJvb2xlYW5cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHJlY2VudFJlYWRpbmc/OiB7XG4gICAgdGl0bGU6IHN0cmluZ1xuICAgIGlkOiBzdHJpbmdcbiAgfVtdXG4gIG9uTG9nb3V0OiAoKSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBpc0Ryb3Bkb3duTWVudVZpc2libGU6IGJvb2xlYW5cbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBCcmFuZGluZyBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRHJvcGRvd25NZW51VmlzaWJsZTogZmFsc2VcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVMb2dvdXRDbGljayA9IHRoaXMuaGFuZGxlTG9nb3V0Q2xpY2suYmluZCh0aGlzKVxuICB9XG5cbiAgdG9nZ2xlRHJvcGRvd25NZW51KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNEcm9wZG93bk1lbnVWaXNpYmxlOiAhdGhpcy5zdGF0ZS5pc0Ryb3Bkb3duTWVudVZpc2libGVcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlTG9nb3V0Q2xpY2soKSB7XG4gICAgdGhpcy5wcm9wcy5vbkxvZ291dCgpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGlzQWRtaW4gPSB0aGlzLnByb3BzLmlzQWRtaW4gPyB0aGlzLnByb3BzLmlzQWRtaW4gOiBmYWxzZVxuXG4gICAgY29uc3QgeyB1c2VybmFtZSwgcmVjZW50UmVhZGluZyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPXtgYnJhbmRpbmcgJHt0aGlzLnByb3BzLmNsYXNzTmFtZSA/IHRoaXMucHJvcHMuY2xhc3NOYW1lIDogJyd9YH0+XG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExvZ28gdG89XCIvXCIgLz5cbiAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwibmF2XCI+XG4gICAgICAgICAgICAgIDx1bCBzdHlsZU5hbWU9XCJuYXYtbGlua3NcIj5cbiAgICAgICAgICAgICAgICA8bGkgc3R5bGVOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHN0eWxlTmFtZT1cIm5hdi1saW5rXCIgdG89XCIvYnJvd3NlXCI+5rWP6KeIPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdXNlcm5hbWVcbiAgICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwibmF2LS11c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWNlbnRSZWFkaW5nLmxlbmd0aCAhPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gc3R5bGVOYW1lPVwiZHJvcGRvd24tcmVjZW50LXJlYWRpbmdcIiB0aXRsZT1cIuacgOi/kemYheivu1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZW50UmVhZGluZy5zbGljZSgwLCA1KS5tYXAoKGJvb2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL3ZpZXdlci9ib29rLyR7Ym9vay5pZH1gfT57Ym9vay50aXRsZX08L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVNlcCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPjxMaW5rIHRvPXtgL3VzZXIvc2hlbGZgfT7mn6XnnIvlhajpg6g8L0xpbms+PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17KFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3VzZXJuYW1lfXsgaXNBZG1pbiAmJiA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZVwiPkFkbWluPC9zcGFuPiB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICkgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FkbWluID09PSB0cnVlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT48TGluayB0bz1cIi9jb25zb2xlXCI+5o6n5Yi25Y+wPC9MaW5rPjwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPjxMaW5rIHRvPXtgL3VzZXIvc2hlbGZgfT7kuabmnrY8L0xpbms+PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT48TGluayB0bz17YC91c2VyL3Byb2ZpbGVgfT7kuKrkurrkuLvpobU8L0xpbms+PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT48TGluayB0bz17YC91c2VyL3ByZWZlcmVuY2VgfT7orr7nva48L0xpbms+PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVNlcCAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+PGEgb25DbGljaz17dGhpcy5oYW5kbGVMb2dvdXRDbGlja30gaHJlZj1cIiNcIj7pgIDlh7o8L2E+PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cIm5hdi0tdXNlclwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGVOYW1lPVwibmF2LWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBzdHlsZU5hbWU9XCJuYXYtbGlua1wiIHRvPVwiL3NpZ25pblwiPueZu+W9lTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZU5hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgc3R5bGVOYW1lPVwibmF2LWxpbmtcIiB0bz1cIi9zaWdudXBcIj7ms6jlhow8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJhbmRpbmdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQnJhbmRpbmcvQnJhbmRpbmcudHN4XG4gKiovIiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lcidcbmV4cG9ydCB7IENvbnRhaW5lciB9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fbGF5b3V0L2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCBjbGFzc05hbWUgPSAodGhpcy5wcm9wcy5pc0ZsdWlkPydjb250YWluZXItZmx1aWQnOidjb250YWluZXInKSArICh0aGlzLnByb3BzLmNsYXNzTmFtZT9gICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YDonJylcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fbGF5b3V0L0NvbnRhaW5lci50c3hcbiAqKi8iLCJpbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9Ecm9wZG93bidcbmltcG9ydCBEcm9wZG93bkl0ZW0gZnJvbSAnLi9Ecm9wZG93bkl0ZW0nXG5pbXBvcnQgRHJvcGRvd25JdGVtU2VwIGZyb20gJy4vRHJvcGRvd25JdGVtU2VwJ1xuXG5leHBvcnQgeyBEcm9wZG93bkl0ZW0sIERyb3Bkb3duLCBEcm9wZG93bkl0ZW1TZXAgfVxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL0Ryb3Bkb3duL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vRHJvcGRvd24uc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB0aXRsZTogc3RyaW5nIHwgSlNYLkVsZW1lbnRcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHN0eWxlTmFtZT86IHN0cmluZ1xuICBzdHlsZT86ICdibHVlJyB8ICdkYXJrJ1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgc2hvd01lbnU/OiBib29sZWFuXG59XG5cbi8vIHRvZG86IOaUvuWIsCB1dGlscy9kb20g6YeM6Z2iXG5mdW5jdGlvbiBpc0Rlc2NlbmRhbnQocGFyZW50LCBjaGlsZCkge1xuICBsZXQgbm9kZSA9IGNoaWxkLnBhcmVudE5vZGVcbiAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgIGlmIChub2RlID09PSBwYXJlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGRyb3Bkb3duOiBhbnlcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93TWVudTogZmFsc2VcbiAgICB9XG4gICAgdGhpcy50b2dnbGVEcm9wZG93biA9IHRoaXMudG9nZ2xlRHJvcGRvd24uYmluZCh0aGlzKVxuICAgIHRoaXMuaGlkZUV4cGVuZGVkID0gdGhpcy5oaWRlRXhwZW5kZWQuYmluZCh0aGlzKVxuICB9XG5cbiAgdG9nZ2xlRHJvcGRvd24oZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd01lbnU6ICF0aGlzLnN0YXRlLnNob3dNZW51XG4gICAgfSlcbiAgfVxuXG4gIGhpZGVFeHBlbmRlZChlKSB7XG4gICAgLy8g5qOA5p+l54K55Ye755qEIGRvbSDmmK/lkKbmmK8gZHJvcGRvd24g55qE5a2Q5YWD57SgXG4gICAgLy8g5aaC5p6c5piv6YKj5LmI5bCx5LiN5YGa5aSE55CG77yM6ICMIHRvZ2dsZURyb3Bkb3duIOS8muWTjeW6lFxuICAgIC8vIOino+WGs+S6humhtemdouS4iuWQjOaXtueUqOS4pOS4qiBkcm9wZG93biDml7bvvIzlhbbkuK3kuIDkuKrlsZXlvIDvvIzngrnlh7vlj6bkuIDkuKrliY3ogIXkuI3lkIjkuIrnmoTpl67pophcbiAgICBpZiAoIWlzRGVzY2VuZGFudCh0aGlzLmRyb3Bkb3duLCBlLnRhcmdldCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93TWVudTogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlRXhwZW5kZWQpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVFeHBlbmRlZClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgc3R5bGUgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17cmVmID0+IHsgdGhpcy5kcm9wZG93biA9IHJlZiB9IH0gb25DbGljaz17dGhpcy50b2dnbGVEcm9wZG93bn0gc3R5bGVOYW1lPVwiZHJvcGRvd25cIiBjbGFzc05hbWU9e2NsYXNzTmFtZSB8fCAnJ30+XG4gICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfSA8c3BhbiBzdHlsZU5hbWU9XCJkcm9wZG93bi1jYXJldFwiIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd01lbnUgJiYgKFxuICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9eyBzdHlsZSA9PT0gJ2RhcmsnID8gJ2Ryb3Bkb3duLW1lbnUtLWRhcmsnIDogJ2Ryb3Bkb3duLW1lbnUnfT5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL0Ryb3Bkb3duL0Ryb3Bkb3duLnRzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImRyb3Bkb3duLWl0ZW1cIjpcImRyb3Bkb3duLWl0ZW1fMkMxZHogbGlnaHQtbGlua18yUURlQVwiLFwibGlnaHQtbGlua1wiOlwibGlnaHQtbGlua18yUURlQVwiLFwiZHJvcGRvd25cIjpcImRyb3Bkb3duX1NaZnlwXCIsXCJkcm9wZG93bi10b2dnbGVcIjpcImRyb3Bkb3duLXRvZ2dsZV8zNFFmZFwiLFwiZHJvcGRvd24tbWVudVwiOlwiZHJvcGRvd24tbWVudV8xSGdiU1wiLFwiZHJvcGRvd24tY2FyZXRcIjpcImRyb3Bkb3duLWNhcmV0X0ZjQldJXCIsXCJzZXBcIjpcInNlcF8xMFkwb1wiLFwiZHJvcGRvd24tbWVudS0tZGFya1wiOlwiZHJvcGRvd24tbWVudS0tZGFya182ZVZQWCBkcm9wZG93bi1tZW51XzFIZ2JTXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Ecm9wZG93bi9Ecm9wZG93bi5zY3NzXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vRHJvcGRvd24uc2NzcycpXG5cbnR5cGUgVFByb3BzID0ge1xuICBjaGlsZHJlbj86IGFueVxufVxuXG5mdW5jdGlvbiBEcm9wZG93bkl0ZW0ocHJvcHM6IFRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxsaT5cbiAgICAgIHtcbiAgICAgICAgdHlwZW9mIHByb3BzLmNoaWxkcmVuID09PSAnc3RyaW5nJ1xuICAgICAgICAgID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snZHJvcGRvd24taXRlbSddfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICAgIDogUmVhY3QuY2xvbmVFbGVtZW50KHByb3BzLmNoaWxkcmVuLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHN0eWxlc1snZHJvcGRvd24taXRlbSddXG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L2xpPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duSXRlbVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRHJvcGRvd24vRHJvcGRvd25JdGVtLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vRHJvcGRvd24uc2NzcycpXG5cbnR5cGUgVFByb3BzID0ge1xufVxuXG5mdW5jdGlvbiBEcm9wZG93bkl0ZW1TZXAocHJvcHM6IFRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlc1snc2VwJ119PjwvbGk+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25JdGVtU2VwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Ecm9wZG93bi9Ecm9wZG93bkl0ZW1TZXAudHN4XG4gKiovIiwiaW1wb3J0IExvZ28gZnJvbSAnLi9Mb2dvJ1xuZXhwb3J0IGRlZmF1bHQgTG9nb1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Mb2dvL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vTG9nby5jc3MnKVxuXG50eXBlIFRQcm9wcyA9IHtcbiAgY2hpbGRyZW4/OiBhbnlcbiAgdG8/OiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gTG9nbyhwcm9wczogVFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzWydsb2dvLXdyYXAnXX0+XG4gICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlc1snbG9nbyddfSB0bz17cHJvcHMudG99PnJlYWRyPC9MaW5rPlxuICAgIDwvaDE+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9nb1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Mb2dvL0xvZ28udHN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibG9nby13cmFwXCI6XCJsb2dvLXdyYXBfQ1A1UDlcIixcImxvZ29cIjpcImxvZ29fM3FjYlZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvTG9nby9Mb2dvLmNzc1xuICoqIG1vZHVsZSBpZCA9IDU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJuYXYtbGlua1wiOlwibmF2LWxpbmtfM1gwVDhcIixcImJyYW5kaW5nXCI6XCJicmFuZGluZ184RVZBdFwiLFwiZHJvcGRvd24tbWVudVwiOlwiZHJvcGRvd24tbWVudV81U2M1MFwiLFwidXNlcm5hbWVcIjpcInVzZXJuYW1lXzNNbTZ6XCIsXCJuYXYtbGlua3NcIjpcIm5hdi1saW5rc18yd1RZWVwiLFwibmF2XCI6XCJuYXZfMW9qMXpcIixcIm5hdi0tdXNlclwiOlwibmF2LS11c2VyXzFMN0xiXCIsXCJkcm9wZG93bi1yZWNlbnQtcmVhZGluZ1wiOlwiZHJvcGRvd24tcmVjZW50LXJlYWRpbmdfMm95akhcIixcIm5hdi1pdGVtXCI6XCJuYXYtaXRlbV9mODNiaFwiLFwicmVjZW50LXJlYWRpbmdcIjpcInJlY2VudC1yZWFkaW5nXzFrSktoXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0JyYW5kaW5nL0JyYW5kaW5nLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IENvbG9waG9uIGZyb20gJy4vQ29sb3Bob24nXG5leHBvcnQgZGVmYXVsdCBDb2xvcGhvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xvcGhvbi9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2VsZW1lbnRzL19sYXlvdXQvQ29udGFpbmVyJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0NvbG9waG9uLmNzcycpXG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgQ29sb3Bob24gZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9waG9uXCIgc3R5bGVOYW1lPVwiY29sb3Bob25cIj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8cD7CqSAyMDE177yNMjAxNiByZWFkcndlYi5jb20sIGFsbCByaWdodHMgcmVzZXJ2ZWQ8L3A+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9waG9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbG9waG9uL0NvbG9waG9uLnRzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImNvbG9waG9uXCI6XCJjb2xvcGhvbl9GVmRTUlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xvcGhvbi9Db2xvcGhvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0ICogYXMgYXBpcyBmcm9tICcuL2FwaXMnXG5pbXBvcnQgKiBhcyBleHRlcm5hbEFwaXMgZnJvbSAnLi9leHRlcm5hbEFwaXMnXG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdC5hc3NpZ24oe30sIGFwaXMsIGV4dGVybmFsQXBpcylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2FwaXMvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgY2FsbEFwaSBmcm9tICcuLi91dGlscy9jYWxsQXBpJ1xuaW1wb3J0IEFwaVJvb3RzIGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbGxlY3Rpb24oZGF0YToge1xuICBuYW1lOiBzdHJpbmdcbiAgaXRlbXM6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG59KSB7XG4gIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWNvbGxlY3Rpb25zYCwgeyBtZXRob2Q6ICdQT1NUJywgZGF0YTogZGF0YSB9KVxufVxuXG4vKipcbiAqIGRhdGE6IG5hbWUsIGF1dGhvciwgZGVzY3JpcHRpb24sIGNvdmVyLCBjb250ZW50XG4gKiB0b2RvXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRCb29rKGRhdGEpIHtcbiAgcmV0dXJuIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9Ym9va3NgLCB7IG1ldGhvZDogJ1BPU1QnLCBkYXRhOiBkYXRhIH0pXG59XG5cbi8qKlxuICogZGF0YTogbmFtZSwgc2x1ZywgZGVzY3JpcHRpb25cbiAqIHRvZG9cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEF1dGhvcihkYXRhKSB7XG4gIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWF1dGhvcnNgLCB7IG1ldGhvZDogJ1BPU1QnLCBkYXRhOiBkYXRhIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hBdXRob3JzKHF1ZXJ5KSB7XG4gIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWF1dGhvcnM/cT0ke3F1ZXJ5fWApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hCb29rcyhxdWVyeSkge1xuICByZXR1cm4gY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1ib29rcz9xPSR7cXVlcnl9YClcbn1cblxuLyoqXG4gKiBkYXRhOiBwYWdlTm8sIHBhZ2VTdW0sIHBlcmNlbnRhZ2VcbiAqIHRvZG9cbiAqL1xuZXhwb3J0IHR5cGUgc2V0UHJvZ3Jlc3MgPSB7XG4gIHBlcmNlbnRhZ2U6IG51bWJlclxufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2dyZXNzKGJvb2tJZCwgZGF0YTogc2V0UHJvZ3Jlc3MpIHtcbiAgY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH11c2VyL2Jvb2tzLyR7Ym9va0lkfS9wcm9ncmVzc2AsIHsgbWV0aG9kOiAnUFVUJywgZGF0YSB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQm9vayhpZCkge1xuICByZXR1cm4gY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1ib29rcy8ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdERUxFVEUnXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWF1dGgvcmV2b2tlYCwge1xuICAgIG1ldGhvZDogJ1BVVCdcbiAgfSlcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2FwaXMvYXBpcy50c1xuICoqLyIsImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBvYmplY3RUb1VybGVuY29kZWQgZnJvbSAnLi4vdXRpbHMvcGFyc2VGb3JtRGF0YSdcbmltcG9ydCBoYW5kbGVSZXNwb25zZSBmcm9tICcuLi91dGlscy9oYW5kbGVSZXNwb25zZSdcblxudHlwZSBDYWxsQXBpQ29uZmlnID0ge1xuICBtZXRob2Q/OiAnR0VUJyB8ICdQT1NUJyB8ICdERUxFVEUnIHwgJ1BVVCdcbiAgZGF0YT86IHt9XG4gIHNjaGVtYT86IHt9XG4gIGNyZWRlbnRpYWxzPzogJ2luY2x1ZGUnIHwgJ3NhbWUtb3JpZ2luJ1xuICBkYXRhVHlwZT86ICd1cmxlbmNvZGVkJyB8ICdqc29uJ1xufVxuXG50eXBlIEZldGNoQ29uZmlnID0ge1xuICBtZXRob2Q/OiBzdHJpbmdcbiAgY3JlZGVudGlhbHM/OiAnaW5jbHVkZScgfCAnc2FtZS1vcmlnaW4nXG4gIGhlYWRlcnM/OiBhbnlcbiAgYm9keT86IHN0cmluZ1xufVxuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBDYWxsQXBpQ29uZmlnID0ge1xuICBkYXRhVHlwZTogJ2pzb24nLFxuICBtZXRob2Q6ICdHRVQnLFxuICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xufVxuXG4vLyByZXR1cm4gZmV0Y2ggY29uZmlnXG5jb25zdCBwYXJzZUNvbmZpZyA9IChvcmlnaW5hbkNvbmZpZzogQ2FsbEFwaUNvbmZpZykgPT4ge1xuICBsZXQgeyBtZXRob2QsIGRhdGEsIGNyZWRlbnRpYWxzLCBkYXRhVHlwZSB9ID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdENvbmZpZywgb3JpZ2luYW5Db25maWcpXG4gIGxldCBmZXRjaENvbmZpZzogRmV0Y2hDb25maWcgPSB7fVxuXG4gIGlmIChtZXRob2QpIHtcbiAgICBmZXRjaENvbmZpZy5tZXRob2QgPSBtZXRob2RcbiAgfVxuXG4gIGlmIChjcmVkZW50aWFscykge1xuICAgIGZldGNoQ29uZmlnLmNyZWRlbnRpYWxzID0gY3JlZGVudGlhbHNcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXF1ZXN0IGhlYWRlcnMgYW5kIGJvZHlcbiAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnIHx8IG1ldGhvZCA9PT0gJ1BVVCcpIHtcbiAgICBsZXQgY29udGVudFR5cGVcbiAgICBsZXQgYm9keVxuXG4gICAgaWYgKGRhdGFUeXBlID09PSAnanNvbicpIHtcbiAgICAgIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICBib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICB9IGVsc2UgaWYgKGRhdGFUeXBlID09PSAndXJsZW5jb2RlZCcpIHtcbiAgICAgIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgIGJvZHkgPSBvYmplY3RUb1VybGVuY29kZWQoZGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFuZGxlIHVuc3VwcG9ydGVkIGRhdGFUeXBlXG4gICAgICBkYXRhVHlwZSA9ICd1cmxlbmNvZGVkJ1xuICAgICAgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgYm9keSA9IG9iamVjdFRvVXJsZW5jb2RlZChkYXRhKVxuICAgICAgY29uc29sZS53YXJuKCdVbnN1cHBvcnRlZCBkYXRhVHlwZSB1c2VkIFwidXJsZW5jb2RlZFwiIGluc3RlYWQhJylcbiAgICB9XG5cbiAgICBmZXRjaENvbmZpZy5oZWFkZXJzID0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6IGNvbnRlbnRUeXBlLFxuICAgICAgJ0FjY2Vzcy1Db250cm9sLVJlcXVlc3QtTWV0aG9kJzogbWV0aG9kXG4gICAgfVxuXG4gICAgZmV0Y2hDb25maWcuYm9keSA9IGJvZHlcbiAgfVxuXG4gIGlmIChtZXRob2QgPT09ICdERUxFVEUnKSB7XG4gICAgZmV0Y2hDb25maWcuaGVhZGVycyA9IHtcbiAgICAgICdBY2Nlc3MtQ29udHJvbC1SZXF1ZXN0LU1ldGhvZCc6ICdERUxFVEUnXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZldGNoQ29uZmlnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxsQXBpKGZ1bGxVcmw6IHN0cmluZywgY29uZmlnOiBDYWxsQXBpQ29uZmlnID0ge30pIHtcbiAgcmV0dXJuIGZldGNoKGZ1bGxVcmwsIHBhcnNlQ29uZmlnKGNvbmZpZykpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjA0KSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbihqc29uID0+IHtcbiAgICAgICAgICByZXR1cm4geyBqc29uLCByZXNwb25zZSB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICByZXR1cm4geyByZXNwb25zZSwganNvbjoge30gfVxuICAgIH0pXG4gICAgLnRoZW4oKHsganNvbiwgcmVzcG9uc2UgfSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVSZXNwb25zZSh7IGpzb24sIHJlc3BvbnNlIH0sIGNvbmZpZy5zY2hlbWEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoanNvbilcbiAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjYWxsQXBpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy91dGlscy9jYWxsQXBpLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxMikpKDc1Myk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tYnJvd3NlcmlmeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3V0aWxzX2RsbFxuICoqIG1vZHVsZSBpZCA9IDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBub3JtYWxpemUgfSBmcm9tICdub3JtYWxpenInXG5pbXBvcnQgaHVtcHMgZnJvbSAnaHVtcHMnXG5pbXBvcnQgcGFyc2VRdWVyeVN0cmluZyBmcm9tICcuL3BhcnNlUXVlcnlTdHJpbmcnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmZ1bmN0aW9uIGdldE5leHRQYWdlVXJsKHJlc3BvbnNlKSB7XG4gIGNvbnN0IGxpbmsgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnbGluaycpXG4gIGlmICghbGluaykge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgY29uc3QgbmV4dExpbmsgPSBsaW5rLnNwbGl0KCcsJykuZmluZChzID0+IHMuaW5kZXhPZigncmVsPVwibmV4dFwiJykgPiAtMSlcbiAgaWYgKCFuZXh0TGluaykge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgcmV0dXJuIG5leHRMaW5rLnNwbGl0KCc7JylbMF0udHJpbSgpLnNsaWNlKDEsIC0xKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVSZXNwb25zZShkYXRhLCBzY2hlbWEpIHtcbiAgY29uc3QgeyBqc29uLCByZXNwb25zZSB9ID0gZGF0YVxuICBjb25zdCBjYW1lbGl6ZWRKc29uID0gaHVtcHMuY2FtZWxpemVLZXlzKGpzb24pXG5cbiAgaWYgKHR5cGVvZiBzY2hlbWEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3QgbmV4dFBhZ2VVcmwgPSBnZXROZXh0UGFnZVVybChyZXNwb25zZSlcblxuICAgIHJldHVybiAgT2JqZWN0LmFzc2lnbih7fSxcbiAgICAgIG5vcm1hbGl6ZShjYW1lbGl6ZWRKc29uLCBzY2hlbWEpLFxuICAgICAge1xuICAgICAgICBuZXh0UGFnZVVybCxcbiAgICAgICAgbmV4dFBhZ2U6IF8uZ2V0KHBhcnNlUXVlcnlTdHJpbmcobmV4dFBhZ2VVcmwuc3BsaXQoJz8nKVsxXSB8fCAnJyksICdwYWdlJywgMClcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXR1cm4gY2FtZWxpemVkSnNvblxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVSZXNwb25zZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvdXRpbHMvaGFuZGxlUmVzcG9uc2UudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKSkoNzUyKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9odW1wcy9odW1wcy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3V0aWxzX2RsbFxuICoqIG1vZHVsZSBpZCA9IDY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmcocXVlcnlTdHJpbmcpIHtcbiAgY29uc3QgcGFyYW1zID0gcXVlcnlTdHJpbmcuc3BsaXQoJyYnKVxuICBsZXQgb2JqZWN0ID0ge31cblxuICBwYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgY29uc3Qga2V5ID0gcGFyYW0uc3BsaXQoJz0nKVswXVxuICAgIGNvbnN0IHZhbCA9IHBhcmFtLnNwbGl0KCc9JylbMV1cblxuICAgIG9iamVjdFtrZXldID0gdmFsXG4gIH0pXG5cbiAgcmV0dXJuIG9iamVjdFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvdXRpbHMvcGFyc2VRdWVyeVN0cmluZy50c1xuICoqLyIsImNvbnN0IEhPU1QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJ1xuXG5jb25zdCBBcGlSb290cyA9IHtcbiAgTE9DQUw6IGAke0hPU1R9L2FwaS9gLFxuICBET1VCQU5fQk9PS1M6ICdodHRwczovL2FwaS5kb3ViYW4uY29tL3YyL2Jvb2svJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcGlSb290c1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29uZmlnLnRzXG4gKiovIiwiaW1wb3J0IGpzb25wIGZyb20gJy4uL3V0aWxzL2pzb25wJ1xuaW1wb3J0IEFwaVJvb3RzIGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRG91YmFuQm9va3MocXVlcnkpIHtcbiAgcmV0dXJuIGpzb25wKGAke0FwaVJvb3RzLkRPVUJBTl9CT09LU30vc2VhcmNoP2NvdW50PTUmcT0ke3F1ZXJ5fWAsIHt9KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvYXBpcy9leHRlcm5hbEFwaXMudHNcbiAqKi8iLCJpbXBvcnQgaGFuZGxlUmVzcG9uc2UgZnJvbSAnLi9oYW5kbGVSZXNwb25zZSdcblxuZnVuY3Rpb24ganNvbnAoZnVsbFVybCwgY29uZmlnOiB7IHNjaGVtYT86IHt9IH0pIHtcbiAgaWYgKGZ1bGxVcmwuaW5kZXhPZignZG91YmFuJykgIT09IC0xKSB7XG4gICAgbGV0IGlkID0gbmV3IERhdGUoKS52YWx1ZU9mKClcbiAgICBsZXQganNvbnBJZCA9ICdqc29ucC0nICsgaWRcbiAgICBsZXQganNvbnBDYWxsYmFjayA9ICdqc29ucENhbGxiYWNrJyArIGlkXG4gICAgbGV0IGpzb25wQ2FsbGJhY2tEYXRhID0gYF9fSlNPTlBfREFUQV8ke2lkfV9fYFxuXG4gICAgd2luZG93W2pzb25wQ2FsbGJhY2tdID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHdpbmRvd1tqc29ucENhbGxiYWNrRGF0YV0gPSBkYXRhXG4gICAgfVxuXG4gICAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtmdWxsVXJsfSZjYWxsYmFjaz0ke2pzb25wQ2FsbGJhY2t9YClcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdpZCcsIGpzb25wSWQpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGpzb25wSWQpKVxuICAgICAgICBsZXQganNvbiA9IHdpbmRvd1tqc29ucENhbGxiYWNrRGF0YV1cblxuICAgICAgICByZXNvbHZlKGhhbmRsZVJlc3BvbnNlKHsganNvbiB9LCBjb25maWcuc2NoZW1hKSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGpzb25wXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy91dGlscy9qc29ucC50c1xuICoqLyIsImltcG9ydCBDb25zb2xlTWFzdGVyIGZyb20gJy4vQ29uc29sZU1hc3RlcidcbmV4cG9ydCBkZWZhdWx0IENvbnNvbGVNYXN0ZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvQ29uc29sZU1hc3Rlci9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vZWxlbWVudHMvX2xheW91dC9Db250YWluZXInXG5pbXBvcnQgQ29uc29sZUJyYW5kaW5nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29uc29sZUJyYW5kaW5nJ1xuaW1wb3J0IHsgdXNlckF1dGgsIHNlbmROb3RpZmljYXRpb24gfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IENvbnNvbGVTaWRlYmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29uc29sZVNpZGViYXInXG5pbXBvcnQgbWVudXMgZnJvbSAnLi4vLi4vY29udGVudC9tZW51cydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Db25zb2xlTWFzdGVyLmNzcycpXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5vdGlmaWNhdGlvbnM/OiBhbnlcbiAgdXNlckF1dGg/OiBhbnlcbiAgc2Vzc2lvbj86IGFueVxuICByb3V0aW5nPzogYW55XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgQ29uc29sZSBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy51c2VyQXV0aCgpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGlzQWRtaW4gPSB0aGlzLnByb3BzLnNlc3Npb24udXNlci5yb2xlID09PSAnYWRtaW4nID8gdHJ1ZSA6IGZhbHNlXG4gICAgbGV0IHVzZXJuYW1lID0gdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIudXNlcm5hbWUgPyB0aGlzLnByb3BzLnNlc3Npb24udXNlci51c2VybmFtZSA6IG51bGxcbiAgICBsZXQgcGF0aG5hbWUgPSB0aGlzLnByb3BzLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyA/IHRoaXMucHJvcHMucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zLnBhdGhuYW1lIDogJ2NvbnNvbGUnXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENvbnNvbGVCcmFuZGluZyBpc0FkbWluPXtpc0FkbWlufSB1c2VybmFtZT17dXNlcm5hbWV9IC8+XG4gICAgICAgIDxDb250YWluZXIgaXNGbHVpZD17dHJ1ZX0+XG4gICAgICAgICAgPENvbnNvbGVTaWRlYmFyXG4gICAgICAgICAgICBtZW51TWFwcGluZz17bWVudXN9XG4gICAgICAgICAgICBjdXJyZW50UGF0aD17cGF0aG5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiAoe1xuICAgIG5vdGlmaWNhdGlvbnM6IHN0YXRlLmNvbXBvbmVudHMubm90aWZpY2F0aW9ucyxcbiAgICBzZXNzaW9uOiBzdGF0ZS5zZXNzaW9uLFxuICAgIHJvdXRpbmc6IHN0YXRlLnJvdXRpbmdcbiAgfSksXG4gIHsgc2VuZE5vdGlmaWNhdGlvbiwgdXNlckF1dGggfVxuKShDb25zb2xlIGFzIGFueSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvQ29uc29sZU1hc3Rlci9Db25zb2xlTWFzdGVyLnRzeFxuICoqLyIsImltcG9ydCBDb25zb2xlQnJhbmRpbmcgZnJvbSAnLi9Db25zb2xlQnJhbmRpbmcnXG5leHBvcnQgZGVmYXVsdCBDb25zb2xlQnJhbmRpbmdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29uc29sZUJyYW5kaW5nL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vZWxlbWVudHMvX2xheW91dC9Db250YWluZXInXG5pbXBvcnQgeyBEcm9wZG93biwgRHJvcGRvd25JdGVtLCBEcm9wZG93bkl0ZW1TZXAgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9Ecm9wZG93bidcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vTG9nbydcbi8vIGNvbnN0IGJyYW5kaW5nU3R5bGVzID0gcmVxdWlyZSgnLi4vQnJhbmRpbmcvQnJhbmRpbmcuY3NzJylcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vQ29uc29sZUJyYW5kaW5nLnNjc3MnKVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIENvbnNvbGVCcmFuZGluZyBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRHJvcGRvd25NZW51VmlzaWJsZTogZmFsc2VcbiAgICB9XG4gIH1cblxuICB0b2dnbGVEcm9wZG93bk1lbnUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0Ryb3Bkb3duTWVudVZpc2libGU6ICF0aGlzLnN0YXRlLmlzRHJvcGRvd25NZW51VmlzaWJsZVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHVzZXJuYW1lID0gdGhpcy5wcm9wcy51c2VybmFtZVxuICAgIGxldCBpc0FkbWluID0gdGhpcy5wcm9wcy5pc0FkbWluID8gdGhpcy5wcm9wcy5pc0FkbWluIDogJ2ZhbHNlJ1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwiYnJhbmRpbmdcIj5cbiAgICAgICAgPENvbnRhaW5lciBpc0ZsdWlkPXt0cnVlfSBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TG9nbyB0bz1cIi9jb25zb2xlXCIgLz5cbiAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3ViLW5hbWVcIj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwic3ViXCI+Q29uc29sZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJuYXYgcmlnaHRcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lID8gKFxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZGFya1wiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXsoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3VzZXJuYW1lfXsgaXNBZG1pbiAmJiA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS0tZGFya1wiPkFkbWluPC9zcGFuPiB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPjxMaW5rIHRvPVwiL1wiPuWbnuWIsCBSZWFkcjwvTGluaz48L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT48TGluayB0bz17YC91c2VyL3Byb2ZpbGVgfT7kuKrkurrkuLvpobU8L0xpbms+PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+PExpbmsgdG89e2AvdXNlci9wcmVmZXJlbmNlYH0+6K6+572uPC9MaW5rPjwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtU2VwIC8+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+PGEgaHJlZj1cIi9sb2dvdXRcIj7pgIDlh7o8L2E+PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtbGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9zaWduaW5cIj7nmbvlvZU8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9zaWdudXBcIj7ms6jlhow8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnNvbGVCcmFuZGluZ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db25zb2xlQnJhbmRpbmcvQ29uc29sZUJyYW5kaW5nLnRzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImJyYW5kaW5nXCI6XCJicmFuZGluZ18zZ29SR1wiLFwic2VwXCI6XCJzZXBfQVQ2R2xcIixcInN1YlwiOlwic3ViX0l5aG1zXCIsXCJyaWdodFwiOlwicmlnaHRfMVpBUVBcIixcInN1Yi1uYW1lXCI6XCJzdWItbmFtZV8yVDhhaFwiLFwibmF2XCI6XCJuYXZfMTB5bjQgbmF2XzFvajF6XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnNvbGVCcmFuZGluZy9Db25zb2xlQnJhbmRpbmcuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDc2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgQ29uc29sZVNpZGViYXIgZnJvbSAnLi9Db25zb2xlU2lkZWJhcidcbmV4cG9ydCBkZWZhdWx0IENvbnNvbGVTaWRlYmFyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnNvbGVTaWRlYmFyL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uL2VsZW1lbnRzL0ljb24nXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vQ29uc29sZVNpZGViYXIuY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGN1cnJlbnRQYXRoPzogYW55XG4gIG1lbnVNYXBwaW5nPzogYW55XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIENvbnNvbGVTaWRlYmFyIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbWVudU1hcHBpbmcsIGN1cnJlbnRQYXRoIH0gPSB0aGlzLnByb3BzXG5cbiAgICBsZXQgY3VycmVudE1lbnUgPSB7XG4gICAgICByb290SW5kZXg6IDAsXG4gICAgICBzdWJJbmRleDogMFxuICAgIH1cblxuICAgIG1lbnVNYXBwaW5nLmZvckVhY2goKG1lbnUsIHJvb3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHN1YkluZGV4XG5cbiAgICAgIGxldCByZXN1bHQgPSBtZW51LnN1Yk1lbnUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5wYXRoID09PSBjdXJyZW50UGF0aCkge1xuICAgICAgICAgIHN1YkluZGV4ID0gaW5kZXhcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgY3VycmVudE1lbnUucm9vdEluZGV4ID0gcm9vdEluZGV4XG4gICAgICAgIGN1cnJlbnRNZW51LnN1YkluZGV4ID0gc3ViSW5kZXhcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgbGV0IHJvb3RNZW51ID0gKFxuICAgICAgPHVsIHN0eWxlTmFtZT1cIm5hdi1zaWRlLXJvb3RcIj5cbiAgICAgICAge1xuICAgICAgICAgIG1lbnVNYXBwaW5nLm1hcCgobWVudSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBzdHlsZU5hbWU9e2luZGV4ICE9PSBjdXJyZW50TWVudS5yb290SW5kZXggPyAncm9vdC1pdGVtJyA6ICdyb290LWl0ZW0tLWN1cnJlbnQnfT5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17bWVudS5wYXRofT5cbiAgICAgICAgICAgICAgICAgIDxJY29uIHNpemU9ezI1fSBzdHlsZU5hbWU9XCJpY29uXCIgbmFtZT17bWVudS5jb21wb25lbnR9IC8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgKVxuXG4gICAgbGV0IHN1Yk1lbnUgPSAoXG4gICAgICA8dWwgc3R5bGVOYW1lPVwibmF2LXNpZGUtc3ViXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBtZW51TWFwcGluZ1tjdXJyZW50TWVudS5yb290SW5kZXhdLnN1Yk1lbnUubWFwKChtZW51LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IHN0eWxlTmFtZT17aW5kZXggIT09IGN1cnJlbnRNZW51LnN1YkluZGV4ID8gJ3N1Yi1pdGVtJyA6ICdzdWItaXRlbS0tY3VycmVudCd9PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXttZW51LnBhdGh9PnttZW51LmRpc3BsYXlOYW1lfTwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cInNpZGViYXItbGVmdFwiPlxuICAgICAgICB7cm9vdE1lbnV9XG4gICAgICAgIHtzdWJNZW51fVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnNvbGVTaWRlYmFyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnNvbGVTaWRlYmFyL0NvbnNvbGVTaWRlYmFyLnRzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInNpZGViYXItbGVmdFwiOlwic2lkZWJhci1sZWZ0XzJOZnZhXCIsXCJuYXYtc2lkZVwiOlwibmF2LXNpZGVfM0w4ZjZcIixcIm5hdi1zaWRlLXJvb3RcIjpcIm5hdi1zaWRlLXJvb3RfMV9QQmcgbmF2LXNpZGVfM0w4ZjZcIixcIm5hdi1zaWRlLXJvb3QtLWN1cnJlbnRcIjpcIm5hdi1zaWRlLXJvb3QtLWN1cnJlbnRfM0JWNXQgbmF2LXNpZGUtcm9vdF8xX1BCZyBuYXYtc2lkZV8zTDhmNlwiLFwibmF2LXNpZGUtc3ViXCI6XCJuYXYtc2lkZS1zdWJfNVFfZjUgbmF2LXNpZGVfM0w4ZjZcIixcIm5hdi1pdGVtXCI6XCJuYXYtaXRlbV8ycjF6blwiLFwiaWNvblwiOlwiaWNvbl8yNlB3R1wiLFwicm9vdC1pdGVtXCI6XCJyb290LWl0ZW1fVlB3dU0gbmF2LWl0ZW1fMnIxem5cIixcInJvb3QtaXRlbS0tY3VycmVudFwiOlwicm9vdC1pdGVtLS1jdXJyZW50XzNMTW5EIHJvb3QtaXRlbV9WUHd1TSBuYXYtaXRlbV8ycjF6blwiLFwic3ViLWl0ZW1cIjpcInN1Yi1pdGVtX3dhQS1PIG5hdi1pdGVtXzJyMXpuXCIsXCJzdWItaXRlbS0tY3VycmVudFwiOlwic3ViLWl0ZW0tLWN1cnJlbnRfM0N6bU0gc3ViLWl0ZW1fd2FBLU8gbmF2LWl0ZW1fMnIxem5cIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29uc29sZVNpZGViYXIvQ29uc29sZVNpZGViYXIuY3NzXG4gKiogbW9kdWxlIGlkID0gNzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImNvbnN0IG1lbnVzID0gW1xuICB7XG4gICAgY29tcG9uZW50OiAnYm9va3MnLFxuICAgIGRpc3BsYXlOYW1lOiAnJyxcbiAgICBwYXRoOiAnL2NvbnNvbGUvYm9va3MnLFxuICAgIHN1Yk1lbnU6IFtcbiAgICAgIHtcbiAgICAgICAgY29tcG9uZW50OiAnbWFuYWdlYm9va3MnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ01hbmFnZSBCb29rcycsXG4gICAgICAgIHBhdGg6ICcvY29uc29sZS9ib29rcydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbXBvbmVudDogJ2FkZGJvb2snLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ0FkZCBCb29rJyxcbiAgICAgICAgcGF0aDogJy9jb25zb2xlL2Jvb2tzL25ldydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbXBvbmVudDogJ2FkZGNvbGxlY3Rpb24nLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ0FkZCBDb2xsZWN0aW9uJyxcbiAgICAgICAgcGF0aDogJy9jb25zb2xlL2NvbGxlY3Rpb25zL25ldydcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb21wb25lbnQ6ICd1c2VycycsXG4gICAgZGlzcGxheU5hbWU6ICcnLFxuICAgIHBhdGg6ICcvY29uc29sZS91c2VycycsXG4gICAgc3ViTWVudTogW1xuICAgICAge1xuICAgICAgICBjb21wb25lbnQ6ICdtYW5hZ2V1c2VycycsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnTWFuYWdlIFVzZXJzJyxcbiAgICAgICAgcGF0aDogJy9jb25zb2xlL3VzZXJzJ1xuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgLy8ge1xuICAvLyAgIGNvbXBvbmVudDogJ2RhdGFiYXNlJyxcbiAgLy8gICBkaXNwbGF5TmFtZTogJycsXG4gIC8vICAgcGF0aDogJy9jb25zb2xlL2RiJyxcbiAgLy8gICBzdWJNZW51OiBbXVxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgY29tcG9uZW50OiAnc3RhdGlzdGljcycsXG4gIC8vICAgZGlzcGxheU5hbWU6ICcnLFxuICAvLyAgIHBhdGg6ICcvY29uc29sZS9zdGF0aXN0aWNzJyxcbiAgLy8gICBzdWJNZW51OiBbXVxuICAvLyB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb250ZW50L21lbnVzLnRzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiY29udGVudFwiOlwiY29udGVudF8yb0JRbFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29udGFpbmVycy9Db25zb2xlTWFzdGVyL0NvbnNvbGVNYXN0ZXIuY3NzXG4gKiogbW9kdWxlIGlkID0gODFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAndmlld2VyL2Jvb2svOmlkJyxcblxuICBnZXRDb21wb25lbnQobmV4dFN0YXRlLCBmbikge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgICAgZm4obnVsbCwgKHJlcXVpcmUoJy4vVmlld2VyJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJy8nLFxuXG4gIGdldENvbXBvbmVudChuZXh0U3RhdGUsIGZuKSB7XG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlKSB7XG4gICAgICBmbihudWxsLCAocmVxdWlyZSgnLi9BcHBIb21lJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9BcHBIb21lL2luZGV4LnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGg6ICdicm93c2UnLFxuXG4gIGdldENvbXBvbmVudChuZXh0U3RhdGUsIGZuKSB7XG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlKSB7XG4gICAgICBmbihudWxsLCAocmVxdWlyZSgnLi9Ccm93c2UnKSBhcyBhbnkpLmRlZmF1bHQpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL0Jyb3dzZS9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAnYm9vay86aWQnLFxuXG4gIGdldENvbXBvbmVudChuZXh0U3RhdGUsIGZuKSB7XG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlKSB7XG4gICAgICBmbihudWxsLCAocmVxdWlyZSgnLi9Cb29rRGV0YWlsJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9Cb29rRGV0YWlsL2luZGV4LnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGg6ICdjb2xsZWN0aW9ucycsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL0NvbGxlY3Rpb25zJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9Db2xsZWN0aW9ucy9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAnY29sbGVjdGlvbnMvOmlkJyxcblxuICBnZXRDb21wb25lbnQobmV4dFN0YXRlLCBmbikge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgICAgZm4obnVsbCwgKHJlcXVpcmUoJy4vQ29sbGVjdGlvbkRldGFpbCcpIGFzIGFueSkuZGVmYXVsdClcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQ29sbGVjdGlvbkRldGFpbC9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAnc2lnbmluJyxcblxuICBnZXRDb21wb25lbnQobmV4dFN0YXRlLCBmbikge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgICAgZm4obnVsbCwgKHJlcXVpcmUoJy4vU2lnbmluJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvU2lnbmluL2luZGV4LnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGg6ICdzaWdudXAnLFxuXG4gIGdldENvbXBvbmVudChuZXh0U3RhdGUsIGZuKSB7XG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlKSB7XG4gICAgICBmbihudWxsLCAocmVxdWlyZSgnLi9TaWdudXAnKSBhcyBhbnkpLmRlZmF1bHQpXG4gICAgfSlcbiAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9TaWdudXAvaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ3NoZWxmJyxcblxuICBnZXRDb21wb25lbnQobmV4dFN0YXRlLCBmbikge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgICAgZm4obnVsbCwgKHJlcXVpcmUoJy4vU2hlbGYnKSBhcyBhbnkpLmRlZmF1bHQpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1NoZWxmL2luZGV4LnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGg6ICdwcmVmZXJlbmNlJyxcblxuICBnZXRDb21wb25lbnQobmV4dFN0YXRlLCBmbikge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgICAgZm4obnVsbCwgKHJlcXVpcmUoJy4vUHJlZmVyZW5jZScpIGFzIGFueSkuZGVmYXVsdClcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvUHJlZmVyZW5jZS9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAncHJvZmlsZScsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL1Byb2ZpbGUnKSBhcyBhbnkpLmRlZmF1bHQpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1Byb2ZpbGUvaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ2Jvb2tzJyxcblxuICBnZXRDb21wb25lbnQobmV4dFN0YXRlLCBmbikge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgICAgZm4obnVsbCwgKHJlcXVpcmUoJy4vTWFuYWdlQm9va3MnKSBhcyBhbnkpLmRlZmF1bHQpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL2luZGV4LnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGg6ICd1c2VycycsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL01hbmFnZVVzZXJzJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VVc2Vycy9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAnYm9va3MvbmV3JyxcblxuICBnZXRDb21wb25lbnQobmV4dFN0YXRlLCBmbikge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgICAgZm4obnVsbCwgKHJlcXVpcmUoJy4vQWRkQm9vaycpIGFzIGFueSkuZGVmYXVsdClcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQm9vay9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAnY29sbGVjdGlvbnMvbmV3JyxcblxuICBnZXRDb21wb25lbnQobmV4dFN0YXRlLCBmbikge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgICAgZm4obnVsbCwgKHJlcXVpcmUoJy4vQWRkQ29sbGVjdGlvbicpIGFzIGFueSkuZGVmYXVsdClcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQ29sbGVjdGlvbi9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAnKicsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL05vTWF0Y2gnKSBhcyBhbnkpLmRlZmF1bHQpXG4gICAgfSlcbiAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9Ob01hdGNoL2luZGV4LnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNjczKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbFxuICoqIG1vZHVsZSBpZCA9IDE3OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMnXG5pbXBvcnQgYXBpIGZyb20gJy4vbWlkZGxld2FyZS9hcGknXG5pbXBvcnQgbW9kaWZ5UmVzcG9uc2UgZnJvbSAnLi9taWRkbGV3YXJlL21vZGlmeVJlc3BvbnNlJ1xuaW1wb3J0IGhhbmRsZUluaXRpYWxTdGF0ZSBmcm9tICcuLi91dGlscy9oYW5kbGVJbml0aWFsU3RhdGUnXG5pbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcblxuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoKSB7XG4gIGxldCBzdG9yZVxuXG4gIC8vIGlmKG1vZHVsZS5ob3QpIHtcbiAgLy8gICBtb2R1bGUuaG90LmFjY2VwdCgnLi4vcmVkdWNlcnMnLCAoKSA9PiB7XG4gIC8vICAgICBjb25zdCBuZXh0Um9vdFJlZHVjZXIgPSByZXF1aXJlKCcuLi9yZWR1Y2VycycpLmRlZmF1bHRcbiAgLy8gICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKG5leHRSb290UmVkdWNlcilcbiAgLy8gICB9KVxuICAvLyB9XG5cbiAgLy8gc2VydmVyIHNpZGVcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICAgIHJvb3RSZWR1Y2VyLFxuICAgICAge30sXG4gICAgICBhcHBseU1pZGRsZXdhcmUoYXBpLCB0aHVuaywgbW9kaWZ5UmVzcG9uc2UpXG4gICAgKVxuXG4gICAgcmV0dXJuIHN0b3JlXG4gIH1cblxuICBpZiAoZW52ID09PSAncHJvZHVjdGlvbicpIHtcbiAgICBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgICAgcm9vdFJlZHVjZXIsXG4gICAgICBoYW5kbGVJbml0aWFsU3RhdGUoKSxcbiAgICAgIGFwcGx5TWlkZGxld2FyZShhcGksIHRodW5rLCBtb2RpZnlSZXNwb25zZSlcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICAgIHJvb3RSZWR1Y2VyLFxuICAgICAgaGFuZGxlSW5pdGlhbFN0YXRlKCksXG4gICAgICBjb21wb3NlKFxuICAgICAgICBhcHBseU1pZGRsZXdhcmUoYXBpLCB0aHVuaywgbW9kaWZ5UmVzcG9uc2UsIGNyZWF0ZUxvZ2dlcih7Y29sbGFwc2VkOiB0cnVlfSkpXG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHN0b3JlXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9jb25maWd1cmVTdG9yZS50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDQ1NSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbFxuICoqIG1vZHVsZSBpZCA9IDE4MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNjU3KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsXG4gKiogbW9kdWxlIGlkID0gMTgyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIgYXMgcm91dGluZyB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCdcbmltcG9ydCBjb21wb25lbnRzIGZyb20gJy4vY29tcG9uZW50cydcbmltcG9ydCBwYWdpbmF0ZSBmcm9tICcuL3BhZ2luYXRlJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG4vLyBVcGRhdGVzIGFuIGVudGl0eSBjYWNoZSBpbiByZXNwb25zZSB0byBhbnkgYWN0aW9uIHdpdGggcmVzcG9uc2UuZW50aXRpZXMuXG5mdW5jdGlvbiBlbnRpdGllcyhzdGF0ZSA9IHsgYm9va3M6IHt9LCB1c2Vyczoge30sIGJvb2tDb2xsZWN0aW9uczoge30gfSwgYWN0aW9uKSB7XG4gIGlmIChhY3Rpb24ucmVzcG9uc2UgJiYgYWN0aW9uLnJlc3BvbnNlLmVudGl0aWVzKSB7XG4gICAgcmV0dXJuIF8ubWVyZ2Uoe30sIHN0YXRlLCBhY3Rpb24ucmVzcG9uc2UuZW50aXRpZXMpXG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuZnVuY3Rpb24gcGF5bG9hZHMoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gIGlmICgoYWN0aW9uLnJlc3BvbnNlIHx8IGFjdGlvbi5lcnJvcikgJiYgYWN0aW9uLnBheWxvYWQpIHtcbiAgICByZXR1cm4gXy5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICBbYWN0aW9uLnBheWxvYWRdOiBhY3Rpb24ucmVzcG9uc2VcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cbi8vIFVwZGF0ZXMgZXJyb3IgbWVzc2FnZSB0byBub3RpZnkgYWJvdXQgdGhlIGZhaWxlZCBmZXRjaGVzLlxuZnVuY3Rpb24gZXJyb3JNZXNzYWdlKHN0YXRlID0gW10sIGFjdGlvbikge1xuICBjb25zdCB7IGVycm9yIH0gPSBhY3Rpb25cblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gWy4uLnN0YXRlLCBhY3Rpb24uZXJyb3JdXG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuZnVuY3Rpb24gc2Vzc2lvbihzdGF0ZSA9IHsgdXNlcjogeyByb2xlOiAndmlzaXRvcicgfSB9LCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1VTRVJfQVVUSF9SRVFVRVNUJzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9KVxuXG4gICAgY2FzZSAnVVNFUl9BVVRIX1NVQ0NFU1MnOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICB1c2VyOiBhY3Rpb24ucmVzcG9uc2VcbiAgICAgIH0pXG5cbiAgICBjYXNlICdVU0VSX0FVVEhfRkFJTFVSRSc6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIHVzZXI6IGFjdGlvbi5yZXNwb25zZVxuICAgICAgfSlcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG4vLyBVcGRhdGVzIHRoZSBwYWdpbmF0aW9uIGRhdGEgZm9yIGRpZmZlcmVudCBhY3Rpb25zLlxuY29uc3QgcGFnaW5hdGlvbiA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIC8vIGJvb2tMaXN0OiBwYWdpbmF0ZSh7XG4gIC8vICAgbWFwQWN0aW9uVG9LZXk6IGFjdGlvbiA9PiBhY3Rpb24uZmlsdGVyLFxuICAvLyAgIHR5cGVzOiBbJ0JPT0tfTElTVF9SRVFVRVNUJywgJ0JPT0tfTElTVF9TVUNDRVNTJywgJ0JPT0tfTElTVF9GQUlMVVJFJ11cbiAgLy8gfSksXG4gIGJvb2tzOiBwYWdpbmF0ZSh7XG4gICAgbWFwQWN0aW9uVG9LZXk6IGFjdGlvbiA9PiBhY3Rpb24uZmxvd1R5cGUsXG4gICAgdHlwZXM6IFsnQk9PS1NfUkVRVUVTVCcsICdCT09LU19TVUNDRVNTJywgJ0JPT0tTX0ZBSUxVUkUnXSxcbiAgICBtZXJnZTogYWN0aW9uID0+IGFjdGlvbi5tZXJnZVxuICB9KSxcbiAgYm9va0NvbGxlY3Rpb25zOiBwYWdpbmF0ZSh7XG4gICAgbWFwQWN0aW9uVG9LZXk6IGFjdGlvbiA9PiBhY3Rpb24uZmxvd1R5cGUsXG4gICAgdHlwZXM6IFsnQ09MTEVDVElPTlNfUkVRVUVTVCcsICdDT0xMRUNUSU9OU19TVUNDRVNTJywgJ0NPTExFQ1RJT05TX0ZBSUxVUkUnXVxuICB9KSxcbiAgLy8gc2hlbGY6IHBhZ2luYXRlKHtcbiAgLy8gICBtYXBBY3Rpb25Ub0tleTogYWN0aW9uID0+IGFjdGlvbi51c2VySWQsXG4gIC8vICAgdHlwZXM6IFsnU0hFTEZfUkVRVUVTVCcsICdTSEVMRl9TVUNDRVNTJywgJ1NIRUxGX0ZBSUxVUkUnXVxuICAvLyB9KSxcbiAgdXNlckxpc3Q6IHBhZ2luYXRlKHtcbiAgICAvLyBUT0RPXG4gICAgbWFwQWN0aW9uVG9LZXk6IGFjdGlvbiA9PiAnYWxsJyxcbiAgICB0eXBlczogWydVU0VSX0xJU1RfUkVRVUVTVCcsICdVU0VSX0xJU1RfU1VDQ0VTUycsICdVU0VSX0xJU1RfRkFJTFVSRSddLFxuICB9KSxcbiAgZG91YmFuQm9va1NlYXJjaFJlc3VsdHM6IHBhZ2luYXRlKHtcbiAgICBtYXBBY3Rpb25Ub0tleTogYWN0aW9uID0+IGFjdGlvbi5xdWVyeSxcbiAgICB0eXBlczogWydET1VCQU5fQk9PS19TRUFSQ0hfUkVRVUVTVCcsICdET1VCQU5fQk9PS19TRUFSQ0hfU1VDQ0VTUycsICdET1VCQU5fQk9PS19TRUFSQ0hfRkFJTFVSRSddXG4gIH0pLFxuICBib29rU2VhcmNoUmVzdWx0czogcGFnaW5hdGUoe1xuICAgIG1hcEFjdGlvblRvS2V5OiBhY3Rpb24gPT4gYWN0aW9uLnF1ZXJ5LFxuICAgIHR5cGVzOiBbJ0JPT0tfU0VBUkNIX1JFUVVFU1QnLCAnQk9PS19TRUFSQ0hfU1VDQ0VTUycsICdCT09LX1NFQVJDSF9GQUlMVVJFJ11cbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGVsZW1lbnRzKHN0YXRlID0ge30sIGFjdGlvbikge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDSEFOR0VfVkFMVUUnKSB7XG4gICAgLy8gbG9kYXNoI21lcmdlIOS4jeaUr+aMgSBTeW1ib2xcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgIFthY3Rpb24ubmFtZV06IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlW2FjdGlvbi5uYW1lXSwge1xuICAgICAgICB2YWx1ZTogYWN0aW9uLnZhbHVlXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdVUERBVEVfRUxFTUVOVCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgIFthY3Rpb24ubmFtZV06IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlW2FjdGlvbi5uYW1lXSwgYWN0aW9uLmRhdGEpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBzdGF0ZVxufVxuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHBheWxvYWRzLFxuICBjb21wb25lbnRzLFxuICBlbGVtZW50cyxcbiAgcm91dGluZyxcbiAgZW50aXRpZXMsXG4gIGVycm9yTWVzc2FnZSxcbiAgcGFnaW5hdGlvbixcbiAgc2Vzc2lvblxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL3JlZHVjZXJzL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvbnMoc3RhdGUgPSBbXSwgYWN0aW9uKSB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0hJREVfTk9USUZJQ0FUSU9OJykge1xuICAgIHJldHVybiBzdGF0ZS5tYXAobiA9PiBuLmlkID09PSBhY3Rpb24uaWQgPyBPYmplY3QuYXNzaWduKHt9LCBuLCB7IHZpc2libGU6IGZhbHNlfSkgOiBuKVxuICB9XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnU0hPV19OT1RJRklDQVRJT04nKSB7XG4gICAgcmV0dXJuIFsuLi5zdGF0ZSwge1xuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IGFjdGlvbi5tZXNzYWdlLFxuICAgICAgdHlwZTogYWN0aW9uLm1zZ1R5cGUsXG4gICAgICBpZDogYWN0aW9uLmlkXG4gICAgfV1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZVxufVxuXG5cbmZ1bmN0aW9uIGRpYWxvZyhzdGF0ZSA9IHt9LCBhY3Rpb24pIHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnT1BFTl9ESUFMT0cnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7aXNWaXNpYmxlOiB0cnVlfSwgYWN0aW9uLmRhdGEpXG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDTE9TRV9ESUFMT0cnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzVmlzaWJsZTogZmFsc2VcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuZnVuY3Rpb24gYmFzaWNNb2RhbChzdGF0ZSA9IHt9LCBhY3Rpb24pIHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnT1BFTl9CQVNJQ19NT0RBTCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtpc1Zpc2libGU6IHRydWV9LCBhY3Rpb24uZGF0YSlcbiAgfVxuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0NMT1NFX0JBU0lDX01PREFMJykge1xuICAgIHJldHVybiB7XG4gICAgICBpc1Zpc2libGU6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmNvbnN0IGNvbXBvbmVudHMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBub3RpZmljYXRpb25zLFxuICBkaWFsb2csXG4gIGJhc2ljTW9kYWxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudHNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL3JlZHVjZXJzL2NvbXBvbmVudHMudHNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbi8vIENyZWF0ZXMgYSByZWR1Y2VyIG1hbmFnaW5nIHBhZ2luYXRpb24sIGdpdmVuIHRoZSBhY3Rpb24gdHlwZXMgdG8gaGFuZGxlLFxuLy8gYW5kIGEgZnVuY3Rpb24gdGVsbGluZyBob3cgdG8gZXh0cmFjdCB0aGUga2V5IGZyb20gYW4gYWN0aW9uLlxuLy8gdG9kbzogdHlwZXMgbGVuZ3RoIHNob3VsZCBiZSAzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdpbmF0ZSh7IHR5cGVzLCBtYXBBY3Rpb25Ub0tleSwgbWVyZ2UgfToge1xuICB0eXBlczogQXJyYXk8c3RyaW5nPlxuICBtYXBBY3Rpb25Ub0tleTogKGFjdGlvbjogYW55KSA9PiBzdHJpbmdcbiAgbWVyZ2U/OiAoYWN0aW9uOiBhbnkpID0+IGJvb2xlYW5cbn0pIHtcbiAgY29uc3QgWyByZXF1ZXN0VHlwZSwgc3VjY2Vzc1R5cGUsIGZhaWx1cmVUeXBlIF0gPSB0eXBlc1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVBhZ2luYXRpb24oc3RhdGUgPSB7XG4gICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgbmV4dFBhZ2VVcmw6IG51bGwsXG4gICAgcGFnZUNvdW50OiAwLFxuICAgIGlkczogW11cbiAgfSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSByZXF1ZXN0VHlwZTpcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgY2FzZSBzdWNjZXNzVHlwZTpcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgaWRzOiAhbWVyZ2UgfHwgbWVyZ2UoYWN0aW9uKVxuICAgICAgICAgICAgPyBfLnVuaW9uKHN0YXRlLmlkcywgYWN0aW9uLnJlc3BvbnNlLnJlc3VsdClcbiAgICAgICAgICAgIDogYWN0aW9uLnJlc3BvbnNlLnJlc3VsdCxcbiAgICAgICAgICAvLyDkuI3kvb/nlKggdW5pb24g5Lya5a+86Ie0IHNlcnZlciByZW5kZXJpbmcg6Zeu6aKY77yfXG4gICAgICAgICAgLy8gaWRzOiBhY3Rpb24ucmVzcG9uc2UucmVzdWx0LFxuICAgICAgICAgIG5leHRQYWdlVXJsOiBhY3Rpb24ucmVzcG9uc2UubmV4dFBhZ2VVcmwsXG4gICAgICAgICAgbmV4dFBhZ2U6IGFjdGlvbi5yZXNwb25zZS5uZXh0UGFnZSxcbiAgICAgICAgICBwYWdlQ291bnQ6IHN0YXRlLnBhZ2VDb3VudCArIDFcbiAgICAgICAgfSlcbiAgICAgIGNhc2UgZmFpbHVyZVR5cGU6XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlUGFnaW5hdGlvbkJ5S2V5KHN0YXRlID0ge30sIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgcmVxdWVzdFR5cGU6XG4gICAgICBjYXNlIHN1Y2Nlc3NUeXBlOlxuICAgICAgY2FzZSBmYWlsdXJlVHlwZTpcbiAgICAgICAgY29uc3Qga2V5OiBzdHJpbmcgPSBtYXBBY3Rpb25Ub0tleShhY3Rpb24pXG5cbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBrZXkgdG8gYmUgYSBzdHJpbmcuJylcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIFtrZXldOiB1cGRhdGVQYWdpbmF0aW9uKHN0YXRlW2tleV0sIGFjdGlvbilcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL3JlZHVjZXJzL3BhZ2luYXRlLnRzXG4gKiovIiwiaW1wb3J0IGNhbGxBcGkgZnJvbSAnLi4vLi4vdXRpbHMvY2FsbEFwaSdcbmltcG9ydCBBcGlSb290cyBmcm9tICcuLi8uLi9jb25maWcnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlID0+IG5leHQgPT4gYWN0aW9uID0+IHtcbiAgY29uc3QgQ0FMTF9BUEkgPSBhY3Rpb24uQ0FMTF9BUElcbiAgaWYgKHR5cGVvZiBDQUxMX0FQSSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbmV4dChhY3Rpb24pXG4gIH1cblxuICBsZXQgeyBlbmRwb2ludCwgYXBpVXJsLCBleHRlbmRlZE9wdGlvbnMgfSA9IENBTExfQVBJXG4gIGNvbnN0IHsgdHlwZXMsIHNjaGVtYSB9ID0gQ0FMTF9BUElcbiAgY29uc3QgW3JlcXVlc3RUeXBlLCBzdWNjZXNzVHlwZSwgZmFpbHVyZVR5cGVdID0gdHlwZXNcblxuICBmdW5jdGlvbiBhY3Rpb25XaXRoKGRhdGEpIHtcbiAgICBjb25zdCBmaW5hbEFjdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIGFjdGlvbiwgZGF0YSlcbiAgICBkZWxldGUgZmluYWxBY3Rpb24uQ0FMTF9BUElcbiAgICByZXR1cm4gZmluYWxBY3Rpb25cbiAgfVxuXG4gIG5leHQoYWN0aW9uV2l0aCh7IHR5cGU6IHJlcXVlc3RUeXBlIH0pKVxuXG4gIGlmICh0eXBlb2YgZW5kcG9pbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlbmRwb2ludCA9IGVuZHBvaW50KHN0b3JlLmdldFN0YXRlKCkpXG4gIH1cblxuICBpZiAodHlwZW9mIGFwaVVybCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBhcGlVcmwgPSBBcGlSb290cy5MT0NBTFxuICB9XG5cbiAgY29uc3QgZnVsbFVybCA9IGFwaVVybCArIGVuZHBvaW50XG4gIGxldCBvcHRpb25zID0geyBzY2hlbWEgfVxuXG4gIGlmICh0eXBlb2YgZXh0ZW5kZWRPcHRpb25zICE9PSAndW5kZWZpbmVkJykge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCBleHRlbmRlZE9wdGlvbnMpXG4gIH1cblxuICByZXR1cm4gY2FsbEFwaShmdWxsVXJsLCBvcHRpb25zKS50aGVuKFxuICAgIHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiBuZXh0KGRpc3BhdGNoID0+IHtcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9uV2l0aCh7XG4gICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgdHlwZTogc3VjY2Vzc1R5cGVcbiAgICAgICAgfSkpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgb2s6IHRydWUsXG4gICAgICAgICAgcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGVycm9yID0+IG5leHQoZGlzcGF0Y2ggPT4ge1xuICAgICAgZGlzcGF0Y2goYWN0aW9uV2l0aCh7XG4gICAgICAgIHR5cGU6IGZhaWx1cmVUeXBlLFxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAn5Y+R55Sf5pyq55+lIEFQSSDplJnor6/vvIEoQ29kZSAxMDAwKSdcbiAgICAgIH0pKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb2s6IGZhbHNlLFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIClcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL21pZGRsZXdhcmUvYXBpLnRzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgc3RvcmUgPT4gbmV4dCA9PiBhY3Rpb24gPT4ge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdET1VCQU5fQk9PS19TRUFSQ0hfU1VDQ0VTUyc6XG4gICAgICAvLyBUT0RPOiBjYW4gYmUgZml4ZWQgaW4gbm9ybWFsaXpyP1xuICAgICAgYWN0aW9uLnJlc3BvbnNlLnJlc3VsdCA9IGFjdGlvbi5yZXNwb25zZS5yZXN1bHQuYm9va3NcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrXG4gIH1cblxuICBuZXh0KGFjdGlvbilcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL21pZGRsZXdhcmUvbW9kaWZ5UmVzcG9uc2UudHNcbiAqKi8iLCJmdW5jdGlvbiBoYW5kbGVJbml0aWFsU3RhdGUoKSB7XG4gIGxldCBpbml0aWFsU3RhdGVcblxuICBpZih0eXBlb2YgKDxhbnk+d2luZG93KS5fX0lOSVRJQUxfU1RBVEVfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpbml0aWFsU3RhdGUgPSAoPGFueT53aW5kb3cpLl9fSU5JVElBTF9TVEFURV9fXG4gIH1cblxuICByZXR1cm4gaW5pdGlhbFN0YXRlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUluaXRpYWxTdGF0ZVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3V0aWxzL2hhbmRsZUluaXRpYWxTdGF0ZS50c1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH1cblxudmFyIHJlcGVhdCA9IGZ1bmN0aW9uIHJlcGVhdChzdHIsIHRpbWVzKSB7XG4gIHJldHVybiBuZXcgQXJyYXkodGltZXMgKyAxKS5qb2luKHN0cik7XG59O1xudmFyIHBhZCA9IGZ1bmN0aW9uIHBhZChudW0sIG1heExlbmd0aCkge1xuICByZXR1cm4gcmVwZWF0KFwiMFwiLCBtYXhMZW5ndGggLSBudW0udG9TdHJpbmcoKS5sZW5ndGgpICsgbnVtO1xufTtcbnZhciBmb3JtYXRUaW1lID0gZnVuY3Rpb24gZm9ybWF0VGltZSh0aW1lKSB7XG4gIHJldHVybiBcIkAgXCIgKyBwYWQodGltZS5nZXRIb3VycygpLCAyKSArIFwiOlwiICsgcGFkKHRpbWUuZ2V0TWludXRlcygpLCAyKSArIFwiOlwiICsgcGFkKHRpbWUuZ2V0U2Vjb25kcygpLCAyKSArIFwiLlwiICsgcGFkKHRpbWUuZ2V0TWlsbGlzZWNvbmRzKCksIDMpO1xufTtcblxuLy8gVXNlIHRoZSBuZXcgcGVyZm9ybWFuY2UgYXBpIHRvIGdldCBiZXR0ZXIgcHJlY2lzaW9uIGlmIGF2YWlsYWJsZVxudmFyIHRpbWVyID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBwZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIiA/IHBlcmZvcm1hbmNlIDogRGF0ZTtcblxuLyoqXG4gKiBwYXJzZSB0aGUgbGV2ZWwgb3B0aW9uIG9mIGNyZWF0ZUxvZ2dlclxuICpcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nIHwgZnVuY3Rpb24gfCBvYmplY3R9IGxldmVsIC0gY29uc29sZVtsZXZlbF1cbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBhY3Rpb25cbiAqIEBwcm9wZXJ0eSB7YXJyYXl9IHBheWxvYWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlXG4gKi9cblxuZnVuY3Rpb24gZ2V0TG9nTGV2ZWwobGV2ZWwsIGFjdGlvbiwgcGF5bG9hZCwgdHlwZSkge1xuICBzd2l0Y2ggKHR5cGVvZiBsZXZlbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGxldmVsKSkge1xuICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgIHJldHVybiB0eXBlb2YgbGV2ZWxbdHlwZV0gPT09IFwiZnVuY3Rpb25cIiA/IGxldmVsW3R5cGVdLmFwcGx5KGxldmVsLCBfdG9Db25zdW1hYmxlQXJyYXkocGF5bG9hZCkpIDogbGV2ZWxbdHlwZV07XG4gICAgY2FzZSBcImZ1bmN0aW9uXCI6XG4gICAgICByZXR1cm4gbGV2ZWwoYWN0aW9uKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGxldmVsO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBsb2dnZXIgd2l0aCBmb2xsb3dlZCBvcHRpb25zXG4gKlxuICogQG5hbWVzcGFjZVxuICogQHByb3BlcnR5IHtvYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIGZvciBsb2dnZXJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nIHwgZnVuY3Rpb24gfCBvYmplY3R9IG9wdGlvbnMubGV2ZWwgLSBjb25zb2xlW2xldmVsXVxuICogQHByb3BlcnR5IHtib29sZWFufSBvcHRpb25zLmR1cmF0aW9uIC0gcHJpbnQgZHVyYXRpb24gb2YgZWFjaCBhY3Rpb24/XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG9wdGlvbnMudGltZXN0YW1wIC0gcHJpbnQgdGltZXN0YW1wIHdpdGggZWFjaCBhY3Rpb24/XG4gKiBAcHJvcGVydHkge29iamVjdH0gb3B0aW9ucy5jb2xvcnMgLSBjdXN0b20gY29sb3JzXG4gKiBAcHJvcGVydHkge29iamVjdH0gb3B0aW9ucy5sb2dnZXIgLSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgYGNvbnNvbGVgIEFQSVxuICogQHByb3BlcnR5IHtib29sZWFufSBvcHRpb25zLmxvZ0Vycm9ycyAtIHNob3VsZCBlcnJvcnMgaW4gYWN0aW9uIGV4ZWN1dGlvbiBiZSBjYXVnaHQsIGxvZ2dlZCwgYW5kIHJlLXRocm93bj9cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3B0aW9ucy5jb2xsYXBzZWQgLSBpcyBncm91cCBjb2xsYXBzZWQ/XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG9wdGlvbnMucHJlZGljYXRlIC0gY29uZGl0aW9uIHdoaWNoIHJlc29sdmVzIGxvZ2dlciBiZWhhdmlvclxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gb3B0aW9ucy5zdGF0ZVRyYW5zZm9ybWVyIC0gdHJhbnNmb3JtIHN0YXRlIGJlZm9yZSBwcmludFxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gb3B0aW9ucy5hY3Rpb25UcmFuc2Zvcm1lciAtIHRyYW5zZm9ybSBhY3Rpb24gYmVmb3JlIHByaW50XG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBvcHRpb25zLmVycm9yVHJhbnNmb3JtZXIgLSB0cmFuc2Zvcm0gZXJyb3IgYmVmb3JlIHByaW50XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlTG9nZ2VyKCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICB2YXIgX29wdGlvbnMkbGV2ZWwgPSBvcHRpb25zLmxldmVsO1xuICB2YXIgbGV2ZWwgPSBfb3B0aW9ucyRsZXZlbCA9PT0gdW5kZWZpbmVkID8gXCJsb2dcIiA6IF9vcHRpb25zJGxldmVsO1xuICB2YXIgX29wdGlvbnMkbG9nZ2VyID0gb3B0aW9ucy5sb2dnZXI7XG4gIHZhciBsb2dnZXIgPSBfb3B0aW9ucyRsb2dnZXIgPT09IHVuZGVmaW5lZCA/IGNvbnNvbGUgOiBfb3B0aW9ucyRsb2dnZXI7XG4gIHZhciBfb3B0aW9ucyRsb2dFcnJvcnMgPSBvcHRpb25zLmxvZ0Vycm9ycztcbiAgdmFyIGxvZ0Vycm9ycyA9IF9vcHRpb25zJGxvZ0Vycm9ycyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9vcHRpb25zJGxvZ0Vycm9ycztcbiAgdmFyIGNvbGxhcHNlZCA9IG9wdGlvbnMuY29sbGFwc2VkO1xuICB2YXIgcHJlZGljYXRlID0gb3B0aW9ucy5wcmVkaWNhdGU7XG4gIHZhciBfb3B0aW9ucyRkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb247XG4gIHZhciBkdXJhdGlvbiA9IF9vcHRpb25zJGR1cmF0aW9uID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9vcHRpb25zJGR1cmF0aW9uO1xuICB2YXIgX29wdGlvbnMkdGltZXN0YW1wID0gb3B0aW9ucy50aW1lc3RhbXA7XG4gIHZhciB0aW1lc3RhbXAgPSBfb3B0aW9ucyR0aW1lc3RhbXAgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfb3B0aW9ucyR0aW1lc3RhbXA7XG4gIHZhciB0cmFuc2Zvcm1lciA9IG9wdGlvbnMudHJhbnNmb3JtZXI7XG4gIHZhciBfb3B0aW9ucyRzdGF0ZVRyYW5zZm8gPSBvcHRpb25zLnN0YXRlVHJhbnNmb3JtZXI7XG4gIHZhciAvLyBkZXByZWNhdGVkXG4gIHN0YXRlVHJhbnNmb3JtZXIgPSBfb3B0aW9ucyRzdGF0ZVRyYW5zZm8gPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfSA6IF9vcHRpb25zJHN0YXRlVHJhbnNmbztcbiAgdmFyIF9vcHRpb25zJGFjdGlvblRyYW5zZiA9IG9wdGlvbnMuYWN0aW9uVHJhbnNmb3JtZXI7XG4gIHZhciBhY3Rpb25UcmFuc2Zvcm1lciA9IF9vcHRpb25zJGFjdGlvblRyYW5zZiA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFjdG4pIHtcbiAgICByZXR1cm4gYWN0bjtcbiAgfSA6IF9vcHRpb25zJGFjdGlvblRyYW5zZjtcbiAgdmFyIF9vcHRpb25zJGVycm9yVHJhbnNmbyA9IG9wdGlvbnMuZXJyb3JUcmFuc2Zvcm1lcjtcbiAgdmFyIGVycm9yVHJhbnNmb3JtZXIgPSBfb3B0aW9ucyRlcnJvclRyYW5zZm8gPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfSA6IF9vcHRpb25zJGVycm9yVHJhbnNmbztcbiAgdmFyIF9vcHRpb25zJGNvbG9ycyA9IG9wdGlvbnMuY29sb3JzO1xuICB2YXIgY29sb3JzID0gX29wdGlvbnMkY29sb3JzID09PSB1bmRlZmluZWQgPyB7XG4gICAgdGl0bGU6IGZ1bmN0aW9uIHRpdGxlKCkge1xuICAgICAgcmV0dXJuIFwiIzAwMDAwMFwiO1xuICAgIH0sXG4gICAgcHJldlN0YXRlOiBmdW5jdGlvbiBwcmV2U3RhdGUoKSB7XG4gICAgICByZXR1cm4gXCIjOUU5RTlFXCI7XG4gICAgfSxcbiAgICBhY3Rpb246IGZ1bmN0aW9uIGFjdGlvbigpIHtcbiAgICAgIHJldHVybiBcIiMwM0E5RjRcIjtcbiAgICB9LFxuICAgIG5leHRTdGF0ZTogZnVuY3Rpb24gbmV4dFN0YXRlKCkge1xuICAgICAgcmV0dXJuIFwiIzRDQUY1MFwiO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKCkge1xuICAgICAgcmV0dXJuIFwiI0YyMDQwNFwiO1xuICAgIH1cbiAgfSA6IF9vcHRpb25zJGNvbG9ycztcblxuICAvLyBleGl0IGlmIGNvbnNvbGUgdW5kZWZpbmVkXG5cbiAgaWYgKHR5cGVvZiBsb2dnZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfTtcbiAgfVxuXG4gIGlmICh0cmFuc2Zvcm1lcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJPcHRpb24gJ3RyYW5zZm9ybWVyJyBpcyBkZXByZWNhdGVkLCB1c2Ugc3RhdGVUcmFuc2Zvcm1lciBpbnN0ZWFkXCIpO1xuICB9XG5cbiAgdmFyIGxvZ0J1ZmZlciA9IFtdO1xuICBmdW5jdGlvbiBwcmludEJ1ZmZlcigpIHtcbiAgICBsb2dCdWZmZXIuZm9yRWFjaChmdW5jdGlvbiAobG9nRW50cnksIGtleSkge1xuICAgICAgdmFyIHN0YXJ0ZWQgPSBsb2dFbnRyeS5zdGFydGVkO1xuICAgICAgdmFyIHN0YXJ0ZWRUaW1lID0gbG9nRW50cnkuc3RhcnRlZFRpbWU7XG4gICAgICB2YXIgYWN0aW9uID0gbG9nRW50cnkuYWN0aW9uO1xuICAgICAgdmFyIHByZXZTdGF0ZSA9IGxvZ0VudHJ5LnByZXZTdGF0ZTtcbiAgICAgIHZhciBlcnJvciA9IGxvZ0VudHJ5LmVycm9yO1xuICAgICAgdmFyIHRvb2sgPSBsb2dFbnRyeS50b29rO1xuICAgICAgdmFyIG5leHRTdGF0ZSA9IGxvZ0VudHJ5Lm5leHRTdGF0ZTtcblxuICAgICAgdmFyIG5leHRFbnRyeSA9IGxvZ0J1ZmZlcltrZXkgKyAxXTtcbiAgICAgIGlmIChuZXh0RW50cnkpIHtcbiAgICAgICAgbmV4dFN0YXRlID0gbmV4dEVudHJ5LnByZXZTdGF0ZTtcbiAgICAgICAgdG9vayA9IG5leHRFbnRyeS5zdGFydGVkIC0gc3RhcnRlZDtcbiAgICAgIH1cbiAgICAgIC8vIG1lc3NhZ2VcbiAgICAgIHZhciBmb3JtYXR0ZWRBY3Rpb24gPSBhY3Rpb25UcmFuc2Zvcm1lcihhY3Rpb24pO1xuICAgICAgdmFyIGlzQ29sbGFwc2VkID0gdHlwZW9mIGNvbGxhcHNlZCA9PT0gXCJmdW5jdGlvblwiID8gY29sbGFwc2VkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICAgIH0sIGFjdGlvbikgOiBjb2xsYXBzZWQ7XG5cbiAgICAgIHZhciBmb3JtYXR0ZWRUaW1lID0gZm9ybWF0VGltZShzdGFydGVkVGltZSk7XG4gICAgICB2YXIgdGl0bGVDU1MgPSBjb2xvcnMudGl0bGUgPyBcImNvbG9yOiBcIiArIGNvbG9ycy50aXRsZShmb3JtYXR0ZWRBY3Rpb24pICsgXCI7XCIgOiBudWxsO1xuICAgICAgdmFyIHRpdGxlID0gXCJhY3Rpb24gXCIgKyAodGltZXN0YW1wID8gZm9ybWF0dGVkVGltZSA6IFwiXCIpICsgXCIgXCIgKyBmb3JtYXR0ZWRBY3Rpb24udHlwZSArIFwiIFwiICsgKGR1cmF0aW9uID8gXCIoaW4gXCIgKyB0b29rLnRvRml4ZWQoMikgKyBcIiBtcylcIiA6IFwiXCIpO1xuXG4gICAgICAvLyByZW5kZXJcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChpc0NvbGxhcHNlZCkge1xuICAgICAgICAgIGlmIChjb2xvcnMudGl0bGUpIGxvZ2dlci5ncm91cENvbGxhcHNlZChcIiVjIFwiICsgdGl0bGUsIHRpdGxlQ1NTKTtlbHNlIGxvZ2dlci5ncm91cENvbGxhcHNlZCh0aXRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGNvbG9ycy50aXRsZSkgbG9nZ2VyLmdyb3VwKFwiJWMgXCIgKyB0aXRsZSwgdGl0bGVDU1MpO2Vsc2UgbG9nZ2VyLmdyb3VwKHRpdGxlKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsb2dnZXIubG9nKHRpdGxlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByZXZTdGF0ZUxldmVsID0gZ2V0TG9nTGV2ZWwobGV2ZWwsIGZvcm1hdHRlZEFjdGlvbiwgW3ByZXZTdGF0ZV0sIFwicHJldlN0YXRlXCIpO1xuICAgICAgdmFyIGFjdGlvbkxldmVsID0gZ2V0TG9nTGV2ZWwobGV2ZWwsIGZvcm1hdHRlZEFjdGlvbiwgW2Zvcm1hdHRlZEFjdGlvbl0sIFwiYWN0aW9uXCIpO1xuICAgICAgdmFyIGVycm9yTGV2ZWwgPSBnZXRMb2dMZXZlbChsZXZlbCwgZm9ybWF0dGVkQWN0aW9uLCBbZXJyb3IsIHByZXZTdGF0ZV0sIFwiZXJyb3JcIik7XG4gICAgICB2YXIgbmV4dFN0YXRlTGV2ZWwgPSBnZXRMb2dMZXZlbChsZXZlbCwgZm9ybWF0dGVkQWN0aW9uLCBbbmV4dFN0YXRlXSwgXCJuZXh0U3RhdGVcIik7XG5cbiAgICAgIGlmIChwcmV2U3RhdGVMZXZlbCkge1xuICAgICAgICBpZiAoY29sb3JzLnByZXZTdGF0ZSkgbG9nZ2VyW3ByZXZTdGF0ZUxldmVsXShcIiVjIHByZXYgc3RhdGVcIiwgXCJjb2xvcjogXCIgKyBjb2xvcnMucHJldlN0YXRlKHByZXZTdGF0ZSkgKyBcIjsgZm9udC13ZWlnaHQ6IGJvbGRcIiwgcHJldlN0YXRlKTtlbHNlIGxvZ2dlcltwcmV2U3RhdGVMZXZlbF0oXCJwcmV2IHN0YXRlXCIsIHByZXZTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3Rpb25MZXZlbCkge1xuICAgICAgICBpZiAoY29sb3JzLmFjdGlvbikgbG9nZ2VyW2FjdGlvbkxldmVsXShcIiVjIGFjdGlvblwiLCBcImNvbG9yOiBcIiArIGNvbG9ycy5hY3Rpb24oZm9ybWF0dGVkQWN0aW9uKSArIFwiOyBmb250LXdlaWdodDogYm9sZFwiLCBmb3JtYXR0ZWRBY3Rpb24pO2Vsc2UgbG9nZ2VyW2FjdGlvbkxldmVsXShcImFjdGlvblwiLCBmb3JtYXR0ZWRBY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXJyb3IgJiYgZXJyb3JMZXZlbCkge1xuICAgICAgICBpZiAoY29sb3JzLmVycm9yKSBsb2dnZXJbZXJyb3JMZXZlbF0oXCIlYyBlcnJvclwiLCBcImNvbG9yOiBcIiArIGNvbG9ycy5lcnJvcihlcnJvciwgcHJldlN0YXRlKSArIFwiOyBmb250LXdlaWdodDogYm9sZFwiLCBlcnJvcik7ZWxzZSBsb2dnZXJbZXJyb3JMZXZlbF0oXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0U3RhdGVMZXZlbCkge1xuICAgICAgICBpZiAoY29sb3JzLm5leHRTdGF0ZSkgbG9nZ2VyW25leHRTdGF0ZUxldmVsXShcIiVjIG5leHQgc3RhdGVcIiwgXCJjb2xvcjogXCIgKyBjb2xvcnMubmV4dFN0YXRlKG5leHRTdGF0ZSkgKyBcIjsgZm9udC13ZWlnaHQ6IGJvbGRcIiwgbmV4dFN0YXRlKTtlbHNlIGxvZ2dlcltuZXh0U3RhdGVMZXZlbF0oXCJuZXh0IHN0YXRlXCIsIG5leHRTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsb2dnZXIubG9nKFwi4oCU4oCUIGxvZyBlbmQg4oCU4oCUXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxvZ0J1ZmZlci5sZW5ndGggPSAwO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGdldFN0YXRlID0gX3JlZi5nZXRTdGF0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIC8vIGV4aXQgZWFybHkgaWYgcHJlZGljYXRlIGZ1bmN0aW9uIHJldHVybnMgZmFsc2VcbiAgICAgICAgaWYgKHR5cGVvZiBwcmVkaWNhdGUgPT09IFwiZnVuY3Rpb25cIiAmJiAhcHJlZGljYXRlKGdldFN0YXRlLCBhY3Rpb24pKSB7XG4gICAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsb2dFbnRyeSA9IHt9O1xuICAgICAgICBsb2dCdWZmZXIucHVzaChsb2dFbnRyeSk7XG5cbiAgICAgICAgbG9nRW50cnkuc3RhcnRlZCA9IHRpbWVyLm5vdygpO1xuICAgICAgICBsb2dFbnRyeS5zdGFydGVkVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxvZ0VudHJ5LnByZXZTdGF0ZSA9IHN0YXRlVHJhbnNmb3JtZXIoZ2V0U3RhdGUoKSk7XG4gICAgICAgIGxvZ0VudHJ5LmFjdGlvbiA9IGFjdGlvbjtcblxuICAgICAgICB2YXIgcmV0dXJuZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGxvZ0Vycm9ycykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm5lZFZhbHVlID0gbmV4dChhY3Rpb24pO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGxvZ0VudHJ5LmVycm9yID0gZXJyb3JUcmFuc2Zvcm1lcihlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuZWRWYWx1ZSA9IG5leHQoYWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvZ0VudHJ5LnRvb2sgPSB0aW1lci5ub3coKSAtIGxvZ0VudHJ5LnN0YXJ0ZWQ7XG4gICAgICAgIGxvZ0VudHJ5Lm5leHRTdGF0ZSA9IHN0YXRlVHJhbnNmb3JtZXIoZ2V0U3RhdGUoKSk7XG5cbiAgICAgICAgcHJpbnRCdWZmZXIoKTtcblxuICAgICAgICBpZiAobG9nRW50cnkuZXJyb3IpIHRocm93IGxvZ0VudHJ5LmVycm9yO1xuICAgICAgICByZXR1cm4gcmV0dXJuZWRWYWx1ZTtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVMb2dnZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtbG9nZ2VyL2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE4OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==