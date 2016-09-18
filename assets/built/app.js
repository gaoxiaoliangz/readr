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
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Root = __webpack_require__(6);
	
	var _Root2 = _interopRequireDefault(_Root);
	
	var _AppMaster = __webpack_require__(44);
	
	var _AppMaster2 = _interopRequireDefault(_AppMaster);
	
	var _AppCommon = __webpack_require__(45);
	
	var _AppCommon2 = _interopRequireDefault(_AppCommon);
	
	var _ConsoleMaster = __webpack_require__(72);
	
	var _ConsoleMaster2 = _interopRequireDefault(_ConsoleMaster);
	
	var _reactRouter = __webpack_require__(4);
	
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
	exports.default = _react2.default.createElement(_reactRouter.Route, { component: _Root2.default }, _react2.default.createElement(_reactRouter.Route, { component: _AppMaster2.default }, _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(82))), _react2.default.createElement(_reactRouter.Route, { component: _AppCommon2.default }, _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(105))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(130))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(133))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(138))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(145))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(148))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(150))), _react2.default.createElement(_reactRouter.Route, { path: "user", component: "div" }, _react2.default.createElement(_reactRouter.IndexRedirect, { to: "/user/profile" }), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(152))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(158))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(163))))), _react2.default.createElement(_reactRouter.Route, { path: "console", component: _ConsoleMaster2.default }, _react2.default.createElement(_reactRouter.IndexRedirect, { to: "/console/books" }), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(166))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(169))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(171))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(175))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(177))))));

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
	    // fetchConfig.headers = {
	    //   cookie: '_ga=GA1.1.410132503.1453088618; CNZZDATA1257029607=442358406-1450870215-%7C1458711437; CNZZDATA1257570141=1358999760-1456132031-%7C1458714910; loginType=0; connect.sid=s%3ARq4fRaeI2ibNVEp6T-EX9GrmfJ_zdDew.NfHRTBDEPdeVj9heJIVqP45lCU94R4%2Fcr%2BFziRY3y9w'
	    // }
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
	
	var _handleServerStore = __webpack_require__(188);
	
	var _handleServerStore2 = _interopRequireDefault(_handleServerStore);
	
	var _handleInitialState = __webpack_require__(189);
	
	var _handleInitialState2 = _interopRequireDefault(_handleInitialState);
	
	var _logActionTypes = __webpack_require__(190);
	
	var _logActionTypes2 = _interopRequireDefault(_logActionTypes);
	
	var _reduxLogger = __webpack_require__(191);
	
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
	            if (action.type === 'DOUBAN_BOOK_SEARCH_SUCCESS') {
	                action.response.result = action.response.result.books;
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
/* 189 */
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
/* 190 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (store) {
	    return function (next) {
	        return function (action) {
	            console.info(action.type);
	            next(action);
	        };
	    };
	};

/***/ },
/* 191 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2M4ZWM5MmFkNzlkY2ZkMDk4MTAiLCJ3ZWJwYWNrOi8vL3NyYy9lbnRyeS9hcHAudHN4Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJfcmVhY3Rfa2l0X2RsbFwiIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvcmVhY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2tpdF9kbGwiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvUm9vdC50c3giLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9zdG9yZS9hY3Rpb25zL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9zdG9yZS9hY3Rpb25zL2Jvb2sudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3NjaGVtYXMudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9ub3JtYWxpenIvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfdXRpbHNfZGxsIiwid2VicGFjazovLy9leHRlcm5hbCBcIl91dGlsc19kbGxcIiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvYWN0aW9ucy9jb21wb25lbnRzLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9zdG9yZS9hY3Rpb25zL3VzZXIudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0FsZXJ0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvQWxlcnQvQWxlcnQudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9JY29uL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9JY29uL0ljb24udHN4Iiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvSWNvbi9zdmctaWNvbnMudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1jc3MtbW9kdWxlcy9kaXN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9JY29uL0ljb24uY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0FsZXJ0L19hbGVydC5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9BbGVydC9BbGVydHMudHN4Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbG9kYXNoL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfdXRpbHNfZGxsIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9EaWFsb2cvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0RpYWxvZy9EaWFsb2cudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Nb2RhbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTW9kYWwvTW9kYWwudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvdXRpbHMvcGFyc2VGb3JtRGF0YS50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvdXRpbHMvbG9ja1Njcm9sbC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvdXRpbHMvdW5sb2NrU2Nyb2xsLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy91dGlscy9nZXRTY3JlZW5JbmZvLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fYW5pbWF0aW9ucy9GYWRlL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fYW5pbWF0aW9ucy9GYWRlL0ZhZGUudHN4Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fYW5pbWF0aW9ucy9GYWRlL0ZhZGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL01vZGFsL19tb2RhbC5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9CdXR0b24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0J1dHRvbi9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0J1dHRvbi9fYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRGlhbG9nL0RpYWxvZy5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb250YWluZXJzL0FwcE1hc3Rlci50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvQXBwQ29tbW9uLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9CcmFuZGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQnJhbmRpbmcvQnJhbmRpbmcudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fbGF5b3V0L2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fbGF5b3V0L0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0Ryb3Bkb3duL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Ecm9wZG93bi9Ecm9wZG93bi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRHJvcGRvd24vRHJvcGRvd24uc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRHJvcGRvd24vRHJvcGRvd25JdGVtLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRHJvcGRvd24vRHJvcGRvd25JdGVtU2VwLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Mb2dvL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0xvZ28vTG9nby50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Mb2dvL0xvZ28uY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQnJhbmRpbmcvQnJhbmRpbmcuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xvcGhvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xvcGhvbi9Db2xvcGhvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xvcGhvbi9Db2xvcGhvbi5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2FwaXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2FwaXMvYXBpcy50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvdXRpbHMvY2FsbEFwaS50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtZmV0Y2gvZmV0Y2gtbnBtLWJyb3dzZXJpZnkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIF91dGlsc19kbGwiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3V0aWxzL2hhbmRsZVJlc3BvbnNlLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaHVtcHMvaHVtcHMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIF91dGlsc19kbGwiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3V0aWxzL3BhcnNlUXVlcnlTdHJpbmcudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvYXBpcy9leHRlcm5hbEFwaXMudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3V0aWxzL2pzb25wLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb250YWluZXJzL0NvbnNvbGVNYXN0ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvQ29uc29sZU1hc3Rlci9Db25zb2xlTWFzdGVyLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db25zb2xlQnJhbmRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29uc29sZUJyYW5kaW5nL0NvbnNvbGVCcmFuZGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db25zb2xlQnJhbmRpbmcvQ29uc29sZUJyYW5kaW5nLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29uc29sZVNpZGViYXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29uc29sZVNpZGViYXIvQ29uc29sZVNpZGViYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29uc29sZVNpZGViYXIvQ29uc29sZVNpZGViYXIuY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb250ZW50L21lbnVzLnRzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvQ29uc29sZU1hc3Rlci9Db25zb2xlTWFzdGVyLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FwcEhvbWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Ccm93c2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Cb29rRGV0YWlsL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQ29sbGVjdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Db2xsZWN0aW9uRGV0YWlsL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvU2lnbmluL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvU2lnbnVwL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvU2hlbGYvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9QcmVmZXJlbmNlL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvUHJvZmlsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlVXNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9BZGRCb29rL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQ29sbGVjdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL05vTWF0Y2gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3N0b3JlL3JlZHVjZXJzL2NvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3N0b3JlL3JlZHVjZXJzL3BhZ2luYXRlLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9zdG9yZS9taWRkbGV3YXJlL2FwaS50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvbWlkZGxld2FyZS9tb2RpZnlSZXNwb25zZS50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvbWlkZGxld2FyZS9oYW5kbGVTZXJ2ZXJTdG9yZS50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvdXRpbHMvaGFuZGxlSW5pdGlhbFN0YXRlLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9zdG9yZS9taWRkbGV3YXJlL2xvZ0FjdGlvblR5cGVzLnRzIiwid2VicGFjazovLy8uL34vcmVkdXgtbG9nZ2VyL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5RUFBaUU7QUFDakU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3pGa0M7O0FBQ1Q7Ozs7QUFDbUM7O0FBQ25COzs7O0FBQ0g7O0FBQ21COztBQUNNOzs7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Q0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSBmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhjaHVua0lkcywgbW9yZU1vZHVsZXMpIHtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCBjYWxsYmFja3MgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKVxuIFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2guYXBwbHkoY2FsbGJhY2tzLCBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pO1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihjaHVua0lkcywgbW9yZU1vZHVsZXMpO1xuIFx0XHR3aGlsZShjYWxsYmFja3MubGVuZ3RoKVxuIFx0XHRcdGNhbGxiYWNrcy5zaGlmdCgpLmNhbGwobnVsbCwgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdC8vIEFycmF5IG1lYW5zIFwibG9hZGluZ1wiLCBhcnJheSBjb250YWlucyBjYWxsYmFja3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDA6MFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCwgY2FsbGJhY2spIHtcbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMClcbiBcdFx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbChudWxsLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBhbiBhcnJheSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkKSB7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdLnB1c2goY2FsbGJhY2spO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbY2FsbGJhY2tdO1xuIFx0XHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiBcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiBcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcblxuIFx0XHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCI7XG4gXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDdjOGVjOTJhZDc5ZGNmZDA5ODEwXG4gKiovIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnksIFJvdXRlciwgbWF0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgcm91dGVzIGZyb20gJy4uL2lzb21vcnBoaWMvcm91dGVzJ1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHN5bmNIaXN0b3J5V2l0aFN0b3JlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4J1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4uL2lzb21vcnBoaWMvc3RvcmUvY29uZmlndXJlU3RvcmUnXG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKVxuY29uc3QgaGlzdG9yeSA9IHN5bmNIaXN0b3J5V2l0aFN0b3JlKGJyb3dzZXJIaXN0b3J5LCBzdG9yZSlcblxubWF0Y2goeyBoaXN0b3J5LCByb3V0ZXMgfSwgKGVycm9yLCByZWRpcmVjdExvY2F0aW9uLCByZW5kZXJQcm9wcykgPT4ge1xuICByZW5kZXIoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8Um91dGVyIHsuLi5yZW5kZXJQcm9wc30gLz5cbiAgICA8L1Byb3ZpZGVyPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSlcbn0pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvZW50cnkvYXBwLnRzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDM4KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfcmVhY3Rfa2l0X2RsbDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiX3JlYWN0X2tpdF9kbGxcIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbFxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDYwMCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2tpdF9kbGxcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm9vdCBmcm9tICcuLi9jb250YWluZXJzL1Jvb3QnXG5pbXBvcnQgQXBwTWFzdGVyIGZyb20gJy4uL2NvbnRhaW5lcnMvQXBwTWFzdGVyJ1xuaW1wb3J0IEFwcENvbW1vbiBmcm9tICcuLi9jb250YWluZXJzL0FwcENvbW1vbidcbmltcG9ydCBDb25zb2xlTWFzdGVyIGZyb20gJy4uL2NvbnRhaW5lcnMvQ29uc29sZU1hc3RlcidcbmltcG9ydCB7IFJvdXRlLCBJbmRleFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5leHBvcnQgZGVmYXVsdCAoXG4gIDxSb3V0ZSBjb21wb25lbnQ9e1Jvb3R9PlxuICAgIDxSb3V0ZSBjb21wb25lbnQ9e0FwcE1hc3Rlcn0+XG4gICAgICA8Um91dGUgey4uLnJlcXVpcmUoJy4vVmlld2VyJyl9IC8+XG4gICAgICA8Um91dGUgY29tcG9uZW50PXtBcHBDb21tb259PlxuICAgICAgICA8Um91dGUgey4uLnJlcXVpcmUoJy4vQXBwSG9tZScpfSAvPlxuICAgICAgICA8Um91dGUgey4uLnJlcXVpcmUoJy4vQnJvd3NlJyl9IC8+XG4gICAgICAgIDxSb3V0ZSB7Li4ucmVxdWlyZSgnLi9Cb29rRGV0YWlsJyl9IC8+XG4gICAgICAgIDxSb3V0ZSB7Li4ucmVxdWlyZSgnLi9Db2xsZWN0aW9ucycpfSAvPlxuICAgICAgICA8Um91dGUgey4uLnJlcXVpcmUoJy4vQ29sbGVjdGlvbkRldGFpbCcpfSAvPlxuICAgICAgICA8Um91dGUgey4uLnJlcXVpcmUoJy4vU2lnbmluJyl9IC8+XG4gICAgICAgIDxSb3V0ZSB7Li4ucmVxdWlyZSgnLi9TaWdudXAnKX0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJ1c2VyXCIgY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgPEluZGV4UmVkaXJlY3QgdG89XCIvdXNlci9wcm9maWxlXCIgLz5cbiAgICAgICAgICA8Um91dGUgey4uLnJlcXVpcmUoJy4vU2hlbGYnKX0gLz5cbiAgICAgICAgICA8Um91dGUgey4uLnJlcXVpcmUoJy4vUHJlZmVyZW5jZScpfSAvPlxuICAgICAgICAgIDxSb3V0ZSB7Li4ucmVxdWlyZSgnLi9Qcm9maWxlJyl9IC8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICA8L1JvdXRlPlxuICAgICAgPFJvdXRlIHBhdGg9XCJjb25zb2xlXCIgY29tcG9uZW50PXtDb25zb2xlTWFzdGVyfT5cbiAgICAgICAgPEluZGV4UmVkaXJlY3QgdG89XCIvY29uc29sZS9ib29rc1wiIC8+XG4gICAgICAgIDxSb3V0ZSB7Li4ucmVxdWlyZSgnLi9NYW5hZ2VCb29rcycpfSAvPlxuICAgICAgICA8Um91dGUgey4uLnJlcXVpcmUoJy4vTWFuYWdlVXNlcnMnKX0gLz5cbiAgICAgICAgPFJvdXRlIHsuLi5yZXF1aXJlKCcuL0FkZEJvb2snKX0gLz5cbiAgICAgICAgPFJvdXRlIHsuLi5yZXF1aXJlKCcuL0FkZENvbGxlY3Rpb24nKX0gLz5cbiAgICAgICAgPFJvdXRlIHsuLi5yZXF1aXJlKCcuL05vTWF0Y2gnKX0gLz5cbiAgICAgIDwvUm91dGU+XG4gICAgPC9Sb3V0ZT5cbiAgPC9Sb3V0ZT5cbilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9pbmRleC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24sIGhpZGVOb3RpZmljYXRpb24sIGNsb3NlRGlhbG9nLCB1c2VyQXV0aCB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgeyBBbGVydHMgfSBmcm9tICcuLi9lbGVtZW50cy9BbGVydCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi4vZWxlbWVudHMvRGlhbG9nJ1xuXG5pbnRlcmZhY2UgSUFsbFByb3BzIHtcbiAgbm90aWZpY2F0aW9uczogYW55XG4gIGhpZGVOb3RpZmljYXRpb246IGFueVxuICBlcnJvck1lc3NhZ2U6IHN0cmluZ1xuICBzZW5kTm90aWZpY2F0aW9uOiBhbnlcbiAgZGlhbG9nOiBhbnlcbiAgY2xvc2VEaWFsb2c6IGFueVxuICB1c2VyQXV0aDogYW55XG4gIHJvdXRpbmc6IGFueVxuICBzZXNzaW9uOiBhbnlcbn1cblxuY2xhc3MgUm9vdCBleHRlbmRzIENvbXBvbmVudDxJQWxsUHJvcHMsIHt9PiB7XG5cbiAgc3RhdGljIGZldGNoRGF0YSh7IHN0b3JlLCB1c2VyU2Vzc2lvbiB9KSB7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKHVzZXJBdXRoKHVzZXJTZXNzaW9uKSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnN0IGhhc05ld0Vycm9yTXNnID0gdGhpcy5wcm9wcy5lcnJvck1lc3NhZ2UubGVuZ3RoICE9PSBuZXh0UHJvcHMuZXJyb3JNZXNzYWdlLmxlbmd0aFxuICAgIGNvbnN0IHJvdXRlckNoYW5nZWQgPSBuZXh0UHJvcHMucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zLnBhdGhuYW1lICE9PSB0aGlzLnByb3BzLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucy5wYXRobmFtZVxuXG4gICAgaWYgKGhhc05ld0Vycm9yTXNnKSB7XG4gICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oXy5sYXN0KG5leHRQcm9wcy5lcnJvck1lc3NhZ2UpLCAnZXJyb3InKVxuICAgIH1cblxuICAgIGlmIChyb3V0ZXJDaGFuZ2VkKSB7XG4gICAgICAvLyDov5Tlm57pobbpg6hcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDBcblxuICAgICAgLy8g566A5Y2V5p2D6ZmQ6aqM6K+BXG4gICAgICBpZiAobmV4dFByb3BzLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucy5wYXRobmFtZS5pbmRleE9mKCdjb25zb2xlJykgIT09IC0xKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlc3Npb24udXNlci5yb2xlICE9PSAnYWRtaW4nKSB7XG4gICAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCgnLycpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnVzZXJBdXRoKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRpYWxvZywgY2xvc2VEaWFsb2cgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1yb290XCI+XG4gICAgICAgIDxEaWFsb2dcbiAgICAgICAgICBpc1Zpc2libGU9e2RpYWxvZy5pc1Zpc2libGV9XG4gICAgICAgICAgdGl0bGU9e2RpYWxvZy50aXRsZX1cbiAgICAgICAgICBvbkNvbmZpcm09e2RpYWxvZy5vbkNvbmZpcm19XG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlRGlhbG9nfVxuICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgPlxuICAgICAgICAgIHtkaWFsb2cuY29udGVudH1cbiAgICAgICAgPC9EaWFsb2c+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm5vdGlmaWNhdGlvbnMuZmlsdGVyKG5vdGkgPT4gbm90aS52aXNpYmxlKS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxBbGVydHNcbiAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMucHJvcHMuaGlkZU5vdGlmaWNhdGlvbn1cbiAgICAgICAgICAgICAgbWVzc2FnZXM9e3RoaXMucHJvcHMubm90aWZpY2F0aW9ucy5tYXAobm90aSA9PiAoe1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG5vdGkubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBub3RpLnR5cGUsXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogbm90aS52aXNpYmxlLFxuICAgICAgICAgICAgICAgIGlkOiBub3RpLmlkXG4gICAgICAgICAgICAgIH0pKSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCBJQWxsUHJvcHM+KFxuICBzdGF0ZSA9PiAoe1xuICAgIG5vdGlmaWNhdGlvbnM6IHN0YXRlLmNvbXBvbmVudHMubm90aWZpY2F0aW9ucyxcbiAgICBlcnJvck1lc3NhZ2U6IHN0YXRlLmVycm9yTWVzc2FnZSxcbiAgICBkaWFsb2c6IHN0YXRlLmNvbXBvbmVudHMuZGlhbG9nLFxuICAgIHJvdXRpbmc6IHN0YXRlLnJvdXRpbmcsXG4gICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvbixcbiAgfSksXG4gIHsgc2VuZE5vdGlmaWNhdGlvbiwgaGlkZU5vdGlmaWNhdGlvbiwgY2xvc2VEaWFsb2csIHVzZXJBdXRoIH1cbikoUm9vdClcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvUm9vdC50c3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg0NDkpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2tpdF9kbGxcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgKiBmcm9tICcuLi9hY3Rpb25zL2Jvb2snXG5leHBvcnQgKiBmcm9tICcuLi9hY3Rpb25zL2NvbXBvbmVudHMnXG5leHBvcnQgKiBmcm9tICcuLi9hY3Rpb25zL3VzZXInXG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VWYWx1ZShuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdDSEFOR0VfVkFMVUUnLFxuICAgIG5hbWUsXG4gICAgdmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRWxlbWVudChuYW1lLCBkYXRhKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1VQREFURV9FTEVNRU5UJyxcbiAgICBuYW1lLFxuICAgIGRhdGFcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvYWN0aW9ucy9pbmRleC50c1xuICoqLyIsImltcG9ydCB7IFNjaGVtYXMgfSBmcm9tICcuLi8uLi9zY2hlbWFzJ1xuXG5leHBvcnQgdHlwZSBmZXRjaEJvb2tzID0ge1xuICBmbG93VHlwZT86ICduZXdlc3QnIHwgJ2hvdCdcbiAgcGFnZT86IG51bWJlclxuICBtZXJnZT86IGJvb2xlYW5cbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEJvb2tzKGNvbmZpZz86IGZldGNoQm9va3MpIHtcbiAgY29uc3QgZGVmYXVsdENvbmZpZyA9IHsgZmxvd1R5cGU6ICduZXdlc3QnLCBwYWdlOiAxLCBtZXJnZTogdHJ1ZX1cbiAgY29uc3QgeyBmbG93VHlwZSwgcGFnZSwgbWVyZ2UgfSA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgY29uZmlnIHx8IHt9KVxuXG4gIHJldHVybiB7XG4gICAgLy8gZm9yIHBhZ2luYXRlXG4gICAgZmxvd1R5cGUsXG4gICAgbWVyZ2UsXG4gICAgQ0FMTF9BUEk6IHtcbiAgICAgIHR5cGVzOiBbJ0JPT0tTX1JFUVVFU1QnLCAnQk9PS1NfU1VDQ0VTUycsICdCT09LU19GQUlMVVJFJ10sXG4gICAgICBlbmRwb2ludDogYGJvb2tzP2V4Y2x1ZGU9Y29udGVudCZwYWdlPSR7cGFnZX1gLFxuICAgICAgc2NoZW1hOiBTY2hlbWFzLkJPT0tfQVJSQVksXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEJvb2soYm9va0lkLCBmaWVsZHM/OiBBcnJheTxhbnk+KSB7XG4gIGxldCBlbmRwb2ludCA9IGBib29rcy8ke2Jvb2tJZH1gXG5cbiAgaWYgKGZpZWxkcykge1xuICAgIGVuZHBvaW50ICs9IGA/ZmllbGRzPSR7ZmllbGRzLmpvaW4oJywnKX1gXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJvb2tJZCxcbiAgICBDQUxMX0FQSToge1xuICAgICAgdHlwZXM6IFsnQk9PS19SRVFVRVNUJywgJ0JPT0tfU1VDQ0VTUycsICdCT09LX0ZBSUxVUkUnXSxcbiAgICAgIGVuZHBvaW50LFxuICAgICAgc2NoZW1hOiBTY2hlbWFzLkJPT0tcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQ29sbGVjdGlvbnMoZmxvd1R5cGU6ICduZXdlc3QnIHwgJ2hvdCcgPSAnbmV3ZXN0Jykge1xuICByZXR1cm4ge1xuICAgIGZsb3dUeXBlLFxuICAgIENBTExfQVBJOiB7XG4gICAgICB0eXBlczogWydDT0xMRUNUSU9OU19SRVFVRVNUJywgJ0NPTExFQ1RJT05TX1NVQ0NFU1MnLCAnQ09MTEVDVElPTlNfRkFJTFVSRSddLFxuICAgICAgZW5kcG9pbnQ6IGBjb2xsZWN0aW9uc2AsXG4gICAgICBzY2hlbWE6IFNjaGVtYXMuQ09MTEVDVElPTl9BUlJBWVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hDb2xsZWN0aW9uKGNvbGxlY3Rpb25JZCkge1xuICByZXR1cm4ge1xuICAgIGNvbGxlY3Rpb25JZCxcbiAgICBDQUxMX0FQSToge1xuICAgICAgdHlwZXM6IFsnQ09MTEVDVElPTl9SRVFVRVNUJywgJ0NPTExFQ1RJT05fU1VDQ0VTUycsICdDT0xMRUNUSU9OX0ZBSUxVUkUnXSxcbiAgICAgIGVuZHBvaW50OiBgY29sbGVjdGlvbnMvJHtjb2xsZWN0aW9uSWR9YCxcbiAgICAgIHNjaGVtYTogU2NoZW1hcy5DT0xMRUNUSU9OXG4gICAgfVxuICB9XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBmZXRjaEJvb2tDb250ZW50KGJvb2tJZCkge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIGJvb2tJZCxcbi8vICAgICBDQUxMX0FQSToge1xuLy8gICAgICAgdHlwZXM6IFsnQk9PS19DT05URU5UX1JFUVVFU1QnLCAnQk9PS19DT05URU5UX1NVQ0NFU1MnLCAnQk9PS19DT05URU5UX0ZBSUxVUkUnXSxcbi8vICAgICAgIGVuZHBvaW50OiBgYm9va3MvJHtib29rSWR9L2NvbnRlbnRgLFxuLy8gICAgICAgc2NoZW1hOiBTY2hlbWFzLkJPT0tcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyBleHBvcnQgZnVuY3Rpb24gZmV0Y2hCb29rSW5mbyhib29rSWQpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBib29rSWQsXG4vLyAgICAgQ0FMTF9BUEk6e1xuLy8gICAgICAgdHlwZXM6IFsnQk9PS19JTkZPX1JFUVVFU1QnLCAnQk9PS19JTkZPX1NVQ0NFU1MnLCAnQk9PS19JTkZPX0ZBSUxVUkUnXSxcbi8vICAgICAgIGVuZHBvaW50OiBgYm9va3MvJHtib29rSWR9YCxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5CT09LX0FSUkFZXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBmZXRjaERvdWJhbkJvb2tTZWFyY2hSZXN1bHRzKHF1ZXJ5KSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgcXVlcnksXG4vLyAgICAgQ0FMTF9BUEk6IHtcbi8vICAgICAgIHR5cGVzOiBbJ0RPVUJBTl9CT09LX1NFQVJDSF9SRVFVRVNUJywgJ0RPVUJBTl9CT09LX1NFQVJDSF9TVUNDRVNTJywgJ0RPVUJBTl9CT09LX1NFQVJDSF9GQUlMVVJFJ10sXG4vLyAgICAgICBlbmRwb2ludDogYHNlYXJjaD9jb3VudD01JnE9JHtxdWVyeX1gLFxuLy8gICAgICAgYXBpVXJsOiBBcGlSb290cy5ET1VCQU5fQk9PS1MsXG4vLyAgICAgICBzY2hlbWE6IFNjaGVtYXMuRE9VQkFOX0JPT0tfU0VBUkNIX1JFU1VMVFMsXG4vLyAgICAgICBleHRlbmRlZE9wdGlvbnM6IHsgdXNlSnNvbnA6IHRydWUgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gc2VhcmNoQm9va3MocXVlcnkpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBxdWVyeSxcbi8vICAgICBDQUxMX0FQSToge1xuLy8gICAgICAgdHlwZXM6IFsnQk9PS19TRUFSQ0hfUkVRVUVTVCcsICdCT09LX1NFQVJDSF9TVUNDRVNTJywgJ0JPT0tfU0VBUkNIX0ZBSUxVUkUnXSxcbi8vICAgICAgIGVuZHBvaW50OiBgc2VhcmNoP3E9JHtxdWVyeX1gLFxuLy8gICAgICAgYXBpVXJsOiBBcGlSb290cy5MT0NBTCxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5NQVRDSEVEX0JPT0tfQVJSQVlcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL2FjdGlvbnMvYm9vay50c1xuICoqLyIsImltcG9ydCB7IFNjaGVtYSwgYXJyYXlPZiwgbm9ybWFsaXplLCB1bmlvbk9mIH0gZnJvbSAnbm9ybWFsaXpyJ1xuXG5jb25zdCBib29rID0gbmV3IFNjaGVtYSgnYm9va3MnLCB7XG4gIGlkQXR0cmlidXRlOiAnaWQnXG59KVxuXG5jb25zdCBjb2xsZWN0aW9uID0gbmV3IFNjaGVtYSgnYm9va0NvbGxlY3Rpb25zJywge1xuICBpZEF0dHJpYnV0ZTogJ2lkJ1xufSlcblxuY29uc3QgcHJvZmlsZSA9IG5ldyBTY2hlbWEoJ3Byb2ZpbGVzJywge1xuICBpZEF0dHJpYnV0ZTogJ2lkJ1xufSlcblxuY29uc3QgdXNlciA9IG5ldyBTY2hlbWEoJ3VzZXJzJywge1xuICBpZEF0dHJpYnV0ZTogJ2lkJ1xufSlcblxuY29uc3QgZG91YmFuQm9vayA9IG5ldyBTY2hlbWEoJ2RvdWJhbkJvb2tzJywge1xuICBpZEF0dHJpYnV0ZTogJ2lkJ1xufSlcblxuY29uc3QgYm9va1Byb2dyZXNzID0gbmV3IFNjaGVtYSgnYm9va3MnLCB7XG4gIGlkQXR0cmlidXRlOiAnYm9va0lkJ1xufSlcblxuY29uc3QgbWF0Y2hlZEJvb2tzID0gbmV3IFNjaGVtYSgnYm9va3MnLCB7XG4gIGlkQXR0cmlidXRlOiAnYm9va0lkJ1xufSlcblxuZXhwb3J0IGNvbnN0IFNjaGVtYXMgPSB7XG4gIEJPT0s6IGJvb2ssXG4gIEJPT0tfUFJPR1JFU1M6IGJvb2tQcm9ncmVzcyxcbiAgQk9PS19BUlJBWTogYXJyYXlPZihib29rKSxcbiAgRE9VQkFOX0JPT0tfU0VBUkNIX1JFU1VMVFM6IHtib29rczogYXJyYXlPZihkb3ViYW5Cb29rKX0sXG4gIFVTRVJfQVJSQVk6IGFycmF5T2YodXNlciksXG4gIE1BVENIRURfQk9PS19BUlJBWTogYXJyYXlPZihtYXRjaGVkQm9va3MpLFxuICBDT0xMRUNUSU9OOiBjb2xsZWN0aW9uLFxuICBDT0xMRUNUSU9OX0FSUkFZOiBhcnJheU9mKGNvbGxlY3Rpb24pLFxuICBQUk9GSUxFOiBwcm9maWxlXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zY2hlbWFzLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxMikpKDY4MCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbm9ybWFsaXpyL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3V0aWxzX2RsbFxuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF91dGlsc19kbGw7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIl91dGlsc19kbGxcIlxuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgdHlwZSBNc2dUeXBlID0gJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICd3YXJuaW5nJyB8ICdvbmdvaW5nJ1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmROb3RpZmljYXRpb24obWVzc2FnZTogc3RyaW5nLCBtc2dUeXBlOiBNc2dUeXBlID0gJ3N1Y2Nlc3MnLCB0ID0gMjAwMCkge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGlkID0gTWF0aC5yYW5kb20oKS50b0ZpeGVkKDgpLnN1YnN0cigyKVxuXG4gICAgZGlzcGF0Y2goc2hvd05vdGlmaWNhdGlvbihpZCwgbWVzc2FnZSwgbXNnVHlwZSkpXG4gICAgaWYgKHQgIT09IDApIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChoaWRlTm90aWZpY2F0aW9uKGlkKSlcbiAgICAgIH0sIHQpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBTSE9XX05PVElGSUNBVElPTiA9ICdTSE9XX05PVElGSUNBVElPTidcbmV4cG9ydCBmdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uKGlkOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgbXNnVHlwZTogTXNnVHlwZSA9ICdzdWNjZXNzJykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNIT1dfTk9USUZJQ0FUSU9OLFxuICAgIG1lc3NhZ2UsXG4gICAgbXNnVHlwZSxcbiAgICBpZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBISURFX05PVElGSUNBVElPTiA9ICdISURFX05PVElGSUNBVElPTidcbmV4cG9ydCBmdW5jdGlvbiBoaWRlTm90aWZpY2F0aW9uKGlkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBISURFX05PVElGSUNBVElPTixcbiAgICBpZFxuICB9XG59XG5cbi8vIGRpYWxvZ1xuZXhwb3J0IHR5cGUgb3BlbkRpYWxvZyA9IHtcbiAgdGl0bGU/OiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG4gIG9uQ29uZmlybTogKCkgPT4gdm9pZFxufVxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5EaWFsb2coZGF0YTogb3BlbkRpYWxvZykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdPUEVOX0RJQUxPRycsXG4gICAgZGF0YVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZURpYWxvZygpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQ0xPU0VfRElBTE9HJ1xuICB9XG59XG5cbi8vIGJhc2ljIG1vZGFsXG5leHBvcnQgdHlwZSBvcGVuQmFzaWNNb2RhbCA9IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBzdWJUaXRsZT86IHN0cmluZ1xuICBjb250ZW50PzogSlNYLkVsZW1lbnRcbn1cbmV4cG9ydCBmdW5jdGlvbiBvcGVuQmFzaWNNb2RhbChkYXRhOiBvcGVuQmFzaWNNb2RhbCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdPUEVOX0JBU0lDX01PREFMJyxcbiAgICBkYXRhXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlQmFzaWNNb2RhbCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQ0xPU0VfQkFTSUNfTU9EQUwnXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL2FjdGlvbnMvY29tcG9uZW50cy50c1xuICoqLyIsImltcG9ydCB7IFNjaGVtYXMgfSBmcm9tICcuLi8uLi9zY2hlbWFzJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlckF1dGgodXNlclNlc3Npb24/KTogT2JqZWN0IHtcbiAgLy8g5pyN5Yqh56uv5riy5p+TIHNlc3Npb25cbiAgaWYgKHVzZXJTZXNzaW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFNFUlZFUl9TVE9SRToge1xuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgcmVzcG9uc2U6IHVzZXJTZXNzaW9uLFxuICAgICAgICAgIHR5cGU6ICdVU0VSX0FVVEhfU1VDQ0VTUydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgQ0FMTF9BUEk6IHtcbiAgICAgIHR5cGVzOiBbJ1VTRVJfQVVUSF9SRVFVRVNUJywgJ1VTRVJfQVVUSF9TVUNDRVNTJywgJ1VTRVJfQVVUSF9GQUlMVVJFJ10sXG4gICAgICBlbmRwb2ludDogJ2F1dGgnXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFByb2ZpbGUoKSB7XG4gIHJldHVybiB7XG4gICAgcGF5bG9hZDogJ3Byb2ZpbGUnLFxuICAgIENBTExfQVBJOiB7XG4gICAgICB0eXBlczogWydQUk9GSUxFX1JFUVVFU1QnLCAnUFJPRklMRV9TVUNDRVNTJywgJ1BST0ZJTEVfRkFJTFVSRSddLFxuICAgICAgZW5kcG9pbnQ6IGB1c2VyL3Byb2ZpbGVgLFxuICAgIH1cbiAgfVxufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZmV0Y2hQdWJsaWNQcm9maWxlKCkge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIENBTExfQVBJOiB7XG4vLyAgICAgICB0eXBlczogWydQUk9GSUxFX1JFUVVFU1QnLCAnUFJPRklMRV9TVUNDRVNTJywgJ1BST0ZJTEVfRkFJTFVSRSddLFxuLy8gICAgICAgZW5kcG9pbnQ6IGB1c2VyL3Byb2ZpbGVgLFxuLy8gICAgICAgc2NoZW1hOiBTY2hlbWFzLlBST0ZJTEVcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVXNlckxpc3QoKSB7XG4gIHJldHVybiB7XG4gICAgQ0FMTF9BUEk6IHtcbiAgICAgIHR5cGVzOiBbJ1VTRVJfTElTVF9SRVFVRVNUJywgJ1VTRVJfTElTVF9TVUNDRVNTJywgJ1VTRVJfTElTVF9GQUlMVVJFJ10sXG4gICAgICBlbmRwb2ludDogJ3VzZXJzJyxcbiAgICAgIHNjaGVtYTogU2NoZW1hcy5VU0VSX0FSUkFZXG4gICAgfVxuICB9XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBmZXRjaFNoZWxmKHVzZXJJZCkge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHVzZXJJZCxcbi8vICAgICBDQUxMX0FQSToge1xuLy8gICAgICAgdHlwZXM6IFsnU0hFTEZfUkVRVUVTVCcsICdTSEVMRl9TVUNDRVNTJywgJ1NIRUxGX0ZBSUxVUkUnXSxcbi8vICAgICAgIGVuZHBvaW50OiBgdXNlcnMvJHt1c2VySWR9L3NoZWxmYCxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5CT09LX0FSUkFZLFxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hTaGVsZigpIHtcbiAgcmV0dXJuIHtcbiAgICBwYXlsb2FkOiAnYm9va1NoZWxmJyxcbiAgICBDQUxMX0FQSToge1xuICAgICAgdHlwZXM6IFsnU0hFTEZfUkVRVUVTVCcsICdTSEVMRl9TVUNDRVNTJywgJ1NIRUxGX0ZBSUxVUkUnXSxcbiAgICAgIGVuZHBvaW50OiBgdXNlci9ib29rcy9zaGVsZmAsXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFByb2dyZXNzKGJvb2tJZCkge1xuICByZXR1cm4ge1xuICAgIGJvb2tJZCxcbiAgICBwYXlsb2FkOiAncHJvZ3Jlc3MnLFxuICAgIENBTExfQVBJOiB7XG4gICAgICB0eXBlczogWydQUk9HUkVTU19SRVFVRVNUJywgJ1BST0dSRVNTX1NVQ0NFU1MnLCAnUFJPR1JFU1NfRkFJTFVSRSddLFxuICAgICAgZW5kcG9pbnQ6IGB1c2VyL2Jvb2tzLyR7Ym9va0lkfS9wcm9ncmVzc2AsXG4gICAgICAvLyBzY2hlbWE6IFNjaGVtYXMuQk9PS19QUk9HUkVTU1xuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvYWN0aW9ucy91c2VyLnRzXG4gKiovIiwiaW1wb3J0IEFsZXJ0IGZyb20gJy4vQWxlcnQnXG5pbXBvcnQgQWxlcnRzIGZyb20gJy4vQWxlcnRzJ1xuZXhwb3J0IHsgQWxlcnRzLCBBbGVydCB9XG5leHBvcnQgZGVmYXVsdCBBbGVydFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvQWxlcnQvaW5kZXgudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTXNnVHlwZSB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvY29tcG9uZW50cydcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24nXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlczogYW55ID0gcmVxdWlyZSgnLi9fYWxlcnQuc2NzcycpXG4vLyBpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBtZXNzYWdlOiBzdHJpbmdcbiAgdHlwZT86IE1zZ1R5cGVcbiAgb25SZXF1ZXN0Q2xvc2U/OiAoKSA9PiB2b2lkXG4gIHZpc2libGU6IGJvb2xlYW5cbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBBbGVydCBleHRlbmRzIENvbXBvbmVudDxQcm9wcywge30+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnByb3BzLnR5cGUgPyB0aGlzLnByb3BzLnR5cGUgOiAnc3VjY2VzcydcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMudmlzaWJsZSAmJiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlTmFtZT17YGFsZXJ0LS0ke3R5cGV9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImFsZXJ0LWNsb3NlXCI+XG4gICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2V9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgc2l6ZT17MTV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJjb250ZW50XCI+e3RoaXMucHJvcHMubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9BbGVydC9BbGVydC50c3hcbiAqKi8iLCJpbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nXG5leHBvcnQgZGVmYXVsdCBJY29uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9JY29uL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBzdmdJY29ucyBmcm9tICcuL3N2Zy1pY29ucydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9JY29uLmNzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBuYW1lOiBzdHJpbmdcbiAgb25DbGljaz86IGFueVxuICBzaXplPzogbnVtYmVyXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBzdHlsZU5hbWU/OiBzdHJpbmdcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBJY29uIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywge30+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBuYW1lLCBvbkNsaWNrLCBzaXplIH0gPSB0aGlzLnByb3BzXG4gICAgbGV0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoJ2ljb24nLCBgaWNvbi0ke25hbWV9YCwgdGhpcy5wcm9wcy5jbGFzc05hbWUpXG5cbiAgICBpZiAodHlwZW9mIHN2Z0ljb25zW25hbWVdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcignSWNvbiBuYW1lICglcykgbm90IGZvdW5kISAnLCBuYW1lKVxuICAgIH1cblxuICAgIHNpemUgPSBzaXplIHx8IDMwXG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gc3R5bGVOYW1lPVwiaWNvblwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgPHN2ZyB7Li4uc3ZnSWNvbnNbbmFtZV0udmlld0JveCAmJiB7dmlld0JveDogc3ZnSWNvbnNbbmFtZV0udmlld0JveH19IHdpZHRoPXtzaXplfSBoZWlnaHQ9e3NpemV9IHN0eWxlTmFtZT1cInN2Zy1zaGFwZVwiPlxuICAgICAgICAgIDxwYXRoIGQ9e3N2Z0ljb25zW25hbWVdLnBhdGh9Lz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L3NwYW4+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEljb25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL0ljb24vSWNvbi50c3hcbiAqKi8iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xuICBjbG9zZToge1xuICAgIHBhdGg6ICdNNy40OCA4bDMuNzUgMy43NS0xLjQ4IDEuNDhMNiA5LjQ4bC0zLjc1IDMuNzUtMS40OC0xLjQ4TDQuNTIgOCAuNzcgNC4yNWwxLjQ4LTEuNDhMNiA2LjUybDMuNzUtMy43NSAxLjQ4IDEuNDh6JyxcbiAgICB2aWV3Qm94OiAnMCAwIDEyIDE2J1xuICB9LFxuICBzdGFyOiB7XG4gICAgcGF0aDogJ00xNCA2bC00LjktLjY0TDcgMSA0LjkgNS4zNiAwIDZsMy42IDMuMjZMMi42NyAxNCA3IDExLjY3IDExLjMzIDE0bC0uOTMtNC43NHonLFxuICB9LFxuICB1c2Vyczoge1xuICAgIHBhdGg6ICdNMTYgMTFjMS42NiAwIDIuOTktMS4zNCAyLjk5LTNTMTcuNjYgNSAxNiA1Yy0xLjY2IDAtMyAxLjM0LTMgM3MxLjM0IDMgMyAzem0tOCAwYzEuNjYgMCAyLjk5LTEuMzQgMi45OS0zUzkuNjYgNSA4IDVDNi4zNCA1IDUgNi4zNCA1IDhzMS4zNCAzIDMgM3ptMCAyYy0yLjMzIDAtNyAxLjE3LTcgMy41VjE5aDE0di0yLjVjMC0yLjMzLTQuNjctMy41LTctMy41em04IDBjLS4yOSAwLS42Mi4wMi0uOTcuMDUgMS4xNi44NCAxLjk3IDEuOTcgMS45NyAzLjQ1VjE5aDZ2LTIuNWMwLTIuMzMtNC42Ny0zLjUtNy0zLjV6JyxcbiAgfSxcbiAgZm9sZGVyOiB7XG4gICAgcGF0aDogJ00xMCA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjhjMC0xLjEtLjktMi0yLTJoLThsLTItMnonLFxuICB9LFxuICBkYXRhYmFzZToge1xuICAgIHBhdGg6ICdNMjAuMiA1LjlsLjgtLjhDMTkuNiAzLjcgMTcuOCAzIDE2IDNzLTMuNi43LTUgMi4xbC44LjhDMTMgNC44IDE0LjUgNC4yIDE2IDQuMnMzIC42IDQuMiAxLjd6bS0uOS44Yy0uOS0uOS0yLjEtMS40LTMuMy0xLjRzLTIuNC41LTMuMyAxLjRsLjguOGMuNy0uNyAxLjYtMSAyLjUtMSAuOSAwIDEuOC4zIDIuNSAxbC44LS44ek0xOSAxM2gtMlY5aC0ydjRINWMtMS4xIDAtMiAuOS0yIDJ2NGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0ydi00YzAtMS4xLS45LTItMi0yek04IDE4SDZ2LTJoMnYyem0zLjUgMGgtMnYtMmgydjJ6bTMuNSAwaC0ydi0yaDJ2MnonXG4gIH0sXG4gIHN0YXRpc3RpY3M6IHtcbiAgICBwYXRoOiAnTTIxIDJIM2MtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmg3djJIOHYyaDh2LTJoLTJ2LTJoN2MxLjEgMCAyLS45IDItMlY0YzAtMS4xLS45LTItMi0yem0wIDE0SDNWNGgxOHYxMnonLFxuICB9LFxuICBib29rczoge1xuICAgIHBhdGg6ICdNMjAuNTQgNS4yM2wtMS4zOS0xLjY4QzE4Ljg4IDMuMjEgMTguNDcgMyAxOCAzSDZjLS40NyAwLS44OC4yMS0xLjE2LjU1TDMuNDYgNS4yM0MzLjE3IDUuNTcgMyA2LjAyIDMgNi41VjE5YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNi41YzAtLjQ4LS4xNy0uOTMtLjQ2LTEuMjd6TTEyIDE3LjVMNi41IDEySDEwdi0yaDR2MmgzLjVMMTIgMTcuNXpNNS4xMiA1bC44MS0xaDEybC45NCAxSDUuMTJ6JyxcbiAgICAvLyB2aWV3Qm94OiAnMyAzIDE4IDE4J1xuICB9LFxuICBiYWNrOiB7XG4gICAgLy8gcGF0aDogJ003MzIgODMybC01NSA1NWwtNTA1IC01MDVsNTA1IC01MDVsNTUgNTRsLTQ1MSA0NTF6J1xuICAgIC8vIHBhdGg6ICdNMTQgNmwtNC45LS42NEw3IDEgNC45IDUuMzYgMCA2bDMuNiAzLjI2TDIuNjcgMTQgNyAxMS42NyAxMS4zMyAxNGwtLjkzLTQuNzR6JyxcbiAgICBwYXRoOiAnbSAyNiwyNSBjIC0wLjQ2NzU3NCwwIC0wLjkwOTQzNCwwLjE2ODY1IC0xLjI1LDAuNDM3NSBDIDI0LjU1NTI3OSwyNS41OTEyMTUgNi42MTMwNTE2LDQyLjU0NjI4NSA2LjQ2ODc1LDQyLjcxODc1IDYuMTc4MjMzMiw0My4wNjU5NiA2LDQzLjUxMTg3IDYsNDQgNiw0NC41MTk0NiA2LjIwNjU1NjYsNDQuOTg4MTggNi41MzEyNSw0NS4zNDM3NSA2LjY2ODM5OTIsNDUuNDkzOTQxIDI0LjYyNSw2Mi40Mzc1IDI0LjYyNSw2Mi40Mzc1IGMgMC43NTk4NDIsMC43MjUxNTIgMi4xMjE4NDIsMC43MDA0MjEgMi44NDM3NSwtMC4wNjI1IDAuNzIxOTA4LC0wLjc2MjkzIDAuNjcyMjQ0LC0yLjEyNTA5OSAtMC4wOTM3NSwtMi44NDM3NSBMIDEzLjAzMTI1LDQ2IDY0LDQ2IGMgMTMuODg4ODcxLDAgMjUuNjYwMzkyLDExLjYzOTU1IDI2LDI2LjAzMTI1IDAuMDAzNSwwLjE0MDU1NyAwLDAuNzc0ODUgMCwwLjk2ODc1IDAsMS4xMDggMC44OTIsMiAyLDIgMS4xMDgsMCAyLC0wLjg5MiAyLC0yIGwgMCwtMS4wNjI1IEMgOTMuNjEwMjA4LDU1LjQxOTQgODAuMTE4NTI5LDQyIDY0LDQyIEwgMTMuMDMxMjUsNDIgQyAxMy4wMzEyNSw0MiAyNy4zNjI3MzIsMjguNDk1OTU5IDI3LjUsMjguMzQzNzUgMjcuODE5NzEsMjcuOTg5MjUgMjgsMjcuNTE0OTcgMjgsMjcgMjgsMjUuODk1NDMgMjcuMTA0NTY5LDI1IDI2LDI1IHonLFxuICAgIHZpZXdCb3g6ICcwIDAgMTAwIDEyNSdcbiAgfSxcbiAgcHJlZmVyZW5jZToge1xuICAgIHBhdGg6ICdNIDE3Ljc4MTI1IDguOTY4NzUgQSAyLjAwMDIgMi4wMDAyIDAgMCAwIDE2IDExIEwgMTYgNTYuMjUgQyAxMi4wMDgxODggNTcuMTY4MzAyIDkgNjAuNzQxNDA2IDkgNjUgQyA5IDY5LjI1OTIyNCAxMi4wMDc0MjcgNzIuODYzNTM0IDE2IDczLjc4MTI1IEwgMTYgODkgQSAyLjAwMDIgMi4wMDAyIDAgMSAwIDIwIDg5IEwgMjAgNzMuNzgxMjUgQyAyMy45OTI1NzMgNzIuODYzNTM0IDI3IDY5LjI1OTIyNCAyNyA2NSBDIDI3IDYwLjc0MTQwNiAyMy45OTE4MTIgNTcuMTY4MzAyIDIwIDU2LjI1IEwgMjAgMTEgQSAyLjAwMDIgMi4wMDAyIDAgMCAwIDE3Ljc4MTI1IDguOTY4NzUgeiBNIDQ5Ljc4MTI1IDguOTY4NzUgQSAyLjAwMDIgMi4wMDAyIDAgMCAwIDQ4IDExIEwgNDggMjYuMjUgQyA0NC4wMDgxODggMjcuMTY4MzA1IDQxIDMwLjc0MTQyMyA0MSAzNSBDIDQxIDM5LjI1OTEyIDQ0LjAwNzQyNyA0Mi44NjM1MTEgNDggNDMuNzgxMjUgTCA0OCA4OSBBIDIuMDAwMiAyLjAwMDIgMCAxIDAgNTIgODkgTCA1MiA0My43ODEyNSBDIDU1Ljk5MjU3MyA0Mi44NjM1MTEgNTkgMzkuMjU5MTIgNTkgMzUgQyA1OSAzMC43NDE0MjMgNTUuOTkxODEyIDI3LjE2ODMwNSA1MiAyNi4yNSBMIDUyIDExIEEgMi4wMDAyIDIuMDAwMiAwIDAgMCA0OS43ODEyNSA4Ljk2ODc1IHogTSA4MS43ODEyNSA4Ljk2ODc1IEEgMi4wMDAyIDIuMDAwMiAwIDAgMCA4MCAxMSBMIDgwIDU2LjI1IEMgNzYuMDA4MTg4IDU3LjE2ODMwMiA3MyA2MC43NDE0MDYgNzMgNjUgQyA3MyA2OS4yNTkyMjQgNzYuMDA3NDI3IDcyLjg2MzUzNCA4MCA3My43ODEyNSBMIDgwIDg5IEEgMi4wMDAyIDIuMDAwMiAwIDEgMCA4NCA4OSBMIDg0IDczLjc4MTI1IEMgODcuOTkyNTczIDcyLjg2MzUzNCA5MSA2OS4yNTkyMjQgOTEgNjUgQyA5MSA2MC43NDE0MDYgODcuOTkxODEyIDU3LjE2ODMwMiA4NCA1Ni4yNSBMIDg0IDExIEEgMi4wMDAyIDIuMDAwMiAwIDAgMCA4MS43ODEyNSA4Ljk2ODc1IHogTSA1MCAzMCBDIDUyLjc4NTExNiAzMCA1NSAzMi4yMTQ4OCA1NSAzNSBDIDU1IDM3Ljc4NTEyIDUyLjc4NTExNiA0MCA1MCA0MCBDIDQ3LjIxNDg4NCA0MCA0NSAzNy43ODUxMiA0NSAzNSBDIDQ1IDMyLjIxNDg4IDQ3LjIxNDg4NCAzMCA1MCAzMCB6IE0gMTggNjAgQyAyMC43ODUxMTYgNjAgMjMgNjIuMjE0OSAyMyA2NSBDIDIzIDY3Ljc4NTIgMjAuNzg1MTE2IDcwIDE4IDcwIEMgMTUuMjE0ODg0IDcwIDEzIDY3Ljc4NTIgMTMgNjUgQyAxMyA2Mi4yMTQ5IDE1LjIxNDg4NCA2MCAxOCA2MCB6IE0gODIgNjAgQyA4NC43ODUxMTYgNjAgODcgNjIuMjE0OSA4NyA2NSBDIDg3IDY3Ljc4NTIgODQuNzg1MTE2IDcwIDgyIDcwIEMgNzkuMjE0ODg0IDcwIDc3IDY3Ljc4NTIgNzcgNjUgQyA3NyA2Mi4yMTQ5IDc5LjIxNDg4NCA2MCA4MiA2MCB6ICcsXG4gICAgdmlld0JveDogJzAgMCAxMDAgMTI1J1xuICB9LFxuICBmb250OiB7XG4gICAgLy8gcGF0aDogJ00xNCA4Ljc3di0xLjZsLTEuOTQtLjY0LS40NS0xLjA5Ljg4LTEuODQtMS4xMy0xLjEzLTEuODEuOTEtMS4wOS0uNDUtLjY5LTEuOTJoLTEuNmwtLjYzIDEuOTQtMS4xMS40NS0xLjg0LS44OC0xLjEzIDEuMTMuOTEgMS44MS0uNDUgMS4wOUwwIDcuMjN2MS41OWwxLjk0LjY0LjQ1IDEuMDktLjg4IDEuODQgMS4xMyAxLjEzIDEuODEtLjkxIDEuMDkuNDUuNjkgMS45MmgxLjU5bC42My0xLjk0IDEuMTEtLjQ1IDEuODQuODggMS4xMy0xLjEzLS45Mi0xLjgxLjQ3LTEuMDlMMTQgOC43NXYuMDJ6TTcgMTFjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzeidcbiAgICBwYXRoOiAnTTE0IDZsLTQuOS0uNjRMNyAxIDQuOSA1LjM2IDAgNmwzLjYgMy4yNkwyLjY3IDE0IDcgMTEuNjcgMTEuMzMgMTRsLS45My00Ljc0eicsXG4gIH0sXG4gIGFycm93UmlnaHQ6IHtcbiAgICBwYXRoOiAnTS0yOTAuOSw0MzAuMWwtMC43LTAuN2w4LjItOC42bC04LjItOC4ybDAuNy0wLjdsOC45LDguOUwtMjkwLjksNDMwLjF6JyxcbiAgICB2aWV3Qm94OiAnLTI5MiA0MTEuOSAxMSAxOCdcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvSWNvbi9zdmctaWNvbnMudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg2NTgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWNzcy1tb2R1bGVzL2Rpc3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInN2Zy1zaGFwZVwiOlwic3ZnLXNoYXBlXzMwLWswXCIsXCJpY29uXCI6XCJpY29uX1ZzVlI0XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9JY29uL0ljb24uY3NzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImFsZXJ0c1wiOlwiYWxlcnRzXzNhbmFoXCIsXCJhbGVydFwiOlwiYWxlcnRfM1dBeWVcIixcImFsZXJ0LS1zdWNjZXNzXCI6XCJhbGVydC0tc3VjY2Vzc19OVFI1TFwiLFwiYWxlcnQtLWVycm9yXCI6XCJhbGVydC0tZXJyb3JfMUMyZk1cIixcImFsZXJ0LS13YXJuaW5nXCI6XCJhbGVydC0td2FybmluZ18zZ1NXdlwiLFwiY29udGVudFwiOlwiY29udGVudF8xVTRUc1wiLFwiYWxlcnQtY2xvc2VcIjpcImFsZXJ0LWNsb3NlXzFVVUxTXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9BbGVydC9fYWxlcnQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQWxlcnQgZnJvbSAnLi9BbGVydCdcbmNvbnN0IHN0eWxlczogYW55ID0gcmVxdWlyZSgnLi9fYWxlcnQuc2NzcycpXG5cbnR5cGUgVFByb3BzID0ge1xuICBjaGlsZHJlbj86IGFueVxuICBvblJlcXVlc3RDbG9zZT86IChpZDogc3RyaW5nKSA9PiB2b2lkXG4gIG1lc3NhZ2VzOiB7XG4gICAgY29udGVudDogc3RyaW5nXG4gICAgdmlzaWJsZTogYm9vbGVhblxuICAgIHR5cGU6ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnd2FybmluZydcbiAgICBpZDogc3RyaW5nXG4gIH1bXVxufVxuXG5mdW5jdGlvbiBBbGVydHMocHJvcHM6IFRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxlcnRzfT5cbiAgICAgIHtcbiAgICAgICAgcHJvcHMubWVzc2FnZXMubWFwKChtc2csIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEFsZXJ0XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgdHlwZT17bXNnLnR5cGV9XG4gICAgICAgICAgICBtZXNzYWdlPXttc2cuY29udGVudH1cbiAgICAgICAgICAgIHZpc2libGU9e21zZy52aXNpYmxlfVxuICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHtcbiAgICAgICAgICAgICAgcHJvcHMub25SZXF1ZXN0Q2xvc2UobXNnLmlkKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApKVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0c1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvQWxlcnQvQWxlcnRzLnRzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMTIpKSg2NzgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3V0aWxzX2RsbFxuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgRGlhbG9nIGZyb20gJy4vRGlhbG9nJ1xuZXhwb3J0IGRlZmF1bHQgRGlhbG9nXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9EaWFsb2cvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTW9kYWwsIHsgSVByb3BzIGFzIElNb2RhbFByb3BzIH0gZnJvbSAnLi4vTW9kYWwnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL19mb3JtL0J1dHRvbidcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9EaWFsb2cuc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBJTW9kYWxQcm9wcyB7XG4gIG9uQ29uZmlybTogYW55XG4gIHRpdGxlOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIERpYWxvZyBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsXG4gICAgICAgIGlzVmlzaWJsZT17dGhpcy5wcm9wcy5pc1Zpc2libGV9XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXt0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlfVxuICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJkaWFsb2dcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRpdGxlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJkaWFsb2ctaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlTmFtZT1cImRpYWxvZy10aXRsZVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImRpYWxvZy1jb250ZW50XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImRpYWxvZy1mb290ZXJcIj5cbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJibHVlXCIgb25DbGljaz17dGhpcy5wcm9wcy5vbkNvbmZpcm19PuehruiupDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cIndoaXRlXCIgb25DbGljaz17dGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZX0+5Y+W5raIPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9EaWFsb2cvRGlhbG9nLnRzeFxuICoqLyIsImltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJ1xuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbmV4cG9ydCAqIGZyb20gJy4vTW9kYWwnXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Nb2RhbC9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgRmFkZSBmcm9tICcuLi9fYW5pbWF0aW9ucy9GYWRlJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vX21vZGFsLnNjc3MnKVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG4gIHdpZHRoOiBudW1iZXJcbiAgb25SZXF1ZXN0Q2xvc2U/OiAoKSA9PiB2b2lkXG4gIGlzVmlzaWJsZTogYm9vbGVhblxuICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIG1vZGFsSGVpZ2h0PzogbnVtYmVyXG4gIGlzTW9kYWxIaWRkZW4/OiBib29sZWFuXG4gIGlzTW9kYWxWZXJ0aWNhbENlbnRlcj86IGJvb2xlYW5cbiAgZG9jdW1lbnRIZWlnaHQ/OiBudW1iZXJcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBtb2RhbDogYW55XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW9kYWxIZWlnaHQ6IDAsXG4gICAgICBpc01vZGFsSGlkZGVuOiBmYWxzZSxcbiAgICAgIGlzTW9kYWxWZXJ0aWNhbENlbnRlcjogdHJ1ZVxuICAgIH1cbiAgICB0aGlzLnNldFZpZXcgPSB0aGlzLnNldFZpZXcuYmluZCh0aGlzKVxuICAgIHRoaXMuaGlkZU1vZGFsID0gdGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKVxuICB9XG5cbiAgaGlkZU1vZGFsKCkge1xuICAgIHRoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2UoKVxuICAgIHV0aWxzLnVubG9ja1Njcm9sbCgpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2V0VmlldylcbiAgfVxuXG4gIHNldFZpZXcoKSB7XG4gICAgbGV0IG1vZGFsSGVpZ2h0ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5tb2RhbCkuY2xpZW50SGVpZ2h0XG4gICAgbGV0IGlzTW9kYWxWZXJ0aWNhbENlbnRlciA9IHRydWVcbiAgICBsZXQgZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodFxuXG4gICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA8IG1vZGFsSGVpZ2h0KSB7XG4gICAgICBpc01vZGFsVmVydGljYWxDZW50ZXIgPSBmYWxzZVxuICAgIH1cblxuICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPiBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCkge1xuICAgICAgZG9jdW1lbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vZGFsSGVpZ2h0LFxuICAgICAgaXNNb2RhbFZlcnRpY2FsQ2VudGVyLFxuICAgICAgZG9jdW1lbnRIZWlnaHRcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIC8vIG1vZGFsIHNob3dcbiAgICBpZiAoIXByZXZQcm9wcy5pc1Zpc2libGUgJiYgdGhpcy5wcm9wcy5pc1Zpc2libGUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuc2V0VmlldygpXG4gICAgICB1dGlscy5sb2NrU2Nyb2xsKClcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNldFZpZXcpXG4gICAgfVxuXG4gICAgLy8gbW9kYWwgaGlkZVxuICAgIGlmIChwcmV2UHJvcHMuaXNWaXNpYmxlID09PSB0cnVlICYmIHRoaXMucHJvcHMuaXNWaXNpYmxlID09PSBmYWxzZSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2V0VmlldylcbiAgICAgIHRoaXMuaGlkZU1vZGFsKClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNldFZpZXcpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGVmYXVsdENsYXNzID0gJ21vZGFsJ1xuICAgIGNvbnN0IG1vZGFsSWQgPSBgbW9kYWwtJHsobmV3IERhdGUoKSkudmFsdWVPZigpfWBcblxuICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZSA/IGAke2RlZmF1bHRDbGFzc30gJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gIDogZGVmYXVsdENsYXNzXG5cbiAgICBsZXQgd2lkdGggPSB0aGlzLnByb3BzLndpZHRoID8gdGhpcy5wcm9wcy53aWR0aCA6IDUwMFxuICAgIGxldCBoZWlnaHQgPSB0aGlzLnN0YXRlLm1vZGFsSGVpZ2h0XG4gICAgbGV0IHN0eWxlID0ge1xuICAgICAgYmFja2Ryb3A6IHt9LFxuICAgICAgdmVydGljYWxDZW50ZXI6IHt9LFxuICAgICAgc2Nyb2xsOiB7fSxcbiAgICAgIG1vZGFsOiB7fVxuICAgIH1cbiAgICBsZXQgaXNWaXNpYmxlID0gdGhpcy5wcm9wcy5pc1Zpc2libGUgPyB0aGlzLnByb3BzLmlzVmlzaWJsZSA6IGZhbHNlXG5cbiAgICBzdHlsZS5iYWNrZHJvcCA9IHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogMCxcbiAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuMjMpJyxcbiAgICAgIG92ZXJmbG93OiAnc2Nyb2xsJ1xuICAgIH1cblxuICAgIHN0eWxlLnZlcnRpY2FsQ2VudGVyID0ge1xuICAgICAgd2lkdGgsXG4gICAgICBtYXJnaW5Ub3A6IC1oZWlnaHQgLyAyLFxuICAgICAgbWFyZ2luTGVmdDogLXdpZHRoIC8gMixcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogJzUwJScsXG4gICAgICB0b3A6ICc1MCUnXG4gICAgfVxuXG4gICAgc3R5bGUuc2Nyb2xsID0ge1xuICAgICAgd2lkdGgsXG4gICAgICBtYXJnaW46ICc1MHB4IGF1dG8nXG4gICAgfVxuXG4gICAgc3R5bGUubW9kYWwgPSB7fVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNNb2RhbFZlcnRpY2FsQ2VudGVyKSB7XG4gICAgICBzdHlsZS5tb2RhbCA9IE9iamVjdC5hc3NpZ24oe30sIHN0eWxlLm1vZGFsLCBzdHlsZS52ZXJ0aWNhbENlbnRlcilcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUubW9kYWwgPSBPYmplY3QuYXNzaWduKHt9LCBzdHlsZS5tb2RhbCwgc3R5bGUuc2Nyb2xsKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RmFkZT5cbiAgICAgICAge1xuICAgICAgICAgIGlzVmlzaWJsZSA9PT0gdHJ1ZSA/IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g5L2/55So6Zi75q2i5YaS5rOh5Lya6YCg5oiQ6Zeu6aKYXG4gICAgICAgICAgICAgICAgaWYgKChlLnRhcmdldCBhcyBhbnkpLnF1ZXJ5U2VsZWN0b3IoYCMke21vZGFsSWR9YCkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZU1vZGFsKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICBzdHlsZU5hbWU9XCJtb2RhbC1iYWNrZHJvcFwiXG4gICAgICAgICAgICAgIHN0eWxlPXtzdHlsZS5iYWNrZHJvcH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgaWQ9e21vZGFsSWR9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlLm1vZGFsfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIHN0eWxlTmFtZT1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiB7IHRoaXMubW9kYWwgPSByZWYgfSB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsXG4gICAgICAgIH1cbiAgICAgIDwvRmFkZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL01vZGFsL01vZGFsLnRzeFxuICoqLyIsImltcG9ydCBwYXJzZUZvcm1EYXRhIGZyb20gJy4vcGFyc2VGb3JtRGF0YSdcbmltcG9ydCBsb2NrU2Nyb2xsIGZyb20gJy4vbG9ja1Njcm9sbCdcbmltcG9ydCB1bmxvY2tTY3JvbGwgZnJvbSAnLi91bmxvY2tTY3JvbGwnXG5pbXBvcnQgZ2V0U2NyZWVuSW5mbyBmcm9tICcuL2dldFNjcmVlbkluZm8nXG5cbi8vIHRvZG9cbmZ1bmN0aW9uIGFkZFplcm8obnVtKSB7XG4gIGxldCBudW1TdHJXaXRoWmVyb1xuXG4gIGlmIChudW0gPCAxMCkge1xuICAgIG51bVN0cldpdGhaZXJvID0gJzAnICsgbnVtLnRvU3RyaW5nKClcbiAgfSBlbHNlIHtcbiAgICBudW1TdHJXaXRoWmVybyA9IG51bS50b1N0cmluZygpXG4gIH1cblxuICByZXR1cm4gbnVtU3RyV2l0aFplcm9cbn1cblxuLy8gdG9kb1xuZnVuY3Rpb24gZ2V0VGltZSgpIHtcbiAgY29uc3QgZCA9IG5ldyBEYXRlKClcbiAgY29uc3QgdGltZSA9IFtkLmdldEZ1bGxZZWFyKCksIGQuZ2V0TW9udGgoKSwgZC5nZXREYXRlKCksIGQuZ2V0SG91cnMoKSwgZC5nZXRNaW51dGVzKCksIGQuZ2V0U2Vjb25kcygpXVxuXG4gIHJldHVybiB0aW1lLm1hcCh0ID0+IHtcbiAgICByZXR1cm4gYWRkWmVybyh0KVxuICB9KS5qb2luKCcnKVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHBhcnNlRm9ybURhdGEsXG4gIGxvY2tTY3JvbGwsXG4gIHVubG9ja1Njcm9sbCxcbiAgZ2V0U2NyZWVuSW5mb1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvdXRpbHMvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9iamVjdFRvVXJsZW5jb2RlZChvcmlnaW5hbE9iaikge1xuICBsZXQgb2JqZWN0ID0gXy5jbG9uZURlZXAob3JpZ2luYWxPYmopXG4gIGxldCBlbmNvZGVkdXJsID0gJydcblxuICBmb3IgKGxldCBwcm9wIGluIG9iamVjdCkge1xuICAgIGlmICh0eXBlb2Ygb2JqZWN0W3Byb3BdID09PSAnb2JqZWN0Jykge1xuICAgICAgb2JqZWN0W3Byb3BdID0gb2JqZWN0W3Byb3BdLnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICBlbmNvZGVkdXJsID0gYCR7ZW5jb2RlZHVybH0ke3Byb3B9PSR7b2JqZWN0W3Byb3BdfSZgXG4gIH1cblxuICByZXR1cm4gZW5jb2RlZHVybC5zdWJzdHIoMCwgZW5jb2RlZHVybC5sZW5ndGggLSAxKVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3V0aWxzL3BhcnNlRm9ybURhdGEudHNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2NrU2Nyb2xsKCkge1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3V0aWxzL2xvY2tTY3JvbGwudHNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmxvY2tTY3JvbGwoKSB7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSdcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3V0aWxzL3VubG9ja1Njcm9sbC50c1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNjcmVlbkluZm8oKToge1xuICB2aWV3OiBhbnlcbiAgc2NyZWVuOiBhbnlcbn0ge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLmVycm9yKCd3aW5kb3cgaXMgdW5kZWZpbmVkLCBlbXB0eSBpbmZvIG9iamVjdCB3aWxsIGJlIHJldHVybmVkIScpXG5cbiAgICByZXR1cm4ge1xuICAgICAgdmlldzoge30sXG4gICAgICBzY3JlZW46IHt9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB2aWV3OiB7XG4gICAgICB3aWR0aDogIHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICBhc3BlY3RSYXRpbzogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB9LFxuICAgIHNjcmVlbjogd2luZG93LnNjcmVlblxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy91dGlscy9nZXRTY3JlZW5JbmZvLnRzXG4gKiovIiwiaW1wb3J0IEZhZGUgZnJvbSAnLi9GYWRlJ1xuZXhwb3J0IGRlZmF1bHQgRmFkZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2FuaW1hdGlvbnMvRmFkZS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vRmFkZS5jc3MnKVxuXG5jbGFzcyBGYWRlIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cFxuICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICB0cmFuc2l0aW9uTmFtZT17c3R5bGVzfVxuICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXszMDB9XG4gICAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9ezMwMH1cbiAgICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXA+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhZGVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19hbmltYXRpb25zL0ZhZGUvRmFkZS50c3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg1OTMpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2tpdF9kbGxcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiZW50ZXJcIjpcImVudGVyXzFjNFNXXCIsXCJlbnRlckFjdGl2ZVwiOlwiZW50ZXJBY3RpdmVfbkNKUXdcIixcImxlYXZlXCI6XCJsZWF2ZV8xb1RwX1wiLFwibGVhdmVBY3RpdmVcIjpcImxlYXZlQWN0aXZlXzNoVGdIXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fYW5pbWF0aW9ucy9GYWRlL0ZhZGUuY3NzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIm1vZGFsXCI6XCJtb2RhbF91d1hpUlwiLFwiaWNvbi1jbG9zZVwiOlwiaWNvbi1jbG9zZV8ydVFONVwiLFwibW9kYWwtYmFja2Ryb3BcIjpcIm1vZGFsLWJhY2tkcm9wXzI5TnJIXCIsXCJtb2RhbC1oZWFkZXJcIjpcIm1vZGFsLWhlYWRlcl8zQWIxTlwiLFwibW9kYWwtZm9vdGVyXCI6XCJtb2RhbC1mb290ZXJfM2pucklcIixcIm1vZGFsLWJvZHlcIjpcIm1vZGFsLWJvZHlfR2dnYUpcIixcIm1vZGFsLXRpdGxlXCI6XCJtb2RhbC10aXRsZV8zRGNBdFwiLFwibW9kYWwtc3ViLXRpdGxlXCI6XCJtb2RhbC1zdWItdGl0bGVfM2hHV2lcIixcImJ0bi1yZWRcIjpcImJ0bi1yZWRfMzNTSFVcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL01vZGFsL19tb2RhbC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0J1dHRvbi9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9fYnV0dG9uLnNjc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHN0eWxlTmFtZT86IGFueVxuICBzaXplPzogJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJ1xuICBpc0ZsdWlkPzogYm9vbGVhblxuICBjb2xvcj86ICdyZWQnIHwgJ2JsdWUnIHwgJ2dyZWVuJyB8ICdvcmFuZ2UnIHwgJ3doaXRlJ1xuICB0bz86IHN0cmluZ1xuICBvbkNsaWNrPzogYW55XG4gIHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBpc01vdXNlT3Zlcj86IGJvb2xlYW5cbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNNb3VzZU92ZXI6IGZhbHNlLFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBvbkNsaWNrLCBjbGFzc05hbWUsIGNvbG9yLCBzaXplLCBpc0ZsdWlkLCB3aWR0aCB9ID0gdGhpcy5wcm9wc1xuICAgIGxldCBzdHlsZSA9IHt9XG5cbiAgICBjb25zdCBzdHlsZU5hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICdidG4nOiB0cnVlLFxuICAgICAgJ2J0bi0taG92ZXInOiB0aGlzLnN0YXRlLmlzTW91c2VPdmVyLFxuICAgICAgJ2J0bi0tZmx1aWQnOiBpc0ZsdWlkLFxuICAgICAgW2BidG4tLSR7Y29sb3J9YF06IEJvb2xlYW4oY29sb3IpLFxuICAgICAgW2BidG4tLSR7c2l6ZX1gXTogQm9vbGVhbihzaXplKSxcbiAgICB9KVxuICAgIGlmICh0aGlzLnByb3BzLnRvKSB7XG4gICAgICBvbkNsaWNrID0gZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKHRoaXMucHJvcHMudG8pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgd2lkdGhcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwcm9wcyA9IF8odGhpcy5wcm9wcylcbiAgICAgIC5vbWl0KFsndG8nLCAnY29sb3InLCAnc2l6ZScsICdpc0ZsdWlkJywgJ3dpZHRoJ10pXG4gICAgICAuYXNzaWduKHt9LCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lIHx8ICcnLFxuICAgICAgICBvbkNsaWNrLFxuICAgICAgICBzdHlsZVxuICAgICAgfSlcbiAgICAgIC52YWx1ZSgpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIHN0eWxlTmFtZT17c3R5bGVOYW1lfVxuICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNNb3VzZU92ZXI6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9fVxuICAgICAgICBvbk1vdXNlT3V0PXsoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc01vdXNlT3ZlcjogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvYnV0dG9uPlxuICAgIClcbiAgfVxufVxuXG4oQnV0dG9uIGFzIGFueSkuZGVmYXVsdFByb3BzID0ge1xuICBjb2xvcjogJ2JsdWUnXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vQnV0dG9uL0J1dHRvbi50c3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJidG5cIjpcImJ0bl8yYVdfX1wiLFwiZm9jdXNcIjpcImZvY3VzXzJZNW92XCIsXCJhY3RpdmVcIjpcImFjdGl2ZV9qRmROWlwiLFwiZGlzYWJsZWRcIjpcImRpc2FibGVkXzJORkpYXCIsXCJidG4tLWhvdmVyXCI6XCJidG4tLWhvdmVyXzM0NG1pXCIsXCJidG4tLWJsdWVcIjpcImJ0bi0tYmx1ZV8xbkVJTVwiLFwiYnRuLS1vcmFuZ2VcIjpcImJ0bi0tb3JhbmdlX3Y0eDVfXCIsXCJidG4tLXJlZFwiOlwiYnRuLS1yZWRfMmdzZlNcIixcImJ0bi0td2hpdGVcIjpcImJ0bi0td2hpdGVfM3JXRjNcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0J1dHRvbi9fYnV0dG9uLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiZGlhbG9nXCI6XCJkaWFsb2dfM1dKLUNcIixcImRpYWxvZy1oZWFkZXJcIjpcImRpYWxvZy1oZWFkZXJfMi1UUEJcIixcImRpYWxvZy10aXRsZVwiOlwiZGlhbG9nLXRpdGxlXzN1MFFXXCIsXCJkaWFsb2ctY29udGVudFwiOlwiZGlhbG9nLWNvbnRlbnRfMzJRcmtcIixcImRpYWxvZy1mb290ZXJcIjpcImRpYWxvZy1mb290ZXJfMkl1U0NcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0RpYWxvZy9EaWFsb2cuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmludGVyZmFjZSBJUHJvcHMge1xufVxuXG5pbnRlcmZhY2UgSUFsbFByb3BzIGV4dGVuZHMgSVByb3BzIHtcbiAgcm91dGluZzogYW55XG4gIGVsZW1lbnRzOiBhbnlcbiAgc2VuZE5vdGlmaWNhdGlvbjogYW55XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5jbGFzcyBBcHBNYXN0ZXIgZXh0ZW5kcyBDb21wb25lbnQ8SUFsbFByb3BzLCBJU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCBJUHJvcHM+KFxuICBzdGF0ZSA9PiAoe1xuICAgIGVsZW1lbnRzOiBzdGF0ZS5lbGVtZW50cyxcbiAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnNcbn0pLCB7fVxuKShBcHBNYXN0ZXIgYXMgYW55KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29udGFpbmVycy9BcHBNYXN0ZXIudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEJyYW5kaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvQnJhbmRpbmcnXG5pbXBvcnQgQ29sb3Bob24gZnJvbSAnLi4vY29tcG9uZW50cy9Db2xvcGhvbidcbmltcG9ydCB7IGZldGNoU2hlbGYgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGFwaXMgZnJvbSAnLi4vYXBpcydcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZmV0Y2hTaGVsZjogYW55XG4gIHNlc3Npb246IGFueVxuICBib29rU2hlbGY6IGFueVxufVxuXG5jbGFzcyBBcHBDb21tb24gZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGhhbmRsZUxvZ291dCgpIHtcbiAgICBhcGlzLmxvZ291dCgpLnRoZW4oKCkgPT4ge1xuICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLmhyZWZcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLnJvbGUgIT09ICd2aXNpdG9yJykge1xuICAgICAgdGhpcy5wcm9wcy5mZXRjaFNoZWxmKClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHVzZXJMb2dnZWRJbiA9IHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLnJvbGUgPT09ICd2aXNpdG9yJyAmJiBuZXh0UHJvcHMuc2Vzc2lvbi51c2VyLnJvbGUgIT09ICd2aXNpdG9yJ1xuICAgIGlmICh1c2VyTG9nZ2VkSW4pIHtcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hTaGVsZigpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBpc0FkbWluID0gZmFsc2VcbiAgICBsZXQgdXNlcm5hbWUgPSBudWxsXG5cbiAgICBpZiAodGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIucm9sZSAhPT0gJ3Zpc2l0b3InKSB7XG4gICAgICBpc0FkbWluID0gdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIucm9sZSA9PT0gJ2FkbWluJ1xuICAgICAgdXNlcm5hbWUgPSB0aGlzLnByb3BzLnNlc3Npb24udXNlci51c2VybmFtZVxuICAgIH1cblxuICAgIGNvbnN0IHtib29rU2hlbGZ9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGJvb2tTaGVsZkxpc3QgPSBib29rU2hlbGZcbiAgICAgIC5tYXAoYm9vayA9PiAoe1xuICAgICAgICB0aXRsZTogYm9vay50aXRsZSxcbiAgICAgICAgaWQ6IGJvb2suaWRcbiAgICAgIH0pKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxCcmFuZGluZ1xuICAgICAgICAgIHJlY2VudFJlYWRpbmc9e2Jvb2tTaGVsZkxpc3R9XG4gICAgICAgICAgaXNBZG1pbj17aXNBZG1pbn1cbiAgICAgICAgICB1c2VybmFtZT17dXNlcm5hbWV9XG4gICAgICAgICAgb25Mb2dvdXQ9e3RoaXMuaGFuZGxlTG9nb3V0fVxuICAgICAgICAvPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPENvbG9waG9uIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDx7fSwge30sIFByb3BzPihcbiAgc3RhdGUgPT4gKHtcbiAgICBub3RpZmljYXRpb246IHN0YXRlLmNvbXBvbmVudHMubm90aWZpY2F0aW9uLFxuICAgIHNlc3Npb246IHN0YXRlLnNlc3Npb24sXG4gICAgYm9va1NoZWxmOiBzdGF0ZS5wYXlsb2Fkcy5ib29rU2hlbGYgfHwgW11cbiAgfSksXG4gIHsgZmV0Y2hTaGVsZiB9IGFzIGFueVxuKShBcHBDb21tb24pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb250YWluZXJzL0FwcENvbW1vbi50c3hcbiAqKi8iLCJpbXBvcnQgQnJhbmRpbmcgZnJvbSAnLi9CcmFuZGluZydcbmV4cG9ydCBkZWZhdWx0IEJyYW5kaW5nXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0JyYW5kaW5nL2luZGV4LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9fbGF5b3V0J1xuaW1wb3J0IHsgRHJvcGRvd24sIERyb3Bkb3duSXRlbSwgRHJvcGRvd25JdGVtU2VwIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvRHJvcGRvd24nXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9Mb2dvJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0JyYW5kaW5nLnNjc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdXNlcm5hbWU6IHN0cmluZ1xuICBpc0FkbWluPzogYm9vbGVhblxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgcmVjZW50UmVhZGluZz86IHtcbiAgICB0aXRsZTogc3RyaW5nXG4gICAgaWQ6IHN0cmluZ1xuICB9W11cbiAgb25Mb2dvdXQ6ICgpID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIGlzRHJvcGRvd25NZW51VmlzaWJsZTogYm9vbGVhblxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIEJyYW5kaW5nIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNEcm9wZG93bk1lbnVWaXNpYmxlOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLmhhbmRsZUxvZ291dENsaWNrID0gdGhpcy5oYW5kbGVMb2dvdXRDbGljay5iaW5kKHRoaXMpXG4gIH1cblxuICB0b2dnbGVEcm9wZG93bk1lbnUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0Ryb3Bkb3duTWVudVZpc2libGU6ICF0aGlzLnN0YXRlLmlzRHJvcGRvd25NZW51VmlzaWJsZVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVMb2dvdXRDbGljaygpIHtcbiAgICB0aGlzLnByb3BzLm9uTG9nb3V0KClcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgaXNBZG1pbiA9IHRoaXMucHJvcHMuaXNBZG1pbiA/IHRoaXMucHJvcHMuaXNBZG1pbiA6IGZhbHNlXG5cbiAgICBjb25zdCB7IHVzZXJuYW1lLCByZWNlbnRSZWFkaW5nIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9e2BicmFuZGluZyAke3RoaXMucHJvcHMuY2xhc3NOYW1lID8gdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAnJ31gfT5cbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TG9nbyB0bz1cIi9cIiAvPlxuICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJuYXZcIj5cbiAgICAgICAgICAgICAgPHVsIHN0eWxlTmFtZT1cIm5hdi1saW5rc1wiPlxuICAgICAgICAgICAgICAgIDxsaSBzdHlsZU5hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgc3R5bGVOYW1lPVwibmF2LWxpbmtcIiB0bz1cIi9icm93c2VcIj7mtY/op4g8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB1c2VybmFtZVxuICAgICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJuYXYtLXVzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHJlY2VudFJlYWRpbmcubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBzdHlsZU5hbWU9XCJkcm9wZG93bi1yZWNlbnQtcmVhZGluZ1wiIHRpdGxlPVwi5pyA6L+R6ZiF6K+7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlbnRSZWFkaW5nLnNsaWNlKDAsIDUpLm1hcCgoYm9vaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2Avdmlld2VyL2Jvb2svJHtib29rLmlkfWB9Pntib29rLnRpdGxlfTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtU2VwIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+PExpbmsgdG89e2AvdXNlci9zaGVsZmB9Puafpeeci+WFqOmDqDwvTGluaz48L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dXNlcm5hbWV9eyBpc0FkbWluICYmIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlXCI+QWRtaW48L3NwYW4+IH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgKSB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWRtaW4gPT09IHRydWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPjxMaW5rIHRvPVwiL2NvbnNvbGVcIj7mjqfliLblj7A8L0xpbms+PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+PExpbmsgdG89e2AvdXNlci9zaGVsZmB9PuS5puaetjwvTGluaz48L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPjxMaW5rIHRvPXtgL3VzZXIvcHJvZmlsZWB9PuS4quS6uuS4u+mhtTwvTGluaz48L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPjxMaW5rIHRvPXtgL3VzZXIvcHJlZmVyZW5jZWB9Puiuvue9rjwvTGluaz48L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtU2VwIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT48YSBvbkNsaWNrPXt0aGlzLmhhbmRsZUxvZ291dENsaWNrfSBocmVmPVwiI1wiPumAgOWHujwvYT48L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwibmF2LS11c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZU5hbWU9XCJuYXYtbGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGVOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHN0eWxlTmFtZT1cIm5hdi1saW5rXCIgdG89XCIvc2lnbmluXCI+55m75b2VPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBzdHlsZU5hbWU9XCJuYXYtbGlua1wiIHRvPVwiL3NpZ251cFwiPuazqOWGjDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCcmFuZGluZ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9CcmFuZGluZy9CcmFuZGluZy50c3hcbiAqKi8iLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQ29udGFpbmVyJ1xuZXhwb3J0IHsgQ29udGFpbmVyIH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19sYXlvdXQvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICByZW5kZXIoKSB7XG4gICAgbGV0IGNsYXNzTmFtZSA9ICh0aGlzLnByb3BzLmlzRmx1aWQ/J2NvbnRhaW5lci1mbHVpZCc6J2NvbnRhaW5lcicpICsgKHRoaXMucHJvcHMuY2xhc3NOYW1lP2AgJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gOicnKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19sYXlvdXQvQ29udGFpbmVyLnRzeFxuICoqLyIsImltcG9ydCBEcm9wZG93biBmcm9tICcuL0Ryb3Bkb3duJ1xuaW1wb3J0IERyb3Bkb3duSXRlbSBmcm9tICcuL0Ryb3Bkb3duSXRlbSdcbmltcG9ydCBEcm9wZG93bkl0ZW1TZXAgZnJvbSAnLi9Ecm9wZG93bkl0ZW1TZXAnXG5cbmV4cG9ydCB7IERyb3Bkb3duSXRlbSwgRHJvcGRvd24sIERyb3Bkb3duSXRlbVNlcCB9XG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRHJvcGRvd24vaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlczogYW55ID0gcmVxdWlyZSgnLi9Ecm9wZG93bi5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmcgfCBKU1guRWxlbWVudFxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgc3R5bGVOYW1lPzogc3RyaW5nXG4gIHN0eWxlPzogJ2JsdWUnIHwgJ2RhcmsnXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBzaG93TWVudT86IGJvb2xlYW5cbn1cblxuLy8gdG9kbzog5pS+5YiwIHV0aWxzL2RvbSDph4zpnaJcbmZ1bmN0aW9uIGlzRGVzY2VuZGFudChwYXJlbnQsIGNoaWxkKSB7XG4gIGxldCBub2RlID0gY2hpbGQucGFyZW50Tm9kZVxuICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgZHJvcGRvd246IGFueVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dNZW51OiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLnRvZ2dsZURyb3Bkb3duID0gdGhpcy50b2dnbGVEcm9wZG93bi5iaW5kKHRoaXMpXG4gICAgdGhpcy5oaWRlRXhwZW5kZWQgPSB0aGlzLmhpZGVFeHBlbmRlZC5iaW5kKHRoaXMpXG4gIH1cblxuICB0b2dnbGVEcm9wZG93bihlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93TWVudTogIXRoaXMuc3RhdGUuc2hvd01lbnVcbiAgICB9KVxuICB9XG5cbiAgaGlkZUV4cGVuZGVkKGUpIHtcbiAgICAvLyDmo4Dmn6Xngrnlh7vnmoQgZG9tIOaYr+WQpuaYryBkcm9wZG93biDnmoTlrZDlhYPntKBcbiAgICAvLyDlpoLmnpzmmK/pgqPkuYjlsLHkuI3lgZrlpITnkIbvvIzogIwgdG9nZ2xlRHJvcGRvd24g5Lya5ZON5bqUXG4gICAgLy8g6Kej5Yaz5LqG6aG16Z2i5LiK5ZCM5pe255So5Lik5LiqIGRyb3Bkb3duIOaXtu+8jOWFtuS4reS4gOS4quWxleW8gO+8jOeCueWHu+WPpuS4gOS4quWJjeiAheS4jeWQiOS4iueahOmXrumimFxuICAgIGlmICghaXNEZXNjZW5kYW50KHRoaXMuZHJvcGRvd24sIGUudGFyZ2V0KSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dNZW51OiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVFeHBlbmRlZClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZUV4cGVuZGVkKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXtyZWYgPT4geyB0aGlzLmRyb3Bkb3duID0gcmVmIH0gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZURyb3Bkb3dufSBzdHlsZU5hbWU9XCJkcm9wZG93blwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lIHx8ICcnfT5cbiAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMudGl0bGV9IDxzcGFuIHN0eWxlTmFtZT1cImRyb3Bkb3duLWNhcmV0XCIgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TWVudSAmJiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT17IHN0eWxlID09PSAnZGFyaycgPyAnZHJvcGRvd24tbWVudS0tZGFyaycgOiAnZHJvcGRvd24tbWVudSd9PlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRHJvcGRvd24vRHJvcGRvd24udHN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiZHJvcGRvd24taXRlbVwiOlwiZHJvcGRvd24taXRlbV8yQzFkeiBsaWdodC1saW5rXzJRRGVBXCIsXCJsaWdodC1saW5rXCI6XCJsaWdodC1saW5rXzJRRGVBXCIsXCJkcm9wZG93blwiOlwiZHJvcGRvd25fU1pmeXBcIixcImRyb3Bkb3duLXRvZ2dsZVwiOlwiZHJvcGRvd24tdG9nZ2xlXzM0UWZkXCIsXCJkcm9wZG93bi1tZW51XCI6XCJkcm9wZG93bi1tZW51XzFIZ2JTXCIsXCJkcm9wZG93bi1jYXJldFwiOlwiZHJvcGRvd24tY2FyZXRfRmNCV0lcIixcInNlcFwiOlwic2VwXzEwWTBvXCIsXCJkcm9wZG93bi1tZW51LS1kYXJrXCI6XCJkcm9wZG93bi1tZW51LS1kYXJrXzZlVlBYIGRyb3Bkb3duLW1lbnVfMUhnYlNcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0Ryb3Bkb3duL0Ryb3Bkb3duLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Ecm9wZG93bi5zY3NzJylcblxudHlwZSBUUHJvcHMgPSB7XG4gIGNoaWxkcmVuPzogYW55XG59XG5cbmZ1bmN0aW9uIERyb3Bkb3duSXRlbShwcm9wczogVFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGxpPlxuICAgICAge1xuICAgICAgICB0eXBlb2YgcHJvcHMuY2hpbGRyZW4gPT09ICdzdHJpbmcnXG4gICAgICAgICAgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydkcm9wZG93bi1pdGVtJ119Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgICAgOiBSZWFjdC5jbG9uZUVsZW1lbnQocHJvcHMuY2hpbGRyZW4sIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogc3R5bGVzWydkcm9wZG93bi1pdGVtJ11cbiAgICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvbGk+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25JdGVtXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Ecm9wZG93bi9Ecm9wZG93bkl0ZW0udHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Ecm9wZG93bi5zY3NzJylcblxudHlwZSBUUHJvcHMgPSB7XG59XG5cbmZ1bmN0aW9uIERyb3Bkb3duSXRlbVNlcChwcm9wczogVFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzWydzZXAnXX0+PC9saT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bkl0ZW1TZXBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL0Ryb3Bkb3duL0Ryb3Bkb3duSXRlbVNlcC50c3hcbiAqKi8iLCJpbXBvcnQgTG9nbyBmcm9tICcuL0xvZ28nXG5leHBvcnQgZGVmYXVsdCBMb2dvXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0xvZ28vaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Mb2dvLmNzcycpXG5cbnR5cGUgVFByb3BzID0ge1xuICBjaGlsZHJlbj86IGFueVxuICB0bz86IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBMb2dvKHByb3BzOiBUUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXNbJ2xvZ28td3JhcCddfT5cbiAgICAgIDxMaW5rIGNsYXNzTmFtZT17c3R5bGVzWydsb2dvJ119IHRvPXtwcm9wcy50b30+cmVhZHI8L0xpbms+XG4gICAgPC9oMT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dvXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0xvZ28vTG9nby50c3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJsb2dvLXdyYXBcIjpcImxvZ28td3JhcF9DUDVQOVwiLFwibG9nb1wiOlwibG9nb18zcWNiVlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Mb2dvL0xvZ28uY3NzXG4gKiogbW9kdWxlIGlkID0gNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIm5hdi1saW5rXCI6XCJuYXYtbGlua18zWDBUOFwiLFwiYnJhbmRpbmdcIjpcImJyYW5kaW5nXzhFVkF0XCIsXCJkcm9wZG93bi1tZW51XCI6XCJkcm9wZG93bi1tZW51XzVTYzUwXCIsXCJ1c2VybmFtZVwiOlwidXNlcm5hbWVfM01tNnpcIixcIm5hdi1saW5rc1wiOlwibmF2LWxpbmtzXzJ3VFlZXCIsXCJuYXZcIjpcIm5hdl8xb2oxelwiLFwibmF2LS11c2VyXCI6XCJuYXYtLXVzZXJfMUw3TGJcIixcImRyb3Bkb3duLXJlY2VudC1yZWFkaW5nXCI6XCJkcm9wZG93bi1yZWNlbnQtcmVhZGluZ18yb3lqSFwiLFwibmF2LWl0ZW1cIjpcIm5hdi1pdGVtX2Y4M2JoXCIsXCJyZWNlbnQtcmVhZGluZ1wiOlwicmVjZW50LXJlYWRpbmdfMWtKS2hcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQnJhbmRpbmcvQnJhbmRpbmcuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgQ29sb3Bob24gZnJvbSAnLi9Db2xvcGhvbidcbmV4cG9ydCBkZWZhdWx0IENvbG9waG9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbG9waG9uL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vZWxlbWVudHMvX2xheW91dC9Db250YWluZXInXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vQ29sb3Bob24uY3NzJylcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBDb2xvcGhvbiBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3Bob25cIiBzdHlsZU5hbWU9XCJjb2xvcGhvblwiPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxwPsKpIDIwMTXvvI0yMDE2IHJlYWRyd2ViLmNvbSwgYWxsIHJpZ2h0cyByZXNlcnZlZDwvcD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sb3Bob25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29sb3Bob24vQ29sb3Bob24udHN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiY29sb3Bob25cIjpcImNvbG9waG9uX0ZWZFNSXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbG9waG9uL0NvbG9waG9uLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgKiBhcyBhcGlzIGZyb20gJy4vYXBpcydcbmltcG9ydCAqIGFzIGV4dGVybmFsQXBpcyBmcm9tICcuL2V4dGVybmFsQXBpcydcblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmFzc2lnbih7fSwgYXBpcywgZXh0ZXJuYWxBcGlzKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvYXBpcy9pbmRleC50c1xuICoqLyIsImltcG9ydCBjYWxsQXBpIGZyb20gJy4uL3V0aWxzL2NhbGxBcGknXG5pbXBvcnQgQXBpUm9vdHMgZnJvbSAnLi4vY29uZmlnJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ29sbGVjdGlvbihkYXRhOiB7XG4gIG5hbWU6IHN0cmluZ1xuICBpdGVtczogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbn0pIHtcbiAgcmV0dXJuIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9Y29sbGVjdGlvbnNgLCB7IG1ldGhvZDogJ1BPU1QnLCBkYXRhOiBkYXRhIH0pXG59XG5cbi8qKlxuICogZGF0YTogbmFtZSwgYXV0aG9yLCBkZXNjcmlwdGlvbiwgY292ZXIsIGNvbnRlbnRcbiAqIHRvZG9cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEJvb2soZGF0YSkge1xuICByZXR1cm4gY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1ib29rc2AsIHsgbWV0aG9kOiAnUE9TVCcsIGRhdGE6IGRhdGEgfSlcbn1cblxuLyoqXG4gKiBkYXRhOiBuYW1lLCBzbHVnLCBkZXNjcmlwdGlvblxuICogdG9kb1xuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQXV0aG9yKGRhdGEpIHtcbiAgcmV0dXJuIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9YXV0aG9yc2AsIHsgbWV0aG9kOiAnUE9TVCcsIGRhdGE6IGRhdGEgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEF1dGhvcnMocXVlcnkpIHtcbiAgcmV0dXJuIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9YXV0aG9ycz9xPSR7cXVlcnl9YClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEJvb2tzKHF1ZXJ5KSB7XG4gIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWJvb2tzP3E9JHtxdWVyeX1gKVxufVxuXG4vKipcbiAqIGRhdGE6IHBhZ2VObywgcGFnZVN1bSwgcGVyY2VudGFnZVxuICogdG9kb1xuICovXG5leHBvcnQgdHlwZSBzZXRQcm9ncmVzcyA9IHtcbiAgcGVyY2VudGFnZTogbnVtYmVyXG59XG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvZ3Jlc3MoYm9va0lkLCBkYXRhOiBzZXRQcm9ncmVzcykge1xuICBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfXVzZXIvYm9va3MvJHtib29rSWR9L3Byb2dyZXNzYCwgeyBtZXRob2Q6ICdQVVQnLCBkYXRhIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVCb29rKGlkKSB7XG4gIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWJvb2tzLyR7aWR9YCwge1xuICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgcmV0dXJuIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9YXV0aC9yZXZva2VgLCB7XG4gICAgbWV0aG9kOiAnUFVUJ1xuICB9KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvYXBpcy9hcGlzLnRzXG4gKiovIiwiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IG9iamVjdFRvVXJsZW5jb2RlZCBmcm9tICcuLi91dGlscy9wYXJzZUZvcm1EYXRhJ1xuaW1wb3J0IGhhbmRsZVJlc3BvbnNlIGZyb20gJy4uL3V0aWxzL2hhbmRsZVJlc3BvbnNlJ1xuXG50eXBlIENhbGxBcGlDb25maWcgPSB7XG4gIG1ldGhvZD86ICdHRVQnIHwgJ1BPU1QnIHwgJ0RFTEVURScgfCAnUFVUJ1xuICBkYXRhPzoge31cbiAgc2NoZW1hPzoge31cbiAgY3JlZGVudGlhbHM/OiAnaW5jbHVkZScgfCAnc2FtZS1vcmlnaW4nXG4gIGRhdGFUeXBlPzogJ3VybGVuY29kZWQnIHwgJ2pzb24nXG59XG5cbnR5cGUgRmV0Y2hDb25maWcgPSB7XG4gIG1ldGhvZD86IHN0cmluZ1xuICBjcmVkZW50aWFscz86ICdpbmNsdWRlJyB8ICdzYW1lLW9yaWdpbidcbiAgaGVhZGVycz86IGFueVxuICBib2R5Pzogc3RyaW5nXG59XG5cbmNvbnN0IGRlZmF1bHRDb25maWc6IENhbGxBcGlDb25maWcgPSB7XG4gIGRhdGFUeXBlOiAnanNvbicsXG4gIG1ldGhvZDogJ0dFVCcsXG4gIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG59XG5cbi8vIHJldHVybiBmZXRjaCBjb25maWdcbmNvbnN0IHBhcnNlQ29uZmlnID0gKG9yaWdpbmFuQ29uZmlnOiBDYWxsQXBpQ29uZmlnKSA9PiB7XG4gIGxldCB7IG1ldGhvZCwgZGF0YSwgY3JlZGVudGlhbHMsIGRhdGFUeXBlIH0gPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0Q29uZmlnLCBvcmlnaW5hbkNvbmZpZylcbiAgbGV0IGZldGNoQ29uZmlnOiBGZXRjaENvbmZpZyA9IHt9XG5cbiAgaWYgKG1ldGhvZCkge1xuICAgIGZldGNoQ29uZmlnLm1ldGhvZCA9IG1ldGhvZFxuICB9XG5cbiAgaWYgKGNyZWRlbnRpYWxzKSB7XG4gICAgZmV0Y2hDb25maWcuY3JlZGVudGlhbHMgPSBjcmVkZW50aWFsc1xuICB9XG5cbiAgLy8gaGFuZGxlIHJlcXVlc3QgaGVhZGVycyBhbmQgYm9keVxuICBpZiAobWV0aG9kID09PSAnUE9TVCcgfHwgbWV0aG9kID09PSAnUFVUJykge1xuICAgIGxldCBjb250ZW50VHlwZVxuICAgIGxldCBib2R5XG5cbiAgICBpZiAoZGF0YVR5cGUgPT09ICdqc29uJykge1xuICAgICAgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgIH0gZWxzZSBpZiAoZGF0YVR5cGUgPT09ICd1cmxlbmNvZGVkJykge1xuICAgICAgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgYm9keSA9IG9iamVjdFRvVXJsZW5jb2RlZChkYXRhKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYW5kbGUgdW5zdXBwb3J0ZWQgZGF0YVR5cGVcbiAgICAgIGRhdGFUeXBlID0gJ3VybGVuY29kZWQnXG4gICAgICBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICBib2R5ID0gb2JqZWN0VG9VcmxlbmNvZGVkKGRhdGEpXG4gICAgICBjb25zb2xlLndhcm4oJ1Vuc3VwcG9ydGVkIGRhdGFUeXBlIHVzZWQgXCJ1cmxlbmNvZGVkXCIgaW5zdGVhZCEnKVxuICAgIH1cblxuICAgIGZldGNoQ29uZmlnLmhlYWRlcnMgPSB7XG4gICAgICAnQ29udGVudC1UeXBlJzogY29udGVudFR5cGUsXG4gICAgICAnQWNjZXNzLUNvbnRyb2wtUmVxdWVzdC1NZXRob2QnOiBtZXRob2RcbiAgICB9XG5cbiAgICBmZXRjaENvbmZpZy5ib2R5ID0gYm9keVxuXG4gICAgLy8gaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gICBmZXRjaENvbmZpZy5oZWFkZXJzLmNvb2tpZSA9ICdfZ2E9R0ExLjEuNDEwMTMyNTAzLjE0NTMwODg2MTg7IENOWlpEQVRBMTI1NzAyOTYwNz00NDIzNTg0MDYtMTQ1MDg3MDIxNS0lN0MxNDU4NzExNDM3OyBDTlpaREFUQTEyNTc1NzAxNDE9MTM1ODk5OTc2MC0xNDU2MTMyMDMxLSU3QzE0NTg3MTQ5MTA7IGxvZ2luVHlwZT0wOyBjb25uZWN0LnNpZD1zJTNBUnE0ZlJhZUkyaWJOVkVwNlQtRVg5R3JtZkpfemREZXcuTmZIUlRCREVQZGVWajloZUpJVnFQNDVsQ1U5NFI0JTJGY3IlMkJGemlSWTN5OXcnXG4gICAgLy8gfVxuICB9XG5cbiAgaWYgKG1ldGhvZCA9PT0gJ0RFTEVURScpIHtcbiAgICBmZXRjaENvbmZpZy5oZWFkZXJzID0ge1xuICAgICAgJ0FjY2Vzcy1Db250cm9sLVJlcXVlc3QtTWV0aG9kJzogJ0RFTEVURSdcbiAgICB9XG4gIH1cblxuICAvLyBmZXRjaENvbmZpZy5oZWFkZXJzID0ge1xuICAvLyAgIGNvb2tpZTogJ19nYT1HQTEuMS40MTAxMzI1MDMuMTQ1MzA4ODYxODsgQ05aWkRBVEExMjU3MDI5NjA3PTQ0MjM1ODQwNi0xNDUwODcwMjE1LSU3QzE0NTg3MTE0Mzc7IENOWlpEQVRBMTI1NzU3MDE0MT0xMzU4OTk5NzYwLTE0NTYxMzIwMzEtJTdDMTQ1ODcxNDkxMDsgbG9naW5UeXBlPTA7IGNvbm5lY3Quc2lkPXMlM0FScTRmUmFlSTJpYk5WRXA2VC1FWDlHcm1mSl96ZERldy5OZkhSVEJERVBkZVZqOWhlSklWcVA0NWxDVTk0UjQlMkZjciUyQkZ6aVJZM3k5dydcbiAgLy8gfVxuXG4gIHJldHVybiBmZXRjaENvbmZpZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbEFwaShmdWxsVXJsOiBzdHJpbmcsIGNvbmZpZzogQ2FsbEFwaUNvbmZpZyA9IHt9KSB7XG4gIHJldHVybiBmZXRjaChmdWxsVXJsLCBwYXJzZUNvbmZpZyhjb25maWcpKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwNCkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsganNvbiwgcmVzcG9uc2UgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHsgcmVzcG9uc2UsIGpzb246IHt9IH1cbiAgICB9KVxuICAgIC50aGVuKCh7IGpzb24sIHJlc3BvbnNlIH0pID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gaGFuZGxlUmVzcG9uc2UoeyBqc29uLCByZXNwb25zZSB9LCBjb25maWcuc2NoZW1hKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGpzb24pXG4gICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FsbEFwaVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvdXRpbHMvY2FsbEFwaS50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMTIpKSg3NTMpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtZmV0Y2gvZmV0Y2gtbnBtLWJyb3dzZXJpZnkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIF91dGlsc19kbGxcbiAqKiBtb2R1bGUgaWQgPSA2NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgbm9ybWFsaXplIH0gZnJvbSAnbm9ybWFsaXpyJ1xuaW1wb3J0IGh1bXBzIGZyb20gJ2h1bXBzJ1xuaW1wb3J0IHBhcnNlUXVlcnlTdHJpbmcgZnJvbSAnLi9wYXJzZVF1ZXJ5U3RyaW5nJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5mdW5jdGlvbiBnZXROZXh0UGFnZVVybChyZXNwb25zZSkge1xuICBjb25zdCBsaW5rID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2xpbmsnKVxuICBpZiAoIWxpbmspIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGNvbnN0IG5leHRMaW5rID0gbGluay5zcGxpdCgnLCcpLmZpbmQocyA9PiBzLmluZGV4T2YoJ3JlbD1cIm5leHRcIicpID4gLTEpXG4gIGlmICghbmV4dExpbmspIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIHJldHVybiBuZXh0TGluay5zcGxpdCgnOycpWzBdLnRyaW0oKS5zbGljZSgxLCAtMSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2UoZGF0YSwgc2NoZW1hKSB7XG4gIGNvbnN0IHsganNvbiwgcmVzcG9uc2UgfSA9IGRhdGFcbiAgY29uc3QgY2FtZWxpemVkSnNvbiA9IGh1bXBzLmNhbWVsaXplS2V5cyhqc29uKVxuXG4gIGlmICh0eXBlb2Ygc2NoZW1hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnN0IG5leHRQYWdlVXJsID0gZ2V0TmV4dFBhZ2VVcmwocmVzcG9uc2UpXG5cbiAgICByZXR1cm4gIE9iamVjdC5hc3NpZ24oe30sXG4gICAgICBub3JtYWxpemUoY2FtZWxpemVkSnNvbiwgc2NoZW1hKSxcbiAgICAgIHtcbiAgICAgICAgbmV4dFBhZ2VVcmwsXG4gICAgICAgIG5leHRQYWdlOiBfLmdldChwYXJzZVF1ZXJ5U3RyaW5nKG5leHRQYWdlVXJsLnNwbGl0KCc/JylbMV0gfHwgJycpLCAncGFnZScsIDApXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGNhbWVsaXplZEpzb25cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlUmVzcG9uc2VcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3V0aWxzL2hhbmRsZVJlc3BvbnNlLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxMikpKDc1Mik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaHVtcHMvaHVtcHMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIF91dGlsc19kbGxcbiAqKiBtb2R1bGUgaWQgPSA2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nKHF1ZXJ5U3RyaW5nKSB7XG4gIGNvbnN0IHBhcmFtcyA9IHF1ZXJ5U3RyaW5nLnNwbGl0KCcmJylcbiAgbGV0IG9iamVjdCA9IHt9XG5cbiAgcGFyYW1zLmZvckVhY2gocGFyYW0gPT4ge1xuICAgIGNvbnN0IGtleSA9IHBhcmFtLnNwbGl0KCc9JylbMF1cbiAgICBjb25zdCB2YWwgPSBwYXJhbS5zcGxpdCgnPScpWzFdXG5cbiAgICBvYmplY3Rba2V5XSA9IHZhbFxuICB9KVxuXG4gIHJldHVybiBvYmplY3Rcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3V0aWxzL3BhcnNlUXVlcnlTdHJpbmcudHNcbiAqKi8iLCJjb25zdCBIT1NUID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cubG9jYXRpb24ub3JpZ2luIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCdcblxuY29uc3QgQXBpUm9vdHMgPSB7XG4gIExPQ0FMOiBgJHtIT1NUfS9hcGkvYCxcbiAgRE9VQkFOX0JPT0tTOiAnaHR0cHM6Ly9hcGkuZG91YmFuLmNvbS92Mi9ib29rLydcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBpUm9vdHNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbmZpZy50c1xuICoqLyIsImltcG9ydCBqc29ucCBmcm9tICcuLi91dGlscy9qc29ucCdcbmltcG9ydCBBcGlSb290cyBmcm9tICcuLi9jb25maWcnXG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaERvdWJhbkJvb2tzKHF1ZXJ5KSB7XG4gIHJldHVybiBqc29ucChgJHtBcGlSb290cy5ET1VCQU5fQk9PS1N9L3NlYXJjaD9jb3VudD01JnE9JHtxdWVyeX1gLCB7fSlcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2FwaXMvZXh0ZXJuYWxBcGlzLnRzXG4gKiovIiwiaW1wb3J0IGhhbmRsZVJlc3BvbnNlIGZyb20gJy4vaGFuZGxlUmVzcG9uc2UnXG5cbmZ1bmN0aW9uIGpzb25wKGZ1bGxVcmwsIGNvbmZpZzogeyBzY2hlbWE/OiB7fSB9KSB7XG4gIGlmIChmdWxsVXJsLmluZGV4T2YoJ2RvdWJhbicpICE9PSAtMSkge1xuICAgIGxldCBpZCA9IG5ldyBEYXRlKCkudmFsdWVPZigpXG4gICAgbGV0IGpzb25wSWQgPSAnanNvbnAtJyArIGlkXG4gICAgbGV0IGpzb25wQ2FsbGJhY2sgPSAnanNvbnBDYWxsYmFjaycgKyBpZFxuICAgIGxldCBqc29ucENhbGxiYWNrRGF0YSA9IGBfX0pTT05QX0RBVEFfJHtpZH1fX2BcblxuICAgIHdpbmRvd1tqc29ucENhbGxiYWNrXSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB3aW5kb3dbanNvbnBDYWxsYmFja0RhdGFdID0gZGF0YVxuICAgIH1cblxuICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgYCR7ZnVsbFVybH0mY2FsbGJhY2s9JHtqc29ucENhbGxiYWNrfWApXG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnaWQnLCBqc29ucElkKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChqc29ucElkKSlcbiAgICAgICAgbGV0IGpzb24gPSB3aW5kb3dbanNvbnBDYWxsYmFja0RhdGFdXG5cbiAgICAgICAgcmVzb2x2ZShoYW5kbGVSZXNwb25zZSh7IGpzb24gfSwgY29uZmlnLnNjaGVtYSkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBqc29ucFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvdXRpbHMvanNvbnAudHNcbiAqKi8iLCJpbXBvcnQgQ29uc29sZU1hc3RlciBmcm9tICcuL0NvbnNvbGVNYXN0ZXInXG5leHBvcnQgZGVmYXVsdCBDb25zb2xlTWFzdGVyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb250YWluZXJzL0NvbnNvbGVNYXN0ZXIvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2VsZW1lbnRzL19sYXlvdXQvQ29udGFpbmVyJ1xuaW1wb3J0IENvbnNvbGVCcmFuZGluZyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnNvbGVCcmFuZGluZydcbmltcG9ydCB7IHVzZXJBdXRoLCBzZW5kTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCBDb25zb2xlU2lkZWJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnNvbGVTaWRlYmFyJ1xuaW1wb3J0IG1lbnVzIGZyb20gJy4uLy4uL2NvbnRlbnQvbWVudXMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vQ29uc29sZU1hc3Rlci5jc3MnKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBub3RpZmljYXRpb25zPzogYW55XG4gIHVzZXJBdXRoPzogYW55XG4gIHNlc3Npb24/OiBhbnlcbiAgcm91dGluZz86IGFueVxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIENvbnNvbGUgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMudXNlckF1dGgoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBpc0FkbWluID0gdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIucm9sZSA9PT0gJ2FkbWluJyA/IHRydWUgOiBmYWxzZVxuICAgIGxldCB1c2VybmFtZSA9IHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLnVzZXJuYW1lID8gdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIudXNlcm5hbWUgOiBudWxsXG4gICAgbGV0IHBhdGhuYW1lID0gdGhpcy5wcm9wcy5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMgPyB0aGlzLnByb3BzLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucy5wYXRobmFtZSA6ICdjb25zb2xlJ1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxDb25zb2xlQnJhbmRpbmcgaXNBZG1pbj17aXNBZG1pbn0gdXNlcm5hbWU9e3VzZXJuYW1lfSAvPlxuICAgICAgICA8Q29udGFpbmVyIGlzRmx1aWQ9e3RydWV9PlxuICAgICAgICAgIDxDb25zb2xlU2lkZWJhclxuICAgICAgICAgICAgbWVudU1hcHBpbmc9e21lbnVzfVxuICAgICAgICAgICAgY3VycmVudFBhdGg9e3BhdGhuYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICBub3RpZmljYXRpb25zOiBzdGF0ZS5jb21wb25lbnRzLm5vdGlmaWNhdGlvbnMsXG4gICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvbixcbiAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nXG4gIH0pLFxuICB7IHNlbmROb3RpZmljYXRpb24sIHVzZXJBdXRoIH1cbikoQ29uc29sZSBhcyBhbnkpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb250YWluZXJzL0NvbnNvbGVNYXN0ZXIvQ29uc29sZU1hc3Rlci50c3hcbiAqKi8iLCJpbXBvcnQgQ29uc29sZUJyYW5kaW5nIGZyb20gJy4vQ29uc29sZUJyYW5kaW5nJ1xuZXhwb3J0IGRlZmF1bHQgQ29uc29sZUJyYW5kaW5nXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnNvbGVCcmFuZGluZy9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2VsZW1lbnRzL19sYXlvdXQvQ29udGFpbmVyJ1xuaW1wb3J0IHsgRHJvcGRvd24sIERyb3Bkb3duSXRlbSwgRHJvcGRvd25JdGVtU2VwIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvRHJvcGRvd24nXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBMb2dvIGZyb20gJy4uL0xvZ28nXG4vLyBjb25zdCBicmFuZGluZ1N0eWxlcyA9IHJlcXVpcmUoJy4uL0JyYW5kaW5nL0JyYW5kaW5nLmNzcycpXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0NvbnNvbGVCcmFuZGluZy5zY3NzJylcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBDb25zb2xlQnJhbmRpbmcgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0Ryb3Bkb3duTWVudVZpc2libGU6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRHJvcGRvd25NZW51KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNEcm9wZG93bk1lbnVWaXNpYmxlOiAhdGhpcy5zdGF0ZS5pc0Ryb3Bkb3duTWVudVZpc2libGVcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB1c2VybmFtZSA9IHRoaXMucHJvcHMudXNlcm5hbWVcbiAgICBsZXQgaXNBZG1pbiA9IHRoaXMucHJvcHMuaXNBZG1pbiA/IHRoaXMucHJvcHMuaXNBZG1pbiA6ICdmYWxzZSdcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cImJyYW5kaW5nXCI+XG4gICAgICAgIDxDb250YWluZXIgaXNGbHVpZD17dHJ1ZX0gY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExvZ28gdG89XCIvY29uc29sZVwiIC8+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInN1Yi1uYW1lXCI+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cInN1YlwiPkNvbnNvbGU8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwibmF2IHJpZ2h0XCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZSA/IChcbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImRhcmtcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17KFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt1c2VybmFtZX17IGlzQWRtaW4gJiYgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtLWRhcmtcIj5BZG1pbjwvc3Bhbj4gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKSB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT48TGluayB0bz1cIi9cIj7lm57liLAgUmVhZHI8L0xpbms+PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+PExpbmsgdG89e2AvdXNlci9wcm9maWxlYH0+5Liq5Lq65Li76aG1PC9MaW5rPjwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPjxMaW5rIHRvPXtgL3VzZXIvcHJlZmVyZW5jZWB9Puiuvue9rjwvTGluaz48L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVNlcCAvPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPjxhIGhyZWY9XCIvbG9nb3V0XCI+6YCA5Ye6PC9hPjwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvc2lnbmluXCI+55m75b2VPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvc2lnbnVwXCI+5rOo5YaMPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25zb2xlQnJhbmRpbmdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29uc29sZUJyYW5kaW5nL0NvbnNvbGVCcmFuZGluZy50c3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJicmFuZGluZ1wiOlwiYnJhbmRpbmdfM2dvUkdcIixcInNlcFwiOlwic2VwX0FUNkdsXCIsXCJzdWJcIjpcInN1Yl9JeWhtc1wiLFwicmlnaHRcIjpcInJpZ2h0XzFaQVFQXCIsXCJzdWItbmFtZVwiOlwic3ViLW5hbWVfMlQ4YWhcIixcIm5hdlwiOlwibmF2XzEweW40IG5hdl8xb2oxelwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db25zb2xlQnJhbmRpbmcvQ29uc29sZUJyYW5kaW5nLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA3NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IENvbnNvbGVTaWRlYmFyIGZyb20gJy4vQ29uc29sZVNpZGViYXInXG5leHBvcnQgZGVmYXVsdCBDb25zb2xlU2lkZWJhclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db25zb2xlU2lkZWJhci9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9JY29uJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0NvbnNvbGVTaWRlYmFyLmNzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBjdXJyZW50UGF0aD86IGFueVxuICBtZW51TWFwcGluZz86IGFueVxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBDb25zb2xlU2lkZWJhciBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1lbnVNYXBwaW5nLCBjdXJyZW50UGF0aCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGN1cnJlbnRNZW51ID0ge1xuICAgICAgcm9vdEluZGV4OiAwLFxuICAgICAgc3ViSW5kZXg6IDBcbiAgICB9XG5cbiAgICBtZW51TWFwcGluZy5mb3JFYWNoKChtZW51LCByb290SW5kZXgpID0+IHtcbiAgICAgIGxldCBzdWJJbmRleFxuXG4gICAgICBsZXQgcmVzdWx0ID0gbWVudS5zdWJNZW51LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ucGF0aCA9PT0gY3VycmVudFBhdGgpIHtcbiAgICAgICAgICBzdWJJbmRleCA9IGluZGV4XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGN1cnJlbnRNZW51LnJvb3RJbmRleCA9IHJvb3RJbmRleFxuICAgICAgICBjdXJyZW50TWVudS5zdWJJbmRleCA9IHN1YkluZGV4XG4gICAgICB9XG4gICAgfSlcblxuICAgIGxldCByb290TWVudSA9IChcbiAgICAgIDx1bCBzdHlsZU5hbWU9XCJuYXYtc2lkZS1yb290XCI+XG4gICAgICAgIHtcbiAgICAgICAgICBtZW51TWFwcGluZy5tYXAoKG1lbnUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gc3R5bGVOYW1lPXtpbmRleCAhPT0gY3VycmVudE1lbnUucm9vdEluZGV4ID8gJ3Jvb3QtaXRlbScgOiAncm9vdC1pdGVtLS1jdXJyZW50J30+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e21lbnUucGF0aH0+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBzaXplPXsyNX0gc3R5bGVOYW1lPVwiaWNvblwiIG5hbWU9e21lbnUuY29tcG9uZW50fSAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgIClcblxuICAgIGxldCBzdWJNZW51ID0gKFxuICAgICAgPHVsIHN0eWxlTmFtZT1cIm5hdi1zaWRlLXN1YlwiPlxuICAgICAgICB7XG4gICAgICAgICAgbWVudU1hcHBpbmdbY3VycmVudE1lbnUucm9vdEluZGV4XS5zdWJNZW51Lm1hcCgobWVudSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBzdHlsZU5hbWU9e2luZGV4ICE9PSBjdXJyZW50TWVudS5zdWJJbmRleCA/ICdzdWItaXRlbScgOiAnc3ViLWl0ZW0tLWN1cnJlbnQnfT5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17bWVudS5wYXRofT57bWVudS5kaXNwbGF5TmFtZX08L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzaWRlYmFyLWxlZnRcIj5cbiAgICAgICAge3Jvb3RNZW51fVxuICAgICAgICB7c3ViTWVudX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25zb2xlU2lkZWJhclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db25zb2xlU2lkZWJhci9Db25zb2xlU2lkZWJhci50c3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJzaWRlYmFyLWxlZnRcIjpcInNpZGViYXItbGVmdF8yTmZ2YVwiLFwibmF2LXNpZGVcIjpcIm5hdi1zaWRlXzNMOGY2XCIsXCJuYXYtc2lkZS1yb290XCI6XCJuYXYtc2lkZS1yb290XzFfUEJnIG5hdi1zaWRlXzNMOGY2XCIsXCJuYXYtc2lkZS1yb290LS1jdXJyZW50XCI6XCJuYXYtc2lkZS1yb290LS1jdXJyZW50XzNCVjV0IG5hdi1zaWRlLXJvb3RfMV9QQmcgbmF2LXNpZGVfM0w4ZjZcIixcIm5hdi1zaWRlLXN1YlwiOlwibmF2LXNpZGUtc3ViXzVRX2Y1IG5hdi1zaWRlXzNMOGY2XCIsXCJuYXYtaXRlbVwiOlwibmF2LWl0ZW1fMnIxem5cIixcImljb25cIjpcImljb25fMjZQd0dcIixcInJvb3QtaXRlbVwiOlwicm9vdC1pdGVtX1ZQd3VNIG5hdi1pdGVtXzJyMXpuXCIsXCJyb290LWl0ZW0tLWN1cnJlbnRcIjpcInJvb3QtaXRlbS0tY3VycmVudF8zTE1uRCByb290LWl0ZW1fVlB3dU0gbmF2LWl0ZW1fMnIxem5cIixcInN1Yi1pdGVtXCI6XCJzdWItaXRlbV93YUEtTyBuYXYtaXRlbV8ycjF6blwiLFwic3ViLWl0ZW0tLWN1cnJlbnRcIjpcInN1Yi1pdGVtLS1jdXJyZW50XzNDem1NIHN1Yi1pdGVtX3dhQS1PIG5hdi1pdGVtXzJyMXpuXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnNvbGVTaWRlYmFyL0NvbnNvbGVTaWRlYmFyLmNzc1xuICoqIG1vZHVsZSBpZCA9IDc5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJjb25zdCBtZW51cyA9IFtcbiAge1xuICAgIGNvbXBvbmVudDogJ2Jvb2tzJyxcbiAgICBkaXNwbGF5TmFtZTogJycsXG4gICAgcGF0aDogJy9jb25zb2xlL2Jvb2tzJyxcbiAgICBzdWJNZW51OiBbXG4gICAgICB7XG4gICAgICAgIGNvbXBvbmVudDogJ21hbmFnZWJvb2tzJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdNYW5hZ2UgQm9va3MnLFxuICAgICAgICBwYXRoOiAnL2NvbnNvbGUvYm9va3MnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb21wb25lbnQ6ICdhZGRib29rJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdBZGQgQm9vaycsXG4gICAgICAgIHBhdGg6ICcvY29uc29sZS9ib29rcy9uZXcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb21wb25lbnQ6ICdhZGRjb2xsZWN0aW9uJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdBZGQgQ29sbGVjdGlvbicsXG4gICAgICAgIHBhdGg6ICcvY29uc29sZS9jb2xsZWN0aW9ucy9uZXcnXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgY29tcG9uZW50OiAndXNlcnMnLFxuICAgIGRpc3BsYXlOYW1lOiAnJyxcbiAgICBwYXRoOiAnL2NvbnNvbGUvdXNlcnMnLFxuICAgIHN1Yk1lbnU6IFtcbiAgICAgIHtcbiAgICAgICAgY29tcG9uZW50OiAnbWFuYWdldXNlcnMnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ01hbmFnZSBVc2VycycsXG4gICAgICAgIHBhdGg6ICcvY29uc29sZS91c2VycydcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIC8vIHtcbiAgLy8gICBjb21wb25lbnQ6ICdkYXRhYmFzZScsXG4gIC8vICAgZGlzcGxheU5hbWU6ICcnLFxuICAvLyAgIHBhdGg6ICcvY29uc29sZS9kYicsXG4gIC8vICAgc3ViTWVudTogW11cbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIGNvbXBvbmVudDogJ3N0YXRpc3RpY3MnLFxuICAvLyAgIGRpc3BsYXlOYW1lOiAnJyxcbiAgLy8gICBwYXRoOiAnL2NvbnNvbGUvc3RhdGlzdGljcycsXG4gIC8vICAgc3ViTWVudTogW11cbiAgLy8gfVxuXVxuXG5leHBvcnQgZGVmYXVsdCBtZW51c1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29udGVudC9tZW51cy50c1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImNvbnRlbnRcIjpcImNvbnRlbnRfMm9CUWxcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvQ29uc29sZU1hc3Rlci9Db25zb2xlTWFzdGVyLmNzc1xuICoqIG1vZHVsZSBpZCA9IDgxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ3ZpZXdlci9ib29rLzppZCcsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL1ZpZXdlcicpIGFzIGFueSkuZGVmYXVsdClcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2luZGV4LnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGg6ICcvJyxcblxuICBnZXRDb21wb25lbnQobmV4dFN0YXRlLCBmbikge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgICAgZm4obnVsbCwgKHJlcXVpcmUoJy4vQXBwSG9tZScpIGFzIGFueSkuZGVmYXVsdClcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQXBwSG9tZS9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAnYnJvd3NlJyxcblxuICBnZXRDb21wb25lbnQobmV4dFN0YXRlLCBmbikge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgICAgZm4obnVsbCwgKHJlcXVpcmUoJy4vQnJvd3NlJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9Ccm93c2UvaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ2Jvb2svOmlkJyxcblxuICBnZXRDb21wb25lbnQobmV4dFN0YXRlLCBmbikge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgICAgZm4obnVsbCwgKHJlcXVpcmUoJy4vQm9va0RldGFpbCcpIGFzIGFueSkuZGVmYXVsdClcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQm9va0RldGFpbC9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAnY29sbGVjdGlvbnMnLFxuXG4gIGdldENvbXBvbmVudChuZXh0U3RhdGUsIGZuKSB7XG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlKSB7XG4gICAgICBmbihudWxsLCAocmVxdWlyZSgnLi9Db2xsZWN0aW9ucycpIGFzIGFueSkuZGVmYXVsdClcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQ29sbGVjdGlvbnMvaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ2NvbGxlY3Rpb25zLzppZCcsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL0NvbGxlY3Rpb25EZXRhaWwnKSBhcyBhbnkpLmRlZmF1bHQpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL0NvbGxlY3Rpb25EZXRhaWwvaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ3NpZ25pbicsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL1NpZ25pbicpIGFzIGFueSkuZGVmYXVsdClcbiAgICB9KVxuICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1NpZ25pbi9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAnc2lnbnVwJyxcblxuICBnZXRDb21wb25lbnQobmV4dFN0YXRlLCBmbikge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgICAgZm4obnVsbCwgKHJlcXVpcmUoJy4vU2lnbnVwJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvU2lnbnVwL2luZGV4LnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGg6ICdzaGVsZicsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL1NoZWxmJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9TaGVsZi9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAncHJlZmVyZW5jZScsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL1ByZWZlcmVuY2UnKSBhcyBhbnkpLmRlZmF1bHQpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ3Byb2ZpbGUnLFxuXG4gIGdldENvbXBvbmVudChuZXh0U3RhdGUsIGZuKSB7XG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlKSB7XG4gICAgICBmbihudWxsLCAocmVxdWlyZSgnLi9Qcm9maWxlJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9Qcm9maWxlL2luZGV4LnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGg6ICdib29rcycsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL01hbmFnZUJvb2tzJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAndXNlcnMnLFxuXG4gIGdldENvbXBvbmVudChuZXh0U3RhdGUsIGZuKSB7XG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlKSB7XG4gICAgICBmbihudWxsLCAocmVxdWlyZSgnLi9NYW5hZ2VVc2VycycpIGFzIGFueSkuZGVmYXVsdClcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlVXNlcnMvaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ2Jvb2tzL25ldycsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL0FkZEJvb2snKSBhcyBhbnkpLmRlZmF1bHQpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL0FkZEJvb2svaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ2NvbGxlY3Rpb25zL25ldycsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL0FkZENvbGxlY3Rpb24nKSBhcyBhbnkpLmRlZmF1bHQpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL0FkZENvbGxlY3Rpb24vaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJyonLFxuXG4gIGdldENvbXBvbmVudChuZXh0U3RhdGUsIGZuKSB7XG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlKSB7XG4gICAgICBmbihudWxsLCAocmVxdWlyZSgnLi9Ob01hdGNoJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTm9NYXRjaC9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDY3Myk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2tpdF9kbGxcbiAqKiBtb2R1bGUgaWQgPSAxNzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21wb3NlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJ1xuaW1wb3J0IGFwaSBmcm9tICcuL21pZGRsZXdhcmUvYXBpJ1xuaW1wb3J0IG1vZGlmeVJlc3BvbnNlIGZyb20gJy4vbWlkZGxld2FyZS9tb2RpZnlSZXNwb25zZSdcbmltcG9ydCBoYW5kbGVTZXJ2ZXJTdG9yZSBmcm9tICcuL21pZGRsZXdhcmUvaGFuZGxlU2VydmVyU3RvcmUnXG5pbXBvcnQgaGFuZGxlSW5pdGlhbFN0YXRlIGZyb20gJy4uL3V0aWxzL2hhbmRsZUluaXRpYWxTdGF0ZSdcbmltcG9ydCBsb2dBY3Rpb25UeXBlcyBmcm9tICcuL21pZGRsZXdhcmUvbG9nQWN0aW9uVHlwZXMnXG5pbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcblxuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoKSB7XG4gIGxldCBzdG9yZVxuXG4gIC8vIGlmKG1vZHVsZS5ob3QpIHtcbiAgLy8gICBtb2R1bGUuaG90LmFjY2VwdCgnLi4vcmVkdWNlcnMnLCAoKSA9PiB7XG4gIC8vICAgICBjb25zdCBuZXh0Um9vdFJlZHVjZXIgPSByZXF1aXJlKCcuLi9yZWR1Y2VycycpLmRlZmF1bHRcbiAgLy8gICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKG5leHRSb290UmVkdWNlcilcbiAgLy8gICB9KVxuICAvLyB9XG5cbiAgLy8gc2VydmVyIHNpZGVcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICAgIHJvb3RSZWR1Y2VyLFxuICAgICAge30sXG4gICAgICBhcHBseU1pZGRsZXdhcmUoaGFuZGxlU2VydmVyU3RvcmUsIGFwaSwgbW9kaWZ5UmVzcG9uc2UsIHRodW5rLCBsb2dBY3Rpb25UeXBlcylcbiAgICApXG5cbiAgICByZXR1cm4gc3RvcmVcbiAgfVxuXG4gIGlmIChlbnYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgICByb290UmVkdWNlcixcbiAgICAgIGhhbmRsZUluaXRpYWxTdGF0ZSgpLFxuICAgICAgYXBwbHlNaWRkbGV3YXJlKGhhbmRsZVNlcnZlclN0b3JlLCBhcGksIG1vZGlmeVJlc3BvbnNlLCB0aHVuaylcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICAgIHJvb3RSZWR1Y2VyLFxuICAgICAgaGFuZGxlSW5pdGlhbFN0YXRlKCksXG4gICAgICBjb21wb3NlKFxuICAgICAgICBhcHBseU1pZGRsZXdhcmUoaGFuZGxlU2VydmVyU3RvcmUsIGFwaSwgbW9kaWZ5UmVzcG9uc2UsIHRodW5rLCBjcmVhdGVMb2dnZXIoe2NvbGxhcHNlZDogdHJ1ZX0pKVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBzdG9yZVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvY29uZmlndXJlU3RvcmUudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg0NTUpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2tpdF9kbGxcbiAqKiBtb2R1bGUgaWQgPSAxODFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDY1Nyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbFxuICoqIG1vZHVsZSBpZCA9IDE4MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyByb3V0ZXJSZWR1Y2VyIGFzIHJvdXRpbmcgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnXG5pbXBvcnQgY29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnXG5pbXBvcnQgcGFnaW5hdGUgZnJvbSAnLi9wYWdpbmF0ZSdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuLy8gVXBkYXRlcyBhbiBlbnRpdHkgY2FjaGUgaW4gcmVzcG9uc2UgdG8gYW55IGFjdGlvbiB3aXRoIHJlc3BvbnNlLmVudGl0aWVzLlxuZnVuY3Rpb24gZW50aXRpZXMoc3RhdGUgPSB7IGJvb2tzOiB7fSwgdXNlcnM6IHt9LCBib29rQ29sbGVjdGlvbnM6IHt9IH0sIGFjdGlvbikge1xuICBpZiAoYWN0aW9uLnJlc3BvbnNlICYmIGFjdGlvbi5yZXNwb25zZS5lbnRpdGllcykge1xuICAgIHJldHVybiBfLm1lcmdlKHt9LCBzdGF0ZSwgYWN0aW9uLnJlc3BvbnNlLmVudGl0aWVzKVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmZ1bmN0aW9uIHBheWxvYWRzKHN0YXRlID0ge30sIGFjdGlvbikge1xuICBpZiAoKGFjdGlvbi5yZXNwb25zZSB8fCBhY3Rpb24uZXJyb3IpICYmIGFjdGlvbi5wYXlsb2FkKSB7XG4gICAgcmV0dXJuIF8uYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgW2FjdGlvbi5wYXlsb2FkXTogYWN0aW9uLnJlc3BvbnNlXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBzdGF0ZVxufVxuXG4vLyBVcGRhdGVzIGVycm9yIG1lc3NhZ2UgdG8gbm90aWZ5IGFib3V0IHRoZSBmYWlsZWQgZmV0Y2hlcy5cbmZ1bmN0aW9uIGVycm9yTWVzc2FnZShzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcbiAgY29uc3QgeyBlcnJvciB9ID0gYWN0aW9uXG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLmVycm9yXVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmZ1bmN0aW9uIHNlc3Npb24oc3RhdGUgPSB7IHVzZXI6IHsgcm9sZTogJ3Zpc2l0b3InIH0gfSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdVU0VSX0FVVEhfUkVRVUVTVCc6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgfSlcblxuICAgIGNhc2UgJ1VTRVJfQVVUSF9TVUNDRVNTJzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgdXNlcjogYWN0aW9uLnJlc3BvbnNlXG4gICAgICB9KVxuXG4gICAgY2FzZSAnVVNFUl9BVVRIX0ZBSUxVUkUnOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICB1c2VyOiBhY3Rpb24ucmVzcG9uc2VcbiAgICAgIH0pXG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuLy8gVXBkYXRlcyB0aGUgcGFnaW5hdGlvbiBkYXRhIGZvciBkaWZmZXJlbnQgYWN0aW9ucy5cbmNvbnN0IHBhZ2luYXRpb24gPSBjb21iaW5lUmVkdWNlcnMoe1xuICAvLyBib29rTGlzdDogcGFnaW5hdGUoe1xuICAvLyAgIG1hcEFjdGlvblRvS2V5OiBhY3Rpb24gPT4gYWN0aW9uLmZpbHRlcixcbiAgLy8gICB0eXBlczogWydCT09LX0xJU1RfUkVRVUVTVCcsICdCT09LX0xJU1RfU1VDQ0VTUycsICdCT09LX0xJU1RfRkFJTFVSRSddXG4gIC8vIH0pLFxuICBib29rczogcGFnaW5hdGUoe1xuICAgIG1hcEFjdGlvblRvS2V5OiBhY3Rpb24gPT4gYWN0aW9uLmZsb3dUeXBlLFxuICAgIHR5cGVzOiBbJ0JPT0tTX1JFUVVFU1QnLCAnQk9PS1NfU1VDQ0VTUycsICdCT09LU19GQUlMVVJFJ10sXG4gICAgbWVyZ2U6IGFjdGlvbiA9PiBhY3Rpb24ubWVyZ2VcbiAgfSksXG4gIGJvb2tDb2xsZWN0aW9uczogcGFnaW5hdGUoe1xuICAgIG1hcEFjdGlvblRvS2V5OiBhY3Rpb24gPT4gYWN0aW9uLmZsb3dUeXBlLFxuICAgIHR5cGVzOiBbJ0NPTExFQ1RJT05TX1JFUVVFU1QnLCAnQ09MTEVDVElPTlNfU1VDQ0VTUycsICdDT0xMRUNUSU9OU19GQUlMVVJFJ11cbiAgfSksXG4gIC8vIHNoZWxmOiBwYWdpbmF0ZSh7XG4gIC8vICAgbWFwQWN0aW9uVG9LZXk6IGFjdGlvbiA9PiBhY3Rpb24udXNlcklkLFxuICAvLyAgIHR5cGVzOiBbJ1NIRUxGX1JFUVVFU1QnLCAnU0hFTEZfU1VDQ0VTUycsICdTSEVMRl9GQUlMVVJFJ11cbiAgLy8gfSksXG4gIHVzZXJMaXN0OiBwYWdpbmF0ZSh7XG4gICAgLy8gVE9ET1xuICAgIG1hcEFjdGlvblRvS2V5OiBhY3Rpb24gPT4gJ2FsbCcsXG4gICAgdHlwZXM6IFsnVVNFUl9MSVNUX1JFUVVFU1QnLCAnVVNFUl9MSVNUX1NVQ0NFU1MnLCAnVVNFUl9MSVNUX0ZBSUxVUkUnXSxcbiAgfSksXG4gIGRvdWJhbkJvb2tTZWFyY2hSZXN1bHRzOiBwYWdpbmF0ZSh7XG4gICAgbWFwQWN0aW9uVG9LZXk6IGFjdGlvbiA9PiBhY3Rpb24ucXVlcnksXG4gICAgdHlwZXM6IFsnRE9VQkFOX0JPT0tfU0VBUkNIX1JFUVVFU1QnLCAnRE9VQkFOX0JPT0tfU0VBUkNIX1NVQ0NFU1MnLCAnRE9VQkFOX0JPT0tfU0VBUkNIX0ZBSUxVUkUnXVxuICB9KSxcbiAgYm9va1NlYXJjaFJlc3VsdHM6IHBhZ2luYXRlKHtcbiAgICBtYXBBY3Rpb25Ub0tleTogYWN0aW9uID0+IGFjdGlvbi5xdWVyeSxcbiAgICB0eXBlczogWydCT09LX1NFQVJDSF9SRVFVRVNUJywgJ0JPT0tfU0VBUkNIX1NVQ0NFU1MnLCAnQk9PS19TRUFSQ0hfRkFJTFVSRSddXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBlbGVtZW50cyhzdGF0ZSA9IHt9LCBhY3Rpb24pIHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQ0hBTkdFX1ZBTFVFJykge1xuICAgIC8vIGxvZGFzaCNtZXJnZSDkuI3mlK/mjIEgU3ltYm9sXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICBbYWN0aW9uLm5hbWVdOiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZVthY3Rpb24ubmFtZV0sIHtcbiAgICAgICAgdmFsdWU6IGFjdGlvbi52YWx1ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnVVBEQVRFX0VMRU1FTlQnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICBbYWN0aW9uLm5hbWVdOiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZVthY3Rpb24ubmFtZV0sIGFjdGlvbi5kYXRhKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBwYXlsb2FkcyxcbiAgY29tcG9uZW50cyxcbiAgZWxlbWVudHMsXG4gIHJvdXRpbmcsXG4gIGVudGl0aWVzLFxuICBlcnJvck1lc3NhZ2UsXG4gIHBhZ2luYXRpb24sXG4gIHNlc3Npb25cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9yZWR1Y2Vycy9pbmRleC50c1xuICoqLyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5mdW5jdGlvbiBub3RpZmljYXRpb25zKHN0YXRlID0gW10sIGFjdGlvbikge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdISURFX05PVElGSUNBVElPTicpIHtcbiAgICByZXR1cm4gc3RhdGUubWFwKG4gPT4gbi5pZCA9PT0gYWN0aW9uLmlkID8gT2JqZWN0LmFzc2lnbih7fSwgbiwgeyB2aXNpYmxlOiBmYWxzZX0pIDogbilcbiAgfVxuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ1NIT1dfTk9USUZJQ0FUSU9OJykge1xuICAgIHJldHVybiBbLi4uc3RhdGUsIHtcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBtZXNzYWdlOiBhY3Rpb24ubWVzc2FnZSxcbiAgICAgIHR5cGU6IGFjdGlvbi5tc2dUeXBlLFxuICAgICAgaWQ6IGFjdGlvbi5pZFxuICAgIH1dXG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuXG5mdW5jdGlvbiBkaWFsb2coc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ09QRU5fRElBTE9HJykge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2lzVmlzaWJsZTogdHJ1ZX0sIGFjdGlvbi5kYXRhKVxuICB9XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQ0xPU0VfRElBTE9HJykge1xuICAgIHJldHVybiB7XG4gICAgICBpc1Zpc2libGU6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmZ1bmN0aW9uIGJhc2ljTW9kYWwoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ09QRU5fQkFTSUNfTU9EQUwnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7aXNWaXNpYmxlOiB0cnVlfSwgYWN0aW9uLmRhdGEpXG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDTE9TRV9CQVNJQ19NT0RBTCcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNWaXNpYmxlOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZVxufVxuXG5jb25zdCBjb21wb25lbnRzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgbm90aWZpY2F0aW9ucyxcbiAgZGlhbG9nLFxuICBiYXNpY01vZGFsXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnRzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9yZWR1Y2Vycy9jb21wb25lbnRzLnRzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG4vLyBDcmVhdGVzIGEgcmVkdWNlciBtYW5hZ2luZyBwYWdpbmF0aW9uLCBnaXZlbiB0aGUgYWN0aW9uIHR5cGVzIHRvIGhhbmRsZSxcbi8vIGFuZCBhIGZ1bmN0aW9uIHRlbGxpbmcgaG93IHRvIGV4dHJhY3QgdGhlIGtleSBmcm9tIGFuIGFjdGlvbi5cbi8vIHRvZG86IHR5cGVzIGxlbmd0aCBzaG91bGQgYmUgM1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnaW5hdGUoeyB0eXBlcywgbWFwQWN0aW9uVG9LZXksIG1lcmdlIH06IHtcbiAgdHlwZXM6IEFycmF5PHN0cmluZz5cbiAgbWFwQWN0aW9uVG9LZXk6IChhY3Rpb246IGFueSkgPT4gc3RyaW5nXG4gIG1lcmdlPzogKGFjdGlvbjogYW55KSA9PiBib29sZWFuXG59KSB7XG4gIGNvbnN0IFsgcmVxdWVzdFR5cGUsIHN1Y2Nlc3NUeXBlLCBmYWlsdXJlVHlwZSBdID0gdHlwZXNcblxuICBmdW5jdGlvbiB1cGRhdGVQYWdpbmF0aW9uKHN0YXRlID0ge1xuICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgIG5leHRQYWdlVXJsOiBudWxsLFxuICAgIHBhZ2VDb3VudDogMCxcbiAgICBpZHM6IFtdXG4gIH0sIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgcmVxdWVzdFR5cGU6XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIGNhc2Ugc3VjY2Vzc1R5cGU6XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgIGlkczogIW1lcmdlIHx8IG1lcmdlKGFjdGlvbilcbiAgICAgICAgICAgID8gXy51bmlvbihzdGF0ZS5pZHMsIGFjdGlvbi5yZXNwb25zZS5yZXN1bHQpXG4gICAgICAgICAgICA6IGFjdGlvbi5yZXNwb25zZS5yZXN1bHQsXG4gICAgICAgICAgLy8g5LiN5L2/55SoIHVuaW9uIOS8muWvvOiHtCBzZXJ2ZXIgcmVuZGVyaW5nIOmXrumimO+8n1xuICAgICAgICAgIC8vIGlkczogYWN0aW9uLnJlc3BvbnNlLnJlc3VsdCxcbiAgICAgICAgICBuZXh0UGFnZVVybDogYWN0aW9uLnJlc3BvbnNlLm5leHRQYWdlVXJsLFxuICAgICAgICAgIG5leHRQYWdlOiBhY3Rpb24ucmVzcG9uc2UubmV4dFBhZ2UsXG4gICAgICAgICAgcGFnZUNvdW50OiBzdGF0ZS5wYWdlQ291bnQgKyAxXG4gICAgICAgIH0pXG4gICAgICBjYXNlIGZhaWx1cmVUeXBlOlxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVBhZ2luYXRpb25CeUtleShzdGF0ZSA9IHt9LCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIHJlcXVlc3RUeXBlOlxuICAgICAgY2FzZSBzdWNjZXNzVHlwZTpcbiAgICAgIGNhc2UgZmFpbHVyZVR5cGU6XG4gICAgICAgIGNvbnN0IGtleTogc3RyaW5nID0gbWFwQWN0aW9uVG9LZXkoYWN0aW9uKVxuXG4gICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQga2V5IHRvIGJlIGEgc3RyaW5nLicpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBba2V5XTogdXBkYXRlUGFnaW5hdGlvbihzdGF0ZVtrZXldLCBhY3Rpb24pXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9yZWR1Y2Vycy9wYWdpbmF0ZS50c1xuICoqLyIsImltcG9ydCBjYWxsQXBpIGZyb20gJy4uLy4uL3V0aWxzL2NhbGxBcGknXG5pbXBvcnQgQXBpUm9vdHMgZnJvbSAnLi4vLi4vY29uZmlnJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XG4gIGNvbnN0IENBTExfQVBJID0gYWN0aW9uLkNBTExfQVBJXG4gIGlmICh0eXBlb2YgQ0FMTF9BUEkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKVxuICB9XG5cbiAgbGV0IHsgZW5kcG9pbnQsIGFwaVVybCwgZXh0ZW5kZWRPcHRpb25zIH0gPSBDQUxMX0FQSVxuICBjb25zdCB7IHR5cGVzLCBzY2hlbWEgfSA9IENBTExfQVBJXG4gIGNvbnN0IFtyZXF1ZXN0VHlwZSwgc3VjY2Vzc1R5cGUsIGZhaWx1cmVUeXBlXSA9IHR5cGVzXG5cbiAgZnVuY3Rpb24gYWN0aW9uV2l0aChkYXRhKSB7XG4gICAgY29uc3QgZmluYWxBY3Rpb24gPSBPYmplY3QuYXNzaWduKHt9LCBhY3Rpb24sIGRhdGEpXG4gICAgZGVsZXRlIGZpbmFsQWN0aW9uLkNBTExfQVBJXG4gICAgcmV0dXJuIGZpbmFsQWN0aW9uXG4gIH1cblxuICBuZXh0KGFjdGlvbldpdGgoeyB0eXBlOiByZXF1ZXN0VHlwZSB9KSlcblxuICBpZiAodHlwZW9mIGVuZHBvaW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZW5kcG9pbnQgPSBlbmRwb2ludChzdG9yZS5nZXRTdGF0ZSgpKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBhcGlVcmwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgYXBpVXJsID0gQXBpUm9vdHMuTE9DQUxcbiAgfVxuXG4gIGNvbnN0IGZ1bGxVcmwgPSBhcGlVcmwgKyBlbmRwb2ludFxuICBsZXQgb3B0aW9ucyA9IHsgc2NoZW1hIH1cblxuICBpZiAodHlwZW9mIGV4dGVuZGVkT3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgZXh0ZW5kZWRPcHRpb25zKVxuICB9XG5cbiAgcmV0dXJuIGNhbGxBcGkoZnVsbFVybCwgb3B0aW9ucykudGhlbihcbiAgICByZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4gbmV4dChkaXNwYXRjaCA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGFjdGlvbldpdGgoe1xuICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgIHR5cGU6IHN1Y2Nlc3NUeXBlXG4gICAgICAgIH0pKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG9rOiB0cnVlLFxuICAgICAgICAgIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBlcnJvciA9PiBuZXh0KGRpc3BhdGNoID0+IHtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbldpdGgoe1xuICAgICAgICB0eXBlOiBmYWlsdXJlVHlwZSxcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgJ+WPkeeUn+acquefpSBBUEkg6ZSZ6K+v77yBKENvZGUgMTAwMCknXG4gICAgICB9KSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9rOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICApXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9taWRkbGV3YXJlL2FwaS50c1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IHN0b3JlID0+IG5leHQgPT4gYWN0aW9uID0+IHtcblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdET1VCQU5fQk9PS19TRUFSQ0hfU1VDQ0VTUycpIHtcbiAgICBhY3Rpb24ucmVzcG9uc2UucmVzdWx0ID0gYWN0aW9uLnJlc3BvbnNlLnJlc3VsdC5ib29rc1xuICB9XG5cbiAgbmV4dChhY3Rpb24pXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9taWRkbGV3YXJlL21vZGlmeVJlc3BvbnNlLnRzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XG4gIGlmICh0eXBlb2YgYWN0aW9uLlNFUlZFUl9TVE9SRSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbmV4dChhY3Rpb24pXG4gIH1cblxuICBjb25zdCBhY3Rpb25Cb2R5ID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgcmVzb2x2ZShhY3Rpb24uU0VSVkVSX1NUT1JFLmJvZHkpXG4gIH0pXG5cbiAgcmV0dXJuIGFjdGlvbkJvZHkudGhlbihib2R5ID0+IHtcbiAgICByZXR1cm4gbmV4dChkaXNwYXRjaCA9PiB7XG4gICAgICBkaXNwYXRjaChib2R5KVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb2s6IHRydWUsXG4gICAgICAgIHJlc3BvbnNlOiBhY3Rpb24uYm9keS5yZXNwb25zZVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9taWRkbGV3YXJlL2hhbmRsZVNlcnZlclN0b3JlLnRzXG4gKiovIiwiZnVuY3Rpb24gaGFuZGxlSW5pdGlhbFN0YXRlKCkge1xuICBsZXQgaW5pdGlhbFN0YXRlID0ge31cblxuICBpZiAodHlwZW9mICg8YW55PndpbmRvdykuX19JTklUSUFMX1NUQVRFX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaW5pdGlhbFN0YXRlID0gKDxhbnk+d2luZG93KS5fX0lOSVRJQUxfU1RBVEVfX1xuICB9XG5cbiAgcmV0dXJuIGluaXRpYWxTdGF0ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVJbml0aWFsU3RhdGVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3V0aWxzL2hhbmRsZUluaXRpYWxTdGF0ZS50c1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IHN0b3JlID0+IG5leHQgPT4gYWN0aW9uID0+IHtcbiAgY29uc29sZS5pbmZvKGFjdGlvbi50eXBlKVxuICBuZXh0KGFjdGlvbilcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL21pZGRsZXdhcmUvbG9nQWN0aW9uVHlwZXMudHNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9XG5cbnZhciByZXBlYXQgPSBmdW5jdGlvbiByZXBlYXQoc3RyLCB0aW1lcykge1xuICByZXR1cm4gbmV3IEFycmF5KHRpbWVzICsgMSkuam9pbihzdHIpO1xufTtcbnZhciBwYWQgPSBmdW5jdGlvbiBwYWQobnVtLCBtYXhMZW5ndGgpIHtcbiAgcmV0dXJuIHJlcGVhdChcIjBcIiwgbWF4TGVuZ3RoIC0gbnVtLnRvU3RyaW5nKCkubGVuZ3RoKSArIG51bTtcbn07XG52YXIgZm9ybWF0VGltZSA9IGZ1bmN0aW9uIGZvcm1hdFRpbWUodGltZSkge1xuICByZXR1cm4gXCJAIFwiICsgcGFkKHRpbWUuZ2V0SG91cnMoKSwgMikgKyBcIjpcIiArIHBhZCh0aW1lLmdldE1pbnV0ZXMoKSwgMikgKyBcIjpcIiArIHBhZCh0aW1lLmdldFNlY29uZHMoKSwgMikgKyBcIi5cIiArIHBhZCh0aW1lLmdldE1pbGxpc2Vjb25kcygpLCAzKTtcbn07XG5cbi8vIFVzZSB0aGUgbmV3IHBlcmZvcm1hbmNlIGFwaSB0byBnZXQgYmV0dGVyIHByZWNpc2lvbiBpZiBhdmFpbGFibGVcbnZhciB0aW1lciA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgcGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIgPyBwZXJmb3JtYW5jZSA6IERhdGU7XG5cbi8qKlxuICogcGFyc2UgdGhlIGxldmVsIG9wdGlvbiBvZiBjcmVhdGVMb2dnZXJcbiAqXG4gKiBAcHJvcGVydHkge3N0cmluZyB8IGZ1bmN0aW9uIHwgb2JqZWN0fSBsZXZlbCAtIGNvbnNvbGVbbGV2ZWxdXG4gKiBAcHJvcGVydHkge29iamVjdH0gYWN0aW9uXG4gKiBAcHJvcGVydHkge2FycmF5fSBwYXlsb2FkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZVxuICovXG5cbmZ1bmN0aW9uIGdldExvZ0xldmVsKGxldmVsLCBhY3Rpb24sIHBheWxvYWQsIHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlb2YgbGV2ZWwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihsZXZlbCkpIHtcbiAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICByZXR1cm4gdHlwZW9mIGxldmVsW3R5cGVdID09PSBcImZ1bmN0aW9uXCIgPyBsZXZlbFt0eXBlXS5hcHBseShsZXZlbCwgX3RvQ29uc3VtYWJsZUFycmF5KHBheWxvYWQpKSA6IGxldmVsW3R5cGVdO1xuICAgIGNhc2UgXCJmdW5jdGlvblwiOlxuICAgICAgcmV0dXJuIGxldmVsKGFjdGlvbik7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBsZXZlbDtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgbG9nZ2VyIHdpdGggZm9sbG93ZWQgb3B0aW9uc1xuICpcbiAqIEBuYW1lc3BhY2VcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyBmb3IgbG9nZ2VyXG4gKiBAcHJvcGVydHkge3N0cmluZyB8IGZ1bmN0aW9uIHwgb2JqZWN0fSBvcHRpb25zLmxldmVsIC0gY29uc29sZVtsZXZlbF1cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3B0aW9ucy5kdXJhdGlvbiAtIHByaW50IGR1cmF0aW9uIG9mIGVhY2ggYWN0aW9uP1xuICogQHByb3BlcnR5IHtib29sZWFufSBvcHRpb25zLnRpbWVzdGFtcCAtIHByaW50IHRpbWVzdGFtcCB3aXRoIGVhY2ggYWN0aW9uP1xuICogQHByb3BlcnR5IHtvYmplY3R9IG9wdGlvbnMuY29sb3JzIC0gY3VzdG9tIGNvbG9yc1xuICogQHByb3BlcnR5IHtvYmplY3R9IG9wdGlvbnMubG9nZ2VyIC0gaW1wbGVtZW50YXRpb24gb2YgdGhlIGBjb25zb2xlYCBBUElcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3B0aW9ucy5sb2dFcnJvcnMgLSBzaG91bGQgZXJyb3JzIGluIGFjdGlvbiBleGVjdXRpb24gYmUgY2F1Z2h0LCBsb2dnZWQsIGFuZCByZS10aHJvd24/XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG9wdGlvbnMuY29sbGFwc2VkIC0gaXMgZ3JvdXAgY29sbGFwc2VkP1xuICogQHByb3BlcnR5IHtib29sZWFufSBvcHRpb25zLnByZWRpY2F0ZSAtIGNvbmRpdGlvbiB3aGljaCByZXNvbHZlcyBsb2dnZXIgYmVoYXZpb3JcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG9wdGlvbnMuc3RhdGVUcmFuc2Zvcm1lciAtIHRyYW5zZm9ybSBzdGF0ZSBiZWZvcmUgcHJpbnRcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG9wdGlvbnMuYWN0aW9uVHJhbnNmb3JtZXIgLSB0cmFuc2Zvcm0gYWN0aW9uIGJlZm9yZSBwcmludFxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gb3B0aW9ucy5lcnJvclRyYW5zZm9ybWVyIC0gdHJhbnNmb3JtIGVycm9yIGJlZm9yZSBwcmludFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUxvZ2dlcigpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcbiAgdmFyIF9vcHRpb25zJGxldmVsID0gb3B0aW9ucy5sZXZlbDtcbiAgdmFyIGxldmVsID0gX29wdGlvbnMkbGV2ZWwgPT09IHVuZGVmaW5lZCA/IFwibG9nXCIgOiBfb3B0aW9ucyRsZXZlbDtcbiAgdmFyIF9vcHRpb25zJGxvZ2dlciA9IG9wdGlvbnMubG9nZ2VyO1xuICB2YXIgbG9nZ2VyID0gX29wdGlvbnMkbG9nZ2VyID09PSB1bmRlZmluZWQgPyBjb25zb2xlIDogX29wdGlvbnMkbG9nZ2VyO1xuICB2YXIgX29wdGlvbnMkbG9nRXJyb3JzID0gb3B0aW9ucy5sb2dFcnJvcnM7XG4gIHZhciBsb2dFcnJvcnMgPSBfb3B0aW9ucyRsb2dFcnJvcnMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfb3B0aW9ucyRsb2dFcnJvcnM7XG4gIHZhciBjb2xsYXBzZWQgPSBvcHRpb25zLmNvbGxhcHNlZDtcbiAgdmFyIHByZWRpY2F0ZSA9IG9wdGlvbnMucHJlZGljYXRlO1xuICB2YXIgX29wdGlvbnMkZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uO1xuICB2YXIgZHVyYXRpb24gPSBfb3B0aW9ucyRkdXJhdGlvbiA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfb3B0aW9ucyRkdXJhdGlvbjtcbiAgdmFyIF9vcHRpb25zJHRpbWVzdGFtcCA9IG9wdGlvbnMudGltZXN0YW1wO1xuICB2YXIgdGltZXN0YW1wID0gX29wdGlvbnMkdGltZXN0YW1wID09PSB1bmRlZmluZWQgPyB0cnVlIDogX29wdGlvbnMkdGltZXN0YW1wO1xuICB2YXIgdHJhbnNmb3JtZXIgPSBvcHRpb25zLnRyYW5zZm9ybWVyO1xuICB2YXIgX29wdGlvbnMkc3RhdGVUcmFuc2ZvID0gb3B0aW9ucy5zdGF0ZVRyYW5zZm9ybWVyO1xuICB2YXIgLy8gZGVwcmVjYXRlZFxuICBzdGF0ZVRyYW5zZm9ybWVyID0gX29wdGlvbnMkc3RhdGVUcmFuc2ZvID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH0gOiBfb3B0aW9ucyRzdGF0ZVRyYW5zZm87XG4gIHZhciBfb3B0aW9ucyRhY3Rpb25UcmFuc2YgPSBvcHRpb25zLmFjdGlvblRyYW5zZm9ybWVyO1xuICB2YXIgYWN0aW9uVHJhbnNmb3JtZXIgPSBfb3B0aW9ucyRhY3Rpb25UcmFuc2YgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChhY3RuKSB7XG4gICAgcmV0dXJuIGFjdG47XG4gIH0gOiBfb3B0aW9ucyRhY3Rpb25UcmFuc2Y7XG4gIHZhciBfb3B0aW9ucyRlcnJvclRyYW5zZm8gPSBvcHRpb25zLmVycm9yVHJhbnNmb3JtZXI7XG4gIHZhciBlcnJvclRyYW5zZm9ybWVyID0gX29wdGlvbnMkZXJyb3JUcmFuc2ZvID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH0gOiBfb3B0aW9ucyRlcnJvclRyYW5zZm87XG4gIHZhciBfb3B0aW9ucyRjb2xvcnMgPSBvcHRpb25zLmNvbG9ycztcbiAgdmFyIGNvbG9ycyA9IF9vcHRpb25zJGNvbG9ycyA9PT0gdW5kZWZpbmVkID8ge1xuICAgIHRpdGxlOiBmdW5jdGlvbiB0aXRsZSgpIHtcbiAgICAgIHJldHVybiBcIiMwMDAwMDBcIjtcbiAgICB9LFxuICAgIHByZXZTdGF0ZTogZnVuY3Rpb24gcHJldlN0YXRlKCkge1xuICAgICAgcmV0dXJuIFwiIzlFOUU5RVwiO1xuICAgIH0sXG4gICAgYWN0aW9uOiBmdW5jdGlvbiBhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gXCIjMDNBOUY0XCI7XG4gICAgfSxcbiAgICBuZXh0U3RhdGU6IGZ1bmN0aW9uIG5leHRTdGF0ZSgpIHtcbiAgICAgIHJldHVybiBcIiM0Q0FGNTBcIjtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiBlcnJvcigpIHtcbiAgICAgIHJldHVybiBcIiNGMjA0MDRcIjtcbiAgICB9XG4gIH0gOiBfb3B0aW9ucyRjb2xvcnM7XG5cbiAgLy8gZXhpdCBpZiBjb25zb2xlIHVuZGVmaW5lZFxuXG4gIGlmICh0eXBlb2YgbG9nZ2VyID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH07XG4gIH1cblxuICBpZiAodHJhbnNmb3JtZXIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiT3B0aW9uICd0cmFuc2Zvcm1lcicgaXMgZGVwcmVjYXRlZCwgdXNlIHN0YXRlVHJhbnNmb3JtZXIgaW5zdGVhZFwiKTtcbiAgfVxuXG4gIHZhciBsb2dCdWZmZXIgPSBbXTtcbiAgZnVuY3Rpb24gcHJpbnRCdWZmZXIoKSB7XG4gICAgbG9nQnVmZmVyLmZvckVhY2goZnVuY3Rpb24gKGxvZ0VudHJ5LCBrZXkpIHtcbiAgICAgIHZhciBzdGFydGVkID0gbG9nRW50cnkuc3RhcnRlZDtcbiAgICAgIHZhciBzdGFydGVkVGltZSA9IGxvZ0VudHJ5LnN0YXJ0ZWRUaW1lO1xuICAgICAgdmFyIGFjdGlvbiA9IGxvZ0VudHJ5LmFjdGlvbjtcbiAgICAgIHZhciBwcmV2U3RhdGUgPSBsb2dFbnRyeS5wcmV2U3RhdGU7XG4gICAgICB2YXIgZXJyb3IgPSBsb2dFbnRyeS5lcnJvcjtcbiAgICAgIHZhciB0b29rID0gbG9nRW50cnkudG9vaztcbiAgICAgIHZhciBuZXh0U3RhdGUgPSBsb2dFbnRyeS5uZXh0U3RhdGU7XG5cbiAgICAgIHZhciBuZXh0RW50cnkgPSBsb2dCdWZmZXJba2V5ICsgMV07XG4gICAgICBpZiAobmV4dEVudHJ5KSB7XG4gICAgICAgIG5leHRTdGF0ZSA9IG5leHRFbnRyeS5wcmV2U3RhdGU7XG4gICAgICAgIHRvb2sgPSBuZXh0RW50cnkuc3RhcnRlZCAtIHN0YXJ0ZWQ7XG4gICAgICB9XG4gICAgICAvLyBtZXNzYWdlXG4gICAgICB2YXIgZm9ybWF0dGVkQWN0aW9uID0gYWN0aW9uVHJhbnNmb3JtZXIoYWN0aW9uKTtcbiAgICAgIHZhciBpc0NvbGxhcHNlZCA9IHR5cGVvZiBjb2xsYXBzZWQgPT09IFwiZnVuY3Rpb25cIiA/IGNvbGxhcHNlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgICB9LCBhY3Rpb24pIDogY29sbGFwc2VkO1xuXG4gICAgICB2YXIgZm9ybWF0dGVkVGltZSA9IGZvcm1hdFRpbWUoc3RhcnRlZFRpbWUpO1xuICAgICAgdmFyIHRpdGxlQ1NTID0gY29sb3JzLnRpdGxlID8gXCJjb2xvcjogXCIgKyBjb2xvcnMudGl0bGUoZm9ybWF0dGVkQWN0aW9uKSArIFwiO1wiIDogbnVsbDtcbiAgICAgIHZhciB0aXRsZSA9IFwiYWN0aW9uIFwiICsgKHRpbWVzdGFtcCA/IGZvcm1hdHRlZFRpbWUgOiBcIlwiKSArIFwiIFwiICsgZm9ybWF0dGVkQWN0aW9uLnR5cGUgKyBcIiBcIiArIChkdXJhdGlvbiA/IFwiKGluIFwiICsgdG9vay50b0ZpeGVkKDIpICsgXCIgbXMpXCIgOiBcIlwiKTtcblxuICAgICAgLy8gcmVuZGVyXG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICBpZiAoY29sb3JzLnRpdGxlKSBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoXCIlYyBcIiArIHRpdGxlLCB0aXRsZUNTUyk7ZWxzZSBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQodGl0bGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChjb2xvcnMudGl0bGUpIGxvZ2dlci5ncm91cChcIiVjIFwiICsgdGl0bGUsIHRpdGxlQ1NTKTtlbHNlIGxvZ2dlci5ncm91cCh0aXRsZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyh0aXRsZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcmV2U3RhdGVMZXZlbCA9IGdldExvZ0xldmVsKGxldmVsLCBmb3JtYXR0ZWRBY3Rpb24sIFtwcmV2U3RhdGVdLCBcInByZXZTdGF0ZVwiKTtcbiAgICAgIHZhciBhY3Rpb25MZXZlbCA9IGdldExvZ0xldmVsKGxldmVsLCBmb3JtYXR0ZWRBY3Rpb24sIFtmb3JtYXR0ZWRBY3Rpb25dLCBcImFjdGlvblwiKTtcbiAgICAgIHZhciBlcnJvckxldmVsID0gZ2V0TG9nTGV2ZWwobGV2ZWwsIGZvcm1hdHRlZEFjdGlvbiwgW2Vycm9yLCBwcmV2U3RhdGVdLCBcImVycm9yXCIpO1xuICAgICAgdmFyIG5leHRTdGF0ZUxldmVsID0gZ2V0TG9nTGV2ZWwobGV2ZWwsIGZvcm1hdHRlZEFjdGlvbiwgW25leHRTdGF0ZV0sIFwibmV4dFN0YXRlXCIpO1xuXG4gICAgICBpZiAocHJldlN0YXRlTGV2ZWwpIHtcbiAgICAgICAgaWYgKGNvbG9ycy5wcmV2U3RhdGUpIGxvZ2dlcltwcmV2U3RhdGVMZXZlbF0oXCIlYyBwcmV2IHN0YXRlXCIsIFwiY29sb3I6IFwiICsgY29sb3JzLnByZXZTdGF0ZShwcmV2U3RhdGUpICsgXCI7IGZvbnQtd2VpZ2h0OiBib2xkXCIsIHByZXZTdGF0ZSk7ZWxzZSBsb2dnZXJbcHJldlN0YXRlTGV2ZWxdKFwicHJldiBzdGF0ZVwiLCBwcmV2U3RhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aW9uTGV2ZWwpIHtcbiAgICAgICAgaWYgKGNvbG9ycy5hY3Rpb24pIGxvZ2dlclthY3Rpb25MZXZlbF0oXCIlYyBhY3Rpb25cIiwgXCJjb2xvcjogXCIgKyBjb2xvcnMuYWN0aW9uKGZvcm1hdHRlZEFjdGlvbikgKyBcIjsgZm9udC13ZWlnaHQ6IGJvbGRcIiwgZm9ybWF0dGVkQWN0aW9uKTtlbHNlIGxvZ2dlclthY3Rpb25MZXZlbF0oXCJhY3Rpb25cIiwgZm9ybWF0dGVkQWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVycm9yICYmIGVycm9yTGV2ZWwpIHtcbiAgICAgICAgaWYgKGNvbG9ycy5lcnJvcikgbG9nZ2VyW2Vycm9yTGV2ZWxdKFwiJWMgZXJyb3JcIiwgXCJjb2xvcjogXCIgKyBjb2xvcnMuZXJyb3IoZXJyb3IsIHByZXZTdGF0ZSkgKyBcIjsgZm9udC13ZWlnaHQ6IGJvbGRcIiwgZXJyb3IpO2Vsc2UgbG9nZ2VyW2Vycm9yTGV2ZWxdKFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dFN0YXRlTGV2ZWwpIHtcbiAgICAgICAgaWYgKGNvbG9ycy5uZXh0U3RhdGUpIGxvZ2dlcltuZXh0U3RhdGVMZXZlbF0oXCIlYyBuZXh0IHN0YXRlXCIsIFwiY29sb3I6IFwiICsgY29sb3JzLm5leHRTdGF0ZShuZXh0U3RhdGUpICsgXCI7IGZvbnQtd2VpZ2h0OiBib2xkXCIsIG5leHRTdGF0ZSk7ZWxzZSBsb2dnZXJbbmV4dFN0YXRlTGV2ZWxdKFwibmV4dCBzdGF0ZVwiLCBuZXh0U3RhdGUpO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyhcIuKAlOKAlCBsb2cgZW5kIOKAlOKAlFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsb2dCdWZmZXIubGVuZ3RoID0gMDtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBnZXRTdGF0ZSA9IF9yZWYuZ2V0U3RhdGU7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAvLyBleGl0IGVhcmx5IGlmIHByZWRpY2F0ZSBmdW5jdGlvbiByZXR1cm5zIGZhbHNlXG4gICAgICAgIGlmICh0eXBlb2YgcHJlZGljYXRlID09PSBcImZ1bmN0aW9uXCIgJiYgIXByZWRpY2F0ZShnZXRTdGF0ZSwgYWN0aW9uKSkge1xuICAgICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbG9nRW50cnkgPSB7fTtcbiAgICAgICAgbG9nQnVmZmVyLnB1c2gobG9nRW50cnkpO1xuXG4gICAgICAgIGxvZ0VudHJ5LnN0YXJ0ZWQgPSB0aW1lci5ub3coKTtcbiAgICAgICAgbG9nRW50cnkuc3RhcnRlZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsb2dFbnRyeS5wcmV2U3RhdGUgPSBzdGF0ZVRyYW5zZm9ybWVyKGdldFN0YXRlKCkpO1xuICAgICAgICBsb2dFbnRyeS5hY3Rpb24gPSBhY3Rpb247XG5cbiAgICAgICAgdmFyIHJldHVybmVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChsb2dFcnJvcnMpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuZWRWYWx1ZSA9IG5leHQoYWN0aW9uKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBsb2dFbnRyeS5lcnJvciA9IGVycm9yVHJhbnNmb3JtZXIoZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybmVkVmFsdWUgPSBuZXh0KGFjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBsb2dFbnRyeS50b29rID0gdGltZXIubm93KCkgLSBsb2dFbnRyeS5zdGFydGVkO1xuICAgICAgICBsb2dFbnRyeS5uZXh0U3RhdGUgPSBzdGF0ZVRyYW5zZm9ybWVyKGdldFN0YXRlKCkpO1xuXG4gICAgICAgIHByaW50QnVmZmVyKCk7XG5cbiAgICAgICAgaWYgKGxvZ0VudHJ5LmVycm9yKSB0aHJvdyBsb2dFbnRyeS5lcnJvcjtcbiAgICAgICAgcmV0dXJuIHJldHVybmVkVmFsdWU7XG4gICAgICB9O1xuICAgIH07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlTG9nZ2VyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWxvZ2dlci9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxOTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=