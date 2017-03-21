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
/******/ 	return __webpack_require__(__webpack_require__.s = 274);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(253);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(254);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = __webpack_require__(252);

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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionTypes__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__viewerDefs__ = __webpack_require__(28);
/* unused harmony reexport ACTION_TYPES */
/* unused harmony reexport VIEWER_DEFS */


// global vars
const ENABLE_SERVER_ROUTING = '__ENABLE_SERVER_ROUTING__';
/* harmony export (immutable) */ __webpack_exports__["f"] = ENABLE_SERVER_ROUTING;

const INITIAL_STATE = '__INITIAL_STATE__';
/* harmony export (immutable) */ __webpack_exports__["b"] = INITIAL_STATE;

const DOUBAN_API_ROOT = 'https://api.douban.com/v2';
/* harmony export (immutable) */ __webpack_exports__["d"] = DOUBAN_API_ROOT;

const GITHUB_API_ROOT = 'https://api.github.com';
/* unused harmony export GITHUB_API_ROOT */

const ROLES = {
    USER: 'user',
    ADMIN: 'admin',
    VISITOR: 'visitor'
};
/* harmony export (immutable) */ __webpack_exports__["e"] = ROLES;

const FETCH_STATUS = {
    LOADING: 'loading',
    NONE: 'none',
    LOADED: 'loaded',
    FAILED: 'failed'
};
/* harmony export (immutable) */ __webpack_exports__["c"] = FETCH_STATUS;

const API_PREFIX = 'api';
/* harmony export (immutable) */ __webpack_exports__["a"] = API_PREFIX;



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-css-modules");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

let GenericError = function GenericError(message, name) {
    _classCallCheck(this, GenericError);

    this.name = name || 'GenericError';
    this.statusCode = 500;
    this.message = message;
    this.stack = new Error().stack;
    this.type = this.name;
};

/* harmony default export */ __webpack_exports__["a"] = GenericError;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_utils__ = __webpack_require__(30);

const makeActionTypeCreator = namespace => type => [namespace, type].join('/');
const viewerType = makeActionTypeCreator('viewer');
/**
 * components
 */
// general
const NOTIFICATION = {
    SHOW: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["a" /* componentType */])('notification', 'SHOW'),
    HIDE: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["a" /* componentType */])('notification', 'HIDE')
};
/* harmony export (immutable) */ __webpack_exports__["c"] = NOTIFICATION;

const OPEN_CONFIRM_MODAL = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["a" /* componentType */])('confirm-modal', 'OPEN');
/* harmony export (immutable) */ __webpack_exports__["d"] = OPEN_CONFIRM_MODAL;

const CLOSE_CONFIRM_MODAL = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["a" /* componentType */])('confirm-modal', 'CLOSE');
/* harmony export (immutable) */ __webpack_exports__["e"] = CLOSE_CONFIRM_MODAL;

const MODAL = {
    OPEN: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["a" /* componentType */])('modal', 'SHOW'),
    CLOSE: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["a" /* componentType */])('modal', 'HIDE')
};
/* harmony export (immutable) */ __webpack_exports__["f"] = MODAL;

// viewer
const VIEWER = {
    INITIALIZE: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["b" /* triggerType */])(viewerType('INITIALIZE')),
    CONFIG: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["b" /* triggerType */])(viewerType('CONFIG')),
    SET_STATUS: viewerType('SET_STATUS'),
    CALC_TRIGGER: viewerType(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["b" /* triggerType */])('calc')),
    CALC_SUCCESS: viewerType('CALC_SUCCESS'),
    CALC_FAILURE: viewerType('CALC_FAILURE'),
    UPDATE_LOCAL_PROGRESS: viewerType('UPDATE_LOCAL_PROGRESS'),
    GO_TO: viewerType(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["b" /* triggerType */])('go-to')),
    // components
    PANEL_TOGGLE: viewerType('TOGGLE_PANEL'),
    PREFERENCE_TOGGLE: viewerType('TOGGLE_PREFERENCE'),
    NAVIGATION_TOGGLE: viewerType('TOGGLE_NAVIGATION'),
    PROGRESS_INFO_TOGGLE: viewerType('TOGGLE_PROGRESS_INFO'),
    // set components state, much simpler than write actions one by one
    SET_COMPONENT: viewerType('SET_COMPONENT'),
    DESTROY: viewerType('DESTROY')
};
/* harmony export (immutable) */ __webpack_exports__["b"] = VIEWER;

// modifiy
const REMOVE_ENTITY = 'REMOVE_ENTITY';
/* harmony export (immutable) */ __webpack_exports__["g"] = REMOVE_ENTITY;

/**
 * api
 */
const BOOKS = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["c" /* apiTypes */])('books');
/* harmony export (immutable) */ __webpack_exports__["h"] = BOOKS;

const BOOK_INFO = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["c" /* apiTypes */])('book-info');
/* harmony export (immutable) */ __webpack_exports__["i"] = BOOK_INFO;

const BOOK_CONTENT = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["c" /* apiTypes */])('book-content');
/* harmony export (immutable) */ __webpack_exports__["j"] = BOOK_CONTENT;

const SESSION = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["c" /* apiTypes */])('session');
/* harmony export (immutable) */ __webpack_exports__["o"] = SESSION;

const PROFILE = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["c" /* apiTypes */])('profile');
/* harmony export (immutable) */ __webpack_exports__["k"] = PROFILE;

const SHELF = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["c" /* apiTypes */])('shelf');
/* harmony export (immutable) */ __webpack_exports__["l"] = SHELF;

const USERS = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["c" /* apiTypes */])('users');
/* harmony export (immutable) */ __webpack_exports__["m"] = USERS;

const AUTHORS = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["c" /* apiTypes */])('authors');
/* harmony export (immutable) */ __webpack_exports__["q"] = AUTHORS;

const COLLECTIONS = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["c" /* apiTypes */])('collections');
/* harmony export (immutable) */ __webpack_exports__["r"] = COLLECTIONS;

const COLLECTION = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["c" /* apiTypes */])('collection');
/* harmony export (immutable) */ __webpack_exports__["s"] = COLLECTION;

const BOOK_PROGRESS = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["c" /* apiTypes */])('book-progress');
/* harmony export (immutable) */ __webpack_exports__["a"] = BOOK_PROGRESS;

const USER_LOGOUT = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["c" /* apiTypes */])('user-logout');
/* harmony export (immutable) */ __webpack_exports__["p"] = USER_LOGOUT;

const BOOK_PROGRESS_UPDATE = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["c" /* apiTypes */])('book-progress-update');
/* harmony export (immutable) */ __webpack_exports__["n"] = BOOK_PROGRESS_UPDATE;

const DOUBAN_BOOKS = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__actions_utils__["c" /* apiTypes */])('douban-books');
/* harmony export (immutable) */ __webpack_exports__["t"] = DOUBAN_BOOKS;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_schema__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_i18n__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_validator__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_types__ = __webpack_require__(166);




const user = new __WEBPACK_IMPORTED_MODULE_0__models_schema__["a" /* default */]('users', [{
    name: 'username',
    required: true,
    unique: true,
    validators: [{
        fn: __WEBPACK_IMPORTED_MODULE_2__utils_validator__["a" /* default */].lengthMin(5),
        errorMsg: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_i18n__["a" /* default */])('errors.validation.valueLimit.minLength', 'name')
    }, {
        fn: __WEBPACK_IMPORTED_MODULE_2__utils_validator__["a" /* default */].lengthMax(20),
        errorMsg: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_i18n__["a" /* default */])('errors.validation.valueLimit.maxLength', 'name')
    }]
}, {
    name: 'password',
    required: true,
    validators: [{
        fn: __WEBPACK_IMPORTED_MODULE_2__utils_validator__["a" /* default */].lengthMin(6),
        errorMsg: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_i18n__["a" /* default */])('errors.validation.valueLimit.minLength', 'password')
    }, {
        fn: __WEBPACK_IMPORTED_MODULE_2__utils_validator__["a" /* default */].lengthMax(20),
        errorMsg: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_i18n__["a" /* default */])('errors.validation.valueLimit.maxLength', 'password')
    }]
}, {
    name: 'email',
    required: true,
    unique: true,
    validators: [{
        fn: __WEBPACK_IMPORTED_MODULE_2__utils_validator__["a" /* default */].isEmail,
        errorMsg: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_i18n__["a" /* default */])('errors.validation.valueLimit.invalidFormat', 'email')
    }]
}, {
    name: 'role',
    required: true
}]);
/* harmony export (immutable) */ __webpack_exports__["e"] = user;

const file = new __WEBPACK_IMPORTED_MODULE_0__models_schema__["a" /* default */]('files', [{
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
/* harmony export (immutable) */ __webpack_exports__["g"] = file;

const progress = new __WEBPACK_IMPORTED_MODULE_0__models_schema__["a" /* default */]('reading_progress', [{
    name: 'percentage',
    required: true,
    type: __WEBPACK_IMPORTED_MODULE_3__data_types__["a" /* default */].Number
}, {
    name: 'user_id',
    type: __WEBPACK_IMPORTED_MODULE_3__data_types__["a" /* default */].ID
}, {
    name: 'book_id',
    type: __WEBPACK_IMPORTED_MODULE_3__data_types__["a" /* default */].ID
}]);
/* harmony export (immutable) */ __webpack_exports__["f"] = progress;

const tag = new __WEBPACK_IMPORTED_MODULE_0__models_schema__["a" /* default */]('tags', [{
    name: 'name',
    required: true
}, {
    name: 'slug',
    unique: true
}, {
    name: 'description'
}]);
/* harmony export (immutable) */ __webpack_exports__["d"] = tag;

const author = new __WEBPACK_IMPORTED_MODULE_0__models_schema__["a" /* default */]('authors', [{
    name: 'name',
    required: true
}, {
    name: 'slug',
    unique: true,
    validators: [{
        fn: __WEBPACK_IMPORTED_MODULE_2__utils_validator__["a" /* default */].isAlphanumeric,
        errorMsg: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_i18n__["a" /* default */])('errors.validation.valueLimit.alphanumeric', 'slug')
    }]
}, {
    name: 'description'
}]);
/* harmony export (immutable) */ __webpack_exports__["a"] = author;

const book = new __WEBPACK_IMPORTED_MODULE_0__models_schema__["a" /* default */]('books', [{
    name: 'title',
    required: true
}, {
    name: 'authors',
    ref: author,
    type: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__data_types__["b" /* arrayOf */])(__WEBPACK_IMPORTED_MODULE_3__data_types__["a" /* default */].ID)
}, {
    name: 'description'
}, {
    name: 'cover'
}, {
    name: 'file',
    ref: file,
    required: true
}]);
/* harmony export (immutable) */ __webpack_exports__["c"] = book;

const collection = new __WEBPACK_IMPORTED_MODULE_0__models_schema__["a" /* default */]('collections', [{
    name: 'name',
    required: true
}, {
    name: 'items',
    required: true,
    ref: book,
    type: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__data_types__["b" /* arrayOf */])(__WEBPACK_IMPORTED_MODULE_3__data_types__["a" /* default */].ID)
}, {
    name: 'description'
}, {
    name: 'creator',
    required: true,
    ref: user
}]);
/* harmony export (immutable) */ __webpack_exports__["b"] = collection;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errors__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_i18n__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validate__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__output_empty_entity__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__paginate__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers__ = __webpack_require__(21);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }










let Model = function () {
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
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__output_empty_entity__["a" /* default */])(this._schema.fields, id);
        }
    }, {
        key: 'findOne',
        value: function findOne(idOrQuery, raw) {
            const query = Model.parseQuery(idOrQuery);
            return this.list({ raw, disablePagination: true, query }).then(result => {
                const entity = result[0];
                if (!entity) {
                    return Promise.reject(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__helpers__["a" /* notFoundIn */])(this._schema._baseTable));
                }
                return entity;
            });
        }
    }, {
        key: 'list',
        value: function list(options = {}) {
            const { raw, page, disablePagination, filter, mapping, query } = options;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__database__["a" /* connect */])().then(connection => {
                const doQuery = () => {
                    const listRaw = listRawQuery => {
                        return connection.collection(this._tableName).find(listRawQuery).toArray();
                    };
                    const rawResults = listRaw(query || {});
                    if (raw) {
                        return rawResults;
                    } else {
                        return rawResults.then(results => {
                            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__database__["b" /* embedRef */])(results, this._schema);
                        });
                    }
                };
                return doQuery().then(entities => {
                    const modifiedEntities = entities.filter(filter || (() => true)).map(mapping || (entity => entity));
                    connection.close();
                    if (!disablePagination) {
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__paginate__["a" /* default */])(modifiedEntities, {
                            page: page || 1
                        });
                    }
                    return modifiedEntities;
                });
            });
        }
    }, {
        key: 'listRaw',
        value: function listRaw(options = {}) {
            const { filter, mapping, query } = options;
            return this.list({
                disablePagination: true,
                raw: true,
                filter,
                mapping,
                query: query || {}
            });
        }
    }, {
        key: 'add',
        value: function add(data) {
            const query = () => {
                let dataWithID = Object.assign({}, data, {
                    _id: Math.random().toFixed(8).substr(2),
                    date_created: new Date().toString()
                });
                // 检查是否需要确认唯一性
                const dataToCheck = this._schema.fields.filter(field => Boolean(field.unique)).map(field => ({
                    key: field.name,
                    value: data[field.name]
                })).filter(fileld => {
                    return Boolean(fileld.value);
                });
                const exec = () => {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__database__["a" /* connect */])().then(connection => {
                        const result = connection.collection(this._tableName).insert([dataWithID]);
                        connection.close();
                        return result;
                    });
                };
                // 过滤出和数据库中已存在数据相匹配的输入项
                if (dataToCheck.length !== 0) {
                    const checkingResult = Promise.all(dataToCheck.map(dataItem => {
                        return __WEBPACK_IMPORTED_MODULE_0__database__["c" /* default */].getRowByMatch({ [dataItem.key]: dataItem.value }, this._tableName).then(res => {
                            if (res.length !== 0) {
                                return dataItem;
                            }
                            return false;
                        });
                    })).then(res => {
                        return res.filter(r => r !== false);
                    });
                    return checkingResult.then(res => {
                        if (res.length !== 0) {
                            return Promise.reject(new __WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].BadRequestError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_i18n__["a" /* default */])('errors.schema.unique', res[0].key)));
                        }
                        return exec();
                    });
                }
                return exec();
            };
            return __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* default */].reduceTasks([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__validate__["a" /* default */])(data, this._schema), query]);
        }
    }, {
        key: 'update',
        value: function update(idOrQuery, data, updateConfig = {}) {
            const { multi, upsert } = updateConfig;
            const query = Model.parseQuery(idOrQuery);
            const doQuery = () => {
                const data2 = Object.assign({}, data, {
                    date_updated: new Date().toString()
                });
                const exec = () => {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__database__["a" /* connect */])().then(connection => {
                        const result = connection.collection(this._tableName).update(query, { $set: data2 }, {
                            upsert: Boolean(upsert),
                            multi: Boolean(multi)
                        });
                        connection.close();
                        return result;
                    });
                };
                if (!upsert) {
                    return this.findOne(idOrQuery, true).then(result => {
                        return exec();
                    });
                }
                return exec();
            };
            return __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* default */].reduceTasks([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__validate__["a" /* default */])(data, this._schema, true), doQuery]);
        }
    }, {
        key: 'remove',
        value: function remove(idOrQuery) {
            const query = Model.parseQuery(idOrQuery);
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__database__["a" /* connect */])().then(connection => {
                const result = connection.collection(this._tableName).remove(query);
                connection.close();
                return result;
            });
        }
    }]);

    return Model;
}();

/* harmony default export */ __webpack_exports__["a"] = Model;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translations_cn__ = __webpack_require__(207);
/* harmony export (immutable) */ __webpack_exports__["a"] = i18n;
/**
 * referenced ghost i18n.js, it's a simplified version
 * and I used js to store local translations instead of json
 */


function addPadding(str) {
    if (!str) {
        return '';
    }
    if (escape(str.substr(-1)).indexOf('%u') !== 0) {
        return ` ${str} `;
    }
    return str;
}
function getMatchingString(msgPath) {
    let matchingString = __WEBPACK_IMPORTED_MODULE_1__translations_cn__["a" /* default */];
    const path = msgPath.split('.');
    for (let i = 0; i < path.length; i++) {
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
    return `${str}！`;
}
function i18n(msgPath, value) {
    let matchingString = getMatchingString(msgPath);
    if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isNull(matchingString)) {
        console.error('Unable to find matching path [' + msgPath + '] in locale file.\n');
        matchingString = 'i18n error: path "' + msgPath + '" was not found.';
    } else {
        const placeholderIndex = matchingString.indexOf('{value}');
        if (placeholderIndex !== -1) {
            const before = matchingString.substring(0, placeholderIndex);
            const after = matchingString.substr(placeholderIndex + 7);
            let matchingValue = '';
            if (typeof value !== 'undefined') {
                matchingValue = getMatchingString(`common.terms.${value}`);
                if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isNull(matchingValue)) {
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

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_redux_form__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_better_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewer__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pagination__ = __webpack_require__(157);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["a"]; });
/* unused harmony reexport utils */
/* unused harmony reexport form */
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__viewer__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__pagination__; });





const session = state => __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(state, 'session', {});
/* harmony export (immutable) */ __webpack_exports__["a"] = session;

const routing = state => __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(state, 'routing.locationBeforeTransitions', {});
/* harmony export (immutable) */ __webpack_exports__["e"] = routing;

const profile = state => __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(state, 'profile', {});
/* harmony export (immutable) */ __webpack_exports__["f"] = profile;




/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schemas__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_actionTypes__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectors__ = __webpack_require__(12);





const removeEntity = (name, id) => ({ type: __WEBPACK_IMPORTED_MODULE_3__constants_actionTypes__["g" /* REMOVE_ENTITY */], name, id });
/* harmony export (immutable) */ __webpack_exports__["removeEntity"] = removeEntity;

// load actions
// books
const loadBooks = (page = 1, q) => {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* createTriggerAction */])(__WEBPACK_IMPORTED_MODULE_3__constants_actionTypes__["h" /* BOOKS */], {
        request: {
            url: 'books',
            query: {
                page, q
            }
        },
        schema: __WEBPACK_IMPORTED_MODULE_0__schemas__["a" /* default */].BOOK_ARRAY
    });
};
/* harmony export (immutable) */ __webpack_exports__["loadBooks"] = loadBooks;

const loadBookInfo = id => {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* createTriggerAction */])(__WEBPACK_IMPORTED_MODULE_3__constants_actionTypes__["i" /* BOOK_INFO */], {
        request: {
            url: `books/${id}`
        },
        targetId: id,
        schema: __WEBPACK_IMPORTED_MODULE_0__schemas__["a" /* default */].BOOK
    });
};
/* harmony export (immutable) */ __webpack_exports__["loadBookInfo"] = loadBookInfo;

const loadBookContent = id => {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* createTriggerAction */])(__WEBPACK_IMPORTED_MODULE_3__constants_actionTypes__["j" /* BOOK_CONTENT */], {
        request: {
            url: `books/${id}/content`
        },
        targetId: id,
        schema: __WEBPACK_IMPORTED_MODULE_0__schemas__["a" /* default */].BOOK_CONTENT
    });
};
/* harmony export (immutable) */ __webpack_exports__["loadBookContent"] = loadBookContent;

// user
const loadProfile = () => {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* createTriggerAction */])(__WEBPACK_IMPORTED_MODULE_3__constants_actionTypes__["k" /* PROFILE */], {
        request: {
            url: `user/profile`
        }
    });
};
/* harmony export (immutable) */ __webpack_exports__["loadProfile"] = loadProfile;

const loadShelf = () => {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* createTriggerAction */])(__WEBPACK_IMPORTED_MODULE_3__constants_actionTypes__["l" /* SHELF */], {
        request: {
            url: `user/books/shelf`
        },
        schema: __WEBPACK_IMPORTED_MODULE_0__schemas__["a" /* default */].SHELF_BOOK_ARRAY
    });
};
/* harmony export (immutable) */ __webpack_exports__["loadShelf"] = loadShelf;

const loadUsers = (page = 1) => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* createTriggerAction */])(__WEBPACK_IMPORTED_MODULE_3__constants_actionTypes__["m" /* USERS */], {
    request: {
        url: `users`,
        query: {
            page
        }
    },
    schema: __WEBPACK_IMPORTED_MODULE_0__schemas__["a" /* default */].USER_ARRAY
});
/* harmony export (immutable) */ __webpack_exports__["loadUsers"] = loadUsers;

const updateBookProgress = (bookId, percentage) => (dispatch, getState) => {
    const state = getState();
    const session = __WEBPACK_IMPORTED_MODULE_4__selectors__["a" /* session */](state);
    const status = __WEBPACK_IMPORTED_MODULE_4__selectors__["c" /* viewer */].status(state);
    if (session.role !== 'visitor' && status.isReady) {
        return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* createTriggerAction */])(__WEBPACK_IMPORTED_MODULE_3__constants_actionTypes__["n" /* BOOK_PROGRESS_UPDATE */], {
            request: {
                url: `user/books/${bookId}/progress`,
                method: 'PUT',
                data: {
                    percentage
                }
            }
        }));
    }
};
/* harmony export (immutable) */ __webpack_exports__["updateBookProgress"] = updateBookProgress;

// app
const loadSession = () => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* createTriggerAction */])(__WEBPACK_IMPORTED_MODULE_3__constants_actionTypes__["o" /* SESSION */], {
    request: {
        url: 'auth'
    }
});
/* harmony export (immutable) */ __webpack_exports__["loadSession"] = loadSession;

const loadBookProgress = id => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* createTriggerAction */])(__WEBPACK_IMPORTED_MODULE_3__constants_actionTypes__["a" /* BOOK_PROGRESS */], {
    request: {
        url: `user/books/${id}/progress`
    },
    targetId: id,
    schema: __WEBPACK_IMPORTED_MODULE_0__schemas__["a" /* default */].BOOK_PROGRESS
});
/* harmony export (immutable) */ __webpack_exports__["loadBookProgress"] = loadBookProgress;

const logout = () => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* createTriggerAction */])(__WEBPACK_IMPORTED_MODULE_3__constants_actionTypes__["p" /* USER_LOGOUT */], {
    request: {
        url: `auth/revoke`,
        method: 'PUT'
    }
});
/* harmony export (immutable) */ __webpack_exports__["logout"] = logout;

// other untested
const loadAuthors = (page = 1, q) => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* createTriggerAction */])(__WEBPACK_IMPORTED_MODULE_3__constants_actionTypes__["q" /* AUTHORS */], {
    request: {
        url: `authors`,
        query: {
            page,
            q
        }
    },
    schema: __WEBPACK_IMPORTED_MODULE_0__schemas__["a" /* default */].AUTHOR_ARRAY
});
/* harmony export (immutable) */ __webpack_exports__["loadAuthors"] = loadAuthors;

const loadCollections = () => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* createTriggerAction */])(__WEBPACK_IMPORTED_MODULE_3__constants_actionTypes__["r" /* COLLECTIONS */], {
    request: {
        url: `collections`
    },
    schema: __WEBPACK_IMPORTED_MODULE_0__schemas__["a" /* default */].COLLECTION_ARRAY
});
/* harmony export (immutable) */ __webpack_exports__["loadCollections"] = loadCollections;

const loadCollection = id => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* createTriggerAction */])(__WEBPACK_IMPORTED_MODULE_3__constants_actionTypes__["s" /* COLLECTION */], {
    request: {
        url: `collections/${id}`
    },
    targetId: id,
    schema: __WEBPACK_IMPORTED_MODULE_0__schemas__["a" /* default */].COLLECTION
});
/* harmony export (immutable) */ __webpack_exports__["loadCollection"] = loadCollection;

// 3rd party
const searchDoubanBooks = keyword => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* createTriggerAction */])(__WEBPACK_IMPORTED_MODULE_3__constants_actionTypes__["t" /* DOUBAN_BOOKS */], {
    request: {
        url: `${__WEBPACK_IMPORTED_MODULE_1__constants__["d" /* DOUBAN_API_ROOT */]}/book/search?count=10&q=${keyword}`,
        useJsonp: true
    },
    schema: __WEBPACK_IMPORTED_MODULE_0__schemas__["a" /* default */].DOUBAN_BOOK_SEARCH_RESULTS
});
/* harmony export (immutable) */ __webpack_exports__["searchDoubanBooks"] = searchDoubanBooks;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lifecircle__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getApiRoot__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isServerRoutingEnabled__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redirect__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isServerEnv__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__print__ = __webpack_require__(120);






/* harmony default export */ __webpack_exports__["a"] = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__lifecircle__, {
    getApiRoot: __WEBPACK_IMPORTED_MODULE_1__getApiRoot__["a" /* default */],
    isServerRoutingEnabled: __WEBPACK_IMPORTED_MODULE_2__isServerRoutingEnabled__["a" /* default */],
    redirect: __WEBPACK_IMPORTED_MODULE_3__redirect__["a" /* default */],
    isServerEnv: __WEBPACK_IMPORTED_MODULE_4__isServerEnv__["a" /* default */],
    print: __WEBPACK_IMPORTED_MODULE_5__print__["a" /* default */]
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__not_found_error__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validation_error__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bad_request_error__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_server_error__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__no_permission_error__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__unauthorized_error__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__request_too_large_error__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__unsupported_file_type_error__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__email_error__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__method_not_allowed_error__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__too_many_requests_error__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__token_revocation_error__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__generic_error__ = __webpack_require__(6);













/* harmony default export */ __webpack_exports__["a"] = {
    NotFoundError: __WEBPACK_IMPORTED_MODULE_0__not_found_error__["a" /* default */],
    ValidationError: __WEBPACK_IMPORTED_MODULE_1__validation_error__["a" /* default */],
    BadRequestError: __WEBPACK_IMPORTED_MODULE_2__bad_request_error__["a" /* default */],
    InternalServerError: __WEBPACK_IMPORTED_MODULE_3__internal_server_error__["a" /* default */],
    NoPermissionError: __WEBPACK_IMPORTED_MODULE_4__no_permission_error__["a" /* default */],
    UnauthorizedError: __WEBPACK_IMPORTED_MODULE_5__unauthorized_error__["a" /* default */],
    RequestEntityTooLargeError: __WEBPACK_IMPORTED_MODULE_6__request_too_large_error__["a" /* default */],
    UnsupportedMediaTypeError: __WEBPACK_IMPORTED_MODULE_7__unsupported_file_type_error__["a" /* default */],
    EmailError: __WEBPACK_IMPORTED_MODULE_8__email_error__["a" /* default */],
    MethodNotAllowedError: __WEBPACK_IMPORTED_MODULE_9__method_not_allowed_error__["a" /* default */],
    TooManyRequestsError: __WEBPACK_IMPORTED_MODULE_10__too_many_requests_error__["a" /* default */],
    TokenRevocationError: __WEBPACK_IMPORTED_MODULE_11__token_revocation_error__["a" /* default */],
    GenericError: __WEBPACK_IMPORTED_MODULE_12__generic_error__["a" /* default */]
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getCurrentTime__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__padNumberWithZero__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parseQuery__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parseUrlencoded__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dom__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__browser__ = __webpack_require__(213);






/* harmony default export */ __webpack_exports__["a"] = Object.assign({
    getCurrentTime: __WEBPACK_IMPORTED_MODULE_0__getCurrentTime__["a" /* default */],
    padNumberWithZero: __WEBPACK_IMPORTED_MODULE_1__padNumberWithZero__["a" /* default */],
    parseQuery: __WEBPACK_IMPORTED_MODULE_2__parseQuery__["a" /* default */],
    parseUrlencoded: __WEBPACK_IMPORTED_MODULE_3__parseUrlencoded__["a" /* default */]
}, __WEBPACK_IMPORTED_MODULE_4__dom__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__browser__["a" /* default */]);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_normalizr__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_normalizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_normalizr__);



const DEFAULT_KEY = 'default';
// new
// entities
const collapseEntities = entities => {
    return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.mapValues(entities, val => {
        return val.entities;
    });
};
const pagination = (name, key = 'default') => state => __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(state, ['pagination', name, key], {});
/* unused harmony export pagination */

const collapsedEntities = state => collapseEntities(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(state, 'entities', {})) || {};
/* unused harmony export collapsedEntities */

const pagedEntities = ({ schema, paginationName, paginationKey }) => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(pagination(paginationName, paginationKey = 'default'), collapsedEntities, (_pagination, _allEntities) => {
    const pagedIds = _pagination.pages;
    const pages = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.mapValues(pagedIds, ids => {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_normalizr__["denormalize"])(ids, schema, _allEntities);
    });
    return Object.assign({}, _pagination, Object.assign({ pages }));
});
/* harmony export (immutable) */ __webpack_exports__["b"] = pagedEntities;

const entity = (name, id) => state => {
    return Object.assign({}, __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(state, ['entities', name, 'entities', id], {}), {
        fetchStatus: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(state, ['entities', name, 'fetchStatus', id]),
        error: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(state, ['entities', name, 'errors', id])
    });
};
/* harmony export (immutable) */ __webpack_exports__["a"] = entity;

const currentPage = (name, key = DEFAULT_KEY) => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(pagination(name, key), _pagination => {
    const next = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(_pagination, 'next.page');
    const last = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(_pagination, 'last.page');
    return next ? next - 1 : last;
});
/* unused harmony export currentPage */

// old
// export const isPaginationFetching = (name, key = DEFAULT_KEY) => state => {
//   return _.get(state, ['pagination', name, key, 'fetchStatus']) === FETCH_STATUS.LOADING
// }
// export const paginationPages = (name, key = DEFAULT_KEY) => state => {
//   return _.get(state, ['pagination', name, key, 'pages'], {})
// }
// export const paginationLinks = (name, key = DEFAULT_KEY) => state => {
//   return _.pick(_.get(state.pagination, `${name}.${key}`, {}), ['next', 'last'])
// }
// export const nextPage = (name, key = DEFAULT_KEY) => createSelector(
//   paginationLinks(name, key),
//   selectedPaginationLinks => {
//     return _.get(selectedPaginationLinks, 'next.page', 0)
//   }
// )
// interface EntityPagesOptions {
//   entitiesName: string
//   paginationName: string
//   paginationKey?: string
// }
// export const entityPages = (options: EntityPagesOptions) => {
//   const { entitiesName, paginationName, paginationKey } = options
//   return createSelector(
//     entities(entitiesName),
//     paginationPages(paginationName, paginationKey),
//     (selectedEntities, pages) => {
//       return _.mapValues(pages, ids => {
//         return (ids as string[])
//           .map(id => selectedEntities[id])
//           .filter(item => Boolean(item))
//       })
//     }
//   )
// }
// interface PagedEntitiesOptions extends EntityPagesOptions {
//   page?: string | number
// }
// export const pagedEntities = (options: PagedEntitiesOptions) => {
//   const { page } = options
//   return createSelector(
//     entityPages(options),
//     pages => {
//       if (page) {
//         return _.get(pages, [page], [])
//       }
//       let allEntities = []
//       _.keys(pages).forEach(p => {
//         allEntities = allEntities.concat(pages[p])
//       })
//       return allEntities
//     }
//   )
// }

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_i18n__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compute_hash__ = __webpack_require__(181);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__compute_hash__["a"]; });
/* harmony export (immutable) */ __webpack_exports__["b"] = notFoundError;
/* harmony export (immutable) */ __webpack_exports__["a"] = notFoundIn;



function notFoundError(itemName) {
    return new __WEBPACK_IMPORTED_MODULE_0__errors__["a" /* default */].NotFoundError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_i18n__["a" /* default */])('errors.api.general.notFound', itemName));
}
function notFoundIn(collectionName) {
    return new __WEBPACK_IMPORTED_MODULE_0__errors__["a" /* default */].NotFoundError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_i18n__["a" /* default */])('errors.api.general.notFoundIn', collectionName));
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony export (immutable) */ __webpack_exports__["a"] = parseUrlencoded;

// todo
function parseUrlencoded(originalObj) {
    if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEmpty(originalObj)) {
        return '';
    }
    let object = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.cloneDeep(originalObj);
    let encodedurl = '';
    for (let prop in object) {
        if (typeof object[prop] === 'object' && object[prop] !== null) {
            object[prop] = object[prop].toString();
        }
        encodedurl = `${encodedurl}${prop}=${encodeURI(object[prop])}&`;
    }
    return encodedurl.substr(0, encodedurl.length - 1);
}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("humps");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("normalizr");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("better-redux-form");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon__ = __webpack_require__(103);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__Icon__["a" /* default */];

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Container__ = __webpack_require__(98);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__Container__["a" /* default */];

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const THEMES = {
    WHITE: 'WHITE',
    NIGHT: 'NIGHT',
    SEPIA: 'SEPIA'
};
/* harmony export (immutable) */ __webpack_exports__["d"] = THEMES;

const MOBILE_BREAK_POINT = 700;
/* harmony export (immutable) */ __webpack_exports__["c"] = MOBILE_BREAK_POINT;

const DEFAULT_PAGE_HEIGHT = 900;
/* harmony export (immutable) */ __webpack_exports__["a"] = DEFAULT_PAGE_HEIGHT;

const DEFAULT_FONT_SIZE = 16;
/* harmony export (immutable) */ __webpack_exports__["b"] = DEFAULT_FONT_SIZE;


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isDescendant;
function isDescendant(parent, child) {
    let node = child.parentNode;
    while (node != null) {
        if (node === parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// action types
const createRequestTypes = base => {
    return ['REQUEST', 'SUCCESS', 'FAILURE'].reduce((acc, type) => {
        acc[type] = `api/${base}/${type}`;
        return acc;
    }, {});
};
/* unused harmony export createRequestTypes */

const componentType = (name, operation) => `components/${name}/${operation}`;
/* harmony export (immutable) */ __webpack_exports__["a"] = componentType;

const triggerType = operation => `saga/${operation}/TRIGGER`;
/* harmony export (immutable) */ __webpack_exports__["b"] = triggerType;

const apiTypes = name => {
    return Object.assign({}, createRequestTypes(name), {
        TRIGGER: triggerType(name)
    });
};
/* harmony export (immutable) */ __webpack_exports__["c"] = apiTypes;

// action creator helpers
const createTriggerAction = (types, options) => {
    const { payload, meta, schema, targetId, request } = options;
    return {
        type: types.TRIGGER,
        payload: Object.assign({
            request
        }, payload),
        meta: Object.assign({
            types,
            targetId,
            schema
        }, meta)
    };
};
/* harmony export (immutable) */ __webpack_exports__["e"] = createTriggerAction;

const createActionEntity = types => {
    return {
        request: (payload, meta) => {
            return {
                type: types.REQUEST,
                payload,
                meta
            };
        },
        success: (payload, meta) => {
            return {
                type: types.SUCCESS,
                payload,
                meta
            };
        },
        failure: (payload, meta) => {
            return {
                type: types.FAILURE,
                payload,
                error: true,
                meta
            };
        }
    };
};
/* harmony export (immutable) */ __webpack_exports__["d"] = createActionEntity;


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(4);


const DOCTYPE = '<!DOCTYPE html>';
/* harmony export (immutable) */ __webpack_exports__["a"] = DOCTYPE;

const AppDoc = props => {
    const { script: bodyScript, link: otherLink, bodyClass, appMarkup, initialState, helmetHeadObject: { title, meta, link: helmetLink, script: headScript }, title: masterTitle } = props;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("html", { lang: "zh-CN" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("head", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge,chrome=1" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1, user-scalable=no" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "description", content: "" }), masterTitle ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", null, masterTitle || title && title.toString()) : title && title.toComponent(), meta && meta.toComponent(), helmetLink && helmetLink.toComponent(), otherLink && otherLink.map((link, index) => {
        let href;
        let rel = 'stylesheet';
        if (typeof link === 'string') {
            href = link;
        } else {
            href = link.href;
            if (link.rel) {
                rel = link.rel;
            }
        }
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { key: index, href: href, rel: rel });
    }), headScript && headScript.toComponent()), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("body", Object.assign({}, bodyClass && { className: bodyClass }), props.children, typeof appMarkup === 'string' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { id: "root", dangerouslySetInnerHTML: { __html: appMarkup || '' } }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { id: "root" }, appMarkup), initialState && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", { dangerouslySetInnerHTML: { __html: `var ${__WEBPACK_IMPORTED_MODULE_1__constants__["b" /* INITIAL_STATE */]} = ${JSON.stringify(initialState || {})};` } }), bodyScript && bodyScript.map((script, index) => {
        if (typeof script === 'string') {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", { key: index, src: script });
        }
        const { src, type, innerHTML } = script;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", { key: index, src: src, type: type || 'text/javascript', dangerouslySetInnerHTML: { __html: innerHTML } });
    })));
};
AppDoc['defaultProps'] = {
    helmetHeadObject: {}
};
/* harmony default export */ __webpack_exports__["b"] = AppDoc;

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Logo__ = __webpack_require__(106);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__Logo__["a" /* default */];

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Fade__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Modal_scss__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Modal_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Modal_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








let Modal = function (_Component) {
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
            __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* default */].unlockScroll();
        }
    }, {
        key: 'setView',
        value: function setView() {
            let modalHeight = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.modal).clientHeight;
            let isModalVerticalCenter = true;
            let documentHeight = document.body.clientHeight;
            if (window.innerHeight < modalHeight) {
                isModalVerticalCenter = false;
            }
            if (window.innerHeight > document.body.clientHeight) {
                documentHeight = window.innerHeight;
            }
            this.setState({
                modalHeight,
                isModalVerticalCenter,
                documentHeight
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {}
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !__WEBPACK_IMPORTED_MODULE_4_lodash___default.a.isEqual(this.state, nextState) || !__WEBPACK_IMPORTED_MODULE_4_lodash___default.a.isEqual(this.props, nextProps);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            // modal show
            if (!prevProps.open && this.props.open === true) {
                this.setView();
                __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* default */].lockScroll();
                window.addEventListener('resize', this.setView);
            }
            // modal hide
            if (prevProps.open === true && this.props.open === false) {
                window.removeEventListener('resize', this.setView);
                __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* default */].unlockScroll();
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
            const { open } = this.props;
            const defaultClass = 'modal';
            const modalId = `modal-${new Date().valueOf()}`;
            let className = this.props.className ? `${defaultClass} ${this.props.className}` : defaultClass;
            let width = this.props.width ? this.props.width : 500;
            let height = this.state.modalHeight;
            let style = {
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
                width,
                marginTop: -height / 2,
                marginLeft: -width / 2,
                position: 'absolute',
                left: '50%',
                top: '50%'
            };
            style.scroll = {
                width,
                margin: '50px auto'
            };
            style.modal = {};
            if (this.state.isModalVerticalCenter) {
                style.modal = Object.assign({}, style.modal, style.verticalCenter);
            } else {
                style.modal = Object.assign({}, style.modal, style.scroll);
            }
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Fade__["a" /* default */], null, open === true && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { onClick: e => {
                    // 使用阻止冒泡会造成问题
                    if (e.target.querySelector(`#${modalId}`)) {
                        this.hideModal();
                    }
                }, className: __WEBPACK_IMPORTED_MODULE_5__Modal_scss___default.a['modal-backdrop'], style: style.backdrop }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { id: modalId, style: style.modal, className: `${__WEBPACK_IMPORTED_MODULE_5__Modal_scss___default.a['modal']} ${className}`, ref: ref => {
                    this.modal = ref;
                } }, this.props.children)));
        }
    }]);

    return Modal;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = Modal;

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modal__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ModalPlus__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ConfirmModal__ = __webpack_require__(108);
/* unused harmony namespace reexport */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ModalPlus__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__ConfirmModal__["a"]; });



/* harmony default export */ __webpack_exports__["c"] = __WEBPACK_IMPORTED_MODULE_0__Modal__["a" /* default */];



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_normalizr__);

const author = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["schema"].Entity('authors', {}, {
    idAttribute: 'id'
});
const book = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["schema"].Entity('books', {
    authors: [author]
}, { idAttribute: 'id' });
const bookContent = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["schema"].Entity('bookContents', {}, {
    idAttribute: 'id'
});
const collection = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["schema"].Entity('bookCollections', {
    items: [book]
}, {
    idAttribute: 'id'
});
const profile = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["schema"].Entity('profiles', {}, {
    idAttribute: 'id'
});
const user = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["schema"].Entity('users', {}, {
    idAttribute: 'id'
});
const doubanBook = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["schema"].Entity('doubanBooks', {}, {
    idAttribute: 'id'
});
const shelfBook = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["schema"].Entity('shelfBooks', {}, {
    idAttribute: 'id'
});
const bookProgress = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["schema"].Entity('bookProgress', {}, {
    idAttribute: 'bookId'
});
const matchedBooks = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["schema"].Entity('books', {}, {
    idAttribute: 'bookId'
});
/* harmony default export */ __webpack_exports__["a"] = {
    BOOK: book,
    BOOK_CONTENT: bookContent,
    BOOK_PROGRESS: bookProgress,
    BOOK_ARRAY: [book],
    DOUBAN_BOOK_SEARCH_RESULTS: { books: [doubanBook] },
    USER_ARRAY: [user],
    MATCHED_BOOK_ARRAY: [matchedBooks],
    COLLECTION: collection,
    COLLECTION_ARRAY: [collection],
    PROFILE: profile,
    AUTHOR: author,
    AUTHOR_ARRAY: [author],
    SHELF_BOOK_ARRAY: [shelfBook]
};

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validator__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i18n__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipeline__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reduce_tasks__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sort_by_date__ = __webpack_require__(210);





/* harmony default export */ __webpack_exports__["a"] = { validator: __WEBPACK_IMPORTED_MODULE_0__validator__["a" /* default */], i18n: __WEBPACK_IMPORTED_MODULE_1__i18n__["a" /* default */], pipeline: __WEBPACK_IMPORTED_MODULE_2__pipeline__["a" /* default */], reduceTasks: __WEBPACK_IMPORTED_MODULE_3__reduce_tasks__["a" /* default */], sortByDate: __WEBPACK_IMPORTED_MODULE_4__sort_by_date__["a" /* default */] };

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".nav-link_cjTwO {\n  color: #fff; }\n  .nav-link_cjTwO:hover {\n    color: #ddd; }\n\n.branding_1IEww {\n  min-height: 60px;\n  background: #222; }\n\n.dropdown-menu_21i1D {\n  position: absolute;\n  top: 60px;\n  right: 0;\n  z-index: 999; }\n\n.username_kfL62,\n.nav-links_ujJ6c {\n  line-height: 60px; }\n\n.nav_UkZSx, .nav--user_zzwPX {\n  position: relative;\n  color: #fff;\n  cursor: pointer;\n  padding: 0 10px;\n  line-height: 60px;\n  display: inline-block; }\n\n.dropdown-recent-reading_3q8TW {\n  margin-right: 15px; }\n\n.nav--user_zzwPX {\n  float: right; }\n\n.nav-link_cjTwO {\n  padding: 0 5px; }\n\n.nav-item_2DQyO {\n  display: inline-block; }\n\n.recent-reading_2gBvL {\n  margin-right: 15px; }\n", ""]);

// exports
exports.locals = {
	"nav-link": "nav-link_cjTwO",
	"branding": "branding_1IEww",
	"dropdown-menu": "dropdown-menu_21i1D",
	"username": "username_kfL62",
	"nav-links": "nav-links_ujJ6c",
	"nav": "nav_UkZSx",
	"nav--user": "nav--user_zzwPX",
	"dropdown-recent-reading": "dropdown-recent-reading_3q8TW",
	"nav-item": "nav-item_2DQyO",
	"recent-reading": "recent-reading_2gBvL"
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(227);
    var insertCss = __webpack_require__(3);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Dropdown.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Dropdown.scss");

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


    var content = __webpack_require__(232);
    var insertCss = __webpack_require__(3);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Modal.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Modal.scss");

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

module.exports = require("react-dom/server");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("url-join");

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_redux_form__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_better_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewer__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_actionTypes__ = __webpack_require__(8);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "api", function() { return __WEBPACK_IMPORTED_MODULE_1__api__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "viewer", function() { return __WEBPACK_IMPORTED_MODULE_2__viewer__; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_better_redux_form__, "actions")) __webpack_require__.d(__webpack_exports__, "form", function() { return __WEBPACK_IMPORTED_MODULE_0_better_redux_form__["actions"]; });
/* harmony export (immutable) */ __webpack_exports__["showNotification"] = showNotification;
/* harmony export (immutable) */ __webpack_exports__["hideNotification"] = hideNotification;
/* harmony export (immutable) */ __webpack_exports__["openConfirmModal"] = openConfirmModal;
/* harmony export (immutable) */ __webpack_exports__["closeConfirmModal"] = closeConfirmModal;
/* harmony export (immutable) */ __webpack_exports__["openModal"] = openModal;
/* harmony export (immutable) */ __webpack_exports__["closeModal"] = closeModal;




const sendNotification = (message, msgType = 'success', t = 2000) => {
    return (dispatch, getState) => {
        const id = Math.random().toFixed(8).substr(2);
        dispatch(showNotification(id, message, msgType));
        if (t !== 0) {
            setTimeout(() => {
                dispatch(hideNotification(id));
            }, t);
        }
    };
};
/* harmony export (immutable) */ __webpack_exports__["sendNotification"] = sendNotification;

function showNotification(id, message, msgType = 'success') {
    return {
        type: __WEBPACK_IMPORTED_MODULE_3__constants_actionTypes__["c" /* NOTIFICATION */].SHOW,
        message,
        msgType,
        id
    };
}
function hideNotification(id) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_3__constants_actionTypes__["c" /* NOTIFICATION */].HIDE,
        id
    };
}
function openConfirmModal(data) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_3__constants_actionTypes__["d" /* OPEN_CONFIRM_MODAL */],
        data
    };
}
function closeConfirmModal() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_3__constants_actionTypes__["e" /* CLOSE_CONFIRM_MODAL */]
    };
}
function openModal(data) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_3__constants_actionTypes__["f" /* MODAL */].OPEN,
        data
    };
}
function closeModal() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_3__constants_actionTypes__["f" /* MODAL */].CLOSE
    };
}
const initializeForm = __WEBPACK_IMPORTED_MODULE_0_better_redux_form__["actions"].initialize;
/* harmony export (immutable) */ __webpack_exports__["initializeForm"] = initializeForm;

const resetForm = __WEBPACK_IMPORTED_MODULE_0_better_redux_form__["actions"].reset;
/* harmony export (immutable) */ __webpack_exports__["resetForm"] = resetForm;



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BodyClass__ = __webpack_require__(87);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





let DocContainer = function (_Component) {
    _inherits(DocContainer, _Component);

    function DocContainer() {
        _classCallCheck(this, DocContainer);

        return _possibleConstructorReturn(this, (DocContainer.__proto__ || Object.getPrototypeOf(DocContainer)).apply(this, arguments));
    }

    _createClass(DocContainer, [{
        key: 'render',
        value: function render() {
            const { bodyClass, title, head } = this.props;
            const helmetProps = Object.assign({}, head, {
                title
            });
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: 'gb-doc-container' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, Object.assign({}, helmetProps)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__BodyClass__["a" /* default */], { className: bodyClass }, this.props.children));
        }
    }]);

    return DocContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

DocContainer.rewind = () => {
    const bodyClass = __WEBPACK_IMPORTED_MODULE_2__BodyClass__["a" /* default */].rewind();
    const head = __WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a.rewind();
    return {
        head,
        bodyClass
    };
};
/* harmony default export */ __webpack_exports__["a"] = DocContainer;

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Container__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Container__["a"]; });



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const styles = __webpack_require__(64);
let Alert = function (_Component) {
    _inherits(Alert, _Component);

    function Alert() {
        _classCallCheck(this, Alert);

        return _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).apply(this, arguments));
    }

    _createClass(Alert, [{
        key: "render",
        value: function render() {
            const type = this.props.type ? this.props.type : 'success';
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, this.props.visible && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: `alert--${type}` }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "alert-close" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], { onClick: this.props.onRequestClose, name: "close", size: 15 })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "content" }, this.props.message)));
        }
    }]);

    return Alert;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
Alert = __decorate([__WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(styles, {
    allowMultiple: true
})], Alert);
/* harmony default export */ __webpack_exports__["a"] = Alert;

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dropdown__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DropdownItem__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DropdownItemSep__ = __webpack_require__(101);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__DropdownItem__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Dropdown__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__DropdownItemSep__["a"]; });




/* unused harmony default export */ var _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_0__Dropdown__["a" /* default */];

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);




// type TProps = {
//   store: any
//   renderProps: any
//   renderPageContent?: boolean
// }
const ServerSideAppRoot = props => {
    const { store, renderProps, renderPageContent } = props;
    return !__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isEmpty(renderProps) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_redux__["Provider"], { store: store }, renderPageContent ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["RouterContext"], Object.assign({}, renderProps)) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "text-loading" }, "Loading..."));
};
/* harmony default export */ __webpack_exports__["a"] = ServerSideAppRoot;

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getEnv__ = __webpack_require__(118);
/* harmony export (immutable) */ __webpack_exports__["a"] = getApiRoot;

const env = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getEnv__["a" /* default */])();
function getApiRoot() {
    const { PORT } = env;
    if (process.env.NODE_ENV === 'production') {
        // todo: domain
        return `/api`;
    }
    return `http://localhost:${PORT}/api`;
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isServerEnv;
function isServerEnv() {
    return typeof window === 'undefined';
}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["a"] = isServerRoutingEnabled;

function isServerRoutingEnabled() {
    return Boolean(window[__WEBPACK_IMPORTED_MODULE_0__constants__["f" /* ENABLE_SERVER_ROUTING */]]);
}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_model__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_schemas__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (immutable) */ __webpack_exports__["a"] = readFile;
/* harmony export (immutable) */ __webpack_exports__["b"] = delFile;



const fileModel = new __WEBPACK_IMPORTED_MODULE_0__models_model__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__data_schemas__["g" /* file */]);
function readFile(fileId, parser) {
    return fileModel.findOne(fileId).then(fileResult => {
        if (parser && typeof parser === 'function') {
            const binaryFile = fileResult.content.buffer;
            return parser(binaryFile).then(content => {
                return __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.assign({}, fileResult, {
                    content
                });
            });
        }
        return fileResult;
    });
}
// TODO
function delFile(fileId) {
    return fileModel.findOne(fileId).then(resultFile => {
        return fileModel.remove(fileId);
    }, error => {
        if (error.type === 'NotFoundError') {
            return {
                message: 'File record not found, probably because it doesn\'t exist, or hasn\'t been created in the first place!'
            };
        }
        return Promise.reject(error);
    });
}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parse_context__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__require_permissions_of__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__handle_error__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__handle_json_response__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__log_file__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__prepare_api__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__handle_api_not_found__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__set_header__ = __webpack_require__(199);









/* harmony default export */ __webpack_exports__["a"] = {
    parseContext: __WEBPACK_IMPORTED_MODULE_0__parse_context__["a" /* default */],
    auth: __WEBPACK_IMPORTED_MODULE_1__auth__["a" /* default */],
    requirePermissionsOf: __WEBPACK_IMPORTED_MODULE_2__require_permissions_of__["a" /* default */],
    handleError: __WEBPACK_IMPORTED_MODULE_3__handle_error__["a" /* default */],
    handleJSONResponse: __WEBPACK_IMPORTED_MODULE_4__handle_json_response__["a" /* default */],
    logFile: __WEBPACK_IMPORTED_MODULE_5__log_file__["a" /* default */],
    prepareApi: __WEBPACK_IMPORTED_MODULE_6__prepare_api__["a" /* default */],
    handleApiNotFound: __WEBPACK_IMPORTED_MODULE_7__handle_api_not_found__["a" /* default */],
    setHeader: __WEBPACK_IMPORTED_MODULE_8__set_header__["a" /* default */]
};

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony export (immutable) */ __webpack_exports__["a"] = outputEmptyEntity;

function outputEmptyEntity(fields, idObjOrIdString = {}) {
    // id 可以为对象，此时会直接被扩展到输出结果里面
    let idObj = idObjOrIdString;
    if (typeof idObjOrIdString === 'string') {
        idObj = { _id: idObjOrIdString };
    }
    const entity = {};
    fields.forEach(field => {
        // todo
        // 添加类型判断
        entity[field.name] = '';
    });
    return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.assign({}, entity, idObj);
}

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = paginate;
const defaultOptions = {
    page: 1,
    limit: 10,
    // todo: remove
    order: 'new'
};
function paginate(results, options) {
    let { page, limit, order } = Object.assign({}, defaultOptions, options);
    // query 里面传过来的都是 string
    page = parseInt(page, 10);
    // 如果 page 小于 0 则当做 1 来处理，大于最大页面则不管
    // 此逻辑参照 GitHub api
    page = page <= 0 ? 1 : page;
    limit = parseInt(limit, 10);
    // if (order === 'new') {
    //   results.reverse()
    // }
    const startIndex = (page - 1) * limit;
    return {
        entities: results.slice(startIndex, limit + startIndex),
        _pagination: {
            current: page,
            all: Math.ceil(results.length / limit) || 1
        }
    };
}

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const colors = __webpack_require__(256);
const print = {
    info(message) {
        console.info('\n' + colors.bgGreen.bold.white(' INFO '), colors.green(message));
    },
    test(message) {
        console.info('\n' + colors.bgCyan.bold.black(' INFO '), typeof message !== 'object' ? colors.cyan(message) : message);
    },
    warn(message) {
        console.error('\n' + colors.bgYellow.bold.black(' WARNING '), typeof message !== 'object' ? colors.yellow(message) : message);
    },
    error(message) {
        console.error('\n' + colors.bgRed.bold.white(' ERROR '), typeof message !== 'object' ? colors.red(message) : message);
    }
};
/* harmony default export */ __webpack_exports__["a"] = print;

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const validator = __webpack_require__(273);
const additionalValidators = {
    lengthMin(len) {
        return input => {
            return input.length >= len;
        };
    },
    lengthMax(len) {
        return input => {
            return input.length <= len;
        };
    }
};
/* harmony default export */ __webpack_exports__["a"] = Object.assign({}, validator, additionalValidators);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_parseUrlencoded__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonp__ = __webpack_require__(60);
/* unused harmony export callApi */



const createCookieString = cookies => Object.keys(cookies).reduce((previous, key) => `${previous}${key}=${cookies[key]}; `, '');
const defaultOptions = {
    dataType: 'json',
    method: 'GET',
    credentials: 'same-origin'
};
// return fetch options
const parseOptions = originanOptions => {
    let { method, data, credentials, dataType, useJsonp, cookies } = Object.assign({}, defaultOptions, originanOptions);
    let fetchOptions = {};
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
        let contentType;
        let body;
        if (dataType === 'json') {
            contentType = 'application/json';
            body = JSON.stringify(data);
        } else {
            contentType = 'application/x-www-form-urlencoded';
            body = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_parseUrlencoded__["a" /* default */])(data);
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
    if (cookies) {
        fetchOptions.headers = {
            'Cookie': createCookieString(cookies)
        };
    }
    return fetchOptions;
};
// type Result = {
//   json: any
//   _response: any
// }
function callApi(fullUrl, options = {}) {
    if (options.useJsonp) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__jsonp__["a" /* default */])(fullUrl);
    }
    const fetchOptions = parseOptions(options);
    return fetch(fullUrl, fetchOptions).then(response => {
        if (response.status !== 204) {
            return response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return { json, _response: response };
            });
        }
        return { json: {}, _response: response };
    });
}
/* harmony default export */ __webpack_exports__["a"] = callApi;

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_normalizr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_parseQuery__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_humps__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_humps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_humps__);
/* harmony export (immutable) */ __webpack_exports__["a"] = parseResHeaderToPagination;




const parseHeaderPageLinkByRel = (links, rel) => {
    const link = links.split(',').find(s => s.indexOf(`rel="${rel}"`) > -1);
    if (!link) {
        return undefined;
    }
    const url = link.split(';')[0].trim().slice(1, -1);
    return {
        // todo
        page: parseInt(__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_parseQuery__["a" /* default */])(url.split('?')[1] || ''), 'page', 0), 10),
        url
    };
};
function parseResHeaderToPagination(response) {
    if (!response) {
        return {};
    }
    const links = response.headers.get('link');
    if (!links) {
        return {};
    }
    const next = parseHeaderPageLinkByRel(links, 'next');
    const last = parseHeaderPageLinkByRel(links, 'last');
    return {
        next,
        last
    };
}
function handleResponse({ json, _response }, schema) {
    const camelizedJson = __WEBPACK_IMPORTED_MODULE_3_humps___default.a.camelizeKeys(json);
    const { next, last } = parseResHeaderToPagination(_response);
    if (typeof schema !== 'undefined') {
        return __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_normalizr__["normalize"])(camelizedJson, schema), {
            _next: next,
            _last: last
        });
    }
    return camelizedJson;
}
/* harmony default export */ __webpack_exports__["b"] = handleResponse;

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = jsonp;
function jsonp(fullUrl) {
    if (fullUrl.indexOf('douban') !== -1) {
        let id = new Date().valueOf();
        let jsonpId = 'jsonp-' + id;
        let jsonpCallback = 'jsonpCallback' + id;
        let jsonpCallbackData = `__JSONP_DATA_${id}__`;
        window[jsonpCallback] = function (data) {
            window[jsonpCallbackData] = data;
        };
        let script = document.createElement('script');
        script.setAttribute('src', `${fullUrl}&callback=${jsonpCallback}`);
        script.setAttribute('id', jsonpId);
        document.body.appendChild(script);
        return new Promise(resolve => {
            script.onload = function () {
                document.body.removeChild(document.getElementById(jsonpId));
                resolve({ json: window[jsonpCallbackData] });
            };
        });
    }
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_humps__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_humps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_humps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_normalizr__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_normalizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_normalizr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);



const normalizeJSON = (json, schema) => {
    const camelizedJson = __WEBPACK_IMPORTED_MODULE_0_humps___default.a.camelizeKeys(json);
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_normalizr__["normalize"])(camelizedJson, schema);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeJSON;

const expandEntities = (normalizedEntities, fetchStatus, error) => {
    return __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.mapValues(normalizedEntities || {}, val => {
        return {
            entities: val,
            errors: error ? __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.mapValues(val, () => error) : undefined,
            fetchStatus: __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.mapValues(val, () => fetchStatus)
        };
    });
};
/* harmony export (immutable) */ __webpack_exports__["b"] = expandEntities;

const mockEntity = (key, id) => {
    return {
        [key]: {
            [id]: {}
        }
    };
};
/* harmony export (immutable) */ __webpack_exports__["c"] = mockEntity;


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = padNumberWithZero;
function padNumberWithZero(num) {
    let numStrWithZero;
    if (num < 10) {
        numStrWithZero = '0' + num.toString();
    } else {
        numStrWithZero = num.toString();
    }
    return numStrWithZero;
}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseQuery;
function parseQuery(queryString) {
    const params = queryString.split('&');
    let object = {};
    params.forEach(param => {
        const key = param.split('=')[0];
        const val = param.split('=')[1];
        object[key] = val;
    });
    return object;
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(221);
    var insertCss = __webpack_require__(3);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Alert.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Alert.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__initialize__ = __webpack_require__(184);

/* harmony default export */ __webpack_exports__["default"] = __WEBPACK_IMPORTED_MODULE_0__initialize__["a" /* default */];

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Input__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SelectizeInput__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Textarea__ = __webpack_require__(114);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__Button__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Input__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__SelectizeInput__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__Textarea__["a"]; });






/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apifns__ = __webpack_require__(220);

/* harmony default export */ __webpack_exports__["a"] = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__apifns__);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__ = __webpack_require__(8);

// viewer
const initializeViewer = bookId => ({
    payload: bookId,
    type: __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["b" /* VIEWER */].INITIALIZE
});
/* harmony export (immutable) */ __webpack_exports__["initializeViewer"] = initializeViewer;

const configViewer = (config = {}, isInit = false) => ({
    payload: config,
    meta: { isInit },
    type: __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["b" /* VIEWER */].CONFIG
});
/* harmony export (immutable) */ __webpack_exports__["configViewer"] = configViewer;

const setStatus = (status = {}) => ({
    payload: status,
    type: __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["b" /* VIEWER */].SET_STATUS
});
/* harmony export (immutable) */ __webpack_exports__["setStatus"] = setStatus;

const viewerGoTo = loc => ({ type: __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["b" /* VIEWER */].GO_TO, payload: loc });
/* harmony export (immutable) */ __webpack_exports__["viewerGoTo"] = viewerGoTo;

// book
const calcBook = (bookId, wrap) => ({
    payload: { bookId, wrap },
    type: __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["b" /* VIEWER */].CALC_TRIGGER
});
/* harmony export (immutable) */ __webpack_exports__["calcBook"] = calcBook;

const calcBookSuccess = (bookId, computed) => ({
    payload: { bookId, computed },
    type: __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["b" /* VIEWER */].CALC_SUCCESS
});
/* harmony export (immutable) */ __webpack_exports__["calcBookSuccess"] = calcBookSuccess;

const calcBookFailure = (bookId, error) => ({
    payload: error,
    meta: { bookId },
    error: true,
    type: __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["b" /* VIEWER */].CALC_FAILURE
});
/* harmony export (immutable) */ __webpack_exports__["calcBookFailure"] = calcBookFailure;

const updateLocalProgress = (bookId, progress) => ({
    payload: { progress, bookId },
    type: __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["b" /* VIEWER */].UPDATE_LOCAL_PROGRESS
});
/* harmony export (immutable) */ __webpack_exports__["updateLocalProgress"] = updateLocalProgress;

// sub components
const toggleViewerPanel = reset => ({ type: __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["b" /* VIEWER */].PANEL_TOGGLE, payload: reset });
/* harmony export (immutable) */ __webpack_exports__["toggleViewerPanel"] = toggleViewerPanel;

const toggleViewerPreference = reset => ({ type: __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["b" /* VIEWER */].PREFERENCE_TOGGLE, payload: reset });
/* harmony export (immutable) */ __webpack_exports__["toggleViewerPreference"] = toggleViewerPreference;

const toggleViewerNavigation = reset => ({ type: __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["b" /* VIEWER */].NAVIGATION_TOGGLE, payload: reset });
/* harmony export (immutable) */ __webpack_exports__["toggleViewerNavigation"] = toggleViewerNavigation;

const toggleViewerProgressInfo = reset => ({ type: __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["b" /* VIEWER */].PROGRESS_INFO_TOGGLE, payload: reset });
/* harmony export (immutable) */ __webpack_exports__["toggleViewerProgressInfo"] = toggleViewerProgressInfo;

// master action of sub components
const setComponents = state => ({ type: __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["b" /* VIEWER */].SET_COMPONENT, payload: state });
/* harmony export (immutable) */ __webpack_exports__["setComponents"] = setComponents;

const destroy = (clearData = false) => ({ type: __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["b" /* VIEWER */].DESTROY, payload: clearData });
/* harmony export (immutable) */ __webpack_exports__["destroy"] = destroy;


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form__ = __webpack_require__(71);


const styles = __webpack_require__(249);
function ModalFooter(props) {
    const { onConfirm, onCancel } = props;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: styles['modal-footer'] }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__form__["d" /* Button */], { color: "blue", onClick: onConfirm }, "\u786E\u8BA4"), onCancel && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__form__["d" /* Button */], { color: "white", onClick: onCancel }, "\u53D6\u6D88"));
}
/* harmony default export */ __webpack_exports__["a"] = ModalFooter;

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AppError__ = __webpack_require__(86);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__AppError__["a" /* default */];

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button__ = __webpack_require__(90);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__Button__["a" /* default */];

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Fade__ = __webpack_require__(102);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__Fade__["a" /* default */];

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Input__ = __webpack_require__(105);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__Input__["a" /* default */];

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_viewerDefs__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(19);


const shouldViewerBeFluid = () => {
    const viewerWidth = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* default */].getScreenInfo().width;
    return viewerWidth < __WEBPACK_IMPORTED_MODULE_0__constants_viewerDefs__["c" /* MOBILE_BREAK_POINT */];
};
/* harmony default export */ __webpack_exports__["a"] = shouldViewerBeFluid;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(236);
    var insertCss = __webpack_require__(3);

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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/sass-loader/index.js!./BookPage.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/sass-loader/index.js!./BookPage.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = {
	"app.css": "css/app.7002a377c7.css",
	"app.js": "js/app.7002a377c7.js",
	"base.global.css": "css/base.global.30e3ea3a4f.css",
	"base.global.js": "js/base.global.30e3ea3a4f.js",
	"js/chunk.1a06dd34df.6.js": "js/chunk.1a06dd34df.6.js",
	"js/chunk.346f7af121.8.js": "js/chunk.346f7af121.8.js",
	"js/chunk.3764ef8db7.5.js": "js/chunk.3764ef8db7.5.js",
	"js/chunk.55e0e494b2.13.js": "js/chunk.55e0e494b2.13.js",
	"js/chunk.5bae710e25.9.js": "js/chunk.5bae710e25.9.js",
	"js/chunk.6786fa7138.7.js": "js/chunk.6786fa7138.7.js",
	"js/chunk.691c0c1af5.14.js": "js/chunk.691c0c1af5.14.js",
	"js/chunk.6b9c26a2cf.1.js": "js/chunk.6b9c26a2cf.1.js",
	"js/chunk.790bb87b19.10.js": "js/chunk.790bb87b19.10.js",
	"js/chunk.7ac75b30e5.3.js": "js/chunk.7ac75b30e5.3.js",
	"js/chunk.7eba95049e.2.js": "js/chunk.7eba95049e.2.js",
	"js/chunk.87d3585187.0.js": "js/chunk.87d3585187.0.js",
	"js/chunk.8f0f1d7e89.11.js": "js/chunk.8f0f1d7e89.11.js",
	"js/chunk.a44fedd109.4.js": "js/chunk.a44fedd109.4.js",
	"js/chunk.bf298f4bd6.16.js": "js/chunk.bf298f4bd6.16.js",
	"js/chunk.da3dce6a51.12.js": "js/chunk.da3dce6a51.12.js",
	"js/chunk.e1d89bfdf1.15.js": "js/chunk.e1d89bfdf1.15.js",
	"media/loading.gif": "media/loading.4275970884.gif",
	"media/logo-dark.png": "media/logo-dark.4754e8aa78.png",
	"media/logo.png": "media/logo.81eb83d7f7.png",
	"media/shadow.png": "media/shadow.471ea37f96.png",
	"modifiers.global.css": "css/modifiers.global.041f7efae2.css",
	"modifiers.global.js": "js/modifiers.global.041f7efae2.js",
	"vendor.global.css": "css/vendor.global.cab0d0e8a2.css",
	"vendor.global.js": "js/vendor.global.cab0d0e8a2.js",
	"vendor.js": "js/vendor.ab6a38b0ee.js"
};

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Alert__ = __webpack_require__(46);


const styles = __webpack_require__(64);
function Alerts(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: styles.alerts }, props.messages.map((msg, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Alert__["a" /* default */], { key: index, type: msg.type, message: msg.content, visible: msg.visible, onRequestClose: () => {
            props.onRequestClose(msg.id);
        } })));
}
/* harmony default export */ __webpack_exports__["a"] = Alerts;

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Alert__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Alerts__ = __webpack_require__(83);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Alerts__["a"]; });
/* unused harmony reexport Alert */



/* unused harmony default export */ var _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_0__Alert__["a" /* default */];

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Branding__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Colophon__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selectors__ = __webpack_require__(12);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









let App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.session.role !== 'visitor') {
                this.props.loadShelf();
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            const userLoggedIn = this.props.session.role === 'visitor' && nextProps.session.role !== 'visitor';
            if (userLoggedIn) {
                this.props.loadShelf();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            let isAdmin = false;
            let username = null;
            const { session } = this.props;
            if (session.role !== 'visitor') {
                isAdmin = session.role === 'admin';
                username = session.username;
            }
            const { bookShelf } = this.props;
            const bookShelfList = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.get(bookShelf, ['pages', '1'], []).map(book => ({
                title: book.title,
                id: book.id
            }));
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Branding__["a" /* default */], { recentReading: bookShelfList, isAdmin: isAdmin, username: username }), this.props.children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Colophon__["a" /* default */], null));
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(state => ({
    notification: state.components.notification,
    bookShelf: __WEBPACK_IMPORTED_MODULE_6__selectors__["d" /* pagination */].shelf(state),
    session: __WEBPACK_IMPORTED_MODULE_6__selectors__["a" /* session */](state)
}), { loadShelf: __WEBPACK_IMPORTED_MODULE_4__actions_api__["loadShelf"] })(App);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Logo__ = __webpack_require__(32);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const styles = __webpack_require__(239);
let AppError = function (_Component) {
    _inherits(AppError, _Component);

    function AppError() {
        _classCallCheck(this, AppError);

        return _possibleConstructorReturn(this, (AppError.__proto__ || Object.getPrototypeOf(AppError)).apply(this, arguments));
    }

    _createClass(AppError, [{
        key: "render",
        value: function render() {
            const { title, message } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "header" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Logo__["a" /* default */], { dark: true })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "body" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", { styleName: "title" }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, message)));
        }
    }]);

    return AppError;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
AppError = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules___default()(styles)], AppError);
/* harmony default export */ __webpack_exports__["a"] = AppError;

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_side_effect__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_side_effect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_side_effect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let BodyClass = function (_Component) {
    _inherits(BodyClass, _Component);

    function BodyClass() {
        _classCallCheck(this, BodyClass);

        return _possibleConstructorReturn(this, (BodyClass.__proto__ || Object.getPrototypeOf(BodyClass)).apply(this, arguments));
    }

    _createClass(BodyClass, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "body-class" }, this.props.children);
        }
    }]);

    return BodyClass;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
BodyClass = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_side_effect___default()(reducePropsToState, handleStateChangeOnClient)], BodyClass);
function reducePropsToState(propsList) {
    const innermostProps = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.last(propsList);
    if (innermostProps) {
        const props = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.pick(innermostProps, ['className']);
        const className = props.className = propsList.filter(prop => prop.className).map(prop => prop.className).join(' ');
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
/* harmony default export */ __webpack_exports__["a"] = BodyClass;

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Dropdown__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Logo__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Branding_scss__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Branding_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Branding_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__selectors__ = __webpack_require__(12);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










const mapStateToProps = (state, ownProps) => {
    return {
        config: __WEBPACK_IMPORTED_MODULE_9__selectors__["c" /* viewer */].config(state)
    };
};
let Branding = function (_Component) {
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
            this.props.logout();
            e.preventDefault();
        }
    }, {
        key: "render",
        value: function render() {
            let isAdmin = this.props.isAdmin ? this.props.isAdmin : false;
            const { username, recentReading, config: { fluid } } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: `branding ${this.props.className ? this.props.className : ''}` }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_layout__["a" /* Container */], { className: "clearfix" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "left" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Logo__["a" /* default */], null)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "left", styleName: "nav" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", { styleName: "nav-links" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { styleName: "nav-item" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_router__["Link"], { styleName: "nav-link", to: "/browse" }, "\u6D4F\u89C8")))), username ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "nav--user" }, recentReading.length !== 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Dropdown__["a" /* Dropdown */], { className: "dropdown-recent-reading", styleName: "dropdown-recent-reading", title: "最近阅读" }, recentReading.slice(0, 5).map((book, index) => {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Dropdown__["b" /* DropdownItem */], { key: index }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_router__["Link"], { to: `/viewer/book/${book.id}` }, book.title));
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Dropdown__["c" /* DropdownItemSep */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Dropdown__["b" /* DropdownItem */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_router__["Link"], { to: `/user/shelf` }, "\u67E5\u770B\u5168\u90E8"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Dropdown__["a" /* Dropdown */], { title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { style: { display: 'inline-block' } }, username, isAdmin && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "badge" }, "\u7BA1\u7406\u5458")) }, isAdmin === true && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Dropdown__["b" /* DropdownItem */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_router__["Link"], { to: "/console" }, "\u63A7\u5236\u53F0")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Dropdown__["b" /* DropdownItem */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_router__["Link"], { to: `/user/shelf` }, "\u4E66\u67B6")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Dropdown__["b" /* DropdownItem */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_router__["Link"], { to: `/user/profile` }, "\u4E2A\u4EBA\u4E3B\u9875")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Dropdown__["b" /* DropdownItem */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_router__["Link"], { to: `/user/preference` }, "\u8BBE\u7F6E")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Dropdown__["c" /* DropdownItemSep */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Dropdown__["b" /* DropdownItem */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", { onClick: this.handleLogoutClick, href: "#" }, "\u9000\u51FA")))) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "nav--user" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", { styleName: "nav-links" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { styleName: "nav-item" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_router__["Link"], { styleName: "nav-link", to: "/signin" }, "\u767B\u5F55")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { styleName: "nav-item" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_router__["Link"], { styleName: "nav-link", to: "/signup" }, "\u6CE8\u518C")))))));
        }
    }]);

    return Branding;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
Branding = __decorate([__WEBPACK_IMPORTED_MODULE_4_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_6__Branding_scss___default.a)], Branding);
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react_redux__["connect"])(mapStateToProps, { logout: __WEBPACK_IMPORTED_MODULE_8__actions_api__["logout"] })(Branding);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Branding__ = __webpack_require__(88);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__Branding__["a" /* default */];

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers__ = __webpack_require__(15);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const styles = __webpack_require__(241);
let Button = function (_Component) {
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
            let { onClick, className, color, size, isFluid, width, to } = this.props;
            let style = {};
            const styleName = __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
                'btn': true,
                'btn--hover': this.state.isMouseOver,
                'btn--fluid': isFluid,
                [`btn--${color}`]: Boolean(color),
                [`btn--${size}`]: Boolean(size)
            });
            if (this.props.to) {
                onClick = e => {
                    e.preventDefault();
                    __WEBPACK_IMPORTED_MODULE_4__helpers__["a" /* default */].redirect(to);
                };
            } else {
                onClick = e => {
                    e.preventDefault();
                    if (this.props.onClick) {
                        this.props.onClick(e);
                    }
                };
            }
            if (typeof width !== 'undefined') {
                style = {
                    width
                };
            }
            let props = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.omit(this.props, ['to', 'color', 'size', 'isFluid', 'width', 'styles']);
            props = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.assign({}, props, {
                className: className || '',
                onClick,
                style
            });
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", Object.assign({}, props, { styleName: styleName, onMouseOver: () => {
                    this.setState({
                        isMouseOver: true
                    });
                }, onMouseOut: () => {
                    this.setState({
                        isMouseOver: false
                    });
                } }), this.props.children);
        }
    }]);

    return Button;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
Button = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules___default()(styles, {
    allowMultiple: true
})], Button);
Button.defaultProps = {
    color: 'blue'
};
/* harmony default export */ __webpack_exports__["a"] = Button;

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Container__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const styles = __webpack_require__(242);
let Colophon = function (_Component) {
    _inherits(Colophon, _Component);

    function Colophon() {
        _classCallCheck(this, Colophon);

        return _possibleConstructorReturn(this, (Colophon.__proto__ || Object.getPrototypeOf(Colophon)).apply(this, arguments));
    }

    _createClass(Colophon, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "colophon", styleName: "colophon" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Container__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "\u00A9 2015\uFF0D2016 readrweb.com, all rights reserved")));
        }
    }]);

    return Colophon;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
Colophon = __decorate([__WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(styles, {
    allowMultiple: true
})], Colophon);
/* harmony default export */ __webpack_exports__["a"] = Colophon;

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Colophon__ = __webpack_require__(91);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__Colophon__["a" /* default */];

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ConsoleBranding__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ConsoleSidebar__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__content_menus__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_DocContainer__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__selectors__ = __webpack_require__(12);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












let Console = function (_Component) {
    _inherits(Console, _Component);

    function Console(props) {
        _classCallCheck(this, Console);

        var _this = _possibleConstructorReturn(this, (Console.__proto__ || Object.getPrototypeOf(Console)).call(this, props));

        _this.handleLogout = _this.handleLogout.bind(_this);
        return _this;
    }

    _createClass(Console, [{
        key: 'redirectIfNotAdmin',
        value: function redirectIfNotAdmin(props = this.props) {
            if (props.session.role !== 'admin') {
                __WEBPACK_IMPORTED_MODULE_8__helpers__["a" /* default */].redirect('/');
            }
        }
    }, {
        key: 'handleLogout',
        value: function handleLogout() {
            this.props.logout();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            const userRoleChanged = this.props.session.role !== nextProps.session.role;
            if (userRoleChanged) {
                this.redirectIfNotAdmin(nextProps);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            let isAdmin = this.props.session.role === 'admin';
            let username = this.props.session.username;
            let pathname = this.props.routing.locationBeforeTransitions ? this.props.routing.locationBeforeTransitions.pathname : 'console';
            const contentStyle = {
                marginLeft: 320,
                paddingTop: 60
            };
            return isAdmin ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_DocContainer__["a" /* default */], { bodyClass: "console" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_ConsoleBranding__["a" /* default */], { isAdmin: isAdmin, username: username, onLogout: this.handleLogout }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_layout__["a" /* Container */], { isFluid: true }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_ConsoleSidebar__["a" /* default */], { menuMapping: __WEBPACK_IMPORTED_MODULE_6__content_menus__["a" /* default */], currentPath: pathname }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { style: contentStyle }, this.props.children))) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { style: { textAlign: 'center', margin: '20px 0' } }, "ACCESS DENIED!");
        }
    }]);

    return Console;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(state => ({
    notifications: state.components.notifications,
    session: __WEBPACK_IMPORTED_MODULE_9__selectors__["a" /* session */](state),
    routing: state.routing
}), { logout: __WEBPACK_IMPORTED_MODULE_4__actions_api__["logout"] })(Console);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Container__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Dropdown__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Logo__ = __webpack_require__(32);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const styles = __webpack_require__(243);
let ConsoleBranding = function (_Component) {
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
            let username = this.props.username;
            let isAdmin = this.props.isAdmin ? this.props.isAdmin : 'false';
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "branding" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Container__["a" /* default */], { isFluid: true, className: "clearfix" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "left" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Logo__["a" /* default */], { to: "/console" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "sub-name" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { styleName: "sub" }, "\u63A7\u5236\u53F0")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "nav right" }, username && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Dropdown__["a" /* Dropdown */], { style: "dark", title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, username, isAdmin && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "badge badge--dark" }, "\u7BA1\u7406\u5458")) }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Dropdown__["b" /* DropdownItem */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/" }, "\u56DE\u5230 Readr")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Dropdown__["b" /* DropdownItem */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: `/user/profile` }, "\u4E2A\u4EBA\u4E3B\u9875")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Dropdown__["b" /* DropdownItem */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: `/user/preference` }, "\u8BBE\u7F6E")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Dropdown__["c" /* DropdownItemSep */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Dropdown__["b" /* DropdownItem */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", { onClick: this.handleLogoutClick, href: "#" }, "\u9000\u51FA")))))));
        }
    }]);

    return ConsoleBranding;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
ConsoleBranding = __decorate([__WEBPACK_IMPORTED_MODULE_4_react_css_modules___default()(styles, {
    allowMultiple: true
})], ConsoleBranding);
/* harmony default export */ __webpack_exports__["a"] = ConsoleBranding;

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConsoleBranding__ = __webpack_require__(94);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__ConsoleBranding__["a" /* default */];

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Icon__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_css_modules__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const styles = __webpack_require__(244);
let ConsoleSidebar = function (_Component) {
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
            const { menuMapping, currentPath } = this.props;
            let currentMenu = {
                rootIndex: 0,
                subIndex: 0
            };
            menuMapping.forEach((menu, rootIndex) => {
                let subIndex;
                let result = menu.subMenu.filter((item, index) => {
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
            let rootMenu = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", { styleName: "nav-side-root" }, menuMapping.map((menu, index) => {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { key: index, styleName: index !== currentMenu.rootIndex ? 'root-item' : 'root-item--current' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: menu.path }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Icon__["a" /* default */], { size: 25, styleName: "icon", name: menu.component })));
            }));
            let subMenu = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", { styleName: "nav-side-sub" }, menuMapping[currentMenu.rootIndex].subMenu.map((menu, index) => {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { key: index, styleName: index !== currentMenu.subIndex ? 'sub-item' : 'sub-item--current' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: menu.path }, menu.displayName));
            }));
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "sidebar-left" }, rootMenu, subMenu);
        }
    }]);

    return ConsoleSidebar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
ConsoleSidebar = __decorate([__WEBPACK_IMPORTED_MODULE_3_react_css_modules___default()(styles, {
    allowMultiple: true
})], ConsoleSidebar);
/* harmony default export */ __webpack_exports__["a"] = ConsoleSidebar;

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConsoleSidebar__ = __webpack_require__(96);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__ConsoleSidebar__["a" /* default */];

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



let Container = function (_Component) {
    _inherits(Container, _Component);

    function Container() {
        _classCallCheck(this, Container);

        return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
    }

    _createClass(Container, [{
        key: 'render',
        value: function render() {
            let className = (this.props.isFluid ? 'container-fluid' : 'container') + (this.props.className ? ` ${this.props.className}` : '');
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: className }, this.props.children);
        }
    }]);

    return Container;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = Container;

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dom_isDescendant__ = __webpack_require__(29);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const styles = __webpack_require__(38);
let Dropdown = function (_Component) {
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
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_dom_isDescendant__["a" /* default */])(this.dropdown, e.target)) {
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
            const { className, style } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { ref: ref => {
                    this.dropdown = ref;
                }, styleName: "dropdown", className: className || '' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "dropdown-toggle" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, this.props.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { styleName: "dropdown-caret" })), this.state.showMenu && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: style === 'dark' ? 'dropdown-menu--dark' : 'dropdown-menu' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", null, this.props.children)));
        }
    }]);

    return Dropdown;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
Dropdown = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules___default()(styles, {
    allowMultiple: true
})], Dropdown);
/* harmony default export */ __webpack_exports__["a"] = Dropdown;

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

const styles = __webpack_require__(38);
function DropdownItem(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, typeof props.children === 'string' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: styles['dropdown-item'] }, props.children) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(props.children, {
        className: styles['dropdown-item']
    }));
}
/* harmony default export */ __webpack_exports__["a"] = DropdownItem;

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

const styles = __webpack_require__(38);
function DropdownItemSep(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { className: styles['sep'] });
}
/* harmony default export */ __webpack_exports__["a"] = DropdownItemSep;

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__);


const styles = __webpack_require__(245);
/* harmony default export */ __webpack_exports__["a"] = props => {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default.a, { component: "div", transitionName: styles, transitionEnterTimeout: 300, transitionLeaveTimeout: 300 }, props.children);
};

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svg_icons__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icon_scss__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Icon_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Icon_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let Icon = function (_Component) {
    _inherits(Icon, _Component);

    function Icon(props) {
        _classCallCheck(this, Icon);

        return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, props));
    }

    _createClass(Icon, [{
        key: "render",
        value: function render() {
            let { name, onClick, size, style } = this.props;
            let className = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('icon', `icon-${name}`, this.props.className);
            if (typeof __WEBPACK_IMPORTED_MODULE_2__svg_icons__["a" /* default */][name] === 'undefined') {
                console.error('Icon name (%s) not found! ', name);
            }
            size = size || 30;
            const svgWrapStyle = {};
            const iconStyle = Object.assign({
                minWidth: size,
                minHeight: size
            }, style);
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { styleName: "icon", style: iconStyle, className: className, onClick: onClick }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { style: svgWrapStyle }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", Object.assign({}, __WEBPACK_IMPORTED_MODULE_2__svg_icons__["a" /* default */][name].viewBox && { viewBox: __WEBPACK_IMPORTED_MODULE_2__svg_icons__["a" /* default */][name].viewBox }, { width: size, height: size, styleName: "svg-shape" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: __WEBPACK_IMPORTED_MODULE_2__svg_icons__["a" /* default */][name].path }))));
        }
    }]);

    return Icon;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
Icon = __decorate([__WEBPACK_IMPORTED_MODULE_3_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_4__Icon_scss___default.a, {
    allowMultiple: true
})], Icon);
/* harmony default export */ __webpack_exports__["a"] = Icon;

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
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
        path: 'M741.856654 1024C725.807021 1024 709.757389 1018.01984 697.511183 1006.01856L237.797879 555.49952C213.305469 531.53792 213.305469 492.62592 237.797879 468.62336L697.511183 18.06336C722.003593-5.9392 761.667918-5.9392 786.160326 18.06336 810.652736 42.02496 810.652736 80.93696 786.160326 104.93952L370.79249 512.04096 786.160326 919.10144C810.652736 943.104 810.652736 981.97504 786.160326 1005.9776 773.955918 1018.01984 757.906286 1024 741.856654 1024L741.856654 1024Z',
        viewBox: '0 0 1024 1024'
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

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Input_scss__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Input_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Input_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let Input = function (_Component) {
    _inherits(Input, _Component);

    function Input(props) {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));
    }

    _createClass(Input, [{
        key: "render",
        value: function render() {
            let props = Object.assign({}, this.props);
            props = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.omit(props, 'className');
            const { error, touched } = this.props;
            const showError = error && touched;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({ 'input-wrap': !showError, 'input-wrap--error': showError }), className: this.props.className || '' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { styleName: "input", placeholder: this.props.placeholder, value: this.props.value, onChange: e => {
                    this.props.onChange(e);
                }, type: this.props.type ? this.props.type : 'text', name: this.props.name ? this.props.name : null }), showError && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "error-msg" }, error));
        }
    }]);

    return Input;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
Input = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_4__Input_scss___default.a, {
    allowMultiple: true
})], Input);
/* harmony default export */ __webpack_exports__["a"] = Input;

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Logo_scss__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Logo_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Logo_scss__);



function Logo(props) {
    const { dark, to } = props;
    const styleName = dark ? 'logo--dark' : 'logo';
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", { className: __WEBPACK_IMPORTED_MODULE_2__Logo_scss___default.a['logo-wrap'] }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { className: __WEBPACK_IMPORTED_MODULE_2__Logo_scss___default.a[styleName], to: to }, "readr"));
}
Logo['defaultProps'] = {
    to: '/'
};
/* harmony default export */ __webpack_exports__["a"] = Logo;

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Alert__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Modal__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selectors__ = __webpack_require__(12);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











let Master = function (_Component) {
    _inherits(Master, _Component);

    function Master(props) {
        _classCallCheck(this, Master);

        return _possibleConstructorReturn(this, (Master.__proto__ || Object.getPrototypeOf(Master)).call(this, props));
    }

    _createClass(Master, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            const hasNewErrorMsg = this.props.errorMessage.length !== nextProps.errorMessage.length;
            const routerChanged = nextProps.routing.locationBeforeTransitions.pathname !== this.props.routing.locationBeforeTransitions.pathname;
            if (hasNewErrorMsg) {
                this.props.sendNotification(__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.last(nextProps.errorMessage).toString(), 'error', 0);
            }
            if (routerChanged) {
                // 返回顶部
                window.document.body.scrollTop = 0;
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.loadSession();
        }
    }, {
        key: 'render',
        value: function render() {
            const { confirmModal, closeConfirmModal, modal, closeModal } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "app-root" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Modal__["a" /* ConfirmModal */], { open: confirmModal.open, title: confirmModal.title, onConfirm: confirmModal.onConfirm, onRequestClose: closeConfirmModal, width: 500 }, confirmModal.content), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Modal__["b" /* ModalPlus */], { open: modal.open, width: 500, onRequestClose: closeModal, title: modal.title }, modal.content), this.props.notifications.filter(noti => noti.visible).length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Alert__["a" /* Alerts */], { onRequestClose: this.props.hideNotification, messages: this.props.notifications.map(noti => ({
                    content: noti.message || '发生错误！',
                    type: noti.type,
                    visible: noti.visible,
                    id: noti.id
                })) }), this.props.children);
        }
    }]);

    return Master;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(state => ({
    notifications: state.components.notifications,
    errorMessage: state.errorMessage,
    confirmModal: state.components.confirmModal,
    modal: state.components.modal,
    routing: state.routing,
    session: __WEBPACK_IMPORTED_MODULE_7__selectors__["a" /* session */](state)
}), { sendNotification: __WEBPACK_IMPORTED_MODULE_2__actions__["sendNotification"], hideNotification: __WEBPACK_IMPORTED_MODULE_2__actions__["hideNotification"], closeConfirmModal: __WEBPACK_IMPORTED_MODULE_2__actions__["closeConfirmModal"], closeModal: __WEBPACK_IMPORTED_MODULE_2__actions__["closeModal"], loadSession: __WEBPACK_IMPORTED_MODULE_3__actions_api__["loadSession"] })(Master);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Modal__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ModalFooter__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_css_modules__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const styles = __webpack_require__(39);
let Dialog = function (_Component) {
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
            const { onConfirm, onRequestClose, open } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Modal__["c" /* default */], { open: open, onRequestClose: onRequestClose, width: this.props.width }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "confirm-modal" }, this.props.title && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "modal-header" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", { styleName: "modal-title" }, this.props.title)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "modal-content" }, this.props.children), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ModalFooter__["a" /* default */], { onConfirm: onConfirm, onCancel: onRequestClose })));
        }
    }]);

    return Dialog;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
Dialog = __decorate([__WEBPACK_IMPORTED_MODULE_3_react_css_modules___default()(styles)], Dialog);
/* harmony default export */ __webpack_exports__["a"] = Dialog;

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Modal__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_scss__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Modal_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





let ModalPlus = function (_Component) {
    _inherits(ModalPlus, _Component);

    function ModalPlus() {
        _classCallCheck(this, ModalPlus);

        return _possibleConstructorReturn(this, (ModalPlus.__proto__ || Object.getPrototypeOf(ModalPlus)).apply(this, arguments));
    }

    _createClass(ModalPlus, [{
        key: 'render',
        value: function render() {
            const { title, open, onRequestClose, width, actions } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Modal__["a" /* default */], { open: open, onRequestClose: onRequestClose, width: width || 600 }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: __WEBPACK_IMPORTED_MODULE_2__Modal_scss___default.a['modal-plus'] }, title && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: __WEBPACK_IMPORTED_MODULE_2__Modal_scss___default.a['modal-header'] }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", { className: __WEBPACK_IMPORTED_MODULE_2__Modal_scss___default.a['modal-title'] }, title)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: __WEBPACK_IMPORTED_MODULE_2__Modal_scss___default.a['modal-body'] }, this.props.children), actions && actions.map((action, index) => {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(action, {
                    key: index
                });
            })));
        }
    }]);

    return ModalPlus;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = ModalPlus;

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppDoc__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppError__ = __webpack_require__(75);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





let Page500 = function (_Component) {
    _inherits(Page500, _Component);

    function Page500() {
        _classCallCheck(this, Page500);

        return _possibleConstructorReturn(this, (Page500.__proto__ || Object.getPrototypeOf(Page500)).apply(this, arguments));
    }

    _createClass(Page500, [{
        key: 'render',
        value: function render() {
            const { message } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__AppDoc__["b" /* default */], { title: "500 Server Error", appMarkup: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__AppError__["a" /* default */], { title: "500", message: message }) });
        }
    }]);

    return Page500;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = Page500;

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Icon__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_dom_isDescendant__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const styles = __webpack_require__(250);
let SelectizeInput = function (_Component) {
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
            if (!this.props.useValue) {
                this.props.onValuesChange(this.props.values.concat(newValue));
                if (this.props.onOptionsChange) {
                    this.props.onOptionsChange(this.props.options.map(option => option.value === newValue.value ? Object.assign({}, option, { disabled: true }) : option));
                }
                // React setState 是异步的，如果都是用 state 管理则会出现同时调用 setState 的情况，从而造成问题
                setTimeout(() => {
                    this.clearInputValue();
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
            let newValues = [];
            let removedValue;
            if (index === -1) {
                newValues = this.props.values.slice(0, this.props.values.length - 1);
                removedValue = this.props.values[this.props.values.length - 1].value;
            } else {
                newValues = this.props.values.filter((v, i) => {
                    removedValue = v.value;
                    return i !== index;
                });
            }
            if (this.props.onOptionsChange) {
                this.props.onOptionsChange(this.props.options.map(option => option.value === removedValue ? Object.assign({}, option, { disabled: false }) : option));
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
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_dom_isDescendant__["a" /* default */])(this.inputWrap, e.target) || this.inputWrap === e.target) {
                this.focusInput();
                this.showOptions();
            } else {
                this.hideOptions();
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            const optionsLoaded = (nextProps.options || []).length !== 0 && (this.props.options || []).length === 0;
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
            const { label, values, onAddNewValue, omitSelectedValuesFromOptions } = this.props;
            let value = this.props.value || '';
            let options = this.props.options || [];
            let inputWidth = values.length > 0 ? value.length === 0 ? 16 : value.length * 16 : '100%';
            let placeholder = values.length > 0 ? '' : this.props.placeholder;
            let filteredOptions = options.filter(option => {
                if (omitSelectedValuesFromOptions) {
                    const valueOfValues = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.map(values, 'value');
                    return valueOfValues.indexOf(option.value) === -1;
                }
                return true;
            });
            const selectizeInputStyleName = __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
                'selectize-input': true,
                'selectize-input--focus': this.state.focus,
                'selectize-input--empty': values.length === 0
            });
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "selectize-wrap", className: this.props.className || '' }, label ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "form-label" }, label) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: selectizeInputStyleName, ref: ref => {
                    this.inputWrap = ref;
                } }, values.map((v, index) => {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { key: index, styleName: "selectize-tag" }, v.name, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Icon__["a" /* default */], { styleName: "icon-remove", size: 20, name: "close", onClick: e => {
                        this.removeValue(index);
                    } }));
            }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { style: { width: inputWidth }, ref: ref => {
                    this.input = ref;
                }, value: value, placeholder: placeholder, onBlur: e => {
                    this.setState({ focus: false });
                }, onFocus: e => {
                    this.setState({ focus: true });
                }, onChange: this.handleInputChange, onKeyDown: e => {
                    this.handleKeyPress(e);
                } })), this.state.showOptions && (filteredOptions.length !== 0 || onAddNewValue) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", { styleName: "query-results" }, filteredOptions.map((option, index) => {
                if (option.disabled) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { key: index, className: "disabled" }, option.name);
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { key: index, onClick: e => {
                        this.addValue(option);
                        if (this.props.onOptionClick) {
                            this.props.onOptionClick(option);
                        }
                    } }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, option.name));
            }), onAddNewValue ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { onClick: e => {
                    onAddNewValue(this.props.value);
                }, className: "add" }, "\u6DFB\u52A0 ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", null, this.props.value)) : null) : null);
        }
    }]);

    return SelectizeInput;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
SelectizeInput = __decorate([__WEBPACK_IMPORTED_MODULE_3_react_css_modules___default()(styles, {
    allowMultiple: true
})], SelectizeInput);
SelectizeInput['defaultProps'] = {
    omitSelectedValuesFromOptions: true
};
/* harmony default export */ __webpack_exports__["a"] = SelectizeInput;

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SelectizeInput__ = __webpack_require__(111);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__SelectizeInput__["a" /* default */];

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_css_modules__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


const styles = __webpack_require__(251);
let Textarea = function (_Component) {
    _inherits(Textarea, _Component);

    function Textarea(props) {
        _classCallCheck(this, Textarea);

        return _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, props));
    }

    _createClass(Textarea, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "textarea-wrap", className: this.props.className || '' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", { placeholder: this.props.placeholder, value: this.props.value, onChange: e => {
                    this.props.onChange(e);
                }, styleName: "textarea", type: this.props.type ? this.props.type : 'text', name: this.props.name ? this.props.name : null }));
        }
    }]);

    return Textarea;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
Textarea = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules___default()(styles, {
    allowMultiple: true
})], Textarea);
/* harmony default export */ __webpack_exports__["a"] = Textarea;

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Textarea__ = __webpack_require__(113);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__Textarea__["a" /* default */];

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__middleware__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__handleInitialState__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_logger__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux_saga__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_redux_saga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers__ = __webpack_require__(15);
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;








function configureStore(cookies) {
    const sagaMiddleware = __WEBPACK_IMPORTED_MODULE_6_redux_saga___default()();
    const baseMiddlewares = [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__middleware__["a" /* injectCookie */])(cookies), sagaMiddleware, __WEBPACK_IMPORTED_MODULE_3__middleware__["b" /* cache */],
    // modifyResponse,
    __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a];
    if (__WEBPACK_IMPORTED_MODULE_7__helpers__["a" /* default */].isServerEnv()) {
        // server side
        baseMiddlewares.push(__WEBPACK_IMPORTED_MODULE_3__middleware__["c" /* handleServerStore */]);
        if (process.env.NODE_ENV === 'production') {
            // nothing here
        } else {
            if (process.env.ENABLE_SERVER_ACTION_LOG === '1') {
                baseMiddlewares.push(__WEBPACK_IMPORTED_MODULE_3__middleware__["d" /* logActionTypes */]);
            }
        }
    } else {
        // client side
        if (process.env.NODE_ENV === 'production') {
            // nothing here
        } else {
            baseMiddlewares.push(__WEBPACK_IMPORTED_MODULE_5_redux_logger___default()({
                collapsed: true
            }));
        }
    }
    const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__handleInitialState__["a" /* default */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(...baseMiddlewares));
    if (false) {
        module.hot.accept('./reducers', () => {
            console.info('hot updating reducers');
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    return Object.assign({}, store, {
        runSaga: sagaMiddleware.run,
        close: () => store.dispatch(__WEBPACK_IMPORTED_MODULE_6_redux_saga__["END"])
    });
}

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const menus = [{
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
/* harmony default export */ __webpack_exports__["a"] = menus;

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["a"] = handleInitialState;

function handleInitialState() {
    if (typeof window === 'undefined') {
        return {};
    }
    return window[__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* INITIAL_STATE */]] || {};
}

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_isServerEnv__ = __webpack_require__(50);

const GLOBAL_ENV_VAR = '__ENV__';
const getEnv = () => {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers_isServerEnv__["a" /* default */])()) {
        return process.env;
    }
    return window[GLOBAL_ENV_VAR];
};
/* harmony default export */ __webpack_exports__["a"] = getEnv;

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

// check if routing is changed
const onRoutingChange = fn => (nextProps, currentProps) => {
    if (!currentProps.routing) {
        console.error('"routing" should be in props!');
        return false;
    }
    const hasPathParamChanged = !__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEqual(nextProps.routing, currentProps.routing);
    if (hasPathParamChanged) {
        fn(nextProps.routing);
    }
};
/* harmony export (immutable) */ __webpack_exports__["onRoutingChange"] = onRoutingChange;


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = print;
function print(...args) {
    if (process.env.NODE_ENV !== 'production') {
        const style = 'color: blue;';
        const mergedArgs = [args.join(' ')];
        let modArgs = mergedArgs.map((arg, index) => {
            if (index === 0) {
                return `%c [DEV] ${arg}`;
            }
        });
        modArgs = modArgs.concat(style);
        console.trace.apply(null, modArgs);
    }
}

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isServerRoutingEnabled__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony export (immutable) */ __webpack_exports__["a"] = redirect;


function redirect(url) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isServerRoutingEnabled__["a" /* default */])()) {
        __WEBPACK_IMPORTED_MODULE_1_react_router__["browserHistory"].push(url);
    } else {
        __WEBPACK_IMPORTED_MODULE_1_react_router__["hashHistory"].push(url);
    }
}

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = store => next => action => {
    return next(action);
};

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = store => next => action => {
    if (typeof action.SERVER_STORE === 'undefined') {
        return next(action);
    }
    const actionBody = new Promise(resolve => {
        resolve(action.SERVER_STORE.body);
    });
    return actionBody.then(body => {
        return next(dispatch => {
            dispatch(body);
            return {
                ok: true,
                response: action.body.response
            };
        });
    });
};

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modifyResponse__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__handleServerStore__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logActionTypes__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cache__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__injectCookie__ = __webpack_require__(125);
/* unused harmony reexport modifyResponse */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__handleServerStore__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__logActionTypes__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__cache__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__injectCookie__["a"]; });







/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = cookie => store => next => action => {
    if (action.payload && action.payload.request) {
        action.payload.request.injectedCookie = cookie;
        next(action);
    } else {
        next(action);
    }
};

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = store => next => action => {
    console.info(action.type);
    next(action);
};

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__ = __webpack_require__(8);

/* unused harmony default export */ var _unused_webpack_default_export = store => next => action => {
    if (action.type === __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["t" /* DOUBAN_BOOKS */].SUCCESS) {
        action.response.result = action.response.result.books;
    }
    return next(action);
};

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_actionTypes__ = __webpack_require__(8);


// import viewer from './viewer'
function notifications(state = [], action) {
    if (action.type === __WEBPACK_IMPORTED_MODULE_1__constants_actionTypes__["c" /* NOTIFICATION */].HIDE) {
        return state.map(n => n.id === action.id ? Object.assign({}, n, { visible: false }) : n);
    }
    if (action.type === __WEBPACK_IMPORTED_MODULE_1__constants_actionTypes__["c" /* NOTIFICATION */].SHOW) {
        return [...state, {
            visible: true,
            message: action.message,
            type: action.msgType,
            id: action.id
        }];
    }
    return state;
}
function confirmModal(state = {}, action) {
    if (action.type === __WEBPACK_IMPORTED_MODULE_1__constants_actionTypes__["d" /* OPEN_CONFIRM_MODAL */]) {
        return Object.assign({}, state, { open: true }, action.data);
    }
    if (action.type === __WEBPACK_IMPORTED_MODULE_1__constants_actionTypes__["e" /* CLOSE_CONFIRM_MODAL */]) {
        return {
            open: false
        };
    }
    return state;
}
function modal(state = {}, action) {
    if (action.type === __WEBPACK_IMPORTED_MODULE_1__constants_actionTypes__["f" /* MODAL */].OPEN) {
        return Object.assign({}, state, { open: true }, action.data);
    }
    if (action.type === __WEBPACK_IMPORTED_MODULE_1__constants_actionTypes__["f" /* MODAL */].CLOSE) {
        return {
            open: false
        };
    }
    return state;
}
const components = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    notifications,
    confirmModal,
    modal
});
/* harmony default export */ __webpack_exports__["a"] = components;

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_entity__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(4);



const entities = (state = {}, action) => {
    // TODO
    // if (action.type === ACTION_TYPES.REMOVE_ENTITY) {
    //   const {name, id} = action
    //   return _.assign({}, state, {
    //     [name]: _.omit(state[name], [id])
    //   })
    // }
    const { payload, meta, type } = action;
    if (!meta || !meta.schema || !meta.types) {
        return state;
    }
    const { types, schema, targetId } = meta;
    switch (type) {
        case types.REQUEST:
            if (targetId) {
                const _entities = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_entity__["b" /* expandEntities */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_entity__["c" /* mockEntity */])(schema.key, targetId), __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* FETCH_STATUS */].LOADING);
                // todo: array content?
                return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge({}, state, _entities);
            }
            return state;
        case types.SUCCESS:
            return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge({}, state, payload.normalized.entities);
        case types.FAILURE:
            if (targetId) {
                const _entities = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_entity__["b" /* expandEntities */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_entity__["c" /* mockEntity */])(schema.key, targetId), __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* FETCH_STATUS */].FAILED, payload);
                // todo: array content?
                return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge({}, state, _entities);
            }
            return state;
        default:
            return state;
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = entities;


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_better_redux_form__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_better_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_better_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_actionTypes__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_receiveData__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_paginate__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__viewer__ = __webpack_require__(133);











function errorMessage(state = [], action) {
    const { error, type } = action;
    if (error) {
        const message = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(action, 'payload.message', 'Unknown error occurred!');
        console.error(`${type}: ${message}`);
        return [...state, message];
    }
    return state;
}
const rootReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])({
    components: __WEBPACK_IMPORTED_MODULE_4__components__["a" /* default */],
    entities: __WEBPACK_IMPORTED_MODULE_5__entities__["a" /* entities */],
    errorMessage,
    routing: __WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerReducer"],
    form: __WEBPACK_IMPORTED_MODULE_3_better_redux_form__["reducer"],
    viewer: __WEBPACK_IMPORTED_MODULE_10__viewer__["a" /* default */],
    // it's true that define pagination in reducers is much better
    pagination: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])({
        books: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_paginate__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_6__constants_actionTypes__["h" /* BOOKS */]),
        bookShelves: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_paginate__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_6__constants_actionTypes__["l" /* SHELF */]),
        users: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_paginate__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_6__constants_actionTypes__["m" /* USERS */])
    }),
    session: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_receiveData__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_6__constants_actionTypes__["o" /* SESSION */], {
        role: __WEBPACK_IMPORTED_MODULE_7__constants__["e" /* ROLES */].VISITOR
    }),
    profile: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_receiveData__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_6__constants_actionTypes__["k" /* PROFILE */])
});
/* harmony default export */ __webpack_exports__["a"] = rootReducer;

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(4);
/* unused harmony export computePaginationState */
/* harmony export (immutable) */ __webpack_exports__["a"] = paginate;


const DEFAULT_PAGINATION_STATE = {
    fetchStatus: __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* FETCH_STATUS */].NONE,
    pages: {}
};
/* unused harmony export DEFAULT_PAGINATION_STATE */

function computePaginationState(state, action) {
    // 如果不使用 null 在外层的 merge 会忽略 undefined 从而导致一些边缘问题
    const next = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(action, 'payload.response.links.next', null);
    const last = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(action, 'payload.response.links.last', null);
    const currentPage = next ? next.page - 1 : last && last.page || 1;
    const pages = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.assign({}, {
        [currentPage]: action.payload.normalized.result
    });
    return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.assign({}, state, {
        fetchStatus: __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* FETCH_STATUS */].LOADED,
        // ids: _.union(state.ids, action.payload.normalized.result),
        // if pages not fetched linerly things might go wrong
        pages,
        next,
        last,
        currentPage
    });
}
function paginate(types, mapActionToKey) {
    const { REQUEST: requestType, SUCCESS: successType, FAILURE: failureType } = types;
    function updatePagination(state = DEFAULT_PAGINATION_STATE, action) {
        switch (action.type) {
            case requestType:
                return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.assign({}, state, {
                    fetchStatus: __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* FETCH_STATUS */].LOADING
                });
            case successType:
                return computePaginationState(state, action);
            case failureType:
                return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.assign({}, state, {
                    fetchStatus: __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* FETCH_STATUS */].FAILED
                });
            default:
                return state;
        }
    }
    return function updatePaginationByKey(state = {}, action) {
        switch (action.type) {
            case requestType:
            case successType:
            case failureType:
                const key = mapActionToKey ? mapActionToKey(action) : 'default';
                if (typeof key !== 'string') {
                    throw new Error('Expected key to be a string.');
                }
                return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge({}, state, {
                    [key]: updatePagination(state[key], action)
                });
            default:
                return state;
        }
    };
}

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(4);


const receiveData = (types, defaultData = {}, parser) => {
    const _defaultData = Object.assign({
        fetchStatus: __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* FETCH_STATUS */].NONE
    }, defaultData);
    return (state = _defaultData, action) => {
        const { type, payload } = action;
        const response = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(action, 'payload.response', {});
        switch (type) {
            case types.REQUEST:
                return Object.assign({}, state, {
                    fetchStatus: __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* FETCH_STATUS */].LOADING
                });
            case types.SUCCESS:
                return Object.assign({}, state, {
                    fetchStatus: __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* FETCH_STATUS */].LOADED
                }, parser ? parser(response.json) : response.json);
            case types.FAILURE:
                return Object.assign({}, state, {
                    fetchStatus: __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* FETCH_STATUS */].FAILED,
                    error: payload || new Error('Unknown error occurred!')
                });
            default:
                return state;
        }
    };
};
/* harmony default export */ __webpack_exports__["a"] = receiveData;

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_actionTypes__ = __webpack_require__(8);



const getFlag = (reset, currentFlag) => {
    if (typeof reset === 'undefined') {
        return !currentFlag;
    }
    return reset;
};
const DEFAULT_CONFIG = {
    theme: 'WHITE'
};
const config = (state = DEFAULT_CONFIG, action) => {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_2__constants_actionTypes__["b" /* VIEWER */].CONFIG:
            return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge({}, state, action.payload);
        case __WEBPACK_IMPORTED_MODULE_2__constants_actionTypes__["b" /* VIEWER */].DESTROY:
            return DEFAULT_CONFIG;
        default:
            return state;
    }
};
const DEFAULT_STATUS = { isReady: false };
const status = (state = DEFAULT_STATUS, action) => {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_2__constants_actionTypes__["b" /* VIEWER */].SET_STATUS:
            return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge({}, state, action.payload);
        case __WEBPACK_IMPORTED_MODULE_2__constants_actionTypes__["b" /* VIEWER */].DESTROY:
            return DEFAULT_STATUS;
        default:
            return state;
    }
};
const data = (state = {}, action) => {
    const { payload } = action;
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_2__constants_actionTypes__["b" /* VIEWER */].DESTROY:
            if (payload === true) {
                return {};
            }
            return state;
        case __WEBPACK_IMPORTED_MODULE_2__constants_actionTypes__["b" /* VIEWER */].CALC_SUCCESS:
            return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge({}, state, {
                [payload.bookId]: {
                    content: {
                        computed: payload.computed
                    }
                }
            });
        case __WEBPACK_IMPORTED_MODULE_2__constants_actionTypes__["b" /* VIEWER */].UPDATE_LOCAL_PROGRESS:
            return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge({}, state, {
                [payload.bookId]: {
                    progress: {
                        local: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(state, [payload.bookId, 'progress', 'local'], []).concat(payload.progress)
                    }
                }
            });
        default:
            return state;
    }
};
const id = (state = '', action) => {
    if (action.type === __WEBPACK_IMPORTED_MODULE_2__constants_actionTypes__["b" /* VIEWER */].INITIALIZE) {
        return action.payload;
    }
    return state;
};
const DEFAULT_COMPONENT_STATE = {
    showNavigation: false,
    showPanel: false,
    showPreference: false,
    showProgress: false
};
const components = (state = DEFAULT_COMPONENT_STATE, action) => {
    const { payload, type } = action;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_2__constants_actionTypes__["b" /* VIEWER */].PANEL_TOGGLE:
            return Object.assign({}, state, {
                showPanel: getFlag(payload, state.showPanel)
            });
        case __WEBPACK_IMPORTED_MODULE_2__constants_actionTypes__["b" /* VIEWER */].PREFERENCE_TOGGLE:
            return Object.assign({}, state, {
                showPreference: getFlag(payload, state.showPreference)
            });
        case __WEBPACK_IMPORTED_MODULE_2__constants_actionTypes__["b" /* VIEWER */].NAVIGATION_TOGGLE:
            return Object.assign({}, state, {
                showNavigation: getFlag(payload, state.showNavigation)
            });
        case __WEBPACK_IMPORTED_MODULE_2__constants_actionTypes__["b" /* VIEWER */].PROGRESS_INFO_TOGGLE:
            return Object.assign({}, state, {
                showProgress: getFlag(payload, state.showProgress)
            });
        case __WEBPACK_IMPORTED_MODULE_2__constants_actionTypes__["b" /* VIEWER */].SET_COMPONENT:
            return Object.assign({}, state, payload);
        case __WEBPACK_IMPORTED_MODULE_2__constants_actionTypes__["b" /* VIEWER */].DESTROY:
            return DEFAULT_COMPONENT_STATE;
        default:
            return state;
    }
};
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])({
    status,
    config,
    data,
    components,
    id
});

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(11).then((function (require) {
            fn(null, __webpack_require__(275).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(14).then((function (require) {
            fn(null, __webpack_require__(276).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(3).then((function (require) {
            fn(null, __webpack_require__(277).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(9).then((function (require) {
            fn(null, __webpack_require__(278).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(2).then((function (require) {
            fn(null, __webpack_require__(279).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(1).then((function (require) {
            fn(null, __webpack_require__(280).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(10).then((function (require) {
            fn(null, __webpack_require__(281).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(5).then((function (require) {
            fn(null, __webpack_require__(282).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(6).then((function (require) {
            fn(null, __webpack_require__(283).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(16).then((function (require) {
            fn(null, __webpack_require__(284).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(8).then((function (require) {
            fn(null, __webpack_require__(285).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(7).then((function (require) {
            fn(null, __webpack_require__(286).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(4).then((function (require) {
            fn(null, __webpack_require__(287).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(13).then((function (require) {
            fn(null, __webpack_require__(288).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(12).then((function (require) {
            fn(null, __webpack_require__(289).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(15).then((function (require) {
            fn(null, __webpack_require__(290).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(0).then((function (require) {
            fn(null, __webpack_require__(291).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Master__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_App__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Console__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__webAPI__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(4);







const createRoutes = (context = {}) => {
    const { request, response } = context;
    const handleConsoleEnter = (nextState, replace, callback) => {
        if (request) {
            // 服务端校验方式
            const { context: { user: { role } } } = request;
            if (role !== __WEBPACK_IMPORTED_MODULE_6__constants__["e" /* ROLES */].ADMIN) {
                response.redirect('/');
            }
            callback();
        } else {
            // 客户端校验方式
            try {
                __WEBPACK_IMPORTED_MODULE_5__webAPI__["a" /* default */].auth().then(res => {
                    if (res.json.role !== __WEBPACK_IMPORTED_MODULE_6__constants__["e" /* ROLES */].ADMIN) {
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
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/", component: __WEBPACK_IMPORTED_MODULE_2__components_Master__["a" /* default */] }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], Object.assign({ path: "viewer/book/:id" }, __webpack_require__(150))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], Object.assign({ path: "test" }, __webpack_require__(149))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { component: __WEBPACK_IMPORTED_MODULE_3__components_App__["a" /* default */] }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRoute"], Object.assign({}, __webpack_require__(136))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], Object.assign({ path: "browse" }, __webpack_require__(138))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], Object.assign({ path: "book/:id" }, __webpack_require__(137))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], Object.assign({ path: "collections" }, __webpack_require__(140))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], Object.assign({ path: "collections/:id" }, __webpack_require__(139))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], Object.assign({ path: "signin" }, __webpack_require__(147))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], Object.assign({ path: "signup" }, __webpack_require__(148))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "user" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRedirect"], { to: "/user/profile" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], Object.assign({ path: "shelf" }, __webpack_require__(146))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], Object.assign({ path: "preference" }, __webpack_require__(144))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], Object.assign({ path: "profile" }, __webpack_require__(145))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { onEnter: handleConsoleEnter, path: "console", component: __WEBPACK_IMPORTED_MODULE_4__components_Console__["a" /* default */] }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRedirect"], { to: "/console/books" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], Object.assign({ path: "books" }, __webpack_require__(141))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], Object.assign({ path: "users" }, __webpack_require__(142))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], Object.assign({ path: "books/new" }, __webpack_require__(134))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], Object.assign({ path: "collections/new" }, __webpack_require__(135)))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], Object.assign({ path: "*" }, __webpack_require__(143))));
};
/* harmony default export */ __webpack_exports__["a"] = createRoutes;

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__paging__ = __webpack_require__(153);

function calcBook(wrap, flesh) {
    const startCalcHtmlTime = new Date().valueOf();
    const computedChapters = Array.prototype.map.call(wrap.childNodes, child => {
        const childDiv = child;
        const id = childDiv.getAttribute('id');
        const nodeHeights = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__paging__["a" /* getNodeHeights */])(childDiv.querySelector('.lines').childNodes);
        return {
            id,
            nodeHeights
        };
    });
    const endCalcHtmlTime = new Date().valueOf();
    // helpers.print(`Calculating html takes ${endCalcHtmlTime - startCalcHtmlTime}ms`)
    const computedPages = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__paging__["b" /* groupPageFromChapters */])(flesh, computedChapters, 900);
    return computedPages;
}
/* harmony default export */ __webpack_exports__["a"] = calcBook;

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routes_Viewer_components_BookPage_scss__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routes_Viewer_components_BookPage_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__routes_Viewer_components_BookPage_scss__);
/* harmony export (immutable) */ __webpack_exports__["a"] = getNodeHeights;
/* unused harmony export groupNodesByPage */
/* harmony export (immutable) */ __webpack_exports__["b"] = groupPageFromChapters;

// 暂不支持包含图片的计算
// 计算没有等待图片加载完成，所以结果是不正确的
function getNodeHeights(nodes) {
    let nodesHeight = [];
    Array.prototype.forEach.call(nodes, (node, index) => {
        if (node.className !== __WEBPACK_IMPORTED_MODULE_0__routes_Viewer_components_BookPage_scss___default.a['gb-line']) {
            console.error('Unsupported content found!');
        }
        nodesHeight.push(node.clientHeight);
    });
    return nodesHeight;
}
// long paragraph situation doesn't seem to affect this function
// offset distance is always negtive or zero
// the index will be of the paragraph with this offset at the end
function getPageOffset({ pageIndex, pageHeight, nodeHeights }) {
    let offset = 0;
    let nodeIndex = 0;
    let nodeStartIndex;
    if (pageIndex !== 0) {
        let nodeHeightSum = 0;
        while (nodeHeightSum <= pageHeight * pageIndex) {
            nodeHeightSum += nodeHeights[nodeIndex];
            nodeIndex++;
        }
        offset = nodeHeightSum - nodeHeights[nodeIndex - 1] - pageIndex * pageHeight;
        nodeStartIndex = nodeIndex - 1;
    } else {
        nodeStartIndex = 0;
    }
    return { offset, nodeStartIndex };
}
function getNodesOfPage({ pageIndex, nodes, pageHeight, nodeHeights }) {
    let { offset, nodeStartIndex } = getPageOffset({ pageIndex, pageHeight, nodeHeights });
    let nodeIndex = nodeStartIndex;
    let nodeEndIndex;
    let pageNodes = [];
    let nodeHeightSum = offset + nodeHeights[nodeStartIndex];
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
    for (let i = nodeStartIndex; i <= nodeEndIndex && i <= nodes.length - 1; i++) {
        pageNodes.push(nodes[i]);
    }
    return { pageNodes, offset };
}
function groupNodesByPage(nodes, nodeHeights, pageHeight, pageStartFrom = 0, chapterId) {
    let pages = [];
    let pageHeightSum = nodeHeights.reduce((a, b) => a + b, 0);
    let pageSum = Math.ceil(pageHeightSum / pageHeight);
    if (nodeHeights.length === 0) {
        return [{
            nodes,
            meta: {
                pageNo: 1 + pageStartFrom,
                offset: 0,
                chapterId
            }
        }];
    }
    // finally
    for (let i = 0; i < pageSum; i++) {
        const { pageNodes, offset } = getNodesOfPage({ pageIndex: i, nodes, nodeHeights, pageHeight });
        const findIdOfHTags = mdNode => {
            const pattern = /<h\d id="(.*)">(.*)<\/h\d>/;
            const result = mdNode.match(pattern);
            if (result) {
                return result[1];
            }
            return null;
        };
        const hash = pageNodes.map(node => {
            return findIdOfHTags(node);
        }).filter(id => Boolean(id));
        pages.push({
            nodes: pageNodes,
            meta: {
                pageNo: pageStartFrom + i + 1,
                offset,
                chapterId,
                hash
            }
        });
    }
    return pages;
}
function groupPageFromChapters(contentOfChapters, nodeHeightsOfChapters, pageHeight) {
    let pageStartFrom = 0;
    let allPages = [];
    const t0 = new Date().valueOf();
    contentOfChapters.forEach((chapter, index) => {
        const pages = groupNodesByPage(chapter.markdown.split('\n\n'), nodeHeightsOfChapters[index].nodeHeights, pageHeight, pageStartFrom, chapter.id);
        allPages = allPages.concat(pages);
        pageStartFrom = pageStartFrom + pages.length;
    });
    const t1 = new Date().valueOf();
    // helpers.print(`Grouping nodes takes ${t1 - t0}ms`)
    return allPages;
}

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__watchViewer__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__watchLoadTrigger__ = __webpack_require__(155);
/* harmony export (immutable) */ __webpack_exports__["a"] = rootSaga;



function* rootSaga() {
    yield [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(__WEBPACK_IMPORTED_MODULE_1__watchViewer__["a" /* default */]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(__WEBPACK_IMPORTED_MODULE_2__watchLoadTrigger__["a" /* default */])];
}

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url_join__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url_join___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_url_join__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_getApiRoot__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_utils__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_network_request__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_entity__ = __webpack_require__(61);
/* harmony export (immutable) */ __webpack_exports__["a"] = watchLoadTrigger;








const API_ROOT = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_getApiRoot__["a" /* default */])();
function* handleLoad(action) {
    const { meta, payload } = action;
    const { request } = payload;
    const { schema } = meta;
    const flowActions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__actions_utils__["d" /* createActionEntity */])(meta.types);
    // handle request
    yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(flowActions.request(payload, meta));
    try {
        // handle success
        const response = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_network_request__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_url_join___default()(API_ROOT, request.url), Object.assign({}, request, {
            cookie: __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isUndefined(request.cookie) ? request.injectedCookie : request.cookie
        }));
        if (schema) {
            let normalized = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_entity__["a" /* normalizeJSON */])(response.json, schema);
            const entities = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_entity__["b" /* expandEntities */])(normalized.entities, __WEBPACK_IMPORTED_MODULE_6__constants__["c" /* FETCH_STATUS */].LOADED);
            normalized = Object.assign({}, normalized, Object.assign({ entities }));
            yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(flowActions.success({ response, normalized }, meta));
        } else {
            yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(flowActions.success({ response }, meta));
        }
    } catch (error) {
        // handle error
        yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(flowActions.failure(error, meta));
    }
}
function* filterActions(action) {
    if (action.meta && action.meta.types && action.meta.types.TRIGGER === action.type) {
        yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])(handleLoad, action);
    }
}
function* watchLoadTrigger() {
    yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["takeEvery"])('*', filterActions);
}

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_actionTypes__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectors__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__effects_calcBook__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_viewerDefs__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers_shouldViewerBeFluid__ = __webpack_require__(79);
/* harmony export (immutable) */ __webpack_exports__["a"] = watchViewer;









const getDefaultConfig = (override = {}) => {
    const fluid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__helpers_shouldViewerBeFluid__["a" /* default */])();
    const viewerWidth = __WEBPACK_IMPORTED_MODULE_5__utils__["a" /* default */].getScreenInfo().width;
    return Object.assign({
        fluid,
        isScrollMode: true,
        isTouchMode: fluid,
        pageHeight: __WEBPACK_IMPORTED_MODULE_7__constants_viewerDefs__["a" /* DEFAULT_PAGE_HEIGHT */],
        fontSize: __WEBPACK_IMPORTED_MODULE_7__constants_viewerDefs__["b" /* DEFAULT_FONT_SIZE */],
        theme: 'WHITE',
        // width of viewer is exactly the width here when in fluid mode
        // when not the width will be 'MOBILE_BREAK_POINT'
        width: viewerWidth
    }, override);
};
function* loadProgressAndGo(bookId) {
    const session = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["select"])(__WEBPACK_IMPORTED_MODULE_4__selectors__["a" /* session */]);
    if (session.role !== 'visitor') {
        yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["api"].loadBookProgress(bookId));
        yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_2__constants_actionTypes__["a" /* BOOK_PROGRESS */].SUCCESS);
        const { percentage } = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["select"])(__WEBPACK_IMPORTED_MODULE_4__selectors__["b" /* entity */]('bookProgress', bookId));
        yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["viewer"].viewerGoTo(percentage));
    } else {
        yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["viewer"].viewerGoTo(0));
    }
}
function* watchInitialization() {
    while (true) {
        const { payload: bookId } = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_2__constants_actionTypes__["b" /* VIEWER */].INITIALIZE);
        const config = getDefaultConfig();
        yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["viewer"].configViewer(config, true));
        yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["viewer"].setComponents({
            hideAll: true
        }));
        yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["viewer"].toggleViewerPreference(false));
        yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["viewer"].toggleViewerPanel(false));
        const computed = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["select"])(__WEBPACK_IMPORTED_MODULE_4__selectors__["c" /* viewer */].computed(bookId));
        if (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isEmpty(computed)) {
            yield [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["api"].loadBookInfo(bookId)), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["api"].loadBookContent(bookId))];
            yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["viewer"].configViewer({
                isCalcMode: true
            }, true));
            yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_2__constants_actionTypes__["b" /* VIEWER */].CALC_SUCCESS);
            yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["viewer"].configViewer({
                isCalcMode: false
            }, true));
        }
        yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["viewer"].setStatus({
            isReady: true
        }));
        yield loadProgressAndGo(bookId);
        yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["viewer"].setComponents({
            hideAll: false
        }));
    }
}
function* watchCalcBook() {
    while (true) {
        const { payload: { bookId, wrap } } = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_2__constants_actionTypes__["b" /* VIEWER */].CALC_TRIGGER);
        const bookContent = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["select"])(__WEBPACK_IMPORTED_MODULE_4__selectors__["b" /* entity */]('bookContents', bookId));
        const flesh = bookContent.flesh || {};
        try {
            const computed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__effects_calcBook__["a" /* default */])(wrap, flesh);
            yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["viewer"].calcBookSuccess(bookId, computed));
        } catch (error) {
            yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["viewer"].calcBookFailure(bookId, error));
        }
    }
}
function* watchGoTo() {
    while (true) {
        const { payload } = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_2__constants_actionTypes__["b" /* VIEWER */].GO_TO);
        const bookId = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["select"])(__WEBPACK_IMPORTED_MODULE_4__selectors__["c" /* viewer */].id);
        const computed = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["select"])(__WEBPACK_IMPORTED_MODULE_4__selectors__["c" /* viewer */].computed(bookId));
        const { pageHeight, isScrollMode } = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["select"])(__WEBPACK_IMPORTED_MODULE_4__selectors__["c" /* viewer */].config);
        const pageCount = computed.length;
        const totalHeight = pageCount * pageHeight;
        let percentage = payload;
        if (payload > 1) {
            // payload is page number
            percentage = payload / pageCount;
        }
        if (isScrollMode) {
            document.body.scrollTop = totalHeight * percentage;
        } else {
            // todo: page flip mode
        }
    }
}
function* watchConfig() {
    while (true) {
        const oldConfig = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["select"])(__WEBPACK_IMPORTED_MODULE_4__selectors__["c" /* viewer */].config);
        const action = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_2__constants_actionTypes__["b" /* VIEWER */].CONFIG);
        const bookId = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["select"])(__WEBPACK_IMPORTED_MODULE_4__selectors__["c" /* viewer */].id);
        const newConfig = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["select"])(__WEBPACK_IMPORTED_MODULE_4__selectors__["c" /* viewer */].config);
        const isInit = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(action, 'meta.isInit');
        const fluidChanged = oldConfig.fluid !== newConfig.fluid;
        let widthChangedInFluid = false;
        if (!fluidChanged && oldConfig.fluid) {
            widthChangedInFluid = oldConfig.width !== newConfig.width;
        }
        const needRerender = oldConfig.fontSize !== newConfig.fontSize || oldConfig.fluid !== newConfig.fluid || fluidChanged || widthChangedInFluid;
        if (needRerender && !isInit) {
            if (process.env.NODE_ENV !== 'production') {
                console.info('Start rerendering');
            }
            yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["viewer"].setComponents({
                showNavigation: false,
                showPanel: false,
                showPreference: false,
                hideAll: true
            }));
            yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["viewer"].setStatus({
                isReady: false
            }));
            yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["viewer"].configViewer({
                isCalcMode: true,
                isTouchMode: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__helpers_shouldViewerBeFluid__["a" /* default */])()
            }));
            yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["viewer"].toggleViewerPanel(false));
            yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_2__constants_actionTypes__["b" /* VIEWER */].CALC_SUCCESS);
            yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["viewer"].configViewer({
                isCalcMode: false
            }));
            yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["viewer"].setStatus({
                isReady: true
            }));
            yield loadProgressAndGo(bookId);
            yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["viewer"].setComponents({
                hideAll: false
            }));
        }
    }
}
function* watchViewer() {
    yield [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(watchInitialization), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(watchCalcBook), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(watchGoTo), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(watchConfig)];
}

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schemas__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(20);


const bookList = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* pagedEntities */])({
    schema: __WEBPACK_IMPORTED_MODULE_0__schemas__["a" /* default */].BOOK_ARRAY,
    paginationName: 'books'
});
/* harmony export (immutable) */ __webpack_exports__["bookList"] = bookList;

const shelf = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* pagedEntities */])({
    schema: __WEBPACK_IMPORTED_MODULE_0__schemas__["a" /* default */].SHELF_BOOK_ARRAY,
    paginationName: 'bookShelves'
});
/* harmony export (immutable) */ __webpack_exports__["shelf"] = shelf;

const userList = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* pagedEntities */])({
    schema: __WEBPACK_IMPORTED_MODULE_0__schemas__["a" /* default */].USER_ARRAY,
    paginationName: 'users'
});
/* harmony export (immutable) */ __webpack_exports__["userList"] = userList;

// old
// export const doubanBooks = key => createSelector(
//   pagedEntities({
//     entitiesName: 'doubanBooks',
//     paginationName: 'doubanBooks',
//     paginationKey: key
//   }),
//   books => books
// )
// export const doubanBooksAsOptions = key => createSelector(
//   doubanBooks(key),
//   selectedBooks => {
//     return selectedBooks.map(book => ({
//       name: book.title,
//       value: book.id,
//       additional: {
//         description: book.summary,
//         cover: book.images.large,
//         author: book.author.join(', ')
//       }
//     }))
//   }
// )
// export const authorsAsOptions = key => createSelector(
//   authors(key),
//   items => {
//     return items.map(item => ({
//       name: item.name,
//       value: item.id
//     }))
//   }
// )
// export const booksAsOptions = (key?) => createSelector(
//   books(key),
//   items => {
//     return items.map(item => ({
//       name: item.title,
//       value: item.id
//     }))
//   }
// )

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(20);


const id = state => __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(state, ['viewer', 'id']);
/* harmony export (immutable) */ __webpack_exports__["id"] = id;

const computed = bookId => state => {
    return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(state, ['viewer', 'data', bookId, 'content', 'computed'], []);
};
/* harmony export (immutable) */ __webpack_exports__["computed"] = computed;

const computed2 = state => {
    const _id = id(state);
    return computed(id)(state);
};
/* harmony export (immutable) */ __webpack_exports__["computed2"] = computed2;

const status = state => {
    return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(state, ['viewer', 'status'], {});
};
/* harmony export (immutable) */ __webpack_exports__["status"] = status;

const config = state => {
    return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(state, ['viewer', 'config'], {});
};
/* harmony export (immutable) */ __webpack_exports__["config"] = config;

const components = state => {
    return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(state, ['viewer', 'components'], {});
};
/* harmony export (immutable) */ __webpack_exports__["components"] = components;

const localProgress = bookId => state => {
    return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(state, ['viewer', 'data', bookId, 'progress', 'local'], []);
};
/* harmony export (immutable) */ __webpack_exports__["localProgress"] = localProgress;

const self = state => {
    return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(state, ['viewer'], {});
};
/* harmony export (immutable) */ __webpack_exports__["self"] = self;

const navData = bookId => state => {
    const bookContent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* entity */])('bookContents', bookId)(state);
    return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(bookContent, 'nav', []);
};
/* harmony export (immutable) */ __webpack_exports__["navData"] = navData;


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_model__ = __webpack_require__(10);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




let BasicApi = function () {
    function BasicApi(schema) {
        _classCallCheck(this, BasicApi);

        this._schema = schema;
        this._model = new __WEBPACK_IMPORTED_MODULE_1__models_model__["a" /* default */](schema);
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
                page,
                disablePagination: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isNil(page),
                // TODO
                filter: entity => true
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

/* harmony default export */ __webpack_exports__["a"] = BasicApi;

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_model__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_paginate__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_schemas__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__file__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__parsers__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_api_callApi__ = __webpack_require__(58);
/* harmony export (immutable) */ __webpack_exports__["b"] = findBook;
/* harmony export (immutable) */ __webpack_exports__["a"] = addBook;
/* harmony export (immutable) */ __webpack_exports__["e"] = editBookMeta;
/* harmony export (immutable) */ __webpack_exports__["c"] = resolveBookContent;
/* harmony export (immutable) */ __webpack_exports__["d"] = listBooks;
/* harmony export (immutable) */ __webpack_exports__["g"] = listShelfBooks;
/* harmony export (immutable) */ __webpack_exports__["f"] = removeBook;
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
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









const bookModel = new __WEBPACK_IMPORTED_MODULE_0__models_model__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__data_schemas__["c" /* book */]);
const fileModel = new __WEBPACK_IMPORTED_MODULE_0__models_model__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__data_schemas__["g" /* file */]);
const progressModel = new __WEBPACK_IMPORTED_MODULE_0__models_model__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__data_schemas__["f" /* progress */]);
const authorModel = new __WEBPACK_IMPORTED_MODULE_0__models_model__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2__data_schemas__["a" /* author */]);
/**
 * helpers
 */
function getAuthorId(authorName, description) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const authorEntity = yield authorModel.findOne({ name: authorName });
            return authorEntity._id;
        } catch (error) {
            const result = yield authorModel.add({
                name: authorName,
                description
            });
            return result.ops[0]._id;
        }
    });
}
/**
 * 3rd party
 */
function fetchBookByTitle(title) {
    return __awaiter(this, void 0, void 0, function* () {
        const keyword = title;
        const { json: bookJson } = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_api_callApi__["a" /* default */])(`https://api.douban.com/v2/book/search?q=${encodeURI(keyword)}&count=1`);
        return __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(bookJson, ['books', 0], {});
    });
}
function fetchBookMetaByTitle(title) {
    return __awaiter(this, void 0, void 0, function* () {
        const book = yield fetchBookByTitle(title);
        return {
            cover: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(book, ['images', 'large']),
            description: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(book, 'summary'),
            authorInfo: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(book, 'author_intro')
        };
    });
}
/**
 * apis
 */
function findBook(id) {
    return bookModel.findOne(id).then(result => {
        const data = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.omit(result, ['file']);
        let contentType = 'txt';
        if (!result.file) {
            contentType = '';
        } else if (result.file.mimetype === 'application/epub+zip') {
            contentType = 'epub';
        }
        return __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.assign({}, data, {
            content_type: contentType
        });
    });
}
function addBook(meta, fileId) {
    return __awaiter(this, void 0, void 0, function* () {
        const mergeBookMeta = (title, authorId, extMeta) => {
            return __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.assign({}, {
                title,
                authors: [authorId],
                file: fileId
            }, meta, extMeta);
        };
        function doSave(title, authorName) {
            return __awaiter(this, void 0, void 0, function* () {
                const bookMeta = yield fetchBookMetaByTitle(title);
                const authorId = yield getAuthorId(authorName, bookMeta.authorInfo);
                const bookData = mergeBookMeta(title, authorId, __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.omit(bookMeta, 'authorInfo'));
                return bookModel.add(bookData);
            });
        }
        if (fileId) {
            const fileResult = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__file__["a" /* readFile */])(fileId);
            if (fileResult.mimetype === 'application/epub+zip') {
                try {
                    const file = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__file__["a" /* readFile */])(fileId, __WEBPACK_IMPORTED_MODULE_7__parsers__["a" /* default */].epub);
                    const parsedContent = file.content;
                    const authorName = parsedContent.meta.author;
                    return doSave(parsedContent.meta.title, authorName);
                } catch (error) {
                    yield fileModel.remove(fileId);
                    throw error;
                }
            } else if (fileResult.mimetype === 'text/plain') {
                const file = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__file__["a" /* readFile */])(fileId);
                const fileContentArray = file.content.buffer.toString('utf-8').split('\n');
                const title = fileContentArray[0];
                const authorName = fileContentArray[1];
                return doSave(title, authorName);
            } else {
                return Promise.reject(new Error('Unsupported file type!'));
            }
        }
        // TODO: 好像不对吧
        return bookModel.add(meta);
    });
}
function editBookMeta(bookId, meta) {
    return __awaiter(this, void 0, void 0, function* () {
        yield bookModel.findOne(bookId, true);
        // todo: 多个作者情况
        const { authorInfo } = yield fetchBookMetaByTitle(meta.authors);
        const authorId = yield getAuthorId(meta.authors, authorInfo);
        const bookMeta = Object.assign({}, meta, {
            authors: [authorId]
        });
        return bookModel.update(bookId, bookMeta, {
            upsert: false
        });
    });
}
function resolveBookContent(bookId) {
    return __awaiter(this, void 0, void 0, function* () {
        const bookEntity = yield bookModel.findOne(bookId);
        const fileId = bookEntity.file._id;
        let bookContent;
        if (!fileId) {
            // 从这边报出的 404 和下面的提示会不一样
            // 下面报的 404 可能是文件被删了
            // 这边报 404 则是一开始数据库里就没存 file
            return Promise.reject(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers__["b" /* notFoundError */])('book'));
        }
        if (bookEntity.file.mimetype === 'application/epub+zip') {
            const fileResult = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__file__["a" /* readFile */])(fileId, __WEBPACK_IMPORTED_MODULE_7__parsers__["a" /* default */].epub);
            bookContent = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.omit(fileResult.content, ['meta']);
        } else if (bookEntity.file.mimetype === 'text/plain') {
            const fileResult = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__file__["a" /* readFile */])(fileId, __WEBPACK_IMPORTED_MODULE_7__parsers__["a" /* default */].txtContent);
            bookContent = fileResult.content;
        } else {
            return Promise.reject(new Error('Unsupported file type!'));
        }
        return __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.assign({}, bookContent, { _id: bookId, content_id: fileId });
    });
}
function listBooks(page) {
    return bookModel.list({
        page,
        disablePagination: __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isNil(page),
        mapping: entity => __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.omit(entity, ['content', 'file'])
    });
}
function listShelfBooks(userId, page) {
    return progressModel.listRaw({ query: { user_id: userId } }).then(results => {
        if (results.length === 0) {
            return results;
        }
        return Promise.all(results.sort(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* default */].sortByDate()).map(result => {
            return bookModel.findOne(result.book_id, true).then(res => {
                return res;
            }, error => {
                // 如果错误不是 404 也输出空的 entity
                return bookModel.outputEmpty(result.book_id);
            });
        })).then(res => {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__models_paginate__["a" /* default */])(res.map(entity => __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.omit(entity, ['content'])), {
                page
            });
        });
    });
}
function removeBook(bookId) {
    return __awaiter(this, void 0, void 0, function* () {
        const book = yield bookModel.findOne(bookId, true);
        const fileId = book.file;
        yield bookModel.remove(bookId);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__file__["b" /* delFile */])(fileId);
    });
}

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_model__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_schemas__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (immutable) */ __webpack_exports__["a"] = listCollection;



const collectionModel = new __WEBPACK_IMPORTED_MODULE_0__models_model__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__data_schemas__["b" /* collection */]);
function listCollection(page) {
    return collectionModel.list({
        page,
        disablePagination: __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isNil(page),
        mapping: entity => {
            return __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.assign({}, entity, {
                items: entity['items'].map(item => __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.omit(item, 'content'))
            });
        }
    });
}

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_schemas__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basic_api__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file__ = __webpack_require__(52);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_2__file__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_2__file__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__books__ = __webpack_require__(160);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__books__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__books__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__books__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_3__books__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_3__books__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_3__books__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_3__books__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__(163);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_4__user__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_4__user__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users__ = __webpack_require__(164);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_5__users__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_5__users__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__collections__ = __webpack_require__(161);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_6__collections__["a"]; });







const author = new __WEBPACK_IMPORTED_MODULE_1__basic_api__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__data_schemas__["a" /* author */]);
/* harmony export (immutable) */ __webpack_exports__["a"] = author;

const collection = new __WEBPACK_IMPORTED_MODULE_1__basic_api__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__data_schemas__["b" /* collection */]);
/* harmony export (immutable) */ __webpack_exports__["b"] = collection;

const book = new __WEBPACK_IMPORTED_MODULE_1__basic_api__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__data_schemas__["c" /* book */]);
/* harmony export (immutable) */ __webpack_exports__["c"] = book;

const tag = new __WEBPACK_IMPORTED_MODULE_1__basic_api__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__data_schemas__["d" /* tag */]);
/* harmony export (immutable) */ __webpack_exports__["d"] = tag;

const user = new __WEBPACK_IMPORTED_MODULE_1__basic_api__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__data_schemas__["e" /* user */]);
/* harmony export (immutable) */ __webpack_exports__["e"] = user;


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_model__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_schemas__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_humps__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_humps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_humps__);
/* harmony export (immutable) */ __webpack_exports__["a"] = getReadingProgress;
/* harmony export (immutable) */ __webpack_exports__["b"] = setReadingProgress;



const progressModel = new __WEBPACK_IMPORTED_MODULE_0__models_model__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__data_schemas__["f" /* progress */]);
function getReadingProgress(userId, bookId) {
    const query = __WEBPACK_IMPORTED_MODULE_2_humps___default.a.decamelizeKeys({ userId, bookId });
    return progressModel.list({ disablePagination: true, raw: true, query }).then(res => {
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
    const query = __WEBPACK_IMPORTED_MODULE_2_humps___default.a.decamelizeKeys({ userId, bookId });
    return progressModel.update(query, data, {
        upsert: true
    });
}

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_model__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_schemas__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["a"] = findUser;
/* harmony export (immutable) */ __webpack_exports__["b"] = addUser;




const userModel = new __WEBPACK_IMPORTED_MODULE_0__models_model__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__data_schemas__["e" /* user */]);
function findUser(id) {
    return userModel.findOne(id).then(entity => {
        return __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.omit(entity, ['password']);
    });
}
function addUser(userInfo) {
    return userModel.add(__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.assign({}, userInfo, {
        role: __WEBPACK_IMPORTED_MODULE_3__constants__["e" /* ROLES */].USER
    }));
}

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_print__ = __webpack_require__(56);
/* harmony export (immutable) */ __webpack_exports__["a"] = bootstrap;


function bootstrap(app, config) {
    const { port: overidePort, isProduction } = config;
    const server = __WEBPACK_IMPORTED_MODULE_0_http___default.a.createServer(app);
    const port = overidePort || Number(process.env.PORT);
    app.set('port', port);
    server.listen(port);
    __WEBPACK_IMPORTED_MODULE_1__utils_print__["a" /* default */].info(`Server running in ${isProduction ? 'production' : 'development'} at port ${port}`);
    return app;
}

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DataType */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

let DataType = function () {
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
const arrayOf = type => {
    return new DataType(type.mark, true);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = arrayOf;

const DataTypes = {
    String: new DataType('STRING'),
    Number: new DataType('NUMBER'),
    ID: new DataType('ID')
};
/* harmony default export */ __webpack_exports__["a"] = DataTypes;

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__make_basic_endpoint__ = __webpack_require__(168);


// basic endpoints
const author = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__make_basic_endpoint__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__api__["a" /* author */]);
/* harmony export (immutable) */ __webpack_exports__["a"] = author;

const collection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__make_basic_endpoint__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__api__["b" /* collection */]);
/* harmony export (immutable) */ __webpack_exports__["b"] = collection;

const book = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__make_basic_endpoint__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__api__["c" /* book */]);
/* unused harmony export book */

const tag = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__make_basic_endpoint__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__api__["d" /* tag */]);
/* harmony export (immutable) */ __webpack_exports__["j"] = tag;

const user = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__make_basic_endpoint__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__api__["e" /* user */]);
/* harmony export (immutable) */ __webpack_exports__["k"] = user;

// common endpoints
// books
const addBook = (req, res, next) => {
    req.apiResults = __WEBPACK_IMPORTED_MODULE_0__api__["f" /* addBook */](req.body, req.loggedFileId);
    next();
};
/* harmony export (immutable) */ __webpack_exports__["g"] = addBook;

const findBook = (req, res, next) => {
    req.apiResults = __WEBPACK_IMPORTED_MODULE_0__api__["g" /* findBook */](req.params.book);
    next();
};
/* harmony export (immutable) */ __webpack_exports__["d"] = findBook;

const resolveBookContent = (req, res, next) => {
    req.apiResults = __WEBPACK_IMPORTED_MODULE_0__api__["h" /* resolveBookContent */](req.params.book);
    next();
};
/* harmony export (immutable) */ __webpack_exports__["e"] = resolveBookContent;

const listBooks = (req, res, next) => {
    req.apiResults = __WEBPACK_IMPORTED_MODULE_0__api__["i" /* listBooks */](req.query.page || 1);
    next();
};
/* harmony export (immutable) */ __webpack_exports__["f"] = listBooks;

const editBookMeta = (req, res, next) => {
    req.apiResults = __WEBPACK_IMPORTED_MODULE_0__api__["j" /* editBookMeta */](req.params.book, req.body);
    next();
};
/* harmony export (immutable) */ __webpack_exports__["h"] = editBookMeta;

const removeBook = (req, res, next) => {
    req.apiResults = __WEBPACK_IMPORTED_MODULE_0__api__["k" /* removeBook */](req.params.book);
    next();
};
/* harmony export (immutable) */ __webpack_exports__["i"] = removeBook;

// users
const findUser = (req, res, next) => {
    req.apiResults = __WEBPACK_IMPORTED_MODULE_0__api__["l" /* findUser */](req.context.user.id);
    next();
};
/* harmony export (immutable) */ __webpack_exports__["m"] = findUser;

const addUser = (req, res, next) => {
    req.apiResults = __WEBPACK_IMPORTED_MODULE_0__api__["m" /* addUser */](req.body);
    next();
};
/* harmony export (immutable) */ __webpack_exports__["l"] = addUser;

// user
const listShelfBooks = (req, res, next) => {
    req.apiResults = __WEBPACK_IMPORTED_MODULE_0__api__["n" /* listShelfBooks */](req.context.user.id, req.query.page || 1);
    next();
};
/* harmony export (immutable) */ __webpack_exports__["n"] = listShelfBooks;

const getReadingProgress = (req, res, next) => {
    req.apiResults = __WEBPACK_IMPORTED_MODULE_0__api__["o" /* getReadingProgress */](req.context.user.id, req.params.book);
    next();
};
/* harmony export (immutable) */ __webpack_exports__["o"] = getReadingProgress;

const setReadingProgress = (req, res, next) => {
    req.apiResults = __WEBPACK_IMPORTED_MODULE_0__api__["p" /* setReadingProgress */](req.context.user.id, req.params.book, req.body);
    next();
};
/* harmony export (immutable) */ __webpack_exports__["p"] = setReadingProgress;

// file
const readFile = (req, res, next) => {
    req.apiResults = __WEBPACK_IMPORTED_MODULE_0__api__["q" /* readFile */](req.params.file);
    next();
};
/* harmony export (immutable) */ __webpack_exports__["q"] = readFile;

const delFile = (req, res, next) => {
    req.apiResults = __WEBPACK_IMPORTED_MODULE_0__api__["r" /* delFile */](req.params.file);
    next();
};
/* harmony export (immutable) */ __webpack_exports__["r"] = delFile;

// other
const listCollections = (req, res, next) => {
    req.apiResults = __WEBPACK_IMPORTED_MODULE_0__api__["s" /* listCollection */](req.query.page || 1);
    next();
};
/* harmony export (immutable) */ __webpack_exports__["c"] = listCollections;


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const makeBasicEndpoint = apiFns => {
    const findOne = (req, res, next) => {
        req.apiResults = apiFns.findOne(req.params.id);
        next();
    };
    const list = (req, res, next) => {
        req.apiResults = apiFns.list(req.query.page || 1);
        next();
    };
    const add = (req, res, next) => {
        req.apiResults = apiFns.add(req.body);
        next();
    };
    const update = (req, res, next) => {
        req.apiResults = apiFns.update(req.params.id, req.body);
        next();
    };
    const remove = (req, res, next) => {
        req.apiResults = apiFns.remove(req.params.id);
        next();
    };
    return { findOne, list, add, update, remove };
};
/* harmony default export */ __webpack_exports__["a"] = makeBasicEndpoint;

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generic_error__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



let BadRequestError = function (_GenericError) {
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
}(__WEBPACK_IMPORTED_MODULE_0__generic_error__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = BadRequestError;

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generic_error__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



let EmailError = function (_GenericError) {
    _inherits(EmailError, _GenericError);

    function EmailError(message) {
        _classCallCheck(this, EmailError);

        var _this = _possibleConstructorReturn(this, (EmailError.__proto__ || Object.getPrototypeOf(EmailError)).call(this, message, 'EmailError'));

        _this.statusCode = 500;
        return _this;
    }

    return EmailError;
}(__WEBPACK_IMPORTED_MODULE_0__generic_error__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = EmailError;

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generic_error__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



let InternalServerError = function (_GenericError) {
    _inherits(InternalServerError, _GenericError);

    function InternalServerError(message) {
        _classCallCheck(this, InternalServerError);

        var _this = _possibleConstructorReturn(this, (InternalServerError.__proto__ || Object.getPrototypeOf(InternalServerError)).call(this, message, 'InternalServerError'));

        _this.statusCode = 500;
        return _this;
    }

    return InternalServerError;
}(__WEBPACK_IMPORTED_MODULE_0__generic_error__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = InternalServerError;

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generic_error__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



let MethodNotAllowedError = function (_GenericError) {
    _inherits(MethodNotAllowedError, _GenericError);

    function MethodNotAllowedError(message) {
        _classCallCheck(this, MethodNotAllowedError);

        var _this = _possibleConstructorReturn(this, (MethodNotAllowedError.__proto__ || Object.getPrototypeOf(MethodNotAllowedError)).call(this, message, 'MethodNotAllowedError'));

        _this.statusCode = 405;
        return _this;
    }

    return MethodNotAllowedError;
}(__WEBPACK_IMPORTED_MODULE_0__generic_error__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = MethodNotAllowedError;

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generic_error__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



let NoPermissionError = function (_GenericError) {
    _inherits(NoPermissionError, _GenericError);

    function NoPermissionError(message) {
        _classCallCheck(this, NoPermissionError);

        var _this = _possibleConstructorReturn(this, (NoPermissionError.__proto__ || Object.getPrototypeOf(NoPermissionError)).call(this, message, 'NoPermissionError'));

        _this.statusCode = 403;
        return _this;
    }

    return NoPermissionError;
}(__WEBPACK_IMPORTED_MODULE_0__generic_error__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = NoPermissionError;

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generic_error__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



let NotFoundError = function (_GenericError) {
    _inherits(NotFoundError, _GenericError);

    function NotFoundError(message) {
        _classCallCheck(this, NotFoundError);

        var _this = _possibleConstructorReturn(this, (NotFoundError.__proto__ || Object.getPrototypeOf(NotFoundError)).call(this, message, 'NotFoundError'));

        _this.statusCode = 404;
        return _this;
    }

    return NotFoundError;
}(__WEBPACK_IMPORTED_MODULE_0__generic_error__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = NotFoundError;

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generic_error__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



let RequestEntityTooLargeError = function (_GenericError) {
    _inherits(RequestEntityTooLargeError, _GenericError);

    function RequestEntityTooLargeError(message) {
        _classCallCheck(this, RequestEntityTooLargeError);

        var _this = _possibleConstructorReturn(this, (RequestEntityTooLargeError.__proto__ || Object.getPrototypeOf(RequestEntityTooLargeError)).call(this, message, 'RequestEntityTooLargeError'));

        _this.statusCode = 413;
        return _this;
    }

    return RequestEntityTooLargeError;
}(__WEBPACK_IMPORTED_MODULE_0__generic_error__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = RequestEntityTooLargeError;

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generic_error__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



let TokenRevocationError = function (_GenericError) {
    _inherits(TokenRevocationError, _GenericError);

    function TokenRevocationError(message) {
        _classCallCheck(this, TokenRevocationError);

        var _this = _possibleConstructorReturn(this, (TokenRevocationError.__proto__ || Object.getPrototypeOf(TokenRevocationError)).call(this, message, 'TokenRevocationError'));

        _this.statusCode = 503;
        return _this;
    }

    return TokenRevocationError;
}(__WEBPACK_IMPORTED_MODULE_0__generic_error__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = TokenRevocationError;

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generic_error__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



let TooManyRequestsError = function (_GenericError) {
    _inherits(TooManyRequestsError, _GenericError);

    function TooManyRequestsError(message) {
        _classCallCheck(this, TooManyRequestsError);

        var _this = _possibleConstructorReturn(this, (TooManyRequestsError.__proto__ || Object.getPrototypeOf(TooManyRequestsError)).call(this, message, 'TooManyRequestsError'));

        _this.statusCode = 429;
        return _this;
    }

    return TooManyRequestsError;
}(__WEBPACK_IMPORTED_MODULE_0__generic_error__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = TooManyRequestsError;

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generic_error__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



let UnauthorizedError = function (_GenericError) {
    _inherits(UnauthorizedError, _GenericError);

    function UnauthorizedError(message) {
        _classCallCheck(this, UnauthorizedError);

        var _this = _possibleConstructorReturn(this, (UnauthorizedError.__proto__ || Object.getPrototypeOf(UnauthorizedError)).call(this, message, 'UnauthorizedError'));

        _this.statusCode = 401;
        return _this;
    }

    return UnauthorizedError;
}(__WEBPACK_IMPORTED_MODULE_0__generic_error__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = UnauthorizedError;

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generic_error__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



let UnsupportedFileTypeError = function (_GenericError) {
    _inherits(UnsupportedFileTypeError, _GenericError);

    function UnsupportedFileTypeError(message) {
        _classCallCheck(this, UnsupportedFileTypeError);

        var _this = _possibleConstructorReturn(this, (UnsupportedFileTypeError.__proto__ || Object.getPrototypeOf(UnsupportedFileTypeError)).call(this, message, 'UnsupportedFileTypeError'));

        _this.statusCode = 415;
        return _this;
    }

    return UnsupportedFileTypeError;
}(__WEBPACK_IMPORTED_MODULE_0__generic_error__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = UnsupportedFileTypeError;

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generic_error__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



let ValidationError = function (_GenericError) {
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
}(__WEBPACK_IMPORTED_MODULE_0__generic_error__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = ValidationError;

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_crypto__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_crypto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_crypto__);
/* harmony export (immutable) */ __webpack_exports__["a"] = computeHash;

/**
 * source:
 * http://stackoverflow.com/questions/6984139/how-can-i-get-the-sha1-hash-of-a-string-in-node-js
 */
function computeHash(buffer) {
  const shasum = __WEBPACK_IMPORTED_MODULE_0_crypto___default.a.createHash('sha1');
  shasum.update(buffer);
  return shasum.digest('hex');
}

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_url_join__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_url_join___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_url_join__);

/* harmony default export */ __webpack_exports__["a"] = () => {
    return __WEBPACK_IMPORTED_MODULE_0_url_join___default()(`${process.env.DB_PROTOCOL}://${process.env.DB_HOST}:${process.env.DB_PORT}`, process.env.DB_NAME);
};

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_url_join__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_url_join___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_url_join__);

/* harmony default export */ __webpack_exports__["a"] = () => {
    return __WEBPACK_IMPORTED_MODULE_0_url_join___default()(`${process.env.DB_PROTOCOL}://${process.env.DB_HOST}:${process.env.DB_PORT}`, process.env.MONGOSTORE_NAME);
};

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express_session__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_morgan__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cookie_parser__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_body_parser__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_connect_mongo__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_connect_mongo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_connect_mongo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__middleware_render__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bootstrap__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__helpers_getMongoStoreUrl__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__middleware__ = __webpack_require__(53);
/* harmony export (immutable) */ __webpack_exports__["a"] = initialize;













const MongoStore = __WEBPACK_IMPORTED_MODULE_6_connect_mongo___default()(__WEBPACK_IMPORTED_MODULE_1_express_session___default.a);
const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
const PUBLIC_DIR = 'build/static';
const PUBLIC_URL = '/static';
const SESSION_SECRET = 'key';
const REQ_SIZE_LIMIT = '5mb';
const MONGO_STORE_URL = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__helpers_getMongoStoreUrl__["a" /* default */])();
function initialize(config) {
    const { basePath, isProduction } = config;
    // locals
    app.locals.basePath = basePath;
    app.use(__WEBPACK_IMPORTED_MODULE_1_express_session___default()({
        secret: SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
        store: new MongoStore({ url: MONGO_STORE_URL })
    }));
    app.use(__WEBPACK_IMPORTED_MODULE_5_body_parser___default.a.urlencoded({ limit: REQ_SIZE_LIMIT, extended: false }));
    app.use(__WEBPACK_IMPORTED_MODULE_5_body_parser___default.a.json({ limit: REQ_SIZE_LIMIT }));
    app.use(__WEBPACK_IMPORTED_MODULE_4_cookie_parser___default()());
    // log cookies
    app.use((req, res, next) => {
        // console.log('------------')
        // // Cookies that have not been signed
        // console.log('Cookies: ', req.cookies)
        // // Cookies that have been signed
        // console.log('Signed Cookies: ', req.signedCookies)
        // req.context.user
        // console.log(req.session.user)
        next();
    });
    app.use(PUBLIC_URL, __WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_2_path___default.a.join(basePath, PUBLIC_DIR)));
    app.use(__WEBPACK_IMPORTED_MODULE_12__middleware__["a" /* default */].parseContext);
    // api routing
    app.use(`/${__WEBPACK_IMPORTED_MODULE_10__constants__["a" /* API_PREFIX */]}`, __WEBPACK_IMPORTED_MODULE_9__routes__["a" /* default */].api());
    // render view
    app.use(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__middleware_render__["a" /* default */])(isProduction));
    // log error info
    app.use(__WEBPACK_IMPORTED_MODULE_3_morgan___default()('dev', {
        skip(req, res) {
            return res.statusCode < 400;
        }
    }));
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__bootstrap__["a" /* default */])(app, {
        isProduction
    });
}

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_i18n__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_model__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_humps__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_humps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_humps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_schemas__ = __webpack_require__(9);
/* unused harmony export basicAuth */
/* unused harmony export check */
/* unused harmony export revoke */





function basicAuth(req, res, next) {
    const user = new __WEBPACK_IMPORTED_MODULE_2__models_model__["a" /* default */](__WEBPACK_IMPORTED_MODULE_4__data_schemas__["e" /* user */]);
    const login = req.body.login ? req.body.login.toLowerCase() : undefined;
    const password = req.body.password;
    if (typeof login === 'undefined') {
        next(new __WEBPACK_IMPORTED_MODULE_0__errors__["a" /* default */].ValidationError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_i18n__["a" /* default */])('errors.validation.preCheck.missRequiredFields', 'login')));
    }
    if (typeof password === 'undefined') {
        next(new __WEBPACK_IMPORTED_MODULE_0__errors__["a" /* default */].ValidationError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_i18n__["a" /* default */])('errors.validation.preCheck.missRequiredFields', 'password')));
    }
    const query = { $or: [{ username: login, password }, { email: login, password }] };
    user.findOne(query).then(result => {
        req.session.user = __WEBPACK_IMPORTED_MODULE_3_humps___default.a.camelizeKeys(result);
        req.apiResults = Promise.resolve({ ok: 1 });
        next();
    }, error => {
        next(new __WEBPACK_IMPORTED_MODULE_0__errors__["a" /* default */].UnauthorizedError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_i18n__["a" /* default */])('errors.middleware.auth.wrongCombination')));
    });
}
function check(req, res) {
    res.send(__WEBPACK_IMPORTED_MODULE_3_humps___default.a.decamelizeKeys(req.context.user));
}
function revoke(req, res) {
    req.session.destroy();
    res.status(204).send(null);
}
/* harmony default export */ __webpack_exports__["a"] = { basicAuth, check, revoke };

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(21);
/* harmony export (immutable) */ __webpack_exports__["a"] = handleApiNotFound;

function handleApiNotFound(req, res, next) {
    if (!req.__apiTouched) {
        next(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* notFoundError */])('API'));
    }
    next();
}

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_print__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_i18n__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (immutable) */ __webpack_exports__["a"] = handleError;



function handleError(error, req, res, next) {
    const statusCode = error.statusCode || 500;
    let errorJson = error;
    if (Error.prototype.isPrototypeOf(error)) {
        errorJson = {
            message: error.message || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_i18n__["a" /* default */])('errors.general.unknownErrorOccurred'),
            type: error.name
        };
    }
    if (!error.statusCode) {
        __WEBPACK_IMPORTED_MODULE_0__utils_print__["a" /* default */].error(error);
    }
    res.status(statusCode).send(__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.omit(errorJson, ['statusCode', 'name', 'stack']));
}

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_parseUrlencoded__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__(15);



const API_ROOT = __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* default */].getApiRoot();
function parsePagination({ fullPath, query }, { current, all }) {
    const getLintByPage = page => `${fullPath}?${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_parseUrlencoded__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.assign({}, query, { page }))}`;
    const links = {
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
            return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.omit(links, ['next']);
        }
        if (current === 1) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.omit(links, ['prev', 'next']);
        }
    }
    if (current <= 1) {
        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.omit(links, ['prev']);
    }
    if (current >= all) {
        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.omit(links, ['next']);
    }
    return links;
}
const handleSuccess = (apiResults, req, res) => {
    if (req.method === 'POST') {
        res.status(201).send(apiResults);
    } else {
        if (apiResults._pagination) {
            const host = API_ROOT;
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
    const { apiResults } = req;
    if (!apiResults) {
        next(new Error('"apiResults" is not present!'));
    }
    apiResults.then(results => {
        handleSuccess(results, req, res);
    }, error => {
        next(error);
    });
}
/* harmony default export */ __webpack_exports__["a"] = handleJSONResponse;

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_schemas__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_model__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__(21);
/* harmony export (immutable) */ __webpack_exports__["a"] = logFile;




const fileModel = new __WEBPACK_IMPORTED_MODULE_1__models_model__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__data_schemas__["g" /* file */]);
// @req#loggedFileId
function logFile(req, res, next) {
    const file = req.file;
    const hash = __WEBPACK_IMPORTED_MODULE_3__helpers__["c" /* computeHash */](file.buffer);
    const data = {
        filename: file.originalname,
        // 会被转换为 binData 的 BSON type
        content: file.buffer,
        mimetype: file.mimetype,
        size: file.size,
        encoding: file.encoding,
        hash
    };
    fileModel.findOne({ hash }).then(result => {
        // req.loggedFileId = result._id
        // TODO: 404 处理
        const err = new Error('File already exists!');
        next(err);
    }, notFoundError => {
        // TODO: 不使用 404
        // 为了确定是未找到而不是其他错误需要做额外的判断
        fileModel.add(data).then(result => {
            const loggedFileId = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(result, ['ops', 0, '_id']);
            if (!loggedFileId) {
                // TODO
                // throw new Error('File not Found!')
                const err = new Error('File not Found!');
                next(err);
            } else {
                req.loggedFileId = loggedFileId;
                next();
            }
        }).catch(error => {
            next(error);
        });
    });
}

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony export (immutable) */ __webpack_exports__["a"] = parseContext;

function parseContext(req, res, next) {
    if (req.session.user) {
        req.context = {
            user: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.omit(req.session.user, ['password', 'dateCreated', 'email'])
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

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = prepareApi;
function prepareApi(req, res, next) {
    req.__apiTouched = true;
    next();
}

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ServerSideAppRoot__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sagas__ = __webpack_require__(154);




function fetchData(req, res, next) {
    const { matchedResults: { renderProps } } = req.locals;
    const store = req.locals.store;
    const rootComponent = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_ServerSideAppRoot__["a" /* default */], { renderPageContent: true, renderProps: renderProps, store: req.locals.store });
    store.runSaga(__WEBPACK_IMPORTED_MODULE_3__sagas__["a" /* default */]).done.then(next);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__["renderToString"])(rootComponent);
    store.close();
}
/* harmony default export */ __webpack_exports__["a"] = fetchData;

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Page500__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_AppDoc__ = __webpack_require__(31);




function handleError(error, req, res, next) {
    const html = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__["renderToStaticMarkup"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Page500__["a" /* default */], { message: error.message || 'Unknown error occurred!' }));
    res.send(__WEBPACK_IMPORTED_MODULE_3__components_AppDoc__["a" /* DOCTYPE */] + html);
}
/* harmony default export */ __webpack_exports__["a"] = handleError;

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__match_route__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fetch_data__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__render_view__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__handle_error__ = __webpack_require__(193);





const render = isProduction => {
    return [__WEBPACK_IMPORTED_MODULE_0__init__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__match_route__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__fetch_data__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__render_view__["a" /* default */])(isProduction), __WEBPACK_IMPORTED_MODULE_4__handle_error__["a" /* default */]];
};
/* harmony default export */ __webpack_exports__["a"] = render;

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_redux__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configureStore__ = __webpack_require__(115);
/* harmony export (immutable) */ __webpack_exports__["a"] = init;



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
    const memoryHistory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router__["createMemoryHistory"])(req.url);
    const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__configureStore__["a" /* default */])(req.cookies);
    const history = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_router_redux__["syncHistoryWithStore"])(memoryHistory, store);
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

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(151);



function matchRoute(req, res, next) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_router__["match"])({
        history: req.locals.history,
        routes: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__routes__["a" /* default */])({
            request: req,
            response: res
        }),
        location: req.url
    }, (error, redirectLocation, renderProps) => {
        if (error) {
            next(error);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            const wrappedComponent = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.last(renderProps.components)['WrappedComponent'];
            const statusCode = wrappedComponent ? 200 : 404;
            req.locals.matchedResults = { renderProps, statusCode };
            next();
        } else {
            // todo
            next(new Error('Missing 404 handle page in routes!'));
        }
    });
}
/* harmony default export */ __webpack_exports__["a"] = matchRoute;

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom_server__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_DocContainer__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ServerSideAppRoot__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_AppDoc__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__build_static_assets_manifest_json__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__build_static_assets_manifest_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__build_static_assets_manifest_json__);








const CLIENT_ENV_VARS = ['PORT'];
const resolveDevAssets = assetName => {
    const assetUrl = `http://localhost:${process.env.WEBPACK_PORT}/static/`;
    return assetUrl + assetName;
};
function renderView(isProduction) {
    let cssAssets;
    let jsAssets;
    if (isProduction) {
        const prefix = '/static';
        cssAssets = [__WEBPACK_IMPORTED_MODULE_1_path___default.a.join(prefix, __WEBPACK_IMPORTED_MODULE_7__build_static_assets_manifest_json___default.a['base.global.css']), __WEBPACK_IMPORTED_MODULE_1_path___default.a.join(prefix, __WEBPACK_IMPORTED_MODULE_7__build_static_assets_manifest_json___default.a['vendor.global.css']), __WEBPACK_IMPORTED_MODULE_1_path___default.a.join(prefix, __WEBPACK_IMPORTED_MODULE_7__build_static_assets_manifest_json___default.a['modifiers.global.css']), __WEBPACK_IMPORTED_MODULE_1_path___default.a.join(prefix, __WEBPACK_IMPORTED_MODULE_7__build_static_assets_manifest_json___default.a['app.css'])];
        jsAssets = [__WEBPACK_IMPORTED_MODULE_1_path___default.a.join(prefix, __WEBPACK_IMPORTED_MODULE_7__build_static_assets_manifest_json___default.a['vendor.js']), __WEBPACK_IMPORTED_MODULE_1_path___default.a.join(prefix, __WEBPACK_IMPORTED_MODULE_7__build_static_assets_manifest_json___default.a['app.js'])];
    } else {
        cssAssets = [resolveDevAssets('css/base.global.css'), resolveDevAssets('css/vendor.global.css'), resolveDevAssets('css/modifiers.global.css'), resolveDevAssets('css/app.css')];
        jsAssets = [resolveDevAssets('js/vendor.dll.js'), resolveDevAssets('js/app.js')];
    }
    const clientEnv = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.pick(process.env, CLIENT_ENV_VARS);
    return (req, res) => {
        // test 500 page
        // if (req) {
        //   throw new Error('Server fucked up!')
        // }
        const { renderProps, statusCode } = req.locals.matchedResults;
        const appRootMarkup = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_ServerSideAppRoot__["a" /* default */], { renderPageContent: true, renderProps: renderProps, store: req.locals.store }));
        // 需要在 render 之后调用
        // 不调用 rewind 会造成内存泄漏
        const { bodyClass, head } = __WEBPACK_IMPORTED_MODULE_4__components_DocContainer__["a" /* default */].rewind();
        const initialState = process.env.ENABLE_INITIAL_STATE === '1' ? req.locals.store.getState() : {};
        // todo: global var name
        const html = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_dom_server__["renderToStaticMarkup"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_AppDoc__["b" /* default */], { appMarkup: appRootMarkup, helmetHeadObject: head, bodyClass: bodyClass, initialState: initialState, link: cssAssets, script: [{ innerHTML: 'var __ENABLE_SERVER_ROUTING__ = true;' }, { innerHTML: `var __ENV__ = ${JSON.stringify(clientEnv)}` }].concat(jsAssets) }));
        console.info('render view');
        res.status(statusCode).send(__WEBPACK_IMPORTED_MODULE_6__components_AppDoc__["a" /* DOCTYPE */] + html);
    };
}
/* harmony default export */ __webpack_exports__["a"] = renderView;

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errors__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_i18n__ = __webpack_require__(11);
/* harmony export (immutable) */ __webpack_exports__["a"] = requirePermissionsOf;



/**
 * 权限等级排序
 * admin | user | visitor | none
 */
function requirePermissionsOf(userRole) {
    return (req, res, next) => {
        switch (userRole) {
            case __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* ROLES */].ADMIN:
                if (req.context.user.role === __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* ROLES */].ADMIN) {
                    next();
                    break;
                }
                next(new __WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].NoPermissionError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_i18n__["a" /* default */])('errors.api.auth.needPermissionsOf', 'admin')));
                break;
            case __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* ROLES */].USER:
                if (req.context.user.role === __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* ROLES */].USER || req.context.user.role === __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* ROLES */].ADMIN) {
                    next();
                    break;
                }
                next(new __WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].NoPermissionError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_i18n__["a" /* default */])('errors.api.auth.loginRequired')));
                break;
            default:
                if (userRole !== __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* ROLES */].VISITOR) {
                    next(new Error('Undefined role!'));
                    break;
                }
                next();
        }
    };
}

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const { PORT, API_HOST, WEBPACK_PORT } = process.env;
const LOCALHOST = 'localhost';
const makeOrigin = (host, port) => {
    if (port) {
        return `http://${host}:${port}`;
    }
    return `http://${host}`;
};
const ALLOWED_ORIGINS = [
// for production, using domain
makeOrigin(API_HOST), makeOrigin(LOCALHOST, PORT), makeOrigin(LOCALHOST, WEBPACK_PORT)];
const setHeader = (req, res, next) => {
    const origin = req.headers.origin;
    if (ALLOWED_ORIGINS.indexOf(origin) !== -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        // todo: CORS preflight needs this, but can it be other values?
        res.setHeader('Access-Control-Allow-Headers', 'content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
    }
    next();
};
/* harmony default export */ __webpack_exports__["a"] = setHeader;

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongodb__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongodb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongodb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__output_empty_entity__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_getMongoDBUrl__ = __webpack_require__(182);
/* harmony export (immutable) */ __webpack_exports__["a"] = connect;
/* unused harmony export getRowById */
/* unused harmony export getRowByMatch */
/* harmony export (immutable) */ __webpack_exports__["b"] = embedRef;




const MongoClient = __WEBPACK_IMPORTED_MODULE_0_mongodb___default.a.MongoClient;
function connect() {
    return MongoClient.connect(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_getMongoDBUrl__["a" /* default */])());
}
function getRowById(id, table) {
    return getRowByMatch({ _id: id }, table);
}
function getRowByMatch(match, table) {
    return connect().then(connection => {
        const results = connection.collection(table).find(match).toArray();
        connection.close();
        return results;
    });
}
const getRefFieldsWithIds = (rawResult, schema) => {
    return schema.fields.filter(field => {
        return typeof field.ref !== 'undefined';
    }).map(field => {
        let ids = rawResult[field.name];
        // 将 ids 通通转换为数组
        // 这里包括本该传数组却得到字符串被转换的情况
        if (!Array.isArray(ids)) {
            ids = [ids];
        }
        return Object.assign({}, field, { ids });
    });
};
// 并且添加相应错误信息
const handleRefResult = (rawRefResult, refSchema, id) => {
    if (typeof rawRefResult === 'object') {
        return rawRefResult;
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__output_empty_entity__["a" /* default */])(refSchema.fields, id);
};
const doesRefHaveRefInside = ref => {
    return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.filter(ref.fields, field => Boolean(field.ref)).length !== 0;
};
function embedRef(rawResults, schema) {
    if (rawResults.length === 0) {
        return Promise.resolve([]);
    }
    // 获取 ref 数据，生成由 ref 字段组成的对象
    const getRefFieldsWithData = fieldsWithRefIds => {
        const fieldsWithData = fieldsWithRefIds.map(field => {
            // 一个 field 里面的 ids 返回的查询结果
            return Promise.all(field.ids.map(id => {
                return getRowById(id, field.ref.name).then(results => {
                    const isRefInRef = doesRefHaveRefInside(field.ref);
                    const refSchema = field.ref;
                    if (isRefInRef) {
                        // 递归！！
                        return embedRef(results, refSchema).then(reRefedResult => handleRefResult(reRefedResult[0], refSchema, id));
                    }
                    return handleRefResult(results[0], refSchema, id);
                });
            })).then(refResults => {
                // 处理单个 ref field 数据，都是数组形式，最终是否为数组取决于 ref field 的 type
                let fieldData = refResults;
                if (!field.type || !field.type.isArray()) {
                    fieldData = refResults[0];
                }
                return {
                    name: field.name,
                    data: fieldData
                };
            });
        });
        return Promise.all(fieldsWithData).then(fields => {
            return fields.reduce((fieldsObj, field) => {
                return Object.assign({}, fieldsObj, {
                    [field.name]: field.data
                });
            }, {});
        });
    };
    return Promise.all(rawResults.map(rawResult => {
        const fieldsWithIds = getRefFieldsWithIds(rawResult, schema);
        return getRefFieldsWithData(fieldsWithIds).then(refObj => {
            return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.assign({}, rawResult, refObj);
        });
    }));
}
/* harmony default export */ __webpack_exports__["c"] = {
    embedRef,
    getRowByMatch,
    getRowById
};

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

let Schema = function () {
    function Schema(baseTable, fieldDefinition) {
        _classCallCheck(this, Schema);

        this._fieldDefinition = fieldDefinition;
        this._baseTable = baseTable;
    }

    _createClass(Schema, [{
        key: "name",
        get: function () {
            return this._baseTable;
        }
    }, {
        key: "fields",
        get: function () {
            return this._fieldDefinition;
        }
    }]);

    return Schema;
}();

/* harmony default export */ __webpack_exports__["a"] = Schema;

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errors__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (immutable) */ __webpack_exports__["a"] = validate;



const reduceTasks = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].reduceTasks;
const i18n = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].i18n;
function validate(data, schema, isEditing) {
    if (typeof data === 'undefined') {
        return Promise.reject(new __WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].BadRequestError(i18n('errors.validation.preCheck.emptyObject')));
    }
    const suppliedFields = Object.keys(data).filter(key => !__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isUndefined(data[key]));
    const suppliedFieldsInSchema = schema.fields.filter(field => !__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isUndefined(data[field.name]));
    const allFields = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.map(schema.fields, 'name');
    const requiredFields = schema.fields.filter(field => Boolean(field.required)).map(field => field.name);
    const unsupportedFields = suppliedFields.filter(key => allFields.indexOf(key) === -1);
    const missedFields = requiredFields.filter(key => suppliedFields.indexOf(key) === -1);
    if (unsupportedFields.length > 0) {
        return Promise.reject(new __WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].BadRequestError(i18n('errors.validation.preCheck.unsupportedInput', unsupportedFields[0])));
    }
    if (missedFields.length > 0 && !isEditing) {
        return Promise.reject(new __WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].BadRequestError(i18n('errors.validation.preCheck.missRequiredFields', missedFields[0])));
    }
    // 验证 fields，因为每个 field 可能有不止一个 validator
    const validateField = (val, validators) => {
        return reduceTasks(validators.map(validation => {
            if (validation.fn(val)) {
                return Promise.resolve(true);
            }
            return Promise.reject(new __WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].BadRequestError(validation.errorMsg));
        }));
    };
    // 所有 fields 验证一遍
    return reduceTasks(suppliedFieldsInSchema.map(field => {
        const validators = field.validators;
        if (validators) {
            return validateField(data[field.name], validators);
        }
        // 跳过未定义 validation 的 filed
        return Promise.resolve(true);
    }));
}

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_simple_epub_parser__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_simple_epub_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_simple_epub_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__txt_content__ = __webpack_require__(204);


/* harmony default export */ __webpack_exports__["a"] = { epub: __WEBPACK_IMPORTED_MODULE_0_simple_epub_parser___default.a, txtContent: __WEBPACK_IMPORTED_MODULE_1__txt_content__["a" /* default */] };

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = txtContent;
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
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
    return __awaiter(this, void 0, void 0, function* () {
        const nav = [{
            ref: 'part01',
            label: '第一章节',
            index: 0
        }];
        let content;
        if (typeof target === 'string') {
            const buffer = new Buffer(target, 'binary');
            content = buffer.toString();
        } else if (Buffer.isBuffer(target)) {
            content = target.toString();
        } else {
            throw new Error('Only string or buffer is supported!');
        }
        const flesh = [{
            src: 'part01',
            markdown: content
        }];
        return { nav, flesh };
    });
}

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_multer__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_multer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__endpoints__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__middleware__ = __webpack_require__(53);
/* harmony export (immutable) */ __webpack_exports__["a"] = setupApiApp;





const FORM_DATA_FILE_KEY = 'file';
const upload = __WEBPACK_IMPORTED_MODULE_1_multer___default()();
const authenticatePublic = [__WEBPACK_IMPORTED_MODULE_4__middleware__["a" /* default */].prepareApi, __WEBPACK_IMPORTED_MODULE_4__middleware__["a" /* default */].parseContext];
const authenticatePrivate = [__WEBPACK_IMPORTED_MODULE_4__middleware__["a" /* default */].prepareApi, __WEBPACK_IMPORTED_MODULE_4__middleware__["a" /* default */].parseContext, __WEBPACK_IMPORTED_MODULE_4__middleware__["a" /* default */].requirePermissionsOf(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* ROLES */].USER)];
const authenticateAdmin = [__WEBPACK_IMPORTED_MODULE_4__middleware__["a" /* default */].prepareApi, __WEBPACK_IMPORTED_MODULE_4__middleware__["a" /* default */].parseContext, __WEBPACK_IMPORTED_MODULE_4__middleware__["a" /* default */].requirePermissionsOf(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* ROLES */].ADMIN)];
function apiRoutes() {
    const router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();
    // authors
    router.get('/authors/:id', authenticatePublic, __WEBPACK_IMPORTED_MODULE_2__endpoints__["a" /* author */].findOne); // basic
    router.get('/authors', authenticatePublic, __WEBPACK_IMPORTED_MODULE_2__endpoints__["a" /* author */].list); // basic
    router.post('/authors', authenticatePublic, __WEBPACK_IMPORTED_MODULE_2__endpoints__["a" /* author */].add); // basic
    router.put('/authors/:id', authenticatePublic, __WEBPACK_IMPORTED_MODULE_2__endpoints__["a" /* author */].update); // basic
    router.delete('/authors/:id', authenticatePublic, __WEBPACK_IMPORTED_MODULE_2__endpoints__["a" /* author */].remove); // basic
    // collections
    router.get('/collections/:id', authenticatePublic, __WEBPACK_IMPORTED_MODULE_2__endpoints__["b" /* collection */].findOne); // basic
    router.get('/collections', authenticatePublic, __WEBPACK_IMPORTED_MODULE_2__endpoints__["c" /* listCollections */]);
    router.post('/collections', authenticatePublic, __WEBPACK_IMPORTED_MODULE_2__endpoints__["b" /* collection */].add); // basic
    router.put('/collections/:id', authenticatePublic, __WEBPACK_IMPORTED_MODULE_2__endpoints__["b" /* collection */].update); // basic
    router.delete('/collections/:id', authenticatePublic, __WEBPACK_IMPORTED_MODULE_2__endpoints__["b" /* collection */].remove); // basic
    // books
    router.get('/books/:book', authenticatePublic, __WEBPACK_IMPORTED_MODULE_2__endpoints__["d" /* findBook */]);
    router.get('/books/:book/content', authenticatePublic, __WEBPACK_IMPORTED_MODULE_2__endpoints__["e" /* resolveBookContent */]);
    router.get('/books', authenticatePublic, __WEBPACK_IMPORTED_MODULE_2__endpoints__["f" /* listBooks */]);
    // router.post('/books', authenticateAdmin, endpoints.book.add) // basic
    router.post('/books', authenticateAdmin, upload.single(FORM_DATA_FILE_KEY), __WEBPACK_IMPORTED_MODULE_4__middleware__["a" /* default */].logFile, __WEBPACK_IMPORTED_MODULE_2__endpoints__["g" /* addBook */]); // 处理文件
    router.put('/books/:book', authenticateAdmin, __WEBPACK_IMPORTED_MODULE_2__endpoints__["h" /* editBookMeta */]);
    router.delete('/books/:book', authenticateAdmin, __WEBPACK_IMPORTED_MODULE_2__endpoints__["i" /* removeBook */]);
    // tags
    router.get('/tags/:id', authenticatePublic, __WEBPACK_IMPORTED_MODULE_2__endpoints__["j" /* tag */].findOne); // basic
    router.get('/tags', authenticatePublic, __WEBPACK_IMPORTED_MODULE_2__endpoints__["j" /* tag */].list); // basic
    router.post('/tags', authenticatePublic, __WEBPACK_IMPORTED_MODULE_2__endpoints__["j" /* tag */].add); // basic
    router.put('/tags/:id', authenticatePublic, __WEBPACK_IMPORTED_MODULE_2__endpoints__["j" /* tag */].update); // basic
    router.delete('/tags/:id', authenticatePublic, __WEBPACK_IMPORTED_MODULE_2__endpoints__["j" /* tag */].remove); // basic
    // users
    router.get('/users', authenticateAdmin, __WEBPACK_IMPORTED_MODULE_2__endpoints__["k" /* user */].list); // basic
    router.post('/users', authenticatePublic, __WEBPACK_IMPORTED_MODULE_2__endpoints__["l" /* addUser */]);
    // user
    router.get('/user/profile', authenticatePrivate, __WEBPACK_IMPORTED_MODULE_2__endpoints__["m" /* findUser */]);
    router.get('/user/books/shelf', authenticatePrivate, __WEBPACK_IMPORTED_MODULE_2__endpoints__["n" /* listShelfBooks */]);
    // progress
    router.get('/user/books/:book/progress', authenticatePrivate, __WEBPACK_IMPORTED_MODULE_2__endpoints__["o" /* getReadingProgress */]);
    router.put('/user/books/:book/progress', authenticatePrivate, __WEBPACK_IMPORTED_MODULE_2__endpoints__["p" /* setReadingProgress */]);
    // file
    router.get('/files/:file', authenticateAdmin, __WEBPACK_IMPORTED_MODULE_2__endpoints__["q" /* readFile */]);
    router.delete('/files/:file', authenticateAdmin, __WEBPACK_IMPORTED_MODULE_2__endpoints__["r" /* delFile */]);
    // auth
    router.post('/auth', authenticatePublic, __WEBPACK_IMPORTED_MODULE_4__middleware__["a" /* default */].auth.basicAuth);
    router.get('/auth', authenticatePublic, __WEBPACK_IMPORTED_MODULE_4__middleware__["a" /* default */].auth.check);
    router.put('/auth/revoke', authenticatePublic, __WEBPACK_IMPORTED_MODULE_4__middleware__["a" /* default */].auth.revoke);
    return router;
}
function setupApiApp() {
    const apiApp = __WEBPACK_IMPORTED_MODULE_0_express___default()();
    apiApp.use(__WEBPACK_IMPORTED_MODULE_4__middleware__["a" /* default */].setHeader);
    apiApp.use(apiRoutes());
    apiApp.use(__WEBPACK_IMPORTED_MODULE_4__middleware__["a" /* default */].handleApiNotFound);
    apiApp.use(__WEBPACK_IMPORTED_MODULE_4__middleware__["a" /* default */].handleJSONResponse);
    apiApp.use(__WEBPACK_IMPORTED_MODULE_4__middleware__["a" /* default */].handleError);
    return apiApp;
}

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_routes__ = __webpack_require__(205);

/* harmony default export */ __webpack_exports__["a"] = {
    api: __WEBPACK_IMPORTED_MODULE_0__api_routes__["a" /* default */]
};

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
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

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/**
 * # Pipeline Utility (borrowed from Ghost)
 *
 * Based on pipeline.js from when.js:
 * https://github.com/cujojs/when/blob/3.7.4/pipeline.js
 */

function pipeline(tasks /* initial arguments */) {
    const args = Array.prototype.slice.call(arguments, 1);
    let runTask = (task, args) => {
        // Self-optimizing function to run first task with multiple
        // args using apply, but subsequent tasks via direct invocation
        runTask = (task, arg) => {
            return task(arg);
        };
        return task.apply(null, args);
    };
    // Resolve any promises for the arguments passed in first
    return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.all(args).then(args => {
        // Iterate through the tasks passing args from one into the next
        return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.reduce(tasks, (arg, task) => {
            return runTask(task, arg);
        }, args);
    });
}
/* harmony default export */ __webpack_exports__["a"] = pipeline;

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony export (immutable) */ __webpack_exports__["a"] = reduceTasks;

// tasks 可以是返回 Promise 的 fn
// 也可以是 Promise
function reduceTasks(tasks) {
    return __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a.reduce(tasks, (result, task) => {
        if (typeof task === 'function') {
            return task.call(this);
        }
        // 如果 task 是 Promise blue bird 貌似会自动把 promise resolve 出来，是 reject 直接就终止执行
        // 所以 写 task()#then 会出错
        return task;
    });
}

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sortByDate;
// 最新的在前面
// 最新的在前面
function sortByDate() {
    return (a, b) => {
        return new Date(b.date_updated).valueOf() - new Date(a.date_updated).valueOf();
    };
}

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__handleResponse__ = __webpack_require__(59);
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeResponse;

function normalizeResponse(resultPromise, schema) {
    return resultPromise.then(response => ({ response: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__handleResponse__["b" /* default */])(response, schema) }), error => ({ error }));
}

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getScreenInfo;
function getScreenInfo() {
    if (typeof window === 'undefined') {
        console.error('window is undefined, empty info object will be returned!');
        return {
            _screen: {}
        };
    }
    return {
        width: window.innerWidth,
        height: window.innerHeight,
        aspectRatio: window.innerWidth / window.innerHeight,
        _screen: window.screen
    };
}

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getScreenInfo__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isIE__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lockScroll__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__unlockScroll__ = __webpack_require__(216);




/* harmony default export */ __webpack_exports__["a"] = {
    getScreenInfo: __WEBPACK_IMPORTED_MODULE_0__getScreenInfo__["a" /* default */],
    isIE: __WEBPACK_IMPORTED_MODULE_1__isIE__["a" /* default */],
    lockScroll: __WEBPACK_IMPORTED_MODULE_2__lockScroll__["a" /* default */],
    unlockScroll: __WEBPACK_IMPORTED_MODULE_3__unlockScroll__["a" /* default */]
};

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isIE;
function isIE(ver) {
    if (typeof ver === 'undefined') {
        ver = null;
    }
    const b = document.createElement('b');
    b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->';
    return b.getElementsByTagName('i').length === 1;
}

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = lockScroll;
function lockScroll() {
    document.body.style.overflow = 'hidden';
}

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = unlockScroll;
function unlockScroll() {
    document.body.style.overflow = 'visible';
}

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isDescendant__ = __webpack_require__(29);

/* harmony default export */ __webpack_exports__["a"] = {
    isDescendant: __WEBPACK_IMPORTED_MODULE_0__isDescendant__["a" /* default */]
};

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__padNumberWithZero__ = __webpack_require__(62);
/* harmony export (immutable) */ __webpack_exports__["a"] = getCurrentTime;

function getCurrentTime() {
    const d = new Date();
    const time = [d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()];
    return time.map(t => {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__padNumberWithZero__["a" /* default */])(t);
    }).join('');
}

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_parseUrlencoded__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_api_jsonp__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_handleResponse__ = __webpack_require__(59);




const createCookieString = cookie => Object.keys(cookie).reduce((previous, key) => `${previous}${key}=${cookie[key]}; `, '');
const request = (url, config) => {
    const defaultConfig = {
        method: 'GET',
        cookie: true,
        dataType: 'json'
    };
    const parseConfig = () => {
        let credentials;
        let headers;
        let contentType;
        let body;
        let cookieString;
        const _config = Object.assign({}, defaultConfig, config);
        const { method, cookie, dataType, data, _rawInit } = _config;
        // parse contentType & body
        if (dataType === 'json') {
            contentType = 'application/json';
            body = JSON.stringify(data);
        } else if (dataType === 'urlencoded') {
            contentType = 'application/x-www-form-urlencoded';
            // todo: check encode fn
            body = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_parseUrlencoded__["a" /* default */])(data);
        } else {
            console.warn(`Unsupported dataType ${dataType}, 'urlencoded' will be used instead!`);
            contentType = 'application/x-www-form-urlencoded';
        }
        // parse cookie
        if (cookie === false) {
            credentials = 'omit';
        } else {
            credentials = 'include';
            if (typeof cookie === 'object') {
                cookieString = createCookieString(cookie);
            }
            if (typeof cookie === 'string') {
                cookieString = cookie;
            }
        }
        headers = {
            'Content-Type': contentType,
            'Access-Control-Request-Method': method,
            'Cookie': cookieString
        };
        return Object.assign({ method }, {
            headers,
            body,
            credentials
        }, _rawInit);
    };
    if (config.useJsonp) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_api_jsonp__["a" /* default */])(url);
    }
    const parsedConfig = parseConfig();
    let fullUrl = url;
    if (config.query) {
        // todo: fix '/' end
        fullUrl = `${url}?${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_parseUrlencoded__["a" /* default */])(config.query)}`;
    }
    return fetch(fullUrl, parsedConfig).then(response => {
        if (response.status !== 204) {
            return response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return { json, links: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api_handleResponse__["a" /* parseResHeaderToPagination */])(response) };
            });
        }
        return { json: {} };
    });
};
/* harmony default export */ __webpack_exports__["a"] = request;

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_api_callApi__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_api_normalizeResponse__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schemas__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["fetchNormalized"] = fetchNormalized;
/* harmony export (immutable) */ __webpack_exports__["addCollection"] = addCollection;
/* harmony export (immutable) */ __webpack_exports__["addBook"] = addBook;
/* harmony export (immutable) */ __webpack_exports__["editBookMeta"] = editBookMeta;
/* harmony export (immutable) */ __webpack_exports__["addAuthor"] = addAuthor;
/* harmony export (immutable) */ __webpack_exports__["setProgress"] = setProgress;
/* harmony export (immutable) */ __webpack_exports__["deleteBook"] = deleteBook;







const API_ROOT = __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* default */].getApiRoot();
/**
 * general helper functions
 */
const parseEndpointWithOptions = (endpoint, options) => {
    if (typeof options === 'string') {
        return options;
    } else {
        const queryString = __WEBPACK_IMPORTED_MODULE_5__utils__["a" /* default */].parseUrlencoded(options);
        return `${endpoint}?${queryString}`;
    }
};
function fetchNormalized(endpoint, schema, fetchOptions = {}) {
    if (endpoint.indexOf('http://') !== -1) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_api_normalizeResponse__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_api_callApi__["a" /* default */])(endpoint, fetchOptions), schema);
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_api_normalizeResponse__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_api_callApi__["a" /* default */])(`${API_ROOT}/${endpoint}`, fetchOptions), schema);
}
/**
 * specific api services
 */
const fetchBookProgress = id => {
    return fetchNormalized(`user/books/${id}/progress`, __WEBPACK_IMPORTED_MODULE_4__schemas__["a" /* default */].BOOK_PROGRESS);
};
/* harmony export (immutable) */ __webpack_exports__["fetchBookProgress"] = fetchBookProgress;

const fetchBook = id => {
    return fetchNormalized(`books/${id}`, __WEBPACK_IMPORTED_MODULE_4__schemas__["a" /* default */].BOOK);
};
/* harmony export (immutable) */ __webpack_exports__["fetchBook"] = fetchBook;

const fetchBookContent = id => {
    return fetchNormalized(`books/${id}/content`, __WEBPACK_IMPORTED_MODULE_4__schemas__["a" /* default */].BOOK_CONTENT);
};
/* harmony export (immutable) */ __webpack_exports__["fetchBookContent"] = fetchBookContent;

const fetchBooks = (options = {}) => {
    const { withContent } = options;
    let apiOptions = !withContent ? {
        exclude: 'content'
    } : {};
    apiOptions = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.assign({}, __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.omit(options, ['withContent']), apiOptions);
    return fetchNormalized(parseEndpointWithOptions('books', apiOptions), __WEBPACK_IMPORTED_MODULE_4__schemas__["a" /* default */].BOOK_ARRAY);
};
/* harmony export (immutable) */ __webpack_exports__["fetchBooks"] = fetchBooks;

const fetchUsers = options => {
    return fetchNormalized(parseEndpointWithOptions('users', options), __WEBPACK_IMPORTED_MODULE_4__schemas__["a" /* default */].USER_ARRAY);
};
/* harmony export (immutable) */ __webpack_exports__["fetchUsers"] = fetchUsers;

// external apis
const fetchDoubanBooks = keyword => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_api_callApi__["a" /* default */])(`${__WEBPACK_IMPORTED_MODULE_6__constants__["d" /* DOUBAN_API_ROOT */]}/book/search?count=10&q=${keyword}`, {
    useJsonp: true
});
/* harmony export (immutable) */ __webpack_exports__["fetchDoubanBooks"] = fetchDoubanBooks;

const userLogin = data => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_api_callApi__["a" /* default */])(`${API_ROOT}/auth`, {
    method: 'POST',
    data
});
/* harmony export (immutable) */ __webpack_exports__["userLogin"] = userLogin;

const userSignup = data => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_api_callApi__["a" /* default */])(`${API_ROOT}/users`, {
    method: 'POST',
    data
});
/* harmony export (immutable) */ __webpack_exports__["userSignup"] = userSignup;

const auth = () => {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_api_callApi__["a" /* default */])(`${API_ROOT}/auth`, {
        method: 'GET'
    });
};
/* harmony export (immutable) */ __webpack_exports__["auth"] = auth;

const logout = () => {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_api_callApi__["a" /* default */])(`${API_ROOT}/auth/revoke`, {
        method: 'PUT'
    });
};
/* harmony export (immutable) */ __webpack_exports__["logout"] = logout;

function addCollection(data) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_api_callApi__["a" /* default */])(`${API_ROOT}/collections`, { method: 'POST', data });
}
function addBook(data) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_api_callApi__["a" /* default */])(`${API_ROOT}/books`, { method: 'POST', data });
}
function editBookMeta(bookId, data) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_api_callApi__["a" /* default */])(`${API_ROOT}/books/${bookId}`, { method: 'PUT', data });
}
function addAuthor(data) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_api_callApi__["a" /* default */])(`${API_ROOT}/authors`, { method: 'POST', data });
}
function setProgress(bookId, data) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_api_callApi__["a" /* default */])(`${API_ROOT}/user/books/${bookId}/progress`, { method: 'PUT', data });
}
function deleteBook(id) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_api_callApi__["a" /* default */])(`${API_ROOT}/books/${id}`, {
        method: 'DELETE'
    });
}

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".alerts_1tIvD {\n  position: fixed;\n  width: 100%;\n  padding: 0 20px;\n  top: 10px;\n  left: 0;\n  z-index: 9999; }\n\n.alert_9eS9Y, .alert--success_34X_f, .alert--error_2Qv_8, .alert--warning_MfPIa {\n  padding: 10px 0;\n  font-size: 16px;\n  text-align: center;\n  background: #fff;\n  position: relative;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.32);\n  font-size: 1rem;\n  font-weight: bold;\n  border-radius: 3px;\n  width: 700px;\n  margin: 0 auto 10px; }\n  @media (max-width: 540px) {\n    .alert_9eS9Y, .alert--success_34X_f, .alert--error_2Qv_8, .alert--warning_MfPIa {\n      max-width: 100%; } }\n\n.content_1Xqwj {\n  overflow: hidden;\n  padding: 0 30px; }\n\n.alert-close_1fC9o {\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 11px;\n  display: inline-block; }\n\n.alert--success_34X_f {\n  background: #72efa8;\n  color: #204d33; }\n\n.alert--error_2Qv_8 {\n  background: #cc0000;\n  color: #fff; }\n\n.alert--warning_MfPIa {\n  background: orange;\n  color: black; }\n", ""]);

// exports
exports.locals = {
	"alerts": "alerts_1tIvD",
	"alert": "alert_9eS9Y",
	"alert--success": "alert--success_34X_f",
	"alert--error": "alert--error_2Qv_8",
	"alert--warning": "alert--warning_MfPIa",
	"content": "content_1Xqwj",
	"alert-close": "alert-close_1fC9o"
};

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".header_3lPrK {\n  text-align: center; }\n\n.title_1S9ou {\n  font-size: 1.6rem;\n  color: #222; }\n\n.body_1NxBf {\n  text-align: center;\n  width: 500px;\n  margin: 0 auto;\n  padding: 150px 0;\n  font-size: 1.1rem; }\n", ""]);

// exports
exports.locals = {
	"header": "header_3lPrK",
	"title": "title_1S9ou",
	"body": "body_1NxBf"
};

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".btn_XMRYz {\n  color: #fff;\n  background-color: #1B267F;\n  border-color: #1B267F;\n  padding: 3px 12px;\n  font-size: 1rem;\n  border-radius: 3px;\n  transition: all 0.2s 0s;\n  outline: none;\n  border: 1px solid transparent;\n  display: inline-block;\n  margin: 5px 0;\n  cursor: pointer; }\n  .btn_XMRYz:hover {\n    color: #fff;\n    background-color: #121955;\n    border-color: #10174d; }\n  .btn_XMRYz:focus, .btn_XMRYz.focus_rfb5S {\n    color: #fff;\n    background-color: #121955;\n    border-color: #10174d;\n    box-shadow: 0 0 0 1px #fff, 0 0 0 3px #2433a9; }\n  .btn_XMRYz:active, .btn_XMRYz.active_p2s1P {\n    color: #fff;\n    background-color: #121955;\n    border-color: #10174d;\n    background-image: none;\n    box-shadow: 0 0 0 1px #fff, 0 0 0 3px #2433a9; }\n    .btn_XMRYz:active:hover, .btn_XMRYz:active:focus, .btn_XMRYz:active.focus_rfb5S, .btn_XMRYz.active_p2s1P:hover, .btn_XMRYz.active_p2s1P:focus, .btn_XMRYz.active_p2s1P.focus_rfb5S {\n      color: #fff;\n      background-color: #0c1138;\n      border-color: #050716;\n      box-shadow: 0 0 0 1px #fff, 0 0 0 3px #2433a9 !important; }\n  .btn_XMRYz.disabled_8YQX-:focus, .btn_XMRYz.disabled_8YQX-.focus_rfb5S, .btn_XMRYz:disabled:focus, .btn_XMRYz:disabled.focus_rfb5S {\n    background-color: #1B267F;\n    border-color: #1B267F; }\n  .btn_XMRYz.disabled_8YQX-:hover, .btn_XMRYz:disabled:hover {\n    background-color: #1B267F;\n    border-color: #1B267F; }\n  .btn_XMRYz.disabled_8YQX-, .btn_XMRYz:disabled {\n    cursor: not-allowed;\n    opacity: .65; }\n  .btn_XMRYz:active:hover {\n    box-shadow: none; }\n\n.btn--hover_2klnD {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n\n.btn_XMRYz.btn--blue_2BxwK {\n  color: #fff;\n  background-color: #1B267F;\n  border-color: #1B267F; }\n  .btn_XMRYz.btn--blue_2BxwK:hover {\n    color: #fff;\n    background-color: #121955;\n    border-color: #10174d; }\n  .btn_XMRYz.btn--blue_2BxwK:focus, .btn_XMRYz.btn--blue_2BxwK.focus_rfb5S {\n    color: #fff;\n    background-color: #121955;\n    border-color: #10174d;\n    box-shadow: 0 0 0 1px #fff, 0 0 0 3px #2433a9; }\n  .btn_XMRYz.btn--blue_2BxwK:active, .btn_XMRYz.btn--blue_2BxwK.active_p2s1P {\n    color: #fff;\n    background-color: #121955;\n    border-color: #10174d;\n    background-image: none;\n    box-shadow: 0 0 0 1px #fff, 0 0 0 3px #2433a9; }\n    .btn_XMRYz.btn--blue_2BxwK:active:hover, .btn_XMRYz.btn--blue_2BxwK:active:focus, .btn_XMRYz.btn--blue_2BxwK:active.focus_rfb5S, .btn_XMRYz.btn--blue_2BxwK.active_p2s1P:hover, .btn_XMRYz.btn--blue_2BxwK.active_p2s1P:focus, .btn_XMRYz.btn--blue_2BxwK.active_p2s1P.focus_rfb5S {\n      color: #fff;\n      background-color: #0c1138;\n      border-color: #050716;\n      box-shadow: 0 0 0 1px #fff, 0 0 0 3px #2433a9 !important; }\n  .btn_XMRYz.btn--blue_2BxwK.disabled_8YQX-:focus, .btn_XMRYz.btn--blue_2BxwK.disabled_8YQX-.focus_rfb5S, .btn_XMRYz.btn--blue_2BxwK:disabled:focus, .btn_XMRYz.btn--blue_2BxwK:disabled.focus_rfb5S {\n    background-color: #1B267F;\n    border-color: #1B267F; }\n  .btn_XMRYz.btn--blue_2BxwK.disabled_8YQX-:hover, .btn_XMRYz.btn--blue_2BxwK:disabled:hover {\n    background-color: #1B267F;\n    border-color: #1B267F; }\n\n.btn_XMRYz.btn--orange_ZQ7Eq {\n  color: #fff;\n  background-color: #ee9333;\n  border-color: #ee9333; }\n  .btn_XMRYz.btn--orange_ZQ7Eq:hover {\n    color: #fff;\n    background-color: #dc7a12;\n    border-color: #d27412; }\n  .btn_XMRYz.btn--orange_ZQ7Eq:focus, .btn_XMRYz.btn--orange_ZQ7Eq.focus_rfb5S {\n    color: #fff;\n    background-color: #dc7a12;\n    border-color: #d27412;\n    box-shadow: 0 0 0 1px #fff, 0 0 0 3px #f2ac62; }\n  .btn_XMRYz.btn--orange_ZQ7Eq:active, .btn_XMRYz.btn--orange_ZQ7Eq.active_p2s1P {\n    color: #fff;\n    background-color: #dc7a12;\n    border-color: #d27412;\n    background-image: none;\n    box-shadow: 0 0 0 1px #fff, 0 0 0 3px #f2ac62; }\n    .btn_XMRYz.btn--orange_ZQ7Eq:active:hover, .btn_XMRYz.btn--orange_ZQ7Eq:active:focus, .btn_XMRYz.btn--orange_ZQ7Eq:active.focus_rfb5S, .btn_XMRYz.btn--orange_ZQ7Eq.active_p2s1P:hover, .btn_XMRYz.btn--orange_ZQ7Eq.active_p2s1P:focus, .btn_XMRYz.btn--orange_ZQ7Eq.active_p2s1P.focus_rfb5S {\n      color: #fff;\n      background-color: #bb6710;\n      border-color: #95530c;\n      box-shadow: 0 0 0 1px #fff, 0 0 0 3px #f2ac62 !important; }\n  .btn_XMRYz.btn--orange_ZQ7Eq.disabled_8YQX-:focus, .btn_XMRYz.btn--orange_ZQ7Eq.disabled_8YQX-.focus_rfb5S, .btn_XMRYz.btn--orange_ZQ7Eq:disabled:focus, .btn_XMRYz.btn--orange_ZQ7Eq:disabled.focus_rfb5S {\n    background-color: #ee9333;\n    border-color: #ee9333; }\n  .btn_XMRYz.btn--orange_ZQ7Eq.disabled_8YQX-:hover, .btn_XMRYz.btn--orange_ZQ7Eq:disabled:hover {\n    background-color: #ee9333;\n    border-color: #ee9333; }\n\n.btn_XMRYz.btn--red_381qh {\n  color: #fff;\n  background-color: #d42020;\n  border-color: #d42020; }\n  .btn_XMRYz.btn--red_381qh:hover {\n    color: #fff;\n    background-color: #a81919;\n    border-color: #9f1818; }\n  .btn_XMRYz.btn--red_381qh:focus, .btn_XMRYz.btn--red_381qh.focus_rfb5S {\n    color: #fff;\n    background-color: #a81919;\n    border-color: #9f1818;\n    box-shadow: 0 0 0 1px #fff, 0 0 0 3px #e34444; }\n  .btn_XMRYz.btn--red_381qh:active, .btn_XMRYz.btn--red_381qh.active_p2s1P {\n    color: #fff;\n    background-color: #a81919;\n    border-color: #9f1818;\n    background-image: none;\n    box-shadow: 0 0 0 1px #fff, 0 0 0 3px #e34444; }\n    .btn_XMRYz.btn--red_381qh:active:hover, .btn_XMRYz.btn--red_381qh:active:focus, .btn_XMRYz.btn--red_381qh:active.focus_rfb5S, .btn_XMRYz.btn--red_381qh.active_p2s1P:hover, .btn_XMRYz.btn--red_381qh.active_p2s1P:focus, .btn_XMRYz.btn--red_381qh.active_p2s1P.focus_rfb5S {\n      color: #fff;\n      background-color: #891515;\n      border-color: #650f0f;\n      box-shadow: 0 0 0 1px #fff, 0 0 0 3px #e34444 !important; }\n  .btn_XMRYz.btn--red_381qh.disabled_8YQX-:focus, .btn_XMRYz.btn--red_381qh.disabled_8YQX-.focus_rfb5S, .btn_XMRYz.btn--red_381qh:disabled:focus, .btn_XMRYz.btn--red_381qh:disabled.focus_rfb5S {\n    background-color: #d42020;\n    border-color: #d42020; }\n  .btn_XMRYz.btn--red_381qh.disabled_8YQX-:hover, .btn_XMRYz.btn--red_381qh:disabled:hover {\n    background-color: #d42020;\n    border-color: #d42020; }\n\n.btn_XMRYz.btn--white_1W9tG {\n  color: #333;\n  background-color: #fff;\n  border-color: #fff; }\n  .btn_XMRYz.btn--white_1W9tG:hover {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #e0e0e0; }\n  .btn_XMRYz.btn--white_1W9tG:focus, .btn_XMRYz.btn--white_1W9tG.focus_rfb5S {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #e0e0e0;\n    box-shadow: 0 0 0 1px #fff, 0 0 0 3px white; }\n  .btn_XMRYz.btn--white_1W9tG:active, .btn_XMRYz.btn--white_1W9tG.active_p2s1P {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #e0e0e0;\n    background-image: none;\n    box-shadow: 0 0 0 1px #fff, 0 0 0 3px white; }\n    .btn_XMRYz.btn--white_1W9tG:active:hover, .btn_XMRYz.btn--white_1W9tG:active:focus, .btn_XMRYz.btn--white_1W9tG:active.focus_rfb5S, .btn_XMRYz.btn--white_1W9tG.active_p2s1P:hover, .btn_XMRYz.btn--white_1W9tG.active_p2s1P:focus, .btn_XMRYz.btn--white_1W9tG.active_p2s1P.focus_rfb5S {\n      color: #333;\n      background-color: #d4d4d4;\n      border-color: #bfbfbf;\n      box-shadow: 0 0 0 1px #fff, 0 0 0 3px white !important; }\n  .btn_XMRYz.btn--white_1W9tG.disabled_8YQX-:focus, .btn_XMRYz.btn--white_1W9tG.disabled_8YQX-.focus_rfb5S, .btn_XMRYz.btn--white_1W9tG:disabled:focus, .btn_XMRYz.btn--white_1W9tG:disabled.focus_rfb5S {\n    background-color: #fff;\n    border-color: #fff; }\n  .btn_XMRYz.btn--white_1W9tG.disabled_8YQX-:hover, .btn_XMRYz.btn--white_1W9tG:disabled:hover {\n    background-color: #fff;\n    border-color: #fff; }\n", ""]);

// exports
exports.locals = {
	"btn": "btn_XMRYz",
	"focus": "focus_rfb5S",
	"active": "active_p2s1P",
	"disabled": "disabled_8YQX-",
	"btn--hover": "btn--hover_2klnD",
	"btn--blue": "btn--blue_2BxwK",
	"btn--orange": "btn--orange_ZQ7Eq",
	"btn--red": "btn--red_381qh",
	"btn--white": "btn--white_1W9tG"
};

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".colophon_j1kR3 {\n  font-size: 1rem;\n  padding: 20px 0;\n  color: #999; }\n", ""]);

// exports
exports.locals = {
	"colophon": "colophon_j1kR3"
};

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports
exports.i(__webpack_require__(37), undefined);

// module
exports.push([module.i, ".branding_3B2rm {\n  background: #1B267F;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 800;\n  height: 60px; }\n\n.sep_1_3hI {\n  margin: 0 10px;\n  opacity: .6;\n  font-size: 1rem; }\n\n.sub_39zJY {\n  opacity: .8;\n  font-size: 1.2rem;\n  text-transform: uppercase;\n  margin-top: -3px;\n  display: inline-block; }\n\n.right_2Sgoc {\n  float: right; }\n\n.sub-name_1E0Jo {\n  float: left;\n  margin-left: 15px; }\n  .sub-name_1E0Jo span {\n    display: inline-block;\n    line-height: 60px;\n    height: 60px;\n    color: #fff; }\n\n.nav_1fxmN {\n  color: #fff;\n  line-height: 60px;\n  height: 60px; }\n", ""]);

// exports
exports.locals = {
	"branding": "branding_3B2rm",
	"sep": "sep_1_3hI",
	"sub": "sub_39zJY",
	"right": "right_2Sgoc",
	"sub-name": "sub-name_1E0Jo",
	"nav": "nav_1fxmN " + __webpack_require__(37).locals["nav"] + ""
};

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".sidebar-left_1iTu9 {\n  position: fixed;\n  left: 0;\n  top: 60px;\n  height: 100%;\n  width: 300px;\n  background: #E4E4E4; }\n\n.nav-side_1Rzzy {\n  position: fixed;\n  left: 0;\n  height: 100%; }\n\n.nav-side-root_3wgeK {\n  width: 80px;\n  background: #04082E; }\n\n.nav-side-root--current_4674B {\n  background: red; }\n\n.nav-side-sub_3FAdg {\n  width: 220px;\n  left: 80px; }\n\n/* item */\n.nav-item_2cqK9 {\n  height: 50px;\n  line-height: 50px; }\n  .nav-item_2cqK9 a {\n    display: block;\n    padding: 0 15px;\n    color: #fff;\n    height: 50px; }\n\n.icon_kvHOl {\n  margin-top: 12px; }\n\n.root-item_3RIxA {\n  text-align: center; }\n  .root-item_3RIxA a:hover {\n    background: black; }\n\n.root-item--current_3UXxB {\n  background: #1B267F; }\n\n.sub-item_1jr20 { }\n  .sub-item_1jr20 a {\n    color: #666; }\n  .sub-item_1jr20 a:hover {\n    background: gray(200); }\n\n.sub-item--current_2YLDP { }\n  .sub-item--current_2YLDP a,\n  .sub-item--current_2YLDP a:hover {\n    color: #1B267F;\n    background: #fff; }\n", ""]);

// exports
exports.locals = {
	"sidebar-left": "sidebar-left_1iTu9",
	"nav-side": "nav-side_1Rzzy",
	"nav-side-root": "nav-side-root_3wgeK nav-side_1Rzzy",
	"nav-side-root--current": "nav-side-root--current_4674B nav-side-root_3wgeK nav-side_1Rzzy",
	"nav-side-sub": "nav-side-sub_3FAdg nav-side_1Rzzy",
	"nav-item": "nav-item_2cqK9",
	"icon": "icon_kvHOl",
	"root-item": "root-item_3RIxA nav-item_2cqK9",
	"root-item--current": "root-item--current_3UXxB root-item_3RIxA nav-item_2cqK9",
	"sub-item": "sub-item_1jr20 nav-item_2cqK9",
	"sub-item--current": "sub-item--current_2YLDP sub-item_1jr20 nav-item_2cqK9"
};

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".dropdown-item_XFcbL {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.light-link_ZiwxI {\n  color: #ddd; }\n  .light-link_ZiwxI:hover {\n    color: #fff; }\n\n.dropdown_3P4JX {\n  display: inline-block;\n  cursor: pointer;\n  position: relative;\n  height: inherit; }\n\n.dropdown-toggle_2E3V1 {\n  display: block;\n  user-select: none;\n  -webkit-user-select: none;\n  max-height: 100%; }\n\n.dropdown-menu_1nMO4 {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.22);\n  line-height: 2.2;\n  font-size: 1rem;\n  text-align: left;\n  background: #222;\n  position: absolute;\n  right: 0;\n  width: 150px;\n  overflow: hidden;\n  padding: 5px 0;\n  z-index: 900; }\n\n.dropdown-caret_26jVH {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  vertical-align: middle;\n  content: \"\";\n  border: 4px solid;\n  border-right-color: transparent;\n  border-bottom-color: transparent;\n  border-left-color: transparent;\n  margin-left: 5px; }\n\n.dropdown-item_XFcbL {\n  display: block;\n  padding: 0 25px;\n  transition: all 0s; }\n  .dropdown-item_XFcbL:hover {\n    background: #3c3c3c; }\n  .dropdown-item_XFcbL:active {\n    background: #3c3c3c; }\n\n.sep_1VAnF {\n  margin: 5px 0;\n  height: 1px;\n  background: #3c3c3c; }\n\n.dropdown-menu--dark_22QR5 {\n  background: #1B267F; }\n  .dropdown-menu--dark_22QR5 .sep_1VAnF {\n    background: #1f2c94; }\n  .dropdown-menu--dark_22QR5 .dropdown-item_XFcbL:hover {\n    background: #1f2c94; }\n", ""]);

// exports
exports.locals = {
	"dropdown-item": "dropdown-item_XFcbL light-link_ZiwxI",
	"light-link": "light-link_ZiwxI",
	"dropdown": "dropdown_3P4JX",
	"dropdown-toggle": "dropdown-toggle_2E3V1",
	"dropdown-menu": "dropdown-menu_1nMO4",
	"dropdown-caret": "dropdown-caret_26jVH",
	"sep": "sep_1VAnF",
	"dropdown-menu--dark": "dropdown-menu--dark_22QR5 dropdown-menu_1nMO4"
};

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":root {\n  --time: .3s; }\n\n.enter_4NggM {\n  opacity: 0.01;\n  transition: opacity var(--time) ease-in; }\n\n.enterActive_2X3Rh {\n  opacity: 1; }\n\n.leave_3Z-4r {\n  opacity: 1;\n  transition: opacity var(--time) ease-in; }\n\n.leaveActive_2yD2v {\n  opacity: 0; }\n", ""]);

// exports
exports.locals = {
	"enter": "enter_4NggM",
	"enterActive": "enterActive_2X3Rh",
	"leave": "leave_3Z-4r",
	"leaveActive": "leaveActive_2yD2v"
};

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".svg-shape_2SBH- {\n  fill: currentColor;\n  overflow: hidden; }\n\n.icon_66GYG {\n  display: inline-block;\n  position: relative; }\n", ""]);

// exports
exports.locals = {
	"svg-shape": "svg-shape_2SBH-",
	"icon": "icon_66GYG"
};

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".input-wrap_YTHkJ, .input-wrap--error_-brlk {\n  margin: 10px 0;\n  position: relative; }\n\n.input_5vxBY {\n  width: 100%;\n  padding: 5px 5px;\n  border: 1px solid #ddd;\n  transition: border-color .3s;\n  line-height: 25px;\n  outline: none; }\n\n.input_5vxBY:focus {\n  border-color: #1B267F; }\n\n.input-wrap--error_-brlk .input_5vxBY {\n  border-color: #cc0000; }\n\n.error-msg_19MVh {\n  position: absolute;\n  right: 10px;\n  top: 6px;\n  line-height: 25px;\n  color: #cc0000; }\n", ""]);

// exports
exports.locals = {
	"input-wrap": "input-wrap_YTHkJ",
	"input-wrap--error": "input-wrap--error_-brlk",
	"input": "input_5vxBY",
	"error-msg": "error-msg_19MVh"
};

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".logo-wrap_1aLoA {\n  margin: 0;\n  line-height: 60px;\n  color: #fff;\n  margin-top: -3px;\n  display: inline-block; }\n\n.logo_35NyS {\n  background: url(" + __webpack_require__(238) + ") no-repeat left;\n  width: 70px;\n  height: 60px;\n  background-size: 70px;\n  text-indent: -999em;\n  display: inline-block; }\n\n.logo--dark_2shYM {\n  background: url(" + __webpack_require__(237) + ") no-repeat left;\n  background-size: 70px; }\n", ""]);

// exports
exports.locals = {
	"logo-wrap": "logo-wrap_1aLoA",
	"logo": "logo_35NyS",
	"logo--dark": "logo--dark_2shYM logo_35NyS"
};

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".modal_9QpxU {\n  background: #fff;\n  padding: 0;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);\n  border-radius: 3px; }\n  .modal_9QpxU .icon-close_2kZw3 {\n    cursor: pointer; }\n\n.modal-backdrop_3trxs {\n  z-index: 900; }\n\n.modal-body_PWCkH {\n  margin: 10px 0 0; }\n\n.modal-header_1KgC3 {\n  margin: 10px 0; }\n\n.modal-title_310bp {\n  font-size: 1.4rem;\n  font-weight: normal;\n  color: #333;\n  margin: 5px 0; }\n\n.modal-footer_pCffa {\n  border-top: 3px solid #e9ebf2;\n  text-align: right;\n  overflow: hidden; }\n  .modal-footer_pCffa .btn-red_38Zz5 {\n    float: left;\n    margin-left: 0; }\n  .modal-footer_pCffa button {\n    margin: 5px 0 5px 10px; }\n\n.modal-content_2tIvb {\n  margin: 15px 0;\n  line-height: 1.5; }\n\n.confirm-modal_lz_tb {\n  background: #fff;\n  padding: 20px 30px; }\n  .confirm-modal_lz_tb p {\n    font-size: 1.2rem; }\n\n.modal-plus_2u3At {\n  padding: 20px 30px; }\n", ""]);

// exports
exports.locals = {
	"modal": "modal_9QpxU",
	"icon-close": "icon-close_2kZw3",
	"modal-backdrop": "modal-backdrop_3trxs",
	"modal-body": "modal-body_PWCkH",
	"modal-header": "modal-header_1KgC3",
	"modal-title": "modal-title_310bp",
	"modal-footer": "modal-footer_pCffa",
	"btn-red": "btn-red_38Zz5",
	"modal-content": "modal-content_2tIvb",
	"confirm-modal": "confirm-modal_lz_tb",
	"modal-plus": "modal-plus_2u3At"
};

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".modal-footer_WHxcY button {\n  margin-right: 10px; }\n", ""]);

// exports
exports.locals = {
	"modal-footer": "modal-footer_WHxcY"
};

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".selectize-wrap_1BcA5 {\n  margin: 10px 0;\n  position: relative; }\n\n.selectize-input_248xW {\n  min-width: 300px;\n  border: 1px solid #ddd;\n  margin: 10px 0;\n  box-sizing: border-box;\n  transition: all 0s;\n  cursor: text;\n  background: #fff; }\n  .selectize-input_248xW input {\n    background: transparent;\n    line-height: 22px; }\n\n.selectize-input--focus_3llwR {\n  border-color: #1B267F; }\n\n.selectize-input--empty_3RpVN {\n  background: #fff;\n  padding: 5px 5px 0; }\n\n.selectize-input_248xW input {\n  border: none;\n  outline: none;\n  margin-bottom: 5px; }\n\n.query-results_2aXfo {\n  margin-top: -3px;\n  margin-bottom: 5px;\n  padding: 5px;\n  border-radius: 3px;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.32);\n  background: #fff;\n  z-index: 900; }\n\n.query-results_2aXfo li {\n  padding: 0 7px;\n  line-height: 2;\n  cursor: pointer;\n  border-radius: 3px; }\n  .query-results_2aXfo li:hover {\n    background: #1B267F;\n    color: #fff; }\n\n.selectize-tag_KLDw8 {\n  background: #1B267F;\n  cursor: pointer;\n  border-radius: 3px;\n  padding: 3px 25px 3px 5px;\n  margin: 5px;\n  color: #fff;\n  display: inline-block;\n  position: relative; }\n\n.icon-remove_3f7V2 {\n  font-size: 0.8rem;\n  margin-left: 5px;\n  position: absolute;\n  right: 5px;\n  top: 2px; }\n", ""]);

// exports
exports.locals = {
	"selectize-wrap": "selectize-wrap_1BcA5",
	"selectize-input": "selectize-input_248xW",
	"selectize-input--focus": "selectize-input--focus_3llwR",
	"selectize-input--empty": "selectize-input--empty_3RpVN",
	"query-results": "query-results_2aXfo",
	"selectize-tag": "selectize-tag_KLDw8",
	"icon-remove": "icon-remove_3f7V2"
};

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".textarea-wrap_1Wwgp {\n  margin: 10px 0;\n  position: relative; }\n\n.textarea_2QMlV {\n  width: 100%;\n  padding: 5px;\n  border: 1px solid #ddd;\n  outline: none;\n  height: 100px;\n  transition: border-color .3s; }\n\n.textarea_2QMlV:focus {\n  border-color: #1B267F; }\n", ""]);

// exports
exports.locals = {
	"textarea-wrap": "textarea-wrap_1Wwgp",
	"textarea": "textarea_2QMlV"
};

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".content_21T97 {\n  margin: 0 auto;\n  width: 550px;\n  position: relative;\n  overflow: hidden;\n  line-height: 1.9; }\n  .content_21T97 p {\n    margin: 0;\n    min-height: 25px; }\n\n.page_3Tp6I {\n  display: block;\n  width: 100%;\n  overflow: hidden; }\n\n.page--fluid_1rlYj { }\n  .page--fluid_1rlYj .content_21T97 {\n    width: 100%;\n    padding: 0 20px; }\n\n.page--init_32nRm {\n  position: relative;\n  height: auto; }\n  .page--init_32nRm .content_21T97 {\n    height: auto; }\n\n.gb-line_1I04_ {\n  overflow: hidden; }\n\n.page-no_2YMG3 {\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-top: 1px solid #e6e6e6;\n  padding: 0 10px;\n  color: #e6e6e6;\n  font-size: 0.8rem; }\n\n.white_12gOp {\n  color: #333; }\n\n.night_2gn4k {\n  color: #eee; }\n  .night_2gn4k a {\n    color: #fff;\n    text-decoration: underline; }\n\n.sepia_1MgpS {\n  color: #503220; }\n", ""]);

// exports
exports.locals = {
	"content": "content_21T97",
	"page": "page_3Tp6I",
	"page--fluid": "page--fluid_1rlYj page_3Tp6I",
	"page--init": "page--init_32nRm",
	"gb-line": "gb-line_1I04_",
	"page-no": "page-no_2YMG3",
	"white": "white_12gOp",
	"night": "night_2gn4k",
	"sepia": "sepia_1MgpS"
};

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/logo-dark.4754e8aa78.png";

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/logo.81eb83d7f7.png";

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(222);
    var insertCss = __webpack_require__(3);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./AppError.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./AppError.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(37);
    var insertCss = __webpack_require__(3);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Branding.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Branding.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(223);
    var insertCss = __webpack_require__(3);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./_button.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./_button.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(224);
    var insertCss = __webpack_require__(3);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Colophon.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Colophon.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(225);
    var insertCss = __webpack_require__(3);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./ConsoleBranding.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./ConsoleBranding.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(226);
    var insertCss = __webpack_require__(3);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./ConsoleSidebar.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./ConsoleSidebar.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(228);
    var insertCss = __webpack_require__(3);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Fade.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Fade.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(229);
    var insertCss = __webpack_require__(3);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Icon.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Icon.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(230);
    var insertCss = __webpack_require__(3);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Input.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Input.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(231);
    var insertCss = __webpack_require__(3);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Logo.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Logo.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(233);
    var insertCss = __webpack_require__(3);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./ModalFooter.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./ModalFooter.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(234);
    var insertCss = __webpack_require__(3);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./SelectizeInput.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./SelectizeInput.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(235);
    var insertCss = __webpack_require__(3);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Textarea.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Textarea.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 252 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 253 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 254 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 256 */
/***/ (function(module, exports) {

module.exports = require("colors/safe");

/***/ }),
/* 257 */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),
/* 258 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 259 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 260 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 261 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 262 */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),
/* 263 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 264 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 265 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 266 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 267 */
/***/ (function(module, exports) {

module.exports = require("react-side-effect");

/***/ }),
/* 268 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 269 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 270 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 271 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 272 */
/***/ (function(module, exports) {

module.exports = require("simple-epub-parser");

/***/ }),
/* 273 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(70);


/***/ }),
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
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
/* 314 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
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
/* 329 */,
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
/* 394 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 395 */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),
/* 396 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map