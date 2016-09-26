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
	
	var _reactRouterRedux = __webpack_require__(246);
	
	var _configureStore = __webpack_require__(247);
	
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

	module.exports = (__webpack_require__(2))(34);

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

	module.exports = (__webpack_require__(2))(604);

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
	
	var _AppMaster = __webpack_require__(100);
	
	var _AppMaster2 = _interopRequireDefault(_AppMaster);
	
	var _AppCommon = __webpack_require__(101);
	
	var _AppCommon2 = _interopRequireDefault(_AppCommon);
	
	var _ConsoleMaster = __webpack_require__(125);
	
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
	exports.default = _react2.default.createElement(_reactRouter.Route, { component: _Root2.default }, _react2.default.createElement(_reactRouter.Route, { component: _AppMaster2.default }, _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(137))), _react2.default.createElement(_reactRouter.Route, { component: _AppCommon2.default }, _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(158))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(186))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(189))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(194))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(201))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(204))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(206))), _react2.default.createElement(_reactRouter.Route, { path: "user", component: "div" }, _react2.default.createElement(_reactRouter.IndexRedirect, { to: "/user/profile" }), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(208))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(214))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(219))))), _react2.default.createElement(_reactRouter.Route, { path: "console", component: _ConsoleMaster2.default }, _react2.default.createElement(_reactRouter.IndexRedirect, { to: "/console/books" }), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(222))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(235))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(237))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(241))), _react2.default.createElement(_reactRouter.Route, __assign({}, __webpack_require__(244))))));

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
	
	var _Alert = __webpack_require__(76);
	
	var _lodash = __webpack_require__(18);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Modal = __webpack_require__(86);
	
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(453);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reset = undefined;
	
	var _components = __webpack_require__(9);
	
	Object.keys(_components).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _components[key];
	    }
	  });
	});
	
	var _dataFetching = __webpack_require__(10);
	
	Object.keys(_dataFetching).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _dataFetching[key];
	    }
	  });
	});
	
	var _deprecatedActions = __webpack_require__(25);
	
	Object.keys(_deprecatedActions).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _deprecatedActions[key];
	    }
	  });
	});
	
	var _reduxForm = __webpack_require__(26);
	
	exports.reset = _reduxForm.reset;

/***/ },
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _book = __webpack_require__(11);
	
	Object.keys(_book).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _book[key];
	    }
	  });
	});
	
	var _user = __webpack_require__(22);
	
	Object.keys(_user).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _user[key];
	    }
	  });
	});
	
	var _users = __webpack_require__(23);
	
	Object.keys(_users).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _users[key];
	    }
	  });
	});
	
	var _author = __webpack_require__(24);
	
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
/* 11 */
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
	
	var _schemas = __webpack_require__(12);
	
	var _config = __webpack_require__(15);
	
	var _utils = __webpack_require__(16);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _lodash = __webpack_require__(18);
	
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
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(14))(684);

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = _utils_dll;

/***/ },
/* 15 */
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _parseFormData = __webpack_require__(17);
	
	var _parseFormData2 = _interopRequireDefault(_parseFormData);
	
	var _lockScroll = __webpack_require__(19);
	
	var _lockScroll2 = _interopRequireDefault(_lockScroll);
	
	var _unlockScroll = __webpack_require__(20);
	
	var _unlockScroll2 = _interopRequireDefault(_unlockScroll);
	
	var _getScreenInfo = __webpack_require__(21);
	
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.default = objectToUrlencoded;
	
	var _lodash = __webpack_require__(18);
	
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(14))(682);

/***/ },
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.USERS_FAILURE = exports.USERS_SUCCESS = exports.USERS_REQUEST = undefined;
	exports.fetchUsers = fetchUsers;
	
	var _schemas = __webpack_require__(12);
	
	var _utils = __webpack_require__(16);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _lodash = __webpack_require__(18);
	
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AUTHOR_FAILURE = exports.AUTHOR_SUCCESS = exports.AUTHOR_REQUEST = undefined;
	exports.fetchAuthors = fetchAuthors;
	
	var _schemas = __webpack_require__(12);
	
	var _utils = __webpack_require__(16);
	
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
/* 25 */
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.untouchWithKey = exports.untouch = exports.touchWithKey = exports.touch = exports.swapArrayValues = exports.stopSubmit = exports.stopAsyncValidation = exports.startSubmit = exports.startAsyncValidation = exports.reset = exports.propTypes = exports.initializeWithKey = exports.initialize = exports.getValues = exports.removeArrayValue = exports.reduxForm = exports.reducer = exports.focus = exports.destroy = exports.changeWithKey = exports.change = exports.blur = exports.autofillWithKey = exports.autofill = exports.addArrayValue = exports.actionTypes = undefined;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(7);
	
	var _createAll2 = __webpack_require__(27);
	
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = createAll;
	
	var _reducer = __webpack_require__(28);
	
	var _reducer2 = _interopRequireDefault(_reducer);
	
	var _createReduxForm = __webpack_require__(39);
	
	var _createReduxForm2 = _interopRequireDefault(_createReduxForm);
	
	var _mapValues = __webpack_require__(30);
	
	var _mapValues2 = _interopRequireDefault(_mapValues);
	
	var _bindActionData = __webpack_require__(49);
	
	var _bindActionData2 = _interopRequireDefault(_bindActionData);
	
	var _actions = __webpack_require__(48);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _actionTypes = __webpack_require__(29);
	
	var actionTypes = _interopRequireWildcard(_actionTypes);
	
	var _createPropTypes = __webpack_require__(75);
	
	var _createPropTypes2 = _interopRequireDefault(_createPropTypes);
	
	var _getValuesFromState = __webpack_require__(33);
	
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.initialState = exports.globalErrorKey = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _initialState, _behaviors;
	
	var _actionTypes = __webpack_require__(29);
	
	var _mapValues = __webpack_require__(30);
	
	var _mapValues2 = _interopRequireDefault(_mapValues);
	
	var _read = __webpack_require__(31);
	
	var _read2 = _interopRequireDefault(_read);
	
	var _write = __webpack_require__(32);
	
	var _write2 = _interopRequireDefault(_write);
	
	var _getValuesFromState = __webpack_require__(33);
	
	var _getValuesFromState2 = _interopRequireDefault(_getValuesFromState);
	
	var _initializeState = __webpack_require__(35);
	
	var _initializeState2 = _interopRequireDefault(_initializeState);
	
	var _resetState = __webpack_require__(36);
	
	var _resetState2 = _interopRequireDefault(_resetState);
	
	var _setErrors = __webpack_require__(37);
	
	var _setErrors2 = _interopRequireDefault(_setErrors);
	
	var _fieldValue = __webpack_require__(34);
	
	var _normalizeFields = __webpack_require__(38);
	
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _fieldValue = __webpack_require__(34);
	
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
/* 34 */
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _fieldValue = __webpack_require__(34);
	
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _fieldValue = __webpack_require__(34);
	
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _fieldValue = __webpack_require__(34);
	
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = normalizeFields;
	
	var _fieldValue = __webpack_require__(34);
	
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createReduxFormConnector = __webpack_require__(40);
	
	var _createReduxFormConnector2 = _interopRequireDefault(_createReduxFormConnector);
	
	var _hoistNonReactStatics = __webpack_require__(74);
	
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _noGetters = __webpack_require__(41);
	
	var _noGetters2 = _interopRequireDefault(_noGetters);
	
	var _getDisplayName = __webpack_require__(46);
	
	var _getDisplayName2 = _interopRequireDefault(_getDisplayName);
	
	var _createHigherOrderComponent = __webpack_require__(47);
	
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(42);


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _deepEqual = __webpack_require__(43);
	
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(44);
	var isArguments = __webpack_require__(45);
	
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
/* 44 */
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
/* 45 */
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
/* 46 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = getDisplayName;
	function getDisplayName(Comp) {
	  return Comp.displayName || Comp.name || 'Component';
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _actions = __webpack_require__(48);
	
	var importedActions = _interopRequireWildcard(_actions);
	
	var _getDisplayName = __webpack_require__(46);
	
	var _getDisplayName2 = _interopRequireDefault(_getDisplayName);
	
	var _reducer = __webpack_require__(28);
	
	var _deepEqual = __webpack_require__(43);
	
	var _deepEqual2 = _interopRequireDefault(_deepEqual);
	
	var _bindActionData = __webpack_require__(49);
	
	var _bindActionData2 = _interopRequireDefault(_bindActionData);
	
	var _getValues = __webpack_require__(50);
	
	var _getValues2 = _interopRequireDefault(_getValues);
	
	var _isValid = __webpack_require__(51);
	
	var _isValid2 = _interopRequireDefault(_isValid);
	
	var _readFields = __webpack_require__(52);
	
	var _readFields2 = _interopRequireDefault(_readFields);
	
	var _handleSubmit2 = __webpack_require__(67);
	
	var _handleSubmit3 = _interopRequireDefault(_handleSubmit2);
	
	var _asyncValidation = __webpack_require__(68);
	
	var _asyncValidation2 = _interopRequireDefault(_asyncValidation);
	
	var _silenceEvents = __webpack_require__(69);
	
	var _silenceEvents2 = _interopRequireDefault(_silenceEvents);
	
	var _silenceEvent = __webpack_require__(70);
	
	var _silenceEvent2 = _interopRequireDefault(_silenceEvent);
	
	var _wrapMapDispatchToProps = __webpack_require__(71);
	
	var _wrapMapDispatchToProps2 = _interopRequireDefault(_wrapMapDispatchToProps);
	
	var _wrapMapStateToProps = __webpack_require__(73);
	
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.untouch = exports.touch = exports.swapArrayValues = exports.submitFailed = exports.stopSubmit = exports.stopAsyncValidation = exports.startSubmit = exports.startAsyncValidation = exports.reset = exports.removeArrayValue = exports.initialize = exports.focus = exports.destroy = exports.change = exports.blur = exports.autofill = exports.addArrayValue = undefined;
	
	var _actionTypes = __webpack_require__(29);
	
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = bindActionData;
	
	var _mapValues = __webpack_require__(30);
	
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
/* 50 */
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
/* 51 */
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _readField = __webpack_require__(53);
	
	var _readField2 = _interopRequireDefault(_readField);
	
	var _write = __webpack_require__(32);
	
	var _write2 = _interopRequireDefault(_write);
	
	var _getValues = __webpack_require__(50);
	
	var _getValues2 = _interopRequireDefault(_getValues);
	
	var _removeField = __webpack_require__(66);
	
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createOnBlur = __webpack_require__(54);
	
	var _createOnBlur2 = _interopRequireDefault(_createOnBlur);
	
	var _createOnChange = __webpack_require__(57);
	
	var _createOnChange2 = _interopRequireDefault(_createOnChange);
	
	var _createOnDragStart = __webpack_require__(58);
	
	var _createOnDragStart2 = _interopRequireDefault(_createOnDragStart);
	
	var _createOnDrop = __webpack_require__(59);
	
	var _createOnDrop2 = _interopRequireDefault(_createOnDrop);
	
	var _createOnFocus = __webpack_require__(60);
	
	var _createOnFocus2 = _interopRequireDefault(_createOnFocus);
	
	var _silencePromise = __webpack_require__(61);
	
	var _silencePromise2 = _interopRequireDefault(_silencePromise);
	
	var _read = __webpack_require__(31);
	
	var _read2 = _interopRequireDefault(_read);
	
	var _updateField = __webpack_require__(63);
	
	var _updateField2 = _interopRequireDefault(_updateField);
	
	var _isChecked = __webpack_require__(65);
	
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _getValue = __webpack_require__(55);
	
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _isEvent = __webpack_require__(56);
	
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
/* 56 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var isEvent = function isEvent(candidate) {
	  return !!(candidate && candidate.stopPropagation && candidate.preventDefault);
	};
	
	exports.default = isEvent;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _getValue = __webpack_require__(55);
	
	var _getValue2 = _interopRequireDefault(_getValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createOnChange = function createOnChange(name, change, isReactNative) {
	  return function (event) {
	    return change(name, (0, _getValue2.default)(event, isReactNative));
	  };
	};
	exports.default = createOnChange;

/***/ },
/* 58 */
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createOnDragStart = __webpack_require__(58);
	
	var createOnDrop = function createOnDrop(name, change) {
	  return function (event) {
	    change(name, event.dataTransfer.getData(_createOnDragStart.dataKey));
	  };
	};
	exports.default = createOnDrop;

/***/ },
/* 60 */
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _isPromise = __webpack_require__(62);
	
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
/* 62 */
/***/ function(module, exports) {

	module.exports = isPromise;
	
	function isPromise(obj) {
	  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
	}


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _isPristine = __webpack_require__(64);
	
	var _isPristine2 = _interopRequireDefault(_isPristine);
	
	var _isValid = __webpack_require__(51);
	
	var _isValid2 = _interopRequireDefault(_isValid);
	
	var _isChecked = __webpack_require__(65);
	
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
/* 64 */
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
/* 65 */
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
/* 66 */
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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _isPromise = __webpack_require__(62);
	
	var _isPromise2 = _interopRequireDefault(_isPromise);
	
	var _isValid = __webpack_require__(51);
	
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _isPromise = __webpack_require__(62);
	
	var _isPromise2 = _interopRequireDefault(_isPromise);
	
	var _isValid = __webpack_require__(51);
	
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _silenceEvent = __webpack_require__(70);
	
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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _isEvent = __webpack_require__(56);
	
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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _redux = __webpack_require__(72);
	
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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(459);

/***/ },
/* 73 */
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(665);

/***/ },
/* 75 */
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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Alert = exports.Alerts = undefined;
	
	var _Alert = __webpack_require__(77);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	var _Alerts = __webpack_require__(85);
	
	var _Alerts2 = _interopRequireDefault(_Alerts);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Alerts = _Alerts2.default;
	exports.Alert = _Alert2.default;
	exports.default = _Alert2.default;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Icon = __webpack_require__(78);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _reactCssModules = __webpack_require__(82);
	
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
	
	var styles = __webpack_require__(84);
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(79);
	
	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Icon2.default;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(80);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _svgIcons = __webpack_require__(81);
	
	var _svgIcons2 = _interopRequireDefault(_svgIcons);
	
	var _reactCssModules = __webpack_require__(82);
	
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
	
	var styles = __webpack_require__(83);
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
/* 80 */
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
/* 81 */
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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(662);

/***/ },
/* 83 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"svg-shape":"svg-shape_30-k0","icon":"icon_VsVR4"};

/***/ },
/* 84 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"alerts":"alerts_3anah","alert":"alert_3WAye","alert--success":"alert--success_NTR5L","alert--error":"alert--error_1C2fM","alert--warning":"alert--warning_3gSWv","content":"content_1U4Ts","alert-close":"alert-close_1UULS"};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Alert = __webpack_require__(77);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = __webpack_require__(84);
	function Alerts(props) {
	    return _react2.default.createElement("div", { className: styles.alerts }, props.messages.map(function (msg, index) {
	        return _react2.default.createElement(_Alert2.default, { key: index, type: msg.type, message: msg.content, visible: msg.visible, onRequestClose: function onRequestClose() {
	                props.onRequestClose(msg.id);
	            } });
	    }));
	}
	exports.default = Alerts;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ConfirmModal = exports.ModalPlus = undefined;
	
	var _Modal = __webpack_require__(87);
	
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
	
	var _ModalPlus = __webpack_require__(93);
	
	var _ModalPlus2 = _interopRequireDefault(_ModalPlus);
	
	var _ConfirmModal = __webpack_require__(94);
	
	var _ConfirmModal2 = _interopRequireDefault(_ConfirmModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Modal2.default;
	exports.ModalPlus = _ModalPlus2.default;
	exports.ConfirmModal = _ConfirmModal2.default;

/***/ },
/* 87 */
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
	
	var _utils = __webpack_require__(16);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _Fade = __webpack_require__(88);
	
	var _Fade2 = _interopRequireDefault(_Fade);
	
	var _reactCssModules = __webpack_require__(82);
	
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
	
	var styles = __webpack_require__(92);
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
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Fade = __webpack_require__(89);
	
	var _Fade2 = _interopRequireDefault(_Fade);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Fade2.default;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(90);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = __webpack_require__(91);
	
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
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(597);

/***/ },
/* 91 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"enter":"enter_1c4SW","enterActive":"enterActive_nCJQw","leave":"leave_1oTp_","leaveActive":"leaveActive_3hTgH"};

/***/ },
/* 92 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"modal":"modal_20AZ1","icon-close":"icon-close_5uuLa","modal-backdrop":"modal-backdrop_3rq0k","modal-body":"modal-body_2gT23","modal-header":"modal-header_2dz68","modal-title":"modal-title_8pOfE","modal-footer":"modal-footer_fyZtS","btn-red":"btn-red_3zomi","modal-content":"modal-content_3ZIHb","confirm-modal":"confirm-modal_k5GF0","modal-plus":"modal-plus_1_TST"};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(87);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _reactCssModules = __webpack_require__(82);
	
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
	
	var styles = __webpack_require__(92);
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
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(86);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _ModalFooter = __webpack_require__(95);
	
	var _ModalFooter2 = _interopRequireDefault(_ModalFooter);
	
	var _reactCssModules = __webpack_require__(82);
	
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
	
	var styles = __webpack_require__(92);
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
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(96);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = __webpack_require__(99);
	function ModalFooter(props) {
	    var onConfirm = props.onConfirm;
	    var onCancel = props.onCancel;
	
	    return _react2.default.createElement("div", { className: styles['modal-footer'] }, _react2.default.createElement(_Button2.default, { color: "blue", onClick: onConfirm }, "确认"), onCancel && _react2.default.createElement(_Button2.default, { color: "white", onClick: onCancel }, "取消"));
	}
	exports.default = ModalFooter;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Button = __webpack_require__(97);
	
	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Button2.default;

/***/ },
/* 97 */
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
	
	var _reactCssModules = __webpack_require__(82);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _classnames2 = __webpack_require__(80);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _lodash = __webpack_require__(18);
	
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
	
	var styles = __webpack_require__(98);
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
/* 98 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"btn":"btn_2aW__","focus":"focus_2Y5ov","active":"active_jFdNZ","disabled":"disabled_2NFJX","btn--hover":"btn--hover_344mi","btn--blue":"btn--blue_1nEIM","btn--orange":"btn--orange_v4x5_","btn--red":"btn--red_2gsfS","btn--white":"btn--white_3rWF3"};

/***/ },
/* 99 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"modal-footer":"modal-footer_FaHiU"};

/***/ },
/* 100 */
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
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(7);
	
	var _Branding = __webpack_require__(102);
	
	var _Branding2 = _interopRequireDefault(_Branding);
	
	var _Colophon = __webpack_require__(116);
	
	var _Colophon2 = _interopRequireDefault(_Colophon);
	
	var _actions = __webpack_require__(8);
	
	var _apis = __webpack_require__(119);
	
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
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Branding = __webpack_require__(103);
	
	var _Branding2 = _interopRequireDefault(_Branding);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Branding2.default;

/***/ },
/* 103 */
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
	
	var _layout = __webpack_require__(104);
	
	var _Dropdown = __webpack_require__(106);
	
	var _Logo = __webpack_require__(112);
	
	var _Logo2 = _interopRequireDefault(_Logo);
	
	var _reactCssModules = __webpack_require__(82);
	
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
	
	var styles = __webpack_require__(115);
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
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Container = undefined;
	
	var _Container = __webpack_require__(105);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Container = _Container2.default;

/***/ },
/* 105 */
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
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DropdownItemSep = exports.Dropdown = exports.DropdownItem = undefined;
	
	var _Dropdown = __webpack_require__(107);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _DropdownItem = __webpack_require__(110);
	
	var _DropdownItem2 = _interopRequireDefault(_DropdownItem);
	
	var _DropdownItemSep = __webpack_require__(111);
	
	var _DropdownItemSep2 = _interopRequireDefault(_DropdownItemSep);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.DropdownItem = _DropdownItem2.default;
	exports.Dropdown = _Dropdown2.default;
	exports.DropdownItemSep = _DropdownItemSep2.default;
	exports.default = _Dropdown2.default;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(82);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _isDescendant = __webpack_require__(108);
	
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
	var styles = __webpack_require__(109);
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
/* 108 */
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
/* 109 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"dropdown-item":"dropdown-item_2C1dz light-link_2QDeA","light-link":"light-link_2QDeA","dropdown":"dropdown_SZfyp","dropdown-toggle":"dropdown-toggle_34Qfd","dropdown-menu":"dropdown-menu_1HgbS","dropdown-caret":"dropdown-caret_FcBWI","sep":"sep_10Y0o","dropdown-menu--dark":"dropdown-menu--dark_6eVPX dropdown-menu_1HgbS"};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = __webpack_require__(109);
	function DropdownItem(props) {
	    return _react2.default.createElement("li", null, typeof props.children === 'string' ? _react2.default.createElement("div", { className: styles['dropdown-item'] }, props.children) : _react2.default.cloneElement(props.children, {
	        className: styles['dropdown-item']
	    }));
	}
	exports.default = DropdownItem;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = __webpack_require__(109);
	function DropdownItemSep(props) {
	    return _react2.default.createElement("li", { className: styles['sep'] });
	}
	exports.default = DropdownItemSep;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Logo = __webpack_require__(113);
	
	var _Logo2 = _interopRequireDefault(_Logo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Logo2.default;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = __webpack_require__(114);
	function Logo(props) {
	    return _react2.default.createElement("h1", { className: styles['logo-wrap'] }, _react2.default.createElement(_reactRouter.Link, { className: styles['logo'], to: props.to }, "readr"));
	}
	exports.default = Logo;

/***/ },
/* 114 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"logo-wrap":"logo-wrap_CP5P9","logo":"logo_3qcbV"};

/***/ },
/* 115 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"nav-link":"nav-link_3X0T8","branding":"branding_8EVAt","dropdown-menu":"dropdown-menu_5Sc50","username":"username_3Mm6z","nav-links":"nav-links_2wTYY","nav":"nav_1oj1z","nav--user":"nav--user_1L7Lb","dropdown-recent-reading":"dropdown-recent-reading_2oyjH","nav-item":"nav-item_f83bh","recent-reading":"recent-reading_1kJKh"};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Colophon = __webpack_require__(117);
	
	var _Colophon2 = _interopRequireDefault(_Colophon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Colophon2.default;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Container = __webpack_require__(105);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	var _reactCssModules = __webpack_require__(82);
	
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
	
	var styles = __webpack_require__(118);
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
/* 118 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"colophon":"colophon_FVdSR"};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _apis = __webpack_require__(120);
	
	var apis = _interopRequireWildcard(_apis);
	
	var _externalApis = __webpack_require__(124);
	
	var externalApis = _interopRequireWildcard(_externalApis);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = Object.assign({}, apis, externalApis);

/***/ },
/* 120 */
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
	
	var _callApi = __webpack_require__(121);
	
	var _callApi2 = _interopRequireDefault(_callApi);
	
	var _config = __webpack_require__(15);
	
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
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.callApi = callApi;
	
	__webpack_require__(122);
	
	var _parseFormData = __webpack_require__(17);
	
	var _parseFormData2 = _interopRequireDefault(_parseFormData);
	
	var _jsonp = __webpack_require__(123);
	
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
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(14))(757);

/***/ },
/* 123 */
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
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetchDoubanBooks = fetchDoubanBooks;
	
	var _jsonp = __webpack_require__(123);
	
	var _jsonp2 = _interopRequireDefault(_jsonp);
	
	var _config = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function fetchDoubanBooks(query) {
	    return (0, _jsonp2.default)(_config.ApiRoots.DOUBAN_BOOKS + '/search?count=5&q=' + query);
	}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ConsoleMaster = __webpack_require__(126);
	
	var _ConsoleMaster2 = _interopRequireDefault(_ConsoleMaster);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ConsoleMaster2.default;

/***/ },
/* 126 */
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
	
	var _Container = __webpack_require__(105);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	var _ConsoleBranding = __webpack_require__(127);
	
	var _ConsoleBranding2 = _interopRequireDefault(_ConsoleBranding);
	
	var _actions = __webpack_require__(8);
	
	var _ConsoleSidebar = __webpack_require__(130);
	
	var _ConsoleSidebar2 = _interopRequireDefault(_ConsoleSidebar);
	
	var _menus = __webpack_require__(133);
	
	var _menus2 = _interopRequireDefault(_menus);
	
	var _DocContainer = __webpack_require__(134);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _reactCssModules = __webpack_require__(82);
	
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
	
	var styles = __webpack_require__(136);
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
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ConsoleBranding = __webpack_require__(128);
	
	var _ConsoleBranding2 = _interopRequireDefault(_ConsoleBranding);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ConsoleBranding2.default;

/***/ },
/* 128 */
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
	
	var _Container = __webpack_require__(105);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	var _Dropdown = __webpack_require__(106);
	
	var _reactCssModules = __webpack_require__(82);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _Logo = __webpack_require__(112);
	
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
	
	var styles = __webpack_require__(129);
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
/* 129 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"branding":"branding_3goRG","sep":"sep_AT6Gl","sub":"sub_Iyhms","right":"right_1ZAQP","sub-name":"sub-name_2T8ah","nav":"nav_10yn4 nav_1oj1z"};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ConsoleSidebar = __webpack_require__(131);
	
	var _ConsoleSidebar2 = _interopRequireDefault(_ConsoleSidebar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ConsoleSidebar2.default;

/***/ },
/* 131 */
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
	
	var _Icon = __webpack_require__(78);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _reactCssModules = __webpack_require__(82);
	
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
	
	var styles = __webpack_require__(132);
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
/* 132 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"sidebar-left":"sidebar-left_2Nfva","nav-side":"nav-side_3L8f6","nav-side-root":"nav-side-root_1_PBg nav-side_3L8f6","nav-side-root--current":"nav-side-root--current_3BV5t nav-side-root_1_PBg nav-side_3L8f6","nav-side-sub":"nav-side-sub_5Q_f5 nav-side_3L8f6","nav-item":"nav-item_2r1zn","icon":"icon_26PwG","root-item":"root-item_VPwuM nav-item_2r1zn","root-item--current":"root-item--current_3LMnD root-item_VPwuM nav-item_2r1zn","sub-item":"sub-item_waA-O nav-item_2r1zn","sub-item--current":"sub-item--current_3CzmM sub-item_waA-O nav-item_2r1zn"};

/***/ },
/* 133 */
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
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSideEffect = __webpack_require__(135);
	
	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);
	
	var _lodash = __webpack_require__(18);
	
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
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(674);

/***/ },
/* 136 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"content":"content_2oBQl"};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'viewer/book/:id',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(1, function (require) {
	            fn(null, __webpack_require__(138).default);
	        });
	    }
	};

/***/ },
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
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: '/',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(2, function (require) {
	            fn(null, __webpack_require__(159).default);
	        });
	    }
	};

/***/ },
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
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'browse',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(3, function (require) {
	            fn(null, __webpack_require__(187).default);
	        });
	    }
	};

/***/ },
/* 187 */,
/* 188 */,
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'book/:id',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(4, function (require) {
	            fn(null, __webpack_require__(190).default);
	        });
	    }
	};

/***/ },
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'collections',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(5, function (require) {
	            fn(null, __webpack_require__(195).default);
	        });
	    }
	};

/***/ },
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'collections/:id',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(6, function (require) {
	            fn(null, __webpack_require__(202).default);
	        });
	    }
	};

/***/ },
/* 202 */,
/* 203 */,
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'signin',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(7, function (require) {
	            fn(null, __webpack_require__(205).default);
	        });
	    }
	};

/***/ },
/* 205 */,
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'signup',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(8, function (require) {
	            fn(null, __webpack_require__(207).default);
	        });
	    }
	};

/***/ },
/* 207 */,
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'shelf',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(9, function (require) {
	            fn(null, __webpack_require__(209).default);
	        });
	    }
	};

/***/ },
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'preference',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(10, function (require) {
	            fn(null, __webpack_require__(215).default);
	        });
	    }
	};

/***/ },
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'profile',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(11, function (require) {
	            fn(null, __webpack_require__(220).default);
	        });
	    }
	};

/***/ },
/* 220 */,
/* 221 */,
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'books',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(12, function (require) {
	            fn(null, __webpack_require__(223).default);
	        });
	    }
	};

/***/ },
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
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'users',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(13, function (require) {
	            fn(null, __webpack_require__(236).default);
	        });
	    }
	};

/***/ },
/* 236 */,
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'books/new',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(14, function (require) {
	            fn(null, __webpack_require__(238).default);
	        });
	    }
	};

/***/ },
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: 'collections/new',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(15, function (require) {
	            fn(null, __webpack_require__(242).default);
	        });
	    }
	};

/***/ },
/* 242 */,
/* 243 */,
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    path: '*',
	    getComponent: function getComponent(nextState, fn) {
	        __webpack_require__.e/* nsure */(16, function (require) {
	            fn(null, __webpack_require__(245).default);
	        });
	    }
	};

/***/ },
/* 245 */,
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(677);

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configureStore;
	
	var _redux = __webpack_require__(72);
	
	var _reduxThunk = __webpack_require__(248);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reducers = __webpack_require__(249);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _api = __webpack_require__(254);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _modifyResponse = __webpack_require__(258);
	
	var _modifyResponse2 = _interopRequireDefault(_modifyResponse);
	
	var _handleServerStore = __webpack_require__(259);
	
	var _handleServerStore2 = _interopRequireDefault(_handleServerStore);
	
	var _handleInitialState = __webpack_require__(260);
	
	var _handleInitialState2 = _interopRequireDefault(_handleInitialState);
	
	var _logActionTypes = __webpack_require__(261);
	
	var _logActionTypes2 = _interopRequireDefault(_logActionTypes);
	
	var _reduxLogger = __webpack_require__(262);
	
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
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(661);

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _reduxForm = __webpack_require__(26);
	
	var _redux = __webpack_require__(72);
	
	var _reactRouterRedux = __webpack_require__(246);
	
	var _components = __webpack_require__(250);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _apiData = __webpack_require__(251);
	
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
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _redux = __webpack_require__(72);
	
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
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.errorMessage = exports.pagination = undefined;
	exports.entities = entities;
	exports.payloads = payloads;
	exports.session = session;
	
	var _errorMessage = __webpack_require__(252);
	
	var _errorMessage2 = _interopRequireDefault(_errorMessage);
	
	var _pagination = __webpack_require__(253);
	
	var _pagination2 = _interopRequireDefault(_pagination);
	
	var _lodash = __webpack_require__(18);
	
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
/* 252 */
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
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = pagination;
	
	var _lodash = __webpack_require__(18);
	
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
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _callApi = __webpack_require__(121);
	
	var _callApi2 = _interopRequireDefault(_callApi);
	
	var _config = __webpack_require__(15);
	
	var _lodash = __webpack_require__(18);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _handleResponse = __webpack_require__(255);
	
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
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _normalizr = __webpack_require__(13);
	
	var _humps = __webpack_require__(256);
	
	var _humps2 = _interopRequireDefault(_humps);
	
	var _parseQueryString = __webpack_require__(257);
	
	var _parseQueryString2 = _interopRequireDefault(_parseQueryString);
	
	var _lodash = __webpack_require__(18);
	
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
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(14))(756);

/***/ },
/* 257 */
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
/* 258 */
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
/* 259 */
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
/* 260 */
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
/* 261 */
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
/* 262 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2ZlNzY3NmE1YjhiYTU3NTY0NDkiLCJ3ZWJwYWNrOi8vL3NyYy9lbnRyeS9hcHAudHN4Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJfcmVhY3Rfa2l0X2RsbFwiIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvcmVhY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2tpdF9kbGwiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvUm9vdC50c3giLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9zdG9yZS9hY3Rpb25zL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9zdG9yZS9hY3Rpb25zL2NvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3N0b3JlL2FjdGlvbnMvZGF0YS1mZXRjaGluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvYWN0aW9ucy9kYXRhLWZldGNoaW5nL2Jvb2sudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3NjaGVtYXMudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9ub3JtYWxpenIvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfdXRpbHNfZGxsIiwid2VicGFjazovLy9leHRlcm5hbCBcIl91dGlsc19kbGxcIiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29uZmlnLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvdXRpbHMvcGFyc2VGb3JtRGF0YS50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9sb2Rhc2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIF91dGlsc19kbGwiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3V0aWxzL2xvY2tTY3JvbGwudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3V0aWxzL3VubG9ja1Njcm9sbC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvdXRpbHMvZ2V0U2NyZWVuSW5mby50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvYWN0aW9ucy9kYXRhLWZldGNoaW5nL3VzZXIudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3N0b3JlL2FjdGlvbnMvZGF0YS1mZXRjaGluZy91c2Vycy50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvYWN0aW9ucy9kYXRhLWZldGNoaW5nL2F1dGhvci50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvYWN0aW9ucy9kZXByZWNhdGVkQWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvY3JlYXRlQWxsLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvbWFwVmFsdWVzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3dyaXRlLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZ2V0VmFsdWVzRnJvbVN0YXRlLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZmllbGRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2luaXRpYWxpemVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3Jlc2V0U3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9zZXRFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9ub3JtYWxpemVGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVSZWR1eEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVSZWR1eEZvcm1Db25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1sYXp5LWNhY2hlL25vR2V0dGVycy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWxhenktY2FjaGUvbGliL25vR2V0dGVycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2RlZXAtZXF1YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kZWVwLWVxdWFsL2xpYi9rZXlzLmpzIiwid2VicGFjazovLy8uL34vZGVlcC1lcXVhbC9saWIvaXNfYXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZ2V0RGlzcGxheU5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9iaW5kQWN0aW9uRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2dldFZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2lzVmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9yZWFkRmllbGRzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvcmVhZEZpZWxkLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL2NyZWF0ZU9uQmx1ci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2V2ZW50cy9nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2V2ZW50cy9pc0V2ZW50LmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL2NyZWF0ZU9uQ2hhbmdlLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL2NyZWF0ZU9uRHJhZ1N0YXJ0LmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL2NyZWF0ZU9uRHJvcC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2V2ZW50cy9jcmVhdGVPbkZvY3VzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvc2lsZW5jZVByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1wcm9taXNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvdXBkYXRlRmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9pc1ByaXN0aW5lLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvaXNDaGVja2VkLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvcmVtb3ZlRmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9oYW5kbGVTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9hc3luY1ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9ldmVudHMvc2lsZW5jZUV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2V2ZW50cy9zaWxlbmNlRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi93cmFwTWFwRGlzcGF0Y2hUb1Byb3BzLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbCIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3dyYXBNYXBTdGF0ZVRvUHJvcHMuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2tpdF9kbGwiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0FsZXJ0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvQWxlcnQvQWxlcnQudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9JY29uL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9JY29uL0ljb24udHN4Iiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvSWNvbi9zdmctaWNvbnMudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1jc3MtbW9kdWxlcy9kaXN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9JY29uL0ljb24uY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0FsZXJ0L19hbGVydC5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9BbGVydC9BbGVydHMudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Nb2RhbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTW9kYWwvTW9kYWwudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fYW5pbWF0aW9ucy9GYWRlL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fYW5pbWF0aW9ucy9GYWRlL0ZhZGUudHN4Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fYW5pbWF0aW9ucy9GYWRlL0ZhZGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL01vZGFsL01vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL01vZGFsL01vZGFsUGx1cy50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL01vZGFsL0NvbmZpcm1Nb2RhbC50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL01vZGFsL01vZGFsRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vQnV0dG9uL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9CdXR0b24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9CdXR0b24vX2J1dHRvbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL01vZGFsL01vZGFsRm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvQXBwTWFzdGVyLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29udGFpbmVycy9BcHBDb21tb24udHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0JyYW5kaW5nL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9CcmFuZGluZy9CcmFuZGluZy50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19sYXlvdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19sYXlvdXQvQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRHJvcGRvd24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0Ryb3Bkb3duL0Ryb3Bkb3duLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvdXRpbHMvZG9tL2lzRGVzY2VuZGFudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Ecm9wZG93bi9Ecm9wZG93bi5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Ecm9wZG93bi9Ecm9wZG93bkl0ZW0udHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Ecm9wZG93bi9Ecm9wZG93bkl0ZW1TZXAudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0xvZ28vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvTG9nby9Mb2dvLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0xvZ28vTG9nby5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9CcmFuZGluZy9CcmFuZGluZy5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbG9waG9uL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbG9waG9uL0NvbG9waG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbG9waG9uL0NvbG9waG9uLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvYXBpcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvYXBpcy9hcGlzLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy91dGlscy9jYWxsQXBpLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tYnJvd3NlcmlmeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3V0aWxzX2RsbCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvdXRpbHMvanNvbnAudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2FwaXMvZXh0ZXJuYWxBcGlzLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb250YWluZXJzL0NvbnNvbGVNYXN0ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvQ29uc29sZU1hc3Rlci9Db25zb2xlTWFzdGVyLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db25zb2xlQnJhbmRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29uc29sZUJyYW5kaW5nL0NvbnNvbGVCcmFuZGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db25zb2xlQnJhbmRpbmcvQ29uc29sZUJyYW5kaW5nLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29uc29sZVNpZGViYXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29uc29sZVNpZGViYXIvQ29uc29sZVNpZGViYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29uc29sZVNpZGViYXIvQ29uc29sZVNpZGViYXIuY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb250ZW50L21lbnVzLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb250YWluZXJzL0RvY0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1zaWRlLWVmZmVjdC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvQ29uc29sZU1hc3Rlci9Db25zb2xlTWFzdGVyLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FwcEhvbWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Ccm93c2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Cb29rRGV0YWlsL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQ29sbGVjdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Db2xsZWN0aW9uRGV0YWlsL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvU2lnbmluL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvU2lnbnVwL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvU2hlbGYvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9QcmVmZXJlbmNlL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvUHJvZmlsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlVXNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9BZGRCb29rL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQ29sbGVjdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL05vTWF0Y2gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvcmVkdWNlcnMvY29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvcmVkdWNlcnMvYXBpLWRhdGEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3N0b3JlL3JlZHVjZXJzL2FwaS1kYXRhL2Vycm9yTWVzc2FnZS50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvcmVkdWNlcnMvYXBpLWRhdGEvcGFnaW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvbWlkZGxld2FyZS9hcGkudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3V0aWxzL2hhbmRsZVJlc3BvbnNlLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaHVtcHMvaHVtcHMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIF91dGlsc19kbGwiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3V0aWxzL3BhcnNlUXVlcnlTdHJpbmcudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3N0b3JlL21pZGRsZXdhcmUvbW9kaWZ5UmVzcG9uc2UudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3N0b3JlL21pZGRsZXdhcmUvaGFuZGxlU2VydmVyU3RvcmUudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3V0aWxzL2hhbmRsZUluaXRpYWxTdGF0ZS50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvbWlkZGxld2FyZS9sb2dBY3Rpb25UeXBlcy50cyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWxvZ2dlci9saWIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN6RmtDOztBQUNUOzs7O0FBQ21DOztBQUNuQjs7OztBQUNIOztBQUNtQjs7QUFDTTs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRCxLQUFXLFFBQW1CO0FBQzlCLEtBQWEsVUFBc0MseUVBQVE7QUFFdEQseUJBQUMsRUFBUyxrQkFBVSxzQ0FBUSxPQUFrQixrQkFBYTtBQUN4RCwyQkFDSixnQkFBUyxzQ0FBTSxPQUFRLFNBQ3JCLGdCQUFPLGdEQUNFLGdCQUFVLFNBQWUsZUFDdEM7RUFMeUIsRTs7Ozs7O0FDWDNCLCtDOzs7Ozs7QUNBQSxpQzs7Ozs7O0FDQUEsOEM7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7Ozs7QUNBeUI7Ozs7QUFDWTs7OztBQUNVOzs7O0FBQ0E7Ozs7QUFDUTs7OztBQUd4Qzs7Ozs7Ozs7Ozs7OzttQkFDYixnQkFBTSxvQ0FBaUIsNkJBQ3JCLGdCQUFNLG9DQUFzQixrQ0FDMUIsZ0JBQU0sK0NBQVksb0JBQWdCLFFBQ2xDLGdCQUFNLG9DQUFzQixrQ0FDMUIsZ0JBQU0sK0NBQVksb0JBQWlCLFFBQ25DLGdCQUFNLCtDQUFZLG9CQUFnQixRQUNsQyxnQkFBTSwrQ0FBWSxvQkFBb0IsUUFDdEMsZ0JBQU0sK0NBQVksb0JBQXFCLFFBQ3ZDLGdCQUFNLCtDQUFZLG9CQUEwQixRQUM1QyxnQkFBTSwrQ0FBWSxvQkFBZ0IsUUFDbEMsZ0JBQU0sK0NBQVksb0JBQWdCLFFBQ2xDLGdCQUFNLG9DQUFLLE1BQU8sUUFBVSxXQUFNLFNBQ2hDLGdCQUFjLDRDQUFHLElBQW1CLG9CQUNwQyxnQkFBTSwrQ0FBWSxvQkFBZSxRQUNqQyxnQkFBTSwrQ0FBWSxvQkFBb0IsUUFDdEMsZ0JBQU0sK0NBQVksb0JBRWQsVUFDUixnQkFBTSxvQ0FBSyxNQUFVLFdBQTBCLHNDQUM3QyxnQkFBYyw0Q0FBRyxJQUFvQixxQkFDckMsZ0JBQU0sK0NBQVksb0JBQXFCLFFBQ3ZDLGdCQUFNLCtDQUFZLG9CQUFxQixRQUN2QyxnQkFBTSwrQ0FBWSxvQkFBaUIsUUFDbkMsZ0JBQU0sK0NBQVksb0JBQXVCLFFBQ3pDLGdCQUFNLCtDQUFZLG9CQUl6QixVOzs7Ozs7Ozs7Ozs7OztBQ3BDdUM7Ozs7QUFDSDs7QUFDUTs7QUFDaUU7O0FBQ3BFOztBQUNwQjs7OztBQWtCdEI7Ozs7Ozs7Ozs7S0FBNEI7OztBQU0xQixtQkFBaUIsT0FDZjs7O3dGQUNEOzs7OzttREFFa0M7QUFDakMsaUJBQW9CLGlCQUFPLEtBQU0sTUFBYSxhQUFPLFdBQWMsVUFBYSxhQUFPO0FBQ3ZGLGlCQUFtQixnQkFBWSxVQUFRLFFBQTBCLDBCQUFTLGFBQVMsS0FBTSxNQUFRLFFBQTBCLDBCQUFTO0FBRWpJLGlCQUFnQixnQkFBRTtBQUNmLHNCQUFNLE1BQWlCLGlCQUFFLGlCQUFLLEtBQVUsVUFBYyxlQUMzRDs7QUFFRSxpQkFBZTs7QUFFVix3QkFBUyxTQUFLLEtBQVUsWUFFckI7O0FBSEYscUJBSU0sVUFBUSxRQUEwQiwwQkFBUyxTQUFRLFFBQVcsZUFBSyxDQUFHLEdBQUU7QUFDaEYseUJBQUssS0FBTSxNQUFRLFFBQUssS0FBSyxTQUFhO0FBQzdCLHFEQUFLLEtBTVYsS0FQb0M7O2tCQUQ5Qzs7Ozs7O0FBU0Qsa0JBQU0sTUFHTjs7OztrQ0FDRTswQkFBNkQsS0FBTTtpQkFBckQ7aUJBQW1CO2lCQUFPO2lCQUFjOztBQUVyRCxvQkFDTCw4QkFBSSxTQUFVLFdBQVcsY0FDdkIsZ0JBQWEscUNBQ1AsTUFBYyxhQUFNLE1BQ25CLE9BQWMsYUFBTyxPQUNqQixXQUFjLGFBQVcsV0FDcEIsZ0JBQW9CLG1CQUM3QixPQUFNLE9BRUUsYUFDQSxVQUNmLGdCQUFVLGtDQUNKLE1BQU8sTUFBTSxNQUNaLE9BQU0sS0FDRyxnQkFBYSxZQUN0QixPQUFPLE1BQU8sU0FFYixNQUNJLGVBRUEsTUFBYyxjQUFPO3dCQUFhLEtBQVM7Y0FBakIsQ0FBaEMsQ0FBd0QsU0FBUSxxQkFDM0QsK0JBQ1MsZ0JBQU0sS0FBTSxNQUFrQiw0QkFDOUIsS0FBTSxNQUFjLGNBQUk7NEJBQVU7QUFDdkMsa0NBQU0sS0FBUTtBQUNqQiwrQkFBTSxLQUFLO0FBQ1Isa0NBQU0sS0FBUTtBQUNuQiw2QkFBTSxLQUlmOztrQkFSb0QsQ0FBdkMsRUFGVixHQVdDLEtBQU0sTUFNbkI7Ozs7O2lCQTFFMEI7aUJBQWU7O0FBQy9CLG9CQUFNLE1BQVMsU0FBUyx1QkFPUDs7Ozs7OzttQkFrRUw7WUFDVjtBQUNLLHdCQUFPLE1BQVcsV0FBYztBQUNqQyx1QkFBTyxNQUFhO0FBQ3BCLHVCQUFPLE1BQVcsV0FBYTtBQUN0QyxnQkFBTyxNQUFXLFdBQU07QUFDdEIsa0JBQU8sTUFBUTtBQUNmLGtCQUFPLE1BQ2Q7O0VBUE8sRUFRVCxFQUFrQiw2Q0FBa0IsNkNBQW1CLCtDQUFVLDZCQUNsRSxtQ0FBTSxNOzs7Ozs7QUM3R1AsZ0Q7Ozs7Ozs7Ozs7Ozs7OztBQ0U0Qjs7Ozs7Ozs7Ozs7O0FBQ0c7Ozs7Ozs7Ozs7OztBQUUvQjs7Ozs7Ozs7OztBQUxrQzs7U0FLbEIseUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkNKZ0M7U0FBUyxnRUFBcUI7U0FBRywwREFBTzs7QUFDaEYsc0JBQVUsVUFBVTtBQUN4QixhQUFRLEtBQU8sS0FBUyxTQUFRLFFBQUcsR0FBTyxPQUFHO0FBRXJDLGtCQUFpQixpQkFBRyxJQUFTLFNBQVc7QUFDN0MsYUFBRSxNQUFPO0FBQ0E7QUFDQSwwQkFBaUIsaUJBQzFCO2NBRlUsRUFPakIsR0FSa0I7O01BSlQ7O0FBWUYsS0FBdUIsZ0RBQzlCOzJCQUEyQyxJQUFpQjtTQUFTLGdFQUFxQjs7QUFDbEYsWUFBQztBQUNELGVBQW1CO0FBQ2hCO0FBQ0E7QUFLWDs7O0FBQU8sS0FBdUIsZ0RBQzlCOzJCQUEyQztBQUNuQyxZQUFDO0FBQ0QsZUFBbUI7QUFNM0I7Ozs7QUFBTyxLQUF3QixrREFDL0I7QUFBTyxLQUF5QixvREFNaEM7MkJBQXVEO0FBQy9DLFlBQUM7QUFDRCxlQUFvQjtBQUs1Qjs7OztBQUNRLFlBQUM7QUFDRCxlQVVSOzs7b0JBQXlDO0FBQ2pDLFlBQUM7QUFDRCxlQUFjO0FBS3RCOzs7O0FBQ1EsWUFBQztBQUNELGVBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RXFCOzs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0M7Ozs7Ozs7Ozs7OztBQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hrQjs7QUFDQTs7QUFFUjs7OztBQUdsQzs7Ozs7O0FBQU8sS0FBbUIsd0NBQzFCO0FBQU8sS0FBbUIsd0NBQzFCO0FBQU8sS0FBbUIsd0NBTTFCO3FCQUErQztBQUM3QyxTQUFtQixnQkFBRyxFQUFNLE1BQUcsR0FBTyxPQUFTO0FBQy9DLFNBQW1CLGdCQUFTLE9BQU8sT0FBYyxlQUFTLFdBQ3BEO1NBQU87U0FBSyxJQUFnQjs7QUFDbEMsU0FBZ0IsZUFBSSxpQkFBSyxLQUFjLGVBQUUsQ0FBVTtBQUV2QyxxQ0FBVyxPQUFHLElBQWMsY0FBRTtBQUNqQyxrQkFDUDtNQUZjO0FBSWhCLFNBQWlCLGNBQVEsZ0JBQWMsY0FBYztBQUNyRCxvQkFBaUI7QUFDVixnQkFBRSxDQUFjLGVBQWUsZUFBZ0I7QUFDMUMsOEJBQXNCO0FBQzFCLGlCQUFTLGlCQUFXO0FBQ2hCLHFCQUFFO0FBQ04sbUJBQVM7QUFDUjtBQUNBLG9CQUVROztNQVRIO0FBV1IsWUFBQztBQUtUOzs7b0JBQWdDLFFBQXFCO0FBQ25ELFNBQWUsc0JBQWlCO0FBRTdCLFNBQVEsUUFBRTtBQUNDLGtDQUFpQixPQUFLLEtBQ25DOztBQUVLLFlBQUM7QUFDQztBQUNFLG1CQUFFO0FBQ0gsb0JBQUUsQ0FBZSxnQkFBZ0IsZ0JBQWlCO0FBQy9DO0FBQ0YscUJBQVMsaUJBS3JCOzs7OztTQUF5QyxpRUFBNkI7O0FBQzlELFlBQUM7QUFDRztBQUNBLG1CQUFFO0FBQ0gsb0JBQUUsQ0FBc0IsdUJBQXVCLHVCQUF3QjtBQUNyRDtBQUNqQixxQkFBUyxpQkFLckI7Ozs7MEJBQTRDO0FBQ3BDLFlBQUM7QUFDTztBQUNKLG1CQUFFO0FBQ0gsb0JBQUUsQ0FBcUIsc0JBQXNCLHNCQUF1QjtBQUMvRCx3Q0FBNkI7QUFDakMscUJBQVMsaUJBS3JCOzs7O0FBQU8sS0FBZ0Msa0VBQ3ZDO0FBQU8sS0FBZ0Msa0VBQ3ZDO0FBQU8sS0FBZ0Msa0VBQ3ZDOzRCQUF1QztBQUNyQyxvQkFBK0I7QUFDeEIsZ0JBQUUsQ0FBMkIsNEJBQTRCLDRCQUE2QjtBQUNqRix5Q0FBMkI7QUFDL0IsaUJBQVUsaUJBQWE7QUFDdkIsaUJBQVMsaUJBQTJCO0FBQ25DLGtCQUFFLEVBQVUsVUFBUTtBQUNqQixxQkFBRTtBQUNOLG1CQUFlO0FBR3RCOztNQVZhO0FBWVIsWUFBQztBQUNBO0FBR1I7Ozs7Ozs7Ozs7Ozs7OztBQ3BHOEQ7O0FBRS9ELGtDQUErQixTQUFFO0FBQ3BCLGtCQUNYO0VBRnFCLENBQWI7QUFJVixvQ0FBbUMsV0FBRTtBQUN4QixrQkFDWDtFQUZ1QixDQUFiO0FBSVosd0NBQStDLG1CQUFFO0FBQ3BDLGtCQUNYO0VBRjJCLENBQWI7QUFJaEIscUNBQXFDLFlBQUU7QUFDMUIsa0JBQ1g7RUFGd0IsQ0FBYjtBQUliLGtDQUErQixTQUFFO0FBQ3BCLGtCQUNYO0VBRnFCLENBQWI7QUFJVix3Q0FBMkMsZUFBRTtBQUNoQyxrQkFDWDtFQUYyQixDQUFiO0FBSWhCLDBDQUF1QyxTQUFFO0FBQzVCLGtCQUNYO0VBRjZCLENBQWI7QUFJbEIsMENBQXVDLFNBQUU7QUFDNUIsa0JBR2I7RUFKK0IsQ0FBYjtBQUlYLGlDQUFnQjtBQUNqQixXQUFNO0FBQ0csb0JBQWM7QUFDakIsaUJBQVMsd0JBQU07QUFDQyxpQ0FBRSxFQUFNLE9BQVMsd0JBQWE7QUFDOUMsaUJBQVMsd0JBQU07QUFDUCx5QkFBUyx3QkFBYztBQUMvQixpQkFBWTtBQUNOLHVCQUFTLHdCQUFZO0FBQzlCLGNBQVM7QUFDVixhQUFRO0FBQ0YsbUJBQVMsd0JBQ3RCO0VBWm1CLEM7Ozs7OztBQ2xDcEIsaUQ7Ozs7OztBQ0FBLDZCOzs7Ozs7Ozs7OztBQ0FPLEtBQVUsc0JBQUcsT0FBYSxXQUFnQixjQUN2QyxPQUFTLFNBQU8sU0FHMUI7QUFBTyxtQ0FBaUI7QUFDZixZQUFjO0FBQ1QsbUJBQ2I7RUFIb0IsQzs7Ozs7Ozs7Ozs7O0FDSnNCOzs7O0FBQ047Ozs7QUFDSTs7OztBQUdsQzs7Ozs7OztBQUNQLGtCQUFvQjtBQUNsQixTQUFrQjtBQUVmLFNBQUksTUFBTSxJQUFFO0FBQ0MsMEJBQU0sTUFBTSxJQUN0QjtZQUFFO0FBQ1EsMEJBQU0sSUFDckI7O0FBRUssWUFHRDs7O0FBQ1A7QUFDRSxTQUFPLElBQUcsSUFBVTtBQUNwQixTQUFVLE9BQUcsQ0FBRSxFQUFjLGVBQUcsRUFBVyxZQUFHLEVBQVUsV0FBRyxFQUFXLFlBQUcsRUFBYSxjQUFHLEVBQWM7QUFFakcsaUJBQVM7QUFDUCxnQkFBUSxRQUNkO01BRmUsQ0FBTixDQUVKLEtBR1Q7O21CQUFlO0FBQ0E7QUFDSDtBQUNFO0FBRWI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJEOzs7Ozs7OzZCQUFzRDtBQUNqRCxTQUFFLGlCQUFRLFFBQWM7QUFDbkIsZ0JBQ1AsR0FGNEI7O0FBSTdCLFNBQVUsU0FBSSxpQkFBVSxVQUFhO0FBQ3JDLFNBQWMsYUFBSztBQUVmLFVBQUMsSUFBUSxRQUFXLFFBQUU7QUFDckIsYUFBQyxRQUFhLE9BQU0sV0FBYSxZQUFVLE9BQU0sVUFBVTtBQUN0RCxvQkFBTSxRQUFTLE9BQU0sTUFDNUIsV0FGK0Q7O0FBSW5ELDJCQUFhLGFBQU8sYUFBVSxPQUM1Qzs7QUFFSyxZQUFXLFdBQU8sT0FBRSxHQUFZLFdBQU8sU0FDOUM7Ozs7Ozs7QUNwQkQsaUQ7Ozs7Ozs7Ozs7Ozs7QUNDVSxjQUFLLEtBQU0sTUFBUyxXQUM3Qjs7Ozs7Ozs7Ozs7Ozs7QUNEUyxjQUFLLEtBQU0sTUFBUyxXQUM3Qjs7Ozs7Ozs7Ozs7Ozs7QUNFSSxTQUFDLE9BQWEsV0FBaUI7QUFDekIsaUJBQU0sTUFBNEQ7QUFFbkUsZ0JBQUM7QUFDRCxtQkFBSTtBQUNGLHFCQUVUO1dBUG1DOztBQVM5QixZQUFDO0FBQ0QsZUFBRTtBQUNDLG9CQUFTLE9BQVc7QUFDbkIscUJBQVEsT0FBWTtBQUNmLDBCQUFRLE9BQVcsYUFBUyxPQUN4Qzs7QUFDSyxpQkFBUSxPQUVqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJDbkJvQzs7QUFFaEMsU0FBYTtBQUNSLGdCQUFDO0FBQ08sMkJBQUU7QUFDUix1QkFBRTtBQUNJLCtCQUFhO0FBQ2pCLDJCQUlYOzs7V0FUaUI7O0FBV1osWUFBQztBQUNHLG1CQUFFO0FBQ0gsb0JBQUUsQ0FBb0IscUJBQXFCLHFCQUFzQjtBQUM5RCx1QkFLZDs7T0FwQmtCOzs7QUFxQlYsWUFBQztBQUNFLGtCQUFXO0FBQ1YsbUJBQUU7QUFDSCxvQkFBRSxDQUFrQixtQkFBbUIsbUJBQW9CO0FBMkJ0RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ1EsWUFBQztBQUNFLGtCQUFhO0FBQ1osbUJBQUU7QUFDSCxvQkFBRSxDQUFnQixpQkFBaUIsaUJBQWtCO0FBTWhFOzs7O3dCQUFvQztBQUM1QixZQUFDO0FBQ0M7QUFDQyxrQkFBWTtBQUNYLG1CQUFFO0FBQ0gsb0JBQUUsQ0FBbUIsb0JBQW9CLG9CQUFxQjtBQUN6RCx1Q0FJZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRXlDOztBQUNSOzs7O0FBSWxDOzs7Ozs7QUFBTyxLQUFtQix3Q0FDMUI7QUFBTyxLQUFtQix3Q0FDMUI7QUFBTyxLQUFtQix3Q0FLMUI7O1NBQWtDLGdFQUFpQjs7QUFDakQsU0FBaUIsY0FBUSxnQkFBYyxjQUFRLFFBQUs7QUFFcEQsb0JBQWlCO0FBQ1YsZ0JBQUUsQ0FBYyxlQUFlLGVBQWdCO0FBQzFDLDhCQUFzQjtBQUMxQixpQkFBUyxpQkFBVztBQUNoQixxQkFBRTtBQUNOLG1CQUFTO0FBQ1Isb0JBQVMsUUFBTTtBQUNmLG9CQUFHLGlCQUFJLElBQVEsU0FBUyxTQUVoQjs7TUFUSDtBQVdSLFlBQUMsRUFDUjs7Ozs7Ozs7Ozs7Ozs7O0FDM0J5Qzs7QUFJMUM7Ozs7OztBQUFPLEtBQW9CLDBDQUMzQjtBQUFPLEtBQW9CLDBDQUMzQjtBQUFPLEtBQW9CLDBDQUMzQjt1QkFBb0M7QUFDbEMsb0JBQStCO0FBQ3hCLGdCQUFFLENBQWUsZ0JBQWdCLGdCQUFpQjtBQUM3QyxnQ0FBZ0IsZ0JBQWMsY0FBVztBQUM3QyxpQkFBUyxpQkFBYTtBQUNsQixxQkFBRTtBQUNOLG1CQUFXO0FBQ1Ysb0JBQVMsUUFFakI7O01BUmE7QUFVUixZQUFDO0FBR1I7Ozs7Ozs7Ozs7Ozs7OztzQkNyQitCLE1BQU87QUFDL0IsWUFBQztBQUNELGVBQWdCO0FBQ2hCO0FBS1I7Ozt3QkFBa0MsTUFBTTtBQUNoQyxZQUFDO0FBQ0QsZUFBa0I7QUFDbEI7QUFHUDs7Ozs7Ozs7QUNkRDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Qzs7Ozs7O0FDeEVBOztBQUVBOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHdDQUF1Qyw2QkFBNkIsWUFBWSxFQUFFLE9BQU8saUJBQWlCLG1CQUFtQix1QkFBdUIsNEVBQTRFLEVBQUUsRUFBRSxzQkFBc0IsZUFBZSxFQUFFOztBQUUzUSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQSwrQkFBOEIsc0NBQXNDO0FBQ3BFO0FBQ0EsdUZBQXNGLGFBQWE7QUFDbkc7QUFDQTs7QUFFQSw2REFBNEQsV0FBVztBQUN2RSxJQUFHO0FBQ0g7QUFDQSwyRkFBMEYsZUFBZTtBQUN6RztBQUNBOztBQUVBLDJEQUEwRCxXQUFXO0FBQ3JFLElBQUc7QUFDSDtBQUNBLDJGQUEwRixlQUFlO0FBQ3pHO0FBQ0E7O0FBRUEsK0RBQThELFdBQVc7QUFDekUsSUFBRztBQUNIO0FBQ0EsMERBQXlELFdBQVc7QUFDcEUsSUFBRztBQUNIO0FBQ0EsMkZBQTBGLGVBQWU7QUFDekc7QUFDQTs7QUFFQSwwREFBeUQsV0FBVztBQUNwRSxJQUFHO0FBQ0g7QUFDQSwyRkFBMEYsZUFBZTtBQUN6RztBQUNBOztBQUVBLDREQUEyRCxXQUFXO0FBQ3RFLElBQUc7QUFDSDtBQUNBLDREQUEyRCxXQUFXO0FBQ3RFO0FBQ0EsRUFBQztBQUNEO0FBQ0EsMkZBQTBGLGVBQWU7QUFDekc7QUFDQTs7QUFFQSxtREFBa0QsYUFBYTtBQUMvRDtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDdEpBOztBQUVBO0FBQ0E7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLCtDQUE4QyxpQkFBaUIscUJBQXFCLG9DQUFvQyw2REFBNkQsb0JBQW9CLEVBQUUsZUFBZTs7QUFFMU47O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCxpQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQSx1S0FBc0ssZUFBZTtBQUNyTDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0EsNENBQTJDLGFBQWEsaUNBQWlDOztBQUV6RjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBcUMsYUFBYSxlQUFlOztBQUVqRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0EsRUFBQztBQUNEOztBQUVBO0FBQ0EsdURBQXNELGFBQWEsZ0JBQWdCO0FBQ25GLElBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBb0I7QUFDcEI7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOztBQUVBLHFCQUFvQjtBQUNwQjtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDs7QUFFQSxxQkFBb0I7QUFDcEI7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNELHFCQUFvQjtBQUNwQjtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0Q7O0FBRUE7O0FBRUEscUJBQW9CO0FBQ3BCO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDs7QUFFQTs7QUFFQSxxQkFBb0IseUVBQXlFO0FBQzdGLEVBQUM7QUFDRCxxQkFBb0I7QUFDcEI7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7O0FBRUEscUJBQW9CO0FBQ3BCO0FBQ0EseURBQXdELFVBQVUsZ0JBQWdCO0FBQ2xGLE1BQUs7QUFDTCxJQUFHO0FBQ0gsRUFBQztBQUNEOztBQUVBLHFCQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSCxFQUFDOztBQUVEO0FBQ0E7QUFDQSx3RUFBdUU7O0FBRXZFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVFQUFzRTtBQUN0RSx3RUFBdUU7QUFDdkU7QUFDQTs7QUFFQSxnRUFBK0Q7OztBQUcvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUJBQXdCLHdCQUF3QjtBQUNoRDs7QUFFQSw0REFBMkQsOEJBQThCO0FBQ3pGLFFBQU8sSUFBSTtBQUNYO0FBQ0EsdUJBQXNCLHdCQUF3QiwrQkFBK0IsOEJBQThCLDZDQUE2QztBQUN4SjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyREFBMEQsK0JBQStCO0FBQ3pGLE1BQUssSUFBSTtBQUNUO0FBQ0EscUJBQW9CLHlCQUF5QjtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJFQUEwRTtBQUMxRSw0RUFBMkU7O0FBRTNFO0FBQ0EseUJBQXdCO0FBQ3hCO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyRUFBMEU7QUFDMUUsNEVBQTJFOztBQUUzRTtBQUNBLHlCQUF3QjtBQUN4QjtBQUNBLDZFQUE0RTtBQUM1RSx1Q0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNEIsZ0NBQWdDO0FBQzVEO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUEseUM7Ozs7OztBQzVVQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0Q7Ozs7OztBQ25CQTs7QUFFQTs7QUFFQSxvREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBc0IsOEJBQThCO0FBQ3BELElBQUcsSUFBSTtBQUNQLEU7Ozs7OztBQ2hCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qjs7Ozs7O0FDeENBOztBQUVBOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBc0IseUJBQXlCLCtFQUErRTtBQUM5SDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEwQixjQUFjLGlCQUFpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXdCLGNBQWMsaUJBQWlCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EseUJBQXdCLGNBQWMsaUJBQWlCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFVBQVM7QUFDVCxRQUFPO0FBQ1A7QUFDQTtBQUNBLFdBQVU7QUFDVixRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsdUJBQXNCLGNBQWMsaUJBQWlCO0FBQ3JEO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EscUJBQW9CLHlCQUF5QjtBQUM3Qzs7QUFFQSx5Qjs7Ozs7O0FDcEdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHLElBQUk7QUFDUDs7QUFFQSxzQzs7Ozs7O0FDeENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUF5QyxnQ0FBZ0M7QUFDekU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7QUMxQkE7O0FBRUE7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7QUFDQSxrRUFBaUU7QUFDakU7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUFzRTtBQUN0RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSwwR0FBeUc7QUFDekcsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsWUFBVztBQUNYO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRyxhQUFhO0FBQ2hCOztBQUVBLG1DOzs7Ozs7QUMzRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSwwR0FBeUcsSUFBSSwrQ0FBK0M7QUFDNUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRyxJQUFJO0FBQ1A7O0FBRUEsOEI7Ozs7OztBQ2pDQTs7QUFFQTs7QUFFQSxvREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwREFBeUQsOEJBQThCO0FBQ3ZGLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdURBQXNELHdCQUF3QjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQSxpREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBOztBQUVBLHVEQUFzRCx3QkFBd0I7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQXFELDhCQUE4QjtBQUNuRixJQUFHLGVBQWU7QUFDbEI7O0FBRUEsNkI7Ozs7OztBQ3hGQTs7QUFFQTs7QUFFQSxvREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBLFdBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFXO0FBQ1g7QUFDQSxRQUFPOztBQUVQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUcsSUFBSTs7QUFFUCxxQkFBb0I7QUFDcEIsRTs7Ozs7O0FDM0ZBOztBQUVBOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixrREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDJDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFFQUFvRTtBQUNwRSx3REFBdUQ7QUFDdkQ7O0FBRUE7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DOzs7Ozs7QUNwRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLCtDQUE4QyxpQkFBaUIscUJBQXFCLG9DQUFvQyw2REFBNkQsb0JBQW9CLEVBQUUsZUFBZTs7QUFFMU4sa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosa0RBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywyQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrSkFBOEo7OztBQUc5SjtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDOzs7Ozs7QUNuR0E7Ozs7Ozs7QUNBQTs7QUFFQTs7QUFFQSxvREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UCx1Q0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Ysa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCx5QkFBd0IsOEJBQThCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLLElBQUk7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMENBQXlDO0FBQ3pDO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0EscUM7Ozs7OztBQ3pGQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLGNBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHLFlBQVk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QixRQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUIsUUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUkE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbkJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDTkE7O0FBRUE7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLHdDQUF1Qyw2QkFBNkIsWUFBWSxFQUFFLE9BQU8saUJBQWlCLG1CQUFtQix1QkFBdUIsNEVBQTRFLEVBQUUsRUFBRSxzQkFBc0IsZUFBZSxFQUFFOztBQUUzUSwrQ0FBOEMsaUJBQWlCLHFCQUFxQixvQ0FBb0MsNkRBQTZELG9CQUFvQixFQUFFLGVBQWU7O0FBRTFOLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGtEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMkNBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwyREFBMEQsSUFBSTtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsVUFBUyxFQUFFO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwySUFBMEksZUFBZTtBQUN6SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsWUFBVzs7QUFFWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnYkFBK2E7OztBQUcvYTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQSxxREFBb0Q7QUFDcEQsaUVBQWdFO0FBQ2hFOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQW9DO0FBQ3BDO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUssNEdBQTRHLGlCQUFpQjs7QUFFbEk7QUFDQTtBQUNBOztBQUVBLDhDOzs7Ozs7QUM3V0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFdBQVU7QUFDVjs7QUFFQTtBQUNBLFdBQVU7QUFDVjs7QUFFQTtBQUNBLFdBQVU7QUFDVjs7QUFFQTtBQUNBLFdBQVU7QUFDVjs7QUFFQTtBQUNBLFdBQVU7QUFDVjs7QUFFQTtBQUNBLFdBQVU7QUFDVjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjs7QUFFQTtBQUNBLFdBQVU7QUFDVjs7QUFFQTtBQUNBLFdBQVU7QUFDVjs7QUFFQTtBQUNBLFdBQVU7QUFDVjs7QUFFQTtBQUNBLFdBQVU7QUFDVjs7QUFFQTtBQUNBLFdBQVU7QUFDVjs7QUFFQTtBQUNBLFdBQVU7QUFDVjs7QUFFQTtBQUNBLFdBQVU7QUFDVjs7QUFFQTtBQUNBLFdBQVU7QUFDVjs7QUFFQTtBQUNBLG9FQUFtRSxhQUFhO0FBQ2hGO0FBQ0E7O0FBRUEsV0FBVTtBQUNWOztBQUVBO0FBQ0EsdUVBQXNFLGVBQWU7QUFDckY7QUFDQTs7QUFFQSxXQUFVO0FBQ1YsRzs7Ozs7O0FDdEZBOztBQUVBOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRTs7Ozs7O0FDN0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUyx1REFBdUQ7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBOEM7QUFDOUMsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUcsSUFBSTtBQUNQOztBQUVBLDZCOzs7Ozs7QUNoRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxFOzs7Ozs7QUNoQkE7O0FBRUE7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUcsYUFBYSwwQkFBMEI7QUFDMUM7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSw4Qjs7Ozs7O0FDakVBOztBQUVBOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEM7QUFDNUM7QUFDQTs7QUFFQSw4QkFBNkIsNEJBQTRCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLGlDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQSwrQ0FBOEMsY0FBYztBQUM1RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkI7Ozs7OztBQ3BPQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0M7Ozs7OztBQ25CQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUhBQWdILGVBQWU7QUFDL0g7QUFDQTs7QUFFQSw0Qjs7Ozs7O0FDekRBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCOzs7Ozs7QUNQQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7QUNmQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQzs7Ozs7O0FDVkE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDOzs7Ozs7QUNYQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7O0FDUkE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0M7Ozs7OztBQ2xCQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQTs7QUFFQTs7QUFFQSxvREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQStDO0FBQy9DO0FBQ0EsK0I7Ozs7OztBQ3pFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNoQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkI7Ozs7OztBQ25CQTs7QUFFQTs7QUFFQSxvREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDtBQUNBLHlCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLDJDQUEwQyx5QkFBeUI7QUFDbkU7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBbUQseUJBQXlCO0FBQzVFO0FBQ0E7QUFDQTs7QUFFQSwrQjs7Ozs7O0FDMUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSyxlQUFlO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDOzs7Ozs7QUM1RUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DOzs7Ozs7QUNwQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQSx1RkFBc0YsYUFBYTtBQUNuRztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7O0FDcEJBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQzs7Ozs7O0FDbEJBOztBQUVBOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUEsMEM7Ozs7OztBQ3JDQSxnRDs7Ozs7O0FDQUE7O0FBRUE7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMEI7QUFDMUI7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EseUJBQXdCO0FBQ3hCO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUM7Ozs7OztBQy9CQSxnRDs7Ozs7O0FDQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQzs7Ozs7Ozs7Ozs7OztBQ3hDMkI7Ozs7QUFFM0I7Ozs7OztTQUFlO1NBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSG9COzs7O0FBRWQ7Ozs7QUFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMxQyxLQUFZLFNBQWUsb0JBQWlCO0FBYTVDOzs7Ozs7Ozs7Ozs7QUFFSSxpQkFBVSxPQUFPLEtBQU0sTUFBSyxPQUFPLEtBQU0sTUFBSyxPQUFZO0FBQ25ELG9CQUNMLDhCQUFJLGFBRUksS0FBTSxNQUFZLFdBQ3BCLDhCQUFJLFNBQ1MsdUJBQWlCLFFBRTVCLDhCQUFJLFNBQVUsV0FBYyxpQkFDMUIsZ0JBQUssZ0NBQ0ksU0FBTSxLQUFNLE1BQWdCLGdCQUMvQixNQUFRLFNBQ1IsTUFFRixRQUNOLDhCQUFJLFNBQVUsV0FBVSxhQUFNLEtBQU0sTUFPakQ7Ozs7WUF2Qk87O0FBSlIsb0RBQWtCLFFBQUU7QUFDTCxvQkFDYjtFQUZTLElBNkJYO21CQUFvQixNOzs7Ozs7Ozs7Ozs7QUMxQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEcUI7Ozs7QUFDTDs7OztBQUNEOzs7O0FBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMxQyxLQUFZLFNBQVUsb0JBQWM7QUFhcEM7OztBQUNFLG1CQUFpQixPQUNmOzs7d0ZBR0k7Ozs7OzswQkFDOEIsS0FBTTtpQkFBOUI7aUJBQVM7aUJBQVE7O0FBQzNCLGlCQUFhLFlBQWEsMEJBQVMsa0JBQWMsTUFBTSxLQUFNLE1BQVc7QUFFckUsaUJBQUMsT0FBZSxtQkFBTSxVQUFpQixhQUFFO0FBQ25DLHlCQUFNLE1BQTZCLDhCQUMzQzs7QUFFRyxvQkFBTyxRQUFNLEdBUGI7QUFTRyxvQkFDTCw4QkFBSyxVQUFVLFdBQU8sUUFBVSxXQUFZLFdBQVEsU0FBVSxXQUM1RCw4QkFBSSxvQkFBYSxtQkFBTSxNQUFRLFdBQUksRUFBUSxTQUFVLG1CQUFNLE1BQVMsYUFBTyxPQUFPLE1BQU8sUUFBTyxNQUFVLFdBQVksZ0JBQ3BILDhCQUFLLFVBQUUsR0FBVSxtQkFBTSxNQUtoQzs7OztZQXZCMkI7O0FBSDVCLG1EQUFrQixRQUFFO0FBQ0wsb0JBQ2I7RUFGUyxJQTRCWDttQkFBbUIsSzs7Ozs7O0FDMUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBZ0I7O0FBRWhCO0FBQ0E7O0FBRUEsa0JBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7Ozs7OzttQkMvQ2M7QUFDUixZQUFFO0FBQ0QsZUFBaUg7QUFDOUcsa0JBQ1I7O0FBQ0csV0FBRTtBQUNBLGVBQ0w7O0FBQ0ksWUFBRTtBQUNELGVBQ0w7O0FBQ0ssYUFBRTtBQUNGLGVBQ0w7O0FBQ08sZUFBRTtBQUNKLGVBQ0w7O0FBQ1MsaUJBQUU7QUFDTixlQUNMOztBQUNJLFlBQUU7QUFDRCxlQUVMOztBQUNHLFdBRXNGOzs7QUFDcEYsZUFBeXFCO0FBQ3RxQixrQkFDUjs7QUFDUyxpQkFBRTtBQUNOLGVBQSszQztBQUM1M0Msa0JBQ1I7O0FBQ0csV0FDeVY7O0FBQ3ZWLGVBQ0w7O0FBQ1MsaUJBQUU7QUFDTixlQUF5RTtBQUN0RSxrQkFFVjs7Ozs7Ozs7QUMxQ0QsZ0Q7Ozs7OztBQ0FBO0FBQ0EsbUJBQWtCLG1EOzs7Ozs7QUNEbEI7QUFDQSxtQkFBa0IsK047Ozs7Ozs7Ozs7OztBQ0RPOzs7O0FBQ0U7Ozs7OztBQUMzQixLQUFZLFNBQWUsb0JBQWlCO0FBYTVDLGlCQUE2QjtBQUNwQiwwQ0FDRCxTQUFVLFdBQVEsT0FBUSxVQUVyQixNQUFTLFNBQUksY0FBSyxLQUFZO2dCQUNqQyxnQkFBTSxpQ0FDRCxLQUFRLE9BQ1AsTUFBSyxJQUFNLE1BQ1IsU0FBSyxJQUFTLFNBQ2QsU0FBSyxJQUFTLFNBQ1A7QUFDUCx1QkFBZSxlQUFJLElBU3RDO2NBVjRCO01BTkQsQ0FGdkI7O21CQWtCaUIsTzs7Ozs7Ozs7Ozs7OztBQ25DTTs7QUFNM0I7Ozs7Ozs7Ozs7OztBQUxtQzs7OztBQUdmOzs7Ozs7O1NBRUY7U0FBZ0Isc0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOTTs7OztBQUNSOzs7O0FBQ0Q7Ozs7QUFDTzs7OztBQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMUMsS0FBWSxTQUFVLG9CQUFnQjtBQWlCdEM7OztBQUlFLG9CQUFpQjs7OzhGQUNIOztBQUNSLGVBQU0sUUFBRztBQUNBLDBCQUFHO0FBQ0QsNEJBQU87QUFDQyxvQ0FDdEI7V0FMRDtBQU1JLGVBQVEsVUFBTyxNQUFRLFFBQVc7QUFDbEMsZUFBVSxZQUFPLE1BQVUsVUFHeEI7Ozs7Ozs7QUFDSCxrQkFBTSxNQUFpQjtBQUN0Qiw2QkFBZTtBQUNkLG9CQUFvQixvQkFBUyxVQUFNLEtBR3BDOzs7OztBQUNMLGlCQUFlLGNBQVcsbUJBQVksWUFBSyxLQUFPLE9BQWE7QUFDL0QsaUJBQXlCLHdCQUFPO0FBQ2hDLGlCQUFrQixpQkFBVyxTQUFLLEtBQWE7QUFFNUMsaUJBQU8sT0FBWSxjQUFlO0FBQ2QseUNBQ3RCLE1BRnNDOztBQUlwQyxpQkFBTyxPQUFZLGNBQVcsU0FBSyxLQUFjO0FBQ3BDLGtDQUFTLE9BQ3hCLFlBRnFEOztBQUlsRCxrQkFBUyxTQUFDO0FBQ0Q7QUFDVTtBQUtSOzs7Ozs2Q0FHUTs7O21EQUFVLFdBR2pCOzs7NENBQVU7O0FBRXZCLGlCQUFDLENBQVUsVUFBSyxRQUFRLEtBQU0sTUFBSyxTQUFVO0FBQzFDLHNCQUFVLFVBRGtDO0FBRTNDLGlDQUFhO0FBQ1osd0JBQWlCLGlCQUFTLFVBQU0sS0FHM0I7OztBQVBBLGlCQVFBLFVBQUssU0FBUyxRQUFRLEtBQU0sTUFBSyxTQUFXO0FBQ2pELHdCQUFvQixvQkFBUyxVQUFNLEtBQVM7QUFDN0MsaUNBSU8sZUFONkM7Y0FBeEQ7Ozs7O0FBT0csb0JBQW9CLG9CQUFTLFVBQU0sS0FHckM7Ozs7Ozs7aUJBQ1UsT0FBTyxLQUFNOztBQUUzQixpQkFBa0IsZUFBVTtBQUM1QixpQkFBZ0IscUJBQVMsSUFBWSxJQUFYLEdBQXVCO0FBRWpELGlCQUFhLFlBQU8sS0FBTSxNQUFhLFlBQWUscUJBQVEsS0FBTSxNQUFZLFlBQWU7QUFFL0YsaUJBQVMsUUFBTyxLQUFNLE1BQU0sUUFBTyxLQUFNLE1BQU0sUUFBTTtBQUNyRCxpQkFBVSxTQUFPLEtBQU0sTUFBWTtBQUNuQyx5QkFBWTtBQUNGLDJCQUFJO0FBQ0UsaUNBQUk7QUFDWix5QkFBSTtBQUNMLHdCQUNOO2NBTFEsQ0FUSDtBQWdCRCxtQkFBUyxXQUFHO0FBQ1AsMkJBQVM7QUFDWCx5QkFBUTtBQUNULHdCQUFRO0FBQ1QsdUJBQUc7QUFDSixzQkFBRztBQUNJLDZCQUF1QjtBQUN6QiwyQkFDVDs7QUFFSSxtQkFBZTtBQUNiLDZCQURnQjtBQUVaLDRCQUFFLENBQU8sU0FBSTtBQUNaLDZCQUFFLENBQU0sUUFBSTtBQUNkLDJCQUFZO0FBQ2hCLHVCQUFPO0FBQ1Isc0JBQ0o7O0FBRUksbUJBQU8sU0FBRztBQUNSO0FBQ0MseUJBQ1A7O0FBRUksbUJBQU0sUUFBSztBQUViLGlCQUFLLEtBQU0sTUFBdUIsdUJBQUU7QUFDaEMsdUJBQU0sUUFBUyxPQUFPLE9BQUcsSUFBTyxNQUFNLE9BQU8sTUFDOUM7b0JBQUU7QUFDRCx1QkFBTSxRQUFTLE9BQU8sT0FBRyxJQUFPLE1BQU0sT0FBTyxNQUNuRDs7QUFFTSxvQkFDTCxnQkFBSyw2Q0FFZSxxQ0FDVixTQUNLLDZCQUNTOztBQUNYLHlCQUFHLEVBQWUsT0FBZSxvQkFBZTtBQUM3QyxnQ0FFTCxZQUhvRDs7a0JBRjdDLEVBTUQsV0FBaUIsa0JBQ3JCLE9BQU8sTUFBVSwwQ0FFbEIsU0FDQSxJQUFVLFNBQ1AsT0FBTyxNQUFPLE9BQ1YsV0FBWSxXQUNaLFdBQVEsU0FDZDtBQUFlLDRCQUFNLFFBQVU7a0JBQTFCLEVBTFYsRUFPTyxLQUFNLE1BR2hCLFNBcEJDLENBREUsR0EwQmI7Ozs7WUFoSjRCOztBQUQ3QixxQkFBVywrQkFBUSxVQW1KbkI7bUJBQW9CLE07Ozs7Ozs7Ozs7OztBQ3ZLRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEcUI7Ozs7QUFDK0I7Ozs7Ozs7Ozs7OztBQUN2RSxLQUFZLFNBQWUsb0JBRTNCOztLQUE0Qjs7O0FBQzFCLG1CQUFpQixPQUNmOzs7d0ZBR0k7Ozs7OztBQUNHLG9CQUNMLGdCQUF3Qix5REFDYixXQUFNLE9BQ0QsZ0JBQVMsUUFDRCx3QkFBTSxLQUNOLHdCQUFNLE9BRXZCLEtBQU0sTUFNbkI7Ozs7Ozs7bUJBQW1CLEs7Ozs7OztBQ3ZCbkIsZ0Q7Ozs7OztBQ0FBO0FBQ0EsbUJBQWtCLGlIOzs7Ozs7QUNEbEI7QUFDQSxtQkFBa0IsK1c7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEc0I7Ozs7QUFDYjs7OztBQUNlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMUMsS0FBWSxTQUFVLG9CQUFnQjtBQWN0Qzs7O0FBRUUsd0JBQWlCLE9BQ2Y7Ozs2RkFHZTs7Ozs7NkNBR1g7Ozs7MEJBQ3dELEtBQU07aUJBQXJEO2lCQUFNO2lCQUFnQjtpQkFBTztpQkFBVzs7QUFFOUMsb0NBQ0MsaUNBQ0EsTUFBTyxNQUNHLGdCQUFpQixnQkFDMUIsT0FBTyxTQUFRLE9BRXBCLDhCQUFJLFNBQVUsV0FBYSxnQkFFZCxTQUNQLDhCQUFJLFNBQVUsV0FBZSxrQkFDM0IsOEJBQUcsUUFBVSxXQUFjLGlCQUdoQyxTQUNELDhCQUFJLFNBQVUsV0FBYSxnQkFFbkIsS0FBTSxNQUVSLHNCQUdLLFFBQUksY0FBUSxRQUFPO0FBQ2xCLHdDQUFtQixhQUFPLFFBQUU7QUFDN0IsMEJBU3BCO2tCQVYyQjtjQURGLENBREgsQ0FuQmpCLEVBSEk7Ozs7WUFWdUI7O0FBRGpDLHlCQUFXLCtCQUFRLFVBK0NuQjttQkFBd0IsVTs7Ozs7Ozs7Ozs7Ozs7OztBQy9EZ0I7Ozs7QUFDYzs7OztBQUNmOzs7O0FBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMxQyxLQUFZLFNBQVUsb0JBQWdCO0FBV3RDOzs7QUFFRSxxQkFBaUIsT0FDZjs7OzBGQUdlOzs7Ozs2Q0FHWDs7O2tDQUNFOzBCQUEwQyxLQUFNO2lCQUFyQztpQkFBZ0I7aUJBQVE7O0FBRWxDLG9CQUNMLGdCQUFNLGlDQUNBLE1BQU8sTUFDRyxnQkFBaUIsZ0JBQzFCLE9BQU0sS0FBTSxNQUFPLFNBRXhCLDhCQUFJLFNBQVUsV0FBZ0IsbUJBRXRCLEtBQU0sTUFBVSxTQUNsQiw4QkFBSSxTQUFVLFdBQWUsa0JBQzNCLDhCQUFHLFFBQVUsV0FBYyxpQkFBTSxLQUFNLE1BRzVDLFNBQ0QsOEJBQUksU0FBVSxXQUFnQixtQkFDdkIsS0FBTSxNQUNQLFdBQ04sZ0JBQVksdUNBQ0QsV0FBWSxXQUNiLFVBTW5COzs7O1lBckM2Qjs7QUFEOUIsc0JBQVcsK0JBQVEsVUF3Q25CO21CQUFxQixPOzs7Ozs7Ozs7Ozs7QUN0REk7Ozs7QUFDVzs7Ozs7O0FBQ3BDLEtBQVksU0FBVSxvQkFBc0I7QUFRNUMsc0JBQWlDLE9BQ3pCO1NBQVc7U0FBWSxXQUFROztBQUU5QixZQUNMLDhCQUFJLFNBQVUsV0FBUSxPQUFpQixtQkFDckMsZ0JBQU8sa0NBQU0sT0FBTyxRQUFRLFNBQVksYUFBWSxPQUV0QyxZQUNWLGdCQUFPLGtDQUFNLE9BQVEsU0FBUSxTQUFXLFlBT2xEOzttQkFBMEIsWTs7Ozs7Ozs7Ozs7O0FDeEJMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRG1COzs7O0FBQ0s7O0FBQ0g7Ozs7QUFDUDs7OztBQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN0QixLQUFZLFNBQVUsb0JBQWtCO0FBb0J4Qzs7O0FBQ0UscUJBQWlCOzs7K0ZBQ0g7O0FBQ1IsZUFBTSxRQUFHO0FBQ0EsMEJBSVQ7V0FOSjs7Ozs7Ozs7OzswQkFPOEQsS0FBTTtpQkFBdkQ7aUJBQVc7aUJBQU87aUJBQU07aUJBQVM7aUJBQVM7O0FBQ3ZELGlCQUFTLFFBQUs7QUFFZCxpQkFBZSxZQUFjO0FBQ3RCLHdCQUFNO0FBQ0MsK0JBQU0sS0FBTSxNQUFZO0FBQ3hCLCtCQUNYO3VEQUFnQixPQUFTLFFBQ3pCLGdEQUFlLE1BQVMsUUFDekI7QUFDQyxpQkFBSyxLQUFNLE1BQUk7QUFDVDtBQUNKLHVCQUFpQjtBQUNKLGlEQUFLLEtBQUssT0FBTSxNQUU1QjtrQkFKTyxDQURPOztBQU1YO0FBQ0osdUJBQWlCO0FBQ2YseUJBQUssT0FBTSxNQUFTLFNBQUU7QUFDbkIsZ0NBQU0sTUFBUSxRQUd2Qjs7a0JBTlksQ0FETDs7QUFTTCxpQkFBQyxPQUFZLFVBQWlCO0FBQzFCLHlCQUFHO0FBR1Q7bUJBSmtDOztBQU1uQyxpQkFBVyw4QkFBUyxLQUFPLE9BQ3BCLEtBQUMsQ0FBSyxNQUFTLFNBQVEsUUFBVyxXQUFXLFVBQzNDLE9BQUc7QUFDQyw0QkFBVyxhQUFNO0FBQ25CO0FBRVAsNkJBSlU7Y0FGQyxFQU9MLFFBckNOO0FBdUNHLG9CQUNMLDhCQUFPLHVCQUNJLFNBQ0EsV0FBWSxXQUNWO0FBQ0wsNEJBQVMsU0FBQztBQUNELHNDQUViOztrQkFKVyxFQUtIO0FBQ0osNEJBQVMsU0FBQztBQUNELHNDQUViOztrQkFKVSxLQU1QLEtBQU0sTUFJbEI7Ozs7WUFuRTZCOztBQUg5QixxREFBa0IsUUFBRTtBQUNMLG9CQUNiO0VBRlMsSUFFVDtBQXNFYSxRQUFhLGVBQUc7QUFDeEIsWUFHUDs7bUJBQXFCLE87Ozs7OztBQ2xHckI7QUFDQSxtQkFBa0IseVA7Ozs7OztBQ0RsQjtBQUNBLG1CQUFrQixxQzs7Ozs7Ozs7Ozs7Ozs7QUNEc0I7Ozs7QUFleEM7Ozs7Ozs7Ozs7S0FBaUM7OztBQUUvQix3QkFBaUIsT0FDZjs7OzZGQUdlOzs7Ozs2Q0FHWDs7OztBQUNHLG9CQUNMLDhCQUFJLGFBQ0csS0FBTSxNQU1uQjs7Ozs7Ozs7WUFDWTtBQUNBLG1CQUFPLE1BQVM7QUFDakIsa0JBQU8sTUFBUSxRQUN4Qjs7RUFIUyxFQUlWLEVBTHFCLEVBS0gsVzs7Ozs7Ozs7Ozs7Ozs7QUN0Q3FCOzs7O0FBQ0g7O0FBQ1E7Ozs7QUFDQTs7OztBQUNBOztBQVU3Qzs7Ozs7Ozs7Ozs7O0tBQWlDOzs7QUFFL0Isd0JBQWlCLE9BQ2Y7Ozs2RkFHVTs7Ozs7O0FBQ04sNEJBQVMsU0FBSztBQUNSLDBCQUFLLE9BQVcsU0FJWDtjQUxJOzs7OztBQU1oQixpQkFBSyxLQUFNLE1BQVEsUUFBSyxLQUFLLFNBQWU7QUFDekMsc0JBQU0sTUFJVyxhQUwwQjs7Ozs7bURBS2hCO0FBQ2pDLGlCQUFrQixlQUFPLEtBQU0sTUFBUSxRQUFLLEtBQUssU0FBYyxhQUFhLFVBQVEsUUFBSyxLQUFLLFNBQWM7QUFDekcsaUJBQWMsY0FBRTtBQUNiLHNCQUFNLE1BSVI7Ozs7OztBQUNKLGlCQUFXLFVBQVE7QUFDbkIsaUJBQVksV0FBTztBQUVoQixpQkFBSyxLQUFNLE1BQVEsUUFBSyxLQUFLLFNBQWUsV0FBRTtBQUN4QywyQkFBTyxLQUFNLE1BQVEsUUFBSyxLQUFLLFNBQVk7QUFDMUMsNEJBQU8sS0FBTSxNQUFRLFFBQUssS0FHOUI7O2lCQUFXLFlBQU8sS0FBTTs7QUFDOUIsaUNBQStCLFVBQ3pCO3dCQUFVO0FBQ1AsNEJBQU0sS0FBTTtBQUNmLHlCQUFNLEtBQ1A7O2NBSFUsQ0FESTtBQU1aLG9CQUNMLDhCQUFJLGFBQ0YsZ0JBQVMsb0NBQ00sZUFBZ0IsZUFDdEIsU0FBVSxTQUNULFVBQVcsVUFDWCxVQUFNLEtBQ2QsaUJBQ0csS0FBTSxNQUFVLFVBQ3JCLGdCQUFTLGtDQU1qQjs7Ozs7OzttQkFBc0I7WUFDVjtBQUNJLHVCQUFPLE1BQVcsV0FBYTtBQUNwQyxrQkFBTyxNQUFRO0FBQ2Isb0JBQU8sTUFBUyxTQUFVLGFBQ25DOztFQUpPLEVBS1QsRUFDRCxtQ0FBVyxXOzs7Ozs7Ozs7Ozs7QUM1RVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEaUI7Ozs7QUFDTDs7QUFDZTs7QUFDK0I7O0FBQ3ZEOzs7O0FBQ2dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMUMsS0FBWSxTQUFVLG9CQUFtQjtBQW9CekM7OztBQUVFLHVCQUFpQjs7O2lHQUNIOztBQUNSLGVBQU0sUUFBRztBQUNVLG9DQUN0QjtXQUhEO0FBSUksZUFBa0Isb0JBQU8sTUFBa0Isa0JBRy9COzs7Ozs7O0FBQ1osa0JBQVMsU0FBQztBQUNTLHdDQUFFLENBQUssS0FBTSxNQUlyQjs7Ozs7O0FBQ1gsa0JBQU0sTUFBVztBQUNmLG9CQUdGOzs7OztBQUNKLGlCQUFXLFVBQU8sS0FBTSxNQUFRLFVBQU8sS0FBTSxNQUFRLFVBRS9DOzBCQUFrQyxLQUFNO2lCQUE5QjtpQkFBaUI7O0FBRTFCLG9CQUNMLDhCQUFJLFNBQVksMEJBQWdCLEtBQU0sTUFBVSxZQUFPLEtBQU0sTUFBVSxZQUFRLE9BQzdFLGdCQUFVLG1DQUFVLFdBQVcsY0FDN0IsOEJBQUksYUFDRixnQkFBSyxnQ0FBRyxJQUFPLFFBQ2YsOEJBQUksU0FBVSxXQUFNLFNBQ2xCLDhCQUFHLFFBQVUsV0FBWSxlQUN2Qiw4QkFBRyxRQUFVLFdBQVcsY0FDdEIsZ0JBQUssbUNBQVUsV0FBVyxZQUFHLElBQVUsYUFHdkMsVUFHQSxXQUNBLDhCQUFJLFNBQVUsV0FBWSw2QkFFRixXQUFVLHFCQUNuQixvQ0FBVSxXQUEwQiwyQkFBTSxPQUFPLFVBRXpDLGNBQU0sTUFBRSxHQUFJLEdBQUksY0FBTSxNQUFPO0FBQ2pDLHdCQUNMLGdCQUFhLHdDQUFJLEtBQVEsU0FDdkIsZ0JBQUssbUNBQUssc0JBQW9CLEtBQU0sTUFBTSxLQUlqRDtjQVArQixDQUZsQyxFQVVFLGdCQUFnQix5Q0FBRyxPQUNuQixnQkFBYSw0Q0FBQyxnQkFBSyxtQ0FBbUIscUJBRzNDLFNBZmMsRUFnQmYsZ0JBQVMsb0NBQ0EsT0FDTCw4QkFBSyxjQUFXLFVBQVMsV0FBSSw4QkFBSyxVQUFVLFdBQVEsV0FDbkQsV0FHTSxZQUFhLFFBQ2xCLGdCQUFhLDRDQUFDLGdCQUFLLG1DQUFHLElBQVcsY0FFcEMsU0FDRCxnQkFBYSw0Q0FBQyxnQkFBSyxtQ0FBbUIscUJBQXlCLFFBQy9ELGdCQUFhLDRDQUFDLGdCQUFLLG1DQUFxQix1QkFBMkIsVUFDbkUsZ0JBQWEsNENBQUMsZ0JBQUssbUNBQXdCLDBCQUF5QixRQUNwRSxnQkFBZ0IseUNBQUcsT0FDbkIsZ0JBQWEsNENBQUMsOEJBQUUsT0FBUSxTQUFNLEtBQW1CLG1CQUFLLE1BQUksT0FJOUQsV0FDQSw4QkFBSSxTQUFVLFdBQVksZUFDeEIsOEJBQUcsUUFBVSxXQUFZLGVBQ3ZCLDhCQUFHLFFBQVUsV0FBVyxjQUN0QixnQkFBSyxtQ0FBVSxXQUFXLFlBQUcsSUFBVSxhQUNwQyxRQUNMLDhCQUFHLFFBQVUsV0FBVyxjQUN0QixnQkFBSyxtQ0FBVSxXQUFXLFlBQUcsSUFBVSxhQVc5RDs7OztZQS9GK0I7O0FBSGhDLHVEQUFrQixRQUFFO0FBQ0wsb0JBQ2I7RUFGUyxJQW9HWDttQkFBdUIsUzs7Ozs7Ozs7Ozs7OztBQzFIdkI7Ozs7OztTQUFvQixnQzs7Ozs7Ozs7Ozs7Ozs7QUNDcEI7Ozs7Ozs7Ozs7OztLQUNROzs7Ozs7Ozs7Ozs7QUFDSixpQkFBYSxZQUFHLENBQUssS0FBTSxNQUFRLFVBQWtCLG9CQUFnQixnQkFBSyxLQUFNLE1BQVcsa0JBQVEsS0FBTSxNQUFZLFlBQUk7QUFFbEgsb0JBQ0wsOEJBQUksU0FBVSxXQUFZLGFBQ25CLEtBQU0sTUFNbkI7Ozs7Ozs7bUJBQXdCLFU7Ozs7Ozs7Ozs7Ozs7QUNkUzs7OztBQUNROzs7O0FBR3pDOzs7Ozs7U0FBcUI7U0FBVTtTQUNSOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xpQjs7OztBQUNFOzs7O0FBRWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3pCLEtBQVksU0FBVSxvQkFBbUI7QUFnQnpDOzs7QUFJRSx1QkFBaUI7OztpR0FDSDs7QUFDUixlQUFNLFFBQUc7QUFDSCx1QkFDVDtXQUhEO0FBSUksZUFBZSxpQkFBTyxNQUFlLGVBQVc7QUFDaEQsZUFBYSxlQUFPLE1BQWEsYUFHekI7Ozs7Ozt3Q0FBRTtBQUNWLGtCQUFTLFNBQUM7QUFDSiwyQkFBRSxDQUFLLEtBQU0sTUFJYjs7Ozs7c0NBQUUsR0FHa0M7Ozs7QUFDM0MsaUJBQUMsQ0FBYSw0QkFBSyxLQUFTLFVBQUcsRUFBUzs7QUFFckMsc0JBQVMsU0FBQztBQUNKLCtCQUtHO29CQVB1Qzs7Ozs7O0FBUWhELG9CQUFpQixpQkFBUSxTQUFNLEtBR25COzs7OztBQUNaLG9CQUFvQixvQkFBUSxTQUFNLEtBR3BDOzs7O2tDQUNFOzs7MEJBQTJCLEtBQU07aUJBQXRCO2lCQUFTOztBQUVuQixvQkFDTCw4QkFBSSxTQUFJO0FBQWUsNEJBQVMsV0FBVTtrQkFBN0IsRUFBcUMsU0FBTSxLQUFnQixnQkFBVSxXQUFXLFlBQVUsV0FBVyxhQUFPLE1BQ3ZILDhCQUFLLFVBQVUsV0FBa0IscUJBQzFCLEtBQU0sTUFBTyxZQUFDLDhCQUFLLFVBQVUsV0FDN0Isc0JBRUQsS0FBTSxNQUFhLFlBQ3JCLDhCQUFJLFNBQVUsV0FBUSxVQUFXLFNBQXdCLHdCQUFtQixtQkFDMUUsOEJBQUcsWUFDSSxLQUFNLE1BUTFCOzs7O1lBM0QrQjs7QUFIaEMsdURBQWtCLFFBQUU7QUFDTCxvQkFDYjtFQUZTLElBZ0VYO21CQUF1QixTOzs7Ozs7Ozs7Ozs7dUJDakZpQyxRQUFvQjtBQUMxRSxTQUFRLE9BQVEsTUFBVztBQUUzQixZQUFXLFFBQVEsTUFBRztBQUNqQixhQUFLLFNBQVk7QUFDWixvQkFDUCxLQUZxQjs7QUFHbEIsZ0JBQU8sS0FDWjs7QUFDSyxZQUNQOzs7Ozs7O0FDVkQ7QUFDQSxtQkFBa0Isb1U7Ozs7Ozs7Ozs7OztBQ0RPOzs7Ozs7QUFDekIsS0FBWSxTQUFVLG9CQUFtQjtBQU16Qyx1QkFBbUM7QUFDMUIsWUFDTCw4QkFBRyxtQkFFYSxNQUFTLGFBQ2pCLFdBQ0EsOEJBQUksU0FBVSxXQUFRLE9BQWtCLG9CQUFPLE1BQ2hELDRCQUNtQixhQUFNLE1BQVMsVUFBRTtBQUMxQixvQkFBUSxPQU83QjtNQVJpQixDQUpUOzttQkFZbUIsYTs7Ozs7Ozs7Ozs7O0FDdkJGOzs7Ozs7QUFDekIsS0FBWSxTQUFVLG9CQUFtQjtBQUt6QywwQkFBc0M7QUFDN0IsWUFDTCw4QkFBRyxRQUFVLFdBQVEsT0FJekI7O21CQUE4QixnQjs7Ozs7Ozs7Ozs7O0FDWFg7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RNOzs7O0FBQ1U7Ozs7QUFDbkMsS0FBWSxTQUFVLG9CQUFjO0FBT3BDLGVBQTJCO0FBQ2xCLFlBQ0wsOEJBQUcsUUFBVSxXQUFRLE9BQWMsZ0JBQ2pDLGdCQUFLLG1DQUFVLFdBQVEsT0FBUyxTQUFHLElBQU8sTUFBSSxNQUtwRDs7bUJBQW1CLEs7Ozs7OztBQ2pCbkI7QUFDQSxtQkFBa0IsbUQ7Ozs7OztBQ0RsQjtBQUNBLG1CQUFrQix1VTs7Ozs7Ozs7Ozs7O0FDQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEaUI7Ozs7QUFFZ0I7Ozs7QUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzFDLEtBQVksU0FBVSxvQkFBa0I7QUFLeEM7Ozs7Ozs7Ozs7OztBQUVXLG9CQUNMLDhCQUFJLFNBQVUsV0FBVyxZQUFVLFdBQVcsY0FDNUMsZ0JBQVUseUNBQ1IsOEJBQUUsV0FLWDs7OztZQVRPOztBQUpSLHVEQUFrQixRQUFFO0FBQ0wsb0JBQ2I7RUFGUyxJQWVYO21CQUF1QixTOzs7Ozs7QUNyQnZCO0FBQ0EsbUJBQWtCLDZCOzs7Ozs7Ozs7Ozs7QUNEWDs7S0FBdUI7O0FBQ3ZCOztLQUVQOzs7O21CQUFxQixPQUFPLE9BQUcsSUFBTSxNQUFlLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGQ7Ozs7QUFHdEM7Ozs7d0JBSUM7QUFDTyxZQUFTLHVCQUFXLGlCQUFtQix1QkFBRSxFQUFRLFFBQVEsUUFBTSxNQU92RTs7Ozs7O2tCQUE0QjtBQUNwQixZQUFTLHVCQUFXLGlCQUFhLGlCQUFFLEVBQVEsUUFBUSxRQUFNLE1BT2pFOzs7Ozs7b0JBQThCO0FBQ3RCLFlBQVMsdUJBQVcsaUJBQWUsbUJBQUUsRUFBUSxRQUFRLFFBQU0sTUFHbkU7O3dCQUFtQztBQUMzQixZQUFTLHVCQUFXLGlCQUFNLHVCQUdsQzs7c0JBQWlDO0FBQ3pCLFlBQVMsdUJBQVcsaUJBQU0scUJBVWxDOztzQkFBa0MsUUFBbUI7QUFDM0MsNEJBQVcsaUJBQU0sd0JBQStCLHNCQUFFLEVBQVEsUUFBTyxPQUczRTs7cUJBQTZCO0FBQ3JCLG1DQUFvQixpQkFBTSxtQkFBYSxJQUFFO0FBQ3ZDLGlCQUlWO01BTGlCOzs7QUFNVCxtQ0FBb0IsaUJBQW1CLHVCQUFFO0FBQ3ZDLGlCQUVUO01BSGdCOzs7Ozs7Ozs7Ozs7OztBQ3JEUTs7QUFDOEI7Ozs7QUFDNUI7Ozs7OztBQWtCM0Isc0JBQXVDO0FBQzdCLGVBQVE7QUFDVixhQUFPO0FBQ0Ysa0JBR1U7RUFOSDs7QUFPcEIsS0FBa0IscUNBQW1DOzBCQUNXLE9BQU8sT0FBRyxJQUFnQixnQkFBa0I7O1NBQTlGO1NBQU07U0FBYTtTQUFVO1NBQVk7O0FBQ3JELFNBQWdCLGVBQW1CO0FBRWhDLFNBQVU7QUFDTCxnQkFBQztBQUNHLHVCQUVYO1dBSmM7O0FBTVosU0FBUSxRQUFFO0FBQ0Msc0JBQU8sU0FDcEI7O0FBRUUsU0FBYSxhQUFFO0FBQ0osc0JBQVksY0FHUTs7O0FBakI5QixTQWtCTSxXQUFXLFVBQVUsV0FBVztBQUN4QyxhQUFlO0FBQ2YsYUFBUTtBQUVMLGFBQVMsYUFBWSxRQUFFO0FBQ2IsMkJBQXFCO0FBQzVCLG9CQUFPLEtBQVUsVUFDakI7Z0JBQUU7QUFDSywyQkFBc0M7QUFDN0Msb0JBQXFCLDZCQUFNO0FBRTVCLGlCQUFTLGFBQWtCLGNBQUU7QUFDdkIseUJBQUssS0FFZjs7O0FBRVcsc0JBQVEsVUFBRztBQUNQLDZCQUFhO0FBQ0ksOENBQ2hDO1dBbkJ5QztBQXFCOUIsc0JBQUssT0FDbEI7TUF0QkU7QUF3QkEsU0FBTyxXQUFjO0FBQ1Ysc0JBQVEsVUFBRztBQUNVLDhDQUVsQztXQUp5Qjs7QUFNcEIsWUFPUjtFQXhEcUI7Ozs7O2tCQXdEa0I7U0FBUyxnRUFBcUI7O0FBQ2hFLFNBQVEsUUFBVSxVQUFFO0FBQ2YsZ0JBQU0scUJBQ2I7O0FBRUssWUFBTSxNQUFRLFNBQWMsYUFBVSxVQUNyQztBQUNBLGFBQVMsU0FBTyxXQUFTO0FBQ3BCLG9CQUFTLFNBQU8sT0FBSztBQUN0QixxQkFBQyxDQUFTLFNBQUksSUFBRTtBQUNYLDRCQUFRLFFBQU8sT0FDdEI7O0FBRUssd0JBQUMsRUFBTSxZQUFXLFdBRTNCO2NBUGlDLEVBREo7O0FBVXhCLGdCQUFDLEVBQU0sTUFBSSxJQUFXLFdBdUJsQztNQWxDa0I7O21CQWtDSSxROzs7Ozs7QUMzSHRCLGlEOzs7Ozs7Ozs7Ozs7Ozs7Z0JDQXFDO0FBQ2hDLFNBQVEsUUFBUSxRQUFVLGNBQUssQ0FBRzs7QUFDbkMsaUJBQU0sS0FBRyxJQUFVLE9BQVU7QUFDN0IsaUJBQVcsVUFBVyxXQUFLO0FBQzNCLGlCQUFpQixnQkFBa0Isa0JBQUs7QUFDeEMsaUJBQXdCLHNDQUFzQjtBQUV4QyxvQkFBZSwyQkFBaUI7QUFDOUIsd0JBQW1CLHFCQUMxQjtjQUZ1QjtBQUl4QixpQkFBVSxTQUFXLFNBQWMsY0FBVTtBQUV2QyxvQkFBYSxhQUFRLE9BQVUseUJBQTZCO0FBQzVELG9CQUFhLGFBQUssTUFBVTtBQUMxQixzQkFBSyxLQUFZLFlBQVE7QUFFM0I7b0JBQUMsSUFBVztBQUNWLDRCQUFPO0FBQ0gsa0NBQUssS0FBWSxZQUFTLFNBQWUsZUFBVTtBQUVwRCxpQ0FBQyxFQUFNLE1BQVEsT0FJN0I7c0JBUHFCO2tCQURROzthQWhCVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEUDs7OztBQUdsQzs7OzsyQkFBc0M7QUFDOUIsWUFBTyxxQkFBVyxpQkFBYSxzQ0FDdEM7Ozs7Ozs7Ozs7Ozs7QUNKMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEWTs7OztBQUNIOztBQUNtQjs7OztBQUNNOzs7O0FBQ0U7O0FBQ0o7Ozs7QUFDckI7Ozs7QUFDaUI7Ozs7QUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzFDLEtBQVksU0FBVSxvQkFBdUI7QUFZN0M7Ozs7Ozs7Ozs7OztBQUdRLGtCQUFNLE1BR047Ozs7O0FBQ0osaUJBQVcsVUFBTyxLQUFNLE1BQVEsUUFBSyxLQUFLLFNBQVksVUFBTyxPQUFRO0FBQ3JFLGlCQUFZLFdBQU8sS0FBTSxNQUFRLFFBQUssS0FBUyxXQUFPLEtBQU0sTUFBUSxRQUFLLEtBQVMsV0FBTztBQUN6RixpQkFBWSxXQUFPLEtBQU0sTUFBUSxRQUEwQiw0QkFBTyxLQUFNLE1BQVEsUUFBMEIsMEJBQVMsV0FBWTtBQUV4SCxvQkFDTCxnQkFBYSx3Q0FBVSxXQUFVLGFBQy9CLGdCQUFnQiwyQ0FBUSxTQUFVLFNBQVMsVUFBYyxhQUN6RCxnQkFBVSxxQ0FBUSxTQUFPLFFBQ3ZCLGdCQUFlLDBDQUNNLDhCQUNSLGFBQ1gsYUFDRiw4QkFBSSxTQUFVLFdBQVUsYUFDakIsS0FBTSxNQU10Qjs7OztZQXhCa0I7O0FBTG5CLHNEQUFrQixRQUFFO0FBQ0wsb0JBQ2I7RUFGUyxJQStCWDttQkFBc0I7WUFDVjtBQUNLLHdCQUFPLE1BQVcsV0FBYztBQUN0QyxrQkFBTyxNQUFRO0FBQ2Ysa0JBQU8sTUFDZDs7RUFKTyxFQUtULEVBQWtCLDZDQUNuQiwrQkFBZ0IsUzs7Ozs7Ozs7Ozs7O0FDdkRhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRFU7Ozs7QUFDTDs7QUFDcUI7Ozs7QUFDeUI7O0FBQ3ZDOzs7O0FBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMUIsS0FBWSxTQUFVLG9CQUEwQjtBQUtoRDs7O0FBRUUsOEJBQWlCOzs7d0dBQ0g7O0FBQ1IsZUFBTSxRQUFHO0FBQ1Usb0NBSVA7V0FOaEI7Ozs7Ozs7QUFPSSxrQkFBUyxTQUFDO0FBQ1Msd0NBQUUsQ0FBSyxLQUFNLE1BSWhDOzs7Ozs7QUFDSixpQkFBWSxXQUFPLEtBQU0sTUFBUztBQUNsQyxpQkFBVyxVQUFPLEtBQU0sTUFBUSxVQUFPLEtBQU0sTUFBUSxVQUFVO0FBRXhELG9CQUNMLDhCQUFJLFNBQVUsV0FBVyxjQUN2QixnQkFBVSxxQ0FBUSxTQUFPLE1BQVUsV0FBVyxjQUM1Qyw4QkFBSSxhQUNGLGdCQUFLLGdDQUFHLElBQWMsZUFDdEIsOEJBQUksU0FBVSxXQUFXLGNBQ3ZCLDhCQUFLLFVBQVUsV0FBTSxTQUNqQixTQUNOLDhCQUFJLFNBQVUsV0FBWSxlQUVYLFdBQ1QsZ0JBQVMsb0NBQ0YsT0FBTyxRQUNMLE9BQ0wsOEJBQUssY0FBVyxVQUFTLFdBQUksOEJBQUssVUFBVSxXQUFvQix1QkFDL0QsV0FFSCxnQkFBYSw0Q0FBQyxnQkFBSyxtQ0FBRyxJQUFJLE9BQStCLGNBQ3pELGdCQUFhLDRDQUFDLGdCQUFLLG1DQUFxQix1QkFBMkIsVUFDbkUsZ0JBQWEsNENBQUMsZ0JBQUssbUNBQXdCLDBCQUF5QixRQUNwRSxnQkFBZ0IseUNBQUcsT0FDbkIsZ0JBQWEsNENBQUMsOEJBQUUsT0FBSyxNQUFVLGFBRS9CLFVBQ0EsOEJBQUcsUUFBVSxXQUFZLGVBQ3ZCLDhCQUFHLFlBQ0QsZ0JBQUssbUNBQUcsSUFBVSxhQUNmLFFBQ0wsOEJBQUcsWUFDRCxnQkFBSyxtQ0FBRyxJQUFVLGFBV3pDOzs7O1lBM0RzQzs7QUFIdkMsOERBQWtCLFFBQUU7QUFDTCxvQkFDYjtFQUZTLElBZ0VYO21CQUE4QixnQjs7Ozs7O0FDeEU5QjtBQUNBLG1CQUFrQiwrSTs7Ozs7Ozs7Ozs7O0FDQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEVzs7OztBQUNMOztBQUNHOzs7O0FBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMxQyxLQUFZLFNBQVUsb0JBQXdCO0FBYTlDOzs7QUFFRSw2QkFBaUIsT0FDZjs7O2tHQUdlOzs7Ozs2Q0FHWDs7OzswQkFDcUMsS0FBTTtpQkFBNUI7aUJBQWU7O0FBRWxDLCtCQUFrQjtBQUNQLDRCQUFHO0FBQ0osMkJBQ1Q7Y0FIYyxDQUZUO0FBT0sseUJBQVEsa0JBQU0sTUFBVztBQUNsQyxxQkFBWTtBQUVaLDhCQUFpQixLQUFRLFFBQU8saUJBQU0sTUFBTztBQUN4Qyx5QkFBSyxLQUFLLFNBQWlCO0FBQ3BCLG9DQUFRO0FBQ1YsZ0NBRVIsS0FKZ0M7O2tCQURELENBQXZCO0FBT1AscUJBQU8sT0FBTyxTQUFLLEdBQUU7QUFDWCxpQ0FBVSxZQUFZO0FBQ3RCLGlDQUFTLFdBRXRCOztjQWRrQjtBQWdCcEIsMERBQ0ssUUFBVSxXQUFnQixtQkFFZCxZQUFJLGNBQU0sTUFBTztBQUNuQix3QkFDTCw4QkFBRyxRQUFJLEtBQVEsT0FBVSxXQUFPLFVBQWdCLFlBQVUsWUFBYyxjQUF3Qix3QkFDOUYsZ0JBQUssbUNBQUcsSUFBTSxLQUFNLFFBQ2xCLGdCQUFLLGdDQUFLLE1BQUssSUFBVSxXQUFPLFFBQUssTUFBTSxLQU94RDtjQVhxQixDQUZwQixDQURhO0FBZ0JmLHlEQUNLLFFBQVUsV0FBZSxrQkFFYixZQUFZLFlBQVcsV0FBUSxRQUFJLGNBQU0sTUFBTztBQUNsRCx3QkFDTCw4QkFBRyxRQUFJLEtBQVEsT0FBVSxXQUFPLFVBQWdCLFlBQVMsV0FBYSxhQUF1Qix1QkFDM0YsZ0JBQUssbUNBQUcsSUFBTSxLQUFNLFFBQU0sS0FNckM7Y0FUb0QsQ0FGbkQsQ0FEWTtBQWNQLG9CQUNMLDhCQUFJLFNBQVUsV0FBZSxrQkFDakIsVUFLakI7Ozs7WUF0RXFDOztBQUh0Qyw2REFBa0IsUUFBRTtBQUNMLG9CQUNiO0VBRlMsSUEyRVg7bUJBQTZCLGU7Ozs7OztBQ3pGN0I7QUFDQSxtQkFBa0IsdWlCOzs7Ozs7Ozs7OztBQ0RsQixjQUNFO0FBQ1csZ0JBQVM7QUFDUCxrQkFBSTtBQUNYLFdBQWtCO0FBQ2YsZUFDTDtBQUNXLG9CQUFlO0FBQ2Isc0JBQVE7QUFDZixlQUNMO01BTE0sRUFNUDtBQUNXLG9CQUFXO0FBQ1Qsc0JBQVE7QUFDZixlQUNMO1FBQ0Q7QUFDVyxvQkFBaUI7QUFDZixzQkFBUTtBQUNmLGVBR1Q7O0VBdEJXLEVBdUJaO0FBQ1csZ0JBQVM7QUFDUCxrQkFBSTtBQUNYLFdBQWtCO0FBQ2YsZUFDTDtBQUNXLG9CQUFlO0FBQ2Isc0JBQVE7QUFDZixlQWtCWjtNQXRCYTtHQTNCRjttQkFpRFMsTTs7Ozs7Ozs7Ozs7Ozs7QUNqRG9COzs7O0FBQ007Ozs7QUFDeEI7Ozs7Ozs7Ozs7OztBQUV0QixLQUFrQixlQVVsQjs7S0FDUTs7Ozs7Ozs7Ozs7a0NBQ0U7aUJBQWEsWUFBTyxLQUFNOztBQUV6QixvQkFFRCxZQUNBLDhCQUFJLFNBQVUsV0FBb0IscUJBQWEsYUFDeEMsS0FBTSxNQUVkLFlBQ0MsOEJBQUksU0FBVSxXQUFtQixzQkFBTSxLQUFNLE1BR3REOzs7Ozs7O0FBRUQsNkJBQXFDO0FBQ25DLFNBQW9CLGlCQUFZLFVBQVUsVUFBTyxTQUFLO0FBQ3RELFNBQVEsT0FBVTtBQUVmLFNBQWdCLGdCQUFFO0FBQ2YsZ0JBQUksaUJBQUssS0FBZSxnQkFBRSxDQUFRLFNBQWU7QUFDbEQsYUFBSyxLQUFNLFNBQUksQ0FBZSxlQUFrQjtBQUM3QyxrQkFBUyxRQUFPLEtBQU0sZ0JBQ3RCLGFBRitDO2dCQUU3QztBQUNGLGtCQUFNLFFBQU8sS0FBTSxTQUUxQjs7O0FBRUcsVUFBVSxzQkFDTDtnQkFBYSxLQUFXO01BQW5CLENBRFksQ0FFcEI7Z0JBQWEsS0FBVztNQUFuQixFQUNKLEtBQUs7QUFFTixZQUNQOztBQUVELG9DQUEyQztTQUM1QixRQUF3QixlQUEvQjtTQUFvQjs7QUFFdkIsU0FBQyxPQUFnQixjQUFpQixhQUFFO0FBQzdCLGtCQUFLLEtBQVUsWUFDbkI7WUFBRTtBQUNFLGtCQUFLLEtBQWdCLGdCQUM5Qjs7QUFFRSxTQUFDLE9BQVksVUFBaUI7QUFDdkIsa0JBQU0sUUFDVixNQUY2QjtZQUUzQjtBQUNFLGtCQUFNLFFBSWxCOzs7bUJBQTZCLCtCQUNULG9CQUVuQiwyQkFBYyxjOzs7Ozs7QUN0RWYsZ0Q7Ozs7OztBQ0FBO0FBQ0EsbUJBQWtCLDJCOzs7Ozs7OztBQ0RaLFFBQVE7QUFDUixXQUFtQjtBQUVYLHlDQUFVLFdBQUk7QUFDakIsNkNBQVUsVUFBbUI7QUFDaEMsZ0JBQUssTUFBVSxvQkFBb0IsS0FHMUM7VUFKc0I7TUFKTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBWCxRQUFRO0FBQ1IsV0FBSztBQUVHLHlDQUFVLFdBQUk7QUFDakIsNkNBQVUsVUFBbUI7QUFDaEMsZ0JBQUssTUFBVSxvQkFBcUIsS0FHM0M7VUFKc0I7TUFKTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVgsUUFBUTtBQUNSLFdBQVU7QUFFRix5Q0FBVSxXQUFJO0FBQ2pCLDZDQUFVLFVBQW1CO0FBQ2hDLGdCQUFLLE1BQVUsb0JBQW9CLEtBRzFDO1VBSnNCO01BSk47Ozs7Ozs7Ozs7O0FDQVgsUUFBUTtBQUNSLFdBQVk7QUFFSix5Q0FBVSxXQUFJO0FBQ2pCLDZDQUFVLFVBQW1CO0FBQ2hDLGdCQUFLLE1BQVUsb0JBQXdCLEtBRzlDO1VBSnNCO01BSk47Ozs7Ozs7Ozs7Ozs7QUNBWCxRQUFRO0FBQ1IsV0FBZTtBQUVQLHlDQUFVLFdBQUk7QUFDakIsNkNBQVUsVUFBbUI7QUFDaEMsZ0JBQUssTUFBVSxvQkFBeUIsS0FHL0M7VUFKc0I7TUFKTjs7Ozs7Ozs7Ozs7Ozs7O0FDQVgsUUFBUTtBQUNSLFdBQW1CO0FBRVgseUNBQVUsV0FBSTtBQUNqQiw2Q0FBVSxVQUFtQjtBQUNoQyxnQkFBSyxNQUFVLG9CQUE4QixLQUdwRDtVQUpzQjtNQUpOOzs7Ozs7Ozs7OztBQ0FYLFFBQVE7QUFDUixXQUFVO0FBRUYseUNBQVUsV0FBSTtBQUNqQiw2Q0FBVSxVQUFtQjtBQUNoQyxnQkFBSyxNQUFVLG9CQUFvQixLQUcxQztVQUpzQjtNQUpOOzs7Ozs7Ozs7O0FDQVgsUUFBUTtBQUNSLFdBQVU7QUFFRix5Q0FBVSxXQUFJO0FBQ2pCLDZDQUFVLFVBQW1CO0FBQ2hDLGdCQUFLLE1BQVUsb0JBQW9CLEtBRzFDO1VBSnNCO01BSk47Ozs7Ozs7Ozs7QUNBWCxRQUFRO0FBQ1IsV0FBUztBQUVELHlDQUFVLFdBQUk7QUFDakIsNkNBQVUsVUFBbUI7QUFDaEMsZ0JBQUssTUFBVSxvQkFBbUIsS0FHekM7VUFKc0I7TUFKTjs7Ozs7Ozs7Ozs7Ozs7QUNBWCxRQUFRO0FBQ1IsV0FBYztBQUVOLHlDQUFVLFdBQUk7QUFDakIsOENBQVUsVUFBbUI7QUFDaEMsZ0JBQUssTUFBVSxvQkFBd0IsS0FHOUM7VUFKc0I7TUFKTjs7Ozs7Ozs7Ozs7OztBQ0FYLFFBQVE7QUFDUixXQUFXO0FBRUgseUNBQVUsV0FBSTtBQUNqQiw4Q0FBVSxVQUFtQjtBQUNoQyxnQkFBSyxNQUFVLG9CQUFxQixLQUczQztVQUpzQjtNQUpOOzs7Ozs7Ozs7OztBQ0FYLFFBQVE7QUFDUixXQUFTO0FBRUQseUNBQVUsV0FBSTtBQUNqQiw4Q0FBVSxVQUFtQjtBQUNoQyxnQkFBSyxNQUFVLG9CQUF5QixLQUcvQztVQUpzQjtNQUpOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBWCxRQUFRO0FBQ1IsV0FBUztBQUVELHlDQUFVLFdBQUk7QUFDakIsOENBQVUsVUFBbUI7QUFDaEMsZ0JBQUssTUFBVSxvQkFBeUIsS0FHL0M7VUFKc0I7TUFKTjs7Ozs7Ozs7OztBQ0FYLFFBQVE7QUFDUixXQUFhO0FBRUwseUNBQVUsV0FBSTtBQUNqQiw4Q0FBVSxVQUFtQjtBQUNoQyxnQkFBSyxNQUFVLG9CQUFxQixLQUczQztVQUpzQjtNQUpOOzs7Ozs7Ozs7Ozs7QUNBWCxRQUFRO0FBQ1IsV0FBbUI7QUFFWCx5Q0FBVSxXQUFJO0FBQ2pCLDhDQUFVLFVBQW1CO0FBQ2hDLGdCQUFLLE1BQVUsb0JBQTJCLEtBR2pEO1VBSnNCO01BSk47Ozs7Ozs7Ozs7O0FDQVgsUUFBUTtBQUNSLFdBQUs7QUFFRyx5Q0FBVSxXQUFJO0FBQ2pCLDhDQUFVLFVBQW1CO0FBQ2hDLGdCQUFLLE1BQVUsb0JBQXFCLEtBRzNDO1VBSnNCO01BSk47Ozs7Ozs7O0FDQWpCLGdEOzs7Ozs7Ozs7Ozs7O0FDQTZEOztBQUM5Qjs7OztBQUNLOzs7O0FBQ0Y7Ozs7QUFDc0I7Ozs7QUFDTTs7OztBQUNGOzs7O0FBQ0o7Ozs7QUFDakI7Ozs7OztBQUV2QyxLQUFTLE1BQVUsY0FFbkI7O0FBQ0UsU0FTYzs7Ozs7Ozs7U0FDVixPQUFhLFdBQWlCO0FBQzNCLGlCQUNRLDRDQUNULElBRUg7QUFFSyxnQkFDUCxNQVJtQztNQUFqQztBQVVBLFNBQUksUUFBa0IsY0FBRTtBQUNwQixpQkFDUSw0Q0FDUyxxQ0FHbEI7WUFBRTtBQUNELGlCQUNRLDRDQUNTLHFDQUNiLG9CQUN3RCx3SEFBYywyQkFBQyxFQUFVLFdBRzNGOztBQUVLLFlBQ1A7Ozs7Ozs7QUNsREQsZ0Q7Ozs7Ozs7Ozs7OztBQ0MwQzs7QUFDSDs7QUFDc0I7O0FBQ3hCOzs7O0FBQzlCOztLQUdNOzs7Ozs7Ozs7O0FBQ2I7U0FBdUIsOERBQUs7U0FBUTs7QUFDL0IsU0FBTyxPQUFLLFNBQW9COztBQUUzQix1QkFBYyxPQUFHLElBQ3JCLDJCQUFPLE9BQU0sYUFBZSxPQUFHLElBQU8sTUFBTyxPQUFNLE9BQUU7QUFDOUMsb0JBQVEsT0FHbEI7VUFKd0IsRUFEVixFQURhOztBQVF6QixTQUFPLE9BQUssU0FBc0Isa0JBQUU7QUFDL0IsZ0JBQU8sT0FBTyxPQUFHLElBQ3JCLDJCQUFPLE9BQU0sTUFBUSxPQUFPLE9BQUcsSUFBTyxNQUFPLE9BQU0sT0FBUSxPQUU5RDs7QUFFSyxZQUNQOztBQUVELEtBQWlCLGNBQWtCLG1DQUFjLE9BQUc7QUFDeEM7QUFDRix1QkFGNEM7QUFHN0M7QUFFUjtFQUx5QyxFQU8xQzttQkFBMEIsWTs7Ozs7Ozs7Ozs7O0FDbkNhOztBQUVoQzs7S0FBOEI7Ozs7OztBQUVyQztTQUE0Qiw4REFBSztTQUFROztBQUNwQyxTQUFPLE9BQUssU0FBeUI7QUFDaEMsZ0JBQU0sTUFBSTtvQkFBTyxFQUFHLE9BQVcsT0FBRyxLQUFTLE9BQU8sT0FBRyxJQUFHLEdBQUUsRUFBUyxTQUFTLFdBQ25GO1VBRG1CLEVBRHNCOztBQUl2QyxTQUFPLE9BQUssU0FBeUI7QUFDOUIsNkNBQVEsU0FBRTtBQUNULHNCQUFNO0FBQ04sc0JBQVEsT0FBUTtBQUNuQixtQkFBUSxPQUFRO0FBQ2xCLGlCQUFRLE9BRWI7YUFQeUM7O0FBU3BDLFlBQ1A7O0FBR0Q7U0FBMkIsOERBQUs7U0FBUTs7QUFDbkMsU0FBTyxPQUFLLFNBQVksUUFBb0Isb0JBQUU7QUFDekMsZ0JBQU8sT0FBTyxPQUFHLElBQU8sT0FBRSxFQUFLLE1BQU8sUUFBUSxPQUNyRDs7QUFFRSxTQUFPLE9BQUssU0FBWSxRQUFxQjtBQUN4QyxnQkFBQztBQUNELG1CQUVQO1dBSmlEOztBQU01QyxZQUNQOztBQUVEO1NBQW9CLDhEQUFLO1NBQVE7O0FBQzVCLFNBQU8sT0FBSyxTQUFrQixjQUFFO0FBQzNCLGdCQUFPLE9BQU8sT0FBRyxJQUFPLE9BQUUsRUFBSyxNQUFPLFFBQVEsT0FDckQ7O0FBRUUsU0FBTyxPQUFLLFNBQW1CO0FBQzFCLGdCQUFDO0FBQ0QsbUJBRVA7V0FKbUM7O0FBTTlCLFlBQ1A7O0FBRUQ7QUFDZTtBQUNEO0FBSWQsaUJBTm1DO0VBQUQsQ0FBbEI7bUJBTVMsVzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEZ0I7Ozs7QUFDSjs7OztBQUdyQzs7Ozs7Ozs7U0FBbUI7U0FFbkI7O1NBQThCLDhEQUFLO1NBQVE7O0FBQ3RDLFNBQU8sT0FBUyxZQUFVLE9BQVMsU0FBVSxVQUFFO0FBQzFDLGdCQUFFLGlCQUFNLE1BQUcsSUFBTyxPQUFRLE9BQVMsU0FDMUM7O0FBRUssWUFHUjs7O1NBQThCLDhEQUFLO1NBQVE7O0FBQ3RDLFNBQUMsQ0FBTyxPQUFTLFlBQVUsT0FBTyxVQUFVLE9BQVMsU0FBRTtBQUNsRCxnQkFBRSxpQkFBTyxPQUFHLElBQ2hCLDJCQUFPLE9BQVMsU0FBUSxPQUUzQjs7QUFFSyxZQUdSOzs7U0FBNkIsOERBQUcsRUFBTSxNQUFFLEVBQU0sTUFBZTtTQUFROztBQUM1RCxhQUFPLE9BQVE7QUFDcEIsY0FBd0I7QUFDaEIsMkJBQWMsT0FBRyxJQUFPLE9BQUU7QUFDcEIsNkJBQ1Y7Y0FGVztjQUlTO0FBQ2hCLDJCQUFjLE9BQUcsSUFBTyxPQUFFO0FBQ3BCLDZCQUFPO0FBQ2IsdUJBQVEsT0FDWjtjQUhXLEVBRGY7Y0FNd0I7QUFDaEIsMkJBQWMsT0FBRyxJQUFPLE9BQUU7QUFDcEIsNkJBQU87QUFDYix1QkFBUSxPQUNaO2NBSFcsRUFEZjs7QUFPUSxvQkFFWCxNQUhHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NDMUNzQyw4REFBSztTQUFRO1NBQ3RDLFFBQVM7O0FBRXJCLFNBQU8sT0FBRTtBQUNGLDZDQUFRLFNBQVEsT0FDekI7O0FBRUssWUFDUCxNQVBPOzs7Ozs7Ozs7Ozs7OztBQ0ZjOzs7Ozs7OztBQVN0QixLQUFzQjtTQUFTLDhEQUFHO0FBQ3RCLHFCQUFPO0FBQ04sc0JBQU07QUFDUixvQkFBRztBQUNULGNBQ0o7O1NBQVE7U0FBTzs7QUFDWCxTQUFDLENBQU8sT0FBVTtBQUNiLHVCQUFjLE9BQUcsSUFBTyxPQUFFO0FBQ3BCLHlCQUVSO1VBSFMsRUFEUTtZQUlmO0FBQ0EsaUNBQVMsY0FBYyxPQUFHLElBQU8sT0FBRTtBQUM3Qix5QkFBTztBQUNkLGtCQUFPLFFBRUwsaUJBQU0sTUFBTSxNQUFJLEtBQVEsT0FBUyxTQUFRLFVBQ3BDLE9BQVMsU0FBTztBQUN0QixtQkFBUSxPQUFTLFNBQU07QUFDdkIsbUJBQVEsT0FBUyxTQUNyQjtVQVJvQixDQUFkLEVBUUgsaUJBSVQ7O0VBdkJ5Qjs7U0F1QmUsOERBQUs7U0FBUTs7QUFDaEQsU0FBTyxPQUFZLFlBQ2Q7a0NBQW9DLE9BQXlCO2FBQXZEO2FBQU87YUFBSzthQUFTOztBQUNqQyxhQUFtQixnQkFBUSxRQUN2QixLQUFNLENBQU0sU0FBUyxNQUFNLE1BQVMsWUFBUyxNQUFNLE1BQVMsU0FBUSxVQUFNLEtBQzFFLEtBQU0sQ0FBTSxTQUFTLE1BQU0sTUFBSSxPQUFlLGNBQU07QUFFeEQsYUFBb0IsaUJBQW1CLGlCQUFjLGVBQVEsUUFBUTtBQUVyRSxhQUFtQix3QkFDZjtBQUVFLHdDQUFPLE9BSVQ7VUFQdUIsdUJBT25CLE9BQWMsV0FDbkI7QUFFRyxnQkFBTyxPQUFPLE9BQUcsSUFDckIsMkJBQU0sTUFFVDs7QUFFSyxZQUNQOzs7Ozs7Ozs7Ozs7Ozs7QUN6RDREOzs7O0FBQ3RCOztBQUNqQjs7OztBQXNCdEI7Ozs7Ozs7OztBQUNFLGlCQUFjLFdBQXVCLE9BQVM7QUFDM0MsaUJBQUMsT0FBZSxhQUFpQjtBQUM1Qix3QkFBSyxLQUdULFFBSmtDOztpQkFJeEI7aUJBQVEsU0FDaEI7aUJBRHlCO2lCQUFjO2lCQUNoQyxRQUNQO2lCQURpQjs7eUNBQzhCOztpQkFBbkM7aUJBQWE7aUJBQWM7O0FBRTdDLGlCQUFnQjtxQkFBUztxQkFBZ0I7O0FBQ3ZDLHFCQUFlLGNBQVMsT0FBTyxPQUFHLElBQVEsUUFBTztBQUN0QywrQkFBSSxpQkFBSyxLQUFZLGFBQUUsQ0FBYTtBQUU1QyxxQkFBQyxDQUFlLGVBQUU7QUFDUixtQ0FBSSxpQkFBSyxLQUFZLGFBQUUsQ0FBVyxZQUM5Qzs7QUFFSyx3QkFDUDtjQVRtQjtBQVdoQiw2QkFBWTtBQUNWLHVCQUFFO0FBQ0EsMkJBQWE7QUFFbEI7O0FBQ1ksZ0NBQVMsUUFDckI7Y0FOWTtBQVFaLGlCQUFDLE9BQWUsYUFBZ0IsWUFBRTtBQUMzQiw0QkFBVyxTQUFNLE1BQzFCOztBQUVFLGlCQUFDLE9BQWEsV0FBaUIsYUFBRTtBQUM1QiwwQkFBVyxpQkFDbEI7O0FBRUQsaUJBQWEsVUFBUyxTQUFXO0FBRTNCLG9CQUFRLHVCQUFRLFNBQVMsV0FBTyxJQUFLO0FBRXZDLHFCQUFtQixnQkFBaUIsOEJBQVMsVUFBUztBQUN0RCxtQ0FBa0I7QUFDUiwrQkFBZTtBQUNuQiwyQkFBYTtBQUVsQjtrQkFKYztBQU1ULHdCQUFLO0FBQ0QsOEJBQVcsV0FBQyxFQUFNLE1BQWEsYUFBZSxlQUFTLFFBQWdCO0FBQ3pFLDRCQUFDO0FBQ0gsNkJBQU07QUFJYjs7a0JBUHFCO2NBUmQ7d0JBZ0JLO0FBQ0gseUNBQVk7QUFDZCwrQkFBRTtBQUNBLG1DQUFhO0FBQ1A7QUFDTCxvQ0FBTyxNQUFRLFdBQ3JCOztBQUNZLHdDQUFTLFFBQ3JCO3NCQVBnQjtBQVFiLDRCQUFDO0FBQ0gsNkJBQU87QUFDSixnQ0FBRTtBQUNFLHNDQUFPLE1BS3ZCOzs7a0JBakJ5QjtjQUFqQjtVQXhENkI7TUFBVjtFQUFSLEM7Ozs7Ozs7Ozs7OztBQ3hCaUI7O0FBQ1o7Ozs7QUFDd0I7Ozs7QUFDM0I7Ozs7OztBQUV0QixLQUE4Qiw2REFBaUIsT0FBYTtBQUMxRCxnQkFBa0IsTUFBTSxNQUFLLEtBQUs7Z0JBQU8sRUFBUyxrQkFBZSxhQUFHLENBQUc7TUFBbkMsQ0FBMUI7QUFFUCxTQUFDLENBQU0sTUFBRTtBQUNKLGdCQUNQOztBQUVELFNBQVMsTUFBTyxLQUFNLE1BQUssS0FBRyxHQUFPLE9BQU0sTUFBRSxHQUFFLENBQUc7QUFFNUMsWUFDRzs7QUFDSCxlQUFVLFNBQUUsaUJBQUksSUFBaUIsZ0NBQUksSUFBTSxNQUFLLEtBQUcsTUFBTyxLQUFRLFFBQVcsSUFBSztBQUd6Rjs7RUFkZ0M7QUFnQmpDLHFDQUE0QztBQUN2QyxTQUFDLENBQVU7QUFDTixnQkFDUCxHQUZlOztBQUloQixTQUFXLFFBQVcsU0FBUSxRQUFJLElBQVE7QUFDdkMsU0FBQyxDQUFPLE9BQUU7QUFDTCxnQkFDUDs7QUFFRCxTQUFVLE9BQTJCLHlCQUFNLE9BQVM7QUFDcEQsU0FBVSxPQUEyQix5QkFBTSxPQUFTO0FBRTlDLFlBQUM7QUFDRDtBQUdQOzs7QUFFRCxVQUF3QixxQkFBMkI7U0FBckI7U0FBYTs7QUFDekMsU0FBbUIsZ0JBQVEsZ0JBQWEsYUFDbEM7O2lDQUEyQywyQkFBVzs7U0FBaEQ7U0FBUTs7QUFFakIsU0FBQyxPQUFhLFdBQWlCO0FBQzFCLHVCQUFlLE9BQUcsSUFDYiwwQkFBYyxlQUFTLFNBQ2hDO0FBQ08sb0JBQU07QUFDTixvQkFHVjtVQVBlLEVBRG9COztBQVU5QixZQUdSOzttQkFBNkIsZTs7Ozs7O0FDekQ3QixpRDs7Ozs7Ozs7Ozs7OzJCQ0VvRDtBQUNsRCxTQUFZLFNBQWMsWUFBTSxNQUFLO0FBQ3JDLFNBQVUsU0FBSztBQUVULFlBQVE7QUFDWixhQUFTLE1BQVEsTUFBTSxNQUFLLEtBQUc7QUFDL0IsYUFBUyxNQUFRLE1BQU0sTUFBSyxLQUFHO0FBRXpCLGdCQUFLLE9BQ1g7TUFMa0I7QUFPZCxZQUNQOzs7Ozs7Ozs7Ozs7O0FDZE07O0tBRVA7Ozs7Ozs7QUFFSyxpQkFBTyxPQUFLLFNBQVksUUFBNEIsNEJBQUU7QUFDakQsd0JBQVMsU0FBTyxTQUFTLE9BQVMsU0FBTyxPQUNoRDs7QUFFRyxrQkFDTDtVQVBxQztNQUFWO0VBQVIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDQ2YsaUJBQUMsT0FBYSxPQUFhLGlCQUFpQjtBQUN2Qyx3QkFBSyxLQUNaLFFBRmdEOztBQUlqRCw4QkFBbUIsSUFBVztBQUNyQix5QkFBTyxPQUFhLGFBQzNCO2NBRm9DLENBQXRCO0FBSVYsb0JBQVcsV0FBSztBQUNkLHdCQUFLO0FBQ0QsOEJBQU07QUFDUiw0QkFBQztBQUNILDZCQUFNO0FBQ0EsbUNBQVEsT0FBSyxLQUk1Qjs7a0JBUnVCO2NBREs7VUFUUztNQUFWO0VBQVIsQzs7Ozs7Ozs7Ozs7QUNGcEI7QUFDRSxTQUFnQixlQUFLO0FBRWxCLFNBQUMsT0FBb0IsT0FBa0Isc0JBQWlCO0FBQzdDLHdCQUFnQixPQUM3QixrQkFGNEQ7O0FBSXZELFlBR1I7O21CQUFpQyxtQjs7Ozs7Ozs7Ozs7Ozs7O0FDVHhCLHFCQUFLLEtBQU8sT0FHZjs7OztpQkFFQSxDQUNMO1VBUHFDO01BQVY7RUFBUixDOzs7Ozs7QUNBcEI7O0FBRUEsbUNBQWtDLDBCQUEwQiwwQ0FBMEMsZ0JBQWdCLE9BQU8sa0JBQWtCLEVBQUUsYUFBYSxFQUFFLE9BQU8sd0JBQXdCLEVBQUU7O0FBRWpNLHdCQUF1QixtR0FBbUc7O0FBRTFIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWMsMkJBQTJCO0FBQ3pDLGVBQWMsT0FBTztBQUNyQixlQUFjLE1BQU07QUFDcEIsZUFBYyxPQUFPO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYyxPQUFPO0FBQ3JCLGVBQWMsMkJBQTJCO0FBQ3pDLGVBQWMsUUFBUTtBQUN0QixlQUFjLFFBQVE7QUFDdEIsZUFBYyxPQUFPO0FBQ3JCLGVBQWMsT0FBTztBQUNyQixlQUFjLFFBQVE7QUFDdEIsZUFBYyxRQUFRO0FBQ3RCLGVBQWMsUUFBUTtBQUN0QixlQUFjLFNBQVM7QUFDdkIsZUFBYyxTQUFTO0FBQ3ZCLGVBQWMsU0FBUztBQUN2Qjs7QUFFQTtBQUNBLHlFQUF3RTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQSxtRkFBa0Y7QUFDbEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEVBQTJFO0FBQzNFLFVBQVM7QUFDVCxtRUFBa0U7QUFDbEU7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1IQUFrSCxnQ0FBZ0M7QUFDbEo7O0FBRUE7QUFDQSw0R0FBMkcsc0NBQXNDO0FBQ2pKOztBQUVBO0FBQ0EseUdBQXdHLDRCQUE0QjtBQUNwSTs7QUFFQTtBQUNBLG1IQUFrSCxnQ0FBZ0M7QUFDbEo7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgY2FsbGJhY2tzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSlcbiBcdFx0XHRcdGNhbGxiYWNrcy5wdXNoLmFwcGx5KGNhbGxiYWNrcywgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKTtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oY2h1bmtJZHMsIG1vcmVNb2R1bGVzKTtcbiBcdFx0d2hpbGUoY2FsbGJhY2tzLmxlbmd0aClcbiBcdFx0XHRjYWxsYmFja3Muc2hpZnQoKS5jYWxsKG51bGwsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHQvLyBBcnJheSBtZWFucyBcImxvYWRpbmdcIiwgYXJyYXkgY29udGFpbnMgY2FsbGJhY2tzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOjBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQsIGNhbGxiYWNrKSB7XG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApXG4gXHRcdFx0cmV0dXJuIGNhbGxiYWNrLmNhbGwobnVsbCwgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gYW4gYXJyYXkgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZCkge1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXS5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW2NhbGxiYWNrXTtcbiBcdFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gXHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG5cbiBcdFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiO1xuIFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbHQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA3ZmU3Njc2YTViOGJhNTc1NjQ0OVxuICoqLyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5LCBSb3V0ZXIsIG1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuLi9pc29tb3JwaGljL3JvdXRlcydcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBzeW5jSGlzdG9yeVdpdGhTdG9yZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCdcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuLi9pc29tb3JwaGljL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJ1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKClcbmNvbnN0IGhpc3RvcnkgPSBzeW5jSGlzdG9yeVdpdGhTdG9yZShicm93c2VySGlzdG9yeSwgc3RvcmUpXG5cbm1hdGNoKHsgaGlzdG9yeSwgcm91dGVzIH0sIChlcnJvciwgcmVkaXJlY3RMb2NhdGlvbiwgcmVuZGVyUHJvcHMpID0+IHtcbiAgcmVuZGVyKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPFJvdXRlciB7Li4ucmVuZGVyUHJvcHN9IC8+XG4gICAgPC9Qcm92aWRlcj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpXG59KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2VudHJ5L2FwcC50c3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgzNCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbFxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX3JlYWN0X2tpdF9kbGw7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIl9yZWFjdF9raXRfZGxsXCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9yZWFjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2tpdF9kbGxcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg2MDQpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvb3QgZnJvbSAnLi4vY29udGFpbmVycy9Sb290J1xuaW1wb3J0IEFwcE1hc3RlciBmcm9tICcuLi9jb250YWluZXJzL0FwcE1hc3RlcidcbmltcG9ydCBBcHBDb21tb24gZnJvbSAnLi4vY29udGFpbmVycy9BcHBDb21tb24nXG5pbXBvcnQgQ29uc29sZU1hc3RlciBmcm9tICcuLi9jb250YWluZXJzL0NvbnNvbGVNYXN0ZXInXG5pbXBvcnQgeyBSb3V0ZSwgSW5kZXhSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQgKFxuICA8Um91dGUgY29tcG9uZW50PXtSb290fT5cbiAgICA8Um91dGUgY29tcG9uZW50PXtBcHBNYXN0ZXJ9PlxuICAgICAgPFJvdXRlIHsuLi5yZXF1aXJlKCcuL1ZpZXdlcicpfSAvPlxuICAgICAgPFJvdXRlIGNvbXBvbmVudD17QXBwQ29tbW9ufT5cbiAgICAgICAgPFJvdXRlIHsuLi5yZXF1aXJlKCcuL0FwcEhvbWUnKX0gLz5cbiAgICAgICAgPFJvdXRlIHsuLi5yZXF1aXJlKCcuL0Jyb3dzZScpfSAvPlxuICAgICAgICA8Um91dGUgey4uLnJlcXVpcmUoJy4vQm9va0RldGFpbCcpfSAvPlxuICAgICAgICA8Um91dGUgey4uLnJlcXVpcmUoJy4vQ29sbGVjdGlvbnMnKX0gLz5cbiAgICAgICAgPFJvdXRlIHsuLi5yZXF1aXJlKCcuL0NvbGxlY3Rpb25EZXRhaWwnKX0gLz5cbiAgICAgICAgPFJvdXRlIHsuLi5yZXF1aXJlKCcuL1NpZ25pbicpfSAvPlxuICAgICAgICA8Um91dGUgey4uLnJlcXVpcmUoJy4vU2lnbnVwJyl9IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwidXNlclwiIGNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgIDxJbmRleFJlZGlyZWN0IHRvPVwiL3VzZXIvcHJvZmlsZVwiIC8+XG4gICAgICAgICAgPFJvdXRlIHsuLi5yZXF1aXJlKCcuL1NoZWxmJyl9IC8+XG4gICAgICAgICAgPFJvdXRlIHsuLi5yZXF1aXJlKCcuL1ByZWZlcmVuY2UnKX0gLz5cbiAgICAgICAgICA8Um91dGUgey4uLnJlcXVpcmUoJy4vUHJvZmlsZScpfSAvPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgPC9Sb3V0ZT5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiY29uc29sZVwiIGNvbXBvbmVudD17Q29uc29sZU1hc3Rlcn0+XG4gICAgICAgIDxJbmRleFJlZGlyZWN0IHRvPVwiL2NvbnNvbGUvYm9va3NcIiAvPlxuICAgICAgICA8Um91dGUgey4uLnJlcXVpcmUoJy4vTWFuYWdlQm9va3MnKX0gLz5cbiAgICAgICAgPFJvdXRlIHsuLi5yZXF1aXJlKCcuL01hbmFnZVVzZXJzJyl9IC8+XG4gICAgICAgIDxSb3V0ZSB7Li4ucmVxdWlyZSgnLi9BZGRCb29rJyl9IC8+XG4gICAgICAgIDxSb3V0ZSB7Li4ucmVxdWlyZSgnLi9BZGRDb2xsZWN0aW9uJyl9IC8+XG4gICAgICAgIDxSb3V0ZSB7Li4ucmVxdWlyZSgnLi9Ob01hdGNoJyl9IC8+XG4gICAgICA8L1JvdXRlPlxuICAgIDwvUm91dGU+XG4gIDwvUm91dGU+XG4pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvaW5kZXgudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uLCBoaWRlTm90aWZpY2F0aW9uLCBjbG9zZUNvbmZpcm1Nb2RhbCwgdXNlckF1dGgsIGNsb3NlTW9kYWwgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IHsgQWxlcnRzIH0gZnJvbSAnLi4vZWxlbWVudHMvQWxlcnQnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBDb25maXJtTW9kYWwgfSBmcm9tICcuLi9lbGVtZW50cy9Nb2RhbCdcbmltcG9ydCB7IE1vZGFsUGx1cyB9IGZyb20gJy4uL2VsZW1lbnRzL01vZGFsJ1xuXG5pbnRlcmZhY2UgSUFsbFByb3BzIHtcbiAgbm90aWZpY2F0aW9uczogYW55XG4gIGhpZGVOb3RpZmljYXRpb246IGFueVxuICBlcnJvck1lc3NhZ2U6IHN0cmluZ1xuICBzZW5kTm90aWZpY2F0aW9uOiBhbnlcbiAgY29uZmlybU1vZGFsOiBhbnlcbiAgY2xvc2VDb25maXJtTW9kYWw6IGFueVxuICB1c2VyQXV0aDogYW55XG4gIHJvdXRpbmc6IGFueVxuICBzZXNzaW9uOiBhbnlcbiAgbW9kYWw6IGFueVxuICBjbG9zZU1vZGFsOiBhbnlcbn1cblxuY2xhc3MgUm9vdCBleHRlbmRzIENvbXBvbmVudDxJQWxsUHJvcHMsIHt9PiB7XG5cbiAgc3RhdGljIGZldGNoRGF0YSh7IHN0b3JlLCB1c2VyU2Vzc2lvbiB9KSB7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKHVzZXJBdXRoKHVzZXJTZXNzaW9uKSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnN0IGhhc05ld0Vycm9yTXNnID0gdGhpcy5wcm9wcy5lcnJvck1lc3NhZ2UubGVuZ3RoICE9PSBuZXh0UHJvcHMuZXJyb3JNZXNzYWdlLmxlbmd0aFxuICAgIGNvbnN0IHJvdXRlckNoYW5nZWQgPSBuZXh0UHJvcHMucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zLnBhdGhuYW1lICE9PSB0aGlzLnByb3BzLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucy5wYXRobmFtZVxuXG4gICAgaWYgKGhhc05ld0Vycm9yTXNnKSB7XG4gICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oXy5sYXN0KG5leHRQcm9wcy5lcnJvck1lc3NhZ2UpLCAnZXJyb3InKVxuICAgIH1cblxuICAgIGlmIChyb3V0ZXJDaGFuZ2VkKSB7XG4gICAgICAvLyDov5Tlm57pobbpg6hcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDBcblxuICAgICAgLy8g566A5Y2V5p2D6ZmQ6aqM6K+BXG4gICAgICBpZiAobmV4dFByb3BzLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucy5wYXRobmFtZS5pbmRleE9mKCdjb25zb2xlJykgIT09IC0xKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlc3Npb24udXNlci5yb2xlICE9PSAnYWRtaW4nKSB7XG4gICAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCgnLycpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnVzZXJBdXRoKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbmZpcm1Nb2RhbCwgY2xvc2VDb25maXJtTW9kYWwsIG1vZGFsLCBjbG9zZU1vZGFsIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtcm9vdFwiPlxuICAgICAgICA8Q29uZmlybU1vZGFsXG4gICAgICAgICAgb3Blbj17Y29uZmlybU1vZGFsLm9wZW59XG4gICAgICAgICAgdGl0bGU9e2NvbmZpcm1Nb2RhbC50aXRsZX1cbiAgICAgICAgICBvbkNvbmZpcm09e2NvbmZpcm1Nb2RhbC5vbkNvbmZpcm19XG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlQ29uZmlybU1vZGFsfVxuICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgPlxuICAgICAgICAgIHtjb25maXJtTW9kYWwuY29udGVudH1cbiAgICAgICAgPC9Db25maXJtTW9kYWw+XG4gICAgICAgIDxNb2RhbFBsdXNcbiAgICAgICAgICBvcGVuPXttb2RhbC5vcGVufVxuICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XG4gICAgICAgICAgdGl0bGU9e21vZGFsLnRpdGxlfVxuICAgICAgICA+XG4gICAgICAgICAge21vZGFsLmNvbnRlbnR9XG4gICAgICAgIDwvTW9kYWxQbHVzPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5ub3RpZmljYXRpb25zLmZpbHRlcihub3RpID0+IG5vdGkudmlzaWJsZSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8QWxlcnRzXG4gICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXt0aGlzLnByb3BzLmhpZGVOb3RpZmljYXRpb259XG4gICAgICAgICAgICAgIG1lc3NhZ2VzPXt0aGlzLnByb3BzLm5vdGlmaWNhdGlvbnMubWFwKG5vdGkgPT4gKHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBub3RpLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgdHlwZTogbm90aS50eXBlLFxuICAgICAgICAgICAgICAgIHZpc2libGU6IG5vdGkudmlzaWJsZSxcbiAgICAgICAgICAgICAgICBpZDogbm90aS5pZFxuICAgICAgICAgICAgICB9KSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PHt9LCB7fSwgSUFsbFByb3BzPihcbiAgc3RhdGUgPT4gKHtcbiAgICBub3RpZmljYXRpb25zOiBzdGF0ZS5jb21wb25lbnRzLm5vdGlmaWNhdGlvbnMsXG4gICAgZXJyb3JNZXNzYWdlOiBzdGF0ZS5lcnJvck1lc3NhZ2UsXG4gICAgY29uZmlybU1vZGFsOiBzdGF0ZS5jb21wb25lbnRzLmNvbmZpcm1Nb2RhbCxcbiAgICBtb2RhbDogc3RhdGUuY29tcG9uZW50cy5tb2RhbCxcbiAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLFxuICAgIHNlc3Npb246IHN0YXRlLnNlc3Npb24sXG4gIH0pLFxuICB7IHNlbmROb3RpZmljYXRpb24sIGhpZGVOb3RpZmljYXRpb24sIGNsb3NlQ29uZmlybU1vZGFsLCB1c2VyQXV0aCwgY2xvc2VNb2RhbCB9XG4pKFJvb3QpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb250YWluZXJzL1Jvb3QudHN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNDUzKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHsgcmVzZXQgfSBmcm9tICdyZWR1eC1mb3JtJ1xuXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMnXG5leHBvcnQgKiBmcm9tICcuL2RhdGEtZmV0Y2hpbmcnXG5leHBvcnQgKiBmcm9tICcuL2RlcHJlY2F0ZWRBY3Rpb25zJ1xuZXhwb3J0IHsgcmVzZXQgfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvYWN0aW9ucy9pbmRleC50c1xuICoqLyIsImV4cG9ydCB0eXBlIE1zZ1R5cGUgPSAnc3VjY2VzcycgfCAnZXJyb3InIHwgJ3dhcm5pbmcnIHwgJ29uZ29pbmcnXG5leHBvcnQgZnVuY3Rpb24gc2VuZE5vdGlmaWNhdGlvbihtZXNzYWdlOiBzdHJpbmcsIG1zZ1R5cGU6IE1zZ1R5cGUgPSAnc3VjY2VzcycsIHQgPSAyMDAwKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgY29uc3QgaWQgPSBNYXRoLnJhbmRvbSgpLnRvRml4ZWQoOCkuc3Vic3RyKDIpXG5cbiAgICBkaXNwYXRjaChzaG93Tm90aWZpY2F0aW9uKGlkLCBtZXNzYWdlLCBtc2dUeXBlKSlcbiAgICBpZiAodCAhPT0gMCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGhpZGVOb3RpZmljYXRpb24oaWQpKVxuICAgICAgfSwgdClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFNIT1dfTk9USUZJQ0FUSU9OID0gJ1NIT1dfTk9USUZJQ0FUSU9OJ1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24oaWQ6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBtc2dUeXBlOiBNc2dUeXBlID0gJ3N1Y2Nlc3MnKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0hPV19OT1RJRklDQVRJT04sXG4gICAgbWVzc2FnZSxcbiAgICBtc2dUeXBlLFxuICAgIGlkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEhJREVfTk9USUZJQ0FUSU9OID0gJ0hJREVfTk9USUZJQ0FUSU9OJ1xuZXhwb3J0IGZ1bmN0aW9uIGhpZGVOb3RpZmljYXRpb24oaWQ6IHN0cmluZykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEhJREVfTk9USUZJQ0FUSU9OLFxuICAgIGlkXG4gIH1cbn1cblxuLy8gY29uZmlybSBtb2RhbFxuZXhwb3J0IGNvbnN0IE9QRU5fQ09ORklSTV9NT0RBTCA9ICdjb21wb25lbnRzL2NvbmZpcm0tbW9kYWwvT1BFTidcbmV4cG9ydCBjb25zdCBDTE9TRV9DT05GSVJNX01PREFMID0gJ2NvbXBvbmVudHMvY29uZmlybS1tb2RhbC9DTE9TRSdcbmV4cG9ydCB0eXBlIG9wZW5Db25maXJtTW9kYWwgPSB7XG4gIHRpdGxlPzogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xuICBvbkNvbmZpcm06ICgpID0+IHZvaWRcbn1cbmV4cG9ydCBmdW5jdGlvbiBvcGVuQ29uZmlybU1vZGFsKGRhdGE6IG9wZW5Db25maXJtTW9kYWwpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBPUEVOX0NPTkZJUk1fTU9EQUwsXG4gICAgZGF0YVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUNvbmZpcm1Nb2RhbCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDTE9TRV9DT05GSVJNX01PREFMXG4gIH1cbn1cblxuLy8gbW9kYWxcbmV4cG9ydCB0eXBlIG9wZW5Nb2RhbCA9IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBzdWJUaXRsZT86IHN0cmluZ1xuICBjb250ZW50PzogSlNYLkVsZW1lbnRcbn1cbmV4cG9ydCBmdW5jdGlvbiBvcGVuTW9kYWwoZGF0YTogb3Blbk1vZGFsKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ09QRU5fTU9EQUwnLFxuICAgIGRhdGFcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQ0xPU0VfTU9EQUwnXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL2FjdGlvbnMvY29tcG9uZW50cy50c1xuICoqLyIsImV4cG9ydCAqIGZyb20gJy4vYm9vaydcbmV4cG9ydCAqIGZyb20gJy4vdXNlcidcbmV4cG9ydCAqIGZyb20gJy4vdXNlcnMnXG5leHBvcnQgKiBmcm9tICcuL2F1dGhvcidcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL2FjdGlvbnMvZGF0YS1mZXRjaGluZy9pbmRleC50c1xuICoqLyIsImltcG9ydCB7IFNjaGVtYXMgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWFzJ1xuaW1wb3J0IHsgQXBpUm9vdHMgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgeyBDQUxMX0FQSV9PQkogfSBmcm9tICcuLi8uLi9taWRkbGV3YXJlL2FwaSdcbmltcG9ydCB1dGlscyBmcm9tICcuLi8uLi8uLi91dGlscydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IGNvbnN0IEJPT0tTX1JFUVVFU1QgPSAnZGF0YS1mZXRjaGluZy9ib29rcy9SRVFVRVNUJ1xuZXhwb3J0IGNvbnN0IEJPT0tTX1NVQ0NFU1MgPSAnZGF0YS1mZXRjaGluZy9ib29rcy9TVUNDRVNTJ1xuZXhwb3J0IGNvbnN0IEJPT0tTX0ZBSUxVUkUgPSAnZGF0YS1mZXRjaGluZy9ib29rcy9GQUlMVVJFJ1xuZXhwb3J0IHR5cGUgZmV0Y2hCb29rcyA9IHtcbiAgcGFnZT86IG51bWJlclxuICBtZXJnZT86IGJvb2xlYW5cbiAgcT86IHN0cmluZ1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQm9va3Mob3B0aW9ucz86IGZldGNoQm9va3MpIHtcbiAgY29uc3QgZGVmYXVsdENvbmZpZyA9IHsgcGFnZTogMSwgbWVyZ2U6IGZhbHNlIH1cbiAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgb3B0aW9ucyB8fCB7fSlcbiAgY29uc3QgeyBtZXJnZSwgcSB9ID0gbWVyZ2VkT3B0aW9uc1xuICBsZXQgcXVlcnlPcHRpb25zID0gXy5vbWl0KG1lcmdlZE9wdGlvbnMsIFsnbWVyZ2UnXSlcblxuICBxdWVyeU9wdGlvbnMgPSBfLmFzc2lnbih7fSwgcXVlcnlPcHRpb25zLCB7XG4gICAgZXhjbHVkZTogJ2NvbnRlbnQnXG4gIH0pXG5cbiAgY29uc3QgcXVlcnlTdHJpbmcgPSB1dGlscy5wYXJzZUZvcm1EYXRhKHF1ZXJ5T3B0aW9ucylcbiAgY29uc3QgQ0FMTF9BUEkgPSB7XG4gICAgdHlwZXM6IFtCT09LU19SRVFVRVNULCBCT09LU19TVUNDRVNTLCBCT09LU19GQUlMVVJFXSxcbiAgICBlbmRwb2ludDogYGJvb2tzPyR7cXVlcnlTdHJpbmd9YCxcbiAgICBzY2hlbWE6IFNjaGVtYXMuQk9PS19BUlJBWSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBuYW1lOiAnYm9va3MnLFxuICAgICAgbWVyZ2UsXG4gICAgICBxdWVyeTogcVxuICAgIH1cbiAgfSBhcyBDQUxMX0FQSV9PQkpcblxuICByZXR1cm4ge1xuICAgIENBTExfQVBJXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQm9vayhib29rSWQsIGZpZWxkcz86IEFycmF5PGFueT4pIHtcbiAgbGV0IGVuZHBvaW50ID0gYGJvb2tzLyR7Ym9va0lkfWBcblxuICBpZiAoZmllbGRzKSB7XG4gICAgZW5kcG9pbnQgKz0gYD9maWVsZHM9JHtmaWVsZHMuam9pbignLCcpfWBcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYm9va0lkLFxuICAgIENBTExfQVBJOiB7XG4gICAgICB0eXBlczogWydCT09LX1JFUVVFU1QnLCAnQk9PS19TVUNDRVNTJywgJ0JPT0tfRkFJTFVSRSddLFxuICAgICAgZW5kcG9pbnQsXG4gICAgICBzY2hlbWE6IFNjaGVtYXMuQk9PS1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hDb2xsZWN0aW9ucyhmbG93VHlwZTogJ25ld2VzdCcgfCAnaG90JyA9ICduZXdlc3QnKSB7XG4gIHJldHVybiB7XG4gICAgZmxvd1R5cGUsXG4gICAgQ0FMTF9BUEk6IHtcbiAgICAgIHR5cGVzOiBbJ0NPTExFQ1RJT05TX1JFUVVFU1QnLCAnQ09MTEVDVElPTlNfU1VDQ0VTUycsICdDT0xMRUNUSU9OU19GQUlMVVJFJ10sXG4gICAgICBlbmRwb2ludDogYGNvbGxlY3Rpb25zYCxcbiAgICAgIHNjaGVtYTogU2NoZW1hcy5DT0xMRUNUSU9OX0FSUkFZXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENvbGxlY3Rpb24oY29sbGVjdGlvbklkKSB7XG4gIHJldHVybiB7XG4gICAgY29sbGVjdGlvbklkLFxuICAgIENBTExfQVBJOiB7XG4gICAgICB0eXBlczogWydDT0xMRUNUSU9OX1JFUVVFU1QnLCAnQ09MTEVDVElPTl9TVUNDRVNTJywgJ0NPTExFQ1RJT05fRkFJTFVSRSddLFxuICAgICAgZW5kcG9pbnQ6IGBjb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb25JZH1gLFxuICAgICAgc2NoZW1hOiBTY2hlbWFzLkNPTExFQ1RJT05cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERPVUJBTl9CT09LX1NFQVJDSF9SRVFVRVNUID0gJ2RhdGEtZmV0Y2hpbmcvZG91YmFuLWJvb2stc2VhcmNoL1JFUVVFU1QnXG5leHBvcnQgY29uc3QgRE9VQkFOX0JPT0tfU0VBUkNIX1NVQ0NFU1MgPSAnZGF0YS1mZXRjaGluZy9kb3ViYW4tYm9vay1zZWFyY2gvU1VDQ0VTUydcbmV4cG9ydCBjb25zdCBET1VCQU5fQk9PS19TRUFSQ0hfRkFJTFVSRSA9ICdkYXRhLWZldGNoaW5nL2RvdWJhbi1ib29rLXNlYXJjaC9GQUlMVVJFJ1xuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaERvdWJhbkJvb2tzKHF1ZXJ5KSB7XG4gIGNvbnN0IENBTExfQVBJOiBDQUxMX0FQSV9PQkogPSB7XG4gICAgdHlwZXM6IFtET1VCQU5fQk9PS19TRUFSQ0hfUkVRVUVTVCwgRE9VQkFOX0JPT0tfU0VBUkNIX1NVQ0NFU1MsIERPVUJBTl9CT09LX1NFQVJDSF9GQUlMVVJFXSxcbiAgICBlbmRwb2ludDogYHNlYXJjaD9jb3VudD01JnE9JHtxdWVyeX1gLFxuICAgIGFwaVVybDogQXBpUm9vdHMuRE9VQkFOX0JPT0tTLFxuICAgIHNjaGVtYTogU2NoZW1hcy5ET1VCQU5fQk9PS19TRUFSQ0hfUkVTVUxUUyxcbiAgICBvcHRpb25zOiB7IHVzZUpzb25wOiB0cnVlIH0sXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgbmFtZTogJ2RvdWJhbkJvb2tzJyxcbiAgICAgIHF1ZXJ5XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBxdWVyeSxcbiAgICBDQUxMX0FQSVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9hY3Rpb25zL2RhdGEtZmV0Y2hpbmcvYm9vay50c1xuICoqLyIsImltcG9ydCB7IFNjaGVtYSwgYXJyYXlPZiwgbm9ybWFsaXplLCB1bmlvbk9mIH0gZnJvbSAnbm9ybWFsaXpyJ1xuXG5jb25zdCBib29rID0gbmV3IFNjaGVtYSgnYm9va3MnLCB7XG4gIGlkQXR0cmlidXRlOiAnaWQnXG59KVxuXG5jb25zdCBhdXRob3IgPSBuZXcgU2NoZW1hKCdhdXRob3JzJywge1xuICBpZEF0dHJpYnV0ZTogJ2lkJ1xufSlcblxuY29uc3QgY29sbGVjdGlvbiA9IG5ldyBTY2hlbWEoJ2Jvb2tDb2xsZWN0aW9ucycsIHtcbiAgaWRBdHRyaWJ1dGU6ICdpZCdcbn0pXG5cbmNvbnN0IHByb2ZpbGUgPSBuZXcgU2NoZW1hKCdwcm9maWxlcycsIHtcbiAgaWRBdHRyaWJ1dGU6ICdpZCdcbn0pXG5cbmNvbnN0IHVzZXIgPSBuZXcgU2NoZW1hKCd1c2VycycsIHtcbiAgaWRBdHRyaWJ1dGU6ICdpZCdcbn0pXG5cbmNvbnN0IGRvdWJhbkJvb2sgPSBuZXcgU2NoZW1hKCdkb3ViYW5Cb29rcycsIHtcbiAgaWRBdHRyaWJ1dGU6ICdpZCdcbn0pXG5cbmNvbnN0IGJvb2tQcm9ncmVzcyA9IG5ldyBTY2hlbWEoJ2Jvb2tzJywge1xuICBpZEF0dHJpYnV0ZTogJ2Jvb2tJZCdcbn0pXG5cbmNvbnN0IG1hdGNoZWRCb29rcyA9IG5ldyBTY2hlbWEoJ2Jvb2tzJywge1xuICBpZEF0dHJpYnV0ZTogJ2Jvb2tJZCdcbn0pXG5cbmV4cG9ydCBjb25zdCBTY2hlbWFzID0ge1xuICBCT09LOiBib29rLFxuICBCT09LX1BST0dSRVNTOiBib29rUHJvZ3Jlc3MsXG4gIEJPT0tfQVJSQVk6IGFycmF5T2YoYm9vayksXG4gIERPVUJBTl9CT09LX1NFQVJDSF9SRVNVTFRTOiB7Ym9va3M6IGFycmF5T2YoZG91YmFuQm9vayl9LFxuICBVU0VSX0FSUkFZOiBhcnJheU9mKHVzZXIpLFxuICBNQVRDSEVEX0JPT0tfQVJSQVk6IGFycmF5T2YobWF0Y2hlZEJvb2tzKSxcbiAgQ09MTEVDVElPTjogY29sbGVjdGlvbixcbiAgQ09MTEVDVElPTl9BUlJBWTogYXJyYXlPZihjb2xsZWN0aW9uKSxcbiAgUFJPRklMRTogcHJvZmlsZSxcbiAgQVVUSE9SOiBhdXRob3IsXG4gIEFVVEhPUl9BUlJBWTogYXJyYXlPZihhdXRob3IpXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zY2hlbWFzLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxNCkpKDY4NCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbm9ybWFsaXpyL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3V0aWxzX2RsbFxuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF91dGlsc19kbGw7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIl91dGlsc19kbGxcIlxuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgY29uc3QgSE9TVCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gID8gd2luZG93LmxvY2F0aW9uLm9yaWdpblxuICA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnXG5cbmV4cG9ydCBjb25zdCBBcGlSb290cyA9IHtcbiAgTE9DQUw6IGAke0hPU1R9L2FwaS9gLFxuICBET1VCQU5fQk9PS1M6ICdodHRwczovL2FwaS5kb3ViYW4uY29tL3YyL2Jvb2svJ1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29uZmlnLnRzXG4gKiovIiwiaW1wb3J0IHBhcnNlRm9ybURhdGEgZnJvbSAnLi9wYXJzZUZvcm1EYXRhJ1xuaW1wb3J0IGxvY2tTY3JvbGwgZnJvbSAnLi9sb2NrU2Nyb2xsJ1xuaW1wb3J0IHVubG9ja1Njcm9sbCBmcm9tICcuL3VubG9ja1Njcm9sbCdcbmltcG9ydCBnZXRTY3JlZW5JbmZvIGZyb20gJy4vZ2V0U2NyZWVuSW5mbydcblxuLy8gdG9kb1xuZnVuY3Rpb24gYWRkWmVybyhudW0pIHtcbiAgbGV0IG51bVN0cldpdGhaZXJvXG5cbiAgaWYgKG51bSA8IDEwKSB7XG4gICAgbnVtU3RyV2l0aFplcm8gPSAnMCcgKyBudW0udG9TdHJpbmcoKVxuICB9IGVsc2Uge1xuICAgIG51bVN0cldpdGhaZXJvID0gbnVtLnRvU3RyaW5nKClcbiAgfVxuXG4gIHJldHVybiBudW1TdHJXaXRoWmVyb1xufVxuXG4vLyB0b2RvXG5mdW5jdGlvbiBnZXRUaW1lKCkge1xuICBjb25zdCBkID0gbmV3IERhdGUoKVxuICBjb25zdCB0aW1lID0gW2QuZ2V0RnVsbFllYXIoKSwgZC5nZXRNb250aCgpLCBkLmdldERhdGUoKSwgZC5nZXRIb3VycygpLCBkLmdldE1pbnV0ZXMoKSwgZC5nZXRTZWNvbmRzKCldXG5cbiAgcmV0dXJuIHRpbWUubWFwKHQgPT4ge1xuICAgIHJldHVybiBhZGRaZXJvKHQpXG4gIH0pLmpvaW4oJycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcGFyc2VGb3JtRGF0YSxcbiAgbG9ja1Njcm9sbCxcbiAgdW5sb2NrU2Nyb2xsLFxuICBnZXRTY3JlZW5JbmZvXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy91dGlscy9pbmRleC50c1xuICoqLyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuLy8gdG9kb1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb2JqZWN0VG9VcmxlbmNvZGVkKG9yaWdpbmFsT2JqKSB7XG4gIGlmIChfLmlzRW1wdHkob3JpZ2luYWxPYmopKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBsZXQgb2JqZWN0ID0gXy5jbG9uZURlZXAob3JpZ2luYWxPYmopXG4gIGxldCBlbmNvZGVkdXJsID0gJydcblxuICBmb3IgKGxldCBwcm9wIGluIG9iamVjdCkge1xuICAgIGlmICh0eXBlb2Ygb2JqZWN0W3Byb3BdID09PSAnb2JqZWN0JyAmJiBvYmplY3RbcHJvcF0gIT09IG51bGwpIHtcbiAgICAgIG9iamVjdFtwcm9wXSA9IG9iamVjdFtwcm9wXS50b1N0cmluZygpXG4gICAgfVxuXG4gICAgZW5jb2RlZHVybCA9IGAke2VuY29kZWR1cmx9JHtwcm9wfT0ke29iamVjdFtwcm9wXX0mYFxuICB9XG5cbiAgcmV0dXJuIGVuY29kZWR1cmwuc3Vic3RyKDAsIGVuY29kZWR1cmwubGVuZ3RoIC0gMSlcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3V0aWxzL3BhcnNlRm9ybURhdGEudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KSkoNjgyKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvbG9kYXNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfdXRpbHNfZGxsXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvY2tTY3JvbGwoKSB7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvdXRpbHMvbG9ja1Njcm9sbC50c1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVubG9ja1Njcm9sbCgpIHtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJ1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvdXRpbHMvdW5sb2NrU2Nyb2xsLnRzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U2NyZWVuSW5mbygpOiB7XG4gIHZpZXc6IGFueVxuICBzY3JlZW46IGFueVxufSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ3dpbmRvdyBpcyB1bmRlZmluZWQsIGVtcHR5IGluZm8gb2JqZWN0IHdpbGwgYmUgcmV0dXJuZWQhJylcblxuICAgIHJldHVybiB7XG4gICAgICB2aWV3OiB7fSxcbiAgICAgIHNjcmVlbjoge31cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZpZXc6IHtcbiAgICAgIHdpZHRoOiAgd2luZG93LmlubmVyV2lkdGgsXG4gICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgIGFzcGVjdFJhdGlvOiB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIH0sXG4gICAgc2NyZWVuOiB3aW5kb3cuc2NyZWVuXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3V0aWxzL2dldFNjcmVlbkluZm8udHNcbiAqKi8iLCJpbXBvcnQgeyBTY2hlbWFzIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hcydcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJBdXRoKHVzZXJTZXNzaW9uPyk6IE9iamVjdCB7XG4gIC8vIOacjeWKoeerr+a4suafkyBzZXNzaW9uXG4gIGlmICh1c2VyU2Vzc2lvbikge1xuICAgIHJldHVybiB7XG4gICAgICBTRVJWRVJfU1RPUkU6IHtcbiAgICAgICAgYm9keToge1xuICAgICAgICAgIHJlc3BvbnNlOiB1c2VyU2Vzc2lvbixcbiAgICAgICAgICB0eXBlOiAnVVNFUl9BVVRIX1NVQ0NFU1MnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIENBTExfQVBJOiB7XG4gICAgICB0eXBlczogWydVU0VSX0FVVEhfUkVRVUVTVCcsICdVU0VSX0FVVEhfU1VDQ0VTUycsICdVU0VSX0FVVEhfRkFJTFVSRSddLFxuICAgICAgZW5kcG9pbnQ6ICdhdXRoJ1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQcm9maWxlKCkge1xuICByZXR1cm4ge1xuICAgIHBheWxvYWQ6ICdwcm9maWxlJyxcbiAgICBDQUxMX0FQSToge1xuICAgICAgdHlwZXM6IFsnUFJPRklMRV9SRVFVRVNUJywgJ1BST0ZJTEVfU1VDQ0VTUycsICdQUk9GSUxFX0ZBSUxVUkUnXSxcbiAgICAgIGVuZHBvaW50OiBgdXNlci9wcm9maWxlYCxcbiAgICB9XG4gIH1cbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGZldGNoUHVibGljUHJvZmlsZSgpIHtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBDQUxMX0FQSToge1xuLy8gICAgICAgdHlwZXM6IFsnUFJPRklMRV9SRVFVRVNUJywgJ1BST0ZJTEVfU1VDQ0VTUycsICdQUk9GSUxFX0ZBSUxVUkUnXSxcbi8vICAgICAgIGVuZHBvaW50OiBgdXNlci9wcm9maWxlYCxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5QUk9GSUxFXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBmZXRjaFNoZWxmKHVzZXJJZCkge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHVzZXJJZCxcbi8vICAgICBDQUxMX0FQSToge1xuLy8gICAgICAgdHlwZXM6IFsnU0hFTEZfUkVRVUVTVCcsICdTSEVMRl9TVUNDRVNTJywgJ1NIRUxGX0ZBSUxVUkUnXSxcbi8vICAgICAgIGVuZHBvaW50OiBgdXNlcnMvJHt1c2VySWR9L3NoZWxmYCxcbi8vICAgICAgIHNjaGVtYTogU2NoZW1hcy5CT09LX0FSUkFZLFxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hTaGVsZigpIHtcbiAgcmV0dXJuIHtcbiAgICBwYXlsb2FkOiAnYm9va1NoZWxmJyxcbiAgICBDQUxMX0FQSToge1xuICAgICAgdHlwZXM6IFsnU0hFTEZfUkVRVUVTVCcsICdTSEVMRl9TVUNDRVNTJywgJ1NIRUxGX0ZBSUxVUkUnXSxcbiAgICAgIGVuZHBvaW50OiBgdXNlci9ib29rcy9zaGVsZmAsXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFByb2dyZXNzKGJvb2tJZCkge1xuICByZXR1cm4ge1xuICAgIGJvb2tJZCxcbiAgICBwYXlsb2FkOiAncHJvZ3Jlc3MnLFxuICAgIENBTExfQVBJOiB7XG4gICAgICB0eXBlczogWydQUk9HUkVTU19SRVFVRVNUJywgJ1BST0dSRVNTX1NVQ0NFU1MnLCAnUFJPR1JFU1NfRkFJTFVSRSddLFxuICAgICAgZW5kcG9pbnQ6IGB1c2VyL2Jvb2tzLyR7Ym9va0lkfS9wcm9ncmVzc2AsXG4gICAgICAvLyBzY2hlbWE6IFNjaGVtYXMuQk9PS19QUk9HUkVTU1xuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvYWN0aW9ucy9kYXRhLWZldGNoaW5nL3VzZXIudHNcbiAqKi8iLCJpbXBvcnQgeyBTY2hlbWFzIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hcydcbmltcG9ydCB1dGlscyBmcm9tICcuLi8uLi8uLi91dGlscydcbmltcG9ydCB7IENBTExfQVBJX09CSiB9IGZyb20gJy4uLy4uL21pZGRsZXdhcmUvYXBpJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5leHBvcnQgY29uc3QgVVNFUlNfUkVRVUVTVCA9ICdkYXRhLWZldGNoaW5nL3VzZXJzL1JFUVVFU1QnXG5leHBvcnQgY29uc3QgVVNFUlNfU1VDQ0VTUyA9ICdkYXRhLWZldGNoaW5nL3VzZXJzL1NVQ0NFU1MnXG5leHBvcnQgY29uc3QgVVNFUlNfRkFJTFVSRSA9ICdkYXRhLWZldGNoaW5nL3VzZXJzL0ZBSUxVUkUnXG5leHBvcnQgdHlwZSBmZXRjaFVzZXJzID0ge1xuICBhcGk/OiB7IHE/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIgfSxcbiAgbWVyZ2U/OiBib29sZWFuXG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hVc2VycyhvcHRpb25zOiBmZXRjaFVzZXJzID0ge30pIHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSB1dGlscy5wYXJzZUZvcm1EYXRhKG9wdGlvbnMuYXBpKVxuXG4gIGNvbnN0IENBTExfQVBJID0ge1xuICAgIHR5cGVzOiBbVVNFUlNfUkVRVUVTVCwgVVNFUlNfU1VDQ0VTUywgVVNFUlNfRkFJTFVSRV0sXG4gICAgZW5kcG9pbnQ6IGB1c2Vycz8ke3F1ZXJ5U3RyaW5nfWAsXG4gICAgc2NoZW1hOiBTY2hlbWFzLlVTRVJfQVJSQVksXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgbmFtZTogJ3VzZXJzJyxcbiAgICAgIG1lcmdlOiBvcHRpb25zLm1lcmdlLFxuICAgICAgcXVlcnk6IF8uZ2V0KG9wdGlvbnMsICdhcGkucScsICcnKVxuICAgIH1cbiAgfSBhcyBDQUxMX0FQSV9PQkpcblxuICByZXR1cm4geyBDQUxMX0FQSSB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9hY3Rpb25zL2RhdGEtZmV0Y2hpbmcvdXNlcnMudHNcbiAqKi8iLCJpbXBvcnQgeyBTY2hlbWFzIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hcydcbmltcG9ydCB7IENBTExfQVBJX09CSiB9IGZyb20gJy4uLy4uL21pZGRsZXdhcmUvYXBpJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uLy4uLy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgQVVUSE9SX1JFUVVFU1QgPSAnZGF0YS1mZXRjaGluZy9hdXRob3JzL1JFUVVFU1QnXG5leHBvcnQgY29uc3QgQVVUSE9SX1NVQ0NFU1MgPSAnZGF0YS1mZXRjaGluZy9hdXRob3JzL1NVQ0NFU1MnXG5leHBvcnQgY29uc3QgQVVUSE9SX0ZBSUxVUkUgPSAnZGF0YS1mZXRjaGluZy9hdXRob3JzL0ZBSUxVUkUnXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hBdXRob3JzKG9wdGlvbnMpIHtcbiAgY29uc3QgQ0FMTF9BUEk6IENBTExfQVBJX09CSiA9IHtcbiAgICB0eXBlczogW0FVVEhPUl9SRVFVRVNULCBBVVRIT1JfU1VDQ0VTUywgQVVUSE9SX0ZBSUxVUkVdLFxuICAgIGVuZHBvaW50OiBgYXV0aG9ycz8ke3V0aWxzLnBhcnNlRm9ybURhdGEob3B0aW9ucyl9YCxcbiAgICBzY2hlbWE6IFNjaGVtYXMuQVVUSE9SX0FSUkFZLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIG5hbWU6ICdhdXRob3JzJyxcbiAgICAgIHF1ZXJ5OiBvcHRpb25zLnFcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIENBTExfQVBJXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL2FjdGlvbnMvZGF0YS1mZXRjaGluZy9hdXRob3IudHNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gY2hhbmdlVmFsdWUobmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQ0hBTkdFX1ZBTFVFJyxcbiAgICBuYW1lLFxuICAgIHZhbHVlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQobmFtZSwgZGF0YSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdVUERBVEVfRUxFTUVOVCcsXG4gICAgbmFtZSxcbiAgICBkYXRhXG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9hY3Rpb25zL2RlcHJlY2F0ZWRBY3Rpb25zLnRzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy51bnRvdWNoV2l0aEtleSA9IGV4cG9ydHMudW50b3VjaCA9IGV4cG9ydHMudG91Y2hXaXRoS2V5ID0gZXhwb3J0cy50b3VjaCA9IGV4cG9ydHMuc3dhcEFycmF5VmFsdWVzID0gZXhwb3J0cy5zdG9wU3VibWl0ID0gZXhwb3J0cy5zdG9wQXN5bmNWYWxpZGF0aW9uID0gZXhwb3J0cy5zdGFydFN1Ym1pdCA9IGV4cG9ydHMuc3RhcnRBc3luY1ZhbGlkYXRpb24gPSBleHBvcnRzLnJlc2V0ID0gZXhwb3J0cy5wcm9wVHlwZXMgPSBleHBvcnRzLmluaXRpYWxpemVXaXRoS2V5ID0gZXhwb3J0cy5pbml0aWFsaXplID0gZXhwb3J0cy5nZXRWYWx1ZXMgPSBleHBvcnRzLnJlbW92ZUFycmF5VmFsdWUgPSBleHBvcnRzLnJlZHV4Rm9ybSA9IGV4cG9ydHMucmVkdWNlciA9IGV4cG9ydHMuZm9jdXMgPSBleHBvcnRzLmRlc3Ryb3kgPSBleHBvcnRzLmNoYW5nZVdpdGhLZXkgPSBleHBvcnRzLmNoYW5nZSA9IGV4cG9ydHMuYmx1ciA9IGV4cG9ydHMuYXV0b2ZpbGxXaXRoS2V5ID0gZXhwb3J0cy5hdXRvZmlsbCA9IGV4cG9ydHMuYWRkQXJyYXlWYWx1ZSA9IGV4cG9ydHMuYWN0aW9uVHlwZXMgPSB1bmRlZmluZWQ7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxudmFyIF9jcmVhdGVBbGwyID0gcmVxdWlyZSgnLi9jcmVhdGVBbGwnKTtcblxudmFyIF9jcmVhdGVBbGwzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQWxsMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpc05hdGl2ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci5wcm9kdWN0ICYmIHdpbmRvdy5uYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJztcblxudmFyIF9jcmVhdGVBbGwgPSAoMCwgX2NyZWF0ZUFsbDMuZGVmYXVsdCkoaXNOYXRpdmUsIF9yZWFjdDIuZGVmYXVsdCwgX3JlYWN0UmVkdXguY29ubmVjdCk7XG5cbnZhciBhY3Rpb25UeXBlcyA9IF9jcmVhdGVBbGwuYWN0aW9uVHlwZXM7XG52YXIgYWRkQXJyYXlWYWx1ZSA9IF9jcmVhdGVBbGwuYWRkQXJyYXlWYWx1ZTtcbnZhciBhdXRvZmlsbCA9IF9jcmVhdGVBbGwuYXV0b2ZpbGw7XG52YXIgYXV0b2ZpbGxXaXRoS2V5ID0gX2NyZWF0ZUFsbC5hdXRvZmlsbFdpdGhLZXk7XG52YXIgYmx1ciA9IF9jcmVhdGVBbGwuYmx1cjtcbnZhciBjaGFuZ2UgPSBfY3JlYXRlQWxsLmNoYW5nZTtcbnZhciBjaGFuZ2VXaXRoS2V5ID0gX2NyZWF0ZUFsbC5jaGFuZ2VXaXRoS2V5O1xudmFyIGRlc3Ryb3kgPSBfY3JlYXRlQWxsLmRlc3Ryb3k7XG52YXIgZm9jdXMgPSBfY3JlYXRlQWxsLmZvY3VzO1xudmFyIHJlZHVjZXIgPSBfY3JlYXRlQWxsLnJlZHVjZXI7XG52YXIgcmVkdXhGb3JtID0gX2NyZWF0ZUFsbC5yZWR1eEZvcm07XG52YXIgcmVtb3ZlQXJyYXlWYWx1ZSA9IF9jcmVhdGVBbGwucmVtb3ZlQXJyYXlWYWx1ZTtcbnZhciBnZXRWYWx1ZXMgPSBfY3JlYXRlQWxsLmdldFZhbHVlcztcbnZhciBpbml0aWFsaXplID0gX2NyZWF0ZUFsbC5pbml0aWFsaXplO1xudmFyIGluaXRpYWxpemVXaXRoS2V5ID0gX2NyZWF0ZUFsbC5pbml0aWFsaXplV2l0aEtleTtcbnZhciBwcm9wVHlwZXMgPSBfY3JlYXRlQWxsLnByb3BUeXBlcztcbnZhciByZXNldCA9IF9jcmVhdGVBbGwucmVzZXQ7XG52YXIgc3RhcnRBc3luY1ZhbGlkYXRpb24gPSBfY3JlYXRlQWxsLnN0YXJ0QXN5bmNWYWxpZGF0aW9uO1xudmFyIHN0YXJ0U3VibWl0ID0gX2NyZWF0ZUFsbC5zdGFydFN1Ym1pdDtcbnZhciBzdG9wQXN5bmNWYWxpZGF0aW9uID0gX2NyZWF0ZUFsbC5zdG9wQXN5bmNWYWxpZGF0aW9uO1xudmFyIHN0b3BTdWJtaXQgPSBfY3JlYXRlQWxsLnN0b3BTdWJtaXQ7XG52YXIgc3dhcEFycmF5VmFsdWVzID0gX2NyZWF0ZUFsbC5zd2FwQXJyYXlWYWx1ZXM7XG52YXIgdG91Y2ggPSBfY3JlYXRlQWxsLnRvdWNoO1xudmFyIHRvdWNoV2l0aEtleSA9IF9jcmVhdGVBbGwudG91Y2hXaXRoS2V5O1xudmFyIHVudG91Y2ggPSBfY3JlYXRlQWxsLnVudG91Y2g7XG52YXIgdW50b3VjaFdpdGhLZXkgPSBfY3JlYXRlQWxsLnVudG91Y2hXaXRoS2V5O1xuZXhwb3J0cy5hY3Rpb25UeXBlcyA9IGFjdGlvblR5cGVzO1xuZXhwb3J0cy5hZGRBcnJheVZhbHVlID0gYWRkQXJyYXlWYWx1ZTtcbmV4cG9ydHMuYXV0b2ZpbGwgPSBhdXRvZmlsbDtcbmV4cG9ydHMuYXV0b2ZpbGxXaXRoS2V5ID0gYXV0b2ZpbGxXaXRoS2V5O1xuZXhwb3J0cy5ibHVyID0gYmx1cjtcbmV4cG9ydHMuY2hhbmdlID0gY2hhbmdlO1xuZXhwb3J0cy5jaGFuZ2VXaXRoS2V5ID0gY2hhbmdlV2l0aEtleTtcbmV4cG9ydHMuZGVzdHJveSA9IGRlc3Ryb3k7XG5leHBvcnRzLmZvY3VzID0gZm9jdXM7XG5leHBvcnRzLnJlZHVjZXIgPSByZWR1Y2VyO1xuZXhwb3J0cy5yZWR1eEZvcm0gPSByZWR1eEZvcm07XG5leHBvcnRzLnJlbW92ZUFycmF5VmFsdWUgPSByZW1vdmVBcnJheVZhbHVlO1xuZXhwb3J0cy5nZXRWYWx1ZXMgPSBnZXRWYWx1ZXM7XG5leHBvcnRzLmluaXRpYWxpemUgPSBpbml0aWFsaXplO1xuZXhwb3J0cy5pbml0aWFsaXplV2l0aEtleSA9IGluaXRpYWxpemVXaXRoS2V5O1xuZXhwb3J0cy5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5leHBvcnRzLnJlc2V0ID0gcmVzZXQ7XG5leHBvcnRzLnN0YXJ0QXN5bmNWYWxpZGF0aW9uID0gc3RhcnRBc3luY1ZhbGlkYXRpb247XG5leHBvcnRzLnN0YXJ0U3VibWl0ID0gc3RhcnRTdWJtaXQ7XG5leHBvcnRzLnN0b3BBc3luY1ZhbGlkYXRpb24gPSBzdG9wQXN5bmNWYWxpZGF0aW9uO1xuZXhwb3J0cy5zdG9wU3VibWl0ID0gc3RvcFN1Ym1pdDtcbmV4cG9ydHMuc3dhcEFycmF5VmFsdWVzID0gc3dhcEFycmF5VmFsdWVzO1xuZXhwb3J0cy50b3VjaCA9IHRvdWNoO1xuZXhwb3J0cy50b3VjaFdpdGhLZXkgPSB0b3VjaFdpdGhLZXk7XG5leHBvcnRzLnVudG91Y2ggPSB1bnRvdWNoO1xuZXhwb3J0cy51bnRvdWNoV2l0aEtleSA9IHVudG91Y2hXaXRoS2V5O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQWxsO1xuXG52YXIgX3JlZHVjZXIgPSByZXF1aXJlKCcuL3JlZHVjZXInKTtcblxudmFyIF9yZWR1Y2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlZHVjZXIpO1xuXG52YXIgX2NyZWF0ZVJlZHV4Rm9ybSA9IHJlcXVpcmUoJy4vY3JlYXRlUmVkdXhGb3JtJyk7XG5cbnZhciBfY3JlYXRlUmVkdXhGb3JtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVJlZHV4Rm9ybSk7XG5cbnZhciBfbWFwVmFsdWVzID0gcmVxdWlyZSgnLi9tYXBWYWx1ZXMnKTtcblxudmFyIF9tYXBWYWx1ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFwVmFsdWVzKTtcblxudmFyIF9iaW5kQWN0aW9uRGF0YSA9IHJlcXVpcmUoJy4vYmluZEFjdGlvbkRhdGEnKTtcblxudmFyIF9iaW5kQWN0aW9uRGF0YTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iaW5kQWN0aW9uRGF0YSk7XG5cbnZhciBfYWN0aW9ucyA9IHJlcXVpcmUoJy4vYWN0aW9ucycpO1xuXG52YXIgYWN0aW9ucyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9hY3Rpb25zKTtcblxudmFyIF9hY3Rpb25UeXBlcyA9IHJlcXVpcmUoJy4vYWN0aW9uVHlwZXMnKTtcblxudmFyIGFjdGlvblR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2FjdGlvblR5cGVzKTtcblxudmFyIF9jcmVhdGVQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NyZWF0ZVByb3BUeXBlcycpO1xuXG52YXIgX2NyZWF0ZVByb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVQcm9wVHlwZXMpO1xuXG52YXIgX2dldFZhbHVlc0Zyb21TdGF0ZSA9IHJlcXVpcmUoJy4vZ2V0VmFsdWVzRnJvbVN0YXRlJyk7XG5cbnZhciBfZ2V0VmFsdWVzRnJvbVN0YXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFZhbHVlc0Zyb21TdGF0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIGJpbmQgZm9ybSBhcyBmaXJzdCBwYXJhbWV0ZXIgb2YgYWN0aW9uIGNyZWF0b3JzXG52YXIgYm91bmRBY3Rpb25zID0gX2V4dGVuZHMoe30sICgwLCBfbWFwVmFsdWVzMi5kZWZhdWx0KShfZXh0ZW5kcyh7fSwgYWN0aW9ucywge1xuICBhdXRvZmlsbFdpdGhLZXk6IGZ1bmN0aW9uIGF1dG9maWxsV2l0aEtleShrZXkpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiAoMCwgX2JpbmRBY3Rpb25EYXRhMi5kZWZhdWx0KShhY3Rpb25zLmF1dG9maWxsLCB7IGtleToga2V5IH0pLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH0sXG4gIGNoYW5nZVdpdGhLZXk6IGZ1bmN0aW9uIGNoYW5nZVdpdGhLZXkoa2V5KSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9iaW5kQWN0aW9uRGF0YTIuZGVmYXVsdCkoYWN0aW9ucy5jaGFuZ2UsIHsga2V5OiBrZXkgfSkuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfSxcbiAgaW5pdGlhbGl6ZVdpdGhLZXk6IGZ1bmN0aW9uIGluaXRpYWxpemVXaXRoS2V5KGtleSkge1xuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zID4gMSA/IF9sZW4zIC0gMSA6IDApLCBfa2V5MyA9IDE7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIGFyZ3NbX2tleTMgLSAxXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgcmV0dXJuICgwLCBfYmluZEFjdGlvbkRhdGEyLmRlZmF1bHQpKGFjdGlvbnMuaW5pdGlhbGl6ZSwgeyBrZXk6IGtleSB9KS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICB9LFxuICByZXNldDogZnVuY3Rpb24gcmVzZXQoa2V5KSB7XG4gICAgcmV0dXJuICgwLCBfYmluZEFjdGlvbkRhdGEyLmRlZmF1bHQpKGFjdGlvbnMucmVzZXQsIHsga2V5OiBrZXkgfSkoKTtcbiAgfSxcbiAgdG91Y2hXaXRoS2V5OiBmdW5jdGlvbiB0b3VjaFdpdGhLZXkoa2V5KSB7XG4gICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjQgPiAxID8gX2xlbjQgLSAxIDogMCksIF9rZXk0ID0gMTsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgYXJnc1tfa2V5NCAtIDFdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9iaW5kQWN0aW9uRGF0YTIuZGVmYXVsdCkoYWN0aW9ucy50b3VjaCwgeyBrZXk6IGtleSB9KS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICB9LFxuICB1bnRvdWNoV2l0aEtleTogZnVuY3Rpb24gdW50b3VjaFdpdGhLZXkoa2V5KSB7XG4gICAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjUgPiAxID8gX2xlbjUgLSAxIDogMCksIF9rZXk1ID0gMTsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykge1xuICAgICAgYXJnc1tfa2V5NSAtIDFdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9iaW5kQWN0aW9uRGF0YTIuZGVmYXVsdCkoYWN0aW9ucy51bnRvdWNoLCB7IGtleToga2V5IH0pLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koa2V5KSB7XG4gICAgcmV0dXJuICgwLCBfYmluZEFjdGlvbkRhdGEyLmRlZmF1bHQpKGFjdGlvbnMuZGVzdHJveSwgeyBrZXk6IGtleSB9KSgpO1xuICB9XG59KSwgZnVuY3Rpb24gKGFjdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKGZvcm0pIHtcbiAgICBmb3IgKHZhciBfbGVuNiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuNiA+IDEgPyBfbGVuNiAtIDEgOiAwKSwgX2tleTYgPSAxOyBfa2V5NiA8IF9sZW42OyBfa2V5NisrKSB7XG4gICAgICBhcmdzW19rZXk2IC0gMV0gPSBhcmd1bWVudHNbX2tleTZdO1xuICAgIH1cblxuICAgIHJldHVybiAoMCwgX2JpbmRBY3Rpb25EYXRhMi5kZWZhdWx0KShhY3Rpb24sIHsgZm9ybTogZm9ybSB9KS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICB9O1xufSkpO1xuXG52YXIgYWRkQXJyYXlWYWx1ZSA9IGJvdW5kQWN0aW9ucy5hZGRBcnJheVZhbHVlO1xudmFyIGF1dG9maWxsID0gYm91bmRBY3Rpb25zLmF1dG9maWxsO1xudmFyIGF1dG9maWxsV2l0aEtleSA9IGJvdW5kQWN0aW9ucy5hdXRvZmlsbFdpdGhLZXk7XG52YXIgYmx1ciA9IGJvdW5kQWN0aW9ucy5ibHVyO1xudmFyIGNoYW5nZSA9IGJvdW5kQWN0aW9ucy5jaGFuZ2U7XG52YXIgY2hhbmdlV2l0aEtleSA9IGJvdW5kQWN0aW9ucy5jaGFuZ2VXaXRoS2V5O1xudmFyIGRlc3Ryb3kgPSBib3VuZEFjdGlvbnMuZGVzdHJveTtcbnZhciBmb2N1cyA9IGJvdW5kQWN0aW9ucy5mb2N1cztcbnZhciBpbml0aWFsaXplID0gYm91bmRBY3Rpb25zLmluaXRpYWxpemU7XG52YXIgaW5pdGlhbGl6ZVdpdGhLZXkgPSBib3VuZEFjdGlvbnMuaW5pdGlhbGl6ZVdpdGhLZXk7XG52YXIgcmVtb3ZlQXJyYXlWYWx1ZSA9IGJvdW5kQWN0aW9ucy5yZW1vdmVBcnJheVZhbHVlO1xudmFyIHJlc2V0ID0gYm91bmRBY3Rpb25zLnJlc2V0O1xudmFyIHN0YXJ0QXN5bmNWYWxpZGF0aW9uID0gYm91bmRBY3Rpb25zLnN0YXJ0QXN5bmNWYWxpZGF0aW9uO1xudmFyIHN0YXJ0U3VibWl0ID0gYm91bmRBY3Rpb25zLnN0YXJ0U3VibWl0O1xudmFyIHN0b3BBc3luY1ZhbGlkYXRpb24gPSBib3VuZEFjdGlvbnMuc3RvcEFzeW5jVmFsaWRhdGlvbjtcbnZhciBzdG9wU3VibWl0ID0gYm91bmRBY3Rpb25zLnN0b3BTdWJtaXQ7XG52YXIgc3VibWl0RmFpbGVkID0gYm91bmRBY3Rpb25zLnN1Ym1pdEZhaWxlZDtcbnZhciBzd2FwQXJyYXlWYWx1ZXMgPSBib3VuZEFjdGlvbnMuc3dhcEFycmF5VmFsdWVzO1xudmFyIHRvdWNoID0gYm91bmRBY3Rpb25zLnRvdWNoO1xudmFyIHRvdWNoV2l0aEtleSA9IGJvdW5kQWN0aW9ucy50b3VjaFdpdGhLZXk7XG52YXIgdW50b3VjaCA9IGJvdW5kQWN0aW9ucy51bnRvdWNoO1xudmFyIHVudG91Y2hXaXRoS2V5ID0gYm91bmRBY3Rpb25zLnVudG91Y2hXaXRoS2V5O1xuXG5mdW5jdGlvbiBjcmVhdGVBbGwoaXNSZWFjdE5hdGl2ZSwgUmVhY3QsIGNvbm5lY3QpIHtcbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25UeXBlczogYWN0aW9uVHlwZXMsXG4gICAgYWRkQXJyYXlWYWx1ZTogYWRkQXJyYXlWYWx1ZSxcbiAgICBhdXRvZmlsbDogYXV0b2ZpbGwsXG4gICAgYXV0b2ZpbGxXaXRoS2V5OiBhdXRvZmlsbFdpdGhLZXksXG4gICAgYmx1cjogYmx1cixcbiAgICBjaGFuZ2U6IGNoYW5nZSxcbiAgICBjaGFuZ2VXaXRoS2V5OiBjaGFuZ2VXaXRoS2V5LFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgZm9jdXM6IGZvY3VzLFxuICAgIGdldFZhbHVlczogX2dldFZhbHVlc0Zyb21TdGF0ZTIuZGVmYXVsdCxcbiAgICBpbml0aWFsaXplOiBpbml0aWFsaXplLFxuICAgIGluaXRpYWxpemVXaXRoS2V5OiBpbml0aWFsaXplV2l0aEtleSxcbiAgICBwcm9wVHlwZXM6ICgwLCBfY3JlYXRlUHJvcFR5cGVzMi5kZWZhdWx0KShSZWFjdCksXG4gICAgcmVkdXhGb3JtOiAoMCwgX2NyZWF0ZVJlZHV4Rm9ybTIuZGVmYXVsdCkoaXNSZWFjdE5hdGl2ZSwgUmVhY3QsIGNvbm5lY3QpLFxuICAgIHJlZHVjZXI6IF9yZWR1Y2VyMi5kZWZhdWx0LFxuICAgIHJlbW92ZUFycmF5VmFsdWU6IHJlbW92ZUFycmF5VmFsdWUsXG4gICAgcmVzZXQ6IHJlc2V0LFxuICAgIHN0YXJ0QXN5bmNWYWxpZGF0aW9uOiBzdGFydEFzeW5jVmFsaWRhdGlvbixcbiAgICBzdGFydFN1Ym1pdDogc3RhcnRTdWJtaXQsXG4gICAgc3RvcEFzeW5jVmFsaWRhdGlvbjogc3RvcEFzeW5jVmFsaWRhdGlvbixcbiAgICBzdG9wU3VibWl0OiBzdG9wU3VibWl0LFxuICAgIHN1Ym1pdEZhaWxlZDogc3VibWl0RmFpbGVkLFxuICAgIHN3YXBBcnJheVZhbHVlczogc3dhcEFycmF5VmFsdWVzLFxuICAgIHRvdWNoOiB0b3VjaCxcbiAgICB0b3VjaFdpdGhLZXk6IHRvdWNoV2l0aEtleSxcbiAgICB1bnRvdWNoOiB1bnRvdWNoLFxuICAgIHVudG91Y2hXaXRoS2V5OiB1bnRvdWNoV2l0aEtleVxuICB9O1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL2NyZWF0ZUFsbC5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmluaXRpYWxTdGF0ZSA9IGV4cG9ydHMuZ2xvYmFsRXJyb3JLZXkgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfaW5pdGlhbFN0YXRlLCBfYmVoYXZpb3JzO1xuXG52YXIgX2FjdGlvblR5cGVzID0gcmVxdWlyZSgnLi9hY3Rpb25UeXBlcycpO1xuXG52YXIgX21hcFZhbHVlcyA9IHJlcXVpcmUoJy4vbWFwVmFsdWVzJyk7XG5cbnZhciBfbWFwVmFsdWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcFZhbHVlcyk7XG5cbnZhciBfcmVhZCA9IHJlcXVpcmUoJy4vcmVhZCcpO1xuXG52YXIgX3JlYWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhZCk7XG5cbnZhciBfd3JpdGUgPSByZXF1aXJlKCcuL3dyaXRlJyk7XG5cbnZhciBfd3JpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd3JpdGUpO1xuXG52YXIgX2dldFZhbHVlc0Zyb21TdGF0ZSA9IHJlcXVpcmUoJy4vZ2V0VmFsdWVzRnJvbVN0YXRlJyk7XG5cbnZhciBfZ2V0VmFsdWVzRnJvbVN0YXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFZhbHVlc0Zyb21TdGF0ZSk7XG5cbnZhciBfaW5pdGlhbGl6ZVN0YXRlID0gcmVxdWlyZSgnLi9pbml0aWFsaXplU3RhdGUnKTtcblxudmFyIF9pbml0aWFsaXplU3RhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5pdGlhbGl6ZVN0YXRlKTtcblxudmFyIF9yZXNldFN0YXRlID0gcmVxdWlyZSgnLi9yZXNldFN0YXRlJyk7XG5cbnZhciBfcmVzZXRTdGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZXNldFN0YXRlKTtcblxudmFyIF9zZXRFcnJvcnMgPSByZXF1aXJlKCcuL3NldEVycm9ycycpO1xuXG52YXIgX3NldEVycm9yczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRFcnJvcnMpO1xuXG52YXIgX2ZpZWxkVmFsdWUgPSByZXF1aXJlKCcuL2ZpZWxkVmFsdWUnKTtcblxudmFyIF9ub3JtYWxpemVGaWVsZHMgPSByZXF1aXJlKCcuL25vcm1hbGl6ZUZpZWxkcycpO1xuXG52YXIgX25vcm1hbGl6ZUZpZWxkczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ub3JtYWxpemVGaWVsZHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBnbG9iYWxFcnJvcktleSA9IGV4cG9ydHMuZ2xvYmFsRXJyb3JLZXkgPSAnX2Vycm9yJztcblxudmFyIGluaXRpYWxTdGF0ZSA9IGV4cG9ydHMuaW5pdGlhbFN0YXRlID0gKF9pbml0aWFsU3RhdGUgPSB7XG4gIF9hY3RpdmU6IHVuZGVmaW5lZCxcbiAgX2FzeW5jVmFsaWRhdGluZzogZmFsc2Vcbn0sIF9pbml0aWFsU3RhdGVbZ2xvYmFsRXJyb3JLZXldID0gdW5kZWZpbmVkLCBfaW5pdGlhbFN0YXRlLl9pbml0aWFsaXplZCA9IGZhbHNlLCBfaW5pdGlhbFN0YXRlLl9zdWJtaXR0aW5nID0gZmFsc2UsIF9pbml0aWFsU3RhdGUuX3N1Ym1pdEZhaWxlZCA9IGZhbHNlLCBfaW5pdGlhbFN0YXRlKTtcblxudmFyIGJlaGF2aW9ycyA9IChfYmVoYXZpb3JzID0ge30sIF9iZWhhdmlvcnNbX2FjdGlvblR5cGVzLkFERF9BUlJBWV9WQUxVRV0gPSBmdW5jdGlvbiAoc3RhdGUsIF9yZWYpIHtcbiAgdmFyIHBhdGggPSBfcmVmLnBhdGg7XG4gIHZhciBpbmRleCA9IF9yZWYuaW5kZXg7XG4gIHZhciB2YWx1ZSA9IF9yZWYudmFsdWU7XG4gIHZhciBmaWVsZHMgPSBfcmVmLmZpZWxkcztcblxuICB2YXIgYXJyYXkgPSAoMCwgX3JlYWQyLmRlZmF1bHQpKHBhdGgsIHN0YXRlKTtcbiAgdmFyIHN0YXRlQ29weSA9IF9leHRlbmRzKHt9LCBzdGF0ZSk7XG4gIHZhciBhcnJheUNvcHkgPSBhcnJheSA/IFtdLmNvbmNhdChhcnJheSkgOiBbXTtcbiAgdmFyIG5ld1ZhbHVlID0gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/ICgwLCBfaW5pdGlhbGl6ZVN0YXRlMi5kZWZhdWx0KSh2YWx1ZSwgZmllbGRzIHx8IE9iamVjdC5rZXlzKHZhbHVlKSkgOiAoMCwgX2ZpZWxkVmFsdWUubWFrZUZpZWxkVmFsdWUpKHsgdmFsdWU6IHZhbHVlIH0pO1xuICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5Q29weS5wdXNoKG5ld1ZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBhcnJheUNvcHkuc3BsaWNlKGluZGV4LCAwLCBuZXdWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuICgwLCBfd3JpdGUyLmRlZmF1bHQpKHBhdGgsIGFycmF5Q29weSwgc3RhdGVDb3B5KTtcbn0sIF9iZWhhdmlvcnNbX2FjdGlvblR5cGVzLkFVVE9GSUxMXSA9IGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjIpIHtcbiAgdmFyIGZpZWxkID0gX3JlZjIuZmllbGQ7XG4gIHZhciB2YWx1ZSA9IF9yZWYyLnZhbHVlO1xuXG4gIHJldHVybiAoMCwgX3dyaXRlMi5kZWZhdWx0KShmaWVsZCwgZnVuY3Rpb24gKHByZXZpb3VzKSB7XG4gICAgdmFyIF9wcmV2aW91cyR2YWx1ZSRhdXRvZiA9IF9leHRlbmRzKHt9LCBwcmV2aW91cywgeyB2YWx1ZTogdmFsdWUsIGF1dG9maWxsZWQ6IHRydWUgfSk7XG5cbiAgICB2YXIgYXN5bmNFcnJvciA9IF9wcmV2aW91cyR2YWx1ZSRhdXRvZi5hc3luY0Vycm9yO1xuICAgIHZhciBzdWJtaXRFcnJvciA9IF9wcmV2aW91cyR2YWx1ZSRhdXRvZi5zdWJtaXRFcnJvcjtcblxuICAgIHZhciByZXN1bHQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3ByZXZpb3VzJHZhbHVlJGF1dG9mLCBbJ2FzeW5jRXJyb3InLCAnc3VibWl0RXJyb3InXSk7XG5cbiAgICByZXR1cm4gKDAsIF9maWVsZFZhbHVlLm1ha2VGaWVsZFZhbHVlKShyZXN1bHQpO1xuICB9LCBzdGF0ZSk7XG59LCBfYmVoYXZpb3JzW19hY3Rpb25UeXBlcy5CTFVSXSA9IGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjMpIHtcbiAgdmFyIGZpZWxkID0gX3JlZjMuZmllbGQ7XG4gIHZhciB2YWx1ZSA9IF9yZWYzLnZhbHVlO1xuICB2YXIgdG91Y2ggPSBfcmVmMy50b3VjaDtcbiAgdmFyIF9hY3RpdmUgPSBzdGF0ZS5fYWN0aXZlO1xuXG4gIHZhciBzdGF0ZUNvcHkgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc3RhdGUsIFsnX2FjdGl2ZSddKTtcblxuICBpZiAoX2FjdGl2ZSAmJiBfYWN0aXZlICE9PSBmaWVsZCkge1xuICAgIC8vIHJlbW92ZSBfYWN0aXZlIGZyb20gc3RhdGVcbiAgICBzdGF0ZUNvcHkuX2FjdGl2ZSA9IF9hY3RpdmU7XG4gIH1cbiAgcmV0dXJuICgwLCBfd3JpdGUyLmRlZmF1bHQpKGZpZWxkLCBmdW5jdGlvbiAocHJldmlvdXMpIHtcbiAgICB2YXIgcmVzdWx0ID0gX2V4dGVuZHMoe30sIHByZXZpb3VzKTtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0LnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGlmICh0b3VjaCkge1xuICAgICAgcmVzdWx0LnRvdWNoZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIF9maWVsZFZhbHVlLm1ha2VGaWVsZFZhbHVlKShyZXN1bHQpO1xuICB9LCBzdGF0ZUNvcHkpO1xufSwgX2JlaGF2aW9yc1tfYWN0aW9uVHlwZXMuQ0hBTkdFXSA9IGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjQpIHtcbiAgdmFyIGZpZWxkID0gX3JlZjQuZmllbGQ7XG4gIHZhciB2YWx1ZSA9IF9yZWY0LnZhbHVlO1xuICB2YXIgdG91Y2ggPSBfcmVmNC50b3VjaDtcblxuICByZXR1cm4gKDAsIF93cml0ZTIuZGVmYXVsdCkoZmllbGQsIGZ1bmN0aW9uIChwcmV2aW91cykge1xuICAgIHZhciBfcHJldmlvdXMkdmFsdWUgPSBfZXh0ZW5kcyh7fSwgcHJldmlvdXMsIHsgdmFsdWU6IHZhbHVlIH0pO1xuXG4gICAgdmFyIGFzeW5jRXJyb3IgPSBfcHJldmlvdXMkdmFsdWUuYXN5bmNFcnJvcjtcbiAgICB2YXIgc3VibWl0RXJyb3IgPSBfcHJldmlvdXMkdmFsdWUuc3VibWl0RXJyb3I7XG4gICAgdmFyIGF1dG9maWxsZWQgPSBfcHJldmlvdXMkdmFsdWUuYXV0b2ZpbGxlZDtcblxuICAgIHZhciByZXN1bHQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3ByZXZpb3VzJHZhbHVlLCBbJ2FzeW5jRXJyb3InLCAnc3VibWl0RXJyb3InLCAnYXV0b2ZpbGxlZCddKTtcblxuICAgIGlmICh0b3VjaCkge1xuICAgICAgcmVzdWx0LnRvdWNoZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIF9maWVsZFZhbHVlLm1ha2VGaWVsZFZhbHVlKShyZXN1bHQpO1xuICB9LCBzdGF0ZSk7XG59LCBfYmVoYXZpb3JzW19hY3Rpb25UeXBlcy5ERVNUUk9ZXSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0sIF9iZWhhdmlvcnNbX2FjdGlvblR5cGVzLkZPQ1VTXSA9IGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjUpIHtcbiAgdmFyIGZpZWxkID0gX3JlZjUuZmllbGQ7XG5cbiAgdmFyIHN0YXRlQ29weSA9ICgwLCBfd3JpdGUyLmRlZmF1bHQpKGZpZWxkLCBmdW5jdGlvbiAocHJldmlvdXMpIHtcbiAgICByZXR1cm4gKDAsIF9maWVsZFZhbHVlLm1ha2VGaWVsZFZhbHVlKShfZXh0ZW5kcyh7fSwgcHJldmlvdXMsIHsgdmlzaXRlZDogdHJ1ZSB9KSk7XG4gIH0sIHN0YXRlKTtcbiAgc3RhdGVDb3B5Ll9hY3RpdmUgPSBmaWVsZDtcbiAgcmV0dXJuIHN0YXRlQ29weTtcbn0sIF9iZWhhdmlvcnNbX2FjdGlvblR5cGVzLklOSVRJQUxJWkVdID0gZnVuY3Rpb24gKHN0YXRlLCBfcmVmNikge1xuICB2YXIgX2V4dGVuZHMyO1xuXG4gIHZhciBkYXRhID0gX3JlZjYuZGF0YTtcbiAgdmFyIGZpZWxkcyA9IF9yZWY2LmZpZWxkcztcbiAgdmFyIG92ZXJ3cml0ZVZhbHVlcyA9IF9yZWY2Lm92ZXJ3cml0ZVZhbHVlcztcblxuICByZXR1cm4gX2V4dGVuZHMoe30sICgwLCBfaW5pdGlhbGl6ZVN0YXRlMi5kZWZhdWx0KShkYXRhLCBmaWVsZHMsIHN0YXRlLCBvdmVyd3JpdGVWYWx1ZXMpLCAoX2V4dGVuZHMyID0ge1xuICAgIF9hc3luY1ZhbGlkYXRpbmc6IGZhbHNlLFxuICAgIF9hY3RpdmU6IHVuZGVmaW5lZFxuICB9LCBfZXh0ZW5kczJbZ2xvYmFsRXJyb3JLZXldID0gdW5kZWZpbmVkLCBfZXh0ZW5kczIuX2luaXRpYWxpemVkID0gdHJ1ZSwgX2V4dGVuZHMyLl9zdWJtaXR0aW5nID0gZmFsc2UsIF9leHRlbmRzMi5fc3VibWl0RmFpbGVkID0gZmFsc2UsIF9leHRlbmRzMikpO1xufSwgX2JlaGF2aW9yc1tfYWN0aW9uVHlwZXMuUkVNT1ZFX0FSUkFZX1ZBTFVFXSA9IGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjcpIHtcbiAgdmFyIHBhdGggPSBfcmVmNy5wYXRoO1xuICB2YXIgaW5kZXggPSBfcmVmNy5pbmRleDtcblxuICB2YXIgYXJyYXkgPSAoMCwgX3JlYWQyLmRlZmF1bHQpKHBhdGgsIHN0YXRlKTtcbiAgdmFyIHN0YXRlQ29weSA9IF9leHRlbmRzKHt9LCBzdGF0ZSk7XG4gIHZhciBhcnJheUNvcHkgPSBhcnJheSA/IFtdLmNvbmNhdChhcnJheSkgOiBbXTtcbiAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheUNvcHkucG9wKCk7XG4gIH0gZWxzZSBpZiAoaXNOYU4oaW5kZXgpKSB7XG4gICAgZGVsZXRlIGFycmF5Q29weVtpbmRleF07XG4gIH0gZWxzZSB7XG4gICAgYXJyYXlDb3B5LnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuICgwLCBfd3JpdGUyLmRlZmF1bHQpKHBhdGgsIGFycmF5Q29weSwgc3RhdGVDb3B5KTtcbn0sIF9iZWhhdmlvcnNbX2FjdGlvblR5cGVzLlJFU0VUXSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICB2YXIgX2V4dGVuZHMzO1xuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgKDAsIF9yZXNldFN0YXRlMi5kZWZhdWx0KShzdGF0ZSksIChfZXh0ZW5kczMgPSB7XG4gICAgX2FjdGl2ZTogdW5kZWZpbmVkLFxuICAgIF9hc3luY1ZhbGlkYXRpbmc6IGZhbHNlXG4gIH0sIF9leHRlbmRzM1tnbG9iYWxFcnJvcktleV0gPSB1bmRlZmluZWQsIF9leHRlbmRzMy5faW5pdGlhbGl6ZWQgPSBzdGF0ZS5faW5pdGlhbGl6ZWQsIF9leHRlbmRzMy5fc3VibWl0dGluZyA9IGZhbHNlLCBfZXh0ZW5kczMuX3N1Ym1pdEZhaWxlZCA9IGZhbHNlLCBfZXh0ZW5kczMpKTtcbn0sIF9iZWhhdmlvcnNbX2FjdGlvblR5cGVzLlNUQVJUX0FTWU5DX1ZBTElEQVRJT05dID0gZnVuY3Rpb24gKHN0YXRlLCBfcmVmOCkge1xuICB2YXIgZmllbGQgPSBfcmVmOC5maWVsZDtcblxuICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgX2FzeW5jVmFsaWRhdGluZzogZmllbGQgfHwgdHJ1ZVxuICB9KTtcbn0sIF9iZWhhdmlvcnNbX2FjdGlvblR5cGVzLlNUQVJUX1NVQk1JVF0gPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgIF9zdWJtaXR0aW5nOiB0cnVlXG4gIH0pO1xufSwgX2JlaGF2aW9yc1tfYWN0aW9uVHlwZXMuU1RPUF9BU1lOQ19WQUxJREFUSU9OXSA9IGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjkpIHtcbiAgdmFyIF9leHRlbmRzNDtcblxuICB2YXIgZXJyb3JzID0gX3JlZjkuZXJyb3JzO1xuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgKDAsIF9zZXRFcnJvcnMyLmRlZmF1bHQpKHN0YXRlLCBlcnJvcnMsICdhc3luY0Vycm9yJyksIChfZXh0ZW5kczQgPSB7XG4gICAgX2FzeW5jVmFsaWRhdGluZzogZmFsc2VcbiAgfSwgX2V4dGVuZHM0W2dsb2JhbEVycm9yS2V5XSA9IGVycm9ycyAmJiBlcnJvcnNbZ2xvYmFsRXJyb3JLZXldLCBfZXh0ZW5kczQpKTtcbn0sIF9iZWhhdmlvcnNbX2FjdGlvblR5cGVzLlNUT1BfU1VCTUlUXSA9IGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjEwKSB7XG4gIHZhciBfZXh0ZW5kczU7XG5cbiAgdmFyIGVycm9ycyA9IF9yZWYxMC5lcnJvcnM7XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCAoMCwgX3NldEVycm9yczIuZGVmYXVsdCkoc3RhdGUsIGVycm9ycywgJ3N1Ym1pdEVycm9yJyksIChfZXh0ZW5kczUgPSB7fSwgX2V4dGVuZHM1W2dsb2JhbEVycm9yS2V5XSA9IGVycm9ycyAmJiBlcnJvcnNbZ2xvYmFsRXJyb3JLZXldLCBfZXh0ZW5kczUuX3N1Ym1pdHRpbmcgPSBmYWxzZSwgX2V4dGVuZHM1Ll9zdWJtaXRGYWlsZWQgPSAhIShlcnJvcnMgJiYgT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGgpLCBfZXh0ZW5kczUpKTtcbn0sIF9iZWhhdmlvcnNbX2FjdGlvblR5cGVzLlNVQk1JVF9GQUlMRURdID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICBfc3VibWl0RmFpbGVkOiB0cnVlXG4gIH0pO1xufSwgX2JlaGF2aW9yc1tfYWN0aW9uVHlwZXMuU1dBUF9BUlJBWV9WQUxVRVNdID0gZnVuY3Rpb24gKHN0YXRlLCBfcmVmMTEpIHtcbiAgdmFyIHBhdGggPSBfcmVmMTEucGF0aDtcbiAgdmFyIGluZGV4QSA9IF9yZWYxMS5pbmRleEE7XG4gIHZhciBpbmRleEIgPSBfcmVmMTEuaW5kZXhCO1xuXG4gIHZhciBhcnJheSA9ICgwLCBfcmVhZDIuZGVmYXVsdCkocGF0aCwgc3RhdGUpO1xuICB2YXIgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIGlmIChpbmRleEEgPT09IGluZGV4QiB8fCBpc05hTihpbmRleEEpIHx8IGlzTmFOKGluZGV4QikgfHwgaW5kZXhBID49IGFycmF5TGVuZ3RoIHx8IGluZGV4QiA+PSBhcnJheUxlbmd0aCkge1xuICAgIHJldHVybiBzdGF0ZTsgLy8gZG8gbm90aGluZ1xuICB9XG4gIHZhciBzdGF0ZUNvcHkgPSBfZXh0ZW5kcyh7fSwgc3RhdGUpO1xuICB2YXIgYXJyYXlDb3B5ID0gW10uY29uY2F0KGFycmF5KTtcbiAgYXJyYXlDb3B5W2luZGV4QV0gPSBhcnJheVtpbmRleEJdO1xuICBhcnJheUNvcHlbaW5kZXhCXSA9IGFycmF5W2luZGV4QV07XG4gIHJldHVybiAoMCwgX3dyaXRlMi5kZWZhdWx0KShwYXRoLCBhcnJheUNvcHksIHN0YXRlQ29weSk7XG59LCBfYmVoYXZpb3JzW19hY3Rpb25UeXBlcy5UT1VDSF0gPSBmdW5jdGlvbiAoc3RhdGUsIF9yZWYxMikge1xuICB2YXIgZmllbGRzID0gX3JlZjEyLmZpZWxkcztcblxuICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCBmaWVsZHMucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgZmllbGQpIHtcbiAgICByZXR1cm4gKDAsIF93cml0ZTIuZGVmYXVsdCkoZmllbGQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuICgwLCBfZmllbGRWYWx1ZS5tYWtlRmllbGRWYWx1ZSkoX2V4dGVuZHMoe30sIHZhbHVlLCB7IHRvdWNoZWQ6IHRydWUgfSkpO1xuICAgIH0sIGFjY3VtdWxhdG9yKTtcbiAgfSwgc3RhdGUpKTtcbn0sIF9iZWhhdmlvcnNbX2FjdGlvblR5cGVzLlVOVE9VQ0hdID0gZnVuY3Rpb24gKHN0YXRlLCBfcmVmMTMpIHtcbiAgdmFyIGZpZWxkcyA9IF9yZWYxMy5maWVsZHM7XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwgZmllbGRzLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGZpZWxkKSB7XG4gICAgcmV0dXJuICgwLCBfd3JpdGUyLmRlZmF1bHQpKGZpZWxkLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB2YXIgdG91Y2hlZCA9IHZhbHVlLnRvdWNoZWQ7XG5cbiAgICAgICAgdmFyIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXModmFsdWUsIFsndG91Y2hlZCddKTtcblxuICAgICAgICByZXR1cm4gKDAsIF9maWVsZFZhbHVlLm1ha2VGaWVsZFZhbHVlKShyZXN0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoMCwgX2ZpZWxkVmFsdWUubWFrZUZpZWxkVmFsdWUpKHZhbHVlKTtcbiAgICB9LCBhY2N1bXVsYXRvcik7XG4gIH0sIHN0YXRlKSk7XG59LCBfYmVoYXZpb3JzKTtcblxudmFyIHJlZHVjZXIgPSBmdW5jdGlvbiByZWR1Y2VyKCkge1xuICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyBpbml0aWFsU3RhdGUgOiBhcmd1bWVudHNbMF07XG4gIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICB2YXIgYmVoYXZpb3IgPSBiZWhhdmlvcnNbYWN0aW9uLnR5cGVdO1xuICByZXR1cm4gYmVoYXZpb3IgPyBiZWhhdmlvcihzdGF0ZSwgYWN0aW9uKSA6IHN0YXRlO1xufTtcblxuZnVuY3Rpb24gZm9ybVJlZHVjZXIoKSB7XG4gIHZhciBfZXh0ZW5kczExO1xuXG4gIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG4gIHZhciBmb3JtID0gYWN0aW9uLmZvcm07XG4gIHZhciBrZXkgPSBhY3Rpb24ua2V5O1xuXG4gIHZhciByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKGFjdGlvbiwgWydmb3JtJywgJ2tleSddKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZWRlY2xhcmVcblxuXG4gIGlmICghZm9ybSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBpZiAoa2V5KSB7XG4gICAgdmFyIF9leHRlbmRzOCwgX2V4dGVuZHM5O1xuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBfYWN0aW9uVHlwZXMuREVTVFJPWSkge1xuICAgICAgdmFyIF9leHRlbmRzNztcblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwgKF9leHRlbmRzNyA9IHt9LCBfZXh0ZW5kczdbZm9ybV0gPSBzdGF0ZVtmb3JtXSAmJiBPYmplY3Qua2V5cyhzdGF0ZVtmb3JtXSkucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgc3RhdGVLZXkpIHtcbiAgICAgICAgdmFyIF9leHRlbmRzNjtcblxuICAgICAgICByZXR1cm4gc3RhdGVLZXkgPT09IGtleSA/IGFjY3VtdWxhdG9yIDogX2V4dGVuZHMoe30sIGFjY3VtdWxhdG9yLCAoX2V4dGVuZHM2ID0ge30sIF9leHRlbmRzNltzdGF0ZUtleV0gPSBzdGF0ZVtmb3JtXVtzdGF0ZUtleV0sIF9leHRlbmRzNikpO1xuICAgICAgfSwge30pLCBfZXh0ZW5kczcpKTtcbiAgICB9XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwgKF9leHRlbmRzOSA9IHt9LCBfZXh0ZW5kczlbZm9ybV0gPSBfZXh0ZW5kcyh7fSwgc3RhdGVbZm9ybV0sIChfZXh0ZW5kczggPSB7fSwgX2V4dGVuZHM4W2tleV0gPSByZWR1Y2VyKChzdGF0ZVtmb3JtXSB8fCB7fSlba2V5XSwgcmVzdCksIF9leHRlbmRzOCkpLCBfZXh0ZW5kczkpKTtcbiAgfVxuICBpZiAoYWN0aW9uLnR5cGUgPT09IF9hY3Rpb25UeXBlcy5ERVNUUk9ZKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHN0YXRlKS5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBmb3JtTmFtZSkge1xuICAgICAgdmFyIF9leHRlbmRzMTA7XG5cbiAgICAgIHJldHVybiBmb3JtTmFtZSA9PT0gZm9ybSA/IGFjY3VtdWxhdG9yIDogX2V4dGVuZHMoe30sIGFjY3VtdWxhdG9yLCAoX2V4dGVuZHMxMCA9IHt9LCBfZXh0ZW5kczEwW2Zvcm1OYW1lXSA9IHN0YXRlW2Zvcm1OYW1lXSwgX2V4dGVuZHMxMCkpO1xuICAgIH0sIHt9KTtcbiAgfVxuICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCAoX2V4dGVuZHMxMSA9IHt9LCBfZXh0ZW5kczExW2Zvcm1dID0gcmVkdWNlcihzdGF0ZVtmb3JtXSwgcmVzdCksIF9leHRlbmRzMTEpKTtcbn1cblxuLyoqXG4gKiBBZGRzIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eSB0byB0aGUgcmVkdWNlclxuICovXG5mdW5jdGlvbiBkZWNvcmF0ZSh0YXJnZXQpIHtcbiAgdGFyZ2V0LnBsdWdpbiA9IGZ1bmN0aW9uIHBsdWdpbihyZWR1Y2Vycykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAvLyB1c2UgJ2Z1bmN0aW9uJyBrZXl3b3JkIHRvIGVuYWJsZSAndGhpcydcbiAgICByZXR1cm4gZGVjb3JhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gICAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICAgIHZhciByZXN1bHQgPSBfdGhpcyhzdGF0ZSwgYWN0aW9uKTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcmVzdWx0LCAoMCwgX21hcFZhbHVlczIuZGVmYXVsdCkocmVkdWNlcnMsIGZ1bmN0aW9uIChwbHVnaW5SZWR1Y2VyLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpblJlZHVjZXIocmVzdWx0W2tleV0gfHwgaW5pdGlhbFN0YXRlLCBhY3Rpb24pO1xuICAgICAgfSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHRhcmdldC5ub3JtYWxpemUgPSBmdW5jdGlvbiBub3JtYWxpemUobm9ybWFsaXplcnMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIC8vIHVzZSAnZnVuY3Rpb24nIGtleXdvcmQgdG8gZW5hYmxlICd0aGlzJ1xuICAgIHJldHVybiBkZWNvcmF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcbiAgICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgdmFyIHJlc3VsdCA9IF90aGlzMihzdGF0ZSwgYWN0aW9uKTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcmVzdWx0LCAoMCwgX21hcFZhbHVlczIuZGVmYXVsdCkobm9ybWFsaXplcnMsIGZ1bmN0aW9uIChmb3JtTm9ybWFsaXplcnMsIGZvcm0pIHtcbiAgICAgICAgdmFyIHJ1bk5vcm1hbGl6ZSA9IGZ1bmN0aW9uIHJ1bk5vcm1hbGl6ZShwcmV2aW91cywgY3VycmVudFJlc3VsdCkge1xuICAgICAgICAgIHZhciBwcmV2aW91c1ZhbHVlcyA9ICgwLCBfZ2V0VmFsdWVzRnJvbVN0YXRlMi5kZWZhdWx0KShfZXh0ZW5kcyh7fSwgaW5pdGlhbFN0YXRlLCBwcmV2aW91cykpO1xuICAgICAgICAgIHZhciBmb3JtUmVzdWx0ID0gX2V4dGVuZHMoe30sIGluaXRpYWxTdGF0ZSwgY3VycmVudFJlc3VsdCk7XG4gICAgICAgICAgdmFyIHZhbHVlcyA9ICgwLCBfZ2V0VmFsdWVzRnJvbVN0YXRlMi5kZWZhdWx0KShmb3JtUmVzdWx0KTtcbiAgICAgICAgICByZXR1cm4gKDAsIF9ub3JtYWxpemVGaWVsZHMyLmRlZmF1bHQpKGZvcm1Ob3JtYWxpemVycywgZm9ybVJlc3VsdCwgcHJldmlvdXMsIHZhbHVlcywgcHJldmlvdXNWYWx1ZXMpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoYWN0aW9uLmtleSkge1xuICAgICAgICAgIHZhciBfZXh0ZW5kczEyO1xuXG4gICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCByZXN1bHRbZm9ybV0sIChfZXh0ZW5kczEyID0ge30sIF9leHRlbmRzMTJbYWN0aW9uLmtleV0gPSBydW5Ob3JtYWxpemUoc3RhdGVbZm9ybV1bYWN0aW9uLmtleV0sIHJlc3VsdFtmb3JtXVthY3Rpb24ua2V5XSksIF9leHRlbmRzMTIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcnVuTm9ybWFsaXplKHN0YXRlW2Zvcm1dLCByZXN1bHRbZm9ybV0pO1xuICAgICAgfSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGRlY29yYXRlKGZvcm1SZWR1Y2VyKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9yZWR1Y2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBBRERfQVJSQVlfVkFMVUUgPSBleHBvcnRzLkFERF9BUlJBWV9WQUxVRSA9ICdyZWR1eC1mb3JtL0FERF9BUlJBWV9WQUxVRSc7XG52YXIgQVVUT0ZJTEwgPSBleHBvcnRzLkFVVE9GSUxMID0gJ3JlZHV4LWZvcm0vQVVUT0ZJTEwnO1xudmFyIEJMVVIgPSBleHBvcnRzLkJMVVIgPSAncmVkdXgtZm9ybS9CTFVSJztcbnZhciBDSEFOR0UgPSBleHBvcnRzLkNIQU5HRSA9ICdyZWR1eC1mb3JtL0NIQU5HRSc7XG52YXIgREVTVFJPWSA9IGV4cG9ydHMuREVTVFJPWSA9ICdyZWR1eC1mb3JtL0RFU1RST1knO1xudmFyIEZPQ1VTID0gZXhwb3J0cy5GT0NVUyA9ICdyZWR1eC1mb3JtL0ZPQ1VTJztcbnZhciBJTklUSUFMSVpFID0gZXhwb3J0cy5JTklUSUFMSVpFID0gJ3JlZHV4LWZvcm0vSU5JVElBTElaRSc7XG52YXIgUkVNT1ZFX0FSUkFZX1ZBTFVFID0gZXhwb3J0cy5SRU1PVkVfQVJSQVlfVkFMVUUgPSAncmVkdXgtZm9ybS9SRU1PVkVfQVJSQVlfVkFMVUUnO1xudmFyIFJFU0VUID0gZXhwb3J0cy5SRVNFVCA9ICdyZWR1eC1mb3JtL1JFU0VUJztcbnZhciBTVEFSVF9BU1lOQ19WQUxJREFUSU9OID0gZXhwb3J0cy5TVEFSVF9BU1lOQ19WQUxJREFUSU9OID0gJ3JlZHV4LWZvcm0vU1RBUlRfQVNZTkNfVkFMSURBVElPTic7XG52YXIgU1RBUlRfU1VCTUlUID0gZXhwb3J0cy5TVEFSVF9TVUJNSVQgPSAncmVkdXgtZm9ybS9TVEFSVF9TVUJNSVQnO1xudmFyIFNUT1BfQVNZTkNfVkFMSURBVElPTiA9IGV4cG9ydHMuU1RPUF9BU1lOQ19WQUxJREFUSU9OID0gJ3JlZHV4LWZvcm0vU1RPUF9BU1lOQ19WQUxJREFUSU9OJztcbnZhciBTVE9QX1NVQk1JVCA9IGV4cG9ydHMuU1RPUF9TVUJNSVQgPSAncmVkdXgtZm9ybS9TVE9QX1NVQk1JVCc7XG52YXIgU1VCTUlUX0ZBSUxFRCA9IGV4cG9ydHMuU1VCTUlUX0ZBSUxFRCA9ICdyZWR1eC1mb3JtL1NVQk1JVF9GQUlMRUQnO1xudmFyIFNXQVBfQVJSQVlfVkFMVUVTID0gZXhwb3J0cy5TV0FQX0FSUkFZX1ZBTFVFUyA9ICdyZWR1eC1mb3JtL1NXQVBfQVJSQVlfVkFMVUVTJztcbnZhciBUT1VDSCA9IGV4cG9ydHMuVE9VQ0ggPSAncmVkdXgtZm9ybS9UT1VDSCc7XG52YXIgVU5UT1VDSCA9IGV4cG9ydHMuVU5UT1VDSCA9ICdyZWR1eC1mb3JtL1VOVE9VQ0gnO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL2FjdGlvblR5cGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBtYXBWYWx1ZXM7XG4vKipcbiAqIE1hcHMgYWxsIHRoZSB2YWx1ZXMgaW4gdGhlIGdpdmVuIG9iamVjdCB0aHJvdWdoIHRoZSBnaXZlbiBmdW5jdGlvbiBhbmQgc2F2ZXMgdGhlbSwgYnkga2V5LCB0byBhIHJlc3VsdCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gbWFwVmFsdWVzKG9iaiwgZm4pIHtcbiAgcmV0dXJuIG9iaiA/IE9iamVjdC5rZXlzKG9iaikucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwga2V5KSB7XG4gICAgdmFyIF9leHRlbmRzMjtcblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgYWNjdW11bGF0b3IsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW2tleV0gPSBmbihvYmpba2V5XSwga2V5KSwgX2V4dGVuZHMyKSk7XG4gIH0sIHt9KSA6IG9iajtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9tYXBWYWx1ZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLyoqXG4gKiBSZWFkcyBhbnkgcG90ZW50aWFsbHkgZGVlcCB2YWx1ZSBmcm9tIGFuIG9iamVjdCB1c2luZyBkb3QgYW5kIGFycmF5IHN5bnRheFxuICovXG52YXIgcmVhZCA9IGZ1bmN0aW9uIHJlYWQocGF0aCwgb2JqZWN0KSB7XG4gIGlmICghcGF0aCB8fCAhb2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuICB2YXIgZG90SW5kZXggPSBwYXRoLmluZGV4T2YoJy4nKTtcbiAgaWYgKGRvdEluZGV4ID09PSAwKSB7XG4gICAgcmV0dXJuIHJlYWQocGF0aC5zdWJzdHJpbmcoMSksIG9iamVjdCk7XG4gIH1cbiAgdmFyIG9wZW5JbmRleCA9IHBhdGguaW5kZXhPZignWycpO1xuICB2YXIgY2xvc2VJbmRleCA9IHBhdGguaW5kZXhPZignXScpO1xuICBpZiAoZG90SW5kZXggPj0gMCAmJiAob3BlbkluZGV4IDwgMCB8fCBkb3RJbmRleCA8IG9wZW5JbmRleCkpIHtcbiAgICAvLyBpdGVyYXRlIGRvd24gb2JqZWN0IHRyZWVcbiAgICByZXR1cm4gcmVhZChwYXRoLnN1YnN0cmluZyhkb3RJbmRleCArIDEpLCBvYmplY3RbcGF0aC5zdWJzdHJpbmcoMCwgZG90SW5kZXgpXSk7XG4gIH1cbiAgaWYgKG9wZW5JbmRleCA+PSAwICYmIChkb3RJbmRleCA8IDAgfHwgb3BlbkluZGV4IDwgZG90SW5kZXgpKSB7XG4gICAgaWYgKGNsb3NlSW5kZXggPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZvdW5kIFsgYnV0IG5vIF0nKTtcbiAgICB9XG4gICAgdmFyIGtleSA9IHBhdGguc3Vic3RyaW5nKDAsIG9wZW5JbmRleCk7XG4gICAgdmFyIGluZGV4ID0gcGF0aC5zdWJzdHJpbmcob3BlbkluZGV4ICsgMSwgY2xvc2VJbmRleCk7XG4gICAgaWYgKCFpbmRleC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBvYmplY3Rba2V5XTtcbiAgICB9XG4gICAgaWYgKG9wZW5JbmRleCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHJlYWQocGF0aC5zdWJzdHJpbmcoY2xvc2VJbmRleCArIDEpLCBvYmplY3RbaW5kZXhdKTtcbiAgICB9XG4gICAgaWYgKCFvYmplY3Rba2V5XSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHJlYWQocGF0aC5zdWJzdHJpbmcoY2xvc2VJbmRleCArIDEpLCBvYmplY3Rba2V5XVtpbmRleF0pO1xuICB9XG4gIHJldHVybiBvYmplY3RbcGF0aF07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSByZWFkO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL3JlYWQuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG4vKipcbiAqIFdyaXRlcyBhbnkgcG90ZW50aWFsbHkgZGVlcCB2YWx1ZSBmcm9tIGFuIG9iamVjdCB1c2luZyBkb3QgYW5kIGFycmF5IHN5bnRheCxcbiAqIGFuZCByZXR1cm5zIGEgbmV3IGNvcHkgb2YgdGhlIG9iamVjdC5cbiAqL1xudmFyIHdyaXRlID0gZnVuY3Rpb24gd3JpdGUocGF0aCwgdmFsdWUsIG9iamVjdCkge1xuICB2YXIgX2V4dGVuZHM3O1xuXG4gIHZhciBkb3RJbmRleCA9IHBhdGguaW5kZXhPZignLicpO1xuICBpZiAoZG90SW5kZXggPT09IDApIHtcbiAgICByZXR1cm4gd3JpdGUocGF0aC5zdWJzdHJpbmcoMSksIHZhbHVlLCBvYmplY3QpO1xuICB9XG4gIHZhciBvcGVuSW5kZXggPSBwYXRoLmluZGV4T2YoJ1snKTtcbiAgdmFyIGNsb3NlSW5kZXggPSBwYXRoLmluZGV4T2YoJ10nKTtcbiAgaWYgKGRvdEluZGV4ID49IDAgJiYgKG9wZW5JbmRleCA8IDAgfHwgZG90SW5kZXggPCBvcGVuSW5kZXgpKSB7XG4gICAgdmFyIF9leHRlbmRzMjtcblxuICAgIC8vIGlzIGRvdCBub3RhdGlvblxuICAgIHZhciBrZXkgPSBwYXRoLnN1YnN0cmluZygwLCBkb3RJbmRleCk7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBvYmplY3QsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW2tleV0gPSB3cml0ZShwYXRoLnN1YnN0cmluZyhkb3RJbmRleCArIDEpLCB2YWx1ZSwgb2JqZWN0W2tleV0gfHwge30pLCBfZXh0ZW5kczIpKTtcbiAgfVxuICBpZiAob3BlbkluZGV4ID49IDAgJiYgKGRvdEluZGV4IDwgMCB8fCBvcGVuSW5kZXggPCBkb3RJbmRleCkpIHtcbiAgICB2YXIgX3JldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfZXh0ZW5kczY7XG5cbiAgICAgIC8vIGlzIGFycmF5IG5vdGF0aW9uXG4gICAgICBpZiAoY2xvc2VJbmRleCA8IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmb3VuZCBbIGJ1dCBubyBdJyk7XG4gICAgICB9XG4gICAgICB2YXIga2V5ID0gcGF0aC5zdWJzdHJpbmcoMCwgb3BlbkluZGV4KTtcbiAgICAgIHZhciBpbmRleCA9IHBhdGguc3Vic3RyaW5nKG9wZW5JbmRleCArIDEsIGNsb3NlSW5kZXgpO1xuICAgICAgdmFyIGFycmF5ID0gb2JqZWN0W2tleV0gfHwgW107XG4gICAgICB2YXIgcmVzdCA9IHBhdGguc3Vic3RyaW5nKGNsb3NlSW5kZXggKyAxKTtcbiAgICAgIGlmIChpbmRleCkge1xuICAgICAgICB2YXIgX2V4dGVuZHM0O1xuXG4gICAgICAgIC8vIGluZGV4ZWQgYXJyYXlcbiAgICAgICAgaWYgKHJlc3QubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIF9leHRlbmRzMztcblxuICAgICAgICAgIC8vIG5lZWQgdG8ga2VlcCByZWN1cnNpbmdcbiAgICAgICAgICB2YXIgZGVzdCA9IGFycmF5W2luZGV4XSB8fCB7fTtcbiAgICAgICAgICB2YXIgYXJyYXlDb3B5ID0gW10uY29uY2F0KGFycmF5KTtcbiAgICAgICAgICBhcnJheUNvcHlbaW5kZXhdID0gd3JpdGUocmVzdCwgdmFsdWUsIGRlc3QpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2OiBfZXh0ZW5kcyh7fSwgb2JqZWN0IHx8IHt9LCAoX2V4dGVuZHMzID0ge30sIF9leHRlbmRzM1trZXldID0gYXJyYXlDb3B5LCBfZXh0ZW5kczMpKVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvcHkgPSBbXS5jb25jYXQoYXJyYXkpO1xuICAgICAgICBjb3B5W2luZGV4XSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlKGNvcHlbaW5kZXhdKSA6IHZhbHVlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHY6IF9leHRlbmRzKHt9LCBvYmplY3QgfHwge30sIChfZXh0ZW5kczQgPSB7fSwgX2V4dGVuZHM0W2tleV0gPSBjb3B5LCBfZXh0ZW5kczQpKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gaW5kZXhsZXNzIGFycmF5XG4gICAgICBpZiAocmVzdC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIF9leHRlbmRzNTtcblxuICAgICAgICAvLyBuZWVkIHRvIGtlZXAgcmVjdXJzaW5nXG4gICAgICAgIGlmICgoIWFycmF5IHx8ICFhcnJheS5sZW5ndGgpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2OiBvYmplY3RcbiAgICAgICAgICB9OyAvLyBkb24ndCBldmVuIHNldCBhIHZhbHVlIHVuZGVyIFtrZXldXG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9hcnJheUNvcHkgPSBhcnJheS5tYXAoZnVuY3Rpb24gKGRlc3QpIHtcbiAgICAgICAgICByZXR1cm4gd3JpdGUocmVzdCwgdmFsdWUsIGRlc3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2OiBfZXh0ZW5kcyh7fSwgb2JqZWN0IHx8IHt9LCAoX2V4dGVuZHM1ID0ge30sIF9leHRlbmRzNVtrZXldID0gX2FycmF5Q29weSwgX2V4dGVuZHM1KSlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHZhciByZXN1bHQgPSB2b2lkIDA7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKG9iamVjdFtrZXldKSB7XG4gICAgICAgIHJlc3VsdCA9IGFycmF5Lm1hcChmdW5jdGlvbiAoZGVzdCkge1xuICAgICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZShkZXN0KSA6IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdjogb2JqZWN0XG4gICAgICAgIH07IC8vIGRvbid0IGV2ZW4gc2V0IGEgdmFsdWUgdW5kZXIgW2tleV1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHY6IF9leHRlbmRzKHt9LCBvYmplY3QgfHwge30sIChfZXh0ZW5kczYgPSB7fSwgX2V4dGVuZHM2W2tleV0gPSByZXN1bHQsIF9leHRlbmRzNikpXG4gICAgICB9O1xuICAgIH0oKTtcblxuICAgIGlmICh0eXBlb2YgX3JldCA9PT0gXCJvYmplY3RcIikgcmV0dXJuIF9yZXQudjtcbiAgfVxuICByZXR1cm4gX2V4dGVuZHMoe30sIG9iamVjdCwgKF9leHRlbmRzNyA9IHt9LCBfZXh0ZW5kczdbcGF0aF0gPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZShvYmplY3RbcGF0aF0pIDogdmFsdWUsIF9leHRlbmRzNykpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gd3JpdGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvd3JpdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2ZpZWxkVmFsdWUgPSByZXF1aXJlKCcuL2ZpZWxkVmFsdWUnKTtcblxuLyoqXG4gKiBBIGRpZmZlcmVudCB2ZXJzaW9uIG9mIGdldFZhbHVlcygpIHRoYXQgZG9lcyBub3QgbmVlZCB0aGUgZmllbGRzIGFycmF5XG4gKi9cbnZhciBnZXRWYWx1ZXNGcm9tU3RhdGUgPSBmdW5jdGlvbiBnZXRWYWx1ZXNGcm9tU3RhdGUoc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHN0YXRlKTtcbiAgaWYgKCFrZXlzLmxlbmd0aCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwga2V5KSB7XG4gICAgdmFyIGZpZWxkID0gc3RhdGVba2V5XTtcbiAgICBpZiAoZmllbGQpIHtcbiAgICAgIGlmICgoMCwgX2ZpZWxkVmFsdWUuaXNGaWVsZFZhbHVlKShmaWVsZCkpIHtcbiAgICAgICAgaWYgKGZpZWxkLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBhY2N1bXVsYXRvcltrZXldID0gZmllbGQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShmaWVsZCkpIHtcbiAgICAgICAgYWNjdW11bGF0b3Jba2V5XSA9IGZpZWxkLm1hcChmdW5jdGlvbiAoYXJyYXlGaWVsZCkge1xuICAgICAgICAgIHJldHVybiAoMCwgX2ZpZWxkVmFsdWUuaXNGaWVsZFZhbHVlKShhcnJheUZpZWxkKSA/IGFycmF5RmllbGQudmFsdWUgOiBnZXRWYWx1ZXNGcm9tU3RhdGUoYXJyYXlGaWVsZCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZmllbGQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBnZXRWYWx1ZXNGcm9tU3RhdGUoZmllbGQpO1xuXG4gICAgICAgIGlmIChyZXN1bHQgJiYgT2JqZWN0LmtleXMocmVzdWx0KS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYWNjdW11bGF0b3Jba2V5XSA9IHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gIH0sIHt9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGdldFZhbHVlc0Zyb21TdGF0ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9nZXRWYWx1ZXNGcm9tU3RhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5tYWtlRmllbGRWYWx1ZSA9IG1ha2VGaWVsZFZhbHVlO1xuZXhwb3J0cy5pc0ZpZWxkVmFsdWUgPSBpc0ZpZWxkVmFsdWU7XG52YXIgZmxhZyA9ICdfaXNGaWVsZFZhbHVlJztcbnZhciBpc09iamVjdCA9IGZ1bmN0aW9uIGlzT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCc7XG59O1xuXG5mdW5jdGlvbiBtYWtlRmllbGRWYWx1ZShvYmplY3QpIHtcbiAgaWYgKG9iamVjdCAmJiBpc09iamVjdChvYmplY3QpKSB7XG4gICAgLy8gVGhpcyBmbGFnIGhhcyB0byBiZSBlbnVtZXJhYmxlLCBiZWNhdXNlIG90aGVyd2lzZSBpdCBpcyBub3QgcG9zc2libGVcbiAgICAvLyB0byBzZXJpYWxpemUgb2JqZWN0IHdpdGggdGhpcyBmaWVsZC5cbiAgICAvLyBUaGUgY29uc2VxdWVuY2UgaXMgeW91IGxvc2UgaW5mb3JtYXRpb24gdGhhdCBwYXJ0aWN1bGFyIGZpZWxkIGlzXG4gICAgLy8gZmllbGQgb3IgbmVzdGVkIGdyb3VwIG9mIGZpZWxkcywgc28geW91J3JlIG5vdCBhYmxlIHRvIGZldGNoXG4gICAgLy8gZmllbGQgdmFsdWUgZnJvbSBzdGF0ZSB3aGVuIGl0IGhhcyBiZWVuIGFmZmVjdGVkIGluIHNvbWUgd2F5XG4gICAgLy8gYnkgc2VyaWFsaXppbmcvdXNpbmcgaW1tdXRhYmxlIGFuZCBzbyBvbi5cbiAgICAvLyBAZml4bWUgbWFya2luZyBmaWVsZCBhcyBsZWFmIHNob3VsZCBiZSBtYWRlIGluIG90aGVyIHdheVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIGZsYWcsIHsgdmFsdWU6IHRydWUsIGVudW1lcmFibGU6IHRydWUgfSk7XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gaXNGaWVsZFZhbHVlKG9iamVjdCkge1xuICByZXR1cm4gISEob2JqZWN0ICYmIGlzT2JqZWN0KG9iamVjdCkgJiYgb2JqZWN0W2ZsYWddKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9maWVsZFZhbHVlLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9maWVsZFZhbHVlID0gcmVxdWlyZSgnLi9maWVsZFZhbHVlJyk7XG5cbnZhciBtYWtlRW50cnkgPSBmdW5jdGlvbiBtYWtlRW50cnkodmFsdWUsIHByZXZpb3VzVmFsdWUsIG92ZXJ3cml0ZVZhbHVlcykge1xuICByZXR1cm4gKDAsIF9maWVsZFZhbHVlLm1ha2VGaWVsZFZhbHVlKSh2YWx1ZSA9PT0gdW5kZWZpbmVkID8ge30gOiB7XG4gICAgaW5pdGlhbDogdmFsdWUsXG4gICAgdmFsdWU6IG92ZXJ3cml0ZVZhbHVlcyA/IHZhbHVlIDogcHJldmlvdXNWYWx1ZVxuICB9KTtcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgaW5pdGlhbCB2YWx1ZXMgaW50byB0aGUgc3RhdGUgYW5kIHJldHVybnMgYSBuZXcgY29weSBvZiB0aGUgc3RhdGVcbiAqL1xudmFyIGluaXRpYWxpemVTdGF0ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemVTdGF0ZSh2YWx1ZXMsIGZpZWxkcykge1xuICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1syXTtcbiAgdmFyIG92ZXJ3cml0ZVZhbHVlcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbM107XG5cbiAgaWYgKCFmaWVsZHMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpZWxkcyBtdXN0IGJlIHBhc3NlZCB3aGVuIGluaXRpYWxpemluZyBzdGF0ZScpO1xuICB9XG4gIGlmICghdmFsdWVzIHx8ICFmaWVsZHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIHZhciBpbml0aWFsaXplRmllbGQgPSBmdW5jdGlvbiBpbml0aWFsaXplRmllbGQocGF0aCwgc3JjLCBkZXN0KSB7XG4gICAgdmFyIGRvdEluZGV4ID0gcGF0aC5pbmRleE9mKCcuJyk7XG4gICAgaWYgKGRvdEluZGV4ID09PSAwKSB7XG4gICAgICByZXR1cm4gaW5pdGlhbGl6ZUZpZWxkKHBhdGguc3Vic3RyaW5nKDEpLCBzcmMsIGRlc3QpO1xuICAgIH1cbiAgICB2YXIgb3BlbkluZGV4ID0gcGF0aC5pbmRleE9mKCdbJyk7XG4gICAgdmFyIGNsb3NlSW5kZXggPSBwYXRoLmluZGV4T2YoJ10nKTtcbiAgICB2YXIgcmVzdWx0ID0gX2V4dGVuZHMoe30sIGRlc3QpIHx8IHt9O1xuICAgIGlmIChkb3RJbmRleCA+PSAwICYmIChvcGVuSW5kZXggPCAwIHx8IGRvdEluZGV4IDwgb3BlbkluZGV4KSkge1xuICAgICAgLy8gaXMgZG90IG5vdGF0aW9uXG4gICAgICB2YXIga2V5ID0gcGF0aC5zdWJzdHJpbmcoMCwgZG90SW5kZXgpO1xuICAgICAgcmVzdWx0W2tleV0gPSBzcmNba2V5XSAmJiBpbml0aWFsaXplRmllbGQocGF0aC5zdWJzdHJpbmcoZG90SW5kZXggKyAxKSwgc3JjW2tleV0sIHJlc3VsdFtrZXldIHx8IHt9KTtcbiAgICB9IGVsc2UgaWYgKG9wZW5JbmRleCA+PSAwICYmIChkb3RJbmRleCA8IDAgfHwgb3BlbkluZGV4IDwgZG90SW5kZXgpKSB7XG4gICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBpcyBhcnJheSBub3RhdGlvblxuICAgICAgICBpZiAoY2xvc2VJbmRleCA8IDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZvdW5kIFxcJ1tcXCcgYnV0IG5vIFxcJ11cXCc6IFxcJycgKyBwYXRoICsgJ1xcJycpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBrZXkgPSBwYXRoLnN1YnN0cmluZygwLCBvcGVuSW5kZXgpO1xuICAgICAgICB2YXIgc3JjQXJyYXkgPSBzcmNba2V5XTtcbiAgICAgICAgdmFyIGRlc3RBcnJheSA9IHJlc3VsdFtrZXldO1xuICAgICAgICB2YXIgcmVzdCA9IHBhdGguc3Vic3RyaW5nKGNsb3NlSW5kZXggKyAxKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjQXJyYXkpKSB7XG4gICAgICAgICAgaWYgKHJlc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBuZWVkIHRvIGtlZXAgcmVjdXJzaW5nXG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IHNyY0FycmF5Lm1hcChmdW5jdGlvbiAoc3JjVmFsdWUsIHNyY0luZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBpbml0aWFsaXplRmllbGQocmVzdCwgc3JjVmFsdWUsIGRlc3RBcnJheSAmJiBkZXN0QXJyYXlbc3JjSW5kZXhdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IHNyY0FycmF5Lm1hcChmdW5jdGlvbiAoc3JjVmFsdWUsIHNyY0luZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBtYWtlRW50cnkoc3JjVmFsdWUsIGRlc3RBcnJheSAmJiBkZXN0QXJyYXlbc3JjSW5kZXhdICYmIGRlc3RBcnJheVtzcmNJbmRleF0udmFsdWUsIG92ZXJ3cml0ZVZhbHVlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgfSkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W3BhdGhdID0gbWFrZUVudHJ5KHNyYyAmJiBzcmNbcGF0aF0sIGRlc3QgJiYgZGVzdFtwYXRoXSAmJiBkZXN0W3BhdGhdLnZhbHVlLCBvdmVyd3JpdGVWYWx1ZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICByZXR1cm4gZmllbGRzLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGZpZWxkKSB7XG4gICAgcmV0dXJuIGluaXRpYWxpemVGaWVsZChmaWVsZCwgdmFsdWVzLCBhY2N1bXVsYXRvcik7XG4gIH0sIF9leHRlbmRzKHt9LCBzdGF0ZSkpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gaW5pdGlhbGl6ZVN0YXRlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL2luaXRpYWxpemVTdGF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZmllbGRWYWx1ZSA9IHJlcXVpcmUoJy4vZmllbGRWYWx1ZScpO1xuXG52YXIgcmVzZXQgPSBmdW5jdGlvbiByZXNldCh2YWx1ZSkge1xuICByZXR1cm4gKDAsIF9maWVsZFZhbHVlLm1ha2VGaWVsZFZhbHVlKSh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlICYmIHZhbHVlLmluaXRpYWwgPT09IHVuZGVmaW5lZCA/IHt9IDogeyBpbml0aWFsOiB2YWx1ZS5pbml0aWFsLCB2YWx1ZTogdmFsdWUuaW5pdGlhbCB9KTtcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgaW5pdGlhbCB2YWx1ZXMgaW50byB0aGUgc3RhdGUgYW5kIHJldHVybnMgYSBuZXcgY29weSBvZiB0aGUgc3RhdGVcbiAqL1xudmFyIHJlc2V0U3RhdGUgPSBmdW5jdGlvbiByZXNldFN0YXRlKHZhbHVlcykge1xuICByZXR1cm4gdmFsdWVzID8gT2JqZWN0LmtleXModmFsdWVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBrZXkpIHtcbiAgICB2YXIgdmFsdWUgPSB2YWx1ZXNba2V5XTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuICgwLCBfZmllbGRWYWx1ZS5pc0ZpZWxkVmFsdWUpKGl0ZW0pID8gcmVzZXQoaXRlbSkgOiByZXNldFN0YXRlKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKCgwLCBfZmllbGRWYWx1ZS5pc0ZpZWxkVmFsdWUpKHZhbHVlKSkge1xuICAgICAgICBhY2N1bXVsYXRvcltrZXldID0gcmVzZXQodmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGFjY3VtdWxhdG9yW2tleV0gPSByZXNldFN0YXRlKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICB9LCB7fSkgOiB2YWx1ZXM7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSByZXNldFN0YXRlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL3Jlc2V0U3RhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2ZpZWxkVmFsdWUgPSByZXF1aXJlKCcuL2ZpZWxkVmFsdWUnKTtcblxudmFyIGlzTWV0YUtleSA9IGZ1bmN0aW9uIGlzTWV0YUtleShrZXkpIHtcbiAgcmV0dXJuIGtleVswXSA9PT0gJ18nO1xufTtcblxuLyoqXG4gKiBTZXRzIGFuIGVycm9yIG9uIGEgZmllbGQgZGVlcCBpbiB0aGUgdHJlZSwgcmV0dXJuaW5nIGEgbmV3IGNvcHkgb2YgdGhlIHN0YXRlXG4gKi9cbnZhciBzZXRFcnJvcnMgPSBmdW5jdGlvbiBzZXRFcnJvcnMoc3RhdGUsIGVycm9ycywgZGVzdEtleSkge1xuICB2YXIgY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdGF0ZSkpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5tYXAoZnVuY3Rpb24gKHN0YXRlSXRlbSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHNldEVycm9ycyhzdGF0ZUl0ZW0sIGVycm9ycyAmJiBlcnJvcnNbaW5kZXhdLCBkZXN0S2V5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc3RhdGUgJiYgdHlwZW9mIHN0YXRlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIHJlc3VsdCA9IE9iamVjdC5rZXlzKHN0YXRlKS5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBrZXkpIHtcbiAgICAgICAgdmFyIF9leHRlbmRzMjtcblxuICAgICAgICByZXR1cm4gaXNNZXRhS2V5KGtleSkgPyBhY2N1bXVsYXRvciA6IF9leHRlbmRzKHt9LCBhY2N1bXVsYXRvciwgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJba2V5XSA9IHNldEVycm9ycyhzdGF0ZVtrZXldLCBlcnJvcnMgJiYgZXJyb3JzW2tleV0sIGRlc3RLZXkpLCBfZXh0ZW5kczIpKTtcbiAgICAgIH0sIHN0YXRlKTtcbiAgICAgIGlmICgoMCwgX2ZpZWxkVmFsdWUuaXNGaWVsZFZhbHVlKShzdGF0ZSkpIHtcbiAgICAgICAgKDAsIF9maWVsZFZhbHVlLm1ha2VGaWVsZFZhbHVlKShyZXN1bHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfZmllbGRWYWx1ZS5tYWtlRmllbGRWYWx1ZSkoc3RhdGUpO1xuICB9O1xuICBpZiAodHlwZW9mIEZpbGUgIT09ICd1bmRlZmluZWQnICYmIHN0YXRlIGluc3RhbmNlb2YgRmlsZSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBpZiAoIWVycm9ycykge1xuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgaWYgKHN0YXRlW2Rlc3RLZXldKSB7XG4gICAgICB2YXIgY29weSA9IF9leHRlbmRzKHt9LCBzdGF0ZSk7XG4gICAgICBkZWxldGUgY29weVtkZXN0S2V5XTtcbiAgICAgIHJldHVybiAoMCwgX2ZpZWxkVmFsdWUubWFrZUZpZWxkVmFsdWUpKGNvcHkpO1xuICAgIH1cbiAgICByZXR1cm4gY2xlYXIoKTtcbiAgfVxuICBpZiAodHlwZW9mIGVycm9ycyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgX2V4dGVuZHMzO1xuXG4gICAgcmV0dXJuICgwLCBfZmllbGRWYWx1ZS5tYWtlRmllbGRWYWx1ZSkoX2V4dGVuZHMoe30sIHN0YXRlLCAoX2V4dGVuZHMzID0ge30sIF9leHRlbmRzM1tkZXN0S2V5XSA9IGVycm9ycywgX2V4dGVuZHMzKSkpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KGVycm9ycykpIHtcbiAgICBpZiAoIXN0YXRlIHx8IEFycmF5LmlzQXJyYXkoc3RhdGUpKSB7XG4gICAgICB2YXIgX3JldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvcHkgPSAoc3RhdGUgfHwgW10pLm1hcChmdW5jdGlvbiAoc3RhdGVJdGVtLCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBzZXRFcnJvcnMoc3RhdGVJdGVtLCBlcnJvcnNbaW5kZXhdLCBkZXN0S2V5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uIChlcnJvckl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIGNvcHlbaW5kZXhdID0gc2V0RXJyb3JzKGNvcHlbaW5kZXhdLCBlcnJvckl0ZW0sIGRlc3RLZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2OiBjb3B5XG4gICAgICAgIH07XG4gICAgICB9KCk7XG5cbiAgICAgIGlmICh0eXBlb2YgX3JldCA9PT0gXCJvYmplY3RcIikgcmV0dXJuIF9yZXQudjtcbiAgICB9XG4gICAgcmV0dXJuIHNldEVycm9ycyhzdGF0ZSwgZXJyb3JzWzBdLCBkZXN0S2V5KTsgLy8gdXNlIGZpcnN0IGVycm9yXG4gIH1cbiAgaWYgKCgwLCBfZmllbGRWYWx1ZS5pc0ZpZWxkVmFsdWUpKHN0YXRlKSkge1xuICAgIHZhciBfZXh0ZW5kczQ7XG5cbiAgICByZXR1cm4gKDAsIF9maWVsZFZhbHVlLm1ha2VGaWVsZFZhbHVlKShfZXh0ZW5kcyh7fSwgc3RhdGUsIChfZXh0ZW5kczQgPSB7fSwgX2V4dGVuZHM0W2Rlc3RLZXldID0gZXJyb3JzLCBfZXh0ZW5kczQpKSk7XG4gIH1cbiAgdmFyIGVycm9yS2V5cyA9IE9iamVjdC5rZXlzKGVycm9ycyk7XG4gIGlmICghZXJyb3JLZXlzLmxlbmd0aCAmJiAhc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgcmV0dXJuIGVycm9yS2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBrZXkpIHtcbiAgICB2YXIgX2V4dGVuZHM1O1xuXG4gICAgcmV0dXJuIGlzTWV0YUtleShrZXkpID8gYWNjdW11bGF0b3IgOiBfZXh0ZW5kcyh7fSwgYWNjdW11bGF0b3IsIChfZXh0ZW5kczUgPSB7fSwgX2V4dGVuZHM1W2tleV0gPSBzZXRFcnJvcnMoc3RhdGUgJiYgc3RhdGVba2V5XSwgZXJyb3JzW2tleV0sIGRlc3RLZXkpLCBfZXh0ZW5kczUpKTtcbiAgfSwgY2xlYXIoKSB8fCB7fSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzZXRFcnJvcnM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvc2V0RXJyb3JzLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbm9ybWFsaXplRmllbGRzO1xuXG52YXIgX2ZpZWxkVmFsdWUgPSByZXF1aXJlKCcuL2ZpZWxkVmFsdWUnKTtcblxuZnVuY3Rpb24gZXh0cmFjdEtleShmaWVsZCkge1xuICB2YXIgZG90SW5kZXggPSBmaWVsZC5pbmRleE9mKCcuJyk7XG4gIHZhciBvcGVuSW5kZXggPSBmaWVsZC5pbmRleE9mKCdbJyk7XG4gIHZhciBjbG9zZUluZGV4ID0gZmllbGQuaW5kZXhPZignXScpO1xuXG4gIGlmIChvcGVuSW5kZXggPiAwICYmIGNsb3NlSW5kZXggIT09IG9wZW5JbmRleCArIDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZvdW5kIFsgbm90IGZvbGxvd2VkIGJ5IF0nKTtcbiAgfVxuXG4gIHZhciBpc0FycmF5ID0gb3BlbkluZGV4ID4gMCAmJiAoZG90SW5kZXggPCAwIHx8IG9wZW5JbmRleCA8IGRvdEluZGV4KTtcbiAgdmFyIGtleSA9IHZvaWQgMDtcbiAgdmFyIG5lc3RlZFBhdGggPSB2b2lkIDA7XG5cbiAgaWYgKGlzQXJyYXkpIHtcbiAgICBrZXkgPSBmaWVsZC5zdWJzdHJpbmcoMCwgb3BlbkluZGV4KTtcbiAgICBuZXN0ZWRQYXRoID0gZmllbGQuc3Vic3RyaW5nKGNsb3NlSW5kZXggKyAxKTtcblxuICAgIGlmIChuZXN0ZWRQYXRoWzBdID09PSAnLicpIHtcbiAgICAgIG5lc3RlZFBhdGggPSBuZXN0ZWRQYXRoLnN1YnN0cmluZygxKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZG90SW5kZXggPiAwKSB7XG4gICAga2V5ID0gZmllbGQuc3Vic3RyaW5nKDAsIGRvdEluZGV4KTtcbiAgICBuZXN0ZWRQYXRoID0gZmllbGQuc3Vic3RyaW5nKGRvdEluZGV4ICsgMSk7XG4gIH0gZWxzZSB7XG4gICAga2V5ID0gZmllbGQ7XG4gIH1cblxuICByZXR1cm4geyBpc0FycmF5OiBpc0FycmF5LCBrZXk6IGtleSwgbmVzdGVkUGF0aDogbmVzdGVkUGF0aCB9O1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVGaWVsZChmaWVsZCwgZnVsbEZpZWxkUGF0aCwgc3RhdGUsIHByZXZpb3VzU3RhdGUsIHZhbHVlcywgcHJldmlvdXNWYWx1ZXMsIG5vcm1hbGl6ZXJzKSB7XG4gIGlmIChmaWVsZC5pc0FycmF5KSB7XG4gICAgaWYgKGZpZWxkLm5lc3RlZFBhdGgpIHtcbiAgICAgIHZhciBfcmV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBzdGF0ZSAmJiBzdGF0ZVtmaWVsZC5rZXldIHx8IFtdO1xuICAgICAgICB2YXIgcHJldmlvdXNBcnJheSA9IHByZXZpb3VzU3RhdGUgJiYgcHJldmlvdXNTdGF0ZVtmaWVsZC5rZXldIHx8IFtdO1xuICAgICAgICB2YXIgbmVzdGVkRmllbGQgPSBleHRyYWN0S2V5KGZpZWxkLm5lc3RlZFBhdGgpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdjogYXJyYXkubWFwKGZ1bmN0aW9uIChuZXN0ZWRTdGF0ZSwgaSkge1xuICAgICAgICAgICAgbmVzdGVkU3RhdGVbbmVzdGVkRmllbGQua2V5XSA9IG5vcm1hbGl6ZUZpZWxkKG5lc3RlZEZpZWxkLCBmdWxsRmllbGRQYXRoLCBuZXN0ZWRTdGF0ZSwgcHJldmlvdXNBcnJheVtpXSwgdmFsdWVzLCBwcmV2aW91c1ZhbHVlcywgbm9ybWFsaXplcnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbmVzdGVkU3RhdGU7XG4gICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgIH0oKTtcblxuICAgICAgaWYgKHR5cGVvZiBfcmV0ID09PSBcIm9iamVjdFwiKSByZXR1cm4gX3JldC52O1xuICAgIH1cblxuICAgIHZhciBfbm9ybWFsaXplciA9IG5vcm1hbGl6ZXJzW2Z1bGxGaWVsZFBhdGhdO1xuXG4gICAgdmFyIHJlc3VsdCA9IF9ub3JtYWxpemVyKHN0YXRlICYmIHN0YXRlW2ZpZWxkLmtleV0sIHByZXZpb3VzU3RhdGUgJiYgcHJldmlvdXNTdGF0ZVtmaWVsZC5rZXldLCB2YWx1ZXMsIHByZXZpb3VzVmFsdWVzKTtcbiAgICByZXR1cm4gZmllbGQuaXNBcnJheSA/IHJlc3VsdCAmJiByZXN1bHQubWFwKF9maWVsZFZhbHVlLm1ha2VGaWVsZFZhbHVlKSA6IHJlc3VsdDtcbiAgfSBlbHNlIGlmIChmaWVsZC5uZXN0ZWRQYXRoKSB7XG4gICAgdmFyIG5lc3RlZFN0YXRlID0gc3RhdGUgJiYgc3RhdGVbZmllbGQua2V5XSB8fCB7fTtcbiAgICB2YXIgX25lc3RlZEZpZWxkID0gZXh0cmFjdEtleShmaWVsZC5uZXN0ZWRQYXRoKTtcblxuICAgIG5lc3RlZFN0YXRlW19uZXN0ZWRGaWVsZC5rZXldID0gbm9ybWFsaXplRmllbGQoX25lc3RlZEZpZWxkLCBmdWxsRmllbGRQYXRoLCBuZXN0ZWRTdGF0ZSwgcHJldmlvdXNTdGF0ZSAmJiBwcmV2aW91c1N0YXRlW2ZpZWxkLmtleV0sIHZhbHVlcywgcHJldmlvdXNWYWx1ZXMsIG5vcm1hbGl6ZXJzKTtcblxuICAgIHJldHVybiBuZXN0ZWRTdGF0ZTtcbiAgfVxuXG4gIHZhciBmaW5hbEZpZWxkID0gc3RhdGUgJiYgc3RhdGVbZmllbGQua2V5XSB8fCB7fTtcbiAgdmFyIG5vcm1hbGl6ZXIgPSBub3JtYWxpemVyc1tmdWxsRmllbGRQYXRoXTtcblxuICBmaW5hbEZpZWxkLnZhbHVlID0gbm9ybWFsaXplcihmaW5hbEZpZWxkLnZhbHVlLCBwcmV2aW91c1N0YXRlICYmIHByZXZpb3VzU3RhdGVbZmllbGQua2V5XSAmJiBwcmV2aW91c1N0YXRlW2ZpZWxkLmtleV0udmFsdWUsIHZhbHVlcywgcHJldmlvdXNWYWx1ZXMpO1xuXG4gIHJldHVybiAoMCwgX2ZpZWxkVmFsdWUubWFrZUZpZWxkVmFsdWUpKGZpbmFsRmllbGQpO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVGaWVsZHMobm9ybWFsaXplcnMsIHN0YXRlLCBwcmV2aW91c1N0YXRlLCB2YWx1ZXMsIHByZXZpb3VzVmFsdWVzKSB7XG4gIHZhciBuZXdTdGF0ZSA9IE9iamVjdC5rZXlzKG5vcm1hbGl6ZXJzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBmaWVsZCkge1xuICAgIHZhciBleHRyYWN0ZWQgPSBleHRyYWN0S2V5KGZpZWxkKTtcblxuICAgIGFjY3VtdWxhdG9yW2V4dHJhY3RlZC5rZXldID0gbm9ybWFsaXplRmllbGQoZXh0cmFjdGVkLCBmaWVsZCwgc3RhdGUsIHByZXZpb3VzU3RhdGUsIHZhbHVlcywgcHJldmlvdXNWYWx1ZXMsIG5vcm1hbGl6ZXJzKTtcblxuICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgfSwge30pO1xuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIG5ld1N0YXRlKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9ub3JtYWxpemVGaWVsZHMuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZVJlZHV4Rm9ybUNvbm5lY3RvciA9IHJlcXVpcmUoJy4vY3JlYXRlUmVkdXhGb3JtQ29ubmVjdG9yJyk7XG5cbnZhciBfY3JlYXRlUmVkdXhGb3JtQ29ubmVjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVJlZHV4Rm9ybUNvbm5lY3Rvcik7XG5cbnZhciBfaG9pc3ROb25SZWFjdFN0YXRpY3MgPSByZXF1aXJlKCdob2lzdC1ub24tcmVhY3Qtc3RhdGljcycpO1xuXG52YXIgX2hvaXN0Tm9uUmVhY3RTdGF0aWNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hvaXN0Tm9uUmVhY3RTdGF0aWNzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIFRoZSBkZWNvcmF0b3IgdGhhdCBpcyB0aGUgbWFpbiBBUEkgdG8gcmVkdXgtZm9ybVxuICovXG52YXIgY3JlYXRlUmVkdXhGb3JtID0gZnVuY3Rpb24gY3JlYXRlUmVkdXhGb3JtKGlzUmVhY3ROYXRpdmUsIFJlYWN0LCBjb25uZWN0KSB7XG4gIHZhciBDb21wb25lbnQgPSBSZWFjdC5Db21wb25lbnQ7XG5cbiAgdmFyIHJlZHV4Rm9ybUNvbm5lY3RvciA9ICgwLCBfY3JlYXRlUmVkdXhGb3JtQ29ubmVjdG9yMi5kZWZhdWx0KShpc1JlYWN0TmF0aXZlLCBSZWFjdCwgY29ubmVjdCk7XG4gIHJldHVybiBmdW5jdGlvbiAoY29uZmlnLCBtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgb3B0aW9ucykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoV3JhcHBlZENvbXBvbmVudCkge1xuICAgICAgdmFyIFJlZHV4Rm9ybUNvbm5lY3RvciA9IHJlZHV4Rm9ybUNvbm5lY3RvcihXcmFwcGVkQ29tcG9uZW50LCBtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgb3B0aW9ucyk7XG4gICAgICB2YXIgY29uZmlnV2l0aERlZmF1bHRzID0gX2V4dGVuZHMoe1xuICAgICAgICBvdmVyd3JpdGVPbkluaXRpYWxWYWx1ZXNDaGFuZ2U6IHRydWUsXG4gICAgICAgIHRvdWNoT25CbHVyOiB0cnVlLFxuICAgICAgICB0b3VjaE9uQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgZGVzdHJveU9uVW5tb3VudDogdHJ1ZVxuICAgICAgfSwgY29uZmlnKTtcblxuICAgICAgdmFyIENvbm5lY3RlZEZvcm0gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgICBfaW5oZXJpdHMoQ29ubmVjdGVkRm9ybSwgX0NvbXBvbmVudCk7XG5cbiAgICAgICAgZnVuY3Rpb24gQ29ubmVjdGVkRm9ybShwcm9wcykge1xuICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb25uZWN0ZWRGb3JtKTtcblxuICAgICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgICAgX3RoaXMuaGFuZGxlU3VibWl0UGFzc2JhY2sgPSBfdGhpcy5oYW5kbGVTdWJtaXRQYXNzYmFjay5iaW5kKF90aGlzKTtcbiAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBDb25uZWN0ZWRGb3JtLnByb3RvdHlwZS5oYW5kbGVTdWJtaXRQYXNzYmFjayA9IGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdFBhc3NiYWNrKHN1Ym1pdCkge1xuICAgICAgICAgIHRoaXMuc3VibWl0ID0gc3VibWl0O1xuICAgICAgICB9O1xuXG4gICAgICAgIENvbm5lY3RlZEZvcm0ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWR1eEZvcm1Db25uZWN0b3IsIF9leHRlbmRzKHt9LCBjb25maWdXaXRoRGVmYXVsdHMsIHRoaXMucHJvcHMsIHtcbiAgICAgICAgICAgIHN1Ym1pdFBhc3NiYWNrOiB0aGlzLmhhbmRsZVN1Ym1pdFBhc3NiYWNrIH0pKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gQ29ubmVjdGVkRm9ybTtcbiAgICAgIH0oQ29tcG9uZW50KTtcblxuICAgICAgcmV0dXJuICgwLCBfaG9pc3ROb25SZWFjdFN0YXRpY3MyLmRlZmF1bHQpKENvbm5lY3RlZEZvcm0sIFdyYXBwZWRDb21wb25lbnQpO1xuICAgIH07XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVSZWR1eEZvcm07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvY3JlYXRlUmVkdXhGb3JtLmpzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9ub0dldHRlcnMgPSByZXF1aXJlKCdyZWFjdC1sYXp5LWNhY2hlL25vR2V0dGVycycpO1xuXG52YXIgX25vR2V0dGVyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ub0dldHRlcnMpO1xuXG52YXIgX2dldERpc3BsYXlOYW1lID0gcmVxdWlyZSgnLi9nZXREaXNwbGF5TmFtZScpO1xuXG52YXIgX2dldERpc3BsYXlOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldERpc3BsYXlOYW1lKTtcblxudmFyIF9jcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQnKTtcblxudmFyIF9jcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IHRyYWNrcyBwcm9wcyB0aGF0IGFmZmVjdCBob3cgdGhlIGZvcm0gaXMgbW91bnRlZCB0byB0aGUgc3RvcmUuIE5vcm1hbGx5IHRoZXNlIHNob3VsZCBub3QgY2hhbmdlLFxuICogYnV0IGlmIHRoZXkgZG8sIHRoZSBjb25uZWN0ZWQgY29tcG9uZW50cyBiZWxvdyBpdCBuZWVkIHRvIGJlIHJlZGVmaW5lZC5cbiAqL1xudmFyIGNyZWF0ZVJlZHV4Rm9ybUNvbm5lY3RvciA9IGZ1bmN0aW9uIGNyZWF0ZVJlZHV4Rm9ybUNvbm5lY3Rvcihpc1JlYWN0TmF0aXZlLCBSZWFjdCwgY29ubmVjdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKFdyYXBwZWRDb21wb25lbnQsIG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBvcHRpb25zKSB7XG4gICAgdmFyIENvbXBvbmVudCA9IFJlYWN0LkNvbXBvbmVudDtcbiAgICB2YXIgUHJvcFR5cGVzID0gUmVhY3QuUHJvcFR5cGVzO1xuXG4gICAgdmFyIFJlZHV4Rm9ybUNvbm5lY3RvciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHMoUmVkdXhGb3JtQ29ubmVjdG9yLCBfQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gUmVkdXhGb3JtQ29ubmVjdG9yKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWR1eEZvcm1Db25uZWN0b3IpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLmNhY2hlID0gbmV3IF9ub0dldHRlcnMyLmRlZmF1bHQoX3RoaXMsIHtcbiAgICAgICAgICBSZWR1eEZvcm06IHtcbiAgICAgICAgICAgIHBhcmFtczogW1xuICAgICAgICAgICAgLy8gcHJvcHMgdGhhdCBlZmZlY3QgaG93IHJlZHV4LWZvcm0gY29ubmVjdHMgdG8gdGhlIHJlZHV4IHN0b3JlXG4gICAgICAgICAgICAncmVkdXhNb3VudFBvaW50JywgJ2Zvcm0nLCAnZm9ybUtleScsICdnZXRGb3JtU3RhdGUnXSxcbiAgICAgICAgICAgIGZuOiAoMCwgX2NyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50Mi5kZWZhdWx0KShwcm9wcywgaXNSZWFjdE5hdGl2ZSwgUmVhY3QsIGNvbm5lY3QsIFdyYXBwZWRDb21wb25lbnQsIG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBvcHRpb25zKVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cblxuICAgICAgUmVkdXhGb3JtQ29ubmVjdG9yLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgdGhpcy5jYWNoZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICBSZWR1eEZvcm1Db25uZWN0b3IucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIFJlZHV4Rm9ybSA9IHRoaXMuY2FjaGUuZ2V0KCdSZWR1eEZvcm0nKTtcbiAgICAgICAgLy8gcmVtb3ZlIHNvbWUgcmVkdXgtZm9ybSBjb25maWctb25seSBwcm9wc1xuICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIHJlZHV4TW91bnRQb2ludCA9IF9wcm9wcy5yZWR1eE1vdW50UG9pbnQ7XG4gICAgICAgIHZhciBkZXN0cm95T25Vbm1vdW50ID0gX3Byb3BzLmRlc3Ryb3lPblVubW91bnQ7XG4gICAgICAgIHZhciBmb3JtID0gX3Byb3BzLmZvcm07XG4gICAgICAgIHZhciBnZXRGb3JtU3RhdGUgPSBfcHJvcHMuZ2V0Rm9ybVN0YXRlO1xuICAgICAgICB2YXIgdG91Y2hPbkJsdXIgPSBfcHJvcHMudG91Y2hPbkJsdXI7XG4gICAgICAgIHZhciB0b3VjaE9uQ2hhbmdlID0gX3Byb3BzLnRvdWNoT25DaGFuZ2U7XG5cbiAgICAgICAgdmFyIHBhc3NhYmxlUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ3JlZHV4TW91bnRQb2ludCcsICdkZXN0cm95T25Vbm1vdW50JywgJ2Zvcm0nLCAnZ2V0Rm9ybVN0YXRlJywgJ3RvdWNoT25CbHVyJywgJ3RvdWNoT25DaGFuZ2UnXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVkZWNsYXJlXG5cblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWR1eEZvcm0sIHBhc3NhYmxlUHJvcHMpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFJlZHV4Rm9ybUNvbm5lY3RvcjtcbiAgICB9KENvbXBvbmVudCk7XG5cbiAgICBSZWR1eEZvcm1Db25uZWN0b3IuZGlzcGxheU5hbWUgPSAnUmVkdXhGb3JtQ29ubmVjdG9yKCcgKyAoMCwgX2dldERpc3BsYXlOYW1lMi5kZWZhdWx0KShXcmFwcGVkQ29tcG9uZW50KSArICcpJztcbiAgICBSZWR1eEZvcm1Db25uZWN0b3IuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgUmVkdXhGb3JtQ29ubmVjdG9yLnByb3BUeXBlcyA9IHtcbiAgICAgIGRlc3Ryb3lPblVubW91bnQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgcmVkdXhNb3VudFBvaW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZm9ybTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgZm9ybUtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGdldEZvcm1TdGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICB0b3VjaE9uQmx1cjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICB0b3VjaE9uQ2hhbmdlOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG4gICAgUmVkdXhGb3JtQ29ubmVjdG9yLmRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIHJlZHV4TW91bnRQb2ludDogJ2Zvcm0nLFxuICAgICAgZ2V0Rm9ybVN0YXRlOiBmdW5jdGlvbiBnZXRGb3JtU3RhdGUoc3RhdGUsIHJlZHV4TW91bnRQb2ludCkge1xuICAgICAgICByZXR1cm4gc3RhdGVbcmVkdXhNb3VudFBvaW50XTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBSZWR1eEZvcm1Db25uZWN0b3I7XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVSZWR1eEZvcm1Db25uZWN0b3I7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvY3JlYXRlUmVkdXhGb3JtQ29ubmVjdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvbm9HZXR0ZXJzJyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1sYXp5LWNhY2hlL25vR2V0dGVycy5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfZGVlcEVxdWFsID0gcmVxdWlyZSgnZGVlcC1lcXVhbCcpO1xuXG52YXIgX2RlZXBFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWVwRXF1YWwpO1xuXG5mdW5jdGlvbiBpbnRlcnNlY3RzKGFycmF5MSwgYXJyYXkyKSB7XG4gIHJldHVybiAhIShhcnJheTEgJiYgYXJyYXkyICYmIGFycmF5MS5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuIH5hcnJheTIuaW5kZXhPZihpdGVtKTtcbiAgfSkpO1xufVxuXG52YXIgTGF6eUNhY2hlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTGF6eUNhY2hlKGNvbXBvbmVudCwgY2FsY3VsYXRvcnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExhenlDYWNoZSk7XG5cbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB0aGlzLmFsbFByb3BzID0gW107XG4gICAgdGhpcy5jYWNoZSA9IE9iamVjdC5rZXlzKGNhbGN1bGF0b3JzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBrZXkpIHtcbiAgICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICAgIHZhciBjYWxjdWxhdG9yID0gY2FsY3VsYXRvcnNba2V5XTtcbiAgICAgIHZhciBmbiA9IGNhbGN1bGF0b3IuZm47XG4gICAgICB2YXIgcGFyYW1OYW1lcyA9IGNhbGN1bGF0b3IucGFyYW1zO1xuICAgICAgcGFyYW1OYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICBpZiAoISB+X3RoaXMuYWxsUHJvcHMuaW5kZXhPZihwYXJhbSkpIHtcbiAgICAgICAgICBfdGhpcy5hbGxQcm9wcy5wdXNoKHBhcmFtKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGFjY3VtdWxhdG9yLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltrZXldID0ge1xuICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICBwcm9wczogcGFyYW1OYW1lcyxcbiAgICAgICAgZm46IGZuXG4gICAgICB9LCBfZXh0ZW5kczIpKTtcbiAgICB9LCB7fSk7XG4gIH1cblxuICBMYXp5Q2FjaGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICB2YXIgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnQ7XG4gICAgdmFyIF9jYWNoZSRrZXkgPSB0aGlzLmNhY2hlW2tleV07XG4gICAgdmFyIHZhbHVlID0gX2NhY2hlJGtleS52YWx1ZTtcbiAgICB2YXIgZm4gPSBfY2FjaGUka2V5LmZuO1xuICAgIHZhciBwcm9wcyA9IF9jYWNoZSRrZXkucHJvcHM7XG5cbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICB2YXIgcGFyYW1zID0gcHJvcHMubWFwKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICByZXR1cm4gY29tcG9uZW50LnByb3BzW3Byb3BdO1xuICAgIH0pO1xuICAgIHZhciByZXN1bHQgPSBmbi5hcHBseSh1bmRlZmluZWQsIHBhcmFtcyk7XG4gICAgdGhpcy5jYWNoZVtrZXldLnZhbHVlID0gcmVzdWx0O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgTGF6eUNhY2hlLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudDtcblxuICAgIHZhciBkaWZmUHJvcHMgPSBbXTtcbiAgICB0aGlzLmFsbFByb3BzLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIGlmICghX2RlZXBFcXVhbDJbJ2RlZmF1bHQnXShjb21wb25lbnQucHJvcHNbcHJvcF0sIG5leHRQcm9wc1twcm9wXSkpIHtcbiAgICAgICAgZGlmZlByb3BzLnB1c2gocHJvcCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGRpZmZQcm9wcy5sZW5ndGgpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuY2FjaGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoaW50ZXJzZWN0cyhkaWZmUHJvcHMsIF90aGlzMi5jYWNoZVtrZXldLnByb3BzKSkge1xuICAgICAgICAgIGRlbGV0ZSBfdGhpczIuY2FjaGVba2V5XS52YWx1ZTsgLy8gdW5jYWNoZSB2YWx1ZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIExhenlDYWNoZTtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IExhenlDYWNoZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWxhenktY2FjaGUvbGliL25vR2V0dGVycy5qc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgcFNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuL2xpYi9rZXlzLmpzJyk7XG52YXIgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2xpYi9pc19hcmd1bWVudHMuanMnKTtcblxudmFyIGRlZXBFcXVhbCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFjdHVhbCwgZXhwZWN0ZWQsIG9wdHMpIHtcbiAgaWYgKCFvcHRzKSBvcHRzID0ge307XG4gIC8vIDcuMS4gQWxsIGlkZW50aWNhbCB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGFzIGRldGVybWluZWQgYnkgPT09LlxuICBpZiAoYWN0dWFsID09PSBleHBlY3RlZCkge1xuICAgIHJldHVybiB0cnVlO1xuXG4gIH0gZWxzZSBpZiAoYWN0dWFsIGluc3RhbmNlb2YgRGF0ZSAmJiBleHBlY3RlZCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gYWN0dWFsLmdldFRpbWUoKSA9PT0gZXhwZWN0ZWQuZ2V0VGltZSgpO1xuXG4gIC8vIDcuMy4gT3RoZXIgcGFpcnMgdGhhdCBkbyBub3QgYm90aCBwYXNzIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyxcbiAgLy8gZXF1aXZhbGVuY2UgaXMgZGV0ZXJtaW5lZCBieSA9PS5cbiAgfSBlbHNlIGlmICghYWN0dWFsIHx8ICFleHBlY3RlZCB8fCB0eXBlb2YgYWN0dWFsICE9ICdvYmplY3QnICYmIHR5cGVvZiBleHBlY3RlZCAhPSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBvcHRzLnN0cmljdCA/IGFjdHVhbCA9PT0gZXhwZWN0ZWQgOiBhY3R1YWwgPT0gZXhwZWN0ZWQ7XG5cbiAgLy8gNy40LiBGb3IgYWxsIG90aGVyIE9iamVjdCBwYWlycywgaW5jbHVkaW5nIEFycmF5IG9iamVjdHMsIGVxdWl2YWxlbmNlIGlzXG4gIC8vIGRldGVybWluZWQgYnkgaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChhcyB2ZXJpZmllZFxuICAvLyB3aXRoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCksIHRoZSBzYW1lIHNldCBvZiBrZXlzXG4gIC8vIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLCBlcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnlcbiAgLy8gY29ycmVzcG9uZGluZyBrZXksIGFuZCBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuIE5vdGU6IHRoaXNcbiAgLy8gYWNjb3VudHMgZm9yIGJvdGggbmFtZWQgYW5kIGluZGV4ZWQgcHJvcGVydGllcyBvbiBBcnJheXMuXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG9iakVxdWl2KGFjdHVhbCwgZXhwZWN0ZWQsIG9wdHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAoeCkge1xuICBpZiAoIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnIHx8IHR5cGVvZiB4Lmxlbmd0aCAhPT0gJ251bWJlcicpIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiB4LmNvcHkgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHguc2xpY2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHgubGVuZ3RoID4gMCAmJiB0eXBlb2YgeFswXSAhPT0gJ251bWJlcicpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG9iakVxdWl2KGEsIGIsIG9wdHMpIHtcbiAgdmFyIGksIGtleTtcbiAgaWYgKGlzVW5kZWZpbmVkT3JOdWxsKGEpIHx8IGlzVW5kZWZpbmVkT3JOdWxsKGIpKVxuICAgIHJldHVybiBmYWxzZTtcbiAgLy8gYW4gaWRlbnRpY2FsICdwcm90b3R5cGUnIHByb3BlcnR5LlxuICBpZiAoYS5wcm90b3R5cGUgIT09IGIucHJvdG90eXBlKSByZXR1cm4gZmFsc2U7XG4gIC8vfn5+SSd2ZSBtYW5hZ2VkIHRvIGJyZWFrIE9iamVjdC5rZXlzIHRocm91Z2ggc2NyZXd5IGFyZ3VtZW50cyBwYXNzaW5nLlxuICAvLyAgIENvbnZlcnRpbmcgdG8gYXJyYXkgc29sdmVzIHRoZSBwcm9ibGVtLlxuICBpZiAoaXNBcmd1bWVudHMoYSkpIHtcbiAgICBpZiAoIWlzQXJndW1lbnRzKGIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGEgPSBwU2xpY2UuY2FsbChhKTtcbiAgICBiID0gcFNsaWNlLmNhbGwoYik7XG4gICAgcmV0dXJuIGRlZXBFcXVhbChhLCBiLCBvcHRzKTtcbiAgfVxuICBpZiAoaXNCdWZmZXIoYSkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKGIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFbaV0gIT09IGJbaV0pIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdHJ5IHtcbiAgICB2YXIga2EgPSBvYmplY3RLZXlzKGEpLFxuICAgICAgICBrYiA9IG9iamVjdEtleXMoYik7XG4gIH0gY2F0Y2ggKGUpIHsvL2hhcHBlbnMgd2hlbiBvbmUgaXMgYSBzdHJpbmcgbGl0ZXJhbCBhbmQgdGhlIG90aGVyIGlzbid0XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoa2V5cyBpbmNvcnBvcmF0ZXNcbiAgLy8gaGFzT3duUHJvcGVydHkpXG4gIGlmIChrYS5sZW5ndGggIT0ga2IubGVuZ3RoKVxuICAgIHJldHVybiBmYWxzZTtcbiAgLy90aGUgc2FtZSBzZXQgb2Yga2V5cyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSxcbiAga2Euc29ydCgpO1xuICBrYi5zb3J0KCk7XG4gIC8vfn5+Y2hlYXAga2V5IHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoa2FbaV0gIT0ga2JbaV0pXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy9lcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnkgY29ycmVzcG9uZGluZyBrZXksIGFuZFxuICAvL35+fnBvc3NpYmx5IGV4cGVuc2l2ZSBkZWVwIHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBrZXkgPSBrYVtpXTtcbiAgICBpZiAoIWRlZXBFcXVhbChhW2tleV0sIGJba2V5XSwgb3B0cykpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHlwZW9mIGEgPT09IHR5cGVvZiBiO1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZGVlcC1lcXVhbC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgT2JqZWN0LmtleXMgPT09ICdmdW5jdGlvbidcbiAgPyBPYmplY3Qua2V5cyA6IHNoaW07XG5cbmV4cG9ydHMuc2hpbSA9IHNoaW07XG5mdW5jdGlvbiBzaGltIChvYmopIHtcbiAgdmFyIGtleXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikga2V5cy5wdXNoKGtleSk7XG4gIHJldHVybiBrZXlzO1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZGVlcC1lcXVhbC9saWIva2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgc3VwcG9ydHNBcmd1bWVudHNDbGFzcyA9IChmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50cylcbn0pKCkgPT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHN1cHBvcnRzQXJndW1lbnRzQ2xhc3MgPyBzdXBwb3J0ZWQgOiB1bnN1cHBvcnRlZDtcblxuZXhwb3J0cy5zdXBwb3J0ZWQgPSBzdXBwb3J0ZWQ7XG5mdW5jdGlvbiBzdXBwb3J0ZWQob2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSA9PSAnW29iamVjdCBBcmd1bWVudHNdJztcbn07XG5cbmV4cG9ydHMudW5zdXBwb3J0ZWQgPSB1bnN1cHBvcnRlZDtcbmZ1bmN0aW9uIHVuc3VwcG9ydGVkKG9iamVjdCl7XG4gIHJldHVybiBvYmplY3QgJiZcbiAgICB0eXBlb2Ygb2JqZWN0ID09ICdvYmplY3QnICYmXG4gICAgdHlwZW9mIG9iamVjdC5sZW5ndGggPT0gJ251bWJlcicgJiZcbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnY2FsbGVlJykgJiZcbiAgICAhT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgJ2NhbGxlZScpIHx8XG4gICAgZmFsc2U7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZGVlcC1lcXVhbC9saWIvaXNfYXJndW1lbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcCkge1xuICByZXR1cm4gQ29tcC5kaXNwbGF5TmFtZSB8fCBDb21wLm5hbWUgfHwgJ0NvbXBvbmVudCc7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvZ2V0RGlzcGxheU5hbWUuanNcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2FjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMnKTtcblxudmFyIGltcG9ydGVkQWN0aW9ucyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9hY3Rpb25zKTtcblxudmFyIF9nZXREaXNwbGF5TmFtZSA9IHJlcXVpcmUoJy4vZ2V0RGlzcGxheU5hbWUnKTtcblxudmFyIF9nZXREaXNwbGF5TmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXREaXNwbGF5TmFtZSk7XG5cbnZhciBfcmVkdWNlciA9IHJlcXVpcmUoJy4vcmVkdWNlcicpO1xuXG52YXIgX2RlZXBFcXVhbCA9IHJlcXVpcmUoJ2RlZXAtZXF1YWwnKTtcblxudmFyIF9kZWVwRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVlcEVxdWFsKTtcblxudmFyIF9iaW5kQWN0aW9uRGF0YSA9IHJlcXVpcmUoJy4vYmluZEFjdGlvbkRhdGEnKTtcblxudmFyIF9iaW5kQWN0aW9uRGF0YTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iaW5kQWN0aW9uRGF0YSk7XG5cbnZhciBfZ2V0VmFsdWVzID0gcmVxdWlyZSgnLi9nZXRWYWx1ZXMnKTtcblxudmFyIF9nZXRWYWx1ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0VmFsdWVzKTtcblxudmFyIF9pc1ZhbGlkID0gcmVxdWlyZSgnLi9pc1ZhbGlkJyk7XG5cbnZhciBfaXNWYWxpZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ZhbGlkKTtcblxudmFyIF9yZWFkRmllbGRzID0gcmVxdWlyZSgnLi9yZWFkRmllbGRzJyk7XG5cbnZhciBfcmVhZEZpZWxkczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFkRmllbGRzKTtcblxudmFyIF9oYW5kbGVTdWJtaXQyID0gcmVxdWlyZSgnLi9oYW5kbGVTdWJtaXQnKTtcblxudmFyIF9oYW5kbGVTdWJtaXQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlU3VibWl0Mik7XG5cbnZhciBfYXN5bmNWYWxpZGF0aW9uID0gcmVxdWlyZSgnLi9hc3luY1ZhbGlkYXRpb24nKTtcblxudmFyIF9hc3luY1ZhbGlkYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXN5bmNWYWxpZGF0aW9uKTtcblxudmFyIF9zaWxlbmNlRXZlbnRzID0gcmVxdWlyZSgnLi9ldmVudHMvc2lsZW5jZUV2ZW50cycpO1xuXG52YXIgX3NpbGVuY2VFdmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2lsZW5jZUV2ZW50cyk7XG5cbnZhciBfc2lsZW5jZUV2ZW50ID0gcmVxdWlyZSgnLi9ldmVudHMvc2lsZW5jZUV2ZW50Jyk7XG5cbnZhciBfc2lsZW5jZUV2ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbGVuY2VFdmVudCk7XG5cbnZhciBfd3JhcE1hcERpc3BhdGNoVG9Qcm9wcyA9IHJlcXVpcmUoJy4vd3JhcE1hcERpc3BhdGNoVG9Qcm9wcycpO1xuXG52YXIgX3dyYXBNYXBEaXNwYXRjaFRvUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd3JhcE1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbnZhciBfd3JhcE1hcFN0YXRlVG9Qcm9wcyA9IHJlcXVpcmUoJy4vd3JhcE1hcFN0YXRlVG9Qcm9wcycpO1xuXG52YXIgX3dyYXBNYXBTdGF0ZVRvUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd3JhcE1hcFN0YXRlVG9Qcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIENyZWF0ZXMgYSBIT0MgdGhhdCBrbm93cyBob3cgdG8gY3JlYXRlIHJlZHV4LWNvbm5lY3RlZCBzdWItY29tcG9uZW50cy5cbiAqL1xudmFyIGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50ID0gZnVuY3Rpb24gY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoY29uZmlnLCBpc1JlYWN0TmF0aXZlLCBSZWFjdCwgY29ubmVjdCwgV3JhcHBlZENvbXBvbmVudCwgbWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIG9wdGlvbnMpIHtcbiAgdmFyIENvbXBvbmVudCA9IFJlYWN0LkNvbXBvbmVudDtcbiAgdmFyIFByb3BUeXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxuICByZXR1cm4gZnVuY3Rpb24gKHJlZHV4TW91bnRQb2ludCwgZm9ybU5hbWUsIGZvcm1LZXksIGdldEZvcm1TdGF0ZSkge1xuICAgIHZhciBSZWR1eEZvcm0gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzKFJlZHV4Rm9ybSwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIFJlZHV4Rm9ybShwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVkdXhGb3JtKTtcblxuICAgICAgICAvLyBiaW5kIGZ1bmN0aW9uc1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLmFzeW5jVmFsaWRhdGUgPSBfdGhpcy5hc3luY1ZhbGlkYXRlLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5oYW5kbGVTdWJtaXQgPSBfdGhpcy5oYW5kbGVTdWJtaXQuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLmZpZWxkcyA9ICgwLCBfcmVhZEZpZWxkczIuZGVmYXVsdCkocHJvcHMsIHt9LCB7fSwgX3RoaXMuYXN5bmNWYWxpZGF0ZSwgaXNSZWFjdE5hdGl2ZSk7XG4gICAgICAgIHZhciBzdWJtaXRQYXNzYmFjayA9IF90aGlzLnByb3BzLnN1Ym1pdFBhc3NiYWNrO1xuXG4gICAgICAgIHN1Ym1pdFBhc3NiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlU3VibWl0KCk7XG4gICAgICAgIH0pOyAvLyB3cmFwcGVkIGluIGZ1bmN0aW9uIHRvIGRpc2FsbG93IHBhcmFtc1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9XG5cbiAgICAgIFJlZHV4Rm9ybS5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIGZpZWxkcyA9IF9wcm9wcy5maWVsZHM7XG4gICAgICAgIHZhciBmb3JtID0gX3Byb3BzLmZvcm07XG4gICAgICAgIHZhciBpbml0aWFsaXplID0gX3Byb3BzLmluaXRpYWxpemU7XG4gICAgICAgIHZhciBpbml0aWFsVmFsdWVzID0gX3Byb3BzLmluaXRpYWxWYWx1ZXM7XG5cbiAgICAgICAgaWYgKGluaXRpYWxWYWx1ZXMgJiYgIWZvcm0uX2luaXRpYWxpemVkKSB7XG4gICAgICAgICAgaW5pdGlhbGl6ZShpbml0aWFsVmFsdWVzLCBmaWVsZHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBSZWR1eEZvcm0ucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAoISgwLCBfZGVlcEVxdWFsMi5kZWZhdWx0KSh0aGlzLnByb3BzLmZpZWxkcywgbmV4dFByb3BzLmZpZWxkcykgfHwgISgwLCBfZGVlcEVxdWFsMi5kZWZhdWx0KSh0aGlzLnByb3BzLmZvcm0sIG5leHRQcm9wcy5mb3JtLCB7IHN0cmljdDogdHJ1ZSB9KSkge1xuICAgICAgICAgIHRoaXMuZmllbGRzID0gKDAsIF9yZWFkRmllbGRzMi5kZWZhdWx0KShuZXh0UHJvcHMsIHRoaXMucHJvcHMsIHRoaXMuZmllbGRzLCB0aGlzLmFzeW5jVmFsaWRhdGUsIGlzUmVhY3ROYXRpdmUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKDAsIF9kZWVwRXF1YWwyLmRlZmF1bHQpKHRoaXMucHJvcHMuaW5pdGlhbFZhbHVlcywgbmV4dFByb3BzLmluaXRpYWxWYWx1ZXMpKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5pbml0aWFsaXplKG5leHRQcm9wcy5pbml0aWFsVmFsdWVzLCBuZXh0UHJvcHMuZmllbGRzLCB0aGlzLnByb3BzLm92ZXJ3cml0ZU9uSW5pdGlhbFZhbHVlc0NoYW5nZSB8fCAhdGhpcy5wcm9wcy5mb3JtLl9pbml0aWFsaXplZCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIFJlZHV4Rm9ybS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5kZXN0cm95T25Vbm1vdW50KSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIFJlZHV4Rm9ybS5wcm90b3R5cGUuYXN5bmNWYWxpZGF0ZSA9IGZ1bmN0aW9uIGFzeW5jVmFsaWRhdGUobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgYWx3YXlzQXN5bmNWYWxpZGF0ZSA9IF9wcm9wczIuYWx3YXlzQXN5bmNWYWxpZGF0ZTtcbiAgICAgICAgdmFyIGFzeW5jVmFsaWRhdGUgPSBfcHJvcHMyLmFzeW5jVmFsaWRhdGU7XG4gICAgICAgIHZhciBkaXNwYXRjaCA9IF9wcm9wczIuZGlzcGF0Y2g7XG4gICAgICAgIHZhciBmaWVsZHMgPSBfcHJvcHMyLmZpZWxkcztcbiAgICAgICAgdmFyIGZvcm0gPSBfcHJvcHMyLmZvcm07XG4gICAgICAgIHZhciBzdGFydEFzeW5jVmFsaWRhdGlvbiA9IF9wcm9wczIuc3RhcnRBc3luY1ZhbGlkYXRpb247XG4gICAgICAgIHZhciBzdG9wQXN5bmNWYWxpZGF0aW9uID0gX3Byb3BzMi5zdG9wQXN5bmNWYWxpZGF0aW9uO1xuICAgICAgICB2YXIgdmFsaWRhdGUgPSBfcHJvcHMyLnZhbGlkYXRlO1xuXG4gICAgICAgIHZhciBpc1N1Ym1pdHRpbmcgPSAhbmFtZTtcbiAgICAgICAgaWYgKGFzeW5jVmFsaWRhdGUpIHtcbiAgICAgICAgICB2YXIgX3JldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSAoMCwgX2dldFZhbHVlczIuZGVmYXVsdCkoZmllbGRzLCBmb3JtKTtcbiAgICAgICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICAgIHZhbHVlc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN5bmNFcnJvcnMgPSB2YWxpZGF0ZSh2YWx1ZXMsIF90aGlzMi5wcm9wcyk7XG4gICAgICAgICAgICB2YXIgYWxsUHJpc3RpbmUgPSBfdGhpczIuZmllbGRzLl9tZXRhLmFsbFByaXN0aW5lO1xuXG4gICAgICAgICAgICB2YXIgaW5pdGlhbGl6ZWQgPSBmb3JtLl9pbml0aWFsaXplZDtcblxuICAgICAgICAgICAgLy8gaWYgYmx1ciB2YWxpZGF0aW5nLCBvbmx5IHJ1biBhc3luYyB2YWxpZGF0ZSBpZiBzeW5jIHZhbGlkYXRpb24gcGFzc2VzXG4gICAgICAgICAgICAvLyBhbmQgc3VibWl0dGluZyAobm90IGJsdXIgdmFsaWRhdGlvbikgb3IgZm9ybSBpcyBkaXJ0eSBvciBmb3JtIHdhcyBuZXZlciBpbml0aWFsaXplZFxuICAgICAgICAgICAgLy8gdW5sZXNzIGFsd2F5c0FzeW5jVmFsaWRhdGUgaXMgdHJ1ZVxuICAgICAgICAgICAgdmFyIHN5bmNWYWxpZGF0aW9uUGFzc2VzID0gaXNTdWJtaXR0aW5nIHx8ICgwLCBfaXNWYWxpZDIuZGVmYXVsdCkoc3luY0Vycm9yc1tuYW1lXSk7XG4gICAgICAgICAgICBpZiAoYWx3YXlzQXN5bmNWYWxpZGF0ZSB8fCBzeW5jVmFsaWRhdGlvblBhc3NlcyAmJiAoaXNTdWJtaXR0aW5nIHx8ICFhbGxQcmlzdGluZSB8fCAhaW5pdGlhbGl6ZWQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdjogKDAsIF9hc3luY1ZhbGlkYXRpb24yLmRlZmF1bHQpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhc3luY1ZhbGlkYXRlKHZhbHVlcywgZGlzcGF0Y2gsIF90aGlzMi5wcm9wcyk7XG4gICAgICAgICAgICAgICAgfSwgc3RhcnRBc3luY1ZhbGlkYXRpb24sIHN0b3BBc3luY1ZhbGlkYXRpb24sIG5hbWUpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSgpO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBfcmV0ID09PSBcIm9iamVjdFwiKSByZXR1cm4gX3JldC52O1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBSZWR1eEZvcm0ucHJvdG90eXBlLmhhbmRsZVN1Ym1pdCA9IGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChzdWJtaXRPckV2ZW50KSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIG9uU3VibWl0ID0gX3Byb3BzMy5vblN1Ym1pdDtcbiAgICAgICAgdmFyIGZpZWxkcyA9IF9wcm9wczMuZmllbGRzO1xuICAgICAgICB2YXIgZm9ybSA9IF9wcm9wczMuZm9ybTtcblxuICAgICAgICB2YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhzdWJtaXQpIHtcbiAgICAgICAgICBpZiAoIXN1Ym1pdCB8fCB0eXBlb2Ygc3VibWl0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IGVpdGhlciBwYXNzIGhhbmRsZVN1Ym1pdCgpIGFuIG9uU3VibWl0IGZ1bmN0aW9uIG9yIHBhc3Mgb25TdWJtaXQgYXMgYSBwcm9wJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdWJtaXQ7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAhc3VibWl0T3JFdmVudCB8fCAoMCwgX3NpbGVuY2VFdmVudDIuZGVmYXVsdCkoc3VibWl0T3JFdmVudCkgP1xuICAgICAgICAvLyBzdWJtaXRPckV2ZW50IGlzIGFuIGV2ZW50OiBmaXJlIHN1Ym1pdFxuICAgICAgICAoMCwgX2hhbmRsZVN1Ym1pdDMuZGVmYXVsdCkoY2hlY2sob25TdWJtaXQpLCAoMCwgX2dldFZhbHVlczIuZGVmYXVsdCkoZmllbGRzLCBmb3JtKSwgdGhpcy5wcm9wcywgdGhpcy5hc3luY1ZhbGlkYXRlKSA6XG4gICAgICAgIC8vIHN1Ym1pdE9yRXZlbnQgaXMgdGhlIHN1Ym1pdCBmdW5jdGlvbjogcmV0dXJuIGRlZmVycmVkIHN1Ym1pdCB0aHVua1xuICAgICAgICAoMCwgX3NpbGVuY2VFdmVudHMyLmRlZmF1bHQpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gKDAsIF9oYW5kbGVTdWJtaXQzLmRlZmF1bHQpKGNoZWNrKHN1Ym1pdE9yRXZlbnQpLCAoMCwgX2dldFZhbHVlczIuZGVmYXVsdCkoZmllbGRzLCBmb3JtKSwgX3RoaXMzLnByb3BzLCBfdGhpczMuYXN5bmNWYWxpZGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgUmVkdXhGb3JtLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpczQgPSB0aGlzLFxuICAgICAgICAgICAgX3JlZjtcblxuICAgICAgICB2YXIgYWxsRmllbGRzID0gdGhpcy5maWVsZHM7XG4gICAgICAgIHZhciBfcHJvcHM0ID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIGFkZEFycmF5VmFsdWUgPSBfcHJvcHM0LmFkZEFycmF5VmFsdWU7XG4gICAgICAgIHZhciBhc3luY0JsdXJGaWVsZHMgPSBfcHJvcHM0LmFzeW5jQmx1ckZpZWxkcztcbiAgICAgICAgdmFyIGF1dG9maWxsID0gX3Byb3BzNC5hdXRvZmlsbDtcbiAgICAgICAgdmFyIGJsdXIgPSBfcHJvcHM0LmJsdXI7XG4gICAgICAgIHZhciBjaGFuZ2UgPSBfcHJvcHM0LmNoYW5nZTtcbiAgICAgICAgdmFyIGRlc3Ryb3kgPSBfcHJvcHM0LmRlc3Ryb3k7XG4gICAgICAgIHZhciBmb2N1cyA9IF9wcm9wczQuZm9jdXM7XG4gICAgICAgIHZhciBmaWVsZHMgPSBfcHJvcHM0LmZpZWxkcztcbiAgICAgICAgdmFyIGZvcm0gPSBfcHJvcHM0LmZvcm07XG4gICAgICAgIHZhciBpbml0aWFsVmFsdWVzID0gX3Byb3BzNC5pbml0aWFsVmFsdWVzO1xuICAgICAgICB2YXIgaW5pdGlhbGl6ZSA9IF9wcm9wczQuaW5pdGlhbGl6ZTtcbiAgICAgICAgdmFyIG9uU3VibWl0ID0gX3Byb3BzNC5vblN1Ym1pdDtcbiAgICAgICAgdmFyIHByb3BOYW1lc3BhY2UgPSBfcHJvcHM0LnByb3BOYW1lc3BhY2U7XG4gICAgICAgIHZhciByZXNldCA9IF9wcm9wczQucmVzZXQ7XG4gICAgICAgIHZhciByZW1vdmVBcnJheVZhbHVlID0gX3Byb3BzNC5yZW1vdmVBcnJheVZhbHVlO1xuICAgICAgICB2YXIgcmV0dXJuUmVqZWN0ZWRTdWJtaXRQcm9taXNlID0gX3Byb3BzNC5yZXR1cm5SZWplY3RlZFN1Ym1pdFByb21pc2U7XG4gICAgICAgIHZhciBzdGFydEFzeW5jVmFsaWRhdGlvbiA9IF9wcm9wczQuc3RhcnRBc3luY1ZhbGlkYXRpb247XG4gICAgICAgIHZhciBzdGFydFN1Ym1pdCA9IF9wcm9wczQuc3RhcnRTdWJtaXQ7XG4gICAgICAgIHZhciBzdG9wQXN5bmNWYWxpZGF0aW9uID0gX3Byb3BzNC5zdG9wQXN5bmNWYWxpZGF0aW9uO1xuICAgICAgICB2YXIgc3RvcFN1Ym1pdCA9IF9wcm9wczQuc3RvcFN1Ym1pdDtcbiAgICAgICAgdmFyIHN1Ym1pdEZhaWxlZCA9IF9wcm9wczQuc3VibWl0RmFpbGVkO1xuICAgICAgICB2YXIgc3dhcEFycmF5VmFsdWVzID0gX3Byb3BzNC5zd2FwQXJyYXlWYWx1ZXM7XG4gICAgICAgIHZhciB0b3VjaCA9IF9wcm9wczQudG91Y2g7XG4gICAgICAgIHZhciB1bnRvdWNoID0gX3Byb3BzNC51bnRvdWNoO1xuICAgICAgICB2YXIgdmFsaWRhdGUgPSBfcHJvcHM0LnZhbGlkYXRlO1xuXG4gICAgICAgIHZhciBwYXNzYWJsZVByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wczQsIFsnYWRkQXJyYXlWYWx1ZScsICdhc3luY0JsdXJGaWVsZHMnLCAnYXV0b2ZpbGwnLCAnYmx1cicsICdjaGFuZ2UnLCAnZGVzdHJveScsICdmb2N1cycsICdmaWVsZHMnLCAnZm9ybScsICdpbml0aWFsVmFsdWVzJywgJ2luaXRpYWxpemUnLCAnb25TdWJtaXQnLCAncHJvcE5hbWVzcGFjZScsICdyZXNldCcsICdyZW1vdmVBcnJheVZhbHVlJywgJ3JldHVyblJlamVjdGVkU3VibWl0UHJvbWlzZScsICdzdGFydEFzeW5jVmFsaWRhdGlvbicsICdzdGFydFN1Ym1pdCcsICdzdG9wQXN5bmNWYWxpZGF0aW9uJywgJ3N0b3BTdWJtaXQnLCAnc3VibWl0RmFpbGVkJywgJ3N3YXBBcnJheVZhbHVlcycsICd0b3VjaCcsICd1bnRvdWNoJywgJ3ZhbGlkYXRlJ10pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlZGVjbGFyZVxuXG5cbiAgICAgICAgdmFyIF9hbGxGaWVsZHMkX21ldGEgPSBhbGxGaWVsZHMuX21ldGE7XG4gICAgICAgIHZhciBhbGxQcmlzdGluZSA9IF9hbGxGaWVsZHMkX21ldGEuYWxsUHJpc3RpbmU7XG4gICAgICAgIHZhciBhbGxWYWxpZCA9IF9hbGxGaWVsZHMkX21ldGEuYWxsVmFsaWQ7XG4gICAgICAgIHZhciBlcnJvcnMgPSBfYWxsRmllbGRzJF9tZXRhLmVycm9ycztcbiAgICAgICAgdmFyIGZvcm1FcnJvciA9IF9hbGxGaWVsZHMkX21ldGEuZm9ybUVycm9yO1xuICAgICAgICB2YXIgdmFsdWVzID0gX2FsbEZpZWxkcyRfbWV0YS52YWx1ZXM7XG5cblxuICAgICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgICAgLy8gU3RhdGU6XG4gICAgICAgICAgYWN0aXZlOiBmb3JtLl9hY3RpdmUsXG4gICAgICAgICAgYXN5bmNWYWxpZGF0aW5nOiBmb3JtLl9hc3luY1ZhbGlkYXRpbmcsXG4gICAgICAgICAgZGlydHk6ICFhbGxQcmlzdGluZSxcbiAgICAgICAgICBlcnJvcjogZm9ybUVycm9yLFxuICAgICAgICAgIGVycm9yczogZXJyb3JzLFxuICAgICAgICAgIGZpZWxkczogYWxsRmllbGRzLFxuICAgICAgICAgIGZvcm1LZXk6IGZvcm1LZXksXG4gICAgICAgICAgaW52YWxpZDogIWFsbFZhbGlkLFxuICAgICAgICAgIHByaXN0aW5lOiBhbGxQcmlzdGluZSxcbiAgICAgICAgICBzdWJtaXR0aW5nOiBmb3JtLl9zdWJtaXR0aW5nLFxuICAgICAgICAgIHN1Ym1pdEZhaWxlZDogZm9ybS5fc3VibWl0RmFpbGVkLFxuICAgICAgICAgIHZhbGlkOiBhbGxWYWxpZCxcbiAgICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcblxuICAgICAgICAgIC8vIEFjdGlvbnM6XG4gICAgICAgICAgYXN5bmNWYWxpZGF0ZTogKDAsIF9zaWxlbmNlRXZlbnRzMi5kZWZhdWx0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM0LmFzeW5jVmFsaWRhdGUoKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvLyBeIGRvZXNuJ3QganVzdCBwYXNzIHRoaXMuYXN5bmNWYWxpZGF0ZSB0byBkaXNhbGxvdyB2YWx1ZXMgcGFzc2luZ1xuICAgICAgICAgIGRlc3Ryb3lGb3JtOiAoMCwgX3NpbGVuY2VFdmVudHMyLmRlZmF1bHQpKGRlc3Ryb3kpLFxuICAgICAgICAgIGhhbmRsZVN1Ym1pdDogdGhpcy5oYW5kbGVTdWJtaXQsXG4gICAgICAgICAgaW5pdGlhbGl6ZUZvcm06ICgwLCBfc2lsZW5jZUV2ZW50czIuZGVmYXVsdCkoZnVuY3Rpb24gKGluaXRWYWx1ZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsaXplKGluaXRWYWx1ZXMsIGZpZWxkcyk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcmVzZXRGb3JtOiAoMCwgX3NpbGVuY2VFdmVudHMyLmRlZmF1bHQpKHJlc2V0KSxcbiAgICAgICAgICB0b3VjaDogKDAsIF9zaWxlbmNlRXZlbnRzMi5kZWZhdWx0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdG91Y2guYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRvdWNoQWxsOiAoMCwgX3NpbGVuY2VFdmVudHMyLmRlZmF1bHQpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0b3VjaC5hcHBseSh1bmRlZmluZWQsIGZpZWxkcyk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdW50b3VjaDogKDAsIF9zaWxlbmNlRXZlbnRzMi5kZWZhdWx0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW50b3VjaC5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdW50b3VjaEFsbDogKDAsIF9zaWxlbmNlRXZlbnRzMi5kZWZhdWx0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW50b3VjaC5hcHBseSh1bmRlZmluZWQsIGZpZWxkcyk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHBhc3NlZFByb3BzID0gcHJvcE5hbWVzcGFjZSA/IChfcmVmID0ge30sIF9yZWZbcHJvcE5hbWVzcGFjZV0gPSBwcm9wcywgX3JlZikgOiBwcm9wcztcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHBhc3NhYmxlUHJvcHMsIHBhc3NlZFByb3BzKSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gUmVkdXhGb3JtO1xuICAgIH0oQ29tcG9uZW50KTtcblxuICAgIFJlZHV4Rm9ybS5kaXNwbGF5TmFtZSA9ICdSZWR1eEZvcm0oJyArICgwLCBfZ2V0RGlzcGxheU5hbWUyLmRlZmF1bHQpKFdyYXBwZWRDb21wb25lbnQpICsgJyknO1xuICAgIFJlZHV4Rm9ybS5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICBSZWR1eEZvcm0ucHJvcFR5cGVzID0ge1xuICAgICAgLy8gcHJvcHM6XG4gICAgICBhbHdheXNBc3luY1ZhbGlkYXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGFzeW5jQmx1ckZpZWxkczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgICBhc3luY1ZhbGlkYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgZmllbGRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKS5pc1JlcXVpcmVkLFxuICAgICAgZm9ybTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIGluaXRpYWxWYWx1ZXM6IFByb3BUeXBlcy5hbnksXG4gICAgICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBvblN1Ym1pdFN1Y2Nlc3M6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgb25TdWJtaXRGYWlsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG92ZXJ3cml0ZU9uSW5pdGlhbFZhbHVlc0NoYW5nZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgIHByb3BOYW1lc3BhY2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICByZWFkb25seTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICByZXR1cm5SZWplY3RlZFN1Ym1pdFByb21pc2U6IFByb3BUeXBlcy5ib29sLFxuICAgICAgc3VibWl0UGFzc2JhY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICB2YWxpZGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAgIC8vIGFjdGlvbnM6XG4gICAgICBhZGRBcnJheVZhbHVlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgYXV0b2ZpbGw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBibHVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgY2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgZGVzdHJveTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGZvY3VzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgaW5pdGlhbGl6ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHJlbW92ZUFycmF5VmFsdWU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICByZXNldDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHN0YXJ0QXN5bmNWYWxpZGF0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgc3RhcnRTdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBzdG9wQXN5bmNWYWxpZGF0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgc3RvcFN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHN1Ym1pdEZhaWxlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHN3YXBBcnJheVZhbHVlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHRvdWNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgdW50b3VjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH07XG4gICAgUmVkdXhGb3JtLmRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIGFzeW5jQmx1ckZpZWxkczogW10sXG4gICAgICBmb3JtOiBfcmVkdWNlci5pbml0aWFsU3RhdGUsXG4gICAgICByZWFkb25seTogZmFsc2UsXG4gICAgICByZXR1cm5SZWplY3RlZFN1Ym1pdFByb21pc2U6IGZhbHNlLFxuICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uIHZhbGlkYXRlKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGJpbmQgdG91Y2ggZmxhZ3MgdG8gYmx1ciBhbmQgY2hhbmdlXG4gICAgdmFyIHVuYm91bmRBY3Rpb25zID0gX2V4dGVuZHMoe30sIGltcG9ydGVkQWN0aW9ucywge1xuICAgICAgYmx1cjogKDAsIF9iaW5kQWN0aW9uRGF0YTIuZGVmYXVsdCkoaW1wb3J0ZWRBY3Rpb25zLmJsdXIsIHtcbiAgICAgICAgdG91Y2g6ICEhY29uZmlnLnRvdWNoT25CbHVyXG4gICAgICB9KSxcbiAgICAgIGNoYW5nZTogKDAsIF9iaW5kQWN0aW9uRGF0YTIuZGVmYXVsdCkoaW1wb3J0ZWRBY3Rpb25zLmNoYW5nZSwge1xuICAgICAgICB0b3VjaDogISFjb25maWcudG91Y2hPbkNoYW5nZVxuICAgICAgfSlcbiAgICB9KTtcblxuICAgIC8vIG1ha2UgcmVkdXggY29ubmVjdG9yIHdpdGggb3Igd2l0aG91dCBmb3JtIGtleVxuICAgIHZhciBkZWNvcmF0ZSA9IGZvcm1LZXkgIT09IHVuZGVmaW5lZCAmJiBmb3JtS2V5ICE9PSBudWxsID8gY29ubmVjdCgoMCwgX3dyYXBNYXBTdGF0ZVRvUHJvcHMyLmRlZmF1bHQpKG1hcFN0YXRlVG9Qcm9wcywgZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICB2YXIgZm9ybVN0YXRlID0gZ2V0Rm9ybVN0YXRlKHN0YXRlLCByZWR1eE1vdW50UG9pbnQpO1xuICAgICAgaWYgKCFmb3JtU3RhdGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBtb3VudCB0aGUgcmVkdXgtZm9ybSByZWR1Y2VyIGF0IFwiJyArIHJlZHV4TW91bnRQb2ludCArICdcIicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1TdGF0ZSAmJiBmb3JtU3RhdGVbZm9ybU5hbWVdICYmIGZvcm1TdGF0ZVtmb3JtTmFtZV1bZm9ybUtleV07XG4gICAgfSksICgwLCBfd3JhcE1hcERpc3BhdGNoVG9Qcm9wczIuZGVmYXVsdCkobWFwRGlzcGF0Y2hUb1Byb3BzLCAoMCwgX2JpbmRBY3Rpb25EYXRhMi5kZWZhdWx0KSh1bmJvdW5kQWN0aW9ucywge1xuICAgICAgZm9ybTogZm9ybU5hbWUsXG4gICAgICBrZXk6IGZvcm1LZXlcbiAgICB9KSksIG1lcmdlUHJvcHMsIG9wdGlvbnMpIDogY29ubmVjdCgoMCwgX3dyYXBNYXBTdGF0ZVRvUHJvcHMyLmRlZmF1bHQpKG1hcFN0YXRlVG9Qcm9wcywgZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICB2YXIgZm9ybVN0YXRlID0gZ2V0Rm9ybVN0YXRlKHN0YXRlLCByZWR1eE1vdW50UG9pbnQpO1xuICAgICAgaWYgKCFmb3JtU3RhdGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBtb3VudCB0aGUgcmVkdXgtZm9ybSByZWR1Y2VyIGF0IFwiJyArIHJlZHV4TW91bnRQb2ludCArICdcIicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1TdGF0ZSAmJiBmb3JtU3RhdGVbZm9ybU5hbWVdO1xuICAgIH0pLCAoMCwgX3dyYXBNYXBEaXNwYXRjaFRvUHJvcHMyLmRlZmF1bHQpKG1hcERpc3BhdGNoVG9Qcm9wcywgKDAsIF9iaW5kQWN0aW9uRGF0YTIuZGVmYXVsdCkodW5ib3VuZEFjdGlvbnMsIHsgZm9ybTogZm9ybU5hbWUgfSkpLCBtZXJnZVByb3BzLCBvcHRpb25zKTtcblxuICAgIHJldHVybiBkZWNvcmF0ZShSZWR1eEZvcm0pO1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy51bnRvdWNoID0gZXhwb3J0cy50b3VjaCA9IGV4cG9ydHMuc3dhcEFycmF5VmFsdWVzID0gZXhwb3J0cy5zdWJtaXRGYWlsZWQgPSBleHBvcnRzLnN0b3BTdWJtaXQgPSBleHBvcnRzLnN0b3BBc3luY1ZhbGlkYXRpb24gPSBleHBvcnRzLnN0YXJ0U3VibWl0ID0gZXhwb3J0cy5zdGFydEFzeW5jVmFsaWRhdGlvbiA9IGV4cG9ydHMucmVzZXQgPSBleHBvcnRzLnJlbW92ZUFycmF5VmFsdWUgPSBleHBvcnRzLmluaXRpYWxpemUgPSBleHBvcnRzLmZvY3VzID0gZXhwb3J0cy5kZXN0cm95ID0gZXhwb3J0cy5jaGFuZ2UgPSBleHBvcnRzLmJsdXIgPSBleHBvcnRzLmF1dG9maWxsID0gZXhwb3J0cy5hZGRBcnJheVZhbHVlID0gdW5kZWZpbmVkO1xuXG52YXIgX2FjdGlvblR5cGVzID0gcmVxdWlyZSgnLi9hY3Rpb25UeXBlcycpO1xuXG52YXIgYWRkQXJyYXlWYWx1ZSA9IGV4cG9ydHMuYWRkQXJyYXlWYWx1ZSA9IGZ1bmN0aW9uIGFkZEFycmF5VmFsdWUocGF0aCwgdmFsdWUsIGluZGV4LCBmaWVsZHMpIHtcbiAgcmV0dXJuIHsgdHlwZTogX2FjdGlvblR5cGVzLkFERF9BUlJBWV9WQUxVRSwgcGF0aDogcGF0aCwgdmFsdWU6IHZhbHVlLCBpbmRleDogaW5kZXgsIGZpZWxkczogZmllbGRzIH07XG59O1xuXG52YXIgYXV0b2ZpbGwgPSBleHBvcnRzLmF1dG9maWxsID0gZnVuY3Rpb24gYXV0b2ZpbGwoZmllbGQsIHZhbHVlKSB7XG4gIHJldHVybiB7IHR5cGU6IF9hY3Rpb25UeXBlcy5BVVRPRklMTCwgZmllbGQ6IGZpZWxkLCB2YWx1ZTogdmFsdWUgfTtcbn07XG5cbnZhciBibHVyID0gZXhwb3J0cy5ibHVyID0gZnVuY3Rpb24gYmx1cihmaWVsZCwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdHlwZTogX2FjdGlvblR5cGVzLkJMVVIsIGZpZWxkOiBmaWVsZCwgdmFsdWU6IHZhbHVlIH07XG59O1xuXG52YXIgY2hhbmdlID0gZXhwb3J0cy5jaGFuZ2UgPSBmdW5jdGlvbiBjaGFuZ2UoZmllbGQsIHZhbHVlKSB7XG4gIHJldHVybiB7IHR5cGU6IF9hY3Rpb25UeXBlcy5DSEFOR0UsIGZpZWxkOiBmaWVsZCwgdmFsdWU6IHZhbHVlIH07XG59O1xuXG52YXIgZGVzdHJveSA9IGV4cG9ydHMuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gIHJldHVybiB7IHR5cGU6IF9hY3Rpb25UeXBlcy5ERVNUUk9ZIH07XG59O1xuXG52YXIgZm9jdXMgPSBleHBvcnRzLmZvY3VzID0gZnVuY3Rpb24gZm9jdXMoZmllbGQpIHtcbiAgcmV0dXJuIHsgdHlwZTogX2FjdGlvblR5cGVzLkZPQ1VTLCBmaWVsZDogZmllbGQgfTtcbn07XG5cbnZhciBpbml0aWFsaXplID0gZXhwb3J0cy5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZShkYXRhLCBmaWVsZHMpIHtcbiAgdmFyIG92ZXJ3cml0ZVZhbHVlcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMl07XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGZpZWxkcykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ211c3QgcHJvdmlkZSBmaWVsZHMgYXJyYXkgdG8gaW5pdGlhbGl6ZSgpIGFjdGlvbiBjcmVhdG9yJyk7XG4gIH1cbiAgcmV0dXJuIHsgdHlwZTogX2FjdGlvblR5cGVzLklOSVRJQUxJWkUsIGRhdGE6IGRhdGEsIGZpZWxkczogZmllbGRzLCBvdmVyd3JpdGVWYWx1ZXM6IG92ZXJ3cml0ZVZhbHVlcyB9O1xufTtcblxudmFyIHJlbW92ZUFycmF5VmFsdWUgPSBleHBvcnRzLnJlbW92ZUFycmF5VmFsdWUgPSBmdW5jdGlvbiByZW1vdmVBcnJheVZhbHVlKHBhdGgsIGluZGV4KSB7XG4gIHJldHVybiB7IHR5cGU6IF9hY3Rpb25UeXBlcy5SRU1PVkVfQVJSQVlfVkFMVUUsIHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCB9O1xufTtcblxudmFyIHJlc2V0ID0gZXhwb3J0cy5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCkge1xuICByZXR1cm4geyB0eXBlOiBfYWN0aW9uVHlwZXMuUkVTRVQgfTtcbn07XG5cbnZhciBzdGFydEFzeW5jVmFsaWRhdGlvbiA9IGV4cG9ydHMuc3RhcnRBc3luY1ZhbGlkYXRpb24gPSBmdW5jdGlvbiBzdGFydEFzeW5jVmFsaWRhdGlvbihmaWVsZCkge1xuICByZXR1cm4geyB0eXBlOiBfYWN0aW9uVHlwZXMuU1RBUlRfQVNZTkNfVkFMSURBVElPTiwgZmllbGQ6IGZpZWxkIH07XG59O1xuXG52YXIgc3RhcnRTdWJtaXQgPSBleHBvcnRzLnN0YXJ0U3VibWl0ID0gZnVuY3Rpb24gc3RhcnRTdWJtaXQoKSB7XG4gIHJldHVybiB7IHR5cGU6IF9hY3Rpb25UeXBlcy5TVEFSVF9TVUJNSVQgfTtcbn07XG5cbnZhciBzdG9wQXN5bmNWYWxpZGF0aW9uID0gZXhwb3J0cy5zdG9wQXN5bmNWYWxpZGF0aW9uID0gZnVuY3Rpb24gc3RvcEFzeW5jVmFsaWRhdGlvbihlcnJvcnMpIHtcbiAgcmV0dXJuIHsgdHlwZTogX2FjdGlvblR5cGVzLlNUT1BfQVNZTkNfVkFMSURBVElPTiwgZXJyb3JzOiBlcnJvcnMgfTtcbn07XG5cbnZhciBzdG9wU3VibWl0ID0gZXhwb3J0cy5zdG9wU3VibWl0ID0gZnVuY3Rpb24gc3RvcFN1Ym1pdChlcnJvcnMpIHtcbiAgcmV0dXJuIHsgdHlwZTogX2FjdGlvblR5cGVzLlNUT1BfU1VCTUlULCBlcnJvcnM6IGVycm9ycyB9O1xufTtcblxudmFyIHN1Ym1pdEZhaWxlZCA9IGV4cG9ydHMuc3VibWl0RmFpbGVkID0gZnVuY3Rpb24gc3VibWl0RmFpbGVkKCkge1xuICByZXR1cm4geyB0eXBlOiBfYWN0aW9uVHlwZXMuU1VCTUlUX0ZBSUxFRCB9O1xufTtcblxudmFyIHN3YXBBcnJheVZhbHVlcyA9IGV4cG9ydHMuc3dhcEFycmF5VmFsdWVzID0gZnVuY3Rpb24gc3dhcEFycmF5VmFsdWVzKHBhdGgsIGluZGV4QSwgaW5kZXhCKSB7XG4gIHJldHVybiB7IHR5cGU6IF9hY3Rpb25UeXBlcy5TV0FQX0FSUkFZX1ZBTFVFUywgcGF0aDogcGF0aCwgaW5kZXhBOiBpbmRleEEsIGluZGV4QjogaW5kZXhCIH07XG59O1xuXG52YXIgdG91Y2ggPSBleHBvcnRzLnRvdWNoID0gZnVuY3Rpb24gdG91Y2goKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmaWVsZHMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmaWVsZHNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4geyB0eXBlOiBfYWN0aW9uVHlwZXMuVE9VQ0gsIGZpZWxkczogZmllbGRzIH07XG59O1xuXG52YXIgdW50b3VjaCA9IGV4cG9ydHMudW50b3VjaCA9IGZ1bmN0aW9uIHVudG91Y2goKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgZmllbGRzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBmaWVsZHNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiB7IHR5cGU6IF9hY3Rpb25UeXBlcy5VTlRPVUNILCBmaWVsZHM6IGZpZWxkcyB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9hY3Rpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gYmluZEFjdGlvbkRhdGE7XG5cbnZhciBfbWFwVmFsdWVzID0gcmVxdWlyZSgnLi9tYXBWYWx1ZXMnKTtcblxudmFyIF9tYXBWYWx1ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFwVmFsdWVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBBZGRzIGFkZGl0aW9uYWwgcHJvcGVydGllcyB0byB0aGUgcmVzdWx0cyBvZiB0aGUgZnVuY3Rpb24gb3IgbWFwIG9mIGZ1bmN0aW9ucyBwYXNzZWRcbiAqL1xuZnVuY3Rpb24gYmluZEFjdGlvbkRhdGEoYWN0aW9uLCBkYXRhKSB7XG4gIGlmICh0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgYWN0aW9uLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSwgZGF0YSk7XG4gICAgfTtcbiAgfVxuICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gKDAsIF9tYXBWYWx1ZXMyLmRlZmF1bHQpKGFjdGlvbiwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gYmluZEFjdGlvbkRhdGEodmFsdWUsIGRhdGEpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBhY3Rpb247XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvYmluZEFjdGlvbkRhdGEuanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLyoqXG4gKiBHaXZlbiBhIHN0YXRlW2ZpZWxkXSwgZ2V0IHRoZSB2YWx1ZS5cbiAqICBGYWxsYmFjayB0byAuaW5pdGlhbFZhbHVlIHdoZW4gLnZhbHVlIGlzIHVuZGVmaW5lZCB0byBwcmV2ZW50IGRvdWJsZSByZW5kZXIvaW5pdGlhbGl6ZSBjeWNsZS5cbiAqICBTZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9lcmlrcmFzL3JlZHV4LWZvcm0vaXNzdWVzLzYyMX0uXG4gKi9cbnZhciBpdGVtVG9WYWx1ZSA9IGZ1bmN0aW9uIGl0ZW1Ub1ZhbHVlKF9yZWYpIHtcbiAgdmFyIHZhbHVlID0gX3JlZi52YWx1ZTtcbiAgdmFyIGluaXRpYWxWYWx1ZSA9IF9yZWYuaW5pdGlhbFZhbHVlO1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyA/IHZhbHVlIDogaW5pdGlhbFZhbHVlO1xufTtcblxudmFyIGdldFZhbHVlID0gZnVuY3Rpb24gZ2V0VmFsdWUoZmllbGQsIHN0YXRlLCBkZXN0KSB7XG4gIHZhciBkb3RJbmRleCA9IGZpZWxkLmluZGV4T2YoJy4nKTtcbiAgdmFyIG9wZW5JbmRleCA9IGZpZWxkLmluZGV4T2YoJ1snKTtcbiAgdmFyIGNsb3NlSW5kZXggPSBmaWVsZC5pbmRleE9mKCddJyk7XG4gIGlmIChvcGVuSW5kZXggPiAwICYmIGNsb3NlSW5kZXggIT09IG9wZW5JbmRleCArIDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZvdW5kIFsgbm90IGZvbGxvd2VkIGJ5IF0nKTtcbiAgfVxuICBpZiAob3BlbkluZGV4ID4gMCAmJiAoZG90SW5kZXggPCAwIHx8IG9wZW5JbmRleCA8IGRvdEluZGV4KSkge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBhcnJheSBmaWVsZFxuICAgICAgdmFyIGtleSA9IGZpZWxkLnN1YnN0cmluZygwLCBvcGVuSW5kZXgpO1xuICAgICAgdmFyIHJlc3QgPSBmaWVsZC5zdWJzdHJpbmcoY2xvc2VJbmRleCArIDEpO1xuICAgICAgaWYgKHJlc3RbMF0gPT09ICcuJykge1xuICAgICAgICByZXN0ID0gcmVzdC5zdWJzdHJpbmcoMSk7XG4gICAgICB9XG4gICAgICB2YXIgYXJyYXkgPSBzdGF0ZSAmJiBzdGF0ZVtrZXldIHx8IFtdO1xuICAgICAgaWYgKHJlc3QpIHtcbiAgICAgICAgaWYgKCFkZXN0W2tleV0pIHtcbiAgICAgICAgICBkZXN0W2tleV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgIGlmICghZGVzdFtrZXldW2luZGV4XSkge1xuICAgICAgICAgICAgZGVzdFtrZXldW2luZGV4XSA9IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBnZXRWYWx1ZShyZXN0LCBpdGVtLCBkZXN0W2tleV1baW5kZXhdKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXN0W2tleV0gPSBhcnJheS5tYXAoaXRlbVRvVmFsdWUpO1xuICAgICAgfVxuICAgIH0pKCk7XG4gIH0gZWxzZSBpZiAoZG90SW5kZXggPiAwKSB7XG4gICAgLy8gc3Vib2JqZWN0IGZpZWxkXG4gICAgdmFyIF9rZXkgPSBmaWVsZC5zdWJzdHJpbmcoMCwgZG90SW5kZXgpO1xuICAgIHZhciBfcmVzdCA9IGZpZWxkLnN1YnN0cmluZyhkb3RJbmRleCArIDEpO1xuICAgIGlmICghZGVzdFtfa2V5XSkge1xuICAgICAgZGVzdFtfa2V5XSA9IHt9O1xuICAgIH1cbiAgICBnZXRWYWx1ZShfcmVzdCwgc3RhdGUgJiYgc3RhdGVbX2tleV0gfHwge30sIGRlc3RbX2tleV0pO1xuICB9IGVsc2Uge1xuICAgIGRlc3RbZmllbGRdID0gc3RhdGVbZmllbGRdICYmIGl0ZW1Ub1ZhbHVlKHN0YXRlW2ZpZWxkXSk7XG4gIH1cbn07XG5cbnZhciBnZXRWYWx1ZXMgPSBmdW5jdGlvbiBnZXRWYWx1ZXMoZmllbGRzLCBzdGF0ZSkge1xuICByZXR1cm4gZmllbGRzLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGZpZWxkKSB7XG4gICAgZ2V0VmFsdWUoZmllbGQsIHN0YXRlLCBhY2N1bXVsYXRvcik7XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICB9LCB7fSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBnZXRWYWx1ZXM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvZ2V0VmFsdWVzLmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzVmFsaWQ7XG5mdW5jdGlvbiBpc1ZhbGlkKGVycm9yKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGVycm9yKSkge1xuICAgIHJldHVybiBlcnJvci5yZWR1Y2UoZnVuY3Rpb24gKHZhbGlkLCBlcnJvclZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsaWQgJiYgaXNWYWxpZChlcnJvclZhbHVlKTtcbiAgICB9LCB0cnVlKTtcbiAgfVxuICBpZiAoZXJyb3IgJiYgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhlcnJvcikucmVkdWNlKGZ1bmN0aW9uICh2YWxpZCwga2V5KSB7XG4gICAgICByZXR1cm4gdmFsaWQgJiYgaXNWYWxpZChlcnJvcltrZXldKTtcbiAgICB9LCB0cnVlKTtcbiAgfVxuICByZXR1cm4gIWVycm9yO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL2lzVmFsaWQuanNcbiAqKiBtb2R1bGUgaWQgPSA1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWRGaWVsZCA9IHJlcXVpcmUoJy4vcmVhZEZpZWxkJyk7XG5cbnZhciBfcmVhZEZpZWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWRGaWVsZCk7XG5cbnZhciBfd3JpdGUgPSByZXF1aXJlKCcuL3dyaXRlJyk7XG5cbnZhciBfd3JpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd3JpdGUpO1xuXG52YXIgX2dldFZhbHVlcyA9IHJlcXVpcmUoJy4vZ2V0VmFsdWVzJyk7XG5cbnZhciBfZ2V0VmFsdWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFZhbHVlcyk7XG5cbnZhciBfcmVtb3ZlRmllbGQgPSByZXF1aXJlKCcuL3JlbW92ZUZpZWxkJyk7XG5cbnZhciBfcmVtb3ZlRmllbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVtb3ZlRmllbGQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFJlYWRzIHByb3BzIGFuZCBnZW5lcmF0ZXMgKG9yIHVwZGF0ZXMpIGZpZWxkIHN0cnVjdHVyZVxuICovXG52YXIgcmVhZEZpZWxkcyA9IGZ1bmN0aW9uIHJlYWRGaWVsZHMocHJvcHMsIHByZXZpb3VzUHJvcHMsIG15RmllbGRzLCBhc3luY1ZhbGlkYXRlLCBpc1JlYWN0TmF0aXZlKSB7XG4gIHZhciBmaWVsZHMgPSBwcm9wcy5maWVsZHM7XG4gIHZhciBmb3JtID0gcHJvcHMuZm9ybTtcbiAgdmFyIHZhbGlkYXRlID0gcHJvcHMudmFsaWRhdGU7XG5cbiAgdmFyIHByZXZpb3VzRmllbGRzID0gcHJldmlvdXNQcm9wcy5maWVsZHM7XG4gIHZhciB2YWx1ZXMgPSAoMCwgX2dldFZhbHVlczIuZGVmYXVsdCkoZmllbGRzLCBmb3JtKTtcbiAgdmFyIHN5bmNFcnJvcnMgPSB2YWxpZGF0ZSh2YWx1ZXMsIHByb3BzKSB8fCB7fTtcbiAgdmFyIGVycm9ycyA9IHt9O1xuICB2YXIgZm9ybUVycm9yID0gc3luY0Vycm9ycy5fZXJyb3IgfHwgZm9ybS5fZXJyb3I7XG4gIHZhciBhbGxWYWxpZCA9ICFmb3JtRXJyb3I7XG4gIHZhciBhbGxQcmlzdGluZSA9IHRydWU7XG4gIHZhciB0YWxseSA9IGZ1bmN0aW9uIHRhbGx5KGZpZWxkKSB7XG4gICAgaWYgKGZpZWxkLmVycm9yKSB7XG4gICAgICBlcnJvcnMgPSAoMCwgX3dyaXRlMi5kZWZhdWx0KShmaWVsZC5uYW1lLCBmaWVsZC5lcnJvciwgZXJyb3JzKTtcbiAgICAgIGFsbFZhbGlkID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChmaWVsZC5kaXJ0eSkge1xuICAgICAgYWxsUHJpc3RpbmUgPSBmYWxzZTtcbiAgICB9XG4gIH07XG4gIHZhciBmaWVsZE9iamVjdHMgPSBwcmV2aW91c0ZpZWxkcyA/IHByZXZpb3VzRmllbGRzLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIHByZXZpb3VzRmllbGQpIHtcbiAgICByZXR1cm4gfmZpZWxkcy5pbmRleE9mKHByZXZpb3VzRmllbGQpID8gYWNjdW11bGF0b3IgOiAoMCwgX3JlbW92ZUZpZWxkMi5kZWZhdWx0KShhY2N1bXVsYXRvciwgcHJldmlvdXNGaWVsZCk7XG4gIH0sIF9leHRlbmRzKHt9LCBteUZpZWxkcykpIDogX2V4dGVuZHMoe30sIG15RmllbGRzKTtcbiAgZmllbGRzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAoMCwgX3JlYWRGaWVsZDIuZGVmYXVsdCkoZm9ybSwgbmFtZSwgdW5kZWZpbmVkLCBmaWVsZE9iamVjdHMsIHN5bmNFcnJvcnMsIGFzeW5jVmFsaWRhdGUsIGlzUmVhY3ROYXRpdmUsIHByb3BzLCB0YWxseSk7XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZmllbGRPYmplY3RzLCAnX21ldGEnLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIGFsbFByaXN0aW5lOiBhbGxQcmlzdGluZSxcbiAgICAgIGFsbFZhbGlkOiBhbGxWYWxpZCxcbiAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgZXJyb3JzOiBlcnJvcnMsXG4gICAgICBmb3JtRXJyb3I6IGZvcm1FcnJvclxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBmaWVsZE9iamVjdHM7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gcmVhZEZpZWxkcztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9yZWFkRmllbGRzLmpzXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVPbkJsdXIgPSByZXF1aXJlKCcuL2V2ZW50cy9jcmVhdGVPbkJsdXInKTtcblxudmFyIF9jcmVhdGVPbkJsdXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlT25CbHVyKTtcblxudmFyIF9jcmVhdGVPbkNoYW5nZSA9IHJlcXVpcmUoJy4vZXZlbnRzL2NyZWF0ZU9uQ2hhbmdlJyk7XG5cbnZhciBfY3JlYXRlT25DaGFuZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlT25DaGFuZ2UpO1xuXG52YXIgX2NyZWF0ZU9uRHJhZ1N0YXJ0ID0gcmVxdWlyZSgnLi9ldmVudHMvY3JlYXRlT25EcmFnU3RhcnQnKTtcblxudmFyIF9jcmVhdGVPbkRyYWdTdGFydDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVPbkRyYWdTdGFydCk7XG5cbnZhciBfY3JlYXRlT25Ecm9wID0gcmVxdWlyZSgnLi9ldmVudHMvY3JlYXRlT25Ecm9wJyk7XG5cbnZhciBfY3JlYXRlT25Ecm9wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZU9uRHJvcCk7XG5cbnZhciBfY3JlYXRlT25Gb2N1cyA9IHJlcXVpcmUoJy4vZXZlbnRzL2NyZWF0ZU9uRm9jdXMnKTtcblxudmFyIF9jcmVhdGVPbkZvY3VzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZU9uRm9jdXMpO1xuXG52YXIgX3NpbGVuY2VQcm9taXNlID0gcmVxdWlyZSgnLi9zaWxlbmNlUHJvbWlzZScpO1xuXG52YXIgX3NpbGVuY2VQcm9taXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbGVuY2VQcm9taXNlKTtcblxudmFyIF9yZWFkID0gcmVxdWlyZSgnLi9yZWFkJyk7XG5cbnZhciBfcmVhZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFkKTtcblxudmFyIF91cGRhdGVGaWVsZCA9IHJlcXVpcmUoJy4vdXBkYXRlRmllbGQnKTtcblxudmFyIF91cGRhdGVGaWVsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91cGRhdGVGaWVsZCk7XG5cbnZhciBfaXNDaGVja2VkID0gcmVxdWlyZSgnLi9pc0NoZWNrZWQnKTtcblxudmFyIF9pc0NoZWNrZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNDaGVja2VkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3VmZml4KGlucHV0LCBjbG9zZUluZGV4KSB7XG4gIHZhciBzdWZmaXggPSBpbnB1dC5zdWJzdHJpbmcoY2xvc2VJbmRleCArIDEpO1xuICBpZiAoc3VmZml4WzBdID09PSAnLicpIHtcbiAgICBzdWZmaXggPSBzdWZmaXguc3Vic3RyaW5nKDEpO1xuICB9XG4gIHJldHVybiBzdWZmaXg7XG59XG5cbnZhciBnZXROZXh0S2V5ID0gZnVuY3Rpb24gZ2V0TmV4dEtleShwYXRoKSB7XG4gIHZhciBkb3RJbmRleCA9IHBhdGguaW5kZXhPZignLicpO1xuICB2YXIgb3BlbkluZGV4ID0gcGF0aC5pbmRleE9mKCdbJyk7XG4gIGlmIChvcGVuSW5kZXggPiAwICYmIChkb3RJbmRleCA8IDAgfHwgb3BlbkluZGV4IDwgZG90SW5kZXgpKSB7XG4gICAgcmV0dXJuIHBhdGguc3Vic3RyaW5nKDAsIG9wZW5JbmRleCk7XG4gIH1cbiAgcmV0dXJuIGRvdEluZGV4ID4gMCA/IHBhdGguc3Vic3RyaW5nKDAsIGRvdEluZGV4KSA6IHBhdGg7XG59O1xuXG52YXIgc2hvdWxkQXN5bmNWYWxpZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZEFzeW5jVmFsaWRhdGUobmFtZSwgYXN5bmNCbHVyRmllbGRzKSB7XG4gIHJldHVybihcbiAgICAvLyByZW1vdmUgYXJyYXkgaW5kaWNlc1xuICAgIH5hc3luY0JsdXJGaWVsZHMuaW5kZXhPZihuYW1lLnJlcGxhY2UoL1xcW1swLTldK1xcXS9nLCAnW10nKSlcbiAgKTtcbn07XG5cbnZhciByZWFkRmllbGQgPSBmdW5jdGlvbiByZWFkRmllbGQoc3RhdGUsIGZpZWxkTmFtZSkge1xuICB2YXIgcGF0aFRvSGVyZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/ICcnIDogYXJndW1lbnRzWzJdO1xuICB2YXIgZmllbGRzID0gYXJndW1lbnRzWzNdO1xuICB2YXIgc3luY0Vycm9ycyA9IGFyZ3VtZW50c1s0XTtcbiAgdmFyIGFzeW5jVmFsaWRhdGUgPSBhcmd1bWVudHNbNV07XG4gIHZhciBpc1JlYWN0TmF0aXZlID0gYXJndW1lbnRzWzZdO1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHNbN107XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPD0gOCB8fCBhcmd1bWVudHNbOF0gPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSA6IGFyZ3VtZW50c1s4XTtcbiAgdmFyIHByZWZpeCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gOSB8fCBhcmd1bWVudHNbOV0gPT09IHVuZGVmaW5lZCA/ICcnIDogYXJndW1lbnRzWzldO1xuICB2YXIgYXN5bmNCbHVyRmllbGRzID0gcHJvcHMuYXN5bmNCbHVyRmllbGRzO1xuICB2YXIgYXV0b2ZpbGwgPSBwcm9wcy5hdXRvZmlsbDtcbiAgdmFyIGJsdXIgPSBwcm9wcy5ibHVyO1xuICB2YXIgY2hhbmdlID0gcHJvcHMuY2hhbmdlO1xuICB2YXIgZm9jdXMgPSBwcm9wcy5mb2N1cztcbiAgdmFyIGZvcm0gPSBwcm9wcy5mb3JtO1xuICB2YXIgaW5pdGlhbFZhbHVlcyA9IHByb3BzLmluaXRpYWxWYWx1ZXM7XG4gIHZhciByZWFkb25seSA9IHByb3BzLnJlYWRvbmx5O1xuICB2YXIgYWRkQXJyYXlWYWx1ZSA9IHByb3BzLmFkZEFycmF5VmFsdWU7XG4gIHZhciByZW1vdmVBcnJheVZhbHVlID0gcHJvcHMucmVtb3ZlQXJyYXlWYWx1ZTtcbiAgdmFyIHN3YXBBcnJheVZhbHVlcyA9IHByb3BzLnN3YXBBcnJheVZhbHVlcztcblxuICB2YXIgZG90SW5kZXggPSBmaWVsZE5hbWUuaW5kZXhPZignLicpO1xuICB2YXIgb3BlbkluZGV4ID0gZmllbGROYW1lLmluZGV4T2YoJ1snKTtcbiAgdmFyIGNsb3NlSW5kZXggPSBmaWVsZE5hbWUuaW5kZXhPZignXScpO1xuICBpZiAob3BlbkluZGV4ID4gMCAmJiBjbG9zZUluZGV4ICE9PSBvcGVuSW5kZXggKyAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdmb3VuZCBbIG5vdCBmb2xsb3dlZCBieSBdJyk7XG4gIH1cblxuICBpZiAob3BlbkluZGV4ID4gMCAmJiAoZG90SW5kZXggPCAwIHx8IG9wZW5JbmRleCA8IGRvdEluZGV4KSkge1xuICAgIHZhciBfcmV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gYXJyYXkgZmllbGRcbiAgICAgIHZhciBrZXkgPSBmaWVsZE5hbWUuc3Vic3RyaW5nKDAsIG9wZW5JbmRleCk7XG4gICAgICB2YXIgcmVzdCA9IGdldFN1ZmZpeChmaWVsZE5hbWUsIGNsb3NlSW5kZXgpO1xuICAgICAgdmFyIHN0YXRlQXJyYXkgPSBzdGF0ZSAmJiBzdGF0ZVtrZXldIHx8IFtdO1xuICAgICAgdmFyIGZ1bGxQcmVmaXggPSBwcmVmaXggKyBmaWVsZE5hbWUuc3Vic3RyaW5nKDAsIGNsb3NlSW5kZXggKyAxKTtcbiAgICAgIHZhciBzdWJmaWVsZHMgPSBwcm9wcy5maWVsZHMucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgZmllbGQpIHtcbiAgICAgICAgaWYgKGZpZWxkLmluZGV4T2YoZnVsbFByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICBhY2N1bXVsYXRvci5wdXNoKGZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICB9LCBbXSkubWFwKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICByZXR1cm4gZ2V0U3VmZml4KGZpZWxkLCBwcmVmaXgubGVuZ3RoICsgY2xvc2VJbmRleCk7XG4gICAgICB9KTtcbiAgICAgIHZhciBhZGRNZXRob2RzID0gZnVuY3Rpb24gYWRkTWV0aG9kcyhkZXN0KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCAnYWRkRmllbGQnLCB7XG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKF92YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBhZGRBcnJheVZhbHVlKHBhdGhUb0hlcmUgKyBrZXksIF92YWx1ZSwgaW5kZXgsIHN1YmZpZWxkcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsICdyZW1vdmVGaWVsZCcsIHtcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiByZW1vdmVBcnJheVZhbHVlKHBhdGhUb0hlcmUgKyBrZXksIGluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgJ3N3YXBGaWVsZHMnLCB7XG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGluZGV4QSwgaW5kZXhCKSB7XG4gICAgICAgICAgICByZXR1cm4gc3dhcEFycmF5VmFsdWVzKHBhdGhUb0hlcmUgKyBrZXksIGluZGV4QSwgaW5kZXhCKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGVzdDtcbiAgICAgIH07XG4gICAgICBpZiAoIWZpZWxkc1trZXldIHx8IGZpZWxkc1trZXldLmxlbmd0aCAhPT0gc3RhdGVBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgZmllbGRzW2tleV0gPSBmaWVsZHNba2V5XSA/IFtdLmNvbmNhdChmaWVsZHNba2V5XSkgOiBbXTtcbiAgICAgICAgYWRkTWV0aG9kcyhmaWVsZHNba2V5XSk7XG4gICAgICB9XG4gICAgICB2YXIgZmllbGRBcnJheSA9IGZpZWxkc1trZXldO1xuICAgICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgIHN0YXRlQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZmllbGRTdGF0ZSwgaW5kZXgpIHtcbiAgICAgICAgaWYgKHJlc3QgJiYgIWZpZWxkQXJyYXlbaW5kZXhdKSB7XG4gICAgICAgICAgZmllbGRBcnJheVtpbmRleF0gPSB7fTtcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVzdCA9IHJlc3QgPyBmaWVsZEFycmF5W2luZGV4XSA6IHt9O1xuICAgICAgICB2YXIgbmV4dFBhdGggPSAnJyArIHBhdGhUb0hlcmUgKyBrZXkgKyAnWycgKyBpbmRleCArICddJyArIChyZXN0ID8gJy4nIDogJycpO1xuICAgICAgICB2YXIgbmV4dFByZWZpeCA9ICcnICsgcHJlZml4ICsga2V5ICsgJ1tdJyArIChyZXN0ID8gJy4nIDogJycpO1xuXG4gICAgICAgIHZhciByZXN1bHQgPSByZWFkRmllbGQoZmllbGRTdGF0ZSwgcmVzdCwgbmV4dFBhdGgsIGRlc3QsIHN5bmNFcnJvcnMsIGFzeW5jVmFsaWRhdGUsIGlzUmVhY3ROYXRpdmUsIHByb3BzLCBjYWxsYmFjaywgbmV4dFByZWZpeCk7XG4gICAgICAgIGlmICghcmVzdCAmJiBmaWVsZEFycmF5W2luZGV4XSAhPT0gcmVzdWx0KSB7XG4gICAgICAgICAgLy8gaWYgbm90aGluZyBhZnRlciBbXSBpbiBmaWVsZCBuYW1lLCBhc3NpZ24gZGlyZWN0bHkgdG8gYXJyYXlcbiAgICAgICAgICBmaWVsZEFycmF5W2luZGV4XSA9IHJlc3VsdDtcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoZmllbGRBcnJheS5sZW5ndGggPiBzdGF0ZUFycmF5Lmxlbmd0aCkge1xuICAgICAgICAvLyByZW1vdmUgZXh0cmEgaXRlbXMgdGhhdCBhcmVuJ3QgaW4gc3RhdGUgYXJyYXlcbiAgICAgICAgZmllbGRBcnJheS5zcGxpY2Uoc3RhdGVBcnJheS5sZW5ndGgsIGZpZWxkQXJyYXkubGVuZ3RoIC0gc3RhdGVBcnJheS5sZW5ndGgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdjogY2hhbmdlZCA/IGFkZE1ldGhvZHMoW10uY29uY2F0KGZpZWxkQXJyYXkpKSA6IGZpZWxkQXJyYXlcbiAgICAgIH07XG4gICAgfSgpO1xuXG4gICAgaWYgKHR5cGVvZiBfcmV0ID09PSBcIm9iamVjdFwiKSByZXR1cm4gX3JldC52O1xuICB9XG4gIGlmIChkb3RJbmRleCA+IDApIHtcbiAgICAvLyBzdWJvYmplY3QgZmllbGRcbiAgICB2YXIgX2tleSA9IGZpZWxkTmFtZS5zdWJzdHJpbmcoMCwgZG90SW5kZXgpO1xuICAgIHZhciBfcmVzdCA9IGZpZWxkTmFtZS5zdWJzdHJpbmcoZG90SW5kZXggKyAxKTtcbiAgICB2YXIgc3Vib2JqZWN0ID0gZmllbGRzW19rZXldIHx8IHt9O1xuICAgIHZhciBuZXh0UGF0aCA9IHBhdGhUb0hlcmUgKyBfa2V5ICsgJy4nO1xuICAgIHZhciBuZXh0S2V5ID0gZ2V0TmV4dEtleShfcmVzdCk7XG4gICAgdmFyIG5leHRQcmVmaXggPSBwcmVmaXggKyBfa2V5ICsgJy4nO1xuICAgIHZhciBwcmV2aW91cyA9IHN1Ym9iamVjdFtuZXh0S2V5XTtcbiAgICB2YXIgcmVzdWx0ID0gcmVhZEZpZWxkKHN0YXRlW19rZXldIHx8IHt9LCBfcmVzdCwgbmV4dFBhdGgsIHN1Ym9iamVjdCwgc3luY0Vycm9ycywgYXN5bmNWYWxpZGF0ZSwgaXNSZWFjdE5hdGl2ZSwgcHJvcHMsIGNhbGxiYWNrLCBuZXh0UHJlZml4KTtcbiAgICBpZiAocmVzdWx0ICE9PSBwcmV2aW91cykge1xuICAgICAgdmFyIF9leHRlbmRzMjtcblxuICAgICAgc3Vib2JqZWN0ID0gX2V4dGVuZHMoe30sIHN1Ym9iamVjdCwgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJbbmV4dEtleV0gPSByZXN1bHQsIF9leHRlbmRzMikpO1xuICAgIH1cbiAgICBmaWVsZHNbX2tleV0gPSBzdWJvYmplY3Q7XG4gICAgcmV0dXJuIHN1Ym9iamVjdDtcbiAgfVxuICB2YXIgbmFtZSA9IHBhdGhUb0hlcmUgKyBmaWVsZE5hbWU7XG4gIHZhciBmaWVsZCA9IGZpZWxkc1tmaWVsZE5hbWVdIHx8IHt9O1xuICBpZiAoZmllbGQubmFtZSAhPT0gbmFtZSkge1xuICAgIHZhciBvbkNoYW5nZSA9ICgwLCBfY3JlYXRlT25DaGFuZ2UyLmRlZmF1bHQpKG5hbWUsIGNoYW5nZSwgaXNSZWFjdE5hdGl2ZSk7XG4gICAgdmFyIGluaXRpYWxGb3JtVmFsdWUgPSAoMCwgX3JlYWQyLmRlZmF1bHQpKG5hbWUgKyAnLmluaXRpYWwnLCBmb3JtKTtcbiAgICB2YXIgaW5pdGlhbFZhbHVlID0gaW5pdGlhbEZvcm1WYWx1ZSB8fCAoMCwgX3JlYWQyLmRlZmF1bHQpKG5hbWUsIGluaXRpYWxWYWx1ZXMpO1xuICAgIGluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZSA9PT0gdW5kZWZpbmVkID8gJycgOiBpbml0aWFsVmFsdWU7XG4gICAgZmllbGQubmFtZSA9IG5hbWU7XG4gICAgZmllbGQuY2hlY2tlZCA9ICgwLCBfaXNDaGVja2VkMi5kZWZhdWx0KShpbml0aWFsVmFsdWUpO1xuICAgIGZpZWxkLnZhbHVlID0gaW5pdGlhbFZhbHVlO1xuICAgIGZpZWxkLmluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZTtcbiAgICBpZiAoIXJlYWRvbmx5KSB7XG4gICAgICBmaWVsZC5hdXRvZmlsbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gYXV0b2ZpbGwobmFtZSwgdmFsdWUpO1xuICAgICAgfTtcbiAgICAgIGZpZWxkLm9uQmx1ciA9ICgwLCBfY3JlYXRlT25CbHVyMi5kZWZhdWx0KShuYW1lLCBibHVyLCBpc1JlYWN0TmF0aXZlLCBzaG91bGRBc3luY1ZhbGlkYXRlKG5hbWUsIGFzeW5jQmx1ckZpZWxkcykgJiYgZnVuY3Rpb24gKGJsdXJOYW1lLCBibHVyVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfc2lsZW5jZVByb21pc2UyLmRlZmF1bHQpKGFzeW5jVmFsaWRhdGUoYmx1ck5hbWUsIGJsdXJWYWx1ZSkpO1xuICAgICAgfSk7XG4gICAgICBmaWVsZC5vbkNoYW5nZSA9IG9uQ2hhbmdlO1xuICAgICAgZmllbGQub25EcmFnU3RhcnQgPSAoMCwgX2NyZWF0ZU9uRHJhZ1N0YXJ0Mi5kZWZhdWx0KShuYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmaWVsZC52YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgZmllbGQub25Ecm9wID0gKDAsIF9jcmVhdGVPbkRyb3AyLmRlZmF1bHQpKG5hbWUsIGNoYW5nZSk7XG4gICAgICBmaWVsZC5vbkZvY3VzID0gKDAsIF9jcmVhdGVPbkZvY3VzMi5kZWZhdWx0KShuYW1lLCBmb2N1cyk7XG4gICAgICBmaWVsZC5vblVwZGF0ZSA9IG9uQ2hhbmdlOyAvLyBhbGlhcyB0byBzdXBwb3J0IGJlbGxlLiBodHRwczovL2dpdGh1Yi5jb20vbmlrZ3JhZi9iZWxsZS9pc3N1ZXMvNThcbiAgICB9XG4gICAgZmllbGQudmFsaWQgPSB0cnVlO1xuICAgIGZpZWxkLmludmFsaWQgPSBmYWxzZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZmllbGQsICdfaXNGaWVsZCcsIHsgdmFsdWU6IHRydWUgfSk7XG4gIH1cblxuICB2YXIgZGVmYXVsdEZpZWxkU3RhdGUgPSB7XG4gICAgaW5pdGlhbDogZmllbGQudmFsdWUsXG4gICAgdmFsdWU6IGZpZWxkLnZhbHVlXG4gIH07XG5cbiAgdmFyIGZpZWxkU3RhdGUgPSAoZmllbGROYW1lID8gc3RhdGVbZmllbGROYW1lXSA6IHN0YXRlKSB8fCBkZWZhdWx0RmllbGRTdGF0ZTtcbiAgdmFyIHN5bmNFcnJvciA9ICgwLCBfcmVhZDIuZGVmYXVsdCkobmFtZSwgc3luY0Vycm9ycyk7XG4gIHZhciB1cGRhdGVkID0gKDAsIF91cGRhdGVGaWVsZDIuZGVmYXVsdCkoZmllbGQsIGZpZWxkU3RhdGUsIG5hbWUgPT09IGZvcm0uX2FjdGl2ZSwgc3luY0Vycm9yKTtcbiAgaWYgKGZpZWxkTmFtZSB8fCBmaWVsZHNbZmllbGROYW1lXSAhPT0gdXBkYXRlZCkge1xuICAgIGZpZWxkc1tmaWVsZE5hbWVdID0gdXBkYXRlZDtcbiAgfVxuICBjYWxsYmFjayh1cGRhdGVkKTtcbiAgcmV0dXJuIHVwZGF0ZWQ7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSByZWFkRmllbGQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvcmVhZEZpZWxkLmpzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9nZXRWYWx1ZSA9IHJlcXVpcmUoJy4vZ2V0VmFsdWUnKTtcblxudmFyIF9nZXRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjcmVhdGVPbkJsdXIgPSBmdW5jdGlvbiBjcmVhdGVPbkJsdXIobmFtZSwgYmx1ciwgaXNSZWFjdE5hdGl2ZSwgYWZ0ZXJCbHVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgdmFsdWUgPSAoMCwgX2dldFZhbHVlMi5kZWZhdWx0KShldmVudCwgaXNSZWFjdE5hdGl2ZSk7XG4gICAgYmx1cihuYW1lLCB2YWx1ZSk7XG4gICAgaWYgKGFmdGVyQmx1cikge1xuICAgICAgYWZ0ZXJCbHVyKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlT25CbHVyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL2V2ZW50cy9jcmVhdGVPbkJsdXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzRXZlbnQgPSByZXF1aXJlKCcuL2lzRXZlbnQnKTtcblxudmFyIF9pc0V2ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzRXZlbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZ2V0U2VsZWN0ZWRWYWx1ZXMgPSBmdW5jdGlvbiBnZXRTZWxlY3RlZFZhbHVlcyhvcHRpb25zKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgb3B0aW9ucy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBvcHRpb24gPSBvcHRpb25zW2luZGV4XTtcbiAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgcmVzdWx0LnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uIGdldFZhbHVlKGV2ZW50LCBpc1JlYWN0TmF0aXZlKSB7XG4gIGlmICgoMCwgX2lzRXZlbnQyLmRlZmF1bHQpKGV2ZW50KSkge1xuICAgIGlmICghaXNSZWFjdE5hdGl2ZSAmJiBldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC50ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmVudC5uYXRpdmVFdmVudC50ZXh0O1xuICAgIH1cbiAgICBpZiAoaXNSZWFjdE5hdGl2ZSAmJiBldmVudC5uYXRpdmVFdmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZlbnQubmF0aXZlRXZlbnQudGV4dDtcbiAgICB9XG4gICAgdmFyIF9ldmVudCR0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgdmFyIHR5cGUgPSBfZXZlbnQkdGFyZ2V0LnR5cGU7XG4gICAgdmFyIHZhbHVlID0gX2V2ZW50JHRhcmdldC52YWx1ZTtcbiAgICB2YXIgY2hlY2tlZCA9IF9ldmVudCR0YXJnZXQuY2hlY2tlZDtcbiAgICB2YXIgZmlsZXMgPSBfZXZlbnQkdGFyZ2V0LmZpbGVzO1xuICAgIHZhciBkYXRhVHJhbnNmZXIgPSBldmVudC5kYXRhVHJhbnNmZXI7XG5cbiAgICBpZiAodHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgcmV0dXJuIGNoZWNrZWQ7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnZmlsZScpIHtcbiAgICAgIHJldHVybiBmaWxlcyB8fCBkYXRhVHJhbnNmZXIgJiYgZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ3NlbGVjdC1tdWx0aXBsZScpIHtcbiAgICAgIHJldHVybiBnZXRTZWxlY3RlZFZhbHVlcyhldmVudC50YXJnZXQub3B0aW9ucyk7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJyB8fCB0eXBlID09PSAncmFuZ2UnKSB7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICAvLyBub3QgYW4gZXZlbnQsIHNvIG11c3QgYmUgZWl0aGVyIG91ciB2YWx1ZSBvciBhbiBvYmplY3QgY29udGFpbmluZyBvdXIgdmFsdWUgaW4gdGhlICd2YWx1ZScga2V5XG4gIHJldHVybiBldmVudCAmJiB0eXBlb2YgZXZlbnQgPT09ICdvYmplY3QnICYmIGV2ZW50LnZhbHVlICE9PSB1bmRlZmluZWQgPyBldmVudC52YWx1ZSA6IC8vIGV4dHJhY3QgdmFsdWUgZnJvbSB7IHZhbHVlOiB2YWx1ZSB9IHN0cnVjdHVyZS4gaHR0cHM6Ly9naXRodWIuY29tL25pa2dyYWYvYmVsbGUvaXNzdWVzLzU4XG4gIGV2ZW50O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0VmFsdWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL2dldFZhbHVlLmpzXG4gKiogbW9kdWxlIGlkID0gNTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGlzRXZlbnQgPSBmdW5jdGlvbiBpc0V2ZW50KGNhbmRpZGF0ZSkge1xuICByZXR1cm4gISEoY2FuZGlkYXRlICYmIGNhbmRpZGF0ZS5zdG9wUHJvcGFnYXRpb24gJiYgY2FuZGlkYXRlLnByZXZlbnREZWZhdWx0KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGlzRXZlbnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL2lzRXZlbnQuanNcbiAqKiBtb2R1bGUgaWQgPSA1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2dldFZhbHVlID0gcmVxdWlyZSgnLi9nZXRWYWx1ZScpO1xuXG52YXIgX2dldFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGNyZWF0ZU9uQ2hhbmdlID0gZnVuY3Rpb24gY3JlYXRlT25DaGFuZ2UobmFtZSwgY2hhbmdlLCBpc1JlYWN0TmF0aXZlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4gY2hhbmdlKG5hbWUsICgwLCBfZ2V0VmFsdWUyLmRlZmF1bHQpKGV2ZW50LCBpc1JlYWN0TmF0aXZlKSk7XG4gIH07XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlT25DaGFuZ2U7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL2NyZWF0ZU9uQ2hhbmdlLmpzXG4gKiogbW9kdWxlIGlkID0gNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBkYXRhS2V5ID0gZXhwb3J0cy5kYXRhS2V5ID0gJ3ZhbHVlJztcbnZhciBjcmVhdGVPbkRyYWdTdGFydCA9IGZ1bmN0aW9uIGNyZWF0ZU9uRHJhZ1N0YXJ0KG5hbWUsIGdldFZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShkYXRhS2V5LCBnZXRWYWx1ZSgpKTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZU9uRHJhZ1N0YXJ0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL2V2ZW50cy9jcmVhdGVPbkRyYWdTdGFydC5qc1xuICoqIG1vZHVsZSBpZCA9IDU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY3JlYXRlT25EcmFnU3RhcnQgPSByZXF1aXJlKCcuL2NyZWF0ZU9uRHJhZ1N0YXJ0Jyk7XG5cbnZhciBjcmVhdGVPbkRyb3AgPSBmdW5jdGlvbiBjcmVhdGVPbkRyb3AobmFtZSwgY2hhbmdlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjaGFuZ2UobmFtZSwgZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoX2NyZWF0ZU9uRHJhZ1N0YXJ0LmRhdGFLZXkpKTtcbiAgfTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVPbkRyb3A7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL2NyZWF0ZU9uRHJvcC5qc1xuICoqIG1vZHVsZSBpZCA9IDU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBjcmVhdGVPbkZvY3VzID0gZnVuY3Rpb24gY3JlYXRlT25Gb2N1cyhuYW1lLCBmb2N1cykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmb2N1cyhuYW1lKTtcbiAgfTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVPbkZvY3VzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL2V2ZW50cy9jcmVhdGVPbkZvY3VzLmpzXG4gKiogbW9kdWxlIGlkID0gNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pc1Byb21pc2UgPSByZXF1aXJlKCdpcy1wcm9taXNlJyk7XG5cbnZhciBfaXNQcm9taXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJvbWlzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHtcbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbnZhciBzaWxlbmNlUHJvbWlzZSA9IGZ1bmN0aW9uIHNpbGVuY2VQcm9taXNlKHByb21pc2UpIHtcbiAgcmV0dXJuICgwLCBfaXNQcm9taXNlMi5kZWZhdWx0KShwcm9taXNlKSA/IHByb21pc2UudGhlbihub29wLCBub29wKSA6IHByb21pc2U7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzaWxlbmNlUHJvbWlzZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9zaWxlbmNlUHJvbWlzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGlzUHJvbWlzZTtcblxuZnVuY3Rpb24gaXNQcm9taXNlKG9iaikge1xuICByZXR1cm4gISFvYmogJiYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2lzLXByb21pc2UvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA2MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2lzUHJpc3RpbmUgPSByZXF1aXJlKCcuL2lzUHJpc3RpbmUnKTtcblxudmFyIF9pc1ByaXN0aW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJpc3RpbmUpO1xuXG52YXIgX2lzVmFsaWQgPSByZXF1aXJlKCcuL2lzVmFsaWQnKTtcblxudmFyIF9pc1ZhbGlkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzVmFsaWQpO1xuXG52YXIgX2lzQ2hlY2tlZCA9IHJlcXVpcmUoJy4vaXNDaGVja2VkJyk7XG5cbnZhciBfaXNDaGVja2VkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzQ2hlY2tlZCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogVXBkYXRlcyBhIGZpZWxkIG9iamVjdCBmcm9tIHRoZSBzdG9yZSB2YWx1ZXNcbiAqL1xudmFyIHVwZGF0ZUZpZWxkID0gZnVuY3Rpb24gdXBkYXRlRmllbGQoZmllbGQsIGZvcm1GaWVsZCwgYWN0aXZlLCBzeW5jRXJyb3IpIHtcbiAgdmFyIGRpZmYgPSB7fTtcbiAgdmFyIGZvcm1GaWVsZFZhbHVlID0gZm9ybUZpZWxkLnZhbHVlID09PSB1bmRlZmluZWQgPyAnJyA6IGZvcm1GaWVsZC52YWx1ZTtcblxuICAvLyB1cGRhdGUgZmllbGQgdmFsdWVcbiAgaWYgKGZpZWxkLnZhbHVlICE9PSBmb3JtRmllbGRWYWx1ZSkge1xuICAgIGRpZmYudmFsdWUgPSBmb3JtRmllbGRWYWx1ZTtcbiAgICBkaWZmLmNoZWNrZWQgPSAoMCwgX2lzQ2hlY2tlZDIuZGVmYXVsdCkoZm9ybUZpZWxkVmFsdWUpO1xuICB9XG5cbiAgLy8gdXBkYXRlIGRpcnR5L3ByaXN0aW5lXG4gIHZhciBwcmlzdGluZSA9ICgwLCBfaXNQcmlzdGluZTIuZGVmYXVsdCkoZm9ybUZpZWxkVmFsdWUsIGZvcm1GaWVsZC5pbml0aWFsKTtcbiAgaWYgKGZpZWxkLnByaXN0aW5lICE9PSBwcmlzdGluZSkge1xuICAgIGRpZmYuZGlydHkgPSAhcHJpc3RpbmU7XG4gICAgZGlmZi5wcmlzdGluZSA9IHByaXN0aW5lO1xuICB9XG5cbiAgLy8gdXBkYXRlIGZpZWxkIGVycm9yXG4gIHZhciBlcnJvciA9IHN5bmNFcnJvciB8fCBmb3JtRmllbGQuc3VibWl0RXJyb3IgfHwgZm9ybUZpZWxkLmFzeW5jRXJyb3I7XG4gIGlmIChlcnJvciAhPT0gZmllbGQuZXJyb3IpIHtcbiAgICBkaWZmLmVycm9yID0gZXJyb3I7XG4gIH1cbiAgdmFyIHZhbGlkID0gKDAsIF9pc1ZhbGlkMi5kZWZhdWx0KShlcnJvcik7XG4gIGlmIChmaWVsZC52YWxpZCAhPT0gdmFsaWQpIHtcbiAgICBkaWZmLmludmFsaWQgPSAhdmFsaWQ7XG4gICAgZGlmZi52YWxpZCA9IHZhbGlkO1xuICB9XG5cbiAgaWYgKGFjdGl2ZSAhPT0gZmllbGQuYWN0aXZlKSB7XG4gICAgZGlmZi5hY3RpdmUgPSBhY3RpdmU7XG4gIH1cbiAgdmFyIHRvdWNoZWQgPSAhIWZvcm1GaWVsZC50b3VjaGVkO1xuICBpZiAodG91Y2hlZCAhPT0gZmllbGQudG91Y2hlZCkge1xuICAgIGRpZmYudG91Y2hlZCA9IHRvdWNoZWQ7XG4gIH1cbiAgdmFyIHZpc2l0ZWQgPSAhIWZvcm1GaWVsZC52aXNpdGVkO1xuICBpZiAodmlzaXRlZCAhPT0gZmllbGQudmlzaXRlZCkge1xuICAgIGRpZmYudmlzaXRlZCA9IHZpc2l0ZWQ7XG4gIH1cbiAgdmFyIGF1dG9maWxsZWQgPSAhIWZvcm1GaWVsZC5hdXRvZmlsbGVkO1xuICBpZiAoYXV0b2ZpbGxlZCAhPT0gZmllbGQuYXV0b2ZpbGxlZCkge1xuICAgIGRpZmYuYXV0b2ZpbGxlZCA9IGF1dG9maWxsZWQ7XG4gIH1cblxuICBpZiAoJ2luaXRpYWwnIGluIGZvcm1GaWVsZCAmJiBmb3JtRmllbGQuaW5pdGlhbCAhPT0gZmllbGQuaW5pdGlhbFZhbHVlKSB7XG4gICAgZmllbGQuaW5pdGlhbFZhbHVlID0gZm9ybUZpZWxkLmluaXRpYWw7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmtleXMoZGlmZikubGVuZ3RoID8gX2V4dGVuZHMoe30sIGZpZWxkLCBkaWZmKSA6IGZpZWxkO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVwZGF0ZUZpZWxkO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL3VwZGF0ZUZpZWxkLmpzXG4gKiogbW9kdWxlIGlkID0gNjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzUHJpc3RpbmU7XG5mdW5jdGlvbiBpc1ByaXN0aW5lKGluaXRpYWwsIGRhdGEpIHtcbiAgaWYgKGluaXRpYWwgPT09IGRhdGEpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIGluaXRpYWwgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgZGF0YSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgcmV0dXJuIGluaXRpYWwgPT09IGRhdGE7XG4gIH0gZWxzZSBpZiAoaW5pdGlhbCBpbnN0YW5jZW9mIERhdGUgJiYgZGF0YSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gaW5pdGlhbC5nZXRUaW1lKCkgPT09IGRhdGEuZ2V0VGltZSgpO1xuICB9IGVsc2UgaWYgKGluaXRpYWwgJiYgdHlwZW9mIGluaXRpYWwgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKCFkYXRhIHx8IHR5cGVvZiBkYXRhICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgaW5pdGlhbEtleXMgPSBPYmplY3Qua2V5cyhpbml0aWFsKTtcbiAgICB2YXIgZGF0YUtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcbiAgICBpZiAoaW5pdGlhbEtleXMubGVuZ3RoICE9PSBkYXRhS2V5cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGRhdGFLZXlzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIGtleSA9IGRhdGFLZXlzW2luZGV4XTtcbiAgICAgIGlmICghaXNQcmlzdGluZShpbml0aWFsW2tleV0sIGRhdGFba2V5XSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpbml0aWFsIHx8IGRhdGEpIHtcbiAgICAvLyBhbGxvdyAnJyB0byBlcXVhdGUgdG8gdW5kZWZpbmVkIG9yIG51bGxcbiAgICByZXR1cm4gaW5pdGlhbCA9PT0gZGF0YTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9pc1ByaXN0aW5lLmpzXG4gKiogbW9kdWxlIGlkID0gNjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBpc0NoZWNrZWQgPSBmdW5jdGlvbiBpc0NoZWNrZWQodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIGxvd2VyID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAobG93ZXIgPT09ICd0cnVlJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChsb3dlciA9PT0gJ2ZhbHNlJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gaXNDaGVja2VkO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL2lzQ2hlY2tlZC5qc1xuICoqIG1vZHVsZSBpZCA9IDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciB3aXRob3V0ID0gZnVuY3Rpb24gd2l0aG91dChvYmplY3QsIGtleSkge1xuICB2YXIgY29weSA9IF9leHRlbmRzKHt9LCBvYmplY3QpO1xuICBkZWxldGUgY29weVtrZXldO1xuICByZXR1cm4gY29weTtcbn07XG5cbnZhciByZW1vdmVGaWVsZCA9IGZ1bmN0aW9uIHJlbW92ZUZpZWxkKGZpZWxkcywgcGF0aCkge1xuICB2YXIgZG90SW5kZXggPSBwYXRoLmluZGV4T2YoJy4nKTtcbiAgdmFyIG9wZW5JbmRleCA9IHBhdGguaW5kZXhPZignWycpO1xuICB2YXIgY2xvc2VJbmRleCA9IHBhdGguaW5kZXhPZignXScpO1xuICBpZiAob3BlbkluZGV4ID4gMCAmJiBjbG9zZUluZGV4ICE9PSBvcGVuSW5kZXggKyAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdmb3VuZCBbIG5vdCBmb2xsb3dlZCBieSBdJyk7XG4gIH1cbiAgaWYgKG9wZW5JbmRleCA+IDAgJiYgKGRvdEluZGV4IDwgMCB8fCBvcGVuSW5kZXggPCBkb3RJbmRleCkpIHtcbiAgICB2YXIgX3JldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGFycmF5IGZpZWxkXG4gICAgICB2YXIga2V5ID0gcGF0aC5zdWJzdHJpbmcoMCwgb3BlbkluZGV4KTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShmaWVsZHNba2V5XSkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2OiB3aXRob3V0KGZpZWxkcywga2V5KVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdmFyIHJlc3QgPSBwYXRoLnN1YnN0cmluZyhjbG9zZUluZGV4ICsgMSk7XG4gICAgICBpZiAocmVzdFswXSA9PT0gJy4nKSB7XG4gICAgICAgIHJlc3QgPSByZXN0LnN1YnN0cmluZygxKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXN0KSB7XG4gICAgICAgIHZhciBfcmV0MiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgICAgICAgdmFyIGNvcHkgPSBbXTtcbiAgICAgICAgICBmaWVsZHNba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlbW92ZUZpZWxkKGl0ZW0sIHJlc3QpO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHJlc3VsdCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGNvcHlbaW5kZXhdID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2OiB7XG4gICAgICAgICAgICAgIHY6IGNvcHkubGVuZ3RoID8gX2V4dGVuZHMoe30sIGZpZWxkcywgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJba2V5XSA9IGNvcHksIF9leHRlbmRzMikpIDogd2l0aG91dChmaWVsZHMsIGtleSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9KCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBfcmV0MiA9PT0gXCJvYmplY3RcIikgcmV0dXJuIF9yZXQyLnY7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2OiB3aXRob3V0KGZpZWxkcywga2V5KVxuICAgICAgfTtcbiAgICB9KCk7XG5cbiAgICBpZiAodHlwZW9mIF9yZXQgPT09IFwib2JqZWN0XCIpIHJldHVybiBfcmV0LnY7XG4gIH1cbiAgaWYgKGRvdEluZGV4ID4gMCkge1xuICAgIHZhciBfZXh0ZW5kczM7XG5cbiAgICAvLyBzdWJvYmplY3QgZmllbGRcbiAgICB2YXIgX2tleSA9IHBhdGguc3Vic3RyaW5nKDAsIGRvdEluZGV4KTtcbiAgICB2YXIgX3Jlc3QgPSBwYXRoLnN1YnN0cmluZyhkb3RJbmRleCArIDEpO1xuICAgIGlmICghZmllbGRzW19rZXldKSB7XG4gICAgICByZXR1cm4gZmllbGRzO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gcmVtb3ZlRmllbGQoZmllbGRzW19rZXldLCBfcmVzdCk7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHJlc3VsdCkubGVuZ3RoID8gX2V4dGVuZHMoe30sIGZpZWxkcywgKF9leHRlbmRzMyA9IHt9LCBfZXh0ZW5kczNbX2tleV0gPSByZW1vdmVGaWVsZChmaWVsZHNbX2tleV0sIF9yZXN0KSwgX2V4dGVuZHMzKSkgOiB3aXRob3V0KGZpZWxkcywgX2tleSk7XG4gIH1cbiAgcmV0dXJuIHdpdGhvdXQoZmllbGRzLCBwYXRoKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHJlbW92ZUZpZWxkO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL3JlbW92ZUZpZWxkLmpzXG4gKiogbW9kdWxlIGlkID0gNjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pc1Byb21pc2UgPSByZXF1aXJlKCdpcy1wcm9taXNlJyk7XG5cbnZhciBfaXNQcm9taXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJvbWlzZSk7XG5cbnZhciBfaXNWYWxpZCA9IHJlcXVpcmUoJy4vaXNWYWxpZCcpO1xuXG52YXIgX2lzVmFsaWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNWYWxpZCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBoYW5kbGVTdWJtaXQgPSBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoc3VibWl0LCB2YWx1ZXMsIHByb3BzLCBhc3luY1ZhbGlkYXRlKSB7XG4gIHZhciBkaXNwYXRjaCA9IHByb3BzLmRpc3BhdGNoO1xuICB2YXIgZmllbGRzID0gcHJvcHMuZmllbGRzO1xuICB2YXIgb25TdWJtaXRTdWNjZXNzID0gcHJvcHMub25TdWJtaXRTdWNjZXNzO1xuICB2YXIgb25TdWJtaXRGYWlsID0gcHJvcHMub25TdWJtaXRGYWlsO1xuICB2YXIgc3RhcnRTdWJtaXQgPSBwcm9wcy5zdGFydFN1Ym1pdDtcbiAgdmFyIHN0b3BTdWJtaXQgPSBwcm9wcy5zdG9wU3VibWl0O1xuICB2YXIgc3VibWl0RmFpbGVkID0gcHJvcHMuc3VibWl0RmFpbGVkO1xuICB2YXIgcmV0dXJuUmVqZWN0ZWRTdWJtaXRQcm9taXNlID0gcHJvcHMucmV0dXJuUmVqZWN0ZWRTdWJtaXRQcm9taXNlO1xuICB2YXIgdG91Y2ggPSBwcm9wcy50b3VjaDtcbiAgdmFyIHZhbGlkYXRlID0gcHJvcHMudmFsaWRhdGU7XG5cbiAgdmFyIHN5bmNFcnJvcnMgPSB2YWxpZGF0ZSh2YWx1ZXMsIHByb3BzKTtcbiAgdG91Y2guYXBwbHkodW5kZWZpbmVkLCBmaWVsZHMpOyAvLyB0b3VjaCBhbGwgZmllbGRzXG4gIGlmICgoMCwgX2lzVmFsaWQyLmRlZmF1bHQpKHN5bmNFcnJvcnMpKSB7XG4gICAgdmFyIGRvU3VibWl0ID0gZnVuY3Rpb24gZG9TdWJtaXQoKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gc3VibWl0KHZhbHVlcywgZGlzcGF0Y2gpO1xuICAgICAgaWYgKCgwLCBfaXNQcm9taXNlMi5kZWZhdWx0KShyZXN1bHQpKSB7XG4gICAgICAgIHN0YXJ0U3VibWl0KCk7XG4gICAgICAgIHJldHVybiByZXN1bHQudGhlbihmdW5jdGlvbiAoc3VibWl0UmVzdWx0KSB7XG4gICAgICAgICAgc3RvcFN1Ym1pdCgpO1xuICAgICAgICAgIGlmIChvblN1Ym1pdFN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIG9uU3VibWl0U3VjY2VzcyhzdWJtaXRSZXN1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc3VibWl0UmVzdWx0O1xuICAgICAgICB9LCBmdW5jdGlvbiAoc3VibWl0RXJyb3IpIHtcbiAgICAgICAgICBzdG9wU3VibWl0KHN1Ym1pdEVycm9yKTtcbiAgICAgICAgICBpZiAob25TdWJtaXRGYWlsKSB7XG4gICAgICAgICAgICBvblN1Ym1pdEZhaWwoc3VibWl0RXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmV0dXJuUmVqZWN0ZWRTdWJtaXRQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoc3VibWl0RXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAob25TdWJtaXRTdWNjZXNzKSB7XG4gICAgICAgIG9uU3VibWl0U3VjY2VzcyhyZXN1bHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHZhciBhc3luY1ZhbGlkYXRlUmVzdWx0ID0gYXN5bmNWYWxpZGF0ZSgpO1xuICAgIHJldHVybiAoMCwgX2lzUHJvbWlzZTIuZGVmYXVsdCkoYXN5bmNWYWxpZGF0ZVJlc3VsdCkgP1xuICAgIC8vIGFzeW5jVmFsaWRhdGVSZXN1bHQgd2lsbCBiZSByZWplY3RlZCBpZiBhc3luYyB2YWxpZGF0aW9uIGZhaWxlZFxuICAgIGFzeW5jVmFsaWRhdGVSZXN1bHQudGhlbihkb1N1Ym1pdCwgZnVuY3Rpb24gKCkge1xuICAgICAgc3VibWl0RmFpbGVkKCk7XG4gICAgICBpZiAob25TdWJtaXRGYWlsKSB7XG4gICAgICAgIG9uU3VibWl0RmFpbCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldHVyblJlamVjdGVkU3VibWl0UHJvbWlzZSA/IFByb21pc2UucmVqZWN0KCkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9KSA6IGRvU3VibWl0KCk7IC8vIG5vIGFzeW5jIHZhbGlkYXRpb24sIHNvIHN1Ym1pdFxuICB9XG4gIHN1Ym1pdEZhaWxlZCgpO1xuXG4gIGlmIChvblN1Ym1pdEZhaWwpIHtcbiAgICBvblN1Ym1pdEZhaWwoc3luY0Vycm9ycyk7XG4gIH1cblxuICBpZiAocmV0dXJuUmVqZWN0ZWRTdWJtaXRQcm9taXNlKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHN5bmNFcnJvcnMpO1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBoYW5kbGVTdWJtaXQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvaGFuZGxlU3VibWl0LmpzXG4gKiogbW9kdWxlIGlkID0gNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pc1Byb21pc2UgPSByZXF1aXJlKCdpcy1wcm9taXNlJyk7XG5cbnZhciBfaXNQcm9taXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJvbWlzZSk7XG5cbnZhciBfaXNWYWxpZCA9IHJlcXVpcmUoJy4vaXNWYWxpZCcpO1xuXG52YXIgX2lzVmFsaWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNWYWxpZCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBhc3luY1ZhbGlkYXRpb24gPSBmdW5jdGlvbiBhc3luY1ZhbGlkYXRpb24oZm4sIHN0YXJ0LCBzdG9wLCBmaWVsZCkge1xuICBzdGFydChmaWVsZCk7XG4gIHZhciBwcm9taXNlID0gZm4oKTtcbiAgaWYgKCEoMCwgX2lzUHJvbWlzZTIuZGVmYXVsdCkocHJvbWlzZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2FzeW5jVmFsaWRhdGUgZnVuY3Rpb24gcGFzc2VkIHRvIHJlZHV4Rm9ybSBtdXN0IHJldHVybiBhIHByb21pc2UnKTtcbiAgfVxuICB2YXIgaGFuZGxlRXJyb3JzID0gZnVuY3Rpb24gaGFuZGxlRXJyb3JzKHJlamVjdGVkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlcnJvcnMpIHtcbiAgICAgIGlmICghKDAsIF9pc1ZhbGlkMi5kZWZhdWx0KShlcnJvcnMpKSB7XG4gICAgICAgIHN0b3AoZXJyb3JzKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgICB9IGVsc2UgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHN0b3AoKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBc3luY2hyb25vdXMgdmFsaWRhdGlvbiBwcm9taXNlIHdhcyByZWplY3RlZCB3aXRob3V0IGVycm9ycy4nKTtcbiAgICAgIH1cbiAgICAgIHN0b3AoKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9O1xuICB9O1xuICByZXR1cm4gcHJvbWlzZS50aGVuKGhhbmRsZUVycm9ycyhmYWxzZSksIGhhbmRsZUVycm9ycyh0cnVlKSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBhc3luY1ZhbGlkYXRpb247XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvYXN5bmNWYWxpZGF0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zaWxlbmNlRXZlbnQgPSByZXF1aXJlKCcuL3NpbGVuY2VFdmVudCcpO1xuXG52YXIgX3NpbGVuY2VFdmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaWxlbmNlRXZlbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc2lsZW5jZUV2ZW50cyA9IGZ1bmN0aW9uIHNpbGVuY2VFdmVudHMoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuICgwLCBfc2lsZW5jZUV2ZW50Mi5kZWZhdWx0KShldmVudCkgPyBmbi5hcHBseSh1bmRlZmluZWQsIGFyZ3MpIDogZm4uYXBwbHkodW5kZWZpbmVkLCBbZXZlbnRdLmNvbmNhdChhcmdzKSk7XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzaWxlbmNlRXZlbnRzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL2V2ZW50cy9zaWxlbmNlRXZlbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gNjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pc0V2ZW50ID0gcmVxdWlyZSgnLi9pc0V2ZW50Jyk7XG5cbnZhciBfaXNFdmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0V2ZW50KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHNpbGVuY2VFdmVudCA9IGZ1bmN0aW9uIHNpbGVuY2VFdmVudChldmVudCkge1xuICB2YXIgaXMgPSAoMCwgX2lzRXZlbnQyLmRlZmF1bHQpKGV2ZW50KTtcbiAgaWYgKGlzKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICByZXR1cm4gaXM7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzaWxlbmNlRXZlbnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL3NpbGVuY2VFdmVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDcwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVkdXggPSByZXF1aXJlKCdyZWR1eCcpO1xuXG52YXIgd3JhcE1hcERpc3BhdGNoVG9Qcm9wcyA9IGZ1bmN0aW9uIHdyYXBNYXBEaXNwYXRjaFRvUHJvcHMobWFwRGlzcGF0Y2hUb1Byb3BzLCBhY3Rpb25DcmVhdG9ycykge1xuICBpZiAobWFwRGlzcGF0Y2hUb1Byb3BzKSB7XG4gICAgaWYgKHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMubGVuZ3RoID4gMSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgICAgICBkaXNwYXRjaDogZGlzcGF0Y2hcbiAgICAgICAgICB9LCBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKSwgKDAsIF9yZWR1eC5iaW5kQWN0aW9uQ3JlYXRvcnMpKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICAgIGRpc3BhdGNoOiBkaXNwYXRjaFxuICAgICAgICB9LCBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpLCAoMCwgX3JlZHV4LmJpbmRBY3Rpb25DcmVhdG9ycykoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSk7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBkaXNwYXRjaDogZGlzcGF0Y2hcbiAgICAgIH0sICgwLCBfcmVkdXguYmluZEFjdGlvbkNyZWF0b3JzKShtYXBEaXNwYXRjaFRvUHJvcHMsIGRpc3BhdGNoKSwgKDAsIF9yZWR1eC5iaW5kQWN0aW9uQ3JlYXRvcnMpKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBkaXNwYXRjaDogZGlzcGF0Y2hcbiAgICB9LCAoMCwgX3JlZHV4LmJpbmRBY3Rpb25DcmVhdG9ycykoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSk7XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB3cmFwTWFwRGlzcGF0Y2hUb1Byb3BzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL3dyYXBNYXBEaXNwYXRjaFRvUHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSA3MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNDU5KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsXG4gKiogbW9kdWxlIGlkID0gNzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIHdyYXBNYXBTdGF0ZVRvUHJvcHMgPSBmdW5jdGlvbiB3cmFwTWFwU3RhdGVUb1Byb3BzKG1hcFN0YXRlVG9Qcm9wcywgZ2V0Rm9ybSkge1xuICBpZiAobWFwU3RhdGVUb1Byb3BzKSB7XG4gICAgaWYgKHR5cGVvZiBtYXBTdGF0ZVRvUHJvcHMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWFwU3RhdGVUb1Byb3BzIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgIH1cbiAgICBpZiAobWFwU3RhdGVUb1Byb3BzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUsIG93blByb3BzKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyksIHtcbiAgICAgICAgICBmb3JtOiBnZXRGb3JtKHN0YXRlKVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSwge1xuICAgICAgICBmb3JtOiBnZXRGb3JtKHN0YXRlKVxuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvcm06IGdldEZvcm0oc3RhdGUpXG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHdyYXBNYXBTdGF0ZVRvUHJvcHM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvd3JhcE1hcFN0YXRlVG9Qcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDczXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg2NjUpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbFxuICoqIG1vZHVsZSBpZCA9IDc0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBjcmVhdGVQcm9wVHlwZXMgPSBmdW5jdGlvbiBjcmVhdGVQcm9wVHlwZXMoX3JlZikge1xuICB2YXIgX3JlZiRQcm9wVHlwZXMgPSBfcmVmLlByb3BUeXBlcztcbiAgdmFyIGFueSA9IF9yZWYkUHJvcFR5cGVzLmFueTtcbiAgdmFyIGJvb2wgPSBfcmVmJFByb3BUeXBlcy5ib29sO1xuICB2YXIgc3RyaW5nID0gX3JlZiRQcm9wVHlwZXMuc3RyaW5nO1xuICB2YXIgZnVuYyA9IF9yZWYkUHJvcFR5cGVzLmZ1bmM7XG4gIHZhciBvYmplY3QgPSBfcmVmJFByb3BUeXBlcy5vYmplY3Q7XG4gIHJldHVybiB7XG4gICAgLy8gU3RhdGU6XG4gICAgYWN0aXZlOiBzdHJpbmcsIC8vIGN1cnJlbnRseSBhY3RpdmUgZmllbGRcbiAgICBhc3luY1ZhbGlkYXRpbmc6IGJvb2wuaXNSZXF1aXJlZCwgLy8gdHJ1ZSBpZiBhc3luYyB2YWxpZGF0aW9uIGlzIHJ1bm5pbmdcbiAgICBhdXRvZmlsbGVkOiBib29sLCAvLyB0cnVlIGlmIHNldCBwcm9ncmFtbWF0aWNhbGx5IGJ5IGF1dG9maWxsXG4gICAgZGlydHk6IGJvb2wuaXNSZXF1aXJlZCwgLy8gdHJ1ZSBpZiBhbnkgdmFsdWVzIGFyZSBkaWZmZXJlbnQgZnJvbSBpbml0aWFsVmFsdWVzXG4gICAgZXJyb3I6IGFueSwgLy8gZm9ybS13aWRlIGVycm9yIGZyb20gJ19lcnJvcicga2V5IGluIHZhbGlkYXRpb24gcmVzdWx0XG4gICAgZXJyb3JzOiBvYmplY3QsIC8vIGEgbWFwIG9mIGVycm9ycyBjb3JyZXNwb25kaW5nIHRvIHN0cnVjdHVyZSBvZiBmb3JtIGRhdGEgKHJlc3VsdCBvZiB2YWxpZGF0aW9uKVxuICAgIGZpZWxkczogb2JqZWN0LmlzUmVxdWlyZWQsIC8vIHRoZSBtYXAgb2YgZmllbGRzXG4gICAgZm9ybUtleTogYW55LCAvLyB0aGUgZm9ybSBrZXkgaWYgb25lIHdhcyBwcm92aWRlZCAodXNlZCB3aGVuIGRvaW5nIG11bHRpcmVjb3JkIGZvcm1zKVxuICAgIGludmFsaWQ6IGJvb2wuaXNSZXF1aXJlZCwgLy8gdHJ1ZSBpZiB0aGVyZSBhcmUgYW55IHZhbGlkYXRpb24gZXJyb3JzXG4gICAgcHJpc3RpbmU6IGJvb2wuaXNSZXF1aXJlZCwgLy8gdHJ1ZSBpZiB0aGUgdmFsdWVzIGFyZSB0aGUgc2FtZSBhcyBpbml0aWFsVmFsdWVzXG4gICAgc3VibWl0dGluZzogYm9vbC5pc1JlcXVpcmVkLCAvLyB0cnVlIGlmIHRoZSBmb3JtIGlzIGluIHRoZSBwcm9jZXNzIG9mIGJlaW5nIHN1Ym1pdHRlZFxuICAgIHN1Ym1pdEZhaWxlZDogYm9vbC5pc1JlcXVpcmVkLCAvLyB0cnVlIGlmIHRoZSBmb3JtIHdhcyBzdWJtaXR0ZWQgYW5kIGZhaWxlZCBmb3IgYW55IHJlYXNvblxuICAgIHZhbGlkOiBib29sLmlzUmVxdWlyZWQsIC8vIHRydWUgaWYgdGhlcmUgYXJlIG5vIHZhbGlkYXRpb24gZXJyb3JzXG4gICAgdmFsdWVzOiBvYmplY3QuaXNSZXF1aXJlZCwgLy8gdGhlIHZhbHVlcyBvZiB0aGUgZm9ybSBhcyB0aGV5IHdpbGwgYmUgc3VibWl0dGVkXG5cbiAgICAvLyBBY3Rpb25zOlxuICAgIGFzeW5jVmFsaWRhdGU6IGZ1bmMuaXNSZXF1aXJlZCwgLy8gZnVuY3Rpb24gdG8gdHJpZ2dlciBhc3luYyB2YWxpZGF0aW9uXG4gICAgZGVzdHJveUZvcm06IGZ1bmMuaXNSZXF1aXJlZCwgLy8gYWN0aW9uIHRvIGRlc3Ryb3kgdGhlIGZvcm0ncyBkYXRhIGluIFJlZHV4XG4gICAgaGFuZGxlU3VibWl0OiBmdW5jLmlzUmVxdWlyZWQsIC8vIGZ1bmN0aW9uIHRvIHN1Ym1pdCB0aGUgZm9ybVxuICAgIGluaXRpYWxpemVGb3JtOiBmdW5jLmlzUmVxdWlyZWQsIC8vIGFjdGlvbiB0byBpbml0aWFsaXplIGZvcm0gZGF0YVxuICAgIHJlc2V0Rm9ybTogZnVuYy5pc1JlcXVpcmVkLCAvLyBhY3Rpb24gdG8gcmVzZXQgdGhlIGZvcm0gZGF0YSB0byBwcmV2aW91c2x5IGluaXRpYWxpemVkIHZhbHVlc1xuICAgIHRvdWNoOiBmdW5jLmlzUmVxdWlyZWQsIC8vIGFjdGlvbiB0byBtYXJrIGZpZWxkcyBhcyB0b3VjaGVkXG4gICAgdG91Y2hBbGw6IGZ1bmMuaXNSZXF1aXJlZCwgLy8gYWN0aW9uIHRvIG1hcmsgQUxMIGZpZWxkcyBhcyB0b3VjaGVkXG4gICAgdW50b3VjaDogZnVuYy5pc1JlcXVpcmVkLCAvLyBhY3Rpb24gdG8gbWFyayBmaWVsZHMgYXMgdW50b3VjaGVkXG4gICAgdW50b3VjaEFsbDogZnVuYy5pc1JlcXVpcmVkIC8vIGFjdGlvbiB0byBtYXJrIEFMTCBmaWVsZHMgYXMgdW50b3VjaGVkXG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVQcm9wVHlwZXM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvY3JlYXRlUHJvcFR5cGVzLmpzXG4gKiogbW9kdWxlIGlkID0gNzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBBbGVydCBmcm9tICcuL0FsZXJ0J1xuaW1wb3J0IEFsZXJ0cyBmcm9tICcuL0FsZXJ0cydcbmV4cG9ydCB7IEFsZXJ0cywgQWxlcnQgfVxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL0FsZXJ0L2luZGV4LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1zZ1R5cGUgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL2NvbXBvbmVudHMnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vX2FsZXJ0LnNjc3MnKVxuLy8gaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbWVzc2FnZTogc3RyaW5nXG4gIHR5cGU/OiBNc2dUeXBlXG4gIG9uUmVxdWVzdENsb3NlPzogKCkgPT4gdm9pZFxuICB2aXNpYmxlOiBib29sZWFuXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgQWxlcnQgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlIDogJ3N1Y2Nlc3MnXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLnZpc2libGUgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZU5hbWU9e2BhbGVydC0tJHt0eXBlfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJhbGVydC1jbG9zZVwiPlxuICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezE1fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiY29udGVudFwiPnt0aGlzLnByb3BzLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvQWxlcnQvQWxlcnQudHN4XG4gKiovIiwiaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJ1xuZXhwb3J0IGRlZmF1bHQgSWNvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvSWNvbi9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgc3ZnSWNvbnMgZnJvbSAnLi9zdmctaWNvbnMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vSWNvbi5jc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgbmFtZTogc3RyaW5nXG4gIG9uQ2xpY2s/OiBhbnlcbiAgc2l6ZT86IG51bWJlclxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgc3R5bGVOYW1lPzogc3RyaW5nXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgSWNvbiBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIHt9PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgbmFtZSwgb25DbGljaywgc2l6ZSB9ID0gdGhpcy5wcm9wc1xuICAgIGxldCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKCdpY29uJywgYGljb24tJHtuYW1lfWAsIHRoaXMucHJvcHMuY2xhc3NOYW1lKVxuXG4gICAgaWYgKHR5cGVvZiBzdmdJY29uc1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ljb24gbmFtZSAoJXMpIG5vdCBmb3VuZCEgJywgbmFtZSlcbiAgICB9XG5cbiAgICBzaXplID0gc2l6ZSB8fCAzMFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIHN0eWxlTmFtZT1cImljb25cIiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25DbGljaz17b25DbGlja30+XG4gICAgICAgIDxzdmcgey4uLnN2Z0ljb25zW25hbWVdLnZpZXdCb3ggJiYge3ZpZXdCb3g6IHN2Z0ljb25zW25hbWVdLnZpZXdCb3h9fSB3aWR0aD17c2l6ZX0gaGVpZ2h0PXtzaXplfSBzdHlsZU5hbWU9XCJzdmctc2hhcGVcIj5cbiAgICAgICAgICA8cGF0aCBkPXtzdmdJY29uc1tuYW1lXS5wYXRofS8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9zcGFuPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJY29uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9JY29uL0ljb24udHN4XG4gKiovIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gODBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgY2xvc2U6IHtcbiAgICBwYXRoOiAnTTcuNDggOGwzLjc1IDMuNzUtMS40OCAxLjQ4TDYgOS40OGwtMy43NSAzLjc1LTEuNDgtMS40OEw0LjUyIDggLjc3IDQuMjVsMS40OC0xLjQ4TDYgNi41MmwzLjc1LTMuNzUgMS40OCAxLjQ4eicsXG4gICAgdmlld0JveDogJzAgMCAxMiAxNidcbiAgfSxcbiAgc3Rhcjoge1xuICAgIHBhdGg6ICdNMTQgNmwtNC45LS42NEw3IDEgNC45IDUuMzYgMCA2bDMuNiAzLjI2TDIuNjcgMTQgNyAxMS42NyAxMS4zMyAxNGwtLjkzLTQuNzR6JyxcbiAgfSxcbiAgdXNlcnM6IHtcbiAgICBwYXRoOiAnTTE2IDExYzEuNjYgMCAyLjk5LTEuMzQgMi45OS0zUzE3LjY2IDUgMTYgNWMtMS42NiAwLTMgMS4zNC0zIDNzMS4zNCAzIDMgM3ptLTggMGMxLjY2IDAgMi45OS0xLjM0IDIuOTktM1M5LjY2IDUgOCA1QzYuMzQgNSA1IDYuMzQgNSA4czEuMzQgMyAzIDN6bTAgMmMtMi4zMyAwLTcgMS4xNy03IDMuNVYxOWgxNHYtMi41YzAtMi4zMy00LjY3LTMuNS03LTMuNXptOCAwYy0uMjkgMC0uNjIuMDItLjk3LjA1IDEuMTYuODQgMS45NyAxLjk3IDEuOTcgMy40NVYxOWg2di0yLjVjMC0yLjMzLTQuNjctMy41LTctMy41eicsXG4gIH0sXG4gIGZvbGRlcjoge1xuICAgIHBhdGg6ICdNMTAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY4YzAtMS4xLS45LTItMi0yaC04bC0yLTJ6JyxcbiAgfSxcbiAgZGF0YWJhc2U6IHtcbiAgICBwYXRoOiAnTTIwLjIgNS45bC44LS44QzE5LjYgMy43IDE3LjggMyAxNiAzcy0zLjYuNy01IDIuMWwuOC44QzEzIDQuOCAxNC41IDQuMiAxNiA0LjJzMyAuNiA0LjIgMS43em0tLjkuOGMtLjktLjktMi4xLTEuNC0zLjMtMS40cy0yLjQuNS0zLjMgMS40bC44LjhjLjctLjcgMS42LTEgMi41LTEgLjkgMCAxLjguMyAyLjUgMWwuOC0uOHpNMTkgMTNoLTJWOWgtMnY0SDVjLTEuMSAwLTIgLjktMiAydjRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnYtNGMwLTEuMS0uOS0yLTItMnpNOCAxOEg2di0yaDJ2MnptMy41IDBoLTJ2LTJoMnYyem0zLjUgMGgtMnYtMmgydjJ6J1xuICB9LFxuICBzdGF0aXN0aWNzOiB7XG4gICAgcGF0aDogJ00yMSAySDNjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoN3YySDh2Mmg4di0yaC0ydi0yaDdjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnptMCAxNEgzVjRoMTh2MTJ6JyxcbiAgfSxcbiAgYm9va3M6IHtcbiAgICBwYXRoOiAnTTIwLjU0IDUuMjNsLTEuMzktMS42OEMxOC44OCAzLjIxIDE4LjQ3IDMgMTggM0g2Yy0uNDcgMC0uODguMjEtMS4xNi41NUwzLjQ2IDUuMjNDMy4xNyA1LjU3IDMgNi4wMiAzIDYuNVYxOWMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjYuNWMwLS40OC0uMTctLjkzLS40Ni0xLjI3ek0xMiAxNy41TDYuNSAxMkgxMHYtMmg0djJoMy41TDEyIDE3LjV6TTUuMTIgNWwuODEtMWgxMmwuOTQgMUg1LjEyeicsXG4gICAgLy8gdmlld0JveDogJzMgMyAxOCAxOCdcbiAgfSxcbiAgYmFjazoge1xuICAgIC8vIHBhdGg6ICdNNzMyIDgzMmwtNTUgNTVsLTUwNSAtNTA1bDUwNSAtNTA1bDU1IDU0bC00NTEgNDUxeidcbiAgICAvLyBwYXRoOiAnTTE0IDZsLTQuOS0uNjRMNyAxIDQuOSA1LjM2IDAgNmwzLjYgMy4yNkwyLjY3IDE0IDcgMTEuNjcgMTEuMzMgMTRsLS45My00Ljc0eicsXG4gICAgcGF0aDogJ20gMjYsMjUgYyAtMC40Njc1NzQsMCAtMC45MDk0MzQsMC4xNjg2NSAtMS4yNSwwLjQzNzUgQyAyNC41NTUyNzksMjUuNTkxMjE1IDYuNjEzMDUxNiw0Mi41NDYyODUgNi40Njg3NSw0Mi43MTg3NSA2LjE3ODIzMzIsNDMuMDY1OTYgNiw0My41MTE4NyA2LDQ0IDYsNDQuNTE5NDYgNi4yMDY1NTY2LDQ0Ljk4ODE4IDYuNTMxMjUsNDUuMzQzNzUgNi42NjgzOTkyLDQ1LjQ5Mzk0MSAyNC42MjUsNjIuNDM3NSAyNC42MjUsNjIuNDM3NSBjIDAuNzU5ODQyLDAuNzI1MTUyIDIuMTIxODQyLDAuNzAwNDIxIDIuODQzNzUsLTAuMDYyNSAwLjcyMTkwOCwtMC43NjI5MyAwLjY3MjI0NCwtMi4xMjUwOTkgLTAuMDkzNzUsLTIuODQzNzUgTCAxMy4wMzEyNSw0NiA2NCw0NiBjIDEzLjg4ODg3MSwwIDI1LjY2MDM5MiwxMS42Mzk1NSAyNiwyNi4wMzEyNSAwLjAwMzUsMC4xNDA1NTcgMCwwLjc3NDg1IDAsMC45Njg3NSAwLDEuMTA4IDAuODkyLDIgMiwyIDEuMTA4LDAgMiwtMC44OTIgMiwtMiBsIDAsLTEuMDYyNSBDIDkzLjYxMDIwOCw1NS40MTk0IDgwLjExODUyOSw0MiA2NCw0MiBMIDEzLjAzMTI1LDQyIEMgMTMuMDMxMjUsNDIgMjcuMzYyNzMyLDI4LjQ5NTk1OSAyNy41LDI4LjM0Mzc1IDI3LjgxOTcxLDI3Ljk4OTI1IDI4LDI3LjUxNDk3IDI4LDI3IDI4LDI1Ljg5NTQzIDI3LjEwNDU2OSwyNSAyNiwyNSB6JyxcbiAgICB2aWV3Qm94OiAnMCAwIDEwMCAxMjUnXG4gIH0sXG4gIHByZWZlcmVuY2U6IHtcbiAgICBwYXRoOiAnTSAxNy43ODEyNSA4Ljk2ODc1IEEgMi4wMDAyIDIuMDAwMiAwIDAgMCAxNiAxMSBMIDE2IDU2LjI1IEMgMTIuMDA4MTg4IDU3LjE2ODMwMiA5IDYwLjc0MTQwNiA5IDY1IEMgOSA2OS4yNTkyMjQgMTIuMDA3NDI3IDcyLjg2MzUzNCAxNiA3My43ODEyNSBMIDE2IDg5IEEgMi4wMDAyIDIuMDAwMiAwIDEgMCAyMCA4OSBMIDIwIDczLjc4MTI1IEMgMjMuOTkyNTczIDcyLjg2MzUzNCAyNyA2OS4yNTkyMjQgMjcgNjUgQyAyNyA2MC43NDE0MDYgMjMuOTkxODEyIDU3LjE2ODMwMiAyMCA1Ni4yNSBMIDIwIDExIEEgMi4wMDAyIDIuMDAwMiAwIDAgMCAxNy43ODEyNSA4Ljk2ODc1IHogTSA0OS43ODEyNSA4Ljk2ODc1IEEgMi4wMDAyIDIuMDAwMiAwIDAgMCA0OCAxMSBMIDQ4IDI2LjI1IEMgNDQuMDA4MTg4IDI3LjE2ODMwNSA0MSAzMC43NDE0MjMgNDEgMzUgQyA0MSAzOS4yNTkxMiA0NC4wMDc0MjcgNDIuODYzNTExIDQ4IDQzLjc4MTI1IEwgNDggODkgQSAyLjAwMDIgMi4wMDAyIDAgMSAwIDUyIDg5IEwgNTIgNDMuNzgxMjUgQyA1NS45OTI1NzMgNDIuODYzNTExIDU5IDM5LjI1OTEyIDU5IDM1IEMgNTkgMzAuNzQxNDIzIDU1Ljk5MTgxMiAyNy4xNjgzMDUgNTIgMjYuMjUgTCA1MiAxMSBBIDIuMDAwMiAyLjAwMDIgMCAwIDAgNDkuNzgxMjUgOC45Njg3NSB6IE0gODEuNzgxMjUgOC45Njg3NSBBIDIuMDAwMiAyLjAwMDIgMCAwIDAgODAgMTEgTCA4MCA1Ni4yNSBDIDc2LjAwODE4OCA1Ny4xNjgzMDIgNzMgNjAuNzQxNDA2IDczIDY1IEMgNzMgNjkuMjU5MjI0IDc2LjAwNzQyNyA3Mi44NjM1MzQgODAgNzMuNzgxMjUgTCA4MCA4OSBBIDIuMDAwMiAyLjAwMDIgMCAxIDAgODQgODkgTCA4NCA3My43ODEyNSBDIDg3Ljk5MjU3MyA3Mi44NjM1MzQgOTEgNjkuMjU5MjI0IDkxIDY1IEMgOTEgNjAuNzQxNDA2IDg3Ljk5MTgxMiA1Ny4xNjgzMDIgODQgNTYuMjUgTCA4NCAxMSBBIDIuMDAwMiAyLjAwMDIgMCAwIDAgODEuNzgxMjUgOC45Njg3NSB6IE0gNTAgMzAgQyA1Mi43ODUxMTYgMzAgNTUgMzIuMjE0ODggNTUgMzUgQyA1NSAzNy43ODUxMiA1Mi43ODUxMTYgNDAgNTAgNDAgQyA0Ny4yMTQ4ODQgNDAgNDUgMzcuNzg1MTIgNDUgMzUgQyA0NSAzMi4yMTQ4OCA0Ny4yMTQ4ODQgMzAgNTAgMzAgeiBNIDE4IDYwIEMgMjAuNzg1MTE2IDYwIDIzIDYyLjIxNDkgMjMgNjUgQyAyMyA2Ny43ODUyIDIwLjc4NTExNiA3MCAxOCA3MCBDIDE1LjIxNDg4NCA3MCAxMyA2Ny43ODUyIDEzIDY1IEMgMTMgNjIuMjE0OSAxNS4yMTQ4ODQgNjAgMTggNjAgeiBNIDgyIDYwIEMgODQuNzg1MTE2IDYwIDg3IDYyLjIxNDkgODcgNjUgQyA4NyA2Ny43ODUyIDg0Ljc4NTExNiA3MCA4MiA3MCBDIDc5LjIxNDg4NCA3MCA3NyA2Ny43ODUyIDc3IDY1IEMgNzcgNjIuMjE0OSA3OS4yMTQ4ODQgNjAgODIgNjAgeiAnLFxuICAgIHZpZXdCb3g6ICcwIDAgMTAwIDEyNSdcbiAgfSxcbiAgZm9udDoge1xuICAgIC8vIHBhdGg6ICdNMTQgOC43N3YtMS42bC0xLjk0LS42NC0uNDUtMS4wOS44OC0xLjg0LTEuMTMtMS4xMy0xLjgxLjkxLTEuMDktLjQ1LS42OS0xLjkyaC0xLjZsLS42MyAxLjk0LTEuMTEuNDUtMS44NC0uODgtMS4xMyAxLjEzLjkxIDEuODEtLjQ1IDEuMDlMMCA3LjIzdjEuNTlsMS45NC42NC40NSAxLjA5LS44OCAxLjg0IDEuMTMgMS4xMyAxLjgxLS45MSAxLjA5LjQ1LjY5IDEuOTJoMS41OWwuNjMtMS45NCAxLjExLS40NSAxLjg0Ljg4IDEuMTMtMS4xMy0uOTItMS44MS40Ny0xLjA5TDE0IDguNzV2LjAyek03IDExYy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM3onXG4gICAgcGF0aDogJ00xNCA2bC00LjktLjY0TDcgMSA0LjkgNS4zNiAwIDZsMy42IDMuMjZMMi42NyAxNCA3IDExLjY3IDExLjMzIDE0bC0uOTMtNC43NHonLFxuICB9LFxuICBhcnJvd1JpZ2h0OiB7XG4gICAgcGF0aDogJ00tMjkwLjksNDMwLjFsLTAuNy0wLjdsOC4yLTguNmwtOC4yLTguMmwwLjctMC43bDguOSw4LjlMLTI5MC45LDQzMC4xeicsXG4gICAgdmlld0JveDogJy0yOTIgNDExLjkgMTEgMTgnXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL0ljb24vc3ZnLWljb25zLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNjYyKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1jc3MtbW9kdWxlcy9kaXN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbFxuICoqIG1vZHVsZSBpZCA9IDgyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJzdmctc2hhcGVcIjpcInN2Zy1zaGFwZV8zMC1rMFwiLFwiaWNvblwiOlwiaWNvbl9Wc1ZSNFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvSWNvbi9JY29uLmNzc1xuICoqIG1vZHVsZSBpZCA9IDgzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJhbGVydHNcIjpcImFsZXJ0c18zYW5haFwiLFwiYWxlcnRcIjpcImFsZXJ0XzNXQXllXCIsXCJhbGVydC0tc3VjY2Vzc1wiOlwiYWxlcnQtLXN1Y2Nlc3NfTlRSNUxcIixcImFsZXJ0LS1lcnJvclwiOlwiYWxlcnQtLWVycm9yXzFDMmZNXCIsXCJhbGVydC0td2FybmluZ1wiOlwiYWxlcnQtLXdhcm5pbmdfM2dTV3ZcIixcImNvbnRlbnRcIjpcImNvbnRlbnRfMVU0VHNcIixcImFsZXJ0LWNsb3NlXCI6XCJhbGVydC1jbG9zZV8xVVVMU1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvQWxlcnQvX2FsZXJ0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA4NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4vQWxlcnQnXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vX2FsZXJ0LnNjc3MnKVxuXG50eXBlIFRQcm9wcyA9IHtcbiAgY2hpbGRyZW4/OiBhbnlcbiAgb25SZXF1ZXN0Q2xvc2U/OiAoaWQ6IHN0cmluZykgPT4gdm9pZFxuICBtZXNzYWdlczoge1xuICAgIGNvbnRlbnQ6IHN0cmluZ1xuICAgIHZpc2libGU6IGJvb2xlYW5cbiAgICB0eXBlOiAnc3VjY2VzcycgfCAnZXJyb3InIHwgJ3dhcm5pbmcnXG4gICAgaWQ6IHN0cmluZ1xuICB9W11cbn1cblxuZnVuY3Rpb24gQWxlcnRzKHByb3BzOiBUUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFsZXJ0c30+XG4gICAgICB7XG4gICAgICAgIHByb3BzLm1lc3NhZ2VzLm1hcCgobXNnLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxBbGVydFxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHR5cGU9e21zZy50eXBlfVxuICAgICAgICAgICAgbWVzc2FnZT17bXNnLmNvbnRlbnR9XG4gICAgICAgICAgICB2aXNpYmxlPXttc2cudmlzaWJsZX1cbiAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHByb3BzLm9uUmVxdWVzdENsb3NlKG1zZy5pZClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydHNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL0FsZXJ0L0FsZXJ0cy50c3hcbiAqKi8iLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCdcbmltcG9ydCBNb2RhbFBsdXMgZnJvbSAnLi9Nb2RhbFBsdXMnXG5pbXBvcnQgQ29uZmlybU1vZGFsIGZyb20gJy4vQ29uZmlybU1vZGFsJ1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuZXhwb3J0ICogZnJvbSAnLi9Nb2RhbCdcbmV4cG9ydCB7IE1vZGFsUGx1cywgQ29uZmlybU1vZGFsIH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL01vZGFsL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB1dGlscyBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBGYWRlIGZyb20gJy4uL19hbmltYXRpb25zL0ZhZGUnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vTW9kYWwuc2NzcycpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICB3aWR0aDogbnVtYmVyXG4gIG9uUmVxdWVzdENsb3NlOiAoKSA9PiB2b2lkXG4gIG9wZW46IGJvb2xlYW5cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIG1vZGFsSGVpZ2h0PzogbnVtYmVyXG4gIGlzTW9kYWxIaWRkZW4/OiBib29sZWFuXG4gIGlzTW9kYWxWZXJ0aWNhbENlbnRlcj86IGJvb2xlYW5cbiAgZG9jdW1lbnRIZWlnaHQ/OiBudW1iZXJcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG5cbiAgbW9kYWw6IEhUTUxEaXZFbGVtZW50XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW9kYWxIZWlnaHQ6IDAsXG4gICAgICBpc01vZGFsSGlkZGVuOiBmYWxzZSxcbiAgICAgIGlzTW9kYWxWZXJ0aWNhbENlbnRlcjogdHJ1ZVxuICAgIH1cbiAgICB0aGlzLnNldFZpZXcgPSB0aGlzLnNldFZpZXcuYmluZCh0aGlzKVxuICAgIHRoaXMuaGlkZU1vZGFsID0gdGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKVxuICB9XG5cbiAgaGlkZU1vZGFsKCkge1xuICAgIHRoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2UoKVxuICAgIHV0aWxzLnVubG9ja1Njcm9sbCgpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2V0VmlldylcbiAgfVxuXG4gIHNldFZpZXcoKSB7XG4gICAgbGV0IG1vZGFsSGVpZ2h0ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5tb2RhbCkuY2xpZW50SGVpZ2h0XG4gICAgbGV0IGlzTW9kYWxWZXJ0aWNhbENlbnRlciA9IHRydWVcbiAgICBsZXQgZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodFxuXG4gICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA8IG1vZGFsSGVpZ2h0KSB7XG4gICAgICBpc01vZGFsVmVydGljYWxDZW50ZXIgPSBmYWxzZVxuICAgIH1cblxuICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPiBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCkge1xuICAgICAgZG9jdW1lbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vZGFsSGVpZ2h0LFxuICAgICAgaXNNb2RhbFZlcnRpY2FsQ2VudGVyLFxuICAgICAgZG9jdW1lbnRIZWlnaHRcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIC8vIG1vZGFsIHNob3dcbiAgICBpZiAoIXByZXZQcm9wcy5vcGVuICYmIHRoaXMucHJvcHMub3BlbiA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5zZXRWaWV3KClcbiAgICAgIHV0aWxzLmxvY2tTY3JvbGwoKVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2V0VmlldylcbiAgICB9XG5cbiAgICAvLyBtb2RhbCBoaWRlXG4gICAgaWYgKHByZXZQcm9wcy5vcGVuID09PSB0cnVlICYmIHRoaXMucHJvcHMub3BlbiA9PT0gZmFsc2UpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNldFZpZXcpXG4gICAgICB1dGlscy51bmxvY2tTY3JvbGwoKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2V0VmlldylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW4gfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGRlZmF1bHRDbGFzcyA9ICdtb2RhbCdcbiAgICBjb25zdCBtb2RhbElkID0gYG1vZGFsLSR7KG5ldyBEYXRlKCkpLnZhbHVlT2YoKX1gXG5cbiAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWUgPyBgJHtkZWZhdWx0Q2xhc3N9ICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YCA6IGRlZmF1bHRDbGFzc1xuXG4gICAgbGV0IHdpZHRoID0gdGhpcy5wcm9wcy53aWR0aCA/IHRoaXMucHJvcHMud2lkdGggOiA1MDBcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5zdGF0ZS5tb2RhbEhlaWdodFxuICAgIGxldCBzdHlsZSA9IHtcbiAgICAgIGJhY2tkcm9wOiB7fSxcbiAgICAgIHZlcnRpY2FsQ2VudGVyOiB7fSxcbiAgICAgIHNjcm9sbDoge30sXG4gICAgICBtb2RhbDoge31cbiAgICB9XG5cbiAgICBzdHlsZS5iYWNrZHJvcCA9IHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogMCxcbiAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuMjMpJyxcbiAgICAgIG92ZXJmbG93OiAnc2Nyb2xsJ1xuICAgIH1cblxuICAgIHN0eWxlLnZlcnRpY2FsQ2VudGVyID0ge1xuICAgICAgd2lkdGgsXG4gICAgICBtYXJnaW5Ub3A6IC1oZWlnaHQgLyAyLFxuICAgICAgbWFyZ2luTGVmdDogLXdpZHRoIC8gMixcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogJzUwJScsXG4gICAgICB0b3A6ICc1MCUnXG4gICAgfVxuXG4gICAgc3R5bGUuc2Nyb2xsID0ge1xuICAgICAgd2lkdGgsXG4gICAgICBtYXJnaW46ICc1MHB4IGF1dG8nXG4gICAgfVxuXG4gICAgc3R5bGUubW9kYWwgPSB7fVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNNb2RhbFZlcnRpY2FsQ2VudGVyKSB7XG4gICAgICBzdHlsZS5tb2RhbCA9IE9iamVjdC5hc3NpZ24oe30sIHN0eWxlLm1vZGFsLCBzdHlsZS52ZXJ0aWNhbENlbnRlcilcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUubW9kYWwgPSBPYmplY3QuYXNzaWduKHt9LCBzdHlsZS5tb2RhbCwgc3R5bGUuc2Nyb2xsKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RmFkZT5cbiAgICAgICAge1xuICAgICAgICAgIG9wZW4gPT09IHRydWUgPyAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgIC8vIOS9v+eUqOmYu+atouWGkuazoeS8mumAoOaIkOmXrumimFxuICAgICAgICAgICAgICAgIGlmICgoZS50YXJnZXQgYXMgYW55KS5xdWVyeVNlbGVjdG9yKGAjJHttb2RhbElkfWApKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhpZGVNb2RhbCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgc3R5bGVOYW1lPVwibW9kYWwtYmFja2Ryb3BcIlxuICAgICAgICAgICAgICBzdHlsZT17c3R5bGUuYmFja2Ryb3B9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGlkPXttb2RhbElkfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZS5tb2RhbH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBzdHlsZU5hbWU9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLm1vZGFsID0gcmVmIH0gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbFxuICAgICAgICB9XG4gICAgICA8L0ZhZGU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Nb2RhbC9Nb2RhbC50c3hcbiAqKi8iLCJpbXBvcnQgRmFkZSBmcm9tICcuL0ZhZGUnXG5leHBvcnQgZGVmYXVsdCBGYWRlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fYW5pbWF0aW9ucy9GYWRlL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCdcbmNvbnN0IHN0eWxlczogYW55ID0gcmVxdWlyZSgnLi9GYWRlLmNzcycpXG5cbmNsYXNzIEZhZGUgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwXG4gICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgIHRyYW5zaXRpb25OYW1lPXtzdHlsZXN9XG4gICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ9ezMwMH1cbiAgICAgICAgdHJhbnNpdGlvbkxlYXZlVGltZW91dD17MzAwfVxuICAgICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25Hcm91cD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmFkZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2FuaW1hdGlvbnMvRmFkZS9GYWRlLnRzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDU5Nyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbFxuICoqIG1vZHVsZSBpZCA9IDkwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJlbnRlclwiOlwiZW50ZXJfMWM0U1dcIixcImVudGVyQWN0aXZlXCI6XCJlbnRlckFjdGl2ZV9uQ0pRd1wiLFwibGVhdmVcIjpcImxlYXZlXzFvVHBfXCIsXCJsZWF2ZUFjdGl2ZVwiOlwibGVhdmVBY3RpdmVfM2hUZ0hcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19hbmltYXRpb25zL0ZhZGUvRmFkZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA5MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibW9kYWxcIjpcIm1vZGFsXzIwQVoxXCIsXCJpY29uLWNsb3NlXCI6XCJpY29uLWNsb3NlXzV1dUxhXCIsXCJtb2RhbC1iYWNrZHJvcFwiOlwibW9kYWwtYmFja2Ryb3BfM3JxMGtcIixcIm1vZGFsLWJvZHlcIjpcIm1vZGFsLWJvZHlfMmdUMjNcIixcIm1vZGFsLWhlYWRlclwiOlwibW9kYWwtaGVhZGVyXzJkejY4XCIsXCJtb2RhbC10aXRsZVwiOlwibW9kYWwtdGl0bGVfOHBPZkVcIixcIm1vZGFsLWZvb3RlclwiOlwibW9kYWwtZm9vdGVyX2Z5WnRTXCIsXCJidG4tcmVkXCI6XCJidG4tcmVkXzN6b21pXCIsXCJtb2RhbC1jb250ZW50XCI6XCJtb2RhbC1jb250ZW50XzNaSUhiXCIsXCJjb25maXJtLW1vZGFsXCI6XCJjb25maXJtLW1vZGFsX2s1R0YwXCIsXCJtb2RhbC1wbHVzXCI6XCJtb2RhbC1wbHVzXzFfVFNUXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Nb2RhbC9Nb2RhbC5zY3NzXG4gKiogbW9kdWxlIGlkID0gOTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL01vZGFsLnNjc3MnKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZT86IHN0cmluZ1xuICBvcGVuOiBib29sZWFuXG4gIG9uUmVxdWVzdENsb3NlOiAoKSA9PiB2b2lkXG4gIHdpZHRoPzogbnVtYmVyXG4gIGFjdGlvbnM/OiBKU1guRWxlbWVudFtdXG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIE1vZGFsUGx1cyBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgb3Blbiwgb25SZXF1ZXN0Q2xvc2UsIHdpZHRoLCBhY3Rpb25zIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsXG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXtvblJlcXVlc3RDbG9zZX1cbiAgICAgICAgd2lkdGg9e3dpZHRoIHx8IDYwMH1cbiAgICAgICAgPlxuICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cIm1vZGFsLXBsdXNcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlTmFtZT1cIm1vZGFsLXRpdGxlXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFjdGlvbnMgJiYgKFxuICAgICAgICAgICAgICBhY3Rpb25zLm1hcCgoYWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYWN0aW9uLCB7XG4gICAgICAgICAgICAgICAgICBrZXk6IGluZGV4XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxQbHVzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Nb2RhbC9Nb2RhbFBsdXMudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1vZGFsLCB7IFByb3BzIGFzIElNb2RhbFByb3BzIH0gZnJvbSAnLi4vTW9kYWwnXG5pbXBvcnQgTW9kYWxGb290ZXIgZnJvbSAnLi9Nb2RhbEZvb3RlcidcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Nb2RhbC5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIElNb2RhbFByb3BzIHtcbiAgb25Db25maXJtOiBhbnlcbiAgdGl0bGU6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb25Db25maXJtLCBvblJlcXVlc3RDbG9zZSwgb3BlbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbFxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvblJlcXVlc3RDbG9zZT17b25SZXF1ZXN0Q2xvc2V9XG4gICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLndpZHRofVxuICAgICAgPlxuICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImNvbmZpcm0tbW9kYWxcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRpdGxlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDEgc3R5bGVOYW1lPVwibW9kYWwtdGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L2gxPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TW9kYWxGb290ZXJcbiAgICAgICAgICAgIG9uQ29uZmlybT17b25Db25maXJtfVxuICAgICAgICAgICAgb25DYW5jZWw9e29uUmVxdWVzdENsb3NlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Nb2RhbC9Db25maXJtTW9kYWwudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9fZm9ybS9CdXR0b24nXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL01vZGFsRm9vdGVyLnNjc3MnKVxuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbj86IGFueVxuICBvbkNvbmZpcm06ICgpID0+IHZvaWRcbiAgb25DYW5jZWw/OiAoKSA9PiB2b2lkXG59XG5cbmZ1bmN0aW9uIE1vZGFsRm9vdGVyKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IG9uQ29uZmlybSwgb25DYW5jZWwgfSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydtb2RhbC1mb290ZXInXX0+XG4gICAgICA8QnV0dG9uIGNvbG9yPVwiYmx1ZVwiIG9uQ2xpY2s9e29uQ29uZmlybX0+56Gu6K6kPC9CdXR0b24+XG4gICAgICB7XG4gICAgICAgIG9uQ2FuY2VsICYmIChcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwid2hpdGVcIiBvbkNsaWNrPXtvbkNhbmNlbH0+5Y+W5raIPC9CdXR0b24+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbEZvb3RlclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTW9kYWwvTW9kYWxGb290ZXIudHN4XG4gKiovIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vQnV0dG9uL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL19idXR0b24uc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgc3R5bGVOYW1lPzogYW55XG4gIHNpemU/OiAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnXG4gIGlzRmx1aWQ/OiBib29sZWFuXG4gIGNvbG9yPzogJ3JlZCcgfCAnYmx1ZScgfCAnZ3JlZW4nIHwgJ29yYW5nZScgfCAnd2hpdGUnXG4gIHRvPzogc3RyaW5nXG4gIG9uQ2xpY2s/OiBhbnlcbiAgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIGlzTW91c2VPdmVyPzogYm9vbGVhblxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc01vdXNlT3ZlcjogZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IG9uQ2xpY2ssIGNsYXNzTmFtZSwgY29sb3IsIHNpemUsIGlzRmx1aWQsIHdpZHRoIH0gPSB0aGlzLnByb3BzXG4gICAgbGV0IHN0eWxlID0ge31cblxuICAgIGNvbnN0IHN0eWxlTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgJ2J0bic6IHRydWUsXG4gICAgICAnYnRuLS1ob3Zlcic6IHRoaXMuc3RhdGUuaXNNb3VzZU92ZXIsXG4gICAgICAnYnRuLS1mbHVpZCc6IGlzRmx1aWQsXG4gICAgICBbYGJ0bi0tJHtjb2xvcn1gXTogQm9vbGVhbihjb2xvciksXG4gICAgICBbYGJ0bi0tJHtzaXplfWBdOiBCb29sZWFuKHNpemUpLFxuICAgIH0pXG4gICAgaWYgKHRoaXMucHJvcHMudG8pIHtcbiAgICAgIG9uQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2godGhpcy5wcm9wcy50bylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb25DbGljayA9IGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgICAgIHRoaXMucHJvcHMub25DbGljayhlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHN0eWxlID0ge1xuICAgICAgICB3aWR0aFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHByb3BzID0gXyh0aGlzLnByb3BzKVxuICAgICAgLm9taXQoWyd0bycsICdjb2xvcicsICdzaXplJywgJ2lzRmx1aWQnLCAnd2lkdGgnXSlcbiAgICAgIC5hc3NpZ24oe30sIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUgfHwgJycsXG4gICAgICAgIG9uQ2xpY2ssXG4gICAgICAgIHN0eWxlXG4gICAgICB9KVxuICAgICAgLnZhbHVlKClcblxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgc3R5bGVOYW1lPXtzdHlsZU5hbWV9XG4gICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc01vdXNlT3ZlcjogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VPdXQ9eygpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzTW91c2VPdmVyOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9idXR0b24+XG4gICAgKVxuICB9XG59XG5cbihCdXR0b24gYXMgYW55KS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbG9yOiAnYmx1ZSdcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9CdXR0b24vQnV0dG9uLnRzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImJ0blwiOlwiYnRuXzJhV19fXCIsXCJmb2N1c1wiOlwiZm9jdXNfMlk1b3ZcIixcImFjdGl2ZVwiOlwiYWN0aXZlX2pGZE5aXCIsXCJkaXNhYmxlZFwiOlwiZGlzYWJsZWRfMk5GSlhcIixcImJ0bi0taG92ZXJcIjpcImJ0bi0taG92ZXJfMzQ0bWlcIixcImJ0bi0tYmx1ZVwiOlwiYnRuLS1ibHVlXzFuRUlNXCIsXCJidG4tLW9yYW5nZVwiOlwiYnRuLS1vcmFuZ2VfdjR4NV9cIixcImJ0bi0tcmVkXCI6XCJidG4tLXJlZF8yZ3NmU1wiLFwiYnRuLS13aGl0ZVwiOlwiYnRuLS13aGl0ZV8zcldGM1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vQnV0dG9uL19idXR0b24uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDk4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJtb2RhbC1mb290ZXJcIjpcIm1vZGFsLWZvb3Rlcl9GYUhpVVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTW9kYWwvTW9kYWxGb290ZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDk5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmludGVyZmFjZSBJUHJvcHMge1xufVxuXG5pbnRlcmZhY2UgSUFsbFByb3BzIGV4dGVuZHMgSVByb3BzIHtcbiAgcm91dGluZzogYW55XG4gIGVsZW1lbnRzOiBhbnlcbiAgc2VuZE5vdGlmaWNhdGlvbjogYW55XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5jbGFzcyBBcHBNYXN0ZXIgZXh0ZW5kcyBDb21wb25lbnQ8SUFsbFByb3BzLCBJU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCBJUHJvcHM+KFxuICBzdGF0ZSA9PiAoe1xuICAgIGVsZW1lbnRzOiBzdGF0ZS5lbGVtZW50cyxcbiAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnNcbn0pLCB7fVxuKShBcHBNYXN0ZXIgYXMgYW55KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29udGFpbmVycy9BcHBNYXN0ZXIudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEJyYW5kaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvQnJhbmRpbmcnXG5pbXBvcnQgQ29sb3Bob24gZnJvbSAnLi4vY29tcG9uZW50cy9Db2xvcGhvbidcbmltcG9ydCB7IGZldGNoU2hlbGYgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGFwaXMgZnJvbSAnLi4vYXBpcydcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZmV0Y2hTaGVsZjogYW55XG4gIHNlc3Npb246IGFueVxuICBib29rU2hlbGY6IGFueVxufVxuXG5jbGFzcyBBcHBDb21tb24gZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGhhbmRsZUxvZ291dCgpIHtcbiAgICBhcGlzLmxvZ291dCgpLnRoZW4oKCkgPT4ge1xuICAgICAgbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLmhyZWZcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLnJvbGUgIT09ICd2aXNpdG9yJykge1xuICAgICAgdGhpcy5wcm9wcy5mZXRjaFNoZWxmKClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHVzZXJMb2dnZWRJbiA9IHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLnJvbGUgPT09ICd2aXNpdG9yJyAmJiBuZXh0UHJvcHMuc2Vzc2lvbi51c2VyLnJvbGUgIT09ICd2aXNpdG9yJ1xuICAgIGlmICh1c2VyTG9nZ2VkSW4pIHtcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hTaGVsZigpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBpc0FkbWluID0gZmFsc2VcbiAgICBsZXQgdXNlcm5hbWUgPSBudWxsXG5cbiAgICBpZiAodGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIucm9sZSAhPT0gJ3Zpc2l0b3InKSB7XG4gICAgICBpc0FkbWluID0gdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIucm9sZSA9PT0gJ2FkbWluJ1xuICAgICAgdXNlcm5hbWUgPSB0aGlzLnByb3BzLnNlc3Npb24udXNlci51c2VybmFtZVxuICAgIH1cblxuICAgIGNvbnN0IHtib29rU2hlbGZ9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGJvb2tTaGVsZkxpc3QgPSBib29rU2hlbGZcbiAgICAgIC5tYXAoYm9vayA9PiAoe1xuICAgICAgICB0aXRsZTogYm9vay50aXRsZSxcbiAgICAgICAgaWQ6IGJvb2suaWRcbiAgICAgIH0pKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxCcmFuZGluZ1xuICAgICAgICAgIHJlY2VudFJlYWRpbmc9e2Jvb2tTaGVsZkxpc3R9XG4gICAgICAgICAgaXNBZG1pbj17aXNBZG1pbn1cbiAgICAgICAgICB1c2VybmFtZT17dXNlcm5hbWV9XG4gICAgICAgICAgb25Mb2dvdXQ9e3RoaXMuaGFuZGxlTG9nb3V0fVxuICAgICAgICAvPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPENvbG9waG9uIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDx7fSwge30sIFByb3BzPihcbiAgc3RhdGUgPT4gKHtcbiAgICBub3RpZmljYXRpb246IHN0YXRlLmNvbXBvbmVudHMubm90aWZpY2F0aW9uLFxuICAgIHNlc3Npb246IHN0YXRlLnNlc3Npb24sXG4gICAgYm9va1NoZWxmOiBzdGF0ZS5wYXlsb2Fkcy5ib29rU2hlbGYgfHwgW11cbiAgfSksXG4gIHsgZmV0Y2hTaGVsZiB9IGFzIGFueVxuKShBcHBDb21tb24pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb250YWluZXJzL0FwcENvbW1vbi50c3hcbiAqKi8iLCJpbXBvcnQgQnJhbmRpbmcgZnJvbSAnLi9CcmFuZGluZydcbmV4cG9ydCBkZWZhdWx0IEJyYW5kaW5nXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0JyYW5kaW5nL2luZGV4LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9fbGF5b3V0J1xuaW1wb3J0IHsgRHJvcGRvd24sIERyb3Bkb3duSXRlbSwgRHJvcGRvd25JdGVtU2VwIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvRHJvcGRvd24nXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9Mb2dvJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0JyYW5kaW5nLnNjc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdXNlcm5hbWU6IHN0cmluZ1xuICBpc0FkbWluPzogYm9vbGVhblxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgcmVjZW50UmVhZGluZz86IHtcbiAgICB0aXRsZTogc3RyaW5nXG4gICAgaWQ6IHN0cmluZ1xuICB9W11cbiAgb25Mb2dvdXQ6ICgpID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIGlzRHJvcGRvd25NZW51VmlzaWJsZTogYm9vbGVhblxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIEJyYW5kaW5nIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNEcm9wZG93bk1lbnVWaXNpYmxlOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLmhhbmRsZUxvZ291dENsaWNrID0gdGhpcy5oYW5kbGVMb2dvdXRDbGljay5iaW5kKHRoaXMpXG4gIH1cblxuICB0b2dnbGVEcm9wZG93bk1lbnUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0Ryb3Bkb3duTWVudVZpc2libGU6ICF0aGlzLnN0YXRlLmlzRHJvcGRvd25NZW51VmlzaWJsZVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVMb2dvdXRDbGljaygpIHtcbiAgICB0aGlzLnByb3BzLm9uTG9nb3V0KClcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgaXNBZG1pbiA9IHRoaXMucHJvcHMuaXNBZG1pbiA/IHRoaXMucHJvcHMuaXNBZG1pbiA6IGZhbHNlXG5cbiAgICBjb25zdCB7IHVzZXJuYW1lLCByZWNlbnRSZWFkaW5nIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9e2BicmFuZGluZyAke3RoaXMucHJvcHMuY2xhc3NOYW1lID8gdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAnJ31gfT5cbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TG9nbyB0bz1cIi9cIiAvPlxuICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJuYXZcIj5cbiAgICAgICAgICAgICAgPHVsIHN0eWxlTmFtZT1cIm5hdi1saW5rc1wiPlxuICAgICAgICAgICAgICAgIDxsaSBzdHlsZU5hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgc3R5bGVOYW1lPVwibmF2LWxpbmtcIiB0bz1cIi9icm93c2VcIj7mtY/op4g8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB1c2VybmFtZVxuICAgICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJuYXYtLXVzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHJlY2VudFJlYWRpbmcubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBzdHlsZU5hbWU9XCJkcm9wZG93bi1yZWNlbnQtcmVhZGluZ1wiIHRpdGxlPVwi5pyA6L+R6ZiF6K+7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlbnRSZWFkaW5nLnNsaWNlKDAsIDUpLm1hcCgoYm9vaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2Avdmlld2VyL2Jvb2svJHtib29rLmlkfWB9Pntib29rLnRpdGxlfTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtU2VwIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+PExpbmsgdG89e2AvdXNlci9zaGVsZmB9Puafpeeci+WFqOmDqDwvTGluaz48L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dXNlcm5hbWV9eyBpc0FkbWluICYmIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlXCI+566h55CG5ZGYPC9zcGFuPiB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICkgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FkbWluID09PSB0cnVlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT48TGluayB0bz1cIi9jb25zb2xlXCI+5o6n5Yi25Y+wPC9MaW5rPjwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPjxMaW5rIHRvPXtgL3VzZXIvc2hlbGZgfT7kuabmnrY8L0xpbms+PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT48TGluayB0bz17YC91c2VyL3Byb2ZpbGVgfT7kuKrkurrkuLvpobU8L0xpbms+PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT48TGluayB0bz17YC91c2VyL3ByZWZlcmVuY2VgfT7orr7nva48L0xpbms+PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVNlcCAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+PGEgb25DbGljaz17dGhpcy5oYW5kbGVMb2dvdXRDbGlja30gaHJlZj1cIiNcIj7pgIDlh7o8L2E+PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cIm5hdi0tdXNlclwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGVOYW1lPVwibmF2LWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBzdHlsZU5hbWU9XCJuYXYtbGlua1wiIHRvPVwiL3NpZ25pblwiPueZu+W9lTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZU5hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgc3R5bGVOYW1lPVwibmF2LWxpbmtcIiB0bz1cIi9zaWdudXBcIj7ms6jlhow8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJhbmRpbmdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQnJhbmRpbmcvQnJhbmRpbmcudHN4XG4gKiovIiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lcidcbmV4cG9ydCB7IENvbnRhaW5lciB9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fbGF5b3V0L2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCBjbGFzc05hbWUgPSAodGhpcy5wcm9wcy5pc0ZsdWlkPydjb250YWluZXItZmx1aWQnOidjb250YWluZXInKSArICh0aGlzLnByb3BzLmNsYXNzTmFtZT9gICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YDonJylcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fbGF5b3V0L0NvbnRhaW5lci50c3hcbiAqKi8iLCJpbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9Ecm9wZG93bidcbmltcG9ydCBEcm9wZG93bkl0ZW0gZnJvbSAnLi9Ecm9wZG93bkl0ZW0nXG5pbXBvcnQgRHJvcGRvd25JdGVtU2VwIGZyb20gJy4vRHJvcGRvd25JdGVtU2VwJ1xuXG5leHBvcnQgeyBEcm9wZG93bkl0ZW0sIERyb3Bkb3duLCBEcm9wZG93bkl0ZW1TZXAgfVxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL0Ryb3Bkb3duL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgaXNEZXNjZW5kYW50IGZyb20gJy4uLy4uL3V0aWxzL2RvbS9pc0Rlc2NlbmRhbnQnXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0Ryb3Bkb3duLnNjc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdGl0bGU6IHN0cmluZyB8IEpTWC5FbGVtZW50XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBzdHlsZU5hbWU/OiBzdHJpbmdcbiAgc3R5bGU/OiAnYmx1ZScgfCAnZGFyaydcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIHNob3dNZW51PzogYm9vbGVhblxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgZHJvcGRvd246IGFueVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dNZW51OiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLnRvZ2dsZURyb3Bkb3duID0gdGhpcy50b2dnbGVEcm9wZG93bi5iaW5kKHRoaXMpXG4gICAgdGhpcy5oaWRlRXhwZW5kZWQgPSB0aGlzLmhpZGVFeHBlbmRlZC5iaW5kKHRoaXMpXG4gIH1cblxuICB0b2dnbGVEcm9wZG93bihlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93TWVudTogIXRoaXMuc3RhdGUuc2hvd01lbnVcbiAgICB9KVxuICB9XG5cbiAgaGlkZUV4cGVuZGVkKGUpIHtcbiAgICAvLyDmo4Dmn6Xngrnlh7vnmoQgZG9tIOaYr+WQpuaYryBkcm9wZG93biDnmoTlrZDlhYPntKBcbiAgICAvLyDlpoLmnpzmmK/pgqPkuYjlsLHkuI3lgZrlpITnkIbvvIzogIwgdG9nZ2xlRHJvcGRvd24g5Lya5ZON5bqUXG4gICAgLy8g6Kej5Yaz5LqG6aG16Z2i5LiK5ZCM5pe255So5Lik5LiqIGRyb3Bkb3duIOaXtu+8jOWFtuS4reS4gOS4quWxleW8gO+8jOeCueWHu+WPpuS4gOS4quWJjeiAheS4jeWQiOS4iueahOmXrumimFxuICAgIGlmICghaXNEZXNjZW5kYW50KHRoaXMuZHJvcGRvd24sIGUudGFyZ2V0KSkge1xuICAgIC8vIGlmICgkKHRoaXMuZHJvcGRvd24pLmZpbmQoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dNZW51OiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVFeHBlbmRlZClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZUV4cGVuZGVkKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXtyZWYgPT4geyB0aGlzLmRyb3Bkb3duID0gcmVmIH0gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZURyb3Bkb3dufSBzdHlsZU5hbWU9XCJkcm9wZG93blwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lIHx8ICcnfT5cbiAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMudGl0bGV9IDxzcGFuIHN0eWxlTmFtZT1cImRyb3Bkb3duLWNhcmV0XCIgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TWVudSAmJiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT17IHN0eWxlID09PSAnZGFyaycgPyAnZHJvcGRvd24tbWVudS0tZGFyaycgOiAnZHJvcGRvd24tbWVudSd9PlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRHJvcGRvd24vRHJvcGRvd24udHN4XG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEZXNjZW5kYW50KHBhcmVudDogSFRNTEVsZW1lbnQsIGNoaWxkOiBIVE1MRWxlbWVudCkge1xuICBsZXQgbm9kZSA9IGNoaWxkLnBhcmVudE5vZGVcblxuICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvdXRpbHMvZG9tL2lzRGVzY2VuZGFudC50c1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImRyb3Bkb3duLWl0ZW1cIjpcImRyb3Bkb3duLWl0ZW1fMkMxZHogbGlnaHQtbGlua18yUURlQVwiLFwibGlnaHQtbGlua1wiOlwibGlnaHQtbGlua18yUURlQVwiLFwiZHJvcGRvd25cIjpcImRyb3Bkb3duX1NaZnlwXCIsXCJkcm9wZG93bi10b2dnbGVcIjpcImRyb3Bkb3duLXRvZ2dsZV8zNFFmZFwiLFwiZHJvcGRvd24tbWVudVwiOlwiZHJvcGRvd24tbWVudV8xSGdiU1wiLFwiZHJvcGRvd24tY2FyZXRcIjpcImRyb3Bkb3duLWNhcmV0X0ZjQldJXCIsXCJzZXBcIjpcInNlcF8xMFkwb1wiLFwiZHJvcGRvd24tbWVudS0tZGFya1wiOlwiZHJvcGRvd24tbWVudS0tZGFya182ZVZQWCBkcm9wZG93bi1tZW51XzFIZ2JTXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Ecm9wZG93bi9Ecm9wZG93bi5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0Ryb3Bkb3duLnNjc3MnKVxuXG50eXBlIFRQcm9wcyA9IHtcbiAgY2hpbGRyZW4/OiBhbnlcbn1cblxuZnVuY3Rpb24gRHJvcGRvd25JdGVtKHByb3BzOiBUUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8bGk+XG4gICAgICB7XG4gICAgICAgIHR5cGVvZiBwcm9wcy5jaGlsZHJlbiA9PT0gJ3N0cmluZydcbiAgICAgICAgICA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2Ryb3Bkb3duLWl0ZW0nXX0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgICA6IFJlYWN0LmNsb25lRWxlbWVudChwcm9wcy5jaGlsZHJlbiwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBzdHlsZXNbJ2Ryb3Bkb3duLWl0ZW0nXVxuICAgICAgICAgIH0pXG4gICAgICB9XG4gICAgPC9saT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bkl0ZW1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL0Ryb3Bkb3duL0Ryb3Bkb3duSXRlbS50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0Ryb3Bkb3duLnNjc3MnKVxuXG50eXBlIFRQcm9wcyA9IHtcbn1cblxuZnVuY3Rpb24gRHJvcGRvd25JdGVtU2VwKHByb3BzOiBUUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXNbJ3NlcCddfT48L2xpPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duSXRlbVNlcFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRHJvcGRvd24vRHJvcGRvd25JdGVtU2VwLnRzeFxuICoqLyIsImltcG9ydCBMb2dvIGZyb20gJy4vTG9nbydcbmV4cG9ydCBkZWZhdWx0IExvZ29cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvTG9nby9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0xvZ28uY3NzJylcblxudHlwZSBUUHJvcHMgPSB7XG4gIGNoaWxkcmVuPzogYW55XG4gIHRvPzogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIExvZ28ocHJvcHM6IFRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlc1snbG9nby13cmFwJ119PlxuICAgICAgPExpbmsgY2xhc3NOYW1lPXtzdHlsZXNbJ2xvZ28nXX0gdG89e3Byb3BzLnRvfT5yZWFkcjwvTGluaz5cbiAgICA8L2gxPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ29cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvTG9nby9Mb2dvLnRzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImxvZ28td3JhcFwiOlwibG9nby13cmFwX0NQNVA5XCIsXCJsb2dvXCI6XCJsb2dvXzNxY2JWXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0xvZ28vTG9nby5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIm5hdi1saW5rXCI6XCJuYXYtbGlua18zWDBUOFwiLFwiYnJhbmRpbmdcIjpcImJyYW5kaW5nXzhFVkF0XCIsXCJkcm9wZG93bi1tZW51XCI6XCJkcm9wZG93bi1tZW51XzVTYzUwXCIsXCJ1c2VybmFtZVwiOlwidXNlcm5hbWVfM01tNnpcIixcIm5hdi1saW5rc1wiOlwibmF2LWxpbmtzXzJ3VFlZXCIsXCJuYXZcIjpcIm5hdl8xb2oxelwiLFwibmF2LS11c2VyXCI6XCJuYXYtLXVzZXJfMUw3TGJcIixcImRyb3Bkb3duLXJlY2VudC1yZWFkaW5nXCI6XCJkcm9wZG93bi1yZWNlbnQtcmVhZGluZ18yb3lqSFwiLFwibmF2LWl0ZW1cIjpcIm5hdi1pdGVtX2Y4M2JoXCIsXCJyZWNlbnQtcmVhZGluZ1wiOlwicmVjZW50LXJlYWRpbmdfMWtKS2hcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQnJhbmRpbmcvQnJhbmRpbmcuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDExNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IENvbG9waG9uIGZyb20gJy4vQ29sb3Bob24nXG5leHBvcnQgZGVmYXVsdCBDb2xvcGhvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xvcGhvbi9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2VsZW1lbnRzL19sYXlvdXQvQ29udGFpbmVyJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0NvbG9waG9uLmNzcycpXG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgQ29sb3Bob24gZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9waG9uXCIgc3R5bGVOYW1lPVwiY29sb3Bob25cIj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8cD7CqSAyMDE177yNMjAxNiByZWFkcndlYi5jb20sIGFsbCByaWdodHMgcmVzZXJ2ZWQ8L3A+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9waG9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbG9waG9uL0NvbG9waG9uLnRzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImNvbG9waG9uXCI6XCJjb2xvcGhvbl9GVmRTUlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xvcGhvbi9Db2xvcGhvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCAqIGFzIGFwaXMgZnJvbSAnLi9hcGlzJ1xuaW1wb3J0ICogYXMgZXh0ZXJuYWxBcGlzIGZyb20gJy4vZXh0ZXJuYWxBcGlzJ1xuXG5leHBvcnQgZGVmYXVsdCBPYmplY3QuYXNzaWduKHt9LCBhcGlzLCBleHRlcm5hbEFwaXMpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9hcGlzL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IGNhbGxBcGkgZnJvbSAnLi4vdXRpbHMvY2FsbEFwaSdcbmltcG9ydCB7IEFwaVJvb3RzIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ29sbGVjdGlvbihkYXRhOiB7XG4gIG5hbWU6IHN0cmluZ1xuICBpdGVtczogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbn0pIHtcbiAgcmV0dXJuIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9Y29sbGVjdGlvbnNgLCB7IG1ldGhvZDogJ1BPU1QnLCBkYXRhOiBkYXRhIH0pXG59XG5cbi8qKlxuICogZGF0YTogbmFtZSwgYXV0aG9yLCBkZXNjcmlwdGlvbiwgY292ZXIsIGNvbnRlbnRcbiAqIHRvZG9cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEJvb2soZGF0YSkge1xuICByZXR1cm4gY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1ib29rc2AsIHsgbWV0aG9kOiAnUE9TVCcsIGRhdGE6IGRhdGEgfSlcbn1cblxuLyoqXG4gKiBkYXRhOiBuYW1lLCBzbHVnLCBkZXNjcmlwdGlvblxuICogdG9kb1xuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQXV0aG9yKGRhdGEpIHtcbiAgcmV0dXJuIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9YXV0aG9yc2AsIHsgbWV0aG9kOiAnUE9TVCcsIGRhdGE6IGRhdGEgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEF1dGhvcnMocXVlcnkpIHtcbiAgcmV0dXJuIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9YXV0aG9ycz9xPSR7cXVlcnl9YClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEJvb2tzKHF1ZXJ5KSB7XG4gIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWJvb2tzP3E9JHtxdWVyeX1gKVxufVxuXG4vKipcbiAqIGRhdGE6IHBhZ2VObywgcGFnZVN1bSwgcGVyY2VudGFnZVxuICogdG9kb1xuICovXG5leHBvcnQgdHlwZSBzZXRQcm9ncmVzcyA9IHtcbiAgcGVyY2VudGFnZTogbnVtYmVyXG59XG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvZ3Jlc3MoYm9va0lkLCBkYXRhOiBzZXRQcm9ncmVzcykge1xuICBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfXVzZXIvYm9va3MvJHtib29rSWR9L3Byb2dyZXNzYCwgeyBtZXRob2Q6ICdQVVQnLCBkYXRhIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVCb29rKGlkKSB7XG4gIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWJvb2tzLyR7aWR9YCwge1xuICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgcmV0dXJuIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9YXV0aC9yZXZva2VgLCB7XG4gICAgbWV0aG9kOiAnUFVUJ1xuICB9KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvYXBpcy9hcGlzLnRzXG4gKiovIiwiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IG9iamVjdFRvVXJsZW5jb2RlZCBmcm9tICcuLi91dGlscy9wYXJzZUZvcm1EYXRhJ1xuaW1wb3J0IGpzb25wIGZyb20gJy4vanNvbnAnXG5cbmV4cG9ydCB0eXBlIENhbGxBcGlPcHRpb25zID0ge1xuICBtZXRob2Q/OiAnR0VUJyB8ICdQT1NUJyB8ICdERUxFVEUnIHwgJ1BVVCdcbiAgY3JlZGVudGlhbHM/OiAnaW5jbHVkZScgfCAnc2FtZS1vcmlnaW4nXG4gIGRhdGFUeXBlPzogJ3VybGVuY29kZWQnIHwgJ2pzb24nXG4gIGRhdGE/OiB7fVxuICB1c2VKc29ucD86IGJvb2xlYW5cbn1cblxudHlwZSBGZXRjaE9wdGlvbnMgPSB7XG4gIG1ldGhvZD86IHN0cmluZ1xuICBjcmVkZW50aWFscz86ICdpbmNsdWRlJyB8ICdzYW1lLW9yaWdpbidcbiAgaGVhZGVycz86IGFueVxuICBib2R5Pzogc3RyaW5nXG4gIHVzZUpzb25wPzogYm9vbGVhblxufVxuXG5jb25zdCBkZWZhdWx0T3B0aW9uczogQ2FsbEFwaU9wdGlvbnMgPSB7XG4gIGRhdGFUeXBlOiAnanNvbicsXG4gIG1ldGhvZDogJ0dFVCcsXG4gIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG59XG5cbi8vIHJldHVybiBmZXRjaCBvcHRpb25zXG5jb25zdCBwYXJzZU9wdGlvbnMgPSAob3JpZ2luYW5PcHRpb25zOiBDYWxsQXBpT3B0aW9ucykgPT4ge1xuICBsZXQgeyBtZXRob2QsIGRhdGEsIGNyZWRlbnRpYWxzLCBkYXRhVHlwZSwgdXNlSnNvbnAgfSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcmlnaW5hbk9wdGlvbnMpXG4gIGxldCBmZXRjaE9wdGlvbnM6IEZldGNoT3B0aW9ucyA9IHt9XG5cbiAgaWYgKHVzZUpzb25wKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZUpzb25wOiB0cnVlXG4gICAgfVxuICB9XG5cbiAgaWYgKG1ldGhvZCkge1xuICAgIGZldGNoT3B0aW9ucy5tZXRob2QgPSBtZXRob2RcbiAgfVxuXG4gIGlmIChjcmVkZW50aWFscykge1xuICAgIGZldGNoT3B0aW9ucy5jcmVkZW50aWFscyA9IGNyZWRlbnRpYWxzXG4gIH1cblxuICAvLyBoYW5kbGUgcmVxdWVzdCBoZWFkZXJzIGFuZCBib2R5XG4gIGlmIChtZXRob2QgPT09ICdQT1NUJyB8fCBtZXRob2QgPT09ICdQVVQnKSB7XG4gICAgbGV0IGNvbnRlbnRUeXBlXG4gICAgbGV0IGJvZHlcblxuICAgIGlmIChkYXRhVHlwZSA9PT0gJ2pzb24nKSB7XG4gICAgICBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgIGJvZHkgPSBvYmplY3RUb1VybGVuY29kZWQoZGF0YSlcblxuICAgICAgaWYgKGRhdGFUeXBlICE9PSAndXJsZW5jb2RlZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdVbnN1cHBvcnRlZCBkYXRhVHlwZSB1c2VkIFwidXJsZW5jb2RlZFwiIGluc3RlYWQhJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmZXRjaE9wdGlvbnMuaGVhZGVycyA9IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiBjb250ZW50VHlwZSxcbiAgICAgICdBY2Nlc3MtQ29udHJvbC1SZXF1ZXN0LU1ldGhvZCc6IG1ldGhvZFxuICAgIH1cblxuICAgIGZldGNoT3B0aW9ucy5ib2R5ID0gYm9keVxuICB9XG5cbiAgaWYgKG1ldGhvZCA9PT0gJ0RFTEVURScpIHtcbiAgICBmZXRjaE9wdGlvbnMuaGVhZGVycyA9IHtcbiAgICAgICdBY2Nlc3MtQ29udHJvbC1SZXF1ZXN0LU1ldGhvZCc6ICdERUxFVEUnXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZldGNoT3B0aW9uc1xufVxuXG4vLyB0eXBlIFJlc3VsdCA9IHtcbi8vICAganNvbjogYW55XG4vLyAgIHJlc3BvbnNlOiBhbnlcbi8vIH1cbmV4cG9ydCBmdW5jdGlvbiBjYWxsQXBpKGZ1bGxVcmw6IHN0cmluZywgb3B0aW9uczogQ2FsbEFwaU9wdGlvbnMgPSB7fSk6IGFueSB7XG4gIGlmIChvcHRpb25zLnVzZUpzb25wKSB7XG4gICAgcmV0dXJuIGpzb25wKGZ1bGxVcmwpXG4gIH1cblxuICByZXR1cm4gZmV0Y2goZnVsbFVybCwgcGFyc2VPcHRpb25zKG9wdGlvbnMpKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwNCkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGpzb24pIGFzIGFueVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7IGpzb24sIF9yZXNwb25zZTogcmVzcG9uc2UgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBqc29uOiB7fSwgX3Jlc3BvbnNlOiByZXNwb25zZSB9XG4gICAgfSlcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGNhbGxBcGkoZnVsbFVybDogc3RyaW5nLCBvcHRpb25zOiBDYWxsQXBpT3B0aW9ucyA9IHt9KSB7XG4vLyAgIHJldHVybiBmZXRjaChmdWxsVXJsLCBwYXJzZU9wdGlvbnMob3B0aW9ucykpXG4vLyAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuLy8gICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjA0KSB7XG4vLyAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbihqc29uID0+IHtcbi8vICAgICAgICAgICByZXR1cm4geyBqc29uLCByZXNwb25zZSB9XG4vLyAgICAgICAgIH0pXG4vLyAgICAgICB9XG4vLyAgICAgICByZXR1cm4geyByZXNwb25zZSwganNvbjoge30gfVxuLy8gICAgIH0pXG4vLyAgICAgLnRoZW4oKHsganNvbiwgcmVzcG9uc2UgfSkgPT4ge1xuLy8gICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4vLyAgICAgICAgIHJldHVybiBoYW5kbGVSZXNwb25zZSh7IGpzb24sIHJlc3BvbnNlIH0sIG9wdGlvbnMuc2NoZW1hKVxuLy8gICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGpzb24pXG4vLyAgICAgICB9XG4vLyAgICAgfSlcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgY2FsbEFwaVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvdXRpbHMvY2FsbEFwaS50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMTQpKSg3NTcpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtZmV0Y2gvZmV0Y2gtbnBtLWJyb3dzZXJpZnkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIF91dGlsc19kbGxcbiAqKiBtb2R1bGUgaWQgPSAxMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGpzb25wKGZ1bGxVcmwpIHtcbiAgaWYgKGZ1bGxVcmwuaW5kZXhPZignZG91YmFuJykgIT09IC0xKSB7XG4gICAgbGV0IGlkID0gbmV3IERhdGUoKS52YWx1ZU9mKClcbiAgICBsZXQganNvbnBJZCA9ICdqc29ucC0nICsgaWRcbiAgICBsZXQganNvbnBDYWxsYmFjayA9ICdqc29ucENhbGxiYWNrJyArIGlkXG4gICAgbGV0IGpzb25wQ2FsbGJhY2tEYXRhID0gYF9fSlNPTlBfREFUQV8ke2lkfV9fYFxuXG4gICAgd2luZG93W2pzb25wQ2FsbGJhY2tdID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHdpbmRvd1tqc29ucENhbGxiYWNrRGF0YV0gPSBkYXRhXG4gICAgfVxuXG4gICAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtmdWxsVXJsfSZjYWxsYmFjaz0ke2pzb25wQ2FsbGJhY2t9YClcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdpZCcsIGpzb25wSWQpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGpzb25wSWQpKVxuXG4gICAgICAgIHJlc29sdmUoeyBqc29uOiB3aW5kb3dbanNvbnBDYWxsYmFja0RhdGFdfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy91dGlscy9qc29ucC50c1xuICoqLyIsImltcG9ydCBqc29ucCBmcm9tICcuLi91dGlscy9qc29ucCdcbmltcG9ydCB7IEFwaVJvb3RzIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hEb3ViYW5Cb29rcyhxdWVyeSkge1xuICByZXR1cm4ganNvbnAoYCR7QXBpUm9vdHMuRE9VQkFOX0JPT0tTfS9zZWFyY2g/Y291bnQ9NSZxPSR7cXVlcnl9YClcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2FwaXMvZXh0ZXJuYWxBcGlzLnRzXG4gKiovIiwiaW1wb3J0IENvbnNvbGVNYXN0ZXIgZnJvbSAnLi9Db25zb2xlTWFzdGVyJ1xuZXhwb3J0IGRlZmF1bHQgQ29uc29sZU1hc3RlclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29udGFpbmVycy9Db25zb2xlTWFzdGVyL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9lbGVtZW50cy9fbGF5b3V0L0NvbnRhaW5lcidcbmltcG9ydCBDb25zb2xlQnJhbmRpbmcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db25zb2xlQnJhbmRpbmcnXG5pbXBvcnQgeyB1c2VyQXV0aCwgc2VuZE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgQ29uc29sZVNpZGViYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db25zb2xlU2lkZWJhcidcbmltcG9ydCBtZW51cyBmcm9tICcuLi8uLi9jb250ZW50L21lbnVzJ1xuaW1wb3J0IERvY0NvbnRhaW5lciBmcm9tICcuLi8uLi9jb250YWluZXJzL0RvY0NvbnRhaW5lcidcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Db25zb2xlTWFzdGVyLmNzcycpXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5vdGlmaWNhdGlvbnM/OiBhbnlcbiAgdXNlckF1dGg/OiBhbnlcbiAgc2Vzc2lvbj86IGFueVxuICByb3V0aW5nPzogYW55XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgQ29uc29sZSBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy51c2VyQXV0aCgpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGlzQWRtaW4gPSB0aGlzLnByb3BzLnNlc3Npb24udXNlci5yb2xlID09PSAnYWRtaW4nID8gdHJ1ZSA6IGZhbHNlXG4gICAgbGV0IHVzZXJuYW1lID0gdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIudXNlcm5hbWUgPyB0aGlzLnByb3BzLnNlc3Npb24udXNlci51c2VybmFtZSA6IG51bGxcbiAgICBsZXQgcGF0aG5hbWUgPSB0aGlzLnByb3BzLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyA/IHRoaXMucHJvcHMucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zLnBhdGhuYW1lIDogJ2NvbnNvbGUnXG5cbiAgICByZXR1cm4gKFxuICAgICAgPERvY0NvbnRhaW5lciBib2R5Q2xhc3M9XCJjb25zb2xlXCI+XG4gICAgICAgIDxDb25zb2xlQnJhbmRpbmcgaXNBZG1pbj17aXNBZG1pbn0gdXNlcm5hbWU9e3VzZXJuYW1lfSAvPlxuICAgICAgICA8Q29udGFpbmVyIGlzRmx1aWQ9e3RydWV9PlxuICAgICAgICAgIDxDb25zb2xlU2lkZWJhclxuICAgICAgICAgICAgbWVudU1hcHBpbmc9e21lbnVzfVxuICAgICAgICAgICAgY3VycmVudFBhdGg9e3BhdGhuYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0RvY0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICBub3RpZmljYXRpb25zOiBzdGF0ZS5jb21wb25lbnRzLm5vdGlmaWNhdGlvbnMsXG4gICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvbixcbiAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nXG4gIH0pLFxuICB7IHNlbmROb3RpZmljYXRpb24sIHVzZXJBdXRoIH1cbikoQ29uc29sZSBhcyBhbnkpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb250YWluZXJzL0NvbnNvbGVNYXN0ZXIvQ29uc29sZU1hc3Rlci50c3hcbiAqKi8iLCJpbXBvcnQgQ29uc29sZUJyYW5kaW5nIGZyb20gJy4vQ29uc29sZUJyYW5kaW5nJ1xuZXhwb3J0IGRlZmF1bHQgQ29uc29sZUJyYW5kaW5nXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnNvbGVCcmFuZGluZy9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2VsZW1lbnRzL19sYXlvdXQvQ29udGFpbmVyJ1xuaW1wb3J0IHsgRHJvcGRvd24sIERyb3Bkb3duSXRlbSwgRHJvcGRvd25JdGVtU2VwIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvRHJvcGRvd24nXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBMb2dvIGZyb20gJy4uL0xvZ28nXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0NvbnNvbGVCcmFuZGluZy5zY3NzJylcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBDb25zb2xlQnJhbmRpbmcgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0Ryb3Bkb3duTWVudVZpc2libGU6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRHJvcGRvd25NZW51KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNEcm9wZG93bk1lbnVWaXNpYmxlOiAhdGhpcy5zdGF0ZS5pc0Ryb3Bkb3duTWVudVZpc2libGVcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB1c2VybmFtZSA9IHRoaXMucHJvcHMudXNlcm5hbWVcbiAgICBsZXQgaXNBZG1pbiA9IHRoaXMucHJvcHMuaXNBZG1pbiA/IHRoaXMucHJvcHMuaXNBZG1pbiA6ICdmYWxzZSdcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cImJyYW5kaW5nXCI+XG4gICAgICAgIDxDb250YWluZXIgaXNGbHVpZD17dHJ1ZX0gY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExvZ28gdG89XCIvY29uc29sZVwiIC8+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInN1Yi1uYW1lXCI+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cInN1YlwiPuaOp+WItuWPsDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJuYXYgcmlnaHRcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lID8gKFxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZGFya1wiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXsoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3VzZXJuYW1lfXsgaXNBZG1pbiAmJiA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS0tZGFya1wiPueuoeeQhuWRmDwvc3Bhbj4gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKSB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT48TGluayB0bz1cIi9cIj7lm57liLAgUmVhZHI8L0xpbms+PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+PExpbmsgdG89e2AvdXNlci9wcm9maWxlYH0+5Liq5Lq65Li76aG1PC9MaW5rPjwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPjxMaW5rIHRvPXtgL3VzZXIvcHJlZmVyZW5jZWB9Puiuvue9rjwvTGluaz48L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVNlcCAvPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPjxhIGhyZWY9XCIvbG9nb3V0XCI+6YCA5Ye6PC9hPjwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvc2lnbmluXCI+55m75b2VPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvc2lnbnVwXCI+5rOo5YaMPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25zb2xlQnJhbmRpbmdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29uc29sZUJyYW5kaW5nL0NvbnNvbGVCcmFuZGluZy50c3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJicmFuZGluZ1wiOlwiYnJhbmRpbmdfM2dvUkdcIixcInNlcFwiOlwic2VwX0FUNkdsXCIsXCJzdWJcIjpcInN1Yl9JeWhtc1wiLFwicmlnaHRcIjpcInJpZ2h0XzFaQVFQXCIsXCJzdWItbmFtZVwiOlwic3ViLW5hbWVfMlQ4YWhcIixcIm5hdlwiOlwibmF2XzEweW40IG5hdl8xb2oxelwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db25zb2xlQnJhbmRpbmcvQ29uc29sZUJyYW5kaW5nLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBDb25zb2xlU2lkZWJhciBmcm9tICcuL0NvbnNvbGVTaWRlYmFyJ1xuZXhwb3J0IGRlZmF1bHQgQ29uc29sZVNpZGViYXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29uc29sZVNpZGViYXIvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vZWxlbWVudHMvSWNvbidcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Db25zb2xlU2lkZWJhci5jc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgY3VycmVudFBhdGg/OiBhbnlcbiAgbWVudU1hcHBpbmc/OiBhbnlcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgQ29uc29sZVNpZGViYXIgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtZW51TWFwcGluZywgY3VycmVudFBhdGggfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCBjdXJyZW50TWVudSA9IHtcbiAgICAgIHJvb3RJbmRleDogMCxcbiAgICAgIHN1YkluZGV4OiAwXG4gICAgfVxuXG4gICAgbWVudU1hcHBpbmcuZm9yRWFjaCgobWVudSwgcm9vdEluZGV4KSA9PiB7XG4gICAgICBsZXQgc3ViSW5kZXhcblxuICAgICAgbGV0IHJlc3VsdCA9IG1lbnUuc3ViTWVudS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnBhdGggPT09IGN1cnJlbnRQYXRoKSB7XG4gICAgICAgICAgc3ViSW5kZXggPSBpbmRleFxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICBjdXJyZW50TWVudS5yb290SW5kZXggPSByb290SW5kZXhcbiAgICAgICAgY3VycmVudE1lbnUuc3ViSW5kZXggPSBzdWJJbmRleFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBsZXQgcm9vdE1lbnUgPSAoXG4gICAgICA8dWwgc3R5bGVOYW1lPVwibmF2LXNpZGUtcm9vdFwiPlxuICAgICAgICB7XG4gICAgICAgICAgbWVudU1hcHBpbmcubWFwKChtZW51LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IHN0eWxlTmFtZT17aW5kZXggIT09IGN1cnJlbnRNZW51LnJvb3RJbmRleCA/ICdyb290LWl0ZW0nIDogJ3Jvb3QtaXRlbS0tY3VycmVudCd9PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXttZW51LnBhdGh9PlxuICAgICAgICAgICAgICAgICAgPEljb24gc2l6ZT17MjV9IHN0eWxlTmFtZT1cImljb25cIiBuYW1lPXttZW51LmNvbXBvbmVudH0gLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICApXG5cbiAgICBsZXQgc3ViTWVudSA9IChcbiAgICAgIDx1bCBzdHlsZU5hbWU9XCJuYXYtc2lkZS1zdWJcIj5cbiAgICAgICAge1xuICAgICAgICAgIG1lbnVNYXBwaW5nW2N1cnJlbnRNZW51LnJvb3RJbmRleF0uc3ViTWVudS5tYXAoKG1lbnUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gc3R5bGVOYW1lPXtpbmRleCAhPT0gY3VycmVudE1lbnUuc3ViSW5kZXggPyAnc3ViLWl0ZW0nIDogJ3N1Yi1pdGVtLS1jdXJyZW50J30+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e21lbnUucGF0aH0+e21lbnUuZGlzcGxheU5hbWV9PC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwic2lkZWJhci1sZWZ0XCI+XG4gICAgICAgIHtyb290TWVudX1cbiAgICAgICAge3N1Yk1lbnV9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uc29sZVNpZGViYXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29uc29sZVNpZGViYXIvQ29uc29sZVNpZGViYXIudHN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wic2lkZWJhci1sZWZ0XCI6XCJzaWRlYmFyLWxlZnRfMk5mdmFcIixcIm5hdi1zaWRlXCI6XCJuYXYtc2lkZV8zTDhmNlwiLFwibmF2LXNpZGUtcm9vdFwiOlwibmF2LXNpZGUtcm9vdF8xX1BCZyBuYXYtc2lkZV8zTDhmNlwiLFwibmF2LXNpZGUtcm9vdC0tY3VycmVudFwiOlwibmF2LXNpZGUtcm9vdC0tY3VycmVudF8zQlY1dCBuYXYtc2lkZS1yb290XzFfUEJnIG5hdi1zaWRlXzNMOGY2XCIsXCJuYXYtc2lkZS1zdWJcIjpcIm5hdi1zaWRlLXN1Yl81UV9mNSBuYXYtc2lkZV8zTDhmNlwiLFwibmF2LWl0ZW1cIjpcIm5hdi1pdGVtXzJyMXpuXCIsXCJpY29uXCI6XCJpY29uXzI2UHdHXCIsXCJyb290LWl0ZW1cIjpcInJvb3QtaXRlbV9WUHd1TSBuYXYtaXRlbV8ycjF6blwiLFwicm9vdC1pdGVtLS1jdXJyZW50XCI6XCJyb290LWl0ZW0tLWN1cnJlbnRfM0xNbkQgcm9vdC1pdGVtX1ZQd3VNIG5hdi1pdGVtXzJyMXpuXCIsXCJzdWItaXRlbVwiOlwic3ViLWl0ZW1fd2FBLU8gbmF2LWl0ZW1fMnIxem5cIixcInN1Yi1pdGVtLS1jdXJyZW50XCI6XCJzdWItaXRlbS0tY3VycmVudF8zQ3ptTSBzdWItaXRlbV93YUEtTyBuYXYtaXRlbV8ycjF6blwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db25zb2xlU2lkZWJhci9Db25zb2xlU2lkZWJhci5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImNvbnN0IG1lbnVzID0gW1xuICB7XG4gICAgY29tcG9uZW50OiAnYm9va3MnLFxuICAgIGRpc3BsYXlOYW1lOiAnJyxcbiAgICBwYXRoOiAnL2NvbnNvbGUvYm9va3MnLFxuICAgIHN1Yk1lbnU6IFtcbiAgICAgIHtcbiAgICAgICAgY29tcG9uZW50OiAnbWFuYWdlYm9va3MnLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ+S5puexjeeuoeeQhicsXG4gICAgICAgIHBhdGg6ICcvY29uc29sZS9ib29rcydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbXBvbmVudDogJ2FkZGJvb2snLFxuICAgICAgICBkaXNwbGF5TmFtZTogJ+a3u+WKoOS5puexjScsXG4gICAgICAgIHBhdGg6ICcvY29uc29sZS9ib29rcy9uZXcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb21wb25lbnQ6ICdhZGRjb2xsZWN0aW9uJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICfmt7vliqDlkIjpm4YnLFxuICAgICAgICBwYXRoOiAnL2NvbnNvbGUvY29sbGVjdGlvbnMvbmV3J1xuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvbXBvbmVudDogJ3VzZXJzJyxcbiAgICBkaXNwbGF5TmFtZTogJycsXG4gICAgcGF0aDogJy9jb25zb2xlL3VzZXJzJyxcbiAgICBzdWJNZW51OiBbXG4gICAgICB7XG4gICAgICAgIGNvbXBvbmVudDogJ21hbmFnZXVzZXJzJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICfnlKjmiLfnrqHnkIYnLFxuICAgICAgICBwYXRoOiAnL2NvbnNvbGUvdXNlcnMnXG4gICAgICB9XG4gICAgXVxuICB9LFxuICAvLyB7XG4gIC8vICAgY29tcG9uZW50OiAnZGF0YWJhc2UnLFxuICAvLyAgIGRpc3BsYXlOYW1lOiAnJyxcbiAgLy8gICBwYXRoOiAnL2NvbnNvbGUvZGInLFxuICAvLyAgIHN1Yk1lbnU6IFtdXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBjb21wb25lbnQ6ICdzdGF0aXN0aWNzJyxcbiAgLy8gICBkaXNwbGF5TmFtZTogJycsXG4gIC8vICAgcGF0aDogJy9jb25zb2xlL3N0YXRpc3RpY3MnLFxuICAvLyAgIHN1Yk1lbnU6IFtdXG4gIC8vIH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgbWVudXNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbnRlbnQvbWVudXMudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgd2l0aFNpZGVFZmZlY3QgZnJvbSAncmVhY3Qtc2lkZS1lZmZlY3QnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmNvbnN0IGRlZmF1bHRUaXRsZSA9ICdSZWFkcidcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHN0eWxlTmFtZT86IHN0cmluZ1xuICBib2R5Q2xhc3M/OiBzdHJpbmdcbiAgdGl0bGU/OiBzdHJpbmdcbiAgdXNlQXNNYXN0ZXJUaXRsZT86IGJvb2xlYW5cbn1cblxuY2xhc3MgRG9jQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCB7fT4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICBjbGFzc05hbWVcbiAgICAgICAgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydnYi1kb2MtY29udGFpbmVyJyArIGNsYXNzTmFtZX0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwiZ2ItZG9jLWNvbnRhaW5lclwiPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiByZWR1Y2VQcm9wc1RvU3RhdGUocHJvcHNMaXN0KSB7XG4gIGNvbnN0IGlubmVybW9zdFByb3BzID0gcHJvcHNMaXN0W3Byb3BzTGlzdC5sZW5ndGggLSAxXVxuICBsZXQgZGF0YTogYW55ID0ge31cblxuICBpZiAoaW5uZXJtb3N0UHJvcHMpIHtcbiAgICBkYXRhID0gXy5waWNrKGlubmVybW9zdFByb3BzLCBbJ3RpdGxlJywgJ2JvZHlDbGFzcyddKVxuICAgIGlmIChkYXRhLnRpdGxlICYmICFpbm5lcm1vc3RQcm9wcy51c2VBc01hc3RlclRpdGxlKSB7XG4gICAgICBkYXRhLnRpdGxlID0gYCR7ZGF0YS50aXRsZX0gfCAke2RlZmF1bHRUaXRsZX1gXG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEudGl0bGUgPSBkYXRhLnRpdGxlIHx8IGRlZmF1bHRUaXRsZVxuICAgIH1cbiAgfVxuXG4gIGRhdGEuYm9keUNsYXNzID0gcHJvcHNMaXN0XG4gICAgLmZpbHRlcihwcm9wID0+IHByb3AuYm9keUNsYXNzKVxuICAgIC5tYXAocHJvcCA9PiBwcm9wLmJvZHlDbGFzcylcbiAgICAuam9pbignICcpXG5cbiAgcmV0dXJuIGRhdGFcbn1cblxuZnVuY3Rpb24gaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudChwcm9wTGlzdCkge1xuICBjb25zdCB7IHRpdGxlLCBib2R5Q2xhc3MgfSA9IHByb3BMaXN0XG5cbiAgaWYgKHR5cGVvZiBib2R5Q2xhc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBib2R5Q2xhc3NcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0aXRsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlXG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQudGl0bGUgPSBkZWZhdWx0VGl0bGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2lkZUVmZmVjdChcbiAgcmVkdWNlUHJvcHNUb1N0YXRlLFxuICBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50XG4pKERvY0NvbnRhaW5lcilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyLnRzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDY3NCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2lkZS1lZmZlY3QvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbFxuICoqIG1vZHVsZSBpZCA9IDEzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiY29udGVudFwiOlwiY29udGVudF8yb0JRbFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29udGFpbmVycy9Db25zb2xlTWFzdGVyL0NvbnNvbGVNYXN0ZXIuY3NzXG4gKiogbW9kdWxlIGlkID0gMTM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ3ZpZXdlci9ib29rLzppZCcsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL1ZpZXdlcicpIGFzIGFueSkuZGVmYXVsdClcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2luZGV4LnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGg6ICcvJyxcblxuICBnZXRDb21wb25lbnQobmV4dFN0YXRlLCBmbikge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgICAgZm4obnVsbCwgKHJlcXVpcmUoJy4vQXBwSG9tZScpIGFzIGFueSkuZGVmYXVsdClcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQXBwSG9tZS9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAnYnJvd3NlJyxcblxuICBnZXRDb21wb25lbnQobmV4dFN0YXRlLCBmbikge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgICAgZm4obnVsbCwgKHJlcXVpcmUoJy4vQnJvd3NlJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9Ccm93c2UvaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ2Jvb2svOmlkJyxcblxuICBnZXRDb21wb25lbnQobmV4dFN0YXRlLCBmbikge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgICAgZm4obnVsbCwgKHJlcXVpcmUoJy4vQm9va0RldGFpbCcpIGFzIGFueSkuZGVmYXVsdClcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQm9va0RldGFpbC9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAnY29sbGVjdGlvbnMnLFxuXG4gIGdldENvbXBvbmVudChuZXh0U3RhdGUsIGZuKSB7XG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlKSB7XG4gICAgICBmbihudWxsLCAocmVxdWlyZSgnLi9Db2xsZWN0aW9ucycpIGFzIGFueSkuZGVmYXVsdClcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQ29sbGVjdGlvbnMvaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ2NvbGxlY3Rpb25zLzppZCcsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL0NvbGxlY3Rpb25EZXRhaWwnKSBhcyBhbnkpLmRlZmF1bHQpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL0NvbGxlY3Rpb25EZXRhaWwvaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ3NpZ25pbicsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL1NpZ25pbicpIGFzIGFueSkuZGVmYXVsdClcbiAgICB9KVxuICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1NpZ25pbi9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAnc2lnbnVwJyxcblxuICBnZXRDb21wb25lbnQobmV4dFN0YXRlLCBmbikge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgICAgZm4obnVsbCwgKHJlcXVpcmUoJy4vU2lnbnVwJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvU2lnbnVwL2luZGV4LnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGg6ICdzaGVsZicsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL1NoZWxmJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9TaGVsZi9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAncHJlZmVyZW5jZScsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL1ByZWZlcmVuY2UnKSBhcyBhbnkpLmRlZmF1bHQpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ3Byb2ZpbGUnLFxuXG4gIGdldENvbXBvbmVudChuZXh0U3RhdGUsIGZuKSB7XG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlKSB7XG4gICAgICBmbihudWxsLCAocmVxdWlyZSgnLi9Qcm9maWxlJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9Qcm9maWxlL2luZGV4LnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGg6ICdib29rcycsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL01hbmFnZUJvb2tzJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAndXNlcnMnLFxuXG4gIGdldENvbXBvbmVudChuZXh0U3RhdGUsIGZuKSB7XG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlKSB7XG4gICAgICBmbihudWxsLCAocmVxdWlyZSgnLi9NYW5hZ2VVc2VycycpIGFzIGFueSkuZGVmYXVsdClcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlVXNlcnMvaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ2Jvb2tzL25ldycsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL0FkZEJvb2snKSBhcyBhbnkpLmRlZmF1bHQpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL0FkZEJvb2svaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ2NvbGxlY3Rpb25zL25ldycsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL0FkZENvbGxlY3Rpb24nKSBhcyBhbnkpLmRlZmF1bHQpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL0FkZENvbGxlY3Rpb24vaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJyonLFxuXG4gIGdldENvbXBvbmVudChuZXh0U3RhdGUsIGZuKSB7XG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlKSB7XG4gICAgICBmbihudWxsLCAocmVxdWlyZSgnLi9Ob01hdGNoJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTm9NYXRjaC9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDY3Nyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2tpdF9kbGxcbiAqKiBtb2R1bGUgaWQgPSAyNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21wb3NlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJ1xuaW1wb3J0IGFwaSBmcm9tICcuL21pZGRsZXdhcmUvYXBpJ1xuaW1wb3J0IG1vZGlmeVJlc3BvbnNlIGZyb20gJy4vbWlkZGxld2FyZS9tb2RpZnlSZXNwb25zZSdcbmltcG9ydCBoYW5kbGVTZXJ2ZXJTdG9yZSBmcm9tICcuL21pZGRsZXdhcmUvaGFuZGxlU2VydmVyU3RvcmUnXG5pbXBvcnQgaGFuZGxlSW5pdGlhbFN0YXRlIGZyb20gJy4uL3V0aWxzL2hhbmRsZUluaXRpYWxTdGF0ZSdcbmltcG9ydCBsb2dBY3Rpb25UeXBlcyBmcm9tICcuL21pZGRsZXdhcmUvbG9nQWN0aW9uVHlwZXMnXG5pbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcblxuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoKSB7XG4gIGxldCBzdG9yZVxuXG4gIC8vIGlmKG1vZHVsZS5ob3QpIHtcbiAgLy8gICBtb2R1bGUuaG90LmFjY2VwdCgnLi4vcmVkdWNlcnMnLCAoKSA9PiB7XG4gIC8vICAgICBjb25zdCBuZXh0Um9vdFJlZHVjZXIgPSByZXF1aXJlKCcuLi9yZWR1Y2VycycpLmRlZmF1bHRcbiAgLy8gICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKG5leHRSb290UmVkdWNlcilcbiAgLy8gICB9KVxuICAvLyB9XG5cbiAgLy8gc2VydmVyIHNpZGVcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICAgIHJvb3RSZWR1Y2VyLFxuICAgICAge30sXG4gICAgICBhcHBseU1pZGRsZXdhcmUoaGFuZGxlU2VydmVyU3RvcmUsIGFwaSwgbW9kaWZ5UmVzcG9uc2UsIHRodW5rLCBsb2dBY3Rpb25UeXBlcylcbiAgICApXG5cbiAgICByZXR1cm4gc3RvcmVcbiAgfVxuXG4gIGlmIChlbnYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgICByb290UmVkdWNlcixcbiAgICAgIGhhbmRsZUluaXRpYWxTdGF0ZSgpLFxuICAgICAgYXBwbHlNaWRkbGV3YXJlKGhhbmRsZVNlcnZlclN0b3JlLCBhcGksIG1vZGlmeVJlc3BvbnNlLCB0aHVuaylcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICAgIHJvb3RSZWR1Y2VyLFxuICAgICAgaGFuZGxlSW5pdGlhbFN0YXRlKCksXG4gICAgICBjb21wb3NlKFxuICAgICAgICBhcHBseU1pZGRsZXdhcmUoaGFuZGxlU2VydmVyU3RvcmUsIGFwaSwgbW9kaWZ5UmVzcG9uc2UsIHRodW5rLCBjcmVhdGVMb2dnZXIoe2NvbGxhcHNlZDogdHJ1ZX0pKVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBzdG9yZVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvY29uZmlndXJlU3RvcmUudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg2NjEpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2tpdF9kbGxcbiAqKiBtb2R1bGUgaWQgPSAyNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7cmVkdWNlciBhcyBmb3JtfSBmcm9tICdyZWR1eC1mb3JtJ1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyByb3V0ZXJSZWR1Y2VyIGFzIHJvdXRpbmcgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnXG5pbXBvcnQgY29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnXG5pbXBvcnQgKiBhcyBhcGlEYXRhUmVkdWNlcnMgZnJvbSAnLi9hcGktZGF0YSdcbi8vIGltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucydcblxuLy8gZGVwcmVjYXRlZFxuZnVuY3Rpb24gZWxlbWVudHMoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0NIQU5HRV9WQUxVRScpIHtcbiAgICAvLyBsb2Rhc2gjbWVyZ2Ug5LiN5pSv5oyBIFN5bWJvbFxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgW2FjdGlvbi5uYW1lXTogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVbYWN0aW9uLm5hbWVdLCB7XG4gICAgICAgIHZhbHVlOiBhY3Rpb24udmFsdWVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ1VQREFURV9FTEVNRU5UJykge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgW2FjdGlvbi5uYW1lXTogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVbYWN0aW9uLm5hbWVdLCBhY3Rpb24uZGF0YSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKE9iamVjdC5hc3NpZ24oe30sIHtcbiAgY29tcG9uZW50cyxcbiAgZWxlbWVudHMsXG4gIHJvdXRpbmcsXG4gIGZvcm1cbn0sIGFwaURhdGFSZWR1Y2VycykpXG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9yZWR1Y2Vycy9pbmRleC50c1xuICoqLyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJ1xuXG5mdW5jdGlvbiBub3RpZmljYXRpb25zKHN0YXRlID0gW10sIGFjdGlvbikge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdISURFX05PVElGSUNBVElPTicpIHtcbiAgICByZXR1cm4gc3RhdGUubWFwKG4gPT4gbi5pZCA9PT0gYWN0aW9uLmlkID8gT2JqZWN0LmFzc2lnbih7fSwgbiwgeyB2aXNpYmxlOiBmYWxzZX0pIDogbilcbiAgfVxuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ1NIT1dfTk9USUZJQ0FUSU9OJykge1xuICAgIHJldHVybiBbLi4uc3RhdGUsIHtcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBtZXNzYWdlOiBhY3Rpb24ubWVzc2FnZSxcbiAgICAgIHR5cGU6IGFjdGlvbi5tc2dUeXBlLFxuICAgICAgaWQ6IGFjdGlvbi5pZFxuICAgIH1dXG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuXG5mdW5jdGlvbiBjb25maXJtTW9kYWwoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5PUEVOX0NPTkZJUk1fTU9EQUwpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtvcGVuOiB0cnVlfSwgYWN0aW9uLmRhdGEpXG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuQ0xPU0VfQ09ORklSTV9NT0RBTCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcGVuOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZVxufVxuXG5mdW5jdGlvbiBtb2RhbChzdGF0ZSA9IHt9LCBhY3Rpb24pIHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnT1BFTl9NT0RBTCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtvcGVuOiB0cnVlfSwgYWN0aW9uLmRhdGEpXG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDTE9TRV9NT0RBTCcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BlbjogZmFsc2VcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuY29uc3QgY29tcG9uZW50cyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIG5vdGlmaWNhdGlvbnMsXG4gIGNvbmZpcm1Nb2RhbCxcbiAgbW9kYWxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudHNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL3JlZHVjZXJzL2NvbXBvbmVudHMudHNcbiAqKi8iLCJpbXBvcnQgZXJyb3JNZXNzYWdlIGZyb20gJy4vZXJyb3JNZXNzYWdlJ1xuaW1wb3J0IHBhZ2luYXRpb24gZnJvbSAnLi9wYWdpbmF0aW9uJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5leHBvcnQgeyBwYWdpbmF0aW9uLCBlcnJvck1lc3NhZ2UgfVxuXG5leHBvcnQgZnVuY3Rpb24gZW50aXRpZXMoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gIGlmIChhY3Rpb24ucmVzcG9uc2UgJiYgYWN0aW9uLnJlc3BvbnNlLmVudGl0aWVzKSB7XG4gICAgcmV0dXJuIF8ubWVyZ2Uoe30sIHN0YXRlLCBhY3Rpb24ucmVzcG9uc2UuZW50aXRpZXMpXG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBheWxvYWRzKHN0YXRlID0ge30sIGFjdGlvbikge1xuICBpZiAoKGFjdGlvbi5yZXNwb25zZSB8fCBhY3Rpb24uZXJyb3IpICYmIGFjdGlvbi5wYXlsb2FkKSB7XG4gICAgcmV0dXJuIF8uYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgW2FjdGlvbi5wYXlsb2FkXTogYWN0aW9uLnJlc3BvbnNlXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBzdGF0ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vzc2lvbihzdGF0ZSA9IHsgdXNlcjogeyByb2xlOiAndmlzaXRvcicgfSB9LCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1VTRVJfQVVUSF9SRVFVRVNUJzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9KVxuXG4gICAgY2FzZSAnVVNFUl9BVVRIX1NVQ0NFU1MnOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICB1c2VyOiBhY3Rpb24ucmVzcG9uc2VcbiAgICAgIH0pXG5cbiAgICBjYXNlICdVU0VSX0FVVEhfRkFJTFVSRSc6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIHVzZXI6IGFjdGlvbi5yZXNwb25zZVxuICAgICAgfSlcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvcmVkdWNlcnMvYXBpLWRhdGEvaW5kZXgudHNcbiAqKi8iLCIvLyBVcGRhdGVzIGVycm9yIG1lc3NhZ2UgdG8gbm90aWZ5IGFib3V0IHRoZSBmYWlsZWQgZmV0Y2hlcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVycm9yTWVzc2FnZShzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcbiAgY29uc3QgeyBlcnJvciB9ID0gYWN0aW9uXG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLmVycm9yXVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9yZWR1Y2Vycy9hcGktZGF0YS9lcnJvck1lc3NhZ2UudHNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmV4cG9ydCB0eXBlIFBhZ2luYXRpb24gPSB7XG4gIG5hbWU6IHN0cmluZ1xuICBxdWVyeT86IHN0cmluZ1xuICBrZXk/OiBzdHJpbmdcbiAgbWVyZ2U/OiBib29sZWFuXG59XG5cbmNvbnN0IHVwZGF0ZVBhZ2luYXRpb24gPSAoc3RhdGUgPSB7XG4gIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICBuZXh0UGFnZVVybDogbnVsbCxcbiAgcGFnZUNvdW50OiAwLFxuICBpZHM6IFtdXG59LCBhY3Rpb24sIG1lcmdlKSA9PiB7XG4gIGlmICghYWN0aW9uLnJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXy5vbWl0QnkoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgaWRzOiBtZXJnZVxuICAgICAgICAvLyDkuI3kvb/nlKggdW5pb24g5Lya5a+86Ie0IHNlcnZlciByZW5kZXJpbmcg6Zeu6aKY77yfXG4gICAgICAgID8gXy51bmlvbihzdGF0ZS5pZHMsIGFjdGlvbi5yZXNwb25zZS5yZXN1bHQpXG4gICAgICAgIDogYWN0aW9uLnJlc3BvbnNlLnJlc3VsdCxcbiAgICAgIG5leHQ6IGFjdGlvbi5yZXNwb25zZS5fbmV4dCxcbiAgICAgIGxhc3Q6IGFjdGlvbi5yZXNwb25zZS5fbGFzdCxcbiAgICB9KSwgXy5pc0VtcHR5KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2luYXRpb24oc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gIGlmIChhY3Rpb24ucGFnaW5hdGlvbikge1xuICAgIGNvbnN0IHsgbmFtZSwgcXVlcnksIGtleSwgbWVyZ2UgfSA9IGFjdGlvbi5wYWdpbmF0aW9uIGFzIFBhZ2luYXRpb25cbiAgICBjb25zdCBvcmlnaW5hbFN0YXRlID0gcXVlcnlcbiAgICAgID8gKHN0YXRlW25hbWVdICYmIHN0YXRlW25hbWVdWydxdWVyeSddICYmIHN0YXRlW25hbWVdWydxdWVyeSddW3F1ZXJ5XSkgfHwge31cbiAgICAgIDogKHN0YXRlW25hbWVdICYmIHN0YXRlW25hbWVdW2tleSB8fCAnZGVmYXVsdCddKSB8fCB7fVxuXG4gICAgY29uc3QgcGFnaW5hdGlvbkJvZHkgPSB1cGRhdGVQYWdpbmF0aW9uKG9yaWdpbmFsU3RhdGUsIGFjdGlvbiwgbWVyZ2UpXG5cbiAgICBjb25zdCBwYWdpbmF0aW9uT2JqID0gcXVlcnlcbiAgICAgID8ge1xuICAgICAgICBxdWVyeToge1xuICAgICAgICAgIFtxdWVyeV06IHBhZ2luYXRpb25Cb2R5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIDoge1xuICAgICAgICBba2V5IHx8ICdkZWZhdWx0J106IHBhZ2luYXRpb25Cb2R5XG4gICAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgIFtuYW1lXTogcGFnaW5hdGlvbk9ialxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL3JlZHVjZXJzL2FwaS1kYXRhL3BhZ2luYXRpb24udHNcbiAqKi8iLCJpbXBvcnQgY2FsbEFwaSwgeyBDYWxsQXBpT3B0aW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL2NhbGxBcGknXG5pbXBvcnQgeyBBcGlSb290cyB9IGZyb20gJy4uLy4uL2NvbmZpZydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBoYW5kbGVSZXNwb25zZSBmcm9tICcuLi8uLi91dGlscy9oYW5kbGVSZXNwb25zZSdcblxuZXhwb3J0IHR5cGUgUGFnaW5hdGlvbiA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIHF1ZXJ5Pzogc3RyaW5nXG4gIGtleT86IHN0cmluZ1xuICBtZXJnZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgQ0FMTF9BUElfT0JKID0ge1xuICAvLyB0b2RvXG4gIC8vIOWPr+S7peaYr+WHveaVsOaIluiAheWtl+espuS4su+8jOS9huaYryB0cyDkuI3nn6XpgZPmgI7kuYjlhpnog73pgJrov4fvvIzmiYDku6XlhYjov5nmoLdcbiAgZW5kcG9pbnQ6IGFueVxuXG4gIHR5cGVzOiBzdHJpbmdbXVxuICBhcGlVcmw/OiBzdHJpbmdcbiAgc2NoZW1hPzogYW55XG4gIG9wdGlvbnM/OiBDYWxsQXBpT3B0aW9uc1xuICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvblxufVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XG4gIGNvbnN0IENBTExfQVBJOiBDQUxMX0FQSV9PQkogPSBhY3Rpb24uQ0FMTF9BUElcbiAgaWYgKHR5cGVvZiBDQUxMX0FQSSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbmV4dChhY3Rpb24pXG4gIH1cblxuICBsZXQgeyBlbmRwb2ludCwgYXBpVXJsLCBvcHRpb25zLCBwYWdpbmF0aW9uIH0gPSBDQUxMX0FQSVxuICBjb25zdCB7IHR5cGVzLCBzY2hlbWEgfSA9IENBTExfQVBJXG4gIGNvbnN0IFtyZXF1ZXN0VHlwZSwgc3VjY2Vzc1R5cGUsIGZhaWx1cmVUeXBlXSA9IHR5cGVzXG5cbiAgY29uc3QgYWN0aW9uV2l0aCA9ICh7ZGF0YSwgaGFzUGFnaW5hdGlvbn0pID0+IHtcbiAgICBsZXQgZmluYWxBY3Rpb24gPSBPYmplY3QuYXNzaWduKHt9LCBhY3Rpb24sIGRhdGEpXG4gICAgZmluYWxBY3Rpb24gPSBfLm9taXQoZmluYWxBY3Rpb24sIFsnQ0FMTF9BUEknXSlcblxuICAgIGlmICghaGFzUGFnaW5hdGlvbikge1xuICAgICAgZmluYWxBY3Rpb24gPSBfLm9taXQoZmluYWxBY3Rpb24sIFsnQ0FMTF9BUEknLCAncGFnaW5hdGlvbiddKVxuICAgIH1cblxuICAgIHJldHVybiBmaW5hbEFjdGlvblxuICB9XG5cbiAgbmV4dChhY3Rpb25XaXRoKHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiByZXF1ZXN0VHlwZSxcbiAgICAgIHBhZ2luYXRpb25cbiAgICB9LFxuICAgIGhhc1BhZ2luYXRpb246IEJvb2xlYW4ocGFnaW5hdGlvbilcbiAgfSkpXG5cbiAgaWYgKHR5cGVvZiBlbmRwb2ludCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVuZHBvaW50ID0gZW5kcG9pbnQoc3RvcmUuZ2V0U3RhdGUoKSlcbiAgfVxuXG4gIGlmICh0eXBlb2YgYXBpVXJsID09PSAndW5kZWZpbmVkJykge1xuICAgIGFwaVVybCA9IEFwaVJvb3RzLkxPQ0FMXG4gIH1cblxuICBjb25zdCBmdWxsVXJsID0gYXBpVXJsICsgZW5kcG9pbnRcblxuICByZXR1cm4gY2FsbEFwaShmdWxsVXJsLCBvcHRpb25zIHx8IHt9KS50aGVuKFxuICAgIHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRSZXMgPSBoYW5kbGVSZXNwb25zZShyZXNwb25zZSwgc2NoZW1hKVxuICAgICAgbGV0IGZpbmFsQWN0aW9uID0ge1xuICAgICAgICByZXNwb25zZTogbm9ybWFsaXplZFJlcyxcbiAgICAgICAgdHlwZTogc3VjY2Vzc1R5cGUsXG4gICAgICAgIHBhZ2luYXRpb25cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5leHQoZGlzcGF0Y2ggPT4ge1xuICAgICAgICBkaXNwYXRjaChhY3Rpb25XaXRoKHsgZGF0YTogZmluYWxBY3Rpb24sIGhhc1BhZ2luYXRpb246IEJvb2xlYW4ocGFnaW5hdGlvbikgfSkpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgb2s6IHRydWUsXG4gICAgICAgICAgcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGVycm9yID0+IG5leHQoZGlzcGF0Y2ggPT4ge1xuICAgICAgZGlzcGF0Y2goYWN0aW9uV2l0aCh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0eXBlOiBmYWlsdXJlVHlwZSxcbiAgICAgICAgICBwYWdpbmF0aW9uLFxuICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICflj5HnlJ/mnKrnn6UgQVBJIOmUmeivr++8gShDb2RlIDEwMDApJ1xuICAgICAgICB9LFxuICAgICAgICBoYXNQYWdpbmF0aW9uOiBCb29sZWFuKHBhZ2luYXRpb24pXG4gICAgICB9KSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9rOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICApXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9taWRkbGV3YXJlL2FwaS50c1xuICoqLyIsImltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gJ25vcm1hbGl6cidcbmltcG9ydCBodW1wcyBmcm9tICdodW1wcydcbmltcG9ydCBwYXJzZVF1ZXJ5U3RyaW5nIGZyb20gJy4vcGFyc2VRdWVyeVN0cmluZydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY29uc3QgcGFyc2VIZWFkZXJQYWdlTGlua0J5UmVsID0gKGxpbmtzOiBzdHJpbmcsIHJlbDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGxpbmsgPSBsaW5rcy5zcGxpdCgnLCcpLmZpbmQocyA9PiBzLmluZGV4T2YoYHJlbD1cIiR7cmVsfVwiYCkgPiAtMSlcblxuICBpZiAoIWxpbmspIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBjb25zdCB1cmwgPSBsaW5rLnNwbGl0KCc7JylbMF0udHJpbSgpLnNsaWNlKDEsIC0xKVxuXG4gIHJldHVybiB7XG4gICAgLy8gdG9kb1xuICAgIHBhZ2U6IHBhcnNlSW50KF8uZ2V0KHBhcnNlUXVlcnlTdHJpbmcodXJsLnNwbGl0KCc/JylbMV0gfHwgJycpLCAncGFnZScsIDApIGFzIGFueSwgMTApLFxuICAgIHVybFxuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlUmVzSGVhZGVyVG9QYWdpbmF0aW9uKHJlc3BvbnNlKSB7XG4gIGlmICghcmVzcG9uc2UpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGNvbnN0IGxpbmtzID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2xpbmsnKVxuICBpZiAoIWxpbmtzKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBjb25zdCBuZXh0ID0gcGFyc2VIZWFkZXJQYWdlTGlua0J5UmVsKGxpbmtzLCAnbmV4dCcpXG4gIGNvbnN0IGxhc3QgPSBwYXJzZUhlYWRlclBhZ2VMaW5rQnlSZWwobGlua3MsICdsYXN0JylcblxuICByZXR1cm4ge1xuICAgIG5leHQsXG4gICAgbGFzdFxuICB9IGFzIGFueVxufVxuXG5mdW5jdGlvbiBoYW5kbGVSZXNwb25zZSh7IGpzb24sIF9yZXNwb25zZSB9LCBzY2hlbWEpIHtcbiAgY29uc3QgY2FtZWxpemVkSnNvbiA9IGh1bXBzLmNhbWVsaXplS2V5cyhqc29uKVxuICBjb25zdCB7IG5leHQsIGxhc3QgfSA9IHBhcnNlUmVzSGVhZGVyVG9QYWdpbmF0aW9uKF9yZXNwb25zZSlcblxuICBpZiAodHlwZW9mIHNjaGVtYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gIE9iamVjdC5hc3NpZ24oe30sXG4gICAgICBub3JtYWxpemUoY2FtZWxpemVkSnNvbiwgc2NoZW1hKSxcbiAgICAgIHtcbiAgICAgICAgX25leHQ6IG5leHQsXG4gICAgICAgIF9sYXN0OiBsYXN0XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGNhbWVsaXplZEpzb25cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlUmVzcG9uc2VcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3V0aWxzL2hhbmRsZVJlc3BvbnNlLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxNCkpKDc1Nik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaHVtcHMvaHVtcHMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIF91dGlsc19kbGxcbiAqKiBtb2R1bGUgaWQgPSAyNTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZyhxdWVyeVN0cmluZykge1xuICBjb25zdCBwYXJhbXMgPSBxdWVyeVN0cmluZy5zcGxpdCgnJicpXG4gIGxldCBvYmplY3QgPSB7fVxuXG4gIHBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICBjb25zdCBrZXkgPSBwYXJhbS5zcGxpdCgnPScpWzBdXG4gICAgY29uc3QgdmFsID0gcGFyYW0uc3BsaXQoJz0nKVsxXVxuXG4gICAgb2JqZWN0W2tleV0gPSB2YWxcbiAgfSlcblxuICByZXR1cm4gb2JqZWN0XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy91dGlscy9wYXJzZVF1ZXJ5U3RyaW5nLnRzXG4gKiovIiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLkRPVUJBTl9CT09LX1NFQVJDSF9TVUNDRVNTKSB7XG4gICAgYWN0aW9uLnJlc3BvbnNlLnJlc3VsdCA9IGFjdGlvbi5yZXNwb25zZS5yZXN1bHQuYm9va3NcbiAgfVxuXG4gIG5leHQoYWN0aW9uKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvbWlkZGxld2FyZS9tb2RpZnlSZXNwb25zZS50c1xuICoqLyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmUgPT4gbmV4dCA9PiBhY3Rpb24gPT4ge1xuICBpZiAodHlwZW9mIGFjdGlvbi5TRVJWRVJfU1RPUkUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKVxuICB9XG5cbiAgY29uc3QgYWN0aW9uQm9keSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHJlc29sdmUoYWN0aW9uLlNFUlZFUl9TVE9SRS5ib2R5KVxuICB9KVxuXG4gIHJldHVybiBhY3Rpb25Cb2R5LnRoZW4oYm9keSA9PiB7XG4gICAgcmV0dXJuIG5leHQoZGlzcGF0Y2ggPT4ge1xuICAgICAgZGlzcGF0Y2goYm9keSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9rOiB0cnVlLFxuICAgICAgICByZXNwb25zZTogYWN0aW9uLmJvZHkucmVzcG9uc2VcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvbWlkZGxld2FyZS9oYW5kbGVTZXJ2ZXJTdG9yZS50c1xuICoqLyIsImZ1bmN0aW9uIGhhbmRsZUluaXRpYWxTdGF0ZSgpIHtcbiAgbGV0IGluaXRpYWxTdGF0ZSA9IHt9XG5cbiAgaWYgKHR5cGVvZiAoPGFueT53aW5kb3cpLl9fSU5JVElBTF9TVEFURV9fICE9PSAndW5kZWZpbmVkJykge1xuICAgIGluaXRpYWxTdGF0ZSA9ICg8YW55PndpbmRvdykuX19JTklUSUFMX1NUQVRFX19cbiAgfVxuXG4gIHJldHVybiBpbml0aWFsU3RhdGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlSW5pdGlhbFN0YXRlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy91dGlscy9oYW5kbGVJbml0aWFsU3RhdGUudHNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBzdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XG4gIGNvbnNvbGUuaW5mbyhhY3Rpb24udHlwZSlcbiAgLy8gaWYgKGFjdGlvbi50eXBlID09PSAnQEByb3V0ZXIvTE9DQVRJT05fQ0hBTkdFJykge1xuICAvLyAgIGNvbnNvbGUuaW5mbyhhY3Rpb24ucGF5bG9hZClcbiAgLy8gfVxuXG4gIG5leHQoYWN0aW9uKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvbWlkZGxld2FyZS9sb2dBY3Rpb25UeXBlcy50c1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH1cblxudmFyIHJlcGVhdCA9IGZ1bmN0aW9uIHJlcGVhdChzdHIsIHRpbWVzKSB7XG4gIHJldHVybiBuZXcgQXJyYXkodGltZXMgKyAxKS5qb2luKHN0cik7XG59O1xudmFyIHBhZCA9IGZ1bmN0aW9uIHBhZChudW0sIG1heExlbmd0aCkge1xuICByZXR1cm4gcmVwZWF0KFwiMFwiLCBtYXhMZW5ndGggLSBudW0udG9TdHJpbmcoKS5sZW5ndGgpICsgbnVtO1xufTtcbnZhciBmb3JtYXRUaW1lID0gZnVuY3Rpb24gZm9ybWF0VGltZSh0aW1lKSB7XG4gIHJldHVybiBcIkAgXCIgKyBwYWQodGltZS5nZXRIb3VycygpLCAyKSArIFwiOlwiICsgcGFkKHRpbWUuZ2V0TWludXRlcygpLCAyKSArIFwiOlwiICsgcGFkKHRpbWUuZ2V0U2Vjb25kcygpLCAyKSArIFwiLlwiICsgcGFkKHRpbWUuZ2V0TWlsbGlzZWNvbmRzKCksIDMpO1xufTtcblxuLy8gVXNlIHRoZSBuZXcgcGVyZm9ybWFuY2UgYXBpIHRvIGdldCBiZXR0ZXIgcHJlY2lzaW9uIGlmIGF2YWlsYWJsZVxudmFyIHRpbWVyID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBwZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIiA/IHBlcmZvcm1hbmNlIDogRGF0ZTtcblxuLyoqXG4gKiBwYXJzZSB0aGUgbGV2ZWwgb3B0aW9uIG9mIGNyZWF0ZUxvZ2dlclxuICpcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nIHwgZnVuY3Rpb24gfCBvYmplY3R9IGxldmVsIC0gY29uc29sZVtsZXZlbF1cbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBhY3Rpb25cbiAqIEBwcm9wZXJ0eSB7YXJyYXl9IHBheWxvYWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0eXBlXG4gKi9cblxuZnVuY3Rpb24gZ2V0TG9nTGV2ZWwobGV2ZWwsIGFjdGlvbiwgcGF5bG9hZCwgdHlwZSkge1xuICBzd2l0Y2ggKHR5cGVvZiBsZXZlbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGxldmVsKSkge1xuICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgIHJldHVybiB0eXBlb2YgbGV2ZWxbdHlwZV0gPT09IFwiZnVuY3Rpb25cIiA/IGxldmVsW3R5cGVdLmFwcGx5KGxldmVsLCBfdG9Db25zdW1hYmxlQXJyYXkocGF5bG9hZCkpIDogbGV2ZWxbdHlwZV07XG4gICAgY2FzZSBcImZ1bmN0aW9uXCI6XG4gICAgICByZXR1cm4gbGV2ZWwoYWN0aW9uKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGxldmVsO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBsb2dnZXIgd2l0aCBmb2xsb3dlZCBvcHRpb25zXG4gKlxuICogQG5hbWVzcGFjZVxuICogQHByb3BlcnR5IHtvYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIGZvciBsb2dnZXJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nIHwgZnVuY3Rpb24gfCBvYmplY3R9IG9wdGlvbnMubGV2ZWwgLSBjb25zb2xlW2xldmVsXVxuICogQHByb3BlcnR5IHtib29sZWFufSBvcHRpb25zLmR1cmF0aW9uIC0gcHJpbnQgZHVyYXRpb24gb2YgZWFjaCBhY3Rpb24/XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG9wdGlvbnMudGltZXN0YW1wIC0gcHJpbnQgdGltZXN0YW1wIHdpdGggZWFjaCBhY3Rpb24/XG4gKiBAcHJvcGVydHkge29iamVjdH0gb3B0aW9ucy5jb2xvcnMgLSBjdXN0b20gY29sb3JzXG4gKiBAcHJvcGVydHkge29iamVjdH0gb3B0aW9ucy5sb2dnZXIgLSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgYGNvbnNvbGVgIEFQSVxuICogQHByb3BlcnR5IHtib29sZWFufSBvcHRpb25zLmxvZ0Vycm9ycyAtIHNob3VsZCBlcnJvcnMgaW4gYWN0aW9uIGV4ZWN1dGlvbiBiZSBjYXVnaHQsIGxvZ2dlZCwgYW5kIHJlLXRocm93bj9cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3B0aW9ucy5jb2xsYXBzZWQgLSBpcyBncm91cCBjb2xsYXBzZWQ/XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG9wdGlvbnMucHJlZGljYXRlIC0gY29uZGl0aW9uIHdoaWNoIHJlc29sdmVzIGxvZ2dlciBiZWhhdmlvclxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gb3B0aW9ucy5zdGF0ZVRyYW5zZm9ybWVyIC0gdHJhbnNmb3JtIHN0YXRlIGJlZm9yZSBwcmludFxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gb3B0aW9ucy5hY3Rpb25UcmFuc2Zvcm1lciAtIHRyYW5zZm9ybSBhY3Rpb24gYmVmb3JlIHByaW50XG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBvcHRpb25zLmVycm9yVHJhbnNmb3JtZXIgLSB0cmFuc2Zvcm0gZXJyb3IgYmVmb3JlIHByaW50XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlTG9nZ2VyKCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICB2YXIgX29wdGlvbnMkbGV2ZWwgPSBvcHRpb25zLmxldmVsO1xuICB2YXIgbGV2ZWwgPSBfb3B0aW9ucyRsZXZlbCA9PT0gdW5kZWZpbmVkID8gXCJsb2dcIiA6IF9vcHRpb25zJGxldmVsO1xuICB2YXIgX29wdGlvbnMkbG9nZ2VyID0gb3B0aW9ucy5sb2dnZXI7XG4gIHZhciBsb2dnZXIgPSBfb3B0aW9ucyRsb2dnZXIgPT09IHVuZGVmaW5lZCA/IGNvbnNvbGUgOiBfb3B0aW9ucyRsb2dnZXI7XG4gIHZhciBfb3B0aW9ucyRsb2dFcnJvcnMgPSBvcHRpb25zLmxvZ0Vycm9ycztcbiAgdmFyIGxvZ0Vycm9ycyA9IF9vcHRpb25zJGxvZ0Vycm9ycyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9vcHRpb25zJGxvZ0Vycm9ycztcbiAgdmFyIGNvbGxhcHNlZCA9IG9wdGlvbnMuY29sbGFwc2VkO1xuICB2YXIgcHJlZGljYXRlID0gb3B0aW9ucy5wcmVkaWNhdGU7XG4gIHZhciBfb3B0aW9ucyRkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb247XG4gIHZhciBkdXJhdGlvbiA9IF9vcHRpb25zJGR1cmF0aW9uID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9vcHRpb25zJGR1cmF0aW9uO1xuICB2YXIgX29wdGlvbnMkdGltZXN0YW1wID0gb3B0aW9ucy50aW1lc3RhbXA7XG4gIHZhciB0aW1lc3RhbXAgPSBfb3B0aW9ucyR0aW1lc3RhbXAgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfb3B0aW9ucyR0aW1lc3RhbXA7XG4gIHZhciB0cmFuc2Zvcm1lciA9IG9wdGlvbnMudHJhbnNmb3JtZXI7XG4gIHZhciBfb3B0aW9ucyRzdGF0ZVRyYW5zZm8gPSBvcHRpb25zLnN0YXRlVHJhbnNmb3JtZXI7XG4gIHZhciAvLyBkZXByZWNhdGVkXG4gIHN0YXRlVHJhbnNmb3JtZXIgPSBfb3B0aW9ucyRzdGF0ZVRyYW5zZm8gPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfSA6IF9vcHRpb25zJHN0YXRlVHJhbnNmbztcbiAgdmFyIF9vcHRpb25zJGFjdGlvblRyYW5zZiA9IG9wdGlvbnMuYWN0aW9uVHJhbnNmb3JtZXI7XG4gIHZhciBhY3Rpb25UcmFuc2Zvcm1lciA9IF9vcHRpb25zJGFjdGlvblRyYW5zZiA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFjdG4pIHtcbiAgICByZXR1cm4gYWN0bjtcbiAgfSA6IF9vcHRpb25zJGFjdGlvblRyYW5zZjtcbiAgdmFyIF9vcHRpb25zJGVycm9yVHJhbnNmbyA9IG9wdGlvbnMuZXJyb3JUcmFuc2Zvcm1lcjtcbiAgdmFyIGVycm9yVHJhbnNmb3JtZXIgPSBfb3B0aW9ucyRlcnJvclRyYW5zZm8gPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfSA6IF9vcHRpb25zJGVycm9yVHJhbnNmbztcbiAgdmFyIF9vcHRpb25zJGNvbG9ycyA9IG9wdGlvbnMuY29sb3JzO1xuICB2YXIgY29sb3JzID0gX29wdGlvbnMkY29sb3JzID09PSB1bmRlZmluZWQgPyB7XG4gICAgdGl0bGU6IGZ1bmN0aW9uIHRpdGxlKCkge1xuICAgICAgcmV0dXJuIFwiIzAwMDAwMFwiO1xuICAgIH0sXG4gICAgcHJldlN0YXRlOiBmdW5jdGlvbiBwcmV2U3RhdGUoKSB7XG4gICAgICByZXR1cm4gXCIjOUU5RTlFXCI7XG4gICAgfSxcbiAgICBhY3Rpb246IGZ1bmN0aW9uIGFjdGlvbigpIHtcbiAgICAgIHJldHVybiBcIiMwM0E5RjRcIjtcbiAgICB9LFxuICAgIG5leHRTdGF0ZTogZnVuY3Rpb24gbmV4dFN0YXRlKCkge1xuICAgICAgcmV0dXJuIFwiIzRDQUY1MFwiO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKCkge1xuICAgICAgcmV0dXJuIFwiI0YyMDQwNFwiO1xuICAgIH1cbiAgfSA6IF9vcHRpb25zJGNvbG9ycztcblxuICAvLyBleGl0IGlmIGNvbnNvbGUgdW5kZWZpbmVkXG5cbiAgaWYgKHR5cGVvZiBsb2dnZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfTtcbiAgfVxuXG4gIGlmICh0cmFuc2Zvcm1lcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJPcHRpb24gJ3RyYW5zZm9ybWVyJyBpcyBkZXByZWNhdGVkLCB1c2Ugc3RhdGVUcmFuc2Zvcm1lciBpbnN0ZWFkXCIpO1xuICB9XG5cbiAgdmFyIGxvZ0J1ZmZlciA9IFtdO1xuICBmdW5jdGlvbiBwcmludEJ1ZmZlcigpIHtcbiAgICBsb2dCdWZmZXIuZm9yRWFjaChmdW5jdGlvbiAobG9nRW50cnksIGtleSkge1xuICAgICAgdmFyIHN0YXJ0ZWQgPSBsb2dFbnRyeS5zdGFydGVkO1xuICAgICAgdmFyIHN0YXJ0ZWRUaW1lID0gbG9nRW50cnkuc3RhcnRlZFRpbWU7XG4gICAgICB2YXIgYWN0aW9uID0gbG9nRW50cnkuYWN0aW9uO1xuICAgICAgdmFyIHByZXZTdGF0ZSA9IGxvZ0VudHJ5LnByZXZTdGF0ZTtcbiAgICAgIHZhciBlcnJvciA9IGxvZ0VudHJ5LmVycm9yO1xuICAgICAgdmFyIHRvb2sgPSBsb2dFbnRyeS50b29rO1xuICAgICAgdmFyIG5leHRTdGF0ZSA9IGxvZ0VudHJ5Lm5leHRTdGF0ZTtcblxuICAgICAgdmFyIG5leHRFbnRyeSA9IGxvZ0J1ZmZlcltrZXkgKyAxXTtcbiAgICAgIGlmIChuZXh0RW50cnkpIHtcbiAgICAgICAgbmV4dFN0YXRlID0gbmV4dEVudHJ5LnByZXZTdGF0ZTtcbiAgICAgICAgdG9vayA9IG5leHRFbnRyeS5zdGFydGVkIC0gc3RhcnRlZDtcbiAgICAgIH1cbiAgICAgIC8vIG1lc3NhZ2VcbiAgICAgIHZhciBmb3JtYXR0ZWRBY3Rpb24gPSBhY3Rpb25UcmFuc2Zvcm1lcihhY3Rpb24pO1xuICAgICAgdmFyIGlzQ29sbGFwc2VkID0gdHlwZW9mIGNvbGxhcHNlZCA9PT0gXCJmdW5jdGlvblwiID8gY29sbGFwc2VkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICAgIH0sIGFjdGlvbikgOiBjb2xsYXBzZWQ7XG5cbiAgICAgIHZhciBmb3JtYXR0ZWRUaW1lID0gZm9ybWF0VGltZShzdGFydGVkVGltZSk7XG4gICAgICB2YXIgdGl0bGVDU1MgPSBjb2xvcnMudGl0bGUgPyBcImNvbG9yOiBcIiArIGNvbG9ycy50aXRsZShmb3JtYXR0ZWRBY3Rpb24pICsgXCI7XCIgOiBudWxsO1xuICAgICAgdmFyIHRpdGxlID0gXCJhY3Rpb24gXCIgKyAodGltZXN0YW1wID8gZm9ybWF0dGVkVGltZSA6IFwiXCIpICsgXCIgXCIgKyBmb3JtYXR0ZWRBY3Rpb24udHlwZSArIFwiIFwiICsgKGR1cmF0aW9uID8gXCIoaW4gXCIgKyB0b29rLnRvRml4ZWQoMikgKyBcIiBtcylcIiA6IFwiXCIpO1xuXG4gICAgICAvLyByZW5kZXJcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChpc0NvbGxhcHNlZCkge1xuICAgICAgICAgIGlmIChjb2xvcnMudGl0bGUpIGxvZ2dlci5ncm91cENvbGxhcHNlZChcIiVjIFwiICsgdGl0bGUsIHRpdGxlQ1NTKTtlbHNlIGxvZ2dlci5ncm91cENvbGxhcHNlZCh0aXRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGNvbG9ycy50aXRsZSkgbG9nZ2VyLmdyb3VwKFwiJWMgXCIgKyB0aXRsZSwgdGl0bGVDU1MpO2Vsc2UgbG9nZ2VyLmdyb3VwKHRpdGxlKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsb2dnZXIubG9nKHRpdGxlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByZXZTdGF0ZUxldmVsID0gZ2V0TG9nTGV2ZWwobGV2ZWwsIGZvcm1hdHRlZEFjdGlvbiwgW3ByZXZTdGF0ZV0sIFwicHJldlN0YXRlXCIpO1xuICAgICAgdmFyIGFjdGlvbkxldmVsID0gZ2V0TG9nTGV2ZWwobGV2ZWwsIGZvcm1hdHRlZEFjdGlvbiwgW2Zvcm1hdHRlZEFjdGlvbl0sIFwiYWN0aW9uXCIpO1xuICAgICAgdmFyIGVycm9yTGV2ZWwgPSBnZXRMb2dMZXZlbChsZXZlbCwgZm9ybWF0dGVkQWN0aW9uLCBbZXJyb3IsIHByZXZTdGF0ZV0sIFwiZXJyb3JcIik7XG4gICAgICB2YXIgbmV4dFN0YXRlTGV2ZWwgPSBnZXRMb2dMZXZlbChsZXZlbCwgZm9ybWF0dGVkQWN0aW9uLCBbbmV4dFN0YXRlXSwgXCJuZXh0U3RhdGVcIik7XG5cbiAgICAgIGlmIChwcmV2U3RhdGVMZXZlbCkge1xuICAgICAgICBpZiAoY29sb3JzLnByZXZTdGF0ZSkgbG9nZ2VyW3ByZXZTdGF0ZUxldmVsXShcIiVjIHByZXYgc3RhdGVcIiwgXCJjb2xvcjogXCIgKyBjb2xvcnMucHJldlN0YXRlKHByZXZTdGF0ZSkgKyBcIjsgZm9udC13ZWlnaHQ6IGJvbGRcIiwgcHJldlN0YXRlKTtlbHNlIGxvZ2dlcltwcmV2U3RhdGVMZXZlbF0oXCJwcmV2IHN0YXRlXCIsIHByZXZTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3Rpb25MZXZlbCkge1xuICAgICAgICBpZiAoY29sb3JzLmFjdGlvbikgbG9nZ2VyW2FjdGlvbkxldmVsXShcIiVjIGFjdGlvblwiLCBcImNvbG9yOiBcIiArIGNvbG9ycy5hY3Rpb24oZm9ybWF0dGVkQWN0aW9uKSArIFwiOyBmb250LXdlaWdodDogYm9sZFwiLCBmb3JtYXR0ZWRBY3Rpb24pO2Vsc2UgbG9nZ2VyW2FjdGlvbkxldmVsXShcImFjdGlvblwiLCBmb3JtYXR0ZWRBY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXJyb3IgJiYgZXJyb3JMZXZlbCkge1xuICAgICAgICBpZiAoY29sb3JzLmVycm9yKSBsb2dnZXJbZXJyb3JMZXZlbF0oXCIlYyBlcnJvclwiLCBcImNvbG9yOiBcIiArIGNvbG9ycy5lcnJvcihlcnJvciwgcHJldlN0YXRlKSArIFwiOyBmb250LXdlaWdodDogYm9sZFwiLCBlcnJvcik7ZWxzZSBsb2dnZXJbZXJyb3JMZXZlbF0oXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0U3RhdGVMZXZlbCkge1xuICAgICAgICBpZiAoY29sb3JzLm5leHRTdGF0ZSkgbG9nZ2VyW25leHRTdGF0ZUxldmVsXShcIiVjIG5leHQgc3RhdGVcIiwgXCJjb2xvcjogXCIgKyBjb2xvcnMubmV4dFN0YXRlKG5leHRTdGF0ZSkgKyBcIjsgZm9udC13ZWlnaHQ6IGJvbGRcIiwgbmV4dFN0YXRlKTtlbHNlIGxvZ2dlcltuZXh0U3RhdGVMZXZlbF0oXCJuZXh0IHN0YXRlXCIsIG5leHRTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsb2dnZXIubG9nKFwi4oCU4oCUIGxvZyBlbmQg4oCU4oCUXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxvZ0J1ZmZlci5sZW5ndGggPSAwO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGdldFN0YXRlID0gX3JlZi5nZXRTdGF0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIC8vIGV4aXQgZWFybHkgaWYgcHJlZGljYXRlIGZ1bmN0aW9uIHJldHVybnMgZmFsc2VcbiAgICAgICAgaWYgKHR5cGVvZiBwcmVkaWNhdGUgPT09IFwiZnVuY3Rpb25cIiAmJiAhcHJlZGljYXRlKGdldFN0YXRlLCBhY3Rpb24pKSB7XG4gICAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsb2dFbnRyeSA9IHt9O1xuICAgICAgICBsb2dCdWZmZXIucHVzaChsb2dFbnRyeSk7XG5cbiAgICAgICAgbG9nRW50cnkuc3RhcnRlZCA9IHRpbWVyLm5vdygpO1xuICAgICAgICBsb2dFbnRyeS5zdGFydGVkVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxvZ0VudHJ5LnByZXZTdGF0ZSA9IHN0YXRlVHJhbnNmb3JtZXIoZ2V0U3RhdGUoKSk7XG4gICAgICAgIGxvZ0VudHJ5LmFjdGlvbiA9IGFjdGlvbjtcblxuICAgICAgICB2YXIgcmV0dXJuZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGxvZ0Vycm9ycykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm5lZFZhbHVlID0gbmV4dChhY3Rpb24pO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGxvZ0VudHJ5LmVycm9yID0gZXJyb3JUcmFuc2Zvcm1lcihlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuZWRWYWx1ZSA9IG5leHQoYWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvZ0VudHJ5LnRvb2sgPSB0aW1lci5ub3coKSAtIGxvZ0VudHJ5LnN0YXJ0ZWQ7XG4gICAgICAgIGxvZ0VudHJ5Lm5leHRTdGF0ZSA9IHN0YXRlVHJhbnNmb3JtZXIoZ2V0U3RhdGUoKSk7XG5cbiAgICAgICAgcHJpbnRCdWZmZXIoKTtcblxuICAgICAgICBpZiAobG9nRW50cnkuZXJyb3IpIHRocm93IGxvZ0VudHJ5LmVycm9yO1xuICAgICAgICByZXR1cm4gcmV0dXJuZWRWYWx1ZTtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVMb2dnZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtbG9nZ2VyL2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==