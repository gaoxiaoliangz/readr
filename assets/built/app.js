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

	module.exports = (__webpack_require__(2))(449);

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

	module.exports = (__webpack_require__(14))(680);

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

	module.exports = (__webpack_require__(14))(678);

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

	module.exports = (__webpack_require__(2))(455);

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

	module.exports = (__webpack_require__(2))(661);

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

	module.exports = (__webpack_require__(2))(658);

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

	module.exports = (__webpack_require__(2))(593);

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

	module.exports = (__webpack_require__(14))(753);

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
	
	// const brandingStyles = require('../Branding/Branding.css')
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

	module.exports = (__webpack_require__(2))(670);

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

	module.exports = (__webpack_require__(2))(673);

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
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(657);

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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	exports.pagination = _pagination2.default;
	exports.errorMessage = _errorMessage2.default;
	function entities() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    if (action.response && action.response.entities) {
	        return _.merge({}, state, action.response.entities);
	    }
	    return state;
	}
	function payloads() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    if ((action.response || action.error) && action.payload) {
	        return _.assign({}, state, _defineProperty({}, action.payload, action.response));
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

	module.exports = (__webpack_require__(14))(752);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGNhMWYxM2EzMzg0ODFhMzY5YjgiLCJ3ZWJwYWNrOi8vL3NyYy9lbnRyeS9hcHAudHN4Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJfcmVhY3Rfa2l0X2RsbFwiIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvcmVhY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2tpdF9kbGwiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvUm9vdC50c3giLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9zdG9yZS9hY3Rpb25zL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9zdG9yZS9hY3Rpb25zL2NvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3N0b3JlL2FjdGlvbnMvZGF0YS1mZXRjaGluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvYWN0aW9ucy9kYXRhLWZldGNoaW5nL2Jvb2sudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3NjaGVtYXMudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9ub3JtYWxpenIvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfdXRpbHNfZGxsIiwid2VicGFjazovLy9leHRlcm5hbCBcIl91dGlsc19kbGxcIiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29uZmlnLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvdXRpbHMvcGFyc2VGb3JtRGF0YS50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9sb2Rhc2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIF91dGlsc19kbGwiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3V0aWxzL2xvY2tTY3JvbGwudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3V0aWxzL3VubG9ja1Njcm9sbC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvdXRpbHMvZ2V0U2NyZWVuSW5mby50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvYWN0aW9ucy9kYXRhLWZldGNoaW5nL3VzZXIudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3N0b3JlL2FjdGlvbnMvZGF0YS1mZXRjaGluZy91c2Vycy50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvYWN0aW9ucy9kYXRhLWZldGNoaW5nL2F1dGhvci50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvYWN0aW9ucy9kZXByZWNhdGVkQWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvY3JlYXRlQWxsLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvbWFwVmFsdWVzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3dyaXRlLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZ2V0VmFsdWVzRnJvbVN0YXRlLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZmllbGRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2luaXRpYWxpemVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3Jlc2V0U3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9zZXRFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9ub3JtYWxpemVGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVSZWR1eEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVSZWR1eEZvcm1Db25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1sYXp5LWNhY2hlL25vR2V0dGVycy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWxhenktY2FjaGUvbGliL25vR2V0dGVycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2RlZXAtZXF1YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kZWVwLWVxdWFsL2xpYi9rZXlzLmpzIiwid2VicGFjazovLy8uL34vZGVlcC1lcXVhbC9saWIvaXNfYXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZ2V0RGlzcGxheU5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9iaW5kQWN0aW9uRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2dldFZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2lzVmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9yZWFkRmllbGRzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvcmVhZEZpZWxkLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL2NyZWF0ZU9uQmx1ci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2V2ZW50cy9nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2V2ZW50cy9pc0V2ZW50LmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL2NyZWF0ZU9uQ2hhbmdlLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL2NyZWF0ZU9uRHJhZ1N0YXJ0LmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL2NyZWF0ZU9uRHJvcC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2V2ZW50cy9jcmVhdGVPbkZvY3VzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvc2lsZW5jZVByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1wcm9taXNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvdXBkYXRlRmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9pc1ByaXN0aW5lLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvaXNDaGVja2VkLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvcmVtb3ZlRmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9oYW5kbGVTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9hc3luY1ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9ldmVudHMvc2lsZW5jZUV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2V2ZW50cy9zaWxlbmNlRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi93cmFwTWFwRGlzcGF0Y2hUb1Byb3BzLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbCIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3dyYXBNYXBTdGF0ZVRvUHJvcHMuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2tpdF9kbGwiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0FsZXJ0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvQWxlcnQvQWxlcnQudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9JY29uL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9JY29uL0ljb24udHN4Iiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvSWNvbi9zdmctaWNvbnMudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1jc3MtbW9kdWxlcy9kaXN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9JY29uL0ljb24uY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0FsZXJ0L19hbGVydC5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9BbGVydC9BbGVydHMudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Nb2RhbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTW9kYWwvTW9kYWwudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fYW5pbWF0aW9ucy9GYWRlL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fYW5pbWF0aW9ucy9GYWRlL0ZhZGUudHN4Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fYW5pbWF0aW9ucy9GYWRlL0ZhZGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL01vZGFsL01vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL01vZGFsL01vZGFsUGx1cy50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL01vZGFsL0NvbmZpcm1Nb2RhbC50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL01vZGFsL01vZGFsRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2Zvcm0vQnV0dG9uL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9CdXR0b24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9CdXR0b24vX2J1dHRvbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL01vZGFsL01vZGFsRm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvQXBwTWFzdGVyLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29udGFpbmVycy9BcHBDb21tb24udHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0JyYW5kaW5nL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9CcmFuZGluZy9CcmFuZGluZy50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19sYXlvdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL19sYXlvdXQvQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRHJvcGRvd24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0Ryb3Bkb3duL0Ryb3Bkb3duLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvdXRpbHMvZG9tL2lzRGVzY2VuZGFudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Ecm9wZG93bi9Ecm9wZG93bi5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Ecm9wZG93bi9Ecm9wZG93bkl0ZW0udHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Ecm9wZG93bi9Ecm9wZG93bkl0ZW1TZXAudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0xvZ28vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvTG9nby9Mb2dvLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0xvZ28vTG9nby5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9CcmFuZGluZy9CcmFuZGluZy5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbG9waG9uL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbG9waG9uL0NvbG9waG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbG9waG9uL0NvbG9waG9uLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvYXBpcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvYXBpcy9hcGlzLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy91dGlscy9jYWxsQXBpLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tYnJvd3NlcmlmeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3V0aWxzX2RsbCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvdXRpbHMvanNvbnAudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2FwaXMvZXh0ZXJuYWxBcGlzLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb250YWluZXJzL0NvbnNvbGVNYXN0ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvQ29uc29sZU1hc3Rlci9Db25zb2xlTWFzdGVyLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db25zb2xlQnJhbmRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29uc29sZUJyYW5kaW5nL0NvbnNvbGVCcmFuZGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db25zb2xlQnJhbmRpbmcvQ29uc29sZUJyYW5kaW5nLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29uc29sZVNpZGViYXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29uc29sZVNpZGViYXIvQ29uc29sZVNpZGViYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29uc29sZVNpZGViYXIvQ29uc29sZVNpZGViYXIuY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb250ZW50L21lbnVzLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb250YWluZXJzL0RvY0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1zaWRlLWVmZmVjdC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvQ29uc29sZU1hc3Rlci9Db25zb2xlTWFzdGVyLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FwcEhvbWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Ccm93c2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Cb29rRGV0YWlsL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQ29sbGVjdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Db2xsZWN0aW9uRGV0YWlsL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvU2lnbmluL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvU2lnbnVwL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvU2hlbGYvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9QcmVmZXJlbmNlL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvUHJvZmlsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlVXNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9BZGRCb29rL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQ29sbGVjdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL05vTWF0Y2gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvcmVkdWNlcnMvY29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvcmVkdWNlcnMvYXBpLWRhdGEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3N0b3JlL3JlZHVjZXJzL2FwaS1kYXRhL2Vycm9yTWVzc2FnZS50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvcmVkdWNlcnMvYXBpLWRhdGEvcGFnaW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvbWlkZGxld2FyZS9hcGkudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3V0aWxzL2hhbmRsZVJlc3BvbnNlLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaHVtcHMvaHVtcHMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIF91dGlsc19kbGwiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3V0aWxzL3BhcnNlUXVlcnlTdHJpbmcudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3N0b3JlL21pZGRsZXdhcmUvbW9kaWZ5UmVzcG9uc2UudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3N0b3JlL21pZGRsZXdhcmUvaGFuZGxlU2VydmVyU3RvcmUudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3V0aWxzL2hhbmRsZUluaXRpYWxTdGF0ZS50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvbWlkZGxld2FyZS9sb2dBY3Rpb25UeXBlcy50cyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWxvZ2dlci9saWIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNB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QztBQUNsSjs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSBmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhjaHVua0lkcywgbW9yZU1vZHVsZXMpIHtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCBjYWxsYmFja3MgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKVxuIFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2guYXBwbHkoY2FsbGJhY2tzLCBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pO1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihjaHVua0lkcywgbW9yZU1vZHVsZXMpO1xuIFx0XHR3aGlsZShjYWxsYmFja3MubGVuZ3RoKVxuIFx0XHRcdGNhbGxiYWNrcy5zaGlmdCgpLmNhbGwobnVsbCwgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdC8vIEFycmF5IG1lYW5zIFwibG9hZGluZ1wiLCBhcnJheSBjb250YWlucyBjYWxsYmFja3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDA6MFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCwgY2FsbGJhY2spIHtcbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMClcbiBcdFx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbChudWxsLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBhbiBhcnJheSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkKSB7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdLnB1c2goY2FsbGJhY2spO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbY2FsbGJhY2tdO1xuIFx0XHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiBcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiBcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcblxuIFx0XHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCI7XG4gXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDRjYTFmMTNhMzM4NDgxYTM2OWI4XG4gKiovIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnksIFJvdXRlciwgbWF0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgcm91dGVzIGZyb20gJy4uL2lzb21vcnBoaWMvcm91dGVzJ1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHN5bmNIaXN0b3J5V2l0aFN0b3JlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4J1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4uL2lzb21vcnBoaWMvc3RvcmUvY29uZmlndXJlU3RvcmUnXG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKVxuY29uc3QgaGlzdG9yeSA9IHN5bmNIaXN0b3J5V2l0aFN0b3JlKGJyb3dzZXJIaXN0b3J5LCBzdG9yZSlcblxubWF0Y2goeyBoaXN0b3J5LCByb3V0ZXMgfSwgKGVycm9yLCByZWRpcmVjdExvY2F0aW9uLCByZW5kZXJQcm9wcykgPT4ge1xuICByZW5kZXIoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8Um91dGVyIHsuLi5yZW5kZXJQcm9wc30gLz5cbiAgICA8L1Byb3ZpZGVyPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSlcbn0pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvZW50cnkvYXBwLnRzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDM4KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfcmVhY3Rfa2l0X2RsbDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiX3JlYWN0X2tpdF9kbGxcIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDEpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbFxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDYwMCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2tpdF9kbGxcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm9vdCBmcm9tICcuLi9jb250YWluZXJzL1Jvb3QnXG5pbXBvcnQgQXBwTWFzdGVyIGZyb20gJy4uL2NvbnRhaW5lcnMvQXBwTWFzdGVyJ1xuaW1wb3J0IEFwcENvbW1vbiBmcm9tICcuLi9jb250YWluZXJzL0FwcENvbW1vbidcbmltcG9ydCBDb25zb2xlTWFzdGVyIGZyb20gJy4uL2NvbnRhaW5lcnMvQ29uc29sZU1hc3RlcidcbmltcG9ydCB7IFJvdXRlLCBJbmRleFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5leHBvcnQgZGVmYXVsdCAoXG4gIDxSb3V0ZSBjb21wb25lbnQ9e1Jvb3R9PlxuICAgIDxSb3V0ZSBjb21wb25lbnQ9e0FwcE1hc3Rlcn0+XG4gICAgICA8Um91dGUgey4uLnJlcXVpcmUoJy4vVmlld2VyJyl9IC8+XG4gICAgICA8Um91dGUgY29tcG9uZW50PXtBcHBDb21tb259PlxuICAgICAgICA8Um91dGUgey4uLnJlcXVpcmUoJy4vQXBwSG9tZScpfSAvPlxuICAgICAgICA8Um91dGUgey4uLnJlcXVpcmUoJy4vQnJvd3NlJyl9IC8+XG4gICAgICAgIDxSb3V0ZSB7Li4ucmVxdWlyZSgnLi9Cb29rRGV0YWlsJyl9IC8+XG4gICAgICAgIDxSb3V0ZSB7Li4ucmVxdWlyZSgnLi9Db2xsZWN0aW9ucycpfSAvPlxuICAgICAgICA8Um91dGUgey4uLnJlcXVpcmUoJy4vQ29sbGVjdGlvbkRldGFpbCcpfSAvPlxuICAgICAgICA8Um91dGUgey4uLnJlcXVpcmUoJy4vU2lnbmluJyl9IC8+XG4gICAgICAgIDxSb3V0ZSB7Li4ucmVxdWlyZSgnLi9TaWdudXAnKX0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJ1c2VyXCIgY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgPEluZGV4UmVkaXJlY3QgdG89XCIvdXNlci9wcm9maWxlXCIgLz5cbiAgICAgICAgICA8Um91dGUgey4uLnJlcXVpcmUoJy4vU2hlbGYnKX0gLz5cbiAgICAgICAgICA8Um91dGUgey4uLnJlcXVpcmUoJy4vUHJlZmVyZW5jZScpfSAvPlxuICAgICAgICAgIDxSb3V0ZSB7Li4ucmVxdWlyZSgnLi9Qcm9maWxlJyl9IC8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICA8L1JvdXRlPlxuICAgICAgPFJvdXRlIHBhdGg9XCJjb25zb2xlXCIgY29tcG9uZW50PXtDb25zb2xlTWFzdGVyfT5cbiAgICAgICAgPEluZGV4UmVkaXJlY3QgdG89XCIvY29uc29sZS9ib29rc1wiIC8+XG4gICAgICAgIDxSb3V0ZSB7Li4ucmVxdWlyZSgnLi9NYW5hZ2VCb29rcycpfSAvPlxuICAgICAgICA8Um91dGUgey4uLnJlcXVpcmUoJy4vTWFuYWdlVXNlcnMnKX0gLz5cbiAgICAgICAgPFJvdXRlIHsuLi5yZXF1aXJlKCcuL0FkZEJvb2snKX0gLz5cbiAgICAgICAgPFJvdXRlIHsuLi5yZXF1aXJlKCcuL0FkZENvbGxlY3Rpb24nKX0gLz5cbiAgICAgICAgPFJvdXRlIHsuLi5yZXF1aXJlKCcuL05vTWF0Y2gnKX0gLz5cbiAgICAgIDwvUm91dGU+XG4gICAgPC9Sb3V0ZT5cbiAgPC9Sb3V0ZT5cbilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9pbmRleC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24sIGhpZGVOb3RpZmljYXRpb24sIGNsb3NlQ29uZmlybU1vZGFsLCB1c2VyQXV0aCwgY2xvc2VNb2RhbCB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgeyBBbGVydHMgfSBmcm9tICcuLi9lbGVtZW50cy9BbGVydCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IENvbmZpcm1Nb2RhbCB9IGZyb20gJy4uL2VsZW1lbnRzL01vZGFsJ1xuaW1wb3J0IHsgTW9kYWxQbHVzIH0gZnJvbSAnLi4vZWxlbWVudHMvTW9kYWwnXG5cbmludGVyZmFjZSBJQWxsUHJvcHMge1xuICBub3RpZmljYXRpb25zOiBhbnlcbiAgaGlkZU5vdGlmaWNhdGlvbjogYW55XG4gIGVycm9yTWVzc2FnZTogc3RyaW5nXG4gIHNlbmROb3RpZmljYXRpb246IGFueVxuICBjb25maXJtTW9kYWw6IGFueVxuICBjbG9zZUNvbmZpcm1Nb2RhbDogYW55XG4gIHVzZXJBdXRoOiBhbnlcbiAgcm91dGluZzogYW55XG4gIHNlc3Npb246IGFueVxuICBtb2RhbDogYW55XG4gIGNsb3NlTW9kYWw6IGFueVxufVxuXG5jbGFzcyBSb290IGV4dGVuZHMgQ29tcG9uZW50PElBbGxQcm9wcywge30+IHtcblxuICBzdGF0aWMgZmV0Y2hEYXRhKHsgc3RvcmUsIHVzZXJTZXNzaW9uIH0pIHtcbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2godXNlckF1dGgodXNlclNlc3Npb24pKVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc3QgaGFzTmV3RXJyb3JNc2cgPSB0aGlzLnByb3BzLmVycm9yTWVzc2FnZS5sZW5ndGggIT09IG5leHRQcm9wcy5lcnJvck1lc3NhZ2UubGVuZ3RoXG4gICAgY29uc3Qgcm91dGVyQ2hhbmdlZCA9IG5leHRQcm9wcy5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMucGF0aG5hbWUgIT09IHRoaXMucHJvcHMucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zLnBhdGhuYW1lXG5cbiAgICBpZiAoaGFzTmV3RXJyb3JNc2cpIHtcbiAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbihfLmxhc3QobmV4dFByb3BzLmVycm9yTWVzc2FnZSksICdlcnJvcicpXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlckNoYW5nZWQpIHtcbiAgICAgIC8vIOi/lOWbnumhtumDqFxuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMFxuXG4gICAgICAvLyDnroDljZXmnYPpmZDpqozor4FcbiAgICAgIGlmIChuZXh0UHJvcHMucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zLnBhdGhuYW1lLmluZGV4T2YoJ2NvbnNvbGUnKSAhPT0gLTEpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLnJvbGUgIT09ICdhZG1pbicpIHtcbiAgICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKCcvJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMudXNlckF1dGgoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29uZmlybU1vZGFsLCBjbG9zZUNvbmZpcm1Nb2RhbCwgbW9kYWwsIGNsb3NlTW9kYWwgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1yb290XCI+XG4gICAgICAgIDxDb25maXJtTW9kYWxcbiAgICAgICAgICBvcGVuPXtjb25maXJtTW9kYWwub3Blbn1cbiAgICAgICAgICB0aXRsZT17Y29uZmlybU1vZGFsLnRpdGxlfVxuICAgICAgICAgIG9uQ29uZmlybT17Y29uZmlybU1vZGFsLm9uQ29uZmlybX1cbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VDb25maXJtTW9kYWx9XG4gICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICA+XG4gICAgICAgICAge2NvbmZpcm1Nb2RhbC5jb250ZW50fVxuICAgICAgICA8L0NvbmZpcm1Nb2RhbD5cbiAgICAgICAgPE1vZGFsUGx1c1xuICAgICAgICAgIG9wZW49e21vZGFsLm9wZW59XG4gICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH1cbiAgICAgICAgICB0aXRsZT17bW9kYWwudGl0bGV9XG4gICAgICAgID5cbiAgICAgICAgICB7bW9kYWwuY29udGVudH1cbiAgICAgICAgPC9Nb2RhbFBsdXM+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm5vdGlmaWNhdGlvbnMuZmlsdGVyKG5vdGkgPT4gbm90aS52aXNpYmxlKS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxBbGVydHNcbiAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMucHJvcHMuaGlkZU5vdGlmaWNhdGlvbn1cbiAgICAgICAgICAgICAgbWVzc2FnZXM9e3RoaXMucHJvcHMubm90aWZpY2F0aW9ucy5tYXAobm90aSA9PiAoe1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG5vdGkubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBub3RpLnR5cGUsXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogbm90aS52aXNpYmxlLFxuICAgICAgICAgICAgICAgIGlkOiBub3RpLmlkXG4gICAgICAgICAgICAgIH0pKSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCBJQWxsUHJvcHM+KFxuICBzdGF0ZSA9PiAoe1xuICAgIG5vdGlmaWNhdGlvbnM6IHN0YXRlLmNvbXBvbmVudHMubm90aWZpY2F0aW9ucyxcbiAgICBlcnJvck1lc3NhZ2U6IHN0YXRlLmVycm9yTWVzc2FnZSxcbiAgICBjb25maXJtTW9kYWw6IHN0YXRlLmNvbXBvbmVudHMuY29uZmlybU1vZGFsLFxuICAgIG1vZGFsOiBzdGF0ZS5jb21wb25lbnRzLm1vZGFsLFxuICAgIHJvdXRpbmc6IHN0YXRlLnJvdXRpbmcsXG4gICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvbixcbiAgfSksXG4gIHsgc2VuZE5vdGlmaWNhdGlvbiwgaGlkZU5vdGlmaWNhdGlvbiwgY2xvc2VDb25maXJtTW9kYWwsIHVzZXJBdXRoLCBjbG9zZU1vZGFsIH1cbikoUm9vdClcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvUm9vdC50c3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg0NDkpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2tpdF9kbGxcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgeyByZXNldCB9IGZyb20gJ3JlZHV4LWZvcm0nXG5cbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cydcbmV4cG9ydCAqIGZyb20gJy4vZGF0YS1mZXRjaGluZydcbmV4cG9ydCAqIGZyb20gJy4vZGVwcmVjYXRlZEFjdGlvbnMnXG5leHBvcnQgeyByZXNldCB9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9hY3Rpb25zL2luZGV4LnRzXG4gKiovIiwiZXhwb3J0IHR5cGUgTXNnVHlwZSA9ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnd2FybmluZycgfCAnb25nb2luZydcbmV4cG9ydCBmdW5jdGlvbiBzZW5kTm90aWZpY2F0aW9uKG1lc3NhZ2U6IHN0cmluZywgbXNnVHlwZTogTXNnVHlwZSA9ICdzdWNjZXNzJywgdCA9IDIwMDApIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBjb25zdCBpZCA9IE1hdGgucmFuZG9tKCkudG9GaXhlZCg4KS5zdWJzdHIoMilcblxuICAgIGRpc3BhdGNoKHNob3dOb3RpZmljYXRpb24oaWQsIG1lc3NhZ2UsIG1zZ1R5cGUpKVxuICAgIGlmICh0ICE9PSAwKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goaGlkZU5vdGlmaWNhdGlvbihpZCkpXG4gICAgICB9LCB0KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgU0hPV19OT1RJRklDQVRJT04gPSAnU0hPV19OT1RJRklDQVRJT04nXG5leHBvcnQgZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbihpZDogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIG1zZ1R5cGU6IE1zZ1R5cGUgPSAnc3VjY2VzcycpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTSE9XX05PVElGSUNBVElPTixcbiAgICBtZXNzYWdlLFxuICAgIG1zZ1R5cGUsXG4gICAgaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgSElERV9OT1RJRklDQVRJT04gPSAnSElERV9OT1RJRklDQVRJT04nXG5leHBvcnQgZnVuY3Rpb24gaGlkZU5vdGlmaWNhdGlvbihpZDogc3RyaW5nKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogSElERV9OT1RJRklDQVRJT04sXG4gICAgaWRcbiAgfVxufVxuXG4vLyBjb25maXJtIG1vZGFsXG5leHBvcnQgY29uc3QgT1BFTl9DT05GSVJNX01PREFMID0gJ2NvbXBvbmVudHMvY29uZmlybS1tb2RhbC9PUEVOJ1xuZXhwb3J0IGNvbnN0IENMT1NFX0NPTkZJUk1fTU9EQUwgPSAnY29tcG9uZW50cy9jb25maXJtLW1vZGFsL0NMT1NFJ1xuZXhwb3J0IHR5cGUgb3BlbkNvbmZpcm1Nb2RhbCA9IHtcbiAgdGl0bGU/OiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG4gIG9uQ29uZmlybTogKCkgPT4gdm9pZFxufVxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Db25maXJtTW9kYWwoZGF0YTogb3BlbkNvbmZpcm1Nb2RhbCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IE9QRU5fQ09ORklSTV9NT0RBTCxcbiAgICBkYXRhXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlQ29uZmlybU1vZGFsKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENMT1NFX0NPTkZJUk1fTU9EQUxcbiAgfVxufVxuXG4vLyBtb2RhbFxuZXhwb3J0IHR5cGUgb3Blbk1vZGFsID0ge1xuICB0aXRsZTogc3RyaW5nXG4gIHN1YlRpdGxlPzogc3RyaW5nXG4gIGNvbnRlbnQ/OiBKU1guRWxlbWVudFxufVxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Nb2RhbChkYXRhOiBvcGVuTW9kYWwpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnT1BFTl9NT0RBTCcsXG4gICAgZGF0YVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdDTE9TRV9NT0RBTCdcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvYWN0aW9ucy9jb21wb25lbnRzLnRzXG4gKiovIiwiZXhwb3J0ICogZnJvbSAnLi9ib29rJ1xuZXhwb3J0ICogZnJvbSAnLi91c2VyJ1xuZXhwb3J0ICogZnJvbSAnLi91c2VycydcbmV4cG9ydCAqIGZyb20gJy4vYXV0aG9yJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvYWN0aW9ucy9kYXRhLWZldGNoaW5nL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IHsgU2NoZW1hcyB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYXMnXG5pbXBvcnQgeyBBcGlSb290cyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCB7IENBTExfQVBJX09CSiB9IGZyb20gJy4uLy4uL21pZGRsZXdhcmUvYXBpJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uLy4uLy4uL3V0aWxzJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5leHBvcnQgY29uc3QgQk9PS1NfUkVRVUVTVCA9ICdkYXRhLWZldGNoaW5nL2Jvb2tzL1JFUVVFU1QnXG5leHBvcnQgY29uc3QgQk9PS1NfU1VDQ0VTUyA9ICdkYXRhLWZldGNoaW5nL2Jvb2tzL1NVQ0NFU1MnXG5leHBvcnQgY29uc3QgQk9PS1NfRkFJTFVSRSA9ICdkYXRhLWZldGNoaW5nL2Jvb2tzL0ZBSUxVUkUnXG5leHBvcnQgdHlwZSBmZXRjaEJvb2tzID0ge1xuICBwYWdlPzogbnVtYmVyXG4gIG1lcmdlPzogYm9vbGVhblxuICBxPzogc3RyaW5nXG59XG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hCb29rcyhvcHRpb25zPzogZmV0Y2hCb29rcykge1xuICBjb25zdCBkZWZhdWx0Q29uZmlnID0geyBwYWdlOiAxLCBtZXJnZTogZmFsc2UgfVxuICBjb25zdCBtZXJnZWRPcHRpb25zID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q29uZmlnLCBvcHRpb25zIHx8IHt9KVxuICBjb25zdCB7IG1lcmdlLCBxIH0gPSBtZXJnZWRPcHRpb25zXG4gIGxldCBxdWVyeU9wdGlvbnMgPSBfLm9taXQobWVyZ2VkT3B0aW9ucywgWydtZXJnZSddKVxuXG4gIHF1ZXJ5T3B0aW9ucyA9IF8uYXNzaWduKHt9LCBxdWVyeU9wdGlvbnMsIHtcbiAgICBleGNsdWRlOiAnY29udGVudCdcbiAgfSlcblxuICBjb25zdCBxdWVyeVN0cmluZyA9IHV0aWxzLnBhcnNlRm9ybURhdGEocXVlcnlPcHRpb25zKVxuICBjb25zdCBDQUxMX0FQSSA9IHtcbiAgICB0eXBlczogW0JPT0tTX1JFUVVFU1QsIEJPT0tTX1NVQ0NFU1MsIEJPT0tTX0ZBSUxVUkVdLFxuICAgIGVuZHBvaW50OiBgYm9va3M/JHtxdWVyeVN0cmluZ31gLFxuICAgIHNjaGVtYTogU2NoZW1hcy5CT09LX0FSUkFZLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIG5hbWU6ICdib29rcycsXG4gICAgICBtZXJnZSxcbiAgICAgIHF1ZXJ5OiBxXG4gICAgfVxuICB9IGFzIENBTExfQVBJX09CSlxuXG4gIHJldHVybiB7XG4gICAgQ0FMTF9BUElcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hCb29rKGJvb2tJZCwgZmllbGRzPzogQXJyYXk8YW55Pikge1xuICBsZXQgZW5kcG9pbnQgPSBgYm9va3MvJHtib29rSWR9YFxuXG4gIGlmIChmaWVsZHMpIHtcbiAgICBlbmRwb2ludCArPSBgP2ZpZWxkcz0ke2ZpZWxkcy5qb2luKCcsJyl9YFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBib29rSWQsXG4gICAgQ0FMTF9BUEk6IHtcbiAgICAgIHR5cGVzOiBbJ0JPT0tfUkVRVUVTVCcsICdCT09LX1NVQ0NFU1MnLCAnQk9PS19GQUlMVVJFJ10sXG4gICAgICBlbmRwb2ludCxcbiAgICAgIHNjaGVtYTogU2NoZW1hcy5CT09LXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENvbGxlY3Rpb25zKGZsb3dUeXBlOiAnbmV3ZXN0JyB8ICdob3QnID0gJ25ld2VzdCcpIHtcbiAgcmV0dXJuIHtcbiAgICBmbG93VHlwZSxcbiAgICBDQUxMX0FQSToge1xuICAgICAgdHlwZXM6IFsnQ09MTEVDVElPTlNfUkVRVUVTVCcsICdDT0xMRUNUSU9OU19TVUNDRVNTJywgJ0NPTExFQ1RJT05TX0ZBSUxVUkUnXSxcbiAgICAgIGVuZHBvaW50OiBgY29sbGVjdGlvbnNgLFxuICAgICAgc2NoZW1hOiBTY2hlbWFzLkNPTExFQ1RJT05fQVJSQVlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQ29sbGVjdGlvbihjb2xsZWN0aW9uSWQpIHtcbiAgcmV0dXJuIHtcbiAgICBjb2xsZWN0aW9uSWQsXG4gICAgQ0FMTF9BUEk6IHtcbiAgICAgIHR5cGVzOiBbJ0NPTExFQ1RJT05fUkVRVUVTVCcsICdDT0xMRUNUSU9OX1NVQ0NFU1MnLCAnQ09MTEVDVElPTl9GQUlMVVJFJ10sXG4gICAgICBlbmRwb2ludDogYGNvbGxlY3Rpb25zLyR7Y29sbGVjdGlvbklkfWAsXG4gICAgICBzY2hlbWE6IFNjaGVtYXMuQ09MTEVDVElPTlxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgRE9VQkFOX0JPT0tfU0VBUkNIX1JFUVVFU1QgPSAnZGF0YS1mZXRjaGluZy9kb3ViYW4tYm9vay1zZWFyY2gvUkVRVUVTVCdcbmV4cG9ydCBjb25zdCBET1VCQU5fQk9PS19TRUFSQ0hfU1VDQ0VTUyA9ICdkYXRhLWZldGNoaW5nL2RvdWJhbi1ib29rLXNlYXJjaC9TVUNDRVNTJ1xuZXhwb3J0IGNvbnN0IERPVUJBTl9CT09LX1NFQVJDSF9GQUlMVVJFID0gJ2RhdGEtZmV0Y2hpbmcvZG91YmFuLWJvb2stc2VhcmNoL0ZBSUxVUkUnXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoRG91YmFuQm9va3MocXVlcnkpIHtcbiAgY29uc3QgQ0FMTF9BUEk6IENBTExfQVBJX09CSiA9IHtcbiAgICB0eXBlczogW0RPVUJBTl9CT09LX1NFQVJDSF9SRVFVRVNULCBET1VCQU5fQk9PS19TRUFSQ0hfU1VDQ0VTUywgRE9VQkFOX0JPT0tfU0VBUkNIX0ZBSUxVUkVdLFxuICAgIGVuZHBvaW50OiBgc2VhcmNoP2NvdW50PTUmcT0ke3F1ZXJ5fWAsXG4gICAgYXBpVXJsOiBBcGlSb290cy5ET1VCQU5fQk9PS1MsXG4gICAgc2NoZW1hOiBTY2hlbWFzLkRPVUJBTl9CT09LX1NFQVJDSF9SRVNVTFRTLFxuICAgIG9wdGlvbnM6IHsgdXNlSnNvbnA6IHRydWUgfSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBuYW1lOiAnZG91YmFuQm9va3MnLFxuICAgICAgcXVlcnlcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHF1ZXJ5LFxuICAgIENBTExfQVBJXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL2FjdGlvbnMvZGF0YS1mZXRjaGluZy9ib29rLnRzXG4gKiovIiwiaW1wb3J0IHsgU2NoZW1hLCBhcnJheU9mLCBub3JtYWxpemUsIHVuaW9uT2YgfSBmcm9tICdub3JtYWxpenInXG5cbmNvbnN0IGJvb2sgPSBuZXcgU2NoZW1hKCdib29rcycsIHtcbiAgaWRBdHRyaWJ1dGU6ICdpZCdcbn0pXG5cbmNvbnN0IGF1dGhvciA9IG5ldyBTY2hlbWEoJ2F1dGhvcnMnLCB7XG4gIGlkQXR0cmlidXRlOiAnaWQnXG59KVxuXG5jb25zdCBjb2xsZWN0aW9uID0gbmV3IFNjaGVtYSgnYm9va0NvbGxlY3Rpb25zJywge1xuICBpZEF0dHJpYnV0ZTogJ2lkJ1xufSlcblxuY29uc3QgcHJvZmlsZSA9IG5ldyBTY2hlbWEoJ3Byb2ZpbGVzJywge1xuICBpZEF0dHJpYnV0ZTogJ2lkJ1xufSlcblxuY29uc3QgdXNlciA9IG5ldyBTY2hlbWEoJ3VzZXJzJywge1xuICBpZEF0dHJpYnV0ZTogJ2lkJ1xufSlcblxuY29uc3QgZG91YmFuQm9vayA9IG5ldyBTY2hlbWEoJ2RvdWJhbkJvb2tzJywge1xuICBpZEF0dHJpYnV0ZTogJ2lkJ1xufSlcblxuY29uc3QgYm9va1Byb2dyZXNzID0gbmV3IFNjaGVtYSgnYm9va3MnLCB7XG4gIGlkQXR0cmlidXRlOiAnYm9va0lkJ1xufSlcblxuY29uc3QgbWF0Y2hlZEJvb2tzID0gbmV3IFNjaGVtYSgnYm9va3MnLCB7XG4gIGlkQXR0cmlidXRlOiAnYm9va0lkJ1xufSlcblxuZXhwb3J0IGNvbnN0IFNjaGVtYXMgPSB7XG4gIEJPT0s6IGJvb2ssXG4gIEJPT0tfUFJPR1JFU1M6IGJvb2tQcm9ncmVzcyxcbiAgQk9PS19BUlJBWTogYXJyYXlPZihib29rKSxcbiAgRE9VQkFOX0JPT0tfU0VBUkNIX1JFU1VMVFM6IHtib29rczogYXJyYXlPZihkb3ViYW5Cb29rKX0sXG4gIFVTRVJfQVJSQVk6IGFycmF5T2YodXNlciksXG4gIE1BVENIRURfQk9PS19BUlJBWTogYXJyYXlPZihtYXRjaGVkQm9va3MpLFxuICBDT0xMRUNUSU9OOiBjb2xsZWN0aW9uLFxuICBDT0xMRUNUSU9OX0FSUkFZOiBhcnJheU9mKGNvbGxlY3Rpb24pLFxuICBQUk9GSUxFOiBwcm9maWxlLFxuICBBVVRIT1I6IGF1dGhvcixcbiAgQVVUSE9SX0FSUkFZOiBhcnJheU9mKGF1dGhvcilcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3NjaGVtYXMudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KSkoNjgwKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9ub3JtYWxpenIvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfdXRpbHNfZGxsXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX3V0aWxzX2RsbDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiX3V0aWxzX2RsbFwiXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydCBjb25zdCBIT1NUID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgPyB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCdcblxuZXhwb3J0IGNvbnN0IEFwaVJvb3RzID0ge1xuICBMT0NBTDogYCR7SE9TVH0vYXBpL2AsXG4gIERPVUJBTl9CT09LUzogJ2h0dHBzOi8vYXBpLmRvdWJhbi5jb20vdjIvYm9vay8nXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb25maWcudHNcbiAqKi8iLCJpbXBvcnQgcGFyc2VGb3JtRGF0YSBmcm9tICcuL3BhcnNlRm9ybURhdGEnXG5pbXBvcnQgbG9ja1Njcm9sbCBmcm9tICcuL2xvY2tTY3JvbGwnXG5pbXBvcnQgdW5sb2NrU2Nyb2xsIGZyb20gJy4vdW5sb2NrU2Nyb2xsJ1xuaW1wb3J0IGdldFNjcmVlbkluZm8gZnJvbSAnLi9nZXRTY3JlZW5JbmZvJ1xuXG4vLyB0b2RvXG5mdW5jdGlvbiBhZGRaZXJvKG51bSkge1xuICBsZXQgbnVtU3RyV2l0aFplcm9cblxuICBpZiAobnVtIDwgMTApIHtcbiAgICBudW1TdHJXaXRoWmVybyA9ICcwJyArIG51bS50b1N0cmluZygpXG4gIH0gZWxzZSB7XG4gICAgbnVtU3RyV2l0aFplcm8gPSBudW0udG9TdHJpbmcoKVxuICB9XG5cbiAgcmV0dXJuIG51bVN0cldpdGhaZXJvXG59XG5cbi8vIHRvZG9cbmZ1bmN0aW9uIGdldFRpbWUoKSB7XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZSgpXG4gIGNvbnN0IHRpbWUgPSBbZC5nZXRGdWxsWWVhcigpLCBkLmdldE1vbnRoKCksIGQuZ2V0RGF0ZSgpLCBkLmdldEhvdXJzKCksIGQuZ2V0TWludXRlcygpLCBkLmdldFNlY29uZHMoKV1cblxuICByZXR1cm4gdGltZS5tYXAodCA9PiB7XG4gICAgcmV0dXJuIGFkZFplcm8odClcbiAgfSkuam9pbignJylcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwYXJzZUZvcm1EYXRhLFxuICBsb2NrU2Nyb2xsLFxuICB1bmxvY2tTY3JvbGwsXG4gIGdldFNjcmVlbkluZm9cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3V0aWxzL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG4vLyB0b2RvXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvYmplY3RUb1VybGVuY29kZWQob3JpZ2luYWxPYmopIHtcbiAgaWYgKF8uaXNFbXB0eShvcmlnaW5hbE9iaikpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGxldCBvYmplY3QgPSBfLmNsb25lRGVlcChvcmlnaW5hbE9iailcbiAgbGV0IGVuY29kZWR1cmwgPSAnJ1xuXG4gIGZvciAobGV0IHByb3AgaW4gb2JqZWN0KSB7XG4gICAgaWYgKHR5cGVvZiBvYmplY3RbcHJvcF0gPT09ICdvYmplY3QnICYmIG9iamVjdFtwcm9wXSAhPT0gbnVsbCkge1xuICAgICAgb2JqZWN0W3Byb3BdID0gb2JqZWN0W3Byb3BdLnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICBlbmNvZGVkdXJsID0gYCR7ZW5jb2RlZHVybH0ke3Byb3B9PSR7b2JqZWN0W3Byb3BdfSZgXG4gIH1cblxuICByZXR1cm4gZW5jb2RlZHVybC5zdWJzdHIoMCwgZW5jb2RlZHVybC5sZW5ndGggLSAxKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvdXRpbHMvcGFyc2VGb3JtRGF0YS50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMTQpKSg2NzgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9sb2Rhc2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIF91dGlsc19kbGxcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9ja1Njcm9sbCgpIHtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy91dGlscy9sb2NrU2Nyb2xsLnRzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdW5sb2NrU2Nyb2xsKCkge1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy91dGlscy91bmxvY2tTY3JvbGwudHNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JlZW5JbmZvKCk6IHtcbiAgdmlldzogYW55XG4gIHNjcmVlbjogYW55XG59IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS5lcnJvcignd2luZG93IGlzIHVuZGVmaW5lZCwgZW1wdHkgaW5mbyBvYmplY3Qgd2lsbCBiZSByZXR1cm5lZCEnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZpZXc6IHt9LFxuICAgICAgc2NyZWVuOiB7fVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmlldzoge1xuICAgICAgd2lkdGg6ICB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgYXNwZWN0UmF0aW86IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgfSxcbiAgICBzY3JlZW46IHdpbmRvdy5zY3JlZW5cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvdXRpbHMvZ2V0U2NyZWVuSW5mby50c1xuICoqLyIsImltcG9ydCB7IFNjaGVtYXMgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWFzJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlckF1dGgodXNlclNlc3Npb24/KTogT2JqZWN0IHtcbiAgLy8g5pyN5Yqh56uv5riy5p+TIHNlc3Npb25cbiAgaWYgKHVzZXJTZXNzaW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFNFUlZFUl9TVE9SRToge1xuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgcmVzcG9uc2U6IHVzZXJTZXNzaW9uLFxuICAgICAgICAgIHR5cGU6ICdVU0VSX0FVVEhfU1VDQ0VTUydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgQ0FMTF9BUEk6IHtcbiAgICAgIHR5cGVzOiBbJ1VTRVJfQVVUSF9SRVFVRVNUJywgJ1VTRVJfQVVUSF9TVUNDRVNTJywgJ1VTRVJfQVVUSF9GQUlMVVJFJ10sXG4gICAgICBlbmRwb2ludDogJ2F1dGgnXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFByb2ZpbGUoKSB7XG4gIHJldHVybiB7XG4gICAgcGF5bG9hZDogJ3Byb2ZpbGUnLFxuICAgIENBTExfQVBJOiB7XG4gICAgICB0eXBlczogWydQUk9GSUxFX1JFUVVFU1QnLCAnUFJPRklMRV9TVUNDRVNTJywgJ1BST0ZJTEVfRkFJTFVSRSddLFxuICAgICAgZW5kcG9pbnQ6IGB1c2VyL3Byb2ZpbGVgLFxuICAgIH1cbiAgfVxufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZmV0Y2hQdWJsaWNQcm9maWxlKCkge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIENBTExfQVBJOiB7XG4vLyAgICAgICB0eXBlczogWydQUk9GSUxFX1JFUVVFU1QnLCAnUFJPRklMRV9TVUNDRVNTJywgJ1BST0ZJTEVfRkFJTFVSRSddLFxuLy8gICAgICAgZW5kcG9pbnQ6IGB1c2VyL3Byb2ZpbGVgLFxuLy8gICAgICAgc2NoZW1hOiBTY2hlbWFzLlBST0ZJTEVcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGZldGNoU2hlbGYodXNlcklkKSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgdXNlcklkLFxuLy8gICAgIENBTExfQVBJOiB7XG4vLyAgICAgICB0eXBlczogWydTSEVMRl9SRVFVRVNUJywgJ1NIRUxGX1NVQ0NFU1MnLCAnU0hFTEZfRkFJTFVSRSddLFxuLy8gICAgICAgZW5kcG9pbnQ6IGB1c2Vycy8ke3VzZXJJZH0vc2hlbGZgLFxuLy8gICAgICAgc2NoZW1hOiBTY2hlbWFzLkJPT0tfQVJSQVksXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFNoZWxmKCkge1xuICByZXR1cm4ge1xuICAgIHBheWxvYWQ6ICdib29rU2hlbGYnLFxuICAgIENBTExfQVBJOiB7XG4gICAgICB0eXBlczogWydTSEVMRl9SRVFVRVNUJywgJ1NIRUxGX1NVQ0NFU1MnLCAnU0hFTEZfRkFJTFVSRSddLFxuICAgICAgZW5kcG9pbnQ6IGB1c2VyL2Jvb2tzL3NoZWxmYCxcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUHJvZ3Jlc3MoYm9va0lkKSB7XG4gIHJldHVybiB7XG4gICAgYm9va0lkLFxuICAgIHBheWxvYWQ6ICdwcm9ncmVzcycsXG4gICAgQ0FMTF9BUEk6IHtcbiAgICAgIHR5cGVzOiBbJ1BST0dSRVNTX1JFUVVFU1QnLCAnUFJPR1JFU1NfU1VDQ0VTUycsICdQUk9HUkVTU19GQUlMVVJFJ10sXG4gICAgICBlbmRwb2ludDogYHVzZXIvYm9va3MvJHtib29rSWR9L3Byb2dyZXNzYCxcbiAgICAgIC8vIHNjaGVtYTogU2NoZW1hcy5CT09LX1BST0dSRVNTXG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9hY3Rpb25zL2RhdGEtZmV0Y2hpbmcvdXNlci50c1xuICoqLyIsImltcG9ydCB7IFNjaGVtYXMgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWFzJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uLy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgQ0FMTF9BUElfT0JKIH0gZnJvbSAnLi4vLi4vbWlkZGxld2FyZS9hcGknXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmV4cG9ydCBjb25zdCBVU0VSU19SRVFVRVNUID0gJ2RhdGEtZmV0Y2hpbmcvdXNlcnMvUkVRVUVTVCdcbmV4cG9ydCBjb25zdCBVU0VSU19TVUNDRVNTID0gJ2RhdGEtZmV0Y2hpbmcvdXNlcnMvU1VDQ0VTUydcbmV4cG9ydCBjb25zdCBVU0VSU19GQUlMVVJFID0gJ2RhdGEtZmV0Y2hpbmcvdXNlcnMvRkFJTFVSRSdcbmV4cG9ydCB0eXBlIGZldGNoVXNlcnMgPSB7XG4gIGFwaT86IHsgcT86IHN0cmluZywgcGFnZT86IG51bWJlciB9LFxuICBtZXJnZT86IGJvb2xlYW5cbn1cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFVzZXJzKG9wdGlvbnM6IGZldGNoVXNlcnMgPSB7fSkge1xuICBjb25zdCBxdWVyeVN0cmluZyA9IHV0aWxzLnBhcnNlRm9ybURhdGEob3B0aW9ucy5hcGkpXG5cbiAgY29uc3QgQ0FMTF9BUEkgPSB7XG4gICAgdHlwZXM6IFtVU0VSU19SRVFVRVNULCBVU0VSU19TVUNDRVNTLCBVU0VSU19GQUlMVVJFXSxcbiAgICBlbmRwb2ludDogYHVzZXJzPyR7cXVlcnlTdHJpbmd9YCxcbiAgICBzY2hlbWE6IFNjaGVtYXMuVVNFUl9BUlJBWSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBuYW1lOiAndXNlcnMnLFxuICAgICAgbWVyZ2U6IG9wdGlvbnMubWVyZ2UsXG4gICAgICBxdWVyeTogXy5nZXQob3B0aW9ucywgJ2FwaS5xJywgJycpXG4gICAgfVxuICB9IGFzIENBTExfQVBJX09CSlxuXG4gIHJldHVybiB7IENBTExfQVBJIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL2FjdGlvbnMvZGF0YS1mZXRjaGluZy91c2Vycy50c1xuICoqLyIsImltcG9ydCB7IFNjaGVtYXMgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWFzJ1xuaW1wb3J0IHsgQ0FMTF9BUElfT0JKIH0gZnJvbSAnLi4vLi4vbWlkZGxld2FyZS9hcGknXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBBVVRIT1JfUkVRVUVTVCA9ICdkYXRhLWZldGNoaW5nL2F1dGhvcnMvUkVRVUVTVCdcbmV4cG9ydCBjb25zdCBBVVRIT1JfU1VDQ0VTUyA9ICdkYXRhLWZldGNoaW5nL2F1dGhvcnMvU1VDQ0VTUydcbmV4cG9ydCBjb25zdCBBVVRIT1JfRkFJTFVSRSA9ICdkYXRhLWZldGNoaW5nL2F1dGhvcnMvRkFJTFVSRSdcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEF1dGhvcnMob3B0aW9ucykge1xuICBjb25zdCBDQUxMX0FQSTogQ0FMTF9BUElfT0JKID0ge1xuICAgIHR5cGVzOiBbQVVUSE9SX1JFUVVFU1QsIEFVVEhPUl9TVUNDRVNTLCBBVVRIT1JfRkFJTFVSRV0sXG4gICAgZW5kcG9pbnQ6IGBhdXRob3JzPyR7dXRpbHMucGFyc2VGb3JtRGF0YShvcHRpb25zKX1gLFxuICAgIHNjaGVtYTogU2NoZW1hcy5BVVRIT1JfQVJSQVksXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgbmFtZTogJ2F1dGhvcnMnLFxuICAgICAgcXVlcnk6IG9wdGlvbnMucVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgQ0FMTF9BUElcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvYWN0aW9ucy9kYXRhLWZldGNoaW5nL2F1dGhvci50c1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VWYWx1ZShuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdDSEFOR0VfVkFMVUUnLFxuICAgIG5hbWUsXG4gICAgdmFsdWVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRWxlbWVudChuYW1lLCBkYXRhKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1VQREFURV9FTEVNRU5UJyxcbiAgICBuYW1lLFxuICAgIGRhdGFcbiAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL2FjdGlvbnMvZGVwcmVjYXRlZEFjdGlvbnMudHNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnVudG91Y2hXaXRoS2V5ID0gZXhwb3J0cy51bnRvdWNoID0gZXhwb3J0cy50b3VjaFdpdGhLZXkgPSBleHBvcnRzLnRvdWNoID0gZXhwb3J0cy5zd2FwQXJyYXlWYWx1ZXMgPSBleHBvcnRzLnN0b3BTdWJtaXQgPSBleHBvcnRzLnN0b3BBc3luY1ZhbGlkYXRpb24gPSBleHBvcnRzLnN0YXJ0U3VibWl0ID0gZXhwb3J0cy5zdGFydEFzeW5jVmFsaWRhdGlvbiA9IGV4cG9ydHMucmVzZXQgPSBleHBvcnRzLnByb3BUeXBlcyA9IGV4cG9ydHMuaW5pdGlhbGl6ZVdpdGhLZXkgPSBleHBvcnRzLmluaXRpYWxpemUgPSBleHBvcnRzLmdldFZhbHVlcyA9IGV4cG9ydHMucmVtb3ZlQXJyYXlWYWx1ZSA9IGV4cG9ydHMucmVkdXhGb3JtID0gZXhwb3J0cy5yZWR1Y2VyID0gZXhwb3J0cy5mb2N1cyA9IGV4cG9ydHMuZGVzdHJveSA9IGV4cG9ydHMuY2hhbmdlV2l0aEtleSA9IGV4cG9ydHMuY2hhbmdlID0gZXhwb3J0cy5ibHVyID0gZXhwb3J0cy5hdXRvZmlsbFdpdGhLZXkgPSBleHBvcnRzLmF1dG9maWxsID0gZXhwb3J0cy5hZGRBcnJheVZhbHVlID0gZXhwb3J0cy5hY3Rpb25UeXBlcyA9IHVuZGVmaW5lZDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG52YXIgX2NyZWF0ZUFsbDIgPSByZXF1aXJlKCcuL2NyZWF0ZUFsbCcpO1xuXG52YXIgX2NyZWF0ZUFsbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVBbGwyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGlzTmF0aXZlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLnByb2R1Y3QgJiYgd2luZG93Lm5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnO1xuXG52YXIgX2NyZWF0ZUFsbCA9ICgwLCBfY3JlYXRlQWxsMy5kZWZhdWx0KShpc05hdGl2ZSwgX3JlYWN0Mi5kZWZhdWx0LCBfcmVhY3RSZWR1eC5jb25uZWN0KTtcblxudmFyIGFjdGlvblR5cGVzID0gX2NyZWF0ZUFsbC5hY3Rpb25UeXBlcztcbnZhciBhZGRBcnJheVZhbHVlID0gX2NyZWF0ZUFsbC5hZGRBcnJheVZhbHVlO1xudmFyIGF1dG9maWxsID0gX2NyZWF0ZUFsbC5hdXRvZmlsbDtcbnZhciBhdXRvZmlsbFdpdGhLZXkgPSBfY3JlYXRlQWxsLmF1dG9maWxsV2l0aEtleTtcbnZhciBibHVyID0gX2NyZWF0ZUFsbC5ibHVyO1xudmFyIGNoYW5nZSA9IF9jcmVhdGVBbGwuY2hhbmdlO1xudmFyIGNoYW5nZVdpdGhLZXkgPSBfY3JlYXRlQWxsLmNoYW5nZVdpdGhLZXk7XG52YXIgZGVzdHJveSA9IF9jcmVhdGVBbGwuZGVzdHJveTtcbnZhciBmb2N1cyA9IF9jcmVhdGVBbGwuZm9jdXM7XG52YXIgcmVkdWNlciA9IF9jcmVhdGVBbGwucmVkdWNlcjtcbnZhciByZWR1eEZvcm0gPSBfY3JlYXRlQWxsLnJlZHV4Rm9ybTtcbnZhciByZW1vdmVBcnJheVZhbHVlID0gX2NyZWF0ZUFsbC5yZW1vdmVBcnJheVZhbHVlO1xudmFyIGdldFZhbHVlcyA9IF9jcmVhdGVBbGwuZ2V0VmFsdWVzO1xudmFyIGluaXRpYWxpemUgPSBfY3JlYXRlQWxsLmluaXRpYWxpemU7XG52YXIgaW5pdGlhbGl6ZVdpdGhLZXkgPSBfY3JlYXRlQWxsLmluaXRpYWxpemVXaXRoS2V5O1xudmFyIHByb3BUeXBlcyA9IF9jcmVhdGVBbGwucHJvcFR5cGVzO1xudmFyIHJlc2V0ID0gX2NyZWF0ZUFsbC5yZXNldDtcbnZhciBzdGFydEFzeW5jVmFsaWRhdGlvbiA9IF9jcmVhdGVBbGwuc3RhcnRBc3luY1ZhbGlkYXRpb247XG52YXIgc3RhcnRTdWJtaXQgPSBfY3JlYXRlQWxsLnN0YXJ0U3VibWl0O1xudmFyIHN0b3BBc3luY1ZhbGlkYXRpb24gPSBfY3JlYXRlQWxsLnN0b3BBc3luY1ZhbGlkYXRpb247XG52YXIgc3RvcFN1Ym1pdCA9IF9jcmVhdGVBbGwuc3RvcFN1Ym1pdDtcbnZhciBzd2FwQXJyYXlWYWx1ZXMgPSBfY3JlYXRlQWxsLnN3YXBBcnJheVZhbHVlcztcbnZhciB0b3VjaCA9IF9jcmVhdGVBbGwudG91Y2g7XG52YXIgdG91Y2hXaXRoS2V5ID0gX2NyZWF0ZUFsbC50b3VjaFdpdGhLZXk7XG52YXIgdW50b3VjaCA9IF9jcmVhdGVBbGwudW50b3VjaDtcbnZhciB1bnRvdWNoV2l0aEtleSA9IF9jcmVhdGVBbGwudW50b3VjaFdpdGhLZXk7XG5leHBvcnRzLmFjdGlvblR5cGVzID0gYWN0aW9uVHlwZXM7XG5leHBvcnRzLmFkZEFycmF5VmFsdWUgPSBhZGRBcnJheVZhbHVlO1xuZXhwb3J0cy5hdXRvZmlsbCA9IGF1dG9maWxsO1xuZXhwb3J0cy5hdXRvZmlsbFdpdGhLZXkgPSBhdXRvZmlsbFdpdGhLZXk7XG5leHBvcnRzLmJsdXIgPSBibHVyO1xuZXhwb3J0cy5jaGFuZ2UgPSBjaGFuZ2U7XG5leHBvcnRzLmNoYW5nZVdpdGhLZXkgPSBjaGFuZ2VXaXRoS2V5O1xuZXhwb3J0cy5kZXN0cm95ID0gZGVzdHJveTtcbmV4cG9ydHMuZm9jdXMgPSBmb2N1cztcbmV4cG9ydHMucmVkdWNlciA9IHJlZHVjZXI7XG5leHBvcnRzLnJlZHV4Rm9ybSA9IHJlZHV4Rm9ybTtcbmV4cG9ydHMucmVtb3ZlQXJyYXlWYWx1ZSA9IHJlbW92ZUFycmF5VmFsdWU7XG5leHBvcnRzLmdldFZhbHVlcyA9IGdldFZhbHVlcztcbmV4cG9ydHMuaW5pdGlhbGl6ZSA9IGluaXRpYWxpemU7XG5leHBvcnRzLmluaXRpYWxpemVXaXRoS2V5ID0gaW5pdGlhbGl6ZVdpdGhLZXk7XG5leHBvcnRzLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbmV4cG9ydHMucmVzZXQgPSByZXNldDtcbmV4cG9ydHMuc3RhcnRBc3luY1ZhbGlkYXRpb24gPSBzdGFydEFzeW5jVmFsaWRhdGlvbjtcbmV4cG9ydHMuc3RhcnRTdWJtaXQgPSBzdGFydFN1Ym1pdDtcbmV4cG9ydHMuc3RvcEFzeW5jVmFsaWRhdGlvbiA9IHN0b3BBc3luY1ZhbGlkYXRpb247XG5leHBvcnRzLnN0b3BTdWJtaXQgPSBzdG9wU3VibWl0O1xuZXhwb3J0cy5zd2FwQXJyYXlWYWx1ZXMgPSBzd2FwQXJyYXlWYWx1ZXM7XG5leHBvcnRzLnRvdWNoID0gdG91Y2g7XG5leHBvcnRzLnRvdWNoV2l0aEtleSA9IHRvdWNoV2l0aEtleTtcbmV4cG9ydHMudW50b3VjaCA9IHVudG91Y2g7XG5leHBvcnRzLnVudG91Y2hXaXRoS2V5ID0gdW50b3VjaFdpdGhLZXk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVBbGw7XG5cbnZhciBfcmVkdWNlciA9IHJlcXVpcmUoJy4vcmVkdWNlcicpO1xuXG52YXIgX3JlZHVjZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVkdWNlcik7XG5cbnZhciBfY3JlYXRlUmVkdXhGb3JtID0gcmVxdWlyZSgnLi9jcmVhdGVSZWR1eEZvcm0nKTtcblxudmFyIF9jcmVhdGVSZWR1eEZvcm0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlUmVkdXhGb3JtKTtcblxudmFyIF9tYXBWYWx1ZXMgPSByZXF1aXJlKCcuL21hcFZhbHVlcycpO1xuXG52YXIgX21hcFZhbHVlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXBWYWx1ZXMpO1xuXG52YXIgX2JpbmRBY3Rpb25EYXRhID0gcmVxdWlyZSgnLi9iaW5kQWN0aW9uRGF0YScpO1xuXG52YXIgX2JpbmRBY3Rpb25EYXRhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JpbmRBY3Rpb25EYXRhKTtcblxudmFyIF9hY3Rpb25zID0gcmVxdWlyZSgnLi9hY3Rpb25zJyk7XG5cbnZhciBhY3Rpb25zID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2FjdGlvbnMpO1xuXG52YXIgX2FjdGlvblR5cGVzID0gcmVxdWlyZSgnLi9hY3Rpb25UeXBlcycpO1xuXG52YXIgYWN0aW9uVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfYWN0aW9uVHlwZXMpO1xuXG52YXIgX2NyZWF0ZVByb3BUeXBlcyA9IHJlcXVpcmUoJy4vY3JlYXRlUHJvcFR5cGVzJyk7XG5cbnZhciBfY3JlYXRlUHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVByb3BUeXBlcyk7XG5cbnZhciBfZ2V0VmFsdWVzRnJvbVN0YXRlID0gcmVxdWlyZSgnLi9nZXRWYWx1ZXNGcm9tU3RhdGUnKTtcblxudmFyIF9nZXRWYWx1ZXNGcm9tU3RhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0VmFsdWVzRnJvbVN0YXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gYmluZCBmb3JtIGFzIGZpcnN0IHBhcmFtZXRlciBvZiBhY3Rpb24gY3JlYXRvcnNcbnZhciBib3VuZEFjdGlvbnMgPSBfZXh0ZW5kcyh7fSwgKDAsIF9tYXBWYWx1ZXMyLmRlZmF1bHQpKF9leHRlbmRzKHt9LCBhY3Rpb25zLCB7XG4gIGF1dG9maWxsV2l0aEtleTogZnVuY3Rpb24gYXV0b2ZpbGxXaXRoS2V5KGtleSkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuICgwLCBfYmluZEFjdGlvbkRhdGEyLmRlZmF1bHQpKGFjdGlvbnMuYXV0b2ZpbGwsIHsga2V5OiBrZXkgfSkuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfSxcbiAgY2hhbmdlV2l0aEtleTogZnVuY3Rpb24gY2hhbmdlV2l0aEtleShrZXkpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiAoMCwgX2JpbmRBY3Rpb25EYXRhMi5kZWZhdWx0KShhY3Rpb25zLmNoYW5nZSwgeyBrZXk6IGtleSB9KS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICB9LFxuICBpbml0aWFsaXplV2l0aEtleTogZnVuY3Rpb24gaW5pdGlhbGl6ZVdpdGhLZXkoa2V5KSB7XG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjMgPiAxID8gX2xlbjMgLSAxIDogMCksIF9rZXkzID0gMTsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgYXJnc1tfa2V5MyAtIDFdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9iaW5kQWN0aW9uRGF0YTIuZGVmYXVsdCkoYWN0aW9ucy5pbml0aWFsaXplLCB7IGtleToga2V5IH0pLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH0sXG4gIHJlc2V0OiBmdW5jdGlvbiByZXNldChrZXkpIHtcbiAgICByZXR1cm4gKDAsIF9iaW5kQWN0aW9uRGF0YTIuZGVmYXVsdCkoYWN0aW9ucy5yZXNldCwgeyBrZXk6IGtleSB9KSgpO1xuICB9LFxuICB0b3VjaFdpdGhLZXk6IGZ1bmN0aW9uIHRvdWNoV2l0aEtleShrZXkpIHtcbiAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuNCA+IDEgPyBfbGVuNCAtIDEgOiAwKSwgX2tleTQgPSAxOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICBhcmdzW19rZXk0IC0gMV0gPSBhcmd1bWVudHNbX2tleTRdO1xuICAgIH1cblxuICAgIHJldHVybiAoMCwgX2JpbmRBY3Rpb25EYXRhMi5kZWZhdWx0KShhY3Rpb25zLnRvdWNoLCB7IGtleToga2V5IH0pLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH0sXG4gIHVudG91Y2hXaXRoS2V5OiBmdW5jdGlvbiB1bnRvdWNoV2l0aEtleShrZXkpIHtcbiAgICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuNSA+IDEgPyBfbGVuNSAtIDEgOiAwKSwgX2tleTUgPSAxOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgICBhcmdzW19rZXk1IC0gMV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICAgIH1cblxuICAgIHJldHVybiAoMCwgX2JpbmRBY3Rpb25EYXRhMi5kZWZhdWx0KShhY3Rpb25zLnVudG91Y2gsIHsga2V5OiBrZXkgfSkuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveShrZXkpIHtcbiAgICByZXR1cm4gKDAsIF9iaW5kQWN0aW9uRGF0YTIuZGVmYXVsdCkoYWN0aW9ucy5kZXN0cm95LCB7IGtleToga2V5IH0pKCk7XG4gIH1cbn0pLCBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZm9ybSkge1xuICAgIGZvciAodmFyIF9sZW42ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW42ID4gMSA/IF9sZW42IC0gMSA6IDApLCBfa2V5NiA9IDE7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICAgIGFyZ3NbX2tleTYgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Nl07XG4gICAgfVxuXG4gICAgcmV0dXJuICgwLCBfYmluZEFjdGlvbkRhdGEyLmRlZmF1bHQpKGFjdGlvbiwgeyBmb3JtOiBmb3JtIH0pLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH07XG59KSk7XG5cbnZhciBhZGRBcnJheVZhbHVlID0gYm91bmRBY3Rpb25zLmFkZEFycmF5VmFsdWU7XG52YXIgYXV0b2ZpbGwgPSBib3VuZEFjdGlvbnMuYXV0b2ZpbGw7XG52YXIgYXV0b2ZpbGxXaXRoS2V5ID0gYm91bmRBY3Rpb25zLmF1dG9maWxsV2l0aEtleTtcbnZhciBibHVyID0gYm91bmRBY3Rpb25zLmJsdXI7XG52YXIgY2hhbmdlID0gYm91bmRBY3Rpb25zLmNoYW5nZTtcbnZhciBjaGFuZ2VXaXRoS2V5ID0gYm91bmRBY3Rpb25zLmNoYW5nZVdpdGhLZXk7XG52YXIgZGVzdHJveSA9IGJvdW5kQWN0aW9ucy5kZXN0cm95O1xudmFyIGZvY3VzID0gYm91bmRBY3Rpb25zLmZvY3VzO1xudmFyIGluaXRpYWxpemUgPSBib3VuZEFjdGlvbnMuaW5pdGlhbGl6ZTtcbnZhciBpbml0aWFsaXplV2l0aEtleSA9IGJvdW5kQWN0aW9ucy5pbml0aWFsaXplV2l0aEtleTtcbnZhciByZW1vdmVBcnJheVZhbHVlID0gYm91bmRBY3Rpb25zLnJlbW92ZUFycmF5VmFsdWU7XG52YXIgcmVzZXQgPSBib3VuZEFjdGlvbnMucmVzZXQ7XG52YXIgc3RhcnRBc3luY1ZhbGlkYXRpb24gPSBib3VuZEFjdGlvbnMuc3RhcnRBc3luY1ZhbGlkYXRpb247XG52YXIgc3RhcnRTdWJtaXQgPSBib3VuZEFjdGlvbnMuc3RhcnRTdWJtaXQ7XG52YXIgc3RvcEFzeW5jVmFsaWRhdGlvbiA9IGJvdW5kQWN0aW9ucy5zdG9wQXN5bmNWYWxpZGF0aW9uO1xudmFyIHN0b3BTdWJtaXQgPSBib3VuZEFjdGlvbnMuc3RvcFN1Ym1pdDtcbnZhciBzdWJtaXRGYWlsZWQgPSBib3VuZEFjdGlvbnMuc3VibWl0RmFpbGVkO1xudmFyIHN3YXBBcnJheVZhbHVlcyA9IGJvdW5kQWN0aW9ucy5zd2FwQXJyYXlWYWx1ZXM7XG52YXIgdG91Y2ggPSBib3VuZEFjdGlvbnMudG91Y2g7XG52YXIgdG91Y2hXaXRoS2V5ID0gYm91bmRBY3Rpb25zLnRvdWNoV2l0aEtleTtcbnZhciB1bnRvdWNoID0gYm91bmRBY3Rpb25zLnVudG91Y2g7XG52YXIgdW50b3VjaFdpdGhLZXkgPSBib3VuZEFjdGlvbnMudW50b3VjaFdpdGhLZXk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFsbChpc1JlYWN0TmF0aXZlLCBSZWFjdCwgY29ubmVjdCkge1xuICByZXR1cm4ge1xuICAgIGFjdGlvblR5cGVzOiBhY3Rpb25UeXBlcyxcbiAgICBhZGRBcnJheVZhbHVlOiBhZGRBcnJheVZhbHVlLFxuICAgIGF1dG9maWxsOiBhdXRvZmlsbCxcbiAgICBhdXRvZmlsbFdpdGhLZXk6IGF1dG9maWxsV2l0aEtleSxcbiAgICBibHVyOiBibHVyLFxuICAgIGNoYW5nZTogY2hhbmdlLFxuICAgIGNoYW5nZVdpdGhLZXk6IGNoYW5nZVdpdGhLZXksXG4gICAgZGVzdHJveTogZGVzdHJveSxcbiAgICBmb2N1czogZm9jdXMsXG4gICAgZ2V0VmFsdWVzOiBfZ2V0VmFsdWVzRnJvbVN0YXRlMi5kZWZhdWx0LFxuICAgIGluaXRpYWxpemU6IGluaXRpYWxpemUsXG4gICAgaW5pdGlhbGl6ZVdpdGhLZXk6IGluaXRpYWxpemVXaXRoS2V5LFxuICAgIHByb3BUeXBlczogKDAsIF9jcmVhdGVQcm9wVHlwZXMyLmRlZmF1bHQpKFJlYWN0KSxcbiAgICByZWR1eEZvcm06ICgwLCBfY3JlYXRlUmVkdXhGb3JtMi5kZWZhdWx0KShpc1JlYWN0TmF0aXZlLCBSZWFjdCwgY29ubmVjdCksXG4gICAgcmVkdWNlcjogX3JlZHVjZXIyLmRlZmF1bHQsXG4gICAgcmVtb3ZlQXJyYXlWYWx1ZTogcmVtb3ZlQXJyYXlWYWx1ZSxcbiAgICByZXNldDogcmVzZXQsXG4gICAgc3RhcnRBc3luY1ZhbGlkYXRpb246IHN0YXJ0QXN5bmNWYWxpZGF0aW9uLFxuICAgIHN0YXJ0U3VibWl0OiBzdGFydFN1Ym1pdCxcbiAgICBzdG9wQXN5bmNWYWxpZGF0aW9uOiBzdG9wQXN5bmNWYWxpZGF0aW9uLFxuICAgIHN0b3BTdWJtaXQ6IHN0b3BTdWJtaXQsXG4gICAgc3VibWl0RmFpbGVkOiBzdWJtaXRGYWlsZWQsXG4gICAgc3dhcEFycmF5VmFsdWVzOiBzd2FwQXJyYXlWYWx1ZXMsXG4gICAgdG91Y2g6IHRvdWNoLFxuICAgIHRvdWNoV2l0aEtleTogdG91Y2hXaXRoS2V5LFxuICAgIHVudG91Y2g6IHVudG91Y2gsXG4gICAgdW50b3VjaFdpdGhLZXk6IHVudG91Y2hXaXRoS2V5XG4gIH07XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvY3JlYXRlQWxsLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuaW5pdGlhbFN0YXRlID0gZXhwb3J0cy5nbG9iYWxFcnJvcktleSA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9pbml0aWFsU3RhdGUsIF9iZWhhdmlvcnM7XG5cbnZhciBfYWN0aW9uVHlwZXMgPSByZXF1aXJlKCcuL2FjdGlvblR5cGVzJyk7XG5cbnZhciBfbWFwVmFsdWVzID0gcmVxdWlyZSgnLi9tYXBWYWx1ZXMnKTtcblxudmFyIF9tYXBWYWx1ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFwVmFsdWVzKTtcblxudmFyIF9yZWFkID0gcmVxdWlyZSgnLi9yZWFkJyk7XG5cbnZhciBfcmVhZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFkKTtcblxudmFyIF93cml0ZSA9IHJlcXVpcmUoJy4vd3JpdGUnKTtcblxudmFyIF93cml0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93cml0ZSk7XG5cbnZhciBfZ2V0VmFsdWVzRnJvbVN0YXRlID0gcmVxdWlyZSgnLi9nZXRWYWx1ZXNGcm9tU3RhdGUnKTtcblxudmFyIF9nZXRWYWx1ZXNGcm9tU3RhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0VmFsdWVzRnJvbVN0YXRlKTtcblxudmFyIF9pbml0aWFsaXplU3RhdGUgPSByZXF1aXJlKCcuL2luaXRpYWxpemVTdGF0ZScpO1xuXG52YXIgX2luaXRpYWxpemVTdGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbml0aWFsaXplU3RhdGUpO1xuXG52YXIgX3Jlc2V0U3RhdGUgPSByZXF1aXJlKCcuL3Jlc2V0U3RhdGUnKTtcblxudmFyIF9yZXNldFN0YXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Jlc2V0U3RhdGUpO1xuXG52YXIgX3NldEVycm9ycyA9IHJlcXVpcmUoJy4vc2V0RXJyb3JzJyk7XG5cbnZhciBfc2V0RXJyb3JzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldEVycm9ycyk7XG5cbnZhciBfZmllbGRWYWx1ZSA9IHJlcXVpcmUoJy4vZmllbGRWYWx1ZScpO1xuXG52YXIgX25vcm1hbGl6ZUZpZWxkcyA9IHJlcXVpcmUoJy4vbm9ybWFsaXplRmllbGRzJyk7XG5cbnZhciBfbm9ybWFsaXplRmllbGRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX25vcm1hbGl6ZUZpZWxkcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIGdsb2JhbEVycm9yS2V5ID0gZXhwb3J0cy5nbG9iYWxFcnJvcktleSA9ICdfZXJyb3InO1xuXG52YXIgaW5pdGlhbFN0YXRlID0gZXhwb3J0cy5pbml0aWFsU3RhdGUgPSAoX2luaXRpYWxTdGF0ZSA9IHtcbiAgX2FjdGl2ZTogdW5kZWZpbmVkLFxuICBfYXN5bmNWYWxpZGF0aW5nOiBmYWxzZVxufSwgX2luaXRpYWxTdGF0ZVtnbG9iYWxFcnJvcktleV0gPSB1bmRlZmluZWQsIF9pbml0aWFsU3RhdGUuX2luaXRpYWxpemVkID0gZmFsc2UsIF9pbml0aWFsU3RhdGUuX3N1Ym1pdHRpbmcgPSBmYWxzZSwgX2luaXRpYWxTdGF0ZS5fc3VibWl0RmFpbGVkID0gZmFsc2UsIF9pbml0aWFsU3RhdGUpO1xuXG52YXIgYmVoYXZpb3JzID0gKF9iZWhhdmlvcnMgPSB7fSwgX2JlaGF2aW9yc1tfYWN0aW9uVHlwZXMuQUREX0FSUkFZX1ZBTFVFXSA9IGZ1bmN0aW9uIChzdGF0ZSwgX3JlZikge1xuICB2YXIgcGF0aCA9IF9yZWYucGF0aDtcbiAgdmFyIGluZGV4ID0gX3JlZi5pbmRleDtcbiAgdmFyIHZhbHVlID0gX3JlZi52YWx1ZTtcbiAgdmFyIGZpZWxkcyA9IF9yZWYuZmllbGRzO1xuXG4gIHZhciBhcnJheSA9ICgwLCBfcmVhZDIuZGVmYXVsdCkocGF0aCwgc3RhdGUpO1xuICB2YXIgc3RhdGVDb3B5ID0gX2V4dGVuZHMoe30sIHN0YXRlKTtcbiAgdmFyIGFycmF5Q29weSA9IGFycmF5ID8gW10uY29uY2F0KGFycmF5KSA6IFtdO1xuICB2YXIgbmV3VmFsdWUgPSB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gKDAsIF9pbml0aWFsaXplU3RhdGUyLmRlZmF1bHQpKHZhbHVlLCBmaWVsZHMgfHwgT2JqZWN0LmtleXModmFsdWUpKSA6ICgwLCBfZmllbGRWYWx1ZS5tYWtlRmllbGRWYWx1ZSkoeyB2YWx1ZTogdmFsdWUgfSk7XG4gIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXlDb3B5LnB1c2gobmV3VmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGFycmF5Q29weS5zcGxpY2UoaW5kZXgsIDAsIG5ld1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gKDAsIF93cml0ZTIuZGVmYXVsdCkocGF0aCwgYXJyYXlDb3B5LCBzdGF0ZUNvcHkpO1xufSwgX2JlaGF2aW9yc1tfYWN0aW9uVHlwZXMuQVVUT0ZJTExdID0gZnVuY3Rpb24gKHN0YXRlLCBfcmVmMikge1xuICB2YXIgZmllbGQgPSBfcmVmMi5maWVsZDtcbiAgdmFyIHZhbHVlID0gX3JlZjIudmFsdWU7XG5cbiAgcmV0dXJuICgwLCBfd3JpdGUyLmRlZmF1bHQpKGZpZWxkLCBmdW5jdGlvbiAocHJldmlvdXMpIHtcbiAgICB2YXIgX3ByZXZpb3VzJHZhbHVlJGF1dG9mID0gX2V4dGVuZHMoe30sIHByZXZpb3VzLCB7IHZhbHVlOiB2YWx1ZSwgYXV0b2ZpbGxlZDogdHJ1ZSB9KTtcblxuICAgIHZhciBhc3luY0Vycm9yID0gX3ByZXZpb3VzJHZhbHVlJGF1dG9mLmFzeW5jRXJyb3I7XG4gICAgdmFyIHN1Ym1pdEVycm9yID0gX3ByZXZpb3VzJHZhbHVlJGF1dG9mLnN1Ym1pdEVycm9yO1xuXG4gICAgdmFyIHJlc3VsdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJldmlvdXMkdmFsdWUkYXV0b2YsIFsnYXN5bmNFcnJvcicsICdzdWJtaXRFcnJvciddKTtcblxuICAgIHJldHVybiAoMCwgX2ZpZWxkVmFsdWUubWFrZUZpZWxkVmFsdWUpKHJlc3VsdCk7XG4gIH0sIHN0YXRlKTtcbn0sIF9iZWhhdmlvcnNbX2FjdGlvblR5cGVzLkJMVVJdID0gZnVuY3Rpb24gKHN0YXRlLCBfcmVmMykge1xuICB2YXIgZmllbGQgPSBfcmVmMy5maWVsZDtcbiAgdmFyIHZhbHVlID0gX3JlZjMudmFsdWU7XG4gIHZhciB0b3VjaCA9IF9yZWYzLnRvdWNoO1xuICB2YXIgX2FjdGl2ZSA9IHN0YXRlLl9hY3RpdmU7XG5cbiAgdmFyIHN0YXRlQ29weSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzdGF0ZSwgWydfYWN0aXZlJ10pO1xuXG4gIGlmIChfYWN0aXZlICYmIF9hY3RpdmUgIT09IGZpZWxkKSB7XG4gICAgLy8gcmVtb3ZlIF9hY3RpdmUgZnJvbSBzdGF0ZVxuICAgIHN0YXRlQ29weS5fYWN0aXZlID0gX2FjdGl2ZTtcbiAgfVxuICByZXR1cm4gKDAsIF93cml0ZTIuZGVmYXVsdCkoZmllbGQsIGZ1bmN0aW9uIChwcmV2aW91cykge1xuICAgIHZhciByZXN1bHQgPSBfZXh0ZW5kcyh7fSwgcHJldmlvdXMpO1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXN1bHQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHRvdWNoKSB7XG4gICAgICByZXN1bHQudG91Y2hlZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiAoMCwgX2ZpZWxkVmFsdWUubWFrZUZpZWxkVmFsdWUpKHJlc3VsdCk7XG4gIH0sIHN0YXRlQ29weSk7XG59LCBfYmVoYXZpb3JzW19hY3Rpb25UeXBlcy5DSEFOR0VdID0gZnVuY3Rpb24gKHN0YXRlLCBfcmVmNCkge1xuICB2YXIgZmllbGQgPSBfcmVmNC5maWVsZDtcbiAgdmFyIHZhbHVlID0gX3JlZjQudmFsdWU7XG4gIHZhciB0b3VjaCA9IF9yZWY0LnRvdWNoO1xuXG4gIHJldHVybiAoMCwgX3dyaXRlMi5kZWZhdWx0KShmaWVsZCwgZnVuY3Rpb24gKHByZXZpb3VzKSB7XG4gICAgdmFyIF9wcmV2aW91cyR2YWx1ZSA9IF9leHRlbmRzKHt9LCBwcmV2aW91cywgeyB2YWx1ZTogdmFsdWUgfSk7XG5cbiAgICB2YXIgYXN5bmNFcnJvciA9IF9wcmV2aW91cyR2YWx1ZS5hc3luY0Vycm9yO1xuICAgIHZhciBzdWJtaXRFcnJvciA9IF9wcmV2aW91cyR2YWx1ZS5zdWJtaXRFcnJvcjtcbiAgICB2YXIgYXV0b2ZpbGxlZCA9IF9wcmV2aW91cyR2YWx1ZS5hdXRvZmlsbGVkO1xuXG4gICAgdmFyIHJlc3VsdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJldmlvdXMkdmFsdWUsIFsnYXN5bmNFcnJvcicsICdzdWJtaXRFcnJvcicsICdhdXRvZmlsbGVkJ10pO1xuXG4gICAgaWYgKHRvdWNoKSB7XG4gICAgICByZXN1bHQudG91Y2hlZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiAoMCwgX2ZpZWxkVmFsdWUubWFrZUZpZWxkVmFsdWUpKHJlc3VsdCk7XG4gIH0sIHN0YXRlKTtcbn0sIF9iZWhhdmlvcnNbX2FjdGlvblR5cGVzLkRFU1RST1ldID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdW5kZWZpbmVkO1xufSwgX2JlaGF2aW9yc1tfYWN0aW9uVHlwZXMuRk9DVVNdID0gZnVuY3Rpb24gKHN0YXRlLCBfcmVmNSkge1xuICB2YXIgZmllbGQgPSBfcmVmNS5maWVsZDtcblxuICB2YXIgc3RhdGVDb3B5ID0gKDAsIF93cml0ZTIuZGVmYXVsdCkoZmllbGQsIGZ1bmN0aW9uIChwcmV2aW91cykge1xuICAgIHJldHVybiAoMCwgX2ZpZWxkVmFsdWUubWFrZUZpZWxkVmFsdWUpKF9leHRlbmRzKHt9LCBwcmV2aW91cywgeyB2aXNpdGVkOiB0cnVlIH0pKTtcbiAgfSwgc3RhdGUpO1xuICBzdGF0ZUNvcHkuX2FjdGl2ZSA9IGZpZWxkO1xuICByZXR1cm4gc3RhdGVDb3B5O1xufSwgX2JlaGF2aW9yc1tfYWN0aW9uVHlwZXMuSU5JVElBTElaRV0gPSBmdW5jdGlvbiAoc3RhdGUsIF9yZWY2KSB7XG4gIHZhciBfZXh0ZW5kczI7XG5cbiAgdmFyIGRhdGEgPSBfcmVmNi5kYXRhO1xuICB2YXIgZmllbGRzID0gX3JlZjYuZmllbGRzO1xuICB2YXIgb3ZlcndyaXRlVmFsdWVzID0gX3JlZjYub3ZlcndyaXRlVmFsdWVzO1xuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgKDAsIF9pbml0aWFsaXplU3RhdGUyLmRlZmF1bHQpKGRhdGEsIGZpZWxkcywgc3RhdGUsIG92ZXJ3cml0ZVZhbHVlcyksIChfZXh0ZW5kczIgPSB7XG4gICAgX2FzeW5jVmFsaWRhdGluZzogZmFsc2UsXG4gICAgX2FjdGl2ZTogdW5kZWZpbmVkXG4gIH0sIF9leHRlbmRzMltnbG9iYWxFcnJvcktleV0gPSB1bmRlZmluZWQsIF9leHRlbmRzMi5faW5pdGlhbGl6ZWQgPSB0cnVlLCBfZXh0ZW5kczIuX3N1Ym1pdHRpbmcgPSBmYWxzZSwgX2V4dGVuZHMyLl9zdWJtaXRGYWlsZWQgPSBmYWxzZSwgX2V4dGVuZHMyKSk7XG59LCBfYmVoYXZpb3JzW19hY3Rpb25UeXBlcy5SRU1PVkVfQVJSQVlfVkFMVUVdID0gZnVuY3Rpb24gKHN0YXRlLCBfcmVmNykge1xuICB2YXIgcGF0aCA9IF9yZWY3LnBhdGg7XG4gIHZhciBpbmRleCA9IF9yZWY3LmluZGV4O1xuXG4gIHZhciBhcnJheSA9ICgwLCBfcmVhZDIuZGVmYXVsdCkocGF0aCwgc3RhdGUpO1xuICB2YXIgc3RhdGVDb3B5ID0gX2V4dGVuZHMoe30sIHN0YXRlKTtcbiAgdmFyIGFycmF5Q29weSA9IGFycmF5ID8gW10uY29uY2F0KGFycmF5KSA6IFtdO1xuICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5Q29weS5wb3AoKTtcbiAgfSBlbHNlIGlmIChpc05hTihpbmRleCkpIHtcbiAgICBkZWxldGUgYXJyYXlDb3B5W2luZGV4XTtcbiAgfSBlbHNlIHtcbiAgICBhcnJheUNvcHkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gKDAsIF93cml0ZTIuZGVmYXVsdCkocGF0aCwgYXJyYXlDb3B5LCBzdGF0ZUNvcHkpO1xufSwgX2JlaGF2aW9yc1tfYWN0aW9uVHlwZXMuUkVTRVRdID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIHZhciBfZXh0ZW5kczM7XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCAoMCwgX3Jlc2V0U3RhdGUyLmRlZmF1bHQpKHN0YXRlKSwgKF9leHRlbmRzMyA9IHtcbiAgICBfYWN0aXZlOiB1bmRlZmluZWQsXG4gICAgX2FzeW5jVmFsaWRhdGluZzogZmFsc2VcbiAgfSwgX2V4dGVuZHMzW2dsb2JhbEVycm9yS2V5XSA9IHVuZGVmaW5lZCwgX2V4dGVuZHMzLl9pbml0aWFsaXplZCA9IHN0YXRlLl9pbml0aWFsaXplZCwgX2V4dGVuZHMzLl9zdWJtaXR0aW5nID0gZmFsc2UsIF9leHRlbmRzMy5fc3VibWl0RmFpbGVkID0gZmFsc2UsIF9leHRlbmRzMykpO1xufSwgX2JlaGF2aW9yc1tfYWN0aW9uVHlwZXMuU1RBUlRfQVNZTkNfVkFMSURBVElPTl0gPSBmdW5jdGlvbiAoc3RhdGUsIF9yZWY4KSB7XG4gIHZhciBmaWVsZCA9IF9yZWY4LmZpZWxkO1xuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICBfYXN5bmNWYWxpZGF0aW5nOiBmaWVsZCB8fCB0cnVlXG4gIH0pO1xufSwgX2JlaGF2aW9yc1tfYWN0aW9uVHlwZXMuU1RBUlRfU1VCTUlUXSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgX3N1Ym1pdHRpbmc6IHRydWVcbiAgfSk7XG59LCBfYmVoYXZpb3JzW19hY3Rpb25UeXBlcy5TVE9QX0FTWU5DX1ZBTElEQVRJT05dID0gZnVuY3Rpb24gKHN0YXRlLCBfcmVmOSkge1xuICB2YXIgX2V4dGVuZHM0O1xuXG4gIHZhciBlcnJvcnMgPSBfcmVmOS5lcnJvcnM7XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCAoMCwgX3NldEVycm9yczIuZGVmYXVsdCkoc3RhdGUsIGVycm9ycywgJ2FzeW5jRXJyb3InKSwgKF9leHRlbmRzNCA9IHtcbiAgICBfYXN5bmNWYWxpZGF0aW5nOiBmYWxzZVxuICB9LCBfZXh0ZW5kczRbZ2xvYmFsRXJyb3JLZXldID0gZXJyb3JzICYmIGVycm9yc1tnbG9iYWxFcnJvcktleV0sIF9leHRlbmRzNCkpO1xufSwgX2JlaGF2aW9yc1tfYWN0aW9uVHlwZXMuU1RPUF9TVUJNSVRdID0gZnVuY3Rpb24gKHN0YXRlLCBfcmVmMTApIHtcbiAgdmFyIF9leHRlbmRzNTtcblxuICB2YXIgZXJyb3JzID0gX3JlZjEwLmVycm9ycztcblxuICByZXR1cm4gX2V4dGVuZHMoe30sICgwLCBfc2V0RXJyb3JzMi5kZWZhdWx0KShzdGF0ZSwgZXJyb3JzLCAnc3VibWl0RXJyb3InKSwgKF9leHRlbmRzNSA9IHt9LCBfZXh0ZW5kczVbZ2xvYmFsRXJyb3JLZXldID0gZXJyb3JzICYmIGVycm9yc1tnbG9iYWxFcnJvcktleV0sIF9leHRlbmRzNS5fc3VibWl0dGluZyA9IGZhbHNlLCBfZXh0ZW5kczUuX3N1Ym1pdEZhaWxlZCA9ICEhKGVycm9ycyAmJiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCksIF9leHRlbmRzNSkpO1xufSwgX2JlaGF2aW9yc1tfYWN0aW9uVHlwZXMuU1VCTUlUX0ZBSUxFRF0gPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgIF9zdWJtaXRGYWlsZWQ6IHRydWVcbiAgfSk7XG59LCBfYmVoYXZpb3JzW19hY3Rpb25UeXBlcy5TV0FQX0FSUkFZX1ZBTFVFU10gPSBmdW5jdGlvbiAoc3RhdGUsIF9yZWYxMSkge1xuICB2YXIgcGF0aCA9IF9yZWYxMS5wYXRoO1xuICB2YXIgaW5kZXhBID0gX3JlZjExLmluZGV4QTtcbiAgdmFyIGluZGV4QiA9IF9yZWYxMS5pbmRleEI7XG5cbiAgdmFyIGFycmF5ID0gKDAsIF9yZWFkMi5kZWZhdWx0KShwYXRoLCBzdGF0ZSk7XG4gIHZhciBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgaWYgKGluZGV4QSA9PT0gaW5kZXhCIHx8IGlzTmFOKGluZGV4QSkgfHwgaXNOYU4oaW5kZXhCKSB8fCBpbmRleEEgPj0gYXJyYXlMZW5ndGggfHwgaW5kZXhCID49IGFycmF5TGVuZ3RoKSB7XG4gICAgcmV0dXJuIHN0YXRlOyAvLyBkbyBub3RoaW5nXG4gIH1cbiAgdmFyIHN0YXRlQ29weSA9IF9leHRlbmRzKHt9LCBzdGF0ZSk7XG4gIHZhciBhcnJheUNvcHkgPSBbXS5jb25jYXQoYXJyYXkpO1xuICBhcnJheUNvcHlbaW5kZXhBXSA9IGFycmF5W2luZGV4Ql07XG4gIGFycmF5Q29weVtpbmRleEJdID0gYXJyYXlbaW5kZXhBXTtcbiAgcmV0dXJuICgwLCBfd3JpdGUyLmRlZmF1bHQpKHBhdGgsIGFycmF5Q29weSwgc3RhdGVDb3B5KTtcbn0sIF9iZWhhdmlvcnNbX2FjdGlvblR5cGVzLlRPVUNIXSA9IGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjEyKSB7XG4gIHZhciBmaWVsZHMgPSBfcmVmMTIuZmllbGRzO1xuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIGZpZWxkcy5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBmaWVsZCkge1xuICAgIHJldHVybiAoMCwgX3dyaXRlMi5kZWZhdWx0KShmaWVsZCwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gKDAsIF9maWVsZFZhbHVlLm1ha2VGaWVsZFZhbHVlKShfZXh0ZW5kcyh7fSwgdmFsdWUsIHsgdG91Y2hlZDogdHJ1ZSB9KSk7XG4gICAgfSwgYWNjdW11bGF0b3IpO1xuICB9LCBzdGF0ZSkpO1xufSwgX2JlaGF2aW9yc1tfYWN0aW9uVHlwZXMuVU5UT1VDSF0gPSBmdW5jdGlvbiAoc3RhdGUsIF9yZWYxMykge1xuICB2YXIgZmllbGRzID0gX3JlZjEzLmZpZWxkcztcblxuICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCBmaWVsZHMucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgZmllbGQpIHtcbiAgICByZXR1cm4gKDAsIF93cml0ZTIuZGVmYXVsdCkoZmllbGQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHZhciB0b3VjaGVkID0gdmFsdWUudG91Y2hlZDtcblxuICAgICAgICB2YXIgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyh2YWx1ZSwgWyd0b3VjaGVkJ10pO1xuXG4gICAgICAgIHJldHVybiAoMCwgX2ZpZWxkVmFsdWUubWFrZUZpZWxkVmFsdWUpKHJlc3QpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICgwLCBfZmllbGRWYWx1ZS5tYWtlRmllbGRWYWx1ZSkodmFsdWUpO1xuICAgIH0sIGFjY3VtdWxhdG9yKTtcbiAgfSwgc3RhdGUpKTtcbn0sIF9iZWhhdmlvcnMpO1xuXG52YXIgcmVkdWNlciA9IGZ1bmN0aW9uIHJlZHVjZXIoKSB7XG4gIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IGluaXRpYWxTdGF0ZSA6IGFyZ3VtZW50c1swXTtcbiAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gIHZhciBiZWhhdmlvciA9IGJlaGF2aW9yc1thY3Rpb24udHlwZV07XG4gIHJldHVybiBiZWhhdmlvciA/IGJlaGF2aW9yKHN0YXRlLCBhY3Rpb24pIDogc3RhdGU7XG59O1xuXG5mdW5jdGlvbiBmb3JtUmVkdWNlcigpIHtcbiAgdmFyIF9leHRlbmRzMTE7XG5cbiAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcbiAgdmFyIGZvcm0gPSBhY3Rpb24uZm9ybTtcbiAgdmFyIGtleSA9IGFjdGlvbi5rZXk7XG5cbiAgdmFyIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoYWN0aW9uLCBbJ2Zvcm0nLCAna2V5J10pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlZGVjbGFyZVxuXG5cbiAgaWYgKCFmb3JtKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGlmIChrZXkpIHtcbiAgICB2YXIgX2V4dGVuZHM4LCBfZXh0ZW5kczk7XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IF9hY3Rpb25UeXBlcy5ERVNUUk9ZKSB7XG4gICAgICB2YXIgX2V4dGVuZHM3O1xuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCAoX2V4dGVuZHM3ID0ge30sIF9leHRlbmRzN1tmb3JtXSA9IHN0YXRlW2Zvcm1dICYmIE9iamVjdC5rZXlzKHN0YXRlW2Zvcm1dKS5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBzdGF0ZUtleSkge1xuICAgICAgICB2YXIgX2V4dGVuZHM2O1xuXG4gICAgICAgIHJldHVybiBzdGF0ZUtleSA9PT0ga2V5ID8gYWNjdW11bGF0b3IgOiBfZXh0ZW5kcyh7fSwgYWNjdW11bGF0b3IsIChfZXh0ZW5kczYgPSB7fSwgX2V4dGVuZHM2W3N0YXRlS2V5XSA9IHN0YXRlW2Zvcm1dW3N0YXRlS2V5XSwgX2V4dGVuZHM2KSk7XG4gICAgICB9LCB7fSksIF9leHRlbmRzNykpO1xuICAgIH1cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCAoX2V4dGVuZHM5ID0ge30sIF9leHRlbmRzOVtmb3JtXSA9IF9leHRlbmRzKHt9LCBzdGF0ZVtmb3JtXSwgKF9leHRlbmRzOCA9IHt9LCBfZXh0ZW5kczhba2V5XSA9IHJlZHVjZXIoKHN0YXRlW2Zvcm1dIHx8IHt9KVtrZXldLCByZXN0KSwgX2V4dGVuZHM4KSksIF9leHRlbmRzOSkpO1xuICB9XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gX2FjdGlvblR5cGVzLkRFU1RST1kpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc3RhdGUpLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGZvcm1OYW1lKSB7XG4gICAgICB2YXIgX2V4dGVuZHMxMDtcblxuICAgICAgcmV0dXJuIGZvcm1OYW1lID09PSBmb3JtID8gYWNjdW11bGF0b3IgOiBfZXh0ZW5kcyh7fSwgYWNjdW11bGF0b3IsIChfZXh0ZW5kczEwID0ge30sIF9leHRlbmRzMTBbZm9ybU5hbWVdID0gc3RhdGVbZm9ybU5hbWVdLCBfZXh0ZW5kczEwKSk7XG4gICAgfSwge30pO1xuICB9XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIChfZXh0ZW5kczExID0ge30sIF9leHRlbmRzMTFbZm9ybV0gPSByZWR1Y2VyKHN0YXRlW2Zvcm1dLCByZXN0KSwgX2V4dGVuZHMxMSkpO1xufVxuXG4vKipcbiAqIEFkZHMgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5IHRvIHRoZSByZWR1Y2VyXG4gKi9cbmZ1bmN0aW9uIGRlY29yYXRlKHRhcmdldCkge1xuICB0YXJnZXQucGx1Z2luID0gZnVuY3Rpb24gcGx1Z2luKHJlZHVjZXJzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIC8vIHVzZSAnZnVuY3Rpb24nIGtleXdvcmQgdG8gZW5hYmxlICd0aGlzJ1xuICAgIHJldHVybiBkZWNvcmF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcbiAgICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgdmFyIHJlc3VsdCA9IF90aGlzKHN0YXRlLCBhY3Rpb24pO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCByZXN1bHQsICgwLCBfbWFwVmFsdWVzMi5kZWZhdWx0KShyZWR1Y2VycywgZnVuY3Rpb24gKHBsdWdpblJlZHVjZXIsIGtleSkge1xuICAgICAgICByZXR1cm4gcGx1Z2luUmVkdWNlcihyZXN1bHRba2V5XSB8fCBpbml0aWFsU3RhdGUsIGFjdGlvbik7XG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdGFyZ2V0Lm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIG5vcm1hbGl6ZShub3JtYWxpemVycykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgLy8gdXNlICdmdW5jdGlvbicga2V5d29yZCB0byBlbmFibGUgJ3RoaXMnXG4gICAgcmV0dXJuIGRlY29yYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICAgICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgICB2YXIgcmVzdWx0ID0gX3RoaXMyKHN0YXRlLCBhY3Rpb24pO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCByZXN1bHQsICgwLCBfbWFwVmFsdWVzMi5kZWZhdWx0KShub3JtYWxpemVycywgZnVuY3Rpb24gKGZvcm1Ob3JtYWxpemVycywgZm9ybSkge1xuICAgICAgICB2YXIgcnVuTm9ybWFsaXplID0gZnVuY3Rpb24gcnVuTm9ybWFsaXplKHByZXZpb3VzLCBjdXJyZW50UmVzdWx0KSB7XG4gICAgICAgICAgdmFyIHByZXZpb3VzVmFsdWVzID0gKDAsIF9nZXRWYWx1ZXNGcm9tU3RhdGUyLmRlZmF1bHQpKF9leHRlbmRzKHt9LCBpbml0aWFsU3RhdGUsIHByZXZpb3VzKSk7XG4gICAgICAgICAgdmFyIGZvcm1SZXN1bHQgPSBfZXh0ZW5kcyh7fSwgaW5pdGlhbFN0YXRlLCBjdXJyZW50UmVzdWx0KTtcbiAgICAgICAgICB2YXIgdmFsdWVzID0gKDAsIF9nZXRWYWx1ZXNGcm9tU3RhdGUyLmRlZmF1bHQpKGZvcm1SZXN1bHQpO1xuICAgICAgICAgIHJldHVybiAoMCwgX25vcm1hbGl6ZUZpZWxkczIuZGVmYXVsdCkoZm9ybU5vcm1hbGl6ZXJzLCBmb3JtUmVzdWx0LCBwcmV2aW91cywgdmFsdWVzLCBwcmV2aW91c1ZhbHVlcyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChhY3Rpb24ua2V5KSB7XG4gICAgICAgICAgdmFyIF9leHRlbmRzMTI7XG5cbiAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHJlc3VsdFtmb3JtXSwgKF9leHRlbmRzMTIgPSB7fSwgX2V4dGVuZHMxMlthY3Rpb24ua2V5XSA9IHJ1bk5vcm1hbGl6ZShzdGF0ZVtmb3JtXVthY3Rpb24ua2V5XSwgcmVzdWx0W2Zvcm1dW2FjdGlvbi5rZXldKSwgX2V4dGVuZHMxMikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBydW5Ob3JtYWxpemUoc3RhdGVbZm9ybV0sIHJlc3VsdFtmb3JtXSk7XG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZGVjb3JhdGUoZm9ybVJlZHVjZXIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL3JlZHVjZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIEFERF9BUlJBWV9WQUxVRSA9IGV4cG9ydHMuQUREX0FSUkFZX1ZBTFVFID0gJ3JlZHV4LWZvcm0vQUREX0FSUkFZX1ZBTFVFJztcbnZhciBBVVRPRklMTCA9IGV4cG9ydHMuQVVUT0ZJTEwgPSAncmVkdXgtZm9ybS9BVVRPRklMTCc7XG52YXIgQkxVUiA9IGV4cG9ydHMuQkxVUiA9ICdyZWR1eC1mb3JtL0JMVVInO1xudmFyIENIQU5HRSA9IGV4cG9ydHMuQ0hBTkdFID0gJ3JlZHV4LWZvcm0vQ0hBTkdFJztcbnZhciBERVNUUk9ZID0gZXhwb3J0cy5ERVNUUk9ZID0gJ3JlZHV4LWZvcm0vREVTVFJPWSc7XG52YXIgRk9DVVMgPSBleHBvcnRzLkZPQ1VTID0gJ3JlZHV4LWZvcm0vRk9DVVMnO1xudmFyIElOSVRJQUxJWkUgPSBleHBvcnRzLklOSVRJQUxJWkUgPSAncmVkdXgtZm9ybS9JTklUSUFMSVpFJztcbnZhciBSRU1PVkVfQVJSQVlfVkFMVUUgPSBleHBvcnRzLlJFTU9WRV9BUlJBWV9WQUxVRSA9ICdyZWR1eC1mb3JtL1JFTU9WRV9BUlJBWV9WQUxVRSc7XG52YXIgUkVTRVQgPSBleHBvcnRzLlJFU0VUID0gJ3JlZHV4LWZvcm0vUkVTRVQnO1xudmFyIFNUQVJUX0FTWU5DX1ZBTElEQVRJT04gPSBleHBvcnRzLlNUQVJUX0FTWU5DX1ZBTElEQVRJT04gPSAncmVkdXgtZm9ybS9TVEFSVF9BU1lOQ19WQUxJREFUSU9OJztcbnZhciBTVEFSVF9TVUJNSVQgPSBleHBvcnRzLlNUQVJUX1NVQk1JVCA9ICdyZWR1eC1mb3JtL1NUQVJUX1NVQk1JVCc7XG52YXIgU1RPUF9BU1lOQ19WQUxJREFUSU9OID0gZXhwb3J0cy5TVE9QX0FTWU5DX1ZBTElEQVRJT04gPSAncmVkdXgtZm9ybS9TVE9QX0FTWU5DX1ZBTElEQVRJT04nO1xudmFyIFNUT1BfU1VCTUlUID0gZXhwb3J0cy5TVE9QX1NVQk1JVCA9ICdyZWR1eC1mb3JtL1NUT1BfU1VCTUlUJztcbnZhciBTVUJNSVRfRkFJTEVEID0gZXhwb3J0cy5TVUJNSVRfRkFJTEVEID0gJ3JlZHV4LWZvcm0vU1VCTUlUX0ZBSUxFRCc7XG52YXIgU1dBUF9BUlJBWV9WQUxVRVMgPSBleHBvcnRzLlNXQVBfQVJSQVlfVkFMVUVTID0gJ3JlZHV4LWZvcm0vU1dBUF9BUlJBWV9WQUxVRVMnO1xudmFyIFRPVUNIID0gZXhwb3J0cy5UT1VDSCA9ICdyZWR1eC1mb3JtL1RPVUNIJztcbnZhciBVTlRPVUNIID0gZXhwb3J0cy5VTlRPVUNIID0gJ3JlZHV4LWZvcm0vVU5UT1VDSCc7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvYWN0aW9uVHlwZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG1hcFZhbHVlcztcbi8qKlxuICogTWFwcyBhbGwgdGhlIHZhbHVlcyBpbiB0aGUgZ2l2ZW4gb2JqZWN0IHRocm91Z2ggdGhlIGdpdmVuIGZ1bmN0aW9uIGFuZCBzYXZlcyB0aGVtLCBieSBrZXksIHRvIGEgcmVzdWx0IG9iamVjdFxuICovXG5mdW5jdGlvbiBtYXBWYWx1ZXMob2JqLCBmbikge1xuICByZXR1cm4gb2JqID8gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBrZXkpIHtcbiAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBhY2N1bXVsYXRvciwgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJba2V5XSA9IGZuKG9ialtrZXldLCBrZXkpLCBfZXh0ZW5kczIpKTtcbiAgfSwge30pIDogb2JqO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL21hcFZhbHVlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKipcbiAqIFJlYWRzIGFueSBwb3RlbnRpYWxseSBkZWVwIHZhbHVlIGZyb20gYW4gb2JqZWN0IHVzaW5nIGRvdCBhbmQgYXJyYXkgc3ludGF4XG4gKi9cbnZhciByZWFkID0gZnVuY3Rpb24gcmVhZChwYXRoLCBvYmplY3QpIHtcbiAgaWYgKCFwYXRoIHx8ICFvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG4gIHZhciBkb3RJbmRleCA9IHBhdGguaW5kZXhPZignLicpO1xuICBpZiAoZG90SW5kZXggPT09IDApIHtcbiAgICByZXR1cm4gcmVhZChwYXRoLnN1YnN0cmluZygxKSwgb2JqZWN0KTtcbiAgfVxuICB2YXIgb3BlbkluZGV4ID0gcGF0aC5pbmRleE9mKCdbJyk7XG4gIHZhciBjbG9zZUluZGV4ID0gcGF0aC5pbmRleE9mKCddJyk7XG4gIGlmIChkb3RJbmRleCA+PSAwICYmIChvcGVuSW5kZXggPCAwIHx8IGRvdEluZGV4IDwgb3BlbkluZGV4KSkge1xuICAgIC8vIGl0ZXJhdGUgZG93biBvYmplY3QgdHJlZVxuICAgIHJldHVybiByZWFkKHBhdGguc3Vic3RyaW5nKGRvdEluZGV4ICsgMSksIG9iamVjdFtwYXRoLnN1YnN0cmluZygwLCBkb3RJbmRleCldKTtcbiAgfVxuICBpZiAob3BlbkluZGV4ID49IDAgJiYgKGRvdEluZGV4IDwgMCB8fCBvcGVuSW5kZXggPCBkb3RJbmRleCkpIHtcbiAgICBpZiAoY2xvc2VJbmRleCA8IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZm91bmQgWyBidXQgbm8gXScpO1xuICAgIH1cbiAgICB2YXIga2V5ID0gcGF0aC5zdWJzdHJpbmcoMCwgb3BlbkluZGV4KTtcbiAgICB2YXIgaW5kZXggPSBwYXRoLnN1YnN0cmluZyhvcGVuSW5kZXggKyAxLCBjbG9zZUluZGV4KTtcbiAgICBpZiAoIWluZGV4Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG9iamVjdFtrZXldO1xuICAgIH1cbiAgICBpZiAob3BlbkluZGV4ID09PSAwKSB7XG4gICAgICByZXR1cm4gcmVhZChwYXRoLnN1YnN0cmluZyhjbG9zZUluZGV4ICsgMSksIG9iamVjdFtpbmRleF0pO1xuICAgIH1cbiAgICBpZiAoIW9iamVjdFtrZXldKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gcmVhZChwYXRoLnN1YnN0cmluZyhjbG9zZUluZGV4ICsgMSksIG9iamVjdFtrZXldW2luZGV4XSk7XG4gIH1cbiAgcmV0dXJuIG9iamVjdFtwYXRoXTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHJlYWQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvcmVhZC5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbi8qKlxuICogV3JpdGVzIGFueSBwb3RlbnRpYWxseSBkZWVwIHZhbHVlIGZyb20gYW4gb2JqZWN0IHVzaW5nIGRvdCBhbmQgYXJyYXkgc3ludGF4LFxuICogYW5kIHJldHVybnMgYSBuZXcgY29weSBvZiB0aGUgb2JqZWN0LlxuICovXG52YXIgd3JpdGUgPSBmdW5jdGlvbiB3cml0ZShwYXRoLCB2YWx1ZSwgb2JqZWN0KSB7XG4gIHZhciBfZXh0ZW5kczc7XG5cbiAgdmFyIGRvdEluZGV4ID0gcGF0aC5pbmRleE9mKCcuJyk7XG4gIGlmIChkb3RJbmRleCA9PT0gMCkge1xuICAgIHJldHVybiB3cml0ZShwYXRoLnN1YnN0cmluZygxKSwgdmFsdWUsIG9iamVjdCk7XG4gIH1cbiAgdmFyIG9wZW5JbmRleCA9IHBhdGguaW5kZXhPZignWycpO1xuICB2YXIgY2xvc2VJbmRleCA9IHBhdGguaW5kZXhPZignXScpO1xuICBpZiAoZG90SW5kZXggPj0gMCAmJiAob3BlbkluZGV4IDwgMCB8fCBkb3RJbmRleCA8IG9wZW5JbmRleCkpIHtcbiAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgLy8gaXMgZG90IG5vdGF0aW9uXG4gICAgdmFyIGtleSA9IHBhdGguc3Vic3RyaW5nKDAsIGRvdEluZGV4KTtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIG9iamVjdCwgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJba2V5XSA9IHdyaXRlKHBhdGguc3Vic3RyaW5nKGRvdEluZGV4ICsgMSksIHZhbHVlLCBvYmplY3Rba2V5XSB8fCB7fSksIF9leHRlbmRzMikpO1xuICB9XG4gIGlmIChvcGVuSW5kZXggPj0gMCAmJiAoZG90SW5kZXggPCAwIHx8IG9wZW5JbmRleCA8IGRvdEluZGV4KSkge1xuICAgIHZhciBfcmV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9leHRlbmRzNjtcblxuICAgICAgLy8gaXMgYXJyYXkgbm90YXRpb25cbiAgICAgIGlmIChjbG9zZUluZGV4IDwgMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZvdW5kIFsgYnV0IG5vIF0nKTtcbiAgICAgIH1cbiAgICAgIHZhciBrZXkgPSBwYXRoLnN1YnN0cmluZygwLCBvcGVuSW5kZXgpO1xuICAgICAgdmFyIGluZGV4ID0gcGF0aC5zdWJzdHJpbmcob3BlbkluZGV4ICsgMSwgY2xvc2VJbmRleCk7XG4gICAgICB2YXIgYXJyYXkgPSBvYmplY3Rba2V5XSB8fCBbXTtcbiAgICAgIHZhciByZXN0ID0gcGF0aC5zdWJzdHJpbmcoY2xvc2VJbmRleCArIDEpO1xuICAgICAgaWYgKGluZGV4KSB7XG4gICAgICAgIHZhciBfZXh0ZW5kczQ7XG5cbiAgICAgICAgLy8gaW5kZXhlZCBhcnJheVxuICAgICAgICBpZiAocmVzdC5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgX2V4dGVuZHMzO1xuXG4gICAgICAgICAgLy8gbmVlZCB0byBrZWVwIHJlY3Vyc2luZ1xuICAgICAgICAgIHZhciBkZXN0ID0gYXJyYXlbaW5kZXhdIHx8IHt9O1xuICAgICAgICAgIHZhciBhcnJheUNvcHkgPSBbXS5jb25jYXQoYXJyYXkpO1xuICAgICAgICAgIGFycmF5Q29weVtpbmRleF0gPSB3cml0ZShyZXN0LCB2YWx1ZSwgZGVzdCk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHY6IF9leHRlbmRzKHt9LCBvYmplY3QgfHwge30sIChfZXh0ZW5kczMgPSB7fSwgX2V4dGVuZHMzW2tleV0gPSBhcnJheUNvcHksIF9leHRlbmRzMykpXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29weSA9IFtdLmNvbmNhdChhcnJheSk7XG4gICAgICAgIGNvcHlbaW5kZXhdID0gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUoY29weVtpbmRleF0pIDogdmFsdWU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdjogX2V4dGVuZHMoe30sIG9iamVjdCB8fCB7fSwgKF9leHRlbmRzNCA9IHt9LCBfZXh0ZW5kczRba2V5XSA9IGNvcHksIF9leHRlbmRzNCkpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICAvLyBpbmRleGxlc3MgYXJyYXlcbiAgICAgIGlmIChyZXN0Lmxlbmd0aCkge1xuICAgICAgICB2YXIgX2V4dGVuZHM1O1xuXG4gICAgICAgIC8vIG5lZWQgdG8ga2VlcCByZWN1cnNpbmdcbiAgICAgICAgaWYgKCghYXJyYXkgfHwgIWFycmF5Lmxlbmd0aCkgJiYgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHY6IG9iamVjdFxuICAgICAgICAgIH07IC8vIGRvbid0IGV2ZW4gc2V0IGEgdmFsdWUgdW5kZXIgW2tleV1cbiAgICAgICAgfVxuICAgICAgICB2YXIgX2FycmF5Q29weSA9IGFycmF5Lm1hcChmdW5jdGlvbiAoZGVzdCkge1xuICAgICAgICAgIHJldHVybiB3cml0ZShyZXN0LCB2YWx1ZSwgZGVzdCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHY6IF9leHRlbmRzKHt9LCBvYmplY3QgfHwge30sIChfZXh0ZW5kczUgPSB7fSwgX2V4dGVuZHM1W2tleV0gPSBfYXJyYXlDb3B5LCBfZXh0ZW5kczUpKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdmFyIHJlc3VsdCA9IHZvaWQgMDtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAob2JqZWN0W2tleV0pIHtcbiAgICAgICAgcmVzdWx0ID0gYXJyYXkubWFwKGZ1bmN0aW9uIChkZXN0KSB7XG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlKGRlc3QpIDogdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2OiBvYmplY3RcbiAgICAgICAgfTsgLy8gZG9uJ3QgZXZlbiBzZXQgYSB2YWx1ZSB1bmRlciBba2V5XVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdjogX2V4dGVuZHMoe30sIG9iamVjdCB8fCB7fSwgKF9leHRlbmRzNiA9IHt9LCBfZXh0ZW5kczZba2V5XSA9IHJlc3VsdCwgX2V4dGVuZHM2KSlcbiAgICAgIH07XG4gICAgfSgpO1xuXG4gICAgaWYgKHR5cGVvZiBfcmV0ID09PSBcIm9iamVjdFwiKSByZXR1cm4gX3JldC52O1xuICB9XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgb2JqZWN0LCAoX2V4dGVuZHM3ID0ge30sIF9leHRlbmRzN1twYXRoXSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlKG9iamVjdFtwYXRoXSkgOiB2YWx1ZSwgX2V4dGVuZHM3KSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB3cml0ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi93cml0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZmllbGRWYWx1ZSA9IHJlcXVpcmUoJy4vZmllbGRWYWx1ZScpO1xuXG4vKipcbiAqIEEgZGlmZmVyZW50IHZlcnNpb24gb2YgZ2V0VmFsdWVzKCkgdGhhdCBkb2VzIG5vdCBuZWVkIHRoZSBmaWVsZHMgYXJyYXlcbiAqL1xudmFyIGdldFZhbHVlc0Zyb21TdGF0ZSA9IGZ1bmN0aW9uIGdldFZhbHVlc0Zyb21TdGF0ZShzdGF0ZSkge1xuICBpZiAoIXN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc3RhdGUpO1xuICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBrZXkpIHtcbiAgICB2YXIgZmllbGQgPSBzdGF0ZVtrZXldO1xuICAgIGlmIChmaWVsZCkge1xuICAgICAgaWYgKCgwLCBfZmllbGRWYWx1ZS5pc0ZpZWxkVmFsdWUpKGZpZWxkKSkge1xuICAgICAgICBpZiAoZmllbGQudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGFjY3VtdWxhdG9yW2tleV0gPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGZpZWxkKSkge1xuICAgICAgICBhY2N1bXVsYXRvcltrZXldID0gZmllbGQubWFwKGZ1bmN0aW9uIChhcnJheUZpZWxkKSB7XG4gICAgICAgICAgcmV0dXJuICgwLCBfZmllbGRWYWx1ZS5pc0ZpZWxkVmFsdWUpKGFycmF5RmllbGQpID8gYXJyYXlGaWVsZC52YWx1ZSA6IGdldFZhbHVlc0Zyb21TdGF0ZShhcnJheUZpZWxkKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaWVsZCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGdldFZhbHVlc0Zyb21TdGF0ZShmaWVsZCk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCAmJiBPYmplY3Qua2V5cyhyZXN1bHQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBhY2N1bXVsYXRvcltrZXldID0gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgfSwge30pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0VmFsdWVzRnJvbVN0YXRlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL2dldFZhbHVlc0Zyb21TdGF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLm1ha2VGaWVsZFZhbHVlID0gbWFrZUZpZWxkVmFsdWU7XG5leHBvcnRzLmlzRmllbGRWYWx1ZSA9IGlzRmllbGRWYWx1ZTtcbnZhciBmbGFnID0gJ19pc0ZpZWxkVmFsdWUnO1xudmFyIGlzT2JqZWN0ID0gZnVuY3Rpb24gaXNPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jztcbn07XG5cbmZ1bmN0aW9uIG1ha2VGaWVsZFZhbHVlKG9iamVjdCkge1xuICBpZiAob2JqZWN0ICYmIGlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICAvLyBUaGlzIGZsYWcgaGFzIHRvIGJlIGVudW1lcmFibGUsIGJlY2F1c2Ugb3RoZXJ3aXNlIGl0IGlzIG5vdCBwb3NzaWJsZVxuICAgIC8vIHRvIHNlcmlhbGl6ZSBvYmplY3Qgd2l0aCB0aGlzIGZpZWxkLlxuICAgIC8vIFRoZSBjb25zZXF1ZW5jZSBpcyB5b3UgbG9zZSBpbmZvcm1hdGlvbiB0aGF0IHBhcnRpY3VsYXIgZmllbGQgaXNcbiAgICAvLyBmaWVsZCBvciBuZXN0ZWQgZ3JvdXAgb2YgZmllbGRzLCBzbyB5b3UncmUgbm90IGFibGUgdG8gZmV0Y2hcbiAgICAvLyBmaWVsZCB2YWx1ZSBmcm9tIHN0YXRlIHdoZW4gaXQgaGFzIGJlZW4gYWZmZWN0ZWQgaW4gc29tZSB3YXlcbiAgICAvLyBieSBzZXJpYWxpemluZy91c2luZyBpbW11dGFibGUgYW5kIHNvIG9uLlxuICAgIC8vIEBmaXhtZSBtYXJraW5nIGZpZWxkIGFzIGxlYWYgc2hvdWxkIGJlIG1hZGUgaW4gb3RoZXIgd2F5XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgZmxhZywgeyB2YWx1ZTogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBpc0ZpZWxkVmFsdWUob2JqZWN0KSB7XG4gIHJldHVybiAhIShvYmplY3QgJiYgaXNPYmplY3Qob2JqZWN0KSAmJiBvYmplY3RbZmxhZ10pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL2ZpZWxkVmFsdWUuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2ZpZWxkVmFsdWUgPSByZXF1aXJlKCcuL2ZpZWxkVmFsdWUnKTtcblxudmFyIG1ha2VFbnRyeSA9IGZ1bmN0aW9uIG1ha2VFbnRyeSh2YWx1ZSwgcHJldmlvdXNWYWx1ZSwgb3ZlcndyaXRlVmFsdWVzKSB7XG4gIHJldHVybiAoMCwgX2ZpZWxkVmFsdWUubWFrZUZpZWxkVmFsdWUpKHZhbHVlID09PSB1bmRlZmluZWQgPyB7fSA6IHtcbiAgICBpbml0aWFsOiB2YWx1ZSxcbiAgICB2YWx1ZTogb3ZlcndyaXRlVmFsdWVzID8gdmFsdWUgOiBwcmV2aW91c1ZhbHVlXG4gIH0pO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBpbml0aWFsIHZhbHVlcyBpbnRvIHRoZSBzdGF0ZSBhbmQgcmV0dXJucyBhIG5ldyBjb3B5IG9mIHRoZSBzdGF0ZVxuICovXG52YXIgaW5pdGlhbGl6ZVN0YXRlID0gZnVuY3Rpb24gaW5pdGlhbGl6ZVN0YXRlKHZhbHVlcywgZmllbGRzKSB7XG4gIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzJdO1xuICB2YXIgb3ZlcndyaXRlVmFsdWVzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFyZ3VtZW50c1szXTtcblxuICBpZiAoIWZpZWxkcykge1xuICAgIHRocm93IG5ldyBFcnJvcignZmllbGRzIG11c3QgYmUgcGFzc2VkIHdoZW4gaW5pdGlhbGl6aW5nIHN0YXRlJyk7XG4gIH1cbiAgaWYgKCF2YWx1ZXMgfHwgIWZpZWxkcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgdmFyIGluaXRpYWxpemVGaWVsZCA9IGZ1bmN0aW9uIGluaXRpYWxpemVGaWVsZChwYXRoLCBzcmMsIGRlc3QpIHtcbiAgICB2YXIgZG90SW5kZXggPSBwYXRoLmluZGV4T2YoJy4nKTtcbiAgICBpZiAoZG90SW5kZXggPT09IDApIHtcbiAgICAgIHJldHVybiBpbml0aWFsaXplRmllbGQocGF0aC5zdWJzdHJpbmcoMSksIHNyYywgZGVzdCk7XG4gICAgfVxuICAgIHZhciBvcGVuSW5kZXggPSBwYXRoLmluZGV4T2YoJ1snKTtcbiAgICB2YXIgY2xvc2VJbmRleCA9IHBhdGguaW5kZXhPZignXScpO1xuICAgIHZhciByZXN1bHQgPSBfZXh0ZW5kcyh7fSwgZGVzdCkgfHwge307XG4gICAgaWYgKGRvdEluZGV4ID49IDAgJiYgKG9wZW5JbmRleCA8IDAgfHwgZG90SW5kZXggPCBvcGVuSW5kZXgpKSB7XG4gICAgICAvLyBpcyBkb3Qgbm90YXRpb25cbiAgICAgIHZhciBrZXkgPSBwYXRoLnN1YnN0cmluZygwLCBkb3RJbmRleCk7XG4gICAgICByZXN1bHRba2V5XSA9IHNyY1trZXldICYmIGluaXRpYWxpemVGaWVsZChwYXRoLnN1YnN0cmluZyhkb3RJbmRleCArIDEpLCBzcmNba2V5XSwgcmVzdWx0W2tleV0gfHwge30pO1xuICAgIH0gZWxzZSBpZiAob3BlbkluZGV4ID49IDAgJiYgKGRvdEluZGV4IDwgMCB8fCBvcGVuSW5kZXggPCBkb3RJbmRleCkpIHtcbiAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGlzIGFycmF5IG5vdGF0aW9uXG4gICAgICAgIGlmIChjbG9zZUluZGV4IDwgMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZm91bmQgXFwnW1xcJyBidXQgbm8gXFwnXVxcJzogXFwnJyArIHBhdGggKyAnXFwnJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGtleSA9IHBhdGguc3Vic3RyaW5nKDAsIG9wZW5JbmRleCk7XG4gICAgICAgIHZhciBzcmNBcnJheSA9IHNyY1trZXldO1xuICAgICAgICB2YXIgZGVzdEFycmF5ID0gcmVzdWx0W2tleV07XG4gICAgICAgIHZhciByZXN0ID0gcGF0aC5zdWJzdHJpbmcoY2xvc2VJbmRleCArIDEpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzcmNBcnJheSkpIHtcbiAgICAgICAgICBpZiAocmVzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIG5lZWQgdG8ga2VlcCByZWN1cnNpbmdcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gc3JjQXJyYXkubWFwKGZ1bmN0aW9uIChzcmNWYWx1ZSwgc3JjSW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxpemVGaWVsZChyZXN0LCBzcmNWYWx1ZSwgZGVzdEFycmF5ICYmIGRlc3RBcnJheVtzcmNJbmRleF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gc3JjQXJyYXkubWFwKGZ1bmN0aW9uIChzcmNWYWx1ZSwgc3JjSW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG1ha2VFbnRyeShzcmNWYWx1ZSwgZGVzdEFycmF5ICYmIGRlc3RBcnJheVtzcmNJbmRleF0gJiYgZGVzdEFycmF5W3NyY0luZGV4XS52YWx1ZSwgb3ZlcndyaXRlVmFsdWVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IFtdO1xuICAgICAgICB9XG4gICAgICB9KSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRbcGF0aF0gPSBtYWtlRW50cnkoc3JjICYmIHNyY1twYXRoXSwgZGVzdCAmJiBkZXN0W3BhdGhdICYmIGRlc3RbcGF0aF0udmFsdWUsIG92ZXJ3cml0ZVZhbHVlcyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHJldHVybiBmaWVsZHMucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgZmllbGQpIHtcbiAgICByZXR1cm4gaW5pdGlhbGl6ZUZpZWxkKGZpZWxkLCB2YWx1ZXMsIGFjY3VtdWxhdG9yKTtcbiAgfSwgX2V4dGVuZHMoe30sIHN0YXRlKSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBpbml0aWFsaXplU3RhdGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvaW5pdGlhbGl6ZVN0YXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9maWVsZFZhbHVlID0gcmVxdWlyZSgnLi9maWVsZFZhbHVlJyk7XG5cbnZhciByZXNldCA9IGZ1bmN0aW9uIHJlc2V0KHZhbHVlKSB7XG4gIHJldHVybiAoMCwgX2ZpZWxkVmFsdWUubWFrZUZpZWxkVmFsdWUpKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgJiYgdmFsdWUuaW5pdGlhbCA9PT0gdW5kZWZpbmVkID8ge30gOiB7IGluaXRpYWw6IHZhbHVlLmluaXRpYWwsIHZhbHVlOiB2YWx1ZS5pbml0aWFsIH0pO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBpbml0aWFsIHZhbHVlcyBpbnRvIHRoZSBzdGF0ZSBhbmQgcmV0dXJucyBhIG5ldyBjb3B5IG9mIHRoZSBzdGF0ZVxuICovXG52YXIgcmVzZXRTdGF0ZSA9IGZ1bmN0aW9uIHJlc2V0U3RhdGUodmFsdWVzKSB7XG4gIHJldHVybiB2YWx1ZXMgPyBPYmplY3Qua2V5cyh2YWx1ZXMpLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGtleSkge1xuICAgIHZhciB2YWx1ZSA9IHZhbHVlc1trZXldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgYWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gKDAsIF9maWVsZFZhbHVlLmlzRmllbGRWYWx1ZSkoaXRlbSkgPyByZXNldChpdGVtKSA6IHJlc2V0U3RhdGUoaXRlbSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoKDAsIF9maWVsZFZhbHVlLmlzRmllbGRWYWx1ZSkodmFsdWUpKSB7XG4gICAgICAgIGFjY3VtdWxhdG9yW2tleV0gPSByZXNldCh2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgYWNjdW11bGF0b3Jba2V5XSA9IHJlc2V0U3RhdGUodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gIH0sIHt9KSA6IHZhbHVlcztcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHJlc2V0U3RhdGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvcmVzZXRTdGF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfZmllbGRWYWx1ZSA9IHJlcXVpcmUoJy4vZmllbGRWYWx1ZScpO1xuXG52YXIgaXNNZXRhS2V5ID0gZnVuY3Rpb24gaXNNZXRhS2V5KGtleSkge1xuICByZXR1cm4ga2V5WzBdID09PSAnXyc7XG59O1xuXG4vKipcbiAqIFNldHMgYW4gZXJyb3Igb24gYSBmaWVsZCBkZWVwIGluIHRoZSB0cmVlLCByZXR1cm5pbmcgYSBuZXcgY29weSBvZiB0aGUgc3RhdGVcbiAqL1xudmFyIHNldEVycm9ycyA9IGZ1bmN0aW9uIHNldEVycm9ycyhzdGF0ZSwgZXJyb3JzLCBkZXN0S2V5KSB7XG4gIHZhciBjbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHN0YXRlKSkge1xuICAgICAgcmV0dXJuIHN0YXRlLm1hcChmdW5jdGlvbiAoc3RhdGVJdGVtLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gc2V0RXJyb3JzKHN0YXRlSXRlbSwgZXJyb3JzICYmIGVycm9yc1tpbmRleF0sIGRlc3RLZXkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChzdGF0ZSAmJiB0eXBlb2Ygc3RhdGUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gT2JqZWN0LmtleXMoc3RhdGUpLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGtleSkge1xuICAgICAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgICAgIHJldHVybiBpc01ldGFLZXkoa2V5KSA/IGFjY3VtdWxhdG9yIDogX2V4dGVuZHMoe30sIGFjY3VtdWxhdG9yLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltrZXldID0gc2V0RXJyb3JzKHN0YXRlW2tleV0sIGVycm9ycyAmJiBlcnJvcnNba2V5XSwgZGVzdEtleSksIF9leHRlbmRzMikpO1xuICAgICAgfSwgc3RhdGUpO1xuICAgICAgaWYgKCgwLCBfZmllbGRWYWx1ZS5pc0ZpZWxkVmFsdWUpKHN0YXRlKSkge1xuICAgICAgICAoMCwgX2ZpZWxkVmFsdWUubWFrZUZpZWxkVmFsdWUpKHJlc3VsdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICByZXR1cm4gKDAsIF9maWVsZFZhbHVlLm1ha2VGaWVsZFZhbHVlKShzdGF0ZSk7XG4gIH07XG4gIGlmICh0eXBlb2YgRmlsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgc3RhdGUgaW5zdGFuY2VvZiBGaWxlKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGlmICghZXJyb3JzKSB7XG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICBpZiAoc3RhdGVbZGVzdEtleV0pIHtcbiAgICAgIHZhciBjb3B5ID0gX2V4dGVuZHMoe30sIHN0YXRlKTtcbiAgICAgIGRlbGV0ZSBjb3B5W2Rlc3RLZXldO1xuICAgICAgcmV0dXJuICgwLCBfZmllbGRWYWx1ZS5tYWtlRmllbGRWYWx1ZSkoY29weSk7XG4gICAgfVxuICAgIHJldHVybiBjbGVhcigpO1xuICB9XG4gIGlmICh0eXBlb2YgZXJyb3JzID09PSAnc3RyaW5nJykge1xuICAgIHZhciBfZXh0ZW5kczM7XG5cbiAgICByZXR1cm4gKDAsIF9maWVsZFZhbHVlLm1ha2VGaWVsZFZhbHVlKShfZXh0ZW5kcyh7fSwgc3RhdGUsIChfZXh0ZW5kczMgPSB7fSwgX2V4dGVuZHMzW2Rlc3RLZXldID0gZXJyb3JzLCBfZXh0ZW5kczMpKSk7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkoZXJyb3JzKSkge1xuICAgIGlmICghc3RhdGUgfHwgQXJyYXkuaXNBcnJheShzdGF0ZSkpIHtcbiAgICAgIHZhciBfcmV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29weSA9IChzdGF0ZSB8fCBbXSkubWFwKGZ1bmN0aW9uIChzdGF0ZUl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIHNldEVycm9ycyhzdGF0ZUl0ZW0sIGVycm9yc1tpbmRleF0sIGRlc3RLZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgZXJyb3JzLmZvckVhY2goZnVuY3Rpb24gKGVycm9ySXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gY29weVtpbmRleF0gPSBzZXRFcnJvcnMoY29weVtpbmRleF0sIGVycm9ySXRlbSwgZGVzdEtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHY6IGNvcHlcbiAgICAgICAgfTtcbiAgICAgIH0oKTtcblxuICAgICAgaWYgKHR5cGVvZiBfcmV0ID09PSBcIm9iamVjdFwiKSByZXR1cm4gX3JldC52O1xuICAgIH1cbiAgICByZXR1cm4gc2V0RXJyb3JzKHN0YXRlLCBlcnJvcnNbMF0sIGRlc3RLZXkpOyAvLyB1c2UgZmlyc3QgZXJyb3JcbiAgfVxuICBpZiAoKDAsIF9maWVsZFZhbHVlLmlzRmllbGRWYWx1ZSkoc3RhdGUpKSB7XG4gICAgdmFyIF9leHRlbmRzNDtcblxuICAgIHJldHVybiAoMCwgX2ZpZWxkVmFsdWUubWFrZUZpZWxkVmFsdWUpKF9leHRlbmRzKHt9LCBzdGF0ZSwgKF9leHRlbmRzNCA9IHt9LCBfZXh0ZW5kczRbZGVzdEtleV0gPSBlcnJvcnMsIF9leHRlbmRzNCkpKTtcbiAgfVxuICB2YXIgZXJyb3JLZXlzID0gT2JqZWN0LmtleXMoZXJyb3JzKTtcbiAgaWYgKCFlcnJvcktleXMubGVuZ3RoICYmICFzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICByZXR1cm4gZXJyb3JLZXlzLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGtleSkge1xuICAgIHZhciBfZXh0ZW5kczU7XG5cbiAgICByZXR1cm4gaXNNZXRhS2V5KGtleSkgPyBhY2N1bXVsYXRvciA6IF9leHRlbmRzKHt9LCBhY2N1bXVsYXRvciwgKF9leHRlbmRzNSA9IHt9LCBfZXh0ZW5kczVba2V5XSA9IHNldEVycm9ycyhzdGF0ZSAmJiBzdGF0ZVtrZXldLCBlcnJvcnNba2V5XSwgZGVzdEtleSksIF9leHRlbmRzNSkpO1xuICB9LCBjbGVhcigpIHx8IHt9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHNldEVycm9ycztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9zZXRFcnJvcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBub3JtYWxpemVGaWVsZHM7XG5cbnZhciBfZmllbGRWYWx1ZSA9IHJlcXVpcmUoJy4vZmllbGRWYWx1ZScpO1xuXG5mdW5jdGlvbiBleHRyYWN0S2V5KGZpZWxkKSB7XG4gIHZhciBkb3RJbmRleCA9IGZpZWxkLmluZGV4T2YoJy4nKTtcbiAgdmFyIG9wZW5JbmRleCA9IGZpZWxkLmluZGV4T2YoJ1snKTtcbiAgdmFyIGNsb3NlSW5kZXggPSBmaWVsZC5pbmRleE9mKCddJyk7XG5cbiAgaWYgKG9wZW5JbmRleCA+IDAgJiYgY2xvc2VJbmRleCAhPT0gb3BlbkluZGV4ICsgMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignZm91bmQgWyBub3QgZm9sbG93ZWQgYnkgXScpO1xuICB9XG5cbiAgdmFyIGlzQXJyYXkgPSBvcGVuSW5kZXggPiAwICYmIChkb3RJbmRleCA8IDAgfHwgb3BlbkluZGV4IDwgZG90SW5kZXgpO1xuICB2YXIga2V5ID0gdm9pZCAwO1xuICB2YXIgbmVzdGVkUGF0aCA9IHZvaWQgMDtcblxuICBpZiAoaXNBcnJheSkge1xuICAgIGtleSA9IGZpZWxkLnN1YnN0cmluZygwLCBvcGVuSW5kZXgpO1xuICAgIG5lc3RlZFBhdGggPSBmaWVsZC5zdWJzdHJpbmcoY2xvc2VJbmRleCArIDEpO1xuXG4gICAgaWYgKG5lc3RlZFBhdGhbMF0gPT09ICcuJykge1xuICAgICAgbmVzdGVkUGF0aCA9IG5lc3RlZFBhdGguc3Vic3RyaW5nKDEpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChkb3RJbmRleCA+IDApIHtcbiAgICBrZXkgPSBmaWVsZC5zdWJzdHJpbmcoMCwgZG90SW5kZXgpO1xuICAgIG5lc3RlZFBhdGggPSBmaWVsZC5zdWJzdHJpbmcoZG90SW5kZXggKyAxKTtcbiAgfSBlbHNlIHtcbiAgICBrZXkgPSBmaWVsZDtcbiAgfVxuXG4gIHJldHVybiB7IGlzQXJyYXk6IGlzQXJyYXksIGtleToga2V5LCBuZXN0ZWRQYXRoOiBuZXN0ZWRQYXRoIH07XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUZpZWxkKGZpZWxkLCBmdWxsRmllbGRQYXRoLCBzdGF0ZSwgcHJldmlvdXNTdGF0ZSwgdmFsdWVzLCBwcmV2aW91c1ZhbHVlcywgbm9ybWFsaXplcnMpIHtcbiAgaWYgKGZpZWxkLmlzQXJyYXkpIHtcbiAgICBpZiAoZmllbGQubmVzdGVkUGF0aCkge1xuICAgICAgdmFyIF9yZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcnJheSA9IHN0YXRlICYmIHN0YXRlW2ZpZWxkLmtleV0gfHwgW107XG4gICAgICAgIHZhciBwcmV2aW91c0FycmF5ID0gcHJldmlvdXNTdGF0ZSAmJiBwcmV2aW91c1N0YXRlW2ZpZWxkLmtleV0gfHwgW107XG4gICAgICAgIHZhciBuZXN0ZWRGaWVsZCA9IGV4dHJhY3RLZXkoZmllbGQubmVzdGVkUGF0aCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2OiBhcnJheS5tYXAoZnVuY3Rpb24gKG5lc3RlZFN0YXRlLCBpKSB7XG4gICAgICAgICAgICBuZXN0ZWRTdGF0ZVtuZXN0ZWRGaWVsZC5rZXldID0gbm9ybWFsaXplRmllbGQobmVzdGVkRmllbGQsIGZ1bGxGaWVsZFBhdGgsIG5lc3RlZFN0YXRlLCBwcmV2aW91c0FycmF5W2ldLCB2YWx1ZXMsIHByZXZpb3VzVmFsdWVzLCBub3JtYWxpemVycyk7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXN0ZWRTdGF0ZTtcbiAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgfSgpO1xuXG4gICAgICBpZiAodHlwZW9mIF9yZXQgPT09IFwib2JqZWN0XCIpIHJldHVybiBfcmV0LnY7XG4gICAgfVxuXG4gICAgdmFyIF9ub3JtYWxpemVyID0gbm9ybWFsaXplcnNbZnVsbEZpZWxkUGF0aF07XG5cbiAgICB2YXIgcmVzdWx0ID0gX25vcm1hbGl6ZXIoc3RhdGUgJiYgc3RhdGVbZmllbGQua2V5XSwgcHJldmlvdXNTdGF0ZSAmJiBwcmV2aW91c1N0YXRlW2ZpZWxkLmtleV0sIHZhbHVlcywgcHJldmlvdXNWYWx1ZXMpO1xuICAgIHJldHVybiBmaWVsZC5pc0FycmF5ID8gcmVzdWx0ICYmIHJlc3VsdC5tYXAoX2ZpZWxkVmFsdWUubWFrZUZpZWxkVmFsdWUpIDogcmVzdWx0O1xuICB9IGVsc2UgaWYgKGZpZWxkLm5lc3RlZFBhdGgpIHtcbiAgICB2YXIgbmVzdGVkU3RhdGUgPSBzdGF0ZSAmJiBzdGF0ZVtmaWVsZC5rZXldIHx8IHt9O1xuICAgIHZhciBfbmVzdGVkRmllbGQgPSBleHRyYWN0S2V5KGZpZWxkLm5lc3RlZFBhdGgpO1xuXG4gICAgbmVzdGVkU3RhdGVbX25lc3RlZEZpZWxkLmtleV0gPSBub3JtYWxpemVGaWVsZChfbmVzdGVkRmllbGQsIGZ1bGxGaWVsZFBhdGgsIG5lc3RlZFN0YXRlLCBwcmV2aW91c1N0YXRlICYmIHByZXZpb3VzU3RhdGVbZmllbGQua2V5XSwgdmFsdWVzLCBwcmV2aW91c1ZhbHVlcywgbm9ybWFsaXplcnMpO1xuXG4gICAgcmV0dXJuIG5lc3RlZFN0YXRlO1xuICB9XG5cbiAgdmFyIGZpbmFsRmllbGQgPSBzdGF0ZSAmJiBzdGF0ZVtmaWVsZC5rZXldIHx8IHt9O1xuICB2YXIgbm9ybWFsaXplciA9IG5vcm1hbGl6ZXJzW2Z1bGxGaWVsZFBhdGhdO1xuXG4gIGZpbmFsRmllbGQudmFsdWUgPSBub3JtYWxpemVyKGZpbmFsRmllbGQudmFsdWUsIHByZXZpb3VzU3RhdGUgJiYgcHJldmlvdXNTdGF0ZVtmaWVsZC5rZXldICYmIHByZXZpb3VzU3RhdGVbZmllbGQua2V5XS52YWx1ZSwgdmFsdWVzLCBwcmV2aW91c1ZhbHVlcyk7XG5cbiAgcmV0dXJuICgwLCBfZmllbGRWYWx1ZS5tYWtlRmllbGRWYWx1ZSkoZmluYWxGaWVsZCk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUZpZWxkcyhub3JtYWxpemVycywgc3RhdGUsIHByZXZpb3VzU3RhdGUsIHZhbHVlcywgcHJldmlvdXNWYWx1ZXMpIHtcbiAgdmFyIG5ld1N0YXRlID0gT2JqZWN0LmtleXMobm9ybWFsaXplcnMpLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGZpZWxkKSB7XG4gICAgdmFyIGV4dHJhY3RlZCA9IGV4dHJhY3RLZXkoZmllbGQpO1xuXG4gICAgYWNjdW11bGF0b3JbZXh0cmFjdGVkLmtleV0gPSBub3JtYWxpemVGaWVsZChleHRyYWN0ZWQsIGZpZWxkLCBzdGF0ZSwgcHJldmlvdXNTdGF0ZSwgdmFsdWVzLCBwcmV2aW91c1ZhbHVlcywgbm9ybWFsaXplcnMpO1xuXG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwgbmV3U3RhdGUpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL25vcm1hbGl6ZUZpZWxkcy5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlUmVkdXhGb3JtQ29ubmVjdG9yID0gcmVxdWlyZSgnLi9jcmVhdGVSZWR1eEZvcm1Db25uZWN0b3InKTtcblxudmFyIF9jcmVhdGVSZWR1eEZvcm1Db25uZWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlUmVkdXhGb3JtQ29ubmVjdG9yKTtcblxudmFyIF9ob2lzdE5vblJlYWN0U3RhdGljcyA9IHJlcXVpcmUoJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJyk7XG5cbnZhciBfaG9pc3ROb25SZWFjdFN0YXRpY3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaG9pc3ROb25SZWFjdFN0YXRpY3MpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxuICogVGhlIGRlY29yYXRvciB0aGF0IGlzIHRoZSBtYWluIEFQSSB0byByZWR1eC1mb3JtXG4gKi9cbnZhciBjcmVhdGVSZWR1eEZvcm0gPSBmdW5jdGlvbiBjcmVhdGVSZWR1eEZvcm0oaXNSZWFjdE5hdGl2ZSwgUmVhY3QsIGNvbm5lY3QpIHtcbiAgdmFyIENvbXBvbmVudCA9IFJlYWN0LkNvbXBvbmVudDtcblxuICB2YXIgcmVkdXhGb3JtQ29ubmVjdG9yID0gKDAsIF9jcmVhdGVSZWR1eEZvcm1Db25uZWN0b3IyLmRlZmF1bHQpKGlzUmVhY3ROYXRpdmUsIFJlYWN0LCBjb25uZWN0KTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb25maWcsIG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgICB2YXIgUmVkdXhGb3JtQ29ubmVjdG9yID0gcmVkdXhGb3JtQ29ubmVjdG9yKFdyYXBwZWRDb21wb25lbnQsIG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBvcHRpb25zKTtcbiAgICAgIHZhciBjb25maWdXaXRoRGVmYXVsdHMgPSBfZXh0ZW5kcyh7XG4gICAgICAgIG92ZXJ3cml0ZU9uSW5pdGlhbFZhbHVlc0NoYW5nZTogdHJ1ZSxcbiAgICAgICAgdG91Y2hPbkJsdXI6IHRydWUsXG4gICAgICAgIHRvdWNoT25DaGFuZ2U6IGZhbHNlLFxuICAgICAgICBkZXN0cm95T25Vbm1vdW50OiB0cnVlXG4gICAgICB9LCBjb25maWcpO1xuXG4gICAgICB2YXIgQ29ubmVjdGVkRm9ybSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICAgIF9pbmhlcml0cyhDb25uZWN0ZWRGb3JtLCBfQ29tcG9uZW50KTtcblxuICAgICAgICBmdW5jdGlvbiBDb25uZWN0ZWRGb3JtKHByb3BzKSB7XG4gICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbm5lY3RlZEZvcm0pO1xuXG4gICAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgICBfdGhpcy5oYW5kbGVTdWJtaXRQYXNzYmFjayA9IF90aGlzLmhhbmRsZVN1Ym1pdFBhc3NiYWNrLmJpbmQoX3RoaXMpO1xuICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIENvbm5lY3RlZEZvcm0ucHJvdG90eXBlLmhhbmRsZVN1Ym1pdFBhc3NiYWNrID0gZnVuY3Rpb24gaGFuZGxlU3VibWl0UGFzc2JhY2soc3VibWl0KSB7XG4gICAgICAgICAgdGhpcy5zdWJtaXQgPSBzdWJtaXQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgQ29ubmVjdGVkRm9ybS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlZHV4Rm9ybUNvbm5lY3RvciwgX2V4dGVuZHMoe30sIGNvbmZpZ1dpdGhEZWZhdWx0cywgdGhpcy5wcm9wcywge1xuICAgICAgICAgICAgc3VibWl0UGFzc2JhY2s6IHRoaXMuaGFuZGxlU3VibWl0UGFzc2JhY2sgfSkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBDb25uZWN0ZWRGb3JtO1xuICAgICAgfShDb21wb25lbnQpO1xuXG4gICAgICByZXR1cm4gKDAsIF9ob2lzdE5vblJlYWN0U3RhdGljczIuZGVmYXVsdCkoQ29ubmVjdGVkRm9ybSwgV3JhcHBlZENvbXBvbmVudCk7XG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVJlZHV4Rm9ybTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVSZWR1eEZvcm0uanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX25vR2V0dGVycyA9IHJlcXVpcmUoJ3JlYWN0LWxhenktY2FjaGUvbm9HZXR0ZXJzJyk7XG5cbnZhciBfbm9HZXR0ZXJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX25vR2V0dGVycyk7XG5cbnZhciBfZ2V0RGlzcGxheU5hbWUgPSByZXF1aXJlKCcuL2dldERpc3BsYXlOYW1lJyk7XG5cbnZhciBfZ2V0RGlzcGxheU5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0RGlzcGxheU5hbWUpO1xuXG52YXIgX2NyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9jcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCcpO1xuXG52YXIgX2NyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgdHJhY2tzIHByb3BzIHRoYXQgYWZmZWN0IGhvdyB0aGUgZm9ybSBpcyBtb3VudGVkIHRvIHRoZSBzdG9yZS4gTm9ybWFsbHkgdGhlc2Ugc2hvdWxkIG5vdCBjaGFuZ2UsXG4gKiBidXQgaWYgdGhleSBkbywgdGhlIGNvbm5lY3RlZCBjb21wb25lbnRzIGJlbG93IGl0IG5lZWQgdG8gYmUgcmVkZWZpbmVkLlxuICovXG52YXIgY3JlYXRlUmVkdXhGb3JtQ29ubmVjdG9yID0gZnVuY3Rpb24gY3JlYXRlUmVkdXhGb3JtQ29ubmVjdG9yKGlzUmVhY3ROYXRpdmUsIFJlYWN0LCBjb25uZWN0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoV3JhcHBlZENvbXBvbmVudCwgbWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIG9wdGlvbnMpIHtcbiAgICB2YXIgQ29tcG9uZW50ID0gUmVhY3QuQ29tcG9uZW50O1xuICAgIHZhciBQcm9wVHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbiAgICB2YXIgUmVkdXhGb3JtQ29ubmVjdG9yID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0cyhSZWR1eEZvcm1Db25uZWN0b3IsIF9Db21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBSZWR1eEZvcm1Db25uZWN0b3IocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlZHV4Rm9ybUNvbm5lY3Rvcik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMuY2FjaGUgPSBuZXcgX25vR2V0dGVyczIuZGVmYXVsdChfdGhpcywge1xuICAgICAgICAgIFJlZHV4Rm9ybToge1xuICAgICAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAgICAvLyBwcm9wcyB0aGF0IGVmZmVjdCBob3cgcmVkdXgtZm9ybSBjb25uZWN0cyB0byB0aGUgcmVkdXggc3RvcmVcbiAgICAgICAgICAgICdyZWR1eE1vdW50UG9pbnQnLCAnZm9ybScsICdmb3JtS2V5JywgJ2dldEZvcm1TdGF0ZSddLFxuICAgICAgICAgICAgZm46ICgwLCBfY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQyLmRlZmF1bHQpKHByb3BzLCBpc1JlYWN0TmF0aXZlLCBSZWFjdCwgY29ubmVjdCwgV3JhcHBlZENvbXBvbmVudCwgbWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIG9wdGlvbnMpXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfVxuXG4gICAgICBSZWR1eEZvcm1Db25uZWN0b3IucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICB0aGlzLmNhY2hlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIFJlZHV4Rm9ybUNvbm5lY3Rvci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgUmVkdXhGb3JtID0gdGhpcy5jYWNoZS5nZXQoJ1JlZHV4Rm9ybScpO1xuICAgICAgICAvLyByZW1vdmUgc29tZSByZWR1eC1mb3JtIGNvbmZpZy1vbmx5IHByb3BzXG4gICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgcmVkdXhNb3VudFBvaW50ID0gX3Byb3BzLnJlZHV4TW91bnRQb2ludDtcbiAgICAgICAgdmFyIGRlc3Ryb3lPblVubW91bnQgPSBfcHJvcHMuZGVzdHJveU9uVW5tb3VudDtcbiAgICAgICAgdmFyIGZvcm0gPSBfcHJvcHMuZm9ybTtcbiAgICAgICAgdmFyIGdldEZvcm1TdGF0ZSA9IF9wcm9wcy5nZXRGb3JtU3RhdGU7XG4gICAgICAgIHZhciB0b3VjaE9uQmx1ciA9IF9wcm9wcy50b3VjaE9uQmx1cjtcbiAgICAgICAgdmFyIHRvdWNoT25DaGFuZ2UgPSBfcHJvcHMudG91Y2hPbkNoYW5nZTtcblxuICAgICAgICB2YXIgcGFzc2FibGVQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsncmVkdXhNb3VudFBvaW50JywgJ2Rlc3Ryb3lPblVubW91bnQnLCAnZm9ybScsICdnZXRGb3JtU3RhdGUnLCAndG91Y2hPbkJsdXInLCAndG91Y2hPbkNoYW5nZSddKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZWRlY2xhcmVcblxuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlZHV4Rm9ybSwgcGFzc2FibGVQcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gUmVkdXhGb3JtQ29ubmVjdG9yO1xuICAgIH0oQ29tcG9uZW50KTtcblxuICAgIFJlZHV4Rm9ybUNvbm5lY3Rvci5kaXNwbGF5TmFtZSA9ICdSZWR1eEZvcm1Db25uZWN0b3IoJyArICgwLCBfZ2V0RGlzcGxheU5hbWUyLmRlZmF1bHQpKFdyYXBwZWRDb21wb25lbnQpICsgJyknO1xuICAgIFJlZHV4Rm9ybUNvbm5lY3Rvci5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICBSZWR1eEZvcm1Db25uZWN0b3IucHJvcFR5cGVzID0ge1xuICAgICAgZGVzdHJveU9uVW5tb3VudDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICByZWR1eE1vdW50UG9pbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBmb3JtOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBmb3JtS2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZ2V0Rm9ybVN0YXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIHRvdWNoT25CbHVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHRvdWNoT25DaGFuZ2U6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcbiAgICBSZWR1eEZvcm1Db25uZWN0b3IuZGVmYXVsdFByb3BzID0ge1xuICAgICAgcmVkdXhNb3VudFBvaW50OiAnZm9ybScsXG4gICAgICBnZXRGb3JtU3RhdGU6IGZ1bmN0aW9uIGdldEZvcm1TdGF0ZShzdGF0ZSwgcmVkdXhNb3VudFBvaW50KSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVtyZWR1eE1vdW50UG9pbnRdO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFJlZHV4Rm9ybUNvbm5lY3RvcjtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVJlZHV4Rm9ybUNvbm5lY3RvcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVSZWR1eEZvcm1Db25uZWN0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9ub0dldHRlcnMnKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LWxhenktY2FjaGUvbm9HZXR0ZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIF9kZWVwRXF1YWwgPSByZXF1aXJlKCdkZWVwLWVxdWFsJyk7XG5cbnZhciBfZGVlcEVxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZXBFcXVhbCk7XG5cbmZ1bmN0aW9uIGludGVyc2VjdHMoYXJyYXkxLCBhcnJheTIpIHtcbiAgcmV0dXJuICEhKGFycmF5MSAmJiBhcnJheTIgJiYgYXJyYXkxLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICByZXR1cm4gfmFycmF5Mi5pbmRleE9mKGl0ZW0pO1xuICB9KSk7XG59XG5cbnZhciBMYXp5Q2FjaGUgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBMYXp5Q2FjaGUoY29tcG9uZW50LCBjYWxjdWxhdG9ycykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGF6eUNhY2hlKTtcblxuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIHRoaXMuYWxsUHJvcHMgPSBbXTtcbiAgICB0aGlzLmNhY2hlID0gT2JqZWN0LmtleXMoY2FsY3VsYXRvcnMpLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGtleSkge1xuICAgICAgdmFyIF9leHRlbmRzMjtcblxuICAgICAgdmFyIGNhbGN1bGF0b3IgPSBjYWxjdWxhdG9yc1trZXldO1xuICAgICAgdmFyIGZuID0gY2FsY3VsYXRvci5mbjtcbiAgICAgIHZhciBwYXJhbU5hbWVzID0gY2FsY3VsYXRvci5wYXJhbXM7XG4gICAgICBwYXJhbU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgIGlmICghIH5fdGhpcy5hbGxQcm9wcy5pbmRleE9mKHBhcmFtKSkge1xuICAgICAgICAgIF90aGlzLmFsbFByb3BzLnB1c2gocGFyYW0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgYWNjdW11bGF0b3IsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW2tleV0gPSB7XG4gICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgIHByb3BzOiBwYXJhbU5hbWVzLFxuICAgICAgICBmbjogZm5cbiAgICAgIH0sIF9leHRlbmRzMikpO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIExhenlDYWNoZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIHZhciBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudDtcbiAgICB2YXIgX2NhY2hlJGtleSA9IHRoaXMuY2FjaGVba2V5XTtcbiAgICB2YXIgdmFsdWUgPSBfY2FjaGUka2V5LnZhbHVlO1xuICAgIHZhciBmbiA9IF9jYWNoZSRrZXkuZm47XG4gICAgdmFyIHByb3BzID0gX2NhY2hlJGtleS5wcm9wcztcblxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHZhciBwYXJhbXMgPSBwcm9wcy5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHJldHVybiBjb21wb25lbnQucHJvcHNbcHJvcF07XG4gICAgfSk7XG4gICAgdmFyIHJlc3VsdCA9IGZuLmFwcGx5KHVuZGVmaW5lZCwgcGFyYW1zKTtcbiAgICB0aGlzLmNhY2hlW2tleV0udmFsdWUgPSByZXN1bHQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBMYXp5Q2FjaGUucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50O1xuXG4gICAgdmFyIGRpZmZQcm9wcyA9IFtdO1xuICAgIHRoaXMuYWxsUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgaWYgKCFfZGVlcEVxdWFsMlsnZGVmYXVsdCddKGNvbXBvbmVudC5wcm9wc1twcm9wXSwgbmV4dFByb3BzW3Byb3BdKSkge1xuICAgICAgICBkaWZmUHJvcHMucHVzaChwcm9wKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoZGlmZlByb3BzLmxlbmd0aCkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5jYWNoZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChpbnRlcnNlY3RzKGRpZmZQcm9wcywgX3RoaXMyLmNhY2hlW2tleV0ucHJvcHMpKSB7XG4gICAgICAgICAgZGVsZXRlIF90aGlzMi5jYWNoZVtrZXldLnZhbHVlOyAvLyB1bmNhY2hlIHZhbHVlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gTGF6eUNhY2hlO1xufSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTGF6eUNhY2hlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbGF6eS1jYWNoZS9saWIvbm9HZXR0ZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBwU2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4vbGliL2tleXMuanMnKTtcbnZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vbGliL2lzX2FyZ3VtZW50cy5qcycpO1xuXG52YXIgZGVlcEVxdWFsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYWN0dWFsLCBleHBlY3RlZCwgb3B0cykge1xuICBpZiAoIW9wdHMpIG9wdHMgPSB7fTtcbiAgLy8gNy4xLiBBbGwgaWRlbnRpY2FsIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgYXMgZGV0ZXJtaW5lZCBieSA9PT0uXG4gIGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG5cbiAgfSBlbHNlIGlmIChhY3R1YWwgaW5zdGFuY2VvZiBEYXRlICYmIGV4cGVjdGVkIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBhY3R1YWwuZ2V0VGltZSgpID09PSBleHBlY3RlZC5nZXRUaW1lKCk7XG5cbiAgLy8gNy4zLiBPdGhlciBwYWlycyB0aGF0IGRvIG5vdCBib3RoIHBhc3MgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnLFxuICAvLyBlcXVpdmFsZW5jZSBpcyBkZXRlcm1pbmVkIGJ5ID09LlxuICB9IGVsc2UgaWYgKCFhY3R1YWwgfHwgIWV4cGVjdGVkIHx8IHR5cGVvZiBhY3R1YWwgIT0gJ29iamVjdCcgJiYgdHlwZW9mIGV4cGVjdGVkICE9ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG9wdHMuc3RyaWN0ID8gYWN0dWFsID09PSBleHBlY3RlZCA6IGFjdHVhbCA9PSBleHBlY3RlZDtcblxuICAvLyA3LjQuIEZvciBhbGwgb3RoZXIgT2JqZWN0IHBhaXJzLCBpbmNsdWRpbmcgQXJyYXkgb2JqZWN0cywgZXF1aXZhbGVuY2UgaXNcbiAgLy8gZGV0ZXJtaW5lZCBieSBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGFzIHZlcmlmaWVkXG4gIC8vIHdpdGggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKSwgdGhlIHNhbWUgc2V0IG9mIGtleXNcbiAgLy8gKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksIGVxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeVxuICAvLyBjb3JyZXNwb25kaW5nIGtleSwgYW5kIGFuIGlkZW50aWNhbCAncHJvdG90eXBlJyBwcm9wZXJ0eS4gTm90ZTogdGhpc1xuICAvLyBhY2NvdW50cyBmb3IgYm90aCBuYW1lZCBhbmQgaW5kZXhlZCBwcm9wZXJ0aWVzIG9uIEFycmF5cy5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb2JqRXF1aXYoYWN0dWFsLCBleHBlY3RlZCwgb3B0cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWRPck51bGwodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyICh4KSB7XG4gIGlmICgheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHgubGVuZ3RoICE9PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIHguY29weSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgeC5zbGljZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoeC5sZW5ndGggPiAwICYmIHR5cGVvZiB4WzBdICE9PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gb2JqRXF1aXYoYSwgYiwgb3B0cykge1xuICB2YXIgaSwga2V5O1xuICBpZiAoaXNVbmRlZmluZWRPck51bGwoYSkgfHwgaXNVbmRlZmluZWRPck51bGwoYikpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvLyBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuXG4gIGlmIChhLnByb3RvdHlwZSAhPT0gYi5wcm90b3R5cGUpIHJldHVybiBmYWxzZTtcbiAgLy9+fn5JJ3ZlIG1hbmFnZWQgdG8gYnJlYWsgT2JqZWN0LmtleXMgdGhyb3VnaCBzY3Jld3kgYXJndW1lbnRzIHBhc3NpbmcuXG4gIC8vICAgQ29udmVydGluZyB0byBhcnJheSBzb2x2ZXMgdGhlIHByb2JsZW0uXG4gIGlmIChpc0FyZ3VtZW50cyhhKSkge1xuICAgIGlmICghaXNBcmd1bWVudHMoYikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgYSA9IHBTbGljZS5jYWxsKGEpO1xuICAgIGIgPSBwU2xpY2UuY2FsbChiKTtcbiAgICByZXR1cm4gZGVlcEVxdWFsKGEsIGIsIG9wdHMpO1xuICB9XG4gIGlmIChpc0J1ZmZlcihhKSkge1xuICAgIGlmICghaXNCdWZmZXIoYikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB0cnkge1xuICAgIHZhciBrYSA9IG9iamVjdEtleXMoYSksXG4gICAgICAgIGtiID0gb2JqZWN0S2V5cyhiKTtcbiAgfSBjYXRjaCAoZSkgey8vaGFwcGVucyB3aGVuIG9uZSBpcyBhIHN0cmluZyBsaXRlcmFsIGFuZCB0aGUgb3RoZXIgaXNuJ3RcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChrZXlzIGluY29ycG9yYXRlc1xuICAvLyBoYXNPd25Qcm9wZXJ0eSlcbiAgaWYgKGthLmxlbmd0aCAhPSBrYi5sZW5ndGgpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvL3RoZSBzYW1lIHNldCBvZiBrZXlzIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLFxuICBrYS5zb3J0KCk7XG4gIGtiLnNvcnQoKTtcbiAgLy9+fn5jaGVhcCBrZXkgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChrYVtpXSAhPSBrYltpXSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvL2VxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeSBjb3JyZXNwb25kaW5nIGtleSwgYW5kXG4gIC8vfn5+cG9zc2libHkgZXhwZW5zaXZlIGRlZXAgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGtleSA9IGthW2ldO1xuICAgIGlmICghZGVlcEVxdWFsKGFba2V5XSwgYltrZXldLCBvcHRzKSkgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0eXBlb2YgYSA9PT0gdHlwZW9mIGI7XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kZWVwLWVxdWFsL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBPYmplY3Qua2V5cyA9PT0gJ2Z1bmN0aW9uJ1xuICA/IE9iamVjdC5rZXlzIDogc2hpbTtcblxuZXhwb3J0cy5zaGltID0gc2hpbTtcbmZ1bmN0aW9uIHNoaW0gKG9iaikge1xuICB2YXIga2V5cyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSBrZXlzLnB1c2goa2V5KTtcbiAgcmV0dXJuIGtleXM7XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kZWVwLWVxdWFsL2xpYi9rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBzdXBwb3J0c0FyZ3VtZW50c0NsYXNzID0gKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnRzKVxufSkoKSA9PSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gc3VwcG9ydHNBcmd1bWVudHNDbGFzcyA/IHN1cHBvcnRlZCA6IHVuc3VwcG9ydGVkO1xuXG5leHBvcnRzLnN1cHBvcnRlZCA9IHN1cHBvcnRlZDtcbmZ1bmN0aW9uIHN1cHBvcnRlZChvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpID09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xufTtcblxuZXhwb3J0cy51bnN1cHBvcnRlZCA9IHVuc3VwcG9ydGVkO1xuZnVuY3Rpb24gdW5zdXBwb3J0ZWQob2JqZWN0KXtcbiAgcmV0dXJuIG9iamVjdCAmJlxuICAgIHR5cGVvZiBvYmplY3QgPT0gJ29iamVjdCcgJiZcbiAgICB0eXBlb2Ygb2JqZWN0Lmxlbmd0aCA9PSAnbnVtYmVyJyAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdjYWxsZWUnKSAmJlxuICAgICFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCAnY2FsbGVlJykgfHxcbiAgICBmYWxzZTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kZWVwLWVxdWFsL2xpYi9pc19hcmd1bWVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0RGlzcGxheU5hbWU7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wKSB7XG4gIHJldHVybiBDb21wLmRpc3BsYXlOYW1lIHx8IENvbXAubmFtZSB8fCAnQ29tcG9uZW50Jztcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9nZXREaXNwbGF5TmFtZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfYWN0aW9ucyA9IHJlcXVpcmUoJy4vYWN0aW9ucycpO1xuXG52YXIgaW1wb3J0ZWRBY3Rpb25zID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2FjdGlvbnMpO1xuXG52YXIgX2dldERpc3BsYXlOYW1lID0gcmVxdWlyZSgnLi9nZXREaXNwbGF5TmFtZScpO1xuXG52YXIgX2dldERpc3BsYXlOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldERpc3BsYXlOYW1lKTtcblxudmFyIF9yZWR1Y2VyID0gcmVxdWlyZSgnLi9yZWR1Y2VyJyk7XG5cbnZhciBfZGVlcEVxdWFsID0gcmVxdWlyZSgnZGVlcC1lcXVhbCcpO1xuXG52YXIgX2RlZXBFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWVwRXF1YWwpO1xuXG52YXIgX2JpbmRBY3Rpb25EYXRhID0gcmVxdWlyZSgnLi9iaW5kQWN0aW9uRGF0YScpO1xuXG52YXIgX2JpbmRBY3Rpb25EYXRhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JpbmRBY3Rpb25EYXRhKTtcblxudmFyIF9nZXRWYWx1ZXMgPSByZXF1aXJlKCcuL2dldFZhbHVlcycpO1xuXG52YXIgX2dldFZhbHVlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRWYWx1ZXMpO1xuXG52YXIgX2lzVmFsaWQgPSByZXF1aXJlKCcuL2lzVmFsaWQnKTtcblxudmFyIF9pc1ZhbGlkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzVmFsaWQpO1xuXG52YXIgX3JlYWRGaWVsZHMgPSByZXF1aXJlKCcuL3JlYWRGaWVsZHMnKTtcblxudmFyIF9yZWFkRmllbGRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWRGaWVsZHMpO1xuXG52YXIgX2hhbmRsZVN1Ym1pdDIgPSByZXF1aXJlKCcuL2hhbmRsZVN1Ym1pdCcpO1xuXG52YXIgX2hhbmRsZVN1Ym1pdDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGVTdWJtaXQyKTtcblxudmFyIF9hc3luY1ZhbGlkYXRpb24gPSByZXF1aXJlKCcuL2FzeW5jVmFsaWRhdGlvbicpO1xuXG52YXIgX2FzeW5jVmFsaWRhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3luY1ZhbGlkYXRpb24pO1xuXG52YXIgX3NpbGVuY2VFdmVudHMgPSByZXF1aXJlKCcuL2V2ZW50cy9zaWxlbmNlRXZlbnRzJyk7XG5cbnZhciBfc2lsZW5jZUV2ZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaWxlbmNlRXZlbnRzKTtcblxudmFyIF9zaWxlbmNlRXZlbnQgPSByZXF1aXJlKCcuL2V2ZW50cy9zaWxlbmNlRXZlbnQnKTtcblxudmFyIF9zaWxlbmNlRXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2lsZW5jZUV2ZW50KTtcblxudmFyIF93cmFwTWFwRGlzcGF0Y2hUb1Byb3BzID0gcmVxdWlyZSgnLi93cmFwTWFwRGlzcGF0Y2hUb1Byb3BzJyk7XG5cbnZhciBfd3JhcE1hcERpc3BhdGNoVG9Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93cmFwTWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxudmFyIF93cmFwTWFwU3RhdGVUb1Byb3BzID0gcmVxdWlyZSgnLi93cmFwTWFwU3RhdGVUb1Byb3BzJyk7XG5cbnZhciBfd3JhcE1hcFN0YXRlVG9Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93cmFwTWFwU3RhdGVUb1Byb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxuICogQ3JlYXRlcyBhIEhPQyB0aGF0IGtub3dzIGhvdyB0byBjcmVhdGUgcmVkdXgtY29ubmVjdGVkIHN1Yi1jb21wb25lbnRzLlxuICovXG52YXIgY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQgPSBmdW5jdGlvbiBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChjb25maWcsIGlzUmVhY3ROYXRpdmUsIFJlYWN0LCBjb25uZWN0LCBXcmFwcGVkQ29tcG9uZW50LCBtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgb3B0aW9ucykge1xuICB2YXIgQ29tcG9uZW50ID0gUmVhY3QuQ29tcG9uZW50O1xuICB2YXIgUHJvcFR5cGVzID0gUmVhY3QuUHJvcFR5cGVzO1xuXG4gIHJldHVybiBmdW5jdGlvbiAocmVkdXhNb3VudFBvaW50LCBmb3JtTmFtZSwgZm9ybUtleSwgZ2V0Rm9ybVN0YXRlKSB7XG4gICAgdmFyIFJlZHV4Rm9ybSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHMoUmVkdXhGb3JtLCBfQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gUmVkdXhGb3JtKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWR1eEZvcm0pO1xuXG4gICAgICAgIC8vIGJpbmQgZnVuY3Rpb25zXG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMuYXN5bmNWYWxpZGF0ZSA9IF90aGlzLmFzeW5jVmFsaWRhdGUuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLmhhbmRsZVN1Ym1pdCA9IF90aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMuZmllbGRzID0gKDAsIF9yZWFkRmllbGRzMi5kZWZhdWx0KShwcm9wcywge30sIHt9LCBfdGhpcy5hc3luY1ZhbGlkYXRlLCBpc1JlYWN0TmF0aXZlKTtcbiAgICAgICAgdmFyIHN1Ym1pdFBhc3NiYWNrID0gX3RoaXMucHJvcHMuc3VibWl0UGFzc2JhY2s7XG5cbiAgICAgICAgc3VibWl0UGFzc2JhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVTdWJtaXQoKTtcbiAgICAgICAgfSk7IC8vIHdyYXBwZWQgaW4gZnVuY3Rpb24gdG8gZGlzYWxsb3cgcGFyYW1zXG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cblxuICAgICAgUmVkdXhGb3JtLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgZmllbGRzID0gX3Byb3BzLmZpZWxkcztcbiAgICAgICAgdmFyIGZvcm0gPSBfcHJvcHMuZm9ybTtcbiAgICAgICAgdmFyIGluaXRpYWxpemUgPSBfcHJvcHMuaW5pdGlhbGl6ZTtcbiAgICAgICAgdmFyIGluaXRpYWxWYWx1ZXMgPSBfcHJvcHMuaW5pdGlhbFZhbHVlcztcblxuICAgICAgICBpZiAoaW5pdGlhbFZhbHVlcyAmJiAhZm9ybS5faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICBpbml0aWFsaXplKGluaXRpYWxWYWx1ZXMsIGZpZWxkcyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIFJlZHV4Rm9ybS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICghKDAsIF9kZWVwRXF1YWwyLmRlZmF1bHQpKHRoaXMucHJvcHMuZmllbGRzLCBuZXh0UHJvcHMuZmllbGRzKSB8fCAhKDAsIF9kZWVwRXF1YWwyLmRlZmF1bHQpKHRoaXMucHJvcHMuZm9ybSwgbmV4dFByb3BzLmZvcm0sIHsgc3RyaWN0OiB0cnVlIH0pKSB7XG4gICAgICAgICAgdGhpcy5maWVsZHMgPSAoMCwgX3JlYWRGaWVsZHMyLmRlZmF1bHQpKG5leHRQcm9wcywgdGhpcy5wcm9wcywgdGhpcy5maWVsZHMsIHRoaXMuYXN5bmNWYWxpZGF0ZSwgaXNSZWFjdE5hdGl2ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoMCwgX2RlZXBFcXVhbDIuZGVmYXVsdCkodGhpcy5wcm9wcy5pbml0aWFsVmFsdWVzLCBuZXh0UHJvcHMuaW5pdGlhbFZhbHVlcykpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmluaXRpYWxpemUobmV4dFByb3BzLmluaXRpYWxWYWx1ZXMsIG5leHRQcm9wcy5maWVsZHMsIHRoaXMucHJvcHMub3ZlcndyaXRlT25Jbml0aWFsVmFsdWVzQ2hhbmdlIHx8ICF0aGlzLnByb3BzLmZvcm0uX2luaXRpYWxpemVkKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgUmVkdXhGb3JtLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAoY29uZmlnLmRlc3Ryb3lPblVubW91bnQpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgUmVkdXhGb3JtLnByb3RvdHlwZS5hc3luY1ZhbGlkYXRlID0gZnVuY3Rpb24gYXN5bmNWYWxpZGF0ZShuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciBhbHdheXNBc3luY1ZhbGlkYXRlID0gX3Byb3BzMi5hbHdheXNBc3luY1ZhbGlkYXRlO1xuICAgICAgICB2YXIgYXN5bmNWYWxpZGF0ZSA9IF9wcm9wczIuYXN5bmNWYWxpZGF0ZTtcbiAgICAgICAgdmFyIGRpc3BhdGNoID0gX3Byb3BzMi5kaXNwYXRjaDtcbiAgICAgICAgdmFyIGZpZWxkcyA9IF9wcm9wczIuZmllbGRzO1xuICAgICAgICB2YXIgZm9ybSA9IF9wcm9wczIuZm9ybTtcbiAgICAgICAgdmFyIHN0YXJ0QXN5bmNWYWxpZGF0aW9uID0gX3Byb3BzMi5zdGFydEFzeW5jVmFsaWRhdGlvbjtcbiAgICAgICAgdmFyIHN0b3BBc3luY1ZhbGlkYXRpb24gPSBfcHJvcHMyLnN0b3BBc3luY1ZhbGlkYXRpb247XG4gICAgICAgIHZhciB2YWxpZGF0ZSA9IF9wcm9wczIudmFsaWRhdGU7XG5cbiAgICAgICAgdmFyIGlzU3VibWl0dGluZyA9ICFuYW1lO1xuICAgICAgICBpZiAoYXN5bmNWYWxpZGF0ZSkge1xuICAgICAgICAgIHZhciBfcmV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9ICgwLCBfZ2V0VmFsdWVzMi5kZWZhdWx0KShmaWVsZHMsIGZvcm0pO1xuICAgICAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgICAgdmFsdWVzW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3luY0Vycm9ycyA9IHZhbGlkYXRlKHZhbHVlcywgX3RoaXMyLnByb3BzKTtcbiAgICAgICAgICAgIHZhciBhbGxQcmlzdGluZSA9IF90aGlzMi5maWVsZHMuX21ldGEuYWxsUHJpc3RpbmU7XG5cbiAgICAgICAgICAgIHZhciBpbml0aWFsaXplZCA9IGZvcm0uX2luaXRpYWxpemVkO1xuXG4gICAgICAgICAgICAvLyBpZiBibHVyIHZhbGlkYXRpbmcsIG9ubHkgcnVuIGFzeW5jIHZhbGlkYXRlIGlmIHN5bmMgdmFsaWRhdGlvbiBwYXNzZXNcbiAgICAgICAgICAgIC8vIGFuZCBzdWJtaXR0aW5nIChub3QgYmx1ciB2YWxpZGF0aW9uKSBvciBmb3JtIGlzIGRpcnR5IG9yIGZvcm0gd2FzIG5ldmVyIGluaXRpYWxpemVkXG4gICAgICAgICAgICAvLyB1bmxlc3MgYWx3YXlzQXN5bmNWYWxpZGF0ZSBpcyB0cnVlXG4gICAgICAgICAgICB2YXIgc3luY1ZhbGlkYXRpb25QYXNzZXMgPSBpc1N1Ym1pdHRpbmcgfHwgKDAsIF9pc1ZhbGlkMi5kZWZhdWx0KShzeW5jRXJyb3JzW25hbWVdKTtcbiAgICAgICAgICAgIGlmIChhbHdheXNBc3luY1ZhbGlkYXRlIHx8IHN5bmNWYWxpZGF0aW9uUGFzc2VzICYmIChpc1N1Ym1pdHRpbmcgfHwgIWFsbFByaXN0aW5lIHx8ICFpbml0aWFsaXplZCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2OiAoMCwgX2FzeW5jVmFsaWRhdGlvbjIuZGVmYXVsdCkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzeW5jVmFsaWRhdGUodmFsdWVzLCBkaXNwYXRjaCwgX3RoaXMyLnByb3BzKTtcbiAgICAgICAgICAgICAgICB9LCBzdGFydEFzeW5jVmFsaWRhdGlvbiwgc3RvcEFzeW5jVmFsaWRhdGlvbiwgbmFtZSlcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KCk7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIF9yZXQgPT09IFwib2JqZWN0XCIpIHJldHVybiBfcmV0LnY7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIFJlZHV4Rm9ybS5wcm90b3R5cGUuaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24gaGFuZGxlU3VibWl0KHN1Ym1pdE9yRXZlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgb25TdWJtaXQgPSBfcHJvcHMzLm9uU3VibWl0O1xuICAgICAgICB2YXIgZmllbGRzID0gX3Byb3BzMy5maWVsZHM7XG4gICAgICAgIHZhciBmb3JtID0gX3Byb3BzMy5mb3JtO1xuXG4gICAgICAgIHZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKHN1Ym1pdCkge1xuICAgICAgICAgIGlmICghc3VibWl0IHx8IHR5cGVvZiBzdWJtaXQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3QgZWl0aGVyIHBhc3MgaGFuZGxlU3VibWl0KCkgYW4gb25TdWJtaXQgZnVuY3Rpb24gb3IgcGFzcyBvblN1Ym1pdCBhcyBhIHByb3AnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN1Ym1pdDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuICFzdWJtaXRPckV2ZW50IHx8ICgwLCBfc2lsZW5jZUV2ZW50Mi5kZWZhdWx0KShzdWJtaXRPckV2ZW50KSA/XG4gICAgICAgIC8vIHN1Ym1pdE9yRXZlbnQgaXMgYW4gZXZlbnQ6IGZpcmUgc3VibWl0XG4gICAgICAgICgwLCBfaGFuZGxlU3VibWl0My5kZWZhdWx0KShjaGVjayhvblN1Ym1pdCksICgwLCBfZ2V0VmFsdWVzMi5kZWZhdWx0KShmaWVsZHMsIGZvcm0pLCB0aGlzLnByb3BzLCB0aGlzLmFzeW5jVmFsaWRhdGUpIDpcbiAgICAgICAgLy8gc3VibWl0T3JFdmVudCBpcyB0aGUgc3VibWl0IGZ1bmN0aW9uOiByZXR1cm4gZGVmZXJyZWQgc3VibWl0IHRodW5rXG4gICAgICAgICgwLCBfc2lsZW5jZUV2ZW50czIuZGVmYXVsdCkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiAoMCwgX2hhbmRsZVN1Ym1pdDMuZGVmYXVsdCkoY2hlY2soc3VibWl0T3JFdmVudCksICgwLCBfZ2V0VmFsdWVzMi5kZWZhdWx0KShmaWVsZHMsIGZvcm0pLCBfdGhpczMucHJvcHMsIF90aGlzMy5hc3luY1ZhbGlkYXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBSZWR1eEZvcm0ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzNCA9IHRoaXMsXG4gICAgICAgICAgICBfcmVmO1xuXG4gICAgICAgIHZhciBhbGxGaWVsZHMgPSB0aGlzLmZpZWxkcztcbiAgICAgICAgdmFyIF9wcm9wczQgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgYWRkQXJyYXlWYWx1ZSA9IF9wcm9wczQuYWRkQXJyYXlWYWx1ZTtcbiAgICAgICAgdmFyIGFzeW5jQmx1ckZpZWxkcyA9IF9wcm9wczQuYXN5bmNCbHVyRmllbGRzO1xuICAgICAgICB2YXIgYXV0b2ZpbGwgPSBfcHJvcHM0LmF1dG9maWxsO1xuICAgICAgICB2YXIgYmx1ciA9IF9wcm9wczQuYmx1cjtcbiAgICAgICAgdmFyIGNoYW5nZSA9IF9wcm9wczQuY2hhbmdlO1xuICAgICAgICB2YXIgZGVzdHJveSA9IF9wcm9wczQuZGVzdHJveTtcbiAgICAgICAgdmFyIGZvY3VzID0gX3Byb3BzNC5mb2N1cztcbiAgICAgICAgdmFyIGZpZWxkcyA9IF9wcm9wczQuZmllbGRzO1xuICAgICAgICB2YXIgZm9ybSA9IF9wcm9wczQuZm9ybTtcbiAgICAgICAgdmFyIGluaXRpYWxWYWx1ZXMgPSBfcHJvcHM0LmluaXRpYWxWYWx1ZXM7XG4gICAgICAgIHZhciBpbml0aWFsaXplID0gX3Byb3BzNC5pbml0aWFsaXplO1xuICAgICAgICB2YXIgb25TdWJtaXQgPSBfcHJvcHM0Lm9uU3VibWl0O1xuICAgICAgICB2YXIgcHJvcE5hbWVzcGFjZSA9IF9wcm9wczQucHJvcE5hbWVzcGFjZTtcbiAgICAgICAgdmFyIHJlc2V0ID0gX3Byb3BzNC5yZXNldDtcbiAgICAgICAgdmFyIHJlbW92ZUFycmF5VmFsdWUgPSBfcHJvcHM0LnJlbW92ZUFycmF5VmFsdWU7XG4gICAgICAgIHZhciByZXR1cm5SZWplY3RlZFN1Ym1pdFByb21pc2UgPSBfcHJvcHM0LnJldHVyblJlamVjdGVkU3VibWl0UHJvbWlzZTtcbiAgICAgICAgdmFyIHN0YXJ0QXN5bmNWYWxpZGF0aW9uID0gX3Byb3BzNC5zdGFydEFzeW5jVmFsaWRhdGlvbjtcbiAgICAgICAgdmFyIHN0YXJ0U3VibWl0ID0gX3Byb3BzNC5zdGFydFN1Ym1pdDtcbiAgICAgICAgdmFyIHN0b3BBc3luY1ZhbGlkYXRpb24gPSBfcHJvcHM0LnN0b3BBc3luY1ZhbGlkYXRpb247XG4gICAgICAgIHZhciBzdG9wU3VibWl0ID0gX3Byb3BzNC5zdG9wU3VibWl0O1xuICAgICAgICB2YXIgc3VibWl0RmFpbGVkID0gX3Byb3BzNC5zdWJtaXRGYWlsZWQ7XG4gICAgICAgIHZhciBzd2FwQXJyYXlWYWx1ZXMgPSBfcHJvcHM0LnN3YXBBcnJheVZhbHVlcztcbiAgICAgICAgdmFyIHRvdWNoID0gX3Byb3BzNC50b3VjaDtcbiAgICAgICAgdmFyIHVudG91Y2ggPSBfcHJvcHM0LnVudG91Y2g7XG4gICAgICAgIHZhciB2YWxpZGF0ZSA9IF9wcm9wczQudmFsaWRhdGU7XG5cbiAgICAgICAgdmFyIHBhc3NhYmxlUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzNCwgWydhZGRBcnJheVZhbHVlJywgJ2FzeW5jQmx1ckZpZWxkcycsICdhdXRvZmlsbCcsICdibHVyJywgJ2NoYW5nZScsICdkZXN0cm95JywgJ2ZvY3VzJywgJ2ZpZWxkcycsICdmb3JtJywgJ2luaXRpYWxWYWx1ZXMnLCAnaW5pdGlhbGl6ZScsICdvblN1Ym1pdCcsICdwcm9wTmFtZXNwYWNlJywgJ3Jlc2V0JywgJ3JlbW92ZUFycmF5VmFsdWUnLCAncmV0dXJuUmVqZWN0ZWRTdWJtaXRQcm9taXNlJywgJ3N0YXJ0QXN5bmNWYWxpZGF0aW9uJywgJ3N0YXJ0U3VibWl0JywgJ3N0b3BBc3luY1ZhbGlkYXRpb24nLCAnc3RvcFN1Ym1pdCcsICdzdWJtaXRGYWlsZWQnLCAnc3dhcEFycmF5VmFsdWVzJywgJ3RvdWNoJywgJ3VudG91Y2gnLCAndmFsaWRhdGUnXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVkZWNsYXJlXG5cblxuICAgICAgICB2YXIgX2FsbEZpZWxkcyRfbWV0YSA9IGFsbEZpZWxkcy5fbWV0YTtcbiAgICAgICAgdmFyIGFsbFByaXN0aW5lID0gX2FsbEZpZWxkcyRfbWV0YS5hbGxQcmlzdGluZTtcbiAgICAgICAgdmFyIGFsbFZhbGlkID0gX2FsbEZpZWxkcyRfbWV0YS5hbGxWYWxpZDtcbiAgICAgICAgdmFyIGVycm9ycyA9IF9hbGxGaWVsZHMkX21ldGEuZXJyb3JzO1xuICAgICAgICB2YXIgZm9ybUVycm9yID0gX2FsbEZpZWxkcyRfbWV0YS5mb3JtRXJyb3I7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBfYWxsRmllbGRzJF9tZXRhLnZhbHVlcztcblxuXG4gICAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgICAvLyBTdGF0ZTpcbiAgICAgICAgICBhY3RpdmU6IGZvcm0uX2FjdGl2ZSxcbiAgICAgICAgICBhc3luY1ZhbGlkYXRpbmc6IGZvcm0uX2FzeW5jVmFsaWRhdGluZyxcbiAgICAgICAgICBkaXJ0eTogIWFsbFByaXN0aW5lLFxuICAgICAgICAgIGVycm9yOiBmb3JtRXJyb3IsXG4gICAgICAgICAgZXJyb3JzOiBlcnJvcnMsXG4gICAgICAgICAgZmllbGRzOiBhbGxGaWVsZHMsXG4gICAgICAgICAgZm9ybUtleTogZm9ybUtleSxcbiAgICAgICAgICBpbnZhbGlkOiAhYWxsVmFsaWQsXG4gICAgICAgICAgcHJpc3RpbmU6IGFsbFByaXN0aW5lLFxuICAgICAgICAgIHN1Ym1pdHRpbmc6IGZvcm0uX3N1Ym1pdHRpbmcsXG4gICAgICAgICAgc3VibWl0RmFpbGVkOiBmb3JtLl9zdWJtaXRGYWlsZWQsXG4gICAgICAgICAgdmFsaWQ6IGFsbFZhbGlkLFxuICAgICAgICAgIHZhbHVlczogdmFsdWVzLFxuXG4gICAgICAgICAgLy8gQWN0aW9uczpcbiAgICAgICAgICBhc3luY1ZhbGlkYXRlOiAoMCwgX3NpbGVuY2VFdmVudHMyLmRlZmF1bHQpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczQuYXN5bmNWYWxpZGF0ZSgpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8vIF4gZG9lc24ndCBqdXN0IHBhc3MgdGhpcy5hc3luY1ZhbGlkYXRlIHRvIGRpc2FsbG93IHZhbHVlcyBwYXNzaW5nXG4gICAgICAgICAgZGVzdHJveUZvcm06ICgwLCBfc2lsZW5jZUV2ZW50czIuZGVmYXVsdCkoZGVzdHJveSksXG4gICAgICAgICAgaGFuZGxlU3VibWl0OiB0aGlzLmhhbmRsZVN1Ym1pdCxcbiAgICAgICAgICBpbml0aWFsaXplRm9ybTogKDAsIF9zaWxlbmNlRXZlbnRzMi5kZWZhdWx0KShmdW5jdGlvbiAoaW5pdFZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxpemUoaW5pdFZhbHVlcywgZmllbGRzKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICByZXNldEZvcm06ICgwLCBfc2lsZW5jZUV2ZW50czIuZGVmYXVsdCkocmVzZXQpLFxuICAgICAgICAgIHRvdWNoOiAoMCwgX3NpbGVuY2VFdmVudHMyLmRlZmF1bHQpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0b3VjaC5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdG91Y2hBbGw6ICgwLCBfc2lsZW5jZUV2ZW50czIuZGVmYXVsdCkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRvdWNoLmFwcGx5KHVuZGVmaW5lZCwgZmllbGRzKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB1bnRvdWNoOiAoMCwgX3NpbGVuY2VFdmVudHMyLmRlZmF1bHQpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bnRvdWNoLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB1bnRvdWNoQWxsOiAoMCwgX3NpbGVuY2VFdmVudHMyLmRlZmF1bHQpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB1bnRvdWNoLmFwcGx5KHVuZGVmaW5lZCwgZmllbGRzKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICB2YXIgcGFzc2VkUHJvcHMgPSBwcm9wTmFtZXNwYWNlID8gKF9yZWYgPSB7fSwgX3JlZltwcm9wTmFtZXNwYWNlXSA9IHByb3BzLCBfcmVmKSA6IHByb3BzO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcGFzc2FibGVQcm9wcywgcGFzc2VkUHJvcHMpKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBSZWR1eEZvcm07XG4gICAgfShDb21wb25lbnQpO1xuXG4gICAgUmVkdXhGb3JtLmRpc3BsYXlOYW1lID0gJ1JlZHV4Rm9ybSgnICsgKDAsIF9nZXREaXNwbGF5TmFtZTIuZGVmYXVsdCkoV3JhcHBlZENvbXBvbmVudCkgKyAnKSc7XG4gICAgUmVkdXhGb3JtLldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICAgIFJlZHV4Rm9ybS5wcm9wVHlwZXMgPSB7XG4gICAgICAvLyBwcm9wczpcbiAgICAgIGFsd2F5c0FzeW5jVmFsaWRhdGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgYXN5bmNCbHVyRmllbGRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICAgIGFzeW5jVmFsaWRhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBmaWVsZHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLmlzUmVxdWlyZWQsXG4gICAgICBmb3JtOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgaW5pdGlhbFZhbHVlczogUHJvcFR5cGVzLmFueSxcbiAgICAgIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG9uU3VibWl0U3VjY2VzczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBvblN1Ym1pdEZhaWw6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgb3ZlcndyaXRlT25Jbml0aWFsVmFsdWVzQ2hhbmdlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgcHJvcE5hbWVzcGFjZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHJlYWRvbmx5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHJldHVyblJlamVjdGVkU3VibWl0UHJvbWlzZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBzdWJtaXRQYXNzYmFjazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHZhbGlkYXRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgICAgLy8gYWN0aW9uczpcbiAgICAgIGFkZEFycmF5VmFsdWU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBhdXRvZmlsbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGJsdXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBjaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBkZXN0cm95OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgZm9jdXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBpbml0aWFsaXplOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgcmVtb3ZlQXJyYXlWYWx1ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHJlc2V0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgc3RhcnRBc3luY1ZhbGlkYXRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBzdGFydFN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHN0b3BBc3luY1ZhbGlkYXRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBzdG9wU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgc3VibWl0RmFpbGVkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgc3dhcEFycmF5VmFsdWVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgdG91Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICB1bnRvdWNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfTtcbiAgICBSZWR1eEZvcm0uZGVmYXVsdFByb3BzID0ge1xuICAgICAgYXN5bmNCbHVyRmllbGRzOiBbXSxcbiAgICAgIGZvcm06IF9yZWR1Y2VyLmluaXRpYWxTdGF0ZSxcbiAgICAgIHJlYWRvbmx5OiBmYWxzZSxcbiAgICAgIHJldHVyblJlamVjdGVkU3VibWl0UHJvbWlzZTogZmFsc2UsXG4gICAgICB2YWxpZGF0ZTogZnVuY3Rpb24gdmFsaWRhdGUoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYmluZCB0b3VjaCBmbGFncyB0byBibHVyIGFuZCBjaGFuZ2VcbiAgICB2YXIgdW5ib3VuZEFjdGlvbnMgPSBfZXh0ZW5kcyh7fSwgaW1wb3J0ZWRBY3Rpb25zLCB7XG4gICAgICBibHVyOiAoMCwgX2JpbmRBY3Rpb25EYXRhMi5kZWZhdWx0KShpbXBvcnRlZEFjdGlvbnMuYmx1ciwge1xuICAgICAgICB0b3VjaDogISFjb25maWcudG91Y2hPbkJsdXJcbiAgICAgIH0pLFxuICAgICAgY2hhbmdlOiAoMCwgX2JpbmRBY3Rpb25EYXRhMi5kZWZhdWx0KShpbXBvcnRlZEFjdGlvbnMuY2hhbmdlLCB7XG4gICAgICAgIHRvdWNoOiAhIWNvbmZpZy50b3VjaE9uQ2hhbmdlXG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgLy8gbWFrZSByZWR1eCBjb25uZWN0b3Igd2l0aCBvciB3aXRob3V0IGZvcm0ga2V5XG4gICAgdmFyIGRlY29yYXRlID0gZm9ybUtleSAhPT0gdW5kZWZpbmVkICYmIGZvcm1LZXkgIT09IG51bGwgPyBjb25uZWN0KCgwLCBfd3JhcE1hcFN0YXRlVG9Qcm9wczIuZGVmYXVsdCkobWFwU3RhdGVUb1Byb3BzLCBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHZhciBmb3JtU3RhdGUgPSBnZXRGb3JtU3RhdGUoc3RhdGUsIHJlZHV4TW91bnRQb2ludCk7XG4gICAgICBpZiAoIWZvcm1TdGF0ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBuZWVkIHRvIG1vdW50IHRoZSByZWR1eC1mb3JtIHJlZHVjZXIgYXQgXCInICsgcmVkdXhNb3VudFBvaW50ICsgJ1wiJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm9ybVN0YXRlICYmIGZvcm1TdGF0ZVtmb3JtTmFtZV0gJiYgZm9ybVN0YXRlW2Zvcm1OYW1lXVtmb3JtS2V5XTtcbiAgICB9KSwgKDAsIF93cmFwTWFwRGlzcGF0Y2hUb1Byb3BzMi5kZWZhdWx0KShtYXBEaXNwYXRjaFRvUHJvcHMsICgwLCBfYmluZEFjdGlvbkRhdGEyLmRlZmF1bHQpKHVuYm91bmRBY3Rpb25zLCB7XG4gICAgICBmb3JtOiBmb3JtTmFtZSxcbiAgICAgIGtleTogZm9ybUtleVxuICAgIH0pKSwgbWVyZ2VQcm9wcywgb3B0aW9ucykgOiBjb25uZWN0KCgwLCBfd3JhcE1hcFN0YXRlVG9Qcm9wczIuZGVmYXVsdCkobWFwU3RhdGVUb1Byb3BzLCBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHZhciBmb3JtU3RhdGUgPSBnZXRGb3JtU3RhdGUoc3RhdGUsIHJlZHV4TW91bnRQb2ludCk7XG4gICAgICBpZiAoIWZvcm1TdGF0ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBuZWVkIHRvIG1vdW50IHRoZSByZWR1eC1mb3JtIHJlZHVjZXIgYXQgXCInICsgcmVkdXhNb3VudFBvaW50ICsgJ1wiJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm9ybVN0YXRlICYmIGZvcm1TdGF0ZVtmb3JtTmFtZV07XG4gICAgfSksICgwLCBfd3JhcE1hcERpc3BhdGNoVG9Qcm9wczIuZGVmYXVsdCkobWFwRGlzcGF0Y2hUb1Byb3BzLCAoMCwgX2JpbmRBY3Rpb25EYXRhMi5kZWZhdWx0KSh1bmJvdW5kQWN0aW9ucywgeyBmb3JtOiBmb3JtTmFtZSB9KSksIG1lcmdlUHJvcHMsIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIGRlY29yYXRlKFJlZHV4Rm9ybSk7XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnVudG91Y2ggPSBleHBvcnRzLnRvdWNoID0gZXhwb3J0cy5zd2FwQXJyYXlWYWx1ZXMgPSBleHBvcnRzLnN1Ym1pdEZhaWxlZCA9IGV4cG9ydHMuc3RvcFN1Ym1pdCA9IGV4cG9ydHMuc3RvcEFzeW5jVmFsaWRhdGlvbiA9IGV4cG9ydHMuc3RhcnRTdWJtaXQgPSBleHBvcnRzLnN0YXJ0QXN5bmNWYWxpZGF0aW9uID0gZXhwb3J0cy5yZXNldCA9IGV4cG9ydHMucmVtb3ZlQXJyYXlWYWx1ZSA9IGV4cG9ydHMuaW5pdGlhbGl6ZSA9IGV4cG9ydHMuZm9jdXMgPSBleHBvcnRzLmRlc3Ryb3kgPSBleHBvcnRzLmNoYW5nZSA9IGV4cG9ydHMuYmx1ciA9IGV4cG9ydHMuYXV0b2ZpbGwgPSBleHBvcnRzLmFkZEFycmF5VmFsdWUgPSB1bmRlZmluZWQ7XG5cbnZhciBfYWN0aW9uVHlwZXMgPSByZXF1aXJlKCcuL2FjdGlvblR5cGVzJyk7XG5cbnZhciBhZGRBcnJheVZhbHVlID0gZXhwb3J0cy5hZGRBcnJheVZhbHVlID0gZnVuY3Rpb24gYWRkQXJyYXlWYWx1ZShwYXRoLCB2YWx1ZSwgaW5kZXgsIGZpZWxkcykge1xuICByZXR1cm4geyB0eXBlOiBfYWN0aW9uVHlwZXMuQUREX0FSUkFZX1ZBTFVFLCBwYXRoOiBwYXRoLCB2YWx1ZTogdmFsdWUsIGluZGV4OiBpbmRleCwgZmllbGRzOiBmaWVsZHMgfTtcbn07XG5cbnZhciBhdXRvZmlsbCA9IGV4cG9ydHMuYXV0b2ZpbGwgPSBmdW5jdGlvbiBhdXRvZmlsbChmaWVsZCwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdHlwZTogX2FjdGlvblR5cGVzLkFVVE9GSUxMLCBmaWVsZDogZmllbGQsIHZhbHVlOiB2YWx1ZSB9O1xufTtcblxudmFyIGJsdXIgPSBleHBvcnRzLmJsdXIgPSBmdW5jdGlvbiBibHVyKGZpZWxkLCB2YWx1ZSkge1xuICByZXR1cm4geyB0eXBlOiBfYWN0aW9uVHlwZXMuQkxVUiwgZmllbGQ6IGZpZWxkLCB2YWx1ZTogdmFsdWUgfTtcbn07XG5cbnZhciBjaGFuZ2UgPSBleHBvcnRzLmNoYW5nZSA9IGZ1bmN0aW9uIGNoYW5nZShmaWVsZCwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdHlwZTogX2FjdGlvblR5cGVzLkNIQU5HRSwgZmllbGQ6IGZpZWxkLCB2YWx1ZTogdmFsdWUgfTtcbn07XG5cbnZhciBkZXN0cm95ID0gZXhwb3J0cy5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgcmV0dXJuIHsgdHlwZTogX2FjdGlvblR5cGVzLkRFU1RST1kgfTtcbn07XG5cbnZhciBmb2N1cyA9IGV4cG9ydHMuZm9jdXMgPSBmdW5jdGlvbiBmb2N1cyhmaWVsZCkge1xuICByZXR1cm4geyB0eXBlOiBfYWN0aW9uVHlwZXMuRk9DVVMsIGZpZWxkOiBmaWVsZCB9O1xufTtcblxudmFyIGluaXRpYWxpemUgPSBleHBvcnRzLmluaXRpYWxpemUgPSBmdW5jdGlvbiBpbml0aWFsaXplKGRhdGEsIGZpZWxkcykge1xuICB2YXIgb3ZlcndyaXRlVmFsdWVzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFyZ3VtZW50c1syXTtcblxuICBpZiAoIUFycmF5LmlzQXJyYXkoZmllbGRzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignbXVzdCBwcm92aWRlIGZpZWxkcyBhcnJheSB0byBpbml0aWFsaXplKCkgYWN0aW9uIGNyZWF0b3InKTtcbiAgfVxuICByZXR1cm4geyB0eXBlOiBfYWN0aW9uVHlwZXMuSU5JVElBTElaRSwgZGF0YTogZGF0YSwgZmllbGRzOiBmaWVsZHMsIG92ZXJ3cml0ZVZhbHVlczogb3ZlcndyaXRlVmFsdWVzIH07XG59O1xuXG52YXIgcmVtb3ZlQXJyYXlWYWx1ZSA9IGV4cG9ydHMucmVtb3ZlQXJyYXlWYWx1ZSA9IGZ1bmN0aW9uIHJlbW92ZUFycmF5VmFsdWUocGF0aCwgaW5kZXgpIHtcbiAgcmV0dXJuIHsgdHlwZTogX2FjdGlvblR5cGVzLlJFTU9WRV9BUlJBWV9WQUxVRSwgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4IH07XG59O1xuXG52YXIgcmVzZXQgPSBleHBvcnRzLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoKSB7XG4gIHJldHVybiB7IHR5cGU6IF9hY3Rpb25UeXBlcy5SRVNFVCB9O1xufTtcblxudmFyIHN0YXJ0QXN5bmNWYWxpZGF0aW9uID0gZXhwb3J0cy5zdGFydEFzeW5jVmFsaWRhdGlvbiA9IGZ1bmN0aW9uIHN0YXJ0QXN5bmNWYWxpZGF0aW9uKGZpZWxkKSB7XG4gIHJldHVybiB7IHR5cGU6IF9hY3Rpb25UeXBlcy5TVEFSVF9BU1lOQ19WQUxJREFUSU9OLCBmaWVsZDogZmllbGQgfTtcbn07XG5cbnZhciBzdGFydFN1Ym1pdCA9IGV4cG9ydHMuc3RhcnRTdWJtaXQgPSBmdW5jdGlvbiBzdGFydFN1Ym1pdCgpIHtcbiAgcmV0dXJuIHsgdHlwZTogX2FjdGlvblR5cGVzLlNUQVJUX1NVQk1JVCB9O1xufTtcblxudmFyIHN0b3BBc3luY1ZhbGlkYXRpb24gPSBleHBvcnRzLnN0b3BBc3luY1ZhbGlkYXRpb24gPSBmdW5jdGlvbiBzdG9wQXN5bmNWYWxpZGF0aW9uKGVycm9ycykge1xuICByZXR1cm4geyB0eXBlOiBfYWN0aW9uVHlwZXMuU1RPUF9BU1lOQ19WQUxJREFUSU9OLCBlcnJvcnM6IGVycm9ycyB9O1xufTtcblxudmFyIHN0b3BTdWJtaXQgPSBleHBvcnRzLnN0b3BTdWJtaXQgPSBmdW5jdGlvbiBzdG9wU3VibWl0KGVycm9ycykge1xuICByZXR1cm4geyB0eXBlOiBfYWN0aW9uVHlwZXMuU1RPUF9TVUJNSVQsIGVycm9yczogZXJyb3JzIH07XG59O1xuXG52YXIgc3VibWl0RmFpbGVkID0gZXhwb3J0cy5zdWJtaXRGYWlsZWQgPSBmdW5jdGlvbiBzdWJtaXRGYWlsZWQoKSB7XG4gIHJldHVybiB7IHR5cGU6IF9hY3Rpb25UeXBlcy5TVUJNSVRfRkFJTEVEIH07XG59O1xuXG52YXIgc3dhcEFycmF5VmFsdWVzID0gZXhwb3J0cy5zd2FwQXJyYXlWYWx1ZXMgPSBmdW5jdGlvbiBzd2FwQXJyYXlWYWx1ZXMocGF0aCwgaW5kZXhBLCBpbmRleEIpIHtcbiAgcmV0dXJuIHsgdHlwZTogX2FjdGlvblR5cGVzLlNXQVBfQVJSQVlfVkFMVUVTLCBwYXRoOiBwYXRoLCBpbmRleEE6IGluZGV4QSwgaW5kZXhCOiBpbmRleEIgfTtcbn07XG5cbnZhciB0b3VjaCA9IGV4cG9ydHMudG91Y2ggPSBmdW5jdGlvbiB0b3VjaCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZpZWxkcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZpZWxkc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiB7IHR5cGU6IF9hY3Rpb25UeXBlcy5UT1VDSCwgZmllbGRzOiBmaWVsZHMgfTtcbn07XG5cbnZhciB1bnRvdWNoID0gZXhwb3J0cy51bnRvdWNoID0gZnVuY3Rpb24gdW50b3VjaCgpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBmaWVsZHMgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGZpZWxkc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgcmV0dXJuIHsgdHlwZTogX2FjdGlvblR5cGVzLlVOVE9VQ0gsIGZpZWxkczogZmllbGRzIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL2FjdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBiaW5kQWN0aW9uRGF0YTtcblxudmFyIF9tYXBWYWx1ZXMgPSByZXF1aXJlKCcuL21hcFZhbHVlcycpO1xuXG52YXIgX21hcFZhbHVlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXBWYWx1ZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIEFkZHMgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIHRoZSByZXN1bHRzIG9mIHRoZSBmdW5jdGlvbiBvciBtYXAgb2YgZnVuY3Rpb25zIHBhc3NlZFxuICovXG5mdW5jdGlvbiBiaW5kQWN0aW9uRGF0YShhY3Rpb24sIGRhdGEpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBhY3Rpb24uYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpLCBkYXRhKTtcbiAgICB9O1xuICB9XG4gIGlmICh0eXBlb2YgYWN0aW9uID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAoMCwgX21hcFZhbHVlczIuZGVmYXVsdCkoYWN0aW9uLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBiaW5kQWN0aW9uRGF0YSh2YWx1ZSwgZGF0YSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGFjdGlvbjtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9iaW5kQWN0aW9uRGF0YS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKipcbiAqIEdpdmVuIGEgc3RhdGVbZmllbGRdLCBnZXQgdGhlIHZhbHVlLlxuICogIEZhbGxiYWNrIHRvIC5pbml0aWFsVmFsdWUgd2hlbiAudmFsdWUgaXMgdW5kZWZpbmVkIHRvIHByZXZlbnQgZG91YmxlIHJlbmRlci9pbml0aWFsaXplIGN5Y2xlLlxuICogIFNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2VyaWtyYXMvcmVkdXgtZm9ybS9pc3N1ZXMvNjIxfS5cbiAqL1xudmFyIGl0ZW1Ub1ZhbHVlID0gZnVuY3Rpb24gaXRlbVRvVmFsdWUoX3JlZikge1xuICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlO1xuICB2YXIgaW5pdGlhbFZhbHVlID0gX3JlZi5pbml0aWFsVmFsdWU7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnID8gdmFsdWUgOiBpbml0aWFsVmFsdWU7XG59O1xuXG52YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiBnZXRWYWx1ZShmaWVsZCwgc3RhdGUsIGRlc3QpIHtcbiAgdmFyIGRvdEluZGV4ID0gZmllbGQuaW5kZXhPZignLicpO1xuICB2YXIgb3BlbkluZGV4ID0gZmllbGQuaW5kZXhPZignWycpO1xuICB2YXIgY2xvc2VJbmRleCA9IGZpZWxkLmluZGV4T2YoJ10nKTtcbiAgaWYgKG9wZW5JbmRleCA+IDAgJiYgY2xvc2VJbmRleCAhPT0gb3BlbkluZGV4ICsgMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignZm91bmQgWyBub3QgZm9sbG93ZWQgYnkgXScpO1xuICB9XG4gIGlmIChvcGVuSW5kZXggPiAwICYmIChkb3RJbmRleCA8IDAgfHwgb3BlbkluZGV4IDwgZG90SW5kZXgpKSB7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGFycmF5IGZpZWxkXG4gICAgICB2YXIga2V5ID0gZmllbGQuc3Vic3RyaW5nKDAsIG9wZW5JbmRleCk7XG4gICAgICB2YXIgcmVzdCA9IGZpZWxkLnN1YnN0cmluZyhjbG9zZUluZGV4ICsgMSk7XG4gICAgICBpZiAocmVzdFswXSA9PT0gJy4nKSB7XG4gICAgICAgIHJlc3QgPSByZXN0LnN1YnN0cmluZygxKTtcbiAgICAgIH1cbiAgICAgIHZhciBhcnJheSA9IHN0YXRlICYmIHN0YXRlW2tleV0gfHwgW107XG4gICAgICBpZiAocmVzdCkge1xuICAgICAgICBpZiAoIWRlc3Rba2V5XSkge1xuICAgICAgICAgIGRlc3Rba2V5XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgaWYgKCFkZXN0W2tleV1baW5kZXhdKSB7XG4gICAgICAgICAgICBkZXN0W2tleV1baW5kZXhdID0ge307XG4gICAgICAgICAgfVxuICAgICAgICAgIGdldFZhbHVlKHJlc3QsIGl0ZW0sIGRlc3Rba2V5XVtpbmRleF0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlc3Rba2V5XSA9IGFycmF5Lm1hcChpdGVtVG9WYWx1ZSk7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfSBlbHNlIGlmIChkb3RJbmRleCA+IDApIHtcbiAgICAvLyBzdWJvYmplY3QgZmllbGRcbiAgICB2YXIgX2tleSA9IGZpZWxkLnN1YnN0cmluZygwLCBkb3RJbmRleCk7XG4gICAgdmFyIF9yZXN0ID0gZmllbGQuc3Vic3RyaW5nKGRvdEluZGV4ICsgMSk7XG4gICAgaWYgKCFkZXN0W19rZXldKSB7XG4gICAgICBkZXN0W19rZXldID0ge307XG4gICAgfVxuICAgIGdldFZhbHVlKF9yZXN0LCBzdGF0ZSAmJiBzdGF0ZVtfa2V5XSB8fCB7fSwgZGVzdFtfa2V5XSk7XG4gIH0gZWxzZSB7XG4gICAgZGVzdFtmaWVsZF0gPSBzdGF0ZVtmaWVsZF0gJiYgaXRlbVRvVmFsdWUoc3RhdGVbZmllbGRdKTtcbiAgfVxufTtcblxudmFyIGdldFZhbHVlcyA9IGZ1bmN0aW9uIGdldFZhbHVlcyhmaWVsZHMsIHN0YXRlKSB7XG4gIHJldHVybiBmaWVsZHMucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgZmllbGQpIHtcbiAgICBnZXRWYWx1ZShmaWVsZCwgc3RhdGUsIGFjY3VtdWxhdG9yKTtcbiAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gIH0sIHt9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGdldFZhbHVlcztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9nZXRWYWx1ZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNWYWxpZDtcbmZ1bmN0aW9uIGlzVmFsaWQoZXJyb3IpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZXJyb3IpKSB7XG4gICAgcmV0dXJuIGVycm9yLnJlZHVjZShmdW5jdGlvbiAodmFsaWQsIGVycm9yVmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWxpZCAmJiBpc1ZhbGlkKGVycm9yVmFsdWUpO1xuICAgIH0sIHRydWUpO1xuICB9XG4gIGlmIChlcnJvciAmJiB0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGVycm9yKS5yZWR1Y2UoZnVuY3Rpb24gKHZhbGlkLCBrZXkpIHtcbiAgICAgIHJldHVybiB2YWxpZCAmJiBpc1ZhbGlkKGVycm9yW2tleV0pO1xuICAgIH0sIHRydWUpO1xuICB9XG4gIHJldHVybiAhZXJyb3I7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvaXNWYWxpZC5qc1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhZEZpZWxkID0gcmVxdWlyZSgnLi9yZWFkRmllbGQnKTtcblxudmFyIF9yZWFkRmllbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhZEZpZWxkKTtcblxudmFyIF93cml0ZSA9IHJlcXVpcmUoJy4vd3JpdGUnKTtcblxudmFyIF93cml0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93cml0ZSk7XG5cbnZhciBfZ2V0VmFsdWVzID0gcmVxdWlyZSgnLi9nZXRWYWx1ZXMnKTtcblxudmFyIF9nZXRWYWx1ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0VmFsdWVzKTtcblxudmFyIF9yZW1vdmVGaWVsZCA9IHJlcXVpcmUoJy4vcmVtb3ZlRmllbGQnKTtcblxudmFyIF9yZW1vdmVGaWVsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZW1vdmVGaWVsZCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogUmVhZHMgcHJvcHMgYW5kIGdlbmVyYXRlcyAob3IgdXBkYXRlcykgZmllbGQgc3RydWN0dXJlXG4gKi9cbnZhciByZWFkRmllbGRzID0gZnVuY3Rpb24gcmVhZEZpZWxkcyhwcm9wcywgcHJldmlvdXNQcm9wcywgbXlGaWVsZHMsIGFzeW5jVmFsaWRhdGUsIGlzUmVhY3ROYXRpdmUpIHtcbiAgdmFyIGZpZWxkcyA9IHByb3BzLmZpZWxkcztcbiAgdmFyIGZvcm0gPSBwcm9wcy5mb3JtO1xuICB2YXIgdmFsaWRhdGUgPSBwcm9wcy52YWxpZGF0ZTtcblxuICB2YXIgcHJldmlvdXNGaWVsZHMgPSBwcmV2aW91c1Byb3BzLmZpZWxkcztcbiAgdmFyIHZhbHVlcyA9ICgwLCBfZ2V0VmFsdWVzMi5kZWZhdWx0KShmaWVsZHMsIGZvcm0pO1xuICB2YXIgc3luY0Vycm9ycyA9IHZhbGlkYXRlKHZhbHVlcywgcHJvcHMpIHx8IHt9O1xuICB2YXIgZXJyb3JzID0ge307XG4gIHZhciBmb3JtRXJyb3IgPSBzeW5jRXJyb3JzLl9lcnJvciB8fCBmb3JtLl9lcnJvcjtcbiAgdmFyIGFsbFZhbGlkID0gIWZvcm1FcnJvcjtcbiAgdmFyIGFsbFByaXN0aW5lID0gdHJ1ZTtcbiAgdmFyIHRhbGx5ID0gZnVuY3Rpb24gdGFsbHkoZmllbGQpIHtcbiAgICBpZiAoZmllbGQuZXJyb3IpIHtcbiAgICAgIGVycm9ycyA9ICgwLCBfd3JpdGUyLmRlZmF1bHQpKGZpZWxkLm5hbWUsIGZpZWxkLmVycm9yLCBlcnJvcnMpO1xuICAgICAgYWxsVmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGZpZWxkLmRpcnR5KSB7XG4gICAgICBhbGxQcmlzdGluZSA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgdmFyIGZpZWxkT2JqZWN0cyA9IHByZXZpb3VzRmllbGRzID8gcHJldmlvdXNGaWVsZHMucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgcHJldmlvdXNGaWVsZCkge1xuICAgIHJldHVybiB+ZmllbGRzLmluZGV4T2YocHJldmlvdXNGaWVsZCkgPyBhY2N1bXVsYXRvciA6ICgwLCBfcmVtb3ZlRmllbGQyLmRlZmF1bHQpKGFjY3VtdWxhdG9yLCBwcmV2aW91c0ZpZWxkKTtcbiAgfSwgX2V4dGVuZHMoe30sIG15RmllbGRzKSkgOiBfZXh0ZW5kcyh7fSwgbXlGaWVsZHMpO1xuICBmaWVsZHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICgwLCBfcmVhZEZpZWxkMi5kZWZhdWx0KShmb3JtLCBuYW1lLCB1bmRlZmluZWQsIGZpZWxkT2JqZWN0cywgc3luY0Vycm9ycywgYXN5bmNWYWxpZGF0ZSwgaXNSZWFjdE5hdGl2ZSwgcHJvcHMsIHRhbGx5KTtcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmaWVsZE9iamVjdHMsICdfbWV0YScsIHtcbiAgICB2YWx1ZToge1xuICAgICAgYWxsUHJpc3RpbmU6IGFsbFByaXN0aW5lLFxuICAgICAgYWxsVmFsaWQ6IGFsbFZhbGlkLFxuICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICBlcnJvcnM6IGVycm9ycyxcbiAgICAgIGZvcm1FcnJvcjogZm9ybUVycm9yXG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGZpZWxkT2JqZWN0cztcbn07XG5leHBvcnRzLmRlZmF1bHQgPSByZWFkRmllbGRzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL3JlYWRGaWVsZHMuanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZU9uQmx1ciA9IHJlcXVpcmUoJy4vZXZlbnRzL2NyZWF0ZU9uQmx1cicpO1xuXG52YXIgX2NyZWF0ZU9uQmx1cjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVPbkJsdXIpO1xuXG52YXIgX2NyZWF0ZU9uQ2hhbmdlID0gcmVxdWlyZSgnLi9ldmVudHMvY3JlYXRlT25DaGFuZ2UnKTtcblxudmFyIF9jcmVhdGVPbkNoYW5nZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVPbkNoYW5nZSk7XG5cbnZhciBfY3JlYXRlT25EcmFnU3RhcnQgPSByZXF1aXJlKCcuL2V2ZW50cy9jcmVhdGVPbkRyYWdTdGFydCcpO1xuXG52YXIgX2NyZWF0ZU9uRHJhZ1N0YXJ0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZU9uRHJhZ1N0YXJ0KTtcblxudmFyIF9jcmVhdGVPbkRyb3AgPSByZXF1aXJlKCcuL2V2ZW50cy9jcmVhdGVPbkRyb3AnKTtcblxudmFyIF9jcmVhdGVPbkRyb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlT25Ecm9wKTtcblxudmFyIF9jcmVhdGVPbkZvY3VzID0gcmVxdWlyZSgnLi9ldmVudHMvY3JlYXRlT25Gb2N1cycpO1xuXG52YXIgX2NyZWF0ZU9uRm9jdXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlT25Gb2N1cyk7XG5cbnZhciBfc2lsZW5jZVByb21pc2UgPSByZXF1aXJlKCcuL3NpbGVuY2VQcm9taXNlJyk7XG5cbnZhciBfc2lsZW5jZVByb21pc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2lsZW5jZVByb21pc2UpO1xuXG52YXIgX3JlYWQgPSByZXF1aXJlKCcuL3JlYWQnKTtcblxudmFyIF9yZWFkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWQpO1xuXG52YXIgX3VwZGF0ZUZpZWxkID0gcmVxdWlyZSgnLi91cGRhdGVGaWVsZCcpO1xuXG52YXIgX3VwZGF0ZUZpZWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VwZGF0ZUZpZWxkKTtcblxudmFyIF9pc0NoZWNrZWQgPSByZXF1aXJlKCcuL2lzQ2hlY2tlZCcpO1xuXG52YXIgX2lzQ2hlY2tlZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0NoZWNrZWQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdWZmaXgoaW5wdXQsIGNsb3NlSW5kZXgpIHtcbiAgdmFyIHN1ZmZpeCA9IGlucHV0LnN1YnN0cmluZyhjbG9zZUluZGV4ICsgMSk7XG4gIGlmIChzdWZmaXhbMF0gPT09ICcuJykge1xuICAgIHN1ZmZpeCA9IHN1ZmZpeC5zdWJzdHJpbmcoMSk7XG4gIH1cbiAgcmV0dXJuIHN1ZmZpeDtcbn1cblxudmFyIGdldE5leHRLZXkgPSBmdW5jdGlvbiBnZXROZXh0S2V5KHBhdGgpIHtcbiAgdmFyIGRvdEluZGV4ID0gcGF0aC5pbmRleE9mKCcuJyk7XG4gIHZhciBvcGVuSW5kZXggPSBwYXRoLmluZGV4T2YoJ1snKTtcbiAgaWYgKG9wZW5JbmRleCA+IDAgJiYgKGRvdEluZGV4IDwgMCB8fCBvcGVuSW5kZXggPCBkb3RJbmRleCkpIHtcbiAgICByZXR1cm4gcGF0aC5zdWJzdHJpbmcoMCwgb3BlbkluZGV4KTtcbiAgfVxuICByZXR1cm4gZG90SW5kZXggPiAwID8gcGF0aC5zdWJzdHJpbmcoMCwgZG90SW5kZXgpIDogcGF0aDtcbn07XG5cbnZhciBzaG91bGRBc3luY1ZhbGlkYXRlID0gZnVuY3Rpb24gc2hvdWxkQXN5bmNWYWxpZGF0ZShuYW1lLCBhc3luY0JsdXJGaWVsZHMpIHtcbiAgcmV0dXJuKFxuICAgIC8vIHJlbW92ZSBhcnJheSBpbmRpY2VzXG4gICAgfmFzeW5jQmx1ckZpZWxkcy5pbmRleE9mKG5hbWUucmVwbGFjZSgvXFxbWzAtOV0rXFxdL2csICdbXScpKVxuICApO1xufTtcblxudmFyIHJlYWRGaWVsZCA9IGZ1bmN0aW9uIHJlYWRGaWVsZChzdGF0ZSwgZmllbGROYW1lKSB7XG4gIHZhciBwYXRoVG9IZXJlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gJycgOiBhcmd1bWVudHNbMl07XG4gIHZhciBmaWVsZHMgPSBhcmd1bWVudHNbM107XG4gIHZhciBzeW5jRXJyb3JzID0gYXJndW1lbnRzWzRdO1xuICB2YXIgYXN5bmNWYWxpZGF0ZSA9IGFyZ3VtZW50c1s1XTtcbiAgdmFyIGlzUmVhY3ROYXRpdmUgPSBhcmd1bWVudHNbNl07XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50c1s3XTtcbiAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA8PSA4IHx8IGFyZ3VtZW50c1s4XSA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9IDogYXJndW1lbnRzWzhdO1xuICB2YXIgcHJlZml4ID0gYXJndW1lbnRzLmxlbmd0aCA8PSA5IHx8IGFyZ3VtZW50c1s5XSA9PT0gdW5kZWZpbmVkID8gJycgOiBhcmd1bWVudHNbOV07XG4gIHZhciBhc3luY0JsdXJGaWVsZHMgPSBwcm9wcy5hc3luY0JsdXJGaWVsZHM7XG4gIHZhciBhdXRvZmlsbCA9IHByb3BzLmF1dG9maWxsO1xuICB2YXIgYmx1ciA9IHByb3BzLmJsdXI7XG4gIHZhciBjaGFuZ2UgPSBwcm9wcy5jaGFuZ2U7XG4gIHZhciBmb2N1cyA9IHByb3BzLmZvY3VzO1xuICB2YXIgZm9ybSA9IHByb3BzLmZvcm07XG4gIHZhciBpbml0aWFsVmFsdWVzID0gcHJvcHMuaW5pdGlhbFZhbHVlcztcbiAgdmFyIHJlYWRvbmx5ID0gcHJvcHMucmVhZG9ubHk7XG4gIHZhciBhZGRBcnJheVZhbHVlID0gcHJvcHMuYWRkQXJyYXlWYWx1ZTtcbiAgdmFyIHJlbW92ZUFycmF5VmFsdWUgPSBwcm9wcy5yZW1vdmVBcnJheVZhbHVlO1xuICB2YXIgc3dhcEFycmF5VmFsdWVzID0gcHJvcHMuc3dhcEFycmF5VmFsdWVzO1xuXG4gIHZhciBkb3RJbmRleCA9IGZpZWxkTmFtZS5pbmRleE9mKCcuJyk7XG4gIHZhciBvcGVuSW5kZXggPSBmaWVsZE5hbWUuaW5kZXhPZignWycpO1xuICB2YXIgY2xvc2VJbmRleCA9IGZpZWxkTmFtZS5pbmRleE9mKCddJyk7XG4gIGlmIChvcGVuSW5kZXggPiAwICYmIGNsb3NlSW5kZXggIT09IG9wZW5JbmRleCArIDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZvdW5kIFsgbm90IGZvbGxvd2VkIGJ5IF0nKTtcbiAgfVxuXG4gIGlmIChvcGVuSW5kZXggPiAwICYmIChkb3RJbmRleCA8IDAgfHwgb3BlbkluZGV4IDwgZG90SW5kZXgpKSB7XG4gICAgdmFyIF9yZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBhcnJheSBmaWVsZFxuICAgICAgdmFyIGtleSA9IGZpZWxkTmFtZS5zdWJzdHJpbmcoMCwgb3BlbkluZGV4KTtcbiAgICAgIHZhciByZXN0ID0gZ2V0U3VmZml4KGZpZWxkTmFtZSwgY2xvc2VJbmRleCk7XG4gICAgICB2YXIgc3RhdGVBcnJheSA9IHN0YXRlICYmIHN0YXRlW2tleV0gfHwgW107XG4gICAgICB2YXIgZnVsbFByZWZpeCA9IHByZWZpeCArIGZpZWxkTmFtZS5zdWJzdHJpbmcoMCwgY2xvc2VJbmRleCArIDEpO1xuICAgICAgdmFyIHN1YmZpZWxkcyA9IHByb3BzLmZpZWxkcy5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBmaWVsZCkge1xuICAgICAgICBpZiAoZmllbGQuaW5kZXhPZihmdWxsUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgIGFjY3VtdWxhdG9yLnB1c2goZmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgIH0sIFtdKS5tYXAoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiBnZXRTdWZmaXgoZmllbGQsIHByZWZpeC5sZW5ndGggKyBjbG9zZUluZGV4KTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGFkZE1ldGhvZHMgPSBmdW5jdGlvbiBhZGRNZXRob2RzKGRlc3QpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsICdhZGRGaWVsZCcsIHtcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoX3ZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIGFkZEFycmF5VmFsdWUocGF0aFRvSGVyZSArIGtleSwgX3ZhbHVlLCBpbmRleCwgc3ViZmllbGRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgJ3JlbW92ZUZpZWxkJywge1xuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlbW92ZUFycmF5VmFsdWUocGF0aFRvSGVyZSArIGtleSwgaW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCAnc3dhcEZpZWxkcycsIHtcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoaW5kZXhBLCBpbmRleEIpIHtcbiAgICAgICAgICAgIHJldHVybiBzd2FwQXJyYXlWYWx1ZXMocGF0aFRvSGVyZSArIGtleSwgaW5kZXhBLCBpbmRleEIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkZXN0O1xuICAgICAgfTtcbiAgICAgIGlmICghZmllbGRzW2tleV0gfHwgZmllbGRzW2tleV0ubGVuZ3RoICE9PSBzdGF0ZUFycmF5Lmxlbmd0aCkge1xuICAgICAgICBmaWVsZHNba2V5XSA9IGZpZWxkc1trZXldID8gW10uY29uY2F0KGZpZWxkc1trZXldKSA6IFtdO1xuICAgICAgICBhZGRNZXRob2RzKGZpZWxkc1trZXldKTtcbiAgICAgIH1cbiAgICAgIHZhciBmaWVsZEFycmF5ID0gZmllbGRzW2tleV07XG4gICAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgc3RhdGVBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZFN0YXRlLCBpbmRleCkge1xuICAgICAgICBpZiAocmVzdCAmJiAhZmllbGRBcnJheVtpbmRleF0pIHtcbiAgICAgICAgICBmaWVsZEFycmF5W2luZGV4XSA9IHt9O1xuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkZXN0ID0gcmVzdCA/IGZpZWxkQXJyYXlbaW5kZXhdIDoge307XG4gICAgICAgIHZhciBuZXh0UGF0aCA9ICcnICsgcGF0aFRvSGVyZSArIGtleSArICdbJyArIGluZGV4ICsgJ10nICsgKHJlc3QgPyAnLicgOiAnJyk7XG4gICAgICAgIHZhciBuZXh0UHJlZml4ID0gJycgKyBwcmVmaXggKyBrZXkgKyAnW10nICsgKHJlc3QgPyAnLicgOiAnJyk7XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlYWRGaWVsZChmaWVsZFN0YXRlLCByZXN0LCBuZXh0UGF0aCwgZGVzdCwgc3luY0Vycm9ycywgYXN5bmNWYWxpZGF0ZSwgaXNSZWFjdE5hdGl2ZSwgcHJvcHMsIGNhbGxiYWNrLCBuZXh0UHJlZml4KTtcbiAgICAgICAgaWYgKCFyZXN0ICYmIGZpZWxkQXJyYXlbaW5kZXhdICE9PSByZXN1bHQpIHtcbiAgICAgICAgICAvLyBpZiBub3RoaW5nIGFmdGVyIFtdIGluIGZpZWxkIG5hbWUsIGFzc2lnbiBkaXJlY3RseSB0byBhcnJheVxuICAgICAgICAgIGZpZWxkQXJyYXlbaW5kZXhdID0gcmVzdWx0O1xuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChmaWVsZEFycmF5Lmxlbmd0aCA+IHN0YXRlQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIC8vIHJlbW92ZSBleHRyYSBpdGVtcyB0aGF0IGFyZW4ndCBpbiBzdGF0ZSBhcnJheVxuICAgICAgICBmaWVsZEFycmF5LnNwbGljZShzdGF0ZUFycmF5Lmxlbmd0aCwgZmllbGRBcnJheS5sZW5ndGggLSBzdGF0ZUFycmF5Lmxlbmd0aCk7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2OiBjaGFuZ2VkID8gYWRkTWV0aG9kcyhbXS5jb25jYXQoZmllbGRBcnJheSkpIDogZmllbGRBcnJheVxuICAgICAgfTtcbiAgICB9KCk7XG5cbiAgICBpZiAodHlwZW9mIF9yZXQgPT09IFwib2JqZWN0XCIpIHJldHVybiBfcmV0LnY7XG4gIH1cbiAgaWYgKGRvdEluZGV4ID4gMCkge1xuICAgIC8vIHN1Ym9iamVjdCBmaWVsZFxuICAgIHZhciBfa2V5ID0gZmllbGROYW1lLnN1YnN0cmluZygwLCBkb3RJbmRleCk7XG4gICAgdmFyIF9yZXN0ID0gZmllbGROYW1lLnN1YnN0cmluZyhkb3RJbmRleCArIDEpO1xuICAgIHZhciBzdWJvYmplY3QgPSBmaWVsZHNbX2tleV0gfHwge307XG4gICAgdmFyIG5leHRQYXRoID0gcGF0aFRvSGVyZSArIF9rZXkgKyAnLic7XG4gICAgdmFyIG5leHRLZXkgPSBnZXROZXh0S2V5KF9yZXN0KTtcbiAgICB2YXIgbmV4dFByZWZpeCA9IHByZWZpeCArIF9rZXkgKyAnLic7XG4gICAgdmFyIHByZXZpb3VzID0gc3Vib2JqZWN0W25leHRLZXldO1xuICAgIHZhciByZXN1bHQgPSByZWFkRmllbGQoc3RhdGVbX2tleV0gfHwge30sIF9yZXN0LCBuZXh0UGF0aCwgc3Vib2JqZWN0LCBzeW5jRXJyb3JzLCBhc3luY1ZhbGlkYXRlLCBpc1JlYWN0TmF0aXZlLCBwcm9wcywgY2FsbGJhY2ssIG5leHRQcmVmaXgpO1xuICAgIGlmIChyZXN1bHQgIT09IHByZXZpb3VzKSB7XG4gICAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgICBzdWJvYmplY3QgPSBfZXh0ZW5kcyh7fSwgc3Vib2JqZWN0LCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltuZXh0S2V5XSA9IHJlc3VsdCwgX2V4dGVuZHMyKSk7XG4gICAgfVxuICAgIGZpZWxkc1tfa2V5XSA9IHN1Ym9iamVjdDtcbiAgICByZXR1cm4gc3Vib2JqZWN0O1xuICB9XG4gIHZhciBuYW1lID0gcGF0aFRvSGVyZSArIGZpZWxkTmFtZTtcbiAgdmFyIGZpZWxkID0gZmllbGRzW2ZpZWxkTmFtZV0gfHwge307XG4gIGlmIChmaWVsZC5uYW1lICE9PSBuYW1lKSB7XG4gICAgdmFyIG9uQ2hhbmdlID0gKDAsIF9jcmVhdGVPbkNoYW5nZTIuZGVmYXVsdCkobmFtZSwgY2hhbmdlLCBpc1JlYWN0TmF0aXZlKTtcbiAgICB2YXIgaW5pdGlhbEZvcm1WYWx1ZSA9ICgwLCBfcmVhZDIuZGVmYXVsdCkobmFtZSArICcuaW5pdGlhbCcsIGZvcm0pO1xuICAgIHZhciBpbml0aWFsVmFsdWUgPSBpbml0aWFsRm9ybVZhbHVlIHx8ICgwLCBfcmVhZDIuZGVmYXVsdCkobmFtZSwgaW5pdGlhbFZhbHVlcyk7XG4gICAgaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWQgPyAnJyA6IGluaXRpYWxWYWx1ZTtcbiAgICBmaWVsZC5uYW1lID0gbmFtZTtcbiAgICBmaWVsZC5jaGVja2VkID0gKDAsIF9pc0NoZWNrZWQyLmRlZmF1bHQpKGluaXRpYWxWYWx1ZSk7XG4gICAgZmllbGQudmFsdWUgPSBpbml0aWFsVmFsdWU7XG4gICAgZmllbGQuaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlO1xuICAgIGlmICghcmVhZG9ubHkpIHtcbiAgICAgIGZpZWxkLmF1dG9maWxsID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBhdXRvZmlsbChuYW1lLCB2YWx1ZSk7XG4gICAgICB9O1xuICAgICAgZmllbGQub25CbHVyID0gKDAsIF9jcmVhdGVPbkJsdXIyLmRlZmF1bHQpKG5hbWUsIGJsdXIsIGlzUmVhY3ROYXRpdmUsIHNob3VsZEFzeW5jVmFsaWRhdGUobmFtZSwgYXN5bmNCbHVyRmllbGRzKSAmJiBmdW5jdGlvbiAoYmx1ck5hbWUsIGJsdXJWYWx1ZSkge1xuICAgICAgICByZXR1cm4gKDAsIF9zaWxlbmNlUHJvbWlzZTIuZGVmYXVsdCkoYXN5bmNWYWxpZGF0ZShibHVyTmFtZSwgYmx1clZhbHVlKSk7XG4gICAgICB9KTtcbiAgICAgIGZpZWxkLm9uQ2hhbmdlID0gb25DaGFuZ2U7XG4gICAgICBmaWVsZC5vbkRyYWdTdGFydCA9ICgwLCBfY3JlYXRlT25EcmFnU3RhcnQyLmRlZmF1bHQpKG5hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLnZhbHVlO1xuICAgICAgfSk7XG4gICAgICBmaWVsZC5vbkRyb3AgPSAoMCwgX2NyZWF0ZU9uRHJvcDIuZGVmYXVsdCkobmFtZSwgY2hhbmdlKTtcbiAgICAgIGZpZWxkLm9uRm9jdXMgPSAoMCwgX2NyZWF0ZU9uRm9jdXMyLmRlZmF1bHQpKG5hbWUsIGZvY3VzKTtcbiAgICAgIGZpZWxkLm9uVXBkYXRlID0gb25DaGFuZ2U7IC8vIGFsaWFzIHRvIHN1cHBvcnQgYmVsbGUuIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWtncmFmL2JlbGxlL2lzc3Vlcy81OFxuICAgIH1cbiAgICBmaWVsZC52YWxpZCA9IHRydWU7XG4gICAgZmllbGQuaW52YWxpZCA9IGZhbHNlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmaWVsZCwgJ19pc0ZpZWxkJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIHZhciBkZWZhdWx0RmllbGRTdGF0ZSA9IHtcbiAgICBpbml0aWFsOiBmaWVsZC52YWx1ZSxcbiAgICB2YWx1ZTogZmllbGQudmFsdWVcbiAgfTtcblxuICB2YXIgZmllbGRTdGF0ZSA9IChmaWVsZE5hbWUgPyBzdGF0ZVtmaWVsZE5hbWVdIDogc3RhdGUpIHx8IGRlZmF1bHRGaWVsZFN0YXRlO1xuICB2YXIgc3luY0Vycm9yID0gKDAsIF9yZWFkMi5kZWZhdWx0KShuYW1lLCBzeW5jRXJyb3JzKTtcbiAgdmFyIHVwZGF0ZWQgPSAoMCwgX3VwZGF0ZUZpZWxkMi5kZWZhdWx0KShmaWVsZCwgZmllbGRTdGF0ZSwgbmFtZSA9PT0gZm9ybS5fYWN0aXZlLCBzeW5jRXJyb3IpO1xuICBpZiAoZmllbGROYW1lIHx8IGZpZWxkc1tmaWVsZE5hbWVdICE9PSB1cGRhdGVkKSB7XG4gICAgZmllbGRzW2ZpZWxkTmFtZV0gPSB1cGRhdGVkO1xuICB9XG4gIGNhbGxiYWNrKHVwZGF0ZWQpO1xuICByZXR1cm4gdXBkYXRlZDtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHJlYWRGaWVsZDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9yZWFkRmllbGQuanNcbiAqKiBtb2R1bGUgaWQgPSA1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2dldFZhbHVlID0gcmVxdWlyZSgnLi9nZXRWYWx1ZScpO1xuXG52YXIgX2dldFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGNyZWF0ZU9uQmx1ciA9IGZ1bmN0aW9uIGNyZWF0ZU9uQmx1cihuYW1lLCBibHVyLCBpc1JlYWN0TmF0aXZlLCBhZnRlckJsdXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciB2YWx1ZSA9ICgwLCBfZ2V0VmFsdWUyLmRlZmF1bHQpKGV2ZW50LCBpc1JlYWN0TmF0aXZlKTtcbiAgICBibHVyKG5hbWUsIHZhbHVlKTtcbiAgICBpZiAoYWZ0ZXJCbHVyKSB7XG4gICAgICBhZnRlckJsdXIobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVPbkJsdXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL2NyZWF0ZU9uQmx1ci5qc1xuICoqIG1vZHVsZSBpZCA9IDU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXNFdmVudCA9IHJlcXVpcmUoJy4vaXNFdmVudCcpO1xuXG52YXIgX2lzRXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNFdmVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBnZXRTZWxlY3RlZFZhbHVlcyA9IGZ1bmN0aW9uIGdldFNlbGVjdGVkVmFsdWVzKG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob3B0aW9ucykge1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBvcHRpb25zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIG9wdGlvbiA9IG9wdGlvbnNbaW5kZXhdO1xuICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICByZXN1bHQucHVzaChvcHRpb24udmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIGdldFZhbHVlID0gZnVuY3Rpb24gZ2V0VmFsdWUoZXZlbnQsIGlzUmVhY3ROYXRpdmUpIHtcbiAgaWYgKCgwLCBfaXNFdmVudDIuZGVmYXVsdCkoZXZlbnQpKSB7XG4gICAgaWYgKCFpc1JlYWN0TmF0aXZlICYmIGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2ZW50Lm5hdGl2ZUV2ZW50LnRleHQ7XG4gICAgfVxuICAgIGlmIChpc1JlYWN0TmF0aXZlICYmIGV2ZW50Lm5hdGl2ZUV2ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmVudC5uYXRpdmVFdmVudC50ZXh0O1xuICAgIH1cbiAgICB2YXIgX2V2ZW50JHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICB2YXIgdHlwZSA9IF9ldmVudCR0YXJnZXQudHlwZTtcbiAgICB2YXIgdmFsdWUgPSBfZXZlbnQkdGFyZ2V0LnZhbHVlO1xuICAgIHZhciBjaGVja2VkID0gX2V2ZW50JHRhcmdldC5jaGVja2VkO1xuICAgIHZhciBmaWxlcyA9IF9ldmVudCR0YXJnZXQuZmlsZXM7XG4gICAgdmFyIGRhdGFUcmFuc2ZlciA9IGV2ZW50LmRhdGFUcmFuc2ZlcjtcblxuICAgIGlmICh0eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICByZXR1cm4gY2hlY2tlZDtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdmaWxlJykge1xuICAgICAgcmV0dXJuIGZpbGVzIHx8IGRhdGFUcmFuc2ZlciAmJiBkYXRhVHJhbnNmZXIuZmlsZXM7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnc2VsZWN0LW11bHRpcGxlJykge1xuICAgICAgcmV0dXJuIGdldFNlbGVjdGVkVmFsdWVzKGV2ZW50LnRhcmdldC5vcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInIHx8IHR5cGUgPT09ICdyYW5nZScpIHtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIC8vIG5vdCBhbiBldmVudCwgc28gbXVzdCBiZSBlaXRoZXIgb3VyIHZhbHVlIG9yIGFuIG9iamVjdCBjb250YWluaW5nIG91ciB2YWx1ZSBpbiB0aGUgJ3ZhbHVlJyBrZXlcbiAgcmV0dXJuIGV2ZW50ICYmIHR5cGVvZiBldmVudCA9PT0gJ29iamVjdCcgJiYgZXZlbnQudmFsdWUgIT09IHVuZGVmaW5lZCA/IGV2ZW50LnZhbHVlIDogLy8gZXh0cmFjdCB2YWx1ZSBmcm9tIHsgdmFsdWU6IHZhbHVlIH0gc3RydWN0dXJlLiBodHRwczovL2dpdGh1Yi5jb20vbmlrZ3JhZi9iZWxsZS9pc3N1ZXMvNThcbiAgZXZlbnQ7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBnZXRWYWx1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9ldmVudHMvZ2V0VmFsdWUuanNcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgaXNFdmVudCA9IGZ1bmN0aW9uIGlzRXZlbnQoY2FuZGlkYXRlKSB7XG4gIHJldHVybiAhIShjYW5kaWRhdGUgJiYgY2FuZGlkYXRlLnN0b3BQcm9wYWdhdGlvbiAmJiBjYW5kaWRhdGUucHJldmVudERlZmF1bHQpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gaXNFdmVudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9ldmVudHMvaXNFdmVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZ2V0VmFsdWUgPSByZXF1aXJlKCcuL2dldFZhbHVlJyk7XG5cbnZhciBfZ2V0VmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0VmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY3JlYXRlT25DaGFuZ2UgPSBmdW5jdGlvbiBjcmVhdGVPbkNoYW5nZShuYW1lLCBjaGFuZ2UsIGlzUmVhY3ROYXRpdmUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiBjaGFuZ2UobmFtZSwgKDAsIF9nZXRWYWx1ZTIuZGVmYXVsdCkoZXZlbnQsIGlzUmVhY3ROYXRpdmUpKTtcbiAgfTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVPbkNoYW5nZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9ldmVudHMvY3JlYXRlT25DaGFuZ2UuanNcbiAqKiBtb2R1bGUgaWQgPSA1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGRhdGFLZXkgPSBleHBvcnRzLmRhdGFLZXkgPSAndmFsdWUnO1xudmFyIGNyZWF0ZU9uRHJhZ1N0YXJ0ID0gZnVuY3Rpb24gY3JlYXRlT25EcmFnU3RhcnQobmFtZSwgZ2V0VmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKGRhdGFLZXksIGdldFZhbHVlKCkpO1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlT25EcmFnU3RhcnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL2NyZWF0ZU9uRHJhZ1N0YXJ0LmpzXG4gKiogbW9kdWxlIGlkID0gNThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jcmVhdGVPbkRyYWdTdGFydCA9IHJlcXVpcmUoJy4vY3JlYXRlT25EcmFnU3RhcnQnKTtcblxudmFyIGNyZWF0ZU9uRHJvcCA9IGZ1bmN0aW9uIGNyZWF0ZU9uRHJvcChuYW1lLCBjaGFuZ2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNoYW5nZShuYW1lLCBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShfY3JlYXRlT25EcmFnU3RhcnQuZGF0YUtleSkpO1xuICB9O1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZU9uRHJvcDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9ldmVudHMvY3JlYXRlT25Ecm9wLmpzXG4gKiogbW9kdWxlIGlkID0gNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGNyZWF0ZU9uRm9jdXMgPSBmdW5jdGlvbiBjcmVhdGVPbkZvY3VzKG5hbWUsIGZvY3VzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZvY3VzKG5hbWUpO1xuICB9O1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZU9uRm9jdXM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL2NyZWF0ZU9uRm9jdXMuanNcbiAqKiBtb2R1bGUgaWQgPSA2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzUHJvbWlzZSA9IHJlcXVpcmUoJ2lzLXByb21pc2UnKTtcblxudmFyIF9pc1Byb21pc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcm9taXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge1xuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxudmFyIHNpbGVuY2VQcm9taXNlID0gZnVuY3Rpb24gc2lsZW5jZVByb21pc2UocHJvbWlzZSkge1xuICByZXR1cm4gKDAsIF9pc1Byb21pc2UyLmRlZmF1bHQpKHByb21pc2UpID8gcHJvbWlzZS50aGVuKG5vb3AsIG5vb3ApIDogcHJvbWlzZTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHNpbGVuY2VQcm9taXNlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL3NpbGVuY2VQcm9taXNlLmpzXG4gKiogbW9kdWxlIGlkID0gNjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gaXNQcm9taXNlO1xuXG5mdW5jdGlvbiBpc1Byb21pc2Uob2JqKSB7XG4gIHJldHVybiAhIW9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaXMtcHJvbWlzZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfaXNQcmlzdGluZSA9IHJlcXVpcmUoJy4vaXNQcmlzdGluZScpO1xuXG52YXIgX2lzUHJpc3RpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcmlzdGluZSk7XG5cbnZhciBfaXNWYWxpZCA9IHJlcXVpcmUoJy4vaXNWYWxpZCcpO1xuXG52YXIgX2lzVmFsaWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNWYWxpZCk7XG5cbnZhciBfaXNDaGVja2VkID0gcmVxdWlyZSgnLi9pc0NoZWNrZWQnKTtcblxudmFyIF9pc0NoZWNrZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNDaGVja2VkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBVcGRhdGVzIGEgZmllbGQgb2JqZWN0IGZyb20gdGhlIHN0b3JlIHZhbHVlc1xuICovXG52YXIgdXBkYXRlRmllbGQgPSBmdW5jdGlvbiB1cGRhdGVGaWVsZChmaWVsZCwgZm9ybUZpZWxkLCBhY3RpdmUsIHN5bmNFcnJvcikge1xuICB2YXIgZGlmZiA9IHt9O1xuICB2YXIgZm9ybUZpZWxkVmFsdWUgPSBmb3JtRmllbGQudmFsdWUgPT09IHVuZGVmaW5lZCA/ICcnIDogZm9ybUZpZWxkLnZhbHVlO1xuXG4gIC8vIHVwZGF0ZSBmaWVsZCB2YWx1ZVxuICBpZiAoZmllbGQudmFsdWUgIT09IGZvcm1GaWVsZFZhbHVlKSB7XG4gICAgZGlmZi52YWx1ZSA9IGZvcm1GaWVsZFZhbHVlO1xuICAgIGRpZmYuY2hlY2tlZCA9ICgwLCBfaXNDaGVja2VkMi5kZWZhdWx0KShmb3JtRmllbGRWYWx1ZSk7XG4gIH1cblxuICAvLyB1cGRhdGUgZGlydHkvcHJpc3RpbmVcbiAgdmFyIHByaXN0aW5lID0gKDAsIF9pc1ByaXN0aW5lMi5kZWZhdWx0KShmb3JtRmllbGRWYWx1ZSwgZm9ybUZpZWxkLmluaXRpYWwpO1xuICBpZiAoZmllbGQucHJpc3RpbmUgIT09IHByaXN0aW5lKSB7XG4gICAgZGlmZi5kaXJ0eSA9ICFwcmlzdGluZTtcbiAgICBkaWZmLnByaXN0aW5lID0gcHJpc3RpbmU7XG4gIH1cblxuICAvLyB1cGRhdGUgZmllbGQgZXJyb3JcbiAgdmFyIGVycm9yID0gc3luY0Vycm9yIHx8IGZvcm1GaWVsZC5zdWJtaXRFcnJvciB8fCBmb3JtRmllbGQuYXN5bmNFcnJvcjtcbiAgaWYgKGVycm9yICE9PSBmaWVsZC5lcnJvcikge1xuICAgIGRpZmYuZXJyb3IgPSBlcnJvcjtcbiAgfVxuICB2YXIgdmFsaWQgPSAoMCwgX2lzVmFsaWQyLmRlZmF1bHQpKGVycm9yKTtcbiAgaWYgKGZpZWxkLnZhbGlkICE9PSB2YWxpZCkge1xuICAgIGRpZmYuaW52YWxpZCA9ICF2YWxpZDtcbiAgICBkaWZmLnZhbGlkID0gdmFsaWQ7XG4gIH1cblxuICBpZiAoYWN0aXZlICE9PSBmaWVsZC5hY3RpdmUpIHtcbiAgICBkaWZmLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuICB2YXIgdG91Y2hlZCA9ICEhZm9ybUZpZWxkLnRvdWNoZWQ7XG4gIGlmICh0b3VjaGVkICE9PSBmaWVsZC50b3VjaGVkKSB7XG4gICAgZGlmZi50b3VjaGVkID0gdG91Y2hlZDtcbiAgfVxuICB2YXIgdmlzaXRlZCA9ICEhZm9ybUZpZWxkLnZpc2l0ZWQ7XG4gIGlmICh2aXNpdGVkICE9PSBmaWVsZC52aXNpdGVkKSB7XG4gICAgZGlmZi52aXNpdGVkID0gdmlzaXRlZDtcbiAgfVxuICB2YXIgYXV0b2ZpbGxlZCA9ICEhZm9ybUZpZWxkLmF1dG9maWxsZWQ7XG4gIGlmIChhdXRvZmlsbGVkICE9PSBmaWVsZC5hdXRvZmlsbGVkKSB7XG4gICAgZGlmZi5hdXRvZmlsbGVkID0gYXV0b2ZpbGxlZDtcbiAgfVxuXG4gIGlmICgnaW5pdGlhbCcgaW4gZm9ybUZpZWxkICYmIGZvcm1GaWVsZC5pbml0aWFsICE9PSBmaWVsZC5pbml0aWFsVmFsdWUpIHtcbiAgICBmaWVsZC5pbml0aWFsVmFsdWUgPSBmb3JtRmllbGQuaW5pdGlhbDtcbiAgfVxuXG4gIHJldHVybiBPYmplY3Qua2V5cyhkaWZmKS5sZW5ndGggPyBfZXh0ZW5kcyh7fSwgZmllbGQsIGRpZmYpIDogZmllbGQ7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gdXBkYXRlRmllbGQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvdXBkYXRlRmllbGQuanNcbiAqKiBtb2R1bGUgaWQgPSA2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNQcmlzdGluZTtcbmZ1bmN0aW9uIGlzUHJpc3RpbmUoaW5pdGlhbCwgZGF0YSkge1xuICBpZiAoaW5pdGlhbCA9PT0gZGF0YSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh0eXBlb2YgaW5pdGlhbCA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGVvZiBkYXRhID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gaW5pdGlhbCA9PT0gZGF0YTtcbiAgfSBlbHNlIGlmIChpbml0aWFsIGluc3RhbmNlb2YgRGF0ZSAmJiBkYXRhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBpbml0aWFsLmdldFRpbWUoKSA9PT0gZGF0YS5nZXRUaW1lKCk7XG4gIH0gZWxzZSBpZiAoaW5pdGlhbCAmJiB0eXBlb2YgaW5pdGlhbCA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAoIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBpbml0aWFsS2V5cyA9IE9iamVjdC5rZXlzKGluaXRpYWwpO1xuICAgIHZhciBkYXRhS2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuICAgIGlmIChpbml0aWFsS2V5cy5sZW5ndGggIT09IGRhdGFLZXlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZGF0YUtleXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIga2V5ID0gZGF0YUtleXNbaW5kZXhdO1xuICAgICAgaWYgKCFpc1ByaXN0aW5lKGluaXRpYWxba2V5XSwgZGF0YVtrZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGluaXRpYWwgfHwgZGF0YSkge1xuICAgIC8vIGFsbG93ICcnIHRvIGVxdWF0ZSB0byB1bmRlZmluZWQgb3IgbnVsbFxuICAgIHJldHVybiBpbml0aWFsID09PSBkYXRhO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZHV4LWZvcm0vbGliL2lzUHJpc3RpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSA2NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGlzQ2hlY2tlZCA9IGZ1bmN0aW9uIGlzQ2hlY2tlZCh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgbG93ZXIgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChsb3dlciA9PT0gJ3RydWUnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGxvd2VyID09PSAnZmFsc2UnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBpc0NoZWNrZWQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvaXNDaGVja2VkLmpzXG4gKiogbW9kdWxlIGlkID0gNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIHdpdGhvdXQgPSBmdW5jdGlvbiB3aXRob3V0KG9iamVjdCwga2V5KSB7XG4gIHZhciBjb3B5ID0gX2V4dGVuZHMoe30sIG9iamVjdCk7XG4gIGRlbGV0ZSBjb3B5W2tleV07XG4gIHJldHVybiBjb3B5O1xufTtcblxudmFyIHJlbW92ZUZpZWxkID0gZnVuY3Rpb24gcmVtb3ZlRmllbGQoZmllbGRzLCBwYXRoKSB7XG4gIHZhciBkb3RJbmRleCA9IHBhdGguaW5kZXhPZignLicpO1xuICB2YXIgb3BlbkluZGV4ID0gcGF0aC5pbmRleE9mKCdbJyk7XG4gIHZhciBjbG9zZUluZGV4ID0gcGF0aC5pbmRleE9mKCddJyk7XG4gIGlmIChvcGVuSW5kZXggPiAwICYmIGNsb3NlSW5kZXggIT09IG9wZW5JbmRleCArIDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZvdW5kIFsgbm90IGZvbGxvd2VkIGJ5IF0nKTtcbiAgfVxuICBpZiAob3BlbkluZGV4ID4gMCAmJiAoZG90SW5kZXggPCAwIHx8IG9wZW5JbmRleCA8IGRvdEluZGV4KSkge1xuICAgIHZhciBfcmV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gYXJyYXkgZmllbGRcbiAgICAgIHZhciBrZXkgPSBwYXRoLnN1YnN0cmluZygwLCBvcGVuSW5kZXgpO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGZpZWxkc1trZXldKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHY6IHdpdGhvdXQoZmllbGRzLCBrZXkpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB2YXIgcmVzdCA9IHBhdGguc3Vic3RyaW5nKGNsb3NlSW5kZXggKyAxKTtcbiAgICAgIGlmIChyZXN0WzBdID09PSAnLicpIHtcbiAgICAgICAgcmVzdCA9IHJlc3Quc3Vic3RyaW5nKDEpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3QpIHtcbiAgICAgICAgdmFyIF9yZXQyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICAgICAgICB2YXIgY29weSA9IFtdO1xuICAgICAgICAgIGZpZWxkc1trZXldLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVtb3ZlRmllbGQoaXRlbSwgcmVzdCk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMocmVzdWx0KS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgY29weVtpbmRleF0gPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHY6IHtcbiAgICAgICAgICAgICAgdjogY29weS5sZW5ndGggPyBfZXh0ZW5kcyh7fSwgZmllbGRzLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltrZXldID0gY29weSwgX2V4dGVuZHMyKSkgOiB3aXRob3V0KGZpZWxkcywga2V5KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0oKTtcblxuICAgICAgICBpZiAodHlwZW9mIF9yZXQyID09PSBcIm9iamVjdFwiKSByZXR1cm4gX3JldDIudjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHY6IHdpdGhvdXQoZmllbGRzLCBrZXkpXG4gICAgICB9O1xuICAgIH0oKTtcblxuICAgIGlmICh0eXBlb2YgX3JldCA9PT0gXCJvYmplY3RcIikgcmV0dXJuIF9yZXQudjtcbiAgfVxuICBpZiAoZG90SW5kZXggPiAwKSB7XG4gICAgdmFyIF9leHRlbmRzMztcblxuICAgIC8vIHN1Ym9iamVjdCBmaWVsZFxuICAgIHZhciBfa2V5ID0gcGF0aC5zdWJzdHJpbmcoMCwgZG90SW5kZXgpO1xuICAgIHZhciBfcmVzdCA9IHBhdGguc3Vic3RyaW5nKGRvdEluZGV4ICsgMSk7XG4gICAgaWYgKCFmaWVsZHNbX2tleV0pIHtcbiAgICAgIHJldHVybiBmaWVsZHM7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSByZW1vdmVGaWVsZChmaWVsZHNbX2tleV0sIF9yZXN0KTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocmVzdWx0KS5sZW5ndGggPyBfZXh0ZW5kcyh7fSwgZmllbGRzLCAoX2V4dGVuZHMzID0ge30sIF9leHRlbmRzM1tfa2V5XSA9IHJlbW92ZUZpZWxkKGZpZWxkc1tfa2V5XSwgX3Jlc3QpLCBfZXh0ZW5kczMpKSA6IHdpdGhvdXQoZmllbGRzLCBfa2V5KTtcbiAgfVxuICByZXR1cm4gd2l0aG91dChmaWVsZHMsIHBhdGgpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gcmVtb3ZlRmllbGQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvcmVtb3ZlRmllbGQuanNcbiAqKiBtb2R1bGUgaWQgPSA2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzUHJvbWlzZSA9IHJlcXVpcmUoJ2lzLXByb21pc2UnKTtcblxudmFyIF9pc1Byb21pc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcm9taXNlKTtcblxudmFyIF9pc1ZhbGlkID0gcmVxdWlyZSgnLi9pc1ZhbGlkJyk7XG5cbnZhciBfaXNWYWxpZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ZhbGlkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGhhbmRsZVN1Ym1pdCA9IGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChzdWJtaXQsIHZhbHVlcywgcHJvcHMsIGFzeW5jVmFsaWRhdGUpIHtcbiAgdmFyIGRpc3BhdGNoID0gcHJvcHMuZGlzcGF0Y2g7XG4gIHZhciBmaWVsZHMgPSBwcm9wcy5maWVsZHM7XG4gIHZhciBvblN1Ym1pdFN1Y2Nlc3MgPSBwcm9wcy5vblN1Ym1pdFN1Y2Nlc3M7XG4gIHZhciBvblN1Ym1pdEZhaWwgPSBwcm9wcy5vblN1Ym1pdEZhaWw7XG4gIHZhciBzdGFydFN1Ym1pdCA9IHByb3BzLnN0YXJ0U3VibWl0O1xuICB2YXIgc3RvcFN1Ym1pdCA9IHByb3BzLnN0b3BTdWJtaXQ7XG4gIHZhciBzdWJtaXRGYWlsZWQgPSBwcm9wcy5zdWJtaXRGYWlsZWQ7XG4gIHZhciByZXR1cm5SZWplY3RlZFN1Ym1pdFByb21pc2UgPSBwcm9wcy5yZXR1cm5SZWplY3RlZFN1Ym1pdFByb21pc2U7XG4gIHZhciB0b3VjaCA9IHByb3BzLnRvdWNoO1xuICB2YXIgdmFsaWRhdGUgPSBwcm9wcy52YWxpZGF0ZTtcblxuICB2YXIgc3luY0Vycm9ycyA9IHZhbGlkYXRlKHZhbHVlcywgcHJvcHMpO1xuICB0b3VjaC5hcHBseSh1bmRlZmluZWQsIGZpZWxkcyk7IC8vIHRvdWNoIGFsbCBmaWVsZHNcbiAgaWYgKCgwLCBfaXNWYWxpZDIuZGVmYXVsdCkoc3luY0Vycm9ycykpIHtcbiAgICB2YXIgZG9TdWJtaXQgPSBmdW5jdGlvbiBkb1N1Ym1pdCgpIHtcbiAgICAgIHZhciByZXN1bHQgPSBzdWJtaXQodmFsdWVzLCBkaXNwYXRjaCk7XG4gICAgICBpZiAoKDAsIF9pc1Byb21pc2UyLmRlZmF1bHQpKHJlc3VsdCkpIHtcbiAgICAgICAgc3RhcnRTdWJtaXQoKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC50aGVuKGZ1bmN0aW9uIChzdWJtaXRSZXN1bHQpIHtcbiAgICAgICAgICBzdG9wU3VibWl0KCk7XG4gICAgICAgICAgaWYgKG9uU3VibWl0U3VjY2Vzcykge1xuICAgICAgICAgICAgb25TdWJtaXRTdWNjZXNzKHN1Ym1pdFJlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdWJtaXRSZXN1bHQ7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChzdWJtaXRFcnJvcikge1xuICAgICAgICAgIHN0b3BTdWJtaXQoc3VibWl0RXJyb3IpO1xuICAgICAgICAgIGlmIChvblN1Ym1pdEZhaWwpIHtcbiAgICAgICAgICAgIG9uU3VibWl0RmFpbChzdWJtaXRFcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXR1cm5SZWplY3RlZFN1Ym1pdFByb21pc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChzdWJtaXRFcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChvblN1Ym1pdFN1Y2Nlc3MpIHtcbiAgICAgICAgb25TdWJtaXRTdWNjZXNzKHJlc3VsdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgdmFyIGFzeW5jVmFsaWRhdGVSZXN1bHQgPSBhc3luY1ZhbGlkYXRlKCk7XG4gICAgcmV0dXJuICgwLCBfaXNQcm9taXNlMi5kZWZhdWx0KShhc3luY1ZhbGlkYXRlUmVzdWx0KSA/XG4gICAgLy8gYXN5bmNWYWxpZGF0ZVJlc3VsdCB3aWxsIGJlIHJlamVjdGVkIGlmIGFzeW5jIHZhbGlkYXRpb24gZmFpbGVkXG4gICAgYXN5bmNWYWxpZGF0ZVJlc3VsdC50aGVuKGRvU3VibWl0LCBmdW5jdGlvbiAoKSB7XG4gICAgICBzdWJtaXRGYWlsZWQoKTtcbiAgICAgIGlmIChvblN1Ym1pdEZhaWwpIHtcbiAgICAgICAgb25TdWJtaXRGYWlsKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0dXJuUmVqZWN0ZWRTdWJtaXRQcm9taXNlID8gUHJvbWlzZS5yZWplY3QoKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH0pIDogZG9TdWJtaXQoKTsgLy8gbm8gYXN5bmMgdmFsaWRhdGlvbiwgc28gc3VibWl0XG4gIH1cbiAgc3VibWl0RmFpbGVkKCk7XG5cbiAgaWYgKG9uU3VibWl0RmFpbCkge1xuICAgIG9uU3VibWl0RmFpbChzeW5jRXJyb3JzKTtcbiAgfVxuXG4gIGlmIChyZXR1cm5SZWplY3RlZFN1Ym1pdFByb21pc2UpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoc3luY0Vycm9ycyk7XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGhhbmRsZVN1Ym1pdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9oYW5kbGVTdWJtaXQuanNcbiAqKiBtb2R1bGUgaWQgPSA2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzUHJvbWlzZSA9IHJlcXVpcmUoJ2lzLXByb21pc2UnKTtcblxudmFyIF9pc1Byb21pc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcm9taXNlKTtcblxudmFyIF9pc1ZhbGlkID0gcmVxdWlyZSgnLi9pc1ZhbGlkJyk7XG5cbnZhciBfaXNWYWxpZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ZhbGlkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGFzeW5jVmFsaWRhdGlvbiA9IGZ1bmN0aW9uIGFzeW5jVmFsaWRhdGlvbihmbiwgc3RhcnQsIHN0b3AsIGZpZWxkKSB7XG4gIHN0YXJ0KGZpZWxkKTtcbiAgdmFyIHByb21pc2UgPSBmbigpO1xuICBpZiAoISgwLCBfaXNQcm9taXNlMi5kZWZhdWx0KShwcm9taXNlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignYXN5bmNWYWxpZGF0ZSBmdW5jdGlvbiBwYXNzZWQgdG8gcmVkdXhGb3JtIG11c3QgcmV0dXJuIGEgcHJvbWlzZScpO1xuICB9XG4gIHZhciBoYW5kbGVFcnJvcnMgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcnMocmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVycm9ycykge1xuICAgICAgaWYgKCEoMCwgX2lzVmFsaWQyLmRlZmF1bHQpKGVycm9ycykpIHtcbiAgICAgICAgc3RvcChlcnJvcnMpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcbiAgICAgIH0gZWxzZSBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgc3RvcCgpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FzeW5jaHJvbm91cyB2YWxpZGF0aW9uIHByb21pc2Ugd2FzIHJlamVjdGVkIHdpdGhvdXQgZXJyb3JzLicpO1xuICAgICAgfVxuICAgICAgc3RvcCgpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH07XG4gIH07XG4gIHJldHVybiBwcm9taXNlLnRoZW4oaGFuZGxlRXJyb3JzKGZhbHNlKSwgaGFuZGxlRXJyb3JzKHRydWUpKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGFzeW5jVmFsaWRhdGlvbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9hc3luY1ZhbGlkYXRpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NpbGVuY2VFdmVudCA9IHJlcXVpcmUoJy4vc2lsZW5jZUV2ZW50Jyk7XG5cbnZhciBfc2lsZW5jZUV2ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbGVuY2VFdmVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBzaWxlbmNlRXZlbnRzID0gZnVuY3Rpb24gc2lsZW5jZUV2ZW50cyhmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9zaWxlbmNlRXZlbnQyLmRlZmF1bHQpKGV2ZW50KSA/IGZuLmFwcGx5KHVuZGVmaW5lZCwgYXJncykgOiBmbi5hcHBseSh1bmRlZmluZWQsIFtldmVudF0uY29uY2F0KGFyZ3MpKTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHNpbGVuY2VFdmVudHM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL3NpbGVuY2VFdmVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSA2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzRXZlbnQgPSByZXF1aXJlKCcuL2lzRXZlbnQnKTtcblxudmFyIF9pc0V2ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzRXZlbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc2lsZW5jZUV2ZW50ID0gZnVuY3Rpb24gc2lsZW5jZUV2ZW50KGV2ZW50KSB7XG4gIHZhciBpcyA9ICgwLCBfaXNFdmVudDIuZGVmYXVsdCkoZXZlbnQpO1xuICBpZiAoaXMpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIHJldHVybiBpcztcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHNpbGVuY2VFdmVudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9ldmVudHMvc2lsZW5jZUV2ZW50LmpzXG4gKiogbW9kdWxlIGlkID0gNzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWR1eCA9IHJlcXVpcmUoJ3JlZHV4Jyk7XG5cbnZhciB3cmFwTWFwRGlzcGF0Y2hUb1Byb3BzID0gZnVuY3Rpb24gd3JhcE1hcERpc3BhdGNoVG9Qcm9wcyhtYXBEaXNwYXRjaFRvUHJvcHMsIGFjdGlvbkNyZWF0b3JzKSB7XG4gIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgICBpZiAodHlwZW9mIG1hcERpc3BhdGNoVG9Qcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgICAgIGRpc3BhdGNoOiBkaXNwYXRjaFxuICAgICAgICAgIH0sIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpLCAoMCwgX3JlZHV4LmJpbmRBY3Rpb25DcmVhdG9ycykoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgICAgZGlzcGF0Y2g6IGRpc3BhdGNoXG4gICAgICAgIH0sIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCksICgwLCBfcmVkdXguYmluZEFjdGlvbkNyZWF0b3JzKShhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIGRpc3BhdGNoOiBkaXNwYXRjaFxuICAgICAgfSwgKDAsIF9yZWR1eC5iaW5kQWN0aW9uQ3JlYXRvcnMpKG1hcERpc3BhdGNoVG9Qcm9wcywgZGlzcGF0Y2gpLCAoMCwgX3JlZHV4LmJpbmRBY3Rpb25DcmVhdG9ycykoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGRpc3BhdGNoOiBkaXNwYXRjaFxuICAgIH0sICgwLCBfcmVkdXguYmluZEFjdGlvbkNyZWF0b3JzKShhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpKTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHdyYXBNYXBEaXNwYXRjaFRvUHJvcHM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdXgtZm9ybS9saWIvd3JhcE1hcERpc3BhdGNoVG9Qcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDcxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg0NTUpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2tpdF9kbGxcbiAqKiBtb2R1bGUgaWQgPSA3MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgd3JhcE1hcFN0YXRlVG9Qcm9wcyA9IGZ1bmN0aW9uIHdyYXBNYXBTdGF0ZVRvUHJvcHMobWFwU3RhdGVUb1Byb3BzLCBnZXRGb3JtKSB7XG4gIGlmIChtYXBTdGF0ZVRvUHJvcHMpIHtcbiAgICBpZiAodHlwZW9mIG1hcFN0YXRlVG9Qcm9wcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYXBTdGF0ZVRvUHJvcHMgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIGlmIChtYXBTdGF0ZVRvUHJvcHMubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSwgb3duUHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSwge1xuICAgICAgICAgIGZvcm06IGdldEZvcm0oc3RhdGUpXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpLCB7XG4gICAgICAgIGZvcm06IGdldEZvcm0oc3RhdGUpXG4gICAgICB9KTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9ybTogZ2V0Rm9ybShzdGF0ZSlcbiAgICB9O1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gd3JhcE1hcFN0YXRlVG9Qcm9wcztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi93cmFwTWFwU3RhdGVUb1Byb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gNzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDY2MSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsXG4gKiogbW9kdWxlIGlkID0gNzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGNyZWF0ZVByb3BUeXBlcyA9IGZ1bmN0aW9uIGNyZWF0ZVByb3BUeXBlcyhfcmVmKSB7XG4gIHZhciBfcmVmJFByb3BUeXBlcyA9IF9yZWYuUHJvcFR5cGVzO1xuICB2YXIgYW55ID0gX3JlZiRQcm9wVHlwZXMuYW55O1xuICB2YXIgYm9vbCA9IF9yZWYkUHJvcFR5cGVzLmJvb2w7XG4gIHZhciBzdHJpbmcgPSBfcmVmJFByb3BUeXBlcy5zdHJpbmc7XG4gIHZhciBmdW5jID0gX3JlZiRQcm9wVHlwZXMuZnVuYztcbiAgdmFyIG9iamVjdCA9IF9yZWYkUHJvcFR5cGVzLm9iamVjdDtcbiAgcmV0dXJuIHtcbiAgICAvLyBTdGF0ZTpcbiAgICBhY3RpdmU6IHN0cmluZywgLy8gY3VycmVudGx5IGFjdGl2ZSBmaWVsZFxuICAgIGFzeW5jVmFsaWRhdGluZzogYm9vbC5pc1JlcXVpcmVkLCAvLyB0cnVlIGlmIGFzeW5jIHZhbGlkYXRpb24gaXMgcnVubmluZ1xuICAgIGF1dG9maWxsZWQ6IGJvb2wsIC8vIHRydWUgaWYgc2V0IHByb2dyYW1tYXRpY2FsbHkgYnkgYXV0b2ZpbGxcbiAgICBkaXJ0eTogYm9vbC5pc1JlcXVpcmVkLCAvLyB0cnVlIGlmIGFueSB2YWx1ZXMgYXJlIGRpZmZlcmVudCBmcm9tIGluaXRpYWxWYWx1ZXNcbiAgICBlcnJvcjogYW55LCAvLyBmb3JtLXdpZGUgZXJyb3IgZnJvbSAnX2Vycm9yJyBrZXkgaW4gdmFsaWRhdGlvbiByZXN1bHRcbiAgICBlcnJvcnM6IG9iamVjdCwgLy8gYSBtYXAgb2YgZXJyb3JzIGNvcnJlc3BvbmRpbmcgdG8gc3RydWN0dXJlIG9mIGZvcm0gZGF0YSAocmVzdWx0IG9mIHZhbGlkYXRpb24pXG4gICAgZmllbGRzOiBvYmplY3QuaXNSZXF1aXJlZCwgLy8gdGhlIG1hcCBvZiBmaWVsZHNcbiAgICBmb3JtS2V5OiBhbnksIC8vIHRoZSBmb3JtIGtleSBpZiBvbmUgd2FzIHByb3ZpZGVkICh1c2VkIHdoZW4gZG9pbmcgbXVsdGlyZWNvcmQgZm9ybXMpXG4gICAgaW52YWxpZDogYm9vbC5pc1JlcXVpcmVkLCAvLyB0cnVlIGlmIHRoZXJlIGFyZSBhbnkgdmFsaWRhdGlvbiBlcnJvcnNcbiAgICBwcmlzdGluZTogYm9vbC5pc1JlcXVpcmVkLCAvLyB0cnVlIGlmIHRoZSB2YWx1ZXMgYXJlIHRoZSBzYW1lIGFzIGluaXRpYWxWYWx1ZXNcbiAgICBzdWJtaXR0aW5nOiBib29sLmlzUmVxdWlyZWQsIC8vIHRydWUgaWYgdGhlIGZvcm0gaXMgaW4gdGhlIHByb2Nlc3Mgb2YgYmVpbmcgc3VibWl0dGVkXG4gICAgc3VibWl0RmFpbGVkOiBib29sLmlzUmVxdWlyZWQsIC8vIHRydWUgaWYgdGhlIGZvcm0gd2FzIHN1Ym1pdHRlZCBhbmQgZmFpbGVkIGZvciBhbnkgcmVhc29uXG4gICAgdmFsaWQ6IGJvb2wuaXNSZXF1aXJlZCwgLy8gdHJ1ZSBpZiB0aGVyZSBhcmUgbm8gdmFsaWRhdGlvbiBlcnJvcnNcbiAgICB2YWx1ZXM6IG9iamVjdC5pc1JlcXVpcmVkLCAvLyB0aGUgdmFsdWVzIG9mIHRoZSBmb3JtIGFzIHRoZXkgd2lsbCBiZSBzdWJtaXR0ZWRcblxuICAgIC8vIEFjdGlvbnM6XG4gICAgYXN5bmNWYWxpZGF0ZTogZnVuYy5pc1JlcXVpcmVkLCAvLyBmdW5jdGlvbiB0byB0cmlnZ2VyIGFzeW5jIHZhbGlkYXRpb25cbiAgICBkZXN0cm95Rm9ybTogZnVuYy5pc1JlcXVpcmVkLCAvLyBhY3Rpb24gdG8gZGVzdHJveSB0aGUgZm9ybSdzIGRhdGEgaW4gUmVkdXhcbiAgICBoYW5kbGVTdWJtaXQ6IGZ1bmMuaXNSZXF1aXJlZCwgLy8gZnVuY3Rpb24gdG8gc3VibWl0IHRoZSBmb3JtXG4gICAgaW5pdGlhbGl6ZUZvcm06IGZ1bmMuaXNSZXF1aXJlZCwgLy8gYWN0aW9uIHRvIGluaXRpYWxpemUgZm9ybSBkYXRhXG4gICAgcmVzZXRGb3JtOiBmdW5jLmlzUmVxdWlyZWQsIC8vIGFjdGlvbiB0byByZXNldCB0aGUgZm9ybSBkYXRhIHRvIHByZXZpb3VzbHkgaW5pdGlhbGl6ZWQgdmFsdWVzXG4gICAgdG91Y2g6IGZ1bmMuaXNSZXF1aXJlZCwgLy8gYWN0aW9uIHRvIG1hcmsgZmllbGRzIGFzIHRvdWNoZWRcbiAgICB0b3VjaEFsbDogZnVuYy5pc1JlcXVpcmVkLCAvLyBhY3Rpb24gdG8gbWFyayBBTEwgZmllbGRzIGFzIHRvdWNoZWRcbiAgICB1bnRvdWNoOiBmdW5jLmlzUmVxdWlyZWQsIC8vIGFjdGlvbiB0byBtYXJrIGZpZWxkcyBhcyB1bnRvdWNoZWRcbiAgICB1bnRvdWNoQWxsOiBmdW5jLmlzUmVxdWlyZWQgLy8gYWN0aW9uIHRvIG1hcmsgQUxMIGZpZWxkcyBhcyB1bnRvdWNoZWRcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVByb3BUeXBlcztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVQcm9wVHlwZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA3NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IEFsZXJ0IGZyb20gJy4vQWxlcnQnXG5pbXBvcnQgQWxlcnRzIGZyb20gJy4vQWxlcnRzJ1xuZXhwb3J0IHsgQWxlcnRzLCBBbGVydCB9XG5leHBvcnQgZGVmYXVsdCBBbGVydFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvQWxlcnQvaW5kZXgudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTXNnVHlwZSB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvY29tcG9uZW50cydcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24nXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlczogYW55ID0gcmVxdWlyZSgnLi9fYWxlcnQuc2NzcycpXG4vLyBpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBtZXNzYWdlOiBzdHJpbmdcbiAgdHlwZT86IE1zZ1R5cGVcbiAgb25SZXF1ZXN0Q2xvc2U/OiAoKSA9PiB2b2lkXG4gIHZpc2libGU6IGJvb2xlYW5cbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBBbGVydCBleHRlbmRzIENvbXBvbmVudDxQcm9wcywge30+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnByb3BzLnR5cGUgPyB0aGlzLnByb3BzLnR5cGUgOiAnc3VjY2VzcydcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMudmlzaWJsZSAmJiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlTmFtZT17YGFsZXJ0LS0ke3R5cGV9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImFsZXJ0LWNsb3NlXCI+XG4gICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2V9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgc2l6ZT17MTV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJjb250ZW50XCI+e3RoaXMucHJvcHMubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9BbGVydC9BbGVydC50c3hcbiAqKi8iLCJpbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nXG5leHBvcnQgZGVmYXVsdCBJY29uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9JY29uL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBzdmdJY29ucyBmcm9tICcuL3N2Zy1pY29ucydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9JY29uLmNzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBuYW1lOiBzdHJpbmdcbiAgb25DbGljaz86IGFueVxuICBzaXplPzogbnVtYmVyXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBzdHlsZU5hbWU/OiBzdHJpbmdcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBJY29uIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywge30+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBuYW1lLCBvbkNsaWNrLCBzaXplIH0gPSB0aGlzLnByb3BzXG4gICAgbGV0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoJ2ljb24nLCBgaWNvbi0ke25hbWV9YCwgdGhpcy5wcm9wcy5jbGFzc05hbWUpXG5cbiAgICBpZiAodHlwZW9mIHN2Z0ljb25zW25hbWVdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcignSWNvbiBuYW1lICglcykgbm90IGZvdW5kISAnLCBuYW1lKVxuICAgIH1cblxuICAgIHNpemUgPSBzaXplIHx8IDMwXG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gc3R5bGVOYW1lPVwiaWNvblwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgPHN2ZyB7Li4uc3ZnSWNvbnNbbmFtZV0udmlld0JveCAmJiB7dmlld0JveDogc3ZnSWNvbnNbbmFtZV0udmlld0JveH19IHdpZHRoPXtzaXplfSBoZWlnaHQ9e3NpemV9IHN0eWxlTmFtZT1cInN2Zy1zaGFwZVwiPlxuICAgICAgICAgIDxwYXRoIGQ9e3N2Z0ljb25zW25hbWVdLnBhdGh9Lz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L3NwYW4+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEljb25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL0ljb24vSWNvbi50c3hcbiAqKi8iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA4MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xuICBjbG9zZToge1xuICAgIHBhdGg6ICdNNy40OCA4bDMuNzUgMy43NS0xLjQ4IDEuNDhMNiA5LjQ4bC0zLjc1IDMuNzUtMS40OC0xLjQ4TDQuNTIgOCAuNzcgNC4yNWwxLjQ4LTEuNDhMNiA2LjUybDMuNzUtMy43NSAxLjQ4IDEuNDh6JyxcbiAgICB2aWV3Qm94OiAnMCAwIDEyIDE2J1xuICB9LFxuICBzdGFyOiB7XG4gICAgcGF0aDogJ00xNCA2bC00LjktLjY0TDcgMSA0LjkgNS4zNiAwIDZsMy42IDMuMjZMMi42NyAxNCA3IDExLjY3IDExLjMzIDE0bC0uOTMtNC43NHonLFxuICB9LFxuICB1c2Vyczoge1xuICAgIHBhdGg6ICdNMTYgMTFjMS42NiAwIDIuOTktMS4zNCAyLjk5LTNTMTcuNjYgNSAxNiA1Yy0xLjY2IDAtMyAxLjM0LTMgM3MxLjM0IDMgMyAzem0tOCAwYzEuNjYgMCAyLjk5LTEuMzQgMi45OS0zUzkuNjYgNSA4IDVDNi4zNCA1IDUgNi4zNCA1IDhzMS4zNCAzIDMgM3ptMCAyYy0yLjMzIDAtNyAxLjE3LTcgMy41VjE5aDE0di0yLjVjMC0yLjMzLTQuNjctMy41LTctMy41em04IDBjLS4yOSAwLS42Mi4wMi0uOTcuMDUgMS4xNi44NCAxLjk3IDEuOTcgMS45NyAzLjQ1VjE5aDZ2LTIuNWMwLTIuMzMtNC42Ny0zLjUtNy0zLjV6JyxcbiAgfSxcbiAgZm9sZGVyOiB7XG4gICAgcGF0aDogJ00xMCA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjhjMC0xLjEtLjktMi0yLTJoLThsLTItMnonLFxuICB9LFxuICBkYXRhYmFzZToge1xuICAgIHBhdGg6ICdNMjAuMiA1LjlsLjgtLjhDMTkuNiAzLjcgMTcuOCAzIDE2IDNzLTMuNi43LTUgMi4xbC44LjhDMTMgNC44IDE0LjUgNC4yIDE2IDQuMnMzIC42IDQuMiAxLjd6bS0uOS44Yy0uOS0uOS0yLjEtMS40LTMuMy0xLjRzLTIuNC41LTMuMyAxLjRsLjguOGMuNy0uNyAxLjYtMSAyLjUtMSAuOSAwIDEuOC4zIDIuNSAxbC44LS44ek0xOSAxM2gtMlY5aC0ydjRINWMtMS4xIDAtMiAuOS0yIDJ2NGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0ydi00YzAtMS4xLS45LTItMi0yek04IDE4SDZ2LTJoMnYyem0zLjUgMGgtMnYtMmgydjJ6bTMuNSAwaC0ydi0yaDJ2MnonXG4gIH0sXG4gIHN0YXRpc3RpY3M6IHtcbiAgICBwYXRoOiAnTTIxIDJIM2MtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmg3djJIOHYyaDh2LTJoLTJ2LTJoN2MxLjEgMCAyLS45IDItMlY0YzAtMS4xLS45LTItMi0yem0wIDE0SDNWNGgxOHYxMnonLFxuICB9LFxuICBib29rczoge1xuICAgIHBhdGg6ICdNMjAuNTQgNS4yM2wtMS4zOS0xLjY4QzE4Ljg4IDMuMjEgMTguNDcgMyAxOCAzSDZjLS40NyAwLS44OC4yMS0xLjE2LjU1TDMuNDYgNS4yM0MzLjE3IDUuNTcgMyA2LjAyIDMgNi41VjE5YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNi41YzAtLjQ4LS4xNy0uOTMtLjQ2LTEuMjd6TTEyIDE3LjVMNi41IDEySDEwdi0yaDR2MmgzLjVMMTIgMTcuNXpNNS4xMiA1bC44MS0xaDEybC45NCAxSDUuMTJ6JyxcbiAgICAvLyB2aWV3Qm94OiAnMyAzIDE4IDE4J1xuICB9LFxuICBiYWNrOiB7XG4gICAgLy8gcGF0aDogJ003MzIgODMybC01NSA1NWwtNTA1IC01MDVsNTA1IC01MDVsNTUgNTRsLTQ1MSA0NTF6J1xuICAgIC8vIHBhdGg6ICdNMTQgNmwtNC45LS42NEw3IDEgNC45IDUuMzYgMCA2bDMuNiAzLjI2TDIuNjcgMTQgNyAxMS42NyAxMS4zMyAxNGwtLjkzLTQuNzR6JyxcbiAgICBwYXRoOiAnbSAyNiwyNSBjIC0wLjQ2NzU3NCwwIC0wLjkwOTQzNCwwLjE2ODY1IC0xLjI1LDAuNDM3NSBDIDI0LjU1NTI3OSwyNS41OTEyMTUgNi42MTMwNTE2LDQyLjU0NjI4NSA2LjQ2ODc1LDQyLjcxODc1IDYuMTc4MjMzMiw0My4wNjU5NiA2LDQzLjUxMTg3IDYsNDQgNiw0NC41MTk0NiA2LjIwNjU1NjYsNDQuOTg4MTggNi41MzEyNSw0NS4zNDM3NSA2LjY2ODM5OTIsNDUuNDkzOTQxIDI0LjYyNSw2Mi40Mzc1IDI0LjYyNSw2Mi40Mzc1IGMgMC43NTk4NDIsMC43MjUxNTIgMi4xMjE4NDIsMC43MDA0MjEgMi44NDM3NSwtMC4wNjI1IDAuNzIxOTA4LC0wLjc2MjkzIDAuNjcyMjQ0LC0yLjEyNTA5OSAtMC4wOTM3NSwtMi44NDM3NSBMIDEzLjAzMTI1LDQ2IDY0LDQ2IGMgMTMuODg4ODcxLDAgMjUuNjYwMzkyLDExLjYzOTU1IDI2LDI2LjAzMTI1IDAuMDAzNSwwLjE0MDU1NyAwLDAuNzc0ODUgMCwwLjk2ODc1IDAsMS4xMDggMC44OTIsMiAyLDIgMS4xMDgsMCAyLC0wLjg5MiAyLC0yIGwgMCwtMS4wNjI1IEMgOTMuNjEwMjA4LDU1LjQxOTQgODAuMTE4NTI5LDQyIDY0LDQyIEwgMTMuMDMxMjUsNDIgQyAxMy4wMzEyNSw0MiAyNy4zNjI3MzIsMjguNDk1OTU5IDI3LjUsMjguMzQzNzUgMjcuODE5NzEsMjcuOTg5MjUgMjgsMjcuNTE0OTcgMjgsMjcgMjgsMjUuODk1NDMgMjcuMTA0NTY5LDI1IDI2LDI1IHonLFxuICAgIHZpZXdCb3g6ICcwIDAgMTAwIDEyNSdcbiAgfSxcbiAgcHJlZmVyZW5jZToge1xuICAgIHBhdGg6ICdNIDE3Ljc4MTI1IDguOTY4NzUgQSAyLjAwMDIgMi4wMDAyIDAgMCAwIDE2IDExIEwgMTYgNTYuMjUgQyAxMi4wMDgxODggNTcuMTY4MzAyIDkgNjAuNzQxNDA2IDkgNjUgQyA5IDY5LjI1OTIyNCAxMi4wMDc0MjcgNzIuODYzNTM0IDE2IDczLjc4MTI1IEwgMTYgODkgQSAyLjAwMDIgMi4wMDAyIDAgMSAwIDIwIDg5IEwgMjAgNzMuNzgxMjUgQyAyMy45OTI1NzMgNzIuODYzNTM0IDI3IDY5LjI1OTIyNCAyNyA2NSBDIDI3IDYwLjc0MTQwNiAyMy45OTE4MTIgNTcuMTY4MzAyIDIwIDU2LjI1IEwgMjAgMTEgQSAyLjAwMDIgMi4wMDAyIDAgMCAwIDE3Ljc4MTI1IDguOTY4NzUgeiBNIDQ5Ljc4MTI1IDguOTY4NzUgQSAyLjAwMDIgMi4wMDAyIDAgMCAwIDQ4IDExIEwgNDggMjYuMjUgQyA0NC4wMDgxODggMjcuMTY4MzA1IDQxIDMwLjc0MTQyMyA0MSAzNSBDIDQxIDM5LjI1OTEyIDQ0LjAwNzQyNyA0Mi44NjM1MTEgNDggNDMuNzgxMjUgTCA0OCA4OSBBIDIuMDAwMiAyLjAwMDIgMCAxIDAgNTIgODkgTCA1MiA0My43ODEyNSBDIDU1Ljk5MjU3MyA0Mi44NjM1MTEgNTkgMzkuMjU5MTIgNTkgMzUgQyA1OSAzMC43NDE0MjMgNTUuOTkxODEyIDI3LjE2ODMwNSA1MiAyNi4yNSBMIDUyIDExIEEgMi4wMDAyIDIuMDAwMiAwIDAgMCA0OS43ODEyNSA4Ljk2ODc1IHogTSA4MS43ODEyNSA4Ljk2ODc1IEEgMi4wMDAyIDIuMDAwMiAwIDAgMCA4MCAxMSBMIDgwIDU2LjI1IEMgNzYuMDA4MTg4IDU3LjE2ODMwMiA3MyA2MC43NDE0MDYgNzMgNjUgQyA3MyA2OS4yNTkyMjQgNzYuMDA3NDI3IDcyLjg2MzUzNCA4MCA3My43ODEyNSBMIDgwIDg5IEEgMi4wMDAyIDIuMDAwMiAwIDEgMCA4NCA4OSBMIDg0IDczLjc4MTI1IEMgODcuOTkyNTczIDcyLjg2MzUzNCA5MSA2OS4yNTkyMjQgOTEgNjUgQyA5MSA2MC43NDE0MDYgODcuOTkxODEyIDU3LjE2ODMwMiA4NCA1Ni4yNSBMIDg0IDExIEEgMi4wMDAyIDIuMDAwMiAwIDAgMCA4MS43ODEyNSA4Ljk2ODc1IHogTSA1MCAzMCBDIDUyLjc4NTExNiAzMCA1NSAzMi4yMTQ4OCA1NSAzNSBDIDU1IDM3Ljc4NTEyIDUyLjc4NTExNiA0MCA1MCA0MCBDIDQ3LjIxNDg4NCA0MCA0NSAzNy43ODUxMiA0NSAzNSBDIDQ1IDMyLjIxNDg4IDQ3LjIxNDg4NCAzMCA1MCAzMCB6IE0gMTggNjAgQyAyMC43ODUxMTYgNjAgMjMgNjIuMjE0OSAyMyA2NSBDIDIzIDY3Ljc4NTIgMjAuNzg1MTE2IDcwIDE4IDcwIEMgMTUuMjE0ODg0IDcwIDEzIDY3Ljc4NTIgMTMgNjUgQyAxMyA2Mi4yMTQ5IDE1LjIxNDg4NCA2MCAxOCA2MCB6IE0gODIgNjAgQyA4NC43ODUxMTYgNjAgODcgNjIuMjE0OSA4NyA2NSBDIDg3IDY3Ljc4NTIgODQuNzg1MTE2IDcwIDgyIDcwIEMgNzkuMjE0ODg0IDcwIDc3IDY3Ljc4NTIgNzcgNjUgQyA3NyA2Mi4yMTQ5IDc5LjIxNDg4NCA2MCA4MiA2MCB6ICcsXG4gICAgdmlld0JveDogJzAgMCAxMDAgMTI1J1xuICB9LFxuICBmb250OiB7XG4gICAgLy8gcGF0aDogJ00xNCA4Ljc3di0xLjZsLTEuOTQtLjY0LS40NS0xLjA5Ljg4LTEuODQtMS4xMy0xLjEzLTEuODEuOTEtMS4wOS0uNDUtLjY5LTEuOTJoLTEuNmwtLjYzIDEuOTQtMS4xMS40NS0xLjg0LS44OC0xLjEzIDEuMTMuOTEgMS44MS0uNDUgMS4wOUwwIDcuMjN2MS41OWwxLjk0LjY0LjQ1IDEuMDktLjg4IDEuODQgMS4xMyAxLjEzIDEuODEtLjkxIDEuMDkuNDUuNjkgMS45MmgxLjU5bC42My0xLjk0IDEuMTEtLjQ1IDEuODQuODggMS4xMy0xLjEzLS45Mi0xLjgxLjQ3LTEuMDlMMTQgOC43NXYuMDJ6TTcgMTFjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzeidcbiAgICBwYXRoOiAnTTE0IDZsLTQuOS0uNjRMNyAxIDQuOSA1LjM2IDAgNmwzLjYgMy4yNkwyLjY3IDE0IDcgMTEuNjcgMTEuMzMgMTRsLS45My00Ljc0eicsXG4gIH0sXG4gIGFycm93UmlnaHQ6IHtcbiAgICBwYXRoOiAnTS0yOTAuOSw0MzAuMWwtMC43LTAuN2w4LjItOC42bC04LjItOC4ybDAuNy0wLjdsOC45LDguOUwtMjkwLjksNDMwLjF6JyxcbiAgICB2aWV3Qm94OiAnLTI5MiA0MTEuOSAxMSAxOCdcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvSWNvbi9zdmctaWNvbnMudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg2NTgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWNzcy1tb2R1bGVzL2Rpc3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsXG4gKiogbW9kdWxlIGlkID0gODJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInN2Zy1zaGFwZVwiOlwic3ZnLXNoYXBlXzMwLWswXCIsXCJpY29uXCI6XCJpY29uX1ZzVlI0XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9JY29uL0ljb24uY3NzXG4gKiogbW9kdWxlIGlkID0gODNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImFsZXJ0c1wiOlwiYWxlcnRzXzNhbmFoXCIsXCJhbGVydFwiOlwiYWxlcnRfM1dBeWVcIixcImFsZXJ0LS1zdWNjZXNzXCI6XCJhbGVydC0tc3VjY2Vzc19OVFI1TFwiLFwiYWxlcnQtLWVycm9yXCI6XCJhbGVydC0tZXJyb3JfMUMyZk1cIixcImFsZXJ0LS13YXJuaW5nXCI6XCJhbGVydC0td2FybmluZ18zZ1NXdlwiLFwiY29udGVudFwiOlwiY29udGVudF8xVTRUc1wiLFwiYWxlcnQtY2xvc2VcIjpcImFsZXJ0LWNsb3NlXzFVVUxTXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9BbGVydC9fYWxlcnQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDg0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQWxlcnQgZnJvbSAnLi9BbGVydCdcbmNvbnN0IHN0eWxlczogYW55ID0gcmVxdWlyZSgnLi9fYWxlcnQuc2NzcycpXG5cbnR5cGUgVFByb3BzID0ge1xuICBjaGlsZHJlbj86IGFueVxuICBvblJlcXVlc3RDbG9zZT86IChpZDogc3RyaW5nKSA9PiB2b2lkXG4gIG1lc3NhZ2VzOiB7XG4gICAgY29udGVudDogc3RyaW5nXG4gICAgdmlzaWJsZTogYm9vbGVhblxuICAgIHR5cGU6ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnd2FybmluZydcbiAgICBpZDogc3RyaW5nXG4gIH1bXVxufVxuXG5mdW5jdGlvbiBBbGVydHMocHJvcHM6IFRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxlcnRzfT5cbiAgICAgIHtcbiAgICAgICAgcHJvcHMubWVzc2FnZXMubWFwKChtc2csIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEFsZXJ0XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgdHlwZT17bXNnLnR5cGV9XG4gICAgICAgICAgICBtZXNzYWdlPXttc2cuY29udGVudH1cbiAgICAgICAgICAgIHZpc2libGU9e21zZy52aXNpYmxlfVxuICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHtcbiAgICAgICAgICAgICAgcHJvcHMub25SZXF1ZXN0Q2xvc2UobXNnLmlkKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApKVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0c1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvQWxlcnQvQWxlcnRzLnRzeFxuICoqLyIsImltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJ1xuaW1wb3J0IE1vZGFsUGx1cyBmcm9tICcuL01vZGFsUGx1cydcbmltcG9ydCBDb25maXJtTW9kYWwgZnJvbSAnLi9Db25maXJtTW9kYWwnXG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG5leHBvcnQgKiBmcm9tICcuL01vZGFsJ1xuZXhwb3J0IHsgTW9kYWxQbHVzLCBDb25maXJtTW9kYWwgfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTW9kYWwvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IEZhZGUgZnJvbSAnLi4vX2FuaW1hdGlvbnMvRmFkZSdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Nb2RhbC5zY3NzJylcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHdpZHRoOiBudW1iZXJcbiAgb25SZXF1ZXN0Q2xvc2U6ICgpID0+IHZvaWRcbiAgb3BlbjogYm9vbGVhblxuICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgbW9kYWxIZWlnaHQ/OiBudW1iZXJcbiAgaXNNb2RhbEhpZGRlbj86IGJvb2xlYW5cbiAgaXNNb2RhbFZlcnRpY2FsQ2VudGVyPzogYm9vbGVhblxuICBkb2N1bWVudEhlaWdodD86IG51bWJlclxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcblxuICBtb2RhbDogSFRNTERpdkVsZW1lbnRcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb2RhbEhlaWdodDogMCxcbiAgICAgIGlzTW9kYWxIaWRkZW46IGZhbHNlLFxuICAgICAgaXNNb2RhbFZlcnRpY2FsQ2VudGVyOiB0cnVlXG4gICAgfVxuICAgIHRoaXMuc2V0VmlldyA9IHRoaXMuc2V0Vmlldy5iaW5kKHRoaXMpXG4gICAgdGhpcy5oaWRlTW9kYWwgPSB0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpXG4gIH1cblxuICBoaWRlTW9kYWwoKSB7XG4gICAgdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZSgpXG4gICAgdXRpbHMudW5sb2NrU2Nyb2xsKClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zZXRWaWV3KVxuICB9XG5cbiAgc2V0VmlldygpIHtcbiAgICBsZXQgbW9kYWxIZWlnaHQgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLm1vZGFsKS5jbGllbnRIZWlnaHRcbiAgICBsZXQgaXNNb2RhbFZlcnRpY2FsQ2VudGVyID0gdHJ1ZVxuICAgIGxldCBkb2N1bWVudEhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0XG5cbiAgICBpZiAod2luZG93LmlubmVySGVpZ2h0IDwgbW9kYWxIZWlnaHQpIHtcbiAgICAgIGlzTW9kYWxWZXJ0aWNhbENlbnRlciA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA+IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KSB7XG4gICAgICBkb2N1bWVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW9kYWxIZWlnaHQsXG4gICAgICBpc01vZGFsVmVydGljYWxDZW50ZXIsXG4gICAgICBkb2N1bWVudEhlaWdodFxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgLy8gbW9kYWwgc2hvd1xuICAgIGlmICghcHJldlByb3BzLm9wZW4gJiYgdGhpcy5wcm9wcy5vcGVuID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnNldFZpZXcoKVxuICAgICAgdXRpbHMubG9ja1Njcm9sbCgpXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zZXRWaWV3KVxuICAgIH1cblxuICAgIC8vIG1vZGFsIGhpZGVcbiAgICBpZiAocHJldlByb3BzLm9wZW4gPT09IHRydWUgJiYgdGhpcy5wcm9wcy5vcGVuID09PSBmYWxzZSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2V0VmlldylcbiAgICAgIHV0aWxzLnVubG9ja1Njcm9sbCgpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50VW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5zZXRWaWV3KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb3BlbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgZGVmYXVsdENsYXNzID0gJ21vZGFsJ1xuICAgIGNvbnN0IG1vZGFsSWQgPSBgbW9kYWwtJHsobmV3IERhdGUoKSkudmFsdWVPZigpfWBcblxuICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZSA/IGAke2RlZmF1bHRDbGFzc30gJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gIDogZGVmYXVsdENsYXNzXG5cbiAgICBsZXQgd2lkdGggPSB0aGlzLnByb3BzLndpZHRoID8gdGhpcy5wcm9wcy53aWR0aCA6IDUwMFxuICAgIGxldCBoZWlnaHQgPSB0aGlzLnN0YXRlLm1vZGFsSGVpZ2h0XG4gICAgbGV0IHN0eWxlID0ge1xuICAgICAgYmFja2Ryb3A6IHt9LFxuICAgICAgdmVydGljYWxDZW50ZXI6IHt9LFxuICAgICAgc2Nyb2xsOiB7fSxcbiAgICAgIG1vZGFsOiB7fVxuICAgIH1cblxuICAgIHN0eWxlLmJhY2tkcm9wID0ge1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiAwLFxuICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4yMyknLFxuICAgICAgb3ZlcmZsb3c6ICdzY3JvbGwnXG4gICAgfVxuXG4gICAgc3R5bGUudmVydGljYWxDZW50ZXIgPSB7XG4gICAgICB3aWR0aCxcbiAgICAgIG1hcmdpblRvcDogLWhlaWdodCAvIDIsXG4gICAgICBtYXJnaW5MZWZ0OiAtd2lkdGggLyAyLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgIHRvcDogJzUwJSdcbiAgICB9XG5cbiAgICBzdHlsZS5zY3JvbGwgPSB7XG4gICAgICB3aWR0aCxcbiAgICAgIG1hcmdpbjogJzUwcHggYXV0bydcbiAgICB9XG5cbiAgICBzdHlsZS5tb2RhbCA9IHt9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5pc01vZGFsVmVydGljYWxDZW50ZXIpIHtcbiAgICAgIHN0eWxlLm1vZGFsID0gT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUubW9kYWwsIHN0eWxlLnZlcnRpY2FsQ2VudGVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5tb2RhbCA9IE9iamVjdC5hc3NpZ24oe30sIHN0eWxlLm1vZGFsLCBzdHlsZS5zY3JvbGwpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGYWRlPlxuICAgICAgICB7XG4gICAgICAgICAgb3BlbiA9PT0gdHJ1ZSA/IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g5L2/55So6Zi75q2i5YaS5rOh5Lya6YCg5oiQ6Zeu6aKYXG4gICAgICAgICAgICAgICAgaWYgKChlLnRhcmdldCBhcyBhbnkpLnF1ZXJ5U2VsZWN0b3IoYCMke21vZGFsSWR9YCkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZU1vZGFsKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICBzdHlsZU5hbWU9XCJtb2RhbC1iYWNrZHJvcFwiXG4gICAgICAgICAgICAgIHN0eWxlPXtzdHlsZS5iYWNrZHJvcH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgaWQ9e21vZGFsSWR9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlLm1vZGFsfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIHN0eWxlTmFtZT1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiB7IHRoaXMubW9kYWwgPSByZWYgfSB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsXG4gICAgICAgIH1cbiAgICAgIDwvRmFkZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL01vZGFsL01vZGFsLnRzeFxuICoqLyIsImltcG9ydCBGYWRlIGZyb20gJy4vRmFkZSdcbmV4cG9ydCBkZWZhdWx0IEZhZGVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19hbmltYXRpb25zL0ZhZGUvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJ1xuY29uc3Qgc3R5bGVzOiBhbnkgPSByZXF1aXJlKCcuL0ZhZGUuY3NzJylcblxuY2xhc3MgRmFkZSBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBcbiAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgdHJhbnNpdGlvbk5hbWU9e3N0eWxlc31cbiAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17MzAwfVxuICAgICAgICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXszMDB9XG4gICAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYWRlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fYW5pbWF0aW9ucy9GYWRlL0ZhZGUudHN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNTkzKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsXG4gKiogbW9kdWxlIGlkID0gOTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImVudGVyXCI6XCJlbnRlcl8xYzRTV1wiLFwiZW50ZXJBY3RpdmVcIjpcImVudGVyQWN0aXZlX25DSlF3XCIsXCJsZWF2ZVwiOlwibGVhdmVfMW9UcF9cIixcImxlYXZlQWN0aXZlXCI6XCJsZWF2ZUFjdGl2ZV8zaFRnSFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2FuaW1hdGlvbnMvRmFkZS9GYWRlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDkxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJtb2RhbFwiOlwibW9kYWxfMjBBWjFcIixcImljb24tY2xvc2VcIjpcImljb24tY2xvc2VfNXV1TGFcIixcIm1vZGFsLWJhY2tkcm9wXCI6XCJtb2RhbC1iYWNrZHJvcF8zcnEwa1wiLFwibW9kYWwtYm9keVwiOlwibW9kYWwtYm9keV8yZ1QyM1wiLFwibW9kYWwtaGVhZGVyXCI6XCJtb2RhbC1oZWFkZXJfMmR6NjhcIixcIm1vZGFsLXRpdGxlXCI6XCJtb2RhbC10aXRsZV84cE9mRVwiLFwibW9kYWwtZm9vdGVyXCI6XCJtb2RhbC1mb290ZXJfZnladFNcIixcImJ0bi1yZWRcIjpcImJ0bi1yZWRfM3pvbWlcIixcIm1vZGFsLWNvbnRlbnRcIjpcIm1vZGFsLWNvbnRlbnRfM1pJSGJcIixcImNvbmZpcm0tbW9kYWxcIjpcImNvbmZpcm0tbW9kYWxfazVHRjBcIixcIm1vZGFsLXBsdXNcIjpcIm1vZGFsLXBsdXNfMV9UU1RcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL01vZGFsL01vZGFsLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA5MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vTW9kYWwuc2NzcycpXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRpdGxlPzogc3RyaW5nXG4gIG9wZW46IGJvb2xlYW5cbiAgb25SZXF1ZXN0Q2xvc2U6ICgpID0+IHZvaWRcbiAgd2lkdGg/OiBudW1iZXJcbiAgYWN0aW9ucz86IEpTWC5FbGVtZW50W11cbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgTW9kYWxQbHVzIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBvcGVuLCBvblJlcXVlc3RDbG9zZSwgd2lkdGgsIGFjdGlvbnMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWxcbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e29uUmVxdWVzdENsb3NlfVxuICAgICAgICB3aWR0aD17d2lkdGggfHwgNjAwfVxuICAgICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPVwibW9kYWwtcGx1c1wiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDEgc3R5bGVOYW1lPVwibW9kYWwtdGl0bGVcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge1xuICAgICAgICAgICAgYWN0aW9ucyAmJiAoXG4gICAgICAgICAgICAgIGFjdGlvbnMubWFwKChhY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChhY3Rpb24sIHtcbiAgICAgICAgICAgICAgICAgIGtleTogaW5kZXhcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01vZGFsPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFBsdXNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL01vZGFsL01vZGFsUGx1cy50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTW9kYWwsIHsgUHJvcHMgYXMgSU1vZGFsUHJvcHMgfSBmcm9tICcuLi9Nb2RhbCdcbmltcG9ydCBNb2RhbEZvb3RlciBmcm9tICcuL01vZGFsRm9vdGVyJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL01vZGFsLnNjc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSU1vZGFsUHJvcHMge1xuICBvbkNvbmZpcm06IGFueVxuICB0aXRsZTogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvbkNvbmZpcm0sIG9uUmVxdWVzdENsb3NlLCBvcGVuIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsXG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXtvblJlcXVlc3RDbG9zZX1cbiAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XG4gICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiY29uZmlybS1tb2RhbFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudGl0bGUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoMSBzdHlsZU5hbWU9XCJtb2RhbC10aXRsZVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxNb2RhbEZvb3RlclxuICAgICAgICAgICAgb25Db25maXJtPXtvbkNvbmZpcm19XG4gICAgICAgICAgICBvbkNhbmNlbD17b25SZXF1ZXN0Q2xvc2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01vZGFsPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2dcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL01vZGFsL0NvbmZpcm1Nb2RhbC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL19mb3JtL0J1dHRvbidcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vTW9kYWxGb290ZXIuc2NzcycpXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuPzogYW55XG4gIG9uQ29uZmlybTogKCkgPT4gdm9pZFxuICBvbkNhbmNlbD86ICgpID0+IHZvaWRcbn1cblxuZnVuY3Rpb24gTW9kYWxGb290ZXIocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgb25Db25maXJtLCBvbkNhbmNlbCB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ21vZGFsLWZvb3RlciddfT5cbiAgICAgIDxCdXR0b24gY29sb3I9XCJibHVlXCIgb25DbGljaz17b25Db25maXJtfT7noa7orqQ8L0J1dHRvbj5cbiAgICAgIHtcbiAgICAgICAgb25DYW5jZWwgJiYgKFxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJ3aGl0ZVwiIG9uQ2xpY2s9e29uQ2FuY2VsfT7lj5bmtog8L0J1dHRvbj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsRm9vdGVyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Nb2RhbC9Nb2RhbEZvb3Rlci50c3hcbiAqKi8iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9CdXR0b24vaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vX2J1dHRvbi5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBzdHlsZU5hbWU/OiBhbnlcbiAgc2l6ZT86ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSdcbiAgaXNGbHVpZD86IGJvb2xlYW5cbiAgY29sb3I/OiAncmVkJyB8ICdibHVlJyB8ICdncmVlbicgfCAnb3JhbmdlJyB8ICd3aGl0ZSdcbiAgdG8/OiBzdHJpbmdcbiAgb25DbGljaz86IGFueVxuICB3aWR0aD86IG51bWJlciB8IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgaXNNb3VzZU92ZXI/OiBib29sZWFuXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzTW91c2VPdmVyOiBmYWxzZSxcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgb25DbGljaywgY2xhc3NOYW1lLCBjb2xvciwgc2l6ZSwgaXNGbHVpZCwgd2lkdGggfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgc3R5bGUgPSB7fVxuXG4gICAgY29uc3Qgc3R5bGVOYW1lID0gY2xhc3NuYW1lcyh7XG4gICAgICAnYnRuJzogdHJ1ZSxcbiAgICAgICdidG4tLWhvdmVyJzogdGhpcy5zdGF0ZS5pc01vdXNlT3ZlcixcbiAgICAgICdidG4tLWZsdWlkJzogaXNGbHVpZCxcbiAgICAgIFtgYnRuLS0ke2NvbG9yfWBdOiBCb29sZWFuKGNvbG9yKSxcbiAgICAgIFtgYnRuLS0ke3NpemV9YF06IEJvb2xlYW4oc2l6ZSksXG4gICAgfSlcbiAgICBpZiAodGhpcy5wcm9wcy50bykge1xuICAgICAgb25DbGljayA9IGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCh0aGlzLnByb3BzLnRvKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvbkNsaWNrID0gZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc3R5bGUgPSB7XG4gICAgICAgIHdpZHRoXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHJvcHMgPSBfKHRoaXMucHJvcHMpXG4gICAgICAub21pdChbJ3RvJywgJ2NvbG9yJywgJ3NpemUnLCAnaXNGbHVpZCcsICd3aWR0aCddKVxuICAgICAgLmFzc2lnbih7fSwge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSB8fCAnJyxcbiAgICAgICAgb25DbGljayxcbiAgICAgICAgc3R5bGVcbiAgICAgIH0pXG4gICAgICAudmFsdWUoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBzdHlsZU5hbWU9e3N0eWxlTmFtZX1cbiAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzTW91c2VPdmVyOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfX1cbiAgICAgICAgb25Nb3VzZU91dD17KCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNNb3VzZU92ZXI6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2J1dHRvbj5cbiAgICApXG4gIH1cbn1cblxuKEJ1dHRvbiBhcyBhbnkpLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sb3I6ICdibHVlJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL19mb3JtL0J1dHRvbi9CdXR0b24udHN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiYnRuXCI6XCJidG5fMmFXX19cIixcImZvY3VzXCI6XCJmb2N1c18yWTVvdlwiLFwiYWN0aXZlXCI6XCJhY3RpdmVfakZkTlpcIixcImRpc2FibGVkXCI6XCJkaXNhYmxlZF8yTkZKWFwiLFwiYnRuLS1ob3ZlclwiOlwiYnRuLS1ob3Zlcl8zNDRtaVwiLFwiYnRuLS1ibHVlXCI6XCJidG4tLWJsdWVfMW5FSU1cIixcImJ0bi0tb3JhbmdlXCI6XCJidG4tLW9yYW5nZV92NHg1X1wiLFwiYnRuLS1yZWRcIjpcImJ0bi0tcmVkXzJnc2ZTXCIsXCJidG4tLXdoaXRlXCI6XCJidG4tLXdoaXRlXzNyV0YzXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9fZm9ybS9CdXR0b24vX2J1dHRvbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gOThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIm1vZGFsLWZvb3RlclwiOlwibW9kYWwtZm9vdGVyX0ZhSGlVXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Nb2RhbC9Nb2RhbEZvb3Rlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gOTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW50ZXJmYWNlIElQcm9wcyB7XG59XG5cbmludGVyZmFjZSBJQWxsUHJvcHMgZXh0ZW5kcyBJUHJvcHMge1xuICByb3V0aW5nOiBhbnlcbiAgZWxlbWVudHM6IGFueVxuICBzZW5kTm90aWZpY2F0aW9uOiBhbnlcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cbmNsYXNzIEFwcE1hc3RlciBleHRlbmRzIENvbXBvbmVudDxJQWxsUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDx7fSwge30sIElQcm9wcz4oXG4gIHN0YXRlID0+ICh7XG4gICAgZWxlbWVudHM6IHN0YXRlLmVsZW1lbnRzLFxuICAgIHJvdXRpbmc6IHN0YXRlLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9uc1xufSksIHt9XG4pKEFwcE1hc3RlciBhcyBhbnkpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb250YWluZXJzL0FwcE1hc3Rlci50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQnJhbmRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9CcmFuZGluZydcbmltcG9ydCBDb2xvcGhvbiBmcm9tICcuLi9jb21wb25lbnRzL0NvbG9waG9uJ1xuaW1wb3J0IHsgZmV0Y2hTaGVsZiB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgYXBpcyBmcm9tICcuLi9hcGlzJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBmZXRjaFNoZWxmOiBhbnlcbiAgc2Vzc2lvbjogYW55XG4gIGJvb2tTaGVsZjogYW55XG59XG5cbmNsYXNzIEFwcENvbW1vbiBleHRlbmRzIENvbXBvbmVudDxQcm9wcywge30+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgaGFuZGxlTG9nb3V0KCkge1xuICAgIGFwaXMubG9nb3V0KCkudGhlbigoKSA9PiB7XG4gICAgICBsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24uaHJlZlxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIucm9sZSAhPT0gJ3Zpc2l0b3InKSB7XG4gICAgICB0aGlzLnByb3BzLmZldGNoU2hlbGYoKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc3QgdXNlckxvZ2dlZEluID0gdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIucm9sZSA9PT0gJ3Zpc2l0b3InICYmIG5leHRQcm9wcy5zZXNzaW9uLnVzZXIucm9sZSAhPT0gJ3Zpc2l0b3InXG4gICAgaWYgKHVzZXJMb2dnZWRJbikge1xuICAgICAgdGhpcy5wcm9wcy5mZXRjaFNoZWxmKClcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGlzQWRtaW4gPSBmYWxzZVxuICAgIGxldCB1c2VybmFtZSA9IG51bGxcblxuICAgIGlmICh0aGlzLnByb3BzLnNlc3Npb24udXNlci5yb2xlICE9PSAndmlzaXRvcicpIHtcbiAgICAgIGlzQWRtaW4gPSB0aGlzLnByb3BzLnNlc3Npb24udXNlci5yb2xlID09PSAnYWRtaW4nXG4gICAgICB1c2VybmFtZSA9IHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLnVzZXJuYW1lXG4gICAgfVxuXG4gICAgY29uc3Qge2Jvb2tTaGVsZn0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgYm9va1NoZWxmTGlzdCA9IGJvb2tTaGVsZlxuICAgICAgLm1hcChib29rID0+ICh7XG4gICAgICAgIHRpdGxlOiBib29rLnRpdGxlLFxuICAgICAgICBpZDogYm9vay5pZFxuICAgICAgfSkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJyYW5kaW5nXG4gICAgICAgICAgcmVjZW50UmVhZGluZz17Ym9va1NoZWxmTGlzdH1cbiAgICAgICAgICBpc0FkbWluPXtpc0FkbWlufVxuICAgICAgICAgIHVzZXJuYW1lPXt1c2VybmFtZX1cbiAgICAgICAgICBvbkxvZ291dD17dGhpcy5oYW5kbGVMb2dvdXR9XG4gICAgICAgIC8+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8Q29sb3Bob24gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PHt9LCB7fSwgUHJvcHM+KFxuICBzdGF0ZSA9PiAoe1xuICAgIG5vdGlmaWNhdGlvbjogc3RhdGUuY29tcG9uZW50cy5ub3RpZmljYXRpb24sXG4gICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvbixcbiAgICBib29rU2hlbGY6IHN0YXRlLnBheWxvYWRzLmJvb2tTaGVsZiB8fCBbXVxuICB9KSxcbiAgeyBmZXRjaFNoZWxmIH0gYXMgYW55XG4pKEFwcENvbW1vbilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvQXBwQ29tbW9uLnRzeFxuICoqLyIsImltcG9ydCBCcmFuZGluZyBmcm9tICcuL0JyYW5kaW5nJ1xuZXhwb3J0IGRlZmF1bHQgQnJhbmRpbmdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQnJhbmRpbmcvaW5kZXgudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL19sYXlvdXQnXG5pbXBvcnQgeyBEcm9wZG93biwgRHJvcGRvd25JdGVtLCBEcm9wZG93bkl0ZW1TZXAgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9Ecm9wZG93bidcbmltcG9ydCBMb2dvIGZyb20gJy4uL0xvZ28nXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vQnJhbmRpbmcuc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB1c2VybmFtZTogc3RyaW5nXG4gIGlzQWRtaW4/OiBib29sZWFuXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICByZWNlbnRSZWFkaW5nPzoge1xuICAgIHRpdGxlOiBzdHJpbmdcbiAgICBpZDogc3RyaW5nXG4gIH1bXVxuICBvbkxvZ291dDogKCkgPT4gdm9pZFxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgaXNEcm9wZG93bk1lbnVWaXNpYmxlOiBib29sZWFuXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgQnJhbmRpbmcgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0Ryb3Bkb3duTWVudVZpc2libGU6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlTG9nb3V0Q2xpY2sgPSB0aGlzLmhhbmRsZUxvZ291dENsaWNrLmJpbmQodGhpcylcbiAgfVxuXG4gIHRvZ2dsZURyb3Bkb3duTWVudSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRHJvcGRvd25NZW51VmlzaWJsZTogIXRoaXMuc3RhdGUuaXNEcm9wZG93bk1lbnVWaXNpYmxlXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUxvZ291dENsaWNrKCkge1xuICAgIHRoaXMucHJvcHMub25Mb2dvdXQoKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBpc0FkbWluID0gdGhpcy5wcm9wcy5pc0FkbWluID8gdGhpcy5wcm9wcy5pc0FkbWluIDogZmFsc2VcblxuICAgIGNvbnN0IHsgdXNlcm5hbWUsIHJlY2VudFJlYWRpbmcgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT17YGJyYW5kaW5nICR7dGhpcy5wcm9wcy5jbGFzc05hbWUgPyB0aGlzLnByb3BzLmNsYXNzTmFtZSA6ICcnfWB9PlxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMb2dvIHRvPVwiL1wiIC8+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cIm5hdlwiPlxuICAgICAgICAgICAgICA8dWwgc3R5bGVOYW1lPVwibmF2LWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgPGxpIHN0eWxlTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBzdHlsZU5hbWU9XCJuYXYtbGlua1wiIHRvPVwiL2Jyb3dzZVwiPua1j+iniDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHVzZXJuYW1lXG4gICAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cIm5hdi0tdXNlclwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVjZW50UmVhZGluZy5sZW5ndGggIT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIHN0eWxlTmFtZT1cImRyb3Bkb3duLXJlY2VudC1yZWFkaW5nXCIgdGl0bGU9XCLmnIDov5HpmIXor7tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VudFJlYWRpbmcuc2xpY2UoMCwgNSkubWFwKChib29rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC92aWV3ZXIvYm9vay8ke2Jvb2suaWR9YH0+e2Jvb2sudGl0bGV9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1TZXAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT48TGluayB0bz17YC91c2VyL3NoZWxmYH0+5p+l55yL5YWo6YOoPC9MaW5rPjwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eyhcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt1c2VybmFtZX17IGlzQWRtaW4gJiYgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2VcIj5BZG1pbjwvc3Bhbj4gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICApIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNBZG1pbiA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+PExpbmsgdG89XCIvY29uc29sZVwiPuaOp+WItuWPsDwvTGluaz48L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT48TGluayB0bz17YC91c2VyL3NoZWxmYH0+5Lmm5p62PC9MaW5rPjwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+PExpbmsgdG89e2AvdXNlci9wcm9maWxlYH0+5Liq5Lq65Li76aG1PC9MaW5rPjwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+PExpbmsgdG89e2AvdXNlci9wcmVmZXJlbmNlYH0+6K6+572uPC9MaW5rPjwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1TZXAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPjxhIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTG9nb3V0Q2xpY2t9IGhyZWY9XCIjXCI+6YCA5Ye6PC9hPjwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJuYXYtLXVzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlTmFtZT1cIm5hdi1saW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZU5hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgc3R5bGVOYW1lPVwibmF2LWxpbmtcIiB0bz1cIi9zaWduaW5cIj7nmbvlvZU8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGVOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHN0eWxlTmFtZT1cIm5hdi1saW5rXCIgdG89XCIvc2lnbnVwXCI+5rOo5YaMPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJyYW5kaW5nXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0JyYW5kaW5nL0JyYW5kaW5nLnRzeFxuICoqLyIsImltcG9ydCBDb250YWluZXIgZnJvbSAnLi9Db250YWluZXInXG5leHBvcnQgeyBDb250YWluZXIgfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2xheW91dC9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY2xhc3NOYW1lID0gKHRoaXMucHJvcHMuaXNGbHVpZD8nY29udGFpbmVyLWZsdWlkJzonY29udGFpbmVyJykgKyAodGhpcy5wcm9wcy5jbGFzc05hbWU/YCAke3RoaXMucHJvcHMuY2xhc3NOYW1lfWA6JycpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvX2xheW91dC9Db250YWluZXIudHN4XG4gKiovIiwiaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vRHJvcGRvd24nXG5pbXBvcnQgRHJvcGRvd25JdGVtIGZyb20gJy4vRHJvcGRvd25JdGVtJ1xuaW1wb3J0IERyb3Bkb3duSXRlbVNlcCBmcm9tICcuL0Ryb3Bkb3duSXRlbVNlcCdcblxuZXhwb3J0IHsgRHJvcGRvd25JdGVtLCBEcm9wZG93biwgRHJvcGRvd25JdGVtU2VwIH1cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Ecm9wZG93bi9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IGlzRGVzY2VuZGFudCBmcm9tICcuLi8uLi91dGlscy9kb20vaXNEZXNjZW5kYW50J1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Ecm9wZG93bi5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmcgfCBKU1guRWxlbWVudFxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgc3R5bGVOYW1lPzogc3RyaW5nXG4gIHN0eWxlPzogJ2JsdWUnIHwgJ2RhcmsnXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBzaG93TWVudT86IGJvb2xlYW5cbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGRyb3Bkb3duOiBhbnlcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93TWVudTogZmFsc2VcbiAgICB9XG4gICAgdGhpcy50b2dnbGVEcm9wZG93biA9IHRoaXMudG9nZ2xlRHJvcGRvd24uYmluZCh0aGlzKVxuICAgIHRoaXMuaGlkZUV4cGVuZGVkID0gdGhpcy5oaWRlRXhwZW5kZWQuYmluZCh0aGlzKVxuICB9XG5cbiAgdG9nZ2xlRHJvcGRvd24oZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd01lbnU6ICF0aGlzLnN0YXRlLnNob3dNZW51XG4gICAgfSlcbiAgfVxuXG4gIGhpZGVFeHBlbmRlZChlKSB7XG4gICAgLy8g5qOA5p+l54K55Ye755qEIGRvbSDmmK/lkKbmmK8gZHJvcGRvd24g55qE5a2Q5YWD57SgXG4gICAgLy8g5aaC5p6c5piv6YKj5LmI5bCx5LiN5YGa5aSE55CG77yM6ICMIHRvZ2dsZURyb3Bkb3duIOS8muWTjeW6lFxuICAgIC8vIOino+WGs+S6humhtemdouS4iuWQjOaXtueUqOS4pOS4qiBkcm9wZG93biDml7bvvIzlhbbkuK3kuIDkuKrlsZXlvIDvvIzngrnlh7vlj6bkuIDkuKrliY3ogIXkuI3lkIjkuIrnmoTpl67pophcbiAgICBpZiAoIWlzRGVzY2VuZGFudCh0aGlzLmRyb3Bkb3duLCBlLnRhcmdldCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93TWVudTogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlRXhwZW5kZWQpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVFeHBlbmRlZClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgc3R5bGUgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17cmVmID0+IHsgdGhpcy5kcm9wZG93biA9IHJlZiB9IH0gb25DbGljaz17dGhpcy50b2dnbGVEcm9wZG93bn0gc3R5bGVOYW1lPVwiZHJvcGRvd25cIiBjbGFzc05hbWU9e2NsYXNzTmFtZSB8fCAnJ30+XG4gICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfSA8c3BhbiBzdHlsZU5hbWU9XCJkcm9wZG93bi1jYXJldFwiIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd01lbnUgJiYgKFxuICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9eyBzdHlsZSA9PT0gJ2RhcmsnID8gJ2Ryb3Bkb3duLW1lbnUtLWRhcmsnIDogJ2Ryb3Bkb3duLW1lbnUnfT5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL0Ryb3Bkb3duL0Ryb3Bkb3duLnRzeFxuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGVzY2VuZGFudChwYXJlbnQ6IEhUTUxFbGVtZW50LCBjaGlsZDogSFRNTEVsZW1lbnQpIHtcbiAgbGV0IG5vZGUgPSBjaGlsZC5wYXJlbnROb2RlXG4gIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICBpZiAobm9kZSA9PT0gcGFyZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy91dGlscy9kb20vaXNEZXNjZW5kYW50LnRzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiZHJvcGRvd24taXRlbVwiOlwiZHJvcGRvd24taXRlbV8yQzFkeiBsaWdodC1saW5rXzJRRGVBXCIsXCJsaWdodC1saW5rXCI6XCJsaWdodC1saW5rXzJRRGVBXCIsXCJkcm9wZG93blwiOlwiZHJvcGRvd25fU1pmeXBcIixcImRyb3Bkb3duLXRvZ2dsZVwiOlwiZHJvcGRvd24tdG9nZ2xlXzM0UWZkXCIsXCJkcm9wZG93bi1tZW51XCI6XCJkcm9wZG93bi1tZW51XzFIZ2JTXCIsXCJkcm9wZG93bi1jYXJldFwiOlwiZHJvcGRvd24tY2FyZXRfRmNCV0lcIixcInNlcFwiOlwic2VwXzEwWTBvXCIsXCJkcm9wZG93bi1tZW51LS1kYXJrXCI6XCJkcm9wZG93bi1tZW51LS1kYXJrXzZlVlBYIGRyb3Bkb3duLW1lbnVfMUhnYlNcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0Ryb3Bkb3duL0Ryb3Bkb3duLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxMDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vRHJvcGRvd24uc2NzcycpXG5cbnR5cGUgVFByb3BzID0ge1xuICBjaGlsZHJlbj86IGFueVxufVxuXG5mdW5jdGlvbiBEcm9wZG93bkl0ZW0ocHJvcHM6IFRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxsaT5cbiAgICAgIHtcbiAgICAgICAgdHlwZW9mIHByb3BzLmNoaWxkcmVuID09PSAnc3RyaW5nJ1xuICAgICAgICAgID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snZHJvcGRvd24taXRlbSddfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICAgIDogUmVhY3QuY2xvbmVFbGVtZW50KHByb3BzLmNoaWxkcmVuLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHN0eWxlc1snZHJvcGRvd24taXRlbSddXG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L2xpPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duSXRlbVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRHJvcGRvd24vRHJvcGRvd25JdGVtLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vRHJvcGRvd24uc2NzcycpXG5cbnR5cGUgVFByb3BzID0ge1xufVxuXG5mdW5jdGlvbiBEcm9wZG93bkl0ZW1TZXAocHJvcHM6IFRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlc1snc2VwJ119PjwvbGk+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25JdGVtU2VwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Ecm9wZG93bi9Ecm9wZG93bkl0ZW1TZXAudHN4XG4gKiovIiwiaW1wb3J0IExvZ28gZnJvbSAnLi9Mb2dvJ1xuZXhwb3J0IGRlZmF1bHQgTG9nb1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Mb2dvL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vTG9nby5jc3MnKVxuXG50eXBlIFRQcm9wcyA9IHtcbiAgY2hpbGRyZW4/OiBhbnlcbiAgdG8/OiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gTG9nbyhwcm9wczogVFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzWydsb2dvLXdyYXAnXX0+XG4gICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlc1snbG9nbyddfSB0bz17cHJvcHMudG99PnJlYWRyPC9MaW5rPlxuICAgIDwvaDE+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9nb1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Mb2dvL0xvZ28udHN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibG9nby13cmFwXCI6XCJsb2dvLXdyYXBfQ1A1UDlcIixcImxvZ29cIjpcImxvZ29fM3FjYlZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvTG9nby9Mb2dvLmNzc1xuICoqIG1vZHVsZSBpZCA9IDExNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibmF2LWxpbmtcIjpcIm5hdi1saW5rXzNYMFQ4XCIsXCJicmFuZGluZ1wiOlwiYnJhbmRpbmdfOEVWQXRcIixcImRyb3Bkb3duLW1lbnVcIjpcImRyb3Bkb3duLW1lbnVfNVNjNTBcIixcInVzZXJuYW1lXCI6XCJ1c2VybmFtZV8zTW02elwiLFwibmF2LWxpbmtzXCI6XCJuYXYtbGlua3NfMndUWVlcIixcIm5hdlwiOlwibmF2XzFvajF6XCIsXCJuYXYtLXVzZXJcIjpcIm5hdi0tdXNlcl8xTDdMYlwiLFwiZHJvcGRvd24tcmVjZW50LXJlYWRpbmdcIjpcImRyb3Bkb3duLXJlY2VudC1yZWFkaW5nXzJveWpIXCIsXCJuYXYtaXRlbVwiOlwibmF2LWl0ZW1fZjgzYmhcIixcInJlY2VudC1yZWFkaW5nXCI6XCJyZWNlbnQtcmVhZGluZ18xa0pLaFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9CcmFuZGluZy9CcmFuZGluZy5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgQ29sb3Bob24gZnJvbSAnLi9Db2xvcGhvbidcbmV4cG9ydCBkZWZhdWx0IENvbG9waG9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbG9waG9uL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vZWxlbWVudHMvX2xheW91dC9Db250YWluZXInXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vQ29sb3Bob24uY3NzJylcblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBDb2xvcGhvbiBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3Bob25cIiBzdHlsZU5hbWU9XCJjb2xvcGhvblwiPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxwPsKpIDIwMTXvvI0yMDE2IHJlYWRyd2ViLmNvbSwgYWxsIHJpZ2h0cyByZXNlcnZlZDwvcD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sb3Bob25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29sb3Bob24vQ29sb3Bob24udHN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiY29sb3Bob25cIjpcImNvbG9waG9uX0ZWZFNSXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbG9waG9uL0NvbG9waG9uLmNzc1xuICoqIG1vZHVsZSBpZCA9IDExOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0ICogYXMgYXBpcyBmcm9tICcuL2FwaXMnXG5pbXBvcnQgKiBhcyBleHRlcm5hbEFwaXMgZnJvbSAnLi9leHRlcm5hbEFwaXMnXG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdC5hc3NpZ24oe30sIGFwaXMsIGV4dGVybmFsQXBpcylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2FwaXMvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgY2FsbEFwaSBmcm9tICcuLi91dGlscy9jYWxsQXBpJ1xuaW1wb3J0IHsgQXBpUm9vdHMgfSBmcm9tICcuLi9jb25maWcnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDb2xsZWN0aW9uKGRhdGE6IHtcbiAgbmFtZTogc3RyaW5nXG4gIGl0ZW1zOiBzdHJpbmdcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xufSkge1xuICByZXR1cm4gY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1jb2xsZWN0aW9uc2AsIHsgbWV0aG9kOiAnUE9TVCcsIGRhdGE6IGRhdGEgfSlcbn1cblxuLyoqXG4gKiBkYXRhOiBuYW1lLCBhdXRob3IsIGRlc2NyaXB0aW9uLCBjb3ZlciwgY29udGVudFxuICogdG9kb1xuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQm9vayhkYXRhKSB7XG4gIHJldHVybiBjYWxsQXBpKGAke0FwaVJvb3RzLkxPQ0FMfWJvb2tzYCwgeyBtZXRob2Q6ICdQT1NUJywgZGF0YTogZGF0YSB9KVxufVxuXG4vKipcbiAqIGRhdGE6IG5hbWUsIHNsdWcsIGRlc2NyaXB0aW9uXG4gKiB0b2RvXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRBdXRob3IoZGF0YSkge1xuICByZXR1cm4gY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1hdXRob3JzYCwgeyBtZXRob2Q6ICdQT1NUJywgZGF0YTogZGF0YSB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQXV0aG9ycyhxdWVyeSkge1xuICByZXR1cm4gY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1hdXRob3JzP3E9JHtxdWVyeX1gKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoQm9va3MocXVlcnkpIHtcbiAgcmV0dXJuIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9Ym9va3M/cT0ke3F1ZXJ5fWApXG59XG5cbi8qKlxuICogZGF0YTogcGFnZU5vLCBwYWdlU3VtLCBwZXJjZW50YWdlXG4gKiB0b2RvXG4gKi9cbmV4cG9ydCB0eXBlIHNldFByb2dyZXNzID0ge1xuICBwZXJjZW50YWdlOiBudW1iZXJcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9ncmVzcyhib29rSWQsIGRhdGE6IHNldFByb2dyZXNzKSB7XG4gIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9dXNlci9ib29rcy8ke2Jvb2tJZH0vcHJvZ3Jlc3NgLCB7IG1ldGhvZDogJ1BVVCcsIGRhdGEgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUJvb2soaWQpIHtcbiAgcmV0dXJuIGNhbGxBcGkoYCR7QXBpUm9vdHMuTE9DQUx9Ym9va3MvJHtpZH1gLCB7XG4gICAgbWV0aG9kOiAnREVMRVRFJ1xuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nb3V0KCkge1xuICByZXR1cm4gY2FsbEFwaShgJHtBcGlSb290cy5MT0NBTH1hdXRoL3Jldm9rZWAsIHtcbiAgICBtZXRob2Q6ICdQVVQnXG4gIH0pXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9hcGlzL2FwaXMudHNcbiAqKi8iLCJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5pbXBvcnQgb2JqZWN0VG9VcmxlbmNvZGVkIGZyb20gJy4uL3V0aWxzL3BhcnNlRm9ybURhdGEnXG5pbXBvcnQganNvbnAgZnJvbSAnLi9qc29ucCdcblxuZXhwb3J0IHR5cGUgQ2FsbEFwaU9wdGlvbnMgPSB7XG4gIG1ldGhvZD86ICdHRVQnIHwgJ1BPU1QnIHwgJ0RFTEVURScgfCAnUFVUJ1xuICBjcmVkZW50aWFscz86ICdpbmNsdWRlJyB8ICdzYW1lLW9yaWdpbidcbiAgZGF0YVR5cGU/OiAndXJsZW5jb2RlZCcgfCAnanNvbidcbiAgZGF0YT86IHt9XG4gIHVzZUpzb25wPzogYm9vbGVhblxufVxuXG50eXBlIEZldGNoT3B0aW9ucyA9IHtcbiAgbWV0aG9kPzogc3RyaW5nXG4gIGNyZWRlbnRpYWxzPzogJ2luY2x1ZGUnIHwgJ3NhbWUtb3JpZ2luJ1xuICBoZWFkZXJzPzogYW55XG4gIGJvZHk/OiBzdHJpbmdcbiAgdXNlSnNvbnA/OiBib29sZWFuXG59XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zOiBDYWxsQXBpT3B0aW9ucyA9IHtcbiAgZGF0YVR5cGU6ICdqc29uJyxcbiAgbWV0aG9kOiAnR0VUJyxcbiAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbn1cblxuLy8gcmV0dXJuIGZldGNoIG9wdGlvbnNcbmNvbnN0IHBhcnNlT3B0aW9ucyA9IChvcmlnaW5hbk9wdGlvbnM6IENhbGxBcGlPcHRpb25zKSA9PiB7XG4gIGxldCB7IG1ldGhvZCwgZGF0YSwgY3JlZGVudGlhbHMsIGRhdGFUeXBlLCB1c2VKc29ucCB9ID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9yaWdpbmFuT3B0aW9ucylcbiAgbGV0IGZldGNoT3B0aW9uczogRmV0Y2hPcHRpb25zID0ge31cblxuICBpZiAodXNlSnNvbnApIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlSnNvbnA6IHRydWVcbiAgICB9XG4gIH1cblxuICBpZiAobWV0aG9kKSB7XG4gICAgZmV0Y2hPcHRpb25zLm1ldGhvZCA9IG1ldGhvZFxuICB9XG5cbiAgaWYgKGNyZWRlbnRpYWxzKSB7XG4gICAgZmV0Y2hPcHRpb25zLmNyZWRlbnRpYWxzID0gY3JlZGVudGlhbHNcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXF1ZXN0IGhlYWRlcnMgYW5kIGJvZHlcbiAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnIHx8IG1ldGhvZCA9PT0gJ1BVVCcpIHtcbiAgICBsZXQgY29udGVudFR5cGVcbiAgICBsZXQgYm9keVxuXG4gICAgaWYgKGRhdGFUeXBlID09PSAnanNvbicpIHtcbiAgICAgIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICBib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgYm9keSA9IG9iamVjdFRvVXJsZW5jb2RlZChkYXRhKVxuXG4gICAgICBpZiAoZGF0YVR5cGUgIT09ICd1cmxlbmNvZGVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1Vuc3VwcG9ydGVkIGRhdGFUeXBlIHVzZWQgXCJ1cmxlbmNvZGVkXCIgaW5zdGVhZCEnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZldGNoT3B0aW9ucy5oZWFkZXJzID0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6IGNvbnRlbnRUeXBlLFxuICAgICAgJ0FjY2Vzcy1Db250cm9sLVJlcXVlc3QtTWV0aG9kJzogbWV0aG9kXG4gICAgfVxuXG4gICAgZmV0Y2hPcHRpb25zLmJvZHkgPSBib2R5XG4gIH1cblxuICBpZiAobWV0aG9kID09PSAnREVMRVRFJykge1xuICAgIGZldGNoT3B0aW9ucy5oZWFkZXJzID0ge1xuICAgICAgJ0FjY2Vzcy1Db250cm9sLVJlcXVlc3QtTWV0aG9kJzogJ0RFTEVURSdcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmV0Y2hPcHRpb25zXG59XG5cbi8vIHR5cGUgUmVzdWx0ID0ge1xuLy8gICBqc29uOiBhbnlcbi8vICAgcmVzcG9uc2U6IGFueVxuLy8gfVxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxBcGkoZnVsbFVybDogc3RyaW5nLCBvcHRpb25zOiBDYWxsQXBpT3B0aW9ucyA9IHt9KTogYW55IHtcbiAgaWYgKG9wdGlvbnMudXNlSnNvbnApIHtcbiAgICByZXR1cm4ganNvbnAoZnVsbFVybClcbiAgfVxuXG4gIHJldHVybiBmZXRjaChmdWxsVXJsLCBwYXJzZU9wdGlvbnMob3B0aW9ucykpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjA0KSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbihqc29uID0+IHtcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoanNvbikgYXMgYW55XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHsganNvbiwgX3Jlc3BvbnNlOiByZXNwb25zZSB9XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGpzb246IHt9LCBfcmVzcG9uc2U6IHJlc3BvbnNlIH1cbiAgICB9KVxufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gY2FsbEFwaShmdWxsVXJsOiBzdHJpbmcsIG9wdGlvbnM6IENhbGxBcGlPcHRpb25zID0ge30pIHtcbi8vICAgcmV0dXJuIGZldGNoKGZ1bGxVcmwsIHBhcnNlT3B0aW9ucyhvcHRpb25zKSlcbi8vICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4vLyAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDQpIHtcbi8vICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKGpzb24gPT4ge1xuLy8gICAgICAgICAgIHJldHVybiB7IGpzb24sIHJlc3BvbnNlIH1cbi8vICAgICAgICAgfSlcbi8vICAgICAgIH1cbi8vICAgICAgIHJldHVybiB7IHJlc3BvbnNlLCBqc29uOiB7fSB9XG4vLyAgICAgfSlcbi8vICAgICAudGhlbigoeyBqc29uLCByZXNwb25zZSB9KSA9PiB7XG4vLyAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbi8vICAgICAgICAgcmV0dXJuIGhhbmRsZVJlc3BvbnNlKHsganNvbiwgcmVzcG9uc2UgfSwgb3B0aW9ucy5zY2hlbWEpXG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoanNvbilcbi8vICAgICAgIH1cbi8vICAgICB9KVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBjYWxsQXBpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy91dGlscy9jYWxsQXBpLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxNCkpKDc1Myk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tYnJvd3NlcmlmeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3V0aWxzX2RsbFxuICoqIG1vZHVsZSBpZCA9IDEyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ganNvbnAoZnVsbFVybCkge1xuICBpZiAoZnVsbFVybC5pbmRleE9mKCdkb3ViYW4nKSAhPT0gLTEpIHtcbiAgICBsZXQgaWQgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKVxuICAgIGxldCBqc29ucElkID0gJ2pzb25wLScgKyBpZFxuICAgIGxldCBqc29ucENhbGxiYWNrID0gJ2pzb25wQ2FsbGJhY2snICsgaWRcbiAgICBsZXQganNvbnBDYWxsYmFja0RhdGEgPSBgX19KU09OUF9EQVRBXyR7aWR9X19gXG5cbiAgICB3aW5kb3dbanNvbnBDYWxsYmFja10gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgd2luZG93W2pzb25wQ2FsbGJhY2tEYXRhXSA9IGRhdGFcbiAgICB9XG5cbiAgICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAke2Z1bGxVcmx9JmNhbGxiYWNrPSR7anNvbnBDYWxsYmFja31gKVxuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2lkJywganNvbnBJZClcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoanNvbnBJZCkpXG5cbiAgICAgICAgcmVzb2x2ZSh7IGpzb246IHdpbmRvd1tqc29ucENhbGxiYWNrRGF0YV19KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3V0aWxzL2pzb25wLnRzXG4gKiovIiwiaW1wb3J0IGpzb25wIGZyb20gJy4uL3V0aWxzL2pzb25wJ1xuaW1wb3J0IHsgQXBpUm9vdHMgfSBmcm9tICcuLi9jb25maWcnXG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaERvdWJhbkJvb2tzKHF1ZXJ5KSB7XG4gIHJldHVybiBqc29ucChgJHtBcGlSb290cy5ET1VCQU5fQk9PS1N9L3NlYXJjaD9jb3VudD01JnE9JHtxdWVyeX1gKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvYXBpcy9leHRlcm5hbEFwaXMudHNcbiAqKi8iLCJpbXBvcnQgQ29uc29sZU1hc3RlciBmcm9tICcuL0NvbnNvbGVNYXN0ZXInXG5leHBvcnQgZGVmYXVsdCBDb25zb2xlTWFzdGVyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb250YWluZXJzL0NvbnNvbGVNYXN0ZXIvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2VsZW1lbnRzL19sYXlvdXQvQ29udGFpbmVyJ1xuaW1wb3J0IENvbnNvbGVCcmFuZGluZyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnNvbGVCcmFuZGluZydcbmltcG9ydCB7IHVzZXJBdXRoLCBzZW5kTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCBDb25zb2xlU2lkZWJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnNvbGVTaWRlYmFyJ1xuaW1wb3J0IG1lbnVzIGZyb20gJy4uLy4uL2NvbnRlbnQvbWVudXMnXG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0NvbnNvbGVNYXN0ZXIuY3NzJylcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbm90aWZpY2F0aW9ucz86IGFueVxuICB1c2VyQXV0aD86IGFueVxuICBzZXNzaW9uPzogYW55XG4gIHJvdXRpbmc/OiBhbnlcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBDb25zb2xlIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnVzZXJBdXRoKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgaXNBZG1pbiA9IHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLnJvbGUgPT09ICdhZG1pbicgPyB0cnVlIDogZmFsc2VcbiAgICBsZXQgdXNlcm5hbWUgPSB0aGlzLnByb3BzLnNlc3Npb24udXNlci51c2VybmFtZSA/IHRoaXMucHJvcHMuc2Vzc2lvbi51c2VyLnVzZXJuYW1lIDogbnVsbFxuICAgIGxldCBwYXRobmFtZSA9IHRoaXMucHJvcHMucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zID8gdGhpcy5wcm9wcy5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMucGF0aG5hbWUgOiAnY29uc29sZSdcblxuICAgIHJldHVybiAoXG4gICAgICA8RG9jQ29udGFpbmVyIGJvZHlDbGFzcz1cImNvbnNvbGVcIj5cbiAgICAgICAgPENvbnNvbGVCcmFuZGluZyBpc0FkbWluPXtpc0FkbWlufSB1c2VybmFtZT17dXNlcm5hbWV9IC8+XG4gICAgICAgIDxDb250YWluZXIgaXNGbHVpZD17dHJ1ZX0+XG4gICAgICAgICAgPENvbnNvbGVTaWRlYmFyXG4gICAgICAgICAgICBtZW51TWFwcGluZz17bWVudXN9XG4gICAgICAgICAgICBjdXJyZW50UGF0aD17cGF0aG5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvRG9jQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiAoe1xuICAgIG5vdGlmaWNhdGlvbnM6IHN0YXRlLmNvbXBvbmVudHMubm90aWZpY2F0aW9ucyxcbiAgICBzZXNzaW9uOiBzdGF0ZS5zZXNzaW9uLFxuICAgIHJvdXRpbmc6IHN0YXRlLnJvdXRpbmdcbiAgfSksXG4gIHsgc2VuZE5vdGlmaWNhdGlvbiwgdXNlckF1dGggfVxuKShDb25zb2xlIGFzIGFueSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvQ29uc29sZU1hc3Rlci9Db25zb2xlTWFzdGVyLnRzeFxuICoqLyIsImltcG9ydCBDb25zb2xlQnJhbmRpbmcgZnJvbSAnLi9Db25zb2xlQnJhbmRpbmcnXG5leHBvcnQgZGVmYXVsdCBDb25zb2xlQnJhbmRpbmdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29uc29sZUJyYW5kaW5nL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vZWxlbWVudHMvX2xheW91dC9Db250YWluZXInXG5pbXBvcnQgeyBEcm9wZG93biwgRHJvcGRvd25JdGVtLCBEcm9wZG93bkl0ZW1TZXAgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9Ecm9wZG93bidcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vTG9nbydcbi8vIGNvbnN0IGJyYW5kaW5nU3R5bGVzID0gcmVxdWlyZSgnLi4vQnJhbmRpbmcvQnJhbmRpbmcuY3NzJylcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vQ29uc29sZUJyYW5kaW5nLnNjc3MnKVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIENvbnNvbGVCcmFuZGluZyBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRHJvcGRvd25NZW51VmlzaWJsZTogZmFsc2VcbiAgICB9XG4gIH1cblxuICB0b2dnbGVEcm9wZG93bk1lbnUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0Ryb3Bkb3duTWVudVZpc2libGU6ICF0aGlzLnN0YXRlLmlzRHJvcGRvd25NZW51VmlzaWJsZVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHVzZXJuYW1lID0gdGhpcy5wcm9wcy51c2VybmFtZVxuICAgIGxldCBpc0FkbWluID0gdGhpcy5wcm9wcy5pc0FkbWluID8gdGhpcy5wcm9wcy5pc0FkbWluIDogJ2ZhbHNlJ1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwiYnJhbmRpbmdcIj5cbiAgICAgICAgPENvbnRhaW5lciBpc0ZsdWlkPXt0cnVlfSBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TG9nbyB0bz1cIi9jb25zb2xlXCIgLz5cbiAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3ViLW5hbWVcIj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwic3ViXCI+Q29uc29sZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJuYXYgcmlnaHRcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lID8gKFxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZGFya1wiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXsoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3VzZXJuYW1lfXsgaXNBZG1pbiAmJiA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS0tZGFya1wiPkFkbWluPC9zcGFuPiB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPjxMaW5rIHRvPVwiL1wiPuWbnuWIsCBSZWFkcjwvTGluaz48L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT48TGluayB0bz17YC91c2VyL3Byb2ZpbGVgfT7kuKrkurrkuLvpobU8L0xpbms+PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+PExpbmsgdG89e2AvdXNlci9wcmVmZXJlbmNlYH0+6K6+572uPC9MaW5rPjwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtU2VwIC8+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+PGEgaHJlZj1cIi9sb2dvdXRcIj7pgIDlh7o8L2E+PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtbGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9zaWduaW5cIj7nmbvlvZU8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9zaWdudXBcIj7ms6jlhow8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnNvbGVCcmFuZGluZ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db25zb2xlQnJhbmRpbmcvQ29uc29sZUJyYW5kaW5nLnRzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImJyYW5kaW5nXCI6XCJicmFuZGluZ18zZ29SR1wiLFwic2VwXCI6XCJzZXBfQVQ2R2xcIixcInN1YlwiOlwic3ViX0l5aG1zXCIsXCJyaWdodFwiOlwicmlnaHRfMVpBUVBcIixcInN1Yi1uYW1lXCI6XCJzdWItbmFtZV8yVDhhaFwiLFwibmF2XCI6XCJuYXZfMTB5bjQgbmF2XzFvajF6XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnNvbGVCcmFuZGluZy9Db25zb2xlQnJhbmRpbmcuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDEyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IENvbnNvbGVTaWRlYmFyIGZyb20gJy4vQ29uc29sZVNpZGViYXInXG5leHBvcnQgZGVmYXVsdCBDb25zb2xlU2lkZWJhclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db25zb2xlU2lkZWJhci9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9JY29uJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0NvbnNvbGVTaWRlYmFyLmNzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBjdXJyZW50UGF0aD86IGFueVxuICBtZW51TWFwcGluZz86IGFueVxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBDb25zb2xlU2lkZWJhciBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1lbnVNYXBwaW5nLCBjdXJyZW50UGF0aCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGN1cnJlbnRNZW51ID0ge1xuICAgICAgcm9vdEluZGV4OiAwLFxuICAgICAgc3ViSW5kZXg6IDBcbiAgICB9XG5cbiAgICBtZW51TWFwcGluZy5mb3JFYWNoKChtZW51LCByb290SW5kZXgpID0+IHtcbiAgICAgIGxldCBzdWJJbmRleFxuXG4gICAgICBsZXQgcmVzdWx0ID0gbWVudS5zdWJNZW51LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ucGF0aCA9PT0gY3VycmVudFBhdGgpIHtcbiAgICAgICAgICBzdWJJbmRleCA9IGluZGV4XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGN1cnJlbnRNZW51LnJvb3RJbmRleCA9IHJvb3RJbmRleFxuICAgICAgICBjdXJyZW50TWVudS5zdWJJbmRleCA9IHN1YkluZGV4XG4gICAgICB9XG4gICAgfSlcblxuICAgIGxldCByb290TWVudSA9IChcbiAgICAgIDx1bCBzdHlsZU5hbWU9XCJuYXYtc2lkZS1yb290XCI+XG4gICAgICAgIHtcbiAgICAgICAgICBtZW51TWFwcGluZy5tYXAoKG1lbnUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gc3R5bGVOYW1lPXtpbmRleCAhPT0gY3VycmVudE1lbnUucm9vdEluZGV4ID8gJ3Jvb3QtaXRlbScgOiAncm9vdC1pdGVtLS1jdXJyZW50J30+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e21lbnUucGF0aH0+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBzaXplPXsyNX0gc3R5bGVOYW1lPVwiaWNvblwiIG5hbWU9e21lbnUuY29tcG9uZW50fSAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgIClcblxuICAgIGxldCBzdWJNZW51ID0gKFxuICAgICAgPHVsIHN0eWxlTmFtZT1cIm5hdi1zaWRlLXN1YlwiPlxuICAgICAgICB7XG4gICAgICAgICAgbWVudU1hcHBpbmdbY3VycmVudE1lbnUucm9vdEluZGV4XS5zdWJNZW51Lm1hcCgobWVudSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBzdHlsZU5hbWU9e2luZGV4ICE9PSBjdXJyZW50TWVudS5zdWJJbmRleCA/ICdzdWItaXRlbScgOiAnc3ViLWl0ZW0tLWN1cnJlbnQnfT5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17bWVudS5wYXRofT57bWVudS5kaXNwbGF5TmFtZX08L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzaWRlYmFyLWxlZnRcIj5cbiAgICAgICAge3Jvb3RNZW51fVxuICAgICAgICB7c3ViTWVudX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25zb2xlU2lkZWJhclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db25zb2xlU2lkZWJhci9Db25zb2xlU2lkZWJhci50c3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJzaWRlYmFyLWxlZnRcIjpcInNpZGViYXItbGVmdF8yTmZ2YVwiLFwibmF2LXNpZGVcIjpcIm5hdi1zaWRlXzNMOGY2XCIsXCJuYXYtc2lkZS1yb290XCI6XCJuYXYtc2lkZS1yb290XzFfUEJnIG5hdi1zaWRlXzNMOGY2XCIsXCJuYXYtc2lkZS1yb290LS1jdXJyZW50XCI6XCJuYXYtc2lkZS1yb290LS1jdXJyZW50XzNCVjV0IG5hdi1zaWRlLXJvb3RfMV9QQmcgbmF2LXNpZGVfM0w4ZjZcIixcIm5hdi1zaWRlLXN1YlwiOlwibmF2LXNpZGUtc3ViXzVRX2Y1IG5hdi1zaWRlXzNMOGY2XCIsXCJuYXYtaXRlbVwiOlwibmF2LWl0ZW1fMnIxem5cIixcImljb25cIjpcImljb25fMjZQd0dcIixcInJvb3QtaXRlbVwiOlwicm9vdC1pdGVtX1ZQd3VNIG5hdi1pdGVtXzJyMXpuXCIsXCJyb290LWl0ZW0tLWN1cnJlbnRcIjpcInJvb3QtaXRlbS0tY3VycmVudF8zTE1uRCByb290LWl0ZW1fVlB3dU0gbmF2LWl0ZW1fMnIxem5cIixcInN1Yi1pdGVtXCI6XCJzdWItaXRlbV93YUEtTyBuYXYtaXRlbV8ycjF6blwiLFwic3ViLWl0ZW0tLWN1cnJlbnRcIjpcInN1Yi1pdGVtLS1jdXJyZW50XzNDem1NIHN1Yi1pdGVtX3dhQS1PIG5hdi1pdGVtXzJyMXpuXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnNvbGVTaWRlYmFyL0NvbnNvbGVTaWRlYmFyLmNzc1xuICoqIG1vZHVsZSBpZCA9IDEzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiY29uc3QgbWVudXMgPSBbXG4gIHtcbiAgICBjb21wb25lbnQ6ICdib29rcycsXG4gICAgZGlzcGxheU5hbWU6ICcnLFxuICAgIHBhdGg6ICcvY29uc29sZS9ib29rcycsXG4gICAgc3ViTWVudTogW1xuICAgICAge1xuICAgICAgICBjb21wb25lbnQ6ICdtYW5hZ2Vib29rcycsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnTWFuYWdlIEJvb2tzJyxcbiAgICAgICAgcGF0aDogJy9jb25zb2xlL2Jvb2tzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29tcG9uZW50OiAnYWRkYm9vaycsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnQWRkIEJvb2snLFxuICAgICAgICBwYXRoOiAnL2NvbnNvbGUvYm9va3MvbmV3J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29tcG9uZW50OiAnYWRkY29sbGVjdGlvbicsXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnQWRkIENvbGxlY3Rpb24nLFxuICAgICAgICBwYXRoOiAnL2NvbnNvbGUvY29sbGVjdGlvbnMvbmV3J1xuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvbXBvbmVudDogJ3VzZXJzJyxcbiAgICBkaXNwbGF5TmFtZTogJycsXG4gICAgcGF0aDogJy9jb25zb2xlL3VzZXJzJyxcbiAgICBzdWJNZW51OiBbXG4gICAgICB7XG4gICAgICAgIGNvbXBvbmVudDogJ21hbmFnZXVzZXJzJyxcbiAgICAgICAgZGlzcGxheU5hbWU6ICdNYW5hZ2UgVXNlcnMnLFxuICAgICAgICBwYXRoOiAnL2NvbnNvbGUvdXNlcnMnXG4gICAgICB9XG4gICAgXVxuICB9LFxuICAvLyB7XG4gIC8vICAgY29tcG9uZW50OiAnZGF0YWJhc2UnLFxuICAvLyAgIGRpc3BsYXlOYW1lOiAnJyxcbiAgLy8gICBwYXRoOiAnL2NvbnNvbGUvZGInLFxuICAvLyAgIHN1Yk1lbnU6IFtdXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBjb21wb25lbnQ6ICdzdGF0aXN0aWNzJyxcbiAgLy8gICBkaXNwbGF5TmFtZTogJycsXG4gIC8vICAgcGF0aDogJy9jb25zb2xlL3N0YXRpc3RpY3MnLFxuICAvLyAgIHN1Yk1lbnU6IFtdXG4gIC8vIH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgbWVudXNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbnRlbnQvbWVudXMudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgd2l0aFNpZGVFZmZlY3QgZnJvbSAncmVhY3Qtc2lkZS1lZmZlY3QnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmNvbnN0IGRlZmF1bHRUaXRsZSA9ICdSZWFkcidcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHN0eWxlTmFtZT86IHN0cmluZ1xuICBib2R5Q2xhc3M/OiBzdHJpbmdcbiAgdGl0bGU/OiBzdHJpbmdcbiAgdXNlQXNNYXN0ZXJUaXRsZT86IGJvb2xlYW5cbn1cblxuY2xhc3MgRG9jQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCB7fT4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICBjbGFzc05hbWVcbiAgICAgICAgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydnYi1kb2MtY29udGFpbmVyJyArIGNsYXNzTmFtZX0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwiZ2ItZG9jLWNvbnRhaW5lclwiPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiByZWR1Y2VQcm9wc1RvU3RhdGUocHJvcHNMaXN0KSB7XG4gIGNvbnN0IGlubmVybW9zdFByb3BzID0gcHJvcHNMaXN0W3Byb3BzTGlzdC5sZW5ndGggLSAxXVxuICBsZXQgZGF0YTogYW55ID0ge31cblxuICBpZiAoaW5uZXJtb3N0UHJvcHMpIHtcbiAgICBkYXRhID0gXy5waWNrKGlubmVybW9zdFByb3BzLCBbJ3RpdGxlJywgJ2JvZHlDbGFzcyddKVxuICAgIGlmIChkYXRhLnRpdGxlICYmICFpbm5lcm1vc3RQcm9wcy51c2VBc01hc3RlclRpdGxlKSB7XG4gICAgICBkYXRhLnRpdGxlID0gYCR7ZGF0YS50aXRsZX0gfCAke2RlZmF1bHRUaXRsZX1gXG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEudGl0bGUgPSBkYXRhLnRpdGxlIHx8IGRlZmF1bHRUaXRsZVxuICAgIH1cbiAgfVxuXG4gIGRhdGEuYm9keUNsYXNzID0gcHJvcHNMaXN0XG4gICAgLmZpbHRlcihwcm9wID0+IHByb3AuYm9keUNsYXNzKVxuICAgIC5tYXAocHJvcCA9PiBwcm9wLmJvZHlDbGFzcylcbiAgICAuam9pbignICcpXG5cbiAgcmV0dXJuIGRhdGFcbn1cblxuZnVuY3Rpb24gaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudChwcm9wTGlzdCkge1xuICBjb25zdCB7IHRpdGxlLCBib2R5Q2xhc3MgfSA9IHByb3BMaXN0XG5cbiAgaWYgKHR5cGVvZiBib2R5Q2xhc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBib2R5Q2xhc3NcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0aXRsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlXG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQudGl0bGUgPSBkZWZhdWx0VGl0bGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2lkZUVmZmVjdChcbiAgcmVkdWNlUHJvcHNUb1N0YXRlLFxuICBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50XG4pKERvY0NvbnRhaW5lcilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyLnRzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDY3MCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2lkZS1lZmZlY3QvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbFxuICoqIG1vZHVsZSBpZCA9IDEzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiY29udGVudFwiOlwiY29udGVudF8yb0JRbFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29udGFpbmVycy9Db25zb2xlTWFzdGVyL0NvbnNvbGVNYXN0ZXIuY3NzXG4gKiogbW9kdWxlIGlkID0gMTM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ3ZpZXdlci9ib29rLzppZCcsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL1ZpZXdlcicpIGFzIGFueSkuZGVmYXVsdClcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2luZGV4LnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGg6ICcvJyxcblxuICBnZXRDb21wb25lbnQobmV4dFN0YXRlLCBmbikge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgICAgZm4obnVsbCwgKHJlcXVpcmUoJy4vQXBwSG9tZScpIGFzIGFueSkuZGVmYXVsdClcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQXBwSG9tZS9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAnYnJvd3NlJyxcblxuICBnZXRDb21wb25lbnQobmV4dFN0YXRlLCBmbikge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgICAgZm4obnVsbCwgKHJlcXVpcmUoJy4vQnJvd3NlJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9Ccm93c2UvaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ2Jvb2svOmlkJyxcblxuICBnZXRDb21wb25lbnQobmV4dFN0YXRlLCBmbikge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgICAgZm4obnVsbCwgKHJlcXVpcmUoJy4vQm9va0RldGFpbCcpIGFzIGFueSkuZGVmYXVsdClcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQm9va0RldGFpbC9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAnY29sbGVjdGlvbnMnLFxuXG4gIGdldENvbXBvbmVudChuZXh0U3RhdGUsIGZuKSB7XG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlKSB7XG4gICAgICBmbihudWxsLCAocmVxdWlyZSgnLi9Db2xsZWN0aW9ucycpIGFzIGFueSkuZGVmYXVsdClcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQ29sbGVjdGlvbnMvaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ2NvbGxlY3Rpb25zLzppZCcsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL0NvbGxlY3Rpb25EZXRhaWwnKSBhcyBhbnkpLmRlZmF1bHQpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL0NvbGxlY3Rpb25EZXRhaWwvaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ3NpZ25pbicsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL1NpZ25pbicpIGFzIGFueSkuZGVmYXVsdClcbiAgICB9KVxuICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1NpZ25pbi9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAnc2lnbnVwJyxcblxuICBnZXRDb21wb25lbnQobmV4dFN0YXRlLCBmbikge1xuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgICAgZm4obnVsbCwgKHJlcXVpcmUoJy4vU2lnbnVwJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvU2lnbnVwL2luZGV4LnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGg6ICdzaGVsZicsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL1NoZWxmJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9TaGVsZi9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAncHJlZmVyZW5jZScsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL1ByZWZlcmVuY2UnKSBhcyBhbnkpLmRlZmF1bHQpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ByZWZlcmVuY2UvaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ3Byb2ZpbGUnLFxuXG4gIGdldENvbXBvbmVudChuZXh0U3RhdGUsIGZuKSB7XG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlKSB7XG4gICAgICBmbihudWxsLCAocmVxdWlyZSgnLi9Qcm9maWxlJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9Qcm9maWxlL2luZGV4LnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGg6ICdib29rcycsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL01hbmFnZUJvb2tzJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoOiAndXNlcnMnLFxuXG4gIGdldENvbXBvbmVudChuZXh0U3RhdGUsIGZuKSB7XG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlKSB7XG4gICAgICBmbihudWxsLCAocmVxdWlyZSgnLi9NYW5hZ2VVc2VycycpIGFzIGFueSkuZGVmYXVsdClcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlVXNlcnMvaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ2Jvb2tzL25ldycsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL0FkZEJvb2snKSBhcyBhbnkpLmRlZmF1bHQpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL0FkZEJvb2svaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJ2NvbGxlY3Rpb25zL25ldycsXG5cbiAgZ2V0Q29tcG9uZW50KG5leHRTdGF0ZSwgZm4pIHtcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgIGZuKG51bGwsIChyZXF1aXJlKCcuL0FkZENvbGxlY3Rpb24nKSBhcyBhbnkpLmRlZmF1bHQpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL0FkZENvbGxlY3Rpb24vaW5kZXgudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogJyonLFxuXG4gIGdldENvbXBvbmVudChuZXh0U3RhdGUsIGZuKSB7XG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlKSB7XG4gICAgICBmbihudWxsLCAocmVxdWlyZSgnLi9Ob01hdGNoJykgYXMgYW55KS5kZWZhdWx0KVxuICAgIH0pXG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTm9NYXRjaC9pbmRleC50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDY3Myk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2tpdF9kbGxcbiAqKiBtb2R1bGUgaWQgPSAyNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21wb3NlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJ1xuaW1wb3J0IGFwaSBmcm9tICcuL21pZGRsZXdhcmUvYXBpJ1xuaW1wb3J0IG1vZGlmeVJlc3BvbnNlIGZyb20gJy4vbWlkZGxld2FyZS9tb2RpZnlSZXNwb25zZSdcbmltcG9ydCBoYW5kbGVTZXJ2ZXJTdG9yZSBmcm9tICcuL21pZGRsZXdhcmUvaGFuZGxlU2VydmVyU3RvcmUnXG5pbXBvcnQgaGFuZGxlSW5pdGlhbFN0YXRlIGZyb20gJy4uL3V0aWxzL2hhbmRsZUluaXRpYWxTdGF0ZSdcbmltcG9ydCBsb2dBY3Rpb25UeXBlcyBmcm9tICcuL21pZGRsZXdhcmUvbG9nQWN0aW9uVHlwZXMnXG5pbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcblxuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoKSB7XG4gIGxldCBzdG9yZVxuXG4gIC8vIGlmKG1vZHVsZS5ob3QpIHtcbiAgLy8gICBtb2R1bGUuaG90LmFjY2VwdCgnLi4vcmVkdWNlcnMnLCAoKSA9PiB7XG4gIC8vICAgICBjb25zdCBuZXh0Um9vdFJlZHVjZXIgPSByZXF1aXJlKCcuLi9yZWR1Y2VycycpLmRlZmF1bHRcbiAgLy8gICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKG5leHRSb290UmVkdWNlcilcbiAgLy8gICB9KVxuICAvLyB9XG5cbiAgLy8gc2VydmVyIHNpZGVcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICAgIHJvb3RSZWR1Y2VyLFxuICAgICAge30sXG4gICAgICBhcHBseU1pZGRsZXdhcmUoaGFuZGxlU2VydmVyU3RvcmUsIGFwaSwgbW9kaWZ5UmVzcG9uc2UsIHRodW5rLCBsb2dBY3Rpb25UeXBlcylcbiAgICApXG5cbiAgICByZXR1cm4gc3RvcmVcbiAgfVxuXG4gIGlmIChlbnYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgICByb290UmVkdWNlcixcbiAgICAgIGhhbmRsZUluaXRpYWxTdGF0ZSgpLFxuICAgICAgYXBwbHlNaWRkbGV3YXJlKGhhbmRsZVNlcnZlclN0b3JlLCBhcGksIG1vZGlmeVJlc3BvbnNlLCB0aHVuaylcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICAgIHJvb3RSZWR1Y2VyLFxuICAgICAgaGFuZGxlSW5pdGlhbFN0YXRlKCksXG4gICAgICBjb21wb3NlKFxuICAgICAgICBhcHBseU1pZGRsZXdhcmUoaGFuZGxlU2VydmVyU3RvcmUsIGFwaSwgbW9kaWZ5UmVzcG9uc2UsIHRodW5rLCBjcmVhdGVMb2dnZXIoe2NvbGxhcHNlZDogdHJ1ZX0pKVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBzdG9yZVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvY29uZmlndXJlU3RvcmUudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg2NTcpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgX3JlYWN0X2tpdF9kbGxcbiAqKiBtb2R1bGUgaWQgPSAyNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7cmVkdWNlciBhcyBmb3JtfSBmcm9tICdyZWR1eC1mb3JtJ1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyByb3V0ZXJSZWR1Y2VyIGFzIHJvdXRpbmcgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnXG5pbXBvcnQgY29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnXG5pbXBvcnQgKiBhcyBhcGlEYXRhUmVkdWNlcnMgZnJvbSAnLi9hcGktZGF0YSdcbi8vIGltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucydcblxuLy8gZGVwcmVjYXRlZFxuZnVuY3Rpb24gZWxlbWVudHMoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0NIQU5HRV9WQUxVRScpIHtcbiAgICAvLyBsb2Rhc2gjbWVyZ2Ug5LiN5pSv5oyBIFN5bWJvbFxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgW2FjdGlvbi5uYW1lXTogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVbYWN0aW9uLm5hbWVdLCB7XG4gICAgICAgIHZhbHVlOiBhY3Rpb24udmFsdWVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ1VQREFURV9FTEVNRU5UJykge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgW2FjdGlvbi5uYW1lXTogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVbYWN0aW9uLm5hbWVdLCBhY3Rpb24uZGF0YSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKE9iamVjdC5hc3NpZ24oe30sIHtcbiAgY29tcG9uZW50cyxcbiAgZWxlbWVudHMsXG4gIHJvdXRpbmcsXG4gIGZvcm1cbn0sIGFwaURhdGFSZWR1Y2VycykpXG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9yZWR1Y2Vycy9pbmRleC50c1xuICoqLyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJ1xuXG5mdW5jdGlvbiBub3RpZmljYXRpb25zKHN0YXRlID0gW10sIGFjdGlvbikge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdISURFX05PVElGSUNBVElPTicpIHtcbiAgICByZXR1cm4gc3RhdGUubWFwKG4gPT4gbi5pZCA9PT0gYWN0aW9uLmlkID8gT2JqZWN0LmFzc2lnbih7fSwgbiwgeyB2aXNpYmxlOiBmYWxzZX0pIDogbilcbiAgfVxuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ1NIT1dfTk9USUZJQ0FUSU9OJykge1xuICAgIHJldHVybiBbLi4uc3RhdGUsIHtcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBtZXNzYWdlOiBhY3Rpb24ubWVzc2FnZSxcbiAgICAgIHR5cGU6IGFjdGlvbi5tc2dUeXBlLFxuICAgICAgaWQ6IGFjdGlvbi5pZFxuICAgIH1dXG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuXG5mdW5jdGlvbiBjb25maXJtTW9kYWwoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5PUEVOX0NPTkZJUk1fTU9EQUwpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtvcGVuOiB0cnVlfSwgYWN0aW9uLmRhdGEpXG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuQ0xPU0VfQ09ORklSTV9NT0RBTCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcGVuOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZVxufVxuXG5mdW5jdGlvbiBtb2RhbChzdGF0ZSA9IHt9LCBhY3Rpb24pIHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnT1BFTl9NT0RBTCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtvcGVuOiB0cnVlfSwgYWN0aW9uLmRhdGEpXG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDTE9TRV9NT0RBTCcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BlbjogZmFsc2VcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuY29uc3QgY29tcG9uZW50cyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIG5vdGlmaWNhdGlvbnMsXG4gIGNvbmZpcm1Nb2RhbCxcbiAgbW9kYWxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudHNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL3JlZHVjZXJzL2NvbXBvbmVudHMudHNcbiAqKi8iLCJpbXBvcnQgZXJyb3JNZXNzYWdlIGZyb20gJy4vZXJyb3JNZXNzYWdlJ1xuaW1wb3J0IHBhZ2luYXRpb24gZnJvbSAnLi9wYWdpbmF0aW9uJ1xuXG5leHBvcnQgeyBwYWdpbmF0aW9uLCBlcnJvck1lc3NhZ2UgfVxuXG5leHBvcnQgZnVuY3Rpb24gZW50aXRpZXMoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gIGlmIChhY3Rpb24ucmVzcG9uc2UgJiYgYWN0aW9uLnJlc3BvbnNlLmVudGl0aWVzKSB7XG4gICAgcmV0dXJuIF8ubWVyZ2Uoe30sIHN0YXRlLCBhY3Rpb24ucmVzcG9uc2UuZW50aXRpZXMpXG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBheWxvYWRzKHN0YXRlID0ge30sIGFjdGlvbikge1xuICBpZiAoKGFjdGlvbi5yZXNwb25zZSB8fCBhY3Rpb24uZXJyb3IpICYmIGFjdGlvbi5wYXlsb2FkKSB7XG4gICAgcmV0dXJuIF8uYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgW2FjdGlvbi5wYXlsb2FkXTogYWN0aW9uLnJlc3BvbnNlXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBzdGF0ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vzc2lvbihzdGF0ZSA9IHsgdXNlcjogeyByb2xlOiAndmlzaXRvcicgfSB9LCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1VTRVJfQVVUSF9SRVFVRVNUJzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9KVxuXG4gICAgY2FzZSAnVVNFUl9BVVRIX1NVQ0NFU1MnOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICB1c2VyOiBhY3Rpb24ucmVzcG9uc2VcbiAgICAgIH0pXG5cbiAgICBjYXNlICdVU0VSX0FVVEhfRkFJTFVSRSc6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIHVzZXI6IGFjdGlvbi5yZXNwb25zZVxuICAgICAgfSlcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvcmVkdWNlcnMvYXBpLWRhdGEvaW5kZXgudHNcbiAqKi8iLCIvLyBVcGRhdGVzIGVycm9yIG1lc3NhZ2UgdG8gbm90aWZ5IGFib3V0IHRoZSBmYWlsZWQgZmV0Y2hlcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVycm9yTWVzc2FnZShzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcbiAgY29uc3QgeyBlcnJvciB9ID0gYWN0aW9uXG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLmVycm9yXVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9yZWR1Y2Vycy9hcGktZGF0YS9lcnJvck1lc3NhZ2UudHNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmV4cG9ydCB0eXBlIFBhZ2luYXRpb24gPSB7XG4gIG5hbWU6IHN0cmluZ1xuICBxdWVyeT86IHN0cmluZ1xuICBrZXk/OiBzdHJpbmdcbiAgbWVyZ2U/OiBib29sZWFuXG59XG5cbmNvbnN0IHVwZGF0ZVBhZ2luYXRpb24gPSAoc3RhdGUgPSB7XG4gIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICBuZXh0UGFnZVVybDogbnVsbCxcbiAgcGFnZUNvdW50OiAwLFxuICBpZHM6IFtdXG59LCBhY3Rpb24sIG1lcmdlKSA9PiB7XG4gIGlmICghYWN0aW9uLnJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXy5vbWl0QnkoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgaWRzOiBtZXJnZVxuICAgICAgICAvLyDkuI3kvb/nlKggdW5pb24g5Lya5a+86Ie0IHNlcnZlciByZW5kZXJpbmcg6Zeu6aKY77yfXG4gICAgICAgID8gXy51bmlvbihzdGF0ZS5pZHMsIGFjdGlvbi5yZXNwb25zZS5yZXN1bHQpXG4gICAgICAgIDogYWN0aW9uLnJlc3BvbnNlLnJlc3VsdCxcbiAgICAgIG5leHQ6IGFjdGlvbi5yZXNwb25zZS5fbmV4dCxcbiAgICAgIGxhc3Q6IGFjdGlvbi5yZXNwb25zZS5fbGFzdCxcbiAgICB9KSwgXy5pc0VtcHR5KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2luYXRpb24oc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gIGlmIChhY3Rpb24ucGFnaW5hdGlvbikge1xuICAgIGNvbnN0IHsgbmFtZSwgcXVlcnksIGtleSwgbWVyZ2UgfSA9IGFjdGlvbi5wYWdpbmF0aW9uIGFzIFBhZ2luYXRpb25cbiAgICBjb25zdCBvcmlnaW5hbFN0YXRlID0gcXVlcnlcbiAgICAgID8gKHN0YXRlW25hbWVdICYmIHN0YXRlW25hbWVdWydxdWVyeSddICYmIHN0YXRlW25hbWVdWydxdWVyeSddW3F1ZXJ5XSkgfHwge31cbiAgICAgIDogKHN0YXRlW25hbWVdICYmIHN0YXRlW25hbWVdW2tleSB8fCAnZGVmYXVsdCddKSB8fCB7fVxuXG4gICAgY29uc3QgcGFnaW5hdGlvbkJvZHkgPSB1cGRhdGVQYWdpbmF0aW9uKG9yaWdpbmFsU3RhdGUsIGFjdGlvbiwgbWVyZ2UpXG5cbiAgICBjb25zdCBwYWdpbmF0aW9uT2JqID0gcXVlcnlcbiAgICAgID8ge1xuICAgICAgICBxdWVyeToge1xuICAgICAgICAgIFtxdWVyeV06IHBhZ2luYXRpb25Cb2R5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIDoge1xuICAgICAgICBba2V5IHx8ICdkZWZhdWx0J106IHBhZ2luYXRpb25Cb2R5XG4gICAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgIFtuYW1lXTogcGFnaW5hdGlvbk9ialxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL3JlZHVjZXJzL2FwaS1kYXRhL3BhZ2luYXRpb24udHNcbiAqKi8iLCJpbXBvcnQgY2FsbEFwaSwgeyBDYWxsQXBpT3B0aW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL2NhbGxBcGknXG5pbXBvcnQgeyBBcGlSb290cyB9IGZyb20gJy4uLy4uL2NvbmZpZydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBoYW5kbGVSZXNwb25zZSBmcm9tICcuLi8uLi91dGlscy9oYW5kbGVSZXNwb25zZSdcblxuZXhwb3J0IHR5cGUgUGFnaW5hdGlvbiA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIHF1ZXJ5Pzogc3RyaW5nXG4gIGtleT86IHN0cmluZ1xuICBtZXJnZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgQ0FMTF9BUElfT0JKID0ge1xuICAvLyB0b2RvXG4gIC8vIOWPr+S7peaYr+WHveaVsOaIluiAheWtl+espuS4su+8jOS9huaYryB0cyDkuI3nn6XpgZPmgI7kuYjlhpnog73pgJrov4fvvIzmiYDku6XlhYjov5nmoLdcbiAgZW5kcG9pbnQ6IGFueVxuXG4gIHR5cGVzOiBzdHJpbmdbXVxuICBhcGlVcmw/OiBzdHJpbmdcbiAgc2NoZW1hPzogYW55XG4gIG9wdGlvbnM/OiBDYWxsQXBpT3B0aW9uc1xuICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvblxufVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XG4gIGNvbnN0IENBTExfQVBJOiBDQUxMX0FQSV9PQkogPSBhY3Rpb24uQ0FMTF9BUElcbiAgaWYgKHR5cGVvZiBDQUxMX0FQSSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbmV4dChhY3Rpb24pXG4gIH1cblxuICBsZXQgeyBlbmRwb2ludCwgYXBpVXJsLCBvcHRpb25zLCBwYWdpbmF0aW9uIH0gPSBDQUxMX0FQSVxuICBjb25zdCB7IHR5cGVzLCBzY2hlbWEgfSA9IENBTExfQVBJXG4gIGNvbnN0IFtyZXF1ZXN0VHlwZSwgc3VjY2Vzc1R5cGUsIGZhaWx1cmVUeXBlXSA9IHR5cGVzXG5cbiAgY29uc3QgYWN0aW9uV2l0aCA9ICh7ZGF0YSwgaGFzUGFnaW5hdGlvbn0pID0+IHtcbiAgICBsZXQgZmluYWxBY3Rpb24gPSBPYmplY3QuYXNzaWduKHt9LCBhY3Rpb24sIGRhdGEpXG4gICAgZmluYWxBY3Rpb24gPSBfLm9taXQoZmluYWxBY3Rpb24sIFsnQ0FMTF9BUEknXSlcblxuICAgIGlmICghaGFzUGFnaW5hdGlvbikge1xuICAgICAgZmluYWxBY3Rpb24gPSBfLm9taXQoZmluYWxBY3Rpb24sIFsnQ0FMTF9BUEknLCAncGFnaW5hdGlvbiddKVxuICAgIH1cblxuICAgIHJldHVybiBmaW5hbEFjdGlvblxuICB9XG5cbiAgbmV4dChhY3Rpb25XaXRoKHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiByZXF1ZXN0VHlwZSxcbiAgICAgIHBhZ2luYXRpb25cbiAgICB9LFxuICAgIGhhc1BhZ2luYXRpb246IEJvb2xlYW4ocGFnaW5hdGlvbilcbiAgfSkpXG5cbiAgaWYgKHR5cGVvZiBlbmRwb2ludCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVuZHBvaW50ID0gZW5kcG9pbnQoc3RvcmUuZ2V0U3RhdGUoKSlcbiAgfVxuXG4gIGlmICh0eXBlb2YgYXBpVXJsID09PSAndW5kZWZpbmVkJykge1xuICAgIGFwaVVybCA9IEFwaVJvb3RzLkxPQ0FMXG4gIH1cblxuICBjb25zdCBmdWxsVXJsID0gYXBpVXJsICsgZW5kcG9pbnRcblxuICByZXR1cm4gY2FsbEFwaShmdWxsVXJsLCBvcHRpb25zIHx8IHt9KS50aGVuKFxuICAgIHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRSZXMgPSBoYW5kbGVSZXNwb25zZShyZXNwb25zZSwgc2NoZW1hKVxuICAgICAgbGV0IGZpbmFsQWN0aW9uID0ge1xuICAgICAgICByZXNwb25zZTogbm9ybWFsaXplZFJlcyxcbiAgICAgICAgdHlwZTogc3VjY2Vzc1R5cGUsXG4gICAgICAgIHBhZ2luYXRpb25cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5leHQoZGlzcGF0Y2ggPT4ge1xuICAgICAgICBkaXNwYXRjaChhY3Rpb25XaXRoKHsgZGF0YTogZmluYWxBY3Rpb24sIGhhc1BhZ2luYXRpb246IEJvb2xlYW4ocGFnaW5hdGlvbikgfSkpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgb2s6IHRydWUsXG4gICAgICAgICAgcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGVycm9yID0+IG5leHQoZGlzcGF0Y2ggPT4ge1xuICAgICAgZGlzcGF0Y2goYWN0aW9uV2l0aCh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0eXBlOiBmYWlsdXJlVHlwZSxcbiAgICAgICAgICBwYWdpbmF0aW9uLFxuICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICflj5HnlJ/mnKrnn6UgQVBJIOmUmeivr++8gShDb2RlIDEwMDApJ1xuICAgICAgICB9LFxuICAgICAgICBoYXNQYWdpbmF0aW9uOiBCb29sZWFuKHBhZ2luYXRpb24pXG4gICAgICB9KSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9rOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICApXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9taWRkbGV3YXJlL2FwaS50c1xuICoqLyIsImltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gJ25vcm1hbGl6cidcbmltcG9ydCBodW1wcyBmcm9tICdodW1wcydcbmltcG9ydCBwYXJzZVF1ZXJ5U3RyaW5nIGZyb20gJy4vcGFyc2VRdWVyeVN0cmluZydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY29uc3QgcGFyc2VIZWFkZXJQYWdlTGlua0J5UmVsID0gKGxpbmtzOiBzdHJpbmcsIHJlbDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGxpbmsgPSBsaW5rcy5zcGxpdCgnLCcpLmZpbmQocyA9PiBzLmluZGV4T2YoYHJlbD1cIiR7cmVsfVwiYCkgPiAtMSlcblxuICBpZiAoIWxpbmspIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBjb25zdCB1cmwgPSBsaW5rLnNwbGl0KCc7JylbMF0udHJpbSgpLnNsaWNlKDEsIC0xKVxuXG4gIHJldHVybiB7XG4gICAgLy8gdG9kb1xuICAgIHBhZ2U6IHBhcnNlSW50KF8uZ2V0KHBhcnNlUXVlcnlTdHJpbmcodXJsLnNwbGl0KCc/JylbMV0gfHwgJycpLCAncGFnZScsIDApIGFzIGFueSwgMTApLFxuICAgIHVybFxuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlUmVzSGVhZGVyVG9QYWdpbmF0aW9uKHJlc3BvbnNlKSB7XG4gIGlmICghcmVzcG9uc2UpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGNvbnN0IGxpbmtzID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2xpbmsnKVxuICBpZiAoIWxpbmtzKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBjb25zdCBuZXh0ID0gcGFyc2VIZWFkZXJQYWdlTGlua0J5UmVsKGxpbmtzLCAnbmV4dCcpXG4gIGNvbnN0IGxhc3QgPSBwYXJzZUhlYWRlclBhZ2VMaW5rQnlSZWwobGlua3MsICdsYXN0JylcblxuICByZXR1cm4ge1xuICAgIG5leHQsXG4gICAgbGFzdFxuICB9IGFzIGFueVxufVxuXG5mdW5jdGlvbiBoYW5kbGVSZXNwb25zZSh7IGpzb24sIF9yZXNwb25zZSB9LCBzY2hlbWEpIHtcbiAgY29uc3QgY2FtZWxpemVkSnNvbiA9IGh1bXBzLmNhbWVsaXplS2V5cyhqc29uKVxuICBjb25zdCB7IG5leHQsIGxhc3QgfSA9IHBhcnNlUmVzSGVhZGVyVG9QYWdpbmF0aW9uKF9yZXNwb25zZSlcblxuICBpZiAodHlwZW9mIHNjaGVtYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gIE9iamVjdC5hc3NpZ24oe30sXG4gICAgICBub3JtYWxpemUoY2FtZWxpemVkSnNvbiwgc2NoZW1hKSxcbiAgICAgIHtcbiAgICAgICAgX25leHQ6IG5leHQsXG4gICAgICAgIF9sYXN0OiBsYXN0XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGNhbWVsaXplZEpzb25cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlUmVzcG9uc2VcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3V0aWxzL2hhbmRsZVJlc3BvbnNlLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxNCkpKDc1Mik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaHVtcHMvaHVtcHMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIF91dGlsc19kbGxcbiAqKiBtb2R1bGUgaWQgPSAyNTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZyhxdWVyeVN0cmluZykge1xuICBjb25zdCBwYXJhbXMgPSBxdWVyeVN0cmluZy5zcGxpdCgnJicpXG4gIGxldCBvYmplY3QgPSB7fVxuXG4gIHBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICBjb25zdCBrZXkgPSBwYXJhbS5zcGxpdCgnPScpWzBdXG4gICAgY29uc3QgdmFsID0gcGFyYW0uc3BsaXQoJz0nKVsxXVxuXG4gICAgb2JqZWN0W2tleV0gPSB2YWxcbiAgfSlcblxuICByZXR1cm4gb2JqZWN0XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy91dGlscy9wYXJzZVF1ZXJ5U3RyaW5nLnRzXG4gKiovIiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLkRPVUJBTl9CT09LX1NFQVJDSF9TVUNDRVNTKSB7XG4gICAgYWN0aW9uLnJlc3BvbnNlLnJlc3VsdCA9IGFjdGlvbi5yZXNwb25zZS5yZXN1bHQuYm9va3NcbiAgfVxuXG4gIG5leHQoYWN0aW9uKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvbWlkZGxld2FyZS9tb2RpZnlSZXNwb25zZS50c1xuICoqLyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmUgPT4gbmV4dCA9PiBhY3Rpb24gPT4ge1xuICBpZiAodHlwZW9mIGFjdGlvbi5TRVJWRVJfU1RPUkUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKVxuICB9XG5cbiAgY29uc3QgYWN0aW9uQm9keSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHJlc29sdmUoYWN0aW9uLlNFUlZFUl9TVE9SRS5ib2R5KVxuICB9KVxuXG4gIHJldHVybiBhY3Rpb25Cb2R5LnRoZW4oYm9keSA9PiB7XG4gICAgcmV0dXJuIG5leHQoZGlzcGF0Y2ggPT4ge1xuICAgICAgZGlzcGF0Y2goYm9keSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9rOiB0cnVlLFxuICAgICAgICByZXNwb25zZTogYWN0aW9uLmJvZHkucmVzcG9uc2VcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvbWlkZGxld2FyZS9oYW5kbGVTZXJ2ZXJTdG9yZS50c1xuICoqLyIsImZ1bmN0aW9uIGhhbmRsZUluaXRpYWxTdGF0ZSgpIHtcbiAgbGV0IGluaXRpYWxTdGF0ZSA9IHt9XG5cbiAgaWYgKHR5cGVvZiAoPGFueT53aW5kb3cpLl9fSU5JVElBTF9TVEFURV9fICE9PSAndW5kZWZpbmVkJykge1xuICAgIGluaXRpYWxTdGF0ZSA9ICg8YW55PndpbmRvdykuX19JTklUSUFMX1NUQVRFX19cbiAgfVxuXG4gIHJldHVybiBpbml0aWFsU3RhdGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlSW5pdGlhbFN0YXRlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy91dGlscy9oYW5kbGVJbml0aWFsU3RhdGUudHNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBzdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XG4gIGNvbnNvbGUuaW5mbyhhY3Rpb24udHlwZSlcbiAgbmV4dChhY3Rpb24pXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9taWRkbGV3YXJlL2xvZ0FjdGlvblR5cGVzLnRzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfVxuXG52YXIgcmVwZWF0ID0gZnVuY3Rpb24gcmVwZWF0KHN0ciwgdGltZXMpIHtcbiAgcmV0dXJuIG5ldyBBcnJheSh0aW1lcyArIDEpLmpvaW4oc3RyKTtcbn07XG52YXIgcGFkID0gZnVuY3Rpb24gcGFkKG51bSwgbWF4TGVuZ3RoKSB7XG4gIHJldHVybiByZXBlYXQoXCIwXCIsIG1heExlbmd0aCAtIG51bS50b1N0cmluZygpLmxlbmd0aCkgKyBudW07XG59O1xudmFyIGZvcm1hdFRpbWUgPSBmdW5jdGlvbiBmb3JtYXRUaW1lKHRpbWUpIHtcbiAgcmV0dXJuIFwiQCBcIiArIHBhZCh0aW1lLmdldEhvdXJzKCksIDIpICsgXCI6XCIgKyBwYWQodGltZS5nZXRNaW51dGVzKCksIDIpICsgXCI6XCIgKyBwYWQodGltZS5nZXRTZWNvbmRzKCksIDIpICsgXCIuXCIgKyBwYWQodGltZS5nZXRNaWxsaXNlY29uZHMoKSwgMyk7XG59O1xuXG4vLyBVc2UgdGhlIG5ldyBwZXJmb3JtYW5jZSBhcGkgdG8gZ2V0IGJldHRlciBwcmVjaXNpb24gaWYgYXZhaWxhYmxlXG52YXIgdGltZXIgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiID8gcGVyZm9ybWFuY2UgOiBEYXRlO1xuXG4vKipcbiAqIHBhcnNlIHRoZSBsZXZlbCBvcHRpb24gb2YgY3JlYXRlTG9nZ2VyXG4gKlxuICogQHByb3BlcnR5IHtzdHJpbmcgfCBmdW5jdGlvbiB8IG9iamVjdH0gbGV2ZWwgLSBjb25zb2xlW2xldmVsXVxuICogQHByb3BlcnR5IHtvYmplY3R9IGFjdGlvblxuICogQHByb3BlcnR5IHthcnJheX0gcGF5bG9hZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGVcbiAqL1xuXG5mdW5jdGlvbiBnZXRMb2dMZXZlbChsZXZlbCwgYWN0aW9uLCBwYXlsb2FkLCB0eXBlKSB7XG4gIHN3aXRjaCAodHlwZW9mIGxldmVsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YobGV2ZWwpKSB7XG4gICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgcmV0dXJuIHR5cGVvZiBsZXZlbFt0eXBlXSA9PT0gXCJmdW5jdGlvblwiID8gbGV2ZWxbdHlwZV0uYXBwbHkobGV2ZWwsIF90b0NvbnN1bWFibGVBcnJheShwYXlsb2FkKSkgOiBsZXZlbFt0eXBlXTtcbiAgICBjYXNlIFwiZnVuY3Rpb25cIjpcbiAgICAgIHJldHVybiBsZXZlbChhY3Rpb24pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbGV2ZWw7XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGxvZ2dlciB3aXRoIGZvbGxvd2VkIG9wdGlvbnNcbiAqXG4gKiBAbmFtZXNwYWNlXG4gKiBAcHJvcGVydHkge29iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgZm9yIGxvZ2dlclxuICogQHByb3BlcnR5IHtzdHJpbmcgfCBmdW5jdGlvbiB8IG9iamVjdH0gb3B0aW9ucy5sZXZlbCAtIGNvbnNvbGVbbGV2ZWxdXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG9wdGlvbnMuZHVyYXRpb24gLSBwcmludCBkdXJhdGlvbiBvZiBlYWNoIGFjdGlvbj9cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3B0aW9ucy50aW1lc3RhbXAgLSBwcmludCB0aW1lc3RhbXAgd2l0aCBlYWNoIGFjdGlvbj9cbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBvcHRpb25zLmNvbG9ycyAtIGN1c3RvbSBjb2xvcnNcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBvcHRpb25zLmxvZ2dlciAtIGltcGxlbWVudGF0aW9uIG9mIHRoZSBgY29uc29sZWAgQVBJXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG9wdGlvbnMubG9nRXJyb3JzIC0gc2hvdWxkIGVycm9ycyBpbiBhY3Rpb24gZXhlY3V0aW9uIGJlIGNhdWdodCwgbG9nZ2VkLCBhbmQgcmUtdGhyb3duP1xuICogQHByb3BlcnR5IHtib29sZWFufSBvcHRpb25zLmNvbGxhcHNlZCAtIGlzIGdyb3VwIGNvbGxhcHNlZD9cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3B0aW9ucy5wcmVkaWNhdGUgLSBjb25kaXRpb24gd2hpY2ggcmVzb2x2ZXMgbG9nZ2VyIGJlaGF2aW9yXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBvcHRpb25zLnN0YXRlVHJhbnNmb3JtZXIgLSB0cmFuc2Zvcm0gc3RhdGUgYmVmb3JlIHByaW50XG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBvcHRpb25zLmFjdGlvblRyYW5zZm9ybWVyIC0gdHJhbnNmb3JtIGFjdGlvbiBiZWZvcmUgcHJpbnRcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG9wdGlvbnMuZXJyb3JUcmFuc2Zvcm1lciAtIHRyYW5zZm9ybSBlcnJvciBiZWZvcmUgcHJpbnRcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVMb2dnZXIoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gIHZhciBfb3B0aW9ucyRsZXZlbCA9IG9wdGlvbnMubGV2ZWw7XG4gIHZhciBsZXZlbCA9IF9vcHRpb25zJGxldmVsID09PSB1bmRlZmluZWQgPyBcImxvZ1wiIDogX29wdGlvbnMkbGV2ZWw7XG4gIHZhciBfb3B0aW9ucyRsb2dnZXIgPSBvcHRpb25zLmxvZ2dlcjtcbiAgdmFyIGxvZ2dlciA9IF9vcHRpb25zJGxvZ2dlciA9PT0gdW5kZWZpbmVkID8gY29uc29sZSA6IF9vcHRpb25zJGxvZ2dlcjtcbiAgdmFyIF9vcHRpb25zJGxvZ0Vycm9ycyA9IG9wdGlvbnMubG9nRXJyb3JzO1xuICB2YXIgbG9nRXJyb3JzID0gX29wdGlvbnMkbG9nRXJyb3JzID09PSB1bmRlZmluZWQgPyB0cnVlIDogX29wdGlvbnMkbG9nRXJyb3JzO1xuICB2YXIgY29sbGFwc2VkID0gb3B0aW9ucy5jb2xsYXBzZWQ7XG4gIHZhciBwcmVkaWNhdGUgPSBvcHRpb25zLnByZWRpY2F0ZTtcbiAgdmFyIF9vcHRpb25zJGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbjtcbiAgdmFyIGR1cmF0aW9uID0gX29wdGlvbnMkZHVyYXRpb24gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX29wdGlvbnMkZHVyYXRpb247XG4gIHZhciBfb3B0aW9ucyR0aW1lc3RhbXAgPSBvcHRpb25zLnRpbWVzdGFtcDtcbiAgdmFyIHRpbWVzdGFtcCA9IF9vcHRpb25zJHRpbWVzdGFtcCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9vcHRpb25zJHRpbWVzdGFtcDtcbiAgdmFyIHRyYW5zZm9ybWVyID0gb3B0aW9ucy50cmFuc2Zvcm1lcjtcbiAgdmFyIF9vcHRpb25zJHN0YXRlVHJhbnNmbyA9IG9wdGlvbnMuc3RhdGVUcmFuc2Zvcm1lcjtcbiAgdmFyIC8vIGRlcHJlY2F0ZWRcbiAgc3RhdGVUcmFuc2Zvcm1lciA9IF9vcHRpb25zJHN0YXRlVHJhbnNmbyA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9IDogX29wdGlvbnMkc3RhdGVUcmFuc2ZvO1xuICB2YXIgX29wdGlvbnMkYWN0aW9uVHJhbnNmID0gb3B0aW9ucy5hY3Rpb25UcmFuc2Zvcm1lcjtcbiAgdmFyIGFjdGlvblRyYW5zZm9ybWVyID0gX29wdGlvbnMkYWN0aW9uVHJhbnNmID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoYWN0bikge1xuICAgIHJldHVybiBhY3RuO1xuICB9IDogX29wdGlvbnMkYWN0aW9uVHJhbnNmO1xuICB2YXIgX29wdGlvbnMkZXJyb3JUcmFuc2ZvID0gb3B0aW9ucy5lcnJvclRyYW5zZm9ybWVyO1xuICB2YXIgZXJyb3JUcmFuc2Zvcm1lciA9IF9vcHRpb25zJGVycm9yVHJhbnNmbyA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9IDogX29wdGlvbnMkZXJyb3JUcmFuc2ZvO1xuICB2YXIgX29wdGlvbnMkY29sb3JzID0gb3B0aW9ucy5jb2xvcnM7XG4gIHZhciBjb2xvcnMgPSBfb3B0aW9ucyRjb2xvcnMgPT09IHVuZGVmaW5lZCA/IHtcbiAgICB0aXRsZTogZnVuY3Rpb24gdGl0bGUoKSB7XG4gICAgICByZXR1cm4gXCIjMDAwMDAwXCI7XG4gICAgfSxcbiAgICBwcmV2U3RhdGU6IGZ1bmN0aW9uIHByZXZTdGF0ZSgpIHtcbiAgICAgIHJldHVybiBcIiM5RTlFOUVcIjtcbiAgICB9LFxuICAgIGFjdGlvbjogZnVuY3Rpb24gYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIFwiIzAzQTlGNFwiO1xuICAgIH0sXG4gICAgbmV4dFN0YXRlOiBmdW5jdGlvbiBuZXh0U3RhdGUoKSB7XG4gICAgICByZXR1cm4gXCIjNENBRjUwXCI7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gZXJyb3IoKSB7XG4gICAgICByZXR1cm4gXCIjRjIwNDA0XCI7XG4gICAgfVxuICB9IDogX29wdGlvbnMkY29sb3JzO1xuXG4gIC8vIGV4aXQgaWYgY29uc29sZSB1bmRlZmluZWRcblxuICBpZiAodHlwZW9mIGxvZ2dlciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKHRyYW5zZm9ybWVyKSB7XG4gICAgY29uc29sZS5lcnJvcihcIk9wdGlvbiAndHJhbnNmb3JtZXInIGlzIGRlcHJlY2F0ZWQsIHVzZSBzdGF0ZVRyYW5zZm9ybWVyIGluc3RlYWRcIik7XG4gIH1cblxuICB2YXIgbG9nQnVmZmVyID0gW107XG4gIGZ1bmN0aW9uIHByaW50QnVmZmVyKCkge1xuICAgIGxvZ0J1ZmZlci5mb3JFYWNoKGZ1bmN0aW9uIChsb2dFbnRyeSwga2V5KSB7XG4gICAgICB2YXIgc3RhcnRlZCA9IGxvZ0VudHJ5LnN0YXJ0ZWQ7XG4gICAgICB2YXIgc3RhcnRlZFRpbWUgPSBsb2dFbnRyeS5zdGFydGVkVGltZTtcbiAgICAgIHZhciBhY3Rpb24gPSBsb2dFbnRyeS5hY3Rpb247XG4gICAgICB2YXIgcHJldlN0YXRlID0gbG9nRW50cnkucHJldlN0YXRlO1xuICAgICAgdmFyIGVycm9yID0gbG9nRW50cnkuZXJyb3I7XG4gICAgICB2YXIgdG9vayA9IGxvZ0VudHJ5LnRvb2s7XG4gICAgICB2YXIgbmV4dFN0YXRlID0gbG9nRW50cnkubmV4dFN0YXRlO1xuXG4gICAgICB2YXIgbmV4dEVudHJ5ID0gbG9nQnVmZmVyW2tleSArIDFdO1xuICAgICAgaWYgKG5leHRFbnRyeSkge1xuICAgICAgICBuZXh0U3RhdGUgPSBuZXh0RW50cnkucHJldlN0YXRlO1xuICAgICAgICB0b29rID0gbmV4dEVudHJ5LnN0YXJ0ZWQgLSBzdGFydGVkO1xuICAgICAgfVxuICAgICAgLy8gbWVzc2FnZVxuICAgICAgdmFyIGZvcm1hdHRlZEFjdGlvbiA9IGFjdGlvblRyYW5zZm9ybWVyKGFjdGlvbik7XG4gICAgICB2YXIgaXNDb2xsYXBzZWQgPSB0eXBlb2YgY29sbGFwc2VkID09PSBcImZ1bmN0aW9uXCIgPyBjb2xsYXBzZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV4dFN0YXRlO1xuICAgICAgfSwgYWN0aW9uKSA6IGNvbGxhcHNlZDtcblxuICAgICAgdmFyIGZvcm1hdHRlZFRpbWUgPSBmb3JtYXRUaW1lKHN0YXJ0ZWRUaW1lKTtcbiAgICAgIHZhciB0aXRsZUNTUyA9IGNvbG9ycy50aXRsZSA/IFwiY29sb3I6IFwiICsgY29sb3JzLnRpdGxlKGZvcm1hdHRlZEFjdGlvbikgKyBcIjtcIiA6IG51bGw7XG4gICAgICB2YXIgdGl0bGUgPSBcImFjdGlvbiBcIiArICh0aW1lc3RhbXAgPyBmb3JtYXR0ZWRUaW1lIDogXCJcIikgKyBcIiBcIiArIGZvcm1hdHRlZEFjdGlvbi50eXBlICsgXCIgXCIgKyAoZHVyYXRpb24gPyBcIihpbiBcIiArIHRvb2sudG9GaXhlZCgyKSArIFwiIG1zKVwiIDogXCJcIik7XG5cbiAgICAgIC8vIHJlbmRlclxuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgaWYgKGNvbG9ycy50aXRsZSkgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKFwiJWMgXCIgKyB0aXRsZSwgdGl0bGVDU1MpO2Vsc2UgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKHRpdGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY29sb3JzLnRpdGxlKSBsb2dnZXIuZ3JvdXAoXCIlYyBcIiArIHRpdGxlLCB0aXRsZUNTUyk7ZWxzZSBsb2dnZXIuZ3JvdXAodGl0bGUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGxvZ2dlci5sb2codGl0bGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJldlN0YXRlTGV2ZWwgPSBnZXRMb2dMZXZlbChsZXZlbCwgZm9ybWF0dGVkQWN0aW9uLCBbcHJldlN0YXRlXSwgXCJwcmV2U3RhdGVcIik7XG4gICAgICB2YXIgYWN0aW9uTGV2ZWwgPSBnZXRMb2dMZXZlbChsZXZlbCwgZm9ybWF0dGVkQWN0aW9uLCBbZm9ybWF0dGVkQWN0aW9uXSwgXCJhY3Rpb25cIik7XG4gICAgICB2YXIgZXJyb3JMZXZlbCA9IGdldExvZ0xldmVsKGxldmVsLCBmb3JtYXR0ZWRBY3Rpb24sIFtlcnJvciwgcHJldlN0YXRlXSwgXCJlcnJvclwiKTtcbiAgICAgIHZhciBuZXh0U3RhdGVMZXZlbCA9IGdldExvZ0xldmVsKGxldmVsLCBmb3JtYXR0ZWRBY3Rpb24sIFtuZXh0U3RhdGVdLCBcIm5leHRTdGF0ZVwiKTtcblxuICAgICAgaWYgKHByZXZTdGF0ZUxldmVsKSB7XG4gICAgICAgIGlmIChjb2xvcnMucHJldlN0YXRlKSBsb2dnZXJbcHJldlN0YXRlTGV2ZWxdKFwiJWMgcHJldiBzdGF0ZVwiLCBcImNvbG9yOiBcIiArIGNvbG9ycy5wcmV2U3RhdGUocHJldlN0YXRlKSArIFwiOyBmb250LXdlaWdodDogYm9sZFwiLCBwcmV2U3RhdGUpO2Vsc2UgbG9nZ2VyW3ByZXZTdGF0ZUxldmVsXShcInByZXYgc3RhdGVcIiwgcHJldlN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGlvbkxldmVsKSB7XG4gICAgICAgIGlmIChjb2xvcnMuYWN0aW9uKSBsb2dnZXJbYWN0aW9uTGV2ZWxdKFwiJWMgYWN0aW9uXCIsIFwiY29sb3I6IFwiICsgY29sb3JzLmFjdGlvbihmb3JtYXR0ZWRBY3Rpb24pICsgXCI7IGZvbnQtd2VpZ2h0OiBib2xkXCIsIGZvcm1hdHRlZEFjdGlvbik7ZWxzZSBsb2dnZXJbYWN0aW9uTGV2ZWxdKFwiYWN0aW9uXCIsIGZvcm1hdHRlZEFjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChlcnJvciAmJiBlcnJvckxldmVsKSB7XG4gICAgICAgIGlmIChjb2xvcnMuZXJyb3IpIGxvZ2dlcltlcnJvckxldmVsXShcIiVjIGVycm9yXCIsIFwiY29sb3I6IFwiICsgY29sb3JzLmVycm9yKGVycm9yLCBwcmV2U3RhdGUpICsgXCI7IGZvbnQtd2VpZ2h0OiBib2xkXCIsIGVycm9yKTtlbHNlIGxvZ2dlcltlcnJvckxldmVsXShcImVycm9yXCIsIGVycm9yKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5leHRTdGF0ZUxldmVsKSB7XG4gICAgICAgIGlmIChjb2xvcnMubmV4dFN0YXRlKSBsb2dnZXJbbmV4dFN0YXRlTGV2ZWxdKFwiJWMgbmV4dCBzdGF0ZVwiLCBcImNvbG9yOiBcIiArIGNvbG9ycy5uZXh0U3RhdGUobmV4dFN0YXRlKSArIFwiOyBmb250LXdlaWdodDogYm9sZFwiLCBuZXh0U3RhdGUpO2Vsc2UgbG9nZ2VyW25leHRTdGF0ZUxldmVsXShcIm5leHQgc3RhdGVcIiwgbmV4dFN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGxvZ2dlci5sb2coXCLigJTigJQgbG9nIGVuZCDigJTigJRcIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbG9nQnVmZmVyLmxlbmd0aCA9IDA7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZ2V0U3RhdGUgPSBfcmVmLmdldFN0YXRlO1xuICAgIHJldHVybiBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgLy8gZXhpdCBlYXJseSBpZiBwcmVkaWNhdGUgZnVuY3Rpb24gcmV0dXJucyBmYWxzZVxuICAgICAgICBpZiAodHlwZW9mIHByZWRpY2F0ZSA9PT0gXCJmdW5jdGlvblwiICYmICFwcmVkaWNhdGUoZ2V0U3RhdGUsIGFjdGlvbikpIHtcbiAgICAgICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxvZ0VudHJ5ID0ge307XG4gICAgICAgIGxvZ0J1ZmZlci5wdXNoKGxvZ0VudHJ5KTtcblxuICAgICAgICBsb2dFbnRyeS5zdGFydGVkID0gdGltZXIubm93KCk7XG4gICAgICAgIGxvZ0VudHJ5LnN0YXJ0ZWRUaW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgbG9nRW50cnkucHJldlN0YXRlID0gc3RhdGVUcmFuc2Zvcm1lcihnZXRTdGF0ZSgpKTtcbiAgICAgICAgbG9nRW50cnkuYWN0aW9uID0gYWN0aW9uO1xuXG4gICAgICAgIHZhciByZXR1cm5lZFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAobG9nRXJyb3JzKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybmVkVmFsdWUgPSBuZXh0KGFjdGlvbik7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgbG9nRW50cnkuZXJyb3IgPSBlcnJvclRyYW5zZm9ybWVyKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm5lZFZhbHVlID0gbmV4dChhY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9nRW50cnkudG9vayA9IHRpbWVyLm5vdygpIC0gbG9nRW50cnkuc3RhcnRlZDtcbiAgICAgICAgbG9nRW50cnkubmV4dFN0YXRlID0gc3RhdGVUcmFuc2Zvcm1lcihnZXRTdGF0ZSgpKTtcblxuICAgICAgICBwcmludEJ1ZmZlcigpO1xuXG4gICAgICAgIGlmIChsb2dFbnRyeS5lcnJvcikgdGhyb3cgbG9nRW50cnkuZXJyb3I7XG4gICAgICAgIHJldHVybiByZXR1cm5lZFZhbHVlO1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUxvZ2dlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWR1eC1sb2dnZXIvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9