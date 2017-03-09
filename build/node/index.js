require('source-map-support').install()
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		17: 0
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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./chunk." + chunkId + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 290);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(265);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(266);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = __webpack_require__(264);

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
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

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
    if (sourceMap && btoa) {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("lodash/assign");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GenericError = function GenericError(message, name) {
    _classCallCheck(this, GenericError);

    this.name = name || 'GenericError';
    this.statusCode = 500;
    this.message = message;
    this.stack = new Error().stack;
    this.type = this.name;
};

exports.default = GenericError;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(GenericError, 'GenericError', '/Users/liang/Projects/readr/src/server/errors/generic-error.ts');
}();

;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-css-modules");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VIEWER = exports.MODAL = exports.CLOSE_CONFIRM_MODAL = exports.OPEN_CONFIRM_MODAL = exports.NOTIFICATION = exports.SHELF = exports.AUTH = exports.PROFILE = exports.DOUBAN_BOOKS = exports.COLLECTION = exports.COLLECTIONS = exports.AUTHORS = exports.LOAD_BOOK_PROGRESS = exports.BOOK_PROGRESS = exports.USER_LOGOUT = exports.LOGOUT = exports.LOAD_USERS = exports.USERS = exports.LOAD_BOOKS = exports.BOOKS = exports.LOAD_BOOK_CONTENT = exports.BOOK_CONTENT = exports.LOAD_BOOK = exports.BOOK = exports.REMOVE_ENTITY = undefined;

var _utils = __webpack_require__(59);

/**
 * api
 */
var REMOVE_ENTITY = exports.REMOVE_ENTITY = 'REMOVE_ENTITY';
var BOOK = exports.BOOK = (0, _utils.createRequestTypes)('book');
var LOAD_BOOK = exports.LOAD_BOOK = (0, _utils.createSagaTriggerActionType)('LOAD_BOOK');
var BOOK_CONTENT = exports.BOOK_CONTENT = (0, _utils.createRequestTypes)('book-content');
var LOAD_BOOK_CONTENT = exports.LOAD_BOOK_CONTENT = (0, _utils.createSagaTriggerActionType)('LOAD_BOOK_CONTENT');
var BOOKS = exports.BOOKS = (0, _utils.createRequestTypes)('books');
var LOAD_BOOKS = exports.LOAD_BOOKS = (0, _utils.createSagaTriggerActionType)('LOAD_BOOKS');
var USERS = exports.USERS = (0, _utils.createRequestTypes)('users');
var LOAD_USERS = exports.LOAD_USERS = (0, _utils.createSagaTriggerActionType)('LOAD_USERS');
var LOGOUT = exports.LOGOUT = (0, _utils.createRequestTypes)('revoke');
var USER_LOGOUT = exports.USER_LOGOUT = (0, _utils.createSagaTriggerActionType)('USER_LOGOUT');
var BOOK_PROGRESS = exports.BOOK_PROGRESS = (0, _utils.createRequestTypes)('book-progress');
var LOAD_BOOK_PROGRESS = exports.LOAD_BOOK_PROGRESS = (0, _utils.createSagaTriggerActionType)('LOAD_BOOK_PROGRESS');
var AUTHORS = exports.AUTHORS = (0, _utils.createRequestTypes)('authors');
var COLLECTIONS = exports.COLLECTIONS = (0, _utils.createRequestTypes)('collections');
var COLLECTION = exports.COLLECTION = (0, _utils.createRequestTypes)('collection');
var DOUBAN_BOOKS = exports.DOUBAN_BOOKS = (0, _utils.createRequestTypes)('douban-books');
var PROFILE = exports.PROFILE = (0, _utils.createRequestTypes)('profile');
var AUTH = exports.AUTH = (0, _utils.createRequestTypes)('auth');
var SHELF = exports.SHELF = (0, _utils.createRequestTypes)('shelf');
/**
 * components
 */
// general
var NOTIFICATION = exports.NOTIFICATION = {
    SHOW: (0, _utils.createComponentActionType)('notification', 'SHOW'),
    HIDE: (0, _utils.createComponentActionType)('notification', 'HIDE')
};
var OPEN_CONFIRM_MODAL = exports.OPEN_CONFIRM_MODAL = (0, _utils.createComponentActionType)('confirm-modal', 'OPEN');
var CLOSE_CONFIRM_MODAL = exports.CLOSE_CONFIRM_MODAL = (0, _utils.createComponentActionType)('confirm-modal', 'CLOSE');
var MODAL = exports.MODAL = {
    OPEN: (0, _utils.createComponentActionType)('modal', 'SHOW'),
    CLOSE: (0, _utils.createComponentActionType)('modal', 'HIDE')
};
// viewer
var VIEWER = exports.VIEWER = {
    INITIALIZE: (0, _utils.createSagaTriggerActionType)((0, _utils.createComponentActionType)('viewer', 'INITIALIZE')),
    INITIALIZE_CONFIG: (0, _utils.createSagaTriggerActionType)((0, _utils.createComponentActionType)('viewer', 'INITIALIZE_CONFIG')),
    CONFIG: (0, _utils.createComponentActionType)('viewer', 'CONFIG'),
    CALC_START: (0, _utils.createSagaTriggerActionType)((0, _utils.createComponentActionType)('viewer', 'CALC_START')),
    CALC_SUCCESS: (0, _utils.createComponentActionType)('viewer', 'CALC_SUCCESS'),
    CALC_FAILURE: (0, _utils.createComponentActionType)('viewer', 'CALC_FAILURE'),
    BOOK_PROGRESS_UPDATE: (0, _utils.createSagaTriggerActionType)((0, _utils.createComponentActionType)('viewer/progress', 'UPDATE')),
    // TODO: 这个好像没用
    BOOK_PROGRESS_INITIALIZE: (0, _utils.createComponentActionType)('viewer/progress', 'INITIALIZE'),
    // TODO: 这个好像也没用
    BOOK_PROGRESS_DESTROY: (0, _utils.createComponentActionType)('viewer/progress', 'DESTROY'),
    JUMP: (0, _utils.createSagaTriggerActionType)((0, _utils.createComponentActionType)('viewer', 'JUMP')),
    FONT_CHANGE: (0, _utils.createComponentActionType)('viewer/preference', 'CHANGE_FONT_SIZE'),
    PANEL_TOGGLE: (0, _utils.createComponentActionType)('viewer/components/panel', 'TOGGLE'),
    PREFERENCE_TOGGLE: (0, _utils.createComponentActionType)('viewer/components/preference', 'TOGGLE'),
    NAVIGATION_TOGGLE: (0, _utils.createComponentActionType)('viewer/components/navigation', 'TOGGLE'),
    THEME_CHANGE: (0, _utils.createComponentActionType)('viewer/theme', 'CHANGE'),
    SCROLL_MODE_TOGGLE: (0, _utils.createComponentActionType)('viewer/scroll-mode', 'TOGGLE')
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(REMOVE_ENTITY, 'REMOVE_ENTITY', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(BOOK, 'BOOK', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(LOAD_BOOK, 'LOAD_BOOK', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(BOOK_CONTENT, 'BOOK_CONTENT', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(LOAD_BOOK_CONTENT, 'LOAD_BOOK_CONTENT', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(BOOKS, 'BOOKS', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(LOAD_BOOKS, 'LOAD_BOOKS', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(USERS, 'USERS', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(LOAD_USERS, 'LOAD_USERS', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(LOGOUT, 'LOGOUT', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(USER_LOGOUT, 'USER_LOGOUT', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(BOOK_PROGRESS, 'BOOK_PROGRESS', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(LOAD_BOOK_PROGRESS, 'LOAD_BOOK_PROGRESS', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(AUTHORS, 'AUTHORS', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(COLLECTIONS, 'COLLECTIONS', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(COLLECTION, 'COLLECTION', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(DOUBAN_BOOKS, 'DOUBAN_BOOKS', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(PROFILE, 'PROFILE', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(AUTH, 'AUTH', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(SHELF, 'SHELF', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(NOTIFICATION, 'NOTIFICATION', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(OPEN_CONFIRM_MODAL, 'OPEN_CONFIRM_MODAL', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(CLOSE_CONFIRM_MODAL, 'CLOSE_CONFIRM_MODAL', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(MODAL, 'MODAL', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');

    __REACT_HOT_LOADER__.register(VIEWER, 'VIEWER', '/Users/liang/Projects/readr/src/isomorphic/constants/actionTypes.ts');
}();

;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("lodash/omit");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// 全局变量
// 全局变量
var ENABLE_SERVER_ROUTING = exports.ENABLE_SERVER_ROUTING = '__ENABLE_SERVER_ROUTING__';
var INITIAL_STATE = exports.INITIAL_STATE = '__INITIAL_STATE__';
// 其他常量
var DOUBAN_API_ROOT = exports.DOUBAN_API_ROOT = 'https://api.douban.com/v2';
var GITHUB_API_ROOT = exports.GITHUB_API_ROOT = 'https://api.github.com';
var ROLES = exports.ROLES = {
    USER: 'user',
    ADMIN: 'admin',
    VISITOR: 'visitor'
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ENABLE_SERVER_ROUTING, 'ENABLE_SERVER_ROUTING', '/Users/liang/Projects/readr/src/isomorphic/constants/common.ts');

    __REACT_HOT_LOADER__.register(INITIAL_STATE, 'INITIAL_STATE', '/Users/liang/Projects/readr/src/isomorphic/constants/common.ts');

    __REACT_HOT_LOADER__.register(DOUBAN_API_ROOT, 'DOUBAN_API_ROOT', '/Users/liang/Projects/readr/src/isomorphic/constants/common.ts');

    __REACT_HOT_LOADER__.register(GITHUB_API_ROOT, 'GITHUB_API_ROOT', '/Users/liang/Projects/readr/src/isomorphic/constants/common.ts');

    __REACT_HOT_LOADER__.register(ROLES, 'ROLES', '/Users/liang/Projects/readr/src/isomorphic/constants/common.ts');
}();

;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lifecircle = __webpack_require__(131);

var lifecircle = _interopRequireWildcard(_lifecircle);

var _getApiRoot = __webpack_require__(129);

var _getApiRoot2 = _interopRequireDefault(_getApiRoot);

var _isServerRoutingEnabled = __webpack_require__(56);

var _isServerRoutingEnabled2 = _interopRequireDefault(_isServerRoutingEnabled);

var _redirect = __webpack_require__(133);

var _redirect2 = _interopRequireDefault(_redirect);

var _isServerEnv = __webpack_require__(130);

var _isServerEnv2 = _interopRequireDefault(_isServerEnv);

var _print = __webpack_require__(132);

var _print2 = _interopRequireDefault(_print);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _default = Object.assign({}, lifecircle, {
    getApiRoot: _getApiRoot2.default,
    isServerRoutingEnabled: _isServerRoutingEnabled2.default,
    redirect: _redirect2.default,
    isServerEnv: _isServerEnv2.default,
    print: _print2.default
});

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/helpers/index.ts');
}();

;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.collection = exports.book = exports.author = exports.tag = exports.progress = exports.file = exports.user = undefined;

var _schema = __webpack_require__(223);

var _schema2 = _interopRequireDefault(_schema);

var _i18n = __webpack_require__(14);

var _i18n2 = _interopRequireDefault(_i18n);

var _validator = __webpack_require__(71);

var _validator2 = _interopRequireDefault(_validator);

var _types = __webpack_require__(189);

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = exports.user = new _schema2.default('users', [{
    name: 'username',
    required: true,
    unique: true,
    validators: [{
        fn: _validator2.default.lengthMin(5),
        errorMsg: (0, _i18n2.default)('errors.validation.valueLimit.minLength', 'name')
    }, {
        fn: _validator2.default.lengthMax(20),
        errorMsg: (0, _i18n2.default)('errors.validation.valueLimit.maxLength', 'name')
    }]
}, {
    name: 'password',
    required: true,
    validators: [{
        fn: _validator2.default.lengthMin(6),
        errorMsg: (0, _i18n2.default)('errors.validation.valueLimit.minLength', 'password')
    }, {
        fn: _validator2.default.lengthMax(20),
        errorMsg: (0, _i18n2.default)('errors.validation.valueLimit.maxLength', 'password')
    }]
}, {
    name: 'email',
    required: true,
    unique: true,
    validators: [{
        fn: _validator2.default.isEmail,
        errorMsg: (0, _i18n2.default)('errors.validation.valueLimit.invalidFormat', 'email')
    }]
}, {
    name: 'role',
    required: true
}]);
var file = exports.file = new _schema2.default('files', [{
    name: 'filename',
    required: true
}, {
    name: 'content',
    required: true
}, {
    name: 'mimetype'
}, {
    name: 'size'
}, {
    name: 'encoding'
}, {
    name: 'hash',
    unique: true
}]);
var progress = exports.progress = new _schema2.default('reading_progress', [{
    name: 'percentage',
    required: true,
    type: _types2.default.Number
}, {
    name: 'user_id',
    type: _types2.default.ID
}, {
    name: 'book_id',
    type: _types2.default.ID
}]);
var tag = exports.tag = new _schema2.default('tags', [{
    name: 'name',
    required: true
}, {
    name: 'slug',
    unique: true
}, {
    name: 'description'
}]);
var author = exports.author = new _schema2.default('authors', [{
    name: 'name',
    required: true
}, {
    name: 'slug',
    unique: true,
    validators: [{
        fn: _validator2.default.isAlphanumeric,
        errorMsg: (0, _i18n2.default)('errors.validation.valueLimit.alphanumeric', 'slug')
    }]
}, {
    name: 'description'
}]);
var book = exports.book = new _schema2.default('books', [{
    name: 'title',
    required: true
}, {
    name: 'authors',
    ref: author,
    type: (0, _types.arrayOf)(_types2.default.ID)
}, {
    name: 'description'
}, {
    name: 'cover'
}, {
    name: 'file',
    ref: file,
    required: true
}]);
var collection = exports.collection = new _schema2.default('collections', [{
    name: 'name',
    required: true
}, {
    name: 'items',
    required: true,
    ref: book,
    type: (0, _types.arrayOf)(_types2.default.ID)
}, {
    name: 'description'
}, {
    name: 'creator',
    required: true,
    ref: user
}]);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(user, 'user', '/Users/liang/Projects/readr/src/server/data/schemas.ts');

    __REACT_HOT_LOADER__.register(file, 'file', '/Users/liang/Projects/readr/src/server/data/schemas.ts');

    __REACT_HOT_LOADER__.register(progress, 'progress', '/Users/liang/Projects/readr/src/server/data/schemas.ts');

    __REACT_HOT_LOADER__.register(tag, 'tag', '/Users/liang/Projects/readr/src/server/data/schemas.ts');

    __REACT_HOT_LOADER__.register(author, 'author', '/Users/liang/Projects/readr/src/server/data/schemas.ts');

    __REACT_HOT_LOADER__.register(book, 'book', '/Users/liang/Projects/readr/src/server/data/schemas.ts');

    __REACT_HOT_LOADER__.register(collection, 'collection', '/Users/liang/Projects/readr/src/server/data/schemas.ts');
}();

;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _database = __webpack_require__(222);

var _database2 = _interopRequireDefault(_database);

var _errors = __webpack_require__(19);

var _errors2 = _interopRequireDefault(_errors);

var _i18n = __webpack_require__(14);

var _i18n2 = _interopRequireDefault(_i18n);

var _utils = __webpack_require__(36);

var _utils2 = _interopRequireDefault(_utils);

var _validate = __webpack_require__(224);

var _validate2 = _interopRequireDefault(_validate);

var _outputEmptyEntity = __webpack_require__(68);

var _outputEmptyEntity2 = _interopRequireDefault(_outputEmptyEntity);

var _paginate = __webpack_require__(69);

var _paginate2 = _interopRequireDefault(_paginate);

var _helpers = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
    _createClass(Model, null, [{
        key: 'parseQuery',
        value: function parseQuery(idOrQuery) {
            if (typeof idOrQuery === 'undefined') {
                throw new Error('Param idOrQuery is undefined!');
            }
            return typeof idOrQuery === 'string' ? { _id: idOrQuery } : idOrQuery;
        }
    }]);

    function Model(schema) {
        _classCallCheck(this, Model);

        this._schema = schema;
        this._tableName = schema.name;
    }

    _createClass(Model, [{
        key: 'outputEmpty',
        value: function outputEmpty(id) {
            return (0, _outputEmptyEntity2.default)(this._schema.fields, id);
        }
    }, {
        key: 'findOne',
        value: function findOne(idOrQuery, raw) {
            var _this = this;

            var query = Model.parseQuery(idOrQuery);
            return this.list({ raw: raw, disablePagination: true, query: query }).then(function (result) {
                var entity = result[0];
                if (!entity) {
                    return Promise.reject((0, _helpers.notFoundIn)(_this._schema._baseTable));
                }
                return entity;
            });
        }
    }, {
        key: 'list',
        value: function list() {
            var _this2 = this;

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var raw = options.raw,
                page = options.page,
                disablePagination = options.disablePagination,
                filter = options.filter,
                mapping = options.mapping,
                query = options.query;

            return (0, _database.connect)().then(function (connection) {
                var doQuery = function doQuery() {
                    var listRaw = function listRaw(listRawQuery) {
                        return connection.collection(_this2._tableName).find(listRawQuery).toArray();
                    };
                    var rawResults = listRaw(query || {});
                    if (raw) {
                        return rawResults;
                    } else {
                        return rawResults.then(function (results) {
                            return (0, _database.embedRef)(results, _this2._schema);
                        });
                    }
                };
                return doQuery().then(function (entities) {
                    var modifiedEntities = entities.filter(filter || function () {
                        return true;
                    }).map(mapping || function (entity) {
                        return entity;
                    });
                    connection.close();
                    if (!disablePagination) {
                        return (0, _paginate2.default)(modifiedEntities, {
                            page: page || 1
                        });
                    }
                    return modifiedEntities;
                });
            });
        }
    }, {
        key: 'listRaw',
        value: function listRaw() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var filter = options.filter,
                mapping = options.mapping,
                query = options.query;

            return this.list({
                disablePagination: true,
                raw: true,
                filter: filter,
                mapping: mapping,
                query: query || {}
            });
        }
    }, {
        key: 'add',
        value: function add(data) {
            var _this3 = this;

            var query = function query() {
                var dataWithID = Object.assign({}, data, {
                    _id: Math.random().toFixed(8).substr(2),
                    date_created: new Date().toString()
                });
                // 检查是否需要确认唯一性
                var dataToCheck = _this3._schema.fields.filter(function (field) {
                    return Boolean(field.unique);
                }).map(function (field) {
                    return {
                        key: field.name,
                        value: data[field.name]
                    };
                }).filter(function (fileld) {
                    return Boolean(fileld.value);
                });
                var exec = function exec() {
                    return (0, _database.connect)().then(function (connection) {
                        var result = connection.collection(_this3._tableName).insert([dataWithID]);
                        connection.close();
                        return result;
                    });
                };
                // 过滤出和数据库中已存在数据相匹配的输入项
                if (dataToCheck.length !== 0) {
                    var checkingResult = Promise.all(dataToCheck.map(function (dataItem) {
                        return _database2.default.getRowByMatch(_defineProperty({}, dataItem.key, dataItem.value), _this3._tableName).then(function (res) {
                            if (res.length !== 0) {
                                return dataItem;
                            }
                            return false;
                        });
                    })).then(function (res) {
                        return res.filter(function (r) {
                            return r !== false;
                        });
                    });
                    return checkingResult.then(function (res) {
                        if (res.length !== 0) {
                            return Promise.reject(new _errors2.default.BadRequestError((0, _i18n2.default)('errors.schema.unique', res[0].key)));
                        }
                        return exec();
                    });
                }
                return exec();
            };
            return _utils2.default.reduceTasks([(0, _validate2.default)(data, this._schema), query]);
        }
    }, {
        key: 'update',
        value: function update(idOrQuery, data) {
            var _this4 = this;

            var updateConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var multi = updateConfig.multi,
                upsert = updateConfig.upsert;

            var query = Model.parseQuery(idOrQuery);
            var doQuery = function doQuery() {
                var data2 = Object.assign({}, data, {
                    date_updated: new Date().toString()
                });
                var exec = function exec() {
                    return (0, _database.connect)().then(function (connection) {
                        var result = connection.collection(_this4._tableName).update(query, { $set: data2 }, {
                            upsert: Boolean(upsert),
                            multi: Boolean(multi)
                        });
                        connection.close();
                        return result;
                    });
                };
                if (!upsert) {
                    return _this4.findOne(idOrQuery, true).then(function (result) {
                        return exec();
                    });
                }
                return exec();
            };
            return _utils2.default.reduceTasks([(0, _validate2.default)(data, this._schema, true), doQuery]);
        }
    }, {
        key: 'remove',
        value: function remove(idOrQuery) {
            var _this5 = this;

            var query = Model.parseQuery(idOrQuery);
            return (0, _database.connect)().then(function (connection) {
                var result = connection.collection(_this5._tableName).remove(query);
                connection.close();
                return result;
            });
        }
    }]);

    return Model;
}();

var _default = Model;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Model, 'Model', '/Users/liang/Projects/readr/src/server/models/model.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/server/models/model.ts');
}();

;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isNull2 = __webpack_require__(277);

var _isNull3 = _interopRequireDefault(_isNull2);

exports.default = i18n;

var _cn = __webpack_require__(229);

var _cn2 = _interopRequireDefault(_cn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addPadding(str) {
    if (!str) {
        return '';
    }
    if (escape(str.substr(-1)).indexOf('%u') !== 0) {
        return ' ' + str + ' ';
    }
    return str;
} /**
   * referenced ghost i18n.js, it's a simplified version
   * and I used js to store local translations instead of json
   */

function getMatchingString(msgPath) {
    var matchingString = _cn2.default;
    var path = msgPath.split('.');
    for (var i = 0; i < path.length; i++) {
        if (matchingString[path[i]]) {
            matchingString = matchingString[path[i]];
        } else {
            matchingString = null;
            break;
        }
    }
    return matchingString;
}
function addPunc(str, lang) {
    // todo: lang
    return str + '\uFF01';
}
function i18n(msgPath, value) {
    var matchingString = getMatchingString(msgPath);
    if ((0, _isNull3.default)(matchingString)) {
        console.error('Unable to find matching path [' + msgPath + '] in locale file.\n');
        matchingString = 'i18n error: path "' + msgPath + '" was not found.';
    } else {
        var placeholderIndex = matchingString.indexOf('{value}');
        if (placeholderIndex !== -1) {
            var before = matchingString.substring(0, placeholderIndex);
            var after = matchingString.substr(placeholderIndex + 7);
            var matchingValue = '';
            if (typeof value !== 'undefined') {
                matchingValue = getMatchingString('common.terms.' + value);
                if ((0, _isNull3.default)(matchingValue)) {
                    matchingValue = value;
                }
                matchingValue = addPadding(matchingValue);
            }
            matchingString = addPunc(before + matchingValue + after);
        } else {
            matchingString = addPunc(matchingString);
        }
    }
    return matchingString.trim();
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(addPadding, 'addPadding', '/Users/liang/Projects/readr/src/server/utils/i18n.ts');

    __REACT_HOT_LOADER__.register(getMatchingString, 'getMatchingString', '/Users/liang/Projects/readr/src/server/utils/i18n.ts');

    __REACT_HOT_LOADER__.register(addPunc, 'addPunc', '/Users/liang/Projects/readr/src/server/utils/i18n.ts');

    __REACT_HOT_LOADER__.register(i18n, 'i18n', '/Users/liang/Projects/readr/src/server/utils/i18n.ts');
}();

;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetForm = exports.initializeForm = undefined;

var _api = __webpack_require__(155);

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _api[key];
    }
  });
});

var _common = __webpack_require__(156);

Object.keys(_common).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _common[key];
    }
  });
});

var _test = __webpack_require__(157);

Object.keys(_test).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _test[key];
    }
  });
});

var _viewer = __webpack_require__(158);

Object.keys(_viewer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _viewer[key];
    }
  });
});

var _betterReduxForm = __webpack_require__(28);

// form
var initializeForm = exports.initializeForm = _betterReduxForm.actions.initialize;
var resetForm = exports.resetForm = _betterReduxForm.actions.reset;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initializeForm, 'initializeForm', '/Users/liang/Projects/readr/src/isomorphic/store/actions/index.ts');

  __REACT_HOT_LOADER__.register(resetForm, 'resetForm', '/Users/liang/Projects/readr/src/isomorphic/store/actions/index.ts');
}();

;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _appConfig = __webpack_require__(93);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _appConfig3 = __webpack_require__(94);

var _appConfig4 = _interopRequireDefault(_appConfig3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appConfig = _appConfig2.default;
if (process.env.NODE_ENV === 'production') {
    appConfig = _appConfig4.default;
}
var _default = appConfig;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(appConfig, 'appConfig', '/Users/liang/Projects/readr/src/app.config.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/app.config.ts');
}();

;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _notFoundError = __webpack_require__(197);

var _notFoundError2 = _interopRequireDefault(_notFoundError);

var _validationError = __webpack_require__(203);

var _validationError2 = _interopRequireDefault(_validationError);

var _badRequestError = __webpack_require__(192);

var _badRequestError2 = _interopRequireDefault(_badRequestError);

var _internalServerError = __webpack_require__(194);

var _internalServerError2 = _interopRequireDefault(_internalServerError);

var _noPermissionError = __webpack_require__(196);

var _noPermissionError2 = _interopRequireDefault(_noPermissionError);

var _unauthorizedError = __webpack_require__(201);

var _unauthorizedError2 = _interopRequireDefault(_unauthorizedError);

var _requestTooLargeError = __webpack_require__(198);

var _requestTooLargeError2 = _interopRequireDefault(_requestTooLargeError);

var _unsupportedFileTypeError = __webpack_require__(202);

var _unsupportedFileTypeError2 = _interopRequireDefault(_unsupportedFileTypeError);

var _emailError = __webpack_require__(193);

var _emailError2 = _interopRequireDefault(_emailError);

var _methodNotAllowedError = __webpack_require__(195);

var _methodNotAllowedError2 = _interopRequireDefault(_methodNotAllowedError);

var _tooManyRequestsError = __webpack_require__(200);

var _tooManyRequestsError2 = _interopRequireDefault(_tooManyRequestsError);

var _tokenRevocationError = __webpack_require__(199);

var _tokenRevocationError2 = _interopRequireDefault(_tokenRevocationError);

var _genericError = __webpack_require__(4);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
    NotFoundError: _notFoundError2.default,
    ValidationError: _validationError2.default,
    BadRequestError: _badRequestError2.default,
    InternalServerError: _internalServerError2.default,
    NoPermissionError: _noPermissionError2.default,
    UnauthorizedError: _unauthorizedError2.default,
    RequestEntityTooLargeError: _requestTooLargeError2.default,
    UnsupportedMediaTypeError: _unsupportedFileTypeError2.default,
    EmailError: _emailError2.default,
    MethodNotAllowedError: _methodNotAllowedError2.default,
    TooManyRequestsError: _tooManyRequestsError2.default,
    TokenRevocationError: _tokenRevocationError2.default,
    GenericError: _genericError2.default
};
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/server/errors/index.ts');
}();

;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = __webpack_require__(152);

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _api[key];
    }
  });
});

var api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _default = Object.assign({}, api);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/services/api/index.ts');
}();

;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getCurrentTime = __webpack_require__(181);

var _getCurrentTime2 = _interopRequireDefault(_getCurrentTime);

var _padNumberWithZero = __webpack_require__(65);

var _padNumberWithZero2 = _interopRequireDefault(_padNumberWithZero);

var _parseQuery = __webpack_require__(66);

var _parseQuery2 = _interopRequireDefault(_parseQuery);

var _parseUrlencoded = __webpack_require__(35);

var _parseUrlencoded2 = _interopRequireDefault(_parseUrlencoded);

var _dom = __webpack_require__(180);

var _dom2 = _interopRequireDefault(_dom);

var _browser = __webpack_require__(176);

var _browser2 = _interopRequireDefault(_browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = Object.assign({
    getCurrentTime: _getCurrentTime2.default,
    padNumberWithZero: _padNumberWithZero2.default,
    parseQuery: _parseQuery2.default,
    parseUrlencoded: _parseUrlencoded2.default
}, _dom2.default, _browser2.default);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/utils/index.ts');
}();

;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.computeHash = undefined;
exports.notFoundError = notFoundError;
exports.notFoundIn = notFoundIn;

var _errors = __webpack_require__(19);

var _errors2 = _interopRequireDefault(_errors);

var _i18n = __webpack_require__(14);

var _i18n2 = _interopRequireDefault(_i18n);

var _computeHash = __webpack_require__(204);

var _computeHash2 = _interopRequireDefault(_computeHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function notFoundError(itemName) {
    return new _errors2.default.NotFoundError((0, _i18n2.default)('errors.api.general.notFound', itemName));
}
function notFoundIn(collectionName) {
    return new _errors2.default.NotFoundError((0, _i18n2.default)('errors.api.general.notFoundIn', collectionName));
}
exports.computeHash = _computeHash2.default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(notFoundError, 'notFoundError', '/Users/liang/Projects/readr/src/server/helpers/index.ts');

    __REACT_HOT_LOADER__.register(notFoundIn, 'notFoundIn', '/Users/liang/Projects/readr/src/server/helpers/index.ts');
}();

;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("lodash/merge");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewer = exports.form = exports.common = undefined;

var _entities = __webpack_require__(173);

Object.keys(_entities).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _entities[key];
    }
  });
});

var _common = __webpack_require__(34);

var common = _interopRequireWildcard(_common);

var _betterReduxForm = __webpack_require__(28);

var _viewer = __webpack_require__(174);

var viewer = _interopRequireWildcard(_viewer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.common = common;
exports.form = _betterReduxForm.selectors;
exports.viewer = viewer;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("better-redux-form");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Icon = __webpack_require__(120);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Icon2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/elements/Icon/index.ts');
}();

;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Container = __webpack_require__(115);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Container2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/elements/Container/index.ts');
}();

;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

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
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(isDescendant, "isDescendant", "/Users/liang/Projects/readr/src/isomorphic/utils/dom/isDescendant.ts");
}();

;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("lodash/pick");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.callApi = callApi;

__webpack_require__(274);

var _parseUrlencoded = __webpack_require__(35);

var _parseUrlencoded2 = _interopRequireDefault(_parseUrlencoded);

var _jsonp = __webpack_require__(153);

var _jsonp2 = _interopRequireDefault(_jsonp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOptions = {
    dataType: 'json',
    method: 'GET',
    credentials: 'same-origin'
};
// return fetch options
var parseOptions = function parseOptions(originanOptions) {
    var _Object$assign = Object.assign({}, defaultOptions, originanOptions),
        method = _Object$assign.method,
        data = _Object$assign.data,
        credentials = _Object$assign.credentials,
        dataType = _Object$assign.dataType,
        useJsonp = _Object$assign.useJsonp;

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
            body = (0, _parseUrlencoded2.default)(data);
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
//   _response: any
// }
function callApi(fullUrl) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
var _default = callApi;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(defaultOptions, 'defaultOptions', '/Users/liang/Projects/readr/src/isomorphic/services/utils/callApi.ts');

    __REACT_HOT_LOADER__.register(parseOptions, 'parseOptions', '/Users/liang/Projects/readr/src/isomorphic/services/utils/callApi.ts');

    __REACT_HOT_LOADER__.register(callApi, 'callApi', '/Users/liang/Projects/readr/src/isomorphic/services/utils/callApi.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/services/utils/callApi.ts');
}();

;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pagedEntities = exports.entityPages = exports.currentPage = exports.nextPage = exports.paginationLinks = exports.paginationPages = exports.isPaginationFetching = exports.entity = exports.entities = exports.session = undefined;

var _keys2 = __webpack_require__(83);

var _keys3 = _interopRequireDefault(_keys2);

var _mapValues2 = __webpack_require__(278);

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _pick2 = __webpack_require__(32);

var _pick3 = _interopRequireDefault(_pick2);

var _get2 = __webpack_require__(13);

var _get3 = _interopRequireDefault(_get2);

var _reselect = __webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_KEY = 'default';
var session = exports.session = function session(state) {
    return (0, _get3.default)(state, ['session'], {});
};
var entities = exports.entities = function entities(name) {
    return function (state) {
        return state.entities[name] || {};
    };
};
var entity = exports.entity = function entity(name, id) {
    return function (state) {
        return (0, _get3.default)(state, ['entities', name, id], {});
    };
};
var isPaginationFetching = exports.isPaginationFetching = function isPaginationFetching(name) {
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_KEY;
    return function (state) {
        return (0, _get3.default)(state, ['pagination', name, key, 'isFetching'], true);
    };
};
var paginationPages = exports.paginationPages = function paginationPages(name) {
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_KEY;
    return function (state) {
        return (0, _get3.default)(state, ['pagination', name, key, 'pages'], {});
    };
};
var paginationLinks = exports.paginationLinks = function paginationLinks(name) {
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_KEY;
    return function (state) {
        return (0, _pick3.default)((0, _get3.default)(state.pagination, name + '.' + key, {}), ['next', 'last']);
    };
};
var nextPage = exports.nextPage = function nextPage(name) {
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_KEY;
    return (0, _reselect.createSelector)(paginationLinks(name, key), function (selectedPaginationLinks) {
        return (0, _get3.default)(selectedPaginationLinks, 'next.page', 0);
    });
};
var currentPage = exports.currentPage = function currentPage(name) {
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_KEY;
    return (0, _reselect.createSelector)(paginationLinks(name, key), function (selectedPaginationLinks) {
        var next = (0, _get3.default)(selectedPaginationLinks, 'next.page');
        var last = (0, _get3.default)(selectedPaginationLinks, 'last.page');
        return next ? next - 1 : last;
    });
};
var entityPages = exports.entityPages = function entityPages(options) {
    var entitiesName = options.entitiesName,
        paginationName = options.paginationName,
        paginationKey = options.paginationKey;

    return (0, _reselect.createSelector)(entities(entitiesName), paginationPages(paginationName, paginationKey), function (selectedEntities, pages) {
        return (0, _mapValues3.default)(pages, function (ids) {
            return ids.map(function (id) {
                return selectedEntities[id];
            }).filter(function (item) {
                return Boolean(item);
            });
        });
    });
};
var pagedEntities = exports.pagedEntities = function pagedEntities(options) {
    var page = options.page;

    return (0, _reselect.createSelector)(entityPages(options), function (pages) {
        if (page) {
            return (0, _get3.default)(pages, [page], []);
        }
        var allEntities = [];
        (0, _keys3.default)(pages).forEach(function (p) {
            allEntities = allEntities.concat(pages[p]);
        });
        return allEntities;
    });
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(DEFAULT_KEY, 'DEFAULT_KEY', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/common.ts');

    __REACT_HOT_LOADER__.register(session, 'session', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/common.ts');

    __REACT_HOT_LOADER__.register(entities, 'entities', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/common.ts');

    __REACT_HOT_LOADER__.register(entity, 'entity', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/common.ts');

    __REACT_HOT_LOADER__.register(isPaginationFetching, 'isPaginationFetching', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/common.ts');

    __REACT_HOT_LOADER__.register(paginationPages, 'paginationPages', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/common.ts');

    __REACT_HOT_LOADER__.register(paginationLinks, 'paginationLinks', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/common.ts');

    __REACT_HOT_LOADER__.register(nextPage, 'nextPage', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/common.ts');

    __REACT_HOT_LOADER__.register(currentPage, 'currentPage', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/common.ts');

    __REACT_HOT_LOADER__.register(entityPages, 'entityPages', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/common.ts');

    __REACT_HOT_LOADER__.register(pagedEntities, 'pagedEntities', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/common.ts');
}();

;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cloneDeep2 = __webpack_require__(275);

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

var _isEmpty2 = __webpack_require__(23);

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = parseUrlencoded;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// todo
function parseUrlencoded(originalObj) {
    if ((0, _isEmpty3.default)(originalObj)) {
        return '';
    }
    var object = (0, _cloneDeep3.default)(originalObj);
    var encodedurl = '';
    for (var prop in object) {
        if (_typeof(object[prop]) === 'object' && object[prop] !== null) {
            object[prop] = object[prop].toString();
        }
        encodedurl = '' + encodedurl + prop + '=' + encodeURI(object[prop]) + '&';
    }
    return encodedurl.substr(0, encodedurl.length - 1);
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(parseUrlencoded, 'parseUrlencoded', '/Users/liang/Projects/readr/src/isomorphic/utils/parseUrlencoded.ts');
}();

;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validator = __webpack_require__(71);

var _validator2 = _interopRequireDefault(_validator);

var _i18n = __webpack_require__(14);

var _i18n2 = _interopRequireDefault(_i18n);

var _pipeline = __webpack_require__(230);

var _pipeline2 = _interopRequireDefault(_pipeline);

var _reduceTasks = __webpack_require__(231);

var _reduceTasks2 = _interopRequireDefault(_reduceTasks);

var _sortByDate = __webpack_require__(232);

var _sortByDate2 = _interopRequireDefault(_sortByDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = { validator: _validator2.default, i18n: _i18n2.default, pipeline: _pipeline2.default, reduceTasks: _reduceTasks2.default, sortByDate: _sortByDate2.default };
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/server/utils/index.ts');
}();

;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".nav-link_3X0T8 {\n  color: #fff; }\n  .nav-link_3X0T8:hover {\n    color: #ddd; }\n\n.branding_8EVAt {\n  min-height: 60px;\n  background: #222; }\n\n.dropdown-menu_5Sc50 {\n  position: absolute;\n  top: 60px;\n  right: 0;\n  z-index: 999; }\n\n.username_3Mm6z,\n.nav-links_2wTYY {\n  line-height: 60px; }\n\n.nav_1oj1z, .nav--user_1L7Lb {\n  position: relative;\n  color: #fff;\n  cursor: pointer;\n  padding: 0 10px;\n  line-height: 60px;\n  display: inline-block; }\n\n.dropdown-recent-reading_2oyjH {\n  margin-right: 15px; }\n\n.nav--user_1L7Lb {\n  float: right; }\n\n.nav-link_3X0T8 {\n  padding: 0 5px; }\n\n.nav-item_f83bh {\n  display: inline-block; }\n\n.recent-reading_1kJKh {\n  margin-right: 15px; }\n", ""]);

// exports
exports.locals = {
	"nav-link": "nav-link_3X0T8",
	"branding": "branding_8EVAt",
	"dropdown-menu": "dropdown-menu_5Sc50",
	"username": "username_3Mm6z",
	"nav-links": "nav-links_2wTYY",
	"nav": "nav_1oj1z",
	"nav--user": "nav--user_1L7Lb",
	"dropdown-recent-reading": "dropdown-recent-reading_2oyjH",
	"nav-item": "nav-item_f83bh",
	"recent-reading": "recent-reading_1kJKh"
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(241);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Dropdown.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Dropdown.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(245);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Modal.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Modal.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("humps");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("lodash/isNil");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("lodash/last");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(284);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _BodyClass = __webpack_require__(106);

var _BodyClass2 = _interopRequireDefault(_BodyClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DocContainer = function (_Component) {
    _inherits(DocContainer, _Component);

    function DocContainer() {
        _classCallCheck(this, DocContainer);

        return _possibleConstructorReturn(this, (DocContainer.__proto__ || Object.getPrototypeOf(DocContainer)).apply(this, arguments));
    }

    _createClass(DocContainer, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                bodyClass = _props.bodyClass,
                title = _props.title,
                head = _props.head;

            var helmetProps = Object.assign({}, head, {
                title: title
            });
            return _react2.default.createElement("div", { className: 'gb-doc-container' }, _react2.default.createElement(_reactHelmet2.default, Object.assign({}, helmetProps)), _react2.default.createElement(_BodyClass2.default, { className: bodyClass }, this.props.children));
        }
    }]);

    return DocContainer;
}(_react.Component);

DocContainer.rewind = function () {
    var bodyClass = _BodyClass2.default.rewind();
    var head = _reactHelmet2.default.rewind();
    return {
        head: head,
        bodyClass: bodyClass
    };
};
var _default = DocContainer;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(DocContainer, 'DocContainer', '/Users/liang/Projects/readr/src/isomorphic/containers/DocContainer.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/containers/DocContainer.tsx');
}();

;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = undefined;

var _Container = __webpack_require__(30);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Container = _Container2.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEqual");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("lodash/map");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Logo = __webpack_require__(103);

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Logo2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/components/Logo/index.ts');
}();

;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DOCTYPE = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _common = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DOCTYPE = exports.DOCTYPE = '<!DOCTYPE html>';
var AppDoc = function AppDoc(props) {
    var bodyScript = props.script,
        otherLink = props.link,
        bodyClass = props.bodyClass,
        appMarkup = props.appMarkup,
        initialState = props.initialState,
        _props$helmetHeadObje = props.helmetHeadObject,
        title = _props$helmetHeadObje.title,
        meta = _props$helmetHeadObje.meta,
        helmetLink = _props$helmetHeadObje.link,
        headScript = _props$helmetHeadObje.script,
        masterTitle = props.title;

    return _react2.default.createElement("html", { lang: "zh-CN" }, _react2.default.createElement("head", null, _react2.default.createElement("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge,chrome=1" }), _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1, user-scalable=no" }), _react2.default.createElement("meta", { name: "description", content: "" }), masterTitle ? _react2.default.createElement("title", null, masterTitle || title && title.toString()) : title && title.toComponent(), meta && meta.toComponent(), helmetLink && helmetLink.toComponent(), otherLink && otherLink.map(function (link, index) {
        var href = void 0;
        var rel = 'stylesheet';
        if (typeof link === 'string') {
            href = link;
        } else {
            href = link.href;
            if (link.rel) {
                rel = link.rel;
            }
        }
        return _react2.default.createElement("link", { key: index, href: href, rel: rel });
    }), headScript && headScript.toComponent()), _react2.default.createElement("body", Object.assign({}, bodyClass && { className: bodyClass }), props.children, typeof appMarkup === 'string' ? _react2.default.createElement("div", { id: "root", dangerouslySetInnerHTML: { __html: appMarkup || '' } }) : _react2.default.createElement("div", { id: "root" }, appMarkup), initialState && _react2.default.createElement("script", { dangerouslySetInnerHTML: { __html: 'var ' + _common.INITIAL_STATE + ' = ' + JSON.stringify(initialState || {}) + ';' } }), bodyScript && bodyScript.map(function (script, index) {
        if (typeof script === 'string') {
            return _react2.default.createElement("script", { key: index, src: script });
        }
        var src = script.src,
            type = script.type,
            innerHTML = script.innerHTML;

        return _react2.default.createElement("script", { key: index, src: src, type: type || 'text/javascript', dangerouslySetInnerHTML: { __html: innerHTML } });
    })));
};
AppDoc['defaultProps'] = {
    helmetHeadObject: {}
};
var _default = AppDoc;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(DOCTYPE, 'DOCTYPE', '/Users/liang/Projects/readr/src/isomorphic/containers/AppDoc.tsx');

    __REACT_HOT_LOADER__.register(AppDoc, 'AppDoc', '/Users/liang/Projects/readr/src/isomorphic/containers/AppDoc.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/containers/AppDoc.tsx');
}();

;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEmpty2 = __webpack_require__(23);

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _reactRouter = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// type TProps = {
//   store: any
//   renderProps: any
//   renderPageContent?: boolean
// }
var ServerSideAppRoot = function ServerSideAppRoot(props) {
    var store = props.store,
        renderProps = props.renderProps,
        renderPageContent = props.renderPageContent;

    return !(0, _isEmpty3.default)(renderProps) && _react2.default.createElement(_reactRedux.Provider, { store: store }, renderPageContent ? _react2.default.createElement(_reactRouter.RouterContext, Object.assign({}, renderProps)) : _react2.default.createElement("div", { className: "text-loading" }, "Loading..."));
};
var _default = ServerSideAppRoot;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ServerSideAppRoot, 'ServerSideAppRoot', '/Users/liang/Projects/readr/src/isomorphic/containers/ServerSideAppRoot.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/containers/ServerSideAppRoot.tsx');
}();

;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Icon = __webpack_require__(29);

var _Icon2 = _interopRequireDefault(_Icon);

var _reactCssModules = __webpack_require__(5);

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

var styles = __webpack_require__(72);
var Alert = function (_Component) {
    _inherits(Alert, _Component);

    function Alert() {
        _classCallCheck(this, Alert);

        return _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).apply(this, arguments));
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
var _default = Alert;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/isomorphic/elements/Alert/Alert.tsx");

    __REACT_HOT_LOADER__.register(Alert, "Alert", "/Users/liang/Projects/readr/src/isomorphic/elements/Alert/Alert.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/isomorphic/elements/Alert/Alert.tsx");
}();

;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownItemSep = exports.Dropdown = exports.DropdownItem = undefined;

var _Dropdown = __webpack_require__(116);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _DropdownItem = __webpack_require__(117);

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

var _DropdownItemSep = __webpack_require__(118);

var _DropdownItemSep2 = _interopRequireDefault(_DropdownItemSep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DropdownItem = _DropdownItem2.default;
exports.Dropdown = _Dropdown2.default;
exports.DropdownItemSep = _DropdownItemSep2.default;
var _default = _Dropdown2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/elements/Dropdown/index.ts');
}();

;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEqual2 = __webpack_require__(47);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(283);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = __webpack_require__(24);

var _utils2 = _interopRequireDefault(_utils);

var _Fade = __webpack_require__(87);

var _Fade2 = _interopRequireDefault(_Fade);

var _Modal = __webpack_require__(39);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
    _inherits(Modal, _Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

        _this.state = {
            modalHeight: 0,
            isModalHidden: false,
            isModalVerticalCenter: true,
            clicks: 0
        };
        _this.setView = _this.setView.bind(_this);
        _this.hideModal = _this.hideModal.bind(_this);
        return _this;
    }

    _createClass(Modal, [{
        key: 'hideModal',
        value: function hideModal() {
            this.props.onRequestClose();
            _utils2.default.unlockScroll();
        }
    }, {
        key: 'setView',
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
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {}
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !(0, _isEqual3.default)(this.state, nextState) || !(0, _isEqual3.default)(this.props, nextProps);
        }
    }, {
        key: 'componentDidUpdate',
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
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.setView);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var open = this.props.open;

            var defaultClass = 'modal';
            var modalId = 'modal-' + new Date().valueOf();
            var className = this.props.className ? defaultClass + ' ' + this.props.className : defaultClass;
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
            return _react2.default.createElement(_Fade2.default, null, open === true && _react2.default.createElement("div", { onClick: function onClick(e) {
                    // 使用阻止冒泡会造成问题
                    if (e.target.querySelector('#' + modalId)) {
                        _this2.hideModal();
                    }
                }, className: _Modal2.default['modal-backdrop'], style: style.backdrop }, _react2.default.createElement("div", { id: modalId, style: style.modal, className: _Modal2.default['modal'] + ' ' + className, ref: function ref(_ref) {
                    _this2.modal = _ref;
                } }, this.props.children)));
        }
    }]);

    return Modal;
}(_react.Component);

var _default = Modal;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Modal, 'Modal', '/Users/liang/Projects/readr/src/isomorphic/elements/Modal/Modal.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/elements/Modal/Modal.tsx');
}();

;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfirmModal = exports.ModalPlus = undefined;

var _Modal = __webpack_require__(54);

Object.keys(_Modal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Modal[key];
    }
  });
});

var _Modal2 = _interopRequireDefault(_Modal);

var _ModalPlus = __webpack_require__(124);

var _ModalPlus2 = _interopRequireDefault(_ModalPlus);

var _ConfirmModal = __webpack_require__(123);

var _ConfirmModal2 = _interopRequireDefault(_ConfirmModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Modal2.default;
exports.default = _default;
exports.ModalPlus = _ModalPlus2.default;
exports.ConfirmModal = _ConfirmModal2.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/elements/Modal/index.ts');
}();

;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isServerRoutingEnabled;

var _common = __webpack_require__(8);

function isServerRoutingEnabled() {
    return Boolean(window[_common.ENABLE_SERVER_ROUTING]);
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(isServerRoutingEnabled, 'isServerRoutingEnabled', '/Users/liang/Projects/readr/src/isomorphic/helpers/isServerRoutingEnabled.ts');
}();

;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _normalizr = __webpack_require__(76);

var book = new _normalizr.Schema('books', {
    idAttribute: 'id'
});
var bookContent = new _normalizr.Schema('bookContents', {
    idAttribute: 'id'
});
var author = new _normalizr.Schema('authors', {
    idAttribute: 'id'
});
var collection = new _normalizr.Schema('bookCollections', {
    idAttribute: 'id'
});
collection.define({
    items: (0, _normalizr.arrayOf)(book)
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
var shelfBook = new _normalizr.Schema('shelfBooks', {
    idAttribute: 'id'
});
var bookProgress = new _normalizr.Schema('bookProgress', {
    idAttribute: 'bookId'
});
var matchedBooks = new _normalizr.Schema('books', {
    idAttribute: 'bookId'
});
var _default = {
    BOOK: book,
    BOOK_CONTENT: bookContent,
    BOOK_PROGRESS: bookProgress,
    BOOK_ARRAY: (0, _normalizr.arrayOf)(book),
    DOUBAN_BOOK_SEARCH_RESULTS: { books: (0, _normalizr.arrayOf)(doubanBook) },
    USER_ARRAY: (0, _normalizr.arrayOf)(user),
    MATCHED_BOOK_ARRAY: (0, _normalizr.arrayOf)(matchedBooks),
    COLLECTION: collection,
    COLLECTION_ARRAY: (0, _normalizr.arrayOf)(collection),
    PROFILE: profile,
    AUTHOR: author,
    AUTHOR_ARRAY: (0, _normalizr.arrayOf)(author),
    SHELF_BOOK_ARRAY: (0, _normalizr.arrayOf)(shelfBook)
};
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(book, 'book', '/Users/liang/Projects/readr/src/isomorphic/services/schemas.ts');

    __REACT_HOT_LOADER__.register(bookContent, 'bookContent', '/Users/liang/Projects/readr/src/isomorphic/services/schemas.ts');

    __REACT_HOT_LOADER__.register(author, 'author', '/Users/liang/Projects/readr/src/isomorphic/services/schemas.ts');

    __REACT_HOT_LOADER__.register(collection, 'collection', '/Users/liang/Projects/readr/src/isomorphic/services/schemas.ts');

    __REACT_HOT_LOADER__.register(profile, 'profile', '/Users/liang/Projects/readr/src/isomorphic/services/schemas.ts');

    __REACT_HOT_LOADER__.register(user, 'user', '/Users/liang/Projects/readr/src/isomorphic/services/schemas.ts');

    __REACT_HOT_LOADER__.register(doubanBook, 'doubanBook', '/Users/liang/Projects/readr/src/isomorphic/services/schemas.ts');

    __REACT_HOT_LOADER__.register(shelfBook, 'shelfBook', '/Users/liang/Projects/readr/src/isomorphic/services/schemas.ts');

    __REACT_HOT_LOADER__.register(bookProgress, 'bookProgress', '/Users/liang/Projects/readr/src/isomorphic/services/schemas.ts');

    __REACT_HOT_LOADER__.register(matchedBooks, 'matchedBooks', '/Users/liang/Projects/readr/src/isomorphic/services/schemas.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/services/schemas.ts');
}();

;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign2 = __webpack_require__(3);

var _assign3 = _interopRequireDefault(_assign2);

var _get2 = __webpack_require__(13);

var _get3 = _interopRequireDefault(_get2);

var _normalizr = __webpack_require__(76);

var _parseQuery = __webpack_require__(66);

var _parseQuery2 = _interopRequireDefault(_parseQuery);

var _humps = __webpack_require__(40);

var _humps2 = _interopRequireDefault(_humps);

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
        page: parseInt((0, _get3.default)((0, _parseQuery2.default)(url.split('?')[1] || ''), 'page', 0), 10),
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
    var json = _ref.json,
        _response = _ref._response;

    var camelizedJson = _humps2.default.camelizeKeys(json);

    var _parseResHeaderToPagi = parseResHeaderToPagination(_response),
        next = _parseResHeaderToPagi.next,
        last = _parseResHeaderToPagi.last;

    if (typeof schema !== 'undefined') {
        return (0, _assign3.default)({}, (0, _normalizr.normalize)(camelizedJson, schema), {
            _next: next,
            _last: last
        });
    }
    return camelizedJson;
}
var _default = handleResponse;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(parseHeaderPageLinkByRel, 'parseHeaderPageLinkByRel', '/Users/liang/Projects/readr/src/isomorphic/services/utils/handleResponse.ts');

    __REACT_HOT_LOADER__.register(parseResHeaderToPagination, 'parseResHeaderToPagination', '/Users/liang/Projects/readr/src/isomorphic/services/utils/handleResponse.ts');

    __REACT_HOT_LOADER__.register(handleResponse, 'handleResponse', '/Users/liang/Projects/readr/src/isomorphic/services/utils/handleResponse.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/services/utils/handleResponse.ts');
}();

;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var REQUEST = 'REQUEST';
var SUCCESS = 'SUCCESS';
var FAILURE = 'FAILURE';
var LOAD_CACHE = 'LOAD_CACHE';
var action = exports.action = function action(type) {
    var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.assign({}, {
        type: type
    }, payload);
};
var createRequestTypes = exports.createRequestTypes = function createRequestTypes(base) {
    return [REQUEST, SUCCESS, FAILURE, LOAD_CACHE].reduce(function (acc, type) {
        acc[type] = 'api/' + base + '/' + type;
        return acc;
    }, {});
};
var createComponentActionType = exports.createComponentActionType = function createComponentActionType(name, operation) {
    return 'components/' + name + '/' + operation;
};
var createSagaTriggerActionType = exports.createSagaTriggerActionType = function createSagaTriggerActionType(operation) {
    return 'saga-triggers/' + operation;
};
var createActionEntity = exports.createActionEntity = function createActionEntity(requestTypes) {
    return {
        request: function request(payload) {
            return action(requestTypes.REQUEST, payload);
        },
        success: function success(response, payload) {
            return action(requestTypes.SUCCESS, Object.assign({}, { response: response }, payload));
        },
        // TODO
        loadCache: function loadCache(response, payload) {
            return action(requestTypes.SUCCESS, Object.assign({}, { response: response }, payload, { loadedFromCache: true }));
        },
        failure: function failure(error, payload) {
            return action(requestTypes.FAILURE, Object.assign({}, { error: error }, payload));
        }
    };
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(REQUEST, 'REQUEST', '/Users/liang/Projects/readr/src/isomorphic/store/actions/utils.ts');

    __REACT_HOT_LOADER__.register(SUCCESS, 'SUCCESS', '/Users/liang/Projects/readr/src/isomorphic/store/actions/utils.ts');

    __REACT_HOT_LOADER__.register(FAILURE, 'FAILURE', '/Users/liang/Projects/readr/src/isomorphic/store/actions/utils.ts');

    __REACT_HOT_LOADER__.register(LOAD_CACHE, 'LOAD_CACHE', '/Users/liang/Projects/readr/src/isomorphic/store/actions/utils.ts');

    __REACT_HOT_LOADER__.register(action, 'action', '/Users/liang/Projects/readr/src/isomorphic/store/actions/utils.ts');

    __REACT_HOT_LOADER__.register(createRequestTypes, 'createRequestTypes', '/Users/liang/Projects/readr/src/isomorphic/store/actions/utils.ts');

    __REACT_HOT_LOADER__.register(createComponentActionType, 'createComponentActionType', '/Users/liang/Projects/readr/src/isomorphic/store/actions/utils.ts');

    __REACT_HOT_LOADER__.register(createSagaTriggerActionType, 'createSagaTriggerActionType', '/Users/liang/Projects/readr/src/isomorphic/store/actions/utils.ts');

    __REACT_HOT_LOADER__.register(createActionEntity, 'createActionEntity', '/Users/liang/Projects/readr/src/isomorphic/store/actions/utils.ts');
}();

;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _omit2 = __webpack_require__(7);

var _omit3 = _interopRequireDefault(_omit2);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _callApi = __webpack_require__(33);

var _callApi2 = _interopRequireDefault(_callApi);

var _helpers = __webpack_require__(10);

var _helpers2 = _interopRequireDefault(_helpers);

var _handleResponse = __webpack_require__(58);

var _handleResponse2 = _interopRequireDefault(_handleResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(store) {
    return function (next) {
        return function (action) {
            var CALL_API = action.CALL_API;
            if (typeof CALL_API === 'undefined') {
                return next(action);
            }
            var endpoint = CALL_API.endpoint,
                apiUrl = CALL_API.apiUrl,
                options = CALL_API.options,
                pagination = CALL_API.pagination;
            var types = CALL_API.types,
                schema = CALL_API.schema;

            var _types = _slicedToArray(types, 3),
                requestType = _types[0],
                successType = _types[1],
                failureType = _types[2];

            var actionWith = function actionWith(_ref) {
                var data = _ref.data,
                    hasPagination = _ref.hasPagination;

                var finalAction = Object.assign({}, action, data);
                finalAction = (0, _omit3.default)(finalAction, ['CALL_API']);
                if (!hasPagination) {
                    finalAction = (0, _omit3.default)(finalAction, ['CALL_API', 'pagination']);
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
                apiUrl = _helpers2.default.getApiRoot();
            }
            var fullUrl = apiUrl + '/' + endpoint;
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
                            error: error
                        },
                        hasPagination: Boolean(pagination)
                    }));
                    return {
                        ok: false,
                        error: error
                    };
                });
            });
        };
    };
};

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/store/middleware/api.ts');
}();

;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _default = function _default(store) {
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

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/store/middleware/handleServerStore.ts');
}();

;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _default = function _default(store) {
    return function (next) {
        return function (action) {
            console.info(action.type);
            next(action);
        };
    };
};

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/isomorphic/store/middleware/logActionTypes.ts");
}();

;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionTypes = __webpack_require__(6);

var ACTION_TYPES = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _default = function _default(store) {
    return function (next) {
        return function (action) {
            if (action.type === ACTION_TYPES.DOUBAN_BOOKS.SUCCESS) {
                action.response.result = action.response.result.books;
            }
            return next(action);
        };
    };
};

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/store/middleware/modifyResponse.ts');
}();

;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RESERVED_ACTION_KYES = exports.API_CONFIG_KEYS = undefined;

var _isUndefined2 = __webpack_require__(75);

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _assign2 = __webpack_require__(3);

var _assign3 = _interopRequireDefault(_assign2);

exports.fetchEntity = fetchEntity;

var _cache = __webpack_require__(111);

var cache = _interopRequireWildcard(_cache);

var _effects = __webpack_require__(16);

var _app = __webpack_require__(18);

var _app2 = _interopRequireDefault(_app);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [fetchEntity].map(regeneratorRuntime.mark);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var OPTIONS = 'options';
var ID = 'id';
var DATA = 'data';
var TYPE = 'type';
var API_CONFIG_KEYS = exports.API_CONFIG_KEYS = [OPTIONS, ID, DATA];
var RESERVED_ACTION_KYES = exports.RESERVED_ACTION_KYES = [TYPE].concat(API_CONFIG_KEYS);
// TODO
// 似乎需要优化，缓存的逻辑和获取的耦合太深了
function fetchEntity(entity, apiFn, apiConfig, payload) {
    var fullPayload, id, options, apiArgs, hasCache, cacheId, cacheContent, action, _ref, response, error, _action, _action2;

    return regeneratorRuntime.wrap(function fetchEntity$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    fullPayload = (0, _assign3.default)({}, apiConfig, payload);
                    id = apiConfig[ID];
                    options = apiConfig[OPTIONS];
                    apiArgs = [id, options].filter(function (arg) {
                        return !(0, _isUndefined3.default)(arg);
                    });
                    hasCache = void 0;
                    cacheId = void 0;

                    if (!(id && _app2.default.enableEntityCache)) {
                        _context.next = 17;
                        break;
                    }

                    cacheId = cache.createCacheId(apiFn + id + options);
                    cacheContent = cache.getCache(cacheId);

                    hasCache = Boolean(cacheContent);

                    if (!hasCache) {
                        _context.next = 17;
                        break;
                    }

                    action = entity.loadCache(cacheContent, fullPayload);
                    _context.next = 14;
                    return (0, _effects.put)(entity.request(fullPayload));

                case 14:
                    _context.next = 16;
                    return (0, _effects.put)(action);

                case 16:
                    return _context.abrupt('return', action);

                case 17:
                    _context.next = 19;
                    return (0, _effects.put)(entity.request(fullPayload));

                case 19:
                    _context.next = 21;
                    return _effects.call.apply(undefined, [apiFn].concat(_toConsumableArray(apiArgs)));

                case 21:
                    _ref = _context.sent;
                    response = _ref.response;
                    error = _ref.error;

                    if (!response) {
                        _context.next = 32;
                        break;
                    }

                    // 如果是 undefined 也不会有任何处理
                    if (hasCache === false) {
                        cache.setCache(cacheId, response);
                    }
                    _action = entity.success(response, fullPayload);
                    _context.next = 29;
                    return (0, _effects.put)(_action);

                case 29:
                    return _context.abrupt('return', _action);

                case 32:
                    _action2 = entity.failure(error, fullPayload);
                    _context.next = 35;
                    return (0, _effects.put)(_action2);

                case 35:
                    return _context.abrupt('return', _action2);

                case 36:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(OPTIONS, 'OPTIONS', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/utils.ts');

    __REACT_HOT_LOADER__.register(ID, 'ID', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/utils.ts');

    __REACT_HOT_LOADER__.register(DATA, 'DATA', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/utils.ts');

    __REACT_HOT_LOADER__.register(TYPE, 'TYPE', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/utils.ts');

    __REACT_HOT_LOADER__.register(API_CONFIG_KEYS, 'API_CONFIG_KEYS', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/utils.ts');

    __REACT_HOT_LOADER__.register(RESERVED_ACTION_KYES, 'RESERVED_ACTION_KYES', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/utils.ts');

    __REACT_HOT_LOADER__.register(fetchEntity, 'fetchEntity', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/utils.ts');
}();

;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = padNumberWithZero;
function padNumberWithZero(num) {
    var numStrWithZero = void 0;
    if (num < 10) {
        numStrWithZero = '0' + num.toString();
    } else {
        numStrWithZero = num.toString();
    }
    return numStrWithZero;
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(padNumberWithZero, 'padNumberWithZero', '/Users/liang/Projects/readr/src/isomorphic/utils/padNumberWithZero.ts');
}();

;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = parseQuery;
function parseQuery(queryString) {
    var params = queryString.split('&');
    var object = {};
    params.forEach(function (param) {
        var key = param.split('=')[0];
        var val = param.split('=')[1];
        object[key] = val;
    });
    return object;
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(parseQuery, 'parseQuery', '/Users/liang/Projects/readr/src/isomorphic/utils/parseQuery.ts');
}();

;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign2 = __webpack_require__(3);

var _assign3 = _interopRequireDefault(_assign2);

exports.readFile = readFile;
exports.delFile = delFile;

var _model = __webpack_require__(12);

var _model2 = _interopRequireDefault(_model);

var _schemas = __webpack_require__(11);

var schemas = _interopRequireWildcard(_schemas);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fileModel = new _model2.default(schemas.file);
function readFile(fileId, parser) {
    return fileModel.findOne(fileId).then(function (fileResult) {
        if (parser && typeof parser === 'function') {
            var binaryFile = fileResult.content.buffer;
            return parser(binaryFile).then(function (content) {
                return (0, _assign3.default)({}, fileResult, {
                    content: content
                });
            });
        }
        return fileResult;
    });
}
// TODO
function delFile(fileId) {
    return fileModel.findOne(fileId).then(function (resultFile) {
        return fileModel.remove(fileId);
    }, function (error) {
        if (error.type === 'NotFoundError') {
            return {
                message: 'File record not found, probably because it doesn\'t exist, or hasn\'t been created in the first place!'
            };
        }
        return Promise.reject(error);
    });
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(fileModel, 'fileModel', '/Users/liang/Projects/readr/src/server/api/file.ts');

    __REACT_HOT_LOADER__.register(readFile, 'readFile', '/Users/liang/Projects/readr/src/server/api/file.ts');

    __REACT_HOT_LOADER__.register(delFile, 'delFile', '/Users/liang/Projects/readr/src/server/api/file.ts');
}();

;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign2 = __webpack_require__(3);

var _assign3 = _interopRequireDefault(_assign2);

exports.default = outputEmptyEntity;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function outputEmptyEntity(fields) {
    var idObjOrIdString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // id 可以为对象，此时会直接被扩展到输出结果里面
    var idObj = idObjOrIdString;
    if (typeof idObjOrIdString === 'string') {
        idObj = { _id: idObjOrIdString };
    }
    var entity = {};
    fields.forEach(function (field) {
        // todo
        // 添加类型判断
        entity[field.name] = '';
    });
    return (0, _assign3.default)({}, entity, idObj);
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(outputEmptyEntity, 'outputEmptyEntity', '/Users/liang/Projects/readr/src/server/models/output-empty-entity.ts');
}();

;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = paginate;
var defaultOptions = {
    page: 1,
    limit: 10,
    order: 'new'
};
function paginate(results, options) {
    var _Object$assign = Object.assign({}, defaultOptions, options),
        page = _Object$assign.page,
        limit = _Object$assign.limit,
        order = _Object$assign.order;
    // query 里面传过来的都是 string


    page = parseInt(page, 10);
    // 如果 page 小于 0 则当做 1 来处理，大于最大页面则不管
    // 此逻辑参照 GitHub api
    page = page <= 0 ? 1 : page;
    limit = parseInt(limit, 10);
    if (order === 'new') {
        results.reverse();
    }
    var startIndex = (page - 1) * limit;
    return {
        entities: results.slice(startIndex, limit + startIndex),
        _pagination: {
            current: page,
            all: Math.ceil(results.length / limit) || 1
        }
    };
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(defaultOptions, 'defaultOptions', '/Users/liang/Projects/readr/src/server/models/paginate.ts');

    __REACT_HOT_LOADER__.register(paginate, 'paginate', '/Users/liang/Projects/readr/src/server/models/paginate.ts');
}();

;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var colors = __webpack_require__(268);
var print = {
    info: function info(message) {
        console.info('\n' + colors.bgGreen.bold.white(' INFO '), colors.green(message));
    },
    test: function test(message) {
        console.info('\n' + colors.bgCyan.bold.black(' INFO '), (typeof message === 'undefined' ? 'undefined' : _typeof(message)) !== 'object' ? colors.cyan(message) : message);
    },
    warn: function warn(message) {
        console.error('\n' + colors.bgYellow.bold.black(' WARNING '), (typeof message === 'undefined' ? 'undefined' : _typeof(message)) !== 'object' ? colors.yellow(message) : message);
    },
    error: function error(message) {
        console.error('\n' + colors.bgRed.bold.white(' ERROR '), (typeof message === 'undefined' ? 'undefined' : _typeof(message)) !== 'object' ? colors.red(message) : message);
    }
};
var _default = print;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(print, 'print', '/Users/liang/Projects/readr/src/server/utils/print.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/server/utils/print.ts');
}();

;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var validator = __webpack_require__(289);
var additionalValidators = {
    lengthMin: function lengthMin(len) {
        return function (input) {
            return input.length >= len;
        };
    },
    lengthMax: function lengthMax(len) {
        return function (input) {
            return input.length <= len;
        };
    }
};

var _default = Object.assign({}, validator, additionalValidators);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(additionalValidators, 'additionalValidators', '/Users/liang/Projects/readr/src/server/utils/validator.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/server/utils/validator.ts');
}();

;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(239);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Alert.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Alert.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("lodash/isUndefined");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("normalizr");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _initialize = __webpack_require__(205);

var _initialize2 = _interopRequireDefault(_initialize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _initialize2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/server/index.ts');
}();

;

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Textarea = exports.SelectizeInput = exports.Input = exports.Button = undefined;

var _Button = __webpack_require__(86);

var _Button2 = _interopRequireDefault(_Button);

var _Input = __webpack_require__(88);

var _Input2 = _interopRequireDefault(_Input);

var _SelectizeInput = __webpack_require__(126);

var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);

var _Textarea = __webpack_require__(128);

var _Textarea2 = _interopRequireDefault(_Textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Button = _Button2.default;
exports.Input = _Input2.default;
exports.SelectizeInput = _SelectizeInput2.default;
exports.Textarea = _Textarea2.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("lodash/keys");

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _form = __webpack_require__(82);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = __webpack_require__(261);
function ModalFooter(props) {
    var onConfirm = props.onConfirm,
        onCancel = props.onCancel;

    return _react2.default.createElement("div", { className: styles['modal-footer'] }, _react2.default.createElement(_form.Button, { color: "blue", onClick: onConfirm }, '\u786E\u8BA4'), onCancel && _react2.default.createElement(_form.Button, { color: "white", onClick: onCancel }, '\u53D6\u6D88'));
}
var _default = ModalFooter;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ModalFooter, 'ModalFooter', '/Users/liang/Projects/readr/src/isomorphic/elements/Modal/ModalFooter.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/elements/Modal/ModalFooter.tsx');
}();

;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var THEMES = exports.THEMES = {
    WHITE: 'WHITE',
    NIGHT: 'NIGHT',
    SEPIA: 'SEPIA'
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(THEMES, 'THEMES', '/Users/liang/Projects/readr/src/isomorphic/constants/viewerDefs.ts');
}();

;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Button = __webpack_require__(114);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Button2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/elements/Button/index.ts');
}();

;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Fade = __webpack_require__(119);

var _Fade2 = _interopRequireDefault(_Fade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Fade2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/elements/Fade/index.ts');
}();

;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Input = __webpack_require__(122);

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Input2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/elements/Input/index.ts');
}();

;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getNodeHeights = getNodeHeights;
exports.groupNodesByPage = groupNodesByPage;
exports.groupPageFromChapters = groupPageFromChapters;
exports.resolveBookLocation = resolveBookLocation;

var _helpers = __webpack_require__(10);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = __webpack_require__(90);
// 暂不支持包含图片的计算
// 计算没有等待图片加载完成，所以结果是不正确的
function getNodeHeights(nodes) {
    var nodesHeight = [];
    Array.prototype.forEach.call(nodes, function (node, index) {
        if (node.className !== styles['gb-line']) {
            console.error('Unsupported content found!');
        }
        nodesHeight.push(node.clientHeight);
    });
    return nodesHeight;
}
// long paragraph situation doesn't seem to affect this function
// offset distance is always negtive or zero
// the index will be of the paragraph with this offset at the end
function getPageOffset(_ref) {
    var pageIndex = _ref.pageIndex,
        pageHeight = _ref.pageHeight,
        nodeHeights = _ref.nodeHeights;

    var offset = 0;
    var nodeIndex = 0;
    var nodeStartIndex = void 0;
    if (pageIndex !== 0) {
        var nodeHeightSum = 0;
        while (nodeHeightSum <= pageHeight * pageIndex) {
            nodeHeightSum += nodeHeights[nodeIndex];
            nodeIndex++;
        }
        offset = nodeHeightSum - nodeHeights[nodeIndex - 1] - pageIndex * pageHeight;
        nodeStartIndex = nodeIndex - 1;
    } else {
        nodeStartIndex = 0;
    }
    return { offset: offset, nodeStartIndex: nodeStartIndex };
}
function getNodesOfPage(_ref2) {
    var pageIndex = _ref2.pageIndex,
        nodes = _ref2.nodes,
        pageHeight = _ref2.pageHeight,
        nodeHeights = _ref2.nodeHeights;

    var _getPageOffset = getPageOffset({ pageIndex: pageIndex, pageHeight: pageHeight, nodeHeights: nodeHeights }),
        offset = _getPageOffset.offset,
        nodeStartIndex = _getPageOffset.nodeStartIndex;

    var nodeIndex = nodeStartIndex;
    var nodeEndIndex = void 0;
    var pageNodes = [];
    var nodeHeightSum = offset + nodeHeights[nodeStartIndex];
    nodeIndex++;
    if (nodeHeightSum < pageHeight) {
        while (nodeHeightSum <= pageHeight && nodeIndex !== nodes.length) {
            nodeHeightSum += nodeHeights[nodeIndex];
            nodeIndex++;
        }
        nodeEndIndex = nodeIndex - 1;
    } else {
        nodeEndIndex = nodeStartIndex;
    }
    for (var i = nodeStartIndex; i <= nodeEndIndex && i <= nodes.length - 1; i++) {
        pageNodes.push(nodes[i]);
    }
    return { pageNodes: pageNodes, offset: offset };
}
function groupNodesByPage(nodes, nodeHeights, pageHeight) {
    var pageStartFrom = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var chapterId = arguments[4];

    var pages = [];
    var pageHeightSum = nodeHeights.reduce(function (a, b) {
        return a + b;
    }, 0);
    var pageSum = Math.ceil(pageHeightSum / pageHeight);
    if (nodeHeights.length === 0) {
        return [{
            nodes: nodes,
            meta: {
                pageNo: 1 + pageStartFrom,
                offset: 0,
                chapterId: chapterId
            }
        }];
    }
    // finally

    var _loop = function _loop(i) {
        var _getNodesOfPage = getNodesOfPage({ pageIndex: i, nodes: nodes, nodeHeights: nodeHeights, pageHeight: pageHeight }),
            pageNodes = _getNodesOfPage.pageNodes,
            offset = _getNodesOfPage.offset;

        var findIdOfHTags = function findIdOfHTags(mdNode) {
            var pattern = /<h\d id="(.*)">(.*)<\/h\d>/;
            var result = mdNode.match(pattern);
            if (result) {
                return result[1];
            }
            return null;
        };
        var hash = pageNodes.map(function (node) {
            return findIdOfHTags(node);
        }).filter(function (id) {
            return Boolean(id);
        });
        pages.push({
            nodes: pageNodes,
            meta: {
                pageNo: pageStartFrom + i + 1,
                offset: offset,
                chapterId: chapterId,
                hash: hash
            }
        });
    };

    for (var i = 0; i < pageSum; i++) {
        _loop(i);
    }
    return pages;
}
function groupPageFromChapters(contentOfChapters, nodeHeightsOfChapters, pageHeight) {
    var pageStartFrom = 0;
    var allPages = [];
    var t0 = new Date().valueOf();
    contentOfChapters.forEach(function (chapter, index) {
        var pages = groupNodesByPage(chapter.markdown.split('\n\n'), nodeHeightsOfChapters[index].nodeHeights, pageHeight, pageStartFrom, chapter.id);
        allPages = allPages.concat(pages);
        pageStartFrom = pageStartFrom + pages.length;
    });
    var t1 = new Date().valueOf();
    _helpers2.default.print('Grouping nodes takes ' + (t1 - t0) + 'ms');
    return allPages;
}
function resolveBookLocation(href, computedPages) {
    var chapterId = href.split('$')[0];
    var hash = href.split('$')[1];
    var i = 0;
    var foundChapterPage = void 0;
    while (i < computedPages.length) {
        var page = computedPages[i];
        if ('#' + page.meta.chapterId === chapterId) {
            foundChapterPage = page.meta.pageNo;
            if (hash) {
                if (page.meta.hash && page.meta.hash.indexOf(hash) !== -1) {
                    _helpers2.default.print('with hash', page.meta.pageNo);
                    return page.meta.pageNo;
                }
            } else {
                _helpers2.default.print('without hash', page.meta.pageNo);
                return page.meta.pageNo;
            }
        }
        i++;
    }
    if (!foundChapterPage) {
        throw new Error('未找到位置！');
    }
    console.warn('所在章节未找到位置，已跳转至章节！');
    _helpers2.default.print('foundChapterPage', foundChapterPage);
    return foundChapterPage;
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(getNodeHeights, 'getNodeHeights', '/Users/liang/Projects/readr/src/isomorphic/routes/Viewer/Viewer.utils.ts');

    __REACT_HOT_LOADER__.register(getPageOffset, 'getPageOffset', '/Users/liang/Projects/readr/src/isomorphic/routes/Viewer/Viewer.utils.ts');

    __REACT_HOT_LOADER__.register(getNodesOfPage, 'getNodesOfPage', '/Users/liang/Projects/readr/src/isomorphic/routes/Viewer/Viewer.utils.ts');

    __REACT_HOT_LOADER__.register(groupNodesByPage, 'groupNodesByPage', '/Users/liang/Projects/readr/src/isomorphic/routes/Viewer/Viewer.utils.ts');

    __REACT_HOT_LOADER__.register(groupPageFromChapters, 'groupPageFromChapters', '/Users/liang/Projects/readr/src/isomorphic/routes/Viewer/Viewer.utils.ts');

    __REACT_HOT_LOADER__.register(resolveBookLocation, 'resolveBookLocation', '/Users/liang/Projects/readr/src/isomorphic/routes/Viewer/Viewer.utils.ts');
}();

;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(249);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../../node_modules/css-loader/index.js??ref--3-1!../../../../../node_modules/sass-loader/index.js!./BookPage.scss", function() {
        content = require("!!../../../../../node_modules/css-loader/index.js??ref--3-1!../../../../../node_modules/sass-loader/index.js!./BookPage.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = {
	"app.css": "css/app.37a0fcc52e.css",
	"app.js": "js/app.37a0fcc52e.js",
	"base.global.css": "css/base.global.30e3ea3a4f.css",
	"base.global.js": "js/base.global.30e3ea3a4f.js",
	"js/chunk.0b7ce24747.12.js": "js/chunk.0b7ce24747.12.js",
	"js/chunk.17e3d2e5dd.16.js": "js/chunk.17e3d2e5dd.16.js",
	"js/chunk.1a0245146e.0.js": "js/chunk.1a0245146e.0.js",
	"js/chunk.2515738e81.9.js": "js/chunk.2515738e81.9.js",
	"js/chunk.398e617134.15.js": "js/chunk.398e617134.15.js",
	"js/chunk.39fb5c583d.13.js": "js/chunk.39fb5c583d.13.js",
	"js/chunk.4434c9d188.3.js": "js/chunk.4434c9d188.3.js",
	"js/chunk.4e117530d8.10.js": "js/chunk.4e117530d8.10.js",
	"js/chunk.5c3753c8ad.7.js": "js/chunk.5c3753c8ad.7.js",
	"js/chunk.5ed7e6452d.14.js": "js/chunk.5ed7e6452d.14.js",
	"js/chunk.628e1c5a04.11.js": "js/chunk.628e1c5a04.11.js",
	"js/chunk.8ae3db504f.1.js": "js/chunk.8ae3db504f.1.js",
	"js/chunk.93c4e9de43.5.js": "js/chunk.93c4e9de43.5.js",
	"js/chunk.97c4421996.4.js": "js/chunk.97c4421996.4.js",
	"js/chunk.b17f6166ea.2.js": "js/chunk.b17f6166ea.2.js",
	"js/chunk.bc3869013b.6.js": "js/chunk.bc3869013b.6.js",
	"js/chunk.fa685f655e.8.js": "js/chunk.fa685f655e.8.js",
	"media/logo-dark.png": "media/logo-dark.4754e8aa78.png",
	"media/logo.png": "media/logo.81eb83d7f7.png",
	"media/shadow.png": "media/shadow.471ea37f96.png",
	"modifiers.global.css": "css/modifiers.global.d52679eb9d.css",
	"modifiers.global.js": "js/modifiers.global.d52679eb9d.js",
	"vendor.global.css": "css/vendor.global.cab0d0e8a2.css",
	"vendor.global.js": "js/vendor.global.cab0d0e8a2.js",
	"vendor.js": "js/vendor.5fb394e9cb.js"
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var appConfig = {
    api: {
        prefix: 'api'
    },
    database: {
        host: 'mongodb://localhost:27017',
        name: 'readr',
        mongoStoreName: 'readr_session'
    },
    siteUrl: 'http://localhost',
    siteName: 'readr',
    apiPort: 3091,
    assetsPort: 3090,
    pagesPort: 3000,
    enableEntityCache: false
};
var _default = appConfig;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(appConfig, 'appConfig', '/Users/liang/Projects/readr/src/app.config.dev.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/app.config.dev.ts');
}();

;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var appConfig = {
    api: {
        prefix: 'api'
    },
    database: {
        host: 'mongodb://localhost:27017',
        name: 'readr',
        mongoStoreName: 'readr_session'
    },
    siteUrl: 'http://readrweb.com',
    siteName: 'readr',
    apiPort: 4001,
    assetsPort: 4000,
    pagesPort: 4002,
    enableEntityCache: true
};
var _default = appConfig;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(appConfig, 'appConfig', '/Users/liang/Projects/readr/src/app.config.prod.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/app.config.prod.ts');
}();

;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(46);

var _Dropdown = __webpack_require__(53);

var _Logo = __webpack_require__(49);

var _Logo2 = _interopRequireDefault(_Logo);

var _reactCssModules = __webpack_require__(5);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _reactRouter = __webpack_require__(9);

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

var styles = __webpack_require__(252);
var Branding = function (_Component) {
    _inherits(Branding, _Component);

    function Branding(props) {
        _classCallCheck(this, Branding);

        var _this = _possibleConstructorReturn(this, (Branding.__proto__ || Object.getPrototypeOf(Branding)).call(this, props));

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
        value: function handleLogoutClick(e) {
            this.props.onLogout();
            e.preventDefault();
        }
    }, {
        key: "render",
        value: function render() {
            var isAdmin = this.props.isAdmin ? this.props.isAdmin : false;
            var _props = this.props,
                username = _props.username,
                recentReading = _props.recentReading;

            return _react2.default.createElement("div", { styleName: "branding " + (this.props.className ? this.props.className : '') }, _react2.default.createElement(_layout.Container, { className: "clearfix" }, _react2.default.createElement("div", null, _react2.default.createElement("div", { className: "left" }, _react2.default.createElement(_Logo2.default, null)), _react2.default.createElement("div", { className: "left", styleName: "nav" }, _react2.default.createElement("ul", { styleName: "nav-links" }, _react2.default.createElement("li", { styleName: "nav-item" }, _react2.default.createElement(_reactRouter.Link, { styleName: "nav-link", to: "/browse" }, "\u6D4F\u89C8")))), username ? _react2.default.createElement("div", { styleName: "nav--user" }, recentReading.length !== 0 && _react2.default.createElement(_Dropdown.Dropdown, { styleName: "dropdown-recent-reading", title: "最近阅读" }, recentReading.slice(0, 5).map(function (book, index) {
                return _react2.default.createElement(_Dropdown.DropdownItem, { key: index }, _react2.default.createElement(_reactRouter.Link, { to: "/viewer/book/" + book.id }, book.title));
            }), _react2.default.createElement(_Dropdown.DropdownItemSep, null), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/user/shelf" }, "\u67E5\u770B\u5168\u90E8"))), _react2.default.createElement(_Dropdown.Dropdown, { title: _react2.default.createElement("div", { style: { display: 'inline-block' } }, username, isAdmin && _react2.default.createElement("span", { className: "badge" }, "\u7BA1\u7406\u5458")) }, isAdmin === true && _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/console" }, "\u63A7\u5236\u53F0")), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/user/shelf" }, "\u4E66\u67B6")), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/user/profile" }, "\u4E2A\u4EBA\u4E3B\u9875")), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/user/preference" }, "\u8BBE\u7F6E")), _react2.default.createElement(_Dropdown.DropdownItemSep, null), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement("a", { onClick: this.handleLogoutClick, href: "#" }, "\u9000\u51FA")))) : _react2.default.createElement("div", { styleName: "nav--user" }, _react2.default.createElement("ul", { styleName: "nav-links" }, _react2.default.createElement("li", { styleName: "nav-item" }, _react2.default.createElement(_reactRouter.Link, { styleName: "nav-link", to: "/signin" }, "\u767B\u5F55")), _react2.default.createElement("li", { styleName: "nav-item" }, _react2.default.createElement(_reactRouter.Link, { styleName: "nav-link", to: "/signup" }, "\u6CE8\u518C")))))));
        }
    }]);

    return Branding;
}(_react.Component);
Branding = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], Branding);
var _default = Branding;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/isomorphic/components/Branding/Branding.tsx");

    __REACT_HOT_LOADER__.register(Branding, "Branding", "/Users/liang/Projects/readr/src/isomorphic/components/Branding/Branding.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/isomorphic/components/Branding/Branding.tsx");
}();

;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Branding = __webpack_require__(95);

var _Branding2 = _interopRequireDefault(_Branding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Branding2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/components/Branding/index.tsx');
}();

;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Container = __webpack_require__(30);

var _Container2 = _interopRequireDefault(_Container);

var _reactCssModules = __webpack_require__(5);

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

var styles = __webpack_require__(253);
var Colophon = function (_Component) {
    _inherits(Colophon, _Component);

    function Colophon() {
        _classCallCheck(this, Colophon);

        return _possibleConstructorReturn(this, (Colophon.__proto__ || Object.getPrototypeOf(Colophon)).apply(this, arguments));
    }

    _createClass(Colophon, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement("div", { className: "colophon", styleName: "colophon" }, _react2.default.createElement(_Container2.default, null, _react2.default.createElement("p", null, "\xA9 2015\uFF0D2016 readrweb.com, all rights reserved")));
        }
    }]);

    return Colophon;
}(_react.Component);
Colophon = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], Colophon);
var _default = Colophon;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/isomorphic/components/Colophon/Colophon.tsx");

    __REACT_HOT_LOADER__.register(Colophon, "Colophon", "/Users/liang/Projects/readr/src/isomorphic/components/Colophon/Colophon.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/isomorphic/components/Colophon/Colophon.tsx");
}();

;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Colophon = __webpack_require__(97);

var _Colophon2 = _interopRequireDefault(_Colophon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Colophon2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/components/Colophon/index.ts');
}();

;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _Container = __webpack_require__(30);

var _Container2 = _interopRequireDefault(_Container);

var _Dropdown = __webpack_require__(53);

var _reactCssModules = __webpack_require__(5);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Logo = __webpack_require__(49);

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

var styles = __webpack_require__(254);
var ConsoleBranding = function (_Component) {
    _inherits(ConsoleBranding, _Component);

    function ConsoleBranding(props) {
        _classCallCheck(this, ConsoleBranding);

        var _this = _possibleConstructorReturn(this, (ConsoleBranding.__proto__ || Object.getPrototypeOf(ConsoleBranding)).call(this, props));

        _this.state = {
            isDropdownMenuVisible: false
        };
        _this.handleLogoutClick = _this.handleLogoutClick.bind(_this);
        return _this;
    }

    _createClass(ConsoleBranding, [{
        key: "handleLogoutClick",
        value: function handleLogoutClick(e) {
            this.props.onLogout();
            e.preventDefault();
        }
    }, {
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
            return _react2.default.createElement("div", { styleName: "branding" }, _react2.default.createElement(_Container2.default, { isFluid: true, className: "clearfix" }, _react2.default.createElement("div", null, _react2.default.createElement("div", { className: "left" }, _react2.default.createElement(_Logo2.default, { to: "/console" })), _react2.default.createElement("div", { styleName: "sub-name" }, _react2.default.createElement("span", { styleName: "sub" }, "\u63A7\u5236\u53F0")), _react2.default.createElement("div", { styleName: "nav right" }, username && _react2.default.createElement(_Dropdown.Dropdown, { style: "dark", title: _react2.default.createElement("span", null, username, isAdmin && _react2.default.createElement("span", { className: "badge badge--dark" }, "\u7BA1\u7406\u5458")) }, _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/" }, "\u56DE\u5230 Readr")), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/user/profile" }, "\u4E2A\u4EBA\u4E3B\u9875")), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/user/preference" }, "\u8BBE\u7F6E")), _react2.default.createElement(_Dropdown.DropdownItemSep, null), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement("a", { onClick: this.handleLogoutClick, href: "#" }, "\u9000\u51FA")))))));
        }
    }]);

    return ConsoleBranding;
}(_react.Component);
ConsoleBranding = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], ConsoleBranding);
var _default = ConsoleBranding;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/isomorphic/components/ConsoleBranding/ConsoleBranding.tsx");

    __REACT_HOT_LOADER__.register(ConsoleBranding, "ConsoleBranding", "/Users/liang/Projects/readr/src/isomorphic/components/ConsoleBranding/ConsoleBranding.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/isomorphic/components/ConsoleBranding/ConsoleBranding.tsx");
}();

;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ConsoleBranding = __webpack_require__(99);

var _ConsoleBranding2 = _interopRequireDefault(_ConsoleBranding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _ConsoleBranding2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/components/ConsoleBranding/index.ts');
}();

;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _Icon = __webpack_require__(29);

var _Icon2 = _interopRequireDefault(_Icon);

var _reactCssModules = __webpack_require__(5);

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

var styles = __webpack_require__(255);
var ConsoleSidebar = function (_Component) {
    _inherits(ConsoleSidebar, _Component);

    function ConsoleSidebar(props) {
        _classCallCheck(this, ConsoleSidebar);

        return _possibleConstructorReturn(this, (ConsoleSidebar.__proto__ || Object.getPrototypeOf(ConsoleSidebar)).call(this, props));
    }

    _createClass(ConsoleSidebar, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                menuMapping = _props.menuMapping,
                currentPath = _props.currentPath;

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
var _default = ConsoleSidebar;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/isomorphic/components/ConsoleSidebar/ConsoleSidebar.tsx");

    __REACT_HOT_LOADER__.register(ConsoleSidebar, "ConsoleSidebar", "/Users/liang/Projects/readr/src/isomorphic/components/ConsoleSidebar/ConsoleSidebar.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/isomorphic/components/ConsoleSidebar/ConsoleSidebar.tsx");
}();

;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ConsoleSidebar = __webpack_require__(101);

var _ConsoleSidebar2 = _interopRequireDefault(_ConsoleSidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _ConsoleSidebar2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/components/ConsoleSidebar/index.ts');
}();

;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _Logo = __webpack_require__(256);

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Logo(props) {
    var dark = props.dark,
        to = props.to;

    var styleName = dark ? 'logo--dark' : 'logo';
    return _react2.default.createElement("h1", { className: _Logo2.default['logo-wrap'] }, _react2.default.createElement(_reactRouter.Link, { className: _Logo2.default[styleName], to: to }, "readr"));
}
Logo['defaultProps'] = {
    to: '/'
};
var _default = Logo;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Logo, 'Logo', '/Users/liang/Projects/readr/src/isomorphic/components/Logo/Logo.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/components/Logo/Logo.tsx');
}();

;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VIEWER_DEFS = exports.COMMON = exports.ACTION_TYPES = undefined;

var _actionTypes = __webpack_require__(6);

var ACTION_TYPES = _interopRequireWildcard(_actionTypes);

var _common = __webpack_require__(8);

var COMMON = _interopRequireWildcard(_common);

var _viewerDefs = __webpack_require__(85);

var VIEWER_DEFS = _interopRequireWildcard(_viewerDefs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.ACTION_TYPES = ACTION_TYPES;
exports.COMMON = COMMON;
exports.VIEWER_DEFS = VIEWER_DEFS;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _Branding = __webpack_require__(96);

var _Branding2 = _interopRequireDefault(_Branding);

var _Colophon = __webpack_require__(98);

var _Colophon2 = _interopRequireDefault(_Colophon);

var _actions = __webpack_require__(15);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.handleLogout = _this.handleLogout.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'handleLogout',
        value: function handleLogout() {
            this.props.userLogout();
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

    return App;
}(_react.Component);

var _default = (0, _reactRedux.connect)(function (state) {
    return {
        notification: state.components.notification,
        session: state.session,
        bookShelf: selectors.shelfBooks()(state)
    };
}, { fetchShelf: _actions.fetchShelf, userLogout: _actions.userLogout })(App);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(App, 'App', '/Users/liang/Projects/readr/src/isomorphic/containers/App.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/containers/App.tsx');
}();

;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pick2 = __webpack_require__(32);

var _pick3 = _interopRequireDefault(_pick2);

var _last2 = __webpack_require__(42);

var _last3 = _interopRequireDefault(_last2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSideEffect = __webpack_require__(285);

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

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

var BodyClass = function (_Component) {
    _inherits(BodyClass, _Component);

    function BodyClass() {
        _classCallCheck(this, BodyClass);

        return _possibleConstructorReturn(this, (BodyClass.__proto__ || Object.getPrototypeOf(BodyClass)).apply(this, arguments));
    }

    _createClass(BodyClass, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement("div", { className: "body-class" }, this.props.children);
        }
    }]);

    return BodyClass;
}(_react.Component);
BodyClass = __decorate([(0, _reactSideEffect2.default)(reducePropsToState, handleStateChangeOnClient)], BodyClass);
BodyClass['propTypes'] = {
    children: _react.PropTypes.object
};
function reducePropsToState(propsList) {
    var innermostProps = (0, _last3.default)(propsList);
    if (innermostProps) {
        var props = (0, _pick3.default)(innermostProps, ['className']);
        var className = props.className = propsList.filter(function (prop) {
            return prop.className;
        }).map(function (prop) {
            return prop.className;
        }).join(' ');
        return className;
    }
    return null;
}
function handleStateChangeOnClient(className) {
    if (typeof className !== 'undefined') {
        document.body.className = className;
    } else {
        document.body.removeAttribute('class');
    }
}
var _default = BodyClass;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/isomorphic/containers/BodyClass.tsx");

    __REACT_HOT_LOADER__.register(BodyClass, "BodyClass", "/Users/liang/Projects/readr/src/isomorphic/containers/BodyClass.tsx");

    __REACT_HOT_LOADER__.register(reducePropsToState, "reducePropsToState", "/Users/liang/Projects/readr/src/isomorphic/containers/BodyClass.tsx");

    __REACT_HOT_LOADER__.register(handleStateChangeOnClient, "handleStateChangeOnClient", "/Users/liang/Projects/readr/src/isomorphic/containers/BodyClass.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/isomorphic/containers/BodyClass.tsx");
}();

;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _layout = __webpack_require__(46);

var _ConsoleBranding = __webpack_require__(100);

var _ConsoleBranding2 = _interopRequireDefault(_ConsoleBranding);

var _actions = __webpack_require__(15);

var _ConsoleSidebar = __webpack_require__(102);

var _ConsoleSidebar2 = _interopRequireDefault(_ConsoleSidebar);

var _menus = __webpack_require__(110);

var _menus2 = _interopRequireDefault(_menus);

var _DocContainer = __webpack_require__(45);

var _DocContainer2 = _interopRequireDefault(_DocContainer);

var _helpers = __webpack_require__(10);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Console = function (_Component) {
    _inherits(Console, _Component);

    function Console(props) {
        _classCallCheck(this, Console);

        var _this = _possibleConstructorReturn(this, (Console.__proto__ || Object.getPrototypeOf(Console)).call(this, props));

        _this.handleLogout = _this.handleLogout.bind(_this);
        return _this;
    }

    _createClass(Console, [{
        key: 'redirectIfNotAdmin',
        value: function redirectIfNotAdmin() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            if (props.session.user.role !== 'admin') {
                _helpers2.default.redirect('/');
            }
        }
    }, {
        key: 'handleLogout',
        value: function handleLogout() {
            this.props.userLogout();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var userRoleChanged = this.props.session.user.role !== nextProps.session.user.role;
            if (userRoleChanged) {
                this.redirectIfNotAdmin(nextProps);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var isAdmin = this.props.session.user.role === 'admin';
            var username = this.props.session.user.username;
            var pathname = this.props.routing.locationBeforeTransitions ? this.props.routing.locationBeforeTransitions.pathname : 'console';
            var contentStyle = {
                marginLeft: 320,
                paddingTop: 60
            };
            return isAdmin ? _react2.default.createElement(_DocContainer2.default, { bodyClass: "console" }, _react2.default.createElement(_ConsoleBranding2.default, { isAdmin: isAdmin, username: username, onLogout: this.handleLogout }), _react2.default.createElement(_layout.Container, { isFluid: true }, _react2.default.createElement(_ConsoleSidebar2.default, { menuMapping: _menus2.default, currentPath: pathname }), _react2.default.createElement("div", { style: contentStyle }, this.props.children))) : _react2.default.createElement("div", { style: { textAlign: 'center', margin: '20px 0' } }, "ACCESS DENIED!");
        }
    }]);

    return Console;
}(_react.Component);

var _default = (0, _reactRedux.connect)(function (state) {
    return {
        notifications: state.components.notifications,
        session: state.session,
        routing: state.routing
    };
}, { sendNotification: _actions.sendNotification, userAuth: _actions.userAuth, userLogout: _actions.userLogout })(Console);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Console, 'Console', '/Users/liang/Projects/readr/src/isomorphic/containers/Console.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/containers/Console.tsx');
}();

;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _last2 = __webpack_require__(42);

var _last3 = _interopRequireDefault(_last2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _actions = __webpack_require__(15);

var _Alert = __webpack_require__(113);

var _Modal = __webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Master = function (_Component) {
    _inherits(Master, _Component);

    _createClass(Master, null, [{
        key: 'fetchData',
        value: function fetchData(_ref) {
            var store = _ref.store,
                userSession = _ref.userSession;

            return store.dispatch((0, _actions.userAuth)(userSession));
        }
    }]);

    function Master(props) {
        _classCallCheck(this, Master);

        return _possibleConstructorReturn(this, (Master.__proto__ || Object.getPrototypeOf(Master)).call(this, props));
    }

    _createClass(Master, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var hasNewErrorMsg = this.props.errorMessage.length !== nextProps.errorMessage.length;
            var routerChanged = nextProps.routing.locationBeforeTransitions.pathname !== this.props.routing.locationBeforeTransitions.pathname;
            if (hasNewErrorMsg) {
                this.props.sendNotification((0, _last3.default)(nextProps.errorMessage).toString(), 'error', 0);
            }
            if (routerChanged) {
                // 返回顶部
                window.document.body.scrollTop = 0;
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
            var _props = this.props,
                confirmModal = _props.confirmModal,
                closeConfirmModal = _props.closeConfirmModal,
                modal = _props.modal,
                closeModal = _props.closeModal;

            return _react2.default.createElement("div", { className: "app-root" }, _react2.default.createElement(_Modal.ConfirmModal, { open: confirmModal.open, title: confirmModal.title, onConfirm: confirmModal.onConfirm, onRequestClose: closeConfirmModal, width: 500 }, confirmModal.content), _react2.default.createElement(_Modal.ModalPlus, { open: modal.open, width: 500, onRequestClose: closeModal, title: modal.title }, modal.content), this.props.notifications.filter(function (noti) {
                return noti.visible;
            }).length > 0 && _react2.default.createElement(_Alert.Alerts, { onRequestClose: this.props.hideNotification, messages: this.props.notifications.map(function (noti) {
                    return {
                        content: noti.message || '发生错误！',
                        type: noti.type,
                        visible: noti.visible,
                        id: noti.id
                    };
                }) }), this.props.children);
        }
    }]);

    return Master;
}(_react.Component);

var _default = (0, _reactRedux.connect)(function (state) {
    return {
        notifications: state.components.notifications,
        errorMessage: state.errorMessage,
        confirmModal: state.components.confirmModal,
        modal: state.components.modal,
        routing: state.routing,
        session: state.session
    };
}, { sendNotification: _actions.sendNotification, hideNotification: _actions.hideNotification, closeConfirmModal: _actions.closeConfirmModal, userAuth: _actions.userAuth, closeModal: _actions.closeModal })(Master);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Master, 'Master', '/Users/liang/Projects/readr/src/isomorphic/containers/Master.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/containers/Master.tsx');
}();

;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AppDoc = __webpack_require__(50);

var _AppDoc2 = _interopRequireDefault(_AppDoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page500 = function (_Component) {
    _inherits(Page500, _Component);

    function Page500(props) {
        _classCallCheck(this, Page500);

        return _possibleConstructorReturn(this, (Page500.__proto__ || Object.getPrototypeOf(Page500)).call(this, props));
    }

    _createClass(Page500, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var message = this.props.message;
            // todo: use AppError

            return _react2.default.createElement(_AppDoc2.default, { title: "500 Server Error", appMarkup: _react2.default.createElement("div", { className: "page500" }, _react2.default.createElement("h1", null, "500"), _react2.default.createElement("p", null, message)) });
        }
    }]);

    return Page500;
}(_react.Component);

exports.default = Page500;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Page500, 'Page500', '/Users/liang/Projects/readr/src/isomorphic/containers/Page500.tsx');
}();

;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
    },
    // {
    //   component: 'addbook',
    //   displayName: '添加书籍',
    //   path: '/console/books/new'
    // },
    {
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
var _default = menus;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(menus, 'menus', '/Users/liang/Projects/readr/src/isomorphic/content/menus.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/content/menus.ts');
}();

;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEmpty2 = __webpack_require__(23);

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.createCacheId = createCacheId;
exports.getCache = getCache;
exports.setCache = setCache;

var _md = __webpack_require__(233);

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createCacheId(identifier) {
    if ((0, _isEmpty3.default)(identifier)) {
        throw new Error('缓存标识符不能为空！');
    }
    return (0, _md2.default)(identifier.toString());
}
function getCache(key) {
    if (typeof key !== 'string') {
        throw new Error('Name should be string!');
    }
    var content = localStorage.getItem(key);
    if (!content) {
        return undefined;
    }
    try {
        content = JSON.parse(content);
    } catch (error) {
        throw error;
    }
    return content;
}
function setCache(key, content) {
    if (typeof key !== 'string') {
        throw new Error('Name should be string!');
    }
    if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) !== 'object') {
        throw new Error('Cache content type should be object!');
    }
    var save = function save() {
        localStorage.setItem(key, JSON.stringify(content));
    };
    try {
        save();
    } catch (error) {
        if (error.name === 'QuotaExceededError') {
            // TODO: 能否只清除最旧的
            console.warn('本地缓存已满，旧的缓存将被清除！');
            localStorage.clear();
            save();
        } else {
            console.error(error);
        }
    }
    return true;
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(createCacheId, 'createCacheId', '/Users/liang/Projects/readr/src/isomorphic/data/cache.ts');

    __REACT_HOT_LOADER__.register(getCache, 'getCache', '/Users/liang/Projects/readr/src/isomorphic/data/cache.ts');

    __REACT_HOT_LOADER__.register(setCache, 'setCache', '/Users/liang/Projects/readr/src/isomorphic/data/cache.ts');
}();

;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Alert = __webpack_require__(52);

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = __webpack_require__(72);
function Alerts(props) {
    return _react2.default.createElement("div", { className: styles.alerts }, props.messages.map(function (msg, index) {
        return _react2.default.createElement(_Alert2.default, { key: index, type: msg.type, message: msg.content, visible: msg.visible, onRequestClose: function onRequestClose() {
                props.onRequestClose(msg.id);
            } });
    }));
}
var _default = Alerts;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Alerts, 'Alerts', '/Users/liang/Projects/readr/src/isomorphic/elements/Alert/Alerts.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/elements/Alert/Alerts.tsx');
}();

;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alert = exports.Alerts = undefined;

var _Alert = __webpack_require__(52);

var _Alert2 = _interopRequireDefault(_Alert);

var _Alerts = __webpack_require__(112);

var _Alerts2 = _interopRequireDefault(_Alerts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Alerts = _Alerts2.default;
exports.Alert = _Alert2.default;
var _default = _Alert2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/elements/Alert/index.tsx');
}();

;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign2 = __webpack_require__(3);

var _assign3 = _interopRequireDefault(_assign2);

var _omit2 = __webpack_require__(7);

var _omit3 = _interopRequireDefault(_omit2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(5);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _classnames2 = __webpack_require__(21);

var _classnames3 = _interopRequireDefault(_classnames2);

var _helpers = __webpack_require__(10);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var styles = __webpack_require__(257);
var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

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

            var _props = this.props,
                onClick = _props.onClick,
                className = _props.className,
                color = _props.color,
                size = _props.size,
                isFluid = _props.isFluid,
                width = _props.width,
                to = _props.to;

            var style = {};
            var styleName = (0, _classnames3.default)((_classnames = {
                'btn': true,
                'btn--hover': this.state.isMouseOver,
                'btn--fluid': isFluid
            }, _defineProperty(_classnames, "btn--" + color, Boolean(color)), _defineProperty(_classnames, "btn--" + size, Boolean(size)), _classnames));
            if (this.props.to) {
                onClick = function onClick(e) {
                    e.preventDefault();
                    _helpers2.default.redirect(to);
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
            var props = (0, _omit3.default)(this.props, ['to', 'color', 'size', 'isFluid', 'width', 'styles']);
            props = (0, _assign3.default)({}, props, {
                className: className || '',
                onClick: onClick,
                style: style
            });
            return _react2.default.createElement("button", Object.assign({}, props, { styleName: styleName, onMouseOver: function onMouseOver() {
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
var _default = Button;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/isomorphic/elements/Button/Button.tsx");

    __REACT_HOT_LOADER__.register(Button, "Button", "/Users/liang/Projects/readr/src/isomorphic/elements/Button/Button.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/isomorphic/elements/Button/Button.tsx");
}();

;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_Component) {
    _inherits(Container, _Component);

    function Container() {
        _classCallCheck(this, Container);

        return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
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

var _default = Container;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Container, 'Container', '/Users/liang/Projects/readr/src/isomorphic/elements/Container/Container.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/elements/Container/Container.tsx');
}();

;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(5);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _isDescendant = __webpack_require__(31);

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

var styles = __webpack_require__(38);
var Dropdown = function (_Component) {
    _inherits(Dropdown, _Component);

    function Dropdown(props) {
        _classCallCheck(this, Dropdown);

        var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

        _this.state = {
            showMenu: false
        };
        _this.handleGlobalClick = _this.handleGlobalClick.bind(_this);
        return _this;
    }

    _createClass(Dropdown, [{
        key: "handleGlobalClick",
        value: function handleGlobalClick(e) {
            // 检查点击的 dom 是否是 dropdown 的子元素
            // 如果是那么就不做处理，而 toggleDropdown 会响应
            // 解决了页面上同时用两个 dropdown 时，其中一个展开，点击另一个前者不合上的问题
            if (!(0, _isDescendant2.default)(this.dropdown, e.target)) {
                this.setState({
                    showMenu: false
                });
            } else {
                // 如果使用了原生事件，尽量不要混合使用 synthetic 事件，react 的生产版本似乎会出现相关的 bug
                this.setState({
                    showMenu: !this.state.showMenu
                });
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            window.addEventListener('click', this.handleGlobalClick);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener('click', this.handleGlobalClick);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                className = _props.className,
                style = _props.style;

            return _react2.default.createElement("div", { ref: function ref(_ref) {
                    _this2.dropdown = _ref;
                }, styleName: "dropdown", className: className || '' }, _react2.default.createElement("div", { styleName: "dropdown-toggle" }, _react2.default.createElement("span", null, this.props.title), _react2.default.createElement("span", { styleName: "dropdown-caret" })), this.state.showMenu && _react2.default.createElement("div", { styleName: style === 'dark' ? 'dropdown-menu--dark' : 'dropdown-menu' }, _react2.default.createElement("ul", null, this.props.children)));
        }
    }]);

    return Dropdown;
}(_react.Component);
Dropdown = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], Dropdown);
var _default = Dropdown;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/isomorphic/elements/Dropdown/Dropdown.tsx");

    __REACT_HOT_LOADER__.register(Dropdown, "Dropdown", "/Users/liang/Projects/readr/src/isomorphic/elements/Dropdown/Dropdown.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/isomorphic/elements/Dropdown/Dropdown.tsx");
}();

;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = __webpack_require__(38);
function DropdownItem(props) {
    return _react2.default.createElement("li", null, typeof props.children === 'string' ? _react2.default.createElement("div", { className: styles['dropdown-item'] }, props.children) : _react2.default.cloneElement(props.children, {
        className: styles['dropdown-item']
    }));
}
var _default = DropdownItem;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(DropdownItem, 'DropdownItem', '/Users/liang/Projects/readr/src/isomorphic/elements/Dropdown/DropdownItem.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/elements/Dropdown/DropdownItem.tsx');
}();

;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = __webpack_require__(38);
function DropdownItemSep(props) {
    return _react2.default.createElement("li", { className: styles['sep'] });
}
var _default = DropdownItemSep;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(DropdownItemSep, 'DropdownItemSep', '/Users/liang/Projects/readr/src/isomorphic/elements/Dropdown/DropdownItemSep.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/elements/Dropdown/DropdownItemSep.tsx');
}();

;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(91);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = __webpack_require__(258);

var _default = function _default(props) {
    return _react2.default.createElement(_reactAddonsCssTransitionGroup2.default, { component: "div", transitionName: styles, transitionEnterTimeout: 300, transitionLeaveTimeout: 300 }, props.children);
};

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/elements/Fade/Fade.tsx');
}();

;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(21);

var _classnames2 = _interopRequireDefault(_classnames);

var _svgIcons = __webpack_require__(121);

var _svgIcons2 = _interopRequireDefault(_svgIcons);

var _reactCssModules = __webpack_require__(5);

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

var styles = __webpack_require__(259);
var Icon = function (_Component) {
    _inherits(Icon, _Component);

    function Icon(props) {
        _classCallCheck(this, Icon);

        return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, props));
    }

    _createClass(Icon, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                name = _props.name,
                onClick = _props.onClick,
                size = _props.size;

            var className = (0, _classnames2.default)('icon', "icon-" + name, this.props.className);
            if (typeof _svgIcons2.default[name] === 'undefined') {
                console.error('Icon name (%s) not found! ', name);
            }
            size = size || 30;
            var svgWrapStyle = {
                position: 'absolute',
                top: '50%',
                marginTop: -size / 2
            };
            return _react2.default.createElement("span", { styleName: "icon", style: { minWidth: size, minHeight: size }, className: className, onClick: onClick }, _react2.default.createElement("div", { style: svgWrapStyle }, _react2.default.createElement("svg", Object.assign({}, _svgIcons2.default[name].viewBox && { viewBox: _svgIcons2.default[name].viewBox }, { width: size, height: size, styleName: "svg-shape" }), _react2.default.createElement("path", { d: _svgIcons2.default[name].path }))));
        }
    }]);

    return Icon;
}(_react.Component);
Icon = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], Icon);
var _default = Icon;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/isomorphic/elements/Icon/Icon.tsx");

    __REACT_HOT_LOADER__.register(Icon, "Icon", "/Users/liang/Projects/readr/src/isomorphic/elements/Icon/Icon.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/isomorphic/elements/Icon/Icon.tsx");
}();

;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _default = {
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
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/elements/Icon/svg-icons.ts');
}();

;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(5);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _classnames = __webpack_require__(21);

var _classnames2 = _interopRequireDefault(_classnames);

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

var styles = __webpack_require__(260);
var Input = function (_Component) {
    _inherits(Input, _Component);

    function Input(props) {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));
    }

    _createClass(Input, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var props = Object.assign({}, this.props);
            delete props.className;
            var _props = this.props,
                error = _props.error,
                touched = _props.touched;

            var showError = error && touched;
            return _react2.default.createElement("div", { styleName: (0, _classnames2.default)({ 'input-wrap': !showError, 'input-wrap--error': showError }), className: this.props.className || '' }, _react2.default.createElement("input", { styleName: "input", placeholder: this.props.placeholder, value: this.props.value, onChange: function onChange(e) {
                    _this2.props.onChange(e);
                }, type: this.props.type ? this.props.type : 'text', name: this.props.name ? this.props.name : null }), showError && _react2.default.createElement("div", { styleName: "error-msg" }, error));
        }
    }]);

    return Input;
}(_react.Component);
Input = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], Input);
var _default = Input;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/isomorphic/elements/Input/Input.tsx");

    __REACT_HOT_LOADER__.register(Input, "Input", "/Users/liang/Projects/readr/src/isomorphic/elements/Input/Input.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/isomorphic/elements/Input/Input.tsx");
}();

;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Modal = __webpack_require__(55);

var _Modal2 = _interopRequireDefault(_Modal);

var _ModalFooter = __webpack_require__(84);

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

var _reactCssModules = __webpack_require__(5);

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
var Dialog = function (_Component) {
    _inherits(Dialog, _Component);

    function Dialog(props) {
        _classCallCheck(this, Dialog);

        return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));
    }

    _createClass(Dialog, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                onConfirm = _props.onConfirm,
                onRequestClose = _props.onRequestClose,
                open = _props.open;

            return _react2.default.createElement(_Modal2.default, { open: open, onRequestClose: onRequestClose, width: this.props.width }, _react2.default.createElement("div", { styleName: "confirm-modal" }, this.props.title && _react2.default.createElement("div", { styleName: "modal-header" }, _react2.default.createElement("h1", { styleName: "modal-title" }, this.props.title)), _react2.default.createElement("div", { styleName: "modal-content" }, this.props.children), _react2.default.createElement(_ModalFooter2.default, { onConfirm: onConfirm, onCancel: onRequestClose })));
        }
    }]);

    return Dialog;
}(_react.Component);
Dialog = __decorate([(0, _reactCssModules2.default)(styles)], Dialog);
var _default = Dialog;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/isomorphic/elements/Modal/ConfirmModal.tsx");

    __REACT_HOT_LOADER__.register(Dialog, "Dialog", "/Users/liang/Projects/readr/src/isomorphic/elements/Modal/ConfirmModal.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/isomorphic/elements/Modal/ConfirmModal.tsx");
}();

;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Modal = __webpack_require__(54);

var _Modal2 = _interopRequireDefault(_Modal);

var _Modal3 = __webpack_require__(39);

var _Modal4 = _interopRequireDefault(_Modal3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalPlus = function (_Component) {
    _inherits(ModalPlus, _Component);

    function ModalPlus() {
        _classCallCheck(this, ModalPlus);

        return _possibleConstructorReturn(this, (ModalPlus.__proto__ || Object.getPrototypeOf(ModalPlus)).apply(this, arguments));
    }

    _createClass(ModalPlus, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                open = _props.open,
                onRequestClose = _props.onRequestClose,
                width = _props.width,
                actions = _props.actions;

            return _react2.default.createElement(_Modal2.default, { open: open, onRequestClose: onRequestClose, width: width || 600 }, _react2.default.createElement("div", { className: _Modal4.default['modal-plus'] }, title && _react2.default.createElement("div", { className: _Modal4.default['modal-header'] }, _react2.default.createElement("h1", { className: _Modal4.default['modal-title'] }, title)), _react2.default.createElement("div", { className: _Modal4.default['modal-body'] }, this.props.children), actions && actions.map(function (action, index) {
                return _react2.default.cloneElement(action, {
                    key: index
                });
            })));
        }
    }]);

    return ModalPlus;
}(_react.Component);

var _default = ModalPlus;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ModalPlus, 'ModalPlus', '/Users/liang/Projects/readr/src/isomorphic/elements/Modal/ModalPlus.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/elements/Modal/ModalPlus.tsx');
}();

;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map2 = __webpack_require__(48);

var _map3 = _interopRequireDefault(_map2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Icon = __webpack_require__(29);

var _Icon2 = _interopRequireDefault(_Icon);

var _classnames = __webpack_require__(21);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(5);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _isDescendant = __webpack_require__(31);

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

var styles = __webpack_require__(262);
var SelectizeInput = function (_Component) {
    _inherits(SelectizeInput, _Component);

    function SelectizeInput(props) {
        _classCallCheck(this, SelectizeInput);

        var _this = _possibleConstructorReturn(this, (SelectizeInput.__proto__ || Object.getPrototypeOf(SelectizeInput)).call(this, props));

        _this.state = {
            showOptions: false,
            focus: false,
            value: '',
            expendedOptionIndex: 0
        };
        _this.handleOutsideClick = _this.handleOutsideClick.bind(_this);
        _this.focusInput = _this.focusInput.bind(_this);
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        return _this;
    }

    _createClass(SelectizeInput, [{
        key: "addValue",
        value: function addValue(newValue) {
            var _this2 = this;

            if (!this.props.useValue) {
                this.props.onValuesChange(this.props.values.concat(newValue));
                if (this.props.onOptionsChange) {
                    this.props.onOptionsChange(this.props.options.map(function (option) {
                        return option.value === newValue.value ? Object.assign({}, option, { disabled: true }) : option;
                    }));
                }
                // React setState 是异步的，如果都是用 state 管理则会出现同时调用 setState 的情况，从而造成问题
                setTimeout(function () {
                    _this2.clearInputValue();
                }, 1);
                if (typeof this.props.stayFocused === 'undefined' || this.props.stayFocused !== false) {
                    this.focusInput();
                }
                this.hideOptions();
            } else {
                this.props.onInputChange(newValue.name);
                this.hideOptions();
            }
        }
    }, {
        key: "showOptions",
        value: function showOptions() {
            this.setState({
                showOptions: true
            });
        }
    }, {
        key: "hideOptions",
        value: function hideOptions() {
            this.setState({
                showOptions: false
            });
        }
    }, {
        key: "removeValue",
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
        key: "clearInputValue",
        value: function clearInputValue() {
            this.props.onInputChange('');
        }
    }, {
        key: "handleKeyPress",
        value: function handleKeyPress(e) {
            if (e.keyCode === 8 && !this.props.value && this.props.values.length !== 0) {
                this.removeValue(-1);
            }
        }
    }, {
        key: "handleInputChange",
        value: function handleInputChange(e) {
            this.props.onInputChange(e.target.value);
            if ((this.props.options || []).length !== 0) {
                this.showOptions();
            }
        }
    }, {
        key: "focusInput",
        value: function focusInput() {
            this.input.focus();
        }
    }, {
        key: "handleOutsideClick",
        value: function handleOutsideClick(e) {
            if ((0, _isDescendant2.default)(this.inputWrap, e.target) || this.inputWrap === e.target) {
                this.focusInput();
                this.showOptions();
            } else {
                this.hideOptions();
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var optionsLoaded = (nextProps.options || []).length !== 0 && (this.props.options || []).length === 0;
            if (optionsLoaded && this.state.focus) {
                this.showOptions();
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            window.addEventListener('click', this.handleOutsideClick);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener('click', this.handleOutsideClick);
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                label = _props.label,
                values = _props.values,
                onAddNewValue = _props.onAddNewValue,
                omitSelectedValuesFromOptions = _props.omitSelectedValuesFromOptions;

            var value = this.props.value || '';
            var options = this.props.options || [];
            var inputWidth = values.length > 0 ? value.length === 0 ? 16 : value.length * 16 : '100%';
            var placeholder = values.length > 0 ? '' : this.props.placeholder;
            var filteredOptions = options.filter(function (option) {
                if (omitSelectedValuesFromOptions) {
                    var valueOfValues = (0, _map3.default)(values, 'value');
                    return valueOfValues.indexOf(option.value) === -1;
                }
                return true;
            });
            var selectizeInputStyleName = (0, _classnames2.default)({
                'selectize-input': true,
                'selectize-input--focus': this.state.focus,
                'selectize-input--empty': values.length === 0
            });
            return _react2.default.createElement("div", { styleName: "selectize-wrap", className: this.props.className || '' }, label ? _react2.default.createElement("label", { className: "form-label" }, label) : null, _react2.default.createElement("div", { styleName: selectizeInputStyleName, ref: function ref(_ref) {
                    _this3.inputWrap = _ref;
                } }, values.map(function (v, index) {
                return _react2.default.createElement("span", { key: index, styleName: "selectize-tag" }, v.name, _react2.default.createElement(_Icon2.default, { styleName: "icon-remove", size: 20, name: "close", onClick: function onClick(e) {
                        _this3.removeValue(index);
                    } }));
            }), _react2.default.createElement("input", { style: { width: inputWidth }, ref: function ref(_ref2) {
                    _this3.input = _ref2;
                }, value: value, placeholder: placeholder, onBlur: function onBlur(e) {
                    _this3.setState({ focus: false });
                }, onFocus: function onFocus(e) {
                    _this3.setState({ focus: true });
                }, onChange: this.handleInputChange, onKeyDown: function onKeyDown(e) {
                    _this3.handleKeyPress(e);
                } })), this.state.showOptions && (filteredOptions.length !== 0 || onAddNewValue) ? _react2.default.createElement("ul", { styleName: "query-results" }, filteredOptions.map(function (option, index) {
                if (option.disabled) {
                    return _react2.default.createElement("li", { key: index, className: "disabled" }, option.name);
                }
                return _react2.default.createElement("li", { key: index, onClick: function onClick(e) {
                        _this3.addValue(option);
                        if (_this3.props.onOptionClick) {
                            _this3.props.onOptionClick(option);
                        }
                    } }, _react2.default.createElement("span", null, option.name));
            }), onAddNewValue ? _react2.default.createElement("li", { onClick: function onClick(e) {
                    onAddNewValue(_this3.props.value);
                }, className: "add" }, "\u6DFB\u52A0 ", _react2.default.createElement("strong", null, this.props.value)) : null) : null);
        }
    }]);

    return SelectizeInput;
}(_react.Component);
SelectizeInput = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], SelectizeInput);
SelectizeInput['defaultProps'] = {
    omitSelectedValuesFromOptions: true
};
var _default = SelectizeInput;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/isomorphic/elements/SelectizeInput/SelectizeInput.tsx");

    __REACT_HOT_LOADER__.register(SelectizeInput, "SelectizeInput", "/Users/liang/Projects/readr/src/isomorphic/elements/SelectizeInput/SelectizeInput.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/isomorphic/elements/SelectizeInput/SelectizeInput.tsx");
}();

;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SelectizeInput = __webpack_require__(125);

var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _SelectizeInput2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/elements/SelectizeInput/index.ts');
}();

;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(5);

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

var styles = __webpack_require__(263);
var Textarea = function (_Component) {
    _inherits(Textarea, _Component);

    function Textarea(props) {
        _classCallCheck(this, Textarea);

        return _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, props));
    }

    _createClass(Textarea, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement("div", { styleName: "textarea-wrap", className: this.props.className || '' }, _react2.default.createElement("textarea", { placeholder: this.props.placeholder, value: this.props.value, onChange: function onChange(e) {
                    _this2.props.onChange(e);
                }, styleName: "textarea", type: this.props.type ? this.props.type : 'text', name: this.props.name ? this.props.name : null }));
        }
    }]);

    return Textarea;
}(_react.Component);
Textarea = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], Textarea);
var _default = Textarea;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/isomorphic/elements/Textarea/Textarea.tsx");

    __REACT_HOT_LOADER__.register(Textarea, "Textarea", "/Users/liang/Projects/readr/src/isomorphic/elements/Textarea/Textarea.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/isomorphic/elements/Textarea/Textarea.tsx");
}();

;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Textarea = __webpack_require__(127);

var _Textarea2 = _interopRequireDefault(_Textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Textarea2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/elements/Textarea/index.ts');
}();

;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getApiRoot;

var _getEnv = __webpack_require__(422);

var _getEnv2 = _interopRequireDefault(_getEnv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = (0, _getEnv2.default)();
function getApiRoot() {
    var API_HOST = env.API_HOST,
        API_PORT = env.API_PORT,
        API_PREFIX = env.API_PREFIX;

    return 'http://' + API_HOST + ':' + API_PORT + '/' + API_PREFIX;
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(env, 'env', '/Users/liang/Projects/readr/src/isomorphic/helpers/getApiRoot.ts');

    __REACT_HOT_LOADER__.register(getApiRoot, 'getApiRoot', '/Users/liang/Projects/readr/src/isomorphic/helpers/getApiRoot.ts');
}();

;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isServerEnv;
function isServerEnv() {
    return typeof window === 'undefined';
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(isServerEnv, 'isServerEnv', '/Users/liang/Projects/readr/src/isomorphic/helpers/isServerEnv.ts');
}();

;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onRoutingChange = undefined;

var _isEqual2 = __webpack_require__(47);

var _isEqual3 = _interopRequireDefault(_isEqual2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 检查 store 里面的 routing 是否变化
var onRoutingChange = exports.onRoutingChange = function onRoutingChange(fn) {
    return function (nextProps, currentProps) {
        if (!currentProps.routing) {
            console.error('routing 需要现在组件 props 里面声明！');
            return false;
        }
        var hasPathParamChanged = !(0, _isEqual3.default)(nextProps.routing, currentProps.routing);
        if (hasPathParamChanged) {
            fn(nextProps.routing);
        }
    };
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(onRoutingChange, 'onRoutingChange', '/Users/liang/Projects/readr/src/isomorphic/helpers/lifecircle.ts');
}();

;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = print;
function print() {
    if (process.env.NODE_ENV !== 'production') {
        var style = 'color: blue;';

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var mergedArgs = [args.join(' ')];
        var modArgs = mergedArgs.map(function (arg, index) {
            if (index === 0) {
                return '%c [DEV] ' + arg;
            }
        });
        modArgs = modArgs.concat(style);
        console.trace.apply(null, modArgs);
    }
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(print, 'print', '/Users/liang/Projects/readr/src/isomorphic/helpers/print.ts');
}();

;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = redirect;

var _isServerRoutingEnabled = __webpack_require__(56);

var _isServerRoutingEnabled2 = _interopRequireDefault(_isServerRoutingEnabled);

var _reactRouter = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function redirect(url) {
    if ((0, _isServerRoutingEnabled2.default)()) {
        _reactRouter.browserHistory.push(url);
    } else {
        _reactRouter.hashHistory.push(url);
    }
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(redirect, 'redirect', '/Users/liang/Projects/readr/src/isomorphic/helpers/redirect.ts');
}();

;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(11).then((function (require) {
            fn(null, __webpack_require__(291).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(15).then((function (require) {
            fn(null, __webpack_require__(292).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(3).then((function (require) {
            fn(null, __webpack_require__(293).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(9).then((function (require) {
            fn(null, __webpack_require__(294).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(2).then((function (require) {
            fn(null, __webpack_require__(295).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(1).then((function (require) {
            fn(null, __webpack_require__(296).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(10).then((function (require) {
            fn(null, __webpack_require__(297).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(5).then((function (require) {
            fn(null, __webpack_require__(298).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(6).then((function (require) {
            fn(null, __webpack_require__(299).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(12).then((function (require) {
            fn(null, __webpack_require__(300).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(8).then((function (require) {
            fn(null, __webpack_require__(301).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(7).then((function (require) {
            fn(null, __webpack_require__(302).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(4).then((function (require) {
            fn(null, __webpack_require__(303).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(14).then((function (require) {
            fn(null, __webpack_require__(304).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(13).then((function (require) {
            fn(null, __webpack_require__(305).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(16).then((function (require) {
            fn(null, __webpack_require__(306).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(0).then((function (require) {
            fn(null, __webpack_require__(307).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Master = __webpack_require__(108);

var _Master2 = _interopRequireDefault(_Master);

var _App = __webpack_require__(105);

var _App2 = _interopRequireDefault(_App);

var _Console = __webpack_require__(107);

var _Console2 = _interopRequireDefault(_Console);

var _reactRouter = __webpack_require__(9);

var _api = __webpack_require__(22);

var _api2 = _interopRequireDefault(_api);

var _common = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createRoutes = function createRoutes() {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var request = context.request,
        response = context.response;

    var handleConsoleEnter = function handleConsoleEnter(nextState, replace, callback) {
        if (request) {
            // 服务端校验方式
            var role = request.context.user.role;

            if (role !== _common.ROLES.ADMIN) {
                response.redirect('/');
            }
            callback();
        } else {
            // 客户端校验方式
            try {
                _api2.default.auth().then(function (res) {
                    if (res.json.role !== _common.ROLES.ADMIN) {
                        replace('/');
                    }
                    callback();
                });
            } catch (error) {
                alert('服务器异常，请稍后再试！');
                console.error(error);
            }
        }
    };
    return _react2.default.createElement(_reactRouter.Route, { path: "/", component: _Master2.default }, _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "viewer/book/:id" }, __webpack_require__(150))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "test" }, __webpack_require__(149))), _react2.default.createElement(_reactRouter.Route, { component: _App2.default }, _react2.default.createElement(_reactRouter.IndexRoute, Object.assign({}, __webpack_require__(136))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "browse" }, __webpack_require__(138))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "book/:id" }, __webpack_require__(137))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "collections" }, __webpack_require__(140))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "collections/:id" }, __webpack_require__(139))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "signin" }, __webpack_require__(147))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "signup" }, __webpack_require__(148))), _react2.default.createElement(_reactRouter.Route, { path: "user" }, _react2.default.createElement(_reactRouter.IndexRedirect, { to: "/user/profile" }), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "shelf" }, __webpack_require__(146))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "preference" }, __webpack_require__(144))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "profile" }, __webpack_require__(145))))), _react2.default.createElement(_reactRouter.Route, { onEnter: handleConsoleEnter, path: "console", component: _Console2.default }, _react2.default.createElement(_reactRouter.IndexRedirect, { to: "/console/books" }), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "books" }, __webpack_require__(141))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "users" }, __webpack_require__(142))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "books/new" }, __webpack_require__(134))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "collections/new" }, __webpack_require__(135)))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "*" }, __webpack_require__(143))));
};
var _default = createRoutes;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(createRoutes, 'createRoutes', '/Users/liang/Projects/readr/src/isomorphic/routes/createRoutes.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/routes/createRoutes.tsx');
}();

;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logout = exports.auth = exports.userSignup = exports.userLogin = exports.fetchDoubanBooks = exports.fetchUsers = exports.fetchBooks = exports.fetchBookContent = exports.fetchBook = exports.fetchBookProgress = undefined;

var _omit2 = __webpack_require__(7);

var _omit3 = _interopRequireDefault(_omit2);

var _assign2 = __webpack_require__(3);

var _assign3 = _interopRequireDefault(_assign2);

exports.fetchNormalized = fetchNormalized;
exports.addCollection = addCollection;
exports.addBook = addBook;
exports.editBookMeta = editBookMeta;
exports.addAuthor = addAuthor;
exports.setProgress = setProgress;
exports.deleteBook = deleteBook;

var _callApi = __webpack_require__(33);

var _callApi2 = _interopRequireDefault(_callApi);

var _helpers = __webpack_require__(10);

var _helpers2 = _interopRequireDefault(_helpers);

var _normalizeResponse = __webpack_require__(154);

var _normalizeResponse2 = _interopRequireDefault(_normalizeResponse);

var _schemas = __webpack_require__(57);

var _schemas2 = _interopRequireDefault(_schemas);

var _utils = __webpack_require__(24);

var _utils2 = _interopRequireDefault(_utils);

var _common = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_ROOT = _helpers2.default.getApiRoot();
/**
 * general helper functions
 */
var parseEndpointWithOptions = function parseEndpointWithOptions(endpoint, options) {
    if (typeof options === 'string') {
        return options;
    } else {
        var queryString = _utils2.default.parseUrlencoded(options);
        return endpoint + '?' + queryString;
    }
};
function fetchNormalized(endpoint, schema) {
    var fetchOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (endpoint.indexOf('http://') !== -1) {
        return (0, _normalizeResponse2.default)((0, _callApi2.default)(endpoint, fetchOptions), schema);
    }
    return (0, _normalizeResponse2.default)((0, _callApi2.default)(API_ROOT + '/' + endpoint, fetchOptions), schema);
}
/**
 * specific api services
 */
var fetchBookProgress = exports.fetchBookProgress = function fetchBookProgress(id) {
    return fetchNormalized('user/books/' + id + '/progress', _schemas2.default.BOOK_PROGRESS);
};
var fetchBook = exports.fetchBook = function fetchBook(id) {
    return fetchNormalized('books/' + id, _schemas2.default.BOOK);
};
var fetchBookContent = exports.fetchBookContent = function fetchBookContent(id) {
    return fetchNormalized('books/' + id + '/content', _schemas2.default.BOOK_CONTENT);
};
var fetchBooks = exports.fetchBooks = function fetchBooks() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var withContent = options.withContent;

    var apiOptions = !withContent ? {
        exclude: 'content'
    } : {};
    apiOptions = (0, _assign3.default)({}, (0, _omit3.default)(options, ['withContent']), apiOptions);
    return fetchNormalized(parseEndpointWithOptions('books', apiOptions), _schemas2.default.BOOK_ARRAY);
};
var fetchUsers = exports.fetchUsers = function fetchUsers(options) {
    return fetchNormalized(parseEndpointWithOptions('users', options), _schemas2.default.USER_ARRAY);
};
// external apis
var fetchDoubanBooks = exports.fetchDoubanBooks = function fetchDoubanBooks(keyword) {
    return (0, _callApi2.default)(_common.DOUBAN_API_ROOT + '/book/search?count=10&q=' + keyword, {
        useJsonp: true
    });
};
var userLogin = exports.userLogin = function userLogin(data) {
    return (0, _callApi2.default)(API_ROOT + '/auth', {
        method: 'POST',
        data: data
    });
};
var userSignup = exports.userSignup = function userSignup(data) {
    return (0, _callApi2.default)(API_ROOT + '/users', {
        method: 'POST',
        data: data
    });
};
var auth = exports.auth = function auth() {
    return (0, _callApi2.default)(API_ROOT + '/auth', {
        method: 'GET'
    });
};
var logout = exports.logout = function logout() {
    return (0, _callApi2.default)(API_ROOT + '/auth/revoke', {
        method: 'PUT'
    });
};
function addCollection(data) {
    return (0, _callApi2.default)(API_ROOT + '/collections', { method: 'POST', data: data });
}
function addBook(data) {
    return (0, _callApi2.default)(API_ROOT + '/books', { method: 'POST', data: data });
}
function editBookMeta(bookId, data) {
    return (0, _callApi2.default)(API_ROOT + '/books/' + bookId, { method: 'PUT', data: data });
}
function addAuthor(data) {
    return (0, _callApi2.default)(API_ROOT + '/authors', { method: 'POST', data: data });
}
function setProgress(bookId, data) {
    (0, _callApi2.default)(API_ROOT + '/user/books/' + bookId + '/progress', { method: 'PUT', data: data });
}
function deleteBook(id) {
    return (0, _callApi2.default)(API_ROOT + '/books/' + id, {
        method: 'DELETE'
    });
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(API_ROOT, 'API_ROOT', '/Users/liang/Projects/readr/src/isomorphic/services/api/api.ts');

    __REACT_HOT_LOADER__.register(parseEndpointWithOptions, 'parseEndpointWithOptions', '/Users/liang/Projects/readr/src/isomorphic/services/api/api.ts');

    __REACT_HOT_LOADER__.register(fetchNormalized, 'fetchNormalized', '/Users/liang/Projects/readr/src/isomorphic/services/api/api.ts');

    __REACT_HOT_LOADER__.register(fetchBookProgress, 'fetchBookProgress', '/Users/liang/Projects/readr/src/isomorphic/services/api/api.ts');

    __REACT_HOT_LOADER__.register(fetchBook, 'fetchBook', '/Users/liang/Projects/readr/src/isomorphic/services/api/api.ts');

    __REACT_HOT_LOADER__.register(fetchBookContent, 'fetchBookContent', '/Users/liang/Projects/readr/src/isomorphic/services/api/api.ts');

    __REACT_HOT_LOADER__.register(fetchBooks, 'fetchBooks', '/Users/liang/Projects/readr/src/isomorphic/services/api/api.ts');

    __REACT_HOT_LOADER__.register(fetchUsers, 'fetchUsers', '/Users/liang/Projects/readr/src/isomorphic/services/api/api.ts');

    __REACT_HOT_LOADER__.register(fetchDoubanBooks, 'fetchDoubanBooks', '/Users/liang/Projects/readr/src/isomorphic/services/api/api.ts');

    __REACT_HOT_LOADER__.register(userLogin, 'userLogin', '/Users/liang/Projects/readr/src/isomorphic/services/api/api.ts');

    __REACT_HOT_LOADER__.register(userSignup, 'userSignup', '/Users/liang/Projects/readr/src/isomorphic/services/api/api.ts');

    __REACT_HOT_LOADER__.register(auth, 'auth', '/Users/liang/Projects/readr/src/isomorphic/services/api/api.ts');

    __REACT_HOT_LOADER__.register(logout, 'logout', '/Users/liang/Projects/readr/src/isomorphic/services/api/api.ts');

    __REACT_HOT_LOADER__.register(addCollection, 'addCollection', '/Users/liang/Projects/readr/src/isomorphic/services/api/api.ts');

    __REACT_HOT_LOADER__.register(addBook, 'addBook', '/Users/liang/Projects/readr/src/isomorphic/services/api/api.ts');

    __REACT_HOT_LOADER__.register(editBookMeta, 'editBookMeta', '/Users/liang/Projects/readr/src/isomorphic/services/api/api.ts');

    __REACT_HOT_LOADER__.register(addAuthor, 'addAuthor', '/Users/liang/Projects/readr/src/isomorphic/services/api/api.ts');

    __REACT_HOT_LOADER__.register(setProgress, 'setProgress', '/Users/liang/Projects/readr/src/isomorphic/services/api/api.ts');

    __REACT_HOT_LOADER__.register(deleteBook, 'deleteBook', '/Users/liang/Projects/readr/src/isomorphic/services/api/api.ts');
}();

;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = jsonp;
function jsonp(fullUrl) {
    if (fullUrl.indexOf('douban') !== -1) {
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
        return new Promise(function (resolve) {
            script.onload = function () {
                document.body.removeChild(document.getElementById(jsonpId));
                resolve({ json: window[jsonpCallbackData] });
            };
        });
    }
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(jsonp, 'jsonp', '/Users/liang/Projects/readr/src/isomorphic/services/utils/jsonp.ts');
}();

;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = normalizeResponse;

var _handleResponse = __webpack_require__(58);

var _handleResponse2 = _interopRequireDefault(_handleResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function normalizeResponse(resultPromise, schema) {
    return resultPromise.then(function (response) {
        return { response: (0, _handleResponse2.default)(response, schema) };
    }, function (error) {
        return { error: error };
    });
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(normalizeResponse, 'normalizeResponse', '/Users/liang/Projects/readr/src/isomorphic/services/utils/normalizeResponse.ts');
}();

;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LOAD_ACTIONS = exports.loadBookProgress = exports.progress = exports.userLogout = exports.logout = exports.loadUsers = exports.users = exports.loadBooks = exports.books = exports.loadBookContent = exports.bookContent = exports.loadBook = exports.book = exports.removeEntity = undefined;
exports.fetchAuthors = fetchAuthors;
exports.fetchCollections = fetchCollections;
exports.fetchCollection = fetchCollection;
exports.searchDoubanBooks = searchDoubanBooks;
exports.fetchProfile = fetchProfile;
exports.userAuth = userAuth;
exports.fetchShelf = fetchShelf;

var _utils = __webpack_require__(24);

var _utils2 = _interopRequireDefault(_utils);

var _schemas = __webpack_require__(57);

var _schemas2 = _interopRequireDefault(_schemas);

var _common = __webpack_require__(8);

var _utils3 = __webpack_require__(59);

var _actionTypes = __webpack_require__(6);

var ActionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var removeEntity = exports.removeEntity = function removeEntity(name, id) {
    return { type: ActionTypes.REMOVE_ENTITY, name: name, id: id };
};
var book = exports.book = (0, _utils3.createActionEntity)(ActionTypes.BOOK);
var loadBook = exports.loadBook = function loadBook(id) {
    return (0, _utils3.action)(ActionTypes.LOAD_BOOK, { id: id });
};
var bookContent = exports.bookContent = (0, _utils3.createActionEntity)(ActionTypes.BOOK_CONTENT);
var loadBookContent = exports.loadBookContent = function loadBookContent(id) {
    return (0, _utils3.action)(ActionTypes.LOAD_BOOK_CONTENT, { id: id });
};
var books = exports.books = (0, _utils3.createActionEntity)(ActionTypes.BOOKS);
var loadBooks = exports.loadBooks = function loadBooks(options, key) {
    return (0, _utils3.action)(ActionTypes.LOAD_BOOKS, { options: options, key: key });
};
var users = exports.users = (0, _utils3.createActionEntity)(ActionTypes.USERS);
var loadUsers = exports.loadUsers = function loadUsers(options) {
    return (0, _utils3.action)(ActionTypes.LOAD_USERS, { options: options });
};
var logout = exports.logout = (0, _utils3.createActionEntity)(ActionTypes.LOGOUT);
var userLogout = exports.userLogout = function userLogout() {
    return (0, _utils3.action)(ActionTypes.USER_LOGOUT);
};
var progress = exports.progress = (0, _utils3.createActionEntity)(ActionTypes.BOOK_PROGRESS);
var loadBookProgress = exports.loadBookProgress = function loadBookProgress(id) {
    return (0, _utils3.action)(ActionTypes.LOAD_BOOK_PROGRESS, { id: id });
};
// define load actions handled in sagas
var LOAD_ACTIONS = exports.LOAD_ACTIONS = [ActionTypes.LOAD_BOOK, ActionTypes.LOAD_BOOK_CONTENT, ActionTypes.LOAD_BOOKS, ActionTypes.LOAD_USERS];
/**
 * legacy call api actions
 */
function fetchAuthors(options) {
    var CALL_API = {
        types: [ActionTypes.AUTHORS.REQUEST, ActionTypes.AUTHORS.SUCCESS, ActionTypes.AUTHORS.FAILURE],
        endpoint: 'authors?' + _utils2.default.parseUrlencoded(options),
        schema: _schemas2.default.AUTHOR_ARRAY,
        pagination: {
            name: 'authors',
            q: options.q
        }
    };
    return { CALL_API: CALL_API };
}
function fetchCollections() {
    var flowType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'newest';

    return {
        flowType: flowType,
        CALL_API: {
            types: [ActionTypes.COLLECTIONS.REQUEST, ActionTypes.COLLECTIONS.SUCCESS, ActionTypes.COLLECTIONS.FAILURE],
            endpoint: 'collections',
            schema: _schemas2.default.COLLECTION_ARRAY
        }
    };
}
function fetchCollection(collectionId) {
    return {
        collectionId: collectionId,
        CALL_API: {
            types: [ActionTypes.COLLECTION.REQUEST, ActionTypes.COLLECTION.SUCCESS, ActionTypes.COLLECTION.FAILURE],
            endpoint: 'collections/' + collectionId,
            schema: _schemas2.default.COLLECTION
        }
    };
}
function searchDoubanBooks(q) {
    var CALL_API = {
        types: [ActionTypes.DOUBAN_BOOKS.REQUEST, ActionTypes.DOUBAN_BOOKS.SUCCESS, ActionTypes.DOUBAN_BOOKS.FAILURE],
        endpoint: 'book/search?count=10&q=' + q,
        apiUrl: _common.DOUBAN_API_ROOT,
        schema: _schemas2.default.DOUBAN_BOOK_SEARCH_RESULTS,
        options: { useJsonp: true },
        pagination: {
            name: 'doubanBooks',
            q: q
        }
    };
    return { q: q, CALL_API: CALL_API };
}
function fetchProfile() {
    var CALL_API = {
        types: [ActionTypes.PROFILE.REQUEST, ActionTypes.PROFILE.SUCCESS, ActionTypes.PROFILE.FAILURE],
        endpoint: 'user/profile',
        schema: _schemas2.default.PROFILE
    };
    return { CALL_API: CALL_API };
}
function userAuth(userSession) {
    // 服务端渲染 session
    if (userSession) {
        return {
            SERVER_STORE: {
                body: {
                    response: userSession,
                    type: ActionTypes.AUTH.SUCCESS
                }
            }
        };
    }
    return {
        CALL_API: {
            types: [ActionTypes.AUTH.REQUEST, ActionTypes.AUTH.SUCCESS, ActionTypes.AUTH.FAILURE],
            endpoint: 'auth'
        }
    };
}
function fetchShelf() {
    var CALL_API = {
        types: [ActionTypes.SHELF.REQUEST, ActionTypes.SHELF.SUCCESS, ActionTypes.SHELF.FAILURE],
        endpoint: 'user/books/shelf',
        schema: _schemas2.default.SHELF_BOOK_ARRAY,
        pagination: {
            name: 'bookShelves'
        }
    };
    return { CALL_API: CALL_API };
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(removeEntity, 'removeEntity', '/Users/liang/Projects/readr/src/isomorphic/store/actions/api.ts');

    __REACT_HOT_LOADER__.register(book, 'book', '/Users/liang/Projects/readr/src/isomorphic/store/actions/api.ts');

    __REACT_HOT_LOADER__.register(loadBook, 'loadBook', '/Users/liang/Projects/readr/src/isomorphic/store/actions/api.ts');

    __REACT_HOT_LOADER__.register(bookContent, 'bookContent', '/Users/liang/Projects/readr/src/isomorphic/store/actions/api.ts');

    __REACT_HOT_LOADER__.register(loadBookContent, 'loadBookContent', '/Users/liang/Projects/readr/src/isomorphic/store/actions/api.ts');

    __REACT_HOT_LOADER__.register(books, 'books', '/Users/liang/Projects/readr/src/isomorphic/store/actions/api.ts');

    __REACT_HOT_LOADER__.register(loadBooks, 'loadBooks', '/Users/liang/Projects/readr/src/isomorphic/store/actions/api.ts');

    __REACT_HOT_LOADER__.register(users, 'users', '/Users/liang/Projects/readr/src/isomorphic/store/actions/api.ts');

    __REACT_HOT_LOADER__.register(loadUsers, 'loadUsers', '/Users/liang/Projects/readr/src/isomorphic/store/actions/api.ts');

    __REACT_HOT_LOADER__.register(logout, 'logout', '/Users/liang/Projects/readr/src/isomorphic/store/actions/api.ts');

    __REACT_HOT_LOADER__.register(userLogout, 'userLogout', '/Users/liang/Projects/readr/src/isomorphic/store/actions/api.ts');

    __REACT_HOT_LOADER__.register(progress, 'progress', '/Users/liang/Projects/readr/src/isomorphic/store/actions/api.ts');

    __REACT_HOT_LOADER__.register(loadBookProgress, 'loadBookProgress', '/Users/liang/Projects/readr/src/isomorphic/store/actions/api.ts');

    __REACT_HOT_LOADER__.register(LOAD_ACTIONS, 'LOAD_ACTIONS', '/Users/liang/Projects/readr/src/isomorphic/store/actions/api.ts');

    __REACT_HOT_LOADER__.register(fetchAuthors, 'fetchAuthors', '/Users/liang/Projects/readr/src/isomorphic/store/actions/api.ts');

    __REACT_HOT_LOADER__.register(fetchCollections, 'fetchCollections', '/Users/liang/Projects/readr/src/isomorphic/store/actions/api.ts');

    __REACT_HOT_LOADER__.register(fetchCollection, 'fetchCollection', '/Users/liang/Projects/readr/src/isomorphic/store/actions/api.ts');

    __REACT_HOT_LOADER__.register(searchDoubanBooks, 'searchDoubanBooks', '/Users/liang/Projects/readr/src/isomorphic/store/actions/api.ts');

    __REACT_HOT_LOADER__.register(fetchProfile, 'fetchProfile', '/Users/liang/Projects/readr/src/isomorphic/store/actions/api.ts');

    __REACT_HOT_LOADER__.register(userAuth, 'userAuth', '/Users/liang/Projects/readr/src/isomorphic/store/actions/api.ts');

    __REACT_HOT_LOADER__.register(fetchShelf, 'fetchShelf', '/Users/liang/Projects/readr/src/isomorphic/store/actions/api.ts');
}();

;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendNotification = undefined;
exports.showNotification = showNotification;
exports.hideNotification = hideNotification;
exports.openConfirmModal = openConfirmModal;
exports.closeConfirmModal = closeConfirmModal;
exports.openModal = openModal;
exports.closeModal = closeModal;

var _actionTypes = __webpack_require__(6);

var ActionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var sendNotification = exports.sendNotification = function sendNotification(message) {
    var msgType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
    var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;

    return function (dispatch, getState) {
        var id = Math.random().toFixed(8).substr(2);
        dispatch(showNotification(id, message, msgType));
        if (t !== 0) {
            setTimeout(function () {
                dispatch(hideNotification(id));
            }, t);
        }
    };
};
function showNotification(id, message) {
    var msgType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'success';

    return {
        type: ActionTypes.NOTIFICATION.SHOW,
        message: message,
        msgType: msgType,
        id: id
    };
}
function hideNotification(id) {
    return {
        type: ActionTypes.NOTIFICATION.HIDE,
        id: id
    };
}
function openConfirmModal(data) {
    return {
        type: ActionTypes.OPEN_CONFIRM_MODAL,
        data: data
    };
}
function closeConfirmModal() {
    return {
        type: ActionTypes.CLOSE_CONFIRM_MODAL
    };
}
function openModal(data) {
    return {
        type: ActionTypes.MODAL.OPEN,
        data: data
    };
}
function closeModal() {
    return {
        type: ActionTypes.MODAL.CLOSE
    };
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(sendNotification, 'sendNotification', '/Users/liang/Projects/readr/src/isomorphic/store/actions/common.ts');

    __REACT_HOT_LOADER__.register(showNotification, 'showNotification', '/Users/liang/Projects/readr/src/isomorphic/store/actions/common.ts');

    __REACT_HOT_LOADER__.register(hideNotification, 'hideNotification', '/Users/liang/Projects/readr/src/isomorphic/store/actions/common.ts');

    __REACT_HOT_LOADER__.register(openConfirmModal, 'openConfirmModal', '/Users/liang/Projects/readr/src/isomorphic/store/actions/common.ts');

    __REACT_HOT_LOADER__.register(closeConfirmModal, 'closeConfirmModal', '/Users/liang/Projects/readr/src/isomorphic/store/actions/common.ts');

    __REACT_HOT_LOADER__.register(openModal, 'openModal', '/Users/liang/Projects/readr/src/isomorphic/store/actions/common.ts');

    __REACT_HOT_LOADER__.register(closeModal, 'closeModal', '/Users/liang/Projects/readr/src/isomorphic/store/actions/common.ts');
}();

;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var loadSomething = exports.loadSomething = function loadSomething() {
    return {
        type: 'LOAD'
    };
};
var saveSomething = exports.saveSomething = function saveSomething() {
    return {
        type: 'SAVE'
    };
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(loadSomething, 'loadSomething', '/Users/liang/Projects/readr/src/isomorphic/store/actions/test.ts');

    __REACT_HOT_LOADER__.register(saveSomething, 'saveSomething', '/Users/liang/Projects/readr/src/isomorphic/store/actions/test.ts');
}();

;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toggleViewerScrollMode = exports.changeViewerTheme = exports.changeViewerFontSize = exports.toggleViewerNavigation = exports.toggleViewerPreference = exports.toggleViewerPanel = exports.viewerJumpTo = exports.destroyBookProgress = exports.updateBookProgress = exports.initializeBookProgress = exports.calcBookFailure = exports.calcBookSuccess = exports.calcBook = exports.configViewer = exports.initializeViewer = exports.initializeViewerConfig = undefined;

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

var _actionTypes = __webpack_require__(6);

var ACTION_TYPES = _interopRequireWildcard(_actionTypes);

var _helpers = __webpack_require__(10);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// viewer
var initializeViewerConfig = exports.initializeViewerConfig = function initializeViewerConfig(bookId) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return { bookId: bookId, config: config, type: ACTION_TYPES.VIEWER.INITIALIZE_CONFIG };
};
var initializeViewer = exports.initializeViewer = function initializeViewer(bookId) {
    return { bookId: bookId, type: ACTION_TYPES.VIEWER.INITIALIZE };
};
var configViewer = exports.configViewer = function configViewer(bookId, payload) {
    return {
        bookId: bookId,
        payload: payload,
        type: ACTION_TYPES.VIEWER.CONFIG
    };
};
// book
var calcBook = exports.calcBook = function calcBook(bookId, wrap) {
    return {
        bookId: bookId,
        wrap: wrap,
        type: ACTION_TYPES.VIEWER.CALC_START
    };
};
var calcBookSuccess = exports.calcBookSuccess = function calcBookSuccess(bookId, computed) {
    return {
        bookId: bookId,
        computed: computed,
        type: ACTION_TYPES.VIEWER.CALC_SUCCESS
    };
};
var calcBookFailure = exports.calcBookFailure = function calcBookFailure(bookId, error) {
    return {
        bookId: bookId,
        error: error,
        type: ACTION_TYPES.VIEWER.CALC_FAILURE
    };
};
var initializeBookProgress = exports.initializeBookProgress = function initializeBookProgress() {
    return { type: ACTION_TYPES.VIEWER.BOOK_PROGRESS_INITIALIZE };
};
// progress
var updateBookProgress = exports.updateBookProgress = function updateBookProgress(percentage) {
    return function (dispatch, getState) {
        _helpers2.default.print('Action updateBookProgress');
        var state = getState();

        var _selectors$viewer$con = selectors.viewer.config(state),
            bookId = _selectors$viewer$con.bookId;

        var computed = selectors.viewer.computed(bookId)(state);
        var pageNo = Math.floor(computed.length * percentage) + 1;
        return dispatch({
            id: bookId,
            percentage: percentage,
            pageNo: pageNo,
            type: ACTION_TYPES.VIEWER.BOOK_PROGRESS_UPDATE
        });
    };
};
var destroyBookProgress = exports.destroyBookProgress = function destroyBookProgress() {
    return {
        type: ACTION_TYPES.VIEWER.BOOK_PROGRESS_DESTROY
    };
};
var viewerJumpTo = exports.viewerJumpTo = function viewerJumpTo(percentage) {
    return { type: ACTION_TYPES.VIEWER.JUMP, percentage: percentage };
};
// sub components
var toggleViewerPanel = exports.toggleViewerPanel = function toggleViewerPanel(reset) {
    return { type: ACTION_TYPES.VIEWER.PANEL_TOGGLE, reset: reset };
};
var toggleViewerPreference = exports.toggleViewerPreference = function toggleViewerPreference(reset) {
    return { type: ACTION_TYPES.VIEWER.PREFERENCE_TOGGLE, reset: reset };
};
var toggleViewerNavigation = exports.toggleViewerNavigation = function toggleViewerNavigation(reset) {
    return { type: ACTION_TYPES.VIEWER.NAVIGATION_TOGGLE, reset: reset };
};
// config
var changeViewerFontSize = exports.changeViewerFontSize = function changeViewerFontSize(fontSizeInPixel) {
    return { type: ACTION_TYPES.VIEWER.FONT_CHANGE, fontSize: fontSizeInPixel };
};
var changeViewerTheme = exports.changeViewerTheme = function changeViewerTheme(themeName) {
    return { type: ACTION_TYPES.VIEWER.THEME_CHANGE, theme: themeName };
};
var toggleViewerScrollMode = exports.toggleViewerScrollMode = function toggleViewerScrollMode(reset) {
    return { type: ACTION_TYPES.VIEWER.SCROLL_MODE_TOGGLE, reset: reset };
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(initializeViewerConfig, 'initializeViewerConfig', '/Users/liang/Projects/readr/src/isomorphic/store/actions/viewer.ts');

    __REACT_HOT_LOADER__.register(initializeViewer, 'initializeViewer', '/Users/liang/Projects/readr/src/isomorphic/store/actions/viewer.ts');

    __REACT_HOT_LOADER__.register(configViewer, 'configViewer', '/Users/liang/Projects/readr/src/isomorphic/store/actions/viewer.ts');

    __REACT_HOT_LOADER__.register(calcBook, 'calcBook', '/Users/liang/Projects/readr/src/isomorphic/store/actions/viewer.ts');

    __REACT_HOT_LOADER__.register(calcBookSuccess, 'calcBookSuccess', '/Users/liang/Projects/readr/src/isomorphic/store/actions/viewer.ts');

    __REACT_HOT_LOADER__.register(calcBookFailure, 'calcBookFailure', '/Users/liang/Projects/readr/src/isomorphic/store/actions/viewer.ts');

    __REACT_HOT_LOADER__.register(initializeBookProgress, 'initializeBookProgress', '/Users/liang/Projects/readr/src/isomorphic/store/actions/viewer.ts');

    __REACT_HOT_LOADER__.register(updateBookProgress, 'updateBookProgress', '/Users/liang/Projects/readr/src/isomorphic/store/actions/viewer.ts');

    __REACT_HOT_LOADER__.register(destroyBookProgress, 'destroyBookProgress', '/Users/liang/Projects/readr/src/isomorphic/store/actions/viewer.ts');

    __REACT_HOT_LOADER__.register(viewerJumpTo, 'viewerJumpTo', '/Users/liang/Projects/readr/src/isomorphic/store/actions/viewer.ts');

    __REACT_HOT_LOADER__.register(toggleViewerPanel, 'toggleViewerPanel', '/Users/liang/Projects/readr/src/isomorphic/store/actions/viewer.ts');

    __REACT_HOT_LOADER__.register(toggleViewerPreference, 'toggleViewerPreference', '/Users/liang/Projects/readr/src/isomorphic/store/actions/viewer.ts');

    __REACT_HOT_LOADER__.register(toggleViewerNavigation, 'toggleViewerNavigation', '/Users/liang/Projects/readr/src/isomorphic/store/actions/viewer.ts');

    __REACT_HOT_LOADER__.register(changeViewerFontSize, 'changeViewerFontSize', '/Users/liang/Projects/readr/src/isomorphic/store/actions/viewer.ts');

    __REACT_HOT_LOADER__.register(changeViewerTheme, 'changeViewerTheme', '/Users/liang/Projects/readr/src/isomorphic/store/actions/viewer.ts');

    __REACT_HOT_LOADER__.register(toggleViewerScrollMode, 'toggleViewerScrollMode', '/Users/liang/Projects/readr/src/isomorphic/store/actions/viewer.ts');
}();

;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(17);

var _reduxThunk = __webpack_require__(287);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(165);

var _reducers2 = _interopRequireDefault(_reducers);

var _api = __webpack_require__(60);

var _api2 = _interopRequireDefault(_api);

var _modifyResponse = __webpack_require__(63);

var _modifyResponse2 = _interopRequireDefault(_modifyResponse);

var _handleServerStore = __webpack_require__(61);

var _handleServerStore2 = _interopRequireDefault(_handleServerStore);

var _handleInitialState = __webpack_require__(160);

var _handleInitialState2 = _interopRequireDefault(_handleInitialState);

var _logActionTypes = __webpack_require__(62);

var _logActionTypes2 = _interopRequireDefault(_logActionTypes);

var _reduxLogger = __webpack_require__(286);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _middleware = __webpack_require__(162);

var _middleware2 = _interopRequireDefault(_middleware);

var _reduxSaga = __webpack_require__(79);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _helpers = __webpack_require__(10);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sagaMiddleware = (0, _reduxSaga2.default)();
var SERVER_MIDDLEWARES_DEV = [_handleServerStore2.default, sagaMiddleware, _api2.default, _middleware2.default.cache, _modifyResponse2.default, _reduxThunk2.default, _logActionTypes2.default];
var SERVER_MIDDLEWARES_PROD = [_handleServerStore2.default, sagaMiddleware, _api2.default, _middleware2.default.cache, _modifyResponse2.default, _reduxThunk2.default];
var MIDDLEWARES_DEV = [sagaMiddleware, _api2.default, _middleware2.default.cache, _modifyResponse2.default, _reduxThunk2.default, (0, _reduxLogger2.default)({ collapsed: true })];
var MIDDLEWARES_PROD = [sagaMiddleware, _api2.default, _middleware2.default.cache, _modifyResponse2.default, _reduxThunk2.default];
function configureStore() {
    var middlewares = void 0;
    if (_helpers2.default.isServerEnv()) {
        // server side
        if (process.env.NODE_ENV === 'production') {
            middlewares = SERVER_MIDDLEWARES_PROD;
        } else {
            middlewares = SERVER_MIDDLEWARES_DEV;
        }
    } else {
        // client side
        if (process.env.NODE_ENV === 'production') {
            middlewares = MIDDLEWARES_PROD;
        } else {
            middlewares = MIDDLEWARES_DEV;
        }
    }
    var store = (0, _redux.createStore)(_reducers2.default, (0, _handleInitialState2.default)(), _redux.applyMiddleware.apply(null, middlewares));
    if (false) {
        module.hot.accept('./reducers', function () {
            console.info('hot updating reducers');
            var nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    return Object.assign({}, store, {
        runSaga: sagaMiddleware.run,
        close: function close() {
            return store.dispatch(_reduxSaga.END);
        }
    });
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(sagaMiddleware, 'sagaMiddleware', '/Users/liang/Projects/readr/src/isomorphic/store/configureStore.ts');

    __REACT_HOT_LOADER__.register(SERVER_MIDDLEWARES_DEV, 'SERVER_MIDDLEWARES_DEV', '/Users/liang/Projects/readr/src/isomorphic/store/configureStore.ts');

    __REACT_HOT_LOADER__.register(SERVER_MIDDLEWARES_PROD, 'SERVER_MIDDLEWARES_PROD', '/Users/liang/Projects/readr/src/isomorphic/store/configureStore.ts');

    __REACT_HOT_LOADER__.register(MIDDLEWARES_DEV, 'MIDDLEWARES_DEV', '/Users/liang/Projects/readr/src/isomorphic/store/configureStore.ts');

    __REACT_HOT_LOADER__.register(MIDDLEWARES_PROD, 'MIDDLEWARES_PROD', '/Users/liang/Projects/readr/src/isomorphic/store/configureStore.ts');

    __REACT_HOT_LOADER__.register(configureStore, 'configureStore', '/Users/liang/Projects/readr/src/isomorphic/store/configureStore.ts');
}();

;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = handleInitialState;

var _common = __webpack_require__(8);

function handleInitialState() {
    if (typeof window === 'undefined') {
        return {};
    }
    return window[_common.INITIAL_STATE] || {};
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(handleInitialState, 'handleInitialState', '/Users/liang/Projects/readr/src/isomorphic/store/handleInitialState.ts');
}();

;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// import md5 from '../../../../vendor_modules/md5'
var SUCCESS = 'SUCCESS';
var isSuccessAction = function isSuccessAction(action) {
    // console.log(action)
    // return true
    // return _.last(action.type.split('/')) === SUCCESS
};
var cacheResponseAction = function cacheResponseAction(action) {
    // console.log('cached')
};

var _default = function _default(store) {
    return function (next) {
        return function (action) {
            // if (action.cacheKey) {
            //   // function* gen() {
            //   //   yield 1
            //   // }
            //   // const fuck = gen()
            //   // console.log(fuck.next())
            //   next({
            //     type: 'cache'
            //   })
            //   // return false
            // }
            // if (action.cacheKey && isSuccessAction(action)) {
            //   cacheResponseAction(action)
            //   next(action)
            //   return false
            // }
            return next(action);
        };
    };
};

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(SUCCESS, 'SUCCESS', '/Users/liang/Projects/readr/src/isomorphic/store/middleware/cache.ts');

    __REACT_HOT_LOADER__.register(isSuccessAction, 'isSuccessAction', '/Users/liang/Projects/readr/src/isomorphic/store/middleware/cache.ts');

    __REACT_HOT_LOADER__.register(cacheResponseAction, 'cacheResponseAction', '/Users/liang/Projects/readr/src/isomorphic/store/middleware/cache.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/store/middleware/cache.ts');
}();

;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _api = __webpack_require__(60);

var _api2 = _interopRequireDefault(_api);

var _modifyResponse = __webpack_require__(63);

var _modifyResponse2 = _interopRequireDefault(_modifyResponse);

var _handleServerStore = __webpack_require__(61);

var _handleServerStore2 = _interopRequireDefault(_handleServerStore);

var _logActionTypes = __webpack_require__(62);

var _logActionTypes2 = _interopRequireDefault(_logActionTypes);

var _cache = __webpack_require__(161);

var _cache2 = _interopRequireDefault(_cache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
    api: _api2.default,
    modifyResponse: _modifyResponse2.default,
    handleServerStore: _handleServerStore2.default,
    logActionTypes: _logActionTypes2.default,
    cache: _cache2.default
};
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/store/middleware/index.ts');
}();

;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(17);

var _actionTypes = __webpack_require__(6);

var ACTION_TYPES = _interopRequireWildcard(_actionTypes);

var _viewer = __webpack_require__(164);

var _viewer2 = _interopRequireDefault(_viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function notifications() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    if (action.type === ACTION_TYPES.NOTIFICATION.HIDE) {
        return state.map(function (n) {
            return n.id === action.id ? Object.assign({}, n, { visible: false }) : n;
        });
    }
    if (action.type === ACTION_TYPES.NOTIFICATION.SHOW) {
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
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (action.type === ACTION_TYPES.OPEN_CONFIRM_MODAL) {
        return Object.assign({}, state, { open: true }, action.data);
    }
    if (action.type === ACTION_TYPES.CLOSE_CONFIRM_MODAL) {
        return {
            open: false
        };
    }
    return state;
}
function modal() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (action.type === ACTION_TYPES.MODAL.OPEN) {
        return Object.assign({}, state, { open: true }, action.data);
    }
    if (action.type === ACTION_TYPES.MODAL.CLOSE) {
        return {
            open: false
        };
    }
    return state;
}
var components = (0, _redux.combineReducers)({
    notifications: notifications,
    confirmModal: confirmModal,
    modal: modal,
    viewer: _viewer2.default
});
var _default = components;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(notifications, 'notifications', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/components/index.ts');

    __REACT_HOT_LOADER__.register(confirmModal, 'confirmModal', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/components/index.ts');

    __REACT_HOT_LOADER__.register(modal, 'modal', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/components/index.ts');

    __REACT_HOT_LOADER__.register(components, 'components', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/components/index.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/components/index.ts');
}();

;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign3 = __webpack_require__(3);

var _assign4 = _interopRequireDefault(_assign3);

var _merge4 = __webpack_require__(26);

var _merge5 = _interopRequireDefault(_merge4);

var _redux = __webpack_require__(17);

var _actionTypes = __webpack_require__(6);

var ACTION_TYPES = _interopRequireWildcard(_actionTypes);

var _constants = __webpack_require__(104);

var CONSTANTS = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getFlag = function getFlag(reset, currentFlag) {
    if (typeof reset === 'undefined') {
        return !currentFlag;
    }
    return reset;
};
function contents() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case ACTION_TYPES.VIEWER.CALC_SUCCESS:
            return (0, _merge5.default)({}, state, _defineProperty({}, action.bookId, {
                computed: action.computed
            }));
        default:
            return state;
    }
}
function config() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { theme: CONSTANTS.VIEWER_DEFS.THEMES.WHITE, isScrollMode: true };
    var action = arguments[1];

    switch (action.type) {
        case ACTION_TYPES.VIEWER.SCROLL_MODE_TOGGLE:
            var reset = action.reset;

            return (0, _merge5.default)({}, state, {
                isScrollMode: getFlag(reset, state.isScrollMode)
            });
        case ACTION_TYPES.VIEWER.THEME_CHANGE:
            return (0, _merge5.default)({}, state, {
                theme: action.theme
            });
        case ACTION_TYPES.VIEWER.FONT_CHANGE:
            return (0, _merge5.default)({}, state, {
                fontSize: action.fontSize
            });
        case ACTION_TYPES.VIEWER.CONFIG:
            return (0, _merge5.default)({}, state, {
                bookId: action.bookId
            }, action.payload);
        default:
            return state;
    }
}
function progress() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case ACTION_TYPES.VIEWER.BOOK_PROGRESS_UPDATE:
            return (0, _merge5.default)({}, state, _defineProperty({}, action.id, {
                isFetching: false,
                percentage: action.percentage,
                pageNo: action.pageNo
            }));
        case ACTION_TYPES.VIEWER.BOOK_PROGRESS_DESTROY:
            return (0, _assign4.default)({}, state, _defineProperty({}, action.id, {
                isFetching: false
            }));
        default:
            return state;
    }
}
var panel = function panel() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { show: false };
    var action = arguments[1];

    switch (action.type) {
        case ACTION_TYPES.VIEWER.PANEL_TOGGLE:
            var reset = action.reset;

            var a = getFlag(reset, state.show);
            return {
                show: a
            };
        default:
            return state;
    }
};
var preference = function preference() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { show: false };
    var action = arguments[1];

    switch (action.type) {
        case ACTION_TYPES.VIEWER.PREFERENCE_TOGGLE:
            var reset = action.reset;

            return {
                show: getFlag(reset, state.show)
            };
        default:
            return state;
    }
};
var navigation = function navigation() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { show: false };
    var action = arguments[1];

    switch (action.type) {
        case ACTION_TYPES.VIEWER.NAVIGATION_TOGGLE:
            var reset = action.reset;

            return {
                show: getFlag(reset, state.show)
            };
        default:
            return state;
    }
};
var components = (0, _redux.combineReducers)({
    panel: panel,
    preference: preference,
    navigation: navigation
});

var _default = (0, _redux.combineReducers)({
    config: config,
    contents: contents,
    progress: progress,
    components: components
});

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(getFlag, 'getFlag', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/components/viewer.ts');

    __REACT_HOT_LOADER__.register(contents, 'contents', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/components/viewer.ts');

    __REACT_HOT_LOADER__.register(config, 'config', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/components/viewer.ts');

    __REACT_HOT_LOADER__.register(progress, 'progress', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/components/viewer.ts');

    __REACT_HOT_LOADER__.register(panel, 'panel', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/components/viewer.ts');

    __REACT_HOT_LOADER__.register(preference, 'preference', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/components/viewer.ts');

    __REACT_HOT_LOADER__.register(navigation, 'navigation', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/components/viewer.ts');

    __REACT_HOT_LOADER__.register(components, 'components', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/components/viewer.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/components/viewer.ts');
}();

;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _omit2 = __webpack_require__(7);

var _omit3 = _interopRequireDefault(_omit2);

var _assign3 = __webpack_require__(3);

var _assign4 = _interopRequireDefault(_assign3);

var _merge2 = __webpack_require__(26);

var _merge3 = _interopRequireDefault(_merge2);

exports.entities = entities;
exports.session = session;

var _redux = __webpack_require__(17);

var _reactRouterRedux = __webpack_require__(78);

var _components = __webpack_require__(163);

var _components2 = _interopRequireDefault(_components);

var _pagination = __webpack_require__(167);

var _pagination2 = _interopRequireDefault(_pagination);

var _betterReduxForm = __webpack_require__(28);

var _actionTypes = __webpack_require__(6);

var ActionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function errorMessage() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];
    var error = action.error;

    if (error) {
        return [].concat(_toConsumableArray(state), [action.error.message || '发生未知错误！']);
    }
    return state;
}
function entities() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (action.response && action.response.entities) {
        return (0, _merge3.default)({}, state, action.response.entities);
    }
    if (action.type === ActionTypes.REMOVE_ENTITY) {
        var name = action.name,
            id = action.id;

        return (0, _assign4.default)({}, state, _defineProperty({}, name, (0, _omit3.default)(state[name], [id])));
    }
    return state;
}
var DEFAULT_VISTOR_STATE = { user: { role: 'visitor' }, isFetching: false, determined: false };
function session() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_VISTOR_STATE;
    var action = arguments[1];

    switch (action.type) {
        case ActionTypes.AUTH.REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case ActionTypes.AUTH.SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                determined: true,
                user: action.response
            });
        case ActionTypes.AUTH.FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                determined: true
            });
        case ActionTypes.LOGOUT.SUCCESS:
            return Object.assign({}, DEFAULT_VISTOR_STATE, {
                determined: true
            });
        default:
            return state;
    }
}
var rootReducer = (0, _redux.combineReducers)({
    components: _components2.default,
    entities: entities,
    errorMessage: errorMessage,
    session: session,
    routing: _reactRouterRedux.routerReducer,
    form: _betterReduxForm.reducer,
    pagination: _pagination2.default
});
var _default = rootReducer;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(errorMessage, 'errorMessage', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/index.ts');

    __REACT_HOT_LOADER__.register(entities, 'entities', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/index.ts');

    __REACT_HOT_LOADER__.register(DEFAULT_VISTOR_STATE, 'DEFAULT_VISTOR_STATE', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/index.ts');

    __REACT_HOT_LOADER__.register(session, 'session', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/index.ts');

    __REACT_HOT_LOADER__.register(rootReducer, 'rootReducer', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/index.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/index.ts');
}();

;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEFAULT_PAGINATION_STATE = undefined;

var _merge3 = __webpack_require__(26);

var _merge4 = _interopRequireDefault(_merge3);

var _union2 = __webpack_require__(279);

var _union3 = _interopRequireDefault(_union2);

var _assign3 = __webpack_require__(3);

var _assign4 = _interopRequireDefault(_assign3);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.computePaginationState = computePaginationState;
exports.default = paginate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_PAGINATION_STATE = exports.DEFAULT_PAGINATION_STATE = {
    isFetching: false,
    pages: {},
    ids: [],
    pageCount: 0
};
function computePaginationState(state, action) {
    var currentPage = action.response._next ? action.response._next.page - 1 : action.response._last && action.response._last.page || 1;
    var pages = (0, _assign4.default)({}, _defineProperty({}, currentPage, action.response.result));
    return (0, _assign4.default)({}, state, {
        isFetching: false,
        pages: pages,
        ids: (0, _union3.default)(state.ids, action.response.result),
        // 如果不使用 null 在外层的 merge 会忽略 undefined 从而导致一些边缘问题
        next: action.response._next || null,
        last: action.response._last || null,
        pageCount: state.pageCount + 1
    });
}
function paginate(_ref) {
    var types = _ref.types,
        mapActionToKey = _ref.mapActionToKey;

    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected types to be an array of three elements.');
    }
    if (!types.every(function (t) {
        return typeof t === 'string';
    })) {
        throw new Error('Expected types to be strings.');
    }
    if (typeof mapActionToKey !== 'function') {
        throw new Error('Expected mapActionToKey to be a function.');
    }

    var _types = _slicedToArray(types, 3),
        requestType = _types[0],
        successType = _types[1],
        failureType = _types[2];

    function updatePagination() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_PAGINATION_STATE;
        var action = arguments[1];

        switch (action.type) {
            case requestType:
                return (0, _assign4.default)({}, state, {
                    isFetching: true
                });
            case successType:
                return computePaginationState(state, action);
            case failureType:
                return (0, _assign4.default)({}, state, {
                    isFetching: false
                });
            default:
                return state;
        }
    }
    return function updatePaginationByKey() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments[1];

        switch (action.type) {
            case requestType:
            case successType:
            case failureType:
                var key = mapActionToKey(action);
                if (typeof key !== 'string') {
                    throw new Error('Expected key to be a string.');
                }
                return (0, _merge4.default)({}, state, _defineProperty({}, key, updatePagination(state[key], action)));
            default:
                return state;
        }
    };
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(DEFAULT_PAGINATION_STATE, 'DEFAULT_PAGINATION_STATE', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/paginate.ts');

    __REACT_HOT_LOADER__.register(computePaginationState, 'computePaginationState', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/paginate.ts');

    __REACT_HOT_LOADER__.register(paginate, 'paginate', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/paginate.ts');
}();

;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = combined;

var _paginate = __webpack_require__(166);

var _paginate2 = _interopRequireDefault(_paginate);

var _redux = __webpack_require__(17);

var _actionTypes = __webpack_require__(6);

var ActionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_KEY = 'default';
var SEARCH_KEY = 'search';
var parseTypes = function parseTypes(actionTypes) {
    return [actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.FAILURE];
};
var generalMapActionToKey = function generalMapActionToKey(action) {
    var options = action.options,
        key = action.key;

    var _ref = options || {},
        q = _ref.q;

    if (key) {
        return key;
    }
    if (q) {
        return SEARCH_KEY;
    }
    return DEFAULT_KEY;
};
function pagination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    var combinedReducer = (0, _redux.combineReducers)({
        books: (0, _paginate2.default)({
            mapActionToKey: generalMapActionToKey,
            types: parseTypes(ActionTypes.BOOKS)
        }),
        users: (0, _paginate2.default)({
            mapActionToKey: generalMapActionToKey,
            types: parseTypes(ActionTypes.USERS)
        }),
        authors: function authors() {
            return state.authors || {};
        },
        doubanBooks: function doubanBooks() {
            return state.doubanBooks || {};
        },
        bookShelves: function bookShelves() {
            return state.bookShelves || {};
        }
    });
    return combinedReducer(state, action);
}
// legacy pagination support
var updatePagination = function updatePagination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _paginate.DEFAULT_PAGINATION_STATE;
    var action = arguments[1];
    var merge = arguments[2];

    if (!action.response) {
        return Object.assign({}, state, {
            isFetching: true
        });
    } else {
        return (0, _paginate.computePaginationState)(state, action);
    }
};
function legacyPagination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (action.pagination) {
        var _action$pagination = action.pagination,
            name = _action$pagination.name,
            q = _action$pagination.q,
            key = _action$pagination.key,
            merge = _action$pagination.merge;

        var qKey = q ? SEARCH_KEY : null;
        var finalKey = qKey || key || DEFAULT_KEY;
        var originalState = state[name] && state[name][finalKey] || undefined;
        return Object.assign({}, state, _defineProperty({}, name, _defineProperty({}, finalKey, updatePagination(originalState, action, merge))));
    }
    return state;
}
function combined(state, action) {
    return pagination(legacyPagination(state, action), action);
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(DEFAULT_KEY, 'DEFAULT_KEY', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/pagination.ts');

    __REACT_HOT_LOADER__.register(SEARCH_KEY, 'SEARCH_KEY', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/pagination.ts');

    __REACT_HOT_LOADER__.register(parseTypes, 'parseTypes', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/pagination.ts');

    __REACT_HOT_LOADER__.register(generalMapActionToKey, 'generalMapActionToKey', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/pagination.ts');

    __REACT_HOT_LOADER__.register(pagination, 'pagination', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/pagination.ts');

    __REACT_HOT_LOADER__.register(updatePagination, 'updatePagination', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/pagination.ts');

    __REACT_HOT_LOADER__.register(legacyPagination, 'legacyPagination', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/pagination.ts');

    __REACT_HOT_LOADER__.register(combined, 'combined', '/Users/liang/Projects/readr/src/isomorphic/store/reducers/pagination.ts');
}();

;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = rootSaga;

var _effects = __webpack_require__(16);

var _loadRequests = __webpack_require__(169);

var _loadRequests2 = _interopRequireDefault(_loadRequests);

var _loginFlow = __webpack_require__(170);

var _loginFlow2 = _interopRequireDefault(_loginFlow);

var _viewerTasks = __webpack_require__(172);

var _viewerTasks2 = _interopRequireDefault(_viewerTasks);

var _test = __webpack_require__(171);

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [rootSaga].map(regeneratorRuntime.mark);

function rootSaga() {
    return regeneratorRuntime.wrap(function rootSaga$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return [(0, _effects.fork)(_loadRequests2.default), (0, _effects.fork)(_loginFlow2.default), (0, _effects.fork)(_viewerTasks2.default), (0, _effects.fork)(_test.watchTest2), (0, _effects.fork)(_test2.default)];

                case 2:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(rootSaga, 'rootSaga', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/index.ts');
}();

;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RESERVED_ACTION_KYES = exports.API_CONFIG_KEYS = undefined;

var _omit2 = __webpack_require__(7);

var _omit3 = _interopRequireDefault(_omit2);

var _pick2 = __webpack_require__(32);

var _pick3 = _interopRequireDefault(_pick2);

exports.default = watchAllLoadRequests;

var _effects = __webpack_require__(16);

var _actions = __webpack_require__(15);

var actions = _interopRequireWildcard(_actions);

var _api = __webpack_require__(22);

var _api2 = _interopRequireDefault(_api);

var _utils = __webpack_require__(64);

var _actionTypes = __webpack_require__(6);

var ACTION_TYPES = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [handleLoad, watchAllLoadRequests].map(regeneratorRuntime.mark);

var OPTIONS = 'options';
var ID = 'id';
var DATA = 'data';
var TYPE = 'type';
var API_CONFIG_KEYS = exports.API_CONFIG_KEYS = [OPTIONS, ID, DATA];
var RESERVED_ACTION_KYES = exports.RESERVED_ACTION_KYES = [TYPE].concat(API_CONFIG_KEYS);
var fetchBook = _utils.fetchEntity.bind(null, actions.book, _api2.default.fetchBook);
var fetchBookContent = _utils.fetchEntity.bind(null, actions.bookContent, _api2.default.fetchBookContent);
var fetchBooks = _utils.fetchEntity.bind(null, actions.books, _api2.default.fetchBooks);
var fetchUsers = _utils.fetchEntity.bind(null, actions.users, _api2.default.fetchUsers);
function handleLoad(fetchFn, parsedAction, callApi) {
    var apiConfig, payload;
    return regeneratorRuntime.wrap(function handleLoad$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    apiConfig = parsedAction.apiConfig, payload = parsedAction.payload;
                    // 在检查是否有数据的算法完成之前默认直接 call api

                    if (!(typeof callApi === 'undefined' || callApi === true)) {
                        _context.next = 4;
                        break;
                    }

                    _context.next = 4;
                    return (0, _effects.call)(fetchFn, apiConfig, payload);

                case 4:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}
function watchAllLoadRequests() {
    var action, apiConfig, payload, parsedAction;
    return regeneratorRuntime.wrap(function watchAllLoadRequests$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    if (false) {
                        _context2.next = 24;
                        break;
                    }

                    _context2.next = 3;
                    return (0, _effects.take)(actions.LOAD_ACTIONS);

                case 3:
                    action = _context2.sent;
                    apiConfig = (0, _pick3.default)(action, API_CONFIG_KEYS);
                    // 如果直接使用 payload 可能在 pagination 之类的 reducer 里面会有一些麻烦
                    // 因为可能比较难判断哪个是 key

                    payload = (0, _omit3.default)(action, RESERVED_ACTION_KYES);
                    parsedAction = { apiConfig: apiConfig, payload: payload };
                    _context2.t0 = action.type;
                    _context2.next = _context2.t0 === ACTION_TYPES.LOAD_USERS ? 10 : _context2.t0 === ACTION_TYPES.LOAD_BOOKS ? 13 : _context2.t0 === ACTION_TYPES.LOAD_BOOK ? 16 : _context2.t0 === ACTION_TYPES.LOAD_BOOK_CONTENT ? 19 : 22;
                    break;

                case 10:
                    _context2.next = 12;
                    return (0, _effects.fork)(handleLoad, fetchUsers, parsedAction);

                case 12:
                    return _context2.abrupt('break', 22);

                case 13:
                    _context2.next = 15;
                    return (0, _effects.fork)(handleLoad, fetchBooks, parsedAction);

                case 15:
                    return _context2.abrupt('break', 22);

                case 16:
                    _context2.next = 18;
                    return (0, _effects.fork)(handleLoad, fetchBook, parsedAction);

                case 18:
                    return _context2.abrupt('break', 22);

                case 19:
                    _context2.next = 21;
                    return (0, _effects.fork)(handleLoad, fetchBookContent, parsedAction);

                case 21:
                    return _context2.abrupt('break', 22);

                case 22:
                    _context2.next = 0;
                    break;

                case 24:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked[1], this);
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(OPTIONS, 'OPTIONS', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/loadRequests.ts');

    __REACT_HOT_LOADER__.register(ID, 'ID', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/loadRequests.ts');

    __REACT_HOT_LOADER__.register(DATA, 'DATA', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/loadRequests.ts');

    __REACT_HOT_LOADER__.register(TYPE, 'TYPE', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/loadRequests.ts');

    __REACT_HOT_LOADER__.register(API_CONFIG_KEYS, 'API_CONFIG_KEYS', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/loadRequests.ts');

    __REACT_HOT_LOADER__.register(RESERVED_ACTION_KYES, 'RESERVED_ACTION_KYES', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/loadRequests.ts');

    __REACT_HOT_LOADER__.register(fetchBook, 'fetchBook', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/loadRequests.ts');

    __REACT_HOT_LOADER__.register(fetchBookContent, 'fetchBookContent', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/loadRequests.ts');

    __REACT_HOT_LOADER__.register(fetchBooks, 'fetchBooks', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/loadRequests.ts');

    __REACT_HOT_LOADER__.register(fetchUsers, 'fetchUsers', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/loadRequests.ts');

    __REACT_HOT_LOADER__.register(handleLoad, 'handleLoad', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/loadRequests.ts');

    __REACT_HOT_LOADER__.register(watchAllLoadRequests, 'watchAllLoadRequests', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/loadRequests.ts');
}();

;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = watchLoginFlow;

var _effects = __webpack_require__(16);

var _actions = __webpack_require__(15);

var actions = _interopRequireWildcard(_actions);

var _api = __webpack_require__(22);

var _api2 = _interopRequireDefault(_api);

var _actionTypes = __webpack_require__(6);

var ACTION_TYPES = _interopRequireWildcard(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _marked = [watchLoginFlow].map(regeneratorRuntime.mark);

function watchLoginFlow() {
    return regeneratorRuntime.wrap(function watchLoginFlow$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    if (false) {
                        _context.next = 18;
                        break;
                    }

                    _context.next = 3;
                    return (0, _effects.take)(ACTION_TYPES.USER_LOGOUT);

                case 3:
                    _context.next = 5;
                    return (0, _effects.put)(actions.logout.request());

                case 5:
                    _context.prev = 5;
                    _context.next = 8;
                    return (0, _effects.call)(_api2.default.logout);

                case 8:
                    _context.next = 10;
                    return (0, _effects.put)(actions.logout.success());

                case 10:
                    _context.next = 16;
                    break;

                case 12:
                    _context.prev = 12;
                    _context.t0 = _context['catch'](5);
                    _context.next = 16;
                    return (0, _effects.put)(actions.logout.failure(_context.t0));

                case 16:
                    _context.next = 0;
                    break;

                case 18:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this, [[5, 12]]);
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(watchLoginFlow, 'watchLoginFlow', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/loginFlow.ts');
}();

;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = watchTest;
exports.watchTest2 = watchTest2;

var _effects = __webpack_require__(16);

var _marked = [doLoadWithCancel, watchTest, watchTest2].map(regeneratorRuntime.mark);

function someAsyncTask() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('loaded');
            resolve('load done');
            // yield put({ type: 'LOADED'})
        }, 1000);
    });
}
function doLoad() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('load done');
        }, 3000);
    });
}
function doLoadWithCancel() {
    var res;
    return regeneratorRuntime.wrap(function doLoadWithCancel$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return someAsyncTask();

                case 3:
                    res = _context.sent;
                    _context.next = 6;
                    return (0, _effects.put)({ type: 'done', res: res });

                case 6:
                    _context.next = 10;
                    break;

                case 8:
                    _context.prev = 8;
                    _context.t0 = _context['catch'](0);

                case 10:
                    _context.prev = 10;
                    _context.next = 13;
                    return (0, _effects.cancelled)();

                case 13:
                    if (!_context.sent) {
                        _context.next = 17;
                        break;
                    }

                    console.log('canceled');
                    _context.next = 17;
                    return (0, _effects.put)({ type: 'CANCEL_LOAD' });

                case 17:
                    return _context.finish(10);

                case 18:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this, [[0, 8, 10, 18]]);
}
function doSave() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('save done');
        }, 3000);
    });
}
function watchTest() {
    var action, res;
    return regeneratorRuntime.wrap(function watchTest$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    if (false) {
                        _context2.next = 17;
                        break;
                    }

                    _context2.next = 3;
                    return (0, _effects.take)(['LOAD', 'SAVE']);

                case 3:
                    action = _context2.sent;
                    res = void 0;

                    if (!(action.type === 'LOAD')) {
                        _context2.next = 10;
                        break;
                    }

                    _context2.next = 8;
                    return doLoad();

                case 8:
                    res = _context2.sent;

                    console.log(res);

                case 10:
                    if (!(action.type === 'SAVE')) {
                        _context2.next = 15;
                        break;
                    }

                    _context2.next = 13;
                    return doSave();

                case 13:
                    res = _context2.sent;

                    console.log(res);

                case 15:
                    _context2.next = 0;
                    break;

                case 17:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked[1], this);
}
function watchTest2() {
    var loadAction, loadTask, saveAction;
    return regeneratorRuntime.wrap(function watchTest2$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    if (false) {
                        _context3.next = 18;
                        break;
                    }

                    _context3.next = 3;
                    return (0, _effects.take)('LOAD');

                case 3:
                    loadAction = _context3.sent;
                    _context3.next = 6;
                    return (0, _effects.fork)(doLoadWithCancel);

                case 6:
                    loadTask = _context3.sent;
                    _context3.next = 9;
                    return (0, _effects.take)('SAVE');

                case 9:
                    saveAction = _context3.sent;

                    if (!(saveAction.type === 'SAVE')) {
                        _context3.next = 14;
                        break;
                    }

                    console.log('save?');
                    _context3.next = 14;
                    return (0, _effects.cancel)(loadTask);

                case 14:
                    _context3.next = 16;
                    return (0, _effects.put)({ type: 'then what' });

                case 16:
                    _context3.next = 0;
                    break;

                case 18:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _marked[2], this);
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(someAsyncTask, 'someAsyncTask', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/test.ts');

    __REACT_HOT_LOADER__.register(doLoad, 'doLoad', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/test.ts');

    __REACT_HOT_LOADER__.register(doLoadWithCancel, 'doLoadWithCancel', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/test.ts');

    __REACT_HOT_LOADER__.register(doSave, 'doSave', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/test.ts');

    __REACT_HOT_LOADER__.register(watchTest, 'watchTest', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/test.ts');

    __REACT_HOT_LOADER__.register(watchTest2, 'watchTest2', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/test.ts');
}();

;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEmpty2 = __webpack_require__(23);

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _get2 = __webpack_require__(13);

var _get3 = _interopRequireDefault(_get2);

var _merge2 = __webpack_require__(26);

var _merge3 = _interopRequireDefault(_merge2);

exports.default = watchViewer;

var _reduxSaga = __webpack_require__(79);

var _effects = __webpack_require__(16);

var _actions = __webpack_require__(15);

var actions = _interopRequireWildcard(_actions);

var _actionTypes = __webpack_require__(6);

var ACTION_TYPES = _interopRequireWildcard(_actionTypes);

var _api = __webpack_require__(22);

var _api2 = _interopRequireDefault(_api);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

var _common = __webpack_require__(8);

var _utils = __webpack_require__(64);

var _helpers = __webpack_require__(10);

var _helpers2 = _interopRequireDefault(_helpers);

var _Viewer = __webpack_require__(89);

var viewerUtils = _interopRequireWildcard(_Viewer);

var _utils2 = __webpack_require__(24);

var _utils3 = _interopRequireDefault(_utils2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [setViewer, setViewerWithAction, watchInitViewer, updateProgress, watchCalcBook, watchProgressOperations, jumpTo, watchJumpRequest, fetchProgressAndJump, initializeViewer, watchViewer].map(regeneratorRuntime.mark);

var DEFAULT_PAGE_HEIGHT = 900;
var DEFAULT_FONT_SIZE = 16;
var fetchBookProgress = _utils.fetchEntity.bind(null, actions.progress, _api2.default.fetchBookProgress);
function setViewer(bookId) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var viewerWidth, isSmallScreen, initialized, computed;
    return regeneratorRuntime.wrap(function setViewer$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    viewerWidth = _utils3.default.getScreenInfo().view.width;
                    isSmallScreen = viewerWidth < 700;
                    initialized = {
                        bookId: bookId,
                        isCalcMode: true,
                        fluid: isSmallScreen,
                        isTouchMode: isSmallScreen,
                        pageHeight: DEFAULT_PAGE_HEIGHT,
                        fontSize: DEFAULT_FONT_SIZE,
                        width: isSmallScreen ? viewerWidth : 'max'
                    };
                    _context.next = 5;
                    return (0, _effects.select)(selectors.viewer.computed(bookId));

                case 5:
                    computed = _context.sent;

                    if (computed.length > 0) {
                        initialized.isCalcMode = false;
                    }
                    initialized = (0, _merge3.default)({}, initialized, config);
                    _context.next = 10;
                    return (0, _effects.put)(actions.configViewer(bookId, initialized));

                case 10:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}
function setViewerWithAction(action) {
    var bookId, config;
    return regeneratorRuntime.wrap(function setViewerWithAction$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    bookId = action.bookId;
                    config = action.config;
                    _context2.next = 4;
                    return setViewer(bookId, config);

                case 4:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked[1], this);
}
function watchInitViewer() {
    return regeneratorRuntime.wrap(function watchInitViewer$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    return _context3.delegateYield((0, _reduxSaga.takeEvery)(ACTION_TYPES.VIEWER.INITIALIZE_CONFIG, setViewerWithAction), 't0', 1);

                case 1:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _marked[2], this);
}
function calcBook(wrap, flesh) {
    var startCalcHtmlTime = new Date().valueOf();
    var computedChapters = Array.prototype.map.call(wrap.childNodes, function (child) {
        var childDiv = child;
        var id = childDiv.getAttribute('id');
        var nodeHeights = viewerUtils.getNodeHeights(childDiv.querySelector('.lines').childNodes);
        return {
            id: id,
            nodeHeights: nodeHeights
        };
    });
    var endCalcHtmlTime = new Date().valueOf();
    _helpers2.default.print('Calculating html takes ' + (endCalcHtmlTime - startCalcHtmlTime) + 'ms');
    var computedPages = viewerUtils.groupPageFromChapters(flesh, computedChapters, 900);
    return computedPages;
}
function updateProgress(bookId, percentage) {
    return regeneratorRuntime.wrap(function updateProgress$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                    _context4.prev = 0;
                    _context4.next = 3;
                    return (0, _effects.call)(_api2.default.setProgress, bookId, {
                        percentage: percentage
                    });

                case 3:
                    _context4.next = 8;
                    break;

                case 5:
                    _context4.prev = 5;
                    _context4.t0 = _context4['catch'](0);

                    console.error(_context4.t0);

                case 8:
                    _context4.prev = 8;
                    _context4.next = 11;
                    return (0, _effects.cancelled)();

                case 11:
                    if (!_context4.sent) {
                        _context4.next = 13;
                        break;
                    }

                    _helpers2.default.print('updateProgress canceled');

                case 13:
                    return _context4.finish(8);

                case 14:
                case 'end':
                    return _context4.stop();
            }
        }
    }, _marked[3], this, [[0, 5, 8, 14]]);
}
function watchCalcBook() {
    var _ref, bookId, wrap, bookContent, flesh, computed;

    return regeneratorRuntime.wrap(function watchCalcBook$(_context5) {
        while (1) {
            switch (_context5.prev = _context5.next) {
                case 0:
                    if (false) {
                        _context5.next = 24;
                        break;
                    }

                    _context5.next = 3;
                    return (0, _effects.take)(ACTION_TYPES.VIEWER.CALC_START);

                case 3:
                    _ref = _context5.sent;
                    bookId = _ref.bookId;
                    wrap = _ref.wrap;
                    _context5.next = 8;
                    return (0, _effects.select)(selectors.common.entity('bookContents', bookId));

                case 8:
                    bookContent = _context5.sent;
                    flesh = bookContent.flesh || {};
                    _context5.prev = 10;
                    computed = calcBook(wrap, flesh);
                    _context5.next = 14;
                    return (0, _effects.put)(actions.calcBookSuccess(bookId, computed));

                case 14:
                    _context5.next = 16;
                    return (0, _effects.put)(actions.configViewer(bookId, {
                        isCalcMode: false
                    }));

                case 16:
                    _context5.next = 22;
                    break;

                case 18:
                    _context5.prev = 18;
                    _context5.t0 = _context5['catch'](10);
                    _context5.next = 22;
                    return (0, _effects.put)(actions.calcBookFailure(bookId, _context5.t0));

                case 22:
                    _context5.next = 0;
                    break;

                case 24:
                case 'end':
                    return _context5.stop();
            }
        }
    }, _marked[4], this, [[10, 18]]);
}
function watchProgressOperations() {
    var action, session, userRole;
    return regeneratorRuntime.wrap(function watchProgressOperations$(_context6) {
        while (1) {
            switch (_context6.prev = _context6.next) {
                case 0:
                    if (false) {
                        _context6.next = 20;
                        break;
                    }

                    _context6.next = 3;
                    return (0, _effects.take)([ACTION_TYPES.VIEWER.BOOK_PROGRESS_UPDATE, ACTION_TYPES.LOAD_BOOK_PROGRESS]);

                case 3:
                    action = _context6.sent;
                    _context6.next = 6;
                    return (0, _effects.select)(selectors.common.session);

                case 6:
                    session = _context6.sent;
                    userRole = (0, _get3.default)(session, 'user.role');

                    if (!(userRole !== _common.ROLES.VISITOR)) {
                        _context6.next = 17;
                        break;
                    }

                    if (!(action.type === ACTION_TYPES.LOAD_BOOK_PROGRESS)) {
                        _context6.next = 12;
                        break;
                    }

                    _context6.next = 12;
                    return (0, _effects.call)(fetchBookProgress, { id: action.id });

                case 12:
                    if (!(action.type === ACTION_TYPES.VIEWER.BOOK_PROGRESS_UPDATE)) {
                        _context6.next = 15;
                        break;
                    }

                    _context6.next = 15;
                    return updateProgress(action.id, action.percentage);

                case 15:
                    _context6.next = 18;
                    break;

                case 17:
                    _helpers2.default.print('Not logged in, progress will not be fetched!');

                case 18:
                    _context6.next = 0;
                    break;

                case 20:
                case 'end':
                    return _context6.stop();
            }
        }
    }, _marked[5], this);
}
function jumpTo(action) {
    var percentage, _ref2, bookId, pageHeight, isScrollMode, allPages, pageCount, totalHeight;

    return regeneratorRuntime.wrap(function jumpTo$(_context7) {
        while (1) {
            switch (_context7.prev = _context7.next) {
                case 0:
                    percentage = action.percentage;
                    _context7.next = 3;
                    return (0, _effects.select)(selectors.viewer.config);

                case 3:
                    _ref2 = _context7.sent;
                    bookId = _ref2.bookId;
                    pageHeight = _ref2.pageHeight;
                    isScrollMode = _ref2.isScrollMode;
                    _context7.next = 9;
                    return (0, _effects.select)(selectors.viewer.computed(bookId));

                case 9:
                    allPages = _context7.sent;
                    pageCount = allPages.length;
                    totalHeight = pageCount * pageHeight;

                    if (!isScrollMode) {
                        _context7.next = 16;
                        break;
                    }

                    document.body.scrollTop = percentage ? totalHeight * percentage : 0;
                    _context7.next = 18;
                    break;

                case 16:
                    _context7.next = 18;
                    return (0, _effects.put)(actions.updateBookProgress(percentage));

                case 18:
                case 'end':
                    return _context7.stop();
            }
        }
    }, _marked[6], this);
}
function watchJumpRequest() {
    return regeneratorRuntime.wrap(function watchJumpRequest$(_context8) {
        while (1) {
            switch (_context8.prev = _context8.next) {
                case 0:
                    return _context8.delegateYield((0, _reduxSaga.takeEvery)(ACTION_TYPES.VIEWER.JUMP, jumpTo), 't0', 1);

                case 1:
                case 'end':
                    return _context8.stop();
            }
        }
    }, _marked[7], this);
}
function fetchProgressAndJump(bookId) {
    var _ref3, percentage;

    return regeneratorRuntime.wrap(function fetchProgressAndJump$(_context9) {
        while (1) {
            switch (_context9.prev = _context9.next) {
                case 0:
                    _context9.next = 2;
                    return (0, _effects.put)(actions.loadBookProgress(bookId));

                case 2:
                    _context9.next = 4;
                    return (0, _effects.take)(ACTION_TYPES.BOOK_PROGRESS.SUCCESS);

                case 4:
                    _context9.next = 6;
                    return (0, _effects.select)(selectors.common.entity('bookProgress', bookId));

                case 6:
                    _ref3 = _context9.sent;
                    percentage = _ref3.percentage;
                    _context9.next = 10;
                    return (0, _effects.put)(actions.viewerJumpTo(percentage));

                case 10:
                case 'end':
                    return _context9.stop();
            }
        }
    }, _marked[8], this);
}
function initializeViewer() {
    var _ref4, _bookId, computed;

    return regeneratorRuntime.wrap(function initializeViewer$(_context10) {
        while (1) {
            switch (_context10.prev = _context10.next) {
                case 0:
                    if (false) {
                        _context10.next = 23;
                        break;
                    }

                    _context10.next = 3;
                    return (0, _effects.take)(ACTION_TYPES.VIEWER.INITIALIZE);

                case 3:
                    _ref4 = _context10.sent;
                    _bookId = _ref4.bookId;
                    _context10.next = 7;
                    return (0, _effects.select)(selectors.viewer.computed(_bookId));

                case 7:
                    computed = _context10.sent;

                    if (!(0, _isEmpty3.default)(computed)) {
                        _context10.next = 19;
                        break;
                    }

                    _context10.next = 11;
                    return [(0, _effects.put)(actions.loadBook(_bookId)), (0, _effects.put)(actions.loadBookContent(_bookId))];

                case 11:
                    _context10.next = 13;
                    return (0, _effects.put)(actions.initializeViewerConfig(_bookId));

                case 13:
                    _context10.next = 15;
                    return (0, _effects.take)(ACTION_TYPES.VIEWER.CALC_SUCCESS);

                case 15:
                    _context10.next = 17;
                    return fetchProgressAndJump(_bookId);

                case 17:
                    _context10.next = 21;
                    break;

                case 19:
                    _context10.next = 21;
                    return fetchProgressAndJump(_bookId);

                case 21:
                    _context10.next = 0;
                    break;

                case 23:
                case 'end':
                    return _context10.stop();
            }
        }
    }, _marked[9], this);
}
function watchViewer() {
    return regeneratorRuntime.wrap(function watchViewer$(_context11) {
        while (1) {
            switch (_context11.prev = _context11.next) {
                case 0:
                    _context11.next = 2;
                    return [(0, _effects.fork)(watchProgressOperations), (0, _effects.fork)(watchCalcBook), (0, _effects.fork)(watchInitViewer), (0, _effects.fork)(watchJumpRequest), (0, _effects.fork)(initializeViewer)];

                case 2:
                case 'end':
                    return _context11.stop();
            }
        }
    }, _marked[10], this);
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(DEFAULT_PAGE_HEIGHT, 'DEFAULT_PAGE_HEIGHT', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/viewerTasks.ts');

    __REACT_HOT_LOADER__.register(DEFAULT_FONT_SIZE, 'DEFAULT_FONT_SIZE', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/viewerTasks.ts');

    __REACT_HOT_LOADER__.register(fetchBookProgress, 'fetchBookProgress', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/viewerTasks.ts');

    __REACT_HOT_LOADER__.register(setViewer, 'setViewer', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/viewerTasks.ts');

    __REACT_HOT_LOADER__.register(setViewerWithAction, 'setViewerWithAction', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/viewerTasks.ts');

    __REACT_HOT_LOADER__.register(watchInitViewer, 'watchInitViewer', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/viewerTasks.ts');

    __REACT_HOT_LOADER__.register(calcBook, 'calcBook', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/viewerTasks.ts');

    __REACT_HOT_LOADER__.register(updateProgress, 'updateProgress', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/viewerTasks.ts');

    __REACT_HOT_LOADER__.register(watchCalcBook, 'watchCalcBook', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/viewerTasks.ts');

    __REACT_HOT_LOADER__.register(watchProgressOperations, 'watchProgressOperations', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/viewerTasks.ts');

    __REACT_HOT_LOADER__.register(jumpTo, 'jumpTo', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/viewerTasks.ts');

    __REACT_HOT_LOADER__.register(watchJumpRequest, 'watchJumpRequest', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/viewerTasks.ts');

    __REACT_HOT_LOADER__.register(fetchProgressAndJump, 'fetchProgressAndJump', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/viewerTasks.ts');

    __REACT_HOT_LOADER__.register(initializeViewer, 'initializeViewer', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/viewerTasks.ts');

    __REACT_HOT_LOADER__.register(watchViewer, 'watchViewer', '/Users/liang/Projects/readr/src/isomorphic/store/sagas/viewerTasks.ts');
}();

;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sessionUserId = exports.users = exports.booksAsOptions = exports.authorsAsOptions = exports.doubanBooksAsOptions = exports.books = exports.shelfBooks = exports.authors = exports.doubanBooks = undefined;

var _get2 = __webpack_require__(13);

var _get3 = _interopRequireDefault(_get2);

var _reselect = __webpack_require__(44);

var _common = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doubanBooks = exports.doubanBooks = function doubanBooks(key) {
    return (0, _reselect.createSelector)((0, _common.pagedEntities)({
        entitiesName: 'doubanBooks',
        paginationName: 'doubanBooks',
        paginationKey: key
    }), function (books) {
        return books;
    });
};
var authors = exports.authors = function authors(key) {
    return (0, _common.pagedEntities)({
        entitiesName: 'authors',
        paginationName: 'authors',
        paginationKey: key
    });
};
var shelfBooks = exports.shelfBooks = function shelfBooks(key) {
    return (0, _common.pagedEntities)({
        entitiesName: 'shelfBooks',
        paginationName: 'bookShelves',
        paginationKey: key
    });
};
var books = exports.books = function books(key, page) {
    return (0, _common.pagedEntities)({
        entitiesName: 'books',
        paginationName: 'books',
        paginationKey: key,
        page: page
    });
};
var doubanBooksAsOptions = exports.doubanBooksAsOptions = function doubanBooksAsOptions(key) {
    return (0, _reselect.createSelector)(doubanBooks(key), function (selectedBooks) {
        return selectedBooks.map(function (book) {
            return {
                name: book.title,
                value: book.id,
                additional: {
                    description: book.summary,
                    cover: book.images.large,
                    author: book.author.join(', ')
                }
            };
        });
    });
};
var authorsAsOptions = exports.authorsAsOptions = function authorsAsOptions(key) {
    return (0, _reselect.createSelector)(authors(key), function (items) {
        return items.map(function (item) {
            return {
                name: item.name,
                value: item.id
            };
        });
    });
};
var booksAsOptions = exports.booksAsOptions = function booksAsOptions(key) {
    return (0, _reselect.createSelector)(books(key), function (items) {
        return items.map(function (item) {
            return {
                name: item.title,
                value: item.id
            };
        });
    });
};
var users = exports.users = (0, _common.pagedEntities)({
    entitiesName: 'users',
    paginationName: 'users'
});
var sessionUserId = exports.sessionUserId = function sessionUserId(state) {
    return (0, _get3.default)(state, ['session', 'user', 'id']);
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(doubanBooks, 'doubanBooks', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/entities.ts');

    __REACT_HOT_LOADER__.register(authors, 'authors', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/entities.ts');

    __REACT_HOT_LOADER__.register(shelfBooks, 'shelfBooks', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/entities.ts');

    __REACT_HOT_LOADER__.register(books, 'books', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/entities.ts');

    __REACT_HOT_LOADER__.register(doubanBooksAsOptions, 'doubanBooksAsOptions', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/entities.ts');

    __REACT_HOT_LOADER__.register(authorsAsOptions, 'authorsAsOptions', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/entities.ts');

    __REACT_HOT_LOADER__.register(booksAsOptions, 'booksAsOptions', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/entities.ts');

    __REACT_HOT_LOADER__.register(users, 'users', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/entities.ts');

    __REACT_HOT_LOADER__.register(sessionUserId, 'sessionUserId', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/entities.ts');
}();

;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.navigation = exports.preference = exports.panel = exports.progress = exports.navData = exports.computed = exports.config = exports.self = undefined;

var _get2 = __webpack_require__(13);

var _get3 = _interopRequireDefault(_get2);

var _common = __webpack_require__(34);

var common = _interopRequireWildcard(_common);

var _reselect = __webpack_require__(44);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var self = exports.self = function self(state) {
    return (0, _get3.default)(state, ['components', 'viewer'], {});
};
var config = exports.config = function config(state) {
    return (0, _get3.default)(state, ['components', 'viewer', 'config'], {});
};
var computed = exports.computed = function computed(bookId) {
    return function (state) {
        return (0, _get3.default)(state, ['components', 'viewer', 'contents', bookId, 'computed'], []);
    };
};
var navData = exports.navData = function navData(bookId) {
    return function (state) {
        var bookContent = common.entity('bookContents', bookId)(state);
        return (0, _get3.default)(bookContent, 'nav', []);
    };
};
var progress = exports.progress = function progress(bookId) {
    return function (state) {
        return (0, _get3.default)(state, ['components', 'viewer', 'progress', bookId], {});
    };
};
// sub components
var panel = exports.panel = (0, _reselect.createSelector)(self, function (_self) {
    return (0, _get3.default)(_self, ['components', 'panel'], {});
});
var preference = exports.preference = (0, _reselect.createSelector)(self, function (_self) {
    return (0, _get3.default)(_self, ['components', 'preference'], {});
});
var navigation = exports.navigation = (0, _reselect.createSelector)(self, function (_self) {
    return (0, _get3.default)(_self, ['components', 'navigation'], {});
});
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(self, 'self', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/viewer.ts');

    __REACT_HOT_LOADER__.register(config, 'config', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/viewer.ts');

    __REACT_HOT_LOADER__.register(computed, 'computed', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/viewer.ts');

    __REACT_HOT_LOADER__.register(navData, 'navData', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/viewer.ts');

    __REACT_HOT_LOADER__.register(progress, 'progress', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/viewer.ts');

    __REACT_HOT_LOADER__.register(panel, 'panel', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/viewer.ts');

    __REACT_HOT_LOADER__.register(preference, 'preference', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/viewer.ts');

    __REACT_HOT_LOADER__.register(navigation, 'navigation', '/Users/liang/Projects/readr/src/isomorphic/store/selectors/viewer.ts');
}();

;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(getScreenInfo, 'getScreenInfo', '/Users/liang/Projects/readr/src/isomorphic/utils/browser/getScreenInfo.ts');
}();

;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getScreenInfo = __webpack_require__(175);

var _getScreenInfo2 = _interopRequireDefault(_getScreenInfo);

var _isIE = __webpack_require__(177);

var _isIE2 = _interopRequireDefault(_isIE);

var _lockScroll = __webpack_require__(178);

var _lockScroll2 = _interopRequireDefault(_lockScroll);

var _unlockScroll = __webpack_require__(179);

var _unlockScroll2 = _interopRequireDefault(_unlockScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
    getScreenInfo: _getScreenInfo2.default,
    isIE: _isIE2.default,
    lockScroll: _lockScroll2.default,
    unlockScroll: _unlockScroll2.default
};
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/utils/browser/index.ts');
}();

;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isIE = isIE;
function isIE(ver) {
    if (typeof ver === 'undefined') {
        ver = null;
    }
    var b = document.createElement('b');
    b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->';
    return b.getElementsByTagName('i').length === 1;
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(isIE, 'isIE', '/Users/liang/Projects/readr/src/isomorphic/utils/browser/isIE.ts');
}();

;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = lockScroll;
function lockScroll() {
    document.body.style.overflow = 'hidden';
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(lockScroll, 'lockScroll', '/Users/liang/Projects/readr/src/isomorphic/utils/browser/lockScroll.ts');
}();

;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = unlockScroll;
function unlockScroll() {
    document.body.style.overflow = 'visible';
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(unlockScroll, 'unlockScroll', '/Users/liang/Projects/readr/src/isomorphic/utils/browser/unlockScroll.ts');
}();

;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isDescendant = __webpack_require__(31);

var _isDescendant2 = _interopRequireDefault(_isDescendant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
    isDescendant: _isDescendant2.default
};
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/utils/dom/index.ts');
}();

;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getCurrentTime;

var _padNumberWithZero = __webpack_require__(65);

var _padNumberWithZero2 = _interopRequireDefault(_padNumberWithZero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCurrentTime() {
    var d = new Date();
    var time = [d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()];
    return time.map(function (t) {
        return (0, _padNumberWithZero2.default)(t);
    }).join('');
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(getCurrentTime, 'getCurrentTime', '/Users/liang/Projects/readr/src/isomorphic/utils/getCurrentTime.ts');
}();

;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isNil2 = __webpack_require__(41);

var _isNil3 = _interopRequireDefault(_isNil2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _model = __webpack_require__(12);

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BasicApi = function () {
    function BasicApi(schema) {
        _classCallCheck(this, BasicApi);

        this._schema = schema;
        this._model = new _model2.default(schema);
    }

    _createClass(BasicApi, [{
        key: 'findOne',
        value: function findOne(id) {
            return this._model.findOne(id);
        }
    }, {
        key: 'list',
        value: function list(page, keyword) {
            return this._model.list({
                page: page,
                disablePagination: (0, _isNil3.default)(page),
                // TODO
                filter: function filter(entity) {
                    return true;
                }
            });
        }
    }, {
        key: 'add',
        value: function add(data) {
            return this._model.add(data);
        }
    }, {
        key: 'update',
        value: function update(id, data) {
            // todo
            // 无法提前知道是否为 upsert，所以无法预先决定是否验证 fields
            // 可能会造成 upsert 的数据 fields 不全的问题
            return this._model.update(id, data);
        }
    }, {
        key: 'remove',
        value: function remove(id) {
            return this._model.remove(id);
        }
    }]);

    return BasicApi;
}();

var _default = BasicApi;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(BasicApi, 'BasicApi', '/Users/liang/Projects/readr/src/server/api/basic-api.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/server/api/basic-api.ts');
}();

;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isNil2 = __webpack_require__(41);

var _isNil3 = _interopRequireDefault(_isNil2);

var _assign2 = __webpack_require__(3);

var _assign3 = _interopRequireDefault(_assign2);

var _omit2 = __webpack_require__(7);

var _omit3 = _interopRequireDefault(_omit2);

var _get2 = __webpack_require__(13);

var _get3 = _interopRequireDefault(_get2);

exports.findBook = findBook;
exports.addBook = addBook;
exports.editBookMeta = editBookMeta;
exports.resolveBookContent = resolveBookContent;
exports.listBooks = listBooks;
exports.listShelfBooks = listShelfBooks;
exports.removeBook = removeBook;

var _model = __webpack_require__(12);

var _model2 = _interopRequireDefault(_model);

var _paginate = __webpack_require__(69);

var _paginate2 = _interopRequireDefault(_paginate);

var _schemas = __webpack_require__(11);

var schemas = _interopRequireWildcard(_schemas);

var _utils = __webpack_require__(36);

var _utils2 = _interopRequireDefault(_utils);

var _helpers = __webpack_require__(25);

var _file2 = __webpack_require__(67);

var _parsers = __webpack_require__(225);

var _parsers2 = _interopRequireDefault(_parsers);

var _callApi = __webpack_require__(33);

var _callApi2 = _interopRequireDefault(_callApi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var bookModel = new _model2.default(schemas.book);
var fileModel = new _model2.default(schemas.file);
var progressModel = new _model2.default(schemas.progress);
var authorModel = new _model2.default(schemas.author);
/**
 * helpers
 */
function getAuthorId(authorName, description) {
    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
        var authorEntity, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return authorModel.findOne({ name: authorName });

                    case 3:
                        authorEntity = _context.sent;
                        return _context.abrupt('return', authorEntity._id);

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context['catch'](0);
                        _context.next = 11;
                        return authorModel.add({
                            name: authorName,
                            description: description
                        });

                    case 11:
                        result = _context.sent;
                        return _context.abrupt('return', result.ops[0]._id);

                    case 13:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 7]]);
    }));
}
/**
 * 3rd party
 */
function fetchBookByTitle(title) {
    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
        var keyword, _ref, bookJson;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        keyword = title;
                        _context2.next = 3;
                        return (0, _callApi2.default)('https://api.douban.com/v2/book/search?q=' + encodeURI(keyword) + '&count=1');

                    case 3:
                        _ref = _context2.sent;
                        bookJson = _ref.json;
                        return _context2.abrupt('return', (0, _get3.default)(bookJson, ['books', 0], {}));

                    case 6:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));
}
function fetchBookMetaByTitle(title) {
    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
        var book;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return fetchBookByTitle(title);

                    case 2:
                        book = _context3.sent;
                        return _context3.abrupt('return', {
                            cover: (0, _get3.default)(book, ['images', 'large']),
                            description: (0, _get3.default)(book, 'summary'),
                            authorInfo: (0, _get3.default)(book, 'author_intro')
                        });

                    case 4:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));
}
/**
 * apis
 */
function findBook(id) {
    return bookModel.findOne(id).then(function (result) {
        var data = (0, _omit3.default)(result, ['file']);
        var contentType = 'txt';
        if (!result.file) {
            contentType = '';
        } else if (result.file.mimetype === 'application/epub+zip') {
            contentType = 'epub';
        }
        return (0, _assign3.default)({}, data, {
            content_type: contentType
        });
    });
}
function addBook(meta, fileId) {
    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee5() {
        var mergeBookMeta, doSave, fileResult, file, parsedContent, authorName, _file, fileContentArray, title, _authorName;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        doSave = function doSave(title, authorName) {
                            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee4() {
                                var bookMeta, authorId, bookData;
                                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                    while (1) {
                                        switch (_context4.prev = _context4.next) {
                                            case 0:
                                                _context4.next = 2;
                                                return fetchBookMetaByTitle(title);

                                            case 2:
                                                bookMeta = _context4.sent;
                                                _context4.next = 5;
                                                return getAuthorId(authorName, bookMeta.authorInfo);

                                            case 5:
                                                authorId = _context4.sent;
                                                bookData = mergeBookMeta(title, authorId, (0, _omit3.default)(bookMeta, 'authorInfo'));
                                                return _context4.abrupt('return', bookModel.add(bookData));

                                            case 8:
                                            case 'end':
                                                return _context4.stop();
                                        }
                                    }
                                }, _callee4, this);
                            }));
                        };

                        mergeBookMeta = function mergeBookMeta(title, authorId, extMeta) {
                            return (0, _assign3.default)({}, {
                                title: title,
                                authors: [authorId],
                                file: fileId
                            }, meta, extMeta);
                        };

                        if (!fileId) {
                            _context5.next = 34;
                            break;
                        }

                        _context5.next = 5;
                        return (0, _file2.readFile)(fileId);

                    case 5:
                        fileResult = _context5.sent;

                        if (!(fileResult.mimetype === 'application/epub+zip')) {
                            _context5.next = 23;
                            break;
                        }

                        _context5.prev = 7;
                        _context5.next = 10;
                        return (0, _file2.readFile)(fileId, _parsers2.default.epub);

                    case 10:
                        file = _context5.sent;
                        parsedContent = file.content;
                        authorName = parsedContent.meta.author;
                        return _context5.abrupt('return', doSave(parsedContent.meta.title, authorName));

                    case 16:
                        _context5.prev = 16;
                        _context5.t0 = _context5['catch'](7);
                        _context5.next = 20;
                        return fileModel.remove(fileId);

                    case 20:
                        throw _context5.t0;

                    case 21:
                        _context5.next = 34;
                        break;

                    case 23:
                        if (!(fileResult.mimetype === 'text/plain')) {
                            _context5.next = 33;
                            break;
                        }

                        _context5.next = 26;
                        return (0, _file2.readFile)(fileId);

                    case 26:
                        _file = _context5.sent;
                        fileContentArray = _file.content.buffer.toString('utf-8').split('\n');
                        title = fileContentArray[0];
                        _authorName = fileContentArray[1];
                        return _context5.abrupt('return', doSave(title, _authorName));

                    case 33:
                        return _context5.abrupt('return', Promise.reject(new Error('Unsupported file type!')));

                    case 34:
                        return _context5.abrupt('return', bookModel.add(meta));

                    case 35:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this, [[7, 16]]);
    }));
}
function editBookMeta(bookId, meta) {
    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee6() {
        var _ref2, authorInfo, authorId, bookMeta;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        _context6.next = 2;
                        return bookModel.findOne(bookId, true);

                    case 2:
                        _context6.next = 4;
                        return fetchBookMetaByTitle(meta.authors);

                    case 4:
                        _ref2 = _context6.sent;
                        authorInfo = _ref2.authorInfo;
                        _context6.next = 8;
                        return getAuthorId(meta.authors, authorInfo);

                    case 8:
                        authorId = _context6.sent;
                        bookMeta = Object.assign({}, meta, {
                            authors: [authorId]
                        });
                        return _context6.abrupt('return', bookModel.update(bookId, bookMeta, {
                            upsert: false
                        }));

                    case 11:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, this);
    }));
}
function resolveBookContent(bookId) {
    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee7() {
        var bookEntity, fileId, bookContent, fileResult, _fileResult;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        _context7.next = 2;
                        return bookModel.findOne(bookId);

                    case 2:
                        bookEntity = _context7.sent;
                        fileId = bookEntity.file._id;
                        bookContent = void 0;

                        if (fileId) {
                            _context7.next = 7;
                            break;
                        }

                        return _context7.abrupt('return', Promise.reject((0, _helpers.notFoundError)('book')));

                    case 7:
                        if (!(bookEntity.file.mimetype === 'application/epub+zip')) {
                            _context7.next = 14;
                            break;
                        }

                        _context7.next = 10;
                        return (0, _file2.readFile)(fileId, _parsers2.default.epub);

                    case 10:
                        fileResult = _context7.sent;

                        bookContent = (0, _omit3.default)(fileResult.content, ['meta']);
                        _context7.next = 22;
                        break;

                    case 14:
                        if (!(bookEntity.file.mimetype === 'text/plain')) {
                            _context7.next = 21;
                            break;
                        }

                        _context7.next = 17;
                        return (0, _file2.readFile)(fileId, _parsers2.default.txtContent);

                    case 17:
                        _fileResult = _context7.sent;

                        bookContent = _fileResult.content;
                        _context7.next = 22;
                        break;

                    case 21:
                        return _context7.abrupt('return', Promise.reject(new Error('Unsupported file type!')));

                    case 22:
                        return _context7.abrupt('return', (0, _assign3.default)({}, bookContent, { _id: bookId, content_id: fileId }));

                    case 23:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, _callee7, this);
    }));
}
function listBooks(page) {
    return bookModel.list({
        page: page,
        disablePagination: (0, _isNil3.default)(page),
        mapping: function mapping(entity) {
            return (0, _omit3.default)(entity, ['content', 'file']);
        }
    });
}
function listShelfBooks(userId, page) {
    return progressModel.listRaw({ query: { user_id: userId } }).then(function (results) {
        if (results.length === 0) {
            return results;
        }
        return Promise.all(results.sort(_utils2.default.sortByDate()).map(function (result) {
            return bookModel.findOne(result.book_id, true).then(function (res) {
                return res;
            }, function (error) {
                // 如果错误不是 404 也输出空的 entity
                return bookModel.outputEmpty(result.book_id);
            });
        })).then(function (res) {
            return (0, _paginate2.default)(res.map(function (entity) {
                return (0, _omit3.default)(entity, ['content']);
            }), {
                page: page
            });
        });
    });
}
function removeBook(bookId) {
    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee8() {
        var book, fileId;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        _context8.next = 2;
                        return bookModel.findOne(bookId, true);

                    case 2:
                        book = _context8.sent;
                        fileId = book.file;
                        _context8.next = 6;
                        return bookModel.remove(bookId);

                    case 6:
                        return _context8.abrupt('return', (0, _file2.delFile)(fileId));

                    case 7:
                    case 'end':
                        return _context8.stop();
                }
            }
        }, _callee8, this);
    }));
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__awaiter, '__awaiter', '/Users/liang/Projects/readr/src/server/api/books.ts');

    __REACT_HOT_LOADER__.register(bookModel, 'bookModel', '/Users/liang/Projects/readr/src/server/api/books.ts');

    __REACT_HOT_LOADER__.register(fileModel, 'fileModel', '/Users/liang/Projects/readr/src/server/api/books.ts');

    __REACT_HOT_LOADER__.register(progressModel, 'progressModel', '/Users/liang/Projects/readr/src/server/api/books.ts');

    __REACT_HOT_LOADER__.register(authorModel, 'authorModel', '/Users/liang/Projects/readr/src/server/api/books.ts');

    __REACT_HOT_LOADER__.register(getAuthorId, 'getAuthorId', '/Users/liang/Projects/readr/src/server/api/books.ts');

    __REACT_HOT_LOADER__.register(fetchBookByTitle, 'fetchBookByTitle', '/Users/liang/Projects/readr/src/server/api/books.ts');

    __REACT_HOT_LOADER__.register(fetchBookMetaByTitle, 'fetchBookMetaByTitle', '/Users/liang/Projects/readr/src/server/api/books.ts');

    __REACT_HOT_LOADER__.register(findBook, 'findBook', '/Users/liang/Projects/readr/src/server/api/books.ts');

    __REACT_HOT_LOADER__.register(addBook, 'addBook', '/Users/liang/Projects/readr/src/server/api/books.ts');

    __REACT_HOT_LOADER__.register(editBookMeta, 'editBookMeta', '/Users/liang/Projects/readr/src/server/api/books.ts');

    __REACT_HOT_LOADER__.register(resolveBookContent, 'resolveBookContent', '/Users/liang/Projects/readr/src/server/api/books.ts');

    __REACT_HOT_LOADER__.register(listBooks, 'listBooks', '/Users/liang/Projects/readr/src/server/api/books.ts');

    __REACT_HOT_LOADER__.register(listShelfBooks, 'listShelfBooks', '/Users/liang/Projects/readr/src/server/api/books.ts');

    __REACT_HOT_LOADER__.register(removeBook, 'removeBook', '/Users/liang/Projects/readr/src/server/api/books.ts');
}();

;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _omit2 = __webpack_require__(7);

var _omit3 = _interopRequireDefault(_omit2);

var _assign2 = __webpack_require__(3);

var _assign3 = _interopRequireDefault(_assign2);

var _isNil2 = __webpack_require__(41);

var _isNil3 = _interopRequireDefault(_isNil2);

exports.listCollection = listCollection;

var _model = __webpack_require__(12);

var _model2 = _interopRequireDefault(_model);

var _schemas = __webpack_require__(11);

var schemas = _interopRequireWildcard(_schemas);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var collectionModel = new _model2.default(schemas.collection);
function listCollection(page) {
    return collectionModel.list({
        page: page,
        disablePagination: (0, _isNil3.default)(page),
        mapping: function mapping(entity) {
            return (0, _assign3.default)({}, entity, {
                items: entity['items'].map(function (item) {
                    return (0, _omit3.default)(item, 'content');
                })
            });
        }
    });
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(collectionModel, 'collectionModel', '/Users/liang/Projects/readr/src/server/api/collections.ts');

    __REACT_HOT_LOADER__.register(listCollection, 'listCollection', '/Users/liang/Projects/readr/src/server/api/collections.ts');
}();

;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user = exports.tag = exports.book = exports.collection = exports.author = undefined;

var _file = __webpack_require__(67);

Object.keys(_file).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _file[key];
    }
  });
});

var _books = __webpack_require__(183);

Object.keys(_books).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _books[key];
    }
  });
});

var _user = __webpack_require__(186);

Object.keys(_user).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _user[key];
    }
  });
});

var _users = __webpack_require__(187);

Object.keys(_users).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _users[key];
    }
  });
});

var _collections = __webpack_require__(184);

Object.keys(_collections).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _collections[key];
    }
  });
});

var _schemas = __webpack_require__(11);

var schemas = _interopRequireWildcard(_schemas);

var _basicApi = __webpack_require__(182);

var _basicApi2 = _interopRequireDefault(_basicApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var author = exports.author = new _basicApi2.default(schemas.author);
var collection = exports.collection = new _basicApi2.default(schemas.collection);
var book = exports.book = new _basicApi2.default(schemas.book);
var tag = exports.tag = new _basicApi2.default(schemas.tag);
var user = exports.user = new _basicApi2.default(schemas.user);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(author, 'author', '/Users/liang/Projects/readr/src/server/api/index.ts');

  __REACT_HOT_LOADER__.register(collection, 'collection', '/Users/liang/Projects/readr/src/server/api/index.ts');

  __REACT_HOT_LOADER__.register(book, 'book', '/Users/liang/Projects/readr/src/server/api/index.ts');

  __REACT_HOT_LOADER__.register(tag, 'tag', '/Users/liang/Projects/readr/src/server/api/index.ts');

  __REACT_HOT_LOADER__.register(user, 'user', '/Users/liang/Projects/readr/src/server/api/index.ts');
}();

;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getReadingProgress = getReadingProgress;
exports.setReadingProgress = setReadingProgress;

var _model = __webpack_require__(12);

var _model2 = _interopRequireDefault(_model);

var _schemas = __webpack_require__(11);

var schemas = _interopRequireWildcard(_schemas);

var _humps = __webpack_require__(40);

var _humps2 = _interopRequireDefault(_humps);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var progressModel = new _model2.default(schemas.progress);
function getReadingProgress(userId, bookId) {
    var query = _humps2.default.decamelizeKeys({ userId: userId, bookId: bookId });
    return progressModel.list({ disablePagination: true, raw: true, query: query }).then(function (res) {
        if (res['length'] === 0) {
            return progressModel.outputEmpty({
                user_id: userId,
                book_id: bookId
            });
        }
        return res[0];
    });
}
function setReadingProgress(userId, bookId, data) {
    var query = _humps2.default.decamelizeKeys({ userId: userId, bookId: bookId });
    return progressModel.update(query, data, {
        upsert: true
    });
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(progressModel, 'progressModel', '/Users/liang/Projects/readr/src/server/api/user.ts');

    __REACT_HOT_LOADER__.register(getReadingProgress, 'getReadingProgress', '/Users/liang/Projects/readr/src/server/api/user.ts');

    __REACT_HOT_LOADER__.register(setReadingProgress, 'setReadingProgress', '/Users/liang/Projects/readr/src/server/api/user.ts');
}();

;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign2 = __webpack_require__(3);

var _assign3 = _interopRequireDefault(_assign2);

var _omit2 = __webpack_require__(7);

var _omit3 = _interopRequireDefault(_omit2);

exports.findUser = findUser;
exports.addUser = addUser;

var _model = __webpack_require__(12);

var _model2 = _interopRequireDefault(_model);

var _schemas = __webpack_require__(11);

var schemas = _interopRequireWildcard(_schemas);

var _common = __webpack_require__(8);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userModel = new _model2.default(schemas.user);
function findUser(id) {
    return userModel.findOne(id).then(function (entity) {
        return (0, _omit3.default)(entity, ['password']);
    });
}
function addUser(userInfo) {
    return userModel.add((0, _assign3.default)({}, userInfo, {
        role: _common.ROLES.USER
    }));
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(userModel, 'userModel', '/Users/liang/Projects/readr/src/server/api/users.ts');

    __REACT_HOT_LOADER__.register(findUser, 'findUser', '/Users/liang/Projects/readr/src/server/api/users.ts');

    __REACT_HOT_LOADER__.register(addUser, 'addUser', '/Users/liang/Projects/readr/src/server/api/users.ts');
}();

;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = bootstrap;

var _http = __webpack_require__(273);

var _http2 = _interopRequireDefault(_http);

var _print = __webpack_require__(70);

var _print2 = _interopRequireDefault(_print);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bootstrap(app, config) {
    var portInConfigFile = void 0;
    var overidePort = config.port,
        serviceName = config.serviceName,
        isProduction = config.isProduction;

    var server = _http2.default.createServer(app);
    var serviceName2 = serviceName || 'pages';
    switch (serviceName2) {
        case 'api':
            portInConfigFile = Number(process.env.API_PORT);
            break;
        case 'pages':
            portInConfigFile = Number(process.env.MAIN_PORT);
            break;
        default:
            throw new Error('serviceName undefined!');
    }
    var port = overidePort || portInConfigFile;
    app.set('port', port);
    server.listen(port);
    _print2.default.info('Service[' + serviceName2 + '] running in ' + (isProduction ? 'production' : 'development') + ' at port ' + port);
    return app;
}
// import appConfig from '../app.config'
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(bootstrap, 'bootstrap', '/Users/liang/Projects/readr/src/server/bootstrap.ts');
}();

;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataType = exports.DataType = function () {
    function DataType(mark, isTypeArray) {
        _classCallCheck(this, DataType);

        this.mark = mark;
        this.isTypeArray = typeof isTypeArray === 'undefined' ? false : isTypeArray;
    }

    _createClass(DataType, [{
        key: 'isArray',
        value: function isArray() {
            if (typeof this.isTypeArray === 'undefined' || !this.isTypeArray) {
                return false;
            }
            return true;
        }
    }, {
        key: 'equals',
        value: function equals(type) {
            return type.mark === this.mark && type.isArray() === this.isTypeArray;
        }
    }]);

    return DataType;
}();

var arrayOf = exports.arrayOf = function arrayOf(type) {
    return new DataType(type.mark, true);
};
var DataTypes = {
    String: new DataType('STRING'),
    Number: new DataType('NUMBER'),
    ID: new DataType('ID')
};
var _default = DataTypes;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(DataType, 'DataType', '/Users/liang/Projects/readr/src/server/data/types.ts');

    __REACT_HOT_LOADER__.register(arrayOf, 'arrayOf', '/Users/liang/Projects/readr/src/server/data/types.ts');

    __REACT_HOT_LOADER__.register(DataTypes, 'DataTypes', '/Users/liang/Projects/readr/src/server/data/types.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/server/data/types.ts');
}();

;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.listCollections = exports.delFile = exports.readFile = exports.setReadingProgress = exports.getReadingProgress = exports.listShelfBooks = exports.addUser = exports.findUser = exports.removeBook = exports.editBookMeta = exports.listBooks = exports.resolveBookContent = exports.findBook = exports.addBook = exports.user = exports.tag = exports.book = exports.collection = exports.author = undefined;

var _api = __webpack_require__(185);

var api = _interopRequireWildcard(_api);

var _makeBasicEndpoint = __webpack_require__(191);

var _makeBasicEndpoint2 = _interopRequireDefault(_makeBasicEndpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// basic endpoints
var author = exports.author = (0, _makeBasicEndpoint2.default)(api.author);
var collection = exports.collection = (0, _makeBasicEndpoint2.default)(api.collection);
var book = exports.book = (0, _makeBasicEndpoint2.default)(api.book);
var tag = exports.tag = (0, _makeBasicEndpoint2.default)(api.tag);
var user = exports.user = (0, _makeBasicEndpoint2.default)(api.user);
// common endpoints
// books
var addBook = exports.addBook = function addBook(req, res, next) {
    req.apiResults = api.addBook(req.body, req.loggedFileId);
    next();
};
var findBook = exports.findBook = function findBook(req, res, next) {
    req.apiResults = api.findBook(req.params.book);
    next();
};
var resolveBookContent = exports.resolveBookContent = function resolveBookContent(req, res, next) {
    req.apiResults = api.resolveBookContent(req.params.book);
    next();
};
var listBooks = exports.listBooks = function listBooks(req, res, next) {
    req.apiResults = api.listBooks(req.query.page || 1);
    next();
};
var editBookMeta = exports.editBookMeta = function editBookMeta(req, res, next) {
    req.apiResults = api.editBookMeta(req.params.book, req.body);
    next();
};
var removeBook = exports.removeBook = function removeBook(req, res, next) {
    req.apiResults = api.removeBook(req.params.book);
    next();
};
// users
var findUser = exports.findUser = function findUser(req, res, next) {
    req.apiResults = api.findUser(req.context.user.id);
    next();
};
var addUser = exports.addUser = function addUser(req, res, next) {
    req.apiResults = api.addUser(req.body);
    next();
};
// user
var listShelfBooks = exports.listShelfBooks = function listShelfBooks(req, res, next) {
    req.apiResults = api.listShelfBooks(req.context.user.id, req.query.page || 1);
    next();
};
var getReadingProgress = exports.getReadingProgress = function getReadingProgress(req, res, next) {
    req.apiResults = api.getReadingProgress(req.context.user.id, req.params.book);
    next();
};
var setReadingProgress = exports.setReadingProgress = function setReadingProgress(req, res, next) {
    req.apiResults = api.setReadingProgress(req.context.user.id, req.params.book, req.body);
    next();
};
// file
var readFile = exports.readFile = function readFile(req, res, next) {
    req.apiResults = api.readFile(req.params.file);
    next();
};
var delFile = exports.delFile = function delFile(req, res, next) {
    req.apiResults = api.delFile(req.params.file);
    next();
};
// other
var listCollections = exports.listCollections = function listCollections(req, res, next) {
    req.apiResults = api.listCollection(req.query.page || 1);
    next();
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(author, 'author', '/Users/liang/Projects/readr/src/server/endpoints/index.ts');

    __REACT_HOT_LOADER__.register(collection, 'collection', '/Users/liang/Projects/readr/src/server/endpoints/index.ts');

    __REACT_HOT_LOADER__.register(book, 'book', '/Users/liang/Projects/readr/src/server/endpoints/index.ts');

    __REACT_HOT_LOADER__.register(tag, 'tag', '/Users/liang/Projects/readr/src/server/endpoints/index.ts');

    __REACT_HOT_LOADER__.register(user, 'user', '/Users/liang/Projects/readr/src/server/endpoints/index.ts');

    __REACT_HOT_LOADER__.register(addBook, 'addBook', '/Users/liang/Projects/readr/src/server/endpoints/index.ts');

    __REACT_HOT_LOADER__.register(findBook, 'findBook', '/Users/liang/Projects/readr/src/server/endpoints/index.ts');

    __REACT_HOT_LOADER__.register(resolveBookContent, 'resolveBookContent', '/Users/liang/Projects/readr/src/server/endpoints/index.ts');

    __REACT_HOT_LOADER__.register(listBooks, 'listBooks', '/Users/liang/Projects/readr/src/server/endpoints/index.ts');

    __REACT_HOT_LOADER__.register(editBookMeta, 'editBookMeta', '/Users/liang/Projects/readr/src/server/endpoints/index.ts');

    __REACT_HOT_LOADER__.register(removeBook, 'removeBook', '/Users/liang/Projects/readr/src/server/endpoints/index.ts');

    __REACT_HOT_LOADER__.register(findUser, 'findUser', '/Users/liang/Projects/readr/src/server/endpoints/index.ts');

    __REACT_HOT_LOADER__.register(addUser, 'addUser', '/Users/liang/Projects/readr/src/server/endpoints/index.ts');

    __REACT_HOT_LOADER__.register(listShelfBooks, 'listShelfBooks', '/Users/liang/Projects/readr/src/server/endpoints/index.ts');

    __REACT_HOT_LOADER__.register(getReadingProgress, 'getReadingProgress', '/Users/liang/Projects/readr/src/server/endpoints/index.ts');

    __REACT_HOT_LOADER__.register(setReadingProgress, 'setReadingProgress', '/Users/liang/Projects/readr/src/server/endpoints/index.ts');

    __REACT_HOT_LOADER__.register(readFile, 'readFile', '/Users/liang/Projects/readr/src/server/endpoints/index.ts');

    __REACT_HOT_LOADER__.register(delFile, 'delFile', '/Users/liang/Projects/readr/src/server/endpoints/index.ts');

    __REACT_HOT_LOADER__.register(listCollections, 'listCollections', '/Users/liang/Projects/readr/src/server/endpoints/index.ts');
}();

;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var makeBasicEndpoint = function makeBasicEndpoint(apiFns) {
    var findOne = function findOne(req, res, next) {
        req.apiResults = apiFns.findOne(req.params.id);
        next();
    };
    var list = function list(req, res, next) {
        req.apiResults = apiFns.list(req.query.page || 1);
        next();
    };
    var add = function add(req, res, next) {
        req.apiResults = apiFns.add(req.body);
        next();
    };
    var update = function update(req, res, next) {
        req.apiResults = apiFns.update(req.params.id, req.body);
        next();
    };
    var remove = function remove(req, res, next) {
        req.apiResults = apiFns.remove(req.params.id);
        next();
    };
    return { findOne: findOne, list: list, add: add, update: update, remove: remove };
};
var _default = makeBasicEndpoint;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(makeBasicEndpoint, "makeBasicEndpoint", "/Users/liang/Projects/readr/src/server/endpoints/make-basic-endpoint.ts");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/server/endpoints/make-basic-endpoint.ts");
}();

;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(4);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BadRequestError = function (_GenericError) {
    _inherits(BadRequestError, _GenericError);

    function BadRequestError(message, code) {
        _classCallCheck(this, BadRequestError);

        var _this = _possibleConstructorReturn(this, (BadRequestError.__proto__ || Object.getPrototypeOf(BadRequestError)).call(this, message, 'BadRequestError'));

        _this.statusCode = 400;
        if (code) {
            _this.code = code;
        }
        return _this;
    }

    return BadRequestError;
}(_genericError2.default);

exports.default = BadRequestError;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(BadRequestError, 'BadRequestError', '/Users/liang/Projects/readr/src/server/errors/bad-request-error.ts');
}();

;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(4);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmailError = function (_GenericError) {
    _inherits(EmailError, _GenericError);

    function EmailError(message) {
        _classCallCheck(this, EmailError);

        var _this = _possibleConstructorReturn(this, (EmailError.__proto__ || Object.getPrototypeOf(EmailError)).call(this, message, 'EmailError'));

        _this.statusCode = 500;
        return _this;
    }

    return EmailError;
}(_genericError2.default);

exports.default = EmailError;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(EmailError, 'EmailError', '/Users/liang/Projects/readr/src/server/errors/email-error.ts');
}();

;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(4);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InternalServerError = function (_GenericError) {
    _inherits(InternalServerError, _GenericError);

    function InternalServerError(message) {
        _classCallCheck(this, InternalServerError);

        var _this = _possibleConstructorReturn(this, (InternalServerError.__proto__ || Object.getPrototypeOf(InternalServerError)).call(this, message, 'InternalServerError'));

        _this.statusCode = 500;
        return _this;
    }

    return InternalServerError;
}(_genericError2.default);

exports.default = InternalServerError;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(InternalServerError, 'InternalServerError', '/Users/liang/Projects/readr/src/server/errors/internal-server-error.ts');
}();

;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(4);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MethodNotAllowedError = function (_GenericError) {
    _inherits(MethodNotAllowedError, _GenericError);

    function MethodNotAllowedError(message) {
        _classCallCheck(this, MethodNotAllowedError);

        var _this = _possibleConstructorReturn(this, (MethodNotAllowedError.__proto__ || Object.getPrototypeOf(MethodNotAllowedError)).call(this, message, 'MethodNotAllowedError'));

        _this.statusCode = 405;
        return _this;
    }

    return MethodNotAllowedError;
}(_genericError2.default);

exports.default = MethodNotAllowedError;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(MethodNotAllowedError, 'MethodNotAllowedError', '/Users/liang/Projects/readr/src/server/errors/method-not-allowed-error.ts');
}();

;

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(4);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoPermissionError = function (_GenericError) {
    _inherits(NoPermissionError, _GenericError);

    function NoPermissionError(message) {
        _classCallCheck(this, NoPermissionError);

        var _this = _possibleConstructorReturn(this, (NoPermissionError.__proto__ || Object.getPrototypeOf(NoPermissionError)).call(this, message, 'NoPermissionError'));

        _this.statusCode = 403;
        return _this;
    }

    return NoPermissionError;
}(_genericError2.default);

exports.default = NoPermissionError;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(NoPermissionError, 'NoPermissionError', '/Users/liang/Projects/readr/src/server/errors/no-permission-error.ts');
}();

;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(4);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFoundError = function (_GenericError) {
    _inherits(NotFoundError, _GenericError);

    function NotFoundError(message) {
        _classCallCheck(this, NotFoundError);

        var _this = _possibleConstructorReturn(this, (NotFoundError.__proto__ || Object.getPrototypeOf(NotFoundError)).call(this, message, 'NotFoundError'));

        _this.statusCode = 404;
        return _this;
    }

    return NotFoundError;
}(_genericError2.default);

exports.default = NotFoundError;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(NotFoundError, 'NotFoundError', '/Users/liang/Projects/readr/src/server/errors/not-found-error.ts');
}();

;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(4);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RequestEntityTooLargeError = function (_GenericError) {
    _inherits(RequestEntityTooLargeError, _GenericError);

    function RequestEntityTooLargeError(message) {
        _classCallCheck(this, RequestEntityTooLargeError);

        var _this = _possibleConstructorReturn(this, (RequestEntityTooLargeError.__proto__ || Object.getPrototypeOf(RequestEntityTooLargeError)).call(this, message, 'RequestEntityTooLargeError'));

        _this.statusCode = 413;
        return _this;
    }

    return RequestEntityTooLargeError;
}(_genericError2.default);

exports.default = RequestEntityTooLargeError;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(RequestEntityTooLargeError, 'RequestEntityTooLargeError', '/Users/liang/Projects/readr/src/server/errors/request-too-large-error.ts');
}();

;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(4);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TokenRevocationError = function (_GenericError) {
    _inherits(TokenRevocationError, _GenericError);

    function TokenRevocationError(message) {
        _classCallCheck(this, TokenRevocationError);

        var _this = _possibleConstructorReturn(this, (TokenRevocationError.__proto__ || Object.getPrototypeOf(TokenRevocationError)).call(this, message, 'TokenRevocationError'));

        _this.statusCode = 503;
        return _this;
    }

    return TokenRevocationError;
}(_genericError2.default);

exports.default = TokenRevocationError;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(TokenRevocationError, 'TokenRevocationError', '/Users/liang/Projects/readr/src/server/errors/token-revocation-error.ts');
}();

;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(4);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TooManyRequestsError = function (_GenericError) {
    _inherits(TooManyRequestsError, _GenericError);

    function TooManyRequestsError(message) {
        _classCallCheck(this, TooManyRequestsError);

        var _this = _possibleConstructorReturn(this, (TooManyRequestsError.__proto__ || Object.getPrototypeOf(TooManyRequestsError)).call(this, message, 'TooManyRequestsError'));

        _this.statusCode = 429;
        return _this;
    }

    return TooManyRequestsError;
}(_genericError2.default);

exports.default = TooManyRequestsError;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(TooManyRequestsError, 'TooManyRequestsError', '/Users/liang/Projects/readr/src/server/errors/too-many-requests-error.ts');
}();

;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(4);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnauthorizedError = function (_GenericError) {
    _inherits(UnauthorizedError, _GenericError);

    function UnauthorizedError(message) {
        _classCallCheck(this, UnauthorizedError);

        var _this = _possibleConstructorReturn(this, (UnauthorizedError.__proto__ || Object.getPrototypeOf(UnauthorizedError)).call(this, message, 'UnauthorizedError'));

        _this.statusCode = 401;
        return _this;
    }

    return UnauthorizedError;
}(_genericError2.default);

exports.default = UnauthorizedError;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(UnauthorizedError, 'UnauthorizedError', '/Users/liang/Projects/readr/src/server/errors/unauthorized-error.ts');
}();

;

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(4);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnsupportedFileTypeError = function (_GenericError) {
    _inherits(UnsupportedFileTypeError, _GenericError);

    function UnsupportedFileTypeError(message) {
        _classCallCheck(this, UnsupportedFileTypeError);

        var _this = _possibleConstructorReturn(this, (UnsupportedFileTypeError.__proto__ || Object.getPrototypeOf(UnsupportedFileTypeError)).call(this, message, 'UnsupportedFileTypeError'));

        _this.statusCode = 415;
        return _this;
    }

    return UnsupportedFileTypeError;
}(_genericError2.default);

exports.default = UnsupportedFileTypeError;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(UnsupportedFileTypeError, 'UnsupportedFileTypeError', '/Users/liang/Projects/readr/src/server/errors/unsupported-file-type-error.ts');
}();

;

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(4);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ValidationError = function (_GenericError) {
    _inherits(ValidationError, _GenericError);

    function ValidationError(message, offendingProperty) {
        _classCallCheck(this, ValidationError);

        var _this = _possibleConstructorReturn(this, (ValidationError.__proto__ || Object.getPrototypeOf(ValidationError)).call(this, message, 'ValidationError'));

        _this.statusCode = 422;
        if (offendingProperty) {
            _this.property = offendingProperty;
        }
        return _this;
    }

    return ValidationError;
}(_genericError2.default);

exports.default = ValidationError;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ValidationError, 'ValidationError', '/Users/liang/Projects/readr/src/server/errors/validation-error.ts');
}();

;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computeHash;

var _crypto = __webpack_require__(271);

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * source:
 * http://stackoverflow.com/questions/6984139/how-can-i-get-the-sha1-hash-of-a-string-in-node-js
 */
function computeHash(buffer) {
  var shasum = _crypto2.default.createHash('sha1');
  shasum.update(buffer);
  return shasum.digest('hex');
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(computeHash, 'computeHash', '/Users/liang/Projects/readr/src/server/helpers/compute-hash.ts');
}();

;

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = initialize;

var _express = __webpack_require__(74);

var _express2 = _interopRequireDefault(_express);

var _expressSession = __webpack_require__(272);

var _expressSession2 = _interopRequireDefault(_expressSession);

var _path = __webpack_require__(77);

var _path2 = _interopRequireDefault(_path);

var _morgan = __webpack_require__(281);

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = __webpack_require__(270);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = __webpack_require__(267);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _connectMongo = __webpack_require__(269);

var _connectMongo2 = _interopRequireDefault(_connectMongo);

var _render = __webpack_require__(216);

var _render2 = _interopRequireDefault(_render);

var _bootstrap = __webpack_require__(188);

var _bootstrap2 = _interopRequireDefault(_bootstrap);

var _app = __webpack_require__(18);

var _app2 = _interopRequireDefault(_app);

var _routes = __webpack_require__(228);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MongoStore = (0, _connectMongo2.default)(_expressSession2.default);
var app = (0, _express2.default)();
var PUBLIC_DIR = 'build/static';
var PUBLIC_URL = '/static';
var SESSION_SECRET = 'key';
var REQ_SIZE_LIMIT = '5mb';
// todo: resolve url
var MONGO_STORE_URL = _app2.default.database.host + '/' + _app2.default.database.mongoStoreName;
function initialize(config) {
    var basePath = config.basePath,
        serviceName = config.serviceName,
        isProduction = config.isProduction;
    // locals

    app.locals.basePath = basePath;
    app.use((0, _expressSession2.default)({
        secret: SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
        store: new MongoStore({ url: MONGO_STORE_URL })
    }));
    app.use(_bodyParser2.default.urlencoded({ limit: REQ_SIZE_LIMIT, extended: false }));
    app.use(_bodyParser2.default.json({ limit: REQ_SIZE_LIMIT }));
    app.use((0, _cookieParser2.default)());
    app.use(PUBLIC_URL, _express2.default.static(_path2.default.join(basePath, PUBLIC_DIR)));
    switch (serviceName) {
        case 'api':
            // api routing
            app.use('/' + _app2.default.api.prefix, _routes2.default.api());
            break;
        case 'pages':
        default:
            app.use((0, _render2.default)(isProduction));
            break;
    }
    // log error info
    app.use((0, _morgan2.default)('dev', {
        skip: function skip(req, res) {
            return res.statusCode < 400;
        }
    }));
    return (0, _bootstrap2.default)(app, {
        serviceName: serviceName,
        isProduction: isProduction
    });
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(MongoStore, 'MongoStore', '/Users/liang/Projects/readr/src/server/initialize.ts');

    __REACT_HOT_LOADER__.register(app, 'app', '/Users/liang/Projects/readr/src/server/initialize.ts');

    __REACT_HOT_LOADER__.register(PUBLIC_DIR, 'PUBLIC_DIR', '/Users/liang/Projects/readr/src/server/initialize.ts');

    __REACT_HOT_LOADER__.register(PUBLIC_URL, 'PUBLIC_URL', '/Users/liang/Projects/readr/src/server/initialize.ts');

    __REACT_HOT_LOADER__.register(SESSION_SECRET, 'SESSION_SECRET', '/Users/liang/Projects/readr/src/server/initialize.ts');

    __REACT_HOT_LOADER__.register(REQ_SIZE_LIMIT, 'REQ_SIZE_LIMIT', '/Users/liang/Projects/readr/src/server/initialize.ts');

    __REACT_HOT_LOADER__.register(MONGO_STORE_URL, 'MONGO_STORE_URL', '/Users/liang/Projects/readr/src/server/initialize.ts');

    __REACT_HOT_LOADER__.register(initialize, 'initialize', '/Users/liang/Projects/readr/src/server/initialize.ts');
}();

;

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.basicAuth = basicAuth;
exports.check = check;
exports.revoke = revoke;

var _errors = __webpack_require__(19);

var _errors2 = _interopRequireDefault(_errors);

var _i18n = __webpack_require__(14);

var _i18n2 = _interopRequireDefault(_i18n);

var _model = __webpack_require__(12);

var _model2 = _interopRequireDefault(_model);

var _humps = __webpack_require__(40);

var _humps2 = _interopRequireDefault(_humps);

var _schemas = __webpack_require__(11);

var schemas = _interopRequireWildcard(_schemas);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function basicAuth(req, res, next) {
    var user = new _model2.default(schemas.user);
    var login = req.body.login ? req.body.login.toLowerCase() : undefined;
    var password = req.body.password;
    if (typeof login === 'undefined') {
        next(new _errors2.default.ValidationError((0, _i18n2.default)('errors.validation.preCheck.missRequiredFields', 'login')));
    }
    if (typeof password === 'undefined') {
        next(new _errors2.default.ValidationError((0, _i18n2.default)('errors.validation.preCheck.missRequiredFields', 'password')));
    }
    var query = { $or: [{ username: login, password: password }, { email: login, password: password }] };
    user.findOne(query).then(function (result) {
        req.session.user = _humps2.default.camelizeKeys(result);
        req.apiResults = Promise.resolve({ ok: 1 });
        next();
    }, function (error) {
        next(new _errors2.default.UnauthorizedError((0, _i18n2.default)('errors.middleware.auth.wrongCombination')));
    });
}
function check(req, res) {
    res.send(_humps2.default.decamelizeKeys(req.context.user));
}
function revoke(req, res) {
    req.session.destroy();
    res.status(204).send(null);
}
var _default = { basicAuth: basicAuth, check: check, revoke: revoke };
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(basicAuth, 'basicAuth', '/Users/liang/Projects/readr/src/server/middleware/auth.ts');

    __REACT_HOT_LOADER__.register(check, 'check', '/Users/liang/Projects/readr/src/server/middleware/auth.ts');

    __REACT_HOT_LOADER__.register(revoke, 'revoke', '/Users/liang/Projects/readr/src/server/middleware/auth.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/server/middleware/auth.ts');
}();

;

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = handleApiNotFound;

var _helpers = __webpack_require__(25);

function handleApiNotFound(req, res, next) {
    if (!req.__apiTouched) {
        next((0, _helpers.notFoundError)('API'));
    }
    next();
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(handleApiNotFound, 'handleApiNotFound', '/Users/liang/Projects/readr/src/server/middleware/handle-api-not-found.ts');
}();

;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _omit2 = __webpack_require__(7);

var _omit3 = _interopRequireDefault(_omit2);

exports.default = handleError;

var _print = __webpack_require__(70);

var _print2 = _interopRequireDefault(_print);

var _i18n = __webpack_require__(14);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleError(error, req, res, next) {
    var statusCode = error.statusCode || 500;
    var errorJson = error;
    if (Error.prototype.isPrototypeOf(error)) {
        errorJson = {
            message: error.message || (0, _i18n2.default)('errors.general.unknownErrorOccurred'),
            type: error.name
        };
    }
    if (!error.statusCode) {
        _print2.default.error(error);
    }
    res.status(statusCode).send((0, _omit3.default)(errorJson, ['statusCode', 'name', 'stack']));
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(handleError, 'handleError', '/Users/liang/Projects/readr/src/server/middleware/handle-error.ts');
}();

;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _omit2 = __webpack_require__(7);

var _omit3 = _interopRequireDefault(_omit2);

var _assign2 = __webpack_require__(3);

var _assign3 = _interopRequireDefault(_assign2);

var _parseUrlencoded = __webpack_require__(35);

var _parseUrlencoded2 = _interopRequireDefault(_parseUrlencoded);

var _helpers = __webpack_require__(10);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_ROOT = _helpers2.default.getApiRoot();
function parsePagination(_ref, _ref2) {
    var fullPath = _ref.fullPath,
        query = _ref.query;
    var current = _ref2.current,
        all = _ref2.all;

    var getLintByPage = function getLintByPage(page) {
        return fullPath + '?' + (0, _parseUrlencoded2.default)((0, _assign3.default)({}, query, { page: page }));
    };
    var links = {
        first: getLintByPage(1),
        last: getLintByPage(all),
        prev: getLintByPage(current - 1),
        next: getLintByPage(current + 1)
    };
    if (current > all) {
        links.prev = links.last;
    }
    if (all === 1) {
        if (current > 1) {
            return (0, _omit3.default)(links, ['next']);
        }
        if (current === 1) {
            return (0, _omit3.default)(links, ['prev', 'next']);
        }
    }
    if (current <= 1) {
        return (0, _omit3.default)(links, ['prev']);
    }
    if (current >= all) {
        return (0, _omit3.default)(links, ['next']);
    }
    return links;
}
var handleSuccess = function handleSuccess(apiResults, req, res) {
    if (req.method === 'POST') {
        res.status(201).send(apiResults);
    } else {
        if (apiResults._pagination) {
            var host = API_ROOT;
            res.links(parsePagination({
                fullPath: host + req.path,
                query: req.query
            }, apiResults._pagination));
            res.status(200).send(apiResults.entities);
            return false;
        }
        res.status(200).send(apiResults);
    }
};
function handleJSONResponse(req, res, next) {
    var apiResults = req.apiResults;

    if (!apiResults) {
        next(new Error('"apiResults" is not present!'));
    }
    apiResults.then(function (results) {
        handleSuccess(results, req, res);
    }, function (error) {
        next(error);
    });
}
var _default = handleJSONResponse;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(API_ROOT, 'API_ROOT', '/Users/liang/Projects/readr/src/server/middleware/handle-json-response.ts');

    __REACT_HOT_LOADER__.register(parsePagination, 'parsePagination', '/Users/liang/Projects/readr/src/server/middleware/handle-json-response.ts');

    __REACT_HOT_LOADER__.register(handleSuccess, 'handleSuccess', '/Users/liang/Projects/readr/src/server/middleware/handle-json-response.ts');

    __REACT_HOT_LOADER__.register(handleJSONResponse, 'handleJSONResponse', '/Users/liang/Projects/readr/src/server/middleware/handle-json-response.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/server/middleware/handle-json-response.ts');
}();

;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _parseContext = __webpack_require__(212);

var _parseContext2 = _interopRequireDefault(_parseContext);

var _auth = __webpack_require__(206);

var _auth2 = _interopRequireDefault(_auth);

var _requirePermissionsOf = __webpack_require__(220);

var _requirePermissionsOf2 = _interopRequireDefault(_requirePermissionsOf);

var _handleError = __webpack_require__(208);

var _handleError2 = _interopRequireDefault(_handleError);

var _handleJsonResponse = __webpack_require__(209);

var _handleJsonResponse2 = _interopRequireDefault(_handleJsonResponse);

var _logFile = __webpack_require__(211);

var _logFile2 = _interopRequireDefault(_logFile);

var _prepareApi = __webpack_require__(213);

var _prepareApi2 = _interopRequireDefault(_prepareApi);

var _handleApiNotFound = __webpack_require__(207);

var _handleApiNotFound2 = _interopRequireDefault(_handleApiNotFound);

var _setHeader = __webpack_require__(221);

var _setHeader2 = _interopRequireDefault(_setHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
    parseContext: _parseContext2.default,
    auth: _auth2.default,
    requirePermissionsOf: _requirePermissionsOf2.default,
    handleError: _handleError2.default,
    handleJSONResponse: _handleJsonResponse2.default,
    logFile: _logFile2.default,
    prepareApi: _prepareApi2.default,
    handleApiNotFound: _handleApiNotFound2.default,
    setHeader: _setHeader2.default
};
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/server/middleware/index.ts');
}();

;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get2 = __webpack_require__(13);

var _get3 = _interopRequireDefault(_get2);

exports.default = logFile;

var _schemas = __webpack_require__(11);

var schemas = _interopRequireWildcard(_schemas);

var _model = __webpack_require__(12);

var _model2 = _interopRequireDefault(_model);

var _helpers = __webpack_require__(25);

var helpers = _interopRequireWildcard(_helpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fileModel = new _model2.default(schemas.file);
// @req#loggedFileId
function logFile(req, res, next) {
    var file = req.file;
    var hash = helpers.computeHash(file.buffer);
    var data = {
        filename: file.originalname,
        // 会被转换为 binData 的 BSON type
        content: file.buffer,
        mimetype: file.mimetype,
        size: file.size,
        encoding: file.encoding,
        hash: hash
    };
    fileModel.findOne({ hash: hash }).then(function (result) {
        // req.loggedFileId = result._id
        // TODO: 404 处理
        var err = new Error('File already exists!');
        next(err);
    }, function (notFoundError) {
        // TODO: 不使用 404
        // 为了确定是未找到而不是其他错误需要做额外的判断
        fileModel.add(data).then(function (result) {
            var loggedFileId = (0, _get3.default)(result, ['ops', 0, '_id']);
            if (!loggedFileId) {
                // TODO
                // throw new Error('File not Found!')
                var err = new Error('File not Found!');
                next(err);
            } else {
                req.loggedFileId = loggedFileId;
                next();
            }
        }).catch(function (error) {
            next(error);
        });
    });
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(fileModel, 'fileModel', '/Users/liang/Projects/readr/src/server/middleware/log-file.ts');

    __REACT_HOT_LOADER__.register(logFile, 'logFile', '/Users/liang/Projects/readr/src/server/middleware/log-file.ts');
}();

;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _omit2 = __webpack_require__(7);

var _omit3 = _interopRequireDefault(_omit2);

exports.default = parseContext;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parseContext(req, res, next) {
    if (req.session.user) {
        req.context = {
            user: (0, _omit3.default)(req.session.user, ['password', 'dateCreated', 'email'])
        };
    } else {
        req.context = {
            user: {
                role: 'visitor'
            }
        };
    }
    next();
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(parseContext, 'parseContext', '/Users/liang/Projects/readr/src/server/middleware/parse-context.ts');
}();

;

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = prepareApi;
function prepareApi(req, res, next) {
    req.__apiTouched = true;
    next();
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(prepareApi, "prepareApi", "/Users/liang/Projects/readr/src/server/middleware/prepare-api.ts");
}();

;

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(43);

var _ServerSideAppRoot = __webpack_require__(51);

var _ServerSideAppRoot2 = _interopRequireDefault(_ServerSideAppRoot);

var _sagas = __webpack_require__(168);

var _sagas2 = _interopRequireDefault(_sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchData(req, res, next) {
    var renderProps = req.locals.matchedResults.renderProps;

    var store = req.locals.store;
    var fetchDataFns = renderProps.components.map(function (comp) {
        return comp && comp.fetchData || null;
    }).filter(function (comp) {
        return Boolean(comp);
    });
    if (fetchDataFns.length === 0) {
        var rootComponent = _react2.default.createElement(_ServerSideAppRoot2.default, { renderPageContent: true, renderProps: renderProps, store: req.locals.store });
        store.runSaga(_sagas2.default).done.then(function () {
            next();
        });
        (0, _server.renderToString)(rootComponent);
        store.close();
    } else {
        next();
    }
}
var _default = fetchData;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(fetchData, 'fetchData', '/Users/liang/Projects/readr/src/server/middleware/render/fetch-data.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/server/middleware/render/fetch-data.tsx');
}();

;

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(43);

var _Page = __webpack_require__(109);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleError(error, req, res, next) {
    var html = (0, _server.renderToStaticMarkup)(_react2.default.createElement(_Page2.default, { message: error.message || 'Unknown error occurred!' }));
    res.send('<!DOCTYPE html>\n' + html);
}
var _default = handleError;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(handleError, 'handleError', '/Users/liang/Projects/readr/src/server/middleware/render/handle-error.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/server/middleware/render/handle-error.tsx');
}();

;

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _init = __webpack_require__(217);

var _init2 = _interopRequireDefault(_init);

var _matchRoute = __webpack_require__(218);

var _matchRoute2 = _interopRequireDefault(_matchRoute);

var _fetchData = __webpack_require__(214);

var _fetchData2 = _interopRequireDefault(_fetchData);

var _renderView = __webpack_require__(219);

var _renderView2 = _interopRequireDefault(_renderView);

var _handleError = __webpack_require__(215);

var _handleError2 = _interopRequireDefault(_handleError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var render = function render(isProduction) {
    return [_init2.default, _matchRoute2.default, _fetchData2.default, (0, _renderView2.default)(isProduction), _handleError2.default];
};
var _default = render;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(render, 'render', '/Users/liang/Projects/readr/src/server/middleware/render/index.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/server/middleware/render/index.ts');
}();

;

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = init;

var _reactRouterRedux = __webpack_require__(78);

var _reactRouter = __webpack_require__(9);

var _configureStore = __webpack_require__(159);

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import createRoutes from '../../isomorphic/routes/createRoutes'
// import render, { render500 } from '../render'
// const PROD_ERROR_MSG = '稍安勿躁，工程师正在解决问题 ...'
// const isRoot = url => {
//   let urlParts = url.split('?')[0].split('/')
//   if (urlParts.length !== 2) {
//     return false
//   }
//   if (_.last(urlParts) !== '') {
//     return false
//   }
//   return true
// }
// interface RenderPageConfig {
//   serverRouting: boolean
//   isProduction: boolean
// }
function init(req, res, next) {
    var memoryHistory = (0, _reactRouter.createMemoryHistory)(req.url);
    var store = (0, _configureStore2.default)();
    var history = (0, _reactRouterRedux.syncHistoryWithStore)(memoryHistory, store);
    req.locals = {};
    req.locals.history = history;
    req.locals.store = store;
    next();
}
// render500(errorMsg, isProduction)
//     // 服务端路由关闭（仅限开发模式）
//     if (serverRouting === false) {
//       if (!isRoot(req.url)) {
//         res.status(404).send(`
//         <div style="margin: 60px auto; width: 600px; padding: 5px 20px; border: 1px solid #222;">
//           <h1 style="font-weight: bold; font-size: 22px; margin: 10px 0;">404 Not Found</h1>
//           <p style="margin: 10px 0;">Dev mode with server routing disabled</p>
//         </div>
//       `)
//         return false
//       }

;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(init, 'init', '/Users/liang/Projects/readr/src/server/middleware/render/init.tsx');
}();

;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _last2 = __webpack_require__(42);

var _last3 = _interopRequireDefault(_last2);

var _reactRouter = __webpack_require__(9);

var _createRoutes = __webpack_require__(151);

var _createRoutes2 = _interopRequireDefault(_createRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function matchRoute(req, res, next) {
    (0, _reactRouter.match)({
        history: req.locals.history,
        routes: (0, _createRoutes2.default)(),
        location: req.url
    }, function (error, redirectLocation, renderProps) {
        if (error) {
            next(error);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            var wrappedComponent = (0, _last3.default)(renderProps.components)['WrappedComponent'];
            var statusCode = wrappedComponent ? 200 : 404;
            req.locals.matchedResults = { renderProps: renderProps, statusCode: statusCode };
            next();
        } else {
            // todo
            next(new Error('Missing 404 handle page in routes!'));
        }
    });
}
var _default = matchRoute;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(matchRoute, 'matchRoute', '/Users/liang/Projects/readr/src/server/middleware/render/match-route.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/server/middleware/render/match-route.ts');
}();

;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pick2 = __webpack_require__(32);

var _pick3 = _interopRequireDefault(_pick2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _path = __webpack_require__(77);

var _path2 = _interopRequireDefault(_path);

var _server = __webpack_require__(43);

var _DocContainer = __webpack_require__(45);

var _DocContainer2 = _interopRequireDefault(_DocContainer);

var _ServerSideAppRoot = __webpack_require__(51);

var _ServerSideAppRoot2 = _interopRequireDefault(_ServerSideAppRoot);

var _AppDoc = __webpack_require__(50);

var _AppDoc2 = _interopRequireDefault(_AppDoc);

var _assetsManifest = __webpack_require__(92);

var _assetsManifest2 = _interopRequireDefault(_assetsManifest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLIENT_ENV_VARS = ['API_PORT', 'API_HOST', 'API_PREFIX'];
var resolveDevAssets = function resolveDevAssets(assetName) {
    var assetUrl = 'http://localhost:' + process.env.WEBPACK_PORT + '/static/';
    return assetUrl + assetName;
};
function renderView(isProduction) {
    var cssAssets = void 0;
    var jsAssets = void 0;
    if (isProduction) {
        var prefix = '/static';
        cssAssets = [_path2.default.join(prefix, _assetsManifest2.default['base.global.css']), _path2.default.join(prefix, _assetsManifest2.default['vendor.global.css']), _path2.default.join(prefix, _assetsManifest2.default['modifiers.global.css']), _path2.default.join(prefix, _assetsManifest2.default['app.css'])];
        jsAssets = [_path2.default.join(prefix, _assetsManifest2.default['vendor.js']), _path2.default.join(prefix, _assetsManifest2.default['app.js'])];
    } else {
        cssAssets = [resolveDevAssets('css/base.global.css'), resolveDevAssets('css/vendor.global.css'), resolveDevAssets('css/modifiers.global.css'), resolveDevAssets('css/app.css')];
        jsAssets = [resolveDevAssets('js/vendor.dll.js'), resolveDevAssets('js/app.js')];
    }
    var clientEnv = (0, _pick3.default)(process.env, CLIENT_ENV_VARS);
    return function (req, res) {
        // test 500 page
        // if (req) {
        //   throw new Error('Server fucked up!')
        // }
        var _req$locals$matchedRe = req.locals.matchedResults,
            renderProps = _req$locals$matchedRe.renderProps,
            statusCode = _req$locals$matchedRe.statusCode;

        var appRootMarkup = (0, _server.renderToString)(_react2.default.createElement(_ServerSideAppRoot2.default, { renderPageContent: true, renderProps: renderProps, store: req.locals.store }));
        // 需要在 render 之后调用
        // 不调用 rewind 会造成内存泄漏

        var _DocContainer$rewind = _DocContainer2.default.rewind(),
            bodyClass = _DocContainer$rewind.bodyClass,
            head = _DocContainer$rewind.head;
        // todo: global var name


        var html = (0, _server.renderToStaticMarkup)(_react2.default.createElement(_AppDoc2.default, { appMarkup: appRootMarkup, helmetHeadObject: head, bodyClass: bodyClass, initialState: req.locals.store.getState(), link: cssAssets, script: [{ innerHTML: 'var __ENABLE_SERVER_ROUTING__ = true;' }, { innerHTML: 'var __ENV__ = ' + JSON.stringify(clientEnv) }].concat(jsAssets) }));
        res.status(statusCode).send(_AppDoc.DOCTYPE + html);
    };
}
var _default = renderView;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(CLIENT_ENV_VARS, 'CLIENT_ENV_VARS', '/Users/liang/Projects/readr/src/server/middleware/render/render-view.tsx');

    __REACT_HOT_LOADER__.register(resolveDevAssets, 'resolveDevAssets', '/Users/liang/Projects/readr/src/server/middleware/render/render-view.tsx');

    __REACT_HOT_LOADER__.register(renderView, 'renderView', '/Users/liang/Projects/readr/src/server/middleware/render/render-view.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/server/middleware/render/render-view.tsx');
}();

;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = requirePermissionsOf;

var _common = __webpack_require__(8);

var _errors = __webpack_require__(19);

var _errors2 = _interopRequireDefault(_errors);

var _i18n = __webpack_require__(14);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 权限等级排序
 * admin | user | visitor | none
 */
function requirePermissionsOf(userRole) {
    return function (req, res, next) {
        switch (userRole) {
            case _common.ROLES.ADMIN:
                if (req.context.user.role === _common.ROLES.ADMIN) {
                    next();
                    break;
                }
                next(new _errors2.default.NoPermissionError((0, _i18n2.default)('errors.api.auth.needPermissionsOf', 'admin')));
                break;
            case _common.ROLES.USER:
                if (req.context.user.role === _common.ROLES.USER || req.context.user.role === _common.ROLES.ADMIN) {
                    next();
                    break;
                }
                next(new _errors2.default.NoPermissionError((0, _i18n2.default)('errors.api.auth.loginRequired')));
                break;
            default:
                if (userRole !== _common.ROLES.VISITOR) {
                    next(new Error('Undefined role!'));
                    break;
                }
                next();
        }
    };
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(requirePermissionsOf, 'requirePermissionsOf', '/Users/liang/Projects/readr/src/server/middleware/require-permissions-of.ts');
}();

;

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _process$env = process.env,
    API_HOST = _process$env.API_HOST,
    API_PORT = _process$env.API_PORT,
    MAIN_HOST = _process$env.MAIN_HOST,
    MAIN_PORT = _process$env.MAIN_PORT,
    WEBPACK_HOST = _process$env.WEBPACK_HOST,
    WEBPACK_PORT = _process$env.WEBPACK_PORT;

var makeOrigin = function makeOrigin(host, port) {
    return 'http://' + host + ':' + port;
};
var ALLOWED_ORIGINS = [makeOrigin(API_HOST, API_PORT), makeOrigin(MAIN_HOST, MAIN_PORT), makeOrigin(WEBPACK_HOST, WEBPACK_PORT)];
var setHeader = function setHeader(req, res, next) {
    var origin = req.headers.origin;
    if (ALLOWED_ORIGINS.indexOf(origin) !== -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    next();
};
var _default = setHeader;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(API_HOST, 'API_HOST', '/Users/liang/Projects/readr/src/server/middleware/set-header.ts');

    __REACT_HOT_LOADER__.register(API_PORT, 'API_PORT', '/Users/liang/Projects/readr/src/server/middleware/set-header.ts');

    __REACT_HOT_LOADER__.register(MAIN_HOST, 'MAIN_HOST', '/Users/liang/Projects/readr/src/server/middleware/set-header.ts');

    __REACT_HOT_LOADER__.register(MAIN_PORT, 'MAIN_PORT', '/Users/liang/Projects/readr/src/server/middleware/set-header.ts');

    __REACT_HOT_LOADER__.register(WEBPACK_HOST, 'WEBPACK_HOST', '/Users/liang/Projects/readr/src/server/middleware/set-header.ts');

    __REACT_HOT_LOADER__.register(WEBPACK_PORT, 'WEBPACK_PORT', '/Users/liang/Projects/readr/src/server/middleware/set-header.ts');

    __REACT_HOT_LOADER__.register(makeOrigin, 'makeOrigin', '/Users/liang/Projects/readr/src/server/middleware/set-header.ts');

    __REACT_HOT_LOADER__.register(ALLOWED_ORIGINS, 'ALLOWED_ORIGINS', '/Users/liang/Projects/readr/src/server/middleware/set-header.ts');

    __REACT_HOT_LOADER__.register(setHeader, 'setHeader', '/Users/liang/Projects/readr/src/server/middleware/set-header.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/server/middleware/set-header.ts');
}();

;

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign2 = __webpack_require__(3);

var _assign3 = _interopRequireDefault(_assign2);

var _filter2 = __webpack_require__(276);

var _filter3 = _interopRequireDefault(_filter2);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.connect = connect;
exports.getRowById = getRowById;
exports.getRowByMatch = getRowByMatch;
exports.embedRef = embedRef;

var _app = __webpack_require__(18);

var _app2 = _interopRequireDefault(_app);

var _outputEmptyEntity = __webpack_require__(68);

var _outputEmptyEntity2 = _interopRequireDefault(_outputEmptyEntity);

var _mongodb = __webpack_require__(280);

var _mongodb2 = _interopRequireDefault(_mongodb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MongoClient = _mongodb2.default.MongoClient;
function connect() {
    return MongoClient.connect(_app2.default.database.host + '/' + _app2.default.database.name);
}
function getRowById(id, table) {
    return getRowByMatch({ _id: id }, table);
}
function getRowByMatch(match, table) {
    return connect().then(function (connection) {
        var results = connection.collection(table).find(match).toArray();
        connection.close();
        return results;
    });
}
var getRefFieldsWithIds = function getRefFieldsWithIds(rawResult, schema) {
    return schema.fields.filter(function (field) {
        return typeof field.ref !== 'undefined';
    }).map(function (field) {
        var ids = rawResult[field.name];
        // 将 ids 通通转换为数组
        // 这里包括本该传数组却得到字符串被转换的情况
        if (!Array.isArray(ids)) {
            ids = [ids];
        }
        return Object.assign({}, field, { ids: ids });
    });
};
// 并且添加相应错误信息
var handleRefResult = function handleRefResult(rawRefResult, refSchema, id) {
    if ((typeof rawRefResult === 'undefined' ? 'undefined' : _typeof(rawRefResult)) === 'object') {
        return rawRefResult;
    }
    return (0, _outputEmptyEntity2.default)(refSchema.fields, id);
};
var doesRefHaveRefInside = function doesRefHaveRefInside(ref) {
    return (0, _filter3.default)(ref.fields, function (field) {
        return Boolean(field.ref);
    }).length !== 0;
};
function embedRef(rawResults, schema) {
    if (rawResults.length === 0) {
        return Promise.resolve([]);
    }
    // 获取 ref 数据，生成由 ref 字段组成的对象
    var getRefFieldsWithData = function getRefFieldsWithData(fieldsWithRefIds) {
        var fieldsWithData = fieldsWithRefIds.map(function (field) {
            // 一个 field 里面的 ids 返回的查询结果
            return Promise.all(field.ids.map(function (id) {
                return getRowById(id, field.ref.name).then(function (results) {
                    var isRefInRef = doesRefHaveRefInside(field.ref);
                    var refSchema = field.ref;
                    if (isRefInRef) {
                        // 递归！！
                        return embedRef(results, refSchema).then(function (reRefedResult) {
                            return handleRefResult(reRefedResult[0], refSchema, id);
                        });
                    }
                    return handleRefResult(results[0], refSchema, id);
                });
            })).then(function (refResults) {
                // 处理单个 ref field 数据，都是数组形式，最终是否为数组取决于 ref field 的 type
                var fieldData = refResults;
                if (!field.type || !field.type.isArray()) {
                    fieldData = refResults[0];
                }
                return {
                    name: field.name,
                    data: fieldData
                };
            });
        });
        return Promise.all(fieldsWithData).then(function (fields) {
            return fields.reduce(function (fieldsObj, field) {
                return Object.assign({}, fieldsObj, _defineProperty({}, field.name, field.data));
            }, {});
        });
    };
    return Promise.all(rawResults.map(function (rawResult) {
        var fieldsWithIds = getRefFieldsWithIds(rawResult, schema);
        return getRefFieldsWithData(fieldsWithIds).then(function (refObj) {
            return (0, _assign3.default)({}, rawResult, refObj);
        });
    }));
}
var _default = {
    embedRef: embedRef,
    getRowByMatch: getRowByMatch,
    getRowById: getRowById
};
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(MongoClient, 'MongoClient', '/Users/liang/Projects/readr/src/server/models/database.ts');

    __REACT_HOT_LOADER__.register(connect, 'connect', '/Users/liang/Projects/readr/src/server/models/database.ts');

    __REACT_HOT_LOADER__.register(getRowById, 'getRowById', '/Users/liang/Projects/readr/src/server/models/database.ts');

    __REACT_HOT_LOADER__.register(getRowByMatch, 'getRowByMatch', '/Users/liang/Projects/readr/src/server/models/database.ts');

    __REACT_HOT_LOADER__.register(getRefFieldsWithIds, 'getRefFieldsWithIds', '/Users/liang/Projects/readr/src/server/models/database.ts');

    __REACT_HOT_LOADER__.register(handleRefResult, 'handleRefResult', '/Users/liang/Projects/readr/src/server/models/database.ts');

    __REACT_HOT_LOADER__.register(doesRefHaveRefInside, 'doesRefHaveRefInside', '/Users/liang/Projects/readr/src/server/models/database.ts');

    __REACT_HOT_LOADER__.register(embedRef, 'embedRef', '/Users/liang/Projects/readr/src/server/models/database.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/server/models/database.ts');
}();

;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Schema = function () {
    function Schema(baseTable, fieldDefinition) {
        _classCallCheck(this, Schema);

        this._fieldDefinition = fieldDefinition;
        this._baseTable = baseTable;
    }

    _createClass(Schema, [{
        key: "name",
        get: function get() {
            return this._baseTable;
        }
    }, {
        key: "fields",
        get: function get() {
            return this._fieldDefinition;
        }
    }]);

    return Schema;
}();

exports.default = Schema;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Schema, "Schema", "/Users/liang/Projects/readr/src/server/models/schema.ts");
}();

;

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map2 = __webpack_require__(48);

var _map3 = _interopRequireDefault(_map2);

var _isUndefined2 = __webpack_require__(75);

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

exports.default = validate;

var _utils = __webpack_require__(36);

var _utils2 = _interopRequireDefault(_utils);

var _errors = __webpack_require__(19);

var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reduceTasks = _utils2.default.reduceTasks;
var i18n = _utils2.default.i18n;
function validate(data, schema, isEditing) {
    if (typeof data === 'undefined') {
        return Promise.reject(new _errors2.default.BadRequestError(i18n('errors.validation.preCheck.emptyObject')));
    }
    var suppliedFields = Object.keys(data).filter(function (key) {
        return !(0, _isUndefined3.default)(data[key]);
    });
    var suppliedFieldsInSchema = schema.fields.filter(function (field) {
        return !(0, _isUndefined3.default)(data[field.name]);
    });
    var allFields = (0, _map3.default)(schema.fields, 'name');
    var requiredFields = schema.fields.filter(function (field) {
        return Boolean(field.required);
    }).map(function (field) {
        return field.name;
    });
    var unsupportedFields = suppliedFields.filter(function (key) {
        return allFields.indexOf(key) === -1;
    });
    var missedFields = requiredFields.filter(function (key) {
        return suppliedFields.indexOf(key) === -1;
    });
    if (unsupportedFields.length > 0) {
        return Promise.reject(new _errors2.default.BadRequestError(i18n('errors.validation.preCheck.unsupportedInput', unsupportedFields[0])));
    }
    if (missedFields.length > 0 && !isEditing) {
        return Promise.reject(new _errors2.default.BadRequestError(i18n('errors.validation.preCheck.missRequiredFields', missedFields[0])));
    }
    // 验证 fields，因为每个 field 可能有不止一个 validator
    var validateField = function validateField(val, validators) {
        return reduceTasks(validators.map(function (validation) {
            if (validation.fn(val)) {
                return Promise.resolve(true);
            }
            return Promise.reject(new _errors2.default.BadRequestError(validation.errorMsg));
        }));
    };
    // 所有 fields 验证一遍
    return reduceTasks(suppliedFieldsInSchema.map(function (field) {
        var validators = field.validators;
        if (validators) {
            return validateField(data[field.name], validators);
        }
        // 跳过未定义 validation 的 filed
        return Promise.resolve(true);
    }));
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(reduceTasks, 'reduceTasks', '/Users/liang/Projects/readr/src/server/models/validate.ts');

    __REACT_HOT_LOADER__.register(i18n, 'i18n', '/Users/liang/Projects/readr/src/server/models/validate.ts');

    __REACT_HOT_LOADER__.register(validate, 'validate', '/Users/liang/Projects/readr/src/server/models/validate.ts');
}();

;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleEpubParser = __webpack_require__(288);

var _simpleEpubParser2 = _interopRequireDefault(_simpleEpubParser);

var _txtContent = __webpack_require__(226);

var _txtContent2 = _interopRequireDefault(_txtContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = { epub: _simpleEpubParser2.default, txtContent: _txtContent2.default };
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/server/parsers/index.ts');
}();

;

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = txtContent;
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function txtContent(target) {
    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
        var nav, content, buffer, flesh;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        nav = [{
                            ref: 'part01',
                            label: '第一章节',
                            index: 0
                        }];
                        content = void 0;

                        if (!(typeof target === 'string')) {
                            _context.next = 7;
                            break;
                        }

                        buffer = new Buffer(target, 'binary');

                        content = buffer.toString();
                        _context.next = 12;
                        break;

                    case 7:
                        if (!Buffer.isBuffer(target)) {
                            _context.next = 11;
                            break;
                        }

                        content = target.toString();
                        _context.next = 12;
                        break;

                    case 11:
                        throw new Error('Only string or buffer is supported!');

                    case 12:
                        flesh = [{
                            src: 'part01',
                            markdown: content
                        }];
                        return _context.abrupt('return', { nav: nav, flesh: flesh });

                    case 14:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__awaiter, '__awaiter', '/Users/liang/Projects/readr/src/server/parsers/txt-content.ts');

    __REACT_HOT_LOADER__.register(txtContent, 'txtContent', '/Users/liang/Projects/readr/src/server/parsers/txt-content.ts');
}();

;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = setupApiApp;

var _express = __webpack_require__(74);

var _express2 = _interopRequireDefault(_express);

var _multer = __webpack_require__(282);

var _multer2 = _interopRequireDefault(_multer);

var _endpoints = __webpack_require__(190);

var endpoints = _interopRequireWildcard(_endpoints);

var _common = __webpack_require__(8);

var _middleware = __webpack_require__(210);

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FORM_DATA_FILE_KEY = 'file';
var upload = (0, _multer2.default)();
var authenticatePublic = [_middleware2.default.prepareApi, _middleware2.default.parseContext];
var authenticatePrivate = [_middleware2.default.prepareApi, _middleware2.default.parseContext, _middleware2.default.requirePermissionsOf(_common.ROLES.USER)];
var authenticateAdmin = [_middleware2.default.prepareApi, _middleware2.default.parseContext, _middleware2.default.requirePermissionsOf(_common.ROLES.ADMIN)];
function apiRoutes() {
    var router = _express2.default.Router();
    // authors
    router.get('/authors/:id', authenticatePublic, endpoints.author.findOne); // basic
    router.get('/authors', authenticatePublic, endpoints.author.list); // basic
    router.post('/authors', authenticatePublic, endpoints.author.add); // basic
    router.put('/authors/:id', authenticatePublic, endpoints.author.update); // basic
    router.delete('/authors/:id', authenticatePublic, endpoints.author.remove); // basic
    // collections
    router.get('/collections/:id', authenticatePublic, endpoints.collection.findOne); // basic
    router.get('/collections', authenticatePublic, endpoints.listCollections);
    router.post('/collections', authenticatePublic, endpoints.collection.add); // basic
    router.put('/collections/:id', authenticatePublic, endpoints.collection.update); // basic
    router.delete('/collections/:id', authenticatePublic, endpoints.collection.remove); // basic
    // books
    router.get('/books/:book', authenticatePublic, endpoints.findBook);
    router.get('/books/:book/content', authenticatePublic, endpoints.resolveBookContent);
    router.get('/books', authenticatePublic, endpoints.listBooks);
    // router.post('/books', authenticateAdmin, endpoints.book.add) // basic
    router.post('/books', authenticateAdmin, upload.single(FORM_DATA_FILE_KEY), _middleware2.default.logFile, endpoints.addBook); // 处理文件
    router.put('/books/:book', authenticateAdmin, endpoints.editBookMeta);
    router.delete('/books/:book', authenticateAdmin, endpoints.removeBook);
    // tags
    router.get('/tags/:id', authenticatePublic, endpoints.tag.findOne); // basic
    router.get('/tags', authenticatePublic, endpoints.tag.list); // basic
    router.post('/tags', authenticatePublic, endpoints.tag.add); // basic
    router.put('/tags/:id', authenticatePublic, endpoints.tag.update); // basic
    router.delete('/tags/:id', authenticatePublic, endpoints.tag.remove); // basic
    // users
    router.get('/users', authenticateAdmin, endpoints.user.list); // basic
    router.post('/users', authenticatePublic, endpoints.addUser);
    // user
    router.get('/user/profile', authenticatePrivate, endpoints.findUser);
    router.get('/user/books/shelf', authenticatePrivate, endpoints.listShelfBooks);
    // progress
    router.get('/user/books/:book/progress', authenticatePrivate, endpoints.getReadingProgress);
    router.put('/user/books/:book/progress', authenticatePrivate, endpoints.setReadingProgress);
    // file
    router.get('/files/:file', authenticateAdmin, endpoints.readFile);
    router.delete('/files/:file', authenticateAdmin, endpoints.delFile);
    // auth
    router.post('/auth', authenticatePublic, _middleware2.default.auth.basicAuth);
    router.get('/auth', authenticatePublic, _middleware2.default.auth.check);
    router.put('/auth/revoke', authenticatePublic, _middleware2.default.auth.revoke);
    return router;
}
function setupApiApp() {
    var apiApp = (0, _express2.default)();
    apiApp.use(_middleware2.default.setHeader);
    apiApp.use(apiRoutes());
    apiApp.use(_middleware2.default.handleApiNotFound);
    apiApp.use(_middleware2.default.handleJSONResponse);
    apiApp.use(_middleware2.default.handleError);
    return apiApp;
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(FORM_DATA_FILE_KEY, 'FORM_DATA_FILE_KEY', '/Users/liang/Projects/readr/src/server/routes/api-routes.ts');

    __REACT_HOT_LOADER__.register(upload, 'upload', '/Users/liang/Projects/readr/src/server/routes/api-routes.ts');

    __REACT_HOT_LOADER__.register(authenticatePublic, 'authenticatePublic', '/Users/liang/Projects/readr/src/server/routes/api-routes.ts');

    __REACT_HOT_LOADER__.register(authenticatePrivate, 'authenticatePrivate', '/Users/liang/Projects/readr/src/server/routes/api-routes.ts');

    __REACT_HOT_LOADER__.register(authenticateAdmin, 'authenticateAdmin', '/Users/liang/Projects/readr/src/server/routes/api-routes.ts');

    __REACT_HOT_LOADER__.register(apiRoutes, 'apiRoutes', '/Users/liang/Projects/readr/src/server/routes/api-routes.ts');

    __REACT_HOT_LOADER__.register(setupApiApp, 'setupApiApp', '/Users/liang/Projects/readr/src/server/routes/api-routes.ts');
}();

;

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _apiRoutes = __webpack_require__(227);

var _apiRoutes2 = _interopRequireDefault(_apiRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
    api: _apiRoutes2.default
};
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/server/routes/index.ts');
}();

;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _default = {
    common: {
        terms: {
            id: 'ID',
            username: '用户名',
            password: '密码',
            percentage: '进度百分比',
            email: '邮箱',
            login: '登录项',
            description: '描述',
            name: '名称',
            creator: '创建者',
            title: '标题',
            progress: '进度',
            user: '用户',
            admin: '管理员',
            file: '文件',
            files: '文件',
            book: '书籍',
            books: '书籍'
        }
    },
    errors: {
        validation: {
            valueLimit: {
                notString: '{value}不是字符串',
                stringOnly: '输入项类型只能为字符串',
                alphanumeric: '{value}只能为字母或数字',
                undefined: '{value}未定义',
                invalidFormat: '{value}格式不对',
                noPureNumber: '{value}不能为纯数字',
                onlyStartWithLetters: '{value}只能以字母开头',
                length: '长度不匹配',
                minLength: '{value}长度不足',
                maxLength: '{value}超出最大长度',
                username: {
                    allowedChars: '用户名只能包含字母，数字及以下字符 "-","_"'
                }
            },
            preCheck: {
                emptyObject: '提交数据不能为空',
                missRequiredFields: '{value}为必填项',
                unsupportedInput: '发现未知的输入项{value}',
                inputEmpty: '{value}输入不能为空'
            }
        },
        api: {
            general: {
                notFound: '{value}未找到',
                notFoundIn: '在{value}中未找到',
                exists: '{value}已存在'
            },
            auth: {
                needPermissionsOf: '需要 {value} 权限',
                loginRequired: '需要登录'
            }
        },
        schema: {
            unique: '{value}已存在'
        },
        middleware: {
            auth: {
                accessDenied: '访问被禁止',
                wrongPassword: '密码错误',
                wrongCombination: '用户名或密码错误'
            },
            oauth: {
                tokenExpired: 'token 过期'
            },
            spamprevention: {
                tooManyAttempts: '您的访问过于频繁',
                noUsername: '无用户名',
                noPassword: '无密码'
            }
        },
        mail: {
            failedSendingEmail: '邮件发送失败'
        },
        general: {
            anErrorOccurred: '发生错误',
            unknownErrorOccurred: '发生未知错误',
            notFound: '{value}未找到'
        }
    }
};
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/server/translations/cn.ts');
}();

;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bluebird = __webpack_require__(73);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pipeline(tasks /* initial arguments */) {
    var args = Array.prototype.slice.call(arguments, 1);
    var _runTask = function runTask(task, args) {
        // Self-optimizing function to run first task with multiple
        // args using apply, but subsequent tasks via direct invocation
        _runTask = function runTask(task, arg) {
            return task(arg);
        };
        return task.apply(null, args);
    };
    // Resolve any promises for the arguments passed in first
    return _bluebird2.default.all(args).then(function (args) {
        // Iterate through the tasks passing args from one into the next
        return _bluebird2.default.reduce(tasks, function (arg, task) {
            return _runTask(task, arg);
        }, args);
    });
} /**
   * # Pipeline Utility (borrowed from Ghost)
   *
   * Based on pipeline.js from when.js:
   * https://github.com/cujojs/when/blob/3.7.4/pipeline.js
   */
var _default = pipeline;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(pipeline, 'pipeline', '/Users/liang/Projects/readr/src/server/utils/pipeline.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/server/utils/pipeline.ts');
}();

;

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = reduceTasks;

var _bluebird = __webpack_require__(73);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// tasks 可以是返回 Promise 的 fn
// 也可以是 Promise
function reduceTasks(tasks) {
    var _this = this;

    return _bluebird2.default.reduce(tasks, function (result, task) {
        if (typeof task === 'function') {
            return task.call(_this);
        }
        // 如果 task 是 Promise blue bird 貌似会自动把 promise resolve 出来，是 reject 直接就终止执行
        // 所以 写 task()#then 会出错
        return task;
    });
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(reduceTasks, 'reduceTasks', '/Users/liang/Projects/readr/src/server/utils/reduce-tasks.ts');
}();

;

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sortByDate;
// 最新的在前面
// 最新的在前面
function sortByDate() {
    return function (a, b) {
        return new Date(b.date_updated).valueOf() - new Date(a.date_updated).valueOf();
    };
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(sortByDate, "sortByDate", "/Users/liang/Projects/readr/src/server/utils/sort-by-date.ts");
}();

;

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var md5 = __webpack_require__(234);
var _default = md5;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/vendor_modules/md5/index.js');
}();

;

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*global unescape, define, module */

;(function ($) {
  'use strict';

  /*
  * Add integers, wrapping at 2^32. This uses 16-bit operations internally
  * to work around bugs in some JS interpreters.
  */

  function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xFFFF;
  }

  /*
  * Bitwise rotate a 32-bit number to the left.
  */
  function bit_rol(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  }

  /*
  * These functions implement the four basic operations the algorithm uses.
  */
  function md5_cmn(q, a, b, x, s, t) {
    return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
  }
  function md5_ff(a, b, c, d, x, s, t) {
    return md5_cmn(b & c | ~b & d, a, b, x, s, t);
  }
  function md5_gg(a, b, c, d, x, s, t) {
    return md5_cmn(b & d | c & ~d, a, b, x, s, t);
  }
  function md5_hh(a, b, c, d, x, s, t) {
    return md5_cmn(b ^ c ^ d, a, b, x, s, t);
  }
  function md5_ii(a, b, c, d, x, s, t) {
    return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
  }

  /*
  * Calculate the MD5 of an array of little-endian words, and a bit length.
  */
  function binl_md5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << len % 32;
    x[(len + 64 >>> 9 << 4) + 14] = len;

    var i;
    var olda;
    var oldb;
    var oldc;
    var oldd;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;

    for (i = 0; i < x.length; i += 16) {
      olda = a;
      oldb = b;
      oldc = c;
      oldd = d;

      a = md5_ff(a, b, c, d, x[i], 7, -680876936);
      d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
      b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

      a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = md5_gg(b, c, d, a, x[i], 20, -373897302);
      a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

      a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
      d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = md5_hh(d, a, b, c, x[i], 11, -358537222);
      c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

      a = md5_ii(a, b, c, d, x[i], 6, -198630844);
      d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

      a = safe_add(a, olda);
      b = safe_add(b, oldb);
      c = safe_add(c, oldc);
      d = safe_add(d, oldd);
    }
    return [a, b, c, d];
  }

  /*
  * Convert an array of little-endian words to a string
  */
  function binl2rstr(input) {
    var i;
    var output = '';
    var length32 = input.length * 32;
    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xFF);
    }
    return output;
  }

  /*
  * Convert a raw string to an array of little-endian words
  * Characters >255 have their high-byte silently ignored.
  */
  function rstr2binl(input) {
    var i;
    var output = [];
    output[(input.length >> 2) - 1] = undefined;
    for (i = 0; i < output.length; i += 1) {
      output[i] = 0;
    }
    var length8 = input.length * 8;
    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << i % 32;
    }
    return output;
  }

  /*
  * Calculate the MD5 of a raw string
  */
  function rstr_md5(s) {
    return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
  }

  /*
  * Calculate the HMAC-MD5, of a key and some data (raw strings)
  */
  function rstr_hmac_md5(key, data) {
    var i;
    var bkey = rstr2binl(key);
    var ipad = [];
    var opad = [];
    var hash;
    ipad[15] = opad[15] = undefined;
    if (bkey.length > 16) {
      bkey = binl_md5(bkey, key.length * 8);
    }
    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636;
      opad[i] = bkey[i] ^ 0x5C5C5C5C;
    }
    hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
    return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
  }

  /*
  * Convert a raw string to a hex string
  */
  function rstr2hex(input) {
    var hex_tab = '0123456789abcdef';
    var output = '';
    var x;
    var i;
    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i);
      output += hex_tab.charAt(x >>> 4 & 0x0F) + hex_tab.charAt(x & 0x0F);
    }
    return output;
  }

  /*
  * Encode a string as utf-8
  */
  function str2rstr_utf8(input) {
    return unescape(encodeURIComponent(input));
  }

  /*
  * Take string arguments and return either raw or hex encoded strings
  */
  function raw_md5(s) {
    return rstr_md5(str2rstr_utf8(s));
  }
  function hex_md5(s) {
    return rstr2hex(raw_md5(s));
  }
  function raw_hmac_md5(k, d) {
    return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
  }
  function hex_hmac_md5(k, d) {
    return rstr2hex(raw_hmac_md5(k, d));
  }

  function md5(string, key, raw) {
    if (!key) {
      if (!raw) {
        return hex_md5(string);
      }
      return raw_md5(string);
    }
    if (!raw) {
      return hex_hmac_md5(key, string);
    }
    return raw_hmac_md5(key, string);
  }

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return md5;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
    module.exports = md5;
  } else {
    $.md5 = md5;
  }
})(undefined);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".colophon_3cQJ0 {\n  font-size: 1rem;\n  padding: 20px 0;\n  color: #999; }\n", ""]);

// exports
exports.locals = {
	"colophon": "colophon_3cQJ0"
};

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports
exports.i(__webpack_require__(37), undefined);

// module
exports.push([module.i, ".branding_3goRG {\n  background: #1B267F;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 800;\n  height: 60px; }\n\n.sep_AT6Gl {\n  margin: 0 10px;\n  opacity: .6;\n  font-size: 1rem; }\n\n.sub_Iyhms {\n  opacity: .8;\n  font-size: 1.2rem;\n  text-transform: uppercase;\n  margin-top: -3px;\n  display: inline-block; }\n\n.right_1ZAQP {\n  float: right; }\n\n.sub-name_2T8ah {\n  float: left;\n  margin-left: 15px; }\n  .sub-name_2T8ah span {\n    display: inline-block;\n    line-height: 60px;\n    height: 60px;\n    color: #fff; }\n\n.nav_10yn4 {\n  color: #fff;\n  line-height: 60px;\n  height: 60px; }\n", ""]);

// exports
exports.locals = {
	"branding": "branding_3goRG",
	"sep": "sep_AT6Gl",
	"sub": "sub_Iyhms",
	"right": "right_1ZAQP",
	"sub-name": "sub-name_2T8ah",
	"nav": "nav_10yn4 " + __webpack_require__(37).locals["nav"] + ""
};

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".sidebar-left_mE1mo {\n  position: fixed;\n  left: 0;\n  top: 60px;\n  height: 100%;\n  width: 300px;\n  background: #E4E4E4; }\n\n.nav-side_3R0DN {\n  position: fixed;\n  left: 0;\n  height: 100%; }\n\n.nav-side-root_Jfwbj {\n  width: 80px;\n  background: #04082E; }\n\n.nav-side-root--current_4d7LC {\n  background: red; }\n\n.nav-side-sub_2RYLG {\n  width: 220px;\n  left: 80px; }\n\n/* item */\n.nav-item_2um33 {\n  height: 50px;\n  line-height: 50px; }\n  .nav-item_2um33 a {\n    display: block;\n    padding: 0 15px;\n    color: #fff;\n    height: 50px; }\n\n.icon_3waCK {\n  margin-top: 12px; }\n\n.root-item_1T0Vm {\n  text-align: center; }\n  .root-item_1T0Vm a:hover {\n    background: black; }\n\n.root-item--current_vCL9O {\n  background: #1B267F; }\n\n.sub-item_2_3a7 { }\n  .sub-item_2_3a7 a {\n    color: #666; }\n  .sub-item_2_3a7 a:hover {\n    background: gray(200); }\n\n.sub-item--current_8i_7w { }\n  .sub-item--current_8i_7w a,\n  .sub-item--current_8i_7w a:hover {\n    color: #1B267F;\n    background: #fff; }\n", ""]);

// exports
exports.locals = {
	"sidebar-left": "sidebar-left_mE1mo",
	"nav-side": "nav-side_3R0DN",
	"nav-side-root": "nav-side-root_Jfwbj nav-side_3R0DN",
	"nav-side-root--current": "nav-side-root--current_4d7LC nav-side-root_Jfwbj nav-side_3R0DN",
	"nav-side-sub": "nav-side-sub_2RYLG nav-side_3R0DN",
	"nav-item": "nav-item_2um33",
	"icon": "icon_3waCK",
	"root-item": "root-item_1T0Vm nav-item_2um33",
	"root-item--current": "root-item--current_vCL9O root-item_1T0Vm nav-item_2um33",
	"sub-item": "sub-item_2_3a7 nav-item_2um33",
	"sub-item--current": "sub-item--current_8i_7w sub-item_2_3a7 nav-item_2um33"
};

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".logo-wrap_2xU1t {\n  margin: 0;\n  line-height: 60px;\n  color: #fff;\n  margin-top: -3px;\n  display: inline-block; }\n\n.logo_rp-__ {\n  background: url(" + __webpack_require__(251) + ") no-repeat left;\n  width: 70px;\n  height: 60px;\n  background-size: 70px;\n  text-indent: -999em;\n  display: inline-block; }\n\n.logo--dark_1U19_ {\n  background: url(" + __webpack_require__(250) + ") no-repeat left;\n  background-size: 70px; }\n", ""]);

// exports
exports.locals = {
	"logo-wrap": "logo-wrap_2xU1t",
	"logo": "logo_rp-__",
	"logo--dark": "logo--dark_1U19_ logo_rp-__"
};

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".alerts_lNYyS {\n  position: fixed;\n  width: 100%;\n  padding: 0 20px;\n  top: 10px;\n  left: 0;\n  z-index: 9999; }\n\n.alert_Tg6AL, .alert--success_ibIol, .alert--error_36iOd, .alert--warning_6_19X {\n  padding: 10px 0;\n  font-size: 16px;\n  text-align: center;\n  background: #fff;\n  position: relative;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.32);\n  font-size: 1rem;\n  font-weight: bold;\n  border-radius: 3px;\n  width: 700px;\n  margin: 0 auto 10px; }\n  @media (max-width: 540px) {\n    .alert_Tg6AL, .alert--success_ibIol, .alert--error_36iOd, .alert--warning_6_19X {\n      max-width: 100%; } }\n\n.content_2CILg {\n  overflow: hidden;\n  padding: 0 30px; }\n\n.alert-close_3Ckz- {\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 11px;\n  display: inline-block; }\n\n.alert--success_ibIol {\n  background: #72efa8;\n  color: #204d33; }\n\n.alert--error_36iOd {\n  background: #cc0000;\n  color: #fff; }\n\n.alert--warning_6_19X {\n  background: orange;\n  color: black; }\n", ""]);

// exports
exports.locals = {
	"alerts": "alerts_lNYyS",
	"alert": "alert_Tg6AL",
	"alert--success": "alert--success_ibIol",
	"alert--error": "alert--error_36iOd",
	"alert--warning": "alert--warning_6_19X",
	"content": "content_2CILg",
	"alert-close": "alert-close_3Ckz-"
};

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".btn_M2NhQ {\n  color: #fff;\n  background-color: #1B267F;\n  border-color: #1B267F;\n  padding: 3px 12px;\n  font-size: 1rem;\n  border-radius: 3px;\n  transition: all 0.2s 0s;\n  outline: none;\n  border: 1px solid transparent;\n  display: inline-block;\n  margin: 5px 0;\n  cursor: pointer; }\n  .btn_M2NhQ:hover {\n    color: #fff;\n    background-color: #121955;\n    border-color: #10174d; }\n  .btn_M2NhQ:focus, .btn_M2NhQ.focus_ptKD_ {\n    color: #fff;\n    background-color: #121955;\n    border-color: #10174d;\n    box-shadow: 0 0 0 1px #fff, 0 0 0 3px #2433a9; }\n  .btn_M2NhQ:active, .btn_M2NhQ.active_156lK {\n    color: #fff;\n    background-color: #121955;\n    border-color: #10174d;\n    background-image: none;\n    box-shadow: 0 0 0 1px #fff, 0 0 0 3px #2433a9; }\n    .btn_M2NhQ:active:hover, .btn_M2NhQ:active:focus, .btn_M2NhQ:active.focus_ptKD_, .btn_M2NhQ.active_156lK:hover, .btn_M2NhQ.active_156lK:focus, .btn_M2NhQ.active_156lK.focus_ptKD_ {\n      color: #fff;\n      background-color: #0c1138;\n      border-color: #050716;\n      box-shadow: 0 0 0 1px #fff, 0 0 0 3px #2433a9 !important; }\n  .btn_M2NhQ.disabled_2GlXh:focus, .btn_M2NhQ.disabled_2GlXh.focus_ptKD_, .btn_M2NhQ:disabled:focus, .btn_M2NhQ:disabled.focus_ptKD_ {\n    background-color: #1B267F;\n    border-color: #1B267F; }\n  .btn_M2NhQ.disabled_2GlXh:hover, .btn_M2NhQ:disabled:hover {\n    background-color: #1B267F;\n    border-color: #1B267F; }\n  .btn_M2NhQ.disabled_2GlXh, .btn_M2NhQ:disabled {\n    cursor: not-allowed;\n    opacity: .65; }\n  .btn_M2NhQ:active:hover {\n    box-shadow: none; }\n\n.btn--hover_2KwUv {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n\n.btn_M2NhQ.btn--blue_20YQo {\n  color: #fff;\n  background-color: #1B267F;\n  border-color: #1B267F; }\n  .btn_M2NhQ.btn--blue_20YQo:hover {\n    color: #fff;\n    background-color: #121955;\n    border-color: #10174d; }\n  .btn_M2NhQ.btn--blue_20YQo:focus, .btn_M2NhQ.btn--blue_20YQo.focus_ptKD_ {\n    color: #fff;\n    background-color: #121955;\n    border-color: #10174d;\n    box-shadow: 0 0 0 1px #fff, 0 0 0 3px #2433a9; }\n  .btn_M2NhQ.btn--blue_20YQo:active, .btn_M2NhQ.btn--blue_20YQo.active_156lK {\n    color: #fff;\n    background-color: #121955;\n    border-color: #10174d;\n    background-image: none;\n    box-shadow: 0 0 0 1px #fff, 0 0 0 3px #2433a9; }\n    .btn_M2NhQ.btn--blue_20YQo:active:hover, .btn_M2NhQ.btn--blue_20YQo:active:focus, .btn_M2NhQ.btn--blue_20YQo:active.focus_ptKD_, .btn_M2NhQ.btn--blue_20YQo.active_156lK:hover, .btn_M2NhQ.btn--blue_20YQo.active_156lK:focus, .btn_M2NhQ.btn--blue_20YQo.active_156lK.focus_ptKD_ {\n      color: #fff;\n      background-color: #0c1138;\n      border-color: #050716;\n      box-shadow: 0 0 0 1px #fff, 0 0 0 3px #2433a9 !important; }\n  .btn_M2NhQ.btn--blue_20YQo.disabled_2GlXh:focus, .btn_M2NhQ.btn--blue_20YQo.disabled_2GlXh.focus_ptKD_, .btn_M2NhQ.btn--blue_20YQo:disabled:focus, .btn_M2NhQ.btn--blue_20YQo:disabled.focus_ptKD_ {\n    background-color: #1B267F;\n    border-color: #1B267F; }\n  .btn_M2NhQ.btn--blue_20YQo.disabled_2GlXh:hover, .btn_M2NhQ.btn--blue_20YQo:disabled:hover {\n    background-color: #1B267F;\n    border-color: #1B267F; }\n\n.btn_M2NhQ.btn--orange_Ecn3s {\n  color: #fff;\n  background-color: #ee9333;\n  border-color: #ee9333; }\n  .btn_M2NhQ.btn--orange_Ecn3s:hover {\n    color: #fff;\n    background-color: #dc7a12;\n    border-color: #d27412; }\n  .btn_M2NhQ.btn--orange_Ecn3s:focus, .btn_M2NhQ.btn--orange_Ecn3s.focus_ptKD_ {\n    color: #fff;\n    background-color: #dc7a12;\n    border-color: #d27412;\n    box-shadow: 0 0 0 1px #fff, 0 0 0 3px #f2ac62; }\n  .btn_M2NhQ.btn--orange_Ecn3s:active, .btn_M2NhQ.btn--orange_Ecn3s.active_156lK {\n    color: #fff;\n    background-color: #dc7a12;\n    border-color: #d27412;\n    background-image: none;\n    box-shadow: 0 0 0 1px #fff, 0 0 0 3px #f2ac62; }\n    .btn_M2NhQ.btn--orange_Ecn3s:active:hover, .btn_M2NhQ.btn--orange_Ecn3s:active:focus, .btn_M2NhQ.btn--orange_Ecn3s:active.focus_ptKD_, .btn_M2NhQ.btn--orange_Ecn3s.active_156lK:hover, .btn_M2NhQ.btn--orange_Ecn3s.active_156lK:focus, .btn_M2NhQ.btn--orange_Ecn3s.active_156lK.focus_ptKD_ {\n      color: #fff;\n      background-color: #bb6710;\n      border-color: #95530c;\n      box-shadow: 0 0 0 1px #fff, 0 0 0 3px #f2ac62 !important; }\n  .btn_M2NhQ.btn--orange_Ecn3s.disabled_2GlXh:focus, .btn_M2NhQ.btn--orange_Ecn3s.disabled_2GlXh.focus_ptKD_, .btn_M2NhQ.btn--orange_Ecn3s:disabled:focus, .btn_M2NhQ.btn--orange_Ecn3s:disabled.focus_ptKD_ {\n    background-color: #ee9333;\n    border-color: #ee9333; }\n  .btn_M2NhQ.btn--orange_Ecn3s.disabled_2GlXh:hover, .btn_M2NhQ.btn--orange_Ecn3s:disabled:hover {\n    background-color: #ee9333;\n    border-color: #ee9333; }\n\n.btn_M2NhQ.btn--red_3EKC3 {\n  color: #fff;\n  background-color: #d42020;\n  border-color: #d42020; }\n  .btn_M2NhQ.btn--red_3EKC3:hover {\n    color: #fff;\n    background-color: #a81919;\n    border-color: #9f1818; }\n  .btn_M2NhQ.btn--red_3EKC3:focus, .btn_M2NhQ.btn--red_3EKC3.focus_ptKD_ {\n    color: #fff;\n    background-color: #a81919;\n    border-color: #9f1818;\n    box-shadow: 0 0 0 1px #fff, 0 0 0 3px #e34444; }\n  .btn_M2NhQ.btn--red_3EKC3:active, .btn_M2NhQ.btn--red_3EKC3.active_156lK {\n    color: #fff;\n    background-color: #a81919;\n    border-color: #9f1818;\n    background-image: none;\n    box-shadow: 0 0 0 1px #fff, 0 0 0 3px #e34444; }\n    .btn_M2NhQ.btn--red_3EKC3:active:hover, .btn_M2NhQ.btn--red_3EKC3:active:focus, .btn_M2NhQ.btn--red_3EKC3:active.focus_ptKD_, .btn_M2NhQ.btn--red_3EKC3.active_156lK:hover, .btn_M2NhQ.btn--red_3EKC3.active_156lK:focus, .btn_M2NhQ.btn--red_3EKC3.active_156lK.focus_ptKD_ {\n      color: #fff;\n      background-color: #891515;\n      border-color: #650f0f;\n      box-shadow: 0 0 0 1px #fff, 0 0 0 3px #e34444 !important; }\n  .btn_M2NhQ.btn--red_3EKC3.disabled_2GlXh:focus, .btn_M2NhQ.btn--red_3EKC3.disabled_2GlXh.focus_ptKD_, .btn_M2NhQ.btn--red_3EKC3:disabled:focus, .btn_M2NhQ.btn--red_3EKC3:disabled.focus_ptKD_ {\n    background-color: #d42020;\n    border-color: #d42020; }\n  .btn_M2NhQ.btn--red_3EKC3.disabled_2GlXh:hover, .btn_M2NhQ.btn--red_3EKC3:disabled:hover {\n    background-color: #d42020;\n    border-color: #d42020; }\n\n.btn_M2NhQ.btn--white_3Rv2J {\n  color: #333;\n  background-color: #fff;\n  border-color: #fff; }\n  .btn_M2NhQ.btn--white_3Rv2J:hover {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #e0e0e0; }\n  .btn_M2NhQ.btn--white_3Rv2J:focus, .btn_M2NhQ.btn--white_3Rv2J.focus_ptKD_ {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #e0e0e0;\n    box-shadow: 0 0 0 1px #fff, 0 0 0 3px white; }\n  .btn_M2NhQ.btn--white_3Rv2J:active, .btn_M2NhQ.btn--white_3Rv2J.active_156lK {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #e0e0e0;\n    background-image: none;\n    box-shadow: 0 0 0 1px #fff, 0 0 0 3px white; }\n    .btn_M2NhQ.btn--white_3Rv2J:active:hover, .btn_M2NhQ.btn--white_3Rv2J:active:focus, .btn_M2NhQ.btn--white_3Rv2J:active.focus_ptKD_, .btn_M2NhQ.btn--white_3Rv2J.active_156lK:hover, .btn_M2NhQ.btn--white_3Rv2J.active_156lK:focus, .btn_M2NhQ.btn--white_3Rv2J.active_156lK.focus_ptKD_ {\n      color: #333;\n      background-color: #d4d4d4;\n      border-color: #bfbfbf;\n      box-shadow: 0 0 0 1px #fff, 0 0 0 3px white !important; }\n  .btn_M2NhQ.btn--white_3Rv2J.disabled_2GlXh:focus, .btn_M2NhQ.btn--white_3Rv2J.disabled_2GlXh.focus_ptKD_, .btn_M2NhQ.btn--white_3Rv2J:disabled:focus, .btn_M2NhQ.btn--white_3Rv2J:disabled.focus_ptKD_ {\n    background-color: #fff;\n    border-color: #fff; }\n  .btn_M2NhQ.btn--white_3Rv2J.disabled_2GlXh:hover, .btn_M2NhQ.btn--white_3Rv2J:disabled:hover {\n    background-color: #fff;\n    border-color: #fff; }\n", ""]);

// exports
exports.locals = {
	"btn": "btn_M2NhQ",
	"focus": "focus_ptKD_",
	"active": "active_156lK",
	"disabled": "disabled_2GlXh",
	"btn--hover": "btn--hover_2KwUv",
	"btn--blue": "btn--blue_20YQo",
	"btn--orange": "btn--orange_Ecn3s",
	"btn--red": "btn--red_3EKC3",
	"btn--white": "btn--white_3Rv2J"
};

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".dropdown-item_2C1dz {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.light-link_2QDeA {\n  color: #ddd; }\n  .light-link_2QDeA:hover {\n    color: #fff; }\n\n.dropdown_SZfyp {\n  display: inline-block;\n  cursor: pointer;\n  position: relative; }\n\n.dropdown-toggle_34Qfd {\n  display: block;\n  user-select: none;\n  -webkit-user-select: none;\n  max-height: 100%; }\n\n.dropdown-menu_1HgbS {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.22);\n  line-height: 2.2;\n  font-size: 1rem;\n  text-align: left;\n  background: #222;\n  position: absolute;\n  right: 0;\n  width: 150px;\n  overflow: hidden;\n  padding: 5px 0;\n  z-index: 900; }\n\n.dropdown-caret_FcBWI {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  vertical-align: middle;\n  content: \"\";\n  border: 4px solid;\n  border-right-color: transparent;\n  border-bottom-color: transparent;\n  border-left-color: transparent;\n  margin-left: 5px; }\n\n.dropdown-item_2C1dz {\n  display: block;\n  padding: 0 25px;\n  transition: all 0s; }\n  .dropdown-item_2C1dz:hover {\n    background: #3c3c3c; }\n  .dropdown-item_2C1dz:active {\n    background: #3c3c3c; }\n\n.sep_10Y0o {\n  margin: 5px 0;\n  height: 1px;\n  background: #3c3c3c; }\n\n.dropdown-menu--dark_6eVPX {\n  background: #1B267F; }\n  .dropdown-menu--dark_6eVPX .sep_10Y0o {\n    background: #1f2c94; }\n  .dropdown-menu--dark_6eVPX .dropdown-item_2C1dz:hover {\n    background: #1f2c94; }\n", ""]);

// exports
exports.locals = {
	"dropdown-item": "dropdown-item_2C1dz light-link_2QDeA",
	"light-link": "light-link_2QDeA",
	"dropdown": "dropdown_SZfyp",
	"dropdown-toggle": "dropdown-toggle_34Qfd",
	"dropdown-menu": "dropdown-menu_1HgbS",
	"dropdown-caret": "dropdown-caret_FcBWI",
	"sep": "sep_10Y0o",
	"dropdown-menu--dark": "dropdown-menu--dark_6eVPX dropdown-menu_1HgbS"
};

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ":root {\n  --time: .3s; }\n\n.enter_b08lF {\n  opacity: 0.01;\n  transition: opacity var(--time) ease-in; }\n\n.enterActive_2lPGz {\n  opacity: 1; }\n\n.leave_3S2Q- {\n  opacity: 1;\n  transition: opacity var(--time) ease-in; }\n\n.leaveActive_2i4qH {\n  opacity: 0; }\n", ""]);

// exports
exports.locals = {
	"enter": "enter_b08lF",
	"enterActive": "enterActive_2lPGz",
	"leave": "leave_3S2Q-",
	"leaveActive": "leaveActive_2i4qH"
};

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".svg-shape_423Wb {\n  fill: currentColor;\n  overflow: hidden; }\n\n.icon_2s6T3 {\n  display: inline-block;\n  position: relative; }\n", ""]);

// exports
exports.locals = {
	"svg-shape": "svg-shape_423Wb",
	"icon": "icon_2s6T3"
};

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".input-wrap_1uL9i, .input-wrap--error_oOHxx {\n  margin: 10px 0;\n  position: relative; }\n\n.input_c1thg {\n  width: 100%;\n  padding: 5px 5px;\n  border: 1px solid #ddd;\n  transition: border-color .3s;\n  line-height: 25px;\n  outline: none; }\n\n.input_c1thg:focus {\n  border-color: #1B267F; }\n\n.input-wrap--error_oOHxx .input_c1thg {\n  border-color: #cc0000; }\n\n.error-msg_1VjPs {\n  position: absolute;\n  right: 10px;\n  top: 6px;\n  line-height: 25px;\n  color: #cc0000; }\n", ""]);

// exports
exports.locals = {
	"input-wrap": "input-wrap_1uL9i",
	"input-wrap--error": "input-wrap--error_oOHxx",
	"input": "input_c1thg",
	"error-msg": "error-msg_1VjPs"
};

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".modal_20AZ1 {\n  background: #fff;\n  padding: 0;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);\n  border-radius: 3px; }\n  .modal_20AZ1 .icon-close_5uuLa {\n    cursor: pointer; }\n\n.modal-backdrop_3rq0k {\n  z-index: 900; }\n\n.modal-body_2gT23 {\n  margin: 10px 0 0; }\n\n.modal-header_2dz68 {\n  margin: 10px 0; }\n\n.modal-title_8pOfE {\n  font-size: 1.4rem;\n  font-weight: normal;\n  color: #333;\n  margin: 5px 0; }\n\n.modal-footer_fyZtS {\n  border-top: 3px solid #e9ebf2;\n  text-align: right;\n  overflow: hidden; }\n  .modal-footer_fyZtS .btn-red_3zomi {\n    float: left;\n    margin-left: 0; }\n  .modal-footer_fyZtS button {\n    margin: 5px 0 5px 10px; }\n\n.modal-content_3ZIHb {\n  margin: 15px 0;\n  line-height: 1.5; }\n\n.confirm-modal_k5GF0 {\n  background: #fff;\n  padding: 20px 30px; }\n  .confirm-modal_k5GF0 p {\n    font-size: 1.2rem; }\n\n.modal-plus_1_TST {\n  padding: 20px 30px; }\n", ""]);

// exports
exports.locals = {
	"modal": "modal_20AZ1",
	"icon-close": "icon-close_5uuLa",
	"modal-backdrop": "modal-backdrop_3rq0k",
	"modal-body": "modal-body_2gT23",
	"modal-header": "modal-header_2dz68",
	"modal-title": "modal-title_8pOfE",
	"modal-footer": "modal-footer_fyZtS",
	"btn-red": "btn-red_3zomi",
	"modal-content": "modal-content_3ZIHb",
	"confirm-modal": "confirm-modal_k5GF0",
	"modal-plus": "modal-plus_1_TST"
};

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".modal-footer_FaHiU button {\n  margin-right: 10px; }\n", ""]);

// exports
exports.locals = {
	"modal-footer": "modal-footer_FaHiU"
};

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".selectize-wrap_P-y2- {\n  margin: 10px 0;\n  position: relative; }\n\n.selectize-input_36ULe {\n  min-width: 300px;\n  border: 1px solid #ddd;\n  margin: 10px 0;\n  box-sizing: border-box;\n  transition: all 0s;\n  cursor: text;\n  background: #fff; }\n  .selectize-input_36ULe input {\n    background: transparent;\n    line-height: 22px; }\n\n.selectize-input--focus_30LU5 {\n  border-color: #1B267F; }\n\n.selectize-input--empty_3eAmI {\n  background: #fff;\n  padding: 5px 5px 0; }\n\n.selectize-input_36ULe input {\n  border: none;\n  outline: none;\n  margin-bottom: 5px; }\n\n.query-results_3Ph-Z {\n  margin-top: -3px;\n  margin-bottom: 5px;\n  padding: 5px;\n  border-radius: 3px;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.32);\n  background: #fff;\n  z-index: 900; }\n\n.query-results_3Ph-Z li {\n  padding: 0 7px;\n  line-height: 2;\n  cursor: pointer;\n  border-radius: 3px; }\n  .query-results_3Ph-Z li:hover {\n    background: #1B267F;\n    color: #fff; }\n\n.selectize-tag_1PWDE {\n  background: #1B267F;\n  cursor: pointer;\n  border-radius: 3px;\n  padding: 3px 25px 3px 5px;\n  margin: 5px;\n  color: #fff;\n  display: inline-block;\n  position: relative; }\n\n.icon-remove_2BuSV {\n  font-size: 0.8rem;\n  margin-left: 5px;\n  position: absolute;\n  right: 5px;\n  top: 2px; }\n", ""]);

// exports
exports.locals = {
	"selectize-wrap": "selectize-wrap_P-y2-",
	"selectize-input": "selectize-input_36ULe",
	"selectize-input--focus": "selectize-input--focus_30LU5",
	"selectize-input--empty": "selectize-input--empty_3eAmI",
	"query-results": "query-results_3Ph-Z",
	"selectize-tag": "selectize-tag_1PWDE",
	"icon-remove": "icon-remove_2BuSV"
};

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".textarea-wrap_YWll5 {\n  margin: 10px 0;\n  position: relative; }\n\n.textarea_1svNZ {\n  width: 100%;\n  padding: 5px;\n  border: 1px solid #ddd;\n  outline: none;\n  height: 100px;\n  transition: border-color .3s; }\n\n.textarea_1svNZ:focus {\n  border-color: #1B267F; }\n", ""]);

// exports
exports.locals = {
	"textarea-wrap": "textarea-wrap_YWll5",
	"textarea": "textarea_1svNZ"
};

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".content_deYS4 {\n  margin: 0 auto;\n  width: 550px;\n  position: relative;\n  overflow: hidden;\n  line-height: 1.9; }\n  .content_deYS4 p {\n    margin: 0;\n    min-height: 25px; }\n\n.page_26Jj7 {\n  display: block;\n  width: 100%;\n  overflow: hidden; }\n\n.page--fluid_20eQM { }\n  .page--fluid_20eQM .content_deYS4 {\n    width: 100%;\n    padding: 0 20px; }\n\n.page--init_1VHVM {\n  position: relative;\n  height: auto; }\n  .page--init_1VHVM .content_deYS4 {\n    height: auto; }\n\n.gb-line_3RYqK {\n  overflow: hidden; }\n\n.page-no_2_187 {\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-top: 1px solid #e6e6e6;\n  padding: 0 10px;\n  color: #e6e6e6;\n  font-size: 0.8rem; }\n\n.white_1TVO9 {\n  color: #333; }\n\n.night_3alh8 {\n  color: #eee; }\n  .night_3alh8 a {\n    color: #fff;\n    text-decoration: underline; }\n\n.sepia_1CF69 {\n  color: #503220; }\n", ""]);

// exports
exports.locals = {
	"content": "content_deYS4",
	"page": "page_26Jj7",
	"page--fluid": "page--fluid_20eQM page_26Jj7",
	"page--init": "page--init_1VHVM",
	"gb-line": "gb-line_3RYqK",
	"page-no": "page-no_2_187",
	"white": "white_1TVO9",
	"night": "night_3alh8",
	"sepia": "sepia_1CF69"
};

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/logo-dark.4754e8aa78.png";

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/logo.81eb83d7f7.png";

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(37);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Branding.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Branding.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(235);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Colophon.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Colophon.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(236);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./ConsoleBranding.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./ConsoleBranding.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(237);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./ConsoleSidebar.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./ConsoleSidebar.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(238);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Logo.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Logo.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(240);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./_button.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./_button.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(242);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Fade.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Fade.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(243);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Icon.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Icon.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(244);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Input.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Input.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(246);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./ModalFooter.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./ModalFooter.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(247);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./SelectizeInput.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./SelectizeInput.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(248);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Textarea.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Textarea.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 264 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 265 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 266 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 267 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 268 */
/***/ (function(module, exports) {

module.exports = require("colors/safe");

/***/ }),
/* 269 */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),
/* 270 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 271 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 272 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 273 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 274 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 275 */
/***/ (function(module, exports) {

module.exports = require("lodash/cloneDeep");

/***/ }),
/* 276 */
/***/ (function(module, exports) {

module.exports = require("lodash/filter");

/***/ }),
/* 277 */
/***/ (function(module, exports) {

module.exports = require("lodash/isNull");

/***/ }),
/* 278 */
/***/ (function(module, exports) {

module.exports = require("lodash/mapValues");

/***/ }),
/* 279 */
/***/ (function(module, exports) {

module.exports = require("lodash/union");

/***/ }),
/* 280 */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),
/* 281 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 282 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 283 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 284 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 285 */
/***/ (function(module, exports) {

module.exports = require("react-side-effect");

/***/ }),
/* 286 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 287 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 288 */
/***/ (function(module, exports) {

module.exports = require("simple-epub-parser");

/***/ }),
/* 289 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(81);
module.exports = __webpack_require__(80);


/***/ }),
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
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
/* 415 */
/***/ (function(module, exports) {

module.exports = require("lodash/debounce");

/***/ }),
/* 416 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 417 */
/***/ (function(module, exports) {

module.exports = require("lodash/forEach");

/***/ }),
/* 418 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEqualWith");

/***/ }),
/* 419 */
/***/ (function(module, exports) {

module.exports = require("lodash/slice");

/***/ }),
/* 420 */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),
/* 421 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isServerEnv = __webpack_require__(130);

var _isServerEnv2 = _interopRequireDefault(_isServerEnv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GLOBAL_ENV_VAR = '__ENV__';
var getEnv = function getEnv() {
    if ((0, _isServerEnv2.default)()) {
        return process.env;
    }
    return window[GLOBAL_ENV_VAR];
};
var _default = getEnv;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(GLOBAL_ENV_VAR, 'GLOBAL_ENV_VAR', '/Users/liang/Projects/readr/src/context/getEnv.ts');

    __REACT_HOT_LOADER__.register(getEnv, 'getEnv', '/Users/liang/Projects/readr/src/context/getEnv.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/context/getEnv.ts');
}();

;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map